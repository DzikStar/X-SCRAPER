(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights-536eaa00"],
    {
        655324: (t, e, n) => {
            var r = n(302229),
                a = n(984134),
                i = n(668286);
            t.exports = function (t, e) {
                return t && t.length ? r(t, i(e, 2), a) : void 0;
            };
        },
        310937: (t, e, n) => {
            var r = n(302229),
                a = n(668286),
                i = n(417606);
            t.exports = function (t, e) {
                return t && t.length ? r(t, a(e, 2), i) : void 0;
            };
        },
        981073: (t, e, n) => {
            "use strict";
            n.d(e, { u: () => F });
            var r,
                a = n(202784),
                i = n(840489),
                o = n(588927),
                s = n(161049),
                l = n.n(s),
                c = n(371644),
                u = n.n(c),
                p = n(301842),
                y = n.n(p),
                h = n(616951),
                m = n.n(h),
                f = n(818149),
                d = n.n(f),
                v = n(562827),
                b = n(847055),
                x = n(284618),
                g = n(196621),
                A = n(179499),
                O = n(715027),
                P = n(547247),
                w = n(179376),
                E = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
                S = ["key"];
            function T(t) {
                return (
                    (T =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    T(t)
                );
            }
            function k(t, e) {
                if (null == t) return {};
                var n,
                    r,
                    a = (function (t, e) {
                        if (null == t) return {};
                        var n = {};
                        for (var r in t)
                            if (Object.prototype.hasOwnProperty.call(t, r)) {
                                if (e.indexOf(r) >= 0) continue;
                                n[r] = t[r];
                            }
                        return n;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]));
                }
                return a;
            }
            function j() {
                return (
                    (j = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var n = arguments[e];
                                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                              }
                              return t;
                          }),
                    j.apply(this, arguments)
                );
            }
            function D(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? D(Object(n), !0).forEach(function (e) {
                              R(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : D(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            function L(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, _(r.key), r);
                }
            }
            function N(t, e, n) {
                return (
                    (e = B(e)),
                    (function (t, e) {
                        if (e && ("object" === T(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t;
                        })(t);
                    })(t, M() ? Reflect.construct(e, n || [], B(t).constructor) : e.apply(t, n))
                );
            }
            function M() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (M = function () {
                    return !!t;
                })();
            }
            function B(t) {
                return (
                    (B = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    B(t)
                );
            }
            function I(t, e) {
                return (
                    (I = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    I(t, e)
                );
            }
            function R(t, e, n) {
                return (e = _(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function _(t) {
                var e = (function (t, e) {
                    if ("object" != T(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != T(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == T(e) ? e : e + "";
            }
            var F = (function (t) {
                function e() {
                    var t;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    return (
                        R((t = N(this, e, [].concat(r))), "state", { isAnimationFinished: !0 }),
                        R(t, "id", (0, O.EL)("recharts-area-")),
                        R(t, "handleAnimationEnd", function () {
                            var e = t.props.onAnimationEnd;
                            t.setState({ isAnimationFinished: !0 }), l()(e) && e();
                        }),
                        R(t, "handleAnimationStart", function () {
                            var e = t.props.onAnimationStart;
                            t.setState({ isAnimationFinished: !1 }), l()(e) && e();
                        }),
                        t
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && I(t, e);
                    })(e, t),
                    (n = e),
                    (s = [
                        {
                            key: "getDerivedStateFromProps",
                            value: function (t, e) {
                                return t.animationId !== e.prevAnimationId ? { prevAnimationId: t.animationId, curPoints: t.points, curBaseLine: t.baseLine, prevPoints: e.curPoints, prevBaseLine: e.curBaseLine } : t.points !== e.curPoints || t.baseLine !== e.curBaseLine ? { curPoints: t.points, curBaseLine: t.baseLine } : null;
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "renderDots",
                            value: function (t, n, r) {
                                var i = this.props.isAnimationActive,
                                    o = this.state.isAnimationFinished;
                                if (i && !o) return null;
                                var s = this.props,
                                    l = s.dot,
                                    c = s.points,
                                    u = s.dataKey,
                                    p = (0, w.L6)(this.props, !1),
                                    y = (0, w.L6)(l, !0),
                                    h = c.map(function (t, n) {
                                        var r = C(C(C({ key: "dot-".concat(n), r: 3 }, p), y), {}, { index: n, cx: t.x, cy: t.y, dataKey: u, value: t.value, payload: t.payload, points: c });
                                        return e.renderDotItem(l, r);
                                    }),
                                    m = { clipPath: t ? "url(#clipPath-".concat(n ? "" : "dots-").concat(r, ")") : null };
                                return a.createElement(x.m, j({ className: "recharts-area-dots" }, m), h);
                            },
                        },
                        {
                            key: "renderHorizontalRect",
                            value: function (t) {
                                var e = this.props,
                                    n = e.baseLine,
                                    r = e.points,
                                    i = e.strokeWidth,
                                    o = r[0].x,
                                    s = r[r.length - 1].x,
                                    l = t * Math.abs(o - s),
                                    c = u()(
                                        r.map(function (t) {
                                            return t.y || 0;
                                        }),
                                    );
                                return (
                                    (0, O.hj)(n) && "number" == typeof n
                                        ? (c = Math.max(n, c))
                                        : n &&
                                          Array.isArray(n) &&
                                          n.length &&
                                          (c = Math.max(
                                              u()(
                                                  n.map(function (t) {
                                                      return t.y || 0;
                                                  }),
                                              ),
                                              c,
                                          )),
                                    (0, O.hj)(c) ? a.createElement("rect", { x: o < s ? o : o - l, y: 0, width: l, height: Math.floor(c + (i ? parseInt("".concat(i), 10) : 1)) }) : null
                                );
                            },
                        },
                        {
                            key: "renderVerticalRect",
                            value: function (t) {
                                var e = this.props,
                                    n = e.baseLine,
                                    r = e.points,
                                    i = e.strokeWidth,
                                    o = r[0].y,
                                    s = r[r.length - 1].y,
                                    l = t * Math.abs(o - s),
                                    c = u()(
                                        r.map(function (t) {
                                            return t.x || 0;
                                        }),
                                    );
                                return (
                                    (0, O.hj)(n) && "number" == typeof n
                                        ? (c = Math.max(n, c))
                                        : n &&
                                          Array.isArray(n) &&
                                          n.length &&
                                          (c = Math.max(
                                              u()(
                                                  n.map(function (t) {
                                                      return t.x || 0;
                                                  }),
                                              ),
                                              c,
                                          )),
                                    (0, O.hj)(c) ? a.createElement("rect", { x: 0, y: o < s ? o : o - l, width: c + (i ? parseInt("".concat(i), 10) : 1), height: Math.floor(l) }) : null
                                );
                            },
                        },
                        {
                            key: "renderClipRect",
                            value: function (t) {
                                return "vertical" === this.props.layout ? this.renderVerticalRect(t) : this.renderHorizontalRect(t);
                            },
                        },
                        {
                            key: "renderAreaStatically",
                            value: function (t, e, n, r) {
                                var i = this.props,
                                    o = i.layout,
                                    s = i.type,
                                    l = i.stroke,
                                    c = i.connectNulls,
                                    u = i.isRange,
                                    p = (i.ref, k(i, E));
                                return a.createElement(x.m, { clipPath: n ? "url(#clipPath-".concat(r, ")") : null }, a.createElement(v.H, j({}, (0, w.L6)(p, !0), { points: t, connectNulls: c, type: s, baseLine: e, layout: o, stroke: "none", className: "recharts-area-area" })), "none" !== l && a.createElement(v.H, j({}, (0, w.L6)(this.props, !1), { className: "recharts-area-curve", layout: o, type: s, connectNulls: c, fill: "none", points: t })), "none" !== l && u && a.createElement(v.H, j({}, (0, w.L6)(this.props, !1), { className: "recharts-area-curve", layout: o, type: s, connectNulls: c, fill: "none", points: e })));
                            },
                        },
                        {
                            key: "renderAreaWithAnimation",
                            value: function (t, e) {
                                var n = this,
                                    r = this.props,
                                    i = r.points,
                                    s = r.baseLine,
                                    l = r.isAnimationActive,
                                    c = r.animationBegin,
                                    u = r.animationDuration,
                                    p = r.animationEasing,
                                    h = r.animationId,
                                    f = this.state,
                                    d = f.prevPoints,
                                    v = f.prevBaseLine;
                                return a.createElement(o.ZP, { begin: c, duration: u, isActive: l, easing: p, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(h), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function (r) {
                                    var o = r.t;
                                    if (d) {
                                        var l,
                                            c = d.length / i.length,
                                            u = i.map(function (t, e) {
                                                var n = Math.floor(e * c);
                                                if (d[n]) {
                                                    var r = d[n],
                                                        a = (0, O.k4)(r.x, t.x),
                                                        i = (0, O.k4)(r.y, t.y);
                                                    return C(C({}, t), {}, { x: a(o), y: i(o) });
                                                }
                                                return t;
                                            });
                                        return (
                                            (l =
                                                (0, O.hj)(s) && "number" == typeof s
                                                    ? (0, O.k4)(v, s)(o)
                                                    : y()(s) || m()(s)
                                                      ? (0, O.k4)(v, 0)(o)
                                                      : s.map(function (t, e) {
                                                            var n = Math.floor(e * c);
                                                            if (v[n]) {
                                                                var r = v[n],
                                                                    a = (0, O.k4)(r.x, t.x),
                                                                    i = (0, O.k4)(r.y, t.y);
                                                                return C(C({}, t), {}, { x: a(o), y: i(o) });
                                                            }
                                                            return t;
                                                        })),
                                            n.renderAreaStatically(u, l, t, e)
                                        );
                                    }
                                    return a.createElement(x.m, null, a.createElement("defs", null, a.createElement("clipPath", { id: "animationClipPath-".concat(e) }, n.renderClipRect(o))), a.createElement(x.m, { clipPath: "url(#animationClipPath-".concat(e, ")") }, n.renderAreaStatically(i, s, t, e)));
                                });
                            },
                        },
                        {
                            key: "renderArea",
                            value: function (t, e) {
                                var n = this.props,
                                    r = n.points,
                                    a = n.baseLine,
                                    i = n.isAnimationActive,
                                    o = this.state,
                                    s = o.prevPoints,
                                    l = o.prevBaseLine,
                                    c = o.totalLength;
                                return i && r && r.length && ((!s && c > 0) || !d()(s, r) || !d()(l, a)) ? this.renderAreaWithAnimation(t, e) : this.renderAreaStatically(r, a, t, e);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t,
                                    e = this.props,
                                    n = e.hide,
                                    r = e.dot,
                                    o = e.points,
                                    s = e.className,
                                    l = e.top,
                                    c = e.left,
                                    u = e.xAxis,
                                    p = e.yAxis,
                                    h = e.width,
                                    m = e.height,
                                    f = e.isAnimationActive,
                                    d = e.id;
                                if (n || !o || !o.length) return null;
                                var v = this.state.isAnimationFinished,
                                    b = 1 === o.length,
                                    A = (0, i.Z)("recharts-area", s),
                                    O = u && u.allowDataOverflow,
                                    P = p && p.allowDataOverflow,
                                    E = O || P,
                                    S = y()(d) ? this.id : d,
                                    T = null !== (t = (0, w.L6)(r, !1)) && void 0 !== t ? t : { r: 3, strokeWidth: 2 },
                                    k = T.r,
                                    j = void 0 === k ? 3 : k,
                                    D = T.strokeWidth,
                                    C = void 0 === D ? 2 : D,
                                    L = ((0, w.jf)(r) ? r : {}).clipDot,
                                    N = void 0 === L || L,
                                    M = 2 * j + C;
                                return a.createElement(x.m, { className: A }, O || P ? a.createElement("defs", null, a.createElement("clipPath", { id: "clipPath-".concat(S) }, a.createElement("rect", { x: O ? c : c - h / 2, y: P ? l : l - m / 2, width: O ? h : 2 * h, height: P ? m : 2 * m })), !N && a.createElement("clipPath", { id: "clipPath-dots-".concat(S) }, a.createElement("rect", { x: c - M / 2, y: l - M / 2, width: h + M, height: m + M }))) : null, b ? null : this.renderArea(E, S), (r || b) && this.renderDots(E, N, S), (!f || v) && g.e.renderCallByParent(this.props, o));
                            },
                        },
                    ]) && L(n.prototype, r),
                    s && L(n, s),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, r, s;
            })(a.PureComponent);
            (r = F),
                R(F, "displayName", "Area"),
                R(F, "defaultProps", { stroke: "#3182bd", fill: "#3182bd", fillOpacity: 0.6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: !1, points: [], dot: !1, activeDot: !0, hide: !1, isAnimationActive: !A.x.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }),
                R(F, "getBaseValue", function (t, e, n, r) {
                    var a = t.layout,
                        i = t.baseValue,
                        o = e.props.baseValue,
                        s = null != o ? o : i;
                    if ((0, O.hj)(s) && "number" == typeof s) return s;
                    var l = "horizontal" === a ? r : n,
                        c = l.scale.domain();
                    if ("number" === l.type) {
                        var u = Math.max(c[0], c[1]),
                            p = Math.min(c[0], c[1]);
                        return "dataMin" === s ? p : "dataMax" === s || u < 0 ? u : Math.max(Math.min(c[0], c[1]), 0);
                    }
                    return "dataMin" === s ? c[0] : "dataMax" === s ? c[1] : c[0];
                }),
                R(F, "getComposedData", function (t) {
                    var e,
                        n = t.props,
                        a = t.item,
                        i = t.xAxis,
                        o = t.yAxis,
                        s = t.xAxisTicks,
                        l = t.yAxisTicks,
                        c = t.bandSize,
                        u = t.dataKey,
                        p = t.stackedData,
                        y = t.dataStartIndex,
                        h = t.displayedData,
                        m = t.offset,
                        f = n.layout,
                        d = p && p.length,
                        v = r.getBaseValue(n, a, i, o),
                        b = "horizontal" === f,
                        x = !1,
                        g = h.map(function (t, e) {
                            var n;
                            d ? (n = p[y + e]) : ((n = (0, P.F$)(t, u)), Array.isArray(n) ? (x = !0) : (n = [v, n]));
                            var r = null == n[1] || (d && null == (0, P.F$)(t, u));
                            return b ? { x: (0, P.Hv)({ axis: i, ticks: s, bandSize: c, entry: t, index: e }), y: r ? null : o.scale(n[1]), value: n, payload: t } : { x: r ? null : i.scale(n[1]), y: (0, P.Hv)({ axis: o, ticks: l, bandSize: c, entry: t, index: e }), value: n, payload: t };
                        });
                    return (
                        (e =
                            d || x
                                ? g.map(function (t) {
                                      var e = Array.isArray(t.value) ? t.value[0] : null;
                                      return b ? { x: t.x, y: null != e && null != t.y ? o.scale(e) : null } : { x: null != e ? i.scale(e) : null, y: t.y };
                                  })
                                : b
                                  ? o.scale(v)
                                  : i.scale(v)),
                        C({ points: g, baseLine: e, layout: f, isRange: x }, m)
                    );
                }),
                R(F, "renderDotItem", function (t, e) {
                    var n;
                    if (a.isValidElement(t)) n = a.cloneElement(t, e);
                    else if (l()(t)) n = t(e);
                    else {
                        var r = (0, i.Z)("recharts-area-dot", "boolean" != typeof t ? t.className : ""),
                            o = e.key,
                            s = k(e, S);
                        n = a.createElement(b.o, j({}, s, { key: o, className: r }));
                    }
                    return n;
                });
        },
        450603: (t, e, n) => {
            "use strict";
            n.d(e, { T: () => l });
            var r = n(392835),
                a = n(981073),
                i = n(725556),
                o = n(103131),
                s = n(969524),
                l = (0, r.z)({
                    chartName: "AreaChart",
                    GraphicalChild: a.u,
                    axisComponents: [
                        { axisType: "xAxis", AxisComp: i.K },
                        { axisType: "yAxis", AxisComp: o.B },
                    ],
                    formatAxisMap: s.t9,
                });
        },
        780739: (t, e, n) => {
            "use strict";
            n.d(e, { v: () => l });
            var r = n(392835),
                a = n(324908),
                i = n(725556),
                o = n(103131),
                s = n(969524),
                l = (0, r.z)({
                    chartName: "BarChart",
                    GraphicalChild: a.$,
                    defaultTooltipEventType: "axis",
                    validateTooltipEventTypes: ["axis", "item"],
                    axisComponents: [
                        { axisType: "xAxis", AxisComp: i.K },
                        { axisType: "yAxis", AxisComp: o.B },
                    ],
                    formatAxisMap: s.t9,
                });
        },
        43454: (t, e, n) => {
            "use strict";
            n.d(e, { u: () => l });
            var r = n(392835),
                a = n(200565),
                i = n(810086),
                o = n(122089),
                s = n(279941),
                l = (0, r.z)({
                    chartName: "PieChart",
                    GraphicalChild: s.b,
                    validateTooltipEventTypes: ["item"],
                    defaultTooltipEventType: "item",
                    legendContent: "children",
                    axisComponents: [
                        { axisType: "angleAxis", AxisComp: a.I },
                        { axisType: "radiusAxis", AxisComp: i.S },
                    ],
                    formatAxisMap: o.t9,
                    defaultProps: { layout: "centric", startAngle: 0, endAngle: 360, cx: "50%", cy: "50%", innerRadius: 0, outerRadius: "80%" },
                });
        },
        970430: (t, e, n) => {
            "use strict";
            n.d(e, { eJ: () => i });
            class r extends Date {
                constructor() {
                    super(), this.setTime(0 === arguments.length ? Date.now() : 1 === arguments.length ? ("string" == typeof arguments[0] ? +new Date(arguments[0]) : arguments[0]) : Date.UTC(...arguments));
                }
                getTimezoneOffset() {
                    return 0;
                }
            }
            const a = /^(get|set)(?!UTC)/;
            Object.getOwnPropertyNames(Date.prototype).forEach((t) => {
                if (a.test(t)) {
                    const e = Date.prototype[t.replace(a, "$1UTC")];
                    e && (r.prototype[t] = e);
                }
            });
            class i extends r {
                toString() {
                    return `${this.toDateString()} ${this.toTimeString()}`;
                }
                toDateString() {
                    return `${o.format(this)} ${s.format(this)} ${this.getFullYear()}`;
                }
                toTimeString() {
                    return `${l.format(this)} GMT+0000 (Coordinated Universal Time)`;
                }
                toLocaleString(t, e) {
                    return Date.prototype.toLocaleString.call(this, t, { timeZone: "UTC", ...e });
                }
                toLocaleDateString(t, e) {
                    return Date.prototype.toLocaleDateString.call(this, t, { timeZone: "UTC", ...e });
                }
                toLocaleTimeString(t, e) {
                    return Date.prototype.toLocaleTimeString.call(this, t, { timeZone: "UTC", ...e });
                }
            }
            var o = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "UTC" }),
                s = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" }),
                l = new Intl.DateTimeFormat("en-GB", { hour12: !1, hour: "numeric", minute: "numeric", second: "numeric", timeZone: "UTC" });
        },
        178016: (t, e, n) => {
            "use strict";
            n.d(e, { E: () => i });
            var r = n(150729),
                a = n(595873);
            function i(t, e) {
                const n = (0, r.Q)(t);
                return isNaN(e) ? (0, a.L)(t, NaN) : e ? (n.setDate(n.getDate() + e), n) : n;
            }
        },
        733936: (t, e, n) => {
            "use strict";
            n.d(e, { k: () => a });
            var r = n(178016);
            function a(t, e) {
                return (0, r.E)(t, -e);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights-536eaa00.5929e0ea.js.map
