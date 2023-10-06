# Account
(*account*)

## Overview

Account endpoints allow you to view and manage shoppers' accounts. For example,
you can add or remove addresses and payment information.


### Available Operations

* [accountAddPaymentMethod](#accountaddpaymentmethod) - Add a payment method to a shopper's Bolt account Wallet.
* [accountAddressCreate](#accountaddresscreate) - Add an address
* [accountAddressDelete](#accountaddressdelete) - Delete an existing address
* [accountAddressEdit](#accountaddressedit) - Edit an existing address
* [accountExists](#accountexists) - Determine the existence of a Bolt account
* [accountGet](#accountget) - Retrieve account details
* [accountPaymentMethodDelete](#accountpaymentmethoddelete) - Delete an existing payment method

## accountAddPaymentMethod

Add a payment method to a shopper's Bolt account Wallet. For security purposes, this request must come from
your backend because authentication requires the use of your private key.<br />
**Note**: Before using this API, the credit card details must be tokenized using Bolt's JavaScript library function,
which is documented in [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddPaymentMethodResponse, AccountAddPaymentMethodSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI();
const operationSecurity: AccountAddPaymentMethodSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.account.accountAddPaymentMethod({
  requestBody: "Officer",
  xPublishableKey: "Silicon female",
}, operationSecurity).then((res: AccountAddPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.AccountAddPaymentMethodRequest](../../models/operations/accountaddpaymentmethodrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.AccountAddPaymentMethodSecurity](../../models/operations/accountaddpaymentmethodsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.AccountAddPaymentMethodResponse](../../models/operations/accountaddpaymentmethodresponse.md)>**


## accountAddressCreate

Add an address to the shopper's account

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddressCreateResponse, AccountAddressCreateSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI();
const operationSecurity: AccountAddressCreateSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.account.accountAddressCreate({
  xPublishableKey: "Corporate Designer",
  addressListingInput: {
    company: "ACME Corporation",
    countryCode: "US",
    email: "alice@example.com",
    firstName: "Alice",
    isDefault: true,
    lastName: "Baker",
    locality: "San Francisco",
    phone: "+14155550199",
    postalCode: "94105",
    region: "CA",
    streetAddress1: "535 Mission St, Ste 1401",
    streetAddress2: "c/o Shipping Department",
  },
}, operationSecurity).then((res: AccountAddressCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AccountAddressCreateRequest](../../models/operations/accountaddresscreaterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.AccountAddressCreateSecurity](../../models/operations/accountaddresscreatesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AccountAddressCreateResponse](../../models/operations/accountaddresscreateresponse.md)>**


## accountAddressDelete

Delete an existing address. Deleting an address does not invalidate transactions or
shipments that are associated with it.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddressDeleteResponse, AccountAddressDeleteSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI();
const operationSecurity: AccountAddressDeleteSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.account.accountAddressDelete({
  xPublishableKey: "bypassing Interactions inasmuch",
  id: "D4g3h5tBuVYK9",
}, operationSecurity).then((res: AccountAddressDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AccountAddressDeleteRequest](../../models/operations/accountaddressdeleterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.AccountAddressDeleteSecurity](../../models/operations/accountaddressdeletesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AccountAddressDeleteResponse](../../models/operations/accountaddressdeleteresponse.md)>**


## accountAddressEdit

Edit an existing address on the shopper's account. This does not edit addresses
that are already associated with other resources, such as transactions or
shipments.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddressEditResponse, AccountAddressEditSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI();
const operationSecurity: AccountAddressEditSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.account.accountAddressEdit({
  xPublishableKey: "Convertible",
  addressListingInput: {
    company: "ACME Corporation",
    countryCode: "US",
    email: "alice@example.com",
    firstName: "Alice",
    isDefault: true,
    lastName: "Baker",
    locality: "San Francisco",
    phone: "+14155550199",
    postalCode: "94105",
    region: "CA",
    streetAddress1: "535 Mission St, Ste 1401",
    streetAddress2: "c/o Shipping Department",
  },
  id: "D4g3h5tBuVYK9",
}, operationSecurity).then((res: AccountAddressEditResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AccountAddressEditRequest](../../models/operations/accountaddresseditrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.AccountAddressEditSecurity](../../models/operations/accountaddresseditsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AccountAddressEditResponse](../../models/operations/accountaddresseditresponse.md)>**


## accountExists

Determine whether or not an identifier is associated with an existing Bolt account.

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountExistsResponse } from "Bolt-Public-API/dist/sdk/models/operations";
import { IdentifierIdentifierType } from "Bolt-Public-API/dist/sdk/models/shared";

const sdk = new BoltPublicAPI({
  security: {
    apiKey: "",
  },
});

sdk.account.accountExists({
  xPublishableKey: "productize South Manager",
  identifier: {
    identifierType: IdentifierIdentifierType.Email,
    identifierValue: "alice@example.com",
  },
}).then((res: AccountExistsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.AccountExistsRequest](../../models/operations/accountexistsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.AccountExistsResponse](../../models/operations/accountexistsresponse.md)>**


## accountGet

Retrieve a shopper's account details, such as addresses and payment information

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountGetResponse, AccountGetSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI();
const operationSecurity: AccountGetSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.account.accountGet({
  xPublishableKey: "shrilly",
}, operationSecurity).then((res: AccountGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.AccountGetRequest](../../models/operations/accountgetrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.AccountGetSecurity](../../models/operations/accountgetsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AccountGetResponse](../../models/operations/accountgetresponse.md)>**


## accountPaymentMethodDelete

Delete an existing payment method. Deleting a payment method does not invalidate transactions or
orders that are associated with it.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountPaymentMethodDeleteResponse, AccountPaymentMethodDeleteSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI();
const operationSecurity: AccountPaymentMethodDeleteSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.account.accountPaymentMethodDelete({
  xPublishableKey: "gold hack",
  id: "D4g3h5tBuVYK9",
}, operationSecurity).then((res: AccountPaymentMethodDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.AccountPaymentMethodDeleteRequest](../../models/operations/accountpaymentmethoddeleterequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.AccountPaymentMethodDeleteSecurity](../../models/operations/accountpaymentmethoddeletesecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.AccountPaymentMethodDeleteResponse](../../models/operations/accountpaymentmethoddeleteresponse.md)>**

