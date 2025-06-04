"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-97c99e35"],
    {
        155369: (e, n, t) => {
            t.d(n, { U: () => N, n: () => b });
            var s = t(552322),
                o = t(159603),
                a = t(202784),
                i = t(849170),
                r = t(84504),
                c = t(858108),
                l = t(664147);
            class d {
                url;
                options;
                constructor(e, n) {
                    (this.url = new URL(e.href.replace("https://abs.twimg.com", "https://x.com/i/static"))), (this.options = n);
                }
                createWorker() {
                    return new Worker(this.url, this.options);
                }
            }
            var x = t(346598),
                m = t(842898),
                h = t(889906),
                u = t(446368),
                v = t(264531);
            class w extends o.com.x.dms.WebXChatFeatureSwitches {}
            const p = o.kotlin.collections.KtList,
                g = (0, a.createContext)(void 0),
                f = "undefined" == typeof window;
            let j;
            function b() {
                const e = (0, a.useContext)(g);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function y(e, n, s, a) {
                const h = "true" === localStorage.getItem(l.e) || !1,
                    u = (0, r.n5)();
                return new o.com.x.dms.WebDmObjectGraph(
                    o.com.x.models.UserIdentifier.ofString(u),
                    a
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
                                  new Promise((n, t) => {
                                      (e.onmessage = (s) => {
                                          const { data: o } = s;
                                          "init_1" === o.id && (o.error ? t(new Error(`Database initialization failed: ${o.error}`)) : n(e));
                                      }),
                                          e.postMessage({ action: "init_db", userId: (0, r.n5)(), id: "init_1" });
                                  });
                          })()
                        : (function () {
                              const e = new d(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), t.b), { type: void 0 }).createWorker();
                              return (e.onerror = (e) => {}), e.postMessage({ action: "init_db", dbName: `${(0, r.n5)()}_chat`, id: "init_1" }), () => new Promise((n) => n(e));
                          })(),
                    i._i,
                    (n, t) => {
                        (0, m.S)(n.value.toString(), e).then((e) => {
                            if (!e) return void t(new o.com.x.dms.LoadPostResult.OtherFailure());
                            const n = new o.com.x.dms.LoadPostResult.Success(e);
                            t(n);
                        });
                    },
                    async function () {
                        return p.fromJsArray([]);
                    },
                    (e, t, s, o, a) => {
                        n.scribe({ client: "m5", page: e ?? void 0, section: t ?? void 0, component: s ?? void 0, element: o ?? void 0, action: a ?? void 0 });
                    },
                    new o.com.x.dms.WebOptions(_(v.B$.INFO), (0, c.G)() ? null : _(s), !1),
                    h,
                    new x.V(),
                    new w(),
                );
            }
            function _(e) {
                return "DEBUG" === e ? o.com.x.dms.LogLevel.DEBUG : "INFO" === e ? o.com.x.dms.LogLevel.INFO : o.com.x.dms.LogLevel.ERROR;
            }
            function N({ children: e }) {
                if (f) return;
                const n = (0, h.useRelayEnvironment)(),
                    t = (0, u.z$)(),
                    o = (0, v.xq)(),
                    a = (0, v.rF)();
                return j || (j = y(n, t, o, a)), (0, s.jsx)(g.Provider, { value: j, children: e });
            }
        },
        92184: (e, n, t) => {
            t.d(n, { p: () => B });
            var s = t(552322),
                o = t(159603),
                a = t(702024),
                i = t(202784),
                r = t(134877),
                c = t(727071),
                l = t(633435),
                d = t(155369),
                x = t(439252),
                m = t(447742),
                h = t(941204),
                u = t(436059),
                v = t(887390),
                w = t(238750),
                p = t(984713),
                g = t(533476),
                f = t(455091),
                j = t(788452);
            function b() {
                const { t: e } = (0, f.$G)();
                return (0, s.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, s.jsx)("div", { className: "text-[76px] mb-10", children: (0, s.jsx)(j.Z, { className: "rotate-[-8.29deg]" }) }), (0, s.jsx)(h.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, s.jsx)(h.x, { color: "gray700", children: e("Message someone") })] });
            }
            var y = t(264531),
                _ = t(897995),
                N = t(18671),
                C = t(955504);
            const S = ({ connectionState: e }) => {
                const { connectionStateText: n, iconComponent: t } = ((e) => {
                    let n,
                        t = "";
                    switch (e) {
                        case o.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            (n = (0, s.jsx)(a.P, {})), (t = "Connecting");
                            break;
                        case o.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            (n = (0, s.jsx)(C.Z, { className: "text-red-500" })), (t = "Disconnected");
                            break;
                        case o.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            t = "Blocked update your app";
                    }
                    return { connectionStateText: t, iconComponent: n };
                })(e);
                return n ? (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [t && (0, s.jsx)("div", { children: t }), (0, s.jsx)(h.x, { weight: "medium", children: n })] }) : null;
            };
            var D = t(469745),
                k = t(910299),
                E = t(671889),
                L = t(130844),
                P = t(816778);
            function R({ value: e, children: n, href: t }) {
                const o = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    a = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-[15px] leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-primary/10 data-[state=active]:hover:bg-primary/15 data-[state=active]:active:bg-primary/15 data-[state=active]:text-primary data-[state=active]:font-[500] data-[state=active]:shadow-none";
                return t ? (0, s.jsx)(P.SP, { asChild: !0, value: e, children: (0, s.jsx)(L.r, { href: t, className: `${o} ${a}`, children: n }) }) : (0, s.jsx)(P.SP, { value: e, className: `${o} ${a}`, children: n });
            }
            function I({ value: e, className: n, ...t }) {
                const { t: o } = (0, f.$G)();
                return (0, s.jsx)(P.mQ, { value: e, className: n, ...t, children: (0, s.jsxs)(P.dr, { className: "bg-transparent p-0 gap-3", children: [(0, s.jsx)(R, { value: "all", children: "All" }), (0, s.jsx)(R, { value: "unencrypted", href: "https://x.com/messages", children: o("Classic Inbox") })] }) });
            }
            const M = o.com.x.dms.convlist,
                O = o.com.x.dms.InboxBottomDialog;
            function z({ component: e, setShowNewDM: n, showNewDM: t }) {
                const { t: o } = (0, f.$G)(),
                    i = (0, g._)(e.state),
                    r = i.searchQuery.length > 0,
                    c = (0, D.a)("(max-width: 768px)"),
                    l = r ? i.conversationResults.asJsReadonlyArrayView() : (i.previews?.asJsReadonlyArrayView() ?? []),
                    { showDebugOptions: d } = (0, y.XE)(),
                    j = i.messageResults?.asJsReadonlyArrayView() ?? [],
                    C = (0, y.tc)("dashMenuButton");
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(E.g, {
                            className: "flex flex-col min-h-dvh md:h-dvh border-r relative w-full",
                            children: [
                                (0, s.jsxs)("header", {
                                    className: "flex flex-col",
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: "flex items-center justify-between py-2 px-4 h-16",
                                            children: [
                                                (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [c && C, (0, s.jsx)(h.x, { weight: "bold", size: "headline1", children: o("Chats") })] }),
                                                i.showConnectionIndicator && (0, s.jsx)(S, { connectionState: i.showConnectionIndicator }),
                                                (0, s.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        i.isLoadingConversations && (0, s.jsx)("div", { className: "w-5", children: (0, s.jsx)(a.P, { size: "small" }) }),
                                                        d && (0, s.jsx)(N.Z, {}),
                                                        (0, s.jsx)(u.z, {
                                                            className: "-mr-2",
                                                            icon: (0, s.jsx)(x.Z, { className: "h-5 w-5" }),
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(M.ConversationListEvent.FloatingActionButtonClicked);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", {
                                            className: "px-4 py-1",
                                            children: (0, s.jsx)(v._, {
                                                placeholder: "Search",
                                                value: i.searchQuery ?? "",
                                                onChange: (n) => {
                                                    e.onEvent(new M.ConversationListEvent.SearchQueryChanged(n.target.value));
                                                },
                                                borderRadius: "xLarge",
                                                className: "bg-gray-0 focus-within:bg-transparent",
                                                inputClassName: "placeholder:text-gray-700",
                                                leftContent: (0, s.jsx)(m.Z, { className: "h-5 w-5 text-gray-700" }),
                                            }),
                                        }),
                                    ],
                                }),
                                !r && (0, s.jsx)("div", { className: "py-3 px-4", children: (0, s.jsx)(I, { value: "all" }) }),
                                r ? (0, s.jsxs)("div", { className: "flex flex-col min-h-0 gap-1 pt-6", children: [l.length > 0 && (0, s.jsxs)("div", { className: "px-4", children: [(0, s.jsx)(h.x, { size: "subtext2", color: "gray700", weight: "bold", children: "Conversations" }), (0, s.jsx)(k.r, { conversations: l, onEvent: (n) => e.onEvent(n) })] }), j.length > 0 && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "px-4", children: (0, s.jsx)(h.x, { size: "subtext2", color: "gray700", weight: "bold", children: "Messages" }) }), (0, s.jsx)(w.p, { conversations: j, actionsDialog: null, onEvent: (n) => e.onEvent(n), isSearch: r })] })] }) : l && l.length > 0 ? (0, s.jsx)(w.p, { conversations: l, actionsDialog: i.showActionsDialog, onEvent: (n) => e.onEvent(n), isSearch: r }) : (0, s.jsx)(b, {}),
                                i.showBottomDialog instanceof O.PinReminder && (0, s.jsx)(_.Y, { component: e, dialogParams: i.showBottomDialog.params }),
                            ],
                        }),
                        t && (0, s.jsx)(p.x, { onVisibilityChange: n }),
                    ],
                });
            }
            var $ = t(379342);
            const B = () => {
                    const [e, n] = (0, i.useState)(null),
                        t = (0, d.n)(),
                        c = (0, $.s)(),
                        [l, x] = (0, i.useState)(!1);
                    return (
                        (0, i.useEffect)(() => {
                            const e = new o.com.x.export.CancellationSignal(),
                                s = t.conversationListComponent(
                                    new o.com.x.dms.convlist.ConversationListCallbacks(
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
                                n(s),
                                () => {
                                    e.cancel();
                                }
                            );
                        }, [t, c]),
                        null === e ? (0, s.jsx)(E.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh  w-full", children: (0, s.jsx)(a.P, {}) }) : (0, s.jsx)(r.S, { children: (0, s.jsx)(G, { component: e, setShowNewDM: x, showNewDM: l }) })
                    );
                },
                G = ({ component: e, setShowNewDM: n, showNewDM: t }) => {
                    const o = (0, c.U)().id,
                        i = void 0 === o || "" === o;
                    return (0, g._)(e.state).isInitializing ? (0, s.jsx)(E.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh w-full", children: (0, s.jsx)(a.P, {}) }) : (0, s.jsxs)("div", { className: "@container flex min-h-dvh md:h-dvh w-full", children: [(0, s.jsx)("div", { className: (i ? "block" : "hidden") + " @narrow:block w-full @narrow:w-[35%]", children: (0, s.jsx)(z, { component: e, setShowNewDM: n, showNewDM: t }) }), (0, s.jsx)("div", { className: (i ? "hidden" : "block") + " @narrow:block w-full @narrow:w-[65%]", children: (0, s.jsx)(l.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-97c99e35.d30123aa.js.map
