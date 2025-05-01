"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e0975bf4"],
    {
        547334: (e, t, n) => {
            n.d(t, { P: () => I });
            var s = n(552322),
                i = n(425522),
                a = n(941204),
                o = n(335944),
                r = n(702024),
                l = n(202784),
                c = n(94595),
                d = n(390278);
            function m({ src: e, type: t, dimensions: n }) {
                const { width: i, height: a } = h(n),
                    [r, c] = (0, l.useState)(!1),
                    m = [{ type: "Video" === t.name ? "video" : "Gif" === t.name ? "animated_gif" : "image", src: e, previewImage: e }];
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        "Video" === t.name ? (0, s.jsx)("div", { className: "max-w-[300px] max-h-[400px]", children: (0, s.jsx)(d.q, { src: e, poster: e, type: "video/mp4", autoPlay: !0, muted: !0, loop: !0, playsInline: !0, style: { width: `${i}px`, height: `${a}px` } }) }) : (0, s.jsx)("img", { src: e, loading: "lazy", alt: "attachment", className: "max-w-[300px] max-h-[400px] cursor-pointer bg-gray-50", style: { width: `${i}px`, height: `${a}px` }, onClick: () => c(!0) }),
                        (0, s.jsx)(o.e, {
                            mediaItems: m,
                            initialIndex: 0,
                            isOpen: r,
                            onClose: () => {
                                c(!1);
                            },
                        }),
                    ],
                });
            }
            function x({ dimensions: e }) {
                const { width: t, height: n } = h(e);
                return (0, s.jsx)("div", { className: "bg-gray-50 flex items-center justify-center", style: { width: `${t}px`, height: `${n}px` }, children: (0, s.jsx)(r.P, {}) });
            }
            function u({ dimensions: e }) {
                const { width: t, height: n } = h(e);
                return (0, s.jsxs)("div", { className: "bg-gray-50 flex flex-col gap-1.5 items-center justify-center text-gray-700", style: { width: `${t}px`, height: `${n}px` }, children: [(0, s.jsx)(c.Z, {}), (0, s.jsx)(a.x, { color: "gray700", children: "Failed to load" })] });
            }
            function h(e) {
                const t = e ? e.width / e.height : 1;
                let n = Math.min(300, e?.width || 200),
                    s = n / t;
                return s > 400 && ((s = 400), (n = s * t)), { width: n, height: s };
            }
            var p = n(812115),
                v = n(615069),
                f = n(517922),
                g = n(556160);
            const j = i.com.x.models.dm.PostLoadingState,
                w = i.com.x.dms.chat.DmEvent;
            function C({ post: e, onEvent: t, className: n }) {
                return e.postState instanceof j.NeedsResolution ? (t(new w.ResolvePost(e.id)), (0, s.jsx)(f.C, {})) : e.postState instanceof j.ResolvedPost ? (0, s.jsx)(g.K, { post: e.postState, url: e.url, className: n }) : (0, s.jsxs)(p.r, { href: e.url, target: "_blank", className: "gap-2 w-52 p-4 bg-gray-200 flex items-center justify-between", children: [(0, s.jsx)(a.x, { children: "x.com" }), (0, s.jsx)("div", { className: "text-headline1", children: (0, s.jsx)(v.Z, {}) })] });
            }
            const y = i.com.x.dms.model.MessageItemAttachment,
                b = i.com.x.dms.chat.DmEvent;
            function N({ urlCard: e, onEvent: t }) {
                e instanceof y.UrlCard.NeedsResolving && !e.showTapToLoadPrompt && t(new b.ResolveUrlCard(e, !1));
                let n = null;
                return e instanceof y.UrlCard.Resolved && (n = e.bannerImage && (0, s.jsx)("img", { src: e.bannerImage, loading: "lazy", alt: e.displayTitle || e.displayHostname, className: "max-w-[300px] max-h-[400px]" })), e instanceof y.UrlCard.Loading && (n = (0, s.jsx)("div", { className: "flex items-center justify-center h-32 pt-2 w-full", children: (0, s.jsx)(r.P, {}) })), (0, s.jsxs)("div", { className: "flex flex-col gap-0.5 bg-gray-100 cursor-pointer transition-colors duration-100", onClick: () => window.open(e.urlToOpen, "_blank"), children: [n, (0, s.jsxs)("div", { className: "flex flex-col gap-0.5 px-4 py-2 hover:bg-gray-50/50", children: [e.displayTitle && (0, s.jsx)(a.x, { weight: "medium", children: e.displayTitle }), (0, s.jsx)(a.x, { color: "gray900", size: "subtext2", children: e.displayHostname })] })] });
            }
            const k = i.com.x.dms.model.MessageItemAttachment,
                S = i.com.x.dms.chat.DmEvent,
                E = i.com.x.dms.model.MediaUriState;
            function I({ attachment: e, isReceived: t, onEvent: n, className: i }) {
                if (e instanceof k.Post) return (0, s.jsx)(C, { isReceived: t, post: e, onEvent: n, className: i });
                if (e instanceof k.UrlCard) return (0, s.jsx)(N, { urlCard: e, onEvent: n });
                if (e instanceof k.Media && e instanceof k.Media.FromServer) {
                    if ((e.uriState instanceof E.AttachmentNeedsResolving && n(new S.ResolveAttachment(e.uriState)), e.uriState instanceof E.ResolvedMedia)) return (0, s.jsx)(m, { src: e.uriState.uri, type: e.type, dimensions: e.dimensions });
                    if (e.uriState instanceof E.Resolving) return (0, s.jsx)(x, { dimensions: e.dimensions });
                    if (e.uriState === E.FailedToLoad) return (0, s.jsx)(u, { dimensions: e.dimensions });
                }
                return (0, s.jsx)(a.x, { color: t ? "text" : "white", children: "Attachment" });
            }
        },
        264531: (e, t, n) => {
            n.d(t, { BH: () => c, XE: () => l, mp: () => r });
            var s = n(552322),
                i = n(202784);
            const a = { path: "/dms", showDebugOptions: !1 },
                o = (0, i.createContext)(null),
                r = ({ children: e, settings: t }) => {
                    const n = { ...a, ...t };
                    return (0, s.jsx)(o.Provider, { value: n, children: e });
                },
                l = () => {
                    const e = (0, i.useContext)(o);
                    if (null === e) throw new Error("useXChatContext must be used within an XChatContextProvider");
                    return e;
                };
            function c() {
                return l().path;
            }
        },
        759746: (e, t, n) => {
            n.d(t, { M: () => r });
            var s = n(552322),
                i = n(475694),
                a = n(350311);
            const o = ({ firstUrl: e, resolution: t, secondUrl: n, size: i = "xxLarge" }) => {
                    const o = ((e) => {
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
                    return (0, s.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${o} - ${r} * 2)` }, children: [(0, s.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: r }, children: (0, s.jsx)(a.s, { url: e, size: l, resolution: t }) }), (0, s.jsx)("div", { style: { marginLeft: `calc(-${o} - ${r} * 2)`, marginTop: `calc(-${o} + ${r} * 2)`, marginBottom: o }, children: (0, s.jsx)(a.s, { url: n, size: l, resolution: t }) })] });
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
                        if (r.length >= 2) return (0, s.jsx)(o, { size: l, firstUrl: r[0]?.profileImageUrl, resolution: n, secondUrl: r[1]?.profileImageUrl });
                        if (1 === r.length) return (0, s.jsx)(a.s, { url: r[0]?.profileImageUrl, size: e, resolution: n });
                    }
                    const c = r.slice(0, 4).map((e) => e.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return (0, s.jsx)(i.o, { urls: c, size: e, resolution: n });
                };
        },
        350311: (e, t, n) => {
            n.d(t, { j: () => a, s: () => o });
            var s = n(552322),
                i = n(26429);
            const a = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                o = ({ url: e, size: t, resolution: n = "200x200" }) => (0, s.jsx)(i.q, { url: e || a, size: t, resolution: n });
        },
        611463: (e, t, n) => {
            n.d(t, { U: () => E, n: () => k });
            var s = n(552322),
                i = n(425522),
                a = n(202784),
                o = n(781441),
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
            const p = i.com.x.dms.util;
            class v extends i.com.x.dms.util.EntityParser {
                doParse(e) {
                    return i.kotlin.collections.KtList.fromJsArray([...(0, d.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Email(...e)), ...(0, m.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Hashtag(...e)), ...(0, x.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Cashtag(...e)), ...(0, u.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Mention(...e)), ...(0, h.Z)(e).map(({ indices: e }) => new p.ParsedEntity.Url(...e))]);
                }
            }
            var f = n(842898),
                g = n(889906),
                j = n(446368);
            const w = i.com.x.dms.EmojiPickerBottomSheetModel,
                C = i.kotlin.collections.KtList,
                y = (0, a.createContext)(void 0),
                b = "undefined" == typeof window;
            let N;
            function k() {
                const e = (0, a.useContext)(y);
                if (!e) throw new Error("useGraph must be used within an GraphProvider");
                return e;
            }
            function S(e, t) {
                const s = "true" === localStorage.getItem(l.e) || !1,
                    a = (0, r.n5)();
                const d = (function () {
                    const e = new c(new URL(n.p + n.u("node_modules_x-clients_features_dist_dms_sqlite_worker_js"), n.b), { type: void 0 }).createWorker();
                    return (e.onerror = (e) => {}), e;
                })();
                d.postMessage({ action: "init_db", dbName: `${(0, r.n5)()}_chat`, id: "init_1" });
                return new i.com.x.dms.WebDmObjectGraph(
                    i.com.x.models.UserIdentifier.ofString(a),
                    d,
                    o._,
                    (t, n) => {
                        (0, f.S)(t.value.toString(), e).then((e) => {
                            if (!e) return void n(new i.com.x.dms.LoadPostResult.OtherFailure());
                            const t = new i.com.x.dms.LoadPostResult.Success(e);
                            n(t);
                        });
                    },
                    async function () {
                        return new w(C.fromJsArray([]));
                    },
                    (e, n, s, i, a) => {
                        t.scribe({ client: "m5", page: e ?? void 0, section: n ?? void 0, component: s ?? void 0, element: i ?? void 0, action: a ?? void 0 });
                    },
                    new i.com.x.dms.WebOptions(!1, !0),
                    s,
                    new v(),
                    !1,
                );
            }
            function E({ children: e }) {
                if (b) return;
                const t = (0, g.useRelayEnvironment)(),
                    n = (0, j.z$)();
                return N || (N = S(t, n)), (0, s.jsx)(y.Provider, { value: N, children: e });
            }
        },
        200012: (e, t, n) => {
            n.d(t, { p: () => $e });
            var s = n(552322),
                i = n(469745),
                a = n(727071),
                o = n(425522),
                r = n(941204),
                l = n(702024),
                c = n(436059),
                d = n(412035),
                m = n(350311);
            const x = ({ avatar: e, avatarSize: t, onCustomAvatarNeedsResolving: n }) => (e instanceof o.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, s.jsx)(m.s, { url: e.uri, size: t }) : (e instanceof o.com.x.dms.model.MediaUriState.AvatarNeedsResolving && n(e), (0, s.jsx)(m.s, { size: t })));
            var u = n(759746);
            const h = ({ avatarSize: e, isInlineFacepile: t, onCustomAvatarNeedsResolving: n, titleState: i }) => {
                if (i instanceof o.com.x.dms.model.DmTitleState.OneToOne) return (0, s.jsx)(m.s, { url: i.otherUser.profileImageUrl, size: e });
                if (i instanceof o.com.x.dms.model.DmTitleState.Group) {
                    if (i.avatarType instanceof o.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, s.jsx)(x, { avatar: i.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: n });
                    if (i.avatarType instanceof o.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, s.jsx)(u.M, { avatarSize: e, isInlineFacepile: t, users: i.avatarType.users.asJsReadonlyArrayView() });
                }
                return (0, s.jsx)(m.s, { size: e });
            };
            var p = n(595455),
                v = n(338175),
                f = n(533788),
                g = n(803049),
                j = n(537335),
                w = n(336984);
            const C = ({ previewWithMetadata: e }) => {
                    if (!e.preview) return null;
                    const t = e.preview.latestMessagePreview,
                        n = e.metadata.usersByIdAllTime.asJsReadonlyMapView(),
                        i = n.get(t.sender)?.displayName,
                        a = e.isGroup && !t.isSent && !!i,
                        l = [];
                    if (t.messageText) a && l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: `${i}: ` }, 1)), l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: t.messageText }, 2));
                    else if (t.withAttachmentType) {
                        const e = ((e) => {
                            let t;
                            switch (e) {
                                case o.com.x.dms.MessageAttachmentType.MediaVideo:
                                    t = "a video";
                                    break;
                                case o.com.x.dms.MessageAttachmentType.MediaGif:
                                    t = "a GIF";
                                    break;
                                case o.com.x.dms.MessageAttachmentType.MediaAudio:
                                    t = "an audio";
                                    break;
                                case o.com.x.dms.MessageAttachmentType.MediaImage:
                                    t = "an image";
                                    break;
                                case o.com.x.dms.MessageAttachmentType.File:
                                    t = "a file";
                                    break;
                                case o.com.x.dms.MessageAttachmentType.UrlCard:
                                    t = "a URL";
                                    break;
                                case o.com.x.dms.MessageAttachmentType.Post:
                                    t = "a post";
                                    break;
                                default:
                                    t = "an attachment";
                            }
                            return t;
                        })(t.withAttachmentType);
                        a ? (l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: i }, 3)), l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: ` sent ${e}` }, 4))) : l.push((0, s.jsx)(r.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `Sent ${e}` }, 5));
                    }
                    return l;
                },
                y = o.com.x.dms.ReadByOthersIndicator,
                b = ({ onEvent: e, previewWithMetadata: t, isSelected: n }) => {
                    const i = t.preview?.timestampValue,
                        a = t.metadata.title instanceof o.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", { className: "flex flex-row", children: [(0, s.jsxs)("div", { className: `flex items-start grow p-2 mr-2 gap-5 rounded-lg hover:bg-gray-100 ${n && "bg-gray-0"} transition-colors cursor-pointer`, children: [(0, s.jsx)(h, { avatarSize: "xxLarge", titleState: t.metadata.title, onCustomAvatarNeedsResolving: (n) => e(new o.com.x.dms.convlist.ConversationListEvent.CustomAvatarNeedsResolving(t.conversationId, n)), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 gap-5", children: [(0, s.jsx)(d.R, { name: t.metadata.title.title, badges: a ? (0, w.r)(t.metadata.title.otherUser) : void 0 }), (0, s.jsx)(r.x, { color: "gray700", weight: t.isUnreadByMe ? "bold" : "normal", numberOfLines: 1, className: "break-all", children: (0, s.jsx)(C, { previewWithMetadata: t }) })] }), (0, s.jsxs)("div", { className: "flex flex-col items-end", children: [(0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [(0, s.jsx)(r.x, { size: "subtext3", children: i && (0, s.jsx)(j.Q, { timestamp: i }) }), t.isMuted && (0, s.jsx)(p.Z, { width: "14", height: "14", className: "text-gray-700" })] }), (0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [t.showReadByOthersIndicator === y.Read && (0, s.jsx)(v.Z, { width: "14", height: "14", className: "text-gray-700" }), t.showReadByOthersIndicator === y.Unread && (0, s.jsx)(f.Z, { width: "14", height: "14", className: "text-gray-700" }), t.isUnreadByMe && (0, s.jsx)(g.Z, { width: "14", height: "14", className: "text-blue-500" })] })] })] }), (0, s.jsx)("div", { className: `w-1 ${n ? "bg-text" : "bg-background"} justify-self-end rounded-lg` })] });
                };
            var N = n(202784),
                k = n(110241),
                S = n(921879);
            const E = ({ component: e, conversations: t }) => {
                const n = (0, k.a)(),
                    i = (0, N.useRef)(null),
                    a = (0, N.useRef)({ start: 0, end: 0 }),
                    r = (0, N.useCallback)(() => {
                        const n = i.current;
                        if (!n) return;
                        const { start: s, end: r } = a.current,
                            l = n.findStartIndex(),
                            c = n.findEndIndex();
                        if (s !== l || r !== c) {
                            const n = o.kotlin.collections.KtList.fromJsArray(t.slice(l, c + 1).map((e) => e.conversationId));
                            e.onEvent(new o.com.x.dms.convlist.ConversationListEvent.VisibleConversationIdsChanged(n)), (a.current = { start: l, end: c });
                        }
                    }, [e, t.slice]),
                    l = (0, N.useCallback)(
                        (t) => {
                            e.onEvent(t);
                        },
                        [e],
                    ),
                    c = (0, N.useCallback)(
                        (e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    onClick: () => {
                                        const t = new o.com.x.dms.convlist.ConversationListEvent.RowClicked(e.conversationId);
                                        l(t);
                                    },
                                    children: (0, s.jsx)(b, { previewWithMetadata: e, onEvent: l, isSelected: e.conversationId.id === n }),
                                },
                                e.conversationId.id,
                            ),
                        [n, l],
                    );
                return (0, s.jsx)(S.T, { api: i, onScroll: r, items: t, renderItem: c });
            };
            var I = n(533476),
                P = n(11099);
            function M() {
                return (0, s.jsxs)("div", { children: [(0, s.jsx)(r.x, { weight: "bold", children: "No chats yet" }), (0, s.jsx)(r.x, { color: "gray700", children: "Start chatting with end-to-end encryption" })] });
            }
            var R = n(984713),
                A = n(304183);
            const T = ({ component: e, shouldRegister: t }) =>
                    (0, s.jsxs)("div", {
                        className: "p-5 rounded-2xl border-2 border-gray-100 bg-gray-0 absolute bottom-4 left-4 right-4 flex flex-col gap-2 z-10",
                        children: [
                            (0, s.jsx)(c.z, {
                                className: "absolute top-2.5 right-2.5",
                                variant: "primaryText",
                                icon: (0, s.jsx)(A.Z, {}),
                                onClick: () => {
                                    e.onEvent(o.com.x.dms.convlist.ConversationListEvent.DismissBottomDialog);
                                },
                            }),
                            (0, s.jsx)(r.x, { size: "body", weight: "bold", children: "Daily Verification" }),
                            (0, s.jsx)(r.x, { size: "body", children: "Enter your 4-digit PIN so we can keep things secure and make sure you remember it." }),
                            (0, s.jsx)(c.z, {
                                className: "h-11",
                                variant: "primaryFilled",
                                onClick: () => {
                                    e.onEvent(new o.com.x.dms.convlist.ConversationListEvent.ClickPinReminderDialog(t));
                                },
                                children: (0, s.jsx)(r.x, { size: "body", weight: "bold", color: "background", children: "Enter PIN" }),
                            }),
                        ],
                    }),
                z = ({ connectionState: e }) => {
                    const t = ((e) => {
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
                    return t ? (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)("div", { children: (0, s.jsx)(l.P, {}) }), (0, s.jsx)(r.x, { weight: "medium", children: t })] }) : null;
                };
            var D = n(334038),
                L = n(264531);
            const U = o.com.x.dms.convlist,
                B = o.com.x.dms.InboxBottomDialog;
            function _({ component: e, setShowNewDM: t, showNewDM: n }) {
                const i = (0, I._)(e.state),
                    a = i.previews?.asJsReadonlyArrayView(),
                    { showDebugOptions: o } = (0, L.XE)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: "flex flex-col h-screen border-r relative w-full",
                            children: [
                                (0, s.jsxs)("header", {
                                    className: "flex items-center justify-between p-4 border-b border-border h-16",
                                    children: [
                                        (0, s.jsx)(r.x, { weight: "bold", size: "headline1", children: "Messages" }),
                                        i.showConnectionIndicator && (0, s.jsx)(z, { connectionState: i.showConnectionIndicator }),
                                        (0, s.jsxs)("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                i.isLoadingConversations && (0, s.jsx)("div", { className: "w-5", children: (0, s.jsx)(l.P, { size: "small" }) }),
                                                o && (0, s.jsx)(D.Z, {}),
                                                (0, s.jsx)(c.z, {
                                                    icon: (0, s.jsx)(P.Z, { className: "h-5 w-5" }),
                                                    onClick: () => {
                                                        e.onEvent(U.ConversationListEvent.FloatingActionButtonClicked);
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                a && a.length > 0 ? (0, s.jsx)(E, { conversations: a, component: e }) : (0, s.jsx)(M, {}),
                                i.showBottomDialog instanceof B.PinReminder && (0, s.jsx)(T, { component: e, shouldRegister: i.showBottomDialog.shouldRegister }),
                            ],
                        }),
                        n && (0, s.jsx)(R.x, { onVisibilityChange: t }),
                    ],
                });
            }
            var G = n(794069),
                V = n(787395),
                Z = n(611463),
                O = n(369962),
                $ = n(582440),
                F = n(154666);
            const J = o.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                W = o.com.x.dms.model.DmTitleState,
                X = ({ component: e }) => {
                    const t = (0, I._)(e.state),
                        n = (0, i.a)("(max-width: 768px)"),
                        a = t.toolbarState instanceof o.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-row items-center h-16 border-b border-border pl-2 gap-3 cursor-pointer",
                        onClick: () => {
                            e.onEvent(o.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            n
                                ? (0, s.jsx)(c.z, {
                                      icon: (0, s.jsx)($.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(o.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, s.jsx)(h, { avatarSize: "large", titleState: t.toolbarState, onCustomAvatarNeedsResolving: (t) => e.onEvent(new J(t)), isInlineFacepile: !1 }),
                            (0, s.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, s.jsx)(d.R, { name: t.toolbarState.title, badges: a ? (0, w.r)(t.toolbarState.otherUser) : void 0 }), (0, s.jsx)(q, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                q = ({ toolbarState: e }) => ((e instanceof W.Group || e instanceof W.OneToOne) && e.ttl ? (0, s.jsx)(K, { ttl: e.ttl }) : e instanceof W.Group ? (0, s.jsxs)(r.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                K = ({ ttl: e }) => (0, s.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, s.jsx)(F.Z, { className: "text-gray-700" }), (0, s.jsx)(r.x, { size: "subtext2", color: "gray700", children: (0, O.L)(e.inWholeMilliseconds) })] });
            var H = n(617588),
                Q = n(628047),
                Y = n(853582),
                ee = n(898100),
                te = n(511974),
                ne = n(682008),
                se = n(379342),
                ie = n(455091),
                ae = n(844098),
                oe = n(130629),
                re = n(816828),
                le = n(658358),
                ce = n(466285),
                de = n(620134),
                me = n(517652);
            const xe = ({ conversationId: e, onVisibilityChange: t }) => {
                    const [n, i] = (0, N.useState)(null),
                        a = (0, Z.n)();
                    return (
                        (0, N.useEffect)(() => {
                            const n = new o.com.x.export.CancellationSignal(),
                                s = a.addGroupParticipantsComponent(n, e, {
                                    get onFinished() {
                                        return () => {
                                            t(!1);
                                        };
                                    },
                                });
                            return (
                                i(s),
                                () => {
                                    n.cancel();
                                }
                            );
                        }, [a, e, t]),
                        (0, s.jsx)(ae.s, { isOpen: !0, onOpenChange: t, isDismissable: !0, children: (0, s.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: n ? (0, s.jsx)(ue, { component: n }) : (0, s.jsx)("div", { className: "h-full flex items-center", children: (0, s.jsx)(l.P, {}) }) }) })
                    );
                },
                ue = ({ component: e }) => {
                    const t = (0, I._)(e.state);
                    (0, le.e)(e.toasts);
                    const n = o.com.x.dms.mapToValueList(t.selectedUserIds).asJsReadonlyArrayView(),
                        i = (t) => () => {
                            e.handleEvent(new o.com.x.dms.addparticipants.AddGroupParticipantsEvent.DeleteSelectedGroupUser(t));
                        };
                    return (0, s.jsxs)("div", {
                        className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors",
                        children: [
                            (0, s.jsx)(oe.x, {
                                title: "Add people",
                                leftContent: (0, s.jsx)(c.z, {
                                    variant: "primaryText",
                                    icon: (0, s.jsx)($.Z, {}),
                                    onClick: () => {
                                        e.handleEvent(o.com.x.dms.addparticipants.AddGroupParticipantsEvent.BackButtonClicked);
                                    },
                                }),
                                rightContent: (0, s.jsx)(c.z, {
                                    onClick: () => {
                                        e.handleEvent(o.com.x.dms.addparticipants.AddGroupParticipantsEvent.DoneClicked);
                                    },
                                    variant: "primaryFilled",
                                    children: "Next",
                                }),
                            }),
                            (0, s.jsx)("div", {
                                children: (0, s.jsx)(re._, {
                                    autoFocus: !0,
                                    leftContent: (0, s.jsx)(me.Z, { className: "text-gray-700" }),
                                    placeholder: "Search people",
                                    onChange: (t) => {
                                        e.handleEvent(new o.com.x.dms.addparticipants.AddGroupParticipantsEvent.QueryChanged(t.target.value));
                                    },
                                    borderRadius: "none",
                                    className: "w-full",
                                }),
                            }),
                            (0, s.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: n.length > 0 && n.map((e) => (0, s.jsx)(de.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: i(e.id) }, e.id.userIdString)) }),
                            t.isCallingApi
                                ? (0, s.jsx)(l.P, {})
                                : (0, s.jsx)(S.T, {
                                      items: t.suggestions?.asJsReadonlyArrayView() ?? [],
                                      renderItem: (n) =>
                                          (0, s.jsx)(ce.a, {
                                              onClick: () => {
                                                  e.handleEvent(new o.com.x.dms.addparticipants.AddGroupParticipantsEvent.UserRowClicked(n.user));
                                              },
                                              user: n.user,
                                              isAlreadyParticipant: n.alreadyParticipant,
                                              isSelected: t.selectedUserIds.asJsReadonlyMapView().has(n.user.id) || n.alreadyParticipant,
                                          }),
                                  }),
                        ],
                    });
                };
            var he = n(776604),
                pe = n(578132),
                ve = n(903201),
                fe = n(427724),
                ge = n(705187);
            const je = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, menuItems: n, participant: i }) => {
                    if (!n || 0 === n.length) return null;
                    const a = n
                        .map((e) =>
                            ((e, t, n) => {
                                const i = () => {
                                    n(e, t);
                                };
                                switch (e) {
                                    case o.com.x.dms.ParticipantMenuItem.AddAsAdmin:
                                        return { text: "Add as admin", icon: (0, s.jsx)(pe.Z, {}), onClick: i };
                                    case o.com.x.dms.ParticipantMenuItem.RemoveAsAdmin:
                                        return { text: "Remove as admin", icon: (0, s.jsx)(ve.Z, {}), destructive: !0, onClick: i };
                                    case o.com.x.dms.ParticipantMenuItem.RemoveFromGroup:
                                        return { text: "Remove from group", icon: (0, s.jsx)(fe.Z, {}), destructive: !0, onClick: i };
                                }
                                return null;
                            })(e, i, t),
                        )
                        .filter((e) => !!e);
                    return (0, s.jsx)(he.P, { items: a, trigger: (0, s.jsx)(c.z, { className: "justify-self-end", icon: (0, s.jsx)(ge.Z, { className: "text-gray-700" }), variant: "primaryText", color: "gray700", backgroundColor: "gray700", onClick: () => e(i.user) }) });
                },
                we = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: i }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const a = i.get(n.user.id)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 py-2 items-center", children: [(0, s.jsx)(m.s, { url: n.user.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(d.R, { name: n.user.displayName, screenName: n.user.screenName, badges: (0, w.r)(n.user), isStacked: !0 }) }), (0, s.jsx)(je, { participant: n, menuItems: a, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.user.screenName);
                        }),
                    });
            var Ce = n(395828);
            function ye({ icon: e, destructive: t, onClick: n, title: i, value: a, showChevron: o = !1 }) {
                return (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4", children: [(0, s.jsxs)("div", { className: `flex items-center gap-2 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(r.x, { size: "body", weight: "medium", color: t ? "red500" : "text", children: i })] }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [a && (0, s.jsx)(r.x, { size: "body", color: "gray500", children: a }), o && (0, s.jsx)(te.Z, { className: "text-gray-500" })] })] }) });
            }
            const be = o.com.x.dms.convinfo,
                Ne = o.com.x.dms.ConversationInfoBottomButton;
            function ke({ button: e, onEvent: t }) {
                const n = (function (e) {
                    switch (e) {
                        case Ne.DeleteConversation:
                            return { title: "Delete conversation", icon: (0, s.jsx)(Ce.Z, {}), destructive: !0 };
                        case Ne.LeaveGroup:
                            return { title: "Leave conversation", icon: (0, s.jsx)(Ce.Z, {}) };
                        case Ne.ResignAsAdmin:
                            return { title: "Resign as admin", icon: (0, s.jsx)(ve.Z, {}) };
                    }
                    return null;
                })(e);
                return n
                    ? (0, s.jsx)(ye, {
                          icon: n.icon,
                          title: n.title,
                          destructive: n.destructive,
                          showChevron: !!n.showChevron,
                          onClick: () => {
                              t(new be.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                      })
                    : null;
            }
            const Se = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center h-16 border-b border-border w-full relative", children: [(0, s.jsx)("div", { className: "absolute left-2", children: (0, s.jsx)(c.z, { icon: (0, s.jsx)($.Z, {}), onClick: t, variant: "primaryText" }) }), (0, s.jsx)(r.x, { size: "headline1", weight: "bold", className: "flex-1 text-center", children: e })] }),
                Ee = ({ onEvent: e, ttl: t }) => (0, s.jsx)(ye, { icon: (0, s.jsx)(F.Z, {}), title: "Vanishing Mode", showChevron: !0, value: t ? (0, O.L)(t) : "Off", onClick: e }),
                Ie = o.com.x.dms.convinfo;
            function Pe({ id: e }) {
                const [t, n] = (0, N.useState)(null),
                    i = (0, Z.n)(),
                    a = (0, se.s)(),
                    [r, c] = (0, N.useState)(!1);
                return (
                    (0, N.useEffect)(() => {
                        const t = new o.com.x.export.CancellationSignal(),
                            s = i.convInfoComponent(
                                t,
                                o.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new Ie.ConversationInfoCallbacks(
                                    () => {
                                        a.toConversation(e);
                                    },
                                    () => {
                                        a.toInbox();
                                    },
                                    () => {},
                                    () => {},
                                    () => {
                                        c(!0);
                                    },
                                    () => {
                                        a.toParticipants(e);
                                    },
                                    () => {
                                        a.toVanishingMode(e);
                                    },
                                ),
                            );
                        return (
                            n(s),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [i, e, a]),
                    t ? (0, s.jsx)(Me, { component: t, showAddGroupParticipants: r, setShowAddGroupParticipants: c }) : (0, s.jsx)(l.P, {})
                );
            }
            function Me({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: i } = (0, ie.$G)(),
                    a = (0, I._)(e.state);
                (0, le.e)(e.toasts);
                const m = (0, N.useCallback)(
                        (t) => {
                            e.onEvent(new Ie.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    x = (0, N.useCallback)(
                        (t, n) => {
                            e.onEvent(new Ie.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (a.contents === Ie.ConversationInfoContents.Loading) return (0, s.jsx)(l.P, {});
                if (!(a.contents instanceof Ie.ConversationInfoContents.Loaded)) return null;
                const h = a.contents.convId instanceof o.com.x.models.dm.XConversationId.Group,
                    p = a.contents.metadata.title instanceof o.com.x.dms.model.DmTitleState.OneToOne,
                    v = a.contents.peopleSection,
                    f = (t) => {
                        e.onEvent(t);
                    };
                return (0, s.jsxs)("div", {
                    className: "flex flex-col w-full items-center self-center h-screen",
                    children: [
                        n && h && (0, s.jsx)(xe, { conversationId: a.contents.convId, onVisibilityChange: t }),
                        (0, s.jsx)(Se, {
                            onBackClicked: (t) => {
                                t.stopPropagation(), e.onEvent(Ie.ConversationInfoEvent.BackButtonClicked);
                            },
                            title: a.toolbarTitle === o.com.x.dms.convinfo.ConversationInfoTitle.Group ? i("Group info") : i("Conversation info"),
                        }),
                        (0, s.jsxs)("div", {
                            className: "w-full overflow-y-auto pb-3",
                            children: [
                                (0, s.jsxs)("div", { className: "flex flex-col items-center py-6 gap-2", children: [(0, s.jsx)("div", { className: "w-28 h-28 mb-4", children: (0, s.jsx)(u.M, { avatarSize: "fill", isInlineFacepile: !0, resolution: "400x400", users: a.contents.metadata.otherUsersOrSelf.asJsReadonlyArrayView() }) }), (0, s.jsx)(d.R, { name: a.contents.metadata.title.title, badges: p ? (0, w.r)(a.contents.metadata.title.otherUser) : void 0 }), p && (0, s.jsx)(ee.Q, { screenName: a.contents.metadata.title.otherUser.screenName }), a.contents.showEditGroupAction && (0, s.jsx)(c.z, { variant: "brandText", children: i("Edit") })] }),
                                !a.contents.metadata.isReadOnly &&
                                    (0, s.jsx)("div", {
                                        className: "w-full px-4",
                                        children: (0, s.jsx)(Ee, {
                                            ttl: a.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds,
                                            onEvent: () => {
                                                e.onEvent(Ie.ConversationInfoEvent.DisappearingMessagesClicked);
                                            },
                                        }),
                                    }),
                                v
                                    ? (0, s.jsxs)("div", {
                                          className: "w-full px-4 mt-4",
                                          children: [
                                              (0, s.jsxs)("div", { className: "w-full ps-4", children: [(0, s.jsx)(r.x, { size: "headline2", weight: "bold", className: "mb-2", children: i("People") }), (0, s.jsx)(we, { handleParticipantClicked: m, handleParticipantMenuButtonClicked: x, participants: v.participants.asJsReadonlyArrayView(), menuItemsMap: v.menuItems.asJsReadonlyMapView() })] }),
                                              v.showMoreUsersLink
                                                  ? (0, s.jsx)(c.z, {
                                                        className: "w-full pe-0",
                                                        variant: "primaryText",
                                                        onClick: () => {
                                                            e.onEvent(Ie.ConversationInfoEvent.TotalNumMembersClicked);
                                                        },
                                                        children: (0, s.jsxs)("div", { className: "flex flex-row justify-between items-center py-2 w-full", children: [(0, s.jsx)(r.x, { size: "body", weight: "medium", children: i("View all {number} members", { number: v.showMoreUsersLink + v.participants.asJsReadonlyArrayView().length }) }), (0, s.jsx)(te.Z, { className: "me-1.5", width: "24", height: "24" })] }),
                                                    })
                                                  : null,
                                              a.contents.peopleSection.canAddPeople
                                                  ? (0, s.jsx)(ye, {
                                                        icon: (0, s.jsx)(ne.Z, {}),
                                                        onClick: () => {
                                                            e.onEvent(Ie.ConversationInfoEvent.AddPeopleClicked);
                                                        },
                                                        title: i("Add people"),
                                                        showChevron: !0,
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)("div", { className: "mt-6 px-4 space-y-2 w-full", children: a.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(ke, { button: e, onEvent: f }, e.name)) }),
                            ],
                        }),
                    ],
                });
            }
            var Re = n(463341),
                Ae = n(522302),
                Te = n(167285);
            const ze = o.com.x.dms.vanishingmode,
                De = ({ id: e }) => {
                    const { t } = (0, ie.$G)(),
                        [n, i] = (0, N.useState)(null),
                        a = (0, Z.n)(),
                        r = (0, se.s)();
                    return (
                        (0, N.useEffect)(() => {
                            const t = new o.com.x.export.CancellationSignal(),
                                n = a.vanishingModeComponent(
                                    t,
                                    o.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new ze.VanishingModeCallbacks(() => {
                                        r.toConversationInfo(e);
                                    }),
                                );
                            return (
                                i(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [a, e, r]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(Se, {
                                    title: t("Vanishing Mode"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(ze.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Le, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(l.P, {}) }),
                            ],
                        })
                    );
                },
                Le = ({ component: e }) => {
                    const { t } = (0, ie.$G)(),
                        n = (0, I._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(F.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(r.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, a) => {
                                    const o = i ? (0, Te.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        l = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === a ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new ze.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(r.x, { children: o }), (0, s.jsx)("div", { className: "h-6 text-primary", children: l && (0, s.jsx)(Ae.Z, { width: 24, height: 24 }) })],
                                        },
                                        o,
                                    );
                                }),
                            }),
                        ],
                    });
                },
                Ue = o.com.x.dms.participantlist,
                Be = ({ id: e }) => {
                    const { t } = (0, ie.$G)(),
                        [n, i] = (0, N.useState)(null),
                        a = (0, Z.n)(),
                        r = (0, se.s)();
                    return (
                        (0, N.useEffect)(() => {
                            const t = new o.com.x.export.CancellationSignal(),
                                n = a.participantListComponent(
                                    t,
                                    o.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new Ue.ParticipantListCallbacks(
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
                        }, [a, e, r]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(Se, {
                                    title: t("All participants"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(Ue.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(_e, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(l.P, {}) }),
                            ],
                        })
                    );
                },
                _e = ({ component: e }) => {
                    const t = (0, I._)(e.state);
                    (0, le.e)(e.toasts);
                    const n = (0, N.useCallback)(
                            (t) => {
                                e.handleEvent(new Ue.ParticipantListEvent.ParticipantClicked(t));
                            },
                            [e],
                        ),
                        i = (0, N.useCallback)(
                            (t, n) => {
                                e.handleEvent(new Ue.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-4 py-2 overflow-y-auto", children: (0, s.jsx)(we, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) : null;
                };
            function Ge() {
                const e = (0, k.a)(),
                    t = (0, H.F)(),
                    n = (0, Q.v)(),
                    i = (0, Y.k)(),
                    [a, o] = (0, N.useState)(!1);
                return "" !== e && i
                    ? (0, s.jsx)(Be, { id: e })
                    : "" !== e && t
                      ? (0, s.jsx)(Pe, { id: e })
                      : "" !== e && n
                        ? (0, s.jsx)(De, { id: e })
                        : "" !== e
                          ? (0, s.jsx)(Ve, { id: e })
                          : (0, s.jsxs)("div", {
                                className: "flex flex-col h-screen w-full justify-center items-center flex-grow gap-4",
                                children: [
                                    (0, s.jsx)(r.x, { size: "title2", weight: "bold", children: "Select a message" }),
                                    (0, s.jsx)(r.x, { size: "body", color: "gray700", children: "Choose from your existing conversations or start a new one" }),
                                    (0, s.jsx)(c.z, {
                                        onClick: () => {
                                            o(!0);
                                        },
                                        size: "xLarge",
                                        variant: "brandFilled",
                                        children: "New message",
                                    }),
                                    a && (0, s.jsx)(R.x, { onVisibilityChange: o }),
                                ],
                            });
            }
            function Ve({ id: e }) {
                const [t, n] = (0, N.useState)(null),
                    i = (0, Z.n)(),
                    a = (0, se.s)();
                return (
                    (0, N.useEffect)(() => {
                        const t = new o.com.x.export.CancellationSignal(),
                            s = i.dmComponent(
                                o.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new o.com.x.dms.chat.DmCallbacks(
                                    () => {
                                        a.toInbox();
                                    },
                                    () => {},
                                    () => {
                                        a.toConversationInfo(e);
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
                    }, [i, e, a]),
                    t ? (0, s.jsx)(Ze, { component: t }) : (0, s.jsx)("div", { className: "w-full h-screen", children: (0, s.jsx)(l.P, {}) })
                );
            }
            function Ze({ component: e }) {
                const t = (0, I._)(e.state);
                return (0, s.jsxs)("div", { className: "flex flex-col h-screen flex-grow", children: [(0, s.jsx)(X, { component: e }), (0, s.jsx)("div", { className: "flex-1 overflow-hidden", children: (0, s.jsx)(Re.Bu, { children: (0, s.jsx)(V.r, { component: e }) }) }), !t.isReadOnly && (0, s.jsx)(G.R, { component: e })] });
            }
            var Oe = n(607499);
            const $e = () => {
                    const [e, t] = (0, N.useState)(null),
                        n = (0, Z.n)(),
                        i = (0, se.s)(),
                        [a, r] = (0, N.useState)(!1);
                    return (
                        (0, N.useEffect)(() => {
                            const e = new o.com.x.export.CancellationSignal(),
                                s = n.conversationListComponent(
                                    new o.com.x.dms.convlist.ConversationListCallbacks(
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
                        null === e ? (0, s.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, s.jsx)(l.P, {}) }) : (0, s.jsx)(Oe.S, { children: (0, s.jsx)(Fe, { component: e, setShowNewDM: r, showNewDM: a }) })
                    );
                },
                Fe = ({ component: e, setShowNewDM: t, showNewDM: n }) => {
                    const o = (0, i.a)("(max-width: 768px)"),
                        r = (0, a.U)().id,
                        c = void 0 === r || "" === r;
                    return (0, I._)(e.state).isInitializing ? (0, s.jsx)("div", { className: "flex flex-col justify-center h-screen w-full", children: (0, s.jsx)(l.P, {}) }) : o ? (0, s.jsx)("div", { className: "flex w-full", children: c ? (0, s.jsx)(_, { component: e, setShowNewDM: t, showNewDM: n }) : (0, s.jsx)(Ge, {}) }) : (0, s.jsxs)("div", { className: "flex w-full", children: [(0, s.jsx)("div", { className: "w-[35%]", children: (0, s.jsx)(_, { component: e, setShowNewDM: t, showNewDM: n }) }), (0, s.jsx)("div", { className: "w-[65%]", children: (0, s.jsx)(Ge, {}) })] });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e0975bf4.a6d79a8a.js.map
