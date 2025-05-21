"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-eca6a814"],
    {
        718278: (e, s, t) => {
            t.d(s, { o: () => i });
            var n = t(552322),
                a = t(436059),
                r = t(159603);
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
        383217: (e, s, t) => {
            t.d(s, { r: () => Ee });
            var n = t(552322),
                a = t(921879),
                r = t(702024),
                o = t(159603),
                i = t(202784),
                l = t(533476),
                c = t(26429),
                d = t(941204),
                m = t(475694),
                u = t(369962),
                x = t(455091);
            const h = o.com.x.dms.model.InformationalItemContents;
            function g({ avatarUrl: e }) {
                return e ? (0, n.jsx)(c.q, { url: e, size: "small" }) : null;
            }
            function p({ message: e }) {
                return (0, n.jsx)(d.x, { size: "subtext2", weight: "medium", color: "gray600", children: e });
            }
            function f({ children: e }) {
                return (0, n.jsx)("div", { className: "flex justify-center items-center my-2", children: e });
            }
            function v({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const o = s[0],
                        i = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = o?.displayName || "Unknown"), (a = s.length - 1), (r = e.sender?.displayName), `${t} and ${a} other were added by ${r}`) : ((e, s) => `${e} and ${s} other were added`)(o?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(m.o, { urls: i }), (0, n.jsx)(p, { message: l })] });
                }
                var t, a, r;
                const o = s[0],
                    i = e.sender?.displayName ? ((e, s) => `${e} was added by ${s}`)(o?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was added`)(o?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(g, { avatarUrl: o?.profileImageUrl }), (0, n.jsx)(p, { message: i })] });
            }
            function j({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const o = s[0],
                        i = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = o?.displayName || "Unknown"), (a = s.length - 1), (r = e.sender?.displayName), `${t} and ${a} other were removed by ${r}`) : ((e, s) => `${e} and ${s} other were removed`)(o?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(m.o, { urls: i }), (0, n.jsx)(p, { message: l })] });
                }
                var t, a, r;
                const o = s[0],
                    i = e.sender?.displayName ? ((e, s) => `${e} was removed by ${s}`)(o?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was removed`)(o?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(g, { avatarUrl: o?.profileImageUrl }), (0, n.jsx)(p, { message: i })] });
            }
            function y({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${s} made ${e} member${e > 1 ? "s" : ""} an admin`)(e.affectedUsers.asJsReadonlyArrayView().length, t);
                return (0, n.jsx)(p, { message: a });
            }
            function w({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${s} removed admin status from ${e} member${e > 1 ? "s" : ""}`)(e.affectedUsers.asJsReadonlyArrayView().length, t);
                return (0, n.jsx)(p, { message: a });
            }
            function b({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${e} changed the group name to ${s}`)(e.senderIsCurrentUser ? "You" : t, e.newTitle ?? "Untitled");
                return (0, n.jsx)(p, { message: a });
            }
            function N({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e) => `${e} updated the group photo`)(e.senderIsCurrentUser ? "You" : t);
                return (0, n.jsx)(p, { message: a });
            }
            function I({ contents: e }) {
                const s = e.newTtl?.inWholeMilliseconds || 0,
                    t = e.sender,
                    a = t?.displayName ?? "A member",
                    r = e.senderIsCurrentUser ? "You" : a,
                    o = 0 === s ? ((e) => `${e} turned vanishing mode off`)(r) : ((e, s) => `${e} set vanishing mode to ${(0, u.L)(s)}`)(r, s);
                return (0, n.jsx)(p, { message: o });
            }
            function C({ contents: e }) {
                let s = e.newDate.toString();
                if (e.newDate === o.com.x.dms.model.KmpDateFormat.Today) s = "Today";
                else if (e.newDate === o.com.x.dms.model.KmpDateFormat.Yesterday) s = "Yesterday";
                else if (e.newDate instanceof o.com.x.dms.model.KmpDateFormat.Date) {
                    const t = e.newDate.kmpDate,
                        n = new Date(t.year, t.month - 1, t.day),
                        a = "undefined" != typeof navigator ? navigator.language : "en",
                        r = { month: "short", day: "numeric", ...(e.newDate.includeYear && { year: "numeric" }) };
                    s = n.toLocaleDateString(a, r);
                }
                return (0, n.jsx)(p, { message: s });
            }
            function S({ informationalItem: e }) {
                const s = e.contents,
                    { t } = (0, x.$G)();
                return (0, n.jsx)(f, { children: s instanceof h.AddedGroupMembers ? (0, n.jsx)(v, { contents: s }) : s instanceof h.RemovedGroupMembers ? (0, n.jsx)(j, { contents: s }) : s instanceof h.AddedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof h.RemovedGroupAdmins ? (0, n.jsx)(w, { contents: s }) : s instanceof h.ChangedGroupTitle ? (0, n.jsx)(b, { contents: s }) : s instanceof h.ChangedGroupAvatar ? (0, n.jsx)(N, { contents: s }) : s instanceof h.DefaultTtlChanged ? (0, n.jsx)(I, { contents: s }) : s instanceof h.DateChanged ? (0, n.jsx)(C, { contents: s }) : s instanceof h.GroupInviteEnabled ? (0, n.jsx)(p, { message: t("Invite link enabled") }) : s instanceof h.GroupInviteDisabled ? (0, n.jsx)(p, { message: t("Invite link disabled") }) : null });
            }
            var k = t(776604),
                D = t(436059),
                E = t(155209),
                $ = t(616627),
                R = t(872443),
                M = t(720640),
                U = t(250362),
                A = t(848553);
            const T = o.com.x.dms.model.ChatMessageAction,
                z = o.com.x.dms.chat.DmEvent,
                F = o.com.x.models.KMPRect;
            function P({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: r }) {
                const o = t || !!s?.longPress,
                    i = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const t = () => s(new z.MessageActionClick(e));
                                switch (e) {
                                    case T.Report:
                                    case T.DsaReport:
                                        return null;
                                }
                                return e instanceof T.Reply ? { text: "Reply", icon: (0, n.jsx)(E.Z, {}), onClick: t } : e instanceof T.CancelSend ? { text: "Cancel message", icon: void 0, onClick: t } : e instanceof T.RetrySend ? { text: "Try sending again", icon: (0, n.jsx)($.Z, {}), onClick: t } : e instanceof T.CopyText ? { text: "Copy message text", icon: (0, n.jsx)(R.Z, {}), onClick: () => navigator.clipboard.writeText(e.text) } : e instanceof T.Edit ? { text: "Edit message", icon: (0, n.jsx)(M.Z, {}), onClick: t } : e instanceof T.DeleteForAll ? { text: "Delete for All", icon: (0, n.jsx)(U.Z, {}), destructive: !0, onClick: t } : e instanceof T.DeleteForSelf || e instanceof T.DeletePending ? { text: "Delete for me", icon: (0, n.jsx)(U.Z, {}), destructive: !0, onClick: t } : null;
                            })(e, r),
                        )
                        .filter((e) => !!e);
                return (0, n.jsx)("div", {
                    className: `flex self-center items-center gap-2 bg-background border rounded-full p-1 shadow-sm ${!o && "invisible"}`,
                    onClick: (e) => e.stopPropagation(),
                    children: (0, n.jsx)(k.P, {
                        items: i ?? [],
                        trigger: (0, n.jsx)(D.z, { variant: "primaryText", size: "xSmall", icon: (0, n.jsx)(A.Z, {}), color: "gray600" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new z.MessageLongPressed(e, new F(0, 0, 0, 0), a) : z.MessageFocusedDialogDismissed;
                            r(t);
                        },
                    }),
                });
            }
            function V({ user: e, avatarDisplayMode: s }) {
                return e && e.profileImageUrl && "None" !== s.name ? ("AsPadding" === s.name ? (0, n.jsx)("div", { className: "px-4", children: " " }) : (0, n.jsx)("div", { children: (0, n.jsx)(c.q, { url: e.profileImageUrl, size: "large" }) })) : null;
            }
            var G = t(607499),
                J = t(707513),
                Z = t(461222),
                _ = t(54686),
                L = t(266917),
                B = t(38891);
            function q({ messageInfo: e, isReceived: s, showSignatureVerificationIssuesIcon: t }) {
                const a = e.showReadUsers?.asJsReadonlyArrayView().map((e) => e.user?.profileImageUrl || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") || [],
                    r = (0, B.zo)().isTrue("xchat_read_receipt_facepile") && a.length > 1;
                return (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.showEdited && (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: "Edited" }), e.showEdited && e.showReadUsers && !r ? (0, n.jsx)(Z.A, {}) : null, t && (0, n.jsx)(_.Z, {}), t && e.showReadUsers && (0, n.jsx)(Z.A, {}), e.showReadUsers && (0, n.jsxs)(n.Fragment, { children: [r ? (0, n.jsx)(m.o, { urls: a, size: "small", spacing: 6, stackOrder: "ascending" }) : (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: "Read" }), (0, n.jsx)("div", { className: "p-0.5 bg-background rounded-full z-20 " + (r ? "-ms-[12px]" : "-ms-[2px]"), children: (0, n.jsx)(L.Z, { width: "16", height: "16", viewBox: "1.75 1.75 20.5 20.5", className: "text-gray-700" }) })] })] });
            }
            var K = t(117416),
                O = t(862399);
            const Y = ({ isReceived: e, textContent: s, textEntities: t, hasTTL: a = !1 }) => {
                    const r = {};
                    return t.forEach((e) => H(e, r)), (0, n.jsxs)("div", { className: "flex flex-row items-end justify-end gap-3 relative", children: [(0, n.jsx)(O.W, { color: e ? "text" : "white", entities: r, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 }), a && (0, n.jsx)("div", { children: (0, n.jsx)("div", { className: "absolute -bottom-0.5 -right-2", children: (0, n.jsx)(K.Z, { className: "w-3.5 h-3.5 " + (e ? "text-text/60" : "text-white/60") }) }) })] });
                },
                H = (e, s) => {
                    const t = [e.startIdx, e.endIdx];
                    e instanceof o.com.x.models.text.AddressEntity || (e instanceof o.com.x.models.text.MentionEntity ? (s.mentions || (s.mentions = []), s.mentions.push({ screenName: e.screenName, indices: t })) : e instanceof o.com.x.models.text.UrlEntity ? (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.displayUrl, url: W(e.url), indices: t })) : e instanceof o.com.x.models.text.EmailEntity ? (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.email, url: X(e.email), indices: t })) : e instanceof o.com.x.models.text.HashtagEntity ? (s.hashtags || (s.hashtags = []), s.hashtags.push({ text: e.text, indices: t })) : e instanceof o.com.x.models.text.CashtagEntity ? (s.symbols || (s.symbols = []), s.symbols.push({ text: e.text, indices: t })) : e instanceof o.com.x.models.text.PhoneNumberEntity && (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.phoneNumberForTelLink, url: `tel:${e.phoneNumberForTelLink}`, indices: t })));
                };
            function W(e) {
                return /^https?:\/\//i.test(e) ? e : `https://${e}`;
            }
            function X(e) {
                return /^mailto:/i.test(e) ? e : `mailto:${e}`;
            }
            var Q = t(86781),
                ee = t(796309),
                se = t(853425);
            const te = ({ emoji: e, count: s, users: t }) => {
                    const a = (0, i.useRef)(null),
                        r = (0, se.X)(a),
                        o = t.map((e) => e.name),
                        l = o.length > 1 ? `${o.slice(0, -1).join(", ")} and ${o[o.length - 1]}` : o[0];
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(Q.J, { open: r, side: "top", trigger: (0, n.jsxs)("div", { ref: a, className: "inline-flex items-center bg-gray-50 rounded-full px-2 shadow-sm gap-1 border border-background cursor-pointer", children: [(0, n.jsx)(d.x, { size: "headline2", children: e }), s > 1 && (0, n.jsx)(d.x, { size: "subtext3", weight: "bold", color: "gray700", children: s })] }), children: (0, n.jsx)("div", { className: "p-2 border border-border rounded-lg bg-background shadow-lg", children: (0, n.jsxs)(d.x, { size: "subtext2", weight: "medium", children: [l, " reacted with ", e] }) }) }) });
                },
                ne = ({ reaction: e }) => (0, n.jsx)(te, { emoji: e.reaction, count: e.users.asJsReadonlyArrayView().length, users: e.users.asJsReadonlyArrayView() }),
                ae = ({ className: e, reactions: s }) => (0, n.jsxs)("div", { className: (0, ee.cn)("flex flex-row gap-1", e), children: [s.slice(0, 5).map((e) => (0, n.jsx)(ne, { reaction: e }, e.reaction)), s.length > 5 && (0, n.jsx)(te, { emoji: "…", count: 0, users: [] })] });
            var re = t(167285),
                oe = t(636872),
                ie = t(840489);
            const le = o.com.x.dms.chat.DmEvent,
                ce = o.com.x.models.KMPRect,
                de = ({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, onEvent: a }) => {
                    const [r, o] = (0, i.useState)(!1);
                    if (!t && !s?.quickReactions) return null;
                    const l = s?.quickReactions?.asJsReadonlyArrayView().map((e) => e.asJsReadonlyArrayView());
                    return (0, n.jsx)(Q.J, {
                        trigger: (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, n.jsx)(D.z, {
                                variant: "primaryText",
                                size: "small",
                                color: "red600",
                                icon: (0, n.jsx)(oe.Z, {}),
                                onClick: () => {
                                    null === s ? (o(!0), a(new le.MessageDoubleClicked(e, new ce(0, 0, 0, 0), !1))) : (o(!1), a(le.MessageFocusedDialogDismissed));
                                },
                            }),
                        }),
                        open: null !== s && r,
                        onOpenChange: (e) => {
                            !e && r && (a(le.MessageFocusedDialogDismissed), o(!1));
                        },
                        children: (0, n.jsx)("div", {
                            className: "flex flex-col p-1 rounded-lg border",
                            children: l?.map((s, t) =>
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: "flex",
                                        children: s.map((s) =>
                                            (0, n.jsx)(
                                                "button",
                                                {
                                                    type: "button",
                                                    className: (0, ie.Z)("w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100", { "bg-gray-50": s.isSelected }),
                                                    onClick: () => {
                                                        a(new le.ReactionPickerItemClick(s, e));
                                                    },
                                                    children: (0, n.jsx)(d.x, { size: "headline1", children: s.emoji }),
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
            var me = t(48783),
                ue = t(617092),
                xe = t(289752),
                he = t(791266);
            const ge = o.com.x.dms.chat.DmEvent,
                pe = ({ isReceived: e, replyPreview: s, replierInfo: t, onEvent: a }) => {
                    const r = t.id,
                        { senderId: i } = s,
                        l = t.displayName,
                        c = s.senderDisplayName,
                        m = (0, n.jsx)(d.x, { as: "span", className: "text-text/70", size: "subtext2" }),
                        u = (0, n.jsx)(x.cC, { i18nKey: "<highlight>{replier}</highlight> to you", values: { replier: l }, components: { highlight: m } }),
                        h = (0, n.jsx)(x.cC, { i18nKey: "<highlight>{replier}</highlight> to {sender}", values: { replier: l, sender: c }, components: { highlight: m } }),
                        g = (0, n.jsx)(x.cC, { i18nKey: "<highlight>{replier}</highlight> to themself", values: { replier: l }, components: { highlight: m } }),
                        p = (0, n.jsx)(x.cC, { i18nKey: "<highlight>You</highlight> to yourself", components: { highlight: m } }),
                        f = (0, n.jsx)(x.cC, { i18nKey: "<highlight>You</highlight> to {sender}", values: { sender: c }, components: { highlight: m } }),
                        v = r.equals(i) ? (s.senderIsCurrentUser ? p : g) : s.senderIsCurrentUser ? u : e ? h : f;
                    return (0, n.jsxs)("div", { className: `flex flex-col mt-0.5 gap-1 ${e ? "items-start" : "items-end"} cursor-pointer`, onClick: () => s.sequenceNumber && a(new ge.ReplyBubbleClicked(s.sequenceNumber)), children: [s.showReplyNames && (0, n.jsxs)("div", { className: "flex gap-1 px-2 " + (e ? "text-start" : "text-end"), children: [(0, n.jsx)(me.Z, { className: "inline-block text-text/70" }), (0, n.jsx)(d.x, { as: "span", className: "text-text/40", size: "subtext2", children: v })] }), s.attachment && (s.attachment instanceof o.com.x.dms.model.MessageItemAttachment.Media && s.attachment.type === o.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(ue.K, { filename: s.attachment.filename, fileSize: s.attachment.fileSize }) : s.attachment instanceof o.com.x.dms.model.MessageItemAttachment.Media.FromServer && s.attachment.uriState instanceof o.com.x.dms.model.MediaUriState.ResolvedMedia && (0, n.jsx)(xe.Et, { src: s.attachment.uriState.uri, type: s.attachment.type, dimensions: s.attachment.dimensions, className: "rounded-2xl !w-[25%] !h-[25%]" })), s.attachment instanceof o.com.x.dms.model.MessageItemAttachment.UrlCard && (0, n.jsx)(he.C, { urlCard: s.attachment }), s.previewText && (0, n.jsx)("div", { className: "flex flex-col px-3 py-1.5 rounded-2xl gap-3 border " + (s.senderIsCurrentUser ? "border-primary/50" : "border-gray-400"), children: (0, n.jsx)(d.x, { color: s.senderIsCurrentUser ? "primary" : "gray900", size: "subtext1", numberOfLines: 2, children: s.previewText }) })] });
                };
            var fe = t(469745);
            function ve({ messageItem: e, messageFocusedDialog: s, onEvent: t }) {
                const { t: a } = (0, x.$G)(),
                    r = (0, fe.a)("(max-width: 768px)"),
                    l = e instanceof o.com.x.dms.model.MessageItemReceived,
                    c = null !== e.textContent && !e.supersizeEmoji,
                    [m, u] = (0, i.useState)(!1),
                    h = ((e) => {
                        switch (e) {
                            case o.com.x.dms.model.MessageBurstState.Solo:
                                return "py-1";
                            case o.com.x.dms.model.MessageBurstState.First:
                                return "pt-1";
                            case o.com.x.dms.model.MessageBurstState.Last:
                                return "pb-1";
                            default:
                                return "";
                        }
                    })(e.burstState),
                    g = ((p = e.avatarDisplayMode), (f = e.burstState), (v = e.senderInfo?.user), "None" !== p.name && (f === o.com.x.dms.model.MessageBurstState.First || f === o.com.x.dms.model.MessageBurstState.Solo) && !v);
                var p, f, v;
                const j = !!e.messageInfo?.timeToLive;
                return (0, n.jsxs)(G.S, {
                    message: a("Couldn't load message"),
                    children: [
                        l && g && (0, n.jsx)("div", { className: "px-16", children: (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: e.senderInfo?.user?.displayName }) }),
                        (0, n.jsx)("div", {
                            className: `flex ${l ? "justify-start" : "justify-end"} ${h} px-4`,
                            onMouseEnter: () => u(!0),
                            onMouseLeave: () => u(!1),
                            onClick: () => u(!0),
                            children: (0, n.jsxs)("div", {
                                className: `grid gap-x-2 gap-y-0.5 ${r ? "max-w-full" : "max-w-[calc(55%+128px)]"} grid-cols-[auto_auto_auto_auto] items-center`,
                                style: { gridTemplateAreas: l ? '\n                  "avatar content actions"\n                  ". message-info ."\n                ' : '\n                  "actions content avatar"\n                  ". message-info ."\n                ' },
                                children: [
                                    (0, n.jsx)("div", { className: "self-end", style: { gridArea: "avatar" }, children: e.senderInfo?.user && (0, n.jsx)(V, { avatarDisplayMode: e.avatarDisplayMode, user: e.senderInfo?.user }) }),
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-1 " + (l ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.replyPreview && e.senderInfo && e.senderInfo.user && (0, n.jsx)(pe, { replyPreview: e.replyPreview, replierInfo: e.senderInfo.user, isReceived: l, onEvent: t }), e.attachment ? (0, n.jsxs)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl relative", children: [(0, n.jsx)(J.P, { attachment: e.attachment, isReceived: l, onEvent: t, className: "rounded-2xl" }), j && !c && (0, n.jsx)("div", { className: "absolute bottom-2 right-2 rounded-full text-gray-700 shadow-md", children: (0, n.jsx)(K.Z, { className: "w-4 h-4" }) })] }) : null, e.supersizeEmoji && (0, n.jsx)(d.x, { size: "title2", className: "px-1 tracking-widest", children: e.textContent }), c ? (0, n.jsx)("div", { className: "px-4 py-2 rounded-2xl " + (e.supersizeEmoji ? "" : l ? "bg-gray-200" : "bg-blue-500"), children: e.textContent && (0, n.jsx)(Y, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: l, hasTTL: j }) }) : null] }),
                                    (0, n.jsxs)("div", { className: `${r ? "w-16" : "w-32"} flex items-center gap-1 ${l ? "flex-row" : "flex-row-reverse"}`, style: { gridArea: "actions" }, children: [(0, n.jsx)(de, { messageItem: e, messageFocusedDialog: s, isMessageFocused: m, onEvent: t }), (0, n.jsx)(P, { messageFocusedDialog: s, isMessageFocused: m, messageItem: e, onEvent: t, isFromAttachment: !1 }), m && !r && (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: (0, re.H)(e.createdTimestamp.epochSeconds) })] }),
                                    (0, n.jsxs)("div", { className: "flex flex-col", style: { gridArea: "message-info" }, children: [e.reactions && e.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(ae, { className: "relative -mt-3 ms-2  " + (l ? "justify-start" : "justify-end"), reactions: e.reactions.asJsReadonlyArrayView() }), e.messageInfo && (0, n.jsx)(q, { messageInfo: e.messageInfo, showSignatureVerificationIssuesIcon: e.showSignatureVerificationIssuesIcon, isReceived: l })] }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            var je = t(630804);
            function ye({ sendingStatusItem: e }) {
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(d.x, { size: "subtext2", color: "red500", children: "Failed" }), (0, n.jsx)(je.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            function we({ chatItem: e, messageFocusedDialog: s, onEvent: t }) {
                return e instanceof o.com.x.dms.model.MessageItemReceived || e instanceof o.com.x.dms.model.MessageItemSent || e instanceof o.com.x.dms.model.MessageItemPending ? (0, n.jsx)(ve, { messageItem: e, messageFocusedDialog: s, onEvent: t }) : e instanceof o.com.x.dms.model.SendingStatusItem ? (0, n.jsx)(ye, { sendingStatusItem: e }) : e instanceof o.com.x.dms.model.InformationalItem ? (0, n.jsx)(S, { informationalItem: e }) : null;
            }
            const be = (0, i.memo)(we);
            var Ne = t(98474),
                Ie = t(463341);
            const Ce = ({ component: e, numItems: s }) => {
                    const { apiRef: t, addOnScrollListener: a } = (0, Ie.Nb)(),
                        [r, l] = (0, i.useState)(!1),
                        c = (0, i.useCallback)(() => {
                            const e = t.current;
                            if (!e) return;
                            const s = e.scrollOffset + e.viewportSize;
                            l(s + 30 < e.scrollSize);
                        }, [t.current]);
                    (0, i.useEffect)(() => a(c), [c, a]);
                    const d = (0, i.useCallback)(() => {
                        e.onEvent(o.com.x.dms.chat.DmEvent.ScrollToBottomButtonClicked);
                        const n = t.current;
                        if (!n) return;
                        const a = n.scrollSize - n.scrollOffset - n.viewportSize <= 1e4;
                        n.scrollToIndex(s - 1, { align: "end", smooth: a, offset: 60 });
                    }, [e, t.current, s]);
                    return r ? (0, n.jsx)(D.z, { icon: (0, n.jsx)(Ne.Z, { width: 16, height: 16 }), className: "z-20 absolute right-12 bottom-24 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", color: "blue500", onClick: d }) : null;
                },
                Se = o.com.x.dms.model.MessageItemSent,
                ke = o.com.x.dms.model.MessageItemReceived,
                De = o.kotlin.collections.KtList;
            function Ee({ component: e, isTypingIndicatorShown: s }) {
                const t = (0, l._)(e.state),
                    c = (0, i.useMemo)(() => t.chatItems.items.asJsReadonlyArrayView().toReversed(), [t.chatItems]),
                    d = { align: "end", offset: 60 },
                    { apiRef: m, dispatchOnScroll: u } = (0, Ie.Nb)(),
                    x = (0, i.useRef)(!1),
                    h = (0, i.useCallback)(() => {
                        if (m.current) {
                            const s = m.current.findStartIndex(),
                                t = m.current.findEndIndex(),
                                n = c
                                    .slice(s, t + 1)
                                    .filter((e) => e instanceof ke || e instanceof Se)
                                    .map((e) => e.sequenceNumber);
                            e.onEvent(new o.com.x.dms.chat.DmEvent.VisibleMessagesChanged(t === c.length - 1, De.fromJsArray(n)));
                        }
                    }, [e, c, m.current]),
                    g = (0, i.useCallback)(() => {
                        m.current?.scrollToIndex(c.length - 1, d), (x.current = !1), h();
                    }, [c, m.current, h]);
                (0, i.useEffect)(() => {
                    g();
                }, [t.convId]),
                    (0, i.useEffect)(() => {
                        x.current || g();
                    }, [g, s]);
                const p = (s) => {
                    e.onEvent(s);
                };
                return (
                    (0, i.useEffect)(() => {
                        if (t.requestScrollToIndex && m.current) {
                            const e = c.length - 1 - t.requestScrollToIndex,
                                s = m.current.findStartIndex(),
                                n = { align: "center", smooth: Math.abs(e - s) <= 30 };
                            m.current?.scrollToIndex?.(e, n), (x.current = !1), h();
                        }
                    }, [t.requestScrollToIndex, c, m.current, h]),
                    (0, n.jsx)(G.S, {
                        children: (0, n.jsx)("div", {
                            className: "relative h-full",
                            children: c
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(a.T, {
                                              api: m,
                                              className: "!h-full scrollbar-thin-custom",
                                              items: c,
                                              onScroll: (e, s) => {
                                                  m.current && (0 !== e && "backward" === s && c.length - 3 > m.current.findEndIndex() && (x.current = !0), h()), u(e, s);
                                              },
                                              onAtEnd: () => {
                                                  x.current = !1;
                                              },
                                              onAtStart: () => {
                                                  t.chatItems.olderItemsInfo && p(new o.com.x.dms.chat.DmEvent.ScrolledToTop(t.chatItems.olderItemsInfo));
                                              },
                                              renderItem: (e) => {
                                                  return (0, n.jsx)(be, { chatItem: e, onEvent: p, messageFocusedDialog: ((s = e.id), t.showingMessageFocusedDialog?.message.id === s ? t.showingMessageFocusedDialog : null) }, e.uniqueKey);
                                                  var s;
                                              },
                                              startMargin: 64,
                                              header: (0, n.jsx)("div", { className: "h-16" }),
                                              footer: (0, n.jsx)("div", { className: s ? "h-[92px]" : "h-[60px]" }),
                                          }),
                                          (0, n.jsx)(Ce, { component: e, numItems: c.length }),
                                      ],
                                  })
                                : (0, n.jsx)("div", { className: "flex h-full items-center", children: (0, n.jsx)(r.P, {}) }),
                        }),
                    })
                );
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
        548978: (e, s, t) => {
            t.d(s, { y: () => i });
            var n = t(552322),
                a = t(475694),
                r = t(350311),
                o = t(455091);
            const i = ({ typingIndicatorItem: e }) => {
                const { t: s } = (0, o.$G)(),
                    t = e.users.asJsReadonlyArrayView(),
                    i = t.map((e) => e.profileImageUrl || r.j);
                let l = s("typing …");
                return 1 === t.length && t[0]?.name ? (l = s("{name} is typing …", { name: t[0]?.name })) : 2 === t.length && t[0]?.name && t[1]?.name ? (l = s("{name1} & {name2} are typing …", { name1: t[0]?.name, name2: t[1]?.name })) : t.length > 2 && (l = s("Several people are typing …")), (0, n.jsxs)("div", { className: "flex justify-start items-center py-1 px-4 gap-2", children: [!!i.length && (0, n.jsx)("div", { className: "-m-0.5", children: (0, n.jsx)(a.o, { urls: i, size: "small" }) }), (0, n.jsx)("span", { className: "text-sm text-gray-800 animate-pulse duration-1200", children: l })] });
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
            t.d(s, { x: () => I });
            var n = t(552322),
                a = t(202784),
                r = t(844098),
                o = t(702024),
                i = t(941204),
                l = t(130629),
                c = t(436059),
                d = t(887390),
                m = t(921879),
                u = t(159603),
                x = t(611463),
                h = t(379342),
                g = t(533476),
                p = t(658358),
                f = t(468428),
                v = t(889198),
                j = t(107039),
                y = t(272795),
                w = t(620134);
            const b = u.com.x.dms.newdm,
                N = u.com.x.dms.mapToValueList,
                I = ({ onVisibilityChange: e }) => {
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
                        (0, n.jsx)(r.s, { isOpen: !0, onOpenChange: e, isDismissable: !0, children: (0, n.jsx)("div", { className: "flex flex-1 flex-col w-[32rem] h-[32rem] transition-colors", children: s ? (0, n.jsx)(C, { component: s }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(o.P, {}) }) }) })
                    );
                };
            const C = ({ component: e }) => {
                const s = (0, g._)(e.state);
                (0, p.e)(e.toasts);
                const t = N(s.selectedGroupUsers).asJsReadonlyArrayView(),
                    a = [...(s.isCreateGroupMode ? [] : ["group-button"]), ...s.suggestions.asJsReadonlyArrayView()],
                    r = (s) => () => {
                        e.onEvent(new b.NewDmEvent.DeleteSelectedGroupUser(s));
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
                                    e.onEvent(b.NewDmEvent.BackButtonClicked);
                                },
                            }),
                            rightContent:
                                s.isCreateGroupMode &&
                                (0, n.jsx)(c.z, {
                                    onClick: () => {
                                        e.onEvent(b.NewDmEvent.CreateButtonClicked);
                                    },
                                    variant: "primaryFilled",
                                    children: "Next",
                                }),
                            subtitle: s.isCreateGroupMode ? "Add people" : void 0,
                        }),
                        (0, n.jsx)("div", {
                            children: (0, n.jsx)(d._, {
                                autoFocus: !0,
                                leftContent: (0, n.jsx)(j.Z, { className: "text-gray-700" }),
                                placeholder: "Search people",
                                value: s.query,
                                onChange: (s) => {
                                    e.onEvent(new b.NewDmEvent.QueryChanged(s.target.value));
                                },
                                borderRadius: "none",
                                className: "w-full",
                            }),
                        }),
                        (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: t.length > 0 && t.map((e) => (0, n.jsx)(w.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: r(e.id) }, e.id.userIdString)) }),
                        s.isCreateConversationCallInProgress ? (0, n.jsx)(o.P, {}) : (0, n.jsx)(m.T, { items: a, renderItem: (t) => (t instanceof u.com.x.dms.NewDmSuggestion ? (0, n.jsx)(y.c, { onClick: () => e.onEvent(new b.NewDmEvent.SuggestionClicked(t)), suggestion: t, isSelected: t instanceof u.com.x.dms.NewDmSuggestion.User && s.selectedGroupUsers.asJsReadonlyMapView().has(t.user.id) }) : (0, n.jsxs)("div", { className: "flex flex-row items-center gap-1 p-2 py-2.5 hover:bg-gray-50 cursor-pointer", onClick: () => e.onEvent(b.NewDmEvent.CreateAGroupItemClicked), children: [(0, n.jsx)("div", { className: "p-2 border border-solid rounded-full", children: (0, n.jsx)(f.Z, { className: "text-blue-500 size-4" }) }), (0, n.jsx)(i.x, { size: "body", color: "blue500", weight: "bold", children: "Create a Group" })] })) }),
                    ],
                });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.838f778a.js.map
