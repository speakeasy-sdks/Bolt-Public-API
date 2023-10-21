# Transactions
(*transactions*)

## Overview

Transaction endpoints allow you to manage transactions. For example, you can capture
funds, void transactions, or issue refunds. You can also update certain fields for existing
transactions.


### Available Operations

* [transactionAction](#transactionaction) - Perform an irreversible action (e.g. capture, refund, void) on a transaction
* [transactionGet](#transactionget) - Retrieve transaction details
* [transactionUpdate](#transactionupdate) - Update certain transaction details

## transactionAction

Perform an irreversible action (e.g. capture, refund, void) on a transaction

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.transactions.transactionAction({
    xPublishableKey: "string",
    id: "OBYG-X1PX-FN55",
    transactionActionRequest: {
      action: "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.TransactionActionRequest](../../models/operations/transactionactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.TransactionActionResponse](../../models/operations/transactionactionresponse.md)>**


## transactionGet

Retrieve information for a specific transaction

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.transactions.transactionGet({
    xPublishableKey: "string",
    id: "OBYG-X1PX-FN55",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.TransactionGetRequest](../../models/operations/transactiongetrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.TransactionGetResponse](../../models/operations/transactiongetresponse.md)>**


## transactionUpdate

Update certain transaction details, such as the user-facing ID of its associate order

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.transactions.transactionUpdate({
    xPublishableKey: "string",
    id: "OBYG-X1PX-FN55",
    transactionUpdateRequest: {
      order: {
        cart: {
          displayId: "215614191",
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.TransactionUpdateRequest](../../models/operations/transactionupdaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.TransactionUpdateResponse](../../models/operations/transactionupdateresponse.md)>**

