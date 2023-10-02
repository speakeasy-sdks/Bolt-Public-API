/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Amounts } from "./amounts";
import { Expose, Type } from "class-transformer";

export class CartDiscount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amounts" })
    @Type(() => Amounts)
    amounts: Amounts;

    /**
     * Discount code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * Used to provide a link to additional details, such as a landing page, associated with the discount offering.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "details_url" })
    detailsUrl?: string;
}
