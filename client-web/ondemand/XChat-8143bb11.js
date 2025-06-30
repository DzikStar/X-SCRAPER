"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-8143bb11"],
    {
        349907: (e, t, n) => {
            n.d(t, { f: () => k });
            var s = n(552322),
                i = n(159603),
                a = n(202784),
                o = n(505332),
                r = n(455091),
                l = n(89195),
                c = n(193686),
                d = n(256958),
                m = n(332161),
                x = n(261012),
                u = n(630086),
                h = n(589259),
                v = n(350311),
                p = n(336984);
            const f = ({ handleParticipantMenuButtonClicked: e, participants: t }) => {
                const { t: n } = (0, r.$G)();
                return (0, s.jsx)(s.Fragment, { children: t.map((t) => (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(v.s, { url: t.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(h.R, { name: t.user?.displayName || "", badges: (0, p.r)(t.user), weight: "normal" })] }), (0, s.jsx)("div", { className: "flex flex-row gap-2", children: (0, s.jsx)("button", { type: "button", className: "flex flex-row gap-2 cursor-pointer text-blue-500 font-medium hover:text-blue-400", onClick: () => e(i.com.x.dms.ParticipantMenuItem.AcceptMembership, t), children: n("Approve") }) })] }, t.userId.userIdString)) });
            };
            var g = n(155369),
                j = n(379342),
                w = n(671889),
                C = n(533476);
            const b = i.com.x.dms.groupinvite,
                y = i.com.x.dms.convinfo,
                k = ({ id: e }) => {
                    const { t } = (0, r.$G)(),
                        [n, l] = (0, a.useState)(null),
                        [d, m] = (0, a.useState)(null),
                        x = (0, g.n4)(),
                        u = (0, j.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = x.groupInviteSettingsComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new b.GroupInviteSettingsCallbacks(
                                        () => {
                                            u.toConversationInfo(e);
                                        },
                                        () => {},
                                        () => {},
                                    ),
                                ),
                                s = x.convInfoComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new y.ConversationInfoCallbacks(
                                        () => {
                                            u.toConversation(e);
                                        },
                                        () => {
                                            u.toInbox();
                                        },
                                        () => {},
                                        () => {},
                                        () => {},
                                        () => {
                                            u.toParticipants(e);
                                        },
                                        () => {
                                            u.toVanishingMode(e);
                                        },
                                        () => {
                                            u.toGroupInvite(e);
                                        },
                                        () => {},
                                        () => {},
                                        () => {},
                                    ),
                                );
                            return (
                                l(n),
                                m(s),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [x, e, u]),
                        (0, s.jsxs)(w.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(o.Q, {
                                    title: t("Group invite link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(b.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(N, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(c.P, {}) }),
                                d && (0, s.jsx)("div", { className: "flex items-center w-full px-4 max-w-3xl", children: (0, s.jsx)(I, { component: d }) }),
                            ],
                        })
                    );
                },
                N = ({ component: e }) => {
                    const { t } = (0, r.$G)(),
                        n = (0, C._)(e.state),
                        i = (0, a.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(b.GroupInviteSettingsEvent.LinkCopied), (0, d.Am)(t("Link copied!")));
                        }, [e, n.inviteUrl, t]);
                    return (0, s.jsx)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6 max-w-3xl",
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
                                                        e.onEvent(b.GroupInviteSettingsEvent.ToggleGroupInvite);
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
                },
                I = ({ component: e }) => {
                    const { t } = (0, r.$G)(),
                        n = (0, C._)(e.state),
                        i = (0, a.useCallback)(
                            (t, n) => {
                                e.onEvent(new y.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    if (n.contents === y.ConversationInfoContents.Loading) return (0, s.jsx)(c.P, {});
                    if (!(n.contents instanceof y.ConversationInfoContents.Loaded)) return null;
                    const o = n.contents.memberRequestSize;
                    return o
                        ? (0, s.jsx)("div", {
                              className: "w-full",
                              children: (0, s.jsxs)("div", {
                                  className: "w-full",
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                          children: [
                                              (0, s.jsx)(m.x, { color: "gray700", children: t("Pending requests") }),
                                              o > 3 &&
                                                  (0, s.jsx)("button", {
                                                      type: "button",
                                                      onClick: () => {
                                                          e.onEvent(y.ConversationInfoEvent.MembershipRequestButtonClicked);
                                                      },
                                                      children: (0, s.jsx)(m.x, { color: "primary", children: t("See all ({number})", { number: o }) }),
                                                  }),
                                          ],
                                      }),
                                      (0, s.jsx)(u.I, { children: (0, s.jsx)(f, { handleParticipantMenuButtonClicked: i, participants: n.contents.metadata.pendingMembers.asJsReadonlyArrayView() }) }),
                                  ],
                              }),
                          })
                        : null;
                };
        },
        780361: (e, t, n) => {
            n.d(t, { V: () => U });
            var s = n(552322),
                i = n(159603),
                a = n(607334),
                o = n(129558),
                r = n(666200),
                l = n(515790),
                c = n(89195),
                d = n(25457),
                m = n(193686),
                x = n(332161),
                u = n(959992),
                h = n(993165),
                v = n(589259),
                p = n(351417),
                f = n(31674),
                g = n(202784),
                j = n(155369),
                w = n(379342),
                C = n(455091),
                b = n(846742),
                y = n(996016),
                k = n(32161),
                N = n(870392),
                I = n(671889),
                E = n(533476),
                M = n(658358),
                P = n(336984),
                S = n(369962),
                A = n(145731),
                R = n(442942),
                G = n(951671),
                T = n(630086),
                z = n(344851);
            const B = i.com.x.dms.convinfo,
                L = i.com.x.dms.ConversationInfoBottomButton;
            function Z({ button: e, onEvent: t, buttonStyleSheet: n }) {
                const i = (function (e, t) {
                        const { t: n } = (0, C.$G)();
                        switch (e) {
                            case L.DeleteConversation:
                                return { title: n("Delete conversation"), message: n("This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it."), icon: (0, s.jsx)(A.Z, { className: t ?? void 0 }), destructive: !0 };
                            case L.LeaveGroup:
                                return { title: n("Leave conversation"), message: n("This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it."), icon: (0, s.jsx)(R.Z, { className: t ?? void 0 }), destructive: !0 };
                            case L.ResignAsAdmin:
                                return { title: n("Resign as admin"), message: n("Are you sure you want to resign as admin?"), icon: (0, s.jsx)(G.Z, { className: t ?? void 0 }) };
                        }
                        return null;
                    })(e, n),
                    { t: a } = (0, C.$G)();
                return i
                    ? (0, s.jsx)(z.c, {
                          title: i.title,
                          trigger: (0, s.jsx)(T.R, { icon: i.icon, title: i.title, destructive: i.destructive, showChevron: !!i.showChevron, onClick: () => {} }),
                          message: i.message,
                          onConfirm: () => {
                              t(new B.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                          confirmText: a("Confirm"),
                          cancelText: a("Cancel"),
                      })
                    : null;
            }
            const O = i.com.x.dms.convinfo,
                D = ({ className: e }) => {
                    const { t } = (0, C.$G)();
                    return (0, s.jsxs)("div", { className: (0, f.cn)("flex flex-col items-center justify-center h-full gap-4", e), children: [(0, s.jsx)(m.P, {}), (0, s.jsx)(x.x, { children: t("Sync is in progress …") })] });
                };
            function U({ id: e }) {
                const [t, n] = (0, g.useState)(null),
                    a = (0, j.n4)(),
                    o = (0, w.s)(),
                    [r, l] = (0, g.useState)(!1);
                return (
                    (0, g.useEffect)(() => {
                        const t = new i.com.x.export.CancellationSignal(),
                            s = a.convInfoComponent(
                                t,
                                i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new O.ConversationInfoCallbacks(
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
                                    () => {},
                                    () => {},
                                    () => {},
                                ),
                            );
                        return (
                            n(s),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [a, e, o]),
                    t ? (0, s.jsx)(V, { component: t, showAddGroupParticipants: r, setShowAddGroupParticipants: l }) : null
                );
            }
            function V({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: m } = (0, C.$G)(),
                    f = (0, E._)(e.state);
                (0, M.e)(e.toasts);
                const j = (0, g.useCallback)(
                        (t, n) => {
                            e.onEvent(new O.ConversationInfoEvent.ParticipantClicked(t)), window.open(`https://x.com/${n}`, "_blank");
                        },
                        [e],
                    ),
                    w = (0, g.useCallback)(
                        (t, n) => {
                            e.onEvent(new O.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (f.contents === O.ConversationInfoContents.Loading) return (0, s.jsx)(I.g, { className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh relative overflow-y-auto", children: (0, s.jsx)(D, {}) });
                if (!(f.contents instanceof O.ConversationInfoContents.Loaded)) return null;
                const A = f.contents.convId,
                    R = A instanceof i.com.x.models.dm.XConversationId.Group,
                    G = f.contents.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                    z = f.contents.peopleSection,
                    B = f.contents.memberRequestSize,
                    L = (t) => {
                        e.onEvent(t);
                    },
                    U = f.contents.metadata.areNotificationsDisabled,
                    V = U ? a.Z : o.Z,
                    $ = m(G ? (U ? "Unmute conversation" : "Mute conversation") : U ? "Unmute group" : "Mute group"),
                    q = f.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds;
                return (0, s.jsxs)(I.g, {
                    className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh relative overflow-y-auto",
                    children: [
                        n && R && (0, s.jsx)(b.C, { conversationId: A, onVisibilityChange: t }),
                        R && (0, s.jsx)(N.$, { convId: A }),
                        (0, s.jsxs)("div", {
                            className: "w-full sticky left-0 top-0 py-4 px-2 z-10",
                            children: [
                                (0, s.jsx)(u.r, { className: "-z-[1]", to: "top" }),
                                (0, s.jsxs)("div", {
                                    className: "flex flex-row justify-between w-full relative",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children: (0, s.jsx)(h.z, {
                                                icon: (0, s.jsx)(r.Z, {}),
                                                onClick: (t) => {
                                                    t.stopPropagation(), e.onEvent(O.ConversationInfoEvent.BackButtonClicked);
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
                                                    children: (0, s.jsx)(k.x, {
                                                        avatarSize: "fill",
                                                        titleState: f.contents.metadata.title,
                                                        onCustomAvatarNeedsResolving: (t) => {
                                                            e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.ResolveCustomAvatar(t));
                                                        },
                                                        isInlineFacepile: !0,
                                                    }),
                                                }),
                                                (0, s.jsxs)("div", { className: "flex flex-col items-center", children: [(0, s.jsx)(v.R, { name: f.contents.metadata.title.title, badges: G ? (0, P.r)(f.contents.metadata.title.otherParticipant?.user) : void 0 }), G && f.contents.metadata.title.otherParticipant && (0, s.jsx)(p.Q, { screenName: f.contents.metadata.title.otherParticipant?.user?.screenName ?? "" })] }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children:
                                                f.contents.showEditGroupAction &&
                                                R &&
                                                (0, s.jsx)(h.z, {
                                                    variant: "brandText",
                                                    onClick: () => {
                                                        e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.EditGroupClicked(A));
                                                    },
                                                    children: (0, s.jsx)(x.x, { weight: "medium", color: "inherit", numberOfLines: 1, children: m("Edit") }),
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: "relative w-full pb-3 flex flex-col gap-6 pt-5 px-8 max-w-3xl",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [
                                    (0, s.jsx)("div", {
                                        className: " space-y-2 min-w-[220px]",
                                        children: (0, s.jsxs)("div", {
                                            className: "h-20 flex flex-col justify-center items-center gap-2 cursor-pointer bg-gray-0 hover:bg-gray-100 rounded-xl p-2",
                                            onClick: () => {
                                                e.onEvent(U ? O.ConversationInfoEvent.OnUnMuteClicked : O.ConversationInfoEvent.OnMuteClicked);
                                            },
                                            children: [(0, s.jsx)(V, { className: "w-6 h-6" }), (0, s.jsx)(x.x, { size: "subtext2", weight: "medium", color: "gray700", children: $ })],
                                        }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, s.jsx)(x.x, { weight: "bold", className: "px-4 pb-2", children: m(R ? "Group settings" : "Chat settings") }),
                                            (0, s.jsxs)(T.I, {
                                                children: [
                                                    !f.contents.metadata.isReadOnly &&
                                                        (0, s.jsx)(T.R, {
                                                            icon: (0, s.jsx)(l.Z, { className: "h-5 w-5" }),
                                                            title: m("Disappearing messages"),
                                                            showChevron: !0,
                                                            value: q ? (0, S.L)(q) : m("Off"),
                                                            onClick: () => {
                                                                e.onEvent(O.ConversationInfoEvent.DisappearingMessagesClicked);
                                                            },
                                                        }),
                                                    z?.canAddPeople &&
                                                        (0, s.jsx)(T.R, {
                                                            icon: (0, s.jsx)(c.Z, { className: "h-5 w-5" }),
                                                            onClick: () => {
                                                                e.onEvent(O.ConversationInfoEvent.GroupInviteClicked);
                                                            },
                                                            title: m("Group invite link"),
                                                            value: B && f.contents.metadata.attributes?.inviteUrl ? (0, s.jsx)("div", { className: "flex items-center justify-center w-6 h-6 rounded-full bg-blue-500", children: (0, s.jsx)(x.x, { size: "subtext2", color: "white", weight: "medium", children: B }) }) : f.contents.metadata.attributes?.inviteUrl ? m("On") : m("Off"),
                                                            showChevron: !0,
                                                        }),
                                                    f.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(Z, { button: e, onEvent: L, buttonStyleSheet: "h-5 w-5" }, e.name)),
                                                ],
                                            }),
                                        ],
                                    }),
                                    z
                                        ? (0, s.jsx)("div", {
                                              className: "w-full mt-4",
                                              children: (0, s.jsxs)("div", {
                                                  className: "w-full",
                                                  children: [
                                                      (0, s.jsxs)("div", {
                                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                                          children: [
                                                              (0, s.jsx)(x.x, { weight: "bold", children: m("Members") }),
                                                              z.showMoreUsersLink &&
                                                                  (0, s.jsx)("button", {
                                                                      type: "button",
                                                                      onClick: () => {
                                                                          e.onEvent(O.ConversationInfoEvent.TotalNumMembersClicked);
                                                                      },
                                                                      children: (0, s.jsx)(x.x, { color: "primary", children: m("See all ({number})", { number: z.showMoreUsersLink + z.participants.asJsReadonlyArrayView().length }) }),
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, s.jsxs)(T.I, {
                                                          children: [
                                                              f.contents.peopleSection.canAddPeople &&
                                                                  (0, s.jsx)(T.R, {
                                                                      icon: (0, s.jsx)(d.Z, { className: "h-5 w-5" }),
                                                                      onClick: () => {
                                                                          e.onEvent(O.ConversationInfoEvent.AddPeopleClicked);
                                                                      },
                                                                      title: m("Add members"),
                                                                  }),
                                                              (0, s.jsx)(y.b, { handleParticipantClicked: j, handleParticipantMenuButtonClicked: w, participants: z.participants.asJsReadonlyArrayView(), menuItemsMap: z.menuItems.asJsReadonlyMapView() }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : null,
                                    f.isLoading && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(u.r, { to: "bottom", strength: 1 }), (0, s.jsx)(D, { className: "z-10" })] }),
                                ],
                            }),
                        }),
                    ],
                });
            }
        },
        505332: (e, t, n) => {
            n.d(t, { Q: () => r });
            var s = n(552322),
                i = n(666200),
                a = n(993165),
                o = n(332161);
            const r = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center w-full relative pt-4 px-2 pb-2", children: [(0, s.jsx)(a.z, { icon: (0, s.jsx)(i.Z, {}), onClick: t, variant: "mutedText" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(o.x, { size: "headline1", weight: "bold", className: "text-center", children: e }) }), (0, s.jsx)("div", { className: "w-9" }), " "] });
        },
        630086: (e, t, n) => {
            n.d(t, { I: () => l, R: () => r });
            var s = n(552322),
                i = n(52053),
                a = n(332161),
                o = n(31674);
            function r({ icon: e, destructive: t, onClick: n, title: o, value: r, showChevron: l = !1 }) {
                return (0, s.jsx)("div", { className: "rounded-xl bg-gray-0 cursor-pointer w-full hover:bg-gray-100 transition-colors", style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0, 0.5)" }, onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between px-4 py-3", children: [(0, s.jsxs)("div", { className: `py-px flex items-center gap-3 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(a.x, { size: "body", weight: "normal", color: t ? "red500" : "text", children: o })] }), (0, s.jsxs)("div", { className: "flex items-center gap-3", children: [r && (0, s.jsx)(a.x, { size: "body", color: "text", weight: "normal", children: r }), l && (0, s.jsx)(i.Z, { className: "text-gray-700" })] })] }) });
            }
            function l({ children: e, className: t }) {
                return (0, s.jsx)("div", { className: (0, o.cn)("flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl", t), children: e });
            }
        },
        155733: (e, t, n) => {
            n.d(t, { _: () => u });
            var s = n(552322),
                i = n(159603),
                a = n(455091),
                o = n(344851),
                r = n(202784),
                l = n(121113),
                c = n(48114);
            const d = i.com.x.dms.convlist.ConversationListEvent,
                m = i.com.x.dms.ConversationListAction,
                x = i.com.x.models.dm.XConversationId;
            function u({ conversationId: e, onEvent: t }) {
                const { t: n } = (0, a.$G)(),
                    i = (0, r.useRef)(!1),
                    u = (0, l.g)(e),
                    h = (0, c.D)(e);
                (0, r.useEffect)(() => {
                    h !== e && (i.current = !1);
                }, [e, h]);
                const v = (function (e, t) {
                    return { title: t instanceof x.Group ? e("Leave conversation") : e("Delete conversation"), message: e("This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it.") };
                })(n, u);
                return (0, s.jsx)(o.c, {
                    open: !!e,
                    onOpenChange: (e) => {
                        e || i.current || t(d.DismissConfirmDeleteDialog);
                    },
                    title: v.title,
                    message: v.message,
                    onConfirm: () => {
                        e && ((i.current = !0), t(new d.ConversationActionClicked(e, m.RemoveChat)));
                    },
                    confirmText: n("Confirm"),
                    cancelText: n("Cancel"),
                });
            }
        },
        238750: (e, t, n) => {
            n.d(t, { p: () => Z });
            var s = n(552322),
                i = n(159603),
                a = n(983706),
                o = n(664177),
                r = n(202784),
                l = n(110241),
                c = n(14269),
                d = n(830806),
                m = n(695102),
                x = n(242782),
                u = n(169355),
                h = n(589259),
                v = n(332161),
                p = n(32161),
                f = n(537335),
                g = n(533476),
                j = n(336984),
                w = n(455091),
                C = n(741321),
                b = n(9001),
                y = n(129558),
                k = n(607334),
                N = n(442942),
                I = n(145731),
                E = n(534625),
                M = n(388414);
            const P = i.com.x.dms.convlist.ConversationListEvent,
                S = i.com.x.models.dm.XConversationId;
            function A({ previewWithMetadata: e, actionsDialog: t, onEvent: n, children: i }) {
                const { t: a } = (0, w.$G)(),
                    o = (0, r.useRef)(!1),
                    l = (t) => {
                        (o.current = !0),
                            requestAnimationFrame(() => {
                                n(new P.ConversationActionClicked(e.preview.conversationId, t));
                            });
                    },
                    c = t?.actions
                        .asJsReadonlyArrayView()
                        .map((t) =>
                            ((e, t, n, i) => {
                                const a = () => {
                                    i(n);
                                };
                                switch (n.name) {
                                    case "MarkRead":
                                        return { text: e("Mark as read"), icon: (0, s.jsx)(C.Z, {}), onClick: a };
                                    case "MarkUnread":
                                        return { text: e("Mark as unread"), icon: (0, s.jsx)(b.Z, {}), onClick: a };
                                    case "MuteConversation":
                                        return { text: e("Mute conversation"), icon: (0, s.jsx)(y.Z, {}), onClick: a };
                                    case "UnmuteConversation":
                                        return { text: e("Unmute conversation"), icon: (0, s.jsx)(k.Z, {}), onClick: a };
                                    case "RequestRemove":
                                    case "RemoveChat":
                                        return { text: t.preview?.conversationId instanceof S.Group ? e("Leave conversation") : e("Delete conversation"), icon: t.preview?.conversationId instanceof S.Group ? (0, s.jsx)(N.Z, {}) : (0, s.jsx)(I.Z, {}), destructive: !0, onClick: a };
                                    case "PinConversation":
                                        return { text: e("Pin conversation"), icon: (0, s.jsx)(E.Z, {}), onClick: a };
                                    case "UnpinConversation":
                                        return { text: e("Unpin conversation"), icon: (0, s.jsx)(E.Z, {}), onClick: a };
                                }
                            })(a, e, t, l),
                        )
                        .filter((e) => !!e);
                return (0, s.jsx)(M.I, {
                    onOpenChange: (t) => {
                        if (!t && o.current) return void (o.current = !1);
                        const s = t ? new P.RowLongClicked(e) : P.DismissConversationActionsDialog;
                        n(s);
                    },
                    trigger: i,
                    items: c || [],
                    onClick: (e) => e.stopPropagation(),
                });
            }
            const R = ({ previewWithMetadata: e }) => {
                if (!e.preview) return null;
                const t = e.preview.latestMessagePreview,
                    n = e.metadata.usersByIdAllTime.asJsReadonlyMapView(),
                    a = n.get(t.sender)?.displayName,
                    o = e.isGroup && !t.isSent && !!a,
                    r = [];
                if (t.messageText) o && r.push((0, s.jsx)(v.x, { as: "span", color: "inherit", size: "inherit", weight: "bold", children: `${a}: ` }, 1)), r.push((0, s.jsx)(v.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: t.messageText }, 2));
                else if (t.withAttachmentType) {
                    const e = ((e) => {
                        if (e instanceof i.com.x.dms.MessageAttachmentType.UrlCard || e instanceof i.com.x.dms.MessageAttachmentType.UnifiedCard) return "a link";
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
                                t = "a photo";
                                break;
                            case i.com.x.dms.MessageAttachmentType.File:
                                t = "a file";
                                break;
                            case i.com.x.dms.MessageAttachmentType.Post:
                                t = "a post";
                                break;
                            default:
                                t = "an attachment";
                        }
                        return t;
                    })(t.withAttachmentType);
                    o ? (r.push((0, s.jsx)(v.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: a }, 3)), r.push((0, s.jsx)(v.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: ` sent ${e}` }, 4))) : r.push((0, s.jsx)(v.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `Sent ${e}` }, 5));
                }
                return r;
            };
            var G = n(548978);
            const T = i.com.x.dms.ReadByOthersIndicator,
                z = ({ onEvent: e, previewWithMetadata: t, actionsDialog: n, isSelected: a, withSeparator: o = !1, isSearch: r, isPinned: l, typingIndicatorItemState: w }) => {
                    const C = t.preview?.timestampValue,
                        b = t.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                        y = (0, g._)(w),
                        k = (0, s.jsx)("div", {
                            className: "px-1 min-h-100",
                            children: (0, s.jsxs)("div", {
                                className: `select-none flex flex-row  px-1 gap-2 rounded-lg hover:bg-gray-100 ${a && "bg-gray-0"} transition-colors cursor-pointer`,
                                style: { transitionTimingFunction: "cubic-bezier(0,0.5,0,0.5)" },
                                children: [
                                    t.isUnreadByMe && !r ? (0, s.jsx)("div", { className: "flex items-center", children: (0, s.jsx)(c.Z, { width: "14", height: "14", className: "text-blue-500" }) }) : (0, s.jsx)("div", { className: "w-[14px] flex-shrink-0" }),
                                    (0, s.jsxs)("div", { style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: "flex items-center grow gap-3 rounded-lg  transition-colors duration-100", children: [(0, s.jsx)(p.x, { avatarSize: "xxLarge", titleState: t.metadata.title, onCustomAvatarNeedsResolving: (n) => e(new i.com.x.dms.convlist.ConversationListEvent.CustomAvatarNeedsResolving(t.conversationId, n)), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 flex-row flex self-stretch py-2 pb-3 border-b " + (o ? "border-gray-50" : "border-transparent"), children: [(0, s.jsxs)("div", { className: "flex-1 gap-5", children: [(0, s.jsx)(h.R, { name: t.metadata.title.title, badges: b ? (0, j.r)(t.metadata.title.otherParticipant?.user) : void 0, screenName: b ? (t.metadata.title.otherParticipant?.user?.screenName ?? "") : void 0 }), y && !a ? (0, s.jsx)(G.y, { typingIndicatorItem: y, showAvatar: !1, className: "px-0 min-h-10" }) : (0, s.jsx)(v.x, { color: t.isUnreadByMe ? "text" : "gray700", weight: t.isUnreadByMe ? "medium" : "normal", numberOfLines: 2, className: "break-all min-h-[2.5rem]", children: (0, s.jsx)(R, { previewWithMetadata: t }) })] }), (0, s.jsxs)("div", { className: "flex flex-col items-end", children: [(0, s.jsx)("div", { className: "flex flex-row gap-1 items-center h-5", children: (0, s.jsx)(v.x, { size: "subtext1", color: "gray700", children: C && (0, s.jsx)(f.Q, { timestamp: C }) }) }), (0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [t.isMuted && (0, s.jsx)(d.Z, { width: "14", height: "14", className: "text-gray-300" }), l && (0, s.jsx)(m.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === T.Read && (0, s.jsx)(x.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === T.Unread && (0, s.jsx)(u.Z, { width: "14", height: "14", className: "text-gray-300" })] })] })] })] }),
                                ],
                            }),
                        });
                    return r ? k : (0, s.jsx)(A, { previewWithMetadata: t, actionsDialog: n, onEvent: e, children: k });
                },
                B = i.com.x.dms.convlist.ConversationListEvent,
                L = i.kotlin.collections.KtList,
                Z = ({ onEvent: e, isSearch: t, conversations: n, actionsDialog: i, observeTypingIndicator: c }) => {
                    const d = (0, l.a)(),
                        [m, x] = (0, r.useState)(!0),
                        u = (0, r.useRef)(null),
                        h = (0, r.useRef)({ start: 0, end: 0 }),
                        v = (0, r.useCallback)((e) => (i?.convId.id === e ? i : null), [i]),
                        p = (0, r.useCallback)(() => {
                            const t = u.current;
                            if (!t) return;
                            const { start: s, end: i } = h.current,
                                a = t.findStartIndex(),
                                o = t.findEndIndex();
                            if (s !== a || i !== o) {
                                const t = L.fromJsArray(n.slice(a, o + 1).map((e) => e.conversationId));
                                e(new B.VisibleConversationIdsChanged(t)), (h.current = { start: a, end: o });
                            }
                        }, [e, n.slice]);
                    (0, r.useEffect)(() => {
                        p();
                    }, [p]);
                    const f = (0, r.useCallback)(
                        (i, a) => {
                            const r = i.conversationId.id === d,
                                l = a + 1 < n.length && n[a + 1]?.conversationId.id === d,
                                u = a === n.length - 1;
                            return (0, s.jsx)(
                                o.E.div,
                                {
                                    "aria-description": i.accessibilityDescription,
                                    whileTap: { scale: 0.99, transition: { ease: "easeInOut" } },
                                    onViewportEnter: () => {
                                        x(!0);
                                    },
                                    onViewportLeave: () => {
                                        x(!1);
                                    },
                                    layout: m,
                                    onClick: () => {
                                        const t = new B.RowClicked(i.conversationId, i.preview?.lastReadSequenceNumber);
                                        e(t);
                                    },
                                    children: (0, s.jsx)(z, { previewWithMetadata: i, actionsDialog: v(i.preview?.conversationId.id || ""), typingIndicatorItemState: c(i.conversationId), onEvent: e, isSelected: r && !t, withSeparator: !l && !r && !u, isSearch: t, isPinned: i.isPinned }),
                                },
                                t ? i.conversationId.id + i.preview?.latestMessagePreview.sequenceNumber : i.conversationId.id,
                            );
                        },
                        [d, e, n, v, t, c, m],
                    );
                    return (0, s.jsx)(a.T, { api: u, onScroll: p, items: n, renderItem: f, className: "!h-full scrollbar-thin-custom pb-1", ssrCount: 10 });
                };
        },
        450683: (e, t, n) => {
            n.d(t, { P: () => o });
            var s = n(552322),
                i = n(880605);
            function a({ index: e }) {
                const t = 50 + 10 * Math.sin(e) + "%",
                    n = 70 + 10 * Math.cos(e) + "%",
                    a = 50 + 20 * Math.cos(e) + "%";
                return (0, s.jsx)("div", { className: "px-1", children: (0, s.jsx)("div", { className: "flex flex-row gap-2 px-1", children: (0, s.jsxs)("div", { className: "flex items-center grow gap-3", children: [(0, s.jsx)(i.O, { className: "h-10 w-10 rounded-full" }), (0, s.jsx)("div", { className: "flex-1 flex flex-row self-stretch py-2 pb-3 border-b border-gray-50", children: (0, s.jsxs)("div", { className: "flex-1 flex flex-col gap-1", children: [(0, s.jsx)(i.O, { className: "h-5", style: { width: t } }), (0, s.jsx)(i.O, { className: "h-4", style: { width: n } }), (0, s.jsx)(i.O, { className: "h-4", style: { width: a } })] }) })] }) }) });
            }
            function o() {
                return (0, s.jsx)("div", { className: "flex flex-col w-full min-h-auto", children: Array.from({ length: Math.ceil(window.innerHeight / 80) - 2 }).map((e, t) => (0, s.jsx)(a, { index: t }, t)) });
            }
        },
        897995: (e, t, n) => {
            n.d(t, { Y: () => l });
            var s = n(552322),
                i = n(159603),
                a = n(887491),
                o = n(993165),
                r = n(332161);
            const l = ({ component: e, dialogParams: t }) =>
                (0, s.jsxs)("div", {
                    className: "p-5 rounded-2xl border-2 border-gray-100 bg-gray-0 absolute bottom-4 left-4 right-4 flex flex-col gap-2 z-10",
                    children: [
                        (0, s.jsx)(o.z, {
                            className: "absolute top-2.5 right-2.5",
                            variant: "primaryText",
                            icon: (0, s.jsx)(a.Z, {}),
                            onClick: () => {
                                e.onEvent(i.com.x.dms.convlist.ConversationListEvent.DismissBottomDialog);
                            },
                        }),
                        (0, s.jsx)(r.x, { size: "body", weight: "bold", children: "Daily Verification" }),
                        (0, s.jsx)(r.x, { size: "body", children: "Enter your 4-digit PIN so we can keep things secure and make sure you remember it." }),
                        (0, s.jsx)(o.z, {
                            className: "h-11",
                            variant: "primaryFilled",
                            onClick: () => {
                                e.onEvent(new i.com.x.dms.convlist.ConversationListEvent.ClickPinReminderDialog(t));
                            },
                            children: (0, s.jsx)(r.x, { size: "body", weight: "bold", color: "background", children: "Enter PIN" }),
                        }),
                    ],
                });
        },
        761312: (e, t, n) => {
            n.d(t, { K: () => f });
            var s = n(552322),
                i = n(159603),
                a = n(202784),
                o = n(455091),
                r = n(193686),
                l = n(505332),
                c = n(630086),
                d = n(155369),
                m = n(379342),
                x = n(671889),
                u = n(533476),
                h = n(658358),
                v = n(996016);
            const p = i.com.x.dms.participantlist,
                f = ({ id: e }) => {
                    const { t } = (0, o.$G)(),
                        [n, c] = (0, a.useState)(null),
                        u = (0, d.n4)(),
                        h = (0, m.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = u.participantListComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new p.ParticipantListCallbacks(
                                        () => {
                                            h.toConversationInfo(e);
                                        },
                                        () => {},
                                    ),
                                );
                            return (
                                c(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [u, e, h]),
                        (0, s.jsxs)(x.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(l.Q, {
                                    title: t("All members"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(p.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(g, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                g = ({ component: e }) => {
                    const t = (0, u._)(e.state);
                    (0, h.e)(e.toasts);
                    const n = (0, a.useCallback)(
                            (t, n) => {
                                e.handleEvent(new p.ParticipantListEvent.ParticipantClicked(t)), window.open(`https://x.com/${n}`, "_blank");
                            },
                            [e],
                        ),
                        i = (0, a.useCallback)(
                            (t, n) => {
                                e.handleEvent(new p.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-8 py-4 overflow-y-auto max-w-3xl scrollbar-thin-custom", children: (0, s.jsx)(c.I, { children: (0, s.jsx)(v.b, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) }) : null;
                };
        },
        996016: (e, t, n) => {
            n.d(t, { b: () => f });
            var s = n(552322),
                i = n(455091),
                a = n(589259),
                o = n(332161),
                r = n(350311),
                l = n(336984),
                c = n(318063),
                d = n(993165),
                m = n(429804),
                x = n(951671),
                u = n(384226),
                h = n(421018),
                v = n(159603);
            const p = ({ handleParticipantMenuButtonClicked: e, menuItems: t, participant: n }) => {
                    if (!t || 0 === t.length) return null;
                    const a = t
                        .map((t) =>
                            ((e, t, n) => {
                                const a = () => {
                                        n(e, t);
                                    },
                                    { t: o } = (0, i.$G)();
                                switch (e) {
                                    case v.com.x.dms.ParticipantMenuItem.AddAsAdmin:
                                        return { text: o("Add as admin"), icon: (0, s.jsx)(m.Z, {}), onClick: a };
                                    case v.com.x.dms.ParticipantMenuItem.RemoveAsAdmin:
                                        return { text: o("Remove as admin"), icon: (0, s.jsx)(x.Z, {}), destructive: !0, onClick: a };
                                    case v.com.x.dms.ParticipantMenuItem.RemoveFromGroup:
                                        return { text: o("Remove from group"), icon: (0, s.jsx)(u.Z, {}), destructive: !0, onClick: a };
                                }
                                return null;
                            })(t, n, e),
                        )
                        .filter((e) => !!e);
                    return (0, s.jsx)(c.P, {
                        items: a,
                        trigger: (0, s.jsx)(d.z, {
                            className: "justify-self-end",
                            icon: (0, s.jsx)(h.Z, { className: "text-gray-700" }),
                            variant: "primaryText",
                            color: "gray700",
                            backgroundColor: "gray700",
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                        }),
                    });
                },
                f = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: c, isOneToOne: d }) => {
                    const { t: m } = (0, i.$G)();
                    return (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const i = c.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0 hover:bg-gray-50 cursor-pointer", onClick: () => e(n.userId, n.user?.screenName ?? ""), children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(r.s, { url: n.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(a.R, { name: n.user?.displayName || "", badges: (0, l.r)(n.user), weight: "normal" }), n.isAdmin && !d && (0, s.jsx)("div", { className: "p-1 rounded-sm bg-gray-200", children: (0, s.jsx)(o.x, { size: "subtext3", children: m("Admin") }) })] }), (0, s.jsx)(p, { participant: n, menuItems: i, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
                };
        },
        842296: (e, t, n) => {
            n.d(t, { b: () => g });
            var s = n(552322),
                i = n(159603),
                a = n(202784),
                o = n(505332),
                r = n(455091),
                l = n(515790),
                c = n(699416),
                d = n(193686),
                m = n(332161),
                x = n(155369),
                u = n(379342),
                h = n(671889),
                v = n(533476),
                p = n(167285);
            const f = i.com.x.dms.vanishingmode,
                g = ({ id: e }) => {
                    const { t } = (0, r.$G)(),
                        [n, l] = (0, a.useState)(null),
                        c = (0, x.n4)(),
                        m = (0, u.s)();
                    return (
                        (0, a.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = c.vanishingModeComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new f.VanishingModeCallbacks(() => {
                                        m.toConversationInfo(e);
                                    }),
                                );
                            return (
                                l(n),
                                () => {
                                    t.cancel();
                                }
                            );
                        }, [c, e, m]),
                        (0, s.jsxs)(h.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(o.Q, {
                                    title: t("Disappearing messages"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(f.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(j, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(d.P, {}) }),
                            ],
                        })
                    );
                },
                j = ({ component: e }) => {
                    const { t } = (0, r.$G)(),
                        n = (0, v._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6 max-w-3xl",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(l.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(m.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, a) => {
                                    const o = i ? (0, p.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long", t }) : t("None"),
                                        r = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === a ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new f.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(m.x, { children: o }), (0, s.jsx)("div", { className: "h-6 text-primary", children: r && (0, s.jsx)(c.Z, { width: 24, height: 24 }) })],
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-8143bb11.a028c29a.js.map
