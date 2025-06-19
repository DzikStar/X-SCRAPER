"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-3c20ad5c"],
    {
        730372: (e, t, n) => {
            n.d(t, { $E: () => m, DL: () => d, OR: () => u });
            var o = n(202784),
                a = n(576648);
            let r = !1;
            function s(e) {
                if (e instanceof HTMLElement)
                    if ("A" !== e.tagName || e.dataset.copyPreserve) Array.from(e.children).forEach(s);
                    else {
                        const t = document.createDocumentFragment();
                        for (; e.firstChild; ) t.appendChild(e.firstChild);
                        e.parentNode?.replaceChild(t, e);
                    }
            }
            function c(e, t) {
                const n = window.getComputedStyle(e).fontFamily.toLowerCase(),
                    o = n.includes("mono") || n.includes("courier") || t;
                (e.style.color = "black"), (e.style.backgroundColor = "transparent"), (e.style.fontFamily = o ? "monospace" : "sans-serif"), o && (e.style.fontSize = "10pt"), Array.from(e.children).forEach((e) => c(e, t));
            }
            function l(e, t, n) {
                const o = e.getElementsByClassName(t);
                Array.from(o).forEach((e) => {
                    e.style.display = n;
                });
            }
            function i(e) {
                let t = !0,
                    n = e?.cloneNode(!0);
                const o = window.getSelection();
                if (!n && o && o.rangeCount > 0) {
                    const e = o.getRangeAt(0).cloneContents(),
                        t = document.createElement("div");
                    t.appendChild(e), (n = t);
                }
                if (!n) return [!1, "", ""];
                l(n, "katex", "none"), l(n, "raw_katex", "inline"), l(n, "raw_katex_block", "block"), l(n, "omit-from-copy", "none");
                const a = document.createElement("div");
                (a.style.backgroundColor = "white"), a.appendChild(n), document.body.appendChild(a), s(n), c(n);
                const r = document.createRange();
                r.selectNodeContents(n);
                const i = window.getSelection(),
                    d = i.rangeCount ? i.getRangeAt(0) : null;
                i.removeAllRanges(), i.addRange(r);
                try {
                    document.execCommand("copy");
                } catch (e) {
                    t = !1;
                }
                const u = h(a).replace(/(\r\n|\n){3,}/g, (e) => e.slice(0, e.indexOf("\n", e.indexOf("\n") + 1)));
                const m = a.innerHTML;
                return document.body.removeChild(a), d && (i.removeAllRanges(), i.addRange(d)), [t, m, u];
            }
            function d(e, t) {
                r = !0;
                const n = document.createElement("div");
                n.style.backgroundColor = "white";
                const o = document.createElement("div");
                var a;
                (o.innerHTML = `<pre><code class="language-${t}">${((a = e), a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"))}</code></pre>`), c(o, !0), n.appendChild(o), document.body.appendChild(n);
                const s = document.createRange();
                s.selectNodeContents(n);
                const l = window.getSelection(),
                    i = l.rangeCount ? l.getRangeAt(0) : null;
                l.removeAllRanges(), l.addRange(s);
                try {
                    document.execCommand("copy");
                } catch (e) {}
                document.body.removeChild(n), i && (l.removeAllRanges(), l.addRange(i)), (r = !1);
            }
            function u(e, t) {
                r = !0;
                const [n] = i(e);
                !n && t && a.Z.setString(t), (r = !1);
            }
            function m() {
                o.useEffect(() => {
                    const e = (e) => {
                        const t = window.getSelection().rangeCount > 0;
                        if (
                            (e.target instanceof HTMLElement && ("INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName)) ||
                            !t ||
                            r ||
                            (function () {
                                const e = window.getSelection().getRangeAt(0).commonAncestorContainer;
                                let t = e.nodeType === Node.TEXT_NODE ? e.parentElement : e;
                                for (; t; ) {
                                    if ("CODE" === t.tagName || "PRE" === t.tagName) return !0;
                                    t = t.parentElement;
                                }
                                return !1;
                            })() ||
                            (function () {
                                const e = window.getSelection().getRangeAt(0).commonAncestorContainer;
                                let t = e.nodeType === Node.TEXT_NODE ? e.parentElement : e;
                                for (; t; ) {
                                    if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName) return !0;
                                    t = t.parentElement;
                                }
                                return !1;
                            })()
                        )
                            return;
                        const [n, o, a] = i(null);
                        if (n) {
                            e.preventDefault();
                            const t = document.getElementById("react-native-stylesheet"),
                                n = `<style>${t?.innerText || ""}</style>${o}`;
                            null != e.clipboardData && e.clipboardData.setData("text/html", n), null != e.clipboardData && e.clipboardData.setData("text/plain", a);
                        }
                    };
                    return (
                        document.addEventListener("copy", e),
                        () => {
                            document.removeEventListener("copy", e);
                        }
                    );
                }, []);
            }
            function h(e) {
                if (null === e || (e.nodeType !== Node.TEXT_NODE && e.nodeType !== Node.ELEMENT_NODE)) return "";
                if (e.nodeType === Node.TEXT_NODE) return e.textContent.replace(/\t/g, "\t");
                let t = "";
                const n = Array.from(e.childNodes);
                for (const e of n) e && (t += h(e));
                switch (e.nodeName.toLowerCase()) {
                    case "br":
                    case "div":
                    case "li":
                    case "ul":
                    case "ol":
                        t += "\r\n";
                        break;
                    case "p":
                        t += "\r\n\r\n";
                }
                return t;
            }
        },
        991985: (e, t, n) => {
            n.d(t, { n: () => P });
            var o = n(202784),
                a = n(952793),
                r = n(725516),
                s = n(125363),
                c = n(654917),
                l = n(251067),
                i = n(323265),
                d = n(726426),
                u = n.n(d);
            const m = "grokHeartbeat-";
            function h() {
                try {
                    return document.hidden || !document.hasFocus();
                } catch (e) {}
                return !1;
            }
            l.OB;
            const g = 6e4,
                p = 1e4,
                f = new (class {
                    constructor() {
                        (this.recoveredLatched = !1), (this.intervalTimerId = null), (this.sessionId = m + u()()), (this.startTime = new Date());
                    }
                    run(e) {
                        e && !this.intervalTimerId
                            ? (this.intervalTimerId = setInterval(() => {
                                  try {
                                      window.localStorage.setItem(this.sessionId, JSON.stringify({ s: new Date().getTime() - this.startTime.getTime(), t: this.startTime.getTime() }));
                                  } catch (e) {
                                      clearInterval(this.intervalTimerId), (this.intervalTimerId = null);
                                  }
                              }, 1e3))
                            : !e && this.intervalTimerId && (clearInterval(this.intervalTimerId), (this.intervalTimerId = null));
                    }
                    recoverMs() {
                        if (this.recoveredLatched) return 0;
                        let e = 0;
                        try {
                            const t = new Date().getTime();
                            Object.keys(window.localStorage).forEach((n) => {
                                if (n !== this.sessionId && n.startsWith(m)) {
                                    const o = window.localStorage.getItem(n);
                                    let a = {};
                                    try {
                                        (a = JSON.parse(o)), t - a.t > 6e4 && ((e += a.s || 0), window.localStorage.removeItem(n));
                                    } catch (e) {
                                        window.localStorage.removeItem(n);
                                    }
                                }
                            }),
                                (this.recoveredLatched = !0);
                        } catch (e) {}
                        return e;
                    }
                    injectTestData() {
                        const e = new Date();
                        for (let t = 0; t < 10; t++) window.localStorage.setItem(m + u()(), JSON.stringify({ s: 5, t: e.getTime() - 1e4 * t }));
                    }
                    resetCounter(e) {
                        this.startTime = e;
                        try {
                            window.localStorage.removeItem(this.sessionId);
                        } catch (e) {}
                    }
                })(),
                y = new Set();
            let b,
                w,
                v,
                _ = !1,
                k = new Date(),
                E = h(),
                C = null,
                S = !0;
            const I = i.ZP.deviceId(),
                T = i.ZP.isAndroid() ? "grok_android" : "grok";
            function x(e) {
                e && !C
                    ? (C = setInterval(
                          Z,
                          (function () {
                              const e = D();
                              return e ? e.heartbeatMs : p;
                          })(),
                      ))
                    : !e && C && (clearInterval(C), (C = null)),
                    f.run(e);
            }
            function D() {
                return y.values().next().value;
            }
            function Z() {
                const e = D();
                e && R(e.analytics, !0);
            }
            function R(e, t = !1) {
                if (!e) return;
                const n = new Date(),
                    o = f.recoverMs(),
                    a = n.getTime() - k.getTime() + o;
                a > 250 && (e.scribe({ page: T, section: "user-seconds", component: "user-seconds", action: "analytics", data: { duration_ms: a, start_date: k.toISOString(), end_date: n.toISOString(), user_agent: I } }), t || e.flushScribes()), (k = n), f.resetCounter(k);
            }
            function N() {
                (E = h()), E ? (B(), L()) : y.size && z();
            }
            function L() {
                const e = D();
                e && e.analytics.flushScribes();
            }
            function A() {
                B(), L();
            }
            function O(e) {
                if (((_ = !1), b && (b.style.backgroundColor = "red"), !y.size))
                    try {
                        document.removeEventListener("visibilitychange", N), window.removeEventListener("focus", N), window.removeEventListener("blur", N), window.removeEventListener("beforeunload", A);
                    } catch (e) {}
                const t = e || D();
                t && R(t.analytics), x(!1), y.size || (S = !0);
            }
            function B(e) {
                _ &&
                    (e
                        ? (function (e) {
                              clearTimeout(v), (v = setTimeout(O, 500, e));
                          })(e)
                        : O(e));
            }
            function z() {
                try {
                    if (document.hidden) return;
                } catch (e) {}
                clearTimeout(v),
                    _ ||
                        (function () {
                            (_ = !0), clearTimeout(v), (k = new Date()), f.resetCounter(k), b && (b.style.backgroundColor = "green");
                            try {
                                document.addEventListener("visibilitychange", N), window.addEventListener("focus", N), window.addEventListener("blur", N), window.addEventListener("beforeunload", A);
                            } catch (e) {}
                            x(!0);
                        })(),
                    clearTimeout(w),
                    (w = setTimeout(
                        B,
                        (function () {
                            const e = D();
                            return e ? e.timeoutMs : g;
                        })(),
                    ));
            }
            const H = ["mousemove", "mousedown", "mouseup", "wheel", "touchstart", "touchmove", "touchend", "touchcancel", "keydown", "keyup", "resize"];
            function P(e, t) {
                const n = (0, a.hC)("responsive_web_grok_user_seconds_debug"),
                    l = (0, a.hC)("responsive_web_grok_user_active_seconds_enable"),
                    i = (0, a.JY)("responsive_web_grok_user_seconds_timeout", g),
                    d = (0, a.JY)("responsive_web_grok_user_seconds_heartbeat", p),
                    u = !l || t,
                    m = (0, r.z)(),
                    h = o.useRef({ analytics: m, timeoutMs: i, heartbeatMs: d, showStatusDot: n }),
                    [f, w] = o.useState(null),
                    v = o.useCallback((e) => {
                        E || z();
                    }, []),
                    _ = (0, c.uf)(),
                    k = "idle" !== (0, s.v9)(_.selectStatus) && !u;
                o.useEffect(() => {
                    let e;
                    return k && ((e = setInterval(z, 1e3)), z()), () => clearInterval(e);
                }, [k]);
                const C = e ? document : f,
                    x = h.current;
                o.useEffect(() => {
                    if (!u && C) {
                        !(function (e) {
                            if (S && e && e.analytics) {
                                S = !1;
                                const t = new Date().toISOString();
                                e.analytics.scribe({ page: T, section: "user-seconds", component: "user-seconds", action: "start", data: { start_date: t, end_date: t, user_agent: I } });
                            }
                            !b && e.showStatusDot && ((b = document.createElement("div")), (b.style.width = "14px"), (b.style.height = "14px"), (b.style.left = "-7px"), (b.style.top = "-7px"), (b.style.borderRadius = "7px"), (b.style.position = "fixed"), (b.style.zIndex = "2000"), document.body.appendChild(b)), y.add(e), z();
                        })(x);
                        const e = (function (e, t) {
                            if (!e) return () => {};
                            const n = { passive: !0 };
                            return (
                                H.forEach((o) => {
                                    e.addEventListener(o, t, n);
                                }),
                                () => {
                                    H.forEach((o) => {
                                        e.removeEventListener(o, t, n);
                                    });
                                }
                            );
                        })(C, v);
                        return () => {
                            !(function (e) {
                                y.delete(e), y.size || B(e);
                            })(x),
                                e();
                        };
                    }
                }, [u, C, x, v]);
                return o.useCallback((e) => w(e), []);
            }
        },
        528829: (e, t, n) => {
            n.r(t), n.d(t, { default: () => te });
            n(136728);
            var o = n(202784),
                a = n(565058),
                r = n(400752),
                s = n(325686),
                c = n(107267),
                l = n(731708),
                i = n(154003),
                d = n(530732),
                u = n(992942),
                m = n(215337),
                h = n(392237),
                g = n(111677),
                p = n.n(g),
                f = n(837020),
                y = n(276259),
                b = n(457566),
                w = n(306677),
                v = n(952793),
                _ = n(646403),
                k = n(536387),
                E = n(725405),
                C = n(398083),
                S = n(697403),
                I = n(819102),
                T = n(922449),
                x = n(946474),
                D = n(671212),
                Z = n(517330),
                R = n(276522);
            const N = p().ca0f5894,
                L = p().fe731016;
            function A({ feedback: e, sendFeedback: t, universalSearchId: n }) {
                const a = (0, E.Z)(),
                    [r, c] = o.useState(e),
                    l = o.useCallback(() => {
                        c("thumbsUp"), t("Like"), a.scribe({ component: "grok_search_summary_thumbs_up_button", action: "click", data: { grok_details: { universal_search_id: n } } });
                    }, [a, t, n]),
                    i = o.useCallback(() => {
                        c("thumbsDown"), t("Dislike"), a.scribe({ component: "grok_search_summary_thumbs_down_button", action: "click", data: { grok_details: { universal_search_id: n } } });
                    }, [a, t, n]);
                return o.createElement(s.Z, { style: O.container }, "thumbsDown" !== r ? o.createElement(R.Z, { icon: "thumbsUp" === r ? o.createElement(T.default, null) : o.createElement(x.default, null), label: L, onPress: l }) : null, "thumbsUp" !== r ? o.createElement(R.Z, { icon: "thumbsDown" === r ? o.createElement(D.default, null) : o.createElement(Z.default, null), label: N, onPress: i }) : null);
            }
            const O = h.default.create((e) => ({ container: { flexDirection: "row" } }));
            var B = n(194504),
                z = n(420182),
                H = n(125363),
                P = n(100326),
                F = n(601576),
                M = n(654917),
                $ = n(979512);
            const W = p().e4a6e006,
                q = ({ followups: e, query: t, universalSearchId: n }) => {
                    const a = (0, E.Z)(),
                        c = (0, H.I0)(),
                        i = (0, M.uf)(),
                        { openGrok: u } = (0, $.Z)(),
                        g = (0, r.Dv)(z.dd),
                        [p, f] = o.useState(!0),
                        [y, w] = o.useState(!0),
                        v = o.useCallback(
                            ({ index: t, intersectionRatio: n }) => {
                                e && (0 === t && f(1 === n), t === e.length - 1 && w(1 === n));
                            },
                            [e],
                        ),
                        _ = o.useCallback(
                            async (e) => {
                                if ((a.scribe({ element: "grok_search_summary_followup", action: "click", data: { grok_details: { universal_search_id: n } } }), !n)) return void c((0, F.fz)({ text: W }));
                                const o = await (0, P.X)({ analytics: a, api: g, dispatch: c, grokModule: i, fromUniversalSearch: { id: n, query: t } });
                                o ? u({ text: e, autoSubmit: !0, conversationId: o, source: "search_followup" }) : c((0, F.fz)({ text: W }));
                            },
                            [n, t, c, a, g, i, u],
                        );
                    return e && 0 !== e.length
                        ? o.createElement(
                              s.Z,
                              { style: X.grokFollowupsContainer },
                              o.createElement(
                                  B.Z,
                                  { buttonsContainerStyle: X.buttonsContainer, onVisibleRangeChange: v, style: X.carousel, withSingleIndexButtons: !0 },
                                  e.map((e, t) =>
                                      o.createElement(
                                          d.Z,
                                          {
                                              accessibilityRole: "button",
                                              key: `post_analysis_${e.label}_${t}`,
                                              onPress: () => {
                                                  _(e.label);
                                              },
                                              withoutInteractiveStyles: !0,
                                          },
                                          ({ isHovered: n }) => o.createElement(s.Z, { style: [X.grokButton, n ? X.hoveredButton : void 0] }, 0 === t ? o.createElement(b.x1, { style: [X.grokIcon, n ? X.grokIconHovered : void 0] }) : null, o.createElement(l.ZP, { style: [X.label, n ? X.labelHover : void 0] }, e.label)),
                                      ),
                                  ),
                              ),
                              p ? null : o.createElement(m.Z, { angle: 90, colors: [h.default.theme.colors.cellBackground, h.default.theme.colors.transparent], style: [X.carouselShadow, X.carouselStartShadow] }),
                              y ? null : o.createElement(m.Z, { angle: 90, colors: [h.default.theme.colors.transparent, h.default.theme.colors.cellBackground], style: [X.carouselShadow, X.carouselEndShadow] }),
                          )
                        : null;
                },
                X = h.default.create((e) => ({ grokIcon: { transition: "color 0.2s", color: e.colors.gray700, width: 16, heigth: 16, position: "relative" }, grokIconHovered: { color: e.colors.text }, grokFollowupsContainer: { position: "relative", maxWidth: "100%" }, label: { transition: "color 0.2s", color: e.colors.gray700 }, labelHover: { color: e.colors.text }, carousel: { maxWidth: "100%" }, grokButton: { borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.infinite, color: e.colors.gray900, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4, gap: e.spaces.space4, transition: "background-color 0.2s", flexDirection: "row", alignItems: "center" }, hoveredButton: { backgroundColor: e.colors.gray100 }, buttonsContainer: { flexDirection: "row", gap: e.spaces.space4 }, carouselShadow: { height: "100%", position: "absolute", top: 0, width: 12, zIndex: 10, pointerEvents: "none" }, carouselStartShadow: { start: 0 }, carouselEndShadow: { end: 0 } })),
                U = n.p + "shimmer.3a66790a.svg",
                j = ({ height: e }) => o.createElement(s.Z, { style: [J.container, { height: e }] }),
                J = h.default.create((e) => ({ container: { width: "100%", height: "100%", mask: `url(${U})`, maskSize: "100%", maskRepeat: "no-repeat", backgroundColor: e.colors.gray50, backgroundImage: `linear-gradient(to right, ${e.colors.gray50} 0%, ${e.colors.gray200} 20%, ${e.colors.gray50} 40%, ${e.colors.gray50} 100%)`, opacity: 1, animationDuration: "1s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: { "0%": { backgroundPositionX: "-200px" }, "100%": { backgroundPositionX: "700px" } } } }));
            var K = n(488816),
                V = n.n(K);
            const G = p().a0cf4306,
                Y = p().f97f7b46,
                Q = 175,
                ee = h.default.create((e) => ({ container: { width: "100%", paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space16, borderBottomWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space4 }, title: { flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, closeIcon: { color: e.colors.gray500 }, closeButton: { position: "relative", start: e.spaces.space4 }, grokIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.text }, heading: { color: e.colors.text, fontWeight: e.fontWeights.bold }, content: { minHeight: Q, paddingBottom: e.spaces.space20 }, summary: { display: "block" }, text: { flex: 1, display: "inline" }, imageContainer: { width: 120, height: 120, borderRadius: e.borderRadii.large, marginStart: e.spaces.space8, marginBottom: e.spaces.space8, overflow: "hidden", float: "end", zIndex: 100 }, image: { width: "100%", height: "100%" }, shimmerContainer: { position: "relative", marginTop: e.spaces.space4, paddingBottom: e.spaces.space16, overflow: "hidden" }, shimmerShadow: { position: "absolute", start: 0, bottom: 0, width: "100%", height: e.spaces.space48 }, footer: { marginTop: e.spaces.space12, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: e.spaces.space8 }, searchFollowups: { flex: 1 } })),
                te = ({ heightFactor: e, hidden: t, query: n }) => {
                    const g = e || 1,
                        [p, T] = o.useState(!1),
                        x = o.useRef(""),
                        D = (0, c.useHistory)(),
                        Z = o.useMemo(() => (0, a.cn)({ status: "no_response", text: "", citedWebResults: [], followUpSuggestions: [], fileAttachments: [] }), [n]),
                        R = (0, E.Z)(),
                        N = (0, k.xO)(),
                        L = (0, v.hC)("responsive_web_grok_search_summary_images_enabled"),
                        O = (0, v.hC)("responsive_web_grok_dev_universal_search_id_enabled"),
                        [{ citedWebResults: B, fileAttachments: H, followUpSuggestions: P, status: F, text: M, universalSearchId: $ }] = (0, r.KO)(Z),
                        W = (0, I.u)(M, !0),
                        X = (({ query: e, universalSearchId: t }) => {
                            const [{ apiClient: n }] = (0, r.KO)(z.dd);
                            return o.useCallback(
                                async (o) => {
                                    t && (await n.graphQL(V(), { query: e, universalSearchId: t, basicFeedback: { feedback_type: o } }).then((e) => e));
                                },
                                [n, e, t],
                            );
                        })({ query: n, universalSearchId: $ }),
                        U = H.filter((e) => y.v5.some((t) => e.mimeType))[0];
                    o.useEffect(() => {
                        t || p || n === x.current || ((x.current = n), (0, _.E)({ analytics: R, responseAtom: Z, jotaiStore: N, query: n }));
                    }, [n, R, Z, M, t, p, N]);
                    const J = o.useCallback(() => {
                            R.scribe({ element: "grok_search_summary_show_more_button", action: "click", data: { grok_details: { universal_search_id: $ } } });
                        }, [R, $]),
                        K = o.useCallback(() => {
                            D.push({ pathname: "/i/grok/media", state: { file: U } });
                        }, [D, U]),
                        te = o.useCallback(() => {
                            R.scribe({ element: "grok_search_summary", action: "impression", data: { grok_details: { universal_search_id: $ } } });
                        }, [R, $]),
                        ne = o.useCallback(() => {
                            R.scribe({ element: "grok_search_summary_close_button", action: "click", data: { grok_details: { universal_search_id: $ } } }), T(!0), X("Close");
                        }, [R, T, $, X]);
                    return "no_response" === F || "error" === F || t || p ? null : o.createElement(s.Z, { style: ee.container }, o.createElement(w.D, { id: "followups_search", onFullyVisible: te, position: "bottom", testID: "followups_search" }), o.createElement(s.Z, { style: ee.header }, o.createElement(s.Z, { style: ee.title }, o.createElement(b.x1, { style: ee.grokIcon }), o.createElement(l.ZP, { style: ee.heading }, G)), o.createElement(i.ZP, { hoverLabel: { label: Y }, icon: o.createElement(f.default, { style: ee.closeIcon }), onClick: ne, size: "medium", style: ee.closeButton, type: "primaryText" })), o.createElement(S.Z, { disableShowMore: !W, foldedHeight: Q * g, heightBreakpoint: Q * g, onOpen: J }, W ? o.createElement(s.Z, { style: [ee.content, { minHeight: Q * g }] }, O ? o.createElement(l.ZP, { color: "gray500" }, "[Debug] Search id: ", $) : null, o.createElement(s.Z, { style: ee.summary }, L && U?.url ? o.createElement(d.Z, { onClick: K, style: ee.imageContainer }, o.createElement(u.Z, { source: { uri: U.url }, style: ee.image })) : null, o.createElement(C.Z, { citations: B, disableLinks: !1, isAnimated: "streaming" === F, markdownText: W, style: ee.text })), o.createElement(s.Z, { style: ee.footer }, "completed" === F ? o.createElement(A, { sendFeedback: X, universalSearchId: $ }) : null, o.createElement(s.Z, { style: ee.searchFollowups }, o.createElement(q, { followups: P, query: n, universalSearchId: $ })))) : o.createElement(s.Z, { style: [ee.shimmerContainer, { height: Q * g }] }, o.createElement(j, { height: Q * g }), o.createElement(m.Z, { colors: [h.default.theme.colors.transparent, h.default.theme.colors.cellBackground], style: ee.shimmerShadow }))));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-3c20ad5c.4765b2da.js.map
