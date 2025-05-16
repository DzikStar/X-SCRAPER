"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-1bcddef9"],
    {
        887770: (e, t, n) => {
            n.r(t), n.d(t, { ManageNotABotScreen: () => j, default: () => O });
            var r = n(202784),
                i = n(325686),
                s = n(107267),
                a = n(943401),
                o = n(688715),
                c = n(530732),
                l = n(928088),
                d = n(731708),
                p = n(661810),
                u = n(392237),
                m = n(674132),
                h = n.n(m),
                f = n(191796),
                b = n(290402),
                g = n(652904),
                _ = n(177210),
                E = n(643242),
                y = n(275158),
                S = n(264922),
                Z = n(668214),
                w = (n(818581), n(365265));
            const v = (0, Z.Z)()
                .propsFromState(() => ({ productSubscriptionsFetchStatus: w.VR, subscription: (e) => (0, w.pC)(e) }))
                .propsFromActions(() => ({ fetchProductSubscriptions: w.v1 }))
                .withAnalytics({ page: "not_a_bot", section: "management" });
            var k = n(849353);
            const C = h().be103b84,
                D = h().f75d1806,
                T = h().ace43720;
            function x({ premiumTierName: e, subscriptionState: t }) {
                return r.createElement(
                    i.Z,
                    { style: A.root },
                    r.createElement(d.ZP, { align: "left", size: "headline2", weight: "bold" }, e || D),
                    (function ({ subscriptionState: e }) {
                        return r.createElement(i.Z, { background: "navigationBackground", bold: !0, style: A.label }, r.createElement(k.default, { style: A.iconActive }), r.createElement(d.ZP, { align: "center", selectable: !1, size: "subtext2", weight: "bold" }, "Expire" === e ? T : C));
                    })({ subscriptionState: t }),
                );
            }
            const A = u.default.create((e) => ({ root: { display: "flex", flexDirection: "row", alignItems: "center", padding: e.spaces.space16, justifyContent: "space-between" }, iconTwitterBlue: { fill: e.colors.text }, label: { borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space32, alignItems: "center", flexShrink: 1, paddingHorizontal: e.spaces.space12 }, iconActive: { marginEnd: e.spaces.space4, color: e.colors.primary } })),
                I = h().ib35705e,
                L = h().e5fff0c8,
                P = h().baf97716,
                R = h().ac057b4e,
                B = h().de9f111a,
                F = h().d5839f9e,
                U = h().h201c4c2,
                H = h().i8385a2c,
                $ = h().h80834de,
                z = h().ib8ebf3b;
            function j(e) {
                const { analytics: t, fetchProductSubscriptions: n, productSubscriptionsFetchStatus: u, subscription: m } = e,
                    Z = (0, s.useLocation)(),
                    w = (0, _.Z)({ returnUrl: y.d9, originProduct: "TwitterBlue" }),
                    v = h().fecebd4c,
                    k = "Expire" === m?.state ? `${L} ${P}` : null,
                    C = r.useCallback(() => {
                        n();
                    }, [n]);
                r.useEffect(() => {
                    t.scribe({ action: "impression" });
                }, [t]),
                    r.useEffect(() => {
                        C();
                    }, [C]);
                const D = r.useCallback(() => {
                    t.scribe({ action: "click", data: { payment_source: m?.payment_source || "", status: m?.state || "" } }), w && w();
                }, [t, m?.payment_source, m?.state, w]);
                return r.createElement(
                    g.Z,
                    null,
                    r.createElement(
                        S.Z,
                        { location: Z, title: I },
                        r.createElement(r.Fragment, null, r.createElement(x, { premiumTierName: "Not A Bot", subscriptionState: m?.state }), r.createElement(p.Z, { spacing: "space4" })),
                        k && r.createElement(a.Z, { description: k }),
                        r.createElement(
                            i.Z,
                            null,
                            r.createElement(b.Z, {
                                fetchStatus: u,
                                onRequestRetry: C,
                                render: () => {
                                    let e;
                                    const t = m?.payment_source;
                                    t && t !== E.H.Stripe && (e = t === E.H.AppleAppStore ? U : t === E.H.GooglePlay ? H : $);
                                    const n = !!t && t === E.H.Stripe,
                                        s = !!t && t !== E.H.Stripe,
                                        p = t === E.H.TPay || t === E.H.Twitter,
                                        u = t === E.H.Twitter;
                                    const h = ({ description: e, label: t }) => r.createElement(c.Z, { disabled: !w, onPress: D, role: "button", style: N.manageSubscriptionInteraction }, r.createElement(l.Z, null, r.createElement(i.Z, { style: N.manageSubscriptionSection }, r.createElement(i.Z, null, r.createElement(d.ZP, { color: "blue500", weight: "medium" }, t), r.createElement(d.ZP, { color: "gray700", size: "subtext2" }, e)), r.createElement(f.default, { style: N.goToSubscriptionPortalIcon }))));
                                    return n ? r.createElement(h, { description: F, label: B }) : s || p ? (u ? r.createElement(a.Z, { description: R, learnMoreLabel: v, learnMoreLink: (0, o.ju)("https://help.x.com/forms/paid-features/general") }) : r.createElement(a.Z, { description: z({ mobilePlatform: e }) })) : null;
                                },
                                retryable: !0,
                            }),
                        ),
                    ),
                );
            }
            const N = u.default.create((e) => ({ manageSubscriptionSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, offPlatformSubscriptionSection: { flexDirection: "column", justifyContent: "space-between" }, goToSubscriptionPortalIcon: { color: e.colors.gray700 }, manageSubscriptionInteraction: { cursor: "pointer" }, blueVerifiedCalloutWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, newLabelWrapper: { flexDirection: "row" }, newLabel: { backgroundColor: e.colors.blue50, color: e.colors.primary900, marginEnd: 10, borderRadius: e.borderRadii.xLarge, padding: 10 }, iconThumbnail: { marginEnd: e.spaces.space8 }, blueForBusinessSubscriptionDescription: { marginTop: e.spaces.space8 } })),
                O = v(j);
        },
        428525: (e, t, n) => {
            n.r(t), n.d(t, { OffTwitterActivity: () => P, default: () => B });
            var r = n(202784),
                i = n(688715),
                s = n(943401),
                a = n(954110),
                o = n(190286),
                c = n(674132),
                l = n.n(c),
                d = n(443781),
                p = n(652904),
                u = n(293115),
                m = n(725405),
                h = n(264922),
                f = n(24949),
                b = n(71620),
                g = n(668214),
                _ = n(205253),
                E = n(390387),
                y = n(38562);
            const S = (0, g.Z)()
                    .propsFromState(() => ({ settings: _.kQ, isEUUser: (0, f.P1)(E.Qb, y.l4, _.LP, (e, t, n) => !(!t.settings_metadata || !t.settings_metadata.is_eu) || n.is_eu_country) }))
                    .adjustStateProps(({ isEUUser: e, settings: t }) => ({ allowCookieUse: t.allowCookieUse, allowDeviceAccess: t.allowDeviceAccess, isEUUser: e }))
                    .propsFromActions(() => ({ updateSettings: _.VP, createLocalApiErrorHandler: (0, b.zr)("OFF_TWITTER_ACTIVITY_SCREEN") })),
                Z = l().a9ed7774,
                w = l().e2d61838,
                v = l().c966aaf4,
                k = (0, i.ju)("https://support.x.com/articles/20169421"),
                C = l().e8313b32,
                D = l().f1d46fd6,
                T = l().cfd2f35e,
                x = l().f6c8ccc8,
                A = l().ed012c88,
                I = (0, i.ju)("https://support.x.com/articles/20175257"),
                L = { page: "settings", section: "off_twitter_activity" };
            function P(e) {
                const { allowDeviceAccess: t, createLocalApiErrorHandler: n, isEUUser: i, location: c, updateSettings: l } = e,
                    { featureSwitches: f } = r.useContext(d.rC),
                    b = (0, m.Z)(),
                    g = (function (e, t, n) {
                        const [i, s] = r.useState(!1);
                        function a(e) {
                            n("allowCookieUse", e);
                        }
                        return {
                            showConfirmation: i,
                            enabled: e,
                            controlDisabled: t && !e,
                            _handleChanged(e, n) {
                                t && !n ? s(!0) : a(n);
                            },
                            _handleConfirmationCancel() {
                                s(!1);
                            },
                            _handleConfirmationConfirm() {
                                s(!1), a(!1);
                            },
                        };
                    })(Boolean(e.allowCookieUse), Boolean(i), y),
                    _ = f.isTrue("ucpd_enabled"),
                    E = _ ? R.withUCPD : R.default;
                function y(e, t) {
                    b.scribe({ ...L, element: e, action: t ? "enable" : "disable" }), l({ [e]: t }).catch(n({ showToast: !0 }));
                }
                return r.createElement(u.nO, { namespace: L }, r.createElement(p.Z, null, r.createElement(h.Z, { location: c, screenType: "secondaryDetail", title: E.screenTitle }, r.createElement(s.Z, { description: E.screenDescription }), !_ && r.createElement(a.Z, { checked: g.enabled, disabled: g.controlDisabled, helpText: i ? v : w, label: Z, learnMoreLink: k, name: "allowCookieUse", onChange: g._handleChanged }), r.createElement(a.Z, { checked: t, helpText: A, label: x, learnMoreLink: I, name: "allowDeviceAccess", onChange: y })), g.showConfirmation && r.createElement(o.Z, { cancelButtonLabel: T, confirmButtonLabel: D, onCancel: g._handleConfirmationCancel, onConfirm: g._handleConfirmationConfirm, text: C })));
            }
            const R = { default: { screenTitle: l().d84e63d2, screenDescription: l().d29d59d0 }, withUCPD: { screenTitle: l().h3909cd0, screenDescription: l().c981a36c } },
                B = S(P);
        },
        151441: (e, t, n) => {
            n.r(t), n.d(t, { TwitterBlue: () => D, adFreeHelpCenterLabel: () => Z, default: () => T, yourImpactLabel: () => S });
            var r = n(202784),
                i = n(325686),
                s = n(731708),
                a = n(674132),
                o = n.n(a),
                c = n(215380),
                l = n(775042),
                d = n(534763),
                p = n(443781),
                u = n(264922),
                m = n(264119),
                h = n(71620),
                f = n(668214),
                b = n(365265),
                g = n(215929),
                _ = n(919022);
            const E = (0, f.Z)()
                    .propsFromState(() => ({ viewerUser: _.ZP.selectViewerUser, userClaimsFetchStatus: g.uD, subscription: (e) => (0, b.dF)(e) }))
                    .propsFromActions(() => ({ fetchUserClaims: g.rS, createLocalApiErrorHandler: (0, h.zr)("TWITTER_BLUE_SETTINGS") }))
                    .withAnalytics({ page: "settings", section: "subscriptions" }),
                y = o().f75d1806,
                S = o().hd885ae0,
                Z = o().je4ccd3a,
                w = o().ce70c590,
                v = o().i6cb493e,
                k = o().fce877d6,
                C = o().e4fde082;
            function D({ analytics: e, createLocalApiErrorHandler: t, fetchUserClaims: n, history: a, subscription: o, userClaimsFetchStatus: h, viewerUser: f }) {
                const { location: b } = (0, m.Z)(),
                    { featureSwitches: g, userClaims: _ } = r.useContext(p.rC),
                    E = g.isTrue("blue_business_affiliates_list_order_setting_enabled"),
                    S = _.isVerifiedOrgAffiliate();
                r.useEffect(() => {
                    e.scribe({ action: "impression" });
                }, [e]);
                const Z = () => {
                        e.scribe({ element: "undo_tweet", action: "click" });
                    },
                    D = (t) => {
                        e.scribe({ component: t, action: "click" });
                    };
                return r.createElement(i.Z, null, r.createElement(u.Z, { location: b, screenType: "primaryDetail", title: y }, r.createElement(d.H, { Icon: l.default, description: C, key: k, label: k, link: "/settings/undo_tweet", onPress: Z, testID: "undoSection" }), S && E && r.createElement(d.H, { Icon: c.default, description: v, key: w, label: r.createElement(s.ZP, { weight: "medium" }, w), link: "/settings/manage_affiliates", onPress: () => D("manage_affiliates"), testID: "affiliateManagementSection" })));
            }
            const T = E(D);
        },
        60974: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ye });
            var r = n(807896),
                i = n(202784),
                s = n(325686),
                a = n(688715),
                o = n(943401),
                c = n(844685),
                l = n(420412),
                d = n(674132),
                p = n.n(d),
                u = n(119232),
                m = n(885724),
                h = n(47286),
                f = n(40904),
                b = n(717160),
                g = n(707570),
                _ = n(297938),
                E = n(175564),
                y = n(851386),
                S = n(546351),
                Z = n(488746),
                w = n(665468),
                v = n(534763),
                k = n(443781),
                C = n(457566),
                D = n(652904),
                T = n(293115),
                x = n(264922);
            const A = { privacyAndSafetyScreen: "privacyAndSafetyScreen" },
                I = p().cad53944,
                L = p().c477d710,
                P = p().b06f5d36,
                R = p().fd807e78,
                B = p().a9ff473c,
                F = p().c6f67e32,
                U = p().d0484606,
                H = p().f2bd9c48,
                $ = p().c4afe0e6,
                z = p().cbd449a0,
                j = p().ab125232,
                N = p().d4986f86,
                O = p().cc950d94,
                M = p().ded416b0,
                V = p().fe37f854,
                W = p().fd4d9068,
                G = p().ab987f3c,
                K = p().db5fabb0,
                q = p().i83cab8a,
                Q = p().d035a8d0,
                Y = p().e338a794,
                J = p().d0b74a5a,
                X = p().c05e8024,
                ee = p().d84e63d2,
                te = p().d29d59d0,
                ne = p().h3909cd0,
                re = p().c981a36c,
                ie = p().h14ba864,
                se = p().eb0cc786,
                ae = p().jabb9c9a,
                oe = p().dd533318,
                ce = p().bd0646a0,
                le = p().a607862a,
                de = p().g5925628,
                pe = p().dd6012f8,
                ue = p().jdceda60,
                me = p().f644b748,
                he = p().ff4b3818,
                fe = p().i586f3e0,
                be = { page: "settings", section: "privacy_and_safety" },
                ge = ({ includeReplies: e = !1 }) => [{ label: R, description: B, link: "/settings/audience_and_tagging", Icon: u.default }, { label: F, description: U, link: "/settings/your_tweets", Icon: m.default }, { label: H, description: $, link: "/settings/content_you_see", Icon: h.default }, e ? { label: ue, description: me, link: "/settings/replies", Icon: h.default } : void 0, { label: z, description: j, link: "/settings/mute_and_block", Icon: f.default }, { label: N, description: O, link: "/settings/direct_messages", Icon: b.default }, { label: M, description: V, link: "/settings/spaces", Icon: g.default }, { label: W, description: G, link: "/settings/contacts", Icon: _.default }].filter(Boolean),
                _e = ({ includeCookiePreferences: e = !1, includeGrokSettings: t = !1, ucpdEnabled: n = !1 }) => [{ label: Q, description: Y, link: "/settings/ads_preferences", Icon: E.default }, e ? { label: J, description: X, link: "/settings/cookie_preferences", Icon: y.default } : void 0, { label: n ? ne : ee, description: n ? re : te, link: "/settings/off_twitter_activity", Icon: S.default }, { label: ie, description: se, link: "/settings/data_sharing_with_business_partners", Icon: Z.default }, { label: ae, description: oe, link: "/settings/location_information", Icon: w.default }, t ? { label: he, description: fe, link: "/settings/grok_settings", Icon: C.x1 } : void 0].filter(Boolean),
                Ee = [
                    { label: pe, link: (0, a.ju)("https://privacy.x.com/") },
                    { label: le, link: (0, a.ju)("https://x.com/en/privacy") },
                    { label: de, link: (0, a.ju)("https://help.x.com/forms/privacy") },
                ];
            function ye(e) {
                const { location: t } = e,
                    { featureSwitches: n } = i.useContext(k.rC),
                    a = n.isTrue("responsive_web_cookie_compliance_banner_enabled"),
                    d = n.isTrue("toxic_reply_filter_settings_enabled"),
                    p = n.isTrue("ucpd_enabled"),
                    u = n.isTrue("responsive_web_grok_opt_out_enabled");
                return i.createElement(
                    T.nO,
                    { namespace: be },
                    i.createElement(
                        D.Z,
                        null,
                        i.createElement(
                            x.Z,
                            { location: t, screenType: "primaryDetail", title: I },
                            i.createElement(
                                s.Z,
                                { testID: A.privacyAndSafetyScreen },
                                i.createElement(o.Z, { description: L }),
                                i.createElement(c.Z, { text: P }),
                                ge({ includeReplies: d }).map((e) => i.createElement(v.H, (0, r.Z)({}, e, { key: e.label }))),
                                i.createElement(l.Z, null),
                                i.createElement(c.Z, { text: p ? q : K }),
                                _e({ includeCookiePreferences: a, includeGrokSettings: u, ucpdEnabled: p }).map((e) => i.createElement(v.H, (0, r.Z)({}, e, { key: e.label }))),
                                i.createElement(l.Z, null),
                                i.createElement(c.Z, { text: ce }),
                                Ee.map((e) => i.createElement(v.b, (0, r.Z)({}, e, { key: e.label }))),
                            ),
                        ),
                    ),
                );
            }
        },
        722847: (e, t, n) => {
            n.r(t), n.d(t, { ProfileCustomizationScreen: () => A, default: () => I });
            var r = n(795239),
                i = n(202784),
                s = (n(585488), n(712696)),
                a = n.n(s),
                o = n(107267),
                c = n(943401),
                l = n(674132),
                d = n.n(l),
                p = n(290402),
                u = n(443781),
                m = n(888802),
                h = n(652904),
                f = n(883229),
                b = n(943914),
                g = n(466441),
                _ = n(264922),
                E = n(668214),
                y = n(215929);
            const S = (0, E.Z)()
                    .propsFromState(() => ({ userClaimsFetchStatus: y.uD }))
                    .withAnalytics({ page: "settings", section: "subscriptions" }),
                Z = d().i9028824,
                w = d().dd0c889e,
                v = d().d8eed490,
                k = r.Z,
                C = { type: "Retry" },
                D = { context: "ProfileCustomization" };
            function T() {
                const { user_preferences: e } = a()(k, {}),
                    t = (0, o.useLocation)(),
                    n = (0, o.useRouteMatch)(),
                    r = (0, o.useHistory)(),
                    { userClaims: s } = i.useContext(u.rC),
                    l = s.isTrueAndEnabled("subscriptions_feature_hide_subscriptions");
                return e ? i.createElement(h.Z, null, i.createElement(_.Z, { location: t, screenType: "secondaryDetail", title: w }, i.createElement(c.Z, { description: v }), l && i.createElement(m.Z, { userPreferences: e }))) : i.createElement(g.default, { history: r, location: t, match: n });
            }
            const x = () => i.createElement(T, null);
            function A({ userClaimsFetchStatus: e }) {
                return i.createElement(f.N, { errorConfig: D, fallback: C }, i.createElement(b.B, { fallback: null }, i.createElement(p.Z, { "aria-label": Z, fetchStatus: e, render: x })));
            }
            const I = S(A);
        },
        24257: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                i = n(966886),
                s = n(731708),
                a = n(779610),
                o = n(674132),
                c = n.n(o),
                l = n(467604);
            const d = c().h7797d18;
            function p(e) {
                switch (e.toLowerCase()) {
                    case "iphone":
                    case "android":
                        return "mobile";
                    case "ipad":
                        return "tablet";
                    case "web":
                        return "laptop";
                    default:
                        return "unknown";
                }
            }
            class u extends r.PureComponent {
                _renderLocationAndDateLabel() {
                    const { device: e } = this.props,
                        t = e.registration_ts,
                        n = t ? r.createElement(i.Z, { cutoff: "years", humanReadable: !0, timestamp: Number(t) }) : null;
                    return r.createElement(r.Fragment, null, d, " ", n);
                }
                _renderDeviceIcon() {
                    const { device: e } = this.props,
                        t = e.is_current_device;
                    return r.createElement(l.Z, { deviceType: t && "Unknown" === e.device_type ? "laptop" : p(e.device_type) });
                }
                _renderDescription() {
                    return r.createElement(s.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, this._renderLocationAndDateLabel());
                }
                render() {
                    const { device: e, link: t } = this.props;
                    return r.createElement(a.Z, { description: this._renderDescription(), label: e.device_type, link: t, thumbnail: this._renderDeviceIcon() });
                }
            }
        },
        381633: (e, t, n) => {
            n.r(t), n.d(t, { DevicesScreen: () => N, default: () => O });
            var r = n(202784),
                i = n(325686),
                s = n(688715),
                a = n(190286),
                o = n(731708),
                c = n(779610),
                l = n(844685),
                d = n(420412),
                p = n(674132),
                u = n.n(p),
                m = n(662678),
                h = n(323265),
                f = n(290402),
                b = n(443781),
                g = n(652904),
                _ = n(293115),
                E = n(170069),
                y = n(264922),
                S = n(467604),
                Z = n(24257),
                w = n(71620),
                v = n(668214),
                k = n(231817),
                C = n(601576),
                D = n(312771);
            const T = (e, t) => (0, D.h1)(k.UD(e)),
                x = (0, v.Z)()
                    .propsFromState(() => ({ fetchStatus: T, devices: k.LJ }))
                    .propsFromActions(() => ({ addToast: C.fz, createLocalApiErrorHandler: (0, w.zr)("Devices"), fetchKeysAndDevicesIfNeeded: k.gw, reRegisterCurrentDevice: k.gQ })),
                A = u().c9bc33fa,
                I = u().f95ed3e6,
                L = u().a787669a,
                P = u().gbefe730,
                R = u().i859a9d4,
                B = u().d7a9796e,
                F = u().b5635e86,
                U = { headline: u().bb4a95dc, text: u().a9538040, confirmButtonLabel: u().hd173c7a },
                H = u().hf4312a4,
                $ = u().fc2a5c92,
                z = (0, s.ju)("https://help.x.com/using-x/encrypted-direct-messages#registration"),
                j = { page: "settings", section: "dm_registered_devices" };
            class N extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._fetchDevices = () => {
                            const { loggedInUserId: e } = this.context,
                                { createLocalApiErrorHandler: t, fetchKeysAndDevicesIfNeeded: n } = this.props;
                            n({ loggedInUserId: e }).catch(t({ showToast: !0 }));
                        }),
                        (this._handleRetry = () => {
                            this._fetchDevices();
                        }),
                        (this._renderDevice = (e, t) => {
                            const n = `/settings/direct_messages/devices/${encodeURIComponent(e.registration_token)}`;
                            return r.createElement(Z.Z, { device: e, key: e.registration_token, link: n, withBottomBorder: !t, withSummary: !1 });
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                componentDidMount() {
                    this._fetchDevices();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(_.nO, { namespace: j }, r.createElement(g.Z, null, r.createElement(y.Z, { location: t, title: A }, r.createElement(f.Z, { "aria-label": B, fetchStatus: e, onRequestRetry: this._handleRetry, render: () => this._renderDashboard() }), this.state.showConfirmation ? r.createElement(a.Z, { confirmButtonLabel: U.confirmButtonLabel, confirmButtonType: "primary", headline: U.headline, onCancel: () => this._cancelDeviceReRegistration(), onConfirm: () => this._doReRegisterDevice(), text: U.text }) : null)));
                }
                _renderCurrentUnregisteredDevice() {
                    const [e, t] = this._currentDeviceTypeAndIcon(),
                        n = r.createElement(o.ZP, { color: "link", numberOfLines: 1, onPress: () => this._showReRegisterConfirmation(), size: "subtext2" }, F);
                    return r.createElement(c.Z, { description: n, label: e, thumbnail: r.createElement(S.Z, { deviceType: t }) });
                }
                _doReRegisterDevice() {
                    const { addToast: e, reRegisterCurrentDevice: t } = this.props;
                    t()
                        .then(() => {
                            this.setState({ showConfirmation: !1 }), e({ text: H });
                        })
                        .catch(() => {
                            this.setState({ showConfirmation: !1 }), e({ text: $ });
                        });
                }
                _showReRegisterConfirmation() {
                    this.setState({ showConfirmation: !0 });
                }
                _cancelDeviceReRegistration() {
                    this.setState({ showConfirmation: !1 });
                }
                _currentDeviceTypeAndIcon() {
                    return h.ZP.isIPhone() ? ["iPhone", "phone"] : h.ZP.isAndroid() ? ["Android", "phone"] : h.ZP.isIOS() ? ["iPad", "tablet"] : ["Web", "laptop"];
                }
                _renderDashboard() {
                    const { devices: e } = this.props,
                        t = e.length,
                        [n, s] = (0, m.Z)(e, (e) => e.is_current_device);
                    return t
                        ? r.createElement(
                              i.Z,
                              null,
                              r.createElement(l.Z, { text: I }),
                              n[0] ? this._renderDevice(n[0], !1) : this._renderCurrentUnregisteredDevice(),
                              r.createElement(d.Z, null),
                              r.createElement(l.Z, { text: L }),
                              r.createElement(E.Z, null, r.createElement(u().I18NFormatMessage, { $i18n: "i34eeb37", infoText: P }, r.createElement(o.ZP, { link: z, withInteractiveStyling: !1 }, u().e186a3d6({ learnMoreLabel: R })))),
                              s.map((e, n) => this._renderDevice(e, t - 1 === n)),
                          )
                        : null;
                }
            }
            (N.contextType = b.rC), (N.defaultProps = { devices: [] });
            const O = x(N);
        },
        189843: (e, t, n) => {
            n.r(t), n.d(t, { FilteredReplies: () => i, default: () => s });
            var r = n(202784);
            const i = (e) => null,
                s = r.memo(i);
        },
        156975: (e, t, n) => {
            n.r(t), n.d(t, { Replies: () => q, default: () => Q, getUserToxicReplyFilterSettingQuery: () => V });
            var r = n(97233),
                i = n(202784),
                s = n(614983),
                a = n.n(s),
                o = (n(585488), n(712696)),
                c = n.n(o),
                l = n(107267),
                d = n(190286),
                p = n(661810),
                u = n(844685),
                m = n(954110),
                h = n(674132),
                f = n.n(h),
                b = n(652904),
                g = n(736063),
                _ = n(829824),
                E = n(170069),
                y = n(264922),
                S = n(668214),
                Z = n(131290);
            const w = (0, S.Z)()
                .propsFromActions(() => ({ toggleUserSettingsReplyFilterStatus: Z.n }))
                .withAnalytics({ page: "settings", section: "replies" });
            var v = n(940644),
                k = n(583082),
                C = n(277660),
                D = n.n(C),
                T = n(351743),
                x = n.n(T),
                A = n(71620),
                I = n(725516);
            const L = k.Z,
                P = v.Z,
                R = (e, t, n) => {
                    const { __id: r, enabled: s } = D()(L, t),
                        o = !s,
                        [c, l] = x()(P);
                    a()(r, "toxicReplyFilterSettingId must be specified");
                    const d = (0, I.z)(),
                        p = (0, A.po)();
                    return [
                        i.useCallback(() => {
                            const t = (e) => {
                                const t = e.get(r);
                                a()(t, "toxicReplyFilterSettingRecord must be specified"), t.setValue(o, "enabled");
                            };
                            d.scribe({ page: "settings", section: "replies", element: "reply_filter_switch", action: o ? "enabled" : "disabled" }),
                                c({
                                    variables: { userId: e, enabled: o },
                                    onCompleted: n,
                                    onError: (e) => {
                                        p(e);
                                    },
                                    optimisticUpdater: t,
                                    updater: t,
                                });
                        }, [d, p, o, n, c, r, e]),
                        l,
                    ];
                },
                B = f().jdceda60,
                F = f().bcf3a9e6,
                U = f().id6a8e1a,
                H = f().c048fd3a,
                $ = f().dab7dac4,
                z = f().c4c53b86,
                j = $.concat("\n\n").concat(z),
                N = f().dca3d2ee,
                O = f().ee3a7bfa,
                M = f().fe440ff8,
                V = r.Z,
                W = { context: "RepliesSettings" },
                G = i.memo(({ onCancel: e, onConfirm: t, show: n }) => (n ? i.createElement(d.Z, { confirmButtonLabel: O, headline: N, onCancel: e, onConfirm: t, text: M }) : null)),
                K = ({ toggleUserSettingsReplyFilterStatus: e }) => {
                    const t = c()(V, {}),
                        n = t?.viewer?.user_results?.result;
                    a()("User" === n?.__typename, "Result must be of type User");
                    const r = n?.toxic_reply_filter_setting;
                    a()(r, "Result must include toxic reply filter setting data");
                    const s = n.rest_id,
                        o = r.enabled,
                        [l, d] = i.useState(!1),
                        [h] = R(s, r, () => d(!0));
                    i.useEffect(() => {
                        l && (e(), d(!1));
                    }, [e, l, d]);
                    const [f, b] = i.useState(!1),
                        g = i.useCallback(() => (o ? b(!0) : h()), [o, b, h]),
                        _ = i.useCallback(() => b(!1), [b]),
                        y = i.useCallback(() => {
                            h(), b(!1);
                        }, [b, h]);
                    return i.createElement(i.Fragment, null, i.createElement(G, { onCancel: _, onConfirm: y, show: f }), i.createElement(E.Z, null, F), i.createElement(p.Z, { spacing: "space2" }), i.createElement(u.Z, { text: U }), i.createElement(m.Z, { checked: o, helpText: j, label: H, name: H, onChange: g, type: "switch" }));
                },
                q = (e) => {
                    const t = (0, l.useLocation)();
                    return i.createElement(b.Z, null, i.createElement(y.Z, { location: t, title: B }, i.createElement(_.Z, null, i.createElement(g.H, { errorConfig: W }, i.createElement(K, e)))));
                },
                Q = i.memo(w(q));
        },
        146110: (e, t, n) => {
            n.r(t), n.d(t, { default: () => b });
            var r = n(202784),
                i = n(457311),
                s = n(943401),
                a = n(674132),
                o = n.n(a),
                c = n(264922),
                l = n(668214),
                d = n(919022);
            const p = (0, l.Z)()
                    .propsFromState(() => ({ viewerUser: d.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ viewerUserScreenName: e ? e.screen_name : void 0 })),
                u = o().gaac710a,
                m = o().ga05517a,
                h = o().ea1715c0,
                f = [
                    { height: 200, uri: "https://abs.twimg.com/sticky/illustrations/empty-states/parrot-400x200.v1.png", width: 400 },
                    { height: 400, uri: "https://abs.twimg.com/sticky/illustrations/empty-states/parrot-800x400.v1.png", width: 800 },
                    { height: 600, uri: "https://abs.twimg.com/sticky/illustrations/empty-states/parrot-1200x600.v1.png", width: 1200 },
                ];
            const b = p(function ({ viewerUserScreenName: e }) {
                const t = e ? `@${e}` : "";
                return r.createElement(c.Z, { screenType: "primaryDetail", title: u, withMarginBottom: !1 }, r.createElement(s.Z, { description: t }), r.createElement(i.Z, { header: m, imageVariants: f, message: h }));
            });
        },
        674819: (e, t, n) => {
            n.r(t), n.d(t, { default: () => L });
            var r = n(807896),
                i = n(202784),
                s = n(325686),
                a = n(943401),
                o = n(674132),
                c = n.n(o),
                l = n(468670),
                d = n(720526),
                p = n(170397),
                u = n(41065),
                m = n(534763),
                h = n(443781),
                f = n(652904),
                b = n(293115),
                g = n(76920),
                _ = n(264922);
            const E = { accountAccessScreen: "accountAccessScreen", appsAndSessionsLink: "appsAndSessionsLink" },
                y = c().f8645654,
                S = c().b02df748,
                Z = c().a2197726,
                w = c().j95edf76,
                v = c().g2841de4,
                k = c().ae72d4c4,
                C = c().h1abfbce,
                D = c().hf45cca6,
                T = c().g9230d00,
                x = c().a310511c,
                A = (e) => [{ label: w, description: Z, link: "/settings/security", Icon: l.default }, { label: k, description: v, link: "/settings/apps_and_sessions", Icon: d.default, testID: E.appsAndSessionsLink }, e.isTrue("responsive_web_disconnect_third_party_sso_enabled") ? { label: C, description: D, link: "/settings/connected_accounts", Icon: p.default } : void 0, { description: x, label: T, link: "/settings/delegate", Icon: u.default }],
                I = { page: "settings", section: "security_and_account_access" };
            function L(e) {
                const { location: t } = e,
                    { featureSwitches: n } = i.useContext(h.rC),
                    o = (0, g.Zy)(),
                    c = A(n)
                        .filter((e) => e && o.has(e?.link))
                        .filter(Boolean);
                return i.createElement(
                    b.nO,
                    { namespace: I },
                    i.createElement(
                        f.Z,
                        null,
                        i.createElement(
                            _.Z,
                            { location: t, screenType: "primaryDetail", title: y },
                            i.createElement(
                                s.Z,
                                { testID: E.accountAccessScreen },
                                i.createElement(a.Z, { description: S }),
                                c.map((e) => e && i.createElement(m.H, (0, r.Z)({}, e, { key: e.link }))),
                            ),
                        ),
                    ),
                );
            }
        },
        33383: (e, t, n) => {
            n.r(t), n.d(t, { SelectedRegisteredDeviceScreen: () => L, default: () => P });
            var r = n(202784),
                i = n(325686),
                s = n(457311),
                a = n(420412),
                o = n(844685),
                c = n(731708),
                l = n(392237),
                d = n(674132),
                p = n.n(d),
                u = n(947135),
                m = n(290402),
                h = n(443781),
                f = n(652904),
                b = n(264922),
                g = n(24257),
                _ = n(71620),
                E = n(668214),
                y = n(231817),
                S = n(601576);
            const Z = (e, t) => {
                    const n = decodeURIComponent(t.match.params.deviceId || "");
                    return y.n2(e, n);
                },
                w = (0, E.Z)()
                    .propsFromState(() => ({ fetchStatus: y.UD, device: Z }))
                    .propsFromActions(() => ({ addToast: S.fz, createLocalApiErrorHandler: (0, _.zr)("REGISTERED_DEVICE_DETAIL"), fetchKeysAndDevicesIfNeeded: y.gw, deregisterDevice: y.zU }))
                    .withAnalytics({ page: "settings", section: "registered_device_details" }),
                v = p().hc48a042,
                k = { headline: p().d5bafb20, text: p().i12dee70, confirmButtonLabel: p().d4b9db26 },
                C = p().c18b1b34,
                D = p().bfbc051d,
                T = p().jaaa8984,
                x = p().e7c9d60a,
                A = p().cd14c8fe,
                I = p().j9db22f4;
            class L extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchKeysAndDevicesIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchKeysAndDevicesIfNeeded: t } = this.props,
                                { loggedInUserId: n } = this.context;
                            return t({ loggedInUserId: n }).catch(e({ showToast: !0 }));
                        }),
                        (this._handleRetry = () => {
                            this._fetchKeysAndDevicesIfNeeded();
                        }),
                        (this._handleLogOut = () => {
                            const { device: e } = this.props;
                            e && (this._deregisterDevice(e.registration_token), this._scribeAction("deregister_device"));
                        }),
                        (this._handleGoBack = () => {
                            const { history: e } = this.props;
                            e.goBack({ backLocation: "/settings/direct_messages/devices" });
                        }),
                        (this._render = () => {
                            const { device: e } = this.props;
                            return e ? r.createElement(i.Z, null, r.createElement(g.Z, { device: e, withBottomBorder: !1, withSummary: !0 }), this._renderDateAndTime(e)) : r.createElement(s.Z, { header: I });
                        });
                }
                componentDidMount() {
                    this._fetchKeysAndDevicesIfNeeded();
                }
                _deregisterDevice(e) {
                    const { addToast: t, createLocalApiErrorHandler: n, deregisterDevice: r } = this.props;
                    r(e).then(
                        () => {
                            t({ text: x }), this._handleGoBack();
                        },
                        n({ showToast: !0 }),
                    );
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe({ component: "active_session", element: e, action: "click" });
                }
                render() {
                    const { device: e, fetchStatus: t, location: n } = this.props,
                        i = e ? e.device_type : "";
                    return r.createElement(f.Z, null, r.createElement(b.Z, { location: n, title: i }, r.createElement(m.Z, { "aria-label": A, fetchStatus: t, onRequestRetry: this._handleRetry, render: this._render })));
                }
                _renderDateLabel(e) {
                    const t = new Date(Number(e.registration_ts));
                    return r.createElement("time", { dateTime: t.toISOString() }, D(t));
                }
                _renderDateAndTime(e) {
                    return r.createElement(i.Z, null, e?.registration_ts ? r.createElement(i.Z, null, r.createElement(a.Z, null), r.createElement(o.Z, { text: C }), r.createElement(i.Z, { style: [R.labelContainer, R.bottomBorder] }, r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, this._renderDateLabel(e)))) : null, r.createElement(u.Z, { confirmationSheetConfirmButtonLabel: k.confirmButtonLabel, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: k.headline, confirmationSheetText: k.text, label: v, onConfirmationSheetConfirm: this._handleLogOut, withBottomBorder: !1 }));
                }
                _renderLocation(e) {
                    const t = e.location;
                    return t ? r.createElement(i.Z, null, r.createElement(a.Z, null), r.createElement(o.Z, { text: T }), r.createElement(i.Z, { style: R.labelContainer }, r.createElement(c.ZP, { color: "gray700", size: "subtext2" }, t))) : null;
                }
            }
            L.contextType = h.rC;
            const P = w(L),
                R = l.default.create((e) => ({ labelContainer: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%" }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } }));
        },
        889186: (e, t, n) => {
            n.r(t), n.d(t, { SessionsScreen: () => N, default: () => O });
            var r = n(202784),
                i = n(325686),
                s = n(688715),
                a = n(943401),
                o = n(844685),
                c = n(420412),
                l = n(731708),
                d = n(674132),
                p = n.n(d),
                u = n(662678),
                m = n(947135),
                h = n(290402),
                f = n(652904),
                b = n(293115),
                g = n(170069),
                _ = n(264922),
                E = n(972934),
                y = n(71620),
                S = n(668214),
                Z = n(715684),
                w = n(312771);
            const v = (e, t) => (0, w.h1)(Z.UD(e)),
                k = (0, S.Z)()
                    .propsFromState(() => ({ fetchStatus: v, sessions: Z.TG }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("APPLICATIONS"), fetchSessionsIfNeeded: Z.dj, revokeAllSessions: Z.Fm })),
                C = p().dd82312a,
                D = p().c2cb5560,
                T = p().bca43fd0,
                x = p().ha6df2ca,
                A = p().b72d2904,
                I = p().b850cbd0,
                L = p().ae1bbb26,
                P = p().i859a9d4,
                R = p().e5e8a89a,
                B = p().cf3e3164,
                F = p().f810f27a,
                U = p().gbb5cec5,
                H = p().fcbd4904,
                $ = p().ab78d946,
                z = (0, s.ju)("https://help.x.com/managing-your-account/connect-or-revoke-access-to-third-party-apps"),
                j = { page: "settings", section: "sessions" };
            class N extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._fetchSessions = () => {
                            const { createLocalApiErrorHandler: e, fetchSessionsIfNeeded: t } = this.props;
                            t().catch(e({ showToast: !0 }));
                        }),
                        (this._handleRetry = () => {
                            this._fetchSessions();
                        }),
                        (this._handleLogOutAll = () => {
                            const { createLocalApiErrorHandler: e, revokeAllSessions: t } = this.props;
                            t().catch(e({ showToast: !0 }));
                        }),
                        (this._renderSession = (e, t) => {
                            const n = `/settings/sessions/${encodeURIComponent(e.token)}`;
                            return r.createElement(E.Z, { key: e.token, link: n, session: e, withBottomBorder: !t, withSummary: !1 });
                        });
                }
                componentDidMount() {
                    this._fetchSessions();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(b.nO, { namespace: j }, r.createElement(f.Z, null, r.createElement(_.Z, { location: t, title: C }, r.createElement(h.Z, { "aria-label": R, fetchStatus: e, onRequestRetry: this._handleRetry, render: () => this._renderSessionsDashboard() }))));
                }
                _renderSessionsDashboard() {
                    const { sessions: e } = this.props,
                        t = e.length,
                        [n, s] = (0, u.Z)(e, (e) => e.is_current_session);
                    return t
                        ? r.createElement(
                              i.Z,
                              null,
                              r.createElement(a.Z, { description: x }),
                              r.createElement(o.Z, { text: D }),
                              r.createElement(g.Z, null, A),
                              n[0] ? this._renderSession(n[0], !1) : null,
                              r.createElement(c.Z, null),
                              r.createElement(o.Z, { text: T }),
                              r.createElement(g.Z, null, I),
                              r.createElement(g.Z, null, r.createElement(p().I18NFormatMessage, { $i18n: "i34eeb37", infoText: t > 1 ? U({ num: t - 1 }) : H }, r.createElement(l.ZP, { link: z, withInteractiveStyling: !1 }, p().e186a3d6({ learnMoreLabel: P })))),
                              r.createElement(m.Z, { align: "left", confirmationSheetConfirmButtonLabel: L, confirmationSheetConfirmButtonType: "primary", confirmationSheetHeadline: F, confirmationSheetText: $, label: B, onConfirmationSheetConfirm: this._handleLogOutAll }),
                              s.map((e, n) => this._renderSession(e, t - 1 === n)),
                          )
                        : null;
                }
            }
            N.defaultProps = { sessions: [] };
            const O = k(N);
        },
        721617: (e, t, n) => {
            n.r(t), n.d(t, { SpacesSettingsScreen: () => b, default: () => _ });
            var r = n(202784),
                i = n(943401),
                s = n(954110),
                a = n(674132),
                o = n.n(a),
                c = n(652904),
                l = n(725405),
                d = n(264922),
                p = n(668214),
                u = n(38562);
            const m = (0, p.Z)()
                .propsFromState(() => ({ sharingAudiospacesListeningDataWithFollowersEnabled: u.gF }))
                .propsFromActions(() => ({ updateSharingAudiospacesListeningDataWithFollowersSetting: u.Yl }))
                .withAnalytics({ page: "settings" });
            var h = n(280010);
            const f = { page: "settings" };
            function b(e) {
                const { location: t, sharingAudiospacesListeningDataWithFollowersEnabled: n, updateSharingAudiospacesListeningDataWithFollowersSetting: a } = e,
                    o = (0, l.Z)();
                return r.createElement(
                    c.Z,
                    null,
                    r.createElement(
                        d.Z,
                        { location: t, screenType: "secondaryDetail", title: g.screen.title },
                        r.createElement(i.Z, { description: g.screen.description }),
                        r.createElement(s.Z, {
                            checked: n,
                            helpText: g.audiospaceListeningTransparency.help,
                            label: g.audiospaceListeningTransparency.label,
                            learnMoreLink: h.n.help,
                            name: "ext_sharing_audiospaces_listening_data_with_followers",
                            onChange: (e, t) => {
                                a(t), o.scribe({ ...f, section: "privacy", element: "audiospaces_sharing_listening_data_with_followers_setting", action: t ? "enable" : "disable" });
                            },
                            type: "switch",
                        }),
                    ),
                );
            }
            const g = { screen: { title: o().ded416b0, description: o().fe37f854 }, audiospaceListeningTransparency: { label: o().j3d2cfc4, help: o().d9588ae6 } },
                _ = m(b);
        },
        77996: (e, t, n) => {
            n.r(t), n.d(t, { UndoTweetScreen: () => L, default: () => R });
            var r = n(202784),
                i = n(325686),
                s = n(943401),
                a = n(954110),
                o = n(449479),
                c = n(392237),
                l = n(674132),
                d = n.n(l),
                p = n(290402),
                u = n(443781),
                m = n(652904),
                h = n(24546),
                f = n(466441),
                b = n(264922),
                g = n(668214),
                _ = n(38562),
                E = n(936572),
                y = n(215929);
            const S = (0, g.Z)()
                .propsFromState(() => ({ undoTweetSettings: E.zD, userClaimsFetchStatus: y.uD }))
                .propsFromActions(() => ({ updateSettings: _.VP }))
                .withAnalytics({ page: "settings", section: "subscriptions" });
            var Z = n(264119);
            const w = d().fce877d6,
                v = d().dcfc6540,
                k = d().jdceda60,
                C = d().j45978a8,
                D = d().be077e8c,
                T = d().f3429f2c,
                x = d().i9028824,
                A = d().i647ba8a,
                I = d().d195528e;
            function L({ analytics: e, undoTweetSettings: t, updateSettings: n, userClaimsFetchStatus: c }) {
                const { durationSecs: l, original: g, poll: _, quote: E, reply: y, thread: S } = t,
                    { history: L, location: R, match: B } = (0, Z.Z)(),
                    { userClaims: F } = r.useContext(u.rC),
                    U = (l || h.Qz).toString(),
                    H = F.isTrueAndEnabled("subscriptions_feature_1003"),
                    $ = d().i3b7a017,
                    z = [5, 10, 20, 30, 60].map((e) => ({ label: $(e), value: e.toString() }));
                function j(e, t, r = !1) {
                    if (!e?.undoPreview) return;
                    const { undoPreview: i } = e;
                    n({ undoPreview: i });
                }
                function N(n, r) {
                    if ("period" === n) {
                        const n = Number(r);
                        return j({ undoPreview: { ...t, durationSecs: n } }), void e.scribe({ component: "undo_send", element: "undo_period", action: "select", data: { subscription_details: { undo_period: n } } });
                    }
                    j({ undoPreview: { ...t, [n]: !t[n] } });
                }
                return r.createElement(p.Z, { "aria-label": x, fetchStatus: c, render: () => (H ? r.createElement(m.Z, null, r.createElement(b.Z, { location: R, title: w }, r.createElement(s.Z, { description: I }), r.createElement(a.Z, { checked: void 0 !== g && g, label: v, name: "original", onChange: N }), r.createElement(a.Z, { checked: void 0 !== y && y, label: k, name: "reply", onChange: N }), r.createElement(a.Z, { checked: void 0 !== _ && _, label: T, name: "poll", onChange: N }), r.createElement(a.Z, { checked: void 0 !== E && E, label: C, name: "quote", onChange: N }), r.createElement(a.Z, { checked: void 0 !== S && S, label: D, name: "thread", onChange: N }), r.createElement(i.Z, { style: P.radioGroup }, r.createElement(o.Z, { label: A, name: "period", onChange: N, options: z, value: U })))) : r.createElement(f.default, { history: L, location: R, match: B })) });
            }
            const P = c.default.create((e) => ({ radioGroup: { padding: e.spaces.space16 } })),
                R = S(L);
        },
        264119: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(107267);
            function i() {
                return { location: (0, r.useLocation)(), match: (0, r.useRouteMatch)(), history: (0, r.useHistory)() };
            }
        },
        281927: (e, t, n) => {
            n.r(t), n.d(t, { YourTweets: () => k, default: () => C });
            var r = n(202784),
                i = n(943401),
                s = n(954110),
                a = n(688715),
                o = n(779610),
                c = n(674132),
                l = n.n(c),
                d = n(652904),
                p = n(71620),
                u = n(293115),
                m = n(725405),
                h = n(264922),
                f = n(668214),
                b = n(38562);
            const g = (0, f.Z)()
                    .propsFromState(() => ({ settings: b.l4 }))
                    .adjustStateProps(({ settings: e }) => ({ nsfwUserEnabled: e.nsfw_user, nsfwAdminEnabled: e.nsfw_admin }))
                    .propsFromActions(() => ({ updateSettings: b.VP })),
                _ = l().c6f67e32,
                E = l().d0484606,
                y = l().a61ed23a,
                S = l().ae27c454,
                Z = l().fcb6a5b8,
                w = "YOUR_TWEETS_SCREEN",
                v = { page: "settings", section: "your_tweets" };
            function k(e) {
                const { location: t, nsfwAdminEnabled: n, nsfwUserEnabled: c, updateSettings: l } = e,
                    f = (0, m.Z)(),
                    b = (0, p.n7)(w);
                return r.createElement(
                    u.nO,
                    { namespace: v },
                    r.createElement(
                        d.Z,
                        null,
                        r.createElement(
                            h.Z,
                            { location: t, screenType: "secondaryDetail", title: _ },
                            r.createElement(i.Z, { description: E }),
                            r.createElement(s.Z, {
                                checked: c,
                                disabled: n,
                                helpText: S,
                                label: y,
                                learnMoreLink: (0, a.ju)("https://help.x.com/rules-and-policies/media-policy"),
                                name: "nsfw_user",
                                onChange: function (e, t) {
                                    f.scribe({ ...v, element: "nsfw_user", action: t ? "enable" : "disable" }), l({ [e]: t }).catch(b({ showToast: !0 }));
                                },
                            }),
                            r.createElement(o.Z, { label: Z, link: "/settings/location" }),
                        ),
                    ),
                );
            }
            const C = g(k);
        },
        264922: (e, t, n) => {
            n.d(t, { Z: () => S });
            var r = n(202784),
                i = n(108362),
                s = n(420412),
                a = n(154003),
                o = n(392237),
                c = n(674132),
                l = n.n(c),
                d = n(290402),
                p = n(253493),
                u = n(71620),
                m = n(668214),
                h = n(38562),
                f = n(919022);
            const b = (0, m.Z)()
                    .propsFromState(() => ({ fetchStatus: h.UD, viewerUser: f.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: h.Sb, createLocalApiErrorHandler: (0, u.zr)("SETTINGS_LOADER") })),
                g = "settingsDetailSave",
                _ = l().i2209530;
            class E extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return r.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: o, submitType: c, withMarginBottom: l } = this.props;
                            return r.createElement(i.Z, { style: [y.contentRoot, l && y.withMarginBottom] }, e, t ? r.createElement(r.Fragment, null, r.createElement(s.Z, null), r.createElement(i.Z, { style: y.buttonContainer }, r.createElement(a.ZP, { disabled: n, onPress: t, style: y.button, testID: g, type: c }, o))) : null);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                getBackLocation() {
                    const { location: e, viewerUser: t } = this.props,
                        n = t ? "/settings" : "/settings/account/personalization";
                    return e && e.pathname === n ? "/" : n;
                }
                render() {
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: i, title: s, viewerUser: a, withBottomBorder: o } = this.props,
                        c = this.getBackLocation(),
                        l = a ? `@${a.screen_name}` : void 0;
                    return r.createElement(p.Z, { backLocation: c, onBackClick: e, rightControl: t, screenType: n, secondaryBar: i, showSubtitleOnWideDetail: !1, subtitle: l, title: s, withBottomBorder: o }, a ? this._renderWithFetchSettings() : this._render());
                }
            }
            E.defaultProps = { submitLabel: _, submitType: "brandFilled", withMarginBottom: !0 };
            const y = o.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${o.default.iPhoneOffsetBottom})` } })),
                S = b(E);
        },
        720816: (e, t, n) => {
            n.d(t, { $w: () => l, D1: () => o, Jz: () => i, Km: () => d, LI: () => r, NW: () => a, o5: () => c, wU: () => s });
            const r = "/settings/monetization",
                i = "/settings/superfollows",
                s = Object.freeze({ root: `${i}/application`, eligibility: `${i}/application/eligibility`, pricing: `${i}/application/pricing`, completeProfile: `${i}/application/complete_profile`, submit: `${i}/application/submit`, submitted: `${i}/application/submitted`, waitlisted: `${i}/application/waitlisted`, rejected: `${i}/application/rejected` }),
                a = Object.freeze({ root: `${i}/onboarding`, perksIntro: `${i}/onboarding/perks_intro`, perksDescription: `${i}/onboarding/perks_description`, perksBadges: `${i}/onboarding/perks_badges`, perksConfirm: `${i}/onboarding/perks_confirm`, pricing: `${i}/onboarding/pricing`, pricingConfirm: `${i}/onboarding/pricing_confirm`, stripeSetup: `${i}/onboarding/stripe_setup`, stripePending: `${i}/onboarding/stripe_pending`, stripeCompleted: `${i}/onboarding/stripe_completed` }),
                o = Object.freeze({ root: `${i}/management`, perksIntro: `${i}/management/perks_intro`, perksDescription: `${i}/management/perks_description`, perksConfirm: `${i}/management/perks_confirm`, perksPricing: `${i}/management/perks_pricing` }),
                c = `${i}/perks_intro_examples`,
                l = `${i}/perks_description_examples`,
                d = `${i}/perks_preview`;
        },
        85034: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(283846),
                i = (n(585488), n(712696)),
                s = n.n(i);
            const a = r.Z,
                o = (e, t = !1) => {
                    const n = s()(a, { current_product_sku: e, find_target_product_sku: t }).viewer.user_results.result.web_tier_switch_progress,
                        r = "WebPaymentsTierSwitchProgress" === n?.__typename ? n.status : "NotStarted",
                        i = "WebPaymentsTierSwitchProgress" === n?.__typename ? n.target_product_sku : null;
                    return [r, "WebPaymentsGetTierSwitchProgressError" === n?.__typename ? n.message : void 0, i];
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-1bcddef9.5b06341a.js.map
