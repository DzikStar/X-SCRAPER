"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-97c99e35"],
    {
        155369: (e, n, s) => {
            s.d(n, { Us: () => I, Iv: () => k, n4: () => E });
            var t = s(552322),
                r = s(159603),
                a = s(202784),
                i = s(849170),
                o = s(431882),
                c = s(84504),
                l = s(858108),
                d = s(664147);
            class h {
                url;
                options;
                constructor(e, n) {
                    (this.url = new URL(e.href.replace("https://abs.twimg.com", "https://x.com/i/static"))), (this.options = n);
                }
                createWorker() {
                    return new Worker(this.url, this.options);
                }
            }
            var u = s(346598),
                x = s(842898),
                m = s(446368),
                v = s(38891),
                g = s(455091),
                w = s(889906),
                p = s(264531);
            class f extends r.com.x.dms.WebXChatFeatureSwitches {
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
                websocketHostname() {
                    return this.featureSwitches.getStringValue("xchat_socket_hostname", "chat-ws.x.com");
                }
            }
            var j = s(565991);
            const b = r.kotlin.collections.KtList,
                y = !1,
                _ = 800,
                C = (0, a.createContext)(void 0),
                N = "undefined" == typeof window;
            let S;
            function E() {
                const e = (0, a.useContext)(C);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function k() {
                return S ? S.clearOnLogout() : Promise.resolve();
            }
            function D(e, n, t, a, m, v) {
                const g = "true" === localStorage.getItem(d.e) || !1,
                    w = (0, c.n5)();
                return new r.com.x.dms.WebDmObjectGraph(
                    r.com.x.models.UserIdentifier.ofString(w),
                    (function () {
                        const e = new h(new URL(s.p + s.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), s.b), { type: void 0 }).createWorker();
                        (e.onerror = (e) => {}), (0, j.j)(e);
                        return async () =>
                            new Promise((n, s) => {
                                (e.onmessage = (t) => {
                                    const { data: r } = t;
                                    "init_1" === r.id && (r.error ? s(new Error(`Database initialization failed: ${r.error}`)) : n(e));
                                }),
                                    e.postMessage({ action: "init_db", userId: (0, c.n5)(), id: "init_1" });
                            });
                    })(),
                    P,
                    (0, l.G)(),
                    a,
                    m,
                    i._i,
                    (n, s) => {
                        (0, x.S)(n.value.toString(), e).then((e) => {
                            if (!e) return void s(new r.com.x.dms.LoadPostResult.OtherFailure());
                            const n = new r.com.x.dms.LoadPostResult.Success(e);
                            s(n);
                        });
                    },
                    async function () {
                        return b.fromJsArray([]);
                    },
                    (e, s, t, r, a) => {
                        n.scribe({ client: "m5", page: e ?? void 0, section: s ?? void 0, component: t ?? void 0, element: r ?? void 0, action: a ?? void 0 });
                    },
                    (e, n, s) => {
                        o.kg.error(`xchat ${e} ${s}`, n ?? void 0);
                    },
                    new r.com.x.dms.WebOptions(L(p.B$.INFO), L(t), !1, !1, t === p.B$.DEBUG),
                    g,
                    new u.V(),
                    new f(v),
                    y,
                    _,
                );
            }
            function P() {
                return new Promise((e) => {
                    const n = new h(new URL(s.p + s.u("node_modules_x-clients_features_dist_dms_fs_worker_js"), s.b), { type: void 0 }).createWorker();
                    (n.onerror = (e) => {}), e(n);
                });
            }
            function L(e) {
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
            function I({ children: e }) {
                if (N) return;
                const n = (0, w.useRelayEnvironment)(),
                    s = (0, m.z$)(),
                    r = (0, p.xq)(),
                    a = (0, v.z)(),
                    { t: i } = (0, g.$G)();
                return (
                    S ||
                        (S = D(
                            n,
                            s,
                            r,
                            () => i("User"),
                            (e, n) => `${e}, ${n}`,
                            a,
                        )),
                    (0, t.jsx)(C.Provider, { value: S, children: e })
                );
            }
        },
        92184: (e, n, s) => {
            s.d(n, { p: () => W });
            var t = s(552322),
                r = s(159603),
                a = s(455091),
                i = s(193686),
                o = s(332161),
                c = s(202784),
                l = s(607499),
                d = s(727071),
                h = s(633435),
                u = s(155369),
                x = s(691826),
                m = s(447742),
                v = s(993165),
                g = s(687521),
                w = s(3577),
                p = s(264531),
                f = s(238750),
                j = s(155733),
                b = s(450683),
                y = s(897995),
                _ = s(984713),
                C = s(910299),
                N = s(70625),
                S = s(671889),
                E = s(533476),
                k = s(658358),
                D = s(565991),
                P = s(955504);
            const L = ({ connectionState: e }) => {
                const { connectionStateText: n, iconComponent: s } = ((e) => {
                    let n,
                        s = "";
                    switch (e) {
                        case r.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            (n = (0, t.jsx)(i.P, {})), (s = "Connecting");
                            break;
                        case r.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            (n = (0, t.jsx)(P.Z, { className: "text-red-500" })), (s = "Disconnected");
                            break;
                        case r.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            s = "Blocked update your app";
                    }
                    return { connectionStateText: s, iconComponent: n };
                })(e);
                return n ? (0, t.jsxs)("div", { className: "flex items-center gap-2", children: [s && (0, t.jsx)("div", { children: s }), (0, t.jsx)(o.x, { weight: "medium", children: n })] }) : null;
            };
            var I = s(788452);
            function R() {
                const { t: e } = (0, a.$G)();
                return (0, t.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, t.jsx)("div", { className: "text-[76px] mb-10", children: (0, t.jsx)(I.Z, { className: "rotate-[-8.29deg]" }) }), (0, t.jsx)(o.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, t.jsx)(o.x, { color: "gray700", children: e("Message someone") })] });
            }
            var z = s(38891),
                U = s(322506),
                T = s(476865);
            const $ = r.com.x.dms.convlist.ConversationListEvent,
                O = r.com.x.dms.ConvListCategory;
            function G({ value: e, children: n, href: s, onEvent: r }) {
                const a = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-body font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    i = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-body leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-blue-500 data-[state=active]:hover:bg-blue-600 data-[state=active]:active:bg-blue-600 data-[state=active]:text-white data-[state=active]:font-[500] data-[state=active]:shadow-none",
                    o = (e) => {
                        let n;
                        switch (e) {
                            case "all":
                                n = O.All;
                                break;
                            case "unread":
                                n = O.Unread;
                                break;
                            case "groups":
                                n = O.Groups;
                                break;
                            case "unencrypted":
                                return;
                        }
                        r(new $.CategoryPillClicked(n));
                    };
                return s ? (0, t.jsx)(T.SP, { asChild: !0, value: e, onClick: () => o(e), children: (0, t.jsx)(U.r, { href: s, className: `${a} ${i}`, children: n }) }) : (0, t.jsx)(T.SP, { value: e, className: `${a} ${i}`, onClick: () => o(e), children: n });
            }
            function M({ value: e, className: n, onEvent: s, showUnreadPill: r, ...i }) {
                const { t: o } = (0, a.$G)(),
                    c = (0, z.z)().isTrue("xchat_enable_inbox_pills");
                return (0, t.jsx)(T.mQ, { value: e, className: n, ...i, children: (0, t.jsxs)(T.dr, { className: "bg-transparent p-0 gap-3", children: [(0, t.jsx)(G, { value: "all", onEvent: s, children: o("All") }), c && (0, t.jsxs)(t.Fragment, { children: [r && (0, t.jsx)(G, { value: "unread", onEvent: s, children: o("Unread") }), (0, t.jsx)(G, { value: "groups", onEvent: s, children: o("Groups") })] }), (0, t.jsx)(G, { value: "unencrypted", onEvent: s, href: "https://x.com/messages", children: o("Unencrypted") })] }) });
            }
            const A = r.com.x.dms.InboxBottomDialog,
                B = r.com.x.dms.convlist.ConversationListEvent;
            function F({ component: e, setShowNewDM: n, showNewDM: s }) {
                const { t: r } = (0, a.$G)(),
                    l = (0, E._)(e.state),
                    d = l.searchQuery.length > 0,
                    h = (0, w.a)("(max-width: 768px)"),
                    u = d ? l.conversationResults.asJsReadonlyArrayView() : [...(l.pinnedPreviews?.asJsReadonlyArrayView() ?? []), ...(l.unpinnedPreviews?.asJsReadonlyArrayView() ?? [])],
                    { showDebugOptions: P } = (0, p.XE)(),
                    I = l.messageResults?.asJsReadonlyArrayView() ?? [];
                (0, k.e)(e.toasts);
                const z = u.some((e) => e.isUnreadByMe);
                (0, c.useEffect)(() => {
                    l.isLoadingConversations || (0, D.c)();
                }, [l.isLoadingConversations]);
                const U = () => {
                        e.onEvent(new B.SearchQueryChanged(""));
                    },
                    T = (0, p.tc)("dashMenuButton"),
                    $ = (0, c.useCallback)((n) => e.observeTypingIndicator(n), [e]);
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)(S.g, {
                            className: "flex flex-col min-h-dvh md:h-dvh border-r relative w-full",
                            children: [
                                (0, t.jsxs)("header", {
                                    className: "flex flex-col",
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: "flex items-center justify-between py-2 px-4 h-16",
                                            children: [
                                                (0, t.jsxs)("div", { className: "flex items-center gap-2", children: [h && T, (0, t.jsx)(o.x, { weight: "bold", size: "headline1", children: r("Chats") })] }),
                                                l.showConnectionIndicator && (0, t.jsx)(L, { connectionState: l.showConnectionIndicator }),
                                                (0, t.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        l.isLoadingConversations && (0, t.jsx)("div", { className: "w-5", children: (0, t.jsx)(i.P, { size: "small" }) }),
                                                        P && (0, t.jsx)(N.Z, {}),
                                                        (0, t.jsx)(v.z, {
                                                            icon: (0, t.jsx)(x.Z, {}),
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(B.FloatingActionButtonClicked);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        l.isLoadingConversations
                                            ? (0, t.jsxs)("div", { className: "flex flex-col gap-2 justify-center items-center", children: [h && (0, t.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", className: "animate-pulse", children: r("Loading conversation history…") }), (0, t.jsx)(b.P, {})] })
                                            : (0, t.jsx)(t.Fragment, {
                                                  children: (0, t.jsx)("div", {
                                                      className: "px-4 py-1",
                                                      children: (0, t.jsx)(g._, {
                                                          placeholder: r("Search"),
                                                          value: l.searchQuery ?? "",
                                                          onChange: (n) => {
                                                              e.onEvent(new B.SearchQueryChanged(n.target.value));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Escape" === e.key && U();
                                                          },
                                                          borderRadius: "xLarge",
                                                          className: "bg-gray-0 focus-within:bg-transparent border-gray-50",
                                                          inputClassName: "placeholder:text-gray-700",
                                                          leftContent: (0, t.jsx)(m.Z, { className: "h-5 w-5 text-gray-700 shrink-0" }),
                                                          rightContent: l.searchQuery.length > 0 ? (0, t.jsx)(v.z, { size: "xSmall", variant: "primaryText", className: "shrink-0", onClick: U, children: (0, t.jsx)(o.x, { size: "subtext2", color: "gray700", numberOfLines: 1, children: r("Clear") }) }) : void 0,
                                                      }),
                                                  }),
                                              }),
                                    ],
                                }),
                                !l.isLoadingConversations && (0, t.jsxs)(t.Fragment, { children: [!d && (0, t.jsx)("div", { className: "py-3 px-4", children: (0, t.jsx)(M, { value: l.selectedCategory.name.toLowerCase(), showUnreadPill: z, onEvent: (n) => e.onEvent(n) }) }), d ? (0, t.jsxs)("div", { className: "flex flex-col min-h-0 gap-1 pt-6", children: [u.length > 0 && (0, t.jsxs)("div", { className: "px-4", children: [(0, t.jsx)(o.x, { size: "subtext2", color: "gray700", weight: "bold", children: r("Conversations") }), (0, t.jsx)(C.r, { conversations: u, onEvent: (n) => e.onEvent(n) })] }), I.length > 0 && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("div", { className: "px-4", children: (0, t.jsx)(o.x, { size: "subtext2", color: "gray700", weight: "bold", children: r("Messages") }) }), (0, t.jsx)(f.p, { conversations: I, actionsDialog: null, onEvent: (n) => e.onEvent(n), isSearch: d, observeTypingIndicator: $ })] })] }) : u && u.length > 0 ? (0, t.jsx)(f.p, { conversations: u, actionsDialog: l.showActionsDialog, onEvent: (n) => e.onEvent(n), isSearch: d, observeTypingIndicator: $ }) : (0, t.jsx)(R, {}), l.showBottomDialog instanceof A.PinReminder && (0, t.jsx)(y.Y, { component: e, dialogParams: l.showBottomDialog.params })] }),
                            ],
                        }),
                        s && (0, t.jsx)(_.x, { onVisibilityChange: n }),
                        (0, t.jsx)(j._, { conversationId: l.showConfirmToDeleteDialog, onEvent: (n) => e.onEvent(n) }),
                    ],
                });
            }
            var V = s(379342);
            const W = () => {
                    const [e, n] = (0, c.useState)(null),
                        s = (0, u.n4)(),
                        a = (0, V.s)(),
                        [o, d] = (0, c.useState)(!1);
                    return (
                        (0, c.useEffect)(() => {
                            const e = new r.com.x.export.CancellationSignal(),
                                t = s.conversationListComponent(
                                    new r.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? a.toPinScreen("recovery") : a.toPinScreen("new");
                                        },
                                        (e) => {
                                            a.toConversation(e.id);
                                        },
                                        () => {
                                            d(!0);
                                        },
                                        () => {},
                                        (e) => {
                                            a.toPinScreen("verify", e);
                                        },
                                        () => {},
                                        () => {},
                                        () => {},
                                    ),
                                    e,
                                );
                            return (
                                n(t),
                                () => {
                                    e.cancel();
                                }
                            );
                        }, [s, a]),
                        null === e ? (0, t.jsx)(S.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh  w-full", children: (0, t.jsx)(i.P, {}) }) : (0, t.jsx)(l.S, { children: (0, t.jsx)(Q, { component: e, setShowNewDM: d, showNewDM: o }) })
                    );
                },
                Q = ({ component: e, setShowNewDM: n, showNewDM: s }) => {
                    const r = (0, d.U)().id,
                        c = void 0 === r || "" === r,
                        l = (0, E._)(e.state),
                        { t: u } = (0, a.$G)();
                    return l.isInitializing ? (0, t.jsx)(S.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh w-full", children: (0, t.jsx)(i.P, {}) }) : (0, t.jsxs)("div", { className: "@container flex min-h-dvh md:h-dvh w-full", children: [(0, t.jsx)("div", { className: (c ? "block" : "hidden") + " @narrow:block w-full @narrow:w-[35%]", children: (0, t.jsx)(F, { component: e, setShowNewDM: n, showNewDM: s }) }), (0, t.jsx)("div", { className: (c ? "hidden" : "block") + " @narrow:block w-full @narrow:w-[65%]", children: l.isLoadingConversations ? (0, t.jsx)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: (0, t.jsx)("div", { className: "text-[76px] mb-10", children: (0, t.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", className: "animate-pulse", children: u("Loading conversation history…") }) }) }) : (0, t.jsx)(h.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-97c99e35.606713ca.js.map
