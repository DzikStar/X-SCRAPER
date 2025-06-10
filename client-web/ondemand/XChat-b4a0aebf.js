"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-b4a0aebf"],
    {
        633435: (e, t, a) => {
            a.d(t, { Q: () => Z });
            var n = a(552322),
                s = a(159603),
                r = a(455091),
                i = a(332161),
                o = a(193686),
                l = a(959992),
                c = a(202784),
                d = a(125691),
                m = a(780361),
                u = a(761312),
                x = a(842296),
                p = a(155369),
                v = a(228805),
                h = a(463341),
                f = a(110241),
                g = a(617588),
                j = a(628047),
                b = a(853582),
                w = a(55880),
                y = a(379342),
                C = a(533476),
                E = a(748055),
                k = a(458872),
                N = a(515790),
                z = a(993165),
                S = a(589259),
                T = a(305399),
                I = a(32161),
                L = a(858108),
                D = a(336984),
                R = a(369962);
            const G = s.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                O = s.com.x.dms.model.DmTitleState,
                _ = ({ component: e }) => {
                    const t = (0, C._)(e.state),
                        a = (0, T.a)("(max-width: 918px)"),
                        r = t.toolbarState instanceof s.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, n.jsxs)("div", {
                        className: "flex flex-row items-center h-16 pl-2 gap-3 cursor-pointer absolute top-0 left-0 right-[11px] z-10",
                        onClick: () => {
                            e.onEvent(s.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            (0, n.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                            a
                                ? (0, n.jsx)(z.z, {
                                      icon: (0, n.jsx)(k.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(s.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, n.jsx)(I.x, {
                                avatarSize: "large",
                                titleState: t.toolbarState,
                                onCustomAvatarNeedsResolving: (t) => {
                                    L.G || e.onEvent(new G(t));
                                },
                                isInlineFacepile: !1,
                            }),
                            (0, n.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, n.jsx)(S.R, { name: t.toolbarState.title, badges: r ? (0, D.r)(t.toolbarState.otherUser) : void 0 }), (0, n.jsx)(U, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                U = ({ toolbarState: e }) => ((e instanceof O.Group || e instanceof O.OneToOne) && e.ttl ? (0, n.jsx)(A, { ttl: e.ttl }) : e instanceof O.Group ? (0, n.jsxs)(i.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                A = ({ ttl: e }) => (0, n.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, n.jsx)(N.Z, { className: "text-gray-700" }), (0, n.jsx)(i.x, { size: "subtext2", color: "gray700", children: (0, R.L)(e.inWholeMilliseconds) })] });
            var F = a(788452),
                M = a(349907),
                $ = a(548978);
            const P = s.com.x.dms.composer.composer.ChatComposerEvent;
            function Z() {
                const e = (0, f.a)(),
                    t = (0, g.F)(),
                    a = (0, j.v)(),
                    s = (0, b.k)(),
                    r = (0, w.m)();
                return "" !== e && s ? (0, n.jsx)(u.K, { id: e }) : "" !== e && t ? (0, n.jsx)(m.V, { id: e }) : "" !== e && a ? (0, n.jsx)(x.b, { id: e }) : "" !== e && r ? (0, n.jsx)(M.f, { id: e }) : "" !== e ? (0, n.jsx)(B, { id: e }) : (0, n.jsxs)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: [(0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(F.Z, { className: "rotate-[8.29deg]" }) }), (0, n.jsx)(i.x, { size: "title4", weight: "medium", children: "Select a message" }), (0, n.jsx)(i.x, { size: "body", color: "gray700", weight: "normal", children: "To start chatting" })] });
            }
            function B({ id: e }) {
                const [t, a] = (0, c.useState)(null),
                    r = (0, p.n)(),
                    i = (0, y.s)();
                return (
                    (0, c.useEffect)(() => {
                        const t = new s.com.x.export.CancellationSignal(),
                            n = r.dmComponent(
                                s.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new s.com.x.dms.chat.DmCallbacks(
                                    () => {
                                        i.toInbox();
                                    },
                                    () => {},
                                    () => {
                                        i.toConversationInfo(e);
                                    },
                                    () => {},
                                    () => {},
                                ),
                                t,
                            );
                        return (
                            a(n),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [r, e, i]),
                    t ? (0, n.jsx)(K, { component: t }) : (0, n.jsx)("div", { className: "w-full h-dvh flex justify-center items-center", children: (0, n.jsx)(o.P, {}) })
                );
            }
            function K({ component: e }) {
                const t = (0, C._)(e.state),
                    { t: a } = (0, r.$G)(),
                    s = (0, c.useRef)(null),
                    [o, m] = (0, c.useState)(0),
                    u = (0, c.useCallback)(
                        (t) => {
                            e.composer.onEvent(new P.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    x = (0, c.useCallback)(() => {
                        e.composer.onEvent(P.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: p, handleDragOver: f, handleDragLeave: g, handleDrop: j } = (0, E.F)({ onFileAttached: u, onFileDrop: x, isEnabled: !t.isReadOnly });
                return (
                    (0, c.useLayoutEffect)(() => {
                        const e = s.current;
                        if (!e) return;
                        const t = new ResizeObserver((t) => {
                            for (const a of t)
                                if (a.target === e) {
                                    const e = a.contentRect.height;
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
                    (0, n.jsxs)("div", { className: "flex flex-col h-dvh flex-grow relative", onDragOver: f, onDragLeave: g, onDrop: j, children: [p && (0, n.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, n.jsx)(i.x, { size: "subtext1", weight: "medium", color: "brand", children: a("Drop file to attach") }) }), (0, n.jsx)(_, { component: e }), (0, n.jsx)("div", { className: "flex-1 overflow-hidden isolate", children: (0, n.jsx)(h.Bu, { children: (0, n.jsx)(v.r, { component: e, isTypingIndicatorShown: !!t.typingIndicatorItem, composerHeight: o }) }) }), (0, n.jsxs)("div", { className: "absolute bottom-0 left-0 right-[11px] isolate", ref: s, children: [t.typingIndicatorItem && (0, n.jsx)($.y, { typingIndicatorItem: t.typingIndicatorItem }), t.isReadOnly ? (0, n.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, n.jsx)(i.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === t.readOnlyReason?.name ? a("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === t.readOnlyReason?.name ? a("You can no longer send messages in this conversation due to a security verification failure.") : a("This conversation is currently in read-only mode.") }) }) : (0, n.jsx)(d.a, { component: e }), (0, n.jsx)(l.r, { to: "bottom", className: "-z-10", strength: t.typingIndicatorItem ? 7 : 5 })] })] })
                );
            }
        },
        759746: (e, t, a) => {
            a.d(t, { M: () => o });
            var n = a(552322),
                s = a(789764),
                r = a(350311);
            const i = ({ firstUrl: e, resolution: t, secondUrl: a, size: s = "xxLarge" }) => {
                    const i = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "33.33%";
                                case "xxLarge":
                                    return "16px";
                                default:
                                    return "8px";
                            }
                        })(s),
                        o = ((e) => ("fill" === e ? "2%" : "1px"))(s),
                        l = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "fill";
                                case "xxLarge":
                                    return "large";
                                default:
                                    return "medium";
                            }
                        })(s);
                    return (0, n.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${i} - ${o} * 2)` }, children: [(0, n.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: o }, children: (0, n.jsx)(r.s, { url: e, size: l, resolution: t }) }), (0, n.jsx)("div", { style: { marginLeft: `calc(-${i} - ${o} * 2)`, marginTop: `calc(-${i} + ${o} * 2)`, marginBottom: i }, children: (0, n.jsx)(r.s, { url: a, size: l, resolution: t }) })] });
                },
                o = ({ avatarSize: e, isInlineFacepile: t, resolution: a, users: o, withLink: l }) => {
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
                        if (o.length >= 2) return (0, n.jsx)(i, { size: c, firstUrl: o[0]?.profileImageUrl, resolution: a, secondUrl: o[1]?.profileImageUrl });
                        if (1 === o.length) return (0, n.jsx)(r.s, { url: o[0]?.profileImageUrl, size: e, resolution: a, withLink: l });
                    }
                    let d = o.map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return o.length <= 3 ? (0, n.jsx)(s.o, { urls: d, size: e, resolution: a, stackOrder: "descending" }) : ((d = d.slice(0, 3)), (0, n.jsx)(s.o, { urls: d, size: e, resolution: a, stackOrder: "overlap" }));
                };
        },
        32161: (e, t, a) => {
            a.d(t, { x: () => l });
            var n = a(552322),
                s = a(159603),
                r = a(350311);
            const i = ({ avatar: e, avatarSize: t, onCustomAvatarNeedsResolving: a, withLink: i }) => (e instanceof s.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, n.jsx)(r.s, { url: e.uri, size: t, withLink: i }) : (e instanceof s.com.x.dms.model.MediaUriState.AvatarNeedsResolving && a(e), (0, n.jsx)(r.s, { size: t })));
            var o = a(759746);
            const l = ({ avatarSize: e, isInlineFacepile: t, onCustomAvatarNeedsResolving: a, titleState: l, withLink: c }) => {
                if (l instanceof s.com.x.dms.model.DmTitleState.OneToOne) return (0, n.jsx)(r.s, { url: l.otherUser?.profileImageUrl, size: e, screenName: l.otherUser?.screenName, withLink: c });
                if (l instanceof s.com.x.dms.model.DmTitleState.Group) {
                    if (l.avatarType instanceof s.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, n.jsx)(i, { avatar: l.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: a, withLink: c });
                    if (l.avatarType instanceof s.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, n.jsx)(o.M, { avatarSize: e, isInlineFacepile: t, users: l.avatarType.users.asJsReadonlyArrayView(), withLink: c });
                }
                return null;
            };
        },
        350311: (e, t, a) => {
            a.d(t, { j: () => i, s: () => o });
            var n = a(552322),
                s = a(378364),
                r = a(165272);
            const i = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                o = ({ url: e, size: t, resolution: a = "200x200", screenName: o, withLink: l }) => {
                    const c = !(0, r.F)() || "external";
                    return (0, n.jsx)(s.q, { url: e || i, size: t, resolution: a, screenName: o, withLink: l ?? c });
                };
        },
        870392: (e, t, a) => {
            a.d(t, { $: () => g });
            var n = a(552322),
                s = a(159603),
                r = a(455091),
                i = a(332161),
                o = a(687521),
                l = a(993165),
                c = a(34681),
                d = a(202784),
                m = a(32161),
                u = a(155369),
                x = a(379342),
                p = a(210071),
                v = a(533476),
                h = a(858108);
            const f = s.com.x.dms.editgroup;
            function g({ convId: e }) {
                const t = (0, p.$)(),
                    [a, r] = (0, d.useState)(null),
                    i = (0, u.n)(),
                    o = (0, x.s)();
                return (
                    (0, d.useEffect)(() => {
                        const t = new s.com.x.export.CancellationSignal(),
                            a = i.editGroupMetadataComponent(
                                t,
                                e,
                                new f.EditGroupMetadataCallbacks(() => {
                                    o.toConversationInfo(e.id);
                                }),
                            );
                        return (
                            r(a),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [i, e, o]),
                    a ? (0, n.jsx)(j, { isOpen: t, component: a }) : null
                );
            }
            const j = ({ isOpen: e, component: t }) => {
                const { t: a } = (0, r.$G)(),
                    s = (0, v._)(t.state),
                    u = (0, d.useRef)(null);
                (0, d.useEffect)(() => {
                    s.metadata?.title?.title && t.handleEvent(new f.EditGroupMetadataEvent.TitleTextUpdated(s.metadata.title.title));
                }, [s.metadata?.title?.title, t]);
                const x = (0, d.useCallback)(() => {
                        t.handleEvent(f.EditGroupMetadataEvent.SaveButtonClicked);
                    }, [t]),
                    p = (0, d.useCallback)(() => {
                        t.handleEvent(f.EditGroupMetadataEvent.BackButtonClicked);
                    }, [t]);
                return (0, n.jsx)(c.Vq, {
                    open: e,
                    onOpenChange: p,
                    children: (0, n.jsxs)(c.cZ, {
                        className: "max-w-md",
                        children: [
                            (0, n.jsx)(c.fK, { children: (0, n.jsx)(c.$N, { children: a("Edit Group") }) }),
                            (0, n.jsxs)("div", {
                                className: "flex flex-col items-center gap-6 py-4",
                                children: [
                                    (0, n.jsx)("div", {
                                        className: "relative group",
                                        children: (0, n.jsx)("div", {
                                            className: "w-24 h-24",
                                            children:
                                                s.metadata?.title &&
                                                (0, n.jsx)(m.x, {
                                                    avatarSize: "fill",
                                                    titleState: s.metadata.title,
                                                    onCustomAvatarNeedsResolving: (e) => {
                                                        h.G || t.handleEvent(new f.EditGroupMetadataEvent.ResolveCustomAvatar(e));
                                                    },
                                                    isInlineFacepile: !0,
                                                }),
                                        }),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, n.jsx)(i.x, { size: "subtext2", weight: "medium", className: "mb-2", children: a("Group Name") }),
                                            (0, n.jsx)(o._, {
                                                ref: u,
                                                value: s.currentTitle,
                                                onChange: (e) => t.handleEvent(new f.EditGroupMetadataEvent.TitleTextUpdated(e.target.value)),
                                                onKeyDown: (e) => {
                                                    "Enter" === e.key && s.currentTitle.trim() && (e.preventDefault(), x());
                                                },
                                                maxLength: 50,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(c.cN, { children: [(0, n.jsx)(l.z, { variant: "mutedText", onClick: p, children: a("Cancel") }), (0, n.jsx)(l.z, { variant: "brandFilled", onClick: x, disabled: !s.currentTitle.trim(), children: a("Save") })] }),
                        ],
                    }),
                });
            };
        },
        346598: (e, t, a) => {
            a.d(t, { V: () => d });
            var n = a(159603),
                s = a(8974),
                r = a(303676),
                i = a(928220),
                o = a(879922),
                l = a(196594);
            const c = n.com.x.dms.util;
            class d extends n.com.x.dms.util.EntityParser {
                doParse(e) {
                    return n.kotlin.collections.KtList.fromJsArray([...(0, s.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Email(...e)), ...(0, r.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Hashtag(...e)), ...(0, i.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Cashtag(...e)), ...(0, o.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Mention(...e)), ...(0, l.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Url(...e))]);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-b4a0aebf.293cfd6a.js.map
