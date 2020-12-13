import css from '@emotion/css';
import styled from '@emotion/styled';
import { Select } from 'antd';
import { CreateRouteValuesType } from 'Components/Features/VirtualService/Creation/CreateRouteModal';
import { RouteParent } from 'Components/Features/VirtualService/RouteTableDetails';
import { useField, useFormikContext, FieldProps, Field } from 'formik';
import _ from 'lodash';
import { RouteTable } from 'proto/github.com/solo-io/gloo/projects/gateway/api/v1/route_table_pb';
import { VirtualService } from 'proto/github.com/solo-io/gloo/projects/gateway/api/v1/virtual_service_pb';
import { Upstream } from 'proto/github.com/solo-io/gloo/projects/gloo/api/v1/upstream_pb';
import { Metadata } from 'proto/github.com/solo-io/solo-kit/api/v1/metadata_pb';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { AppState } from 'store';
import { colors, soloConstants } from 'Styles';
import {
  createUpstreamId,
  getIcon,
  getUpstreamType,
  groupBy,
  parseUpstreamId
} from 'utils/helpers';
import {
  MultipartStringCardsList,
  MultipartStringCardsProps
} from '../MultipartStringCardsList';
import { SoloCheckbox } from '../SoloCheckbox';
import {
  DropdownProps,
  SoloDropdown,
  SoloDropdownBlock,
  SoloSelectCSS
} from '../SoloDropdown';
import { DurationProps, SoloDurationEditor } from '../SoloDurationEditor';
import { Label, SoloInput } from '../SoloInput';
import { SoloMultiSelect } from '../SoloMultiSelect';
import { SoloTypeahead, TypeaheadProps } from '../SoloTypeahead';
import { StringCardsList } from '../StringCardsList';
import { secretAPI } from 'store/secrets/api';
import useSWR from 'swr';
import { configAPI } from 'store/config/api';
import { upstreamAPI } from 'store/upstreams/api';
import { routeTableAPI } from 'store/routeTables/api';
import { virtualServiceAPI } from 'store/virtualServices/api';
import { ResourceRef } from 'proto/github.com/solo-io/solo-kit/api/v1/ref_pb';
import { upstreamGroupAPI } from 'store/upstreamGroups/api';
import { UpstreamGroup } from 'proto/github.com/solo-io/gloo/projects/gloo/api/v1/proxy_pb';
import { SoloTextarea } from '../SoloTextarea';
import { SelectProps } from 'antd/lib/select';
const { Option, OptGroup } = Select;

type ErrorTextProps = { errorExists?: boolean };

export const ErrorText = styled.div`
  color: ${colors.grapefruitOrange};
  visibility: ${(props: ErrorTextProps) =>
    props.errorExists ? 'visible' : 'hidden'};
  height: 50px;
`;

export const SoloFormInput = ({ ...props }) => {
  const { hideError = false } = props;
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);
  return (
    <>
      <SoloInput
        {...field}
        {...props}
        error={!!meta.error && meta.touched}
        title={props.title}
        value={field.value}
        onChange={field.onChange}
      />
      {hideError ? null : (
        <ErrorText errorExists={!!meta.error && meta.touched}>
          {meta.error}
        </ErrorText>
      )}
    </>
  );
};

export const SoloFormTextarea = ({ ...props }) => {
  const { hideError = false } = props;
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);
  return (
    <>
      <SoloTextarea
        {...field}
        {...props}
        error={!!meta.error && meta.touched}
        title={props.title}
        value={field.value}
        onChange={field.onChange}
      />
      {hideError ? null : (
        <ErrorText errorExists={!!meta.error && meta.touched}>
          {meta.error}
        </ErrorText>
      )}
    </>
  );
};

