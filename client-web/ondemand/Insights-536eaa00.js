"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-536eaa00"],
    {
        595133: (e, n, r) => {
            r.d(n, { h: () => s });
            var t = r(552322),
                a = r(941204),
                l = r(796309),
                i = r(430962);
            const s = ({ Icon: e, beta: n = !0, children: r, className: s, title: o }) => {
                const { business: c } = (0, i.M1)();
                return (0, t.jsxs)("div", { className: (0, l.cn)("hidden items-center md:flex md:justify-between max-md:[&:has(>:only-child)]:justify-center max-md:[&:not(:has(>:only-child))]:justify-between", s), children: [(0, t.jsx)("div", { children: o && (0, t.jsxs)("div", { className: "hidden items-center gap-2 md:flex", children: [e, (0, t.jsx)(a.x, { weight: "extrabold", size: "title4", children: o }), n && (0, t.jsx)("div", { className: "bg-gray-0 flex h-6 items-center gap-1 rounded border px-2", children: (0, t.jsx)(a.x, { size: "subtext3", weight: "normal", children: c.earlyBetaAccess }) })] }) }), r] });
            };
        },
        127229: (e, n, r) => {
            r.r(n), r.d(n, { default: () => d });
            const t = {
                fragment: {
                    argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "limit" }), (l = { defaultValue: null, kind: "LocalArgument", name: "query" }), (i = { defaultValue: null, kind: "LocalArgument", name: "score_threshold" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "AiTrendsSearchQuery",
                    selections: [
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "raw_query", variableName: "query" },
                                    { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                                ]),
                                concreteType: "SearchQuery",
                                kind: "LinkedField",
                                name: "search_by_raw_query",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "RequiredField",
                                        field: {
                                            alias: null,
                                            args: (o = [
                                                { kind: "Variable", name: "limit", variableName: "limit" },
                                                { kind: "Variable", name: "score_threshold", variableName: "score_threshold" },
                                            ]),
                                            concreteType: "TrendSearchResult",
                                            kind: "LinkedField",
                                            name: "trend_embedding_search",
                                            plural: !0,
                                            selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "AiTrend" }], type: "AiTrend", abstractKey: null }], storageKey: null }], storageKey: null }, action: "THROW", path: "search_by_raw_query.trend_embedding_search.trend_results" }],
                                            storageKey: null,
                                        },
                                        action: "THROW",
                                        path: "search_by_raw_query.trend_embedding_search",
                                    },
                                ],
                                storageKey: null,
                            },
                            action: "THROW",
                            path: "search_by_raw_query",
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: [l, a, i],
                    kind: "Operation",
                    name: "AiTrendsSearchQuery",
                    selections: [
                        {
                            alias: null,
                            args: s,
                            concreteType: "SearchQuery",
                            kind: "LinkedField",
                            name: "search_by_raw_query",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: o,
                                    concreteType: "TrendSearchResult",
                                    kind: "LinkedField",
                                    name: "trend_embedding_search",
                                    plural: !0,
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "AiTrendResults",
                                            kind: "LinkedField",
                                            name: "trend_results",
                                            plural: !1,
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "result",
                                                    plural: !1,
                                                    selections: [
                                                        c,
                                                        {
                                                            kind: "InlineFragment",
                                                            selections: [
                                                                u,
                                                                { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                { alias: null, args: null, concreteType: "ApiImage", kind: "LinkedField", name: "thumbnail", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null }], storageKey: null },
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "AiTrendCore",
                                                                    kind: "LinkedField",
                                                                    name: "core",
                                                                    plural: !1,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "category", storageKey: null },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            type: "AiTrend",
                                                            abstractKey: null,
                                                        },
                                                    ],
                                                    storageKey: null,
                                                },
                                                u,
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                u,
                            ],
                            storageKey: null,
                        },
                    ],
                },
                params: { id: "iwftVNV6XWcIat1y9m2n8Q", metadata: {}, name: "AiTrendsSearchQuery", operationKind: "query", text: null },
            };
            var a, l, i, s, o, c, u;
            t.hash = "3c3d851b96124d43feddc0c866686ed8";
            const d = t;
        },
        844823: (e, n, r) => {
            r.d(n, { f: () => c });
            var t = r(552322),
                a = r(941204),
                l = r(889906),
                i = r(430962),
                s = r(821730);
            const o = r(127229),
                c = ({ limit: e, query: n, scoreThreshold: r }) => {
                    const c = (0, l.useLazyLoadQuery)(o, { limit: e, query: n, score_threshold: r }),
                        { business: u } = (0, i.M1)(),
                        d = (c.search_by_raw_query.trend_embedding_search || [])
                            .map((e) => {
                                const n = e.trend_results.result;
                                return n && "AiTrend" === n.__typename ? n : null;
                            })
                            .filter((e) => null !== e);
                    return (0, t.jsx)("div", { className: "max-md:hide-scrollbar flex flex-col gap-4 overflow-y-scroll max-md:p-2", children: d.length > 0 ? d.map((e) => (0, t.jsx)(s.A, { aiTrend: e }, e.id)) : (0, t.jsx)(a.x, { color: "gray700", size: "subtext1", children: u.radar.noTrendsAvailable }) });
                };
        },
        89613: (e, n, r) => {
            function t(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e;
            }
            var a = r(107267),
                l = t(r(202784)),
                i = r(526702);
            r(213980), r(355518);
            var s = t(r(161898));
            function o() {
                return (o =
                    Object.assign ||
                    function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var r = arguments[n];
                            for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function c(e, n) {
                (e.prototype = Object.create(n.prototype)), ((e.prototype.constructor = e).__proto__ = n);
            }
            function u(e, n) {
                if (null == e) return {};
                var r,
                    t,
                    a = {},
                    l = Object.keys(e);
                for (t = 0; t < l.length; t++) (r = l[t]), 0 <= n.indexOf(r) || (a[r] = e[r]);
                return a;
            }
            var d = (function (e) {
                    function n() {
                        for (var n, r = arguments.length, t = new Array(r), a = 0; a < r; a++) t[a] = arguments[a];
                        return ((n = e.call.apply(e, [this].concat(t)) || this).history = i.createBrowserHistory(n.props)), n;
                    }
                    return (
                        c(n, e),
                        (n.prototype.render = function () {
                            return l.createElement(a.Router, { history: this.history, children: this.props.children });
                        }),
                        n
                    );
                })(l.Component),
                y = (function (e) {
                    function n() {
                        for (var n, r = arguments.length, t = new Array(r), a = 0; a < r; a++) t[a] = arguments[a];
                        return ((n = e.call.apply(e, [this].concat(t)) || this).history = i.createHashHistory(n.props)), n;
                    }
                    return (
                        c(n, e),
                        (n.prototype.render = function () {
                            return l.createElement(a.Router, { history: this.history, children: this.props.children });
                        }),
                        n
                    );
                })(l.Component),
                m = function (e, n) {
                    return "function" == typeof e ? e(n) : e;
                },
                f = function (e, n) {
                    return "string" == typeof e ? i.createLocation(e, null, null, n) : e;
                },
                p = function (e) {
                    return e;
                },
                h = l.forwardRef;
            void 0 === h && (h = p);
            var g = h(function (e, n) {
                    var r = e.innerRef,
                        t = e.navigate,
                        a = e.onClick,
                        i = u(e, ["innerRef", "navigate", "onClick"]),
                        s = i.target,
                        c = o({}, i, {
                            onClick: function (e) {
                                try {
                                    a && a(e);
                                } catch (n) {
                                    throw (e.preventDefault(), n);
                                }
                                e.defaultPrevented ||
                                    0 !== e.button ||
                                    (s && "_self" !== s) ||
                                    (function (e) {
                                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                                    })(e) ||
                                    (e.preventDefault(), t());
                            },
                        });
                    return (c.ref = (p !== h && n) || r), l.createElement("a", c);
                }),
                _ = h(function (e, n) {
                    var r = e.component,
                        t = void 0 === r ? g : r,
                        i = e.replace,
                        c = e.to,
                        d = e.innerRef,
                        y = u(e, ["component", "replace", "to", "innerRef"]);
                    return l.createElement(a.__RouterContext.Consumer, null, function (e) {
                        e || s(!1);
                        var r = e.history,
                            a = f(m(c, e.location), e.location),
                            u = a ? r.createHref(a) : "",
                            g = o({}, y, {
                                href: u,
                                navigate: function () {
                                    var n = m(c, e.location);
                                    (i ? r.replace : r.push)(n);
                                },
                            });
                        return p !== h ? (g.ref = n || d) : (g.innerRef = d), l.createElement(t, g);
                    });
                }),
                v = function (e) {
                    return e;
                },
                b = l.forwardRef;
            void 0 === b && (b = v);
            var k = b(function (e, n) {
                var r = e["aria-current"],
                    t = void 0 === r ? "page" : r,
                    i = e.activeClassName,
                    c = void 0 === i ? "active" : i,
                    d = e.activeStyle,
                    y = e.className,
                    p = e.exact,
                    h = e.isActive,
                    g = e.location,
                    k = e.sensitive,
                    w = e.strict,
                    x = e.style,
                    T = e.to,
                    F = e.innerRef,
                    K = u(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
                return l.createElement(a.__RouterContext.Consumer, null, function (e) {
                    e || s(!1);
                    var r = g || e.location,
                        i = f(m(T, r), r),
                        u = i.pathname,
                        R = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                        j = R ? a.matchPath(r.pathname, { path: R, exact: p, sensitive: k, strict: w }) : null,
                        A = !!(h ? h(j, r) : j),
                        S = A
                            ? (function () {
                                  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                  return n
                                      .filter(function (e) {
                                          return e;
                                      })
                                      .join(" ");
                              })(y, c)
                            : y,
                        L = A ? o({}, x, {}, d) : x,
                        N = o({ "aria-current": (A && t) || null, className: S, style: L, to: i }, K);
                    return v !== b ? (N.ref = n || F) : (N.innerRef = F), l.createElement(_, N);
                });
            });
            Object.defineProperty(n, "UO", {
                enumerable: !0,
                get: function () {
                    return a.useParams;
                },
            });
        },
        355518: (e, n, r) => {
            r.r(n), r.d(n, { default: () => t });
            const t = function (e, n) {};
        },
        595873: (e, n, r) => {
            function t(e, n) {
                return e instanceof Date ? new e.constructor(n) : new Date(n);
            }
            r.d(n, { L: () => t });
        },
        947727: (e, n, r) => {
            r.d(n, { T: () => a });
            var t = r(150729);
            function a(e) {
                const n = (0, t.Q)(e);
                return n.setMinutes(59, 59, 999), n;
            }
        },
        150729: (e, n, r) => {
            function t(e) {
                const n = Object.prototype.toString.call(e);
                return e instanceof Date || ("object" == typeof e && "[object Date]" === n) ? new e.constructor(+e) : "number" == typeof e || "[object Number]" === n || "string" == typeof e || "[object String]" === n ? new Date(e) : new Date(NaN);
            }
            r.d(n, { Q: () => t });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-536eaa00.2d6a097a.js.map
