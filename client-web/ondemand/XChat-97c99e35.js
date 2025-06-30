"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-97c99e35"],
    {
        155369: (e, s, n) => {
            n.d(s, { Us: () => I, Iv: () => k, n4: () => E });
            var t = n(552322),
                r = n(159603),
                i = n(202784),
                a = n(849170),
                o = n(431882),
                c = n(84504),
                l = n(858108),
                d = n(664147);
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
            var u = n(346598),
                x = n(842898),
                m = n(446368),
                v = n(38891),
                g = n(889906),
                w = n(264531);
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
            var f = n(565991),
                j = n(490381);
            const b = r.kotlin.collections.KtList,
                y = !1,
                _ = 800,
                C = (0, i.createContext)(void 0),
                N = "undefined" == typeof window;
            let S;
            function E() {
                const e = (0, i.useContext)(C);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function k() {
                return S ? S.clearOnLogout() : Promise.resolve();
            }
            function D(e, s, t, { defaultUserDisplayNameProvider: i, accessibilityDescriptionBuilder: m }, v) {
                const g = (0, d.Tr)(),
                    j = (0, c.n5)();
                return new r.com.x.dms.WebDmObjectGraph(
                    r.com.x.models.UserIdentifier.ofString(j),
                    (function () {
                        const e = new h(new URL(n.p + n.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), n.b), { type: void 0 }).createWorker();
                        (e.onerror = (e) => {}), (0, f.j)(e);
                        return async () =>
                            new Promise((s, n) => {
                                (e.onmessage = (t) => {
                                    const { data: r } = t;
                                    "init_1" === r.id && (r.error ? n(new Error(`Database initialization failed: ${r.error}`)) : s(e));
                                }),
                                    e.postMessage({ action: "init_db", userId: (0, c.n5)(), id: "init_1" });
                            });
                    })(),
                    P,
                    (0, l.G)(),
                    i,
                    m,
                    a._i,
                    (s, n) => {
                        (0, x.S)(s.value.toString(), e).then((e) => {
                            if (!e) return void n(new r.com.x.dms.LoadPostResult.OtherFailure());
                            const s = new r.com.x.dms.LoadPostResult.Success(e);
                            n(s);
                        });
                    },
                    async function () {
                        return b.fromJsArray([]);
                    },
                    (e, n, t, r, i) => {
                        s.scribe({ client: "m5", page: e ?? void 0, section: n ?? void 0, component: t ?? void 0, element: r ?? void 0, action: i ?? void 0 });
                    },
                    (e, s, n) => {
                        o.kg.error(`xchat ${e} ${n}`, s ?? void 0);
                    },
                    new r.com.x.dms.WebOptions(L(w.B$.INFO), L(t), !1, !1, t === w.B$.DEBUG),
                    g,
                    new u.V(),
                    new p(v),
                    y,
                    _,
                );
            }
            function P() {
                return new Promise((e) => {
                    const s = new h(new URL(n.p + n.u("node_modules_x-clients_features_dist_dms_fs_worker_js"), n.b), { type: void 0 }).createWorker();
                    (s.onerror = (e) => {}), e(s);
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
                const s = (0, g.useRelayEnvironment)(),
                    n = (0, m.z$)(),
                    r = (0, w.xq)(),
                    i = (0, v.z)(),
                    a = (0, j.I)();
                return S || (S = D(s, n, r, a, i)), (0, t.jsx)(C.Provider, { value: S, children: e });
            }
        },
        92184: (e, s, n) => {
            n.d(s, { p: () => Q });
            var t = n(552322),
                r = n(159603),
                i = n(455091),
                a = n(193686),
                o = n(332161),
                c = n(202784),
                l = n(607499),
                d = n(727071),
                h = n(633435),
                u = n(155369),
                x = n(691826),
                m = n(447742),
                v = n(993165),
                g = n(687521),
                w = n(3577),
                p = n(264531),
                f = n(238750),
                j = n(155733),
                b = n(450683),
                y = n(897995),
                _ = n(984713),
                C = n(910299),
                N = n(70625),
                S = n(671889),
                E = n(533476),
                k = n(658358),
                D = n(565991),
                P = n(664147),
                L = n(955504);
            const I = ({ connectionState: e }) => {
                const { connectionStateText: s, iconComponent: n } = ((e) => {
                    let s,
                        n = "";
                    switch (e) {
                        case r.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            (s = (0, t.jsx)(a.P, {})), (n = "Connecting");
                            break;
                        case r.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            (s = (0, t.jsx)(L.Z, { className: "text-red-500" })), (n = "Disconnected");
                            break;
                        case r.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            n = "Blocked update your app";
                    }
                    return { connectionStateText: n, iconComponent: s };
                })(e);
                return s ? (0, t.jsxs)("div", { className: "flex items-center gap-2", children: [n && (0, t.jsx)("div", { children: n }), (0, t.jsx)(o.x, { weight: "medium", children: s })] }) : null;
            };
            var R = n(788452);
            function z() {
                const { t: e } = (0, i.$G)();
                return (0, t.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, t.jsx)("div", { className: "text-[76px] mb-10", children: (0, t.jsx)(R.Z, { className: "rotate-[-8.29deg]" }) }), (0, t.jsx)(o.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, t.jsx)(o.x, { color: "gray700", children: e("Message someone") })] });
            }
            var T = n(38891),
                U = n(322506),
                O = n(476865);
            const M = r.com.x.dms.convlist.ConversationListEvent,
                A = r.com.x.dms.ConvListCategory;
            function G({ value: e, children: s, href: n, onEvent: r }) {
                const i = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-body font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    a = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-body leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-blue-500 data-[state=active]:hover:bg-blue-600 data-[state=active]:active:bg-blue-600 data-[state=active]:text-white data-[state=active]:font-[500] data-[state=active]:shadow-none",
                    o = (e) => {
                        let s;
                        switch (e) {
                            case "all":
                                s = A.All;
                                break;
                            case "unread":
                                s = A.Unread;
                                break;
                            case "groups":
                                s = A.Groups;
                                break;
                            case "unencrypted":
                                return;
                        }
                        r(new M.CategoryPillClicked(s));
                    };
                return n ? (0, t.jsx)(O.SP, { asChild: !0, value: e, onClick: () => o(e), children: (0, t.jsx)(U.r, { href: n, className: `${i} ${a}`, children: s }) }) : (0, t.jsx)(O.SP, { value: e, className: `${i} ${a}`, onClick: () => o(e), children: s });
            }
            function $({ value: e, className: s, onEvent: n, showUnreadPill: r, ...a }) {
                const { t: o } = (0, i.$G)(),
                    c = (0, T.z)().isTrue("xchat_enable_inbox_pills");
                return (0, t.jsx)(O.mQ, { value: e, className: s, ...a, children: (0, t.jsxs)(O.dr, { className: "bg-transparent p-0 gap-3", children: [(0, t.jsx)(G, { value: "all", onEvent: n, children: o("All") }), c && (0, t.jsxs)(t.Fragment, { children: [r && (0, t.jsx)(G, { value: "unread", onEvent: n, children: o("Unread") }), (0, t.jsx)(G, { value: "groups", onEvent: n, children: o("Groups") })] }), (0, t.jsx)(G, { value: "unencrypted", onEvent: n, href: "https://x.com/messages", children: o("Unencrypted") })] }) });
            }
            const B = r.com.x.dms.InboxBottomDialog,
                F = r.com.x.dms.convlist.ConversationListEvent;
            function V({ component: e, setShowNewDM: s, showNewDM: n }) {
                const { t: r } = (0, i.$G)(),
                    l = (0, E._)(e.state),
                    d = l.searchQuery.length > 0,
                    h = (0, w.a)("(max-width: 768px)"),
                    u = d ? l.conversationResults.asJsReadonlyArrayView() : [...(l.pinnedPreviews?.asJsReadonlyArrayView() ?? []), ...(l.unpinnedPreviews?.asJsReadonlyArrayView() ?? [])],
                    { showDebugOptions: L } = (0, p.XE)(),
                    R = l.messageResults?.asJsReadonlyArrayView() ?? [],
                    T = (0, P.Tr)();
                (0, k.e)(e.toasts);
                const U = u.some((e) => e.isUnreadByMe);
                (0, c.useEffect)(() => {
                    l.isLoadingConversations || (0, D.c)();
                }, [l.isLoadingConversations]);
                const O = () => {
                        e.onEvent(new F.SearchQueryChanged(""));
                    },
                    M = (0, p.tc)("dashMenuButton"),
                    A = (0, c.useCallback)((s) => e.observeTypingIndicator(s), [e]);
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
                                                (0, t.jsxs)("div", { className: "flex items-center gap-2", children: [h && M, (0, t.jsx)(o.x, { weight: "bold", size: "headline1", children: r("Chats") })] }),
                                                l.showConnectionIndicator && (0, t.jsx)(I, { connectionState: l.showConnectionIndicator }),
                                                (0, t.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        l.isLoadingConversations && !T && (0, t.jsx)("div", { className: "w-5", children: (0, t.jsx)(a.P, { size: "small" }) }),
                                                        L && (0, t.jsx)(N.Z, {}),
                                                        (0, t.jsx)(v.z, {
                                                            icon: (0, t.jsx)(x.Z, {}),
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(F.FloatingActionButtonClicked);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        l.isLoadingConversations && !T
                                            ? (0, t.jsxs)("div", { className: "flex flex-col gap-2 justify-center items-center", children: [h && (0, t.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", className: "animate-pulse", children: r("Loading conversation history…") }), (0, t.jsx)(b.P, {})] })
                                            : (0, t.jsx)(t.Fragment, {
                                                  children: (0, t.jsx)("div", {
                                                      className: "px-4 py-1",
                                                      children: (0, t.jsx)(g._, {
                                                          placeholder: r("Search"),
                                                          value: l.searchQuery ?? "",
                                                          onChange: (s) => {
                                                              e.onEvent(new F.SearchQueryChanged(s.target.value));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Escape" === e.key && O();
                                                          },
                                                          borderRadius: "xLarge",
                                                          className: "bg-gray-0 focus-within:bg-transparent border-gray-50",
                                                          inputClassName: "placeholder:text-gray-700",
                                                          leftContent: (0, t.jsx)(m.Z, { className: "h-5 w-5 text-gray-700 shrink-0" }),
                                                          rightContent: l.searchQuery.length > 0 ? (0, t.jsx)(v.z, { size: "xSmall", variant: "primaryText", className: "shrink-0", onClick: O, children: (0, t.jsx)(o.x, { size: "subtext2", color: "gray700", numberOfLines: 1, children: r("Clear") }) }) : void 0,
                                                      }),
                                                  }),
                                              }),
                                    ],
                                }),
                                (!l.isLoadingConversations || T) && (0, t.jsxs)(t.Fragment, { children: [!d && (0, t.jsx)("div", { className: "py-3 px-4", children: (0, t.jsx)($, { value: l.selectedCategory.name.toLowerCase(), showUnreadPill: U, onEvent: (s) => e.onEvent(s) }) }), d ? (0, t.jsxs)("div", { className: "flex flex-col min-h-0 gap-1 pt-6", children: [u.length > 0 && (0, t.jsxs)("div", { className: "px-4", children: [(0, t.jsx)(o.x, { size: "subtext2", color: "gray700", weight: "bold", children: r("Conversations") }), (0, t.jsx)(C.r, { conversations: u, onEvent: (s) => e.onEvent(s) })] }), R.length > 0 && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("div", { className: "px-4", children: (0, t.jsx)(o.x, { size: "subtext2", color: "gray700", weight: "bold", children: r("Messages") }) }), (0, t.jsx)(f.p, { conversations: R, actionsDialog: null, onEvent: (s) => e.onEvent(s), isSearch: d, observeTypingIndicator: A })] })] }) : u && u.length > 0 ? (0, t.jsx)(f.p, { conversations: u, actionsDialog: l.showActionsDialog, onEvent: (s) => e.onEvent(s), isSearch: d, observeTypingIndicator: A }) : (0, t.jsx)(z, {}), l.showBottomDialog instanceof B.PinReminder && (0, t.jsx)(y.Y, { component: e, dialogParams: l.showBottomDialog.params })] }),
                            ],
                        }),
                        n && (0, t.jsx)(_.x, { onVisibilityChange: s }),
                        (0, t.jsx)(j._, { conversationId: l.showConfirmToDeleteDialog, onEvent: (s) => e.onEvent(s) }),
                    ],
                });
            }
            var W = n(379342);
            const Q = () => {
                    const [e, s] = (0, c.useState)(null),
                        n = (0, u.n4)(),
                        i = (0, W.s)(),
                        [o, d] = (0, c.useState)(!1);
                    return (
                        (0, c.useEffect)(() => {
                            const e = new r.com.x.export.CancellationSignal(),
                                t = n.conversationListComponent(
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
                                s(t),
                                () => {
                                    e.cancel();
                                }
                            );
                        }, [n, i]),
                        null === e ? (0, t.jsx)(S.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh  w-full", children: (0, t.jsx)(a.P, {}) }) : (0, t.jsx)(l.S, { children: (0, t.jsx)(J, { component: e, setShowNewDM: d, showNewDM: o }) })
                    );
                },
                J = ({ component: e, setShowNewDM: s, showNewDM: n }) => {
                    const r = (0, d.U)().id,
                        c = void 0 === r || "" === r,
                        l = (0, E._)(e.state),
                        { t: u } = (0, i.$G)(),
                        x = l.isInitializing,
                        m = (0, P.Tr)();
                    return x ? (0, t.jsx)(S.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh w-full", children: (0, t.jsx)(a.P, {}) }) : (0, t.jsxs)("div", { className: "@container flex min-h-dvh md:h-dvh w-full", children: [(0, t.jsx)("div", { className: (c ? "block" : "hidden") + " @narrow:block w-full @narrow:w-[35%]", children: (0, t.jsx)(V, { component: e, setShowNewDM: s, showNewDM: n }) }), (0, t.jsx)("div", { className: (c ? "hidden" : "block") + " @narrow:block w-full @narrow:w-[65%]", children: !l.isLoadingConversations || m ? (0, t.jsx)(h.Q, {}) : (0, t.jsx)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: (0, t.jsx)("div", { className: "text-[76px] mb-10", children: (0, t.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", className: "animate-pulse", children: u("Loading conversation history…") }) }) }) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-97c99e35.3437ee7a.js.map
