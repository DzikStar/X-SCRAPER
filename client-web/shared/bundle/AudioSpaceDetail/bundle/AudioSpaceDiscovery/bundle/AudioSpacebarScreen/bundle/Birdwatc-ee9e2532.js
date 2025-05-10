"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"],
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
            n.d(t, { Z: () => C });
            var r = n(202784),
                o = n(890601),
                a = n(730464),
                i = n(389641),
                l = n(317709),
                u = n(156905),
                s = n(752778),
                d = n(805719),
                c = n(111453),
                p = n(981040),
                h = n(297689),
                v = n(901736),
                f = n(180612),
                S = (e, t) => {
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
                m = Object.assign({}, a.lG, a.LO, a._T, a.YB, a.Uy, a.hJ, a.E5, a.vr, { autoCapitalize: !0, autoComplete: !0, autoCorrect: !0, autoFocus: !0, defaultValue: !0, disabled: !0, lang: !0, maxLength: !0, onChange: !0, onScroll: !0, placeholder: !0, pointerEvents: !0, readOnly: !0, rows: !0, spellCheck: !0, value: !0, type: !0 });
            var b = null,
                g = r.forwardRef((e, t) => {
                    var n,
                        a,
                        h = e.autoCapitalize,
                        g = void 0 === h ? "sentences" : h,
                        C = e.autoComplete,
                        w = e.autoCompleteType,
                        R = e.autoCorrect,
                        T = void 0 === R || R,
                        x = e.blurOnSubmit,
                        E = e.caretHidden,
                        k = e.clearTextOnFocus,
                        O = e.dir,
                        Z = e.editable,
                        M = e.enterKeyHint,
                        A = e.inputMode,
                        F = e.keyboardType,
                        j = e.multiline,
                        L = void 0 !== j && j,
                        N = e.numberOfLines,
                        _ = e.onBlur,
                        H = e.onChange,
                        K = e.onChangeText,
                        z = e.onContentSizeChange,
                        U = e.onFocus,
                        B = e.onKeyPress,
                        D = e.onLayout,
                        I = e.onMoveShouldSetResponder,
                        P = e.onMoveShouldSetResponderCapture,
                        q = e.onResponderEnd,
                        G = e.onResponderGrant,
                        J = e.onResponderMove,
                        W = e.onResponderReject,
                        $ = e.onResponderRelease,
                        V = e.onResponderStart,
                        Y = e.onResponderTerminate,
                        Q = e.onResponderTerminationRequest,
                        X = e.onScrollShouldSetResponder,
                        ee = e.onScrollShouldSetResponderCapture,
                        te = e.onSelectionChange,
                        ne = e.onSelectionChangeShouldSetResponder,
                        re = e.onSelectionChangeShouldSetResponderCapture,
                        oe = e.onStartShouldSetResponder,
                        ae = e.onStartShouldSetResponderCapture,
                        ie = e.onSubmitEditing,
                        le = e.placeholderTextColor,
                        ue = e.readOnly,
                        se = void 0 !== ue && ue,
                        de = e.returnKeyType,
                        ce = e.rows,
                        pe = e.secureTextEntry,
                        he = void 0 !== pe && pe,
                        ve = e.selection,
                        fe = e.selectTextOnFocus,
                        Se = e.showSoftInputOnFocus,
                        me = e.spellCheck;
                    if (null != A) (a = A), (n = "email" === A ? "email" : "tel" === A ? "tel" : "search" === A ? "search" : "url" === A ? "url" : "text");
                    else if (null != F)
                        switch (((0, f.O)("keyboardType", "keyboardType is deprecated. Use inputMode."), F)) {
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
                    he && (n = "password");
                    var be = r.useRef({ height: null, width: null }),
                        ge = r.useRef(null),
                        ye = r.useRef(null),
                        Ce = r.useRef(!1);
                    r.useEffect(() => {
                        ge.current && ye.current && S(ge.current, ye.current), (Ce.current = he);
                    }, [he]);
                    var we = r.useCallback(
                            (e) => {
                                if (L && z && null != e) {
                                    var t = e.scrollHeight,
                                        n = e.scrollWidth;
                                    (t === be.current.height && n === be.current.width) || ((be.current.height = t), (be.current.width = n), z({ nativeEvent: { contentSize: { height: be.current.height, width: be.current.width } } }));
                                }
                            },
                            [L, z],
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
                                    we(e));
                            },
                            [we],
                        );
                    (0, u.Z)(() => {
                        var e = ge.current;
                        null != e && null != ve && S(e, ve), document.activeElement === e && (v.Z._currentlyFocusedNode = e);
                    }, [ge, ve]);
                    var Te = L ? "textarea" : "input";
                    (0, l.Z)(ge, D), (0, c.Z)(ge, { onMoveShouldSetResponder: I, onMoveShouldSetResponderCapture: P, onResponderEnd: q, onResponderGrant: G, onResponderMove: J, onResponderReject: W, onResponderRelease: $, onResponderStart: V, onResponderTerminate: Y, onResponderTerminationRequest: Q, onScrollShouldSetResponder: X, onScrollShouldSetResponderCapture: ee, onSelectionChangeShouldSetResponder: ne, onSelectionChangeShouldSetResponderCapture: re, onStartShouldSetResponder: oe, onStartShouldSetResponderCapture: ae });
                    var xe = (0, p.PE)().direction,
                        Ee = ((e) => (0, i.Z)(e, m))(e);
                    (Ee.autoCapitalize = g),
                        (Ee.autoComplete = C || w || "on"),
                        (Ee.autoCorrect = T ? "on" : "off"),
                        (Ee.dir = void 0 !== O ? O : "auto"),
                        null != de && (0, f.O)("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."),
                        (Ee.enterKeyHint = M || de),
                        (Ee.inputMode = a),
                        (Ee.onBlur = function (e) {
                            (v.Z._currentlyFocusedNode = null), _ && ((e.nativeEvent.text = e.target.value), _(e));
                        }),
                        (Ee.onChange = function (e) {
                            var t = e.target,
                                n = t.value;
                            (e.nativeEvent.text = n), we(t), H && H(e), K && K(n);
                        }),
                        (Ee.onFocus = function (e) {
                            var t = e.target;
                            U && ((e.nativeEvent.text = t.value), U(e)),
                                null != t &&
                                    ((v.Z._currentlyFocusedNode = t),
                                    k && (t.value = ""),
                                    fe &&
                                        (null != b && clearTimeout(b),
                                        (b = setTimeout(() => {
                                            null != t && t.select();
                                        }, 0))));
                        }),
                        (Ee.onKeyDown = function (e) {
                            var t = e.target;
                            e.stopPropagation();
                            var n = null == x ? !L : x,
                                r = e.nativeEvent,
                                o = (function (e) {
                                    return e.isComposing || 229 === e.keyCode;
                                })(r);
                            B && B(e), "Enter" !== e.key || e.shiftKey || o || e.isDefaultPrevented() || ((!x && L) || !ie || (e.preventDefault(), (r.text = e.target.value), ie(e)), n && null != t && setTimeout(() => t.blur(), 0));
                        }),
                        (Ee.onSelect = function (e) {
                            try {
                                var t = e.target,
                                    n = { start: t.selectionStart, end: t.selectionEnd };
                                te && ((e.nativeEvent.selection = n), (e.nativeEvent.text = e.target.value), te(e)), Ce.current === he && (ye.current = n);
                            } catch (e) {}
                        }),
                        null != Z && (0, f.O)("editable", "editable is deprecated. Use readOnly."),
                        (Ee.readOnly = !0 === se || !1 === Z),
                        null != N && (0, f.O)("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."),
                        (Ee.rows = L ? (null != ce ? ce : N) : 1),
                        (Ee.spellCheck = null != me ? me : T),
                        (Ee.style = [{ "--placeholderTextColor": le }, y.textinput$raw, y.placeholder, e.style, E && y.caretHidden]),
                        (Ee.type = L ? void 0 : n),
                        (Ee.virtualkeyboardpolicy = !1 === Se ? "manual" : "auto");
                    var ke = (0, d.Z)(Ee),
                        Oe = (0, s.Z)(ge, ke, Re, t);
                    Ee.ref = Oe;
                    var Ze = null != e.lang ? (0, p.w1)(e.lang) : null,
                        Me = e.dir || Ze || xe;
                    return (0, o.Z)(Te, Ee, { writingDirection: Me });
                });
            (g.displayName = "TextInput"), (g.State = v.Z);
            var y = h.Z.create({ textinput$raw: { MozAppearance: "textfield", WebkitAppearance: "none", backgroundColor: "transparent", border: "0 solid black", borderRadius: 0, boxSizing: "border-box", font: "14px System", margin: 0, padding: 0, resize: "none" }, placeholder: { placeholderTextColor: "var(--placeholderTextColor)" }, caretHidden: { caretColor: "transparent" } });
            const C = g;
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
        46062: (e, t, n) => {
            var r,
                o = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                a = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                i = [];
            function l(e) {
                for (var t = -1, n = 0; n < i.length; n++)
                    if (i[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }
            function u(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var a = e[o],
                        u = t.base ? a[0] + t.base : a[0],
                        s = n[u] || 0,
                        d = "".concat(u, " ").concat(s);
                    n[u] = s + 1;
                    var c = l(d),
                        p = { css: a[1], media: a[2], sourceMap: a[3] };
                    -1 !== c ? (i[c].references++, i[c].updater(p)) : i.push({ identifier: d, updater: S(p, t), references: 1 }), r.push(d);
                }
                return r;
            }
            function s(e) {
                var t = document.createElement("style"),
                    r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var o = n.nc;
                    o && (r.nonce = o);
                }
                if (
                    (Object.keys(r).forEach(function (e) {
                        t.setAttribute(e, r[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var i = a(e.insert || "head");
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(t);
                }
                return t;
            }
            var d,
                c =
                    ((d = []),
                    function (e, t) {
                        return (d[e] = t), d.filter(Boolean).join("\n");
                    });
            function p(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = c(t, o);
                else {
                    var a = document.createTextNode(o),
                        i = e.childNodes;
                    i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
                }
            }
            function h(e, t, n) {
                var r = n.css,
                    o = n.media,
                    a = n.sourceMap;
                if ((o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet)) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var v = null,
                f = 0;
            function S(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var a = f++;
                    (n = v || (v = s(t))), (r = p.bind(null, n, a, !1)), (o = p.bind(null, n, a, !0));
                } else
                    (n = s(t)),
                        (r = h.bind(null, n, t)),
                        (o = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        });
                return (
                    r(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r((e = t));
                        } else o();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
                var n = u((e = e || []), t);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < n.length; r++) {
                            var o = l(n[r]);
                            i[o].references--;
                        }
                        for (var a = u(e, t), s = 0; s < n.length; s++) {
                            var d = l(n[s]);
                            0 === i[d].references && (i[d].updater(), i.splice(d, 1));
                        }
                        n = a;
                    }
                };
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532.da1e509a.js.map