interface FormDurationProps extends DurationProps {
  name: string;
}
export const SoloFormDurationEditor: React.FC<FormDurationProps> = ({
  ...props
}) => {
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);

  return (
    <>
      <SoloDurationEditor
        {...field}
        {...props}
        error={!!meta.error && meta.touched}
        title={props.title}
        value={field.value}
        onChange={newDurationValues =>
          form.setFieldValue(field.name, newDurationValues)
        }
        onBlur={newDurationValues =>
          form.setFieldValue(field.name, newDurationValues)
        }
      />
      <ErrorText errorExists={!!meta.error && meta.touched}>
        {meta.error}
      </ErrorText>
    </>
  );
};

interface FormTypeaheadProps extends TypeaheadProps {
  name: string;
  hideError?: boolean;
}
export const SoloFormTypeahead: React.FC<FormTypeaheadProps> = ({
  ...props
}) => {
  const { hideError } = props;
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);
  return (
    <>
      <SoloTypeahead
        {...props}
        {...field}
        title={props.title}
        presetOptions={props.presetOptions}
        onChange={value => form.setFieldValue(props.name, value)}
      />
      {hideError ? null : (
        <ErrorText errorExists={!!meta.error}>{meta.error}</ErrorText>
      )}
    </>
  );
};

export const SoloFormDropdown = (props: any) => {
  const { hideError } = props;
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);
  return (
    <>
      <SoloDropdown
        {...field}
        {...props}
        error={!!meta.error && meta.touched}
        onChange={value => form.setFieldValue(field.name, value)}
        onBlur={value => form.setFieldValue(field.name, value)}
      />
      {hideError ? null : (
        <ErrorText errorExists={!!meta.error && meta.touched}>
          {meta.error}
        </ErrorText>
      )}
    </>
  );
};

export const SoloFormCheckbox = (props: any) => {
  const { hideError } = props;
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);
  return (
    <>
      <SoloCheckbox
        {...props}
        {...field}
        error={!!meta.error && meta.touched}
        checked={!!field.value}
        onChange={value => form.setFieldValue(field.name, value.target.checked)}
        label
      />
      {hideError ? null : (
        <ErrorText errorExists={!!meta.error && meta.touched}>
          {meta.error}
        </ErrorText>
      )}
    </>
  );
};

export const SoloFormMultiselect = (props: any) => {
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);
  return (
    <>
      <SoloMultiSelect
        {...field}
        {...props}
        error={!!meta.error && meta.touched}
        values={field.value}
        onChange={(value: string[]) => form.setFieldValue(field.name, value)}
      />
      <ErrorText errorExists={!!meta.touched && !!meta.error}>
        {meta.error}
      </ErrorText>{' '}
    </>
  );
};

interface MetadataBasedDropdownProps extends DropdownProps {
  value: any;
  options: any[];
  name: string;
  onChange?: (newValue: any) => void;
}
export const SoloFormMetadataBasedDropdown: React.FC<MetadataBasedDropdownProps> = React.memo(
  props => {
    const form = useFormikContext<any>();
    const field = form.getFieldProps(props.name);
    const meta = form.getFieldMeta(props.name);
    const usedOptions = React.useMemo(
      () =>
        props.options
          .sort((optionA, optionB) => {
            const nameA = optionA.metadata.name;
            const nameB = optionB.metadata.name;

            const nameOrder = nameA === nameB ? 0 : nameA < nameB ? -1 : 1;

            if (!!optionA.upstreamSpec) {
              const typeA = getUpstreamType(optionA);
              const typeB = getUpstreamType(optionB);

              return typeA < typeB ? -1 : typeA > typeB ? 1 : nameOrder;
            }

            return nameOrder;
          })
          .map(option => {
            return {
              key: createUpstreamId(option.metadata!), // the same as virtual service's currently
              displayValue: option.metadata.name,
              value: createUpstreamId(option.metadata!),
              icon: !!option.upstreamSpec
                ? getIcon(getUpstreamType(option))
                : undefined
            };
          }),
      [props.options.length]
    );

    const usedValue =
      props.value && props.value.metadata
        ? props.value.metadata.name
        : field.value && field.value.metadata
        ? field.value.metadata.name
        : undefined;

    const setNewValue = (newValueId: any) => {
      const { name, namespace } = parseUpstreamId(newValueId);
      const optionChosen = props.options.find(
        option =>
          option.metadata.name === name &&
          option.metadata.namespace === namespace
      );

      if (props.onChange) {
        props.onChange(optionChosen);
      }

      form.setFieldValue(field.name, optionChosen);
    };

    return (
      <>
        <SoloDropdown
          {...field}
          {...props}
          options={usedOptions}
          value={usedValue}
          onChange={setNewValue}
        />
        <ErrorText errorExists={!!meta.error && meta.touched}>
          {meta.error}
        </ErrorText>
      </>
    );
  },
  shallowEqual
);

