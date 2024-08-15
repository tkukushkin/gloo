package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
	"time"
)

// This tool is designed to read in a test log, process it through test2json, then
// parse through the output for pass, fail, or skip outcomes and log them all together.

// This will also output a list of all leaf-node tests ran to produce the output.
// This can be used to determine if a new test was properly run or not.
func main() {
	b, err := readTestOutput()
	if err != nil {
		os.Exit(1)
	}

	allEvents, err := parseTestOutput(b)
	if err != nil {
		os.Exit(1)
	}

	resultEvents := selectResultEvents(allEvents)

	leafNodeResults := selectLeafNodes(resultEvents)

	fmt.Println(leafNodeResults)

}

func readTestOutput() ([]byte, error) {
	fname := filepath.Join("_test", "test_log", "go-test-json")
	f, err := os.ReadFile(fname)
	if err != nil {
		return nil, err
	}
	return f, nil
}

// event is the JSON struct emitted by test2json.
// https://cs.opensource.google/go/go/+/refs/tags/go1.23.0:src/cmd/internal/test2json/test2json.go
type event struct {
	Time    *time.Time `json:",omitempty"`
	Action  string     `json:",omitempty"`
	Package string     `json:",omitempty"`
	Test    string     `json:",omitempty"`
	Elapsed float64    `json:",omitempty"`
	Output  string     `json:",omitempty"`
}

func parseTestOutput(in []byte) ([]*event, error) {
	rawEvents := bytes.Split(in, []byte{'\n'})
	events := []*event{}
	for _, rawEvent := range rawEvents {
		if len(rawEvent) == 0 {
			continue
		}
		fmt.Println(string(rawEvent))
		ev := &event{}
		if err := json.Unmarshal(rawEvent, ev); err != nil {
			log.Println(err)
			return nil, err
		}
		events = append(events, ev)
		fmt.Println(ev)
	}
	log.Printf("returning %d total events\n", len(events))
	return events, nil
}

func selectResultEvents(allEvents []*event) []*event {
	resultEvents := []*event{}
	for _, ev := range allEvents {
		if ev.Test != "" && (ev.Action == "pass" ||
			ev.Action == "fail" ||
			ev.Action == "skip") {
			resultEvents = append(resultEvents, ev)
		}
	}
	return resultEvents
}

type pathWithEvent struct {
	path []string
	ev   *event
}
type multitree struct {
	trees []*tree
}

func (m *multitree) leafNodes() []*node {
	var result []*node
	for _, subtree := range m.trees {
		result = append(result, subtree.leafNodes()...)
	}

	return result
}

func (m *multitree) pushString(s string, ev *event) {
	parts := strings.Split(s, "/")
	if len(parts) == 0 {
		return
	}

	rootPart := parts[0]
	var owningTree *tree
	for _, subtree := range m.trees {
		if subtree.root.data == rootPart {
			owningTree = subtree
			break
		}
	}
	if owningTree == nil {
		owningTree = m.newSubtreeFromString(rootPart, ev)
	}

	owningTree.insert(&pathWithEvent{
		path: parts,
		ev:   ev,
	})
}

func (m *multitree) newSubtreeFromString(s string, ev *event) *tree {
	newTree := &tree{
		root: &node{
			data:     s,
			ev:       ev,
			children: []*node{},
			parent:   &node{},
		},
		nodes: []*node{},
	}
	m.trees = append(m.trees, newTree)
	return newTree
}

type tree struct {
	root  *node
	nodes []*node
}

func (t *tree) leafNodes() []*node {
	if t.root == nil {
		return nil
	}

	if len(t.root.children) == 0 {
		return []*node{t.root}
	}

	result := []*node{}
	for _, child := range t.root.children {
		result = append(result, t.leafNodesRec(child)...)
	}

	return result
}

func (t *tree) leafNodesRec(n *node) []*node {
	result := []*node{}
	if len(n.children) == 0 {
		return []*node{n}
	}
	for _, child := range n.children {
		result = append(result, t.leafNodesRec(child)...)
	}
	return result
}

func (t *tree) insert(p *pathWithEvent) {
	if len(p.path) == 0 {
		return
	}
	if t.root == nil {
		t.root = &node{
			data: p.path[0],
		}
	}
	t.insertRec(t.root, p)
}

func (t *tree) insertRec(n *node, p *pathWithEvent) *node {
	// we have reached the leaf; return the node we are at
	if len(p.path) == 0 {
		return n
	}
	if t.root == nil || n == nil {
		// shouldn't happen since we set in insert
		return nil
	}

	// check if we have an existing subtree to go down
	for _, child := range n.children {
		if child.data == p.path[0] {
			grandchild := t.insertRec(child, &pathWithEvent{
				path: p.path[1:len(p.path)],
				ev:   p.ev,
			})
			child.children = append(child.children, grandchild)
			return grandchild
		}
	}

	// create a new child node
	newChild := &node{
		data:   p.path[0],
		parent: n,
	}

	n.children = append(n.children, t.insertRec(newChild, &pathWithEvent{
		path: p.path[1:len(p.path)],
		ev:   p.ev,
	}))

	return newChild

}

type node struct {
	data     string
	ev       *event
	children []*node
	parent   *node
}

func selectLeafNodes(events []*event) []*event {
	t := &multitree{}
	result := []*event{}

	for _, ev := range events {
		log.Printf("pushing %v\n", ev)
		t.pushString(ev.Test, ev)
	}

	for _, n := range t.leafNodes() {
		log.Printf("found leaf %v\n", n)
		result = append(result, n.ev)
	}

	log.Printf("returning %d leaf nodes\n", len(result))
	return result

}
