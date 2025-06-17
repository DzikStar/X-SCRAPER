"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-eca6a814"],
    {
        718278: (e, s, t) => {
            t.d(s, { o: () => o });
            var n = t(552322),
                a = t(993165),
                r = t(159603);
            const i = r.com.x.logger.XLog,
                o = () =>
                    (0, n.jsx)(a.z, {
                        onClick: async () => {
                            i.flush();
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
        228805: (e, s, t) => {
            t.d(s, { r: () => Ge });
            var n = t(552322),
                a = t(983706),
                r = t(193686),
                i = t(159603),
                o = t(202784),
                l = t(533476),
                c = t(378364),
                d = t(332161),
                m = t(789764),
                u = t(455091),
                x = t(165272),
                h = t(369962);
            const g = i.com.x.dms.model.InformationalItemContents;
            function p({ avatarUrl: e, screenName: s }) {
                const t = (0, x.F)();
                return e ? (0, n.jsx)(c.q, { url: e, size: "small", screenName: s, withLink: !t || "external" }) : null;
            }
            function f({ message: e }) {
                return (0, n.jsx)(d.x, { size: "subtext2", weight: "medium", color: "gray600", children: e });
            }
            function j({ children: e }) {
                return (0, n.jsx)("div", { className: "flex justify-center items-center my-2", children: e });
            }
            function v({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const i = s[0],
                        o = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = i?.displayName || "Unknown"), (a = s.length - 1), (r = e.sender?.displayName), `${t} and ${a} other were added by ${r}`) : ((e, s) => `${e} and ${s} other were added`)(i?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(m.o, { urls: o }), (0, n.jsx)(f, { message: l })] });
                }
                var t, a, r;
                const i = s[0],
                    o = e.sender?.displayName ? ((e, s) => `${e} was added by ${s}`)(i?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was added`)(i?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(p, { avatarUrl: i?.profileImageUrl, screenName: e.sender?.screenName }), (0, n.jsx)(f, { message: o })] });
            }
            function w({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const e = s[0],
                        r = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        i = ((t = e?.displayName || "Someone"), (a = s.length - 1), `${t} and ${a} others were removed`);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(m.o, { urls: r }), (0, n.jsx)(f, { message: i })] });
                }
                var t, a;
                const r = s[0],
                    i = ((e) => `${e} was removed`)(r?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(p, { avatarUrl: r?.profileImageUrl }), (0, n.jsx)(f, { message: i })] });
            }
            function y({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${s} made ${e} member${e > 1 ? "s" : ""} an admin`)(e.affectedUsers.asJsReadonlyArrayView().length, t);
                return (0, n.jsx)(f, { message: a });
            }
            function b({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${s} removed admin status from ${e} member${e > 1 ? "s" : ""}`)(e.affectedUsers.asJsReadonlyArrayView().length, t);
                return (0, n.jsx)(f, { message: a });
            }
            function N({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${e} changed the group name to ${s}`)(e.senderIsCurrentUser ? "You" : t, e.newTitle ?? "Untitled");
                return (0, n.jsx)(f, { message: a });
            }
            function I({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e) => `${e} updated the group photo`)(e.senderIsCurrentUser ? "You" : t);
                return (0, n.jsx)(f, { message: a });
            }
            function C({ contents: e }) {
                const s = e.newTtl?.inWholeMilliseconds || 0,
                    t = e.sender,
                    a = t?.displayName ?? "A member",
                    r = e.senderIsCurrentUser ? "You" : a,
                    i = 0 === s ? ((e) => `${e} turned vanishing mode off`)(r) : ((e, s) => `${e} set vanishing mode to ${(0, h.L)(s)}`)(r, s);
                return (0, n.jsx)(f, { message: i });
            }
            function D({ contents: e }) {
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
                return (0, n.jsx)(f, { message: s });
            }
            function S({ informationalItem: e }) {
                const s = e.contents,
                    { t } = (0, u.$G)();
                return (0, n.jsx)(j, { children: s instanceof g.AddedGroupMembers ? (0, n.jsx)(v, { contents: s }) : s instanceof g.RemovedGroupMembers ? (0, n.jsx)(w, { contents: s }) : s instanceof g.AddedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof g.RemovedGroupAdmins ? (0, n.jsx)(b, { contents: s }) : s instanceof g.ChangedGroupTitle ? (0, n.jsx)(N, { contents: s }) : s instanceof g.ChangedGroupAvatar ? (0, n.jsx)(I, { contents: s }) : s instanceof g.DefaultTtlChanged ? (0, n.jsx)(C, { contents: s }) : s instanceof g.DateChanged ? (0, n.jsx)(D, { contents: s }) : s instanceof g.GroupInviteEnabled ? (0, n.jsx)(f, { message: t("Invite link enabled") }) : s instanceof g.GroupInviteDisabled ? (0, n.jsx)(f, { message: t("Invite link disabled") }) : null });
            }
            var R = t(470851),
                k = t(318063),
                E = t(993165),
                M = t(553453),
                $ = t(611105),
                U = t(147602),
                A = t(436995),
                T = t(145731),
                F = t(668631),
                z = t(421018);
            const P = i.com.x.dms.model.ChatMessageAction,
                V = i.com.x.dms.chat.DmEvent,
                J = i.com.x.models.KMPRect;
            function L({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: r }) {
                const i = t || !!s?.longPress,
                    o = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const t = () => s(new V.MessageActionClick(e));
                                switch (e) {
                                    case P.Report:
                                    case P.DsaReport:
                                        return null;
                                }
                                return e instanceof P.Reply ? { text: "Reply", icon: (0, n.jsx)(M.Z, {}), onClick: t } : e instanceof P.CancelSend ? { text: "Cancel message", icon: void 0, onClick: t } : e instanceof P.RetrySend ? { text: "Try sending again", icon: (0, n.jsx)($.Z, {}), onClick: t } : e instanceof P.CopyText ? { text: "Copy message text", icon: (0, n.jsx)(U.Z, {}), onClick: () => navigator.clipboard.writeText(e.text) } : e instanceof P.Edit ? { text: "Edit message", icon: (0, n.jsx)(A.Z, {}), onClick: t } : e instanceof P.DeleteForAll ? { text: "Delete for All", icon: (0, n.jsx)(T.Z, {}), destructive: !0, onClick: t } : e instanceof P.DeleteForSelf || e instanceof P.DeletePending ? { text: "Delete for me", icon: (0, n.jsx)(T.Z, {}), destructive: !0, onClick: t } : e instanceof P.MessageDetails ? { text: "Info", icon: (0, n.jsx)(F.Z, {}), onClick: t } : null;
                            })(e, r),
                        )
                        .filter((e) => !!e);
                return (0, n.jsx)("div", {
                    className: `flex self-center items-center gap-2 bg-background border rounded-full p-1 shadow-sm ${!i && "invisible"}`,
                    onClick: (e) => e.stopPropagation(),
                    children: (0, n.jsx)(k.P, {
                        items: o ?? [],
                        trigger: (0, n.jsx)(E.z, { variant: "primaryText", size: "xSmall", icon: (0, n.jsx)(z.Z, {}), color: "gray600" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new V.MessageLongPressed(e, new J(0, 0, 0, 0), a) : V.MessageFocusedDialogDismissed;
                            r(t);
                        },
                    }),
                });
            }
            function G({ user: e, avatarDisplayMode: s }) {
                if (!e || !e.profileImageUrl || "None" === s.name) return null;
                if ("AsPadding" === s.name) return (0, n.jsx)("div", { className: "px-4", children: " " });
                const t = (0, x.F)();
                return (0, n.jsx)("div", { children: (0, n.jsx)(c.q, { url: e.profileImageUrl, size: "large", screenName: e.screenName, withLink: !t || "external" }) });
            }
            var Z = t(134877),
                _ = t(205116),
                B = t(38891),
                q = t(189164),
                K = t(42630);
            function O({ messageInfo: e, isReceived: s, showSignatureVerificationIssuesIcon: t }) {
                const a = e.showReadUsers?.asJsReadonlyArrayView().map((e) => e.user?.profileImageUrl || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") || [],
                    r = (0, B.z)().isTrue("xchat_read_receipt_facepile") && a.length > 1;
                return e.showReadUsers || e.showEdited || t ? (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.showEdited && (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: "Edited" }), e.showEdited && (t || (e.showReadUsers && r)) && (0, n.jsx)(K.A, {}), t && (0, n.jsx)(q.Z, {}), t && e.showReadUsers && r && (0, n.jsx)(K.A, {}), e.showReadUsers && r && (0, n.jsx)(m.o, { urls: a, size: "small", spacing: 6, stackOrder: "ascending" })] }) : null;
            }
            var H = t(123010);
            const Y = ({ isReceived: e, textContent: s, textEntities: t, messageFooter: a }) => {
                const r = (function (e, s) {
                    const t = {};
                    return (
                        e.forEach((e) => {
                            const n = (function (e, s) {
                                const t = s.slice(0, e[0]),
                                    n = new Intl.Segmenter("en", { granularity: "grapheme" }),
                                    a = Array.from(n.segment(t)).length,
                                    r = e[0] - a;
                                if (0 !== r) return [e[0] - r, e[1] - r];
                                return e;
                            })([e.startIdx, e.endIdx], s);
                            e instanceof i.com.x.models.text.MentionEntity && (t.mentions || (t.mentions = []), t.mentions.push({ screenName: e.screenName, indices: n })), e instanceof i.com.x.models.text.UrlEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.displayUrl, url: X(e.url), indices: n })), e instanceof i.com.x.models.text.EmailEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.email, url: W(e.email), indices: n })), e instanceof i.com.x.models.text.HashtagEntity && (t.hashtags || (t.hashtags = []), t.hashtags.push({ text: e.text, indices: n })), e instanceof i.com.x.models.text.CashtagEntity && (t.symbols || (t.symbols = []), t.symbols.push({ text: e.text, indices: n })), e instanceof i.com.x.models.text.PhoneNumberEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.phoneNumberForTelLink, url: `tel:${e.phoneNumberForTelLink}`, indices: n }));
                        }),
                        t
                    );
                })(t, s);
                return (0, n.jsxs)("div", { className: "inline-flex flex-wrap items-end gap-2", children: [(0, n.jsx)(H.W, { color: e ? "text" : "white", entities: r, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 }), a] });
            };
            function X(e) {
                return /^https?:\/\//i.test(e) ? e : `https://${e}`;
            }
            function W(e) {
                return /^mailto:/i.test(e) ? e : `mailto:${e}`;
            }
            var Q = t(437712),
                ee = t(651782);
            const se = ({ remainingReactions: e }) => {
                    const s = (0, o.useRef)(null),
                        t = (0, ee.X)(s);
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(Q.J, { open: t, side: "top", trigger: (0, n.jsx)("div", { ref: s, className: "inline-flex items-center bg-gray-50 rounded-full px-2 pt-0.5 shadow-sm gap-1 border border-background cursor-pointer", children: (0, n.jsx)(d.x, { size: "body", children: "…" }) }), children: (0, n.jsx)("div", { className: "grid gap-2 p-2 pr-0 border border-border rounded-lg bg-background shadow-lg mx-auto [grid-template-columns:repeat(auto-fit,minmax(3rem,1fr))] max-w-[calc(6*3rem+5*0.5rem)]", children: e.map((e) => (0, n.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [(0, n.jsx)(R.c, { emoji: e.reaction }), (0, n.jsx)(d.x, { size: "subtext2", weight: "bold", children: e.users.asJsReadonlyArrayView().length })] }, e.reaction)) }) }) });
                },
                te = ({ emoji: e, count: s, users: t }) => {
                    const a = (0, o.useRef)(null),
                        r = (0, ee.X)(a),
                        i = t.map((e) => e.name),
                        l = i.length > 1 ? `${i.slice(0, -1).join(", ")} and ${i[i.length - 1]}` : i[0];
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(Q.J, { open: r, side: "top", trigger: (0, n.jsxs)("div", { ref: a, className: "inline-flex items-center bg-gray-50 rounded-full px-2 pt-0.5 shadow-sm gap-1 border border-background cursor-pointer", children: [(0, n.jsx)("div", { className: "scale-80 mt-1", children: (0, n.jsx)(R.c, { emoji: e }) }), s > 1 && (0, n.jsx)(d.x, { size: "subtext2", weight: "bold", color: "gray700", children: s })] }), children: (0, n.jsxs)("div", { className: "flex flex-row items-center gap-2 p-2 border border-border rounded-lg bg-background shadow-lg", children: [(0, n.jsxs)(d.x, { size: "subtext2", weight: "medium", children: [l, " reacted with"] }), (0, n.jsx)(R.c, { emoji: e })] }) }) });
                },
                ne = ({ reaction: e }) => (0, n.jsx)(te, { emoji: e.reaction, count: e.users.asJsReadonlyArrayView().length, users: e.users.asJsReadonlyArrayView() }),
                ae = ({ isReceived: e, reactions: s }) => {
                    const t = s.slice(4);
                    return (0, n.jsxs)("div", { className: `relative flex ${e ? "flex-row-reverse" : "flex-row"} gap-1 justify-end -mt-[10px] mx-3`, children: [s.slice(0, 4).map((e) => (0, n.jsx)(ne, { reaction: e }, e.reaction)), t.length > 0 && (0, n.jsx)(se, { remainingReactions: t })] });
                };
            var re = t(515790),
                ie = t(305399),
                oe = t(589259),
                le = t(480158),
                ce = t(630086),
                de = t(996016),
                me = t(350311),
                ue = t(336984);
            function xe({ participants: e }) {
                const { t: s } = (0, u.$G)(),
                    [t, a] = (0, o.useState)(e.slice(0, 2));
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex flex-row gap-2 justify-between items-center",
                            children: [
                                (0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: s("Seen by") }),
                                t.length < e.length &&
                                    (0, n.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            a(e);
                                        },
                                        children: (0, n.jsx)(d.x, { color: "primary", children: s("See all ({number})", { number: e.length }) }),
                                    }),
                            ],
                        }),
                        (0, n.jsx)("div", { className: t.length === e.length ? "max-h-[300px] overflow-y-auto" : "", children: (0, n.jsx)(ce.I, { className: "mt-2", children: (0, n.jsx)(de.b, { participants: t, menuItemsMap: new Map(), handleParticipantClicked: () => {}, handleParticipantMenuButtonClicked: () => {} }) }) }),
                    ],
                });
            }
            const he = ({ participant: e }) => (e && e.user ? (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, n.jsx)(me.s, { url: e.user.profileImageUrl, size: "medium" }), (0, n.jsx)(oe.R, { name: e.user.displayName, badges: (0, ue.r)(e.user), weight: "normal" })] }) : null);
            function ge({ messageDetailsState: e, onDismiss: s }) {
                const { t } = (0, u.$G)(),
                    a = (0, l._)(e),
                    [r, i] = (0, o.useState)(!1),
                    c = a?.details?.readBy?.asJsReadonlyArrayView() || [],
                    m = (0, o.useRef)(r);
                return (
                    (0, o.useEffect)(() => {
                        i(!!a);
                    }, [a]),
                    (0, n.jsx)(le.h, {
                        open: r,
                        onOpenChange: (e) => {
                            i(e), m.current && !e && s(), (m.current = !0);
                        },
                        trigger: (0, n.jsx)("div", {}),
                        children: (0, n.jsx)("div", { className: "p-4 max-w-[750px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: a?.details && (0, n.jsxs)("div", { className: "flex flex-col gap-2 mt-2", children: [c.length > 0 && (0, n.jsx)(xe, { participants: c }), (0, n.jsx)("div", { className: "flex flex-row gap-2", children: (0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: t("Sent by") }) }), (0, n.jsx)("div", { className: "px-4 rounded-xl bg-gray-0", children: (0, n.jsx)(he, { participant: a.details.sentBy }) })] }) }),
                    })
                );
            }
            var pe = t(167285),
                fe = t(242782);
            const je = ({ isReceived: e, timestamp: s, hasTTL: t, participants: a, showDetails: r, readStatus: i, setShowDetails: o, color: l, iconColor: c }) => (0, n.jsxs)("div", { className: "flex items-center ml-auto shrink-0 gap-1", children: [(0, n.jsx)(d.x, { size: "subtext3", color: l || (e ? "gray700" : "white"), children: (0, pe.H)(s) }), t && (0, n.jsx)(re.Z, { className: `w-3.5 h-3.5 ${l || (e ? "text-text/60" : "text-white/60")}` }), !e && (a.length > 0 ? (0, n.jsx)(le.h, { open: r, onOpenChange: o, trigger: (0, n.jsx)("div", { className: "z-20 -ms-[2px] cursor-pointer", children: (0, n.jsx)(fe.Z, { className: `w-4 h-4 ${c || "text-white"}` }) }), children: (0, n.jsx)("div", { className: "p-4 max-w-[500px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: (0, n.jsx)(xe, { participants: a }) }) }) : "Read" === i ? (0, n.jsx)(fe.Z, { className: `w-4 h-4 ${c || "text-white"}` }) : null)] });
            var ve = t(784344),
                we = t(617092),
                ye = t(289752),
                be = t(791266);
            const Ne = i.com.x.dms.chat.DmEvent,
                Ie = ({ isReceived: e, replyPreview: s, replierInfo: t, onEvent: a }) => {
                    const r = t.id,
                        { senderId: o } = s,
                        l = t.displayName,
                        c = s.senderDisplayName,
                        m = (0, n.jsx)(d.x, { as: "span", className: "text-text/70", size: "subtext2" }),
                        x = (0, n.jsx)(u.cC, { i18nKey: "<highlight>{replier}</highlight> to you", values: { replier: l }, components: { highlight: m } }),
                        h = (0, n.jsx)(u.cC, { i18nKey: "<highlight>{replier}</highlight> to {sender}", values: { replier: l, sender: c }, components: { highlight: m } }),
                        g = (0, n.jsx)(u.cC, { i18nKey: "<highlight>{replier}</highlight> to themself", values: { replier: l }, components: { highlight: m } }),
                        p = (0, n.jsx)(u.cC, { i18nKey: "<highlight>You</highlight> to yourself", components: { highlight: m } }),
                        f = (0, n.jsx)(u.cC, { i18nKey: "<highlight>You</highlight> to {sender}", values: { sender: c }, components: { highlight: m } }),
                        j = r.equals(o) ? (s.senderIsCurrentUser ? p : g) : s.senderIsCurrentUser ? x : e ? h : f;
                    return (0, n.jsxs)("div", { className: `flex flex-col mt-0.5 gap-1 ${e ? "items-start" : "items-end"} cursor-pointer`, onClick: () => s.sequenceNumber && a(new Ne.ReplyBubbleClicked(s.sequenceNumber)), children: [s.showReplyNames && (0, n.jsxs)("div", { className: "flex gap-1 px-2 " + (e ? "text-start" : "text-end"), children: [(0, n.jsx)(ve.Z, { className: "inline-block text-text/70" }), (0, n.jsx)(d.x, { as: "span", className: "text-text/40", size: "subtext2", children: j })] }), s.attachment && (s.attachment instanceof i.com.x.dms.model.MessageItemAttachment.Media && s.attachment.type === i.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(we.K, { filename: s.attachment.filename, fileSize: s.attachment.fileSize }) : s.attachment instanceof i.com.x.dms.model.MessageItemAttachment.Media.FromServer && s.attachment.uriState instanceof i.com.x.dms.model.MediaUriState.ResolvedMedia && (0, n.jsx)(ye.Et, { src: s.attachment.uriState.uri, type: s.attachment.type, dimensions: s.attachment.dimensions, className: "rounded-2xl !w-[25%] !h-[25%] border border-gray-200", showAsStatic: !0 })), s.attachment instanceof i.com.x.dms.model.MessageItemAttachment.UrlCard && (0, n.jsx)(be.C, { urlCard: s.attachment }), s.previewText && (0, n.jsx)("div", { className: "flex flex-col px-3 py-1.5 rounded-2xl gap-3 border " + (s.senderIsCurrentUser ? "border-primary/50" : "border-gray-400"), children: (0, n.jsx)(d.x, { color: s.senderIsCurrentUser ? "primary" : "gray900", size: "subtext1", numberOfLines: 2, children: s.previewText }) })] });
                };
            var Ce = t(407602),
                De = t(840489),
                Se = t(463341);
            const Re = i.com.x.dms.chat.DmEvent,
                ke = i.com.x.models.KMPRect,
                Ee = ({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, onEvent: a }) => {
                    const [r, l] = (0, o.useState)(!1),
                        [c, d] = (0, o.useState)(!1);
                    if (!t && !s?.quickReactions) return null;
                    const m = s?.quickReactions?.asJsReadonlyArrayView().map((e) => e.asJsReadonlyArrayView());
                    return (0, n.jsx)(Q.J, {
                        borderRadius: "2xLarge",
                        trigger: (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, n.jsx)(E.z, {
                                variant: "primaryText",
                                size: "small",
                                color: "red600",
                                icon: (0, n.jsx)(Ce.Z, {}),
                                onClick: () => {
                                    null === s ? (l(!0), a(new Re.MessageDoubleClicked(e, new ke(0, 0, 0, 0), !1))) : (l(!1), a(Re.MessageFocusedDialogDismissed));
                                },
                            }),
                        }),
                        open: null !== s && r,
                        onOpenChange: (e) => {
                            !e && r && (a(Re.MessageFocusedDialogDismissed), l(!1), d(!1));
                        },
                        children: (0, n.jsx)("div", {
                            className: "relative flex flex-col",
                            children: c
                                ? (0, n.jsx)(Se.Bu, {
                                      children: (0, n.jsx)(R.h, {
                                          onReactionClicked: (s) => {
                                              const t = new i.com.x.dms.model.ReactionPickerItem(s, !1);
                                              a(new Re.ReactionPickerItemClick(t, e)), a(Re.MessageFocusedDialogDismissed), l(!1), d(!1);
                                          },
                                          recentlyUsedEmojis: s?.quickReactions?.asJsReadonlyArrayView().flatMap((e) => e.asJsReadonlyArrayView().map((e) => e.emoji)) || [],
                                          reactionMap: m?.flatMap((e) => e.filter((e) => e.isSelected).map((e) => e.emoji)) || [],
                                      }),
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: "flex flex-col p-1 rounded-2xl border",
                                              children: m?.map((s, t) =>
                                                  (0, n.jsx)(
                                                      "div",
                                                      {
                                                          className: "flex",
                                                          children: s.map((s) =>
                                                              (0, n.jsx)(
                                                                  "button",
                                                                  {
                                                                      type: "button",
                                                                      className: (0, De.Z)("w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100", { "bg-gray-50": s.isSelected }),
                                                                      onClick: () => {
                                                                          a(new Re.ReactionPickerItemClick(s, e));
                                                                      },
                                                                      children: (0, n.jsx)(R.c, { emoji: s.emoji }),
                                                                  },
                                                                  s.emoji,
                                                              ),
                                                          ),
                                                      },
                                                      `reaction-row-${t}`,
                                                  ),
                                              ),
                                          }),
                                          (0, n.jsx)("div", {
                                              className: "absolute bottom-0 right-0 bg-background m-1",
                                              children: (0, n.jsx)("button", {
                                                  type: "button",
                                                  className: "w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100",
                                                  onClick: () => {
                                                      a(Re.MessageReactionsClicked), d(!0);
                                                  },
                                                  children: (0, n.jsx)(z.Z, {}),
                                              }),
                                          }),
                                      ],
                                  }),
                        }),
                    });
                };
            function Me({ messageItem: e, messageFocusedDialog: s, showMessageInfoDialog: t, messageInfoDialog: a, messageInfoDialogDismissed: r, onEvent: l }) {
                const { t: c } = (0, u.$G)(),
                    m = (0, ie.a)("(max-width: 768px)"),
                    x = e instanceof i.com.x.dms.model.MessageItemReceived,
                    h = null !== e.textContent && !e.supersizeEmoji,
                    [g, p] = (0, o.useState)(!1),
                    f = ((e) => {
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
                    })(e.burstState),
                    [j, v] = (0, o.useState)(!1),
                    w = e.messageInfo?.showReadUsers?.asJsReadonlyArrayView() || [],
                    y = !!e.messageInfo?.timeToLive,
                    b = y || e?.messageInfo?.showTimestampValue || e?.messageInfo?.showTimestamp;
                return (0, n.jsxs)(Z.S, {
                    message: c("Couldn't load message"),
                    children: [
                        e.senderDisplayName && (0, n.jsx)("div", { className: "px-16", children: (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: e.senderInfo?.user?.displayName }) }),
                        (0, n.jsx)("div", {
                            className: `flex ${x ? "justify-start" : "justify-end"} ${f} px-4`,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            onClick: () => p(!0),
                            children: (0, n.jsxs)("div", {
                                className: `grid gap-x-2 gap-y-0.5 ${m ? "max-w-full" : "max-w-[calc(55%+128px)]"} grid-cols-[auto_auto_auto_auto] items-center`,
                                style: { gridTemplateAreas: x ? '\n                  "avatar content actions"\n                  ". message-info ."\n                ' : '\n                  "actions content avatar"\n                  ". message-info ."\n                ' },
                                children: [
                                    (0, n.jsx)("div", { className: "self-end", style: { gridArea: "avatar" }, children: e.senderInfo?.user && (0, n.jsx)(G, { avatarDisplayMode: e.avatarDisplayMode, user: e.senderInfo?.user }) }),
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-1 " + (x ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.replyPreview && e.senderInfo && e.senderInfo.user && (0, n.jsx)(Ie, { replyPreview: e.replyPreview, replierInfo: e.senderInfo.user, isReceived: x, onEvent: l }), e.attachment ? (0, n.jsxs)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl relative", children: [(0, n.jsx)(_.P, { attachment: e.attachment, isReceived: x, onEvent: l, className: " border border-gray-200 rounded-2xl" }), y && !h && (0, n.jsx)("div", { className: "absolute bottom-2 right-2 rounded-full text-gray-700 shadow-md", children: (0, n.jsx)(re.Z, { className: "w-4 h-4" }) })] }) : null, e.supersizeEmoji && (0, n.jsx)("div", { className: "flex gap-2 px-1 tracking-widest", children: e.textContent?.match(/(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu)?.map((e, s) => (0, n.jsx)(R.c, { emoji: e }, `${e}-${s}`)) }), h ? (0, n.jsx)("div", { className: "flex justify-end px-4 py-2 rounded-2xl " + (e.supersizeEmoji ? "" : x ? "bg-gray-100" : "bg-blue-500"), children: e.textContent && (0, n.jsx)(Y, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: x, messageFooter: b && (0, n.jsx)(je, { isReceived: x, timestamp: e.createdTimestamp.epochSeconds, hasTTL: y, readStatus: e?.messageInfo?.readStatus?.name, participants: w, showDetails: j, setShowDetails: v }) }) }) : null] }),
                                    (0, n.jsxs)("div", {
                                        className: `${m ? "w-16" : "w-32"} flex items-center gap-1 ${x ? "flex-row" : "flex-row-reverse"}`,
                                        style: { gridArea: "actions" },
                                        children: [
                                            (0, n.jsx)(Ee, { messageItem: e, messageFocusedDialog: s, isMessageFocused: g, onEvent: l }),
                                            (0, n.jsx)(L, { messageFocusedDialog: s, isMessageFocused: g, messageItem: e, onEvent: l, isFromAttachment: !1 }),
                                            t &&
                                                (0, n.jsx)(ge, {
                                                    onDismiss: () => {
                                                        r();
                                                    },
                                                    messageDetailsState: a,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-2 pb-1", style: { gridArea: "message-info" }, children: [e.reactions && e.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(ae, { isReceived: x, reactions: e.reactions.asJsReadonlyArrayView() }), e.supersizeEmoji && (0, n.jsx)("div", { className: "align-end", children: (0, n.jsx)(je, { isReceived: !1, timestamp: e.createdTimestamp.epochSeconds, hasTTL: y, readStatus: e?.messageInfo?.readStatus?.name, participants: w, showDetails: j, setShowDetails: v, color: "gray700", iconColor: "text-gray-700" }) }), e.messageInfo && (0, n.jsx)(O, { messageInfo: e.messageInfo, showSignatureVerificationIssuesIcon: e.showSignatureVerificationIssuesIcon, isReceived: x })] }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            function $e({ sendingStatusItem: e }) {
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(d.x, { size: "subtext2", color: "red500", children: "Failed" }), (0, n.jsx)(F.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            function Ue({ chatItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: r, messageInfoDialogDismissed: o }) {
                return e instanceof i.com.x.dms.model.MessageItemReceived || e instanceof i.com.x.dms.model.MessageItemSent || e instanceof i.com.x.dms.model.MessageItemPending ? (0, n.jsx)(Me, { messageItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: r, messageInfoDialogDismissed: o }) : e instanceof i.com.x.dms.model.SendingStatusItem ? (0, n.jsx)($e, { sendingStatusItem: e }) : e instanceof i.com.x.dms.model.InformationalItem ? (0, n.jsx)(S, { informationalItem: e }) : null;
            }
            const Ae = (0, o.memo)(Ue);
            var Te = t(97759);
            const Fe = ({ component: e, numItems: s, composerHeight: t }) => {
                const { apiRef: a, addOnScrollListener: r } = (0, Se.Nb)(),
                    [l, c] = (0, o.useState)(!1),
                    d = (0, o.useCallback)(() => {
                        const e = a.current;
                        if (!e) return;
                        const s = e.scrollOffset + e.viewportSize;
                        c(s + 30 < e.scrollSize);
                    }, [a.current]);
                (0, o.useEffect)(() => r(d), [d, r]);
                const m = (0, o.useCallback)(() => {
                    e.onEvent(i.com.x.dms.chat.DmEvent.ScrollToBottomButtonClicked);
                    const n = a.current;
                    if (!n) return;
                    const r = n.scrollSize - n.scrollOffset - n.viewportSize <= 1e4;
                    n.scrollToIndex(s - 1, { align: "end", smooth: r, offset: t });
                }, [e, a.current, s, t]);
                return l ? (0, n.jsx)(E.z, { icon: (0, n.jsx)(Te.Z, { width: 16, height: 16 }), className: "z-20 absolute right-12 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", style: { bottom: t + 24 }, color: "blue500", onClick: m }) : null;
            };
            var ze = t(676337);
            const Pe = i.com.x.dms.chat.DmEvent,
                Ve = i.com.x.dms.model.MessageItemSent,
                Je = i.com.x.dms.model.MessageItemReceived,
                Le = i.kotlin.collections.KtList;
            function Ge({ component: e, isTypingIndicatorShown: s, composerHeight: t }) {
                const c = (0, l._)(e.state),
                    d = (0, o.useMemo)(() => c.chatItems.items.asJsReadonlyArrayView().toReversed(), [c.chatItems]),
                    m = (0, ze.H)(),
                    u = c.showingMessageDetailsBottomSheet?.id ?? "",
                    { apiRef: x, dispatchOnScroll: h } = (0, Se.Nb)(),
                    g = (0, o.useRef)(!1),
                    p = (0, o.useMemo)(() => e.observeMessageDetails(u), [e, u]),
                    f = (0, o.useCallback)(() => {
                        if (x.current && m) {
                            const s = x.current.findStartIndex(),
                                t = x.current.findEndIndex(),
                                n = d
                                    .slice(s, t + 1)
                                    .filter((e) => e instanceof Je || e instanceof Ve)
                                    .map((e) => e.sequenceNumber);
                            e.onEvent(new i.com.x.dms.chat.DmEvent.VisibleMessagesChanged(t === d.length - 1, Le.fromJsArray(n)));
                        }
                    }, [e, d, x.current, m]),
                    j = (0, o.useCallback)(() => {
                        x.current?.scrollToIndex(d.length - 1, { align: "end", offset: t }), (g.current = !1), f();
                    }, [d, x.current, f, t]);
                (0, o.useLayoutEffect)(() => {
                    g.current || j();
                }, [d.length, t, s]);
                const v = (s) => {
                    e.onEvent(s);
                };
                return (
                    (0, o.useEffect)(() => {
                        if (c.requestScrollTo && x.current) {
                            const e = { align: "center", smooth: !0 };
                            x.current?.scrollToIndex?.(d.length - c.requestScrollTo.index, e), (g.current = !1), f();
                        }
                    }, [c.requestScrollTo, d, x.current, f]),
                    (0, n.jsx)(Z.S, {
                        children: (0, n.jsx)("div", {
                            className: "relative h-full",
                            children: d
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(a.T, {
                                              api: x,
                                              className: "!h-full scrollbar-thin-custom pl-3",
                                              items: d,
                                              onScroll: (e, s) => {
                                                  x.current && (0 !== e && "backward" === s && d.length - 3 > x.current.findEndIndex() && (g.current = !0), f()), h(e, s);
                                              },
                                              onNearEnd: () => {
                                                  g.current = !1;
                                              },
                                              onAtStart: () => {
                                                  c.chatItems.olderItemsInfo && v(new i.com.x.dms.chat.DmEvent.ScrolledToTop(c.chatItems.olderItemsInfo));
                                              },
                                              renderItem: (s) => {
                                                  return (0, n.jsx)(
                                                      Ae,
                                                      {
                                                          chatItem: s,
                                                          onEvent: v,
                                                          messageFocusedDialog: ((t = s.id), c.showingMessageFocusedDialog?.message.id === t ? c.showingMessageFocusedDialog : null),
                                                          showMessageInfoDialog: u === s.id,
                                                          messageInfoDialog: p,
                                                          messageInfoDialogDismissed: () => {
                                                              e.onEvent(Pe.MessageDetailsDismissed);
                                                          },
                                                      },
                                                      s.uniqueKey,
                                                  );
                                                  var t;
                                              },
                                              startMargin: 64,
                                              header: (0, n.jsx)("div", { className: "h-16" }),
                                              footer: (0, n.jsx)("div", { style: { height: t } }),
                                          }),
                                          (0, n.jsx)(Fe, { component: e, numItems: d.length, composerHeight: t }),
                                      ],
                                  })
                                : (0, n.jsx)("div", { className: "flex h-full items-center", children: (0, n.jsx)(r.P, {}) }),
                        }),
                    })
                );
            }
        },
        463341: (e, s, t) => {
            t.d(s, { Bu: () => i, Nb: () => o });
            var n = t(552322),
                a = t(202784);
            const r = (0, a.createContext)(null),
                i = ({ children: e }) => {
                    const s = (0, a.useRef)(null),
                        t = (0, a.useRef)(0),
                        i = (0, a.useRef)(new Map()).current,
                        o = (0, a.useCallback)(
                            (e) => {
                                const s = t.current++;
                                return i.set(s, e), () => i.delete(s);
                            },
                            [i.set, i.delete],
                        ),
                        l = (0, a.useCallback)(
                            (e, s) => {
                                i.forEach((t) => t(e, s));
                            },
                            [i.forEach],
                        );
                    return (0, n.jsx)(r.Provider, { value: { apiRef: s, addOnScrollListener: o, dispatchOnScroll: l }, children: e });
                },
                o = () => {
                    const e = (0, a.useContext)(r);
                    if (!e) throw new Error("No ScrollerEventContext.Provider found when calling useScrollerEventContext");
                    return e;
                };
        },
        548978: (e, s, t) => {
            t.d(s, { y: () => o });
            var n = t(552322),
                a = t(789764),
                r = t(350311),
                i = t(455091);
            const o = ({ typingIndicatorItem: e }) => {
                const { t: s } = (0, i.$G)(),
                    t = e.users.asJsReadonlyArrayView(),
                    o = t.map((e) => e.profileImageUrl || r.j);
                let l = s("typing …");
                return 1 === t.length && t[0]?.name ? (l = s("{name} is typing …", { name: t[0]?.name })) : 2 === t.length && t[0]?.name && t[1]?.name ? (l = s("{name1} & {name2} are typing …", { name1: t[0]?.name, name2: t[1]?.name })) : t.length > 2 && (l = s("Several people are typing …")), (0, n.jsxs)("div", { className: "flex justify-start items-center py-1 px-4 gap-2", children: [!!o.length && (0, n.jsx)("div", { className: "-m-0.5", children: (0, n.jsx)(a.o, { urls: o, size: "small" }) }), (0, n.jsx)("span", { className: "text-sm text-gray-800 animate-pulse duration-1200", children: l })] });
            };
        },
        379342: (e, s, t) => {
            t.d(s, { s: () => l });
            var n = t(968025),
                a = t(264531),
                r = t(202784);
            const i = (e) => e.replaceAll(":", "-");
            class o {
                router;
                path;
                constructor(e, s) {
                    (this.router = e), (this.path = s);
                }
                toInbox() {
                    this.router.push(`${this.path}/`);
                }
                toConversation(e) {
                    this.router.push(`${this.path}/${i(e)}`);
                }
                toConversationInfo(e) {
                    this.router.push(`${this.path}/${i(e)}/info`);
                }
                toParticipants(e) {
                    this.router.push(`${this.path}/${i(e)}/participants`);
                }
                toVanishingMode(e) {
                    this.router.push(`${this.path}/${i(e)}/vanishing-mode`);
                }
                toNewDM() {
                    this.router.push(`${this.path}/new`);
                }
                toPinScreen(e, s) {
                    const t = new URLSearchParams();
                    t.append("register", s?.shouldRegister ? "true" : "false"), t.append("generate", s?.shouldGenerate ? "true" : "false"), this.router.push(`${this.path}/pin/${e}?${t.toString()}`);
                }
                toGroupInvite(e) {
                    this.router.push(`${this.path}/${i(e)}/group-invite`);
                }
                toEditGroup(e) {
                    this.router.push(`${this.path}/${i(e)}/info/edit-group`);
                }
                toClassicInbox() {
                    window.location.href = "https://x.com/messages";
                }
            }
            function l() {
                const e = (0, n.t)(),
                    s = (0, a.BH)();
                return (0, r.useMemo)(() => new o(e, s), [e, s]);
            }
        },
        110241: (e, s, t) => {
            t.d(s, { a: () => a });
            var n = t(727071);
            function a() {
                return ((0, n.U)().id || "").replaceAll("-", ":");
            }
        },
        231037: (e, s, t) => {
            function n() {
                return "true" === new URLSearchParams(location.search).get("generate");
            }
            t.d(s, { l: () => n });
        },
        867400: (e, s, t) => {
            function n() {
                return "true" === new URLSearchParams(location.search).get("register");
            }
            t.d(s, { a: () => n });
        },
        210071: (e, s, t) => {
            t.d(s, { $: () => a });
            var n = t(727071);
            function a() {
                return "edit-group" === (0, n.U)().subTab;
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
            t.d(s, { x: () => N });
            var n = t(552322),
                a = t(202784),
                r = t(159603),
                i = t(887491),
                o = t(447742),
                l = t(380389),
                c = t(193686),
                d = t(332161),
                m = t(993165),
                u = t(687521),
                x = t(983706),
                h = t(155369),
                g = t(379342),
                p = t(533476),
                f = t(658358),
                j = t(34681),
                v = t(272795),
                w = t(620134);
            const y = r.com.x.dms.newdm,
                b = r.com.x.dms.mapToValueList,
                N = ({ onVisibilityChange: e }) => {
                    const [s, t] = (0, a.useState)(null),
                        i = (0, h.n)(),
                        o = (0, g.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const s = new r.com.x.export.CancellationSignal(),
                                n = i.newDmComponent(
                                    s,
                                    () => {
                                        e(!1);
                                    },
                                    (s) => {
                                        e(!1), o.toConversation(s.id);
                                    },
                                );
                            return (
                                t(n),
                                () => {
                                    s.cancel();
                                }
                            );
                        }, [i, o, e]),
                        (0, n.jsx)(j.Vq, { open: !0, onOpenChange: e, children: s ? (0, n.jsx)(I, { component: s }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(c.P, {}) }) })
                    );
                },
                I = ({ component: e }) => {
                    const s = (0, p._)(e.state);
                    (0, f.e)(e.toasts);
                    const t = b(s.selectedGroupUsers).asJsReadonlyArrayView(),
                        a = s.suggestions.asJsReadonlyArrayView();
                    const h = (s) => () => {
                        e.onEvent(new y.NewDmEvent.DeleteSelectedGroupUser(s));
                    };
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(j.cZ, {
                            withCloseButton: !1,
                            children: [
                                (0, n.jsxs)(j.fK, {
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "flex flex-row justify-between items-center gap-2",
                                            children: [
                                                (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(j.$N, { className: "text-headline1 font-extrabold", children: s.isCreateGroupMode ? "Create a group" : "New message" }), s.isCreateGroupMode && (0, n.jsx)(d.x, { color: "gray700", children: "Add people" })] }),
                                                (0, n.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => {
                                                        e.onEvent(y.NewDmEvent.BackButtonClicked);
                                                    },
                                                    className: "p-1 text-gray-700",
                                                    children: (0, n.jsx)(i.Z, { className: "size-6" }),
                                                }),
                                            ],
                                        }),
                                        s.isCreateGroupMode &&
                                            (0, n.jsx)(m.z, {
                                                onClick: () => {
                                                    e.onEvent(y.NewDmEvent.CreateButtonClicked);
                                                },
                                                variant: "primaryFilled",
                                                children: "Next",
                                            }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(u._, {
                                        autoFocus: !0,
                                        placeholder: "Search name or username",
                                        value: s.query,
                                        onChange: (s) => {
                                            e.onEvent(new y.NewDmEvent.QueryChanged(s.target.value));
                                        },
                                        borderRadius: "xLarge",
                                        className: "bg-gray-0 focus-within:bg-transparent",
                                        inputClassName: "placeholder:text-gray-700",
                                        leftContent: (0, n.jsx)(o.Z, { className: "h-5 w-5 text-gray-700" }),
                                    }),
                                }),
                                t.length > 0 && (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: t.map((e) => (0, n.jsx)(w.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: h(e.id) }, e.id.userIdString)) }),
                                (0, n.jsxs)("div", {
                                    className: "max-h-[32rem] overflow-hidden",
                                    children: [
                                        !s.isCreateGroupMode && (0, n.jsxs)("div", { className: "flex flex-row items-center gap-3.5 ps-3 py-2.5 hover:bg-gray-50 cursor-pointer rounded-lg", onClick: () => e.onEvent(y.NewDmEvent.CreateAGroupItemClicked), children: [(0, n.jsx)(l.Z, { className: "text-blue-500 size-6" }), (0, n.jsx)(d.x, { size: "body", color: "blue500", weight: "bold", children: "Create a group" })] }),
                                        s.isCreateConversationCallInProgress || 0 === a.length
                                            ? (0, n.jsx)("div", { className: "pt-8 h-[24rem]", children: (0, n.jsx)(c.P, {}) })
                                            : (0, n.jsx)(x.T, {
                                                  className: "max-h-[24rem] scrollbar-thin-custom",
                                                  items: a,
                                                  renderItem: function (t) {
                                                      return (0, n.jsx)(v.c, { onClick: () => e.onEvent(new y.NewDmEvent.SuggestionClicked(t)), suggestion: t, isSelected: t instanceof r.com.x.dms.NewDmSuggestion.User && s.selectedGroupUsers.asJsReadonlyMapView().has(t.user.id) }, t.id);
                                                  },
                                              }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.6e098d5a.js.map
