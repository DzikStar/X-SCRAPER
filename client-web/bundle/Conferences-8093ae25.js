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
            n.r(t), n.d(t, { default: () => Xn });
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
                E = n(154003),
                g = n(811176),
                h = n(392237),
                b = n(487552),
                v = n(459679),
                Z = n(420182),
                y = n(600291),
                x = n(381904),
                C = n(447735),
                w = n(135328),
                D = n(49998),
                P = n(126420),
                k = n(53317),
                S = n(582129),
                I = n(136397),
                R = n(139613),
                H = n(41931),
                M = n(4427),
                z = n(790997),
                _ = n(758614),
                L = n(712612),
                F = n(895229),
                B = n(509599),
                W = n(409953),
                j = n(520197),
                $ = n(309487),
                T = n(934871),
                Q = n(565235),
                O = n(251067),
                A = n(340905);
            function V() {
                if (!(0, O.fH)(O.vw.prod)) return l.createElement(E.ZP, { icon: Y, link: "https://twitter.enterprise.slack.com/archives/C07SWM2DKKL" }, "Feedback");
            }
            const Y = l.createElement(A.default, null);
            var G = n(901832),
                J = n(801351),
                N = n(396963);
            function K() {
                return (0, a.Dv)(J.s) ? l.createElement(G.Vs, null) : null;
            }
            function U() {
                const e = (0, N.nY)();
                return (0, a.Dv)(q) ? l.createElement(E.ZP, { link: `/i/conferences/${e}/recordings` }, "View recordings") : null;
            }
            const q = (0, o.cn)((e) => (e(B.jQ), e(B.jQ.resolved)?.recording_urls));
            var X = n(441737),
                ee = n(292627),
                te = n(708852),
                ne = n(537392),
                re = n(138099),
                le = n(530732),
                ae = n(813751),
                oe = n(715601),
                ce = n(42134),
                ie = n(869508),
                se = n(106006),
                ue = n(595561),
                me = n(645903),
                de = n(947433),
                fe = n(562041),
                pe = n(359127),
                Ee = n(526250),
                ge = n(645708),
                he = n(251836),
                be = n(811233),
                ve = n(250265),
                Ze = n(310088),
                ye = n(194661),
                xe = n(98440),
                Ce = n(323265),
                we = n(933794),
                De = n(94751),
                Pe = n(23425);
            const ke = Ce.ZP.isMac() ? " (⌘+ctrl+c)" : Ce.ZP.isDesktopOS() ? " (ctrl+alt+c)" : "",
                Se = { label: `Chat${ke}` },
                Ie = l.createElement(ye.default, null),
                Re = l.createElement(xe.default, null),
                He = l.createElement(Me, null);
            function Me() {
                const e = (0, a.Dv)(Pe.xK),
                    t = (0, a.Dv)(De.Fz);
                return l.createElement(i.Z, null, e ? Re : Ie, t && !e && l.createElement(Ze.Z, { pip: !0, style: _e.badge, unreadCountLabel: () => "" }));
            }
            function ze() {
                const e = (0, a.Dv)(Pe.xK),
                    t = (0, a.b9)(Pe.hc),
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
                    o = l.createElement(E.ZP, { "aria-label": "Chat", borderColor: "transparent", color: "text", hoverLabel: Se, icon: He, onPress: n, size: "large", type: e ? "primaryFilled" : "primaryOutlined" });
                return l.createElement(we.Z, { children: o, handlers: r });
            }
            const _e = h.default.create((e) => ({ badge: { end: -e.spacesPx.space2 } }));
            var Le = n(502608),
                Fe = n(297896);
            const Be = "Leave conference",
                We = { label: Be, preferredVerticalOrientation: "up" },
                je = l.createElement(Fe.default, null);
            function $e({ children: e }) {
                const t = (0, S.zr)(),
                    n = (0, N.aQ)(),
                    r = l.useCallback(() => {
                        t(n);
                    }, [t, n]);
                return l.createElement(E.ZP, { "aria-label": Be, children: e, hoverLabel: We, icon: je, onPress: r, size: "large", type: "destructiveFilled" });
            }
            var Te = n(977419),
                Qe = n(588441),
                Oe = n(447854),
                Ae = n(536387),
                Ve = (n(136728), n(476984)),
                Ye = n.n(Ve);
            function Ge(e) {
                const t = (0, a.Dv)(Ne);
                return (n) => {
                    n ? t.set(e, n) : t.delete(e);
                };
            }
            function Je(e) {
                const t = (0, a.b9)(Ue),
                    n = (0, a.b9)(qe);
                return (
                    Xe(() => {
                        t();
                    }, [n, e]),
                    l.useLayoutEffect(() => {
                        n();
                    }, [n, e]),
                    e
                );
            }
            const Ne = (0, o.cn)(() => new Map()),
                Ke = (0, o.cn)(),
                Ue = (0, o.cn)(null, (e, t) => {
                    if (e(Ke)) return;
                    const n = e(Ne),
                        r = [],
                        l = new Map();
                    for (const [e, t] of n.entries()) document.body.contains(t) ? (l.set(e, t.getBoundingClientRect()), t.getAnimations().forEach((e) => e.cancel())) : r.push(e);
                    r.forEach((e) => n.delete(e)), t(Ke, l);
                }),
                qe = (0, o.cn)(null, (e, t) => {
                    const n = e(Ne),
                        r = e(Ke);
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
                        t(Ke, void 0);
                    }
                });
            function Xe(e, t) {
                const n = l.useRef(t);
                Ye()(n.current, t) || e(), (n.current = t);
            }
            var et = n(458884),
                tt = n(64634),
                nt = n(34540),
                rt = n.n(nt),
                lt = n(822240);
            function at({ h: e, n: t, w: n, ...r }) {
                const { nc: l } = r;
                return Math.min(n / l, ((e / Math.ceil(t / l)) * 16) / 9);
            }
            var ot = n(75629),
                ct = n(60089),
                it = n(826868);
            function st() {
                const e = (0, ce.rx)(),
                    t = (0, te.Ji)(),
                    n = (0, a.Dv)(ge.Lv);
                return l.createElement(i.Z, { style: Et.row }, l.createElement(i.Z, { style: Et.flex }, l.createElement(Qe.Z, { style: Et.videosContainer }, l.createElement(ut, null)), e && l.createElement(Oe.Z, { audioSpaceId: e, height: 150 }), l.createElement(it.W, null)), l.createElement(ee.Z.Modal, null, l.createElement(ot.F, null)), t && !n && l.createElement(et.C, null), l.createElement(tt.h, null), l.createElement(i.Z, { style: Et.bottomStart }, l.createElement(ve.xG, null)));
            }
            function ut() {
                const e = (0, a.Dv)(z.r1),
                    t = e.length + 1,
                    n = Je(
                        (0, ne.Zx)(({ containerHeight: e, containerWidth: n }) =>
                            (function ({ h: e, n: t, w: n }) {
                                return Math.max(Math.min(t, Math.floor(n / 160) * Math.floor(e / 90)), 1);
                            })({ n: t, w: n, h: e }),
                        ),
                    ),
                    r = (0, a.Dv)((0, z.l5)(n)),
                    o = Je(
                        (0, ne.Zx)(({ containerHeight: e, containerWidth: t }) =>
                            (function ({ h: e, n: t, w: n }) {
                                if (2 === t) return 1;
                                const r = Math.ceil(Math.sqrt(t)),
                                    l = n / e,
                                    a = 16 / 9;
                                if (l > a) {
                                    const l = rt()(
                                        (0, lt.Z)(1, r + 1).map((r) => ({ count: r, value: at({ n: t, w: n, h: e, nc: Math.ceil(t / r) }) })),
                                        ({ value: e }) => e,
                                    )?.count;
                                    return l ? Math.ceil(t / l) : r;
                                }
                                return l < a
                                    ? (rt()(
                                          (0, lt.Z)(1, r + 1).map((r) => ({ count: r, value: at({ n: t, w: n, h: e, nc: r }) })),
                                          ({ value: e }) => e,
                                      )?.count ?? r)
                                    : r;
                            })({ n, w: t, h: e }),
                        ),
                    ),
                    c = 1 === r.length ? 1 : r.length + 1,
                    s = Math.ceil(c / o),
                    u = { gridTemplateColumns: `repeat(${o}, 1fr)`, aspectRatio: `${16 * o} / ${9 * s}` },
                    m = (0, ne.Zx)(({ containerHeight: e, containerWidth: t }) => ((16 * o) / (9 * s) >= t / e ? Et.fullWidth : Et.fullHeight));
                return l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                        i.Z,
                        { style: [Et.videos, u, m] },
                        r.map((e) => l.createElement(pt, { feedId: e, key: e })),
                        n > 2 && n !== t && l.createElement(mt, { allFeeds: e, feedIds: r }),
                        1 !== r.length && l.createElement(ft, null),
                    ),
                    1 === r.length && l.createElement(ft, null),
                );
            }
            function mt(e) {
                const { avatarUrls: t, count: n } = (function ({ allFeeds: e, feedIds: t }) {
                    const n = new Set(t),
                        r = e.filter((e) => !n.has(e)),
                        l = (0, Ae.xO)(),
                        a = (0, v.Z)(r, (e) => l.get((0, N.pB)(e)));
                    return { avatarUrls: a, count: r.length };
                })(e);
                return l.createElement(i.Z, { style: Et.overflowContainer }, l.createElement(p.Z, { userAvatarUrls: t }), l.createElement(u.ZP, null, "+", n, " others"));
            }
            const dt = (0, o.cn)((e) => 1 === e(z.r1).length);
            function ft() {
                const e = (0, a.Dv)(dt),
                    t = Ge();
                return l.createElement(i.Z, { ref: t, style: e ? Et.hover : Et.videoContainer }, l.createElement(ct.Ou, { isListSafe: e }));
            }
            function pt({ feedId: e }) {
                const t = (0, N.Ou)(e),
                    n = (0, N.CO)(e),
                    r = Ge(e);
                return l.createElement(i.Z, { ref: r, style: Et.videoContainer }, l.createElement(ct.nA, { feedId: e, userAvatar: t, userName: n }));
            }
            const Et = h.default.create((e) => ({ videoContainer: { aspectRatio: "16 / 9", maxWidth: "100%" }, overflowContainer: { contain: "paint", justifyContent: "center", alignItems: "center", aspectRatio: "16/9", backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large, maxWidth: "100%" }, flex: { flexGrow: 1, flexShrink: 1 }, videosContainer: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, videos: { flexShrink: 1, display: "grid", margin: "auto", rowGap: e.spaces.space8, columnGap: 4.5 * e.scaleMultiplier, paddingHorizontal: e.spaces.space8, paddingVertical: 4.5 * e.scaleMultiplier }, hover: { position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16, width: "25%", boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large }, bottomStart: { bottom: e.spaces.space16, start: e.spaces.space16, position: "fixed" }, row: { flexDirection: "row", flexGrow: 1, flexShrink: 1 }, fullWidth: { width: "100%" }, fullHeight: { height: "100%" } }));
            var gt = n(529356),
                ht = n(47086),
                bt = n(254810);
            function vt({ children: e }) {
                const t = (0, bt.LK)(),
                    n = (0, a.Dv)(bt.vl.resolved),
                    r = (0, a.Dv)(bt.jq);
                return t ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: At.badgeContainer }, l.createElement(Pt, null))) : n && !n.length ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: At.badgeContainer }, l.createElement(Rt, null))) : r ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: At.badgeContainer }, l.createElement(_t, null))) : e;
            }
            function Zt(e) {
                const { interstitialHeadline: t, interstitialSubtext: n, label: r } = e,
                    a = l.useMemo(() => ({ label: r, preferredVerticalOrientation: "up" }), [r]),
                    [o, c] = l.useState(!1);
                return l.createElement(l.Fragment, null, l.createElement(E.ZP, { "aria-label": r, hoverLabel: a, icon: Vt, onPress: () => c(!0), style: At.badge, type: "primaryText" }), o && l.createElement(gt.Z, { actionLabel: xt, enableMaskForDismiss: !0, headline: t, onAction: () => c(!1), onClose: () => c(!1), subtext: n }));
            }
            const yt = "Permission denied",
                xt = "Dismiss",
                Ct = "Your microphone permission is denied.",
                wt = "Please enable your microphone in your browser settings",
                Dt = "Please enable your microphone in your browser settings. This can be found by clicking the control button to the left of the address bar.";
            function Pt() {
                return l.createElement(Zt, { interstitialHeadline: Ct, interstitialSubtext: Ce.ZP.isChrome() ? Dt : wt, label: yt });
            }
            const kt = "No microphone found",
                St = "You don't have a microphone connected.",
                It = "Please connect a microphone to your device speak in this conference.";
            function Rt() {
                return l.createElement(Zt, { interstitialHeadline: St, interstitialSubtext: It, label: kt });
            }
            const Ht = "No microphone audio detected",
                Mt = "No microphone audio detected.",
                zt = "Please check if your microphone or your system audio is not muted or switch to a different microphone.";
            function _t() {
                return l.createElement(Zt, { interstitialHeadline: Mt, interstitialSubtext: zt, label: Ht });
            }
            function Lt({ children: e }) {
                const t = (0, T.rW)(),
                    n = (0, a.Dv)(T.cf.resolved);
                return t ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: At.badgeContainer }, l.createElement(jt, null))) : n && !n.length ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: At.badgeContainer }, l.createElement(Ot, null))) : e;
            }
            const Ft = "Your camera permission is denied.",
                Bt = "Please enable your camera in your browser settings",
                Wt = "Please enable your camera in your browser settings. This can be found by clicking the control button to the left of the address bar.";
            function jt() {
                return l.createElement(Zt, { interstitialHeadline: Ft, interstitialSubtext: Ce.ZP.isChrome() ? Wt : Bt, label: yt });
            }
            const $t = "No camera found",
                Tt = "You don't have a camera connected",
                Qt = "Please connect a camera to your device show present in this conference";
            function Ot() {
                return l.createElement(Zt, { interstitialHeadline: Tt, interstitialSubtext: Qt, label: $t });
            }
            const At = h.default.create((e) => ({ badgeContainer: { pointerEvents: "none", position: "absolute", inset: 0, transform: "rotate(45deg) translateY(-50%) rotate(-45deg)", alignItems: "center", justifyContent: "center" }, badge: { pointerEvents: "auto" }, badgeIcon: { color: e.colors.yellow500, backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.infinite }, chromeHelp: { position: "fixed", top: 0, start: 0, padding: e.spaces.space16, backgroundColor: e.colors.unreadCellBackground, borderRadius: e.borderRadii.medium } })),
                Vt = l.createElement(ht.default, { style: At.badgeIcon });
            var Yt = n(149170),
                Gt = n(684869),
                Jt = n(503195),
                Nt = n(430895),
                Kt = n(941563),
                Ut = n(136483),
                qt = n(72591),
                Xt = n(413522),
                en = n(521799),
                tn = n(910245),
                nn = n(835515),
                rn = n(280859),
                ln = n(122411);
            const an = { label: "More" },
                on = l.createElement(Yt.default, null);
            function cn() {
                return (0, rn.Nt)(), l.createElement(i.Z, null, l.createElement(E.ZP, { hoverLabel: an, icon: on, renderMenu: sn, size: "large" }));
            }
            const sn = (e) => l.createElement(un, { onClose: e });
            function un({ onClose: e }) {
                const t = [mn(), (0, de.c)(), dn(), fn(), pn(), En(), gn(), ...hn()].filter(Boolean);
                return l.createElement(g.Z, { items: t, onCloseRequested: e, preferredHorizontalOrientation: "right", shouldCloseOnClick: !0 });
            }
            function mn() {
                return (0, rn.Nt)()
                    ? {
                          Icon: Gt.default,
                          text: "Enable push notifications",
                          onClick: () => {
                              (0, rn.ZK)();
                          },
                      }
                    : void 0;
            }
            function dn() {
                const e = (0, N.aQ)(),
                    t = (0, tn.q)({ audioSpaceId: e });
                return { Icon: t.Icon, text: t.label, onClick: t.onPress };
            }
            function fn() {
                const e = (0, te.Ji)(),
                    t = (0, a.b9)(Pe.em);
                if (!e) return { Icon: Nt.default, text: "Participants", onClick: t };
            }
            function pn() {
                const e = (0, te.Ji)(),
                    t = (0, a.b9)(Pe.hc);
                if (!e) return { Icon: ye.default, text: "Chat", onClick: () => t() };
            }
            function En() {
                const e = (0, a.b9)(Pe.yu);
                return { Icon: Kt.default, text: "Settings", onClick: e };
            }
            function gn() {
                const e = (0, a.Dv)(B.p5),
                    t = (0, a.Dv)(J.s),
                    n = (0, a.b9)(J.J),
                    r = l.useCallback(() => {
                        n();
                    }, [n]);
                if (e) return { Icon: Ut.default, text: t ? "Stop recording" : "Start recording", onClick: r, isEmphasized: t };
            }
            function hn() {
                const [e, t] = (0, a.KO)(ve.yP),
                    n = l.useCallback(() => {
                        t((e) => !e);
                    }, [t]),
                    r = (function () {
                        const [e, t] = (0, a.KO)(nn.Z4);
                        if ((0, ln.Jg)()) return { Icon: Jt.default, text: e ? "Disable stereo audio" : "Enable stereo audio", onClick: () => t() };
                    })();
                return (0, O.fH)(O.vw.prod) ? [] : [r, { Icon: qt.default, text: "Debug", onClick: en.yu }, { Icon: Xt.default, text: e ? "Hide stats" : "View stats", onClick: n }];
            }
            const bn = "Participants",
                vn = { label: bn },
                Zn = l.createElement(Nt.default, null);
            function yn() {
                const e = (0, a.Dv)(Pe.XQ),
                    t = (0, a.b9)(Pe.em);
                return l.createElement(E.ZP, { "aria-label": bn, borderColor: "transparent", color: "text", hoverLabel: vn, icon: Zn, onPress: t, size: "large", type: e ? "primaryFilled" : "primaryOutlined" });
            }
            var xn = n(217220);
            const Cn = { label: "Raise hand", preferredVerticalOrientation: "up" };
            function wn() {
                const { raisedHandEmoji: e, toggleRaiseHand: t } = (0, xn.sv)();
                return l.createElement(E.ZP, { hoverLabel: Cn, icon: Pn, onPress: t, size: "large", type: e ? "primaryFilled" : void 0 });
            }
            const Dn = h.default.create((e) => ({ raiseHandIcon: { filter: `drop-shadow(0 0 2px ${e.colors.hoverLabelColor})` } })),
                Pn = l.createElement(u.ZP, { size: "headline2", style: Dn.raiseHandIcon }, "✋");
            var kn = n(970197),
                Sn = n(115307),
                In = n(173739),
                Rn = n(40904),
                Hn = n(391366);
            function Mn() {
                const [e, t] = (0, a.KO)(nn.lV);
                return l.createElement(In.Z, { "aria-label": "Volume", max: 1.2, maxIcon: _n, min: 0, minIcon: zn, onChange: t, step: 0.1, value: e });
            }
            const zn = l.createElement(Rn.default, null),
                _n = l.createElement(Hn.default, null),
                Ln = l.memo(() => {
                    const e = (0, ce.rx)(),
                        t = (0, a.Dv)(ge.vM);
                    (0, ge._3)();
                    const n = (0, be.gt)();
                    return l.createElement(ee.Z.Modal, null, e && l.createElement(se.ConferenceBehaviors, { audioSpaceId: e }), l.createElement(Tn, null), l.createElement(i.Z, { style: qn.fullscreen }, t ? l.createElement(Bn, { dpipWindow: t }) : n ? l.createElement(Wn, null) : l.createElement(Fn, null), l.createElement(Qn, null)));
                });
            function Fn() {
                const e = (0, te.Ji)(),
                    t = (0, ne.Zx)(({ windowWidth: e }) => e > 1100 * h.default.theme.scaleMultiplier),
                    n = (0, ce.rx)(),
                    r = (0, a.Dv)(H.v);
                return l.createElement(l.Fragment, null, l.createElement(Vn, null), l.createElement(l.Fragment, null, !e && l.createElement(Jn, null), l.createElement(i.Z, { style: qn.row }, l.createElement(i.Z, { style: qn.filler }, e && l.createElement(Jn, null)), l.createElement(i.Z, { style: qn.controls }, !r && l.createElement(kn.n, null, l.createElement(vt, null, l.createElement(On, null))), l.createElement(kn.Z, null, l.createElement(Lt, null, l.createElement(D.t, null))), l.createElement(de.v, null), l.createElement(wn, null), n && l.createElement(me.Y, { audioSpaceId: n }), l.createElement(cn, null), l.createElement($e, null)), l.createElement(i.Z, { style: qn.controlsEnd }, e && l.createElement(l.Fragment, null, t && l.createElement(V, null), l.createElement(yn, null), l.createElement(ze, null), l.createElement(i.Z, null)), l.createElement(i.Z, null))), l.createElement(Yn, null)));
            }
            function Bn({ dpipWindow: e }) {
                const t = (0, a.Dv)(H.v);
                return l.createElement(pe.ZQ, { dpipWindow: e }, l.createElement(i.Z, { style: qn.portal }, l.createElement(Vn, null), l.createElement(i.Z, { style: qn.controls }, !t && l.createElement(On, null), l.createElement(D.t, null), l.createElement(de.v, null), l.createElement(wn, null), l.createElement($e, null))));
            }
            function Wn() {
                const e = (0, a.Dv)(F.p_),
                    t = (0, a.Dv)(F.lY);
                return e ? l.createElement(jn, null) : t ? l.createElement($n, null) : l.createElement(Fn, null);
            }
            function jn() {
                return l.createElement(l.Fragment, null, l.createElement(Vn, null), l.createElement(Jn, null));
            }
            function $n() {
                const e = (0, N.nY)();
                return l.createElement(l.Fragment, null, l.createElement(i.Z, { style: qn.roomHeader }, l.createElement(u.ZP, { size: "headline1" }, l.createElement(Sn.q, null)), l.createElement(i.Z, { style: qn.bar }), l.createElement(u.ZP, { size: "headline1" }, l.createElement(Gn, null)), l.createElement(i.Z, { style: qn.bar }), l.createElement(u.ZP, { color: "gray900", size: "headline2" }, e), l.createElement(i.Z, { style: qn.spacer }), l.createElement($e, null, "End conference")), l.createElement(i.Z, { style: qn.row }, l.createElement(i.Z, { style: qn.participants }, l.createElement(oe.Z, { style: qn.viewportView }, l.createElement(ue.q, null))), l.createElement(i.Z, { style: qn.fill }, l.createElement(i.Z, { style: qn.roomControlsRow }, l.createElement(kn.n, null, l.createElement(On, null)), l.createElement(kn.Z, null, l.createElement(D.t, null)), l.createElement(wn, null)), l.createElement(i.Z, { style: qn.roomControls }, l.createElement(Mn, null)))));
            }
            function Tn() {
                return (
                    (0, ve.MC)(),
                    (function () {
                        const e = (0, a.oR)(),
                            t = (0, N.aQ)();
                        l.useEffect(() => {
                            let n = !0;
                            return (
                                e.get((0, B.sJ)(t)).then((t) => {
                                    n && (0, ie.aF)(t, e);
                                }),
                                () => {
                                    (n = !1), (0, ie.zP)(e);
                                }
                            );
                        }, [t, e]);
                    })(),
                    (0, I.ZJ)(),
                    (0, I.D0)(),
                    (function () {
                        const e = (0, S.zr)(),
                            t = (0, N.aQ)();
                        Un.useEffect(
                            l.useCallback(
                                () => () => {
                                    e(t);
                                },
                                [e, t],
                            ),
                        );
                    })(),
                    (0, ge.bq)(),
                    (0, Ee.N)(B.qH),
                    null
                );
            }
            function Qn() {
                const e = (0, S.ts)(),
                    t = (0, a.Dv)(F.Fn);
                return !e || t ? null : l.createElement(i.Z, { style: qn.coverAll }, l.createElement(d.Z, null));
            }
            function On() {
                const e = (0, N.aQ)();
                return l.createElement(P.ZP, { audioSpaceId: e });
            }
            const An = (0, o.cn)((e) => !!e(z.B$) || !!e(he.mb) || void 0 !== e(z.kD));
            function Vn() {
                const e = (0, a.Dv)(An),
                    t = (0, te.Ji)();
                return e || !t ? l.createElement(Te._x, null) : l.createElement(st, null);
            }
            function Yn() {
                const e = (0, te.Ji)(),
                    t = (0, a.Dv)(Pe.T1),
                    n = (0, a.b9)(Pe.X6),
                    { ref: r } = (0, fe.G)(() => {
                        n();
                    });
                return e || !t ? null : l.createElement(re.Z, { enableMaskForDismiss: !0, onMaskClick: n, type: "bottom", withMask: !0 }, l.createElement(i.Z, { ref: r }, l.createElement(i.Z, { style: qn.sheetDragIndicator }), l.createElement(Le.k, null)));
            }
            function Gn() {
                const e = (0, N.nY)(),
                    t = (0, M.pv)(e);
                return (0, B.Ix)(t) ?? e;
            }
            function Jn() {
                return l.createElement(i.Z, { style: qn.titleContainer }, l.createElement(u.ZP, { size: "headline1" }, l.createElement(Gn, null)), l.createElement(K, null), l.createElement(Kn, null));
            }
            const Nn = { label: "Companion mode" };
            function Kn() {
                return (0, a.Dv)(H.v) ? l.createElement(le.Z, { hoverLabel: Nn }, l.createElement(ae.default, null)) : null;
            }
            const Un = (0, j.A6)(),
                qn = h.default.create((e) => ({ fullscreen: { position: "fixed", inset: 0, backgroundColor: e.colors.navigationBackground }, filler: { flexGrow: "1", flexBasis: "1px" }, controlsEnd: { flexGrow: "1", flexBasis: "1px", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 }, controls: { flexDirection: "row", justifyContent: "center", padding: e.spaces.space8, gap: e.spaces.space16, alignSelf: "center" }, titleContainer: { paddingTop: e.spaces.space16, paddingStart: e.spaces.space16, flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, coverAll: { position: "fixed", inset: 0, backgroundColor: e.colors.maskColor, justifyContent: "center" }, portal: { height: "100%" }, spacer: { flexGrow: 1 }, bar: { borderStartWidth: e.borderWidths.small, borderStartColor: e.colors.gray500, borderStartStyle: "solid", height: "1em" }, row: { flexDirection: "row" }, roomHeader: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center", paddingStart: e.componentDimensions.gutterHorizontal }, roomControlsRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, flexDirection: "row", gap: e.spaces.space8 }, roomControls: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, participants: { width: "60%" }, fill: { flexGrow: 1 }, viewportView: { flexGrow: 1, flexShrink: 1, overflowX: "hidden", overflowY: "auto" }, sheetDragIndicator: { width: 35 * e.scaleMultiplier, height: 5 * e.scaleMultiplier, borderRadius: 2.5 * e.scaleMultiplier, backgroundColor: e.colors.gray50, margin: 6 * e.scaleMultiplier, alignSelf: "center" } }));
            function Xn(e) {
                (0, C.b)(), (0, M.bu)(), (0, $.W)(), (0, R.AE)(), (0, L.R2)(), (0, Q.z)();
                const t = (0, N.nY)();
                return (0, M.rK)(t), l.createElement(y.X, null, l.createElement(er, null));
            }
            function er() {
                return (0, M.MM)() ? l.createElement(tr, null) : l.createElement(yr, null);
            }
            function tr() {
                const e = (0, a.Dv)(M.fJ),
                    t = (0, N.aQ)(),
                    n = (0, B.zX)(t);
                return (0, B.d3)(t), (0, M.Uk)(), n ? (n.state !== m.default.SpaceState.Running && n.state !== m.default.SpaceState.TimedOut ? l.createElement(i.Z, { style: Pr.root }, l.createElement(u.ZP, null, "Conference is not running. It is ", n.state, ".")) : e ? l.createElement(Ln, null) : l.createElement(nr, null)) : l.createElement(i.Z, { style: Pr.root }, l.createElement(u.ZP, null, "Conference not found"));
            }
            const nr = l.memo(function () {
                !(function () {
                    const e = (0, a.Dv)(F.Fn),
                        t = (0, s.useHistory)();
                    l.useEffect(() => {
                        e && t.replace("/i/conferences-room");
                    }, [t, e]);
                })();
                const e = (0, N.aQ)(),
                    t = (0, a.Dv)((0, B.ZO)(e));
                return (0, a.Dv)(H.v) ? l.createElement(rr, null) : t ? l.createElement(i.Z, { style: Pr.normalRoot }, l.createElement(i.Z, { style: Pr.extraRow }, l.createElement(U, null), l.createElement(V, null)), l.createElement(i.Z, { style: Pr.centered }, l.createElement(K, null), l.createElement(ar, null), l.createElement(cr, null))) : l.createElement(sr, null);
            });
            function rr() {
                const e = (0, N.aQ)(),
                    t = (0, a.b9)(pr(e));
                return (
                    l.useEffect(() => {
                        t();
                    }, [t]),
                    l.createElement(d.Z, null)
                );
            }
            function lr() {
                return l.createElement(P.E$, null);
            }
            function ar() {
                const e = (0, N.aQ)(),
                    t = (0, B.lw)(e),
                    { speakers: n } = t.participants,
                    r = (0, v.Z)(n, ({ avatar_url: e }) => e).slice(0, 20),
                    a = n.slice(0, 2).map(({ display_name: e, highlightedLabel: t, is_blue_verified: n, user_id: r }, a) => l.createElement(f.Z, { affiliateBadgeInfo: t, isBlueVerified: n, key: a, name: e })),
                    o = n.length - 2,
                    c = o > 0 ? ` and ${o.toLocaleString()} others` : "",
                    s = `${c} ${c || a.length > 1 ? "are" : "is"} in this conference`;
                return l.createElement(i.Z, { style: Pr.inline }, l.createElement(p.Z, { userAvatarSize: "large", userAvatarUrls: r }), a.length > 0 ? l.createElement(u.ZP, null, a, s) : l.createElement(u.ZP, null, "No one is in this conference"));
            }
            const or = l.createElement(ur, null);
            function cr({ button: e = or }) {
                return (
                    (function () {
                        const e = (0, T._e)(),
                            t = (0, a.b9)(L.F3),
                            n = (0, a.b9)(_.M2),
                            r = (0, s.useHistory)();
                        Dr.useEffect(
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
                    l.createElement(i.Z, { style: Pr.videoWrapper }, l.createElement(i.Z, { style: Pr.widescreen }, l.createElement(X.W.Provider, null, l.createElement(X.X, { defaultAspectRatio: 16 / 9 }, l.createElement(ct.Ou, null))), l.createElement(i.Z, { style: Pr.controls }, l.createElement(kn.n, null, l.createElement(vt, null, l.createElement(lr, null))), l.createElement(kn.Z, null, l.createElement(Lt, null, l.createElement(D.t, null))))), l.createElement(i.Z, { style: Pr.joinButtonContainer }, e))
                );
            }
            const ir = "Start watching";
            function sr() {
                const e = (0, a.b9)(S.RB),
                    t = (0, N.aQ)(),
                    [n, r] = l.useState(!1),
                    o = l.useCallback(() => {
                        e(t), r(!0);
                    }, [e, t]),
                    { config: c } = (0, x.Y)();
                return n ? l.createElement(i.Z, { style: Pr.videoContainer }, l.createElement(i.Z, { style: Pr.videoInnerContainer }, l.createElement(w.Z, c.player()))) : l.createElement(i.Z, { style: Pr.root }, l.createElement(ar, null), l.createElement(i.Z, { style: Pr.joinButtonContainer }, l.createElement(vr, { onPress: o }, ir)));
            }
            function ur() {
                const e = (0, N.aQ)();
                return l.createElement(k.P, { renderAtom: mr(e) }, (e) => l.createElement(dr, { isLoading: e }));
            }
            const mr = (0, c.xu)((e) => (0, o.cn)((t) => Promise.all([t((0, B.CP)(e)), t(z.Hs)])));
            function dr({ isLoading: e }) {
                const t = (0, N.aQ)(),
                    n = (0, a.b9)(fr(t)),
                    r = (0, W.A)((0, a.b9)(pr(t))),
                    o = (0, a.b9)(Er(t));
                return !!(0, a.Dv)((0, B.CP)(t).resolved)?.length ? l.createElement(l.Fragment, null, l.createElement(i.Z, { style: Pr.row }, l.createElement(i.Z, null, l.createElement(vr, { onPress: o }, "Switch")), l.createElement(E.ZP, { icon: l.createElement(b.default, null), renderMenu: gr, size: "xLarge", style: Pr.dropdownButton, type: "primaryText" })), l.createElement(E.ZP, { onPress: r, style: Pr.companionButton, type: "primaryText" }, "Use companion mode")) : l.createElement(l.Fragment, null, l.createElement(vr, { disabled: e, onPress: n }, "Enter"), l.createElement(E.ZP, { onPress: r, style: Pr.companionButton, type: "primaryText" }, "Use companion mode"));
            }
            const fr = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n, r) => {
                        n(S.HQ, e);
                    }),
                ),
                pr = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n) => {
                        n(H.S, !0), n(S.HQ, e);
                    }),
                ),
                Er = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n, r) => {
                        n(S.HQ, e), n(B.jm, e);
                    }),
                );
            function gr(e) {
                return l.createElement(hr, { dismiss: e });
            }
            function hr({ dismiss: e }) {
                const t = (0, N.aQ)(),
                    n = (0, a.Dv)(br(t));
                return l.createElement(g.Z, { items: n, onCloseRequested: e, preferredHorizontalOrientation: "right" });
            }
            const br = (0, c.xu)((e) =>
                (0, o.cn)((t) => [
                    {
                        text: "Enter",
                        onClick: (n) => {
                            t(Z.zE).set(S.HQ, e), t(Z.zE).set(M.fJ, !0), n();
                        },
                    },
                ]),
            );
            function vr(e) {
                return l.createElement(E.ZP, (0, r.Z)({}, e, { size: "xLarge", type: "brandFilled" }));
            }
            const Zr = l.createElement(l.Suspense, { fallback: l.createElement(Cr, null) }, l.createElement(xr, null)),
                yr = l.memo(function () {
                    return l.createElement(i.Z, { style: Pr.root }, l.createElement(cr, { button: Zr }));
                });
            function xr() {
                const e = (0, I._j)();
                return l.createElement(wr, { onPress: e });
            }
            function Cr() {
                return l.createElement(wr, { disabled: !0 });
            }
            function wr(e) {
                return l.createElement(vr, e, "Ask to join");
            }
            const Dr = (0, j.A6)();
            const Pr = h.default.create((e) => {
                const t = h.default.supports("top: env(safe-area-inset-top)") ? { paddingLeft: `calc(env(safe-area-inset-left) + ${e.spaces.space8})`, paddingTop: `calc(env(safe-area-inset-top) + ${e.spaces.space8})`, paddingRight: `calc(env(safe-area-inset-right) + ${e.spaces.space8})`, paddingBottom: `calc(env(safe-area-inset-bottom) + ${e.spaces.space64})` } : { padding: e.spaces.space8 },
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
                s = n(231035),
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
                f = n(674132),
                p = n.n(f),
                E = n(123751),
                g = n(78067),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-8093ae25.f1c3688a.js.map
