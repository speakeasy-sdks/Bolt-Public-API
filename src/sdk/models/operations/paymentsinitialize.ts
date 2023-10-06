/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PaymentsInitializeSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKey: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    oauth: string;
}

export class PaymentsInitializeRequest extends SpeakeasyBase {
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Publishable-Key" })
    xPublishableKey: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    paymentMethodInitializeRequest: shared.PaymentMethodInitializeRequest;
}

export class PaymentsInitializeResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Payment token retrieved
     */
    @SpeakeasyMetadata()
    paymentMethodInitializeResponse?: shared.PaymentMethodInitializeResponse;
}
