# Transactions
(*transactions*)

## Overview

Transaction endpoints allow you to manage transactions. For example, you can capture
funds, void transactions, or issue refunds. You can also update certain fields for existing
transactions.


### Available Operations

* [getDetails](#getdetails) - Retrieve transaction details
* [performAction](#performaction) - Perform an irreversible action (e.g. capture, refund, void) on a transaction
* [update](#update) - Update certain transaction details

## getDetails

Retrieve information for a specific transaction

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { TransactionGetSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: TransactionGetSecurity = {
  apiKey: "",
};

  const res = await sdk.transactions.getDetails({
    xPublishableKey: "string",
    id: "OBYG-X1PX-FN55",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.TransactionGetRequest](../../models/operations/transactiongetrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.TransactionGetSecurity](../../models/operations/transactiongetsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.TransactionGetResponse](../../models/operations/transactiongetresponse.md)>**


## performAction

Perform an irreversible action (e.g. capture, refund, void) on a transaction

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { TransactionActionSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: TransactionActionSecurity = {
  apiKey: "",
};

  const res = await sdk.transactions.performAction({
    xPublishableKey: "string",
    id: "OBYG-X1PX-FN55",
    transactionActionRequest: {
      action: "string",
    },
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.TransactionActionRequest](../../models/operations/transactionactionrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.TransactionActionSecurity](../../models/operations/transactionactionsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.TransactionActionResponse](../../models/operations/transactionactionresponse.md)>**


## update

Update certain transaction details, such as the user-facing ID of its associate order

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { TransactionUpdateSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: TransactionUpdateSecurity = {
  apiKey: "",
};

  const res = await sdk.transactions.update({
    xPublishableKey: "string",
    id: "OBYG-X1PX-FN55",
    transactionUpdateRequest: {
      order: {
        cart: {
          displayId: "215614191",
        },
      },
    },
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.TransactionUpdateRequest](../../models/operations/transactionupdaterequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.TransactionUpdateSecurity](../../models/operations/transactionupdatesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.TransactionUpdateResponse](../../models/operations/transactionupdateresponse.md)>**

