"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-eca6a814"],
    {
        718278: (e, s, t) => {
            t.d(s, { o: () => i });
            var n = t(552322),
                a = t(436059),
                o = t(425522);
            const r = o.com.x.logger.XLog,
                i = () =>
                    (0, n.jsx)(a.z, {
                        onClick: async () => {
                            r.flush();
                            try {
                                const e = await navigator.storage.getDirectory(),
                                    s = await e.getDirectoryHandle("dm-dev-logs", { create: !1 }),
                                    t = await window.showDirectoryPicker({ mode: "readwrite", startIn: "downloads" }),
                                    n = new Date().toISOString().replace(/[:.]/g, "-"),
                                    a = await t.getDirectoryHandle(`xchat-dm-dev-logs-${n}`, { create: !0 });
                                for await (const e of s.values())
                                    if ("file" === e.kind) {
                                        const s = await e.getFile(),
                                            t = await a.getFileHandle(e.name, { create: !0 }),
                                            n = await t.createWritable();
                                        await n.write(s), await n.close();
                                    }
                            } catch (e) {}
                        },
                        children: "Download Logs",
                    });
        },
        794069: (e, s, t) => {
            t.d(s, { R: () => E });
            var n = t(552322),
                a = t(425522),
                o = t(941204),
                r = t(436059),
                i = t(816828),
                l = t(498284),
                c = t(304183),
                d = t(950268),
                m = t(136048),
                u = t(202784),
                x = t(533476),
                h = t(658358),
                g = t(950849),
                p = t(595117),
                f = t(607499),
                v = t(455091);
            function y({ replyingTo: e, onRemoveReply: s }) {
                return (0, n.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.displayName ? (0, n.jsxs)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", e.senderInfo.displayName] }) : null, (0, n.jsx)(o.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, n.jsx)(r.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(c.Z, {}), onClick: s })] });
            }
            var j = t(556160),
                w = t(517922);
            function C({ attachment: e, onRemoveAttachment: s }) {
                if (!e.shouldRender) return null;
                let t = "Attachment",
                    i = null;
                return e instanceof a.com.x.models.dm.ChatComposerAttachment.Media ? (t = "Media") : e instanceof a.com.x.models.dm.ChatComposerAttachment.Post ? ((t = ""), (i = e.post instanceof a.com.x.models.dm.PostLoadingState.ResolvedPost ? (0, n.jsx)(j.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, n.jsx)(w.C, {}))) : e instanceof a.com.x.models.dm.ChatComposerAttachment.UrlCard ? (t = "URL") : e instanceof a.com.x.models.dm.ChatComposerAttachment.File && (t = "File"), (0, n.jsxs)("div", { className: "flex px-1 w-full justify-between", children: [(0, n.jsxs)("div", { className: "flex flex-col gap-1", children: [t && (0, n.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: t }), i] }), e.showRemoveButton && (0, n.jsx)("div", { className: "flex items-center", children: (0, n.jsx)(r.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(c.Z, {}), onClick: s }) })] });
            }
            const N = a.com.x.dms.composer.composer.RightButtonState,
                b = a.com.x.dms.composer.composer.ChatComposerEvent,
                I = !1;
            function E({ component: e }) {
                const { t: s } = (0, v.$G)(),
                    t = (0, x._)(e.composer.state),
                    j = (0, u.useRef)(null),
                    w = (0, u.useRef)(null);
                (0, h.e)(e.composer.toasts);
                const E = (0, u.useCallback)(() => {
                        j.current?.focus();
                    }, []),
                    k = e.composer.triggerComposerFocusEvents;
                (0, g.E)(k, E);
                const R = () => {
                    t.rightButton === N.SendActive && e.composer.onEvent(new a.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(t.rightButton));
                };
                return (0, n.jsx)(f.S, {
                    children: (0, n.jsx)("div", {
                        className: "bg-background w-full p-2",
                        children: (0, n.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                t.isEditing ? (0, n.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(l.Z, {}), (0, n.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, n.jsx)(r.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(c.Z, {}), onClick: () => e.composer.onEvent(a.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                t.replyingTo ? (0, n.jsx)(y, { replyingTo: t.replyingTo, onRemoveReply: () => e.composer.onEvent(a.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                t.attachment ? (0, n.jsx)(C, { attachment: t.attachment, onRemoveAttachment: () => e.composer.onEvent(a.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }) : null,
                                (0, n.jsxs)("div", {
                                    className: "flex items-center gap-2 w-full backdrop-blur-md bg-white/80",
                                    children: [
                                        (0, n.jsx)("input", {
                                            type: "file",
                                            ref: w,
                                            onChange: async (s) => {
                                                const t = s.target.files?.[0];
                                                if (t)
                                                    try {
                                                        const s = await (0, p.l)(t),
                                                            n = t.type.startsWith("image/") || t.type.startsWith("video/") || t.type.startsWith("audio/") ? new b.OnMediaAttached(s) : new b.OnFileAttached(s);
                                                        e.composer.onEvent(n);
                                                    } catch (e) {}
                                            },
                                            className: "hidden",
                                            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt",
                                        }),
                                        I &&
                                            t.canAddAttachment &&
                                            (0, n.jsx)(r.z, {
                                                size: "large",
                                                icon: (0, n.jsx)(d.Z, {}),
                                                onClick: () => {
                                                    w.current?.click();
                                                },
                                                className: "bg-gray-100",
                                            }),
                                        (0, n.jsx)("form", {
                                            onSubmit: (e) => {
                                                e.preventDefault();
                                            },
                                            className: "flex-1",
                                            children: (0, n.jsx)(i._, {
                                                multiline: !0,
                                                variant: "dashed",
                                                value: t.currentText,
                                                onKeyDown: (e) => {
                                                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), R());
                                                },
                                                onChange: (s) => {
                                                    e.composer.onEvent(new a.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(s.target.value));
                                                },
                                                placeholder: s("Message"),
                                                className: "w-full max-h-60 py-2",
                                                ref: j,
                                                rightContent: t.rightButton !== N.SendInactive ? (0, n.jsx)(r.z, { onClick: R, icon: (0, n.jsx)(m.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
        },
        787395: (e, s, t) => {
            t.d(s, { r: () => Ee });
            var n = t(552322),
                a = t(921879),
                o = t(702024),
                r = t(533476),
                i = t(425522),
                l = t(26429),
                c = t(941204),
                d = t(475694),
                m = t(369962);
            const u = i.com.x.dms.model.InformationalItemContents;
            function x({ avatarUrl: e }) {
                return e ? (0, n.jsx)(l.q, { url: e, size: "small" }) : null;
            }
            function h({ message: e }) {
                return (0, n.jsx)(c.x, { size: "subtext2", weight: "medium", color: "gray600", children: e });
            }
            function g({ children: e }) {
                return (0, n.jsx)("div", { className: "flex justify-center items-center my-2", children: e });
            }
            function p({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const r = s[0],
                        i = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = r?.displayName || "Unknown"), (a = s.length - 1), (o = e.sender?.displayName), `${t} and ${a} other were added by ${o}`) : ((e, s) => `${e} and ${s} other were added`)(r?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: i }), (0, n.jsx)(h, { message: l })] });
                }
                var t, a, o;
                const r = s[0],
                    i = e.sender?.displayName ? ((e, s) => `${e} was added by ${s}`)(r?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was added`)(r?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(x, { avatarUrl: r?.profileImageUrl }), (0, n.jsx)(h, { message: i })] });
            }
            function f({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const r = s[0],
                        i = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = r?.displayName || "Unknown"), (a = s.length - 1), (o = e.sender?.displayName), `${t} and ${a} other were removed by ${o}`) : ((e, s) => `${e} and ${s} other were removed`)(r?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: i }), (0, n.jsx)(h, { message: l })] });
                }
                var t, a, o;
                const r = s[0],
                    i = e.sender?.displayName ? ((e, s) => `${e} was removed by ${s}`)(r?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was removed`)(r?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(x, { avatarUrl: r?.profileImageUrl }), (0, n.jsx)(h, { message: i })] });
            }
            function v({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${s} made ${e} member${e > 1 ? "s" : ""} an admin`)(e.affectedUsers.asJsReadonlyArrayView().length, t);
                return (0, n.jsx)(h, { message: a });
            }
            function y({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${s} removed admin status from ${e} member${e > 1 ? "s" : ""}`)(e.affectedUsers.asJsReadonlyArrayView().length, t);
                return (0, n.jsx)(h, { message: a });
            }
            function j({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${e} changed the group name to ${s}`)(e.senderIsCurrentUser ? "You" : t, e.newTitle ?? "Untitled");
                return (0, n.jsx)(h, { message: a });
            }
            function w({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e) => `${e} updated the group photo`)(e.senderIsCurrentUser ? "You" : t);
                return (0, n.jsx)(h, { message: a });
            }
            function C({ contents: e }) {
                const s = e.newTtl?.inWholeMilliseconds || 0,
                    t = e.sender,
                    a = t?.displayName ?? "A member",
                    o = e.senderIsCurrentUser ? "You" : a,
                    r = 0 === s ? ((e) => `${e} turned vanishing mode off`)(o) : ((e, s) => `${e} set vanishing mode to ${(0, m.L)(s)}`)(o, s);
                return (0, n.jsx)(h, { message: r });
            }
            function N({ contents: e }) {
                let s = e.newDate.toString();
                if (e.newDate === i.com.x.dms.model.KmpDateFormat.Today) s = "Today";
                else if (e.newDate === i.com.x.dms.model.KmpDateFormat.Yesterday) s = "Yesterday";
                else if (e.newDate instanceof i.com.x.dms.model.KmpDateFormat.Date) {
                    const t = e.newDate.kmpDate,
                        n = new Date(t.year, t.month - 1, t.day),
                        a = "undefined" != typeof navigator ? navigator.language : "en",
                        o = { month: "short", day: "numeric", ...(e.newDate.includeYear && { year: "numeric" }) };
                    s = n.toLocaleDateString(a, o);
                }
                return (0, n.jsx)(h, { message: s });
            }
            function b({ informationalItem: e }) {
                const s = e.contents;
                return (0, n.jsx)(g, { children: s instanceof u.AddedGroupMembers ? (0, n.jsx)(p, { contents: s }) : s instanceof u.RemovedGroupMembers ? (0, n.jsx)(f, { contents: s }) : s instanceof u.AddedGroupAdmins ? (0, n.jsx)(v, { contents: s }) : s instanceof u.RemovedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof u.ChangedGroupTitle ? (0, n.jsx)(j, { contents: s }) : s instanceof u.ChangedGroupAvatar ? (0, n.jsx)(w, { contents: s }) : s instanceof u.DefaultTtlChanged ? (0, n.jsx)(C, { contents: s }) : s instanceof u.DateChanged ? (0, n.jsx)(N, { contents: s }) : null });
            }
            var I = t(202784),
                E = t(776604),
                k = t(436059),
                R = t(713014),
                D = t(285446),
                A = t(265830),
                S = t(498284),
                $ = t(395828),
                M = t(705187);
            const U = i.com.x.dms.model.ChatMessageAction,
                z = i.com.x.dms.chat.DmEvent,
                F = i.com.x.models.KMPRect;
            function T({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: o }) {
                const r = t || !!s?.longPress,
                    i = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const t = () => s(new z.MessageActionClick(e));
                                switch (e) {
                                    case U.Report:
                                    case U.DsaReport:
                                        return null;
                                }
                                return e instanceof U.Reply ? { text: "Reply", icon: (0, n.jsx)(R.Z, {}), onClick: t } : e instanceof U.CancelSend ? { text: "Cancel message", icon: void 0, onClick: t } : e instanceof U.RetrySend ? { text: "Try sending again", icon: (0, n.jsx)(D.Z, {}), onClick: t } : e instanceof U.CopyText ? { text: "Copy message text", icon: (0, n.jsx)(A.Z, {}), onClick: () => navigator.clipboard.writeText(e.text) } : e instanceof U.Edit ? { text: "Edit message", icon: (0, n.jsx)(S.Z, {}), onClick: t } : e instanceof U.DeleteForAll ? { text: "Delete for All", icon: (0, n.jsx)($.Z, {}), destructive: !0, onClick: t } : e instanceof U.DeleteForSelf || e instanceof U.DeletePending ? { text: "Delete for me", icon: (0, n.jsx)($.Z, {}), destructive: !0, onClick: t } : null;
                            })(e, o),
                        )
                        .filter((e) => !!e);
                return (0, n.jsx)("div", {
                    className: `flex self-center items-center gap-2 bg-background border rounded-full p-1 shadow-sm ${!r && "invisible"}`,
                    onClick: (e) => e.stopPropagation(),
                    children: (0, n.jsx)(E.P, {
                        items: i ?? [],
                        trigger: (0, n.jsx)(k.z, { variant: "primaryText", size: "xSmall", icon: (0, n.jsx)(M.Z, {}), color: "gray600" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new z.MessageLongPressed(e, new F(0, 0, 0, 0), a) : z.MessageFocusedDialogDismissed;
                            o(t);
                        },
                    }),
                });
            }
            function P({ user: e, avatarDisplayMode: s }) {
                return e && e.profileImageUrl && "None" !== s.name ? ("AsPadding" === s.name ? (0, n.jsx)("div", { className: "px-4", children: " " }) : (0, n.jsx)("div", { children: (0, n.jsx)(l.q, { url: e.profileImageUrl, size: "large" }) })) : null;
            }
            var Z = t(455091),
                V = t(607499),
                L = t(547334),
                J = t(461222),
                _ = t(338175),
                B = t(154666);
            function G(e) {
                const s = Math.round(e / 60),
                    t = s > 60 ? Math.ceil(s / 60) : 0,
                    n = t > 24 ? Math.ceil(t / 24) : 0,
                    a = n > 7 ? Math.ceil(n / 7) : 0;
                return a > 0 ? `${a}w` : n > 0 ? `${n}d` : t > 0 ? `${t}h` : s > 0 ? `${s}m` : "< 1m";
            }
            function K({ ttlInfo: e, isReceived: s }) {
                const [t, a] = (0, I.useState)(0);
                return (
                    (0, I.useEffect)(() => {
                        const s = Math.floor(e.timeToLive.inWholeMilliseconds / 1e3),
                            t = () => {
                                const t = e.ttlStartedAtValue?.epochSeconds,
                                    n = Math.floor(Date.now() / 1e3);
                                a(s - (t ? n - t : 0));
                            };
                        t();
                        const n = setInterval(t, 2e4);
                        return () => clearInterval(n);
                    }, [e]),
                    (0, n.jsxs)("div", { className: "flex gap-0.5 items-center " + (s ? "flex-row" : "flex-row-reverse"), children: [(0, n.jsx)(B.Z, { className: "w-4 h-4 text-gray-700" }), (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: G(t) })] })
                );
            }
            function O({ messageInfo: e, isReceived: s }) {
                const t = e.showReadUsers?.asJsReadonlyArrayView().map((e) => e.profileImageUrl || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") || [],
                    a = t.length > 1;
                return (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.timeToLive && (0, n.jsx)(K, { ttlInfo: e.timeToLive, isReceived: s }), e.timeToLive && (e.showEdited || (e.showReadUsers && !a)) ? (0, n.jsx)(J.A, {}) : null, e.showEdited && (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: "Edited" }), e.showEdited && e.showReadUsers && !a ? (0, n.jsx)(J.A, {}) : null, e.showReadUsers && (0, n.jsxs)(n.Fragment, { children: [a ? (0, n.jsx)(d.o, { urls: t, size: "small", spacing: 6, stackOrder: "ascending" }) : (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: "Read" }), (0, n.jsx)("div", { className: "p-0.5 bg-background rounded-full z-20 " + (a ? "-ms-[12px]" : "-ms-[2px]"), children: (0, n.jsx)(_.Z, { width: "16", height: "16", viewBox: "1.75 1.75 20.5 20.5", className: "text-gray-700" }) })] })] });
            }
            var q = t(862399);
            const Y = ({ isReceived: e, textContent: s, textEntities: t }) => {
                    const a = {};
                    return t.forEach((e) => W(e, a)), (0, n.jsx)(q.W, { color: e ? "text" : "white", entities: a, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 });
                },
                W = (e, s) => {
                    const t = [e.startIdx, e.endIdx];
                    e instanceof i.com.x.models.text.AddressEntity || (e instanceof i.com.x.models.text.MentionEntity ? (s.mentions || (s.mentions = []), s.mentions.push({ screenName: e.screenName, indices: t })) : e instanceof i.com.x.models.text.UrlEntity ? (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.displayUrl, url: H(e.url), indices: t })) : e instanceof i.com.x.models.text.EmailEntity ? (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.email, url: X(e.email), indices: t })) : e instanceof i.com.x.models.text.HashtagEntity ? (s.hashtags || (s.hashtags = []), s.hashtags.push({ text: e.text, indices: t })) : e instanceof i.com.x.models.text.CashtagEntity ? (s.symbols || (s.symbols = []), s.symbols.push({ text: e.text, indices: t })) : e instanceof i.com.x.models.text.PhoneNumberEntity && (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.phoneNumberForTelLink, url: `tel:${e.phoneNumberForTelLink}`, indices: t })));
                };
            function H(e) {
                return /^https?:\/\//i.test(e) ? e : `https://${e}`;
            }
            function X(e) {
                return /^mailto:/i.test(e) ? e : `mailto:${e}`;
            }
            var Q = t(796309);
            const ee = ({ emoji: e, count: s }) => (0, n.jsxs)("div", { className: "flex items-center bg-gray-50 rounded-full px-2 shadow-sm gap-1 border border-background", children: [(0, n.jsx)(c.x, { size: "headline2", children: e }), s > 1 && (0, n.jsx)(c.x, { size: "subtext3", weight: "bold", color: "gray700", children: s })] }),
                se = ({ reaction: e }) => (0, n.jsx)(ee, { emoji: e.reaction, count: e.users.asJsReadonlyArrayView().length }),
                te = ({ className: e, reactions: s }) => (0, n.jsxs)("div", { className: (0, Q.cn)("flex flex-row gap-1", e), children: [s.slice(0, 5).map((e) => (0, n.jsx)(se, { reaction: e }, e.reaction)), s.length > 5 && (0, n.jsx)(ee, { emoji: "…", count: 0 })] });
            var ne = t(167285),
                ae = t(708464),
                oe = t(86781),
                re = t(840489);
            const ie = i.com.x.dms.chat.DmEvent,
                le = i.com.x.models.KMPRect,
                ce = ({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, onEvent: a }) => {
                    const [o, r] = (0, I.useState)(!1);
                    if (!t && !s?.quickReactions) return null;
                    const i = s?.quickReactions?.asJsReadonlyArrayView().map((e) => e.asJsReadonlyArrayView());
                    return (0, n.jsx)(oe.J, {
                        trigger: (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, n.jsx)(k.z, {
                                variant: "primaryText",
                                size: "small",
                                color: "red600",
                                icon: (0, n.jsx)(ae.Z, {}),
                                onClick: () => {
                                    null === s ? (r(!0), a(new ie.MessageDoubleClicked(e, new le(0, 0, 0, 0), !1))) : (r(!1), a(ie.MessageFocusedDialogDismissed));
                                },
                            }),
                        }),
                        open: null !== s && o,
                        onOpenChange: (e) => {
                            !e && o && (a(ie.MessageFocusedDialogDismissed), r(!1));
                        },
                        children: (0, n.jsx)("div", {
                            className: "flex flex-col p-1 rounded-lg border",
                            children: i?.map((s, t) =>
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: "flex",
                                        children: s.map((s) =>
                                            (0, n.jsx)(
                                                "button",
                                                {
                                                    type: "button",
                                                    className: (0, re.Z)("w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100", { "bg-gray-50": s.isSelected }),
                                                    onClick: () => {
                                                        a(new ie.ReactionPickerItemClick(s, e));
                                                    },
                                                    children: (0, n.jsx)(c.x, { size: "headline1", children: s.emoji }),
                                                },
                                                s.emoji,
                                            ),
                                        ),
                                    },
                                    `reaction-row-${t}`,
                                ),
                            ),
                        }),
                    });
                };
            var de = t(410672);
            const me = ({ isReceived: e, replyPreview: s, replierInfo: t }) => {
                const a = t.id,
                    { senderId: o } = s,
                    r = t.displayName,
                    i = s.senderDisplayName,
                    l = (0, n.jsx)(c.x, { as: "span", className: "text-text/70", size: "subtext2" }),
                    d = (0, n.jsx)(Z.cC, { i18nKey: "<highlight>{replier}</highlight> to you", values: { replier: r }, components: { highlight: l } }),
                    m = (0, n.jsx)(Z.cC, { i18nKey: "<highlight>{replier}</highlight> to {sender}", values: { replier: r, sender: i }, components: { highlight: l } }),
                    u = (0, n.jsx)(Z.cC, { i18nKey: "<highlight>{replier}</highlight> to themself", values: { replier: r }, components: { highlight: l } }),
                    x = (0, n.jsx)(Z.cC, { i18nKey: "<highlight>You</highlight> to yourself", components: { highlight: l } }),
                    h = (0, n.jsx)(Z.cC, { i18nKey: "<highlight>You</highlight> to {sender}", values: { sender: i }, components: { highlight: l } }),
                    g = a.equals(o) ? (s.senderIsCurrentUser ? x : u) : s.senderIsCurrentUser ? d : e ? m : h;
                return (0, n.jsxs)("div", { className: "flex flex-col mt-0.5 " + (e ? "items-start" : "items-end"), children: [s.showReplyNames && (0, n.jsxs)("div", { className: "flex gap-1 px-2 " + (e ? "text-start" : "text-end"), children: [(0, n.jsx)(de.Z, { className: "inline-block text-text/70" }), (0, n.jsx)(c.x, { as: "span", className: "text-text/40", size: "subtext2", children: g })] }), (0, n.jsx)("div", { className: "flex flex-col px-3 py-1.5 rounded-2xl gap-3 border " + (s.senderIsCurrentUser ? "border-primary/50" : "border-gray-400"), children: (0, n.jsx)(c.x, { color: s.senderIsCurrentUser ? "primary" : "gray900", size: "subtext1", numberOfLines: 1, children: s.previewText }) })] });
            };
            var ue = t(469745);
            function xe({ messageItem: e, messageFocusedDialog: s, onEvent: t }) {
                const { t: a } = (0, Z.$G)(),
                    o = (0, ue.a)("(max-width: 768px)"),
                    r = e instanceof i.com.x.dms.model.MessageItemReceived,
                    l = null !== e.textContent && !e.supersizeEmoji,
                    [d, m] = (0, I.useState)(!1),
                    u = ((e) => {
                        switch (e) {
                            case i.com.x.dms.model.MessageBurstState.Solo:
                                return "py-1";
                            case i.com.x.dms.model.MessageBurstState.First:
                                return "pt-1";
                            case i.com.x.dms.model.MessageBurstState.Last:
                                return "pb-1";
                            default:
                                return "";
                        }
                    })(e.burstState);
                return (0, n.jsx)(V.S, {
                    message: a("Couldn't load message"),
                    children: (0, n.jsx)("div", {
                        className: `flex ${r ? "justify-start" : "justify-end"} ${u} px-4`,
                        onMouseEnter: () => m(!0),
                        onMouseLeave: () => m(!1),
                        onClick: () => m(!0),
                        children: (0, n.jsxs)("div", {
                            className: `grid gap-x-2 gap-y-0.5 ${o ? "max-w-full" : "max-w-[calc(55%+128px)]"} grid-cols-[auto_auto_auto_auto] items-center`,
                            style: { gridTemplateAreas: r ? '\n                  "avatar content actions"\n                  ". message-info ."\n                ' : '\n                  "actions content avatar"\n                  ". message-info ."\n                ' },
                            children: [(0, n.jsx)("div", { className: "self-end", style: { gridArea: "avatar" }, children: (0, n.jsx)(P, { avatarDisplayMode: e.avatarDisplayMode, user: e.senderInfo }) }), (0, n.jsxs)("div", { className: "flex flex-col gap-0.5 " + (r ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.replyPreview && e.senderInfo && (0, n.jsx)(me, { replyPreview: e.replyPreview, replierInfo: e.senderInfo, isReceived: r }), e.attachment ? (0, n.jsx)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl", children: (0, n.jsx)(L.P, { attachment: e.attachment, isReceived: r, onEvent: t, className: "rounded-2xl" }) }) : null, e.supersizeEmoji && (0, n.jsx)(c.x, { size: "title2", className: "px-1 tracking-widest", children: e.textContent }), l ? (0, n.jsx)("div", { className: "px-4 py-2 rounded-2xl " + (e.supersizeEmoji ? "" : r ? "bg-gray-200" : "bg-blue-500"), children: e.textContent && (0, n.jsx)(Y, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: r }) }) : null] }), (0, n.jsxs)("div", { className: `${o ? "w-18" : "w-32"} flex items-center gap-1 ${r ? "flex-row" : "flex-row-reverse"}`, style: { gridArea: "actions" }, children: [(0, n.jsx)(ce, { messageItem: e, messageFocusedDialog: s, isMessageFocused: d, onEvent: t }), (0, n.jsx)(T, { messageFocusedDialog: s, isMessageFocused: d, messageItem: e, onEvent: t, isFromAttachment: !1 }), d && !o && (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: (0, ne.H)(e.createdTimestamp.epochSeconds) })] }), (0, n.jsxs)("div", { className: "flex flex-col", style: { gridArea: "message-info" }, children: [e.reactions && e.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(te, { className: "relative -mt-3 ms-2", reactions: e.reactions.asJsReadonlyArrayView() }), e.messageInfo && (0, n.jsx)(O, { messageInfo: e.messageInfo, isReceived: r })] })],
                        }),
                    }),
                });
            }
            var he = t(880917);
            function ge({ sendingStatusItem: e }) {
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(c.x, { size: "subtext2", color: "red500", children: "Failed" }), (0, n.jsx)(he.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            var pe = t(350311);
            const fe = ({ typingIndicatorItem: e }) => {
                const s = e.users.asJsReadonlyArrayView().map((e) => e.profileImageUrl || pe.j);
                return (0, n.jsxs)("div", { className: "flex justify-start items-end py-1 px-4", children: [!!s.length && (0, n.jsx)("div", { className: "-m-0.5", children: (0, n.jsx)(d.o, { urls: s, size: "large" }) }), (0, n.jsx)("div", { className: "flex flex-row px-4 py-2 h-9 rounded-2xl ms-2 rounded-es-sm gap-2 bg-gray-200 items-center justify-between", children: [0, 1, 2].map((e) => (0, n.jsx)("div", { className: "animate-pulse duration-1200 w-2 h-2 rounded-full bg-gray-800", style: { animationDelay: (1200 * e) / 3 + "ms" } }, e)) })] });
            };
            function ve({ chatItem: e, messageFocusedDialog: s, onEvent: t }) {
                return e instanceof i.com.x.dms.model.MessageItemReceived || e instanceof i.com.x.dms.model.MessageItemSent || e instanceof i.com.x.dms.model.MessageItemPending ? (0, n.jsx)(xe, { messageItem: e, messageFocusedDialog: s, onEvent: t }) : e instanceof i.com.x.dms.model.SendingStatusItem ? (0, n.jsx)(ge, { sendingStatusItem: e }) : e instanceof i.com.x.dms.model.InformationalItem ? (0, n.jsx)(b, { informationalItem: e }) : e instanceof i.com.x.dms.model.TypingIndicatorItem ? (0, n.jsx)(fe, { typingIndicatorItem: e }) : null;
            }
            const ye = (0, I.memo)(ve);
            var je = t(844096),
                we = t(463341);
            const Ce = ({ component: e, numItems: s }) => {
                    const { apiRef: t, addOnScrollListener: a } = (0, we.Nb)(),
                        [o, r] = (0, I.useState)(!1),
                        l = (0, I.useCallback)(() => {
                            const e = t.current;
                            if (!e) return;
                            const s = e.scrollOffset + e.viewportSize;
                            r(s + 30 < e.scrollSize);
                        }, [t.current]);
                    (0, I.useEffect)(() => a(l), [l, a]);
                    const c = (0, I.useCallback)(() => {
                        e.onEvent(i.com.x.dms.chat.DmEvent.ScrollToBottomButtonClicked);
                        const n = t.current;
                        if (!n) return;
                        const a = n.scrollSize - n.scrollOffset - n.viewportSize <= 1e4;
                        n.scrollToIndex(s - 1, { align: "end", smooth: a });
                    }, [e, t.current, s]);
                    return o ? (0, n.jsx)(k.z, { icon: (0, n.jsx)(je.Z, { width: 16, height: 16 }), className: "absolute right-12 bottom-6 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", color: "blue500", onClick: c }) : null;
                },
                Ne = i.com.x.dms.model.MessageItemSent,
                be = i.com.x.dms.model.MessageItemReceived,
                Ie = i.kotlin.collections.KtList;
            function Ee({ component: e }) {
                const s = (0, r._)(e.state),
                    t = (0, I.useMemo)(() => s.chatItems.items.asJsReadonlyArrayView().toReversed(), [s.chatItems]),
                    l = { align: "end" },
                    { apiRef: c, dispatchOnScroll: d } = (0, we.Nb)(),
                    m = (0, I.useRef)(!0),
                    u = (0, I.useCallback)(() => {
                        if (c.current) {
                            const s = c.current.findStartIndex(),
                                n = c.current.findEndIndex(),
                                a = t
                                    .slice(s, n + 1)
                                    .filter((e) => e instanceof be || e instanceof Ne)
                                    .map((e) => e.sequenceNumber);
                            e.onEvent(new i.com.x.dms.chat.DmEvent.VisibleMessagesChanged(n === t.length - 1, Ie.fromJsArray(a)));
                        }
                    }, [e, t, c.current]),
                    x = (0, I.useCallback)(() => {
                        c.current?.scrollToIndex(t.length - 1, l), (m.current = !1), u();
                    }, [t, c.current, u]);
                (0, I.useEffect)(() => {
                    x();
                }, [s.convId]),
                    (0, I.useEffect)(() => {
                        m.current || x();
                    }, [x]);
                const h = (s) => {
                    e.onEvent(s);
                };
                return (0, n.jsx)(V.S, {
                    children: (0, n.jsx)("div", {
                        className: "relative h-full pb-1",
                        children: t
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(a.T, {
                                          api: c,
                                          className: "!h-full",
                                          items: t,
                                          onScroll: (e, s) => {
                                              c.current && (0 !== e && "backward" === s && t.length - 1 > c.current.findEndIndex() && (m.current = !0), u()), d(e, s);
                                          },
                                          onAtEnd: () => {
                                              m.current = !1;
                                          },
                                          onAtStart: () => {
                                              s.chatItems.olderItemsInfo && h(new i.com.x.dms.chat.DmEvent.ScrolledToTop(s.chatItems.olderItemsInfo));
                                          },
                                          renderItem: (e) => {
                                              return (0, n.jsx)(ye, { chatItem: e, onEvent: h, messageFocusedDialog: ((t = e.id), s.showingMessageFocusedDialog?.message.id === t ? s.showingMessageFocusedDialog : null) }, e.uniqueKey);
                                              var t;
                                          },
                                      }),
                                      (0, n.jsx)(Ce, { component: e, numItems: t.length }),
                                  ],
                              })
                            : (0, n.jsx)("div", { className: "flex h-full items-center", children: (0, n.jsx)(o.P, {}) }),
                    }),
                });
            }
        },
        463341: (e, s, t) => {
            t.d(s, { Bu: () => r, Nb: () => i });
            var n = t(552322),
                a = t(202784);
            const o = (0, a.createContext)(null),
                r = ({ children: e }) => {
                    const s = (0, a.useRef)(null),
                        t = (0, a.useRef)(0),
                        r = (0, a.useRef)(new Map()).current,
                        i = (0, a.useCallback)(
                            (e) => {
                                const s = t.current++;
                                return r.set(s, e), () => r.delete(s);
                            },
                            [r.set, r.delete],
                        ),
                        l = (0, a.useCallback)(
                            (e, s) => {
                                r.forEach((t) => t(e, s));
                            },
                            [r.forEach],
                        );
                    return (0, n.jsx)(o.Provider, { value: { apiRef: s, addOnScrollListener: i, dispatchOnScroll: l }, children: e });
                },
                i = () => {
                    const e = (0, a.useContext)(o);
                    if (!e) throw new Error("No ScrollerEventContext.Provider found when calling useScrollerEventContext");
                    return e;
                };
        },
        379342: (e, s, t) => {
            t.d(s, { s: () => l });
            var n = t(968025),
                a = t(264531),
                o = t(202784);
            const r = (e) => e.replaceAll(":", "-");
            class i {
                router;
                path;
                constructor(e, s) {
                    (this.router = e), (this.path = s);
                }
                toInbox() {
                    this.router.push(`${this.path}/`);
                }
                toConversation(e) {
                    this.router.push(`${this.path}/${r(e)}`);
                }
                toConversationInfo(e) {
                    this.router.push(`${this.path}/${r(e)}/info`);
                }
                toParticipants(e) {
                    this.router.push(`${this.path}/${r(e)}/participants`);
                }
                toVanishingMode(e) {
                    this.router.push(`${this.path}/${r(e)}/vanishing-mode`);
                }
                toNewDM() {
                    this.router.push(`${this.path}/new`);
                }
                toPinScreen(e, s) {
                    this.router.push(`${this.path}/pin/${e}${s ? "/register" : ""}`);
                }
            }
            function l() {
                const e = (0, n.t)(),
                    s = (0, a.BH)();
                return (0, o.useMemo)(() => new i(e, s), [e, s]);
            }
        },
        110241: (e, s, t) => {
            t.d(s, { a: () => a });
            var n = t(727071);
            function a() {
                return ((0, n.U)().id || "").replaceAll("-", ":");
            }
        },
        617588: (e, s, t) => {
            t.d(s, { F: () => a });
            var n = t(727071);
            function a() {
                return "info" === (0, n.U)().infoTab;
            }
        },
        853582: (e, s, t) => {
            t.d(s, { k: () => a });
            var n = t(727071);
            function a() {
                return "participants" === (0, n.U)().infoTab;
            }
        },
        628047: (e, s, t) => {
            t.d(s, { v: () => a });
            var n = t(727071);
            function a() {
                return "vanishing-mode" === (0, n.U)().infoTab;
            }
        },
        984713: (e, s, t) => {
            t.d(s, { x: () => b });
            var n = t(552322),
                a = t(202784),
                o = t(844098),
                r = t(702024),
                i = t(941204),
                l = t(130629),
                c = t(436059),
                d = t(816828),
                m = t(921879),
                u = t(425522),
                x = t(611463),
                h = t(379342),
                g = t(533476),
                p = t(658358),
                f = t(518840),
                v = t(582440),
                y = t(517652),
                j = t(272795),
                w = t(620134);
            const C = u.com.x.dms.newdm,
                N = u.com.x.dms.mapToValueList,
                b = ({ onVisibilityChange: e }) => {
                    const [s, t] = (0, a.useState)(null),
                        i = (0, x.n)(),
                        l = (0, h.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const s = new u.com.x.export.CancellationSignal(),
                                n = i.newDmComponent(
                                    s,
                                    () => {
                                        e(!1);
                                    },
                                    (s) => {
                                        e(!1), l.toConversation(s.id);
                                    },
                                );
                            return (
                                t(n),
                                () => {
                                    s.cancel();
                                }
                            );
                        }, [i, l, e]),
                        (0, n.jsx)(o.s, { isOpen: !0, onOpenChange: e, isDismissable: !0, children: (0, n.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: s ? (0, n.jsx)(I, { component: s }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(r.P, {}) }) }) })
                    );
                };
            const I = ({ component: e }) => {
                const s = (0, g._)(e.state);
                (0, p.e)(e.toasts);
                const t = N(s.selectedGroupUsers).asJsReadonlyArrayView(),
                    a = [...(s.isCreateGroupMode ? [] : ["group-button"]), ...s.suggestions.asJsReadonlyArrayView()],
                    o = (s) => () => {
                        e.onEvent(new C.NewDmEvent.DeleteSelectedGroupUser(s));
                    };
                return (0, n.jsxs)("div", {
                    className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors",
                    children: [
                        (0, n.jsx)(l.x, {
                            title: s.isCreateGroupMode ? "Create a group" : "New message",
                            leftContent: (0, n.jsx)(c.z, {
                                variant: "primaryText",
                                icon: (0, n.jsx)(v.Z, {}),
                                onClick: () => {
                                    e.onEvent(C.NewDmEvent.BackButtonClicked);
                                },
                            }),
                            rightContent:
                                s.isCreateGroupMode &&
                                (0, n.jsx)(c.z, {
                                    onClick: () => {
                                        e.onEvent(C.NewDmEvent.CreateButtonClicked);
                                    },
                                    variant: "primaryFilled",
                                    children: "Next",
                                }),
                            subtitle: s.isCreateGroupMode ? "Add people" : void 0,
                        }),
                        (0, n.jsx)("div", {
                            children: (0, n.jsx)(d._, {
                                autoFocus: !0,
                                leftContent: (0, n.jsx)(y.Z, { className: "text-gray-700" }),
                                placeholder: "Search people",
                                value: s.query,
                                onChange: (s) => {
                                    e.onEvent(new C.NewDmEvent.QueryChanged(s.target.value));
                                },
                                borderRadius: "none",
                                className: "w-full",
                            }),
                        }),
                        (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: t.length > 0 && t.map((e) => (0, n.jsx)(w.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: o(e.id) }, e.id.userIdString)) }),
                        s.isCreateConversationCallInProgress ? (0, n.jsx)(r.P, {}) : (0, n.jsx)(m.T, { items: a, renderItem: (t) => (t instanceof u.com.x.dms.NewDmSuggestion ? (0, n.jsx)(j.c, { onClick: () => e.onEvent(new C.NewDmEvent.SuggestionClicked(t)), suggestion: t, isSelected: t instanceof u.com.x.dms.NewDmSuggestion.User && s.selectedGroupUsers.asJsReadonlyMapView().has(t.user.id) }) : (0, n.jsxs)("div", { className: "flex flex-row items-center gap-1 p-2 py-2.5 hover:bg-gray-50 cursor-pointer", onClick: () => e.onEvent(C.NewDmEvent.CreateAGroupItemClicked), children: [(0, n.jsx)("div", { className: "p-2 border border-solid rounded-full", children: (0, n.jsx)(f.Z, { className: "text-blue-500 size-4" }) }), (0, n.jsx)(i.x, { size: "body", color: "blue500", weight: "bold", children: "Create a Group" })] })) }),
                    ],
                });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.a3d8e91a.js.map
