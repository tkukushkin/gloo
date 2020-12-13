import styled from '@emotion/styled';
import { Spin } from 'antd';
import { ReactComponent as RouteTableIcon } from 'assets/route-table-icon.svg';
import { Breadcrumb } from 'Components/Common/Breadcrumb';
import { ConfigDisplayer } from 'Components/Common/DisplayOnly/ConfigDisplayer';
import { FileDownloadLink } from 'Components/Common/FileDownloadLink';
import { SectionCard } from 'Components/Common/SectionCard';
import { SoloModal } from 'Components/Common/SoloModal';
import { RouteTable } from 'proto/github.com/solo-io/gloo/projects/gateway/api/v1/route_table_pb';
import {
  Route,
  VirtualService
} from 'proto/github.com/solo-io/gloo/projects/gateway/api/v1/virtual_service_pb';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  updateRouteTable,
  updateRouteTableYaml
} from 'store/routeTables/actions';
import { routeTableAPI } from 'store/routeTables/api';
import { colors, healthConstants } from 'Styles';
import useSWR from 'swr';
import {
  getRouteHeaders,
  getRouteMatcher,
  getRouteMethods,
  getRouteQueryParams,
  getRouteSingleUpstream
} from 'utils/helpers';
import {
  CreateRouteModal,
  CreateRouteValuesType
} from './Creation/CreateRouteModal';
import { Routes } from './Details/Routes';
import {
  ConfigurationToggle,
  DetailsContent,
  DetailsSection,
  DetailsSectionTitle
} from './Details/VirtualServiceDetails';
import { ErrorBoundary } from '../Errors/ErrorBoundary';

const RouteSectionTitle = styled.div`
  font-size: 18px;
  color: ${colors.novemberGrey};
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const YamlLinks = styled.div`
  display: flex;
  justify-items: flex-end;
  align-items: center;
