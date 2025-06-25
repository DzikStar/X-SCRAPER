window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-e5bca7e4"],
        {
            107267: (t, e, n) => {
                n.r(e), n.d(e, { MemoryRouter: () => g, Prompt: () => w, Redirect: () => S, Route: () => O, Router: () => _, StaticRouter: () => D, Switch: () => F, __HistoryContext: () => m, __RouterContext: () => v, generatePath: () => E, matchPath: () => L, useHistory: () => I, useLocation: () => T, useParams: () => N, useRouteMatch: () => V, withRouter: () => U });
                var r = n(981665),
                    o = n(202784),
                    i = n(526702),
                    a = n(181549),
                    u = n(161898),
                    s = n(807896),
                    c = n(920099),
                    l = n.n(c),
                    p = (n(148570), n(231461)),
                    f = n(373463),
                    h = n.n(f),
                    d = function (t) {
                        var e = (0, a.Z)();
                        return (e.displayName = t), e;
                    },
                    m = d("Router-History"),
                    y = function (t) {
                        var e = (0, a.Z)();
                        return (e.displayName = t), e;
                    },
                    v = y("Router"),
                    _ = (function (t) {
                        function e(e) {
                            var n;
                            return (
                                ((n = t.call(this, e) || this).state = { location: e.history.location }),
                                (n._isMounted = !1),
                                (n._pendingLocation = null),
                                e.staticContext ||
                                    (n.unlisten = e.history.listen(function (t) {
                                        n._isMounted ? n.setState({ location: t }) : (n._pendingLocation = t);
                                    })),
                                n
                            );
                        }
                        (0, r.Z)(e, t),
                            (e.computeRootMatch = function (t) {
                                return { path: "/", url: "/", params: {}, isExact: "/" === t };
                            });
                        var n = e.prototype;
                        return (
                            (n.componentDidMount = function () {
                                (this._isMounted = !0), this._pendingLocation && this.setState({ location: this._pendingLocation });
                            }),
                            (n.componentWillUnmount = function () {
                                this.unlisten && this.unlisten();
                            }),
                            (n.render = function () {
                                return o.createElement(v.Provider, { value: { history: this.props.history, location: this.state.location, match: e.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext } }, o.createElement(m.Provider, { children: this.props.children || null, value: this.props.history }));
                            }),
                            e
                        );
                    })(o.Component);
                var g = (function (t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return ((e = t.call.apply(t, [this].concat(r)) || this).history = (0, i.createMemoryHistory)(e.props)), e;
                    }
                    return (
                        (0, r.Z)(e, t),
                        (e.prototype.render = function () {
                            return o.createElement(_, { history: this.history, children: this.props.children });
                        }),
                        e
                    );
                })(o.Component);
                var b = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    (0, r.Z)(e, t);
                    var n = e.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.props.onMount && this.props.onMount.call(this, this);
                        }),
                        (n.componentDidUpdate = function (t) {
                            this.props.onUpdate && this.props.onUpdate.call(this, this, t);
                        }),
                        (n.componentWillUnmount = function () {
                            this.props.onUnmount && this.props.onUnmount.call(this, this);
                        }),
                        (n.render = function () {
                            return null;
                        }),
                        e
                    );
                })(o.Component);
                function w(t) {
                    var e = t.message,
                        n = t.when,
                        r = void 0 === n || n;
                    return o.createElement(v.Consumer, null, function (t) {
                        if ((t || (0, u.default)(!1), !r || t.staticContext)) return null;
                        var n = t.history.block;
                        return o.createElement(b, {
                            onMount: function (t) {
                                t.release = n(e);
                            },
                            onUpdate: function (t, r) {
                                r.message !== e && (t.release(), (t.release = n(e)));
                            },
                            onUnmount: function (t) {
                                t.release();
                            },
                            message: e,
                        });
                    });
                }
                var C = {},
                    x = 1e4,
                    R = 0;
                function E(t, e) {
                    return (
                        void 0 === t && (t = "/"),
                        void 0 === e && (e = {}),
                        "/" === t
                            ? t
                            : (function (t) {
                                  if (C[t]) return C[t];
                                  var e = l().compile(t);
                                  return R < x && ((C[t] = e), R++), e;
                              })(t)(e, { pretty: !0 })
                    );
                }
                function S(t) {
                    var e = t.computedMatch,
                        n = t.to,
                        r = t.push,
                        a = void 0 !== r && r;
                    return o.createElement(v.Consumer, null, function (t) {
                        t || (0, u.default)(!1);
                        var r = t.history,
                            c = t.staticContext,
                            l = a ? r.push : r.replace,
                            p = (0, i.createLocation)(e ? ("string" == typeof n ? E(n, e.params) : (0, s.Z)({}, n, { pathname: E(n.pathname, e.params) })) : n);
                        return c
                            ? (l(p), null)
                            : o.createElement(b, {
                                  onMount: function () {
                                      l(p);
                                  },
                                  onUpdate: function (t, e) {
                                      var n = (0, i.createLocation)(e.to);
                                      (0, i.locationsAreEqual)(n, (0, s.Z)({}, p, { key: n.key })) || l(p);
                                  },
                                  to: n,
                              });
                    });
                }
                var k = {},
                    M = 1e4,
                    P = 0;
                function L(t, e) {
                    void 0 === e && (e = {}), ("string" == typeof e || Array.isArray(e)) && (e = { path: e });
                    var n = e,
                        r = n.path,
                        o = n.exact,
                        i = void 0 !== o && o,
                        a = n.strict,
                        u = void 0 !== a && a,
                        s = n.sensitive,
                        c = void 0 !== s && s;
                    return [].concat(r).reduce(function (e, n) {
                        if (!n && "" !== n) return null;
                        if (e) return e;
                        var r = (function (t, e) {
                                var n = "" + e.end + e.strict + e.sensitive,
                                    r = k[n] || (k[n] = {});
                                if (r[t]) return r[t];
                                var o = [],
                                    i = { regexp: l()(t, o, e), keys: o };
                                return P < M && ((r[t] = i), P++), i;
                            })(n, { end: i, strict: u, sensitive: c }),
                            o = r.regexp,
                            a = r.keys,
                            s = o.exec(t);
                        if (!s) return null;
                        var p = s[0],
                            f = s.slice(1),
                            h = t === p;
                        return i && !h
                            ? null
                            : {
                                  path: n,
                                  url: "/" === n && "" === p ? "/" : p,
                                  isExact: h,
                                  params: a.reduce(function (t, e, n) {
                                      return (t[e.name] = f[n]), t;
                                  }, {}),
                              };
                    }, null);
                }
                var O = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    return (
                        (0, r.Z)(e, t),
                        (e.prototype.render = function () {
                            var t = this;
                            return o.createElement(v.Consumer, null, function (e) {
                                e || (0, u.default)(!1);
                                var n = t.props.location || e.location,
                                    r = t.props.computedMatch ? t.props.computedMatch : t.props.path ? L(n.pathname, t.props) : e.match,
                                    i = (0, s.Z)({}, e, { location: n, match: r }),
                                    a = t.props,
                                    c = a.children,
                                    l = a.component,
                                    p = a.render;
                                return Array.isArray(c) && 0 === c.length && (c = null), o.createElement(v.Provider, { value: i }, i.match ? (c ? ("function" == typeof c ? c(i) : c) : l ? o.createElement(l, i) : p ? p(i) : null) : "function" == typeof c ? c(i) : null);
                            });
                        }),
                        e
                    );
                })(o.Component);
                function z(t) {
                    return "/" === t.charAt(0) ? t : "/" + t;
                }
                function H(t, e) {
                    if (!t) return e;
                    var n = z(t);
                    return 0 !== e.pathname.indexOf(n) ? e : (0, s.Z)({}, e, { pathname: e.pathname.substr(n.length) });
                }
                function $(t) {
                    return "string" == typeof t ? t : (0, i.createPath)(t);
                }
                function Z(t) {
                    return function () {
                        (0, u.default)(!1);
                    };
                }
                function j() {}
                var D = (function (t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (
                            ((e = t.call.apply(t, [this].concat(r)) || this).handlePush = function (t) {
                                return e.navigateTo(t, "PUSH");
                            }),
                            (e.handleReplace = function (t) {
                                return e.navigateTo(t, "REPLACE");
                            }),
                            (e.handleListen = function () {
                                return j;
                            }),
                            (e.handleBlock = function () {
                                return j;
                            }),
                            e
                        );
                    }
                    (0, r.Z)(e, t);
                    var n = e.prototype;
                    return (
                        (n.navigateTo = function (t, e) {
                            var n = this.props,
                                r = n.basename,
                                o = void 0 === r ? "" : r,
                                a = n.context,
                                u = void 0 === a ? {} : a;
                            (u.action = e),
                                (u.location = (function (t, e) {
                                    return t ? (0, s.Z)({}, e, { pathname: z(t) + e.pathname }) : e;
                                })(o, (0, i.createLocation)(t))),
                                (u.url = $(u.location));
                        }),
                        (n.render = function () {
                            var t = this.props,
                                e = t.basename,
                                n = void 0 === e ? "" : e,
                                r = t.context,
                                a = void 0 === r ? {} : r,
                                u = t.location,
                                c = void 0 === u ? "/" : u,
                                l = (0, p.Z)(t, ["basename", "context", "location"]),
                                f = {
                                    createHref: function (t) {
                                        return z(n + $(t));
                                    },
                                    action: "POP",
                                    location: H(n, (0, i.createLocation)(c)),
                                    push: this.handlePush,
                                    replace: this.handleReplace,
                                    go: Z(),
                                    goBack: Z(),
                                    goForward: Z(),
                                    listen: this.handleListen,
                                    block: this.handleBlock,
                                };
                            return o.createElement(_, (0, s.Z)({}, l, { history: f, staticContext: a }));
                        }),
                        e
                    );
                })(o.Component);
                var F = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    return (
                        (0, r.Z)(e, t),
                        (e.prototype.render = function () {
                            var t = this;
                            return o.createElement(v.Consumer, null, function (e) {
                                e || (0, u.default)(!1);
                                var n,
                                    r,
                                    i = t.props.location || e.location;
                                return (
                                    o.Children.forEach(t.props.children, function (t) {
                                        if (null == r && o.isValidElement(t)) {
                                            n = t;
                                            var a = t.props.path || t.props.from;
                                            r = a ? L(i.pathname, (0, s.Z)({}, t.props, { path: a })) : e.match;
                                        }
                                    }),
                                    r ? o.cloneElement(n, { location: i, computedMatch: r }) : null
                                );
                            });
                        }),
                        e
                    );
                })(o.Component);
                function U(t) {
                    var e = "withRouter(" + (t.displayName || t.name) + ")",
                        n = function (e) {
                            var n = e.wrappedComponentRef,
                                r = (0, p.Z)(e, ["wrappedComponentRef"]);
                            return o.createElement(v.Consumer, null, function (e) {
                                return e || (0, u.default)(!1), o.createElement(t, (0, s.Z)({}, r, e, { ref: n }));
                            });
                        };
                    return (n.displayName = e), (n.WrappedComponent = t), h()(n, t);
                }
                var A = o.useContext;
                function I() {
                    return A(m);
                }
                function T() {
                    return A(v).location;
                }
                function N() {
                    var t = A(v).match;
                    return t ? t.params : {};
                }
                function V(t) {
                    var e = T(),
                        n = A(v).match;
                    return t ? L(e.pathname, t) : n;
                }
            },
            803243: (t, e, n) => {
                n.d(e, { Z: () => _ });
                var r = n(807896),
                    o = n(231461),
                    i = n(580753),
                    a = n(981665),
                    u = n(202784),
                    s = !!document.documentElement.currentStyle,
                    c = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0" },
                    l = ["letter-spacing", "line-height", "font-family", "font-weight", "font-size", "font-style", "tab-size", "text-rendering", "text-transform", "width", "text-indent", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "box-sizing"],
                    p = {},
                    f = document.createElement("textarea"),
                    h = function (t) {
                        Object.keys(c).forEach(function (e) {
                            t.style.setProperty(e, c[e], "important");
                        });
                    };
                function d(t, e, n, r, o) {
                    void 0 === n && (n = !1), void 0 === r && (r = null), void 0 === o && (o = null), null === f.parentNode && document.body.appendChild(f);
                    var i = (function (t, e, n) {
                        void 0 === n && (n = !1);
                        if (n && p[e]) return p[e];
                        var r = window.getComputedStyle(t);
                        if (null === r) return null;
                        var o = l.reduce(function (t, e) {
                                return (t[e] = r.getPropertyValue(e)), t;
                            }, {}),
                            i = o["box-sizing"];
                        if ("" === i) return null;
                        s && "border-box" === i && (o.width = parseFloat(o.width) + parseFloat(r["border-right-width"]) + parseFloat(r["border-left-width"]) + parseFloat(r["padding-right"]) + parseFloat(r["padding-left"]) + "px");
                        var a = parseFloat(o["padding-bottom"]) + parseFloat(o["padding-top"]),
                            u = parseFloat(o["border-bottom-width"]) + parseFloat(o["border-top-width"]),
                            c = { sizingStyle: o, paddingSize: a, borderSize: u, boxSizing: i };
                        n && (p[e] = c);
                        return c;
                    })(t, e, n);
                    if (null === i) return null;
                    var a = i.paddingSize,
                        u = i.borderSize,
                        c = i.boxSizing,
                        d = i.sizingStyle;
                    Object.keys(d).forEach(function (t) {
                        f.style[t] = d[t];
                    }),
                        h(f),
                        (f.value = t.value || t.placeholder || "x");
                    var m = -1 / 0,
                        y = 1 / 0,
                        v = f.scrollHeight;
                    "border-box" === c ? (v += u) : "content-box" === c && (v -= a), (f.value = "x");
                    var _ = f.scrollHeight - a,
                        g = Math.floor(v / _);
                    return null !== r && ((m = _ * r), "border-box" === c && (m = m + a + u), (v = Math.max(m, v))), null !== o && ((y = _ * o), "border-box" === c && (y = y + a + u), (v = Math.min(y, v))), { height: v, minHeight: m, maxHeight: y, rowCount: Math.floor(v / _), valueRowCount: g };
                }
                f.setAttribute("tab-index", "-1"), f.setAttribute("aria-hidden", "true"), h(f);
                var m = function () {},
                    y = 0,
                    v = (function (t) {
                        function e(e) {
                            var n;
                            return (
                                ((n = t.call(this, e) || this)._onRef = function (t) {
                                    n._ref = t;
                                    var e = n.props.inputRef;
                                    "function" != typeof e ? (e.current = t) : e(t);
                                }),
                                (n._onChange = function (t) {
                                    n._controlled || n._resizeComponent(), n.props.onChange(t, (0, i.Z)(n));
                                }),
                                (n._resizeComponent = function (t) {
                                    void 0 === t && (t = m);
                                    var e = d(n._ref, n._uid, n.props.useCacheForDOMMeasurements, n.props.minRows, n.props.maxRows);
                                    if (null !== e) {
                                        var r = e.height,
                                            o = e.minHeight,
                                            i = e.maxHeight,
                                            a = e.rowCount,
                                            u = e.valueRowCount;
                                        (n.rowCount = a), (n.valueRowCount = u), n.state.height === r && n.state.minHeight === o && n.state.maxHeight === i ? t() : n.setState({ height: r, minHeight: o, maxHeight: i }, t);
                                    } else t();
                                }),
                                (n.state = { height: (e.style && e.style.height) || 0, minHeight: -1 / 0, maxHeight: 1 / 0 }),
                                (n._uid = y++),
                                (n._controlled = void 0 !== e.value),
                                (n._resizeLock = !1),
                                n
                            );
                        }
                        (0, a.Z)(e, t);
                        var n = e.prototype;
                        return (
                            (n.render = function () {
                                var t = this.props,
                                    e = (t.inputRef, t.maxRows, t.minRows, t.onHeightChange, t.useCacheForDOMMeasurements, (0, o.Z)(t, ["inputRef", "maxRows", "minRows", "onHeightChange", "useCacheForDOMMeasurements"]));
                                return (e.style = (0, r.Z)({}, e.style, { height: this.state.height })), Math.max(e.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height && (e.style.overflow = "hidden"), (0, u.createElement)("textarea", (0, r.Z)({}, e, { onChange: this._onChange, ref: this._onRef }));
                            }),
                            (n.componentDidMount = function () {
                                var t = this;
                                this._resizeComponent(),
                                    (this._resizeListener = function () {
                                        t._resizeLock ||
                                            ((t._resizeLock = !0),
                                            t._resizeComponent(function () {
                                                t._resizeLock = !1;
                                            }));
                                    }),
                                    window.addEventListener("resize", this._resizeListener);
                            }),
                            (n.componentDidUpdate = function (t, e) {
                                t !== this.props && this._resizeComponent(), this.state.height !== e.height && this.props.onHeightChange(this.state.height, this);
                            }),
                            (n.componentWillUnmount = function () {
                                window.removeEventListener("resize", this._resizeListener),
                                    (function (t) {
                                        delete p[t];
                                    })(this._uid);
                            }),
                            e
                        );
                    })(u.Component);
                v.defaultProps = { inputRef: m, onChange: m, onHeightChange: m, useCacheForDOMMeasurements: !1 };
                const _ = v;
            },
            811837: (t, e, n) => {
                /**
                 * @license React
                 * react-jsx-runtime.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                var r = n(202784),
                    o = Symbol.for("react.element"),
                    i = Symbol.for("react.fragment"),
                    a = Object.prototype.hasOwnProperty,
                    u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    s = { key: !0, ref: !0, __self: !0, __source: !0 };
                function c(t, e, n) {
                    var r,
                        i = {},
                        c = null,
                        l = null;
                    for (r in (void 0 !== n && (c = "" + n), void 0 !== e.key && (c = "" + e.key), void 0 !== e.ref && (l = e.ref), e)) a.call(e, r) && !s.hasOwnProperty(r) && (i[r] = e[r]);
                    if (t && t.defaultProps) for (r in (e = t.defaultProps)) void 0 === i[r] && (i[r] = e[r]);
                    return { $$typeof: o, type: t, key: c, ref: l, props: i, _owner: u.current };
                }
                (e.Fragment = i), (e.jsx = c), (e.jsxs = c);
            },
            283426: (t, e) => {
                /**
                 * @license React
                 * react.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    o = Symbol.for("react.fragment"),
                    i = Symbol.for("react.strict_mode"),
                    a = Symbol.for("react.profiler"),
                    u = Symbol.for("react.provider"),
                    s = Symbol.for("react.context"),
                    c = Symbol.for("react.forward_ref"),
                    l = Symbol.for("react.suspense"),
                    p = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    h = Symbol.iterator;
                var d = {
                        isMounted: function () {
                            return !1;
                        },
                        enqueueForceUpdate: function () {},
                        enqueueReplaceState: function () {},
                        enqueueSetState: function () {},
                    },
                    m = Object.assign,
                    y = {};
                function v(t, e, n) {
                    (this.props = t), (this.context = e), (this.refs = y), (this.updater = n || d);
                }
                function _() {}
                function g(t, e, n) {
                    (this.props = t), (this.context = e), (this.refs = y), (this.updater = n || d);
                }
                (v.prototype.isReactComponent = {}),
                    (v.prototype.setState = function (t, e) {
                        if ("object" != typeof t && "function" != typeof t && null != t) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                        this.updater.enqueueSetState(this, t, e, "setState");
                    }),
                    (v.prototype.forceUpdate = function (t) {
                        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
                    }),
                    (_.prototype = v.prototype);
                var b = (g.prototype = new _());
                (b.constructor = g), m(b, v.prototype), (b.isPureReactComponent = !0);
                var w = Array.isArray,
                    C = Object.prototype.hasOwnProperty,
                    x = { current: null },
                    R = { key: !0, ref: !0, __self: !0, __source: !0 };
                function E(t, e, r) {
                    var o,
                        i = {},
                        a = null,
                        u = null;
                    if (null != e) for (o in (void 0 !== e.ref && (u = e.ref), void 0 !== e.key && (a = "" + e.key), e)) C.call(e, o) && !R.hasOwnProperty(o) && (i[o] = e[o]);
                    var s = arguments.length - 2;
                    if (1 === s) i.children = r;
                    else if (1 < s) {
                        for (var c = Array(s), l = 0; l < s; l++) c[l] = arguments[l + 2];
                        i.children = c;
                    }
                    if (t && t.defaultProps) for (o in (s = t.defaultProps)) void 0 === i[o] && (i[o] = s[o]);
                    return { $$typeof: n, type: t, key: a, ref: u, props: i, _owner: x.current };
                }
                function S(t) {
                    return "object" == typeof t && null !== t && t.$$typeof === n;
                }
                var k = /\/+/g;
                function M(t, e) {
                    return "object" == typeof t && null !== t && null != t.key
                        ? (function (t) {
                              var e = { "=": "=0", ":": "=2" };
                              return (
                                  "$" +
                                  t.replace(/[=:]/g, function (t) {
                                      return e[t];
                                  })
                              );
                          })("" + t.key)
                        : e.toString(36);
                }
                function P(t, e, o, i, a) {
                    var u = typeof t;
                    ("undefined" !== u && "boolean" !== u) || (t = null);
                    var s = !1;
                    if (null === t) s = !0;
                    else
                        switch (u) {
                            case "string":
                            case "number":
                                s = !0;
                                break;
                            case "object":
                                switch (t.$$typeof) {
                                    case n:
                                    case r:
                                        s = !0;
                                }
                        }
                    if (s)
                        return (
                            (a = a((s = t))),
                            (t = "" === i ? "." + M(s, 0) : i),
                            w(a)
                                ? ((o = ""),
                                  null != t && (o = t.replace(k, "$&/") + "/"),
                                  P(a, e, o, "", function (t) {
                                      return t;
                                  }))
                                : null != a &&
                                  (S(a) &&
                                      (a = (function (t, e) {
                                          return { $$typeof: n, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
                                      })(a, o + (!a.key || (s && s.key === a.key) ? "" : ("" + a.key).replace(k, "$&/") + "/") + t)),
                                  e.push(a)),
                            1
                        );
                    if (((s = 0), (i = "" === i ? "." : i + ":"), w(t)))
                        for (var c = 0; c < t.length; c++) {
                            var l = i + M((u = t[c]), c);
                            s += P(u, e, o, l, a);
                        }
                    else if (
                        ((l = (function (t) {
                            return null === t || "object" != typeof t ? null : "function" == typeof (t = (h && t[h]) || t["@@iterator"]) ? t : null;
                        })(t)),
                        "function" == typeof l)
                    )
                        for (t = l.call(t), c = 0; !(u = t.next()).done; ) s += P((u = u.value), e, o, (l = i + M(u, c++)), a);
                    else if ("object" === u) throw ((e = String(t)), Error("Objects are not valid as a React child (found: " + ("[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."));
                    return s;
                }
                function L(t, e, n) {
                    if (null == t) return t;
                    var r = [],
                        o = 0;
                    return (
                        P(t, r, "", "", function (t) {
                            return e.call(n, t, o++);
                        }),
                        r
                    );
                }
                function O(t) {
                    if (-1 === t._status) {
                        var e = t._result;
                        (e = e()).then(
                            function (e) {
                                (0 !== t._status && -1 !== t._status) || ((t._status = 1), (t._result = e));
                            },
                            function (e) {
                                (0 !== t._status && -1 !== t._status) || ((t._status = 2), (t._result = e));
                            },
                        ),
                            -1 === t._status && ((t._status = 0), (t._result = e));
                    }
                    if (1 === t._status) return t._result.default;
                    throw t._result;
                }
                var z = { current: null },
                    H = { transition: null },
                    $ = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: H, ReactCurrentOwner: x };
                (e.Children = {
                    map: L,
                    forEach: function (t, e, n) {
                        L(
                            t,
                            function () {
                                e.apply(this, arguments);
                            },
                            n,
                        );
                    },
                    count: function (t) {
                        var e = 0;
                        return (
                            L(t, function () {
                                e++;
                            }),
                            e
                        );
                    },
                    toArray: function (t) {
                        return (
                            L(t, function (t) {
                                return t;
                            }) || []
                        );
                    },
                    only: function (t) {
                        if (!S(t)) throw Error("React.Children.only expected to receive a single React element child.");
                        return t;
                    },
                }),
                    (e.Component = v),
                    (e.Fragment = o),
                    (e.Profiler = a),
                    (e.PureComponent = g),
                    (e.StrictMode = i),
                    (e.Suspense = l),
                    (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
                    (e.cloneElement = function (t, e, r) {
                        if (null == t) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
                        var o = m({}, t.props),
                            i = t.key,
                            a = t.ref,
                            u = t._owner;
                        if (null != e) {
                            if ((void 0 !== e.ref && ((a = e.ref), (u = x.current)), void 0 !== e.key && (i = "" + e.key), t.type && t.type.defaultProps)) var s = t.type.defaultProps;
                            for (c in e) C.call(e, c) && !R.hasOwnProperty(c) && (o[c] = void 0 === e[c] && void 0 !== s ? s[c] : e[c]);
                        }
                        var c = arguments.length - 2;
                        if (1 === c) o.children = r;
                        else if (1 < c) {
                            s = Array(c);
                            for (var l = 0; l < c; l++) s[l] = arguments[l + 2];
                            o.children = s;
                        }
                        return { $$typeof: n, type: t.type, key: i, ref: a, props: o, _owner: u };
                    }),
                    (e.createContext = function (t) {
                        return ((t = { $$typeof: s, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: u, _context: t }), (t.Consumer = t);
                    }),
                    (e.createElement = E),
                    (e.createFactory = function (t) {
                        var e = E.bind(null, t);
                        return (e.type = t), e;
                    }),
                    (e.createRef = function () {
                        return { current: null };
                    }),
                    (e.forwardRef = function (t) {
                        return { $$typeof: c, render: t };
                    }),
                    (e.isValidElement = S),
                    (e.lazy = function (t) {
                        return { $$typeof: f, _payload: { _status: -1, _result: t }, _init: O };
                    }),
                    (e.memo = function (t, e) {
                        return { $$typeof: p, type: t, compare: void 0 === e ? null : e };
                    }),
                    (e.startTransition = function (t) {
                        var e = H.transition;
                        H.transition = {};
                        try {
                            t();
                        } finally {
                            H.transition = e;
                        }
                    }),
                    (e.unstable_act = function () {
                        throw Error("act(...) is not supported in production builds of React.");
                    }),
                    (e.useCallback = function (t, e) {
                        return z.current.useCallback(t, e);
                    }),
                    (e.useContext = function (t) {
                        return z.current.useContext(t);
                    }),
                    (e.useDebugValue = function () {}),
                    (e.useDeferredValue = function (t) {
                        return z.current.useDeferredValue(t);
                    }),
                    (e.useEffect = function (t, e) {
                        return z.current.useEffect(t, e);
                    }),
                    (e.useId = function () {
                        return z.current.useId();
                    }),
                    (e.useImperativeHandle = function (t, e, n) {
                        return z.current.useImperativeHandle(t, e, n);
                    }),
                    (e.useInsertionEffect = function (t, e) {
                        return z.current.useInsertionEffect(t, e);
                    }),
                    (e.useLayoutEffect = function (t, e) {
                        return z.current.useLayoutEffect(t, e);
                    }),
                    (e.useMemo = function (t, e) {
                        return z.current.useMemo(t, e);
                    }),
                    (e.useReducer = function (t, e, n) {
                        return z.current.useReducer(t, e, n);
                    }),
                    (e.useRef = function (t) {
                        return z.current.useRef(t);
                    }),
                    (e.useState = function (t) {
                        return z.current.useState(t);
                    }),
                    (e.useSyncExternalStore = function (t, e, n) {
                        return z.current.useSyncExternalStore(t, e, n);
                    }),
                    (e.useTransition = function () {
                        return z.current.useTransition();
                    }),
                    (e.version = "18.2.0");
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-e5bca7e4.1458567a.js.map
