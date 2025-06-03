"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Communities~ondemand.SettingsRevamp"],
    {
        947135: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(242454),
                i = n(190286);
            class a extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: a, confirmationSheetHeadline: l, confirmationSheetText: s, label: c } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(o.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? r.createElement(i.Z, { confirmButtonLabel: n, confirmButtonType: a, headline: l, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: s }) : null);
                }
            }
            a.defaultProps = { color: "red500", align: "center" };
        },
        349035: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(272175);
            const i = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), r.createElement(o.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        92235: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                o = n(325686),
                i = n(58881),
                a = n(392237),
                l = n(731708),
                s = n(530525),
                c = n(439592),
                d = n(530732),
                u = n(725516);
            const h = "upsell-card",
                f = (e) => {
                    const { Icon: t, decoration: n, header: f, iconColor: g, imageUrl: m, link: y, onClick: v, primaryText: x, secondaryText: b } = e,
                        w = (0, u.z)(),
                        Z = r.useCallback(() => {
                            w.scribeAction("click"), v && v();
                        }, [w, v]),
                        C = i.Z.generate({ backgroundColor: a.default.theme.colors.transparent, color: a.default.theme.colors.gray300 }),
                        S = () => r.createElement(o.Z, { style: p.header }, t && r.createElement(t, { style: [p.icon, g && { color: a.default.theme.colors[g] }], testID: `${h}-icon` }), r.createElement(l.ZP, { size: "subtext1" }, f)),
                        E = () => r.createElement(r.Fragment, null, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, x), b && r.createElement(l.ZP, { color: "gray700" }, b)),
                        k = () => r.createElement(o.Z, { style: p.decoration, testID: `${h}-decoration` }, n),
                        O = () => !!m && r.createElement(o.Z, { style: p.decoration, testID: `${h}-img` }, r.createElement(s.Z, { "aria-label": "", aspectMode: c.Z.exact(1), image: { url: m, width: 88, height: 88 } }));
                    return r.createElement(d.Z, { interactiveStyles: C, link: y, onClick: Z, style: p.root }, r.createElement(o.Z, { style: p.content }, r.createElement(S, { Icon: t, header: f, iconColor: g }), r.createElement(E, { primaryText: x, secondaryText: b })), n ? r.createElement(k, { decoration: n }) : r.createElement(O, { imageUrl: m }));
                },
                p = a.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, content: { flexShrink: 1 }, header: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space12 }, icon: { height: e.spaces.space20, width: e.spaces.space20, marginEnd: e.spaces.space8 }, decoration: { width: `calc(${e.spaces.space80} + ${e.spaces.space8})`, marginStart: e.spaces.space16 } })),
                g = r.memo(f);
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                o = n(420740),
                i = n(108362),
                a = n(731708),
                l = n(154003),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(349035);
            const h = "error-detail",
                f = d().e49537c2,
                p = d().a9ae1e78;
            class g extends r.PureComponent {
                render() {
                    return r.createElement(o.Z, { testID: h }, r.createElement(u.Z, null), r.createElement(i.Z, { style: m.root }, r.createElement(a.ZP, { align: "center", color: "gray700", style: m.retryText }, f), r.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const m = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        301410: (e, t, n) => {
            n.d(t, { i: () => p.ZP, z: () => v });
            var r = n(202784),
                o = n(928123),
                i = n.n(o),
                a = n(72845),
                l = n.n(a),
                s = n(57074),
                c = n.n(s),
                d = n(516951),
                u = n(88656),
                h = n(71620),
                f = n(163889),
                p = n(312771);
            const g = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: d.Z });
            class m extends r.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, f.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const y = ({ query: e, queryRef: t, render: n }) => {
                    const r = i()(e, t);
                    return n({ fetchStatus: p.ZP.LOADED, data: r, error: null, retry: d.Z });
                },
                v = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: o, variables: i }) {
                        const [a, s] = l()(e),
                            d = (0, h.n7)(t.errorConfig.context),
                            u = c()(i),
                            f = r.useCallback(() => {
                                s(u, { fetchPolicy: "network-only" });
                            }, [s, u]);
                        return (
                            r.useLayoutEffect(() => {
                                s(u, { fetchPolicy: n });
                            }, [n, s, u]),
                            a
                                ? r.createElement(
                                      r.Suspense,
                                      { fallback: r.createElement(g, { render: o }) },
                                      r.createElement(m, { errorHandler: d(t.errorConfig.options || {}), key: a.fetchKey, retry: f }, (t, n) => (t ? o({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: n }) : r.createElement(y, { query: e, queryRef: a, render: o }))),
                                  )
                                : null
                        );
                    };
        },
        466441: (e, t, n) => {
            n.r(t), n.d(t, { NotFoundScreen: () => x, default: () => w });
            n(571372);
            var r = n(202784),
                o = n(386802),
                i = n(108362),
                a = n(392237),
                l = n(111677),
                s = n.n(l),
                c = n(187669),
                d = n(449067),
                u = n(38293),
                h = n(56851),
                f = n(652904),
                p = n(952793),
                g = n(163889),
                m = n(725516);
            const y = s().ba929da8,
                v = s().d203e242;
            function x(e) {
                const { splat: t } = e.match.params,
                    { isModal: n } = r.useContext(o.Z),
                    a = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        a && t && (0, g.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    r.createElement(f.Z, null, r.createElement(d.Z.Configure, { backLocation: "/", documentTitle: y, title: v }), r.createElement(i.Z, { style: n && b.modal }, r.createElement(h.Z, null)), r.createElement(u.Z, { title: y, withMeta: !1 }))
                );
            }
            const b = a.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, m.Z)(x, { page: "not_found" });
        },
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(807896),
                o = n(202784),
                i = n(325686),
                a = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const h = l.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(i.Z, { style: d.container }, o.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: h, style: d.root }), o.createElement(a.ZP, { align: e, color: t }, n)));
                };
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        716042: (e, t, n) => {
            n.d(t, { JN: () => Q, W8: () => ne, JV: () => z });
            var r = n(807896);
            var o = n(759147);
            function i(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != n) {
                            var r,
                                o,
                                i,
                                a,
                                l = [],
                                s = !0,
                                c = !1;
                            try {
                                if (((i = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for (; !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
                            } catch (e) {
                                (c = !0), (o = e);
                            } finally {
                                try {
                                    if (!s && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return l;
                        }
                    })(e, t) ||
                    (0, o.Z)(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var a = n(256666);
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? Object(arguments[t]) : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        r.push.apply(
                            r,
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        ),
                        r.forEach(function (t) {
                            (0, a.Z)(e, t, n[t]);
                        });
                }
                return e;
            }
            var s = n(709249),
                c = n(887371),
                d = n(411987),
                u = n(695058),
                h = n(545754),
                f = n(580753),
                p = n(202784),
                g = n(928316),
                m = n(647677),
                y = n.n(m),
                v = n(238777),
                x = n(213980),
                b = n.n(x),
                w = (function () {
                    function e() {
                        (0, s.Z)(this, e), (0, a.Z)(this, "refs", {});
                    }
                    return (
                        (0, c.Z)(e, [
                            {
                                key: "add",
                                value: function (e, t) {
                                    this.refs[e] || (this.refs[e] = []), this.refs[e].push(t);
                                },
                            },
                            {
                                key: "remove",
                                value: function (e, t) {
                                    var n = this.getIndex(e, t);
                                    -1 !== n && this.refs[e].splice(n, 1);
                                },
                            },
                            {
                                key: "isActive",
                                value: function () {
                                    return this.active;
                                },
                            },
                            {
                                key: "getActive",
                                value: function () {
                                    var e = this;
                                    return this.refs[this.active.collection].find(function (t) {
                                        return t.node.sortableInfo.index == e.active.index;
                                    });
                                },
                            },
                            {
                                key: "getIndex",
                                value: function (e, t) {
                                    return this.refs[e].indexOf(t);
                                },
                            },
                            {
                                key: "getOrderedRefs",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
                                    return this.refs[e].sort(Z);
                                },
                            },
                        ]),
                        e
                    );
                })();
            function Z(e, t) {
                return e.node.sortableInfo.index - t.node.sortableInfo.index;
            }
            function C(e, t) {
                return Object.keys(e).reduce(function (n, r) {
                    return -1 === t.indexOf(r) && (n[r] = e[r]), n;
                }, {});
            }
            var S = { end: ["touchend", "touchcancel", "mouseup"], move: ["touchmove", "mousemove"], start: ["touchstart", "mousedown"] },
                E = (function () {
                    if ("undefined" == typeof window || "undefined" == typeof document) return "";
                    var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
                        t = (Array.prototype.slice
                            .call(e)
                            .join("")
                            .match(/-(moz|webkit|ms)-/) ||
                            ("" === e.OLink && ["", "o"]))[1];
                    return "ms" === t ? "ms" : t && t.length ? t[0].toUpperCase() + t.substr(1) : "";
                })();
            function k(e, t) {
                Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n];
                });
            }
            function O(e, t) {
                e.style["".concat(E, "Transform")] = null == t ? "" : "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)");
            }
            function T(e, t) {
                e.style["".concat(E, "TransitionDuration")] = null == t ? "" : "".concat(t, "ms");
            }
            function I(e, t) {
                for (; e; ) {
                    if (t(e)) return e;
                    e = e.parentNode;
                }
                return null;
            }
            function D(e, t, n) {
                return Math.max(e, Math.min(n, t));
            }
            function R(e) {
                return "px" === e.substr(-2) ? parseFloat(e) : 0;
            }
            function P(e, t) {
                var n = t.displayName || t.name;
                return n ? "".concat(e, "(").concat(n, ")") : e;
            }
            function N(e, t) {
                var n = e.getBoundingClientRect();
                return { top: n.top + t.top, left: n.left + t.left };
            }
            function A(e) {
                return e.touches && e.touches.length ? { x: e.touches[0].pageX, y: e.touches[0].pageY } : e.changedTouches && e.changedTouches.length ? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY } : { x: e.pageX, y: e.pageY };
            }
            function L(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { left: 0, top: 0 };
                if (e) {
                    var r = { left: n.left + e.offsetLeft, top: n.top + e.offsetTop };
                    return e.parentNode === t ? r : L(e.parentNode, t, r);
                }
            }
            function M(e) {
                var t = e.lockOffset,
                    n = e.width,
                    r = e.height,
                    o = t,
                    i = t,
                    a = "px";
                if ("string" == typeof t) {
                    var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
                    y()(null !== l, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', t), (o = parseFloat(t)), (i = parseFloat(t)), (a = l[1]);
                }
                return y()(isFinite(o) && isFinite(i), "lockOffset value should be a finite. Given %s", t), "%" === a && ((o = (o * n) / 100), (i = (i * r) / 100)), { x: o, y: i };
            }
            function W(e) {
                return e instanceof HTMLElement
                    ? (function (e) {
                          var t = window.getComputedStyle(e),
                              n = /(auto|scroll)/;
                          return ["overflow", "overflowX", "overflowY"].find(function (e) {
                              return n.test(t[e]);
                          });
                      })(e)
                        ? e
                        : W(e.parentNode)
                    : null;
            }
            var j = 27,
                H = 32,
                _ = 37,
                B = 38,
                K = 39,
                G = 40,
                F = { Anchor: "A", Button: "BUTTON", Canvas: "CANVAS", Input: "INPUT", Option: "OPTION", Textarea: "TEXTAREA", Select: "SELECT" };
            function z(e) {
                var t,
                    n,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 };
                return (
                    (n = t =
                        (function (t) {
                            function n() {
                                var e, t;
                                (0, s.Z)(this, n);
                                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                                return (t = (0, d.Z)(this, (e = (0, u.Z)(n)).call.apply(e, [this].concat(o)))), (0, a.Z)((0, f.Z)((0, f.Z)(t)), "wrappedInstance", (0, p.createRef)()), t;
                            }
                            return (
                                (0, h.Z)(n, t),
                                (0, c.Z)(n, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            (0, g.findDOMNode)(this).sortableHandle = !0;
                                        },
                                    },
                                    {
                                        key: "getWrappedInstance",
                                        value: function () {
                                            return y()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.wrappedInstance.current;
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            var t = o.withRef ? this.wrappedInstance : null;
                                            return (0, p.createElement)(e, (0, r.Z)({ ref: t }, this.props));
                                        },
                                    },
                                ]),
                                n
                            );
                        })(p.Component)),
                    (0, a.Z)(t, "displayName", P("sortableHandle", e)),
                    n
                );
            }
            function U(e) {
                return null != e.sortableHandle;
            }
            var V = (function () {
                function e(t, n) {
                    (0, s.Z)(this, e), (this.container = t), (this.onScrollCallback = n);
                }
                return (
                    (0, c.Z)(e, [
                        {
                            key: "clear",
                            value: function () {
                                null != this.interval && (clearInterval(this.interval), (this.interval = null));
                            },
                        },
                        {
                            key: "update",
                            value: function (e) {
                                var t = this,
                                    n = e.translate,
                                    r = e.minTranslate,
                                    o = e.maxTranslate,
                                    i = e.width,
                                    a = e.height,
                                    l = { x: 0, y: 0 },
                                    s = { x: 1, y: 1 },
                                    c = 10,
                                    d = 10,
                                    u = this.container,
                                    h = u.scrollTop,
                                    f = u.scrollLeft,
                                    p = u.scrollHeight,
                                    g = u.scrollWidth,
                                    m = 0 === h,
                                    y = p - h - u.clientHeight == 0,
                                    v = 0 === f,
                                    x = g - f - u.clientWidth == 0;
                                n.y >= o.y - a / 2 && !y ? ((l.y = 1), (s.y = d * Math.abs((o.y - a / 2 - n.y) / a))) : n.x >= o.x - i / 2 && !x ? ((l.x = 1), (s.x = c * Math.abs((o.x - i / 2 - n.x) / i))) : n.y <= r.y + a / 2 && !m ? ((l.y = -1), (s.y = d * Math.abs((n.y - a / 2 - r.y) / a))) : n.x <= r.x + i / 2 && !v && ((l.x = -1), (s.x = c * Math.abs((n.x - i / 2 - r.x) / i))),
                                    this.interval && (this.clear(), (this.isAutoScrolling = !1)),
                                    (0 === l.x && 0 === l.y) ||
                                        (this.interval = setInterval(function () {
                                            t.isAutoScrolling = !0;
                                            var e = { left: s.x * l.x, top: s.y * l.y };
                                            (t.container.scrollTop += e.top), (t.container.scrollLeft += e.left), t.onScrollCallback(e);
                                        }, 5));
                            },
                        },
                    ]),
                    e
                );
            })();
            var X = { axis: b().oneOf(["x", "y", "xy"]), contentWindow: b().any, disableAutoscroll: b().bool, distance: b().number, getContainer: b().func, getHelperDimensions: b().func, helperClass: b().string, helperContainer: b().oneOfType([b().func, "undefined" == typeof HTMLElement ? b().any : b().instanceOf(HTMLElement)]), hideSortableGhost: b().bool, keyboardSortingTransitionDuration: b().number, lockAxis: b().string, lockOffset: b().oneOfType([b().number, b().string, b().arrayOf(b().oneOfType([b().number, b().string]))]), lockToContainerEdges: b().bool, onSortEnd: b().func, onSortMove: b().func, onSortOver: b().func, onSortStart: b().func, pressDelay: b().number, pressThreshold: b().number, keyCodes: b().shape({ lift: b().arrayOf(b().number), drop: b().arrayOf(b().number), cancel: b().arrayOf(b().number), up: b().arrayOf(b().number), down: b().arrayOf(b().number) }), shouldCancelStart: b().func, transitionDuration: b().number, updateBeforeSortStart: b().func, useDragHandle: b().bool, useWindowAsScrollContainer: b().bool },
                q = { lift: [H], drop: [H], cancel: [j], up: [B, _], down: [G, K] },
                Y = {
                    axis: "y",
                    disableAutoscroll: !1,
                    distance: 0,
                    getHelperDimensions: function (e) {
                        var t = e.node;
                        return { height: t.offsetHeight, width: t.offsetWidth };
                    },
                    hideSortableGhost: !0,
                    lockOffset: "50%",
                    lockToContainerEdges: !1,
                    pressDelay: 0,
                    pressThreshold: 5,
                    keyCodes: q,
                    shouldCancelStart: function (e) {
                        return (
                            -1 !== [F.Input, F.Textarea, F.Select, F.Option, F.Button].indexOf(e.target.tagName) ||
                            !!I(e.target, function (e) {
                                return "true" === e.contentEditable;
                            })
                        );
                    },
                    transitionDuration: 300,
                    useWindowAsScrollContainer: !1,
                },
                $ = Object.keys(X);
            var J = (0, p.createContext)({ manager: {} });
            function Q(e) {
                var t,
                    n,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 };
                return (
                    (n = t =
                        (function (t) {
                            function n(e) {
                                var t;
                                (0, s.Z)(this, n),
                                    (t = (0, d.Z)(this, (0, u.Z)(n).call(this, e))),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "state", {}),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleStart", function (e) {
                                        var n = t.props,
                                            r = n.distance,
                                            o = n.shouldCancelStart;
                                        if (2 !== e.button && !o(e)) {
                                            (t.touched = !0), (t.position = A(e));
                                            var i = I(e.target, function (e) {
                                                return null != e.sortableInfo;
                                            });
                                            if (i && i.sortableInfo && t.nodeIsChild(i) && !t.state.sorting) {
                                                var a = t.props.useDragHandle,
                                                    l = i.sortableInfo,
                                                    s = l.index,
                                                    c = l.collection;
                                                if (l.disabled) return;
                                                if (a && !I(e.target, U)) return;
                                                (t.manager.active = { collection: c, index: s }),
                                                    (function (e) {
                                                        return (e.touches && e.touches.length) || (e.changedTouches && e.changedTouches.length);
                                                    })(e) ||
                                                        e.target.tagName !== F.Anchor ||
                                                        e.preventDefault(),
                                                    r ||
                                                        (0 === t.props.pressDelay
                                                            ? t.handlePress(e)
                                                            : (t.pressTimer = setTimeout(function () {
                                                                  return t.handlePress(e);
                                                              }, t.props.pressDelay)));
                                            }
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "nodeIsChild", function (e) {
                                        return e.sortableInfo.manager === t.manager;
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleMove", function (e) {
                                        var n = t.props,
                                            r = n.distance,
                                            o = n.pressThreshold;
                                        if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
                                            var i = A(e),
                                                a = { x: t.position.x - i.x, y: t.position.y - i.y },
                                                l = Math.abs(a.x) + Math.abs(a.y);
                                            (t.delta = a), r || (o && !(l >= o)) ? r && l >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), (t.cancelTimer = setTimeout(t.cancel, 0)));
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleEnd", function () {
                                        (t.touched = !1), t.cancel();
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "cancel", function () {
                                        var e = t.props.distance;
                                        t.state.sorting || (e || clearTimeout(t.pressTimer), (t.manager.active = null));
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handlePress", function (e) {
                                        try {
                                            var n = t.manager.getActive(),
                                                r = (function () {
                                                    if (n) {
                                                        var r = function () {
                                                                var n,
                                                                    r,
                                                                    o,
                                                                    d,
                                                                    m,
                                                                    y,
                                                                    x = f.sortableInfo.index,
                                                                    b = ((n = f), { bottom: R((r = window.getComputedStyle(n)).marginBottom), left: R(r.marginLeft), right: R(r.marginRight), top: R(r.marginTop) }),
                                                                    w = (function (e) {
                                                                        var t = window.getComputedStyle(e);
                                                                        return "grid" === t.display ? { x: R(t.gridColumnGap), y: R(t.gridRowGap) } : { x: 0, y: 0 };
                                                                    })(t.container),
                                                                    Z = t.scrollContainer.getBoundingClientRect(),
                                                                    C = a({ index: x, node: f, collection: p });
                                                                if (
                                                                    ((t.node = f),
                                                                    (t.margin = b),
                                                                    (t.gridGap = w),
                                                                    (t.width = C.width),
                                                                    (t.height = C.height),
                                                                    (t.marginOffset = { x: t.margin.left + t.margin.right + t.gridGap.x, y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y) }),
                                                                    (t.boundingClientRect = f.getBoundingClientRect()),
                                                                    (t.containerBoundingRect = Z),
                                                                    (t.index = x),
                                                                    (t.newIndex = x),
                                                                    (t.axis = { x: i.indexOf("x") >= 0, y: i.indexOf("y") >= 0 }),
                                                                    (t.offsetEdge = L(f, t.container)),
                                                                    (t.initialOffset = A(g ? l({}, e, { pageX: t.boundingClientRect.left, pageY: t.boundingClientRect.top }) : e)),
                                                                    (t.initialScroll = { left: t.scrollContainer.scrollLeft, top: t.scrollContainer.scrollTop }),
                                                                    (t.initialWindowScroll = { left: window.pageXOffset, top: window.pageYOffset }),
                                                                    (t.helper = t.helperContainer.appendChild(
                                                                        ((d = "input, textarea, select, canvas, [contenteditable]"),
                                                                        (m = (o = f).querySelectorAll(d)),
                                                                        (y = o.cloneNode(!0)),
                                                                        (0, v.Z)(y.querySelectorAll(d)).forEach(function (e, t) {
                                                                            "file" !== e.type && (e.value = m[t].value), "radio" === e.type && e.name && (e.name = "__sortableClone__".concat(e.name)), e.tagName === F.Canvas && m[t].width > 0 && m[t].height > 0 && e.getContext("2d").drawImage(m[t], 0, 0);
                                                                        }),
                                                                        y),
                                                                    )),
                                                                    k(t.helper, { boxSizing: "border-box", height: "".concat(t.height, "px"), left: "".concat(t.boundingClientRect.left - b.left, "px"), pointerEvents: "none", position: "fixed", top: "".concat(t.boundingClientRect.top - b.top, "px"), width: "".concat(t.width, "px") }),
                                                                    g && t.helper.focus(),
                                                                    c && ((t.sortableGhost = f), k(f, { opacity: 0, visibility: "hidden" })),
                                                                    (t.minTranslate = {}),
                                                                    (t.maxTranslate = {}),
                                                                    g)
                                                                ) {
                                                                    var E = h ? { top: 0, left: 0, width: t.contentWindow.innerWidth, height: t.contentWindow.innerHeight } : t.containerBoundingRect,
                                                                        O = E.top,
                                                                        T = E.left,
                                                                        I = E.width,
                                                                        D = O + E.height,
                                                                        P = T + I;
                                                                    t.axis.x && ((t.minTranslate.x = T - t.boundingClientRect.left), (t.maxTranslate.x = P - (t.boundingClientRect.left + t.width))), t.axis.y && ((t.minTranslate.y = O - t.boundingClientRect.top), (t.maxTranslate.y = D - (t.boundingClientRect.top + t.height)));
                                                                } else t.axis.x && ((t.minTranslate.x = (h ? 0 : Z.left) - t.boundingClientRect.left - t.width / 2), (t.maxTranslate.x = (h ? t.contentWindow.innerWidth : Z.left + Z.width) - t.boundingClientRect.left - t.width / 2)), t.axis.y && ((t.minTranslate.y = (h ? 0 : Z.top) - t.boundingClientRect.top - t.height / 2), (t.maxTranslate.y = (h ? t.contentWindow.innerHeight : Z.top + Z.height) - t.boundingClientRect.top - t.height / 2));
                                                                s &&
                                                                    s.split(" ").forEach(function (e) {
                                                                        return t.helper.classList.add(e);
                                                                    }),
                                                                    (t.listenerNode = e.touches ? e.target : t.contentWindow),
                                                                    g
                                                                        ? (t.listenerNode.addEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.addEventListener("keydown", t.handleKeyDown))
                                                                        : (S.move.forEach(function (e) {
                                                                              return t.listenerNode.addEventListener(e, t.handleSortMove, !1);
                                                                          }),
                                                                          S.end.forEach(function (e) {
                                                                              return t.listenerNode.addEventListener(e, t.handleSortEnd, !1);
                                                                          })),
                                                                    t.setState({ sorting: !0, sortingIndex: x }),
                                                                    u && u({ node: f, index: x, collection: p, isKeySorting: g, nodes: t.manager.getOrderedRefs(), helper: t.helper }, e),
                                                                    g && t.keyMove(0);
                                                            },
                                                            o = t.props,
                                                            i = o.axis,
                                                            a = o.getHelperDimensions,
                                                            s = o.helperClass,
                                                            c = o.hideSortableGhost,
                                                            d = o.updateBeforeSortStart,
                                                            u = o.onSortStart,
                                                            h = o.useWindowAsScrollContainer,
                                                            f = n.node,
                                                            p = n.collection,
                                                            g = t.manager.isKeySorting,
                                                            m = (function () {
                                                                if ("function" == typeof d) {
                                                                    t._awaitingUpdateBeforeSortStart = !0;
                                                                    var n = (function (e, t) {
                                                                        try {
                                                                            var n = e();
                                                                        } catch (e) {
                                                                            return t(!0, e);
                                                                        }
                                                                        return n && n.then ? n.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, value);
                                                                    })(
                                                                        function () {
                                                                            var t = f.sortableInfo.index;
                                                                            return Promise.resolve(d({ collection: p, index: t, node: f, isKeySorting: g }, e)).then(function () {});
                                                                        },
                                                                        function (e, n) {
                                                                            if (((t._awaitingUpdateBeforeSortStart = !1), e)) throw n;
                                                                            return n;
                                                                        },
                                                                    );
                                                                    if (n && n.then) return n.then(function () {});
                                                                }
                                                            })();
                                                        return m && m.then ? m.then(r) : r();
                                                    }
                                                })();
                                            return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
                                        } catch (e) {
                                            return Promise.reject(e);
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleSortMove", function (e) {
                                        var n = t.props.onSortMove;
                                        "function" == typeof e.preventDefault && e.cancelable && e.preventDefault(), t.updateHelperPosition(e), t.animateNodes(), t.autoscroll(), n && n(e);
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleSortEnd", function (e) {
                                        var n = t.props,
                                            r = n.hideSortableGhost,
                                            o = n.onSortEnd,
                                            i = t.manager,
                                            a = i.active.collection,
                                            l = i.isKeySorting,
                                            s = t.manager.getOrderedRefs();
                                        t.listenerNode &&
                                            (l
                                                ? (t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("keydown", t.handleKeyDown))
                                                : (S.move.forEach(function (e) {
                                                      return t.listenerNode.removeEventListener(e, t.handleSortMove);
                                                  }),
                                                  S.end.forEach(function (e) {
                                                      return t.listenerNode.removeEventListener(e, t.handleSortEnd);
                                                  }))),
                                            t.helper.parentNode.removeChild(t.helper),
                                            r && t.sortableGhost && k(t.sortableGhost, { opacity: "", visibility: "" });
                                        for (var c = 0, d = s.length; c < d; c++) {
                                            var u = s[c],
                                                h = u.node;
                                            (u.edgeOffset = null), (u.boundingClientRect = null), O(h, null), T(h, null), (u.translate = null);
                                        }
                                        t.autoScroller.clear(), (t.manager.active = null), (t.manager.isKeySorting = !1), t.setState({ sorting: !1, sortingIndex: null }), "function" == typeof o && o({ collection: a, newIndex: t.newIndex, oldIndex: t.index, isKeySorting: l, nodes: s }, e), (t.touched = !1);
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "autoscroll", function () {
                                        var e = t.props.disableAutoscroll,
                                            n = t.manager.isKeySorting;
                                        if (e) t.autoScroller.clear();
                                        else {
                                            if (n) {
                                                var r = l({}, t.translate),
                                                    o = 0,
                                                    i = 0;
                                                return t.axis.x && ((r.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x))), (o = t.translate.x - r.x)), t.axis.y && ((r.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y))), (i = t.translate.y - r.y)), (t.translate = r), O(t.helper, t.translate), (t.scrollContainer.scrollLeft += o), void (t.scrollContainer.scrollTop += i);
                                            }
                                            t.autoScroller.update({ height: t.height, maxTranslate: t.maxTranslate, minTranslate: t.minTranslate, translate: t.translate, width: t.width });
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "onAutoScroll", function (e) {
                                        (t.translate.x += e.left), (t.translate.y += e.top), t.animateNodes();
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleKeyDown", function (e) {
                                        var n = e.keyCode,
                                            r = t.props,
                                            o = r.shouldCancelStart,
                                            i = r.keyCodes,
                                            a = l({}, q, void 0 === i ? {} : i);
                                        (t.manager.active && !t.manager.isKeySorting) || !(t.manager.active || (a.lift.includes(n) && !o(e) && t.isValidSortingTarget(e))) || (e.stopPropagation(), e.preventDefault(), a.lift.includes(n) && !t.manager.active ? t.keyLift(e) : a.drop.includes(n) && t.manager.active ? t.keyDrop(e) : a.cancel.includes(n) ? ((t.newIndex = t.manager.active.index), t.keyDrop(e)) : a.up.includes(n) ? t.keyMove(-1) : a.down.includes(n) && t.keyMove(1));
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "keyLift", function (e) {
                                        var n = e.target,
                                            r = I(n, function (e) {
                                                return null != e.sortableInfo;
                                            }).sortableInfo,
                                            o = r.index,
                                            i = r.collection;
                                        (t.initialFocusedNode = n), (t.manager.isKeySorting = !0), (t.manager.active = { index: o, collection: i }), t.handlePress(e);
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "keyMove", function (e) {
                                        var n = t.manager.getOrderedRefs(),
                                            r = n[n.length - 1].node.sortableInfo.index,
                                            o = t.newIndex + e,
                                            i = t.newIndex;
                                        if (!(o < 0 || o > r)) {
                                            (t.prevIndex = i), (t.newIndex = o);
                                            var a = (function (e, t, n) {
                                                    return e < n && e > t ? e - 1 : e > n && e < t ? e + 1 : e;
                                                })(t.newIndex, t.prevIndex, t.index),
                                                l = n.find(function (e) {
                                                    return e.node.sortableInfo.index === a;
                                                }),
                                                s = l.node,
                                                c = t.containerScrollDelta,
                                                d = l.boundingClientRect || N(s, c),
                                                u = l.translate || { x: 0, y: 0 },
                                                h = d.top + u.y - c.top,
                                                f = d.left + u.x - c.left,
                                                p = i < o,
                                                g = p && t.axis.x ? s.offsetWidth - t.width : 0,
                                                m = p && t.axis.y ? s.offsetHeight - t.height : 0;
                                            t.handleSortMove({ pageX: f + g, pageY: h + m, ignoreTransition: 0 === e });
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "keyDrop", function (e) {
                                        t.handleSortEnd(e), t.initialFocusedNode && t.initialFocusedNode.focus();
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleKeyEnd", function (e) {
                                        t.manager.active && t.keyDrop(e);
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "isValidSortingTarget", function (e) {
                                        var n = t.props.useDragHandle,
                                            r = e.target,
                                            o = I(r, function (e) {
                                                return null != e.sortableInfo;
                                            });
                                        return o && o.sortableInfo && !o.sortableInfo.disabled && (n ? U(r) : r.sortableInfo);
                                    });
                                var r = new w();
                                return (
                                    (function (e) {
                                        y()(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.");
                                    })(e),
                                    (t.manager = r),
                                    (t.wrappedInstance = (0, p.createRef)()),
                                    (t.sortableContextValue = { manager: r }),
                                    (t.events = { end: t.handleEnd, move: t.handleMove, start: t.handleStart }),
                                    t
                                );
                            }
                            return (
                                (0, h.Z)(n, t),
                                (0, c.Z)(n, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            var e = this,
                                                t = this.props.useWindowAsScrollContainer,
                                                n = this.getContainer();
                                            Promise.resolve(n).then(function (n) {
                                                (e.container = n), (e.document = e.container.ownerDocument || document);
                                                var r = e.props.contentWindow || e.document.defaultView || window;
                                                (e.contentWindow = "function" == typeof r ? r() : r),
                                                    (e.scrollContainer = t ? e.document.scrollingElement || e.document.documentElement : W(e.container) || e.container),
                                                    (e.autoScroller = new V(e.scrollContainer, e.onAutoScroll)),
                                                    Object.keys(e.events).forEach(function (t) {
                                                        return S[t].forEach(function (n) {
                                                            return e.container.addEventListener(n, e.events[t], !1);
                                                        });
                                                    }),
                                                    e.container.addEventListener("keydown", e.handleKeyDown);
                                            });
                                        },
                                    },
                                    {
                                        key: "componentWillUnmount",
                                        value: function () {
                                            var e = this;
                                            this.helper && this.helper.parentNode && this.helper.parentNode.removeChild(this.helper),
                                                this.container &&
                                                    (Object.keys(this.events).forEach(function (t) {
                                                        return S[t].forEach(function (n) {
                                                            return e.container.removeEventListener(n, e.events[t]);
                                                        });
                                                    }),
                                                    this.container.removeEventListener("keydown", this.handleKeyDown));
                                        },
                                    },
                                    {
                                        key: "updateHelperPosition",
                                        value: function (e) {
                                            var t = this.props,
                                                n = t.lockAxis,
                                                r = t.lockOffset,
                                                o = t.lockToContainerEdges,
                                                a = t.transitionDuration,
                                                l = t.keyboardSortingTransitionDuration,
                                                s = void 0 === l ? a : l,
                                                c = this.manager.isKeySorting,
                                                d = e.ignoreTransition,
                                                u = A(e),
                                                h = { x: u.x - this.initialOffset.x, y: u.y - this.initialOffset.y };
                                            if (((h.y -= window.pageYOffset - this.initialWindowScroll.top), (h.x -= window.pageXOffset - this.initialWindowScroll.left), (this.translate = h), o)) {
                                                var f = (function (e) {
                                                        var t = e.height,
                                                            n = e.width,
                                                            r = e.lockOffset,
                                                            o = Array.isArray(r) ? r : [r, r];
                                                        y()(2 === o.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", r);
                                                        var a = i(o, 2),
                                                            l = a[0],
                                                            s = a[1];
                                                        return [M({ height: t, lockOffset: l, width: n }), M({ height: t, lockOffset: s, width: n })];
                                                    })({ height: this.height, lockOffset: r, width: this.width }),
                                                    p = i(f, 2),
                                                    g = p[0],
                                                    m = p[1],
                                                    v = { x: this.width / 2 - g.x, y: this.height / 2 - g.y },
                                                    x = { x: this.width / 2 - m.x, y: this.height / 2 - m.y };
                                                (h.x = D(this.minTranslate.x + v.x, this.maxTranslate.x - x.x, h.x)), (h.y = D(this.minTranslate.y + v.y, this.maxTranslate.y - x.y, h.y));
                                            }
                                            "x" === n ? (h.y = 0) : "y" === n && (h.x = 0), c && s && !d && T(this.helper, s), O(this.helper, h);
                                        },
                                    },
                                    {
                                        key: "animateNodes",
                                        value: function () {
                                            var e = this.props,
                                                t = e.transitionDuration,
                                                n = e.hideSortableGhost,
                                                r = e.onSortOver,
                                                o = this.containerScrollDelta,
                                                i = this.windowScrollDelta,
                                                a = this.manager.getOrderedRefs(),
                                                l = this.offsetEdge.left + this.translate.x + o.left,
                                                s = this.offsetEdge.top + this.translate.y + o.top,
                                                c = this.manager.isKeySorting,
                                                d = this.newIndex;
                                            this.newIndex = null;
                                            for (var u = 0, h = a.length; u < h; u++) {
                                                var f = a[u].node,
                                                    p = f.sortableInfo.index,
                                                    g = f.offsetWidth,
                                                    m = f.offsetHeight,
                                                    y = { height: this.height > m ? m / 2 : this.height / 2, width: this.width > g ? g / 2 : this.width / 2 },
                                                    v = c && p > this.index && p <= d,
                                                    x = c && p < this.index && p >= d,
                                                    b = { x: 0, y: 0 },
                                                    w = a[u].edgeOffset;
                                                w || ((w = L(f, this.container)), (a[u].edgeOffset = w), c && (a[u].boundingClientRect = N(f, o)));
                                                var Z = u < a.length - 1 && a[u + 1],
                                                    C = u > 0 && a[u - 1];
                                                Z && !Z.edgeOffset && ((Z.edgeOffset = L(Z.node, this.container)), c && (Z.boundingClientRect = N(Z.node, o))), p !== this.index ? (t && T(f, t), this.axis.x ? (this.axis.y ? (x || (p < this.index && ((l + i.left - y.width <= w.left && s + i.top <= w.top + y.height) || s + i.top + y.height <= w.top)) ? ((b.x = this.width + this.marginOffset.x), w.left + b.x > this.containerBoundingRect.width - y.width && Z && ((b.x = Z.edgeOffset.left - w.left), (b.y = Z.edgeOffset.top - w.top)), null === this.newIndex && (this.newIndex = p)) : (v || (p > this.index && ((l + i.left + y.width >= w.left && s + i.top + y.height >= w.top) || s + i.top + y.height >= w.top + m))) && ((b.x = -(this.width + this.marginOffset.x)), w.left + b.x < this.containerBoundingRect.left + y.width && C && ((b.x = C.edgeOffset.left - w.left), (b.y = C.edgeOffset.top - w.top)), (this.newIndex = p))) : v || (p > this.index && l + i.left + y.width >= w.left) ? ((b.x = -(this.width + this.marginOffset.x)), (this.newIndex = p)) : (x || (p < this.index && l + i.left <= w.left + y.width)) && ((b.x = this.width + this.marginOffset.x), null == this.newIndex && (this.newIndex = p))) : this.axis.y && (v || (p > this.index && s + i.top + y.height >= w.top) ? ((b.y = -(this.height + this.marginOffset.y)), (this.newIndex = p)) : (x || (p < this.index && s + i.top <= w.top + y.height)) && ((b.y = this.height + this.marginOffset.y), null == this.newIndex && (this.newIndex = p))), O(f, b), (a[u].translate = b)) : n && ((this.sortableGhost = f), k(f, { opacity: 0, visibility: "hidden" }));
                                            }
                                            null == this.newIndex && (this.newIndex = this.index), c && (this.newIndex = d);
                                            var S = c ? this.prevIndex : d;
                                            r && this.newIndex !== S && r({ collection: this.manager.active.collection, index: this.index, newIndex: this.newIndex, oldIndex: S, isKeySorting: c, nodes: a, helper: this.helper });
                                        },
                                    },
                                    {
                                        key: "getWrappedInstance",
                                        value: function () {
                                            return y()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.wrappedInstance.current;
                                        },
                                    },
                                    {
                                        key: "getContainer",
                                        value: function () {
                                            var e = this.props.getContainer;
                                            return "function" != typeof e ? (0, g.findDOMNode)(this) : e(o.withRef ? this.getWrappedInstance() : void 0);
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            var t = o.withRef ? this.wrappedInstance : null;
                                            return (0, p.createElement)(J.Provider, { value: this.sortableContextValue }, (0, p.createElement)(e, (0, r.Z)({ ref: t }, C(this.props, $))));
                                        },
                                    },
                                    {
                                        key: "helperContainer",
                                        get: function () {
                                            var e = this.props.helperContainer;
                                            return "function" == typeof e ? e() : this.props.helperContainer || this.document.body;
                                        },
                                    },
                                    {
                                        key: "containerScrollDelta",
                                        get: function () {
                                            return this.props.useWindowAsScrollContainer ? { left: 0, top: 0 } : { left: this.scrollContainer.scrollLeft - this.initialScroll.left, top: this.scrollContainer.scrollTop - this.initialScroll.top };
                                        },
                                    },
                                    {
                                        key: "windowScrollDelta",
                                        get: function () {
                                            return { left: this.contentWindow.pageXOffset - this.initialWindowScroll.left, top: this.contentWindow.pageYOffset - this.initialWindowScroll.top };
                                        },
                                    },
                                ]),
                                n
                            );
                        })(p.Component)),
                    (0, a.Z)(t, "displayName", P("sortableList", e)),
                    (0, a.Z)(t, "defaultProps", Y),
                    (0, a.Z)(t, "propTypes", X),
                    n
                );
            }
            var ee = { index: b().number.isRequired, collection: b().oneOfType([b().number, b().string]), disabled: b().bool },
                te = Object.keys(ee);
            function ne(e) {
                var t,
                    n,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 };
                return (
                    (n = t =
                        (function (t) {
                            function n() {
                                var e, t;
                                (0, s.Z)(this, n);
                                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                                return (t = (0, d.Z)(this, (e = (0, u.Z)(n)).call.apply(e, [this].concat(o)))), (0, a.Z)((0, f.Z)((0, f.Z)(t)), "wrappedInstance", (0, p.createRef)()), t;
                            }
                            return (
                                (0, h.Z)(n, t),
                                (0, c.Z)(n, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            this.register();
                                        },
                                    },
                                    {
                                        key: "componentDidUpdate",
                                        value: function (e) {
                                            this.node && (e.index !== this.props.index && (this.node.sortableInfo.index = this.props.index), e.disabled !== this.props.disabled && (this.node.sortableInfo.disabled = this.props.disabled)), e.collection !== this.props.collection && (this.unregister(e.collection), this.register());
                                        },
                                    },
                                    {
                                        key: "componentWillUnmount",
                                        value: function () {
                                            this.unregister();
                                        },
                                    },
                                    {
                                        key: "register",
                                        value: function () {
                                            var e = this.props,
                                                t = e.collection,
                                                n = e.disabled,
                                                r = e.index,
                                                o = (0, g.findDOMNode)(this);
                                            (o.sortableInfo = { collection: t, disabled: n, index: r, manager: this.context.manager }), (this.node = o), (this.ref = { node: o }), this.context.manager.add(t, this.ref);
                                        },
                                    },
                                    {
                                        key: "unregister",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.collection;
                                            this.context.manager.remove(e, this.ref);
                                        },
                                    },
                                    {
                                        key: "getWrappedInstance",
                                        value: function () {
                                            return y()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.wrappedInstance.current;
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            var t = o.withRef ? this.wrappedInstance : null;
                                            return (0, p.createElement)(e, (0, r.Z)({ ref: t }, C(this.props, te)));
                                        },
                                    },
                                ]),
                                n
                            );
                        })(p.Component)),
                    (0, a.Z)(t, "displayName", P("sortableElement", e)),
                    (0, a.Z)(t, "contextType", J),
                    (0, a.Z)(t, "propTypes", ee),
                    (0, a.Z)(t, "defaultProps", { collection: 0 }),
                    n
                );
            }
        },
        709249: (e, t, n) => {
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            n.d(t, { Z: () => r });
        },
        887371: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(145850);
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, (0, r.Z)(o.key), o);
                }
            }
            function i(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            }
        },
        695058: (e, t, n) => {
            function r(e) {
                return (
                    (r = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    r(e)
                );
            }
            n.d(t, { Z: () => r });
        },
        545754: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(88960);
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && (0, r.Z)(e, t);
            }
        },
        411987: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(86522),
                o = n(580753);
            function i(e, t) {
                if (t && ("object" === (0, r.Z)(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, o.Z)(e);
            }
        },
        238777: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(200926);
            var o = n(759147);
            function i(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return (0, r.Z)(e);
                    })(e) ||
                    (function (e) {
                        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                    })(e) ||
                    (0, o.Z)(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Communities~ondemand.SettingsRevamp.9403920a.js.map
