"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-14817e23"],
    {
        125691: (e, t, n) => {
            n.d(t, { a: () => A });
            var s = n(552322),
                i = n(425522),
                a = n(332161),
                o = n(993165),
                r = n(436995),
                l = n(887491),
                c = n(25457),
                d = n(14313),
                m = n(202784),
                x = n(533476),
                u = n(658358),
                h = n(950849),
                p = n(595117),
                v = n(607499),
                f = n(455091);
            function g({ replyingTo: e, onRemoveReply: t }) {
                return (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, s.jsxs)(a.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", e.senderInfo.user.displayName] }) : null, (0, s.jsx)(a.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, s.jsx)(o.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(l.Z, {}), onClick: t })] });
            }
            var j = n(193686),
                C = n(556160),
                w = n(517922),
                b = n(83083),
                y = n(289752);
            function k({ media: e }) {
                const [t, n] = (0, m.useState)(null);
                return (
                    (0, m.useEffect)(() => {
                        e.media.previewUri &&
                            i.com.x.dms.getUrlFromUri(e.media.previewUri).then((e) => {
                                e && n(e);
                            });
                    }, [e.media.previewUri]),
                    e.shouldRender ? (e.shouldRender && t ? (0, s.jsx)("div", { className: "flex overflow-hidden rounded-2xl", children: (0, s.jsx)(y.Et, { src: t, type: i.com.x.models.dm.DmMediaType.Companion.from(e.media.mediaType), dimensions: e.media.dimension }) }) : (0, s.jsx)(a.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Media" })) : null
                );
            }
            function N({ attachment: e, onRemoveAttachment: t }) {
                if (!e.shouldRender) return null;
                let n = null;
                if (e === i.com.x.models.dm.ChatComposerAttachment.Loading) n = (0, s.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, s.jsx)(j.P, {}) });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Media) n = (0, s.jsx)(k, { media: e });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Post) n = e.post ? (0, s.jsx)(C.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, s.jsx)(w.C, {});
                else {
                    if (e instanceof i.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof i.com.x.models.dm.ChatComposerAttachment.File && (n = (0, s.jsx)(b.Q, { className: "rounded-2xl mb-2", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return (0, s.jsxs)("div", { className: "flex flex-col max-w-[300px] gap-2 relative", children: [n, e.showRemoveButton && (0, s.jsx)("div", { className: "absolute top-2 right-2 flex items-center", children: (0, s.jsx)(o.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(l.Z, {}), onClick: t }) })] });
            }
            var E = n(962639);
            const I = i.com.x.dms.composer.composer.RightButtonState,
                M = i.com.x.dms.composer.composer.ChatComposerEvent;
            function A({ component: e }) {
                const { t } = (0, f.$G)(),
                    n = (0, x._)(e.composer.state),
                    j = (0, m.useRef)(null),
                    C = (0, m.useRef)(null);
                (0, u.e)(e.composer.toasts);
                const w = (0, m.useCallback)(() => {
                        j.current?.focus();
                    }, []),
                    b = e.composer.triggerComposerFocusEvents;
                (0, h.E)(b, w),
                    (0, m.useEffect)(() => {
                        w();
                    }, [e]);
                const y = () => {
                        n.rightButton === I.SendActive && e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(n.rightButton));
                    },
                    k = (0, m.useCallback)(
                        async (t) => {
                            await (0, p.$)(
                                t,
                                () => e.composer.onEvent(M.OnFileAttachmentStarted),
                                (t) => e.composer.onEvent(new M.OnFileAttached(t)),
                            );
                        },
                        [e.composer],
                    );
                return (0, s.jsx)(v.S, {
                    children: (0, s.jsx)("div", {
                        className: "bg-background w-full p-2",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                n.isEditing ? (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [(0, s.jsx)(r.Z, {}), (0, s.jsx)(a.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, s.jsx)(o.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(l.Z, {}), onClick: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                n.replyingTo ? (0, s.jsx)(g, { replyingTo: n.replyingTo, onRemoveReply: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
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
                                        (0, s.jsx)(o.z, {
                                            size: "small",
                                            disabled: !n.canAddAttachment,
                                            icon: (0, s.jsx)(c.Z, {}),
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
                                                                ref: j,
                                                            }),
                                                        ],
                                                    }),
                                                    n.rightButton !== I.SendInactive ? (0, s.jsx)(o.z, { className: "mb-1", onClick: y, icon: (0, s.jsx)(d.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
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
        },
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
        831901: (e, t, n) => {
            n.d(t, { f: () => f });
            var s = n(552322),
                i = n(425522),
                a = n(202784),
                o = n(505332),
                r = n(455091),
                l = n(89195),
                c = n(193686),
                d = n(256958),
                m = n(332161),
                x = n(261012),
                u = n(611463),
                h = n(379342),
                p = n(533476);
            const v = i.com.x.dms.groupinvite,
                f = ({ id: e }) => {
                    const { t } = (0, r.$G)(),
                        [n, l] = (0, a.useState)(null),
                        d = (0, u.n)(),
                        m = (0, h.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = d.groupInviteSettingsComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new v.GroupInviteSettingsCallbacks(() => {
                                        m.toConversationInfo(e);
                                    }),
                                );
                            return (
                                l(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [d, e, m]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(o.Q, {
                                    title: t("Group Invite Link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(v.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(g, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(c.P, {}) }),
                            ],
                        })
                    );
                },
                g = ({ component: e }) => {
                    const { t } = (0, r.$G)(),
                        n = (0, p._)(e.state),
                        i = (0, a.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(v.GroupInviteSettingsEvent.LinkCopied), (0, d.Am)(t("Link copied!")));
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
                                            (0, s.jsx)("div", { className: "flex items-center gap-2", children: (0, s.jsxs)("div", { className: "flex flex-col h-10 justify-between", children: [(0, s.jsx)(m.x, { size: "body", weight: "medium", color: "text", children: t("Group link") }), (0, s.jsx)(m.x, { size: "subtext2", color: "gray700", children: t("Let external users request to join your group") })] }) }),
                                            (0, s.jsx)("div", {
                                                className: "flex items-center gap-2",
                                                children: (0, s.jsx)(x.r, {
                                                    checked: n.isGroupInviteEnabled,
                                                    onCheckedChange: () => {
                                                        e.onEvent(v.GroupInviteSettingsEvent.ToggleGroupInvite);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                n.isGroupInviteEnabled && (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full group hover:bg-gray-50", onClick: i, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4 gap-4", children: [(0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)(l.Z, { className: "shrink-0" }), (0, s.jsx)(m.x, { numberOfLines: 1, children: n.inviteUrl })] }), (0, s.jsx)("div", { className: "flex items-center gap-2 shrink-0", children: (0, s.jsx)(m.x, { size: "body", color: "gray500", className: "group-hover:text-blue-600", children: t("Copy") }) })] }) }),
                            ],
                        }),
                    });
                };
        },
        306812: (e, t, n) => {
            n.d(t, { V: () => F });
            var s = n(552322),
                i = n(202784),
                a = n(425522),
                o = n(129558),
                r = n(757677),
                l = n(52053),
                c = n(543005),
                d = n(89195),
                m = n(193686),
                x = n(589259),
                u = n(351417),
                h = n(993165),
                p = n(332161),
                v = n(611463),
                f = n(379342),
                g = n(455091),
                j = n(846742),
                C = n(350311),
                w = n(336984);
            const b = ({ handleParticipantMenuButtonClicked: e, participant: t }) => {
                    const { t: n } = (0, g.$G)();
                    return (0, s.jsx)("div", { className: "flex flex-row gap-2", children: (0, s.jsx)(h.z, { variant: "primaryFilled", onClick: () => e(a.com.x.dms.ParticipantMenuItem.AcceptMembership, t), children: n("Add to group") }) });
                },
                y = ({ handleParticipantMenuButtonClicked: e, participants: t }) => (0, s.jsx)(s.Fragment, { children: t.map((t) => (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 py-2 items-center", children: [(0, s.jsx)(C.s, { url: t.user?.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(x.R, { name: t.user?.displayName || "", screenName: t.user?.screenName, badges: (0, w.r)(t.user), isStacked: !0 }) }), (0, s.jsx)(b, { participant: t, handleParticipantMenuButtonClicked: e })] }, t.userId.userIdString)) });
            var k = n(996016),
                N = n(32161),
                E = n(533476),
                I = n(658358),
                M = n(145731),
                A = n(951671),
                R = n(31674);
            function P({ icon: e, destructive: t, onClick: n, title: i, value: a, showChevron: o = !1 }) {
                return (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4", children: [(0, s.jsxs)("div", { className: `flex items-center gap-2 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(p.x, { size: "body", weight: "medium", color: t ? "red500" : "text", children: i })] }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [a && (0, s.jsx)(p.x, { size: "body", color: "gray500", children: a }), o && (0, s.jsx)(l.Z, { className: "text-gray-500" })] })] }) });
            }
            function z({ children: e, className: t }) {
                return (0, s.jsx)("div", { className: (0, R.cn)("flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl", t), children: e });
            }
            const S = a.com.x.dms.convinfo,
                B = a.com.x.dms.ConversationInfoBottomButton;
            function T({ button: e, onEvent: t }) {
                const n = (function (e) {
                    switch (e) {
                        case B.DeleteConversation:
                            return { title: "Delete conversation", icon: (0, s.jsx)(M.Z, {}), destructive: !0 };
                        case B.LeaveGroup:
                            return { title: "Leave conversation", icon: (0, s.jsx)(M.Z, {}) };
                        case B.ResignAsAdmin:
                            return { title: "Resign as admin", icon: (0, s.jsx)(A.Z, {}) };
                    }
                    return null;
                })(e);
                return n
                    ? (0, s.jsx)(P, {
                          icon: n.icon,
                          title: n.title,
                          destructive: n.destructive,
                          showChevron: !!n.showChevron,
                          onClick: () => {
                              t(new S.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                      })
                    : null;
            }
            var G = n(505332),
                L = n(22199),
                Z = n(369962);
            const U = ({ onEvent: e, ttl: t }) => (0, s.jsx)(P, { icon: (0, s.jsx)(L.Z, {}), title: "Vanishing Mode", showChevron: !0, value: t ? (0, Z.L)(t) : "Off", onClick: e }),
                V = a.com.x.dms.convinfo;
            function F({ id: e }) {
                const [t, n] = (0, i.useState)(null),
                    o = (0, v.n)(),
                    r = (0, f.s)(),
                    [l, c] = (0, i.useState)(!1);
                return (
                    (0, i.useEffect)(() => {
                        const t = new a.com.x.export.CancellationSignal(),
                            s = o.convInfoComponent(
                                t,
                                a.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new V.ConversationInfoCallbacks(
                                    () => {
                                        r.toConversation(e);
                                    },
                                    () => {
                                        r.toInbox();
                                    },
                                    () => {},
                                    () => {},
                                    () => {
                                        c(!0);
                                    },
                                    () => {
                                        r.toParticipants(e);
                                    },
                                    () => {
                                        r.toVanishingMode(e);
                                    },
                                    () => {
                                        r.toGroupInvite(e);
                                    },
                                ),
                            );
                        return (
                            n(s),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [o, e, r]),
                    t ? (0, s.jsx)(D, { component: t, showAddGroupParticipants: l, setShowAddGroupParticipants: c }) : (0, s.jsx)(m.P, {})
                );
            }
            function D({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: v } = (0, g.$G)(),
                    f = (0, E._)(e.state);
                (0, I.e)(e.toasts);
                const C = (0, i.useCallback)(
                        (t) => {
                            e.onEvent(new V.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    b = (0, i.useCallback)(
                        (t, n) => {
                            e.onEvent(new V.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (f.contents === V.ConversationInfoContents.Loading) return (0, s.jsx)(m.P, {});
                if (!(f.contents instanceof V.ConversationInfoContents.Loaded)) return null;
                const M = f.contents.convId instanceof a.com.x.models.dm.XConversationId.Group,
                    A = f.contents.metadata.title instanceof a.com.x.dms.model.DmTitleState.OneToOne,
                    R = f.contents.peopleSection,
                    S = f.contents.memberRequestSection,
                    B = (t) => {
                        e.onEvent(t);
                    },
                    L = f.contents.metadata.areNotificationsDisabled,
                    Z = L ? o.Z : r.Z,
                    F = v(L ? "Unmute Conversation" : "Mute Conversation");
                return (0, s.jsxs)("div", {
                    className: "flex flex-col w-full items-center self-center h-screen",
                    children: [
                        n && M && (0, s.jsx)(j.C, { conversationId: f.contents.convId, onVisibilityChange: t }),
                        (0, s.jsx)(G.Q, {
                            onBackClicked: (t) => {
                                t.stopPropagation(), e.onEvent(V.ConversationInfoEvent.BackButtonClicked);
                            },
                            title: f.toolbarTitle === a.com.x.dms.convinfo.ConversationInfoTitle.Group ? v("Group info") : v("Conversation info"),
                        }),
                        (0, s.jsxs)("div", {
                            className: "w-full overflow-y-auto pb-3",
                            children: [
                                (0, s.jsxs)("div", {
                                    className: "flex flex-col items-center py-6 gap-2",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: "w-28 h-28 mb-4",
                                            children: (0, s.jsx)(N.x, {
                                                avatarSize: "fill",
                                                titleState: f.contents.metadata.title,
                                                onCustomAvatarNeedsResolving: (t) => {
                                                    e.onEvent(new a.com.x.dms.convinfo.ConversationInfoEvent.ResolveCustomAvatar(t));
                                                },
                                                isInlineFacepile: !0,
                                            }),
                                        }),
                                        (0, s.jsx)(x.R, { name: f.contents.metadata.title.title, badges: A ? (0, w.r)(f.contents.metadata.title.otherUser) : void 0 }),
                                        A && f.contents.metadata.title.otherUser && (0, s.jsx)(u.Q, { screenName: f.contents.metadata.title.otherUser.screenName }),
                                        f.contents.showEditGroupAction && (0, s.jsx)(h.z, { variant: "brandText", children: v("Edit") }),
                                        (0, s.jsx)("div", {
                                            className: "mt-6 px-4 space-y-2 min-w-[220px]",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-xl p-2",
                                                onClick: () => {
                                                    e.onEvent(L ? V.ConversationInfoEvent.OnUnMuteClicked : V.ConversationInfoEvent.OnMuteClicked);
                                                },
                                                children: [(0, s.jsx)(Z, { className: "text-gray-500 w-6 h-6" }), (0, s.jsx)(p.x, { size: "body", weight: "medium", children: F })],
                                            }),
                                        }),
                                    ],
                                }),
                                !f.contents.metadata.isReadOnly &&
                                    (0, s.jsx)("div", {
                                        className: "w-full px-4",
                                        children: (0, s.jsx)(U, {
                                            ttl: f.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds,
                                            onEvent: () => {
                                                e.onEvent(V.ConversationInfoEvent.DisappearingMessagesClicked);
                                            },
                                        }),
                                    }),
                                S
                                    ? (0, s.jsxs)("div", {
                                          className: "w-full px-4 mt-4",
                                          children: [
                                              (0, s.jsxs)("div", { className: "w-full ps-4", children: [(0, s.jsx)(p.x, { size: "headline2", weight: "bold", className: "mb-2", children: v("Join requests") }), (0, s.jsx)(y, { handleParticipantMenuButtonClicked: b, participants: S.participants.asJsReadonlyArrayView() })] }),
                                              S.showMoreUsersLink
                                                  ? (0, s.jsx)(h.z, {
                                                        className: "w-full pe-0",
                                                        variant: "primaryText",
                                                        onClick: () => {
                                                            e.onEvent(V.ConversationInfoEvent.MembershipRequestButtonClicked);
                                                        },
                                                        children: (0, s.jsxs)("div", { className: "flex flex-row justify-between items-center py-2 w-full", children: [(0, s.jsx)(p.x, { size: "body", weight: "medium", children: v("View all {number} join requests", { number: S.showMoreUsersLink + S.participants.asJsReadonlyArrayView().length }) }), (0, s.jsx)(l.Z, { className: "me-1.5", width: "24", height: "24" })] }),
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                R
                                    ? (0, s.jsxs)("div", {
                                          className: "w-full px-4 mt-4",
                                          children: [
                                              (0, s.jsxs)("div", { className: "w-full ps-4", children: [(0, s.jsx)(p.x, { size: "headline2", weight: "bold", className: "mb-2", children: v("People") }), (0, s.jsx)(k.b, { handleParticipantClicked: C, handleParticipantMenuButtonClicked: b, participants: R.participants.asJsReadonlyArrayView(), menuItemsMap: R.menuItems.asJsReadonlyMapView() })] }),
                                              R.showMoreUsersLink
                                                  ? (0, s.jsx)(h.z, {
                                                        className: "w-full pe-0",
                                                        variant: "primaryText",
                                                        onClick: () => {
                                                            e.onEvent(V.ConversationInfoEvent.TotalNumMembersClicked);
                                                        },
                                                        children: (0, s.jsxs)("div", { className: "flex flex-row justify-between items-center py-2 w-full", children: [(0, s.jsx)(p.x, { size: "body", weight: "medium", children: v("View all {number} members", { number: R.showMoreUsersLink + R.participants.asJsReadonlyArrayView().length }) }), (0, s.jsx)(l.Z, { className: "me-1.5", width: "24", height: "24" })] }),
                                                    })
                                                  : null,
                                              f.contents.peopleSection.canAddPeople
                                                  ? (0, s.jsxs)(z, {
                                                        children: [
                                                            (0, s.jsx)(P, {
                                                                icon: (0, s.jsx)(c.Z, {}),
                                                                onClick: () => {
                                                                    e.onEvent(V.ConversationInfoEvent.AddPeopleClicked);
                                                                },
                                                                title: v("Add people"),
                                                                showChevron: !0,
                                                            }),
                                                            f.contents.metadata.selfParticipant?.isAdmin &&
                                                                (0, s.jsx)(P, {
                                                                    icon: (0, s.jsx)(d.Z, {}),
                                                                    onClick: () => {
                                                                        e.onEvent(V.ConversationInfoEvent.GroupInviteClicked);
                                                                    },
                                                                    title: v("Group Invite Link"),
                                                                    value: f.contents.metadata.attributes?.inviteUrl ? v("On") : v("Off"),
                                                                    showChevron: !0,
                                                                }),
                                                        ],
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                                (0, s.jsx)("div", { className: "mt-6 px-4 space-y-2 w-full", children: f.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(T, { button: e, onEvent: B }, e.name)) }),
                            ],
                        }),
                    ],
                });
            }
        },
        505332: (e, t, n) => {
            n.d(t, { Q: () => r });
            var s = n(552322),
                i = n(993165),
                a = n(332161),
                o = n(458872);
            const r = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center h-16 border-b border-border w-full relative", children: [(0, s.jsx)("div", { className: "absolute left-2", children: (0, s.jsx)(i.z, { icon: (0, s.jsx)(o.Z, {}), onClick: t, variant: "primaryText" }) }), (0, s.jsx)(a.x, { size: "headline1", weight: "bold", className: "flex-1 text-center", children: e })] });
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
                C = n(812115),
                w = n(138179),
                b = n(455091);
            const y = () => {
                const { t: e } = (0, b.$G)();
                return (0, s.jsxs)(C.r, { href: "https://x.com/messages", style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: "flex items-center grow p-2 mr-2 gap-5 rounded-lg hover:bg-gray-100 transition-colors duration-100 cursor-pointer", children: [(0, s.jsx)("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-blue-200", children: (0, s.jsx)(w.Z, { className: "text-blue-500" }) }), (0, s.jsxs)("div", { className: "flex flex-col justify-center flex-1 min-w-0", children: [(0, s.jsx)(o.x, { weight: "bold", size: "body", children: e("Unencrypted messages") }), (0, s.jsx)(o.x, { color: "gray700", size: "subtext1", numberOfLines: 2, children: e("View messages from your friends using older devices") })] })] });
            };
            const k = ({ component: e, conversations: t }) => {
                const n = (0, g.a)(),
                    a = (0, f.useRef)(null),
                    o = (0, f.useRef)({ start: 0, end: 0 }),
                    r = (0, f.useCallback)(() => {
                        const n = a.current;
                        if (!n) return;
                        const { start: s, end: r } = o.current,
                            l = n.findStartIndex(),
                            c = n.findEndIndex();
                        if (s !== l || r !== c) {
                            const n = i.kotlin.collections.KtList.fromJsArray(t.slice(l, c + 1).map((e) => e.conversationId));
                            e.onEvent(new i.com.x.dms.convlist.ConversationListEvent.VisibleConversationIdsChanged(n)), (o.current = { start: l, end: c });
                        }
                    }, [e, t.slice]),
                    l = (0, f.useCallback)(
                        (t) => {
                            e.onEvent(t);
                        },
                        [e],
                    ),
                    c = (0, f.useCallback)(
                        (e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    onClick: () => {
                                        const t = new i.com.x.dms.convlist.ConversationListEvent.RowClicked(e.conversationId);
                                        l(t);
                                    },
                                    children: (0, s.jsx)(v, { previewWithMetadata: e, onEvent: l, isSelected: e.conversationId.id === n }),
                                },
                                e.conversationId.id,
                            ),
                        [n, l],
                    ),
                    d = (0, f.useCallback)((e) => (e instanceof i.com.x.dms.ConversationPreviewWithMetadata ? c(e) : (0, s.jsx)(y, {})), [c]),
                    m = ["unencrypted-messages", ...t];
                return (0, s.jsx)(j.T, { api: a, onScroll: r, items: m, renderItem: d });
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
        761312: (e, t, n) => {
            n.d(t, { K: () => p });
            var s = n(552322),
                i = n(425522),
                a = n(202784),
                o = n(455091),
                r = n(193686),
                l = n(505332),
                c = n(611463),
                d = n(379342),
                m = n(533476),
                x = n(658358),
                u = n(996016);
            const h = i.com.x.dms.participantlist,
                p = ({ id: e }) => {
                    const { t } = (0, o.$G)(),
                        [n, m] = (0, a.useState)(null),
                        x = (0, c.n)(),
                        u = (0, d.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = x.participantListComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new h.ParticipantListCallbacks(
                                        () => {
                                            u.toConversationInfo(e);
                                        },
                                        () => {},
                                    ),
                                );
                            return (
                                m(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [x, e, u]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(l.Q, {
                                    title: t("All participants"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(h.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(v, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                v = ({ component: e }) => {
                    const t = (0, m._)(e.state);
                    (0, x.e)(e.toasts);
                    const n = (0, a.useCallback)(
                            (t) => {
                                e.handleEvent(new h.ParticipantListEvent.ParticipantClicked(t));
                            },
                            [e],
                        ),
                        i = (0, a.useCallback)(
                            (t, n) => {
                                e.handleEvent(new h.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-4 py-2 overflow-y-auto", children: (0, s.jsx)(u.b, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) : null;
                };
        },
        996016: (e, t, n) => {
            n.d(t, { b: () => p });
            var s = n(552322),
                i = n(350311),
                a = n(589259),
                o = n(336984),
                r = n(527735),
                l = n(993165),
                c = n(429804),
                d = n(951671),
                m = n(384226),
                x = n(421018),
                u = n(425522);
            const h = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, menuItems: n, participant: i }) => {
                    if (!n || 0 === n.length) return null;
                    const a = n
                        .map((e) =>
                            ((e, t, n) => {
                                const i = () => {
                                    n(e, t);
                                };
                                switch (e) {
                                    case u.com.x.dms.ParticipantMenuItem.AddAsAdmin:
                                        return { text: "Add as admin", icon: (0, s.jsx)(c.Z, {}), onClick: i };
                                    case u.com.x.dms.ParticipantMenuItem.RemoveAsAdmin:
                                        return { text: "Remove as admin", icon: (0, s.jsx)(d.Z, {}), destructive: !0, onClick: i };
                                    case u.com.x.dms.ParticipantMenuItem.RemoveFromGroup:
                                        return { text: "Remove from group", icon: (0, s.jsx)(m.Z, {}), destructive: !0, onClick: i };
                                }
                                return null;
                            })(e, i, t),
                        )
                        .filter((e) => !!e);
                    return (0, s.jsx)(r.P, { items: a, trigger: (0, s.jsx)(l.z, { className: "justify-self-end", icon: (0, s.jsx)(x.Z, { className: "text-gray-700" }), variant: "primaryText", color: "gray700", backgroundColor: "gray700", onClick: () => e(i.userId) }) });
                },
                p = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: r }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const l = r.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 py-2 items-center", children: [(0, s.jsx)(i.s, { url: n.user?.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(a.R, { name: n.user?.displayName || "", screenName: n.user?.screenName, badges: (0, o.r)(n.user), isStacked: !0 }) }), (0, s.jsx)(h, { participant: n, menuItems: l, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
        },
        842296: (e, t, n) => {
            n.d(t, { b: () => f });
            var s = n(552322),
                i = n(505332),
                a = n(202784),
                o = n(425522),
                r = n(611463),
                l = n(379342),
                c = n(193686),
                d = n(332161),
                m = n(22199),
                x = n(699416),
                u = n(533476),
                h = n(167285),
                p = n(455091);
            const v = o.com.x.dms.vanishingmode,
                f = ({ id: e }) => {
                    const { t } = (0, p.$G)(),
                        [n, d] = (0, a.useState)(null),
                        m = (0, r.n)(),
                        x = (0, l.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const t = new o.com.x.export.CancellationSignal(),
                                n = m.vanishingModeComponent(
                                    t,
                                    o.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new v.VanishingModeCallbacks(() => {
                                        x.toConversationInfo(e);
                                    }),
                                );
                            return (
                                d(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [m, e, x]),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col w-full items-center self-center h-screen",
                            children: [
                                (0, s.jsx)(i.Q, {
                                    title: t("Vanishing Mode"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(v.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(g, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(c.P, {}) }),
                            ],
                        })
                    );
                },
                g = ({ component: e }) => {
                    const { t } = (0, p.$G)(),
                        n = (0, u._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(m.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(d.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, a) => {
                                    const o = i ? (0, h.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        r = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === a ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new v.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(d.x, { children: o }), (0, s.jsx)("div", { className: "h-6 text-primary", children: r && (0, s.jsx)(x.Z, { width: 24, height: 24 }) })],
                                        },
                                        o,
                                    );
                                }),
                            }),
                        ],
                    });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-14817e23.77de13ca.js.map
