# OAuth
(*oAuth*)

## Overview

Use this endpoint to retrieve an OAuth token. Use the token to allow your ecommerce server to make calls to the Account
endpoint and create a one-click checkout experience for shoppers.


<https://help.bolt.com/products/accounts/direct-api/oauth-guide/>
### Available Operations

* [getToken](#gettoken) - Get OAuth token

## getToken

Retrieve a new or refresh an existing OAuth token.

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { GrantType, Scope } from "Bolt-Public-API/dist/sdk/models/shared";

async function run() {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.oAuth.getToken({
    clientId: "<value>",
    clientSecret: "<value>",
    code: "<value>",
    grantType: GrantType.AuthorizationCode,
    scope: [
      Scope.BoltAccountManage,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.GetAccessTokenRequest](../../sdk/models/shared/getaccesstokenrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.OauthGetTokenResponse](../../sdk/models/operations/oauthgettokenresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
