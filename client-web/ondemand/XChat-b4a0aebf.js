"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-b4a0aebf"],
    {
        759746: (e, t, s) => {
            s.d(t, { M: () => a });
            var n = s(552322),
                o = s(475694),
                r = s(350311);
            const i = ({ firstUrl: e, resolution: t, secondUrl: s, size: o = "xxLarge" }) => {
                    const i = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "33.33%";
                                case "xxLarge":
                                    return "16px";
                                default:
                                    return "8px";
                            }
                        })(o),
                        a = ((e) => ("fill" === e ? "2%" : "1px"))(o),
                        l = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "fill";
                                case "xxLarge":
                                    return "large";
                                default:
                                    return "medium";
                            }
                        })(o);
                    return (0, n.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${i} - ${a} * 2)` }, children: [(0, n.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: a }, children: (0, n.jsx)(r.s, { url: e, size: l, resolution: t }) }), (0, n.jsx)("div", { style: { marginLeft: `calc(-${i} - ${a} * 2)`, marginTop: `calc(-${i} + ${a} * 2)`, marginBottom: i }, children: (0, n.jsx)(r.s, { url: s, size: l, resolution: t }) })] });
                },
                a = ({ avatarSize: e, isInlineFacepile: t, resolution: s, users: a }) => {
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
                        if (a.length >= 2) return (0, n.jsx)(i, { size: l, firstUrl: a[0]?.profileImageUrl, resolution: s, secondUrl: a[1]?.profileImageUrl });
                        if (1 === a.length) return (0, n.jsx)(r.s, { url: a[0]?.profileImageUrl, size: e, resolution: s });
                    }
                    const c = a.slice(0, 4).map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return (0, n.jsx)(o.o, { urls: c, size: e, resolution: s });
                };
        },
        32161: (e, t, s) => {
            s.d(t, { x: () => l });
            var n = s(552322),
                o = s(425522),
                r = s(350311);
            const i = ({ avatar: e, avatarSize: t, onCustomAvatarNeedsResolving: s }) => (e instanceof o.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, n.jsx)(r.s, { url: e.uri, size: t }) : (e instanceof o.com.x.dms.model.MediaUriState.AvatarNeedsResolving && s(e), (0, n.jsx)(r.s, { size: t })));
            var a = s(759746);
            const l = ({ avatarSize: e, isInlineFacepile: t, onCustomAvatarNeedsResolving: s, titleState: l }) => {
                if (l instanceof o.com.x.dms.model.DmTitleState.OneToOne) return (0, n.jsx)(r.s, { url: l.otherUser?.profileImageUrl, size: e });
                if (l instanceof o.com.x.dms.model.DmTitleState.Group) {
                    if (l.avatarType instanceof o.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, n.jsx)(i, { avatar: l.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: s });
                    if (l.avatarType instanceof o.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, n.jsx)(a.M, { avatarSize: e, isInlineFacepile: t, users: l.avatarType.users.asJsReadonlyArrayView() });
                }
                return (0, n.jsx)(r.s, { size: e });
            };
        },
        350311: (e, t, s) => {
            s.d(t, { j: () => r, s: () => i });
            var n = s(552322),
                o = s(26429);
            const r = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                i = ({ url: e, size: t, resolution: s = "200x200" }) => (0, n.jsx)(o.q, { url: e || r, size: t, resolution: s });
        },
        611463: (e, t, s) => {
            s.d(t, { U: () => z, n: () => N });
            var n = s(552322),
                o = s(425522),
                r = s(202784),
                i = s(781441),
                a = s(84504),
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
                x = s(928220),
                u = s(879922),
                h = s(196594);
            const v = o.com.x.dms.util;
            class f extends o.com.x.dms.util.EntityParser {
                doParse(e) {
                    return o.kotlin.collections.KtList.fromJsArray([...(0, d.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Email(...e)), ...(0, m.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Hashtag(...e)), ...(0, x.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Cashtag(...e)), ...(0, u.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Mention(...e)), ...(0, h.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Url(...e))]);
                }
            }
            var p = s(842898),
                g = s(889906),
                w = s(446368);
            const j = o.com.x.dms.EmojiPickerBottomSheetModel,
                b = o.kotlin.collections.KtList,
                y = (0, r.createContext)(void 0),
                C = "undefined" == typeof window;
            let S;
            function N() {
                const e = (0, r.useContext)(y);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function D(e, t) {
                const n = "true" === localStorage.getItem(l.e) || !1,
                    r = (0, a.n5)();
                const d = (function () {
                    const e = new c(new URL(s.p + s.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), s.b), { type: void 0 }).createWorker();
                    return (e.onerror = (e) => {}), e;
                })();
                d.postMessage({ action: "init_db", dbName: `${(0, a.n5)()}_chat`, id: "init_1" });
                return new o.com.x.dms.WebDmObjectGraph(
                    o.com.x.models.UserIdentifier.ofString(r),
                    d,
                    i._,
                    (t, s) => {
                        (0, p.S)(t.value.toString(), e).then((e) => {
                            if (!e) return void s(new o.com.x.dms.LoadPostResult.OtherFailure());
                            const t = new o.com.x.dms.LoadPostResult.Success(e);
                            s(t);
                        });
                    },
                    async function () {
                        return new j(b.fromJsArray([]));
                    },
                    (e, s, n, o, r) => {
                        t.scribe({ client: "m5", page: e ?? void 0, section: s ?? void 0, component: n ?? void 0, element: o ?? void 0, action: r ?? void 0 });
                    },
                    new o.com.x.dms.WebOptions(!1, !0),
                    n,
                    new f(),
                    !1,
                );
            }
            function z({ children: e }) {
                if (C) return;
                const t = (0, g.useRelayEnvironment)(),
                    s = (0, w.z$)();
                return S || (S = D(t, s)), (0, n.jsx)(y.Provider, { value: S, children: e });
            }
        },
        331362: (e, t, s) => {
            s.d(t, { p: () => te });
            var n = s(552322),
                o = s(727071),
                r = s(425522),
                i = s(941204),
                a = s(702024),
                l = s(436059),
                c = s(559040),
                d = s(533476),
                m = s(194484);
            function x() {
                return (0, n.jsxs)("div", { children: [(0, n.jsx)(i.x, { weight: "bold", children: "No chats yet" }), (0, n.jsx)(i.x, { color: "gray700", children: "Start chatting with end-to-end encryption" })] });
            }
            var u = s(984713),
                h = s(897995);
            const v = ({ connectionState: e }) => {
                const t = ((e) => {
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
                return t ? (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("div", { children: (0, n.jsx)(a.P, {}) }), (0, n.jsx)(i.x, { weight: "medium", children: t })] }) : null;
            };
            var f = s(334038),
                p = s(264531);
            const g = r.com.x.dms.convlist,
                w = r.com.x.dms.InboxBottomDialog;
            function j({ component: e, setShowNewDM: t, showNewDM: s }) {
                const o = (0, d._)(e.state),
                    r = o.previews?.asJsReadonlyArrayView(),
                    { showDebugOptions: j } = (0, p.XE)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex flex-col h-screen border-r relative w-full",
                            children: [
                                (0, n.jsxs)("header", {
                                    className: "flex items-center justify-between p-4 border-b border-border h-16",
                                    children: [
                                        (0, n.jsx)(i.x, { weight: "bold", size: "headline1", children: "Messages" }),
                                        o.showConnectionIndicator && (0, n.jsx)(v, { connectionState: o.showConnectionIndicator }),
                                        (0, n.jsxs)("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                o.isLoadingConversations && (0, n.jsx)("div", { className: "w-5", children: (0, n.jsx)(a.P, { size: "small" }) }),
                                                j && (0, n.jsx)(f.Z, {}),
                                                (0, n.jsx)(l.z, {
                                                    icon: (0, n.jsx)(m.Z, { className: "h-5 w-5" }),
                                                    onClick: () => {
                                                        e.onEvent(g.ConversationListEvent.FloatingActionButtonClicked);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r && r.length > 0 ? (0, n.jsx)(c.p, { conversations: r, component: e }) : (0, n.jsx)(x, {}),
                                o.showBottomDialog instanceof w.PinReminder && (0, n.jsx)(h.Y, { component: e, dialogParams: o.showBottomDialog.params }),
                            ],
                        }),
                        s && (0, n.jsx)(u.x, { onVisibilityChange: t }),
                    ],
                });
            }
            var b = s(455091),
                y = s(202784),
                C = s(125691),
                S = s(306812),
                N = s(761312),
                D = s(842296),
                z = s(611463),
                _ = s(950040),
                k = s(463341),
                E = s(110241),
                P = s(617588),
                I = s(628047),
                R = s(853582),
                T = s(55880),
                L = s(379342),
                O = s(748055),
                U = s(336984),
                A = s(369962),
                M = s(964655),
                F = s(469745),
                G = s(889198),
                B = s(856402),
                Z = s(32161);
            const $ = r.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                W = r.com.x.dms.model.DmTitleState,
                K = ({ component: e }) => {
                    const t = (0, d._)(e.state),
                        s = (0, F.a)("(max-width: 768px)"),
                        o = t.toolbarState instanceof r.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, n.jsxs)("div", {
                        className: "flex flex-row items-center h-16 border-b border-border pl-2 gap-3 cursor-pointer",
                        onClick: () => {
                            e.onEvent(r.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            s
                                ? (0, n.jsx)(l.z, {
                                      icon: (0, n.jsx)(G.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(r.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, n.jsx)(Z.x, { avatarSize: "large", titleState: t.toolbarState, onCustomAvatarNeedsResolving: (t) => e.onEvent(new $(t)), isInlineFacepile: !1 }),
                            (0, n.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, n.jsx)(M.R, { name: t.toolbarState.title, badges: o ? (0, U.r)(t.toolbarState.otherUser) : void 0 }), (0, n.jsx)(V, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                V = ({ toolbarState: e }) => ((e instanceof W.Group || e instanceof W.OneToOne) && e.ttl ? (0, n.jsx)(J, { ttl: e.ttl }) : e instanceof W.Group ? (0, n.jsxs)(i.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                J = ({ ttl: e }) => (0, n.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, n.jsx)(B.Z, { className: "text-gray-700" }), (0, n.jsx)(i.x, { size: "subtext2", color: "gray700", children: (0, A.L)(e.inWholeMilliseconds) })] });
            var Y = s(831901);
            const q = r.com.x.dms.composer.composer.ChatComposerEvent;
            function X() {
                const e = (0, E.a)(),
                    t = (0, P.F)(),
                    s = (0, I.v)(),
                    o = (0, R.k)(),
                    r = (0, T.m)(),
                    [a, c] = (0, y.useState)(!1);
                return "" !== e && o
                    ? (0, n.jsx)(N.K, { id: e })
                    : "" !== e && t
                      ? (0, n.jsx)(S.V, { id: e })
                      : "" !== e && s
                        ? (0, n.jsx)(D.b, { id: e })
                        : "" !== e && r
                          ? (0, n.jsx)(Y.f, { id: e })
                          : "" !== e
                            ? (0, n.jsx)(H, { id: e })
                            : (0, n.jsxs)("div", {
                                  className: "flex flex-col h-screen w-full justify-center items-center flex-grow gap-4",
                                  children: [
                                      (0, n.jsx)(i.x, { size: "title2", weight: "bold", children: "Select a message" }),
                                      (0, n.jsx)(i.x, { size: "body", color: "gray700", children: "Choose from your existing conversations or start a new one" }),
                                      (0, n.jsx)(l.z, {
                                          onClick: () => {
                                              c(!0);
                                          },
                                          size: "xLarge",
                                          variant: "brandFilled",
                                          children: "New message",
                                      }),
                                      a && (0, n.jsx)(u.x, { onVisibilityChange: c }),
                                  ],
                              });
            }
            function H({ id: e }) {
                const [t, s] = (0, y.useState)(null),
                    o = (0, z.n)(),
                    i = (0, L.s)();
                return (
                    (0, y.useEffect)(() => {
                        const t = new r.com.x.export.CancellationSignal(),
                            n = o.dmComponent(
                                r.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new r.com.x.dms.chat.DmCallbacks(
                                    () => {
                                        i.toInbox();
                                    },
                                    () => {},
                                    () => {
                                        i.toConversationInfo(e);
                                    },
                                    () => {},
                                    () => {},
                                ),
                                t,
                            );
                        return (
                            s(n),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [o, e, i]),
                    t ? (0, n.jsx)(Q, { component: t }) : (0, n.jsx)("div", { className: "w-full h-screen", children: (0, n.jsx)(a.P, {}) })
                );
            }
            function Q({ component: e }) {
                const t = (0, d._)(e.state),
                    { t: s } = (0, b.$G)(),
                    o = (0, y.useCallback)(
                        (t) => {
                            e.composer.onEvent(new q.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    r = (0, y.useCallback)(() => {
                        e.composer.onEvent(q.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: a, handleDragOver: l, handleDragLeave: c, handleDrop: m } = (0, O.F)({ onFileAttached: o, onFileDrop: r, isEnabled: !t.isReadOnly });
                return (0, n.jsxs)("div", { className: "flex flex-col h-screen flex-grow relative", onDragOver: l, onDragLeave: c, onDrop: m, children: [a && (0, n.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, n.jsx)(i.x, { size: "subtext1", weight: "medium", color: "brand", children: s("Drop file to attach") }) }), (0, n.jsx)(K, { component: e }), (0, n.jsx)("div", { className: "flex-1 overflow-hidden", children: (0, n.jsx)(k.Bu, { children: (0, n.jsx)(_.r, { component: e }) }) }), t.isReadOnly ? (0, n.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, n.jsx)(i.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === t.readOnlyReason?.name ? s("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === t.readOnlyReason?.name ? s("You can no longer send messages in this conversation due to a security verification failure.") : s("This conversation is currently in read-only mode.") }) }) : (0, n.jsx)(C.a, { component: e })] });
            }
            var ee = s(607499);
            const te = () => {
                    const [e, t] = (0, y.useState)(null),
                        s = (0, z.n)(),
                        o = (0, L.s)(),
                        [i, l] = (0, y.useState)(!1);
                    return (
                        (0, y.useEffect)(() => {
                            const e = new r.com.x.export.CancellationSignal(),
                                n = s.conversationListComponent(
                                    new r.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? o.toPinScreen("recovery") : o.toPinScreen("new");
                                        },
                                        (e) => {
                                            o.toConversation(e.id);
                                        },
                                        () => {
                                            l(!0);
                                        },
                                        () => {},
                                        (e) => {
                                            o.toPinScreen("verify", e);
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
                        }, [s, o]),
                        null === e ? (0, n.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, n.jsx)(a.P, {}) }) : (0, n.jsx)(ee.S, { children: (0, n.jsx)(se, { component: e, setShowNewDM: l, showNewDM: i }) })
                    );
                },
                se = ({ component: e, setShowNewDM: t, showNewDM: s }) => {
                    const r = (0, o.U)().id,
                        i = void 0 === r || "" === r;
                    return (0, d._)(e.state).isInitializing ? (0, n.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, n.jsx)(a.P, {}) }) : (0, n.jsxs)("div", { className: "flex w-full", children: [(0, n.jsx)("div", { className: (i ? "block" : "hidden") + " md:block w-full md:w-[35%]", children: (0, n.jsx)(j, { component: e, setShowNewDM: t, showNewDM: s }) }), (0, n.jsx)("div", { className: (i ? "hidden" : "block") + " md:block w-full md:w-[65%]", children: (0, n.jsx)(X, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-b4a0aebf.94b1211a.js.map
