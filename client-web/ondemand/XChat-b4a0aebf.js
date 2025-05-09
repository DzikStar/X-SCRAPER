"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-b4a0aebf"],
    {
        759746: (e, t, n) => {
            n.d(t, { M: () => r });
            var s = n(552322),
                i = n(475694),
                o = n(350311);
            const a = ({ firstUrl: e, resolution: t, secondUrl: n, size: i = "xxLarge" }) => {
                    const a = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "33.33%";
                                case "xxLarge":
                                    return "16px";
                                default:
                                    return "8px";
                            }
                        })(i),
                        r = ((e) => ("fill" === e ? "2%" : "1px"))(i),
                        l = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "fill";
                                case "xxLarge":
                                    return "large";
                                default:
                                    return "medium";
                            }
                        })(i);
                    return (0, s.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${a} - ${r} * 2)` }, children: [(0, s.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: r }, children: (0, s.jsx)(o.s, { url: e, size: l, resolution: t }) }), (0, s.jsx)("div", { style: { marginLeft: `calc(-${a} - ${r} * 2)`, marginTop: `calc(-${a} + ${r} * 2)`, marginBottom: a }, children: (0, s.jsx)(o.s, { url: n, size: l, resolution: t }) })] });
                },
                r = ({ avatarSize: e, isInlineFacepile: t, resolution: n, users: r }) => {
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
                        if (r.length >= 2) return (0, s.jsx)(a, { size: l, firstUrl: r[0]?.profileImageUrl, resolution: n, secondUrl: r[1]?.profileImageUrl });
                        if (1 === r.length) return (0, s.jsx)(o.s, { url: r[0]?.profileImageUrl, size: e, resolution: n });
                    }
                    const c = r.slice(0, 4).map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return (0, s.jsx)(i.o, { urls: c, size: e, resolution: n });
                };
        },
        350311: (e, t, n) => {
            n.d(t, { j: () => o, s: () => a });
            var s = n(552322),
                i = n(26429);
            const o = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                a = ({ url: e, size: t, resolution: n = "200x200" }) => (0, s.jsx)(i.q, { url: e || o, size: t, resolution: n });
        },
        611463: (e, t, n) => {
            n.d(t, { U: () => S, n: () => N });
            var s = n(552322),
                i = n(425522),
                o = n(202784),
                a = n(781441),
                r = n(84504),
                l = n(664147);
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
            var d = n(8974),
                m = n(303676),
                x = n(928220),
                u = n(879922),
                h = n(196594);
            const v = i.com.x.dms.util;
            class p extends i.com.x.dms.util.EntityParser {
                doParse(e) {
                    return i.kotlin.collections.KtList.fromJsArray([...(0, d.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Email(...e)), ...(0, m.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Hashtag(...e)), ...(0, x.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Cashtag(...e)), ...(0, u.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Mention(...e)), ...(0, h.Z)(e).map(({ indices: e }) => new v.ParsedEntity.Url(...e))]);
                }
            }
            var f = n(842898),
                g = n(889906),
                j = n(446368);
            const w = i.com.x.dms.EmojiPickerBottomSheetModel,
                b = i.kotlin.collections.KtList,
                C = (0, o.createContext)(void 0),
                y = "undefined" == typeof window;
            let k;
            function N() {
                const e = (0, o.useContext)(C);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function I(e, t) {
                const s = "true" === localStorage.getItem(l.e) || !1,
                    o = (0, r.n5)();
                const d = (function () {
                    const e = new c(new URL(n.p + n.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), n.b), { type: void 0 }).createWorker();
                    return (e.onerror = (e) => {}), e;
                })();
                d.postMessage({ action: "init_db", dbName: `${(0, r.n5)()}_chat`, id: "init_1" });
                return new i.com.x.dms.WebDmObjectGraph(
                    i.com.x.models.UserIdentifier.ofString(o),
                    d,
                    a._,
                    (t, n) => {
                        (0, f.S)(t.value.toString(), e).then((e) => {
                            if (!e) return void n(new i.com.x.dms.LoadPostResult.OtherFailure());
                            const t = new i.com.x.dms.LoadPostResult.Success(e);
                            n(t);
                        });
                    },
                    async function () {
                        return new w(b.fromJsArray([]));
                    },
                    (e, n, s, i, o) => {
                        t.scribe({ client: "m5", page: e ?? void 0, section: n ?? void 0, component: s ?? void 0, element: i ?? void 0, action: o ?? void 0 });
                    },
                    new i.com.x.dms.WebOptions(!1, !0),
                    s,
                    new p(),
                    !1,
                );
            }
            function S({ children: e }) {
                if (y) return;
                const t = (0, g.useRelayEnvironment)(),
                    n = (0, j.z$)();
                return k || (k = I(t, n)), (0, s.jsx)(C.Provider, { value: k, children: e });
            }
        },
        853874: (e, t, n) => {
            n.d(t, { p: () => qe });
            var s = n(552322),
                i = n(469745),
                o = n(727071),
                a = n(425522),
                r = n(941204),
                l = n(702024),
                c = n(436059),
                d = n(703612),
                m = n(129558),
                x = n(242782),
                u = n(169355),
                h = n(14269),
                v = n(350311);
            const p = ({ avatar: e, avatarSize: t, onCustomAvatarNeedsResolving: n }) => (e instanceof a.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, s.jsx)(v.s, { url: e.uri, size: t }) : (e instanceof a.com.x.dms.model.MediaUriState.AvatarNeedsResolving && n(e), (0, s.jsx)(v.s, { size: t })));
            var f = n(759746);
            const g = ({ avatarSize: e, isInlineFacepile: t, onCustomAvatarNeedsResolving: n, titleState: i }) => {
                if (i instanceof a.com.x.dms.model.DmTitleState.OneToOne) return (0, s.jsx)(v.s, { url: i.otherUser?.profileImageUrl, size: e });
                if (i instanceof a.com.x.dms.model.DmTitleState.Group) {
                    if (i.avatarType instanceof a.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, s.jsx)(p, { avatar: i.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: n });
                    if (i.avatarType instanceof a.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, s.jsx)(f.M, { avatarSize: e, isInlineFacepile: t, users: i.avatarType.users.asJsReadonlyArrayView() });
                }
                return (0, s.jsx)(v.s, { size: e });
            };
            var j = n(537335),
                w = n(336984);
            const b = ({ previewWithMetadata: e }) => {
                    if (!e.preview) return null;
                    const t = e.preview.latestMessagePreview,
                        n = e.metadata.usersByIdAllTime.asJsReadonlyMapView(),
                        i = n.get(t.sender)?.displayName,
                        o = e.isGroup && !t.isSent && !!i,
                        l = [];
                    if (t.messageText) o && l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: `${i}: ` }, 1)), l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: t.messageText }, 2));
                    else if (t.withAttachmentType) {
                        const e = ((e) => {
                            let t;
                            switch (e) {
                                case a.com.x.dms.MessageAttachmentType.MediaVideo:
                                    t = "a video";
                                    break;
                                case a.com.x.dms.MessageAttachmentType.MediaGif:
                                    t = "a GIF";
                                    break;
                                case a.com.x.dms.MessageAttachmentType.MediaAudio:
                                    t = "an audio";
                                    break;
                                case a.com.x.dms.MessageAttachmentType.MediaImage:
                                    t = "an image";
                                    break;
                                case a.com.x.dms.MessageAttachmentType.File:
                                    t = "a file";
                                    break;
                                case a.com.x.dms.MessageAttachmentType.UrlCard:
                                    t = "a URL";
                                    break;
                                case a.com.x.dms.MessageAttachmentType.Post:
                                    t = "a post";
                                    break;
                                default:
                                    t = "an attachment";
                            }
                            return t;
                        })(t.withAttachmentType);
                        o ? (l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: i }, 3)), l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: ` sent ${e}` }, 4))) : l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `Sent ${e}` }, 5));
                    }
                    return l;
                },
                C = a.com.x.dms.ReadByOthersIndicator,
                y = ({ onEvent: e, previewWithMetadata: t, isSelected: n }) => {
                    const i = t.preview?.timestampValue,
                        o = t.metadata.title instanceof a.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", { className: "flex flex-row", children: [(0, s.jsxs)("div", { style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: `flex items-start grow p-2 mr-2 gap-5 rounded-lg hover:bg-gray-100 ${n && "bg-gray-0"} transition-colors duration-100 cursor-pointer`, children: [(0, s.jsx)(g, { avatarSize: "xxLarge", titleState: t.metadata.title, onCustomAvatarNeedsResolving: (n) => e(new a.com.x.dms.convlist.ConversationListEvent.CustomAvatarNeedsResolving(t.conversationId, n)), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 gap-5", children: [(0, s.jsx)(d.R, { name: t.metadata.title.title, badges: o ? (0, w.r)(t.metadata.title.otherUser) : void 0 }), (0, s.jsx)(r.x, { color: "gray700", weight: t.isUnreadByMe ? "bold" : "normal", numberOfLines: 1, className: "break-all", children: (0, s.jsx)(b, { previewWithMetadata: t }) })] }), (0, s.jsxs)("div", { className: "flex flex-col items-end", children: [(0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [(0, s.jsx)(r.x, { size: "subtext3", children: i && (0, s.jsx)(j.Q, { timestamp: i }) }), t.isMuted && (0, s.jsx)(m.Z, { width: "14", height: "14", className: "text-gray-700" })] }), (0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [t.showReadByOthersIndicator === C.Read && (0, s.jsx)(x.Z, { width: "14", height: "14", className: "text-gray-700" }), t.showReadByOthersIndicator === C.Unread && (0, s.jsx)(u.Z, { width: "14", height: "14", className: "text-gray-700" }), t.isUnreadByMe && (0, s.jsx)(h.Z, { width: "14", height: "14", className: "text-blue-500" })] })] })] }), (0, s.jsx)("div", { className: `w-1 ${n ? "bg-text" : "bg-background"} justify-self-end rounded-lg` })] });
                };
            var k = n(202784),
                N = n(110241),
                I = n(921879);
            const S = ({ component: e, conversations: t }) => {
                const n = (0, N.a)(),
                    i = (0, k.useRef)(null),
                    o = (0, k.useRef)({ start: 0, end: 0 }),
                    r = (0, k.useCallback)(() => {
                        const n = i.current;
                        if (!n) return;
                        const { start: s, end: r } = o.current,
                            l = n.findStartIndex(),
                            c = n.findEndIndex();
                        if (s !== l || r !== c) {
                            const n = a.kotlin.collections.KtList.fromJsArray(t.slice(l, c + 1).map((e) => e.conversationId));
                            e.onEvent(new a.com.x.dms.convlist.ConversationListEvent.VisibleConversationIdsChanged(n)), (o.current = { start: l, end: c });
                        }
                    }, [e, t.slice]),
                    l = (0, k.useCallback)(
                        (t) => {
                            e.onEvent(t);
                        },
                        [e],
                    ),
                    c = (0, k.useCallback)(
                        (e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    onClick: () => {
                                        const t = new a.com.x.dms.convlist.ConversationListEvent.RowClicked(e.conversationId);
                                        l(t);
                                    },
                                    children: (0, s.jsx)(y, { previewWithMetadata: e, onEvent: l, isSelected: e.conversationId.id === n }),
                                },
                                e.conversationId.id,
                            ),
                        [n, l],
                    );
                return (0, s.jsx)(I.T, { api: i, onScroll: r, items: t, renderItem: c });
            };
            var E = n(533476),
                P = n(138179);
            function M() {
                return (0, s.jsxs)("div", { children: [(0, s.jsx)(r.x, { weight: "bold", children: "No chats yet" }), (0, s.jsx)(r.x, { color: "gray700", children: "Start chatting with end-to-end encryption" })] });
            }
            var z = n(984713),
                A = n(887491);
            const R = ({ component: e, dialogParams: t }) =>
                    (0, s.jsxs)("div", {
                        className: "p-5 rounded-2xl border-2 border-gray-100 bg-gray-0 absolute bottom-4 left-4 right-4 flex flex-col gap-2 z-10",
                        children: [
                            (0, s.jsx)(c.z, {
                                className: "absolute top-2.5 right-2.5",
                                variant: "primaryText",
                                icon: (0, s.jsx)(A.Z, {}),
                                onClick: () => {
                                    e.onEvent(a.com.x.dms.convlist.ConversationListEvent.DismissBottomDialog);
                                },
                            }),
                            (0, s.jsx)(r.x, { size: "body", weight: "bold", children: "Daily Verification" }),
                            (0, s.jsx)(r.x, { size: "body", children: "Enter your 4-digit PIN so we can keep things secure and make sure you remember it." }),
                            (0, s.jsx)(c.z, {
                                className: "h-11",
                                variant: "primaryFilled",
                                onClick: () => {
                                    e.onEvent(new a.com.x.dms.convlist.ConversationListEvent.ClickPinReminderDialog(t));
                                },
                                children: (0, s.jsx)(r.x, { size: "body", weight: "bold", color: "background", children: "Enter PIN" }),
                            }),
                        ],
                    }),
                T = ({ connectionState: e }) => {
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
                    return t ? (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)("div", { children: (0, s.jsx)(l.P, {}) }), (0, s.jsx)(r.x, { weight: "medium", children: t })] }) : null;
                };
            var D = n(334038),
                L = n(264531);
            const B = a.com.x.dms.convlist,
                G = a.com.x.dms.InboxBottomDialog;
            function U({ component: e, setShowNewDM: t, showNewDM: n }) {
                const i = (0, E._)(e.state),
                    o = i.previews?.asJsReadonlyArrayView(),
                    { showDebugOptions: a } = (0, L.XE)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: "flex flex-col h-screen border-r relative w-full",
                            children: [
                                (0, s.jsxs)("header", {
                                    className: "flex items-center justify-between p-4 border-b border-border h-16",
                                    children: [
                                        (0, s.jsx)(r.x, { weight: "bold", size: "headline1", children: "Messages" }),
                                        i.showConnectionIndicator && (0, s.jsx)(T, { connectionState: i.showConnectionIndicator }),
                                        (0, s.jsxs)("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                i.isLoadingConversations && (0, s.jsx)("div", { className: "w-5", children: (0, s.jsx)(l.P, { size: "small" }) }),
                                                a && (0, s.jsx)(D.Z, {}),
                                                (0, s.jsx)(c.z, {
                                                    icon: (0, s.jsx)(P.Z, { className: "h-5 w-5" }),
                                                    onClick: () => {
                                                        e.onEvent(B.ConversationListEvent.FloatingActionButtonClicked);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                o && o.length > 0 ? (0, s.jsx)(S, { conversations: o, component: e }) : (0, s.jsx)(M, {}),
                                i.showBottomDialog instanceof G.PinReminder && (0, s.jsx)(R, { component: e, dialogParams: i.showBottomDialog.params }),
                            ],
                        }),
                        n && (0, s.jsx)(z.x, { onVisibilityChange: t }),
                    ],
                });
            }
            var _ = n(455091),
                O = n(125691),
                Z = n(52053),
                V = n(543005),
                F = n(89195),
                $ = n(898100),
                J = n(611463),
                W = n(379342),
                q = n(846742),
                X = n(776604),
                K = n(429804),
                Q = n(951671),
                H = n(384226),
                Y = n(421018);
            const ee = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, menuItems: n, participant: i }) => {
                    if (!n || 0 === n.length) return null;
                    const o = n
                        .map((e) =>
                            ((e, t, n) => {
                                const i = () => {
                                    n(e, t);
                                };
                                switch (e) {
                                    case a.com.x.dms.ParticipantMenuItem.AddAsAdmin:
                                        return { text: "Add as admin", icon: (0, s.jsx)(K.Z, {}), onClick: i };
                                    case a.com.x.dms.ParticipantMenuItem.RemoveAsAdmin:
                                        return { text: "Remove as admin", icon: (0, s.jsx)(Q.Z, {}), destructive: !0, onClick: i };
                                    case a.com.x.dms.ParticipantMenuItem.RemoveFromGroup:
                                        return { text: "Remove from group", icon: (0, s.jsx)(H.Z, {}), destructive: !0, onClick: i };
                                }
                                return null;
                            })(e, i, t),
                        )
                        .filter((e) => !!e);
                    return (0, s.jsx)(X.P, { items: o, trigger: (0, s.jsx)(c.z, { className: "justify-self-end", icon: (0, s.jsx)(Y.Z, { className: "text-gray-700" }), variant: "primaryText", color: "gray700", backgroundColor: "gray700", onClick: () => e(i.userId) }) });
                },
                te = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: i }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const o = i.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 py-2 items-center", children: [(0, s.jsx)(v.s, { url: n.user?.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(d.R, { name: n.user?.displayName || "", screenName: n.user?.screenName, badges: (0, w.r)(n.user), isStacked: !0 }) }), (0, s.jsx)(ee, { participant: n, menuItems: o, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
            var ne = n(658358),
                se = n(145731),
                ie = n(796309);
            function oe({ icon: e, destructive: t, onClick: n, title: i, value: o, showChevron: a = !1 }) {
                return (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4", children: [(0, s.jsxs)("div", { className: `flex items-center gap-2 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(r.x, { size: "body", weight: "medium", color: t ? "red500" : "text", children: i })] }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [o && (0, s.jsx)(r.x, { size: "body", color: "gray500", children: o }), a && (0, s.jsx)(Z.Z, { className: "text-gray-500" })] })] }) });
            }
            function ae({ children: e, className: t }) {
                return (0, s.jsx)("div", { className: (0, ie.cn)("flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl", t), children: e });
            }
            const re = a.com.x.dms.convinfo,
                le = a.com.x.dms.ConversationInfoBottomButton;
            function ce({ button: e, onEvent: t }) {
                const n = (function (e) {
                    switch (e) {
                        case le.DeleteConversation:
                            return { title: "Delete conversation", icon: (0, s.jsx)(se.Z, {}), destructive: !0 };
                        case le.LeaveGroup:
                            return { title: "Leave conversation", icon: (0, s.jsx)(se.Z, {}) };
                        case le.ResignAsAdmin:
                            return { title: "Resign as admin", icon: (0, s.jsx)(Q.Z, {}) };
                    }
                    return null;
                })(e);
                return n
                    ? (0, s.jsx)(oe, {
                          icon: n.icon,
                          title: n.title,
                          destructive: n.destructive,
                          showChevron: !!n.showChevron,
                          onClick: () => {
                              t(new re.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                      })
                    : null;
            }
            var de = n(458872);
            const me = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center h-16 border-b border-border w-full relative", children: [(0, s.jsx)("div", { className: "absolute left-2", children: (0, s.jsx)(c.z, { icon: (0, s.jsx)(de.Z, {}), onClick: t, variant: "primaryText" }) }), (0, s.jsx)(r.x, { size: "headline1", weight: "bold", className: "flex-1 text-center", children: e })] });
            var xe = n(22199),
                ue = n(369962);
            const he = ({ onEvent: e, ttl: t }) => (0, s.jsx)(oe, { icon: (0, s.jsx)(xe.Z, {}), title: "Vanishing Mode", showChevron: !0, value: t ? (0, ue.L)(t) : "Off", onClick: e }),
                ve = a.com.x.dms.convinfo;
            function pe({ id: e }) {
                const [t, n] = (0, k.useState)(null),
                    i = (0, J.n)(),
                    o = (0, W.s)(),
                    [r, c] = (0, k.useState)(!1);
                return (
                    (0, k.useEffect)(() => {
                        const t = new a.com.x.export.CancellationSignal(),
                            s = i.convInfoComponent(
                                t,
                                a.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new ve.ConversationInfoCallbacks(
                                    () => {
                                        o.toConversation(e);
                                    },
                                    () => {
                                        o.toInbox();
                                    },
                                    () => {},
                                    () => {},
                                    () => {
                                        c(!0);
                                    },
                                    () => {
                                        o.toParticipants(e);
                                    },
                                    () => {
                                        o.toVanishingMode(e);
                                    },
                                    () => {
                                        o.toGroupInvite(e);
                                    },
                                ),
                            );
                        return (
                            n(s),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [i, e, o]),
                    t ? (0, s.jsx)(fe, { component: t, showAddGroupParticipants: r, setShowAddGroupParticipants: c }) : (0, s.jsx)(l.P, {})
                );
            }
            function fe({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: i } = (0, _.$G)(),
                    o = (0, E._)(e.state);
                (0, ne.e)(e.toasts);
                const m = (0, k.useCallback)(
                        (t) => {
                            e.onEvent(new ve.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    x = (0, k.useCallback)(
                        (t, n) => {
                            e.onEvent(new ve.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (o.contents === ve.ConversationInfoContents.Loading) return (0, s.jsx)(l.P, {});
                if (!(o.contents instanceof ve.ConversationInfoContents.Loaded)) return null;
                const u = o.contents.convId instanceof a.com.x.models.dm.XConversationId.Group,
                    h = o.contents.metadata.title instanceof a.com.x.dms.model.DmTitleState.OneToOne,
                    v = o.contents.peopleSection,
                    p = (t) => {
                        e.onEvent(t);
                    };
                return (0, s.jsxs)("div", {
                    className: "flex flex-col w-full items-center self-center h-screen",
                    children: [
                        n && u && (0, s.jsx)(q.C, { conversationId: o.contents.convId, onVisibilityChange: t }),
                        (0, s.jsx)(me, {
                            onBackClicked: (t) => {
                                t.stopPropagation(), e.onEvent(ve.ConversationInfoEvent.BackButtonClicked);
                            },
                            title: o.toolbarTitle === a.com.x.dms.convinfo.ConversationInfoTitle.Group ? i("Group info") : i("Conversation info"),
                        }),
                        (0, s.jsxs)("div", {
                            className: "w-full overflow-y-auto pb-3",
                            children: [
                                (0, s.jsxs)("div", { className: "flex flex-col items-center py-6 gap-2", children: [(0, s.jsx)("div", { className: "w-28 h-28 mb-4", children: (0, s.jsx)(f.M, { avatarSize: "fill", isInlineFacepile: !0, resolution: "400x400", users: o.contents.metadata.otherUsersOrSelf?.asJsReadonlyArrayView() }) }), (0, s.jsx)(d.R, { name: o.contents.metadata.title.title, badges: h ? (0, w.r)(o.contents.metadata.title.otherUser) : void 0 }), h && o.contents.metadata.title.otherUser && (0, s.jsx)($.Q, { screenName: o.contents.metadata.title.otherUser.screenName }), o.contents.showEditGroupAction && (0, s.jsx)(c.z, { variant: "brandText", children: i("Edit") })] }),
                                !o.contents.metadata.isReadOnly &&
                                    (0, s.jsx)("div", {
                                        className: "w-full px-4",
                                        children: (0, s.jsx)(he, {
                                            ttl: o.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds,
                                            onEvent: () => {
                                                e.onEvent(ve.ConversationInfoEvent.DisappearingMessagesClicked);
                                            },
                                        }),
                                    }),
                                v
                                    ? (0, s.jsxs)("div", {
                                          className: "w-full px-4 mt-4",
                                          children: [
                                              (0, s.jsxs)("div", { className: "w-full ps-4", children: [(0, s.jsx)(r.x, { size: "headline2", weight: "bold", className: "mb-2", children: i("People") }), (0, s.jsx)(te, { handleParticipantClicked: m, handleParticipantMenuButtonClicked: x, participants: v.participants.asJsReadonlyArrayView(), menuItemsMap: v.menuItems.asJsReadonlyMapView() })] }),
                                              v.showMoreUsersLink
                                                  ? (0, s.jsx)(c.z, {
                                                        className: "w-full pe-0",
                                                        variant: "primaryText",
                                                        onClick: () => {
                                                            e.onEvent(ve.ConversationInfoEvent.TotalNumMembersClicked);
                                                        },
                                                        children: (0, s.jsxs)("div", { className: "flex flex-row justify-between items-center py-2 w-full", children: [(0, s.jsx)(r.x, { size: "body", weight: "medium", children: i("View all {number} members", { number: v.showMoreUsersLink + v.participants.asJsReadonlyArrayView().length }) }), (0, s.jsx)(Z.Z, { className: "me-1.5", width: "24", height: "24" })] }),
                                                    })
                                                  : null,
                                              o.contents.peopleSection.canAddPeople
                                                  ? (0, s.jsxs)(ae, {
                                                        children: [
                                                            (0, s.jsx)(oe, {
                                                                icon: (0, s.jsx)(V.Z, {}),
                                                                onClick: () => {
                                                                    e.onEvent(ve.ConversationInfoEvent.AddPeopleClicked);
                                                                },
                                                                title: i("Add people"),
                                                                showChevron: !0,
                                                            }),
                                                            o.contents.metadata.selfParticipant?.isAdmin &&
                                                                (0, s.jsx)(oe, {
                                                                    icon: (0, s.jsx)(F.Z, {}),
                                                                    onClick: () => {
                                                                        e.onEvent(ve.ConversationInfoEvent.GroupInviteClicked);
                                                                    },
                                                                    title: i("Group Invite Link"),
                                                                    value: o.contents.metadata.attributes?.inviteUrl ? i("On") : i("Off"),
                                                                    showChevron: !0,
                                                                }),
                                                        ],
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)("div", { className: "mt-6 px-4 space-y-2 w-full", children: o.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(ce, { button: e, onEvent: p }, e.name)) }),
                            ],
                        }),
                    ],
                });
            }
            const ge = a.com.x.dms.participantlist,
                je = ({ id: e }) => {
                    const { t } = (0, _.$G)(),
                        [n, i] = (0, k.useState)(null),
                        o = (0, J.n)(),
                        r = (0, W.s)();
                    return (
                        (0, k.useEffect)(() => {
                            const t = new a.com.x.export.CancellationSignal(),
                                n = o.participantListComponent(
                                    t,
                                    a.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new ge.ParticipantListCallbacks(
                                        () => {
                                            r.toConversationInfo(e);
                                        },
                                        () => {},
                                    ),
                                );
                            return (
                                i(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [o, e, r]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(me, {
                                    title: t("All participants"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(ge.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(we, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(l.P, {}) }),
                            ],
                        })
                    );
                },
                we = ({ component: e }) => {
                    const t = (0, E._)(e.state);
                    (0, ne.e)(e.toasts);
                    const n = (0, k.useCallback)(
                            (t) => {
                                e.handleEvent(new ge.ParticipantListEvent.ParticipantClicked(t));
                            },
                            [e],
                        ),
                        i = (0, k.useCallback)(
                            (t, n) => {
                                e.handleEvent(new ge.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-4 py-2 overflow-y-auto", children: (0, s.jsx)(te, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) : null;
                };
            var be = n(699416),
                Ce = n(167285);
            const ye = a.com.x.dms.vanishingmode,
                ke = ({ id: e }) => {
                    const { t } = (0, _.$G)(),
                        [n, i] = (0, k.useState)(null),
                        o = (0, J.n)(),
                        r = (0, W.s)();
                    return (
                        (0, k.useEffect)(() => {
                            const t = new a.com.x.export.CancellationSignal(),
                                n = o.vanishingModeComponent(
                                    t,
                                    a.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new ye.VanishingModeCallbacks(() => {
                                        r.toConversationInfo(e);
                                    }),
                                );
                            return (
                                i(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [o, e, r]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(me, {
                                    title: t("Vanishing Mode"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(ye.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Ne, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(l.P, {}) }),
                            ],
                        })
                    );
                },
                Ne = ({ component: e }) => {
                    const { t } = (0, _.$G)(),
                        n = (0, E._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(xe.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(r.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, o) => {
                                    const a = i ? (0, Ce.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        l = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === o ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new ye.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(r.x, { children: a }), (0, s.jsx)("div", { className: "h-6 text-primary", children: l && (0, s.jsx)(be.Z, { width: 24, height: 24 }) })],
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    });
                };
            var Ie = n(787395),
                Se = n(463341),
                Ee = n(617588),
                Pe = n(628047),
                Me = n(853582),
                ze = n(55880),
                Ae = n(748055);
            const Re = a.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                Te = a.com.x.dms.model.DmTitleState,
                De = ({ component: e }) => {
                    const t = (0, E._)(e.state),
                        n = (0, i.a)("(max-width: 768px)"),
                        o = t.toolbarState instanceof a.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-row items-center h-16 border-b border-border pl-2 gap-3 cursor-pointer",
                        onClick: () => {
                            e.onEvent(a.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            n
                                ? (0, s.jsx)(c.z, {
                                      icon: (0, s.jsx)(de.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(a.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, s.jsx)(g, { avatarSize: "large", titleState: t.toolbarState, onCustomAvatarNeedsResolving: (t) => e.onEvent(new Re(t)), isInlineFacepile: !1 }),
                            (0, s.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, s.jsx)(d.R, { name: t.toolbarState.title, badges: o ? (0, w.r)(t.toolbarState.otherUser) : void 0 }), (0, s.jsx)(Le, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                Le = ({ toolbarState: e }) => ((e instanceof Te.Group || e instanceof Te.OneToOne) && e.ttl ? (0, s.jsx)(Be, { ttl: e.ttl }) : e instanceof Te.Group ? (0, s.jsxs)(r.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                Be = ({ ttl: e }) => (0, s.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, s.jsx)(xe.Z, { className: "text-gray-700" }), (0, s.jsx)(r.x, { size: "subtext2", color: "gray700", children: (0, ue.L)(e.inWholeMilliseconds) })] });
            var Ge = n(256958),
                Ue = n(849335);
            const _e = a.com.x.dms.groupinvite,
                Oe = ({ id: e }) => {
                    const { t } = (0, _.$G)(),
                        [n, i] = (0, k.useState)(null),
                        o = (0, J.n)(),
                        r = (0, W.s)();
                    return (
                        (0, k.useEffect)(() => {
                            const t = new a.com.x.export.CancellationSignal(),
                                n = o.groupInviteSettingsComponent(
                                    t,
                                    a.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new _e.GroupInviteSettingsCallbacks(() => {
                                        r.toConversationInfo(e);
                                    }),
                                );
                            return (
                                i(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [o, e, r]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(me, {
                                    title: t("Group Invite Link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(_e.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Ze, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(l.P, {}) }),
                            ],
                        })
                    );
                },
                Ze = ({ component: e }) => {
                    const { t } = (0, _.$G)(),
                        n = (0, E._)(e.state),
                        i = (0, k.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(_e.GroupInviteSettingsEvent.LinkCopied), (0, Ge.Am)(t("Link copied!")));
                        }, [e, n.inviteUrl, t]);
                    return (0, s.jsx)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl",
                            children: [
                                (0, s.jsx)("div", {
                                    className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between p-4",
                                        children: [
                                            (0, s.jsx)("div", { className: "flex items-center gap-2", children: (0, s.jsxs)("div", { className: "flex flex-col h-10 justify-between", children: [(0, s.jsx)(r.x, { size: "body", weight: "medium", color: "text", children: t("Group link") }), (0, s.jsx)(r.x, { size: "subtext2", color: "gray700", children: t("Let external users request to join your group") })] }) }),
                                            (0, s.jsx)("div", {
                                                className: "flex items-center gap-2",
                                                children: (0, s.jsx)(Ue.r, {
                                                    checked: n.isGroupInviteEnabled,
                                                    onCheckedChange: () => {
                                                        e.onEvent(_e.GroupInviteSettingsEvent.ToggleGroupInvite);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                n.isGroupInviteEnabled && (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full group hover:bg-gray-50", onClick: i, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4 gap-4", children: [(0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)(F.Z, { className: "shrink-0" }), (0, s.jsx)(r.x, { numberOfLines: 1, children: n.inviteUrl })] }), (0, s.jsx)("div", { className: "flex items-center gap-2 shrink-0", children: (0, s.jsx)(r.x, { size: "body", color: "gray500", className: "group-hover:text-blue-600", children: t("Copy") }) })] }) }),
                            ],
                        }),
                    });
                },
                Ve = a.com.x.dms.composer.composer.ChatComposerEvent;
            function Fe() {
                const e = (0, N.a)(),
                    t = (0, Ee.F)(),
                    n = (0, Pe.v)(),
                    i = (0, Me.k)(),
                    o = (0, ze.m)(),
                    [a, l] = (0, k.useState)(!1);
                return "" !== e && i
                    ? (0, s.jsx)(je, { id: e })
                    : "" !== e && t
                      ? (0, s.jsx)(pe, { id: e })
                      : "" !== e && n
                        ? (0, s.jsx)(ke, { id: e })
                        : "" !== e && o
                          ? (0, s.jsx)(Oe, { id: e })
                          : "" !== e
                            ? (0, s.jsx)($e, { id: e })
                            : (0, s.jsxs)("div", {
                                  className: "flex flex-col h-screen w-full justify-center items-center flex-grow gap-4",
                                  children: [
                                      (0, s.jsx)(r.x, { size: "title2", weight: "bold", children: "Select a message" }),
                                      (0, s.jsx)(r.x, { size: "body", color: "gray700", children: "Choose from your existing conversations or start a new one" }),
                                      (0, s.jsx)(c.z, {
                                          onClick: () => {
                                              l(!0);
                                          },
                                          size: "xLarge",
                                          variant: "brandFilled",
                                          children: "New message",
                                      }),
                                      a && (0, s.jsx)(z.x, { onVisibilityChange: l }),
                                  ],
                              });
            }
            function $e({ id: e }) {
                const [t, n] = (0, k.useState)(null),
                    i = (0, J.n)(),
                    o = (0, W.s)();
                return (
                    (0, k.useEffect)(() => {
                        const t = new a.com.x.export.CancellationSignal(),
                            s = i.dmComponent(
                                a.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new a.com.x.dms.chat.DmCallbacks(
                                    () => {
                                        o.toInbox();
                                    },
                                    () => {},
                                    () => {
                                        o.toConversationInfo(e);
                                    },
                                    () => {},
                                    () => {},
                                ),
                                t,
                            );
                        return (
                            n(s),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [i, e, o]),
                    t ? (0, s.jsx)(Je, { component: t }) : (0, s.jsx)("div", { className: "w-full h-screen", children: (0, s.jsx)(l.P, {}) })
                );
            }
            function Je({ component: e }) {
                const t = (0, E._)(e.state),
                    { t: n } = (0, _.$G)(),
                    i = (0, k.useCallback)(
                        (t) => {
                            e.composer.onEvent(new Ve.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    o = (0, k.useCallback)(() => {
                        e.composer.onEvent(Ve.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: a, handleDragOver: l, handleDragLeave: c, handleDrop: d } = (0, Ae.F)({ onFileAttached: i, onFileDrop: o, isEnabled: !t.isReadOnly });
                return (0, s.jsxs)("div", { className: "flex flex-col h-screen flex-grow relative", onDragOver: l, onDragLeave: c, onDrop: d, children: [a && (0, s.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, s.jsx)(r.x, { size: "subtext1", weight: "medium", color: "brand", children: n("Drop file to attach") }) }), (0, s.jsx)(De, { component: e }), (0, s.jsx)("div", { className: "flex-1 overflow-hidden", children: (0, s.jsx)(Se.Bu, { children: (0, s.jsx)(Ie.r, { component: e }) }) }), !t.isReadOnly && (0, s.jsx)(O.a, { component: e })] });
            }
            var We = n(607499);
            const qe = () => {
                    const [e, t] = (0, k.useState)(null),
                        n = (0, J.n)(),
                        i = (0, W.s)(),
                        [o, r] = (0, k.useState)(!1);
                    return (
                        (0, k.useEffect)(() => {
                            const e = new a.com.x.export.CancellationSignal(),
                                s = n.conversationListComponent(
                                    new a.com.x.dms.convlist.ConversationListCallbacks(
                                        (e) => {
                                            e ? i.toPinScreen("recovery") : i.toPinScreen("new");
                                        },
                                        (e) => {
                                            i.toConversation(e.id);
                                        },
                                        () => {
                                            r(!0);
                                        },
                                        () => {},
                                        (e) => {
                                            i.toPinScreen("verify", e);
                                        },
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
                        }, [n, i]),
                        null === e ? (0, s.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, s.jsx)(l.P, {}) }) : (0, s.jsx)(We.S, { children: (0, s.jsx)(Xe, { component: e, setShowNewDM: r, showNewDM: o }) })
                    );
                },
                Xe = ({ component: e, setShowNewDM: t, showNewDM: n }) => {
                    const a = (0, i.a)("(max-width: 768px)"),
                        r = (0, o.U)().id,
                        c = void 0 === r || "" === r;
                    return (0, E._)(e.state).isInitializing ? (0, s.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, s.jsx)(l.P, {}) }) : a ? (0, s.jsx)("div", { className: "flex w-full", children: c ? (0, s.jsx)(U, { component: e, setShowNewDM: t, showNewDM: n }) : (0, s.jsx)(Fe, {}) }) : (0, s.jsxs)("div", { className: "flex w-full", children: [(0, s.jsx)("div", { className: "w-[35%]", children: (0, s.jsx)(U, { component: e, setShowNewDM: t, showNewDM: n }) }), (0, s.jsx)("div", { className: "w-[65%]", children: (0, s.jsx)(Fe, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-b4a0aebf.56d358aa.js.map
