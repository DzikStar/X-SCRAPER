"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-6ac0f1a5"],
    {
        29734: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f });
            var o = n(202784),
                r = n(125363),
                a = n(189953),
                i = n(456228),
                s = n(551864),
                c = n(246020),
                l = n(988290),
                d = n(620988),
                u = n(991985),
                m = n(78882);
            function f() {
                const e = (0, u.n)(!1),
                    t = (0, r.v9)((e) => i.kX(e)),
                    [n, f] = o.useState(null),
                    h = o.useMemo(() => [m.ZP.contentContainer, { display: t === s.j.COLLAPSED ? "none" : "flex" }], [t]),
                    g = o.useCallback(
                        (t) => {
                            e(t), f(t);
                        },
                        [f, e],
                    );
                return o.createElement(d.ZH, null, o.createElement(l.BQ, { isCompactLayout: !0, isEditingEnabled: !0, isGrokDrawer: !0, isPagedScroll: !0, isShowButtons: !0, isShowCarousel: !1, scrollable: n }, o.createElement(c.Z, { containerRef: g, containerStyle: h, contentPadding: 138, disableEducation: !0, disableStartScreen: !1, mode: a.IK.REGULAR })));
            }
        },
        78882: (e, t, n) => {
            n.d(t, { I2: () => i, T6: () => s, ZP: () => c });
            var o = n(392237),
                r = n(198438),
                a = n(521514);
            const i = [0.4, 0.53, 0.66, 0.8],
                s = 0.8,
                c = o.default.create((e) => ({ root: { position: "relative", alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space12, minWidth: a.Z.dmDrawerWidth.min, maxWidth: a.Z.dmDrawerWidth.max, transition: `all ${r.s}ms ease` }, main: { position: "absolute", backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.xLarge, overflow: "hidden", boxShadow: e.boxShadows.medium, flex: 1, width: "100%", maxHeight: 100 * s + "vh" }, hidden: { display: "none" }, contentContainer: { flex: 1, height: "unset", overflow: "auto", minHeight: "unset", maxHeight: "unset" }, drawerHeaderRadius: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge }, reducedMotion: { transition: "none" }, collapsedSmall: { maxWidth: 55, alignSelf: "flex-end", borderColor: e.colors.gray400, borderWidth: e.spaces.space1, backgroundColor: e.colors.appBarBackground, backdropFilter: "blur(12px)" }, denyPointer: { pointerEvents: "none" }, allowPointer: { pointerEvents: "auto" } }));
        },
        754181: (e, t, n) => {
            n.r(t), n.d(t, { default: () => C });
            var o = n(202784),
                r = n(325686),
                a = n(797553),
                i = n(392237),
                s = n(443781),
                c = n(725405),
                l = n(461900),
                d = n(154003),
                u = n(674132),
                m = n.n(u),
                f = n(457566),
                h = n(979512);
            const g = m().dc0c8266,
                p = m().cca5d499,
                v = "grok-ask-about-selected-text";
            function E({ onDismiss: e, selectedText: t }) {
                const { openGrok: n } = (0, h.Z)(),
                    r = (0, c.Z)(),
                    a = o.useCallback(
                        (o) => {
                            o.stopPropagation(), e();
                            const a = p({ selectedText: t });
                            n({ text: a, autoSubmit: !0, source: "ask_grok" }), r.scribe({ element: v, action: "click" });
                        },
                        [t, r, e, n],
                    );
                return o.createElement(d.ZP, { icon: o.createElement(f.x1, null), onClick: a, onMouseEnter: (e) => e.stopPropagation(), onMouseLeave: (e) => e.stopPropagation(), size: "xSmall", type: "primaryFilled" }, g);
            }
            function C({ onMouseUpRef: e }) {
                const t = (0, s.QZ)(),
                    n = (0, c.Z)(),
                    [i, d] = o.useState(""),
                    [u, m] = o.useState({ left: 0, top: 0, horizontalPosition: "left", verticalPosition: "down" });
                o.useEffect(() => {
                    i && n.scribe({ element: v, action: "show" });
                }, [n, i]),
                    o.useEffect(() => {
                        e.current = (e) => {
                            const t = window.getSelection();
                            if (
                                t &&
                                (function (e, t) {
                                    if (t.rangeCount > 0) {
                                        for (let n = 0; n < t.rangeCount; ++n) if (!e.contains(t.getRangeAt(n).commonAncestorContainer)) return !1;
                                        return !0;
                                    }
                                    return !1;
                                })(e.currentTarget, t)
                            ) {
                                const e = t.toString().trim();
                                if (e.length > 0) {
                                    const n = (function (e) {
                                        return e.getRangeAt(0).getBoundingClientRect();
                                    })(t);
                                    m({ left: n.left, top: n.bottom, horizontalPosition: "right", verticalPosition: "down" }), d(e);
                                    const o = () => {
                                        d(""), document.removeEventListener("selectionchange", o);
                                    };
                                    document.addEventListener("selectionchange", o);
                                } else d("");
                            }
                        };
                    }, [e]);
                const f = o.useCallback(() => {}, [d]),
                    h = o.useMemo(() => ({ left: u.left, top: u.top }), [u]);
                return (0, l.$)(t) && i ? o.createElement(r.Z, null, o.createElement(a.default, { animateType: "fade", contentStyle: w.dropdownContent, disableMask: !0, onDismiss: f, position: h, preferredHorizontalOrientation: u.horizontalPosition, preferredVerticalOrientation: u.verticalPosition, preventFocusShift: !0 }, o.createElement(E, { onDismiss: f, selectedText: i }))) : null;
            }
            const w = i.default.create((e) => ({ dropdownContent: { marginTop: e.spaces.space8, backgroundColor: e.colors.transparent, boxShadow: "none" } }));
        },
        764226: (e, t, n) => {
            n.d(t, { J: () => l });
            n(136728);
            var o = n(202784),
                r = n(125363),
                a = n(53939),
                i = n(327597),
                s = n(654917),
                c = n(620988);
            const l = ({ analytics: e, isReturnCitations: t, prompt: n, promptId: l }) => {
                const d = (0, r.I0)(),
                    u = (0, s.eX)(),
                    [m, f] = o.useState(!1),
                    { clearSelectedFile: h, onFileSelected: g, selectedFiles: p } = (0, c.ZP)();
                o.useEffect(() => {
                    if (!m) return;
                    const o = Object.keys(p),
                        r = [];
                    if (
                        (o.forEach((e) => {
                            const t = p[e];
                            t && t.remote && r.push(t.remote);
                        }),
                        r.length > 0)
                    ) {
                        if ((d((0, i.u)({ analytics: e, conversationKey: u })({ text: n, attachments: r, returnCitations: t })), "" !== l)) {
                            const e = "PRESET";
                            d((0, a.U)({ group_id: e, object_id: l, action_type: "CLICK" }));
                        }
                        f(!1),
                            o.forEach((e) => {
                                h(e);
                            });
                    }
                }, [p, e, u, d, t, n, l, m, h]);
                return {
                    isFileUploaded: m,
                    handleFileChange: async (e) => {
                        e.target.files && e.target.files.length > 0 && ([...e.target.files].forEach((e) => g(e, { awaitPromptSend: !0 })), f(!0));
                    },
                };
            };
        },
        574305: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(543673), n(240753), n(128399);
            var o = n(202784);
            function r(e, t, n) {
                o.useEffect(() => {
                    if (e) {
                        const e = new URLSearchParams(location.search).get("conversation");
                        if (t && n && !e) {
                            const e = new URL(window.location);
                            t && e.searchParams.set("conversation", t), history.replaceState({ state: { fromScreen: "start" } }, "", e.toString());
                        }
                    }
                }, [e, t, n]);
            }
        },
        465086: (e, t, n) => {
            n.d(t, { h: () => s });
            var o = n(202784),
                r = n(988290);
            const a = (e) => (e === window || e === document || e === document.documentElement ? window.scrollY || window.pageYOffset : e && void 0 !== e.scrollTop ? e.scrollTop : 0),
                i = (e, t) => {
                    const n = a(e);
                    return e === window || e === document || e === document.documentElement ? n + t - window.innerHeight + 400 : n + t - e.clientHeight + 400;
                };
            function s({ autoStart: e, enabled: t, scrollingFrame: n }) {
                const s = (0, r.ZP)(),
                    c = n || s.scrollable,
                    [l, d] = o.useState(null),
                    u = o.useRef({ curr: 0, currSmoothed: 0, target: 0, alpha: 0.003, beta: 0, velocity: 0, lastTimestamp: 0 }),
                    m = o.useRef(!!e);
                return (
                    o.useEffect(() => {
                        let e = !1,
                            n = !1;
                        if (!l || !t || !c) return;
                        m.current = !1;
                        const o = () => !e && !n;
                        let r,
                            s = !0;
                        const d = (e) => {
                            if (!s) return;
                            const t = l.getBoundingClientRect().top;
                            const n = i(c, t),
                                f = u.current;
                            (r = requestAnimationFrame(d)),
                                !m.current &&
                                    (function (e) {
                                        const t = e.getBoundingClientRect();
                                        return t.top >= 0 && t.left >= 0 && t.bottom <= window.innerHeight && t.right <= window.innerWidth;
                                    })(l) &&
                                    o() &&
                                    (m.current = !0);
                            const h = a(c);
                            if (!o() || !m.current) return (f.target = n), (f.curr = h), (f.currSmoothed = h), (f.velocity = 0), (f.lastTimestamp = 0), void (m.current = !1);
                            0 === f.lastTimestamp && ((f.lastTimestamp = e), (f.target = Math.max(h, n)), (f.curr = h), (f.currSmoothed = h), (f.velocity = 0)), n > h && (f.target = n);
                            let g = Math.min(e - f.lastTimestamp, 100);
                            g < 0.001 && (g = 0.001);
                            const p = f.curr + f.velocity * g,
                                v = f.target - p;
                            (f.curr = p + f.alpha * v), (f.velocity = f.velocity + (f.beta * v) / g), (f.currSmoothed += (f.curr - f.currSmoothed) / 10);
                            const E = Math.floor(u.current.currSmoothed);
                            c.scrollTo({ top: E, y: E, behavior: "auto", animated: !1 }), (f.lastTimestamp = e);
                        };
                        function f() {
                            (e = !0), (m.current = !1);
                        }
                        function h() {
                            e = !1;
                        }
                        let g;
                        function p() {
                            (n = !0),
                                (m.current = !1),
                                clearTimeout(g),
                                (g = setTimeout(() => {
                                    (n = !1), clearTimeout(g);
                                }, 100));
                        }
                        return (
                            (r = requestAnimationFrame(d)),
                            c.addEventListener("touchstart", f),
                            c.addEventListener("touchend", h),
                            c.addEventListener("mousedown", f),
                            c.addEventListener("mouseup", h),
                            c.addEventListener("wheel", p),
                            () => {
                                cancelAnimationFrame(r), (s = !1), clearTimeout(g), c.removeEventListener("touchstart", f), c.removeEventListener("touchend", h), c.removeEventListener("mousedown", f), c.removeEventListener("mouseup", h), c.removeEventListener("wheel", p);
                            }
                        );
                    }, [c, l, t]),
                    [d, m]
                );
            }
        },
        807901: (e, t, n) => {
            n.d(t, { Z: () => p });
            n(543673), n(240753), n(128399), n(136728);
            var o = n(202784),
                r = n(107267),
                a = n(674132),
                i = n.n(a),
                s = n(774426),
                c = n(725516),
                l = n(125363),
                d = n(189953),
                u = n(928831),
                m = n(623494),
                f = n(654917);
            const h = i().f794af9a,
                g = i().eccf9fea;
            function p() {
                const e = (0, l.I0)(),
                    t = (0, f.uf)(),
                    n = (0, r.useHistory)(),
                    a = (0, l.v9)(t.selectCanClearConversation),
                    { access: i, changeMode: p, mode: v } = (0, f.ZP)(),
                    { clearFilterKey: E } = (0, u.w)(),
                    C = !1 !== i,
                    w = (0, c.z)(),
                    b = (0, r.useLocation)(),
                    k = o.useCallback(() => {
                        const o = new URLSearchParams(b.search),
                            r = o.get("analysisEntityId"),
                            i = o.get("conversation");
                        (r || i) && a
                            ? (n.goBack(),
                              setTimeout(() => {
                                  e(t.clearConversation());
                              }, 500))
                            : a
                              ? e(t.clearConversation())
                              : n.goBack();
                    }, [a, e, t, n, b.search]),
                    y = o.useCallback(() => {
                        a && (e(t.clearConversation()), n.push("/i/grok"), (0, m.ZY)(w), E());
                    }, [w, a, e, t, n, E]),
                    _ = o.useCallback(() => {
                        a && (e(t.clearConversation()), (0, m.ZY)(w), E());
                    }, [w, a, e, t, E]),
                    S = o.useCallback(
                        (e) => {
                            const t = [
                                {
                                    disabled: v === d.IK.REGULAR,
                                    onClick: function () {
                                        p(d.IK.REGULAR, w);
                                    },
                                    text: g,
                                },
                                {
                                    disabled: v === d.IK.FUN,
                                    onClick: function () {
                                        p(d.IK.FUN, w);
                                    },
                                    text: h,
                                },
                            ];
                            return o.createElement(s.default, { actionItems: t, onClose: e });
                        },
                        [w, v, p],
                    );
                return { canClearConversation: a, handleBackClick: k, handleClearConversationClick: y, handleClearConversationClickWithoutNav: _, isEligible: C, renderActionsMenu: S };
            }
        },
        428880: (e, t, n) => {
            n.d(t, { ZP: () => u, fc: () => m });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                r = n(565058),
                a = n(400752),
                i = n(325686),
                s = n(952793);
            let c = !1;
            c = new URL(window.location).searchParams.has("focus");
            const l = (0, r.cn)(c),
                d = (0, r.cn)(c);
            function u() {
                const e = (0, s.hC)("responsive_web_grok_focus_mode"),
                    [t, n] = (0, a.KO)(l),
                    [r, i] = (0, a.KO)(d),
                    c = o.useCallback(() => {
                        if (r) {
                            const e = new URL(window.location);
                            e.searchParams.delete("focus"), history.replaceState(null, "", e.toString()), i(!1);
                        }
                        n(!t);
                    }, [t, r, n, i]);
                return [t && e, c, e];
            }
            function m(e) {
                const [t] = u();
                return o.createElement(i.Z, { style: { opacity: t ? 0 : void 0, pointerEvents: t ? "none" : void 0 } }, e.children);
            }
        },
        354851: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(952793),
                a = n(725516),
                i = n(125363),
                s = n(96275),
                c = n(654917);
            function l({ conversationId: e }) {
                const t = !!e,
                    n = (0, c.uf)(),
                    l = !!(0, i.v9)(n.selectFirstMessage),
                    [d, u] = o.useState(t && !l);
                (0, c.eX)();
                let m = e || "";
                const f = (0, i.I0)(),
                    h = (0, a.z)(),
                    g = o.useRef(h);
                o.useEffect(() => {
                    g.current = h;
                }, [h]);
                const p = (0, i.v9)(n.selectConversationId);
                return (
                    (0, r.hC)("responsive_web_grok_fix_same_id_reload") && m === p && l && (m = ""),
                    o.useEffect(() => {
                        m &&
                            (u(!0),
                            f((0, s.d)(m, g.current)).finally(() => {
                                u(!1);
                            }));
                    }, [m]),
                    { hasConversation: t, isConversationLoading: d }
                );
            }
        },
        222656: (e, t, n) => {
            n.d(t, { Z: () => f });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                r = n(107267),
                a = n(323265),
                i = n(952793),
                s = n(725516),
                c = n(125363),
                l = n(189953),
                d = n(464023),
                u = n(623494),
                m = n(654917);
            function f() {
                const e = (0, c.I0)(),
                    t = (0, m.uf)(),
                    n = (0, r.useHistory)(),
                    f = (0, c.v9)(t.selectCanClearConversation),
                    { access: h } = (0, m.ZP)(),
                    g = !1 !== h,
                    { changeMode: p, changeModel: v, mode: E, model: C } = (0, m.ZP)(),
                    w = (0, s.z)(),
                    b = (0, i.hC)("responsive_web_grok_disable_new_conversation_url_reset");
                o.useEffect(() => {
                    if (g && a.ZP.isTwitterApp())
                        return (
                            window.addEventListener(d.N_, n),
                            () => {
                                window.removeEventListener(d.N_, n);
                            }
                        );
                    function n(n) {
                        const o = new URL(location.href);
                        if (n.detail.message === d.uY) {
                            f && (e(t.clearConversation()), (0, u.ZY)(w));
                            (b && !["/i/grok/history", "/i/grok/media-carousel"].some((e) => o.pathname.startsWith(e))) || (location.href = "/i/grok");
                        }
                        n.detail.message === d.F4 && (f && (e(t.clearConversation()), (0, u.ZY)(w)), (b && !o.pathname.startsWith("/i/grok/history")) || (location.href = "/i/grok")), n.detail.message === d.UD && E !== l.IK.REGULAR && p(l.IK.REGULAR, w), n.detail.message === d.J5 && E !== l.IK.FUN && p(l.IK.FUN, w), n.detail.message === d.oq && n.detail.modelId !== C && v(n.detail.modelId, n.detail.modelName, w);
                    }
                }, [b, w, f, t, e, p, v, g, n, E, C]);
            }
        },
        962379: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(952793),
                r = n(87063),
                a = n(125363),
                i = n(389071);
            function s() {
                const e = (0, a.v9)((e) => (0, i.uX)(e)),
                    t = (0, o.hC)("responsive_web_grok_use_new_layout"),
                    n = (0, a.v9)((e) => (0, i.Pt)(e)),
                    s = Boolean(e?.sections.find((e) => "WIDE_TEXT_CARD" === e.section_type));
                return { enabled: t, layout: e, loading: !n || "none" === n || n === r.Z.LOADING, isGrok3LayoutEnabled: s };
            }
        },
        752435: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(781472),
                r = n(202784),
                a = (n(585488), n(351743)),
                i = n.n(a),
                s = n(674132),
                c = n.n(s),
                l = n(125363),
                d = n(276001),
                u = n(601576);
            const m = o.Z,
                f = c().fc2a5c92;
            function h({ conversationId: e, metadata: t }) {
                const n = (0, l.I0)(),
                    [o] = i()(m);
                return r.useCallback(
                    (r, a) => {
                        e &&
                            t &&
                            o({
                                variables: { conversationId: e, rangeEnd: t.agentChatItemId, rangeStart: "0" },
                                onCompleted: ({ create_grok_share: e }) => {
                                    switch (e?.__typename) {
                                        case "GrokShareId": {
                                            const t = `https://x.com/i/grok/share/${e.share_id}`;
                                            n(d.Z.fetchCardPreview(t)), r(t);
                                            break;
                                        }
                                        case "GrokError":
                                            n((0, u.fz)({ text: e.error_code }));
                                            break;
                                        default:
                                            n((0, u.fz)({ text: f }));
                                    }
                                },
                                onError: () => {
                                    (0, u.fz)({ text: f }), a();
                                },
                            });
                    },
                    [o, e, t, n],
                );
            }
        },
        760345: (e, t, n) => {
            n.r(t), n.d(t, { default: () => H });
            var o = n(202784),
                r = n(856642),
                a = n(325686),
                i = n(107267),
                s = n(537392),
                c = n(392237),
                l = n(674132),
                d = n.n(l),
                u = n(323265),
                m = n(791632),
                f = n(252021),
                h = n(652904),
                g = n(292546),
                p = n(655352),
                v = n(15334),
                E = n(293115),
                C = n(246020),
                w = n(609013),
                b = n(830667),
                k = n(764512),
                y = n(579711),
                _ = n(988290),
                S = n(15038),
                Z = n(952793),
                P = n(725405),
                L = n(928831),
                x = n(620988),
                R = n(623494);
            function I({ children: e }) {
                const { isFileInputDisabled: t } = (0, L.w)(),
                    { onFileSelected: n } = (0, x.ZP)(),
                    r = (0, P.Z)(),
                    a = (0, Z.hC)("responsive_web_grok_file_upload_enabled"),
                    i = o.useCallback(
                        (e) => {
                            t || (e.forEach((e) => n(e)), (0, R.dP)(r, "dragDrop"));
                        },
                        [n, r, t],
                    );
                return a ? o.createElement(S.ZP, { activeStyle: T.activeDropzone, onFilesAdded: i, style: T.dropzone }, e) : e;
            }
            const T = c.default.create((e) => ({ dropzone: { width: "100%", height: "100%" }, activeDropzone: { borderWidth: e.borderWidths.none, outlineWidth: e.borderWidths.medium, outlineStyle: "dashed", outlineColor: e.colors.primary, outlineOffset: `-${e.spaces.space2}` } }));
            var F = n(807901),
                B = n(428880),
                A = n(654917),
                U = n(991985);
            const D = { page: u.ZP.isTwitterApp() ? (u.ZP.isAndroid() ? "grok_android" : "grok_ios") : "grok" },
                M = d().h5860a68;
            function W() {
                const [e] = (0, g.Z)(),
                    t = e.get("conversation") ?? void 0,
                    n = e.get("text") ?? "",
                    r = Boolean(e.get("deepsearch")) ?? !1,
                    a = Boolean(e.get("think")) ?? !1,
                    i = e.get("analysisEntityId") ?? void 0,
                    s = o.useMemo(() => ({ text: n, analysisEntityId: i, autoSubmit: !0, isDeepsearch: r, isReasoning: a }), [n, i, r, a]);
                return o.createElement(I, null, o.createElement(C.Z, { contentPadding: 208, conversationId: t, initialPrompt: s }));
            }
            function H() {
                (0, U.n)(!0);
                const e = (0, i.useHistory)(),
                    t = !(0, p.ZP)(),
                    { conversationId: n, mode: l, model: d } = (0, A.ZP)(),
                    g = (0, v.u)(),
                    { canClearConversation: C, handleBackClick: b, handleClearConversationClick: y, isEligible: S } = (0, F.Z)();
                !(function (e) {
                    const t = (0, i.useHistory)();
                    o.useEffect(() => {
                        if (!(0, m.HD)(t) || !e) return;
                        if (t.location.query.conversation) return;
                        const n = r.stringify({ ...t.location.query, conversation: e });
                        t.replace({ ...t.location, search: n });
                    }, [e, t]);
                })(n);
                const Z = (0, s.Zx)(({ containerWidth: e }) => e <= c.default.theme.breakpoints.xLarge),
                    P = C ? b : void 0,
                    L = o.useMemo(() => ({ subscription_level: g, grok_details: { grok_mode: l || "regular", grok_model: d, conversation_id: n ?? void 0 } }), [g, l, d, n]),
                    [R] = (0, B.ZP)();
                return o.createElement(E.nO, { data: L, namespace: D }, o.createElement(h.Z, null, o.createElement(x.ZH, null, o.createElement(_.BQ, { isCompactLayout: Z, isEditingEnabled: !0, isPagedScroll: !0, isShowButtons: !0, isShowCarousel: !0, scrollable: window }, u.ZP.isTwitterApp() ? o.createElement(W, null) : t ? o.createElement(f.Z, { centeredLogo: S ? O : void 0, documentTitle: M, history: e, onBackClick: P, primaryContent: K, primaryContentLabel: M, rightControl: G, sidebarContent: null, withBackButton: C }) : o.createElement(o.Fragment, null, o.createElement(f.Z, { documentTitle: M, headerless: R, history: e, isFullWidth: !0, middleControl: z, onTabRefresh: y, primaryContent: K, primaryContentLabel: M, sidebarContent: null, withBackButton: !1, withBorderLessLayout: R }), R && o.createElement(o.Fragment, null, o.createElement(w.T, null), o.createElement(a.Z, { style: { position: "fixed", start: 0, end: 0, paddingStart: c.default.theme.spaces.space16, paddingEnd: c.default.theme.spaces.space16 } }, o.createElement(k.q, null))))))));
            }
            const z = o.createElement(B.fc, null, o.createElement(k.q, null)),
                K = o.createElement(W, null),
                G = o.createElement(y.Z, { isVerbose: !1, withHistory: !0 }),
                O = o.createElement(b.V, null);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-6ac0f1a5.57b783aa.js.map