function compareOptions(
  oldProps: Readonly<{ value?: string | number }>,
  newProps: Readonly<{ value?: string | number }>
): boolean {
  return oldProps.value === newProps.value;
}
function compareSelect(oldProps: any, newProps: any): boolean {
  return true;
}
type CompareProps = {
  children?: Element[];
  key?: string;
  label: string;
};

const MemoSelect = React.memo(Select, compareSelect);
const MemoOption = React.memo(Option, compareOptions);
interface RouteDestinationDropdownProps {
  value: RouteTable.AsObject | Upstream.AsObject | UpstreamGroup.AsObject;
  testId: string;
  name: string;
  onChange?: (newValue: any) => void;
  upstreams?: Upstream.AsObject[];
  title: string;
  optionsList: Metadata.AsObject[];
  destinationType: string;
}

function areRouteDestinationDropdownPropsEqual(
  oldProps: Readonly<RouteDestinationDropdownProps>,
  newProps: Readonly<RouteDestinationDropdownProps>
): boolean {
  return oldProps.destinationType === newProps.destinationType;
}
export const RouteDestinationDropdown: React.FC<RouteDestinationDropdownProps> = React.memo(
  props => {
    const form = useFormikContext<CreateRouteValuesType>();
    const field = form.getFieldProps(props.name);
    const meta = form.getFieldMeta(props.name);

    const { data: namespacesList, error: listNamespacesError } = useSWR(
      'listNamespaces',
      configAPI.listNamespaces
    );

    const { data: upstreamsList, error: upstreamsError } = useSWR(
      'listUpstreams',
      upstreamAPI.listUpstreams
    );

    const { data: upstreamGroupsList, error: upstreamGroupError } = useSWR(
      'listUpstreamGroups',
      upstreamGroupAPI.listUpstreamGroups
    );

    const { data: routeTablesList, error: routeTablesError } = useSWR(
      'listRouteTables',
      routeTableAPI.listRouteTables
    );
    if (!upstreamsList || !routeTablesList || !upstreamGroupsList) {
      return <div>Loading...</div>;
    }

    let defaultValue = upstreamsList.find(
      ud =>
        ud?.upstream?.metadata?.name === props.value?.metadata?.name &&
        ud?.upstream?.metadata?.namespace === props.value?.metadata?.namespace
    );

    function handleChange(value: any) {
      if (form.values.destinationType === 'Route Table') {
        let routeTable = routeTablesList?.find(
          rt => rt!.routeTable!.metadata!.name === value
        );
        form.setFieldValue('routeDestination', routeTable!.routeTable);
      } else if (form.values.destinationType === 'Upstream') {
        let upstream = upstreamsList?.find(
          us => us!.upstream!.metadata!.name === value
        );
        form.setFieldValue('routeDestination', upstream!.upstream);
        if (upstream?.upstream?.aws === undefined) {
          form.setFieldValue('destinationSpec', undefined);
        }
      } else if (form.values.destinationType === 'Upstream Group') {
        let upstreamGroup = upstreamGroupsList?.find(
          usgD => usgD.upstreamGroup?.metadata?.name === value
        );
        form.setFieldValue('routeDestination', upstreamGroup?.upstreamGroup);
      }
    }
    function getDestinationIcon(option: Metadata.AsObject): React.ReactNode {
      if (props.destinationType === 'Route Table') {
        return getIcon(props.destinationType);
      } else if (props.destinationType === 'Upstream Group') {
        return getIcon('Upstream Group');
      } else {
        return getIcon(
          getUpstreamType(
            upstreamsList?.find(
              us => us?.upstream!.metadata!.name === option.name
            )!.upstream!
          )
        );
      }
    }
    return (
      <>
        <Label>{props.title}</Label>

        <Select
          css={css`
            width: fit-content;
            .ant-select-selection {
              width: 100%;
              padding: 9px 15px 9px 11px;
              border: 1px solid ${colors.aprilGrey};
              border-radius: 8px;
              height: auto;
              outline: none;
              .ant-select-selection__rendered {
                line-height: inherit;
                margin: 0;
                .ant-select-selection-selected-value {
                  color: ${colors.septemberGrey};
                }
              }
              &:disabled {
                background: ${colors.aprilGrey};
              }
            }
          `}
          dropdownMatchSelectWidth={false}
          data-testid={props.testId}
          placeholder='Destination...'
          defaultValue={defaultValue?.upstream?.metadata?.name}
          onChange={handleChange}>
          {(namespacesList ?? []).map((ns: string) => (
            <Select.OptGroup key={ns} label={ns}>
              {props.optionsList
                .filter(option => option!.namespace === ns)
                .map(option => (
                  <Option
                    key={`${option!.name}-${option!.namespace}`}
                    value={option!.name}>
                    <div
                      css={css`
                        display: flex;
                        align-items: center;
                        align-self: center;
                        & > svg {
                          width: 20px;
                          padding-right: 3px;
                        }
                      `}>
                      {getDestinationIcon(option!)}
                      {option!.name}
                    </div>
                  </Option>
                ))}
            </Select.OptGroup>
          ))}
        </Select>
        <ErrorText errorExists={!!meta.error && meta.touched}>
          {/* {meta.error || ''} */}
        </ErrorText>
      </>
    );
  },
  areRouteDestinationDropdownPropsEqual
);

