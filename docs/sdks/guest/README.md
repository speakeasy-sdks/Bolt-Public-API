# Guest
(*.payments.guest*)

### Available Operations

* [initialize](#initialize) - Initialize a Bolt payment for guest shoppers
* [performAction](#performaction) - Perform an irreversible action (e.g. finalize) on a pending guest payment
* [update](#update) - Update an existing guest payment

## initialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for guest shoppers.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { GuestPaymentsInitializeSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import { Currency } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: GuestPaymentsInitializeSecurity = {
  apiKey: "",
};

  const res = await sdk.payments.guest.initialize({
    xPublishableKey: "string",
    guestPaymentInitializeRequest: {
      cart: {
        discounts: [
          {
            amount: {
              currency: Currency.Usd,
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
              currency: Currency.Usd,
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
              currency: Currency.Usd,
              units: 900,
            },
          },
        ],
        tax: {
          currency: Currency.Usd,
          units: 900,
        },
        total: {
          currency: Currency.Usd,
          units: 900,
        },
      },
      paymentMethod: "string",
      profile: {
        createAccount: true,
        email: "alice@example.com",
        firstName: "Alice",
        lastName: "Baker",
        phone: "+14155550199",
      },
    },
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GuestPaymentsInitializeRequest](../../models/operations/guestpaymentsinitializerequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.GuestPaymentsInitializeSecurity](../../models/operations/guestpaymentsinitializesecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GuestPaymentsInitializeResponse](../../models/operations/guestpaymentsinitializeresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## performAction

Perform an irreversible action on a pending guest payment, such as finalizing it.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { GuestPaymentsActionSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import { PaymentActionRequestTag } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: GuestPaymentsActionSecurity = {
  apiKey: "",
};

  const res = await sdk.payments.guest.performAction({
    xPublishableKey: "string",
    id: "iKv7t5bgt1gg",
    paymentActionRequest: {
      dotTag: PaymentActionRequestTag.Finalize,
    },
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GuestPaymentsActionRequest](../../models/operations/guestpaymentsactionrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GuestPaymentsActionSecurity](../../models/operations/guestpaymentsactionsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GuestPaymentsActionResponse](../../models/operations/guestpaymentsactionresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## update

Update a pending guest payment


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { GuestPaymentsUpdateSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import { Currency } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: GuestPaymentsUpdateSecurity = {
  apiKey: "",
};

  const res = await sdk.payments.guest.update({
    xPublishableKey: "string",
    id: "iKv7t5bgt1gg",
    paymentUpdateRequest: {
      cart: {
        discounts: [
          {
            amount: {
              currency: Currency.Usd,
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
              currency: Currency.Usd,
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
              currency: Currency.Usd,
              units: 900,
            },
          },
        ],
        tax: {
          currency: Currency.Usd,
          units: 900,
        },
        total: {
          currency: Currency.Usd,
          units: 900,
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GuestPaymentsUpdateRequest](../../models/operations/guestpaymentsupdaterequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GuestPaymentsUpdateSecurity](../../models/operations/guestpaymentsupdatesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GuestPaymentsUpdateResponse](../../models/operations/guestpaymentsupdateresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
