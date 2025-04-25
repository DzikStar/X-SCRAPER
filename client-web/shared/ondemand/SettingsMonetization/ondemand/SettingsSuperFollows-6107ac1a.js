"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows-6107ac1a"],
    {
        829028: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementPerksConfirmScreen_user", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksConfirmCore_user" }], type: "User", abstractKey: null, hash: "917f96d69ad720b93ab8f315cf935d4e" };
            const l = r;
        },
        490188: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementPerksConfirmScreen_viewer", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksConfirmCore_viewer" }], type: "Viewer", abstractKey: null, hash: "4c4388061d4dc4455ddbf56f7902c6ed" };
            const l = r;
        },
        360462: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementPerksDescriptionScreen_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDescription_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsSaveOnboarding_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsPerksDescriptionCore_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "04ba46becf16dda65f26d3268fcf0e8a",
            };
            const l = r;
        },
        538341: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementPerksDescriptionScreen_viewer",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftDescription_viewer" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsPerksDescriptionCore_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "02f161584b8d9666df3acdf1f3ef817e",
            };
            const l = r;
        },
        886733: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementPerksIntroScreen_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingCreatorIntro_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsSaveOnboarding_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsPerksIntroCore_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "256ae68f663dd663c27261e9bbf6e769",
            };
            const l = r;
        },
        116362: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementPerksIntroScreen_viewer",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsPerksIntroCore_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "faf9eb7aeb9b7090c7004522c7522a48",
            };
            const l = r;
        },
        75277: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSummaryPricing_user", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsCancelPriceChangeRequest_user" }], type: "User", abstractKey: null, hash: "8c04e240d5b719f04369f83927c31d66" };
            const l = r;
        },
        585158: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSummaryScreen_priceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPriceValue_priceOfferings" }], type: "SuperFollowsPriceOfferings", abstractKey: null, hash: "4d92ea635e5fbd3695288d7228ffe6ee" };
            const l = r;
        },
        951503: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSummaryScreen_subscriptionsPriceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPriceValue_subscriptionsPriceOfferings" }], type: "SubscriptionsPriceOfferings", abstractKey: null, hash: "f3fa3d2f0615b62b40942713378c0e8e" };
            const l = r;
        },
        401301: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementSummaryScreen_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingCreatorIntro_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDescription_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingSelectedPrice_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSummaryPricing_user" },
                    {
                        alias: null,
                        args: null,
                        concreteType: "PendingPriceChange",
                        kind: "LinkedField",
                        name: "super_follow_pending_price_change",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "new_price", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "price_change", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "57470c051198d9a3c00f77b0359e23a1",
            };
            const l = r;
        },
        949289: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSummaryScreen_viewer", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsDeactivateButton_viewer" }], type: "Viewer", abstractKey: null, hash: "8a276cbc102a5ad8be1ae83387f39166" };
            const l = r;
        },
        708196: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksConfirmCore_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW" },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "843cf22b44fe99e85fe85fe765a0d867",
            };
            const l = r;
        },
        824937: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksConfirmCore_viewer",
                selections: [
                    { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftDescription_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "efbd797e69223eb51548efbb869a60a1",
            };
            const l = r;
        },
        474436: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksDescriptionCore_user",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "ea94577a2c8128b8322c451f71d7d819",
            };
            const l = r;
        },
        169781: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksDescriptionCore_viewer",
                selections: [
                    { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftDescription_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "6e7aad3b00b93acae78cf80d430838ee",
            };
            const l = r;
        },
        885017: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksIntroCore_user",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "eee1e983d2879a2379fdd9d9aa5bc035",
            };
            const l = r;
        },
        498292: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksIntroCore_viewer",
                selections: [
                    { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "837cd51625531128d0020203d44d4364",
            };
            const l = r;
        },
        42954: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { kind: "InlineDataFragment", name: "superFollowsShared_viewer", hash: "7d93eb3778f44bb69f422e49ec09cd27" };
            const l = r;
        },
        874010: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useSuperFollowsBlockOnboardingNavigation_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingCreatorIntro_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDescription_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingSelectedPrice_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "d4ef5c7a8bf68d8b8b6c7c99cadedfba",
            };
            const l = r;
        },
        155826: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useSuperFollowsBlockOnboardingNavigation_viewer",
                selections: [
                    { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftDescription_viewer" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPrice_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "f9188152a6d877d6a0ff16e4cfbd2cb2",
            };
            const l = r;
        },
        161475: (e, n, a) => {
            a.d(n, { Z: () => s });
            var r,
                l,
                t = {
                    fragment: {
                        argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "price_change" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useSuperFollowsCancelPriceChangeRequestMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "price_change", variableName: "price_change" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                kind: "ScalarField",
                                name: "super_follow_cancel_price_change",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: r, kind: "Operation", name: "useSuperFollowsCancelPriceChangeRequestMutation", selections: l },
                    params: { id: "XaaRsdCmUfrWLWD-5ddwsg", metadata: {}, name: "useSuperFollowsCancelPriceChangeRequestMutation", operationKind: "mutation", text: null },
                };
            t.hash = "87601e4efecb9526acb2a7e0892f43e4";
            const s = t;
        },
        461715: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsCancelPriceChangeRequest_user", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingPriceChangeRequestId_user" }], type: "User", abstractKey: null, hash: "a00ed669a99e8f60e512a41c53868438" };
            const l = r;
        },
        455379: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingBenefitsId_user", selections: [{ alias: null, args: null, concreteType: "AudienceRewardsBenefitsData", kind: "LinkedField", name: "super_follow_creator_benefits", plural: !1, selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }], type: "User", abstractKey: null, hash: "6d25264b378a634b21185a5d8eebd0b7" };
            const l = r;
        },
        110930: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingCreatorIntro_user", selections: [{ alias: null, args: null, concreteType: "AudienceRewardsBenefitsData", kind: "LinkedField", name: "super_follow_creator_benefits", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "2c78fe8b9b3d66c42a2981bebc726b36" };
            const l = r;
        },
        360895: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useSuperFollowsOnboardingDescription_user",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "AudienceRewardsBenefitsData",
                        kind: "LinkedField",
                        name: "super_follow_creator_benefits",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "AudienceRewardsBenefitInfo",
                                kind: "LinkedField",
                                name: "benefits_data",
                                plural: !0,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "benefit_type", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "f63f3bedef01a304535ac954b5279837",
            };
            const l = r;
        },
        608379: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null }], storageKey: null }] }], type: "Viewer", abstractKey: null, hash: "17a492d43e8514a76d7864a04c0ed95c" };
            const l = r;
        },
        791440: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftDescription_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }], storageKey: null }] }], type: "Viewer", abstractKey: null, hash: "6f17367ec2cf59e4facac9cf8d0483cb" };
            const l = r;
        },
        770094: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useSuperFollowsOnboardingDraftPrices__priceOfferings",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "offer1", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "offer2", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "offer3", storageKey: null },
                ],
                type: "SuperFollowsPriceOfferings",
                abstractKey: null,
                hash: "745a45f49f2db463745309f396340a6d",
            };
            const l = r;
        },
        117365: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useSuperFollowsOnboardingDraftPrices_subscriptionsPriceOfferings",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "SubscriptionsPriceOffering",
                        kind: "LinkedField",
                        name: "offers",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "SubscriptionsPriceOfferings",
                abstractKey: null,
                hash: "ce8959ff2d99d202f01f447a957999cb",
            };
            const l = r;
        },
        261685: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftSelectedPriceValue_priceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftPrices__priceOfferings" }], type: "SuperFollowsPriceOfferings", abstractKey: null, hash: "48e3b9cc86226018495a607ac7191532" };
            const l = r;
        },
        249817: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftSelectedPriceValue_subscriptionsPriceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftPrices_subscriptionsPriceOfferings" }], type: "SubscriptionsPriceOfferings", abstractKey: null, hash: "3982844a184fcacd961d084e3185aa34" };
            const l = r;
        },
        124778: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftSelectedPrice_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "selected_price", storageKey: null }], storageKey: null }] }], type: "Viewer", abstractKey: null, hash: "465d5034703427b8cee56d8d91b4f27a" };
            const l = r;
        },
        325678: () => {},
        816304: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingPriceChangeRequestId_user", selections: [{ alias: null, args: null, concreteType: "PendingPriceChange", kind: "LinkedField", name: "super_follow_pending_price_change", plural: !1, selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }], type: "User", abstractKey: null, hash: "0f697874f8a40e96bf1ad910caa1f3b5" };
            const l = r;
        },
        57236: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingSelectedPrice_user", selections: [{ alias: null, args: null, concreteType: "SuperFollowsSelectedPrice", kind: "LinkedField", name: "super_follow_creator_price_metadata", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "selected_price", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "24836cae0468e75f38acec52f2fbb824" };
            const l = r;
        },
        696138: (e, n, a) => {
            a.d(n, { Z: () => s });
            var r,
                l,
                t = {
                    fragment: {
                        argumentDefinitions: (r = [
                            { defaultValue: null, kind: "LocalArgument", name: "benefits_data" },
                            { defaultValue: null, kind: "LocalArgument", name: "creator_intro" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useSuperFollowsSaveOnboardingMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "benefits_data", variableName: "benefits_data" },
                                    { kind: "Variable", name: "creator_intro", variableName: "creator_intro" },
                                ],
                                kind: "ScalarField",
                                name: "set_creator_benefits_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: r, kind: "Operation", name: "useSuperFollowsSaveOnboardingMutation", selections: l },
                    params: { id: "tYYBdo8fCA4AHLbLpVCjSg", metadata: {}, name: "useSuperFollowsSaveOnboardingMutation", operationKind: "mutation", text: null },
                };
            t.hash = "b142db4c70fbbc54fea0835c0bae56e8";
            const s = t;
        },
        837390: (e, n, a) => {
            a.d(n, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useSuperFollowsSaveOnboarding_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingBenefitsId_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingCreatorIntro_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDescription_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "7143b7f1c3bddaa1d03d17cef9f58fa4",
            };
            const l = r;
        },
        229333: (e, n, a) => {
            a.d(n, { Z: () => c });
            var r = a(202784),
                l = a(466999),
                t = a(325686),
                s = a(392237),
                i = a(674132);
            const o = a.n(i)().e5b0063d;
            let d = 0;
            class u extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: n } = this.props,
                        a = o({ title: n });
                    return r.createElement(t.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(l.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, n), r.createElement(t.Z, { "aria-label": a }, e));
                }
            }
            const c = u;
        },
        414939: (e, n, a) => {
            a.d(n, { Z: () => o });
            var r = a(202784),
                l = a(325686),
                t = a(392237);
            class s extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(l.Z, { style: i.root });
                }
            }
            const i = t.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                o = s;
        },
        965245: (e, n, a) => {
            a.d(n, { Z: () => o });
            var r = a(807896),
                l = a(202784),
                t = a(229333),
                s = a(414939),
                i = a(334346);
            const o = ({ accessibilityTitle: e, footer: n = l.createElement(s.Z, null), ...a }) => {
                const o = l.createElement(i.C, (0, r.Z)({}, a, { footer: n }));
                return e ? l.createElement(t.Z, { title: e }, o) : o;
            };
        },
        253493: (e, n, a) => {
            a.d(n, { Z: () => k });
            var r = a(202784),
                l = a(107267),
                t = a(791632),
                s = a(325686),
                i = a(537392),
                o = a(10656),
                d = a(655352),
                u = a(555079),
                c = a(500002),
                m = a(625661),
                p = a(449067),
                g = a(655543),
                f = a(715601),
                b = a(392237);
            const h = b.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...b.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? r.createElement(s.Z, { style: h.fill }, r.createElement(f.Z, { style: h.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return r.createElement(i.ZP, null, ({ containerWidth: e }) => (o.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: n, leftControl: a, screenType: l, showSubtitleOnRoot: t, showSubtitleOnWideDetail: s, withBottomBorder: i, withDetailOpen: o, ...u } = this.props;
                    return r.createElement(r.Fragment, null, (0, d.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : r.createElement(p.Z.Configure, u), n);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return r.createElement(r.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: n, TabBar: a, appBarStyle: l, backLocation: t, documentTitle: i, headerless: o, history: d, leftControl: c, middleControl: g, onBackClick: f, rightControl: b, screenType: y, searchBoxOptions: F, secondaryBar: k, showSubtitleOnRoot: _, showSubtitleOnWideDetail: w, subtitle: S, title: v, titleIconCell: C, titleIconCellSize: D, withDetailOpen: Z, withSearchBox: K, withTweetButton: E, withWideContainer: O } = this.props,
                        P = "root" === y,
                        B = "secondaryRoot" === y,
                        I = "primaryDetail" === y,
                        T = (I && w) || (P && _),
                        x = P || (I && e),
                        R = P ? u.ey : I ? u.vX : void 0,
                        L = r.createElement(s.Z, { style: h.appBarContainer }, r.createElement(m.ZP, { backLocation: t, fixed: !1, hideBackButton: x, history: d, leftControl: c, middleControl: g, onBackClick: f, rightControl: b, secondaryBar: k, style: l, subtitle: T ? S : void 0, title: v, titleDomId: R, titleIconCell: C, titleIconCellSize: D, withWideContainer: O })),
                        V = P || (B && Z) ? null : r.createElement(p.Z.Configure, { SideNavButton: n, TabBar: a, backLocation: t, documentTitle: i, headerless: o, middleControl: g, onBackClick: f, rightControl: b, searchBoxOptions: F, subtitle: S, title: v, withSearchBox: K, withTweetButton: E });
                    return r.createElement(r.Fragment, null, V, L);
                }
            }
            (y.contextType = g.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const F = (0, c.ZP)(y),
                k = (e) => {
                    const n = (0, l.useHistory)();
                    return (0, t.HD)(n) ? e.children || null : r.createElement(F, e);
                };
        },
        813254: (e, n, a) => {
            a.d(n, { Z: () => d });
            var r = a(202784),
                l = a(325686),
                t = a(708852),
                s = a(392237);
            const i = ({ children: e, style: n }) => r.createElement(l.Z, { style: [u.frame, n] }, r.createElement(l.Z, { style: u.browserBar }, r.createElement(l.Z, { style: u.browserBarButtons }, r.createElement(l.Z, { style: u.browserBarButton }), r.createElement(l.Z, { style: u.browserBarButton }), r.createElement(l.Z, { style: u.browserBarButton })), r.createElement(l.Z, { style: u.browserBarUrlInputWrapper }, r.createElement(l.Z, { style: u.browserBarUrlInput }))), e),
                o = ({ children: e, style: n }) => r.createElement(l.Z, { style: n }, r.createElement(l.Z, { style: u.content }, e)),
                d = ({ children: e, style: n }) => ((0, t.D2)() ? r.createElement(i, { style: n }, r.createElement(o, { style: u.contentWide }, e)) : r.createElement(o, { style: n }, e)),
                u = s.default.create((e) => ({ frame: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, browserBar: { backgroundColor: e.colors.cellBackground, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomWidth: e.spaces.space1, borderBottomColor: e.colors.gray200, display: "inline-flex", flexDirection: "row", gap: e.spaces.space36, paddingHorizontal: e.spaces.space20 }, browserBarButtons: { alignItems: "center", display: "inline-flex", flexDirection: "row", gap: e.spaces.space8, height: e.spaces.space40 }, browserBarButton: { backgroundColor: e.colors.gray200, borderColor: e.colors.gray400, borderRadius: e.borderRadii.infinite, borderWidth: e.borderWidths.small, height: e.spaces.space12, width: e.spaces.space12 }, browserBarUrlInputWrapper: { flex: 1, height: e.spaces.space40, justifyContent: "center" }, browserBarUrlInput: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, height: e.spaces.space28 }, contentWide: { paddingBottom: e.spaces.space32, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space12 }, content: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.large, boxShadow: e.boxShadows.medium, minHeight: 358, overflow: "hidden" } }));
        },
        272191: (e, n, a) => {
            a.d(n, { Z: () => o });
            var r = a(807896),
                l = a(202784),
                t = a(813254),
                s = a(734189);
            const i = (e, n) => {
                    const { style: a, ...i } = e;
                    return l.createElement(t.Z, { style: a }, l.createElement(s.Z, (0, r.Z)({}, i, { ref: n, withVisibilityCallout: !0 })));
                },
                o = l.forwardRef(i);
        },
        126819: (e, n, a) => {
            a.d(n, { Z: () => o });
            var r = a(807896),
                l = a(202784),
                t = a(813254),
                s = a(144861);
            const i = (e, n) => {
                    const { style: a, ...i } = e;
                    return l.createElement(t.Z, { style: a }, l.createElement(s.Z, (0, r.Z)({}, i, { ref: n })));
                },
                o = l.forwardRef(i);
        },
        779295: (e, n, a) => {
            a.d(n, { Z: () => o });
            var r = a(202784),
                l = a(325686),
                t = a(392237),
                s = a(813254),
                i = a(8685);
            const o = (e) => r.createElement(s.Z, null, r.createElement(l.Z, { style: d.browserContent }, r.createElement(i.Z, e))),
                d = t.default.create((e) => ({ browserContent: { paddingBottom: e.spaces.space48 } }));
        },
        105633: (e, n, a) => {
            a.d(n, { Z: () => D });
            var r,
                l,
                t = {
                    fragment: {
                        argumentDefinitions: (r = [
                            { defaultValue: null, kind: "LocalArgument", name: "previewsEnabled" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "PreviewsEnabledButtonMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "previews_enabled", variableName: "previewsEnabled" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                kind: "ScalarField",
                                name: "set_creator_preferences_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: r, kind: "Operation", name: "PreviewsEnabledButtonMutation", selections: l },
                    params: { id: "QrvZinvdKXtDKnHMnG4Vmg", metadata: {}, name: "PreviewsEnabledButtonMutation", operationKind: "mutation", text: null },
                };
            t.hash = "54e3c0acb5a61fa1e453afd33727bc05";
            const s = t;
            var i = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }],
                    n = [
                        { kind: "Variable", name: "rest_id", variableName: "userId" },
                        { kind: "Literal", name: "s", value: "5551" },
                    ],
                    a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    r = { alias: null, args: null, concreteType: "CreatorPreferences", kind: "LinkedField", name: "creator_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "previews_enabled", storageKey: null }], storageKey: null };
                return {
                    fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "PreviewsEnabledButtonQuery", selections: [{ alias: null, args: n, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_rest_id", plural: !1, selections: [a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [r], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "PreviewsEnabledButtonQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    a,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                            { kind: "InlineFragment", selections: [r, a], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "qy8TYcwuhLG8WqKI9o5tJQ", metadata: {}, name: "PreviewsEnabledButtonQuery", operationKind: "query", text: null },
                };
            })();
            i.hash = "be43479767ec57325b544a99890b8ea2";
            const o = i;
            var d = a(202784),
                u = a(614983),
                c = a.n(u),
                m = (a(585488), a(712696)),
                p = a.n(m),
                g = a(351743),
                f = a.n(g),
                b = a(420412),
                h = a(954110),
                y = a(674132),
                F = a.n(y),
                k = a(125363),
                _ = a(390387);
            const w = F().g40b2b30,
                S = F().c1521804,
                v = o,
                C = s;
            function D() {
                const e = (0, k.v9)(_.x0);
                c()(e, "UserID must be defined");
                const n = p()(v, { userId: e }),
                    [a] = f()(C),
                    r = n?.user_result_by_rest_id?.result?.creator_preferences?.previews_enabled,
                    l = void 0 === r || r,
                    [t, s] = d.useState(l),
                    i = d.useCallback(() => {
                        s((e) => !e),
                            a({
                                optimisticUpdater: function (e) {
                                    const a = n.user_result_by_rest_id?.id;
                                    if (a) {
                                        const n = e.get(a);
                                        n && n.setValue(!t, "previewsEnabled");
                                    }
                                },
                                variables: { previewsEnabled: !t, userId: e },
                            });
                    }, [a, t, e, n]);
                return d.createElement(d.Fragment, null, d.createElement(b.Z, null), d.createElement(h.Z, { checked: t, disabled: !1, helpText: S, label: w, name: "previewsEnabledTabCustomization", onChange: i }), d.createElement(b.Z, null));
            }
        },
        865721: (e, n, a) => {
            a.d(n, { Z: () => x });
            var r = a(807896),
                l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsDeactivateButton_viewer", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsDeactivate_viewer" }], type: "Viewer", abstractKey: null, hash: "4afbdff48be896080e44496b4cd6868e" };
            const t = l;
            var s = a(202784),
                i = (a(585488), a(277660)),
                o = a.n(i),
                d = a(154003),
                u = a(190286),
                c = a(674132),
                m = a.n(c),
                p = a(668214),
                g = a(601576);
            const f = (0, p.Z)().propsFromActions(() => ({ addToast: g.fz }));
            var b,
                h = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsDeactivateMutation", selections: (b = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "deactivate_super_follows_creator", storageKey: 'deactivate_super_follows_creator(s:"4721")' }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useSuperFollowsDeactivateMutation", selections: b }, params: { id: "K5_KjMpjdtjQXzKGLqyFXw", metadata: {}, name: "useSuperFollowsDeactivateMutation", operationKind: "mutation", text: null } };
            h.hash = "c33de27607da73145e2d32d5855eaa27";
            const y = h;
            var F = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsDeactivate_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "Viewer", abstractKey: null, hash: "be30a750d32c634903dac132ededc4bf" };
            const k = F;
            var _ = a(614983),
                w = a.n(_),
                S = a(351743),
                v = a.n(S);
            const C = k,
                D = y,
                Z = (e) => {
                    const n = o()(C, e),
                        [a, r] = v()(D);
                    return [
                        s.useCallback(
                            () =>
                                new Promise((e, r) => {
                                    a({
                                        variables: {},
                                        onCompleted: (n, a) => e(),
                                        onError: r,
                                        updater: (e) => {
                                            const a = n.__id;
                                            w()(a, "viewerId must be specified");
                                            const r = e.get(a);
                                            w()(r, "viewerRecord must be specified"), r.setValue(!1, "is_active_creator");
                                        },
                                    });
                                }),
                            [a, n.__id],
                        ),
                        r,
                    ];
                },
                K = m().jd0f1ac0,
                E = m().c6c27fc8,
                O = m().cfd2f35e,
                P = m().bee26fa8,
                B = m().f82a23ec,
                I = m().ef4602ec,
                T = t,
                x = f((e) => {
                    const { addToast: n, disabled: a, label: l, onCancel: t, onConfirm: i, viewer: c, ...m } = e,
                        p = o()(T, c),
                        [g, f] = s.useState(!1),
                        [b, h] = Z(p),
                        y = s.useCallback(() => {
                            f(!0);
                        }, []),
                        F = s.useCallback(() => {
                            b()
                                .then(() => {
                                    f(!1), n({ text: B }), i?.();
                                })
                                .catch(() => {
                                    n({ text: I });
                                });
                        }, [n, b, i]),
                        k = s.useCallback(() => {
                            f(!1), t?.();
                        }, [t]);
                    return s.createElement(s.Fragment, null, s.createElement(d.ZP, (0, r.Z)({}, m, { disabled: h || a, onPress: y, type: "destructiveOutlined" }), l), g && s.createElement(u.Z, { cancelButtonLabel: O, confirmButtonLabel: P, confirmButtonType: "destructiveFilled", headline: K, onCancel: k, onConfirm: F, text: E }));
                });
        },
        420412: (e, n, a) => {
            a.d(n, { Z: () => o });
            var r = a(202784),
                l = a(325686),
                t = a(235902),
                s = a(885015),
                i = a(392237);
            function o({ borderColor: e = "borderColor", isSlim: n = !1, label: a }) {
                const { isWebRedesign: o } = t.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return a ? r.createElement(s.Z, { style: !n && d.root, withGutter: !0 }, r.createElement(l.Z, { style: d.gapColumn }, r.createElement(l.Z, { style: [d.gap, u] })), r.createElement(l.Z, { style: d.gapText }, a), r.createElement(l.Z, { style: d.gapColumn }, r.createElement(l.Z, { style: [d.gap, u] }))) : r.createElement(l.Z, { style: [!n && d.root, o() && d.rootRedesign, d.gap, u] });
            }
            const d = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, n, a) => {
            a.d(n, { Z: () => d });
            var r = a(807896),
                l = a(202784),
                t = a(325686),
                s = a(392237);
            class i extends l.Component {
                render() {
                    const { children: e, style: n, withGutter: a, ...s } = this.props,
                        i = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, o.column, a && o.withGutterColumn] }));
                    return l.createElement(t.Z, (0, r.Z)({ style: [n, o.root, a && o.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const o = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = i;
        },
        466818: (e, n, a) => {
            a.d(n, { ZP: () => h });
            var r = a(202784),
                l = a(325686),
                t = a(487552),
                s = a(302752),
                i = a(183806),
                o = a(731708),
                d = a(950822),
                u = a(224162),
                c = a(392237);
            const m = r.forwardRef((e, n) => (0, d.Z)("select", { ...e, ref: n })),
                p = (e) => (0, d.Z)("option", e);
            let g = 1;
            class f extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: n, withEmptyOption: a } = this.props,
                                { selectedIndex: r, value: l } = e.target;
                            n && n(l, r - (a ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: n } = this.props;
                            this.setState({ isFocused: !1 }), n && n();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: n } = this.props;
                            this.setState({ isFocused: !0 }), n && n();
                        }),
                        (this._id = `SELECTOR_${g}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (g += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: n, errorText: a, hasError: d, helperText: g, options: f, style: h, testID: y, value: F, withEmptyOption: k } = this.props,
                        { isFocused: _ } = this.state,
                        w = o.ZP.getLanguage(),
                        S = void 0 === d ? !!a : d,
                        v = new Set();
                    a && v.add(this._errorID), e && v.add(e), g && v.add(this._helperID);
                    const C = v.size ? [...v].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(u.ZP.Consumer, null, ({ direction: e }) => {
                            const o = "ja" === w ? c.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(w) ? c.default.theme.fontFamilies.rtl : c.default.theme.fontFamilies.normal;
                            return r.createElement(
                                l.Z,
                                { style: [i.Z.border, b.container, n && i.Z.disabled, _ && i.Z.focusedBorderValid, S && i.Z.invalidBorderColor, _ && S && i.Z.focusedBorderInvalid, h] },
                                this._renderLabel(),
                                r.createElement(
                                    m,
                                    { "aria-describedby": C, "aria-invalid": S, "aria-labelledby": this._labelID, disabled: n, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: o }, n && i.Z.disabled], testID: y || "", value: F },
                                    k ? r.createElement(p, { disabled: !0, style: b.option, value: "" }) : null,
                                    f.map((e) => {
                                        const { disabled: n, label: a, value: l } = e;
                                        return r.createElement(p, { disabled: n, key: `${a}-${l}`, style: b.option, value: l }, a);
                                    }),
                                ),
                                r.createElement(t.default, { style: [b.dropdownCaret, _ && i.Z.validColor, !(!d && !a) && i.Z.invalidColor] }),
                            );
                        }),
                        g ? this._renderHelperText() : null,
                        S && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: n, label: a } = this.props,
                        { isFocused: l } = this.state;
                    return r.createElement(o.ZP, { color: n || e ? "red500" : l ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, a);
                }
                _renderHelperText() {
                    return r.createElement(l.Z, { "aria-live": "polite" }, r.createElement(o.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(l.Z, { "aria-live": "polite" }, r.createElement(o.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            f.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                h = f;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows-6107ac1a.e4e472da.js.map
