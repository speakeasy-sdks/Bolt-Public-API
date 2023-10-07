<!-- Start SDK Example Usage -->


```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddPaymentMethodSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltPublicAPI();
const operationSecurity: AccountAddPaymentMethodSecurity = {
  apiKey: "",
  oauth: "",
};

  const res = await sdk.account.accountAddPaymentMethod({
    requestBody: "Officer",
    xPublishableKey: "Silicon female",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->