"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--0ac6436a"],
    {
        738584: (e, t, r) => {
            r.d(t, { o: () => h, Z: () => m });
            var n = r(807896),
                a = r(202784),
                s = r(928316),
                i = r(682474),
                o = r(392237),
                l = r(893164),
                c = r(395367),
                u = r(908478);
            function p(e) {
                let t = d(e);
                return (e) => {
                    const r = d(e);
                    return (0, u.Z)(t, r) || (t = r), t;
                };
            }
            function d(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function h({ children: e, periodic: t }) {
                const r = t ? f.PeriodicContext.Consumer : f.Context.Consumer;
                return a.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: n, guestsState: a, playerApi: s, playerState: i } = t;
                    return s && n && i ? e({ aspectRatio: r, guestsState: a, playerApi: s, playerState: i, containerRef: n }) : null;
                });
            }
            class f extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: p(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: r, playerApi: n, stablePlayerState: a } = this.state;
                            return n && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: r, playerApi: n, playerState: a, containerRef: this._containerRef }) : e) : null;
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
                        const e = s.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const r = { error: e, info: t };
                    this.setState(() => ({ hasError: r }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: r, stablePlayerState: s } = this.state,
                        { additionalBadges: o, aspectRatio: u, basePlayerClass: p, children: d, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: m, objectFitVideo: g, onApiReady: b, onScroll: v, onStateUpdate: S, playerId: C, size: P, ..._ } = this.props,
                        E = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        R = { ...E, playerState: s };
                    return a.createElement(
                        i.Z,
                        { isFullScreen: m, onScroll: v, ratio: u, style: [y.root, y[P]] },
                        this.state.hasError
                            ? a.createElement(l.Z, { onReloadPress: this._handleReload })
                            : a.createElement(
                                  f.Context.Provider,
                                  { value: R },
                                  a.createElement(
                                      f.PeriodicContext.Provider,
                                      { value: E },
                                      a.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => a.createElement(p, (0, n.Z)({}, _, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: g }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (f.Consumer = h), (f.defaultProps = { aspectRatio: o.default.theme.aspectRatios.landscape, size: "fill" }), (f.Context = a.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (f.PeriodicContext = a.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const y = o.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                m = f;
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n,
                a = r(202784);
            class s extends a.Component {
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
            class i extends a.Component {
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
                    return a.createElement(i.RegistrationContext.Provider, { value: this._registrationContext }, a.createElement(i.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (n = i), (i.MetadataSubscriber = ({ children: e, playerId: t }) => a.createElement(n.ProviderContext.Consumer, null, ({ players: r }) => a.createElement(s, { playerApi: r && r[t] }, e))), (i.RegistrationContext = a.createContext({ registerPlayer: void 0 })), (i.ProviderContext = a.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(202784),
                a = r(325686),
                s = r(111677),
                i = r.n(s),
                o = r(355830),
                l = r(731708),
                c = r(154003),
                u = r(992942),
                p = r(392237);
            const d = i().a9edea48;
            function h(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: s, imageSrc: i, onReloadPress: h } = e;
                return n.createElement(a.Z, { style: [p.default.absoluteFill, t ? null : f.blankOverlay] }, t ? n.createElement(n.Fragment, null, n.createElement(a.Z, { style: f.backgroundImage }, i && n.createElement(u.Z, { resizeMode: "cover", source: i, style: p.default.absoluteFill })), n.createElement(a.Z, { style: f.overlay })) : null, n.createElement(a.Z, { style: f.errorContainer }, n.createElement(a.Z, null, s ? n.createElement(o.default, { style: f.playErrorIcon }) : null), n.createElement(a.Z, { focusable: !0 }, n.createElement(l.ZP, { style: t ? f.errorMsgTextWhite : f.errorMsgTextGray }, r)), h ? n.createElement(c.ZP, { onPress: h, style: f.buttonContainer, type: "brandFilled" }, d) : null));
            }
            const f = p.default.create((e) => ({ backgroundImage: { ...p.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...p.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        127957: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784);
            const a = (0, r(523561).Z)({ loader: () => r.e("loaders.video.VideoPlayer").then(r.bind(r, 962159)), renderPlaceholder: () => n.createElement("div", { "data-testid": "videoPlayer" }) });
        },
        614425: (e, t, r) => {
            r.d(t, { Y7: () => n });
            const n = r(795897).default;
        },
        482609: (e) => {
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var r = (function (e, t) {
                                var r = e[1] || "",
                                    n = e[3];
                                if (!n) return r;
                                if (t && "function" == typeof btoa) {
                                    var a = ((i = n), (o = btoa(unescape(encodeURIComponent(JSON.stringify(i))))), (l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o)), "/*# ".concat(l, " */")),
                                        s = n.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */");
                                        });
                                    return [r].concat(s).concat([a]).join("\n");
                                }
                                var i, o, l;
                                return [r].join("\n");
                            })(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
                        }).join("");
                    }),
                    (t.i = function (e, r, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var a = {};
                        if (n)
                            for (var s = 0; s < this.length; s++) {
                                var i = this[s][0];
                                null != i && (a[i] = !0);
                            }
                        for (var o = 0; o < e.length; o++) {
                            var l = [].concat(e[o]);
                            (n && a[l[0]]) || (r && (l[2] ? (l[2] = "".concat(r, " and ").concat(l[2])) : (l[2] = r)), t.push(l));
                        }
                    }),
                    t
                );
            };
        },
        46062: (e, t, r) => {
            var n,
                a = function () {
                    return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
                },
                s = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var r = document.querySelector(t);
                            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                                try {
                                    r = r.contentDocument.head;
                                } catch (e) {
                                    r = null;
                                }
                            e[t] = r;
                        }
                        return e[t];
                    };
                })(),
                i = [];
            function o(e) {
                for (var t = -1, r = 0; r < i.length; r++)
                    if (i[r].identifier === e) {
                        t = r;
                        break;
                    }
                return t;
            }
            function l(e, t) {
                for (var r = {}, n = [], a = 0; a < e.length; a++) {
                    var s = e[a],
                        l = t.base ? s[0] + t.base : s[0],
                        c = r[l] || 0,
                        u = "".concat(l, " ").concat(c);
                    r[l] = c + 1;
                    var p = o(u),
                        d = { css: s[1], media: s[2], sourceMap: s[3] };
                    -1 !== p ? (i[p].references++, i[p].updater(d)) : i.push({ identifier: u, updater: m(d, t), references: 1 }), n.push(u);
                }
                return n;
            }
            function c(e) {
                var t = document.createElement("style"),
                    n = e.attributes || {};
                if (void 0 === n.nonce) {
                    var a = r.nc;
                    a && (n.nonce = a);
                }
                if (
                    (Object.keys(n).forEach(function (e) {
                        t.setAttribute(e, n[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var i = s(e.insert || "head");
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(t);
                }
                return t;
            }
            var u,
                p =
                    ((u = []),
                    function (e, t) {
                        return (u[e] = t), u.filter(Boolean).join("\n");
                    });
            function d(e, t, r, n) {
                var a = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
                if (e.styleSheet) e.styleSheet.cssText = p(t, a);
                else {
                    var s = document.createTextNode(a),
                        i = e.childNodes;
                    i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(s, i[t]) : e.appendChild(s);
                }
            }
            function h(e, t, r) {
                var n = r.css,
                    a = r.media,
                    s = r.sourceMap;
                if ((a ? e.setAttribute("media", a) : e.removeAttribute("media"), s && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), e.styleSheet)) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            }
            var f = null,
                y = 0;
            function m(e, t) {
                var r, n, a;
                if (t.singleton) {
                    var s = y++;
                    (r = f || (f = c(t))), (n = d.bind(null, r, s, !1)), (a = d.bind(null, r, s, !0));
                } else
                    (r = c(t)),
                        (n = h.bind(null, r, t)),
                        (a = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(r);
                        });
                return (
                    n(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            n((e = t));
                        } else a();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = a());
                var r = l((e = e || []), t);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var n = 0; n < r.length; n++) {
                            var a = o(r[n]);
                            i[a].references--;
                        }
                        for (var s = l(e, t), c = 0; c < r.length; c++) {
                            var u = o(r[c]);
                            0 === i[u].references && (i[u].updater(), i.splice(u, 1));
                        }
                        r = s;
                    }
                };
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--0ac6436a.4c3f188a.js.map
