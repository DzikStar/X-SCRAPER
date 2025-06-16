"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-e019dbda"],
    {
        349035: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                l = n(272175);
            const a = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), r.createElement(l.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => E });
            var r = n(202784),
                l = n(420740),
                a = n(108362),
                o = n(731708),
                c = n(154003),
                i = n(392237),
                s = n(111677),
                u = n.n(s),
                d = n(349035);
            const m = "error-detail",
                f = u().e49537c2,
                p = u().a9ae1e78;
            class E extends r.PureComponent {
                render() {
                    return r.createElement(l.Z, { testID: m }, r.createElement(d.Z, null), r.createElement(a.Z, { style: g.root }, r.createElement(o.ZP, { align: "center", color: "gray700", style: g.retryText }, f), r.createElement(c.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const g = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        562041: (e, t, n) => {
            n.d(t, { G: () => s });
            var r = n(202784),
                l = n(400752),
                a = n(565058),
                o = n(708852),
                c = n(403808),
                i = n(811322);
            function s(e) {
                const t = (0, c.r)(e),
                    n = (0, o.tj)(),
                    a = (0, l.b9)(u(t)),
                    i = (0, l.b9)(d);
                return r.useEffect(() => () => i(), [i]), { ref: n ? void 0 : a };
            }
            const u = (0, i.X)((e) =>
                    (0, a.cn)(null, (t, n, r) => {
                        const l = r?.parentElement;
                        if (l && l instanceof HTMLElement) {
                            n(d);
                            const t = n(f(e), l);
                            n(m, { fn: t });
                        }
                    }),
                ),
                d = (0, a.cn)(null, (e, t) => {
                    t(m, (e) => {
                        e && e.fn();
                    });
                }),
                m = (0, a.cn)(),
                f = (0, i.X)((e) =>
                    (0, a.cn)(null, (t, n, r) => {
                        let l = null,
                            a = null,
                            o = null,
                            c = null;
                        function i(e) {
                            const { touches: t } = e;
                            if (1 !== t.length) return;
                            if (!(e.target instanceof HTMLElement)) return;
                            if (0 !== r.scrollTop) return;
                            const [n] = t;
                            l = n.clientY;
                        }
                        function s(e) {
                            if (null === l) return;
                            const { touches: t } = e;
                            if (0 !== r.scrollTop) return void d();
                            const [n] = t;
                            null !== a && (c = n.clientY > a), (a = n.clientY);
                            const i = n.clientY - l;
                            e.preventDefault(), i > 0 ? ((o = i), (r.style.transform = `translateY(${i}px)`)) : ((o = 0), (r.style.transform = ""));
                        }
                        function u(t) {
                            if (c && o) {
                                if ("animate" in r) {
                                    r.animate([{ transform: `translateY(${o}px)` }, { transform: "translateY(100%)" }], { duration: 200 }).onfinish = e;
                                } else e?.();
                                r.style.transform = "translateY(100%)";
                            } else o && ("animate" in r && r.animate([{ transform: `translateY(${o}px)` }, { transform: "translateY(0)" }], { duration: 200 }), (r.style.transform = ""));
                            d();
                        }
                        function d() {
                            (l = null), (a = null), (c = null), (o = null);
                        }
                        return (
                            r.addEventListener("touchstart", i),
                            r.addEventListener("touchmove", s),
                            r.addEventListener("touchend", u),
                            () => {
                                r.removeEventListener("touchstart", i), r.removeEventListener("touchmove", s), r.removeEventListener("touchend", u);
                            }
                        );
                    }),
                );
        },
        703286: (e, t, n) => {
            n.d(t, { p: () => s });
            var r = n(42134),
                l = n(994775),
                a = n(526250),
                o = n(4427),
                c = n(688327),
                i = n(712612);
            const s = (0, a.v)((e, t) => {
                const n = { "shift+right": () => u(), "shift+left": () => u(-1) },
                    a = e(o.fJ)
                        ? {
                              ...n,
                              "shift+f8": () => t(i.Dy, (e) => !e),
                              "shift+f1": () => {
                                  const n = e(r.rm);
                                  n && t(c.R, n);
                              },
                          }
                        : n,
                    s = [...document.querySelectorAll("input")],
                    d = [(0, l.Z)(a), ...s.map((e) => (0, l.Z)(a, e))];
                return () => {
                    d.forEach((e) => e());
                };
            });
            function u(e = 1) {
                const t = [...document.querySelectorAll("input, button, textarea, a[href]")].filter((e) => -1 !== e.tabIndex),
                    n = t.indexOf(document.activeElement);
                if (-1 === n) return void t[0]?.focus();
                const r = t[n + e];
                r?.focus();
            }
        },
        741881: (e, t, n) => {
            n.d(t, { d: () => o });
            var r = n(565058),
                l = n(741810),
                a = n(163889);
            (0, r.cn)((e) =>
                l.E.getScheduledSpaces().then((e) => {
                    if (e?.broadcasts && 0 !== e.broadcasts?.length) return e.broadcasts.sort((e, t) => (new Date(e.broadcast.scheduled_start || 0) > new Date(t.broadcast.scheduled_start || 0) ? 1 : -1)), e.broadcasts;
                }),
            );
            const o = (0, r.cn)((e) =>
                l.E.myConferences().catch((e) => {
                    (0, a.ZP)(e);
                }),
            );
        },
        660812: (e, t, n) => {
            n.d(t, { R: () => a });
            var r = n(565058),
                l = n(427266);
            const a = (e) => {
                const t = (0, r.cn)(),
                    n = (0, r.cn)(null, (n, r, ...l) => {
                        const a = n(t);
                        if (a) return a;
                        const o = e(n, r, ...l);
                        return (
                            o instanceof Promise &&
                                (r(t, o),
                                o.finally(() => {
                                    r(t, void 0);
                                })),
                            o
                        );
                    }),
                    a = (0, l.mZ)(n);
                return (a.isLoading = (0, r.cn)((e) => !!e(t))), a;
            };
        },
        965728: (e, t, n) => {
            n.d(t, { C_: () => h, I5: () => p, K2: () => g, L$: () => s, Rb: () => E, nk: () => f, sI: () => Z, xr: () => b });
            var r = n(202784),
                l = n(483677),
                a = n(782578),
                o = n(393058),
                c = n(521514);
            const i = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                s = (e) => {
                    const t = e && l.Z.getForGallery(e);
                    return t ? { rgb: b(t), rgba: i(t, 0.9) } : m;
                },
                u = c.Z.columnWidths.primary,
                d = (e, t) => Math.min(t, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                f = { transitionProperty: "background-color", transitionDuration: ".5s" },
                p = (e, t) => {
                    const { containerHeight: n, containerWidth: r, mediaHeight: l, mediaWidth: o } = e,
                        c = o && l ? o / l : 1,
                        i = c > 1,
                        s = t ? 400 : u,
                        m = i && (!o || o <= s) ? d(r, s) : r,
                        f = i || (l && !(l <= s)) ? n : d(n, s);
                    return a.Z.getContainDimensions({ width: m, height: f }, c);
                },
                E = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return s(t);
                },
                g = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return s(t);
                },
                h = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return s(t);
                },
                b = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                v = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                Z = () => {
                    const [e, t] = r.useReducer(v, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            o.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        16222: (e, t, n) => {
            function r(e, t) {
                try {
                    return e();
                } catch (e) {
                    return t(e);
                }
            }
            n.d(t, { o: () => r });
        },
        772544: (e, t, n) => {
            function r() {
                if ("wakeLock" in navigator) return navigator.wakeLock;
            }
            n.d(t, { s: () => r });
        },
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
        111296: (e, t, n) => {
            n.r(t), n.d(t, { default: () => or });
            var r = n(807896),
                l = n(202784),
                a = n(400752),
                o = n(565058),
                c = n(987809),
                i = n(325686),
                s = n(107267),
                u = n(731708),
                d = n(776342),
                m = n(167630),
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
                _ = n(582129),
                I = n(136397),
                R = n(139613),
                H = n(41931),
                M = n(4427),
                z = n(790997),
                L = n(758614),
                $ = n(712612),
                F = n(895229),
                B = n(509599),
                T = n(403808);
            var j = n(520197),
                W = n(309487),
                Y = n(934871),
                Q = n(565235),
                O = n(251067),
                A = n(340905);
            function V() {
                if (!(0, O.fH)(O.vw.prod)) return l.createElement(g.ZP, { icon: G, link: "https://twitter.enterprise.slack.com/archives/C07SWM2DKKL" }, "Feedback");
            }
            const G = l.createElement(A.default, null);
            var J = n(901832),
                q = n(660812),
                N = n(108922),
                K = n(625555);
            const U = (0, o.cn)((e) => e(e(X)) ?? e(ee)),
                X = (0, o.cn)((e) => (e(M.sB), (0, N.J)(9e4))),
                ee = (0, o.cn)((e) => (e(B.jQ), e(B.jQ.resolved)?.is_recording_rn)),
                te = (0, q.R)((e, t) => {
                    const n = e(M.sB);
                    if (!n) return;
                    const r = !e(U),
                        l = e(X);
                    return e(K.F6)
                        .recordConference(n, r)
                        .then(() => {
                            t(l, r);
                        });
                });
            var ne = n(396963);
            function re() {
                return (0, a.Dv)(U) ? l.createElement(J.Vs, null) : null;
            }
            function le() {
                const e = (0, ne.nY)();
                return (0, a.Dv)(ae) ? l.createElement(g.ZP, { link: `/i/conferences/${e}/recordings` }, "View recordings") : null;
            }
            const ae = (0, o.cn)((e) => (e(B.jQ), e(B.jQ.resolved)?.recording_urls));
            var oe = n(441737),
                ce = n(292627),
                ie = n(708852),
                se = n(537392),
                ue = n(138099),
                de = n(530732),
                me = n(813751),
                fe = n(715601),
                pe = n(42134),
                Ee = n(869508),
                ge = n(106006),
                he = n(595561),
                be = n(645903),
                ve = n(947433),
                Ze = n(562041),
                ye = n(359127),
                xe = n(526250),
                Ce = n(645708),
                we = n(251836),
                De = n(811233),
                Pe = n(250265),
                ke = n(310088),
                Se = n(194661),
                _e = n(98440),
                Ie = n(323265),
                Re = n(933794),
                He = n(94751),
                Me = n(23425);
            const ze = Ie.ZP.isMac() ? " (⌘+ctrl+c)" : Ie.ZP.isDesktopOS() ? " (ctrl+alt+c)" : "",
                Le = { label: `Chat${ze}` },
                $e = l.createElement(Se.default, null),
                Fe = l.createElement(_e.default, null),
                Be = l.createElement(Te, null);
            function Te() {
                const e = (0, a.Dv)(Me.xK),
                    t = (0, a.Dv)(He.Fz);
                return l.createElement(i.Z, null, e ? Fe : $e, t && !e && l.createElement(ke.Z, { pip: !0, style: We.badge, unreadCountLabel: () => "" }));
            }
            function je() {
                const e = (0, a.Dv)(Me.xK),
                    t = (0, a.b9)(Me.hc),
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
                    o = l.createElement(g.ZP, { "aria-label": "Chat", borderColor: "transparent", color: "text", hoverLabel: Le, icon: Be, onPress: n, size: "large", type: e ? "primaryFilled" : "primaryOutlined" });
                return l.createElement(Re.Z, { children: o, handlers: r });
            }
            const We = b.default.create((e) => ({ badge: { end: -e.spacesPx.space2 } }));
            var Ye = n(502608),
                Qe = n(297896);
            const Oe = "Leave conference",
                Ae = { label: Oe, preferredVerticalOrientation: "up" },
                Ve = l.createElement(Qe.default, null);
            function Ge({ children: e }) {
                const t = (0, _.zr)(),
                    n = (0, ne.aQ)(),
                    r = l.useCallback(() => {
                        t(n);
                    }, [t, n]);
                return l.createElement(g.ZP, { "aria-label": Oe, children: e, hoverLabel: Ae, icon: Ve, onPress: r, size: "large", type: "destructiveFilled" });
            }
            var Je = n(977419),
                qe = n(588441),
                Ne = n(447854),
                Ke = n(536387),
                Ue = (n(136728), n(476984)),
                Xe = n.n(Ue);
            function et(e) {
                const t = (0, a.Dv)(nt);
                return (n) => {
                    n ? t.set(e, n) : t.delete(e);
                };
            }
            function tt(e) {
                const t = (0, a.b9)(lt),
                    n = (0, a.b9)(at);
                return (
                    ot(() => {
                        t();
                    }, [n, e]),
                    l.useLayoutEffect(() => {
                        n();
                    }, [n, e]),
                    e
                );
            }
            const nt = (0, o.cn)(() => new Map()),
                rt = (0, o.cn)(),
                lt = (0, o.cn)(null, (e, t) => {
                    if (e(rt)) return;
                    const n = e(nt),
                        r = [],
                        l = new Map();
                    for (const [e, t] of n.entries()) document.body.contains(t) ? (l.set(e, t.getBoundingClientRect()), t.getAnimations().forEach((e) => e.cancel())) : r.push(e);
                    r.forEach((e) => n.delete(e)), t(rt, l);
                }),
                at = (0, o.cn)(null, (e, t) => {
                    const n = e(nt),
                        r = e(rt);
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
                        t(rt, void 0);
                    }
                });
            function ot(e, t) {
                const n = l.useRef(t);
                Xe()(n.current, t) || e(), (n.current = t);
            }
            var ct = n(458884),
                it = n(64634),
                st = n(34540),
                ut = n.n(st),
                dt = n(822240);
            function mt({ h: e, n: t, w: n, ...r }) {
                const { nc: l } = r;
                return Math.min(n / l, ((e / Math.ceil(t / l)) * 16) / 9);
            }
            var ft = n(75629),
                pt = n(60089),
                Et = n(826868);
            function gt() {
                const e = (0, pe.rx)(),
                    t = (0, ie.Ji)(),
                    n = (0, a.Dv)(Ce.Lv);
                return l.createElement(i.Z, { style: xt.row }, l.createElement(i.Z, { style: xt.flex }, l.createElement(qe.Z, { style: xt.videosContainer }, l.createElement(ht, null)), e && l.createElement(Ne.Z, { audioSpaceId: e, height: 150 }), l.createElement(Et.W, null)), l.createElement(ce.Z.Modal, null, l.createElement(ft.F, null)), t && !n && l.createElement(ct.C, null), l.createElement(it.h, null), l.createElement(i.Z, { style: xt.bottomStart }, l.createElement(Pe.xG, null)));
            }
            function ht() {
                const e = (0, a.Dv)(z.r1),
                    t = e.length + 1,
                    n = tt(
                        (0, se.Zx)(({ containerHeight: e, containerWidth: n }) =>
                            (function ({ h: e, n: t, w: n }) {
                                return Math.max(Math.min(t, Math.floor(n / 160) * Math.floor(e / 90)), 1);
                            })({ n: t, w: n, h: e }),
                        ),
                    ),
                    r = (0, a.Dv)((0, z.l5)(n)),
                    o = tt(
                        (0, se.Zx)(({ containerHeight: e, containerWidth: t }) =>
                            (function ({ h: e, n: t, w: n }) {
                                if (2 === t) return 1;
                                const r = Math.ceil(Math.sqrt(t)),
                                    l = n / e,
                                    a = 16 / 9;
                                if (l > a) {
                                    const l = ut()(
                                        (0, dt.Z)(1, r + 1).map((r) => ({ count: r, value: mt({ n: t, w: n, h: e, nc: Math.ceil(t / r) }) })),
                                        ({ value: e }) => e,
                                    )?.count;
                                    return l ? Math.ceil(t / l) : r;
                                }
                                return l < a
                                    ? (ut()(
                                          (0, dt.Z)(1, r + 1).map((r) => ({ count: r, value: mt({ n: t, w: n, h: e, nc: r }) })),
                                          ({ value: e }) => e,
                                      )?.count ?? r)
                                    : r;
                            })({ n, w: t, h: e }),
                        ),
                    ),
                    c = 1 === r.length ? 1 : r.length + 1,
                    s = Math.ceil(c / o),
                    u = { gridTemplateColumns: `repeat(${o}, 1fr)`, aspectRatio: `${16 * o} / ${9 * s}` },
                    d = (0, se.Zx)(({ containerHeight: e, containerWidth: t }) => ((16 * o) / (9 * s) >= t / e ? xt.fullWidth : xt.fullHeight));
                return l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                        i.Z,
                        { style: [xt.videos, u, d] },
                        r.map((e) => l.createElement(yt, { feedId: e, key: e })),
                        n > 2 && n !== t && l.createElement(bt, { allFeeds: e, feedIds: r }),
                        1 !== r.length && l.createElement(Zt, null),
                    ),
                    1 === r.length && l.createElement(Zt, null),
                );
            }
            function bt(e) {
                const { avatarUrls: t, count: n } = (function ({ allFeeds: e, feedIds: t }) {
                    const n = new Set(t),
                        r = e.filter((e) => !n.has(e)),
                        l = (0, Ke.xO)(),
                        a = (0, Z.Z)(r, (e) => l.get((0, ne.pB)(e)));
                    return { avatarUrls: a, count: r.length };
                })(e);
                return l.createElement(i.Z, { style: xt.overflowContainer }, l.createElement(p.Z, { userAvatarUrls: t }), l.createElement(u.ZP, null, "+", n, " others"));
            }
            const vt = (0, o.cn)((e) => 1 === e(z.r1).length);
            function Zt() {
                const e = (0, a.Dv)(vt),
                    t = et();
                return l.createElement(i.Z, { ref: t, style: e ? xt.hover : xt.videoContainer }, l.createElement(pt.Ou, { isListSafe: e }));
            }
            function yt({ feedId: e }) {
                const t = (0, ne.Ou)(e),
                    n = (0, ne.CO)(e),
                    r = et(e);
                return l.createElement(i.Z, { ref: r, style: xt.videoContainer }, l.createElement(pt.nA, { feedId: e, userAvatar: t, userName: n }));
            }
            const xt = b.default.create((e) => ({ videoContainer: { aspectRatio: "16 / 9", maxWidth: "100%" }, overflowContainer: { contain: "paint", justifyContent: "center", alignItems: "center", aspectRatio: "16/9", backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large, maxWidth: "100%" }, flex: { flexGrow: 1, flexShrink: 1 }, videosContainer: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, videos: { flexShrink: 1, display: "grid", margin: "auto", rowGap: e.spaces.space8, columnGap: 4.5 * e.scaleMultiplier, paddingHorizontal: e.spaces.space8, paddingVertical: 4.5 * e.scaleMultiplier }, hover: { position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16, width: "25%", boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large }, bottomStart: { bottom: e.spaces.space16, start: e.spaces.space16, position: "fixed" }, row: { flexDirection: "row", flexGrow: 1, flexShrink: 1 }, fullWidth: { width: "100%" }, fullHeight: { height: "100%" } }));
            var Ct = n(529356),
                wt = n(47086),
                Dt = n(254810);
            function Pt({ children: e }) {
                const t = (0, Dt.LK)(),
                    n = (0, a.Dv)(Dt.vl.resolved),
                    r = (0, a.Dv)(Dt.jq);
                return t ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Kt.badgeContainer }, l.createElement(Mt, null))) : n && !n.length ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Kt.badgeContainer }, l.createElement(Ft, null))) : r ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Kt.badgeContainer }, l.createElement(Wt, null))) : e;
            }
            function kt(e) {
                const { interstitialHeadline: t, interstitialSubtext: n, label: r } = e,
                    a = l.useMemo(() => ({ label: r, preferredVerticalOrientation: "up" }), [r]),
                    [o, c] = l.useState(!1);
                return l.createElement(l.Fragment, null, l.createElement(g.ZP, { "aria-label": r, hoverLabel: a, icon: Ut, onPress: () => c(!0), style: Kt.badge, type: "primaryText" }), o && l.createElement(Ct.Z, { actionLabel: _t, enableMaskForDismiss: !0, headline: t, onAction: () => c(!1), onClose: () => c(!1), subtext: n }));
            }
            const St = "Permission denied",
                _t = "Dismiss",
                It = "Your microphone permission is denied.",
                Rt = "Please enable your microphone in your browser settings",
                Ht = "Please enable your microphone in your browser settings. This can be found by clicking the control button to the left of the address bar.";
            function Mt() {
                return l.createElement(kt, { interstitialHeadline: It, interstitialSubtext: Ie.ZP.isChrome() ? Ht : Rt, label: St });
            }
            const zt = "No microphone found",
                Lt = "You don't have a microphone connected.",
                $t = "Please connect a microphone to your device speak in this conference.";
            function Ft() {
                return l.createElement(kt, { interstitialHeadline: Lt, interstitialSubtext: $t, label: zt });
            }
            const Bt = "No microphone audio detected",
                Tt = "No microphone audio detected.",
                jt = "Please check if your microphone or your system audio is not muted or switch to a different microphone.";
            function Wt() {
                return l.createElement(kt, { interstitialHeadline: Tt, interstitialSubtext: jt, label: Bt });
            }
            function Yt({ children: e }) {
                const t = (0, Y.rW)(),
                    n = (0, a.Dv)(Y.cf.resolved);
                return t ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Kt.badgeContainer }, l.createElement(Vt, null))) : n && !n.length ? l.createElement(i.Z, null, e, l.createElement(i.Z, { style: Kt.badgeContainer }, l.createElement(Nt, null))) : e;
            }
            const Qt = "Your camera permission is denied.",
                Ot = "Please enable your camera in your browser settings",
                At = "Please enable your camera in your browser settings. This can be found by clicking the control button to the left of the address bar.";
            function Vt() {
                return l.createElement(kt, { interstitialHeadline: Qt, interstitialSubtext: Ie.ZP.isChrome() ? At : Ot, label: St });
            }
            const Gt = "No camera found",
                Jt = "You don't have a camera connected",
                qt = "Please connect a camera to your device show present in this conference";
            function Nt() {
                return l.createElement(kt, { interstitialHeadline: Jt, interstitialSubtext: qt, label: Gt });
            }
            const Kt = b.default.create((e) => ({ badgeContainer: { pointerEvents: "none", position: "absolute", inset: 0, transform: "rotate(45deg) translateY(-50%) rotate(-45deg)", alignItems: "center", justifyContent: "center" }, badge: { pointerEvents: "auto" }, badgeIcon: { color: e.colors.yellow500, backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.infinite }, chromeHelp: { position: "fixed", top: 0, start: 0, padding: e.spaces.space16, backgroundColor: e.colors.unreadCellBackground, borderRadius: e.borderRadii.medium } })),
                Ut = l.createElement(wt.default, { style: Kt.badgeIcon });
            var Xt = n(149170),
                en = n(684869),
                tn = n(503195),
                nn = n(430895),
                rn = n(941563),
                ln = n(136483),
                an = n(72591),
                on = n(413522),
                cn = n(521799),
                sn = n(910245),
                un = n(835515),
                dn = n(280859),
                mn = n(122411);
            const fn = { label: "More" },
                pn = l.createElement(Xt.default, null);
            function En() {
                return (0, dn.Nt)(), l.createElement(i.Z, null, l.createElement(g.ZP, { hoverLabel: fn, icon: pn, renderMenu: gn, size: "large" }));
            }
            const gn = (e) => l.createElement(hn, { onClose: e });
            function hn({ onClose: e }) {
                const t = [bn(), (0, ve.c)(), vn(), Zn(), yn(), xn(), Cn(), ...wn()].filter(Boolean);
                return l.createElement(h.Z, { items: t, onCloseRequested: e, preferredHorizontalOrientation: "right", shouldCloseOnClick: !0 });
            }
            function bn() {
                return (0, dn.Nt)()
                    ? {
                          Icon: en.default,
                          text: "Enable push notifications",
                          onClick: () => {
                              (0, dn.ZK)();
                          },
                      }
                    : void 0;
            }
            function vn() {
                const e = (0, ne.aQ)(),
                    t = (0, sn.q)({ audioSpaceId: e });
                return { Icon: t.Icon, text: t.label, onClick: t.onPress };
            }
            function Zn() {
                const e = (0, ie.Ji)(),
                    t = (0, a.b9)(Me.em);
                if (!e) return { Icon: nn.default, text: "Participants", onClick: t };
            }
            function yn() {
                const e = (0, ie.Ji)(),
                    t = (0, a.b9)(Me.hc);
                if (!e) return { Icon: Se.default, text: "Chat", onClick: () => t() };
            }
            function xn() {
                const e = (0, a.b9)(Me.yu);
                return { Icon: rn.default, text: "Settings", onClick: e };
            }
            function Cn() {
                const e = (0, a.Dv)(B.p5),
                    t = (0, a.Dv)(U),
                    n = (0, a.b9)(te),
                    r = l.useCallback(() => {
                        n();
                    }, [n]);
                if (e) return { Icon: ln.default, text: t ? "Stop recording" : "Start recording", onClick: r, isEmphasized: t };
            }
            function wn() {
                const [e, t] = (0, a.KO)(Pe.yP),
                    n = l.useCallback(() => {
                        t((e) => !e);
                    }, [t]),
                    r = (function () {
                        const [e, t] = (0, a.KO)(un.Z4);
                        if ((0, mn.Jg)()) return { Icon: tn.default, text: e ? "Disable stereo audio" : "Enable stereo audio", onClick: () => t() };
                    })();
                return (0, O.fH)(O.vw.prod) ? [] : [r, { Icon: an.default, text: "Debug", onClick: cn.yu }, { Icon: on.default, text: e ? "Hide stats" : "View stats", onClick: n }];
            }
            const Dn = "Participants",
                Pn = { label: Dn },
                kn = l.createElement(nn.default, null);
            function Sn() {
                const e = (0, a.Dv)(Me.XQ),
                    t = (0, a.b9)(Me.em);
                return l.createElement(g.ZP, { "aria-label": Dn, borderColor: "transparent", color: "text", hoverLabel: Pn, icon: kn, onPress: t, size: "large", type: e ? "primaryFilled" : "primaryOutlined" });
            }
            var _n = n(217220);
            const In = { label: "Raise hand", preferredVerticalOrientation: "up" };
            function Rn() {
                const { raisedHandEmoji: e, toggleRaiseHand: t } = (0, _n.sv)();
                return l.createElement(g.ZP, { hoverLabel: In, icon: Mn, onPress: t, size: "large", type: e ? "primaryFilled" : void 0 });
            }
            const Hn = b.default.create((e) => ({ raiseHandIcon: { filter: `drop-shadow(0 0 2px ${e.colors.hoverLabelColor})` } })),
                Mn = l.createElement(u.ZP, { size: "headline2", style: Hn.raiseHandIcon }, "✋");
            var zn = n(970197),
                Ln = n(115307),
                $n = n(173739),
                Fn = n(40904),
                Bn = n(391366);
            function Tn() {
                const [e, t] = (0, a.KO)(un.lV);
                return l.createElement($n.Z, { "aria-label": "Volume", max: 1.2, maxIcon: Wn, min: 0, minIcon: jn, onChange: t, step: 0.1, value: e });
            }
            const jn = l.createElement(Fn.default, null),
                Wn = l.createElement(Bn.default, null),
                Yn = l.memo(() => {
                    const e = (0, pe.rx)(),
                        t = (0, a.Dv)(Ce.vM);
                    (0, Ce._3)();
                    const n = (0, De.gt)();
                    return l.createElement(ce.Z.Modal, null, e && l.createElement(ge.ConferenceBehaviors, { audioSpaceId: e }), l.createElement(Jn, null), l.createElement(i.Z, { style: ar.fullscreen }, t ? l.createElement(On, { dpipWindow: t }) : n ? l.createElement(An, null) : l.createElement(Qn, null), l.createElement(qn, null)));
                });
            function Qn() {
                const e = (0, ie.Ji)(),
                    t = (0, se.Zx)(({ windowWidth: e }) => e > 1100 * b.default.theme.scaleMultiplier),
                    n = (0, pe.rx)(),
                    r = (0, a.Dv)(H.v);
                return l.createElement(l.Fragment, null, l.createElement(Un, null), l.createElement(l.Fragment, null, !e && l.createElement(tr, null), l.createElement(i.Z, { style: ar.row }, l.createElement(i.Z, { style: ar.filler }, e && l.createElement(tr, null)), l.createElement(i.Z, { style: ar.controls }, !r && l.createElement(zn.n, null, l.createElement(Pt, null, l.createElement(Nn, null))), l.createElement(zn.Z, null, l.createElement(Yt, null, l.createElement(P.t, null))), l.createElement(ve.v, null), l.createElement(Rn, null), n && l.createElement(be.Y, { audioSpaceId: n }), l.createElement(En, null), l.createElement(Ge, null)), l.createElement(i.Z, { style: ar.controlsEnd }, e && l.createElement(l.Fragment, null, t && l.createElement(V, null), l.createElement(Sn, null), l.createElement(je, null), l.createElement(i.Z, null)), l.createElement(i.Z, null))), l.createElement(Xn, null)));
            }
            function On({ dpipWindow: e }) {
                const t = (0, a.Dv)(H.v);
                return l.createElement(ye.ZQ, { dpipWindow: e }, l.createElement(i.Z, { style: ar.portal }, l.createElement(Un, null), l.createElement(i.Z, { style: ar.controls }, !t && l.createElement(Nn, null), l.createElement(P.t, null), l.createElement(ve.v, null), l.createElement(Rn, null), l.createElement(Ge, null))));
            }
            function An() {
                const e = (0, a.Dv)(F.p_),
                    t = (0, a.Dv)(F.lY);
                return e ? l.createElement(Vn, null) : t ? l.createElement(Gn, null) : l.createElement(Qn, null);
            }
            function Vn() {
                return l.createElement(l.Fragment, null, l.createElement(Un, null), l.createElement(tr, null));
            }
            function Gn() {
                const e = (0, ne.nY)();
                return l.createElement(l.Fragment, null, l.createElement(i.Z, { style: ar.roomHeader }, l.createElement(u.ZP, { size: "headline1" }, l.createElement(Ln.q, null)), l.createElement(i.Z, { style: ar.bar }), l.createElement(u.ZP, { size: "headline1" }, l.createElement(er, null)), l.createElement(i.Z, { style: ar.bar }), l.createElement(u.ZP, { color: "gray900", size: "headline2" }, e), l.createElement(i.Z, { style: ar.spacer }), l.createElement(Ge, null, "End conference")), l.createElement(i.Z, { style: ar.row }, l.createElement(i.Z, { style: ar.participants }, l.createElement(fe.Z, { style: ar.viewportView }, l.createElement(he.q, null))), l.createElement(i.Z, { style: ar.fill }, l.createElement(i.Z, { style: ar.roomControlsRow }, l.createElement(zn.n, null, l.createElement(Nn, null)), l.createElement(zn.Z, null, l.createElement(P.t, null)), l.createElement(Rn, null)), l.createElement(i.Z, { style: ar.roomControls }, l.createElement(Tn, null)))));
            }
            function Jn() {
                return (
                    (0, Pe.MC)(),
                    (function () {
                        const e = (0, a.oR)(),
                            t = (0, ne.aQ)();
                        l.useEffect(() => {
                            let n = !0;
                            return (
                                e.get((0, B.sJ)(t)).then((t) => {
                                    n && (0, Ee.aF)(t, e);
                                }),
                                () => {
                                    (n = !1), (0, Ee.zP)(e);
                                }
                            );
                        }, [t, e]);
                    })(),
                    (0, I.ZJ)(),
                    (0, I.D0)(),
                    (function () {
                        const e = (0, _.zr)(),
                            t = (0, ne.aQ)();
                        lr.useEffect(
                            l.useCallback(
                                () => () => {
                                    e(t);
                                },
                                [e, t],
                            ),
                        );
                    })(),
                    (0, Ce.bq)(),
                    (0, xe.N)(B.qH),
                    null
                );
            }
            function qn() {
                const e = (0, _.ts)(),
                    t = (0, a.Dv)(F.Fn);
                return !e || t ? null : l.createElement(i.Z, { style: ar.coverAll }, l.createElement(m.Z, null));
            }
            function Nn() {
                const e = (0, ne.aQ)();
                return l.createElement(k.ZP, { audioSpaceId: e });
            }
            const Kn = (0, o.cn)((e) => !!e(z.B$) || !!e(we.mb) || void 0 !== e(z.kD));
            function Un() {
                const e = (0, a.Dv)(Kn),
                    t = (0, ie.Ji)();
                return e || !t ? l.createElement(Je._x, null) : l.createElement(gt, null);
            }
            function Xn() {
                const e = (0, ie.Ji)(),
                    t = (0, a.Dv)(Me.T1),
                    n = (0, a.b9)(Me.X6),
                    { ref: r } = (0, Ze.G)(() => {
                        n();
                    });
                return e || !t ? null : l.createElement(ue.Z, { enableMaskForDismiss: !0, onMaskClick: n, type: "bottom", withMask: !0 }, l.createElement(i.Z, { ref: r }, l.createElement(i.Z, { style: ar.sheetDragIndicator }), l.createElement(Ye.k, null)));
            }
            function er() {
                const e = (0, ne.nY)(),
                    t = (0, M.pv)(e);
                return (0, B.Ix)(t) ?? e;
            }
            function tr() {
                return l.createElement(i.Z, { style: ar.titleContainer }, l.createElement(u.ZP, { size: "headline1" }, l.createElement(er, null)), l.createElement(re, null), l.createElement(rr, null));
            }
            const nr = { label: "Companion mode" };
            function rr() {
                return (0, a.Dv)(H.v) ? l.createElement(de.Z, { hoverLabel: nr }, l.createElement(me.default, null)) : null;
            }
            const lr = (0, j.A6)(),
                ar = b.default.create((e) => ({ fullscreen: { position: "fixed", inset: 0, backgroundColor: e.colors.navigationBackground }, filler: { flexGrow: "1", flexBasis: "1px" }, controlsEnd: { flexGrow: "1", flexBasis: "1px", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 }, controls: { flexDirection: "row", justifyContent: "center", padding: e.spaces.space8, gap: e.spaces.space16, alignSelf: "center" }, titleContainer: { paddingTop: e.spaces.space16, paddingStart: e.spaces.space16, flexDirection: "row", gap: e.spaces.space8, alignItems: "center" }, coverAll: { position: "fixed", inset: 0, backgroundColor: e.colors.maskColor, justifyContent: "center" }, portal: { height: "100%" }, spacer: { flexGrow: 1 }, bar: { borderStartWidth: e.borderWidths.small, borderStartColor: e.colors.gray500, borderStartStyle: "solid", height: "1em" }, row: { flexDirection: "row" }, roomHeader: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center", paddingStart: e.componentDimensions.gutterHorizontal }, roomControlsRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, flexDirection: "row", gap: e.spaces.space8 }, roomControls: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, participants: { width: "60%" }, fill: { flexGrow: 1 }, viewportView: { flexGrow: 1, flexShrink: 1, overflowX: "hidden", overflowY: "auto" }, sheetDragIndicator: { width: 35 * e.scaleMultiplier, height: 5 * e.scaleMultiplier, borderRadius: 2.5 * e.scaleMultiplier, backgroundColor: e.colors.gray50, margin: 6 * e.scaleMultiplier, alignSelf: "center" } }));
            function or(e) {
                (0, w.b)(), (0, M.bu)(), (0, W.W)(), (0, R.AE)(), (0, $.R2)(), (0, Q.z)();
                const t = (0, ne.nY)();
                return (0, M.rK)(t), l.createElement(x.X, null, l.createElement(cr, null));
            }
            function cr() {
                return (0, M.MM)() ? l.createElement(ir, null) : l.createElement(Sr, null);
            }
            function ir() {
                const e = (0, a.Dv)(M.fJ),
                    t = (0, ne.aQ)(),
                    n = (0, B.zX)(t);
                return (0, B.d3)(t), (0, M.Uk)(), n ? (n.state !== d.default.SpaceState.Running && n.state !== d.default.SpaceState.TimedOut ? l.createElement(i.Z, { style: Mr.root }, l.createElement(u.ZP, null, "Conference is not running. It is ", n.state, ".")) : e ? l.createElement(Yn, null) : l.createElement(sr, null)) : l.createElement(i.Z, { style: Mr.root }, l.createElement(u.ZP, null, "Conference not found"));
            }
            const sr = l.memo(function () {
                !(function () {
                    const e = (0, a.Dv)(F.Fn),
                        t = (0, s.useHistory)();
                    l.useEffect(() => {
                        e && t.replace("/i/conferences-room");
                    }, [t, e]);
                })();
                const e = (0, ne.aQ)(),
                    t = (0, a.Dv)((0, B.ZO)(e));
                return (0, a.Dv)(H.v) ? l.createElement(ur, null) : t ? l.createElement(i.Z, { style: Mr.normalRoot }, l.createElement(i.Z, { style: Mr.extraRow }, l.createElement(le, null), l.createElement(V, null)), l.createElement(i.Z, { style: Mr.centered }, l.createElement(re, null), l.createElement(mr, null), l.createElement(pr, null))) : l.createElement(gr, null);
            });
            function ur() {
                const e = (0, ne.aQ)(),
                    t = (0, a.b9)(yr(e));
                return (
                    l.useEffect(() => {
                        t();
                    }, [t]),
                    l.createElement(m.Z, null)
                );
            }
            function dr() {
                return l.createElement(k.E$, null);
            }
            function mr() {
                const e = (0, ne.aQ)(),
                    t = (0, B.lw)(e),
                    { speakers: n } = t.participants,
                    r = (0, Z.Z)(n, ({ avatar_url: e }) => e).slice(0, 20),
                    a = n.slice(0, 2).map(({ display_name: e, highlightedLabel: t, is_blue_verified: n, user_id: r }, a) => l.createElement(f.Z, { affiliateBadgeInfo: t, isBlueVerified: n, key: a, name: e })),
                    o = n.length - 2,
                    c = o > 0 ? ` and ${o.toLocaleString()} others` : "",
                    s = `${c} ${c || a.length > 1 ? "are" : "is"} in this conference`;
                return l.createElement(i.Z, { style: Mr.inline }, l.createElement(p.Z, { userAvatarSize: "large", userAvatarUrls: r }), a.length > 0 ? l.createElement(u.ZP, null, l.createElement(E.y, { items: a, skipFormatLast: a.length < n.length }), s) : l.createElement(u.ZP, null, "No one is in this conference"));
            }
            const fr = l.createElement(hr, null);
            function pr({ button: e = fr }) {
                return (
                    (function () {
                        const e = (0, Y._e)(),
                            t = (0, a.b9)($.F3),
                            n = (0, a.b9)(L.M2),
                            r = (0, s.useHistory)();
                        Hr.useEffect(
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
                    l.createElement(i.Z, { style: Mr.videoWrapper }, l.createElement(i.Z, { style: Mr.widescreen }, l.createElement(oe.W.Provider, null, l.createElement(oe.X, { defaultAspectRatio: 16 / 9 }, l.createElement(pt.Ou, null))), l.createElement(i.Z, { style: Mr.controls }, l.createElement(zn.n, null, l.createElement(Pt, null, l.createElement(dr, null))), l.createElement(zn.Z, null, l.createElement(Yt, null, l.createElement(P.t, null))))), l.createElement(i.Z, { style: Mr.joinButtonContainer }, e))
                );
            }
            const Er = "Start watching";
            function gr() {
                const e = (0, a.b9)(_.RB),
                    t = (0, ne.aQ)(),
                    [n, r] = l.useState(!1),
                    o = l.useCallback(() => {
                        e(t), r(!0);
                    }, [e, t]),
                    { config: c } = (0, C.Y)();
                return n ? l.createElement(i.Z, { style: Mr.videoContainer }, l.createElement(i.Z, { style: Mr.videoInnerContainer }, l.createElement(D.Z, c.player()))) : l.createElement(i.Z, { style: Mr.root }, l.createElement(mr, null), l.createElement(i.Z, { style: Mr.joinButtonContainer }, l.createElement(Pr, { onPress: o }, Er)));
            }
            function hr() {
                const e = (0, ne.aQ)();
                return l.createElement(S.P, { renderAtom: br(e) }, (e) => l.createElement(vr, { isLoading: e }));
            }
            const br = (0, c.xu)((e) => (0, o.cn)((t) => Promise.all([t((0, B.CP)(e)), t(z.Hs)])));
            function vr({ isLoading: e }) {
                const t = (0, ne.aQ)(),
                    n = (0, a.b9)(Zr(t)),
                    r = (function (e) {
                        const t = (0, T.r)(e);
                        return l.useCallback(
                            (e) => {
                                t();
                            },
                            [t],
                        );
                    })((0, a.b9)(yr(t))),
                    o = (0, a.b9)(xr(t));
                return !!(0, a.Dv)((0, B.CP)(t).resolved)?.length ? l.createElement(l.Fragment, null, l.createElement(i.Z, { style: Mr.row }, l.createElement(i.Z, null, l.createElement(Pr, { onPress: o }, "Switch")), l.createElement(g.ZP, { icon: l.createElement(v.default, null), renderMenu: Cr, size: "xLarge", style: Mr.dropdownButton, type: "primaryText" })), l.createElement(g.ZP, { onPress: r, style: Mr.companionButton, type: "primaryText" }, "Use companion mode")) : l.createElement(l.Fragment, null, l.createElement(Pr, { disabled: e, onPress: n }, "Enter"), l.createElement(g.ZP, { onPress: r, style: Mr.companionButton, type: "primaryText" }, "Use companion mode"));
            }
            const Zr = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n, r) => {
                        n(_.HQ, e);
                    }),
                ),
                yr = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n) => {
                        n(H.S, !0), n(_.HQ, e);
                    }),
                ),
                xr = (0, c.xu)((e) =>
                    (0, o.cn)(null, (t, n, r) => {
                        n(_.HQ, e), n(B.jm, e);
                    }),
                );
            function Cr(e) {
                return l.createElement(wr, { dismiss: e });
            }
            function wr({ dismiss: e }) {
                const t = (0, ne.aQ)(),
                    n = (0, a.Dv)(Dr(t));
                return l.createElement(h.Z, { items: n, onCloseRequested: e, preferredHorizontalOrientation: "right" });
            }
            const Dr = (0, c.xu)((e) =>
                (0, o.cn)((t) => [
                    {
                        text: "Enter",
                        onClick: (n) => {
                            t(y.zE).set(_.HQ, e), t(y.zE).set(M.fJ, !0), n();
                        },
                    },
                ]),
            );
            function Pr(e) {
                return l.createElement(g.ZP, (0, r.Z)({}, e, { size: "xLarge", type: "brandFilled" }));
            }
            const kr = l.createElement(l.Suspense, { fallback: l.createElement(Ir, null) }, l.createElement(_r, null)),
                Sr = l.memo(function () {
                    return l.createElement(i.Z, { style: Mr.root }, l.createElement(pr, { button: kr }));
                });
            function _r() {
                const e = (0, I._j)();
                return l.createElement(Rr, { onPress: e });
            }
            function Ir() {
                return l.createElement(Rr, { disabled: !0 });
            }
            function Rr(e) {
                return l.createElement(Pr, e, "Ask to join");
            }
            const Hr = (0, j.A6)();
            const Mr = b.default.create((e) => {
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
                d = n(316830),
                m = n(284778);
            function f(e) {
                const t = (0, u.nY)(),
                    n = (0, l.Dv)((0, d.J)(t)) ?? t,
                    { videoContentId: f } = (0, o.useParams)(),
                    p = (0, o.useLocation)(),
                    E = new URLSearchParams(p.search).get("clip_id");
                return E && f ? r.createElement(a.Z, null, r.createElement(c.Z, { size: "space8" }), r.createElement(i.ZP, { size: "title2" }, n, " - Recording"), r.createElement(c.Z, { size: "space16" }), r.createElement(m.x, { clipId: E, contentId: f })) : r.createElement(s.Z, null);
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
                d = n(530732),
                m = n(392237),
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
                const a = (0, l.Dv)(I(e));
                if (!a) return;
                const { clip: o } = a,
                    { created_at: m, end_timecode_millis: f, start_timecode_millis: p } = o,
                    h = f - p,
                    b = [o.clipping_user_id_str && r.createElement(i.ZP, null, "Recorded by ", r.createElement(x, { userId: o.clipping_user_id_str })), m && r.createElement(s.Z, { timestamp: m }), r.createElement(i.ZP, null, H(h))].filter(Boolean).flatMap((e, t) => (0 === t ? e : [r.createElement(u.Z, null), e]));
                return r.createElement(c.Z, { style: R.recordingContainer }, r.createElement(g.Z, { "aria-label": k, aspectRatio: S, displayOptions: _, source: { variants: [], videoId: E.Z.forAudioSpace(o.broadcast_id, t, !1, { clip_id: e }), contentId: t }, videoType: "video" }), r.createElement(d.Z, { link: n, style: R.details }, b));
            }
            const k = p().ac4c73d8,
                S = 16 / 9,
                _ = { objectFitVideo: "contain" },
                I = (0, o.xu)((e) => (0, a.cn)((t) => t(h.F6).getClip(e))),
                R = m.default.create((e) => ({ recordingContainer: { contain: "paint", borderRadius: e.borderRadii.xLarge, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", marginBottom: e.spaces.space16 }, details: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, flexDirection: "row" } }));
            function H(e) {
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
                d = n(316830),
                m = n(284778);
            function f(e) {
                const t = (0, u.nY)(),
                    n = (0, l.Dv)(E(t)) ?? [],
                    a = (0, l.Dv)((0, d.J)(t)) ?? t;
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
                return r.createElement(m.x, { clipId: t, contentId: n, link: a });
            }
            const E = (0, o.xu)((e) => (0, a.cn)((t) => t((0, d.j)(e))?.then(({ recording_urls: e }) => e)));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-e019dbda.6b81e7ba.js.map
