"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-14817e23"],
    {
        264531: (e, t, n) => {
            n.d(t, { BH: () => c, XE: () => l, mp: () => r, xq: () => d });
            var s = n(552322),
                i = n(202784);
            const a = { path: "/dms", showDebugOptions: !1, logLevel: "ERROR", bottomBarHeight: 0 },
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
            n.d(t, { Q: () => Je });
            var s = n(552322),
                i = n(159603),
                a = n(455091),
                o = n(941204),
                r = n(702024),
                l = n(863380),
                c = n(202784),
                d = n(436059),
                m = n(720640),
                x = n(952333),
                u = n(29632),
                h = n(990714),
                p = n(533476),
                v = n(658358),
                f = n(950849),
                g = n(595117),
                j = n(607499);
            function w({ replyingTo: e, onRemoveReply: t }) {
                return (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, s.jsxs)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", e.senderInfo.user.displayName] }) : null, (0, s.jsx)(o.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, s.jsx)(d.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(x.Z, {}), onClick: t })] });
            }
            var C = n(556160),
                y = n(517922),
                b = n(83083),
                N = n(289752);
            function k({ media: e }) {
                const [t, n] = (0, c.useState)(null);
                return (
                    (0, c.useEffect)(() => {
                        e.media.previewUri &&
                            i.com.x.dms.getUrlFromUri(e.media.previewUri).then((e) => {
                                e && n(e);
                            });
                    }, [e.media.previewUri]),
                    e.shouldRender ? (e.shouldRender && t ? (0, s.jsx)("div", { className: "flex overflow-hidden rounded-2xl", children: (0, s.jsx)(N.Et, { src: t, type: i.com.x.models.dm.DmMediaType.Companion.from(e.media.mediaType), dimensions: e.media.dimension }) }) : (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Media" })) : null
                );
            }
            function E({ attachment: e, onRemoveAttachment: t }) {
                if (!e.shouldRender) return null;
                let n = null;
                if (e === i.com.x.models.dm.ChatComposerAttachment.Loading) n = (0, s.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, s.jsx)(r.P, {}) });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Media) n = (0, s.jsx)(k, { media: e });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Post) n = e.post ? (0, s.jsx)(C.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, s.jsx)(y.C, {});
                else {
                    if (e instanceof i.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof i.com.x.models.dm.ChatComposerAttachment.File && (n = (0, s.jsx)(b.Q, { className: "rounded-2xl mb-2", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return (0, s.jsxs)("div", { className: "flex flex-col max-w-[300px] gap-2 relative", children: [n, e.showRemoveButton && (0, s.jsx)("div", { className: "absolute top-2 right-2 flex items-center", children: (0, s.jsx)(d.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(x.Z, {}), onClick: t }) })] });
            }
            var I = n(82458);
            const S = i.com.x.dms.composer.composer.RightButtonState,
                A = i.com.x.dms.composer.composer.ChatComposerEvent;
            function R({ component: e }) {
                const { t } = (0, a.$G)(),
                    n = (0, p._)(e.composer.state),
                    r = (0, c.useRef)(null),
                    l = (0, c.useRef)(null);
                (0, v.e)(e.composer.toasts);
                const C = (0, c.useCallback)(() => {
                        r.current?.focus();
                    }, []),
                    y = e.composer.triggerComposerFocusEvents;
                (0, f.E)(y, C),
                    (0, c.useEffect)(() => {
                        C();
                    }, [e]);
                const b = () => {
                        n.rightButton === S.SendActive && e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(n.rightButton));
                    },
                    N = (0, c.useCallback)(
                        async (t) => {
                            await (0, g.$)(
                                t,
                                () => e.composer.onEvent(A.OnFileAttachmentStarted),
                                (t) => e.composer.onEvent(new A.OnFileAttached(t)),
                            );
                        },
                        [e.composer],
                    );
                return (0, s.jsx)(j.S, {
                    children: (0, s.jsx)("div", {
                        className: "w-full p-2",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                n.isEditing ? (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [(0, s.jsx)(m.Z, {}), (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, s.jsx)(d.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(x.Z, {}), onClick: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                n.replyingTo ? (0, s.jsx)(w, { replyingTo: n.replyingTo, onRemoveReply: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, s.jsxs)("div", {
                                    className: "flex items-end gap-2 w-full",
                                    children: [
                                        (0, s.jsx)("input", {
                                            type: "file",
                                            ref: l,
                                            onChange: async (e) => {
                                                const t = e.target.files?.[0];
                                                t && (await N(t));
                                            },
                                            className: "hidden",
                                            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt",
                                        }),
                                        (0, s.jsx)(d.z, {
                                            size: "small",
                                            disabled: !n.canAddAttachment,
                                            icon: (0, s.jsx)(u.Z, {}),
                                            onClick: () => {
                                                l.current?.click();
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
                                                            await N(t);
                                                            break;
                                                        }
                                            },
                                            className: "flex-1",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-end gap-2 w-full px-2 overflow-hidden placeholder:text-gray-800 rounded-3xl border-2 border-solid border-gray-200 bg-background/50",
                                                children: [
                                                    (0, s.jsxs)("div", {
                                                        className: "flex flex-col justify-end grow py-2",
                                                        children: [
                                                            n.attachment ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(E, { attachment: n.attachment, onRemoveAttachment: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }), (0, s.jsx)("div", { className: "w-full h-px bg-gray-200" })] }) : null,
                                                            (0, s.jsx)(I.o, {
                                                                className: "max-h-60",
                                                                multiline: !0,
                                                                value: n.currentText,
                                                                onKeyDown: (e) => {
                                                                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), b());
                                                                },
                                                                onChange: (t) => {
                                                                    e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.target.value, t.target.selectionStart));
                                                                },
                                                                placeholder: t("Message"),
                                                                ref: r,
                                                            }),
                                                        ],
                                                    }),
                                                    n.rightButton !== S.SendInactive ? (0, s.jsx)(d.z, { className: "mb-1", onClick: b, icon: (0, s.jsx)(h.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
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
            var M = n(762670),
                z = n(490003),
                P = n(501827),
                T = n(521634),
                B = n(861514),
                G = n(964655),
                D = n(898100),
                L = n(611463),
                Z = n(379342),
                O = n(846742),
                U = n(350311),
                F = n(336984);
            const V = ({ handleParticipantMenuButtonClicked: e, participant: t }) => {
                    const { t: n } = (0, a.$G)();
                    return (0, s.jsx)("div", { className: "flex flex-row gap-2", children: (0, s.jsx)(d.z, { variant: "primaryFilled", onClick: () => e(i.com.x.dms.ParticipantMenuItem.AcceptMembership, t), children: n("Add to group") }) });
                },
                $ = ({ handleParticipantMenuButtonClicked: e, participants: t }) => (0, s.jsx)(s.Fragment, { children: t.map((t) => (0, s.jsxs)("div", { className: "flex flex-row w-full gap-2 py-2 items-center", children: [(0, s.jsx)(U.s, { url: t.user?.profileImageUrl, size: "large" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(G.R, { name: t.user?.displayName || "", screenName: t.user?.screenName, badges: (0, F.r)(t.user), isStacked: !0 }) }), (0, s.jsx)(V, { participant: t, handleParticipantMenuButtonClicked: e })] }, t.userId.userIdString)) });
            var J = n(776604),
                _ = n(291680),
                q = n(866426),
                X = n(327176),
                W = n(848553);
            const K = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, menuItems: n, participant: a }) => {
                    if (!n || 0 === n.length) return null;
                    const o = n
                        .map((e) =>
                            ((e, t, n) => {
                                const a = () => {
                                    n(e, t);
                                };
                                switch (e) {
                                    case i.com.x.dms.ParticipantMenuItem.AddAsAdmin:
                                        return { text: "Add as admin", icon: (0, s.jsx)(_.Z, {}), onClick: a };
                                    case i.com.x.dms.ParticipantMenuItem.RemoveAsAdmin:
                                        return { text: "Remove as admin", icon: (0, s.jsx)(q.Z, {}), destructive: !0, onClick: a };
                                    case i.com.x.dms.ParticipantMenuItem.RemoveFromGroup:
                                        return { text: "Remove from group", icon: (0, s.jsx)(X.Z, {}), destructive: !0, onClick: a };
                                }
                                return null;
                            })(e, a, t),
                        )
                        .filter((e) => !!e);
                    return (0, s.jsx)(J.P, { items: o, trigger: (0, s.jsx)(d.z, { className: "justify-self-end", icon: (0, s.jsx)(W.Z, { className: "text-gray-700" }), variant: "primaryText", color: "gray700", backgroundColor: "gray700", onClick: () => e(a.userId) }) });
                },
                Q = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: i }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const a = i.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(U.s, { url: n.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(G.R, { name: n.user?.displayName || "", badges: (0, F.r)(n.user), weight: "normal" }), n.isAdmin && (0, s.jsx)("div", { className: "p-1 rounded bg-gray-200", children: (0, s.jsx)(o.x, { size: "subtext3", children: "Admin" }) })] }), (0, s.jsx)(K, { participant: n, menuItems: a, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
            var Y = n(32161),
                H = n(671889),
                ee = n(250362),
                te = n(796309);
            function ne({ icon: e, destructive: t, onClick: n, title: i, value: a, showChevron: r = !1 }) {
                return (0, s.jsx)("div", { className: "rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between px-4 py-3", children: [(0, s.jsxs)("div", { className: `py-px flex items-center gap-3 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(o.x, { size: "body", weight: "normal", color: t ? "red500" : "text", children: i })] }), (0, s.jsxs)("div", { className: "flex items-center gap-3", children: [a && (0, s.jsx)(o.x, { size: "body", color: "text", weight: "normal", children: a }), r && (0, s.jsx)(T.Z, { className: "text-gray-700" })] })] }) });
            }
            function se({ children: e, className: t }) {
                return (0, s.jsx)("div", { className: (0, te.cn)("flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl", t), children: e });
            }
            const ie = i.com.x.dms.convinfo,
                ae = i.com.x.dms.ConversationInfoBottomButton;
            function oe({ button: e, onEvent: t }) {
                const n = (function (e) {
                    switch (e) {
                        case ae.DeleteConversation:
                            return { title: "Delete conversation", icon: (0, s.jsx)(ee.Z, {}), destructive: !0 };
                        case ae.LeaveGroup:
                            return { title: "Leave conversation", icon: (0, s.jsx)(ee.Z, {}) };
                        case ae.ResignAsAdmin:
                            return { title: "Resign as admin", icon: (0, s.jsx)(q.Z, {}) };
                    }
                    return null;
                })(e);
                return n
                    ? (0, s.jsx)(ne, {
                          icon: n.icon,
                          title: n.title,
                          destructive: n.destructive,
                          showChevron: !!n.showChevron,
                          onClick: () => {
                              t(new ie.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                      })
                    : null;
            }
            var re = n(369962);
            const le = ({ onEvent: e, ttl: t }) => (0, s.jsx)(ne, { title: "Disappearing Messages", showChevron: !0, value: t ? (0, re.L)(t) : "Off", onClick: e }),
                ce = i.com.x.dms.convinfo;
            function de({ id: e }) {
                const [t, n] = (0, c.useState)(null),
                    a = (0, L.n)(),
                    o = (0, Z.s)(),
                    [l, d] = (0, c.useState)(!1);
                return (
                    (0, c.useEffect)(() => {
                        const t = new i.com.x.export.CancellationSignal(),
                            s = a.convInfoComponent(
                                t,
                                i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new ce.ConversationInfoCallbacks(
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
                    t ? (0, s.jsx)(me, { component: t, showAddGroupParticipants: l, setShowAddGroupParticipants: d }) : (0, s.jsx)(r.P, {})
                );
            }
            function me({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: m } = (0, a.$G)(),
                    x = (0, p._)(e.state);
                (0, v.e)(e.toasts);
                const h = (0, c.useCallback)(
                        (t) => {
                            e.onEvent(new ce.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    f = (0, c.useCallback)(
                        (t, n) => {
                            e.onEvent(new ce.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (x.contents === ce.ConversationInfoContents.Loading) return (0, s.jsx)(r.P, {});
                if (!(x.contents instanceof ce.ConversationInfoContents.Loaded)) return null;
                const g = x.contents.convId instanceof i.com.x.models.dm.XConversationId.Group,
                    j = x.contents.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                    w = x.contents.peopleSection,
                    C = x.contents.memberRequestSection,
                    y = (t) => {
                        e.onEvent(t);
                    },
                    b = x.contents.metadata.areNotificationsDisabled,
                    N = b ? M.Z : z.Z,
                    k = m(j ? (b ? "Unmute Conversation" : "Mute Conversation") : b ? "Unmute Group" : "Mute Group");
                return (0, s.jsxs)(H.g, {
                    className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh relative overflow-y-auto",
                    children: [
                        n && g && (0, s.jsx)(O.C, { conversationId: x.contents.convId, onVisibilityChange: t }),
                        (0, s.jsxs)("div", {
                            className: "w-full sticky left-0 top-0 py-4 px-2",
                            children: [
                                (0, s.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                                (0, s.jsxs)("div", {
                                    className: "flex flex-row justify-between w-full relative",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children: (0, s.jsx)(d.z, {
                                                icon: (0, s.jsx)(P.Z, {}),
                                                onClick: (t) => {
                                                    t.stopPropagation(), e.onEvent(ce.ConversationInfoEvent.BackButtonClicked);
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
                                                    children: (0, s.jsx)(Y.x, {
                                                        avatarSize: "fill",
                                                        titleState: x.contents.metadata.title,
                                                        onCustomAvatarNeedsResolving: (t) => {
                                                            e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.ResolveCustomAvatar(t));
                                                        },
                                                        isInlineFacepile: !0,
                                                    }),
                                                }),
                                                (0, s.jsxs)("div", { className: "flex flex-col items-center", children: [(0, s.jsx)(G.R, { name: x.contents.metadata.title.title, badges: j ? (0, F.r)(x.contents.metadata.title.otherUser) : void 0 }), j && x.contents.metadata.title.otherUser && (0, s.jsx)(D.Q, { screenName: x.contents.metadata.title.otherUser.screenName })] }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", { className: "w-20 shrink-0", children: x.contents.showEditGroupAction && (0, s.jsx)(d.z, { variant: "brandText", children: (0, s.jsx)(o.x, { weight: "medium", color: "inherit", numberOfLines: 1, children: m("Edit") }) }) }),
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
                                                e.onEvent(b ? ce.ConversationInfoEvent.OnUnMuteClicked : ce.ConversationInfoEvent.OnMuteClicked);
                                            },
                                            children: [(0, s.jsx)(N, { className: "text-text w-6 h-6" }), (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray700", children: k })],
                                        }),
                                    }),
                                    !x.contents.metadata.isReadOnly &&
                                        (0, s.jsx)("div", {
                                            className: "w-full",
                                            children: (0, s.jsx)(le, {
                                                ttl: x.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds,
                                                onEvent: () => {
                                                    e.onEvent(ce.ConversationInfoEvent.DisappearingMessagesClicked);
                                                },
                                            }),
                                        }),
                                    C
                                        ? (0, s.jsxs)("div", {
                                              className: "w-full mt-4",
                                              children: [
                                                  (0, s.jsxs)("div", { className: "w-full ps-4", children: [(0, s.jsx)(o.x, { size: "headline2", weight: "bold", className: "mb-2", children: m("Join requests") }), (0, s.jsx)($, { handleParticipantMenuButtonClicked: f, participants: C.participants.asJsReadonlyArrayView() })] }),
                                                  C.showMoreUsersLink
                                                      ? (0, s.jsx)(d.z, {
                                                            className: "w-full pe-0",
                                                            variant: "primaryText",
                                                            onClick: () => {
                                                                e.onEvent(ce.ConversationInfoEvent.MembershipRequestButtonClicked);
                                                            },
                                                            children: (0, s.jsxs)("div", { className: "flex flex-row justify-between items-center py-2 w-full", children: [(0, s.jsx)(o.x, { size: "body", weight: "medium", children: m("View all {number} join requests", { number: C.showMoreUsersLink + C.participants.asJsReadonlyArrayView().length }) }), (0, s.jsx)(T.Z, { className: "me-1.5", width: "24", height: "24" })] }),
                                                        })
                                                      : null,
                                              ],
                                          })
                                        : null,
                                    w?.canAddPeople
                                        ? (0, s.jsx)(se, {
                                              children:
                                                  x.contents.metadata.selfParticipant?.isAdmin &&
                                                  (0, s.jsx)(ne, {
                                                      icon: (0, s.jsx)(B.Z, {}),
                                                      onClick: () => {
                                                          e.onEvent(ce.ConversationInfoEvent.GroupInviteClicked);
                                                      },
                                                      title: m("Group Invite Link"),
                                                      value: x.contents.metadata.attributes?.inviteUrl ? m("On") : m("Off"),
                                                      showChevron: !0,
                                                  }),
                                          })
                                        : null,
                                    w
                                        ? (0, s.jsx)("div", {
                                              className: "w-full mt-4",
                                              children: (0, s.jsxs)("div", {
                                                  className: "w-full",
                                                  children: [
                                                      (0, s.jsxs)("div", {
                                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                                          children: [
                                                              (0, s.jsx)(o.x, { children: m("Members") }),
                                                              w.showMoreUsersLink &&
                                                                  (0, s.jsx)("button", {
                                                                      type: "button",
                                                                      onClick: () => {
                                                                          e.onEvent(ce.ConversationInfoEvent.TotalNumMembersClicked);
                                                                      },
                                                                      children: (0, s.jsx)(o.x, { color: "primary", children: m("See all ({number})", { number: w.showMoreUsersLink + w.participants.asJsReadonlyArrayView().length }) }),
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, s.jsxs)(se, {
                                                          children: [
                                                              x.contents.peopleSection.canAddPeople &&
                                                                  (0, s.jsx)(ne, {
                                                                      icon: (0, s.jsx)(u.Z, {}),
                                                                      onClick: () => {
                                                                          e.onEvent(ce.ConversationInfoEvent.AddPeopleClicked);
                                                                      },
                                                                      title: m("Add members"),
                                                                  }),
                                                              (0, s.jsx)(Q, { handleParticipantClicked: h, handleParticipantMenuButtonClicked: f, participants: w.participants.asJsReadonlyArrayView(), menuItemsMap: w.menuItems.asJsReadonlyMapView() }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : null,
                                    (0, s.jsx)("div", { className: "mt-6 space-y-2 w-full", children: x.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(oe, { button: e, onEvent: y }, e.name)) }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            const xe = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center w-full relative pt-4 px-2 pb-2", children: [(0, s.jsx)(d.z, { icon: (0, s.jsx)(P.Z, {}), onClick: t, variant: "mutedText" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(o.x, { size: "headline1", weight: "bold", className: "text-center", children: e }) }), (0, s.jsx)("div", { className: "w-9" }), " "] }),
                ue = i.com.x.dms.participantlist,
                he = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        l = (0, L.n)(),
                        d = (0, Z.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.participantListComponent(
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
                        }, [l, e, d]),
                        (0, s.jsxs)(H.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(xe, {
                                    title: t("All members"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(ue.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(pe, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                pe = ({ component: e }) => {
                    const t = (0, p._)(e.state);
                    (0, v.e)(e.toasts);
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
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-8 py-4 overflow-y-auto", children: (0, s.jsx)(se, { children: (0, s.jsx)(Q, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) }) : null;
                };
            var ve = n(117416),
                fe = n(227887),
                ge = n(167285);
            const je = i.com.x.dms.vanishingmode,
                we = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        l = (0, L.n)(),
                        d = (0, Z.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.vanishingModeComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new je.VanishingModeCallbacks(() => {
                                        d.toConversationInfo(e);
                                    }),
                                );
                            return (
                                o(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [l, e, d]),
                        (0, s.jsxs)(H.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(xe, {
                                    title: t("Disappearing Messages"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(je.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Ce, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                Ce = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, p._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(ve.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(o.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, a) => {
                                    const r = i ? (0, ge.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        l = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === a ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new je.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(o.x, { children: r }), (0, s.jsx)("div", { className: "h-6 text-primary", children: l && (0, s.jsx)(fe.Z, { width: 24, height: 24 }) })],
                                        },
                                        r,
                                    );
                                }),
                            }),
                        ],
                    });
                };
            var ye = n(383217),
                be = n(463341),
                Ne = n(110241),
                ke = n(617588),
                Ee = n(628047),
                Ie = n(853582),
                Se = n(55880),
                Ae = n(748055),
                Re = n(889198),
                Me = n(469745);
            const ze = i.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                Pe = i.com.x.dms.model.DmTitleState,
                Te = ({ component: e }) => {
                    const t = (0, p._)(e.state),
                        n = (0, Me.a)("(max-width: 768px)"),
                        a = t.toolbarState instanceof i.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-row items-center h-16 pl-2 gap-3 cursor-pointer absolute top-0 left-0 right-[11px] z-10",
                        onClick: () => {
                            e.onEvent(i.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            (0, s.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                            n
                                ? (0, s.jsx)(d.z, {
                                      icon: (0, s.jsx)(Re.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(i.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, s.jsx)(Y.x, { avatarSize: "large", titleState: t.toolbarState, onCustomAvatarNeedsResolving: (t) => e.onEvent(new ze(t)), isInlineFacepile: !1 }),
                            (0, s.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, s.jsx)(G.R, { name: t.toolbarState.title, badges: a ? (0, F.r)(t.toolbarState.otherUser) : void 0 }), (0, s.jsx)(Be, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                Be = ({ toolbarState: e }) => ((e instanceof Pe.Group || e instanceof Pe.OneToOne) && e.ttl ? (0, s.jsx)(Ge, { ttl: e.ttl }) : e instanceof Pe.Group ? (0, s.jsxs)(o.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                Ge = ({ ttl: e }) => (0, s.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, s.jsx)(ve.Z, { className: "text-gray-700" }), (0, s.jsx)(o.x, { size: "subtext2", color: "gray700", children: (0, re.L)(e.inWholeMilliseconds) })] });
            var De = n(125718),
                Le = n(256958),
                Ze = n(849335);
            const Oe = i.com.x.dms.groupinvite,
                Ue = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        l = (0, L.n)(),
                        d = (0, Z.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.groupInviteSettingsComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new Oe.GroupInviteSettingsCallbacks(() => {
                                        d.toConversationInfo(e);
                                    }),
                                );
                            return (
                                o(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [l, e, d]),
                        (0, s.jsxs)(H.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(xe, {
                                    title: t("Group Invite Link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(Oe.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Fe, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                Fe = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, p._)(e.state),
                        i = (0, c.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(Oe.GroupInviteSettingsEvent.LinkCopied), (0, Le.Am)(t("Link copied!")));
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
                                                children: (0, s.jsx)(Ze.r, {
                                                    checked: n.isGroupInviteEnabled,
                                                    onCheckedChange: () => {
                                                        e.onEvent(Oe.GroupInviteSettingsEvent.ToggleGroupInvite);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                n.isGroupInviteEnabled && (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full group hover:bg-gray-50", onClick: i, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4 gap-4", children: [(0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)(B.Z, { className: "shrink-0" }), (0, s.jsx)(o.x, { numberOfLines: 1, children: n.inviteUrl })] }), (0, s.jsx)("div", { className: "flex items-center gap-2 shrink-0", children: (0, s.jsx)(o.x, { size: "body", color: "gray500", className: "group-hover:text-blue-600", children: t("Copy") }) })] }) }),
                            ],
                        }),
                    });
                };
            var Ve = n(548978);
            const $e = i.com.x.dms.composer.composer.ChatComposerEvent;
            function Je() {
                const e = (0, Ne.a)(),
                    t = (0, ke.F)(),
                    n = (0, Ee.v)(),
                    i = (0, Ie.k)(),
                    a = (0, Se.m)();
                return "" !== e && i ? (0, s.jsx)(he, { id: e }) : "" !== e && t ? (0, s.jsx)(de, { id: e }) : "" !== e && n ? (0, s.jsx)(we, { id: e }) : "" !== e && a ? (0, s.jsx)(Ue, { id: e }) : "" !== e ? (0, s.jsx)(_e, { id: e }) : (0, s.jsxs)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: [(0, s.jsx)("div", { className: "text-[76px] mb-10", children: (0, s.jsx)(De.Z, { className: "rotate-[8.29deg]" }) }), (0, s.jsx)(o.x, { size: "title4", weight: "medium", children: "Select a message" }), (0, s.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", children: "To start chatting" })] });
            }
            function _e({ id: e }) {
                const [t, n] = (0, c.useState)(null),
                    a = (0, L.n)(),
                    o = (0, Z.s)();
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
                    t ? (0, s.jsx)(qe, { component: t }) : (0, s.jsx)("div", { className: "w-full h-dvh flex justify-center items-center", children: (0, s.jsx)(r.P, {}) })
                );
            }
            function qe({ component: e }) {
                const t = (0, p._)(e.state),
                    { t: n } = (0, a.$G)(),
                    i = (0, c.useCallback)(
                        (t) => {
                            e.composer.onEvent(new $e.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    r = (0, c.useCallback)(() => {
                        e.composer.onEvent($e.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: d, handleDragOver: m, handleDragLeave: x, handleDrop: u } = (0, Ae.F)({ onFileAttached: i, onFileDrop: r, isEnabled: !t.isReadOnly });
                return (0, s.jsxs)("div", { className: "flex flex-col h-dvh flex-grow relative", onDragOver: m, onDragLeave: x, onDrop: u, children: [d && (0, s.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, s.jsx)(o.x, { size: "subtext1", weight: "medium", color: "brand", children: n("Drop file to attach") }) }), (0, s.jsx)(Te, { component: e }), (0, s.jsx)("div", { className: "flex-1 overflow-hidden isolate", children: (0, s.jsx)(be.Bu, { children: (0, s.jsx)(ye.r, { component: e, isTypingIndicatorShown: !!t.typingIndicatorItem }) }) }), (0, s.jsxs)("div", { className: "absolute bottom-0 left-0 right-[11px] isolate", children: [t.typingIndicatorItem && (0, s.jsx)(Ve.y, { typingIndicatorItem: t.typingIndicatorItem }), t.isReadOnly ? (0, s.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, s.jsx)(o.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation due to a security verification failure.") : n("This conversation is currently in read-only mode.") }) }) : (0, s.jsx)(R, { component: e }), (0, s.jsx)(l.r, { to: "bottom", className: "-z-10", strength: t.typingIndicatorItem ? 7 : 5 })] })] });
            }
        },
        174254: (e, t, n) => {
            n.d(t, { p: () => C });
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
                    if (t.messageText) o && r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `${a}: ` }, 1)), r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: t.messageText }, 2));
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
                        o ? (r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: a }, 3)), r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: ` sent ${e}` }, 4))) : r.push((0, s.jsx)(c.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `Sent ${e}` }, 5));
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
                C = ({ onEvent: e, conversations: t }) => {
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
                    return (0, s.jsx)(a.T, { api: l, onScroll: d, items: t, renderItem: m, className: "!h-full scrollbar-thin-custom" });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-14817e23.f85b1a4a.js.map
