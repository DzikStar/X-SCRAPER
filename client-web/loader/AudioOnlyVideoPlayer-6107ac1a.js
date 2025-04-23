"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioOnlyVideoPlayer-6107ac1a"],
    {
        738584: (t, e, r) => {
            r.d(e, { o: () => h, Z: () => y });
            var n = r(807896),
                o = r(202784),
                i = r(928316),
                a = r(682474),
                s = r(392237),
                c = r(893164),
                u = r(395367),
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
                        { additionalBadges: s, aspectRatio: l, basePlayerClass: p, children: f, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: y, objectFitVideo: g, onApiReady: x, onScroll: m, onStateUpdate: b, playerId: S, size: E, ...R } = this.props,
                        w = { aspectRatio: this.props.aspectRatio, guestsState: t, playerApi: e, playerState: r, containerRef: this._containerRef },
                        C = { ...w, playerState: i };
                    return o.createElement(
                        a.Z,
                        { isFullScreen: y, onScroll: m, ratio: l, style: [v.root, v[E]] },
                        this.state.hasError
                            ? o.createElement(c.Z, { onReloadPress: this._handleReload })
                            : o.createElement(
                                  d.Context.Provider,
                                  { value: C },
                                  o.createElement(
                                      d.PeriodicContext.Provider,
                                      { value: w },
                                      o.createElement(u.Z.RegistrationContext.Consumer, null, ({ registerPlayer: t }) => o.createElement(p, (0, n.Z)({}, R, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: g }, setPlayerApi: this._handlePlayerApi(t) }))),
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
        893164: (t, e, r) => {
            r.d(e, { Z: () => h });
            var n = r(202784),
                o = r(325686),
                i = r(674132),
                a = r.n(i),
                s = r(355830),
                c = r(731708),
                u = r(154003),
                l = r(992942),
                p = r(392237);
            const f = a().a9edea48;
            function h(t) {
                const { displayBackgroundImage: e = !1, errorMessage: r, iconPlayError: i, imageSrc: a, onReloadPress: h } = t;
                return n.createElement(o.Z, { style: [p.default.absoluteFill, e ? null : d.blankOverlay] }, e ? n.createElement(n.Fragment, null, n.createElement(o.Z, { style: d.backgroundImage }, a && n.createElement(l.Z, { resizeMode: "cover", source: a, style: p.default.absoluteFill })), n.createElement(o.Z, { style: d.overlay })) : null, n.createElement(o.Z, { style: d.errorContainer }, n.createElement(o.Z, null, i ? n.createElement(s.default, { style: d.playErrorIcon }) : null), n.createElement(o.Z, { focusable: !0 }, n.createElement(c.ZP, { style: e ? d.errorMsgTextWhite : d.errorMsgTextGray }, r)), h ? n.createElement(u.ZP, { onPress: h, style: d.buttonContainer, type: "brandFilled" }, f) : null));
            }
            const d = p.default.create((t) => ({ backgroundImage: { ...p.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...p.default.absoluteFillObject, backgroundColor: t.colors.translucentBlack77 }, blankOverlay: { backgroundColor: t.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: t.spaces.space32 }, errorMsgTextWhite: { color: t.colors.white, textAlign: "center", marginBottom: t.spaces.space20 }, errorMsgTextGray: { color: t.colors.gray700, textAlign: "center", marginBottom: t.spaces.space20 }, playErrorIcon: { fill: t.colors.gray700, height: t.spaces.space48, width: t.spaces.space48, marginHorizontal: "auto", paddingBottom: t.spaces.space20, verticalAlign: "middle" } }));
        },
        411240: (t, e, r) => {
            r.d(e, { Z: () => n });
            const n = (t, e) => {
                if (0 === t.length) return;
                let r = t[0],
                    n = e(r);
                for (let o = 1; o < t.length; o++) {
                    const i = t[o],
                        a = e(i);
                    a < n && ((r = i), (n = a));
                }
                return r;
            };
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
                c = r(782359),
                u = r(639646),
                l = r(462324),
                p = r(928403),
                f = r(478830),
                h = Array;
            t.exports = function (t) {
                var e = i(t),
                    r = c(this),
                    d = arguments.length,
                    v = d > 1 ? arguments[1] : void 0,
                    y = void 0 !== v;
                y && (v = n(v, d > 2 ? arguments[2] : void 0));
                var g,
                    x,
                    m,
                    b,
                    S,
                    E,
                    R = f(e),
                    w = 0;
                if (!R || (this === h && s(R))) for (g = u(e), x = r ? new this(g) : h(g); g > w; w++) (E = y ? v(e[w], w) : e[w]), l(x, w, E);
                else for (S = (b = p(e, R)).next, x = r ? new this() : []; !(m = o(S, b)).done; w++) (E = y ? a(b, v, [m.value, w], !0) : m.value), l(x, w, E);
                return (x.length = w), x;
            };
        },
        689996: (t, e, r) => {
            var n = r(497636),
                o = r(265968),
                i = r(409337),
                a = r(492991),
                s = r(639646),
                c = r(387501),
                u = o([].push),
                l = function (t) {
                    var e = 1 === t,
                        r = 2 === t,
                        o = 3 === t,
                        l = 4 === t,
                        p = 6 === t,
                        f = 7 === t,
                        h = 5 === t || p;
                    return function (d, v, y, g) {
                        for (var x, m, b = a(d), S = i(b), E = n(v, y), R = s(S), w = 0, C = g || c, P = e ? C(d, R) : r || f ? C(d, 0) : void 0; R > w; w++)
                            if ((h || w in S) && ((m = E((x = S[w]), w, b)), t))
                                if (e) P[w] = m;
                                else if (m)
                                    switch (t) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return x;
                                        case 6:
                                            return w;
                                        case 2:
                                            u(P, x);
                                    }
                                else
                                    switch (t) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            u(P, x);
                                    }
                        return p ? -1 : o || l ? l : P;
                    };
                };
            t.exports = { forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6), filterReject: l(7) };
        },
        331460: (t, e, r) => {
            var n = r(824229),
                o = r(670095),
                i = r(406358),
                a = o("species");
            t.exports = function (t) {
                return (
                    i >= 51 ||
                    !n(function () {
                        var e = [];
                        return (
                            ((e.constructor = {})[a] = function () {
                                return { foo: 1 };
                            }),
                            1 !== e[t](Boolean).foo
                        );
                    })
                );
            };
        },
        696038: (t, e, r) => {
            var n = r(824229);
            t.exports = function (t, e) {
                var r = [][t];
                return (
                    !!r &&
                    n(function () {
                        r.call(
                            null,
                            e ||
                                function () {
                                    return 1;
                                },
                            1,
                        );
                    })
                );
            };
        },
        43143: (t, e, r) => {
            var n = r(277111),
                o = r(492991),
                i = r(409337),
                a = r(639646),
                s = TypeError,
                c = function (t) {
                    return function (e, r, c, u) {
                        n(r);
                        var l = o(e),
                            p = i(l),
                            f = a(l),
                            h = t ? f - 1 : 0,
                            d = t ? -1 : 1;
                        if (c < 2)
                            for (;;) {
                                if (h in p) {
                                    (u = p[h]), (h += d);
                                    break;
                                }
                                if (((h += d), t ? h < 0 : f <= h)) throw new s("Reduce of empty array with no initial value");
                            }
                        for (; t ? h >= 0 : f > h; h += d) h in p && (u = r(u, p[h], h, l));
                        return u;
                    };
                };
            t.exports = { left: c(!1), right: c(!0) };
        },
        1909: (t, e, r) => {
            var n = r(265968);
            t.exports = n([].slice);
        },
        118760: (t, e, r) => {
            var n = r(33718),
                o = r(782359),
                i = r(685052),
                a = r(670095)("species"),
                s = Array;
            t.exports = function (t) {
                var e;
                return n(t) && ((e = t.constructor), ((o(e) && (e === s || n(e.prototype))) || (i(e) && null === (e = e[a]))) && (e = void 0)), void 0 === e ? s : e;
            };
        },
        387501: (t, e, r) => {
            var n = r(118760);
            t.exports = function (t, e) {
                return new (n(t))(0 === e ? 0 : e);
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
        128801: (t, e, r) => {
            var n = r(609859),
                o = r(427079);
            t.exports = "process" === o(n.process);
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
                c = r(357188),
                u = Function,
                l = n([].concat),
                p = n([].join),
                f = {};
            t.exports = c
                ? u.bind
                : function (t) {
                      var e = o(this),
                          r = e.prototype,
                          n = s(arguments, 1),
                          c = function () {
                              var r = l(n, s(arguments));
                              return this instanceof c
                                  ? (function (t, e, r) {
                                        if (!a(f, e)) {
                                            for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
                                            f[e] = u("C,a", "return new C(" + p(n, ",") + ")");
                                        }
                                        return f[e](t, r);
                                    })(e, r.length, r)
                                  : e.apply(t, r);
                          };
                      return i(r) && (c.prototype = r), c;
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
                c = TypeError;
            t.exports = function (t, e) {
                var r = arguments.length < 2 ? s(t) : e;
                if (o(r)) return i(n(r, t));
                throw new c(a(t) + " is not iterable");
            };
        },
        44231: (t, e, r) => {
            var n = r(265968),
                o = r(33718),
                i = r(26733),
                a = r(427079),
                s = r(783326),
                c = n([].push);
            t.exports = function (t) {
                if (i(t)) return t;
                if (o(t)) {
                    for (var e = t.length, r = [], n = 0; n < e; n++) {
                        var u = t[n];
                        "string" == typeof u ? c(r, u) : ("number" != typeof u && "Number" !== a(u) && "String" !== a(u)) || c(r, s(u));
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
        782359: (t, e, r) => {
            var n = r(265968),
                o = r(824229),
                i = r(26733),
                a = r(781589),
                s = r(431333),
                c = r(108511),
                u = function () {},
                l = [],
                p = s("Reflect", "construct"),
                f = /^\s*(?:class|function)\b/,
                h = n(f.exec),
                d = !f.test(u),
                v = function (t) {
                    if (!i(t)) return !1;
                    try {
                        return p(u, l, t), !0;
                    } catch (t) {
                        return !1;
                    }
                },
                y = function (t) {
                    if (!i(t)) return !1;
                    switch (a(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return d || !!h(f, c(t));
                    } catch (t) {
                        return !0;
                    }
                };
            (y.sham = !0),
                (t.exports =
                    !p ||
                    o(function () {
                        var t;
                        return (
                            v(v.call) ||
                            !v(Object) ||
                            !v(function () {
                                t = !0;
                            }) ||
                            t
                        );
                    })
                        ? y
                        : v);
        },
        789003: (t, e, r) => {
            var n = r(497636),
                o = r(720266),
                i = r(821176),
                a = r(659821),
                s = r(991943),
                c = r(639646),
                u = r(291321),
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
                    g,
                    x,
                    m,
                    b,
                    S,
                    E,
                    R = r && r.that,
                    w = !(!r || !r.AS_ENTRIES),
                    C = !(!r || !r.IS_RECORD),
                    P = !(!r || !r.IS_ITERATOR),
                    A = !(!r || !r.INTERRUPTED),
                    _ = n(e, R),
                    I = function (t) {
                        return y && f(y, "normal", t), new d(!0, t);
                    },
                    T = function (t) {
                        return w ? (i(t), A ? _(t[0], t[1], I) : _(t[0], t[1])) : A ? _(t, I) : _(t);
                    };
                if (C) y = t.iterator;
                else if (P) y = t;
                else {
                    if (!(g = p(t))) throw new h(a(t) + " is not iterable");
                    if (s(g)) {
                        for (x = 0, m = c(t); m > x; x++) if ((b = T(t[x])) && u(v, b)) return b;
                        return new d(!1);
                    }
                    y = l(t, g);
                }
                for (S = C ? t.next : y.next; !(E = o(S, y)).done; ) {
                    try {
                        b = T(E.value);
                    } catch (t) {
                        f(y, "throw", t);
                    }
                    if ("object" == typeof b && b && u(v, b)) return b;
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
                c = function () {
                    return this;
                };
            t.exports = function (t, e, r, u) {
                var l = e + " Iterator";
                return (t.prototype = o(n, { next: i(+!u, r) })), a(t, l, !1, !0), (s[l] = c), t;
            };
        },
        712707: (t, e, r) => {
            var n = r(23103),
                o = r(720266),
                i = r(124231),
                a = r(951805),
                s = r(26733),
                c = r(42247),
                u = r(567567),
                l = r(956540),
                p = r(954555),
                f = r(675762),
                h = r(914768),
                d = r(670095),
                v = r(545495),
                y = r(360693),
                g = a.PROPER,
                x = a.CONFIGURABLE,
                m = y.IteratorPrototype,
                b = y.BUGGY_SAFARI_ITERATORS,
                S = d("iterator"),
                E = "keys",
                R = "values",
                w = "entries",
                C = function () {
                    return this;
                };
            t.exports = function (t, e, r, a, d, y, P) {
                c(r, e, a);
                var A,
                    _,
                    I,
                    T = function (t) {
                        if (t === d && j) return j;
                        if (!b && t && t in M) return M[t];
                        switch (t) {
                            case E:
                            case R:
                            case w:
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
                    k = M[S] || M["@@iterator"] || (d && M[d]),
                    j = (!b && k) || T(d),
                    F = ("Array" === e && M.entries) || k;
                if (
                    (F && (A = u(F.call(new t()))) !== Object.prototype && A.next && (i || u(A) === m || (l ? l(A, m) : s(A[S]) || h(A, S, C)), p(A, O, !0, !0), i && (v[O] = C)),
                    g &&
                        d === R &&
                        k &&
                        k.name !== R &&
                        (!i && x
                            ? f(M, "name", R)
                            : ((L = !0),
                              (j = function () {
                                  return o(k, this);
                              }))),
                    d)
                )
                    if (((_ = { values: T(R), keys: y ? j : T(E), entries: T(w) }), P)) for (I in _) (b || L || !(I in M)) && h(M, I, _[I]);
                    else n({ target: e, proto: !0, forced: b || L }, _);
                return (i && !P) || M[S] === j || h(M, S, j, { name: d }), (v[e] = j), _;
            };
        },
        360693: (t, e, r) => {
            var n,
                o,
                i,
                a = r(824229),
                s = r(26733),
                c = r(685052),
                u = r(822391),
                l = r(567567),
                p = r(914768),
                f = r(670095),
                h = r(124231),
                d = f("iterator"),
                v = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = l(l(i))) !== Object.prototype && (n = o) : (v = !0)),
                !c(n) ||
                a(function () {
                    var t = {};
                    return n[d].call(t) !== t;
                })
                    ? (n = {})
                    : h && (n = u(n)),
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
                c = r(609859),
                u = r(497636),
                l = r(997933).f,
                p = r(155795).set,
                f = r(193358),
                h = r(232023),
                d = r(308983),
                v = r(610263),
                y = r(128801),
                g = c.MutationObserver || c.WebKitMutationObserver,
                x = c.document,
                m = c.process,
                b = c.Promise,
                S = l(c, "queueMicrotask"),
                E = S && S.value;
            if (!E) {
                var R = new f(),
                    w = function () {
                        var t, e;
                        for (y && (t = m.domain) && t.exit(); (e = R.get()); )
                            try {
                                e();
                            } catch (t) {
                                throw (R.head && n(), t);
                            }
                        t && t.enter();
                    };
                h || y || v || !g || !x
                    ? !d && b && b.resolve
                        ? (((a = b.resolve(void 0)).constructor = b),
                          (s = u(a.then, a)),
                          (n = function () {
                              s(w);
                          }))
                        : y
                          ? (n = function () {
                                m.nextTick(w);
                            })
                          : ((p = u(p, c)),
                            (n = function () {
                                p(w);
                            }))
                    : ((o = !0),
                      (i = x.createTextNode("")),
                      new g(w).observe(i, { characterData: !0 }),
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
        700047: (t, e, r) => {
            var n = r(807400),
                o = r(265968),
                i = r(720266),
                a = r(824229),
                s = r(765632),
                c = r(110894),
                u = r(119195),
                l = r(492991),
                p = r(409337),
                f = Object.assign,
                h = Object.defineProperty,
                d = o([].concat);
            t.exports =
                !f ||
                a(function () {
                    if (
                        n &&
                        1 !==
                            f(
                                { b: 1 },
                                f(
                                    h({}, "a", {
                                        enumerable: !0,
                                        get: function () {
                                            h(this, "b", { value: 3, enumerable: !1 });
                                        },
                                    }),
                                    { b: 2 },
                                ),
                            ).b
                    )
                        return !0;
                    var t = {},
                        e = {},
                        r = Symbol("assign detection"),
                        o = "abcdefghijklmnopqrst";
                    return (
                        (t[r] = 7),
                        o.split("").forEach(function (t) {
                            e[t] = t;
                        }),
                        7 !== f({}, t)[r] || s(f({}, e)).join("") !== o
                    );
                })
                    ? function (t, e) {
                          for (var r = l(t), o = arguments.length, a = 1, f = c.f, h = u.f; o > a; ) for (var v, y = p(arguments[a++]), g = f ? d(s(y), f(y)) : s(y), x = g.length, m = 0; x > m; ) (v = g[m++]), (n && !i(h, y, v)) || (r[v] = y[v]);
                          return r;
                      }
                    : f;
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
        849276: (t, e, r) => {
            var n = r(609859);
            t.exports = n;
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
                c = r(670095),
                u = r(748639),
                l = r(95189),
                p = r(124231),
                f = r(406358),
                h = o && o.prototype,
                d = c("species"),
                v = !1,
                y = i(n.PromiseRejectionEvent),
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
                        if ((((r.constructor = {})[d] = n), !(v = r.then(function () {}) instanceof n))) return !0;
                    }
                    return !e && (u || l) && !y;
                });
            t.exports = { CONSTRUCTOR: g, REJECTION_EVENT: y, SUBCLASSING: v };
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
                c = r(730895),
                u = r(25650),
                l = r(933036),
                p = r(822391),
                f = r(856407).get,
                h = r(542926),
                d = r(210461),
                v = l("native-string-replace", String.prototype.replace),
                y = RegExp.prototype.exec,
                g = y,
                x = a("".charAt),
                m = a("".indexOf),
                b = a("".replace),
                S = a("".slice),
                E = ((o = /b*/g), i(y, (n = /a/), "a"), i(y, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                R = u.BROKEN_CARET,
                w = void 0 !== /()??/.exec("")[1];
            (E || w || R || h || d) &&
                (g = function (t) {
                    var e,
                        r,
                        n,
                        o,
                        a,
                        u,
                        l,
                        h = this,
                        d = f(h),
                        C = s(t),
                        P = d.raw;
                    if (P) return (P.lastIndex = h.lastIndex), (e = i(g, P, C)), (h.lastIndex = P.lastIndex), e;
                    var A = d.groups,
                        _ = R && h.sticky,
                        I = i(c, h),
                        T = h.source,
                        O = 0,
                        L = C;
                    if (
                        (_ && ((I = b(I, "y", "")), -1 === m(I, "g") && (I += "g"), (L = S(C, h.lastIndex)), h.lastIndex > 0 && (!h.multiline || (h.multiline && "\n" !== x(C, h.lastIndex - 1))) && ((T = "(?: " + T + ")"), (L = " " + L), O++), (r = new RegExp("^(?:" + T + ")", I))),
                        w && (r = new RegExp("^" + T + "$(?!\\s)", I)),
                        E && (n = h.lastIndex),
                        (o = i(y, _ ? r : h, L)),
                        _ ? (o ? ((o.input = S(o.input, O)), (o[0] = S(o[0], O)), (o.index = h.lastIndex), (h.lastIndex += o[0].length)) : (h.lastIndex = 0)) : E && o && (h.lastIndex = h.global ? o.index + o[0].length : n),
                        w &&
                            o &&
                            o.length > 1 &&
                            i(v, o[0], r, function () {
                                for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0);
                            }),
                        o && A)
                    )
                        for (o.groups = u = p(null), a = 0; a < A.length; a++) u[(l = A[a])[0]] = o[l[1]];
                    return o;
                }),
                (t.exports = g);
        },
        730895: (t, e, r) => {
            var n = r(821176);
            t.exports = function () {
                var t = n(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
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
                c = r(180598),
                u = r(1909),
                l = r(977579),
                p = o.Function,
                f = /MSIE .\./.test(c) || (s && ((n = o.Bun.version.split(".")).length < 3 || ("0" === n[0] && (n[1] < 3 || ("3" === n[1] && "0" === n[2])))));
            t.exports = function (t, e) {
                var r = e ? 2 : 1;
                return f
                    ? function (n, o) {
                          var s = l(arguments.length, 1) > r,
                              c = a(n) ? n : p(n),
                              f = s ? u(arguments, r) : [],
                              h = s
                                  ? function () {
                                        i(c, this, f);
                                    }
                                  : c;
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
                c = n("".charCodeAt),
                u = n("".slice),
                l = function (t) {
                    return function (e, r) {
                        var n,
                            l,
                            p = i(a(e)),
                            f = o(r),
                            h = p.length;
                        return f < 0 || f >= h ? (t ? "" : void 0) : (n = c(p, f)) < 55296 || n > 56319 || f + 1 === h || (l = c(p, f + 1)) < 56320 || l > 57343 ? (t ? s(p, f) : n) : t ? u(p, f, f + 2) : l - 56320 + ((n - 55296) << 10) + 65536;
                    };
                };
            t.exports = { codeAt: l(!1), charAt: l(!0) };
        },
        1017: (t, e, r) => {
            var n = r(265968),
                o = r(558885),
                i = r(783326),
                a = r(841647),
                s = n("".replace),
                c = RegExp("^[" + a + "]+"),
                u = RegExp("(^|[^" + a + "])[" + a + "]+$"),
                l = function (t) {
                    return function (e) {
                        var r = i(o(e));
                        return 1 & t && (r = s(r, c, "")), 2 & t && (r = s(r, u, "$1")), r;
                    };
                };
            t.exports = { start: l(1), end: l(2), trim: l(3) };
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
                c = r(653171),
                u = r(497636),
                l = r(26733),
                p = r(198270),
                f = r(824229),
                h = r(53777),
                d = r(1909),
                v = r(522635),
                y = r(977579),
                g = r(232023),
                x = r(128801),
                m = s.setImmediate,
                b = s.clearImmediate,
                S = s.process,
                E = s.Dispatch,
                R = s.Function,
                w = s.MessageChannel,
                C = s.String,
                P = 0,
                A = {},
                _ = "onreadystatechange";
            f(function () {
                n = s.location;
            });
            var I = function (t) {
                    if (p(A, t)) {
                        var e = A[t];
                        delete A[t], e();
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
                    s.postMessage(C(t), n.protocol + "//" + n.host);
                };
            (m && b) ||
                ((m = function (t) {
                    y(arguments.length, 1);
                    var e = l(t) ? t : R(t),
                        r = d(arguments, 1);
                    return (
                        (A[++P] = function () {
                            c(e, void 0, r);
                        }),
                        o(P),
                        P
                    );
                }),
                (b = function (t) {
                    delete A[t];
                }),
                x
                    ? (o = function (t) {
                          S.nextTick(T(t));
                      })
                    : E && E.now
                      ? (o = function (t) {
                            E.now(T(t));
                        })
                      : w && !g
                        ? ((a = (i = new w()).port2), (i.port1.onmessage = O), (o = u(a.postMessage, a)))
                        : s.addEventListener && l(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !f(L)
                          ? ((o = L), s.addEventListener("message", O, !1))
                          : (o =
                                _ in v("script")
                                    ? function (t) {
                                          h.appendChild(v("script"))[_] = function () {
                                              h.removeChild(this), I(t);
                                          };
                                      }
                                    : function (t) {
                                          setTimeout(T(t), 0);
                                      })),
                (t.exports = { set: m, clear: b });
        },
        890143: (t, e, r) => {
            var n = r(265968);
            t.exports = n((1).valueOf);
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
        841647: (t) => {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer-6107ac1a.67bd1aea.js.map
