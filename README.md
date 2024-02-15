# Bolt-Public-API

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/Bolt-Public-API.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/Bolt-Public-API/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Bolt-Public-API
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Bolt-Public-API
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { CountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

async function run() {
    const sdk = new BoltPublicAPI({
        security: {
            apiKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.account.addAddress({
        xPublishableKey: "<value>",
        addressListing: {
            company: "ACME Corporation",
            countryCode: CountryCode.Us,
            email: "alice@example.com",
            firstName: "Alice",
            isDefault: true,
            lastName: "Baker",
            locality: "San Francisco",
            phone: "+14155550199",
            postalCode: "94105",
            region: "CA",
            streetAddress1: "535 Mission St, Ste 1401",
            streetAddress2: "c/o Shipping Department",
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [account](docs/sdks/account/README.md)

* [addAddress](docs/sdks/account/README.md#addaddress) - Add an address
* [addPaymentMethod](docs/sdks/account/README.md#addpaymentmethod) - Add a payment method to a shopper's Bolt account Wallet.
* [deleteAddress](docs/sdks/account/README.md#deleteaddress) - Delete an existing address
* [deletePaymentMethod](docs/sdks/account/README.md#deletepaymentmethod) - Delete an existing payment method
* [detect](docs/sdks/account/README.md#detect) - Determine the existence of a Bolt account
* [getDetails](docs/sdks/account/README.md#getdetails) - Retrieve account details
* [updateAddress](docs/sdks/account/README.md#updateaddress) - Edit an existing address


### [payments.guest](docs/sdks/guest/README.md)

* [initialize](docs/sdks/guest/README.md#initialize) - Initialize a Bolt payment for guest shoppers
* [performAction](docs/sdks/guest/README.md#performaction) - Perform an irreversible action (e.g. finalize) on a pending guest payment
* [update](docs/sdks/guest/README.md#update) - Update an existing guest payment

### [payments.loggedIn](docs/sdks/loggedin/README.md)

* [initialize](docs/sdks/loggedin/README.md#initialize) - Initialize a Bolt payment for logged in shoppers
* [performAction](docs/sdks/loggedin/README.md#performaction) - Perform an irreversible action (e.g. finalize) on a pending payment
* [update](docs/sdks/loggedin/README.md#update) - Update an existing payment

### [oAuth](docs/sdks/oauth/README.md)

* [getToken](docs/sdks/oauth/README.md#gettoken) - Get OAuth token

### [testing](docs/sdks/testing/README.md)

* [createAccount](docs/sdks/testing/README.md#createaccount) - Create a test account
* [getCreditCard](docs/sdks/testing/README.md#getcreditcard) - Retrieve a test credit card, including its token
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Example

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

async function run() {
    const sdk = new BoltPublicAPI({
        security: {
            apiKey: "<YOUR_API_KEY_HERE>",
        },
    });

    let res;
    try {
        res = await sdk.account.deleteAddress({
            xPublishableKey: "<value>",
            id: "D4g3h5tBuVYK9",
        });
    } catch (err) {
        if (err instanceof errors.ErrorT) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { Bolt-Public-API } from "BoltPublicAPI";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new BoltPublicAPI({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://{environment}.bolt.com/v3` | `environment` (default is `api-sandbox`) |

#### Example

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { CountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

async function run() {
    const sdk = new BoltPublicAPI({
        serverIdx: 0,
        security: {
            apiKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.account.addAddress({
        xPublishableKey: "<value>",
        addressListing: {
            company: "ACME Corporation",
            countryCode: CountryCode.Us,
            email: "alice@example.com",
            firstName: "Alice",
            isDefault: true,
            lastName: "Baker",
            locality: "San Francisco",
            phone: "+14155550199",
            postalCode: "94105",
            region: "CA",
            streetAddress1: "535 Mission St, Ste 1401",
            streetAddress2: "c/o Shipping Department",
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `environment: models.ServerEnvironment`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { CountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

async function run() {
    const sdk = new BoltPublicAPI({
        serverURL: "https://{environment}.bolt.com/v3",
        security: {
            apiKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.account.addAddress({
        xPublishableKey: "<value>",
        addressListing: {
            company: "ACME Corporation",
            countryCode: CountryCode.Us,
            email: "alice@example.com",
            firstName: "Alice",
            isDefault: true,
            lastName: "Baker",
            locality: "San Francisco",
            phone: "+14155550199",
            postalCode: "94105",
            region: "CA",
            streetAddress1: "535 Mission St, Ste 1401",
            streetAddress2: "c/o Shipping Department",
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `apiKey`     | apiKey       | API key      |
| `oauth`      | oauth2       | OAuth2 token |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { CountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

async function run() {
    const sdk = new BoltPublicAPI({
        security: {
            apiKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.account.addAddress({
        xPublishableKey: "<value>",
        addressListing: {
            company: "ACME Corporation",
            countryCode: CountryCode.Us,
            email: "alice@example.com",
            firstName: "Alice",
            isDefault: true,
            lastName: "Baker",
            locality: "San Francisco",
            phone: "+14155550199",
            postalCode: "94105",
            region: "CA",
            streetAddress1: "535 Mission St, Ste 1401",
            streetAddress2: "c/o Shipping Department",
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { GuestPaymentsInitializeSecurity } from "Bolt-Public-API/dist/sdk/models/operations";
import { Currency } from "Bolt-Public-API/dist/sdk/models/shared";

async function run() {
    const sdk = new BoltPublicAPI();
    const operationSecurity: GuestPaymentsInitializeSecurity = {
        apiKey: "<YOUR_API_KEY_HERE>",
    };

    const res = await sdk.payments.guest.initialize(
        {
            xPublishableKey: "<value>",
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
                            address: "<value>",
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
                paymentMethod: "<value>",
                profile: {
                    createAccount: true,
                    email: "alice@example.com",
                    firstName: "Alice",
                    lastName: "Baker",
                    phone: "+14155550199",
                },
            },
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
