# Configuration
(*configuration*)

## Overview

Merchant configuration endpoints allow you to retrieve and configure merchant-level
configuration, such as callback URLs, identifiers, secrets, etc...


### Available Operations

* [merchantCallbacksGet](#merchantcallbacksget) - Retrieve callback URLs for the merchant
* [merchantCallbacksUpdate](#merchantcallbacksupdate) - Update callback URLs for the merchant
* [merchantIdentifiersGet](#merchantidentifiersget) - Retrieve identifiers for the merchant

## merchantCallbacksGet

Return callback URLs configured on the merchant such as OAuth URLs.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.configuration.merchantCallbacksGet({
    xPublishableKey: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.MerchantCallbacksGetRequest](../../models/operations/merchantcallbacksgetrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.MerchantCallbacksGetResponse](../../models/operations/merchantcallbacksgetresponse.md)>**


## merchantCallbacksUpdate

Update and configure callback URLs on the merchant such as OAuth URLs.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.configuration.merchantCallbacksUpdate({
    xPublishableKey: "string",
    callbackUrls: {
      accountPage: "https://www.example.com/account",
      baseDomain: "https://www.example.com/",
      confirmationRedirect: "https://www.example.com/bolt/redirect",
      createOrder: "https://www.example.com/bolt/order",
      debug: "https://www.example.com/bolt/debug",
      getAccount: "https://www.example.com/bolt/account",
      mobileAppDomain: "https://m.example.com/",
      oauthLogout: "https://www.example.com/bolt/logout",
      oauthRedirect: "https://www.example.com/bolt/oauth",
      privacyPolicy: "https://www.example.com/privacy-policy",
      productInfo: "https://www.example.com/bolt/product",
      remoteApi: "https://www.example.com/bolt/remote-api",
      shipping: "https://www.example.com/bolt/shipping",
      supportPage: "https://www.example.com/help",
      tax: "https://www.example.com/bolt/tax",
      termsOfService: "https://www.example.com/terms-of-service",
      universalMerchantApi: "https://www.example.com/bolt/merchant-api",
      updateCart: "https://www.example.com/bolt/cart",
      validateAdditionalAccountData: "https://www.example.com/bolt/validate-account",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.MerchantCallbacksUpdateRequest](../../models/operations/merchantcallbacksupdaterequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.MerchantCallbacksUpdateResponse](../../models/operations/merchantcallbacksupdateresponse.md)>**


## merchantIdentifiersGet

Return several identifiers for the merchant, such as public IDs, publishable keys, signing secrets, etc...

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.configuration.merchantIdentifiersGet();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.MerchantIdentifiersGetResponse](../../models/operations/merchantidentifiersgetresponse.md)>**

