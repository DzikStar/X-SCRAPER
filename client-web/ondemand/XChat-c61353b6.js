"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-c61353b6"],
    {
        700931: (e, u, a) => {
            a.d(u, { H: () => l });
            var d = a(552322),
                n = a(139802),
                r = a(200012);
            const l = ({ settings: e }) => (0, d.jsx)(n.A, { settings: e, children: (0, d.jsx)(r.p, {}) });
        },
        139802: (e, u, a) => {
            a.d(u, { A: () => m });
            var d = a(552322),
                n = a(19745),
                r = a(202784),
                l = a(107267),
                s = a(607499),
                t = a(968025),
                i = a(727071),
                c = a(768246),
                o = a(264531),
                f = a(611463),
                b = a(383508),
                g = a(446368);
            const m = ({ children: e, settings: u }) => {
                const a = (0, l.useLocation)(),
                    m = (0, l.useHistory)(),
                    [h, p] = (0, r.useState)(new URLSearchParams(a.search)),
                    y = (0, l.useParams)(),
                    { t: k } = (0, b.$G)();
                (0, r.useEffect)(() => {
                    p(new URLSearchParams(a.search));
                }, [a.search]);
                const v = (0, r.useMemo)(() => ({ push: (e, u) => m.push(e, u) }), [m]);
                return (0, d.jsx)(s.S, { message: k("Something went wrong while loading Chat. Please try again later."), children: (0, d.jsx)(t.p, { router: v, children: (0, d.jsx)(g.ng, { children: (0, d.jsx)(i.d, { useParams: () => y, children: (0, d.jsx)(c.x, { searchParams: h, children: (0, d.jsx)(o.mp, { settings: u, children: (0, d.jsxs)(f.U, { children: [e, (0, d.jsx)(n.x, {})] }) }) }) }) }) }) });
            };
        },
        954713: (e, u, a) => {
            a.d(u, { x: () => s });
            var d = a(552322),
                n = a(139802),
                r = a(922150);
            const l = ["recovery", "new", "forgot", "verify"],
                s = ({ mode: e, shouldRegister: u, settings: a }) => (l.includes(e) ? (0, d.jsx)(n.A, { settings: a, children: (0, d.jsx)(r.G, { mode: e, shouldRegister: u }) }) : null);
        },
        524098: (e, u, a) => {
            a.d(u, { F: () => s });
            var d = a(552322),
                n = a(718278),
                r = a(664147),
                l = a(549862);
            function s() {
                return (0, d.jsx)("div", { className: "bg-background text-text rounded-full shadow-lg border px-3 py-1.5 flex items-center gap-3 z-50", children: (0, d.jsxs)("div", { className: "flex items-center gap-1.5", children: [(0, d.jsx)(l.J, {}), (0, d.jsx)(r.i, {}), (0, d.jsx)(n.o, {})] }) });
            }
        },
        664147: (e, u, a) => {
            a.d(u, { e: () => s, i: () => t });
            var d = a(552322),
                n = a(332161),
                r = a(261012),
                l = a(202784);
            const s = "top_cursor",
                t = () => {
                    const [e, u] = (0, l.useState)("true" === localStorage.getItem(s) || !1);
                    return (0, d.jsxs)("div", {
                        className: "flex flex-row items-center gap-1 border border-solid rounded-lg p-2",
                        children: [
                            (0, d.jsx)(n.x, { weight: "bold", color: "gray700", children: "Top cursor" }),
                            (0, d.jsx)(r.r, {
                                checked: e,
                                onCheckedChange: (e) => {
                                    u(e), localStorage.setItem(s, e ? "true" : "false");
                                },
                            }),
                        ],
                    });
                };
        },
        686524: (e, u, a) => {
            a.r(u), a.d(u, { default: () => m });
            const d = {
                fragment: {
                    argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "fetchPostQuery",
                    selections: [
                        {
                            alias: null,
                            args: (r = [
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
                                        (l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                (t = {
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
                                                                                { alias: null, args: null, concreteType: "ApiMediaEntityVideoVariant", kind: "LinkedField", name: "variants", plural: !0, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "content_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bitrate", storageKey: null }], storageKey: null },
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
                                                (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                                                                                (o = { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null }),
                                                                                (f = {
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
                                                                                (b = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                                (g = {
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
                                                                                                { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [s], storageKey: null },
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
                operation: { argumentDefinitions: n, kind: "Operation", name: "fetchPostQuery", selections: [{ alias: null, args: r, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [t, i, c, { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [c, o, f, b, g, i], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }, i], storageKey: null }] },
                params: { id: "BrdmgaNbXWZa4D4KLY-hCA", metadata: {}, name: "fetchPostQuery", operationKind: "query", text: null },
            };
            var n, r, l, s, t, i, c, o, f, b, g;
            d.hash = "6b931e47d1ab528a8de40a76cc4aef9e";
            const m = d;
        },
        84504: (e, u, a) => {
            a.d(u, { n5: () => n });
            var d = a(625067);
            function n() {
                const e = (0, d.Qc)(document.cookie);
                return e.twid?.slice(2) || "0";
            }
        },
        842898: (e, u, a) => {
            a.d(u, { S: () => n });
            var d = a(889906);
            async function n(e, u) {
                return (0, d.fetchQuery)(u, r, { id: e }, { fetchPolicy: "store-or-network" })
                    .toPromise()
                    .then((u) => {
                        const a = u?.tweet_result_by_rest_id?.result;
                        if (!a || "Tweet" !== a.__typename) return null;
                        let d, n;
                        switch (("Badge" === a.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_display_type && "BusinessLabel" === a.core?.user_results?.result?.affiliates_highlighted_label?.label?.user_label_type && a.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge && (d = { label: a.core?.user_results?.result?.affiliates_highlighted_label?.label?.description, url: a.core?.user_results?.result?.affiliates_highlighted_label?.label?.badge?.url }), a.core?.user_results?.result?.legacy?.verified_type)) {
                            case "Business":
                                n = "business";
                                break;
                            case "Government":
                                n = "government";
                                break;
                            case "User":
                                n = "user";
                                break;
                            default:
                                n = a.core?.user_results?.result?.is_blue_verified ? "user" : void 0;
                        }
                        return { id: e, text: a.legacy?.full_text, author: { id: a.core?.user_results?.result?.rest_id, name: a.core?.user_results?.result?.legacy?.name, screenName: a.core?.user_results?.result?.legacy?.screen_name, avatar: a.core?.user_results?.result?.legacy?.profile_image_url_https, badges: { affiliation: d, verifiedType: n }, profileImageUrl: a.core?.user_results?.result?.legacy?.profile_image_url_https, profileImageShape: a.core?.user_results?.result?.profile_image_shape?.toLowerCase() }, displayTextRange: a.legacy?.display_text_range, entities: a.legacy?.entities, createdAt: a.legacy?.created_at };
                    });
            }
            const r = a(686524);
        },
        336984: (e, u, a) => {
            a.d(u, { r: () => r });
            var d = a(425522);
            const n = (e) => {
                    switch (e) {
                        case d.com.x.models.VerifiedType.User:
                            return "user";
                        case d.com.x.models.VerifiedType.Business:
                            return "business";
                        case d.com.x.models.VerifiedType.Government:
                            return "government";
                        default:
                            return;
                    }
                },
                r = (e) => ({ affiliation: e.userLabel?.shouldDisplayBadge() && e.userLabel.description && e.userLabel.badgeImageUrl ? { label: e.userLabel.description, url: e.userLabel.badgeImageUrl } : void 0, isProtected: e.isProtected, isSubscriber: e.friendship.isSuperFollowingMe, verifiedType: n(e.verifiedType) });
        },
        173399: (e, u, a) => {
            a.d(u, { O: () => r });
            var d = a(84504);
            const n = "xchat";
            async function r() {
                const e = (0, d.n5)();
                await (async function (e) {
                    try {
                        const u = await navigator.storage.getDirectory();
                        await u.removeEntry(`dm-files-${e}`, { recursive: !0 });
                    } catch (e) {
                        e instanceof DOMException && e.name;
                    }
                })(e),
                    await (async function () {
                        return new Promise((e, u) => {
                            const a = setTimeout(() => {
                                    u(new Error("Database deletion timeout"));
                                }, 5e3),
                                d = new BroadcastChannel(n);
                            (d.onmessage = ({ data: u }) => {
                                "before_logout_done" === u?.action && (clearTimeout(a), d.close(), e());
                            }),
                                d.postMessage({ action: "before_logout" });
                        });
                    })();
            }
        },
        167285: (e, u, a) => {
            a.d(u, { H: () => c, S: () => i });
            const d = 3600,
                n = 86400,
                r = 604800,
                l = 2592e3,
                s = { minute: { narrow: "m", long: "minute" }, hour: { narrow: "h", long: "hour" }, day: { narrow: "d", long: "day" }, week: { narrow: "w", long: "week" }, month: { narrow: "mo", long: "month" } },
                t = (e, u, a) => {
                    switch (a) {
                        case "narrow":
                            return s[u][a];
                        case "long": {
                            const d = 1 !== e;
                            return ` ${s[u][a]}${d ? "s" : ""}`;
                        }
                    }
                },
                i = ({ diffSeconds: e, epochSeconds: u, style: a }) => {
                    if (e < 60) return "Now";
                    if (e < d) {
                        const u = Math.floor(e / 60);
                        return `${u}${t(u, "minute", a)}`;
                    }
                    if (e < n) {
                        const u = Math.floor(e / d);
                        return `${u}${t(u, "hour", a)}`;
                    }
                    if (e < r) {
                        const u = Math.floor(e / n);
                        return `${u}${t(u, "day", a)}`;
                    }
                    if (e < l) {
                        const u = Math.floor(e / r);
                        return `${u}${t(u, "week", a)}`;
                    }
                    if (!u || e < 31536e3) {
                        const u = Math.floor(e / l);
                        return `${u}${t(u, "month", a)}`;
                    }
                    return new Date(1e3 * u).toLocaleDateString("en-US");
                },
                c = (e) => new Date(1e3 * e).toLocaleString("en-US", { timeStyle: "short" });
        },
        369962: (e, u, a) => {
            a.d(u, { L: () => d });
            const d = (e) => {
                const u = Math.floor(e / 1e3),
                    a = Math.floor(u / 60),
                    d = Math.floor(a / 60),
                    n = Math.floor(d / 24),
                    r = Math.floor(n / 7),
                    l = (e, u) => `${e} ${u}${1 !== e ? "s" : ""}`;
                return r > 0 ? l(r, "week") : n > 0 ? l(n, "day") : d > 0 ? l(d, "hour") : a > 0 ? l(a, "minute") : l(u, "second");
            };
        },
        950849: (e, u, a) => {
            a.d(u, { E: () => n });
            var d = a(202784);
            const n = (e, u) => {
                (0, d.useEffect)(() => {
                    const a = e.subscribe(u);
                    return () => {
                        a.cancel();
                    };
                }, [e, u]);
            };
        },
        533476: (e, u, a) => {
            a.d(u, { _: () => n });
            var d = a(202784);
            function n(e) {
                const [u, a] = (0, d.useState)(e.state);
                return (
                    (0, d.useEffect)(() => {
                        const u = e.subscribe(a);
                        return () => {
                            u.cancel();
                        };
                    }, [e]),
                    u
                );
            }
        },
        658358: (e, u, a) => {
            a.d(u, { e: () => c });
            var d = a(425522),
                n = a(256958),
                r = a(202784);
            const l = d.com.x.dms.composer.composer.ComposerToastType,
                s = d.com.x.dms.convinfo.ConversationInfoToast,
                t = d.com.x.dms.ParticipantMenuItem,
                i = d.com.x.dms.newdm.NewDmToast;
            function c(e) {
                (0, r.useEffect)(() => {
                    const u = e.subscribe((e) => {
                        const u = (function (e) {
                            switch (e) {
                                case l.ATTACHMENT_FAILED:
                                    return "Unable to load attachment";
                                case l.EDIT_MESSAGE_FAILED:
                                    return "Edit failed. Please try again later.";
                                case s.ResignAdminFailed:
                                    return "Unable to resign as Admin";
                                case s.DeleteConversationFailed:
                                    return "Unable to delete conversation";
                                case s.LeaveGroupFailed:
                                    return "Unable to leave conversation";
                                case i.FetchError:
                                    return "An error occurred";
                                case i.CreateGroupFailed:
                                    return "Unable to create group";
                                case i.CreateOneOnOneFailed:
                                    return "Unable to start conversation.";
                            }
                            if (e instanceof d.com.x.dms.convinfo.ConversationInfoToast.ParticipantMenuItemFailed)
                                switch (e.item) {
                                    case t.AddAsAdmin:
                                        return "Unable to add user as Admin";
                                    case t.RemoveAsAdmin:
                                        return "Unable to remove user as Admin";
                                    case t.RemoveFromGroup:
                                        return "Unable to remove user from group";
                                }
                            return null;
                        })(e);
                        u && (0, n.Am)(u);
                    });
                    return () => {
                        u.cancel();
                    };
                }, [e]);
            }
        },
        928220: (e, u, a) => {
            a.d(u, { Z: () => i });
            var d = a(381973);
            const n = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i;
            var r = a(26883),
                l = a(721280);
            const s = (0, d.Z)(/[#{spacesGroup}]/, { spacesGroup: l.Z }),
                t = (0, d.Z)("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])", { cashtag: n, spaces: s, punct: r.Z }, "gi");
            function i(e) {
                if (!e || -1 === e.indexOf("$")) return [];
                const u = [];
                return (
                    e.replace(t, (e, a, d, n, r) => {
                        const l = r + a.length,
                            s = l + n.length + 1;
                        return u.push({ cashtag: n, indices: [l, s] }), "";
                    }),
                    u
                );
            }
        },
        8974: (e, u, a) => {
            a.d(u, { Z: () => t });
            const d = RegExp("[a-zA-Z0-9_\\-+\\.!\\&]{1,64}@(?:[a-zA-Z0-9\\-_]{1,254}\\.){1,127}[a-zA-Z]{2,63}", "gi"),
                n = "[a-zA-Z0-9_\\-.]",
                r = "[a-zA-Z0-9_\\-~!@$%*\\(\\)+:;,.\\/]",
                l = `\\?(?:${n}+=${r}*)(?:&${n}+=${r}*)*`,
                s = RegExp(`(?<=[^a-zA-Z0-9_\\-.]|^)(mailto:)?(${d.source})(${l})?`, "gi");
            function t(e) {
                const u = [];
                return (
                    e.replace(s, (e, a, d, n, r) => {
                        const l = r,
                            s = l + e.length;
                        return u.push({ email: e, indices: [l, s] }), "";
                    }),
                    u
                );
            }
        },
        303676: (e, u, a) => {
            a.d(u, { Z: () => y });
            var d = a(196594),
                n = a(381973);
            const r = /[#＃]/,
                l = (0, n.Z)(/^(?:#{hashSigns}|:\/\/)/, { hashSigns: r }),
                s =
                    /\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48]|\ud804[\udc00-\udc46\udc7f-\udcba\udcd0-\udce8\udd00-\udd34\udd50-\udd73\udd76\udd80-\uddc4\uddda\ude00-\ude11\ude13-\ude37\udeb0-\udeea\udf01-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc80-\udcc5\udcc7\udd80-\uddb5\uddb8-\uddc0\ude00-\ude40\ude44\ude80-\udeb7]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud808[\udc00-\udf98]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]|\ud82c[\udc00\udc01]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udcd0-\udcd6]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef]/,
                t =
                    /A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07ca-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0971-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09f0\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a70-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0cf1\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u103f\u1050-\u108f\u109a-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u180b-\u180d\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f\u1aa7\u1ab0-\u1abe\u1b00-\u1b4b\u1b6b-\u1b73\u1b80-\u1baf\u1bba-\u1bf3\u1c00-\u1c37\u1c4d-\u1c4f\u1c5a-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u20d0-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005\u3006\u302a-\u302f\u3031-\u3035\u303b\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua672\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6e5\ua6f0\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8e0-\ua8f7\ua8fb\ua90a-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf\ua9e0-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64\uab65\uabc0-\uabea\uabec\uabed\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf870-\uf87f\uf882\uf884-\uf89f\uf8b8\uf8c1-\uf8d6\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc/,
                i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gm,
                c = (0, n.Z)(/(?:[#{bmpLetterAndMarks}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}))/, { bmpLetterAndMarks: t, nonBmpCodePairs: i, astralLetterAndMarks: s }),
                o = /\ud801[\udca0-\udca9]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udcd0-\udcd9\ude50-\ude59\udec0-\udec9]|\ud806[\udce0-\udce9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]/,
                f = /0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19/,
                b = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\xb7/,
                g = (0, n.Z)(/(?:[#{bmpLetterAndMarks}#{bmpNumerals}#{hashtagSpecialChars}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}|#{astralNumerals}))/, { bmpLetterAndMarks: t, bmpNumerals: f, hashtagSpecialChars: b, nonBmpCodePairs: i, astralLetterAndMarks: s, astralNumerals: o }),
                m = /(?:[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/,
                h = (0, n.Z)(/(?:^|\uFE0E|\uFE0F|$|(?!#{hashtagAlphaNumeric}|&)#{codePoint})/, { codePoint: m, hashtagAlphaNumeric: g }),
                p = (0, n.Z)(/(#{hashtagBoundary})(#{hashSigns})(?!\uFE0F|\u20E3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi, { hashtagBoundary: h, hashSigns: r, hashtagAlphaNumeric: g, hashtagAlpha: c });
            function y(e, u) {
                if (!e || !e.match(r)) return [];
                let a = [];
                if (
                    (e.replace(p, (e, u, d, n, r, s) => {
                        if (!s.slice(r + e.length).match(l)) {
                            const e = r + u.length,
                                d = e + n.length + 1;
                            a.push({ hashtag: n, indices: [e, d] });
                        }
                        return "";
                    }),
                    u?.checkUrlOverlap)
                ) {
                    const u = (0, d.Z)(e);
                    if (u.length > 0) {
                        const e = [...a, ...u];
                        !(function (e) {
                            if (0 === e.length) return;
                            e.sort((e, u) => e.indices[0] - u.indices[0]);
                            let u = e[0];
                            if (u)
                                for (let a = 1; a < e.length; a++) {
                                    const d = e[a];
                                    d && u.indices[1] > d.indices[0] ? (e.splice(a, 1), a--) : d && (u = d);
                                }
                        })(e),
                            (a = []);
                        for (let u = 0; u < e.length; u++) {
                            const d = e[u];
                            d && "hashtag" in d && a.push(d);
                        }
                    }
                }
                return a;
            }
        },
        879922: (e, u, a) => {
            a.d(u, { Z: () => i });
            const d = /[@＠]/;
            var n = a(381973),
                r = a(579771);
            const l = (0, n.Z)(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/, { atSigns: d, latinAccentChars: r.Z }),
                s = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/,
                t = (0, n.Z)("(#{validMentionPrecedingChars})(#{atSigns})([a-zA-Z0-9_]{1,20})(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?", { validMentionPrecedingChars: s, atSigns: d }, "g");
            function i(e) {
                const u = [],
                    a = (function (e) {
                        if (!e || !e.match(d)) return [];
                        const u = [];
                        return (
                            e.replace(t, (e, a, d, n, r, s, t) => {
                                if (!t.slice(s + e.length).match(l)) {
                                    const e = r || "",
                                        d = s + a.length,
                                        l = d + n.length + e.length + 1;
                                    u.push({ screenName: n, listSlug: e, indices: [d, l] });
                                }
                                return "";
                            }),
                            u
                        );
                    })(e);
                for (let e = 0; e < a.length; e++) {
                    const d = a[e];
                    d && "" === d.listSlug && u.push({ screenName: d.screenName, indices: d.indices });
                }
                return u;
            }
        },
        196594: (e, u, a) => {
            a.d(u, { Z: () => P });
            var d = a(268058),
                n = a(381973),
                r = a(579771);
            const l = RegExp("(?:(?:한국|香港|澳門|新加坡|台灣|台湾|中國|中国|გე|ລາວ|ไทย|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|ભારત|ਭਾਰਤ|ভাৰত|ভারত|বাংলা|भारोत|भारतम्|भारत|ڀارت|پاکستان|موريتانيا|مليسيا|مصر|قطر|فلسطين|عمان|عراق|سورية|سودان|تونس|بھارت|بارت|ایران|امارات|المغرب|السعودية|الجزائر|البحرين|الاردن|ישראל|հայ|қаз|укр|срб|рф|мон|мкд|ею|бел|бг|ευ|ελ|zw|zm|za|yt|ye|ws|wf|vu|vn|vi|vg|ve|vc|va|uz|uy|us|um|uk|ug|ua|tz|tw|tv|tt|tr|tp|to|tn|tm|tl|tk|tj|th|tg|tf|td|tc|sz|sy|sx|sv|su|st|ss|sr|so|sn|sm|sl|sk|sj|si|sh|sg|se|sd|sc|sb|sa|rw|ru|rs|ro|re|qa|py|pw|pt|ps|pr|pn|pm|pl|pk|ph|pg|pf|pe|pa|om|nz|nu|nr|np|no|nl|ni|ng|nf|ne|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|mn|mm|ml|mk|mh|mg|mf|me|md|mc|ma|ly|lv|lu|lt|ls|lr|lk|li|lc|lb|la|kz|ky|kw|kr|kp|kn|km|ki|kh|kg|ke|jp|jo|jm|je|it|is|ir|iq|io|in|im|il|ie|id|hu|ht|hr|hn|hm|hk|gy|gw|gu|gt|gs|gr|gq|gp|gn|gm|gl|gi|gh|gg|gf|ge|gd|gb|ga|fr|fo|fm|fk|fj|fi|eu|et|es|er|eh|eg|ee|ec|dz|do|dm|dk|dj|de|cz|cy|cx|cw|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|bz|by|bw|bv|bt|bs|br|bq|bo|bn|bm|bl|bj|bi|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ar|aq|ao|an|am|al|ai|ag|af|ae|ad|ac)(?=[^0-9a-zA-Z@+-]|$))"),
                s = RegExp(
                    "(?:(?:삼성|닷컴|닷넷|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|诺基亚|联通|网络|网站|网店|网址|组织机构|移动|珠宝|点看|游戏|淡马锡|机构|書籍|时尚|新闻|政府|政务|招聘|手表|手机|我爱你|慈善|微博|广东|工行|家電|娱乐|天主教|大拿|大众汽车|在线|嘉里大酒店|嘉里|商标|商店|商城|公益|公司|八卦|健康|信息|佛山|企业|亚马逊|中文网|中信|世界|ポイント|ファッション|セール|ストア|コム|グーグル|クラウド|アマゾン|みんな|คอม|संगठन|नेट|कॉम|همراه|موقع|موبايلي|كوم|كاثوليك|عرب|شبكة|بيتك|بازار|العليان|ارامكو|اتصالات|ابوظبي|קום|сайт|рус|орг|онлайн|москва|ком|католик|дети|zuerich|zone|zippo|zip|zero|zara|zappos|yun|youtube|you|yokohama|yoga|yodobashi|yandex|yamaxun|yahoo|yachts|xyz|xxx|xperia|xin|xihuan|xfinity|xerox|xbox|wtf|wtc|wow|world|works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|warman|wanggou|wang|walter|walmart|wales|vuelos|voyage|voto|voting|vote|volvo|volkswagen|vodka|vlaanderen|vivo|viva|vistaprint|vista|vision|visa|virgin|vip|vin|villas|viking|vig|video|viajes|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|vanguard|vana|vacations|ups|uol|uno|university|unicom|uconnect|ubs|ubank|tvs|tushu|tunes|tui|tube|trv|trust|travelersinsurance|travelers|travelchannel|travel|training|trading|trade|toys|toyota|town|tours|total|toshiba|toray|top|tools|tokyo|today|tmall|tkmaxx|tjx|tjmaxx|tirol|tires|tips|tiffany|tienda|tickets|tiaa|theatre|theater|thd|teva|tennis|temasek|telefonica|telecity|tel|technology|tech|team|tdk|tci|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|systems|symantec|sydney|swiss|swiftcover|swatch|suzuki|surgery|surf|support|supply|supplies|sucks|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statoil|statefarm|statebank|starhub|star|staples|stada|srt|srl|spreadbetting|spot|sport|spiegel|space|spa|soy|sony|song|solutions|solar|sohu|software|softbank|social|soccer|sncf|smile|smart|sling|skype|sky|skin|ski|site|singles|sina|silk|shriram|showtime|show|shouji|shopping|shop|shoes|shiksha|shia|shell|shaw|sharp|shangrila|sfr|sexy|sex|sew|seven|ses|services|sener|select|seek|security|secure|seat|search|scot|scor|scjohnson|science|schwarz|schule|school|scholarships|schmidt|schaeffler|scb|sca|sbs|sbi|saxo|save|sas|sarl|sapo|sap|sanofi|sandvikcoromant|sandvik|samsung|samsclub|salon|sale|sakura|safety|safe|saarland|ryukyu|rwe|run|ruhr|rugby|rsvp|room|rogers|rodeo|rocks|rocher|rmit|rip|rio|ril|rightathome|ricoh|richardli|rich|rexroth|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|redumbrella|redstone|red|recipes|realty|realtor|realestate|read|raid|radio|racing|qvc|quest|quebec|qpon|pwc|pub|prudential|pru|protection|property|properties|promo|progressive|prof|productions|prod|pro|prime|press|praxi|pramerica|post|porn|politie|poker|pohl|pnc|plus|plumbing|playstation|play|place|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|piaget|physio|photos|photography|photo|phone|philips|phd|pharmacy|pfizer|pet|pccw|pay|passagens|party|parts|partners|pars|paris|panerai|panasonic|pamperedchef|page|ovh|ott|otsuka|osaka|origins|orientexpress|organic|org|orange|oracle|open|ooo|onyourside|online|onl|ong|one|omega|ollo|oldnavy|olayangroup|olayan|okinawa|office|off|observer|obi|nyc|ntt|nrw|nra|nowtv|nowruz|now|norton|northwesternmutual|nokia|nissay|nissan|ninja|nikon|nike|nico|nhk|ngo|nfl|nexus|nextdirect|next|news|newholland|new|neustar|network|netflix|netbank|net|nec|nba|navy|natura|nationwide|name|nagoya|nadex|nab|mutuelle|mutual|music|museum|mtr|mtpc|mtn|msd|movistar|movie|mov|motorcycles|moto|moscow|mortgage|mormon|mopar|montblanc|monster|money|monash|mom|moi|moe|moda|mobily|mobile|mobi|mma|mls|mlb|mitsubishi|mit|mint|mini|mil|microsoft|miami|metlife|merckmsd|meo|menu|men|memorial|meme|melbourne|meet|media|med|mckinsey|mcdonalds|mcd|mba|mattel|maserati|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|maif|madrid|macys|luxury|luxe|lupin|lundbeck|ltda|ltd|lplfinancial|lpl|love|lotto|lotte|london|lol|loft|locus|locker|loans|loan|llp|llc|lixil|living|live|lipsy|link|linde|lincoln|limo|limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|liaison|lgbt|lexus|lego|legal|lefrak|leclerc|lease|lds|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancome|lancia|lancaster|lamer|lamborghini|ladbrokes|lacaixa|kyoto|kuokgroup|kred|krd|kpn|kpmg|kosher|komatsu|koeln|kiwi|kitchen|kindle|kinder|kim|kids|kia|kfh|kerryproperties|kerrylogistics|kerryhotels|kddi|kaufen|juniper|juegos|jprs|jpmorgan|joy|jot|joburg|jobs|jnj|jmp|jll|jlc|jio|jewelry|jetzt|jeep|jcp|jcb|java|jaguar|iwc|iveco|itv|itau|istanbul|ist|ismaili|iselect|irish|ipiranga|investments|intuit|international|intel|int|insure|insurance|institute|ink|ing|info|infiniti|industries|inc|immobilien|immo|imdb|imamat|ikano|iinet|ifm|ieee|icu|ice|icbc|ibm|hyundai|hyatt|hughes|htc|hsbc|how|house|hotmail|hotels|hoteles|hot|hosting|host|hospital|horse|honeywell|honda|homesense|homes|homegoods|homedepot|holiday|holdings|hockey|hkt|hiv|hitachi|hisamitsu|hiphop|hgtv|hermes|here|helsinki|help|healthcare|health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|guru|guitars|guide|guge|gucci|guardian|group|grocery|gripe|green|gratis|graphics|grainger|gov|got|gop|google|goog|goodyear|goodhands|goo|golf|goldpoint|gold|godaddy|gmx|gmo|gmbh|gmail|globo|global|gle|glass|glade|giving|gives|gifts|gift|ggee|george|genting|gent|gea|gdn|gbiz|gay|garden|gap|games|game|gallup|gallo|gallery|gal|fyi|futbol|furniture|fund|fun|fujixerox|fujitsu|ftr|frontier|frontdoor|frogans|frl|fresenius|free|fox|foundation|forum|forsale|forex|ford|football|foodnetwork|food|foo|fly|flsmidth|flowers|florist|flir|flights|flickr|fitness|fit|fishing|fish|firmdale|firestone|fire|financial|finance|final|film|fido|fidelity|fiat|ferrero|ferrari|feedback|fedex|fast|fashion|farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|expert|exchange|everbank|events|eus|eurovision|etisalat|esurance|estate|esq|erni|ericsson|equipment|epson|epost|enterprises|engineering|engineer|energy|emerck|email|education|edu|edeka|eco|eat|earth|dvr|dvag|durban|dupont|duns|dunlop|duck|dubai|dtv|drive|download|dot|doosan|domains|doha|dog|dodge|doctor|docs|dnp|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|dds|dclk|day|datsun|dating|date|data|dance|dad|dabur|cyou|cymru|cuisinella|csc|cruises|cruise|crs|crown|cricket|creditunion|creditcard|credit|cpa|courses|coupons|coupon|country|corsica|coop|cool|cookingchannel|cooking|contractors|contact|consulting|construction|condos|comsec|computer|compare|company|community|commbank|comcast|com|cologne|college|coffee|codes|coach|clubmed|club|cloud|clothing|clinique|clinic|click|cleaning|claims|cityeats|city|citic|citi|citadel|cisco|circle|cipriani|church|chrysler|chrome|christmas|chloe|chintai|cheap|chat|chase|charity|channel|chanel|cfd|cfa|cern|ceo|center|ceb|cbs|cbre|cbn|cba|catholic|catering|cat|casino|cash|caseih|case|casa|cartier|cars|careers|career|care|cards|caravan|car|capitalone|capital|capetown|canon|cancerresearch|camp|camera|cam|calvinklein|call|cal|cafe|cab|bzh|buzz|buy|business|builders|build|bugatti|budapest|brussels|brother|broker|broadway|bridgestone|bradesco|box|boutique|bot|boston|bostik|bosch|boots|booking|book|boo|bond|bom|bofa|boehringer|boats|bnpparibas|bnl|bmw|bms|blue|bloomberg|blog|blockbuster|blanco|blackfriday|black|biz|bio|bingo|bing|bike|bid|bible|bharti|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|bcn|bcg|bbva|bbt|bbc|bayern|bauhaus|basketball|baseball|bargains|barefoot|barclays|barclaycard|barcelona|bar|bank|band|bananarepublic|banamex|baidu|baby|azure|axa|aws|avianca|autos|auto|author|auspost|audio|audible|audi|auction|attorney|athleta|associates|asia|asda|arte|art|arpa|army|archi|aramco|arab|aquarelle|apple|app|apartments|aol|anz|anquan|android|analytics|amsterdam|amica|amfam|amex|americanfamily|americanexpress|amazon|alstom|alsace|ally|allstate|allfinanz|alipay|alibaba|alfaromeo|akdn|airtel|airforce|airbus|aigo|aig|agency|agakhan|africa|afl|afamilycompany|aetna|aero|aeg|adult|ads|adac|actor|active|aco|accountants|accountant|accenture|academy|abudhabi|abogado|able|abc|abbvie|abbott|abb|abarth|aarp|aaa|onion)(?=[^0-9a-zA-Z@+-]|$))",
                ),
                t = /(?:xn--[\-0-9a-z]+)/,
                i = (0, n.Z)(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi, { latinAccentChars: r.Z, validGTLD: s, validCCTLD: l, validPunycode: t }),
                c = {
                    toAscii: (e) => {
                        if ("xn--" === e.substring(0, 4) && !e.match(i)) return;
                        const u = e.split(".");
                        for (const e of u) {
                            const u = d.ZP.toASCII(e);
                            if (u.length < 1 || u.length > 63) return;
                        }
                        return u.join(".");
                    },
                },
                o = /\u202A-\u202E\u061C\u200E\u200F\u2066\u2067\u2068\u2069/,
                f = /\uFFFE\uFFFF/;
            var b = a(26883),
                g = a(721280);
            const m = (0, n.Z)("#{punct}#{spacesGroup}#{invalidCharsGroup}#{directionalMarkersGroup}", { punct: b.Z, spacesGroup: g.Z, invalidCharsGroup: f, directionalMarkersGroup: o }),
                h = (0, n.Z)(/[^#{invalidDomainChars}]/, { invalidDomainChars: m }),
                p = (0, n.Z)(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/, { validDomainChars: h }),
                y = (0, n.Z)(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/, { validDomainChars: h }),
                k = (0, n.Z)(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/, { validDomainName: p, validSubdomain: y, validGTLD: s, validCCTLD: l, validPunycode: t }),
                v = /[0-9]+/,
                w = /\u0400-\u04FF/,
                x = (0, n.Z)(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-\u2013_~@\|&#{latinAccentChars}]/i, { cyrillicLettersAndMarks: w, latinAccentChars: r.Z }),
                _ = (0, n.Z)("\\((?:#{validGeneralUrlPathChars}+|(?:#{validGeneralUrlPathChars}*\\(#{validGeneralUrlPathChars}+\\)#{validGeneralUrlPathChars}*))\\)", { validGeneralUrlPathChars: x }, "i"),
                F = (0, n.Z)(/[\+\-a-z#{cyrillicLettersAndMarks}0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i, { cyrillicLettersAndMarks: w, latinAccentChars: r.Z, validUrlBalancedParens: _ }),
                C = (0, n.Z)("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", { validGeneralUrlPathChars: x, validUrlBalancedParens: _, validUrlPathEndingChars: F }, "i"),
                A = (0, n.Z)(/(?:[^A-Za-z0-9@＠$#＃#{invalidCharsGroup}]|[#{directionalMarkersGroup}]|^)/, { invalidCharsGroup: f, directionalMarkersGroup: o }),
                S = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i,
                z = /[a-z0-9\-_&=#\/]/i,
                L = (0, n.Z)("((#{validUrlPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", { validUrlPrecedingChars: A, validDomain: k, validPortNumber: v, validUrlPath: C, validUrlQueryChars: S, validUrlQueryEndingChars: z }, "gi"),
                j = /[-_.\/]$/,
                U = (0, n.Z)(/^https?:\/\/t\.co\/([a-z0-9]+)(?:\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?/, { validUrlQueryChars: S, validUrlQueryEndingChars: z }, "i"),
                Z = { extractUrlsWithoutProtocol: !0 },
                T = (e, u, a) => {
                    let d = e.length;
                    const n = c.toAscii(a);
                    return !(!n || !n.length) && ((d = d + n.length - a.length), u.length + d <= 4096);
                },
                P = (e, u = Z) => {
                    if (!e || (u.extractUrlsWithoutProtocol ? !e.match(/\./) : !e.match(/:/))) return [];
                    const a = [];
                    for (; L.exec(e); ) {
                        const e = RegExp.$2;
                        let d = RegExp.$3;
                        const n = RegExp.$4,
                            r = RegExp.$5,
                            l = RegExp.$7;
                        let s = L.lastIndex;
                        const t = s - d.length;
                        if (T(d, n || "https://", r))
                            if (n) {
                                if (d.match(U)) {
                                    const e = RegExp.$1;
                                    if (e && e.length > 40) continue;
                                    (d = RegExp.lastMatch), (s = t + d.length);
                                }
                                a.push({ url: d, indices: [t, s] });
                            } else {
                                if (!u.extractUrlsWithoutProtocol || e.match(j)) continue;
                                let n = null,
                                    c = 0;
                                if (
                                    (r.replace(i, (e) => {
                                        const u = r.indexOf(e, c);
                                        return (c = u + e.length), (n = { url: e, indices: [t + u, t + c] }), a.push(n), "";
                                    }),
                                    null === n)
                                )
                                    continue;
                                l && ((n.url = d.replace(r, n.url)), (n.indices[1] = s));
                            }
                    }
                    return a;
                };
        },
        381973: (e, u, a) => {
            function d(e, u, a) {
                let d = a || "";
                const n = "string" == typeof e ? e : e.source;
                return (
                    "string" != typeof e && (e.global && d.indexOf("g") < 0 && (d += "g"), e.ignoreCase && d.indexOf("i") < 0 && (d += "i"), e.multiline && d.indexOf("m") < 0 && (d += "m")),
                    new RegExp(
                        n.replace(/#\{(\w+)\}/g, (e, a) => {
                            let d = u[a] || "";
                            return "string" != typeof d && (d = d.source), d;
                        }),
                        d,
                    )
                );
            }
            a.d(u, { Z: () => d });
        },
        579771: (e, u, a) => {
            a.d(u, { Z: () => d });
            const d = /\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF/;
        },
        26883: (e, u, a) => {
            a.d(u, { Z: () => d });
            const d = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;
        },
        721280: (e, u, a) => {
            a.d(u, { Z: () => d });
            const d = /\x09-\x0D\x20\x85\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000/;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-c61353b6.bb3473ba.js.map
