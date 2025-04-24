"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-fc70f967"],
    {
        632908: (t, e, r) => {
            r.d(e, { w: () => l });
            var a = r(392835),
                n = r(663004),
                i = r(725556),
                o = r(103131),
                s = r(969524),
                l = (0, a.z)({
                    chartName: "LineChart",
                    GraphicalChild: n.x,
                    axisComponents: [
                        { axisType: "xAxis", AxisComp: i.K },
                        { axisType: "yAxis", AxisComp: o.B },
                    ],
                    formatAxisMap: s.t9,
                });
        },
        392835: (t, e, r) => {
            r.d(e, { z: () => It });
            var a = r(202784),
                n = r(301842),
                i = r.n(n),
                o = r(161049),
                s = r.n(o),
                l = r(802689),
                d = r.n(l),
                c = r(72579),
                u = r.n(c),
                p = r(900829),
                h = r.n(p),
                f = r(912436),
                v = r.n(f),
                y = r(840489),
                m = r(611534),
                x = r(119617),
                g = r(284618),
                I = r(735081),
                b = r(96629),
                A = r(847055),
                T = r(143624),
                S = r(179376),
                k = r(319978),
                E = r(188089),
                M = r(715027),
                P = r(547247),
                w = r(912076),
                O = r(648309),
                C = r(122089),
                L = r(447022),
                B = r(137279),
                j = r(321442);
            function D(t) {
                return (
                    (D =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    D(t)
                );
            }
            function G(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var a = e[r];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(t, N(a.key), a);
                }
            }
            function z(t, e, r) {
                return (e = N(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function N(t) {
                var e = (function (t, e) {
                    if ("object" != D(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var a = r.call(t, e || "default");
                        if ("object" != D(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == D(e) ? e : e + "";
            }
            var R = (function () {
                    return (
                        (t = function t() {
                            !(function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, t),
                                z(this, "activeIndex", 0),
                                z(this, "coordinateList", []),
                                z(this, "layout", "horizontal");
                        }),
                        (e = [
                            {
                                key: "setDetails",
                                value: function (t) {
                                    var e,
                                        r = t.coordinateList,
                                        a = void 0 === r ? null : r,
                                        n = t.container,
                                        i = void 0 === n ? null : n,
                                        o = t.layout,
                                        s = void 0 === o ? null : o,
                                        l = t.offset,
                                        d = void 0 === l ? null : l,
                                        c = t.mouseHandlerCallback,
                                        u = void 0 === c ? null : c;
                                    (this.coordinateList = null !== (e = null != a ? a : this.coordinateList) && void 0 !== e ? e : []), (this.container = null != i ? i : this.container), (this.layout = null != s ? s : this.layout), (this.offset = null != d ? d : this.offset), (this.mouseHandlerCallback = null != u ? u : this.mouseHandlerCallback), (this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1));
                                },
                            },
                            {
                                key: "focus",
                                value: function () {
                                    this.spoofMouse();
                                },
                            },
                            {
                                key: "keyboardEvent",
                                value: function (t) {
                                    if (0 !== this.coordinateList.length)
                                        switch (t.key) {
                                            case "ArrowRight":
                                                if ("horizontal" !== this.layout) return;
                                                (this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1)), this.spoofMouse();
                                                break;
                                            case "ArrowLeft":
                                                if ("horizontal" !== this.layout) return;
                                                (this.activeIndex = Math.max(this.activeIndex - 1, 0)), this.spoofMouse();
                                        }
                                },
                            },
                            {
                                key: "setIndex",
                                value: function (t) {
                                    this.activeIndex = t;
                                },
                            },
                            {
                                key: "spoofMouse",
                                value: function () {
                                    var t, e;
                                    if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
                                        var r = this.container.getBoundingClientRect(),
                                            a = r.x,
                                            n = r.y,
                                            i = r.height,
                                            o = this.coordinateList[this.activeIndex].coordinate,
                                            s = (null === (t = window) || void 0 === t ? void 0 : t.scrollX) || 0,
                                            l = (null === (e = window) || void 0 === e ? void 0 : e.scrollY) || 0,
                                            d = a + o + s,
                                            c = n + this.offset.top + i / 2 + l;
                                        this.mouseHandlerCallback({ pageX: d, pageY: c });
                                    }
                                },
                            },
                        ]) && G(t.prototype, e),
                        r && G(t, r),
                        Object.defineProperty(t, "prototype", { writable: !1 }),
                        t
                    );
                    var t, e, r;
                })(),
                K = r(317868),
                Y = r(231533),
                _ = r(549595),
                X = r(319164),
                W = ["item"],
                H = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
            function U(t) {
                return (
                    (U =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    U(t)
                );
            }
            function F() {
                return (
                    (F = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
                              }
                              return t;
                          }),
                    F.apply(this, arguments)
                );
            }
            function V(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var r = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != r) {
                            var a,
                                n,
                                i,
                                o,
                                s = [],
                                l = !0,
                                d = !1;
                            try {
                                if (((i = (r = r.call(t)).next), 0 === e)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (a = i.call(r)).done) && (s.push(a.value), s.length !== e); l = !0);
                            } catch (t) {
                                (d = !0), (n = t);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((o = r.return()), Object(o) !== o)) return;
                                } finally {
                                    if (d) throw n;
                                }
                            }
                            return s;
                        }
                    })(t, e) ||
                    rt(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function Z(t, e) {
                if (null == t) return {};
                var r,
                    a,
                    n = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var a in t)
                            if (Object.prototype.hasOwnProperty.call(t, a)) {
                                if (e.indexOf(a) >= 0) continue;
                                r[a] = t[a];
                            }
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (a = 0; a < i.length; a++) (r = i[a]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
                }
                return n;
            }
            function $(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var a = e[r];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(t, st(a.key), a);
                }
            }
            function q(t, e, r) {
                return (
                    (e = J(e)),
                    (function (t, e) {
                        if (e && ("object" === U(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t;
                        })(t);
                    })(t, Q() ? Reflect.construct(e, r || [], J(t).constructor) : e.apply(t, r))
                );
            }
            function Q() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (Q = function () {
                    return !!t;
                })();
            }
            function J(t) {
                return (
                    (J = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    J(t)
                );
            }
            function tt(t, e) {
                return (
                    (tt = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    tt(t, e)
                );
            }
            function et(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return at(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    rt(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function rt(t, e) {
                if (t) {
                    if ("string" == typeof t) return at(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? at(t, e) : void 0;
                }
            }
            function at(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
                return a;
            }
            function nt(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e &&
                        (a = a.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, a);
                }
                return r;
            }
            function it(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? nt(Object(r), !0).forEach(function (e) {
                              ot(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : nt(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function ot(t, e, r) {
                return (e = st(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function st(t) {
                var e = (function (t, e) {
                    if ("object" != U(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var a = r.call(t, e || "default");
                        if ("object" != U(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == U(e) ? e : e + "";
            }
            var lt = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
                dt = { width: "100%", height: "100%" },
                ct = { x: 0, y: 0 };
            function ut(t) {
                return t;
            }
            var pt = function (t, e) {
                var r = e.graphicalItems,
                    a = e.dataStartIndex,
                    n = e.dataEndIndex,
                    i = (null != r ? r : []).reduce(function (t, e) {
                        var r = e.props.data;
                        return r && r.length ? [].concat(et(t), et(r)) : t;
                    }, []);
                return i.length > 0 ? i : t && t.length && (0, M.hj)(a) && (0, M.hj)(n) ? t.slice(a, n + 1) : [];
            };
            function ht(t) {
                return "number" === t ? [0, "auto"] : void 0;
            }
            var ft = function (t, e, r, a) {
                    var n = t.graphicalItems,
                        i = t.tooltipAxis,
                        o = pt(e, t);
                    return r < 0 || !n || !n.length || r >= o.length
                        ? null
                        : n.reduce(function (n, s) {
                              var l,
                                  d,
                                  c = null !== (l = s.props.data) && void 0 !== l ? l : e;
                              if ((c && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= r && (c = c.slice(t.dataStartIndex, t.dataEndIndex + 1)), i.dataKey && !i.allowDuplicatedCategory)) {
                                  var u = void 0 === c ? o : c;
                                  d = (0, M.Ap)(u, i.dataKey, a);
                              } else d = (c && c[r]) || o[r];
                              return d ? [].concat(et(n), [(0, P.Qo)(s, d)]) : n;
                          }, []);
                },
                vt = function (t, e, r, a) {
                    var n = a || { x: t.chartX, y: t.chartY },
                        i = (function (t, e) {
                            return "horizontal" === e ? t.x : "vertical" === e ? t.y : "centric" === e ? t.angle : t.radius;
                        })(n, r),
                        o = t.orderedTooltipTicks,
                        s = t.tooltipAxis,
                        l = t.tooltipTicks,
                        d = (0, P.VO)(i, o, l, s);
                    if (d >= 0 && l) {
                        var c = l[d] && l[d].value,
                            u = ft(t, e, d, c),
                            p = (function (t, e, r, a) {
                                var n = e.find(function (t) {
                                    return t && t.index === r;
                                });
                                if (n) {
                                    if ("horizontal" === t) return { x: n.coordinate, y: a.y };
                                    if ("vertical" === t) return { x: a.x, y: n.coordinate };
                                    if ("centric" === t) {
                                        var i = n.coordinate,
                                            o = a.radius;
                                        return it(it(it({}, a), (0, C.op)(a.cx, a.cy, o, i)), {}, { angle: i, radius: o });
                                    }
                                    var s = n.coordinate,
                                        l = a.angle;
                                    return it(it(it({}, a), (0, C.op)(a.cx, a.cy, s, l)), {}, { angle: l, radius: s });
                                }
                                return ct;
                            })(r, o, d, n);
                        return { activeTooltipIndex: d, activeLabel: c, activePayload: u, activeCoordinate: p };
                    }
                    return null;
                },
                yt = function (t, e) {
                    var r = e.axisType,
                        a = void 0 === r ? "xAxis" : r,
                        n = e.AxisComp,
                        o = e.graphicalItems,
                        s = e.stackGroups,
                        l = e.dataStartIndex,
                        c = e.dataEndIndex,
                        p = t.children,
                        h = "".concat(a, "Id"),
                        f = (0, S.NN)(p, n),
                        v = {};
                    return (
                        f && f.length
                            ? (v = (function (t, e) {
                                  var r = e.axes,
                                      a = e.graphicalItems,
                                      n = e.axisType,
                                      o = e.axisIdKey,
                                      s = e.stackGroups,
                                      l = e.dataStartIndex,
                                      c = e.dataEndIndex,
                                      u = t.layout,
                                      p = t.children,
                                      h = t.stackOffset,
                                      f = (0, P.NA)(u, n);
                                  return r.reduce(function (e, r) {
                                      var v,
                                          y = void 0 !== r.type.defaultProps ? it(it({}, r.type.defaultProps), r.props) : r.props,
                                          m = y.type,
                                          x = y.dataKey,
                                          g = y.allowDataOverflow,
                                          I = y.allowDuplicatedCategory,
                                          b = y.scale,
                                          A = y.ticks,
                                          T = y.includeHidden,
                                          S = y[o];
                                      if (e[S]) return e;
                                      var k,
                                          E,
                                          w,
                                          C = pt(t.data, {
                                              graphicalItems: a.filter(function (t) {
                                                  var e;
                                                  return (o in t.props ? t.props[o] : null === (e = t.type.defaultProps) || void 0 === e ? void 0 : e[o]) === S;
                                              }),
                                              dataStartIndex: l,
                                              dataEndIndex: c,
                                          }),
                                          L = C.length;
                                      (0, K.W)(y.domain, g, m) && ((k = (0, P.LG)(y.domain, null, g)), !f || ("number" !== m && "auto" === b) || (w = (0, P.gF)(C, x, "category")));
                                      var B = ht(m);
                                      if (!k || 0 === k.length) {
                                          var j,
                                              D = null !== (j = y.domain) && void 0 !== j ? j : B;
                                          if (x) {
                                              if (((k = (0, P.gF)(C, x, m)), "category" === m && f)) {
                                                  var G = (0, M.bv)(k);
                                                  I && G
                                                      ? ((E = k), (k = d()(0, L)))
                                                      : I ||
                                                        (k = (0, P.ko)(D, k, r).reduce(function (t, e) {
                                                            return t.indexOf(e) >= 0 ? t : [].concat(et(t), [e]);
                                                        }, []));
                                              } else if ("category" === m)
                                                  k = I
                                                      ? k.filter(function (t) {
                                                            return "" !== t && !i()(t);
                                                        })
                                                      : (0, P.ko)(D, k, r).reduce(function (t, e) {
                                                            return t.indexOf(e) >= 0 || "" === e || i()(e) ? t : [].concat(et(t), [e]);
                                                        }, []);
                                              else if ("number" === m) {
                                                  var z = (0, P.ZI)(
                                                      C,
                                                      a.filter(function (t) {
                                                          var e,
                                                              r,
                                                              a = o in t.props ? t.props[o] : null === (e = t.type.defaultProps) || void 0 === e ? void 0 : e[o],
                                                              n = "hide" in t.props ? t.props.hide : null === (r = t.type.defaultProps) || void 0 === r ? void 0 : r.hide;
                                                          return a === S && (T || !n);
                                                      }),
                                                      x,
                                                      n,
                                                      u,
                                                  );
                                                  z && (k = z);
                                              }
                                              !f || ("number" !== m && "auto" === b) || (w = (0, P.gF)(C, x, "category"));
                                          } else
                                              k = f
                                                  ? d()(0, L)
                                                  : s && s[S] && s[S].hasStack && "number" === m
                                                    ? "expand" === h
                                                        ? [0, 1]
                                                        : (0, P.EB)(s[S].stackGroups, l, c)
                                                    : (0, P.s6)(
                                                          C,
                                                          a.filter(function (t) {
                                                              var e = o in t.props ? t.props[o] : t.type.defaultProps[o],
                                                                  r = "hide" in t.props ? t.props.hide : t.type.defaultProps.hide;
                                                              return e === S && (T || !r);
                                                          }),
                                                          m,
                                                          u,
                                                          !0,
                                                      );
                                          if ("number" === m) (k = (0, O._)(p, k, S, n, A)), D && (k = (0, P.LG)(D, k, g));
                                          else if ("category" === m && D) {
                                              var N = D;
                                              k.every(function (t) {
                                                  return N.indexOf(t) >= 0;
                                              }) && (k = N);
                                          }
                                      }
                                      return it(it({}, e), {}, ot({}, S, it(it({}, y), {}, { axisType: n, domain: k, categoricalDomain: w, duplicateDomain: E, originalDomain: null !== (v = y.domain) && void 0 !== v ? v : B, isCategorical: f, layout: u })));
                                  }, {});
                              })(t, { axes: f, graphicalItems: o, axisType: a, axisIdKey: h, stackGroups: s, dataStartIndex: l, dataEndIndex: c }))
                            : o &&
                              o.length &&
                              (v = (function (t, e) {
                                  var r = e.graphicalItems,
                                      a = e.Axis,
                                      n = e.axisType,
                                      i = e.axisIdKey,
                                      o = e.stackGroups,
                                      s = e.dataStartIndex,
                                      l = e.dataEndIndex,
                                      c = t.layout,
                                      p = t.children,
                                      h = pt(t.data, { graphicalItems: r, dataStartIndex: s, dataEndIndex: l }),
                                      f = h.length,
                                      v = (0, P.NA)(c, n),
                                      y = -1;
                                  return r.reduce(function (t, e) {
                                      var m,
                                          x = (void 0 !== e.type.defaultProps ? it(it({}, e.type.defaultProps), e.props) : e.props)[i],
                                          g = ht("number");
                                      return t[x]
                                          ? t
                                          : (y++,
                                            v
                                                ? (m = d()(0, f))
                                                : o && o[x] && o[x].hasStack
                                                  ? ((m = (0, P.EB)(o[x].stackGroups, s, l)), (m = (0, O._)(p, m, x, n)))
                                                  : ((m = (0, P.LG)(
                                                        g,
                                                        (0, P.s6)(
                                                            h,
                                                            r.filter(function (t) {
                                                                var e,
                                                                    r,
                                                                    a = i in t.props ? t.props[i] : null === (e = t.type.defaultProps) || void 0 === e ? void 0 : e[i],
                                                                    n = "hide" in t.props ? t.props.hide : null === (r = t.type.defaultProps) || void 0 === r ? void 0 : r.hide;
                                                                return a === x && !n;
                                                            }),
                                                            "number",
                                                            c,
                                                        ),
                                                        a.defaultProps.allowDataOverflow,
                                                    )),
                                                    (m = (0, O._)(p, m, x, n))),
                                            it(it({}, t), {}, ot({}, x, it(it({ axisType: n }, a.defaultProps), {}, { hide: !0, orientation: u()(lt, "".concat(n, ".").concat(y % 2), null), domain: m, originalDomain: g, isCategorical: v, layout: c }))));
                                  }, {});
                              })(t, { Axis: n, graphicalItems: o, axisType: a, axisIdKey: h, stackGroups: s, dataStartIndex: l, dataEndIndex: c })),
                        v
                    );
                },
                mt = function (t) {
                    var e = t.children,
                        r = t.defaultShowTooltip,
                        a = (0, S.sP)(e, k.B),
                        n = 0,
                        i = 0;
                    return t.data && 0 !== t.data.length && (i = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (n = a.props.startIndex), a.props.endIndex >= 0 && (i = a.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: n, dataEndIndex: i, activeTooltipIndex: -1, isTooltipActive: Boolean(r) };
                },
                xt = function (t) {
                    return "horizontal" === t ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : "vertical" === t ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : "centric" === t ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
                },
                gt = function (t, e) {
                    return "xAxis" === e ? t[e].width : "yAxis" === e ? t[e].height : void 0;
                },
                It = function (t) {
                    var e = t.chartName,
                        r = t.GraphicalChild,
                        n = t.defaultTooltipEventType,
                        o = void 0 === n ? "axis" : n,
                        l = t.validateTooltipEventTypes,
                        d = void 0 === l ? ["axis"] : l,
                        c = t.axisComponents,
                        p = t.legendContent,
                        f = t.formatAxisMap,
                        O = t.defaultProps,
                        D = function (t, e) {
                            var r = e.graphicalItems,
                                a = e.stackGroups,
                                n = e.offset,
                                o = e.updateId,
                                s = e.dataStartIndex,
                                l = e.dataEndIndex,
                                d = t.barSize,
                                u = t.layout,
                                p = t.barGap,
                                h = t.barCategoryGap,
                                f = t.maxBarSize,
                                v = xt(u),
                                y = v.numericAxisName,
                                x = v.cateAxisName,
                                g = (function (t) {
                                    return (
                                        !(!t || !t.length) &&
                                        t.some(function (t) {
                                            var e = (0, S.Gf)(t && t.type);
                                            return e && e.indexOf("Bar") >= 0;
                                        })
                                    );
                                })(r),
                                I = [];
                            return (
                                r.forEach(function (r, v) {
                                    var b = pt(t.data, { graphicalItems: [r], dataStartIndex: s, dataEndIndex: l }),
                                        A = void 0 !== r.type.defaultProps ? it(it({}, r.type.defaultProps), r.props) : r.props,
                                        T = A.dataKey,
                                        k = A.maxBarSize,
                                        E = A["".concat(y, "Id")],
                                        M = A["".concat(x, "Id")],
                                        w = c.reduce(function (t, r) {
                                            var a = e["".concat(r.axisType, "Map")],
                                                n = A["".concat(r.axisType, "Id")];
                                            (a && a[n]) || "zAxis" === r.axisType || (0, m.Z)(!1);
                                            var i = a[n];
                                            return it(it({}, t), {}, ot(ot({}, r.axisType, i), "".concat(r.axisType, "Ticks"), (0, P.uY)(i)));
                                        }, {}),
                                        O = w[x],
                                        C = w["".concat(x, "Ticks")],
                                        L = a && a[E] && a[E].hasStack && (0, P.O3)(r, a[E].stackGroups),
                                        B = (0, S.Gf)(r.type).indexOf("Bar") >= 0,
                                        j = (0, P.zT)(O, C),
                                        D = [],
                                        G = g && (0, P.pt)({ barSize: d, stackGroups: a, totalSize: gt(w, x) });
                                    if (B) {
                                        var z,
                                            N,
                                            R = i()(k) ? f : k,
                                            K = null !== (z = null !== (N = (0, P.zT)(O, C, !0)) && void 0 !== N ? N : R) && void 0 !== z ? z : 0;
                                        (D = (0, P.qz)({ barGap: p, barCategoryGap: h, bandSize: K !== j ? K : j, sizeList: G[M], maxBarSize: R })),
                                            K !== j &&
                                                (D = D.map(function (t) {
                                                    return it(it({}, t), {}, { position: it(it({}, t.position), {}, { offset: t.position.offset - K / 2 }) });
                                                }));
                                    }
                                    var Y = r && r.type && r.type.getComposedData;
                                    Y && I.push({ props: it(it({}, Y(it(it({}, w), {}, { displayedData: b, props: t, dataKey: T, item: r, bandSize: j, barPosition: D, offset: n, stackedData: L, layout: u, dataStartIndex: s, dataEndIndex: l }))), {}, ot(ot(ot({ key: r.key || "item-".concat(v) }, y, w[y]), x, w[x]), "animationId", o)), childIndex: (0, S.$R)(r, t.children), item: r });
                                }),
                                I
                            );
                        },
                        G = function (t, a) {
                            var n = t.props,
                                i = t.dataStartIndex,
                                o = t.dataEndIndex,
                                s = t.updateId;
                            if (!(0, S.TT)({ props: n })) return null;
                            var l = n.children,
                                d = n.layout,
                                p = n.stackOffset,
                                v = n.data,
                                y = n.reverseStackOrder,
                                m = xt(d),
                                x = m.numericAxisName,
                                g = m.cateAxisName,
                                I = (0, S.NN)(l, r),
                                A = (0, P.wh)(v, I, "".concat(x, "Id"), "".concat(g, "Id"), p, y),
                                T = c.reduce(function (t, e) {
                                    var r = "".concat(e.axisType, "Map");
                                    return it(it({}, t), {}, ot({}, r, yt(n, it(it({}, e), {}, { graphicalItems: I, stackGroups: e.axisType === x && A, dataStartIndex: i, dataEndIndex: o }))));
                                }, {}),
                                E = (function (t, e) {
                                    var r = t.props,
                                        a = t.graphicalItems,
                                        n = t.xAxisMap,
                                        i = void 0 === n ? {} : n,
                                        o = t.yAxisMap,
                                        s = void 0 === o ? {} : o,
                                        l = r.width,
                                        d = r.height,
                                        c = r.children,
                                        p = r.margin || {},
                                        h = (0, S.sP)(c, k.B),
                                        f = (0, S.sP)(c, b.D),
                                        v = Object.keys(s).reduce(
                                            function (t, e) {
                                                var r = s[e],
                                                    a = r.orientation;
                                                return r.mirror || r.hide ? t : it(it({}, t), {}, ot({}, a, t[a] + r.width));
                                            },
                                            { left: p.left || 0, right: p.right || 0 },
                                        ),
                                        y = Object.keys(i).reduce(
                                            function (t, e) {
                                                var r = i[e],
                                                    a = r.orientation;
                                                return r.mirror || r.hide ? t : it(it({}, t), {}, ot({}, a, u()(t, "".concat(a)) + r.height));
                                            },
                                            { top: p.top || 0, bottom: p.bottom || 0 },
                                        ),
                                        m = it(it({}, y), v),
                                        x = m.bottom;
                                    h && (m.bottom += h.props.height || k.B.defaultProps.height), f && e && (m = (0, P.By)(m, a, r, e));
                                    var g = l - m.left - m.right,
                                        I = d - m.top - m.bottom;
                                    return it(it({ brushBottom: x }, m), {}, { width: Math.max(g, 0), height: Math.max(I, 0) });
                                })(it(it({}, T), {}, { props: n, graphicalItems: I }), null == a ? void 0 : a.legendBBox);
                            Object.keys(T).forEach(function (t) {
                                T[t] = f(n, T[t], E, t.replace("Map", ""), e);
                            });
                            var w,
                                O,
                                C,
                                L = T["".concat(g, "Map")],
                                B =
                                    ((w = L),
                                    (O = (0, M.Kt)(w)),
                                    {
                                        tooltipTicks: (C = (0, P.uY)(O, !1, !0)),
                                        orderedTooltipTicks: h()(C, function (t) {
                                            return t.coordinate;
                                        }),
                                        tooltipAxis: O,
                                        tooltipAxisBandSize: (0, P.zT)(O, C),
                                    }),
                                j = D(n, it(it({}, T), {}, { dataStartIndex: i, dataEndIndex: o, updateId: s, graphicalItems: I, stackGroups: A, offset: E }));
                            return it(it({ formattedGraphicalItems: j, graphicalItems: I, offset: E, stackGroups: A }, B), T);
                        },
                        z = (function (t) {
                            function r(t) {
                                var n, o, l;
                                return (
                                    (function (t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                    })(this, r),
                                    ot((l = q(this, r, [t])), "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
                                    ot(l, "accessibilityManager", new R()),
                                    ot(l, "handleLegendBBoxUpdate", function (t) {
                                        if (t) {
                                            var e = l.state,
                                                r = e.dataStartIndex,
                                                a = e.dataEndIndex,
                                                n = e.updateId;
                                            l.setState(it({ legendBBox: t }, G({ props: l.props, dataStartIndex: r, dataEndIndex: a, updateId: n }, it(it({}, l.state), {}, { legendBBox: t }))));
                                        }
                                    }),
                                    ot(l, "handleReceiveSyncEvent", function (t, e, r) {
                                        if (l.props.syncId === t) {
                                            if (r === l.eventEmitterSymbol && "function" != typeof l.props.syncMethod) return;
                                            l.applySyncEvent(e);
                                        }
                                    }),
                                    ot(l, "handleBrushChange", function (t) {
                                        var e = t.startIndex,
                                            r = t.endIndex;
                                        if (e !== l.state.dataStartIndex || r !== l.state.dataEndIndex) {
                                            var a = l.state.updateId;
                                            l.setState(function () {
                                                return it({ dataStartIndex: e, dataEndIndex: r }, G({ props: l.props, dataStartIndex: e, dataEndIndex: r, updateId: a }, l.state));
                                            }),
                                                l.triggerSyncEvent({ dataStartIndex: e, dataEndIndex: r });
                                        }
                                    }),
                                    ot(l, "handleMouseEnter", function (t) {
                                        var e = l.getMouseInfo(t);
                                        if (e) {
                                            var r = it(it({}, e), {}, { isTooltipActive: !0 });
                                            l.setState(r), l.triggerSyncEvent(r);
                                            var a = l.props.onMouseEnter;
                                            s()(a) && a(r, t);
                                        }
                                    }),
                                    ot(l, "triggeredAfterMouseMove", function (t) {
                                        var e = l.getMouseInfo(t),
                                            r = e ? it(it({}, e), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
                                        l.setState(r), l.triggerSyncEvent(r);
                                        var a = l.props.onMouseMove;
                                        s()(a) && a(r, t);
                                    }),
                                    ot(l, "handleItemMouseEnter", function (t) {
                                        l.setState(function () {
                                            return { isTooltipActive: !0, activeItem: t, activePayload: t.tooltipPayload, activeCoordinate: t.tooltipPosition || { x: t.cx, y: t.cy } };
                                        });
                                    }),
                                    ot(l, "handleItemMouseLeave", function () {
                                        l.setState(function () {
                                            return { isTooltipActive: !1 };
                                        });
                                    }),
                                    ot(l, "handleMouseMove", function (t) {
                                        t.persist(), l.throttleTriggeredAfterMouseMove(t);
                                    }),
                                    ot(l, "handleMouseLeave", function (t) {
                                        l.throttleTriggeredAfterMouseMove.cancel();
                                        var e = { isTooltipActive: !1 };
                                        l.setState(e), l.triggerSyncEvent(e);
                                        var r = l.props.onMouseLeave;
                                        s()(r) && r(e, t);
                                    }),
                                    ot(l, "handleOuterEvent", function (t) {
                                        var e,
                                            r = (0, S.Bh)(t),
                                            a = u()(l.props, "".concat(r));
                                        r && s()(a) && a(null !== (e = /.*touch.*/i.test(r) ? l.getMouseInfo(t.changedTouches[0]) : l.getMouseInfo(t)) && void 0 !== e ? e : {}, t);
                                    }),
                                    ot(l, "handleClick", function (t) {
                                        var e = l.getMouseInfo(t);
                                        if (e) {
                                            var r = it(it({}, e), {}, { isTooltipActive: !0 });
                                            l.setState(r), l.triggerSyncEvent(r);
                                            var a = l.props.onClick;
                                            s()(a) && a(r, t);
                                        }
                                    }),
                                    ot(l, "handleMouseDown", function (t) {
                                        var e = l.props.onMouseDown;
                                        s()(e) && e(l.getMouseInfo(t), t);
                                    }),
                                    ot(l, "handleMouseUp", function (t) {
                                        var e = l.props.onMouseUp;
                                        s()(e) && e(l.getMouseInfo(t), t);
                                    }),
                                    ot(l, "handleTouchMove", function (t) {
                                        null != t.changedTouches && t.changedTouches.length > 0 && l.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                                    }),
                                    ot(l, "handleTouchStart", function (t) {
                                        null != t.changedTouches && t.changedTouches.length > 0 && l.handleMouseDown(t.changedTouches[0]);
                                    }),
                                    ot(l, "handleTouchEnd", function (t) {
                                        null != t.changedTouches && t.changedTouches.length > 0 && l.handleMouseUp(t.changedTouches[0]);
                                    }),
                                    ot(l, "triggerSyncEvent", function (t) {
                                        void 0 !== l.props.syncId && B.t.emit(B.Y, l.props.syncId, t, l.eventEmitterSymbol);
                                    }),
                                    ot(l, "applySyncEvent", function (t) {
                                        var e = l.props,
                                            r = e.layout,
                                            a = e.syncMethod,
                                            n = l.state.updateId,
                                            i = t.dataStartIndex,
                                            o = t.dataEndIndex;
                                        if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex) l.setState(it({ dataStartIndex: i, dataEndIndex: o }, G({ props: l.props, dataStartIndex: i, dataEndIndex: o, updateId: n }, l.state)));
                                        else if (void 0 !== t.activeTooltipIndex) {
                                            var s = t.chartX,
                                                d = t.chartY,
                                                c = t.activeTooltipIndex,
                                                u = l.state,
                                                p = u.offset,
                                                h = u.tooltipTicks;
                                            if (!p) return;
                                            if ("function" == typeof a) c = a(h, t);
                                            else if ("value" === a) {
                                                c = -1;
                                                for (var f = 0; f < h.length; f++)
                                                    if (h[f].value === t.activeLabel) {
                                                        c = f;
                                                        break;
                                                    }
                                            }
                                            var v = it(it({}, p), {}, { x: p.left, y: p.top }),
                                                y = Math.min(s, v.x + v.width),
                                                m = Math.min(d, v.y + v.height),
                                                x = h[c] && h[c].value,
                                                g = ft(l.state, l.props.data, c),
                                                I = h[c] ? { x: "horizontal" === r ? h[c].coordinate : y, y: "horizontal" === r ? m : h[c].coordinate } : ct;
                                            l.setState(it(it({}, t), {}, { activeLabel: x, activeCoordinate: I, activePayload: g, activeTooltipIndex: c }));
                                        } else l.setState(t);
                                    }),
                                    ot(l, "renderCursor", function (t) {
                                        var r,
                                            n = l.state,
                                            i = n.isTooltipActive,
                                            o = n.activeCoordinate,
                                            s = n.activePayload,
                                            d = n.offset,
                                            c = n.activeTooltipIndex,
                                            u = n.tooltipAxisBandSize,
                                            p = l.getTooltipEventType(),
                                            h = null !== (r = t.props.active) && void 0 !== r ? r : i,
                                            f = l.props.layout,
                                            v = t.key || "_recharts-cursor";
                                        return a.createElement(_.C, { key: v, activeCoordinate: o, activePayload: s, activeTooltipIndex: c, chartName: e, element: t, isActive: h, layout: f, offset: d, tooltipAxisBandSize: u, tooltipEventType: p });
                                    }),
                                    ot(l, "renderPolarAxis", function (t, e, r) {
                                        var n = u()(t, "type.axisType"),
                                            i = u()(l.state, "".concat(n, "Map")),
                                            o = t.type.defaultProps,
                                            s = void 0 !== o ? it(it({}, o), t.props) : t.props,
                                            d = i && i[s["".concat(n, "Id")]];
                                        return (0, a.cloneElement)(t, it(it({}, d), {}, { className: (0, y.Z)(n, d.className), key: t.key || "".concat(e, "-").concat(r), ticks: (0, P.uY)(d, !0) }));
                                    }),
                                    ot(l, "renderPolarGrid", function (t) {
                                        var e = t.props,
                                            r = e.radialLines,
                                            n = e.polarAngles,
                                            i = e.polarRadius,
                                            o = l.state,
                                            s = o.radiusAxisMap,
                                            d = o.angleAxisMap,
                                            c = (0, M.Kt)(s),
                                            u = (0, M.Kt)(d),
                                            p = u.cx,
                                            h = u.cy,
                                            f = u.innerRadius,
                                            v = u.outerRadius;
                                        return (0, a.cloneElement)(t, {
                                            polarAngles: Array.isArray(n)
                                                ? n
                                                : (0, P.uY)(u, !0).map(function (t) {
                                                      return t.coordinate;
                                                  }),
                                            polarRadius: Array.isArray(i)
                                                ? i
                                                : (0, P.uY)(c, !0).map(function (t) {
                                                      return t.coordinate;
                                                  }),
                                            cx: p,
                                            cy: h,
                                            innerRadius: f,
                                            outerRadius: v,
                                            key: t.key || "polar-grid",
                                            radialLines: r,
                                        });
                                    }),
                                    ot(l, "renderLegend", function () {
                                        var t = l.state.formattedGraphicalItems,
                                            e = l.props,
                                            r = e.children,
                                            n = e.width,
                                            i = e.height,
                                            o = l.props.margin || {},
                                            s = n - (o.left || 0) - (o.right || 0),
                                            d = (0, w.z)({ children: r, formattedGraphicalItems: t, legendWidth: s, legendContent: p });
                                        if (!d) return null;
                                        var c = d.item,
                                            u = Z(d, W);
                                        return (0, a.cloneElement)(c, it(it({}, u), {}, { chartWidth: n, chartHeight: i, margin: o, onBBoxUpdate: l.handleLegendBBoxUpdate }));
                                    }),
                                    ot(l, "renderTooltip", function () {
                                        var t,
                                            e = l.props,
                                            r = e.children,
                                            n = e.accessibilityLayer,
                                            i = (0, S.sP)(r, I.u);
                                        if (!i) return null;
                                        var o = l.state,
                                            s = o.isTooltipActive,
                                            d = o.activeCoordinate,
                                            c = o.activePayload,
                                            u = o.activeLabel,
                                            p = o.offset,
                                            h = null !== (t = i.props.active) && void 0 !== t ? t : s;
                                        return (0, a.cloneElement)(i, { viewBox: it(it({}, p), {}, { x: p.left, y: p.top }), active: h, label: u, payload: h ? c : [], coordinate: d, accessibilityLayer: n });
                                    }),
                                    ot(l, "renderBrush", function (t) {
                                        var e = l.props,
                                            r = e.margin,
                                            n = e.data,
                                            i = l.state,
                                            o = i.offset,
                                            s = i.dataStartIndex,
                                            d = i.dataEndIndex,
                                            c = i.updateId;
                                        return (0, a.cloneElement)(t, { key: t.key || "_recharts-brush", onChange: (0, P.DO)(l.handleBrushChange, t.props.onChange), data: n, x: (0, M.hj)(t.props.x) ? t.props.x : o.left, y: (0, M.hj)(t.props.y) ? t.props.y : o.top + o.height + o.brushBottom - (r.bottom || 0), width: (0, M.hj)(t.props.width) ? t.props.width : o.width, startIndex: s, endIndex: d, updateId: "brush-".concat(c) });
                                    }),
                                    ot(l, "renderReferenceElement", function (t, e, r) {
                                        if (!t) return null;
                                        var n = l.clipPathId,
                                            i = l.state,
                                            o = i.xAxisMap,
                                            s = i.yAxisMap,
                                            d = i.offset,
                                            c = t.type.defaultProps || {},
                                            u = t.props,
                                            p = u.xAxisId,
                                            h = void 0 === p ? c.xAxisId : p,
                                            f = u.yAxisId,
                                            v = void 0 === f ? c.yAxisId : f;
                                        return (0, a.cloneElement)(t, { key: t.key || "".concat(e, "-").concat(r), xAxis: o[h], yAxis: s[v], viewBox: { x: d.left, y: d.top, width: d.width, height: d.height }, clipPathId: n });
                                    }),
                                    ot(l, "renderActivePoints", function (t) {
                                        var e = t.item,
                                            a = t.activePoint,
                                            n = t.basePoint,
                                            i = t.childIndex,
                                            o = t.isRange,
                                            s = [],
                                            l = e.props.key,
                                            d = void 0 !== e.item.type.defaultProps ? it(it({}, e.item.type.defaultProps), e.item.props) : e.item.props,
                                            c = d.activeDot,
                                            u = it(it({ index: i, dataKey: d.dataKey, cx: a.x, cy: a.y, r: 4, fill: (0, P.fk)(e.item), strokeWidth: 2, stroke: "#fff", payload: a.payload, value: a.value }, (0, S.L6)(c, !1)), (0, j.Ym)(c));
                                        return s.push(r.renderActiveDot(c, u, "".concat(l, "-activePoint-").concat(i))), n ? s.push(r.renderActiveDot(c, it(it({}, u), {}, { cx: n.x, cy: n.y }), "".concat(l, "-basePoint-").concat(i))) : o && s.push(null), s;
                                    }),
                                    ot(l, "renderGraphicChild", function (t, e, r) {
                                        var n = l.filterFormatItem(t, e, r);
                                        if (!n) return null;
                                        var o = l.getTooltipEventType(),
                                            s = l.state,
                                            d = s.isTooltipActive,
                                            c = s.tooltipAxis,
                                            u = s.activeTooltipIndex,
                                            p = s.activeLabel,
                                            h = l.props.children,
                                            f = (0, S.sP)(h, I.u),
                                            v = n.props,
                                            y = v.points,
                                            m = v.isRange,
                                            x = v.baseLine,
                                            g = void 0 !== n.item.type.defaultProps ? it(it({}, n.item.type.defaultProps), n.item.props) : n.item.props,
                                            b = g.activeDot,
                                            A = g.hide,
                                            T = g.activeBar,
                                            k = g.activeShape,
                                            E = Boolean(!A && d && f && (b || T || k)),
                                            w = {};
                                        "axis" !== o && f && "click" === f.props.trigger ? (w = { onClick: (0, P.DO)(l.handleItemMouseEnter, t.props.onClick) }) : "axis" !== o && (w = { onMouseLeave: (0, P.DO)(l.handleItemMouseLeave, t.props.onMouseLeave), onMouseEnter: (0, P.DO)(l.handleItemMouseEnter, t.props.onMouseEnter) });
                                        var O = (0, a.cloneElement)(t, it(it({}, n.props), w));
                                        if (E) {
                                            if (!(u >= 0)) {
                                                var C,
                                                    L = (null !== (C = l.getItemByXY(l.state.activeCoordinate)) && void 0 !== C ? C : { graphicalItem: O }).graphicalItem,
                                                    B = L.item,
                                                    j = void 0 === B ? t : B,
                                                    D = L.childIndex,
                                                    G = it(it(it({}, n.props), w), {}, { activeIndex: D });
                                                return [(0, a.cloneElement)(j, G), null, null];
                                            }
                                            var z, N;
                                            if (c.dataKey && !c.allowDuplicatedCategory) {
                                                var R =
                                                    "function" == typeof c.dataKey
                                                        ? function (t) {
                                                              return "function" == typeof c.dataKey ? c.dataKey(t.payload) : null;
                                                          }
                                                        : "payload.".concat(c.dataKey.toString());
                                                (z = (0, M.Ap)(y, R, p)), (N = m && x && (0, M.Ap)(x, R, p));
                                            } else (z = null == y ? void 0 : y[u]), (N = m && x && x[u]);
                                            if (k || T) {
                                                var K = void 0 !== t.props.activeIndex ? t.props.activeIndex : u;
                                                return [(0, a.cloneElement)(t, it(it(it({}, n.props), w), {}, { activeIndex: K })), null, null];
                                            }
                                            if (!i()(z)) return [O].concat(et(l.renderActivePoints({ item: n, activePoint: z, basePoint: N, childIndex: u, isRange: m })));
                                        }
                                        return m ? [O, null, null] : [O, null];
                                    }),
                                    ot(l, "renderCustomized", function (t, e, r) {
                                        return (0, a.cloneElement)(t, it(it({ key: "recharts-customized-".concat(r) }, l.props), l.state));
                                    }),
                                    ot(l, "renderMap", { CartesianGrid: { handler: ut, once: !0 }, ReferenceArea: { handler: l.renderReferenceElement }, ReferenceLine: { handler: ut }, ReferenceDot: { handler: l.renderReferenceElement }, XAxis: { handler: ut }, YAxis: { handler: ut }, Brush: { handler: l.renderBrush, once: !0 }, Bar: { handler: l.renderGraphicChild }, Line: { handler: l.renderGraphicChild }, Area: { handler: l.renderGraphicChild }, Radar: { handler: l.renderGraphicChild }, RadialBar: { handler: l.renderGraphicChild }, Scatter: { handler: l.renderGraphicChild }, Pie: { handler: l.renderGraphicChild }, Funnel: { handler: l.renderGraphicChild }, Tooltip: { handler: l.renderCursor, once: !0 }, PolarGrid: { handler: l.renderPolarGrid, once: !0 }, PolarAngleAxis: { handler: l.renderPolarAxis }, PolarRadiusAxis: { handler: l.renderPolarAxis }, Customized: { handler: l.renderCustomized } }),
                                    (l.clipPathId = "".concat(null !== (n = t.id) && void 0 !== n ? n : (0, M.EL)("recharts"), "-clip")),
                                    (l.throttleTriggeredAfterMouseMove = v()(l.triggeredAfterMouseMove, null !== (o = t.throttleDelay) && void 0 !== o ? o : 1e3 / 60)),
                                    (l.state = {}),
                                    l
                                );
                            }
                            return (
                                (function (t, e) {
                                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && tt(t, e);
                                })(r, t),
                                (n = r),
                                (l = [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            var t, e;
                                            this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: null !== (t = this.props.margin.left) && void 0 !== t ? t : 0, top: null !== (e = this.props.margin.top) && void 0 !== e ? e : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
                                        },
                                    },
                                    {
                                        key: "displayDefaultTooltip",
                                        value: function () {
                                            var t = this.props,
                                                e = t.children,
                                                r = t.data,
                                                a = t.height,
                                                n = t.layout,
                                                i = (0, S.sP)(e, I.u);
                                            if (i) {
                                                var o = i.props.defaultIndex;
                                                if (!("number" != typeof o || o < 0 || o > this.state.tooltipTicks.length - 1)) {
                                                    var s = this.state.tooltipTicks[o] && this.state.tooltipTicks[o].value,
                                                        l = ft(this.state, r, o, s),
                                                        d = this.state.tooltipTicks[o].coordinate,
                                                        c = (this.state.offset.top + a) / 2,
                                                        u = "horizontal" === n ? { x: d, y: c } : { y: d, x: c },
                                                        p = this.state.formattedGraphicalItems.find(function (t) {
                                                            return "Scatter" === t.item.type.name;
                                                        });
                                                    p && ((u = it(it({}, u), p.props.points[o].tooltipPosition)), (l = p.props.points[o].tooltipPayload));
                                                    var h = { activeTooltipIndex: o, isTooltipActive: !0, activeLabel: s, activePayload: l, activeCoordinate: u };
                                                    this.setState(h), this.renderCursor(i), this.accessibilityManager.setIndex(o);
                                                }
                                            }
                                        },
                                    },
                                    {
                                        key: "getSnapshotBeforeUpdate",
                                        value: function (t, e) {
                                            return this.props.accessibilityLayer ? (this.state.tooltipTicks !== e.tooltipTicks && this.accessibilityManager.setDetails({ coordinateList: this.state.tooltipTicks }), this.props.layout !== t.layout && this.accessibilityManager.setDetails({ layout: this.props.layout }), this.props.margin !== t.margin && this.accessibilityManager.setDetails({ offset: { left: null !== (r = this.props.margin.left) && void 0 !== r ? r : 0, top: null !== (a = this.props.margin.top) && void 0 !== a ? a : 0 } }), null) : null;
                                            var r, a;
                                        },
                                    },
                                    {
                                        key: "componentDidUpdate",
                                        value: function (t) {
                                            (0, S.rL)([(0, S.sP)(t.children, I.u)], [(0, S.sP)(this.props.children, I.u)]) || this.displayDefaultTooltip();
                                        },
                                    },
                                    {
                                        key: "componentWillUnmount",
                                        value: function () {
                                            this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
                                        },
                                    },
                                    {
                                        key: "getTooltipEventType",
                                        value: function () {
                                            var t = (0, S.sP)(this.props.children, I.u);
                                            if (t && "boolean" == typeof t.props.shared) {
                                                var e = t.props.shared ? "axis" : "item";
                                                return d.indexOf(e) >= 0 ? e : o;
                                            }
                                            return o;
                                        },
                                    },
                                    {
                                        key: "getMouseInfo",
                                        value: function (t) {
                                            if (!this.container) return null;
                                            var e = this.container,
                                                r = e.getBoundingClientRect(),
                                                a = (0, E.os)(r),
                                                n = { chartX: Math.round(t.pageX - a.left), chartY: Math.round(t.pageY - a.top) },
                                                i = r.width / e.offsetWidth || 1,
                                                o = this.inRange(n.chartX, n.chartY, i);
                                            if (!o) return null;
                                            var s = this.state,
                                                l = s.xAxisMap,
                                                d = s.yAxisMap;
                                            if ("axis" !== this.getTooltipEventType() && l && d) {
                                                var c = (0, M.Kt)(l).scale,
                                                    u = (0, M.Kt)(d).scale,
                                                    p = c && c.invert ? c.invert(n.chartX) : null,
                                                    h = u && u.invert ? u.invert(n.chartY) : null;
                                                return it(it({}, n), {}, { xValue: p, yValue: h });
                                            }
                                            var f = vt(this.state, this.props.data, this.props.layout, o);
                                            return f ? it(it({}, n), f) : null;
                                        },
                                    },
                                    {
                                        key: "inRange",
                                        value: function (t, e) {
                                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                                a = this.props.layout,
                                                n = t / r,
                                                i = e / r;
                                            if ("horizontal" === a || "vertical" === a) {
                                                var o = this.state.offset;
                                                return n >= o.left && n <= o.left + o.width && i >= o.top && i <= o.top + o.height ? { x: n, y: i } : null;
                                            }
                                            var s = this.state,
                                                l = s.angleAxisMap,
                                                d = s.radiusAxisMap;
                                            if (l && d) {
                                                var c = (0, M.Kt)(l);
                                                return (0, C.z3)({ x: n, y: i }, c);
                                            }
                                            return null;
                                        },
                                    },
                                    {
                                        key: "parseEventsOfWrapper",
                                        value: function () {
                                            var t = this.props.children,
                                                e = this.getTooltipEventType(),
                                                r = (0, S.sP)(t, I.u),
                                                a = {};
                                            return r && "axis" === e && (a = "click" === r.props.trigger ? { onClick: this.handleClick } : { onMouseEnter: this.handleMouseEnter, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd }), it(it({}, (0, j.Ym)(this.props, this.handleOuterEvent)), a);
                                        },
                                    },
                                    {
                                        key: "addListener",
                                        value: function () {
                                            B.t.on(B.Y, this.handleReceiveSyncEvent);
                                        },
                                    },
                                    {
                                        key: "removeListener",
                                        value: function () {
                                            B.t.removeListener(B.Y, this.handleReceiveSyncEvent);
                                        },
                                    },
                                    {
                                        key: "filterFormatItem",
                                        value: function (t, e, r) {
                                            for (var a = this.state.formattedGraphicalItems, n = 0, i = a.length; n < i; n++) {
                                                var o = a[n];
                                                if (o.item === t || o.props.key === t.key || (e === (0, S.Gf)(o.item.type) && r === o.childIndex)) return o;
                                            }
                                            return null;
                                        },
                                    },
                                    {
                                        key: "renderClipPath",
                                        value: function () {
                                            var t = this.clipPathId,
                                                e = this.state.offset,
                                                r = e.left,
                                                n = e.top,
                                                i = e.height,
                                                o = e.width;
                                            return a.createElement("defs", null, a.createElement("clipPath", { id: t }, a.createElement("rect", { x: r, y: n, height: i, width: o })));
                                        },
                                    },
                                    {
                                        key: "getXScales",
                                        value: function () {
                                            var t = this.state.xAxisMap;
                                            return t
                                                ? Object.entries(t).reduce(function (t, e) {
                                                      var r = V(e, 2),
                                                          a = r[0],
                                                          n = r[1];
                                                      return it(it({}, t), {}, ot({}, a, n.scale));
                                                  }, {})
                                                : null;
                                        },
                                    },
                                    {
                                        key: "getYScales",
                                        value: function () {
                                            var t = this.state.yAxisMap;
                                            return t
                                                ? Object.entries(t).reduce(function (t, e) {
                                                      var r = V(e, 2),
                                                          a = r[0],
                                                          n = r[1];
                                                      return it(it({}, t), {}, ot({}, a, n.scale));
                                                  }, {})
                                                : null;
                                        },
                                    },
                                    {
                                        key: "getXScaleByAxisId",
                                        value: function (t) {
                                            var e;
                                            return null === (e = this.state.xAxisMap) || void 0 === e || null === (e = e[t]) || void 0 === e ? void 0 : e.scale;
                                        },
                                    },
                                    {
                                        key: "getYScaleByAxisId",
                                        value: function (t) {
                                            var e;
                                            return null === (e = this.state.yAxisMap) || void 0 === e || null === (e = e[t]) || void 0 === e ? void 0 : e.scale;
                                        },
                                    },
                                    {
                                        key: "getItemByXY",
                                        value: function (t) {
                                            var e = this.state,
                                                r = e.formattedGraphicalItems,
                                                a = e.activeItem;
                                            if (r && r.length)
                                                for (var n = 0, i = r.length; n < i; n++) {
                                                    var o = r[n],
                                                        s = o.props,
                                                        l = o.item,
                                                        d = void 0 !== l.type.defaultProps ? it(it({}, l.type.defaultProps), l.props) : l.props,
                                                        c = (0, S.Gf)(l.type);
                                                    if ("Bar" === c) {
                                                        var u = (s.data || []).find(function (e) {
                                                            return (0, T.X)(t, e);
                                                        });
                                                        if (u) return { graphicalItem: o, payload: u };
                                                    } else if ("RadialBar" === c) {
                                                        var p = (s.data || []).find(function (e) {
                                                            return (0, C.z3)(t, e);
                                                        });
                                                        if (p) return { graphicalItem: o, payload: p };
                                                    } else if ((0, Y.lT)(o, a) || (0, Y.V$)(o, a) || (0, Y.w7)(o, a)) {
                                                        var h = (0, Y.a3)({ graphicalItem: o, activeTooltipItem: a, itemData: d.data }),
                                                            f = void 0 === d.activeIndex ? h : d.activeIndex;
                                                        return { graphicalItem: it(it({}, o), {}, { childIndex: f }), payload: (0, Y.w7)(o, a) ? d.data[h] : o.props.data[h] };
                                                    }
                                                }
                                            return null;
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            var t = this;
                                            if (!(0, S.TT)(this)) return null;
                                            var e,
                                                r,
                                                n = this.props,
                                                i = n.children,
                                                o = n.className,
                                                s = n.width,
                                                l = n.height,
                                                d = n.style,
                                                c = n.compact,
                                                u = n.title,
                                                p = n.desc,
                                                h = Z(n, H),
                                                f = (0, S.L6)(h, !1);
                                            if (c) return a.createElement(X.br, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, a.createElement(x.T, F({}, f, { width: s, height: l, title: u, desc: p }), this.renderClipPath(), (0, S.eu)(i, this.renderMap)));
                                            this.props.accessibilityLayer &&
                                                ((f.tabIndex = null !== (e = this.props.tabIndex) && void 0 !== e ? e : 0),
                                                (f.role = null !== (r = this.props.role) && void 0 !== r ? r : "application"),
                                                (f.onKeyDown = function (e) {
                                                    t.accessibilityManager.keyboardEvent(e);
                                                }),
                                                (f.onFocus = function () {
                                                    t.accessibilityManager.focus();
                                                }));
                                            var v = this.parseEventsOfWrapper();
                                            return a.createElement(
                                                X.br,
                                                { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId },
                                                a.createElement(
                                                    "div",
                                                    F({ className: (0, y.Z)("recharts-wrapper", o), style: it({ position: "relative", cursor: "default", width: s, height: l }, d) }, v, {
                                                        ref: function (e) {
                                                            t.container = e;
                                                        },
                                                    }),
                                                    a.createElement(x.T, F({}, f, { width: s, height: l, title: u, desc: p, style: dt }), this.renderClipPath(), (0, S.eu)(i, this.renderMap)),
                                                    this.renderLegend(),
                                                    this.renderTooltip(),
                                                ),
                                            );
                                        },
                                    },
                                ]),
                                l && $(n.prototype, l),
                                c && $(n, c),
                                Object.defineProperty(n, "prototype", { writable: !1 }),
                                n
                            );
                            var n, l, c;
                        })(a.Component);
                    ot(z, "displayName", e),
                        ot(z, "defaultProps", it({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: !1, syncMethod: "index" }, O)),
                        ot(z, "getDerivedStateFromProps", function (t, e) {
                            var r = t.dataKey,
                                a = t.data,
                                n = t.children,
                                o = t.width,
                                s = t.height,
                                l = t.layout,
                                d = t.stackOffset,
                                c = t.margin,
                                u = e.dataStartIndex,
                                p = e.dataEndIndex;
                            if (void 0 === e.updateId) {
                                var h = mt(t);
                                return it(it(it({}, h), {}, { updateId: 0 }, G(it(it({ props: t }, h), {}, { updateId: 0 }), e)), {}, { prevDataKey: r, prevData: a, prevWidth: o, prevHeight: s, prevLayout: l, prevStackOffset: d, prevMargin: c, prevChildren: n });
                            }
                            if (r !== e.prevDataKey || a !== e.prevData || o !== e.prevWidth || s !== e.prevHeight || l !== e.prevLayout || d !== e.prevStackOffset || !(0, L.w)(c, e.prevMargin)) {
                                var f = mt(t),
                                    v = { chartX: e.chartX, chartY: e.chartY, isTooltipActive: e.isTooltipActive },
                                    y = it(it({}, vt(e, a, l)), {}, { updateId: e.updateId + 1 }),
                                    m = it(it(it({}, f), v), y);
                                return it(it(it({}, m), G(it({ props: t }, m), e)), {}, { prevDataKey: r, prevData: a, prevWidth: o, prevHeight: s, prevLayout: l, prevStackOffset: d, prevMargin: c, prevChildren: n });
                            }
                            if (!(0, S.rL)(n, e.prevChildren)) {
                                var x,
                                    g,
                                    I,
                                    b,
                                    A = (0, S.sP)(n, k.B),
                                    T = A && null !== (x = null === (g = A.props) || void 0 === g ? void 0 : g.startIndex) && void 0 !== x ? x : u,
                                    E = A && null !== (I = null === (b = A.props) || void 0 === b ? void 0 : b.endIndex) && void 0 !== I ? I : p,
                                    M = T !== u || E !== p,
                                    P = !i()(a) && !M ? e.updateId : e.updateId + 1;
                                return it(it({ updateId: P }, G(it(it({ props: t }, e), {}, { updateId: P, dataStartIndex: T, dataEndIndex: E }), e)), {}, { prevChildren: n, dataStartIndex: T, dataEndIndex: E });
                            }
                            return null;
                        }),
                        ot(z, "renderActiveDot", function (t, e, r) {
                            var n;
                            return (n = (0, a.isValidElement)(t) ? (0, a.cloneElement)(t, e) : s()(t) ? t(e) : a.createElement(A.o, e)), a.createElement(g.m, { className: "recharts-active-dot", key: r }, n);
                        });
                    var N = (0, a.forwardRef)(function (t, e) {
                        return a.createElement(z, F({}, t, { ref: e }));
                    });
                    return (N.displayName = z.displayName), N;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-fc70f967.28e2e75a.js.map
