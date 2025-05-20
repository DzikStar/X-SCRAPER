"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-ad094e61"],
    {
        759746: (e, s, t) => {
            t.d(s, { M: () => o });
            var n = t(552322),
                a = t(789764),
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
                a = t(378364);
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
                v = t(196594);
            const h = a.com.x.dms.util;
            class p extends a.com.x.dms.util.EntityParser {
                doParse(e) {
                    return a.kotlin.collections.KtList.fromJsArray([...(0, d.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Email(...e)), ...(0, m.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Hashtag(...e)), ...(0, u.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Cashtag(...e)), ...(0, x.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Mention(...e)), ...(0, v.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Url(...e))]);
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
            t.d(s, { p: () => I });
            var n = t(552322),
                a = t(727071),
                r = t(159603),
                i = t(439252),
                o = t(447742),
                l = t(332161),
                c = t(193686),
                d = t(993165),
                m = t(687521),
                u = t(174254),
                x = t(984713),
                v = t(533476),
                h = t(455091),
                p = t(788452);
            function f() {
                const { t: e } = (0, h.$G)();
                return (0, n.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(p.Z, { className: "rotate-[-8.29deg]" }) }), (0, n.jsx)(l.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, n.jsx)(l.x, { color: "gray700", children: e("Message someone") })] });
            }
            var g = t(264531),
                w = t(897995),
                j = t(334038);
            const y = ({ connectionState: e }) => {
                const s = ((e) => {
                    switch (e) {
                        case r.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            return "Connecting";
                        case r.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            return "Closed";
                        case r.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            return "Blocked update your app";
                    }
                    return "";
                })(e);
                return s ? (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("div", { children: (0, n.jsx)(c.P, {}) }), (0, n.jsx)(l.x, { weight: "medium", children: s })] }) : null;
            };
            var b = t(476865);
            function N({ value: e, children: s, href: t }) {
                const a = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    r = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-[15px] leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-primary/10 data-[state=active]:hover:bg-primary/15 data-[state=active]:active:bg-primary/15 data-[state=active]:text-primary data-[state=active]:font-[500] data-[state=active]:shadow-none";
                return t ? (0, n.jsx)(b.SP, { asChild: !0, value: e, children: (0, n.jsx)("a", { href: t, rel: "noopener noreferrer", className: `${a} ${r}`, children: s }) }) : (0, n.jsx)(b.SP, { value: e, className: `${a} ${r}`, children: s });
            }
            function C({ value: e, className: s, ...t }) {
                const { t: a } = (0, h.$G)();
                return (0, n.jsx)(b.mQ, { value: e, className: s, ...t, children: (0, n.jsxs)(b.dr, { className: "bg-transparent p-0 gap-3", children: [(0, n.jsx)(N, { value: "all", children: "All" }), (0, n.jsx)(N, { value: "unencrypted", href: "https://x.com/messages", children: a("Classic Inbox") })] }) });
            }
            const S = r.com.x.dms.convlist,
                _ = r.com.x.dms.InboxBottomDialog;
            function z({ component: e, setShowNewDM: s, showNewDM: t }) {
                const { t: a } = (0, h.$G)(),
                    r = (0, v._)(e.state),
                    p = r.searchQuery.length > 0,
                    b = p ? r.conversationResults.asJsReadonlyArrayView() : r.previews?.asJsReadonlyArrayView(),
                    { showDebugOptions: N } = (0, g.XE)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex flex-col h-screen border-r relative w-full",
                            children: [
                                (0, n.jsxs)("header", {
                                    className: "flex flex-col",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "flex items-center justify-between py-2 px-4 h-16",
                                            children: [
                                                (0, n.jsx)(l.x, { weight: "bold", size: "headline1", children: a("Chats") }),
                                                r.showConnectionIndicator && (0, n.jsx)(y, { connectionState: r.showConnectionIndicator }),
                                                (0, n.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        r.isLoadingConversations && (0, n.jsx)("div", { className: "w-5", children: (0, n.jsx)(c.P, { size: "small" }) }),
                                                        N && (0, n.jsx)(j.Z, {}),
                                                        (0, n.jsx)(d.z, {
                                                            className: "-mr-2",
                                                            icon: (0, n.jsx)(i.Z, { className: "h-5 w-5" }),
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(S.ConversationListEvent.FloatingActionButtonClicked);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "px-4 py-1",
                                            children: (0, n.jsx)(m._, {
                                                placeholder: "Search",
                                                value: r.searchQuery ?? "",
                                                onChange: (s) => {
                                                    e.onEvent(new S.ConversationListEvent.SearchQueryChanged(s.target.value));
                                                },
                                                borderRadius: "xLarge",
                                                className: "bg-gray-0 focus-within:bg-transparent",
                                                inputClassName: "placeholder:text-gray-700",
                                                leftContent: (0, n.jsx)(o.Z, { className: "h-5 w-5 text-gray-700" }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: "py-3 px-4", children: (0, n.jsx)(C, { value: "all" }) }),
                                b && b.length > 0 ? (0, n.jsx)(u.p, { conversations: b, onEvent: (s) => e.onEvent(s), isSearch: p }) : !p && (0, n.jsx)(f, {}),
                                r.showBottomDialog instanceof _.PinReminder && (0, n.jsx)(w.Y, { component: e, dialogParams: r.showBottomDialog.params }),
                            ],
                        }),
                        t && (0, n.jsx)(x.x, { onVisibilityChange: s }),
                    ],
                });
            }
            var D = t(292317),
                E = t(202784),
                L = t(611463),
                P = t(379342),
                k = t(607499);
            const I = () => {
                    const [e, s] = (0, E.useState)(null),
                        t = (0, L.n)(),
                        a = (0, P.s)(),
                        [i, o] = (0, E.useState)(!1);
                    return (
                        (0, E.useEffect)(() => {
                            const e = new r.com.x.export.CancellationSignal(),
                                n = t.conversationListComponent(
                                    new r.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? a.toPinScreen("recovery") : a.toPinScreen("new");
                                        },
                                        (e) => {
                                            a.toConversation(e.id);
                                        },
                                        () => {
                                            o(!0);
                                        },
                                        () => {},
                                        (e) => {
                                            a.toPinScreen("verify", e);
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
                        }, [t, a]),
                        null === e ? (0, n.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, n.jsx)(c.P, {}) }) : (0, n.jsx)(k.S, { children: (0, n.jsx)(U, { component: e, setShowNewDM: o, showNewDM: i }) })
                    );
                },
                U = ({ component: e, setShowNewDM: s, showNewDM: t }) => {
                    const r = (0, a.U)().id,
                        i = void 0 === r || "" === r;
                    return (0, v._)(e.state).isInitializing ? (0, n.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, n.jsx)(c.P, {}) }) : (0, n.jsxs)("div", { className: "flex w-full", children: [(0, n.jsx)("div", { className: (i ? "block" : "hidden") + " md:block w-full md:w-[35%]", children: (0, n.jsx)(z, { component: e, setShowNewDM: s, showNewDM: t }) }), (0, n.jsx)("div", { className: (i ? "hidden" : "block") + " md:block w-full md:w-[65%]", children: (0, n.jsx)(D.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-ad094e61.2fb1597a.js.map
