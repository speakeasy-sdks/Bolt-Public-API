/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Profile extends SpeakeasyBase {
    /**
     * The email address asscoiated with this profile.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * The given name of the person associated with this profile.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    /**
     * The last name of the person associated with this profile.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    /**
     * The phone number associated with this profile.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;
}
