"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-ad094e61"],
    {
        759746: (e, t, s) => {
            s.d(t, { M: () => o });
            var n = s(552322),
                r = s(475694),
                a = s(350311);
            const i = ({ firstUrl: e, resolution: t, secondUrl: s, size: r = "xxLarge" }) => {
                    const i = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "33.33%";
                                case "xxLarge":
                                    return "16px";
                                default:
                                    return "8px";
                            }
                        })(r),
                        o = ((e) => ("fill" === e ? "2%" : "1px"))(r),
                        l = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "fill";
                                case "xxLarge":
                                    return "large";
                                default:
                                    return "medium";
                            }
                        })(r);
                    return (0, n.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${i} - ${o} * 2)` }, children: [(0, n.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: o }, children: (0, n.jsx)(a.s, { url: e, size: l, resolution: t }) }), (0, n.jsx)("div", { style: { marginLeft: `calc(-${i} - ${o} * 2)`, marginTop: `calc(-${i} + ${o} * 2)`, marginBottom: i }, children: (0, n.jsx)(a.s, { url: s, size: l, resolution: t }) })] });
                },
                o = ({ avatarSize: e, isInlineFacepile: t, resolution: s, users: o }) => {
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
                    if (t) {
                        if (o.length >= 2) return (0, n.jsx)(i, { size: l, firstUrl: o[0]?.profileImageUrl, resolution: s, secondUrl: o[1]?.profileImageUrl });
                        if (1 === o.length) return (0, n.jsx)(a.s, { url: o[0]?.profileImageUrl, size: e, resolution: s });
                    }
                    const c = o.slice(0, 4).map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return (0, n.jsx)(r.o, { urls: c, size: e, resolution: s });
                };
        },
        32161: (e, t, s) => {
            s.d(t, { x: () => l });
            var n = s(552322),
                r = s(159603),
                a = s(350311);
            const i = ({ avatar: e, avatarSize: t, onCustomAvatarNeedsResolving: s }) => (e instanceof r.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, n.jsx)(a.s, { url: e.uri, size: t }) : (e instanceof r.com.x.dms.model.MediaUriState.AvatarNeedsResolving && s(e), (0, n.jsx)(a.s, { size: t })));
            var o = s(759746);
            const l = ({ avatarSize: e, isInlineFacepile: t, onCustomAvatarNeedsResolving: s, titleState: l }) => {
                if (l instanceof r.com.x.dms.model.DmTitleState.OneToOne) return (0, n.jsx)(a.s, { url: l.otherUser?.profileImageUrl, size: e });
                if (l instanceof r.com.x.dms.model.DmTitleState.Group) {
                    if (l.avatarType instanceof r.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, n.jsx)(i, { avatar: l.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: s });
                    if (l.avatarType instanceof r.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, n.jsx)(o.M, { avatarSize: e, isInlineFacepile: t, users: l.avatarType.users.asJsReadonlyArrayView() });
                }
                return (0, n.jsx)(a.s, { size: e });
            };
        },
        350311: (e, t, s) => {
            s.d(t, { j: () => a, s: () => i });
            var n = s(552322),
                r = s(26429);
            const a = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                i = ({ url: e, size: t, resolution: s = "200x200" }) => (0, n.jsx)(r.q, { url: e || a, size: t, resolution: s });
        },
        611463: (e, t, s) => {
            s.d(t, { U: () => z, n: () => S });
            var n = s(552322),
                r = s(159603),
                a = s(202784),
                i = s(781441),
                o = s(84504),
                l = s(664147);
            class c {
                url;
                options;
                constructor(e, t) {
                    (this.url = new URL(e.href.replace("https://abs.twimg.com", "https://x.com/i/static"))), (this.options = t);
                }
                createWorker() {
                    return new Worker(this.url, this.options);
                }
            }
            var d = s(8974),
                m = s(303676),
                u = s(928220),
                x = s(879922),
                v = s(196594);
            const h = r.com.x.dms.util;
            class p extends r.com.x.dms.util.EntityParser {
                doParse(e) {
                    return r.kotlin.collections.KtList.fromJsArray([...(0, d.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Email(...e)), ...(0, m.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Hashtag(...e)), ...(0, u.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Cashtag(...e)), ...(0, x.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Mention(...e)), ...(0, v.Z)(e).map(({ indices: e }) => new h.ParsedEntity.Url(...e))]);
                }
            }
            var f = s(842898),
                g = s(889906),
                w = s(446368),
                j = s(264531);
            const y = r.kotlin.collections.KtList,
                b = (0, a.createContext)(void 0),
                N = "undefined" == typeof window;
            let C;
            function S() {
                const e = (0, a.useContext)(b);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function _(e, t, n) {
                const a = "true" === localStorage.getItem(l.e) || !1,
                    d = (0, o.n5)();
                const m = (function () {
                    const e = new c(new URL(s.p + s.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), s.b), { type: void 0 }).createWorker();
                    return (e.onerror = (e) => {}), e;
                })();
                m.postMessage({ action: "init_db", dbName: `${(0, o.n5)()}_chat`, id: "init_1" });
                const u = (function (e) {
                    return "DEBUG" === e ? r.com.x.dms.LogLevel.DEBUG : "INFO" === e ? r.com.x.dms.LogLevel.INFO : r.com.x.dms.LogLevel.ERROR;
                })(n);
                return new r.com.x.dms.WebDmObjectGraph(
                    r.com.x.models.UserIdentifier.ofString(d),
                    m,
                    i._,
                    (t, s) => {
                        (0, f.S)(t.value.toString(), e).then((e) => {
                            if (!e) return void s(new r.com.x.dms.LoadPostResult.OtherFailure());
                            const t = new r.com.x.dms.LoadPostResult.Success(e);
                            s(t);
                        });
                    },
                    async function () {
                        return y.fromJsArray([]);
                    },
                    (e, s, n, r, a) => {
                        t.scribe({ client: "m5", page: e ?? void 0, section: s ?? void 0, component: n ?? void 0, element: r ?? void 0, action: a ?? void 0 });
                    },
                    new r.com.x.dms.WebOptions(!1, !0, !1, u),
                    a,
                    new p(),
                );
            }
            function z({ children: e }) {
                if (N) return;
                const t = (0, g.useRelayEnvironment)(),
                    s = (0, w.z$)(),
                    r = (0, j.xq)();
                return C || (C = _(t, s, r)), (0, n.jsx)(b.Provider, { value: C, children: e });
            }
        },
        92184: (e, t, s) => {
            s.d(t, { p: () => k });
            var n = s(552322),
                r = s(727071),
                a = s(159603),
                i = s(962996),
                o = s(503371),
                l = s(941204),
                c = s(702024),
                d = s(436059),
                m = s(887390),
                u = s(174254),
                x = s(984713),
                v = s(533476);
            function h() {
                return (0, n.jsxs)("div", { children: [(0, n.jsx)(l.x, { weight: "bold", children: "No chats yet" }), (0, n.jsx)(l.x, { color: "gray700", children: "Start chatting with end-to-end encryption" })] });
            }
            var p = s(264531),
                f = s(897995),
                g = s(334038);
            const w = ({ connectionState: e }) => {
                const t = ((e) => {
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
                return t ? (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("div", { children: (0, n.jsx)(c.P, {}) }), (0, n.jsx)(l.x, { weight: "medium", children: t })] }) : null;
            };
            var j = s(455091),
                y = s(816778);
            function b({ value: e, children: t, href: s }) {
                const r = "inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    a = "bg-transparent border border-gray-100 text-gray-700 font-normal outline-primary !rounded-full px-3 text-[15px] leading-[20px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50 data-[state=active]:border-transparent data-[state=active]:bg-primary/10 data-[state=active]:hover:bg-primary/15 data-[state=active]:active:bg-primary/15 data-[state=active]:text-primary data-[state=active]:font-[500] data-[state=active]:shadow-none";
                return s ? (0, n.jsx)(y.SP, { asChild: !0, value: e, children: (0, n.jsx)("a", { href: s, target: "_blank", rel: "noopener noreferrer", className: `${r} ${a}`, children: t }) }) : (0, n.jsx)(y.SP, { value: e, className: `${r} ${a}`, children: t });
            }
            function N({ value: e, className: t, ...s }) {
                return (0, n.jsx)(y.mQ, { value: e, className: t, ...s, children: (0, n.jsxs)(y.dr, { className: "bg-transparent p-0 gap-3", children: [(0, n.jsx)(b, { value: "all", children: "All" }), (0, n.jsx)(b, { value: "unencrypted", href: "https://x.com/messages", children: "Unencrypted" })] }) });
            }
            const C = a.com.x.dms.convlist,
                S = a.com.x.dms.InboxBottomDialog;
            function _({ component: e, setShowNewDM: t, showNewDM: s }) {
                const { t: r } = (0, j.$G)(),
                    a = (0, v._)(e.state),
                    y = a.searchQuery.length > 0,
                    b = y ? a.conversationResults.asJsReadonlyArrayView() : a.previews?.asJsReadonlyArrayView(),
                    { showDebugOptions: _ } = (0, p.XE)();
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
                                                (0, n.jsx)(l.x, { weight: "bold", size: "headline1", children: r("Chats") }),
                                                a.showConnectionIndicator && (0, n.jsx)(w, { connectionState: a.showConnectionIndicator }),
                                                (0, n.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        a.isLoadingConversations && (0, n.jsx)("div", { className: "w-5", children: (0, n.jsx)(c.P, { size: "small" }) }),
                                                        _ && (0, n.jsx)(g.Z, {}),
                                                        (0, n.jsx)(d.z, {
                                                            className: "-mr-2",
                                                            icon: (0, n.jsx)(i.Z, { className: "h-5 w-5" }),
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(C.ConversationListEvent.FloatingActionButtonClicked);
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
                                                value: a.searchQuery ?? "",
                                                onChange: (t) => {
                                                    e.onEvent(new C.ConversationListEvent.SearchQueryChanged(t.target.value));
                                                },
                                                borderRadius: "xLarge",
                                                className: "bg-gray-0 focus-within:bg-transparent",
                                                inputClassName: "placeholder:text-gray-700",
                                                leftContent: (0, n.jsx)(o.Z, { className: "h-5 w-5 text-gray-700" }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: "py-3 px-4", children: (0, n.jsx)(N, { value: "all" }) }),
                                b && b.length > 0 ? (0, n.jsx)(u.p, { conversations: b, onEvent: (t) => e.onEvent(t), isSearch: y }) : !y && (0, n.jsx)(h, {}),
                                a.showBottomDialog instanceof S.PinReminder && (0, n.jsx)(f.Y, { component: e, dialogParams: a.showBottomDialog.params }),
                            ],
                        }),
                        s && (0, n.jsx)(x.x, { onVisibilityChange: t }),
                    ],
                });
            }
            var z = s(292317),
                D = s(202784),
                L = s(611463),
                P = s(379342),
                E = s(607499);
            const k = () => {
                    const [e, t] = (0, D.useState)(null),
                        s = (0, L.n)(),
                        r = (0, P.s)(),
                        [i, o] = (0, D.useState)(!1);
                    return (
                        (0, D.useEffect)(() => {
                            const e = new a.com.x.export.CancellationSignal(),
                                n = s.conversationListComponent(
                                    new a.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? r.toPinScreen("recovery") : r.toPinScreen("new");
                                        },
                                        (e) => {
                                            r.toConversation(e.id);
                                        },
                                        () => {
                                            o(!0);
                                        },
                                        () => {},
                                        (e) => {
                                            r.toPinScreen("verify", e);
                                        },
                                        () => {},
                                        () => {},
                                    ),
                                    e,
                                );
                            return (
                                t(n),
                                () => {
                                    e.cancel();
                                }
                            );
                        }, [s, r]),
                        null === e ? (0, n.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, n.jsx)(c.P, {}) }) : (0, n.jsx)(E.S, { children: (0, n.jsx)(U, { component: e, setShowNewDM: o, showNewDM: i }) })
                    );
                },
                U = ({ component: e, setShowNewDM: t, showNewDM: s }) => {
                    const a = (0, r.U)().id,
                        i = void 0 === a || "" === a;
                    return (0, v._)(e.state).isInitializing ? (0, n.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, n.jsx)(c.P, {}) }) : (0, n.jsxs)("div", { className: "flex w-full", children: [(0, n.jsx)("div", { className: (i ? "block" : "hidden") + " md:block w-full md:w-[35%]", children: (0, n.jsx)(_, { component: e, setShowNewDM: t, showNewDM: s }) }), (0, n.jsx)("div", { className: (i ? "hidden" : "block") + " md:block w-full md:w-[65%]", children: (0, n.jsx)(z.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-ad094e61.e8c9203a.js.map
