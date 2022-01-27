import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddApiKeyInput = {
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
};

export type AddDeviceInput = {
  deviceModelId: Scalars['ID'];
  remoteConfigId: Scalars['ID'];
  serialNo: Scalars['String'];
};

export type AddDeviceModelInput = {
  manufacturer: Scalars['String'];
  name: Scalars['String'];
};

export type AddLicenseInput = {
  deviceId: Scalars['ID'];
  expiryDate: Scalars['String'];
  masterKeyId: Scalars['ID'];
  merchantId: Scalars['String'];
  organizationId: Scalars['ID'];
  qrData: Scalars['String'];
  terminalId: Scalars['String'];
};

export type AddMasterKeyInput = {
  checkValue: Scalars['String'];
  component1: Scalars['String'];
  component2: Scalars['String'];
  component3: Scalars['String'];
};

export type AddOrderInput = {
  bank: Scalars['String'];
  customerName: Scalars['String'];
  deviceModel: Scalars['String'];
  email: Scalars['String'];
  fintech: Array<Scalars['String']>;
  phoneNumber: Scalars['String'];
  quantity: Scalars['Int'];
};

export type AddOrganizationInput = {
  name: Scalars['String'];
  regNo: Scalars['String'];
};

export type AddRemoteConfigInput = {
  hostUrl: Scalars['String'];
  name: Scalars['String'];
};

export type AddUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  _id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  secret: Scalars['String'];
  token: Scalars['String'];
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  user: User;
};

export type Device = {
  __typename?: 'Device';
  _id?: Maybe<Scalars['ID']>;
  deviceModel: DeviceModel;
  remoteConfig: RemoteConfig;
  serialNo: Scalars['String'];
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  _id?: Maybe<Scalars['ID']>;
  manufacturer: Scalars['String'];
  name: Scalars['String'];
};

