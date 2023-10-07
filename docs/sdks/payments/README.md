# Payments
(*payments*)

## Overview

Use the Payments API to tokenize and process alternative payment methods including Paypal with Bolt. This API is for the Bolt
Accounts package.


### Available Operations

* [guestPaymentsInitialize](#guestpaymentsinitialize) - Initialize a Bolt payment for guest shoppers
* [paymentsInitialize](#paymentsinitialize) - Initialize a Bolt payment for logged in shoppers

## guestPaymentsInitialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for guest shoppers.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.payments.guestPaymentsInitialize({
    xPublishableKey: "Soap whereas input",
    guestPaymentMethodInitializeRequest: {
      cart: {
        amounts: {
          currency: "USD",
          tax: 900,
          total: 900,
        },
        discounts: [
          {
            amounts: {
              currency: "USD",
              tax: 900,
              total: 900,
            },
            code: "SUMMER10DISCOUNT",
            detailsUrl: "https://www.example.com/SUMMER-SALE",
          },
        ],
        displayId: "215614191",
        items: [
          {
            description: "Large tote with Bolt logo.",
            imageUrl: "https://www.example.com/products/123456/images/1.png",
            name: "Bolt Swag Bag",
            quantity: 1,
            reference: "item_100",
            totalAmount: 1000,
            unitPrice: 1000,
          },
        ],
        orderDescription: "Order #1234567890",
        orderReference: "order_100",
        shipments: [
          {
            address: "Martin",
            carrier: "FedEx",
            cost: {
              currency: "USD",
              tax: 900,
              total: 900,
            },
          },
        ],
      },
      paymentMethod: "perferendis",
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
| `request`                                                                                              | [operations.GuestPaymentsInitializeRequest](../../models/operations/guestpaymentsinitializerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GuestPaymentsInitializeResponse](../../models/operations/guestpaymentsinitializeresponse.md)>**


## paymentsInitialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for logged in shoppers.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { PaymentsInitializeSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: PaymentsInitializeSecurity = {
  apiKey: "",
  oauth: "",
};

  const res = await sdk.payments.paymentsInitialize({
    xPublishableKey: "possimus",
    paymentMethodInitializeRequest: {
      cart: {
        amounts: {
          currency: "USD",
          tax: 900,
          total: 900,
        },
        discounts: [
          {
            amounts: {
              currency: "USD",
              tax: 900,
              total: 900,
            },
            code: "SUMMER10DISCOUNT",
            detailsUrl: "https://www.example.com/SUMMER-SALE",
          },
        ],
        displayId: "215614191",
        items: [
          {
            description: "Large tote with Bolt logo.",
            imageUrl: "https://www.example.com/products/123456/images/1.png",
            name: "Bolt Swag Bag",
            quantity: 1,
            reference: "item_100",
            totalAmount: 1000,
            unitPrice: 1000,
          },
        ],
        orderDescription: "Order #1234567890",
        orderReference: "order_100",
        shipments: [
          {
            address: "bin",
            carrier: "FedEx",
            cost: {
              currency: "USD",
              tax: 900,
              total: 900,
            },
          },
        ],
      },
      paymentMethod: "Cloned",
    },
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PaymentsInitializeRequest](../../models/operations/paymentsinitializerequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PaymentsInitializeSecurity](../../models/operations/paymentsinitializesecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PaymentsInitializeResponse](../../models/operations/paymentsinitializeresponse.md)>**

