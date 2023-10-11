# Payments
(*payments*)

## Overview

Use the Payments API to tokenize and process alternative payment methods including Paypal with Bolt. This API is for the Bolt
Accounts package.


### Available Operations

* [guestPaymentsAction](#guestpaymentsaction) - Perform an irreversible action (e.g. finalize) on a pending guest payment
* [guestPaymentsInitialize](#guestpaymentsinitialize) - Initialize a Bolt payment for guest shoppers
* [guestPaymentsUpdate](#guestpaymentsupdate) - Update an existing guest payment
* [paymentsAction](#paymentsaction) - Perform an irreversible action (e.g. finalize) on a pending payment
* [paymentsInitialize](#paymentsinitialize) - Initialize a Bolt payment for logged in shoppers
* [paymentsUpdate](#paymentsupdate) - Update an existing payment

## guestPaymentsAction

Perform an irreversible action on a pending guest payment, such as finalizing it.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { PaymentActionRequestTag } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.payments.guestPaymentsAction({
    xPublishableKey: "Optimization",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GuestPaymentsActionRequest](../../models/operations/guestpaymentsactionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GuestPaymentsActionResponse](../../models/operations/guestpaymentsactionresponse.md)>**


## guestPaymentsInitialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for guest shoppers.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AmountCurrency } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.payments.guestPaymentsInitialize({
    xPublishableKey: "Soap whereas input",
    guestPaymentInitializeRequest: {
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
            address: "Martin",
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
      paymentMethod: "perferendis",
      profile: {
        createAccount: true,
        email: "alice@example.com",
        firstName: "Alice",
        lastName: "Baker",
        phone: "+14155550199",
      },
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


## guestPaymentsUpdate

Update a pending guest payment


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AmountCurrency } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
    },
  });

  const res = await sdk.payments.guestPaymentsUpdate({
    xPublishableKey: "female index",
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
            address: "Helium",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GuestPaymentsUpdateRequest](../../models/operations/guestpaymentsupdaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GuestPaymentsUpdateResponse](../../models/operations/guestpaymentsupdateresponse.md)>**


## paymentsAction

Perform an irreversible action on a pending payment, such as finalizing it.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { PaymentsActionSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import { PaymentActionRequestTag } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: PaymentsActionSecurity = {
  apiKey: "",
  oauth: "",
};

  const res = await sdk.payments.paymentsAction({
    xPublishableKey: "Calcium navigating",
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

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PaymentsActionRequest](../../models/operations/paymentsactionrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.PaymentsActionSecurity](../../models/operations/paymentsactionsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PaymentsActionResponse](../../models/operations/paymentsactionresponse.md)>**


## paymentsInitialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for logged in shoppers.


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { PaymentsInitializeSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import { AmountCurrency, PaymentMethodReferenceTag } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: PaymentsInitializeSecurity = {
  apiKey: "",
  oauth: "",
};

  const res = await sdk.payments.paymentsInitialize({
    xPublishableKey: "possimus",
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
            address: "bin",
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


## paymentsUpdate

Update a pending payment


### Example Usage

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { PaymentsUpdateSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import { AmountCurrency } from "Bolt-Public-API/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: PaymentsUpdateSecurity = {
  apiKey: "",
  oauth: "",
};

  const res = await sdk.payments.paymentsUpdate({
    xPublishableKey: "Officer",
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
            address: "Intelligent",
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
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PaymentsUpdateRequest](../../models/operations/paymentsupdaterequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.PaymentsUpdateSecurity](../../models/operations/paymentsupdatesecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PaymentsUpdateResponse](../../models/operations/paymentsupdateresponse.md)>**

