import styled from '@emotion/styled';
import { Loading } from 'Components/Common/DisplayOnly/Loading';
import {
  SoloFormDropdown,
  SoloFormInput,
  SoloFormMetadataBasedDropdown,
  SoloFormMultipartStringCardsList,
  SoloFormMultiselect,
  SoloFormVirtualServiceTypeahead
} from 'Components/Common/Form/SoloFormField';
import {
  InputRow,
  SoloFormTemplate
} from 'Components/Common/Form/SoloFormTemplate';
import { SoloButton } from 'Components/Common/SoloButton';
import { Formik, FormikErrors } from 'formik';
import {
  Route,
  VirtualService
} from 'proto/github.com/solo-io/gloo/projects/gateway/api/v1/virtual_service_pb';
import { DestinationSpec } from 'proto/github.com/solo-io/gloo/projects/gloo/api/v1/plugins_pb';
import {
  HeaderMatcher,
  QueryParameterMatcher
} from 'proto/github.com/solo-io/gloo/projects/gloo/api/v1/proxy_pb';
import { Upstream } from 'proto/github.com/solo-io/gloo/projects/gloo/api/v1/upstream_pb';
import { VirtualServiceDetails } from 'proto/github.com/solo-io/solo-projects/projects/grpcserver/api/v1/virtualservice_pb';
import * as React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppState } from 'store';
import { createRoute } from 'store/virtualServices/actions';
import { colors, soloConstants } from 'Styles';
import { ButtonProgress } from 'Styles/CommonEmotions/button';
import { getRouteMatcher } from 'utils/helpers';
import * as yup from 'yup';
import { DestinationForm } from './DestinationForm';

enum PathSpecifierCase { // From gloo -> proxy_pb -> Matcher's namespace
  PATH_SPECIFIER_NOT_SET = 0,
  PREFIX = 1,
  EXACT = 2,
  REGEX = 3
}

export const PATH_SPECIFIERS = [
  {
    key: 'PREFIX',
    value: 'PREFIX',
    displayValue: 'Prefix'
  },
  {
    key: 'EXACT',
    value: 'EXACT',
    displayValue: 'Exact'
  },
  {
    key: 'REGEX',
    value: 'REGEX',
    displayValue: 'Regex'
  }
];

let httpMethods = ['POST', 'PUT', 'GET', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];

export interface CreateRouteValuesType {
  virtualService: VirtualService.AsObject | undefined;
  upstream: Upstream.AsObject | undefined;
  destinationSpec: DestinationSpec.AsObject | undefined;
  path: string;
  matchType: 'PREFIX' | 'EXACT' | 'REGEX';
  headers: HeaderMatcher.AsObject[];
  queryParameters: QueryParameterMatcher.AsObject[];
  methods: string[];
}

export const createRouteDefaultValues: CreateRouteValuesType = {
  virtualService: new VirtualService().toObject(),
  upstream: new Upstream().toObject(),
  destinationSpec: undefined,
  path: '',
  matchType: 'PREFIX',
  headers: [],
  queryParameters: [],
  methods: []
};

const validationSchema = yup.object().shape({
  region: yup.string(),
  virtualService: yup.object(),
  upstream: yup
    .object()
    .test(
      'Valid upstream',
      'Upstream must be set',
      upstream => !!upstream && !!upstream.metadata
    ),
  destinationSpec: yup.object().when('upstream', {
    is: upstream =>
      !!upstream && !!upstream.upstreamSpec && !!upstream.upstreamSpec.aws,
    then: yup.object().shape({
      aws: yup.object().shape({
        logicalName: yup
          .string()
          .required()
          .test(
            'len',
            'A lambda function must be selected',
            val => !!val && val.length > 0
          ),
        invocationStyle: yup.boolean(),
        responseTransformation: yup.boolean()
      })
    }),
    otherwise: yup.object()
  }),
  path: yup
    .string()
    .test('Valid Path', 'Paths begin with /', val => val && val[0] === '/'),
  matchType: yup.string(),
  headers: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      value: yup.string(),
      regex: yup.boolean()
    })
  ),
  queryParameters: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      value: yup.string(),
      regex: yup.boolean()
    })
  ),
  methods: yup.array().of(yup.string())
});

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InnerSectionTitle = styled.div`
  color: ${colors.novemberGrey};
  font-size: 18px;
  line-height: 22px;
  margin: 13px 0;
`;

const InnerFormSectionContent = styled.div`
  background: white;
  border: 1px solid ${colors.marchGrey};
  border-radius: ${soloConstants.smallRadius}px;
  padding: 13px 8px;
  display: flex;
  flex-direction: column;

  > div {
  }
`;