interface VirtualServiceTypeaheadProps extends TypeaheadProps {
  value: RouteParent | undefined;
  options: RouteParent[];
  name: string;
  onChange?: (newValue: any) => any;
}
export const SoloFormVirtualServiceTypeahead: React.FC<VirtualServiceTypeaheadProps> = ({
  ...props
}) => {
  const { data: podNamespace, error: podNamespaceError } = useSWR(
    'getPodNamespace',
    configAPI.getPodNamespace
  );
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);
  const usedOptions = props.options
    .sort((optionA, optionB) => {
      const nameA = optionA.metadata!.name;
      const nameB = optionB.metadata!.name;

      return nameA === nameB ? 0 : nameA < nameB ? -1 : 1;
    })
    .map(option => {
      return {
        key: createUpstreamId(option.metadata!), // the same as virtual service's currently
        displayValue: option.metadata!.name,
        value: createUpstreamId(option.metadata!)
      };
    });

  const usedValue =
    props.value && props.value.metadata
      ? props.value.metadata.name
      : field.value && field.value.metadata
      ? field.value.metadata.name
      : undefined;

  const setNewValue = (newValueId: any) => {
    const { name, namespace } = parseUpstreamId(newValueId);

    let optionChosen;
    if (!!namespace) {
      optionChosen = props.options.find(
        option =>
          option.metadata!.name === name &&
          option.metadata!.namespace === namespace
      );
    } else {
      const tempVirtualService = new VirtualService().toObject();

      // @ts-ignore
      tempVirtualService.metadata = {
        name: newValueId,
        namespace: podNamespace!
      };
    }

    if (props.onChange) {
      props.onChange(optionChosen);
    }

    form.setFieldValue(field.name, optionChosen);
  };

  return (
    <>
      <SoloTypeahead
        {...field}
        {...props}
        presetOptions={usedOptions}
        defaultValue={usedValue}
        onChange={setNewValue}
      />
      <ErrorText errorExists={!!meta.error && meta.touched}>
        {meta.error}
      </ErrorText>
    </>
  );
};

