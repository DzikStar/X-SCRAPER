"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-b4a0aebf"],
    {
        264531: (e, t, n) => {
            n.d(t, { B$: () => a, BH: () => d, XE: () => c, mp: () => l, rF: () => x, xq: () => m });
            var s = n(552322),
                i = n(202784);
            const a = { DEBUG: "DEBUG", INFO: "INFO", WARN: "WARN", ERROR: "ERROR" },
                o = { path: "/dms", showDebugOptions: !1, logLevel: a.ERROR, bottomBarHeight: 0, newDBWorker: !1 },
                r = (0, i.createContext)(null),
                l = ({ children: e, settings: t }) => {
                    const n = { ...o, ...t };
                    return (0, s.jsx)(r.Provider, { value: n, children: e });
                },
                c = () => {
                    const e = (0, i.useContext)(r);
                    if (null === e) throw new Error("useXChatContext must be used within an XChatContextProvider");
                    return e;
                };
            function d() {
                return c().path;
            }
            function m() {
                return c().logLevel;
            }
            function x() {
                return c().newDBWorker;
            }
        },
        203908: (e, t, n) => {
            n.d(t, { Q: () => Fe });
            var s = n(552322),
                i = n(159603),
                a = n(455091),
                o = n(941204),
                r = n(702024),
                l = n(863380),
                c = n(202784),
                d = n(436995),
                m = n(887491),
                x = n(25457),
                u = n(14313),
                h = n(436059),
                p = n(533476),
                v = n(658358),
                f = n(950849),
                g = n(595117),
                j = n(607499),
                w = n(82458),
                C = n(556160),
                b = n(517922),
                y = n(83083),
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
            function I({ attachment: e, onRemoveAttachment: t }) {
                if (!e.shouldRender) return null;
                let n = null;
                if (e === i.com.x.models.dm.ChatComposerAttachment.Loading) n = (0, s.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, s.jsx)(r.P, {}) });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Media) n = (0, s.jsx)(k, { media: e });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Post) n = e.post ? (0, s.jsx)(C.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, s.jsx)(b.C, {});
                else {
                    if (e instanceof i.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof i.com.x.models.dm.ChatComposerAttachment.File && (n = (0, s.jsx)(y.Q, { className: "rounded-2xl mb-2", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return null === n ? null : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)("div", { className: "flex flex-col max-w-[300px] gap-2 relative", children: [n, e.showRemoveButton && (0, s.jsx)("div", { className: "absolute top-2 right-2 flex items-center", children: (0, s.jsx)(h.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: t }) })] }), (0, s.jsx)("div", { className: "w-full h-px bg-gray-200" })] });
            }
            function E({ replyingTo: e, onRemoveReply: t }) {
                return (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, s.jsxs)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", e.senderInfo.user.displayName] }) : null, (0, s.jsx)(o.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, s.jsx)(h.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: t })] });
            }
            const R = i.com.x.dms.composer.composer.RightButtonState,
                S = i.com.x.dms.composer.composer.ChatComposerEvent;
            function A({ component: e }) {
                const { t } = (0, a.$G)(),
                    n = (0, p._)(e.composer.state),
                    r = (0, c.useRef)(null),
                    l = (0, c.useRef)(null);
                (0, v.e)(e.composer.toasts);
                const C = (0, c.useCallback)(() => {
                        r.current?.focus();
                    }, []),
                    b = e.composer.triggerComposerFocusEvents;
                (0, f.E)(b, C),
                    (0, c.useEffect)(() => {
                        C();
                    }, [e]);
                const y = () => {
                        n.rightButton === R.SendActive && e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(n.rightButton));
                    },
                    N = (0, c.useCallback)(
                        async (t) => {
                            await (0, g.$)(
                                t,
                                () => e.composer.onEvent(S.OnFileAttachmentStarted),
                                (t) => e.composer.onEvent(new S.OnFileAttached(t)),
                            );
                        },
                        [e.composer],
                    );
                return (0, s.jsx)(j.S, {
                    children: (0, s.jsx)("div", {
                        className: "w-full pt-3 px-4 pb-6",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                n.isEditing ? (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [(0, s.jsx)(d.Z, {}), (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, s.jsx)(h.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(m.Z, {}), onClick: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                n.replyingTo ? (0, s.jsx)(E, { replyingTo: n.replyingTo, onRemoveReply: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, s.jsxs)("div", {
                                    className: "flex items-center gap-2 w-full",
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
                                        (0, s.jsx)(h.z, {
                                            size: "large",
                                            disabled: !n.canAddAttachment,
                                            icon: (0, s.jsx)(x.Z, {}),
                                            onClick: () => {
                                                l.current?.click();
                                            },
                                            className: "bg-gray-100",
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
                                                className: "flex items-end gap-2 w-full px-2 overflow-hidden placeholder:text-gray-800 rounded-3xl border border-solid border-gray-200 bg-background/50",
                                                children: [
                                                    (0, s.jsxs)("div", {
                                                        className: "flex flex-col justify-end grow py-2",
                                                        children: [
                                                            n.attachment ? (0, s.jsx)(I, { attachment: n.attachment, onRemoveAttachment: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }) : null,
                                                            (0, s.jsx)(w.o, {
                                                                className: "max-h-60 px-2 scrollbar-thin-custom",
                                                                multiline: !0,
                                                                value: n.currentText,
                                                                onKeyDown: (e) => {
                                                                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), y());
                                                                },
                                                                onChange: (t) => {
                                                                    e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.UserChangedText(t.target.value, t.target.selectionStart));
                                                                },
                                                                placeholder: t("Message"),
                                                                ref: r,
                                                            }),
                                                        ],
                                                    }),
                                                    n.rightButton !== R.SendInactive ? (0, s.jsx)(h.z, { className: "mb-1", onClick: y, icon: (0, s.jsx)(u.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
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
            var z = n(607334),
                M = n(129558),
                T = n(666200),
                P = n(515790),
                B = n(89195),
                G = n(703612),
                L = n(898100),
                U = n(368301),
                D = n(379342),
                O = n(846742),
                F = n(996016),
                Z = n(32161),
                $ = n(870392),
                V = n(671889),
                _ = n(858108),
                q = n(336984),
                J = n(369962),
                W = n(145731),
                X = n(442942),
                K = n(951671),
                Q = n(630086),
                H = n(209885);
            const Y = i.com.x.dms.convinfo,
                ee = i.com.x.dms.ConversationInfoBottomButton;
            function te({ button: e, onEvent: t, buttonStyleSheet: n }) {
                const i = (function (e, t) {
                    switch (e) {
                        case ee.DeleteConversation:
                            return { title: "Delete conversation", icon: (0, s.jsx)(W.Z, { className: t ?? void 0 }), destructive: !0 };
                        case ee.LeaveGroup:
                            return { title: "Leave conversation", icon: (0, s.jsx)(X.Z, { className: t ?? void 0 }), destructive: !0 };
                        case ee.ResignAsAdmin:
                            return { title: "Resign as admin", icon: (0, s.jsx)(K.Z, { className: t ?? void 0 }) };
                    }
                    return null;
                })(e, n);
                return i
                    ? (0, s.jsx)(H.c, {
                          title: i.title,
                          trigger: (0, s.jsx)(Q.R, { icon: i.icon, title: i.title, destructive: i.destructive, showChevron: !!i.showChevron, onClick: () => {} }),
                          message: `Are you sure you want to ${i.title.toLowerCase()}?`,
                          onConfirm: () => {
                              t(new Y.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                      })
                    : null;
            }
            const ne = i.com.x.dms.convinfo;
            function se({ id: e }) {
                const [t, n] = (0, c.useState)(null),
                    a = (0, U.n)(),
                    o = (0, D.s)(),
                    [r, l] = (0, c.useState)(!1);
                return (
                    (0, c.useEffect)(() => {
                        const t = new i.com.x.export.CancellationSignal(),
                            s = a.convInfoComponent(
                                t,
                                i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new ne.ConversationInfoCallbacks(
                                    () => {
                                        o.toConversation(e);
                                    },
                                    () => {
                                        o.toInbox();
                                    },
                                    () => {
                                        o.toEditGroup(e);
                                    },
                                    () => {},
                                    () => {
                                        l(!0);
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
                    t ? (0, s.jsx)(ie, { component: t, showAddGroupParticipants: r, setShowAddGroupParticipants: l }) : null
                );
            }
            function ie({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: r } = (0, a.$G)(),
                    d = (0, p._)(e.state);
                (0, v.e)(e.toasts);
                const m = (0, c.useCallback)(
                        (t) => {
                            e.onEvent(new ne.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    u = (0, c.useCallback)(
                        (t, n) => {
                            e.onEvent(new ne.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (d.contents === ne.ConversationInfoContents.Loading) return null;
                if (!(d.contents instanceof ne.ConversationInfoContents.Loaded)) return null;
                const f = d.contents.convId,
                    g = f instanceof i.com.x.models.dm.XConversationId.Group,
                    j = d.contents.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                    w = d.contents.peopleSection,
                    C = d.contents.memberRequestSection,
                    b = (t) => {
                        e.onEvent(t);
                    },
                    y = d.contents.metadata.areNotificationsDisabled,
                    N = y ? z.Z : M.Z,
                    k = r(j ? (y ? "Unmute Conversation" : "Mute Conversation") : y ? "Unmute Group" : "Mute Group"),
                    I = d.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds;
                return (0, s.jsxs)(V.g, {
                    className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh relative overflow-y-auto",
                    children: [
                        n && g && (0, s.jsx)(O.C, { conversationId: f, onVisibilityChange: t }),
                        g && (0, s.jsx)($.$, { convId: f }),
                        (0, s.jsxs)("div", {
                            className: "w-full sticky left-0 top-0 py-4 px-2",
                            children: [
                                (0, s.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                                (0, s.jsxs)("div", {
                                    className: "flex flex-row justify-between w-full relative",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children: (0, s.jsx)(h.z, {
                                                icon: (0, s.jsx)(T.Z, {}),
                                                onClick: (t) => {
                                                    t.stopPropagation(), e.onEvent(ne.ConversationInfoEvent.BackButtonClicked);
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
                                                    children: (0, s.jsx)(Z.x, {
                                                        avatarSize: "fill",
                                                        titleState: d.contents.metadata.title,
                                                        onCustomAvatarNeedsResolving: (t) => {
                                                            (0, _.G)() || e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.ResolveCustomAvatar(t));
                                                        },
                                                        isInlineFacepile: !0,
                                                    }),
                                                }),
                                                (0, s.jsxs)("div", { className: "flex flex-col items-center", children: [(0, s.jsx)(G.R, { name: d.contents.metadata.title.title, badges: j ? (0, q.r)(d.contents.metadata.title.otherUser) : void 0 }), j && d.contents.metadata.title.otherUser && (0, s.jsx)(L.Q, { screenName: d.contents.metadata.title.otherUser.screenName })] }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children:
                                                d.contents.showEditGroupAction &&
                                                g &&
                                                (0, s.jsx)(h.z, {
                                                    variant: "brandText",
                                                    onClick: () => {
                                                        e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.EditGroupClicked(f));
                                                    },
                                                    children: (0, s.jsx)(o.x, { weight: "medium", color: "inherit", numberOfLines: 1, children: r("Edit") }),
                                                }),
                                        }),
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
                                                e.onEvent(y ? ne.ConversationInfoEvent.OnUnMuteClicked : ne.ConversationInfoEvent.OnMuteClicked);
                                            },
                                            children: [(0, s.jsx)(N, { className: "w-6 h-6" }), (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray700", children: k })],
                                        }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, s.jsx)(o.x, { weight: "bold", className: "px-4 pb-2", children: r(g ? "Group settings" : "Chat settings") }),
                                            (0, s.jsxs)(Q.I, {
                                                children: [
                                                    !d.contents.metadata.isReadOnly &&
                                                        (0, s.jsx)(Q.R, {
                                                            icon: (0, s.jsx)(P.Z, { className: "h-5 w-5" }),
                                                            title: r("Disappearing Messages"),
                                                            showChevron: !0,
                                                            value: I ? (0, J.L)(I) : "Off",
                                                            onClick: () => {
                                                                e.onEvent(ne.ConversationInfoEvent.DisappearingMessagesClicked);
                                                            },
                                                        }),
                                                    w?.canAddPeople &&
                                                        (0, s.jsx)(Q.R, {
                                                            icon: (0, s.jsx)(B.Z, { className: "h-5 w-5" }),
                                                            onClick: () => {
                                                                e.onEvent(ne.ConversationInfoEvent.GroupInviteClicked);
                                                            },
                                                            title: r("Group Invite Link"),
                                                            value: C ? (0, s.jsx)("div", { className: "flex items-center justify-center w-6 h-6 rounded-full bg-blue-500", children: (0, s.jsx)(o.x, { size: "subtext2", color: "white", weight: "medium", children: C.participants.asJsReadonlyArrayView().length + (C.showMoreUsersLink || 0) }) }) : d.contents.metadata.attributes?.inviteUrl ? r("On") : r("Off"),
                                                            showChevron: !0,
                                                        }),
                                                    d.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(te, { button: e, onEvent: b, buttonStyleSheet: "h-5 w-5" }, e.name)),
                                                ],
                                            }),
                                        ],
                                    }),
                                    w
                                        ? (0, s.jsx)("div", {
                                              className: "w-full mt-4",
                                              children: (0, s.jsxs)("div", {
                                                  className: "w-full",
                                                  children: [
                                                      (0, s.jsxs)("div", {
                                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                                          children: [
                                                              (0, s.jsx)(o.x, { weight: "bold", children: r("Members") }),
                                                              w.showMoreUsersLink &&
                                                                  (0, s.jsx)("button", {
                                                                      type: "button",
                                                                      onClick: () => {
                                                                          e.onEvent(ne.ConversationInfoEvent.TotalNumMembersClicked);
                                                                      },
                                                                      children: (0, s.jsx)(o.x, { color: "primary", children: r("See all ({number})", { number: w.showMoreUsersLink + w.participants.asJsReadonlyArrayView().length }) }),
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, s.jsxs)(Q.I, {
                                                          children: [
                                                              d.contents.peopleSection.canAddPeople &&
                                                                  (0, s.jsx)(Q.R, {
                                                                      icon: (0, s.jsx)(x.Z, {}),
                                                                      onClick: () => {
                                                                          e.onEvent(ne.ConversationInfoEvent.AddPeopleClicked);
                                                                      },
                                                                      title: r("Add members"),
                                                                  }),
                                                              (0, s.jsx)(F.b, { handleParticipantClicked: m, handleParticipantMenuButtonClicked: u, participants: w.participants.asJsReadonlyArrayView(), menuItemsMap: w.menuItems.asJsReadonlyMapView() }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        }),
                    ],
                });
            }
            const ae = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center w-full relative pt-4 px-2 pb-2", children: [(0, s.jsx)(h.z, { icon: (0, s.jsx)(T.Z, {}), onClick: t, variant: "mutedText" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(o.x, { size: "headline1", weight: "bold", className: "text-center", children: e }) }), (0, s.jsx)("div", { className: "w-9" }), " "] }),
                oe = i.com.x.dms.participantlist,
                re = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        l = (0, U.n)(),
                        d = (0, D.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.participantListComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new oe.ParticipantListCallbacks(
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
                        (0, s.jsxs)(V.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(ae, {
                                    title: t("All members"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(oe.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(le, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                le = ({ component: e }) => {
                    const t = (0, p._)(e.state);
                    (0, v.e)(e.toasts);
                    const n = (0, c.useCallback)(
                            (t) => {
                                e.handleEvent(new oe.ParticipantListEvent.ParticipantClicked(t));
                            },
                            [e],
                        ),
                        i = (0, c.useCallback)(
                            (t, n) => {
                                e.handleEvent(new oe.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-8 py-4 overflow-y-auto", children: (0, s.jsx)(Q.I, { children: (0, s.jsx)(F.b, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) }) : null;
                };
            var ce = n(699416),
                de = n(167285);
            const me = i.com.x.dms.vanishingmode,
                xe = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        l = (0, U.n)(),
                        d = (0, D.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.vanishingModeComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new me.VanishingModeCallbacks(() => {
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
                        (0, s.jsxs)(V.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(ae, {
                                    title: t("Disappearing Messages"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(me.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(ue, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                ue = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, p._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(P.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(o.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, a) => {
                                    const r = i ? (0, de.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        l = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === a ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new me.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(o.x, { children: r }), (0, s.jsx)("div", { className: "h-6 text-primary", children: l && (0, s.jsx)(ce.Z, { width: 24, height: 24 }) })],
                                        },
                                        r,
                                    );
                                }),
                            }),
                        ],
                    });
                };
            var he = n(2131),
                pe = n(463341),
                ve = n(110241),
                fe = n(617588),
                ge = n(628047),
                je = n(853582),
                we = n(55880),
                Ce = n(748055),
                be = n(458872),
                ye = n(469745);
            const Ne = i.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                ke = i.com.x.dms.model.DmTitleState,
                Ie = ({ component: e }) => {
                    const t = (0, p._)(e.state),
                        n = (0, ye.a)("(max-width: 768px)"),
                        a = t.toolbarState instanceof i.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-row items-center h-16 pl-2 gap-3 cursor-pointer absolute top-0 left-0 right-[11px] z-10",
                        onClick: () => {
                            e.onEvent(i.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            (0, s.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                            n
                                ? (0, s.jsx)(h.z, {
                                      icon: (0, s.jsx)(be.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(i.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, s.jsx)(Z.x, {
                                avatarSize: "large",
                                titleState: t.toolbarState,
                                onCustomAvatarNeedsResolving: (t) => {
                                    _.G || e.onEvent(new Ne(t));
                                },
                                isInlineFacepile: !1,
                            }),
                            (0, s.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, s.jsx)(G.R, { name: t.toolbarState.title, badges: a ? (0, q.r)(t.toolbarState.otherUser) : void 0 }), (0, s.jsx)(Ee, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                Ee = ({ toolbarState: e }) => ((e instanceof ke.Group || e instanceof ke.OneToOne) && e.ttl ? (0, s.jsx)(Re, { ttl: e.ttl }) : e instanceof ke.Group ? (0, s.jsxs)(o.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                Re = ({ ttl: e }) => (0, s.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, s.jsx)(P.Z, { className: "text-gray-700" }), (0, s.jsx)(o.x, { size: "subtext2", color: "gray700", children: (0, J.L)(e.inWholeMilliseconds) })] });
            var Se = n(788452),
                Ae = n(256958),
                ze = n(849335),
                Me = n(350311);
            const Te = ({ handleParticipantMenuButtonClicked: e, participants: t }) => {
                    const { t: n } = (0, a.$G)();
                    return (0, s.jsx)(s.Fragment, { children: t.map((t) => (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(Me.s, { url: t.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(G.R, { name: t.user?.displayName || "", badges: (0, q.r)(t.user), weight: "normal" })] }), (0, s.jsx)("div", { className: "flex flex-row gap-2", children: (0, s.jsx)("button", { type: "button", className: "flex flex-row gap-2 cursor-pointer text-blue-500 font-medium hover:text-blue-400", onClick: () => e(i.com.x.dms.ParticipantMenuItem.AcceptMembership, t), children: n("Approve") }) })] }, t.userId.userIdString)) });
                },
                Pe = i.com.x.dms.groupinvite,
                Be = i.com.x.dms.convinfo,
                Ge = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        [l, d] = (0, c.useState)(null),
                        m = (0, U.n)(),
                        x = (0, D.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = m.groupInviteSettingsComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new Pe.GroupInviteSettingsCallbacks(() => {
                                        x.toConversationInfo(e);
                                    }),
                                ),
                                s = m.convInfoComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new Be.ConversationInfoCallbacks(
                                        () => {
                                            x.toConversation(e);
                                        },
                                        () => {
                                            x.toInbox();
                                        },
                                        () => {},
                                        () => {},
                                        () => {},
                                        () => {
                                            x.toParticipants(e);
                                        },
                                        () => {
                                            x.toVanishingMode(e);
                                        },
                                        () => {
                                            x.toGroupInvite(e);
                                        },
                                    ),
                                );
                            return (
                                o(n),
                                d(s),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [m, e, x]),
                        (0, s.jsxs)(V.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(ae, {
                                    title: t("Group Invite Link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(Pe.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(Le, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                                l && (0, s.jsx)("div", { className: "flex items-center w-full px-4 ", children: (0, s.jsx)(Ue, { component: l }) }),
                            ],
                        })
                    );
                },
                Le = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, p._)(e.state),
                        i = (0, c.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(Pe.GroupInviteSettingsEvent.LinkCopied), (0, Ae.Am)(t("Link copied!")));
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
                                                children: (0, s.jsx)(ze.r, {
                                                    checked: n.isGroupInviteEnabled,
                                                    onCheckedChange: () => {
                                                        e.onEvent(Pe.GroupInviteSettingsEvent.ToggleGroupInvite);
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
                },
                Ue = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, p._)(e.state),
                        i = (0, c.useCallback)(
                            (t, n) => {
                                e.onEvent(new Be.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    if (n.contents === Be.ConversationInfoContents.Loading) return (0, s.jsx)(r.P, {});
                    if (!(n.contents instanceof Be.ConversationInfoContents.Loaded)) return null;
                    const l = n.contents.memberRequestSection;
                    return l
                        ? (0, s.jsx)("div", {
                              className: "w-full",
                              children: (0, s.jsxs)("div", {
                                  className: "w-full",
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                          children: [
                                              (0, s.jsx)(o.x, { color: "gray700", children: t("Pending requests") }),
                                              l.showMoreUsersLink &&
                                                  (0, s.jsx)("button", {
                                                      type: "button",
                                                      onClick: () => {
                                                          e.onEvent(Be.ConversationInfoEvent.MembershipRequestButtonClicked);
                                                      },
                                                      children: (0, s.jsx)(o.x, { color: "primary", children: t("See all ({number})", { number: l.showMoreUsersLink + l.participants.asJsReadonlyArrayView().length }) }),
                                                  }),
                                          ],
                                      }),
                                      (0, s.jsx)(Q.I, { children: (0, s.jsx)(Te, { handleParticipantMenuButtonClicked: i, participants: l.participants.asJsReadonlyArrayView() }) }),
                                  ],
                              }),
                          })
                        : null;
                };
            var De = n(548978);
            const Oe = i.com.x.dms.composer.composer.ChatComposerEvent;
            function Fe() {
                const e = (0, ve.a)(),
                    t = (0, fe.F)(),
                    n = (0, ge.v)(),
                    i = (0, je.k)(),
                    a = (0, we.m)();
                return "" !== e && i ? (0, s.jsx)(re, { id: e }) : "" !== e && t ? (0, s.jsx)(se, { id: e }) : "" !== e && n ? (0, s.jsx)(xe, { id: e }) : "" !== e && a ? (0, s.jsx)(Ge, { id: e }) : "" !== e ? (0, s.jsx)(Ze, { id: e }) : (0, s.jsxs)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: [(0, s.jsx)("div", { className: "text-[76px] mb-10", children: (0, s.jsx)(Se.Z, { className: "rotate-[8.29deg]" }) }), (0, s.jsx)(o.x, { size: "title4", weight: "medium", children: "Select a message" }), (0, s.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", children: "To start chatting" })] });
            }
            function Ze({ id: e }) {
                const [t, n] = (0, c.useState)(null),
                    a = (0, U.n)(),
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
                    t ? (0, s.jsx)($e, { component: t }) : (0, s.jsx)("div", { className: "w-full h-dvh flex justify-center items-center", children: (0, s.jsx)(r.P, {}) })
                );
            }
            function $e({ component: e }) {
                const t = (0, p._)(e.state),
                    { t: n } = (0, a.$G)(),
                    i = (0, c.useRef)(null),
                    [r, d] = (0, c.useState)(0),
                    m = (0, c.useCallback)(
                        (t) => {
                            e.composer.onEvent(new Oe.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    x = (0, c.useCallback)(() => {
                        e.composer.onEvent(Oe.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: u, handleDragOver: h, handleDragLeave: v, handleDrop: f } = (0, Ce.F)({ onFileAttached: m, onFileDrop: x, isEnabled: !t.isReadOnly });
                return (
                    (0, c.useLayoutEffect)(() => {
                        const e = i.current;
                        if (!e) return;
                        const t = new ResizeObserver((t) => {
                            for (const n of t)
                                if (n.target === e) {
                                    const e = n.contentRect.height;
                                    d(e);
                                }
                        });
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, []),
                    (0, s.jsxs)("div", { className: "flex flex-col h-dvh flex-grow relative", onDragOver: h, onDragLeave: v, onDrop: f, children: [u && (0, s.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, s.jsx)(o.x, { size: "subtext1", weight: "medium", color: "brand", children: n("Drop file to attach") }) }), (0, s.jsx)(Ie, { component: e }), (0, s.jsx)("div", { className: "flex-1 overflow-hidden isolate", children: (0, s.jsx)(pe.Bu, { children: (0, s.jsx)(he.r, { component: e, isTypingIndicatorShown: !!t.typingIndicatorItem, composerHeight: r }) }) }), (0, s.jsxs)("div", { className: "absolute bottom-0 left-0 right-[11px] isolate", ref: i, children: [t.typingIndicatorItem && (0, s.jsx)(De.y, { typingIndicatorItem: t.typingIndicatorItem }), t.isReadOnly ? (0, s.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, s.jsx)(o.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation due to a security verification failure.") : n("This conversation is currently in read-only mode.") }) }) : (0, s.jsx)(A, { component: e }), (0, s.jsx)(l.r, { to: "bottom", className: "-z-10", strength: t.typingIndicatorItem ? 7 : 5 })] })] })
                );
            }
        },
        630086: (e, t, n) => {
            n.d(t, { I: () => l, R: () => r });
            var s = n(552322),
                i = n(52053),
                a = n(941204),
                o = n(796309);
            function r({ icon: e, destructive: t, onClick: n, title: o, value: r, showChevron: l = !1 }) {
                return (0, s.jsx)("div", { className: "rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between px-4 py-3", children: [(0, s.jsxs)("div", { className: `py-px flex items-center gap-3 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(a.x, { size: "body", weight: "normal", color: t ? "red500" : "text", children: o })] }), (0, s.jsxs)("div", { className: "flex items-center gap-3", children: [r && (0, s.jsx)(a.x, { size: "body", color: "text", weight: "normal", children: r }), l && (0, s.jsx)(i.Z, { className: "text-gray-700" })] })] }) });
            }
            function l({ children: e, className: t }) {
                return (0, s.jsx)("div", { className: (0, o.cn)("flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl", t), children: e });
            }
        },
        174254: (e, t, n) => {
            n.d(t, { p: () => C });
            var s = n(552322),
                i = n(159603),
                a = n(921879),
                o = n(202784),
                r = n(110241),
                l = n(703612),
                c = n(941204),
                d = n(14269),
                m = n(52053),
                x = n(830806),
                u = n(242782),
                h = n(169355),
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
                w = ({ onEvent: e, previewWithMetadata: t, isSelected: n, withSeparator: a = !1, isSearch: o }) => {
                    const r = t.preview?.timestampValue,
                        w = t.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsx)("div", {
                        className: "px-1",
                        children: (0, s.jsxs)("div", {
                            className: `flex flex-row  px-1 gap-2 rounded-lg hover:bg-gray-100 ${n && "bg-gray-0"} transition-colors duration-100 cursor-pointer`,
                            children: [
                                t.isUnreadByMe && !o ? (0, s.jsx)("div", { className: "flex items-center", children: (0, s.jsx)(d.Z, { width: "14", height: "14", className: "text-blue-500" }) }) : (0, s.jsx)("div", { className: "w-[14px] flex-shrink-0" }),
                                (0, s.jsxs)("div", { style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: "flex items-center grow gap-3 rounded-lg  transition-colors duration-100", children: [(0, s.jsx)(p.x, { avatarSize: "xxLarge", titleState: t.metadata.title, onCustomAvatarNeedsResolving: (n) => e(new i.com.x.dms.convlist.ConversationListEvent.CustomAvatarNeedsResolving(t.conversationId, n)), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 flex-row flex self-stretch py-2 pb-3 border-b " + (a ? "border-gray-50" : "border-transparent"), children: [(0, s.jsxs)("div", { className: "flex-1 gap-5", children: [(0, s.jsx)(l.R, { name: t.metadata.title.title, badges: w ? (0, f.r)(t.metadata.title.otherUser) : void 0, screenName: w ? t.metadata.title.otherUser?.screenName : void 0 }), (0, s.jsx)(c.x, { color: "gray700", weight: t.isUnreadByMe ? "bold" : "normal", numberOfLines: 2, className: "break-all min-h-[2.5rem]", children: (0, s.jsx)(g, { previewWithMetadata: t }) })] }), (0, s.jsxs)("div", { className: "flex flex-col items-end", children: [(0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [(0, s.jsx)(c.x, { size: "subtext1", color: "gray700", children: r && (0, s.jsx)(v.Q, { timestamp: r }) }), (0, s.jsx)(m.Z, { width: "20", height: "20", className: "text-gray-300 -mr-1" })] }), (0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [t.isMuted && (0, s.jsx)(x.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === j.Read && (0, s.jsx)(u.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === j.Unread && (0, s.jsx)(h.Z, { width: "14", height: "14", className: "text-gray-300" })] })] })] })] }),
                            ],
                        }),
                    });
                },
                C = ({ onEvent: e, isSearch: t, conversations: n }) => {
                    const l = (0, r.a)(),
                        c = (0, o.useRef)(null),
                        d = (0, o.useRef)({ start: 0, end: 0 }),
                        m = (0, o.useCallback)(() => {
                            const t = c.current;
                            if (!t) return;
                            const { start: s, end: a } = d.current,
                                o = t.findStartIndex(),
                                r = t.findEndIndex();
                            if (s !== o || a !== r) {
                                const t = i.kotlin.collections.KtList.fromJsArray(n.slice(o, r + 1).map((e) => e.conversationId));
                                e(new i.com.x.dms.convlist.ConversationListEvent.VisibleConversationIdsChanged(t)), (d.current = { start: o, end: r });
                            }
                        }, [e, n.slice]),
                        x = (0, o.useCallback)(
                            (a, o) => {
                                const r = a.conversationId.id === l,
                                    c = o + 1 < n.length && n[o + 1]?.conversationId.id === l;
                                return (0, s.jsx)(
                                    "div",
                                    {
                                        onClick: () => {
                                            const t = new i.com.x.dms.convlist.ConversationListEvent.RowClicked(a.conversationId, a.preview?.lastReadSequenceNumber);
                                            e(t);
                                        },
                                        children: (0, s.jsx)(w, { previewWithMetadata: a, onEvent: e, isSelected: r, withSeparator: !c && !r, isSearch: t }),
                                    },
                                    a.conversationId.id + o,
                                );
                            },
                            [l, e, n, t],
                        );
                    return (0, s.jsx)(a.T, { api: c, onScroll: m, items: n, renderItem: x, className: "!h-full scrollbar-thin-custom" });
                };
        },
        897995: (e, t, n) => {
            n.d(t, { Y: () => l });
            var s = n(552322),
                i = n(436059),
                a = n(941204),
                o = n(887491),
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
        996016: (e, t, n) => {
            n.d(t, { b: () => v });
            var s = n(552322),
                i = n(703612),
                a = n(941204),
                o = n(350311),
                r = n(336984),
                l = n(776076),
                c = n(436059),
                d = n(429804),
                m = n(951671),
                x = n(384226),
                u = n(421018),
                h = n(159603);
            const p = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, menuItems: n, participant: i }) => {
                    if (!n || 0 === n.length) return null;
                    const a = n
                        .map((e) =>
                            ((e, t, n) => {
                                const i = () => {
                                    n(e, t);
                                };
                                switch (e) {
                                    case h.com.x.dms.ParticipantMenuItem.AddAsAdmin:
                                        return { text: "Add as admin", icon: (0, s.jsx)(d.Z, {}), onClick: i };
                                    case h.com.x.dms.ParticipantMenuItem.RemoveAsAdmin:
                                        return { text: "Remove as admin", icon: (0, s.jsx)(m.Z, {}), destructive: !0, onClick: i };
                                    case h.com.x.dms.ParticipantMenuItem.RemoveFromGroup:
                                        return { text: "Remove from group", icon: (0, s.jsx)(x.Z, {}), destructive: !0, onClick: i };
                                }
                                return null;
                            })(e, i, t),
                        )
                        .filter((e) => !!e);
                    return (0, s.jsx)(l.P, { items: a, trigger: (0, s.jsx)(c.z, { className: "justify-self-end", icon: (0, s.jsx)(u.Z, { className: "text-gray-700" }), variant: "primaryText", color: "gray700", backgroundColor: "gray700", onClick: () => e(i.userId) }) });
                },
                v = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: l }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const c = l.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(o.s, { url: n.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(i.R, { name: n.user?.displayName || "", badges: (0, r.r)(n.user), weight: "normal" }), n.isAdmin && (0, s.jsx)("div", { className: "p-1 rounded bg-gray-200", children: (0, s.jsx)(a.x, { size: "subtext3", children: "Admin" }) })] }), (0, s.jsx)(p, { participant: n, menuItems: c, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
        },
        759746: (e, t, n) => {
            n.d(t, { M: () => r });
            var s = n(552322),
                i = n(475694),
                a = n(350311);
            const o = ({ firstUrl: e, resolution: t, secondUrl: n, size: i = "xxLarge" }) => {
                    const o = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "33.33%";
                                case "xxLarge":
                                    return "16px";
                                default:
                                    return "8px";
                            }
                        })(i),
                        r = ((e) => ("fill" === e ? "2%" : "1px"))(i),
                        l = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "fill";
                                case "xxLarge":
                                    return "large";
                                default:
                                    return "medium";
                            }
                        })(i);
                    return (0, s.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${o} - ${r} * 2)` }, children: [(0, s.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: r }, children: (0, s.jsx)(a.s, { url: e, size: l, resolution: t }) }), (0, s.jsx)("div", { style: { marginLeft: `calc(-${o} - ${r} * 2)`, marginTop: `calc(-${o} + ${r} * 2)`, marginBottom: o }, children: (0, s.jsx)(a.s, { url: n, size: l, resolution: t }) })] });
                },
                r = ({ avatarSize: e, isInlineFacepile: t, resolution: n, users: r }) => {
                    const l = ((e) => {
                        switch (e) {
                            case "fill":
                            case "xxLarge":
                            case "large":
                                return e;
                            default:
                                return "large";
                        }
                    })(e);
                    if (t) {
                        if (r.length >= 2) return (0, s.jsx)(o, { size: l, firstUrl: r[0]?.profileImageUrl, resolution: n, secondUrl: r[1]?.profileImageUrl });
                        if (1 === r.length) return (0, s.jsx)(a.s, { url: r[0]?.profileImageUrl, size: e, resolution: n });
                    }
                    const c = r.slice(0, 3).map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return (0, s.jsx)(i.o, { urls: c, size: e, resolution: n, stackOrder: "overlap" });
                };
        },
        32161: (e, t, n) => {
            n.d(t, { x: () => l });
            var s = n(552322),
                i = n(159603),
                a = n(350311);
            const o = ({ avatar: e, avatarSize: t, onCustomAvatarNeedsResolving: n }) => (e instanceof i.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, s.jsx)(a.s, { url: e.uri, size: t }) : (e instanceof i.com.x.dms.model.MediaUriState.AvatarNeedsResolving && n(e), (0, s.jsx)(a.s, { size: t })));
            var r = n(759746);
            const l = ({ avatarSize: e, isInlineFacepile: t, onCustomAvatarNeedsResolving: n, titleState: l }) => {
                if (l instanceof i.com.x.dms.model.DmTitleState.OneToOne) return (0, s.jsx)(a.s, { url: l.otherUser?.profileImageUrl, size: e });
                if (l instanceof i.com.x.dms.model.DmTitleState.Group) {
                    if (l.avatarType instanceof i.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, s.jsx)(o, { avatar: l.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: n });
                    if (l.avatarType instanceof i.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, s.jsx)(r.M, { avatarSize: e, isInlineFacepile: t, users: l.avatarType.users.asJsReadonlyArrayView() });
                }
                return null;
            };
        },
        350311: (e, t, n) => {
            n.d(t, { j: () => a, s: () => o });
            var s = n(552322),
                i = n(26429);
            const a = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                o = ({ url: e, size: t, resolution: n = "200x200" }) => (0, s.jsx)(i.q, { url: e || a, size: t, resolution: n });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-b4a0aebf.ef4795aa.js.map
