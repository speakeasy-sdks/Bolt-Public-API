# Webhooks
(*webhooks*)

## Overview

Set up webhooks to notify your backend of events within Bolt. These webhooks
can communicate with your OMS or other systems to keep them up to date with Bolt.


<https://help.bolt.com/get-started/during-checkout/webhooks/>
### Available Operations

* [webhooksCreate](#webhookscreate) - Create a webhook to subscribe to certain events
* [webhooksDelete](#webhooksdelete) - Delete an existing webhook
* [webhooksGet](#webhooksget) - Retrieve information for a specific webhook
* [webhooksGetAll](#webhooksgetall) - Retrieve information about all existing webhooks

## webhooksCreate

Create a new webhook to receive notifications from Bolt about various events, such as transaction status.

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { WebhooksCreateResponse } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.webhooksCreate({
  event: "watt",
  url: "https://www.example.com/webhook",
}).then((res: WebhooksCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.WebhookInput](../../models/shared/webhookinput.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.WebhooksCreateResponse](../../models/operations/webhookscreateresponse.md)>**


## webhooksDelete

Delete an existing webhook. You will no longer receive notifications from Bolt about its events.

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { WebhooksDeleteResponse } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.webhooksDelete({
  id: "wh_za7VbYcSQU2zRgGQXQAm-g",
}).then((res: WebhooksDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.WebhooksDeleteRequest](../../models/operations/webhooksdeleterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.WebhooksDeleteResponse](../../models/operations/webhooksdeleteresponse.md)>**


## webhooksGet

Retrieve information for an existing webhook.

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { WebhooksGetResponse } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.webhooksGet({
  id: "wh_za7VbYcSQU2zRgGQXQAm-g",
}).then((res: WebhooksGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.WebhooksGetRequest](../../models/operations/webhooksgetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.WebhooksGetResponse](../../models/operations/webhooksgetresponse.md)>**


## webhooksGetAll

Retrieve information about all existing webhooks.

### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { WebhooksGetAllResponse } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI({
  security: {
    apiKey: "",
  },
});

sdk.webhooks.webhooksGetAll({
  xPublishableKey: "maxime",
}).then((res: WebhooksGetAllResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.WebhooksGetAllRequest](../../models/operations/webhooksgetallrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.WebhooksGetAllResponse](../../models/operations/webhooksgetallresponse.md)>**