export const SoloFormMultipartStringCardsList: React.FC<{
  name: string;
} & MultipartStringCardsProps> = ({ name, ...props }) => {
  const form = useFormikContext<any>();
  const field = form.getFieldProps(name);
  const meta = form.getFieldMeta(name);

  return (
    <>
      <MultipartStringCardsList
        {...field}
        {...props}
        values={field.value}
        valueDeleted={indexDeleted => {
          const newArr = [...field.value];
          newArr.splice(indexDeleted, 1);

          form.setFieldValue(field.name, newArr);
        }}
        createNew={newPair => {
          let newList = [...field.value];
          const newObj: any = {};
          newObj[props.nameSlotTitle || 'name'] = newPair.newName;
          newObj[props.valueSlotTitle || 'value'] = newPair.newValue;
          if (newPair.newBool !== undefined) {
            newObj[props.boolSlotTitle || 'regex'] = newPair.newBool;
          }

          newList.push(newObj);
          form.setFieldValue(field.name, newList);
        }}
      />
      <ErrorText errorExists={!!meta.error && meta.touched}>
        {meta.error}
      </ErrorText>
    </>
  );
};

export const SoloFormSecretRefInput: React.FC<{
  type: string;
  asColumn?: boolean;
  name: string;
}> = props => {
  const {
    data: namespacesList,
    error: listNamespacesError
  } = useSWR('listNamespaces', configAPI.listNamespaces, { initialData: [] });
  const { data: secretsList, error } = useSWR(
    'listSecrets',
    secretAPI.getSecretsList,
    { initialData: [] }
  );
  const { name, type } = props;
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);
  const namespaceField = form.getFieldProps(`${field.name}.namespace`);
  const namespaceMeta = form.getFieldMeta(`${field.name}.namespace`);
  const [nameField, nameMeta] = useField(`${field.name}.name`);

  const [selectedNS, setSelectedNS] = React.useState(namespaceField.value);
  const [noSecrets, setNoSecrets] = React.useState(false);

  const [secretsFound, setSecretsFound] = React.useState(
    secretsList?.length
      ? secretsList
          ?.filter(secret => {
            // TODO: are these the only forms requiring a secret ref?
            if (type === 'aws') return !!secret.aws;
            if (type === 'azure') return !!secret.azure;
          })
          .filter(secret => secret.metadata!.namespace === selectedNS)
          .map(secret => secret.metadata!.name)
      : []
  );

  React.useEffect(() => {
    setSecretsFound(
      secretsList
        ? secretsList
            .filter(secret => {
              if (type === 'aws') return !!secret.aws;
              if (type === 'azure') return !!secret.azure;
            })
            .filter(secret => secret.metadata!.namespace === selectedNS)

            .map(secret => secret.metadata!.name)
        : []
    );
    if (secretsList && secretsFound.length === 0) {
      setNoSecrets(true);
    }
  }, [selectedNS]);
  if (!secretsList) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <SoloTypeahead
          {...namespaceField}
          title='Secret Ref Namespace'
          presetOptions={(namespacesList ?? []).map(ns => {
            return { value: ns };
          })}
          onChange={value => {
            form.setFieldValue(`${field.name}.namespace`, value);

            setSelectedNS(value);
            if (noSecrets) {
              form.setFieldError(
                `${field.name}.namespace`,
                'No secrets found on this namespace'
              );
            }
            form.setFieldTouched(`${field.name}.name`);
            form.setFieldValue(`${field.name}.name`, '');
          }}
        />
        <ErrorText errorExists={!!namespaceMeta.error && namespaceMeta.touched}>
          {namespaceMeta.error}
        </ErrorText>
      </div>
    </>
  );
};

const compareFn = (
  prevProps: Readonly<AWSSecretsListProps>,
  newProps: Readonly<AWSSecretsListProps>
) => {
  return _.isEqual(prevProps, newProps);
};

