"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-97c99e35"],
    {
        155369: (e, s, t) => {
            t.d(s, { U: () => N, n: () => b });
            var n = t(552322),
                a = t(159603),
                o = t(202784),
                i = t(849170),
                r = t(84504),
                c = t(858108),
                l = t(664147);
            class d {
                url;
                options;
                constructor(e, s) {
                    (this.url = new URL(e.href.replace("https://abs.twimg.com", "https://x.com/i/static"))), (this.options = s);
                }
                createWorker() {
                    return new Worker(this.url, this.options);
                }
            }
            var x = t(346598),
                h = t(842898),
                m = t(446368),
                u = t(889906),
                v = t(264531);
            class w extends a.com.x.dms.WebXChatFeatureSwitches {}
            const p = a.kotlin.collections.KtList,
                g = (0, o.createContext)(void 0),
                f = "undefined" == typeof window;
            let j;
            function b() {
                const e = (0, o.useContext)(g);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function y(e, s, n, o) {
                const m = "true" === localStorage.getItem(l.e) || !1,
                    u = (0, r.n5)();
                return new a.com.x.dms.WebDmObjectGraph(
                    a.com.x.models.UserIdentifier.ofString(u),
                    o
                        ? (function () {
                              const e = new d(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_sqlite2_worker_js"), t.b), { type: void 0 }).createWorker();
                              (e.onerror = (e) => {}),
                                  window.addEventListener("xchat_database_backup_event", () => {
                                      e.postMessage({ action: "backup_db", userId: (0, r.n5)(), id: "backup_1" });
                                  }),
                                  window.addEventListener("xchat_before_unload_event", () => {
                                      e.postMessage({ action: "close", id: "close_1" });
                                  });
                              return async () =>
                                  new Promise((s, t) => {
                                      (e.onmessage = (n) => {
                                          const { data: a } = n;
                                          "init_1" === a.id && (a.error ? t(new Error(`Database initialization failed: ${a.error}`)) : s(e));
                                      }),
                                          e.postMessage({ action: "init_db", userId: (0, r.n5)(), id: "init_1" });
                                  });
                          })()
                        : (function () {
                              const e = new d(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), t.b), { type: void 0 }).createWorker();
                              return (e.onerror = (e) => {}), e.postMessage({ action: "init_db", dbName: `${(0, r.n5)()}_chat`, id: "init_1" }), () => new Promise((s) => s(e));
                          })(),
                    () => Promise.resolve(void 0),
                    !1,
                    i._i,
                    (s, t) => {
                        (0, h.S)(s.value.toString(), e).then((e) => {
                            if (!e) return void t(new a.com.x.dms.LoadPostResult.OtherFailure());
                            const s = new a.com.x.dms.LoadPostResult.Success(e);
                            t(s);
                        });
                    },
                    async function () {
                        return p.fromJsArray([]);
                    },
                    (e, t, n, a, o) => {
                        s.scribe({ client: "m5", page: e ?? void 0, section: t ?? void 0, component: n ?? void 0, element: a ?? void 0, action: o ?? void 0 });
                    },
                    new a.com.x.dms.WebOptions(_(v.B$.INFO), (0, c.G)() ? null : _(n), !1),
                    m,
                    new x.V(),
                    new w(),
                );
            }
            function _(e) {
                switch (e) {
                    case "DEBUG":
                    case "INFO":
                    case "ERROR":
                    case "WARN":
                        return a.com.x.dms.LogLevel[e];
                    default:
                        return e;
                }
            }
            function N({ children: e }) {
                if (f) return;
                const s = (0, u.useRelayEnvironment)(),
                    t = (0, m.z$)(),
                    a = (0, v.xq)(),
                    o = (0, v.rF)();
                return j || (j = y(s, t, a, o)), (0, n.jsx)(g.Provider, { value: j, children: e });
            }
        },
        92184: (e, s, t) => {
            t.d(s, { p: () => A });
            var n = t(552322),
                a = t(159603),
                o = t(193686),
                i = t(202784),
                r = t(134877),
                c = t(727071),
                l = t(633435),
                d = t(155369),
                x = t(439252),
                h = t(447742),
                m = t(332161),
                u = t(993165),
                v = t(687521),
                w = t(238750),
                p = t(984713),
                g = t(533476),
                f = t(455091),
                j = t(788452);
            function b() {
                const { t: e } = (0, f.$G)();
                return (0, n.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(j.Z, { className: "rotate-[-8.29deg]" }) }), (0, n.jsx)(m.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, n.jsx)(m.x, { color: "gray700", children: e("Message someone") })] });
            }
            var y = t(264531),
                _ = t(897995),
                N = t(18671),
                C = t(955504);
            const S = ({ connectionState: e }) => {
                const { connectionStateText: s, iconComponent: t } = ((e) => {
                    let s,
                        t = "";
                    switch (e) {
                        case a.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            (s = (0, n.jsx)(o.P, {})), (t = "Connecting");
                            break;
                        case a.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            (s = (0, n.jsx)(C.Z, { className: "text-red-500" })), (t = "Disconnected");
                            break;
                        case a.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            t = "Blocked update your app";
                    }
                    return { connectionStateText: t, iconComponent: s };
                })(e);
                return s ? (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [t && (0, n.jsx)("div", { children: t }), (0, n.jsx)(m.x, { weight: "medium", children: s })] }) : null;
            };
            var k = t(305399),
                D = t(910299),
                E = t(671889),
                P = t(322506),
                L = t(476865);
            function R({ value: e, children: s, href: t }) {
                const a = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    o = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-[15px] leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-primary/10 data-[state=active]:hover:bg-primary/15 data-[state=active]:active:bg-primary/15 data-[state=active]:text-primary data-[state=active]:font-[500] data-[state=active]:shadow-none";
                return t ? (0, n.jsx)(L.SP, { asChild: !0, value: e, children: (0, n.jsx)(P.r, { href: t, className: `${a} ${o}`, children: s }) }) : (0, n.jsx)(L.SP, { value: e, className: `${a} ${o}`, children: s });
            }
            function I({ value: e, className: s, ...t }) {
                const { t: a } = (0, f.$G)();
                return (0, n.jsx)(L.mQ, { value: e, className: s, ...t, children: (0, n.jsxs)(L.dr, { className: "bg-transparent p-0 gap-3", children: [(0, n.jsx)(R, { value: "all", children: "All" }), (0, n.jsx)(R, { value: "unencrypted", href: "https://x.com/messages", children: a("Classic Inbox") })] }) });
            }
            const M = a.com.x.dms.convlist,
                z = a.com.x.dms.InboxBottomDialog;
            function O({ component: e, setShowNewDM: s, showNewDM: t }) {
                const { t: a } = (0, f.$G)(),
                    i = (0, g._)(e.state),
                    r = i.searchQuery.length > 0,
                    c = (0, k.a)("(max-width: 768px)"),
                    l = r ? i.conversationResults.asJsReadonlyArrayView() : (i.previews?.asJsReadonlyArrayView() ?? []),
                    { showDebugOptions: d } = (0, y.XE)(),
                    j = i.messageResults?.asJsReadonlyArrayView() ?? [],
                    C = (0, y.tc)("dashMenuButton");
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(E.g, {
                            className: "flex flex-col min-h-dvh md:h-dvh border-r relative w-full",
                            children: [
                                (0, n.jsxs)("header", {
                                    className: "flex flex-col",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "flex items-center justify-between py-2 px-4 h-16",
                                            children: [
                                                (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [c && C, (0, n.jsx)(m.x, { weight: "bold", size: "headline1", children: a("Chats") })] }),
                                                i.showConnectionIndicator && (0, n.jsx)(S, { connectionState: i.showConnectionIndicator }),
                                                (0, n.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        i.isLoadingConversations && (0, n.jsx)("div", { className: "w-5", children: (0, n.jsx)(o.P, { size: "small" }) }),
                                                        d && (0, n.jsx)(N.Z, {}),
                                                        (0, n.jsx)(u.z, {
                                                            className: "-mr-2",
                                                            icon: (0, n.jsx)(x.Z, { className: "h-5 w-5" }),
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(M.ConversationListEvent.FloatingActionButtonClicked);
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
                                                    e.onEvent(new M.ConversationListEvent.SearchQueryChanged(s.target.value));
                                                },
                                                borderRadius: "xLarge",
                                                className: "bg-gray-0 focus-within:bg-transparent",
                                                inputClassName: "placeholder:text-gray-700",
                                                leftContent: (0, n.jsx)(h.Z, { className: "h-5 w-5 text-gray-700" }),
                                            }),
                                        }),
                                    ],
                                }),
                                !r && (0, n.jsx)("div", { className: "py-3 px-4", children: (0, n.jsx)(I, { value: "all" }) }),
                                r ? (0, n.jsxs)("div", { className: "flex flex-col min-h-0 gap-1 pt-6", children: [l.length > 0 && (0, n.jsxs)("div", { className: "px-4", children: [(0, n.jsx)(m.x, { size: "subtext2", color: "gray700", weight: "bold", children: "Conversations" }), (0, n.jsx)(D.r, { conversations: l, onEvent: (s) => e.onEvent(s) })] }), j.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: "px-4", children: (0, n.jsx)(m.x, { size: "subtext2", color: "gray700", weight: "bold", children: "Messages" }) }), (0, n.jsx)(w.p, { conversations: j, actionsDialog: null, onEvent: (s) => e.onEvent(s), isSearch: r })] })] }) : l && l.length > 0 ? (0, n.jsx)(w.p, { conversations: l, actionsDialog: i.showActionsDialog, onEvent: (s) => e.onEvent(s), isSearch: r }) : (0, n.jsx)(b, {}),
                                i.showBottomDialog instanceof z.PinReminder && (0, n.jsx)(_.Y, { component: e, dialogParams: i.showBottomDialog.params }),
                            ],
                        }),
                        t && (0, n.jsx)(p.x, { onVisibilityChange: s }),
                    ],
                });
            }
            var $ = t(379342);
            const A = () => {
                    const [e, s] = (0, i.useState)(null),
                        t = (0, d.n)(),
                        c = (0, $.s)(),
                        [l, x] = (0, i.useState)(!1);
                    return (
                        (0, i.useEffect)(() => {
                            const e = new a.com.x.export.CancellationSignal(),
                                n = t.conversationListComponent(
                                    new a.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? c.toPinScreen("recovery") : c.toPinScreen("new");
                                        },
                                        (e) => {
                                            c.toConversation(e.id);
                                        },
                                        () => {
                                            x(!0);
                                        },
                                        () => {},
                                        (e) => {
                                            c.toPinScreen("verify", e);
                                        },
                                        () => {},
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
                        }, [t, c]),
                        null === e ? (0, n.jsx)(E.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh  w-full", children: (0, n.jsx)(o.P, {}) }) : (0, n.jsx)(r.S, { children: (0, n.jsx)(B, { component: e, setShowNewDM: x, showNewDM: l }) })
                    );
                },
                B = ({ component: e, setShowNewDM: s, showNewDM: t }) => {
                    const a = (0, c.U)().id,
                        i = void 0 === a || "" === a;
                    return (0, g._)(e.state).isInitializing ? (0, n.jsx)(E.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh w-full", children: (0, n.jsx)(o.P, {}) }) : (0, n.jsxs)("div", { className: "@container flex min-h-dvh md:h-dvh w-full", children: [(0, n.jsx)("div", { className: (i ? "block" : "hidden") + " @narrow:block w-full @narrow:w-[35%]", children: (0, n.jsx)(O, { component: e, setShowNewDM: s, showNewDM: t }) }), (0, n.jsx)("div", { className: (i ? "hidden" : "block") + " @narrow:block w-full @narrow:w-[65%]", children: (0, n.jsx)(l.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-97c99e35.c2dba57a.js.map