`;

export interface RouteParent
  extends VirtualService.AsObject,
    RouteTable.AsObject {}
export const RouteTableDetails = () => {
  let history = useHistory();
  let { routetablename, routetablenamespace } = useParams();

  const [showCreateRouteModal, setShowCreateRouteModal] = React.useState(false);
  const [showConfiguration, setShowConfiguration] = React.useState(false);
  const [routeBeingEdited, setRouteBeingEdited] = React.useState<
    Route.AsObject | undefined
  >(undefined);

  const { data: routeTablesList, error } = useSWR(
    'listRouteTables',
    routeTableAPI.listRouteTables
  );

  const [yamlError, setYamlError] = React.useState(false);
  const dispatch = useDispatch();

  if (!routeTablesList) {
    return <div>Loading...</div>;
  }

  let routeTableDetails = routeTablesList.find(
    rtD =>
      !!rtD &&
      rtD.routeTable &&
      rtD.routeTable.metadata!.name === routetablename
  )!;

  const routesList = routeTablesList
    .filter(
      rtd =>
        rtd?.routeTable?.metadata?.name === routetablename &&
        rtd?.routeTable?.metadata?.namespace === routetablenamespace
    )
    .flatMap(rtd => rtd!.routeTable!.routesList);

  if (!routeTablesList || !routeTableDetails || !routeTableDetails.routeTable) {
    return (
      <>
        <Breadcrumb />
        <Spin size='large' />
      </>
    );
  }

  let { routeTable, raw } = routeTableDetails;
  const saveYamlChange = (newYaml: string) => {
    dispatch(
      updateRouteTableYaml({
        editedYamlData: {
          editedYaml: newYaml,
          ref: {
            name: routeTable!.metadata!.name,
            namespace: routeTable!.metadata!.namespace
          }
        }
      })
    );
  };

  const existingRoutes = routeTablesList
    .flatMap(rtd => rtd!.routeTable!.routesList)
    .map(route => {
      const upstreamName = getRouteSingleUpstream(route) || '';
      const { matcher, matchType } = getRouteMatcher(route);
      return {
        key: `${matcher}-${upstreamName}`,
        matcher: matcher,
        pathMatch: matchType,
        method: getRouteMethods(route),
        upstreamName: upstreamName,
        header: getRouteHeaders(route),
        queryParams: getRouteQueryParams(route),
        actions: matcher
      };
    });

  const handleDeleteRoute = (matcherToDelete: string) => {
    const newList = routeTablesList
      .flatMap(rtd => rtd!.routeTable!.routesList)
      .filter(route => getRouteMatcher(route).matcher !== matcherToDelete);

    dispatch(
      updateRouteTable({
        routeTable: {
          ...routeTable,
          routesList: newList
        }
      })
    );
  };

  const beginRouteEditing = (matcherToEdit: string) => {
    setRouteBeingEdited(
      routesList.find(route => getRouteMatcher(route).matcher === matcherToEdit)
    );
  };

  const finishRouteEditiing = () => {
    setRouteBeingEdited(undefined);
  };

  const handleCreateRoute = (values: CreateRouteValuesType) => {
    let newRoutesList = routeTable.routesList;

    if (routeBeingEdited !== undefined) {
      newRoutesList = routeTable.routesList.filter(
        route =>
          route.matchersList[0]?.prefix !==
          routeBeingEdited?.matchersList[0]?.prefix
      );
    }
    let destination;
    if (values.destinationType === 'Route Table') {
      destination = {
        delegateAction: {
          name: values.routeDestination!.metadata!.name,
          namespace: values.routeDestination!.metadata!.namespace
        }
      };
    } else if (values.destinationType === 'Upstream') {
      // let destinationSpec;
      // if (values.destinationSpec !== undefined) {
      //   destinationSpec = values.destinationSpec;
      // }
      // destination = {
      //   routeAction: {
      //     single: {
      //       upstream: {
      //         name: values.upstream!.metadata!.name,
      //         namespace: values.upstream!.metadata!.namespace
      //       },
      //       destinationSpec
      //     }
      //   }
      // };
    }
    dispatch(
      updateRouteTable({
        routeTable: {
          ...routeTable,
          routesList: [
            ...newRoutesList,
            {
              name: values.name,
              matchersList: [
                {
                  prefix: values.matchType === 'PREFIX' ? values.path : '',
                  exact: values.matchType === 'EXACT' ? values.path : '',
                  regex: values.matchType === 'REGEX' ? values.path : '',
                  methodsList: values.methods,
                  headersList: values.headers,
                  queryParametersList: values.queryParameters
                }
              ],

              ...destination
            }
          ]
        }
      })
    );
    setShowCreateRouteModal(false);
    setRouteBeingEdited(undefined);
  };

  const reorderRoutes = (dragIndex: number, hoverIndex: number) => {
    const movedRoute = routesList.splice(dragIndex, 1)[0];

    let newRoutesList = [...routesList];
    newRoutesList.splice(hoverIndex, 0, movedRoute);

    dispatch(
      updateRouteTable({
        routeTable: {
          ...routeTable,
          routesList: newRoutesList
        }
      })
    );
  };

  const headerInfo = [
    {
      title: 'namespace',
      value: routetablenamespace!
    }
  ];
  return (
    <ErrorBoundary
      fallback={<div>There was an error with Route Table Details</div>}>
      <Breadcrumb />

      <SectionCard
        cardName={
          routeTable.metadata
            ? routeTable.metadata!.name
            : routetablename
            ? routetablename
            : 'Error'
        }
        logoIcon={<RouteTableIcon />}
        health={
          routeTable!.status
            ? routeTable!.status!.state
            : healthConstants.Pending.value
        }
        headerSecondaryInformation={headerInfo}
        healthMessage={
          routeTable!.status && routeTable!.status!.reason.length
            ? routeTable!.status!.reason
            : 'Service Status'
        }
        onClose={() => history.push(`/virtualservices/`)}>
        <RouteSectionTitle>
          <YamlLinks>
            {!!raw && (
              <>
                <ConfigurationToggle
                  onClick={() => setShowConfiguration(s => !s)}>
                  {showConfiguration ? 'Hide' : 'View'} YAML Configuration
                </ConfigurationToggle>
                <FileDownloadLink
                  fileContent={raw.content}
                  fileName={raw.fileName}
                />
              </>
            )}
          </YamlLinks>
        </RouteSectionTitle>
        <DetailsContent
          configurationShowing={showConfiguration}
          style={{ gridTemplateRows: 'unset' }}>
          <DetailsSection></DetailsSection>
          {showConfiguration && (
            <DetailsSection>
              <DetailsSectionTitle>YAML Configuration</DetailsSectionTitle>
              <ConfigDisplayer
                content={raw ? raw.content : ''}
                asEditor
                yamlError={yamlError}
                saveEdits={saveYamlChange}
              />
            </DetailsSection>
          )}
          <DetailsSection>
            <>
              <Routes
                routes={routesList}
                routeParent={routeTable as RouteParent}
              />
              <SoloModal
                visible={showCreateRouteModal}
                width={500}
                title={'Create Route'}
                onClose={() => setShowCreateRouteModal(false)}>
                <CreateRouteModal
                  defaultRouteParent={routeTable}
                  completeCreation={() => setShowCreateRouteModal(false)}
                  createRouteFn={handleCreateRoute}
                />
              </SoloModal>
              {/* temporarily removing edit route functionality (ascampos) */}
              {/* <SoloModal
                visible={!!routeBeingEdited}
                width={500}
                title={'Edit Route'}
                onClose={() => setRouteBeingEdited(undefined)}>
                <CreateRouteModal
                  defaultRouteParent={routeTable as RouteParent}
                  existingRoute={routeBeingEdited}
                  completeCreation={finishRouteEditiing}
                  createRouteFn={handleCreateRoute}
                />
              </SoloModal> */}
            </>
          </DetailsSection>
        </DetailsContent>
      </SectionCard>
    </ErrorBoundary>
  );
};
