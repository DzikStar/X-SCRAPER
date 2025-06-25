(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-214902cc"],
    {
        3348: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var r = n(202784),
                o = n(890601),
                l = n(730464),
                a = n(389641),
                i = n(317709),
                u = n(156905),
                c = n(752778),
                d = n(805719),
                s = n(111453),
                p = n(981040),
                f = n(297689),
                v = n(901736),
                y = n(180612),
                b = (e, t) => {
                    if (
                        ((e, t) => {
                            var n = e.selectionEnd,
                                r = e.selectionStart,
                                o = t.start,
                                l = t.end;
                            return o !== r || l !== n;
                        })(e, t)
                    ) {
                        var n = t.start,
                            r = t.end;
                        try {
                            e.setSelectionRange(n, r || n);
                        } catch (e) {}
                    }
                },
                S = Object.assign({}, l.lG, l.LO, l._T, l.YB, l.Uy, l.hJ, l.E5, l.vr, { autoCapitalize: !0, autoComplete: !0, autoCorrect: !0, autoFocus: !0, defaultValue: !0, disabled: !0, lang: !0, maxLength: !0, onChange: !0, onScroll: !0, placeholder: !0, pointerEvents: !0, readOnly: !0, rows: !0, spellCheck: !0, value: !0, type: !0 });
            var h = null,
                E = r.forwardRef((e, t) => {
                    var n,
                        l,
                        f = e.autoCapitalize,
                        E = void 0 === f ? "sentences" : f,
                        m = e.autoComplete,
                        g = e.autoCompleteType,
                        w = e.autoCorrect,
                        C = void 0 === w || w,
                        R = e.blurOnSubmit,
                        x = e.caretHidden,
                        T = e.clearTextOnFocus,
                        k = e.dir,
                        I = e.editable,
                        _ = e.enterKeyHint,
                        P = e.inputMode,
                        N = e.keyboardType,
                        j = e.multiline,
                        F = void 0 !== j && j,
                        L = e.numberOfLines,
                        A = e.onBlur,
                        M = e.onChange,
                        D = e.onChangeText,
                        K = e.onContentSizeChange,
                        Z = e.onFocus,
                        H = e.onKeyPress,
                        z = e.onLayout,
                        U = e.onMoveShouldSetResponder,
                        B = e.onMoveShouldSetResponderCapture,
                        G = e.onResponderEnd,
                        V = e.onResponderGrant,
                        Y = e.onResponderMove,
                        q = e.onResponderReject,
                        $ = e.onResponderRelease,
                        W = e.onResponderStart,
                        X = e.onResponderTerminate,
                        J = e.onResponderTerminationRequest,
                        Q = e.onScrollShouldSetResponder,
                        ee = e.onScrollShouldSetResponderCapture,
                        te = e.onSelectionChange,
                        ne = e.onSelectionChangeShouldSetResponder,
                        re = e.onSelectionChangeShouldSetResponderCapture,
                        oe = e.onStartShouldSetResponder,
                        le = e.onStartShouldSetResponderCapture,
                        ae = e.onSubmitEditing,
                        ie = e.placeholderTextColor,
                        ue = e.readOnly,
                        ce = void 0 !== ue && ue,
                        de = e.returnKeyType,
                        se = e.rows,
                        pe = e.secureTextEntry,
                        fe = void 0 !== pe && pe,
                        ve = e.selection,
                        ye = e.selectTextOnFocus,
                        be = e.showSoftInputOnFocus,
                        Se = e.spellCheck;
                    if (null != P) (l = P), (n = "email" === P ? "email" : "tel" === P ? "tel" : "search" === P ? "search" : "url" === P ? "url" : "text");
                    else if (null != N)
                        switch (((0, y.O)("keyboardType", "keyboardType is deprecated. Use inputMode."), N)) {
                            case "email-address":
                                n = "email";
                                break;
                            case "number-pad":
                            case "numeric":
                                l = "numeric";
                                break;
                            case "decimal-pad":
                                l = "decimal";
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
                    var he = r.useRef({ height: null, width: null }),
                        Ee = r.useRef(null),
                        Oe = r.useRef(null),
                        me = r.useRef(!1);
                    r.useEffect(() => {
                        Ee.current && Oe.current && b(Ee.current, Oe.current), (me.current = fe);
                    }, [fe]);
                    var ge = r.useCallback(
                            (e) => {
                                if (F && K && null != e) {
                                    var t = e.scrollHeight,
                                        n = e.scrollWidth;
                                    (t === he.current.height && n === he.current.width) || ((he.current.height = t), (he.current.width = n), K({ nativeEvent: { contentSize: { height: he.current.height, width: he.current.width } } }));
                                }
                            },
                            [F, K],
                        ),
                        we = r.useMemo(
                            () => (e) => {
                                null != e &&
                                    ((e.clear = function () {
                                        null != e && (e.value = "");
                                    }),
                                    (e.isFocused = function () {
                                        return null != e && v.Z.currentlyFocusedField() === e;
                                    }),
                                    ge(e));
                            },
                            [ge],
                        );
                    (0, u.Z)(() => {
                        var e = Ee.current;
                        null != e && null != ve && b(e, ve), document.activeElement === e && (v.Z._currentlyFocusedNode = e);
                    }, [Ee, ve]);
                    var Ce = F ? "textarea" : "input";
                    (0, i.Z)(Ee, z), (0, s.Z)(Ee, { onMoveShouldSetResponder: U, onMoveShouldSetResponderCapture: B, onResponderEnd: G, onResponderGrant: V, onResponderMove: Y, onResponderReject: q, onResponderRelease: $, onResponderStart: W, onResponderTerminate: X, onResponderTerminationRequest: J, onScrollShouldSetResponder: Q, onScrollShouldSetResponderCapture: ee, onSelectionChangeShouldSetResponder: ne, onSelectionChangeShouldSetResponderCapture: re, onStartShouldSetResponder: oe, onStartShouldSetResponderCapture: le });
                    var Re = (0, p.PE)().direction,
                        xe = ((e) => (0, a.Z)(e, S))(e);
                    (xe.autoCapitalize = E),
                        (xe.autoComplete = m || g || "on"),
                        (xe.autoCorrect = C ? "on" : "off"),
                        (xe.dir = void 0 !== k ? k : "auto"),
                        null != de && (0, y.O)("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."),
                        (xe.enterKeyHint = _ || de),
                        (xe.inputMode = l),
                        (xe.onBlur = function (e) {
                            (v.Z._currentlyFocusedNode = null), A && ((e.nativeEvent.text = e.target.value), A(e));
                        }),
                        (xe.onChange = function (e) {
                            var t = e.target,
                                n = t.value;
                            (e.nativeEvent.text = n), ge(t), M && M(e), D && D(n);
                        }),
                        (xe.onFocus = function (e) {
                            var t = e.target;
                            Z && ((e.nativeEvent.text = t.value), Z(e)),
                                null != t &&
                                    ((v.Z._currentlyFocusedNode = t),
                                    T && (t.value = ""),
                                    ye &&
                                        (null != h && clearTimeout(h),
                                        (h = setTimeout(() => {
                                            null != t && t.select();
                                        }, 0))));
                        }),
                        (xe.onKeyDown = function (e) {
                            var t = e.target;
                            e.stopPropagation();
                            var n = null == R ? !F : R,
                                r = e.nativeEvent,
                                o = (function (e) {
                                    return e.isComposing || 229 === e.keyCode;
                                })(r);
                            H && H(e), "Enter" !== e.key || e.shiftKey || o || e.isDefaultPrevented() || ((!R && F) || !ae || (e.preventDefault(), (r.text = e.target.value), ae(e)), n && null != t && setTimeout(() => t.blur(), 0));
                        }),
                        (xe.onSelect = function (e) {
                            try {
                                var t = e.target,
                                    n = { start: t.selectionStart, end: t.selectionEnd };
                                te && ((e.nativeEvent.selection = n), (e.nativeEvent.text = e.target.value), te(e)), me.current === fe && (Oe.current = n);
                            } catch (e) {}
                        }),
                        null != I && (0, y.O)("editable", "editable is deprecated. Use readOnly."),
                        (xe.readOnly = !0 === ce || !1 === I),
                        null != L && (0, y.O)("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."),
                        (xe.rows = F ? (null != se ? se : L) : 1),
                        (xe.spellCheck = null != Se ? Se : C),
                        (xe.style = [{ "--placeholderTextColor": ie }, O.textinput$raw, O.placeholder, e.style, x && O.caretHidden]),
                        (xe.type = F ? void 0 : n),
                        (xe.virtualkeyboardpolicy = !1 === be ? "manual" : "auto");
                    var Te = (0, d.Z)(xe),
                        ke = (0, c.Z)(Ee, Te, we, t);
                    xe.ref = ke;
                    var Ie = null != e.lang ? (0, p.w1)(e.lang) : null,
                        _e = e.dir || Ie || Re;
                    return (0, o.Z)(Ce, xe, { writingDirection: _e });
                });
            (E.displayName = "TextInput"), (E.State = v.Z);
            var O = f.Z.create({ textinput$raw: { MozAppearance: "textfield", WebkitAppearance: "none", backgroundColor: "transparent", border: "0 solid black", borderRadius: 0, boxSizing: "border-box", font: "14px System", margin: 0, padding: 0, resize: "none" }, placeholder: { placeholderTextColor: "var(--placeholderTextColor)" }, caretHidden: { caretColor: "transparent" } });
            const m = E;
        },
        40567: function (e, t, n) {
            !(function (e, t) {
                "use strict";
                var r = "default" in t ? t.default : t;
                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                            (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            n.push.apply(n, r);
                    }
                    return n;
                }
                function l(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? o(Object(n), !0).forEach(function (t) {
                                  a(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                              : o(Object(n)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                });
                    }
                    return e;
                }
                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                }
                function i(e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                }
                function u(e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = i(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                    }
                    return o;
                }
                function c(e, t) {
                    return d(e) || s(e, t) || p(e, t) || v();
                }
                function d(e) {
                    if (Array.isArray(e)) return e;
                }
                function s(e, t) {
                    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                        var r,
                            o,
                            l = [],
                            a = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t); a = !0);
                        } catch (e) {
                            (i = !0), (o = e);
                        } finally {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (i) throw o;
                            }
                        }
                        return l;
                    }
                }
                function p(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
                    }
                }
                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                function v() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};
                function b(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                }
                function S(e, t) {
                    return e((t = { exports: {} }), t.exports), t.exports;
                }
                var h = S(function (e, t) {
                    var n =
                        (y && y.__rest) ||
                        function (e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                            }
                            return n;
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.scripts = void 0), (t.scripts = {});
                    var o = function (e) {
                        var n = document.querySelector('script[src="' + e + '"]');
                        if (n) return (t.scripts[e] = { loading: !1, error: null, scriptEl: n });
                    };
                    function l(e) {
                        var l = e.src,
                            i = e.checkForExisting,
                            u = void 0 !== i && i,
                            c = n(e, ["src", "checkForExisting"]),
                            d = l ? t.scripts[l] : void 0;
                        !d && u && l && a && (d = o(l));
                        var s = (0, r.useState)(d ? d.loading : Boolean(l)),
                            p = s[0],
                            f = s[1],
                            v = (0, r.useState)(d ? d.error : null),
                            y = v[0],
                            b = v[1];
                        return (
                            (0, r.useEffect)(
                                function () {
                                    if (a && l && p && !y) {
                                        var e;
                                        !(d = t.scripts[l]) && u && (d = o(l)),
                                            d
                                                ? (e = d.scriptEl)
                                                : (((e = document.createElement("script")).src = l),
                                                  Object.keys(c).forEach(function (t) {
                                                      void 0 === e[t] ? e.setAttribute(t, c[t]) : (e[t] = c[t]);
                                                  }),
                                                  (d = t.scripts[l] = { loading: !0, error: null, scriptEl: e }));
                                        var n = function () {
                                                d && (d.loading = !1), f(!1);
                                            },
                                            r = function (e) {
                                                d && (d.error = e), b(e);
                                            };
                                        return (
                                            e.addEventListener("load", n),
                                            e.addEventListener("error", r),
                                            document.body.appendChild(e),
                                            function () {
                                                e.removeEventListener("load", n), e.removeEventListener("error", r);
                                            }
                                        );
                                    }
                                },
                                [l],
                            ),
                            [p, y]
                        );
                    }
                    t.default = l;
                    var a = "undefined" != typeof window && void 0 !== window.document;
                });
                b(h), h.scripts;
                var E = S(function (e, t) {
                        var n =
                            (y && y.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.scripts = t.default = void 0),
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                get: function () {
                                    return n(h).default;
                                },
                            }),
                            Object.defineProperty(t, "scripts", {
                                enumerable: !0,
                                get: function () {
                                    return h.scripts;
                                },
                            });
                    }),
                    O = b(E),
                    m =
                        (E.scripts,
                        function (e, t, n) {
                            var r = {};
                            return delete Object.assign(r, e, a({}, n, e[t]))[t], r;
                        }),
                    g = function (e, t) {
                        var n = { plaid: null, open: !1, onExitCallback: null };
                        if ("undefined" == typeof window || !window.Plaid) throw new Error("Plaid not loaded");
                        return (
                            (n.plaid = t(
                                l(
                                    l({}, e),
                                    {},
                                    {
                                        onExit: function (t, r) {
                                            (n.open = !1), e.onExit && e.onExit(t, r), n.onExitCallback && n.onExitCallback();
                                        },
                                    },
                                ),
                            )),
                            {
                                open: function () {
                                    n.plaid && ((n.open = !0), (n.onExitCallback = null), n.plaid.open());
                                },
                                exit: function (e, t) {
                                    n.open && n.plaid ? ((n.onExitCallback = t), n.plaid.exit(e), e && e.force && (n.open = !1)) : t && t();
                                },
                                destroy: function () {
                                    n.plaid && (n.plaid.destroy(), (n.plaid = null));
                                },
                            }
                        );
                    },
                    w = function (e, t) {
                        var n = m(e, "publicKey", "key");
                        return g(n, t);
                    },
                    C = "https://cdn.plaid.com/link/v2/stable/link-initialize.js",
                    R = function () {},
                    x = function (e) {
                        var n = c(O({ src: C, checkForExisting: !0 }), 2),
                            r = n[0],
                            o = n[1],
                            a = c(t.useState(null), 2),
                            i = a[0],
                            u = a[1],
                            d = c(t.useState(!1), 2),
                            s = d[0],
                            p = d[1],
                            f = (e.product || []).slice().sort().join(",");
                        t.useEffect(
                            function () {
                                if (!r && (e.token || e.publicKey || e.receivedRedirectUri) && !o && window.Plaid) {
                                    null != i &&
                                        i.exit({ force: !0 }, function () {
                                            return i.destroy();
                                        });
                                    var t = w(
                                        l(
                                            l({}, e),
                                            {},
                                            {
                                                onLoad: function () {
                                                    p(!0), e.onLoad && e.onLoad();
                                                },
                                            },
                                        ),
                                        window.Plaid.create,
                                    );
                                    return (
                                        u(t),
                                        function () {
                                            return t.exit({ force: !0 }, function () {
                                                return t.destroy();
                                            });
                                        }
                                    );
                                }
                            },
                            [r, o, e.publicKey, e.token, f],
                        );
                        var v = function () {
                            e.token;
                        };
                        return { error: o, ready: null != i && (!r || s), exit: i ? i.exit : R, open: i ? i.open : v };
                    },
                    T = ["children", "style", "className"],
                    k = function (e) {
                        var t = e.children,
                            n = e.style,
                            o = e.className,
                            a = u(e, T),
                            i = x(l({}, a)),
                            c = i.error,
                            d = i.open;
                        return r.createElement(
                            "button",
                            {
                                disabled: Boolean(c),
                                type: "button",
                                className: o,
                                style: l({ padding: "6px 4px", outline: "none", background: "#FFFFFF", border: "2px solid #F1F1F1", borderRadius: "4px" }, n),
                                onClick: function () {
                                    return d();
                                },
                            },
                            t,
                        );
                    };
                k.displayName = "PlaidLink";
                var I,
                    _ = ["style", "className"],
                    P = function (e) {
                        var n = e.style,
                            o = e.className,
                            a = u(e, _),
                            i = c(O({ src: C, checkForExisting: !0 }), 2),
                            d = i[0],
                            s = i[1],
                            p = t.useRef(null);
                        return (
                            t.useEffect(
                                function () {
                                    if (!d && !s && window.Plaid && null != a.token && "" != a.token) {
                                        var e = window.Plaid.createEmbedded(l({}, a), p.current).destroy;
                                        return function () {
                                            e();
                                        };
                                    }
                                },
                                [d, s, a, p],
                            ),
                            r.createElement("div", { style: n, className: o, ref: p })
                        );
                    };
                ((I = e.PlaidLinkStableEvent || (e.PlaidLinkStableEvent = {})).OPEN = "OPEN"), (I.EXIT = "EXIT"), (I.HANDOFF = "HANDOFF"), (I.SELECT_INSTITUTION = "SELECT_INSTITUTION"), (I.ERROR = "ERROR"), (I.BANK_INCOME_INSIGHTS_COMPLETED = "BANK_INCOME_INSIGHTS_COMPLETED"), (I.IDENTITY_VERIFICATION_PASS_SESSION = "IDENTITY_VERIFICATION_PASS_SESSION"), (I.IDENTITY_VERIFICATION_FAIL_SESSION = "IDENTITY_VERIFICATION_FAIL_SESSION"), (e.PlaidEmbeddedLink = P), (e.PlaidLink = k), (e.usePlaidLink = x), Object.defineProperty(e, "__esModule", { value: !0 });
            })(t, n(202784));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-214902cc.7f9ad4ea.js.map
