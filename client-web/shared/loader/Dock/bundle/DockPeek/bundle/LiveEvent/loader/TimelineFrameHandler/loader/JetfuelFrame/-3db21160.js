"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-3db21160"],
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
                                    var o = ((i = r), (l = btoa(unescape(encodeURIComponent(JSON.stringify(i))))), (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l)), "/*# ".concat(u, " */")),
                                        a = r.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                        });
                                    return [n].concat(a).concat([o]).join("\n");
                                }
                                var i, l, u;
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
                            var u = [].concat(e[l]);
                            (r && o[u[0]]) || (n && (u[2] ? (u[2] = "".concat(n, " and ").concat(u[2])) : (u[2] = n)), t.push(u));
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
                u = n(156905),
                s = n(752778),
                c = n(805719),
                d = n(111453),
                p = n(981040),
                v = n(297689),
                h = n(901736),
                f = n(180612),
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
            var S = null,
                y = r.forwardRef((e, t) => {
                    var n,
                        a,
                        v = e.autoCapitalize,
                        y = void 0 === v ? "sentences" : v,
                        C = e.autoComplete,
                        R = e.autoCompleteType,
                        w = e.autoCorrect,
                        T = void 0 === w || w,
                        x = e.blurOnSubmit,
                        k = e.caretHidden,
                        E = e.clearTextOnFocus,
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
                        D = e.onMoveShouldSetResponder,
                        B = e.onMoveShouldSetResponderCapture,
                        q = e.onResponderEnd,
                        J = e.onResponderGrant,
                        G = e.onResponderMove,
                        V = e.onResponderReject,
                        W = e.onResponderRelease,
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
                        ue = e.readOnly,
                        se = void 0 !== ue && ue,
                        ce = e.returnKeyType,
                        de = e.rows,
                        pe = e.secureTextEntry,
                        ve = void 0 !== pe && pe,
                        he = e.selection,
                        fe = e.selectTextOnFocus,
                        me = e.showSoftInputOnFocus,
                        be = e.spellCheck;
                    if (null != Z) (a = Z), (n = "email" === Z ? "email" : "tel" === Z ? "tel" : "search" === Z ? "search" : "url" === Z ? "url" : "text");
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
                    ve && (n = "password");
                    var Se = r.useRef({ height: null, width: null }),
                        ye = r.useRef(null),
                        ge = r.useRef(null),
                        Ce = r.useRef(!1);
                    r.useEffect(() => {
                        ye.current && ge.current && m(ye.current, ge.current), (Ce.current = ve);
                    }, [ve]);
                    var Re = r.useCallback(
                            (e) => {
                                if (A && K && null != e) {
                                    var t = e.scrollHeight,
                                        n = e.scrollWidth;
                                    (t === Se.current.height && n === Se.current.width) || ((Se.current.height = t), (Se.current.width = n), K({ nativeEvent: { contentSize: { height: Se.current.height, width: Se.current.width } } }));
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
                                        return null != e && h.Z.currentlyFocusedField() === e;
                                    }),
                                    Re(e));
                            },
                            [Re],
                        );
                    (0, u.Z)(() => {
                        var e = ye.current;
                        null != e && null != he && m(e, he), document.activeElement === e && (h.Z._currentlyFocusedNode = e);
                    }, [ye, he]);
                    var Te = A ? "textarea" : "input";
                    (0, l.Z)(ye, I), (0, d.Z)(ye, { onMoveShouldSetResponder: D, onMoveShouldSetResponderCapture: B, onResponderEnd: q, onResponderGrant: J, onResponderMove: G, onResponderReject: V, onResponderRelease: W, onResponderStart: Y, onResponderTerminate: $, onResponderTerminationRequest: Q, onScrollShouldSetResponder: X, onScrollShouldSetResponderCapture: ee, onSelectionChangeShouldSetResponder: ne, onSelectionChangeShouldSetResponderCapture: re, onStartShouldSetResponder: oe, onStartShouldSetResponderCapture: ae });
                    var xe = (0, p.PE)().direction,
                        ke = ((e) => (0, i.Z)(e, b))(e);
                    (ke.autoCapitalize = y),
                        (ke.autoComplete = C || R || "on"),
                        (ke.autoCorrect = T ? "on" : "off"),
                        (ke.dir = void 0 !== O ? O : "auto"),
                        null != ce && (0, f.O)("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."),
                        (ke.enterKeyHint = j || ce),
                        (ke.inputMode = a),
                        (ke.onBlur = function (e) {
                            (h.Z._currentlyFocusedNode = null), U && ((e.nativeEvent.text = e.target.value), U(e));
                        }),
                        (ke.onChange = function (e) {
                            var t = e.target,
                                n = t.value;
                            (e.nativeEvent.text = n), Re(t), H && H(e), _ && _(n);
                        }),
                        (ke.onFocus = function (e) {
                            var t = e.target;
                            P && ((e.nativeEvent.text = t.value), P(e)),
                                null != t &&
                                    ((h.Z._currentlyFocusedNode = t),
                                    E && (t.value = ""),
                                    fe &&
                                        (null != S && clearTimeout(S),
                                        (S = setTimeout(() => {
                                            null != t && t.select();
                                        }, 0))));
                        }),
                        (ke.onKeyDown = function (e) {
                            var t = e.target;
                            e.stopPropagation();
                            var n = null == x ? !A : x,
                                r = e.nativeEvent,
                                o = (function (e) {
                                    return e.isComposing || 229 === e.keyCode;
                                })(r);
                            z && z(e), "Enter" !== e.key || e.shiftKey || o || e.isDefaultPrevented() || ((!x && A) || !ie || (e.preventDefault(), (r.text = e.target.value), ie(e)), n && null != t && setTimeout(() => t.blur(), 0));
                        }),
                        (ke.onSelect = function (e) {
                            try {
                                var t = e.target,
                                    n = { start: t.selectionStart, end: t.selectionEnd };
                                te && ((e.nativeEvent.selection = n), (e.nativeEvent.text = e.target.value), te(e)), Ce.current === ve && (ge.current = n);
                            } catch (e) {}
                        }),
                        null != M && (0, f.O)("editable", "editable is deprecated. Use readOnly."),
                        (ke.readOnly = !0 === se || !1 === M),
                        null != N && (0, f.O)("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."),
                        (ke.rows = A ? (null != de ? de : N) : 1),
                        (ke.spellCheck = null != be ? be : T),
                        (ke.style = [{ "--placeholderTextColor": le }, g.textinput$raw, g.placeholder, e.style, k && g.caretHidden]),
                        (ke.type = A ? void 0 : n),
                        (ke.virtualkeyboardpolicy = !1 === me ? "manual" : "auto");
                    var Ee = (0, c.Z)(ke),
                        Oe = (0, s.Z)(ye, Ee, we, t);
                    ke.ref = Oe;
                    var Me = null != e.lang ? (0, p.w1)(e.lang) : null,
                        je = e.dir || Me || xe;
                    return (0, o.Z)(Te, ke, { writingDirection: je });
                });
            (y.displayName = "TextInput"), (y.State = h.Z);
            var g = v.Z.create({ textinput$raw: { MozAppearance: "textfield", WebkitAppearance: "none", backgroundColor: "transparent", border: "0 solid black", borderRadius: 0, boxSizing: "border-box", font: "14px System", margin: 0, padding: 0, resize: "none" }, placeholder: { placeholderTextColor: "var(--placeholderTextColor)" }, caretHidden: { caretColor: "transparent" } });
            const C = y;
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
                        c = "".concat(u, " ").concat(s);
                    n[u] = s + 1;
                    var d = l(c),
                        p = { css: a[1], media: a[2], sourceMap: a[3] };
                    -1 !== d ? (i[d].references++, i[d].updater(p)) : i.push({ identifier: c, updater: m(p, t), references: 1 }), r.push(c);
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
            function v(e, t, n) {
                var r = n.css,
                    o = n.media,
                    a = n.sourceMap;
                if ((o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet)) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var h = null,
                f = 0;
            function m(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var a = f++;
                    (n = h || (h = s(t))), (r = p.bind(null, n, a, !1)), (o = p.bind(null, n, a, !0));
                } else
                    (n = s(t)),
                        (r = v.bind(null, n, t)),
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
                            var c = l(n[s]);
                            0 === i[c].references && (i[c].updater(), i.splice(c, 1));
                        }
                        n = a;
                    }
                };
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-3db21160.abb7466a.js.map
