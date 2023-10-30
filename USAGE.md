<!-- Start SDK Example Usage -->


```typescript
import { BoltPublicAPI } from "Bolt-Public-API";

(async () => {
    const sdk = new BoltPublicAPI();

    const res = await sdk.pets.createPets();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->