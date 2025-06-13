"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"],
    {
        11011: (e, t, r) => {
            r.d(t, { b: () => n });
            var n = function (e) {
                return null;
            };
            n.displayName = "Cell";
        },
        549595: (e, t, r) => {
            r.d(t, { C: () => v });
            var n = r(202784),
                o = r(840489),
                i = r(562827),
                a = r(210724),
                c = r(881582),
                l = r(143624),
                u = r(50278),
                s = r(121844),
                f = r(389314),
                p = r(179376);
            function y(e) {
                return (
                    (y =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    y(e)
                );
            }
            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? b(Object(r), !0).forEach(function (t) {
                              d(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : b(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function d(e, t, r) {
                var n;
                return (
                    (n = (function (e, t) {
                        if ("object" != y(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != y(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                    })(t, "string")),
                    (t = "symbol" == y(n) ? n : n + "") in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
                    e
                );
            }
            function v(e) {
                var t,
                    r,
                    y,
                    b = e.element,
                    d = e.tooltipEventType,
                    v = e.isActive,
                    h = e.activeCoordinate,
                    g = e.activePayload,
                    O = e.offset,
                    j = e.activeTooltipIndex,
                    w = e.tooltipAxisBandSize,
                    P = e.layout,
                    S = e.chartName,
                    E = null !== (t = b.props.cursor) && void 0 !== t ? t : null === (r = b.type.defaultProps) || void 0 === r ? void 0 : r.cursor;
                if (!b || !E || !v || !h || ("ScatterChart" !== S && "axis" !== d)) return null;
                var k = i.H;
                if ("ScatterChart" === S) (y = h), (k = a.X);
                else if ("BarChart" === S) (y = (0, c.E)(P, h, O, w)), (k = l.A);
                else if ("radial" === P) {
                    var N = (0, u.O)(h),
                        A = N.cx,
                        x = N.cy,
                        C = N.radius;
                    (y = { cx: A, cy: x, startAngle: N.startAngle, endAngle: N.endAngle, innerRadius: C, outerRadius: C }), (k = s.L);
                } else (y = { points: (0, f.y)(P, h, O) }), (k = i.H);
                var D = m(m(m(m({ stroke: "#ccc", pointerEvents: "none" }, O), y), (0, p.L6)(E, !1)), {}, { payload: g, payloadIndex: j, className: (0, o.Z)("recharts-tooltip-cursor", E.className) });
                return (0, n.isValidElement)(E) ? (0, n.cloneElement)(E, D) : (0, n.createElement)(k, D);
            }
        },
        761502: (e, t, r) => {
            r.d(t, { g: () => w });
            var n = r(202784),
                o = r(161049),
                i = r.n(o),
                a = r(840489),
                c = r(691745),
                l = r(119617),
                u = r(859947),
                s = r(321442);
            function f(e) {
                return (
                    (f =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    f(e)
                );
            }
            function p() {
                return (
                    (p = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    p.apply(this, arguments)
                );
            }
            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function b(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, O(n.key), n);
                }
            }
            function m(e, t, r) {
                return (
                    (t = v(t)),
                    (function (e, t) {
                        if (t && ("object" === f(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e;
                        })(e);
                    })(e, d() ? Reflect.construct(t, r || [], v(e).constructor) : t.apply(e, r))
                );
            }
            function d() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (d = function () {
                    return !!e;
                })();
            }
            function v(e) {
                return (
                    (v = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    v(e)
                );
            }
            function h(e, t) {
                return (
                    (h = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    h(e, t)
                );
            }
            function g(e, t, r) {
                return (t = O(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function O(e) {
                var t = (function (e, t) {
                    if ("object" != f(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != f(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == f(t) ? t : t + "";
            }
            var j = 32,
                w = (function (e) {
                    function t() {
                        return (
                            (function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, t),
                            m(this, t, arguments)
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && h(e, t);
                        })(t, e),
                        (r = t),
                        (o = [
                            {
                                key: "renderIcon",
                                value: function (e) {
                                    var t = this.props.inactiveColor,
                                        r = 16,
                                        o = j / 6,
                                        i = j / 3,
                                        a = e.inactive ? t : e.color;
                                    if ("plainline" === e.type) return n.createElement("line", { strokeWidth: 4, fill: "none", stroke: a, strokeDasharray: e.payload.strokeDasharray, x1: 0, y1: r, x2: j, y2: r, className: "recharts-legend-icon" });
                                    if ("line" === e.type)
                                        return n.createElement("path", {
                                            strokeWidth: 4,
                                            fill: "none",
                                            stroke: a,
                                            d: "M0,"
                                                .concat(r, "h")
                                                .concat(i, "\n            A")
                                                .concat(o, ",")
                                                .concat(o, ",0,1,1,")
                                                .concat(2 * i, ",")
                                                .concat(r, "\n            H")
                                                .concat(j, "M")
                                                .concat(2 * i, ",")
                                                .concat(r, "\n            A")
                                                .concat(o, ",")
                                                .concat(o, ",0,1,1,")
                                                .concat(i, ",")
                                                .concat(r),
                                            className: "recharts-legend-icon",
                                        });
                                    if ("rect" === e.type) return n.createElement("path", { stroke: "none", fill: a, d: "M0,".concat(4, "h").concat(j, "v").concat(24, "h").concat(-32, "z"), className: "recharts-legend-icon" });
                                    if (n.isValidElement(e.legendIcon)) {
                                        var c = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {};
                                                t % 2
                                                    ? y(Object(r), !0).forEach(function (t) {
                                                          g(e, t, r[t]);
                                                      })
                                                    : Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                                      : y(Object(r)).forEach(function (t) {
                                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                                        });
                                            }
                                            return e;
                                        })({}, e);
                                        return delete c.legendIcon, n.cloneElement(e.legendIcon, c);
                                    }
                                    return n.createElement(u.v, { fill: a, cx: r, cy: r, size: j, sizeType: "diameter", type: e.type });
                                },
                            },
                            {
                                key: "renderItems",
                                value: function () {
                                    var e = this,
                                        t = this.props,
                                        r = t.payload,
                                        o = t.iconSize,
                                        u = t.layout,
                                        f = t.formatter,
                                        y = t.inactiveColor,
                                        b = { x: 0, y: 0, width: j, height: j },
                                        m = { display: "horizontal" === u ? "inline-block" : "block", marginRight: 10 },
                                        d = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
                                    return r.map(function (t, r) {
                                        var u = t.formatter || f,
                                            v = (0, a.Z)(g(g({ "recharts-legend-item": !0 }, "legend-item-".concat(r), !0), "inactive", t.inactive));
                                        if ("none" === t.type) return null;
                                        var h = i()(t.value) ? null : t.value;
                                        (0, c.Z)(!i()(t.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
                                        var O = t.inactive ? y : t.color;
                                        return n.createElement("li", p({ className: v, style: m, key: "legend-item-".concat(r) }, (0, s.bw)(e.props, t, r)), n.createElement(l.T, { width: o, height: o, viewBox: b, style: d }, e.renderIcon(t)), n.createElement("span", { className: "recharts-legend-item-text", style: { color: O } }, u ? u(h, t, r) : h));
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.payload,
                                        r = e.layout,
                                        o = e.align;
                                    if (!t || !t.length) return null;
                                    var i = { padding: 0, margin: 0, textAlign: "horizontal" === r ? o : "left" };
                                    return n.createElement("ul", { className: "recharts-default-legend", style: i }, this.renderItems());
                                },
                            },
                        ]),
                        o && b(r.prototype, o),
                        f && b(r, f),
                        Object.defineProperty(r, "prototype", { writable: !1 }),
                        r
                    );
                    var r, o, f;
                })(n.PureComponent);
            g(w, "displayName", "Legend"), g(w, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" });
        },
        517711: (e, t, r) => {
            r.d(t, { x: () => h });
            var n = r(202784),
                o = r(900829),
                i = r.n(o),
                a = r(301842),
                c = r.n(a),
                l = r(840489),
                u = r(715027);
            function s(e) {
                return (
                    (s =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    s(e)
                );
            }
            function f() {
                return (
                    (f = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    f.apply(this, arguments)
                );
            }
            function p(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var n,
                                o,
                                i,
                                a,
                                c = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((i = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                            } catch (e) {
                                (u = !0), (o = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((a = r.return()), Object(a) !== a)) return;
                                } finally {
                                    if (u) throw o;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return y(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? b(Object(r), !0).forEach(function (t) {
                              d(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : b(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function d(e, t, r) {
                var n;
                return (
                    (n = (function (e, t) {
                        if ("object" != s(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != s(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                    })(t, "string")),
                    (t = "symbol" == s(n) ? n : n + "") in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
                    e
                );
            }
            function v(e) {
                return Array.isArray(e) && (0, u.P2)(e[0]) && (0, u.P2)(e[1]) ? e.join(" ~ ") : e;
            }
            var h = function (e) {
                var t = e.separator,
                    r = void 0 === t ? " : " : t,
                    o = e.contentStyle,
                    a = void 0 === o ? {} : o,
                    s = e.itemStyle,
                    y = void 0 === s ? {} : s,
                    b = e.labelStyle,
                    d = void 0 === b ? {} : b,
                    h = e.payload,
                    g = e.formatter,
                    O = e.itemSorter,
                    j = e.wrapperClassName,
                    w = e.labelClassName,
                    P = e.label,
                    S = e.labelFormatter,
                    E = e.accessibilityLayer,
                    k = void 0 !== E && E,
                    N = m({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, a),
                    A = m({ margin: 0 }, d),
                    x = !c()(P),
                    C = x ? P : "",
                    D = (0, l.Z)("recharts-default-tooltip", j),
                    _ = (0, l.Z)("recharts-tooltip-label", w);
                x && S && null != h && (C = S(P, h));
                var I = k ? { role: "status", "aria-live": "assertive" } : {};
                return n.createElement(
                    "div",
                    f({ className: D, style: N }, I),
                    n.createElement("p", { className: _, style: A }, n.isValidElement(C) ? C : "".concat(C)),
                    (function () {
                        if (h && h.length) {
                            var e = (O ? i()(h, O) : h).map(function (e, t) {
                                if ("none" === e.type) return null;
                                var o = m({ display: "block", paddingTop: 4, paddingBottom: 4, color: e.color || "#000" }, y),
                                    i = e.formatter || g || v,
                                    a = e.value,
                                    c = e.name,
                                    l = a,
                                    s = c;
                                if (i && null != l && null != s) {
                                    var f = i(a, c, e, t, h);
                                    if (Array.isArray(f)) {
                                        var b = p(f, 2);
                                        (l = b[0]), (s = b[1]);
                                    } else l = f;
                                }
                                return n.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(t), style: o }, (0, u.P2)(s) ? n.createElement("span", { className: "recharts-tooltip-item-name" }, s) : null, (0, u.P2)(s) ? n.createElement("span", { className: "recharts-tooltip-item-separator" }, r) : null, n.createElement("span", { className: "recharts-tooltip-item-value" }, l), n.createElement("span", { className: "recharts-tooltip-item-unit" }, e.unit || ""));
                            });
                            return n.createElement("ul", { className: "recharts-tooltip-item-list", style: { padding: 0, margin: 0 } }, e);
                        }
                        return null;
                    })(),
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e.275457ca.js.map
