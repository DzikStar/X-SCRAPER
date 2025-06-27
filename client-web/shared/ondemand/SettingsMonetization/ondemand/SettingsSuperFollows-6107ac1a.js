"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows-6107ac1a"],
    {
        829028: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementPerksConfirmScreen_user", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksConfirmCore_user" }], type: "User", abstractKey: null, hash: "917f96d69ad720b93ab8f315cf935d4e" };
            const l = r;
        },
        490188: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementPerksConfirmScreen_viewer", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksConfirmCore_viewer" }], type: "Viewer", abstractKey: null, hash: "4c4388061d4dc4455ddbf56f7902c6ed" };
            const l = r;
        },
        360462: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        538341: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        886733: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        116362: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        75277: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSummaryPricing_user", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsCancelPriceChangeRequest_user" }], type: "User", abstractKey: null, hash: "8c04e240d5b719f04369f83927c31d66" };
            const l = r;
        },
        585158: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSummaryScreen_priceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPriceValue_priceOfferings" }], type: "SuperFollowsPriceOfferings", abstractKey: null, hash: "4d92ea635e5fbd3695288d7228ffe6ee" };
            const l = r;
        },
        951503: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSummaryScreen_subscriptionsPriceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPriceValue_subscriptionsPriceOfferings" }], type: "SubscriptionsPriceOfferings", abstractKey: null, hash: "f3fa3d2f0615b62b40942713378c0e8e" };
            const l = r;
        },
        401301: (e, a, n) => {
            n.d(a, { Z: () => l });
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
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "ad9c239186e627dac3b19dd4f015a885",
            };
            const l = r;
        },
        949289: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSummaryScreen_viewer", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsDeactivateButton_viewer" }], type: "Viewer", abstractKey: null, hash: "8a276cbc102a5ad8be1ae83387f39166" };
            const l = r;
        },
        708196: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksConfirmCore_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "f88fc83177d29296cf35e5c2351af482",
            };
            const l = r;
        },
        824937: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        474436: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksDescriptionCore_user",
                selections: [
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "ae882d445d73e4aada544458571a673b",
            };
            const l = r;
        },
        169781: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        885017: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksIntroCore_user",
                selections: [
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "d62c14a2a8d9d4f9645805fd7ed93556",
            };
            const l = r;
        },
        498292: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        42954: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { kind: "InlineDataFragment", name: "superFollowsShared_viewer", hash: "7d93eb3778f44bb69f422e49ec09cd27" };
            const l = r;
        },
        874010: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        155826: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        161475: (e, a, n) => {
            n.d(a, { Z: () => s });
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
        461715: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsCancelPriceChangeRequest_user", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingPriceChangeRequestId_user" }], type: "User", abstractKey: null, hash: "a00ed669a99e8f60e512a41c53868438" };
            const l = r;
        },
        455379: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingBenefitsId_user", selections: [{ alias: null, args: null, concreteType: "AudienceRewardsBenefitsData", kind: "LinkedField", name: "super_follow_creator_benefits", plural: !1, selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }], type: "User", abstractKey: null, hash: "6d25264b378a634b21185a5d8eebd0b7" };
            const l = r;
        },
        110930: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingCreatorIntro_user", selections: [{ alias: null, args: null, concreteType: "AudienceRewardsBenefitsData", kind: "LinkedField", name: "super_follow_creator_benefits", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "2c78fe8b9b3d66c42a2981bebc726b36" };
            const l = r;
        },
        360895: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        608379: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null }], storageKey: null }] }], type: "Viewer", abstractKey: null, hash: "17a492d43e8514a76d7864a04c0ed95c" };
            const l = r;
        },
        791440: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftDescription_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }], storageKey: null }] }], type: "Viewer", abstractKey: null, hash: "6f17367ec2cf59e4facac9cf8d0483cb" };
            const l = r;
        },
        770094: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        117365: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        261685: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftSelectedPriceValue_priceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftPrices__priceOfferings" }], type: "SuperFollowsPriceOfferings", abstractKey: null, hash: "48e3b9cc86226018495a607ac7191532" };
            const l = r;
        },
        249817: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftSelectedPriceValue_subscriptionsPriceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftPrices_subscriptionsPriceOfferings" }], type: "SubscriptionsPriceOfferings", abstractKey: null, hash: "3982844a184fcacd961d084e3185aa34" };
            const l = r;
        },
        124778: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingDraftSelectedPrice_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "selected_price", storageKey: null }], storageKey: null }] }], type: "Viewer", abstractKey: null, hash: "465d5034703427b8cee56d8d91b4f27a" };
            const l = r;
        },
        325678: () => {},
        816304: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingPriceChangeRequestId_user", selections: [{ alias: null, args: null, concreteType: "PendingPriceChange", kind: "LinkedField", name: "super_follow_pending_price_change", plural: !1, selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }], type: "User", abstractKey: null, hash: "0f697874f8a40e96bf1ad910caa1f3b5" };
            const l = r;
        },
        57236: (e, a, n) => {
            n.d(a, { Z: () => l });
            var r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsOnboardingSelectedPrice_user", selections: [{ alias: null, args: null, concreteType: "SuperFollowsSelectedPrice", kind: "LinkedField", name: "super_follow_creator_price_metadata", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "selected_price", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "24836cae0468e75f38acec52f2fbb824" };
            const l = r;
        },
        696138: (e, a, n) => {
            n.d(a, { Z: () => s });
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
        837390: (e, a, n) => {
            n.d(a, { Z: () => l });
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
        229333: (e, a, n) => {
            n.d(a, { Z: () => c });
            var r = n(202784),
                l = n(466999),
                t = n(325686),
                s = n(392237),
                i = n(111677);
            const o = n.n(i)().e5b0063d;
            let d = 0;
            class u extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        n = o({ title: a });
                    return r.createElement(t.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(l.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, a), r.createElement(t.Z, { "aria-label": n }, e));
                }
            }
            const c = u;
        },
        414939: (e, a, n) => {
            n.d(a, { Z: () => o });
            var r = n(202784),
                l = n(325686),
                t = n(392237);
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
        290402: (e, a, n) => {
            n.d(a, { Z: () => p });
            var r = n(807896),
                l = n(202784),
                t = n(182056),
                s = n(879113),
                i = n(392237),
                o = n(111677),
                d = n.n(o),
                u = n(968478);
            const c = d().aa6e3300,
                m = ({ retryMessage: e, ...a }, n) => {
                    const i = t.Z.isOnline();
                    return l.createElement(s.Z, (0, r.Z)({}, a, { icon: i ? void 0 : l.createElement(u.default, { style: g.icon }), retryMessage: i ? e : c }));
                },
                g = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = l.forwardRef(m);
        },
        965245: (e, a, n) => {
            n.d(a, { Z: () => o });
            var r = n(807896),
                l = n(202784),
                t = n(229333),
                s = n(414939),
                i = n(334346);
            const o = ({ accessibilityTitle: e, footer: a = l.createElement(s.Z, null), ...n }) => {
                const o = l.createElement(i.C, (0, r.Z)({}, n, { footer: a }));
                return e ? l.createElement(t.Z, { title: e }, o) : o;
            };
        },
        334346: (e, a, n) => {
            n.d(a, { C: () => o, Z: () => i });
            var r = n(807896),
                l = n(202784),
                t = n(524084),
                s = n(768572);
            const i = "stable_sort_index",
                o = l.forwardRef((e, a) => {
                    const n = e.cacheKey;
                    return l.createElement(s.ZP, { identifier: n }, l.createElement(t.Z, (0, r.Z)({ ref: a }, e)));
                });
        },
        813254: (e, a, n) => {
            n.d(a, { Z: () => d });
            var r = n(202784),
                l = n(325686),
                t = n(708852),
                s = n(392237);
            const i = ({ children: e, style: a }) => r.createElement(l.Z, { style: [u.frame, a] }, r.createElement(l.Z, { style: u.browserBar }, r.createElement(l.Z, { style: u.browserBarButtons }, r.createElement(l.Z, { style: u.browserBarButton }), r.createElement(l.Z, { style: u.browserBarButton }), r.createElement(l.Z, { style: u.browserBarButton })), r.createElement(l.Z, { style: u.browserBarUrlInputWrapper }, r.createElement(l.Z, { style: u.browserBarUrlInput }))), e),
                o = ({ children: e, style: a }) => r.createElement(l.Z, { style: a }, r.createElement(l.Z, { style: u.content }, e)),
                d = ({ children: e, style: a }) => ((0, t.D2)() ? r.createElement(i, { style: a }, r.createElement(o, { style: u.contentWide }, e)) : r.createElement(o, { style: a }, e)),
                u = s.default.create((e) => ({ frame: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium }, browserBar: { backgroundColor: e.colors.cellBackground, borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium, borderBottomWidth: e.spaces.space1, borderBottomColor: e.colors.gray200, display: "inline-flex", flexDirection: "row", gap: e.spaces.space36, paddingHorizontal: e.spaces.space20 }, browserBarButtons: { alignItems: "center", display: "inline-flex", flexDirection: "row", gap: e.spaces.space8, height: e.spaces.space40 }, browserBarButton: { backgroundColor: e.colors.gray200, borderColor: e.colors.gray400, borderRadius: e.borderRadii.infinite, borderWidth: e.borderWidths.small, height: e.spaces.space12, width: e.spaces.space12 }, browserBarUrlInputWrapper: { flex: 1, height: e.spaces.space40, justifyContent: "center" }, browserBarUrlInput: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, height: e.spaces.space28 }, contentWide: { paddingBottom: e.spaces.space32, paddingHorizontal: e.spaces.space32, paddingTop: e.spaces.space12 }, content: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.large, boxShadow: e.boxShadows.medium, minHeight: 358, overflow: "hidden" } }));
        },
        272191: (e, a, n) => {
            n.d(a, { Z: () => o });
            var r = n(807896),
                l = n(202784),
                t = n(813254),
                s = n(734189);
            const i = (e, a) => {
                    const { style: n, ...i } = e;
                    return l.createElement(t.Z, { style: n }, l.createElement(s.Z, (0, r.Z)({}, i, { ref: a, withVisibilityCallout: !0 })));
                },
                o = l.forwardRef(i);
        },
        126819: (e, a, n) => {
            n.d(a, { Z: () => o });
            var r = n(807896),
                l = n(202784),
                t = n(813254),
                s = n(144861);
            const i = (e, a) => {
                    const { style: n, ...i } = e;
                    return l.createElement(t.Z, { style: n }, l.createElement(s.Z, (0, r.Z)({}, i, { ref: a })));
                },
                o = l.forwardRef(i);
        },
        779295: (e, a, n) => {
            n.d(a, { Z: () => o });
            var r = n(202784),
                l = n(325686),
                t = n(392237),
                s = n(813254),
                i = n(8685);
            const o = (e) => r.createElement(s.Z, null, r.createElement(l.Z, { style: d.browserContent }, r.createElement(i.Z, e))),
                d = t.default.create((e) => ({ browserContent: { paddingBottom: e.spaces.space48 } }));
        },
        105633: (e, a, n) => {
            n.d(a, { Z: () => D });
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
                    a = [
                        { kind: "Variable", name: "rest_id", variableName: "userId" },
                        { kind: "Literal", name: "s", value: "5551" },
                    ],
                    n = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    r = { alias: null, args: null, concreteType: "CreatorPreferences", kind: "LinkedField", name: "creator_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "previews_enabled", storageKey: null }], storageKey: null };
                return {
                    fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "PreviewsEnabledButtonQuery", selections: [{ alias: null, args: a, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_rest_id", plural: !1, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [r], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "PreviewsEnabledButtonQuery",
                        selections: [
                            {
                                alias: null,
                                args: a,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    n,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                            { kind: "InlineFragment", selections: [r, n], type: "User", abstractKey: null },
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
            var d = n(202784),
                u = n(614983),
                c = n.n(u),
                m = (n(585488), n(712696)),
                g = n.n(m),
                p = n(351743),
                f = n.n(p),
                b = n(420412),
                y = n(954110),
                F = n(111677),
                k = n.n(F),
                h = n(125363),
                _ = n(390387);
            const S = k().g40b2b30,
                w = k().c1521804,
                v = o,
                C = s;
            function D() {
                const e = (0, h.v9)(_.x0);
                c()(e, "UserID must be defined");
                const a = g()(v, { userId: e }),
                    [n] = f()(C),
                    r = a?.user_result_by_rest_id?.result?.creator_preferences?.previews_enabled,
                    l = void 0 === r || r,
                    [t, s] = d.useState(l),
                    i = d.useCallback(() => {
                        s((e) => !e),
                            n({
                                optimisticUpdater: function (e) {
                                    const n = a.user_result_by_rest_id?.id;
                                    if (n) {
                                        const a = e.get(n);
                                        a && a.setValue(!t, "previewsEnabled");
                                    }
                                },
                                variables: { previewsEnabled: !t, userId: e },
                            });
                    }, [n, t, e, a]);
                return d.createElement(d.Fragment, null, d.createElement(b.Z, null), d.createElement(y.Z, { checked: t, disabled: !1, helpText: w, label: S, name: "previewsEnabledTabCustomization", onChange: i }), d.createElement(b.Z, null));
            }
        },
        865721: (e, a, n) => {
            n.d(a, { Z: () => R });
            var r = n(807896),
                l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsDeactivateButton_viewer", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsDeactivate_viewer" }], type: "Viewer", abstractKey: null, hash: "4afbdff48be896080e44496b4cd6868e" };
            const t = l;
            var s = n(202784),
                i = (n(585488), n(277660)),
                o = n.n(i),
                d = n(154003),
                u = n(190286),
                c = n(111677),
                m = n.n(c),
                g = n(668214),
                p = n(601576);
            const f = (0, g.Z)().propsFromActions(() => ({ addToast: p.fz }));
            var b,
                y = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsDeactivateMutation", selections: (b = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "deactivate_super_follows_creator", storageKey: 'deactivate_super_follows_creator(s:"4721")' }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useSuperFollowsDeactivateMutation", selections: b }, params: { id: "K5_KjMpjdtjQXzKGLqyFXw", metadata: {}, name: "useSuperFollowsDeactivateMutation", operationKind: "mutation", text: null } };
            y.hash = "c33de27607da73145e2d32d5855eaa27";
            const F = y;
            var k = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsDeactivate_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "Viewer", abstractKey: null, hash: "be30a750d32c634903dac132ededc4bf" };
            const h = k;
            var _ = n(614983),
                S = n.n(_),
                w = n(351743),
                v = n.n(w);
            const C = h,
                D = F,
                Z = (e) => {
                    const a = o()(C, e),
                        [n, r] = v()(D);
                    return [
                        s.useCallback(
                            () =>
                                new Promise((e, r) => {
                                    n({
                                        variables: {},
                                        onCompleted: (a, n) => e(),
                                        onError: r,
                                        updater: (e) => {
                                            const n = a.__id;
                                            S()(n, "viewerId must be specified");
                                            const r = e.get(n);
                                            S()(r, "viewerRecord must be specified"), r.setValue(!1, "is_active_creator");
                                        },
                                    });
                                }),
                            [n, a.__id],
                        ),
                        r,
                    ];
                },
                K = m().jd0f1ac0,
                E = m().c6c27fc8,
                P = m().cfd2f35e,
                O = m().bee26fa8,
                x = m().f82a23ec,
                B = m().ef4602ec,
                I = t,
                R = f((e) => {
                    const { addToast: a, disabled: n, label: l, onCancel: t, onConfirm: i, viewer: c, ...m } = e,
                        g = o()(I, c),
                        [p, f] = s.useState(!1),
                        [b, y] = Z(g),
                        F = s.useCallback(() => {
                            f(!0);
                        }, []),
                        k = s.useCallback(() => {
                            b()
                                .then(() => {
                                    f(!1), a({ text: x }), i?.();
                                })
                                .catch(() => {
                                    a({ text: B });
                                });
                        }, [a, b, i]),
                        h = s.useCallback(() => {
                            f(!1), t?.();
                        }, [t]);
                    return s.createElement(s.Fragment, null, s.createElement(d.ZP, (0, r.Z)({}, m, { disabled: y || n, onPress: F, type: "destructiveOutlined" }), l), p && s.createElement(u.Z, { cancelButtonLabel: P, confirmButtonLabel: O, confirmButtonType: "destructiveFilled", headline: K, onCancel: h, onConfirm: k, text: E }));
                });
        },
        879113: (e, a, n) => {
            n.d(a, { Z: () => g });
            var r = n(202784),
                l = n(476984),
                t = n.n(l),
                s = n(143778),
                i = n(750410),
                o = n(682830);
            const d = "failed",
                u = "loaded",
                c = "loading",
                m = "none";
            class g extends r.Component {
                shouldComponentUpdate(e) {
                    const a = e.fetchStatus === u,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!a && !n) || !t()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: a, failureMessage: n, fetchStatus: l, icon: t, loadingMessage: s, onRequestRetry: u, render: g, renderFailure: p, retryMessage: f, retryable: b } = this.props;
                    switch (l) {
                        case d:
                            return b ? r.createElement(i.Z, { icon: t, onRequestRetry: u, retryMessage: f }) : n ? r.createElement(o.m, { failureMessage: n }) : p();
                        case c:
                            return r.createElement(o.J, { "aria-label": e, color: a, loadingMessage: s });
                        case m:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, a, n) => {
            n.d(a, { Z: () => o });
            var r = n(202784),
                l = n(325686),
                t = n(235902),
                s = n(885015),
                i = n(392237);
            function o({ borderColor: e = "borderColor", isSlim: a = !1, label: n }) {
                const { isWebRedesign: o } = t.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(s.Z, { style: !a && d.root, withGutter: !0 }, r.createElement(l.Z, { style: d.gapColumn }, r.createElement(l.Z, { style: [d.gap, u] })), r.createElement(l.Z, { style: d.gapText }, n), r.createElement(l.Z, { style: d.gapColumn }, r.createElement(l.Z, { style: [d.gap, u] }))) : r.createElement(l.Z, { style: [!a && d.root, o() && d.rootRedesign, d.gap, u] });
            }
            const d = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, a, n) => {
            n.d(a, { Z: () => d });
            var r = n(807896),
                l = n(202784),
                t = n(325686),
                s = n(392237);
            class i extends l.Component {
                render() {
                    const { children: e, style: a, withGutter: n, ...s } = this.props,
                        i = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, o.column, n && o.withGutterColumn] }));
                    return l.createElement(t.Z, (0, r.Z)({ style: [a, o.root, n && o.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const o = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = i;
        },
        466818: (e, a, n) => {
            n.d(a, { ZP: () => y });
            var r = n(202784),
                l = n(325686),
                t = n(487552),
                s = n(302752),
                i = n(183806),
                o = n(731708),
                d = n(950822),
                u = n(224162),
                c = n(392237);
            const m = r.forwardRef((e, a) => (0, d.Z)("select", { ...e, ref: a })),
                g = (e) => (0, d.Z)("option", e);
            let p = 1;
            class f extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: a, withEmptyOption: n } = this.props,
                                { selectedIndex: r, value: l } = e.target;
                            a && a(l, r - (n ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: a } = this.props;
                            this.setState({ isFocused: !1 }), a && a();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: a } = this.props;
                            this.setState({ isFocused: !0 }), a && a();
                        }),
                        (this._id = `SELECTOR_${p}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (p += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: a, errorText: n, hasError: d, helperText: p, options: f, style: y, testID: F, value: k, withEmptyOption: h } = this.props,
                        { isFocused: _ } = this.state,
                        S = o.ZP.getLanguage(),
                        w = void 0 === d ? !!n : d,
                        v = new Set();
                    n && v.add(this._errorID), e && v.add(e), p && v.add(this._helperID);
                    const C = v.size ? [...v].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(u.ZP.Consumer, null, ({ direction: e }) => {
                            const o = "ja" === S ? c.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(S) ? c.default.theme.fontFamilies.rtl : c.default.theme.fontFamilies.normal;
                            return r.createElement(
                                l.Z,
                                { style: [i.Z.border, b.container, a && i.Z.disabled, _ && i.Z.focusedBorderValid, w && i.Z.invalidBorderColor, _ && w && i.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                r.createElement(
                                    m,
                                    { "aria-describedby": C, "aria-invalid": w, "aria-labelledby": this._labelID, disabled: a, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: o }, a && i.Z.disabled], testID: F || "", value: k },
                                    h ? r.createElement(g, { disabled: !0, style: b.option, value: "" }) : null,
                                    f.map((e) => {
                                        const { disabled: a, label: n, value: l } = e;
                                        return r.createElement(g, { disabled: a, key: `${n}-${l}`, style: b.option, value: l }, n);
                                    }),
                                ),
                                r.createElement(t.default, { style: [b.dropdownCaret, _ && i.Z.validColor, !(!d && !n) && i.Z.invalidColor] }),
                            );
                        }),
                        p ? this._renderHelperText() : null,
                        w && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: a, label: n } = this.props,
                        { isFocused: l } = this.state;
                    return r.createElement(o.ZP, { color: a || e ? "red500" : l ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, n);
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
                y = f;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows-6107ac1a.f946e0ca.js.map
