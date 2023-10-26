# Testing
(*testing*)

## Overview

Endpoints that allow you to generate and retrieve test data to verify certain
flows in non-production environments.


### Available Operations

* [testingAccountCreate](#testingaccountcreate) - Create a test account
* [testingCreditCardGet](#testingcreditcardget) - Retrieve a test credit card, including its token
* [testingShipmentTrackingCreate](#testingshipmenttrackingcreate) - Simulate a shipment tracking update

## testingAccountCreate

Create a Bolt shopper account for testing purposes.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountTestCreationDataEmailState, AccountTestCreationDataPhoneState } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.testing.testingAccountCreate({
    xPublishableKey: "string",
    accountTestCreationDataInput: {
      emailState: AccountTestCreationDataEmailState.Unverified,
      hasAddress: true,
      isMigrated: true,
      phoneState: AccountTestCreationDataPhoneState.Verified,
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
| `request`                                                                                        | [operations.TestingAccountCreateRequest](../../models/operations/testingaccountcreaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.TestingAccountCreateResponse](../../models/operations/testingaccountcreateresponse.md)>**


## testingCreditCardGet

Retrieve test credit card information. This includes its token, which is
generated against the `4111 1111 1111 1004` test card.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.testing.testingCreditCardGet();

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

**Promise<[operations.TestingCreditCardGetResponse](../../models/operations/testingcreditcardgetresponse.md)>**


## testingShipmentTrackingCreate

Simulate a shipment tracking update, such as those that Bolt would ingest from
third-party shipping providers that would allow updating tracking and delivery
information to shipments associated with orders.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { ShipmentTrackingUpdateStatus, ShipmentTrackingUpdateTrackingDetailsStatus } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.testing.testingShipmentTrackingCreate({
    deliveryDate: new Date("2014-08-23:T06:00:00Z"),
    status: ShipmentTrackingUpdateStatus.InTransit,
    trackingDetails: [
      {
        countryCode: "US",
        eventDate: "2014-08-21:T14:24:00Z",
        locality: "San Francisco",
        message: "Billing information received",
        postalCode: "94105",
        region: "CA",
        status: ShipmentTrackingUpdateTrackingDetailsStatus.PreTransit,
      },
    ],
    trackingNumber: "MockBolt-143292",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.ShipmentTrackingUpdate](../../models/shared/shipmenttrackingupdate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.TestingShipmentTrackingCreateResponse](../../models/operations/testingshipmenttrackingcreateresponse.md)>**

