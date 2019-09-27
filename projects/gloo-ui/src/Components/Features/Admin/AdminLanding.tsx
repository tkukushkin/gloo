import styled from '@emotion/styled';
import { ReactComponent as EnvoyLogo } from 'assets/envoy-logo.svg';
import { ReactComponent as GatewayConfigLogo } from 'assets/gateway-config-icon.svg';
import { ReactComponent as HealthScoreIcon } from 'assets/health-score-icon.svg';
import { ReactComponent as ProxyConfigLogo } from 'assets/proxy-config-icon.svg';
import { GoodStateCongratulations } from 'Components/Common/DisplayOnly/GoodStateCongratulations';
import { StatusTile } from 'Components/Common/DisplayOnly/StatusTile';
import { TallyInformationDisplay } from 'Components/Common/DisplayOnly/TallyInformationDisplay';
import { EnvoyDetails } from 'proto/github.com/solo-io/solo-projects/projects/grpcserver/api/v1/envoy_pb';
import { GatewayDetails } from 'proto/github.com/solo-io/solo-projects/projects/grpcserver/api/v1/gateway_pb';
import { ProxyDetails } from 'proto/github.com/solo-io/solo-projects/projects/grpcserver/api/v1/proxy_pb';
import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router';
import { AppState } from 'store';
import { colors, healthConstants, soloConstants } from 'Styles';
import { CardCSS } from 'Styles/CommonEmotions/card';
import { getResourceStatus } from 'utils/helpers';

const Container = styled.div`
  ${CardCSS};
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  padding: 30px ${soloConstants.buffer}px ${soloConstants.buffer}px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  margin-bottom: ${soloConstants.smallBuffer}px;
  color: ${colors.novemberGrey};
`;
const PageTitle = styled.div`
  font-size: 22px;
  line-height: 26px;
`;
const PageSubtitle = styled.div`
  font-size: 18px;
  line-height: 22px;
`;

const Row = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(200px, 33.3%) minmax(200px, 33.3%) minmax(
      200px,
      33.3%
    );
  grid-gap: 17px;
  padding: 0 17px;
  border-radius: ${soloConstants.smallRadius}px;
  background: ${colors.januaryGrey};

  > div > div {
    /*Status Tiles*/
    padding: 17px 0;
  }
`;

const Link = styled.div`
  cursor: pointer;
  color: ${colors.seaBlue};
  font-size: 14px;
`;

type HealthScoreContainerProps = { health: number };
const HealthScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 500;

  .health-icon {
    margin: 0 12px;

    ${(props: HealthScoreContainerProps) =>
    props.health === healthConstants.Good.value
      ? '' //`fill: ${colors.forestGreen};`
      : props.health === healthConstants.Error.value
        ? `fill: ${colors.grapefruitOrange};`
        : `fill: ${colors.sunGold};`}
  }

  & span {
    ${(props: HealthScoreContainerProps) =>
    props.health === healthConstants.Good.value
      ? '' //`fill: ${colors.forestGreen};`
      : props.health === healthConstants.Error.value
        ? `color: ${colors.grapefruitOrange};`
        : `color: ${colors.sunGold};`}
    padding: 5px;
    font-weight: bold;
  }
`;

export const AdminLanding: React.FC<RouteProps> = props => {
  return (
    <>
      <Container>
        <Header>
          <div>
            <PageTitle>Enterprise Gloo Administration</PageTitle>
            <PageSubtitle>
              Advanced Administration for your Gloo Configuration
            </PageSubtitle>
          </div>
          <HealthScoreContainer health={healthConstants.Good.value}>
            <HealthScoreIcon />
            {/*Health Score: <span>92</span>*/}
          </HealthScoreContainer>
        </Header>
        <Row>
          <GatewayOverview />
          <ProxyOverview />
          <EnvoyOverview />
        </Row>
      </Container>
    </>
  );
};

const Gateway = styled.div`
  width: 100%;
`;
const Proxy = styled.div`
  width: 100%;
`;
const Envoy = styled.div`
  width: 100%;
`;

const GatewayOverview = () => {
  const gatewaysList = useSelector(
    (state: AppState) => state.gateways.gatewaysList
  );

  const [allGateways, setAllGateways] = React.useState<
    GatewayDetails.AsObject[]
  >([]);

  React.useEffect(() => {
    if (!!gatewaysList.length) {
      const newGateways = gatewaysList.filter(gateway => !!gateway.gateway);
      setAllGateways(newGateways);
    }
  }, [gatewaysList.length]);

  if (!gatewaysList.length) {
    return <div>Loading...</div>;
  }

  const gatewayErrorCount = allGateways.reduce((total, gateway) => {
    if (getResourceStatus(gateway.gateway!) !== 'Rejected') {
      return total;
    }

    return total + 1;
  }, 0);

  return (
    <Gateway>
      <StatusTile
        titleText={'Gateway Configuration'}
        titleIcon={<GatewayConfigLogo />}
        description={
          'Gateways are used to configure the protocols and ports for Envoy. Optionally, gateways can be associated with a specific set of virtual services.'
        }
        exploreMoreLink={{
          prompt: 'View Gateways',
          link: '/admin/gateways/'
        }}
        healthStatus={
          !!gatewayErrorCount
            ? healthConstants.Error.value
            : healthConstants.Good.value
        }
        descriptionMinHeight={'95px'}>
        {!!allGateways.length ? (
          <>
            {!!gatewayErrorCount ? (
              <TallyInformationDisplay
                tallyCount={gatewayErrorCount}
                tallyDescription={`gateway error${
                  gatewayErrorCount === 1 ? '' : 's'
                  }`}
                color='orange'
                moreInfoLink={{
                  prompt: 'View',
                  link: '/admin/gateways/?status=Rejected'
                }}
              />
            ) : (
                <GoodStateCongratulations typeOfItem={'gateway configurations'} />
              )}
            <TallyInformationDisplay
              tallyCount={allGateways.length}
              tallyDescription={`gateway configuration${
                gatewaysList.length === 1 ? '' : 's'
                } `}
              color='blue'
            />
          </>
        ) : (
            <div>You have no gateways configured yet.</div>
          )}
      </StatusTile>
    </Gateway>
  );
};

