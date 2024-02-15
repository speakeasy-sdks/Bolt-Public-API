<!-- Start SDK Example Usage [usage] -->
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