export type EditApiKeyInput = {
  name?: InputMaybe<Scalars['String']>;
  secret?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type EditDeviceInput = {
  deviceModelId?: InputMaybe<Scalars['ID']>;
  remoteConfigId?: InputMaybe<Scalars['ID']>;
  serialNo?: InputMaybe<Scalars['String']>;
};

export type EditDeviceModelInput = {
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EditLicenseInput = {
  deviceId?: InputMaybe<Scalars['ID']>;
  expiryDate?: InputMaybe<Scalars['String']>;
  masterKeyId?: InputMaybe<Scalars['ID']>;
  merchantId?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ID']>;
  qrData?: InputMaybe<Scalars['String']>;
  terminalId?: InputMaybe<Scalars['String']>;
};

export type EditMasterKeyInput = {
  checkValue?: InputMaybe<Scalars['String']>;
  component1?: InputMaybe<Scalars['String']>;
  component2?: InputMaybe<Scalars['String']>;
  component3?: InputMaybe<Scalars['String']>;
};

export type EditOrganizationInput = {
  name?: InputMaybe<Scalars['String']>;
  regNo?: InputMaybe<Scalars['String']>;
};

export type EditRemoteConfigInput = {
  hostUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EditUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type GetApiKeysResult = {
  __typename?: 'GetApiKeysResult';
  apiKeys?: Maybe<Array<ApiKey>>;
  totalPages: Scalars['Int'];
};

export type GetDeviceModelsResult = {
  __typename?: 'GetDeviceModelsResult';
  deviceModels?: Maybe<Array<DeviceModel>>;
  totalPages: Scalars['Int'];
};

export type GetDevicesResult = {
  __typename?: 'GetDevicesResult';
  devices?: Maybe<Array<Device>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type GetLicensesResult = {
  __typename?: 'GetLicensesResult';
  licenses?: Maybe<Array<License>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type GetMasterKeysResult = {
  __typename?: 'GetMasterKeysResult';
  masterKeys?: Maybe<Array<MasterKey>>;
  totalPages: Scalars['Int'];
};

export type GetOrdersInput = {
  deviceModel?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetOrdersResult = {
  __typename?: 'GetOrdersResult';
  orders: Array<Order>;
  totalPages: Scalars['Int'];
};

export type GetOrganizationsResult = {
  __typename?: 'GetOrganizationsResult';
  organizations?: Maybe<Array<Organization>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type GetRemoteConfigsResult = {
  __typename?: 'GetRemoteConfigsResult';
  remoteConfigs?: Maybe<Array<RemoteConfig>>;
  totalPages: Scalars['Int'];
};

export type GetUsersResult = {
  __typename?: 'GetUsersResult';
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
  users?: Maybe<Array<User>>;
};

export type License = {
  __typename?: 'License';
  _id?: Maybe<Scalars['ID']>;
  device: Device;
  expiryDate: Scalars['String'];
  masterKey: MasterKey;
  merchantId: Scalars['String'];
  organization: Organization;
  qrData: Scalars['String'];
  terminalId: Scalars['String'];
};

export type MasterKey = {
  __typename?: 'MasterKey';
  _id?: Maybe<Scalars['ID']>;
  checkValue: Scalars['String'];
  component1: Scalars['String'];
  component2: Scalars['String'];
  component3: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addApiKey: Scalars['Boolean'];
  addDevice: Scalars['Boolean'];
  addDeviceModel: Scalars['Boolean'];
  addLicense: Scalars['Boolean'];
  addMasterKey: Scalars['Boolean'];
  addOrder: Scalars['Boolean'];
  addOrganization: Scalars['Boolean'];
  addRemoteConfig: Scalars['Boolean'];
  addUser: Scalars['Boolean'];
  deleteApiKey: Scalars['Boolean'];
  deleteDevice: Scalars['Boolean'];
  deleteDeviceModel: Scalars['Boolean'];
  deleteLicense: Scalars['Boolean'];
  deleteMasterKey: Scalars['Boolean'];
  deleteOrganization: Scalars['Boolean'];
  deleteRemoteConfig: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  editApiKey: Scalars['Boolean'];
  editDevice: Scalars['Boolean'];
  editDeviceModel: Scalars['Boolean'];
  editLicense: Scalars['Boolean'];
  editMasterKey: Scalars['Boolean'];
  editOrganization: Scalars['Boolean'];
  editRemoteConfig: Scalars['Boolean'];
  editUser: Scalars['Boolean'];
  login: Auth;
  version: Scalars['String'];
};


export type MutationAddApiKeyArgs = {
  apiKey: AddApiKeyInput;
};


export type MutationAddDeviceArgs = {
  device: AddDeviceInput;
};


export type MutationAddDeviceModelArgs = {
  deviceModel: AddDeviceModelInput;
};


export type MutationAddLicenseArgs = {
  license: AddLicenseInput;
};


export type MutationAddMasterKeyArgs = {
  masterKey: AddMasterKeyInput;
};


export type MutationAddOrderArgs = {
  order: AddOrderInput;
};


export type MutationAddOrganizationArgs = {
  organization: AddOrganizationInput;
};


export type MutationAddRemoteConfigArgs = {
  remoteConfig: AddRemoteConfigInput;
};


export type MutationAddUserArgs = {
  user: AddUserInput;
};


export type MutationDeleteApiKeyArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteDeviceArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteDeviceModelArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteLicenseArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteMasterKeyArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteOrganizationArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteRemoteConfigArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ID'];
};


export type MutationEditApiKeyArgs = {
  _id: Scalars['ID'];
  apiKey: EditApiKeyInput;
};


export type MutationEditDeviceArgs = {
  _id: Scalars['ID'];
  device: EditDeviceInput;
};


export type MutationEditDeviceModelArgs = {
  _id: Scalars['ID'];
  deviceModel: EditDeviceModelInput;
};


export type MutationEditLicenseArgs = {
  _id: Scalars['ID'];
  license: EditLicenseInput;
};


export type MutationEditMasterKeyArgs = {
  _id: Scalars['ID'];
  masterKey: EditMasterKeyInput;
};


export type MutationEditOrganizationArgs = {
  _id: Scalars['ID'];
  organization: EditOrganizationInput;
};


export type MutationEditRemoteConfigArgs = {
  _id: Scalars['ID'];
  remoteConfig: EditRemoteConfigInput;
};


export type MutationEditUserArgs = {
  _id: Scalars['ID'];
  user: EditUserInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  _id?: Maybe<Scalars['ID']>;
  bank: Scalars['String'];
  customerName: Scalars['String'];
  deviceModel: DeviceModel;
  email: Scalars['String'];
  fintech: Array<Scalars['String']>;
  phoneNumber: Scalars['String'];
  quantity: Scalars['Int'];
};

export type Organization = {
  __typename?: 'Organization';
  _id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  regNo: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getApiKey: ApiKey;
  getApiKeys: GetApiKeysResult;
  getDevice: Device;
  getDeviceModel: DeviceModel;
  getDeviceModels: GetDeviceModelsResult;
  getDevices: GetDevicesResult;
  getLicense: License;
  getLicenses: GetLicensesResult;
  getMasterKey: MasterKey;
  getMasterKeys: GetMasterKeysResult;
  getOrders: GetOrdersResult;
  getOrganization: Organization;
  getOrganizations: GetOrganizationsResult;
  getRemoteConfig: RemoteConfig;
  getRemoteConfigs: GetRemoteConfigsResult;
  getUser: User;
  getUsers: GetUsersResult;
  version: Scalars['String'];
};


export type QueryGetApiKeyArgs = {
  _id: Scalars['ID'];
};


export type QueryGetApiKeysArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryGetDeviceArgs = {
  _id: Scalars['ID'];
};


export type QueryGetDeviceModelArgs = {
  _id: Scalars['ID'];
};


export type QueryGetDeviceModelsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryGetDevicesArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryGetLicenseArgs = {
  _id: Scalars['ID'];
};


export type QueryGetLicensesArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryGetMasterKeyArgs = {
  _id: Scalars['ID'];
};


export type QueryGetMasterKeysArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryGetOrdersArgs = {
  advanced: GetOrdersInput;
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryGetOrganizationArgs = {
  _id: Scalars['ID'];
};


export type QueryGetOrganizationsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryGetRemoteConfigArgs = {
  _id: Scalars['ID'];
};


export type QueryGetRemoteConfigsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryGetUserArgs = {
  _id: Scalars['ID'];
};


export type QueryGetUsersArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type RemoteConfig = {
  __typename?: 'RemoteConfig';
  _id?: Maybe<Scalars['ID']>;
  hostUrl: Scalars['String'];
  name: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Operator = 'OPERATOR'
}

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  role: Role;
};

export type AddOrderMutationVariables = Exact<{
  order: AddOrderInput;
}>;


export type AddOrderMutation = { __typename?: 'Mutation', addOrder: boolean };


export const AddOrderDocument = gql`
    mutation addOrder($order: AddOrderInput!) {
  addOrder(order: $order)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addOrder(variables: AddOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddOrderMutation>(AddOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addOrder');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;