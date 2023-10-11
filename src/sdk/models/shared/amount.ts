/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A supported currency.
 */
export enum AmountCurrency {
    Aud = "AUD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Usd = "USD",
}

/**
 * A monetary amount, i.e. a base unit amount and a supported currency.
 */
export class Amount extends SpeakeasyBase {
    /**
     * A supported currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: AmountCurrency;

    /**
     * A monetary amount, represented in its base units (e.g. USD/EUR cents).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "units" })
    units: number;
}
