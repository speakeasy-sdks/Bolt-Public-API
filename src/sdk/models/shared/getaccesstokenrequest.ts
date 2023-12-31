/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * The type of OAuth 2.0 grant being utilized.
 *
 * @remarks
 *
 * The value will always be `authorization_code` when exchanging an authorization code for an access token.
 *
 */
export enum GrantType {
    AuthorizationCode = "authorization_code",
}

export enum Scope {
    BoltAccountManage = "bolt.account.manage",
    BoltAccountView = "bolt.account.view",
    Openid = "openid",
}

export class GetAccessTokenRequest extends SpeakeasyBase {
    /**
     * Merchant publishable key which can be found in the merchant dashboard
     */
    @SpeakeasyMetadata({ data: "form, name=client_id" })
    clientId: string;

    /**
     * Your Bolt API Key.
     */
    @SpeakeasyMetadata({ data: "form, name=client_secret" })
    clientSecret: string;

    /**
     * Fetched value using OTP value from the Authorization Modal.
     */
    @SpeakeasyMetadata({ data: "form, name=code" })
    code: string;

    /**
     * The type of OAuth 2.0 grant being utilized.
     *
     * @remarks
     *
     * The value will always be `authorization_code` when exchanging an authorization code for an access token.
     *
     */
    @SpeakeasyMetadata({ data: "form, name=grant_type" })
    grantType: GrantType;

    /**
     * The scope issued to the merchant when receiving an authorization code.
     *
     * @remarks
     * Options include `bolt.account.manage`, `bolt.account.view`, `openid`.
     * You can find more information on these options in our
     * [OAuth scope documentation](https://help.bolt.com/developers/references/bolt-oauth/#scopes).
     *
     */
    @SpeakeasyMetadata({ data: "form, name=scope" })
    scope: Scope[];

    /**
     * A randomly generated string issued to the merchant when receiving an authorization code used to prevent CSRF attacks
     */
    @SpeakeasyMetadata({ data: "form, name=state" })
    state?: string;
}
