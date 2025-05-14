"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-ad094e61"],
    {
        759746: (e, s, t) => {
            t.d(s, { M: () => a });
            var n = t(552322),
                r = t(789764),
                o = t(350311);
            const i = ({ firstUrl: e, resolution: s, secondUrl: t, size: r = "xxLarge" }) => {
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
                        a = ((e) => ("fill" === e ? "2%" : "1px"))(r),
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
                    return (0, n.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${i} - ${a} * 2)` }, children: [(0, n.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: a }, children: (0, n.jsx)(o.s, { url: e, size: l, resolution: s }) }), (0, n.jsx)("div", { style: { marginLeft: `calc(-${i} - ${a} * 2)`, marginTop: `calc(-${i} + ${a} * 2)`, marginBottom: i }, children: (0, n.jsx)(o.s, { url: t, size: l, resolution: s }) })] });
                },
                a = ({ avatarSize: e, isInlineFacepile: s, resolution: t, users: a }) => {
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
                        if (a.length >= 2) return (0, n.jsx)(i, { size: l, firstUrl: a[0]?.profileImageUrl, resolution: t, secondUrl: a[1]?.profileImageUrl });
                        if (1 === a.length) return (0, n.jsx)(o.s, { url: a[0]?.profileImageUrl, size: e, resolution: t });
                    }
                    const c = a.slice(0, 4).map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return (0, n.jsx)(r.o, { urls: c, size: e, resolution: t });
                };
        },
        32161: (e, s, t) => {
            t.d(s, { x: () => l });
            var n = t(552322),
                r = t(425522),
                o = t(350311);
            const i = ({ avatar: e, avatarSize: s, onCustomAvatarNeedsResolving: t }) => (e instanceof r.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, n.jsx)(o.s, { url: e.uri, size: s }) : (e instanceof r.com.x.dms.model.MediaUriState.AvatarNeedsResolving && t(e), (0, n.jsx)(o.s, { size: s })));
            var a = t(759746);
            const l = ({ avatarSize: e, isInlineFacepile: s, onCustomAvatarNeedsResolving: t, titleState: l }) => {
                if (l instanceof r.com.x.dms.model.DmTitleState.OneToOne) return (0, n.jsx)(o.s, { url: l.otherUser?.profileImageUrl, size: e });
                if (l instanceof r.com.x.dms.model.DmTitleState.Group) {
                    if (l.avatarType instanceof r.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, n.jsx)(i, { avatar: l.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: t });
                    if (l.avatarType instanceof r.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, n.jsx)(a.M, { avatarSize: e, isInlineFacepile: s, users: l.avatarType.users.asJsReadonlyArrayView() });
                }
                return (0, n.jsx)(o.s, { size: e });
            };
        },
        350311: (e, s, t) => {
            t.d(s, { j: () => o, s: () => i });
            var n = t(552322),
                r = t(378364);
            const o = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                i = ({ url: e, size: s, resolution: t = "200x200" }) => (0, n.jsx)(r.q, { url: e || o, size: s, resolution: t });
        },
        611463: (e, s, t) => {
            t.d(s, { U: () => D, n: () => N });
            var n = t(552322),
                r = t(425522),
                o = t(202784),
                i = t(781441),
                a = t(84504),
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
            const v = r.com.x.dms.util;
            class f extends r.com.x.dms.util.EntityParser {
                doParse(e) {
                    return r.kotlin.collections.KtList.fromJsArray([...(0, d.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Email(...e)), ...(0, m.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Hashtag(...e)), ...(0, u.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Cashtag(...e)), ...(0, x.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Mention(...e)), ...(0, h.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Url(...e))]);
                }
            }
            var p = t(842898),
                w = t(889906),
                g = t(446368);
            const j = r.com.x.dms.EmojiPickerBottomSheetModel,
                y = r.kotlin.collections.KtList,
                S = (0, o.createContext)(void 0),
                C = "undefined" == typeof window;
            let b;
            function N() {
                const e = (0, o.useContext)(S);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function _(e, s) {
                const n = "true" === localStorage.getItem(l.e) || !1,
                    o = (0, a.n5)();
                const d = (function () {
                    const e = new c(new URL(t.p + t.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), t.b), { type: void 0 }).createWorker();
                    return (e.onerror = (e) => {}), e;
                })();
                d.postMessage({ action: "init_db", dbName: `${(0, a.n5)()}_chat`, id: "init_1" });
                return new r.com.x.dms.WebDmObjectGraph(
                    r.com.x.models.UserIdentifier.ofString(o),
                    d,
                    i._,
                    (s, t) => {
                        (0, p.S)(s.value.toString(), e).then((e) => {
                            if (!e) return void t(new r.com.x.dms.LoadPostResult.OtherFailure());
                            const s = new r.com.x.dms.LoadPostResult.Success(e);
                            t(s);
                        });
                    },
                    async function () {
                        return new j(y.fromJsArray([]));
                    },
                    (e, t, n, r, o) => {
                        s.scribe({ client: "m5", page: e ?? void 0, section: t ?? void 0, component: n ?? void 0, element: r ?? void 0, action: o ?? void 0 });
                    },
                    new r.com.x.dms.WebOptions(!1, !0),
                    n,
                    new f(),
                    !1,
                );
            }
            function D({ children: e }) {
                if (C) return;
                const s = (0, w.useRelayEnvironment)(),
                    t = (0, g.z$)();
                return b || (b = _(s, t)), (0, n.jsx)(S.Provider, { value: b, children: e });
            }
        },
        656860: (e, s, t) => {
            t.d(s, { p: () => P });
            var n = t(552322),
                r = t(727071),
                o = t(425522),
                i = t(332161),
                a = t(193686),
                l = t(993165),
                c = t(687521),
                d = t(559040),
                m = t(533476),
                u = t(138179),
                x = t(875515);
            function h() {
                return (0, n.jsxs)("div", { children: [(0, n.jsx)(i.x, { weight: "bold", children: "No chats yet" }), (0, n.jsx)(i.x, { color: "gray700", children: "Start chatting with end-to-end encryption" })] });
            }
            var v = t(984713),
                f = t(897995);
            const p = ({ connectionState: e }) => {
                const s = ((e) => {
                    switch (e) {
                        case o.com.x.dms.DmConnectionIndicatorState.CONNECTING:
                            return "Connecting";
                        case o.com.x.dms.DmConnectionIndicatorState.CLOSED:
                            return "Closed";
                        case o.com.x.dms.DmConnectionIndicatorState.BLOCKED_UPDATE_YOUR_APP:
                            return "Blocked update your app";
                    }
                    return "";
                })(e);
                return s ? (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("div", { children: (0, n.jsx)(a.P, {}) }), (0, n.jsx)(i.x, { weight: "medium", children: s })] }) : null;
            };
            var w = t(334038),
                g = t(264531);
            const j = o.com.x.dms.convlist,
                y = o.com.x.dms.InboxBottomDialog;
            function S({ component: e, setShowNewDM: s, showNewDM: t }) {
                const r = (0, m._)(e.state),
                    o = r.searchQuery.length > 0,
                    S = o ? r.conversationResults.asJsReadonlyArrayView() : r.previews?.asJsReadonlyArrayView(),
                    { showDebugOptions: C } = (0, g.XE)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex flex-col h-screen border-r relative w-full",
                            children: [
                                (0, n.jsxs)("header", {
                                    className: "flex flex-col border-b border-border",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "flex items-center justify-between p-4 h-16",
                                            children: [
                                                (0, n.jsx)(i.x, { weight: "bold", size: "headline1", children: "Messages" }),
                                                r.showConnectionIndicator && (0, n.jsx)(p, { connectionState: r.showConnectionIndicator }),
                                                (0, n.jsxs)("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        r.isLoadingConversations && (0, n.jsx)("div", { className: "w-5", children: (0, n.jsx)(a.P, { size: "small" }) }),
                                                        C && (0, n.jsx)(w.Z, {}),
                                                        (0, n.jsx)(l.z, {
                                                            icon: (0, n.jsx)(u.Z, { className: "h-5 w-5" }),
                                                            onClick: () => {
                                                                e.onEvent(j.ConversationListEvent.FloatingActionButtonClicked);
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "px-4 pb-4",
                                            children: (0, n.jsx)(c._, {
                                                placeholder: "Search Direct Messages",
                                                value: r.searchQuery ?? "",
                                                onChange: (s) => {
                                                    e.onEvent(new j.ConversationListEvent.SearchQueryChanged(s.target.value));
                                                },
                                                leftContent: (0, n.jsx)(x.Z, { className: "h-5 w-5 text-text-secondary" }),
                                            }),
                                        }),
                                    ],
                                }),
                                S && S.length > 0 ? (0, n.jsx)(d.p, { conversations: S, onEvent: (s) => e.onEvent(s), isSearch: o }) : !o && (0, n.jsx)(h, {}),
                                r.showBottomDialog instanceof y.PinReminder && (0, n.jsx)(f.Y, { component: e, dialogParams: r.showBottomDialog.params }),
                            ],
                        }),
                        t && (0, n.jsx)(v.x, { onVisibilityChange: s }),
                    ],
                });
            }
            var C = t(292317),
                b = t(202784),
                N = t(611463),
                _ = t(379342),
                D = t(607499);
            const P = () => {
                    const [e, s] = (0, b.useState)(null),
                        t = (0, N.n)(),
                        r = (0, _.s)(),
                        [i, l] = (0, b.useState)(!1);
                    return (
                        (0, b.useEffect)(() => {
                            const e = new o.com.x.export.CancellationSignal(),
                                n = t.conversationListComponent(
                                    new o.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? r.toPinScreen("recovery") : r.toPinScreen("new");
                                        },
                                        (e) => {
                                            r.toConversation(e.id);
                                        },
                                        () => {
                                            l(!0);
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
                                s(n),
                                () => {
                                    e.cancel();
                                }
                            );
                        }, [t, r]),
                        null === e ? (0, n.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, n.jsx)(a.P, {}) }) : (0, n.jsx)(D.S, { children: (0, n.jsx)(z, { component: e, setShowNewDM: l, showNewDM: i }) })
                    );
                },
                z = ({ component: e, setShowNewDM: s, showNewDM: t }) => {
                    const o = (0, r.U)().id,
                        i = void 0 === o || "" === o;
                    return (0, m._)(e.state).isInitializing ? (0, n.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, n.jsx)(a.P, {}) }) : (0, n.jsxs)("div", { className: "flex w-full", children: [(0, n.jsx)("div", { className: (i ? "block" : "hidden") + " md:block w-full md:w-[35%]", children: (0, n.jsx)(S, { component: e, setShowNewDM: s, showNewDM: t }) }), (0, n.jsx)("div", { className: (i ? "hidden" : "block") + " md:block w-full md:w-[65%]", children: (0, n.jsx)(C.Q, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-ad094e61.049db93a.js.map
