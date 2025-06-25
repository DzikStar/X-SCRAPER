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
            t.d(s, { r: () => es });
            var n = t(552322),
                a = t(983706),
                r = t(159603),
                i = t(202784),
                o = t(533476),
                l = t(6937),
                c = t(332161),
                d = t(789764),
                m = t(455091),
                u = t(165272),
                x = t(369962);
            const h = r.com.x.dms.model.InformationalItemContents;
            function g({ avatarUrl: e, screenName: s }) {
                const t = (0, u.F)();
                return e ? (0, n.jsx)(l.q, { url: e, size: "small", screenName: s, withLink: !t || "external" }) : null;
            }
            function p({ message: e }) {
                return (0, n.jsx)(c.x, { size: "subtext2", weight: "medium", color: "gray600", className: "text-center", style: { wordBreak: "normal" }, children: e });
            }
            function f({ children: e }) {
                return (0, n.jsx)("div", { className: "flex justify-center items-center my-2", children: e });
            }
            function v({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.affectedUsers.asJsReadonlyArrayView();
                if (t.length > 1) {
                    const a = t[0],
                        r = t.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : []));
                    let i;
                    return (i = e.sender?.displayName ? (a?.displayName ? s("{addedName} and {count, plural, one {other} other {others}} were added by {addedBy}", { addedName: a.displayName, count: t.length - 1, addedBy: e.sender.displayName }) : s("Unknown and {count, plural, one {other} other {others}} were added by {addedBy}", { count: t.length - 1, addedBy: e.sender.displayName })) : a?.displayName ? s("{addedName} and {count, plural, one {other} other {others}} were added", { addedName: a.displayName, count: t.length - 1 }) : s("Unknown and {count, plural, one {other} other {others}} were added", { count: t.length - 1 })), (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: r }), (0, n.jsx)(p, { message: i })] });
                }
                const a = t[0];
                let r;
                return (r = e.sender?.displayName ? (a?.displayName ? s("{addedName} was added by {addedBy}", { addedName: a.displayName, addedBy: e.sender.displayName }) : s("Unknown was added by {addedBy}", { addedBy: e.sender.displayName })) : a?.displayName ? s("{addedName} was added", { addedName: a.displayName }) : s("Unknown was added")), (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(g, { avatarUrl: a?.profileImageUrl, screenName: e.sender?.screenName }), (0, n.jsx)(p, { message: r })] });
            }
            function j({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.affectedUsers.asJsReadonlyArrayView();
                if (t.length > 1) {
                    const e = t[0],
                        a = t.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : []));
                    let r;
                    return (r = e?.displayName ? s("{removedName} and {count, plural, one {other} other {others}} were removed", { removedName: e.displayName, count: t.length - 1 }) : s("Unknown and {count, plural, one {other} other {others}} were removed", { count: t.length - 1 })), (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: a }), (0, n.jsx)(p, { message: r })] });
                }
                const a = t[0];
                let r;
                return (r = a?.displayName ? s("{removedName} was removed", { removedName: a.displayName }) : s("Unknown was removed")), (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(g, { avatarUrl: a?.profileImageUrl }), (0, n.jsx)(p, { message: r })] });
            }
            function w({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender,
                    a = e.affectedUsers.asJsReadonlyArrayView().length;
                let r;
                return (r = e.senderIsCurrentUser ? s("You made {count, plural, one {member} other {members}} an admin", { count: a }) : t?.displayName ? s("{senderName} made {count, plural, one {member} other {members}} an admin", { senderName: t.displayName, count: a }) : s("A member made {count, plural, one {member} other {members}} an admin", { count: a })), (0, n.jsx)(p, { message: r });
            }
            function y({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender,
                    a = e.affectedUsers.asJsReadonlyArrayView().length;
                let r;
                return (r = e.senderIsCurrentUser ? s("You removed admin status from {count, plural, one {member} other {members}}", { count: a }) : t?.displayName ? s("{senderName} removed admin status from {count, plural, one {member} other {members}}", { senderName: t.displayName, count: a }) : s("A member removed admin status from {count, plural, one {member} other {members}}", { count: a })), (0, n.jsx)(p, { message: r });
            }
            function b({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? (e.newTitle ? s("You changed the group name to {title}", { title: e.newTitle }) : s("You changed the group name to Untitled")) : t?.displayName ? (e.newTitle ? s("{senderName} changed the group name to {title}", { senderName: t.displayName, title: e.newTitle }) : s("{senderName} changed the group name to Untitled", { senderName: t.displayName })) : e.newTitle ? s("A member changed the group name to {title}", { title: e.newTitle }) : s("A member changed the group name to Untitled")), (0, n.jsx)(p, { message: a });
            }
            function N({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You updated the group photo") : t?.displayName ? s("{senderName} updated the group photo", { senderName: t.displayName }) : s("A member updated the group photo")), (0, n.jsx)(p, { message: a });
            }
            function I({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.newTtl?.inWholeMilliseconds || 0,
                    a = e.sender;
                let r;
                return (r = e.senderIsCurrentUser ? (0 === t ? s("You turned vanishing mode off") : s("You set vanishing mode to {duration}", { duration: (0, x.L)(t) })) : a?.displayName ? (0 === t ? s("{senderName} turned vanishing mode off", { senderName: a.displayName }) : s("{senderName} set vanishing mode to {duration}", { senderName: a.displayName, duration: (0, x.L)(t) })) : 0 === t ? s("A member turned vanishing mode off") : s("A member set vanishing mode to {duration}", { duration: (0, x.L)(t) })), (0, n.jsx)(p, { message: r });
            }
            function C({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You enabled screenshot notifications. Participants in the conversation will be informed when someone takes a screenshot.") : t?.displayName ? s("{senderName} enabled screenshot notifications. Participants in the conversation will be informed when someone takes a screenshot.", { senderName: t.displayName }) : s("A member enabled screenshot notifications. Participants in the conversation will be informed when someone takes a screenshot.")), (0, n.jsx)(p, { message: a });
            }
            function S({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You disabled screenshot notifications") : t?.displayName ? s("{senderName} disabled screenshot notifications", { senderName: t.displayName }) : s("A member disabled screenshot notifications")), (0, n.jsx)(p, { message: a });
            }
            function D({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You enabled screenshot blocking. Chat messages will no longer appear in screenshots.") : t?.displayName ? s("{senderName} enabled screenshot blocking. Chat messages will no longer appear in screenshots.", { senderName: t.displayName }) : s("A member enabled screenshot blocking. Chat messages will no longer appear in screenshots.")), (0, n.jsx)(p, { message: a });
            }
            function k({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You disabled screenshot blocking") : t?.displayName ? s("{senderName} disabled screenshot blocking", { senderName: t.displayName }) : s("A member disabled screenshot blocking")), (0, n.jsx)(p, { message: a });
            }
            function E({ contents: e }) {
                const { t: s } = (0, m.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You took a screenshot") : t?.displayName ? s("{senderName} took a screenshot", { senderName: t.displayName }) : s("A member took a screenshot")), (0, n.jsx)(p, { message: a });
            }
            function R({ contents: e }) {
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
            function M({ informationalItem: e }) {
                const s = e.contents,
                    { t } = (0, m.$G)();
                return (0, n.jsx)(f, { children: s instanceof h.AddedGroupMembers ? (0, n.jsx)(v, { contents: s }) : s instanceof h.RemovedGroupMembers ? (0, n.jsx)(j, { contents: s }) : s instanceof h.AddedGroupAdmins ? (0, n.jsx)(w, { contents: s }) : s instanceof h.RemovedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof h.ChangedGroupTitle ? (0, n.jsx)(b, { contents: s }) : s instanceof h.ChangedGroupAvatar ? (0, n.jsx)(N, { contents: s }) : s instanceof h.DefaultTtlChanged ? (0, n.jsx)(I, { contents: s }) : s instanceof h.DateChanged ? (0, n.jsx)(R, { contents: s }) : s instanceof h.GroupInviteEnabled ? (0, n.jsx)(p, { message: t("Invite link enabled") }) : s instanceof h.GroupInviteDisabled ? (0, n.jsx)(p, { message: t("Invite link disabled") }) : s instanceof h.ScreenCaptureBlockingDisabled ? (0, n.jsx)(k, { contents: s }) : s instanceof h.ScreenCaptureBlockingEnabled ? (0, n.jsx)(D, { contents: s }) : s instanceof h.ScreenCaptureDetected ? (0, n.jsx)(E, { contents: s }) : s instanceof h.ScreenCaptureDetectionDisabled ? (0, n.jsx)(S, { contents: s }) : s instanceof h.ScreenCaptureDetectionEnabled ? (0, n.jsx)(C, { contents: s }) : null });
            }
            var T = t(470851),
                $ = t(553453),
                A = t(611105),
                U = t(147602),
                z = t(436995),
                F = t(145731),
                O = t(668631),
                G = t(421018),
                P = t(256958),
                V = t(318063),
                L = t(993165);
            const B = r.com.x.dms.model.ChatMessageAction,
                J = r.com.x.dms.chat.DmEvent,
                Z = r.com.x.models.KMPRect;
            function _({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: r }) {
                const i = t || !!s?.longPress,
                    o = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const { t } = (0, m.$G)(),
                                    a = () => s(new J.MessageActionClick(e));
                                switch (e) {
                                    case B.Report:
                                    case B.DsaReport:
                                        return null;
                                }
                                return e instanceof B.Reply
                                    ? { text: t("Reply"), icon: (0, n.jsx)($.Z, {}), onClick: a }
                                    : e instanceof B.CancelSend
                                      ? { text: t("Cancel message"), icon: void 0, onClick: a }
                                      : e instanceof B.RetrySend
                                        ? { text: t("Try sending again"), icon: (0, n.jsx)(A.Z, {}), onClick: a }
                                        : e instanceof B.CopyText
                                          ? {
                                                text: t("Copy message text"),
                                                icon: (0, n.jsx)(U.Z, {}),
                                                onClick: () => {
                                                    a(), navigator.clipboard.writeText(e.text), (0, P.Am)(t("Copied to clipboard"), { icon: "📄", duration: 2e3 });
                                                },
                                            }
                                          : e instanceof B.Edit
                                            ? { text: t("Edit message"), icon: (0, n.jsx)(z.Z, {}), onClick: a }
                                            : e instanceof B.DeleteForAll
                                              ? { text: t("Delete for All"), icon: (0, n.jsx)(F.Z, {}), destructive: !0, onClick: a }
                                              : e instanceof B.DeleteForSelf || e instanceof B.DeletePending
                                                ? { text: t("Delete for me"), icon: (0, n.jsx)(F.Z, {}), destructive: !0, onClick: a }
                                                : e instanceof B.MessageDetails
                                                  ? { text: t("Info"), icon: (0, n.jsx)(O.Z, {}), onClick: a }
                                                  : null;
                            })(e, r),
                        )
                        .filter((e) => !!e);
                return (0, n.jsx)("div", {
                    className: `flex self-center items-center gap-2 bg-background border rounded-full p-0 shadow-sm ${!i && "invisible"}`,
                    onClick: (e) => e.stopPropagation(),
                    children: (0, n.jsx)(V.P, {
                        items: o ?? [],
                        trigger: (0, n.jsx)(L.z, { variant: "primaryText", size: "small", icon: (0, n.jsx)(G.Z, {}), color: "gray600" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new J.MessageLongPressed(e, new Z(0, 0, 0, 0), a) : J.MessageFocusedDialogDismissed;
                            r(t);
                        },
                    }),
                });
            }
            function q({ user: e, avatarDisplayMode: s }) {
                if (!e || !e.profileImageUrl || "None" === s.name) return null;
                if ("AsPadding" === s.name) return (0, n.jsx)("div", { className: "px-4", children: " " });
                const t = (0, u.F)();
                return (0, n.jsx)("div", { children: (0, n.jsx)(l.q, { url: e.profileImageUrl, size: "large", screenName: e.screenName, withLink: !t || "external" }) });
            }
            var Y = t(607499),
                H = t(205116),
                K = t(38891),
                X = t(189164),
                W = t(42630);
            function Q({ messageInfo: e, isReceived: s, showSignatureVerificationIssuesIcon: t }) {
                const { t: a } = (0, m.$G)(),
                    r = [],
                    i = (0, K.z)().isTrue("xchat_read_receipt_facepile") && r.length > 1;
                return e.showEdited || t ? (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.showEdited && (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: a("Edited") }), e.showEdited && (t || i) && (0, n.jsx)(W.A, {}), t && (0, n.jsx)(X.Z, {}), t && i && (0, n.jsx)(W.A, {}), i && (0, n.jsx)(d.o, { urls: r, size: "small", spacing: 6, stackOrder: "ascending" })] }) : null;
            }
            var ee = t(123010);
            const se = ({ isReceived: e, textContent: s, textEntities: t, messageFooter: a }) => {
                const i = (function (e, s) {
                    const t = {};
                    return (
                        e.forEach((e) => {
                            const n = (function (e, s) {
                                const t = s.slice(0, e[0]),
                                    n = new Intl.Segmenter("en", { granularity: "grapheme" }),
                                    a = Array.from(n.segment(t)),
                                    r = a.length;
                                let i = 0;
                                const o = a.map((e) => e.segment).join("");
                                i = o.length === r ? e[0] - r : e[0] - [...o].length;
                                if (0 !== i) return [e[0] - i, e[1] - i];
                                return e;
                            })([e.startIdx, e.endIdx], s);
                            e instanceof r.com.x.models.text.MentionEntity && (t.mentions || (t.mentions = []), t.mentions.push({ screenName: e.screenName, indices: n })), e instanceof r.com.x.models.text.UrlEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.displayUrl, url: te(e.url), indices: n })), e instanceof r.com.x.models.text.EmailEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.email, url: ne(e.email), indices: n })), e instanceof r.com.x.models.text.HashtagEntity && (t.hashtags || (t.hashtags = []), t.hashtags.push({ text: e.text, indices: n })), e instanceof r.com.x.models.text.CashtagEntity && (t.symbols || (t.symbols = []), t.symbols.push({ text: e.text, indices: n })), e instanceof r.com.x.models.text.PhoneNumberEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.phoneNumberForTelLink, url: `tel:${e.phoneNumberForTelLink}`, indices: n }));
                        }),
                        t
                    );
                })(t, s);
                return (0, n.jsxs)("div", { className: "inline-flex flex-wrap items-end gap-2", children: [(0, n.jsx)(ee.W, { color: e ? "text" : "white", entities: i, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 }), a] });
            };
            function te(e) {
                return /^https?:\/\//i.test(e) ? e : `https://${e}`;
            }
            function ne(e) {
                return /^mailto:/i.test(e) ? e : `mailto:${e}`;
            }
            var ae = t(437712),
                re = t(124782);
            const ie = r.com.x.dms.chat.DmEvent,
                oe = ({ remainingReactions: e }) => {
                    const s = (0, i.useRef)(null),
                        t = (0, re.X)(s);
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(ae.J, { open: t, side: "top", trigger: (0, n.jsx)("div", { ref: s, className: "inline-flex items-center bg-gray-50 rounded-full px-2 pt-0.5 shadow-sm gap-1 border border-background cursor-pointer", children: (0, n.jsx)(c.x, { size: "body", children: "…" }) }), children: (0, n.jsx)("div", { className: "grid gap-2 p-2 pr-0 border border-border rounded-lg bg-background shadow-lg mx-auto [grid-template-columns:repeat(auto-fit,minmax(3rem,1fr))] max-w-[calc(6*3rem+5*0.5rem)]", children: e.map((e) => (0, n.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [(0, n.jsx)(T.c, { emoji: e.reaction }), (0, n.jsx)(c.x, { size: "subtext2", weight: "bold", children: e.users.asJsReadonlyArrayView().length })] }, e.reaction)) }) }) });
                },
                le = ({ emoji: e, count: s, users: t, isSelected: a, onClick: r }) => {
                    const o = (0, i.useRef)(null),
                        l = (0, re.X)(o),
                        d = t.map((e) => e.name),
                        m = d.length > 1 ? `${d.slice(0, -1).join(", ")} and ${d[d.length - 1]}` : d[0];
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(ae.J, { open: l, side: "top", trigger: (0, n.jsxs)("div", { ref: o, className: `inline-flex items-center ${a ? "bg-blue-500" : "bg-gray-50"} rounded-full px-2 py-1 shadow-sm gap-1 border border-background cursor-pointer`, onClick: r, children: [(0, n.jsx)("div", { className: "scale-[0.9] inline-flex items-center", children: (0, n.jsx)(T.c, { emoji: e }) }), s > 1 && (0, n.jsx)(c.x, { size: "subtext2", weight: "bold", color: a ? "white" : "gray700", children: s })] }), children: (0, n.jsxs)("div", { className: "flex flex-row items-center gap-2 p-2 border border-border rounded-lg bg-background shadow-lg", children: [(0, n.jsxs)(c.x, { size: "subtext2", weight: "medium", children: [m, " reacted with"] }), (0, n.jsx)(T.c, { emoji: e })] }) }) });
                },
                ce = ({ reaction: e, onEvent: s, messageItem: t }) =>
                    (0, n.jsx)(le, {
                        emoji: e.reaction,
                        count: e.users.asJsReadonlyArrayView().length,
                        users: e.users.asJsReadonlyArrayView(),
                        isSelected: e.isSelected,
                        onClick: () => {
                            const n = new r.com.x.dms.model.ReactionPickerItem(e.reaction, e.isSelected);
                            s(new ie.ReactionPickerItemClick(n, t));
                        },
                    }),
                de = ({ isReceived: e, reactions: s, messageItem: t, onEvent: a }) => {
                    const r = s.slice(4);
                    return (0, n.jsxs)("div", { className: `relative flex ${e ? "flex-row-reverse" : "flex-row"} gap-1 justify-end -mt-[10px] mx-3`, children: [s.slice(0, 4).map((e) => (0, n.jsx)(ce, { reaction: e, onEvent: a, messageItem: t }, e.reaction)), r.length > 0 && (0, n.jsx)(oe, { remainingReactions: r })] });
                };
            var me = t(515790),
                ue = t(3577),
                xe = t(589259),
                he = t(480158),
                ge = t(630086),
                pe = t(996016),
                fe = t(350311),
                ve = t(167285),
                je = t(336984),
                we = t(814926),
                ye = t(702823);
            function be({ participants: e, isOneToOne: s }) {
                const { t } = (0, m.$G)(),
                    [a, r] = (0, i.useState)(e.slice(0, 2));
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex flex-row gap-2 justify-between items-center",
                            children: [
                                (0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: t("Seen by") }),
                                a.length < e.length &&
                                    (0, n.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            r(e);
                                        },
                                        children: (0, n.jsx)(c.x, { color: "primary", children: t("See all ({number})", { number: e.length }) }),
                                    }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: a.length === e.length ? "max-h-[300px] overflow-y-auto" : "",
                            children: (0, n.jsx)(ge.I, {
                                className: "mt-2",
                                children: (0, n.jsx)(pe.b, {
                                    participants: a,
                                    menuItemsMap: new Map(),
                                    handleParticipantClicked: (e, s) => {
                                        window.open(`https://x.com/${s}`, "_blank");
                                    },
                                    handleParticipantMenuButtonClicked: () => {},
                                    isOneToOne: s,
                                }),
                            }),
                        }),
                    ],
                });
            }
            const Ne = ({ timestamp: e, ttl: s }) => {
                    const { t } = (0, m.$G)();
                    return (0, n.jsxs)(ge.I, { className: "mt-2", children: [e && (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3 bg-gray-0 px-4", children: [(0, n.jsx)(we.Z, { className: "w-4 h-4 fill-blue-500" }), (0, n.jsxs)("div", { className: "flex flex-row justify-between w-full", children: [(0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: t("Sent") }), (0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: (0, ve.H)(e) })] })] }), s && (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3 bg-gray-0 px-4", children: [(0, n.jsx)(ye.Z, { className: "w-4 h-4 fill-gray-500" }), (0, n.jsxs)("div", { className: "flex flex-row justify-between w-full", children: [(0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: t("Disappears in") }), (0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: (0, x.L)(s.inWholeMilliseconds) })] })] })] });
                },
                Ie = ({ participant: e }) => (e && e.user ? (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, n.jsx)(fe.s, { url: e.user.profileImageUrl, size: "medium" }), (0, n.jsx)(xe.R, { name: e.user.displayName, badges: (0, je.r)(e.user), weight: "normal" })] }) : null);
            function Ce({ messageDetailsState: e, onDismiss: s, isOneToOne: t }) {
                const { t: a } = (0, m.$G)(),
                    r = (0, o._)(e),
                    [l, d] = (0, i.useState)(!1),
                    u = r?.details?.readBy?.asJsReadonlyArrayView() || [],
                    x = r?.details?.item.messageInfo?.showTimestampValue?.epochSeconds,
                    h = r?.details?.item.messageInfo?.timeToLive?.timeToLive,
                    g = (0, i.useRef)(l);
                return (
                    (0, i.useEffect)(() => {
                        d(!!r);
                    }, [r]),
                    (0, n.jsx)(he.h, {
                        open: l,
                        onOpenChange: (e) => {
                            d(e), g.current && !e && s(), (g.current = !0);
                        },
                        trigger: (0, n.jsx)("div", {}),
                        borderRadius: "large",
                        children: (0, n.jsx)("div", { className: "p-4 max-w-[750px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: r?.details && (0, n.jsxs)("div", { className: "flex flex-col gap-2 mt-2", children: [u.length > 0 && (0, n.jsx)(be, { participants: u, isOneToOne: t }), (0, n.jsx)("div", { className: "flex flex-row gap-2", children: (0, n.jsx)(c.x, { size: "subtext1", weight: "medium", children: a("Sent by") }) }), (0, n.jsx)("div", { className: "px-4 rounded-xl bg-gray-0", children: (0, n.jsx)(Ie, { participant: r.details.sentBy }) }), (0, n.jsx)(Ne, { timestamp: x, ttl: h })] }) }),
                    })
                );
            }
            var Se = t(242782);
            const De = ({ isReceived: e, timestamp: s, hasTTL: t, participants: a, showDetails: r, readStatus: i, setShowDetails: o, isOneToOne: l, iconColor: d, color: m }) => (0, n.jsxs)("div", { className: "flex items-center ml-auto shrink-0 gap-1", children: [(0, n.jsx)(c.x, { size: "subtext3", color: m || (e ? "gray700" : "white"), children: (0, ve.H)(s) }), t && (0, n.jsx)(me.Z, { className: `w-3.5 h-3.5 ${m || (e ? "text-text/60" : "text-white/60")}` }), !e && (a.length > 0 ? (0, n.jsx)(he.h, { open: r, onOpenChange: o, trigger: (0, n.jsx)("div", { className: "z-20 -ms-[2px] cursor-pointer", children: (0, n.jsx)(Se.Z, { className: `w-4 h-4 ${d || "text-white"}` }) }), children: (0, n.jsx)("div", { className: "p-4 max-w-[500px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: (0, n.jsx)(be, { participants: a, isOneToOne: l }) }) }) : "Read" === i ? (0, n.jsx)(Se.Z, { className: `w-4 h-4 ${d || "text-white"}` }) : null)] });
            var ke = t(784344),
                Ee = t(617092),
                Re = t(289752),
                Me = t(791266);
            const Te = r.com.x.dms.chat.DmEvent,
                $e = ({ isReceived: e, replyPreview: s, onEvent: t }) => (0, n.jsxs)("div", { className: `flex flex-col mt-0.5 gap-1 ${e ? "items-start" : "items-end"} cursor-pointer`, onClick: () => s.sequenceNumber && t(new Te.ReplyBubbleClicked(s.sequenceNumber)), children: [s.showReplyNames && (0, n.jsxs)("div", { className: `flex gap-1 px-2 ${e ? "text-start" : "text-end"} items-center`, children: [(0, n.jsx)(ke.Z, { className: "inline-block text-text/70" }), (0, n.jsx)(c.x, { as: "span", size: "subtext3", children: s.senderDisplayName })] }), s.attachment && (s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.Media && s.attachment.type === r.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(Ee.K, { filename: s.attachment.filename, fileSize: s.attachment.fileSize }) : s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.Media.FromServer && s.attachment.uriState instanceof r.com.x.dms.model.MediaUriState.ResolvedMedia && (0, n.jsx)(Re.Et, { src: s.attachment.uriState.uri, uri: s.attachment.type, dimensions: s.attachment.dimensions, className: "rounded-2xl !w-[25%] !h-[25%] border border-gray-200", showAsStatic: !0 })), s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.UrlCard && (0, n.jsx)(Me.C, { urlCard: s.attachment }), s.previewText && (0, n.jsx)("div", { className: "flex flex-col px-3 py-1.5 rounded-2xl gap-3 border " + (s.senderIsCurrentUser ? "border-primary/50" : "border-gray-400"), children: (0, n.jsx)(c.x, { color: s.senderIsCurrentUser ? "primary" : "gray900", size: "subtext1", numberOfLines: 2, children: s.previewText }) })] });
            var Ae = t(407602),
                Ue = t(840489),
                ze = t(463341);
            const Fe = r.com.x.dms.chat.DmEvent,
                Oe = r.com.x.models.KMPRect,
                Ge = ({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, onEvent: a }) => {
                    const [o, l] = (0, i.useState)(!1),
                        [c, d] = (0, i.useState)(!1),
                        { t: u } = (0, m.$G)();
                    if (!t && !s?.quickReactions) return null;
                    const x = s?.quickReactions?.asJsReadonlyArrayView().map((e) => e.asJsReadonlyArrayView());
                    return (0, n.jsx)(ae.J, {
                        borderRadius: "2xLarge",
                        trigger: (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, n.jsx)(L.z, {
                                variant: "primaryText",
                                size: "small",
                                color: "red600",
                                icon: (0, n.jsx)(Ae.Z, {}),
                                onClick: () => {
                                    null === s ? (l(!0), a(new Fe.MessageDoubleClicked(e, new Oe(0, 0, 0, 0), !1))) : (l(!1), a(Fe.MessageFocusedDialogDismissed));
                                },
                            }),
                        }),
                        open: null !== s && o,
                        onOpenChange: (e) => {
                            !e && o && (a(Fe.MessageFocusedDialogDismissed), l(!1), d(!1));
                        },
                        children: (0, n.jsx)("div", {
                            className: "relative flex flex-col",
                            children: c
                                ? (0, n.jsx)(ze.Bu, {
                                      children: (0, n.jsx)(T.h, {
                                          onReactionClicked: (s) => {
                                              const t = new r.com.x.dms.model.ReactionPickerItem(s, !1);
                                              a(new Fe.ReactionPickerItemClick(t, e)), a(Fe.MessageFocusedDialogDismissed), l(!1), d(!1);
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
                                                                      emoji: "button",
                                                                      className: (0, Ue.Z)("w-8 h-8 flex items-center justify-center hover:bg-gray-100", { "bg-gray-50": r.isSelected }, { "rounded-r": r.isSelected && i < s.length - 1 && !s[i + 1]?.isSelected }, { "!rounded-t-none": r.isSelected && t === x.length - 1 }),
                                                                      onClick: () => {
                                                                          a(new Fe.ReactionPickerItemClick(r, e));
                                                                      },
                                                                      children: (0, n.jsx)(T.c, { emoji: r.emoji }),
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
                                                      a(Fe.MessageReactionsClicked), d(!0);
                                                  },
                                                  children: (0, n.jsx)(G.Z, {}),
                                              }),
                                          }),
                                      ],
                                  }),
                        }),
                    });
                };
            function Pe({ messageItem: e, messageFocusedDialog: s, showMessageInfoDialog: t, messageInfoDialog: a, messageInfoDialogDismissed: o, onEvent: l, isVisible: d, isOneToOne: u }) {
                const { t: x } = (0, m.$G)(),
                    h = (0, ue.a)("(max-width: 768px)"),
                    g = e instanceof r.com.x.dms.model.MessageItemReceived,
                    p = null !== e.textContent && !e.supersizeEmoji,
                    [f, v] = (0, i.useState)(!1),
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
                    [w, y] = (0, i.useState)(!1),
                    b = !!e.messageInfo?.timeToLive,
                    N = b || e?.messageInfo?.showTimestampValue || e?.messageInfo?.showTimestamp;
                return (0, n.jsxs)(Y.S, {
                    message: x("Couldn't load message"),
                    children: [
                        e.senderDisplayName && (0, n.jsx)("div", { className: "px-16", children: (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: e.senderInfo?.user?.displayName }) }),
                        (0, n.jsx)("div", {
                            className: `flex ${g ? "justify-start" : "justify-end"} ${j} px-4`,
                            onMouseEnter: () => v(!0),
                            onMouseLeave: () => v(!1),
                            onClick: () => v(!0),
                            children: (0, n.jsxs)("div", {
                                className: `grid gap-x-2 gap-y-0.5 ${h ? "max-w-full" : "max-w-[calc(55%+128px)]"} grid-cols-[auto_auto_auto_auto] items-center`,
                                style: { gridTemplateAreas: g ? '\n                  "avatar content actions"\n                  ". message-info ."\n                ' : '\n                  "actions content avatar"\n                  ". message-info ."\n                ' },
                                children: [
                                    (0, n.jsx)("div", { className: "self-end", style: { gridArea: "avatar" }, children: e.senderInfo?.user && (0, n.jsx)(q, { avatarDisplayMode: e.avatarDisplayMode, user: e.senderInfo?.user }) }),
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-1 " + (g ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.replyPreview && e.senderInfo && e.senderInfo.user && (0, n.jsx)($e, { replyPreview: e.replyPreview, isReceived: g, onEvent: l }), e.attachment ? (0, n.jsxs)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl relative", children: [(0, n.jsx)(H.P, { attachment: e.attachment, isReceived: g, onEvent: l, className: " border border-gray-200 rounded-2xl", isVisible: d }), b && !p && (0, n.jsx)("div", { className: "absolute bottom-2 right-2 rounded-full text-gray-700 shadow-md", children: (0, n.jsx)(me.Z, { className: "w-4 h-4" }) })] }) : null, e.supersizeEmoji && (0, n.jsx)("div", { className: "flex gap-2 px-1 tracking-widest", children: e.textContent?.match(/(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu)?.map((e, s) => (0, n.jsx)(T.c, { emoji: e }, `${e}-${s}`)) }), p ? (0, n.jsx)("div", { className: "flex justify-end px-4 py-2 rounded-2xl " + (e.supersizeEmoji ? "" : g ? "bg-gray-50" : "bg-blue-500"), children: e.textContent && (0, n.jsx)(se, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: g, messageFooter: N && (0, n.jsx)(De, { isReceived: g, timestamp: e.createdTimestamp.epochSeconds, hasTTL: b, readStatus: e?.messageInfo?.readStatus?.name, participants: [], showDetails: w, setShowDetails: y, isOneToOne: u }) }) }) : null] }),
                                    (0, n.jsxs)("div", {
                                        className: `${h ? "w-16" : "w-32"} flex items-center gap-1 ${g ? "flex-row" : "flex-row-reverse"}`,
                                        style: { gridArea: "actions" },
                                        children: [
                                            (0, n.jsx)(Ge, { messageItem: e, messageFocusedDialog: s, isMessageFocused: f, onEvent: l }),
                                            (0, n.jsx)(_, { messageFocusedDialog: s, isMessageFocused: f, messageItem: e, onEvent: l, isFromAttachment: !1 }),
                                            t &&
                                                (0, n.jsx)(Ce, {
                                                    onDismiss: () => {
                                                        o();
                                                    },
                                                    messageDetailsState: a,
                                                    isOneToOne: u,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-2 pb-1", style: { gridArea: "message-info" }, children: [e.reactions && e.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(de, { isReceived: g, reactions: e.reactions.asJsReadonlyArrayView(), messageItem: e, onEvent: l }), e.supersizeEmoji && (0, n.jsx)("div", { className: "align-end", children: (0, n.jsx)(De, { isReceived: !1, timestamp: e.createdTimestamp.epochSeconds, hasTTL: b, readStatus: e?.messageInfo?.readStatus?.name, participants: [], showDetails: w, setShowDetails: y, color: "gray700", iconColor: "text-gray-700", isOneToOne: u }) }), e.messageInfo && (0, n.jsx)(Q, { messageInfo: e.messageInfo, showSignatureVerificationIssuesIcon: e.showSignatureVerificationIssuesIcon, isReceived: g })] }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            function Ve({ sendingStatusItem: e }) {
                const { t: s } = (0, m.$G)();
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(c.x, { size: "subtext2", color: "red500", children: s("Failed") }), (0, n.jsx)(O.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            function Le({ chatItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: i, messageInfoDialogDismissed: o, isVisible: l, isOneToOne: c }) {
                return e instanceof r.com.x.dms.model.MessageItemReceived || e instanceof r.com.x.dms.model.MessageItemSent || e instanceof r.com.x.dms.model.MessageItemPending ? (0, n.jsx)(Pe, { messageItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: i, messageInfoDialogDismissed: o, isVisible: l, isOneToOne: c }) : e instanceof r.com.x.dms.model.SendingStatusItem ? (0, n.jsx)(Ve, { sendingStatusItem: e }) : e instanceof r.com.x.dms.model.InformationalItem ? (0, n.jsx)(M, { informationalItem: e }) : null;
            }
            const Be = (0, i.memo)(Le);
            var Je = t(97759);
            const Ze = 126,
                _e = 64,
                qe = ({ component: e, numItems: s, composerHeight: t }) => {
                    const { apiRef: a, addOnScrollListener: o } = (0, ze.Nb)(),
                        [l, c] = (0, i.useState)(!1),
                        d = (0, i.useCallback)(() => {
                            const e = a.current;
                            if (!e) return;
                            const s = e.scrollSize + t + _e,
                                n = 0 !== e.viewportSize && e.scrollSize !== e.viewportSize;
                            c(n && s - e.scrollOffset - e.viewportSize > Ze);
                        }, [a.current, t]);
                    (0, i.useEffect)(() => o(d), [d, o]);
                    const m = (0, i.useCallback)(() => {
                        e.onEvent(r.com.x.dms.chat.DmEvent.ScrollToBottomButtonClicked);
                        const n = a.current;
                        if (!n) return;
                        const i = n.scrollSize - n.scrollOffset - n.viewportSize <= 1e4;
                        n.scrollToIndex(s - 1, { align: "end", smooth: i, offset: t });
                    }, [e, a.current, s, t]);
                    return l ? (0, n.jsx)(L.z, { icon: (0, n.jsx)(Je.Z, { width: 16, height: 16 }), className: "z-20 absolute right-12 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", style: { bottom: t + 24 }, color: "blue500", onClick: m }) : null;
                };
            var Ye = t(676337),
                He = t(14808);
            const Ke = r.com.x.dms.chat.DmEvent,
                Xe = r.com.x.dms.model.MessageItemSent,
                We = r.com.x.dms.model.MessageItemReceived,
                Qe = r.kotlin.collections.KtList;
            function es({ component: e, composerHeight: s }) {
                const t = (0, o._)(e.state),
                    l = (0, i.useMemo)(() => t.chatItems.items.asJsReadonlyArrayView().toReversed(), [t.chatItems]),
                    c = (0, Ye.H)(),
                    d = (0, i.useRef)(new Map()),
                    m = t.showingMessageDetailsBottomSheet?.id ?? "",
                    { apiRef: u, dispatchOnScroll: x } = (0, ze.Nb)(),
                    h = (0, i.useRef)(!1),
                    g = (0, i.useMemo)(() => e.observeMessageDetails(m), [e, m]),
                    p = (0, i.useCallback)(() => {
                        if (u.current && c) {
                            const s = u.current.findStartIndex(),
                                t = u.current.findEndIndex(),
                                n = l
                                    .slice(s, t + 1)
                                    .filter((e) => e instanceof We || e instanceof Xe)
                                    .map((e) => e.sequenceNumber);
                            d.current.clear(), n.forEach((e) => d.current.set(e, !0)), e.onEvent(new r.com.x.dms.chat.DmEvent.VisibleMessagesChanged(t === l.length - 1, Qe.fromJsArray(n)));
                        }
                    }, [e, l, u.current, c]),
                    f = (0, i.useRef)(!1),
                    v = (0, He.E)((e) => {
                        (f.current = !0),
                            u.current?.scrollToIndex(l.length - 1, { align: "end", offset: s }),
                            p(),
                            setTimeout(() => {
                                f.current = !1;
                            }, 200);
                    });
                (0, i.useLayoutEffect)(() => {
                    h.current || v(l);
                }, [l, v]);
                const j = (s) => {
                        e.onEvent(s);
                    },
                    w = (e) => ((e instanceof We || e instanceof Xe) && d.current.get(e.sequenceNumber)) ?? !1,
                    y = (0, i.useCallback)(() => {
                        e.onEvent(Ke.MessageDetailsDismissed);
                    }, [e]);
                return (
                    (0, i.useEffect)(() => {
                        if (t.requestScrollTo && u.current) {
                            const e = { align: "center", smooth: !0 };
                            u.current?.scrollToIndex?.(l.length - t.requestScrollTo.index, e), (h.current = !1), p();
                        }
                    }, [t.requestScrollTo, l, u.current, p]),
                    (0, n.jsx)(Y.S, {
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
                                                    const e = n.scrollSize + s + _e - n.scrollOffset - n.viewportSize,
                                                        t = 0 !== n.viewportSize && n.scrollSize !== n.viewportSize;
                                                    (h.current = t && e > Ze), f.current && v(l), p();
                                                }
                                                x(e, t);
                                            },
                                            onNearEnd: () => {
                                                h.current = !1;
                                            },
                                            onAtStart: () => {
                                                t.chatItems.olderItemsInfo && j(new r.com.x.dms.chat.DmEvent.ScrolledToTop(t.chatItems.olderItemsInfo));
                                            },
                                            renderItem: (e) => {
                                                return (0, n.jsx)(Be, { chatItem: e, onEvent: j, messageFocusedDialog: ((s = e.id), t.showingMessageFocusedDialog?.message.id === s ? t.showingMessageFocusedDialog : null), showMessageInfoDialog: m === e.id, messageInfoDialog: g, messageInfoDialogDismissed: y, isVisible: w(e), isOneToOne: t.convId instanceof r.com.x.models.dm.XConversationId.OneOnOne }, e.uniqueKey);
                                                var s;
                                            },
                                            startMargin: _e,
                                            header: (0, n.jsx)("div", { style: { height: _e } }),
                                            footer: (0, n.jsx)("div", { style: { height: s } }),
                                        }),
                                        (0, n.jsx)(qe, { component: e, numItems: l.length, composerHeight: s }),
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
            t.d(s, { y: () => c });
            var n = t(552322),
                a = t(789764),
                r = t(626768),
                i = t(350311),
                o = t(455091),
                l = t(31674);
            const c = ({ typingIndicatorItem: e, showAvatar: s = !0, className: t }) => {
                const { t: c } = (0, o.$G)(),
                    d = e.users.asJsReadonlyArrayView(),
                    m = d.map((e) => e.profileImageUrl || i.j);
                let u = c("typing …");
                return 1 === d.length && d[0]?.name ? (u = c("{name} is typing …", { name: d[0]?.name })) : 2 === d.length && d[0]?.name && d[1]?.name ? (u = c("{name1} & {name2} are typing …", { name1: d[0]?.name, name2: d[1]?.name })) : d.length > 2 && (u = c("Several people are typing …")), (0, n.jsxs)("div", { className: (0, l.cn)("flex justify-start items-center py-1 px-4 gap-2", t), children: [!!m.length && s && (0, n.jsx)("div", { className: "-m-0.5", children: (0, n.jsx)(a.o, { urls: m, size: "small" }) }), (0, n.jsx)(r.A, { children: u })] });
            };
        },
        379342: (e, s, t) => {
            t.d(s, { s: () => l });
            var n = t(905394),
                a = t(202784),
                r = t(264531);
            const i = (e) => e.replaceAll(":", "-");
            class o {
                navigate;
                path;
                constructor(e, s) {
                    (this.navigate = e), (this.path = s);
                }
                toInbox() {
                    this.navigate.push(`${this.path}/`);
                }
                toConversation(e) {
                    this.navigate.push(`${this.path}/${i(e)}`);
                }
                toConversationInfo(e) {
                    this.navigate.push(`${this.path}/${i(e)}/info`);
                }
                toParticipants(e) {
                    this.navigate.push(`${this.path}/${i(e)}/participants`);
                }
                toVanishingMode(e) {
                    this.navigate.push(`${this.path}/${i(e)}/vanishing-mode`);
                }
                toNewDM() {
                    this.navigate.push(`${this.path}/new`);
                }
                toPinScreen(e, s) {
                    const t = new URLSearchParams();
                    t.append("register", s?.shouldRegister ? "true" : "false"), t.append("generate", s?.shouldGenerate ? "true" : "false"), this.navigate.push(`${this.path}/pin/${e}?${t.toString()}`);
                }
                toGroupInvite(e) {
                    this.navigate.push(`${this.path}/${i(e)}/group-invite`);
                }
                toEditGroup(e) {
                    this.navigate.push(`${this.path}/${i(e)}/info/edit-group`);
                }
                toClassicInbox() {
                    window.location.href = "https://x.com/messages";
                }
            }
            function l() {
                const e = (0, n.d)(),
                    s = (0, r.BH)();
                return (0, a.useMemo)(() => new o(e, s), [e, s]);
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
                h = t(155369),
                g = t(379342),
                p = t(533476),
                f = t(658358),
                v = t(34681),
                j = t(272795),
                w = t(620134),
                y = t(455091);
            const b = r.com.x.dms.newdm,
                N = r.com.x.dms.mapToValueList,
                I = ({ onVisibilityChange: e }) => {
                    const [s, t] = (0, a.useState)(null),
                        i = (0, h.n4)(),
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
                        (0, n.jsx)(v.Vq, { open: !0, onOpenChange: e, children: s ? (0, n.jsx)(C, { component: s }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(c.P, {}) }) })
                    );
                },
                C = ({ component: e }) => {
                    const { t: s } = (0, y.$G)(),
                        t = s("Create a group"),
                        a = s("New message"),
                        h = s("Add people"),
                        g = (0, p._)(e.state);
                    (0, f.e)(e.toasts);
                    const I = N(g.selectedGroupUsers).asJsReadonlyArrayView(),
                        C = g.suggestions.asJsReadonlyArrayView();
                    const S = (s) => () => {
                        e.onEvent(new b.NewDmEvent.DeleteSelectedGroupUser(s));
                    };
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(v.cZ, {
                            withCloseButton: !1,
                            children: [
                                (0, n.jsxs)(v.fK, {
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "flex flex-row justify-between items-center gap-2",
                                            children: [
                                                (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(v.$N, { children: (0, n.jsx)(d.x, { size: "headline1", weight: "extrabold", children: g.isCreateGroupMode ? t : a }) }), g.isCreateGroupMode && (0, n.jsx)(d.x, { color: "gray700", children: h })] }),
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
                                        g.isCreateGroupMode &&
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
                                        value: g.query,
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
                                        !g.isCreateGroupMode && (0, n.jsxs)("div", { className: "flex flex-row items-center gap-3.5 ps-3 py-2.5 hover:bg-gray-50 cursor-pointer rounded-lg", onClick: () => e.onEvent(b.NewDmEvent.CreateAGroupItemClicked), children: [(0, n.jsx)(l.Z, { className: "text-blue-500 size-6" }), (0, n.jsx)(d.x, { size: "body", color: "blue500", weight: "bold", children: s("Create a group") })] }),
                                        g.isCreateConversationCallInProgress || 0 === C.length
                                            ? (0, n.jsx)("div", { className: "pt-8 h-[24rem]", children: (0, n.jsx)(c.P, {}) })
                                            : (0, n.jsx)(x.T, {
                                                  className: "max-h-[24rem] scrollbar-thin-custom",
                                                  items: C,
                                                  renderItem: function (s) {
                                                      return (0, n.jsx)(j.c, { onClick: () => e.onEvent(new b.NewDmEvent.SuggestionClicked(s)), suggestion: s, isSelected: s instanceof r.com.x.dms.NewDmSuggestion.User && g.selectedGroupUsers.asJsReadonlyMapView().has(s.user.id) }, s.id);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.a1cf922a.js.map
