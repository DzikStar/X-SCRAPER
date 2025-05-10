"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"],
    {
        3196: (e, a, r) => {
            r.d(a, { Z: () => A });
            r(136728);
            var o = r(202784),
                d = r(99107),
                n = r(688715),
                l = r(154003),
                s = r(674132),
                i = r.n(s),
                t = r(261214),
                c = r(462775),
                u = r(182495),
                D = r(601798),
                m = r(500002),
                h = r(443781),
                p = r(406837),
                M = r(950570),
                f = r(911318);
            const b = i().ib65b1c6,
                w = i().f55cebb8,
                _ = i().dcc304d6,
                y = i().g61ed8a4,
                P = { clientId: f.fp, scope: "name email", usePopup: !0 };
            class I extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, c.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case u.yX.LogIn:
                                    return w;
                                case u.yX.ContinueWith:
                                    return _;
                                default:
                                    return b;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: a } = this.props;
                            e &&
                                a(d.Bm.Apple).then(({ state: a }) => {
                                    e.auth.init({ ...P, redirectURI: (0, n.ju)("https://x.com"), state: a });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: a, buttonState: r, history: o, loginReturnPath: n, personalizationSettings: l, shouldPropagateP13nSettings: s, ssoInitTokens: i } = this.props,
                                { allowCookieUse: t, allowDeviceAccess: c, allowPartnerships: u, allowPersonalization: D } = l || {};
                            a.scribe({ component: "apple_sign_in", element: r, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        a.scribe({ component: "apple_sign_in", element: r, action: "success" });
                                        const l = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        o.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: s && { allow_cookie_use: !!t, allow_device_personalization: !!c, allow_partnerships: !!u, allow_ads_personalization: !!D }, requested_variant: JSON.stringify({ display_name: l && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: d.Bm.Apple, state: i[d.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? n : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: o } = this.props,
                                            { error: d } = e;
                                        d !== f.IN ? (a.scribe({ component: "apple_sign_in", element: r, action: "failure" }), o({ text: y })) : a.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
                                    });
                        });
                }
                componentDidMount() {
                    this._is3rdPartyIntegrationDisabled ||
                        D.Z.inject({
                            callback: () => {
                                this._initAppleIDAuth(), this.setState({ isScriptLoaded: !0 });
                            },
                            scriptId: "signInWithAppleJsLibrary",
                            src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                        });
                }
                render() {
                    const { buttonSize: e, style: a } = this.props,
                        { isScriptLoaded: r } = this.state,
                        d = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : o.createElement(l.ZP, { backgroundColor: "white", borderColor: "gray200", children: d, color: "alwaysBaseGray1100", disabled: !r, fontWeight: "normal", icon: o.createElement(t.default, null), onPress: this._handleOnPress, size: e, style: a, testID: M.Z.apple });
                }
            }
            (I.contextType = h.rC), (I.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const A = (0, m.ZP)((0, p.Z)(I));
        },
        791983: (e, a, r) => {
            r.d(a, { O: () => u, c: () => s });
            var o = r(202784),
                d = r(691533),
                n = r(523561),
                l = r(655352);
            function s() {
                return (0, l.ZP)() ? null : o.createElement(d.Z, { hideOnError: !0 }, o.createElement(i, null));
            }
            const i = (0, n.Z)({
                loader: () =>
                    Promise.all([
                        r.e("icons.17"),
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("icons.22"),
                        r.e("modules.audio-6107ac1a"),
                        r.e("modules.audio-b953418a"),
                        r.e("modules.audio-7c51e6a7"),
                        r.e("modules.audio-04db59e9"),
                        r.e("modules.audio-76583d6c"),
                        r.e("modules.audio-b7a8a5fb"),
                        r.e("modules.audio-51f6e793"),
                        r.e("modules.audio-e019dbda"),
                        r.e("modules.audio-262c94d4"),
                        r.e("modules.audio-c6fe4ea4"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("shared~loader.Spacebar~loader.SidebarSpacebar"),
                        r.e("loader.Spacebar"),
                    ])
                        .then(r.bind(r, 641520))
                        .then((e) => ({ default: e.Spacebar })),
            });
            var t = r(107267),
                c = r(443781);
            function u() {
                const e = (0, c.QZ)(),
                    a = (0, t.useHistory)();
                if (!e.loggedInUserId) return null;
                return "/i/spacebar" === a.location.pathname ? null : o.createElement(d.Z, { hideOnError: !0 }, o.createElement(D, null));
            }
            const D = (0, n.Z)({
                loader: () =>
                    Promise.all([
                        r.e("icons.17"),
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("icons.22"),
                        r.e("modules.audio-6107ac1a"),
                        r.e("modules.audio-b953418a"),
                        r.e("modules.audio-7c51e6a7"),
                        r.e("modules.audio-04db59e9"),
                        r.e("modules.audio-76583d6c"),
                        r.e("modules.audio-b7a8a5fb"),
                        r.e("modules.audio-51f6e793"),
                        r.e("modules.audio-e019dbda"),
                        r.e("modules.audio-262c94d4"),
                        r.e("modules.audio-c6fe4ea4"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("shared~loader.Spacebar~loader.SidebarSpacebar"),
                        r.e("loader.SidebarSpacebar"),
                    ])
                        .then(r.bind(r, 755418))
                        .then((e) => ({ default: e.SidebarSpacebar })),
            });
        },
        450006: (e, a, r) => {
            r.d(a, { Z: () => h });
            var o = r(202784),
                d = r(680961),
                n = r(293115),
                l = r(312771),
                s = r(810641),
                i = r(668214);
            const t = (e, a) => a.module.selectIsEmptyTimeline(e),
                c = (e, a) => a.module.selectInitialFetchStatus(e),
                u = (e, a) => {
                    const r = a.module.selectMetadata(e);
                    return r?.scribeConfig;
                },
                D = (0, i.Z)().propsFromState(() => ({ initialFetchStatus: c, isTimelineEmpty: t, scribeNamespace: u }));
            const m = { ...(0, r(335632).G)({ isInSidebar: !0 }) },
                h = D((e) => {
                    const { initialFetchStatus: a, isTimelineEmpty: r, module: i, scribeNamespace: t } = e;
                    if ((a === l.ZP.LOADED || a === l.ZP.FAILED) && r) return null;
                    const c = o.createElement(s.Z, { entryConfiguration: m, module: i, scroller: d.Z, showLoadingFooter: !1, title: "", withKeyboardShortcuts: !1 });
                    return t ? o.createElement(n.nO, { namespace: t }, c) : c;
                });
        },
        727655: (e, a, r) => {
            r.d(a, { Z: () => n });
            var o = r(202784);
            const d = (0, r(523561).Z)({ loader: () => r.e("loader.VerifiedOrgSidebarModule").then(r.bind(r, 482234)) }),
                n = () => o.createElement(d, null);
        },
        355768: (e, a, r) => {
            r.d(a, { Z: () => S });
            var o = r(807896),
                d = r(202784),
                n = r(325686),
                l = r(154003),
                s = r(823161),
                i = r(731708),
                t = r(530525),
                c = r(392237),
                u = r(674132),
                D = r.n(u),
                m = r(837020),
                h = r(144251),
                p = r(187669),
                M = r(399398),
                f = r(88660),
                b = r(293115),
                w = r(725405),
                _ = r(125363),
                y = r(919022),
                P = r(443781);
            const I = D().da1aa48f,
                A = D().b68c3784,
                k = "get_verified_profile_sidebar",
                v = ({ dismiss: e, profileUser: { screen_name: a }, viewerUser: { name: r, profile_image_url_https: o } }) => {
                    const c = (0, w.Z)(),
                        { featureSwitches: u } = (0, P.QZ)(),
                        f = u.getStringValue("subscriptions_upsells_verified_profile_sidebar_variant"),
                        b = d.useMemo(() => {
                            switch (f) {
                                case "variant_a":
                                default:
                                    return "variant_a";
                                case "variant_b":
                                    return "variant_b";
                                case "variant_c":
                                    return "variant_c";
                                case "variant_d":
                                    return "variant_d";
                                case "variant_e":
                                    return "variant_e";
                                case "variant_f":
                                    return "variant_f";
                            }
                        }, [f]);
                    (0, p.q)(() => {
                        c.scribeAction("impression");
                    });
                    const { description: _, header: y, withAnimatedBadge: v, withAvatar: g, withUsername: S } = ((e, a) => ({ variant_a: { header: D().e4a7a968, description: I({ screenName: a }), withAnimatedBadge: !0 }, variant_b: { header: D().id9c1e82, description: I({ screenName: a }), withAnimatedBadge: !0 }, variant_c: { header: D().d43b0edc, description: I({ screenName: a }), withAnimatedBadge: !0 }, variant_d: { header: D().d4ea0ed4, description: I({ screenName: a }), withAnimatedBadge: !0 }, variant_e: { header: D().cffeaeae, description: I({ screenName: a }), withAvatar: !0 }, variant_f: { header: D().cffeaeae, description: I({ screenName: a }), withUsername: !0 } })[e])(b, a);
                    return d.createElement(
                        M.g,
                        { testID: "verified_profile_upsell" },
                        d.createElement(
                            n.Z,
                            { role: "complementary", style: Z.root },
                            d.createElement(l.ZP, {
                                icon: d.createElement(m.default, null),
                                onPress: () => {
                                    e(), c.scribeAction("dismiss");
                                },
                                size: "xSmall",
                                style: Z.closeButton,
                                type: "primaryText",
                            }),
                            S ? d.createElement(n.Z, { style: Z.displayName }, d.createElement(s.default, { hasAdaptiveImage: !0, uri: o }), d.createElement(n.Z, { style: Z.userName }, d.createElement(i.ZP, { size: "headline2", weight: "medium" }, r), d.createElement(h.default, { style: Z.iconVerified }))) : null,
                            d.createElement(
                                n.Z,
                                { style: Z.inner },
                                v ? d.createElement(n.Z, { style: Z.image }, d.createElement(t.Z, { "aria-label": A, image: "https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee019.png" })) : null,
                                g ? d.createElement(n.Z, { style: Z.userAvatar }, d.createElement(s.default, { hasAdaptiveImage: !0, uri: o }), d.createElement(h.default, { style: [Z.iconVerified, Z.iconOverlap] })) : null,
                                d.createElement(i.ZP, { size: "headline1", weight: "heavy" }, y),
                                d.createElement(i.ZP, null, _),
                                d.createElement(
                                    l.ZP,
                                    {
                                        link: { pathname: "/i/premium_sign_up", state: { referring_page: k } },
                                        onPress: () => {
                                            c.scribeAction("click");
                                        },
                                        type: "primaryFilled",
                                    },
                                    A,
                                ),
                            ),
                        ),
                    );
                },
                g = (e) => {
                    const { dismiss: a, impress: r, shouldShow: n } = (0, f.ZP)({ showForMsec: null, reappearAfterMsec: null, dismissForMsec: f.IZ, key: "verified_profile_sidebar" });
                    return (
                        (0, p.q)(() => {
                            r();
                        }),
                        n ? d.createElement(b.nO, { data: { referer: k }, namespace: { component: "unified-upsell" } }, d.createElement(v, (0, o.Z)({ dismiss: a }, e))) : null
                    );
                },
                S = ({ screenName: e }) => {
                    const { featureSwitches: a, userClaims: r } = (0, P.QZ)(),
                        o = (0, _.I0)(),
                        n = (0, _.v9)(y.ZP.selectViewerUser),
                        l = (0, _.v9)((a) => y.ZP.selectByScreenName(a, e));
                    d.useEffect(() => {
                        o(y.ZP.fetchOneByScreenNameIfNeeded(e));
                    }, [o, e]);
                    const s = n?.screen_name === l?.screen_name,
                        i = l && l.is_blue_verified;
                    return !n || !l || "Business" === l?.verified_type || "Government" === l?.verified_type || !i || s || r.isAnyPremiumSubscriber() ? null : a.isTrue("subscriptions_upsells_verified_profile_sidebar_enabled") ? d.createElement(g, { profileUser: l, viewerUser: n }) : null;
                },
                Z = c.default.create((e) => ({ closeButton: { position: "absolute", top: e.spaces.space8, end: e.spaces.space8, zIndex: 1 }, root: { position: "relative", flexDirection: "column" }, inner: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, gap: e.spaces.space12, alignItems: "flex-start" }, image: { width: "100px", animationDuration: "8s", animationKeyframes: [{ "0%": { transform: "scale(0.9)" }, "25%": { transform: "scale(1)" }, "60%": { transform: "scale(0.9)" }, "100%": { transform: "scale(0.9)" } }], animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }, displayName: { backgroundColor: e.colors.gray50, padding: e.spaces.space16, width: "100%", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, alignItems: "center", gap: e.spaces.space8 }, iconVerified: { color: e.colors.blue500 }, userName: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, userAvatar: {}, iconOverlap: { position: "absolute", fontSize: e.fontSizes.title1, end: "-28px" } }));
        },
        282559: (e, a, r) => {
            r.d(a, { v: () => i });
            r(571372);
            var o = r(96768),
                d = r(202784),
                n = (r(585488), r(351743)),
                l = r.n(n);
            const s = o.Z,
                i = ({ originProduct: e, returnUrl: a }) => {
                    const [r, o] = l()(s);
                    return [
                        d.useCallback(
                            () =>
                                new Promise((o, d) => {
                                    r({
                                        variables: { return_url: a, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, a) => {
                                            const r = e?.customer_portal_session_url ?? void 0;
                                            r ? o(r) : d(new Error("Missing portal URL"));
                                        },
                                        onError: d,
                                    });
                                }),
                            [r, a, e],
                        ),
                        o,
                    ];
                };
        },
        177210: (e, a, r) => {
            r.d(a, { Z: () => c });
            var o = r(202784),
                d = r(674132),
                n = r.n(d),
                l = r(782826),
                s = r(282559),
                i = r(782642);
            const t = n().ef4602ec;
            function c(e) {
                const a = (0, i.p)(),
                    [r, d] = (0, s.v)(e),
                    n = o.useCallback(() => {
                        r()
                            .then((e) => {
                                l.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                a({ text: t });
                            });
                    }, [r, a]);
                return d ? void 0 : n;
            }
        },
        385322: (e, a, r) => {
            r.d(a, { Cg: () => i, _W: () => s });
            var o = r(202784),
                d = r(403808),
                n = r(443781),
                l = r(706758);
            function s({ callback: e, topic: a }) {
                return (
                    (function (e, a) {
                        const { featureSwitches: r } = (0, n.QZ)(),
                            l = (0, d.r)(a);
                        o.useEffect(() => {
                            if (l) return i({ featureSwitches: r, topic: e, onTopic: l });
                        }, [r, l, e]);
                    })(a, e),
                    null
                );
            }
            function i(e) {
                let a,
                    r = !0;
                return (
                    (0, l.ZP)().then(({ LivePipeline: o }) => {
                        if (!r) return;
                        const { featureSwitches: d, onTopic: n, topic: l } = e;
                        if (o.isSupportedAndReady(d)) {
                            const { teardown: e } = o.get().subscribeTopic(l, n);
                            a = e;
                        }
                    }),
                    () => {
                        (r = !1), a?.();
                    }
                );
            }
        },
        648839: (e, a, r) => {
            r.d(a, { Z: () => d });
            var o = r(202784);
            const d = ({ direction: e, handleFraction: a, handleSwipe: r, handleTap: d, swipeItemLength: n, swipeDistanceThreshold: l = n / 20, swipeTimeThreshold: s = 150 }) => {
                const i = o.useRef(0),
                    t = o.useRef(0),
                    c = o.useRef(0),
                    u = o.useCallback((a) => ("horizontal" === e ? a.clientX : a.clientY), [e]);
                return [
                    o.useCallback(
                        (e) => {
                            i.current || ((i.current = Date.now()), (t.current = u(e)));
                        },
                        [u],
                    ),
                    o.useCallback(
                        (e) => {
                            if (!i.current) return;
                            c.current = u(e);
                            const r = (c.current - t.current) / n;
                            a?.(r);
                        },
                        [u, a, n],
                    ),
                    o.useCallback(
                        (e) => {
                            if (((c.current = u(e)), !i.current)) return;
                            const o = Date.now() - i.current > s,
                                n = c.current - t.current,
                                D = Math.abs(n) > l;
                            a?.(0), (i.current = 0), o || D ? r?.(n < 0 ? 1 : -1) : d?.(e);
                        },
                        [u, a, r, d, l, s],
                    ),
                    !!i.current,
                ];
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093.01c054ca.js.map
