"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileLocationSpotlight-a2dee9c7"],
    {
        25138: (e, l, n) => {
            n.d(l, { Z: () => h });
            var a,
                i,
                r,
                s,
                t,
                u,
                d,
                o,
                c,
                g,
                m,
                y,
                k,
                p,
                F,
                K,
                b = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "config" }), (i = { defaultValue: null, kind: "LocalArgument", name: "moduleId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "venueData" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateLocationSpotlightMutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "config", variableName: "config" },
                                    { kind: "Variable", name: "module_id", variableName: "moduleId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "venue_data", variableName: "venueData" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "user_update_about_module_from_venue",
                                plural: !1,
                                selections: [
                                    { args: null, kind: "FragmentSpread", name: "ProfileSpotlights_user" },
                                    (t = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "reason", storageKey: null },
                                        ],
                                        type: "ValidationError",
                                        abstractKey: null,
                                    }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, r, a],
                        kind: "Operation",
                        name: "useUpdateLocationSpotlightMutation",
                        selections: [
                            {
                                alias: null,
                                args: s,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "user_update_about_module_from_venue",
                                plural: !1,
                                selections: [
                                    (u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "blocking", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "blocked_by", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "withheld_scope", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }, (d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                            { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                            (o = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                            { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserBusinessModulesResponse",
                                                kind: "LinkedField",
                                                name: "profilemodules",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserBusinessModuleResponseV1",
                                                        kind: "LinkedField",
                                                        name: "v1",
                                                        plural: !0,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "profile_module",
                                                                plural: !1,
                                                                selections: [
                                                                    u,
                                                                    { kind: "TypeDiscriminator", abstractKey: "__isProfileModule" },
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "AboutModuleConfig",
                                                                                kind: "LinkedField",
                                                                                name: "config",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_call", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_dm", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_email", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_sms", storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "AboutModuleData",
                                                                                kind: "LinkedField",
                                                                                name: "data",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    { alias: null, args: null, concreteType: "BusinessAddressResponse", kind: "LinkedField", name: "address", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "formatted_address", storageKey: null }], storageKey: null },
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "BusinessContact",
                                                                                        kind: "LinkedField",
                                                                                        name: "contact",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, concreteType: "BusinessContactEmail", kind: "LinkedField", name: "email", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "email_address", storageKey: null }], storageKey: null },
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "BusinessContactPhone",
                                                                                                kind: "LinkedField",
                                                                                                name: "phone",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "country_code", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "number", storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "ApiShortenedUrl", kind: "LinkedField", name: "website", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "display", storageKey: null }, (c = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], storageKey: null },
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "BusinessOpenTimesResponse",
                                                                                        kind: "LinkedField",
                                                                                        name: "open_times",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "open_times_type", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "is_open", storageKey: null },
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "OpenCloseTimeNext",
                                                                                                kind: "LinkedField",
                                                                                                name: "opens",
                                                                                                plural: !1,
                                                                                                selections: (g = [
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "HourMinute",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "time",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "hour", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "minute", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ]),
                                                                                                storageKey: null,
                                                                                            },
                                                                                            { alias: null, args: null, concreteType: "OpenCloseTimeNext", kind: "LinkedField", name: "closes", plural: !1, selections: g, storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "GoogleVerificationData", kind: "LinkedField", name: "google_verification_data", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "static_map_image_url", storageKey: null }], storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        type: "AboutModule",
                                                                        abstractKey: null,
                                                                    },
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "ShopModuleData",
                                                                                kind: "LinkedField",
                                                                                name: "data",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: "LinkedField",
                                                                                        name: "items",
                                                                                        plural: !0,
                                                                                        selections: [
                                                                                            u,
                                                                                            {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "ProductCoreData",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "product_core_data",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "ProductDetails",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "product_details",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "cover_media", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "media_info", plural: !1, selections: [u, { kind: "InlineFragment", selections: [(m = { alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null })], type: "ApiImage", abstractKey: null }], storageKey: null }, (y = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                                                    { alias: null, args: null, concreteType: "ApiShortenedUrl", kind: "LinkedField", name: "external_url", plural: !1, selections: (k = [c]), storageKey: null },
                                                                                                                    { alias: null, args: null, concreteType: "ApiShortenedUrl", kind: "LinkedField", name: "mobile_url", plural: !1, selections: k, storageKey: null },
                                                                                                                    (p = {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "Price",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "price",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "micro_value", storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    }),
                                                                                                                    { alias: null, args: null, concreteType: "ProductSale", kind: "LinkedField", name: "product_sale", plural: !1, selections: [p], storageKey: null },
                                                                                                                    (F = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "ProductIdentifiers",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "product_identifiers",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "custom_product_type", storageKey: null },
                                                                                                                    { alias: null, args: null, concreteType: "GoogleProductCategory", kind: "LinkedField", name: "google_product_category", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "shortened_google_product_category_name", storageKey: null }], storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            { alias: null, args: null, concreteType: "ProductMetadata", kind: "LinkedField", name: "product_metadata", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "product_key", storageKey: null }], storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    y,
                                                                                                ],
                                                                                                type: "CommerceProduct",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                            { kind: "InlineFragment", selections: [y], type: "CommerceProductGroup", abstractKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        type: "ShopModule",
                                                                        abstractKey: null,
                                                                    },
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "CommunitiesModuleConfig",
                                                                                kind: "LinkedField",
                                                                                name: "config",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "CommunityResults",
                                                                                        kind: "LinkedField",
                                                                                        name: "community_results",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    u,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "members_facepile_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, y], type: "User", abstractKey: null }], storageKey: null }, y], storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "ApiMedia",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "default_banner_media",
                                                                                                                plural: !1,
                                                                                                                selections: (K = [
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: null,
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "media_info",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            u,
                                                                                                                            {
                                                                                                                                kind: "InlineFragment",
                                                                                                                                selections: [
                                                                                                                                    {
                                                                                                                                        alias: null,
                                                                                                                                        args: null,
                                                                                                                                        concreteType: "MediaColorInfo",
                                                                                                                                        kind: "LinkedField",
                                                                                                                                        name: "color_info",
                                                                                                                                        plural: !1,
                                                                                                                                        selections: [
                                                                                                                                            {
                                                                                                                                                alias: null,
                                                                                                                                                args: null,
                                                                                                                                                concreteType: "MediaColorPaletteItem",
                                                                                                                                                kind: "LinkedField",
                                                                                                                                                name: "palette",
                                                                                                                                                plural: !0,
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        alias: null,
                                                                                                                                                        args: null,
                                                                                                                                                        concreteType: "MediaColor",
                                                                                                                                                        kind: "LinkedField",
                                                                                                                                                        name: "rgb",
                                                                                                                                                        plural: !1,
                                                                                                                                                        selections: [
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "red", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "green", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "blue", storageKey: null },
                                                                                                                                                        ],
                                                                                                                                                        storageKey: null,
                                                                                                                                                    },
                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "percentage", storageKey: null },
                                                                                                                                                ],
                                                                                                                                                storageKey: null,
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                        storageKey: null,
                                                                                                                                    },
                                                                                                                                    m,
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "original_img_width", storageKey: null },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "original_img_height", storageKey: null },
                                                                                                                                    {
                                                                                                                                        alias: null,
                                                                                                                                        args: null,
                                                                                                                                        concreteType: "ApiMediaRect",
                                                                                                                                        kind: "LinkedField",
                                                                                                                                        name: "salient_rect",
                                                                                                                                        plural: !1,
                                                                                                                                        selections: [
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                                                                        ],
                                                                                                                                        storageKey: null,
                                                                                                                                    },
                                                                                                                                ],
                                                                                                                                type: "ApiImage",
                                                                                                                                abstractKey: null,
                                                                                                                            },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                    y,
                                                                                                                ]),
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "custom_banner_media", plural: !1, selections: K, storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                            d,
                                                                                                            o,
                                                                                                            y,
                                                                                                        ],
                                                                                                        type: "Community",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            y,
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        type: "CommunitiesModule",
                                                                        abstractKey: null,
                                                                    },
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            { alias: null, args: null, concreteType: "JobsModuleConfig", kind: "LinkedField", name: "config", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "show_more_jobs", storageKey: null }], storageKey: null },
                                                                            { alias: null, args: null, concreteType: "JobsModuleData", kind: "LinkedField", name: "data", plural: !1, selections: [{ alias: null, args: null, concreteType: "ApiJobResults", kind: "LinkedField", name: "featured_jobs_results", plural: !0, selections: [o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null }, F], storageKey: null }, y], type: "ApiJob", abstractKey: null }], storageKey: null }, y], storageKey: null }], storageKey: null },
                                                                        ],
                                                                        type: "JobsModule",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            y,
                                        ],
                                        type: "User",
                                        abstractKey: null,
                                    },
                                    t,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "gkS-BZDJQmuLULilcahg1w", metadata: {}, name: "useUpdateLocationSpotlightMutation", operationKind: "mutation", text: null },
                };
            b.hash = "6e4d4d2454f48e92a192da1d9d70da52";
            const h = b;
        },
        224504: (e, l, n) => {
            n.d(l, { t: () => r });
            const a = [],
                i = {},
                r = (e, l) => {
                    if (!e.length || 0 === Object.keys(l).length) return a;
                    const n = e.join();
                    return (
                        i[n] ||
                            (i[n] = e
                                .map((e) => ({ label: l[e.toUpperCase()], value: e }))
                                .filter((e) => e.label)
                                .sort((e, l) => e.label.localeCompare(l.label))),
                        i[n]
                    );
                };
        },
        359870: (e, l, n) => {
            n.d(l, { Z: () => t, b: () => s });
            var a = n(332920);
            const i = n.n(a)().g33c0564,
                r = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/,
                s = 385;
            function t(e) {
                return e.length > s ? i : r.test(e) ? void 0 : i;
            }
        },
        576025: (e, l, n) => {
            n.d(l, { Lf: () => d, Po: () => c, _t: () => o });
            n(571372);
            var a = n(499627),
                i = n(312771);
            const r = "countryNames",
                s = { fetchStatus: i.ZP.NONE, countries: {} },
                t = { REQUEST: `${r}_REQUEST`, FAILURE: `${r}_FAILURE`, SUCCESS: `${r}_SUCCESS` },
                u = (e = s, l) => {
                    if (!l) return e;
                    switch (l.type) {
                        case t.REQUEST:
                            return { ...e, fetchStatus: i.ZP.LOADING };
                        case t.FAILURE:
                            return { ...e, fetchStatus: i.ZP.NONE };
                        case t.SUCCESS:
                            return { ...e, countries: l.payload, fetchStatus: i.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            a.Z.register({ [r]: u });
            const d = (e) => e[r].countries,
                o = (e, l) => {
                    const n = l && l.toUpperCase();
                    return e[r].countries[n];
                },
                c = (e) => (l, a) =>
                    a()[r].fetchStatus === i.ZP.LOADED
                        ? Promise.resolve()
                        : (l({ type: t.REQUEST }),
                          ((e) => {
                              switch (e) {
                                  case "ar":
                                      return n.e("ondemand.countries-ar").then(n.t.bind(n, 855927, 19));
                                  case "bg":
                                      return n.e("ondemand.countries-bg").then(n.t.bind(n, 725159, 19));
                                  case "bn":
                                      return n.e("ondemand.countries-bn").then(n.t.bind(n, 322302, 19));
                                  case "ca":
                                      return n.e("ondemand.countries-ca").then(n.t.bind(n, 520516, 19));
                                  case "cs":
                                      return n.e("ondemand.countries-cs").then(n.t.bind(n, 829454, 19));
                                  case "da":
                                      return n.e("ondemand.countries-da").then(n.t.bind(n, 150661, 19));
                                  case "de":
                                      return n.e("ondemand.countries-de").then(n.t.bind(n, 565614, 19));
                                  case "el":
                                      return n.e("ondemand.countries-el").then(n.t.bind(n, 295816, 19));
                                  case "en-GB":
                                      return n.e("ondemand.countries-en-GB").then(n.t.bind(n, 397465, 19));
                                  case "en":
                                      return n.e("ondemand.countries-en").then(n.t.bind(n, 219973, 19));
                                  case "es":
                                      return n.e("ondemand.countries-es").then(n.t.bind(n, 690515, 19));
                                  case "eu":
                                      return n.e("ondemand.countries-eu").then(n.t.bind(n, 594549, 19));
                                  case "fa":
                                      return n.e("ondemand.countries-fa").then(n.t.bind(n, 548404, 19));
                                  case "fi":
                                      return n.e("ondemand.countries-fi").then(n.t.bind(n, 526226, 19));
                                  case "fil":
                                      return n.e("ondemand.countries-fil").then(n.t.bind(n, 387630, 19));
                                  case "fr":
                                      return n.e("ondemand.countries-fr").then(n.t.bind(n, 580700, 19));
                                  case "ga":
                                      return n.e("ondemand.countries-ga").then(n.t.bind(n, 434359, 19));
                                  case "gl":
                                      return n.e("ondemand.countries-gl").then(n.t.bind(n, 765077, 19));
                                  case "gu":
                                      return n.e("ondemand.countries-gu").then(n.t.bind(n, 826129, 19));
                                  case "ha":
                                      return n.e("ondemand.countries-he").then(n.t.bind(n, 712756, 19));
                                  case "he":
                                      return n.e("ondemand.countries-he").then(n.t.bind(n, 834185, 19));
                                  case "hi":
                                      return n.e("ondemand.countries-hi").then(n.t.bind(n, 555595, 19));
                                  case "hr":
                                      return n.e("ondemand.countries-hr").then(n.t.bind(n, 549581, 19));
                                  case "hu":
                                      return n.e("ondemand.countries-hu").then(n.t.bind(n, 624086, 19));
                                  case "id":
                                      return n.e("ondemand.countries-id").then(n.t.bind(n, 499075, 19));
                                  case "ig":
                                      return n.e("ondemand.countries-ig").then(n.t.bind(n, 424665, 19));
                                  case "it":
                                      return n.e("ondemand.countries-it").then(n.t.bind(n, 231383, 19));
                                  case "ja":
                                      return n.e("ondemand.countries-ja").then(n.t.bind(n, 848543, 19));
                                  case "kn":
                                      return n.e("ondemand.countries-kn").then(n.t.bind(n, 4504, 19));
                                  case "ko":
                                      return n.e("ondemand.countries-ko").then(n.t.bind(n, 496320, 19));
                                  case "mr":
                                      return n.e("ondemand.countries-mr").then(n.t.bind(n, 939202, 19));
                                  case "ms":
                                      return n.e("ondemand.countries-ms").then(n.t.bind(n, 655815, 19));
                                  case "nb":
                                      return n.e("ondemand.countries-nb").then(n.t.bind(n, 835579, 19));
                                  case "nl":
                                      return n.e("ondemand.countries-nl").then(n.t.bind(n, 572887, 19));
                                  case "pl":
                                      return n.e("ondemand.countries-pl").then(n.t.bind(n, 171124, 19));
                                  case "pt":
                                      return n.e("ondemand.countries-pt").then(n.t.bind(n, 64727, 19));
                                  case "ro":
                                      return n.e("ondemand.countries-ro").then(n.t.bind(n, 503059, 19));
                                  case "ru":
                                      return n.e("ondemand.countries-ru").then(n.t.bind(n, 948482, 19));
                                  case "sk":
                                      return n.e("ondemand.countries-sk").then(n.t.bind(n, 299502, 19));
                                  case "sr":
                                      return n.e("ondemand.countries-sr").then(n.t.bind(n, 360381, 19));
                                  case "sv":
                                      return n.e("ondemand.countries-sv").then(n.t.bind(n, 361571, 19));
                                  case "ta":
                                      return n.e("ondemand.countries-ta").then(n.t.bind(n, 393529, 19));
                                  case "th":
                                      return n.e("ondemand.countries-th").then(n.t.bind(n, 92457, 19));
                                  case "tr":
                                      return n.e("ondemand.countries-tr").then(n.t.bind(n, 798398, 19));
                                  case "uk":
                                      return n.e("ondemand.countries-uk").then(n.t.bind(n, 291715, 19));
                                  case "ur":
                                      return n.e("ondemand.countries-ur").then(n.t.bind(n, 768312, 19));
                                  case "yo":
                                      return n.e("ondemand.countries-yo").then(n.t.bind(n, 802732, 19));
                                  case "zh-Hant":
                                      return n.e("ondemand.countries-zh-Hant").then(n.t.bind(n, 39068, 19));
                                  case "zh":
                                      return n.e("ondemand.countries-zh").then(n.t.bind(n, 34845, 19));
                                  default:
                                      return Promise.reject(new Error(`Tried to import country names for unknown language key: ${e}`));
                              }
                          })(e)
                              .then((n) => {
                                  const a = n.main[e].localeDisplayNames.territories;
                                  l({ type: t.SUCCESS, payload: a });
                              })
                              .catch(() => {
                                  l("en" === e ? { type: t.FAILURE } : c("en"));
                              }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileLocationSpotlight-a2dee9c7.85fb2dea.js.map
