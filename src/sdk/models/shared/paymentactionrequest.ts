/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum DotTag {
    Finalize = "finalize",
}

export class PaymentActionRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: ".tag" })
    dotTag: DotTag;
}
