"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-53e61bc3"],
    {
        870392: (e, t, n) => {
            n.d(t, { $: () => g });
            var s = n(552322),
                a = n(159603),
                i = n(455091),
                o = n(941204),
                r = n(887390),
                c = n(436059),
                l = n(164695),
                d = n(202784),
                m = n(32161),
                x = n(368301),
                u = n(379342),
                h = n(210071),
                v = n(533476),
                p = n(858108);
            const w = a.com.x.dms.editgroup;
            function g({ convId: e }) {
                const t = (0, h.$)(),
                    [n, i] = (0, d.useState)(null),
                    o = (0, x.n)(),
                    r = (0, u.s)();
                return (
                    (0, d.useEffect)(() => {
                        const t = new a.com.x.export.CancellationSignal(),
                            n = o.editGroupMetadataComponent(
                                t,
                                e,
                                new w.EditGroupMetadataCallbacks(() => {
                                    r.toConversationInfo(e.id);
                                }),
                            );
                        return (
                            i(n),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [o, e, r]),
                    n ? (0, s.jsx)(f, { isOpen: t, component: n }) : null
                );
            }
            const f = ({ isOpen: e, component: t }) => {
                const { t: n } = (0, i.$G)(),
                    a = (0, v._)(t.state),
                    x = (0, d.useRef)(null);
                (0, d.useEffect)(() => {
                    a.metadata?.title?.title && t.handleEvent(new w.EditGroupMetadataEvent.TitleTextUpdated(a.metadata.title.title));
                }, [a.metadata?.title?.title, t]);
                const u = (0, d.useCallback)(() => {
                        t.handleEvent(w.EditGroupMetadataEvent.SaveButtonClicked);
                    }, [t]),
                    h = (0, d.useCallback)(() => {
                        t.handleEvent(w.EditGroupMetadataEvent.BackButtonClicked);
                    }, [t]);
                return (0, s.jsx)(l.Vq, {
                    open: e,
                    onOpenChange: h,
                    children: (0, s.jsxs)(l.cZ, {
                        className: "max-w-md",
                        children: [
                            (0, s.jsx)(l.fK, { children: (0, s.jsx)(l.$N, { children: n("Edit Group") }) }),
                            (0, s.jsxs)("div", {
                                className: "flex flex-col items-center gap-6 py-4",
                                children: [
                                    (0, s.jsx)("div", {
                                        className: "relative group",
                                        children: (0, s.jsx)("div", {
                                            className: "w-24 h-24",
                                            children:
                                                a.metadata?.title &&
                                                (0, s.jsx)(m.x, {
                                                    avatarSize: "fill",
                                                    titleState: a.metadata.title,
                                                    onCustomAvatarNeedsResolving: (e) => {
                                                        p.G || t.handleEvent(new w.EditGroupMetadataEvent.ResolveCustomAvatar(e));
                                                    },
                                                    isInlineFacepile: !0,
                                                }),
                                        }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", className: "mb-2", children: n("Group Name") }),
                                            (0, s.jsx)(r._, {
                                                ref: x,
                                                value: a.currentTitle,
                                                onChange: (e) => t.handleEvent(new w.EditGroupMetadataEvent.TitleTextUpdated(e.target.value)),
                                                onKeyDown: (e) => {
                                                    "Enter" === e.key && a.currentTitle.trim() && (e.preventDefault(), u());
                                                },
                                                maxLength: 50,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(l.cN, { children: [(0, s.jsx)(c.z, { variant: "mutedText", onClick: h, children: n("Cancel") }), (0, s.jsx)(c.z, { variant: "brandFilled", onClick: u, disabled: !a.currentTitle.trim(), children: n("Save") })] }),
                        ],
                    }),
                });
            };
        },
        368301: (e, t, n) => {
            n.d(t, { U: () => D, n: () => S });
            var s = n(552322),
                a = n(159603),
                i = n(202784),
                o = n(781441),
                r = n(84504),
                c = n(858108),
                l = n(664147);
            class d {
                url;
                options;
                constructor(e, t) {
                    (this.url = new URL(e.href.replace("https://abs.twimg.com", "https://x.com/i/static"))), (this.options = t);
                }
                createWorker() {
                    return new Worker(this.url, this.options);
                }
            }
            var m = n(8974),
                x = n(303676),
                u = n(928220),
                h = n(879922),
                v = n(196594);
            const p = a.com.x.dms.util;
            class w extends a.com.x.dms.util.EntityParser {
                doParse(e) {
                    return a.kotlin.collections.KtList.fromJsArray([...(0, m.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Email(...e)), ...(0, x.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Hashtag(...e)), ...(0, u.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Cashtag(...e)), ...(0, h.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Mention(...e)), ...(0, v.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Url(...e))]);
                }
            }
            var g = n(842898),
                f = n(889906),
                j = n(446368),
                b = n(264531);
            class y extends a.com.x.dms.XChatFeatureSwitches {}
            const N = a.kotlin.collections.KtList,
                C = (0, i.createContext)(void 0),
                E = "undefined" == typeof window;
            let _;
            function S() {
                const e = (0, i.useContext)(C);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function k(e, t, s, i) {
                const m = "true" === localStorage.getItem(l.e) || !1,
                    x = (0, r.n5)();
                return new a.com.x.dms.WebDmObjectGraph(
                    a.com.x.models.UserIdentifier.ofString(x),
                    i
                        ? (function () {
                              const e = new d(new URL(n.p + n.u("node_modules_x-clients_features_dist_dms_sqlite2_worker_js"), n.b), { type: void 0 }).createWorker();
                              (e.onerror = (e) => {}),
                                  window.addEventListener("xchat_database_backup_event", () => {
                                      e.postMessage({ action: "backup_db", userId: (0, r.n5)(), id: "backup_1" });
                                  }),
                                  window.addEventListener("xchat_before_unload_event", () => {
                                      e.postMessage({ action: "close", id: "close_1" });
                                  });
                              return async () =>
                                  new Promise((t, n) => {
                                      (e.onmessage = (s) => {
                                          const { data: a } = s;
                                          "init_1" === a.id && (a.error ? n(new Error(`Database initialization failed: ${a.error}`)) : t(e));
                                      }),
                                          e.postMessage({ action: "init_db", userId: (0, r.n5)(), id: "init_1" });
                                  });
                          })()
                        : (function () {
                              const e = new d(new URL(n.p + n.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), n.b), { type: void 0 }).createWorker();
                              return (e.onerror = (e) => {}), e.postMessage({ action: "init_db", dbName: `${(0, r.n5)()}_chat`, id: "init_1" }), () => new Promise((t) => t(e));
                          })(),
                    o._,
                    (t, n) => {
                        (0, g.S)(t.value.toString(), e).then((e) => {
                            if (!e) return void n(new a.com.x.dms.LoadPostResult.OtherFailure());
                            const t = new a.com.x.dms.LoadPostResult.Success(e);
                            n(t);
                        });
                    },
                    async function () {
                        return N.fromJsArray([]);
                    },
                    (e, n, s, a, i) => {
                        t.scribe({ client: "m5", page: e ?? void 0, section: n ?? void 0, component: s ?? void 0, element: a ?? void 0, action: i ?? void 0 });
                    },
                    new a.com.x.dms.WebOptions(P(b.B$.INFO), (0, c.G)() ? null : P(s), !1),
                    m,
                    new w(),
                    new y(),
                );
            }
            function P(e) {
                return "DEBUG" === e ? a.com.x.dms.LogLevel.DEBUG : "INFO" === e ? a.com.x.dms.LogLevel.INFO : a.com.x.dms.LogLevel.ERROR;
            }
            function D({ children: e }) {
                if (E) return;
                const t = (0, f.useRelayEnvironment)(),
                    n = (0, j.z$)(),
                    a = (0, b.xq)(),
                    i = (0, b.rF)();
                return _ || (_ = k(t, n, a, i)), (0, s.jsx)(C.Provider, { value: _, children: e });
            }
        },
        92184: (e, t, n) => {
            n.d(t, { p: () => O });
            var s = n(552322),
                a = n(159603),
                i = n(702024),
                o = n(202784),
                r = n(607499),
                c = n(727071),
                l = n(203908),
                d = n(368301),
                m = n(439252),
                x = n(447742),
                u = n(941204),
                h = n(436059),
                v = n(887390),
                p = n(174254),
                w = n(984713),
                g = n(533476),
                f = n(455091),
                j = n(788452);
            function b() {
                const { t: e } = (0, f.$G)();
                return (0, s.jsxs)("div", { className: "flex flex-col flex-grow items-center justify-center gap-2", children: [(0, s.jsx)("div", { className: "text-[76px] mb-10", children: (0, s.jsx)(j.Z, { className: "rotate-[-8.29deg]" }) }), (0, s.jsx)(u.x, { weight: "medium", size: "title4", children: e("Empty inbox") }), (0, s.jsx)(u.x, { color: "gray700", children: e("Message someone") })] });
            }
            var y = n(264531),
                N = n(897995),
                C = n(18671),
                E = n(955504);
            const _ = ({ connectionState: e }) => {
                const { connectionStateText: t, iconComponent: n } = ((e) => {
                    let t,
                        n = "";
                    switch (e) {
                        case a.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            (t = (0, s.jsx)(i.P, {})), (n = "Connecting");
                            break;
                        case a.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            (t = (0, s.jsx)(E.Z, { className: "text-red-500" })), (n = "Disconnected");
                            break;
                        case a.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            n = "Blocked update your app";
                    }
                    return { connectionStateText: n, iconComponent: t };
                })(e);
                return t ? (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [n && (0, s.jsx)("div", { children: n }), (0, s.jsx)(u.x, { weight: "medium", children: t })] }) : null;
            };
            var S = n(910299),
                k = n(671889),
                P = n(130844),
                D = n(816778);
            function L({ value: e, children: t, href: n }) {
                const a = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    i = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-[15px] leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-primary/10 data-[state=active]:hover:bg-primary/15 data-[state=active]:active:bg-primary/15 data-[state=active]:text-primary data-[state=active]:font-[500] data-[state=active]:shadow-none";
                return n ? (0, s.jsx)(D.SP, { asChild: !0, value: e, children: (0, s.jsx)(P.r, { href: n, className: `${a} ${i}`, children: t }) }) : (0, s.jsx)(D.SP, { value: e, className: `${a} ${i}`, children: t });
            }
            function M({ value: e, className: t, ...n }) {
                const { t: a } = (0, f.$G)();
                return (0, s.jsx)(D.mQ, { value: e, className: t, ...n, children: (0, s.jsxs)(D.dr, { className: "bg-transparent p-0 gap-3", children: [(0, s.jsx)(L, { value: "all", children: "All" }), (0, s.jsx)(L, { value: "unencrypted", href: "https://x.com/messages", children: a("Classic Inbox") })] }) });
            }
            const G = a.com.x.dms.convlist,
                R = a.com.x.dms.InboxBottomDialog;
            function I({ component: e, setShowNewDM: t, showNewDM: n }) {
                const { t: a } = (0, f.$G)(),
                    o = (0, g._)(e.state),
                    r = o.searchQuery.length > 0,
                    c = r ? o.conversationResults.asJsReadonlyArrayView() : (o.previews?.asJsReadonlyArrayView() ?? []),
                    { showDebugOptions: l } = (0, y.XE)(),
                    d = o.messageResults?.asJsReadonlyArrayView() ?? [];
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(k.g, {
                            className: "flex flex-col min-h-dvh md:h-dvh border-r relative w-full",
                            children: [
                                (0, s.jsxs)("header", {
                                    className: "flex flex-col",
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: "flex items-center justify-between py-2 px-4 h-16",
                                            children: [
                                                (0, s.jsx)(u.x, { weight: "bold", size: "headline1", children: a("Chats") }),
                                                o.showConnectionIndicator && (0, s.jsx)(_, { connectionState: o.showConnectionIndicator }),
                                                (0, s.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        o.isLoadingConversations && (0, s.jsx)("div", { className: "w-5", children: (0, s.jsx)(i.P, { size: "small" }) }),
                                                        l && (0, s.jsx)(C.Z, {}),
                                                        (0, s.jsx)(h.z, {
                                                            className: "-mr-2",
                                                            icon: (0, s.jsx)(m.Z, { className: "h-5 w-5" }),
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(G.ConversationListEvent.FloatingActionButtonClicked);
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
                                                value: o.searchQuery ?? "",
                                                onChange: (t) => {
                                                    e.onEvent(new G.ConversationListEvent.SearchQueryChanged(t.target.value));
                                                },
                                                borderRadius: "xLarge",
                                                className: "bg-gray-0 focus-within:bg-transparent",
                                                inputClassName: "placeholder:text-gray-700",
                                                leftContent: (0, s.jsx)(x.Z, { className: "h-5 w-5 text-gray-700" }),
                                            }),
                                        }),
                                    ],
                                }),
                                !r && (0, s.jsx)("div", { className: "py-3 px-4", children: (0, s.jsx)(M, { value: "all" }) }),
                                r ? (0, s.jsxs)("div", { className: "flex flex-col min-h-0 gap-1 pt-6", children: [c.length > 0 && (0, s.jsxs)("div", { className: "px-4", children: [(0, s.jsx)(u.x, { size: "subtext2", color: "gray700", weight: "bold", children: "Conversations" }), (0, s.jsx)(S.r, { conversations: c, onEvent: (t) => e.onEvent(t) })] }), d.length > 0 && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "px-4", children: (0, s.jsx)(u.x, { size: "subtext2", color: "gray700", weight: "bold", children: "Messages" }) }), (0, s.jsx)(p.p, { conversations: d, onEvent: (t) => e.onEvent(t), isSearch: r })] })] }) : c && c.length > 0 ? (0, s.jsx)(p.p, { conversations: c, onEvent: (t) => e.onEvent(t), isSearch: r }) : (0, s.jsx)(b, {}),
                                o.showBottomDialog instanceof R.PinReminder && (0, s.jsx)(N.Y, { component: e, dialogParams: o.showBottomDialog.params }),
                            ],
                        }),
                        n && (0, s.jsx)(w.x, { onVisibilityChange: t }),
                    ],
                });
            }
            var z = n(379342);
            const O = () => {
                    const [e, t] = (0, o.useState)(null),
                        n = (0, d.n)(),
                        c = (0, z.s)(),
                        [l, m] = (0, o.useState)(!1);
                    return (
                        (0, o.useEffect)(() => {
                            const e = new a.com.x.export.CancellationSignal(),
                                s = n.conversationListComponent(
                                    new a.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? c.toPinScreen("recovery") : c.toPinScreen("new");
                                        },
                                        (e) => {
                                            c.toConversation(e.id);
                                        },
                                        () => {
                                            m(!0);
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
                                t(s),
                                () => {
                                    e.cancel();
                                }
                            );
                        }, [n, c]),
                        null === e ? (0, s.jsx)(k.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh  w-full", children: (0, s.jsx)(i.P, {}) }) : (0, s.jsx)(r.S, { children: (0, s.jsx)($, { component: e, setShowNewDM: m, showNewDM: l }) })
                    );
                },
                $ = ({ component: e, setShowNewDM: t, showNewDM: n }) => {
                    const a = (0, c.U)().id,
                        o = void 0 === a || "" === a;
                    return (0, g._)(e.state).isInitializing ? (0, s.jsx)(k.g, { className: "flex flex-col justify-center min-h-dvh md:h-dvh w-full", children: (0, s.jsx)(i.P, {}) }) : (0, s.jsxs)("div", { className: "@container flex min-h-dvh md:h-dvh w-full", children: [(0, s.jsx)("div", { className: (o ? "block" : "hidden") + " @narrow:block w-full @narrow:w-[35%]", children: (0, s.jsx)(I, { component: e, setShowNewDM: t, showNewDM: n }) }), (0, s.jsx)("div", { className: (o ? "hidden" : "block") + " @narrow:block w-full @narrow:w-[65%]", children: (0, s.jsx)(l.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-53e61bc3.85d5af2a.js.map
