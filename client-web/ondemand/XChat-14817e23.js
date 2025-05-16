"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-14817e23"],
    {
        264531: (e, t, n) => {
            n.d(t, { BH: () => c, XE: () => l, mp: () => r, xq: () => d });
            var s = n(552322),
                i = n(202784);
            const a = { path: "/dms", showDebugOptions: !1, logLevel: "ERROR" },
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
            function d() {
                return l().logLevel;
            }
        },
        292317: (e, t, n) => {
            n.d(t, { Q: () => Ve });
            var s = n(552322),
                i = n(159603),
                a = n(455091),
                o = n(941204),
                r = n(702024),
                l = n(202784),
                c = n(436059),
                d = n(720640),
                m = n(952333),
                x = n(29632),
                u = n(990714),
                h = n(533476),
                p = n(658358),
                v = n(950849),
                f = n(595117),
                g = n(607499);
            function j({ replyingTo: e, onRemoveReply: t }) {
                return (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, s.jsxs)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", e.senderInfo.user.displayName] }) : null, (0, s.jsx)(o.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, s.jsx)(c.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: t })] });
            }
            var w = n(556160),
                b = n(517922),
                C = n(83083),
                y = n(289752);
            function k({ media: e }) {
                const [t, n] = (0, l.useState)(null);
                return (
                    (0, l.useEffect)(() => {
                        e.media.previewUri &&
                            i.com.x.dms.getUrlFromUri(e.media.previewUri).then((e) => {
                                e && n(e);
                            });
                    }, [e.media.previewUri]),
                    e.shouldRender ? (e.shouldRender && t ? (0, s.jsx)("div", { className: "flex overflow-hidden rounded-2xl", children: (0, s.jsx)(y.Et, { src: t, type: i.com.x.models.dm.DmMediaType.Companion.from(e.media.mediaType), dimensions: e.media.dimension }) }) : (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Media" })) : null
                );
            }
            function N({ attachment: e, onRemoveAttachment: t }) {
                if (!e.shouldRender) return null;
                let n = null;
                if (e === i.com.x.models.dm.ChatComposerAttachment.Loading) n = (0, s.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, s.jsx)(r.P, {}) });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Media) n = (0, s.jsx)(k, { media: e });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Post) n = e.post ? (0, s.jsx)(w.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, s.jsx)(b.C, {});
                else {
                    if (e instanceof i.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof i.com.x.models.dm.ChatComposerAttachment.File && (n = (0, s.jsx)(C.Q, { className: "rounded-2xl mb-2", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return (0, s.jsxs)("div", { className: "flex flex-col max-w-[300px] gap-2 relative", children: [n, e.showRemoveButton && (0, s.jsx)("div", { className: "absolute top-2 right-2 flex items-center", children: (0, s.jsx)(c.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: t }) })] });
            }
            var E = n(82458);
            const I = i.com.x.dms.composer.composer.RightButtonState,
                S = i.com.x.dms.composer.composer.ChatComposerEvent;
            function A({ component: e }) {
                const { t } = (0, a.$G)(),
                    n = (0, h._)(e.composer.state),
                    r = (0, l.useRef)(null),
                    w = (0, l.useRef)(null);
                (0, p.e)(e.composer.toasts);
                const b = (0, l.useCallback)(() => {
                        r.current?.focus();
                    }, []),
                    C = e.composer.triggerComposerFocusEvents;
                (0, v.E)(C, b),
                    (0, l.useEffect)(() => {
                        b();
                    }, [e]);
                const y = () => {
                        n.rightButton === I.SendActive && e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(n.rightButton));
                    },
                    k = (0, l.useCallback)(
                        async (t) => {
                            await (0, f.$)(
                                t,
                                () => e.composer.onEvent(S.OnFileAttachmentStarted),
                                (t) => e.composer.onEvent(new S.OnFileAttached(t)),
                            );
                        },
                        [e.composer],
                    );
                return (0, s.jsx)(g.S, {
                    children: (0, s.jsx)("div", {
                        className: "bg-background w-full p-2",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                n.isEditing ? (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [(0, s.jsx)(d.Z, {}), (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, s.jsx)(c.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                n.replyingTo ? (0, s.jsx)(j, { replyingTo: n.replyingTo, onRemoveReply: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, s.jsxs)("div", {
                                    className: "flex items-end gap-2 w-full backdrop-blur-md bg-background/80",
                                    children: [
                                        (0, s.jsx)("input", {
                                            type: "file",
                                            ref: w,
                                            onChange: async (e) => {
                                                const t = e.target.files?.[0];
                                                t && (await k(t));
                                            },
                                            className: "hidden",
                                            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt",
                                        }),
                                        (0, s.jsx)(c.z, {
                                            size: "small",
                                            disabled: !n.canAddAttachment,
                                            icon: (0, s.jsx)(x.Z, {}),
                                            onClick: () => {
                                                w.current?.click();
                                            },
                                            className: "bg-gray-100 mb-1",
                                        }),
                                        (0, s.jsx)("form", {
                                            onSubmit: (e) => {
                                                e.preventDefault();
                                            },
                                            onPaste: async (e) => {
                                                if (!n.canAddAttachment) return;
                                                const t = e.clipboardData?.items;
                                                if (t)
                                                    for (const n of t)
                                                        if ("file" === n.kind) {
                                                            e.preventDefault();
                                                            const t = n.getAsFile();
                                                            if (!t) continue;
                                                            await k(t);
                                                            break;
                                                        }
                                            },
                                            className: "flex-1",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-end gap-2 w-full px-2 overflow-hidden placeholder:text-gray-800 rounded-3xl border-2 border-solid border-gray-200",
                                                children: [
                                                    (0, s.jsxs)("div", {
                                                        className: "flex flex-col justify-end grow py-2",
                                                        children: [
                                                            n.attachment ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(N, { attachment: n.attachment, onRemoveAttachment: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }), (0, s.jsx)("div", { className: "w-full h-px bg-gray-200" })] }) : null,
                                                            (0, s.jsx)(E.o, {
                                                                className: "max-h-60",
                                                                multiline: !0,
                                                                value: n.currentText,
                                                                onKeyDown: (e) => {
                                                                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), y());
                                                                },
                                                                onChange: (t) => {
                                                                    e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.target.value));
                                                                },
                                                                placeholder: t("Message"),
                                                                ref: r,
                                                            }),
                                                        ],
                                                    }),
                                                    n.rightButton !== I.SendInactive ? (0, s.jsx)(c.z, { className: "mb-1", onClick: y, icon: (0, s.jsx)(u.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }
            var R = n(762670),
                M = n(490003),
                z = n(501827),
                P = n(521634),
                T = n(861514),
                B = n(964655),
                G = n(898100),
                D = n(611463),
                L = n(379342),
                Z = n(846742),
                F = n(350311),
                O = n(336984);
            const U = ({ handleParticipantMenuButtonClicked: e, participant: t }) => {
                    const { t: n } = (0, a.$G)();
                    return (0, s.jsx)("div", { className: "flex flex-row gap-2", children: (0, s.jsx)(c.z, { variant: "primaryFilled", onClick: () => e(i.com.x.dms.ParticipantMenuItem.AcceptMembership, t), children: n("Add to group") }) });
                },
                V = ({ handleParticipantMenuButtonClicked: e, participants: t }) => (0, s.jsx)(s.Fragment, { children: t.map((t) => (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 py-2 items-center", children: [(0, s.jsx)(F.s, { url: t.user?.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(B.R, { name: t.user?.displayName || "", screenName: t.user?.screenName, badges: (0, O.r)(t.user), isStacked: !0 }) }), (0, s.jsx)(U, { participant: t, handleParticipantMenuButtonClicked: e })] }, t.userId.userIdString)) });
            var $ = n(776604),
                J = n(291680),
                _ = n(866426),
                q = n(327176),
                X = n(848553);
            const W = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, menuItems: n, participant: a }) => {
                    if (!n || 0 === n.length) return null;
                    const o = n
                        .map((e) =>
                            ((e, t, n) => {
                                const a = () => {
                                    n(e, t);
                                };
                                switch (e) {
                                    case i.com.x.dms.ParticipantMenuItem.AddAsAdmin:
                                        return { text: "Add as admin", icon: (0, s.jsx)(J.Z, {}), onClick: a };
                                    case i.com.x.dms.ParticipantMenuItem.RemoveAsAdmin:
                                        return { text: "Remove as admin", icon: (0, s.jsx)(_.Z, {}), destructive: !0, onClick: a };
                                    case i.com.x.dms.ParticipantMenuItem.RemoveFromGroup:
                                        return { text: "Remove from group", icon: (0, s.jsx)(q.Z, {}), destructive: !0, onClick: a };
                                }
                                return null;
                            })(e, a, t),
                        )
                        .filter((e) => !!e);
                    return (0, s.jsx)($.P, { items: o, trigger: (0, s.jsx)(c.z, { className: "justify-self-end", icon: (0, s.jsx)(X.Z, { className: "text-gray-700" }), variant: "primaryText", color: "gray700", backgroundColor: "gray700", onClick: () => e(a.userId) }) });
                },
                K = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: i }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const a = i.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(F.s, { url: n.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(B.R, { name: n.user?.displayName || "", badges: (0, O.r)(n.user), weight: "normal" }), n.isAdmin && (0, s.jsx)("div", { className: "p-1 rounded bg-gray-200", children: (0, s.jsx)(o.x, { size: "subtext3", children: "Admin" }) })] }), (0, s.jsx)(W, { participant: n, menuItems: a, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
            var Q = n(32161),
                Y = n(250362),
                H = n(796309);
            function ee({ icon: e, destructive: t, onClick: n, title: i, value: a, showChevron: r = !1 }) {
                return (0, s.jsx)("div", { className: "rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between px-4 py-3", children: [(0, s.jsxs)("div", { className: `py-px flex items-center gap-3 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(o.x, { size: "body", weight: "normal", color: t ? "red500" : "text", children: i })] }), (0, s.jsxs)("div", { className: "flex items-center gap-3", children: [a && (0, s.jsx)(o.x, { size: "body", color: "text", weight: "normal", children: a }), r && (0, s.jsx)(P.Z, { className: "text-gray-700" })] })] }) });
            }
            function te({ children: e, className: t }) {
                return (0, s.jsx)("div", { className: (0, H.cn)("flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl", t), children: e });
            }
            const ne = i.com.x.dms.convinfo,
                se = i.com.x.dms.ConversationInfoBottomButton;
            function ie({ button: e, onEvent: t }) {
                const n = (function (e) {
                    switch (e) {
                        case se.DeleteConversation:
                            return { title: "Delete conversation", icon: (0, s.jsx)(Y.Z, {}), destructive: !0 };
                        case se.LeaveGroup:
                            return { title: "Leave conversation", icon: (0, s.jsx)(Y.Z, {}) };
                        case se.ResignAsAdmin:
                            return { title: "Resign as admin", icon: (0, s.jsx)(_.Z, {}) };
                    }
                    return null;
                })(e);
                return n
                    ? (0, s.jsx)(ee, {
                          icon: n.icon,
                          title: n.title,
                          destructive: n.destructive,
                          showChevron: !!n.showChevron,
                          onClick: () => {
                              t(new ne.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                      })
                    : null;
            }
            var ae = n(369962);
            const oe = ({ onEvent: e, ttl: t }) => (0, s.jsx)(ee, { title: "Disappearing Messages", showChevron: !0, value: t ? (0, ae.L)(t) : "Off", onClick: e }),
                re = i.com.x.dms.convinfo;
            function le({ id: e }) {
                const [t, n] = (0, l.useState)(null),
                    a = (0, D.n)(),
                    o = (0, L.s)(),
                    [c, d] = (0, l.useState)(!1);
                return (
                    (0, l.useEffect)(() => {
                        const t = new i.com.x.export.CancellationSignal(),
                            s = a.convInfoComponent(
                                t,
                                i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new re.ConversationInfoCallbacks(
                                    () => {
                                        o.toConversation(e);
                                    },
                                    () => {
                                        o.toInbox();
                                    },
                                    () => {},
                                    () => {},
                                    () => {
                                        d(!0);
                                    },
                                    () => {
                                        o.toParticipants(e);
                                    },
                                    () => {
                                        o.toVanishingMode(e);
                                    },
                                    () => {
                                        o.toGroupInvite(e);
                                    },
                                ),
                            );
                        return (
                            n(s),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [a, e, o]),
                    t ? (0, s.jsx)(ce, { component: t, showAddGroupParticipants: c, setShowAddGroupParticipants: d }) : (0, s.jsx)(r.P, {})
                );
            }
            function ce({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: d } = (0, a.$G)(),
                    m = (0, h._)(e.state);
                (0, p.e)(e.toasts);
                const u = (0, l.useCallback)(
                        (t) => {
                            e.onEvent(new re.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    v = (0, l.useCallback)(
                        (t, n) => {
                            e.onEvent(new re.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (m.contents === re.ConversationInfoContents.Loading) return (0, s.jsx)(r.P, {});
                if (!(m.contents instanceof re.ConversationInfoContents.Loaded)) return null;
                const f = m.contents.convId instanceof i.com.x.models.dm.XConversationId.Group,
                    g = m.contents.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                    j = m.contents.peopleSection,
                    w = m.contents.memberRequestSection,
                    b = (t) => {
                        e.onEvent(t);
                    },
                    C = m.contents.metadata.areNotificationsDisabled,
                    y = C ? R.Z : M.Z,
                    k = d(g ? (C ? "Unmute Conversation" : "Mute Conversation") : C ? "Unmute Group" : "Mute Group");
                return (0, s.jsxs)("div", {
                    className: "flex flex-col w-full items-center self-center h-screen relative overflow-y-auto",
                    children: [
                        n && f && (0, s.jsx)(Z.C, { conversationId: m.contents.convId, onVisibilityChange: t }),
                        (0, s.jsxs)("div", {
                            className: "w-full sticky left-0 top-0 py-4 px-2",
                            children: [
                                (0, s.jsx)("div", { className: "absolute inset-0", style: { background: "linear-gradient(to top, transparent 10%, hsl(var(--colors-background)) 100%)", zIndex: -1 } }),
                                Array.from({ length: 5 })
                                    .map((e, t) => t + 1)
                                    .map((e) => (0, s.jsx)("div", { className: "absolute inset-0", style: { backdropFilter: "blur(8px)", mask: "linear-gradient(to top, transparent 0%, hsl(var(--colors-background) / 0.8) 50%, hsl(var(--colors-background) / 1) 100%)", zIndex: -1 } }, e)),
                                (0, s.jsxs)("div", {
                                    className: "flex flex-row justify-between w-full relative",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children: (0, s.jsx)(c.z, {
                                                icon: (0, s.jsx)(z.Z, {}),
                                                onClick: (t) => {
                                                    t.stopPropagation(), e.onEvent(re.ConversationInfoEvent.BackButtonClicked);
                                                },
                                                variant: "mutedText",
                                                color: "gray700",
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: "flex flex-col items-center gap-2 w-full pt-5",
                                            children: [
                                                (0, s.jsx)("div", {
                                                    className: "w-16 h-16",
                                                    children: (0, s.jsx)(Q.x, {
                                                        avatarSize: "fill",
                                                        titleState: m.contents.metadata.title,
                                                        onCustomAvatarNeedsResolving: (t) => {
                                                            e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.ResolveCustomAvatar(t));
                                                        },
                                                        isInlineFacepile: !0,
                                                    }),
                                                }),
                                                (0, s.jsxs)("div", { className: "flex flex-col items-center", children: [(0, s.jsx)(B.R, { name: m.contents.metadata.title.title, badges: g ? (0, O.r)(m.contents.metadata.title.otherUser) : void 0 }), g && m.contents.metadata.title.otherUser && (0, s.jsx)(G.Q, { screenName: m.contents.metadata.title.otherUser.screenName })] }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", { className: "w-20 shrink-0", children: m.contents.showEditGroupAction && (0, s.jsx)(c.z, { variant: "brandText", children: (0, s.jsx)(o.x, { weight: "medium", color: "inherit", numberOfLines: 1, children: d("Edit") }) }) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: "w-full pb-3 flex flex-col gap-6 pt-5 px-8",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [
                                    (0, s.jsx)("div", {
                                        className: " space-y-2 min-w-[220px]",
                                        children: (0, s.jsxs)("div", {
                                            className: "h-20 flex flex-col justify-center items-center gap-2 cursor-pointer bg-gray-0 hover:bg-gray-100 rounded-xl p-2",
                                            onClick: () => {
                                                e.onEvent(C ? re.ConversationInfoEvent.OnUnMuteClicked : re.ConversationInfoEvent.OnMuteClicked);
                                            },
                                            children: [(0, s.jsx)(y, { className: "text-text w-6 h-6" }), (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray700", children: k })],
                                        }),
                                    }),
                                    !m.contents.metadata.isReadOnly &&
                                        (0, s.jsx)("div", {
                                            className: "w-full",
                                            children: (0, s.jsx)(oe, {
                                                ttl: m.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds,
                                                onEvent: () => {
                                                    e.onEvent(re.ConversationInfoEvent.DisappearingMessagesClicked);
                                                },
                                            }),
                                        }),
                                    w
                                        ? (0, s.jsxs)("div", {
                                              className: "w-full mt-4",
                                              children: [
                                                  (0, s.jsxs)("div", { className: "w-full ps-4", children: [(0, s.jsx)(o.x, { size: "headline2", weight: "bold", className: "mb-2", children: d("Join requests") }), (0, s.jsx)(V, { handleParticipantMenuButtonClicked: v, participants: w.participants.asJsReadonlyArrayView() })] }),
                                                  w.showMoreUsersLink
                                                      ? (0, s.jsx)(c.z, {
                                                            className: "w-full pe-0",
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(re.ConversationInfoEvent.MembershipRequestButtonClicked);
                                                            },
                                                            children: (0, s.jsxs)("div", { className: "flex flex-row justify-between items-center py-2 w-full", children: [(0, s.jsx)(o.x, { size: "body", weight: "medium", children: d("View all {number} join requests", { number: w.showMoreUsersLink + w.participants.asJsReadonlyArrayView().length }) }), (0, s.jsx)(P.Z, { className: "me-1.5", width: "24", height: "24" })] }),
                                                        })
                                                      : null,
                                              ],
                                          })
                                        : null,
                                    j?.canAddPeople
                                        ? (0, s.jsx)(te, {
                                              children:
                                                  m.contents.metadata.selfParticipant?.isAdmin &&
                                                  (0, s.jsx)(ee, {
                                                      icon: (0, s.jsx)(T.Z, {}),
                                                      onClick: () => {
                                                          e.onEvent(re.ConversationInfoEvent.GroupInviteClicked);
                                                      },
                                                      title: d("Group Invite Link"),
                                                      value: m.contents.metadata.attributes?.inviteUrl ? d("On") : d("Off"),
                                                      showChevron: !0,
                                                  }),
                                          })
                                        : null,
                                    j
                                        ? (0, s.jsx)("div", {
                                              className: "w-full mt-4",
                                              children: (0, s.jsxs)("div", {
                                                  className: "w-full",
                                                  children: [
                                                      (0, s.jsxs)("div", {
                                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                                          children: [
                                                              (0, s.jsx)(o.x, { children: d("Members") }),
                                                              j.showMoreUsersLink &&
                                                                  (0, s.jsx)("button", {
                                                                      type: "button",
                                                                      onClick: () => {
                                                                          e.onEvent(re.ConversationInfoEvent.TotalNumMembersClicked);
                                                                      },
                                                                      children: (0, s.jsx)(o.x, { color: "primary", children: d("See all ({number})", { number: j.showMoreUsersLink + j.participants.asJsReadonlyArrayView().length }) }),
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, s.jsxs)(te, {
                                                          children: [
                                                              m.contents.peopleSection.canAddPeople &&
                                                                  (0, s.jsx)(ee, {
                                                                      icon: (0, s.jsx)(x.Z, {}),
                                                                      onClick: () => {
                                                                          e.onEvent(re.ConversationInfoEvent.AddPeopleClicked);
                                                                      },
                                                                      title: d("Add members"),
                                                                  }),
                                                              (0, s.jsx)(K, { handleParticipantClicked: u, handleParticipantMenuButtonClicked: v, participants: j.participants.asJsReadonlyArrayView(), menuItemsMap: j.menuItems.asJsReadonlyMapView() }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : null,
                                    (0, s.jsx)("div", { className: "mt-6 space-y-2 w-full", children: m.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(ie, { button: e, onEvent: b }, e.name)) }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            const de = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center w-full relative pt-4 px-2 pb-2", children: [(0, s.jsx)(c.z, { icon: (0, s.jsx)(z.Z, {}), onClick: t, variant: "mutedText" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(o.x, { size: "headline1", weight: "bold", className: "text-center", children: e }) }), (0, s.jsx)("div", { className: "w-9" }), " "] }),
                me = i.com.x.dms.participantlist,
                xe = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, l.useState)(null),
                        c = (0, D.n)(),
                        d = (0, L.s)();
                    return (
                        (0, l.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = c.participantListComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new me.ParticipantListCallbacks(
                                        () => {
                                            d.toConversationInfo(e);
                                        },
                                        () => {},
                                    ),
                                );
                            return (
                                o(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [c, e, d]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(de, {
                                    title: t("All members"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(me.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(ue, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                ue = ({ component: e }) => {
                    const t = (0, h._)(e.state);
                    (0, p.e)(e.toasts);
                    const n = (0, l.useCallback)(
                            (t) => {
                                e.handleEvent(new me.ParticipantListEvent.ParticipantClicked(t));
                            },
                            [e],
                        ),
                        i = (0, l.useCallback)(
                            (t, n) => {
                                e.handleEvent(new me.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-8 py-4 overflow-y-auto", children: (0, s.jsx)(te, { children: (0, s.jsx)(K, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) }) : null;
                };
            var he = n(856402),
                pe = n(227887),
                ve = n(167285);
            const fe = i.com.x.dms.vanishingmode,
                ge = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, l.useState)(null),
                        c = (0, D.n)(),
                        d = (0, L.s)();
                    return (
                        (0, l.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = c.vanishingModeComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new fe.VanishingModeCallbacks(() => {
                                        d.toConversationInfo(e);
                                    }),
                                );
                            return (
                                o(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [c, e, d]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(de, {
                                    title: t("Disappearing Messages"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(fe.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(je, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                je = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, h._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(he.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(o.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, a) => {
                                    const r = i ? (0, ve.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        l = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === a ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new fe.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(o.x, { children: r }), (0, s.jsx)("div", { className: "h-6 text-primary", children: l && (0, s.jsx)(pe.Z, { width: 24, height: 24 }) })],
                                        },
                                        r,
                                    );
                                }),
                            }),
                        ],
                    });
                };
            var we = n(383217),
                be = n(463341),
                Ce = n(110241),
                ye = n(617588),
                ke = n(628047),
                Ne = n(853582),
                Ee = n(55880),
                Ie = n(748055),
                Se = n(469745),
                Ae = n(889198);
            const Re = i.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                Me = i.com.x.dms.model.DmTitleState,
                ze = ({ component: e }) => {
                    const t = (0, h._)(e.state),
                        n = (0, Se.a)("(max-width: 768px)"),
                        a = t.toolbarState instanceof i.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-row items-center h-16 border-b border-border pl-2 gap-3 cursor-pointer",
                        onClick: () => {
                            e.onEvent(i.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            n
                                ? (0, s.jsx)(c.z, {
                                      icon: (0, s.jsx)(Ae.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(i.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, s.jsx)(Q.x, { avatarSize: "large", titleState: t.toolbarState, onCustomAvatarNeedsResolving: (t) => e.onEvent(new Re(t)), isInlineFacepile: !1 }),
                            (0, s.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, s.jsx)(B.R, { name: t.toolbarState.title, badges: a ? (0, O.r)(t.toolbarState.otherUser) : void 0 }), (0, s.jsx)(Pe, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                Pe = ({ toolbarState: e }) => ((e instanceof Me.Group || e instanceof Me.OneToOne) && e.ttl ? (0, s.jsx)(Te, { ttl: e.ttl }) : e instanceof Me.Group ? (0, s.jsxs)(o.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                Te = ({ ttl: e }) => (0, s.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, s.jsx)(he.Z, { className: "text-gray-700" }), (0, s.jsx)(o.x, { size: "subtext2", color: "gray700", children: (0, ae.L)(e.inWholeMilliseconds) })] });
            var Be = n(125718),
                Ge = n(256958),
                De = n(849335);
            const Le = i.com.x.dms.groupinvite,
                Ze = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, l.useState)(null),
                        c = (0, D.n)(),
                        d = (0, L.s)();
                    return (
                        (0, l.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = c.groupInviteSettingsComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new Le.GroupInviteSettingsCallbacks(() => {
                                        d.toConversationInfo(e);
                                    }),
                                );
                            return (
                                o(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [c, e, d]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(de, {
                                    title: t("Group Invite Link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(Le.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Fe, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                Fe = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, h._)(e.state),
                        i = (0, l.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(Le.GroupInviteSettingsEvent.LinkCopied), (0, Ge.Am)(t("Link copied!")));
                        }, [e, n.inviteUrl, t]);
                    return (0, s.jsx)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl",
                            children: [
                                (0, s.jsx)("div", {
                                    className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between p-4",
                                        children: [
                                            (0, s.jsx)("div", { className: "flex items-center gap-2", children: (0, s.jsxs)("div", { className: "flex flex-col h-10 justify-between", children: [(0, s.jsx)(o.x, { size: "body", weight: "medium", color: "text", children: t("Group link") }), (0, s.jsx)(o.x, { size: "subtext2", color: "gray700", children: t("Let external users request to join your group") })] }) }),
                                            (0, s.jsx)("div", {
                                                className: "flex items-center gap-2",
                                                children: (0, s.jsx)(De.r, {
                                                    checked: n.isGroupInviteEnabled,
                                                    onCheckedChange: () => {
                                                        e.onEvent(Le.GroupInviteSettingsEvent.ToggleGroupInvite);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                n.isGroupInviteEnabled && (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full group hover:bg-gray-50", onClick: i, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4 gap-4", children: [(0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)(T.Z, { className: "shrink-0" }), (0, s.jsx)(o.x, { numberOfLines: 1, children: n.inviteUrl })] }), (0, s.jsx)("div", { className: "flex items-center gap-2 shrink-0", children: (0, s.jsx)(o.x, { size: "body", color: "gray500", className: "group-hover:text-blue-600", children: t("Copy") }) })] }) }),
                            ],
                        }),
                    });
                };
            var Oe = n(548978);
            const Ue = i.com.x.dms.composer.composer.ChatComposerEvent;
            function Ve() {
                const e = (0, Ce.a)(),
                    t = (0, ye.F)(),
                    n = (0, ke.v)(),
                    i = (0, Ne.k)(),
                    a = (0, Ee.m)();
                return "" !== e && i ? (0, s.jsx)(xe, { id: e }) : "" !== e && t ? (0, s.jsx)(le, { id: e }) : "" !== e && n ? (0, s.jsx)(ge, { id: e }) : "" !== e && a ? (0, s.jsx)(Ze, { id: e }) : "" !== e ? (0, s.jsx)($e, { id: e }) : (0, s.jsxs)("div", { className: "flex flex-col h-screen w-full justify-center items-center flex-grow gap-2", children: [(0, s.jsx)("div", { className: "text-[76px] mb-10", children: (0, s.jsx)(Be.Z, { className: "rotate-[8.29deg]" }) }), (0, s.jsx)(o.x, { size: "title4", weight: "medium", children: "Select a message" }), (0, s.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", children: "To start chatting" })] });
            }
            function $e({ id: e }) {
                const [t, n] = (0, l.useState)(null),
                    a = (0, D.n)(),
                    o = (0, L.s)();
                return (
                    (0, l.useEffect)(() => {
                        const t = new i.com.x.export.CancellationSignal(),
                            s = a.dmComponent(
                                i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new i.com.x.dms.chat.DmCallbacks(
                                    () => {
                                        o.toInbox();
                                    },
                                    () => {},
                                    () => {
                                        o.toConversationInfo(e);
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
                    }, [a, e, o]),
                    t ? (0, s.jsx)(Je, { component: t }) : (0, s.jsx)("div", { className: "w-full h-screen", children: (0, s.jsx)(r.P, {}) })
                );
            }
            function Je({ component: e }) {
                const t = (0, h._)(e.state),
                    { t: n } = (0, a.$G)(),
                    i = (0, l.useCallback)(
                        (t) => {
                            e.composer.onEvent(new Ue.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    r = (0, l.useCallback)(() => {
                        e.composer.onEvent(Ue.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: c, handleDragOver: d, handleDragLeave: m, handleDrop: x } = (0, Ie.F)({ onFileAttached: i, onFileDrop: r, isEnabled: !t.isReadOnly });
                return (0, s.jsxs)("div", { className: "flex flex-col h-screen flex-grow relative", onDragOver: d, onDragLeave: m, onDrop: x, children: [c && (0, s.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, s.jsx)(o.x, { size: "subtext1", weight: "medium", color: "brand", children: n("Drop file to attach") }) }), (0, s.jsx)(ze, { component: e }), (0, s.jsx)("div", { className: "flex-1 overflow-hidden", children: (0, s.jsx)(be.Bu, { children: (0, s.jsx)(we.r, { component: e, isTypingIndicatorShown: !!t.typingIndicatorItem }) }) }), t.typingIndicatorItem && (0, s.jsx)(Oe.y, { typingIndicatorItem: t.typingIndicatorItem }), t.isReadOnly ? (0, s.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, s.jsx)(o.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation due to a security verification failure.") : n("This conversation is currently in read-only mode.") }) }) : (0, s.jsx)(A, { component: e })] });
            }
        },
        174254: (e, t, n) => {
            n.d(t, { p: () => b });
            var s = n(552322),
                i = n(159603),
                a = n(921879),
                o = n(202784),
                r = n(110241),
                l = n(964655),
                c = n(941204),
                d = n(175135),
                m = n(521634),
                x = n(820062),
                u = n(266917),
                h = n(680815),
                p = n(32161),
                v = n(537335),
                f = n(336984);
            const g = ({ previewWithMetadata: e }) => {
                    if (!e.preview) return null;
                    const t = e.preview.latestMessagePreview,
                        n = e.metadata.usersByIdAllTime.asJsReadonlyMapView(),
                        a = n.get(t.sender)?.displayName,
                        o = e.isGroup && !t.isSent && !!a,
                        r = [];
                    if (t.messageText) o && r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: `${a}: ` }, 1)), r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: t.messageText }, 2));
                    else if (t.withAttachmentType) {
                        const e = ((e) => {
                            let t;
                            switch (e) {
                                case i.com.x.dms.MessageAttachmentType.MediaVideo:
                                    t = "a video";
                                    break;
                                case i.com.x.dms.MessageAttachmentType.MediaGif:
                                    t = "a GIF";
                                    break;
                                case i.com.x.dms.MessageAttachmentType.MediaAudio:
                                    t = "an audio";
                                    break;
                                case i.com.x.dms.MessageAttachmentType.MediaImage:
                                    t = "an image";
                                    break;
                                case i.com.x.dms.MessageAttachmentType.File:
                                    t = "a file";
                                    break;
                                case i.com.x.dms.MessageAttachmentType.UrlCard:
                                    t = "a URL";
                                    break;
                                case i.com.x.dms.MessageAttachmentType.Post:
                                    t = "a post";
                                    break;
                                default:
                                    t = "an attachment";
                            }
                            return t;
                        })(t.withAttachmentType);
                        o ? (r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: a }, 3)), r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: ` sent ${e}` }, 4))) : r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `Sent ${e}` }, 5));
                    }
                    return r;
                },
                j = i.com.x.dms.ReadByOthersIndicator,
                w = ({ onEvent: e, previewWithMetadata: t, isSelected: n, withSeparator: a = !1 }) => {
                    const o = t.preview?.timestampValue,
                        r = t.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsx)("div", {
                        className: "px-1",
                        children: (0, s.jsxs)("div", {
                            className: `flex flex-row  px-1 gap-2 rounded-lg hover:bg-gray-100 ${n && "bg-gray-0"} transition-colors duration-100 cursor-pointer`,
                            children: [
                                t.isUnreadByMe ? (0, s.jsx)("div", { className: "flex items-center", children: (0, s.jsx)(d.Z, { width: "14", height: "14", className: "text-blue-500" }) }) : (0, s.jsx)("div", { className: "w-[14px] flex-shrink-0" }),
                                (0, s.jsxs)("div", { style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: "flex items-center grow gap-3 rounded-lg  transition-colors duration-100", children: [(0, s.jsx)(p.x, { avatarSize: "xxLarge", titleState: t.metadata.title, onCustomAvatarNeedsResolving: (n) => e(new i.com.x.dms.convlist.ConversationListEvent.CustomAvatarNeedsResolving(t.conversationId, n)), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 flex-row flex self-stretch py-2 pb-3 border-b " + (a ? "border-gray-50" : "border-transparent"), children: [(0, s.jsxs)("div", { className: "flex-1 gap-5", children: [(0, s.jsx)(l.R, { name: t.metadata.title.title, badges: r ? (0, f.r)(t.metadata.title.otherUser) : void 0, screenName: r ? t.metadata.title.otherUser?.screenName : void 0 }), (0, s.jsx)(c.x, { color: "gray700", weight: t.isUnreadByMe ? "bold" : "normal", numberOfLines: 2, className: "break-all min-h-[2.5rem]", children: (0, s.jsx)(g, { previewWithMetadata: t }) })] }), (0, s.jsxs)("div", { className: "flex flex-col items-end", children: [(0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [(0, s.jsx)(c.x, { size: "body", color: "gray700", children: o && (0, s.jsx)(v.Q, { timestamp: o }) }), (0, s.jsx)(m.Z, { width: "20", height: "20", className: "text-gray-300 -mr-1" })] }), (0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [t.isMuted && (0, s.jsx)(x.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === j.Read && (0, s.jsx)(u.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === j.Unread && (0, s.jsx)(h.Z, { width: "14", height: "14", className: "text-gray-300" })] })] })] })] }),
                            ],
                        }),
                    });
                },
                b = ({ onEvent: e, conversations: t }) => {
                    const n = (0, r.a)(),
                        l = (0, o.useRef)(null),
                        c = (0, o.useRef)({ start: 0, end: 0 }),
                        d = (0, o.useCallback)(() => {
                            const n = l.current;
                            if (!n) return;
                            const { start: s, end: a } = c.current,
                                o = n.findStartIndex(),
                                r = n.findEndIndex();
                            if (s !== o || a !== r) {
                                const n = i.kotlin.collections.KtList.fromJsArray(t.slice(o, r + 1).map((e) => e.conversationId));
                                e(new i.com.x.dms.convlist.ConversationListEvent.VisibleConversationIdsChanged(n)), (c.current = { start: o, end: r });
                            }
                        }, [e, t.slice]),
                        m = (0, o.useCallback)(
                            (a, o) => {
                                const r = a.conversationId.id === n,
                                    l = o + 1 < t.length && t[o + 1]?.conversationId.id === n;
                                return (0, s.jsx)(
                                    "div",
                                    {
                                        onClick: () => {
                                            const t = new i.com.x.dms.convlist.ConversationListEvent.RowClicked(a.conversationId);
                                            e(t);
                                        },
                                        children: (0, s.jsx)(w, { previewWithMetadata: a, onEvent: e, isSelected: r, withSeparator: !l && !r }),
                                    },
                                    a.conversationId.id,
                                );
                            },
                            [n, e, t],
                        );
                    return (0, s.jsx)(a.T, { api: l, onScroll: d, items: t, renderItem: m });
                };
        },
        897995: (e, t, n) => {
            n.d(t, { Y: () => l });
            var s = n(552322),
                i = n(436059),
                a = n(941204),
                o = n(952333),
                r = n(159603);
            const l = ({ component: e, dialogParams: t }) =>
                (0, s.jsxs)("div", {
                    className: "p-5 rounded-2xl border-2 border-gray-100 bg-gray-0 absolute bottom-4 left-4 right-4 flex flex-col gap-2 z-10",
                    children: [
                        (0, s.jsx)(i.z, {
                            className: "absolute top-2.5 right-2.5",
                            variant: "primaryText",
                            icon: (0, s.jsx)(o.Z, {}),
                            onClick: () => {
                                e.onEvent(r.com.x.dms.convlist.ConversationListEvent.DismissBottomDialog);
                            },
                        }),
                        (0, s.jsx)(a.x, { size: "body", weight: "bold", children: "Daily Verification" }),
                        (0, s.jsx)(a.x, { size: "body", children: "Enter your 4-digit PIN so we can keep things secure and make sure you remember it." }),
                        (0, s.jsx)(i.z, {
                            className: "h-11",
                            variant: "primaryFilled",
                            onClick: () => {
                                e.onEvent(new r.com.x.dms.convlist.ConversationListEvent.ClickPinReminderDialog(t));
                            },
                            children: (0, s.jsx)(a.x, { size: "body", weight: "bold", color: "background", children: "Enter PIN" }),
                        }),
                    ],
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-14817e23.35f0479a.js.map
