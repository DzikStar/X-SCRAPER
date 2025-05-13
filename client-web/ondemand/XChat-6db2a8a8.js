"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-6db2a8a8"],
    {
        176453: (e, l, a) => {
            a.d(l, { N: () => s });
            var n = a(552322),
                r = a(125550),
                t = a(139802);
            const s = ({ groupId: e, token: l, settings: a }) => (e && l ? (0, n.jsx)(t.A, { settings: a, children: (0, n.jsx)(r.M, { groupId: e, token: l }) }) : null);
        },
        700931: (e, l, a) => {
            a.d(l, { H: () => s });
            var n = a(552322),
                r = a(139802),
                t = a(331362);
            const s = ({ settings: e }) => (0, n.jsx)(r.A, { settings: e, children: (0, n.jsx)(t.p, {}) });
        },
        139802: (e, l, a) => {
            a.d(l, { A: () => p });
            var n = a(552322),
                r = a(668781),
                t = a(202784),
                s = a(107267),
                i = a(607499),
                o = a(968025),
                u = a(727071),
                c = a(768246),
                d = a(264531),
                g = a(611463),
                m = a(455091),
                y = a(446368);
            const p = ({ children: e, settings: l }) => {
                const a = (0, s.useLocation)(),
                    p = (0, s.useHistory)(),
                    [f, h] = (0, t.useState)(new URLSearchParams(a.search)),
                    _ = (0, s.useParams)(),
                    { t: k } = (0, m.$G)();
                (0, t.useEffect)(() => {
                    h(new URLSearchParams(a.search));
                }, [a.search]);
                const b = (0, t.useMemo)(() => ({ push: (e, l) => p.push(e, l) }), [p]);
                return (0, n.jsx)(i.S, { message: k("Something went wrong while loading Chat. Please try again later."), children: (0, n.jsx)(o.p, { router: b, children: (0, n.jsx)(y.ng, { children: (0, n.jsx)(u.d, { useParams: () => _, children: (0, n.jsx)(c.x, { searchParams: f, children: (0, n.jsx)(d.mp, { settings: l, children: (0, n.jsxs)(g.U, { children: [e, (0, n.jsx)(r.x, {})] }) }) }) }) }) }) });
            };
        },
        954713: (e, l, a) => {
            a.d(l, { x: () => i });
            var n = a(552322),
                r = a(139802),
                t = a(922150);
            const s = ["recovery", "new", "forgot", "verify"],
                i = ({ mode: e, shouldRegister: l, shouldGenerate: a, settings: i }) => (s.includes(e) ? (0, n.jsx)(r.A, { settings: i, children: (0, n.jsx)(t.G, { mode: e, shouldRegister: l, shouldGenerate: a }) }) : null);
        },
        524098: (e, l, a) => {
            a.d(l, { F: () => i });
            var n = a(552322),
                r = a(718278),
                t = a(664147),
                s = a(549862);
            function i() {
                return (0, n.jsx)("div", { className: "bg-background text-text rounded-full shadow-lg border px-3 py-1.5 flex items-center gap-3 z-50", children: (0, n.jsxs)("div", { className: "flex items-center gap-1.5", children: [(0, n.jsx)(s.J, {}), (0, n.jsx)(t.i, {}), (0, n.jsx)(r.o, {})] }) });
            }
        },
        664147: (e, l, a) => {
            a.d(l, { e: () => i, i: () => o });
            var n = a(552322),
                r = a(941204),
                t = a(849335),
                s = a(202784);
            const i = "top_cursor",
                o = () => {
                    const [e, l] = (0, s.useState)("true" === localStorage.getItem(i) || !1);
                    return (0, n.jsxs)("div", {
                        className: "flex flex-row items-center gap-1 border border-solid rounded-lg p-2",
                        children: [
                            (0, n.jsx)(r.x, { weight: "bold", color: "gray700", children: "Top cursor" }),
                            (0, n.jsx)(t.r, {
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
                            args: (t = [
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
                                        (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                (o = {
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
                                                (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                operation: { argumentDefinitions: r, kind: "Operation", name: "fetchPostQuery", selections: [{ alias: null, args: t, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [o, u, c, { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [c, d, g, m, y, u], type: "User", abstractKey: null }], storageKey: null }, u], storageKey: null }], storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }, u], storageKey: null }] },
                params: { id: "BrdmgaNbXWZa4D4KLY-hCA", metadata: {}, name: "fetchPostQuery", operationKind: "query", text: null },
            };
            var r, t, s, i, o, u, c, d, g, m, y;
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
        842898: (e, l, a) => {
            a.d(l, { S: () => r });
            var n = a(889906);
            async function r(e, l) {
                return (0, n.fetchQuery)(l, t, { id: e }, { fetchPolicy: "store-or-network" })
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
            const t = a(686524);
        },
        336984: (e, l, a) => {
            a.d(l, { r: () => t });
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
                t = (e) => {
                    if (!e) return;
                    return { affiliation: e.userLabel?.shouldDisplayBadge() && e.userLabel.description && e.userLabel.badgeImageUrl ? { label: e.userLabel.description, url: e.userLabel.badgeImageUrl } : void 0, isProtected: e.isProtected, isSubscriber: e.friendship.isSuperFollowingMe, verifiedType: r(e.verifiedType) };
                };
        },
        173399: (e, l, a) => {
            a.d(l, { O: () => t });
            var n = a(84504);
            const r = "xchat";
            async function t() {
                const e = (0, n.n5)();
                await (async function (e) {
                    try {
                        const l = await navigator.storage.getDirectory();
                        await l.removeEntry(`dm-files-${e}`, { recursive: !0 });
                    } catch (e) {
                        e instanceof DOMException && e.name;
                    }
                })(e),
                    await (async function () {
                        return new Promise((e, l) => {
                            const a = setTimeout(() => {
                                    l(new Error("Database deletion timeout"));
                                }, 5e3),
                                n = new BroadcastChannel(r);
                            (n.onmessage = ({ data: l }) => {
                                "before_logout_done" === l?.action && (clearTimeout(a), n.close(), e());
                            }),
                                n.postMessage({ action: "before_logout" });
                        });
                    })();
            }
        },
        167285: (e, l, a) => {
            a.d(l, { H: () => c, S: () => u });
            const n = 3600,
                r = 86400,
                t = 604800,
                s = 2592e3,
                i = { minute: { narrow: "m", long: "minute" }, hour: { narrow: "h", long: "hour" }, day: { narrow: "d", long: "day" }, week: { narrow: "w", long: "week" }, month: { narrow: "mo", long: "month" } },
                o = (e, l, a) => {
                    switch (a) {
                        case "narrow":
                            return i[l][a];
                        case "long": {
                            const n = 1 !== e;
                            return ` ${i[l][a]}${n ? "s" : ""}`;
                        }
                    }
                },
                u = ({ diffSeconds: e, epochSeconds: l, style: a }) => {
                    if (e < 60) return "Now";
                    if (e < n) {
                        const l = Math.floor(e / 60);
                        return `${l}${o(l, "minute", a)}`;
                    }
                    if (e < r) {
                        const l = Math.floor(e / n);
                        return `${l}${o(l, "hour", a)}`;
                    }
                    if (e < t) {
                        const l = Math.floor(e / r);
                        return `${l}${o(l, "day", a)}`;
                    }
                    if (e < s) {
                        const l = Math.floor(e / t);
                        return `${l}${o(l, "week", a)}`;
                    }
                    if (!l || e < 31536e3) {
                        const l = Math.floor(e / s);
                        return `${l}${o(l, "month", a)}`;
                    }
                    return new Date(1e3 * l).toLocaleDateString("en-US");
                },
                c = (e) => new Date(1e3 * e).toLocaleString("en-US", { timeStyle: "short" });
        },
        369962: (e, l, a) => {
            a.d(l, { L: () => n });
            const n = (e) => {
                const l = Math.floor(e / 1e3),
                    a = Math.floor(l / 60),
                    n = Math.floor(a / 60),
                    r = Math.floor(n / 24),
                    t = Math.floor(r / 7),
                    s = (e, l) => `${e} ${l}${1 !== e ? "s" : ""}`;
                return t > 0 ? s(t, "week") : r > 0 ? s(r, "day") : n > 0 ? s(n, "hour") : a > 0 ? s(a, "minute") : s(l, "second");
            };
        },
        595117: (e, l, a) => {
            a.d(l, { $: () => t });
            const n = "temp-files";
            async function r(e) {
                const l = await navigator.storage.getDirectory(),
                    a = await l.getDirectoryHandle(n, { create: !0 }),
                    r = (function (e) {
                        return `${Date.now()}-${e}`;
                    })(e.name),
                    t = await a.getFileHandle(r, { create: !0 }),
                    s = await t.createWritable();
                return await s.write(e), await s.close(), `${n}/${r}`;
            }
            async function t(e, l, a) {
                try {
                    l();
                    a(await r(e));
                } catch (e) {}
            }
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
        748055: (e, l, a) => {
            a.d(l, { F: () => t });
            var n = a(202784),
                r = a(595117);
            function t({ onFileDrop: e, onFileAttached: l, isEnabled: a }) {
                const [t, s] = (0, n.useState)(!1);
                return {
                    isDragging: t,
                    handleDragOver: (0, n.useCallback)(
                        (e) => {
                            e.preventDefault(), e.stopPropagation(), a && s(!0);
                        },
                        [a],
                    ),
                    handleDragLeave: (0, n.useCallback)((e) => {
                        e.preventDefault(), e.stopPropagation(), s(!1);
                    }, []),
                    handleDrop: (0, n.useCallback)(
                        async (n) => {
                            if ((n.preventDefault(), n.stopPropagation(), s(!1), !a)) return;
                            const t = n.dataTransfer.files[0];
                            t && (await (0, r.$)(t, e, l));
                        },
                        [a, e, l],
                    ),
                };
            }
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
            a.d(l, { e: () => d });
            var n = a(425522),
                r = a(256958),
                t = a(202784);
            const s = n.com.x.dms.composer.composer.ComposerToastType,
                i = n.com.x.dms.convinfo.ConversationInfoToast,
                o = n.com.x.dms.ParticipantMenuItem,
                u = n.com.x.dms.newdm.NewDmToast,
                c = n.com.x.dms.addparticipants.AddGroupParticipantsToastType;
            function d(e) {
                (0, t.useEffect)(() => {
                    const l = e.subscribe((e) => {
                        const l = (function (e) {
                            switch (e) {
                                case s.ATTACHMENT_FAILED:
                                    return "Unable to load attachment";
                                case s.EDIT_MESSAGE_FAILED:
                                    return "Edit failed. Please try again later.";
                                case i.ResignAdminFailed:
                                    return "Unable to resign as Admin";
                                case i.DeleteConversationFailed:
                                    return "Unable to delete conversation";
                                case i.LeaveGroupFailed:
                                    return "Unable to leave conversation";
                                case u.FetchError:
                                    return "An error occurred";
                                case u.CreateGroupFailed:
                                    return "Unable to create group";
                                case u.CreateOneOnOneFailed:
                                    return "Unable to start conversation.";
                            }
                            if (e instanceof n.com.x.dms.convinfo.ConversationInfoToast.ParticipantMenuItemFailed)
                                switch (e.item) {
                                    case o.AddAsAdmin:
                                        return "Unable to add user as Admin";
                                    case o.RemoveAsAdmin:
                                        return "Unable to remove user as Admin";
                                    case o.RemoveFromGroup:
                                        return "Unable to remove user from group";
                                }
                            if (e instanceof c)
                                switch (e.name) {
                                    case "ADD_PARTICIPANTS_FAILURE":
                                        return "Unable to add user";
                                    case "SEARCH_FAILURE":
                                        return "Something went wrong while searching";
                                    case "TOO_MANY_MEMBERS":
                                        return "Unable to add user. Too many members";
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-6db2a8a8.f84be08a.js.map
