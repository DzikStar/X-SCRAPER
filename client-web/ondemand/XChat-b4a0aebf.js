"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-b4a0aebf"],
    {
        633435: (e, t, a) => {
            a.d(t, { Q: () => Z });
            var s = a(552322),
                n = a(159603),
                r = a(455091),
                o = a(332161),
                i = a(193686),
                l = a(959992),
                c = a(202784),
                d = a(125691),
                m = a(780361),
                u = a(761312),
                x = a(842296),
                p = a(155369),
                v = a(228805),
                f = a(463341),
                h = a(110241),
                g = a(617588),
                j = a(628047),
                b = a(853582),
                y = a(55880),
                w = a(379342),
                C = a(533476),
                E = a(748055),
                N = a(458872),
                z = a(515790),
                S = a(993165),
                T = a(589259),
                k = a(305399),
                I = a(32161),
                D = a(858108),
                R = a(336984),
                G = a(369962);
            const O = n.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                _ = n.com.x.dms.model.DmTitleState,
                U = ({ component: e }) => {
                    const t = (0, C._)(e.state),
                        a = (0, k.a)("(max-width: 918px)"),
                        r = t.toolbarState instanceof n.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-row items-center h-16 pl-2 gap-3 cursor-pointer absolute top-0 left-0 right-[11px] z-10",
                        onClick: () => {
                            e.onEvent(n.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            (0, s.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                            a
                                ? (0, s.jsx)(S.z, {
                                      icon: (0, s.jsx)(N.Z, {}),
                                      onClick: (t) => {
                                          t.stopPropagation(), e.onEvent(n.com.x.dms.chat.DmEvent.BackButtonClicked);
                                      },
                                      variant: "primaryText",
                                  })
                                : null,
                            (0, s.jsx)(I.x, {
                                avatarSize: "large",
                                titleState: t.toolbarState,
                                onCustomAvatarNeedsResolving: (t) => {
                                    D.G || e.onEvent(new O(t));
                                },
                                isInlineFacepile: !1,
                            }),
                            (0, s.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, s.jsx)(T.R, { name: t.toolbarState.title, badges: r ? (0, R.r)(t.toolbarState.otherUser) : void 0 }), (0, s.jsx)(A, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                A = ({ toolbarState: e }) => ((e instanceof _.Group || e instanceof _.OneToOne) && e.ttl ? (0, s.jsx)(F, { ttl: e.ttl }) : e instanceof _.Group ? (0, s.jsxs)(o.x, { size: "subtext2", color: "gray700", children: [e.numParticipants, " people"] }) : null),
                F = ({ ttl: e }) => (0, s.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, s.jsx)(z.Z, { className: "text-gray-700" }), (0, s.jsx)(o.x, { size: "subtext2", color: "gray700", children: (0, G.L)(e.inWholeMilliseconds) })] });
            var M = a(788452),
                L = a(349907),
                $ = a(548978);
            const P = n.com.x.dms.composer.composer.ChatComposerEvent;
            function Z() {
                const e = (0, h.a)(),
                    t = (0, g.F)(),
                    a = (0, j.v)(),
                    n = (0, b.k)(),
                    r = (0, y.m)();
                return "" !== e && n ? (0, s.jsx)(u.K, { id: e }) : "" !== e && t ? (0, s.jsx)(m.V, { id: e }) : "" !== e && a ? (0, s.jsx)(x.b, { id: e }) : "" !== e && r ? (0, s.jsx)(L.f, { id: e }) : "" !== e ? (0, s.jsx)(B, { id: e }) : (0, s.jsxs)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: [(0, s.jsx)("div", { className: "text-[76px] mb-10", children: (0, s.jsx)(M.Z, { className: "rotate-[8.29deg]" }) }), (0, s.jsx)(o.x, { size: "title4", weight: "medium", children: "Select a message" }), (0, s.jsx)(o.x, { size: "body", color: "gray700", weight: "normal", children: "To start chatting" })] });
            }
            function B({ id: e }) {
                const [t, a] = (0, c.useState)(null),
                    r = (0, p.n)(),
                    o = (0, w.s)();
                return (
                    (0, c.useEffect)(() => {
                        const t = new n.com.x.export.CancellationSignal(),
                            s = r.dmComponent(
                                n.com.x.models.dm.XConversationId.Companion.fromStringRequired(e),
                                new n.com.x.dms.chat.DmCallbacks(
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
                            a(s),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [r, e, o]),
                    t ? (0, s.jsx)(K, { component: t }) : (0, s.jsx)("div", { className: "w-full h-dvh flex justify-center items-center", children: (0, s.jsx)(i.P, {}) })
                );
            }
            function K({ component: e }) {
                const t = (0, C._)(e.state),
                    { t: a } = (0, r.$G)(),
                    n = (0, c.useRef)(null),
                    [i, m] = (0, c.useState)(0),
                    u = (0, c.useCallback)(
                        (t) => {
                            e.composer.onEvent(new P.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    x = (0, c.useCallback)(() => {
                        e.composer.onEvent(P.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: p, handleDragOver: h, handleDragLeave: g, handleDrop: j } = (0, E.F)({ onFileAttached: u, onFileDrop: x, isEnabled: !t.isReadOnly });
                return (
                    (0, c.useLayoutEffect)(() => {
                        const e = n.current;
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
                    (0, s.jsxs)("div", { className: "flex flex-col h-dvh flex-grow relative", onDragOver: h, onDragLeave: g, onDrop: j, children: [p && (0, s.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, s.jsx)(o.x, { size: "subtext1", weight: "medium", color: "brand", children: a("Drop file to attach") }) }), (0, s.jsx)(U, { component: e }), (0, s.jsx)("div", { className: "flex-1 overflow-hidden isolate", children: (0, s.jsx)(f.Bu, { children: (0, s.jsx)(v.r, { component: e, isTypingIndicatorShown: !!t.typingIndicatorItem, composerHeight: i }) }) }), (0, s.jsxs)("div", { className: "absolute bottom-0 left-0 right-[11px] isolate", ref: n, children: [t.typingIndicatorItem && (0, s.jsx)($.y, { typingIndicatorItem: t.typingIndicatorItem }), t.isReadOnly ? (0, s.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, s.jsx)(o.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === t.readOnlyReason?.name ? a("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === t.readOnlyReason?.name ? a("You can no longer send messages in this conversation due to a security verification failure.") : a("This conversation is currently in read-only mode.") }) }) : (0, s.jsx)(d.a, { component: e }), (0, s.jsx)(l.r, { to: "bottom", className: "-z-10", strength: t.typingIndicatorItem ? 7 : 5 })] })] })
                );
            }
        },
        759746: (e, t, a) => {
            a.d(t, { M: () => i });
            var s = a(552322),
                n = a(789764),
                r = a(350311);
            const o = ({ firstUrl: e, resolution: t, secondUrl: a, size: n = "xxLarge" }) => {
                    const o = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "33.33%";
                                case "xxLarge":
                                    return "16px";
                                default:
                                    return "8px";
                            }
                        })(n),
                        i = ((e) => ("fill" === e ? "2%" : "1px"))(n),
                        l = ((e) => {
                            switch (e) {
                                case "fill":
                                    return "fill";
                                case "xxLarge":
                                    return "large";
                                default:
                                    return "medium";
                            }
                        })(n);
                    return (0, s.jsxs)("div", { className: "flex rounded-lg", style: { marginTop: `calc(${o} - ${i} * 2)` }, children: [(0, s.jsx)("div", { className: "rounded-full bg-background", style: { zIndex: 2, padding: i }, children: (0, s.jsx)(r.s, { url: e, size: l, resolution: t }) }), (0, s.jsx)("div", { style: { marginLeft: `calc(-${o} - ${i} * 2)`, marginTop: `calc(-${o} + ${i} * 2)`, marginBottom: o }, children: (0, s.jsx)(r.s, { url: a, size: l, resolution: t }) })] });
                },
                i = ({ avatarSize: e, isInlineFacepile: t, resolution: a, users: i }) => {
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
                        if (i.length >= 2) return (0, s.jsx)(o, { size: l, firstUrl: i[0]?.profileImageUrl, resolution: a, secondUrl: i[1]?.profileImageUrl });
                        if (1 === i.length) return (0, s.jsx)(r.s, { url: i[0]?.profileImageUrl, size: e, resolution: a });
                    }
                    let c = i.map((e) => e?.profileImageUrl ?? "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
                    return i.length <= 3 ? (0, s.jsx)(n.o, { urls: c, size: e, resolution: a, stackOrder: "descending" }) : ((c = c.slice(0, 3)), (0, s.jsx)(n.o, { urls: c, size: e, resolution: a, stackOrder: "overlap" }));
                };
        },
        32161: (e, t, a) => {
            a.d(t, { x: () => l });
            var s = a(552322),
                n = a(159603),
                r = a(350311);
            const o = ({ avatar: e, avatarSize: t, onCustomAvatarNeedsResolving: a }) => (e instanceof n.com.x.dms.model.MediaUriState.ResolvedMedia ? (0, s.jsx)(r.s, { url: e.uri, size: t }) : (e instanceof n.com.x.dms.model.MediaUriState.AvatarNeedsResolving && a(e), (0, s.jsx)(r.s, { size: t })));
            var i = a(759746);
            const l = ({ avatarSize: e, isInlineFacepile: t, onCustomAvatarNeedsResolving: a, titleState: l }) => {
                if (l instanceof n.com.x.dms.model.DmTitleState.OneToOne) return (0, s.jsx)(r.s, { url: l.otherUser?.profileImageUrl, size: e, screenName: l.otherUser?.screenName });
                if (l instanceof n.com.x.dms.model.DmTitleState.Group) {
                    if (l.avatarType instanceof n.com.x.dms.model.DmTitleGroupAvatarType.CustomAvatar) return (0, s.jsx)(o, { avatar: l.avatarType.image, avatarSize: e, onCustomAvatarNeedsResolving: a });
                    if (l.avatarType instanceof n.com.x.dms.model.DmTitleGroupAvatarType.Facepile) return (0, s.jsx)(i.M, { avatarSize: e, isInlineFacepile: t, users: l.avatarType.users.asJsReadonlyArrayView() });
                }
                return null;
            };
        },
        350311: (e, t, a) => {
            a.d(t, { j: () => r, s: () => o });
            var s = a(552322),
                n = a(378364);
            const r = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                o = ({ url: e, size: t, resolution: a = "200x200", screenName: o }) => (0, s.jsx)(n.q, { url: e || r, size: t, resolution: a, withLink: "external", screenName: o });
        },
        870392: (e, t, a) => {
            a.d(t, { $: () => g });
            var s = a(552322),
                n = a(159603),
                r = a(455091),
                o = a(332161),
                i = a(687521),
                l = a(993165),
                c = a(34681),
                d = a(202784),
                m = a(32161),
                u = a(155369),
                x = a(379342),
                p = a(210071),
                v = a(533476),
                f = a(858108);
            const h = n.com.x.dms.editgroup;
            function g({ convId: e }) {
                const t = (0, p.$)(),
                    [a, r] = (0, d.useState)(null),
                    o = (0, u.n)(),
                    i = (0, x.s)();
                return (
                    (0, d.useEffect)(() => {
                        const t = new n.com.x.export.CancellationSignal(),
                            a = o.editGroupMetadataComponent(
                                t,
                                e,
                                new h.EditGroupMetadataCallbacks(() => {
                                    i.toConversationInfo(e.id);
                                }),
                            );
                        return (
                            r(a),
                            () => {
                                t.cancel();
                            }
                        );
                    }, [o, e, i]),
                    a ? (0, s.jsx)(j, { isOpen: t, component: a }) : null
                );
            }
            const j = ({ isOpen: e, component: t }) => {
                const { t: a } = (0, r.$G)(),
                    n = (0, v._)(t.state),
                    u = (0, d.useRef)(null);
                (0, d.useEffect)(() => {
                    n.metadata?.title?.title && t.handleEvent(new h.EditGroupMetadataEvent.TitleTextUpdated(n.metadata.title.title));
                }, [n.metadata?.title?.title, t]);
                const x = (0, d.useCallback)(() => {
                        t.handleEvent(h.EditGroupMetadataEvent.SaveButtonClicked);
                    }, [t]),
                    p = (0, d.useCallback)(() => {
                        t.handleEvent(h.EditGroupMetadataEvent.BackButtonClicked);
                    }, [t]);
                return (0, s.jsx)(c.Vq, {
                    open: e,
                    onOpenChange: p,
                    children: (0, s.jsxs)(c.cZ, {
                        className: "max-w-md",
                        children: [
                            (0, s.jsx)(c.fK, { children: (0, s.jsx)(c.$N, { children: a("Edit Group") }) }),
                            (0, s.jsxs)("div", {
                                className: "flex flex-col items-center gap-6 py-4",
                                children: [
                                    (0, s.jsx)("div", {
                                        className: "relative group",
                                        children: (0, s.jsx)("div", {
                                            className: "w-24 h-24",
                                            children:
                                                n.metadata?.title &&
                                                (0, s.jsx)(m.x, {
                                                    avatarSize: "fill",
                                                    titleState: n.metadata.title,
                                                    onCustomAvatarNeedsResolving: (e) => {
                                                        f.G || t.handleEvent(new h.EditGroupMetadataEvent.ResolveCustomAvatar(e));
                                                    },
                                                    isInlineFacepile: !0,
                                                }),
                                        }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, s.jsx)(o.x, { size: "subtext2", weight: "medium", className: "mb-2", children: a("Group Name") }),
                                            (0, s.jsx)(i._, {
                                                ref: u,
                                                value: n.currentTitle,
                                                onChange: (e) => t.handleEvent(new h.EditGroupMetadataEvent.TitleTextUpdated(e.target.value)),
                                                onKeyDown: (e) => {
                                                    "Enter" === e.key && n.currentTitle.trim() && (e.preventDefault(), x());
                                                },
                                                maxLength: 50,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(c.cN, { children: [(0, s.jsx)(l.z, { variant: "mutedText", onClick: p, children: a("Cancel") }), (0, s.jsx)(l.z, { variant: "brandFilled", onClick: x, disabled: !n.currentTitle.trim(), children: a("Save") })] }),
                        ],
                    }),
                });
            };
        },
        346598: (e, t, a) => {
            a.d(t, { V: () => d });
            var s = a(159603),
                n = a(8974),
                r = a(303676),
                o = a(928220),
                i = a(879922),
                l = a(196594);
            const c = s.com.x.dms.util;
            class d extends s.com.x.dms.util.EntityParser {
                doParse(e) {
                    return s.kotlin.collections.KtList.fromJsArray([...(0, n.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Email(...e)), ...(0, r.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Hashtag(...e)), ...(0, o.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Cashtag(...e)), ...(0, i.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Mention(...e)), ...(0, l.Z)(e).map(({ indices: e }) => new c.ParsedEntity.Url(...e))]);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-b4a0aebf.63e8150a.js.map
