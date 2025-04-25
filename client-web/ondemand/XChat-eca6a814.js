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
        91695: (e, s, t) => {
            t.d(s, { R: () => p });
            var n = t(552322),
                a = t(425522),
                r = t(332161),
                o = t(993165),
                i = t(772669),
                l = t(314300),
                c = t(741064),
                d = t(445178),
                m = t(202784),
                u = t(533476),
                x = t(658358),
                g = t(950849),
                h = t(607499);
            const f = a.com.x.dms.composer.composer.RightButtonState;
            function p({ component: e }) {
                const s = (0, u._)(e.composer.state),
                    t = (0, m.useRef)(null);
                (0, x.e)(e.composer.toasts);
                const p = (0, m.useCallback)(() => {
                        t.current?.focus();
                    }, []),
                    v = e.composer.triggerComposerFocusEvents;
                (0, g.E)(v, p);
                const y = () => {
                    s.rightButton === f.SendActive && e.composer.onEvent(new a.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(s.rightButton));
                };
                return (0, n.jsx)(h.S, {
                    children: (0, n.jsx)("div", {
                        className: "p-4 bg-background border-t-gray-50 border-t-2 w-full",
                        children: (0, n.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                s.isEditing ? (0, n.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(l.Z, {}), (0, n.jsx)(r.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, n.jsx)(o.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(c.Z, {}), onClick: () => e.composer.onEvent(a.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                s.replyingTo ? (0, n.jsxs)("div", { className: "flex px-2.5 w-full justify-between", children: [(0, n.jsxs)("div", { className: "flex flex-col gap-1", children: [s.replyingTo.senderInfo?.displayName ? (0, n.jsxs)(r.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", s.replyingTo.senderInfo.displayName] }) : (0, n.jsx)(r.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Replying" }), (0, n.jsx)(r.x, { size: "subtext2", color: "gray700", children: s.replyingTo.textContent })] }), (0, n.jsx)("div", { className: "flex items-center", children: (0, n.jsx)(o.z, { variant: "primaryFilled", size: "xSmall", icon: (0, n.jsx)(c.Z, {}), onClick: () => e.composer.onEvent(a.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) })] }) : null,
                                (0, n.jsxs)("div", {
                                    className: "flex items-center gap-3 w-full",
                                    children: [
                                        (0, n.jsx)("form", {
                                            onSubmit: (e) => {
                                                e.preventDefault();
                                            },
                                            className: "flex-1",
                                            children: (0, n.jsx)(i._, {
                                                multiline: !0,
                                                value: s.currentText,
                                                onKeyDown: (e) => {
                                                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), y());
                                                },
                                                onChange: (s) => {
                                                    e.composer.onEvent(new a.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(s.target.value));
                                                },
                                                placeholder: "Start a message",
                                                className: "w-full max-h-60",
                                                ref: t,
                                            }),
                                        }),
                                        (0, n.jsx)(o.z, { disabled: s.rightButton === f.SendInactive, onClick: y, icon: (0, n.jsx)(d.Z, {}), size: "large", variant: "brandFilled" }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
        },
        339847: (e, s, t) => {
            t.d(s, { r: () => pe });
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
            function g({ message: e }) {
                return (0, n.jsx)(c.x, { size: "subtext2", weight: "medium", color: "gray600", children: e });
            }
            function h({ children: e }) {
                return (0, n.jsx)("div", { className: "flex justify-center items-center my-2", children: e });
            }
            function f({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const o = s[0],
                        i = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = o?.displayName || "Unknown"), (a = s.length - 1), (r = e.sender?.displayName), `${t} and ${a} other were added by ${r}`) : ((e, s) => `${e} and ${s} other were added`)(o?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: i }), (0, n.jsx)(g, { message: l })] });
                }
                var t, a, r;
                const o = s[0],
                    i = e.sender?.displayName ? ((e, s) => `${e} was added by ${s}`)(o?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was added`)(o?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(x, { avatarUrl: o?.profileImageUrl }), (0, n.jsx)(g, { message: i })] });
            }
            function p({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const o = s[0],
                        i = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = o?.displayName || "Unknown"), (a = s.length - 1), (r = e.sender?.displayName), `${t} and ${a} other were removed by ${r}`) : ((e, s) => `${e} and ${s} other were removed`)(o?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(d.o, { urls: i }), (0, n.jsx)(g, { message: l })] });
                }
                var t, a, r;
                const o = s[0],
                    i = e.sender?.displayName ? ((e, s) => `${e} was removed by ${s}`)(o?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was removed`)(o?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(x, { avatarUrl: o?.profileImageUrl }), (0, n.jsx)(g, { message: i })] });
            }
            function v({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${s} made ${e} member${e > 1 ? "s" : ""} an admin`)(e.affectedUsers.asJsReadonlyArrayView().length, t);
                return (0, n.jsx)(g, { message: a });
            }
            function y({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${s} removed admin status from ${e} member${e > 1 ? "s" : ""}`)(e.affectedUsers.asJsReadonlyArrayView().length, t);
                return (0, n.jsx)(g, { message: a });
            }
            function j({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e, s) => `${e} changed the group name to ${s}`)(e.senderIsCurrentUser ? "You" : t, e.newTitle ?? "Untitled");
                return (0, n.jsx)(g, { message: a });
            }
            function w({ contents: e }) {
                const s = e.sender,
                    t = s?.displayName ?? "A member",
                    a = ((e) => `${e} updated the group photo`)(e.senderIsCurrentUser ? "You" : t);
                return (0, n.jsx)(g, { message: a });
            }
            function b({ contents: e }) {
                const s = e.newTtl?.inWholeMilliseconds || 0,
                    t = e.sender,
                    a = t?.displayName ?? "A member",
                    r = e.senderIsCurrentUser ? "You" : a,
                    o = 0 === s ? ((e) => `${e} turned vanishing mode off`)(r) : ((e, s) => `${e} set vanishing mode to ${(0, m.L)(s)}`)(r, s);
                return (0, n.jsx)(g, { message: o });
            }
            function N({ contents: e }) {
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
                return (0, n.jsx)(g, { message: s });
            }
            function I({ informationalItem: e }) {
                const s = e.contents;
                return (0, n.jsx)(h, { children: s instanceof u.AddedGroupMembers ? (0, n.jsx)(f, { contents: s }) : s instanceof u.RemovedGroupMembers ? (0, n.jsx)(p, { contents: s }) : s instanceof u.AddedGroupAdmins ? (0, n.jsx)(v, { contents: s }) : s instanceof u.RemovedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof u.ChangedGroupTitle ? (0, n.jsx)(j, { contents: s }) : s instanceof u.ChangedGroupAvatar ? (0, n.jsx)(w, { contents: s }) : s instanceof u.DefaultTtlChanged ? (0, n.jsx)(b, { contents: s }) : s instanceof u.DateChanged ? (0, n.jsx)(N, { contents: s }) : null });
            }
            var C = t(202784),
                E = t(527735),
                k = t(993165),
                $ = t(731106),
                D = t(578950),
                R = t(747632),
                S = t(314300),
                A = t(568366),
                U = t(89616);
            const M = i.com.x.dms.model.ChatMessageAction,
                T = i.com.x.dms.chat.DmEvent,
                F = i.com.x.models.KMPRect;
            function z({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: r }) {
                const o = t || !!s?.longPress,
                    i = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const t = () => s(new T.MessageActionClick(e));
                                switch (e) {
                                    case M.Report:
                                    case M.DsaReport:
                                        return null;
                                }
                                return e instanceof M.Reply ? { text: "Reply", icon: (0, n.jsx)($.Z, {}), onClick: t } : e instanceof M.CancelSend ? { text: "Cancel message", icon: void 0, onClick: t } : e instanceof M.RetrySend ? { text: "Try sending again", icon: (0, n.jsx)(D.Z, {}), onClick: t } : e instanceof M.CopyText ? { text: "Copy message text", icon: (0, n.jsx)(R.Z, {}), onClick: () => navigator.clipboard.writeText(e.text) } : e instanceof M.Edit ? { text: "Edit message", icon: (0, n.jsx)(S.Z, {}), onClick: t } : e instanceof M.DeleteForAll ? { text: "Delete for All", icon: (0, n.jsx)(A.Z, {}), destructive: !0, onClick: t } : e instanceof M.DeleteForSelf || e instanceof M.DeletePending ? { text: "Delete for me", icon: (0, n.jsx)(A.Z, {}), destructive: !0, onClick: t } : null;
                            })(e, r),
                        )
                        .filter((e) => !!e);
                return (0, n.jsx)("div", {
                    className: `flex self-center items-center gap-2 bg-background border rounded-full p-1 shadow-sm ${!o && "invisible"}`,
                    onClick: (e) => e.stopPropagation(),
                    children: (0, n.jsx)(E.P, {
                        items: i ?? [],
                        trigger: (0, n.jsx)(k.z, { variant: "primaryText", size: "xSmall", icon: (0, n.jsx)(U.Z, {}), color: "gray600" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new T.MessageLongPressed(e, new F(0, 0, 0, 0), a) : T.MessageFocusedDialogDismissed;
                            r(t);
                        },
                    }),
                });
            }
            function P({ user: e, avatarDisplayMode: s }) {
                return e && e.profileImageUrl && "None" !== s.name ? ("AsPadding" === s.name ? (0, n.jsx)("div", { className: "px-4", children: " " }) : (0, n.jsx)("div", { children: (0, n.jsx)(l.q, { url: e.profileImageUrl, size: "large" }) })) : null;
            }
            var L = t(383508),
                _ = t(607499),
                V = t(547334),
                Z = t(42630),
                B = t(38375),
                J = t(468208);
            function O(e) {
                const s = Math.round(e / 60),
                    t = s > 60 ? Math.ceil(s / 60) : 0,
                    n = t > 24 ? Math.ceil(t / 24) : 0,
                    a = n > 7 ? Math.ceil(n / 7) : 0;
                return a > 0 ? `${a}w` : n > 0 ? `${n}d` : t > 0 ? `${t}h` : s > 0 ? `${s}m` : "< 1m";
            }
            function K({ ttlInfo: e, isReceived: s }) {
                const [t, a] = (0, C.useState)(0);
                return (
                    (0, C.useEffect)(() => {
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
                    (0, n.jsxs)("div", { className: "flex gap-0.5 items-center " + (s ? "flex-row" : "flex-row-reverse"), children: [(0, n.jsx)(J.Z, { className: "w-4 h-4 text-gray-700" }), (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: O(t) })] })
                );
            }
            function G({ messageInfo: e, isReceived: s }) {
                const t = e.showReadUsers?.asJsReadonlyArrayView().map((e) => e.profileImageUrl || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") || [],
                    a = t.length > 1;
                return (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.timeToLive && (0, n.jsx)(K, { ttlInfo: e.timeToLive, isReceived: s }), e.timeToLive && (e.showEdited || (e.showReadUsers && !a)) ? (0, n.jsx)(Z.A, {}) : null, e.showEdited && (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: "Edited" }), e.showEdited && e.showReadUsers && !a ? (0, n.jsx)(Z.A, {}) : null, e.showReadUsers && (0, n.jsxs)(n.Fragment, { children: [a ? (0, n.jsx)(d.o, { urls: t, size: "small", spacing: 6, stackOrder: "ascending" }) : (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: "Read" }), (0, n.jsx)("div", { className: "p-0.5 bg-background rounded-full z-20 " + (a ? "-ms-[12px]" : "-ms-[2px]"), children: (0, n.jsx)(B.Z, { width: "16", height: "16", viewBox: "1.75 1.75 20.5 20.5", className: "text-gray-700" }) })] })] });
            }
            var H = t(983955);
            const Y = ({ isReceived: e, textContent: s, textEntities: t }) => {
                    const a = {};
                    return t.forEach((e) => q(e, a)), (0, n.jsx)(H.W, { color: e ? "text" : "white", entities: a, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 });
                },
                q = (e, s) => {
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
            var ne = t(167285);
            function ae({ messageItem: e, messageFocusedDialog: s, onEvent: t }) {
                const { t: a } = (0, L.$G)(),
                    r = e instanceof i.com.x.dms.model.MessageItemReceived,
                    o = null !== e.textContent,
                    [l, d] = (0, C.useState)(!1),
                    m = ((e) => {
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
                return (0, n.jsx)(_.S, {
                    message: a("Couldn't load message"),
                    children: (0, n.jsx)("div", {
                        className: `flex ${r ? "justify-start" : "justify-end"} ${m} px-4`,
                        onMouseEnter: () => d(!0),
                        onMouseLeave: () => d(!1),
                        onClick: () => d(!0),
                        children: (0, n.jsxs)("div", {
                            className: "grid gap-x-2 gap-y-0.5 max-w-[calc(55%+96px)] grid-cols-[auto_auto_auto_auto] items-center",
                            style: { gridTemplateAreas: r ? '\n                  "avatar content actions"\n                  ". message-info ."\n                ' : '\n                  "actions content avatar"\n                  ". message-info ."\n                ' },
                            children: [(0, n.jsx)("div", { className: "self-end", style: { gridArea: "avatar" }, children: (0, n.jsx)(P, { avatarDisplayMode: e.avatarDisplayMode, user: e.senderInfo }) }), (0, n.jsxs)("div", { className: "flex flex-col gap-1 " + (r ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.attachment ? (0, n.jsx)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl", children: (0, n.jsx)(V.P, { attachment: e.attachment, isReceived: r, onEvent: t, className: "rounded-2xl" }) }) : null, o ? (0, n.jsxs)("div", { className: "flex flex-col px-4 py-2 rounded-2xl gap-3 " + (r ? "bg-gray-200" : "bg-blue-500"), children: [e.replyPreview ? (0, n.jsx)("div", { className: "bg-gray-50 rounded-2xl py-3 px-2 border-l-4 " + (r ? "border-blue-300" : "border-text"), children: (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(c.x, { weight: "medium", children: e.replyPreview.senderDisplayName }), (0, n.jsx)(c.x, { children: e.replyPreview.previewText })] }) }) : null, e.textContent && (0, n.jsx)(Y, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: r })] }) : null] }), (0, n.jsxs)("div", { className: "w-24 flex items-center gap-1 " + (r ? "flex-row" : "flex-row-reverse"), style: { gridArea: "actions" }, children: [(0, n.jsx)(z, { messageFocusedDialog: s, isMessageFocused: l, messageItem: e, onEvent: t, isFromAttachment: !1 }), l && (0, n.jsx)(c.x, { size: "subtext3", color: "gray700", children: (0, ne.H)(e.createdTimestamp.epochSeconds) })] }), (0, n.jsxs)("div", { className: "flex flex-col", style: { gridArea: "message-info" }, children: [e.reactions && e.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(te, { className: "relative -mt-3 ms-2", reactions: e.reactions.asJsReadonlyArrayView() }), e.messageInfo && (0, n.jsx)(G, { messageInfo: e.messageInfo, isReceived: r })] })],
                        }),
                    }),
                });
            }
            var re = t(996762);
            function oe({ sendingStatusItem: e }) {
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(c.x, { size: "subtext2", color: "red500", children: "Failed" }), (0, n.jsx)(re.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            var ie = t(350311);
            const le = ({ typingIndicatorItem: e }) => {
                const s = e.users.asJsReadonlyArrayView().map((e) => e.profileImageUrl || ie.j);
                return (0, n.jsxs)("div", { className: "flex justify-start items-end py-1 px-4", children: [!!s.length && (0, n.jsx)("div", { className: "-m-0.5", children: (0, n.jsx)(d.o, { urls: s, size: "large" }) }), (0, n.jsx)("div", { className: "flex flex-row px-4 py-2 h-9 rounded-2xl ms-2 rounded-es-sm gap-2 bg-gray-200 items-center justify-between", children: [0, 1, 2].map((e) => (0, n.jsx)("div", { className: "animate-pulse duration-1200 w-2 h-2 rounded-full bg-gray-800", style: { animationDelay: (1200 * e) / 3 + "ms" } }, e)) })] });
            };
            function ce({ chatItem: e, messageFocusedDialog: s, onEvent: t }) {
                return e instanceof i.com.x.dms.model.MessageItemReceived || e instanceof i.com.x.dms.model.MessageItemSent || e instanceof i.com.x.dms.model.MessageItemPending ? (0, n.jsx)(ae, { messageItem: e, messageFocusedDialog: s, onEvent: t }) : e instanceof i.com.x.dms.model.SendingStatusItem ? (0, n.jsx)(oe, { sendingStatusItem: e }) : e instanceof i.com.x.dms.model.InformationalItem ? (0, n.jsx)(I, { informationalItem: e }) : e instanceof i.com.x.dms.model.TypingIndicatorItem ? (0, n.jsx)(le, { typingIndicatorItem: e }) : null;
            }
            const de = (0, C.memo)(ce);
            var me = t(960384),
                ue = t(463341);
            const xe = ({ component: e, numItems: s }) => {
                    const { apiRef: t, addOnScrollListener: a } = (0, ue.Nb)(),
                        [r, o] = (0, C.useState)(!1),
                        l = (0, C.useCallback)(() => {
                            const e = t.current;
                            if (!e) return;
                            const s = e.scrollOffset + e.viewportSize;
                            o(s + 30 < e.scrollSize);
                        }, [t.current]);
                    (0, C.useEffect)(() => a(l), [l, a]);
                    const c = (0, C.useCallback)(() => {
                        e.onEvent(i.com.x.dms.chat.DmEvent.ScrollToBottomButtonClicked);
                        const n = t.current;
                        if (!n) return;
                        const a = n.scrollSize - n.scrollOffset - n.viewportSize <= 1e4;
                        n.scrollToIndex(s - 1, { align: "end", smooth: a });
                    }, [e, t.current, s]);
                    return r ? (0, n.jsx)(k.z, { icon: (0, n.jsx)(me.Z, { width: 16, height: 16 }), className: "absolute right-12 bottom-6 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", color: "blue500", onClick: c }) : null;
                },
                ge = i.com.x.dms.model.MessageItemSent,
                he = i.com.x.dms.model.MessageItemReceived,
                fe = i.kotlin.collections.KtList;
            function pe({ component: e }) {
                const s = (0, o._)(e.state),
                    t = (0, C.useMemo)(() => s.chatItems.items.asJsReadonlyArrayView().toReversed(), [s.chatItems]),
                    l = { align: "end" },
                    { apiRef: c, dispatchOnScroll: d } = (0, ue.Nb)(),
                    m = (0, C.useRef)(!0),
                    u = (0, C.useCallback)(() => {
                        if (c.current) {
                            const s = c.current.findStartIndex(),
                                n = c.current.findEndIndex(),
                                a = t
                                    .slice(s, n + 1)
                                    .filter((e) => e instanceof he || e instanceof ge)
                                    .map((e) => e.sequenceNumber);
                            e.onEvent(new i.com.x.dms.chat.DmEvent.VisibleMessagesChanged(n === t.length - 1, fe.fromJsArray(a)));
                        }
                    }, [e, t, c.current]),
                    x = (0, C.useCallback)(() => {
                        c.current?.scrollToIndex(t.length - 1, l), (m.current = !1), u();
                    }, [t, c.current, u]);
                (0, C.useEffect)(() => {
                    x();
                }, [s.convId]),
                    (0, C.useEffect)(() => {
                        m.current || x();
                    }, [x]);
                const g = (s) => {
                    e.onEvent(s);
                };
                return (0, n.jsx)(_.S, {
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
                                              s.chatItems.olderItemsInfo && g(new i.com.x.dms.chat.DmEvent.ScrolledToTop(s.chatItems.olderItemsInfo));
                                          },
                                          renderItem: (e) => {
                                              return (0, n.jsx)(de, { chatItem: e, onEvent: g, messageFocusedDialog: ((t = e.id), s.showingMessageFocusedDialog?.message.id === t ? s.showingMessageFocusedDialog : null) }, e.uniqueKey);
                                              var t;
                                          },
                                      }),
                                      (0, n.jsx)(xe, { component: e, numItems: t.length }),
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
                    this.router.push(`${this.path}/pin/${e}${s ? "/register" : ""}`);
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.1195bdea.js.map