const ProxyOverview = () => {
  const proxiesList = useSelector(
    (state: AppState) => state.proxies.proxiesList
  );

  const [allProxies, setAllProxies] = React.useState<ProxyDetails.AsObject[]>(
    []
  );

  React.useEffect(() => {
    if (!!proxiesList.length) {
      const newProxies = proxiesList.filter(proxy => proxy.proxy);
      setAllProxies(newProxies);
    }
  }, [proxiesList.length]);

  if (!proxiesList.length) {
    return <div>Loading...</div>;
  }

  const proxyErrorCount = proxiesList.reduce((total, proxy) => {
    if (getResourceStatus(proxy.proxy!) !== 'Rejected') {
      return total;
    }

    return total + 1;
  }, 0);

  return (
    <Proxy>
      <StatusTile
        titleText={'Proxy Configuration'}
        titleIcon={<ProxyConfigLogo />}
        description={
          'Gloo generates proxy configs from upstreams, virtual services, and gateways, and then transforms them directly into Envoy config. If a proxy config is rejected, it means Envoy will not receive configuration updates.'
        }
        exploreMoreLink={{
          prompt: 'View Proxy',
          link: '/admin/proxy/'
        }}
        healthStatus={
          !!proxyErrorCount
            ? healthConstants.Error.value
            : healthConstants.Good.value
        }
        descriptionMinHeight={'95px'}>
        {!!allProxies.length ? (
          <>
            {!!proxyErrorCount ? (
              <TallyInformationDisplay
                tallyCount={proxyErrorCount}
                tallyDescription={`proxy error${
                  proxyErrorCount === 1 ? '' : 's'
                  }`}
                color='orange'
                moreInfoLink={{
                  prompt: 'View',
                  link: '/admin/proxy/?status=Rejected'
                }}
              />
            ) : (
                <GoodStateCongratulations typeOfItem={'proxy configurations'} />
              )}
            <TallyInformationDisplay
              tallyCount={proxiesList.length}
              tallyDescription={`proxy configuration${
                proxiesList.length === 1 ? '' : 's'
                } `}
              color='blue'
            />
          </>
        ) : (
            <div>You have no proxy configured yet.</div>
          )}
      </StatusTile>
    </Proxy>
  );
};

const EnvoyOverview = () => {
  const envoysList = useSelector(
    (state: AppState) => state.envoy.envoyDetailsList
  );
  const envoyStatuses = useSelector((state: AppState) =>
    state.envoy.envoyDetailsList.map(envoy => envoy.status)
  );
  const badEnvoys = useSelector((state: AppState) =>
    state.envoy.envoyDetailsList.filter(envoy => envoy.status!.code !== 2)
  );
  const [allEnvoy, setAllEnvoy] = React.useState<EnvoyDetails.AsObject[]>([]);
  const [envoyConfigs, setEnvoyConfigs] = React.useState<any[]>([]);
  React.useEffect(() => {
    if (!!envoysList.length) {
      setEnvoyConfigs(envoysList.map(envoy => {
        if (envoy.raw!.contentRenderError === "" && envoy.raw!.content !== "") {
          return JSON.parse(envoy.raw!.content)
        }
      }));

      setAllEnvoy(envoysList);
    }
  }, [envoysList.length]);

  const envoyErrorCount = envoyStatuses.reduce((total, status) => {
    if (status!.code !== 0) {
      return total;
    }
    return total + 1;
  }, 0);

  const getHealthStatus = (): number => {
    if (envoyErrorCount === envoysList.length) {
      return healthConstants.Error.value;
    }
    if (envoyErrorCount > 0) {
      return healthConstants.Pending.value;
    }
    return healthConstants.Good.value;
  };

  return (
    <Envoy>
      <StatusTile
        titleText={'Envoy Configuration'}
        titleIcon={<EnvoyLogo />}
        description={
          'This is the live config dump from Envoy. This is translated directly from the proxy config and should be updated any time the proxy configuration changes.'
        }
        exploreMoreLink={{
          prompt: 'View Envoy',
          link: '/admin/envoy/'
        }}
        healthStatus={getHealthStatus()}
        descriptionMinHeight={'95px'}>
        {!envoysList.length ? (
          <div>Loading...</div>
        ) : !!envoysList.length ? (
          <>
            {!!envoyErrorCount ? (
              <TallyInformationDisplay
                tallyCount={envoyErrorCount}
                tallyDescription={`envoy error${
                  envoyErrorCount === 1 ? '' : 's'
                  }`}
                color='orange'
                moreInfoLink={{
                  prompt: 'View',
                  link: '/admin/envoy/?status=Rejected'
                }}
              />
            ) : (
                <GoodStateCongratulations typeOfItem={'envoy configurations'} />
              )}
            <TallyInformationDisplay
              tallyCount={envoysList.length}
              tallyDescription={`envoy${
                envoysList.length === 1 ? '' : 's'
                } configured`}
              color='blue'
            />
          </>
        ) : (
              <div>You have no envoy configured yet.</div>
            )}
      </StatusTile>
    </Envoy>
  );
};
