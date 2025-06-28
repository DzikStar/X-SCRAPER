"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-eca6a814"],
    {
        718278: (e, s, t) => {
            t.d(s, { o: () => o });
            var n = t(552322),
                a = t(159603),
                i = t(993165);
            const r = a.com.x.logger.XLog,
                o = () =>
                    (0, n.jsx)(i.z, {
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
                        variant: "brandOutlined",
                        children: "Download Logs",
                    });
        },
        864464: (e, s, t) => {
            t.d(s, { r: () => ts });
            var n = t(552322),
                a = t(344851),
                i = t(983706),
                r = t(159603),
                o = t(202784),
                l = t(533476),
                c = t(6937),
                d = t(332161),
                m = t(789764),
                u = t(455091),
                x = t(165272),
                h = t(369962);
            const g = r.com.x.dms.model.InformationalItemContents;
            function p({ avatarUrl: e, screenName: s }) {
                const t = (0, x.F)();
                return e ? (0, n.jsx)(c.q, { url: e, size: "small", screenName: s, withLink: !t || "external" }) : null;
            }
            function f({ message: e }) {
                return (0, n.jsx)(d.x, { size: "subtext2", weight: "medium", color: "gray600", children: e });
            }
            function v({ children: e }) {
                return (0, n.jsx)("div", { className: "flex justify-center items-center my-2", children: e });
            }
            function j({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.affectedUsers.asJsReadonlyArrayView();
                if (t.length > 1) {
                    const a = t[0],
                        i = t.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : []));
                    let r;
                    return (r = e.sender?.displayName ? (a?.displayName ? s("{addedName} and {count, plural, one {other} other {others}} were added by {addedBy}", { addedName: a.displayName, count: t.length - 1, addedBy: e.sender.displayName }) : s("Unknown and {count, plural, one {other} other {others}} were added by {addedBy}", { count: t.length - 1, addedBy: e.sender.displayName })) : a?.displayName ? s("{addedName} and {count, plural, one {other} other {others}} were added", { addedName: a.displayName, count: t.length - 1 }) : s("Unknown and {count, plural, one {other} other {others}} were added", { count: t.length - 1 })), (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(m.o, { urls: i }), (0, n.jsx)(f, { message: r })] });
                }
                const a = t[0];
                let i;
                return (i = e.sender?.displayName ? (a?.displayName ? s("{addedName} was added by {addedBy}", { addedName: a.displayName, addedBy: e.sender.displayName }) : s("Unknown was added by {addedBy}", { addedBy: e.sender.displayName })) : a?.displayName ? s("{addedName} was added", { addedName: a.displayName }) : s("Unknown was added")), (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(p, { avatarUrl: a?.profileImageUrl, screenName: a?.screenName }), (0, n.jsx)(f, { message: i })] });
            }
            function w({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.affectedUsers.asJsReadonlyArrayView();
                if (t.length > 1) {
                    const e = t[0],
                        a = t.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : []));
                    let i;
                    return (i = e?.displayName ? s("{removedName} and {count, plural, one {other} other {others}} were removed", { removedName: e.displayName, count: t.length - 1 }) : s("Unknown and {count, plural, one {other} other {others}} were removed", { count: t.length - 1 })), (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(m.o, { urls: a }), (0, n.jsx)(f, { message: i })] });
                }
                const a = t[0];
                let i;
                return (i = a?.displayName ? s("{removedName} was removed", { removedName: a.displayName }) : s("Unknown was removed")), (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(p, { avatarUrl: a?.profileImageUrl }), (0, n.jsx)(f, { message: i })] });
            }
            function y({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender,
                    a = e.affectedUsers.asJsReadonlyArrayView().length;
                let i;
                return (i = e.senderIsCurrentUser ? s("You made {count, plural, one {member} other {members}} an admin", { count: a }) : t?.displayName ? s("{senderName} made {count, plural, one {member} other {members}} an admin", { senderName: t.displayName, count: a }) : s("A member made {count, plural, one {member} other {members}} an admin", { count: a })), (0, n.jsx)(f, { message: i });
            }
            function b({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender,
                    a = e.affectedUsers.asJsReadonlyArrayView().length;
                let i;
                return (i = e.senderIsCurrentUser ? s("You removed admin status from {count, plural, one {member} other {members}}", { count: a }) : t?.displayName ? s("{senderName} removed admin status from {count, plural, one {member} other {members}}", { senderName: t.displayName, count: a }) : s("A member removed admin status from {count, plural, one {member} other {members}}", { count: a })), (0, n.jsx)(f, { message: i });
            }
            function N({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? (e.newTitle ? s("You changed the group name to {title}", { title: e.newTitle }) : s("You changed the group name to Untitled")) : t?.displayName ? (e.newTitle ? s("{senderName} changed the group name to {title}", { senderName: t.displayName, title: e.newTitle }) : s("{senderName} changed the group name to Untitled", { senderName: t.displayName })) : e.newTitle ? s("A member changed the group name to {title}", { title: e.newTitle }) : s("A member changed the group name to Untitled")), (0, n.jsx)(f, { message: a });
            }
            function I({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You updated the group photo") : t?.displayName ? s("{senderName} updated the group photo", { senderName: t.displayName }) : s("A member updated the group photo")), (0, n.jsx)(f, { message: a });
            }
            function C({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.newTtl?.inWholeMilliseconds || 0,
                    a = e.sender;
                let i;
                return (i = e.senderIsCurrentUser ? (0 === t ? s("You turned vanishing mode off") : s("You set vanishing mode to {duration}", { duration: (0, h.L)(t) })) : a?.displayName ? (0 === t ? s("{senderName} turned vanishing mode off", { senderName: a.displayName }) : s("{senderName} set vanishing mode to {duration}", { senderName: a.displayName, duration: (0, h.L)(t) })) : 0 === t ? s("A member turned vanishing mode off") : s("A member set vanishing mode to {duration}", { duration: (0, h.L)(t) })), (0, n.jsx)(f, { message: i });
            }
            function D({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You enabled screenshot notifications. Participants in the conversation will be informed when someone takes a screenshot.") : t?.displayName ? s("{senderName} enabled screenshot notifications. Participants in the conversation will be informed when someone takes a screenshot.", { senderName: t.displayName }) : s("A member enabled screenshot notifications. Participants in the conversation will be informed when someone takes a screenshot.")), (0, n.jsx)(f, { message: a });
            }
            function S({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You disabled screenshot notifications") : t?.displayName ? s("{senderName} disabled screenshot notifications", { senderName: t.displayName }) : s("A member disabled screenshot notifications")), (0, n.jsx)(f, { message: a });
            }
            function k({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You enabled screenshot blocking. Chat messages will no longer appear in screenshots.") : t?.displayName ? s("{senderName} enabled screenshot blocking. Chat messages will no longer appear in screenshots.", { senderName: t.displayName }) : s("A member enabled screenshot blocking. Chat messages will no longer appear in screenshots.")), (0, n.jsx)(f, { message: a });
            }
            function E({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You disabled screenshot blocking") : t?.displayName ? s("{senderName} disabled screenshot blocking", { senderName: t.displayName }) : s("A member disabled screenshot blocking")), (0, n.jsx)(f, { message: a });
            }
            function R({ contents: e }) {
                const { t: s } = (0, u.$G)(),
                    t = e.sender;
                let a;
                return (a = e.senderIsCurrentUser ? s("You took a screenshot") : t?.displayName ? s("{senderName} took a screenshot", { senderName: t.displayName }) : s("A member took a screenshot")), (0, n.jsx)(f, { message: a });
            }
            function M({ contents: e }) {
                const { t: s } = (0, u.$G)();
                let t = e.newDate.toString();
                if (e.newDate instanceof r.com.x.dms.model.KmpDateFormat.Today) t = s("Today");
                else if (e.newDate instanceof r.com.x.dms.model.KmpDateFormat.Yesterday) t = s("Yesterday");
                else if (e.newDate instanceof r.com.x.dms.model.KmpDateFormat.Date) {
                    const s = e.newDate.kmpDate,
                        n = new Date(s.year, s.month - 1, s.day),
                        a = "undefined" != typeof navigator ? navigator.language : "en",
                        i = { month: "short", day: "numeric", ...(e.newDate.includeYear && { year: "numeric" }) };
                    t = n.toLocaleDateString(a, i);
                }
                return (0, n.jsx)(f, { message: t });
            }
            function T({ informationalItem: e }) {
                const s = e.contents,
                    { t } = (0, u.$G)();
                return (0, n.jsx)(v, { children: s instanceof g.AddedGroupMembers ? (0, n.jsx)(j, { contents: s }) : s instanceof g.RemovedGroupMembers ? (0, n.jsx)(w, { contents: s }) : s instanceof g.AddedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof g.RemovedGroupAdmins ? (0, n.jsx)(b, { contents: s }) : s instanceof g.ChangedGroupTitle ? (0, n.jsx)(N, { contents: s }) : s instanceof g.ChangedGroupAvatar ? (0, n.jsx)(I, { contents: s }) : s instanceof g.DefaultTtlChanged ? (0, n.jsx)(C, { contents: s }) : s instanceof g.DateChanged ? (0, n.jsx)(M, { contents: s }) : s instanceof g.GroupInviteEnabled ? (0, n.jsx)(f, { message: t("Invite link enabled") }) : s instanceof g.GroupInviteDisabled ? (0, n.jsx)(f, { message: t("Invite link disabled") }) : s instanceof g.ScreenCaptureBlockingDisabled ? (0, n.jsx)(E, { contents: s }) : s instanceof g.ScreenCaptureBlockingEnabled ? (0, n.jsx)(k, { contents: s }) : s instanceof g.ScreenCaptureDetected ? (0, n.jsx)(R, { contents: s }) : s instanceof g.ScreenCaptureDetectionDisabled ? (0, n.jsx)(S, { contents: s }) : s instanceof g.ScreenCaptureDetectionEnabled ? (0, n.jsx)(D, { contents: s }) : null });
            }
            var A = t(470851),
                $ = t(145731),
                U = t(553453),
                z = t(611105),
                F = t(147602),
                O = t(436995),
                G = t(668631),
                P = t(421018),
                V = t(256958),
                L = t(318063),
                B = t(993165);
            const J = r.com.x.dms.model.ChatMessageAction,
                Z = r.com.x.dms.chat.DmEvent,
                _ = r.com.x.models.KMPRect;
            function Y({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: i }) {
                const { t: r } = (0, u.$G)(),
                    o = t || !!s?.longPress,
                    l = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const t = () => s(new Z.MessageActionClick(e));
                                switch (e) {
                                    case J.Report:
                                    case J.DsaReport:
                                        return null;
                                }
                                return e instanceof J.DeleteForAll
                                    ? { text: r("Delete for All"), icon: (0, n.jsx)($.Z, {}), destructive: !0, onClick: t }
                                    : e instanceof J.DeleteForSelf
                                      ? { text: r("Delete for me"), icon: (0, n.jsx)($.Z, {}), destructive: !0, onClick: t }
                                      : e instanceof J.Reply
                                        ? { text: r("Reply"), icon: (0, n.jsx)(U.Z, {}), onClick: t }
                                        : e instanceof J.CancelSend
                                          ? { text: r("Cancel message"), icon: void 0, onClick: t }
                                          : e instanceof J.RetrySend
                                            ? { text: r("Try sending again"), icon: (0, n.jsx)(z.Z, {}), onClick: t }
                                            : e instanceof J.CopyText
                                              ? {
                                                    text: r("Copy message text"),
                                                    icon: (0, n.jsx)(F.Z, {}),
                                                    onClick: () => {
                                                        t(), navigator.clipboard.writeText(e.text), (0, V.Am)(r("Copied to clipboard"), { icon: "📄" });
                                                    },
                                                }
                                              : e instanceof J.Edit
                                                ? { text: r("Edit message"), icon: (0, n.jsx)(O.Z, {}), onClick: t }
                                                : e instanceof J.DeletePending
                                                  ? { text: r("Delete for me"), icon: (0, n.jsx)($.Z, {}), destructive: !0, onClick: t }
                                                  : e instanceof J.MessageDetails
                                                    ? { text: r("Info"), icon: (0, n.jsx)(G.Z, {}), onClick: t }
                                                    : null;
                            })(e, i),
                        )
                        .filter((e) => !!e);
                return (
                    o &&
                    (0, n.jsx)(L.P, {
                        items: l ?? [],
                        trigger: (0, n.jsx)(B.z, { icon: (0, n.jsx)(P.Z, {}), size: "small", variant: "primaryText" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new Z.MessageLongPressed(e, new _(0, 0, 0, 0), a) : Z.MessageFocusedDialogDismissed;
                            i(t);
                        },
                    })
                );
            }
            function q({ user: e, avatarDisplayMode: s }) {
                if (!e || !e.profileImageUrl || "None" === s.name) return null;
                if ("AsPadding" === s.name) return (0, n.jsx)("div", { className: "px-4", children: " " });
                const t = (0, x.F)();
                return (0, n.jsx)("div", { children: (0, n.jsx)(c.q, { url: e.profileImageUrl, size: "large", screenName: e.screenName, withLink: !t || "external", resolution: "400x400" }) });
            }
            var H = t(607499),
                K = t(205116),
                X = t(123010);
            const W = ({ isReceived: e, textContent: s, textEntities: t, messageFooter: a }) => {
                const i = (function (e, s) {
                    const t = {};
                    return (
                        e.forEach((e) => {
                            const n = (function (e, s) {
                                const t = s.slice(0, e[0]),
                                    n = new Intl.Segmenter("en", { granularity: "grapheme" }),
                                    a = Array.from(n.segment(t)),
                                    i = a.length;
                                let r = 0;
                                const o = a.map((e) => e.segment).join("");
                                r = o.length === i ? e[0] - i : e[0] - [...o].length;
                                if (0 !== r) return [e[0] - r, e[1] - r];
                                return e;
                            })([e.startIdx, e.endIdx], s);
                            e instanceof r.com.x.models.text.MentionEntity && (t.mentions || (t.mentions = []), t.mentions.push({ screenName: e.screenName, indices: n })), e instanceof r.com.x.models.text.UrlEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.displayUrl, url: Q(e.url), indices: n })), e instanceof r.com.x.models.text.EmailEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.email, url: ee(e.email), indices: n })), e instanceof r.com.x.models.text.HashtagEntity && (t.hashtags || (t.hashtags = []), t.hashtags.push({ text: e.text, indices: n })), e instanceof r.com.x.models.text.CashtagEntity && (t.symbols || (t.symbols = []), t.symbols.push({ text: e.text, indices: n })), e instanceof r.com.x.models.text.PhoneNumberEntity && (t.urls || (t.urls = []), t.urls.push({ displayUrl: e.phoneNumberForTelLink, url: `tel:${e.phoneNumberForTelLink}`, indices: n }));
                        }),
                        t
                    );
                })(t, s);
                return (0, n.jsxs)("div", { className: "inline-flex flex-wrap items-end gap-2", children: [(0, n.jsx)(X.W, { color: e ? "text" : "white", entities: i, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 }), a] });
            };
            function Q(e) {
                return /^https?:\/\//i.test(e) ? e : `https://${e}`;
            }
            function ee(e) {
                return /^mailto:/i.test(e) ? e : `mailto:${e}`;
            }
            var se = t(515790),
                te = t(3577),
                ne = t(589259),
                ae = t(480158),
                ie = t(630086),
                re = t(996016),
                oe = t(350311),
                le = t(167285),
                ce = t(336984),
                de = t(814926),
                me = t(702823);
            function ue({ participants: e, isOneToOne: s }) {
                const { t } = (0, u.$G)(),
                    [a, i] = (0, o.useState)(e.slice(0, 2));
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex flex-row gap-2 justify-between items-center",
                            children: [
                                (0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: t("Seen by") }),
                                a.length < e.length &&
                                    (0, n.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            i(e);
                                        },
                                        children: (0, n.jsx)(d.x, { color: "primary", children: t("See all ({number})", { number: e.length }) }),
                                    }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: a.length === e.length ? "max-h-[300px] overflow-y-auto" : "",
                            children: (0, n.jsx)(ie.I, {
                                className: "mt-2",
                                children: (0, n.jsx)(re.b, {
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
            const xe = ({ timestamp: e, ttl: s }) => {
                    const { t } = (0, u.$G)();
                    return (0, n.jsxs)(ie.I, { className: "mt-2", children: [e && (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3 bg-gray-0 px-4", children: [(0, n.jsx)(de.Z, { className: "w-4 h-4 fill-blue-500" }), (0, n.jsxs)("div", { className: "flex flex-row justify-between w-full", children: [(0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: t("Sent") }), (0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: (0, le.H)(e) })] })] }), s && (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3 bg-gray-0 px-4", children: [(0, n.jsx)(me.Z, { className: "w-4 h-4 fill-gray-500" }), (0, n.jsxs)("div", { className: "flex flex-row justify-between w-full", children: [(0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: t("Disappears in") }), (0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: (0, h.L)(s.inWholeMilliseconds) })] })] })] });
                },
                he = ({ participant: e }) => (e && e.user ? (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, n.jsx)(oe.s, { url: e.user.profileImageUrl, size: "medium" }), (0, n.jsx)(ne.R, { name: e.user.displayName, badges: (0, ce.r)(e.user), weight: "normal" })] }) : null);
            function ge({ messageDetailsState: e, onDismiss: s, isOneToOne: t }) {
                const { t: a } = (0, u.$G)(),
                    i = (0, l._)(e),
                    r = i?.details?.readBy?.asJsReadonlyArrayView() || [],
                    o = i?.details?.item.messageInfo?.showTimestampValue?.epochSeconds,
                    c = i?.details?.item.messageInfo?.timeToLive?.timeToLive;
                return (0, n.jsx)(ae.h, { open: !!i?.details, onOpenChange: s, trigger: (0, n.jsx)("div", {}), borderRadius: "large", children: (0, n.jsx)("div", { className: "p-4 max-w-[750px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: i?.details && (0, n.jsxs)("div", { className: "flex flex-col gap-2 mt-2", children: [r.length > 0 && (0, n.jsx)(ue, { participants: r, isOneToOne: t }), (0, n.jsx)("div", { className: "flex flex-row gap-2", children: (0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: a("Sent by") }) }), (0, n.jsx)("div", { className: "px-4 rounded-xl bg-gray-0", children: (0, n.jsx)(he, { participant: i.details.sentBy }) }), (0, n.jsx)(xe, { timestamp: o, ttl: c })] }) }) });
            }
            var pe = t(242782);
            const fe = ({ isReceived: e, timestamp: s, hasTTL: t, participants: a, showDetails: i, readStatus: r, setShowDetails: o, isOneToOne: l, iconColor: c, color: m }) => (0, n.jsxs)("div", { className: "flex items-center ml-auto shrink-0 gap-1", children: [(0, n.jsx)(d.x, { size: "subtext3", color: m || (e ? "gray700" : "white"), children: (0, le.H)(s) }), t && (0, n.jsx)(se.Z, { className: `w-3.5 h-3.5 ${m || (e ? "text-text/60" : "text-white/60")}` }), !e && (a.length > 0 ? (0, n.jsx)(ae.h, { open: i, onOpenChange: o, trigger: (0, n.jsx)("div", { className: "z-20 -ms-[2px] cursor-pointer", children: (0, n.jsx)(pe.Z, { className: `w-4 h-4 ${c || "text-white"}` }) }), children: (0, n.jsx)("div", { className: "p-4 max-w-[500px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: (0, n.jsx)(ue, { participants: a, isOneToOne: l }) }) }) : "Read" === r ? (0, n.jsx)(pe.Z, { className: `w-4 h-4 ${c || "text-white"}` }) : null)] });
            var ve = t(784344),
                je = t(617092),
                we = t(289752),
                ye = t(791266);
            const be = r.com.x.dms.chat.DmEvent,
                Ne = ({ isReceived: e, replyPreview: s, onEvent: t }) => (0, n.jsxs)("div", { className: `flex flex-col mt-0.5 gap-1 ${e ? "items-start" : "items-end"} cursor-pointer`, onClick: () => s.sequenceNumber && t(new be.ReplyBubbleClicked(s.sequenceNumber)), children: [s.showReplyNames && (0, n.jsxs)("div", { className: `flex gap-1 px-2 ${e ? "text-start" : "text-end"} items-center`, children: [(0, n.jsx)(ve.Z, { className: "inline-block text-text/70" }), (0, n.jsx)(d.x, { as: "span", size: "subtext3", children: s.senderDisplayName })] }), s.attachment && (s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.Media && s.attachment.type === r.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(je.K, { filename: s.attachment.filename, fileSize: s.attachment.fileSize }) : s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.Media.FromServer && s.attachment.uriState instanceof r.com.x.dms.model.MediaUriState.ResolvedMedia && (0, n.jsx)(we.Et, { src: s.attachment.uriState.uri, type: s.attachment.type, dimensions: s.attachment.dimensions, className: "rounded-2xl !w-[25%] !h-[25%] border border-gray-200", showAsStatic: !0 })), s.attachment instanceof r.com.x.dms.model.MessageItemAttachment.UrlCard && (0, n.jsx)(ye.C, { urlCard: s.attachment }), s.previewText && (0, n.jsx)("div", { className: "flex flex-col px-3 py-1.5 rounded-2xl gap-3 border " + (s.senderIsCurrentUser ? "border-primary/50" : "border-gray-400"), children: (0, n.jsx)(d.x, { color: s.senderIsCurrentUser ? "primary" : "gray900", size: "subtext1", numberOfLines: 2, children: s.previewText }) })] });
            var Ie = t(407602),
                Ce = t(437712),
                De = t(840489),
                Se = t(463341);
            const ke = r.com.x.dms.chat.DmEvent,
                Ee = r.com.x.models.KMPRect,
                Re = ({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, onEvent: a }) => {
                    const [i, l] = (0, o.useState)(!1),
                        [c, d] = (0, o.useState)(!1),
                        { t: m } = (0, u.$G)();
                    if (!t && !s?.quickReactions) return null;
                    const x = s?.quickReactions?.asJsReadonlyArrayView().map((e) => e.asJsReadonlyArrayView());
                    return (0, n.jsx)(Ce.J, {
                        borderRadius: "2xLarge",
                        trigger: (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, n.jsx)(B.z, {
                                variant: "primaryText",
                                size: "small",
                                color: "red600",
                                icon: (0, n.jsx)(Ie.Z, {}),
                                onClick: () => {
                                    null === s ? (l(!0), a(new ke.MessageDoubleClicked(e, new Ee(0, 0, 0, 0), !1))) : (l(!1), a(ke.MessageFocusedDialogDismissed));
                                },
                            }),
                        }),
                        open: null !== s && i,
                        onOpenChange: (e) => {
                            !e && i && (a(ke.MessageFocusedDialogDismissed), l(!1), d(!1));
                        },
                        children: (0, n.jsx)("div", {
                            className: "relative flex flex-col",
                            children: c
                                ? (0, n.jsx)(Se.Bu, {
                                      children: (0, n.jsx)(A.h, {
                                          onReactionClicked: (s) => {
                                              const t = new r.com.x.dms.model.ReactionPickerItem(s, !1);
                                              a(new ke.ReactionPickerItemClick(t, e)), a(ke.MessageFocusedDialogDismissed), l(!1), d(!1);
                                          },
                                          recentlyUsedEmojis: s?.quickReactions?.asJsReadonlyArrayView().flatMap((e) => e.asJsReadonlyArrayView().map((e) => e.emoji)) || [],
                                          reactionMap: x?.flatMap((e) => e.filter((e) => e.isSelected).map((e) => e.emoji)) || [],
                                          t: m,
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
                                                          children: s.map((i, r) =>
                                                              (0, n.jsx)(
                                                                  "button",
                                                                  {
                                                                      type: "button",
                                                                      className: (0, De.Z)("w-8 h-8 flex items-center justify-center hover:bg-gray-100", { "bg-gray-50": i.isSelected }, { "rounded-r": i.isSelected && r < s.length - 1 && !s[r + 1]?.isSelected }, { "!rounded-t-none": i.isSelected && t === x.length - 1 }),
                                                                      onClick: () => {
                                                                          a(new ke.ReactionPickerItemClick(i, e));
                                                                      },
                                                                      children: (0, n.jsx)(A.c, { emoji: i.emoji }),
                                                                  },
                                                                  i.emoji,
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
                                                      a(ke.MessageReactionsClicked), d(!0);
                                                  },
                                                  children: (0, n.jsx)(P.Z, {}),
                                              }),
                                          }),
                                      ],
                                  }),
                        }),
                    });
                };
            var Me = t(38891),
                Te = t(189164),
                Ae = t(42630);
            function $e({ messageInfo: e, isReceived: s, showSignatureVerificationIssuesIcon: t }) {
                const { t: a } = (0, u.$G)(),
                    i = [],
                    r = (0, Me.z)().isTrue("xchat_read_receipt_facepile") && i.length > 1;
                return e.showEdited || t ? (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.showEdited && (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: a("Edited") }), e.showEdited && (t || r) && (0, n.jsx)(Ae.A, {}), t && (0, n.jsx)(Te.Z, {}), t && r && (0, n.jsx)(Ae.A, {}), r && (0, n.jsx)(m.o, { urls: i, size: "small", spacing: 6, stackOrder: "ascending" })] }) : null;
            }
            var Ue = t(124782);
            const ze = r.com.x.dms.chat.DmEvent,
                Fe = ({ remainingReactions: e }) => {
                    const s = (0, o.useRef)(null),
                        t = (0, Ue.X)(s);
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(Ce.J, { open: t, side: "top", trigger: (0, n.jsx)("div", { ref: s, className: "inline-flex items-center bg-gray-50 rounded-full px-2 pt-0.5 shadow-sm gap-1 border border-background cursor-pointer", children: (0, n.jsx)(d.x, { size: "body", children: "…" }) }), children: (0, n.jsx)("div", { className: "grid gap-2 p-2 pr-0 border border-border rounded-lg bg-background shadow-lg mx-auto [grid-template-columns:repeat(auto-fit,minmax(3rem,1fr))] max-w-[calc(6*3rem+5*0.5rem)]", children: e.map((e) => (0, n.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [(0, n.jsx)(A.c, { emoji: e.reaction }), (0, n.jsx)(d.x, { size: "subtext2", weight: "bold", children: e.users.asJsReadonlyArrayView().length })] }, e.reaction)) }) }) });
                },
                Oe = ({ emoji: e, count: s, users: t, isSelected: a, onClick: i }) => {
                    const r = (0, o.useRef)(null),
                        l = (0, Ue.X)(r),
                        c = t.map((e) => e.name),
                        m = c.length > 1 ? `${c.slice(0, -1).join(", ")} and ${c[c.length - 1]}` : c[0];
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(Ce.J, { open: l, side: "top", trigger: (0, n.jsxs)("div", { ref: r, className: `inline-flex items-center ${a ? "bg-blue-500" : "bg-gray-50"} rounded-full px-2 py-1 shadow-sm gap-1 border border-background cursor-pointer`, onClick: i, children: [(0, n.jsx)("div", { className: "scale-[0.9] inline-flex items-center", children: (0, n.jsx)(A.c, { emoji: e }) }), s > 1 && (0, n.jsx)(d.x, { size: "subtext2", weight: "bold", color: a ? "white" : "gray700", children: s })] }), children: (0, n.jsxs)("div", { className: "flex flex-row items-center gap-2 p-2 border border-border rounded-lg bg-background shadow-lg", children: [(0, n.jsxs)(d.x, { size: "subtext2", weight: "medium", children: [m, " reacted with"] }), (0, n.jsx)(A.c, { emoji: e })] }) }) });
                },
                Ge = ({ reaction: e, onEvent: s, messageItem: t }) =>
                    (0, n.jsx)(Oe, {
                        emoji: e.reaction,
                        count: e.users.asJsReadonlyArrayView().length,
                        users: e.users.asJsReadonlyArrayView(),
                        isSelected: e.isSelected,
                        onClick: () => {
                            const n = new r.com.x.dms.model.ReactionPickerItem(e.reaction, e.isSelected);
                            s(new ze.ReactionPickerItemClick(n, t));
                        },
                    }),
                Pe = ({ isReceived: e, reactions: s, messageItem: t, onEvent: a }) => {
                    const i = s.slice(4);
                    return (0, n.jsxs)("div", { className: `relative flex ${e ? "flex-row-reverse" : "flex-row"} gap-1 justify-end -mt-[10px] mx-3`, children: [s.slice(0, 4).map((e) => (0, n.jsx)(Ge, { reaction: e, onEvent: a, messageItem: t }, e.reaction)), i.length > 0 && (0, n.jsx)(Fe, { remainingReactions: i })] });
                };
            function Ve({ isReceived: e, onEvent: s, showDetails: t, setShowDetails: a, isOneToOne: i, hasTTL: r, messageItem: o }) {
                return o.reactions?.asJsReadonlyArrayView().length || o.supersizeEmoji || o.messageInfo?.showEdited || o.showSignatureVerificationIssuesIcon ? (0, n.jsxs)("div", { className: "flex flex-col gap-2 pb-1", style: { gridArea: "message-info" }, children: [o.reactions && o.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(Pe, { isReceived: e, reactions: o.reactions.asJsReadonlyArrayView(), messageItem: o, onEvent: s }), o.supersizeEmoji && (0, n.jsx)("div", { className: "align-end", children: (0, n.jsx)(fe, { isReceived: !1, timestamp: o.createdTimestamp.epochSeconds, hasTTL: r, readStatus: o?.messageInfo?.readStatus?.name, participants: [], showDetails: t, setShowDetails: a, color: "gray700", iconColor: "text-gray-700", isOneToOne: i }) }), o.messageInfo && (0, n.jsx)($e, { messageInfo: o.messageInfo, showSignatureVerificationIssuesIcon: o.showSignatureVerificationIssuesIcon, isReceived: e })] }) : null;
            }
            function Le({ messageItem: e, messageFocusedDialog: s, showMessageInfoDialog: t, messageInfoDialog: a, messageInfoDialogDismissed: i, onEvent: l, isVisible: c, isOneToOne: m }) {
                const { t: x } = (0, u.$G)(),
                    h = (0, te.a)("(max-width: 768px)"),
                    g = e instanceof r.com.x.dms.model.MessageItemReceived,
                    p = null !== e.textContent && !e.supersizeEmoji,
                    [f, v] = (0, o.useState)(!1),
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
                    [w, y] = (0, o.useState)(!1),
                    b = !!e.messageInfo?.timeToLive,
                    N = b || e?.messageInfo?.showTimestampValue || e?.messageInfo?.showTimestamp;
                return (0, n.jsxs)(H.S, {
                    message: x("Couldn't load message"),
                    children: [
                        e.senderDisplayName && (0, n.jsx)("div", { className: "px-16", children: (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: e.senderInfo?.user?.displayName }) }),
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
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-1 " + (g ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.replyPreview && e.senderInfo && e.senderInfo.user && (0, n.jsx)(Ne, { replyPreview: e.replyPreview, isReceived: g, onEvent: l }), e.attachment ? (0, n.jsxs)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl relative", children: [(0, n.jsx)(K.P, { attachment: e.attachment, isReceived: g, onEvent: l, className: " border border-gray-200 rounded-2xl", isVisible: c }), b && !p && (0, n.jsx)("div", { className: "absolute bottom-2 right-2 rounded-full text-gray-700 shadow-md", children: (0, n.jsx)(se.Z, { className: "w-4 h-4" }) })] }) : null, e.supersizeEmoji && (0, n.jsx)("div", { className: "flex gap-2 px-1 tracking-widest", children: e.textContent?.match(/(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu)?.map((e, s) => (0, n.jsx)(A.c, { emoji: e }, `${e}-${s}`)) }), p ? (0, n.jsx)("div", { className: "flex justify-end px-4 py-2 rounded-2xl " + (e.supersizeEmoji ? "" : g ? "bg-gray-50" : "bg-blue-500"), children: e.textContent && (0, n.jsx)(W, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: g, messageFooter: N && (0, n.jsx)(fe, { isReceived: g, timestamp: e.createdTimestamp.epochSeconds, hasTTL: b, readStatus: e?.messageInfo?.readStatus?.name, participants: [], showDetails: w, setShowDetails: y, isOneToOne: m }) }) }) : null] }),
                                    (0, n.jsxs)("div", {
                                        className: `${h ? "w-16" : "w-32"} flex items-center gap-1 ${g ? "flex-row" : "flex-row-reverse"}`,
                                        style: { gridArea: "actions" },
                                        children: [
                                            (0, n.jsx)(Re, { messageItem: e, messageFocusedDialog: s, isMessageFocused: f, onEvent: l }),
                                            (0, n.jsx)(Y, { messageFocusedDialog: s, isMessageFocused: f, messageItem: e, onEvent: l, isFromAttachment: !1 }),
                                            t &&
                                                (0, n.jsx)(ge, {
                                                    onDismiss: () => {
                                                        i();
                                                    },
                                                    messageDetailsState: a,
                                                    isOneToOne: m,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsx)(Ve, { isReceived: g, onEvent: l, showDetails: w, setShowDetails: y, isOneToOne: m, hasTTL: b, messageItem: e }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            function Be({ sendingStatusItem: e }) {
                const { t: s } = (0, u.$G)();
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(d.x, { size: "subtext2", color: "red500", children: s("Failed") }), (0, n.jsx)(G.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            function Je({ chatItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: i, messageInfoDialogDismissed: o, isVisible: l, isOneToOne: c }) {
                return e instanceof r.com.x.dms.model.MessageItemReceived || e instanceof r.com.x.dms.model.MessageItemSent || e instanceof r.com.x.dms.model.MessageItemPending ? (0, n.jsx)(Le, { messageItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: i, messageInfoDialogDismissed: o, isVisible: l, isOneToOne: c }) : e instanceof r.com.x.dms.model.SendingStatusItem ? (0, n.jsx)(Be, { sendingStatusItem: e }) : e instanceof r.com.x.dms.model.InformationalItem ? (0, n.jsx)(T, { informationalItem: e }) : null;
            }
            const Ze = (0, o.memo)(Je);
            var _e = t(97759);
            const Ye = 126,
                qe = 64,
                He = ({ component: e, numItems: s, composerHeight: t }) => {
                    const { apiRef: a, addOnScrollListener: i } = (0, Se.Nb)(),
                        [l, c] = (0, o.useState)(!1),
                        d = (0, o.useCallback)(() => {
                            const e = a.current;
                            if (!e) return;
                            const s = e.scrollSize + t + qe,
                                n = 0 !== e.viewportSize && e.scrollSize !== e.viewportSize;
                            c(n && s - e.scrollOffset - e.viewportSize > Ye);
                        }, [a.current, t]);
                    (0, o.useEffect)(() => i(d), [d, i]);
                    const m = (0, o.useCallback)(() => {
                        e.onEvent(r.com.x.dms.chat.DmEvent.ScrollToBottomButtonClicked);
                        const n = a.current;
                        if (!n) return;
                        const i = n.scrollSize - n.scrollOffset - n.viewportSize <= 1e4;
                        n.scrollToIndex(s - 1, { align: "end", smooth: i, offset: t });
                    }, [e, a.current, s, t]);
                    return l ? (0, n.jsx)(B.z, { icon: (0, n.jsx)(_e.Z, { width: 16, height: 16 }), className: "z-20 absolute right-12 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", style: { bottom: t + 24 }, color: "blue500", onClick: m }) : null;
                };
            var Ke = t(676337),
                Xe = t(14808);
            const We = r.com.x.dms.chat.DmEvent,
                Qe = r.com.x.dms.model.MessageItemSent,
                es = r.com.x.dms.model.MessageItemReceived,
                ss = r.kotlin.collections.KtList;
            function ts({ component: e, composerHeight: s }) {
                const t = (0, l._)(e.state),
                    c = (0, o.useMemo)(() => t.chatItems.items.asJsReadonlyArrayView().toReversed(), [t.chatItems]),
                    d = (0, Ke.H)(),
                    m = (0, o.useRef)(new Map()),
                    { t: x } = (0, u.$G)(),
                    h = t.showingMessageDetailsBottomSheet?.id ?? "",
                    { apiRef: g, dispatchOnScroll: p } = (0, Se.Nb)(),
                    f = (0, o.useRef)(!1),
                    v = (0, o.useMemo)(() => e.observeMessageDetails(h), [e, h]),
                    j = (0, o.useCallback)(() => {
                        if (g.current && d) {
                            const s = g.current.findStartIndex(),
                                t = g.current.findEndIndex(),
                                n = c
                                    .slice(s, t + 1)
                                    .filter((e) => e instanceof es || e instanceof Qe)
                                    .map((e) => e.sequenceNumber);
                            m.current.clear(), n.forEach((e) => m.current.set(e, !0)), e.onEvent(new r.com.x.dms.chat.DmEvent.VisibleMessagesChanged(t === c.length - 1, ss.fromJsArray(n)));
                        }
                    }, [e, c, g.current, d]),
                    w = (0, o.useRef)(!1),
                    y = (0, Xe.E)((e) => {
                        (w.current = !0),
                            g.current?.scrollToIndex(c.length - 1, { align: "end", offset: s }),
                            j(),
                            setTimeout(() => {
                                w.current = !1;
                            }, 200);
                    });
                (0, o.useLayoutEffect)(() => {
                    f.current || y(c);
                }, [c, y]);
                const b = t.showConfirmationDialog,
                    N = (s) => {
                        e.onEvent(s);
                    },
                    I = (e) => ((e instanceof es || e instanceof Qe) && m.current.get(e.sequenceNumber)) ?? !1,
                    C = (0, o.useCallback)(() => {
                        e.onEvent(We.MessageDetailsDismissed);
                    }, [e]),
                    D = b ? ((e, s) => (e instanceof r.com.x.dms.model.ChatConfirmationDialog.DeleteMessageForYou ? { title: s("Delete for me"), message: s("Are you sure you want to delete this message for me?"), action: new We.DeleteMessageForMe(e.message) } : e instanceof r.com.x.dms.model.ChatConfirmationDialog.DeleteMessageForAll ? { title: s("Delete for All"), message: s("Are you sure you want to delete this message for all?"), action: new We.DeleteMessageForAll(e.message) } : null))(b, x) : null;
                return (
                    (0, o.useEffect)(() => {
                        if (t.requestScrollTo && g.current) {
                            const e = { align: "center", smooth: !0 };
                            g.current?.scrollToIndex?.(c.length - t.requestScrollTo.index, e), (f.current = !1), j();
                        }
                    }, [t.requestScrollTo, c, g.current, j]),
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            D &&
                                (0, n.jsx)(a.c, {
                                    open: !!b,
                                    onOpenChange: () => N(We.DismissConfirmationDialog),
                                    title: D.title,
                                    message: D.message,
                                    onConfirm: () => {
                                        N(D.action), N(We.DismissConfirmationDialog);
                                    },
                                }),
                            (0, n.jsx)(H.S, {
                                children: (0, n.jsx)("div", {
                                    className: "relative h-full",
                                    children:
                                        c.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(i.T, {
                                                    api: g,
                                                    className: "!h-full scrollbar-thin-custom pl-3",
                                                    items: c,
                                                    onScroll: (e, t) => {
                                                        const n = g.current;
                                                        if (n) {
                                                            const e = n.scrollSize + s + qe - n.scrollOffset - n.viewportSize,
                                                                t = 0 !== n.viewportSize && n.scrollSize !== n.viewportSize;
                                                            (f.current = t && e > Ye), w.current && y(c), j();
                                                        }
                                                        p(e, t);
                                                    },
                                                    onNearEnd: () => {
                                                        f.current = !1;
                                                    },
                                                    onAtStart: () => {
                                                        t.chatItems.olderItemsInfo && N(new r.com.x.dms.chat.DmEvent.ScrolledToTop(t.chatItems.olderItemsInfo));
                                                    },
                                                    renderItem: (e) => {
                                                        return (0, n.jsx)(Ze, { chatItem: e, onEvent: N, messageFocusedDialog: ((s = e.id), t.showingMessageFocusedDialog?.message.id === s ? t.showingMessageFocusedDialog : null), showMessageInfoDialog: h === e.id, messageInfoDialog: v, messageInfoDialogDismissed: C, isVisible: I(e), isOneToOne: t.convId instanceof r.com.x.models.dm.XConversationId.OneOnOne }, e.uniqueKey);
                                                        var s;
                                                    },
                                                    startMargin: qe,
                                                    header: (0, n.jsx)("div", { style: { height: qe } }),
                                                    footer: (0, n.jsx)("div", { style: { height: s } }),
                                                }),
                                                (0, n.jsx)(He, { component: e, numItems: c.length, composerHeight: s }),
                                            ],
                                        }),
                                }),
                            }),
                        ],
                    })
                );
            }
        },
        463341: (e, s, t) => {
            t.d(s, { Bu: () => r, Nb: () => o });
            var n = t(552322),
                a = t(202784);
            const i = (0, a.createContext)(null),
                r = ({ children: e }) => {
                    const s = (0, a.useRef)(null),
                        t = (0, a.useRef)(0),
                        r = (0, a.useRef)(new Map()).current,
                        o = (0, a.useCallback)(
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
                    return (0, n.jsx)(i.Provider, { value: { apiRef: s, addOnScrollListener: o, dispatchOnScroll: l }, children: e });
                },
                o = () => {
                    const e = (0, a.useContext)(i);
                    if (!e) throw new Error("No ScrollerEventContext.Provider found when calling useScrollerEventContext");
                    return e;
                };
        },
        548978: (e, s, t) => {
            t.d(s, { y: () => c });
            var n = t(552322),
                a = t(789764),
                i = t(626768),
                r = t(350311),
                o = t(455091),
                l = t(31674);
            const c = ({ typingIndicatorItem: e, showAvatar: s = !0, className: t }) => {
                const { t: c } = (0, o.$G)(),
                    d = e.users.asJsReadonlyArrayView(),
                    m = d.map((e) => e.profileImageUrl || r.j);
                let u = c("typing …");
                return 1 === d.length && d[0]?.name ? (u = c("{name} is typing …", { name: d[0]?.name })) : 2 === d.length && d[0]?.name && d[1]?.name ? (u = c("{name1} & {name2} are typing …", { name1: d[0]?.name, name2: d[1]?.name })) : d.length > 2 && (u = c("Several people are typing …")), (0, n.jsxs)("div", { className: (0, l.cn)("flex justify-start items-center py-1 px-4 gap-2", t), children: [!!m.length && s && (0, n.jsx)("div", { className: "-m-0.5", children: (0, n.jsx)(a.o, { urls: m, size: "small" }) }), (0, n.jsx)(i.A, { children: u })] });
            };
        },
        379342: (e, s, t) => {
            t.d(s, { s: () => l });
            var n = t(905394),
                a = t(202784),
                i = t(264531);
            const r = (e) => e.replaceAll(":", "-");
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
                    this.navigate.push(`${this.path}/${r(e)}`);
                }
                toConversationInfo(e) {
                    this.navigate.push(`${this.path}/${r(e)}/info`);
                }
                toParticipants(e) {
                    this.navigate.push(`${this.path}/${r(e)}/participants`);
                }
                toVanishingMode(e) {
                    this.navigate.push(`${this.path}/${r(e)}/vanishing-mode`);
                }
                toNewDM() {
                    this.navigate.push(`${this.path}/new`);
                }
                toPinScreen(e, s) {
                    const t = new URLSearchParams();
                    t.append("register", s?.shouldRegister ? "true" : "false"), t.append("generate", s?.shouldGenerate ? "true" : "false"), this.navigate.push(`${this.path}/pin/${e}?${t.toString()}`);
                }
                toGroupInvite(e) {
                    this.navigate.push(`${this.path}/${r(e)}/group-invite`);
                }
                toEditGroup(e) {
                    this.navigate.push(`${this.path}/${r(e)}/info/edit-group`);
                }
                toClassicInbox() {
                    window.location.href = "https://x.com/messages";
                }
            }
            function l() {
                const e = (0, n.d)(),
                    s = (0, i.BH)();
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
                i = t(159603),
                r = t(887491),
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
                v = t(455091),
                j = t(34681),
                w = t(272795),
                y = t(620134);
            const b = i.com.x.dms.newdm,
                N = i.com.x.dms.mapToValueList,
                I = ({ onVisibilityChange: e }) => {
                    const [s, t] = (0, a.useState)(null),
                        r = (0, h.n4)(),
                        o = (0, g.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const s = new i.com.x.export.CancellationSignal(),
                                n = r.newDmComponent(
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
                        }, [r, o, e]),
                        (0, n.jsx)(j.Vq, { open: !0, onOpenChange: e, children: s ? (0, n.jsx)(C, { component: s }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(c.P, {}) }) })
                    );
                },
                C = ({ component: e }) => {
                    const { t: s } = (0, v.$G)(),
                        t = s("Create a group"),
                        a = s("New message"),
                        h = s("Add people"),
                        g = (0, p._)(e.state);
                    (0, f.e)(e.toasts);
                    const I = N(g.selectedGroupUsers).asJsReadonlyArrayView(),
                        C = g.suggestions.asJsReadonlyArrayView();
                    const D = (s) => () => {
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
                                                (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(j.$N, { children: (0, n.jsx)(d.x, { size: "headline1", weight: "extrabold", children: g.isCreateGroupMode ? t : a }) }), g.isCreateGroupMode && (0, n.jsx)(d.x, { color: "gray700", children: h })] }),
                                                (0, n.jsx)(m.z, {
                                                    icon: (0, n.jsx)(r.Z, {}),
                                                    onClick: () => {
                                                        e.onEvent(b.NewDmEvent.BackButtonClicked);
                                                    },
                                                    variant: "primaryText",
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
                                (0, n.jsx)(u._, {
                                    autoFocus: !0,
                                    borderRadius: "xLarge",
                                    className: "bg-gray-0 focus-within:bg-transparent",
                                    inputClassName: "placeholder:text-gray-700",
                                    leftContent: (0, n.jsx)(o.Z, { className: "h-5 w-5 text-gray-700" }),
                                    onChange: (s) => {
                                        e.onEvent(new b.NewDmEvent.QueryChanged(s.target.value));
                                    },
                                    placeholder: s("Search name or username"),
                                    value: g.query,
                                }),
                                I.length > 0 && (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1 max-h-[128px] overflow-y-auto", children: I.map((e) => (0, n.jsx)(y.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: D(e.id) }, e.id.userIdString)) }),
                                !g.isCreateGroupMode && (0, n.jsx)(m.z, { className: "!justify-start", icon: (0, n.jsx)(l.Z, {}), onClick: () => e.onEvent(b.NewDmEvent.CreateAGroupItemClicked), variant: "brandText", children: s("Create a group") }),
                                g.isCreateConversationCallInProgress || 0 === C.length
                                    ? (0, n.jsx)("div", { className: "pt-8 h-[24rem]", children: (0, n.jsx)(c.P, {}) })
                                    : (0, n.jsx)(x.T, {
                                          className: "max-h-[24rem] scrollbar-thin-custom",
                                          items: C,
                                          renderItem: function (s) {
                                              return (0, n.jsx)(w.c, { onClick: () => e.onEvent(new b.NewDmEvent.SuggestionClicked(s)), suggestion: s, isSelected: s instanceof i.com.x.dms.NewDmSuggestion.User && g.selectedGroupUsers.asJsReadonlyMapView().has(s.user.id) }, s.id);
                                          },
                                      }),
                            ],
                        }),
                    });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.1621558a.js.map
