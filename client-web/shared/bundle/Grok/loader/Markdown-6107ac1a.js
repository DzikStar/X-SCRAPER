"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown-6107ac1a"],
    {
        349929: (e, t, r) => {
            r.d(t, { G: () => O });
            var n = r(181674),
                i = r(213980),
                o = r.n(i),
                a = r(202784);
            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? s(Object(r), !0).forEach(function (t) {
                              u(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : s(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function c(e) {
                return (
                    (c =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    c(e)
                );
            }
            function u(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function f(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            i = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
                }
                return i;
            }
            function d(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return h(e);
                    })(e) ||
                    (function (e) {
                        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return h(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function p(e) {
                return (
                    (t = e),
                    (t -= 0) == t
                        ? e
                        : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                              return t ? t.toUpperCase() : "";
                          }))
                              .substr(0, 1)
                              .toLowerCase() + e.substr(1)
                );
                var t;
            }
            var m = ["style"];
            var y = !1;
            try {
                y = !0;
            } catch (e) {}
            function b(e) {
                return e && "object" === c(e) && e.prefix && e.iconName && e.icon ? e : n.Qc.icon ? n.Qc.icon(e) : null === e ? null : e && "object" === c(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? { prefix: e[0], iconName: e[1] } : "string" == typeof e ? { prefix: "fas", iconName: e } : void 0;
            }
            function g(e, t) {
                return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t) ? u({}, e, t) : {};
            }
            var v = { border: !1, className: "", mask: null, maskId: null, fixedWidth: !1, inverse: !1, flip: !1, icon: null, listItem: !1, pull: null, pulse: !1, rotation: null, size: null, spin: !1, spinPulse: !1, spinReverse: !1, beat: !1, fade: !1, beatFade: !1, bounce: !1, shake: !1, symbol: !1, title: "", titleId: null, transform: null, swapOpacity: !1 },
                O = a.forwardRef(function (e, t) {
                    var r = l(l({}, v), e),
                        i = r.icon,
                        o = r.mask,
                        a = r.symbol,
                        s = r.className,
                        c = r.title,
                        f = r.titleId,
                        h = r.maskId,
                        p = b(i),
                        m = g(
                            "classes",
                            [].concat(
                                d(
                                    (function (e) {
                                        var t,
                                            r = e.beat,
                                            n = e.fade,
                                            i = e.beatFade,
                                            o = e.bounce,
                                            a = e.shake,
                                            s = e.flash,
                                            l = e.spin,
                                            c = e.spinPulse,
                                            f = e.spinReverse,
                                            d = e.pulse,
                                            h = e.fixedWidth,
                                            p = e.inverse,
                                            m = e.border,
                                            y = e.listItem,
                                            b = e.flip,
                                            g = e.size,
                                            v = e.rotation,
                                            O = e.pull,
                                            w = (u((t = { "fa-beat": r, "fa-fade": n, "fa-beat-fade": i, "fa-bounce": o, "fa-shake": a, "fa-flash": s, "fa-spin": l, "fa-spin-reverse": f, "fa-spin-pulse": c, "fa-pulse": d, "fa-fw": h, "fa-inverse": p, "fa-border": m, "fa-li": y, "fa-flip": !0 === b, "fa-flip-horizontal": "horizontal" === b || "both" === b, "fa-flip-vertical": "vertical" === b || "both" === b }), "fa-".concat(g), null != g), u(t, "fa-rotate-".concat(v), null != v && 0 !== v), u(t, "fa-pull-".concat(O), null != O), u(t, "fa-swap-opacity", e.swapOpacity), t);
                                        return Object.keys(w)
                                            .map(function (e) {
                                                return w[e] ? e : null;
                                            })
                                            .filter(function (e) {
                                                return e;
                                            });
                                    })(r),
                                ),
                                d((s || "").split(" ")),
                            ),
                        ),
                        O = g("transform", "string" == typeof r.transform ? n.Qc.transform(r.transform) : r.transform),
                        E = g("mask", b(o)),
                        I = (0, n.qv)(p, l(l(l(l({}, m), O), E), {}, { symbol: a, title: c, titleId: f, maskId: h }));
                    if (!I)
                        return (
                            (function () {
                                var e;
                                !y && console && "function" == typeof console.error && (e = console).error.apply(e, arguments);
                            })("Could not find icon", p),
                            null
                        );
                    var k = I.abstract,
                        S = { ref: t };
                    return (
                        Object.keys(r).forEach(function (e) {
                            v.hasOwnProperty(e) || (S[e] = r[e]);
                        }),
                        w(k[0], S)
                    );
                });
            (O.displayName = "FontAwesomeIcon"), (O.propTypes = { beat: o().bool, border: o().bool, beatFade: o().bool, bounce: o().bool, className: o().string, fade: o().bool, flash: o().bool, mask: o().oneOfType([o().object, o().array, o().string]), maskId: o().string, fixedWidth: o().bool, inverse: o().bool, flip: o().oneOf([!0, !1, "horizontal", "vertical", "both"]), icon: o().oneOfType([o().object, o().array, o().string]), listItem: o().bool, pull: o().oneOf(["right", "left"]), pulse: o().bool, rotation: o().oneOf([0, 90, 180, 270]), shake: o().bool, size: o().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]), spin: o().bool, spinPulse: o().bool, spinReverse: o().bool, symbol: o().oneOfType([o().bool, o().string]), title: o().string, titleId: o().string, transform: o().oneOfType([o().string, o().object]), swapOpacity: o().bool });
            var w = function e(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof r) return r;
                var i = (r.children || []).map(function (r) {
                        return e(t, r);
                    }),
                    o = Object.keys(r.attributes || {}).reduce(
                        function (e, t) {
                            var n = r.attributes[t];
                            switch (t) {
                                case "class":
                                    (e.attrs.className = n), delete r.attributes.class;
                                    break;
                                case "style":
                                    e.attrs.style = n
                                        .split(";")
                                        .map(function (e) {
                                            return e.trim();
                                        })
                                        .filter(function (e) {
                                            return e;
                                        })
                                        .reduce(function (e, t) {
                                            var r,
                                                n = t.indexOf(":"),
                                                i = p(t.slice(0, n)),
                                                o = t.slice(n + 1).trim();
                                            return i.startsWith("webkit") ? (e[((r = i), r.charAt(0).toUpperCase() + r.slice(1))] = o) : (e[i] = o), e;
                                        }, {});
                                    break;
                                default:
                                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? (e.attrs[t.toLowerCase()] = n) : (e.attrs[p(t)] = n);
                            }
                            return e;
                        },
                        { attrs: {} },
                    ),
                    a = n.style,
                    s = void 0 === a ? {} : a,
                    c = f(n, m);
                return (o.attrs.style = l(l({}, o.attrs.style), s)), t.apply(void 0, [r.tag, l(l({}, o.attrs), c)].concat(d(i)));
            }.bind(null, a.createElement);
        },
        908629: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784);
            const i = { transitionDuration: "250ms", transitionProperty: "opacity, height", transitionTimingFunction: "ease", willChange: "opacity" };
            function o({ children: e, show: t }) {
                const [r, o] = n.useState(!t);
                return (
                    n.useEffect(() => {
                        t && r && o(!1);
                    }, [r, t]),
                    n.useMemo(() => {
                        const a = { ...i, opacity: t ? 1 : 0 };
                        return n.createElement(
                            "div",
                            {
                                onTransitionEnd: (e) => {
                                    t || r || o(!0);
                                },
                                style: a,
                            },
                            r ? null : e,
                        );
                    }, [e, t, r])
                );
            }
        },
        739711: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var n = r(807896),
                i = r(231461),
                o = r(202784),
                a = r(928316),
                s = r(19017);
            const l = function (e) {
                var t = e.children,
                    r = o.useRef(null);
                if (s.Z && !r.current) {
                    var n = document.createElement("div");
                    n && document.body && (document.body.appendChild(n), (r.current = n));
                }
                return (
                    o.useEffect(() => {
                        if (s.Z)
                            return () => {
                                document.body && r.current && (document.body.removeChild(r.current), (r.current = null));
                            };
                    }, []),
                    r.current && s.Z ? a.createPortal(t, r.current) : null
                );
            };
            var c = r(297689),
                u = r(890601);
            function f(e, t) {
                return "slide" === e ? (t ? h : p) : "fade" === e ? (t ? m : y) : t ? d.container : d.hidden;
            }
            var d = c.Z.create({ container: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: 9999 }, animatedIn: { animationDuration: "300ms", animationTimingFunction: "ease-in" }, animatedOut: { pointerEvents: "none", animationDuration: "300ms", animationTimingFunction: "ease-out" }, fadeIn: { opacity: 1, animationKeyframes: { "0%": { opacity: 0 }, "100%": { opacity: 1 } } }, fadeOut: { opacity: 0, animationKeyframes: { "0%": { opacity: 1 }, "100%": { opacity: 0 } } }, slideIn: { transform: "translateY(0%)", animationKeyframes: { "0%": { transform: "translateY(100%)" }, "100%": { transform: "translateY(0%)" } } }, slideOut: { transform: "translateY(100%)", animationKeyframes: { "0%": { transform: "translateY(0%)" }, "100%": { transform: "translateY(100%)" } } }, hidden: { opacity: 0 } }),
                h = [d.container, d.animatedIn, d.slideIn],
                p = [d.container, d.animatedOut, d.slideOut],
                m = [d.container, d.animatedIn, d.fadeIn],
                y = [d.container, d.animatedOut, d.fadeOut];
            const b = function (e) {
                var t = e.animationType,
                    r = e.children,
                    n = e.onDismiss,
                    i = e.onShow,
                    a = e.visible,
                    s = o.useState(!1),
                    l = s[0],
                    c = s[1],
                    h = o.useRef(!1),
                    p = o.useRef(!1),
                    m = t && "none" !== t,
                    y = o.useCallback(
                        (e) => {
                            (e && e.currentTarget !== e.target) || (a ? i && i() : c(!1));
                        },
                        [i, a],
                    );
                return (
                    o.useEffect(() => {
                        p.current && !l && n && n(), (p.current = l);
                    }, [l, n]),
                    o.useEffect(() => {
                        a && c(!0), a === h.current || m || y(), (h.current = a);
                    }, [m, a, y]),
                    l || a ? (0, u.Z)("div", { style: l ? f(t, a) : d.hidden, onAnimationEnd: y, children: r }) : null
                );
            };
            var g = r(325686),
                v = ["active", "children", "onRequestClose", "transparent"],
                O = o.forwardRef((e, t) => {
                    var r = e.active,
                        a = e.children,
                        l = e.onRequestClose,
                        c = e.transparent,
                        u = (0, i.Z)(e, v);
                    o.useEffect(() => {
                        if (s.Z) {
                            var e = (e) => {
                                r && "Escape" === e.key && (e.stopPropagation(), l && l());
                            };
                            return document.addEventListener("keyup", e, !1), () => document.removeEventListener("keyup", e, !1);
                        }
                    }, [r, l]);
                    var f = o.useMemo(() => [w.modal, c ? w.modalTransparent : w.modalOpaque], [c]);
                    return o.createElement(g.Z, (0, n.Z)({}, u, { "aria-modal": !0, ref: t, role: r ? "dialog" : null, style: f }), o.createElement(g.Z, { style: w.container }, a));
                }),
                w = c.Z.create({ modal: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }, modalTransparent: { backgroundColor: "transparent" }, modalOpaque: { backgroundColor: "white" }, container: { top: 0, flex: 1 } });
            const E = O;
            var I = r(386308),
                k = () => (0, u.Z)("div", { role: "none", tabIndex: 0, style: C.focusBracket });
            function S(e) {
                if (!s.Z) return !1;
                try {
                    e.focus();
                } catch (e) {}
                return document.activeElement === e;
            }
            function P(e) {
                for (var t = 0; t < e.childNodes.length; t++) {
                    var r = e.childNodes[t];
                    if (S(r) || P(r)) return !0;
                }
                return !1;
            }
            function j(e) {
                for (var t = e.childNodes.length - 1; t >= 0; t--) {
                    var r = e.childNodes[t];
                    if (S(r) || j(r)) return !0;
                }
                return !1;
            }
            const x = (e) => {
                var t = e.active,
                    r = e.children,
                    n = o.useRef(),
                    i = o.useRef({ trapFocusInProgress: !1, lastFocusedElement: null });
                return (
                    o.useEffect(() => {
                        if (s.Z) {
                            var e = () => {
                                if (null != n.current && !i.current.trapFocusInProgress && t) {
                                    try {
                                        if (((i.current.trapFocusInProgress = !0), document.activeElement instanceof Node && !n.current.contains(document.activeElement))) {
                                            var e = P(n.current);
                                            i.current.lastFocusedElement === document.activeElement && (e = j(n.current)), !e && null != n.current && document.activeElement && I.Z.focus(n.current);
                                        }
                                    } finally {
                                        i.current.trapFocusInProgress = !1;
                                    }
                                    i.current.lastFocusedElement = document.activeElement;
                                }
                            };
                            return e(), document.addEventListener("focus", e, !0), () => document.removeEventListener("focus", e, !0);
                        }
                    }, [t]),
                    o.useEffect(function () {
                        if (s.Z) {
                            var e = document.activeElement;
                            return function () {
                                e && document.contains(e) && I.Z.focus(e);
                            };
                        }
                    }, []),
                    o.createElement(o.Fragment, null, o.createElement(k, null), o.createElement(g.Z, { ref: n }, r), o.createElement(k, null))
                );
            };
            var C = c.Z.create({ focusBracket: { outlineStyle: "none" } }),
                R = ["animationType", "children", "onDismiss", "onRequestClose", "onShow", "transparent", "visible"],
                A = 0,
                Z = [],
                L = {};
            function N() {
                if (0 !== Z.length) {
                    var e = Z[Z.length - 1];
                    Z.forEach((t) => {
                        t in L && L[t](t === e);
                    });
                }
            }
            function T(e) {
                e in L && (L[e](!1), delete L[e]);
                var t = Z.indexOf(e);
                -1 !== t && (Z.splice(t, 1), N());
            }
            const _ = o.forwardRef((e, t) => {
                var r = e.animationType,
                    a = e.children,
                    s = e.onDismiss,
                    c = e.onRequestClose,
                    u = e.onShow,
                    f = e.transparent,
                    d = e.visible,
                    h = void 0 === d || d,
                    p = (0, i.Z)(e, R),
                    m = o.useMemo(() => A++, []),
                    y = o.useState(!1),
                    g = y[0],
                    v = y[1],
                    O = o.useCallback(() => {
                        T(m), s && s();
                    }, [m, s]),
                    w = o.useCallback(() => {
                        !(function (e, t) {
                            T(e), Z.push(e), (L[e] = t), N();
                        })(m, v),
                            u && u();
                    }, [m, u]);
                return o.useEffect(() => () => T(m), [m]), o.createElement(l, null, o.createElement(b, { animationType: r, onDismiss: O, onShow: w, visible: h }, o.createElement(x, { active: g }, o.createElement(E, (0, n.Z)({}, p, { active: g, onRequestClose: c, ref: t, transparent: f }), a))));
            });
        },
        616531: (e, t, r) => {
            function n(e, t, r, n) {
                return new (r || (r = Promise))(function (i, o) {
                    function a(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function s(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })).then(a, s);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            }
            function i(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }
            r.d(t, { aN: () => l }), "function" == typeof SuppressedError && SuppressedError;
            var o = i(function e(t, r) {
                if (t === r) return !0;
                if (t && r && "object" == typeof t && "object" == typeof r) {
                    if (t.constructor !== r.constructor) return !1;
                    var n, i, o;
                    if (Array.isArray(t)) {
                        if ((n = t.length) != r.length) return !1;
                        for (i = n; 0 != i--; ) if (!e(t[i], r[i])) return !1;
                        return !0;
                    }
                    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
                    if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length) return !1;
                    for (i = n; 0 != i--; ) if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
                    for (i = n; 0 != i--; ) {
                        var a = o[i];
                        if (!e(t[a], r[a])) return !1;
                    }
                    return !0;
                }
                return t != t && r != r;
            });
            const a = "__googleMapsScriptId";
            var s;
            !(function (e) {
                (e[(e.INITIALIZED = 0)] = "INITIALIZED"), (e[(e.LOADING = 1)] = "LOADING"), (e[(e.SUCCESS = 2)] = "SUCCESS"), (e[(e.FAILURE = 3)] = "FAILURE");
            })(s || (s = {}));
            class l {
                constructor({ apiKey: e, authReferrerPolicy: t, channel: r, client: n, id: i = a, language: s, libraries: c = [], mapIds: u, nonce: f, region: d, retries: h = 3, url: p = "https://maps.googleapis.com/maps/api/js", version: m }) {
                    if (((this.callbacks = []), (this.done = !1), (this.loading = !1), (this.errors = []), (this.apiKey = e), (this.authReferrerPolicy = t), (this.channel = r), (this.client = n), (this.id = i || a), (this.language = s), (this.libraries = c), (this.mapIds = u), (this.nonce = f), (this.region = d), (this.retries = h), (this.url = p), (this.version = m), l.instance)) {
                        if (!o(this.options, l.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(l.instance.options)}`);
                        return l.instance;
                    }
                    l.instance = this;
                }
                get options() {
                    return { version: this.version, apiKey: this.apiKey, channel: this.channel, client: this.client, id: this.id, libraries: this.libraries, language: this.language, region: this.region, mapIds: this.mapIds, nonce: this.nonce, url: this.url, authReferrerPolicy: this.authReferrerPolicy };
                }
                get status() {
                    return this.errors.length ? s.FAILURE : this.done ? s.SUCCESS : this.loading ? s.LOADING : s.INITIALIZED;
                }
                get failed() {
                    return this.done && !this.loading && this.errors.length >= this.retries + 1;
                }
                createUrl() {
                    let e = this.url;
                    return (e += "?callback=__googleMapsCallback&loading=async"), this.apiKey && (e += `&key=${this.apiKey}`), this.channel && (e += `&channel=${this.channel}`), this.client && (e += `&client=${this.client}`), this.libraries.length > 0 && (e += `&libraries=${this.libraries.join(",")}`), this.language && (e += `&language=${this.language}`), this.region && (e += `&region=${this.region}`), this.version && (e += `&v=${this.version}`), this.mapIds && (e += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (e += `&auth_referrer_policy=${this.authReferrerPolicy}`), e;
                }
                deleteScript() {
                    const e = document.getElementById(this.id);
                    e && e.remove();
                }
                load() {
                    return this.loadPromise();
                }
                loadPromise() {
                    return new Promise((e, t) => {
                        this.loadCallback((r) => {
                            r ? t(r.error) : e(window.google);
                        });
                    });
                }
                importLibrary(e) {
                    return this.execute(), google.maps.importLibrary(e);
                }
                loadCallback(e) {
                    this.callbacks.push(e), this.execute();
                }
                setScript() {
                    var e, t;
                    if (document.getElementById(this.id)) return void this.callback();
                    const r = { key: this.apiKey, channel: this.channel, client: this.client, libraries: this.libraries.length && this.libraries, v: this.version, mapIds: this.mapIds, language: this.language, region: this.region, authReferrerPolicy: this.authReferrerPolicy };
                    Object.keys(r).forEach((e) => !r[e] && delete r[e]),
                        (null === (t = null === (e = null === window || void 0 === window ? void 0 : window.google) || void 0 === e ? void 0 : e.maps) || void 0 === t ? void 0 : t.importLibrary) ||
                            ((e) => {
                                let t,
                                    r,
                                    i,
                                    o = "google",
                                    a = "importLibrary",
                                    s = "__ib__",
                                    l = document,
                                    c = window;
                                c = c[o] || (c[o] = {});
                                const u = c.maps || (c.maps = {}),
                                    f = new Set(),
                                    d = new URLSearchParams(),
                                    h = () =>
                                        t ||
                                        (t = new Promise((a, c) =>
                                            n(this, void 0, void 0, function* () {
                                                var n;
                                                for (i in (yield (r = l.createElement("script")), (r.id = this.id), d.set("libraries", [...f] + ""), e))
                                                    d.set(
                                                        i.replace(/[A-Z]/g, (e) => "_" + e[0].toLowerCase()),
                                                        e[i],
                                                    );
                                                d.set("callback", o + ".maps." + s), (r.src = this.url + "?" + d), (u[s] = a), (r.onerror = () => (t = c(Error("The Google Maps JavaScript API could not load.")))), (r.nonce = this.nonce || (null === (n = l.querySelector("script[nonce]")) || void 0 === n ? void 0 : n.nonce) || ""), l.head.append(r);
                                            }),
                                        ));
                                u[a] || (u[a] = (e, ...t) => f.add(e) && h().then(() => u[a](e, ...t)));
                            })(r);
                    const i = this.libraries.map((e) => this.importLibrary(e));
                    i.length || i.push(this.importLibrary("core")),
                        Promise.all(i).then(
                            () => this.callback(),
                            (e) => {
                                const t = new ErrorEvent("error", { error: e });
                                this.loadErrorCallback(t);
                            },
                        );
                }
                reset() {
                    this.deleteScript(), (this.done = !1), (this.loading = !1), (this.errors = []), (this.onerrorEvent = null);
                }
                resetIfRetryingFailed() {
                    this.failed && this.reset();
                }
                loadErrorCallback(e) {
                    if ((this.errors.push(e), this.errors.length <= this.retries)) {
                        const e = this.errors.length * Math.pow(2, this.errors.length);
                        setTimeout(() => {
                            this.deleteScript(), this.setScript();
                        }, e);
                    } else (this.onerrorEvent = e), this.callback();
                }
                callback() {
                    (this.done = !0),
                        (this.loading = !1),
                        this.callbacks.forEach((e) => {
                            e(this.onerrorEvent);
                        }),
                        (this.callbacks = []);
                }
                execute() {
                    if ((this.resetIfRetryingFailed(), !this.loading))
                        if (this.done) this.callback();
                        else {
                            if (window.google && window.google.maps && window.google.maps.version) return void this.callback();
                            (this.loading = !0), this.setScript();
                        }
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-6107ac1a.30b6836a.js.map
