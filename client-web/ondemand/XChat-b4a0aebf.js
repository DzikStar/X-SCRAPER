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
                v = a(864464),
                h = a(463341),
                f = a(110241),
                g = a(617588),
                j = a(628047),
                w = a(853582),
                b = a(55880),
                y = a(379342),
                k = a(533476),
                C = a(748055),
                E = a(458872),
                N = a(515790),
                z = a(993165),
                S = a(589259),
                T = a(3577),
                I = a(32161),
                G = a(858108),
                L = a(336984),
                R = a(369962);
            const D = s.com.x.dms.chat.DmEvent.ResolveCustomGroupAvatar,
                O = s.com.x.dms.model.DmTitleState,
                F = ({ component: e }) => {
                    const t = (0, k._)(e.state),
                        a = (0, T.a)("(max-width: 918px)"),
                        r = t.toolbarState instanceof s.com.x.dms.model.DmTitleState.OneToOne;
                    return (0, n.jsxs)("div", {
                        className: `flex flex-row items-center h-16 ${a ? "pl-2" : "pl-4"} gap-3 cursor-pointer absolute top-0 left-0 right-[11px] z-10`,
                        onClick: () => {
                            e.onEvent(s.com.x.dms.chat.DmEvent.ToolbarTitleClicked);
                        },
                        children: [
                            (0, n.jsx)(l.r, { className: "-z-[1]", to: "top" }),
                            a
                                ? (0, n.jsx)(z.z, {
                                      icon: (0, n.jsx)(E.Z, {}),
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
                                    G.G || e.onEvent(new D(t));
                                },
                                isInlineFacepile: !1,
                            }),
                            (0, n.jsxs)("div", { className: "flex flex-col max-w-[60%]", children: [(0, n.jsx)(S.R, { name: t.toolbarState.title, badges: r ? (0, L.r)(t.toolbarState.otherParticipant?.user) : void 0 }), (0, n.jsx)(_, { toolbarState: t.toolbarState })] }),
                        ],
                    });
                },
                _ = ({ toolbarState: e }) => {
                    const { t } = (0, r.$G)();
                    return (e instanceof O.Group || e instanceof O.OneToOne) && e.ttl ? (0, n.jsx)(A, { ttl: e.ttl }) : e instanceof O.Group ? (0, n.jsx)(i.x, { size: "subtext2", color: "gray700", children: t("{count} {count, plural, one {person} other {people}}", { count: e.numParticipants }) }) : null;
                },
                A = ({ ttl: e }) => (0, n.jsxs)("div", { className: "flex flex-row gap-1", children: [(0, n.jsx)(N.Z, { className: "text-gray-700" }), (0, n.jsx)(i.x, { size: "subtext2", color: "gray700", children: (0, R.L)(e.inWholeMilliseconds) })] });
            var M = a(788452),
                U = a(349907),
                P = a(548978);
            const $ = s.com.x.dms.composer.composer.ChatComposerEvent;
            function Z() {
                const e = (0, f.a)(),
                    t = (0, g.F)(),
                    a = (0, j.v)(),
                    s = (0, w.k)(),
                    o = (0, b.m)(),
                    { t: l } = (0, r.$G)();
                return "" !== e && s ? (0, n.jsx)(u.K, { id: e }) : "" !== e && t ? (0, n.jsx)(m.V, { id: e }) : "" !== e && a ? (0, n.jsx)(x.b, { id: e }) : "" !== e && o ? (0, n.jsx)(U.f, { id: e }) : "" !== e ? (0, n.jsx)(B, { id: e }) : (0, n.jsxs)("div", { className: "flex flex-col h-dvh w-full justify-center items-center flex-grow gap-2", children: [(0, n.jsx)("div", { className: "text-[76px] mb-10", children: (0, n.jsx)(M.Z, { className: "rotate-[8.29deg]" }) }), (0, n.jsx)(i.x, { size: "title4", weight: "medium", children: l("Select a message") }), (0, n.jsx)(i.x, { size: "body", color: "gray700", weight: "normal", children: l("To start chatting") })] });
            }
            function B({ id: e }) {
                const [t, a] = (0, c.useState)(null),
                    r = (0, p.n4)(),
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
                    t ? (0, n.jsx)(K, { component: t, conversationId: e }) : (0, n.jsx)("div", { className: "w-full h-dvh flex justify-center items-center", children: (0, n.jsx)(o.P, {}) })
                );
            }
            function K({ component: e, conversationId: t }) {
                const a = (0, k._)(e.state),
                    { t: s } = (0, r.$G)(),
                    o = (0, c.useRef)(null),
                    [m, u] = (0, c.useState)(0),
                    x = (0, c.useCallback)(
                        (t) => {
                            e.composer.onEvent(new $.OnFileAttached(t));
                        },
                        [e.composer],
                    ),
                    p = (0, c.useCallback)(() => {
                        e.composer.onEvent($.OnFileAttachmentStarted);
                    }, [e.composer]),
                    { isDragging: f, handleDragOver: g, handleDragLeave: j, handleDrop: w } = (0, C.F)({ onFileAttached: x, onFileDrop: p, isEnabled: !a.isReadOnly });
                return (
                    (0, c.useLayoutEffect)(() => {
                        const e = o.current;
                        if (!e) return;
                        const t = new ResizeObserver((t) => {
                            for (const a of t)
                                if (a.target === e) {
                                    const e = a.contentRect.height;
                                    u(e);
                                }
                        });
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, []),
                    (0, n.jsxs)("div", { className: "flex flex-col h-dvh flex-grow relative", onDragOver: g, onDragLeave: j, onDrop: w, children: [f && (0, n.jsx)("div", { className: "absolute inset-0 bg-brand/10 border-2 border-dashed border-brand z-50 flex items-center justify-center", children: (0, n.jsx)(i.x, { size: "subtext1", weight: "medium", color: "brand", children: s("Drop file to attach") }) }), (0, n.jsx)(F, { component: e }), (0, n.jsx)("div", { className: "flex-1 overflow-hidden isolate", children: (0, n.jsx)(h.Bu, { children: (0, n.jsx)(v.r, { component: e, composerHeight: m }, t) }) }), (0, n.jsxs)("div", { className: "absolute bottom-0 left-0 right-[11px] isolate", ref: o, children: [a.typingIndicatorItem && (0, n.jsx)(P.y, { typingIndicatorItem: a.typingIndicatorItem }), a.isReadOnly ? (0, n.jsx)("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: (0, n.jsx)(i.x, { size: "body", color: "gray700", className: "text-center", children: "RemovedFromGroup" === a.readOnlyReason?.name ? s("You can no longer send messages in this conversation because you were removed from the group.") : "LatestCKeyFailure" === a.readOnlyReason?.name ? s("You can no longer send messages in this conversation due to a security verification failure.") : s("This conversation is currently in read-only mode.") }) }) : (0, n.jsx)(d.a, { component: e, showingMentionPicker: a.showingMentionPicker }), (0, n.jsx)(l.r, { to: "bottom", className: "-z-10", strength: a.typingIndicatorItem ? 7 : 5 })] })] })
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
                if (l instanceof s.com.x.dms.model.DmTitleState.OneToOne) return (0, n.jsx)(r.s, { url: l.otherParticipant?.user?.profileImageUrl, size: e, screenName: l.otherParticipant?.user?.screenName, withLink: c });
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
                s = a(6937),
                r = a(165272);
            const i = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                o = ({ url: e, size: t, resolution: a = "200x200", screenName: o, withLink: l }) => {
                    const c = !(0, r.F)() || "external";
                    return (0, n.jsx)(s.q, { url: e || i, size: t, resolution: a, screenName: o, withLink: l ?? c });
                };
        },
        870392: (e, t, a) => {
            a.d(t, { $: () => w });
            var n = a(552322),
                s = a(159603),
                r = a(455091),
                i = a(6937),
                o = a(332161),
                l = a(687521),
                c = a(993165),
                d = a(34681),
                m = a(202784),
                u = a(32161),
                x = a(155369),
                p = a(379342),
                v = a(210071),
                h = a(533476),
                f = a(858108),
                g = a(595117);
            const j = s.com.x.dms.editgroup;
            function w({ convId: e }) {
                const t = (0, v.$)(),
                    [a, r] = (0, m.useState)(null),
                    i = (0, x.n4)(),
                    o = (0, p.s)();
                return (
                    (0, m.useEffect)(() => {
                        const t = new s.com.x.export.CancellationSignal(),
                            a = i.editGroupMetadataComponent(
                                t,
                                e,
                                new j.EditGroupMetadataCallbacks(() => {
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
                    a ? (0, n.jsx)(b, { isOpen: t, component: a }) : null
                );
            }
            const b = ({ isOpen: e, component: t }) => {
                const { t: a } = (0, r.$G)(),
                    x = (0, h._)(t.state),
                    p = (0, m.useRef)(null),
                    v = (0, m.useRef)(null),
                    [w, b] = (0, m.useState)(null);
                (0, m.useEffect)(() => {
                    x.metadata?.title?.title && t.handleEvent(new j.EditGroupMetadataEvent.TitleTextUpdated(x.metadata.title.title));
                }, [x.metadata?.title?.title, t]);
                const y = (0, m.useCallback)(() => {
                        t.handleEvent(j.EditGroupMetadataEvent.SaveButtonClicked),
                            setTimeout(() => {
                                b(null);
                            }, 150);
                    }, [t]),
                    k = (0, m.useCallback)(() => {
                        t.handleEvent(j.EditGroupMetadataEvent.BackButtonClicked),
                            setTimeout(() => {
                                b(null);
                            }, 150);
                    }, [t]),
                    C = (0, m.useCallback)(() => {
                        v.current?.click();
                    }, []),
                    E = (0, m.useCallback)(
                        async (e) => {
                            const a = e.target.files?.[0];
                            if (!a) return;
                            const n = await (0, g.F)(a);
                            await (0, g.$)(
                                n,
                                () => {},
                                (e) => {
                                    s.com.x.dms.getUrlFromUri(e).then((e) => {
                                        e && b(e);
                                    }),
                                        t.handleEvent(new j.EditGroupMetadataEvent.NewAvatarSelected(e));
                                },
                            );
                        },
                        [t],
                    );
                return (0, n.jsx)(d.Vq, {
                    open: e,
                    onOpenChange: k,
                    children: (0, n.jsxs)(d.cZ, {
                        className: "max-w-md",
                        children: [
                            (0, n.jsx)(d.fK, { children: (0, n.jsx)(d.$N, { children: a("Edit Group") }) }),
                            (0, n.jsxs)("div", {
                                className: "flex flex-col items-center gap-6 py-4",
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: "relative group",
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: "w-24 h-24 cursor-pointer hover:opacity-90 transition-opacity",
                                                onClick: C,
                                                children:
                                                    x.metadata?.title &&
                                                    (w
                                                        ? (0, n.jsx)(i.q, { url: w, size: "fill" })
                                                        : (0, n.jsx)(u.x, {
                                                              avatarSize: "fill",
                                                              titleState: x.metadata.title,
                                                              onCustomAvatarNeedsResolving: (e) => {
                                                                  f.G || t.handleEvent(new j.EditGroupMetadataEvent.ResolveCustomAvatar(e));
                                                              },
                                                              isInlineFacepile: !0,
                                                          })),
                                            }),
                                            (0, n.jsx)("input", { type: "file", ref: v, onChange: E, className: "hidden", accept: "image/*" }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                            (0, n.jsx)(o.x, { size: "subtext2", weight: "medium", className: "mb-2", children: a("Group Name") }),
                                            (0, n.jsx)(l._, {
                                                ref: p,
                                                value: x.currentTitle,
                                                onChange: (e) => t.handleEvent(new j.EditGroupMetadataEvent.TitleTextUpdated(e.target.value)),
                                                onKeyDown: (e) => {
                                                    "Enter" === e.key && x.currentTitle.trim() && (e.preventDefault(), y());
                                                },
                                                maxLength: 50,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(d.cN, { children: [(0, n.jsx)(c.z, { variant: "mutedText", onClick: k, children: a("Cancel") }), (0, n.jsx)(c.z, { variant: "brandFilled", onClick: y, disabled: !x.currentTitle.trim(), children: a("Save") })] }),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-b4a0aebf.fc982f9a.js.map
