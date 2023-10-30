# Account
(*account*)

## Overview

Account endpoints allow you to view and manage shoppers' accounts. For example,
you can add or remove addresses and payment information.


### Available Operations

* [addAddress](#addaddress) - Add an address
* [addPaymentMethod](#addpaymentmethod) - Add a payment method to a shopper's Bolt account Wallet.
* [deleteAddress](#deleteaddress) - Delete an existing address
* [deletePaymentMethod](#deletepaymentmethod) - Delete an existing payment method
* [detect](#detect) - Determine the existence of a Bolt account
* [getDetails](#getdetails) - Retrieve account details
* [updateAddress](#updateaddress) - Edit an existing address

## addAddress

Add an address to the shopper's account

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AddressListingCountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.account.addAddress({
    xPublishableKey: "string",
    addressListingInput: {
      company: "ACME Corporation",
      countryCode: AddressListingCountryCode.Us,
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
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AccountAddressCreateRequest](../../models/operations/accountaddresscreaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AccountAddressCreateResponse](../../models/operations/accountaddresscreateresponse.md)>**


## addPaymentMethod

Add a payment method to a shopper's Bolt account Wallet. For security purposes, this request must come from
your backend because authentication requires the use of your private key.<br />
**Note**: Before using this API, the credit card details must be tokenized using Bolt's JavaScript library function,
which is documented in [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.account.addPaymentMethod({
    requestBody: "string",
    xPublishableKey: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.AccountAddPaymentMethodRequest](../../models/operations/accountaddpaymentmethodrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.AccountAddPaymentMethodResponse](../../models/operations/accountaddpaymentmethodresponse.md)>**


## deleteAddress

Delete an existing address. Deleting an address does not invalidate transactions or
shipments that are associated with it.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.account.deleteAddress({
    xPublishableKey: "string",
    id: "D4g3h5tBuVYK9",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AccountAddressDeleteRequest](../../models/operations/accountaddressdeleterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AccountAddressDeleteResponse](../../models/operations/accountaddressdeleteresponse.md)>**


## deletePaymentMethod

Delete an existing payment method. Deleting a payment method does not invalidate transactions or
orders that are associated with it.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.account.deletePaymentMethod({
    xPublishableKey: "string",
    id: "D4g3h5tBuVYK9",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.AccountPaymentMethodDeleteRequest](../../models/operations/accountpaymentmethoddeleterequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.AccountPaymentMethodDeleteResponse](../../models/operations/accountpaymentmethoddeleteresponse.md)>**


## detect

Determine whether or not an identifier is associated with an existing Bolt account.

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { IdentifierIdentifierType } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.account.detect({
    xPublishableKey: "string",
    identifier: {
      identifierType: IdentifierIdentifierType.Email,
      identifierValue: "alice@example.com",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.AccountExistsRequest](../../models/operations/accountexistsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.AccountExistsResponse](../../models/operations/accountexistsresponse.md)>**


## getDetails

Retrieve a shopper's account details, such as addresses and payment information

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.account.getDetails({
    xPublishableKey: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.AccountGetRequest](../../models/operations/accountgetrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.AccountGetResponse](../../models/operations/accountgetresponse.md)>**


## updateAddress

Edit an existing address on the shopper's account. This does not edit addresses
that are already associated with other resources, such as transactions or
shipments.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AddressListingCountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.account.updateAddress({
    xPublishableKey: "string",
    addressListingInput: {
      company: "ACME Corporation",
      countryCode: AddressListingCountryCode.Us,
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
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.AccountAddressEditRequest](../../models/operations/accountaddresseditrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AccountAddressEditResponse](../../models/operations/accountaddresseditresponse.md)>**

