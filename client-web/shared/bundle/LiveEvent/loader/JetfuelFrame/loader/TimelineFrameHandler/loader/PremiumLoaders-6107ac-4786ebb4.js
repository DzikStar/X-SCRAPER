"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders-6107ac-4786ebb4"],
    {
        127957: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784);
            const o = (0, n(523561).Z)({ loader: () => n.e("loaders.video.VideoPlayer").then(n.bind(n, 962159)), renderPlaceholder: () => r.createElement("div", { "data-testid": "videoPlayer" }) });
        },
        614425: (e, t, n) => {
            n.d(t, { Y7: () => r });
            const r = n(795897).default;
        },
        482609: (e) => {
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = (function (e, t) {
                                var n = e[1] || "",
                                    r = e[3];
                                if (!r) return n;
                                if (t && "function" == typeof btoa) {
                                    var o = ((i = r), (l = btoa(unescape(encodeURIComponent(JSON.stringify(i))))), (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l)), "/*# ".concat(s, " */")),
                                        a = r.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                        });
                                    return [n].concat(a).concat([o]).join("\n");
                                }
                                var i, l, s;
                                return [n].join("\n");
                            })(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (t.i = function (e, n, r) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (r)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (o[i] = !0);
                            }
                        for (var l = 0; l < e.length; l++) {
                            var s = [].concat(e[l]);
                            (r && o[s[0]]) || (n && (s[2] ? (s[2] = "".concat(n, " and ").concat(s[2])) : (s[2] = n)), t.push(s));
                        }
                    }),
                    t
                );
            };
        },
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
                s = n(156905),
                u = n(752778),
                c = n(805719),
                d = n(111453),
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
                b = Object.assign({}, a.lG, a.LO, a._T, a.YB, a.Uy, a.hJ, a.E5, a.vr, { autoCapitalize: !0, autoComplete: !0, autoCorrect: !0, autoFocus: !0, defaultValue: !0, disabled: !0, lang: !0, maxLength: !0, onChange: !0, onScroll: !0, placeholder: !0, pointerEvents: !0, readOnly: !0, rows: !0, spellCheck: !0, value: !0, type: !0 });
            var y = null,
                g = r.forwardRef((e, t) => {
                    var n,
                        a,
                        f = e.autoCapitalize,
                        g = void 0 === f ? "sentences" : f,
                        C = e.autoComplete,
                        R = e.autoCompleteType,
                        w = e.autoCorrect,
                        T = void 0 === w || w,
                        x = e.blurOnSubmit,
                        E = e.caretHidden,
                        k = e.clearTextOnFocus,
                        O = e.dir,
                        M = e.editable,
                        j = e.enterKeyHint,
                        Z = e.inputMode,
                        F = e.keyboardType,
                        L = e.multiline,
                        A = void 0 !== L && L,
                        N = e.numberOfLines,
                        U = e.onBlur,
                        H = e.onChange,
                        _ = e.onChangeText,
                        K = e.onContentSizeChange,
                        P = e.onFocus,
                        z = e.onKeyPress,
                        I = e.onLayout,
                        B = e.onMoveShouldSetResponder,
                        D = e.onMoveShouldSetResponderCapture,
                        q = e.onResponderEnd,
                        J = e.onResponderGrant,
                        G = e.onResponderMove,
                        W = e.onResponderReject,
                        V = e.onResponderRelease,
                        Y = e.onResponderStart,
                        $ = e.onResponderTerminate,
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
                        se = e.readOnly,
                        ue = void 0 !== se && se,
                        ce = e.returnKeyType,
                        de = e.rows,
                        pe = e.secureTextEntry,
                        fe = void 0 !== pe && pe,
                        ve = e.selection,
                        he = e.selectTextOnFocus,
                        me = e.showSoftInputOnFocus,
                        be = e.spellCheck;
                    if (null != Z) (a = Z), (n = "email" === Z ? "email" : "tel" === Z ? "tel" : "search" === Z ? "search" : "url" === Z ? "url" : "text");
                    else if (null != F)
                        switch (((0, h.O)("keyboardType", "keyboardType is deprecated. Use inputMode."), F)) {
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
                    var ye = r.useRef({ height: null, width: null }),
                        ge = r.useRef(null),
                        Se = r.useRef(null),
                        Ce = r.useRef(!1);
                    r.useEffect(() => {
                        ge.current && Se.current && m(ge.current, Se.current), (Ce.current = fe);
                    }, [fe]);
                    var Re = r.useCallback(
                            (e) => {
                                if (A && K && null != e) {
                                    var t = e.scrollHeight,
                                        n = e.scrollWidth;
                                    (t === ye.current.height && n === ye.current.width) || ((ye.current.height = t), (ye.current.width = n), K({ nativeEvent: { contentSize: { height: ye.current.height, width: ye.current.width } } }));
                                }
                            },
                            [A, K],
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
                                    Re(e));
                            },
                            [Re],
                        );
                    (0, s.Z)(() => {
                        var e = ge.current;
                        null != e && null != ve && m(e, ve), document.activeElement === e && (v.Z._currentlyFocusedNode = e);
                    }, [ge, ve]);
                    var Te = A ? "textarea" : "input";
                    (0, l.Z)(ge, I), (0, d.Z)(ge, { onMoveShouldSetResponder: B, onMoveShouldSetResponderCapture: D, onResponderEnd: q, onResponderGrant: J, onResponderMove: G, onResponderReject: W, onResponderRelease: V, onResponderStart: Y, onResponderTerminate: $, onResponderTerminationRequest: Q, onScrollShouldSetResponder: X, onScrollShouldSetResponderCapture: ee, onSelectionChangeShouldSetResponder: ne, onSelectionChangeShouldSetResponderCapture: re, onStartShouldSetResponder: oe, onStartShouldSetResponderCapture: ae });
                    var xe = (0, p.PE)().direction,
                        Ee = ((e) => (0, i.Z)(e, b))(e);
                    (Ee.autoCapitalize = g),
                        (Ee.autoComplete = C || R || "on"),
                        (Ee.autoCorrect = T ? "on" : "off"),
                        (Ee.dir = void 0 !== O ? O : "auto"),
                        null != ce && (0, h.O)("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."),
                        (Ee.enterKeyHint = j || ce),
                        (Ee.inputMode = a),
                        (Ee.onBlur = function (e) {
                            (v.Z._currentlyFocusedNode = null), U && ((e.nativeEvent.text = e.target.value), U(e));
                        }),
                        (Ee.onChange = function (e) {
                            var t = e.target,
                                n = t.value;
                            (e.nativeEvent.text = n), Re(t), H && H(e), _ && _(n);
                        }),
                        (Ee.onFocus = function (e) {
                            var t = e.target;
                            P && ((e.nativeEvent.text = t.value), P(e)),
                                null != t &&
                                    ((v.Z._currentlyFocusedNode = t),
                                    k && (t.value = ""),
                                    he &&
                                        (null != y && clearTimeout(y),
                                        (y = setTimeout(() => {
                                            null != t && t.select();
                                        }, 0))));
                        }),
                        (Ee.onKeyDown = function (e) {
                            var t = e.target;
                            e.stopPropagation();
                            var n = null == x ? !A : x,
                                r = e.nativeEvent,
                                o = (function (e) {
                                    return e.isComposing || 229 === e.keyCode;
                                })(r);
                            z && z(e), "Enter" !== e.key || e.shiftKey || o || e.isDefaultPrevented() || ((!x && A) || !ie || (e.preventDefault(), (r.text = e.target.value), ie(e)), n && null != t && setTimeout(() => t.blur(), 0));
                        }),
                        (Ee.onSelect = function (e) {
                            try {
                                var t = e.target,
                                    n = { start: t.selectionStart, end: t.selectionEnd };
                                te && ((e.nativeEvent.selection = n), (e.nativeEvent.text = e.target.value), te(e)), Ce.current === fe && (Se.current = n);
                            } catch (e) {}
                        }),
                        null != M && (0, h.O)("editable", "editable is deprecated. Use readOnly."),
                        (Ee.readOnly = !0 === ue || !1 === M),
                        null != N && (0, h.O)("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."),
                        (Ee.rows = A ? (null != de ? de : N) : 1),
                        (Ee.spellCheck = null != be ? be : T),
                        (Ee.style = [{ "--placeholderTextColor": le }, S.textinput$raw, S.placeholder, e.style, E && S.caretHidden]),
                        (Ee.type = A ? void 0 : n),
                        (Ee.virtualkeyboardpolicy = !1 === me ? "manual" : "auto");
                    var ke = (0, c.Z)(Ee),
                        Oe = (0, u.Z)(ge, ke, we, t);
                    Ee.ref = Oe;
                    var Me = null != e.lang ? (0, p.w1)(e.lang) : null,
                        je = e.dir || Me || xe;
                    return (0, o.Z)(Te, Ee, { writingDirection: je });
                });
            (g.displayName = "TextInput"), (g.State = v.Z);
            var S = f.Z.create({ textinput$raw: { MozAppearance: "textfield", WebkitAppearance: "none", backgroundColor: "transparent", border: "0 solid black", borderRadius: 0, boxSizing: "border-box", font: "14px System", margin: 0, padding: 0, resize: "none" }, placeholder: { placeholderTextColor: "var(--placeholderTextColor)" }, caretHidden: { caretColor: "transparent" } });
            const C = g;
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
            function s(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var a = e[o],
                        s = t.base ? a[0] + t.base : a[0],
                        u = n[s] || 0,
                        c = "".concat(s, " ").concat(u);
                    n[s] = u + 1;
                    var d = l(c),
                        p = { css: a[1], media: a[2], sourceMap: a[3] };
                    -1 !== d ? (i[d].references++, i[d].updater(p)) : i.push({ identifier: c, updater: m(p, t), references: 1 }), r.push(c);
                }
                return r;
            }
            function u(e) {
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
            var c,
                d =
                    ((c = []),
                    function (e, t) {
                        return (c[e] = t), c.filter(Boolean).join("\n");
                    });
            function p(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = d(t, o);
                else {
                    var a = document.createTextNode(o),
                        i = e.childNodes;
                    i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
                }
            }
            function f(e, t, n) {
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
                h = 0;
            function m(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var a = h++;
                    (n = v || (v = u(t))), (r = p.bind(null, n, a, !1)), (o = p.bind(null, n, a, !0));
                } else
                    (n = u(t)),
                        (r = f.bind(null, n, t)),
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
                var n = s((e = e || []), t);
                return function (e) {
                    if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < n.length; r++) {
                            var o = l(n[r]);
                            i[o].references--;
                        }
                        for (var a = s(e, t), u = 0; u < n.length; u++) {
                            var c = l(n[u]);
                            0 === i[c].references && (i[c].updater(), i.splice(c, 1));
                        }
                        n = a;
                    }
                };
            };
        },
        840489: (e, t, n) => {
            function r(e) {
                var t,
                    n,
                    o = "";
                if ("string" == typeof e || "number" == typeof e) o += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var a = e.length;
                        for (t = 0; t < a; t++) e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
                    } else for (n in e) e[n] && (o && (o += " "), (o += n));
                return o;
            }
            function o() {
                for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = r(e)) && (o && (o += " "), (o += t));
                return o;
            }
            n.d(t, { W: () => o, Z: () => a });
            const a = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders-6107ac-4786ebb4.030fab3a.js.map
