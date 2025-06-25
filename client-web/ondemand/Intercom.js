"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Intercom"],
    {
        653934: (e, r, i) => {
            i.r(r), i.d(r, { IntercomStarter: () => R, default: () => A });
            var a,
                s = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IntercomStarterQuery", selections: (a = [{ alias: null, args: null, concreteType: "GetIntercomUserHashResult", kind: "LinkedField", name: "get_intercom_user_hash", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "hash", storageKey: null }], storageKey: null }]), type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "IntercomStarterQuery", selections: a }, params: { id: "RiB07no7KYovpEZOy3JQpQ", metadata: {}, name: "IntercomStarterQuery", operationKind: "query", text: null } };
            s.hash = "73fa7191cd82c72d8237efbfef3a8bdd";
            const n = s;
            i(202784);
            var t = i(348943),
                o = i.n(t),
                l = (i(585488), i(187669)),
                u = i(693510),
                c = i(321330),
                _ = i(125363),
                d = i(390387),
                m = i(365265),
                p = i(919022),
                h = i(535338),
                f = i(375839),
                b = i(443781);
            const g = Object.freeze({ HANDLE: "Handle", TIER: "Subscription Tier", INTERVAL: "Subscription Interval", FOLLOWERS_COUNT: "Followers Count" }),
                v = Object.freeze({ HAS_RADAR: "Has Radar", HAS_HIRING: "Has Hiring", PRE_APPROVED_VO: "PreApproved VO" }),
                S = n;
            function R({ email: e }) {
                const { userClaims: r } = (0, b.QZ)(),
                    i = (0, _.v9)(d._h),
                    { followers_count: a, name: s, screen_name: n } = (0, _.v9)(p.ZP.selectViewerUser) || {},
                    t = (0, _.v9)(m.dF),
                    { interval: R, tier: A } = (0, f.Z)(),
                    { hasVerifiedOrgFeature: O } = (0, u.ZP)(),
                    { label: I } = (0, c.Z)(),
                    { get_intercom_user_hash: E } = (0, h.p)(S, {}),
                    y = r.isVerifiedOrg(),
                    H = y ? A : `X ${I}`,
                    P = y ? R : t?.charge_interval,
                    k = r.isTrueAndEnabled("subscriptions_feature_organization_x_hiring"),
                    V = O(u.ny.BusinessInsightsRead),
                    w = O("BusinessPreapprovalAdminPortalAccess");
                (0, l.q)(() => {
                    E?.hash && o()({ app_id: "jgtierkz", user_id: i, custom_launcher_selector: "#intercom_launcher", user_hash: E.hash, name: s, email: e, [g.HANDLE]: n, [g.TIER]: H, [g.INTERVAL]: P, [g.FOLLOWERS_COUNT]: a, ...(y && { [v.HAS_RADAR]: V, [v.HAS_HIRING]: k, [v.PRE_APPROVED_VO]: w }) });
                });
            }
            const A = R;
        },
        321330: (e, r, i) => {
            i.d(r, { Z: () => c });
            var a = i(202784),
                s = i(111677),
                n = i.n(s),
                t = i(443781);
            const o = n().f75d1806,
                l = n().j4a7d9a6,
                u = n().hedf9d7c,
                c = () => {
                    const { userClaims: e } = a.useContext(t.rC),
                        r = e.hasSubscription("verified_org_full_access") || e.hasSubscription("verified_org_basic") || e.hasSubscription("verified_org_free") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_legacy") || e.hasSubscription("verified_org_affiliate") || e.hasSubscription("verified_org_gov_affiliate"),
                        i = { label: o, value: "Premium" };
                    return r || e.hasSubscription("premium_plus") ? { label: u, value: "Premium+" } : e.hasSubscription("premium_standard") ? i : e.hasSubscription("premium_basic") ? { label: l, value: "Basic" } : i;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Intercom.bc5496ca.js.map
