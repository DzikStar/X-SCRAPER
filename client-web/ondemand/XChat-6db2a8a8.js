"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-6db2a8a8"],
    {
        700931: (e, l, a) => {
            a.d(l, { H: () => t });
            var n = a(552322),
                r = a(139802),
                s = a(200012);
            const t = ({ settings: e }) => (0, n.jsx)(r.A, { settings: e, children: (0, n.jsx)(s.p, {}) });
        },
        139802: (e, l, a) => {
            a.d(l, { A: () => p });
            var n = a(552322),
                r = a(668781),
                s = a(202784),
                t = a(107267),
                i = a(607499),
                u = a(968025),
                o = a(727071),
                c = a(768246),
                d = a(264531),
                g = a(611463),
                m = a(383508),
                y = a(446368);
            const p = ({ children: e, settings: l }) => {
                const a = (0, t.useLocation)(),
                    p = (0, t.useHistory)(),
                    [f, _] = (0, s.useState)(new URLSearchParams(a.search)),
                    h = (0, t.useParams)(),
                    { t: k } = (0, m.$G)();
                (0, s.useEffect)(() => {
                    _(new URLSearchParams(a.search));
                }, [a.search]);
                const b = (0, s.useMemo)(() => ({ push: (e, l) => p.push(e, l) }), [p]);
                return (0, n.jsx)(i.S, { message: k("Something went wrong while loading Chat. Please try again later."), children: (0, n.jsx)(u.p, { router: b, children: (0, n.jsx)(y.ng, { children: (0, n.jsx)(o.d, { useParams: () => h, children: (0, n.jsx)(c.x, { searchParams: f, children: (0, n.jsx)(d.mp, { settings: l, children: (0, n.jsxs)(g.U, { children: [e, (0, n.jsx)(r.x, {})] }) }) }) }) }) }) });
            };
        },
        954713: (e, l, a) => {
            a.d(l, { x: () => i });
            var n = a(552322),
                r = a(139802),
                s = a(922150);
            const t = ["recovery", "new", "forgot", "verify"],
                i = ({ mode: e, shouldRegister: l, settings: a }) => (t.includes(e) ? (0, n.jsx)(r.A, { settings: a, children: (0, n.jsx)(s.G, { mode: e, shouldRegister: l }) }) : null);
        },
        524098: (e, l, a) => {
            a.d(l, { F: () => i });
            var n = a(552322),
                r = a(718278),
                s = a(664147),
                t = a(549862);
            function i() {
                return (0, n.jsx)("div", { className: "bg-background text-text rounded-full shadow-lg border px-3 py-1.5 flex items-center gap-3 z-50", children: (0, n.jsxs)("div", { className: "flex items-center gap-1.5", children: [(0, n.jsx)(t.J, {}), (0, n.jsx)(s.i, {}), (0, n.jsx)(r.o, {})] }) });
            }
        },
        664147: (e, l, a) => {
            a.d(l, { e: () => i, i: () => u });
            var n = a(552322),
                r = a(941204),
                s = a(849335),
                t = a(202784);
            const i = "top_cursor",
                u = () => {
                    const [e, l] = (0, t.useState)("true" === localStorage.getItem(i) || !1);
                    return (0, n.jsxs)("div", {
                        className: "flex flex-row items-center gap-1 border border-solid rounded-lg p-2",
                        children: [
                            (0, n.jsx)(r.x, { weight: "bold", color: "gray700", children: "Top cursor" }),
                            (0, n.jsx)(s.r, {
                                checked: e,
                                onCheckedChange: (e) => {
                                    l(e), localStorage.setItem(i, e ? "true" : "false");
                                },
                            }),
                        ],
                    });
                };
        },
        686524: (e, l, a) => {
            a.r(l), a.d(l, { default: () => p });
            const n = {
                fragment: {
                    argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "fetchPostQuery",
                    selections: [
                        {
                            alias: null,
                            args: (s = [
                                { kind: "Variable", name: "rest_id", variableName: "id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: "TweetResults",
                            kind: "LinkedField",
                            name: "tweet_result_by_rest_id",
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
                                        (t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                (u = {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "LegacyTweet",
                                                    kind: "LinkedField",
                                                    name: "legacy",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "EntitySet",
                                                            kind: "LinkedField",
                                                            name: "entities",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "ApiMediaEntity",
                                                                    kind: "LinkedField",
                                                                    name: "media",
                                                                    plural: !0,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "media_url_https", storageKey: null },
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "ApiMediaEntityVideoInfo",
                                                                            kind: "LinkedField",
                                                                            name: "video_info",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "duration_millis", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "aspect_ratio", storageKey: null },
                                                                                { alias: null, args: null, concreteType: "ApiMediaEntityVideoVariant", kind: "LinkedField", name: "variants", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "content_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bitrate", storageKey: null }], storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "ext_alt_text", storageKey: null },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                    ],
                                                    storageKey: null,
                                                }),
                                                (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                (c = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "TweetCore",
                                                    kind: "LinkedField",
                                                    name: "core",
                                                    plural: !1,
                                                    selections: [
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "UserResults",
                                                            kind: "LinkedField",
                                                            name: "user_results",
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
                                                                                c,
                                                                                (d = { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null }),
                                                                                (g = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "ApiUser",
                                                                                    kind: "LinkedField",
                                                                                    name: "legacy",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                }),
                                                                                (m = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                                (y = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "HighlightedUserLabelResponse",
                                                                                    kind: "LinkedField",
                                                                                    name: "affiliates_highlighted_label",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: "HighlightedUserLabel",
                                                                                            kind: "LinkedField",
                                                                                            name: "label",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [i], storageKey: null },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                }),
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
                                                    storageKey: null,
                                                },
                                            ],
                                            type: "Tweet",
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
                operation: { argumentDefinitions: r, kind: "Operation", name: "fetchPostQuery", selections: [{ alias: null, args: s, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [u, o, c, { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [c, d, g, m, y, o], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }, o], storageKey: null }] },
                params: { id: "BrdmgaNbXWZa4D4KLY-hCA", metadata: {}, name: "fetchPostQuery", operationKind: "query", text: null },
            };
            var r, s, t, i, u, o, c, d, g, m, y;
            n.hash = "6b931e47d1ab528a8de40a76cc4aef9e";
            const p = n;
        },
        84504: (e, l, a) => {
            a.d(l, { n5: () => r });
            var n = a(625067);
            function r() {
                const e = (0, n.Qc)(document.cookie);
                return e.twid?.slice(2) || "0";
            }
        },
        439261: (e, l, a) => {
            a.d(l, { K: () => s, R: () => r });
            const n = "clear_db";
            function r() {
                const e = "true" === localStorage.getItem(n);
                return localStorage.setItem(n, "false"), e;
            }
            function s() {
                localStorage.setItem(n, "true");
            }
        },
        842898: (e, l, a) => {
            a.d(l, { S: () => r });
            var n = a(889906);
            async function r(e, l) {
                return (0, n.fetchQuery)(l, s, { id: e }, { fetchPolicy: "store-or-network" })
                    .toPromise()
                    .then((l) => {
                        const a = l?.tweet_result_by_rest_id?.result;
                        if (!a || "Tweet" !== a.__typename) return null;
                        let n, r;
                        switch (("Badge" === a.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_display_type && "BusinessLabel" === a.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_type && a.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge && (n = { label: a.core?.user_results?.result?.affiliates_highlighted_label?.label?.description, url: a.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge?.url }), a.core?.user_results?.result?.legacy?.verified_type)) {
                            case "Business":
                                r = "business";
                                break;
                            case "Government":
                                r = "government";
                                break;
                            case "User":
                                r = "user";
                                break;
                            default:
                                r = a.core?.user_results?.result?.is_blue_verified ? "user" : void 0;
                        }
                        return { id: e, text: a.legacy?.full_text, author: { id: a.core?.user_results?.result?.rest_id, name: a.core?.user_results?.result?.legacy?.name, screenName: a.core?.user_results?.result?.legacy?.screen_name, avatar: a.core?.user_results?.result?.legacy?.profile_image_url_https, badges: { affiliation: n, verifiedType: r }, profileImageUrl: a.core?.user_results?.result?.legacy?.profile_image_url_https, profileImageShape: a.core?.user_results?.result?.profile_image_shape?.toLowerCase() }, displayTextRange: a.legacy?.display_text_range, entities: a.legacy?.entities, createdAt: a.legacy?.created_at };
                    });
            }
            const s = a(686524);
        },
        336984: (e, l, a) => {
            a.d(l, { r: () => s });
            var n = a(425522);
            const r = (e) => {
                    switch (e) {
                        case n.com.x.models.VerifiedType.User:
                            return "user";
                        case n.com.x.models.VerifiedType.Business:
                            return "business";
                        case n.com.x.models.VerifiedType.Government:
                            return "government";
                        default:
                            return;
                    }
                },
                s = (e) => ({ affiliation: e.userLabel?.shouldDisplayBadge() && e.userLabel.description && e.userLabel.badgeImageUrl ? { label: e.userLabel.description, url: e.userLabel.badgeImageUrl } : void 0, isProtected: e.isProtected, isSubscriber: e.friendship.isSuperFollowingMe, verifiedType: r(e.verifiedType) });
        },
        173399: (e, l, a) => {
            async function n(e) {
                try {
                    const l = await navigator.storage.getDirectory();
                    await l.removeEntry(`dm-files-${e}`, { recursive: !0 });
                } catch (e) {
                    e instanceof DOMException && e.name;
                }
            }
            a.d(l, { Y: () => n });
        },
        167285: (e, l, a) => {
            a.d(l, { S: () => o });
            const n = 3600,
                r = 86400,
                s = 604800,
                t = 2592e3,
                i = { minute: { narrow: "m", long: "minute" }, hour: { narrow: "h", long: "hour" }, day: { narrow: "d", long: "day" }, week: { narrow: "w", long: "week" }, month: { narrow: "mo", long: "month" } },
                u = (e, l, a) => {
                    switch (a) {
                        case "narrow":
                            return i[l][a];
                        case "long": {
                            const n = 1 !== e;
                            return ` ${i[l][a]}${n ? "s" : ""}`;
                        }
                    }
                },
                o = ({ diffSeconds: e, epochSeconds: l, style: a }) => {
                    if (e < 60) return "Now";
                    if (e < n) {
                        const l = Math.floor(e / 60);
                        return `${l}${u(l, "minute", a)}`;
                    }
                    if (e < r) {
                        const l = Math.floor(e / n);
                        return `${l}${u(l, "hour", a)}`;
                    }
                    if (e < s) {
                        const l = Math.floor(e / r);
                        return `${l}${u(l, "day", a)}`;
                    }
                    if (e < t) {
                        const l = Math.floor(e / s);
                        return `${l}${u(l, "week", a)}`;
                    }
                    if (!l || e < 31536e3) {
                        const l = Math.floor(e / t);
                        return `${l}${u(l, "month", a)}`;
                    }
                    return new Date(l).toLocaleDateString("en-US");
                };
        },
        369962: (e, l, a) => {
            a.d(l, { L: () => n });
            const n = (e) => {
                const l = Math.floor(e / 1e3),
                    a = Math.floor(l / 60),
                    n = Math.floor(a / 60),
                    r = Math.floor(n / 24),
                    s = Math.floor(r / 7),
                    t = (e, l) => `${e} ${l}${1 !== e ? "s" : ""}`;
                return s > 0 ? t(s, "week") : r > 0 ? t(r, "day") : n > 0 ? t(n, "hour") : a > 0 ? t(a, "minute") : t(l, "second");
            };
        },
        950849: (e, l, a) => {
            a.d(l, { E: () => r });
            var n = a(202784);
            const r = (e, l) => {
                (0, n.useEffect)(() => {
                    const a = e.subscribe(l);
                    return () => {
                        a.cancel();
                    };
                }, [e, l]);
            };
        },
        533476: (e, l, a) => {
            a.d(l, { _: () => r });
            var n = a(202784);
            function r(e) {
                const [l, a] = (0, n.useState)(e.state);
                return (
                    (0, n.useEffect)(() => {
                        const l = e.subscribe(a);
                        return () => {
                            l.cancel();
                        };
                    }, [e]),
                    l
                );
            }
        },
        658358: (e, l, a) => {
            a.d(l, { e: () => c });
            var n = a(425522),
                r = a(256958),
                s = a(202784);
            const t = n.com.x.dms.composer.composer.ComposerToastType,
                i = n.com.x.dms.convinfo.ConversationInfoToast,
                u = n.com.x.dms.ParticipantMenuItem,
                o = n.com.x.dms.newdm.NewDmToast;
            function c(e) {
                (0, s.useEffect)(() => {
                    const l = e.subscribe((e) => {
                        const l = (function (e) {
                            switch (e) {
                                case t.ATTACHMENT_FAILED:
                                    return "Unable to load attachment";
                                case t.EDIT_MESSAGE_FAILED:
                                    return "Edit failed. Please try again later.";
                                case i.ResignAdminFailed:
                                    return "Unable to resign as Admin";
                                case i.DeleteConversationFailed:
                                    return "Unable to delete conversation";
                                case i.LeaveGroupFailed:
                                    return "Unable to leave conversation";
                                case o.FetchError:
                                    return "An error occurred";
                                case o.CreateGroupFailed:
                                    return "Unable to create group";
                                case o.CreateOneOnOneFailed:
                                    return "Unable to start conversation.";
                            }
                            if (e instanceof n.com.x.dms.convinfo.ConversationInfoToast.ParticipantMenuItemFailed)
                                switch (e.item) {
                                    case u.AddAsAdmin:
                                        return "Unable to add user as Admin";
                                    case u.RemoveAsAdmin:
                                        return "Unable to remove user as Admin";
                                    case u.RemoveFromGroup:
                                        return "Unable to remove user from group";
                                }
                            return null;
                        })(e);
                        l && (0, r.Am)(l);
                    });
                    return () => {
                        l.cancel();
                    };
                }, [e]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-6db2a8a8.fa727c0a.js.map
