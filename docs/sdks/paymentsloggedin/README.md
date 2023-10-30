# PaymentsLoggedIn
(*payments.loggedIn*)

### Available Operations

* [initialize](#initialize) - Initialize a Bolt payment for logged in shoppers
* [performAction](#performaction) - Perform an irreversible action (e.g. finalize) on a pending payment
* [update](#update) - Update an existing payment

## initialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for logged in shoppers.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AmountCurrency, PaymentMethodReferenceTag } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.payments.loggedIn.initialize({
    xPublishableKey: "string",
    paymentInitializeRequest: {
      cart: {
        discounts: [
          {
            amount: {
              currency: AmountCurrency.Usd,
              units: 900,
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
            totalAmount: {
              currency: AmountCurrency.Usd,
              units: 900,
            },
            unitPrice: 1000,
          },
        ],
        orderDescription: "Order #1234567890",
        orderReference: "order_100",
        shipments: [
          {
            address: "string",
            carrier: "FedEx",
            cost: {
              currency: AmountCurrency.Usd,
              units: 900,
            },
          },
        ],
        tax: {
          currency: AmountCurrency.Usd,
          units: 900,
        },
        total: {
          currency: AmountCurrency.Usd,
          units: 900,
        },
      },
      paymentMethod: {
        dotTag: PaymentMethodReferenceTag.Id,
        id: "id",
      },
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PaymentsInitializeRequest](../../models/operations/paymentsinitializerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PaymentsInitializeResponse](../../models/operations/paymentsinitializeresponse.md)>**


## performAction

Perform an irreversible action on a pending payment, such as finalizing it.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { PaymentActionRequestTag } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.payments.loggedIn.performAction({
    xPublishableKey: "string",
    id: "iKv7t5bgt1gg",
    paymentActionRequest: {
      dotTag: PaymentActionRequestTag.Finalize,
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PaymentsActionRequest](../../models/operations/paymentsactionrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PaymentsActionResponse](../../models/operations/paymentsactionresponse.md)>**


## update

Update a pending payment


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AmountCurrency } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  const res = await sdk.payments.loggedIn.update({
    xPublishableKey: "string",
    id: "iKv7t5bgt1gg",
    paymentUpdateRequest: {
      cart: {
        discounts: [
          {
            amount: {
              currency: AmountCurrency.Usd,
              units: 900,
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
            totalAmount: {
              currency: AmountCurrency.Usd,
              units: 900,
            },
            unitPrice: 1000,
          },
        ],
        orderDescription: "Order #1234567890",
        orderReference: "order_100",
        shipments: [
          {
            address: "string",
            carrier: "FedEx",
            cost: {
              currency: AmountCurrency.Usd,
              units: 900,
            },
          },
        ],
        tax: {
          currency: AmountCurrency.Usd,
          units: 900,
        },
        total: {
          currency: AmountCurrency.Usd,
          units: 900,
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PaymentsUpdateRequest](../../models/operations/paymentsupdaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PaymentsUpdateResponse](../../models/operations/paymentsupdateresponse.md)>**

