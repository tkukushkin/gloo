import { ReactComponent as KeyRing } from 'assets/key-on-ring.svg';
import { SectionCard } from 'Components/Common/SectionCard';
import { SoloTable } from 'Components/Common/SoloTable';
import { isEqual } from 'lodash';
import { Secret } from 'proto/github.com/solo-io/gloo/projects/gloo/api/v1/secret_pb';
import * as React from 'react';
import { TableActionCircle, TableActions } from 'Styles';
import { SecretForm, SecretValuesType } from './SecretForm';

interface Props {
  tlsSecrets?: Secret.AsObject[];
  oAuthSecrets?: Secret.AsObject[];
  onCreateSecret: (
    values: SecretValuesType,
    secretKind: Secret.KindCase
  ) => void;
  onDeleteSecret: (
    name: string,
    namespace: string,
    secretKind: Secret.KindCase
  ) => void;
}

function equivalentProps(
  oldProps: Readonly<Props>,
  nextProps: Readonly<Props>
): boolean {
  if (
    !!oldProps.tlsSecrets !== !!nextProps.tlsSecrets ||
    !!oldProps.oAuthSecrets !== !!nextProps.oAuthSecrets
  ) {
    return false;
  }
  if (!oldProps.tlsSecrets || !oldProps.oAuthSecrets) {
    return true;
  }

  return (
    isEqual(oldProps.tlsSecrets, nextProps.tlsSecrets) &&
    isEqual(oldProps.oAuthSecrets, nextProps.oAuthSecrets)
  );
}

export const SecurityPage: React.FunctionComponent<Props> = React.memo(
  props => {
    const { tlsSecrets, oAuthSecrets } = props;

    let tlsTableData: any[] = [];
    if (tlsSecrets) {
      tlsTableData = tlsSecrets.map(tlsSecret => {
        return {
          key: `${tlsSecret.metadata!.name}-${tlsSecret.metadata!.namespace}`,
          name: tlsSecret.metadata!.name,
          namespace: tlsSecret.metadata!.namespace,
          certChain: '(cert chain)',
          tlsPrivateKey: '**************************',
          rootCA: '(root ca)',
          actions: ``
        };
      });
      // This is to be replaced by the add new row form
      tlsTableData.push({
        key: '',
        name: '',
        namespace: '',
        certChain: '(cert chain)',
        tlsPrivateKey: '**************************',
        rootCA: '(root ca)',
        actions: ``
      });
    }

    let oAuthTableData: any[] = [];
    if (oAuthSecrets) {
      oAuthTableData = oAuthSecrets.map(oAuthSecret => {
        return {
          key: `${oAuthSecret.metadata!.name}-${
            oAuthSecret.metadata!.namespace
          }`,
          name: oAuthSecret.metadata!.name,
          namespace: oAuthSecret.metadata!.namespace,
          clientSecret: '(client secret)',
          actions: ``
        };
      });
      // This is to be replaced by the add new row form
      oAuthTableData.push({
        key: '',
        name: '',
        namespace: '',
        clientSecret: '(client secret)',
        actions: ``
      });
    }

    const TLSColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 200
      },
      {
        title: 'Namespace',
        dataIndex: 'namespace'
      },
      {
        title: 'Cert Chain',
        dataIndex: 'certChain'
      },
      {
        title: 'TLS Private Key',
        dataIndex: 'tlsPrivateKey'
      },
      {
        title: 'Root CA',
        dataIndex: 'rootCA'
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        render: (text: any, record: any) => (
          <TableActions>
            <div style={{ marginLeft: '5px' }}>
              <TableActionCircle
                onClick={() =>
                  props.onDeleteSecret(
                    record.name,
                    record.namespace,
                    Secret.KindCase.TLS
                  )
                }>
                x
              </TableActionCircle>
            </div>
          </TableActions>
        )
      }
    ];

    const OAuthColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 200
      },
      {
        title: 'Namespace',
        dataIndex: 'namespace'
      },
      {
        title: 'Client Secret',
        dataIndex: 'clientSecret'
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        render: (text: any, record: any) => (
          <TableActions>
            <div style={{ marginLeft: '5px' }}>
              <TableActionCircle
                onClick={() =>
                  props.onDeleteSecret(
                    record.name,
                    record.namespace,
                    Secret.KindCase.OAUTH
                  )
                }>
                x
              </TableActionCircle>
            </div>
          </TableActions>
        )
      }
    ];

    return (
      <>
        <SectionCard cardName={'TLS'} logoIcon={<KeyRing />}>
          {tlsTableData.length ? (
            <SoloTable
              columns={TLSColumns}
              dataSource={tlsTableData}
              formComponent={() => (
                <SecretForm
                  secretKind={Secret.KindCase.TLS}
                  onCreateSecret={props.onCreateSecret}
                />
              )}
            />
          ) : (
            <div>No Secrets</div>
          )}
        </SectionCard>
        <SectionCard cardName={'OAuth'} logoIcon={<KeyRing />}>
          {oAuthTableData.length ? (
            <SoloTable
              columns={OAuthColumns}
              dataSource={oAuthTableData}
              formComponent={() => (
                <SecretForm
                  secretKind={Secret.KindCase.OAUTH}
                  onCreateSecret={props.onCreateSecret}
                />
              )}
            />
          ) : (
            <div>No Secrets</div>
          )}
        </SectionCard>
      </>
    );
  },
  equivalentProps
);
