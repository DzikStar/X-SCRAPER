"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-14817e23"],
    {
        125691: (e, t, n) => {
            n.d(t, { a: () => M });
            var s = n(552322),
                i = n(159603),
                o = n(436995),
                a = n(887491),
                r = n(25457),
                l = n(14313),
                c = n(332161),
                d = n(993165),
                m = n(202784),
                x = n(533476),
                u = n(658358),
                h = n(950849),
                p = n(595117),
                v = n(134877),
                f = n(455091),
                g = n(962639),
                j = n(193686),
                w = n(556160),
                C = n(517922),
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
                    e.shouldRender ? (e.shouldRender && t ? (0, s.jsx)("div", { className: "flex overflow-hidden rounded-2xl", children: (0, s.jsx)(y.Et, { src: t, type: i.com.x.models.dm.DmMediaType.Companion.from(e.media.mediaType), dimensions: e.media.dimension }) }) : (0, s.jsx)(c.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Media" })) : null
                );
            }
            function N({ attachment: e, onRemoveAttachment: t }) {
                if (!e.shouldRender) return null;
                let n = null;
                if (e === i.com.x.models.dm.ChatComposerAttachment.Loading) n = (0, s.jsx)("div", { className: "flex items-center justify-center bg-gray-100 rounded-2xl px-4 py-3", children: (0, s.jsx)(j.P, {}) });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Media) n = (0, s.jsx)(k, { media: e });
                else if (e instanceof i.com.x.models.dm.ChatComposerAttachment.Post) n = e.post ? (0, s.jsx)(w.K, { post: e.post, url: e.url, className: "rounded-2xl" }) : (0, s.jsx)(C.C, {});
                else {
                    if (e instanceof i.com.x.models.dm.ChatComposerAttachment.UrlCard) return null;
                    e instanceof i.com.x.models.dm.ChatComposerAttachment.File && (n = (0, s.jsx)(b.Q, { className: "rounded-2xl mb-2", filename: e.file.originalFilename, fileSize: e.file.fileSize }));
                }
                return null === n ? null : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)("div", { className: "flex flex-col max-w-[300px] gap-2 relative", children: [n, e.showRemoveButton && (0, s.jsx)("div", { className: "absolute top-2 right-2 flex items-center", children: (0, s.jsx)(d.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(a.Z, {}), onClick: t }) })] }), (0, s.jsx)("div", { className: "w-full h-px bg-gray-200" })] });
            }
            function I({ replyingTo: e, onRemoveReply: t }) {
                return (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [e.senderInfo?.user?.displayName ? (0, s.jsxs)(c.x, { size: "subtext2", weight: "medium", color: "gray900", children: ["Replying to ", e.senderInfo.user.displayName] }) : null, (0, s.jsx)(c.x, { size: "subtext2", color: "gray500", children: e.textContent })] }), (0, s.jsx)(d.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(a.Z, {}), onClick: t })] });
            }
            const E = i.com.x.dms.composer.composer.RightButtonState,
                R = i.com.x.dms.composer.composer.ChatComposerEvent;
            function M({ component: e }) {
                const { t } = (0, f.$G)(),
                    n = (0, x._)(e.composer.state),
                    j = (0, m.useRef)(null),
                    w = (0, m.useRef)(null);
                (0, u.e)(e.composer.toasts);
                const C = (0, m.useCallback)(() => {
                        j.current?.focus();
                    }, []),
                    b = e.composer.triggerComposerFocusEvents;
                (0, h.E)(b, C),
                    (0, m.useEffect)(() => {
                        C();
                    }, [e]);
                const y = () => {
                        n.rightButton === E.SendActive && e.composer.onEvent(new i.com.x.dms.composer.composer.ChatComposerEvent.RightButtonClicked(n.rightButton));
                    },
                    k = (0, m.useCallback)(
                        async (t) => {
                            await (0, p.$)(
                                t,
                                () => e.composer.onEvent(R.OnFileAttachmentStarted),
                                (t) => e.composer.onEvent(new R.OnFileAttached(t)),
                            );
                        },
                        [e.composer],
                    );
                return (0, s.jsx)(v.S, {
                    children: (0, s.jsx)("div", {
                        className: "w-full pt-3 px-4 pb-6",
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                n.isEditing ? (0, s.jsxs)("div", { className: "flex px-2.5 w-full items-center justify-between", children: [(0, s.jsxs)("div", { className: "flex gap-1", children: [(0, s.jsx)(o.Z, {}), (0, s.jsx)(c.x, { size: "subtext2", weight: "medium", color: "gray900", children: "Edit message" })] }), (0, s.jsx)(d.z, { variant: "primaryFilled", size: "xSmall", icon: (0, s.jsx)(a.Z, {}), onClick: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardEditDraft) })] }) : null,
                                n.replyingTo ? (0, s.jsx)(I, { replyingTo: n.replyingTo, onRemoveReply: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.RemoveReplyClicked) }) : null,
                                (0, s.jsxs)("div", {
                                    className: "flex items-center gap-2 w-full",
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
                                        (0, s.jsx)(d.z, {
                                            size: "large",
                                            disabled: !n.canAddAttachment,
                                            icon: (0, s.jsx)(r.Z, {}),
                                            onClick: () => {
                                                w.current?.click();
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
                                                            await k(t);
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
                                                            n.attachment ? (0, s.jsx)(N, { attachment: n.attachment, onRemoveAttachment: () => e.composer.onEvent(i.com.x.dms.composer.composer.ChatComposerEvent.DiscardAttachmentClicked) }) : null,
                                                            (0, s.jsx)(g.o, {
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
                                                                ref: j,
                                                            }),
                                                        ],
                                                    }),
                                                    n.rightButton !== E.SendInactive ? (0, s.jsx)(d.z, { className: "mb-1", onClick: y, icon: (0, s.jsx)(l.Z, {}), size: "small", variant: "brandFilled" }) : void 0,
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
            n.d(t, { B$: () => o, BH: () => d, XE: () => c, mp: () => l, rF: () => x, tc: () => u, xq: () => m });
            var s = n(552322),
                i = n(202784);
            const o = { DEBUG: "DEBUG", INFO: "INFO", WARN: "WARN", ERROR: "ERROR" },
                a = { path: "/dms", showDebugOptions: !1, logLevel: o.ERROR, bottomBarHeight: 0, newDBWorker: !1, rwebElements: void 0 },
                r = (0, i.createContext)(null),
                l = ({ children: e, settings: t }) => {
                    const n = { ...a, ...t };
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
            function u(e) {
                const t = c();
                return t.rwebElements?.[e];
            }
        },
        349907: (e, t, n) => {
            n.d(t, { f: () => k });
            var s = n(552322),
                i = n(159603),
                o = n(202784),
                a = n(505332),
                r = n(455091),
                l = n(89195),
                c = n(193686),
                d = n(256958),
                m = n(332161),
                x = n(261012),
                u = n(630086),
                h = n(589259),
                p = n(350311),
                v = n(336984);
            const f = ({ handleParticipantMenuButtonClicked: e, participants: t }) => {
                const { t: n } = (0, r.$G)();
                return (0, s.jsx)(s.Fragment, { children: t.map((t) => (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(p.s, { url: t.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(h.R, { name: t.user?.displayName || "", badges: (0, v.r)(t.user), weight: "normal" })] }), (0, s.jsx)("div", { className: "flex flex-row gap-2", children: (0, s.jsx)("button", { type: "button", className: "flex flex-row gap-2 cursor-pointer text-blue-500 font-medium hover:text-blue-400", onClick: () => e(i.com.x.dms.ParticipantMenuItem.AcceptMembership, t), children: n("Approve") }) })] }, t.userId.userIdString)) });
            };
            var g = n(155369),
                j = n(379342),
                w = n(671889),
                C = n(533476);
            const b = i.com.x.dms.groupinvite,
                y = i.com.x.dms.convinfo,
                k = ({ id: e }) => {
                    const { t } = (0, r.$G)(),
                        [n, l] = (0, o.useState)(null),
                        [d, m] = (0, o.useState)(null),
                        x = (0, g.n)(),
                        u = (0, j.s)();
                    return (
                        (0, o.useEffect)(() => {
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
                                (0, s.jsx)(a.Q, {
                                    title: t("Group Invite Link"),
                                    onBackClicked: (e) => {
                                        e.stopPropagation(), n?.onEvent(b.GroupInviteSettingsEvent.BackClicked);
                                    },
                                }),
                                n ? (0, s.jsx)(N, { component: n }) : (0, s.jsx)("div", { className: "flex items-center h-full", children: (0, s.jsx)(c.P, {}) }),
                                d && (0, s.jsx)("div", { className: "flex items-center w-full px-4 ", children: (0, s.jsx)(I, { component: d }) }),
                            ],
                        })
                    );
                },
                N = ({ component: e }) => {
                    const { t } = (0, r.$G)(),
                        n = (0, C._)(e.state),
                        i = (0, o.useCallback)(() => {
                            n.inviteUrl && (navigator.clipboard.writeText(n.inviteUrl), e.onEvent(b.GroupInviteSettingsEvent.LinkCopied), (0, d.Am)(t("Link copied!")));
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
                        i = (0, o.useCallback)(
                            (t, n) => {
                                e.onEvent(new y.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    if (n.contents === y.ConversationInfoContents.Loading) return (0, s.jsx)(c.P, {});
                    if (!(n.contents instanceof y.ConversationInfoContents.Loaded)) return null;
                    const a = n.contents.memberRequestSize;
                    return a
                        ? (0, s.jsx)("div", {
                              className: "w-full",
                              children: (0, s.jsxs)("div", {
                                  className: "w-full",
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                          children: [
                                              (0, s.jsx)(m.x, { color: "gray700", children: t("Pending requests") }),
                                              a > 3 &&
                                                  (0, s.jsx)("button", {
                                                      type: "button",
                                                      onClick: () => {
                                                          e.onEvent(y.ConversationInfoEvent.MembershipRequestButtonClicked);
                                                      },
                                                      children: (0, s.jsx)(m.x, { color: "primary", children: t("See all ({number})", { number: a }) }),
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
            n.d(t, { V: () => F });
            var s = n(552322),
                i = n(202784),
                o = n(159603),
                a = n(607334),
                r = n(129558),
                l = n(666200),
                c = n(515790),
                d = n(89195),
                m = n(25457),
                x = n(193686),
                u = n(332161),
                h = n(959992),
                p = n(993165),
                v = n(589259),
                f = n(351417),
                g = n(31674),
                j = n(155369),
                w = n(379342),
                C = n(455091),
                b = n(846742),
                y = n(996016),
                k = n(32161),
                N = n(870392),
                I = n(671889),
                E = n(533476),
                R = n(658358),
                M = n(858108),
                A = n(336984),
                S = n(369962),
                P = n(145731),
                z = n(442942),
                B = n(951671),
                G = n(630086),
                T = n(344851);
            const D = o.com.x.dms.convinfo,
                L = o.com.x.dms.ConversationInfoBottomButton;
            function Z({ button: e, onEvent: t, buttonStyleSheet: n }) {
                const i = (function (e, t) {
                    switch (e) {
                        case L.DeleteConversation:
                            return { title: "Delete conversation", message: "This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it.", icon: (0, s.jsx)(P.Z, { className: t ?? void 0 }), destructive: !0 };
                        case L.LeaveGroup:
                            return { title: "Leave conversation", message: "This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it.", icon: (0, s.jsx)(z.Z, { className: t ?? void 0 }), destructive: !0 };
                        case L.ResignAsAdmin:
                            return { title: "Resign as admin", message: "Are you sure you want to resign as admin?", icon: (0, s.jsx)(B.Z, { className: t ?? void 0 }) };
                    }
                    return null;
                })(e, n);
                return i
                    ? (0, s.jsx)(T.c, {
                          title: i.title,
                          trigger: (0, s.jsx)(G.R, { icon: i.icon, title: i.title, destructive: i.destructive, showChevron: !!i.showChevron, onClick: () => {} }),
                          message: i.message,
                          onConfirm: () => {
                              t(new D.ConversationInfoEvent.BottomButtonClicked(e));
                          },
                      })
                    : null;
            }
            const U = o.com.x.dms.convinfo,
                O = ({ className: e }) => (0, s.jsxs)("div", { className: (0, g.cn)("flex flex-col items-center justify-center h-full gap-4", e), children: [(0, s.jsx)(x.P, {}), (0, s.jsx)(u.x, { children: "Sync is in progress …" })] });
            function F({ id: e }) {
                const [t, n] = (0, i.useState)(null),
                    a = (0, j.n)(),
                    r = (0, w.s)(),
                    [l, c] = (0, i.useState)(!1);
                return (
                    (0, i.useEffect)(() => {
                        const t = new o.com.x.export.CancellationSignal(),
                            s = a.convInfoComponent(
                                t,
                                o.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new U.ConversationInfoCallbacks(
                                    () => {
                                        r.toConversation(e);
                                    },
                                    () => {
                                        r.toInbox();
                                    },
                                    () => {
                                        r.toEditGroup(e);
                                    },
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
                    }, [a, e, r]),
                    t ? (0, s.jsx)(V, { component: t, showAddGroupParticipants: l, setShowAddGroupParticipants: c }) : null
                );
            }
            function V({ component: e, setShowAddGroupParticipants: t, showAddGroupParticipants: n }) {
                const { t: x } = (0, C.$G)(),
                    g = (0, E._)(e.state);
                (0, R.e)(e.toasts);
                const j = (0, i.useCallback)(
                        (t) => {
                            e.onEvent(new U.ConversationInfoEvent.ParticipantClicked(t));
                        },
                        [e],
                    ),
                    w = (0, i.useCallback)(
                        (t, n) => {
                            e.onEvent(new U.ConversationInfoEvent.ParticipantMenuButtonClicked(t, n));
                        },
                        [e],
                    );
                if (g.contents === U.ConversationInfoContents.Loading) return (0, s.jsx)(I.g, { className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh relative overflow-y-auto", children: (0, s.jsx)(O, {}) });
                if (!(g.contents instanceof U.ConversationInfoContents.Loaded)) return null;
                const P = g.contents.convId,
                    z = P instanceof o.com.x.models.dm.XConversationId.Group,
                    B = g.contents.metadata.title instanceof o.com.x.dms.model.DmTitleState.OneToOne,
                    T = g.contents.peopleSection,
                    D = g.contents.memberRequestSize,
                    L = (t) => {
                        e.onEvent(t);
                    },
                    F = g.contents.metadata.areNotificationsDisabled,
                    V = F ? a.Z : r.Z,
                    $ = x(B ? (F ? "Unmute conversation" : "Mute conversation") : F ? "Unmute group" : "Mute group"),
                    q = g.contents.metadata.attributes?.defaultTtl?.inWholeMilliseconds;
                return (0, s.jsxs)(I.g, {
                    className: "flex flex-col w-full items-center self-center min-h-dvh md:h-dvh relative overflow-y-auto",
                    children: [
                        n && z && (0, s.jsx)(b.C, { conversationId: P, onVisibilityChange: t }),
                        z && (0, s.jsx)(N.$, { convId: P }),
                        (0, s.jsxs)("div", {
                            className: "w-full sticky left-0 top-0 py-4 px-2",
                            children: [
                                (0, s.jsx)(h.r, { className: "-z-[1]", to: "top" }),
                                (0, s.jsxs)("div", {
                                    className: "flex flex-row justify-between w-full relative",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children: (0, s.jsx)(p.z, {
                                                icon: (0, s.jsx)(l.Z, {}),
                                                onClick: (t) => {
                                                    t.stopPropagation(), e.onEvent(U.ConversationInfoEvent.BackButtonClicked);
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
                                                        titleState: g.contents.metadata.title,
                                                        onCustomAvatarNeedsResolving: (t) => {
                                                            (0, M.G)() || e.onEvent(new o.com.x.dms.convinfo.ConversationInfoEvent.ResolveCustomAvatar(t));
                                                        },
                                                        isInlineFacepile: !0,
                                                    }),
                                                }),
                                                (0, s.jsxs)("div", { className: "flex flex-col items-center", children: [(0, s.jsx)(v.R, { name: g.contents.metadata.title.title, badges: B ? (0, A.r)(g.contents.metadata.title.otherUser) : void 0 }), B && g.contents.metadata.title.otherUser && (0, s.jsx)(f.Q, { screenName: g.contents.metadata.title.otherUser.screenName })] }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", {
                                            className: "w-20 shrink-0",
                                            children:
                                                g.contents.showEditGroupAction &&
                                                z &&
                                                (0, s.jsx)(p.z, {
                                                    variant: "brandText",
                                                    onClick: () => {
                                                        e.onEvent(new o.com.x.dms.convinfo.ConversationInfoEvent.EditGroupClicked(P));
                                                    },
                                                    children: (0, s.jsx)(u.x, { weight: "medium", color: "inherit", numberOfLines: 1, children: x("Edit") }),
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
                                                e.onEvent(F ? U.ConversationInfoEvent.OnUnMuteClicked : U.ConversationInfoEvent.OnMuteClicked);
                                            },
                                            children: [(0, s.jsx)(V, { className: "w-6 h-6" }), (0, s.jsx)(u.x, { size: "subtext2", weight: "medium", color: "gray700", children: $ })],
                                        }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, s.jsx)(u.x, { weight: "bold", className: "px-4 pb-2", children: x(z ? "Group settings" : "Chat settings") }),
                                            (0, s.jsxs)(G.I, {
                                                children: [
                                                    !g.contents.metadata.isReadOnly &&
                                                        (0, s.jsx)(G.R, {
                                                            icon: (0, s.jsx)(c.Z, { className: "h-5 w-5" }),
                                                            title: x("Disappearing Messages"),
                                                            showChevron: !0,
                                                            value: q ? (0, S.L)(q) : "Off",
                                                            onClick: () => {
                                                                e.onEvent(U.ConversationInfoEvent.DisappearingMessagesClicked);
                                                            },
                                                        }),
                                                    T?.canAddPeople &&
                                                        (0, s.jsx)(G.R, {
                                                            icon: (0, s.jsx)(d.Z, { className: "h-5 w-5" }),
                                                            onClick: () => {
                                                                e.onEvent(U.ConversationInfoEvent.GroupInviteClicked);
                                                            },
                                                            title: x("Group Invite Link"),
                                                            value: D ? (0, s.jsx)("div", { className: "flex items-center justify-center w-6 h-6 rounded-full bg-blue-500", children: (0, s.jsx)(u.x, { size: "subtext2", color: "white", weight: "medium", children: D }) }) : g.contents.metadata.attributes?.inviteUrl ? x("On") : x("Off"),
                                                            showChevron: !0,
                                                        }),
                                                    g.contents.bottomButtons.asJsReadonlyArrayView().map((e) => (0, s.jsx)(Z, { button: e, onEvent: L, buttonStyleSheet: "h-5 w-5" }, e.name)),
                                                ],
                                            }),
                                        ],
                                    }),
                                    T
                                        ? (0, s.jsx)("div", {
                                              className: "w-full mt-4",
                                              children: (0, s.jsxs)("div", {
                                                  className: "w-full",
                                                  children: [
                                                      (0, s.jsxs)("div", {
                                                          className: "flex flex-row items-center justify-between px-4 pb-2",
                                                          children: [
                                                              (0, s.jsx)(u.x, { weight: "bold", children: x("Members") }),
                                                              T.showMoreUsersLink &&
                                                                  (0, s.jsx)("button", {
                                                                      type: "button",
                                                                      onClick: () => {
                                                                          e.onEvent(U.ConversationInfoEvent.TotalNumMembersClicked);
                                                                      },
                                                                      children: (0, s.jsx)(u.x, { color: "primary", children: x("See all ({number})", { number: T.showMoreUsersLink + T.participants.asJsReadonlyArrayView().length }) }),
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, s.jsxs)(G.I, {
                                                          children: [
                                                              g.contents.peopleSection.canAddPeople &&
                                                                  (0, s.jsx)(G.R, {
                                                                      icon: (0, s.jsx)(m.Z, {}),
                                                                      onClick: () => {
                                                                          e.onEvent(U.ConversationInfoEvent.AddPeopleClicked);
                                                                      },
                                                                      title: x("Add members"),
                                                                  }),
                                                              (0, s.jsx)(y.b, { handleParticipantClicked: j, handleParticipantMenuButtonClicked: w, participants: T.participants.asJsReadonlyArrayView(), menuItemsMap: T.menuItems.asJsReadonlyMapView() }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : null,
                                    g.isLoading && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(h.r, { to: "bottom", strength: 1 }), (0, s.jsx)(O, { className: "z-10" })] }),
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
                o = n(993165),
                a = n(332161);
            const r = ({ title: e, onBackClicked: t }) => (0, s.jsxs)("div", { className: "flex flex-shrink-0 items-center w-full relative pt-4 px-2 pb-2", children: [(0, s.jsx)(o.z, { icon: (0, s.jsx)(i.Z, {}), onClick: t, variant: "mutedText" }), (0, s.jsx)("div", { className: "flex-1", children: (0, s.jsx)(a.x, { size: "headline1", weight: "bold", className: "text-center", children: e }) }), (0, s.jsx)("div", { className: "w-9" }), " "] });
        },
        630086: (e, t, n) => {
            n.d(t, { I: () => l, R: () => r });
            var s = n(552322),
                i = n(52053),
                o = n(332161),
                a = n(31674);
            function r({ icon: e, destructive: t, onClick: n, title: a, value: r, showChevron: l = !1 }) {
                return (0, s.jsx)("div", { className: "rounded-xl bg-gray-0 cursor-pointer w-full", onClick: n, children: (0, s.jsxs)("div", { className: "flex flex-row items-center justify-between px-4 py-3", children: [(0, s.jsxs)("div", { className: `py-px flex items-center gap-3 ${t && "text-red-500"}`, children: [e, (0, s.jsx)(o.x, { size: "body", weight: "normal", color: t ? "red500" : "text", children: a })] }), (0, s.jsxs)("div", { className: "flex items-center gap-3", children: [r && (0, s.jsx)(o.x, { size: "body", color: "text", weight: "normal", children: r }), l && (0, s.jsx)(i.Z, { className: "text-gray-700" })] })] }) });
            }
            function l({ children: e, className: t }) {
                return (0, s.jsx)("div", { className: (0, a.cn)("flex flex-col w-full [&>*]:rounded-none [&>*]:my-0 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-100 [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl", t), children: e });
            }
        },
        238750: (e, t, n) => {
            n.d(t, { p: () => A });
            var s = n(552322),
                i = n(159603),
                o = n(983706),
                a = n(202784),
                r = n(110241),
                l = n(14269),
                c = n(52053),
                d = n(830806),
                m = n(242782),
                x = n(169355),
                u = n(589259),
                h = n(332161),
                p = n(32161),
                v = n(537335),
                f = n(336984),
                g = n(741321),
                j = n(9001),
                w = n(129558),
                C = n(607334),
                b = n(145731),
                y = n(388414),
                k = n(455091);
            const N = i.com.x.dms.convlist.ConversationListEvent;
            function I({ previewWithMetadata: e, actionsDialog: t, onEvent: n, children: i }) {
                const { t: o } = (0, k.$G)(),
                    a = t?.actions
                        .asJsReadonlyArrayView()
                        .map((t) =>
                            ((e, t, n, i) => {
                                const o = () => i(new N.ConversationActionClicked(t.preview.conversationId, n));
                                switch (n.name) {
                                    case "MarkRead":
                                        return { text: e("Mark as read"), icon: (0, s.jsx)(g.Z, {}), onClick: o };
                                    case "MarkUnread":
                                        return { text: e("Mark as unread"), icon: (0, s.jsx)(j.Z, {}), onClick: o };
                                    case "MuteConversation":
                                        return { text: e("Mute conversation"), icon: (0, s.jsx)(w.Z, {}), onClick: o };
                                    case "UnmuteConversation":
                                        return { text: e("Unmute conversation"), icon: (0, s.jsx)(C.Z, {}), onClick: o };
                                    case "RemoveChat":
                                        return { text: e("Delete conversation"), icon: (0, s.jsx)(b.Z, {}), destructive: !0, onClick: o };
                                    case "DismissDeletion":
                                    case "RequestRemove":
                                        return null;
                                }
                                return null;
                            })(o, e, t, n),
                        )
                        .filter((e) => !!e);
                return (0, s.jsx)(y.I, {
                    onOpenChange: (t) => {
                        const s = t ? new N.RowLongClicked(e) : N.DismissConversationActionsDialog;
                        n(s);
                    },
                    trigger: i,
                    items: a || [],
                    onClick: (e) => e.stopPropagation(),
                });
            }
            const E = ({ previewWithMetadata: e }) => {
                    if (!e.preview) return null;
                    const t = e.preview.latestMessagePreview,
                        n = e.metadata.usersByIdAllTime.asJsReadonlyMapView(),
                        o = n.get(t.sender)?.displayName,
                        a = e.isGroup && !t.isSent && !!o,
                        r = [];
                    if (t.messageText) a && r.push((0, s.jsx)(h.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `${o}: ` }, 1)), r.push((0, s.jsx)(h.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: t.messageText }, 2));
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
                        a ? (r.push((0, s.jsx)(h.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: o }, 3)), r.push((0, s.jsx)(h.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: ` sent ${e}` }, 4))) : r.push((0, s.jsx)(h.x, { as: "span", color: "inherit", size: "inherit", weight: "inherit", children: `Sent ${e}` }, 5));
                    }
                    return r;
                },
                R = i.com.x.dms.ReadByOthersIndicator,
                M = ({ onEvent: e, previewWithMetadata: t, actionsDialog: n, isSelected: o, withSeparator: a = !1, isSearch: r }) => {
                    const g = t.preview?.timestampValue,
                        j = t.metadata.title instanceof i.com.x.dms.model.DmTitleState.OneToOne,
                        w = (0, s.jsx)("div", {
                            className: "px-1",
                            children: (0, s.jsxs)("div", {
                                className: `select-none flex flex-row  px-1 gap-2 rounded-lg hover:bg-gray-100 ${o && "bg-gray-0"} transition-colors duration-100 cursor-pointer`,
                                children: [
                                    t.isUnreadByMe && !r ? (0, s.jsx)("div", { className: "flex items-center", children: (0, s.jsx)(l.Z, { width: "14", height: "14", className: "text-blue-500" }) }) : (0, s.jsx)("div", { className: "w-[14px] flex-shrink-0" }),
                                    (0, s.jsxs)("div", { style: { transitionTimingFunction: "cubic-bezier(0, 0.5, 0.6, 1)" }, className: "flex items-center grow gap-3 rounded-lg  transition-colors duration-100", children: [(0, s.jsx)(p.x, { avatarSize: "xxLarge", titleState: t.metadata.title, onCustomAvatarNeedsResolving: (n) => e(new i.com.x.dms.convlist.ConversationListEvent.CustomAvatarNeedsResolving(t.conversationId, n)), isInlineFacepile: !0 }), (0, s.jsxs)("div", { className: "flex-1 flex-row flex self-stretch py-2 pb-3 border-b " + (a ? "border-gray-50" : "border-transparent"), children: [(0, s.jsxs)("div", { className: "flex-1 gap-5", children: [(0, s.jsx)(u.R, { name: t.metadata.title.title, badges: j ? (0, f.r)(t.metadata.title.otherUser) : void 0, screenName: j ? t.metadata.title.otherUser?.screenName : void 0 }), (0, s.jsx)(h.x, { color: "gray700", weight: t.isUnreadByMe ? "bold" : "normal", numberOfLines: 2, className: "break-all min-h-[2.5rem]", children: (0, s.jsx)(E, { previewWithMetadata: t }) })] }), (0, s.jsxs)("div", { className: "flex flex-col items-end", children: [(0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [(0, s.jsx)(h.x, { size: "subtext1", color: "gray700", children: g && (0, s.jsx)(v.Q, { timestamp: g }) }), (0, s.jsx)(c.Z, { width: "20", height: "20", className: "text-gray-300 -mr-1" })] }), (0, s.jsxs)("div", { className: "flex flex-row gap-1 items-center h-5", children: [t.isMuted && (0, s.jsx)(d.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === R.Read && (0, s.jsx)(m.Z, { width: "14", height: "14", className: "text-gray-300" }), t.showReadByOthersIndicator === R.Unread && (0, s.jsx)(x.Z, { width: "14", height: "14", className: "text-gray-300" })] })] })] })] }),
                                ],
                            }),
                        });
                    return r ? w : (0, s.jsx)(I, { previewWithMetadata: t, actionsDialog: n, onEvent: e, children: w });
                },
                A = ({ onEvent: e, isSearch: t, conversations: n, actionsDialog: l }) => {
                    const c = (0, r.a)(),
                        d = (0, a.useRef)(null),
                        m = (0, a.useRef)({ start: 0, end: 0 }),
                        x = (0, a.useCallback)((e) => (l?.convId.id === e ? l : null), [l]),
                        u = (0, a.useCallback)(() => {
                            const t = d.current;
                            if (!t) return;
                            const { start: s, end: o } = m.current,
                                a = t.findStartIndex(),
                                r = t.findEndIndex();
                            if (s !== a || o !== r) {
                                const t = i.kotlin.collections.KtList.fromJsArray(n.slice(a, r + 1).map((e) => e.conversationId));
                                e(new i.com.x.dms.convlist.ConversationListEvent.VisibleConversationIdsChanged(t)), (m.current = { start: a, end: r });
                            }
                        }, [e, n.slice]),
                        h = (0, a.useCallback)(
                            (o, a) => {
                                const r = o.conversationId.id === c,
                                    l = a + 1 < n.length && n[a + 1]?.conversationId.id === c;
                                return (0, s.jsx)(
                                    "div",
                                    {
                                        onClick: () => {
                                            const t = new i.com.x.dms.convlist.ConversationListEvent.RowClicked(o.conversationId, o.preview?.lastReadSequenceNumber);
                                            e(t);
                                        },
                                        children: (0, s.jsx)(M, { previewWithMetadata: o, actionsDialog: x(o.preview?.conversationId.id || ""), onEvent: e, isSelected: r, withSeparator: !l && !r, isSearch: t }),
                                    },
                                    o.conversationId.id + a,
                                );
                            },
                            [c, e, n, x, t],
                        );
                    return (0, s.jsx)(o.T, { api: d, onScroll: u, items: n, renderItem: h, className: "!h-full scrollbar-thin-custom" });
                };
        },
        897995: (e, t, n) => {
            n.d(t, { Y: () => l });
            var s = n(552322),
                i = n(993165),
                o = n(332161),
                a = n(887491),
                r = n(159603);
            const l = ({ component: e, dialogParams: t }) =>
                (0, s.jsxs)("div", {
                    className: "p-5 rounded-2xl border-2 border-gray-100 bg-gray-0 absolute bottom-4 left-4 right-4 flex flex-col gap-2 z-10",
                    children: [
                        (0, s.jsx)(i.z, {
                            className: "absolute top-2.5 right-2.5",
                            variant: "primaryText",
                            icon: (0, s.jsx)(a.Z, {}),
                            onClick: () => {
                                e.onEvent(r.com.x.dms.convlist.ConversationListEvent.DismissBottomDialog);
                            },
                        }),
                        (0, s.jsx)(o.x, { size: "body", weight: "bold", children: "Daily Verification" }),
                        (0, s.jsx)(o.x, { size: "body", children: "Enter your 4-digit PIN so we can keep things secure and make sure you remember it." }),
                        (0, s.jsx)(i.z, {
                            className: "h-11",
                            variant: "primaryFilled",
                            onClick: () => {
                                e.onEvent(new r.com.x.dms.convlist.ConversationListEvent.ClickPinReminderDialog(t));
                            },
                            children: (0, s.jsx)(o.x, { size: "body", weight: "bold", color: "background", children: "Enter PIN" }),
                        }),
                    ],
                });
        },
        761312: (e, t, n) => {
            n.d(t, { K: () => f });
            var s = n(552322),
                i = n(159603),
                o = n(202784),
                a = n(455091),
                r = n(193686),
                l = n(505332),
                c = n(630086),
                d = n(155369),
                m = n(379342),
                x = n(671889),
                u = n(533476),
                h = n(658358),
                p = n(996016);
            const v = i.com.x.dms.participantlist,
                f = ({ id: e }) => {
                    const { t } = (0, a.$G)(),
                        [n, c] = (0, o.useState)(null),
                        u = (0, d.n)(),
                        h = (0, m.s)();
                    return (
                        (0, o.useEffect)(() => {
                            const t = new i.com.x.export.CancellationSignal(),
                                n = u.participantListComponent(
                                    t,
                                    i.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                    new v.ParticipantListCallbacks(
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
                                        e.stopPropagation(), n?.handleEvent(v.ParticipantListEvent.BackButtonClicked);
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
                    const n = (0, o.useCallback)(
                            (t) => {
                                e.handleEvent(new v.ParticipantListEvent.ParticipantClicked(t));
                            },
                            [e],
                        ),
                        i = (0, o.useCallback)(
                            (t, n) => {
                                e.handleEvent(new v.ParticipantListEvent.ParticipantMenuButtonClicked(t, n));
                            },
                            [e],
                        );
                    return t.participants ? (0, s.jsx)("div", { className: "w-full px-8 py-4 overflow-y-auto", children: (0, s.jsx)(c.I, { children: (0, s.jsx)(p.b, { participants: t.participants.asJsReadonlyArrayView(), menuItemsMap: t.menuItems.asJsReadonlyMapView(), handleParticipantClicked: n, handleParticipantMenuButtonClicked: i }) }) }) : null;
                };
        },
        996016: (e, t, n) => {
            n.d(t, { b: () => v });
            var s = n(552322),
                i = n(589259),
                o = n(332161),
                a = n(350311),
                r = n(336984),
                l = n(318063),
                c = n(993165),
                d = n(429804),
                m = n(951671),
                x = n(384226),
                u = n(421018),
                h = n(159603);
            const p = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, menuItems: n, participant: i }) => {
                    if (!n || 0 === n.length) return null;
                    const o = n
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
                    return (0, s.jsx)(l.P, { items: o, trigger: (0, s.jsx)(c.z, { className: "justify-self-end", icon: (0, s.jsx)(u.Z, { className: "text-gray-700" }), variant: "primaryText", color: "gray700", backgroundColor: "gray700", onClick: () => e(i.userId) }) });
                },
                v = ({ handleParticipantClicked: e, handleParticipantMenuButtonClicked: t, participants: n, menuItemsMap: l }) =>
                    (0, s.jsx)(s.Fragment, {
                        children: n.map((n) => {
                            const c = l.get(n.userId)?.asJsReadonlyArrayView();
                            return (0, s.jsxs)("div", { className: "flex flex-row w-full gap-3 px-4 items-center rounded-xl bg-gray-0", children: [(0, s.jsxs)("div", { className: "flex-1 flex gap-3 items-center py-3", children: [(0, s.jsx)(a.s, { url: n.user?.profileImageUrl, size: "medium" }), (0, s.jsx)(i.R, { name: n.user?.displayName || "", badges: (0, r.r)(n.user), weight: "normal" }), n.isAdmin && (0, s.jsx)("div", { className: "p-1 rounded bg-gray-200", children: (0, s.jsx)(o.x, { size: "subtext3", children: "Admin" }) })] }), (0, s.jsx)(p, { participant: n, menuItems: c, handleParticipantClicked: e, handleParticipantMenuButtonClicked: t })] }, n.userId.userIdString);
                        }),
                    });
        },
        842296: (e, t, n) => {
            n.d(t, { b: () => g });
            var s = n(552322),
                i = n(159603),
                o = n(202784),
                a = n(505332),
                r = n(455091),
                l = n(515790),
                c = n(699416),
                d = n(193686),
                m = n(332161),
                x = n(155369),
                u = n(379342),
                h = n(671889),
                p = n(533476),
                v = n(167285);
            const f = i.com.x.dms.vanishingmode,
                g = ({ id: e }) => {
                    const { t } = (0, r.$G)(),
                        [n, l] = (0, o.useState)(null),
                        c = (0, x.n)(),
                        m = (0, u.s)();
                    return (
                        (0, o.useEffect)(() => {
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
                                (0, s.jsx)(a.Q, {
                                    title: t("Disappearing Messages"),
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
                        n = (0, p._)(e.state);
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col items-center w-full px-4 overflow-y-auto gap-6 py-6",
                        children: [
                            (0, s.jsxs)("div", { className: "flex gap-3 justify-start", children: [(0, s.jsx)(l.Z, { className: "flex-shrink-0", width: 24, height: 24 }), (0, s.jsx)(m.x, { children: t("After messages in this chat get read, they will vanish after the selected time below.") })] }),
                            (0, s.jsx)("div", {
                                className: "w-full bg-gray-0 rounded-xl",
                                children: n.times.asJsReadonlyArrayView().map((i, o) => {
                                    const a = i ? (0, v.S)({ diffSeconds: i.inWholeMilliseconds / 1e3, style: "long" }) : t("None"),
                                        r = (!i && !n.currentTtl) || i?.equals(n.currentTtl);
                                    return (0, s.jsxs)(
                                        "div",
                                        {
                                            className: "flex justify-between items-center p-4 cursor-pointer " + (0 === o ? "" : "border-t border-t-gray-100"),
                                            onClick: () => {
                                                e.handleEvent(new f.VanishingModeEvent.TimeClicked(i));
                                            },
                                            children: [(0, s.jsx)(m.x, { children: a }), (0, s.jsx)("div", { className: "h-6 text-primary", children: r && (0, s.jsx)(c.Z, { width: 24, height: 24 }) })],
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-14817e23.953df29a.js.map