interface AWSSecretsListProps {
  type: string;
  name: string;
  testId: string;
  hideError?: boolean;
  defaultValue?: string;
}
export const SoloAWSSecretsList: React.FC<AWSSecretsListProps> = React.memo(
  props => {
    const { data: secretsList, error } = useSWR(
      'listSecrets',
      secretAPI.getSecretsList
    );

    const { name, type, hideError = false } = props;
    const form = useFormikContext<any>();
    const field = form.getFieldProps(props.name);
    const meta = form.getFieldMeta(props.name);

    if (!secretsList) {
      return <div>Loading...</div>;
    }

    const groupedSecrets = Array.from(
      groupBy(
        secretsList.filter(s => s.aws !== undefined),
        secret => secret.metadata!.namespace
      ).entries()
    );
    const awsSecretsList = groupedSecrets.filter(([ns, secrets]) =>
      secrets.filter(s => s.aws !== undefined)
    );

    return (
      <div style={{ width: '100%' }}>
        {name && <Label>AWS Secret</Label>}
        <SoloDropdownBlock
          data-testid={props.testId}
          style={{ minWidth: '200px' }}
          onChange={(value: any) => {
            let [name, namespace] = value.split('::');
            let selectedSecret = secretsList.find(
              s =>
                s.metadata!.name === name && s.metadata!.namespace === namespace
            );

            form.setFieldValue(
              `${field.name}.name`,
              selectedSecret!.metadata!.name
            );
            form.setFieldValue(
              `${field.name}.namespace`,
              selectedSecret!.metadata!.namespace
            );
          }}
          {...props}>
          {awsSecretsList.map(([namespace, secrets]) => {
            return (
              <OptGroup key={namespace} label={namespace}>
                {secrets.map(s => (
                  <Option
                    key={`${s.metadata!.name}::${s.metadata!.namespace}`}
                    value={`${s.metadata!.name}::${s.metadata!.namespace}`}>
                    {s.metadata!.name}
                  </Option>
                ))}
              </OptGroup>
            );
          })}
        </SoloDropdownBlock>
        {hideError ? null : (
          <ErrorText errorExists={!!meta.error && meta.touched}>
            {meta.error}
          </ErrorText>
        )}
      </div>
    );
  },
  compareFn
);

const compare = (
  prevProps: Readonly<{ name: string; title: string; defaultValue: string }>,
  newProps: Readonly<{ name: string; title: string; defaultValue: string }>
) => {
  return prevProps.defaultValue === newProps.defaultValue;
};

type RouteParentType = RouteTable.AsObject | VirtualService.AsObject;

export const SoloRouteParentDropdown: React.FC<{
  name: string;
  title: string;
  defaultValue: string;
}> = React.memo(props => {
  const { data: routeTablesList, error: routeTablesError } = useSWR(
    'listRouteTables',
    routeTableAPI.listRouteTables
  );

  const { data: virtualServicesList, error: virtualServicesError } = useSWR(
    'listVirtualServices',
    virtualServiceAPI.listVirtualServices
  );
  const groupedRouteTables = React.useMemo(
    () => Array.from(groupBy(routeTablesList!, () => 'Route Table')),
    [routeTablesList?.length]
  );

  const groupedVirtualServices = React.useMemo(
    () => Array.from(groupBy(virtualServicesList!, () => 'Virtual Service')),
    [virtualServicesList?.length]
  );

  const { name, title } = props;
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);

  return (
    <div style={{ width: '100%' }}>
      {title && <Label>{title}</Label>}
      <SoloDropdownBlock
        value={field.value.name || props.defaultValue}
        onChange={(value: any) => {
          let [name, namespace, kind] = value.split('::');
          // find the correct one in the list
          let selectedRouteParent;
          form.setFieldValue('routeParentKind', kind);

          form.setFieldValue(`${field.name}.name`, name);
          // set it in the form
          form.setFieldValue(`${field.name}.namespace`, namespace);
        }}>
        {groupedVirtualServices.map(([label, resources]) => {
          return (
            <OptGroup key={label} label={label}>
              {resources.map(s => (
                <Option
                  key={`${s?.virtualService?.metadata!.name}::${
                    s?.virtualService?.metadata!.namespace
                  }::virtualService`}
                  value={`${s?.virtualService?.metadata!.name}::${
                    s?.virtualService?.metadata!.namespace
                  }::virtualService`}>
                  {`${s?.virtualService?.metadata!.name}`}
                </Option>
              ))}
            </OptGroup>
          );
        })}
        {groupedRouteTables.map(([label, resources]) => {
          return (
            <OptGroup key={label} label={label}>
              {resources.map(s => (
                <Option
                  key={`${s?.routeTable?.metadata!.name}::${
                    s?.routeTable?.metadata!.namespace
                  }::routeTable`}
                  value={`${s?.routeTable?.metadata!.name}::${
                    s?.routeTable?.metadata!.namespace
                  }::routeTable`}>
                  {`${s?.routeTable?.metadata!.name}`}
                </Option>
              ))}
            </OptGroup>
          );
        })}
      </SoloDropdownBlock>
      <ErrorText errorExists={!!meta.error && meta.touched}>
        {meta.error}
      </ErrorText>
    </div>
  );
}, compare);

