import styled from '@emotion/styled';
import React from 'react';
import { RouteProps } from 'react-router';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'h h h'
    'gateway proxy envoy';
`;
const Header = styled.div`
  grid-area: h;
`;

const GatewayContainer = styled.div`
  grid-area: gateway;
`;
const ProxyContainer = styled.div`
  grid-area: proxy;
`;
const EnvoyContainer = styled.div`
  grid-area: envoy;
`;
export const Admin: React.FC<RouteProps> = props => {
  return (
    <>
      <Container>
        <Header>
          <div>Enterprise Gloo Administration</div>
          <div>Advanced Administration for your Gloo Configuration</div>
        </Header>
        <GatewayContainer>gatway</GatewayContainer>
        <ProxyContainer>proxy</ProxyContainer>
        <EnvoyContainer>envoy</EnvoyContainer>
      </Container>
    </>
  );
};
