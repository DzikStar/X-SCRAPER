"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-97c99e35"],
    {
        155369: (e, s, t) => {
            t.d(s, { U: () => E, n: () => S });
            var n = t(552322),
                r = t(159603),
                i = t(202784),
                a = t(431882),
                o = t(849170),
                c = t(84504),
                l = t(858108),
                d = t(664147);
            class h {
                url;
                options;
                constructor(e, s) {
                    (this.url = new URL(e.href.replace("https://abs.twimg.com", "https://x.com/i/static"))), (this.options = s);
                }
                createWorker() {
                    return new Worker(this.url, this.options);
                }
            }
            var u = t(346598),
                x = t(842898),
                m = t(446368),
                v = t(38891),
                g = t(889906),
                w = t(264531);
            class p extends r.com.x.dms.WebXChatFeatureSwitches {
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
                screenshotDetectionEnabled() {
                    return !1;
                }
                shouldDetectOutOfOrderFanout() {
                    return !1;
                }
            }
            const f = r.kotlin.collections.KtList,
                j = !1,
                b = 800,
                y = (0, i.createContext)(void 0),
                _ = "undefined" == typeof window;
            let N;
            function S() {
                const e = (0, i.useContext)(y);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function C(e, s, n, i, m) {
                const v = "true" === localStorage.getItem(d.e) || !1,
                    g = (0, c.n5)(),
                    y = (0, l.G)() && i;
                return new r.com.x.dms.WebDmObjectGraph(
                    r.com.x.models.UserIdentifier.ofString(g),
                    (function () {
                        const e = new h(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), t.b), { type: void 0 }).createWorker();
                        e.onerror = (e) => {};
                        return async () =>
                            new Promise((s, t) => {
                                (e.onmessage = (n) => {
                                    const { data: r } = n;
                                    "init_1" === r.id && (r.error ? t(new Error(`Database initialization failed: ${r.error}`)) : s(e));
                                }),
                                    e.postMessage({ action: "init_db", userId: (0, c.n5)(), id: "init_1" });
                            });
                    })(),
                    D,
                    y,
                    o._i,
                    (s, t) => {
                        (0, x.S)(s.value.toString(), e).then((e) => {
                            if (!e) return void t(new r.com.x.dms.LoadPostResult.OtherFailure());
                            const s = new r.com.x.dms.LoadPostResult.Success(e);
                            t(s);
                        });
                    },
                    async function () {
                        return f.fromJsArray([]);
                    },
                    (e, t, n, r, i) => {
                        s.scribe({ client: "m5", page: e ?? void 0, section: t ?? void 0, component: n ?? void 0, element: r ?? void 0, action: i ?? void 0 });
                    },
                    (e, s, t) => {
                        a.kg.error(`${e} ${t}`, s ?? void 0);
                    },
                    new r.com.x.dms.WebOptions(k(w.B$.INFO), y || !(0, l.G)() ? k(n) : null, !1),
                    v,
                    new u.V(),
                    new p(m),
                    j,
                    b,
                );
            }
            function D() {
                return new Promise((e) => {
                    const s = new h(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_fs_worker_js"), t.b), { type: void 0 }).createWorker();
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
                if (_) return;
                const s = (0, g.useRelayEnvironment)(),
                    t = (0, m.z$)(),
                    r = (0, w.xq)(),
                    i = (0, w.VC)(),
                    a = (0, v.z)();
                return N || (N = C(s, t, r, i, a)), (0, n.jsx)(y.Provider, { value: N, children: e });
            }
        },
        92184: (e, s, t) => {
            t.d(s, { p: () => A });
            var n = t(552322),
                r = t(159603),
                i = t(263033),
                a = t(193686),
                o = t(332161),
                c = t(202784),
                l = t(607499),
                d = t(727071),
                h = t(706480),
                u = t(155369),
                x = t(439252),
                m = t(447742),
                v = t(993165),
                g = t(687521),
                w = t(238750),
                p = t(984713),
                f = t(533476),
                j = t(788452);
            function b() {
                const { t: e } = (0, i.$G)();
                return (0, n.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(j.Z, { className: "rotate-[-8.29deg]" }) }), (0, n.jsx)(o.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, n.jsx)(o.x, { color: "gray700", children: e("Message someone") })] });
            }
            var y = t(264531),
                _ = t(897995),
                N = t(70625),
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
            var D = t(305399),
                k = t(910299),
                E = t(671889),
                L = t(38891),
                P = t(322506),
                z = t(476865);
            function R({ value: e, children: s, href: t }) {
                const r = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    i = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-[15px] leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-blue-500 data-[state=active]:hover:bg-blue-600 data-[state=active]:active:bg-blue-600 data-[state=active]:text-white data-[state=active]:font-[500] data-[state=active]:shadow-none";
                return t ? (0, n.jsx)(z.SP, { asChild: !0, value: e, children: (0, n.jsx)(P.r, { href: t, className: `${r} ${i}`, children: s }) }) : (0, n.jsx)(z.SP, { value: e, className: `${r} ${i}`, children: s });
            }
            function I({ value: e, className: s, ...t }) {
                const { t: r } = (0, i.$G)(),
                    a = (0, L.z)().isTrue("enable_inbox_pills");
                return (0, n.jsx)(z.mQ, { value: e, className: s, ...t, children: (0, n.jsxs)(z.dr, { className: "bg-transparent p-0 gap-3", children: [(0, n.jsx)(R, { value: "all", children: r("All") }), a && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(R, { value: "unread", children: r("Unread") }), (0, n.jsx)(R, { value: "groups", children: r("Groups") })] }), (0, n.jsx)(R, { value: "unencrypted", href: "https://x.com/messages", children: r("Unencrypted") })] }) });
            }
            var O = t(450683);
            const G = r.com.x.dms.convlist,
                M = r.com.x.dms.InboxBottomDialog;
            function T({ component: e, setShowNewDM: s, showNewDM: t }) {
                const { t: r } = (0, i.$G)(),
                    c = (0, f._)(e.state),
                    l = c.searchQuery.length > 0,
                    d = (0, D.a)("(max-width: 768px)"),
                    h = l ? c.conversationResults.asJsReadonlyArrayView() : (c.previews?.asJsReadonlyArrayView() ?? []),
                    { showDebugOptions: u } = (0, y.XE)(),
                    j = c.messageResults?.asJsReadonlyArrayView() ?? [],
                    S = () => {
                        e.onEvent(new G.ConversationListEvent.SearchQueryChanged(""));
                    },
                    L = (0, y.tc)("dashMenuButton");
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
                                                                e.onEvent(G.ConversationListEvent.FloatingActionButtonClicked);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        c.isLoadingConversations
                                            ? (0, n.jsxs)("div", { className: "flex flex-col gap-2 justify-center items-center", children: [d && (0, n.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", className: "animate-pulse", children: r("Loading conversation history…") }), (0, n.jsx)(O.P, {})] })
                                            : (0, n.jsx)(n.Fragment, {
                                                  children: (0, n.jsx)("div", {
                                                      className: "px-4 py-1",
                                                      children: (0, n.jsx)(g._, {
                                                          placeholder: r("Search"),
                                                          value: c.searchQuery ?? "",
                                                          onChange: (s) => {
                                                              e.onEvent(new G.ConversationListEvent.SearchQueryChanged(s.target.value));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Escape" === e.key && S();
                                                          },
                                                          borderRadius: "xLarge",
                                                          className: "bg-gray-0 focus-within:bg-transparent border-gray-50",
                                                          inputClassName: "placeholder:text-gray-700",
                                                          leftContent: (0, n.jsx)(m.Z, { className: "h-5 w-5 text-gray-700 shrink-0" }),
                                                          rightContent: c.searchQuery.length > 0 ? (0, n.jsx)(v.z, { size: "xSmall", variant: "primaryText", className: "shrink-0", onClick: S, children: (0, n.jsx)(o.x, { size: "subtext2", color: "gray700", numberOfLines: 1, children: r("Clear") }) }) : void 0,
                                                      }),
                                                  }),
                                              }),
                                    ],
                                }),
                                !c.isLoadingConversations && (0, n.jsxs)(n.Fragment, { children: [!l && (0, n.jsx)("div", { className: "py-3 px-4", children: (0, n.jsx)(I, { value: "all" }) }), l ? (0, n.jsxs)("div", { className: "flex flex-col min-h-0 gap-1 pt-6", children: [h.length > 0 && (0, n.jsxs)("div", { className: "px-4", children: [(0, n.jsx)(o.x, { size: "subtext2", color: "gray700", weight: "bold", children: r("Conversations") }), (0, n.jsx)(k.r, { conversations: h, onEvent: (s) => e.onEvent(s) })] }), j.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: "px-4", children: (0, n.jsx)(o.x, { size: "subtext2", color: "gray700", weight: "bold", children: r("Messages") }) }), (0, n.jsx)(w.p, { conversations: j, actionsDialog: null, onEvent: (s) => e.onEvent(s), isSearch: l })] })] }) : h && h.length > 0 ? (0, n.jsx)(w.p, { conversations: h, actionsDialog: c.showActionsDialog, onEvent: (s) => e.onEvent(s), isSearch: l }) : (0, n.jsx)(b, {}), c.showBottomDialog instanceof M.PinReminder && (0, n.jsx)(_.Y, { component: e, dialogParams: c.showBottomDialog.params })] }),
                            ],
                        }),
                        t && (0, n.jsx)(p.x, { onVisibilityChange: s }),
                    ],
                });
            }
            var $ = t(379342);
            const A = () => {
                    const [e, s] = (0, c.useState)(null),
                        t = (0, u.n)(),
                        i = (0, $.s)(),
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
                        null === e ? (0, n.jsx)(E.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh  w-full", children: (0, n.jsx)(a.P, {}) }) : (0, n.jsx)(l.S, { children: (0, n.jsx)(U, { component: e, setShowNewDM: d, showNewDM: o }) })
                    );
                },
                U = ({ component: e, setShowNewDM: s, showNewDM: t }) => {
                    const r = (0, d.U)().id,
                        c = void 0 === r || "" === r,
                        l = (0, f._)(e.state),
                        { t: u } = (0, i.$G)();
                    return l.isInitializing ? (0, n.jsx)(E.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh w-full", children: (0, n.jsx)(a.P, {}) }) : (0, n.jsxs)("div", { className: "@container flex min-h-dvh md:h-dvh w-full", children: [(0, n.jsx)("div", { className: (c ? "block" : "hidden") + " @narrow:block w-full @narrow:w-[35%]", children: (0, n.jsx)(T, { component: e, setShowNewDM: s, showNewDM: t }) }), (0, n.jsx)("div", { className: (c ? "hidden" : "block") + " @narrow:block w-full @narrow:w-[65%]", children: l.isLoadingConversations ? (0, n.jsx)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: (0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", className: "animate-pulse", children: u("Loading conversation history…") }) }) }) : (0, n.jsx)(h.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-97c99e35.53d2ac6a.js.map
