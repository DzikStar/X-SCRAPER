"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"],
    {
        412876: (e, t, n) => {
            n.d(t, { Y: () => u, Z: () => d });
            var r = n(807896),
                a = n(164282),
                o = n(202784),
                i = (n(585488), n(277660)),
                c = n.n(i),
                s = n(823161);
            const l = a.Z,
                u = ({ user: e, ...t }) => {
                    const n = c()(l, e),
                        a = "Business" === n.verification?.verified_type || "Square" === n.profile_image_shape ? "square" : "circle";
                    return o.createElement(s.default, (0, r.Z)({}, t, { screenName: n.legacy?.screen_name, shape: a, uri: n.legacy?.profile_image_url_https }));
                },
                d = o.memo(u);
        },
        553660: (e, t, n) => {
            n.d(t, { Z: () => d, v: () => u });
            var r = n(807896),
                a = n(547666),
                o = n(202784),
                i = (n(585488), n(277660)),
                c = n.n(i),
                s = n(366635);
            const l = a.Z,
                u = ({ user: e, ...t }) => {
                    const { affiliates_highlighted_label: n, is_blue_verified: a, legacy: i, privacy: u, verification: d } = c()(l, e),
                        { badge: m, description: f, url: p, userLabelDisplayType: v, userLabelType: E } = n?.label || {},
                        h = { badge: m || void 0, description: f || "", url: p || void 0, userLabelType: E || void 0, userLabelDisplayType: v || void 0 };
                    return o.createElement(s.Z, (0, r.Z)({}, t, { affiliateBadgeInfo: h, isBlueVerified: a || !1, isProtected: u?.protected ?? !1, isVerified: d?.verified ?? !1, name: i?.name, screenName: i?.screen_name, verifiedType: d?.verified_type || "" }));
                },
                d = o.memo(u);
        },
        250265: (e, t, n) => {
            n.d(t, { MC: () => f, xG: () => d, yP: () => p });
            var r = n(202784),
                a = n(400752),
                o = n(565058),
                i = n(987809),
                c = n(325686),
                s = n(731708),
                l = n(790997),
                u = n(480599);
            function d() {
                const e = (0, a.Dv)(h),
                    t = (0, a.Dv)(g);
                return (0, a.Dv)(p) ? r.createElement(c.Z, null, r.createElement(s.ZP, null, "Total: ⇩", m(e), " · ⇧", m(t))) : null;
            }
            function m(e) {
                return `${e.toLocaleString(void 0, { notation: "compact", compactDisplay: "short" })}b/s`;
            }
            function f() {
                const e = (0, a.oR)(),
                    t = (0, a.Dv)(p),
                    n = (0, a.b9)(u.c);
                r.useEffect(() => {
                    if (!t) return;
                    const r = n();
                    return () => {
                        r(), e.set(u.n.reset);
                    };
                }, [n, e, t]);
            }
            const p = (0, o.cn)(!1),
                v = (0, i.xu)((e) => (0, o.cn)((t) => t((0, u.n)(e)).receivingBitrate)),
                E = (0, i.xu)((e) => (0, o.cn)((t) => t((0, u.n)(e)).sendingBitrate)),
                h = (0, o.cn)((e) => e(l.qx).reduce((t, n) => t + e(v(n)), 0)),
                g = (0, o.cn)((e) => e(l.qx).reduce((t, n) => t + e(E(n)), 0));
        },
        889538: (e, t, n) => {
            n.d(t, { i: () => v, u: () => f });
            var r = n(551394),
                a = n(202784),
                o = n(325686),
                i = (n(585488), n(731708)),
                c = n(638009),
                s = n(392237),
                l = n(335923),
                u = n(535338),
                d = n(412876),
                m = n(553660);
            function f({ message: e }) {
                const { text: t, timeSent: n, userId: r } = e,
                    s = (0, u.p)(v, { userId: r });
                if (!s.user.result) return null;
                const f = s.user.result;
                return a.createElement(o.Z, { style: E.container }, a.createElement(d.Y, { size: "xLarge", user: f }), a.createElement(o.Z, { style: E.messageContainer }, a.createElement(o.Z, { style: E.header }, a.createElement(m.v, { user: f, withScreenName: !1 }), a.createElement(i.ZP, { color: "gray500", size: "subtext2", style: E.time }, p(n))), a.createElement(c.zt, { isExternal: () => !0 }, a.createElement(l.Z, { markdownText: t }))));
            }
            const p = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "numeric", minute: "numeric" }),
                v = r.Z,
                E = s.default.create((e) => ({ container: { alignItems: "flex-start", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space4, gap: e.spaces.space8 }, messageContainer: { flex: 1 }, header: { justifyContent: "space-between", alignItems: "center", flexDirection: "row" }, time: { overflowWrap: "normal", flexShrink: 0 } }));
        },
        64634: (e, t, n) => {
            n.d(t, { h: () => p });
            var r = n(202784),
                a = n(400752),
                o = n(325686),
                i = n(731708),
                c = n(392237),
                s = n(736063),
                l = n(94751),
                u = n(535338),
                d = n(553660),
                m = n(889538),
                f = n(23425);
            function p() {
                const e = (0, a.Dv)(l.U9);
                return (0, a.Dv)(f.xK)
                    ? null
                    : r.createElement(
                          o.Z,
                          { style: h.notificationContainer },
                          e.map((e) => r.createElement(s.H, { errorConfig: v, key: e.id }, r.createElement(E, { notification: e }))),
                      );
            }
            const v = { context: "ConferenceChatNotification" };
            function E({ notification: e }) {
                const t = (0, u.p)(m.i, { userId: e.userId }).user.result,
                    n = (0, a.Dv)((0, l.ce)(e));
                return t ? r.createElement(o.Z, { style: n ? h.notificationItemFaded : h.notificationItem }, r.createElement(o.Z, null, r.createElement(d.v, { user: t, withScreenName: !1 })), r.createElement(i.ZP, { numberOfLines: 2, size: "subtext1" }, e.text)) : null;
            }
            const h = c.default.create((e) => {
                const t = { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.large, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical };
                return { notificationContainer: { position: "absolute", width: 300 * e.scaleMultiplier, end: e.spaces.space12, bottom: e.spaces.space12, gap: e.spaces.space8 }, notificationItem: t, notificationItemFaded: { ...t, opacity: 0, transition: "opacity 0.3s ease-in-out" } };
            });
        },
        502608: (e, t, n) => {
            n.d(t, { k: () => we });
            var r = n(202784),
                a = n(400752),
                o = n(214997),
                i = n(325686),
                c = n(844685),
                s = n(392237),
                l = n(869508),
                u = n(736063),
                d = n(581149),
                m = n(94751),
                f = n(125363),
                p = n(919022),
                v = n(396963),
                E = n(889538),
                h = n(371344),
                g = n(154003),
                b = n(332920),
                y = n.n(b),
                Z = n(131907);
            const x = y().e3275464,
                C = { label: x },
                w = r.createElement(Z.default, null);
            function S({ onSend: e }) {
                return r.createElement(g.ZP, { "aria-label": x, hoverLabel: C, icon: w, onPress: e, size: "medium", style: I.button, type: "primaryText" });
            }
            const I = s.default.create((e) => ({ button: { marginStart: e.spaces.space4 } }));
            var D = n(23425);
            const k = "Type a message...";
            function _({ onSend: e }) {
                const [t, n] = (0, a.KO)(m.Pm),
                    o = (0, a.b9)(D.hc),
                    i = r.useRef(null);
                r.useEffect(() => {
                    i.current && i.current.focus();
                }, []);
                return r.createElement(h.Z, {
                    leftAligned: !0,
                    maxNumberOfLines: 5,
                    multiline: !0,
                    numberOfLines: 1,
                    onChange: (e) => {
                        n(e.target.value);
                    },
                    onKeyDown: (t) => {
                        "Enter" !== t.key || t.shiftKey ? (("c" === t.key && t.ctrlKey && t.metaKey) || ("c" === t.key && t.ctrlKey && t.altKey)) && (o(), t.preventDefault()) : (e(), t.preventDefault());
                    },
                    placeholder: k,
                    ref: i,
                    rightContent: r.createElement(S, { onSend: e }),
                    style: R.input,
                    styleType: "pill",
                    value: t,
                });
            }
            const R = s.default.create((e) => ({ input: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space12 } }));
            function T() {
                const [e, t] = (0, a.KO)(m.qw),
                    [n, s] = (0, a.KO)(m.Pm),
                    h = (0, f.v9)(p.ZP.selectViewerUser),
                    g = (0, v.aQ)(),
                    b = r.useMemo(() => new d.Z(g), [g]),
                    y = r.useCallback(() => {
                        if (!n.trim()) return;
                        if (!h) return;
                        const e = (function (e, t, n, r) {
                            const a = n.createChatPayload(t, { roomId: e, participantIndex: 0 });
                            (0, l.lW)(JSON.stringify(a));
                            const o = JSON.parse(a.payload),
                                i = JSON.parse(o.body),
                                c = { id: i.uuid, text: i.body, timeSent: Date.now(), userId: r?.id_str };
                            return c;
                        })(g, n, b, h);
                        s(""), t((t) => [...t, e]);
                    }, [g, n, s, t, b, h]),
                    Z = r.useRef(null);
                return r.createElement(
                    i.Z,
                    { style: z.container },
                    r.createElement(c.Z, { text: "Chat" }),
                    r.createElement(
                        o.Z,
                        { onContentSizeChange: () => Z.current?.scrollToEnd({ animated: !1 }), ref: Z, style: z.messageContainer },
                        e.map((e) => r.createElement(u.H, { errorConfig: P, key: e.id }, r.createElement(E.u, { message: e }))),
                    ),
                    r.createElement(i.Z, { style: z.draftContainer }, r.createElement(_, { onSend: y })),
                );
            }
            const P = { context: "ConferenceChatSidebar" };
            const z = s.default.create((e) => ({ draftContainer: { flexDirection: "row", alignItems: "center", paddingHorizontal: e.componentDimensions.gutterHorizontal }, container: { height: "100%" }, messageContainer: { flex: 1, marginBottom: e.spaces.space12 } }));
            var L = n(565058),
                M = n(954110),
                O = n(42778);
            const H = "Noise suppression",
                A = "Settings";
            function B() {
                const e = (0, a.Dv)(O.wM),
                    t = (0, a.Dv)(O.Wj),
                    n = (0, a.b9)(N);
                return r.createElement(i.Z, null, r.createElement(c.Z, { text: A }), r.createElement(M.Z, { checked: t, disabled: !e, label: H, name: "suppression", onChange: n, type: "switch" }));
            }
            const N = (0, L.cn)(null, (e, t, n, r) => {
                t(O.bU, r);
            });
            var W = n(715601),
                V = n(595561),
                $ = n(136397),
                F = n(811176),
                j = n(149170),
                q = n(616894),
                K = n(275220),
                X = n(908599),
                G = n(53317),
                J = n(625555),
                U = n(4427),
                Y = n(847982),
                Q = n(509599),
                ee = n(114084);
            const te = "Invited";
            function ne() {
                const e = (0, a.Dv)(ue);
                return e?.length
                    ? r.createElement(
                          i.Z,
                          null,
                          r.createElement(c.Z, { text: te }),
                          e.map((e) => r.createElement(u.H, { errorConfig: re, key: e }, r.createElement(ae, { userId: e }))),
                      )
                    : null;
            }
            const re = { context: "CONFERENCE_ATTENDEE_LIST" };
            function ae({ userId: e }) {
                const t = (0, Y.$)(e),
                    n = r.useCallback((t) => r.createElement(le, { onClose: t, userId: e }), [e]);
                return t ? r.createElement(G.P, { renderAtom: de }, (e) => r.createElement(ee.H, { decoration: r.createElement(g.ZP, { "aria-label": ie, disabled: e, hoverLabel: ce, icon: oe, renderMenu: n, size: "medium", type: "primaryText" }), displayMode: "UserCompact", isDisabled: e, user: t, withLink: !1 })) : null;
            }
            const oe = r.createElement(j.default, null),
                ie = y().h16eeb42,
                ce = { label: ie },
                se = y().e68b09b4;
            function le({ onClose: e, userId: t }) {
                const n = (function (e) {
                    const t = (0, a.b9)(de);
                    return [
                        {
                            Icon: q.default,
                            text: se,
                            isEmphasized: !0,
                            onClick: () => {
                                t(e);
                            },
                        },
                    ];
                })(t);
                return r.createElement(F.Z, { items: n, onCloseRequested: e, shouldCloseOnClick: !0 });
            }
            const ue = (0, L.cn)((e) => {
                    const t = e(Q.Xn),
                        n = e(Q.F$),
                        r = e(K.o);
                    return t?.filter((e) => !n.has(e) && e !== r);
                }),
                de = (0, X.Y)((e, t, n) => {
                    const r = e(J.F6),
                        a = e(U.sB);
                    if (a)
                        return r
                            .getConference(a)
                            .then(({ attendees_twitter_user_ids: e }) => r.updateConference({ key: a, attendees_twitter_user_ids: e.filter((e) => e !== n) }))
                            .then(() => t(Q.jQ))
                            .catch(() => {});
                });
            var me = n(874088),
                fe = n(27951),
                pe = n(339110);
            const ve = y().ic3c757e,
                Ee = y().cd133486;
            function he() {
                const e = (0, a.b9)(ye),
                    t = (0, a.b9)(Ze);
                return r.createElement(i.Z, { style: ge.invite }, r.createElement(c.Z, { text: Ee }), r.createElement(me.default, { disableClearButton: !0, filter: be, getItemIsDisabled: t, isModal: !0, onItemClick: e, placeholder: ve, renderUserDecoration: fe.ib, shouldFocusOnClear: !0, source: pe._4.ConferencesInvite, withSectionDivider: !1 }));
            }
            const ge = s.default.create((e) => ({ invite: { height: 500 * e.scaleMultiplier } })),
                be = [pe.my.Users],
                ye = (0, L.cn)(null, (e, t, n, r) => {
                    const a = e(U.sB);
                    if (!a) return;
                    const o = e(J.F6);
                    o.getConference(a)
                        .then(({ attendees_twitter_user_ids: e }) => o.updateConference({ key: a, attendees_twitter_user_ids: e.includes(n.id) ? e : e.concat(n.id) }))
                        .then(() => t(Q.jQ));
                }),
                Ze = (0, L.cn)(null, (e, t, n, r) => {
                    const a = e(Q.Xn);
                    return a?.includes(n.id) ?? !1;
                });
            function xe() {
                return r.createElement(W.Z, { style: Ce.viewportView }, r.createElement(V.q, null), r.createElement($.TP, null), r.createElement(ne, null), r.createElement(he, null));
            }
            const Ce = s.default.create(() => ({ viewportView: { flexGrow: 1, flexShrink: 1, overflowX: "hidden", overflowY: "auto" } }));
            function we() {
                const e = (0, a.Dv)(D.SR);
                switch (e) {
                    case "Participants":
                        return r.createElement(xe, null);
                    case "Chat":
                        return r.createElement(T, null);
                    case "Settings":
                        return r.createElement(B, null);
                    default:
                        return null;
                }
            }
        },
        458884: (e, t, n) => {
            n.d(t, { L: () => b, C: () => y });
            var r = n(202784),
                a = n(400752),
                o = n(325686),
                i = n(392237),
                c = n(502608),
                s = n(807896),
                l = n(666305),
                u = n(757483),
                d = n(790997),
                m = n(60089),
                f = n(396963);
            function p() {
                const e = (0, a.Dv)(d.Mh),
                    t = r.useRef(null),
                    n = (0, a.Dv)(d.Dg);
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(v, { containerRef: t, type: "top" }),
                    r.createElement(
                        o.Z,
                        { ref: t, style: h.listview },
                        r.createElement(o.Z, { key: "viewerUser", style: h.videoContainer }, r.createElement(m.Ou, { isListSafe: !0 })),
                        n ? r.createElement(E, { feedId: n }) : null,
                        e.map((e) => r.createElement(E, { feedId: e, key: e })),
                    ),
                    r.createElement(v, { containerRef: t, type: "bottom" }),
                );
            }
            function v({ containerRef: e, type: t }) {
                const [n, i] = r.useState(!1),
                    c = (0, a.oR)();
                r.useEffect(() => {
                    const n = e.current;
                    if (!n) return;
                    let r;
                    const a = () => {
                        cancelAnimationFrame(r),
                            (r = requestAnimationFrame(() => {
                                if ("top" === t) {
                                    const e = n.scrollTop > 1;
                                    i(e);
                                } else if ("bottom" === t) {
                                    const e = Math.abs(n.scrollHeight - n.scrollTop - n.clientHeight) > 1;
                                    i(e);
                                }
                            }));
                    };
                    a(), n.addEventListener("scroll", a), l.Z.observe(n, a);
                    const o = c.sub(d.Mh, a);
                    return () => {
                        n.removeEventListener("scroll", a), l.Z.unobserve(n, a), o(), cancelAnimationFrame(r);
                    };
                }, [e, c, t]);
                const s = "top" === t ? (n ? h.fadeIn : h.fadeInOff) : "bottom" === t ? (n ? h.fadeOut : h.fadeOutOff) : void 0;
                return r.createElement(o.Z, { style: s });
            }
            function E(e) {
                const { feedId: t } = e,
                    n = (0, f.Ou)(t),
                    i = (0, f.CO)(t),
                    c = (0, a.Dv)((0, d.bq)(t));
                return r.createElement(o.Z, { style: h.videoContainer }, r.createElement(m.nA, (0, s.Z)({}, e, { isListSafe: !0, userAvatar: n, userName: i ?? c ?? t.toString() })));
            }
            const h = i.default.create((e) => {
                const t = u.Z.hexToCss(e.colors.navigationBackground, 0),
                    n = u.Z.hexToCss(e.colors.navigationBackground, 0.8),
                    r = { position: "absolute", start: 0, width: "100%", height: e.spaces.space64, pointerEvents: "none", zIndex: 1, transition: "opacity 0.3s" },
                    a = { ...r, top: 0, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to top, ${t}, ${n})` },
                    o = { ...r, bottom: 0, backgroundImage: e.highContrastEnabled ? void 0 : `linear-gradient(to bottom, ${t}, ${n})` },
                    i = { ...a, opacity: 0 },
                    c = { ...o, opacity: 0 };
                return { videoContainer: { maxWidth: "100%" }, listview: { overflowY: "auto", position: "absolute", inset: 0, gap: e.spaces.space8, padding: e.spaces.space8 }, fadeIn: a, fadeOut: o, fadeInOff: i, fadeOutOff: c };
            });
            var g = n(23425);
            function b() {
                return r.createElement(o.Z, { style: Z.listviewPlaceholder }, r.createElement(p, null));
            }
            function y() {
                return (0, a.Dv)(g.eX) ? null : r.createElement(o.Z, { style: Z.sidebar }, r.createElement(c.k, null));
            }
            const Z = i.default.create((e) => ({ sidebar: { width: 348 * e.scaleMultiplier }, listviewPlaceholder: { width: "20%", minWidth: 200 * e.scaleMultiplier } }));
        },
        23425: (e, t, n) => {
            n.d(t, { SR: () => i, T1: () => s, X6: () => p, XQ: () => u, eX: () => c, em: () => m, hc: () => d, xK: () => l, yu: () => f });
            var r = n(565058);
            const a = Object.freeze({ Speakers: "Speakers", Chat: "Chat", Settings: "Settings", Participants: "Participants" }),
                o = (0, r.cn)(a.Speakers),
                i = (0, r.cn)((e) => e(o)),
                c = (0, r.cn)((e) => e(o) === a.Speakers),
                s = (0, r.cn)((e) => !e(c)),
                l = (0, r.cn)((e) => e(o) === a.Chat),
                u = (0, r.cn)((e) => e(o) === a.Participants),
                d =
                    ((0, r.cn)((e) => e(o) === a.Settings),
                    (0, r.cn)(null, (e, t) => {
                        t(o, (e) => (e !== a.Chat ? a.Chat : a.Speakers));
                    })),
                m = (0, r.cn)(null, (e, t) => {
                    t(o, (e) => (e !== a.Participants ? a.Participants : a.Speakers));
                }),
                f = (0, r.cn)(null, (e, t) => {
                    t(o, (e) => (e !== a.Settings ? a.Settings : a.Speakers));
                }),
                p = (0, r.cn)(null, (e, t) => {
                    t(o, a.Speakers);
                });
        },
        441737: (e, t, n) => {
            n.d(t, { W: () => d, X: () => s });
            var r = n(807896),
                a = n(202784),
                o = n(325686),
                i = n(392237),
                c = n(666305);
            const s = a.memo(function ({ defaultAspectRatio: e, ...t }) {
                    const n = d.useContext(),
                        i = n?.value ?? e,
                        { ref: s, style: m } = (function (e) {
                            const t = a.useRef(null),
                                [n, r] = a.useState(!0);
                            a.useEffect(() => {
                                const e = t.current,
                                    n = e?.parentElement;
                                if (!e || !n) return;
                                const a = () => {
                                    const t = u(n),
                                        a = u(e);
                                    r(a >= t);
                                };
                                return (
                                    c.Z.observe(e, a),
                                    c.Z.observe(n, a),
                                    () => {
                                        c.Z.unobserve(e, a), c.Z.unobserve(n, a);
                                    }
                                );
                            }, [t]);
                            const o = a.useMemo(() => (n ? [l.widthConstrained, { aspectRatio: e }] : [l.heightConstrained, { aspectRatio: e }]), [e, n]);
                            return { ref: t, style: o };
                        })(i),
                        f = a.useMemo(() => [m, t.style], [m, t.style]);
                    return a.createElement(o.Z, (0, r.Z)({ ref: s }, t, { style: f }));
                }),
                l = i.default.create((e) => {
                    const t = { position: "absolute", inset: 0, margin: "auto" };
                    return { widthConstrained: { ...t, width: "100%", height: "auto" }, heightConstrained: { ...t, height: "100%", width: "auto" } };
                });
            function u(e) {
                const { height: t, width: n } = e.getBoundingClientRect();
                return n / t;
            }
            const d = (function (e) {
                const t = a.createContext(null);
                return {
                    Provider: a.memo(({ children: n }) => {
                        const [r, o] = a.useState(e);
                        return a.createElement(t.Provider, { value: { value: r, setValue: o } }, n);
                    }),
                    useContext: function () {
                        return a.useContext(t);
                    },
                };
            })(16 / 9);
        },
        977419: (e, t, n) => {
            n.d(t, { I0: () => k, _x: () => S, ww: () => I });
            var r = n(807896),
                a = n(202784),
                o = n(400752),
                i = n(565058),
                c = n(325686),
                s = n(708852),
                l = n(292627),
                u = n(392237),
                d = n(42134),
                m = n(447854),
                f = n(645708),
                p = n(790997),
                v = n(758614),
                E = n(253547),
                h = n(250265),
                g = n(458884),
                b = n(64634),
                y = n(441737),
                Z = n(75629),
                x = n(60089),
                C = n(826868),
                w = n(396963);
            function S() {
                (0, E.g)();
                const e = (0, o.Dv)(f.Lv),
                    t = (0, s.Ji)(),
                    n = (0, d.rx)();
                return a.createElement(c.Z, { style: T.focalView }, a.createElement(c.Z, { style: T.focalItem }, a.createElement(c.Z, { style: T.focalItem }, a.createElement(y.W.Provider, null, a.createElement(y.X, { defaultAspectRatio: 16 / 9, style: T.focalVideo }, a.createElement(c.Z, null, a.createElement(I, null)))), a.createElement(C.W, null), a.createElement(l.Z.Modal, null, a.createElement(Z.F, null))), a.createElement(D, null), n && a.createElement(m.Z, { audioSpaceId: n, height: 150 })), t && !e && a.createElement(g.L, null), t && !e && a.createElement(g.C, null), a.createElement(b.h, null), a.createElement(c.Z, { style: T.bottomStart }, a.createElement(h.xG, null)));
            }
            function I() {
                const e = (0, o.Dv)(R);
                return e ? a.createElement(x.nA, (0, r.Z)({ isFocal: !0 }, e)) : a.createElement(x.Ou, null);
            }
            function D() {
                return !(0, s.Ji)() && a.createElement(k, null);
            }
            function k() {
                return (0, o.Dv)(_) && a.createElement(c.Z, { style: T.hover }, a.createElement(x.Ou, { isListSafe: !0 }));
            }
            const _ = (0, i.cn)((e) => !!e(p.xZ).length && !!e(v.eN)?.length && !!e(R)),
                R = (0, i.cn)((e) => {
                    const t = e(p.Q6);
                    if (!t || e((0, p.Z8)(t))) return;
                    const n = e((0, p.f)(t)),
                        r = n ? (e(p.Dg) ?? t) : t;
                    return { feedId: n ? t : r, userName: e((0, w.Kz)(r)), userAvatar: e((0, w.pB)(r)) };
                }),
                T = u.default.create((e) => ({ focalView: { flexGrow: 1, flexShrink: 1, flexDirection: "row" }, focalVideo: { padding: e.spaces.space8 }, focalItem: { flexGrow: 1, flexShrink: 1 }, bottomStart: { bottom: e.spaces.space16, start: e.spaces.space16, position: "fixed" }, hover: { position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16, width: "25%", boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large } }));
        },
        75629: (e, t, n) => {
            n.d(t, { F: () => g });
            var r = n(202784),
                a = n(400752),
                o = n(565058),
                i = n(325686),
                c = n(731708),
                s = n(392237),
                l = n(585454),
                u = n(526250),
                d = n(625555),
                m = n(103978),
                f = n(790997),
                p = n(280859),
                v = n(509599),
                E = n(254810);
            const h = n.p + "ding.3588127a.mp3";
            function g() {
                const e = (0, a.Dv)(k),
                    t = (0, a.Dv)(D);
                return (0, u.N)(Z), (0, u.N)(x), r.createElement(i.Z, { style: b.animationBox }, r.createElement(i.Z, { style: e ? b.show : b.hide }, r.createElement(i.Z, { style: b.container }, r.createElement(c.ZP, null, t))));
            }
            const b = s.default.create((e) => {
                const t = { paddingBottom: e.spaces.space16, paddingStart: e.spaces.space16, transition: "transform 0.2s" };
                return { container: { backgroundColor: e.colors.gray50, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, borderRadius: e.borderRadii.infinite, pointerEvents: "auto" }, animationBox: { position: "fixed", bottom: 0, start: 0, contain: "paint", zIndex: 1, pointerEvents: "none" }, show: { ...t }, hide: { ...t, transform: "translateY(100%)" } };
            });
            const y = (0, o.cn)(new Set()),
                Z = (0, u.v)((e, t) => () => {
                    t(y, new Set());
                }),
                x = (0, l.h)(
                    () => v.RS,
                    (e, t, n, r) => {
                        const a = new Set(n.map((e) => e.guest_user_id));
                        a.add(e(d.t9));
                        const o = r.filter((e) => !a.has(e.guest_user_id));
                        o.length && t(C, o);
                    },
                ),
                C = (0, o.cn)(null, (e, t, n) => {
                    const r = e(w);
                    r
                        ? t(I, r.concat(n))
                        : (t(I, n),
                          setTimeout(() => {
                              t(I, void 0);
                          }, 5e3),
                          t(_)),
                        t(T);
                }),
                w = (0, o.cn)(),
                S = (0, o.cn)([]),
                I = (0, o.cn)(null, (e, t, n) => {
                    t(w, n), n && t(S, n);
                });
            const D = (0, o.cn)(
                    (e) =>
                        (function (e) {
                            if (!e) return "";
                            if (1 === e.length) return `${e[0].guest_display_name} has joined`;
                            if (e.length > 1) {
                                const t = (e.length - 1).toLocaleString();
                                return `${e[0].guest_display_name} + ${t} others has joined`;
                            }
                            return "";
                        })(e(S)) ?? "",
                ),
                k = (0, o.cn)((e) => !!e(w)),
                _ = (0, o.cn)(null, (e, t) => {
                    const n = e(v.qx);
                    (0, p.ql)({ title: n, body: e(D) });
                }),
                R = (0, o.cn)(),
                T = (0, o.cn)(null, (e, t) => {
                    const n = e(R)?.getTime();
                    if ((t(R, new Date()), n && Date.now() - n < 3e4)) return;
                    e(f.r1).some((t) => e((0, m.CS)(t))) || e(E.pL) || new Audio(h).play();
                });
        },
        60089: (e, t, n) => {
            n.d(t, { Ou: () => Ze, nA: () => ye });
            var r = n(807896),
                a = n(202784),
                o = n(251067),
                i = n(400752),
                c = n(325686),
                s = n(466792),
                l = n(393058),
                u = n(731708),
                d = n(392237),
                m = n(666305),
                f = n(58399),
                p = n(610214),
                v = n(513588),
                E = n(4427),
                h = n(790997),
                g = n(44952),
                b = n(758614),
                y = n(611702),
                Z = n(125363),
                x = n(919022),
                C = n(600150),
                w = n(565058),
                S = n(987809),
                I = n(516951),
                D = n(526250),
                k = n(103978);
            function _({ feedId: e }) {
                const t = a.useRef(null),
                    n = (0, i.b9)(T);
                return (
                    a.useEffect(() => {
                        const r = t.current;
                        if (r) return n(e, r);
                    }, [n, e]),
                    a.createElement(c.Z, { ref: t, style: P.border })
                );
            }
            const R = (0, S.xu)((e) =>
                    (0, w.cn)((t) => {
                        const n = t((0, k.CS)(e));
                        return n ? (n > 0.5 ? 0.75 : n > 0.25 ? 0.5 : 0.25) : n;
                    }),
                ),
                T = (0, D.v)((e, t, n, r) => {
                    const a = e(R(n));
                    if (a) {
                        const e = r.offsetWidth,
                            t = r.offsetHeight,
                            n = d.default.theme.spacesPx.space8,
                            o = 1 + (a * n) / e,
                            i = 1 + (a * n) / t;
                        r.style.transform = `scale(${o}, ${i})`;
                    } else r.style.transform = "scale(0.99)";
                    return (r.style.opacity = null == a ? "0" : ""), I.Z;
                }),
                P = d.default.create((e) => ({ border: { position: "absolute", pointerEvents: "none", inset: 0, borderRadius: e.borderRadii.large, borderWidth: e.spaces.space16, borderStyle: "solid", borderColor: e.colors.text, transform: "scale(0.99)", transition: "transform 0.2s", opacity: 0.4, zIndex: -1 } }));
            var z = n(492244),
                L = n(315951),
                M = n(968478),
                O = n(643442),
                H = n(952793),
                A = n(396963);
            function B(e) {
                const t = (0, i.Dv)(h.gu),
                    n = (0, i.Dv)(h.kw);
                if (!t) return null;
                const { feedId: o, videoTrack: c } = e;
                return o === n ? (c ? a.createElement(N, { videoTrack: c }) : null) : a.createElement(V, (0, r.Z)({}, e, { feedId: o }));
            }
            function N({ videoTrack: e }) {
                const t = (0, h.d4)(e);
                if (!e) return null;
                switch (t) {
                    case 2:
                    case 1:
                    case 0:
                        return a.createElement(W, { layers: t });
                    default:
                        return null;
                }
            }
            function W({ layers: e }) {
                switch (e) {
                    case 2:
                        return a.createElement(z.default, { title: "throttled" });
                    case 1:
                        return a.createElement(L.default, { title: "heavily throttled" });
                    case 0:
                        return a.createElement(M.default, { title: "not publishing" });
                    default:
                        return null;
                }
            }
            function V(e) {
                const { feedId: t, feedMid: n } = e,
                    r = (0, i.Dv)((0, g.A8)(t)(n)),
                    o = (0, i.Dv)((0, h.My)(t)(n));
                return r ? (o ? a.createElement($, null) : a.createElement(j, e)) : a.createElement(O.default, null);
            }
            function $() {
                const e = (0, i.Dv)(h.u1),
                    t = (0, i.Dv)(h.E3);
                if ((0, H.hC)("rweb_conf_dev_enabled")) return e.map((e, n) => a.createElement(F, { feedId: e, track: t?.[n] }));
            }
            function F({ feedId: e, track: t }) {
                const n = (0, i.Dv)(e ? (0, A.Kz)(e) : (0, v.J)("<unknown>"));
                return a.createElement(c.Z, { style: X.row }, a.createElement(u.ZP, null, n), t ? a.createElement(C.d, { track: t }) : a.createElement(u.ZP, null, "none"));
            }
            function j({ feedId: e, feedMid: t, videoTrack: n }) {
                const r = (0, i.b9)(K),
                    o = (0, i.Dv)(q(e)(t));
                return a.useEffect(() => r({ feedId: e, feedMid: t, videoTrack: n }), [r, e, n, t]), o ? a.createElement(M.default, { title: "no data received" }) : null;
            }
            const q = (0, S.xu)((e) => (0, S.xu)((e) => (0, w.cn)(!1))),
                K = (0, D.v)((e, t, { feedId: n, feedMid: r, videoTrack: a }) => {
                    if (!a) return I.Z;
                    const o = () => {
                        t(q(n)(r), a.muted);
                    };
                    return (
                        o(),
                        a.addEventListener("mute", o),
                        a.addEventListener("unmute", o),
                        () => {
                            a.removeEventListener("mute", o), a.removeEventListener("unmute", o);
                        }
                    );
                }),
                X = d.default.create((e) => ({ row: { flexDirection: "row" } }));
            var G = n(441737),
                J = n(359127),
                U = n(645708);
            function Y() {
                const e = (0, i.Dv)(U.Lv);
                return !J.zI || e ? null : a.createElement(Q, null);
            }
            function Q() {
                const { handlers: e, interactivityState: t } = (0, s.x)({});
                return a.createElement(c.Z, (0, r.Z)({ style: ee.hoverTile }, e), t.isHovered ? a.createElement(U.x0, null) : a.createElement(c.Z, { style: ee.placeholderButton }));
            }
            const ee = d.default.create((e) => ({ hoverTile: { padding: e.spaces.space16, borderRadius: e.borderRadii.infinite }, placeholderButton: { width: e.spaces.space32, height: e.spaces.space32 } }));
            var te = n(154003),
                ne = n(833057),
                re = n(492140);
            const ae = "Unpin",
                oe = { label: "Pin" },
                ie = { label: ae };
            function ce({ feedId: e }) {
                const t = (0, i.Dv)(se(e)),
                    n = (0, i.b9)(le(e));
                return a.createElement(te.ZP, { "aria-label": t ? ae : "Pin", hoverLabel: t ? ie : oe, icon: t ? de : ue, onClick: n, type: "primaryText" });
            }
            const se = (0, S.xu)((e) => (0, w.cn)((t) => t(h.B$) === e)),
                le = (0, S.xu)((e) =>
                    (0, w.cn)(null, (t, n, r) => {
                        n(h.B$, t(se(e)) ? void 0 : e);
                    }),
                ),
                ue = a.createElement(ne.default, null),
                de = a.createElement(re.default, null);
            var me = n(113788),
                fe = n(217220),
                pe = n(510465),
                ve = n(823161);
            const Ee = a.memo(({ containerRef: e, ...t }) => {
                const n = he(e);
                return a.createElement(ve.default, (0, r.Z)({ size: n }, t));
            });
            function he(e) {
                const [t, n] = a.useState("xxLarge");
                return (
                    a.useEffect(() => {
                        const t = e.current;
                        if (!t) return;
                        const r = () => {
                            const e = t.clientWidth;
                            n({ width: e / 5, height: e / 5 });
                        };
                        return (
                            r(),
                            m.Z.observe(t, r),
                            () => {
                                m.Z.unobserve(t, r);
                            }
                        );
                    }, [e]),
                    t
                );
            }
            function ge({ containerRef: e, feedId: t, rightVariant: n }) {
                const r = (0, i.Dv)((0, h.bq)(t)),
                    o = (0, me.Gf)(r),
                    s = (0, me.DP)(),
                    l = he(e),
                    u = "string" == typeof l ? void 0 : l,
                    m = (0, fe.Mg)(t);
                if (u)
                    return a.createElement(
                        c.Z,
                        { style: [n ? [be.rightReaction, { end: d.default.theme.spaces.space64 }] : be.centeredReaction, u] },
                        m ? a.createElement(pe.Z, { emoji: m, persistAfterAnimation: !0, size: u.width }) : null,
                        o?.map((e) => a.createElement(pe.Z, { emoji: e.emoji, key: e.id, onAnimationEnd: () => s(e), size: u.width })),
                    );
            }
            const be = d.default.create((e) => ({ centeredReaction: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }, rightReaction: { position: "absolute", top: e.spaces.space32, end: e.spaces.space32, pointerEvents: "none" } })),
                ye = a.memo((e) => {
                    const { feedId: t, isFocal: n, isListSafe: o, ...c } = e,
                        s = (0, i.Dv)(n ? (0, h.Cr)(t) : (0, h.Yq)(t));
                    if (0 === s.length) return a.createElement(Ce, (0, r.Z)({}, c, { feedId: t }));
                    if (o) return s.map(({ feedMid: e, track: n }) => a.createElement(xe, (0, r.Z)({}, c, { feedId: t, feedMid: e, key: e, mediaStreamTrack: n })));
                    {
                        const { feedMid: e, track: n } = s[0];
                        return a.createElement(xe, (0, r.Z)({}, c, { feedId: t, feedMid: e, mediaStreamTrack: n }));
                    }
                }),
                Ze = a.memo(({ isListSafe: e }) => {
                    const t = (0, i.Dv)(b.eN),
                        n = (0, Z.v9)(x.ZP.selectViewerUser),
                        r = (0, i.Dv)(h.kw);
                    if (!t?.length) return a.createElement(Ce, { feedId: r, userAvatar: n?.profile_image_url_https, userName: n?.name ?? "" });
                    if (e) return t.map(({ isMirror: e, track: t }, o) => a.createElement(Ce, { feedId: r, isMirror: e, key: o, mediaStreamTrack: t, userAvatar: n?.profile_image_url_https, userName: n?.name ?? "" }));
                    {
                        const { isMirror: e, track: o } = t[0];
                        return a.createElement(Ce, { feedId: r, isMirror: e, mediaStreamTrack: o, userAvatar: n?.profile_image_url_https, userName: n?.name ?? "" });
                    }
                });
            function xe(e) {
                const { feedId: t, feedMid: n, mediaStreamTrack: o, ...c } = e,
                    s = a.useRef(null);
                (0, y.Zn)(t, n, s);
                const l = a.useRef(null);
                (0, g.tF)(l, t, n);
                const u = (0, i.Dv)((0, h.Gz)(t)),
                    d = (0, i.Dv)(t ? (0, h.f)(t) : (0, v.J)(!1));
                return a.createElement(Ce, (0, r.Z)({}, c, { containerRef: l, feedId: t, feedMid: n, mediaStreamTrack: u ? o : void 0, videoRef: s, withHoverTile: d }));
            }
            function Ce({ containerRef: e, feedId: t, feedMid: n, isMirror: g, mediaStreamTrack: b, userAvatar: y, userName: Z, videoRef: x, withHoverTile: w }) {
                const S = a.useRef(null);
                a.useEffect(() => {
                    const e = S.current;
                    if (!e) return;
                    const t = new MediaStream();
                    b && t.addTrack(b), (e.srcObject = t);
                }, [b]);
                const I = a.useRef(null),
                    D = b,
                    k = (function (e, t) {
                        const [n, r] = a.useState(!1);
                        return (
                            a.useEffect(() => {
                                const n = e.current;
                                if (!n || t) return;
                                const a = () => {
                                    (8 === n.videoWidth && 8 === n.videoHeight) || (64 === n.videoWidth && 36 === n.videoHeight) ? r(!0) : r(!1);
                                };
                                return (
                                    a(),
                                    n.addEventListener("loadedmetadata", a),
                                    n.addEventListener("resize", a),
                                    () => {
                                        n.removeEventListener("loadedmetadata", a), n.removeEventListener("resize", a);
                                    }
                                );
                            }, [t, e]),
                            n
                        );
                    })(S, !D),
                    R = !D || k,
                    {
                        handlers: { ref: T, ...P },
                        interactivityState: z,
                    } = (0, s.x)(),
                    L = (0, i.Dv)(t ? (0, h.f)(t) : (0, v.J)(!1)),
                    M = (0, i.Dv)((0, h.Z8)(t));
                !(function (e, t, n) {
                    const r = G.W.useContext();
                    a.useEffect(() => {
                        const a = e.current,
                            o = t.current;
                        if (!a || !o || n) return void r?.setValue();
                        if (!r) return;
                        const i = () => {
                            a.videoHeight ? ((o.style.aspectRatio = "" + a.videoWidth / a.videoHeight), r?.setValue(a.videoWidth / a.videoHeight)) : ((o.style.aspectRatio = null), r?.setValue());
                        };
                        return (
                            i(),
                            a.addEventListener("loadedmetadata", i),
                            a.addEventListener("resize", i),
                            () => {
                                a.removeEventListener("loadedmetadata", i), a.removeEventListener("resize", i), (o.style.aspectRatio = null);
                            }
                        );
                    }, [r, t, n, e]);
                })(S, I, !D);
                const O = (0, i.Dv)(E.MG),
                    H = (function (e) {
                        const [t, n] = a.useState(!1);
                        return (
                            a.useEffect(() => {
                                const t = e.current;
                                if (!t) return;
                                const r = () => {
                                    const { width: e } = t.getBoundingClientRect();
                                    n(e > 100 * d.default.theme.scaleMultiplier);
                                };
                                return (
                                    r(),
                                    m.Z.observe(t, r),
                                    () => {
                                        m.Z.unobserve(t, r);
                                    }
                                );
                            }, [e]),
                            t
                        );
                    })(I),
                    A = (0, i.Dv)(p.bZ) && R;
                return a.createElement(
                    a.Fragment,
                    null,
                    O && a.createElement(_, { feedId: t }),
                    a.createElement(
                        c.Z,
                        (0, r.Z)({}, P, {
                            ref: (t) => {
                                (I.current = t), e && (e.current = t), (T.current = t);
                            },
                            style: A ? we.videoInnerContainerHidden : we.videoInnerContainer,
                        }),
                        a.createElement("video", {
                            autoPlay: !0,
                            muted: !0,
                            playsInline: !0,
                            ref: (e) => {
                                (S.current = e), x && (x.current = e);
                            },
                            style: { maxWidth: "100%", maxHeight: "100%", transform: g ? "scaleX(-1)" : void 0 },
                        }),
                        R ? a.createElement(c.Z, { style: we.videoOverlayCover }, a.createElement(Ee, { containerRef: S, uri: y }), !!t && a.createElement(ge, { containerRef: S, feedId: t })) : a.createElement(c.Z, { style: we.videoOverlay }, w ? a.createElement(Y, null) : null, !!t && a.createElement(ge, { containerRef: S, feedId: t, rightVariant: !0 })),
                        H && a.createElement(a.Fragment, null, a.createElement(c.Z, { style: we.overlayTopEnd }, a.createElement(C.X, { feedId: t }), !(0, o.fH)(o.vw.prod) && !R && t && n && a.createElement(B, { feedId: t, feedMid: n, videoTrack: D })), a.createElement(c.Z, { style: we.overlayTopStart }, !!t && !M && !L && (z.isHovered || l.Z.isTouchSupported()) && a.createElement(ce, { feedId: t })), a.createElement(c.Z, { style: we.overlayBottomStart }, a.createElement(c.Z, { style: we.nameRow }, L && a.createElement(f.default, null), a.createElement(u.ZP, null, Z)))),
                    ),
                );
            }
            const we = d.default.create((e) => {
                const t = { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" },
                    n = { ...t, backgroundColor: e.colors.gray50 },
                    r = { contain: "paint", justifyContent: "center", aspectRatio: "16/9", backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large, maxWidth: "100%" };
                return { videoInnerContainer: r, videoInnerContainerHidden: { ...r, height: 0 }, nameRow: { flexDirection: "row", alignItems: "center" }, overlayBottomStart: { position: "absolute", bottom: e.spaces.space8, start: e.spaces.space16, textShadow: `${e.colors.elevatedBackground} 1px 0 8px` }, overlayTopStart: { position: "absolute", top: e.spaces.space4, start: e.spaces.space4 }, overlayTopEnd: { position: "absolute", top: e.spaces.space4, end: e.spaces.space4 }, videoOverlay: t, videoOverlayCover: n };
            });
        },
        8336: (e, t, n) => {
            n.d(t, { $i: () => w, cO: () => k, yg: () => D });
            var r = n(202784),
                a = n(400752),
                o = n(565058),
                i = n(987809),
                c = n(154003),
                s = n(529356),
                l = n(332920),
                u = n.n(l),
                d = n(420182),
                m = n(42134),
                f = n(610214),
                p = n(625555),
                v = n(790997),
                E = n(712612),
                h = n(509599),
                g = n(601576),
                b = n(396963);
            const y = u().gea6cc1a,
                Z = u().hb568af4,
                x = { label: Z },
                C = (e) => `You will mute ${e}'s mic. They can unmute it again.`;
            function w({ feedId: e, icon: t }) {
                const [n, o] = r.useState(!1),
                    i = (0, a.b9)(I(e)),
                    l = (0, b.CO)(e);
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(c.ZP, { hoverLabel: x, icon: t, onPress: () => o(!0), type: "primaryText" }),
                    n &&
                        r.createElement(s.Z, {
                            actionLabel: Z,
                            enableMaskForDismiss: !0,
                            headline: y,
                            onAction: (e) => {
                                i(e), o(!1);
                            },
                            onClose: () => o(!1),
                            subtext: C(l),
                            withCloseButton: !0,
                        }),
                );
            }
            const S = (0, i.xu)((e) => (0, o.cn)((t) => t(h.cS).get(e)?.session_uuid)),
                I = (0, i.xu)((e) =>
                    (0, o.cn)(null, (t, n, r) => {
                        if (t((0, v.Z8)(e))) return void n(E.Dy, (e) => !e);
                        const a = t(S(e)),
                            o = t(m.rm);
                        o && a && n(p.Ht, o, a);
                    }),
                ),
                D = (0, o.cn)(null, (e, t, n, r) => {
                    const { dispatch: a } = e(d.qc),
                        o = e((0, v.Bz)(n)),
                        i = e((0, h.PO)(r));
                    if (!o || !i) return;
                    const c = e((0, b.Kz)(o));
                    if (e((0, v.Z8)(i))) return void a((0, g.fz)({ text: `${c} muted your microphone` }));
                    const s = e((0, b.Kz)(i));
                    a((0, g.fz)({ text: `${c} muted ${s}` }));
                }),
                k = (0, i.xu)((e) => (0, o.cn)((t) => !(t((0, v.Z8)(e)) || !e || t((0, v.f)(e)) || !t(f.gc) || !t(h.p5))));
        },
        826868: (e, t, n) => {
            n.d(t, { W: () => v });
            var r = n(202784),
                a = n(400752),
                o = n(565058),
                i = n(325686),
                c = n(731708),
                s = n(392237),
                l = n(459679),
                u = n(113788),
                d = n(625555),
                m = n(790997),
                f = n(217220),
                p = n(396963);
            function v() {
                const e = (0, a.Dv)(h),
                    t = (0, a.Dv)(E);
                return r.createElement(
                    i.Z,
                    { style: g.raisedHandsAbsolute },
                    t.map(({ emoji: e, id: t, userAvatar: n, userName: a }) => r.createElement(i.Z, { key: t, style: g.raisedHandPill }, r.createElement(c.ZP, { color: "buttonWhite", size: "headline1" }, e, " ", a))),
                    e.map(({ emoji: e, id: t, userAvatar: n, userName: a }) => r.createElement(i.Z, { key: t, style: g.raisedHandPill }, r.createElement(c.ZP, { color: "buttonWhite", size: "headline1" }, e, " ", a))),
                );
            }
            const E = (0, o.cn)((e) => {
                    const t = e(d.t9);
                    return (0, l.Z)(e(u.bz), (n) => {
                        if (n.participantId === t) return;
                        const r = e(m.r1),
                            a = e((0, m.De)(n.participantId)),
                            o = e((0, p.Kz)(a)),
                            i = e((0, p.pB)(a));
                        return o && i && r.includes(a) ? { id: n.id, emoji: n.emoji, userName: o, userAvatar: i } : void 0;
                    }).reverse();
                }),
                h = (0, o.cn)((e) => {
                    const t = e(f.lW);
                    return (0, l.Z)(t, (t) => {
                        const n = e((0, f.HV)(t)),
                            r = e(m.r1),
                            a = e((0, p.Kz)(t)),
                            o = e((0, p.pB)(t));
                        if (n && a && o && r.includes(t)) return { id: t, emoji: n, userName: a, userAvatar: o };
                    });
                }),
                g = s.default.create((e) => ({ raisedHandPill: { borderRadius: e.borderRadii.infinite, borderColor: e.colors.borderColor, borderStyle: "solid", borderWidth: e.borderWidths.small, backgroundColor: e.colors.buttonBlack, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, color: e.colors.buttonWhite }, raisedHandsAbsolute: { position: "absolute", bottom: 0, end: 0, padding: e.spaces.space8, gap: e.spaces.space8 } }));
        },
        970197: (e, t, n) => {
            n.d(t, { Z: () => h, n: () => g });
            var r = n(202784),
                a = n(400752),
                o = n(565058),
                i = n(325686),
                c = n(154003),
                s = n(811176),
                l = n(392237),
                u = n(899667),
                d = n(420182),
                m = n(934871),
                f = n(254810);
            function p({ itemsAtom: e }) {
                function t({ children: t }) {
                    return (0, a.Dv)(e).length < 2 ? t : r.createElement(i.Z, { style: b.row }, t, r.createElement(c.ZP, { icon: r.createElement(u.default, null), renderMenu: n, style: b.button, type: "primaryText" }));
                }
                function n(e) {
                    return r.createElement(o, { dismiss: e });
                }
                function o({ dismiss: t }) {
                    const n = (0, a.Dv)(e);
                    return r.createElement(s.Z, { items: n, onCloseRequested: t, preferredHorizontalOrientation: "right" });
                }
                return function ({ children: e }) {
                    return r.createElement(r.Suspense, { fallback: e }, r.createElement(t, { children: e }));
                };
            }
            const v = (0, o.cn)((e) => {
                    const t = e(m.fx);
                    return e(m.cf).then((n) =>
                        n.map((n) => ({
                            text: n.label,
                            isSelected: t?.deviceId === n.deviceId,
                            selectable: !0,
                            onClick: (t) => {
                                e(d.zE).set(m.HO, n), t();
                            },
                        })),
                    );
                }),
                E = (0, o.cn)((e) => {
                    const t = e(f.fx);
                    return e(f.vl).then((n) =>
                        n.map((n) => ({
                            text: n.label,
                            isSelected: t?.deviceId === n.deviceId,
                            selectable: !0,
                            onClick: (t) => {
                                e(d.zE).set(f.Ao, n), t();
                            },
                        })),
                    );
                }),
                h = p({ itemsAtom: v }),
                g = p({ itemsAtom: E }),
                b = l.default.create((e) => ({ row: { flexDirection: "row" }, button: { marginStart: -e.spacesPx.space24, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space4, zIndex: -1, borderTopStartRadius: 0, borderBottomStartRadius: 0 } }));
        },
        253547: (e, t, n) => {
            n.d(t, { f: () => i, g: () => o });
            var r = n(202784),
                a = n(400752);
            function o() {
                const e = (0, a.b9)(i);
                r.useEffect(
                    () => (
                        e(!0),
                        () => {
                            e(!1);
                        }
                    ),
                    [e],
                );
            }
            const i = (0, n(565058).cn)(!1);
        },
        396963: (e, t, n) => {
            n.d(t, { CO: () => w, Kz: () => b, L1: () => E, Ou: () => C, aQ: () => v, nY: () => p, pB: () => g });
            var r = n(614983),
                a = n.n(r),
                o = n(565058),
                i = n(400752),
                c = n(987809),
                s = n(107267),
                l = n(42134),
                u = n(610214),
                d = n(4427),
                m = n(790997),
                f = n(509599);
            function p() {
                const e = (0, s.useParams)().broadcastId;
                return a()(e, "expected a conferenceId"), e;
            }
            function v() {
                const e = p();
                return (0, d.pv)(e);
            }
            const E = "dummy_periscope_user_id",
                h = (0, c.xu)((e) =>
                    (0, o.cn)((t) => {
                        const n = t(f.cS).get(e);
                        if (n) return n;
                        const r = t((0, m.bq)(e));
                        return r ? t(f.FG).get(r) : void 0;
                    }),
                ),
                g = (0, c.xu)((e) => (0, o.cn)((t) => t(h(e))?.guest_avatar_url ?? (t(u.gc) ? void 0 : t(x(e))))),
                b = (0, c.xu)((e) => (0, o.cn)((t) => t(h(e))?.guest_display_name ?? (t(u.gc) ? void 0 : t(Z(e))) ?? t((0, m.bq)(e)) ?? e.toString())),
                y = (0, c.xu)((e) =>
                    (0, o.cn)((t) => {
                        const n = t(l.rm);
                        if (!n) return;
                        const r = t((0, m.bq)(e)),
                            a = t((0, f.tq)(n).resolved)?.host,
                            o = a?.periscope_user_id;
                        return r && o ? a : void 0;
                    }),
                ),
                Z = (0, c.xu)((e) => (0, o.cn)((t) => t(y(e))?.display_name)),
                x = (0, c.xu)((e) => (0, o.cn)((t) => t(y(e))?.avatar_url));
            function C(e) {
                return (0, i.Dv)(g(e));
            }
            function w(e) {
                return (0, i.Dv)(b(e));
            }
            (0, o.cn)((e) => {
                const t = e(m.Dg);
                if (t) return e(g(t));
            }),
                (0, o.cn)((e) => {
                    const t = e(m.Dg);
                    if (t) return e(b(t));
                });
        },
        811233: (e, t, n) => {
            n.d(t, { J2: () => v, P: () => f, gt: () => l, je: () => p, o3: () => m });
            var r = n(202784),
                a = n(565058),
                o = n(400752),
                i = n(987809),
                c = n(107267),
                s = n(516951);
            function l() {
                return u((0, c.useLocation)());
            }
            function u(e) {
                return e.pathname.startsWith("/i/conferences-room");
            }
            const d = (0, a.cn)(!1),
                m = d,
                f = (0, a.cn)((e) => (e(d) ? "/i/conferences-room" : "/i/conferences")),
                p = (0, i.xu)((e) => (0, a.cn)((t) => (t(d) ? `/i/conferences-room/${e}` : `/i/conferences/${e}`)));
            function v() {
                const e = l(),
                    t = (0, o.b9)(d),
                    n = (0, c.useHistory)();
                r.useLayoutEffect(
                    () =>
                        e
                            ? (t(!0),
                              () => {
                                  u(n.location) || t(!1);
                              })
                            : s.Z,
                    [n, e, t],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf.a3dbd95a.js.map
