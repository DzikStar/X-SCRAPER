"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~ondemand.InlinePlayer~bundle.DockPeek~bundle.LiveEvent~loader.AudioOnlyVideoPlaye-5563f741"],
    {
        738584: (t, e, r) => {
            r.d(e, { o: () => h, Z: () => v });
            var n = r(807896),
                o = r(202784),
                i = r(928316),
                a = r(682474),
                s = r(392237),
                l = r(893164),
                c = r(395367),
                u = r(908478);
            function p(t) {
                let e = f(t);
                return (t) => {
                    const r = f(t);
                    return (0, u.Z)(e, r) || (e = r), e;
                };
            }
            function f(t) {
                if (!t || "object" != typeof t) return t;
                const e = JSON.parse(JSON.stringify(t));
                return delete e.dataUsageBytes, (e.tracks = e.tracks.map((t) => ("number" == typeof t.currentTimeMs && delete t.currentTimeMs, t))), e;
            }
            function h({ children: t, periodic: e }) {
                const r = e ? d.PeriodicContext.Consumer : d.Context.Consumer;
                return o.createElement(r, null, (e) => {
                    const { aspectRatio: r, containerRef: n, guestsState: o, playerApi: i, playerState: a } = e;
                    return i && n && a ? t({ aspectRatio: r, guestsState: o, playerApi: i, playerState: a, containerRef: n }) : null;
                });
            }
            class d extends o.Component {
                constructor(...t) {
                    super(...t),
                        (this._cache = { stablePlayerState: p(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: t, enablePiP: e } = this.props,
                                { guestsState: r, playerApi: n, stablePlayerState: o } = this.state;
                            return n && t ? ("function" == typeof t ? t({ enablePiP: e, guestsState: r, playerApi: n, playerState: o, containerRef: this._containerRef }) : t) : null;
                        }),
                        (this._handleReload = () => this.setState(() => ({ hasError: null }))),
                        (this._handlePlayerApi = (t) => (e) => {
                            const { playerId: r } = this.props;
                            this.setState({ playerApi: e }),
                                this.props.onApiReady && this.props.onApiReady(e),
                                r && t && (this._unregister = t(r, e)),
                                (this._unsubscribe = e.subscribe((t, e) => {
                                    const r = this._cache.stablePlayerState(t);
                                    this.setState({ stablePlayerState: r, playerState: t, guestsState: e }), this.props.onStateUpdate && this.props.onStateUpdate(t, e);
                                }));
                        });
                }
                componentWillUnmount() {
                    this._unregister && this._unregister(), this._unsubscribe && this._unsubscribe();
                }
                componentDidUpdate() {
                    if (!this._containerRef) {
                        const t = i.findDOMNode(this);
                        t && t instanceof HTMLElement && (this._containerRef = t);
                    }
                }
                componentDidCatch(t, e) {
                    const r = { error: t, info: e };
                    this.setState(() => ({ hasError: r }));
                }
                render() {
                    const { guestsState: t, playerApi: e, playerState: r, stablePlayerState: i } = this.state,
                        { additionalBadges: s, aspectRatio: u, basePlayerClass: p, children: f, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: v, objectFitVideo: g, onApiReady: x, onScroll: m, onStateUpdate: S, playerId: b, size: E, ...R } = this.props,
                        C = { aspectRatio: this.props.aspectRatio, guestsState: t, playerApi: e, playerState: r, containerRef: this._containerRef },
                        w = { ...C, playerState: i };
                    return o.createElement(
                        a.Z,
                        { isFullScreen: v, onScroll: m, ratio: u, style: [y.root, y[E]] },
                        this.state.hasError
                            ? o.createElement(l.Z, { onReloadPress: this._handleReload })
                            : o.createElement(
                                  d.Context.Provider,
                                  { value: w },
                                  o.createElement(
                                      d.PeriodicContext.Provider,
                                      { value: C },
                                      o.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: t }) => o.createElement(p, (0, n.Z)({}, R, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: g }, setPlayerApi: this._handlePlayerApi(t) }))),
                                  ),
                              ),
                    );
                }
            }
            (d.Consumer = h), (d.defaultProps = { aspectRatio: s.default.theme.aspectRatios.landscape, size: "fill" }), (d.Context = o.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (d.PeriodicContext = o.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const y = s.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                v = d;
        },
        395367: (t, e, r) => {
            r.d(e, { Z: () => a });
            var n,
                o = r(202784);
            class i extends o.Component {
                constructor(...t) {
                    super(...t),
                        (this.state = { playerApi: void 0, playerState: void 0, guestsState: void 0 }),
                        (this._initializeState = (t) => {
                            t && (this._unsubscribe && this._unsubscribe(), this.setState({ playerApi: t }), (this._unsubscribe = t.subscribe((t, e) => this.setState({ playerState: t, guestsState: e }))));
                        });
                }
                componentDidMount() {
                    this._initializeState(this.props.playerApi);
                }
                componentDidUpdate(t) {
                    const { playerApi: e } = this.props;
                    e !== t.playerApi && this._initializeState(e);
                }
                render() {
                    return this.props.children(this.state);
                }
            }
            class a extends o.Component {
                constructor(...t) {
                    super(...t),
                        (this.state = { players: {} }),
                        (this._mounted = !1),
                        (this._registerPlayer = (t, e) => {
                            const r = new Promise((r) => {
                                setTimeout(() => {
                                    this._mounted ? this.setState((r) => ({ players: { ...r.players, [t]: e } }), r) : r();
                                });
                            });
                            return () => {
                                r.then(() => this._unregisterPlayer(t));
                            };
                        }),
                        (this._unregisterPlayer = (t) => {
                            this._mounted &&
                                this.setState((e) => {
                                    const { [t]: r, ...n } = this.state.players;
                                    return { players: n };
                                });
                        }),
                        (this._registrationContext = { registerPlayer: this._registerPlayer });
                }
                componentDidMount() {
                    this._mounted = !0;
                }
                componentWillUnmount() {
                    this._mounted = !1;
                }
                render() {
                    return o.createElement(a.RegistrationContext.Provider, { value: this._registrationContext }, o.createElement(a.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (n = a), (a.MetadataSubscriber = ({ children: t, playerId: e }) => o.createElement(n.ProviderContext.Consumer, null, ({ players: r }) => o.createElement(i, { playerApi: r && r[e] }, t))), (a.RegistrationContext = o.createContext({ registerPlayer: void 0 })), (a.ProviderContext = o.createContext({ players: {} }));
        },
        893164: (t, e, r) => {
            r.d(e, { Z: () => h });
            var n = r(202784),
                o = r(325686),
                i = r(111677),
                a = r.n(i),
                s = r(355830),
                l = r(731708),
                c = r(154003),
                u = r(992942),
                p = r(392237);
            const f = a().a9edea48;
            function h(t) {
                const { displayBackgroundImage: e = !1, errorMessage: r, iconPlayError: i, imageSrc: a, onReloadPress: h } = t;
                return n.createElement(o.Z, { style: [p.default.absoluteFill, e ? null : d.blankOverlay] }, e ? n.createElement(n.Fragment, null, n.createElement(o.Z, { style: d.backgroundImage }, a && n.createElement(u.Z, { resizeMode: "cover", source: a, style: p.default.absoluteFill })), n.createElement(o.Z, { style: d.overlay })) : null, n.createElement(o.Z, { style: d.errorContainer }, n.createElement(o.Z, null, i ? n.createElement(s.default, { style: d.playErrorIcon }) : null), n.createElement(o.Z, { focusable: !0 }, n.createElement(l.ZP, { style: e ? d.errorMsgTextWhite : d.errorMsgTextGray }, r)), h ? n.createElement(c.ZP, { onPress: h, style: d.buttonContainer, type: "brandFilled" }, f) : null));
            }
            const d = p.default.create((t) => ({ backgroundImage: { ...p.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...p.default.absoluteFillObject, backgroundColor: t.colors.translucentBlack77 }, blankOverlay: { backgroundColor: t.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: t.spaces.space32 }, errorMsgTextWhite: { color: t.colors.white, textAlign: "center", marginBottom: t.spaces.space20 }, errorMsgTextGray: { color: t.colors.gray700, textAlign: "center", marginBottom: t.spaces.space20 }, playErrorIcon: { fill: t.colors.gray700, height: t.spaces.space48, width: t.spaces.space48, marginHorizontal: "auto", paddingBottom: t.spaces.space20, verticalAlign: "middle" } }));
        },
        557988: (t, e, r) => {
            var n = r(782359),
                o = r(659821),
                i = TypeError;
            t.exports = function (t) {
                if (n(t)) return t;
                throw new i(o(t) + " is not a constructor");
            };
        },
        986570: (t, e, r) => {
            var n = r(689996).forEach,
                o = r(696038)("forEach");
            t.exports = o
                ? [].forEach
                : function (t) {
                      return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
                  };
        },
        310507: (t, e, r) => {
            var n = r(497636),
                o = r(720266),
                i = r(492991),
                a = r(464960),
                s = r(991943),
                l = r(782359),
                c = r(639646),
                u = r(462324),
                p = r(928403),
                f = r(478830),
                h = Array;
            t.exports = function (t) {
                var e = i(t),
                    r = l(this),
                    d = arguments.length,
                    y = d > 1 ? arguments[1] : void 0,
                    v = void 0 !== y;
                v && (y = n(y, d > 2 ? arguments[2] : void 0));
                var g,
                    x,
                    m,
                    S,
                    b,
                    E,
                    R = f(e),
                    C = 0;
                if (!R || (this === h && s(R))) for (g = c(e), x = r ? new this(g) : h(g); g > C; C++) (E = v ? y(e[C], C) : e[C]), u(x, C, E);
                else for (b = (S = p(e, R)).next, x = r ? new this() : []; !(m = o(b, S)).done; C++) (E = v ? a(S, y, [m.value, C], !0) : m.value), u(x, C, E);
                return (x.length = C), x;
            };
        },
        464960: (t, e, r) => {
            var n = r(821176),
                o = r(257281);
            t.exports = function (t, e, r, i) {
                try {
                    return i ? e(n(r)[0], r[1]) : e(r);
                } catch (e) {
                    o(t, "throw", e);
                }
            };
        },
        874575: (t, e, r) => {
            var n = r(670095)("iterator"),
                o = !1;
            try {
                var i = 0,
                    a = {
                        next: function () {
                            return { done: !!i++ };
                        },
                        return: function () {
                            o = !0;
                        },
                    };
                (a[n] = function () {
                    return this;
                }),
                    Array.from(a, function () {
                        throw 2;
                    });
            } catch (t) {}
            t.exports = function (t, e) {
                try {
                    if (!e && !o) return !1;
                } catch (t) {
                    return !1;
                }
                var r = !1;
                try {
                    var i = {};
                    (i[n] = function () {
                        return {
                            next: function () {
                                return { done: (r = !0) };
                            },
                        };
                    }),
                        t(i);
                } catch (t) {}
                return r;
            };
        },
        33684: (t) => {
            t.exports = function (t, e) {
                return { value: t, done: e };
            };
        },
        995694: (t) => {
            t.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
        },
        618865: (t, e, r) => {
            var n = r(522635)("span").classList,
                o = n && n.constructor && n.constructor.prototype;
            t.exports = o === Object.prototype ? void 0 : o;
        },
        748639: (t, e, r) => {
            var n = r(95189),
                o = r(128801);
            t.exports = !n && !o && "object" == typeof window && "object" == typeof document;
        },
        737995: (t) => {
            t.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version;
        },
        95189: (t) => {
            t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version;
        },
        308983: (t, e, r) => {
            var n = r(180598);
            t.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
        },
        232023: (t, e, r) => {
            var n = r(180598);
            t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
        },
        610263: (t, e, r) => {
            var n = r(180598);
            t.exports = /web0s(?!.*chrome)/i.test(n);
        },
        194128: (t, e, r) => {
            var n = r(265968),
                o = r(277111),
                i = r(685052),
                a = r(198270),
                s = r(1909),
                l = r(357188),
                c = Function,
                u = n([].concat),
                p = n([].join),
                f = {};
            t.exports = l
                ? c.bind
                : function (t) {
                      var e = o(this),
                          r = e.prototype,
                          n = s(arguments, 1),
                          l = function () {
                              var r = u(n, s(arguments));
                              return this instanceof l
                                  ? (function (t, e, r) {
                                        if (!a(f, e)) {
                                            for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
                                            f[e] = c("C,a", "return new C(" + p(n, ",") + ")");
                                        }
                                        return f[e](t, r);
                                    })(e, r.length, r)
                                  : e.apply(t, r);
                          };
                      return i(r) && (l.prototype = r), l;
                  };
        },
        478830: (t, e, r) => {
            var n = r(781589),
                o = r(155300),
                i = r(209650),
                a = r(545495),
                s = r(670095)("iterator");
            t.exports = function (t) {
                if (!i(t)) return o(t, s) || o(t, "@@iterator") || a[n(t)];
            };
        },
        928403: (t, e, r) => {
            var n = r(720266),
                o = r(277111),
                i = r(821176),
                a = r(659821),
                s = r(478830),
                l = TypeError;
            t.exports = function (t, e) {
                var r = arguments.length < 2 ? s(t) : e;
                if (o(r)) return i(n(r, t));
                throw new l(a(t) + " is not iterable");
            };
        },
        44231: (t, e, r) => {
            var n = r(265968),
                o = r(33718),
                i = r(26733),
                a = r(427079),
                s = r(783326),
                l = n([].push);
            t.exports = function (t) {
                if (i(t)) return t;
                if (o(t)) {
                    for (var e = t.length, r = [], n = 0; n < e; n++) {
                        var c = t[n];
                        "string" == typeof c ? l(r, c) : ("number" != typeof c && "Number" !== a(c) && "String" !== a(c)) || l(r, s(c));
                    }
                    var u = r.length,
                        p = !0;
                    return function (t, e) {
                        if (p) return (p = !1), e;
                        if (o(this)) return e;
                        for (var n = 0; n < u; n++) if (r[n] === t) return e;
                    };
                }
            };
        },
        214665: (t) => {
            t.exports = function (t, e) {};
        },
        991943: (t, e, r) => {
            var n = r(670095),
                o = r(545495),
                i = n("iterator"),
                a = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (o.Array === t || a[i] === t);
            };
        },
        789003: (t, e, r) => {
            var n = r(497636),
                o = r(720266),
                i = r(821176),
                a = r(659821),
                s = r(991943),
                l = r(639646),
                c = r(291321),
                u = r(928403),
                p = r(478830),
                f = r(257281),
                h = TypeError,
                d = function (t, e) {
                    (this.stopped = t), (this.result = e);
                },
                y = d.prototype;
            t.exports = function (t, e, r) {
                var v,
                    g,
                    x,
                    m,
                    S,
                    b,
                    E,
                    R = r && r.that,
                    C = !(!r || !r.AS_ENTRIES),
                    w = !(!r || !r.IS_RECORD),
                    P = !(!r || !r.IS_ITERATOR),
                    _ = !(!r || !r.INTERRUPTED),
                    A = n(e, R),
                    I = function (t) {
                        return v && f(v, "normal", t), new d(!0, t);
                    },
                    T = function (t) {
                        return C ? (i(t), _ ? A(t[0], t[1], I) : A(t[0], t[1])) : _ ? A(t, I) : A(t);
                    };
                if (w) v = t.iterator;
                else if (P) v = t;
                else {
                    if (!(g = p(t))) throw new h(a(t) + " is not iterable");
                    if (s(g)) {
                        for (x = 0, m = l(t); m > x; x++) if ((S = T(t[x])) && c(y, S)) return S;
                        return new d(!1);
                    }
                    v = u(t, g);
                }
                for (b = w ? t.next : v.next; !(E = o(b, v)).done; ) {
                    try {
                        S = T(E.value);
                    } catch (t) {
                        f(v, "throw", t);
                    }
                    if ("object" == typeof S && S && c(y, S)) return S;
                }
                return new d(!1);
            };
        },
        257281: (t, e, r) => {
            var n = r(720266),
                o = r(821176),
                i = r(155300);
            t.exports = function (t, e, r) {
                var a, s;
                o(t);
                try {
                    if (!(a = i(t, "return"))) {
                        if ("throw" === e) throw r;
                        return r;
                    }
                    a = n(a, t);
                } catch (t) {
                    (s = !0), (a = t);
                }
                if ("throw" === e) throw r;
                if (s) throw a;
                return o(a), r;
            };
        },
        42247: (t, e, r) => {
            var n = r(360693).IteratorPrototype,
                o = r(822391),
                i = r(665358),
                a = r(954555),
                s = r(545495),
                l = function () {
                    return this;
                };
            t.exports = function (t, e, r, c) {
                var u = e + " Iterator";
                return (t.prototype = o(n, { next: i(+!c, r) })), a(t, u, !1, !0), (s[u] = l), t;
            };
        },
        712707: (t, e, r) => {
            var n = r(23103),
                o = r(720266),
                i = r(124231),
                a = r(951805),
                s = r(26733),
                l = r(42247),
                c = r(567567),
                u = r(956540),
                p = r(954555),
                f = r(675762),
                h = r(914768),
                d = r(670095),
                y = r(545495),
                v = r(360693),
                g = a.PROPER,
                x = a.CONFIGURABLE,
                m = v.IteratorPrototype,
                S = v.BUGGY_SAFARI_ITERATORS,
                b = d("iterator"),
                E = "keys",
                R = "values",
                C = "entries",
                w = function () {
                    return this;
                };
            t.exports = function (t, e, r, a, d, v, P) {
                l(r, e, a);
                var _,
                    A,
                    I,
                    T = function (t) {
                        if (t === d && D) return D;
                        if (!S && t && t in M) return M[t];
                        switch (t) {
                            case E:
                            case R:
                            case C:
                                return function () {
                                    return new r(this, t);
                                };
                        }
                        return function () {
                            return new r(this);
                        };
                    },
                    O = e + " Iterator",
                    L = !1,
                    M = t.prototype,
                    k = M[b] || M["@@iterator"] || (d && M[d]),
                    D = (!S && k) || T(d),
                    j = ("Array" === e && M.entries) || k;
                if (
                    (j && (_ = c(j.call(new t()))) !== Object.prototype && _.next && (i || c(_) === m || (u ? u(_, m) : s(_[b]) || h(_, b, w)), p(_, O, !0, !0), i && (y[O] = w)),
                    g &&
                        d === R &&
                        k &&
                        k.name !== R &&
                        (!i && x
                            ? f(M, "name", R)
                            : ((L = !0),
                              (D = function () {
                                  return o(k, this);
                              }))),
                    d)
                )
                    if (((A = { values: T(R), keys: v ? D : T(E), entries: T(C) }), P)) for (I in A) (S || L || !(I in M)) && h(M, I, A[I]);
                    else n({ target: e, proto: !0, forced: S || L }, A);
                return (i && !P) || M[b] === D || h(M, b, D, { name: d }), (y[e] = D), A;
            };
        },
        360693: (t, e, r) => {
            var n,
                o,
                i,
                a = r(824229),
                s = r(26733),
                l = r(685052),
                c = r(822391),
                u = r(567567),
                p = r(914768),
                f = r(670095),
                h = r(124231),
                d = f("iterator"),
                y = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (n = o) : (y = !0)),
                !l(n) ||
                a(function () {
                    var t = {};
                    return n[d].call(t) !== t;
                })
                    ? (n = {})
                    : h && (n = c(n)),
                s(n[d]) ||
                    p(n, d, function () {
                        return this;
                    }),
                (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: y });
        },
        545495: (t) => {
            t.exports = {};
        },
        124794: (t, e, r) => {
            var n,
                o,
                i,
                a,
                s,
                l = r(609859),
                c = r(497636),
                u = r(997933).f,
                p = r(155795).set,
                f = r(193358),
                h = r(232023),
                d = r(308983),
                y = r(610263),
                v = r(128801),
                g = l.MutationObserver || l.WebKitMutationObserver,
                x = l.document,
                m = l.process,
                S = l.Promise,
                b = u(l, "queueMicrotask"),
                E = b && b.value;
            if (!E) {
                var R = new f(),
                    C = function () {
                        var t, e;
                        for (v && (t = m.domain) && t.exit(); (e = R.get()); )
                            try {
                                e();
                            } catch (t) {
                                throw (R.head && n(), t);
                            }
                        t && t.enter();
                    };
                h || v || y || !g || !x
                    ? !d && S && S.resolve
                        ? (((a = S.resolve(void 0)).constructor = S),
                          (s = c(a.then, a)),
                          (n = function () {
                              s(C);
                          }))
                        : v
                          ? (n = function () {
                                m.nextTick(C);
                            })
                          : ((p = c(p, l)),
                            (n = function () {
                                p(C);
                            }))
                    : ((o = !0),
                      (i = x.createTextNode("")),
                      new g(C).observe(i, { characterData: !0 }),
                      (n = function () {
                          i.data = o = !o;
                      })),
                    (E = function (t) {
                        R.head || n(), R.add(t);
                    });
            }
            t.exports = E;
        },
        916485: (t, e, r) => {
            var n = r(277111),
                o = TypeError,
                i = function (t) {
                    var e, r;
                    (this.promise = new t(function (t, n) {
                        if (void 0 !== e || void 0 !== r) throw new o("Bad Promise constructor");
                        (e = t), (r = n);
                    })),
                        (this.resolve = n(e)),
                        (this.reject = n(r));
                };
            t.exports.f = function (t) {
                return new i(t);
            };
        },
        310166: (t, e, r) => {
            var n = r(427079),
                o = r(910905),
                i = r(778151).f,
                a = r(369794),
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function (t) {
                return s && "Window" === n(t)
                    ? (function (t) {
                          try {
                              return i(t);
                          } catch (t) {
                              return a(s);
                          }
                      })(t)
                    : i(o(t));
            };
        },
        844059: (t, e, r) => {
            var n = r(971601),
                o = r(781589);
            t.exports = n
                ? {}.toString
                : function () {
                      return "[object " + o(this) + "]";
                  };
        },
        664624: (t) => {
            t.exports = function (t) {
                try {
                    return { error: !1, value: t() };
                } catch (t) {
                    return { error: !0, value: t };
                }
            };
        },
        338321: (t, e, r) => {
            var n = r(609859),
                o = r(174473),
                i = r(26733),
                a = r(46541),
                s = r(108511),
                l = r(670095),
                c = r(748639),
                u = r(95189),
                p = r(124231),
                f = r(406358),
                h = o && o.prototype,
                d = l("species"),
                y = !1,
                v = i(n.PromiseRejectionEvent),
                g = a("Promise", function () {
                    var t = s(o),
                        e = t !== String(o);
                    if (!e && 66 === f) return !0;
                    if (p && (!h.catch || !h.finally)) return !0;
                    if (!f || f < 51 || !/native code/.test(t)) {
                        var r = new o(function (t) {
                                t(1);
                            }),
                            n = function (t) {
                                t(
                                    function () {},
                                    function () {},
                                );
                            };
                        if ((((r.constructor = {})[d] = n), !(y = r.then(function () {}) instanceof n))) return !0;
                    }
                    return !e && (c || u) && !v;
                });
            t.exports = { CONSTRUCTOR: g, REJECTION_EVENT: v, SUBCLASSING: y };
        },
        174473: (t, e, r) => {
            var n = r(609859);
            t.exports = n.Promise;
        },
        62391: (t, e, r) => {
            var n = r(821176),
                o = r(685052),
                i = r(916485);
            t.exports = function (t, e) {
                if ((n(t), o(e) && e.constructor === t)) return e;
                var r = i.f(t);
                return (0, r.resolve)(e), r.promise;
            };
        },
        796866: (t, e, r) => {
            var n = r(174473),
                o = r(874575),
                i = r(338321).CONSTRUCTOR;
            t.exports =
                i ||
                !o(function (t) {
                    n.all(t).then(void 0, function () {});
                });
        },
        193358: (t) => {
            var e = function () {
                (this.head = null), (this.tail = null);
            };
            (e.prototype = {
                add: function (t) {
                    var e = { item: t, next: null },
                        r = this.tail;
                    r ? (r.next = e) : (this.head = e), (this.tail = e);
                },
                get: function () {
                    var t = this.head;
                    if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
                },
            }),
                (t.exports = e);
        },
        763466: (t, e, r) => {
            var n,
                o,
                i = r(720266),
                a = r(265968),
                s = r(783326),
                l = r(730895),
                c = r(25650),
                u = r(933036),
                p = r(822391),
                f = r(856407).get,
                h = r(542926),
                d = r(210461),
                y = u("native-string-replace", String.prototype.replace),
                v = RegExp.prototype.exec,
                g = v,
                x = a("".charAt),
                m = a("".indexOf),
                S = a("".replace),
                b = a("".slice),
                E = ((o = /b*/g), i(v, (n = /a/), "a"), i(v, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                R = c.BROKEN_CARET,
                C = void 0 !== /()??/.exec("")[1];
            (E || C || R || h || d) &&
                (g = function (t) {
                    var e,
                        r,
                        n,
                        o,
                        a,
                        c,
                        u,
                        h = this,
                        d = f(h),
                        w = s(t),
                        P = d.raw;
                    if (P) return (P.lastIndex = h.lastIndex), (e = i(g, P, w)), (h.lastIndex = P.lastIndex), e;
                    var _ = d.groups,
                        A = R && h.sticky,
                        I = i(l, h),
                        T = h.source,
                        O = 0,
                        L = w;
                    if (
                        (A && ((I = S(I, "y", "")), -1 === m(I, "g") && (I += "g"), (L = b(w, h.lastIndex)), h.lastIndex > 0 && (!h.multiline || (h.multiline && "\n" !== x(w, h.lastIndex - 1))) && ((T = "(?: " + T + ")"), (L = " " + L), O++), (r = new RegExp("^(?:" + T + ")", I))),
                        C && (r = new RegExp("^" + T + "$(?!\\s)", I)),
                        E && (n = h.lastIndex),
                        (o = i(v, A ? r : h, L)),
                        A ? (o ? ((o.input = b(o.input, O)), (o[0] = b(o[0], O)), (o.index = h.lastIndex), (h.lastIndex += o[0].length)) : (h.lastIndex = 0)) : E && o && (h.lastIndex = h.global ? o.index + o[0].length : n),
                        C &&
                            o &&
                            o.length > 1 &&
                            i(y, o[0], r, function () {
                                for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0);
                            }),
                        o && _)
                    )
                        for (o.groups = c = p(null), a = 0; a < _.length; a++) c[(u = _[a])[0]] = o[u[1]];
                    return o;
                }),
                (t.exports = g);
        },
        683349: (t, e, r) => {
            var n = r(720266),
                o = r(198270),
                i = r(291321),
                a = r(730895),
                s = RegExp.prototype;
            t.exports = function (t) {
                var e = t.flags;
                return void 0 !== e || "flags" in s || o(t, "flags") || !i(s, t) ? e : n(a, t);
            };
        },
        25650: (t, e, r) => {
            var n = r(824229),
                o = r(609859).RegExp,
                i = n(function () {
                    var t = o("a", "y");
                    return (t.lastIndex = 2), null !== t.exec("abcd");
                }),
                a =
                    i ||
                    n(function () {
                        return !o("a", "y").sticky;
                    }),
                s =
                    i ||
                    n(function () {
                        var t = o("^r", "gy");
                        return (t.lastIndex = 2), null !== t.exec("str");
                    });
            t.exports = { BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: i };
        },
        542926: (t, e, r) => {
            var n = r(824229),
                o = r(609859).RegExp;
            t.exports = n(function () {
                var t = o(".", "s");
                return !(t.dotAll && t.test("\n") && "s" === t.flags);
            });
        },
        210461: (t, e, r) => {
            var n = r(824229),
                o = r(609859).RegExp;
            t.exports = n(function () {
                var t = o("(?<a>b)", "g");
                return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
            });
        },
        324752: (t, e, r) => {
            var n,
                o = r(609859),
                i = r(653171),
                a = r(26733),
                s = r(737995),
                l = r(180598),
                c = r(1909),
                u = r(977579),
                p = o.Function,
                f = /MSIE .\./.test(l) || (s && ((n = o.Bun.version.split(".")).length < 3 || ("0" === n[0] && (n[1] < 3 || ("3" === n[1] && "0" === n[2])))));
            t.exports = function (t, e) {
                var r = e ? 2 : 1;
                return f
                    ? function (n, o) {
                          var s = u(arguments.length, 1) > r,
                              l = a(n) ? n : p(n),
                              f = s ? c(arguments, r) : [],
                              h = s
                                  ? function () {
                                        i(l, this, f);
                                    }
                                  : l;
                          return e ? t(h, o) : t(h);
                      }
                    : t;
            };
        },
        971832: (t, e, r) => {
            var n = r(431333),
                o = r(396616),
                i = r(670095),
                a = r(807400),
                s = i("species");
            t.exports = function (t) {
                var e = n(t);
                a &&
                    e &&
                    !e[s] &&
                    o(e, s, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        954555: (t, e, r) => {
            var n = r(931787).f,
                o = r(198270),
                i = r(670095)("toStringTag");
            t.exports = function (t, e, r) {
                t && !r && (t = t.prototype), t && !o(t, i) && n(t, i, { configurable: !0, value: e });
            };
        },
        137942: (t, e, r) => {
            var n = r(821176),
                o = r(557988),
                i = r(209650),
                a = r(670095)("species");
            t.exports = function (t, e) {
                var r,
                    s = n(t).constructor;
                return void 0 === s || i((r = n(s)[a])) ? e : o(r);
            };
        },
        630966: (t, e, r) => {
            var n = r(265968),
                o = r(643329),
                i = r(783326),
                a = r(558885),
                s = n("".charAt),
                l = n("".charCodeAt),
                c = n("".slice),
                u = function (t) {
                    return function (e, r) {
                        var n,
                            u,
                            p = i(a(e)),
                            f = o(r),
                            h = p.length;
                        return f < 0 || f >= h ? (t ? "" : void 0) : (n = l(p, f)) < 55296 || n > 56319 || f + 1 === h || (u = l(p, f + 1)) < 56320 || u > 57343 ? (t ? s(p, f) : n) : t ? c(p, f, f + 2) : u - 56320 + ((n - 55296) << 10) + 65536;
                    };
                };
            t.exports = { codeAt: u(!1), charAt: u(!0) };
        },
        566481: (t, e, r) => {
            var n = r(720266),
                o = r(431333),
                i = r(670095),
                a = r(914768);
            t.exports = function () {
                var t = o("Symbol"),
                    e = t && t.prototype,
                    r = e && e.valueOf,
                    s = i("toPrimitive");
                e &&
                    !e[s] &&
                    a(
                        e,
                        s,
                        function (t) {
                            return n(r, this);
                        },
                        { arity: 1 },
                    );
            };
        },
        455957: (t, e, r) => {
            var n = r(144860);
            t.exports = n && !!Symbol.for && !!Symbol.keyFor;
        },
        155795: (t, e, r) => {
            var n,
                o,
                i,
                a,
                s = r(609859),
                l = r(653171),
                c = r(497636),
                u = r(26733),
                p = r(198270),
                f = r(824229),
                h = r(53777),
                d = r(1909),
                y = r(522635),
                v = r(977579),
                g = r(232023),
                x = r(128801),
                m = s.setImmediate,
                S = s.clearImmediate,
                b = s.process,
                E = s.Dispatch,
                R = s.Function,
                C = s.MessageChannel,
                w = s.String,
                P = 0,
                _ = {},
                A = "onreadystatechange";
            f(function () {
                n = s.location;
            });
            var I = function (t) {
                    if (p(_, t)) {
                        var e = _[t];
                        delete _[t], e();
                    }
                },
                T = function (t) {
                    return function () {
                        I(t);
                    };
                },
                O = function (t) {
                    I(t.data);
                },
                L = function (t) {
                    s.postMessage(w(t), n.protocol + "//" + n.host);
                };
            (m && S) ||
                ((m = function (t) {
                    v(arguments.length, 1);
                    var e = u(t) ? t : R(t),
                        r = d(arguments, 1);
                    return (
                        (_[++P] = function () {
                            l(e, void 0, r);
                        }),
                        o(P),
                        P
                    );
                }),
                (S = function (t) {
                    delete _[t];
                }),
                x
                    ? (o = function (t) {
                          b.nextTick(T(t));
                      })
                    : E && E.now
                      ? (o = function (t) {
                            E.now(T(t));
                        })
                      : C && !g
                        ? ((a = (i = new C()).port2), (i.port1.onmessage = O), (o = c(a.postMessage, a)))
                        : s.addEventListener && u(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !f(L)
                          ? ((o = L), s.addEventListener("message", O, !1))
                          : (o =
                                A in y("script")
                                    ? function (t) {
                                          h.appendChild(y("script"))[A] = function () {
                                              h.removeChild(this), I(t);
                                          };
                                      }
                                    : function (t) {
                                          setTimeout(T(t), 0);
                                      })),
                (t.exports = { set: m, clear: S });
        },
        863524: (t, e, r) => {
            var n = r(849276),
                o = r(198270),
                i = r(355391),
                a = r(931787).f;
            t.exports = function (t) {
                var e = n.Symbol || (n.Symbol = {});
                o(e, t) || a(e, t, { value: i.f(t) });
            };
        },
        355391: (t, e, r) => {
            var n = r(670095);
            e.f = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~ondemand.InlinePlayer~bundle.DockPeek~bundle.LiveEvent~loader.AudioOnlyVideoPlaye-5563f741.917d5bba.js.map
