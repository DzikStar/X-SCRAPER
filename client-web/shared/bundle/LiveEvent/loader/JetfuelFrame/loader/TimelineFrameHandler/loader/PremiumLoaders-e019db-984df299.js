(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders-e019db-984df299"],
    {
        349035: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            var n = r(202784),
                s = r(272175);
            const a = (0, r(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(s.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        56851: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => h });
            var n = r(202784),
                s = r(420740),
                a = r(108362),
                o = r(731708),
                i = r(154003),
                c = r(392237),
                l = r(111677),
                u = r.n(l),
                p = r(349035);
            const d = "error-detail",
                f = u().e49537c2,
                m = u().a9ae1e78;
            class h extends n.PureComponent {
                render() {
                    return n.createElement(s.Z, { testID: d }, n.createElement(p.Z, null), n.createElement(a.Z, { style: b.root }, n.createElement(o.ZP, { align: "center", color: "gray700", style: b.retryText }, f), n.createElement(i.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = c.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        3196: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => j });
            r(136728);
            var n = r(202784),
                s = r(99107),
                a = r(688715),
                o = r(154003),
                i = r(111677),
                c = r.n(i),
                l = r(261214),
                u = r(462775),
                p = r(182495),
                d = r(601798),
                f = r(500002),
                m = r(443781),
                h = r(406837),
                b = r(950570),
                v = r(911318);
            const g = c().ib65b1c6,
                w = c().f55cebb8,
                y = c().dcc304d6,
                _ = c().g61ed8a4,
                k = { clientId: v.fp, scope: "name email", usePopup: !0 };
            class S extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, u.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case p.yX.LogIn:
                                    return w;
                                case p.yX.ContinueWith:
                                    return y;
                                default:
                                    return g;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(s.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ...k, redirectURI: (0, a.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: r, history: n, loginReturnPath: a, personalizationSettings: o, shouldPropagateP13nSettings: i, ssoInitTokens: c } = this.props,
                                { allowCookieUse: l, allowDeviceAccess: u, allowPartnerships: p, allowPersonalization: d } = o || {};
                            t.scribe({ component: "apple_sign_in", element: r, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: r, action: "success" });
                                        const o = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        n.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: i && { allow_cookie_use: !!l, allow_device_personalization: !!u, allow_partnerships: !!p, allow_ads_personalization: !!d }, requested_variant: JSON.stringify({ display_name: o && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: s.Bm.Apple, state: c[s.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? a : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: n } = this.props,
                                            { error: s } = e;
                                        s !== v.IN ? (t.scribe({ component: "apple_sign_in", element: r, action: "failure" }), n({ text: _ })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
                                    });
                        });
                }
                componentDidMount() {
                    this._is3rdPartyIntegrationDisabled ||
                        d.Z.inject({
                            callback: () => {
                                this._initAppleIDAuth(), this.setState({ isScriptLoaded: !0 });
                            },
                            scriptId: "signInWithAppleJsLibrary",
                            src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                        });
                }
                render() {
                    const { buttonSize: e, style: t } = this.props,
                        { isScriptLoaded: r } = this.state,
                        s = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : n.createElement(o.ZP, { backgroundColor: "white", borderColor: "gray200", children: s, color: "alwaysBaseGray1100", disabled: !r, fontWeight: "normal", icon: n.createElement(l.default, null), onPress: this._handleOnPress, size: e, style: t, testID: b.Z.apple });
                }
            }
            (S.contextType = m.rC), (S.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const j = (0, f.ZP)((0, h.Z)(S));
        },
        648839: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => s });
            var n = r(202784);
            const s = ({ direction: e, handleFraction: t, handleSwipe: r, handleTap: s, swipeItemLength: a, swipeDistanceThreshold: o = a / 20, swipeTimeThreshold: i = 150 }) => {
                const c = n.useRef(0),
                    l = n.useRef(0),
                    u = n.useRef(0),
                    p = n.useCallback((t) => ("horizontal" === e ? t.clientX : t.clientY), [e]);
                return [
                    n.useCallback(
                        (e) => {
                            c.current || ((c.current = Date.now()), (l.current = p(e)));
                        },
                        [p],
                    ),
                    n.useCallback(
                        (e) => {
                            if (!c.current) return;
                            u.current = p(e);
                            const r = (u.current - l.current) / a;
                            t?.(r);
                        },
                        [p, t, a],
                    ),
                    n.useCallback(
                        (e) => {
                            if (((u.current = p(e)), !c.current)) return;
                            const n = Date.now() - c.current > i,
                                a = u.current - l.current,
                                d = Math.abs(a) > o;
                            t?.(0), (c.current = 0), n || d ? r?.(a < 0 ? 1 : -1) : s?.(e);
                        },
                        [p, t, r, s, o, i],
                    ),
                    !!c.current,
                ];
            };
        },
        736230: (e, t, r) => {
            "use strict";
            r.d(t, { CP: () => a, OG: () => o, TT: () => s, bP: () => l, mH: () => i, tX: () => c });
            var n = r(111677);
            const s = r.n(n)().g61ed8a4,
                a = "https://jf.x.com",
                o = "https://jf-t.x.com",
                i = "https://localhost.x.com:3000",
                c = "jfDev",
                l = Object.freeze({ MARCH_MADNESS_PICK: 1 });
        },
        996223: (e, t, r) => {
            "use strict";
            r.d(t, { J: () => T });
            var n = r(202784),
                s = r(244448),
                a = r(400752),
                o = r(107267),
                i = r(682830),
                c = r(420740),
                l = r(392237),
                u = r(420182),
                p = r(56851),
                d = r(689048),
                f = r(390387),
                m = r(725405),
                h = r(738124),
                b = r(553160),
                v = r(725102),
                g = r(421855),
                w = r(854785),
                y = r(716727),
                _ = r(552619),
                k = r(736230),
                S = r(333010),
                j = r(39182),
                E = r(313129),
                P = r(355335);
            r(631673);
            const O = "/i/jf";
            function T({ path: e, systemActionHandlers: t }) {
                const [r] = (0, a.KO)(u.f0),
                    s = (0, o.useLocation)();
                return "undefined" == typeof window ? null : r.isTrue("rweb_jetfuel_sdkv2_with_x_web") ? n.createElement(S.E7, { systemActionHandlers: t }, n.createElement(n.Suspense, { fallback: n.createElement(i.J, null) }, n.createElement(x, { isHighlights: !1, path: e ?? s.pathname.slice(O.length) + s.search, renderEmptyState: () => null }))) : n.createElement(S.E7, { systemActionHandlers: t }, n.createElement(n.Suspense, { fallback: n.createElement(i.J, null) }, n.createElement(D, { path: e })));
            }
            function D({ path: e }) {
                const t = (0, o.useLocation)(),
                    r = e ?? t.pathname.slice(O.length) + t.search;
                (0, j.E)();
                const s = (0, E._3)(r, { refreshTimeMs: 1e4 });
                return s ? (s.jfResponse ? n.createElement(h.Z, { key: r, payload: s.jfResponse.root.value }) : n.createElement(c.Z, { onRetry: null, title: s.error })) : n.createElement(p.Z, null);
            }
            const x = ({ isHighlights: e, path: t, renderEmptyState: r }) => {
                const [i, c] = n.useState(!1),
                    p = (0, o.useHistory)(),
                    h = (0, j.E)(),
                    [S] = (0, a.KO)(u.dd),
                    E = S.apiClient,
                    [O] = (0, a.KO)(u.qc),
                    T = O.getState(),
                    D = (0, f.F5)(T),
                    x = Intl.DateTimeFormat().resolvedOptions().timeZone,
                    C = (0, m.Z)(),
                    [A] = (0, a.KO)(P.k),
                    [I] = (0, a.KO)(u.f0),
                    Z = location.host.includes("x.com") && I.isTrue("x_jetfuel_enable_test_cluster"),
                    M = "darker" === l.default.theme.paletteName ? "dark" : "dark" === l.default.theme.paletteName ? "dim" : l.default.theme.paletteName,
                    L = n.useMemo(() => {
                        const e = {};
                        return (e["x-jf-client-theme"] = M), (e["x-jf-v"] = "JP-4"), x && (e.timezone = x), D && (e["accept-language"] = (0, d.o)(D)), e;
                    }, [M, x, D]),
                    N = ((e, t) => (e ? k.mH : t ? k.OG : k.CP))(A, Z),
                    R = n.useMemo(
                        () => ({
                            httpPOST: async (e, t) => {
                                let r,
                                    n = !1;
                                const s = e.startsWith("/") ? e : `/${e}`;
                                try {
                                    (r = await E.jetfuelForm(s, L, Object.fromEntries(t.entries()), N)), (n = !0);
                                } catch (e) {
                                    (n = !1), c(!0);
                                }
                                return { ok: n, data: r };
                            },
                            httpGet: async (e) => {
                                let t,
                                    r = !1;
                                const n = e.startsWith("/") ? e : `/${e}`;
                                try {
                                    (t = await E.jetfuel(n, L, N)), (r = !0);
                                } catch (e) {
                                    (r = !1), c(!0);
                                }
                                return { ok: r, data: t };
                            },
                        }),
                        [E, L, N],
                    );
                n.useEffect(() => {
                    document.body.setAttribute("data-theme", M ?? "light");
                }, [M]);
                const H = n.useMemo(() => {
                    const e = (0, s.GZ)("svelte");
                    (e.net = R), (e.history = p), (e.analytics = C);
                    const t = { "x.com.GenericURT": b.Z, "x.com.Video": _.Z, "x.com.Broadcast": y.Z, StoryPager: g.Z, "StoryPager.Story": w.Z, SignupArkoseSecurityChallenge: v.Z };
                    return e.addComponentOverride(t), e;
                }, [R, p, C]);
                return n.createElement(n.Fragment, null, i && r ? r() : n.createElement(s.mQ, { analytics: C, jfPath: t, key: `${t}-${h}`, r: H }));
            };
        },
        996568: (e, t, r) => {
            "use strict";
            var n;
            r.d(t, { Wj: () => s, dn: () => o });
            const s = { none: 0, hover: 1, focus: 2, active: 3, selected: 4, disabled: 5, invalid: 6, required: 7, group_hover: 8, group_focus: 9, group_active: 10, dark: 11, light: 12, dim: 13, portrait: 14, landscape: 15, high_contrast: 16, ltr: 17, rtl: 18, linger_2s: 19, linger_5s: 20, linger_10s: 21, linger_15s: 22, linger_30s: 23, linger_90s: 24, linger_120s: 25, sticky: 26, refreshing: 27, sm: 28, md: 29, lg: 30, xl: 31, "2xl": 32, "dark:hover": 33, "light:hover": 34 };
            class a {
                constructor(e) {
                    this.ids = e;
                }
            }
            class o {
                constructor(e) {
                    this.mods = e;
                }
                get base() {
                    return this.mods.get(s.none);
                }
                static from(e) {
                    if (0 === e.length) return null;
                    const t = new Map();
                    for (const r of e)
                        if (r.length > 0) {
                            const e = r[0],
                                n = Object.keys(s).find((t) => s[t] === e);
                            if (n) {
                                const e = r.slice(1);
                                t.set(s[n], new a(e));
                            }
                        }
                    return new o(t);
                }
            }
            (n = o), (o.empty = new n(new Map()));
        },
        601066: (e, t, r) => {
            "use strict";
            r.d(t, { t: () => s.tJ, w: () => o });
            var n = r(202784),
                s = r(199035),
                a = r(333010);
            const o = (e) => {
                const [t, r] = n.useState(0),
                    o = n.useContext(a.d_),
                    i = (0, s.tJ)(e, t, o);
                return (
                    n.useEffect(
                        () =>
                            i.subscribe(() => {
                                r((e) => e + 1);
                            }),
                        [i],
                    ),
                    i
                );
            };
        },
        199035: (e, t, r) => {
            "use strict";
            r.d(t, { $3: () => h, GZ: () => l, KM: () => T, qB: () => b, tJ: () => j });
            r(571372), r(543673), r(240753), r(128399), r(136728), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            function n(e) {
                let t = new DataView(e),
                    r = 0,
                    n = () => t.getUint8(r++),
                    s = () => {
                        let e,
                            t = 0,
                            r = 0;
                        do {
                            (e = n()), (t += r < 28 ? (127 & e) << r : (127 & e) * 2 ** r), (r += 7);
                        } while (128 & e);
                        return t;
                    };
                return {
                    u8: n,
                    i16: () => {
                        let e = t.getInt16(r, !0);
                        return (r += 2), e;
                    },
                    i32: () => {
                        let e = t.getInt32(r, !0);
                        return (r += 4), e;
                    },
                    i64: () => {
                        let e = t.getBigInt64(r, !0);
                        return (r += 8), e;
                    },
                    f64: () => {
                        let e = t.getFloat64(r, !0);
                        return (r += 8), e;
                    },
                    str: () => {
                        let e = s(),
                            n = new TextDecoder().decode(t.buffer.slice(r, r + e));
                        return (r += e), n;
                    },
                    bool: () => !!n(),
                    uint: s,
                };
            }
            var s = (e, t = void 0, r = (() => crypto.getRandomValues(new BigUint64Array(1))[0])()) => {
                    let n = new EventTarget(),
                        s = e,
                        a = t;
                    return {
                        id: r,
                        get value() {
                            return s;
                        },
                        set: (e, t = Number(Date.now())) => {
                            (a && t < a) || ((s = e), (a = t), n.dispatchEvent(new Event("set")));
                        },
                        subscribe: (e) => {
                            let t = () => e(s);
                            return n.addEventListener("set", t), () => n.removeEventListener("set", t);
                        },
                    };
                },
                a = (e, t) => {
                    if (17 !== e.value?.[0]) throw new Error("Not a dict");
                    let r = () => {
                        let r = e.value?.[1]?.get(t);
                        return void 0 === r ? void 0 : [0, r];
                    };
                    return {
                        id: e.id,
                        get value() {
                            return r();
                        },
                        subscribe: (t) => e.subscribe(() => t(r())),
                        set: (r) => {
                            if (!r || 0 !== r[0]) return;
                            let n = new Map(e.value?.[1]);
                            n.set(t, r[1]), e.set([17, n]);
                        },
                    };
                },
                o = (e, t) => {
                    if (11 !== e.value?.[0]) throw new Error("Not a url");
                    let r = () => {
                        let r = new URLSearchParams(e.value?.[1]).get(t);
                        return null === r ? void 0 : [0, r];
                    };
                    return {
                        id: e.id,
                        get value() {
                            return r();
                        },
                        subscribe: (t) => e.subscribe(() => t(r())),
                        set: (r) => {
                            if (!r || 0 !== r[0]) return;
                            let n = new URL(e.value?.[1]);
                            n.searchParams.set(t, r[1]), e.set([11, n.toString()]);
                        },
                    };
                },
                i = (e) => {
                    let [t, r] = e;
                    switch (t) {
                        case 0:
                        case 4:
                            return r.id.toString();
                        case 2:
                        case 3:
                        case 1:
                            return `${r.id}:${r.key}`;
                    }
                },
                c = (e) => {
                    let t = new Map(),
                        r = (new Map(), []),
                        n = [],
                        i = (e, r, n) => {
                            let [i, c] = e;
                            switch (i) {
                                case 0:
                                case 4: {
                                    let e = s(r, n, c.id);
                                    return t.set(c.id, e), e;
                                }
                                case 2: {
                                    let e = s([17, new Map()], n, c.id);
                                    return t.set(c.id, e), a(e, c.key);
                                }
                                case 3: {
                                    let e = s([11, ""], n, c.id);
                                    return t.set(c.id, e), o(e, c.key);
                                }
                                case 1: {
                                    let e = s([16, new Map()], n, c.id);
                                    return t.set(c.id, e), e;
                                }
                            }
                        },
                        c = (e) => {
                            let [r, n] = e,
                                s = t.get(n.id);
                            if (s)
                                switch (r) {
                                    case 0:
                                    case 4:
                                        return s;
                                    case 2:
                                        return a(s, n.key);
                                    case 3:
                                        return o(s, n.key);
                                    case 1:
                                        return;
                                }
                        };
                    return {
                        id: e,
                        atoms: {
                            getOrCreate: (e, t, r, n) => {
                                let s = c(e);
                                return s ? (!n || (void 0 === s.value && null === s.value) ? (s.set(t, r), s) : s) : i(e, t, r);
                            },
                            get: c,
                        },
                        net: { httpPOST: async (e, t) => ({ ok: (await fetch(e, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(t.entries())) })).ok, data: void 0 }) },
                        hooks: void 0,
                        analytics: void 0,
                        history: {
                            push(e) {
                                location.href = e;
                            },
                            replace(e) {
                                location.href = e;
                            },
                            goBack({ backLocation: e } = {}) {
                                e ? (location.href = e) : history.back();
                            },
                        },
                        ui: void 0,
                        scribeQueue: r,
                        addToScribeQueue: (e) => {
                            r.push(e);
                        },
                        getScribeQueue: () => r,
                        clearScribeQueue: () => {
                            r.length = 0;
                        },
                        addCover: (e) => {
                            n.push(e);
                        },
                        removeCover: () => {
                            if (n.length <= 0) return !1;
                            let e = n.pop();
                            return e && e.close(), !0;
                        },
                    };
                };
            function l(e, t = {}) {
                return m(c(e), t);
            }
            var u,
                p,
                d,
                f,
                m = (e, t) => Object.entries(t).reduce((e, [t, r]) => ({ ...e, [t]: r && "object" == typeof r ? m(e[t], r) : (r ?? e[t]) }), { ...e }),
                h = (e) => (b(e) << 16) >> 16,
                b = (e) => 0 | g(v(e)),
                v = (e) => new TextEncoder().encode(e),
                g =
                    ((u = (e, t) => (65535 & e) * t + ((((e >>> 16) * t) & 65535) << 16)),
                    (p = (e, t) => (e << t) | (e >>> (32 - t))),
                    (d = 3432918353),
                    (f = 461845907),
                    (e, t = 0) => {
                        t = t || 0;
                        for (var r = (e = e || "").length, n = r % 4, s = r - n, a = t, o = 0, i = 0; i < s; i += 4) (o = (255 & e[i]) | ((255 & e[i + 1]) << 8) | ((255 & e[i + 2]) << 16) | ((255 & e[i + 3]) << 24)), (o = u(o, d)), (o = p(o, 15)), (o = u(o, f)), (a = p((a ^= o), 13)), (a = u(a, 5) + 3864292196);
                        switch (((o = 0), n)) {
                            case 3:
                                o ^= (255 & e[i + 2]) << 16;
                            case 2:
                                o ^= (255 & e[i + 1]) << 8;
                            case 1:
                                (o ^= 255 & e[i]), (o = u(o, d)), (o = p(o, 15)), (a ^= o = u(o, f));
                        }
                        return (a = ((e) => ((e = u((e ^= e >>> 16), 2246822507)), (e = u((e ^= e >>> 13), 3266489909)) ^ (e >>> 16)))((a ^= r))), a >>> 0;
                    });
            function w(e, t) {
                return t.atom(e)?.value;
            }
            var y = (e, t) => {
                if (e === t) return !0;
                if (null == e || null == t) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((e, r) => y(e, t[r]));
                if ("object" == typeof e && "object" == typeof t) {
                    let r = Object.keys(e);
                    return r.length === Object.keys(t).length && r.every((r) => y(e[r], t[r]));
                }
                return !1;
            };
            function _(e, t) {
                let [r, n] = e;
                switch (r) {
                    case 0: {
                        let { ref: e } = n;
                        return void 0 === w(e, t);
                    }
                    case 1: {
                        let { ref: e, value: r } = n;
                        return y(w(e, t), t.prop(r));
                    }
                    case 2: {
                        let { ref: e, value: r } = n;
                        return !y(w(e, t), t.prop(r));
                    }
                    case 3: {
                        let { ref: e, value: r } = n,
                            s = w(e, t);
                        return r.some((e) => y(s, t.prop(e)));
                    }
                    case 4: {
                        let { ref: e, value: r } = n,
                            s = w(e, t);
                        return r.every((e) => !y(s, t.prop(e)));
                    }
                    case 5:
                        return S(n.ref, t, (e) => e > Number(E(t.prop(n.value), t)));
                    case 6:
                        return S(n.ref, t, (e) => e >= Number(E(t.prop(n.value), t)));
                    case 7:
                        return S(n.ref, t, (e) => e < Number(E(t.prop(n.value), t)));
                    case 8:
                        return S(n.ref, t, (e) => e <= Number(E(t.prop(n.value), t)));
                    case 9:
                        return k(n.ref, t, (e) => e.startsWith(n.value));
                    case 10:
                        return k(n.ref, t, (e) => e.endsWith(n.value));
                    case 11:
                        return k(n.ref, t, (e) => e.includes(n.value));
                    case 12:
                        return n.every((e) => _(e, t));
                    case 13:
                        return n.some((e) => _(e, t));
                    case 14:
                        return !_(n, t);
                    case 15: {
                        let { ref: e } = n;
                        return void 0 !== w(e, t);
                    }
                }
            }
            var k = (e, t, r) => {
                    let n = w(e, t)?.[1];
                    return "string" == typeof n && r(n);
                },
                S = (e, t, r) => {
                    let n = w(e, t)?.[1];
                    return "number" == typeof n && r(n);
                },
                j = (e, t = 0, r) => {
                    let n = (t) => {
                            let n = e.props.get(h(t)),
                                s = e.dom.prop(n);
                            return E(s, e.dom, r);
                        },
                        s = (t, r) => {
                            let n = e.props.get(h(t)),
                                s = e.dom.prop(n);
                            18 === s?.[0] && e.dom.atom(s[1].ref)?.set(r);
                        };
                    return {
                        str: (e) => n(e),
                        setStr: (e, t) => s(e, [0, t]),
                        int: (e) => n(e),
                        setInt: (e, t) => s(e, [1, t]),
                        f32: (e) => n(e),
                        setF32: (e, t) => s(e, [5, t]),
                        bool: (e) => n(e),
                        setBool: (e, t) => s(e, [6, t]),
                        richtext: (e) => n(e),
                        url: (e) => n(e),
                        date: (e) => n(e),
                        element: (e) => n(e),
                        elements: (e) => n(e),
                        id: (e) => n(e),
                        enum: (e) => n(e),
                        rawEnum: (e) => n(e),
                        strDict: (e) => n(e),
                        setStrDict: (e, t) => s(e, [17, new Map(Object.entries(t))]),
                        action: (e) => n(e),
                        mods: () => n("mod") ?? [],
                        strList: (e) => n(e),
                        setStrLit: (e, t) => s(e, [26, t]),
                        intList: (e) => n(e),
                        setIntLit: (e, t) => s(e, [27, t]),
                        f32List: (e) => n(e),
                        setF32Lit: (e, t) => s(e, [28, t]),
                        boolList: (e) => n(e),
                        setBoolLit: (e, t) => s(e, [29, t]),
                        subscribe: (t) => {
                            let r = Array.from(e.props.values());
                            return ((e, t) => {
                                let r = e.map((r) => r.subscribe(() => t(e.map((e) => e.value))));
                                return () => r.forEach((e) => e());
                            })(e.dom.allAtoms(r), t);
                        },
                        set: s,
                    };
                },
                E = (e, t, r) => {
                    if (null == e) return;
                    let [n, s] = e;
                    switch (n) {
                        case 7:
                            return t.el(s);
                        case 8:
                            return s.map((e) => t.el(e));
                        case 18:
                            return E(t.atom(s.ref)?.value, t);
                        case 14:
                            return new Date(1e3 * Number(s));
                        case 19:
                            return () => t.runAction(s, r);
                        case 17:
                            return Object.fromEntries(s.entries());
                        case 22:
                            return _(s, t);
                        case 25:
                        case 12:
                            return s;
                    }
                    return s;
                };
            function P(e, t, r) {
                let [n, s] = e;
                switch (n) {
                    case 0:
                        !(function (e, t) {
                            let [r, n] = e,
                                s = Number(new Date()),
                                a = (e) => t.atom(e),
                                o = (e, t) => {
                                    let r = a(e);
                                    r && void 0 !== r.value && !1 !== t(r.value) && r.set(t(r.value), s);
                                },
                                i = (e) => t.prop(e);
                            switch (r) {
                                case 0:
                                    a(n)?.set(void 0, s);
                                    break;
                                case 1: {
                                    let [e, r] = n;
                                    t.runtime.atoms.getOrCreate(e, i(r), s, !1);
                                    break;
                                }
                                case 2: {
                                    let [e, t] = n;
                                    o(e, (e) => (1 === e[0] || 5 === e[0]) && [e[0], e[1] + t]);
                                    break;
                                }
                                case 3: {
                                    let [e, t] = n;
                                    o(e, (e) => 0 === e[0] && [e[0], e[1] + t]);
                                    break;
                                }
                                case 6: {
                                    let [e, t] = n;
                                    o(e, (e) => 6 === e[0] && [e[0], !e[1]]);
                                    break;
                                }
                            }
                        })(s, t);
                        break;
                    case 2:
                        s.forEach((e) => P(e, t, r));
                        break;
                    case 3:
                        {
                            let { url: e, body: n, complete: a, error: o, optimistic: i } = s,
                                c = E(t.prop(e), t),
                                l = E(t.prop(n), t),
                                u = new Map(Object.entries(l ?? {}));
                            c &&
                                l &&
                                (i && P(i, t, r),
                                t.runtime.net.httpPOST(c, u).then((e) => {
                                    e.ok ? a && P(a, t, r) : o && P(o, t, r);
                                }));
                        }
                        break;
                    case 6:
                        {
                            let [e, r] = s;
                            switch (e) {
                                case 0: {
                                    let { url: e, preview: n, replace: s } = r,
                                        a = "/i/jf" + E(t.prop(e), t);
                                    a && (s ? t.runtime.history.replace(a) : t.runtime.history.push(a));
                                    break;
                                }
                                case 9: {
                                    let { url: e, preview: n, replace: s } = r,
                                        a = "/i/jf" + E(t.prop(e), t);
                                    a && (s ? location.replace(a) : (location.href = a));
                                    break;
                                }
                                case 1: {
                                    let { url: e, preview: n, replace: s } = r,
                                        a = "/i/jf" + E(t.prop(e), t);
                                    a && (s ? t.runtime.history.replace(a) : t.runtime.history.push(a));
                                    break;
                                }
                                case 3:
                                    t.runtime.history.goBack();
                                    break;
                                case 2: {
                                    let e = document.activeElement;
                                    e && e.blur(), t.runtime.removeCover() || t.runtime.history.goBack();
                                    break;
                                }
                                case 8: {
                                    let { url: e } = r,
                                        n = E(t.prop(e), t);
                                    n && window.open(n, "_blank");
                                    break;
                                }
                                case 4:
                                    t.runtime.history.goBack({ backLocation: "/" });
                                    break;
                                case 6:
                                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                    break;
                                case 5:
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }
                        break;
                    case 7:
                        window.location.reload();
                        break;
                    case 11:
                        {
                            let { type: e, ref: n } = s,
                                a = E(t.prop(n), t);
                            r?.[e](a);
                        }
                        break;
                    case 1:
                    case 8:
                    case 9:
                    case 10:
                    case 4:
                    case 13:
                        break;
                    case 5: {
                        let { ref: e, type: r } = s,
                            n = E(t.prop(e), t);
                        if (null == n) return;
                        if (2 === r) t.runtime.ui?.toast(n);
                        break;
                    }
                }
            }
            function O(e) {
                let t = {},
                    r = {},
                    a = new Map(),
                    o = s(void 0),
                    c = (e, t) => {
                        let r = [],
                            n = (e) => {
                                let [t, s] = e;
                                switch (t) {
                                    case 13:
                                    case 12:
                                        s.forEach(n);
                                        break;
                                    case 14:
                                        n(s);
                                        break;
                                    default:
                                        r.push(s.ref);
                                }
                            },
                            [s, o] = t;
                        switch (s) {
                            case 18:
                                r.push(o.ref);
                                break;
                            case 22:
                                n(o);
                        }
                        r.length && a.set(e, r);
                    };
                function l(n, s, a) {
                    for (let e in n) {
                        let r = n[e];
                        (r.dom = f), (t[e] = r);
                    }
                    r = { ...r, ...s };
                    let o = {},
                        l = {};
                    for (let e in s) {
                        let [t, r] = s[e];
                        if ((c(Number(e), s[e]), 18 !== t)) continue;
                        let n = s[r.prop_ref];
                        if (0 !== r.ref[0]) {
                            let e = s[r.ref[1].root],
                                [t, n] = e;
                            if (18 !== t) continue;
                            l[i(n.ref)] = [n.ref, s[n.prop_ref], n.is_default];
                        }
                        o[i(r.ref)] = [r.ref, n, r.is_default];
                    }
                    for (let e in l) delete o[e];
                    for (let [t, [r, n, s]] of Object.entries(l).concat(Object.entries(o))) e.atoms.getOrCreate(r, n, a, s);
                }
                function u(e) {
                    o.set(t[e]);
                }
                function p(t) {
                    return e.atoms.get(t);
                }
                let d = {
                        session: function () {
                            let e = (function () {
                                    let e = (e) => e.uint(),
                                        t = (e) => e.u8(),
                                        r = (e) => e.bool(),
                                        n = (e, t) => (r) => [e(r), t(r)],
                                        s = (t) => (r) =>
                                            Array(e(r))
                                                .fill(0)
                                                .map(() => t(r)),
                                        a = (function (e) {
                                            let [t, r, n, s, a, o, i, c, l, u, p, d, f, m, h, b, v] = e,
                                                g = n,
                                                w = l,
                                                y = t({ type: i, props: s(i, g), children: a(g), id: o(w), extend: o(g) }),
                                                _ = m({ 0: d(0, t({ id: w })), 4: d(4, t({ id: w, root: g })), 1: d(1, t({ id: w, key: i, root: g })), 2: d(2, t({ id: w, key: f, root: g })), 3: d(3, t({ id: w, key: f, root: g })) }),
                                                k = t({ ref: _, prop_ref: g, is_default: p }),
                                                S = m({ 0: d(0, _), 1: d(1, h(_, g)), 2: d(2, h(_, i)), 3: d(3, h(_, f)), 4: d(4, b(_, g, o(i))), 5: d(5, h(_, g)), 6: d(6, h(_, o(h(g, g)))), 7: d(7, h(_, g)), 8: d(8, h(_, g)) }),
                                                j = m({ 0: d(0, t({ url: g, preview: o(g), replace: p })), 9: d(9, t({ url: g, preview: o(g), replace: p })), 1: d(1, t({ url: g, body: o(g), preview: o(g), replace: p })), 2: v([2]), 8: d(8, t({ url: g })), 3: v([3]), 4: v([4]), 5: v([5]), 6: v([6]), 7: d(7, t({ id: g })) }),
                                                E = m((e) => ({ 0: d(0, S), 1: d(1, t({ ref: g, action: e, cancel: o(e) })), 2: d(2, a(e)), 3: d(3, t({ url: g, body: g, complete: o(e), error: o(e), optimistic: o(e) })), 4: d(4, t({ action: e, intensity: i })), 5: d(5, t({ ref: g, type: r })), 6: d(6, j), 7: d(7, t({ type: r, id: o(w) })), 8: d(8, f), 9: d(9, t({ urls: a(f), priority: r })), 10: d(10, g), 11: d(11, t({ type: r, ref: g })), 12: d(12, t({ action: e, delaySeconds: i })), 13: d(13, t({ data: f, secret: f })) })),
                                                P = m((e) => ({ 0: d(0, t({ ref: _ })), 15: d(15, t({ ref: _ })), 1: d(1, t({ ref: _, value: g })), 2: d(2, t({ ref: _, value: g })), 3: d(3, t({ ref: _, value: a(g) })), 4: d(4, t({ ref: _, value: a(g) })), 5: d(5, t({ ref: _, value: g })), 6: d(6, t({ ref: _, value: g })), 7: d(7, t({ ref: _, value: g })), 8: d(8, t({ ref: _, value: g })), 9: d(9, t({ ref: _, value: f })), 10: d(10, t({ ref: _, value: f })), 11: d(11, t({ ref: _, value: f })), 12: d(12, h(e, e)), 13: d(13, h(e, e)), 14: d(14, e) })),
                                                O = a(a(c)),
                                                T = a(b(r, f, o(f))),
                                                D = m({ 0: d(0, f), 1: d(1, c), 3: d(3, O), 25: d(25, a(h(O, P))), 4: d(4, w), 5: d(5, u), 6: d(6, p), 7: d(7, g), 8: d(8, a(g)), 10: d(10, n), 11: d(11, f), 12: d(12, T), 14: d(14, l), 15: d(15, g), 16: d(16, s(i, g)), 17: d(17, s(f, f)), 18: d(18, k), 19: d(19, E), 21: d(21, a(g)), 22: d(22, P), 24: d(24, a(g)), 26: d(26, a(f)), 27: d(27, a(c)), 28: d(28, a(u)), 29: d(29, a(p)), 13: d(13, v(void 0)) }),
                                                x = t({ els: a(y), props: a(D), ts: c }),
                                                C = t({ ref: g, t: o(c) });
                                            return m({ 0: d(0, x), 1: d(1, C), 2: d(2, E) });
                                        })([
                                            (e) => (t) => {
                                                let r = {};
                                                for (let n in e) r[n] = e[n](t);
                                                return r;
                                            },
                                            t,
                                            e,
                                            (e, t) => (r) => new Map(s(n(e, t))(r)),
                                            s,
                                            (e) => (t) => (r(t) ? e(t) : null),
                                            (e) => e.i16(),
                                            (e) => e.i32(),
                                            (e) => e.i64(),
                                            (e) => e.f64(),
                                            r,
                                            (e, t) => (r) => [e, t(r)],
                                            (e) => e.str(),
                                            (e) => {
                                                let r = {},
                                                    n = (e) => r[t(e)](e);
                                                return Object.assign(r, "function" == typeof e ? e(n) : e), n;
                                            },
                                            n,
                                            (e, t, r) => (n) => [e(n), t(n), r(n)],
                                            (e) => (t) => e,
                                        ]);
                                    return { decodeMessage: (e) => a(e) };
                                })(),
                                t = new Uint8Array(0),
                                r = (e) => {
                                    let [t, r] = e;
                                    switch (t) {
                                        case 0:
                                            l(r.els, r.props, r.ts);
                                            break;
                                        case 1:
                                            u(r.ref);
                                    }
                                };
                            return {
                                onChunk: (s) => {
                                    for (t = new Uint8Array([...t, ...s]); t.length > 4; ) {
                                        let s = new DataView(t.buffer).getUint32(0, !0);
                                        if (t.length < s + 4) break;
                                        let a = t.slice(4, 4 + s);
                                        (t = t.slice(4 + s)), performance.now(), r(e.decodeMessage(n(a.buffer)));
                                    }
                                },
                            };
                        },
                    },
                    f = {
                        runtime: e,
                        get root() {
                            return o;
                        },
                        el: (e) => t[e],
                        prop: (e) => (void 0 !== e ? r[e] : void 0),
                        atom: p,
                        allAtoms: (e) =>
                            Array.from(new Set(e.flatMap((e) => a.get(e))))
                                .filter((e) => e)
                                .map((e) => p(e)),
                        runAction: (e, t) => P(e, f, t),
                        ingest: l,
                        ready: u,
                        session: () => d.session(),
                    };
                return f;
            }
            function T(e, t) {
                let r = O(e);
                return r.session().onChunk(t), r;
            }
        },
        324345: (e, t, r) => {
            "use strict";
            r.d(t, { N: () => n });
            const n = { Text: 0, Link: 1, Hashtag: 2, Mention: 3, Symbol: 4, Bold: 5, Italic: 6, Empty: 255 };
        },
        333010: (e, t, r) => {
            "use strict";
            r.d(t, { E7: () => o, d_: () => a });
            r(571372);
            var n = r(202784),
                s = r(736230);
            const a = n.createContext({ setSystemActionHandler: () => {} }),
                o = ({ children: e, systemActionHandlers: t }) => {
                    const r = n.useRef(new Map());
                    n.useEffect(() => {
                        (t ? Array.from(t?.entries()) : []).forEach(([e, t]) => {
                            r.current.set(e, t);
                        });
                    }, [t]);
                    const o = n.useCallback((e, t) => {
                            r.current.set(e, t);
                        }, []),
                        i = n.useCallback((e) => {
                            const t = e,
                                { matchupId: n, pickedByGrok: s, teamName: a } = t,
                                o = r.current.get(1);
                            o && o?.(a, n, s);
                        }, []),
                        c = { setSystemActionHandler: o, [s.bP.MARCH_MADNESS_PICK]: i };
                    return n.createElement(a.Provider, { value: c }, e);
                };
        },
        39182: (e, t, r) => {
            "use strict";
            r.d(t, { E: () => l });
            r(571372);
            var n = r(202784),
                s = r(251067),
                a = r(400752),
                o = r(313129),
                i = r(355335),
                c = r(190674);
            const l = () => {
                const e = n.useRef(null),
                    t = (0, c.m)(),
                    r = (0, a.b9)(o.Ng),
                    [l, u] = n.useState(Date.now()),
                    { isDev: p } = (0, i.Z)();
                return (
                    n.useEffect(() => {
                        if (!p || (0, s.fH)(s.vw.prod)) return;
                        const n = () => {
                            (e.current = new WebSocket("wss://localhost.x.com:3000/__dev")),
                                (e.current.onmessage = (e) => {
                                    if ("string" == typeof e.data) {
                                        const e = Date.now();
                                        r(t), u(e);
                                    }
                                }),
                                (e.current.onerror = (e) => {
                                    throw new Error(e.type);
                                }),
                                (e.current.onclose = () => {
                                    setTimeout(n, 3e3);
                                });
                        };
                        return (
                            n(),
                            () => {
                                e.current && e.current.close();
                            }
                        );
                    }, [t, p, r]),
                    l
                );
            };
        },
        313129: (e, t, r) => {
            "use strict";
            r.d(t, { wR: () => C, kp: () => A, $P: () => T, Ng: () => O, _3: () => _, Q_: () => k });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(875640);
            var n = r(202784),
                s = r(400752),
                a = r(565058),
                o = r(987809),
                i = r(392237),
                c = r(323265),
                l = r(88656),
                u = r(420182),
                p = r(689048),
                d = r(390387),
                f = r(163889),
                m = r(536387),
                h = r(774717),
                b = r(736230),
                v = r(199035),
                g = r(355335),
                w = r(190674);
            r(543673), r(240753), r(128399);
            const y = (e, t) => {
                    const r = new URL(e, "https://x.com");
                    return r.searchParams.delete(t), r.pathname + r.search;
                },
                _ = (e, t) => {
                    const r = (0, w.m)(),
                        a = (0, s.b9)(j),
                        o = n.useRef(t);
                    o.current = t;
                    const i = y(e, "tabId");
                    return (
                        n.useEffect(() => {
                            const e = o.current;
                            e && a(i, r, e);
                        }, [i, r, a]),
                        (0, s.Dv)(P({ runtimeOverrides: r, jfPath: i }))
                    );
                },
                k = (e, t = 0) => {
                    const r = (0, w.m)(),
                        a = (0, s.b9)(E),
                        o = y(e, "tabId");
                    return (
                        n.useEffect(() => {
                            if ((a(o, r), t > 0)) {
                                const e = setInterval(() => {
                                    a(o, r);
                                }, 1e3 * t);
                                return () => {
                                    clearInterval(e);
                                };
                            }
                        }, [o, a, t, r]),
                        (0, s.Dv)(P({ jfPath: o, runtimeOverrides: r }))
                    );
                },
                S = (0, o.xu)((e) => (0, a.cn)()),
                j = (0, a.cn)(null, (e, t, r, n, s) => {
                    const a = e(S(r)),
                        { refreshTimeMs: o } = s;
                    if (a && a < Date.now() - o) return t(S(r), Date.now()), e(u.zE).set(Z(n)(r));
                }),
                E = (0, a.cn)(null, (e, t, r, n) => (t(S(r), Date.now()), t(Z(n)(r)))),
                P = (0, o.xu)(
                    ({ jfPath: e, runtimeOverrides: t }) =>
                        (0, a.cn)((r) =>
                            r(Z(t)(e)).finally((t) => {
                                r(u.zE).set(S(e), Date.now());
                            }),
                        ),
                    (e, t) => e.jfPath === t.jfPath,
                ),
                O = (0, a.cn)(null, (e, t, r) => {
                    t(Z(r).reset);
                }),
                T = (e) => {
                    if (!e) return {};
                    try {
                        const t = new Uint8Array(Array.from(atob(e), (e) => e.charCodeAt(0))),
                            r = "123",
                            n = I.getOrCreate(r, () => (0, v.GZ)(r, {})),
                            s = (0, v.KM)(n, t);
                        return null == s ? { error: b.TT } : { jfResponse: s };
                    } catch (e) {
                        return (0, f.ZP)(e), { error: b.TT };
                    }
                };
            const D = (e) => {
                    const t = (0, d.F5)(e),
                        r = {},
                        n = Intl.DateTimeFormat().resolvedOptions().timeZone,
                        s = "dark" === i.default.theme.paletteName ? "dim" : i.default.theme.paletteName;
                    return (r["x-jf-client-theme"] = s), (r["x-jf-v"] = "JP-3"), n && (r.timezone = n), t && (r["accept-language"] = (0, p.o)(t)), r;
                },
                x = (e, t) => (e ? b.mH : t ? b.OG : b.CP),
                C = async (e, t, r, n, s, a, o) => {
                    if (!e) return {};
                    const i = D(r),
                        u = x(s, a),
                        p = y(e, b.tX),
                        d = (function (e, t) {
                            const r = c.ZP.isTwitterApp() ? (c.ZP.isAndroid() ? "android" : "ios") : "web",
                                n = e ? `jf-test-${r}:api` : `jf-${r}:api`,
                                s = h.P_();
                            function a(e) {
                                t || h.IM(`${n}:${e}`, s.end());
                            }
                            const o = new Set();
                            return {
                                record: a,
                                recordOnce: function (e) {
                                    o.has(e) || (o.add(e), a(e));
                                },
                            };
                        })(a, s);
                    try {
                        const e = t ? await n.jetfuelForm(p, i, t, u) : await n.jetfuel(p, i, u);
                        d.recordOnce("latency-resp");
                        const s = r.session.user_id ?? r.session.guestId ?? "",
                            a = I.getOrCreate(s, () => {
                                const e = {
                                    net: {
                                        httpPOST: async (e, t) => {
                                            let r = !1;
                                            try {
                                                await n.jetfuelForm(e, i, Object.fromEntries(t.entries()), u), (r = !0);
                                            } catch (e) {
                                                r = !1;
                                            }
                                            return { ok: r };
                                        },
                                    },
                                    ...o,
                                };
                                return (0, v.GZ)(s, e);
                            }),
                            c = (0, v.KM)(a, new Uint8Array(e));
                        return d.recordOnce("latency-dom"), null == c ? { error: b.TT } : { jfResponse: c };
                    } catch (e) {
                        return (0, f.ZP)(e), e instanceof l.Z && 404 === e.status ? (d.record("not-found"), {}) : (d.record("error"), { error: b.TT });
                    }
                },
                A = async (e, t, r, n, s, a) => {
                    if (!e) return {};
                    const o = D(r),
                        i = x(s, a),
                        c = y(e, b.tX);
                    try {
                        const e = t ? await n.jetfuelForm(c, o, t, i) : await n.jetfuel(c, o, i);
                        return { jsonResponse: JSON.parse(new TextDecoder().decode(e)) };
                    } catch (e) {
                        return (0, f.ZP)(e), e instanceof l.Z && 404 === e.status ? {} : { error: b.TT };
                    }
                },
                I = (() => {
                    const e = new Map();
                    return {
                        getOrCreate(t, r) {
                            let n = e.get(t);
                            return n || ((n = r()), e.set(t, n)), n;
                        },
                    };
                })(),
                Z = (() => {
                    let e;
                    return (t) =>
                        e ||
                        ((e = (0, m.dX)((e) =>
                            (0, m.K9)(async (r) => {
                                const n = r(g.k),
                                    s = r(u.dd).apiClient,
                                    a = r(u.f0),
                                    o = r(u.qc).getState(),
                                    i = location.host.includes("x.com") && a.isTrue("x_jetfuel_enable_test_cluster");
                                return await C(e, void 0, o, s, n, i, t);
                            }),
                        )),
                        e);
                })();
        },
        355335: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c, k: () => i });
            r(543673), r(240753), r(128399), r(136728);
            var n = r(202784),
                s = r(565058),
                a = r(400752),
                o = r(107267);
            const i = (0, s.cn)(!1),
                c = () => {
                    const e = (0, o.useHistory)(),
                        t = (0, o.useLocation)(),
                        [r, s] = (0, a.KO)(i);
                    n.useEffect(() => {
                        const e = new URLSearchParams(t.search).get("jfDev"),
                            r = sessionStorage.getItem("jfDev");
                        let n = !1;
                        e ? (("1" !== e && "true" !== e) || (n = !0), ("0" !== e && "false" !== e) || (n = !1)) : (n = "true" === r), n ? (s(!0), sessionStorage.setItem("jfDev", "true")) : (s(!1), sessionStorage.removeItem("jfDev"));
                    }, [t.search, s]);
                    const c = n.useCallback(
                        (r) => {
                            const n = new URLSearchParams(t.search);
                            r ? (n.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (n.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const a = n.toString();
                            e.push({ pathname: t.pathname, search: a }), s(r);
                        },
                        [e, t.pathname, t.search, s],
                    );
                    return {
                        isDev: r,
                        enableDev: n.useCallback(() => {
                            c(!0);
                        }, [c]),
                        disableDev: n.useCallback(() => {
                            c(!1);
                        }, [c]),
                    };
                };
        },
        190674: (e, t, r) => {
            "use strict";
            r.d(t, { m: () => i });
            var n = r(202784),
                s = r(107267),
                a = r(782642),
                o = r(738124);
            function i() {
                const e = (0, s.useHistory)(),
                    t = (0, a.p)();
                return n.useMemo(
                    () => ({
                        history: e,
                        ui: {
                            toast: (e) => {
                                const r = n.createElement(o.Z, { payload: e });
                                t({ text: "", variant: { type: "jetfuel", payload: { body: r } } });
                            },
                        },
                    }),
                    [e, t],
                );
            }
        },
        956935: (e, t, r) => {
            var n = r(482609),
                s = r(600726);
            (t = n(!1)).i(s), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        631673: (e, t, r) => {
            var n = r(46062),
                s = r(956935);
            "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.id, s, ""]]);
            var a = { insert: "head", singleton: !1 };
            n(s, a);
            e.exports = s.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders-e019db-984df299.4948be4a.js.map
