"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-38dc3b4a"],
    {
        671620: (e, t, a) => {
            a.d(t, { o: () => h });
            var n = a(202784),
                r = a(154003),
                l = a(392237),
                o = a(674132),
                s = a.n(o),
                i = a(786272),
                c = a(725405),
                d = a(125363),
                u = a(189953),
                m = a(601576),
                b = a(654917),
                p = a(752435);
            const g = s().a372681e,
                f = s().f88553c8,
                C = s().be37ecd4,
                E = { label: g };
            function h() {
                const e = (0, b.uf)(),
                    t = (0, d.v9)(e.selectConversationId),
                    a = (0, d.v9)(e.selectMetadataForLastMessage),
                    l = (0, d.v9)(e.selectStatus),
                    o = l === u.Q_.TYPING || l === u.Q_.WAITING,
                    s = (0, p.Z)({ conversationId: t, metadata: a }),
                    h = (0, c.Z)(),
                    y = (0, d.I0)(),
                    k = n.useCallback(async () => {
                        try {
                            const e = new Promise((e, t) => {
                                s((t) => e(t), t);
                            });
                            await navigator.clipboard.write([new ClipboardItem({ "text/plain": e.then((e) => new Blob([e], { type: "text/plain" })) })]), h.scribe({ element: "grok_conversation_copy_button", action: "click" }), y((0, m.fz)({ text: f, withAutoDismiss: !0 }));
                        } catch (e) {
                            h.scribe({ element: "grok_conversation_copy", action: "fail" }), y((0, m.fz)({ text: C, withAutoDismiss: !0 }));
                        }
                    }, [s, y, h]);
                return t
                    ? n.createElement(r.ZP, {
                          "aria-label": g,
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                          hoverLabel: E,
                          icon: n.createElement(i.default, null),
                          onClick: (e) => {
                              k(), e.preventDefault(), e.stopPropagation();
                          },
                          size: "medium",
                          style: [v.roundedSqaure, v.shareBtn, !a || o ? v.fadeOut : null],
                      })
                    : null;
            }
            const v = l.default.create((e) => ({ shareBtn: { transition: "opacity 0.4s", opacity: 1 }, fadeOut: { opacity: 0 }, roundedSqaure: { borderRadius: e.borderRadii.large } }));
        },
        205634: (e, t, a) => {
            a.d(t, { V: () => R });
            var n = a(202784),
                r = a(325686),
                l = a(154003),
                o = a(392237),
                s = a(674132),
                i = a.n(s),
                c = a(487552),
                d = a(125363),
                u = a(389071),
                m = a(189953),
                b = a(312771),
                p = a(654917),
                g = a(143670),
                f = a(731708),
                C = a(721266),
                E = a(451566),
                h = a(99223),
                v = a(323265),
                y = a(952793),
                k = a(839090),
                Z = a(725516),
                w = a(917862);
            const x = i().eb78b77e,
                I = i().c9772e6e,
                P = i().aa8ece10,
                _ = "grok",
                S = ({ isOpen: e, onClose: t }) => {
                    const a = (0, Z.z)(),
                        l = !!v.ZP.isWebView(),
                        o = (0, y.hC)("responsive_web_grok_fun_mode_disabled"),
                        { access: s, changeMode: i, changeModel: c, mode: b, model: S } = (0, p.ZP)(),
                        z = b === m.IK.FUN,
                        L = (0, d.v9)(u.vf),
                        R = n.useCallback(
                            (e) => {
                                i(e ? m.IK.FUN : m.IK.REGULAR, a);
                            },
                            [i, a],
                        ),
                        V = n.useCallback(
                            (e) => {
                                const n = L.find((t) => t.id === e);
                                n && (c(e, n.id, a), t());
                            },
                            [c, L, a, t],
                        ),
                        q = n.useMemo(
                            () =>
                                L.map((e, t) => {
                                    const { tags: a, text: r } = (0, w.n)(e.name);
                                    return n.createElement(g.Z, { actionSubText: e.description, actionText: n.createElement(w.I, { name: r, tags: a }), disabled: !e.isEnabled, isSelected: e.id === S, key: `model_${e.id}`, onClick: () => V(e.id), selectable: !0, style: e.isEnabled ? void 0 : D.disabled });
                                }),
                            [S, L, V],
                        ),
                        T = n.useCallback(() => {
                            a.scribe({ element: "go-to-grok-com", action: "click" }), (window.location.href = "https://grok.com/?referrer=x");
                        }, [a]),
                        H = L.some((e) => !e.isEnabled) && "free" === s;
                    return e
                        ? n.createElement(
                              k.Z,
                              {
                                  contentStyle: D.dropdown,
                                  isFixed: !0,
                                  onAnimateComplete: () => {
                                      a.scribe({ element: "open-mode-action-menu", action: "show" });
                                  },
                                  onDismiss: t,
                                  preferredHorizontalOrientation: "center",
                              },
                              q,
                              n.createElement(r.Z, { style: D.divider }),
                              n.createElement(g.Z, { Icon: h.default, actionText: n.createElement(f.ZP, { style: D.grokRerouteHeader, weight: "medium" }, P), onClick: T, selectable: !0 }),
                              H ? n.createElement(r.Z, { style: D.upsellContainer }, n.createElement(f.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: _ }, external: l, query: { referring_page: _ } }, onClick: () => t() }, I)) : null,
                              o ? null : n.createElement(r.Z, { style: D.switchContainer }, n.createElement(f.ZP, { weight: "medium" }, x), n.createElement(C.Z, { axis: "x", size: "space32" }), n.createElement(E.Z, { onValueChange: R, value: z })),
                          )
                        : null;
                },
                D = o.default.create((e) => ({ dropdown: { minWidth: 280 }, disabled: { cursor: "default" }, upsellContainer: { padding: 16 }, switchContainer: { padding: 16, flexDirection: "row", justifyContent: "space-between", borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, divider: { height: 1, backgroundColor: e.colors.gray50, width: "100%" }, grokRerouteHeader: { fontSize: e.fontSizes.subtext2 } })),
                z = i().hc965308,
                L = i().eb78b77e,
                R = () => {
                    const e = (0, d.oR)(),
                        { mode: t } = (0, p.ZP)(),
                        [a, o] = n.useState(!1),
                        s = t === m.IK.FUN,
                        i = (0, u.F9)(e.getState()),
                        g = (0, d.v9)(u.vf).find((e) => e.id === i),
                        f = (0, d.v9)(u.Pt),
                        [C, E] = n.useState(!1);
                    n.useEffect(() => {
                        f === b.ZP.LOADED && E(!0);
                    }, [f]);
                    const h = `${g?.name ?? ""}${s ? `: ${L}` : ""}`,
                        v = { label: h },
                        y = n.useCallback(() => {
                            o(!0);
                        }, [o]),
                        k = n.useCallback(() => {
                            o(!1);
                        }, [o]),
                        Z = g?.name ?? "",
                        { tags: x, text: I } = n.useMemo(() => (0, w.n)(Z), [Z]);
                    if (C) return n.createElement(r.Z, null, n.createElement(l.ZP, { "aria-label": h, backgroundColor: "transparent", borderColor: "transparent", color: "text", hoverLabel: v, onPress: a ? k : y, size: "small", style: V.button }, n.createElement(w.I, { modeLabel: s ? z : void 0, name: I, tags: x }), n.createElement(c.default, { style: V.chevron })), n.createElement(r.Z, null, n.createElement(S, { isOpen: a, onClose: k })));
                },
                V = o.default.create((e) => ({ button: { borderRadius: e.borderRadii.large, color: e.colors.text, width: "max-content", alignItems: "center", paddingStart: e.spaces.space12, paddingEnd: e.spaces.space8 }, chevron: { width: e.spaces.space16, height: e.spaces.space16, position: "relative", marginStart: e.spaces.space4, color: e.colors.gray500 } }));
        },
        764512: (e, t, a) => {
            a.d(t, { q: () => _ });
            var n = a(202784),
                r = a(325686),
                l = a(67369),
                o = a(392237),
                s = a(929028),
                i = a(292546),
                c = a(807901),
                d = a(205634),
                u = a(107267),
                m = a(154003),
                b = a(674132),
                p = a.n(b),
                g = a(177826),
                f = a(837020),
                C = a(791632),
                E = a(428880),
                h = a(988290),
                v = a(671620);
            const y = p().gb5fb7d0,
                k = { label: y },
                Z = p().g5665caa,
                w = { label: Z };
            function x({ isVerbose: e }) {
                const { isEligible: t } = (0, c.Z)(),
                    [a, l, o] = (0, E.ZP)(),
                    s = (0, u.useHistory)(),
                    { isCompactLayout: i } = (0, h.ZP)();
                return t ? n.createElement(r.Z, { style: I.container }, (0, C.HD)(s) || !o || a ? null : n.createElement(m.ZP, { "aria-label": y, backgroundColor: "transparent", borderColor: "transparent", hoverLabel: k, icon: n.createElement(g.default, null), onClick: l, size: "medium", style: [I.flipX, I.button] }), o && a ? n.createElement(m.ZP, { "aria-label": Z, backgroundColor: "transparent", borderColor: "transparent", hoverLabel: w, icon: n.createElement(f.default, null), onClick: l, size: "medium", style: I.button }) : null, i && n.createElement(v.o, null)) : null;
            }
            const I = o.default.create((e) => ({ container: { flexDirection: "row", alignItems: "center" }, button: { borderRadius: e.borderRadii.large }, flipX: { transform: [{ scaleX: -1 }] } }));
            var P = a(579711);
            const _ = () => {
                    const [e] = (0, i.Z)(),
                        t = e.get("conversation") ?? void 0,
                        { canClearConversation: a } = (0, c.Z)(),
                        o = (0, l.yu)(),
                        s = !a && !t && !o,
                        u = n.useCallback((e) => {
                            e.preventDefault(), e.stopPropagation();
                        }, []);
                    return n.createElement(r.Z, { onClick: u, style: S.container }, n.createElement(r.Z, { style: S.leftColumn }, n.createElement(x, { isVerbose: s })), n.createElement(r.Z, { style: S.centerColumn }, n.createElement(d.V, null)), n.createElement(r.Z, { style: S.rightColumn }, n.createElement(P.Z, { isVerbose: s })));
                },
                S = o.default.create((e) => ({ container: { flexDirection: "row", flexGrow: 1, flexShrink: 1, alignItems: "center", justifyContent: "center", marginVertical: "unset", paddingTop: e.spaces.space16, height: 50 }, focusContainer: { ...s.Z.getBackgroundStyles(), flexGrow: 1, flexShrink: 1, position: "sticky", zIndex: e.componentZIndices.appBarZIndex, top: 0, padding: e.spaces.space8 }, leftColumn: { flex: 1, alignItems: "flex-start", justifyContent: "center" }, centerColumn: { flex: 1, justifyContent: "center", alignItems: "center" }, rightColumn: { flex: 1, justifyContent: "center", alignItems: "flex-end" } }));
        },
        917862: (e, t, a) => {
            a.d(t, { I: () => i, n: () => d });
            a(136728);
            var n = a(202784),
                r = a(325686),
                l = a(731708),
                o = a(868634),
                s = a(392237);
            const i = ({ modeLabel: e, name: t, tags: a }) =>
                    n.createElement(
                        r.Z,
                        { style: c.content },
                        n.createElement(l.ZP, { color: "text" }, t),
                        e ? n.createElement(l.ZP, { style: c.modeLabel }, e) : void 0,
                        a.map((e, a) => n.createElement(o.ZP, { key: `tag_${t}_${e}`, style: c.tag }, n.createElement(l.ZP, { color: "blue500" }, e))),
                    ),
                c = s.default.create((e) => ({ content: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, tag: { paddingHorizontal: e.spaces.space8, backgroundColor: e.colors.blue0 }, modeLabel: { marginStart: e.spaces.space2, color: e.colors.gray700 } }));
            function d(e) {
                const t = e.match(/(\((.*?)\))|([^\(\)]+)/g);
                let a = "";
                const n = [];
                return (
                    t &&
                        (t.forEach((e) => {
                            e.startsWith("(") ? n.push(e.slice(1, -1).trim()) : (a += `${e.trim()} `);
                        }),
                        (a = a.trim())),
                    { text: a, tags: n }
                );
            }
        },
        579711: (e, t, a) => {
            a.d(t, { Z: () => D });
            var n = a(202784),
                r = a(325686),
                l = a(154003),
                o = a(392237),
                s = a(674132),
                i = a.n(s),
                c = a(73416),
                d = a(883069),
                u = a(715614),
                m = a(52735),
                b = a(125363),
                p = a(576466),
                g = a(281030),
                f = a(807901),
                C = a(654917),
                E = a(988290),
                h = a(917270),
                v = a(671620);
            const y = i().ica55d24,
                k = { label: y },
                Z = i().fbc79f6a,
                w = i().b61ad410,
                x = { label: Z },
                I = i().gb303814,
                P = i().bb89cf46,
                _ = { label: I },
                S = { label: P };
            function D({ isVerbose: e, withHistory: t }) {
                const { canClearConversation: a, handleClearConversationClick: o, isEligible: s } = (0, f.Z)(),
                    [i, D] = n.useState(!1),
                    L = (0, b.I0)(),
                    R = (0, C.uf)(),
                    V = (0, b.v9)(R.selectConversationId),
                    q = (0, b.v9)(R.selectIsConversastionPinned),
                    T = n.useMemo(() => (a ? void 0 : { opacity: 0.5 }), [a]),
                    H = n.useCallback(
                        (e) => {
                            D(!0), e.preventDefault(), e.stopPropagation();
                        },
                        [D],
                    ),
                    M = n.useCallback(() => {
                        D(!1);
                    }, [D]),
                    { isCompactLayout: O } = (0, E.ZP)();
                return s
                    ? n.createElement(
                          r.Z,
                          { style: z.container },
                          !O && n.createElement(v.o, null),
                          V &&
                              n.createElement(
                                  l.ZP,
                                  {
                                      "aria-label": q ? P : I,
                                      backgroundColor: "transparent",
                                      borderColor: "transparent",
                                      hoverLabel: q ? S : _,
                                      icon: q ? n.createElement(c.default, null) : n.createElement(d.default, null),
                                      onClick: (e) => {
                                          L(q ? (0, g.l)(V) : (0, p.v)(V)), e.preventDefault(), e.stopPropagation();
                                      },
                                      size: e ? "small" : "medium",
                                      style: z.roundedSqaure,
                                  },
                                  e ? w : void 0,
                              ),
                          n.createElement(l.ZP, { "aria-label": Z, backgroundColor: "transparent", borderColor: "transparent", hoverLabel: x, icon: n.createElement(u.default, null), onClick: H, size: e ? "small" : "medium", style: z.roundedSqaure }, e ? w : void 0),
                          e ? null : n.createElement(l.ZP, { "aria-label": y, backgroundColor: "transparent", borderColor: "transparent", disabled: !a, hoverLabel: k, icon: n.createElement(m.default, { style: z.composeIcon }), onClick: o, size: "medium", style: [T, z.roundedSqaure] }),
                          i ? n.createElement(h.O, { onDrawerDismiss: M }) : null,
                      )
                    : null;
            }
            const z = o.default.create((e) => ({ roundedSqaure: { borderRadius: e.borderRadii.large }, container: { flexDirection: "row", alignItems: "center" }, composeIcon: { fill: "none", height: 22, width: 22 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-38dc3b4a.f49cff5a.js.map
