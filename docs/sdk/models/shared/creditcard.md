# CreditCard


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `expiration`                                            | *string*                                                | :heavy_check_mark:                                      | The expiration date, in YYYY-MM format.                 | 2029-03                                                 |
| `last4`                                                 | *string*                                                | :heavy_check_mark:                                      | The account number's last four digits.                  | 1004                                                    |
| `network`                                               | [shared.Network](../../../sdk/models/shared/network.md) | :heavy_check_mark:                                      | The credit card's network.                              | visa                                                    |