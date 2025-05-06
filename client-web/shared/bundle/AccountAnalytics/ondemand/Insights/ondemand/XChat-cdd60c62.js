"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-cdd60c62", "shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"],
    {
        549732: (t, e, n) => {
            n.d(e, { Ry: () => u });
            var r = function (t) {
                    return "undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body;
                },
                o = new WeakMap(),
                i = new WeakMap(),
                l = {},
                c = 0,
                a = function (t) {
                    return t && (t.host || a(t.parentNode));
                },
                s = function (t, e, n, r) {
                    var s = (function (t, e) {
                        return e
                            .map(function (e) {
                                if (t.contains(e)) return e;
                                var n = a(e);
                                return n && t.contains(n) ? n : null;
                            })
                            .filter(function (t) {
                                return Boolean(t);
                            });
                    })(e, Array.isArray(t) ? t : [t]);
                    l[n] || (l[n] = new WeakMap());
                    var u = l[n],
                        f = [],
                        d = new Set(),
                        p = new Set(s),
                        h = function (t) {
                            t && !d.has(t) && (d.add(t), h(t.parentNode));
                        };
                    s.forEach(h);
                    var m = function (t) {
                        t &&
                            !p.has(t) &&
                            Array.prototype.forEach.call(t.children, function (t) {
                                if (d.has(t)) m(t);
                                else
                                    try {
                                        var e = t.getAttribute(r),
                                            l = null !== e && "false" !== e,
                                            c = (o.get(t) || 0) + 1,
                                            a = (u.get(t) || 0) + 1;
                                        o.set(t, c), u.set(t, a), f.push(t), 1 === c && l && i.set(t, !0), 1 === a && t.setAttribute(n, "true"), l || t.setAttribute(r, "true");
                                    } catch (t) {}
                            });
                    };
                    return (
                        m(e),
                        d.clear(),
                        c++,
                        function () {
                            f.forEach(function (t) {
                                var e = o.get(t) - 1,
                                    l = u.get(t) - 1;
                                o.set(t, e), u.set(t, l), e || (i.has(t) || t.removeAttribute(r), i.delete(t)), l || t.removeAttribute(n);
                            }),
                                --c || ((o = new WeakMap()), (o = new WeakMap()), (i = new WeakMap()), (l = {}));
                        }
                    );
                },
                u = function (t, e, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var o = Array.from(Array.isArray(t) ? t : [t]),
                        i = e || r(t);
                    return i
                        ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))), s(o, i, n, "aria-hidden"))
                        : function () {
                              return null;
                          };
                };
        },
        482609: (t) => {
            t.exports = function (t) {
                var e = [];
                return (
                    (e.toString = function () {
                        return this.map(function (e) {
                            var n = (function (t, e) {
                                var n = t[1] || "",
                                    r = t[3];
                                if (!r) return n;
                                if (e && "function" == typeof btoa) {
                                    var o = ((l = r), (c = btoa(unescape(encodeURIComponent(JSON.stringify(l))))), (a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(a, " */")),
                                        i = r.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                                        });
                                    return [n].concat(i).concat([o]).join("\n");
                                }
                                var l, c, a;
                                return [n].join("\n");
                            })(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (e.i = function (t, n, r) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var o = {};
                        if (r)
                            for (var i = 0; i < this.length; i++) {
                                var l = this[i][0];
                                null != l && (o[l] = !0);
                            }
                        for (var c = 0; c < t.length; c++) {
                            var a = [].concat(t[c]);
                            (r && o[a[0]]) || (n && (a[2] ? (a[2] = "".concat(n, " and ").concat(a[2])) : (a[2] = n)), e.push(a));
                        }
                    }),
                    e
                );
            };
        },
        250132: (t, e, n) => {
            var r;
            n.d(e, { V: () => o });
            var o = function () {
                return r || n.nc;
            };
        },
        94258: (t, e, n) => {
            n.d(e, { x7: () => dt, Me: () => lt, oo: () => ht, RR: () => st, Cp: () => ft, dr: () => pt, cv: () => ct, uY: () => at, dp: () => ut });
            const r = ["top", "right", "bottom", "left"],
                o = Math.min,
                i = Math.max,
                l = Math.round,
                c = Math.floor,
                a = (t) => ({ x: t, y: t }),
                s = { left: "right", right: "left", bottom: "top", top: "bottom" },
                u = { start: "end", end: "start" };
            function f(t, e, n) {
                return i(t, o(e, n));
            }
            function d(t, e) {
                return "function" == typeof t ? t(e) : t;
            }
            function p(t) {
                return t.split("-")[0];
            }
            function h(t) {
                return t.split("-")[1];
            }
            function m(t) {
                return "x" === t ? "y" : "x";
            }
            function g(t) {
                return "y" === t ? "height" : "width";
            }
            function y(t) {
                return ["top", "bottom"].includes(p(t)) ? "y" : "x";
            }
            function w(t) {
                return m(y(t));
            }
            function v(t) {
                return t.replace(/start|end/g, (t) => u[t]);
            }
            function x(t) {
                return t.replace(/left|right|bottom|top/g, (t) => s[t]);
            }
            function b(t) {
                return "number" != typeof t
                    ? (function (t) {
                          return { top: 0, right: 0, bottom: 0, left: 0, ...t };
                      })(t)
                    : { top: t, right: t, bottom: t, left: t };
            }
            function A(t) {
                const { x: e, y: n, width: r, height: o } = t;
                return { width: r, height: o, top: n, left: e, right: e + r, bottom: n + o, x: e, y: n };
            }
            function R(t, e, n) {
                let { reference: r, floating: o } = t;
                const i = y(e),
                    l = w(e),
                    c = g(l),
                    a = p(e),
                    s = "y" === i,
                    u = r.x + r.width / 2 - o.width / 2,
                    f = r.y + r.height / 2 - o.height / 2,
                    d = r[c] / 2 - o[c] / 2;
                let m;
                switch (a) {
                    case "top":
                        m = { x: u, y: r.y - o.height };
                        break;
                    case "bottom":
                        m = { x: u, y: r.y + r.height };
                        break;
                    case "right":
                        m = { x: r.x + r.width, y: f };
                        break;
                    case "left":
                        m = { x: r.x - o.width, y: f };
                        break;
                    default:
                        m = { x: r.x, y: r.y };
                }
                switch (h(e)) {
                    case "start":
                        m[l] -= d * (n && s ? -1 : 1);
                        break;
                    case "end":
                        m[l] += d * (n && s ? -1 : 1);
                }
                return m;
            }
            async function L(t, e) {
                var n;
                void 0 === e && (e = {});
                const { x: r, y: o, platform: i, rects: l, elements: c, strategy: a } = t,
                    { boundary: s = "clippingAncestors", rootBoundary: u = "viewport", elementContext: f = "floating", altBoundary: p = !1, padding: h = 0 } = d(e, t),
                    m = b(h),
                    g = c[p ? ("floating" === f ? "reference" : "floating") : f],
                    y = A(await i.getClippingRect({ element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || (await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(c.floating))), boundary: s, rootBoundary: u, strategy: a })),
                    w = "floating" === f ? { x: r, y: o, width: l.floating.width, height: l.floating.height } : l.reference,
                    v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c.floating)),
                    x = ((await (null == i.isElement ? void 0 : i.isElement(v))) && (await (null == i.getScale ? void 0 : i.getScale(v)))) || { x: 1, y: 1 },
                    R = A(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: c, rect: w, offsetParent: v, strategy: a }) : w);
                return { top: (y.top - R.top + m.top) / x.y, bottom: (R.bottom - y.bottom + m.bottom) / x.y, left: (y.left - R.left + m.left) / x.x, right: (R.right - y.right + m.right) / x.x };
            }
            function S(t, e) {
                return { top: t.top - e.height, right: t.right - e.width, bottom: t.bottom - e.height, left: t.left - e.width };
            }
            function E(t) {
                return r.some((e) => t[e] >= 0);
            }
            function T(t) {
                return C(t) ? (t.nodeName || "").toLowerCase() : "#document";
            }
            function O(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window;
            }
            function k(t) {
                var e;
                return null == (e = (C(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement;
            }
            function C(t) {
                return t instanceof Node || t instanceof O(t).Node;
            }
            function D(t) {
                return t instanceof Element || t instanceof O(t).Element;
            }
            function P(t) {
                return t instanceof HTMLElement || t instanceof O(t).HTMLElement;
            }
            function M(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof O(t).ShadowRoot);
            }
            function W(t) {
                const { overflow: e, overflowX: n, overflowY: r, display: o } = N(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
            }
            function F(t) {
                return ["table", "td", "th"].includes(T(t));
            }
            function H(t) {
                return [":popover-open", ":modal"].some((e) => {
                    try {
                        return t.matches(e);
                    } catch (t) {
                        return !1;
                    }
                });
            }
            function j(t) {
                const e = V(),
                    n = D(t) ? N(t) : t;
                return "none" !== n.transform || "none" !== n.perspective || (!!n.containerType && "normal" !== n.containerType) || (!e && !!n.backdropFilter && "none" !== n.backdropFilter) || (!e && !!n.filter && "none" !== n.filter) || ["transform", "perspective", "filter"].some((t) => (n.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some((t) => (n.contain || "").includes(t));
            }
            function V() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
            }
            function B(t) {
                return ["html", "body", "#document"].includes(T(t));
            }
            function N(t) {
                return O(t).getComputedStyle(t);
            }
            function _(t) {
                return D(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
            }
            function z(t) {
                if ("html" === T(t)) return t;
                const e = t.assignedSlot || t.parentNode || (M(t) && t.host) || k(t);
                return M(e) ? e.host : e;
            }
            function Y(t) {
                const e = z(t);
                return B(e) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : P(e) && W(e) ? e : Y(e);
            }
            function I(t, e, n) {
                var r;
                void 0 === e && (e = []), void 0 === n && (n = !0);
                const o = Y(t),
                    i = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
                    l = O(o);
                if (i) {
                    const t = $(l);
                    return e.concat(l, l.visualViewport || [], W(o) ? o : [], t && n ? I(t) : []);
                }
                return e.concat(o, I(o, [], n));
            }
            function $(t) {
                return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
            }
            function q(t) {
                const e = N(t);
                let n = parseFloat(e.width) || 0,
                    r = parseFloat(e.height) || 0;
                const o = P(t),
                    i = o ? t.offsetWidth : n,
                    c = o ? t.offsetHeight : r,
                    a = l(n) !== i || l(r) !== c;
                return a && ((n = i), (r = c)), { width: n, height: r, $: a };
            }
            function U(t) {
                return D(t) ? t : t.contextElement;
            }
            function X(t) {
                const e = U(t);
                if (!P(e)) return a(1);
                const n = e.getBoundingClientRect(),
                    { width: r, height: o, $: i } = q(e);
                let c = (i ? l(n.width) : n.width) / r,
                    s = (i ? l(n.height) : n.height) / o;
                return (c && Number.isFinite(c)) || (c = 1), (s && Number.isFinite(s)) || (s = 1), { x: c, y: s };
            }
            const J = a(0);
            function Z(t) {
                const e = O(t);
                return V() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : J;
            }
            function G(t, e, n, r) {
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                const o = t.getBoundingClientRect(),
                    i = U(t);
                let l = a(1);
                e && (r ? D(r) && (l = X(r)) : (l = X(t)));
                const c = (function (t, e, n) {
                    return void 0 === e && (e = !1), !(!n || (e && n !== O(t))) && e;
                })(i, n, r)
                    ? Z(i)
                    : a(0);
                let s = (o.left + c.x) / l.x,
                    u = (o.top + c.y) / l.y,
                    f = o.width / l.x,
                    d = o.height / l.y;
                if (i) {
                    const t = O(i),
                        e = r && D(r) ? O(r) : r;
                    let n = t,
                        o = $(n);
                    for (; o && r && e !== n; ) {
                        const t = X(o),
                            e = o.getBoundingClientRect(),
                            r = N(o),
                            i = e.left + (o.clientLeft + parseFloat(r.paddingLeft)) * t.x,
                            l = e.top + (o.clientTop + parseFloat(r.paddingTop)) * t.y;
                        (s *= t.x), (u *= t.y), (f *= t.x), (d *= t.y), (s += i), (u += l), (n = O(o)), (o = $(n));
                    }
                }
                return A({ width: f, height: d, x: s, y: u });
            }
            function K(t) {
                return G(k(t)).left + _(t).scrollLeft;
            }
            function Q(t, e, n) {
                let r;
                if ("viewport" === e)
                    r = (function (t, e) {
                        const n = O(t),
                            r = k(t),
                            o = n.visualViewport;
                        let i = r.clientWidth,
                            l = r.clientHeight,
                            c = 0,
                            a = 0;
                        if (o) {
                            (i = o.width), (l = o.height);
                            const t = V();
                            (!t || (t && "fixed" === e)) && ((c = o.offsetLeft), (a = o.offsetTop));
                        }
                        return { width: i, height: l, x: c, y: a };
                    })(t, n);
                else if ("document" === e)
                    r = (function (t) {
                        const e = k(t),
                            n = _(t),
                            r = t.ownerDocument.body,
                            o = i(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
                            l = i(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
                        let c = -n.scrollLeft + K(t);
                        const a = -n.scrollTop;
                        return "rtl" === N(r).direction && (c += i(e.clientWidth, r.clientWidth) - o), { width: o, height: l, x: c, y: a };
                    })(k(t));
                else if (D(e))
                    r = (function (t, e) {
                        const n = G(t, !0, "fixed" === e),
                            r = n.top + t.clientTop,
                            o = n.left + t.clientLeft,
                            i = P(t) ? X(t) : a(1);
                        return { width: t.clientWidth * i.x, height: t.clientHeight * i.y, x: o * i.x, y: r * i.y };
                    })(e, n);
                else {
                    const n = Z(t);
                    r = { ...e, x: e.x - n.x, y: e.y - n.y };
                }
                return A(r);
            }
            function tt(t, e) {
                const n = z(t);
                return !(n === e || !D(n) || B(n)) && ("fixed" === N(n).position || tt(n, e));
            }
            function et(t, e, n) {
                const r = P(e),
                    o = k(e),
                    i = "fixed" === n,
                    l = G(t, !0, i, e);
                let c = { scrollLeft: 0, scrollTop: 0 };
                const s = a(0);
                if (r || (!r && !i))
                    if ((("body" !== T(e) || W(o)) && (c = _(e)), r)) {
                        const t = G(e, !0, i, e);
                        (s.x = t.x + e.clientLeft), (s.y = t.y + e.clientTop);
                    } else o && (s.x = K(o));
                return { x: l.left + c.scrollLeft - s.x, y: l.top + c.scrollTop - s.y, width: l.width, height: l.height };
            }
            function nt(t) {
                return "static" === N(t).position;
            }
            function rt(t, e) {
                return P(t) && "fixed" !== N(t).position ? (e ? e(t) : t.offsetParent) : null;
            }
            function ot(t, e) {
                const n = O(t);
                if (H(t)) return n;
                if (!P(t)) {
                    let e = z(t);
                    for (; e && !B(e); ) {
                        if (D(e) && !nt(e)) return e;
                        e = z(e);
                    }
                    return n;
                }
                let r = rt(t, e);
                for (; r && F(r) && nt(r); ) r = rt(r, e);
                return r && B(r) && nt(r) && !j(r)
                    ? n
                    : r ||
                          (function (t) {
                              let e = z(t);
                              for (; P(e) && !B(e); ) {
                                  if (j(e)) return e;
                                  if (H(e)) return null;
                                  e = z(e);
                              }
                              return null;
                          })(t) ||
                          n;
            }
            const it = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
                    let { elements: e, rect: n, offsetParent: r, strategy: o } = t;
                    const i = "fixed" === o,
                        l = k(r),
                        c = !!e && H(e.floating);
                    if (r === l || (c && i)) return n;
                    let s = { scrollLeft: 0, scrollTop: 0 },
                        u = a(1);
                    const f = a(0),
                        d = P(r);
                    if ((d || (!d && !i)) && (("body" !== T(r) || W(l)) && (s = _(r)), P(r))) {
                        const t = G(r);
                        (u = X(r)), (f.x = t.x + r.clientLeft), (f.y = t.y + r.clientTop);
                    }
                    return { width: n.width * u.x, height: n.height * u.y, x: n.x * u.x - s.scrollLeft * u.x + f.x, y: n.y * u.y - s.scrollTop * u.y + f.y };
                },
                getDocumentElement: k,
                getClippingRect: function (t) {
                    let { element: e, boundary: n, rootBoundary: r, strategy: l } = t;
                    const c = [
                            ...("clippingAncestors" === n
                                ? H(e)
                                    ? []
                                    : (function (t, e) {
                                          const n = e.get(t);
                                          if (n) return n;
                                          let r = I(t, [], !1).filter((t) => D(t) && "body" !== T(t)),
                                              o = null;
                                          const i = "fixed" === N(t).position;
                                          let l = i ? z(t) : t;
                                          for (; D(l) && !B(l); ) {
                                              const e = N(l),
                                                  n = j(l);
                                              n || "fixed" !== e.position || (o = null), (i ? !n && !o : (!n && "static" === e.position && o && ["absolute", "fixed"].includes(o.position)) || (W(l) && !n && tt(t, l))) ? (r = r.filter((t) => t !== l)) : (o = e), (l = z(l));
                                          }
                                          return e.set(t, r), r;
                                      })(e, this._c)
                                : [].concat(n)),
                            r,
                        ],
                        a = c[0],
                        s = c.reduce(
                            (t, n) => {
                                const r = Q(e, n, l);
                                return (t.top = i(r.top, t.top)), (t.right = o(r.right, t.right)), (t.bottom = o(r.bottom, t.bottom)), (t.left = i(r.left, t.left)), t;
                            },
                            Q(e, a, l),
                        );
                    return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
                },
                getOffsetParent: ot,
                getElementRects: async function (t) {
                    const e = this.getOffsetParent || ot,
                        n = this.getDimensions,
                        r = await n(t.floating);
                    return { reference: et(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
                },
                getClientRects: function (t) {
                    return Array.from(t.getClientRects());
                },
                getDimensions: function (t) {
                    const { width: e, height: n } = q(t);
                    return { width: e, height: n };
                },
                getScale: X,
                isElement: D,
                isRTL: function (t) {
                    return "rtl" === N(t).direction;
                },
            };
            function lt(t, e, n, r) {
                void 0 === r && (r = {});
                const { ancestorScroll: l = !0, ancestorResize: a = !0, elementResize: s = "function" == typeof ResizeObserver, layoutShift: u = "function" == typeof IntersectionObserver, animationFrame: f = !1 } = r,
                    d = U(t),
                    p = l || a ? [...(d ? I(d) : []), ...I(e)] : [];
                p.forEach((t) => {
                    l && t.addEventListener("scroll", n, { passive: !0 }), a && t.addEventListener("resize", n);
                });
                const h =
                    d && u
                        ? (function (t, e) {
                              let n,
                                  r = null;
                              const l = k(t);
                              function a() {
                                  var t;
                                  clearTimeout(n), null == (t = r) || t.disconnect(), (r = null);
                              }
                              return (
                                  (function s(u, f) {
                                      void 0 === u && (u = !1), void 0 === f && (f = 1), a();
                                      const { left: d, top: p, width: h, height: m } = t.getBoundingClientRect();
                                      if ((u || e(), !h || !m)) return;
                                      const g = { rootMargin: -c(p) + "px " + -c(l.clientWidth - (d + h)) + "px " + -c(l.clientHeight - (p + m)) + "px " + -c(d) + "px", threshold: i(0, o(1, f)) || 1 };
                                      let y = !0;
                                      function w(t) {
                                          const e = t[0].intersectionRatio;
                                          if (e !== f) {
                                              if (!y) return s();
                                              e
                                                  ? s(!1, e)
                                                  : (n = setTimeout(() => {
                                                        s(!1, 1e-7);
                                                    }, 1e3));
                                          }
                                          y = !1;
                                      }
                                      try {
                                          r = new IntersectionObserver(w, { ...g, root: l.ownerDocument });
                                      } catch (t) {
                                          r = new IntersectionObserver(w, g);
                                      }
                                      r.observe(t);
                                  })(!0),
                                  a
                              );
                          })(d, n)
                        : null;
                let m,
                    g = -1,
                    y = null;
                s &&
                    ((y = new ResizeObserver((t) => {
                        let [r] = t;
                        r &&
                            r.target === d &&
                            y &&
                            (y.unobserve(e),
                            cancelAnimationFrame(g),
                            (g = requestAnimationFrame(() => {
                                var t;
                                null == (t = y) || t.observe(e);
                            }))),
                            n();
                    })),
                    d && !f && y.observe(d),
                    y.observe(e));
                let w = f ? G(t) : null;
                return (
                    f &&
                        (function e() {
                            const r = G(t);
                            !w || (r.x === w.x && r.y === w.y && r.width === w.width && r.height === w.height) || n();
                            (w = r), (m = requestAnimationFrame(e));
                        })(),
                    n(),
                    () => {
                        var t;
                        p.forEach((t) => {
                            l && t.removeEventListener("scroll", n), a && t.removeEventListener("resize", n);
                        }),
                            null == h || h(),
                            null == (t = y) || t.disconnect(),
                            (y = null),
                            f && cancelAnimationFrame(m);
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
                                var n, r;
                                const { x: o, y: i, placement: l, middlewareData: c } = e,
                                    a = await (async function (t, e) {
                                        const { placement: n, platform: r, elements: o } = t,
                                            i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                                            l = p(n),
                                            c = h(n),
                                            a = "y" === y(n),
                                            s = ["left", "top"].includes(l) ? -1 : 1,
                                            u = i && a ? -1 : 1,
                                            f = d(e, t);
                                        let { mainAxis: m, crossAxis: g, alignmentAxis: w } = "number" == typeof f ? { mainAxis: f, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
                                        return c && "number" == typeof w && (g = "end" === c ? -1 * w : w), a ? { x: g * u, y: m * s } : { x: m * s, y: g * u };
                                    })(e, t);
                                return l === (null == (n = c.offset) ? void 0 : n.placement) && null != (r = c.arrow) && r.alignmentOffset ? {} : { x: o + a.x, y: i + a.y, data: { ...a, placement: l } };
                            },
                        }
                    );
                },
                at = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: "shift",
                            options: t,
                            async fn(e) {
                                const { x: n, y: r, placement: o } = e,
                                    {
                                        mainAxis: i = !0,
                                        crossAxis: l = !1,
                                        limiter: c = {
                                            fn: (t) => {
                                                let { x: e, y: n } = t;
                                                return { x: e, y: n };
                                            },
                                        },
                                        ...a
                                    } = d(t, e),
                                    s = { x: n, y: r },
                                    u = await L(e, a),
                                    h = y(p(o)),
                                    g = m(h);
                                let w = s[g],
                                    v = s[h];
                                if (i) {
                                    const t = "y" === g ? "bottom" : "right";
                                    w = f(w + u["y" === g ? "top" : "left"], w, w - u[t]);
                                }
                                if (l) {
                                    const t = "y" === h ? "bottom" : "right";
                                    v = f(v + u["y" === h ? "top" : "left"], v, v - u[t]);
                                }
                                const x = c.fn({ ...e, [g]: w, [h]: v });
                                return { ...x, data: { x: x.x - n, y: x.y - r } };
                            },
                        }
                    );
                },
                st = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: "flip",
                            options: t,
                            async fn(e) {
                                var n, r;
                                const { placement: o, middlewareData: i, rects: l, initialPlacement: c, platform: a, elements: s } = e,
                                    { mainAxis: u = !0, crossAxis: f = !0, fallbackPlacements: m, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: A = "none", flipAlignment: R = !0, ...S } = d(t, e);
                                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                                const E = p(o),
                                    T = y(c),
                                    O = p(c) === c,
                                    k = await (null == a.isRTL ? void 0 : a.isRTL(s.floating)),
                                    C =
                                        m ||
                                        (O || !R
                                            ? [x(c)]
                                            : (function (t) {
                                                  const e = x(t);
                                                  return [v(t), e, v(e)];
                                              })(c)),
                                    D = "none" !== A;
                                !m &&
                                    D &&
                                    C.push(
                                        ...(function (t, e, n, r) {
                                            const o = h(t);
                                            let i = (function (t, e, n) {
                                                const r = ["left", "right"],
                                                    o = ["right", "left"],
                                                    i = ["top", "bottom"],
                                                    l = ["bottom", "top"];
                                                switch (t) {
                                                    case "top":
                                                    case "bottom":
                                                        return n ? (e ? o : r) : e ? r : o;
                                                    case "left":
                                                    case "right":
                                                        return e ? i : l;
                                                    default:
                                                        return [];
                                                }
                                            })(p(t), "start" === n, r);
                                            return o && ((i = i.map((t) => t + "-" + o)), e && (i = i.concat(i.map(v)))), i;
                                        })(c, R, A, k),
                                    );
                                const P = [c, ...C],
                                    M = await L(e, S),
                                    W = [];
                                let F = (null == (r = i.flip) ? void 0 : r.overflows) || [];
                                if ((u && W.push(M[E]), f)) {
                                    const t = (function (t, e, n) {
                                        void 0 === n && (n = !1);
                                        const r = h(t),
                                            o = w(t),
                                            i = g(o);
                                        let l = "x" === o ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
                                        return e.reference[i] > e.floating[i] && (l = x(l)), [l, x(l)];
                                    })(o, l, k);
                                    W.push(M[t[0]], M[t[1]]);
                                }
                                if (((F = [...F, { placement: o, overflows: W }]), !W.every((t) => t <= 0))) {
                                    var H, j;
                                    const t = ((null == (H = i.flip) ? void 0 : H.index) || 0) + 1,
                                        e = P[t];
                                    if (e) return { data: { index: t, overflows: F }, reset: { placement: e } };
                                    let n = null == (j = F.filter((t) => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : j.placement;
                                    if (!n)
                                        switch (b) {
                                            case "bestFit": {
                                                var V;
                                                const t =
                                                    null ==
                                                    (V = F.filter((t) => {
                                                        if (D) {
                                                            const e = y(t.placement);
                                                            return e === T || "y" === e;
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
                                    if (o !== n) return { reset: { placement: n } };
                                }
                                return {};
                            },
                        }
                    );
                },
                ut = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: "size",
                            options: t,
                            async fn(e) {
                                const { placement: n, rects: r, platform: l, elements: c } = e,
                                    { apply: a = () => {}, ...s } = d(t, e),
                                    u = await L(e, s),
                                    f = p(n),
                                    m = h(n),
                                    g = "y" === y(n),
                                    { width: w, height: v } = r.floating;
                                let x, b;
                                "top" === f || "bottom" === f ? ((x = f), (b = m === ((await (null == l.isRTL ? void 0 : l.isRTL(c.floating))) ? "start" : "end") ? "left" : "right")) : ((b = f), (x = "end" === m ? "top" : "bottom"));
                                const A = v - u.top - u.bottom,
                                    R = w - u.left - u.right,
                                    S = o(v - u[x], A),
                                    E = o(w - u[b], R),
                                    T = !e.middlewareData.shift;
                                let O = S,
                                    k = E;
                                if ((g ? (k = m || T ? o(E, R) : R) : (O = m || T ? o(S, A) : A), T && !m)) {
                                    const t = i(u.left, 0),
                                        e = i(u.right, 0),
                                        n = i(u.top, 0),
                                        r = i(u.bottom, 0);
                                    g ? (k = w - 2 * (0 !== t || 0 !== e ? t + e : i(u.left, u.right))) : (O = v - 2 * (0 !== n || 0 !== r ? n + r : i(u.top, u.bottom)));
                                }
                                await a({ ...e, availableWidth: k, availableHeight: O });
                                const C = await l.getDimensions(c.floating);
                                return w !== C.width || v !== C.height ? { reset: { rects: !0 } } : {};
                            },
                        }
                    );
                },
                ft = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: "hide",
                            options: t,
                            async fn(e) {
                                const { rects: n } = e,
                                    { strategy: r = "referenceHidden", ...o } = d(t, e);
                                switch (r) {
                                    case "referenceHidden": {
                                        const t = S(await L(e, { ...o, elementContext: "reference" }), n.reference);
                                        return { data: { referenceHiddenOffsets: t, referenceHidden: E(t) } };
                                    }
                                    case "escaped": {
                                        const t = S(await L(e, { ...o, altBoundary: !0 }), n.floating);
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
                        const { x: n, y: r, placement: i, rects: l, platform: c, elements: a, middlewareData: s } = e,
                            { element: u, padding: p = 0 } = d(t, e) || {};
                        if (null == u) return {};
                        const m = b(p),
                            y = { x: n, y: r },
                            v = w(i),
                            x = g(v),
                            A = await c.getDimensions(u),
                            R = "y" === v,
                            L = R ? "top" : "left",
                            S = R ? "bottom" : "right",
                            E = R ? "clientHeight" : "clientWidth",
                            T = l.reference[x] + l.reference[v] - y[v] - l.floating[x],
                            O = y[v] - l.reference[v],
                            k = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(u));
                        let C = k ? k[E] : 0;
                        (C && (await (null == c.isElement ? void 0 : c.isElement(k)))) || (C = a.floating[E] || l.floating[x]);
                        const D = T / 2 - O / 2,
                            P = C / 2 - A[x] / 2 - 1,
                            M = o(m[L], P),
                            W = o(m[S], P),
                            F = M,
                            H = C - A[x] - W,
                            j = C / 2 - A[x] / 2 + D,
                            V = f(F, j, H),
                            B = !s.arrow && null != h(i) && j !== V && l.reference[x] / 2 - (j < F ? M : W) - A[x] / 2 < 0,
                            N = B ? (j < F ? j - F : j - H) : 0;
                        return { [v]: y[v] + N, data: { [v]: V, centerOffset: j - V - N, ...(B && { alignmentOffset: N }) }, reset: B };
                    },
                }),
                pt = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            options: t,
                            fn(e) {
                                const { x: n, y: r, placement: o, rects: i, middlewareData: l } = e,
                                    { offset: c = 0, mainAxis: a = !0, crossAxis: s = !0 } = d(t, e),
                                    u = { x: n, y: r },
                                    f = y(o),
                                    h = m(f);
                                let g = u[h],
                                    w = u[f];
                                const v = d(c, e),
                                    x = "number" == typeof v ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
                                if (a) {
                                    const t = "y" === h ? "height" : "width",
                                        e = i.reference[h] - i.floating[t] + x.mainAxis,
                                        n = i.reference[h] + i.reference[t] - x.mainAxis;
                                    g < e ? (g = e) : g > n && (g = n);
                                }
                                if (s) {
                                    var b, A;
                                    const t = "y" === h ? "width" : "height",
                                        e = ["top", "left"].includes(p(o)),
                                        n = i.reference[f] - i.floating[t] + ((e && (null == (b = l.offset) ? void 0 : b[f])) || 0) + (e ? 0 : x.crossAxis),
                                        r = i.reference[f] + i.reference[t] + (e ? 0 : (null == (A = l.offset) ? void 0 : A[f]) || 0) - (e ? x.crossAxis : 0);
                                    w < n ? (w = n) : w > r && (w = r);
                                }
                                return { [h]: g, [f]: w };
                            },
                        }
                    );
                },
                ht = (t, e, n) => {
                    const r = new Map(),
                        o = { platform: it, ...n },
                        i = { ...o.platform, _c: r };
                    return (async (t, e, n) => {
                        const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: l } = n,
                            c = i.filter(Boolean),
                            a = await (null == l.isRTL ? void 0 : l.isRTL(e));
                        let s = await l.getElementRects({ reference: t, floating: e, strategy: o }),
                            { x: u, y: f } = R(s, r, a),
                            d = r,
                            p = {},
                            h = 0;
                        for (let n = 0; n < c.length; n++) {
                            const { name: i, fn: m } = c[n],
                                { x: g, y, data: w, reset: v } = await m({ x: u, y: f, initialPlacement: r, placement: d, strategy: o, middlewareData: p, rects: s, platform: l, elements: { reference: t, floating: e } });
                            (u = null != g ? g : u), (f = null != y ? y : f), (p = { ...p, [i]: { ...p[i], ...w } }), v && h <= 50 && (h++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (s = !0 === v.rects ? await l.getElementRects({ reference: t, floating: e, strategy: o }) : v.rects), ({ x: u, y: f } = R(s, d, a))), (n = -1));
                        }
                        return { x: u, y: f, placement: d, strategy: o, middlewareData: p };
                    })(t, e, { ...o, platform: i });
                };
        },
        992416: (t, e, n) => {
            n.d(e, { Cp: () => w, RR: () => g, YF: () => f, cv: () => p, dp: () => y, dr: () => m, uY: () => h, x7: () => v });
            var r = n(94258),
                o = n(202784),
                i = n(928316),
                l = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
            function c(t, e) {
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ("function" == typeof t && t.toString() === e.toString()) return !0;
                let n, r, o;
                if (t && e && "object" == typeof t) {
                    if (Array.isArray(t)) {
                        if (((n = t.length), n !== e.length)) return !1;
                        for (r = n; 0 != r--; ) if (!c(t[r], e[r])) return !1;
                        return !0;
                    }
                    if (((o = Object.keys(t)), (n = o.length), n !== Object.keys(e).length)) return !1;
                    for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(e, o[r])) return !1;
                    for (r = n; 0 != r--; ) {
                        const n = o[r];
                        if (("_owner" !== n || !t.$$typeof) && !c(t[n], e[n])) return !1;
                    }
                    return !0;
                }
                return t != t && e != e;
            }
            function a(t) {
                if ("undefined" == typeof window) return 1;
                return (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
            }
            function s(t, e) {
                const n = a(t);
                return Math.round(e * n) / n;
            }
            function u(t) {
                const e = o.useRef(t);
                return (
                    l(() => {
                        e.current = t;
                    }),
                    e
                );
            }
            function f(t) {
                void 0 === t && (t = {});
                const { placement: e = "bottom", strategy: n = "absolute", middleware: f = [], platform: d, elements: { reference: p, floating: h } = {}, transform: m = !0, whileElementsMounted: g, open: y } = t,
                    [w, v] = o.useState({ x: 0, y: 0, strategy: n, placement: e, middlewareData: {}, isPositioned: !1 }),
                    [x, b] = o.useState(f);
                c(x, f) || b(f);
                const [A, R] = o.useState(null),
                    [L, S] = o.useState(null),
                    E = o.useCallback((t) => {
                        t !== C.current && ((C.current = t), R(t));
                    }, []),
                    T = o.useCallback((t) => {
                        t !== D.current && ((D.current = t), S(t));
                    }, []),
                    O = p || A,
                    k = h || L,
                    C = o.useRef(null),
                    D = o.useRef(null),
                    P = o.useRef(w),
                    M = null != g,
                    W = u(g),
                    F = u(d),
                    H = o.useCallback(() => {
                        if (!C.current || !D.current) return;
                        const t = { placement: e, strategy: n, middleware: x };
                        F.current && (t.platform = F.current),
                            (0, r.oo)(C.current, D.current, t).then((t) => {
                                const e = { ...t, isPositioned: !0 };
                                j.current &&
                                    !c(P.current, e) &&
                                    ((P.current = e),
                                    i.flushSync(() => {
                                        v(e);
                                    }));
                            });
                    }, [x, e, n, F]);
                l(() => {
                    !1 === y && P.current.isPositioned && ((P.current.isPositioned = !1), v((t) => ({ ...t, isPositioned: !1 })));
                }, [y]);
                const j = o.useRef(!1);
                l(
                    () => (
                        (j.current = !0),
                        () => {
                            j.current = !1;
                        }
                    ),
                    [],
                ),
                    l(() => {
                        if ((O && (C.current = O), k && (D.current = k), O && k)) {
                            if (W.current) return W.current(O, k, H);
                            H();
                        }
                    }, [O, k, H, W, M]);
                const V = o.useMemo(() => ({ reference: C, floating: D, setReference: E, setFloating: T }), [E, T]),
                    B = o.useMemo(() => ({ reference: O, floating: k }), [O, k]),
                    N = o.useMemo(() => {
                        const t = { position: n, left: 0, top: 0 };
                        if (!B.floating) return t;
                        const e = s(B.floating, w.x),
                            r = s(B.floating, w.y);
                        return m ? { ...t, transform: "translate(" + e + "px, " + r + "px)", ...(a(B.floating) >= 1.5 && { willChange: "transform" }) } : { position: n, left: e, top: r };
                    }, [n, m, B.floating, w.x, w.y]);
                return o.useMemo(() => ({ ...w, update: H, refs: V, elements: B, floatingStyles: N }), [w, H, V, B, N]);
            }
            const d = (t) => ({
                    name: "arrow",
                    options: t,
                    fn(e) {
                        const { element: n, padding: o } = "function" == typeof t ? t(e) : t;
                        return n && ((i = n), {}.hasOwnProperty.call(i, "current")) ? (null != n.current ? (0, r.x7)({ element: n.current, padding: o }).fn(e) : {}) : n ? (0, r.x7)({ element: n, padding: o }).fn(e) : {};
                        var i;
                    },
                }),
                p = (t, e) => ({ ...(0, r.cv)(t), options: [t, e] }),
                h = (t, e) => ({ ...(0, r.uY)(t), options: [t, e] }),
                m = (t, e) => ({ ...(0, r.dr)(t), options: [t, e] }),
                g = (t, e) => ({ ...(0, r.RR)(t), options: [t, e] }),
                y = (t, e) => ({ ...(0, r.dp)(t), options: [t, e] }),
                w = (t, e) => ({ ...(0, r.Cp)(t), options: [t, e] }),
                v = (t, e) => ({ ...d(t), options: [t, e] });
        },
        110929: (t, e, n) => {
            n.d(e, { cx: () => i, j: () => l });
            var r = n(840489);
            const o = (t) => ("boolean" == typeof t ? `${t}` : 0 === t ? "0" : t),
                i = r.W,
                l = (t, e) => (n) => {
                    var r;
                    if (null == (null == e ? void 0 : e.variants)) return i(t, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    const { variants: l, defaultVariants: c } = e,
                        a = Object.keys(l).map((t) => {
                            const e = null == n ? void 0 : n[t],
                                r = null == c ? void 0 : c[t];
                            if (null === e) return null;
                            const i = o(e) || o(r);
                            return l[t][i];
                        }),
                        s =
                            n &&
                            Object.entries(n).reduce((t, e) => {
                                let [n, r] = e;
                                return void 0 === r || (t[n] = r), t;
                            }, {}),
                        u =
                            null == e || null === (r = e.compoundVariants) || void 0 === r
                                ? void 0
                                : r.reduce((t, e) => {
                                      let { class: n, className: r, ...o } = e;
                                      return Object.entries(o).every((t) => {
                                          let [e, n] = t;
                                          return Array.isArray(n) ? n.includes({ ...c, ...s }[e]) : { ...c, ...s }[e] === n;
                                      })
                                          ? [...t, n, r]
                                          : t;
                                  }, []);
                    return i(t, a, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                };
        },
        840489: (t, e, n) => {
            function r(t) {
                var e,
                    n,
                    o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var i = t.length;
                        for (e = 0; e < i; e++) t[e] && (n = r(t[e])) && (o && (o += " "), (o += n));
                    } else for (n in t) t[n] && (o && (o += " "), (o += n));
                return o;
            }
            function o() {
                for (var t, e, n = 0, o = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = r(t)) && (o && (o += " "), (o += e));
                return o;
            }
            n.d(e, { W: () => o, Z: () => i });
            const i = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-cdd60c62.85b951ba.js.map
