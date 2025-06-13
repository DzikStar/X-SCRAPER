window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-3e5eb623"],
        {
            25825: (e, t, n) => {
                n.d(t, { Z: () => p });
                var r = n(807896),
                    a = n(231461),
                    o = n(202784),
                    i = n(297689),
                    s = n(325686),
                    l = ["animating", "color", "hidesWhenStopped", "size", "style"],
                    u = (e) => o.createElement("circle", { cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4", style: e }),
                    c = o.forwardRef((e, t) => {
                        var n = e.animating,
                            i = void 0 === n || n,
                            c = e.color,
                            p = void 0 === c ? "#1976D2" : c,
                            g = e.hidesWhenStopped,
                            v = void 0 === g || g,
                            m = e.size,
                            f = void 0 === m ? "small" : m,
                            y = e.style,
                            b = (0, a.Z)(e, l),
                            w = o.createElement("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%" }, u({ stroke: p, opacity: 0.2 }), u({ stroke: p, strokeDasharray: 80, strokeDashoffset: 60 }));
                        return o.createElement(s.Z, (0, r.Z)({}, b, { "aria-valuemax": 1, "aria-valuemin": 0, ref: t, role: "progressbar", style: [d.container, y] }), o.createElement(s.Z, { children: w, style: ["number" == typeof f ? { height: f, width: f } : h[f], d.animation, !i && d.animationPause, !i && v && d.hidesWhenStopped] }));
                    });
                c.displayName = "ActivityIndicator";
                var d = i.Z.create({ container: { alignItems: "center", justifyContent: "center" }, hidesWhenStopped: { visibility: "hidden" }, animation: { animationDuration: "0.75s", animationKeyframes: [{ "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } }], animationTimingFunction: "linear", animationIterationCount: "infinite" }, animationPause: { animationPlayState: "paused" } }),
                    h = i.Z.create({ small: { width: 20, height: 20 }, large: { width: 36, height: 36 } });
                const p = c;
            },
            896801: (e, t, n) => {
                n.d(t, { Z: () => b });
                n(133028);
                var r = n(614983),
                    a = n.n(r),
                    o = n(440770),
                    i = n(807896),
                    s = n(202784),
                    l = n(297689),
                    u = n(325686),
                    c = s.createContext(null),
                    d = s.forwardRef((e, t) => {
                        var n = e.children,
                            r = e.WrapperComponent,
                            a = s.createElement(u.Z, { children: n, key: 1, style: p.appContainer });
                        return r && (a = s.createElement(r, null, a)), s.createElement(c.Provider, { value: e.rootTag }, s.createElement(u.Z, { ref: t, style: p.appContainer }, a));
                    });
                d.displayName = "AppContainer";
                const h = d;
                var p = l.Z.create({ appContainer: { flex: 1, pointerEvents: "box-none" } }),
                    g = n(800525);
                var v,
                    m = {},
                    f = {},
                    y = (e) => e();
                class b {
                    static getAppKeys() {
                        return Object.keys(f);
                    }
                    static getApplication(e, t) {
                        return a()(f[e] && f[e].getApplication, "Application " + e + " has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent."), f[e].getApplication(t);
                    }
                    static registerComponent(e, t) {
                        return (
                            (f[e] = {
                                getApplication: (e) => {
                                    return (
                                        (n = y(t)),
                                        (r = e ? e.initialProps : m),
                                        (a = v && v(e)),
                                        {
                                            element: s.createElement(h, { WrapperComponent: a, rootTag: {} }, s.createElement(n, r)),
                                            getStyleElement: (e) => {
                                                var t = l.Z.getSheet();
                                                return s.createElement("style", (0, i.Z)({}, e, { dangerouslySetInnerHTML: { __html: t.textContent }, id: t.id }));
                                            },
                                        }
                                    );
                                    var n, r, a;
                                },
                                run: (e) => {
                                    return (n = y(t)), (r = v && v(e)), (o = e.callback), (i = { hydrate: e.hydrate || !1, initialProps: e.initialProps || m, mode: e.mode || "concurrent", rootTag: e.rootTag }), (l = i.hydrate), (u = i.initialProps), (c = i.mode), (d = i.rootTag), (p = l ? ("concurrent" === c ? g.ZB : g.hS) : "concurrent" === c ? g.sY : g.ZP), a()(d, "Expect to have a valid rootTag, instead got ", d), p(s.createElement(h, { WrapperComponent: r, ref: o, rootTag: d }, s.createElement(n, u)), d);
                                    var n, r, o, i, l, u, c, d, p;
                                },
                            }),
                            e
                        );
                    }
                    static registerConfig(e) {
                        e.forEach((e) => {
                            var t = e.appKey,
                                n = e.component,
                                r = e.run;
                            r ? b.registerRunnable(t, r) : (a()(n, "No component provider passed in"), b.registerComponent(t, n));
                        });
                    }
                    static registerRunnable(e, t) {
                        return (f[e] = { run: t }), e;
                    }
                    static runApplication(e, t) {
                        return a()(f[e] && f[e].run, 'Application "' + e + '" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.'), f[e].run(t);
                    }
                    static setComponentProviderInstrumentationHook(e) {
                        y = e;
                    }
                    static setWrapperComponentProvider(e) {
                        v = e;
                    }
                    static unmountApplicationComponentAtRootTag(e) {
                        (0, o.Z)(e);
                    }
                }
            },
            726499: (e, t, n) => {
                n.d(t, { Z: () => g });
                var r = n(614983),
                    a = n.n(r),
                    o = n(28604),
                    i = n(19017),
                    s = i.Z && !document.hasOwnProperty("hidden") && document.hasOwnProperty("webkitHidden"),
                    l = ["change", "memoryWarning"],
                    u = s ? "webkitvisibilitychange" : "visibilitychange",
                    c = s ? "webkitVisibilityState" : "visibilityState",
                    d = "background",
                    h = "active",
                    p = null;
                class g {
                    static get currentState() {
                        if (!g.isAvailable) return h;
                        switch (document[c]) {
                            case "hidden":
                            case "prerender":
                            case "unloaded":
                                return d;
                            default:
                                return h;
                        }
                    }
                    static addEventListener(e, t) {
                        if (g.isAvailable && (a()(-1 !== l.indexOf(e), 'Trying to subscribe to unknown event: "%s"', e), "change" === e))
                            return (
                                p ||
                                    ((p = new o.Z()),
                                    document.addEventListener(
                                        u,
                                        () => {
                                            p && p.emit("change", g.currentState);
                                        },
                                        !1,
                                    )),
                                p.addListener(e, t)
                            );
                    }
                }
                g.isAvailable = i.Z && document[c];
            },
            576648: (e, t, n) => {
                var r;
                n.d(t, { Z: () => a });
                class a {
                    static isAvailable() {
                        return void 0 === r && (r = "function" == typeof document.queryCommandSupported && document.queryCommandSupported("copy")), r;
                    }
                    static getString() {
                        return Promise.resolve("");
                    }
                    static setString(e) {
                        var t = !1,
                            n = document.body;
                        if (n) {
                            var r = document.createElement("span");
                            (r.textContent = e), (r.style.opacity = "0"), (r.style.position = "absolute"), (r.style.whiteSpace = "pre-wrap"), (r.style.userSelect = "auto"), n.appendChild(r);
                            var a = window.getSelection();
                            a.removeAllRanges();
                            var o = document.createRange();
                            o.selectNodeContents(r), a.addRange(o);
                            try {
                                document.execCommand("copy"), (t = !0);
                            } catch (e) {}
                            a.removeAllRanges(), n.removeChild(r);
                        }
                        return t;
                    }
                }
            },
            878052: (e, t, n) => {
                n.d(t, { Z: () => d });
                var r = n(614983),
                    a = n.n(r),
                    o = n(19017),
                    i = { window: { fontScale: 1, height: 0, scale: 1, width: 0 }, screen: { fontScale: 1, height: 0, scale: 1, width: 0 } },
                    s = {},
                    l = o.Z;
                function u() {
                    if (o.Z) {
                        var e,
                            t,
                            n = window;
                        if (n.visualViewport) {
                            var r = n.visualViewport;
                            (e = Math.round(r.height * r.scale)), (t = Math.round(r.width * r.scale));
                        } else {
                            var a = n.document.documentElement;
                            (e = a.clientHeight), (t = a.clientWidth);
                        }
                        (i.window = { fontScale: 1, height: e, scale: n.devicePixelRatio || 1, width: t }), (i.screen = { fontScale: 1, height: n.screen.height, scale: n.devicePixelRatio || 1, width: n.screen.width });
                    }
                }
                function c() {
                    u(), Array.isArray(s.change) && s.change.forEach((e) => e(i));
                }
                class d {
                    static get(e) {
                        return l && ((l = !1), u()), a()(i[e], "No dimension set for key " + e), i[e];
                    }
                    static set(e) {
                        e && (o.Z ? a()(!1, "Dimensions cannot be set in the browser") : (null != e.screen && (i.screen = e.screen), null != e.window && (i.window = e.window)));
                    }
                    static addEventListener(e, t) {
                        return (
                            (s[e] = s[e] || []),
                            s[e].push(t),
                            {
                                remove: () => {
                                    this.removeEventListener(e, t);
                                },
                            }
                        );
                    }
                    static removeEventListener(e, t) {
                        Array.isArray(s[e]) && (s[e] = s[e].filter((e) => e !== t));
                    }
                }
                o.Z && (window.visualViewport ? window.visualViewport.addEventListener("resize", c, !1) : window.addEventListener("resize", c, !1));
            },
            555874: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = n(963337).Z;
            },
            45843: (e, t, n) => {
                n.d(t, { Z: () => P });
                var r = n(133028),
                    a = n(807896),
                    o = n(231461),
                    i = n(202784),
                    s = n(890601),
                    l = n(7971),
                    u = n(449609),
                    c = n(144617),
                    d = n(172016),
                    h = n(297689),
                    p = n(494210),
                    g = n(325686),
                    v = n(180612),
                    m = ["aria-label", "accessibilityLabel", "blurRadius", "defaultSource", "draggable", "onError", "onLayout", "onLoad", "onLoadEnd", "onLoadStart", "pointerEvents", "source", "style"],
                    f = "LOADED",
                    y = "LOADING",
                    b = 0,
                    w = /^(data:image\/svg\+xml;utf8,)(.*)/;
                function k(e) {
                    var t = null;
                    if ("number" == typeof e) {
                        var n = (0, l.W)(e);
                        if (null == n) throw new Error('Image: asset with ID "' + e + '" could not be found. Please check the image source or packager.');
                        var r = n.scales[0];
                        if (n.scales.length > 1) {
                            var a = d.Z.get();
                            r = n.scales.reduce((e, t) => (Math.abs(t - a) < Math.abs(e - a) ? t : e));
                        }
                        var o = 1 !== r ? "@" + r + "x" : "";
                        t = n ? n.httpServerLocation + "/" + n.name + o + "." + n.type : "";
                    } else "string" == typeof e ? (t = e) : e && "string" == typeof e.uri && (t = e.uri);
                    if (t) {
                        var i = t.match(w);
                        if (i) {
                            var s = i[1],
                                u = i[2];
                            return "" + s + encodeURIComponent(u);
                        }
                    }
                    return t;
                }
                var S = i.forwardRef((e, t) => {
                    var n = e["aria-label"],
                        r = e.accessibilityLabel,
                        d = e.blurRadius,
                        w = e.defaultSource,
                        S = e.draggable,
                        Z = e.onError,
                        P = e.onLayout,
                        x = e.onLoad,
                        _ = e.onLoadEnd,
                        T = e.onLoadStart,
                        L = e.pointerEvents,
                        I = e.source,
                        A = e.style,
                        R = (0, o.Z)(e, m),
                        z = n || r;
                    var M = i.useState(() => {
                            var e = k(I);
                            if (null != e && c.Z.has(e)) return f;
                            return "IDLE";
                        }),
                        O = M[0],
                        D = M[1],
                        q = i.useState({}),
                        H = q[0],
                        W = q[1],
                        N = i.useContext(p.Z),
                        F = i.useRef(null),
                        j = i.useRef(b++),
                        K = i.useRef(null),
                        Q = O === f || (O === y && null == w),
                        B = (function (e, t, n, r) {
                            var a = h.Z.flatten(e),
                                o = a.filter,
                                i = a.resizeMode,
                                s = a.shadowOffset,
                                l = a.tintColor;
                            a.resizeMode && (0, v.O)("Image.style.resizeMode", "Image: style.resizeMode is deprecated. Please use props.resizeMode."), a.tintColor && (0, v.O)("Image.style.tintColor", "Image: style.tintColor is deprecated. Please use props.tintColor.");
                            var c = [],
                                d = null;
                            if ((o && c.push(o), t && c.push("blur(" + t + "px)"), s)) {
                                var p = (0, u.Lm)(a);
                                p && c.push("drop-shadow(" + p + ")");
                            }
                            return (r || l) && null != n && c.push("url(#tint-" + n + ")"), c.length > 0 && (d = c.join(" ")), [i, d, l];
                        })(A, d, j.current, e.tintColor),
                        V = B[0],
                        $ = B[1],
                        G = B[2],
                        J = e.resizeMode || V || "cover",
                        U = e.tintColor || G,
                        Y = Q ? I : w,
                        X = k(Y),
                        ee = (function (e) {
                            if ("number" == typeof e) {
                                var t = (0, l.W)(e);
                                return { height: t.height, width: t.width };
                            }
                            if (null != e && !Array.isArray(e) && "object" == typeof e) return { height: e.height, width: e.width };
                        })(Y),
                        te = X ? 'url("' + X + '")' : null,
                        ne = (function () {
                            if (null != F.current && ("center" === J || "repeat" === J)) {
                                var e = F.current,
                                    t = e.naturalHeight,
                                    n = e.naturalWidth,
                                    r = H.height,
                                    a = H.width;
                                if (t && n && r && a) {
                                    var o = Math.min(1, a / n, r / t);
                                    return Math.ceil(o * n) + "px " + Math.ceil(o * t) + "px";
                                }
                            }
                        })(),
                        re = X ? (0, s.Z)("img", { alt: z || "", style: E.accessibilityImage$raw, draggable: S || !1, ref: F, src: X }) : null;
                    var ae = k(I);
                    return (
                        i.useEffect(() => {
                            function e() {
                                null != K.current && (c.Z.abort(K.current), (K.current = null));
                            }
                            return (
                                e(),
                                null != ae &&
                                    (D(y),
                                    T && T(),
                                    (K.current = c.Z.load(
                                        ae,
                                        function (e) {
                                            D(f), x && x(e), _ && _();
                                        },
                                        function () {
                                            D("ERRORED"), Z && Z({ nativeEvent: { error: "Failed to load resource " + ae + " (404)" } }), _ && _();
                                        },
                                    ))),
                                e
                            );
                        }, [ae, K, D, Z, x, _, T]),
                        i.createElement(
                            g.Z,
                            (0, a.Z)({}, R, {
                                "aria-label": z,
                                onLayout: function (e) {
                                    if ("center" === J || "repeat" === J || P) {
                                        var t = e.nativeEvent.layout;
                                        P && P(e), W(t);
                                    }
                                },
                                pointerEvents: L,
                                ref: t,
                                style: [E.root, N && E.inline, ee, A, E.undo, { boxShadow: null }],
                            }),
                            i.createElement(g.Z, { style: [E.image, C[J], { backgroundImage: te, filter: $ }, null != ne && { backgroundSize: ne }], suppressHydrationWarning: !0 }),
                            re,
                            (function (e, t) {
                                return e && null != t ? i.createElement("svg", { style: { position: "absolute", height: 0, visibility: "hidden", width: 0 } }, i.createElement("defs", null, i.createElement("filter", { id: "tint-" + t, suppressHydrationWarning: !0 }, i.createElement("feFlood", { floodColor: "" + e, key: e }), i.createElement("feComposite", { in2: "SourceAlpha", operator: "atop" })))) : null;
                            })(U, j.current),
                        )
                    );
                });
                S.displayName = "Image";
                var Z = S;
                (Z.getSize = function (e, t, n) {
                    c.Z.getSize(e, t, n);
                }),
                    (Z.prefetch = function (e) {
                        return c.Z.prefetch(e);
                    }),
                    (Z.queryCache = function (e) {
                        return c.Z.queryCache(e);
                    });
                var E = h.Z.create({ root: { flexBasis: "auto", overflow: "hidden", zIndex: 0 }, inline: { display: "inline-flex" }, undo: { blurRadius: null, shadowColor: null, shadowOpacity: null, shadowOffset: null, shadowRadius: null, tintColor: null, overlayColor: null, resizeMode: null }, image: (0, r.Z)((0, r.Z)({}, h.Z.absoluteFillObject), {}, { backgroundColor: "transparent", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%", width: "100%", zIndex: -1 }), accessibilityImage$raw: (0, r.Z)((0, r.Z)({}, h.Z.absoluteFillObject), {}, { height: "100%", opacity: 0, width: "100%", zIndex: -1 }) }),
                    C = h.Z.create({ center: { backgroundSize: "auto" }, contain: { backgroundSize: "contain" }, cover: { backgroundSize: "cover" }, none: { backgroundPosition: "0", backgroundSize: "auto" }, repeat: { backgroundPosition: "0", backgroundRepeat: "repeat", backgroundSize: "auto" }, stretch: { backgroundSize: "100% 100%" } });
                const P = Z;
            },
            18198: (e, t, n) => {
                n.d(t, { Z: () => w });
                var r = n(614983),
                    a = n.n(r),
                    o = n(133028);
                const i = class {
                    constructor(e) {
                        var t = e.onMoreTasks;
                        (this._onMoreTasks = t), (this._queueStack = [{ tasks: [], popable: !0 }]);
                    }
                    enqueue(e) {
                        this._getCurrentQueue().push(e);
                    }
                    enqueueTasks(e) {
                        e.forEach((e) => this.enqueue(e));
                    }
                    cancelTasks(e) {
                        this._queueStack = this._queueStack.map((t) => (0, o.Z)((0, o.Z)({}, t), {}, { tasks: t.tasks.filter((t) => -1 === e.indexOf(t)) })).filter((e, t) => e.tasks.length > 0 || 0 === t);
                    }
                    hasTasksToProcess() {
                        return this._getCurrentQueue().length > 0;
                    }
                    processNext() {
                        var e = this._getCurrentQueue();
                        if (e.length) {
                            var t = e.shift();
                            try {
                                "object" == typeof t && t.gen ? this._genPromise(t) : "object" == typeof t && t.run ? t.run() : (a()("function" == typeof t, "Expected Function, SimpleTask, or PromiseTask, but got:\n" + JSON.stringify(t, null, 2)), t());
                            } catch (e) {
                                throw ((e.message = "TaskQueue: Error with task " + (t.name || "") + ": " + e.message), e);
                            }
                        }
                    }
                    _getCurrentQueue() {
                        var e = this._queueStack.length - 1,
                            t = this._queueStack[e];
                        return t.popable && 0 === t.tasks.length && e > 0 ? (this._queueStack.pop(), this._getCurrentQueue()) : t.tasks;
                    }
                    _genPromise(e) {
                        var t = this._queueStack.push({ tasks: [], popable: !1 }) - 1,
                            n = this._queueStack[t];
                        e.gen()
                            .then(() => {
                                (n.popable = !0), this.hasTasksToProcess() && this._onMoreTasks();
                            })
                            .catch((t) => {
                                setTimeout(() => {
                                    throw ((t.message = "TaskQueue: Error resolving Promise in task " + e.name + ": " + t.message), t);
                                }, 0);
                            });
                    }
                };
                var s = n(28604),
                    l = n(302649),
                    u = new s.Z(),
                    c = {
                        Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
                        runAfterInteractions(e) {
                            var t = [],
                                n = new Promise((n) => {
                                    y(), e && t.push(e), t.push({ run: n, name: "resolve " + ((e && e.name) || "?") }), g.enqueueTasks(t);
                                });
                            return {
                                then: n.then.bind(n),
                                done: n.then.bind(n),
                                cancel: () => {
                                    g.cancelTasks(t);
                                },
                            };
                        },
                        createInteractionHandle() {
                            y();
                            var e = ++m;
                            return h.add(e), e;
                        },
                        clearInteractionHandle(e) {
                            a()(!!e, "Must provide a handle to clear."), y(), h.delete(e), p.add(e);
                        },
                        addListener: u.addListener.bind(u),
                        setDeadline(e) {
                            f = e;
                        },
                    },
                    d = new Set(),
                    h = new Set(),
                    p = new Set(),
                    g = new i({ onMoreTasks: y }),
                    v = 0,
                    m = 0,
                    f = -1;
                function y() {
                    v || (v = f > 0 ? setTimeout(b) : (0, l.Z)(b));
                }
                function b() {
                    v = 0;
                    var e = d.size;
                    h.forEach((e) => d.add(e)), p.forEach((e) => d.delete(e));
                    var t = d.size;
                    if ((0 !== e && 0 === t ? u.emit(c.Events.interactionComplete) : 0 === e && 0 !== t && u.emit(c.Events.interactionStart), 0 === t))
                        for (var n = Date.now(); g.hasTasksToProcess(); )
                            if ((g.processNext(), f > 0 && Date.now() - n >= f)) {
                                y();
                                break;
                            }
                    h.clear(), p.clear();
                }
                const w = c;
            },
            172016: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(878052);
                class a {
                    static get() {
                        return r.Z.get("window").scale;
                    }
                    static getFontScale() {
                        return r.Z.get("window").fontScale || a.get();
                    }
                    static getPixelSizeForLayoutSize(e) {
                        return Math.round(e * a.get());
                    }
                    static roundToNearestPixel(e) {
                        var t = a.get();
                        return Math.round(e * t) / t;
                    }
                }
            },
            33229: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    OS: "web",
                    select: (e) => ("web" in e ? e.web : e.default),
                    get isTesting() {
                        return !1;
                    },
                };
            },
            215045: (e, t, n) => {
                n.d(t, { Z: () => m });
                var r = n(807896),
                    a = n(231461),
                    o = n(202784),
                    i = n(752778),
                    s = n(435208),
                    l = n(748803),
                    u = n(297689),
                    c = n(325686),
                    d = ["children", "delayLongPress", "delayPressIn", "delayPressOut", "disabled", "onBlur", "onContextMenu", "onFocus", "onHoverIn", "onHoverOut", "onKeyDown", "onLongPress", "onPress", "onPressMove", "onPressIn", "onPressOut", "style", "tabIndex", "testOnly_hovered", "testOnly_pressed"];
                function h(e, t) {
                    var n = e.children,
                        u = e.delayLongPress,
                        h = e.delayPressIn,
                        v = e.delayPressOut,
                        m = e.disabled,
                        f = e.onBlur,
                        y = e.onContextMenu,
                        b = e.onFocus,
                        w = e.onHoverIn,
                        k = e.onHoverOut,
                        S = e.onKeyDown,
                        Z = e.onLongPress,
                        E = e.onPress,
                        C = e.onPressMove,
                        P = e.onPressIn,
                        x = e.onPressOut,
                        _ = e.style,
                        T = e.tabIndex,
                        L = e.testOnly_hovered,
                        I = e.testOnly_pressed,
                        A = (0, a.Z)(e, d),
                        R = p(!0 === L),
                        z = R[0],
                        M = R[1],
                        O = p(!1),
                        D = O[0],
                        q = O[1],
                        H = p(!0 === I),
                        W = H[0],
                        N = H[1],
                        F = (0, o.useRef)(null),
                        j = (0, i.Z)(t, F),
                        K = (0, o.useMemo)(() => ({ delayLongPress: u, delayPressStart: h, delayPressEnd: v, disabled: m, onLongPress: Z, onPress: E, onPressChange: N, onPressStart: P, onPressMove: C, onPressEnd: x }), [u, h, v, m, Z, E, P, C, x, N]),
                        Q = (0, l.Z)(F, K),
                        B = Q.onContextMenu,
                        V = Q.onKeyDown;
                    (0, s.Z)(F, { contain: !0, disabled: m, onHoverChange: M, onHoverStart: w, onHoverEnd: k });
                    var $,
                        G = { hovered: z, focused: D, pressed: W },
                        J = o.useCallback(
                            (e) => {
                                e.nativeEvent.target === F.current && (q(!1), null != f && f(e));
                            },
                            [F, q, f],
                        ),
                        U = o.useCallback(
                            (e) => {
                                e.nativeEvent.target === F.current && (q(!0), null != b && b(e));
                            },
                            [F, q, b],
                        ),
                        Y = o.useCallback(
                            (e) => {
                                null != B && B(e), null != y && y(e);
                            },
                            [y, B],
                        ),
                        X = o.useCallback(
                            (e) => {
                                null != V && V(e), null != S && S(e);
                            },
                            [S, V],
                        );
                    return ($ = void 0 !== T ? T : m ? -1 : 0), o.createElement(c.Z, (0, r.Z)({}, A, Q, { "aria-disabled": m, onBlur: J, onContextMenu: Y, onFocus: U, onKeyDown: X, ref: j, style: [m ? g.disabled : g.active, "function" == typeof _ ? _(G) : _], tabIndex: $ }), "function" == typeof n ? n(G) : n);
                }
                function p(e) {
                    var t = (0, o.useState)(!1);
                    return [t[0] || e, t[1]];
                }
                var g = u.Z.create({ active: { cursor: "pointer", touchAction: "manipulation" }, disabled: { pointerEvents: "box-none" } }),
                    v = (0, o.memo)((0, o.forwardRef)(h));
                v.displayName = "Pressable";
                const m = v;
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-3e5eb623.c8a03efa.js.map
