"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-eca6a814"],
    {
        718278: (e, s, t) => {
            t.d(s, { o: () => i });
            var n = t(552322),
                a = t(993165),
                r = t(425522);
            const o = r.com.x.logger.XLog,
                i = () =>
                    (0, n.jsx)(a.z, {
                        onClick: async () => {
                            o.flush();
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
        787395: (e, s, t) => {
            t.d(s, { r: () => De });
            var n = t(552322),
                a = t(983706),
                r = t(193686),
                o = t(533476),
                i = t(425522),
                l = t(378364),
                c = t(332161),
                d = t(789764),
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
                    const o = s[0],
                        i = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = o?.displayName || "Unknown"), (a = s.length - 1), (r = e.sender?.displayName), `${t} and ${a} other were added by ${r}`) : ((e, s) => `${e} and ${s} other were added`)(o?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: i }), (0, n.jsx)(h, { message: l })] });
                }
                var t, a, r;
                const o = s[0],
                    i = e.sender?.displayName ? ((e, s) => `${e} was added by ${s}`)(o?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was added`)(o?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(x, { avatarUrl: o?.profileImageUrl }), (0, n.jsx)(h, { message: i })] });
            }
            function f({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const o = s[0],
                        i = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = o?.displayName || "Unknown"), (a = s.length - 1), (r = e.sender?.displayName), `${t} and ${a} other were removed by ${r}`) : ((e, s) => `${e} and ${s} other were removed`)(o?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: i }), (0, n.jsx)(h, { message: l })] });
                }
                var t, a, r;
                const o = s[0],
                    i = e.sender?.displayName ? ((e, s) => `${e} was removed by ${s}`)(o?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was removed`)(o?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(x, { avatarUrl: o?.profileImageUrl }), (0, n.jsx)(h, { message: i })] });
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
            function N({ contents: e }) {
                const s = e.newTtl?.inWholeMilliseconds || 0,
                    t = e.sender,
                    a = t?.displayName ?? "A member",
                    r = e.senderIsCurrentUser ? "You" : a,
                    o = 0 === s ? ((e) => `${e} turned vanishing mode off`)(r) : ((e, s) => `${e} set vanishing mode to ${(0, m.L)(s)}`)(r, s);
                return (0, n.jsx)(h, { message: o });
            }
            function b({ contents: e }) {
                let s = e.newDate.toString();
                if (e.newDate === i.com.x.dms.model.KmpDateFormat.Today) s = "Today";
                else if (e.newDate === i.com.x.dms.model.KmpDateFormat.Yesterday) s = "Yesterday";
                else if (e.newDate instanceof i.com.x.dms.model.KmpDateFormat.Date) {
                    const t = e.newDate.kmpDate,
                        n = new Date(t.year, t.month - 1, t.day),
                        a = "undefined" != typeof navigator ? navigator.language : "en",
                        r = { month: "short", day: "numeric", ...(e.newDate.includeYear && { year: "numeric" }) };
                    s = n.toLocaleDateString(a, r);
                }
                return (0, n.jsx)(h, { message: s });
            }
            function C({ informationalItem: e }) {
                const s = e.contents;
                return (0, n.jsx)(g, { children: s instanceof u.AddedGroupMembers ? (0, n.jsx)(p, { contents: s }) : s instanceof u.RemovedGroupMembers ? (0, n.jsx)(f, { contents: s }) : s instanceof u.AddedGroupAdmins ? (0, n.jsx)(v, { contents: s }) : s instanceof u.RemovedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof u.ChangedGroupTitle ? (0, n.jsx)(j, { contents: s }) : s instanceof u.ChangedGroupAvatar ? (0, n.jsx)(w, { contents: s }) : s instanceof u.DefaultTtlChanged ? (0, n.jsx)(N, { contents: s }) : s instanceof u.DateChanged ? (0, n.jsx)(b, { contents: s }) : null });
            }
            var I = t(202784),
                D = t(527735),
                k = t(993165),
                E = t(553453),
                $ = t(611105),
                R = t(147602),
                S = t(436995),
                M = t(145731),
                U = t(421018);
            const A = i.com.x.dms.model.ChatMessageAction,
                F = i.com.x.dms.chat.DmEvent,
                z = i.com.x.models.KMPRect;
            function T({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: r }) {
                const o = t || !!s?.longPress,
                    i = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const t = () => s(new F.MessageActionClick(e));
                                switch (e) {
                                    case A.Report:
                                    case A.DsaReport:
                                        return null;
                                }
                                return e instanceof A.Reply ? { text: "Reply", icon: (0, n.jsx)(E.Z, {}), onClick: t } : e instanceof A.CancelSend ? { text: "Cancel message", icon: void 0, onClick: t } : e instanceof A.RetrySend ? { text: "Try sending again", icon: (0, n.jsx)($.Z, {}), onClick: t } : e instanceof A.CopyText ? { text: "Copy message text", icon: (0, n.jsx)(R.Z, {}), onClick: () => navigator.clipboard.writeText(e.text) } : e instanceof A.Edit ? { text: "Edit message", icon: (0, n.jsx)(S.Z, {}), onClick: t } : e instanceof A.DeleteForAll ? { text: "Delete for All", icon: (0, n.jsx)(M.Z, {}), destructive: !0, onClick: t } : e instanceof A.DeleteForSelf || e instanceof A.DeletePending ? { text: "Delete for me", icon: (0, n.jsx)(M.Z, {}), destructive: !0, onClick: t } : null;
                            })(e, r),
                        )
                        .filter((e) => !!e);
                return (0, n.jsx)("div", {
                    className: `flex self-center items-center gap-2 bg-background border rounded-full p-1 shadow-sm ${!o && "invisible"}`,
                    onClick: (e) => e.stopPropagation(),
                    children: (0, n.jsx)(D.P, {
                        items: i ?? [],
                        trigger: (0, n.jsx)(k.z, { variant: "primaryText", size: "xSmall", icon: (0, n.jsx)(U.Z, {}), color: "gray600" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new F.MessageLongPressed(e, new z(0, 0, 0, 0), a) : F.MessageFocusedDialogDismissed;
                            r(t);
                        },
                    }),
                });
            }
            function P({ user: e, avatarDisplayMode: s }) {
                return e && e.profileImageUrl && "None" !== s.name ? ("AsPadding" === s.name ? (0, n.jsx)("div", { className: "px-4", children: " " }) : (0, n.jsx)("div", { children: (0, n.jsx)(l.q, { url: e.profileImageUrl, size: "large" }) })) : null;
            }
            var V = t(455091),
                J = t(607499),
                L = t(707513),
                G = t(42630),
                Z = t(242782),
                _ = t(22199);
            function O(e) {
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
                    (0, n.jsxs)("div", { className: "flex gap-0.5 items-center " + (s ? "flex-row" : "flex-row-reverse"), children: [(0, n.jsx)(_.Z, { className: "w-4 h-4 text-gray-700" }), (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: O(t) })] })
                );
            }
            function B({ messageInfo: e, isReceived: s }) {
                const t = e.showReadUsers?.asJsReadonlyArrayView().map((e) => e.user?.profileImageUrl || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") || [],
                    a = t.length > 1;
                return (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.timeToLive && (0, n.jsx)(K, { ttlInfo: e.timeToLive, isReceived: s }), e.timeToLive && (e.showEdited || (e.showReadUsers && !a)) ? (0, n.jsx)(G.A, {}) : null, e.showEdited && (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: "Edited" }), e.showEdited && e.showReadUsers && !a ? (0, n.jsx)(G.A, {}) : null, e.showReadUsers && (0, n.jsxs)(n.Fragment, { children: [a ? (0, n.jsx)(d.o, { urls: t, size: "small", spacing: 6, stackOrder: "ascending" }) : (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: "Read" }), (0, n.jsx)("div", { className: "p-0.5 bg-background rounded-full z-20 " + (a ? "-ms-[12px]" : "-ms-[2px]"), children: (0, n.jsx)(Z.Z, { width: "16", height: "16", viewBox: "1.75 1.75 20.5 20.5", className: "text-gray-700" }) })] })] });
            }
            var q = t(983955);
            const Y = ({ isReceived: e, textContent: s, textEntities: t }) => {
                    const a = {};
                    return t.forEach((e) => H(e, a)), (0, n.jsx)(q.W, { color: e ? "text" : "white", entities: a, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 });
                },
                H = (e, s) => {
                    const t = [e.startIdx, e.endIdx];
                    e instanceof i.com.x.models.text.AddressEntity || (e instanceof i.com.x.models.text.MentionEntity ? (s.mentions || (s.mentions = []), s.mentions.push({ screenName: e.screenName, indices: t })) : e instanceof i.com.x.models.text.UrlEntity ? (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.displayUrl, url: W(e.url), indices: t })) : e instanceof i.com.x.models.text.EmailEntity ? (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.email, url: X(e.email), indices: t })) : e instanceof i.com.x.models.text.HashtagEntity ? (s.hashtags || (s.hashtags = []), s.hashtags.push({ text: e.text, indices: t })) : e instanceof i.com.x.models.text.CashtagEntity ? (s.symbols || (s.symbols = []), s.symbols.push({ text: e.text, indices: t })) : e instanceof i.com.x.models.text.PhoneNumberEntity && (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.phoneNumberForTelLink, url: `tel:${e.phoneNumberForTelLink}`, indices: t })));
                };
            function W(e) {
                return /^https?:\/\//i.test(e) ? e : `https://${e}`;
            }
            function X(e) {
                return /^mailto:/i.test(e) ? e : `mailto:${e}`;
            }
            var Q = t(31674);
            const ee = ({ emoji: e, count: s }) => (0, n.jsxs)("div", { className: "flex items-center bg-gray-50 rounded-full px-2 shadow-sm gap-1 border border-background", children: [(0, n.jsx)(c.x, { size: "headline2", children: e }), s > 1 && (0, n.jsx)(c.x, { size: "subtext3", weight: "bold", color: "gray700", children: s })] }),
                se = ({ reaction: e }) => (0, n.jsx)(ee, { emoji: e.reaction, count: e.users.asJsReadonlyArrayView().length }),
                te = ({ className: e, reactions: s }) => (0, n.jsxs)("div", { className: (0, Q.cn)("flex flex-row gap-1", e), children: [s.slice(0, 5).map((e) => (0, n.jsx)(se, { reaction: e }, e.reaction)), s.length > 5 && (0, n.jsx)(ee, { emoji: "…", count: 0 })] });
            var ne = t(167285),
                ae = t(407602),
                re = t(437712),
                oe = t(840489);
            const ie = i.com.x.dms.chat.DmEvent,
                le = i.com.x.models.KMPRect,
                ce = ({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, onEvent: a }) => {
                    const [r, o] = (0, I.useState)(!1);
                    if (!t && !s?.quickReactions) return null;
                    const i = s?.quickReactions?.asJsReadonlyArrayView().map((e) => e.asJsReadonlyArrayView());
                    return (0, n.jsx)(re.J, {
                        trigger: (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, n.jsx)(k.z, {
                                variant: "primaryText",
                                size: "small",
                                color: "red600",
                                icon: (0, n.jsx)(ae.Z, {}),
                                onClick: () => {
                                    null === s ? (o(!0), a(new ie.MessageDoubleClicked(e, new le(0, 0, 0, 0), !1))) : (o(!1), a(ie.MessageFocusedDialogDismissed));
                                },
                            }),
                        }),
                        open: null !== s && r,
                        onOpenChange: (e) => {
                            !e && r && (a(ie.MessageFocusedDialogDismissed), o(!1));
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
                                                    className: (0, oe.Z)("w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100", { "bg-gray-50": s.isSelected }),
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
            var de = t(784344);
            const me = ({ isReceived: e, replyPreview: s, replierInfo: t }) => {
                const a = t.id,
                    { senderId: r } = s,
                    o = t.displayName,
                    i = s.senderDisplayName,
                    l = (0, n.jsx)(c.x, { as: "span", className: "text-text/70", size: "subtext2" }),
                    d = (0, n.jsx)(V.cC, { i18nKey: "<highlight>{replier}</highlight> to you", values: { replier: o }, components: { highlight: l } }),
                    m = (0, n.jsx)(V.cC, { i18nKey: "<highlight>{replier}</highlight> to {sender}", values: { replier: o, sender: i }, components: { highlight: l } }),
                    u = (0, n.jsx)(V.cC, { i18nKey: "<highlight>{replier}</highlight> to themself", values: { replier: o }, components: { highlight: l } }),
                    x = (0, n.jsx)(V.cC, { i18nKey: "<highlight>You</highlight> to yourself", components: { highlight: l } }),
                    h = (0, n.jsx)(V.cC, { i18nKey: "<highlight>You</highlight> to {sender}", values: { sender: i }, components: { highlight: l } }),
                    g = a.equals(r) ? (s.senderIsCurrentUser ? x : u) : s.senderIsCurrentUser ? d : e ? m : h;
                return (0, n.jsxs)("div", { className: "flex flex-col mt-0.5 " + (e ? "items-start" : "items-end"), children: [s.showReplyNames && (0, n.jsxs)("div", { className: "flex gap-1 px-2 " + (e ? "text-start" : "text-end"), children: [(0, n.jsx)(de.Z, { className: "inline-block text-text/70" }), (0, n.jsx)(c.x, { as: "span", className: "text-text/40", size: "subtext2", children: g })] }), (0, n.jsx)("div", { className: "flex flex-col px-3 py-1.5 rounded-2xl gap-3 border " + (s.senderIsCurrentUser ? "border-primary/50" : "border-gray-400"), children: (0, n.jsx)(c.x, { color: s.senderIsCurrentUser ? "primary" : "gray900", size: "subtext1", numberOfLines: 1, children: s.previewText }) })] });
            };
            var ue = t(305399);
            function xe({ messageItem: e, messageFocusedDialog: s, onEvent: t }) {
                const { t: a } = (0, V.$G)(),
                    r = (0, ue.a)("(max-width: 768px)"),
                    o = e instanceof i.com.x.dms.model.MessageItemReceived,
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
                return (0, n.jsx)(J.S, {
                    message: a("Couldn't load message"),
                    children: (0, n.jsx)("div", {
                        className: `flex ${o ? "justify-start" : "justify-end"} ${u} px-4`,
                        onMouseEnter: () => m(!0),
                        onMouseLeave: () => m(!1),
                        onClick: () => m(!0),
                        children: (0, n.jsxs)("div", {
                            className: `grid gap-x-2 gap-y-0.5 ${r ? "max-w-full" : "max-w-[calc(55%+128px)]"} grid-cols-[auto_auto_auto_auto] items-center`,
                            style: { gridTemplateAreas: o ? '\n                  "avatar content actions"\n                  ". message-info ."\n                ' : '\n                  "actions content avatar"\n                  ". message-info ."\n                ' },
                            children: [(0, n.jsx)("div", { className: "self-end", style: { gridArea: "avatar" }, children: (0, n.jsx)(P, { avatarDisplayMode: e.avatarDisplayMode, user: e.senderInfo }) }), (0, n.jsxs)("div", { className: "flex flex-col gap-0.5 " + (o ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.replyPreview && e.senderInfo && (0, n.jsx)(me, { replyPreview: e.replyPreview, replierInfo: e.senderInfo, isReceived: o }), e.attachment ? (0, n.jsx)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl", children: (0, n.jsx)(L.P, { attachment: e.attachment, isReceived: o, onEvent: t, className: "rounded-2xl" }) }) : null, e.supersizeEmoji && (0, n.jsx)(c.x, { size: "title2", className: "px-1 tracking-widest", children: e.textContent }), l ? (0, n.jsx)("div", { className: "px-4 py-2 rounded-2xl " + (e.supersizeEmoji ? "" : o ? "bg-gray-200" : "bg-blue-500"), children: e.textContent && (0, n.jsx)(Y, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: o }) }) : null] }), (0, n.jsxs)("div", { className: `${r ? "w-18" : "w-32"} flex items-center gap-1 ${o ? "flex-row" : "flex-row-reverse"}`, style: { gridArea: "actions" }, children: [(0, n.jsx)(ce, { messageItem: e, messageFocusedDialog: s, isMessageFocused: d, onEvent: t }), (0, n.jsx)(T, { messageFocusedDialog: s, isMessageFocused: d, messageItem: e, onEvent: t, isFromAttachment: !1 }), d && !r && (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: (0, ne.H)(e.createdTimestamp.epochSeconds) })] }), (0, n.jsxs)("div", { className: "flex flex-col", style: { gridArea: "message-info" }, children: [e.reactions && e.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(te, { className: "relative -mt-3 ms-2", reactions: e.reactions.asJsReadonlyArrayView() }), e.messageInfo && (0, n.jsx)(B, { messageInfo: e.messageInfo, isReceived: o })] })],
                        }),
                    }),
                });
            }
            var he = t(668631);
            function ge({ sendingStatusItem: e }) {
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(c.x, { size: "subtext2", color: "red500", children: "Failed" }), (0, n.jsx)(he.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            var pe = t(350311);
            const fe = ({ typingIndicatorItem: e }) => {
                const s = e.users.asJsReadonlyArrayView().map((e) => e.profileImageUrl || pe.j);
                return (0, n.jsxs)("div", { className: "flex justify-start items-end py-1 px-4", children: [!!s.length && (0, n.jsx)("div", { className: "-m-0.5", children: (0, n.jsx)(d.o, { urls: s, size: "large" }) }), (0, n.jsx)("div", { className: "flex flex-row px-4 py-2 h-9 rounded-2xl ms-2 rounded-es-sm gap-2 bg-gray-200 items-center justify-between", children: [0, 1, 2].map((e) => (0, n.jsx)("div", { className: "animate-pulse duration-1200 w-2 h-2 rounded-full bg-gray-800", style: { animationDelay: (1200 * e) / 3 + "ms" } }, e)) })] });
            };
            function ve({ chatItem: e, messageFocusedDialog: s, onEvent: t }) {
                return e instanceof i.com.x.dms.model.MessageItemReceived || e instanceof i.com.x.dms.model.MessageItemSent || e instanceof i.com.x.dms.model.MessageItemPending ? (0, n.jsx)(xe, { messageItem: e, messageFocusedDialog: s, onEvent: t }) : e instanceof i.com.x.dms.model.SendingStatusItem ? (0, n.jsx)(ge, { sendingStatusItem: e }) : e instanceof i.com.x.dms.model.InformationalItem ? (0, n.jsx)(C, { informationalItem: e }) : e instanceof i.com.x.dms.model.TypingIndicatorItem ? (0, n.jsx)(fe, { typingIndicatorItem: e }) : null;
            }
            const ye = (0, I.memo)(ve);
            var je = t(97759),
                we = t(463341);
            const Ne = ({ component: e, numItems: s }) => {
                    const { apiRef: t, addOnScrollListener: a } = (0, we.Nb)(),
                        [r, o] = (0, I.useState)(!1),
                        l = (0, I.useCallback)(() => {
                            const e = t.current;
                            if (!e) return;
                            const s = e.scrollOffset + e.viewportSize;
                            o(s + 30 < e.scrollSize);
                        }, [t.current]);
                    (0, I.useEffect)(() => a(l), [l, a]);
                    const c = (0, I.useCallback)(() => {
                        e.onEvent(i.com.x.dms.chat.DmEvent.ScrollToBottomButtonClicked);
                        const n = t.current;
                        if (!n) return;
                        const a = n.scrollSize - n.scrollOffset - n.viewportSize <= 1e4;
                        n.scrollToIndex(s - 1, { align: "end", smooth: a });
                    }, [e, t.current, s]);
                    return r ? (0, n.jsx)(k.z, { icon: (0, n.jsx)(je.Z, { width: 16, height: 16 }), className: "absolute right-12 bottom-6 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", color: "blue500", onClick: c }) : null;
                },
                be = i.com.x.dms.model.MessageItemSent,
                Ce = i.com.x.dms.model.MessageItemReceived,
                Ie = i.kotlin.collections.KtList;
            function De({ component: e }) {
                const s = (0, o._)(e.state),
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
                                    .filter((e) => e instanceof Ce || e instanceof be)
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
                return (0, n.jsx)(J.S, {
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
                                      (0, n.jsx)(Ne, { component: e, numItems: t.length }),
                                  ],
                              })
                            : (0, n.jsx)("div", { className: "flex h-full items-center", children: (0, n.jsx)(r.P, {}) }),
                    }),
                });
            }
        },
        463341: (e, s, t) => {
            t.d(s, { Bu: () => o, Nb: () => i });
            var n = t(552322),
                a = t(202784);
            const r = (0, a.createContext)(null),
                o = ({ children: e }) => {
                    const s = (0, a.useRef)(null),
                        t = (0, a.useRef)(0),
                        o = (0, a.useRef)(new Map()).current,
                        i = (0, a.useCallback)(
                            (e) => {
                                const s = t.current++;
                                return o.set(s, e), () => o.delete(s);
                            },
                            [o.set, o.delete],
                        ),
                        l = (0, a.useCallback)(
                            (e, s) => {
                                o.forEach((t) => t(e, s));
                            },
                            [o.forEach],
                        );
                    return (0, n.jsx)(r.Provider, { value: { apiRef: s, addOnScrollListener: i, dispatchOnScroll: l }, children: e });
                },
                i = () => {
                    const e = (0, a.useContext)(r);
                    if (!e) throw new Error("No ScrollerEventContext.Provider found when calling useScrollerEventContext");
                    return e;
                };
        },
        379342: (e, s, t) => {
            t.d(s, { s: () => l });
            var n = t(968025),
                a = t(264531),
                r = t(202784);
            const o = (e) => e.replaceAll(":", "-");
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
                    this.router.push(`${this.path}/${o(e)}`);
                }
                toConversationInfo(e) {
                    this.router.push(`${this.path}/${o(e)}/info`);
                }
                toParticipants(e) {
                    this.router.push(`${this.path}/${o(e)}/participants`);
                }
                toVanishingMode(e) {
                    this.router.push(`${this.path}/${o(e)}/vanishing-mode`);
                }
                toNewDM() {
                    this.router.push(`${this.path}/new`);
                }
                toPinScreen(e, s) {
                    this.router.push(`${this.path}/pin/${e}${s?.shouldRegister ? "/register" : ""}`);
                }
                toGroupInvite(e) {
                    this.router.push(`${this.path}/${o(e)}/group-invite`);
                }
            }
            function l() {
                const e = (0, n.t)(),
                    s = (0, a.BH)();
                return (0, r.useMemo)(() => new i(e, s), [e, s]);
            }
        },
        110241: (e, s, t) => {
            t.d(s, { a: () => a });
            var n = t(727071);
            function a() {
                return ((0, n.U)().id || "").replaceAll("-", ":");
            }
        },
        55880: (e, s, t) => {
            t.d(s, { m: () => a });
            var n = t(727071);
            function a() {
                return "group-invite" === (0, n.U)().infoTab;
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
            t.d(s, { x: () => C });
            var n = t(552322),
                a = t(202784),
                r = t(653748),
                o = t(193686),
                i = t(332161),
                l = t(423011),
                c = t(993165),
                d = t(687521),
                m = t(983706),
                u = t(425522),
                x = t(611463),
                h = t(379342),
                g = t(533476),
                p = t(658358),
                f = t(555814),
                v = t(458872),
                y = t(875515),
                j = t(272795),
                w = t(620134);
            const N = u.com.x.dms.newdm,
                b = u.com.x.dms.mapToValueList,
                C = ({ onVisibilityChange: e }) => {
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
                        (0, n.jsx)(r.s, { isOpen: !0, onOpenChange: e, isDismissable: !0, children: (0, n.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: s ? (0, n.jsx)(I, { component: s }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(o.P, {}) }) }) })
                    );
                };
            const I = ({ component: e }) => {
                const s = (0, g._)(e.state);
                (0, p.e)(e.toasts);
                const t = b(s.selectedGroupUsers).asJsReadonlyArrayView(),
                    a = [...(s.isCreateGroupMode ? [] : ["group-button"]), ...s.suggestions.asJsReadonlyArrayView()],
                    r = (s) => () => {
                        e.onEvent(new N.NewDmEvent.DeleteSelectedGroupUser(s));
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
                                    e.onEvent(N.NewDmEvent.BackButtonClicked);
                                },
                            }),
                            rightContent:
                                s.isCreateGroupMode &&
                                (0, n.jsx)(c.z, {
                                    onClick: () => {
                                        e.onEvent(N.NewDmEvent.CreateButtonClicked);
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
                                    e.onEvent(new N.NewDmEvent.QueryChanged(s.target.value));
                                },
                                borderRadius: "none",
                                className: "w-full",
                            }),
                        }),
                        (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: t.length > 0 && t.map((e) => (0, n.jsx)(w.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: r(e.id) }, e.id.userIdString)) }),
                        s.isCreateConversationCallInProgress ? (0, n.jsx)(o.P, {}) : (0, n.jsx)(m.T, { items: a, renderItem: (t) => (t instanceof u.com.x.dms.NewDmSuggestion ? (0, n.jsx)(j.c, { onClick: () => e.onEvent(new N.NewDmEvent.SuggestionClicked(t)), suggestion: t, isSelected: t instanceof u.com.x.dms.NewDmSuggestion.User && s.selectedGroupUsers.asJsReadonlyMapView().has(t.user.id) }) : (0, n.jsxs)("div", { className: "flex flex-row items-center gap-1 p-2 py-2.5 hover:bg-gray-50 cursor-pointer", onClick: () => e.onEvent(N.NewDmEvent.CreateAGroupItemClicked), children: [(0, n.jsx)("div", { className: "p-2 border border-solid rounded-full", children: (0, n.jsx)(f.Z, { className: "text-blue-500 size-4" }) }), (0, n.jsx)(i.x, { size: "body", color: "blue500", weight: "bold", children: "Create a Group" })] })) }),
                    ],
                });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.f56967fa.js.map
