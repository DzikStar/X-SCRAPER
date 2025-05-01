"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-bb3d84b5", "shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"],
    {
        250132: (t, e, n) => {
            var o;
            n.d(e, { V: () => r });
            var r = function () {
                return o || n.nc;
            };
        },
        94258: (t, e, n) => {
            n.d(e, { x7: () => dt, Me: () => lt, oo: () => mt, RR: () => at, Cp: () => ut, dr: () => pt, cv: () => ct, uY: () => st, dp: () => ft });
            const o = ["top", "right", "bottom", "left"],
                r = Math.min,
                i = Math.max,
                l = Math.round,
                c = Math.floor,
                s = (t) => ({ x: t, y: t }),
                a = { left: "right", right: "left", bottom: "top", top: "bottom" },
                f = { start: "end", end: "start" };
            function u(t, e, n) {
                return i(t, r(e, n));
            }
            function d(t, e) {
                return "function" == typeof t ? t(e) : t;
            }
            function p(t) {
                return t.split("-")[0];
            }
            function m(t) {
                return t.split("-")[1];
            }
            function h(t) {
                return "x" === t ? "y" : "x";
            }
            function g(t) {
                return "y" === t ? "height" : "width";
            }
            function y(t) {
                return ["top", "bottom"].includes(p(t)) ? "y" : "x";
            }
            function w(t) {
                return h(y(t));
            }
            function x(t) {
                return t.replace(/start|end/g, (t) => f[t]);
            }
            function v(t) {
                return t.replace(/left|right|bottom|top/g, (t) => a[t]);
            }
            function b(t) {
                return "number" != typeof t
                    ? (function (t) {
                          return { top: 0, right: 0, bottom: 0, left: 0, ...t };
                      })(t)
                    : { top: t, right: t, bottom: t, left: t };
            }
            function R(t) {
                const { x: e, y: n, width: o, height: r } = t;
                return { width: o, height: r, top: n, left: e, right: e + o, bottom: n + r, x: e, y: n };
            }
            function A(t, e, n) {
                let { reference: o, floating: r } = t;
                const i = y(e),
                    l = w(e),
                    c = g(l),
                    s = p(e),
                    a = "y" === i,
                    f = o.x + o.width / 2 - r.width / 2,
                    u = o.y + o.height / 2 - r.height / 2,
                    d = o[c] / 2 - r[c] / 2;
                let h;
                switch (s) {
                    case "top":
                        h = { x: f, y: o.y - r.height };
                        break;
                    case "bottom":
                        h = { x: f, y: o.y + o.height };
                        break;
                    case "right":
                        h = { x: o.x + o.width, y: u };
                        break;
                    case "left":
                        h = { x: o.x - r.width, y: u };
                        break;
                    default:
                        h = { x: o.x, y: o.y };
                }
                switch (m(e)) {
                    case "start":
                        h[l] -= d * (n && a ? -1 : 1);
                        break;
                    case "end":
                        h[l] += d * (n && a ? -1 : 1);
                }
                return h;
            }
            async function L(t, e) {
                var n;
                void 0 === e && (e = {});
                const { x: o, y: r, platform: i, rects: l, elements: c, strategy: s } = t,
                    { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: u = "floating", altBoundary: p = !1, padding: m = 0 } = d(e, t),
                    h = b(m),
                    g = c[p ? ("floating" === u ? "reference" : "floating") : u],
                    y = R(await i.getClippingRect({ element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || (await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(c.floating))), boundary: a, rootBoundary: f, strategy: s })),
                    w = "floating" === u ? { x: o, y: r, width: l.floating.width, height: l.floating.height } : l.reference,
                    x = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c.floating)),
                    v = ((await (null == i.isElement ? void 0 : i.isElement(x))) && (await (null == i.getScale ? void 0 : i.getScale(x)))) || { x: 1, y: 1 },
                    A = R(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: c, rect: w, offsetParent: x, strategy: s }) : w);
                return { top: (y.top - A.top + h.top) / v.y, bottom: (A.bottom - y.bottom + h.bottom) / v.y, left: (y.left - A.left + h.left) / v.x, right: (A.right - y.right + h.right) / v.x };
            }
            function T(t, e) {
                return { top: t.top - e.height, right: t.right - e.width, bottom: t.bottom - e.height, left: t.left - e.width };
            }
            function E(t) {
                return o.some((e) => t[e] >= 0);
            }
            function S(t) {
                return C(t) ? (t.nodeName || "").toLowerCase() : "#document";
            }
            function D(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window;
            }
            function O(t) {
                var e;
                return null == (e = (C(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement;
            }
            function C(t) {
                return t instanceof Node || t instanceof D(t).Node;
            }
            function P(t) {
                return t instanceof Element || t instanceof D(t).Element;
            }
            function k(t) {
                return t instanceof HTMLElement || t instanceof D(t).HTMLElement;
            }
            function F(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof D(t).ShadowRoot);
            }
            function H(t) {
                const { overflow: e, overflowX: n, overflowY: o, display: r } = z(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r);
            }
            function M(t) {
                return ["table", "td", "th"].includes(S(t));
            }
            function W(t) {
                return [":popover-open", ":modal"].some((e) => {
                    try {
                        return t.matches(e);
                    } catch (t) {
                        return !1;
                    }
                });
            }
            function B(t) {
                const e = V(),
                    n = P(t) ? z(t) : t;
                return "none" !== n.transform || "none" !== n.perspective || (!!n.containerType && "normal" !== n.containerType) || (!e && !!n.backdropFilter && "none" !== n.backdropFilter) || (!e && !!n.filter && "none" !== n.filter) || ["transform", "perspective", "filter"].some((t) => (n.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some((t) => (n.contain || "").includes(t));
            }
            function V() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
            }
            function _(t) {
                return ["html", "body", "#document"].includes(S(t));
            }
            function z(t) {
                return D(t).getComputedStyle(t);
            }
            function N(t) {
                return P(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
            }
            function Y(t) {
                if ("html" === S(t)) return t;
                const e = t.assignedSlot || t.parentNode || (F(t) && t.host) || O(t);
                return F(e) ? e.host : e;
            }
            function j(t) {
                const e = Y(t);
                return _(e) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : k(e) && H(e) ? e : j(e);
            }
            function $(t, e, n) {
                var o;
                void 0 === e && (e = []), void 0 === n && (n = !0);
                const r = j(t),
                    i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
                    l = D(r);
                if (i) {
                    const t = I(l);
                    return e.concat(l, l.visualViewport || [], H(r) ? r : [], t && n ? $(t) : []);
                }
                return e.concat(r, $(r, [], n));
            }
            function I(t) {
                return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
            }
            function q(t) {
                const e = z(t);
                let n = parseFloat(e.width) || 0,
                    o = parseFloat(e.height) || 0;
                const r = k(t),
                    i = r ? t.offsetWidth : n,
                    c = r ? t.offsetHeight : o,
                    s = l(n) !== i || l(o) !== c;
                return s && ((n = i), (o = c)), { width: n, height: o, $: s };
            }
            function X(t) {
                return P(t) ? t : t.contextElement;
            }
            function G(t) {
                const e = X(t);
                if (!k(e)) return s(1);
                const n = e.getBoundingClientRect(),
                    { width: o, height: r, $: i } = q(e);
                let c = (i ? l(n.width) : n.width) / o,
                    a = (i ? l(n.height) : n.height) / r;
                return (c && Number.isFinite(c)) || (c = 1), (a && Number.isFinite(a)) || (a = 1), { x: c, y: a };
            }
            const J = s(0);
            function K(t) {
                const e = D(t);
                return V() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : J;
            }
            function Q(t, e, n, o) {
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                const r = t.getBoundingClientRect(),
                    i = X(t);
                let l = s(1);
                e && (o ? P(o) && (l = G(o)) : (l = G(t)));
                const c = (function (t, e, n) {
                    return void 0 === e && (e = !1), !(!n || (e && n !== D(t))) && e;
                })(i, n, o)
                    ? K(i)
                    : s(0);
                let a = (r.left + c.x) / l.x,
                    f = (r.top + c.y) / l.y,
                    u = r.width / l.x,
                    d = r.height / l.y;
                if (i) {
                    const t = D(i),
                        e = o && P(o) ? D(o) : o;
                    let n = t,
                        r = I(n);
                    for (; r && o && e !== n; ) {
                        const t = G(r),
                            e = r.getBoundingClientRect(),
                            o = z(r),
                            i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
                            l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
                        (a *= t.x), (f *= t.y), (u *= t.x), (d *= t.y), (a += i), (f += l), (n = D(r)), (r = I(n));
                    }
                }
                return R({ width: u, height: d, x: a, y: f });
            }
            function U(t) {
                return Q(O(t)).left + N(t).scrollLeft;
            }
            function Z(t, e, n) {
                let o;
                if ("viewport" === e)
                    o = (function (t, e) {
                        const n = D(t),
                            o = O(t),
                            r = n.visualViewport;
                        let i = o.clientWidth,
                            l = o.clientHeight,
                            c = 0,
                            s = 0;
                        if (r) {
                            (i = r.width), (l = r.height);
                            const t = V();
                            (!t || (t && "fixed" === e)) && ((c = r.offsetLeft), (s = r.offsetTop));
                        }
                        return { width: i, height: l, x: c, y: s };
                    })(t, n);
                else if ("document" === e)
                    o = (function (t) {
                        const e = O(t),
                            n = N(t),
                            o = t.ownerDocument.body,
                            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
                            l = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
                        let c = -n.scrollLeft + U(t);
                        const s = -n.scrollTop;
                        return "rtl" === z(o).direction && (c += i(e.clientWidth, o.clientWidth) - r), { width: r, height: l, x: c, y: s };
                    })(O(t));
                else if (P(e))
                    o = (function (t, e) {
                        const n = Q(t, !0, "fixed" === e),
                            o = n.top + t.clientTop,
                            r = n.left + t.clientLeft,
                            i = k(t) ? G(t) : s(1);
                        return { width: t.clientWidth * i.x, height: t.clientHeight * i.y, x: r * i.x, y: o * i.y };
                    })(e, n);
                else {
                    const n = K(t);
                    o = { ...e, x: e.x - n.x, y: e.y - n.y };
                }
                return R(o);
            }
            function tt(t, e) {
                const n = Y(t);
                return !(n === e || !P(n) || _(n)) && ("fixed" === z(n).position || tt(n, e));
            }
            function et(t, e, n) {
                const o = k(e),
                    r = O(e),
                    i = "fixed" === n,
                    l = Q(t, !0, i, e);
                let c = { scrollLeft: 0, scrollTop: 0 };
                const a = s(0);
                if (o || (!o && !i))
                    if ((("body" !== S(e) || H(r)) && (c = N(e)), o)) {
                        const t = Q(e, !0, i, e);
                        (a.x = t.x + e.clientLeft), (a.y = t.y + e.clientTop);
                    } else r && (a.x = U(r));
                return { x: l.left + c.scrollLeft - a.x, y: l.top + c.scrollTop - a.y, width: l.width, height: l.height };
            }
            function nt(t) {
                return "static" === z(t).position;
            }
            function ot(t, e) {
                return k(t) && "fixed" !== z(t).position ? (e ? e(t) : t.offsetParent) : null;
            }
            function rt(t, e) {
                const n = D(t);
                if (W(t)) return n;
                if (!k(t)) {
                    let e = Y(t);
                    for (; e && !_(e); ) {
                        if (P(e) && !nt(e)) return e;
                        e = Y(e);
                    }
                    return n;
                }
                let o = ot(t, e);
                for (; o && M(o) && nt(o); ) o = ot(o, e);
                return o && _(o) && nt(o) && !B(o)
                    ? n
                    : o ||
                          (function (t) {
                              let e = Y(t);
                              for (; k(e) && !_(e); ) {
                                  if (B(e)) return e;
                                  if (W(e)) return null;
                                  e = Y(e);
                              }
                              return null;
                          })(t) ||
                          n;
            }
            const it = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
                    let { elements: e, rect: n, offsetParent: o, strategy: r } = t;
                    const i = "fixed" === r,
                        l = O(o),
                        c = !!e && W(e.floating);
                    if (o === l || (c && i)) return n;
                    let a = { scrollLeft: 0, scrollTop: 0 },
                        f = s(1);
                    const u = s(0),
                        d = k(o);
                    if ((d || (!d && !i)) && (("body" !== S(o) || H(l)) && (a = N(o)), k(o))) {
                        const t = Q(o);
                        (f = G(o)), (u.x = t.x + o.clientLeft), (u.y = t.y + o.clientTop);
                    }
                    return { width: n.width * f.x, height: n.height * f.y, x: n.x * f.x - a.scrollLeft * f.x + u.x, y: n.y * f.y - a.scrollTop * f.y + u.y };
                },
                getDocumentElement: O,
                getClippingRect: function (t) {
                    let { element: e, boundary: n, rootBoundary: o, strategy: l } = t;
                    const c = [
                            ...("clippingAncestors" === n
                                ? W(e)
                                    ? []
                                    : (function (t, e) {
                                          const n = e.get(t);
                                          if (n) return n;
                                          let o = $(t, [], !1).filter((t) => P(t) && "body" !== S(t)),
                                              r = null;
                                          const i = "fixed" === z(t).position;
                                          let l = i ? Y(t) : t;
                                          for (; P(l) && !_(l); ) {
                                              const e = z(l),
                                                  n = B(l);
                                              n || "fixed" !== e.position || (r = null), (i ? !n && !r : (!n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position)) || (H(l) && !n && tt(t, l))) ? (o = o.filter((t) => t !== l)) : (r = e), (l = Y(l));
                                          }
                                          return e.set(t, o), o;
                                      })(e, this._c)
                                : [].concat(n)),
                            o,
                        ],
                        s = c[0],
                        a = c.reduce(
                            (t, n) => {
                                const o = Z(e, n, l);
                                return (t.top = i(o.top, t.top)), (t.right = r(o.right, t.right)), (t.bottom = r(o.bottom, t.bottom)), (t.left = i(o.left, t.left)), t;
                            },
                            Z(e, s, l),
                        );
                    return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
                },
                getOffsetParent: rt,
                getElementRects: async function (t) {
                    const e = this.getOffsetParent || rt,
                        n = this.getDimensions,
                        o = await n(t.floating);
                    return { reference: et(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
                },
                getClientRects: function (t) {
                    return Array.from(t.getClientRects());
                },
                getDimensions: function (t) {
                    const { width: e, height: n } = q(t);
                    return { width: e, height: n };
                },
                getScale: G,
                isElement: P,
                isRTL: function (t) {
                    return "rtl" === z(t).direction;
                },
            };
            function lt(t, e, n, o) {
                void 0 === o && (o = {});
                const { ancestorScroll: l = !0, ancestorResize: s = !0, elementResize: a = "function" == typeof ResizeObserver, layoutShift: f = "function" == typeof IntersectionObserver, animationFrame: u = !1 } = o,
                    d = X(t),
                    p = l || s ? [...(d ? $(d) : []), ...$(e)] : [];
                p.forEach((t) => {
                    l && t.addEventListener("scroll", n, { passive: !0 }), s && t.addEventListener("resize", n);
                });
                const m =
                    d && f
                        ? (function (t, e) {
                              let n,
                                  o = null;
                              const l = O(t);
                              function s() {
                                  var t;
                                  clearTimeout(n), null == (t = o) || t.disconnect(), (o = null);
                              }
                              return (
                                  (function a(f, u) {
                                      void 0 === f && (f = !1), void 0 === u && (u = 1), s();
                                      const { left: d, top: p, width: m, height: h } = t.getBoundingClientRect();
                                      if ((f || e(), !m || !h)) return;
                                      const g = { rootMargin: -c(p) + "px " + -c(l.clientWidth - (d + m)) + "px " + -c(l.clientHeight - (p + h)) + "px " + -c(d) + "px", threshold: i(0, r(1, u)) || 1 };
                                      let y = !0;
                                      function w(t) {
                                          const e = t[0].intersectionRatio;
                                          if (e !== u) {
                                              if (!y) return a();
                                              e
                                                  ? a(!1, e)
                                                  : (n = setTimeout(() => {
                                                        a(!1, 1e-7);
                                                    }, 1e3));
                                          }
                                          y = !1;
                                      }
                                      try {
                                          o = new IntersectionObserver(w, { ...g, root: l.ownerDocument });
                                      } catch (t) {
                                          o = new IntersectionObserver(w, g);
                                      }
                                      o.observe(t);
                                  })(!0),
                                  s
                              );
                          })(d, n)
                        : null;
                let h,
                    g = -1,
                    y = null;
                a &&
                    ((y = new ResizeObserver((t) => {
                        let [o] = t;
                        o &&
                            o.target === d &&
                            y &&
                            (y.unobserve(e),
                            cancelAnimationFrame(g),
                            (g = requestAnimationFrame(() => {
                                var t;
                                null == (t = y) || t.observe(e);
                            }))),
                            n();
                    })),
                    d && !u && y.observe(d),
                    y.observe(e));
                let w = u ? Q(t) : null;
                return (
                    u &&
                        (function e() {
                            const o = Q(t);
                            !w || (o.x === w.x && o.y === w.y && o.width === w.width && o.height === w.height) || n();
                            (w = o), (h = requestAnimationFrame(e));
                        })(),
                    n(),
                    () => {
                        var t;
                        p.forEach((t) => {
                            l && t.removeEventListener("scroll", n), s && t.removeEventListener("resize", n);
                        }),
                            null == m || m(),
                            null == (t = y) || t.disconnect(),
                            (y = null),
                            u && cancelAnimationFrame(h);
                    }
                );
            }
            const ct = function (t) {
                    return (
                        void 0 === t && (t = 0),
                        {
                            name: "offset",
                            options: t,
                            async fn(e) {
                                var n, o;
                                const { x: r, y: i, placement: l, middlewareData: c } = e,
                                    s = await (async function (t, e) {
                                        const { placement: n, platform: o, elements: r } = t,
                                            i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)),
                                            l = p(n),
                                            c = m(n),
                                            s = "y" === y(n),
                                            a = ["left", "top"].includes(l) ? -1 : 1,
                                            f = i && s ? -1 : 1,
                                            u = d(e, t);
                                        let { mainAxis: h, crossAxis: g, alignmentAxis: w } = "number" == typeof u ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
                                        return c && "number" == typeof w && (g = "end" === c ? -1 * w : w), s ? { x: g * f, y: h * a } : { x: h * a, y: g * f };
                                    })(e, t);
                                return l === (null == (n = c.offset) ? void 0 : n.placement) && null != (o = c.arrow) && o.alignmentOffset ? {} : { x: r + s.x, y: i + s.y, data: { ...s, placement: l } };
                            },
                        }
                    );
                },
                st = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: "shift",
                            options: t,
                            async fn(e) {
                                const { x: n, y: o, placement: r } = e,
                                    {
                                        mainAxis: i = !0,
                                        crossAxis: l = !1,
                                        limiter: c = {
                                            fn: (t) => {
                                                let { x: e, y: n } = t;
                                                return { x: e, y: n };
                                            },
                                        },
                                        ...s
                                    } = d(t, e),
                                    a = { x: n, y: o },
                                    f = await L(e, s),
                                    m = y(p(r)),
                                    g = h(m);
                                let w = a[g],
                                    x = a[m];
                                if (i) {
                                    const t = "y" === g ? "bottom" : "right";
                                    w = u(w + f["y" === g ? "top" : "left"], w, w - f[t]);
                                }
                                if (l) {
                                    const t = "y" === m ? "bottom" : "right";
                                    x = u(x + f["y" === m ? "top" : "left"], x, x - f[t]);
                                }
                                const v = c.fn({ ...e, [g]: w, [m]: x });
                                return { ...v, data: { x: v.x - n, y: v.y - o } };
                            },
                        }
                    );
                },
                at = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: "flip",
                            options: t,
                            async fn(e) {
                                var n, o;
                                const { placement: r, middlewareData: i, rects: l, initialPlacement: c, platform: s, elements: a } = e,
                                    { mainAxis: f = !0, crossAxis: u = !0, fallbackPlacements: h, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: R = "none", flipAlignment: A = !0, ...T } = d(t, e);
                                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                                const E = p(r),
                                    S = y(c),
                                    D = p(c) === c,
                                    O = await (null == s.isRTL ? void 0 : s.isRTL(a.floating)),
                                    C =
                                        h ||
                                        (D || !A
                                            ? [v(c)]
                                            : (function (t) {
                                                  const e = v(t);
                                                  return [x(t), e, x(e)];
                                              })(c)),
                                    P = "none" !== R;
                                !h &&
                                    P &&
                                    C.push(
                                        ...(function (t, e, n, o) {
                                            const r = m(t);
                                            let i = (function (t, e, n) {
                                                const o = ["left", "right"],
                                                    r = ["right", "left"],
                                                    i = ["top", "bottom"],
                                                    l = ["bottom", "top"];
                                                switch (t) {
                                                    case "top":
                                                    case "bottom":
                                                        return n ? (e ? r : o) : e ? o : r;
                                                    case "left":
                                                    case "right":
                                                        return e ? i : l;
                                                    default:
                                                        return [];
                                                }
                                            })(p(t), "start" === n, o);
                                            return r && ((i = i.map((t) => t + "-" + r)), e && (i = i.concat(i.map(x)))), i;
                                        })(c, A, R, O),
                                    );
                                const k = [c, ...C],
                                    F = await L(e, T),
                                    H = [];
                                let M = (null == (o = i.flip) ? void 0 : o.overflows) || [];
                                if ((f && H.push(F[E]), u)) {
                                    const t = (function (t, e, n) {
                                        void 0 === n && (n = !1);
                                        const o = m(t),
                                            r = w(t),
                                            i = g(r);
                                        let l = "x" === r ? (o === (n ? "end" : "start") ? "right" : "left") : "start" === o ? "bottom" : "top";
                                        return e.reference[i] > e.floating[i] && (l = v(l)), [l, v(l)];
                                    })(r, l, O);
                                    H.push(F[t[0]], F[t[1]]);
                                }
                                if (((M = [...M, { placement: r, overflows: H }]), !H.every((t) => t <= 0))) {
                                    var W, B;
                                    const t = ((null == (W = i.flip) ? void 0 : W.index) || 0) + 1,
                                        e = k[t];
                                    if (e) return { data: { index: t, overflows: M }, reset: { placement: e } };
                                    let n = null == (B = M.filter((t) => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : B.placement;
                                    if (!n)
                                        switch (b) {
                                            case "bestFit": {
                                                var V;
                                                const t =
                                                    null ==
                                                    (V = M.filter((t) => {
                                                        if (P) {
                                                            const e = y(t.placement);
                                                            return e === S || "y" === e;
                                                        }
                                                        return !0;
                                                    })
                                                        .map((t) => [t.placement, t.overflows.filter((t) => t > 0).reduce((t, e) => t + e, 0)])
                                                        .sort((t, e) => t[1] - e[1])[0])
                                                        ? void 0
                                                        : V[0];
                                                t && (n = t);
                                                break;
                                            }
                                            case "initialPlacement":
                                                n = c;
                                        }
                                    if (r !== n) return { reset: { placement: n } };
                                }
                                return {};
                            },
                        }
                    );
                },
                ft = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: "size",
                            options: t,
                            async fn(e) {
                                const { placement: n, rects: o, platform: l, elements: c } = e,
                                    { apply: s = () => {}, ...a } = d(t, e),
                                    f = await L(e, a),
                                    u = p(n),
                                    h = m(n),
                                    g = "y" === y(n),
                                    { width: w, height: x } = o.floating;
                                let v, b;
                                "top" === u || "bottom" === u ? ((v = u), (b = h === ((await (null == l.isRTL ? void 0 : l.isRTL(c.floating))) ? "start" : "end") ? "left" : "right")) : ((b = u), (v = "end" === h ? "top" : "bottom"));
                                const R = x - f.top - f.bottom,
                                    A = w - f.left - f.right,
                                    T = r(x - f[v], R),
                                    E = r(w - f[b], A),
                                    S = !e.middlewareData.shift;
                                let D = T,
                                    O = E;
                                if ((g ? (O = h || S ? r(E, A) : A) : (D = h || S ? r(T, R) : R), S && !h)) {
                                    const t = i(f.left, 0),
                                        e = i(f.right, 0),
                                        n = i(f.top, 0),
                                        o = i(f.bottom, 0);
                                    g ? (O = w - 2 * (0 !== t || 0 !== e ? t + e : i(f.left, f.right))) : (D = x - 2 * (0 !== n || 0 !== o ? n + o : i(f.top, f.bottom)));
                                }
                                await s({ ...e, availableWidth: O, availableHeight: D });
                                const C = await l.getDimensions(c.floating);
                                return w !== C.width || x !== C.height ? { reset: { rects: !0 } } : {};
                            },
                        }
                    );
                },
                ut = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: "hide",
                            options: t,
                            async fn(e) {
                                const { rects: n } = e,
                                    { strategy: o = "referenceHidden", ...r } = d(t, e);
                                switch (o) {
                                    case "referenceHidden": {
                                        const t = T(await L(e, { ...r, elementContext: "reference" }), n.reference);
                                        return { data: { referenceHiddenOffsets: t, referenceHidden: E(t) } };
                                    }
                                    case "escaped": {
                                        const t = T(await L(e, { ...r, altBoundary: !0 }), n.floating);
                                        return { data: { escapedOffsets: t, escaped: E(t) } };
                                    }
                                    default:
                                        return {};
                                }
                            },
                        }
                    );
                },
                dt = (t) => ({
                    name: "arrow",
                    options: t,
                    async fn(e) {
                        const { x: n, y: o, placement: i, rects: l, platform: c, elements: s, middlewareData: a } = e,
                            { element: f, padding: p = 0 } = d(t, e) || {};
                        if (null == f) return {};
                        const h = b(p),
                            y = { x: n, y: o },
                            x = w(i),
                            v = g(x),
                            R = await c.getDimensions(f),
                            A = "y" === x,
                            L = A ? "top" : "left",
                            T = A ? "bottom" : "right",
                            E = A ? "clientHeight" : "clientWidth",
                            S = l.reference[v] + l.reference[x] - y[x] - l.floating[v],
                            D = y[x] - l.reference[x],
                            O = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(f));
                        let C = O ? O[E] : 0;
                        (C && (await (null == c.isElement ? void 0 : c.isElement(O)))) || (C = s.floating[E] || l.floating[v]);
                        const P = S / 2 - D / 2,
                            k = C / 2 - R[v] / 2 - 1,
                            F = r(h[L], k),
                            H = r(h[T], k),
                            M = F,
                            W = C - R[v] - H,
                            B = C / 2 - R[v] / 2 + P,
                            V = u(M, B, W),
                            _ = !a.arrow && null != m(i) && B !== V && l.reference[v] / 2 - (B < M ? F : H) - R[v] / 2 < 0,
                            z = _ ? (B < M ? B - M : B - W) : 0;
                        return { [x]: y[x] + z, data: { [x]: V, centerOffset: B - V - z, ...(_ && { alignmentOffset: z }) }, reset: _ };
                    },
                }),
                pt = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            options: t,
                            fn(e) {
                                const { x: n, y: o, placement: r, rects: i, middlewareData: l } = e,
                                    { offset: c = 0, mainAxis: s = !0, crossAxis: a = !0 } = d(t, e),
                                    f = { x: n, y: o },
                                    u = y(r),
                                    m = h(u);
                                let g = f[m],
                                    w = f[u];
                                const x = d(c, e),
                                    v = "number" == typeof x ? { mainAxis: x, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x };
                                if (s) {
                                    const t = "y" === m ? "height" : "width",
                                        e = i.reference[m] - i.floating[t] + v.mainAxis,
                                        n = i.reference[m] + i.reference[t] - v.mainAxis;
                                    g < e ? (g = e) : g > n && (g = n);
                                }
                                if (a) {
                                    var b, R;
                                    const t = "y" === m ? "width" : "height",
                                        e = ["top", "left"].includes(p(r)),
                                        n = i.reference[u] - i.floating[t] + ((e && (null == (b = l.offset) ? void 0 : b[u])) || 0) + (e ? 0 : v.crossAxis),
                                        o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (R = l.offset) ? void 0 : R[u]) || 0) - (e ? v.crossAxis : 0);
                                    w < n ? (w = n) : w > o && (w = o);
                                }
                                return { [m]: g, [u]: w };
                            },
                        }
                    );
                },
                mt = (t, e, n) => {
                    const o = new Map(),
                        r = { platform: it, ...n },
                        i = { ...r.platform, _c: o };
                    return (async (t, e, n) => {
                        const { placement: o = "bottom", strategy: r = "absolute", middleware: i = [], platform: l } = n,
                            c = i.filter(Boolean),
                            s = await (null == l.isRTL ? void 0 : l.isRTL(e));
                        let a = await l.getElementRects({ reference: t, floating: e, strategy: r }),
                            { x: f, y: u } = A(a, o, s),
                            d = o,
                            p = {},
                            m = 0;
                        for (let n = 0; n < c.length; n++) {
                            const { name: i, fn: h } = c[n],
                                { x: g, y, data: w, reset: x } = await h({ x: f, y: u, initialPlacement: o, placement: d, strategy: r, middlewareData: p, rects: a, platform: l, elements: { reference: t, floating: e } });
                            (f = null != g ? g : f), (u = null != y ? y : u), (p = { ...p, [i]: { ...p[i], ...w } }), x && m <= 50 && (m++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (a = !0 === x.rects ? await l.getElementRects({ reference: t, floating: e, strategy: r }) : x.rects), ({ x: f, y: u } = A(a, d, s))), (n = -1));
                        }
                        return { x: f, y: u, placement: d, strategy: r, middlewareData: p };
                    })(t, e, { ...r, platform: i });
                };
        },
        992416: (t, e, n) => {
            n.d(e, { Cp: () => w, RR: () => g, YF: () => u, cv: () => p, dp: () => y, dr: () => h, uY: () => m, x7: () => x });
            var o = n(94258),
                r = n(202784),
                i = n(928316),
                l = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
            function c(t, e) {
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ("function" == typeof t && t.toString() === e.toString()) return !0;
                let n, o, r;
                if (t && e && "object" == typeof t) {
                    if (Array.isArray(t)) {
                        if (((n = t.length), n !== e.length)) return !1;
                        for (o = n; 0 != o--; ) if (!c(t[o], e[o])) return !1;
                        return !0;
                    }
                    if (((r = Object.keys(t)), (n = r.length), n !== Object.keys(e).length)) return !1;
                    for (o = n; 0 != o--; ) if (!{}.hasOwnProperty.call(e, r[o])) return !1;
                    for (o = n; 0 != o--; ) {
                        const n = r[o];
                        if (("_owner" !== n || !t.$$typeof) && !c(t[n], e[n])) return !1;
                    }
                    return !0;
                }
                return t != t && e != e;
            }
            function s(t) {
                if ("undefined" == typeof window) return 1;
                return (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
            }
            function a(t, e) {
                const n = s(t);
                return Math.round(e * n) / n;
            }
            function f(t) {
                const e = r.useRef(t);
                return (
                    l(() => {
                        e.current = t;
                    }),
                    e
                );
            }
            function u(t) {
                void 0 === t && (t = {});
                const { placement: e = "bottom", strategy: n = "absolute", middleware: u = [], platform: d, elements: { reference: p, floating: m } = {}, transform: h = !0, whileElementsMounted: g, open: y } = t,
                    [w, x] = r.useState({ x: 0, y: 0, strategy: n, placement: e, middlewareData: {}, isPositioned: !1 }),
                    [v, b] = r.useState(u);
                c(v, u) || b(u);
                const [R, A] = r.useState(null),
                    [L, T] = r.useState(null),
                    E = r.useCallback((t) => {
                        t !== C.current && ((C.current = t), A(t));
                    }, []),
                    S = r.useCallback((t) => {
                        t !== P.current && ((P.current = t), T(t));
                    }, []),
                    D = p || R,
                    O = m || L,
                    C = r.useRef(null),
                    P = r.useRef(null),
                    k = r.useRef(w),
                    F = null != g,
                    H = f(g),
                    M = f(d),
                    W = r.useCallback(() => {
                        if (!C.current || !P.current) return;
                        const t = { placement: e, strategy: n, middleware: v };
                        M.current && (t.platform = M.current),
                            (0, o.oo)(C.current, P.current, t).then((t) => {
                                const e = { ...t, isPositioned: !0 };
                                B.current &&
                                    !c(k.current, e) &&
                                    ((k.current = e),
                                    i.flushSync(() => {
                                        x(e);
                                    }));
                            });
                    }, [v, e, n, M]);
                l(() => {
                    !1 === y && k.current.isPositioned && ((k.current.isPositioned = !1), x((t) => ({ ...t, isPositioned: !1 })));
                }, [y]);
                const B = r.useRef(!1);
                l(
                    () => (
                        (B.current = !0),
                        () => {
                            B.current = !1;
                        }
                    ),
                    [],
                ),
                    l(() => {
                        if ((D && (C.current = D), O && (P.current = O), D && O)) {
                            if (H.current) return H.current(D, O, W);
                            W();
                        }
                    }, [D, O, W, H, F]);
                const V = r.useMemo(() => ({ reference: C, floating: P, setReference: E, setFloating: S }), [E, S]),
                    _ = r.useMemo(() => ({ reference: D, floating: O }), [D, O]),
                    z = r.useMemo(() => {
                        const t = { position: n, left: 0, top: 0 };
                        if (!_.floating) return t;
                        const e = a(_.floating, w.x),
                            o = a(_.floating, w.y);
                        return h ? { ...t, transform: "translate(" + e + "px, " + o + "px)", ...(s(_.floating) >= 1.5 && { willChange: "transform" }) } : { position: n, left: e, top: o };
                    }, [n, h, _.floating, w.x, w.y]);
                return r.useMemo(() => ({ ...w, update: W, refs: V, elements: _, floatingStyles: z }), [w, W, V, _, z]);
            }
            const d = (t) => ({
                    name: "arrow",
                    options: t,
                    fn(e) {
                        const { element: n, padding: r } = "function" == typeof t ? t(e) : t;
                        return n && ((i = n), {}.hasOwnProperty.call(i, "current")) ? (null != n.current ? (0, o.x7)({ element: n.current, padding: r }).fn(e) : {}) : n ? (0, o.x7)({ element: n, padding: r }).fn(e) : {};
                        var i;
                    },
                }),
                p = (t, e) => ({ ...(0, o.cv)(t), options: [t, e] }),
                m = (t, e) => ({ ...(0, o.uY)(t), options: [t, e] }),
                h = (t, e) => ({ ...(0, o.dr)(t), options: [t, e] }),
                g = (t, e) => ({ ...(0, o.RR)(t), options: [t, e] }),
                y = (t, e) => ({ ...(0, o.dp)(t), options: [t, e] }),
                w = (t, e) => ({ ...(0, o.Cp)(t), options: [t, e] }),
                x = (t, e) => ({ ...d(t), options: [t, e] });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-bb3d84b5.f71e137a.js.map
