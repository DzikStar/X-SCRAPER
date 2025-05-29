"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-8093ae25"],
    {
        115307: (e, t, n) => {
            n.d(t, { q: () => a, u: () => o });
            var r = n(202784),
                l = n(878931);
            function a() {
                !(function () {
                    const e = (0, l.N)();
                    r.useEffect(() => {
                        let t;
                        function n() {
                            const r = 60 - new Date().getSeconds();
                            t = setTimeout(() => {
                                e(), n();
                            }, 1e3 * r);
                        }
                        return (
                            n(),
                            () => {
                                clearTimeout(t);
                            }
                        );
                    }, [e]);
                })();
                return new Date().toLocaleTimeString(void 0, { hour: "numeric", minute: "numeric" });
            }
            function o() {
                !(function () {
                    const e = (0, l.N)();
                    r.useEffect(() => {
                        let t;
                        function n() {
                            t = setTimeout(
                                () => {
                                    e(), n();
                                },
                                (function () {
                                    const e = new Date(),
                                        t = new Date(e);
                                    return t.setDate(t.getDate() + 1), t.setHours(0, 0, 0, 0), t.getTime() - e.getTime();
                                })(),
                            );
                        }
                        return (
                            n(),
                            () => {
                                clearTimeout(t);
                            }
                        );
                    }, [e]);
                })();
                return new Date().toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" });
            }
        },
        124205: (e, t, n) => {
            n.r(t), n.d(t, { default: () => er });
            var r = n(807896),
                l = n(202784),
                a = n(400752),
                o = n(565058),
                c = n(987809),
                i = n(325686),
                s = n(107267),
                u = n(731708),
                m = n(776342),
                d = n(167630),
                f = n(366635),
                p = n(642153),
                E = n(182714),
                g = n(154003),
                h = n(811176),
                b = n(392237),
                v = n(487552),
                Z = n(459679),
                y = n(420182),
                x = n(600291),
                C = n(381904),
                w = n(447735),
                D = n(135328),
                P = n(49998),
                k = n(126420),
                S = n(53317),
                I = n(582129),
                R = n(136397),
                H = n(139613),
                M = n(41931),
                z = n(4427),
                _ = n(790997),
                L = n(758614),
                F = n(712612),
                B = n(895229),
                W = n(509599),
                j = n(409953),
                $ = n(520197),
                T = n(309487),
                Q = n(934871),
                O = n(565235),
                A = n(251067),
                V = n(340905);
            function Y() {
                if (!(0, A.fH)(A.vw.prod)) return l.createElement(g.ZP, { icon: G, link: "https://twitter.enterprise.slack.com/archives/C07SWM2DKKL" }, "Feedback");
            }
            const G = l.createElement(V.default, null);
            var J = n(901832),
                N = n(801351),
                K = n(396963);
            function U() {
                return (0, a.Dv)(N.s) ? l.createElement(J.Vs, null) : null;
            }
            function q() {
                const e = (0, K.nY)();
                return (0, a.Dv)(X) ? l.createElement(g.ZP, { link: `/i/conferences/${e}/recordings` }, "View recordings") : null;
            }
            const X = (0, o.cn)((e) => (e(W.jQ), e(W.jQ.resolved)?.recording_urls));
            var ee = n(441737),
                te = n(292627),
                ne = n(708852),
                re = n(537392),
                le = n(138099),
                ae = n(530732),
                oe = n(813751),
                ce = n(715601),
                ie = n(42134),
                se = n(869508),
                ue = n(106006),
                me = n(595561),
                de = n(645903),
                fe = n(947433),
                pe = n(562041),
                Ee = n(359127),
                ge = n(526250),
                he = n(645708),
                be = n(251836),
                ve = n(811233),
                Ze = n(250265),
                ye = n(310088),
                xe = n(194661),
                Ce = n(98440),
                we = n(323265),
                De = n(933794),
                Pe = n(94751),
                ke = n(23425);
            const Se = we.ZP.isMac() ? " (⌘+ctrl+c)" : we.ZP.isDesktopOS() ? " (ctrl+alt+c)" : "",
                Ie = { label: `Chat${Se}` },
                Re = l.createElement(xe.default, null),
                He = l.createElement(Ce.default, null),
                Me = l.createElement(ze, null);
            function ze() {
                const e = (0, a.Dv)(ke.xK),
                    t = (0, a.Dv)(Pe.Fz);
                return l.createElement(i.Z, null, e ? He : Re, t && !e && l.createElement(ye.Z, { pip: !0, style: Le.badge, unreadCountLabel: () => "" }));
            }
            function _e() {
                const e = (0, a.Dv)(ke.xK),
                    t = (0, a.b9)(ke.hc),
                    n = () => {
                        t();
                    },
                    r = {
                        "mod+ctrl+c": () => {
                            n();
                        },
                        "ctrl+alt+c": () => {
                            n();
                        },
                    },
                    o = l.createElement(g.ZP, { "aria-label": "Chat", borderColor: "transparent", color: "text", hoverLabel: Ie, icon: Me, onPress: n, size: "large", type: e ? "primaryFilled" : "primaryOutlined" });
                return l.createElement(De.Z, { children: o, handlers: r });
            }
            const Le = b.default.create((e) => ({ badge: { end: -e.spacesPx.space2 } }));
            var Fe = n(502608),
                Be = n(297896);
            const We = "Leave conference",
                je = { label: We, preferredVerticalOrientation: "up" },
                $e = l.createElement(Be.default, null);
            function Te({ children: e }) {
                const t = (0, I.zr)(),
                    n = (0, K.aQ)(),
                    r = l.useCallback(() => {
                        t(n);
                    }, [t, n]);
                return l.createElement(g.ZP, { "aria-label": We, children: e, hoverLabel: je, icon: $e, onPress: r, size: "large", type: "destructiveFilled" });
            }
            var Qe = n(977419),
                Oe = n(588441),
                Ae = n(447854),
                Ve = n(536387),
                Ye = (n(136728), n(476984)),
                Ge = n.n(Ye);
            function Je(e) {
                const t = (0, a.Dv)(Ke);
                return (n) => {
                    n ? t.set(e, n) : t.delete(e);
                };
            }
            function Ne(e) {
                const t = (0, a.b9)(qe),
                    n = (0, a.b9)(Xe);
                return (
                    et(() => {
                        t();
                    }, [n, e]),
                    l.useLayoutEffect(() => {
                        n();
                    }, [n, e]),
                    e
                );
            }
            const Ke = (0, o.cn)(() => new Map()),
                Ue = (0, o.cn)(),
                qe = (0, o.cn)(null, (e, t) => {
                    if (e(Ue)) return;
                    const n = e(Ke),
                        r = [],
                        l = new Map();
                    for (const [e, t] of n.entries()) document.body.contains(t) ? (l.set(e, t.getBoundingClientRect()), t.getAnimations().forEach((e) => e.cancel())) : r.push(e);
                    r.forEach((e) => n.delete(e)), t(Ue, l);
                }),
                Xe = (0, o.cn)(null, (e, t) => {
                    const n = e(Ke),
                        r = e(Ue);
                    if (r) {
                        for (const [e, t] of r.entries()) {
                            const r = n.get(e);
                            if (!r) continue;
                            const l = r.getBoundingClientRect(),
                                a = t.left - l.left,
                                o = t.top - l.top,
                                c = t.width / l.width,
                                i = t.height / l.height;
                            r.animate([{ transform: `translate(${a}px, ${o}px) scale(${c}, ${i})`, easing: "ease" }, { transform: "" }], { duration: 300 });
                        }
                        t(Ue, void 0);
                    }
                });
            function et(e, t) {
                const n = l.useRef(t);
                Ge()(n.current, t) || e(), (n.current = t);
            }
            var tt = n(458884),
                nt = n(64634),
                rt = n(34540),
                lt = n.n(rt),
                at = n(822240);
            function ot({ h: e, n: t, w: n, ...r }) {
                const { nc: l } = r;
                return Math.min(n / l, ((e / Math.ceil(t / l)) * 16) / 9);
            }
            var ct = n(75629),
                it = n(60089),
                st = n(826868);
            function ut() {
                const e = (0, ie.rx)(),
                    t = (0, ne.Ji)(),
                    n = (0, a.Dv)(he.Lv);
                return l.createElement(i.Z, { style: gt.row }, l.createElement(i.Z, { style: gt.flex }, l.createElement(Oe.Z, { style: gt.videosContainer }, l.createElement(mt, null)), e && l.createElement(Ae.Z, { audioSpaceId: e, height: 150 }), l.createElement(st.W, null)), l.createElement(te.Z.Modal, null, l.createElement(ct.F, null)), t && !n && l.createElement(tt.C, null), l.createElement(nt.h, null), l.createElement(i.Z, { style: gt.bottomStart }, l.createElement(Ze.xG, null)));
            }
            function mt() {
                const e = (0, a.Dv)(_.r1),
                    t = e.length + 1,
                    n = Ne(
                        (0, re.Zx)(({ containerHeight: e, containerWidth: n }) =>
                            (function ({ h: e, n: t, w: n }) {
                                return Math.max(Math.min(t, Math.floor(n / 160) * Math.floor(e / 90)), 1);
                            })({ n: t, w: n, h: e }),
                        ),
                    ),
                    r = (0, a.Dv)((0, _.l5)(n)),
                    o = Ne(
                        (0, re.Zx)(({ containerHeight: e, containerWidth: t }) =>
                            (function ({ h: e, n: t, w: n }) {
                                if (2 === t) return 1;
                                const r = Math.ceil(Math.sqrt(t)),
                                    l = n / e,
                                    a = 16 / 9;
                                if (l > a) {
                                    const l = lt()(
                                        (0, at.Z)(1, r + 1).map((r) => ({ count: r, value: ot({ n: t, w: n, h: e, nc: Math.ceil(t / r) }) })),
                                        ({ value: e }) => e,
                                    )?.count;
                                    return l ? Math.ceil(t / l) : r;
                                }
                                return l < a
                                    ? (lt()(
                                          (0, at.Z)(1, r + 1).map((r) => ({ count: r, value: ot({ n: t, w: n, h: e, nc: r }) })),
                                          ({ value: e }) => e,
                                      )?.count ?? r)
                                    : r;
                            })({ n, w: t, h: e }),
                        ),
                    ),
                    c = 1 === r.length ? 1 : r.length + 1,
                    s = Math.ceil(c / o),
                    u = { gridTemplateColumns: `repeat(${o}, 1fr)`, aspectRatio: `${16 * o} / ${9 * s}` },
                    m = (0, re.Zx)(({ containerHeight: e, containerWidth: t }) => ((16 * o) / (9 * s) >= t / e ? gt.fullWidth : gt.fullHeight));
                return l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                        i.Z,
                        { style: [gt.videos, u, m] },
                        r.map((e) => l.createElement(Et, { feedId: e, key: e })),
                        n > 2 && n !== t && l.createElement(dt, { allFeeds: e, feedIds: r }),
                        1 !== r.length && l.createElement(pt, null),
                    ),
                    1 === r.length && l.createElement(pt, null),
                );
            }
            function dt(e) {
                const { avatarUrls: t, count: n } = (function ({ allFeeds: e, feedIds: t }) {
                    const n = new Set(t),
                        r = e.filter((e) => !n.has(e)),
                        l = (0, Ve.xO)(),
                        a = (0, Z.Z)(r, (e) => l.get((0, K.pB)(e)));
                    return { avatarUrls: a, count: r.length };
                })(e);
                return l.createElement(i.Z, { style: gt.overflowContainer }, l.createElement(p.Z, { userAvatarUrls: t }), l.createElement(u.ZP, null, "+", n, " others"));
            }
            const ft = (0, o.cn)((e) => 1 === e(_.r1).length);
            function pt() {
                const e = (0, a.Dv)(ft),
                    t = Je();
                return l.createElement(i.Z, { ref: t, style: e ? gt.hover : gt.videoContainer }, l.createElement(it.Ou, { isListSafe: e }));
            }
            function Et({ feedId: e }) {
                const t = (0, K.Ou)(e),
                    n = (0, K.CO)(e),
                    r = Je(e);
                return l.createElement(i.Z, { ref: r, style: gt.videoContainer }, l.createElement(it.nA, { feedId: e, userAvatar: t, userName: n }));
            }
            const gt = b.default.create((e) => ({ videoContainer: { aspectRatio: "16 / 9", maxWidth: "100%" }, overflowContainer: { contain: "paint", justifyContent: "center", alignItems: "center", aspectRatio: "16/9", backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large, maxWidth: "100%" }, flex: { flexGrow: 1, flexShrink: 1 }, videosContainer: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, videos: { flexShrink: 1, display: "grid", margin: "auto", rowGap: e.spaces.space8, columnGap: 4.5 * e.scaleMultiplier, paddingHorizontal: e.spaces.space8, paddingVertical: 4.5 * e.scaleMultiplier }, hover: { position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16, width: "25%", boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large }, bottomStart: { bottom: e.spaces.space16, start: e.spaces.space16, position: "fixed" }, row: { flexDirection: "row", flexGrow: 1, flexShrink: 1 }, fullWidth: { width: "100%" }, fullHeight: { height: "100%" } }));
            var ht = n(529356),
                bt = n(47086),
                vt = n(254810);
            function Zt({ children: e }) {
                const t = (0, vt.LK)(),
                    n = (0, a.Dv)(vt.vl.resolved),
                    r = (0, a.Dv)(vt.jq);
                return t ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Vt.badgeContainer }, l.createElement(kt, null))) : n && !n.length ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Vt.badgeContainer }, l.createElement(Ht, null))) : r ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Vt.badgeContainer }, l.createElement(Lt, null))) : e;
            }
            function yt(e) {
                const { interstitialHeadline: t, interstitialSubtext: n, label: r } = e,
                    a = l.useMemo(() => ({ label: r, preferredVerticalOrientation: "up" }), [r]),
                    [o, c] = l.useState(!1);
                return l.createElement(l.Fragment, null, l.createElement(g.ZP, { "aria-label": r, hoverLabel: a, icon: Yt, onPress: () => c(!0), style: Vt.badge, type: "primaryText" }), o && l.createElement(ht.Z, { actionLabel: Ct, enableMaskForDismiss: !0, headline: t, onAction: () => c(!1), onClose: () => c(!1), subtext: n }));
            }
            const xt = "Permission denied",
                Ct = "Dismiss",
                wt = "Your microphone permission is denied.",
                Dt = "Please enable your microphone in your browser settings",
                Pt = "Please enable your microphone in your browser settings. This can be found by clicking the control button to the left of the address bar.";
            function kt() {
                return l.createElement(yt, { interstitialHeadline: wt, interstitialSubtext: we.ZP.isChrome() ? Pt : Dt, label: xt });
            }
            const St = "No microphone found",
                It = "You don't have a microphone connected.",
                Rt = "Please connect a microphone to your device speak in this conference.";
            function Ht() {
                return l.createElement(yt, { interstitialHeadline: It, interstitialSubtext: Rt, label: St });
            }
            const Mt = "No microphone audio detected",
                zt = "No microphone audio detected.",
                _t = "Please check if your microphone or your system audio is not muted or switch to a different microphone.";
            function Lt() {
                return l.createElement(yt, { interstitialHeadline: zt, interstitialSubtext: _t, label: Mt });
            }
            function Ft({ children: e }) {
                const t = (0, Q.rW)(),
                    n = (0, a.Dv)(Q.cf.resolved);
                return t ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Vt.badgeContainer }, l.createElement($t, null))) : n && !n.length ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Vt.badgeContainer }, l.createElement(At, null))) : e;
            }
            const Bt = "Your camera permission is denied.",
                Wt = "Please enable your camera in your browser settings",
                jt = "Please enable your camera in your browser settings. This can be found by clicking the control button to the left of the address bar.";
            function $t() {
                return l.createElement(yt, { interstitialHeadline: Bt, interstitialSubtext: we.ZP.isChrome() ? jt : Wt, label: xt });
            }
            const Tt = "No camera found",
                Qt = "You don't have a camera connected",
                Ot = "Please connect a camera to your device show present in this conference";
            function At() {
                return l.createElement(yt, { interstitialHeadline: Qt, interstitialSubtext: Ot, label: Tt });
            }
            const Vt = b.default.create((e) => ({ badgeContainer: { pointerEvents: "none", position: "absolute", inset: 0, transform: "rotate(45deg) translateY(-50%) rotate(-45deg)", alignItems: "center", justifyContent: "center" }, badge: { pointerEvents: "auto" }, badgeIcon: { color: e.colors.yellow500, backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.infinite }, chromeHelp: { position: "fixed", top: 0, start: 0, padding: e.spaces.space16, backgroundColor: e.colors.unreadCellBackground, borderRadius: e.borderRadii.medium } })),
                Yt = l.createElement(bt.default, { style: Vt.badgeIcon });
            var Gt = n(149170),
                Jt = n(684869),
                Nt = n(503195),
                Kt = n(430895),
                Ut = n(941563),
                qt = n(136483),
                Xt = n(72591),
                en = n(413522),
                tn = n(521799),
                nn = n(910245),
                rn = n(835515),
                ln = n(280859),
                an = n(122411);
            const on = { label: "More" },
                cn = l.createElement(Gt.default, null);
            function sn() {
                return (0, ln.Nt)(), l.createElement(i.Z, null, l.createElement(g.ZP, { hoverLabel: on, icon: cn, renderMenu: un, size: "large" }));
            }
            const un = (e) => l.createElement(mn, { onClose: e });
            function mn({ onClose: e }) {
                const t = [dn(), (0, fe.c)(), fn(), pn(), En(), gn(), hn(), ...bn()].filter(Boolean);
                return l.createElement(h.Z, { items: t, onCloseRequested: e, preferredHorizontalOrientation: "right", shouldCloseOnClick: !0 });
            }
            function dn() {
                return (0, ln.Nt)()
                    ? {
                          Icon: Jt.default,
                          text: "Enable push notifications",
                          onClick: () => {
                              (0, ln.ZK)();
                          },
                      }
                    : void 0;
            }
            function fn() {
                const e = (0, K.aQ)(),
                    t = (0, nn.q)({ audioSpaceId: e });
                return { Icon: t.Icon, text: t.label, onClick: t.onPress };
            }
            function pn() {
                const e = (0, ne.Ji)(),
                    t = (0, a.b9)(ke.em);
                if (!e) return { Icon: Kt.default, text: "Participants", onClick: t };
            }
            function En() {
                const e = (0, ne.Ji)(),
                    t = (0, a.b9)(ke.hc);
                if (!e) return { Icon: xe.default, text: "Chat", onClick: () => t() };
            }
            function gn() {
                const e = (0, a.b9)(ke.yu);
                return { Icon: Ut.default, text: "Settings", onClick: e };
            }
            function hn() {
                const e = (0, a.Dv)(W.p5),
                    t = (0, a.Dv)(N.s),
                    n = (0, a.b9)(N.J),
                    r = l.useCallback(() => {
                        n();
                    }, [n]);
                if (e) return { Icon: qt.default, text: t ? "Stop recording" : "Start recording", onClick: r, isEmphasized: t };
            }
            function bn() {
                const [e, t] = (0, a.KO)(Ze.yP),
                    n = l.useCallback(() => {
                        t((e) => !e);
                    }, [t]),
                    r = (function () {
                        const [e, t] = (0, a.KO)(rn.Z4);
                        if ((0, an.Jg)()) return { Icon: Nt.default, text: e ? "Disable stereo audio" : "Enable stereo audio", onClick: () => t() };
                    })();
                return (0, A.fH)(A.vw.prod) ? [] : [r, { Icon: Xt.default, text: "Debug", onClick: tn.yu }, { Icon: en.default, text: e ? "Hide stats" : "View stats", onClick: n }];
            }
            const vn = "Participants",
                Zn = { label: vn },
                yn = l.createElement(Kt.default, null);
            function xn() {
                const e = (0, a.Dv)(ke.XQ),
                    t = (0, a.b9)(ke.em);
                return l.createElement(g.ZP, { "aria-label": vn, borderColor: "transparent", color: "text", hoverLabel: Zn, icon: yn, onPress: t, size: "large", type: e ? "primaryFilled" : "primaryOutlined" });
            }
            var Cn = n(217220);
            const wn = { label: "Raise hand", preferredVerticalOrientation: "up" };
            function Dn() {
                const { raisedHandEmoji: e, toggleRaiseHand: t } = (0, Cn.sv)();
                return l.createElement(g.ZP, { hoverLabel: wn, icon: kn, onPress: t, size: "large", type: e ? "primaryFilled" : void 0 });
            }
            const Pn = b.default.create((e) => ({ raiseHandIcon: { filter: `drop-shadow(0 0 2px ${e.colors.hoverLabelColor})` } })),
                kn = l.createElement(u.ZP, { size: "headline2", style: Pn.raiseHandIcon }, "✋");
            var Sn = n(970197),
                In = n(115307),
                Rn = n(173739),
                Hn = n(40904),
                Mn = n(391366);
            function zn() {
                const [e, t] = (0, a.KO)(rn.lV);
                return l.createElement(Rn.Z, { "aria-label": "Volume", max: 1.2, maxIcon: Ln, min: 0, minIcon: _n, onChange: t, step: 0.1, value: e });
            }
            const _n = l.createElement(Hn.default, null),
                Ln = l.createElement(Mn.default, null),
                Fn = l.memo(() => {
                    const e = (0, ie.rx)(),
                        t = (0, a.Dv)(he.vM);
                    (0, he._3)();
                    const n = (0, ve.gt)();
                    return l.createElement(te.Z.Modal, null, e && l.createElement(ue.ConferenceBehaviors, { audioSpaceId: e }), l.createElement(Qn, null), l.createElement(i.Z, { style: Xn.fullscreen }, t ? l.createElement(Wn, { dpipWindow: t }) : n ? l.createElement(jn, null) : l.createElement(Bn, null), l.createElement(On, null)));
                });
            function Bn() {
                const e = (0, ne.Ji)(),
                    t = (0, re.Zx)(({ windowWidth: e }) => e > 1100 * b.default.theme.scaleMultiplier),
                    n = (0, ie.rx)(),
                    r = (0, a.Dv)(M.v);
                return l.createElement(l.Fragment, null, l.createElement(Yn, null), l.createElement(l.Fragment, null, !e && l.createElement(Nn, null), l.createElement(i.Z, { style: Xn.row }, l.createElement(i.Z, { style: Xn.filler }, e && l.createElement(Nn, null)), l.createElement(i.Z, { style: Xn.controls }, !r && l.createElement(Sn.n, null, l.createElement(Zt, null, l.createElement(An, null))), l.createElement(Sn.Z, null, l.createElement(Ft, null, l.createElement(P.t, null))), l.createElement(fe.v, null), l.createElement(Dn, null), n && l.createElement(de.Y, { audioSpaceId: n }), l.createElement(sn, null), l.createElement(Te, null)), l.createElement(i.Z, { style: Xn.controlsEnd }, e && l.createElement(l.Fragment, null, t && l.createElement(Y, null), l.createElement(xn, null), l.createElement(_e, null), l.createElement(i.Z, null)), l.createElement(i.Z, null))), l.createElement(Gn, null)));
            }
            function Wn({ dpipWindow: e }) {
                const t = (0, a.Dv)(M.v);
                return l.createElement(Ee.ZQ, { dpipWindow: e }, l.createElement(i.Z, { style: Xn.portal }, l.createElement(Yn, null), l.createElement(i.Z, { style: Xn.controls }, !t && l.createElement(An, null), l.createElement(P.t, null), l.createElement(fe.v, null), l.createElement(Dn, null), l.createElement(Te, null))));
            }
            function jn() {
                const e = (0, a.Dv)(B.p_),
                    t = (0, a.Dv)(B.lY);
                return e ? l.createElement($n, null) : t ? l.createElement(Tn, null) : l.createElement(Bn, null);
            }
            function $n() {
                return l.createElement(l.Fragment, null, l.createElement(Yn, null), l.createElement(Nn, null));
            }
            function Tn() {
                const e = (0, K.nY)();
                return l.createElement(l.Fragment, null, l.createElement(i.Z, { style: Xn.roomHeader }, l.createElement(u.ZP, { size: "headline1" }, l.createElement(In.q, null)), l.createElement(i.Z, { style: Xn.bar }), l.createElement(u.ZP, { size: "headline1" }, l.createElement(Jn, null)), l.createElement(i.Z, { style: Xn.bar }), l.createElement(u.ZP, { color: "gray900", size: "headline2" }, e), l.createElement(i.Z, { style: Xn.spacer }), l.createElement(Te, null, "End conference")), l.createElement(i.Z, { style: Xn.row }, l.createElement(i.Z, { style: Xn.participants }, l.createElement(ce.Z, { style: Xn.viewportView }, l.createElement(me.q, null))), l.createElement(i.Z, { style: Xn.fill }, l.createElement(i.Z, { style: Xn.roomControlsRow }, l.createElement(Sn.n, null, l.createElement(An, null)), l.createElement(Sn.Z, null, l.createElement(P.t, null)), l.createElement(Dn, null)), l.createElement(i.Z, { style: Xn.roomControls }, l.createElement(zn, null)))));
            }
            function Qn() {
                return (
                    (0, Ze.MC)(),
                    (function () {
                        const e = (0, a.oR)(),
                            t = (0, K.aQ)();
                        l.useEffect(() => {
                            let n = !0;
                            return (
                                e.get((0, W.sJ)(t)).then((t) => {
                                    n && (0, se.aF)(t, e);
                                }),
                                () => {
                                    (n = !1), (0, se.zP)(e);
                                }
                            );
                        }, [t, e]);
                    })(),
                    (0, R.ZJ)(),
                    (0, R.D0)(),
                    (function () {
                        const e = (0, I.zr)(),
                            t = (0, K.aQ)();
                        qn.useEffect(
                            l.useCallback(
                                () => () => {
                                    e(t);
                                },
                                [e, t],
                            ),
                        );
                    })(),
                    (0, he.bq)(),
                    (0, ge.N)(W.qH),
                    null
                );
            }
            function On() {
                const e = (0, I.ts)(),
                    t = (0, a.Dv)(B.Fn);
                return !e || t ? null : l.createElement(i.Z, { style: Xn.coverAll }, l.createElement(d.Z, null));
            }
            function An() {
                const e = (0, K.aQ)();
                return l.createElement(k.ZP, { audioSpaceId: e });
            }
            const Vn = (0, o.cn)((e) => !!e(_.B$) || !!e(be.mb) || void 0 !== e(_.kD));
            function Yn() {
                const e = (0, a.Dv)(Vn),
                    t = (0, ne.Ji)();
                return e || !t ? l.createElement(Qe._x, null) : l.createElement(ut, null);
            }
            function Gn() {
                const e = (0, ne.Ji)(),
                    t = (0, a.Dv)(ke.T1),
                    n = (0, a.b9)(ke.X6),
                    { ref: r } = (0, pe.G)(() => {
                        n();
                    });
                return e || !t ? null : l.createElement(le.Z, { enableMaskForDismiss: !0, onMaskClick: n, type: "bottom", withMask: !0 }, l.createElement(i.Z, { ref: r }, l.createElement(i.Z, { style: Xn.sheetDragIndicator }), l.createElement(Fe.k, null)));
            }
            function Jn() {
                const e = (0, K.nY)(),
                    t = (0, z.pv)(e);
                return (0, W.Ix)(t) ?? e;
            }
            function Nn() {
                return l.createElement(i.Z, { style: Xn.titleContainer }, l.createElement(u.ZP, { size: "headline1" }, l.createElement(Jn, null)), l.createElement(U, null), l.createElement(Un, null));
            }
            const Kn = { label: "Companion mode" };
            function Un() {
                return (0, a.Dv)(M.v) ? l.createElement(ae.Z, { hoverLabel: Kn }, l.createElement(oe.default, null)) : null;
            }
            const qn = (0, $.A6)(),
                Xn = b.default.create((e) => ({ fullscreen: { position: "fixed", inset: 0, backgroundColor: e.colors.navigationBackground }, filler: { flexGrow: "1", flexBasis: "1px" }, controlsEnd: { flexGrow: "1", flexBasis: "1px", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 }, controls: { flexDirection: "row", justifyContent: "center", padding: e.spaces.space8, gap: e.spaces.space16, alignSelf: "center" }, titleContainer: { paddingTop: e.spaces.space16, paddingStart: e.spaces.space16, flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, coverAll: { position: "fixed", inset: 0, backgroundColor: e.colors.maskColor, justifyContent: "center" }, portal: { height: "100%" }, spacer: { flexGrow: 1 }, bar: { borderStartWidth: e.borderWidths.small, borderStartColor: e.colors.gray500, borderStartStyle: "solid", height: "1em" }, row: { flexDirection: "row" }, roomHeader: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center", paddingStart: e.componentDimensions.gutterHorizontal }, roomControlsRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, flexDirection: "row", gap: e.spaces.space8 }, roomControls: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, participants: { width: "60%" }, fill: { flexGrow: 1 }, viewportView: { flexGrow: 1, flexShrink: 1, overflowX: "hidden", overflowY: "auto" }, sheetDragIndicator: { width: 35 * e.scaleMultiplier, height: 5 * e.scaleMultiplier, borderRadius: 2.5 * e.scaleMultiplier, backgroundColor: e.colors.gray50, margin: 6 * e.scaleMultiplier, alignSelf: "center" } }));
            function er(e) {
                (0, w.b)(), (0, z.bu)(), (0, T.W)(), (0, H.AE)(), (0, F.R2)(), (0, O.z)();
                const t = (0, K.nY)();
                return (0, z.rK)(t), l.createElement(x.X, null, l.createElement(tr, null));
            }
            function tr() {
                return (0, z.MM)() ? l.createElement(nr, null) : l.createElement(xr, null);
            }
            function nr() {
                const e = (0, a.Dv)(z.fJ),
                    t = (0, K.aQ)(),
                    n = (0, W.zX)(t);
                return (0, W.d3)(t), (0, z.Uk)(), n ? (n.state !== m.default.SpaceState.Running && n.state !== m.default.SpaceState.TimedOut ? l.createElement(i.Z, { style: kr.root }, l.createElement(u.ZP, null, "Conference is not running. It is ", n.state, ".")) : e ? l.createElement(Fn, null) : l.createElement(rr, null)) : l.createElement(i.Z, { style: kr.root }, l.createElement(u.ZP, null, "Conference not found"));
            }
            const rr = l.memo(function () {
                !(function () {
                    const e = (0, a.Dv)(B.Fn),
                        t = (0, s.useHistory)();
                    l.useEffect(() => {
                        e && t.replace("/i/conferences-room");
                    }, [t, e]);
                })();
                const e = (0, K.aQ)(),
                    t = (0, a.Dv)((0, W.ZO)(e));
                return (0, a.Dv)(M.v) ? l.createElement(lr, null) : t ? l.createElement(i.Z, { style: kr.normalRoot }, l.createElement(i.Z, { style: kr.extraRow }, l.createElement(q, null), l.createElement(Y, null)), l.createElement(i.Z, { style: kr.centered }, l.createElement(U, null), l.createElement(or, null), l.createElement(ir, null))) : l.createElement(ur, null);
            });
            function lr() {
                const e = (0, K.aQ)(),
                    t = (0, a.b9)(Er(e));
                return (
                    l.useEffect(() => {
                        t();
                    }, [t]),
                    l.createElement(d.Z, null)
                );
            }
            function ar() {
                return l.createElement(k.E$, null);
            }
            function or() {
                const e = (0, K.aQ)(),
                    t = (0, W.lw)(e),
                    { speakers: n } = t.participants,
                    r = (0, Z.Z)(n, ({ avatar_url: e }) => e).slice(0, 20),
                    a = n.slice(0, 2).map(({ display_name: e, highlightedLabel: t, is_blue_verified: n, user_id: r }, a) => l.createElement(f.Z, { affiliateBadgeInfo: t, isBlueVerified: n, key: a, name: e })),
                    o = n.length - 2,
                    c = o > 0 ? ` and ${o.toLocaleString()} others` : "",
                    s = `${c} ${c || a.length > 1 ? "are" : "is"} in this conference`;
                return l.createElement(i.Z, { style: kr.inline }, l.createElement(p.Z, { userAvatarSize: "large", userAvatarUrls: r }), a.length > 0 ? l.createElement(u.ZP, null, l.createElement(E.y, { items: a, skipFormatLast: a.length < n.length }), s) : l.createElement(u.ZP, null, "No one is in this conference"));
            }
            const cr = l.createElement(mr, null);
            function ir({ button: e = cr }) {
                return (
                    (function () {
                        const e = (0, Q._e)(),
                            t = (0, a.b9)(F.F3),
                            n = (0, a.b9)(L.M2),
                            r = (0, s.useHistory)();
                        Pr.useEffect(
                            l.useCallback(() => {
                                const l = e(),
                                    a = t();
                                return () => {
                                    Promise.all([l, a]).then(() => {
                                        ["/i/conferences/", "/i/conferences-room/"].some((e) => r.location.pathname.startsWith(e)) || n();
                                    });
                                };
                            }, [e, r, t, n]),
                        );
                    })(),
                    l.createElement(i.Z, { style: kr.videoWrapper }, l.createElement(i.Z, { style: kr.widescreen }, l.createElement(ee.W.Provider, null, l.createElement(ee.X, { defaultAspectRatio: 16 / 9 }, l.createElement(it.Ou, null))), l.createElement(i.Z, { style: kr.controls }, l.createElement(Sn.n, null, l.createElement(Zt, null, l.createElement(ar, null))), l.createElement(Sn.Z, null, l.createElement(Ft, null, l.createElement(P.t, null))))), l.createElement(i.Z, { style: kr.joinButtonContainer }, e))
                );
            }
            const sr = "Start watching";
            function ur() {
                const e = (0, a.b9)(I.RB),
                    t = (0, K.aQ)(),
                    [n, r] = l.useState(!1),
                    o = l.useCallback(() => {
                        e(t), r(!0);
                    }, [e, t]),
                    { config: c } = (0, C.Y)();
                return n ? l.createElement(i.Z, { style: kr.videoContainer }, l.createElement(i.Z, { style: kr.videoInnerContainer }, l.createElement(D.Z, c.player()))) : l.createElement(i.Z, { style: kr.root }, l.createElement(or, null), l.createElement(i.Z, { style: kr.joinButtonContainer }, l.createElement(Zr, { onPress: o }, sr)));
            }
            function mr() {
                const e = (0, K.aQ)();
                return l.createElement(S.P, { renderAtom: dr(e) }, (e) => l.createElement(fr, { isLoading: e }));
            }
            const dr = (0, c.xu)((e) => (0, o.cn)((t) => Promise.all([t((0, W.CP)(e)), t(_.Hs)])));
            function fr({ isLoading: e }) {
                const t = (0, K.aQ)(),
                    n = (0, a.b9)(pr(t)),
                    r = (0, j.A)((0, a.b9)(Er(t))),
                    o = (0, a.b9)(gr(t));
                return !!(0, a.Dv)((0, W.CP)(t).resolved)?.length ? l.createElement(l.Fragment, null, l.createElement(i.Z, { style: kr.row }, l.createElement(i.Z, null, l.createElement(Zr, { onPress: o }, "Switch")), l.createElement(g.ZP, { icon: l.createElement(v.default, null), renderMenu: hr, size: "xLarge", style: kr.dropdownButton, type: "primaryText" })), l.createElement(g.ZP, { onPress: r, style: kr.companionButton, type: "primaryText" }, "Use companion mode")) : l.createElement(l.Fragment, null, l.createElement(Zr, { disabled: e, onPress: n }, "Enter"), l.createElement(g.ZP, { onPress: r, style: kr.companionButton, type: "primaryText" }, "Use companion mode"));
            }
            const pr = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n, r) => {
                        n(I.HQ, e);
                    }),
                ),
                Er = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n) => {
                        n(M.S, !0), n(I.HQ, e);
                    }),
                ),
                gr = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n, r) => {
                        n(I.HQ, e), n(W.jm, e);
                    }),
                );
            function hr(e) {
                return l.createElement(br, { dismiss: e });
            }
            function br({ dismiss: e }) {
                const t = (0, K.aQ)(),
                    n = (0, a.Dv)(vr(t));
                return l.createElement(h.Z, { items: n, onCloseRequested: e, preferredHorizontalOrientation: "right" });
            }
            const vr = (0, c.xu)((e) =>
                (0, o.cn)((t) => [
                    {
                        text: "Enter",
                        onClick: (n) => {
                            t(y.zE).set(I.HQ, e), t(y.zE).set(z.fJ, !0), n();
                        },
                    },
                ]),
            );
            function Zr(e) {
                return l.createElement(g.ZP, (0, r.Z)({}, e, { size: "xLarge", type: "brandFilled" }));
            }
            const yr = l.createElement(l.Suspense, { fallback: l.createElement(wr, null) }, l.createElement(Cr, null)),
                xr = l.memo(function () {
                    return l.createElement(i.Z, { style: kr.root }, l.createElement(ir, { button: yr }));
                });
            function Cr() {
                const e = (0, R._j)();
                return l.createElement(Dr, { onPress: e });
            }
            function wr() {
                return l.createElement(Dr, { disabled: !0 });
            }
            function Dr(e) {
                return l.createElement(Zr, e, "Ask to join");
            }
            const Pr = (0, $.A6)();
            const kr = b.default.create((e) => {
                const t = b.default.supports("top: env(safe-area-inset-top)") ? { paddingLeft: `calc(env(safe-area-inset-left) + ${e.spaces.space8})`, paddingTop: `calc(env(safe-area-inset-top) + ${e.spaces.space8})`, paddingRight: `calc(env(safe-area-inset-right) + ${e.spaces.space8})`, paddingBottom: `calc(env(safe-area-inset-bottom) + ${e.spaces.space64})` } : { padding: e.spaces.space8 },
                    n = { flexGrow: 1, maxWidth: "100%", justifyContent: "center", alignItems: "flex-start", gap: e.spaces.space8, marginHorizontal: "auto" };
                return { inline: { flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, normalRoot: { ...t, flexGrow: 1, alignItems: "flex-start" }, root: { ...n, ...t }, centered: n, videoWrapper: { width: 600 * e.scaleMultiplier, maxWidth: "100%" }, controls: { flexDirection: "row", justifyContent: "center", padding: e.spaces.space8, gap: e.spaces.space16, alignSelf: "center", maxWidth: 600 * e.scaleMultiplier, position: "absolute", bottom: 0 }, widescreen: { aspectRatio: 16 / 9 }, joinButtonContainer: { marginTop: e.spaces.space8, alignSelf: "center" }, row: { flexDirection: "row" }, extraRow: { flexDirection: "row", gap: e.spaces.space8 }, dropdownButton: { marginStart: -e.spacesPx.space24, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space8, zIndex: -1, borderTopStartRadius: 0, borderBottomStartRadius: 0 }, videoContainer: { padding: e.spaces.space8, maxHeight: "100%", justifyContent: "center", flexGrow: 1 }, videoInnerContainer: { contain: "paint", justifyContent: "center", backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large, maxHeight: "100%", overflow: "hidden" }, companionButton: { marginTop: e.spaces.space8 } };
            });
        },
        674919: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f });
            n(543673), n(240753), n(128399);
            var r = n(202784),
                l = n(400752),
                a = n(325686),
                o = n(107267),
                c = n(721266),
                i = n(731708),
                s = n(56851),
                u = n(396963),
                m = n(316830),
                d = n(284778);
            function f(e) {
                const t = (0, u.nY)(),
                    n = (0, l.Dv)((0, m.J)(t)) ?? t,
                    { videoContentId: f } = (0, o.useParams)(),
                    p = (0, o.useLocation)(),
                    E = new URLSearchParams(p.search).get("clip_id");
                return E && f ? r.createElement(a.Z, null, r.createElement(c.Z, { size: "space8" }), r.createElement(i.ZP, { size: "title2" }, n, " - Recording"), r.createElement(c.Z, { size: "space16" }), r.createElement(d.x, { clipId: E, contentId: f })) : r.createElement(s.Z, null);
            }
        },
        284778: (e, t, n) => {
            n.d(t, { x: () => P });
            var r = n(202784),
                l = n(400752),
                a = n(565058),
                o = n(987809),
                c = n(325686),
                i = n(731708),
                s = n(966886),
                u = n(124964),
                m = n(530732),
                d = n(392237),
                f = n(111677),
                p = n.n(f),
                E = n(123751),
                g = n(310453),
                h = n(625555),
                b = n(403883),
                v = (n(585488), n(736063)),
                Z = n(535338),
                y = n(553660);
            function x(e) {
                return r.createElement(v.H, { errorConfig: C }, r.createElement(w, e));
            }
            const C = { context: "RELAY_USER_NAME" };
            function w(e) {
                const { userId: t } = e,
                    n = (0, Z.p)(D, { userId: t });
                return r.createElement(y.v, { user: n.user.result });
            }
            const D = b.Z;
            function P({ clipId: e, contentId: t, link: n }) {
                const a = (0, l.Dv)(R(e));
                if (!a) return;
                const { clip: o } = a,
                    { created_at: d, end_timecode_millis: f, start_timecode_millis: p } = o,
                    h = f - p,
                    b = [o.clipping_user_id_str && r.createElement(i.ZP, null, "Recorded by ", r.createElement(x, { userId: o.clipping_user_id_str })), d && r.createElement(s.Z, { timestamp: d }), r.createElement(i.ZP, null, M(h))].filter(Boolean).flatMap((e, t) => (0 === t ? e : [r.createElement(u.Z, null), e]));
                return r.createElement(c.Z, { style: H.recordingContainer }, r.createElement(g.Z, { "aria-label": k, aspectRatio: S, displayOptions: I, source: { variants: [], videoId: E.Z.forAudioSpace(o.broadcast_id, t, !1, { clip_id: e }), contentId: t }, videoType: "video" }), r.createElement(m.Z, { link: n, style: H.details }, b));
            }
            const k = p().ac4c73d8,
                S = 16 / 9,
                I = { objectFitVideo: "contain" },
                R = (0, o.xu)((e) => (0, a.cn)((t) => t(h.F6).getClip(e))),
                H = d.default.create((e) => ({ recordingContainer: { contain: "paint", borderRadius: e.borderRadii.xLarge, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", marginBottom: e.spaces.space16 }, details: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, flexDirection: "row" } }));
            function M(e) {
                const t = Math.floor(e / 1e3),
                    n = Math.floor(t / 60),
                    r = Math.floor(n / 60);
                return (r ? [r, n, t] : [n, t]).map((e) => `${e}`.padStart(2, "0")).join(":");
            }
        },
        316830: (e, t, n) => {
            n.d(t, { J: () => i, j: () => c });
            var r = n(565058),
                l = n(987809),
                a = n(536387),
                o = n(625555);
            const c = (0, l.xu)((e) => (0, a.K9)((t) => t(o.F6).getConference(e))),
                i = (0, l.xu)((e) => (0, r.cn)((t) => (t(c(e)), t(c(e).resolved)?.title)));
        },
        166383: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f });
            var r = n(202784),
                l = n(400752),
                a = n(565058),
                o = n(987809),
                c = n(325686),
                i = n(721266),
                s = n(731708),
                u = n(396963),
                m = n(316830),
                d = n(284778);
            function f(e) {
                const t = (0, u.nY)(),
                    n = (0, l.Dv)(E(t)) ?? [],
                    a = (0, l.Dv)((0, m.J)(t)) ?? t;
                return r.createElement(
                    c.Z,
                    null,
                    r.createElement(i.Z, { size: "space8" }),
                    r.createElement(s.ZP, { size: "title2" }, a, " - Recordings"),
                    r.createElement(i.Z, { size: "space16" }),
                    0 === n.length ? r.createElement(c.Z, null, r.createElement(s.ZP, null, "No recordings found")) : null,
                    n.map((e) => r.createElement(p, { key: e, recordingUrl: e })),
                );
            }
            function p({ recordingUrl: e }) {
                const t = (function (e) {
                        const t = /clip_id=(.+)$/.exec(e);
                        return t?.[1];
                    })(e),
                    n = (function (e) {
                        const t = /status\/(.+)\.json\?/.exec(e);
                        return t?.[1];
                    })(e),
                    l = (0, u.nY)();
                if (!t || !n) return;
                const a = `/i/conferences/${l}/recordings/${n}?clip_id=${t}`;
                return r.createElement(d.x, { clipId: t, contentId: n, link: a });
            }
            const E = (0, o.xu)((e) => (0, a.cn)((t) => t((0, m.j)(e))?.then(({ recording_urls: e }) => e)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-8093ae25.32b7871a.js.map