export const TableFormWrapper: React.FC = props => {
  return (
    <>
      {React.Children.map(props.children, child => (
        <td>{child}</td>
      ))}
    </>
  );
};

export const SoloFormStringsList: React.FC<any> = ({
  createNewPromptText,
  ...props
}) => {
  const form = useFormikContext<any>();
  const field = form.getFieldProps(props.name);
  const meta = form.getFieldMeta(props.name);

  const removeValue = (index: number) => {
    form.setFieldValue(
      field.name,
      _.remove(form.values[field.name], (val, idx) => idx === index)
    );
  };
  const addValue = (value: string) => {
    form.setFieldValue(field.name, _.concat(form.values[field.name], [value]));
  };

  return (
    <>
      <StringCardsList
        {...props}
        {...field}
        error={!!meta.error && meta.touched}
        values={form.values[field.name]}
        valueDeleted={removeValue}
        createNew={addValue}
        createNewPromptText={createNewPromptText}
      />
      {props.hideError ? null : (
        <ErrorText errorExists={!!meta.error && meta.touched}>
          {meta.error}
        </ErrorText>
      )}
    </>
  );
};

export type SoloFormSelectProps<T = any> = SelectProps<T> & {
  children?: React.ReactNode;
  name: string;
  label?: string;
};
// declare class Select<ValueType extends SelectValue = SelectValue> extends React.Component<SelectProps<ValueType>> {
export const SoloFormSelect = ({
  name,
  label,
  children,
  onChange,
  onBlur,
  ...restProps
}: SoloFormSelectProps) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Field name={name}>
        {({
          field: { value },
          form: { setFieldValue, setFieldTouched }
        }: FieldProps) => (
          <Select<any>
            css={css`
              ${SoloSelectCSS}
              .ant-select-dropdown {
                .ant-select-dropdown-menu-item {
                  display: flex;
                  align-items: center;
                }
              }
              .ant-select-selection {
                width: 100%;
                padding: 5px;
                border: 1px solid ${colors.aprilGrey};
                border-radius: ${soloConstants.smallRadius}px;
                height: auto;
                outline: none;
                .ant-select-selection__rendered {
                  line-height: 0;
                  margin: 0;
                  .ant-select-selection-selected-value {
                    color: ${colors.septemberGrey};
                  }
                  .ant-select-selection__choice {
                    .ant-select-selection__choice__remove {
                      i {
                        vertical-align: 0;
                      }
                    }
                  }
                }

                &:disabled {
                  background: ${colors.aprilGrey};
                }
              }
            `}
            onChange={(value, option) => {
              setFieldValue(name, value);
              onChange && onChange(value, option);
            }}
            onBlur={value => {
              setFieldTouched(name);
              onBlur && onBlur(value);
            }}
            value={value === '' || value === null ? undefined : value}
            {...restProps}>
            {children}
          </Select>
        )}
      </Field>
    </>
  );
};
