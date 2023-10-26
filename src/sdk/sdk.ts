/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Account } from "./account";
import { Configuration } from "./configuration";
import * as shared from "./models/shared";
import { OAuth } from "./oauth";
import { Payments } from "./payments";
import { Testing } from "./testing";
import { Transactions } from "./transactions";
import { Webhooks } from "./webhooks";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    "https://api.{username}.dev.bolt.me/v3",
    "https://{environment}.bolt.com/v1",
] as const;

export enum ServerEnvironment {
    Api = "api",
    ApiSandbox = "api-sandbox",
    ApiStaging = "api-staging",
}

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows setting the environment variable for url substitution
     */
    environment?: ServerEnvironment;

    /**
     * Allows setting the username variable for url substitution
     */
    username?: string;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "3.0.1";
    sdkVersion = "0.6.1";
    genVersion = "2.172.0";
    userAgent = "speakeasy-sdk/typescript 0.6.1 2.172.0 3.0.1 Bolt-Public-API";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Bolt API Reference: A comprehensive Bolt API reference for interacting with Transactions, Orders, Product Catalog, Configuration, Testing, and much more.
 */
export class BoltPublicAPI {
    /**
     * Account endpoints allow you to view and manage shoppers' accounts. For example,
     *
     * @remarks
     * you can add or remove addresses and payment information.
     *
     */
    public account: Account;
    /**
     * Merchant configuration endpoints allow you to retrieve and configure merchant-level
     *
     * @remarks
     * configuration, such as callback URLs, identifiers, secrets, etc...
     *
     */
    public configuration: Configuration;
    /**
     * Use this endpoint to retrieve an OAuth token. Use the token to allow your ecommerce server to make calls to the Account
     *
     * @remarks
     * endpoint and create a one-click checkout experience for shoppers.
     *
     *
     * @see {@link https://help.bolt.com/products/accounts/direct-api/oauth-guide/}
     */
    public oAuth: OAuth;
    /**
     * Use the Payments API to tokenize and process alternative payment methods including Paypal with Bolt. This API is for the Bolt
     *
     * @remarks
     * Accounts package.
     *
     */
    public payments: Payments;
    /**
     * Endpoints that allow you to generate and retrieve test data to verify certain
     *
     * @remarks
     * flows in non-production environments.
     *
     */
    public testing: Testing;
    /**
     * Transaction endpoints allow you to manage transactions. For example, you can capture
     *
     * @remarks
     * funds, void transactions, or issue refunds. You can also update certain fields for existing
     * transactions.
     *
     */
    public transactions: Transactions;
    /**
     * Set up webhooks to notify your backend of events within Bolt. These webhooks
     *
     * @remarks
     * can communicate with your OMS or other systems to keep them up to date with Bolt.
     *
     *
     * @see {@link https://help.bolt.com/get-started/during-checkout/webhooks/}
     */
    public webhooks: Webhooks;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        let defaults: any = {};

        const serverDefaults = [
            {
                username: props?.username?.toString() ?? "xwang",
            },
            {
                environment: props?.environment?.toString() ?? "api-sandbox",
            },
        ];
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
            defaults = serverDefaults[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            serverDefaults: defaults,
            retryConfig: props?.retryConfig,
        });

        this.account = new Account(this.sdkConfiguration);
        this.configuration = new Configuration(this.sdkConfiguration);
        this.oAuth = new OAuth(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.testing = new Testing(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
    }
}
