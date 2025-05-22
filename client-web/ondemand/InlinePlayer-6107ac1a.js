"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.InlinePlayer-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "loader.AudioOnlyVideoPlayer-6107ac1a"],
    {
        420412: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                o = r(325686),
                i = r(235902),
                a = r(885015),
                s = r(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: c } = i.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? l[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? n.createElement(a.Z, { style: !t && l.root, withGutter: !0 }, n.createElement(o.Z, { style: l.gapColumn }, n.createElement(o.Z, { style: [l.gap, u] })), n.createElement(o.Z, { style: l.gapText }, r), n.createElement(o.Z, { style: l.gapColumn }, n.createElement(o.Z, { style: [l.gap, u] }))) : n.createElement(o.Z, { style: [!t && l.root, c() && l.rootRedesign, l.gap, u] });
            }
            const l = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(392237);
            class s extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...a } = this.props,
                        s = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, c.column, r && c.withGutterColumn] }));
                    return o.createElement(i.Z, (0, n.Z)({ style: [t, c.root, r && c.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const c = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                l = s;
        },
        738584: (e, t, r) => {
            r.d(t, { o: () => d, Z: () => y });
            var n = r(807896),
                o = r(202784),
                i = r(928316),
                a = r(682474),
                s = r(392237),
                c = r(893164),
                l = r(395367),
                u = r(908478);
            function p(e) {
                let t = f(e);
                return (e) => {
                    const r = f(e);
                    return (0, u.Z)(t, r) || (t = r), t;
                };
            }
            function f(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function d({ children: e, periodic: t }) {
                const r = t ? h.PeriodicContext.Consumer : h.Context.Consumer;
                return o.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: n, guestsState: o, playerApi: i, playerState: a } = t;
                    return i && n && a ? e({ aspectRatio: r, guestsState: o, playerApi: i, playerState: a, containerRef: n }) : null;
                });
            }
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: p(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: r, playerApi: n, stablePlayerState: o } = this.state;
                            return n && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: r, playerApi: n, playerState: o, containerRef: this._containerRef }) : e) : null;
                        }),
                        (this._handleReload = () => this.setState(() => ({ hasError: null }))),
                        (this._handlePlayerApi = (e) => (t) => {
                            const { playerId: r } = this.props;
                            this.setState({ playerApi: t }),
                                this.props.onApiReady && this.props.onApiReady(t),
                                r && e && (this._unregister = e(r, t)),
                                (this._unsubscribe = t.subscribe((e, t) => {
                                    const r = this._cache.stablePlayerState(e);
                                    this.setState({ stablePlayerState: r, playerState: e, guestsState: t }), this.props.onStateUpdate && this.props.onStateUpdate(e, t);
                                }));
                        });
                }
                componentWillUnmount() {
                    this._unregister && this._unregister(), this._unsubscribe && this._unsubscribe();
                }
                componentDidUpdate() {
                    if (!this._containerRef) {
                        const e = i.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const r = { error: e, info: t };
                    this.setState(() => ({ hasError: r }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: r, stablePlayerState: i } = this.state,
                        { additionalBadges: s, aspectRatio: u, basePlayerClass: p, children: f, includeDisputeLinkInCopyrightErrorMessage: d, isFullScreen: y, objectFitVideo: g, onApiReady: m, onScroll: x, onStateUpdate: b, playerId: S, size: C, ...E } = this.props,
                        w = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        R = { ...w, playerState: i };
                    return o.createElement(
                        a.Z,
                        { isFullScreen: y, onScroll: x, ratio: u, style: [v.root, v[C]] },
                        this.state.hasError
                            ? o.createElement(c.Z, { onReloadPress: this._handleReload })
                            : o.createElement(
                                  h.Context.Provider,
                                  { value: R },
                                  o.createElement(
                                      h.PeriodicContext.Provider,
                                      { value: w },
                                      o.createElement(l.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => o.createElement(p, (0, n.Z)({}, E, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: g }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (h.Consumer = d), (h.defaultProps = { aspectRatio: s.default.theme.aspectRatios.landscape, size: "fill" }), (h.Context = o.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (h.PeriodicContext = o.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const v = s.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                y = h;
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n,
                o = r(202784);
            class i extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { playerApi: void 0, playerState: void 0, guestsState: void 0 }),
                        (this._initializeState = (e) => {
                            e && (this._unsubscribe && this._unsubscribe(), this.setState({ playerApi: e }), (this._unsubscribe = e.subscribe((e, t) => this.setState({ playerState: e, guestsState: t }))));
                        });
                }
                componentDidMount() {
                    this._initializeState(this.props.playerApi);
                }
                componentDidUpdate(e) {
                    const { playerApi: t } = this.props;
                    t !== e.playerApi && this._initializeState(t);
                }
                render() {
                    return this.props.children(this.state);
                }
            }
            class a extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { players: {} }),
                        (this._mounted = !1),
                        (this._registerPlayer = (e, t) => {
                            const r = new Promise((r) => {
                                setTimeout(() => {
                                    this._mounted ? this.setState((r) => ({ players: { ...r.players, [e]: t } }), r) : r();
                                });
                            });
                            return () => {
                                r.then(() => this._unregisterPlayer(e));
                            };
                        }),
                        (this._unregisterPlayer = (e) => {
                            this._mounted &&
                                this.setState((t) => {
                                    const { [e]: r, ...n } = this.state.players;
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
            (n = a), (a.MetadataSubscriber = ({ children: e, playerId: t }) => o.createElement(n.ProviderContext.Consumer, null, ({ players: r }) => o.createElement(i, { playerApi: r && r[t] }, e))), (a.RegistrationContext = o.createContext({ registerPlayer: void 0 })), (a.ProviderContext = o.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                o = r(325686),
                i = r(332920),
                a = r.n(i),
                s = r(355830),
                c = r(731708),
                l = r(154003),
                u = r(992942),
                p = r(392237);
            const f = a().a9edea48;
            function d(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: i, imageSrc: a, onReloadPress: d } = e;
                return n.createElement(o.Z, { style: [p.default.absoluteFill, t ? null : h.blankOverlay] }, t ? n.createElement(n.Fragment, null, n.createElement(o.Z, { style: h.backgroundImage }, a && n.createElement(u.Z, { resizeMode: "cover", source: a, style: p.default.absoluteFill })), n.createElement(o.Z, { style: h.overlay })) : null, n.createElement(o.Z, { style: h.errorContainer }, n.createElement(o.Z, null, i ? n.createElement(s.default, { style: h.playErrorIcon }) : null), n.createElement(o.Z, { focusable: !0 }, n.createElement(c.ZP, { style: t ? h.errorMsgTextWhite : h.errorMsgTextGray }, r)), d ? n.createElement(l.ZP, { onPress: d, style: h.buttonContainer, type: "brandFilled" }, f) : null));
            }
            const h = p.default.create((e) => ({ backgroundImage: { ...p.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...p.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        411240: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = (e, t) => {
                if (0 === e.length) return;
                let r = e[0],
                    n = t(r);
                for (let o = 1; o < e.length; o++) {
                    const i = e[o],
                        a = t(i);
                    a < n && ((r = i), (n = a));
                }
                return r;
            };
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => o, Z: () => n });
            r(136728);
            const n = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (r, n, o) => {
                        const i = t ? t(n, o, e) : !!n;
                        return i && r[0].push(n), !i && r[1].push(n), r;
                    },
                    [[], []],
                );
            }
        },
        557988: (e, t, r) => {
            var n = r(782359),
                o = r(659821),
                i = TypeError;
            e.exports = function (e) {
                if (n(e)) return e;
                throw new i(o(e) + " is not a constructor");
            };
        },
        986570: (e, t, r) => {
            var n = r(689996).forEach,
                o = r(696038)("forEach");
            e.exports = o
                ? [].forEach
                : function (e) {
                      return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
                  };
        },
        310507: (e, t, r) => {
            var n = r(497636),
                o = r(720266),
                i = r(492991),
                a = r(464960),
                s = r(991943),
                c = r(782359),
                l = r(639646),
                u = r(462324),
                p = r(928403),
                f = r(478830),
                d = Array;
            e.exports = function (e) {
                var t = i(e),
                    r = c(this),
                    h = arguments.length,
                    v = h > 1 ? arguments[1] : void 0,
                    y = void 0 !== v;
                y && (v = n(v, h > 2 ? arguments[2] : void 0));
                var g,
                    m,
                    x,
                    b,
                    S,
                    C,
                    E = f(t),
                    w = 0;
                if (!E || (this === d && s(E))) for (g = l(t), m = r ? new this(g) : d(g); g > w; w++) (C = y ? v(t[w], w) : t[w]), u(m, w, C);
                else for (S = (b = p(t, E)).next, m = r ? new this() : []; !(x = o(S, b)).done; w++) (C = y ? a(b, v, [x.value, w], !0) : x.value), u(m, w, C);
                return (m.length = w), m;
            };
        },
        689996: (e, t, r) => {
            var n = r(497636),
                o = r(265968),
                i = r(409337),
                a = r(492991),
                s = r(639646),
                c = r(387501),
                l = o([].push),
                u = function (e) {
                    var t = 1 === e,
                        r = 2 === e,
                        o = 3 === e,
                        u = 4 === e,
                        p = 6 === e,
                        f = 7 === e,
                        d = 5 === e || p;
                    return function (h, v, y, g) {
                        for (var m, x, b = a(h), S = i(b), C = n(v, y), E = s(S), w = 0, R = g || c, P = t ? R(h, E) : r || f ? R(h, 0) : void 0; E > w; w++)
                            if ((d || w in S) && ((x = C((m = S[w]), w, b)), e))
                                if (t) P[w] = x;
                                else if (x)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return m;
                                        case 6:
                                            return w;
                                        case 2:
                                            l(P, m);
                                    }
                                else
                                    switch (e) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            l(P, m);
                                    }
                        return p ? -1 : o || u ? u : P;
                    };
                };
            e.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterReject: u(7) };
        },
        331460: (e, t, r) => {
            var n = r(824229),
                o = r(670095),
                i = r(406358),
                a = o("species");
            e.exports = function (e) {
                return (
                    i >= 51 ||
                    !n(function () {
                        var t = [];
                        return (
                            ((t.constructor = {})[a] = function () {
                                return { foo: 1 };
                            }),
                            1 !== t[e](Boolean).foo
                        );
                    })
                );
            };
        },
        696038: (e, t, r) => {
            var n = r(824229);
            e.exports = function (e, t) {
                var r = [][e];
                return (
                    !!r &&
                    n(function () {
                        r.call(
                            null,
                            t ||
                                function () {
                                    return 1;
                                },
                            1,
                        );
                    })
                );
            };
        },
        43143: (e, t, r) => {
            var n = r(277111),
                o = r(492991),
                i = r(409337),
                a = r(639646),
                s = TypeError,
                c = function (e) {
                    return function (t, r, c, l) {
                        n(r);
                        var u = o(t),
                            p = i(u),
                            f = a(u),
                            d = e ? f - 1 : 0,
                            h = e ? -1 : 1;
                        if (c < 2)
                            for (;;) {
                                if (d in p) {
                                    (l = p[d]), (d += h);
                                    break;
                                }
                                if (((d += h), e ? d < 0 : f <= d)) throw new s("Reduce of empty array with no initial value");
                            }
                        for (; e ? d >= 0 : f > d; d += h) d in p && (l = r(l, p[d], d, u));
                        return l;
                    };
                };
            e.exports = { left: c(!1), right: c(!0) };
        },
        1909: (e, t, r) => {
            var n = r(265968);
            e.exports = n([].slice);
        },
        118760: (e, t, r) => {
            var n = r(33718),
                o = r(782359),
                i = r(685052),
                a = r(670095)("species"),
                s = Array;
            e.exports = function (e) {
                var t;
                return n(e) && ((t = e.constructor), ((o(t) && (t === s || n(t.prototype))) || (i(t) && null === (t = t[a]))) && (t = void 0)), void 0 === t ? s : t;
            };
        },
        387501: (e, t, r) => {
            var n = r(118760);
            e.exports = function (e, t) {
                return new (n(e))(0 === t ? 0 : t);
            };
        },
        464960: (e, t, r) => {
            var n = r(821176),
                o = r(257281);
            e.exports = function (e, t, r, i) {
                try {
                    return i ? t(n(r)[0], r[1]) : t(r);
                } catch (t) {
                    o(e, "throw", t);
                }
            };
        },
        874575: (e, t, r) => {
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
            } catch (e) {}
            e.exports = function (e, t) {
                try {
                    if (!t && !o) return !1;
                } catch (e) {
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
                        e(i);
                } catch (e) {}
                return r;
            };
        },
        33684: (e) => {
            e.exports = function (e, t) {
                return { value: e, done: t };
            };
        },
        995694: (e) => {
            e.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
        },
        618865: (e, t, r) => {
            var n = r(522635)("span").classList,
                o = n && n.constructor && n.constructor.prototype;
            e.exports = o === Object.prototype ? void 0 : o;
        },
        748639: (e, t, r) => {
            var n = r(95189),
                o = r(128801);
            e.exports = !n && !o && "object" == typeof window && "object" == typeof document;
        },
        737995: (e) => {
            e.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version;
        },
        95189: (e) => {
            e.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version;
        },
        308983: (e, t, r) => {
            var n = r(180598);
            e.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
        },
        232023: (e, t, r) => {
            var n = r(180598);
            e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
        },
        128801: (e, t, r) => {
            var n = r(609859),
                o = r(427079);
            e.exports = "process" === o(n.process);
        },
        610263: (e, t, r) => {
            var n = r(180598);
            e.exports = /web0s(?!.*chrome)/i.test(n);
        },
        194128: (e, t, r) => {
            var n = r(265968),
                o = r(277111),
                i = r(685052),
                a = r(198270),
                s = r(1909),
                c = r(357188),
                l = Function,
                u = n([].concat),
                p = n([].join),
                f = {};
            e.exports = c
                ? l.bind
                : function (e) {
                      var t = o(this),
                          r = t.prototype,
                          n = s(arguments, 1),
                          c = function () {
                              var r = u(n, s(arguments));
                              return this instanceof c
                                  ? (function (e, t, r) {
                                        if (!a(f, t)) {
                                            for (var n = [], o = 0; o < t; o++) n[o] = "a[" + o + "]";
                                            f[t] = l("C,a", "return new C(" + p(n, ",") + ")");
                                        }
                                        return f[t](e, r);
                                    })(t, r.length, r)
                                  : t.apply(e, r);
                          };
                      return i(r) && (c.prototype = r), c;
                  };
        },
        478830: (e, t, r) => {
            var n = r(781589),
                o = r(155300),
                i = r(209650),
                a = r(545495),
                s = r(670095)("iterator");
            e.exports = function (e) {
                if (!i(e)) return o(e, s) || o(e, "@@iterator") || a[n(e)];
            };
        },
        928403: (e, t, r) => {
            var n = r(720266),
                o = r(277111),
                i = r(821176),
                a = r(659821),
                s = r(478830),
                c = TypeError;
            e.exports = function (e, t) {
                var r = arguments.length < 2 ? s(e) : t;
                if (o(r)) return i(n(r, e));
                throw new c(a(e) + " is not iterable");
            };
        },
        44231: (e, t, r) => {
            var n = r(265968),
                o = r(33718),
                i = r(26733),
                a = r(427079),
                s = r(783326),
                c = n([].push);
            e.exports = function (e) {
                if (i(e)) return e;
                if (o(e)) {
                    for (var t = e.length, r = [], n = 0; n < t; n++) {
                        var l = e[n];
                        "string" == typeof l ? c(r, l) : ("number" != typeof l && "Number" !== a(l) && "String" !== a(l)) || c(r, s(l));
                    }
                    var u = r.length,
                        p = !0;
                    return function (e, t) {
                        if (p) return (p = !1), t;
                        if (o(this)) return t;
                        for (var n = 0; n < u; n++) if (r[n] === e) return t;
                    };
                }
            };
        },
        214665: (e) => {
            e.exports = function (e, t) {};
        },
        991943: (e, t, r) => {
            var n = r(670095),
                o = r(545495),
                i = n("iterator"),
                a = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (o.Array === e || a[i] === e);
            };
        },
        782359: (e, t, r) => {
            var n = r(265968),
                o = r(824229),
                i = r(26733),
                a = r(781589),
                s = r(431333),
                c = r(108511),
                l = function () {},
                u = [],
                p = s("Reflect", "construct"),
                f = /^\s*(?:class|function)\b/,
                d = n(f.exec),
                h = !f.test(l),
                v = function (e) {
                    if (!i(e)) return !1;
                    try {
                        return p(l, u, e), !0;
                    } catch (e) {
                        return !1;
                    }
                },
                y = function (e) {
                    if (!i(e)) return !1;
                    switch (a(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return h || !!d(f, c(e));
                    } catch (e) {
                        return !0;
                    }
                };
            (y.sham = !0),
                (e.exports =
                    !p ||
                    o(function () {
                        var e;
                        return (
                            v(v.call) ||
                            !v(Object) ||
                            !v(function () {
                                e = !0;
                            }) ||
                            e
                        );
                    })
                        ? y
                        : v);
        },
        789003: (e, t, r) => {
            var n = r(497636),
                o = r(720266),
                i = r(821176),
                a = r(659821),
                s = r(991943),
                c = r(639646),
                l = r(291321),
                u = r(928403),
                p = r(478830),
                f = r(257281),
                d = TypeError,
                h = function (e, t) {
                    (this.stopped = e), (this.result = t);
                },
                v = h.prototype;
            e.exports = function (e, t, r) {
                var y,
                    g,
                    m,
                    x,
                    b,
                    S,
                    C,
                    E = r && r.that,
                    w = !(!r || !r.AS_ENTRIES),
                    R = !(!r || !r.IS_RECORD),
                    P = !(!r || !r.IS_ITERATOR),
                    A = !(!r || !r.INTERRUPTED),
                    _ = n(t, E),
                    T = function (e) {
                        return y && f(y, "normal", e), new h(!0, e);
                    },
                    I = function (e) {
                        return w ? (i(e), A ? _(e[0], e[1], T) : _(e[0], e[1])) : A ? _(e, T) : _(e);
                    };
                if (R) y = e.iterator;
                else if (P) y = e;
                else {
                    if (!(g = p(e))) throw new d(a(e) + " is not iterable");
                    if (s(g)) {
                        for (m = 0, x = c(e); x > m; m++) if ((b = I(e[m])) && l(v, b)) return b;
                        return new h(!1);
                    }
                    y = u(e, g);
                }
                for (S = R ? e.next : y.next; !(C = o(S, y)).done; ) {
                    try {
                        b = I(C.value);
                    } catch (e) {
                        f(y, "throw", e);
                    }
                    if ("object" == typeof b && b && l(v, b)) return b;
                }
                return new h(!1);
            };
        },
        257281: (e, t, r) => {
            var n = r(720266),
                o = r(821176),
                i = r(155300);
            e.exports = function (e, t, r) {
                var a, s;
                o(e);
                try {
                    if (!(a = i(e, "return"))) {
                        if ("throw" === t) throw r;
                        return r;
                    }
                    a = n(a, e);
                } catch (e) {
                    (s = !0), (a = e);
                }
                if ("throw" === t) throw r;
                if (s) throw a;
                return o(a), r;
            };
        },
        42247: (e, t, r) => {
            var n = r(360693).IteratorPrototype,
                o = r(822391),
                i = r(665358),
                a = r(954555),
                s = r(545495),
                c = function () {
                    return this;
                };
            e.exports = function (e, t, r, l) {
                var u = t + " Iterator";
                return (e.prototype = o(n, { next: i(+!l, r) })), a(e, u, !1, !0), (s[u] = c), e;
            };
        },
        712707: (e, t, r) => {
            var n = r(23103),
                o = r(720266),
                i = r(124231),
                a = r(951805),
                s = r(26733),
                c = r(42247),
                l = r(567567),
                u = r(956540),
                p = r(954555),
                f = r(675762),
                d = r(914768),
                h = r(670095),
                v = r(545495),
                y = r(360693),
                g = a.PROPER,
                m = a.CONFIGURABLE,
                x = y.IteratorPrototype,
                b = y.BUGGY_SAFARI_ITERATORS,
                S = h("iterator"),
                C = "keys",
                E = "values",
                w = "entries",
                R = function () {
                    return this;
                };
            e.exports = function (e, t, r, a, h, y, P) {
                c(r, t, a);
                var A,
                    _,
                    T,
                    I = function (e) {
                        if (e === h && Z) return Z;
                        if (!b && e && e in L) return L[e];
                        switch (e) {
                            case C:
                            case E:
                            case w:
                                return function () {
                                    return new r(this, e);
                                };
                        }
                        return function () {
                            return new r(this);
                        };
                    },
                    O = t + " Iterator",
                    k = !1,
                    L = e.prototype,
                    M = L[S] || L["@@iterator"] || (h && L[h]),
                    Z = (!b && M) || I(h),
                    j = ("Array" === t && L.entries) || M;
                if (
                    (j && (A = l(j.call(new e()))) !== Object.prototype && A.next && (i || l(A) === x || (u ? u(A, x) : s(A[S]) || d(A, S, R)), p(A, O, !0, !0), i && (v[O] = R)),
                    g &&
                        h === E &&
                        M &&
                        M.name !== E &&
                        (!i && m
                            ? f(L, "name", E)
                            : ((k = !0),
                              (Z = function () {
                                  return o(M, this);
                              }))),
                    h)
                )
                    if (((_ = { values: I(E), keys: y ? Z : I(C), entries: I(w) }), P)) for (T in _) (b || k || !(T in L)) && d(L, T, _[T]);
                    else n({ target: t, proto: !0, forced: b || k }, _);
                return (i && !P) || L[S] === Z || d(L, S, Z, { name: h }), (v[t] = Z), _;
            };
        },
        360693: (e, t, r) => {
            var n,
                o,
                i,
                a = r(824229),
                s = r(26733),
                c = r(685052),
                l = r(822391),
                u = r(567567),
                p = r(914768),
                f = r(670095),
                d = r(124231),
                h = f("iterator"),
                v = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (n = o) : (v = !0)),
                !c(n) ||
                a(function () {
                    var e = {};
                    return n[h].call(e) !== e;
                })
                    ? (n = {})
                    : d && (n = l(n)),
                s(n[h]) ||
                    p(n, h, function () {
                        return this;
                    }),
                (e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: v });
        },
        545495: (e) => {
            e.exports = {};
        },
        124794: (e, t, r) => {
            var n,
                o,
                i,
                a,
                s,
                c = r(609859),
                l = r(497636),
                u = r(997933).f,
                p = r(155795).set,
                f = r(193358),
                d = r(232023),
                h = r(308983),
                v = r(610263),
                y = r(128801),
                g = c.MutationObserver || c.WebKitMutationObserver,
                m = c.document,
                x = c.process,
                b = c.Promise,
                S = u(c, "queueMicrotask"),
                C = S && S.value;
            if (!C) {
                var E = new f(),
                    w = function () {
                        var e, t;
                        for (y && (e = x.domain) && e.exit(); (t = E.get()); )
                            try {
                                t();
                            } catch (e) {
                                throw (E.head && n(), e);
                            }
                        e && e.enter();
                    };
                d || y || v || !g || !m
                    ? !h && b && b.resolve
                        ? (((a = b.resolve(void 0)).constructor = b),
                          (s = l(a.then, a)),
                          (n = function () {
                              s(w);
                          }))
                        : y
                          ? (n = function () {
                                x.nextTick(w);
                            })
                          : ((p = l(p, c)),
                            (n = function () {
                                p(w);
                            }))
                    : ((o = !0),
                      (i = m.createTextNode("")),
                      new g(w).observe(i, { characterData: !0 }),
                      (n = function () {
                          i.data = o = !o;
                      })),
                    (C = function (e) {
                        E.head || n(), E.add(e);
                    });
            }
            e.exports = C;
        },
        916485: (e, t, r) => {
            var n = r(277111),
                o = TypeError,
                i = function (e) {
                    var t, r;
                    (this.promise = new e(function (e, n) {
                        if (void 0 !== t || void 0 !== r) throw new o("Bad Promise constructor");
                        (t = e), (r = n);
                    })),
                        (this.resolve = n(t)),
                        (this.reject = n(r));
                };
            e.exports.f = function (e) {
                return new i(e);
            };
        },
        700047: (e, t, r) => {
            var n = r(807400),
                o = r(265968),
                i = r(720266),
                a = r(824229),
                s = r(765632),
                c = r(110894),
                l = r(119195),
                u = r(492991),
                p = r(409337),
                f = Object.assign,
                d = Object.defineProperty,
                h = o([].concat);
            e.exports =
                !f ||
                a(function () {
                    if (
                        n &&
                        1 !==
                            f(
                                { b: 1 },
                                f(
                                    d({}, "a", {
                                        enumerable: !0,
                                        get: function () {
                                            d(this, "b", { value: 3, enumerable: !1 });
                                        },
                                    }),
                                    { b: 2 },
                                ),
                            ).b
                    )
                        return !0;
                    var e = {},
                        t = {},
                        r = Symbol("assign detection"),
                        o = "abcdefghijklmnopqrst";
                    return (
                        (e[r] = 7),
                        o.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 !== f({}, e)[r] || s(f({}, t)).join("") !== o
                    );
                })
                    ? function (e, t) {
                          for (var r = u(e), o = arguments.length, a = 1, f = c.f, d = l.f; o > a; ) for (var v, y = p(arguments[a++]), g = f ? h(s(y), f(y)) : s(y), m = g.length, x = 0; m > x; ) (v = g[x++]), (n && !i(d, y, v)) || (r[v] = y[v]);
                          return r;
                      }
                    : f;
        },
        310166: (e, t, r) => {
            var n = r(427079),
                o = r(910905),
                i = r(778151).f,
                a = r(369794),
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function (e) {
                return s && "Window" === n(e)
                    ? (function (e) {
                          try {
                              return i(e);
                          } catch (e) {
                              return a(s);
                          }
                      })(e)
                    : i(o(e));
            };
        },
        844059: (e, t, r) => {
            var n = r(971601),
                o = r(781589);
            e.exports = n
                ? {}.toString
                : function () {
                      return "[object " + o(this) + "]";
                  };
        },
        849276: (e, t, r) => {
            var n = r(609859);
            e.exports = n;
        },
        664624: (e) => {
            e.exports = function (e) {
                try {
                    return { error: !1, value: e() };
                } catch (e) {
                    return { error: !0, value: e };
                }
            };
        },
        338321: (e, t, r) => {
            var n = r(609859),
                o = r(174473),
                i = r(26733),
                a = r(46541),
                s = r(108511),
                c = r(670095),
                l = r(748639),
                u = r(95189),
                p = r(124231),
                f = r(406358),
                d = o && o.prototype,
                h = c("species"),
                v = !1,
                y = i(n.PromiseRejectionEvent),
                g = a("Promise", function () {
                    var e = s(o),
                        t = e !== String(o);
                    if (!t && 66 === f) return !0;
                    if (p && (!d.catch || !d.finally)) return !0;
                    if (!f || f < 51 || !/native code/.test(e)) {
                        var r = new o(function (e) {
                                e(1);
                            }),
                            n = function (e) {
                                e(
                                    function () {},
                                    function () {},
                                );
                            };
                        if ((((r.constructor = {})[h] = n), !(v = r.then(function () {}) instanceof n))) return !0;
                    }
                    return !t && (l || u) && !y;
                });
            e.exports = { CONSTRUCTOR: g, REJECTION_EVENT: y, SUBCLASSING: v };
        },
        174473: (e, t, r) => {
            var n = r(609859);
            e.exports = n.Promise;
        },
        62391: (e, t, r) => {
            var n = r(821176),
                o = r(685052),
                i = r(916485);
            e.exports = function (e, t) {
                if ((n(e), o(t) && t.constructor === e)) return t;
                var r = i.f(e);
                return (0, r.resolve)(t), r.promise;
            };
        },
        796866: (e, t, r) => {
            var n = r(174473),
                o = r(874575),
                i = r(338321).CONSTRUCTOR;
            e.exports =
                i ||
                !o(function (e) {
                    n.all(e).then(void 0, function () {});
                });
        },
        193358: (e) => {
            var t = function () {
                (this.head = null), (this.tail = null);
            };
            (t.prototype = {
                add: function (e) {
                    var t = { item: e, next: null },
                        r = this.tail;
                    r ? (r.next = t) : (this.head = t), (this.tail = t);
                },
                get: function () {
                    var e = this.head;
                    if (e) return null === (this.head = e.next) && (this.tail = null), e.item;
                },
            }),
                (e.exports = t);
        },
        763466: (e, t, r) => {
            var n,
                o,
                i = r(720266),
                a = r(265968),
                s = r(783326),
                c = r(730895),
                l = r(25650),
                u = r(933036),
                p = r(822391),
                f = r(856407).get,
                d = r(542926),
                h = r(210461),
                v = u("native-string-replace", String.prototype.replace),
                y = RegExp.prototype.exec,
                g = y,
                m = a("".charAt),
                x = a("".indexOf),
                b = a("".replace),
                S = a("".slice),
                C = ((o = /b*/g), i(y, (n = /a/), "a"), i(y, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                E = l.BROKEN_CARET,
                w = void 0 !== /()??/.exec("")[1];
            (C || w || E || d || h) &&
                (g = function (e) {
                    var t,
                        r,
                        n,
                        o,
                        a,
                        l,
                        u,
                        d = this,
                        h = f(d),
                        R = s(e),
                        P = h.raw;
                    if (P) return (P.lastIndex = d.lastIndex), (t = i(g, P, R)), (d.lastIndex = P.lastIndex), t;
                    var A = h.groups,
                        _ = E && d.sticky,
                        T = i(c, d),
                        I = d.source,
                        O = 0,
                        k = R;
                    if (
                        (_ && ((T = b(T, "y", "")), -1 === x(T, "g") && (T += "g"), (k = S(R, d.lastIndex)), d.lastIndex > 0 && (!d.multiline || (d.multiline && "\n" !== m(R, d.lastIndex - 1))) && ((I = "(?: " + I + ")"), (k = " " + k), O++), (r = new RegExp("^(?:" + I + ")", T))),
                        w && (r = new RegExp("^" + I + "$(?!\\s)", T)),
                        C && (n = d.lastIndex),
                        (o = i(y, _ ? r : d, k)),
                        _ ? (o ? ((o.input = S(o.input, O)), (o[0] = S(o[0], O)), (o.index = d.lastIndex), (d.lastIndex += o[0].length)) : (d.lastIndex = 0)) : C && o && (d.lastIndex = d.global ? o.index + o[0].length : n),
                        w &&
                            o &&
                            o.length > 1 &&
                            i(v, o[0], r, function () {
                                for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0);
                            }),
                        o && A)
                    )
                        for (o.groups = l = p(null), a = 0; a < A.length; a++) l[(u = A[a])[0]] = o[u[1]];
                    return o;
                }),
                (e.exports = g);
        },
        730895: (e, t, r) => {
            var n = r(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        683349: (e, t, r) => {
            var n = r(720266),
                o = r(198270),
                i = r(291321),
                a = r(730895),
                s = RegExp.prototype;
            e.exports = function (e) {
                var t = e.flags;
                return void 0 !== t || "flags" in s || o(e, "flags") || !i(s, e) ? t : n(a, e);
            };
        },
        25650: (e, t, r) => {
            var n = r(824229),
                o = r(609859).RegExp,
                i = n(function () {
                    var e = o("a", "y");
                    return (e.lastIndex = 2), null !== e.exec("abcd");
                }),
                a =
                    i ||
                    n(function () {
                        return !o("a", "y").sticky;
                    }),
                s =
                    i ||
                    n(function () {
                        var e = o("^r", "gy");
                        return (e.lastIndex = 2), null !== e.exec("str");
                    });
            e.exports = { BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: i };
        },
        542926: (e, t, r) => {
            var n = r(824229),
                o = r(609859).RegExp;
            e.exports = n(function () {
                var e = o(".", "s");
                return !(e.dotAll && e.test("\n") && "s" === e.flags);
            });
        },
        210461: (e, t, r) => {
            var n = r(824229),
                o = r(609859).RegExp;
            e.exports = n(function () {
                var e = o("(?<a>b)", "g");
                return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
            });
        },
        324752: (e, t, r) => {
            var n,
                o = r(609859),
                i = r(653171),
                a = r(26733),
                s = r(737995),
                c = r(180598),
                l = r(1909),
                u = r(977579),
                p = o.Function,
                f = /MSIE .\./.test(c) || (s && ((n = o.Bun.version.split(".")).length < 3 || ("0" === n[0] && (n[1] < 3 || ("3" === n[1] && "0" === n[2])))));
            e.exports = function (e, t) {
                var r = t ? 2 : 1;
                return f
                    ? function (n, o) {
                          var s = u(arguments.length, 1) > r,
                              c = a(n) ? n : p(n),
                              f = s ? l(arguments, r) : [],
                              d = s
                                  ? function () {
                                        i(c, this, f);
                                    }
                                  : c;
                          return t ? e(d, o) : e(d);
                      }
                    : e;
            };
        },
        971832: (e, t, r) => {
            var n = r(431333),
                o = r(396616),
                i = r(670095),
                a = r(807400),
                s = i("species");
            e.exports = function (e) {
                var t = n(e);
                a &&
                    t &&
                    !t[s] &&
                    o(t, s, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        954555: (e, t, r) => {
            var n = r(931787).f,
                o = r(198270),
                i = r(670095)("toStringTag");
            e.exports = function (e, t, r) {
                e && !r && (e = e.prototype), e && !o(e, i) && n(e, i, { configurable: !0, value: t });
            };
        },
        137942: (e, t, r) => {
            var n = r(821176),
                o = r(557988),
                i = r(209650),
                a = r(670095)("species");
            e.exports = function (e, t) {
                var r,
                    s = n(e).constructor;
                return void 0 === s || i((r = n(s)[a])) ? t : o(r);
            };
        },
        630966: (e, t, r) => {
            var n = r(265968),
                o = r(643329),
                i = r(783326),
                a = r(558885),
                s = n("".charAt),
                c = n("".charCodeAt),
                l = n("".slice),
                u = function (e) {
                    return function (t, r) {
                        var n,
                            u,
                            p = i(a(t)),
                            f = o(r),
                            d = p.length;
                        return f < 0 || f >= d ? (e ? "" : void 0) : (n = c(p, f)) < 55296 || n > 56319 || f + 1 === d || (u = c(p, f + 1)) < 56320 || u > 57343 ? (e ? s(p, f) : n) : e ? l(p, f, f + 2) : u - 56320 + ((n - 55296) << 10) + 65536;
                    };
                };
            e.exports = { codeAt: u(!1), charAt: u(!0) };
        },
        1017: (e, t, r) => {
            var n = r(265968),
                o = r(558885),
                i = r(783326),
                a = r(841647),
                s = n("".replace),
                c = RegExp("^[" + a + "]+"),
                l = RegExp("(^|[^" + a + "])[" + a + "]+$"),
                u = function (e) {
                    return function (t) {
                        var r = i(o(t));
                        return 1 & e && (r = s(r, c, "")), 2 & e && (r = s(r, l, "$1")), r;
                    };
                };
            e.exports = { start: u(1), end: u(2), trim: u(3) };
        },
        566481: (e, t, r) => {
            var n = r(720266),
                o = r(431333),
                i = r(670095),
                a = r(914768);
            e.exports = function () {
                var e = o("Symbol"),
                    t = e && e.prototype,
                    r = t && t.valueOf,
                    s = i("toPrimitive");
                t &&
                    !t[s] &&
                    a(
                        t,
                        s,
                        function (e) {
                            return n(r, this);
                        },
                        { arity: 1 },
                    );
            };
        },
        455957: (e, t, r) => {
            var n = r(144860);
            e.exports = n && !!Symbol.for && !!Symbol.keyFor;
        },
        155795: (e, t, r) => {
            var n,
                o,
                i,
                a,
                s = r(609859),
                c = r(653171),
                l = r(497636),
                u = r(26733),
                p = r(198270),
                f = r(824229),
                d = r(53777),
                h = r(1909),
                v = r(522635),
                y = r(977579),
                g = r(232023),
                m = r(128801),
                x = s.setImmediate,
                b = s.clearImmediate,
                S = s.process,
                C = s.Dispatch,
                E = s.Function,
                w = s.MessageChannel,
                R = s.String,
                P = 0,
                A = {},
                _ = "onreadystatechange";
            f(function () {
                n = s.location;
            });
            var T = function (e) {
                    if (p(A, e)) {
                        var t = A[e];
                        delete A[e], t();
                    }
                },
                I = function (e) {
                    return function () {
                        T(e);
                    };
                },
                O = function (e) {
                    T(e.data);
                },
                k = function (e) {
                    s.postMessage(R(e), n.protocol + "//" + n.host);
                };
            (x && b) ||
                ((x = function (e) {
                    y(arguments.length, 1);
                    var t = u(e) ? e : E(e),
                        r = h(arguments, 1);
                    return (
                        (A[++P] = function () {
                            c(t, void 0, r);
                        }),
                        o(P),
                        P
                    );
                }),
                (b = function (e) {
                    delete A[e];
                }),
                m
                    ? (o = function (e) {
                          S.nextTick(I(e));
                      })
                    : C && C.now
                      ? (o = function (e) {
                            C.now(I(e));
                        })
                      : w && !g
                        ? ((a = (i = new w()).port2), (i.port1.onmessage = O), (o = l(a.postMessage, a)))
                        : s.addEventListener && u(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !f(k)
                          ? ((o = k), s.addEventListener("message", O, !1))
                          : (o =
                                _ in v("script")
                                    ? function (e) {
                                          d.appendChild(v("script"))[_] = function () {
                                              d.removeChild(this), T(e);
                                          };
                                      }
                                    : function (e) {
                                          setTimeout(I(e), 0);
                                      })),
                (e.exports = { set: x, clear: b });
        },
        890143: (e, t, r) => {
            var n = r(265968);
            e.exports = n((1).valueOf);
        },
        863524: (e, t, r) => {
            var n = r(849276),
                o = r(198270),
                i = r(355391),
                a = r(931787).f;
            e.exports = function (e) {
                var t = n.Symbol || (n.Symbol = {});
                o(t, e) || a(t, e, { value: i.f(e) });
            };
        },
        355391: (e, t, r) => {
            var n = r(670095);
            t.f = n;
        },
        841647: (e) => {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.InlinePlayer-6107ac1a.eace98ea.js.map
