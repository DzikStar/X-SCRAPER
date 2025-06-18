"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-6107ac-34e706af"],
    {
        349035: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(272175);
            const a = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), r.createElement(o.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => v });
            var r = n(202784),
                o = n(420740),
                a = n(108362),
                s = n(731708),
                i = n(154003),
                l = n(392237),
                c = n(111677),
                u = n.n(c),
                d = n(349035);
            const p = "error-detail",
                h = u().e49537c2,
                m = u().a9ae1e78;
            class v extends r.PureComponent {
                render() {
                    return r.createElement(o.Z, { testID: p }, r.createElement(d.Z, null), r.createElement(a.Z, { style: g.root }, r.createElement(s.ZP, { align: "center", color: "gray700", style: g.retryText }, h), r.createElement(i.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const g = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        3196: (e, t, n) => {
            n.d(t, { Z: () => R });
            n(136728);
            var r = n(202784),
                o = n(99107),
                a = n(688715),
                s = n(154003),
                i = n(111677),
                l = n.n(i),
                c = n(261214),
                u = n(462775),
                d = n(182495),
                p = n(601798),
                h = n(500002),
                m = n(443781),
                v = n(406837),
                g = n(950570),
                b = n(911318);
            const S = l().ib65b1c6,
                y = l().f55cebb8,
                _ = l().dcc304d6,
                f = l().g61ed8a4,
                w = { clientId: b.fp, scope: "name email", usePopup: !0 };
            class C extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, u.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case d.yX.LogIn:
                                    return y;
                                case d.yX.ContinueWith:
                                    return _;
                                default:
                                    return S;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(o.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ...w, redirectURI: (0, a.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: n, history: r, loginReturnPath: a, personalizationSettings: s, shouldPropagateP13nSettings: i, ssoInitTokens: l } = this.props,
                                { allowCookieUse: c, allowDeviceAccess: u, allowPartnerships: d, allowPersonalization: p } = s || {};
                            t.scribe({ component: "apple_sign_in", element: n, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: n, action: "success" });
                                        const s = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        r.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: i && { allow_cookie_use: !!c, allow_device_personalization: !!u, allow_partnerships: !!d, allow_ads_personalization: !!p }, requested_variant: JSON.stringify({ display_name: s && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: o.Bm.Apple, state: l[o.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? a : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: r } = this.props,
                                            { error: o } = e;
                                        o !== b.IN ? (t.scribe({ component: "apple_sign_in", element: n, action: "failure" }), r({ text: f })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
                                    });
                        });
                }
                componentDidMount() {
                    this._is3rdPartyIntegrationDisabled ||
                        p.Z.inject({
                            callback: () => {
                                this._initAppleIDAuth(), this.setState({ isScriptLoaded: !0 });
                            },
                            scriptId: "signInWithAppleJsLibrary",
                            src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                        });
                }
                render() {
                    const { buttonSize: e, style: t } = this.props,
                        { isScriptLoaded: n } = this.state,
                        o = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : r.createElement(s.ZP, { backgroundColor: "white", borderColor: "gray200", children: o, color: "alwaysBaseGray1100", disabled: !n, fontWeight: "normal", icon: r.createElement(c.default, null), onPress: this._handleOnPress, size: e, style: t, testID: g.Z.apple });
                }
            }
            (C.contextType = m.rC), (C.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const R = (0, h.ZP)((0, v.Z)(C));
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(392237);
            function s({ spacing: e, style: t }) {
                return r.createElement(o.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        730895: (e, t, n) => {
            var r = n(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
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
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(890601),
                a = n(730464),
                s = n(389641),
                i = n(317709),
                l = n(156905),
                c = n(752778),
                u = n(805719),
                d = n(111453),
                p = n(981040),
                h = n(297689),
                m = n(901736),
                v = n(180612),
                g = (e, t) => {
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
                        h = e.autoCapitalize,
                        y = void 0 === h ? "sentences" : h,
                        f = e.autoComplete,
                        w = e.autoCompleteType,
                        C = e.autoCorrect,
                        R = void 0 === C || C,
                        x = e.blurOnSubmit,
                        k = e.caretHidden,
                        T = e.clearTextOnFocus,
                        E = e.dir,
                        Z = e.editable,
                        P = e.enterKeyHint,
                        I = e.inputMode,
                        O = e.keyboardType,
                        A = e.multiline,
                        z = void 0 !== A && A,
                        L = e.numberOfLines,
                        D = e.onBlur,
                        F = e.onChange,
                        j = e.onChangeText,
                        M = e.onContentSizeChange,
                        B = e.onFocus,
                        N = e.onKeyPress,
                        K = e.onLayout,
                        U = e.onMoveShouldSetResponder,
                        H = e.onMoveShouldSetResponderCapture,
                        W = e.onResponderEnd,
                        q = e.onResponderGrant,
                        G = e.onResponderMove,
                        J = e.onResponderReject,
                        $ = e.onResponderRelease,
                        V = e.onResponderStart,
                        X = e.onResponderTerminate,
                        Y = e.onResponderTerminationRequest,
                        Q = e.onScrollShouldSetResponder,
                        ee = e.onScrollShouldSetResponderCapture,
                        te = e.onSelectionChange,
                        ne = e.onSelectionChangeShouldSetResponder,
                        re = e.onSelectionChangeShouldSetResponderCapture,
                        oe = e.onStartShouldSetResponder,
                        ae = e.onStartShouldSetResponderCapture,
                        se = e.onSubmitEditing,
                        ie = e.placeholderTextColor,
                        le = e.readOnly,
                        ce = void 0 !== le && le,
                        ue = e.returnKeyType,
                        de = e.rows,
                        pe = e.secureTextEntry,
                        he = void 0 !== pe && pe,
                        me = e.selection,
                        ve = e.selectTextOnFocus,
                        ge = e.showSoftInputOnFocus,
                        be = e.spellCheck;
                    if (null != I) (a = I), (n = "email" === I ? "email" : "tel" === I ? "tel" : "search" === I ? "search" : "url" === I ? "url" : "text");
                    else if (null != O)
                        switch (((0, v.O)("keyboardType", "keyboardType is deprecated. Use inputMode."), O)) {
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
                    var Se = r.useRef({ height: null, width: null }),
                        ye = r.useRef(null),
                        _e = r.useRef(null),
                        fe = r.useRef(!1);
                    r.useEffect(() => {
                        ye.current && _e.current && g(ye.current, _e.current), (fe.current = he);
                    }, [he]);
                    var we = r.useCallback(
                            (e) => {
                                if (z && M && null != e) {
                                    var t = e.scrollHeight,
                                        n = e.scrollWidth;
                                    (t === Se.current.height && n === Se.current.width) || ((Se.current.height = t), (Se.current.width = n), M({ nativeEvent: { contentSize: { height: Se.current.height, width: Se.current.width } } }));
                                }
                            },
                            [z, M],
                        ),
                        Ce = r.useMemo(
                            () => (e) => {
                                null != e &&
                                    ((e.clear = function () {
                                        null != e && (e.value = "");
                                    }),
                                    (e.isFocused = function () {
                                        return null != e && m.Z.currentlyFocusedField() === e;
                                    }),
                                    we(e));
                            },
                            [we],
                        );
                    (0, l.Z)(() => {
                        var e = ye.current;
                        null != e && null != me && g(e, me), document.activeElement === e && (m.Z._currentlyFocusedNode = e);
                    }, [ye, me]);
                    var Re = z ? "textarea" : "input";
                    (0, i.Z)(ye, K), (0, d.Z)(ye, { onMoveShouldSetResponder: U, onMoveShouldSetResponderCapture: H, onResponderEnd: W, onResponderGrant: q, onResponderMove: G, onResponderReject: J, onResponderRelease: $, onResponderStart: V, onResponderTerminate: X, onResponderTerminationRequest: Y, onScrollShouldSetResponder: Q, onScrollShouldSetResponderCapture: ee, onSelectionChangeShouldSetResponder: ne, onSelectionChangeShouldSetResponderCapture: re, onStartShouldSetResponder: oe, onStartShouldSetResponderCapture: ae });
                    var xe = (0, p.PE)().direction,
                        ke = ((e) => (0, s.Z)(e, b))(e);
                    (ke.autoCapitalize = y),
                        (ke.autoComplete = f || w || "on"),
                        (ke.autoCorrect = R ? "on" : "off"),
                        (ke.dir = void 0 !== E ? E : "auto"),
                        null != ue && (0, v.O)("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."),
                        (ke.enterKeyHint = P || ue),
                        (ke.inputMode = a),
                        (ke.onBlur = function (e) {
                            (m.Z._currentlyFocusedNode = null), D && ((e.nativeEvent.text = e.target.value), D(e));
                        }),
                        (ke.onChange = function (e) {
                            var t = e.target,
                                n = t.value;
                            (e.nativeEvent.text = n), we(t), F && F(e), j && j(n);
                        }),
                        (ke.onFocus = function (e) {
                            var t = e.target;
                            B && ((e.nativeEvent.text = t.value), B(e)),
                                null != t &&
                                    ((m.Z._currentlyFocusedNode = t),
                                    T && (t.value = ""),
                                    ve &&
                                        (null != S && clearTimeout(S),
                                        (S = setTimeout(() => {
                                            null != t && t.select();
                                        }, 0))));
                        }),
                        (ke.onKeyDown = function (e) {
                            var t = e.target;
                            e.stopPropagation();
                            var n = null == x ? !z : x,
                                r = e.nativeEvent,
                                o = (function (e) {
                                    return e.isComposing || 229 === e.keyCode;
                                })(r);
                            N && N(e), "Enter" !== e.key || e.shiftKey || o || e.isDefaultPrevented() || ((!x && z) || !se || (e.preventDefault(), (r.text = e.target.value), se(e)), n && null != t && setTimeout(() => t.blur(), 0));
                        }),
                        (ke.onSelect = function (e) {
                            try {
                                var t = e.target,
                                    n = { start: t.selectionStart, end: t.selectionEnd };
                                te && ((e.nativeEvent.selection = n), (e.nativeEvent.text = e.target.value), te(e)), fe.current === he && (_e.current = n);
                            } catch (e) {}
                        }),
                        null != Z && (0, v.O)("editable", "editable is deprecated. Use readOnly."),
                        (ke.readOnly = !0 === ce || !1 === Z),
                        null != L && (0, v.O)("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."),
                        (ke.rows = z ? (null != de ? de : L) : 1),
                        (ke.spellCheck = null != be ? be : R),
                        (ke.style = [{ "--placeholderTextColor": ie }, _.textinput$raw, _.placeholder, e.style, k && _.caretHidden]),
                        (ke.type = z ? void 0 : n),
                        (ke.virtualkeyboardpolicy = !1 === ge ? "manual" : "auto");
                    var Te = (0, u.Z)(ke),
                        Ee = (0, c.Z)(ye, Te, Ce, t);
                    ke.ref = Ee;
                    var Ze = null != e.lang ? (0, p.w1)(e.lang) : null,
                        Pe = e.dir || Ze || xe;
                    return (0, o.Z)(Re, ke, { writingDirection: Pe });
                });
            (y.displayName = "TextInput"), (y.State = m.Z);
            var _ = h.Z.create({ textinput$raw: { MozAppearance: "textfield", WebkitAppearance: "none", backgroundColor: "transparent", border: "0 solid black", borderRadius: 0, boxSizing: "border-box", font: "14px System", margin: 0, padding: 0, resize: "none" }, placeholder: { placeholderTextColor: "var(--placeholderTextColor)" }, caretHidden: { caretColor: "transparent" } });
            const f = y;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-6107ac-34e706af.53370eda.js.map
