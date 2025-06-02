"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileLocationSpotlight-e713b73f"],
    {
        837777: (l, e, n) => {
            n.d(e, { Z: () => c });
            var a,
                s,
                i,
                u,
                r,
                t,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "rest_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "LocationSpotlightQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (s = [
                                    { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, concreteType: "UserBusinessEditableModules", kind: "LinkedField", name: "editable_profilemodules", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useLocationData_data" }], storageKey: null },
                                                    { alias: null, args: null, concreteType: "UserBusinessModulesResponse", kind: "LinkedField", name: "profilemodules", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "Preview_locationSpotlight" }], storageKey: null },
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "LocationSpotlightQuery",
                        selections: [
                            {
                                alias: "user",
                                args: s,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            (i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserBusinessEditableModules",
                                                        kind: "LinkedField",
                                                        name: "editable_profilemodules",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserBusinessConfigurableModuleV1",
                                                                kind: "LinkedField",
                                                                name: "configurable_modules_v1",
                                                                plural: !0,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "module_type", storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserBusinessEditableModuleV1",
                                                                        kind: "LinkedField",
                                                                        name: "module_data",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "module_id", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: null,
                                                                                kind: "LinkedField",
                                                                                name: "profile_module",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    i,
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
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_sms", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_location_map", storageKey: null },
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
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "BusinessAddressResponse",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "address",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "formatted_address", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "address_line1", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "postal_code", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "administrative_area", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "city", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "country", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "ApiShortenedUrl", kind: "LinkedField", name: "website", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "display", storageKey: null }], storageKey: null },
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
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "country_iso_code", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "number", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "BusinessTimezone", kind: "LinkedField", name: "timezone", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null },
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "BusinessOpenTimesResponse",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "open_times",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            (u = { alias: null, args: null, kind: "ScalarField", name: "open_times_type", storageKey: null }),
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "BusinessOpenTimesRegular",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "regular",
                                                                                                                plural: !0,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "weekday", storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "BusinessOpenTimesRegularSlot",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "slots",
                                                                                                                        plural: !0,
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: "HourMinute",
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "open",
                                                                                                                                plural: !1,
                                                                                                                                selections: (r = [
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "hour", storageKey: null },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "minute", storageKey: null },
                                                                                                                                ]),
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                            { alias: null, args: null, concreteType: "HourMinute", kind: "LinkedField", name: "close", plural: !1, selections: r, storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
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
                                                                                ],
                                                                                storageKey: null,
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
                                                                            i,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "AboutModuleData",
                                                                                        kind: "LinkedField",
                                                                                        name: "data",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "BusinessOpenTimesResponse",
                                                                                                kind: "LinkedField",
                                                                                                name: "open_times",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    u,
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_open", storageKey: null },
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "OpenCloseTimeNext",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "opens",
                                                                                                        plural: !1,
                                                                                                        selections: (t = [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                                                            { alias: null, args: null, concreteType: "HourMinute", kind: "LinkedField", name: "time", plural: !1, selections: r, storageKey: null },
                                                                                                        ]),
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "OpenCloseTimeNext", kind: "LinkedField", name: "closes", plural: !1, selections: t, storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                type: "AboutModule",
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
                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    o,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "PtT7DMn9eI8yFh-jkG-fGg", metadata: {}, name: "LocationSpotlightQuery", operationKind: "query", text: null },
                };
            d.hash = "972f257e2073762a2ddb9266c1ab3f08";
            const c = d;
        },
        521110: (l, e, n) => {
            n.d(e, { Z: () => i });
            var a,
                s = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "Preview_locationSpotlight",
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
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "AboutModuleData",
                                                    kind: "LinkedField",
                                                    name: "data",
                                                    plural: !1,
                                                    selections: [
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
                                                                    selections: (a = [
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
                                                                { alias: null, args: null, concreteType: "OpenCloseTimeNext", kind: "LinkedField", name: "closes", plural: !1, selections: a, storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            type: "AboutModule",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "UserBusinessModulesResponse",
                    abstractKey: null,
                };
            s.hash = "e616d4c1739185cd4b8163766ba453e6";
            const i = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileLocationSpotlight-e713b73f.58445f5a.js.map
