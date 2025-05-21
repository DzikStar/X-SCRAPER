"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-ad094e61"],
    {
        759746: (e, s, t) => {
            t.d(s, { M: () => o });
            var n = t(552322),
                a = t(475694),
                r = t(350311);
            const i = ({ firstUrl: e, resolution: s, secondUrl: t, size: a = "xxLarge" }) => {
                    const i = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "33.33%";
                                case "xxLarge":
                                    return "16px";
                                default:
                                    return "8px";
                            }
                        })(a),
                        o = ((e) => ("fill" === e ? "2%" : "1px"))(a),
                        l = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "fill";
                                case "xxLarge":
                                    return "large";
                                default:
                                    return "medium";
                            }
                        })(a);
                    return (0, n.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${i} - ${o} * 2)` }, children: [(0, n.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: o }, children: (0, n.jsx)(r.s, { url: e, size: l, resolution: s }) }), (0, n.jsx)("div", { style: { marginLeft: `calc(-${i} - ${o} * 2)`, marginTop: `calc(-${i} + ${o} * 2)`, marginBottom: i }, children: (0, n.jsx)(r.s, { url: t, size: l, resolution: s }) })] });
                },
                o = ({ avatarSize: e, isInlineFacepile: s, resolution: t, users: o }) => {
                    const l = ((e) => {
                        switch (e) {
                            case "fill":
                            case "xxLarge":
                            case "large":
                                return e;
                            default:
                                return "large";
                        }
                    })(e);
                    if (s) {
                        if (o.length >= 2) return (0, n.jsx)(i, { size: l, firstUrl: o[0]?.profileImageUrl, resolution: t, secondUrl: o[1]?.profileImageUrl });
                        if (1 === o.length) return (0, n.jsx)(r.s, { url: o[0]?.profileImageUrl, size: e, resolution: t });
                    }
                    const c = o.slice(0, 3).map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return (0, n.jsx)(a.o, { urls: c, size: e, resolution: t, stackOrder: "overlap" });
                };
        },
        32161: (e, s, t) => {
            t.d(s, { x: () => l });
            var n = t(552322),
                a = t(159603),
                r = t(350311);
            const i = ({ avatar: e, avatarSize: s, onCustomAvatarNeedsResolving: t }) => (e instanceof a.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, n.jsx)(r.s, { url: e.uri, size: s }) : (e instanceof a.com.x.dms.model.MediaUriState.AvatarNeedsResolving && t(e), (0, n.jsx)(r.s, { size: s })));
            var o = t(759746);
            const l = ({ avatarSize: e, isInlineFacepile: s, onCustomAvatarNeedsResolving: t, titleState: l }) => {
                if (l instanceof a.com.x.dms.model.DmTitleState.OneToOne) return (0, n.jsx)(r.s, { url: l.otherUser?.profileImageUrl, size: e });
                if (l instanceof a.com.x.dms.model.DmTitleState.Group) {
                    if (l.avatarType instanceof a.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, n.jsx)(i, { avatar: l.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: t });
                    if (l.avatarType instanceof a.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, n.jsx)(o.M, { avatarSize: e, isInlineFacepile: s, users: l.avatarType.users.asJsReadonlyArrayView() });
                }
                return (0, n.jsx)(r.s, { size: e });
            };
        },
        350311: (e, s, t) => {
            t.d(s, { j: () => r, s: () => i });
            var n = t(552322),
                a = t(26429);
            const r = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                i = ({ url: e, size: s, resolution: t = "200x200" }) => (0, n.jsx)(a.q, { url: e || r, size: s, resolution: t });
        },
        611463: (e, s, t) => {
            t.d(s, { U: () => z, n: () => S });
            var n = t(552322),
                a = t(159603),
                r = t(202784),
                i = t(781441),
                o = t(84504),
                l = t(664147);
            class c {
                url;
                options;
                constructor(e, s) {
                    (this.url = new URL(e.href.replace("https://abs.twimg.com", "https://x.com/i/static"))), (this.options = s);
                }
                createWorker() {
                    return new Worker(this.url, this.options);
                }
            }
            var d = t(8974),
                m = t(303676),
                u = t(928220),
                x = t(879922),
                h = t(196594);
            const v = a.com.x.dms.util;
            class p extends a.com.x.dms.util.EntityParser {
                doParse(e) {
                    return a.kotlin.collections.KtList.fromJsArray([...(0, d.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Email(...e)), ...(0, m.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Hashtag(...e)), ...(0, u.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Cashtag(...e)), ...(0, x.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Mention(...e)), ...(0, h.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Url(...e))]);
                }
            }
            var f = t(842898),
                g = t(889906),
                w = t(446368),
                j = t(264531);
            const y = a.kotlin.collections.KtList,
                b = (0, r.createContext)(void 0),
                N = "undefined" == typeof window;
            let C;
            function S() {
                const e = (0, r.useContext)(b);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function _(e, s, n) {
                const r = "true" === localStorage.getItem(l.e) || !1,
                    d = (0, o.n5)();
                const m = (function () {
                    const e = new c(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), t.b), { type: void 0 }).createWorker();
                    return (e.onerror = (e) => {}), e;
                })();
                m.postMessage({ action: "init_db", dbName: `${(0, o.n5)()}_chat`, id: "init_1" });
                const u = (function (e) {
                    return "DEBUG" === e ? a.com.x.dms.LogLevel.DEBUG : "INFO" === e ? a.com.x.dms.LogLevel.INFO : a.com.x.dms.LogLevel.ERROR;
                })(n);
                return new a.com.x.dms.WebDmObjectGraph(
                    a.com.x.models.UserIdentifier.ofString(d),
                    m,
                    i._,
                    (s, t) => {
                        (0, f.S)(s.value.toString(), e).then((e) => {
                            if (!e) return void t(new a.com.x.dms.LoadPostResult.OtherFailure());
                            const s = new a.com.x.dms.LoadPostResult.Success(e);
                            t(s);
                        });
                    },
                    async function () {
                        return y.fromJsArray([]);
                    },
                    (e, t, n, a, r) => {
                        s.scribe({ client: "m5", page: e ?? void 0, section: t ?? void 0, component: n ?? void 0, element: a ?? void 0, action: r ?? void 0 });
                    },
                    new a.com.x.dms.WebOptions(!1, !0, !1, u),
                    r,
                    new p(),
                );
            }
            function z({ children: e }) {
                if (N) return;
                const s = (0, g.useRelayEnvironment)(),
                    t = (0, w.z$)(),
                    a = (0, j.xq)();
                return C || (C = _(s, t, a)), (0, n.jsx)(b.Provider, { value: C, children: e });
            }
        },
        92184: (e, s, t) => {
            t.d(s, { p: () => U });
            var n = t(552322),
                a = t(159603),
                r = t(702024),
                i = t(202784),
                o = t(607499),
                l = t(727071),
                c = t(292317),
                d = t(611463),
                m = t(615868),
                u = t(503371),
                x = t(941204),
                h = t(436059),
                v = t(887390),
                p = t(174254),
                f = t(984713),
                g = t(533476),
                w = t(455091),
                j = t(125718);
            function y() {
                const { t: e } = (0, w.$G)();
                return (0, n.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(j.Z, { className: "rotate-[-8.29deg]" }) }), (0, n.jsx)(x.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, n.jsx)(x.x, { color: "gray700", children: e("Message someone") })] });
            }
            var b = t(264531),
                N = t(897995),
                C = t(334038);
            const S = ({ connectionState: e }) => {
                const s = ((e) => {
                    switch (e) {
                        case a.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            return "Connecting";
                        case a.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            return "Closed";
                        case a.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            return "Blocked update your app";
                    }
                    return "";
                })(e);
                return s ? (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("div", { children: (0, n.jsx)(r.P, {}) }), (0, n.jsx)(x.x, { weight: "medium", children: s })] }) : null;
            };
            var _ = t(671889),
                z = t(816778);
            function D({ value: e, children: s, href: t }) {
                const a = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    r = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-[15px] leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-primary/10 data-[state=active]:hover:bg-primary/15 data-[state=active]:active:bg-primary/15 data-[state=active]:text-primary data-[state=active]:font-[500] data-[state=active]:shadow-none";
                return t ? (0, n.jsx)(z.SP, { asChild: !0, value: e, children: (0, n.jsx)("a", { href: t, rel: "noopener noreferrer", className: `${a} ${r}`, children: s }) }) : (0, n.jsx)(z.SP, { value: e, className: `${a} ${r}`, children: s });
            }
            function E({ value: e, className: s, ...t }) {
                const { t: a } = (0, w.$G)();
                return (0, n.jsx)(z.mQ, { value: e, className: s, ...t, children: (0, n.jsxs)(z.dr, { className: "bg-transparent p-0 gap-3", children: [(0, n.jsx)(D, { value: "all", children: "All" }), (0, n.jsx)(D, { value: "unencrypted", href: "https://x.com/messages", children: a("Classic Inbox") })] }) });
            }
            const L = a.com.x.dms.convlist,
                P = a.com.x.dms.InboxBottomDialog;
            function k({ component: e, setShowNewDM: s, showNewDM: t }) {
                const { t: a } = (0, w.$G)(),
                    i = (0, g._)(e.state),
                    o = i.searchQuery.length > 0,
                    l = o ? i.conversationResults.asJsReadonlyArrayView() : i.previews?.asJsReadonlyArrayView(),
                    { showDebugOptions: c } = (0, b.XE)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(_.g, {
                            className: "flex flex-col min-h-dvh md:h-dvh border-r relative w-full",
                            children: [
                                (0, n.jsxs)("header", {
                                    className: "flex flex-col",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "flex items-center justify-between py-2 px-4 h-16",
                                            children: [
                                                (0, n.jsx)(x.x, { weight: "bold", size: "headline1", children: a("Chats") }),
                                                i.showConnectionIndicator && (0, n.jsx)(S, { connectionState: i.showConnectionIndicator }),
                                                (0, n.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        i.isLoadingConversations && (0, n.jsx)("div", { className: "w-5", children: (0, n.jsx)(r.P, { size: "small" }) }),
                                                        c && (0, n.jsx)(C.Z, {}),
                                                        (0, n.jsx)(h.z, {
                                                            className: "-mr-2",
                                                            icon: (0, n.jsx)(m.Z, { className: "h-5 w-5" }),
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(L.ConversationListEvent.FloatingActionButtonClicked);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "px-4 py-1",
                                            children: (0, n.jsx)(v._, {
                                                placeholder: "Search",
                                                value: i.searchQuery ?? "",
                                                onChange: (s) => {
                                                    e.onEvent(new L.ConversationListEvent.SearchQueryChanged(s.target.value));
                                                },
                                                borderRadius: "xLarge",
                                                className: "bg-gray-0 focus-within:bg-transparent",
                                                inputClassName: "placeholder:text-gray-700",
                                                leftContent: (0, n.jsx)(u.Z, { className: "h-5 w-5 text-gray-700" }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: "py-3 px-4", children: (0, n.jsx)(E, { value: "all" }) }),
                                l && l.length > 0 ? (0, n.jsx)(p.p, { conversations: l, onEvent: (s) => e.onEvent(s), isSearch: o }) : !o && (0, n.jsx)(y, {}),
                                i.showBottomDialog instanceof P.PinReminder && (0, n.jsx)(N.Y, { component: e, dialogParams: i.showBottomDialog.params }),
                            ],
                        }),
                        t && (0, n.jsx)(f.x, { onVisibilityChange: s }),
                    ],
                });
            }
            var I = t(379342);
            const U = () => {
                    const [e, s] = (0, i.useState)(null),
                        t = (0, d.n)(),
                        l = (0, I.s)(),
                        [c, m] = (0, i.useState)(!1);
                    return (
                        (0, i.useEffect)(() => {
                            const e = new a.com.x.export.CancellationSignal(),
                                n = t.conversationListComponent(
                                    new a.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? l.toPinScreen("recovery") : l.toPinScreen("new");
                                        },
                                        (e) => {
                                            l.toConversation(e.id);
                                        },
                                        () => {
                                            m(!0);
                                        },
                                        () => {},
                                        (e) => {
                                            l.toPinScreen("verify", e);
                                        },
                                        () => {},
                                        () => {},
                                    ),
                                    e,
                                );
                            return (
                                s(n),
                                () => {
                                    e.cancel();
                                }
                            );
                        }, [t, l]),
                        null === e ? (0, n.jsx)(_.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh  w-full", children: (0, n.jsx)(r.P, {}) }) : (0, n.jsx)(o.S, { children: (0, n.jsx)(R, { component: e, setShowNewDM: m, showNewDM: c }) })
                    );
                },
                R = ({ component: e, setShowNewDM: s, showNewDM: t }) => {
                    const a = (0, l.U)().id,
                        i = void 0 === a || "" === a;
                    return (0, g._)(e.state).isInitializing ? (0, n.jsx)(_.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh w-full", children: (0, n.jsx)(r.P, {}) }) : (0, n.jsxs)("div", { className: "flex min-h-dvh md:h-dvh w-full", children: [(0, n.jsx)("div", { className: (i ? "block" : "hidden") + " md:block w-full md:w-[35%]", children: (0, n.jsx)(k, { component: e, setShowNewDM: s, showNewDM: t }) }), (0, n.jsx)("div", { className: (i ? "hidden" : "block") + " md:block w-full md:w-[65%]", children: (0, n.jsx)(c.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-ad094e61.6923563a.js.map
