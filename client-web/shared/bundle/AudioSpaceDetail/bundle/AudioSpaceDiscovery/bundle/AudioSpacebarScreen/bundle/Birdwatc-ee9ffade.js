"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"],
    {
        534319: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(614983),
                o = n.n(r);
            const a = class {
                static share(e, t) {
                    return void 0 === t && (t = {}), o()("object" == typeof e && null !== e, "Content to share must be a valid object"), o()("string" == typeof e.url || "string" == typeof e.message, "At least one of URL and message is required"), o()("object" == typeof t && null !== t, "Options must be a valid object"), o()(!e.title || "string" == typeof e.title, "Invalid title: title should be a string."), void 0 !== window.navigator.share ? window.navigator.share({ title: e.title, text: e.message, url: e.url }) : Promise.reject(new Error("Share is not supported in this browser"));
                }
                static get sharedAction() {
                    return "sharedAction";
                }
                static get dismissedAction() {
                    return "dismissedAction";
                }
            };
        },
        3348: (e, t, n) => {
            n.d(t, { Z: () => w });
            var r = n(202784),
                o = n(890601),
                a = n(730464),
                i = n(389641),
                c = n(317709),
                l = n(156905),
                u = n(752778),
                d = n(805719),
                s = n(111453),
                p = n(981040),
                f = n(297689),
                v = n(901736),
                h = n(180612),
                m = (e, t) => {
                    if (
                        ((e, t) => {
                            var n = e.selectionEnd,
                                r = e.selectionStart,
                                o = t.start,
                                a = t.end;
                            return o !== r || a !== n;
                        })(e, t)
                    ) {
                        var n = t.start,
                            r = t.end;
                        try {
                            e.setSelectionRange(n, r || n);
                        } catch (e) {}
                    }
                },
                g = Object.assign({}, a.lG, a.LO, a._T, a.YB, a.Uy, a.hJ, a.E5, a.vr, { autoCapitalize: !0, autoComplete: !0, autoCorrect: !0, autoFocus: !0, defaultValue: !0, disabled: !0, lang: !0, maxLength: !0, onChange: !0, onScroll: !0, placeholder: !0, pointerEvents: !0, readOnly: !0, rows: !0, spellCheck: !0, value: !0, type: !0 });
            var b = null,
                y = r.forwardRef((e, t) => {
                    var n,
                        a,
                        f = e.autoCapitalize,
                        y = void 0 === f ? "sentences" : f,
                        w = e.autoComplete,
                        C = e.autoCompleteType,
                        R = e.autoCorrect,
                        E = void 0 === R || R,
                        x = e.blurOnSubmit,
                        T = e.caretHidden,
                        k = e.clearTextOnFocus,
                        L = e.dir,
                        M = e.editable,
                        Z = e.enterKeyHint,
                        F = e.inputMode,
                        A = e.keyboardType,
                        O = e.multiline,
                        N = void 0 !== O && O,
                        z = e.numberOfLines,
                        P = e.onBlur,
                        B = e.onChange,
                        j = e.onChangeText,
                        W = e.onContentSizeChange,
                        _ = e.onFocus,
                        I = e.onKeyPress,
                        D = e.onLayout,
                        H = e.onMoveShouldSetResponder,
                        K = e.onMoveShouldSetResponderCapture,
                        Y = e.onResponderEnd,
                        X = e.onResponderGrant,
                        U = e.onResponderMove,
                        q = e.onResponderReject,
                        G = e.onResponderRelease,
                        V = e.onResponderStart,
                        $ = e.onResponderTerminate,
                        J = e.onResponderTerminationRequest,
                        Q = e.onScrollShouldSetResponder,
                        ee = e.onScrollShouldSetResponderCapture,
                        te = e.onSelectionChange,
                        ne = e.onSelectionChangeShouldSetResponder,
                        re = e.onSelectionChangeShouldSetResponderCapture,
                        oe = e.onStartShouldSetResponder,
                        ae = e.onStartShouldSetResponderCapture,
                        ie = e.onSubmitEditing,
                        ce = e.placeholderTextColor,
                        le = e.readOnly,
                        ue = void 0 !== le && le,
                        de = e.returnKeyType,
                        se = e.rows,
                        pe = e.secureTextEntry,
                        fe = void 0 !== pe && pe,
                        ve = e.selection,
                        he = e.selectTextOnFocus,
                        me = e.showSoftInputOnFocus,
                        ge = e.spellCheck;
                    if (null != F) (a = F), (n = "email" === F ? "email" : "tel" === F ? "tel" : "search" === F ? "search" : "url" === F ? "url" : "text");
                    else if (null != A)
                        switch (((0, h.O)("keyboardType", "keyboardType is deprecated. Use inputMode."), A)) {
                            case "email-address":
                                n = "email";
                                break;
                            case "number-pad":
                            case "numeric":
                                a = "numeric";
                                break;
                            case "decimal-pad":
                                a = "decimal";
                                break;
                            case "phone-pad":
                                n = "tel";
                                break;
                            case "search":
                            case "web-search":
                                n = "search";
                                break;
                            case "url":
                                n = "url";
                                break;
                            default:
                                n = "text";
                        }
                    fe && (n = "password");
                    var be = r.useRef({ height: null, width: null }),
                        ye = r.useRef(null),
                        Se = r.useRef(null),
                        we = r.useRef(!1);
                    r.useEffect(() => {
                        ye.current && Se.current && m(ye.current, Se.current), (we.current = fe);
                    }, [fe]);
                    var Ce = r.useCallback(
                            (e) => {
                                if (N && W && null != e) {
                                    var t = e.scrollHeight,
                                        n = e.scrollWidth;
                                    (t === be.current.height && n === be.current.width) || ((be.current.height = t), (be.current.width = n), W({ nativeEvent: { contentSize: { height: be.current.height, width: be.current.width } } }));
                                }
                            },
                            [N, W],
                        ),
                        Re = r.useMemo(
                            () => (e) => {
                                null != e &&
                                    ((e.clear = function () {
                                        null != e && (e.value = "");
                                    }),
                                    (e.isFocused = function () {
                                        return null != e && v.Z.currentlyFocusedField() === e;
                                    }),
                                    Ce(e));
                            },
                            [Ce],
                        );
                    (0, l.Z)(() => {
                        var e = ye.current;
                        null != e && null != ve && m(e, ve), document.activeElement === e && (v.Z._currentlyFocusedNode = e);
                    }, [ye, ve]);
                    var Ee = N ? "textarea" : "input";
                    (0, c.Z)(ye, D), (0, s.Z)(ye, { onMoveShouldSetResponder: H, onMoveShouldSetResponderCapture: K, onResponderEnd: Y, onResponderGrant: X, onResponderMove: U, onResponderReject: q, onResponderRelease: G, onResponderStart: V, onResponderTerminate: $, onResponderTerminationRequest: J, onScrollShouldSetResponder: Q, onScrollShouldSetResponderCapture: ee, onSelectionChangeShouldSetResponder: ne, onSelectionChangeShouldSetResponderCapture: re, onStartShouldSetResponder: oe, onStartShouldSetResponderCapture: ae });
                    var xe = (0, p.PE)().direction,
                        Te = ((e) => (0, i.Z)(e, g))(e);
                    (Te.autoCapitalize = y),
                        (Te.autoComplete = w || C || "on"),
                        (Te.autoCorrect = E ? "on" : "off"),
                        (Te.dir = void 0 !== L ? L : "auto"),
                        null != de && (0, h.O)("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."),
                        (Te.enterKeyHint = Z || de),
                        (Te.inputMode = a),
                        (Te.onBlur = function (e) {
                            (v.Z._currentlyFocusedNode = null), P && ((e.nativeEvent.text = e.target.value), P(e));
                        }),
                        (Te.onChange = function (e) {
                            var t = e.target,
                                n = t.value;
                            (e.nativeEvent.text = n), Ce(t), B && B(e), j && j(n);
                        }),
                        (Te.onFocus = function (e) {
                            var t = e.target;
                            _ && ((e.nativeEvent.text = t.value), _(e)),
                                null != t &&
                                    ((v.Z._currentlyFocusedNode = t),
                                    k && (t.value = ""),
                                    he &&
                                        (null != b && clearTimeout(b),
                                        (b = setTimeout(() => {
                                            null != t && t.select();
                                        }, 0))));
                        }),
                        (Te.onKeyDown = function (e) {
                            var t = e.target;
                            e.stopPropagation();
                            var n = null == x ? !N : x,
                                r = e.nativeEvent,
                                o = (function (e) {
                                    return e.isComposing || 229 === e.keyCode;
                                })(r);
                            I && I(e), "Enter" !== e.key || e.shiftKey || o || e.isDefaultPrevented() || ((!x && N) || !ie || (e.preventDefault(), (r.text = e.target.value), ie(e)), n && null != t && setTimeout(() => t.blur(), 0));
                        }),
                        (Te.onSelect = function (e) {
                            try {
                                var t = e.target,
                                    n = { start: t.selectionStart, end: t.selectionEnd };
                                te && ((e.nativeEvent.selection = n), (e.nativeEvent.text = e.target.value), te(e)), we.current === fe && (Se.current = n);
                            } catch (e) {}
                        }),
                        null != M && (0, h.O)("editable", "editable is deprecated. Use readOnly."),
                        (Te.readOnly = !0 === ue || !1 === M),
                        null != z && (0, h.O)("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."),
                        (Te.rows = N ? (null != se ? se : z) : 1),
                        (Te.spellCheck = null != ge ? ge : E),
                        (Te.style = [{ "--placeholderTextColor": ce }, S.textinput$raw, S.placeholder, e.style, T && S.caretHidden]),
                        (Te.type = N ? void 0 : n),
                        (Te.virtualkeyboardpolicy = !1 === me ? "manual" : "auto");
                    var ke = (0, d.Z)(Te),
                        Le = (0, u.Z)(ye, ke, Re, t);
                    Te.ref = Le;
                    var Me = null != e.lang ? (0, p.w1)(e.lang) : null,
                        Ze = e.dir || Me || xe;
                    return (0, o.Z)(Ee, Te, { writingDirection: Ze });
                });
            (y.displayName = "TextInput"), (y.State = v.Z);
            var S = f.Z.create({ textinput$raw: { MozAppearance: "textfield", WebkitAppearance: "none", backgroundColor: "transparent", border: "0 solid black", borderRadius: 0, boxSizing: "border-box", font: "14px System", margin: 0, padding: 0, resize: "none" }, placeholder: { placeholderTextColor: "var(--placeholderTextColor)" }, caretHidden: { caretColor: "transparent" } });
            const w = y;
        },
        858440: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(878052),
                o = n(202784);
            function a() {
                var e = (0, o.useState)(() => r.Z.get("window")),
                    t = e[0],
                    n = e[1];
                return (
                    (0, o.useEffect)(() => {
                        function e(e) {
                            var t = e.window;
                            null != t && n(t);
                        }
                        return (
                            r.Z.addEventListener("change", e),
                            n(r.Z.get("window")),
                            () => {
                                r.Z.removeEventListener("change", e);
                            }
                        );
                    }, []),
                    t
                );
            }
        },
        495346: (e, t, n) => {
            n.d(t, { Av: () => i, pF: () => r, xv: () => a, zi: () => o });
            var r = "right-scroll-bar-position",
                o = "width-before-scroll-bar",
                a = "with-scroll-bars-hidden",
                i = "--removed-body-scroll-bar-size";
        },
        894200: (e, t, n) => {
            n.d(t, { jp: () => f });
            var r = n(202784),
                o = n(633097),
                a = n(495346),
                i = { left: 0, top: 0, right: 0, gap: 0 },
                c = function (e) {
                    return parseInt(e || "", 10) || 0;
                },
                l = function (e) {
                    if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return i;
                    var t = (function (e) {
                            var t = window.getComputedStyle(document.body),
                                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = t["padding" === e ? "paddingTop" : "marginTop"],
                                o = t["padding" === e ? "paddingRight" : "marginRight"];
                            return [c(n), c(r), c(o)];
                        })(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
                },
                u = (0, o.Ws)(),
                d = "data-scroll-locked",
                s = function (e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        c = e.right,
                        l = e.gap;
                    return (
                        void 0 === n && (n = "margin"),
                        "\n  ."
                            .concat(a.xv, " {\n   overflow: hidden ")
                            .concat(r, ";\n   padding-right: ")
                            .concat(l, "px ")
                            .concat(r, ";\n  }\n  body[")
                            .concat(d, "] {\n    overflow: hidden ")
                            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                            .concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .")
                            .concat(a.pF, " {\n    right: ")
                            .concat(l, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.zi, " {\n    margin-right: ")
                            .concat(l, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.pF, " .")
                            .concat(a.pF, " {\n    right: 0 ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.zi, " .")
                            .concat(a.zi, " {\n    margin-right: 0 ")
                            .concat(r, ";\n  }\n  \n  body[")
                            .concat(d, "] {\n    ")
                            .concat(a.Av, ": ")
                            .concat(l, "px;\n  }\n")
                    );
                },
                p = function () {
                    var e = parseInt(document.body.getAttribute(d) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                f = function (e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        o = e.gapMode,
                        a = void 0 === o ? "margin" : o;
                    r.useEffect(function () {
                        return (
                            document.body.setAttribute(d, (p() + 1).toString()),
                            function () {
                                var e = p() - 1;
                                e <= 0 ? document.body.removeAttribute(d) : document.body.setAttribute(d, e.toString());
                            }
                        );
                    }, []);
                    var i = r.useMemo(
                        function () {
                            return l(a);
                        },
                        [a],
                    );
                    return r.createElement(u, { styles: s(i, !t, a, n ? "" : "!important") });
                };
        },
        234413: (e, t, n) => {
            n.d(t, { Z: () => M });
            var r = n(305163),
                o = n(202784),
                a = n(495346),
                i = n(287359),
                c = (0, n(964597)._)(),
                l = function () {},
                u = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        a = o.useState({ onScrollCapture: l, onWheelCapture: l, onTouchMoveCapture: l }),
                        u = a[0],
                        d = a[1],
                        s = e.forwardProps,
                        p = e.children,
                        f = e.className,
                        v = e.removeScrollBar,
                        h = e.enabled,
                        m = e.shards,
                        g = e.sideCar,
                        b = e.noIsolation,
                        y = e.inert,
                        S = e.allowPinchZoom,
                        w = e.as,
                        C = void 0 === w ? "div" : w,
                        R = e.gapMode,
                        E = (0, r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        x = g,
                        T = (0, i.q)([n, t]),
                        k = (0, r.pi)((0, r.pi)({}, E), u);
                    return o.createElement(o.Fragment, null, h && o.createElement(x, { sideCar: c, removeScrollBar: v, shards: m, noIsolation: b, inert: y, setCallbacks: d, allowPinchZoom: !!S, lockRef: n, gapMode: R }), s ? o.cloneElement(o.Children.only(p), (0, r.pi)((0, r.pi)({}, k), { ref: T })) : o.createElement(C, (0, r.pi)({}, k, { className: f, ref: T }), p));
                });
            (u.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (u.classNames = { fullWidth: a.zi, zeroRight: a.pF });
            var d = n(757758),
                s = n(894200),
                p = n(633097),
                f = !1;
            if ("undefined" != typeof window)
                try {
                    var v = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (f = !0), !0;
                        },
                    });
                    window.addEventListener("test", v, v), window.removeEventListener("test", v, v);
                } catch (e) {
                    f = !1;
                }
            var h = !!f && { passive: !1 },
                m = function (e, t) {
                    var n = window.getComputedStyle(e);
                    return (
                        "hidden" !== n[t] &&
                        !(
                            n.overflowY === n.overflowX &&
                            !(function (e) {
                                return "TEXTAREA" === e.tagName;
                            })(e) &&
                            "visible" === n[t]
                        )
                    );
                },
                g = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), b(e, r))) {
                            var o = y(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                b = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return m(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return m(e, "overflowX");
                          })(t);
                },
                y = function (e, t) {
                    return "v" === e
                        ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(t);
                    var n;
                },
                S = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                w = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                C = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                R = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                E = 0,
                x = [];
            function T(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const k = (0, d.L)(c, function (e) {
                var t = o.useRef([]),
                    n = o.useRef([0, 0]),
                    a = o.useRef(),
                    i = o.useState(E++)[0],
                    c = o.useState(p.Ws)[0],
                    l = o.useRef(e);
                o.useEffect(
                    function () {
                        l.current = e;
                    },
                    [e],
                ),
                    o.useEffect(
                        function () {
                            if (e.inert) {
                                document.body.classList.add("block-interactivity-".concat(i));
                                var t = (0, r.ev)([e.lockRef.current], (e.shards || []).map(C), !0).filter(Boolean);
                                return (
                                    t.forEach(function (e) {
                                        return e.classList.add("allow-interactivity-".concat(i));
                                    }),
                                    function () {
                                        document.body.classList.remove("block-interactivity-".concat(i)),
                                            t.forEach(function (e) {
                                                return e.classList.remove("allow-interactivity-".concat(i));
                                            });
                                    }
                                );
                            }
                        },
                        [e.inert, e.lockRef.current, e.shards],
                    );
                var u = o.useCallback(function (e, t) {
                        if ("touches" in e && 2 === e.touches.length) return !l.current.allowPinchZoom;
                        var r,
                            o = S(e),
                            i = n.current,
                            c = "deltaX" in e ? e.deltaX : i[0] - o[0],
                            u = "deltaY" in e ? e.deltaY : i[1] - o[1],
                            d = e.target,
                            s = Math.abs(c) > Math.abs(u) ? "h" : "v";
                        if ("touches" in e && "h" === s && "range" === d.type) return !1;
                        var p = g(s, d);
                        if (!p) return !0;
                        if ((p ? (r = s) : ((r = "v" === s ? "h" : "v"), (p = g(s, d))), !p)) return !1;
                        if ((!a.current && "changedTouches" in e && (c || u) && (a.current = r), !r)) return !0;
                        var f = a.current || r;
                        return (function (e, t, n, r, o) {
                            var a = (function (e, t) {
                                    return "h" === e && "rtl" === t ? -1 : 1;
                                })(e, window.getComputedStyle(t).direction),
                                i = a * r,
                                c = n.target,
                                l = t.contains(c),
                                u = !1,
                                d = i > 0,
                                s = 0,
                                p = 0;
                            do {
                                var f = y(e, c),
                                    v = f[0],
                                    h = f[1] - f[2] - a * v;
                                (v || h) && b(e, c) && ((s += h), (p += v)), (c = c instanceof ShadowRoot ? c.host : c.parentNode);
                            } while ((!l && c !== document.body) || (l && (t.contains(c) || t === c)));
                            return ((d && ((o && Math.abs(s) < 1) || (!o && i > s))) || (!d && ((o && Math.abs(p) < 1) || (!o && -i > p)))) && (u = !0), u;
                        })(f, t, e, "h" === f ? c : u, !0);
                    }, []),
                    d = o.useCallback(function (e) {
                        var n = e;
                        if (x.length && x[x.length - 1] === c) {
                            var r = "deltaY" in n ? w(n) : S(n),
                                o = t.current.filter(function (e) {
                                    return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                    var t, o;
                                })[0];
                            if (o && o.should) n.cancelable && n.preventDefault();
                            else if (!o) {
                                var a = (l.current.shards || [])
                                    .map(C)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(n.target);
                                    });
                                (a.length > 0 ? u(n, a[0]) : !l.current.noIsolation) && n.cancelable && n.preventDefault();
                            }
                        }
                    }, []),
                    f = o.useCallback(function (e, n, r, o) {
                        var a = { name: e, delta: n, target: r, should: o, shadowParent: T(r) };
                        t.current.push(a),
                            setTimeout(function () {
                                t.current = t.current.filter(function (e) {
                                    return e !== a;
                                });
                            }, 1);
                    }, []),
                    v = o.useCallback(function (e) {
                        (n.current = S(e)), (a.current = void 0);
                    }, []),
                    m = o.useCallback(function (t) {
                        f(t.type, w(t), t.target, u(t, e.lockRef.current));
                    }, []),
                    k = o.useCallback(function (t) {
                        f(t.type, S(t), t.target, u(t, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        x.push(c),
                        e.setCallbacks({ onScrollCapture: m, onWheelCapture: m, onTouchMoveCapture: k }),
                        document.addEventListener("wheel", d, h),
                        document.addEventListener("touchmove", d, h),
                        document.addEventListener("touchstart", v, h),
                        function () {
                            (x = x.filter(function (e) {
                                return e !== c;
                            })),
                                document.removeEventListener("wheel", d, h),
                                document.removeEventListener("touchmove", d, h),
                                document.removeEventListener("touchstart", v, h);
                        }
                    );
                }, []);
                var L = e.removeScrollBar,
                    M = e.inert;
                return o.createElement(o.Fragment, null, M ? o.createElement(c, { styles: R(i) }) : null, L ? o.createElement(s.jp, { gapMode: e.gapMode }) : null);
            });
            var L = o.forwardRef(function (e, t) {
                return o.createElement(u, (0, r.pi)({}, e, { ref: t, sideCar: k }));
            });
            L.classNames = u.classNames;
            const M = L;
        },
        633097: (e, t, n) => {
            n.d(t, { Ws: () => i });
            var r = n(202784),
                o = n(250132);
            var a = function () {
                    var e = 0,
                        t = null;
                    return {
                        add: function (n) {
                            var r, a;
                            0 == e &&
                                (t = (function () {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = (0, o.V)();
                                    return t && e.setAttribute("nonce", t), e;
                                })()) &&
                                ((a = n),
                                (r = t).styleSheet ? (r.styleSheet.cssText = a) : r.appendChild(document.createTextNode(a)),
                                (function (e) {
                                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
                                })(t)),
                                e++;
                        },
                        remove: function () {
                            !--e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
                        },
                    };
                },
                i = function () {
                    var e,
                        t =
                            ((e = a()),
                            function (t, n) {
                                r.useEffect(
                                    function () {
                                        return (
                                            e.add(t),
                                            function () {
                                                e.remove();
                                            }
                                        );
                                    },
                                    [t && n],
                                );
                            });
                    return function (e) {
                        var n = e.styles,
                            r = e.dynamic;
                        return t(n, r), null;
                    };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade.90641a1a.js.map
