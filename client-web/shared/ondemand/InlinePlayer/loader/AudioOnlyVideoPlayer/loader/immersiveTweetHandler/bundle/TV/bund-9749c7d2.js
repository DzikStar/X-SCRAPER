"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"],
    {
        738584: (t, e, r) => {
            r.d(e, { o: () => h, Z: () => y });
            var n = r(807896),
                o = r(202784),
                i = r(928316),
                a = r(682474),
                s = r(392237),
                u = r(893164),
                c = r(395367),
                l = r(908478);
            function p(t) {
                let e = f(t);
                return (t) => {
                    const r = f(t);
                    return (0, l.Z)(e, r) || (e = r), e;
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
                        { additionalBadges: s, aspectRatio: l, basePlayerClass: p, children: f, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: y, objectFitVideo: x, onApiReady: g, onScroll: S, onStateUpdate: m, playerId: b, size: R, ...w } = this.props,
                        P = { aspectRatio: this.props.aspectRatio, guestsState: t, playerApi: e, playerState: r, containerRef: this._containerRef },
                        C = { ...P, playerState: i };
                    return o.createElement(
                        a.Z,
                        { isFullScreen: y, onScroll: S, ratio: l, style: [v.root, v[R]] },
                        this.state.hasError
                            ? o.createElement(u.Z, { onReloadPress: this._handleReload })
                            : o.createElement(
                                  d.Context.Provider,
                                  { value: C },
                                  o.createElement(
                                      d.PeriodicContext.Provider,
                                      { value: P },
                                      o.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: t }) => o.createElement(p, (0, n.Z)({}, w, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: x }, setPlayerApi: this._handlePlayerApi(t) }))),
                                  ),
                              ),
                    );
                }
            }
            (d.Consumer = h), (d.defaultProps = { aspectRatio: s.default.theme.aspectRatios.landscape, size: "fill" }), (d.Context = o.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (d.PeriodicContext = o.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const v = s.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                y = d;
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
                u = r(782359),
                c = r(639646),
                l = r(462324),
                p = r(928403),
                f = r(478830),
                h = Array;
            t.exports = function (t) {
                var e = i(t),
                    r = u(this),
                    d = arguments.length,
                    v = d > 1 ? arguments[1] : void 0,
                    y = void 0 !== v;
                y && (v = n(v, d > 2 ? arguments[2] : void 0));
                var x,
                    g,
                    S,
                    m,
                    b,
                    R,
                    w = f(e),
                    P = 0;
                if (!w || (this === h && s(w))) for (x = c(e), g = r ? new this(x) : h(x); x > P; P++) (R = y ? v(e[P], P) : e[P]), l(g, P, R);
                else for (b = (m = p(e, w)).next, g = r ? new this() : []; !(S = o(b, m)).done; P++) (R = y ? a(m, v, [S.value, P], !0) : S.value), l(g, P, R);
                return (g.length = P), g;
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
                u = r(357188),
                c = Function,
                l = n([].concat),
                p = n([].join),
                f = {};
            t.exports = u
                ? c.bind
                : function (t) {
                      var e = o(this),
                          r = e.prototype,
                          n = s(arguments, 1),
                          u = function () {
                              var r = l(n, s(arguments));
                              return this instanceof u
                                  ? (function (t, e, r) {
                                        if (!a(f, e)) {
                                            for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
                                            f[e] = c("C,a", "return new C(" + p(n, ",") + ")");
                                        }
                                        return f[e](t, r);
                                    })(e, r.length, r)
                                  : e.apply(t, r);
                          };
                      return i(r) && (u.prototype = r), u;
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
                u = TypeError;
            t.exports = function (t, e) {
                var r = arguments.length < 2 ? s(t) : e;
                if (o(r)) return i(n(r, t));
                throw new u(a(t) + " is not iterable");
            };
        },
        44231: (t, e, r) => {
            var n = r(265968),
                o = r(33718),
                i = r(26733),
                a = r(427079),
                s = r(783326),
                u = n([].push);
            t.exports = function (t) {
                if (i(t)) return t;
                if (o(t)) {
                    for (var e = t.length, r = [], n = 0; n < e; n++) {
                        var c = t[n];
                        "string" == typeof c ? u(r, c) : ("number" != typeof c && "Number" !== a(c) && "String" !== a(c)) || u(r, s(c));
                    }
                    var l = r.length,
                        p = !0;
                    return function (t, e) {
                        if (p) return (p = !1), e;
                        if (o(this)) return e;
                        for (var n = 0; n < l; n++) if (r[n] === t) return e;
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
                u = r(639646),
                c = r(291321),
                l = r(928403),
                p = r(478830),
                f = r(257281),
                h = TypeError,
                d = function (t, e) {
                    (this.stopped = t), (this.result = e);
                },
                v = d.prototype;
            t.exports = function (t, e, r) {
                var y,
                    x,
                    g,
                    S,
                    m,
                    b,
                    R,
                    w = r && r.that,
                    P = !(!r || !r.AS_ENTRIES),
                    C = !(!r || !r.IS_RECORD),
                    E = !(!r || !r.IS_ITERATOR),
                    _ = !(!r || !r.INTERRUPTED),
                    A = n(e, w),
                    T = function (t) {
                        return y && f(y, "normal", t), new d(!0, t);
                    },
                    I = function (t) {
                        return P ? (i(t), _ ? A(t[0], t[1], T) : A(t[0], t[1])) : _ ? A(t, T) : A(t);
                    };
                if (C) y = t.iterator;
                else if (E) y = t;
                else {
                    if (!(x = p(t))) throw new h(a(t) + " is not iterable");
                    if (s(x)) {
                        for (g = 0, S = u(t); S > g; g++) if ((m = I(t[g])) && c(v, m)) return m;
                        return new d(!1);
                    }
                    y = l(t, x);
                }
                for (b = C ? t.next : y.next; !(R = o(b, y)).done; ) {
                    try {
                        m = I(R.value);
                    } catch (t) {
                        f(y, "throw", t);
                    }
                    if ("object" == typeof m && m && c(v, m)) return m;
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
                u = function () {
                    return this;
                };
            t.exports = function (t, e, r, c) {
                var l = e + " Iterator";
                return (t.prototype = o(n, { next: i(+!c, r) })), a(t, l, !1, !0), (s[l] = u), t;
            };
        },
        712707: (t, e, r) => {
            var n = r(23103),
                o = r(720266),
                i = r(124231),
                a = r(951805),
                s = r(26733),
                u = r(42247),
                c = r(567567),
                l = r(956540),
                p = r(954555),
                f = r(675762),
                h = r(914768),
                d = r(670095),
                v = r(545495),
                y = r(360693),
                x = a.PROPER,
                g = a.CONFIGURABLE,
                S = y.IteratorPrototype,
                m = y.BUGGY_SAFARI_ITERATORS,
                b = d("iterator"),
                R = "keys",
                w = "values",
                P = "entries",
                C = function () {
                    return this;
                };
            t.exports = function (t, e, r, a, d, y, E) {
                u(r, e, a);
                var _,
                    A,
                    T,
                    I = function (t) {
                        if (t === d && k) return k;
                        if (!m && t && t in M) return M[t];
                        switch (t) {
                            case R:
                            case w:
                            case P:
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
                    N = M[b] || M["@@iterator"] || (d && M[d]),
                    k = (!m && N) || I(d),
                    D = ("Array" === e && M.entries) || N;
                if (
                    (D && (_ = c(D.call(new t()))) !== Object.prototype && _.next && (i || c(_) === S || (l ? l(_, S) : s(_[b]) || h(_, b, C)), p(_, O, !0, !0), i && (v[O] = C)),
                    x &&
                        d === w &&
                        N &&
                        N.name !== w &&
                        (!i && g
                            ? f(M, "name", w)
                            : ((L = !0),
                              (k = function () {
                                  return o(N, this);
                              }))),
                    d)
                )
                    if (((A = { values: I(w), keys: y ? k : I(R), entries: I(P) }), E)) for (T in A) (m || L || !(T in M)) && h(M, T, A[T]);
                    else n({ target: e, proto: !0, forced: m || L }, A);
                return (i && !E) || M[b] === k || h(M, b, k, { name: d }), (v[e] = k), A;
            };
        },
        360693: (t, e, r) => {
            var n,
                o,
                i,
                a = r(824229),
                s = r(26733),
                u = r(685052),
                c = r(822391),
                l = r(567567),
                p = r(914768),
                f = r(670095),
                h = r(124231),
                d = f("iterator"),
                v = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = l(l(i))) !== Object.prototype && (n = o) : (v = !0)),
                !u(n) ||
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
                (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: v });
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
                u = r(609859),
                c = r(497636),
                l = r(997933).f,
                p = r(155795).set,
                f = r(193358),
                h = r(232023),
                d = r(308983),
                v = r(610263),
                y = r(128801),
                x = u.MutationObserver || u.WebKitMutationObserver,
                g = u.document,
                S = u.process,
                m = u.Promise,
                b = l(u, "queueMicrotask"),
                R = b && b.value;
            if (!R) {
                var w = new f(),
                    P = function () {
                        var t, e;
                        for (y && (t = S.domain) && t.exit(); (e = w.get()); )
                            try {
                                e();
                            } catch (t) {
                                throw (w.head && n(), t);
                            }
                        t && t.enter();
                    };
                h || y || v || !x || !g
                    ? !d && m && m.resolve
                        ? (((a = m.resolve(void 0)).constructor = m),
                          (s = c(a.then, a)),
                          (n = function () {
                              s(P);
                          }))
                        : y
                          ? (n = function () {
                                S.nextTick(P);
                            })
                          : ((p = c(p, u)),
                            (n = function () {
                                p(P);
                            }))
                    : ((o = !0),
                      (i = g.createTextNode("")),
                      new x(P).observe(i, { characterData: !0 }),
                      (n = function () {
                          i.data = o = !o;
                      })),
                    (R = function (t) {
                        w.head || n(), w.add(t);
                    });
            }
            t.exports = R;
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
                u = r(670095),
                c = r(748639),
                l = r(95189),
                p = r(124231),
                f = r(406358),
                h = o && o.prototype,
                d = u("species"),
                v = !1,
                y = i(n.PromiseRejectionEvent),
                x = a("Promise", function () {
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
                        if ((((r.constructor = {})[d] = n), !(v = r.then(function () {}) instanceof n))) return !0;
                    }
                    return !e && (c || l) && !y;
                });
            t.exports = { CONSTRUCTOR: x, REJECTION_EVENT: y, SUBCLASSING: v };
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
                u = r(730895),
                c = r(25650),
                l = r(933036),
                p = r(822391),
                f = r(856407).get,
                h = r(542926),
                d = r(210461),
                v = l("native-string-replace", String.prototype.replace),
                y = RegExp.prototype.exec,
                x = y,
                g = a("".charAt),
                S = a("".indexOf),
                m = a("".replace),
                b = a("".slice),
                R = ((o = /b*/g), i(y, (n = /a/), "a"), i(y, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                w = c.BROKEN_CARET,
                P = void 0 !== /()??/.exec("")[1];
            (R || P || w || h || d) &&
                (x = function (t) {
                    var e,
                        r,
                        n,
                        o,
                        a,
                        c,
                        l,
                        h = this,
                        d = f(h),
                        C = s(t),
                        E = d.raw;
                    if (E) return (E.lastIndex = h.lastIndex), (e = i(x, E, C)), (h.lastIndex = E.lastIndex), e;
                    var _ = d.groups,
                        A = w && h.sticky,
                        T = i(u, h),
                        I = h.source,
                        O = 0,
                        L = C;
                    if (
                        (A && ((T = m(T, "y", "")), -1 === S(T, "g") && (T += "g"), (L = b(C, h.lastIndex)), h.lastIndex > 0 && (!h.multiline || (h.multiline && "\n" !== g(C, h.lastIndex - 1))) && ((I = "(?: " + I + ")"), (L = " " + L), O++), (r = new RegExp("^(?:" + I + ")", T))),
                        P && (r = new RegExp("^" + I + "$(?!\\s)", T)),
                        R && (n = h.lastIndex),
                        (o = i(y, A ? r : h, L)),
                        A ? (o ? ((o.input = b(o.input, O)), (o[0] = b(o[0], O)), (o.index = h.lastIndex), (h.lastIndex += o[0].length)) : (h.lastIndex = 0)) : R && o && (h.lastIndex = h.global ? o.index + o[0].length : n),
                        P &&
                            o &&
                            o.length > 1 &&
                            i(v, o[0], r, function () {
                                for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0);
                            }),
                        o && _)
                    )
                        for (o.groups = c = p(null), a = 0; a < _.length; a++) c[(l = _[a])[0]] = o[l[1]];
                    return o;
                }),
                (t.exports = x);
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
                u = r(180598),
                c = r(1909),
                l = r(977579),
                p = o.Function,
                f = /MSIE .\./.test(u) || (s && ((n = o.Bun.version.split(".")).length < 3 || ("0" === n[0] && (n[1] < 3 || ("3" === n[1] && "0" === n[2])))));
            t.exports = function (t, e) {
                var r = e ? 2 : 1;
                return f
                    ? function (n, o) {
                          var s = l(arguments.length, 1) > r,
                              u = a(n) ? n : p(n),
                              f = s ? c(arguments, r) : [],
                              h = s
                                  ? function () {
                                        i(u, this, f);
                                    }
                                  : u;
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
                u = n("".charCodeAt),
                c = n("".slice),
                l = function (t) {
                    return function (e, r) {
                        var n,
                            l,
                            p = i(a(e)),
                            f = o(r),
                            h = p.length;
                        return f < 0 || f >= h ? (t ? "" : void 0) : (n = u(p, f)) < 55296 || n > 56319 || f + 1 === h || (l = u(p, f + 1)) < 56320 || l > 57343 ? (t ? s(p, f) : n) : t ? c(p, f, f + 2) : l - 56320 + ((n - 55296) << 10) + 65536;
                    };
                };
            t.exports = { codeAt: l(!1), charAt: l(!0) };
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
                u = r(653171),
                c = r(497636),
                l = r(26733),
                p = r(198270),
                f = r(824229),
                h = r(53777),
                d = r(1909),
                v = r(522635),
                y = r(977579),
                x = r(232023),
                g = r(128801),
                S = s.setImmediate,
                m = s.clearImmediate,
                b = s.process,
                R = s.Dispatch,
                w = s.Function,
                P = s.MessageChannel,
                C = s.String,
                E = 0,
                _ = {},
                A = "onreadystatechange";
            f(function () {
                n = s.location;
            });
            var T = function (t) {
                    if (p(_, t)) {
                        var e = _[t];
                        delete _[t], e();
                    }
                },
                I = function (t) {
                    return function () {
                        T(t);
                    };
                },
                O = function (t) {
                    T(t.data);
                },
                L = function (t) {
                    s.postMessage(C(t), n.protocol + "//" + n.host);
                };
            (S && m) ||
                ((S = function (t) {
                    y(arguments.length, 1);
                    var e = l(t) ? t : w(t),
                        r = d(arguments, 1);
                    return (
                        (_[++E] = function () {
                            u(e, void 0, r);
                        }),
                        o(E),
                        E
                    );
                }),
                (m = function (t) {
                    delete _[t];
                }),
                g
                    ? (o = function (t) {
                          b.nextTick(I(t));
                      })
                    : R && R.now
                      ? (o = function (t) {
                            R.now(I(t));
                        })
                      : P && !x
                        ? ((a = (i = new P()).port2), (i.port1.onmessage = O), (o = c(a.postMessage, a)))
                        : s.addEventListener && l(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !f(L)
                          ? ((o = L), s.addEventListener("message", O, !1))
                          : (o =
                                A in v("script")
                                    ? function (t) {
                                          h.appendChild(v("script"))[A] = function () {
                                              h.removeChild(this), T(t);
                                          };
                                      }
                                    : function (t) {
                                          setTimeout(I(t), 0);
                                      })),
                (t.exports = { set: S, clear: m });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2.0525e45a.js.map
