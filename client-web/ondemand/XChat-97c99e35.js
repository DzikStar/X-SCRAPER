"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-97c99e35"],
    {
        155369: (e, s, t) => {
            t.d(s, { U: () => E, n: () => N });
            var n = t(552322),
                r = t(159603),
                i = t(202784),
                a = t(849170),
                o = t(84504),
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
            var h = t(346598),
                u = t(842898),
                x = t(446368),
                m = t(38891),
                v = t(889906),
                w = t(264531);
            class g extends r.com.x.dms.WebXChatFeatureSwitches {
                featureSwitches;
                constructor(e) {
                    super(), (this.featureSwitches = e);
                }
                shouldSignMessages() {
                    return this.featureSwitches.isTrue("xchat_sign_messages");
                }
                shouldVerifyMessageSignatures() {
                    return this.featureSwitches.isTrue("xchat_verify_message_signatures");
                }
                shouldSignIdentityKeyDuringRegistration() {
                    return this.featureSwitches.isTrue("xchat_sign_identity_key_during_registration");
                }
                shouldSendGraphqlLogs() {
                    return this.featureSwitches.isTrue("xchat_send_graphql_logs");
                }
                shouldDiscardInvalidSignatureEvents() {
                    return this.featureSwitches.isTrue("xchat_discard_events_with_invalid_signature");
                }
                enableAv() {
                    return this.featureSwitches.isTrue("xchat_enable_av");
                }
                shouldShowEUReport() {
                    return this.featureSwitches.isTrue("xchat_enable_eu_report");
                }
                maxGroupSize() {
                    return this.featureSwitches.getNumberValue("xchat_max_group_size", 200);
                }
                enablePerfWriteAhead() {
                    return !1;
                }
                enableInboxPills() {
                    return !1;
                }
            }
            const p = r.kotlin.collections.KtList,
                f = !1,
                _ = 800,
                j = (0, i.createContext)(void 0),
                b = "undefined" == typeof window;
            let y;
            function N() {
                const e = (0, i.useContext)(j);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function S(e, s, n, i, x) {
                const m = "true" === localStorage.getItem(l.e) || !1,
                    v = (0, o.n5)(),
                    j = x.isTrue("rweb_xchat_fs_worker");
                return new r.com.x.dms.WebDmObjectGraph(
                    r.com.x.models.UserIdentifier.ofString(v),
                    i
                        ? (function () {
                              const e = new d(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_sqlite2_worker_js"), t.b), { type: void 0 }).createWorker();
                              (e.onerror = (e) => {}),
                                  window.addEventListener("xchat_database_backup_event", () => {
                                      e.postMessage({ action: "backup_db", userId: (0, o.n5)(), id: "backup_1" });
                                  }),
                                  window.addEventListener("xchat_before_unload_event", () => {
                                      e.postMessage({ action: "close", id: "close_1" });
                                  });
                              return async () =>
                                  new Promise((s, t) => {
                                      (e.onmessage = (n) => {
                                          const { data: r } = n;
                                          "init_1" === r.id && (r.error ? t(new Error(`Database initialization failed: ${r.error}`)) : s(e));
                                      }),
                                          e.postMessage({ action: "init_db", userId: (0, o.n5)(), id: "init_1" });
                                  });
                          })()
                        : (function () {
                              const e = new d(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), t.b), { type: void 0 }).createWorker();
                              return (e.onerror = (e) => {}), e.postMessage({ action: "init_db", dbName: `${(0, o.n5)()}_chat`, id: "init_1" }), () => new Promise((s) => s(e));
                          })(),
                    C,
                    j,
                    a._i,
                    (s, t) => {
                        (0, u.S)(s.value.toString(), e).then((e) => {
                            if (!e) return void t(new r.com.x.dms.LoadPostResult.OtherFailure());
                            const s = new r.com.x.dms.LoadPostResult.Success(e);
                            t(s);
                        });
                    },
                    async function () {
                        return p.fromJsArray([]);
                    },
                    (e, t, n, r, i) => {
                        s.scribe({ client: "m5", page: e ?? void 0, section: t ?? void 0, component: n ?? void 0, element: r ?? void 0, action: i ?? void 0 });
                    },
                    new r.com.x.dms.WebOptions(k(w.B$.INFO), j || !(0, c.G)() ? k(n) : null, !1),
                    m,
                    new h.V(),
                    new g(x),
                    () => {},
                    f,
                    _,
                );
            }
            function C() {
                return new Promise((e) => {
                    const s = new d(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_fs_worker_js"), t.b), { type: void 0 }).createWorker();
                    (s.onerror = (e) => {}), e(s);
                });
            }
            function k(e) {
                switch (e) {
                    case "DEBUG":
                    case "INFO":
                    case "ERROR":
                    case "WARN":
                        return r.com.x.dms.LogLevel[e];
                    default:
                        return e;
                }
            }
            function E({ children: e }) {
                if (b) return;
                const s = (0, v.useRelayEnvironment)(),
                    t = (0, x.z$)(),
                    r = (0, w.xq)(),
                    i = (0, w.rF)(),
                    a = (0, m.z)();
                return y || (y = S(s, t, r, i, a)), (0, n.jsx)(j.Provider, { value: y, children: e });
            }
        },
        92184: (e, s, t) => {
            t.d(s, { p: () => O });
            var n = t(552322),
                r = t(159603),
                i = t(455091),
                a = t(193686),
                o = t(332161),
                c = t(202784),
                l = t(134877),
                d = t(727071),
                h = t(706480),
                u = t(155369),
                x = t(439252),
                m = t(447742),
                v = t(993165),
                w = t(687521),
                g = t(238750),
                p = t(984713),
                f = t(533476),
                _ = t(788452);
            function j() {
                const { t: e } = (0, i.$G)();
                return (0, n.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(_.Z, { className: "rotate-[-8.29deg]" }) }), (0, n.jsx)(o.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, n.jsx)(o.x, { color: "gray700", children: e("Message someone") })] });
            }
            var b = t(264531),
                y = t(897995),
                N = t(18671),
                S = t(955504);
            const C = ({ connectionState: e }) => {
                const { connectionStateText: s, iconComponent: t } = ((e) => {
                    let s,
                        t = "";
                    switch (e) {
                        case r.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            (s = (0, n.jsx)(a.P, {})), (t = "Connecting");
                            break;
                        case r.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            (s = (0, n.jsx)(S.Z, { className: "text-red-500" })), (t = "Disconnected");
                            break;
                        case r.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            t = "Blocked update your app";
                    }
                    return { connectionStateText: t, iconComponent: s };
                })(e);
                return s ? (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [t && (0, n.jsx)("div", { children: t }), (0, n.jsx)(o.x, { weight: "medium", children: s })] }) : null;
            };
            var k = t(305399),
                E = t(910299),
                D = t(671889),
                L = t(322506),
                P = t(476865);
            function R({ value: e, children: s, href: t }) {
                const r = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    i = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-[15px] leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-primary/10 data-[state=active]:hover:bg-primary/15 data-[state=active]:active:bg-primary/15 data-[state=active]:text-primary data-[state=active]:font-[500] data-[state=active]:shadow-none";
                return t ? (0, n.jsx)(P.SP, { asChild: !0, value: e, children: (0, n.jsx)(L.r, { href: t, className: `${r} ${i}`, children: s }) }) : (0, n.jsx)(P.SP, { value: e, className: `${r} ${i}`, children: s });
            }
            function z({ value: e, className: s, ...t }) {
                const { t: r } = (0, i.$G)();
                return (0, n.jsx)(P.mQ, { value: e, className: s, ...t, children: (0, n.jsxs)(P.dr, { className: "bg-transparent p-0 gap-3", children: [(0, n.jsx)(R, { value: "all", children: "All" }), (0, n.jsx)(R, { value: "unencrypted", href: "https://x.com/messages", children: r("Classic Inbox") })] }) });
            }
            var I = t(450683);
            const M = r.com.x.dms.convlist,
                T = r.com.x.dms.InboxBottomDialog;
            function A({ component: e, setShowNewDM: s, showNewDM: t }) {
                const { t: r } = (0, i.$G)(),
                    c = (0, f._)(e.state),
                    l = c.searchQuery.length > 0,
                    d = (0, k.a)("(max-width: 768px)"),
                    h = l ? c.conversationResults.asJsReadonlyArrayView() : (c.previews?.asJsReadonlyArrayView() ?? []),
                    { showDebugOptions: u } = (0, b.XE)(),
                    _ = c.messageResults?.asJsReadonlyArrayView() ?? [],
                    S = () => {
                        e.onEvent(new M.ConversationListEvent.SearchQueryChanged(""));
                    },
                    L = (0, b.tc)("dashMenuButton");
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(D.g, {
                            className: "flex flex-col min-h-dvh md:h-dvh border-r relative w-full",
                            children: [
                                (0, n.jsxs)("header", {
                                    className: "flex flex-col",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "flex items-center justify-between py-2 px-4 h-16",
                                            children: [
                                                (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [d && L, (0, n.jsx)(o.x, { weight: "bold", size: "headline1", children: r("Chats") })] }),
                                                c.showConnectionIndicator && (0, n.jsx)(C, { connectionState: c.showConnectionIndicator }),
                                                (0, n.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        c.isLoadingConversations && (0, n.jsx)("div", { className: "w-5", children: (0, n.jsx)(a.P, { size: "small" }) }),
                                                        u && (0, n.jsx)(N.Z, {}),
                                                        (0, n.jsx)(v.z, {
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
                                        c.isLoadingConversations
                                            ? (0, n.jsx)(I.P, {})
                                            : (0, n.jsx)(n.Fragment, {
                                                  children: (0, n.jsx)("div", {
                                                      className: "px-4 py-1",
                                                      children: (0, n.jsx)(w._, {
                                                          placeholder: "Search",
                                                          value: c.searchQuery ?? "",
                                                          onChange: (s) => {
                                                              e.onEvent(new M.ConversationListEvent.SearchQueryChanged(s.target.value));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Escape" === e.key && S();
                                                          },
                                                          borderRadius: "xLarge",
                                                          className: "bg-gray-0 focus-within:bg-transparent",
                                                          inputClassName: "placeholder:text-gray-700",
                                                          leftContent: (0, n.jsx)(m.Z, { className: "h-5 w-5 text-gray-700 shrink-0" }),
                                                          rightContent: c.searchQuery.length > 0 ? (0, n.jsx)(v.z, { size: "xSmall", variant: "primaryText", className: "shrink-0", onClick: S, children: (0, n.jsx)(o.x, { size: "subtext2", color: "gray700", numberOfLines: 1, children: r("Clear") }) }) : void 0,
                                                      }),
                                                  }),
                                              }),
                                    ],
                                }),
                                !c.isLoadingConversations && (0, n.jsxs)(n.Fragment, { children: [!l && (0, n.jsx)("div", { className: "py-3 px-4", children: (0, n.jsx)(z, { value: "all" }) }), l ? (0, n.jsxs)("div", { className: "flex flex-col min-h-0 gap-1 pt-6", children: [h.length > 0 && (0, n.jsxs)("div", { className: "px-4", children: [(0, n.jsx)(o.x, { size: "subtext2", color: "gray700", weight: "bold", children: "Conversations" }), (0, n.jsx)(E.r, { conversations: h, onEvent: (s) => e.onEvent(s) })] }), _.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: "px-4", children: (0, n.jsx)(o.x, { size: "subtext2", color: "gray700", weight: "bold", children: "Messages" }) }), (0, n.jsx)(g.p, { conversations: _, actionsDialog: null, onEvent: (s) => e.onEvent(s), isSearch: l })] })] }) : h && h.length > 0 ? (0, n.jsx)(g.p, { conversations: h, actionsDialog: c.showActionsDialog, onEvent: (s) => e.onEvent(s), isSearch: l }) : (0, n.jsx)(j, {}), c.showBottomDialog instanceof T.PinReminder && (0, n.jsx)(y.Y, { component: e, dialogParams: c.showBottomDialog.params })] }),
                            ],
                        }),
                        t && (0, n.jsx)(p.x, { onVisibilityChange: s }),
                    ],
                });
            }
            var G = t(379342);
            const O = () => {
                    const [e, s] = (0, c.useState)(null),
                        t = (0, u.n)(),
                        i = (0, G.s)(),
                        [o, d] = (0, c.useState)(!1);
                    return (
                        (0, c.useEffect)(() => {
                            const e = new r.com.x.export.CancellationSignal(),
                                n = t.conversationListComponent(
                                    new r.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? i.toPinScreen("recovery") : i.toPinScreen("new");
                                        },
                                        (e) => {
                                            i.toConversation(e.id);
                                        },
                                        () => {
                                            d(!0);
                                        },
                                        () => {},
                                        (e) => {
                                            i.toPinScreen("verify", e);
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
                        }, [t, i]),
                        null === e ? (0, n.jsx)(D.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh  w-full", children: (0, n.jsx)(a.P, {}) }) : (0, n.jsx)(l.S, { children: (0, n.jsx)($, { component: e, setShowNewDM: d, showNewDM: o }) })
                    );
                },
                $ = ({ component: e, setShowNewDM: s, showNewDM: t }) => {
                    const r = (0, d.U)().id,
                        c = void 0 === r || "" === r,
                        l = (0, f._)(e.state),
                        { t: u } = (0, i.$G)();
                    return l.isInitializing ? (0, n.jsx)(D.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh w-full", children: (0, n.jsx)(a.P, {}) }) : (0, n.jsxs)("div", { className: "@container flex min-h-dvh md:h-dvh w-full", children: [(0, n.jsx)("div", { className: (c ? "block" : "hidden") + " @narrow:block w-full @narrow:w-[35%]", children: (0, n.jsx)(A, { component: e, setShowNewDM: s, showNewDM: t }) }), (0, n.jsx)("div", { className: (c ? "hidden" : "block") + " @narrow:block w-full @narrow:w-[65%]", children: l.isLoadingConversations ? (0, n.jsx)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: (0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", className: "animate-pulse", children: u("Loading conversation history…") }) }) }) : (0, n.jsx)(h.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-97c99e35.ff26be3a.js.map
