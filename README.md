# Bolt-Public-API

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/Bolt-Public-API.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/Bolt-Public-API/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Bolt-Public-API
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Bolt-Public-API
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddPaymentMethodSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

(async () => {
    const sdk = new BoltPublicAPI();
    const operationSecurity: AccountAddPaymentMethodSecurity = {
        apiKey: "",
        oauth: "",
    };

    const res = await sdk.account.accountAddPaymentMethod(
        {
            requestBody: "string",
            xPublishableKey: "string",
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/sdks/account/README.md)

* [accountAddPaymentMethod](docs/sdks/account/README.md#accountaddpaymentmethod) - Add a payment method to a shopper's Bolt account Wallet.
* [accountAddressCreate](docs/sdks/account/README.md#accountaddresscreate) - Add an address
* [accountAddressDelete](docs/sdks/account/README.md#accountaddressdelete) - Delete an existing address
* [accountAddressEdit](docs/sdks/account/README.md#accountaddressedit) - Edit an existing address
* [accountExists](docs/sdks/account/README.md#accountexists) - Determine the existence of a Bolt account
* [accountGet](docs/sdks/account/README.md#accountget) - Retrieve account details
* [accountPaymentMethodDelete](docs/sdks/account/README.md#accountpaymentmethoddelete) - Delete an existing payment method

### [configuration](docs/sdks/configuration/README.md)

* [merchantCallbacksGet](docs/sdks/configuration/README.md#merchantcallbacksget) - Retrieve callback URLs for the merchant
* [merchantCallbacksUpdate](docs/sdks/configuration/README.md#merchantcallbacksupdate) - Update callback URLs for the merchant
* [merchantIdentifiersGet](docs/sdks/configuration/README.md#merchantidentifiersget) - Retrieve identifiers for the merchant

### [oAuth](docs/sdks/oauth/README.md)

* [oAuthGetToken](docs/sdks/oauth/README.md#oauthgettoken) - Get OAuth token

### [payments](docs/sdks/payments/README.md)

* [guestPaymentsAction](docs/sdks/payments/README.md#guestpaymentsaction) - Perform an irreversible action (e.g. finalize) on a pending guest payment
* [guestPaymentsInitialize](docs/sdks/payments/README.md#guestpaymentsinitialize) - Initialize a Bolt payment for guest shoppers
* [guestPaymentsUpdate](docs/sdks/payments/README.md#guestpaymentsupdate) - Update an existing guest payment
* [paymentsAction](docs/sdks/payments/README.md#paymentsaction) - Perform an irreversible action (e.g. finalize) on a pending payment
* [paymentsInitialize](docs/sdks/payments/README.md#paymentsinitialize) - Initialize a Bolt payment for logged in shoppers
* [paymentsUpdate](docs/sdks/payments/README.md#paymentsupdate) - Update an existing payment

### [testing](docs/sdks/testing/README.md)

* [testingAccountCreate](docs/sdks/testing/README.md#testingaccountcreate) - Create a test account
* [testingCreditCardGet](docs/sdks/testing/README.md#testingcreditcardget) - Retrieve a test credit card, including its token
* [testingShipmentTrackingCreate](docs/sdks/testing/README.md#testingshipmenttrackingcreate) - Simulate a shipment tracking update

### [transactions](docs/sdks/transactions/README.md)

* [transactionAction](docs/sdks/transactions/README.md#transactionaction) - Perform an irreversible action (e.g. capture, refund, void) on a transaction
* [transactionGet](docs/sdks/transactions/README.md#transactionget) - Retrieve transaction details
* [transactionUpdate](docs/sdks/transactions/README.md#transactionupdate) - Update certain transaction details

### [webhooks](docs/sdks/webhooks/README.md)

* [webhooksCreate](docs/sdks/webhooks/README.md#webhookscreate) - Create a webhook to subscribe to certain events
* [webhooksDelete](docs/sdks/webhooks/README.md#webhooksdelete) - Delete an existing webhook
* [webhooksGet](docs/sdks/webhooks/README.md#webhooksget) - Retrieve information for a specific webhook
* [webhooksGetAll](docs/sdks/webhooks/README.md#webhooksgetall) - Retrieve information about all existing webhooks
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->
# Dev Containers
<div align="left">
    <a href="https://codespaces.new/speakeasy-sdks/Bolt-Public-API.git/tree/main"><img src="https://github.com/codespaces/badge.svg" /></a>
    
</div>

Experience our SDK in an enhanced sandbox environment. Try it now in **GitHub Codespaces**!

* [Explore Dev Containers](.devcontainer/README.md)
<!-- End Dev Containers -->

<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


## Example

```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddressDeleteSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: AccountAddressDeleteSecurity = {
  apiKey: "",
  oauth: "",
};

  
  let res;
  try {
    res = await sdk.account.accountAddressDelete({
    xPublishableKey: "string",
    id: "D4g3h5tBuVYK9",
  }, operationSecurity);
  } catch (e) { 
    if (e instanceof error) {
      console.error(e) // handle exception 
    
  }

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End Error Handling -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from Bolt-Public-API import BoltPublicAPI;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new BoltPublicAPI({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

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
