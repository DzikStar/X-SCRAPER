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
        889184: (e, s, t) => {
            t.d(s, { r: () => He });
            var n = t(552322),
                a = t(983706),
                r = t(159603),
                i = t(202784),
                o = t(533476),
                l = t(378364),
                c = t(332161),
                d = t(789764),
                m = t(263033),
                u = t(165272),
                x = t(369962);
            const g = r.com.x.dms.model.InformationalItemContents;
            function h({ avatarUrl: e, screenName: s }) {
                const t = (0, u.F)();
                return e ? (0, n.jsx)(l.q, { url: e, size: "small", screenName: s, withLink: !t || "external" }) : null;
            }
            function p({ message: e }) {
                return (0, n.jsx)(c.x, { size: "subtext2", weight: "medium", color: "gray600", children: e });
            }
            function f({ children: e }) {
                return (0, n.jsx)("div", { className: "flex justify-center items-center my-2", children: e });
            }
            function j({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.affectedUsers.asJsReadonlyArrayView();
                if (t.length > 1) {
                    const o = t[0],
                        l = t.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        c = e.sender?.displayName ? ((a = o?.displayName || "Unknown"), (r = t.length - 1), (i = e.sender?.displayName), s("{addedName, count} {{addedName} and {count, plural, one {other} other {others}} were added by {addedBy}", { addedName: a, count: r, addedBy: i })) : ((e, t) => s("{addedName, count} {{addedName} and {count, plural, one {other} other {others}} were added", { addedName: e, count: t }))(o?.displayName || "Unknown", t.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: l }), (0, n.jsx)(p, { message: c })] });
                }
                var a, r, i;
                const o = t[0],
                    l = e.sender?.displayName ? ((e, t) => s("{addedName} was added by {addedBy}", { addedName: e, addedBy: t }))(o?.displayName || "Unknown", e.sender?.displayName) : ((e) => s("{addedName} was added", { addedName: e }))(o?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(h, { avatarUrl: o?.profileImageUrl, screenName: e.sender?.screenName }), (0, n.jsx)(p, { message: l })] });
            }
            function v({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.affectedUsers.asJsReadonlyArrayView();
                if (t.length > 1) {
                    const e = t[0],
                        i = t.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        o = ((a = e?.displayName || "Someone"), (r = t.length - 1), s("{removedName, count} {{removedName} and {count, plural, one {other} other {others}} were removed", { removedName: a, count: r }));
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: i }), (0, n.jsx)(p, { message: o })] });
                }
                var a, r;
                const i = t[0],
                    o = ((e) => s("{removedName} was removed", { removedName: e }))(i?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(h, { avatarUrl: i?.profileImageUrl }), (0, n.jsx)(p, { message: o })] });
            }
            function w({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender,
                    a = t?.displayName ?? s("A member"),
                    r = ((e, t) => s("{senderName, count} {{senderName} made {count, plural, one {member} other {members}} an admin", { senderName: t, count: e }))(e.affectedUsers.asJsReadonlyArrayView().length, a);
                return (0, n.jsx)(p, { message: r });
            }
            function y({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender,
                    a = t?.displayName ?? s("A member"),
                    r = ((e, t) => s("{senderName, count} {{senderName} removed admin status from {count, plural, one {member} other {members}}", { senderName: t, count: e }))(e.affectedUsers.asJsReadonlyArrayView().length, a);
                return (0, n.jsx)(p, { message: r });
            }
            function b({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender,
                    a = t?.displayName ?? s("A member"),
                    r = ((e, t) => s("{senderName} changed the group name to {title}", { senderName: e, title: t }))(e.senderIsCurrentUser ? s("You") : a, e.newTitle ?? s("Untitled"));
                return (0, n.jsx)(p, { message: r });
            }
            function N({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender,
                    a = t?.displayName ?? s("A member"),
                    r = ((e) => s("{senderName} updated the group photo", { senderName: e }))(e.senderIsCurrentUser ? s("You") : a);
                return (0, n.jsx)(p, { message: r });
            }
            function I({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.newTtl?.inWholeMilliseconds || 0,
                    a = e.sender,
                    r = a?.displayName ?? s("A member"),
                    i = e.senderIsCurrentUser ? s("You") : r,
                    o = 0 === t ? ((e) => s("{senderName} turned vanishing mode off", { senderName: e }))(i) : ((e, t) => s("{senderName} set vanishing mode to {duration}", { senderName: e, duration: (0, x.L)(t) }))(i, t);
                return (0, n.jsx)(p, { message: o });
            }
            function C({ contents: e }) {
                const { t: s } = (0, m.$G)();
                let t = e.newDate.toString();
                if (e.newDate instanceof r.com.x.dms.model.KmpDateFormat.Today) t = s("Today");
                else if (e.newDate instanceof r.com.x.dms.model.KmpDateFormat.Yesterday) t = s("Yesterday");
                else if (e.newDate instanceof r.com.x.dms.model.KmpDateFormat.Date) {
                    const s = e.newDate.kmpDate,
                        n = new Date(s.year, s.month - 1, s.day),
                        a = "undefined" != typeof navigator ? navigator.language : "en",
                        r = { month: "short", day: "numeric", ...(e.newDate.includeYear && { year: "numeric" }) };
                    t = n.toLocaleDateString(a, r);
                }
                return (0, n.jsx)(p, { message: t });
            }
            function S({ informationalItem: e }) {
                const s = e.contents,
                    { t } = (0, m.$G)();
                return (0, n.jsx)(f, { children: s instanceof g.AddedGroupMembers ? (0, n.jsx)(j, { contents: s }) : s instanceof g.RemovedGroupMembers ? (0, n.jsx)(v, { contents: s }) : s instanceof g.AddedGroupAdmins ? (0, n.jsx)(w, { contents: s }) : s instanceof g.RemovedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof g.ChangedGroupTitle ? (0, n.jsx)(b, { contents: s }) : s instanceof g.ChangedGroupAvatar ? (0, n.jsx)(N, { contents: s }) : s instanceof g.DefaultTtlChanged ? (0, n.jsx)(I, { contents: s }) : s instanceof g.DateChanged ? (0, n.jsx)(C, { contents: s }) : s instanceof g.GroupInviteEnabled ? (0, n.jsx)(p, { message: t("Invite link enabled") }) : s instanceof g.GroupInviteDisabled ? (0, n.jsx)(p, { message: t("Invite link disabled") }) : null });
            }
            var D = t(470851),
                R = t(256958),
                k = t(318063),
                E = t(993165),
                M = t(553453),
                $ = t(611105),
                A = t(147602),
                U = t(436995),
                z = t(145731),
                T = t(668631),
                F = t(421018);
            const G = r.com.x.dms.model.ChatMessageAction,
                V = r.com.x.dms.chat.DmEvent,
                P = r.com.x.models.KMPRect;
            function L({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: r }) {
                const i = t || !!s?.longPress,
                    o = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const { t } = (0, m.$G)(),
                                    a = () => s(new V.MessageActionClick(e));
                                switch (e) {
                                    case G.Report:
                                    case G.DsaReport:
                                        return null;
                                }
                                return e instanceof G.Reply
                                    ? { text: t("Reply"), icon: (0, n.jsx)(M.Z, {}), onClick: a }
                                    : e instanceof G.CancelSend
                                      ? { text: t("Cancel message"), icon: void 0, onClick: a }
                                      : e instanceof G.RetrySend
                                        ? { text: t("Try sending again"), icon: (0, n.jsx)($.Z, {}), onClick: a }
                                        : e instanceof G.CopyText
                                          ? {
                                                text: t("Copy message text"),
                                                icon: (0, n.jsx)(A.Z, {}),
                                                onClick: () => {
                                                    a(), navigator.clipboard.writeText(e.text), (0, R.Am)(t("Copied to clipboard"), { icon: "📄" });
                                                },
                                            }
                                          : e instanceof G.Edit
                                            ? { text: t("Edit message"), icon: (0, n.jsx)(U.Z, {}), onClick: a }
                                            : e instanceof G.DeleteForAll
                                              ? { text: t("Delete for All"), icon: (0, n.jsx)(z.Z, {}), destructive: !0, onClick: a }
                                              : e instanceof G.DeleteForSelf || e instanceof G.DeletePending
                                                ? { text: t("Delete for me"), icon: (0, n.jsx)(z.Z, {}), destructive: !0, onClick: a }
                                                : e instanceof G.MessageDetails
                                                  ? { text: t("Info"), icon: (0, n.jsx)(T.Z, {}), onClick: a }
                                                  : null;
                            })(e, r),
                        )
                        .filter((e) => !!e);
                return (0, n.jsx)("div", {
                    className: `flex self-center items-center gap-2 bg-background border rounded-full p-1 shadow-sm ${!i && "invisible"}`,
                    onClick: (e) => e.stopPropagation(),
                    children: (0, n.jsx)(k.P, {
                        items: o ?? [],
                        trigger: (0, n.jsx)(E.z, { variant: "primaryText", size: "xSmall", icon: (0, n.jsx)(F.Z, {}), color: "gray600" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new V.MessageLongPressed(e, new P(0, 0, 0, 0), a) : V.MessageFocusedDialogDismissed;
                            r(t);
                        },
                    }),
                });
            }
            function J({ user: e, avatarDisplayMode: s }) {
                if (!e || !e.profileImageUrl || "None" === s.name) return null;
                if ("AsPadding" === s.name) return (0, n.jsx)("div", { className: "px-4", children: " " });
                const t = (0, u.F)();
                return (0, n.jsx)("div", { children: (0, n.jsx)(l.q, { url: e.profileImageUrl, size: "large", screenName: e.screenName, withLink: !t || "external" }) });
            }
            var Z = t(607499),
                _ = t(205116),
                B = t(38891),
                q = t(189164),
                O = t(42630);
            function H({ messageInfo: e, isReceived: s, showSignatureVerificationIssuesIcon: t }) {
                const { t: a } = (0, m.$G)(),
                    r = e.showReadUsers?.asJsReadonlyArrayView().map((e) => e.user?.profileImageUrl || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") || [],
                    i = (0, B.z)().isTrue("xchat_read_receipt_facepile") && r.length > 1;
                return e.showReadUsers || e.showEdited || t ? (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.showEdited && (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: a("Edited") }), e.showEdited && (t || (e.showReadUsers && i)) && (0, n.jsx)(O.A, {}), t && (0, n.jsx)(q.Z, {}), t && e.showReadUsers && i && (0, n.jsx)(O.A, {}), e.showReadUsers && i && (0, n.jsx)(d.o, { urls: r, size: "small", spacing: 6, stackOrder: "ascending" })] }) : null;
            }
            var K = t(123010);
            const Y = ({ isReceived: e, textContent: s, textEntities: t, messageFooter: a }) => {
                const i = (function (e, s) {
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
                            e instanceof r.com.x.models.text.MentionEntity && (t.mentions || (t.mentions = []), t.mentions.push({ screenName: e.screenName, indices: n })), e instanceof r.com.x.models.text.UrlEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.displayUrl, url: W(e.url), indices: n })), e instanceof r.com.x.models.text.EmailEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.email, url: X(e.email), indices: n })), e instanceof r.com.x.models.text.HashtagEntity && (t.hashtags || (t.hashtags = []), t.hashtags.push({ text: e.text, indices: n })), e instanceof r.com.x.models.text.CashtagEntity && (t.symbols || (t.symbols = []), t.symbols.push({ text: e.text, indices: n })), e instanceof r.com.x.models.text.PhoneNumberEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.phoneNumberForTelLink, url: `tel:${e.phoneNumberForTelLink}`, indices: n }));
                        }),
                        t
                    );
                })(t, s);
                return (0, n.jsxs)("div", { className: "inline-flex flex-wrap items-end gap-2", children: [(0, n.jsx)(K.W, { color: e ? "text" : "white", entities: i, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 }), a] });
            };
            function W(e) {
                return /^https?:\/\//i.test(e) ? e : `https://${e}`;
            }
            function X(e) {
                return /^mailto:/i.test(e) ? e : `mailto:${e}`;
            }
            var Q = t(437712),
                ee = t(651782);
            const se = ({ remainingReactions: e }) => {
                    const s = (0, i.useRef)(null),
                        t = (0, ee.X)(s);
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(Q.J, { open: t, side: "top", trigger: (0, n.jsx)("div", { ref: s, className: "inline-flex items-center bg-gray-50 rounded-full px-2 pt-0.5 shadow-sm gap-1 border border-background cursor-pointer", children: (0, n.jsx)(c.x, { size: "body", children: "…" }) }), children: (0, n.jsx)("div", { className: "grid gap-2 p-2 pr-0 border border-border rounded-lg bg-background shadow-lg mx-auto [grid-template-columns:repeat(auto-fit,minmax(3rem,1fr))] max-w-[calc(6*3rem+5*0.5rem)]", children: e.map((e) => (0, n.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [(0, n.jsx)(D.c, { emoji: e.reaction }), (0, n.jsx)(c.x, { size: "subtext2", weight: "bold", children: e.users.asJsReadonlyArrayView().length })] }, e.reaction)) }) }) });
                },
                te = ({ emoji: e, count: s, users: t, isSelected: a }) => {
                    const r = (0, i.useRef)(null),
                        o = (0, ee.X)(r),
                        l = t.map((e) => e.name),
                        d = l.length > 1 ? `${l.slice(0, -1).join(", ")} and ${l[l.length - 1]}` : l[0];
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(Q.J, { open: o, side: "top", trigger: (0, n.jsxs)("div", { ref: r, className: `inline-flex items-center ${a ? "bg-blue-500" : "bg-gray-50"} rounded-full px-2 py-1 shadow-sm gap-1 border border-background cursor-pointer`, children: [(0, n.jsx)("div", { className: "scale-[0.9] inline-flex items-center", children: (0, n.jsx)(D.c, { emoji: e }) }), s > 1 && (0, n.jsx)(c.x, { size: "subtext2", weight: "bold", color: a ? "white" : "gray700", children: s })] }), children: (0, n.jsxs)("div", { className: "flex flex-row items-center gap-2 p-2 border border-border rounded-lg bg-background shadow-lg", children: [(0, n.jsxs)(c.x, { size: "subtext2", weight: "medium", children: [d, " reacted with"] }), (0, n.jsx)(D.c, { emoji: e })] }) }) });
                },
                ne = ({ reaction: e }) => (0, n.jsx)(te, { emoji: e.reaction, count: e.users.asJsReadonlyArrayView().length, users: e.users.asJsReadonlyArrayView(), isSelected: e.isSelected }),
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
                ue = t(167285),
                xe = t(336984),
                ge = t(814926),
                he = t(702823);
            function pe({ participants: e }) {
                const { t: s } = (0, m.$G)(),
                    [t, a] = (0, i.useState)(e.slice(0, 2));
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex flex-row gap-2 justify-between items-center",
                            children: [
                                (0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: s("Seen by") }),
                                t.length < e.length &&
                                    (0, n.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            a(e);
                                        },
                                        children: (0, n.jsx)(c.x, { color: "primary", children: s("See all ({number})", { number: e.length }) }),
                                    }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: t.length === e.length ? "max-h-[300px] overflow-y-auto" : "",
                            children: (0, n.jsx)(ce.I, {
                                className: "mt-2",
                                children: (0, n.jsx)(de.b, {
                                    participants: t,
                                    menuItemsMap: new Map(),
                                    handleParticipantClicked: (e, s) => {
                                        window.open(`https://x.com/${s}`, "_blank");
                                    },
                                    handleParticipantMenuButtonClicked: () => {},
                                }),
                            }),
                        }),
                    ],
                });
            }
            const fe = ({ timestamp: e, ttl: s }) => {
                    const { t } = (0, m.$G)();
                    return (0, n.jsxs)(ce.I, { className: "mt-2", children: [e && (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3 bg-gray-0 px-4", children: [(0, n.jsx)(ge.Z, { className: "w-4 h-4 fill-blue-500" }), (0, n.jsxs)("div", { className: "flex flex-row justify-between w-full", children: [(0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: t("Sent") }), (0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: (0, ue.H)(e) })] })] }), s && (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3 bg-gray-0 px-4", children: [(0, n.jsx)(he.Z, { className: "w-4 h-4 fill-gray-500" }), (0, n.jsxs)("div", { className: "flex flex-row justify-between w-full", children: [(0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: t("Disappears in") }), (0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: (0, x.L)(s.inWholeMilliseconds) })] })] })] });
                },
                je = ({ participant: e }) => (e && e.user ? (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, n.jsx)(me.s, { url: e.user.profileImageUrl, size: "medium" }), (0, n.jsx)(oe.R, { name: e.user.displayName, badges: (0, xe.r)(e.user), weight: "normal" })] }) : null);
            function ve({ messageDetailsState: e, onDismiss: s }) {
                const { t } = (0, m.$G)(),
                    a = (0, o._)(e),
                    [r, l] = (0, i.useState)(!1),
                    d = a?.details?.readBy?.asJsReadonlyArrayView() || [],
                    u = a?.details?.item.messageInfo?.showTimestampValue?.epochSeconds,
                    x = a?.details?.item.messageInfo?.timeToLive?.timeToLive,
                    g = (0, i.useRef)(r);
                return (
                    (0, i.useEffect)(() => {
                        l(!!a);
                    }, [a]),
                    (0, n.jsx)(le.h, {
                        open: r,
                        onOpenChange: (e) => {
                            l(e), g.current && !e && s(), (g.current = !0);
                        },
                        trigger: (0, n.jsx)("div", {}),
                        borderRadius: "large",
                        children: (0, n.jsx)("div", { className: "p-4 max-w-[750px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: a?.details && (0, n.jsxs)("div", { className: "flex flex-col gap-2 mt-2", children: [d.length > 0 && (0, n.jsx)(pe, { participants: d }), (0, n.jsx)("div", { className: "flex flex-row gap-2", children: (0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: t("Sent by") }) }), (0, n.jsx)("div", { className: "px-4 rounded-xl bg-gray-0", children: (0, n.jsx)(je, { participant: a.details.sentBy }) }), (0, n.jsx)(fe, { timestamp: u, ttl: x })] }) }),
                    })
                );
            }
            var we = t(242782);
            const ye = ({ isReceived: e, timestamp: s, hasTTL: t, participants: a, showDetails: r, readStatus: i, setShowDetails: o, color: l, iconColor: d }) => (0, n.jsxs)("div", { className: "flex items-center ml-auto shrink-0 gap-1", children: [(0, n.jsx)(c.x, { size: "subtext3", color: l || (e ? "gray700" : "white"), children: (0, ue.H)(s) }), t && (0, n.jsx)(re.Z, { className: `w-3.5 h-3.5 ${l || (e ? "text-text/60" : "text-white/60")}` }), !e && (a.length > 0 ? (0, n.jsx)(le.h, { open: r, onOpenChange: o, trigger: (0, n.jsx)("div", { className: "z-20 -ms-[2px] cursor-pointer", children: (0, n.jsx)(we.Z, { className: `w-4 h-4 ${d || "text-white"}` }) }), children: (0, n.jsx)("div", { className: "p-4 max-w-[500px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: (0, n.jsx)(pe, { participants: a }) }) }) : "Read" === i ? (0, n.jsx)(we.Z, { className: `w-4 h-4 ${d || "text-white"}` }) : null)] });
            var be = t(784344),
                Ne = t(617092),
                Ie = t(289752),
                Ce = t(791266);
            const Se = r.com.x.dms.chat.DmEvent,
                De = ({ isReceived: e, replyPreview: s, onEvent: t }) => (0, n.jsxs)("div", { className: `flex flex-col mt-0.5 gap-1 ${e ? "items-start" : "items-end"} cursor-pointer`, onClick: () => s.sequenceNumber && t(new Se.ReplyBubbleClicked(s.sequenceNumber)), children: [s.showReplyNames && (0, n.jsxs)("div", { className: `flex gap-1 px-2 ${e ? "text-start" : "text-end"} items-center`, children: [(0, n.jsx)(be.Z, { className: "inline-block text-text/70" }), (0, n.jsx)(c.x, { as: "span", size: "subtext3", children: s.senderDisplayName })] }), s.attachment && (s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.Media && s.attachment.type === r.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(Ne.K, { filename: s.attachment.filename, fileSize: s.attachment.fileSize }) : s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.Media.FromServer && s.attachment.uriState instanceof r.com.x.dms.model.MediaUriState.ResolvedMedia && (0, n.jsx)(Ie.Et, { src: s.attachment.uriState.uri, type: s.attachment.type, dimensions: s.attachment.dimensions, className: "rounded-2xl !w-[25%] !h-[25%] border border-gray-200", showAsStatic: !0 })), s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.UrlCard && (0, n.jsx)(Ce.C, { urlCard: s.attachment }), s.previewText && (0, n.jsx)("div", { className: "flex flex-col px-3 py-1.5 rounded-2xl gap-3 border " + (s.senderIsCurrentUser ? "border-primary/50" : "border-gray-400"), children: (0, n.jsx)(c.x, { color: s.senderIsCurrentUser ? "primary" : "gray900", size: "subtext1", numberOfLines: 2, children: s.previewText }) })] });
            var Re = t(407602),
                ke = t(840489),
                Ee = t(463341);
            const Me = r.com.x.dms.chat.DmEvent,
                $e = r.com.x.models.KMPRect,
                Ae = ({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, onEvent: a }) => {
                    const [o, l] = (0, i.useState)(!1),
                        [c, d] = (0, i.useState)(!1),
                        { t: u } = (0, m.$G)();
                    if (!t && !s?.quickReactions) return null;
                    const x = s?.quickReactions?.asJsReadonlyArrayView().map((e) => e.asJsReadonlyArrayView());
                    return (0, n.jsx)(Q.J, {
                        borderRadius: "2xLarge",
                        trigger: (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, n.jsx)(E.z, {
                                variant: "primaryText",
                                size: "small",
                                color: "red600",
                                icon: (0, n.jsx)(Re.Z, {}),
                                onClick: () => {
                                    null === s ? (l(!0), a(new Me.MessageDoubleClicked(e, new $e(0, 0, 0, 0), !1))) : (l(!1), a(Me.MessageFocusedDialogDismissed));
                                },
                            }),
                        }),
                        open: null !== s && o,
                        onOpenChange: (e) => {
                            !e && o && (a(Me.MessageFocusedDialogDismissed), l(!1), d(!1));
                        },
                        children: (0, n.jsx)("div", {
                            className: "relative flex flex-col",
                            children: c
                                ? (0, n.jsx)(Ee.Bu, {
                                      children: (0, n.jsx)(D.h, {
                                          onReactionClicked: (s) => {
                                              const t = new r.com.x.dms.model.ReactionPickerItem(s, !1);
                                              a(new Me.ReactionPickerItemClick(t, e)), a(Me.MessageFocusedDialogDismissed), l(!1), d(!1);
                                          },
                                          recentlyUsedEmojis: s?.quickReactions?.asJsReadonlyArrayView().flatMap((e) => e.asJsReadonlyArrayView().map((e) => e.emoji)) || [],
                                          reactionMap: x?.flatMap((e) => e.filter((e) => e.isSelected).map((e) => e.emoji)) || [],
                                          t: u,
                                      }),
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: "flex flex-col rounded-2xl border",
                                              children: x?.map((s, t) =>
                                                  (0, n.jsx)(
                                                      "div",
                                                      {
                                                          className: "flex",
                                                          children: s.map((r, i) =>
                                                              (0, n.jsx)(
                                                                  "button",
                                                                  {
                                                                      type: "button",
                                                                      className: (0, ke.Z)("w-8 h-8 flex items-center justify-center hover:bg-gray-100", { "bg-gray-50": r.isSelected }, { "rounded-r": r.isSelected && i < s.length - 1 && !s[i + 1]?.isSelected }, { "!rounded-t-none": r.isSelected && t === x.length - 1 }),
                                                                      onClick: () => {
                                                                          a(new Me.ReactionPickerItemClick(r, e));
                                                                      },
                                                                      children: (0, n.jsx)(D.c, { emoji: r.emoji }),
                                                                  },
                                                                  r.emoji,
                                                              ),
                                                          ),
                                                      },
                                                      `reaction-row-${t}`,
                                                  ),
                                              ),
                                          }),
                                          (0, n.jsx)("div", {
                                              className: "absolute bottom-0 right-0 bg-background",
                                              children: (0, n.jsx)("button", {
                                                  type: "button",
                                                  className: "w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100",
                                                  onClick: () => {
                                                      a(Me.MessageReactionsClicked), d(!0);
                                                  },
                                                  children: (0, n.jsx)(F.Z, {}),
                                              }),
                                          }),
                                      ],
                                  }),
                        }),
                    });
                };
            function Ue({ messageItem: e, messageFocusedDialog: s, showMessageInfoDialog: t, messageInfoDialog: a, messageInfoDialogDismissed: o, onEvent: l, isVisible: d }) {
                const { t: u } = (0, m.$G)(),
                    x = (0, ie.a)("(max-width: 768px)"),
                    g = e instanceof r.com.x.dms.model.MessageItemReceived,
                    h = null !== e.textContent && !e.supersizeEmoji,
                    [p, f] = (0, i.useState)(!1),
                    j = ((e) => {
                        switch (e) {
                            case r.com.x.dms.model.MessageBurstState.Solo:
                                return "py-1";
                            case r.com.x.dms.model.MessageBurstState.First:
                                return "pt-1";
                            case r.com.x.dms.model.MessageBurstState.Last:
                                return "pb-1";
                            default:
                                return "";
                        }
                    })(e.burstState),
                    [v, w] = (0, i.useState)(!1),
                    y = e.messageInfo?.showReadUsers?.asJsReadonlyArrayView() || [],
                    b = !!e.messageInfo?.timeToLive,
                    N = b || e?.messageInfo?.showTimestampValue || e?.messageInfo?.showTimestamp;
                return (0, n.jsxs)(Z.S, {
                    message: u("Couldn't load message"),
                    children: [
                        e.senderDisplayName && (0, n.jsx)("div", { className: "px-16", children: (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: e.senderInfo?.user?.displayName }) }),
                        (0, n.jsx)("div", {
                            className: `flex ${g ? "justify-start" : "justify-end"} ${j} px-4`,
                            onMouseEnter: () => f(!0),
                            onMouseLeave: () => f(!1),
                            onClick: () => f(!0),
                            children: (0, n.jsxs)("div", {
                                className: `grid gap-x-2 gap-y-0.5 ${x ? "max-w-full" : "max-w-[calc(55%+128px)]"} grid-cols-[auto_auto_auto_auto] items-center`,
                                style: { gridTemplateAreas: g ? '\n                  "avatar content actions"\n                  ". message-info ."\n                ' : '\n                  "actions content avatar"\n                  ". message-info ."\n                ' },
                                children: [
                                    (0, n.jsx)("div", { className: "self-end", style: { gridArea: "avatar" }, children: e.senderInfo?.user && (0, n.jsx)(J, { avatarDisplayMode: e.avatarDisplayMode, user: e.senderInfo?.user }) }),
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-1 " + (g ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.replyPreview && e.senderInfo && e.senderInfo.user && (0, n.jsx)(De, { replyPreview: e.replyPreview, isReceived: g, onEvent: l }), e.attachment ? (0, n.jsxs)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl relative", children: [(0, n.jsx)(_.P, { attachment: e.attachment, isReceived: g, onEvent: l, className: " border border-gray-200 rounded-2xl", isVisible: d }), b && !h && (0, n.jsx)("div", { className: "absolute bottom-2 right-2 rounded-full text-gray-700 shadow-md", children: (0, n.jsx)(re.Z, { className: "w-4 h-4" }) })] }) : null, e.supersizeEmoji && (0, n.jsx)("div", { className: "flex gap-2 px-1 tracking-widest", children: e.textContent?.match(/(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu)?.map((e, s) => (0, n.jsx)(D.c, { emoji: e }, `${e}-${s}`)) }), h ? (0, n.jsx)("div", { className: "flex justify-end px-4 py-2 rounded-2xl " + (e.supersizeEmoji ? "" : g ? "bg-gray-100" : "bg-blue-500"), children: e.textContent && (0, n.jsx)(Y, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: g, messageFooter: N && (0, n.jsx)(ye, { isReceived: g, timestamp: e.createdTimestamp.epochSeconds, hasTTL: b, readStatus: e?.messageInfo?.readStatus?.name, participants: y, showDetails: v, setShowDetails: w }) }) }) : null] }),
                                    (0, n.jsxs)("div", {
                                        className: `${x ? "w-16" : "w-32"} flex items-center gap-1 ${g ? "flex-row" : "flex-row-reverse"}`,
                                        style: { gridArea: "actions" },
                                        children: [
                                            (0, n.jsx)(Ae, { messageItem: e, messageFocusedDialog: s, isMessageFocused: p, onEvent: l }),
                                            (0, n.jsx)(L, { messageFocusedDialog: s, isMessageFocused: p, messageItem: e, onEvent: l, isFromAttachment: !1 }),
                                            t &&
                                                (0, n.jsx)(ve, {
                                                    onDismiss: () => {
                                                        o();
                                                    },
                                                    messageDetailsState: a,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-2 pb-1", style: { gridArea: "message-info" }, children: [e.reactions && e.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(ae, { isReceived: g, reactions: e.reactions.asJsReadonlyArrayView() }), e.supersizeEmoji && (0, n.jsx)("div", { className: "align-end", children: (0, n.jsx)(ye, { isReceived: !1, timestamp: e.createdTimestamp.epochSeconds, hasTTL: b, readStatus: e?.messageInfo?.readStatus?.name, participants: y, showDetails: v, setShowDetails: w, color: "gray700", iconColor: "text-gray-700" }) }), e.messageInfo && (0, n.jsx)(H, { messageInfo: e.messageInfo, showSignatureVerificationIssuesIcon: e.showSignatureVerificationIssuesIcon, isReceived: g })] }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            function ze({ sendingStatusItem: e }) {
                const { t: s } = (0, m.$G)();
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(c.x, { size: "subtext2", color: "red500", children: s("Failed") }), (0, n.jsx)(T.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            function Te({ chatItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: i, messageInfoDialogDismissed: o, isVisible: l }) {
                return e instanceof r.com.x.dms.model.MessageItemReceived || e instanceof r.com.x.dms.model.MessageItemSent || e instanceof r.com.x.dms.model.MessageItemPending ? (0, n.jsx)(Ue, { messageItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: i, messageInfoDialogDismissed: o, isVisible: l }) : e instanceof r.com.x.dms.model.SendingStatusItem ? (0, n.jsx)(ze, { sendingStatusItem: e }) : e instanceof r.com.x.dms.model.InformationalItem ? (0, n.jsx)(S, { informationalItem: e }) : null;
            }
            const Fe = (0, i.memo)(Te);
            var Ge = t(97759);
            const Ve = 126,
                Pe = 64,
                Le = ({ component: e, numItems: s, composerHeight: t }) => {
                    const { apiRef: a, addOnScrollListener: o } = (0, Ee.Nb)(),
                        [l, c] = (0, i.useState)(!1),
                        d = (0, i.useCallback)(() => {
                            const e = a.current;
                            if (!e) return;
                            const s = e.scrollSize + t + Pe,
                                n = 0 !== e.viewportSize && e.scrollSize !== e.viewportSize;
                            c(n && s - e.scrollOffset - e.viewportSize > Ve);
                        }, [a.current, t]);
                    (0, i.useEffect)(() => o(d), [d, o]);
                    const m = (0, i.useCallback)(() => {
                        e.onEvent(r.com.x.dms.chat.DmEvent.ScrollToBottomButtonClicked);
                        const n = a.current;
                        if (!n) return;
                        const i = n.scrollSize - n.scrollOffset - n.viewportSize <= 1e4;
                        n.scrollToIndex(s - 1, { align: "end", smooth: i, offset: t });
                    }, [e, a.current, s, t]);
                    return l ? (0, n.jsx)(E.z, { icon: (0, n.jsx)(Ge.Z, { width: 16, height: 16 }), className: "z-20 absolute right-12 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", style: { bottom: t + 24 }, color: "blue500", onClick: m }) : null;
                };
            var Je = t(676337),
                Ze = t(14808);
            const _e = r.com.x.dms.chat.DmEvent,
                Be = r.com.x.dms.model.MessageItemSent,
                qe = r.com.x.dms.model.MessageItemReceived,
                Oe = r.kotlin.collections.KtList;
            function He({ component: e, composerHeight: s }) {
                const t = (0, o._)(e.state),
                    l = (0, i.useMemo)(() => t.chatItems.items.asJsReadonlyArrayView().toReversed(), [t.chatItems]),
                    c = (0, Je.H)(),
                    d = (0, i.useRef)(new Map()),
                    m = t.showingMessageDetailsBottomSheet?.id ?? "",
                    { apiRef: u, dispatchOnScroll: x } = (0, Ee.Nb)(),
                    g = (0, i.useRef)(!1),
                    h = (0, i.useMemo)(() => e.observeMessageDetails(m), [e, m]),
                    p = (0, i.useCallback)(() => {
                        if (u.current && c) {
                            const s = u.current.findStartIndex(),
                                t = u.current.findEndIndex(),
                                n = l
                                    .slice(s, t + 1)
                                    .filter((e) => e instanceof qe || e instanceof Be)
                                    .map((e) => e.sequenceNumber);
                            d.current.clear(), n.forEach((e) => d.current.set(e, !0)), e.onEvent(new r.com.x.dms.chat.DmEvent.VisibleMessagesChanged(t === l.length - 1, Oe.fromJsArray(n)));
                        }
                    }, [e, l, u.current, c]),
                    f = (0, i.useRef)(!1),
                    j = (0, Ze.E)((e) => {
                        (f.current = !0),
                            u.current?.scrollToIndex(l.length - 1, { align: "end", offset: s }),
                            p(),
                            setTimeout(() => {
                                f.current = !1;
                            }, 200);
                    });
                (0, i.useLayoutEffect)(() => {
                    g.current || j(l);
                }, [l, j]);
                const v = (s) => {
                        e.onEvent(s);
                    },
                    w = (e) => ((e instanceof qe || e instanceof Be) && d.current.get(e.sequenceNumber)) ?? !1,
                    y = (0, i.useCallback)(() => {
                        e.onEvent(_e.MessageDetailsDismissed);
                    }, [e]);
                return (
                    (0, i.useEffect)(() => {
                        if (t.requestScrollTo && u.current) {
                            const e = { align: "center", smooth: !0 };
                            u.current?.scrollToIndex?.(l.length - t.requestScrollTo.index, e), (g.current = !1), p();
                        }
                    }, [t.requestScrollTo, l, u.current, p]),
                    (0, n.jsx)(Z.S, {
                        children: (0, n.jsx)("div", {
                            className: "relative h-full",
                            children:
                                l.length > 0 &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(a.T, {
                                            api: u,
                                            className: "!h-full scrollbar-thin-custom pl-3",
                                            items: l,
                                            onScroll: (e, t) => {
                                                const n = u.current;
                                                if (n) {
                                                    const e = n.scrollSize + s + Pe - n.scrollOffset - n.viewportSize,
                                                        t = 0 !== n.viewportSize && n.scrollSize !== n.viewportSize;
                                                    (g.current = t && e > Ve), f.current && j(l), p();
                                                }
                                                x(e, t);
                                            },
                                            onNearEnd: () => {
                                                g.current = !1;
                                            },
                                            onAtStart: () => {
                                                t.chatItems.olderItemsInfo && v(new r.com.x.dms.chat.DmEvent.ScrolledToTop(t.chatItems.olderItemsInfo));
                                            },
                                            renderItem: (e) => {
                                                return (0, n.jsx)(Fe, { chatItem: e, onEvent: v, messageFocusedDialog: ((s = e.id), t.showingMessageFocusedDialog?.message.id === s ? t.showingMessageFocusedDialog : null), showMessageInfoDialog: m === e.id, messageInfoDialog: h, messageInfoDialogDismissed: y, isVisible: w(e) }, e.uniqueKey);
                                                var s;
                                            },
                                            startMargin: Pe,
                                            header: (0, n.jsx)("div", { style: { height: Pe } }),
                                            footer: (0, n.jsx)("div", { style: { height: s } }),
                                        }),
                                        (0, n.jsx)(Le, { component: e, numItems: l.length, composerHeight: s }),
                                    ],
                                }),
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
            t.d(s, { y: () => l });
            var n = t(552322),
                a = t(789764),
                r = t(626768),
                i = t(350311),
                o = t(263033);
            const l = ({ typingIndicatorItem: e }) => {
                const { t: s } = (0, o.$G)(),
                    t = e.users.asJsReadonlyArrayView(),
                    l = t.map((e) => e.profileImageUrl || i.j);
                let c = s("typing …");
                return 1 === t.length && t[0]?.name ? (c = s("{name} is typing …", { name: t[0]?.name })) : 2 === t.length && t[0]?.name && t[1]?.name ? (c = s("{name1} & {name2} are typing …", { name1: t[0]?.name, name2: t[1]?.name })) : t.length > 2 && (c = s("Several people are typing …")), (0, n.jsxs)("div", { className: "flex justify-start items-center py-1 px-4 gap-2", children: [!!l.length && (0, n.jsx)("div", { className: "-m-0.5", children: (0, n.jsx)(a.o, { urls: l, size: "small" }) }), (0, n.jsx)(r.A, { children: c })] });
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
            t.d(s, { x: () => I });
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
                g = t(155369),
                h = t(379342),
                p = t(533476),
                f = t(658358),
                j = t(34681),
                v = t(272795),
                w = t(620134),
                y = t(263033);
            const b = r.com.x.dms.newdm,
                N = r.com.x.dms.mapToValueList,
                I = ({ onVisibilityChange: e }) => {
                    const [s, t] = (0, a.useState)(null),
                        i = (0, g.n4)(),
                        o = (0, h.s)();
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
                        (0, n.jsx)(j.Vq, { open: !0, onOpenChange: e, children: s ? (0, n.jsx)(C, { component: s }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(c.P, {}) }) })
                    );
                },
                C = ({ component: e }) => {
                    const { t: s } = (0, y.$G)(),
                        t = s("Create a group"),
                        a = s("New message"),
                        g = s("Add people"),
                        h = (0, p._)(e.state);
                    (0, f.e)(e.toasts);
                    const I = N(h.selectedGroupUsers).asJsReadonlyArrayView(),
                        C = h.suggestions.asJsReadonlyArrayView();
                    const S = (s) => () => {
                        e.onEvent(new b.NewDmEvent.DeleteSelectedGroupUser(s));
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
                                                (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(j.$N, { children: (0, n.jsx)(d.x, { size: "headline1", weight: "extrabold", children: h.isCreateGroupMode ? t : a }) }), h.isCreateGroupMode && (0, n.jsx)(d.x, { color: "gray700", children: g })] }),
                                                (0, n.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => {
                                                        e.onEvent(b.NewDmEvent.BackButtonClicked);
                                                    },
                                                    className: "p-1 text-gray-700",
                                                    children: (0, n.jsx)(i.Z, { className: "size-6" }),
                                                }),
                                            ],
                                        }),
                                        h.isCreateGroupMode &&
                                            (0, n.jsx)(m.z, {
                                                onClick: () => {
                                                    e.onEvent(b.NewDmEvent.CreateButtonClicked);
                                                },
                                                variant: "primaryFilled",
                                                children: s("Next"),
                                            }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(u._, {
                                        autoFocus: !0,
                                        placeholder: s("Search name or username"),
                                        value: h.query,
                                        onChange: (s) => {
                                            e.onEvent(new b.NewDmEvent.QueryChanged(s.target.value));
                                        },
                                        borderRadius: "xLarge",
                                        className: "bg-gray-0 focus-within:bg-transparent",
                                        inputClassName: "placeholder:text-gray-700",
                                        leftContent: (0, n.jsx)(o.Z, { className: "h-5 w-5 text-gray-700" }),
                                    }),
                                }),
                                I.length > 0 && (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: I.map((e) => (0, n.jsx)(w.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: S(e.id) }, e.id.userIdString)) }),
                                (0, n.jsxs)("div", {
                                    className: "max-h-[32rem] overflow-hidden",
                                    children: [
                                        !h.isCreateGroupMode && (0, n.jsxs)("div", { className: "flex flex-row items-center gap-3.5 ps-3 py-2.5 hover:bg-gray-50 cursor-pointer rounded-lg", onClick: () => e.onEvent(b.NewDmEvent.CreateAGroupItemClicked), children: [(0, n.jsx)(l.Z, { className: "text-blue-500 size-6" }), (0, n.jsx)(d.x, { size: "body", color: "blue500", weight: "bold", children: s("Create a group") })] }),
                                        h.isCreateConversationCallInProgress || 0 === C.length
                                            ? (0, n.jsx)("div", { className: "pt-8 h-[24rem]", children: (0, n.jsx)(c.P, {}) })
                                            : (0, n.jsx)(x.T, {
                                                  className: "max-h-[24rem] scrollbar-thin-custom",
                                                  items: C,
                                                  renderItem: function (s) {
                                                      return (0, n.jsx)(v.c, { onClick: () => e.onEvent(new b.NewDmEvent.SuggestionClicked(s)), suggestion: s, isSelected: s instanceof r.com.x.dms.NewDmSuggestion.User && h.selectedGroupUsers.asJsReadonlyMapView().has(s.user.id) }, s.id);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.9852127a.js.map
