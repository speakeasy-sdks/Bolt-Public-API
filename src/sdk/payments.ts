/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Guest } from "./guest";
import { LoggedIn } from "./loggedin";
import { SDKConfiguration } from "./sdk";

export class Payments {
    public guest: Guest;
    public loggedIn: LoggedIn;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.guest = new Guest(this.sdkConfiguration);
        this.loggedIn = new LoggedIn(this.sdkConfiguration);
    }
}
