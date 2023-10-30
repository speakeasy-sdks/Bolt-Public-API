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
import { AddressListingCountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

(async () => {
    const sdk = new BoltPublicAPI({
        security: {
            apiKey: "",
            oauth: "",
        },
    });

    const res = await sdk.account.addAddress({
        xPublishableKey: "string",
        addressListingInput: {
            company: "ACME Corporation",
            countryCode: AddressListingCountryCode.Us,
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
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/sdks/account/README.md)

* [addAddress](docs/sdks/account/README.md#addaddress) - Add an address
* [addPaymentMethod](docs/sdks/account/README.md#addpaymentmethod) - Add a payment method to a shopper's Bolt account Wallet.
* [deleteAddress](docs/sdks/account/README.md#deleteaddress) - Delete an existing address
* [deletePaymentMethod](docs/sdks/account/README.md#deletepaymentmethod) - Delete an existing payment method
* [detect](docs/sdks/account/README.md#detect) - Determine the existence of a Bolt account
* [getDetails](docs/sdks/account/README.md#getdetails) - Retrieve account details
* [updateAddress](docs/sdks/account/README.md#updateaddress) - Edit an existing address


### [payments.guest](docs/sdks/paymentsguest/README.md)

* [initialize](docs/sdks/paymentsguest/README.md#initialize) - Initialize a Bolt payment for guest shoppers
* [performAction](docs/sdks/paymentsguest/README.md#performaction) - Perform an irreversible action (e.g. finalize) on a pending guest payment
* [update](docs/sdks/paymentsguest/README.md#update) - Update an existing guest payment

### [payments.loggedIn](docs/sdks/paymentsloggedin/README.md)

* [initialize](docs/sdks/paymentsloggedin/README.md#initialize) - Initialize a Bolt payment for logged in shoppers
* [performAction](docs/sdks/paymentsloggedin/README.md#performaction) - Perform an irreversible action (e.g. finalize) on a pending payment
* [update](docs/sdks/paymentsloggedin/README.md#update) - Update an existing payment

### [testing](docs/sdks/testing/README.md)

* [createAccount](docs/sdks/testing/README.md#createaccount) - Create a test account
* [getCreditCard](docs/sdks/testing/README.md#getcreditcard) - Retrieve a test credit card, including its token
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

(async() => {
  const sdk = new BoltPublicAPI({
    security: {
      apiKey: "",
      oauth: "",
    },
  });

  
  let res;
  try {
    res = await sdk.account.deleteAddress({
    xPublishableKey: "string",
    id: "D4g3h5tBuVYK9",
  });
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



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.{username}.dev.bolt.me/v3` | `username` (default is `xwang`) |
| 1 | `https://{environment}.bolt.com/v1` | `environment` (default is `api-sandbox`) |


Some of the server options above contain variables. If you want to set the values of those variables, the following options are provided for doing so:
 * `environment: ServerEnvironment`

 * `username: string`

For example:


```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AddressListingCountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

(async () => {
    const sdk = new BoltPublicAPI({
        security: {
            apiKey: "",
            oauth: "",
        },
        serverIdx: 1,
    });

    const res = await sdk.account.addAddress({
        xPublishableKey: "string",
        addressListingInput: {
            company: "ACME Corporation",
            countryCode: AddressListingCountryCode.Us,
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
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AddressListingCountryCode } from "Bolt-Public-API/dist/sdk/models/shared";

(async () => {
    const sdk = new BoltPublicAPI({
        security: {
            apiKey: "",
            oauth: "",
        },
        serverURL: "https://api.{username}.dev.bolt.me/v3",
    });

    const res = await sdk.account.addAddress({
        xPublishableKey: "string",
        addressListingInput: {
            company: "ACME Corporation",
            countryCode: AddressListingCountryCode.Us,
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
})();

```
<!-- End Server Selection -->

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
