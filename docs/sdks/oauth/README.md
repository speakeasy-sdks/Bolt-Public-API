# OAuth
(*oAuth*)

## Overview

Use this endpoint to retrieve an OAuth token. Use the token to allow your ecommerce server to make calls to the Account
endpoint and create a one-click checkout experience for shoppers.


<https://help.bolt.com/products/accounts/direct-api/oauth-guide/>
### Available Operations

* [oAuthGetToken](#oauthgettoken) - Get OAuth token

## oAuthGetToken

Endpoint for receiving access, ID, and refresh tokens from Bolt's OAuth server.

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { GetAccessTokenRequestGrantType, GetAccessTokenRequestScope } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.oAuth.oAuthGetToken({
    clientId: "string",
    clientSecret: "string",
    code: "string",
    grantType: GetAccessTokenRequestGrantType.AuthorizationCode,
    scope: GetAccessTokenRequestScope.Openid,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.GetAccessTokenRequest](../../models/shared/getaccesstokenrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.OAuthGetTokenResponse](../../models/operations/oauthgettokenresponse.md)>**

