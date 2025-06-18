"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-6107ac-34e706af", "icons/IconBookmarkPlusStroke-js", "icons/IconNumberedList-js", "icons/IconStar-js"],
    {
        349035: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(272175);
            const a = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), r.createElement(o.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                o = n(420740),
                a = n(108362),
                i = n(731708),
                l = n(154003),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(349035);
            const p = "error-detail",
                h = d().e49537c2,
                v = d().a9ae1e78;
            class m extends r.PureComponent {
                render() {
                    return r.createElement(o.Z, { testID: p }, r.createElement(u.Z, null), r.createElement(a.Z, { style: g.root }, r.createElement(i.ZP, { align: "center", color: "gray700", style: g.retryText }, h), r.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, v)));
                }
            }
            const g = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        3196: (e, t, n) => {
            n.d(t, { Z: () => R });
            n(136728);
            var r = n(202784),
                o = n(99107),
                a = n(688715),
                i = n(154003),
                l = n(111677),
                s = n.n(l),
                c = n(261214),
                d = n(462775),
                u = n(182495),
                p = n(601798),
                h = n(500002),
                v = n(443781),
                m = n(406837),
                g = n(950570),
                b = n(911318);
            const y = s().ib65b1c6,
                S = s().f55cebb8,
                f = s().dcc304d6,
                w = s().g61ed8a4,
                _ = { clientId: b.fp, scope: "name email", usePopup: !0 };
            class C extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, d.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case u.yX.LogIn:
                                    return S;
                                case u.yX.ContinueWith:
                                    return f;
                                default:
                                    return y;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(o.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ..._, redirectURI: (0, a.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: n, history: r, loginReturnPath: a, personalizationSettings: i, shouldPropagateP13nSettings: l, ssoInitTokens: s } = this.props,
                                { allowCookieUse: c, allowDeviceAccess: d, allowPartnerships: u, allowPersonalization: p } = i || {};
                            t.scribe({ component: "apple_sign_in", element: n, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: n, action: "success" });
                                        const i = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        r.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: l && { allow_cookie_use: !!c, allow_device_personalization: !!d, allow_partnerships: !!u, allow_ads_personalization: !!p }, requested_variant: JSON.stringify({ display_name: i && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: o.Bm.Apple, state: s[o.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? a : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: r } = this.props,
                                            { error: o } = e;
                                        o !== b.IN ? (t.scribe({ component: "apple_sign_in", element: n, action: "failure" }), r({ text: w })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
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
                    return this._is3rdPartyIntegrationDisabled ? null : r.createElement(i.ZP, { backgroundColor: "white", borderColor: "gray200", children: o, color: "alwaysBaseGray1100", disabled: !n, fontWeight: "normal", icon: r.createElement(c.default, null), onPress: this._handleOnPress, size: e, style: t, testID: g.Z.apple });
                }
            }
            (C.contextType = v.rC), (C.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const R = (0, h.ZP)((0, m.Z)(C));
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686),
                a = n(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        818088: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        518532: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 74 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.827 17.667c-4.82 0-8.873-3.927-8.873-8.747S5.007.173 9.827.173c2.667 0 4.567 1.047 5.993 2.413l-1.687 1.687c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.132-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.935.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.106 2.453zm20.806-5.627c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413-1.7 0-3.167 1.387-3.167 3.413 0 2.007 1.467 3.413 3.167 3.413 1.7 0 3.167-1.406 3.167-3.413zm15.133-.007c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413zm14.5-5.286V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zm-2.173 5.306c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68 0 3.007-1.426 3.007-3.393zM59.807.78v16.553h-2.473V.78h2.473zm9.886 13.113l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 74, height: 24 };
            const s = l;
        },
        913315: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        89085: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        258292: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
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
            n.d(t, { Z: () => w });
            var r = n(202784),
                o = n(890601),
                a = n(730464),
                i = n(389641),
                l = n(317709),
                s = n(156905),
                c = n(752778),
                d = n(805719),
                u = n(111453),
                p = n(981040),
                h = n(297689),
                v = n(901736),
                m = n(180612),
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
            var y = null,
                S = r.forwardRef((e, t) => {
                    var n,
                        a,
                        h = e.autoCapitalize,
                        S = void 0 === h ? "sentences" : h,
                        w = e.autoComplete,
                        _ = e.autoCompleteType,
                        C = e.autoCorrect,
                        R = void 0 === C || C,
                        Z = e.blurOnSubmit,
                        x = e.caretHidden,
                        E = e.clearTextOnFocus,
                        k = e.dir,
                        z = e.editable,
                        T = e.enterKeyHint,
                        P = e.inputMode,
                        I = e.keyboardType,
                        L = e.multiline,
                        D = void 0 !== L && L,
                        O = e.numberOfLines,
                        H = e.onBlur,
                        M = e.onChange,
                        A = e.onChangeText,
                        B = e.onContentSizeChange,
                        j = e.onFocus,
                        V = e.onKeyPress,
                        F = e.onLayout,
                        N = e.onMoveShouldSetResponder,
                        K = e.onMoveShouldSetResponderCapture,
                        U = e.onResponderEnd,
                        W = e.onResponderGrant,
                        q = e.onResponderMove,
                        G = e.onResponderReject,
                        J = e.onResponderRelease,
                        $ = e.onResponderStart,
                        X = e.onResponderTerminate,
                        Y = e.onResponderTerminationRequest,
                        Q = e.onScrollShouldSetResponder,
                        ee = e.onScrollShouldSetResponderCapture,
                        te = e.onSelectionChange,
                        ne = e.onSelectionChangeShouldSetResponder,
                        re = e.onSelectionChangeShouldSetResponderCapture,
                        oe = e.onStartShouldSetResponder,
                        ae = e.onStartShouldSetResponderCapture,
                        ie = e.onSubmitEditing,
                        le = e.placeholderTextColor,
                        se = e.readOnly,
                        ce = void 0 !== se && se,
                        de = e.returnKeyType,
                        ue = e.rows,
                        pe = e.secureTextEntry,
                        he = void 0 !== pe && pe,
                        ve = e.selection,
                        me = e.selectTextOnFocus,
                        ge = e.showSoftInputOnFocus,
                        be = e.spellCheck;
                    if (null != P) (a = P), (n = "email" === P ? "email" : "tel" === P ? "tel" : "search" === P ? "search" : "url" === P ? "url" : "text");
                    else if (null != I)
                        switch (((0, m.O)("keyboardType", "keyboardType is deprecated. Use inputMode."), I)) {
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
                    var ye = r.useRef({ height: null, width: null }),
                        Se = r.useRef(null),
                        fe = r.useRef(null),
                        we = r.useRef(!1);
                    r.useEffect(() => {
                        Se.current && fe.current && g(Se.current, fe.current), (we.current = he);
                    }, [he]);
                    var _e = r.useCallback(
                            (e) => {
                                if (D && B && null != e) {
                                    var t = e.scrollHeight,
                                        n = e.scrollWidth;
                                    (t === ye.current.height && n === ye.current.width) || ((ye.current.height = t), (ye.current.width = n), B({ nativeEvent: { contentSize: { height: ye.current.height, width: ye.current.width } } }));
                                }
                            },
                            [D, B],
                        ),
                        Ce = r.useMemo(
                            () => (e) => {
                                null != e &&
                                    ((e.clear = function () {
                                        null != e && (e.value = "");
                                    }),
                                    (e.isFocused = function () {
                                        return null != e && v.Z.currentlyFocusedField() === e;
                                    }),
                                    _e(e));
                            },
                            [_e],
                        );
                    (0, s.Z)(() => {
                        var e = Se.current;
                        null != e && null != ve && g(e, ve), document.activeElement === e && (v.Z._currentlyFocusedNode = e);
                    }, [Se, ve]);
                    var Re = D ? "textarea" : "input";
                    (0, l.Z)(Se, F), (0, u.Z)(Se, { onMoveShouldSetResponder: N, onMoveShouldSetResponderCapture: K, onResponderEnd: U, onResponderGrant: W, onResponderMove: q, onResponderReject: G, onResponderRelease: J, onResponderStart: $, onResponderTerminate: X, onResponderTerminationRequest: Y, onScrollShouldSetResponder: Q, onScrollShouldSetResponderCapture: ee, onSelectionChangeShouldSetResponder: ne, onSelectionChangeShouldSetResponderCapture: re, onStartShouldSetResponder: oe, onStartShouldSetResponderCapture: ae });
                    var Ze = (0, p.PE)().direction,
                        xe = ((e) => (0, i.Z)(e, b))(e);
                    (xe.autoCapitalize = S),
                        (xe.autoComplete = w || _ || "on"),
                        (xe.autoCorrect = R ? "on" : "off"),
                        (xe.dir = void 0 !== k ? k : "auto"),
                        null != de && (0, m.O)("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."),
                        (xe.enterKeyHint = T || de),
                        (xe.inputMode = a),
                        (xe.onBlur = function (e) {
                            (v.Z._currentlyFocusedNode = null), H && ((e.nativeEvent.text = e.target.value), H(e));
                        }),
                        (xe.onChange = function (e) {
                            var t = e.target,
                                n = t.value;
                            (e.nativeEvent.text = n), _e(t), M && M(e), A && A(n);
                        }),
                        (xe.onFocus = function (e) {
                            var t = e.target;
                            j && ((e.nativeEvent.text = t.value), j(e)),
                                null != t &&
                                    ((v.Z._currentlyFocusedNode = t),
                                    E && (t.value = ""),
                                    me &&
                                        (null != y && clearTimeout(y),
                                        (y = setTimeout(() => {
                                            null != t && t.select();
                                        }, 0))));
                        }),
                        (xe.onKeyDown = function (e) {
                            var t = e.target;
                            e.stopPropagation();
                            var n = null == Z ? !D : Z,
                                r = e.nativeEvent,
                                o = (function (e) {
                                    return e.isComposing || 229 === e.keyCode;
                                })(r);
                            V && V(e), "Enter" !== e.key || e.shiftKey || o || e.isDefaultPrevented() || ((!Z && D) || !ie || (e.preventDefault(), (r.text = e.target.value), ie(e)), n && null != t && setTimeout(() => t.blur(), 0));
                        }),
                        (xe.onSelect = function (e) {
                            try {
                                var t = e.target,
                                    n = { start: t.selectionStart, end: t.selectionEnd };
                                te && ((e.nativeEvent.selection = n), (e.nativeEvent.text = e.target.value), te(e)), we.current === he && (fe.current = n);
                            } catch (e) {}
                        }),
                        null != z && (0, m.O)("editable", "editable is deprecated. Use readOnly."),
                        (xe.readOnly = !0 === ce || !1 === z),
                        null != O && (0, m.O)("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."),
                        (xe.rows = D ? (null != ue ? ue : O) : 1),
                        (xe.spellCheck = null != be ? be : R),
                        (xe.style = [{ "--placeholderTextColor": le }, f.textinput$raw, f.placeholder, e.style, x && f.caretHidden]),
                        (xe.type = D ? void 0 : n),
                        (xe.virtualkeyboardpolicy = !1 === ge ? "manual" : "auto");
                    var Ee = (0, d.Z)(xe),
                        ke = (0, c.Z)(Se, Ee, Ce, t);
                    xe.ref = ke;
                    var ze = null != e.lang ? (0, p.w1)(e.lang) : null,
                        Te = e.dir || ze || Ze;
                    return (0, o.Z)(Re, xe, { writingDirection: Te });
                });
            (S.displayName = "TextInput"), (S.State = v.Z);
            var f = h.Z.create({ textinput$raw: { MozAppearance: "textfield", WebkitAppearance: "none", backgroundColor: "transparent", border: "0 solid black", borderRadius: 0, boxSizing: "border-box", font: "14px System", margin: 0, padding: 0, resize: "none" }, placeholder: { placeholderTextColor: "var(--placeholderTextColor)" }, caretHidden: { caretColor: "transparent" } });
            const w = S;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-6107ac-34e706af.300329aa.js.map
