# Testing
(*testing*)

## Overview

Endpoints that allow you to generate and retrieve test data to verify certain
flows in non-production environments.


### Available Operations

* [createAccount](#createaccount) - Create a test account
* [getCreditCard](#getcreditcard) - Retrieve a test credit card, including its token

## createAccount

Create a Bolt shopper account for testing purposes.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { TestingAccountCreateSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import { EmailState, PhoneState } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: TestingAccountCreateSecurity = {
  apiKey: "",
};

  const res = await sdk.testing.createAccount({
    xPublishableKey: "string",
    accountTestCreationData: {
      emailState: EmailState.Unverified,
      hasAddress: true,
      isMigrated: true,
      phoneState: PhoneState.Verified,
    },
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.TestingAccountCreateRequest](../../sdk/models/operations/testingaccountcreaterequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.TestingAccountCreateSecurity](../../sdk/models/operations/testingaccountcreatesecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.TestingAccountCreateResponse](../../sdk/models/operations/testingaccountcreateresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## getCreditCard

Retrieve test credit card information. This includes its token, which is
generated against the `4111 1111 1111 1004` test card.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { TestingCreditCardGetSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: TestingCreditCardGetSecurity = {
  apiKey: "",
};

  const res = await sdk.testing.getCreditCard(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `security`                                                                                             | [operations.TestingCreditCardGetSecurity](../../sdk/models/operations/testingcreditcardgetsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.TestingCreditCardGetResponse](../../sdk/models/operations/testingcreditcardgetresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
