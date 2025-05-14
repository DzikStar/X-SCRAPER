"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-14817e23"],
    {
        264531: (e, t, n) => {
            n.d(t, { BH: () => c, XE: () => l, mp: () => r });
            var s = n(552322),
                i = n(202784);
            const a = { path: "/dms", showDebugOptions: !1 },
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
        },
        292317: (e, t, n) => {
            n.d(t, { Q: () => Ue });
            var s = n(552322),
                i = n(425522),
                a = n(455091),
                o = n(332161),
                r = n(993165),
                l = n(193686),
                c = n(202784),
                d = n(436995),
                m = n(887491),
                x = n(25457),
                u = n(14313),
                h = n(533476),
                p = n(658358),
                v = n(950849),
                f = n(595117),
                g = n(607499);
            function j({ replyingTo: e, onRemoveReply: t }) {
                return (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, s.jsxs)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", e.senderInfo.user.displayName] }) : null, (0, s.jsx)(o.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, s.jsx)(r.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: t })] });
            }
            var C = n(556160),
                w = n(517922),
                b = n(83083),
                y = n(289752);
            function k({ media: e }) {
                const [t, n] = (0, c.useState)(null);
                return (
                    (0, c.useEffect)(() => {
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
                if (e === i.com.x.models.dm.ChatComposerAttachment.Loading) n = (0, s.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, s.jsx)(l.P, {}) });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Media) n = (0, s.jsx)(k, { media: e });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Post) n = e.post ? (0, s.jsx)(C.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, s.jsx)(w.C, {});
                else {
                    if (e instanceof i.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof i.com.x.models.dm.ChatComposerAttachment.File && (n = (0, s.jsx)(b.Q, { className: "rounded-2xl mb-2", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return (0, s.jsxs)("div", { className: "flex flex-col max-w-[300px] gap-2 relative", children: [n, e.showRemoveButton && (0, s.jsx)("div", { className: "absolute top-2 right-2 flex items-center", children: (0, s.jsx)(r.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: t }) })] });
            }
            var E = n(962639);
            const I = i.com.x.dms.composer.composer.RightButtonState,
                S = i.com.x.dms.composer.composer.ChatComposerEvent;
            function A({ component: e }) {
                const { t } = (0, a.$G)(),
                    n = (0, h._)(e.composer.state),
                    l = (0, c.useRef)(null),
                    C = (0, c.useRef)(null);
                (0, p.e)(e.composer.toasts);
                const w = (0, c.useCallback)(() => {
                        l.current?.focus();
                    }, []),
                    b = e.composer.triggerComposerFocusEvents;
                (0, v.E)(b, w),
                    (0, c.useEffect)(() => {
                        w();
                    }, [e]);
                const y = () => {
                        n.rightButton === I.SendActive && e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(n.rightButton));
                    },
                    k = (0, c.useCallback)(
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
                                n.isEditing ? (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [(0, s.jsx)(d.Z, {}), (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, s.jsx)(r.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                n.replyingTo ? (0, s.jsx)(j, { replyingTo: n.replyingTo, onRemoveReply: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, s.jsxs)("div", {
                                    className: "flex items-end gap-2 w-full backdrop-blur-md bg-background/80",
                                    children: [
                                        (0, s.jsx)("input", {
                                            type: "file",
                                            ref: C,
                                            onChange: async (e) => {
                                                const t = e.target.files?.[0];
                                                t && (await k(t));
                                            },
                                            className: "hidden",
                                            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt",
                                        }),
                                        (0, s.jsx)(r.z, {
                                            size: "small",
                                            disabled: !n.canAddAttachment,
                                            icon: (0, s.jsx)(x.Z, {}),
                                            onClick: () => {
                                                C.current?.click();
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
                                                                ref: l,
                                                            }),
                                                        ],
                                                    }),
                                                    n.rightButton !== I.SendInactive ? (0, s.jsx)(r.z, { className: "mb-1", onClick: y, icon: (0, s.jsx)(u.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
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
            var R = n(129558),
                M = n(757677),
                z = n(52053),
                P = n(543005),
                T = n(89195),
                B = n(589259),
                G = n(351417),
                L = n(611463),
                D = n(379342),
                F = n(846742),
                Z = n(350311),
                O = n(336984);
            const U = ({ handleParticipantMenuButtonClicked: e, participant: t }) => {
                    const { t: n } = (0, a.$G)();
                    return (0, s.jsx)("div", { className: "flex flex-row gap-2", children: (0, s.jsx)(r.z, { variant: "primaryFilled", onClick: () => e(i.com.x.dms.ParticipantMenuItem.AcceptMembership, t), children: n("Add to group") }) });
                },
                V = ({ handleParticipantMenuButtonClicked: e, participants: t }) => (0, s.jsx)(s.Fragment, { children: t.map((t) => (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 py-2 items-center", children: [(0, s.jsx)(Z.s, { url: t.user?.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(B.R, { name: t.user?.displayName || "", screenName: t.user?.screenName, badges: (0, O.r)(t.user), isStacked: !0 }) }), (0, s.jsx)(U, { participant: t, handleParticipantMenuButtonClicked: e })] }, t.userId.userIdString)) });
            var $ = n(527735),
                J = n(429804),
                _ = n(951671),
                q = n(384226),
                X = n(421018);
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
                    return (0, s.jsx)($.P, { items: o, trigger: (0, s.jsx)(r.z, { className: "justify-self-end", icon: (0, s.jsx)(X.Z, { className: "text-gray-700" }), variant: "primaryText", color: "gray700", backgroundColor: "gray700", onClick: () => e(a.userId) }) });
                },
                K = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: i }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const a = i.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 py-2 items-center", children: [(0, s.jsx)(Z.s, { url: n.user?.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(B.R, { name: n.user?.displayName || "", screenName: n.user?.screenName, badges: (0, O.r)(n.user), isStacked: !0 }) }), (0, s.jsx)(W, { participant: n, menuItems: a, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
            var Q = n(32161),
                Y = n(145731),
                H = n(31674);
            function ee({ icon: e, destructive: t, onClick: n, title: i, value: a, showChevron: r = !1 }) {
                return (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4", children: [(0, s.jsxs)("div", { className: `flex items-center gap-2 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(o.x, { size: "body", weight: "medium", color: t ? "red500" : "text", children: i })] }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [a && (0, s.jsx)(o.x, { size: "body", color: "gray500", children: a }), r && (0, s.jsx)(z.Z, { className: "text-gray-500" })] })] }) });
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
            var ae = n(458872);
            const oe = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center h-16 border-b border-border w-full relative", children: [(0, s.jsx)("div", { className: "absolute left-2", children: (0, s.jsx)(r.z, { icon: (0, s.jsx)(ae.Z, {}), onClick: t, variant: "primaryText" }) }), (0, s.jsx)(o.x, { size: "headline1", weight: "bold", className: "flex-1 text-center", children: e })] });
            var re = n(22199),
                le = n(369962);
            const ce = ({ onEvent: e, ttl: t }) => (0, s.jsx)(ee, { icon: (0, s.jsx)(re.Z, {}), title: "Vanishing Mode", showChevron: !0, value: t ? (0, le.L)(t) : "Off", onClick: e }),
                de = i.com.x.dms.convinfo;
            function me({ id: e }) {
                const [t, n] = (0, c.useState)(null),
                    a = (0, L.n)(),
                    o = (0, D.s)(),
                    [r, d] = (0, c.useState)(!1);
                return (
                    (0, c.useEffect)(() => {
                        const t = new i.com.x.export.CancellationSignal(),
                            s = a.convInfoComponent(
                                t,
                                i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new de.ConversationInfoCallbacks(
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
                    t ? (0, s.jsx)(xe, { component: t, showAddGroupParticipants: r, setShowAddGroupParticipants: d }) : (0, s.jsx)(l.P, {})
                );
            }
            function xe({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: d } = (0, a.$G)(),
                    m = (0, h._)(e.state);
                (0, p.e)(e.toasts);
                const x = (0, c.useCallback)(
                        (t) => {
                            e.onEvent(new de.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    u = (0, c.useCallback)(
                        (t, n) => {
                            e.onEvent(new de.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (m.contents === de.ConversationInfoContents.Loading) return (0, s.jsx)(l.P, {});
                if (!(m.contents instanceof de.ConversationInfoContents.Loaded)) return null;
                const v = m.contents.convId instanceof i.com.x.models.dm.XConversationId.Group,
                    f = m.contents.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                    g = m.contents.peopleSection,
                    j = m.contents.memberRequestSection,
                    C = (t) => {
                        e.onEvent(t);
                    },
                    w = m.contents.metadata.areNotificationsDisabled,
                    b = w ? R.Z : M.Z,
                    y = d(w ? "Unmute Conversation" : "Mute Conversation");
                return (0, s.jsxs)("div", {
                    className: "flex flex-col w-full items-center self-center h-screen",
                    children: [
                        n && v && (0, s.jsx)(F.C, { conversationId: m.contents.convId, onVisibilityChange: t }),
                        (0, s.jsx)(oe, {
                            onBackClicked: (t) => {
                                t.stopPropagation(), e.onEvent(de.ConversationInfoEvent.BackButtonClicked);
                            },
                            title: m.toolbarTitle === i.com.x.dms.convinfo.ConversationInfoTitle.Group ? d("Group info") : d("Conversation info"),
                        }),
                        (0, s.jsxs)("div", {
                            className: "w-full overflow-y-auto pb-3",
                            children: [
                                (0, s.jsxs)("div", {
                                    className: "flex flex-col items-center py-6 gap-2",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: "w-28 h-28 mb-4",
                                            children: (0, s.jsx)(Q.x, {
                                                avatarSize: "fill",
                                                titleState: m.contents.metadata.title,
                                                onCustomAvatarNeedsResolving: (t) => {
                                                    e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.ResolveCustomAvatar(t));
                                                },
                                                isInlineFacepile: !0,
                                            }),
                                        }),
                                        (0, s.jsx)(B.R, { name: m.contents.metadata.title.title, badges: f ? (0, O.r)(m.contents.metadata.title.otherUser) : void 0 }),
                                        f && m.contents.metadata.title.otherUser && (0, s.jsx)(G.Q, { screenName: m.contents.metadata.title.otherUser.screenName }),
                                        m.contents.showEditGroupAction && (0, s.jsx)(r.z, { variant: "brandText", children: d("Edit") }),
                                        (0, s.jsx)("div", {
                                            className: "mt-6 px-4 space-y-2 min-w-[220px]",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-xl p-2",
                                                onClick: () => {
                                                    e.onEvent(w ? de.ConversationInfoEvent.OnUnMuteClicked : de.ConversationInfoEvent.OnMuteClicked);
                                                },
                                                children: [(0, s.jsx)(b, { className: "text-gray-500 w-6 h-6" }), (0, s.jsx)(o.x, { size: "body", weight: "medium", children: y })],
                                            }),
                                        }),
                                    ],
                                }),
                                !m.contents.metadata.isReadOnly &&
                                    (0, s.jsx)("div", {
                                        className: "w-full px-4",
                                        children: (0, s.jsx)(ce, {
                                            ttl: m.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds,
                                            onEvent: () => {
                                                e.onEvent(de.ConversationInfoEvent.DisappearingMessagesClicked);
                                            },
                                        }),
                                    }),
                                j
                                    ? (0, s.jsxs)("div", {
                                          className: "w-full px-4 mt-4",
                                          children: [
                                              (0, s.jsxs)("div", { className: "w-full ps-4", children: [(0, s.jsx)(o.x, { size: "headline2", weight: "bold", className: "mb-2", children: d("Join requests") }), (0, s.jsx)(V, { handleParticipantMenuButtonClicked: u, participants: j.participants.asJsReadonlyArrayView() })] }),
                                              j.showMoreUsersLink
                                                  ? (0, s.jsx)(r.z, {
                                                        className: "w-full pe-0",
                                                        variant: "primaryText",
                                                        onClick: () => {
                                                            e.onEvent(de.ConversationInfoEvent.MembershipRequestButtonClicked);
                                                        },
                                                        children: (0, s.jsxs)("div", { className: "flex flex-row justify-between items-center py-2 w-full", children: [(0, s.jsx)(o.x, { size: "body", weight: "medium", children: d("View all {number} join requests", { number: j.showMoreUsersLink + j.participants.asJsReadonlyArrayView().length }) }), (0, s.jsx)(z.Z, { className: "me-1.5", width: "24", height: "24" })] }),
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                g
                                    ? (0, s.jsxs)("div", {
                                          className: "w-full px-4 mt-4",
                                          children: [
                                              (0, s.jsxs)("div", { className: "w-full ps-4", children: [(0, s.jsx)(o.x, { size: "headline2", weight: "bold", className: "mb-2", children: d("People") }), (0, s.jsx)(K, { handleParticipantClicked: x, handleParticipantMenuButtonClicked: u, participants: g.participants.asJsReadonlyArrayView(), menuItemsMap: g.menuItems.asJsReadonlyMapView() })] }),
                                              g.showMoreUsersLink
                                                  ? (0, s.jsx)(r.z, {
                                                        className: "w-full pe-0",
                                                        variant: "primaryText",
                                                        onClick: () => {
                                                            e.onEvent(de.ConversationInfoEvent.TotalNumMembersClicked);
                                                        },
                                                        children: (0, s.jsxs)("div", { className: "flex flex-row justify-between items-center py-2 w-full", children: [(0, s.jsx)(o.x, { size: "body", weight: "medium", children: d("View all {number} members", { number: g.showMoreUsersLink + g.participants.asJsReadonlyArrayView().length }) }), (0, s.jsx)(z.Z, { className: "me-1.5", width: "24", height: "24" })] }),
                                                    })
                                                  : null,
                                              m.contents.peopleSection.canAddPeople
                                                  ? (0, s.jsxs)(te, {
                                                        children: [
                                                            (0, s.jsx)(ee, {
                                                                icon: (0, s.jsx)(P.Z, {}),
                                                                onClick: () => {
                                                                    e.onEvent(de.ConversationInfoEvent.AddPeopleClicked);
                                                                },
                                                                title: d("Add people"),
                                                                showChevron: !0,
                                                            }),
                                                            m.contents.metadata.selfParticipant?.isAdmin &&
                                                                (0, s.jsx)(ee, {
                                                                    icon: (0, s.jsx)(T.Z, {}),
                                                                    onClick: () => {
                                                                        e.onEvent(de.ConversationInfoEvent.GroupInviteClicked);
                                                                    },
                                                                    title: d("Group Invite Link"),
                                                                    value: m.contents.metadata.attributes?.inviteUrl ? d("On") : d("Off"),
                                                                    showChevron: !0,
                                                                }),
                                                        ],
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)("div", { className: "mt-6 px-4 space-y-2 w-full", children: m.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(ie, { button: e, onEvent: C }, e.name)) }),
                            ],
                        }),
                    ],
                });
            }
            const ue = i.com.x.dms.participantlist,
                he = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        r = (0, L.n)(),
                        d = (0, D.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = r.participantListComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new ue.ParticipantListCallbacks(
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
                        }, [r, e, d]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(oe, {
                                    title: t("All participants"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(ue.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(pe, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(l.P, {}) }),
                            ],
                        })
                    );
                },
                pe = ({ component: e }) => {
                    const t = (0, h._)(e.state);
                    (0, p.e)(e.toasts);
                    const n = (0, c.useCallback)(
                            (t) => {
                                e.handleEvent(new ue.ParticipantListEvent.ParticipantClicked(t));
                            },
                            [e],
                        ),
                        i = (0, c.useCallback)(
                            (t, n) => {
                                e.handleEvent(new ue.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-4 py-2 overflow-y-auto", children: (0, s.jsx)(K, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) : null;
                };
            var ve = n(699416),
                fe = n(167285);
            const ge = i.com.x.dms.vanishingmode,
                je = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        r = (0, L.n)(),
                        d = (0, D.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = r.vanishingModeComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new ge.VanishingModeCallbacks(() => {
                                        d.toConversationInfo(e);
                                    }),
                                );
                            return (
                                o(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [r, e, d]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(oe, {
                                    title: t("Vanishing Mode"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(ge.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Ce, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(l.P, {}) }),
                            ],
                        })
                    );
                },
                Ce = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, h._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(re.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(o.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, a) => {
                                    const r = i ? (0, fe.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        l = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === a ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new ge.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(o.x, { children: r }), (0, s.jsx)("div", { className: "h-6 text-primary", children: l && (0, s.jsx)(ve.Z, { width: 24, height: 24 }) })],
                                        },
                                        r,
                                    );
                                }),
                            }),
                        ],
                    });
                };
            var we = n(950040),
                be = n(463341),
                ye = n(110241),
                ke = n(617588),
                Ne = n(628047),
                Ee = n(853582),
                Ie = n(55880),
                Se = n(984713),
                Ae = n(748055),
                Re = n(305399);
            const Me = i.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                ze = i.com.x.dms.model.DmTitleState,
                Pe = ({ component: e }) => {
                    const t = (0, h._)(e.state),
                        n = (0, Re.a)("(max-width: 768px)"),
                        a = t.toolbarState instanceof i.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-row items-center h-16 border-b border-border pl-2 gap-3 cursor-pointer",
                        onClick: () => {
                            e.onEvent(i.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            n
                                ? (0, s.jsx)(r.z, {
                                      icon: (0, s.jsx)(ae.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(i.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, s.jsx)(Q.x, { avatarSize: "large", titleState: t.toolbarState, onCustomAvatarNeedsResolving: (t) => e.onEvent(new Me(t)), isInlineFacepile: !1 }),
                            (0, s.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, s.jsx)(B.R, { name: t.toolbarState.title, badges: a ? (0, O.r)(t.toolbarState.otherUser) : void 0 }), (0, s.jsx)(Te, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                Te = ({ toolbarState: e }) => ((e instanceof ze.Group || e instanceof ze.OneToOne) && e.ttl ? (0, s.jsx)(Be, { ttl: e.ttl }) : e instanceof ze.Group ? (0, s.jsxs)(o.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                Be = ({ ttl: e }) => (0, s.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, s.jsx)(re.Z, { className: "text-gray-700" }), (0, s.jsx)(o.x, { size: "subtext2", color: "gray700", children: (0, le.L)(e.inWholeMilliseconds) })] });
            var Ge = n(256958),
                Le = n(261012);
            const De = i.com.x.dms.groupinvite,
                Fe = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        r = (0, L.n)(),
                        d = (0, D.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = r.groupInviteSettingsComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new De.GroupInviteSettingsCallbacks(() => {
                                        d.toConversationInfo(e);
                                    }),
                                );
                            return (
                                o(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [r, e, d]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(oe, {
                                    title: t("Group Invite Link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(De.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Ze, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(l.P, {}) }),
                            ],
                        })
                    );
                },
                Ze = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, h._)(e.state),
                        i = (0, c.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(De.GroupInviteSettingsEvent.LinkCopied), (0, Ge.Am)(t("Link copied!")));
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
                                                children: (0, s.jsx)(Le.r, {
                                                    checked: n.isGroupInviteEnabled,
                                                    onCheckedChange: () => {
                                                        e.onEvent(De.GroupInviteSettingsEvent.ToggleGroupInvite);
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
                },
                Oe = i.com.x.dms.composer.composer.ChatComposerEvent;
            function Ue() {
                const e = (0, ye.a)(),
                    t = (0, ke.F)(),
                    n = (0, Ne.v)(),
                    i = (0, Ee.k)(),
                    a = (0, Ie.m)(),
                    [l, d] = (0, c.useState)(!1);
                return "" !== e && i
                    ? (0, s.jsx)(he, { id: e })
                    : "" !== e && t
                      ? (0, s.jsx)(me, { id: e })
                      : "" !== e && n
                        ? (0, s.jsx)(je, { id: e })
                        : "" !== e && a
                          ? (0, s.jsx)(Fe, { id: e })
                          : "" !== e
                            ? (0, s.jsx)(Ve, { id: e })
                            : (0, s.jsxs)("div", {
                                  className: "flex flex-col h-screen w-full justify-center items-center flex-grow gap-4",
                                  children: [
                                      (0, s.jsx)(o.x, { size: "title2", weight: "bold", children: "Select a message" }),
                                      (0, s.jsx)(o.x, { size: "body", color: "gray700", children: "Choose from your existing conversations or start a new one" }),
                                      (0, s.jsx)(r.z, {
                                          onClick: () => {
                                              d(!0);
                                          },
                                          size: "xLarge",
                                          variant: "brandFilled",
                                          children: "New message",
                                      }),
                                      l && (0, s.jsx)(Se.x, { onVisibilityChange: d }),
                                  ],
                              });
            }
            function Ve({ id: e }) {
                const [t, n] = (0, c.useState)(null),
                    a = (0, L.n)(),
                    o = (0, D.s)();
                return (
                    (0, c.useEffect)(() => {
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
                    t ? (0, s.jsx)($e, { component: t }) : (0, s.jsx)("div", { className: "w-full h-screen", children: (0, s.jsx)(l.P, {}) })
                );
            }
            function $e({ component: e }) {
                const t = (0, h._)(e.state),
                    { t: n } = (0, a.$G)(),
                    i = (0, c.useCallback)(
                        (t) => {
                            e.composer.onEvent(new Oe.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    r = (0, c.useCallback)(() => {
                        e.composer.onEvent(Oe.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: l, handleDragOver: d, handleDragLeave: m, handleDrop: x } = (0, Ae.F)({ onFileAttached: i, onFileDrop: r, isEnabled: !t.isReadOnly });
                return (0, s.jsxs)("div", { className: "flex flex-col h-screen flex-grow relative", onDragOver: d, onDragLeave: m, onDrop: x, children: [l && (0, s.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, s.jsx)(o.x, { size: "subtext1", weight: "medium", color: "brand", children: n("Drop file to attach") }) }), (0, s.jsx)(Pe, { component: e }), (0, s.jsx)("div", { className: "flex-1 overflow-hidden", children: (0, s.jsx)(be.Bu, { children: (0, s.jsx)(we.r, { component: e }) }) }), t.isReadOnly ? (0, s.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, s.jsx)(o.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation due to a security verification failure.") : n("This conversation is currently in read-only mode.") }) }) : (0, s.jsx)(A, { component: e })] });
            }
        },
        559040: (e, t, n) => {
            n.d(t, { p: () => k });
            var s = n(552322),
                i = n(425522),
                a = n(589259),
                o = n(332161),
                r = n(129558),
                l = n(242782),
                c = n(169355),
                d = n(14269),
                m = n(32161),
                x = n(537335),
                u = n(336984);
            const h = ({ previewWithMetadata: e }) => {
                    if (!e.preview) return null;
                    const t = e.preview.latestMessagePreview,
                        n = e.metadata.usersByIdAllTime.asJsReadonlyMapView(),
                        a = n.get(t.sender)?.displayName,
                        r = e.isGroup && !t.isSent && !!a,
                        l = [];
                    if (t.messageText) r && l.push((0, s.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: `${a}: ` }, 1)), l.push((0, s.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: t.messageText }, 2));
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
                        r ? (l.push((0, s.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: a }, 3)), l.push((0, s.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: ` sent ${e}` }, 4))) : l.push((0, s.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `Sent ${e}` }, 5));
                    }
                    return l;
                },
                p = i.com.x.dms.ReadByOthersIndicator,
                v = ({ onEvent: e, previewWithMetadata: t, isSelected: n }) => {
                    const v = t.preview?.timestampValue,
                        f = t.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", { className: "flex flex-row", children: [(0, s.jsxs)("div", { style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: `flex items-start grow p-2 mr-2 gap-5 rounded-lg hover:bg-gray-100 ${n && "bg-gray-0"} transition-colors duration-100 cursor-pointer`, children: [(0, s.jsx)(m.x, { avatarSize: "xxLarge", titleState: t.metadata.title, onCustomAvatarNeedsResolving: (n) => e(new i.com.x.dms.convlist.ConversationListEvent.CustomAvatarNeedsResolving(t.conversationId, n)), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 gap-5", children: [(0, s.jsx)(a.R, { name: t.metadata.title.title, badges: f ? (0, u.r)(t.metadata.title.otherUser) : void 0 }), (0, s.jsx)(o.x, { color: "gray700", weight: t.isUnreadByMe ? "bold" : "normal", numberOfLines: 1, className: "break-all", children: (0, s.jsx)(h, { previewWithMetadata: t }) })] }), (0, s.jsxs)("div", { className: "flex flex-col items-end", children: [(0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [(0, s.jsx)(o.x, { size: "subtext3", children: v && (0, s.jsx)(x.Q, { timestamp: v }) }), t.isMuted && (0, s.jsx)(r.Z, { width: "14", height: "14", className: "text-gray-700" })] }), (0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [t.showReadByOthersIndicator === p.Read && (0, s.jsx)(l.Z, { width: "14", height: "14", className: "text-gray-700" }), t.showReadByOthersIndicator === p.Unread && (0, s.jsx)(c.Z, { width: "14", height: "14", className: "text-gray-700" }), t.isUnreadByMe && (0, s.jsx)(d.Z, { width: "14", height: "14", className: "text-blue-500" })] })] })] }), (0, s.jsx)("div", { className: `w-1 ${n ? "bg-text" : "bg-background"} justify-self-end rounded-lg` })] });
                };
            var f = n(202784),
                g = n(110241),
                j = n(983706),
                C = n(322506),
                w = n(138179),
                b = n(455091);
            const y = () => {
                const { t: e } = (0, b.$G)();
                return (0, s.jsxs)(C.r, { href: "https://x.com/messages", style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: "flex items-center grow p-2 mr-2 gap-5 rounded-lg hover:bg-gray-100 transition-colors duration-100 cursor-pointer", children: [(0, s.jsx)("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-blue-200", children: (0, s.jsx)(w.Z, { className: "text-blue-500" }) }), (0, s.jsxs)("div", { className: "flex flex-col justify-center flex-1 min-w-0", children: [(0, s.jsx)(o.x, { weight: "bold", size: "body", children: e("Unencrypted messages") }), (0, s.jsx)(o.x, { color: "gray700", size: "subtext1", numberOfLines: 2, children: e("View messages from your friends using older devices") })] })] });
            };
            const k = ({ onEvent: e, isSearch: t, conversations: n }) => {
                const a = (0, g.a)(),
                    o = (0, f.useRef)(null),
                    r = (0, f.useRef)({ start: 0, end: 0 }),
                    l = (0, f.useCallback)(() => {
                        const t = o.current;
                        if (!t) return;
                        const { start: s, end: a } = r.current,
                            l = t.findStartIndex(),
                            c = t.findEndIndex();
                        if (s !== l || a !== c) {
                            const t = i.kotlin.collections.KtList.fromJsArray(n.slice(l, c + 1).map((e) => e.conversationId));
                            e(new i.com.x.dms.convlist.ConversationListEvent.VisibleConversationIdsChanged(t)), (r.current = { start: l, end: c });
                        }
                    }, [e, n.slice]),
                    c = (0, f.useCallback)(
                        (t) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    onClick: () => {
                                        const n = new i.com.x.dms.convlist.ConversationListEvent.RowClicked(t.conversationId);
                                        e(n);
                                    },
                                    children: (0, s.jsx)(v, { previewWithMetadata: t, onEvent: e, isSelected: t.conversationId.id === a }),
                                },
                                t.conversationId.id,
                            ),
                        [a, e],
                    ),
                    d = (0, f.useCallback)((e) => (e instanceof i.com.x.dms.ConversationPreviewWithMetadata ? c(e) : t ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsx)(y, {})), [c, t]),
                    m = t ? n : ["unencrypted-messages", ...n];
                return (0, s.jsx)(j.T, { api: o, onScroll: l, items: m, renderItem: d });
            };
        },
        897995: (e, t, n) => {
            n.d(t, { Y: () => l });
            var s = n(552322),
                i = n(993165),
                a = n(332161),
                o = n(887491),
                r = n(425522);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-14817e23.d748fdca.js.map
