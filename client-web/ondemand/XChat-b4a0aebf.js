"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-b4a0aebf"],
    {
        706480: (e, t, n) => {
            n.d(t, { Q: () => Ge });
            var s = n(552322),
                i = n(159603),
                a = n(455091),
                o = n(332161),
                r = n(193686),
                l = n(959992),
                c = n(202784),
                d = n(125691),
                m = n(38891),
                x = n(607334),
                u = n(129558),
                h = n(666200),
                v = n(515790),
                p = n(89195),
                f = n(25457),
                g = n(993165),
                j = n(57478),
                w = n(351417),
                b = n(31674),
                C = n(155369),
                y = n(379342),
                k = n(846742),
                N = n(996016),
                I = n(32161),
                E = n(378364),
                S = n(687521),
                M = n(34681),
                R = n(210071),
                z = n(533476),
                P = n(858108),
                A = n(595117);
            const T = i.com.x.dms.editgroup;
            function G({ convId: e }) {
                const t = (0, R.$)(),
                    [n, a] = (0, c.useState)(null),
                    o = (0, C.n)(),
                    r = (0, y.s)();
                return (
                    (0, c.useEffect)(() => {
                        const t = new i.com.x.export.CancellationSignal(),
                            n = o.editGroupMetadataComponent(
                                t,
                                e,
                                new T.EditGroupMetadataCallbacks(() => {
                                    r.toConversationInfo(e.id);
                                }),
                            );
                        return (
                            a(n),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [o, e, r]),
                    n ? (0, s.jsx)(L, { isOpen: t, component: n }) : null
                );
            }
            const L = ({ isOpen: e, component: t }) => {
                const { t: n } = (0, a.$G)(),
                    r = (0, z._)(t.state),
                    l = (0, c.useRef)(null),
                    d = (0, c.useRef)(null),
                    [m, x] = (0, c.useState)(null);
                (0, c.useEffect)(() => {
                    r.metadata?.title?.title && t.handleEvent(new T.EditGroupMetadataEvent.TitleTextUpdated(r.metadata.title.title));
                }, [r.metadata?.title?.title, t]);
                const u = (0, c.useCallback)(() => {
                        t.handleEvent(T.EditGroupMetadataEvent.SaveButtonClicked),
                            setTimeout(() => {
                                x(null);
                            }, 150);
                    }, [t]),
                    h = (0, c.useCallback)(() => {
                        t.handleEvent(T.EditGroupMetadataEvent.BackButtonClicked),
                            setTimeout(() => {
                                x(null);
                            }, 150);
                    }, [t]),
                    v = (0, c.useCallback)(() => {
                        d.current?.click();
                    }, []),
                    p = (0, c.useCallback)(
                        async (e) => {
                            const n = e.target.files?.[0];
                            if (!n) return;
                            const s = await (0, A.F)(n);
                            await (0, A.$)(
                                s,
                                () => {},
                                (e) => {
                                    i.com.x.dms.getUrlFromUri(e).then((e) => {
                                        e && x(e);
                                    }),
                                        t.handleEvent(new T.EditGroupMetadataEvent.NewAvatarSelected(e));
                                },
                            );
                        },
                        [t],
                    );
                return (0, s.jsx)(M.Vq, {
                    open: e,
                    onOpenChange: h,
                    children: (0, s.jsxs)(M.cZ, {
                        className: "max-w-md",
                        children: [
                            (0, s.jsx)(M.fK, { children: (0, s.jsx)(M.$N, { children: n("Edit Group") }) }),
                            (0, s.jsxs)("div", {
                                className: "flex flex-col items-center gap-6 py-4",
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: "relative group",
                                        children: [
                                            (0, s.jsx)("div", {
                                                className: "w-24 h-24 cursor-pointer hover:opacity-90 transition-opacity",
                                                onClick: v,
                                                children:
                                                    r.metadata?.title &&
                                                    (m
                                                        ? (0, s.jsx)(E.q, { url: m, size: "fill" })
                                                        : (0, s.jsx)(I.x, {
                                                              avatarSize: "fill",
                                                              titleState: r.metadata.title,
                                                              onCustomAvatarNeedsResolving: (e) => {
                                                                  P.G || t.handleEvent(new T.EditGroupMetadataEvent.ResolveCustomAvatar(e));
                                                              },
                                                              isInlineFacepile: !0,
                                                          })),
                                            }),
                                            (0, s.jsx)("input", { type: "file", ref: d, onChange: p, className: "hidden", accept: "image/*" }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", className: "mb-2", children: n("Group Name") }),
                                            (0, s.jsx)(S._, {
                                                ref: l,
                                                value: r.currentTitle,
                                                onChange: (e) => t.handleEvent(new T.EditGroupMetadataEvent.TitleTextUpdated(e.target.value)),
                                                onKeyDown: (e) => {
                                                    "Enter" === e.key && r.currentTitle.trim() && (e.preventDefault(), u());
                                                },
                                                maxLength: 50,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(M.cN, { children: [(0, s.jsx)(g.z, { variant: "mutedText", onClick: h, children: n("Cancel") }), (0, s.jsx)(g.z, { variant: "brandFilled", onClick: u, disabled: !r.currentTitle.trim(), children: n("Save") })] }),
                        ],
                    }),
                });
            };
            var U = n(671889),
                D = n(658358),
                O = n(336984),
                B = n(369962),
                Z = n(145731),
                F = n(442942),
                _ = n(951671),
                $ = n(630086),
                V = n(344851);
            const q = i.com.x.dms.convinfo,
                J = i.com.x.dms.ConversationInfoBottomButton;
            function W({ button: e, onEvent: t, buttonStyleSheet: n }) {
                const i = (function (e, t) {
                    switch (e) {
                        case J.DeleteConversation:
                            return { title: "Delete conversation", message: "This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it.", icon: (0, s.jsx)(Z.Z, { className: t ?? void 0 }), destructive: !0 };
                        case J.LeaveGroup:
                            return { title: "Leave conversation", message: "This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it.", icon: (0, s.jsx)(F.Z, { className: t ?? void 0 }), destructive: !0 };
                        case J.ResignAsAdmin:
                            return { title: "Resign as admin", message: "Are you sure you want to resign as admin?", icon: (0, s.jsx)(_.Z, { className: t ?? void 0 }) };
                    }
                    return null;
                })(e, n);
                return i
                    ? (0, s.jsx)(V.c, {
                          title: i.title,
                          trigger: (0, s.jsx)($.R, { icon: i.icon, title: i.title, destructive: i.destructive, showChevron: !!i.showChevron, onClick: () => {} }),
                          message: i.message,
                          onConfirm: () => {
                              t(new q.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                      })
                    : null;
            }
            const X = i.com.x.dms.convinfo,
                K = ({ className: e }) => (0, s.jsxs)("div", { className: (0, b.cn)("flex flex-col items-center justify-center h-full gap-4", e), children: [(0, s.jsx)(r.P, {}), (0, s.jsx)(o.x, { children: "Sync is in progress …" })] });
            function H({ id: e }) {
                const [t, n] = (0, c.useState)(null),
                    a = (0, C.n)(),
                    o = (0, y.s)(),
                    [r, l] = (0, c.useState)(!1);
                return (
                    (0, c.useEffect)(() => {
                        const t = new i.com.x.export.CancellationSignal(),
                            s = a.convInfoComponent(
                                t,
                                i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new X.ConversationInfoCallbacks(
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
                    t ? (0, s.jsx)(Q, { component: t, showAddGroupParticipants: r, setShowAddGroupParticipants: l }) : null
                );
            }
            function Q({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: r } = (0, a.$G)(),
                    d = (0, z._)(e.state);
                (0, D.e)(e.toasts);
                const b = (0, m.z)(),
                    C = (0, c.useCallback)(
                        (t) => {
                            e.onEvent(new X.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    y = (0, c.useCallback)(
                        (t, n) => {
                            e.onEvent(new X.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (d.contents === X.ConversationInfoContents.Loading) return (0, s.jsx)(U.g, { className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh relative overflow-y-auto", children: (0, s.jsx)(K, {}) });
                if (!(d.contents instanceof X.ConversationInfoContents.Loaded)) return null;
                const E = d.contents.convId,
                    S = E instanceof i.com.x.models.dm.XConversationId.Group,
                    M = d.contents.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                    R = d.contents.peopleSection,
                    A = d.contents.memberRequestSize,
                    T = (t) => {
                        e.onEvent(t);
                    },
                    L = d.contents.metadata.areNotificationsDisabled,
                    Z = L ? x.Z : u.Z,
                    F = r(M ? (L ? "Unmute conversation" : "Mute conversation") : L ? "Unmute group" : "Mute group"),
                    _ = d.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds,
                    V = !(0, P.G)() || b.isTrue("rweb_xchat_fs_worker");
                return (0, s.jsxs)(U.g, {
                    className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh relative overflow-y-auto",
                    children: [
                        n && S && (0, s.jsx)(k.C, { conversationId: E, onVisibilityChange: t }),
                        S && (0, s.jsx)(G, { convId: E }),
                        (0, s.jsxs)("div", {
                            className: "w-full sticky left-0 top-0 py-4 px-2",
                            children: [
                                (0, s.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                                (0, s.jsxs)("div", {
                                    className: "flex flex-row justify-between w-full relative",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children: (0, s.jsx)(g.z, {
                                                icon: (0, s.jsx)(h.Z, {}),
                                                onClick: (t) => {
                                                    t.stopPropagation(), e.onEvent(X.ConversationInfoEvent.BackButtonClicked);
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
                                                    children: (0, s.jsx)(I.x, {
                                                        avatarSize: "fill",
                                                        titleState: d.contents.metadata.title,
                                                        onCustomAvatarNeedsResolving: (t) => {
                                                            V && e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.ResolveCustomAvatar(t));
                                                        },
                                                        isInlineFacepile: !0,
                                                    }),
                                                }),
                                                (0, s.jsxs)("div", { className: "flex flex-col items-center", children: [(0, s.jsx)(j.R, { name: d.contents.metadata.title.title, badges: M ? (0, O.r)(d.contents.metadata.title.otherUser) : void 0 }), M && d.contents.metadata.title.otherUser && (0, s.jsx)(w.Q, { screenName: d.contents.metadata.title.otherUser.screenName })] }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children:
                                                d.contents.showEditGroupAction &&
                                                S &&
                                                (0, s.jsx)(g.z, {
                                                    variant: "brandText",
                                                    onClick: () => {
                                                        e.onEvent(new i.com.x.dms.convinfo.ConversationInfoEvent.EditGroupClicked(E));
                                                    },
                                                    children: (0, s.jsx)(o.x, { weight: "medium", color: "inherit", numberOfLines: 1, children: r("Edit") }),
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: "relative w-full pb-3 flex flex-col gap-6 pt-5 px-8",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [
                                    (0, s.jsx)("div", {
                                        className: " space-y-2 min-w-[220px]",
                                        children: (0, s.jsxs)("div", {
                                            className: "h-20 flex flex-col justify-center items-center gap-2 cursor-pointer bg-gray-0 hover:bg-gray-100 rounded-xl p-2",
                                            onClick: () => {
                                                e.onEvent(L ? X.ConversationInfoEvent.OnUnMuteClicked : X.ConversationInfoEvent.OnMuteClicked);
                                            },
                                            children: [(0, s.jsx)(Z, { className: "w-6 h-6" }), (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", color: "gray700", children: F })],
                                        }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, s.jsx)(o.x, { weight: "bold", className: "px-4 pb-2", children: r(S ? "Group settings" : "Chat settings") }),
                                            (0, s.jsxs)($.I, {
                                                children: [
                                                    !d.contents.metadata.isReadOnly &&
                                                        (0, s.jsx)($.R, {
                                                            icon: (0, s.jsx)(v.Z, { className: "h-5 w-5" }),
                                                            title: r("Disappearing messages"),
                                                            showChevron: !0,
                                                            value: _ ? (0, B.L)(_) : "Off",
                                                            onClick: () => {
                                                                e.onEvent(X.ConversationInfoEvent.DisappearingMessagesClicked);
                                                            },
                                                        }),
                                                    R?.canAddPeople &&
                                                        (0, s.jsx)($.R, {
                                                            icon: (0, s.jsx)(p.Z, { className: "h-5 w-5" }),
                                                            onClick: () => {
                                                                e.onEvent(X.ConversationInfoEvent.GroupInviteClicked);
                                                            },
                                                            title: r("Group invite link"),
                                                            value: A ? (0, s.jsx)("div", { className: "flex items-center justify-center w-6 h-6 rounded-full bg-blue-500", children: (0, s.jsx)(o.x, { size: "subtext2", color: "white", weight: "medium", children: A }) }) : d.contents.metadata.attributes?.inviteUrl ? r("On") : r("Off"),
                                                            showChevron: !0,
                                                        }),
                                                    d.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(W, { button: e, onEvent: T, buttonStyleSheet: "h-5 w-5" }, e.name)),
                                                ],
                                            }),
                                        ],
                                    }),
                                    R
                                        ? (0, s.jsx)("div", {
                                              className: "w-full mt-4",
                                              children: (0, s.jsxs)("div", {
                                                  className: "w-full",
                                                  children: [
                                                      (0, s.jsxs)("div", {
                                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                                          children: [
                                                              (0, s.jsx)(o.x, { weight: "bold", children: r("Members") }),
                                                              R.showMoreUsersLink &&
                                                                  (0, s.jsx)("button", {
                                                                      type: "button",
                                                                      onClick: () => {
                                                                          e.onEvent(X.ConversationInfoEvent.TotalNumMembersClicked);
                                                                      },
                                                                      children: (0, s.jsx)(o.x, { color: "primary", children: r("See all ({number})", { number: R.showMoreUsersLink + R.participants.asJsReadonlyArrayView().length }) }),
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, s.jsxs)($.I, {
                                                          children: [
                                                              d.contents.peopleSection.canAddPeople &&
                                                                  (0, s.jsx)($.R, {
                                                                      icon: (0, s.jsx)(f.Z, {}),
                                                                      onClick: () => {
                                                                          e.onEvent(X.ConversationInfoEvent.AddPeopleClicked);
                                                                      },
                                                                      title: r("Add members"),
                                                                  }),
                                                              (0, s.jsx)(N.b, { handleParticipantClicked: C, handleParticipantMenuButtonClicked: y, participants: R.participants.asJsReadonlyArrayView(), menuItemsMap: R.menuItems.asJsReadonlyMapView() }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : null,
                                    d.isLoading && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.r, { to: "bottom", strength: 1 }), (0, s.jsx)(K, { className: "z-10" })] }),
                                ],
                            }),
                        }),
                    ],
                });
            }
            const Y = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center w-full relative pt-4 px-2 pb-2", children: [(0, s.jsx)(g.z, { icon: (0, s.jsx)(h.Z, {}), onClick: t, variant: "mutedText" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(o.x, { size: "headline1", weight: "bold", className: "text-center", children: e }) }), (0, s.jsx)("div", { className: "w-9" }), " "] }),
                ee = i.com.x.dms.participantlist,
                te = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        l = (0, C.n)(),
                        d = (0, y.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.participantListComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new ee.ParticipantListCallbacks(
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
                        (0, s.jsxs)(U.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(Y, {
                                    title: t("All members"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(ee.ParticipantListEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(ne, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                ne = ({ component: e }) => {
                    const t = (0, z._)(e.state);
                    (0, D.e)(e.toasts);
                    const n = (0, c.useCallback)(
                            (t) => {
                                e.handleEvent(new ee.ParticipantListEvent.ParticipantClicked(t));
                            },
                            [e],
                        ),
                        i = (0, c.useCallback)(
                            (t, n) => {
                                e.handleEvent(new ee.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-8 py-4 overflow-y-auto", children: (0, s.jsx)($.I, { children: (0, s.jsx)(N.b, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) }) : null;
                };
            var se = n(699416),
                ie = n(167285);
            const ae = i.com.x.dms.vanishingmode,
                oe = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        l = (0, C.n)(),
                        d = (0, y.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = l.vanishingModeComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new ae.VanishingModeCallbacks(() => {
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
                        (0, s.jsxs)(U.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(Y, {
                                    title: t("Disappearing messages"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.handleEvent(ae.VanishingModeEvent.BackButtonClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(re, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                            ],
                        })
                    );
                },
                re = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, z._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(v.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(o.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, a) => {
                                    const r = i ? (0, ie.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        l = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === a ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new ae.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(o.x, { children: r }), (0, s.jsx)("div", { className: "h-6 text-primary", children: l && (0, s.jsx)(se.Z, { width: 24, height: 24 }) })],
                                        },
                                        r,
                                    );
                                }),
                            }),
                        ],
                    });
                };
            var le = n(228805),
                ce = n(463341),
                de = n(110241),
                me = n(617588),
                xe = n(628047),
                ue = n(853582),
                he = n(55880),
                ve = n(748055),
                pe = n(458872),
                fe = n(305399);
            const ge = i.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                je = i.com.x.dms.model.DmTitleState,
                we = ({ component: e }) => {
                    const t = (0, z._)(e.state),
                        n = (0, fe.a)("(max-width: 918px)"),
                        a = t.toolbarState instanceof i.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-row items-center h-16 pl-2 gap-3 cursor-pointer absolute top-0 left-0 right-[11px] z-10",
                        onClick: () => {
                            e.onEvent(i.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            (0, s.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                            n
                                ? (0, s.jsx)(g.z, {
                                      icon: (0, s.jsx)(pe.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(i.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, s.jsx)(I.x, {
                                avatarSize: "large",
                                titleState: t.toolbarState,
                                onCustomAvatarNeedsResolving: (t) => {
                                    P.G || e.onEvent(new ge(t));
                                },
                                isInlineFacepile: !1,
                            }),
                            (0, s.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, s.jsx)(j.R, { name: t.toolbarState.title, badges: a ? (0, O.r)(t.toolbarState.otherUser) : void 0 }), (0, s.jsx)(be, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                be = ({ toolbarState: e }) => ((e instanceof je.Group || e instanceof je.OneToOne) && e.ttl ? (0, s.jsx)(Ce, { ttl: e.ttl }) : e instanceof je.Group ? (0, s.jsxs)(o.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                Ce = ({ ttl: e }) => (0, s.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, s.jsx)(v.Z, { className: "text-gray-700" }), (0, s.jsx)(o.x, { size: "subtext2", color: "gray700", children: (0, B.L)(e.inWholeMilliseconds) })] });
            var ye = n(788452),
                ke = n(256958),
                Ne = n(261012),
                Ie = n(350311);
            const Ee = ({ handleParticipantMenuButtonClicked: e, participants: t }) => {
                    const { t: n } = (0, a.$G)();
                    return (0, s.jsx)(s.Fragment, { children: t.map((t) => (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(Ie.s, { url: t.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(j.R, { name: t.user?.displayName || "", badges: (0, O.r)(t.user), weight: "normal" })] }), (0, s.jsx)("div", { className: "flex flex-row gap-2", children: (0, s.jsx)("button", { type: "button", className: "flex flex-row gap-2 cursor-pointer text-blue-500 font-medium hover:text-blue-400", onClick: () => e(i.com.x.dms.ParticipantMenuItem.AcceptMembership, t), children: n("Approve") }) })] }, t.userId.userIdString)) });
                },
                Se = i.com.x.dms.groupinvite,
                Me = i.com.x.dms.convinfo,
                Re = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, o] = (0, c.useState)(null),
                        [l, d] = (0, c.useState)(null),
                        m = (0, C.n)(),
                        x = (0, y.s)();
                    return (
                        (0, c.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = m.groupInviteSettingsComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new Se.GroupInviteSettingsCallbacks(
                                        () => {
                                            x.toConversationInfo(e);
                                        },
                                        () => {},
                                        () => {},
                                    ),
                                ),
                                s = m.convInfoComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new Me.ConversationInfoCallbacks(
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
                        (0, s.jsxs)(U.g, {
                            className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh",
                            children: [
                                (0, s.jsx)(Y, {
                                    title: t("Group invite link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(Se.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(ze, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(r.P, {}) }),
                                l && (0, s.jsx)("div", { className: "flex items-center w-full px-4 ", children: (0, s.jsx)(Pe, { component: l }) }),
                            ],
                        })
                    );
                },
                ze = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, z._)(e.state),
                        i = (0, c.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(Se.GroupInviteSettingsEvent.LinkCopied), (0, ke.Am)(t("Link copied!")));
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
                                                children: (0, s.jsx)(Ne.r, {
                                                    checked: n.isGroupInviteEnabled,
                                                    onCheckedChange: () => {
                                                        e.onEvent(Se.GroupInviteSettingsEvent.ToggleGroupInvite);
                                                    },
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                n.isGroupInviteEnabled && (0, s.jsx)("div", { className: "my-2 rounded-xl bg-gray-0 cursor-pointer w-full group hover:bg-gray-50", onClick: i, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between p-4 gap-4", children: [(0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)(p.Z, { className: "shrink-0" }), (0, s.jsx)(o.x, { numberOfLines: 1, children: n.inviteUrl })] }), (0, s.jsx)("div", { className: "flex items-center gap-2 shrink-0", children: (0, s.jsx)(o.x, { size: "body", color: "gray500", className: "group-hover:text-blue-600", children: t("Copy") }) })] }) }),
                            ],
                        }),
                    });
                },
                Pe = ({ component: e }) => {
                    const { t } = (0, a.$G)(),
                        n = (0, z._)(e.state),
                        i = (0, c.useCallback)(
                            (t, n) => {
                                e.onEvent(new Me.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    if (n.contents === Me.ConversationInfoContents.Loading) return (0, s.jsx)(r.P, {});
                    if (!(n.contents instanceof Me.ConversationInfoContents.Loaded)) return null;
                    const l = n.contents.memberRequestSize;
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
                                              l > 3 &&
                                                  (0, s.jsx)("button", {
                                                      type: "button",
                                                      onClick: () => {
                                                          e.onEvent(Me.ConversationInfoEvent.MembershipRequestButtonClicked);
                                                      },
                                                      children: (0, s.jsx)(o.x, { color: "primary", children: t("See all ({number})", { number: l }) }),
                                                  }),
                                          ],
                                      }),
                                      (0, s.jsx)($.I, { children: (0, s.jsx)(Ee, { handleParticipantMenuButtonClicked: i, participants: n.contents.metadata.pendingMembers.asJsReadonlyArrayView() }) }),
                                  ],
                              }),
                          })
                        : null;
                };
            var Ae = n(548978);
            const Te = i.com.x.dms.composer.composer.ChatComposerEvent;
            function Ge() {
                const e = (0, de.a)(),
                    t = (0, me.F)(),
                    n = (0, xe.v)(),
                    i = (0, ue.k)(),
                    a = (0, he.m)();
                return "" !== e && i ? (0, s.jsx)(te, { id: e }) : "" !== e && t ? (0, s.jsx)(H, { id: e }) : "" !== e && n ? (0, s.jsx)(oe, { id: e }) : "" !== e && a ? (0, s.jsx)(Re, { id: e }) : "" !== e ? (0, s.jsx)(Le, { id: e }) : (0, s.jsxs)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: [(0, s.jsx)("div", { className: "text-[76px] mb-10", children: (0, s.jsx)(ye.Z, { className: "rotate-[8.29deg]" }) }), (0, s.jsx)(o.x, { size: "title4", weight: "medium", children: "Select a message" }), (0, s.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", children: "To start chatting" })] });
            }
            function Le({ id: e }) {
                const [t, n] = (0, c.useState)(null),
                    a = (0, C.n)(),
                    o = (0, y.s)();
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
                    t ? (0, s.jsx)(Ue, { component: t }) : (0, s.jsx)("div", { className: "w-full h-dvh flex justify-center items-center", children: (0, s.jsx)(r.P, {}) })
                );
            }
            function Ue({ component: e }) {
                const t = (0, z._)(e.state),
                    { t: n } = (0, a.$G)(),
                    i = (0, c.useRef)(null),
                    [r, m] = (0, c.useState)(0),
                    x = (0, c.useCallback)(
                        (t) => {
                            e.composer.onEvent(new Te.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    u = (0, c.useCallback)(() => {
                        e.composer.onEvent(Te.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: h, handleDragOver: v, handleDragLeave: p, handleDrop: f } = (0, ve.F)({ onFileAttached: x, onFileDrop: u, isEnabled: !t.isReadOnly });
                return (
                    (0, c.useLayoutEffect)(() => {
                        const e = i.current;
                        if (!e) return;
                        const t = new ResizeObserver((t) => {
                            for (const n of t)
                                if (n.target === e) {
                                    const e = n.contentRect.height;
                                    m(e);
                                }
                        });
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, []),
                    (0, s.jsxs)("div", { className: "flex flex-col h-dvh flex-grow relative", onDragOver: v, onDragLeave: p, onDrop: f, children: [h && (0, s.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, s.jsx)(o.x, { size: "subtext1", weight: "medium", color: "brand", children: n("Drop file to attach") }) }), (0, s.jsx)(we, { component: e }), (0, s.jsx)("div", { className: "flex-1 overflow-hidden isolate", children: (0, s.jsx)(ce.Bu, { children: (0, s.jsx)(le.r, { component: e, isTypingIndicatorShown: !!t.typingIndicatorItem, composerHeight: r }) }) }), (0, s.jsxs)("div", { className: "absolute bottom-0 left-0 right-[11px] isolate", ref: i, children: [t.typingIndicatorItem && (0, s.jsx)(Ae.y, { typingIndicatorItem: t.typingIndicatorItem }), t.isReadOnly ? (0, s.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, s.jsx)(o.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === t.readOnlyReason?.name ? n("You can no longer send messages in this conversation due to a security verification failure.") : n("This conversation is currently in read-only mode.") }) }) : (0, s.jsx)(d.a, { component: e, showingMentionPicker: t.showingMentionPicker }), (0, s.jsx)(l.r, { to: "bottom", className: "-z-10", strength: t.typingIndicatorItem ? 7 : 5 })] })] })
                );
            }
        },
        630086: (e, t, n) => {
            n.d(t, { I: () => l, R: () => r });
            var s = n(552322),
                i = n(52053),
                a = n(332161),
                o = n(31674);
            function r({ icon: e, destructive: t, onClick: n, title: o, value: r, showChevron: l = !1 }) {
                return (0, s.jsx)("div", { className: "rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between px-4 py-3", children: [(0, s.jsxs)("div", { className: `py-px flex items-center gap-3 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(a.x, { size: "body", weight: "normal", color: t ? "red500" : "text", children: o })] }), (0, s.jsxs)("div", { className: "flex items-center gap-3", children: [r && (0, s.jsx)(a.x, { size: "body", color: "text", weight: "normal", children: r }), l && (0, s.jsx)(i.Z, { className: "text-gray-700" })] })] }) });
            }
            function l({ children: e, className: t }) {
                return (0, s.jsx)("div", { className: (0, o.cn)("flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl", t), children: e });
            }
        },
        238750: (e, t, n) => {
            n.d(t, { p: () => A });
            var s = n(552322),
                i = n(159603),
                a = n(983706),
                o = n(202784),
                r = n(110241),
                l = n(14269),
                c = n(52053),
                d = n(830806),
                m = n(695102),
                x = n(242782),
                u = n(169355),
                h = n(57478),
                v = n(332161),
                p = n(32161),
                f = n(537335),
                g = n(336984),
                j = n(741321),
                w = n(9001),
                b = n(129558),
                C = n(607334),
                y = n(145731),
                k = n(534625),
                N = n(388414),
                I = n(455091);
            const E = i.com.x.dms.convlist.ConversationListEvent;
            function S({ previewWithMetadata: e, actionsDialog: t, onEvent: n, children: i }) {
                const { t: a } = (0, I.$G)(),
                    o = t?.actions
                        .asJsReadonlyArrayView()
                        .map((t) =>
                            ((e, t, n, i) => {
                                const a = () => i(new E.ConversationActionClicked(t.preview.conversationId, n));
                                switch (n.name) {
                                    case "MarkRead":
                                        return { text: e("Mark as read"), icon: (0, s.jsx)(j.Z, {}), onClick: a };
                                    case "MarkUnread":
                                        return { text: e("Mark as unread"), icon: (0, s.jsx)(w.Z, {}), onClick: a };
                                    case "MuteConversation":
                                        return { text: e("Mute conversation"), icon: (0, s.jsx)(b.Z, {}), onClick: a };
                                    case "UnmuteConversation":
                                        return { text: e("Unmute conversation"), icon: (0, s.jsx)(C.Z, {}), onClick: a };
                                    case "RemoveChat":
                                        return { text: e("Delete conversation"), icon: (0, s.jsx)(y.Z, {}), destructive: !0, onClick: a };
                                    case "PinConversation":
                                        return { text: e("Pin conversation"), icon: (0, s.jsx)(k.Z, {}), onClick: a };
                                    case "UnpinConversation":
                                        return { text: e("Unpin conversation"), icon: (0, s.jsx)(k.Z, {}), onClick: a };
                                    case "DismissDeletion":
                                    case "RequestRemove":
                                        return null;
                                }
                            })(a, e, t, n),
                        )
                        .filter((e) => !!e);
                return (0, s.jsx)(N.I, {
                    onOpenChange: (t) => {
                        const s = t ? new E.RowLongClicked(e) : E.DismissConversationActionsDialog;
                        n(s);
                    },
                    trigger: i,
                    items: o || [],
                    onClick: (e) => e.stopPropagation(),
                });
            }
            const M = ({ previewWithMetadata: e }) => {
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
                },
                R = i.com.x.dms.ReadByOthersIndicator,
                z = ({ onEvent: e, previewWithMetadata: t, actionsDialog: n, isSelected: a, withSeparator: o = !1, isSearch: r, isPinned: j }) => {
                    const w = t.preview?.timestampValue,
                        b = t.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                        C = (0, s.jsx)("div", {
                            className: "px-1",
                            children: (0, s.jsxs)("div", {
                                className: `select-none flex flex-row  px-1 gap-2 rounded-lg hover:bg-gray-100 ${a && "bg-gray-0"} transition-colors duration-100 cursor-pointer`,
                                children: [
                                    t.isUnreadByMe && !r ? (0, s.jsx)("div", { className: "flex items-center", children: (0, s.jsx)(l.Z, { width: "14", height: "14", className: "text-blue-500" }) }) : (0, s.jsx)("div", { className: "w-[14px] flex-shrink-0" }),
                                    (0, s.jsxs)("div", { style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: "flex items-center grow gap-3 rounded-lg  transition-colors duration-100", children: [(0, s.jsx)(p.x, { avatarSize: "xxLarge", titleState: t.metadata.title, onCustomAvatarNeedsResolving: (n) => e(new i.com.x.dms.convlist.ConversationListEvent.CustomAvatarNeedsResolving(t.conversationId, n)), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 flex-row flex self-stretch py-2 pb-3 border-b " + (o ? "border-gray-50" : "border-transparent"), children: [(0, s.jsxs)("div", { className: "flex-1 gap-5", children: [(0, s.jsx)(h.R, { name: t.metadata.title.title, badges: b ? (0, g.r)(t.metadata.title.otherUser) : void 0, screenName: b ? t.metadata.title.otherUser?.screenName : void 0 }), (0, s.jsx)(v.x, { color: "gray700", weight: t.isUnreadByMe ? "bold" : "normal", numberOfLines: 2, className: "break-all min-h-[2.5rem]", children: (0, s.jsx)(M, { previewWithMetadata: t }) })] }), (0, s.jsxs)("div", { className: "flex flex-col items-end", children: [(0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [(0, s.jsx)(v.x, { size: "subtext1", color: "gray700", children: w && (0, s.jsx)(f.Q, { timestamp: w }) }), (0, s.jsx)(c.Z, { width: "20", height: "20", className: "text-gray-300 -mr-1" })] }), (0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [t.isMuted && (0, s.jsx)(d.Z, { width: "14", height: "14", className: "text-gray-300" }), j && (0, s.jsx)(m.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === R.Read && (0, s.jsx)(x.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === R.Unread && (0, s.jsx)(u.Z, { width: "14", height: "14", className: "text-gray-300" })] })] })] })] }),
                                ],
                            }),
                        });
                    return r ? C : (0, s.jsx)(S, { previewWithMetadata: t, actionsDialog: n, onEvent: e, children: C });
                };
            var P = n(664177);
            const A = ({ onEvent: e, isSearch: t, conversations: n, actionsDialog: l }) => {
                const c = (0, r.a)(),
                    d = (0, o.useRef)(null),
                    m = (0, o.useRef)({ start: 0, end: 0 }),
                    x = (0, o.useMemo)(() => [...n].sort((e) => (e.isPinned ? -1 : 1)), [n]),
                    u = (0, o.useCallback)((e) => (l?.convId.id === e ? l : null), [l]),
                    h = (0, o.useCallback)(() => {
                        const t = d.current;
                        if (!t) return;
                        const { start: n, end: s } = m.current,
                            a = t.findStartIndex(),
                            o = t.findEndIndex();
                        if (n !== a || s !== o) {
                            const t = i.kotlin.collections.KtList.fromJsArray(x.slice(a, o + 1).map((e) => e.conversationId));
                            e(new i.com.x.dms.convlist.ConversationListEvent.VisibleConversationIdsChanged(t)), (m.current = { start: a, end: o });
                        }
                    }, [e, x.slice]),
                    v = (0, o.useCallback)(
                        (n, a) => {
                            const o = n.conversationId.id === c,
                                r = a + 1 < x.length && x[a + 1]?.conversationId.id === c;
                            return (0, s.jsx)(
                                P.E.div,
                                {
                                    layout: !0,
                                    onClick: () => {
                                        const t = new i.com.x.dms.convlist.ConversationListEvent.RowClicked(n.conversationId, n.preview?.lastReadSequenceNumber);
                                        e(t);
                                    },
                                    children: (0, s.jsx)(z, { previewWithMetadata: n, actionsDialog: u(n.preview?.conversationId.id || ""), onEvent: e, isSelected: o, withSeparator: !r && !o, isSearch: t, isPinned: n.isPinned }),
                                },
                                n.conversationId.id,
                            );
                        },
                        [c, e, x, u, t],
                    );
                return (0, s.jsx)(a.T, { api: d, onScroll: h, items: x, renderItem: v, className: "!h-full scrollbar-thin-custom", ssrCount: 10 });
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
                return (0, s.jsx)("div", { className: "flex flex-col w-full min-h-screen", children: Array.from({ length: Math.ceil(window.innerHeight / 80) }).map((e, t) => (0, s.jsx)(a, { index: t }, t)) });
            }
        },
        897995: (e, t, n) => {
            n.d(t, { Y: () => l });
            var s = n(552322),
                i = n(993165),
                a = n(332161),
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
            n.d(t, { b: () => p });
            var s = n(552322),
                i = n(57478),
                a = n(332161),
                o = n(350311),
                r = n(336984),
                l = n(318063),
                c = n(993165),
                d = n(429804),
                m = n(951671),
                x = n(384226),
                u = n(421018),
                h = n(159603);
            const v = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, menuItems: n, participant: i }) => {
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
                p = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: l }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const c = l.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(o.s, { url: n.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(i.R, { name: n.user?.displayName || "", badges: (0, r.r)(n.user), weight: "normal" }), n.isAdmin && (0, s.jsx)("div", { className: "p-1 rounded bg-gray-200", children: (0, s.jsx)(a.x, { size: "subtext3", children: "Admin" }) })] }), (0, s.jsx)(v, { participant: n, menuItems: c, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
        },
        759746: (e, t, n) => {
            n.d(t, { M: () => r });
            var s = n(552322),
                i = n(789764),
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
                r = ({ avatarSize: e, isInlineFacepile: t, resolution: n, users: r, withLink: l }) => {
                    const c = ((e) => {
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
                        if (r.length >= 2) return (0, s.jsx)(o, { size: c, firstUrl: r[0]?.profileImageUrl, resolution: n, secondUrl: r[1]?.profileImageUrl });
                        if (1 === r.length) return (0, s.jsx)(a.s, { url: r[0]?.profileImageUrl, size: e, resolution: n, withLink: l });
                    }
                    let d = r.map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return r.length <= 3 ? (0, s.jsx)(i.o, { urls: d, size: e, resolution: n, stackOrder: "descending" }) : ((d = d.slice(0, 3)), (0, s.jsx)(i.o, { urls: d, size: e, resolution: n, stackOrder: "overlap" }));
                };
        },
        32161: (e, t, n) => {
            n.d(t, { x: () => l });
            var s = n(552322),
                i = n(159603),
                a = n(350311);
            const o = ({ avatar: e, avatarSize: t, onCustomAvatarNeedsResolving: n, withLink: o }) => (e instanceof i.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, s.jsx)(a.s, { url: e.uri, size: t, withLink: o }) : (e instanceof i.com.x.dms.model.MediaUriState.AvatarNeedsResolving && n(e), (0, s.jsx)(a.s, { size: t })));
            var r = n(759746);
            const l = ({ avatarSize: e, isInlineFacepile: t, onCustomAvatarNeedsResolving: n, titleState: l, withLink: c }) => {
                if (l instanceof i.com.x.dms.model.DmTitleState.OneToOne) return (0, s.jsx)(a.s, { url: l.otherUser?.profileImageUrl, size: e, screenName: l.otherUser?.screenName, withLink: c });
                if (l instanceof i.com.x.dms.model.DmTitleState.Group) {
                    if (l.avatarType instanceof i.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, s.jsx)(o, { avatar: l.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: n, withLink: c });
                    if (l.avatarType instanceof i.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, s.jsx)(r.M, { avatarSize: e, isInlineFacepile: t, users: l.avatarType.users.asJsReadonlyArrayView(), withLink: c });
                }
                return null;
            };
        },
        350311: (e, t, n) => {
            n.d(t, { j: () => o, s: () => r });
            var s = n(552322),
                i = n(378364),
                a = n(165272);
            const o = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                r = ({ url: e, size: t, resolution: n = "200x200", screenName: r, withLink: l }) => {
                    const c = !(0, a.F)() || "external";
                    return (0, s.jsx)(i.q, { url: e || o, size: t, resolution: n, screenName: r, withLink: l ?? c });
                };
        },
        346598: (e, t, n) => {
            n.d(t, { V: () => d });
            var s = n(159603),
                i = n(8974),
                a = n(303676),
                o = n(928220),
                r = n(879922),
                l = n(196594);
            const c = s.com.x.dms.util;
            class d extends s.com.x.dms.util.EntityParser {
                doParse(e) {
                    return s.kotlin.collections.KtList.fromJsArray([...(0, i.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Email(...e)), ...(0, a.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Hashtag(...e)), ...(0, o.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Cashtag(...e)), ...(0, r.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Mention(...e)), ...(0, l.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Url(...e))]);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-b4a0aebf.d6a1e3aa.js.map
