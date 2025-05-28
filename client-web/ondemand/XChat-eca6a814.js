"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-eca6a814"],
    {
        718278: (e, s, t) => {
            t.d(s, { o: () => o });
            var n = t(552322),
                a = t(436059),
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
        2131: (e, s, t) => {
            t.d(s, { r: () => Ge });
            var n = t(552322),
                a = t(921879),
                r = t(702024),
                i = t(159603),
                o = t(202784),
                l = t(533476),
                c = t(26429),
                d = t(941204),
                m = t(475694),
                u = t(369962),
                x = t(455091);
            const g = i.com.x.dms.model.InformationalItemContents;
            function h({ avatarUrl: e }) {
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
                    const i = s[0],
                        o = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        l = e.sender?.displayName ? ((t = i?.displayName || "Unknown"), (a = s.length - 1), (r = e.sender?.displayName), `${t} and ${a} other were added by ${r}`) : ((e, s) => `${e} and ${s} other were added`)(i?.displayName || "Unknown", s.length - 1);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(m.o, { urls: o }), (0, n.jsx)(p, { message: l })] });
                }
                var t, a, r;
                const i = s[0],
                    o = e.sender?.displayName ? ((e, s) => `${e} was added by ${s}`)(i?.displayName || "Unknown", e.sender?.displayName) : ((e) => `${e} was added`)(i?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(h, { avatarUrl: i?.profileImageUrl }), (0, n.jsx)(p, { message: o })] });
            }
            function j({ contents: e }) {
                const s = e.affectedUsers.asJsReadonlyArrayView();
                if (s.length > 1) {
                    const e = s[0],
                        r = s.flatMap((e) => (e.profileImageUrl ? [e.profileImageUrl] : [])),
                        i = ((t = e?.displayName || "Someone"), (a = s.length - 1), `${t} and ${a} others were removed`);
                    return (0, n.jsxs)("div", { className: "flex flex-col items-center", children: [(0, n.jsx)(m.o, { urls: r }), (0, n.jsx)(p, { message: i })] });
                }
                var t, a;
                const r = s[0],
                    i = ((e) => `${e} was removed`)(r?.displayName || "Unknown");
                return (0, n.jsxs)("div", { className: "flex gap-1", children: [(0, n.jsx)(h, { avatarUrl: r?.profileImageUrl }), (0, n.jsx)(p, { message: i })] });
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
                    i = 0 === s ? ((e) => `${e} turned vanishing mode off`)(r) : ((e, s) => `${e} set vanishing mode to ${(0, u.L)(s)}`)(r, s);
                return (0, n.jsx)(p, { message: i });
            }
            function C({ contents: e }) {
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
                return (0, n.jsx)(p, { message: s });
            }
            function D({ informationalItem: e }) {
                const s = e.contents,
                    { t } = (0, x.$G)();
                return (0, n.jsx)(f, { children: s instanceof g.AddedGroupMembers ? (0, n.jsx)(v, { contents: s }) : s instanceof g.RemovedGroupMembers ? (0, n.jsx)(j, { contents: s }) : s instanceof g.AddedGroupAdmins ? (0, n.jsx)(y, { contents: s }) : s instanceof g.RemovedGroupAdmins ? (0, n.jsx)(w, { contents: s }) : s instanceof g.ChangedGroupTitle ? (0, n.jsx)(b, { contents: s }) : s instanceof g.ChangedGroupAvatar ? (0, n.jsx)(N, { contents: s }) : s instanceof g.DefaultTtlChanged ? (0, n.jsx)(I, { contents: s }) : s instanceof g.DateChanged ? (0, n.jsx)(C, { contents: s }) : s instanceof g.GroupInviteEnabled ? (0, n.jsx)(p, { message: t("Invite link enabled") }) : s instanceof g.GroupInviteDisabled ? (0, n.jsx)(p, { message: t("Invite link disabled") }) : null });
            }
            var k = t(776076),
                R = t(436059),
                S = t(553453),
                E = t(611105),
                M = t(147602),
                $ = t(436995),
                U = t(145731),
                A = t(668631),
                z = t(421018);
            const T = i.com.x.dms.model.ChatMessageAction,
                F = i.com.x.dms.chat.DmEvent,
                P = i.com.x.models.KMPRect;
            function V({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, isFromAttachment: a, onEvent: r }) {
                const i = t || !!s?.longPress,
                    o = s?.longPress
                        ?.getActions()
                        .asJsReadonlyArrayView()
                        .map((e) =>
                            ((e, s) => {
                                const t = () => s(new F.MessageActionClick(e));
                                switch (e) {
                                    case T.Report:
                                    case T.DsaReport:
                                        return null;
                                }
                                return e instanceof T.Reply ? { text: "Reply", icon: (0, n.jsx)(S.Z, {}), onClick: t } : e instanceof T.CancelSend ? { text: "Cancel message", icon: void 0, onClick: t } : e instanceof T.RetrySend ? { text: "Try sending again", icon: (0, n.jsx)(E.Z, {}), onClick: t } : e instanceof T.CopyText ? { text: "Copy message text", icon: (0, n.jsx)(M.Z, {}), onClick: () => navigator.clipboard.writeText(e.text) } : e instanceof T.Edit ? { text: "Edit message", icon: (0, n.jsx)($.Z, {}), onClick: t } : e instanceof T.DeleteForAll ? { text: "Delete for All", icon: (0, n.jsx)(U.Z, {}), destructive: !0, onClick: t } : e instanceof T.DeleteForSelf || e instanceof T.DeletePending ? { text: "Delete for me", icon: (0, n.jsx)(U.Z, {}), destructive: !0, onClick: t } : e instanceof T.MessageDetails ? { text: "Info", icon: (0, n.jsx)(A.Z, {}), onClick: t } : null;
                            })(e, r),
                        )
                        .filter((e) => !!e);
                return (0, n.jsx)("div", {
                    className: `flex self-center items-center gap-2 bg-background border rounded-full p-1 shadow-sm ${!i && "invisible"}`,
                    onClick: (e) => e.stopPropagation(),
                    children: (0, n.jsx)(k.P, {
                        items: o ?? [],
                        trigger: (0, n.jsx)(R.z, { variant: "primaryText", size: "xSmall", icon: (0, n.jsx)(z.Z, {}), color: "gray600" }),
                        open: !!s?.longPress,
                        onOpenChange: (s) => {
                            const t = s ? new F.MessageLongPressed(e, new P(0, 0, 0, 0), a) : F.MessageFocusedDialogDismissed;
                            r(t);
                        },
                    }),
                });
            }
            function J({ user: e, avatarDisplayMode: s }) {
                return e && e.profileImageUrl && "None" !== s.name ? ("AsPadding" === s.name ? (0, n.jsx)("div", { className: "px-4", children: " " }) : (0, n.jsx)("div", { children: (0, n.jsx)(c.q, { url: e.profileImageUrl, size: "large" }) })) : null;
            }
            var G = t(607499),
                Z = t(707513),
                B = t(461222),
                L = t(406125),
                _ = t(189164),
                q = t(242782),
                K = t(38891),
                O = t(336984),
                H = t(703612),
                Y = t(350311),
                X = t(996016),
                W = t(630086);
            function Q({ participants: e }) {
                const { t: s } = (0, x.$G)(),
                    [t, a] = (0, o.useState)(e.slice(0, 2));
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex flex-row gap-2 justify-between items-center",
                            children: [
                                (0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: s("Seen By") }),
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
                        (0, n.jsx)("div", { className: t.length === e.length ? "max-h-[300px] overflow-y-auto" : "", children: (0, n.jsx)(W.I, { className: "mt-2", children: (0, n.jsx)(X.b, { participants: t, menuItemsMap: new Map(), handleParticipantClicked: () => {}, handleParticipantMenuButtonClicked: () => {} }) }) }),
                    ],
                });
            }
            const ee = ({ participant: e }) => (e && e.user ? (0, n.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, n.jsx)(Y.s, { url: e.user.profileImageUrl, size: "medium" }), (0, n.jsx)(H.R, { name: e.user.displayName, badges: (0, O.r)(e.user), weight: "normal" })] }) : null);
            function se({ messageDetailsState: e, onDismiss: s }) {
                const { t } = (0, x.$G)(),
                    a = (0, l._)(e),
                    [r, i] = (0, o.useState)(!1),
                    c = a?.details?.item?.messageInfo?.showReadUsers?.asJsReadonlyArrayView() || [],
                    m = (0, o.useRef)(r);
                return (
                    (0, o.useEffect)(() => {
                        i(!!a);
                    }, [a]),
                    (0, n.jsx)(L.h, {
                        open: r,
                        onOpenChange: (e) => {
                            i(e), m.current && !e && s(), (m.current = !0);
                        },
                        trigger: (0, n.jsx)("div", {}),
                        children: (0, n.jsx)("div", { className: "p-4 max-w-[750px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: a?.details && (0, n.jsxs)("div", { className: "flex flex-col gap-2 mt-2", children: [c.length > 0 && (0, n.jsx)(Q, { participants: c }), (0, n.jsx)("div", { className: "flex flex-row gap-2", children: (0, n.jsx)(d.x, { size: "subtext1", weight: "medium", children: t("Sent By") }) }), (0, n.jsx)("div", { className: "px-4 rounded-xl bg-gray-0", children: (0, n.jsx)(ee, { participant: a.details.sentBy }) })] }) }),
                    })
                );
            }
            function te({ messageInfo: e, isReceived: s, showSignatureVerificationIssuesIcon: t }) {
                const a = e.showReadUsers?.asJsReadonlyArrayView().map((e) => e.user?.profileImageUrl || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") || [],
                    r = (0, K.zo)().isTrue("xchat_read_receipt_facepile") && a.length > 1,
                    [i, l] = (0, o.useState)(!1),
                    c = e.showReadUsers?.asJsReadonlyArrayView() || [];
                return e.showReadUsers || e.showEdited || t ? (0, n.jsxs)("div", { className: `flex gap-1 items-center ${s ? "justify-start" : "justify-end"} mx-1 `, children: [e.showEdited && (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: "Edited" }), e.showEdited && e.showReadUsers && !r ? (0, n.jsx)(B.A, {}) : null, t && (0, n.jsx)(_.Z, {}), t && e.showReadUsers && (0, n.jsx)(B.A, {}), e.showReadUsers ? (0, n.jsx)(L.h, { open: i, onOpenChange: l, trigger: (0, n.jsxs)("div", { className: "flex items-center cursor-pointer gap-1", children: [r ? (0, n.jsx)(m.o, { urls: a, size: "small", spacing: 6, stackOrder: "ascending" }) : (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: "Read" }), (0, n.jsx)("div", { className: "p-0.5 bg-background rounded-full z-20 " + (r ? "-ms-[12px]" : "-ms-[2px]"), children: (0, n.jsx)(q.Z, { width: "16", height: "16", viewBox: "1.75 1.75 20.5 20.5", className: "text-gray-700" }) })] }), children: (0, n.jsx)("div", { className: "p-4 max-w-[500px] min-w-[300px] mx-auto border border-gray-200 rounded-lg", children: (0, n.jsx)(Q, { participants: c }) }) }) : null] }) : null;
            }
            var ne = t(515790),
                ae = t(862399);
            const re = ({ isReceived: e, textContent: s, textEntities: t, hasTTL: a = !1 }) => {
                    const r = {};
                    return t.forEach((e) => ie(e, r)), (0, n.jsxs)("div", { className: "flex flex-row items-end justify-end gap-3 relative", children: [(0, n.jsx)(ae.W, { color: e ? "text" : "white", entities: r, linkColor: e ? void 0 : "white", text: s, underlineLinks: !e || void 0 }), a && (0, n.jsx)("div", { children: (0, n.jsx)("div", { className: "absolute -bottom-0.5 -right-2", children: (0, n.jsx)(ne.Z, { className: "w-3.5 h-3.5 " + (e ? "text-text/60" : "text-white/60") }) }) })] });
                },
                ie = (e, s) => {
                    const t = [e.startIdx, e.endIdx];
                    e instanceof i.com.x.models.text.AddressEntity || (e instanceof i.com.x.models.text.MentionEntity ? (s.mentions || (s.mentions = []), s.mentions.push({ screenName: e.screenName, indices: t })) : e instanceof i.com.x.models.text.UrlEntity ? (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.displayUrl, url: oe(e.url), indices: t })) : e instanceof i.com.x.models.text.EmailEntity ? (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.email, url: le(e.email), indices: t })) : e instanceof i.com.x.models.text.HashtagEntity ? (s.hashtags || (s.hashtags = []), s.hashtags.push({ text: e.text, indices: t })) : e instanceof i.com.x.models.text.CashtagEntity ? (s.symbols || (s.symbols = []), s.symbols.push({ text: e.text, indices: t })) : e instanceof i.com.x.models.text.PhoneNumberEntity && (s.urls || (s.urls = []), s.urls.push({ displayUrl: e.phoneNumberForTelLink, url: `tel:${e.phoneNumberForTelLink}`, indices: t })));
                };
            function oe(e) {
                return /^https?:\/\//i.test(e) ? e : `https://${e}`;
            }
            function le(e) {
                return /^mailto:/i.test(e) ? e : `mailto:${e}`;
            }
            var ce = t(86781),
                de = t(853425);
            const me = ({ remainingReactions: e }) => {
                    const s = (0, o.useRef)(null),
                        t = (0, de.X)(s);
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(ce.J, { open: t, side: "top", trigger: (0, n.jsx)("div", { ref: s, className: "inline-flex items-center bg-gray-50 rounded-full px-2 pt-0.5 shadow-sm gap-1 border border-background cursor-pointer", children: (0, n.jsx)(d.x, { size: "body", children: "…" }) }), children: (0, n.jsx)("div", { className: "grid grid-cols-9 gap-2 p-2 border border-border rounded-lg bg-background shadow-lg", children: e.map((e) => (0, n.jsx)("div", { children: (0, n.jsxs)(d.x, { size: "subtext2", children: [e.reaction, " ", e.users.asJsReadonlyArrayView().length] }) }, e.reaction)) }) }) });
                },
                ue = ({ emoji: e, count: s, users: t }) => {
                    const a = (0, o.useRef)(null),
                        r = (0, de.X)(a),
                        i = t.map((e) => e.name),
                        l = i.length > 1 ? `${i.slice(0, -1).join(", ")} and ${i[i.length - 1]}` : i[0];
                    return (0, n.jsx)("div", { className: "relative", children: (0, n.jsx)(ce.J, { open: r, side: "top", trigger: (0, n.jsxs)("div", { ref: a, className: "inline-flex items-center bg-gray-50 rounded-full px-2 pt-0.5 shadow-sm gap-1 border border-background cursor-pointer", children: [(0, n.jsx)(d.x, { size: "body", children: e }), s > 1 && (0, n.jsx)(d.x, { size: "subtext2", weight: "bold", color: "gray700", children: s })] }), children: (0, n.jsx)("div", { className: "p-2 border border-border rounded-lg bg-background shadow-lg", children: (0, n.jsxs)(d.x, { size: "subtext2", weight: "medium", children: [l, " reacted with ", e] }) }) }) });
                },
                xe = ({ reaction: e }) => (0, n.jsx)(ue, { emoji: e.reaction, count: e.users.asJsReadonlyArrayView().length, users: e.users.asJsReadonlyArrayView() }),
                ge = ({ isReceived: e, reactions: s }) => {
                    const t = s.slice(4);
                    return (0, n.jsxs)("div", { className: `relative flex ${e ? "flex-row-reverse" : "flex-row"} gap-1 justify-end -mt-3 mx-3`, children: [s.slice(0, 4).map((e) => (0, n.jsx)(xe, { reaction: e }, e.reaction)), t.length > 0 && (0, n.jsx)(me, { remainingReactions: t })] });
                };
            var he = t(167285),
                pe = t(407602),
                fe = t(840489),
                ve = t(718130),
                je = t(463341);
            const ye = i.com.x.dms.chat.DmEvent,
                we = i.com.x.models.KMPRect,
                be = ({ messageItem: e, messageFocusedDialog: s, isMessageFocused: t, onEvent: a }) => {
                    const [r, l] = (0, o.useState)(!1),
                        [c, m] = (0, o.useState)(!1);
                    if (!t && !s?.quickReactions) return null;
                    const u = s?.quickReactions?.asJsReadonlyArrayView().map((e) => e.asJsReadonlyArrayView());
                    return (0, n.jsx)(ce.J, {
                        borderRadius: "2xLarge",
                        trigger: (0, n.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, n.jsx)(R.z, {
                                variant: "primaryText",
                                size: "small",
                                color: "red600",
                                icon: (0, n.jsx)(pe.Z, {}),
                                onClick: () => {
                                    null === s ? (l(!0), a(new ye.MessageDoubleClicked(e, new we(0, 0, 0, 0), !1))) : (l(!1), a(ye.MessageFocusedDialogDismissed));
                                },
                            }),
                        }),
                        open: null !== s && r,
                        onOpenChange: (e) => {
                            !e && r && (a(ye.MessageFocusedDialogDismissed), l(!1), m(!1));
                        },
                        children: (0, n.jsx)("div", {
                            className: "relative flex flex-col",
                            children: c
                                ? (0, n.jsx)(je.Bu, {
                                      children: (0, n.jsx)(ve.h, {
                                          onReactionClicked: (s) => {
                                              const t = new i.com.x.dms.model.ReactionPickerItem(s, !1);
                                              a(new ye.ReactionPickerItemClick(t, e)), a(ye.MessageFocusedDialogDismissed), l(!1), m(!1);
                                          },
                                          recentlyUsedEmojis: s?.quickReactions?.asJsReadonlyArrayView().flatMap((e) => e.asJsReadonlyArrayView().map((e) => e.emoji)) || [],
                                      }),
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: "flex flex-col p-1 rounded-2xl border",
                                              children: u?.map((s, t) =>
                                                  (0, n.jsx)(
                                                      "div",
                                                      {
                                                          className: "flex",
                                                          children: s.map((s) =>
                                                              (0, n.jsx)(
                                                                  "button",
                                                                  {
                                                                      type: "button",
                                                                      className: (0, fe.Z)("w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100", { "bg-gray-50": s.isSelected }),
                                                                      onClick: () => {
                                                                          a(new ye.ReactionPickerItemClick(s, e));
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
                                          (0, n.jsx)("div", {
                                              className: "absolute bottom-0 right-0 bg-background m-1",
                                              children: (0, n.jsx)("button", {
                                                  type: "button",
                                                  className: "w-8 h-8 rounded flex items-center justify-center hover:bg-gray-100",
                                                  onClick: () => {
                                                      a(ye.MessageReactionsClicked), m(!0);
                                                  },
                                                  children: (0, n.jsx)(z.Z, {}),
                                              }),
                                          }),
                                      ],
                                  }),
                        }),
                    });
                };
            var Ne = t(784344),
                Ie = t(617092),
                Ce = t(289752),
                De = t(791266);
            const ke = i.com.x.dms.chat.DmEvent,
                Re = ({ isReceived: e, replyPreview: s, replierInfo: t, onEvent: a }) => {
                    const r = t.id,
                        { senderId: o } = s,
                        l = t.displayName,
                        c = s.senderDisplayName,
                        m = (0, n.jsx)(d.x, { as: "span", className: "text-text/70", size: "subtext2" }),
                        u = (0, n.jsx)(x.cC, { i18nKey: "<highlight>{replier}</highlight> to you", values: { replier: l }, components: { highlight: m } }),
                        g = (0, n.jsx)(x.cC, { i18nKey: "<highlight>{replier}</highlight> to {sender}", values: { replier: l, sender: c }, components: { highlight: m } }),
                        h = (0, n.jsx)(x.cC, { i18nKey: "<highlight>{replier}</highlight> to themself", values: { replier: l }, components: { highlight: m } }),
                        p = (0, n.jsx)(x.cC, { i18nKey: "<highlight>You</highlight> to yourself", components: { highlight: m } }),
                        f = (0, n.jsx)(x.cC, { i18nKey: "<highlight>You</highlight> to {sender}", values: { sender: c }, components: { highlight: m } }),
                        v = r.equals(o) ? (s.senderIsCurrentUser ? p : h) : s.senderIsCurrentUser ? u : e ? g : f;
                    return (0, n.jsxs)("div", { className: `flex flex-col mt-0.5 gap-1 ${e ? "items-start" : "items-end"} cursor-pointer`, onClick: () => s.sequenceNumber && a(new ke.ReplyBubbleClicked(s.sequenceNumber)), children: [s.showReplyNames && (0, n.jsxs)("div", { className: "flex gap-1 px-2 " + (e ? "text-start" : "text-end"), children: [(0, n.jsx)(Ne.Z, { className: "inline-block text-text/70" }), (0, n.jsx)(d.x, { as: "span", className: "text-text/40", size: "subtext2", children: v })] }), s.attachment && (s.attachment instanceof i.com.x.dms.model.MessageItemAttachment.Media && s.attachment.type === i.com.x.models.dm.DmMediaType.File ? (0, n.jsx)(Ie.K, { filename: s.attachment.filename, fileSize: s.attachment.fileSize }) : s.attachment instanceof i.com.x.dms.model.MessageItemAttachment.Media.FromServer && s.attachment.uriState instanceof i.com.x.dms.model.MediaUriState.ResolvedMedia && (0, n.jsx)(Ce.Et, { src: s.attachment.uriState.uri, type: s.attachment.type, dimensions: s.attachment.dimensions, className: "rounded-2xl !w-[25%] !h-[25%]" })), s.attachment instanceof i.com.x.dms.model.MessageItemAttachment.UrlCard && (0, n.jsx)(De.C, { urlCard: s.attachment }), s.previewText && (0, n.jsx)("div", { className: "flex flex-col px-3 py-1.5 rounded-2xl gap-3 border " + (s.senderIsCurrentUser ? "border-primary/50" : "border-gray-400"), children: (0, n.jsx)(d.x, { color: s.senderIsCurrentUser ? "primary" : "gray900", size: "subtext1", numberOfLines: 2, children: s.previewText }) })] });
                };
            var Se = t(469745);
            function Ee({ messageItem: e, messageFocusedDialog: s, showMessageInfoDialog: t, messageInfoDialog: a, messageInfoDialogDismissed: r, onEvent: l }) {
                const { t: c } = (0, x.$G)(),
                    m = (0, Se.a)("(max-width: 768px)"),
                    u = e instanceof i.com.x.dms.model.MessageItemReceived,
                    g = null !== e.textContent && !e.supersizeEmoji,
                    [h, p] = (0, o.useState)(!1),
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
                    v = ((j = e.avatarDisplayMode), (y = e.burstState), (w = e.replyPreview), "None" !== j.name && (y === i.com.x.dms.model.MessageBurstState.First || y === i.com.x.dms.model.MessageBurstState.Solo) && !w);
                var j, y, w;
                const b = !!e.messageInfo?.timeToLive;
                return (0, n.jsxs)(G.S, {
                    message: c("Couldn't load message"),
                    children: [
                        u && v && (0, n.jsx)("div", { className: "px-16", children: (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: e.senderInfo?.user?.displayName }) }),
                        (0, n.jsx)("div", {
                            className: `flex ${u ? "justify-start" : "justify-end"} ${f} px-4`,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            onClick: () => p(!0),
                            children: (0, n.jsxs)("div", {
                                className: `grid gap-x-2 gap-y-0.5 ${m ? "max-w-full" : "max-w-[calc(55%+128px)]"} grid-cols-[auto_auto_auto_auto] items-center`,
                                style: { gridTemplateAreas: u ? '\n                  "avatar content actions"\n                  ". message-info ."\n                ' : '\n                  "actions content avatar"\n                  ". message-info ."\n                ' },
                                children: [
                                    (0, n.jsx)("div", { className: "self-end", style: { gridArea: "avatar" }, children: e.senderInfo?.user && (0, n.jsx)(J, { avatarDisplayMode: e.avatarDisplayMode, user: e.senderInfo?.user }) }),
                                    (0, n.jsxs)("div", { className: "flex flex-col gap-1 " + (u ? "items-start" : "items-end"), style: { gridArea: "content" }, children: [e.replyPreview && e.senderInfo && e.senderInfo.user && (0, n.jsx)(Re, { replyPreview: e.replyPreview, replierInfo: e.senderInfo.user, isReceived: u, onEvent: l }), e.attachment ? (0, n.jsxs)("div", { className: "flex max-w-1/3 overflow-hidden rounded-2xl relative", children: [(0, n.jsx)(Z.P, { attachment: e.attachment, isReceived: u, onEvent: l, className: "rounded-2xl" }), b && !g && (0, n.jsx)("div", { className: "absolute bottom-2 right-2 rounded-full text-gray-700 shadow-md", children: (0, n.jsx)(ne.Z, { className: "w-4 h-4" }) })] }) : null, e.supersizeEmoji && (0, n.jsx)(d.x, { size: "title2", className: "px-1 tracking-widest", children: e.textContent }), g ? (0, n.jsx)("div", { className: "px-4 py-2 rounded-2xl " + (e.supersizeEmoji ? "" : u ? "bg-gray-100" : "bg-blue-500"), children: e.textContent && (0, n.jsx)(re, { textContent: e.textContent, textEntities: e.textEntities.asJsReadonlyArrayView(), isReceived: u, hasTTL: b }) }) : null] }),
                                    (0, n.jsxs)("div", {
                                        className: `${m ? "w-16" : "w-32"} flex items-center gap-1 ${u ? "flex-row" : "flex-row-reverse"}`,
                                        style: { gridArea: "actions" },
                                        children: [
                                            (0, n.jsx)(be, { messageItem: e, messageFocusedDialog: s, isMessageFocused: h, onEvent: l }),
                                            (0, n.jsx)(V, { messageFocusedDialog: s, isMessageFocused: h, messageItem: e, onEvent: l, isFromAttachment: !1 }),
                                            t &&
                                                (0, n.jsx)(se, {
                                                    onDismiss: () => {
                                                        r();
                                                    },
                                                    messageDetailsState: a,
                                                }),
                                            h && !m && (0, n.jsx)(d.x, { size: "subtext3", color: "gray700", children: (0, he.H)(e.createdTimestamp.epochSeconds) }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", { className: "flex flex-col", style: { gridArea: "message-info" }, children: [e.reactions && e.reactions.asJsReadonlyArrayView().length > 0 && (0, n.jsx)(ge, { isReceived: u, reactions: e.reactions.asJsReadonlyArrayView() }), e.messageInfo && (0, n.jsx)(te, { messageInfo: e.messageInfo, showSignatureVerificationIssuesIcon: e.showSignatureVerificationIssuesIcon, isReceived: u })] }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            function Me({ sendingStatusItem: e }) {
                return "Failed" === e.status.name ? (0, n.jsxs)("div", { className: "flex justify-end py-1 px-4 gap-1 me-2", children: [(0, n.jsx)(d.x, { size: "subtext2", color: "red500", children: "Failed" }), (0, n.jsx)(A.Z, { width: "14", height: "14", className: "text-red-500" })] }) : null;
            }
            function $e({ chatItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: r, messageInfoDialogDismissed: o }) {
                return e instanceof i.com.x.dms.model.MessageItemReceived || e instanceof i.com.x.dms.model.MessageItemSent || e instanceof i.com.x.dms.model.MessageItemPending ? (0, n.jsx)(Ee, { messageItem: e, messageFocusedDialog: s, onEvent: t, showMessageInfoDialog: a, messageInfoDialog: r, messageInfoDialogDismissed: o }) : e instanceof i.com.x.dms.model.SendingStatusItem ? (0, n.jsx)(Me, { sendingStatusItem: e }) : e instanceof i.com.x.dms.model.InformationalItem ? (0, n.jsx)(D, { informationalItem: e }) : null;
            }
            const Ue = (0, o.memo)($e);
            var Ae = t(97759);
            const ze = ({ component: e, numItems: s, composerHeight: t }) => {
                const { apiRef: a, addOnScrollListener: r } = (0, je.Nb)(),
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
                return l ? (0, n.jsx)(R.z, { icon: (0, n.jsx)(Ae.Z, { width: 16, height: 16 }), className: "z-20 absolute right-12 bg-gray-50 w-8 h-8 rounded-3xl flex items-center justify-center text-blue-500", style: { bottom: t + 24 }, color: "blue500", onClick: m }) : null;
            };
            var Te = t(676337);
            const Fe = i.com.x.dms.chat.DmEvent,
                Pe = i.com.x.dms.model.MessageItemSent,
                Ve = i.com.x.dms.model.MessageItemReceived,
                Je = i.kotlin.collections.KtList;
            function Ge({ component: e, isTypingIndicatorShown: s, composerHeight: t }) {
                const c = (0, l._)(e.state),
                    d = (0, o.useMemo)(() => c.chatItems.items.asJsReadonlyArrayView().toReversed(), [c.chatItems]),
                    m = (0, Te.H)(),
                    u = c.showingMessageDetailsBottomSheet?.id ?? "",
                    { apiRef: x, dispatchOnScroll: g } = (0, je.Nb)(),
                    h = (0, o.useRef)(!1),
                    p = (0, o.useMemo)(() => e.observeMessageDetails(u), [e, u]),
                    f = (0, o.useCallback)(() => {
                        if (x.current && m) {
                            const s = x.current.findStartIndex(),
                                t = x.current.findEndIndex(),
                                n = d
                                    .slice(s, t + 1)
                                    .filter((e) => e instanceof Ve || e instanceof Pe)
                                    .map((e) => e.sequenceNumber);
                            e.onEvent(new i.com.x.dms.chat.DmEvent.VisibleMessagesChanged(t === d.length - 1, Je.fromJsArray(n)));
                        }
                    }, [e, d, x.current, m]),
                    v = (0, o.useCallback)(() => {
                        x.current?.scrollToIndex(d.length - 1, { align: "end", offset: t }), (h.current = !1), f();
                    }, [d, x.current, f, t]);
                (0, o.useEffect)(() => {
                    v();
                }, [c.convId]),
                    (0, o.useEffect)(() => {
                        h.current || v();
                    }, [v, s]);
                const j = (s) => {
                    e.onEvent(s);
                };
                return (
                    (0, o.useEffect)(() => {
                        if (c.requestScrollTo && x.current) {
                            const e = { align: "center", smooth: !0 };
                            x.current?.scrollToIndex?.(d.length - c.requestScrollTo.index, e), (h.current = !1), f();
                        }
                    }, [c.requestScrollTo, d, x.current, f]),
                    (0, n.jsx)(G.S, {
                        children: (0, n.jsx)("div", {
                            className: "relative h-full",
                            children: d
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(a.T, {
                                              api: x,
                                              className: "!h-full scrollbar-thin-custom",
                                              items: d,
                                              onScroll: (e, s) => {
                                                  x.current && (0 !== e && "backward" === s && d.length - 3 > x.current.findEndIndex() && (h.current = !0), f()), g(e, s);
                                              },
                                              onNearEnd: () => {
                                                  h.current = !1;
                                              },
                                              onAtStart: () => {
                                                  c.chatItems.olderItemsInfo && j(new i.com.x.dms.chat.DmEvent.ScrolledToTop(c.chatItems.olderItemsInfo));
                                              },
                                              renderItem: (s) => {
                                                  return (0, n.jsx)(
                                                      Ue,
                                                      {
                                                          chatItem: s,
                                                          onEvent: j,
                                                          messageFocusedDialog: ((t = s.id), c.showingMessageFocusedDialog?.message.id === t ? c.showingMessageFocusedDialog : null),
                                                          showMessageInfoDialog: u === s.id,
                                                          messageInfoDialog: p,
                                                          messageInfoDialogDismissed: () => {
                                                              e.onEvent(Fe.MessageDetailsDismissed);
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
                                          (0, n.jsx)(ze, { component: e, numItems: d.length, composerHeight: t }),
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
                a = t(475694),
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
                    this.router.push(`${this.path}/pin/${e}/${s?.shouldRegister ? "register" : "skip"}/${s?.shouldGenerate ? "enabled" : "disabled"}`);
                }
                toGroupInvite(e) {
                    this.router.push(`${this.path}/${i(e)}/group-invite`);
                }
                toEditGroup(e) {
                    this.router.push(`${this.path}/${i(e)}/info/edit-group`);
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
            t.d(s, { l: () => a });
            var n = t(727071);
            function a() {
                return "enabled" === (0, n.U)().generate;
            }
        },
        867400: (e, s, t) => {
            t.d(s, { a: () => a });
            var n = t(727071);
            function a() {
                return "register" === (0, n.U)().register;
            }
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
                c = t(702024),
                d = t(941204),
                m = t(436059),
                u = t(887390),
                x = t(921879),
                g = t(368301),
                h = t(379342),
                p = t(533476),
                f = t(658358),
                v = t(164695),
                j = t(272795),
                y = t(620134);
            const w = r.com.x.dms.newdm,
                b = r.com.x.dms.mapToValueList,
                N = ({ onVisibilityChange: e }) => {
                    const [s, t] = (0, a.useState)(null),
                        i = (0, g.n)(),
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
                        (0, n.jsx)(v.Vq, { open: !0, onOpenChange: e, children: s ? (0, n.jsx)(I, { component: s }) : (0, n.jsx)("div", { className: "h-full flex items-center", children: (0, n.jsx)(c.P, {}) }) })
                    );
                },
                I = ({ component: e }) => {
                    const s = (0, p._)(e.state);
                    (0, f.e)(e.toasts);
                    const t = b(s.selectedGroupUsers).asJsReadonlyArrayView(),
                        a = s.suggestions.asJsReadonlyArrayView(),
                        g = (s) => () => {
                            e.onEvent(new w.NewDmEvent.DeleteSelectedGroupUser(s));
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
                                                (0, n.jsxs)("div", { className: "flex flex-col", children: [(0, n.jsx)(v.$N, { className: "text-headline1 font-extrabold", children: s.isCreateGroupMode ? "Create a group" : "New message" }), s.isCreateGroupMode && (0, n.jsx)(d.x, { color: "gray700", children: "Add people" })] }),
                                                (0, n.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => {
                                                        e.onEvent(w.NewDmEvent.BackButtonClicked);
                                                    },
                                                    className: "p-1 text-gray-700",
                                                    children: (0, n.jsx)(i.Z, { className: "size-6" }),
                                                }),
                                            ],
                                        }),
                                        s.isCreateGroupMode &&
                                            (0, n.jsx)(m.z, {
                                                onClick: () => {
                                                    e.onEvent(w.NewDmEvent.CreateButtonClicked);
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
                                            e.onEvent(new w.NewDmEvent.QueryChanged(s.target.value));
                                        },
                                        borderRadius: "xLarge",
                                        className: "bg-gray-0 focus-within:bg-transparent",
                                        inputClassName: "placeholder:text-gray-700",
                                        leftContent: (0, n.jsx)(o.Z, { className: "h-5 w-5 text-gray-700" }),
                                    }),
                                }),
                                t.length > 0 && (0, n.jsx)("div", { className: "flex flex-row flex-wrap gap-1 p-1", children: t.map((e) => (0, n.jsx)(y.w, { avatarUrl: e.profileImageUrl, name: e.displayName, onRemove: g(e.id) }, e.id.userIdString)) }),
                                (0, n.jsxs)("div", { className: "max-h-[32rem] overflow-hidden", children: [!s.isCreateGroupMode && (0, n.jsxs)("div", { className: "flex flex-row items-center gap-3.5 ps-3 py-2.5 hover:bg-gray-50 cursor-pointer rounded-lg", onClick: () => e.onEvent(w.NewDmEvent.CreateAGroupItemClicked), children: [(0, n.jsx)(l.Z, { className: "text-blue-500 size-6" }), (0, n.jsx)(d.x, { size: "body", color: "blue500", weight: "bold", children: "Create a group" })] }), s.isCreateConversationCallInProgress || 0 === a.length ? (0, n.jsx)("div", { className: "pt-8 h-[24rem]", children: (0, n.jsx)(c.P, {}) }) : (0, n.jsx)(x.T, { className: "max-h-[24rem] scrollbar-thin-custom", items: a, renderItem: (t) => (0, n.jsx)(j.c, { onClick: () => e.onEvent(new w.NewDmEvent.SuggestionClicked(t)), suggestion: t, isSelected: t instanceof r.com.x.dms.NewDmSuggestion.User && s.selectedGroupUsers.asJsReadonlyMapView().has(t.user.id) }) })] }),
                            ],
                        }),
                    });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-eca6a814.74bee68a.js.map
