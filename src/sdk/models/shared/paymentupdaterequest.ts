/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Cart } from "./cart";
import { Expose, Type } from "class-transformer";

export class PaymentUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cart" })
    @Type(() => Cart)
    cart?: Cart;
}