"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-d2eb5610"],
    {
        482609: (t) => {
            t.exports = function (t) {
                var e = [];
                return (
                    (e.toString = function () {
                        return this.map(function (e) {
                            var n = (function (t, e) {
                                var n = t[1] || "",
                                    o = t[3];
                                if (!o) return n;
                                if (e && "function" == typeof btoa) {
                                    var r = ((l = o), (c = btoa(unescape(encodeURIComponent(JSON.stringify(l))))), (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(s, " */")),
                                        i = o.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */");
                                        });
                                    return [n].concat(i).concat([r]).join("\n");
                                }
                                var l, c, s;
                                return [n].join("\n");
                            })(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (e.i = function (t, n, o) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var r = {};
                        if (o)
                            for (var i = 0; i < this.length; i++) {
                                var l = this[i][0];
                                null != l && (r[l] = !0);
                            }
                        for (var c = 0; c < t.length; c++) {
                            var s = [].concat(t[c]);
                            (o && r[s[0]]) || (n && (s[2] ? (s[2] = "".concat(n, " and ").concat(s[2])) : (s[2] = n)), e.push(s));
                        }
                    }),
                    e
                );
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
            function v(t) {
                return t.replace(/start|end/g, (t) => f[t]);
            }
            function x(t) {
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
                    v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c.floating)),
                    x = ((await (null == i.isElement ? void 0 : i.isElement(v))) && (await (null == i.getScale ? void 0 : i.getScale(v)))) || { x: 1, y: 1 },
                    A = R(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: c, rect: w, offsetParent: v, strategy: s }) : w);
                return { top: (y.top - A.top + h.top) / x.y, bottom: (A.bottom - y.bottom + h.bottom) / x.y, left: (y.left - A.left + h.left) / x.x, right: (A.right - y.right + h.right) / x.x };
            }
            function T(t, e) {
                return { top: t.top - e.height, right: t.right - e.width, bottom: t.bottom - e.height, left: t.left - e.width };
            }
            function E(t) {
                return o.some((e) => t[e] >= 0);
            }
            function O(t) {
                return P(t) ? (t.nodeName || "").toLowerCase() : "#document";
            }
            function S(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window;
            }
            function C(t) {
                var e;
                return null == (e = (P(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement;
            }
            function P(t) {
                return t instanceof Node || t instanceof S(t).Node;
            }
            function D(t) {
                return t instanceof Element || t instanceof S(t).Element;
            }
            function k(t) {
                return t instanceof HTMLElement || t instanceof S(t).HTMLElement;
            }
            function F(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof S(t).ShadowRoot);
            }
            function H(t) {
                const { overflow: e, overflowX: n, overflowY: o, display: r } = N(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r);
            }
            function M(t) {
                return ["table", "td", "th"].includes(O(t));
            }
            function j(t) {
                return [":popover-open", ":modal"].some((e) => {
                    try {
                        return t.matches(e);
                    } catch (t) {
                        return !1;
                    }
                });
            }
            function V(t) {
                const e = W(),
                    n = D(t) ? N(t) : t;
                return "none" !== n.transform || "none" !== n.perspective || (!!n.containerType && "normal" !== n.containerType) || (!e && !!n.backdropFilter && "none" !== n.backdropFilter) || (!e && !!n.filter && "none" !== n.filter) || ["transform", "perspective", "filter"].some((t) => (n.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some((t) => (n.contain || "").includes(t));
            }
            function W() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
            }
            function B(t) {
                return ["html", "body", "#document"].includes(O(t));
            }
            function N(t) {
                return S(t).getComputedStyle(t);
            }
            function _(t) {
                return D(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
            }
            function z(t) {
                if ("html" === O(t)) return t;
                const e = t.assignedSlot || t.parentNode || (F(t) && t.host) || C(t);
                return F(e) ? e.host : e;
            }
            function Y(t) {
                const e = z(t);
                return B(e) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : k(e) && H(e) ? e : Y(e);
            }
            function I(t, e, n) {
                var o;
                void 0 === e && (e = []), void 0 === n && (n = !0);
                const r = Y(t),
                    i = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
                    l = S(r);
                if (i) {
                    const t = $(l);
                    return e.concat(l, l.visualViewport || [], H(r) ? r : [], t && n ? I(t) : []);
                }
                return e.concat(r, I(r, [], n));
            }
            function $(t) {
                return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
            }
            function U(t) {
                const e = N(t);
                let n = parseFloat(e.width) || 0,
                    o = parseFloat(e.height) || 0;
                const r = k(t),
                    i = r ? t.offsetWidth : n,
                    c = r ? t.offsetHeight : o,
                    s = l(n) !== i || l(o) !== c;
                return s && ((n = i), (o = c)), { width: n, height: o, $: s };
            }
            function X(t) {
                return D(t) ? t : t.contextElement;
            }
            function q(t) {
                const e = X(t);
                if (!k(e)) return s(1);
                const n = e.getBoundingClientRect(),
                    { width: o, height: r, $: i } = U(e);
                let c = (i ? l(n.width) : n.width) / o,
                    a = (i ? l(n.height) : n.height) / r;
                return (c && Number.isFinite(c)) || (c = 1), (a && Number.isFinite(a)) || (a = 1), { x: c, y: a };
            }
            const J = s(0);
            function G(t) {
                const e = S(t);
                return W() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : J;
            }
            function K(t, e, n, o) {
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                const r = t.getBoundingClientRect(),
                    i = X(t);
                let l = s(1);
                e && (o ? D(o) && (l = q(o)) : (l = q(t)));
                const c = (function (t, e, n) {
                    return void 0 === e && (e = !1), !(!n || (e && n !== S(t))) && e;
                })(i, n, o)
                    ? G(i)
                    : s(0);
                let a = (r.left + c.x) / l.x,
                    f = (r.top + c.y) / l.y,
                    u = r.width / l.x,
                    d = r.height / l.y;
                if (i) {
                    const t = S(i),
                        e = o && D(o) ? S(o) : o;
                    let n = t,
                        r = $(n);
                    for (; r && o && e !== n; ) {
                        const t = q(r),
                            e = r.getBoundingClientRect(),
                            o = N(r),
                            i = e.left + (r.clientLeft + parseFloat(o.paddingLeft)) * t.x,
                            l = e.top + (r.clientTop + parseFloat(o.paddingTop)) * t.y;
                        (a *= t.x), (f *= t.y), (u *= t.x), (d *= t.y), (a += i), (f += l), (n = S(r)), (r = $(n));
                    }
                }
                return R({ width: u, height: d, x: a, y: f });
            }
            function Q(t) {
                return K(C(t)).left + _(t).scrollLeft;
            }
            function Z(t, e, n) {
                let o;
                if ("viewport" === e)
                    o = (function (t, e) {
                        const n = S(t),
                            o = C(t),
                            r = n.visualViewport;
                        let i = o.clientWidth,
                            l = o.clientHeight,
                            c = 0,
                            s = 0;
                        if (r) {
                            (i = r.width), (l = r.height);
                            const t = W();
                            (!t || (t && "fixed" === e)) && ((c = r.offsetLeft), (s = r.offsetTop));
                        }
                        return { width: i, height: l, x: c, y: s };
                    })(t, n);
                else if ("document" === e)
                    o = (function (t) {
                        const e = C(t),
                            n = _(t),
                            o = t.ownerDocument.body,
                            r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
                            l = i(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
                        let c = -n.scrollLeft + Q(t);
                        const s = -n.scrollTop;
                        return "rtl" === N(o).direction && (c += i(e.clientWidth, o.clientWidth) - r), { width: r, height: l, x: c, y: s };
                    })(C(t));
                else if (D(e))
                    o = (function (t, e) {
                        const n = K(t, !0, "fixed" === e),
                            o = n.top + t.clientTop,
                            r = n.left + t.clientLeft,
                            i = k(t) ? q(t) : s(1);
                        return { width: t.clientWidth * i.x, height: t.clientHeight * i.y, x: r * i.x, y: o * i.y };
                    })(e, n);
                else {
                    const n = G(t);
                    o = { ...e, x: e.x - n.x, y: e.y - n.y };
                }
                return R(o);
            }
            function tt(t, e) {
                const n = z(t);
                return !(n === e || !D(n) || B(n)) && ("fixed" === N(n).position || tt(n, e));
            }
            function et(t, e, n) {
                const o = k(e),
                    r = C(e),
                    i = "fixed" === n,
                    l = K(t, !0, i, e);
                let c = { scrollLeft: 0, scrollTop: 0 };
                const a = s(0);
                if (o || (!o && !i))
                    if ((("body" !== O(e) || H(r)) && (c = _(e)), o)) {
                        const t = K(e, !0, i, e);
                        (a.x = t.x + e.clientLeft), (a.y = t.y + e.clientTop);
                    } else r && (a.x = Q(r));
                return { x: l.left + c.scrollLeft - a.x, y: l.top + c.scrollTop - a.y, width: l.width, height: l.height };
            }
            function nt(t) {
                return "static" === N(t).position;
            }
            function ot(t, e) {
                return k(t) && "fixed" !== N(t).position ? (e ? e(t) : t.offsetParent) : null;
            }
            function rt(t, e) {
                const n = S(t);
                if (j(t)) return n;
                if (!k(t)) {
                    let e = z(t);
                    for (; e && !B(e); ) {
                        if (D(e) && !nt(e)) return e;
                        e = z(e);
                    }
                    return n;
                }
                let o = ot(t, e);
                for (; o && M(o) && nt(o); ) o = ot(o, e);
                return o && B(o) && nt(o) && !V(o)
                    ? n
                    : o ||
                          (function (t) {
                              let e = z(t);
                              for (; k(e) && !B(e); ) {
                                  if (V(e)) return e;
                                  if (j(e)) return null;
                                  e = z(e);
                              }
                              return null;
                          })(t) ||
                          n;
            }
            const it = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
                    let { elements: e, rect: n, offsetParent: o, strategy: r } = t;
                    const i = "fixed" === r,
                        l = C(o),
                        c = !!e && j(e.floating);
                    if (o === l || (c && i)) return n;
                    let a = { scrollLeft: 0, scrollTop: 0 },
                        f = s(1);
                    const u = s(0),
                        d = k(o);
                    if ((d || (!d && !i)) && (("body" !== O(o) || H(l)) && (a = _(o)), k(o))) {
                        const t = K(o);
                        (f = q(o)), (u.x = t.x + o.clientLeft), (u.y = t.y + o.clientTop);
                    }
                    return { width: n.width * f.x, height: n.height * f.y, x: n.x * f.x - a.scrollLeft * f.x + u.x, y: n.y * f.y - a.scrollTop * f.y + u.y };
                },
                getDocumentElement: C,
                getClippingRect: function (t) {
                    let { element: e, boundary: n, rootBoundary: o, strategy: l } = t;
                    const c = [
                            ...("clippingAncestors" === n
                                ? j(e)
                                    ? []
                                    : (function (t, e) {
                                          const n = e.get(t);
                                          if (n) return n;
                                          let o = I(t, [], !1).filter((t) => D(t) && "body" !== O(t)),
                                              r = null;
                                          const i = "fixed" === N(t).position;
                                          let l = i ? z(t) : t;
                                          for (; D(l) && !B(l); ) {
                                              const e = N(l),
                                                  n = V(l);
                                              n || "fixed" !== e.position || (r = null), (i ? !n && !r : (!n && "static" === e.position && r && ["absolute", "fixed"].includes(r.position)) || (H(l) && !n && tt(t, l))) ? (o = o.filter((t) => t !== l)) : (r = e), (l = z(l));
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
                    const { width: e, height: n } = U(t);
                    return { width: e, height: n };
                },
                getScale: q,
                isElement: D,
                isRTL: function (t) {
                    return "rtl" === N(t).direction;
                },
            };
            function lt(t, e, n, o) {
                void 0 === o && (o = {});
                const { ancestorScroll: l = !0, ancestorResize: s = !0, elementResize: a = "function" == typeof ResizeObserver, layoutShift: f = "function" == typeof IntersectionObserver, animationFrame: u = !1 } = o,
                    d = X(t),
                    p = l || s ? [...(d ? I(d) : []), ...I(e)] : [];
                p.forEach((t) => {
                    l && t.addEventListener("scroll", n, { passive: !0 }), s && t.addEventListener("resize", n);
                });
                const m =
                    d && f
                        ? (function (t, e) {
                              let n,
                                  o = null;
                              const l = C(t);
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
                let w = u ? K(t) : null;
                return (
                    u &&
                        (function e() {
                            const o = K(t);
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
                                    v = a[m];
                                if (i) {
                                    const t = "y" === g ? "bottom" : "right";
                                    w = u(w + f["y" === g ? "top" : "left"], w, w - f[t]);
                                }
                                if (l) {
                                    const t = "y" === m ? "bottom" : "right";
                                    v = u(v + f["y" === m ? "top" : "left"], v, v - f[t]);
                                }
                                const x = c.fn({ ...e, [g]: w, [m]: v });
                                return { ...x, data: { x: x.x - n, y: x.y - o } };
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
                                    O = y(c),
                                    S = p(c) === c,
                                    C = await (null == s.isRTL ? void 0 : s.isRTL(a.floating)),
                                    P =
                                        h ||
                                        (S || !A
                                            ? [x(c)]
                                            : (function (t) {
                                                  const e = x(t);
                                                  return [v(t), e, v(e)];
                                              })(c)),
                                    D = "none" !== R;
                                !h &&
                                    D &&
                                    P.push(
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
                                            return r && ((i = i.map((t) => t + "-" + r)), e && (i = i.concat(i.map(v)))), i;
                                        })(c, A, R, C),
                                    );
                                const k = [c, ...P],
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
                                        return e.reference[i] > e.floating[i] && (l = x(l)), [l, x(l)];
                                    })(r, l, C);
                                    H.push(F[t[0]], F[t[1]]);
                                }
                                if (((M = [...M, { placement: r, overflows: H }]), !H.every((t) => t <= 0))) {
                                    var j, V;
                                    const t = ((null == (j = i.flip) ? void 0 : j.index) || 0) + 1,
                                        e = k[t];
                                    if (e) return { data: { index: t, overflows: M }, reset: { placement: e } };
                                    let n = null == (V = M.filter((t) => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : V.placement;
                                    if (!n)
                                        switch (b) {
                                            case "bestFit": {
                                                var W;
                                                const t =
                                                    null ==
                                                    (W = M.filter((t) => {
                                                        if (D) {
                                                            const e = y(t.placement);
                                                            return e === O || "y" === e;
                                                        }
                                                        return !0;
                                                    })
                                                        .map((t) => [t.placement, t.overflows.filter((t) => t > 0).reduce((t, e) => t + e, 0)])
                                                        .sort((t, e) => t[1] - e[1])[0])
                                                        ? void 0
                                                        : W[0];
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
                                    { width: w, height: v } = o.floating;
                                let x, b;
                                "top" === u || "bottom" === u ? ((x = u), (b = h === ((await (null == l.isRTL ? void 0 : l.isRTL(c.floating))) ? "start" : "end") ? "left" : "right")) : ((b = u), (x = "end" === h ? "top" : "bottom"));
                                const R = v - f.top - f.bottom,
                                    A = w - f.left - f.right,
                                    T = r(v - f[x], R),
                                    E = r(w - f[b], A),
                                    O = !e.middlewareData.shift;
                                let S = T,
                                    C = E;
                                if ((g ? (C = h || O ? r(E, A) : A) : (S = h || O ? r(T, R) : R), O && !h)) {
                                    const t = i(f.left, 0),
                                        e = i(f.right, 0),
                                        n = i(f.top, 0),
                                        o = i(f.bottom, 0);
                                    g ? (C = w - 2 * (0 !== t || 0 !== e ? t + e : i(f.left, f.right))) : (S = v - 2 * (0 !== n || 0 !== o ? n + o : i(f.top, f.bottom)));
                                }
                                await s({ ...e, availableWidth: C, availableHeight: S });
                                const P = await l.getDimensions(c.floating);
                                return w !== P.width || v !== P.height ? { reset: { rects: !0 } } : {};
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
                            v = w(i),
                            x = g(v),
                            R = await c.getDimensions(f),
                            A = "y" === v,
                            L = A ? "top" : "left",
                            T = A ? "bottom" : "right",
                            E = A ? "clientHeight" : "clientWidth",
                            O = l.reference[x] + l.reference[v] - y[v] - l.floating[x],
                            S = y[v] - l.reference[v],
                            C = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(f));
                        let P = C ? C[E] : 0;
                        (P && (await (null == c.isElement ? void 0 : c.isElement(C)))) || (P = s.floating[E] || l.floating[x]);
                        const D = O / 2 - S / 2,
                            k = P / 2 - R[x] / 2 - 1,
                            F = r(h[L], k),
                            H = r(h[T], k),
                            M = F,
                            j = P - R[x] - H,
                            V = P / 2 - R[x] / 2 + D,
                            W = u(M, V, j),
                            B = !a.arrow && null != m(i) && V !== W && l.reference[x] / 2 - (V < M ? F : H) - R[x] / 2 < 0,
                            N = B ? (V < M ? V - M : V - j) : 0;
                        return { [v]: y[v] + N, data: { [v]: W, centerOffset: V - W - N, ...(B && { alignmentOffset: N }) }, reset: B };
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
                                const v = d(c, e),
                                    x = "number" == typeof v ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
                                if (s) {
                                    const t = "y" === m ? "height" : "width",
                                        e = i.reference[m] - i.floating[t] + x.mainAxis,
                                        n = i.reference[m] + i.reference[t] - x.mainAxis;
                                    g < e ? (g = e) : g > n && (g = n);
                                }
                                if (a) {
                                    var b, R;
                                    const t = "y" === m ? "width" : "height",
                                        e = ["top", "left"].includes(p(r)),
                                        n = i.reference[u] - i.floating[t] + ((e && (null == (b = l.offset) ? void 0 : b[u])) || 0) + (e ? 0 : x.crossAxis),
                                        o = i.reference[u] + i.reference[t] + (e ? 0 : (null == (R = l.offset) ? void 0 : R[u]) || 0) - (e ? x.crossAxis : 0);
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
                                { x: g, y, data: w, reset: v } = await h({ x: f, y: u, initialPlacement: o, placement: d, strategy: r, middlewareData: p, rects: a, platform: l, elements: { reference: t, floating: e } });
                            (f = null != g ? g : f), (u = null != y ? y : u), (p = { ...p, [i]: { ...p[i], ...w } }), v && m <= 50 && (m++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (a = !0 === v.rects ? await l.getElementRects({ reference: t, floating: e, strategy: r }) : v.rects), ({ x: f, y: u } = A(a, d, s))), (n = -1));
                        }
                        return { x: f, y: u, placement: d, strategy: r, middlewareData: p };
                    })(t, e, { ...r, platform: i });
                };
        },
        992416: (t, e, n) => {
            n.d(e, { Cp: () => w, RR: () => g, YF: () => u, cv: () => p, dp: () => y, dr: () => h, uY: () => m, x7: () => v });
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
                    [w, v] = r.useState({ x: 0, y: 0, strategy: n, placement: e, middlewareData: {}, isPositioned: !1 }),
                    [x, b] = r.useState(u);
                c(x, u) || b(u);
                const [R, A] = r.useState(null),
                    [L, T] = r.useState(null),
                    E = r.useCallback((t) => {
                        t !== P.current && ((P.current = t), A(t));
                    }, []),
                    O = r.useCallback((t) => {
                        t !== D.current && ((D.current = t), T(t));
                    }, []),
                    S = p || R,
                    C = m || L,
                    P = r.useRef(null),
                    D = r.useRef(null),
                    k = r.useRef(w),
                    F = null != g,
                    H = f(g),
                    M = f(d),
                    j = r.useCallback(() => {
                        if (!P.current || !D.current) return;
                        const t = { placement: e, strategy: n, middleware: x };
                        M.current && (t.platform = M.current),
                            (0, o.oo)(P.current, D.current, t).then((t) => {
                                const e = { ...t, isPositioned: !0 };
                                V.current &&
                                    !c(k.current, e) &&
                                    ((k.current = e),
                                    i.flushSync(() => {
                                        v(e);
                                    }));
                            });
                    }, [x, e, n, M]);
                l(() => {
                    !1 === y && k.current.isPositioned && ((k.current.isPositioned = !1), v((t) => ({ ...t, isPositioned: !1 })));
                }, [y]);
                const V = r.useRef(!1);
                l(
                    () => (
                        (V.current = !0),
                        () => {
                            V.current = !1;
                        }
                    ),
                    [],
                ),
                    l(() => {
                        if ((S && (P.current = S), C && (D.current = C), S && C)) {
                            if (H.current) return H.current(S, C, j);
                            j();
                        }
                    }, [S, C, j, H, F]);
                const W = r.useMemo(() => ({ reference: P, floating: D, setReference: E, setFloating: O }), [E, O]),
                    B = r.useMemo(() => ({ reference: S, floating: C }), [S, C]),
                    N = r.useMemo(() => {
                        const t = { position: n, left: 0, top: 0 };
                        if (!B.floating) return t;
                        const e = a(B.floating, w.x),
                            o = a(B.floating, w.y);
                        return h ? { ...t, transform: "translate(" + e + "px, " + o + "px)", ...(s(B.floating) >= 1.5 && { willChange: "transform" }) } : { position: n, left: e, top: o };
                    }, [n, h, B.floating, w.x, w.y]);
                return r.useMemo(() => ({ ...w, update: j, refs: W, elements: B, floatingStyles: N }), [w, j, W, B, N]);
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
                v = (t, e) => ({ ...d(t), options: [t, e] });
        },
        110929: (t, e, n) => {
            n.d(e, { cx: () => i, j: () => l });
            var o = n(840489);
            const r = (t) => ("boolean" == typeof t ? `${t}` : 0 === t ? "0" : t),
                i = o.W,
                l = (t, e) => (n) => {
                    var o;
                    if (null == (null == e ? void 0 : e.variants)) return i(t, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    const { variants: l, defaultVariants: c } = e,
                        s = Object.keys(l).map((t) => {
                            const e = null == n ? void 0 : n[t],
                                o = null == c ? void 0 : c[t];
                            if (null === e) return null;
                            const i = r(e) || r(o);
                            return l[t][i];
                        }),
                        a =
                            n &&
                            Object.entries(n).reduce((t, e) => {
                                let [n, o] = e;
                                return void 0 === o || (t[n] = o), t;
                            }, {}),
                        f =
                            null == e || null === (o = e.compoundVariants) || void 0 === o
                                ? void 0
                                : o.reduce((t, e) => {
                                      let { class: n, className: o, ...r } = e;
                                      return Object.entries(r).every((t) => {
                                          let [e, n] = t;
                                          return Array.isArray(n) ? n.includes({ ...c, ...a }[e]) : { ...c, ...a }[e] === n;
                                      })
                                          ? [...t, n, o]
                                          : t;
                                  }, []);
                    return i(t, s, f, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-d2eb5610.60aeb5ba.js.map
