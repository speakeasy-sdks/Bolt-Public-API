<!-- Start SDK Example Usage -->


```typescript
import { BoltPublicAPI } from "Bolt-Public-API";
import { AccountAddPaymentMethodResponse, AccountAddPaymentMethodSecurity } from "Bolt-Public-API/dist/sdk/models/operations";

const sdk = new BoltPublicAPI();
const operationSecurity: AccountAddPaymentMethodSecurity = {
  apiKey: "",
  oauth: "",
};

sdk.account.accountAddPaymentMethod({
  requestBody: "Officer",
  xPublishableKey: "Silicon female",
}, operationSecurity).then((res: AccountAddPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->