"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.CommunityTweetPinning"],
    {
        854594: (e, n, t) => {
            t.d(n, { l: () => i, v: () => l });
            var a = t(202784);
            const i = a.createContext(void 0),
                l = () => a.useContext(i);
        },
        916621: (e, n, t) => {
            t.d(n, { Vv: () => p, lZ: () => d, vq: () => y });
            var a = t(332920),
                i = t.n(a),
                l = t(491963),
                o = t(870358),
                u = t(988566),
                r = t(962741),
                s = t(466015),
                m = t(836255);
            const c = i().d8725596,
                d = { ...u.Iv, text: c },
                y = (e, n, t, a, i, u) => (c, y) => {
                    if ((c((0, l.a7)(n, u)), c(m.Z.updateCommunityPinActionResults(e, a, i)), t)) {
                        const n = s.Se({ id: e, content: { socialContext: { generalContext: d } }, sortIndex: e }),
                            { unpinnedEntry: a } = c(t.pinEntry(n, { shouldReinject: !0, reinjectAtTop: !0 }));
                        if (a) {
                            const e = a.type === r.UZ.Tweet ? a.content.id : void 0;
                            e && c(m.Z.updateCommunityPinActionResults(e, u, o.Km.Unavailable));
                        }
                    }
                },
                p = (e, n, t, a, i, o) => (u, r) => {
                    u((0, l.a7)(n, o)), u(m.Z.updateCommunityPinActionResults(e, a, i)), t && u(t.unpinCurrentlyPinnedEntry({ shouldReinject: !0, reinjectAtTop: !0 }));
                };
        },
        828856: (e, n, t) => {
            t.r(n), t.d(n, { PinTweetSheet: () => A, default: () => M, errorMessage: () => L, pinTweetHeadline: () => I, pinTweetMutation: () => x });
            var a,
                i,
                l,
                o,
                u,
                r,
                s,
                m,
                c,
                d,
                y = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "PinTweetToCommunityMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "1452" },
                                    { kind: "Variable", name: "tweet_id", variableName: "id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "community_tweet_pin",
                                plural: !1,
                                selections: [
                                    { kind: "InlineFragment", selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "pinned_tweet_id", storageKey: null }), (r = { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "community_pin_action_result", plural: !1, selections: (u = [l]), storageKey: null }), (s = { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "community_tweet_pin_action_result", plural: !1, selections: u, storageKey: null })], type: "PinnedTweetResult", abstractKey: null },
                                    { kind: "InlineFragment", selections: [l, (m = { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }), (c = { alias: "errorReason", args: null, kind: "ScalarField", name: "reason", storageKey: null })], type: "CommunityTweetPinError", abstractKey: null },
                                    { kind: "InlineFragment", selections: [l, m, (d = { alias: "unavailableReason", args: null, kind: "ScalarField", name: "reason", storageKey: null })], type: "CommunityTweetPinActionUnavailable", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "PinTweetToCommunityMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "community_tweet_pin", plural: !1, selections: [l, { kind: "InlineFragment", selections: [o, r, s], type: "PinnedTweetResult", abstractKey: null }, { kind: "InlineFragment", selections: [m, c], type: "CommunityTweetPinError", abstractKey: null }, { kind: "InlineFragment", selections: [m, d], type: "CommunityTweetPinActionUnavailable", abstractKey: null }], storageKey: null }] },
                    params: { id: "5jpFuDdu111UuWpne0_ajg", metadata: {}, name: "PinTweetToCommunityMutation", operationKind: "mutation", text: null },
                };
            y.hash = "bda7fa2396464ae85c1c7f35c6e4ca5d";
            const p = y;
            var _ = t(202784),
                g = (t(585488), t(351743)),
                w = t.n(g),
                k = t(190286),
                b = t(332920),
                T = t.n(b),
                C = t(870358),
                f = t(854594),
                v = t(125363),
                K = t(916621),
                F = t(601576),
                U = t(11493);
            const I = T().d1c1e2c2,
                P = T().j832cc34,
                R = T().h7dbb2f2,
                h = T().j24c37b2,
                E = T().cfd2f35e,
                L = T().g61ed8a4,
                x = p,
                A = _.memo(({ communityId: e, isReplacing: n, onCancel: t, onConfirm: a, tweetId: i }) => {
                    const l = (0, v.I0)(),
                        o = (0, f.v)(),
                        u = (0, U.Z)(),
                        [r] = w()(x),
                        s = _.useCallback(() => {
                            r({
                                variables: { id: i },
                                onCompleted(n) {
                                    if ("PinnedTweetResult" === n.community_tweet_pin?.__typename) l((0, K.vq)(i, e, o, C.ZV.Unavailable, C.Km.Action, (0, C.tE)(n.community_tweet_pin.community_pin_action_result.__typename))), o || u(K.lZ), a();
                                    else {
                                        const e = (("CommunityTweetPinActionUnavailable" === n.community_tweet_pin?.__typename || "CommunityTweetPinError" === n.community_tweet_pin?.__typename) && n.community_tweet_pin?.message) || L;
                                        l((0, F.fz)({ text: e }));
                                    }
                                },
                                onError() {
                                    l((0, F.fz)({ text: L }));
                                },
                            });
                        }, [e, l, u, a, r, o, i]);
                    return _.createElement(k.Z, { cancelButtonLabel: E, confirmButtonLabel: h, confirmButtonType: "primary", headline: I, onCancel: t, onConfirm: s, text: n ? R : P });
                }),
                M = _.memo(A);
        },
        760844: (e, n, t) => {
            t.r(n), t.d(n, { UnpinTweetSheet: () => x, default: () => A, errorMessage: () => E, unpinTweetHeadline: () => I, unpinTweetMutation: () => L });
            var a,
                i,
                l,
                o,
                u,
                r,
                s,
                m,
                c,
                d,
                y = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "UnpinTweetFromCommunityMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "1452" },
                                    { kind: "Variable", name: "tweet_id", variableName: "id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "community_tweet_unpin",
                                plural: !1,
                                selections: [
                                    { kind: "InlineFragment", selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "unpinned_tweet_id", storageKey: null }), (r = { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "community_pin_action_result", plural: !1, selections: (u = [l]), storageKey: null }), (s = { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "community_tweet_pin_action_result", plural: !1, selections: u, storageKey: null })], type: "UnpinnedTweetResult", abstractKey: null },
                                    { kind: "InlineFragment", selections: [l, (m = { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }), (c = { alias: "errorReason", args: null, kind: "ScalarField", name: "reason", storageKey: null })], type: "CommunityTweetUnpinError", abstractKey: null },
                                    { kind: "InlineFragment", selections: [l, m, (d = { alias: "unavailableReason", args: null, kind: "ScalarField", name: "reason", storageKey: null })], type: "CommunityTweetUnpinActionUnavailable", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "UnpinTweetFromCommunityMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "community_tweet_unpin", plural: !1, selections: [l, { kind: "InlineFragment", selections: [o, r, s], type: "UnpinnedTweetResult", abstractKey: null }, { kind: "InlineFragment", selections: [m, c], type: "CommunityTweetUnpinError", abstractKey: null }, { kind: "InlineFragment", selections: [m, d], type: "CommunityTweetUnpinActionUnavailable", abstractKey: null }], storageKey: null }] },
                    params: { id: "GJ-aDJmAPMnisHg-52fI3g", metadata: {}, name: "UnpinTweetFromCommunityMutation", operationKind: "mutation", text: null },
                };
            y.hash = "24d1d607a00ea81fa8a253f7c1b14f7c";
            const p = y;
            var _ = t(202784),
                g = (t(585488), t(351743)),
                w = t.n(g),
                k = t(190286),
                b = t(332920),
                T = t.n(b),
                C = t(870358),
                f = t(854594),
                v = t(125363),
                K = t(916621),
                F = t(601576),
                U = t(11493);
            const I = T().cac6a24a,
                P = T().i642edc4,
                R = T().e68b09b4,
                h = T().cfd2f35e,
                E = T().g61ed8a4,
                L = p,
                x = _.memo(({ communityId: e, onCancel: n, onConfirm: t, tweetId: a }) => {
                    const i = (0, v.I0)(),
                        l = (0, f.v)(),
                        o = (0, U.Z)(),
                        [u] = w()(L),
                        r = _.useCallback(() => {
                            u({
                                variables: { id: a },
                                onCompleted(n) {
                                    if ("UnpinnedTweetResult" === n.community_tweet_unpin?.__typename) {
                                        const u = n.community_tweet_unpin;
                                        i((0, K.Vv)(a, e, l, (0, C.tE)(u.community_tweet_pin_action_result.__typename), C.Km.Unavailable, (0, C.tE)(u.community_pin_action_result.__typename))), l || o(void 0), t();
                                    } else {
                                        const e = (("CommunityTweetUnpinActionUnavailable" === n.community_tweet_unpin?.__typename || "CommunityTweetUnpinError" === n.community_tweet_unpin?.__typename) && n.community_tweet_unpin?.message) || E;
                                        i((0, F.fz)({ text: e }));
                                    }
                                },
                                onError() {
                                    i((0, F.fz)({ text: E }));
                                },
                            });
                        }, [e, i, t, l, a, u, o]);
                    return _.createElement(k.Z, { cancelButtonLabel: h, confirmButtonLabel: R, confirmButtonType: "primary", headline: I, onCancel: n, onConfirm: r, text: P });
                }),
                A = _.memo(x);
        },
        11493: (e, n, t) => {
            t.d(n, { Z: () => o });
            var a = t(202784),
                i = t(107267),
                l = t(782826);
            const o = function () {
                const e = (0, i.useHistory)();
                return a.useCallback(
                    (n) => {
                        l.cd.test(e.location.pathname) && e.replace(e.location.pathname, { ...e.location.state, socialContext: n });
                    },
                    [e],
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CommunityTweetPinning.7e14d8fa.js.map