export const HalfColumn = styled.div`
  width: calc(50% - 10px);
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 28px;
`;

interface Props {
  defaultVirtualService?: VirtualService.AsObject;
  defaultUpstream?: Upstream.AsObject;
  completeCreation: () => any;
  existingRoute?: Route.AsObject;
  lockVirtualService?: boolean;
}

export const CreateRouteModal = (props: Props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const virtualServicesList = useSelector(
    (state: AppState) => state.virtualServices.virtualServicesList
  );

  const upstreamsList = useSelector((state: AppState) =>
    state.upstreams.upstreamsList.map(u => u.upstream!)
  );
  const [fallbackVS, setFallbackVS] = React.useState<
    VirtualServiceDetails.AsObject
  >();
  const [
    allUsableVirtualServices,
    setAllUsableVirtualServices
  ] = React.useState<VirtualServiceDetails.AsObject[]>([]);

  const allUsableUpstreams = useSelector(
    (state: AppState) =>
      state.upstreams.upstreamsList
        ? state.upstreams.upstreamsList
            .map(upstreamDetails => upstreamDetails.upstream)
            .filter(upstream => !!upstream && !!upstream.metadata)
        : [],
    shallowEqual
  );

  React.useEffect(() => {
    setAllUsableVirtualServices(
      !!virtualServicesList
        ? virtualServicesList.filter(vs => !!vs.virtualService!.metadata)
        : []
    );
    setFallbackVS(
      !!virtualServicesList
        ? virtualServicesList.find(
            vsD =>
              !!vsD &&
              vsD.virtualService &&
              vsD.virtualService.virtualHost &&
              vsD.virtualService.virtualHost.domainsList &&
              vsD.virtualService.virtualHost.domainsList.includes('*')
          )
        : undefined
    );
  }, [virtualServicesList.length]);

  if (!upstreamsList.length || !virtualServicesList.length) {
    return <Loading />;
  }

  const { defaultUpstream, defaultVirtualService } = props;

  const handleCreateRoute = (values: CreateRouteValuesType) => {
    dispatch(
      createRoute({
        input: {
          ...(!!values.virtualService &&
            values.virtualService.metadata && {
              virtualServiceRef: {
                name: values.virtualService!.metadata!.name,
                namespace: values.virtualService!.metadata!.namespace
              }
            }),
          index: 0,
          route: {
            matcher: {
              prefix: values.matchType === 'PREFIX' ? values.path : '',
              exact: values.matchType === 'EXACT' ? values.path : '',
              regex: values.matchType === 'REGEX' ? values.path : '',
              methodsList: values.methods,
              headersList: values.headers,
              queryParametersList: values.queryParameters
            },
            routeAction: {
              single: {
                upstream: {
                  name: values.upstream!.metadata!.name,
                  namespace: values.upstream!.metadata!.namespace
                },
                destinationSpec: values.destinationSpec
              }
            }
          }
        }
      })
    );

    props.completeCreation();
    if (values.virtualService && values.virtualService.metadata) {
      history.push({
        pathname: `/virtualservices/${
          values.virtualService.metadata!.namespace
        }/${values.virtualService.metadata!.name}`
      });
    } else {
      if (!!fallbackVS && !!fallbackVS.virtualService) {
        history.push({
          pathname: `/virtualservices/${
            fallbackVS.virtualService.metadata!.namespace
          }/${fallbackVS.virtualService.metadata!.name}`
        });
      } else {
        history.push({
          pathname: `/virtualservices/gloo-system/default`
        });
      }
    }
  };

  const isSubmittable = (
    errors: FormikErrors<CreateRouteValuesType>,
    isChanged: boolean
  ) => {
    return isChanged && !Object.keys(errors).length;
  };

  let existingRouteToInitialValues = null;

  if (!!props.existingRoute) {
    const { existingRoute } = props;

    const existingRouteUpstream = allUsableUpstreams.find(
      upstream =>
        !!upstream &&
        !!upstream.metadata &&
        !!existingRoute.routeAction &&
        !!existingRoute.routeAction.single &&
        !!existingRoute.routeAction.single.upstream &&
        upstream.metadata!.name ===
          existingRoute.routeAction!.single!.upstream!.name &&
        upstream.metadata!.namespace ===
          existingRoute.routeAction!.single!.upstream!.namespace
    );

    existingRouteToInitialValues = {
      virtualService: props.defaultVirtualService,
      upstream: existingRouteUpstream,
      destinationSpec: existingRoute.routeAction!.single!.destinationSpec,
      headers: existingRoute.matcher!.headersList,
      methods: existingRoute.matcher!.methodsList,
      path: getRouteMatcher(existingRoute).matcher,
      matchType: getRouteMatcher(existingRoute).matchType as any,
      queryParameters: existingRoute.matcher!.queryParametersList
    };
  }

  const initialValues: CreateRouteValuesType = !!existingRouteToInitialValues
    ? existingRouteToInitialValues
    : {
        ...createRouteDefaultValues,
        destinationSpec: defaultUpstream
          ? {
              aws: {
                logicalName: '',
                invocationStyle: 0,
                responseTransformation: false
              }
            }
          : undefined,
        virtualService: defaultVirtualService
          ? defaultVirtualService
          : createRouteDefaultValues.virtualService,
        upstream: defaultUpstream
          ? defaultUpstream
          : createRouteDefaultValues.upstream
      };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={handleCreateRoute}>
      {({
        values,
        isSubmitting,
        handleSubmit,
        isValid,
        errors,
        dirty,
        setFieldValue
      }) => {
        return (
          <FormContainer data-testid='create-route-form'>
            <SoloFormTemplate>
              <InputRow>
                <>
                  <HalfColumn>
                    <SoloFormVirtualServiceTypeahead
                      name='virtualService'
                      title='Virtual Service'
                      value={values.virtualService}
                      placeholder='Virtual Service...'
                      defaultValue='Virtual Service'
                      options={allUsableVirtualServices.map(
                        vs => vs.virtualService!
                      )}
                      disabled={
                        !allUsableVirtualServices.length ||
                        (!!values.virtualService && props.lockVirtualService)
                      }
                    />
                  </HalfColumn>
                  {allUsableUpstreams.length && (
                    <HalfColumn>
                      <SoloFormMetadataBasedDropdown
                        testId='upstream-dropdown'
                        name='upstream'
                        title='Upstream'
                        value={values.upstream}
                        placeholder='Upstream...'
                        options={allUsableUpstreams}
                        onChange={newUpstream => {
                          if (newUpstream.upstreamSpec.aws) {
                            setFieldValue('destinationSpec', {
                              aws: {
                                logicalName: '',
                                invocationStyle: 0,
                                responseTransformation: false
                              }
                            });
                          }
                        }}
                      />
                    </HalfColumn>
                  )}
                </>
              </InputRow>
              {allUsableUpstreams.length && (
                <InputRow>
                  {!!values.upstream && (
                    <DestinationForm
                      name='destinationSpec'
                      upstreamSpec={values.upstream.upstreamSpec!}
                    />
                  )}
                </InputRow>
              )}
              <InputRow>
                <HalfColumn>
                  <SoloFormInput
                    name='path'
                    title='Path'
                    placeholder='Path...'
                  />
                </HalfColumn>
                <HalfColumn>
                  <SoloFormDropdown
                    name='matchType'
                    title='Match Type'
                    defaultValue={'PREFIX'}
                    options={PATH_SPECIFIERS}
                  />
                </HalfColumn>
              </InputRow>

              <InnerSectionTitle>
                <div>Match Options</div>
              </InnerSectionTitle>
              <InnerFormSectionContent>
                <InputRow>
                  <SoloFormMultipartStringCardsList
                    name='headers'
                    title='Headers'
                    values={values.headers}
                    valuesMayBeEmpty={true}
                    createNewNamePromptText={'Name...'}
                    createNewValuePromptText={'Value...'}
                    booleanFieldText={'Regex'}
                    boolSlotTitle={'regex'}
                  />
                </InputRow>
                <InputRow>
                  <SoloFormMultipartStringCardsList
                    name='queryParameters'
                    title='Query Parameters'
                    values={values.queryParameters}
                    valuesMayBeEmpty={true}
                    createNewNamePromptText={'Name...'}
                    createNewValuePromptText={'Value...'}
                    booleanFieldText={'Regex'}
                    boolSlotTitle={'regex'}
                  />
                </InputRow>
                <InputRow>
                  <SoloFormMultiselect
                    name='methods'
                    title='Methods'
                    placeholder='Methods...'
                    options={httpMethods.map(key => {
                      return {
                        key: key,
                        value: key
                      };
                    })}
                  />
                </InputRow>
              </InnerFormSectionContent>
            </SoloFormTemplate>
            <Footer>
              <SoloButton
                onClick={handleSubmit}
                text={!!props.existingRoute ? 'Save Edits' : 'Create Route'}
                disabled={!isSubmittable(errors, dirty)}
                loading={isSubmitting}
                inProgressText={
                  !!props.existingRoute
                    ? 'Saving Routes...'
                    : 'Creating Route...'
                }>
                <ButtonProgress />
              </SoloButton>
            </Footer>
          </FormContainer>
        );
      }}
    </Formik>
  );
};
