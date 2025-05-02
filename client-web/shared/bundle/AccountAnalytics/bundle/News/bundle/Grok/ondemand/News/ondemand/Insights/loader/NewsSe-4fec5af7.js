"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-4fec5af7"],
    {
        632908: (e, t, r) => {
            r.d(t, { w: () => l });
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
        392835: (e, t, r) => {
            r.d(t, { z: () => Ie });
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
            function D(e) {
                return (
                    (D =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    D(e)
                );
            }
            function G(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var a = t[r];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, N(a.key), a);
                }
            }
            function z(e, t, r) {
                return (t = N(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function N(e) {
                var t = (function (e, t) {
                    if ("object" != D(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var a = r.call(e, t || "default");
                        if ("object" != D(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == D(t) ? t : t + "";
            }
            var R = (function () {
                    return (
                        (e = function e() {
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                z(this, "activeIndex", 0),
                                z(this, "coordinateList", []),
                                z(this, "layout", "horizontal");
                        }),
                        (t = [
                            {
                                key: "setDetails",
                                value: function (e) {
                                    var t,
                                        r = e.coordinateList,
                                        a = void 0 === r ? null : r,
                                        n = e.container,
                                        i = void 0 === n ? null : n,
                                        o = e.layout,
                                        s = void 0 === o ? null : o,
                                        l = e.offset,
                                        d = void 0 === l ? null : l,
                                        c = e.mouseHandlerCallback,
                                        u = void 0 === c ? null : c;
                                    (this.coordinateList = null !== (t = null != a ? a : this.coordinateList) && void 0 !== t ? t : []), (this.container = null != i ? i : this.container), (this.layout = null != s ? s : this.layout), (this.offset = null != d ? d : this.offset), (this.mouseHandlerCallback = null != u ? u : this.mouseHandlerCallback), (this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1));
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
                                value: function (e) {
                                    if (0 !== this.coordinateList.length)
                                        switch (e.key) {
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
                                value: function (e) {
                                    this.activeIndex = e;
                                },
                            },
                            {
                                key: "spoofMouse",
                                value: function () {
                                    var e, t;
                                    if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
                                        var r = this.container.getBoundingClientRect(),
                                            a = r.x,
                                            n = r.y,
                                            i = r.height,
                                            o = this.coordinateList[this.activeIndex].coordinate,
                                            s = (null === (e = window) || void 0 === e ? void 0 : e.scrollX) || 0,
                                            l = (null === (t = window) || void 0 === t ? void 0 : t.scrollY) || 0,
                                            d = a + o + s,
                                            c = n + this.offset.top + i / 2 + l;
                                        this.mouseHandlerCallback({ pageX: d, pageY: c });
                                    }
                                },
                            },
                        ]) && G(e.prototype, t),
                        r && G(e, r),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        e
                    );
                    var e, t, r;
                })(),
                K = r(317868),
                Y = r(231533),
                _ = r(549595),
                X = r(319164),
                W = ["item"],
                H = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
            function U(e) {
                return (
                    (U =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    U(e)
                );
            }
            function F() {
                return (
                    (F = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                              }
                              return e;
                          }),
                    F.apply(this, arguments)
                );
            }
            function V(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var a,
                                n,
                                i,
                                o,
                                s = [],
                                l = !0,
                                d = !1;
                            try {
                                if (((i = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (a = i.call(r)).done) && (s.push(a.value), s.length !== t); l = !0);
                            } catch (e) {
                                (d = !0), (n = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((o = r.return()), Object(o) !== o)) return;
                                } finally {
                                    if (d) throw n;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    re(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function Z(e, t) {
                if (null == e) return {};
                var r,
                    a,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var a in e)
                            if (Object.prototype.hasOwnProperty.call(e, a)) {
                                if (t.indexOf(a) >= 0) continue;
                                r[a] = e[a];
                            }
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
                }
                return n;
            }
            function $(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var a = t[r];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, se(a.key), a);
                }
            }
            function q(e, t, r) {
                return (
                    (t = J(t)),
                    (function (e, t) {
                        if (t && ("object" === U(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e;
                        })(e);
                    })(e, Q() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r))
                );
            }
            function Q() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (Q = function () {
                    return !!e;
                })();
            }
            function J(e) {
                return (
                    (J = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    J(e)
                );
            }
            function ee(e, t) {
                return (
                    (ee = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    ee(e, t)
                );
            }
            function te(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return ae(e);
                    })(e) ||
                    (function (e) {
                        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                    })(e) ||
                    re(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function re(e, t) {
                if (e) {
                    if ("string" == typeof e) return ae(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ae(e, t) : void 0;
                }
            }
            function ae(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a;
            }
            function ne(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t &&
                        (a = a.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, a);
                }
                return r;
            }
            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ne(Object(r), !0).forEach(function (t) {
                              oe(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : ne(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function oe(e, t, r) {
                return (t = se(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function se(e) {
                var t = (function (e, t) {
                    if ("object" != U(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var a = r.call(e, t || "default");
                        if ("object" != U(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == U(t) ? t : t + "";
            }
            var le = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
                de = { width: "100%", height: "100%" },
                ce = { x: 0, y: 0 };
            function ue(e) {
                return e;
            }
            var pe = function (e, t) {
                var r = t.graphicalItems,
                    a = t.dataStartIndex,
                    n = t.dataEndIndex,
                    i = (null != r ? r : []).reduce(function (e, t) {
                        var r = t.props.data;
                        return r && r.length ? [].concat(te(e), te(r)) : e;
                    }, []);
                return i.length > 0 ? i : e && e.length && (0, M.hj)(a) && (0, M.hj)(n) ? e.slice(a, n + 1) : [];
            };
            function he(e) {
                return "number" === e ? [0, "auto"] : void 0;
            }
            var fe = function (e, t, r, a) {
                    var n = e.graphicalItems,
                        i = e.tooltipAxis,
                        o = pe(t, e);
                    return r < 0 || !n || !n.length || r >= o.length
                        ? null
                        : n.reduce(function (n, s) {
                              var l,
                                  d,
                                  c = null !== (l = s.props.data) && void 0 !== l ? l : t;
                              if ((c && e.dataStartIndex + e.dataEndIndex !== 0 && e.dataEndIndex - e.dataStartIndex >= r && (c = c.slice(e.dataStartIndex, e.dataEndIndex + 1)), i.dataKey && !i.allowDuplicatedCategory)) {
                                  var u = void 0 === c ? o : c;
                                  d = (0, M.Ap)(u, i.dataKey, a);
                              } else d = (c && c[r]) || o[r];
                              return d ? [].concat(te(n), [(0, P.Qo)(s, d)]) : n;
                          }, []);
                },
                ve = function (e, t, r, a) {
                    var n = a || { x: e.chartX, y: e.chartY },
                        i = (function (e, t) {
                            return "horizontal" === t ? e.x : "vertical" === t ? e.y : "centric" === t ? e.angle : e.radius;
                        })(n, r),
                        o = e.orderedTooltipTicks,
                        s = e.tooltipAxis,
                        l = e.tooltipTicks,
                        d = (0, P.VO)(i, o, l, s);
                    if (d >= 0 && l) {
                        var c = l[d] && l[d].value,
                            u = fe(e, t, d, c),
                            p = (function (e, t, r, a) {
                                var n = t.find(function (e) {
                                    return e && e.index === r;
                                });
                                if (n) {
                                    if ("horizontal" === e) return { x: n.coordinate, y: a.y };
                                    if ("vertical" === e) return { x: a.x, y: n.coordinate };
                                    if ("centric" === e) {
                                        var i = n.coordinate,
                                            o = a.radius;
                                        return ie(ie(ie({}, a), (0, C.op)(a.cx, a.cy, o, i)), {}, { angle: i, radius: o });
                                    }
                                    var s = n.coordinate,
                                        l = a.angle;
                                    return ie(ie(ie({}, a), (0, C.op)(a.cx, a.cy, s, l)), {}, { angle: l, radius: s });
                                }
                                return ce;
                            })(r, o, d, n);
                        return { activeTooltipIndex: d, activeLabel: c, activePayload: u, activeCoordinate: p };
                    }
                    return null;
                },
                ye = function (e, t) {
                    var r = t.axisType,
                        a = void 0 === r ? "xAxis" : r,
                        n = t.AxisComp,
                        o = t.graphicalItems,
                        s = t.stackGroups,
                        l = t.dataStartIndex,
                        c = t.dataEndIndex,
                        p = e.children,
                        h = "".concat(a, "Id"),
                        f = (0, S.NN)(p, n),
                        v = {};
                    return (
                        f && f.length
                            ? (v = (function (e, t) {
                                  var r = t.axes,
                                      a = t.graphicalItems,
                                      n = t.axisType,
                                      o = t.axisIdKey,
                                      s = t.stackGroups,
                                      l = t.dataStartIndex,
                                      c = t.dataEndIndex,
                                      u = e.layout,
                                      p = e.children,
                                      h = e.stackOffset,
                                      f = (0, P.NA)(u, n);
                                  return r.reduce(function (t, r) {
                                      var v,
                                          y = void 0 !== r.type.defaultProps ? ie(ie({}, r.type.defaultProps), r.props) : r.props,
                                          m = y.type,
                                          x = y.dataKey,
                                          g = y.allowDataOverflow,
                                          I = y.allowDuplicatedCategory,
                                          b = y.scale,
                                          A = y.ticks,
                                          T = y.includeHidden,
                                          S = y[o];
                                      if (t[S]) return t;
                                      var k,
                                          E,
                                          w,
                                          C = pe(e.data, {
                                              graphicalItems: a.filter(function (e) {
                                                  var t;
                                                  return (o in e.props ? e.props[o] : null === (t = e.type.defaultProps) || void 0 === t ? void 0 : t[o]) === S;
                                              }),
                                              dataStartIndex: l,
                                              dataEndIndex: c,
                                          }),
                                          L = C.length;
                                      (0, K.W)(y.domain, g, m) && ((k = (0, P.LG)(y.domain, null, g)), !f || ("number" !== m && "auto" === b) || (w = (0, P.gF)(C, x, "category")));
                                      var B = he(m);
                                      if (!k || 0 === k.length) {
                                          var j,
                                              D = null !== (j = y.domain) && void 0 !== j ? j : B;
                                          if (x) {
                                              if (((k = (0, P.gF)(C, x, m)), "category" === m && f)) {
                                                  var G = (0, M.bv)(k);
                                                  I && G
                                                      ? ((E = k), (k = d()(0, L)))
                                                      : I ||
                                                        (k = (0, P.ko)(D, k, r).reduce(function (e, t) {
                                                            return e.indexOf(t) >= 0 ? e : [].concat(te(e), [t]);
                                                        }, []));
                                              } else if ("category" === m)
                                                  k = I
                                                      ? k.filter(function (e) {
                                                            return "" !== e && !i()(e);
                                                        })
                                                      : (0, P.ko)(D, k, r).reduce(function (e, t) {
                                                            return e.indexOf(t) >= 0 || "" === t || i()(t) ? e : [].concat(te(e), [t]);
                                                        }, []);
                                              else if ("number" === m) {
                                                  var z = (0, P.ZI)(
                                                      C,
                                                      a.filter(function (e) {
                                                          var t,
                                                              r,
                                                              a = o in e.props ? e.props[o] : null === (t = e.type.defaultProps) || void 0 === t ? void 0 : t[o],
                                                              n = "hide" in e.props ? e.props.hide : null === (r = e.type.defaultProps) || void 0 === r ? void 0 : r.hide;
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
                                                          a.filter(function (e) {
                                                              var t = o in e.props ? e.props[o] : e.type.defaultProps[o],
                                                                  r = "hide" in e.props ? e.props.hide : e.type.defaultProps.hide;
                                                              return t === S && (T || !r);
                                                          }),
                                                          m,
                                                          u,
                                                          !0,
                                                      );
                                          if ("number" === m) (k = (0, O._)(p, k, S, n, A)), D && (k = (0, P.LG)(D, k, g));
                                          else if ("category" === m && D) {
                                              var N = D;
                                              k.every(function (e) {
                                                  return N.indexOf(e) >= 0;
                                              }) && (k = N);
                                          }
                                      }
                                      return ie(ie({}, t), {}, oe({}, S, ie(ie({}, y), {}, { axisType: n, domain: k, categoricalDomain: w, duplicateDomain: E, originalDomain: null !== (v = y.domain) && void 0 !== v ? v : B, isCategorical: f, layout: u })));
                                  }, {});
                              })(e, { axes: f, graphicalItems: o, axisType: a, axisIdKey: h, stackGroups: s, dataStartIndex: l, dataEndIndex: c }))
                            : o &&
                              o.length &&
                              (v = (function (e, t) {
                                  var r = t.graphicalItems,
                                      a = t.Axis,
                                      n = t.axisType,
                                      i = t.axisIdKey,
                                      o = t.stackGroups,
                                      s = t.dataStartIndex,
                                      l = t.dataEndIndex,
                                      c = e.layout,
                                      p = e.children,
                                      h = pe(e.data, { graphicalItems: r, dataStartIndex: s, dataEndIndex: l }),
                                      f = h.length,
                                      v = (0, P.NA)(c, n),
                                      y = -1;
                                  return r.reduce(function (e, t) {
                                      var m,
                                          x = (void 0 !== t.type.defaultProps ? ie(ie({}, t.type.defaultProps), t.props) : t.props)[i],
                                          g = he("number");
                                      return e[x]
                                          ? e
                                          : (y++,
                                            v
                                                ? (m = d()(0, f))
                                                : o && o[x] && o[x].hasStack
                                                  ? ((m = (0, P.EB)(o[x].stackGroups, s, l)), (m = (0, O._)(p, m, x, n)))
                                                  : ((m = (0, P.LG)(
                                                        g,
                                                        (0, P.s6)(
                                                            h,
                                                            r.filter(function (e) {
                                                                var t,
                                                                    r,
                                                                    a = i in e.props ? e.props[i] : null === (t = e.type.defaultProps) || void 0 === t ? void 0 : t[i],
                                                                    n = "hide" in e.props ? e.props.hide : null === (r = e.type.defaultProps) || void 0 === r ? void 0 : r.hide;
                                                                return a === x && !n;
                                                            }),
                                                            "number",
                                                            c,
                                                        ),
                                                        a.defaultProps.allowDataOverflow,
                                                    )),
                                                    (m = (0, O._)(p, m, x, n))),
                                            ie(ie({}, e), {}, oe({}, x, ie(ie({ axisType: n }, a.defaultProps), {}, { hide: !0, orientation: u()(le, "".concat(n, ".").concat(y % 2), null), domain: m, originalDomain: g, isCategorical: v, layout: c }))));
                                  }, {});
                              })(e, { Axis: n, graphicalItems: o, axisType: a, axisIdKey: h, stackGroups: s, dataStartIndex: l, dataEndIndex: c })),
                        v
                    );
                },
                me = function (e) {
                    var t = e.children,
                        r = e.defaultShowTooltip,
                        a = (0, S.sP)(t, k.B),
                        n = 0,
                        i = 0;
                    return e.data && 0 !== e.data.length && (i = e.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (n = a.props.startIndex), a.props.endIndex >= 0 && (i = a.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: n, dataEndIndex: i, activeTooltipIndex: -1, isTooltipActive: Boolean(r) };
                },
                xe = function (e) {
                    return "horizontal" === e ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : "vertical" === e ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : "centric" === e ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
                },
                ge = function (e, t) {
                    return "xAxis" === t ? e[t].width : "yAxis" === t ? e[t].height : void 0;
                },
                Ie = function (e) {
                    var t = e.chartName,
                        r = e.GraphicalChild,
                        n = e.defaultTooltipEventType,
                        o = void 0 === n ? "axis" : n,
                        l = e.validateTooltipEventTypes,
                        d = void 0 === l ? ["axis"] : l,
                        c = e.axisComponents,
                        p = e.legendContent,
                        f = e.formatAxisMap,
                        O = e.defaultProps,
                        D = function (e, t) {
                            var r = t.graphicalItems,
                                a = t.stackGroups,
                                n = t.offset,
                                o = t.updateId,
                                s = t.dataStartIndex,
                                l = t.dataEndIndex,
                                d = e.barSize,
                                u = e.layout,
                                p = e.barGap,
                                h = e.barCategoryGap,
                                f = e.maxBarSize,
                                v = xe(u),
                                y = v.numericAxisName,
                                x = v.cateAxisName,
                                g = (function (e) {
                                    return (
                                        !(!e || !e.length) &&
                                        e.some(function (e) {
                                            var t = (0, S.Gf)(e && e.type);
                                            return t && t.indexOf("Bar") >= 0;
                                        })
                                    );
                                })(r),
                                I = [];
                            return (
                                r.forEach(function (r, v) {
                                    var b = pe(e.data, { graphicalItems: [r], dataStartIndex: s, dataEndIndex: l }),
                                        A = void 0 !== r.type.defaultProps ? ie(ie({}, r.type.defaultProps), r.props) : r.props,
                                        T = A.dataKey,
                                        k = A.maxBarSize,
                                        E = A["".concat(y, "Id")],
                                        M = A["".concat(x, "Id")],
                                        w = c.reduce(function (e, r) {
                                            var a = t["".concat(r.axisType, "Map")],
                                                n = A["".concat(r.axisType, "Id")];
                                            (a && a[n]) || "zAxis" === r.axisType || (0, m.Z)(!1);
                                            var i = a[n];
                                            return ie(ie({}, e), {}, oe(oe({}, r.axisType, i), "".concat(r.axisType, "Ticks"), (0, P.uY)(i)));
                                        }, {}),
                                        O = w[x],
                                        C = w["".concat(x, "Ticks")],
                                        L = a && a[E] && a[E].hasStack && (0, P.O3)(r, a[E].stackGroups),
                                        B = (0, S.Gf)(r.type).indexOf("Bar") >= 0,
                                        j = (0, P.zT)(O, C),
                                        D = [],
                                        G = g && (0, P.pt)({ barSize: d, stackGroups: a, totalSize: ge(w, x) });
                                    if (B) {
                                        var z,
                                            N,
                                            R = i()(k) ? f : k,
                                            K = null !== (z = null !== (N = (0, P.zT)(O, C, !0)) && void 0 !== N ? N : R) && void 0 !== z ? z : 0;
                                        (D = (0, P.qz)({ barGap: p, barCategoryGap: h, bandSize: K !== j ? K : j, sizeList: G[M], maxBarSize: R })),
                                            K !== j &&
                                                (D = D.map(function (e) {
                                                    return ie(ie({}, e), {}, { position: ie(ie({}, e.position), {}, { offset: e.position.offset - K / 2 }) });
                                                }));
                                    }
                                    var Y = r && r.type && r.type.getComposedData;
                                    Y && I.push({ props: ie(ie({}, Y(ie(ie({}, w), {}, { displayedData: b, props: e, dataKey: T, item: r, bandSize: j, barPosition: D, offset: n, stackedData: L, layout: u, dataStartIndex: s, dataEndIndex: l }))), {}, oe(oe(oe({ key: r.key || "item-".concat(v) }, y, w[y]), x, w[x]), "animationId", o)), childIndex: (0, S.$R)(r, e.children), item: r });
                                }),
                                I
                            );
                        },
                        G = function (e, a) {
                            var n = e.props,
                                i = e.dataStartIndex,
                                o = e.dataEndIndex,
                                s = e.updateId;
                            if (!(0, S.TT)({ props: n })) return null;
                            var l = n.children,
                                d = n.layout,
                                p = n.stackOffset,
                                v = n.data,
                                y = n.reverseStackOrder,
                                m = xe(d),
                                x = m.numericAxisName,
                                g = m.cateAxisName,
                                I = (0, S.NN)(l, r),
                                A = (0, P.wh)(v, I, "".concat(x, "Id"), "".concat(g, "Id"), p, y),
                                T = c.reduce(function (e, t) {
                                    var r = "".concat(t.axisType, "Map");
                                    return ie(ie({}, e), {}, oe({}, r, ye(n, ie(ie({}, t), {}, { graphicalItems: I, stackGroups: t.axisType === x && A, dataStartIndex: i, dataEndIndex: o }))));
                                }, {}),
                                E = (function (e, t) {
                                    var r = e.props,
                                        a = e.graphicalItems,
                                        n = e.xAxisMap,
                                        i = void 0 === n ? {} : n,
                                        o = e.yAxisMap,
                                        s = void 0 === o ? {} : o,
                                        l = r.width,
                                        d = r.height,
                                        c = r.children,
                                        p = r.margin || {},
                                        h = (0, S.sP)(c, k.B),
                                        f = (0, S.sP)(c, b.D),
                                        v = Object.keys(s).reduce(
                                            function (e, t) {
                                                var r = s[t],
                                                    a = r.orientation;
                                                return r.mirror || r.hide ? e : ie(ie({}, e), {}, oe({}, a, e[a] + r.width));
                                            },
                                            { left: p.left || 0, right: p.right || 0 },
                                        ),
                                        y = Object.keys(i).reduce(
                                            function (e, t) {
                                                var r = i[t],
                                                    a = r.orientation;
                                                return r.mirror || r.hide ? e : ie(ie({}, e), {}, oe({}, a, u()(e, "".concat(a)) + r.height));
                                            },
                                            { top: p.top || 0, bottom: p.bottom || 0 },
                                        ),
                                        m = ie(ie({}, y), v),
                                        x = m.bottom;
                                    h && (m.bottom += h.props.height || k.B.defaultProps.height), f && t && (m = (0, P.By)(m, a, r, t));
                                    var g = l - m.left - m.right,
                                        I = d - m.top - m.bottom;
                                    return ie(ie({ brushBottom: x }, m), {}, { width: Math.max(g, 0), height: Math.max(I, 0) });
                                })(ie(ie({}, T), {}, { props: n, graphicalItems: I }), null == a ? void 0 : a.legendBBox);
                            Object.keys(T).forEach(function (e) {
                                T[e] = f(n, T[e], E, e.replace("Map", ""), t);
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
                                        orderedTooltipTicks: h()(C, function (e) {
                                            return e.coordinate;
                                        }),
                                        tooltipAxis: O,
                                        tooltipAxisBandSize: (0, P.zT)(O, C),
                                    }),
                                j = D(n, ie(ie({}, T), {}, { dataStartIndex: i, dataEndIndex: o, updateId: s, graphicalItems: I, stackGroups: A, offset: E }));
                            return ie(ie({ formattedGraphicalItems: j, graphicalItems: I, offset: E, stackGroups: A }, B), T);
                        },
                        z = (function (e) {
                            function r(e) {
                                var n, o, l;
                                return (
                                    (function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    })(this, r),
                                    oe((l = q(this, r, [e])), "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
                                    oe(l, "accessibilityManager", new R()),
                                    oe(l, "handleLegendBBoxUpdate", function (e) {
                                        if (e) {
                                            var t = l.state,
                                                r = t.dataStartIndex,
                                                a = t.dataEndIndex,
                                                n = t.updateId;
                                            l.setState(ie({ legendBBox: e }, G({ props: l.props, dataStartIndex: r, dataEndIndex: a, updateId: n }, ie(ie({}, l.state), {}, { legendBBox: e }))));
                                        }
                                    }),
                                    oe(l, "handleReceiveSyncEvent", function (e, t, r) {
                                        if (l.props.syncId === e) {
                                            if (r === l.eventEmitterSymbol && "function" != typeof l.props.syncMethod) return;
                                            l.applySyncEvent(t);
                                        }
                                    }),
                                    oe(l, "handleBrushChange", function (e) {
                                        var t = e.startIndex,
                                            r = e.endIndex;
                                        if (t !== l.state.dataStartIndex || r !== l.state.dataEndIndex) {
                                            var a = l.state.updateId;
                                            l.setState(function () {
                                                return ie({ dataStartIndex: t, dataEndIndex: r }, G({ props: l.props, dataStartIndex: t, dataEndIndex: r, updateId: a }, l.state));
                                            }),
                                                l.triggerSyncEvent({ dataStartIndex: t, dataEndIndex: r });
                                        }
                                    }),
                                    oe(l, "handleMouseEnter", function (e) {
                                        var t = l.getMouseInfo(e);
                                        if (t) {
                                            var r = ie(ie({}, t), {}, { isTooltipActive: !0 });
                                            l.setState(r), l.triggerSyncEvent(r);
                                            var a = l.props.onMouseEnter;
                                            s()(a) && a(r, e);
                                        }
                                    }),
                                    oe(l, "triggeredAfterMouseMove", function (e) {
                                        var t = l.getMouseInfo(e),
                                            r = t ? ie(ie({}, t), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
                                        l.setState(r), l.triggerSyncEvent(r);
                                        var a = l.props.onMouseMove;
                                        s()(a) && a(r, e);
                                    }),
                                    oe(l, "handleItemMouseEnter", function (e) {
                                        l.setState(function () {
                                            return { isTooltipActive: !0, activeItem: e, activePayload: e.tooltipPayload, activeCoordinate: e.tooltipPosition || { x: e.cx, y: e.cy } };
                                        });
                                    }),
                                    oe(l, "handleItemMouseLeave", function () {
                                        l.setState(function () {
                                            return { isTooltipActive: !1 };
                                        });
                                    }),
                                    oe(l, "handleMouseMove", function (e) {
                                        e.persist(), l.throttleTriggeredAfterMouseMove(e);
                                    }),
                                    oe(l, "handleMouseLeave", function (e) {
                                        l.throttleTriggeredAfterMouseMove.cancel();
                                        var t = { isTooltipActive: !1 };
                                        l.setState(t), l.triggerSyncEvent(t);
                                        var r = l.props.onMouseLeave;
                                        s()(r) && r(t, e);
                                    }),
                                    oe(l, "handleOuterEvent", function (e) {
                                        var t,
                                            r = (0, S.Bh)(e),
                                            a = u()(l.props, "".concat(r));
                                        r && s()(a) && a(null !== (t = /.*touch.*/i.test(r) ? l.getMouseInfo(e.changedTouches[0]) : l.getMouseInfo(e)) && void 0 !== t ? t : {}, e);
                                    }),
                                    oe(l, "handleClick", function (e) {
                                        var t = l.getMouseInfo(e);
                                        if (t) {
                                            var r = ie(ie({}, t), {}, { isTooltipActive: !0 });
                                            l.setState(r), l.triggerSyncEvent(r);
                                            var a = l.props.onClick;
                                            s()(a) && a(r, e);
                                        }
                                    }),
                                    oe(l, "handleMouseDown", function (e) {
                                        var t = l.props.onMouseDown;
                                        s()(t) && t(l.getMouseInfo(e), e);
                                    }),
                                    oe(l, "handleMouseUp", function (e) {
                                        var t = l.props.onMouseUp;
                                        s()(t) && t(l.getMouseInfo(e), e);
                                    }),
                                    oe(l, "handleTouchMove", function (e) {
                                        null != e.changedTouches && e.changedTouches.length > 0 && l.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
                                    }),
                                    oe(l, "handleTouchStart", function (e) {
                                        null != e.changedTouches && e.changedTouches.length > 0 && l.handleMouseDown(e.changedTouches[0]);
                                    }),
                                    oe(l, "handleTouchEnd", function (e) {
                                        null != e.changedTouches && e.changedTouches.length > 0 && l.handleMouseUp(e.changedTouches[0]);
                                    }),
                                    oe(l, "triggerSyncEvent", function (e) {
                                        void 0 !== l.props.syncId && B.t.emit(B.Y, l.props.syncId, e, l.eventEmitterSymbol);
                                    }),
                                    oe(l, "applySyncEvent", function (e) {
                                        var t = l.props,
                                            r = t.layout,
                                            a = t.syncMethod,
                                            n = l.state.updateId,
                                            i = e.dataStartIndex,
                                            o = e.dataEndIndex;
                                        if (void 0 !== e.dataStartIndex || void 0 !== e.dataEndIndex) l.setState(ie({ dataStartIndex: i, dataEndIndex: o }, G({ props: l.props, dataStartIndex: i, dataEndIndex: o, updateId: n }, l.state)));
                                        else if (void 0 !== e.activeTooltipIndex) {
                                            var s = e.chartX,
                                                d = e.chartY,
                                                c = e.activeTooltipIndex,
                                                u = l.state,
                                                p = u.offset,
                                                h = u.tooltipTicks;
                                            if (!p) return;
                                            if ("function" == typeof a) c = a(h, e);
                                            else if ("value" === a) {
                                                c = -1;
                                                for (var f = 0; f < h.length; f++)
                                                    if (h[f].value === e.activeLabel) {
                                                        c = f;
                                                        break;
                                                    }
                                            }
                                            var v = ie(ie({}, p), {}, { x: p.left, y: p.top }),
                                                y = Math.min(s, v.x + v.width),
                                                m = Math.min(d, v.y + v.height),
                                                x = h[c] && h[c].value,
                                                g = fe(l.state, l.props.data, c),
                                                I = h[c] ? { x: "horizontal" === r ? h[c].coordinate : y, y: "horizontal" === r ? m : h[c].coordinate } : ce;
                                            l.setState(ie(ie({}, e), {}, { activeLabel: x, activeCoordinate: I, activePayload: g, activeTooltipIndex: c }));
                                        } else l.setState(e);
                                    }),
                                    oe(l, "renderCursor", function (e) {
                                        var r,
                                            n = l.state,
                                            i = n.isTooltipActive,
                                            o = n.activeCoordinate,
                                            s = n.activePayload,
                                            d = n.offset,
                                            c = n.activeTooltipIndex,
                                            u = n.tooltipAxisBandSize,
                                            p = l.getTooltipEventType(),
                                            h = null !== (r = e.props.active) && void 0 !== r ? r : i,
                                            f = l.props.layout,
                                            v = e.key || "_recharts-cursor";
                                        return a.createElement(_.C, { key: v, activeCoordinate: o, activePayload: s, activeTooltipIndex: c, chartName: t, element: e, isActive: h, layout: f, offset: d, tooltipAxisBandSize: u, tooltipEventType: p });
                                    }),
                                    oe(l, "renderPolarAxis", function (e, t, r) {
                                        var n = u()(e, "type.axisType"),
                                            i = u()(l.state, "".concat(n, "Map")),
                                            o = e.type.defaultProps,
                                            s = void 0 !== o ? ie(ie({}, o), e.props) : e.props,
                                            d = i && i[s["".concat(n, "Id")]];
                                        return (0, a.cloneElement)(e, ie(ie({}, d), {}, { className: (0, y.Z)(n, d.className), key: e.key || "".concat(t, "-").concat(r), ticks: (0, P.uY)(d, !0) }));
                                    }),
                                    oe(l, "renderPolarGrid", function (e) {
                                        var t = e.props,
                                            r = t.radialLines,
                                            n = t.polarAngles,
                                            i = t.polarRadius,
                                            o = l.state,
                                            s = o.radiusAxisMap,
                                            d = o.angleAxisMap,
                                            c = (0, M.Kt)(s),
                                            u = (0, M.Kt)(d),
                                            p = u.cx,
                                            h = u.cy,
                                            f = u.innerRadius,
                                            v = u.outerRadius;
                                        return (0, a.cloneElement)(e, {
                                            polarAngles: Array.isArray(n)
                                                ? n
                                                : (0, P.uY)(u, !0).map(function (e) {
                                                      return e.coordinate;
                                                  }),
                                            polarRadius: Array.isArray(i)
                                                ? i
                                                : (0, P.uY)(c, !0).map(function (e) {
                                                      return e.coordinate;
                                                  }),
                                            cx: p,
                                            cy: h,
                                            innerRadius: f,
                                            outerRadius: v,
                                            key: e.key || "polar-grid",
                                            radialLines: r,
                                        });
                                    }),
                                    oe(l, "renderLegend", function () {
                                        var e = l.state.formattedGraphicalItems,
                                            t = l.props,
                                            r = t.children,
                                            n = t.width,
                                            i = t.height,
                                            o = l.props.margin || {},
                                            s = n - (o.left || 0) - (o.right || 0),
                                            d = (0, w.z)({ children: r, formattedGraphicalItems: e, legendWidth: s, legendContent: p });
                                        if (!d) return null;
                                        var c = d.item,
                                            u = Z(d, W);
                                        return (0, a.cloneElement)(c, ie(ie({}, u), {}, { chartWidth: n, chartHeight: i, margin: o, onBBoxUpdate: l.handleLegendBBoxUpdate }));
                                    }),
                                    oe(l, "renderTooltip", function () {
                                        var e,
                                            t = l.props,
                                            r = t.children,
                                            n = t.accessibilityLayer,
                                            i = (0, S.sP)(r, I.u);
                                        if (!i) return null;
                                        var o = l.state,
                                            s = o.isTooltipActive,
                                            d = o.activeCoordinate,
                                            c = o.activePayload,
                                            u = o.activeLabel,
                                            p = o.offset,
                                            h = null !== (e = i.props.active) && void 0 !== e ? e : s;
                                        return (0, a.cloneElement)(i, { viewBox: ie(ie({}, p), {}, { x: p.left, y: p.top }), active: h, label: u, payload: h ? c : [], coordinate: d, accessibilityLayer: n });
                                    }),
                                    oe(l, "renderBrush", function (e) {
                                        var t = l.props,
                                            r = t.margin,
                                            n = t.data,
                                            i = l.state,
                                            o = i.offset,
                                            s = i.dataStartIndex,
                                            d = i.dataEndIndex,
                                            c = i.updateId;
                                        return (0, a.cloneElement)(e, { key: e.key || "_recharts-brush", onChange: (0, P.DO)(l.handleBrushChange, e.props.onChange), data: n, x: (0, M.hj)(e.props.x) ? e.props.x : o.left, y: (0, M.hj)(e.props.y) ? e.props.y : o.top + o.height + o.brushBottom - (r.bottom || 0), width: (0, M.hj)(e.props.width) ? e.props.width : o.width, startIndex: s, endIndex: d, updateId: "brush-".concat(c) });
                                    }),
                                    oe(l, "renderReferenceElement", function (e, t, r) {
                                        if (!e) return null;
                                        var n = l.clipPathId,
                                            i = l.state,
                                            o = i.xAxisMap,
                                            s = i.yAxisMap,
                                            d = i.offset,
                                            c = e.type.defaultProps || {},
                                            u = e.props,
                                            p = u.xAxisId,
                                            h = void 0 === p ? c.xAxisId : p,
                                            f = u.yAxisId,
                                            v = void 0 === f ? c.yAxisId : f;
                                        return (0, a.cloneElement)(e, { key: e.key || "".concat(t, "-").concat(r), xAxis: o[h], yAxis: s[v], viewBox: { x: d.left, y: d.top, width: d.width, height: d.height }, clipPathId: n });
                                    }),
                                    oe(l, "renderActivePoints", function (e) {
                                        var t = e.item,
                                            a = e.activePoint,
                                            n = e.basePoint,
                                            i = e.childIndex,
                                            o = e.isRange,
                                            s = [],
                                            l = t.props.key,
                                            d = void 0 !== t.item.type.defaultProps ? ie(ie({}, t.item.type.defaultProps), t.item.props) : t.item.props,
                                            c = d.activeDot,
                                            u = ie(ie({ index: i, dataKey: d.dataKey, cx: a.x, cy: a.y, r: 4, fill: (0, P.fk)(t.item), strokeWidth: 2, stroke: "#fff", payload: a.payload, value: a.value }, (0, S.L6)(c, !1)), (0, j.Ym)(c));
                                        return s.push(r.renderActiveDot(c, u, "".concat(l, "-activePoint-").concat(i))), n ? s.push(r.renderActiveDot(c, ie(ie({}, u), {}, { cx: n.x, cy: n.y }), "".concat(l, "-basePoint-").concat(i))) : o && s.push(null), s;
                                    }),
                                    oe(l, "renderGraphicChild", function (e, t, r) {
                                        var n = l.filterFormatItem(e, t, r);
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
                                            g = void 0 !== n.item.type.defaultProps ? ie(ie({}, n.item.type.defaultProps), n.item.props) : n.item.props,
                                            b = g.activeDot,
                                            A = g.hide,
                                            T = g.activeBar,
                                            k = g.activeShape,
                                            E = Boolean(!A && d && f && (b || T || k)),
                                            w = {};
                                        "axis" !== o && f && "click" === f.props.trigger ? (w = { onClick: (0, P.DO)(l.handleItemMouseEnter, e.props.onClick) }) : "axis" !== o && (w = { onMouseLeave: (0, P.DO)(l.handleItemMouseLeave, e.props.onMouseLeave), onMouseEnter: (0, P.DO)(l.handleItemMouseEnter, e.props.onMouseEnter) });
                                        var O = (0, a.cloneElement)(e, ie(ie({}, n.props), w));
                                        if (E) {
                                            if (!(u >= 0)) {
                                                var C,
                                                    L = (null !== (C = l.getItemByXY(l.state.activeCoordinate)) && void 0 !== C ? C : { graphicalItem: O }).graphicalItem,
                                                    B = L.item,
                                                    j = void 0 === B ? e : B,
                                                    D = L.childIndex,
                                                    G = ie(ie(ie({}, n.props), w), {}, { activeIndex: D });
                                                return [(0, a.cloneElement)(j, G), null, null];
                                            }
                                            var z, N;
                                            if (c.dataKey && !c.allowDuplicatedCategory) {
                                                var R =
                                                    "function" == typeof c.dataKey
                                                        ? function (e) {
                                                              return "function" == typeof c.dataKey ? c.dataKey(e.payload) : null;
                                                          }
                                                        : "payload.".concat(c.dataKey.toString());
                                                (z = (0, M.Ap)(y, R, p)), (N = m && x && (0, M.Ap)(x, R, p));
                                            } else (z = null == y ? void 0 : y[u]), (N = m && x && x[u]);
                                            if (k || T) {
                                                var K = void 0 !== e.props.activeIndex ? e.props.activeIndex : u;
                                                return [(0, a.cloneElement)(e, ie(ie(ie({}, n.props), w), {}, { activeIndex: K })), null, null];
                                            }
                                            if (!i()(z)) return [O].concat(te(l.renderActivePoints({ item: n, activePoint: z, basePoint: N, childIndex: u, isRange: m })));
                                        }
                                        return m ? [O, null, null] : [O, null];
                                    }),
                                    oe(l, "renderCustomized", function (e, t, r) {
                                        return (0, a.cloneElement)(e, ie(ie({ key: "recharts-customized-".concat(r) }, l.props), l.state));
                                    }),
                                    oe(l, "renderMap", { CartesianGrid: { handler: ue, once: !0 }, ReferenceArea: { handler: l.renderReferenceElement }, ReferenceLine: { handler: ue }, ReferenceDot: { handler: l.renderReferenceElement }, XAxis: { handler: ue }, YAxis: { handler: ue }, Brush: { handler: l.renderBrush, once: !0 }, Bar: { handler: l.renderGraphicChild }, Line: { handler: l.renderGraphicChild }, Area: { handler: l.renderGraphicChild }, Radar: { handler: l.renderGraphicChild }, RadialBar: { handler: l.renderGraphicChild }, Scatter: { handler: l.renderGraphicChild }, Pie: { handler: l.renderGraphicChild }, Funnel: { handler: l.renderGraphicChild }, Tooltip: { handler: l.renderCursor, once: !0 }, PolarGrid: { handler: l.renderPolarGrid, once: !0 }, PolarAngleAxis: { handler: l.renderPolarAxis }, PolarRadiusAxis: { handler: l.renderPolarAxis }, Customized: { handler: l.renderCustomized } }),
                                    (l.clipPathId = "".concat(null !== (n = e.id) && void 0 !== n ? n : (0, M.EL)("recharts"), "-clip")),
                                    (l.throttleTriggeredAfterMouseMove = v()(l.triggeredAfterMouseMove, null !== (o = e.throttleDelay) && void 0 !== o ? o : 1e3 / 60)),
                                    (l.state = {}),
                                    l
                                );
                            }
                            return (
                                (function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && ee(e, t);
                                })(r, e),
                                (n = r),
                                (l = [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            var e, t;
                                            this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: null !== (e = this.props.margin.left) && void 0 !== e ? e : 0, top: null !== (t = this.props.margin.top) && void 0 !== t ? t : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
                                        },
                                    },
                                    {
                                        key: "displayDefaultTooltip",
                                        value: function () {
                                            var e = this.props,
                                                t = e.children,
                                                r = e.data,
                                                a = e.height,
                                                n = e.layout,
                                                i = (0, S.sP)(t, I.u);
                                            if (i) {
                                                var o = i.props.defaultIndex;
                                                if (!("number" != typeof o || o < 0 || o > this.state.tooltipTicks.length - 1)) {
                                                    var s = this.state.tooltipTicks[o] && this.state.tooltipTicks[o].value,
                                                        l = fe(this.state, r, o, s),
                                                        d = this.state.tooltipTicks[o].coordinate,
                                                        c = (this.state.offset.top + a) / 2,
                                                        u = "horizontal" === n ? { x: d, y: c } : { y: d, x: c },
                                                        p = this.state.formattedGraphicalItems.find(function (e) {
                                                            return "Scatter" === e.item.type.name;
                                                        });
                                                    p && ((u = ie(ie({}, u), p.props.points[o].tooltipPosition)), (l = p.props.points[o].tooltipPayload));
                                                    var h = { activeTooltipIndex: o, isTooltipActive: !0, activeLabel: s, activePayload: l, activeCoordinate: u };
                                                    this.setState(h), this.renderCursor(i), this.accessibilityManager.setIndex(o);
                                                }
                                            }
                                        },
                                    },
                                    {
                                        key: "getSnapshotBeforeUpdate",
                                        value: function (e, t) {
                                            return this.props.accessibilityLayer ? (this.state.tooltipTicks !== t.tooltipTicks && this.accessibilityManager.setDetails({ coordinateList: this.state.tooltipTicks }), this.props.layout !== e.layout && this.accessibilityManager.setDetails({ layout: this.props.layout }), this.props.margin !== e.margin && this.accessibilityManager.setDetails({ offset: { left: null !== (r = this.props.margin.left) && void 0 !== r ? r : 0, top: null !== (a = this.props.margin.top) && void 0 !== a ? a : 0 } }), null) : null;
                                            var r, a;
                                        },
                                    },
                                    {
                                        key: "componentDidUpdate",
                                        value: function (e) {
                                            (0, S.rL)([(0, S.sP)(e.children, I.u)], [(0, S.sP)(this.props.children, I.u)]) || this.displayDefaultTooltip();
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
                                            var e = (0, S.sP)(this.props.children, I.u);
                                            if (e && "boolean" == typeof e.props.shared) {
                                                var t = e.props.shared ? "axis" : "item";
                                                return d.indexOf(t) >= 0 ? t : o;
                                            }
                                            return o;
                                        },
                                    },
                                    {
                                        key: "getMouseInfo",
                                        value: function (e) {
                                            if (!this.container) return null;
                                            var t = this.container,
                                                r = t.getBoundingClientRect(),
                                                a = (0, E.os)(r),
                                                n = { chartX: Math.round(e.pageX - a.left), chartY: Math.round(e.pageY - a.top) },
                                                i = r.width / t.offsetWidth || 1,
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
                                                return ie(ie({}, n), {}, { xValue: p, yValue: h });
                                            }
                                            var f = ve(this.state, this.props.data, this.props.layout, o);
                                            return f ? ie(ie({}, n), f) : null;
                                        },
                                    },
                                    {
                                        key: "inRange",
                                        value: function (e, t) {
                                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                                a = this.props.layout,
                                                n = e / r,
                                                i = t / r;
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
                                            var e = this.props.children,
                                                t = this.getTooltipEventType(),
                                                r = (0, S.sP)(e, I.u),
                                                a = {};
                                            return r && "axis" === t && (a = "click" === r.props.trigger ? { onClick: this.handleClick } : { onMouseEnter: this.handleMouseEnter, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd }), ie(ie({}, (0, j.Ym)(this.props, this.handleOuterEvent)), a);
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
                                        value: function (e, t, r) {
                                            for (var a = this.state.formattedGraphicalItems, n = 0, i = a.length; n < i; n++) {
                                                var o = a[n];
                                                if (o.item === e || o.props.key === e.key || (t === (0, S.Gf)(o.item.type) && r === o.childIndex)) return o;
                                            }
                                            return null;
                                        },
                                    },
                                    {
                                        key: "renderClipPath",
                                        value: function () {
                                            var e = this.clipPathId,
                                                t = this.state.offset,
                                                r = t.left,
                                                n = t.top,
                                                i = t.height,
                                                o = t.width;
                                            return a.createElement("defs", null, a.createElement("clipPath", { id: e }, a.createElement("rect", { x: r, y: n, height: i, width: o })));
                                        },
                                    },
                                    {
                                        key: "getXScales",
                                        value: function () {
                                            var e = this.state.xAxisMap;
                                            return e
                                                ? Object.entries(e).reduce(function (e, t) {
                                                      var r = V(t, 2),
                                                          a = r[0],
                                                          n = r[1];
                                                      return ie(ie({}, e), {}, oe({}, a, n.scale));
                                                  }, {})
                                                : null;
                                        },
                                    },
                                    {
                                        key: "getYScales",
                                        value: function () {
                                            var e = this.state.yAxisMap;
                                            return e
                                                ? Object.entries(e).reduce(function (e, t) {
                                                      var r = V(t, 2),
                                                          a = r[0],
                                                          n = r[1];
                                                      return ie(ie({}, e), {}, oe({}, a, n.scale));
                                                  }, {})
                                                : null;
                                        },
                                    },
                                    {
                                        key: "getXScaleByAxisId",
                                        value: function (e) {
                                            var t;
                                            return null === (t = this.state.xAxisMap) || void 0 === t || null === (t = t[e]) || void 0 === t ? void 0 : t.scale;
                                        },
                                    },
                                    {
                                        key: "getYScaleByAxisId",
                                        value: function (e) {
                                            var t;
                                            return null === (t = this.state.yAxisMap) || void 0 === t || null === (t = t[e]) || void 0 === t ? void 0 : t.scale;
                                        },
                                    },
                                    {
                                        key: "getItemByXY",
                                        value: function (e) {
                                            var t = this.state,
                                                r = t.formattedGraphicalItems,
                                                a = t.activeItem;
                                            if (r && r.length)
                                                for (var n = 0, i = r.length; n < i; n++) {
                                                    var o = r[n],
                                                        s = o.props,
                                                        l = o.item,
                                                        d = void 0 !== l.type.defaultProps ? ie(ie({}, l.type.defaultProps), l.props) : l.props,
                                                        c = (0, S.Gf)(l.type);
                                                    if ("Bar" === c) {
                                                        var u = (s.data || []).find(function (t) {
                                                            return (0, T.X)(e, t);
                                                        });
                                                        if (u) return { graphicalItem: o, payload: u };
                                                    } else if ("RadialBar" === c) {
                                                        var p = (s.data || []).find(function (t) {
                                                            return (0, C.z3)(e, t);
                                                        });
                                                        if (p) return { graphicalItem: o, payload: p };
                                                    } else if ((0, Y.lT)(o, a) || (0, Y.V$)(o, a) || (0, Y.w7)(o, a)) {
                                                        var h = (0, Y.a3)({ graphicalItem: o, activeTooltipItem: a, itemData: d.data }),
                                                            f = void 0 === d.activeIndex ? h : d.activeIndex;
                                                        return { graphicalItem: ie(ie({}, o), {}, { childIndex: f }), payload: (0, Y.w7)(o, a) ? d.data[h] : o.props.data[h] };
                                                    }
                                                }
                                            return null;
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            var e = this;
                                            if (!(0, S.TT)(this)) return null;
                                            var t,
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
                                                ((f.tabIndex = null !== (t = this.props.tabIndex) && void 0 !== t ? t : 0),
                                                (f.role = null !== (r = this.props.role) && void 0 !== r ? r : "application"),
                                                (f.onKeyDown = function (t) {
                                                    e.accessibilityManager.keyboardEvent(t);
                                                }),
                                                (f.onFocus = function () {
                                                    e.accessibilityManager.focus();
                                                }));
                                            var v = this.parseEventsOfWrapper();
                                            return a.createElement(
                                                X.br,
                                                { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId },
                                                a.createElement(
                                                    "div",
                                                    F({ className: (0, y.Z)("recharts-wrapper", o), style: ie({ position: "relative", cursor: "default", width: s, height: l }, d) }, v, {
                                                        ref: function (t) {
                                                            e.container = t;
                                                        },
                                                    }),
                                                    a.createElement(x.T, F({}, f, { width: s, height: l, title: u, desc: p, style: de }), this.renderClipPath(), (0, S.eu)(i, this.renderMap)),
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
                    oe(z, "displayName", t),
                        oe(z, "defaultProps", ie({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: !1, syncMethod: "index" }, O)),
                        oe(z, "getDerivedStateFromProps", function (e, t) {
                            var r = e.dataKey,
                                a = e.data,
                                n = e.children,
                                o = e.width,
                                s = e.height,
                                l = e.layout,
                                d = e.stackOffset,
                                c = e.margin,
                                u = t.dataStartIndex,
                                p = t.dataEndIndex;
                            if (void 0 === t.updateId) {
                                var h = me(e);
                                return ie(ie(ie({}, h), {}, { updateId: 0 }, G(ie(ie({ props: e }, h), {}, { updateId: 0 }), t)), {}, { prevDataKey: r, prevData: a, prevWidth: o, prevHeight: s, prevLayout: l, prevStackOffset: d, prevMargin: c, prevChildren: n });
                            }
                            if (r !== t.prevDataKey || a !== t.prevData || o !== t.prevWidth || s !== t.prevHeight || l !== t.prevLayout || d !== t.prevStackOffset || !(0, L.w)(c, t.prevMargin)) {
                                var f = me(e),
                                    v = { chartX: t.chartX, chartY: t.chartY, isTooltipActive: t.isTooltipActive },
                                    y = ie(ie({}, ve(t, a, l)), {}, { updateId: t.updateId + 1 }),
                                    m = ie(ie(ie({}, f), v), y);
                                return ie(ie(ie({}, m), G(ie({ props: e }, m), t)), {}, { prevDataKey: r, prevData: a, prevWidth: o, prevHeight: s, prevLayout: l, prevStackOffset: d, prevMargin: c, prevChildren: n });
                            }
                            if (!(0, S.rL)(n, t.prevChildren)) {
                                var x,
                                    g,
                                    I,
                                    b,
                                    A = (0, S.sP)(n, k.B),
                                    T = A && null !== (x = null === (g = A.props) || void 0 === g ? void 0 : g.startIndex) && void 0 !== x ? x : u,
                                    E = A && null !== (I = null === (b = A.props) || void 0 === b ? void 0 : b.endIndex) && void 0 !== I ? I : p,
                                    M = T !== u || E !== p,
                                    P = !i()(a) && !M ? t.updateId : t.updateId + 1;
                                return ie(ie({ updateId: P }, G(ie(ie({ props: e }, t), {}, { updateId: P, dataStartIndex: T, dataEndIndex: E }), t)), {}, { prevChildren: n, dataStartIndex: T, dataEndIndex: E });
                            }
                            return null;
                        }),
                        oe(z, "renderActiveDot", function (e, t, r) {
                            var n;
                            return (n = (0, a.isValidElement)(e) ? (0, a.cloneElement)(e, t) : s()(e) ? e(t) : a.createElement(A.o, t)), a.createElement(g.m, { className: "recharts-active-dot", key: r }, n);
                        });
                    var N = (0, a.forwardRef)(function (e, t) {
                        return a.createElement(z, F({}, e, { ref: t }));
                    });
                    return (N.displayName = z.displayName), N;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-4fec5af7.89ffb98a.js.map
