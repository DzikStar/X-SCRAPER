"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsTransparency"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var r = n(202784),
                a = n(614983),
                s = n.n(a),
                o = n(325686),
                i = n(370006),
                c = n(786998),
                l = n(929028),
                d = n(386802);
            function h(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            s()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: a, hideBackButton: s, isFullWidth: o, isLarge: l, leftControl: d, middleControl: p, position: m, rightControl: u, secondaryBar: g, style: f, subtitle: _, title: E, titleDomId: Z, titleIconCell: y, titleIconCellSize: b, withBackground: S, withWideContainer: C } = this.props,
                        { isModal: w } = this.context,
                        x = s ? d : r.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        D = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!S, w, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(c.Z, { centerTitle: t, centeredLogo: n, isFullWidth: o, isLarge: l, leftControl: x, middleControl: p, position: h(m, w, a), rightControl: u, style: f, subtitle: _, title: E, titleDomId: Z, titleIconCell: y, titleIconCellSize: b, withBackground: D, withWideContainer: C }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = l.Z.getBackgroundStyles();
                    return t ? r.createElement(o.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                a = n(242454),
                s = n(190286);
            class o extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: o, confirmationSheetHeadline: i, confirmationSheetText: c, label: l } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(a.Z, { align: e, color: t, label: l, onPress: this._handleClick }), this.state.showConfirmation ? r.createElement(s.Z, { confirmButtonLabel: n, confirmButtonType: o, headline: i, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: c }) : null);
                }
            }
            o.defaultProps = { color: "red500", align: "center" };
        },
        290402: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(807896),
                a = n(202784),
                s = n(182056),
                o = n(879113),
                i = n(392237),
                c = n(674132),
                l = n.n(c),
                d = n(968478);
            const h = l().aa6e3300,
                p = ({ retryMessage: e, ...t }, n) => {
                    const i = s.Z.isOnline();
                    return a.createElement(o.Z, (0, r.Z)({}, t, { icon: i ? void 0 : a.createElement(d.default, { style: m.icon }), retryMessage: i ? e : h }));
                },
                m = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                u = a.forwardRef(p);
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(807896),
                a = n(202784),
                s = n(107267),
                o = n(403556),
                i = n(791632);
            const c = (e) => {
                    const t = (0, s.useHistory)();
                    return a.createElement(o.Z, (0, r.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                l = a.memo(c);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                a = n(500002),
                s = n(668214),
                o = n(997174),
                i = n(118823);
            const c = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class l extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: r },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: s, search: o },
                            locationKey: i,
                        } = e;
                    let c = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (c = !0));
                    const l = a || i;
                    ((l && a !== i) || (!l && n !== s) || r !== o || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, a.ZP)(c(l));
        },
        159127: (e, t, n) => {
            n.r(t), n.d(t, { AccountActivityScreen: () => u, default: () => g });
            var r = n(202784),
                a = n(779610),
                s = n(674132),
                o = n.n(s),
                i = n(652904),
                c = n(293115),
                l = n(264922);
            const d = o().j9d10268,
                h = o().a5f32aa2,
                p = o().daef29b8,
                m = { page: "settings", section: "your_twitter_data", component: "account_activity" },
                u = ({ location: e }) => r.createElement(c.nO, { namespace: m }, r.createElement(i.Z, null, r.createElement(l.Z, { location: e, title: d }, r.createElement(a.Z, { label: h, link: "/settings/blocked/all" }), r.createElement(a.Z, { label: p, link: "/settings/muted/all" })))),
                g = u;
        },
        690423: (e, t, n) => {
            n.r(t), n.d(t, { AccountHistoryScreen: () => y, default: () => b });
            var r = n(202784),
                a = n(779610),
                s = n(674132),
                o = n.n(s),
                i = n(443781),
                c = n(652904),
                l = n(264922),
                d = n(71620),
                h = n(668214),
                p = n(704279),
                m = n(205253);
            const u = (0, h.Z)()
                    .propsFromState(() => ({ fetchDataStatus: m.qu, personalizationData: m.yA }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN"), fetchData: m.nJ, fetchPreferences: m.CP, scribePageImpression: p.L }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "account_history" }),
                g = o().i6b3f59a,
                f = o().b523ecc6,
                _ = o().d9cbe351,
                E = o().de90b04a,
                Z = o().cbd2ef59;
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleFetchData = () => {
                            const { createLocalApiErrorHandler: e } = this.props;
                            this.props.fetchData().catch(e());
                        });
                }
                componentDidMount() {
                    (this.isLoggedIn = !!this.context.viewerUserId), this._handleFetchData();
                }
                render() {
                    const { location: e, personalizationData: t } = this.props,
                        n = t.location_history ? t.location_history.length : 0,
                        s = t.login_history ? t.login_history.length : 0;
                    return r.createElement(c.Z, null, r.createElement(l.Z, { location: e, title: g }, r.createElement(a.Z, { description: s > 0 ? _({ count: s }) : null, label: f, link: "/settings/your_twitter_data/login_history" }), r.createElement(a.Z, { description: n > 0 ? Z({ count: n }) : null, label: E, link: "/settings/your_twitter_data/locations" })));
                }
            }
            y.contextType = i.rC;
            const b = u(y);
        },
        747944: (e, t, n) => {
            n.r(t), n.d(t, { AdsScreen: () => y, default: () => b });
            var r = n(202784),
                a = n(779610),
                s = n(674132),
                o = n.n(s),
                i = n(443781),
                c = n(652904),
                l = n(264922),
                d = n(71620),
                h = n(668214),
                p = n(205253);
            const m = (0, h.Z)()
                    .propsFromState(() => ({ fetchDataStatus: p.qu, personalizationData: p.yA }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN"), fetchData: p.nJ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "ads_data" }),
                u = o().gbde3534,
                g = o().a54826c6,
                f = o().a4441bb8,
                _ = o().e1c6b2d6,
                E = o().ed19d10d,
                Z = o().f00d0d03;
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.render = () => {
                            const { location: e, personalizationData: t } = this.props,
                                n = t.tailored_audience_summary ? t.tailored_audience_summary.num_advertisers : 0,
                                s = t.tailored_audience_summary ? t.tailored_audience_summary.num_audiences : 0;
                            return r.createElement(c.Z, null, r.createElement(l.Z, { location: e, title: u }, r.createElement(a.Z, { description: t.tailored_audience_summary ? Z({ count: t.num_twitter_interests }) : null, label: f, link: "/settings/your_twitter_data/twitter_interests" }), r.createElement(a.Z, { description: t.tailored_audience_summary ? Z({ count: t.num_partner_interests }) : null, label: g, link: "/settings/your_twitter_data/partner_interests" }), r.createElement(a.Z, { description: t.tailored_audience_summary ? E({ audienceCount: s, advertiserCount: n }) : null, label: _, link: "/settings/your_twitter_data/audiences" })));
                        }),
                        (this._handleFetchData = () => {
                            const { createLocalApiErrorHandler: e } = this.props;
                            this.props.fetchData().catch(e());
                        });
                }
                UNSAFE_componentWillMount() {
                    (this.isLoggedIn = !!this.context.viewerUserId), this._handleFetchData();
                }
            }
            y.contextType = i.rC;
            const b = m(y);
        },
        340090: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardAgeScreen: () => I, default: () => T });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(976145),
                i = n(954110),
                c = n(674132),
                l = n.n(c),
                d = n(443781),
                h = n(652904),
                p = n(829824),
                m = n(609848),
                u = n(264922),
                g = n(267966),
                f = n(342453),
                _ = n(71620),
                E = n(668214),
                Z = n(205253),
                y = n(312771);
            const b = (e, t) => (0, y.h1)(Z.qu(e), Z.I3(e)),
                S = (0, E.Z)()
                    .propsFromState(() => ({ ages: Z.LJ, fetchStatus: b, personalizationPreferences: Z.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_AGE_SCREEN"), fetchData: Z.nJ, fetchPreferences: Z.CP, updateSettings: Z.VP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "age" }),
                C = l().bf96fda4,
                w = r.createElement(l().I18NFormatMessage, { $i18n: "i1e24825" }, r.createElement(s.ZP, { link: "https://help.x.com/safety-and-security/birthday-visibility-settings" }, l().ea522535)),
                x = r.createElement(l().I18NFormatMessage, { $i18n: "a200fc71" }, r.createElement(s.ZP, { link: "/settings/profile" }, l().hf5ca8f8)),
                D = l().fe1fc83e,
                A = l().bf9c74d0,
                P = l().e9f1fbcc,
                k = l().cf0daa24;
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._combinedFetches = () => {
                            const { fetchData: e, fetchPreferences: t } = this.props;
                            return Promise.all([e(), t()]);
                        }),
                        (this._render = () => r.createElement("div", null, this._renderAges(), this.isLoggedIn ? r.createElement(a.Z, { style: f.Z.infoItem }, r.createElement(s.ZP, { color: "gray700" }, x)) : this._renderUseAge())),
                        (this._renderAges = () => {
                            const { ages: e } = this.props,
                                t = (0, o.Z)(
                                    e.map((e) => ("string" == typeof e ? e : e.display)),
                                    !0,
                                );
                            return t ? r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(s.ZP, null, t)) : this._renderMessage(P, k);
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: [g.Z.calloutTextBlock, g.Z.bottomBorder] }, r.createElement(s.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(s.ZP, { align: "center", color: "gray700", style: f.Z.helpText }, t) : null)),
                        (this._renderUseAge = () => {
                            const { personalizationPreferences: e } = this.props,
                                t = e && e.age_preferences && e.age_preferences.use_age_for_personalization;
                            return r.createElement(i.Z, { checked: !t, key: "use_age_for_personalization", label: A, name: "use_age_for_personalization", onChange: this._handleBooleanChanged });
                        }),
                        (this._handleBooleanChanged = (e, t) => {
                            const { createLocalApiErrorHandler: n, updateSettings: r } = this.props;
                            r({ [e]: !t }).catch(n());
                        });
                }
                componentDidMount() {
                    this.isLoggedIn = !!this.context.viewerUserId;
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(h.Z, null, r.createElement(u.Z, { location: t, title: C }, r.createElement(p.Z, null, r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, this.isLoggedIn ? w : D)), r.createElement(m.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            I.contextType = d.rC;
            const T = S(I);
        },
        546927: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardDevicesScreen: () => $, default: () => q });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(844685),
                c = n(420412),
                l = n(674132),
                d = n.n(l),
                h = n(443781),
                p = n(652904),
                m = n(829824),
                u = n(609848),
                g = n(264922),
                f = n(267966),
                _ = n(342453),
                E = n(71620),
                Z = n(668214),
                y = n(205253),
                b = n(312771);
            const S = (e, t) => (0, b.h1)(y.qu(e), y.I3(e)),
                C = (0, Z.Z)()
                    .propsFromState(() => ({ data: y.yA, fetchStatus: S, settings: y.kQ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_DEVICES_SCREEN"), fetchData: y.nJ, fetchPreferences: y.CP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "devices" }),
                w = "linkedBrowsersView",
                x = "linkedMobileDevicesView",
                D = "linkedEmailAddressesView",
                A = "helpText",
                P = d().hc36dbba,
                k = d().j4fa776e,
                I = d().i7acdb36,
                T = d().c112dfc8,
                v = d().jd8607ba,
                B = d().ea4f6c9e,
                L = d().d750b93f,
                R = d().a9783602,
                F = d().j043aa31,
                N = d().ae415fd2,
                z = "/settings/off_twitter_activity",
                H = d().a90be7b4,
                M = d().ba2e82a1,
                G = (0, s.ju)("https://support.x.com/articles/20175257"),
                U = [],
                $ = (e) => {
                    const t = r.useContext(h.rC),
                        n = t.viewerUserId,
                        { data: s, fetchData: l, fetchPreferences: E, fetchStatus: Z, location: y, settings: b } = e;
                    r.useEffect(() => {
                        E();
                    }, [E]);
                    const { known_devices: S = {} } = s,
                        { allowDeviceAccess: C } = b,
                        { featureSwitches: $ } = r.useContext(h.rC),
                        q = (e, t, n = !1) =>
                            e.length
                                ? r.createElement(
                                      a.Z,
                                      null,
                                      r.createElement(a.Z, null, r.createElement(i.Z, { text: t })),
                                      e.map((t, s) => {
                                          const i = e && e.length - 1 === s;
                                          return r.createElement(a.Z, { key: `device-'${s}`, style: [_.Z.infoItem, i && !n && _.Z.bottomBorder] }, r.createElement(o.ZP, null, t.name), r.createElement(o.ZP, { color: "gray700", style: _.Z.helpText }, v, " ", M(new Date(t.created_at))));
                                      }),
                                  )
                                : null;
                    return r.createElement(
                        p.Z,
                        null,
                        r.createElement(
                            g.Z,
                            { location: y, title: P },
                            r.createElement(
                                m.Z,
                                null,
                                r.createElement(u.Z, {
                                    fetch: () => Promise.all([l(), E()]),
                                    fetchStatus: Z,
                                    render: () => {
                                        const e = S.phone || U,
                                            i = S.tablet || U,
                                            l = S.desktop || U,
                                            h = e.length > 0 && i.length > 0 && l.length > 0,
                                            p = { supportLink: r.createElement(o.ZP, { link: G }) };
                                        return r.createElement(
                                            a.Z,
                                            null,
                                            !n && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [f.Z.infoText, f.Z.bottomBorder] }, r.createElement(d().I18NFormatMessage, { $i18n: "cbcb2413" }, r.cloneElement(p.supportLink, null, d().df3e137b))),
                                            n && h && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [f.Z.infoText, f.Z.bottomBorder] }, r.createElement(d().I18NFormatMessage, { $i18n: "e21b623d" }, r.cloneElement(p.supportLink, null, d().d1597ccb))),
                                            q(e, k, 0 === i.length && 0 === l.length),
                                            q(i, I, 0 === l.length),
                                            q(l, T, !0),
                                            r.createElement(c.Z, null),
                                            t.viewerUserId && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [f.Z.infoText, C ? f.Z.bottomBorder : null] }, r.createElement(d().I18NFormatMessage, { $i18n: "i4d58f43" }, r.cloneElement(p.supportLink, null, d().c1b03a07))),
                                            C
                                                ? (() => {
                                                      const e = { offTwitterActivitySettingLink: r.createElement(o.ZP, { link: z }) },
                                                          t = r.createElement(o.ZP, { color: "gray700", style: [_.Z.helpText, _.Z.helpTextExtraPadded] }, $.isTrue("ucpd_enabled") ? r.createElement(d().I18NFormatMessage, { $i18n: "b78e30fd", testID: A }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().f0f72665)) : r.createElement(d().I18NFormatMessage, { $i18n: "bb593021", testID: A }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().d33b4e5b)));
                                                      return r.createElement(a.Z, null, s.associated_devices ? r.createElement(a.Z, { style: [_.Z.infoItem, _.Z.bottomBorder], testID: w }, r.createElement(o.ZP, { weight: "bold" }, B), r.createElement(o.ZP, { color: "gray700", style: _.Z.helpText }, L({ count: s.associated_devices.num_browsers })), t) : null, s.associated_devices ? r.createElement(a.Z, { style: [_.Z.infoItem, _.Z.bottomBorder], testID: x }, r.createElement(o.ZP, { weight: "bold" }, R), r.createElement(o.ZP, { color: "gray700", style: _.Z.helpText }, F({ count: s.associated_devices.num_devices })), t) : null, r.createElement(a.Z, { style: _.Z.infoItem, testID: D }, r.createElement(o.ZP, { weight: "bold" }, H), r.createElement(o.ZP, { color: "gray700", style: [_.Z.helpText, _.Z.helpTextExtraPadded] }, r.createElement(d().I18NFormatMessage, { $i18n: "h60f45ef", testID: A }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().c4668d4f)))));
                                                  })()
                                                : r.createElement(a.Z, { style: _.Z.featureDisabledCallout }, r.createElement(o.ZP, { align: "center", size: "headline1", style: _.Z.featureDisabledTitle }, N), r.createElement(o.ZP, { align: "center", color: "gray700", style: _.Z.helpText }, $.isTrue("ucpd_enabled") ? r.createElement(d().I18NFormatMessage, { $i18n: "h0085c59" }, r.createElement(o.ZP, { link: z }, d().adaafb3f)) : r.createElement(d().I18NFormatMessage, { $i18n: "f27cc8af" }, r.createElement(o.ZP, { link: z }, d().c0f6f911)))),
                                        );
                                    },
                                }),
                            ),
                        ),
                    );
                },
                q = C($);
        },
        154007: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardGenderScreen: () => M, default: () => G });
            var r = n(807896),
                a = n(202784),
                s = n(325686),
                o = n(731708),
                i = n(101890),
                c = n(855488),
                l = n(954110),
                d = n(674132),
                h = n.n(d),
                p = n(443781),
                m = n(652904),
                u = n(312771),
                g = n(829824),
                f = n(609848),
                _ = n(264922),
                E = n(267966),
                Z = n(342453),
                y = n(71620),
                b = n(668214),
                S = n(205253),
                C = n(601576);
            const w = (e, t) => (0, u.h1)(S.qu(e), S.I3(e)),
                x = (0, b.Z)()
                    .propsFromState(() => ({ fetchStatus: w, gender: S.VU, personalizationPreferences: S.LP }))
                    .propsFromActions(() => ({ addToast: C.fz, createLocalApiErrorHandler: (0, y.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_GENDER_SCREEN"), fetchData: S.nJ, fetchPreferences: S.CP, updateGender: S.Bm, updateSettings: S.VP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "gender" }),
                D = h().a8d0108e,
                A = "custom",
                P = h().a8d0108e,
                k = h().fbf0e61e,
                I = h().de323650,
                T = h().b6ab31be,
                v = h().b4568a3a,
                B = h().c0be743e,
                L = h().i2209530,
                R = [
                    { label: I, value: "female" },
                    { label: T, value: "male" },
                    { label: v, value: A },
                ],
                F = h().c5abae66,
                N = h().cdb0d3e6,
                z = h().e9f1fbcc,
                H = h().cf0daa24;
            class M extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.combinedFetches = () => {
                            const { fetchData: e, fetchPreferences: t } = this.props;
                            return Promise.all([e(), t()]);
                        }),
                        (this._render = () => a.createElement("div", null, a.createElement(s.Z, { style: [Z.Z.infoItem, Z.Z.bottomBorder] }, a.createElement(o.ZP, { color: "gray700" }, this.isLoggedIn ? k : F)), this.isLoggedIn ? this._renderGenderSelector() : this._renderLoggedOut())),
                        (this._renderMessage = (e, t) => a.createElement(s.Z, { style: E.Z.calloutTextBlock }, a.createElement(o.ZP, { align: "center", size: "headline1" }, e), t ? a.createElement(o.ZP, { align: "center", color: "gray700", style: Z.Z.helpText }, t) : null)),
                        (this._handleItemChanged = (e, t) => {
                            const n = t === A;
                            this.setState({ self_identify: n, gender: n ? null : t });
                        }),
                        (this._handleCustomGenderUpdate = (e) => {
                            const t = e.target.value;
                            this.setState({ self_identify: !0, gender: t });
                        }),
                        (this._handleSaveGender = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, updateGender: n } = this.props,
                                r = this.state.self_identify ? A : this.state.gender || A;
                            this._scribeAction(),
                                n({ type: r, value: this.state.gender || "" })
                                    .then(() => e({ text: B }), t({ showToast: !0 }))
                                    .then(this._handleCancel);
                        }),
                        (this._handleCancel = () => {
                            const { history: e } = this.props;
                            e.goBack({ backLocation: "/settings/your_twitter_data/account" });
                        }),
                        (this._handleBooleanChanged = (e, t) => {
                            const { createLocalApiErrorHandler: n, updateSettings: r } = this.props;
                            r({ [e]: !t }).catch(n());
                        }),
                        (this._scribeAction = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "edit" });
                        }),
                        (this.state = { self_identify: this.props.gender.type === A, gender: this.props.gender.value });
                }
                UNSAFE_componentWillMount() {
                    (this.isLoggedIn = !!this.context.viewerUserId), this.props.fetchPreferences();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props,
                        n = e === u.ZP.LOADED && this.isLoggedIn ? { onSubmit: this._handleSaveGender, submitDisabled: !this.isGenderValid, submitLabel: L } : void 0;
                    return a.createElement(m.Z, null, a.createElement(_.Z, (0, r.Z)({ location: t, title: P }, n), a.createElement(g.Z, null, a.createElement(f.Z, { fetch: this.combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
                _renderGenderSelector() {
                    const { gender: e } = this.props;
                    return a.createElement(s.Z, null, a.createElement(i.Z, { name: "gender", onChange: this._handleItemChanged, options: R, value: this.selectedGender }), this.selectedGender === A ? a.createElement(c.Z, { defaultValue: e.value && e.type === A ? e.value : "", label: D, maxLength: 30, name: "genderOther", onChange: this._handleCustomGenderUpdate, type: "text" }) : null);
                }
                _renderLoggedOut() {
                    const { personalizationPreferences: e } = this.props,
                        t = e.gender_preferences && e.gender_preferences.use_gender_for_personalization;
                    return a.createElement(s.Z, null, this.selectedGender ? a.createElement(s.Z, { style: [Z.Z.infoItem, Z.Z.bottomBorder] }, a.createElement(o.ZP, null, this.props.gender.value)) : this._renderMessage(z, H), a.createElement(l.Z, { checked: !t, key: "use_gender_for_personalization", label: N, name: "use_gender_for_personalization", onChange: this._handleBooleanChanged }));
                }
                get selectedGender() {
                    const { gender: e } = this.props;
                    return this.state.self_identify ? A : this.state.gender ? this.state.gender : e && e.type;
                }
                get isGenderValid() {
                    const { gender: e } = this.props;
                    return this.state.gender && this.state.gender !== e.value;
                }
            }
            M.contextType = p.rC;
            const G = x(M);
        },
        349154: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLanguageScreen: () => x, default: () => D });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(954110),
                i = n(674132),
                c = n.n(i),
                l = n(652904),
                d = n(829824),
                h = n(609848),
                p = n(264922),
                m = n(267966),
                u = n(342453),
                g = n(71620),
                f = n(668214),
                _ = n(205253),
                E = n(312771);
            const Z = (0, f.Z)()
                    .propsFromState(() => ({ data: _.yA, dataFetchStatus: _.qu, preferences: _.LP, preferencesFetchStatus: _.I3 }))
                    .adjustStateProps(({ dataFetchStatus: e, preferencesFetchStatus: t, ...n }) => ({ ...n, fetchStatus: (0, E.h1)(e, t) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_LANGUAGE_SCREEN"), fetchData: _.nJ, fetchPreferences: _.CP, updateLanguage: _.BF }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "language" }),
                y = c().a03dacaa,
                b = c().b056d9dc,
                S = c().h68bc23c,
                C = c().e9f1fbcc,
                w = c().cf0daa24;
            class x extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._combinedFetches = () => {
                            const { fetchData: e, fetchPreferences: t } = this.props;
                            return Promise.all([e(), t()]);
                        }),
                        (this._render = () => {
                            const {
                                    data: { languages: e = [] },
                                    preferences: t,
                                } = this.props,
                                n = e[0],
                                i = e.length > 1 ? e.slice(1) : [],
                                c = t.language_preferences && t.language_preferences.disabled_languages;
                            return r.createElement(
                                "div",
                                null,
                                r.createElement(a.Z, { style: [u.Z.infoItem, u.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, b)),
                                n ? r.createElement(a.Z, { style: [u.Z.infoItem, i.length > 0 && u.Z.bottomBorder] }, r.createElement(s.ZP, null, n.display)) : r.createElement(a.Z, { style: i.length > 0 && u.Z.bottomBorder }, this._renderMessage(C, w)),
                                i.length > 0 ? r.createElement(a.Z, { style: [u.Z.infoItem, u.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, S)) : null,
                                i.map((e, t) => r.createElement(o.Z, { checked: !c || -1 === c.indexOf(e.key), key: e.key, label: e.display, name: e.key, onChange: this._handleUpdateLanguage })),
                            );
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: m.Z.calloutTextBlock }, r.createElement(s.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(s.ZP, { align: "center", color: "gray700", style: u.Z.helpText }, t) : null)),
                        (this._handleUpdateLanguage = (e, t) => {
                            const { createLocalApiErrorHandler: n, updateLanguage: r } = this.props;
                            r(e, t).catch(n({ showToast: !0 })), this._scribeAction();
                        }),
                        (this._scribeAction = () => {
                            const { analytics: e } = this.props;
                            e.scribeAction("edit");
                        });
                }
                UNSAFE_componentWillMount() {
                    this.props.fetchPreferences();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(l.Z, null, r.createElement(p.Z, { location: t, title: y }, r.createElement(d.Z, null, r.createElement(h.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            const D = Z(x);
        },
        821853: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLocationsScreen: () => k, default: () => I });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(909377),
                i = n(674132),
                c = n.n(i),
                l = n(264171),
                d = n(947135),
                h = n(652904),
                p = n(609848),
                m = n(264922),
                u = n(267966),
                g = n(342453),
                f = n(71620),
                _ = n(668214),
                E = n(205253),
                Z = n(601576);
            const y = (0, _.Z)()
                    .propsFromState(() => ({ fetchStatus: E.qu, personalizationData: E.yA, settings: E.kQ }))
                    .propsFromActions(() => ({ addToast: Z.fz, clearLocations: E.wG, createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_LOCATION_SCREEN"), fetchData: E.nJ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "locations" }),
                b = c().d9138166,
                S = c().j31a1aa0,
                C = c().e68b09b4,
                w = { headline: c().ddefdd1c, text: c().hea740ac, confirmButtonLabel: c().e68b09b4 },
                x = c().a26e0d52,
                D = c().ae415fd2,
                A = r.createElement(c().I18NFormatMessage, { $i18n: "a1fdeb45" }, r.createElement(s.ZP, { link: "/settings/location_information" }, c().b9d98dec)),
                P = c().he447966;
            class k extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleDeleteLocation = () => {
                            const { addToast: e, clearLocations: t, createLocalApiErrorHandler: n } = this.props;
                            this._scribeAction("clear"), t().then(() => e({ text: x }), n({ showToast: !0 }));
                        }),
                        (this._render = () => {
                            const { settings: e } = this.props,
                                t = e.allowLocationHistoryUse;
                            return r.createElement(h.Z, null, r.createElement("div", null, r.createElement(a.Z, { style: [g.Z.infoItem, g.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, S)), t ? this._renderLocations() : this._renderMessage(D, A)));
                        }),
                        (this._renderLocations = () => {
                            const { personalizationData: e } = this.props,
                                t = e.location_history;
                            return r.createElement(a.Z, null, t && t.map((e, t) => r.createElement(a.Z, { key: `loc-'${t}`, style: [g.Z.infoItem, g.Z.locationInfo, g.Z.bottomBorder] }, r.createElement(o.Z, { Icon: l.default, color: "neutral", size: "xLarge", style: g.Z.locationIcon }), r.createElement(s.ZP, null, e))), t && t.length ? r.createElement(d.Z, { confirmationSheetConfirmButtonLabel: w.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: w.headline, confirmationSheetText: w.text, label: C, onConfirmationSheetConfirm: this._handleDeleteLocation, withBottomBorder: !1 }) : this._renderMessage(P));
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: u.Z.calloutTextBlock }, r.createElement(s.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(s.ZP, { align: "center", color: "gray700", style: g.Z.helpText }, t) : null)),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ action: e });
                        });
                }
                render() {
                    const { fetchData: e, fetchStatus: t, location: n } = this.props;
                    return r.createElement(m.Z, { location: n, title: b }, r.createElement(p.Z, { fetch: e, fetchStatus: t, render: () => this._render(), titleHeader: b }));
                }
            }
            const I = y(k);
        },
        933015: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLoginHistoryScreen: () => C, default: () => w });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(943401),
                c = n(674132),
                l = n.n(c),
                d = n(652904),
                h = n(609848),
                p = n(264922),
                m = n(342453),
                u = n(71620),
                g = n(668214),
                f = n(205253);
            const _ = (0, g.Z)()
                    .propsFromState(() => ({ fetchDataStatus: f.qu, personalizationData: f.yA }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_LOGIN_HISTORY_SCREEN"), fetchData: f.nJ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "login_history" }),
                E = l().b523ecc6,
                Z = l().e27e4fce,
                y = l().d0a77c9b,
                b = (0, s.ju)("https://support.x.com/articles/20172679"),
                S = r.createElement(l().I18NFormatMessage, { $i18n: "hcb3ad67" }, r.createElement(o.ZP, { link: "/settings/connected_apps" }, l().ib55eb6b), r.createElement(o.ZP, { link: b }, l().e5a4a539));
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { personalizationData: e } = this.props,
                                t = e.login_history;
                            return r.createElement(r.Fragment, null, t && t.map((e, t) => r.createElement(a.Z, { key: `hist-'${t}`, style: [m.Z.infoItem, m.Z.bottomBorder] }, r.createElement(o.ZP, null, e.app_name), r.createElement(o.ZP, { color: "gray700", style: m.Z.helpText }, y(new Date(e.time))), r.createElement(o.ZP, { color: "gray700", style: m.Z.helpText }, e.ip, " (", e.country ? e.country : Z, ")"))));
                        });
                }
                render() {
                    const { fetchData: e, fetchDataStatus: t, location: n } = this.props;
                    return r.createElement(d.Z, null, r.createElement(p.Z, { location: n, title: E }, r.createElement(i.Z, { description: S }), r.createElement(h.Z, { fetch: e, fetchStatus: t, render: () => this._render() })));
                }
            }
            const w = _(C);
        },
        515321: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardPartnerInterestsScreen: () => A, default: () => P });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(954110),
                c = n(674132),
                l = n.n(c),
                d = n(290402),
                h = n(652904),
                p = n(829824),
                m = n(264922),
                u = n(267966),
                g = n(342453),
                f = n(71620),
                _ = n(668214),
                E = n(205253),
                Z = n(312771);
            const y = (e, t) => (0, Z.h1)(E.Tg(e), E.I3(e)),
                b = (0, _.Z)()
                    .propsFromState(() => ({ fetchStatus: y, interests: E.tC, preferences: E.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_PARTNER_INTERESTS_SCREEN"), fetchInterests: E.sH, fetchPreferences: E.CP, updateInterest: E.q_ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "partner_interests" }),
                S = l().a54826c6,
                C = l().gc8f2e14,
                w = l().e9f1fbcc,
                x = l().cf0daa24,
                D = (0, s.ju)("https://support.x.com/articles/20175258");
            class A extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const {
                                    interests: { partner_interests: e = [] },
                                    preferences: { interest_preferences: t = {} },
                                } = this.props,
                                n = t.disabled_partner_interests || [];
                            return r.createElement(
                                "div",
                                null,
                                r.createElement(a.Z, { style: [g.Z.infoItem, g.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, r.createElement(l().I18NFormatMessage, { $i18n: "adc26d49" }, r.createElement(o.ZP, { link: D }, l().e6dbe66b)))),
                                e.map((e) => r.createElement(i.Z, { checked: -1 === n.indexOf(e.id), key: e.id, label: e.display_name, name: e.id.toString(), onChange: this._handleUpdateInterest })),
                                0 === e.length ? this._renderMessage(w, x) : r.createElement(a.Z, { style: u.Z.calloutTextBlock }, r.createElement(o.ZP, { color: "gray700", style: g.Z.helpText }, C)),
                            );
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: u.Z.calloutTextBlock }, r.createElement(o.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(o.ZP, { align: "center", color: "gray700", style: g.Z.helpText }, t) : null)),
                        (this._handleFetchData = () => {
                            const { createLocalApiErrorHandler: e } = this.props;
                            this.props.fetchPreferences().catch(e()), this.props.fetchInterests().catch(e());
                        }),
                        (this._handleUpdateInterest = (e, t) => {
                            const { analytics: n, createLocalApiErrorHandler: r, updateInterest: a } = this.props;
                            n.scribeAction("edit"), a(e, t, "partner").catch(r({ showToast: !0 }));
                        });
                }
                componentDidMount() {
                    this._handleFetchData();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(h.Z, null, r.createElement(m.Z, { location: t, title: S }, r.createElement(p.Z, null, r.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetchData, render: this._render }))));
                }
            }
            const P = b(A);
        },
        546703: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardRequestDataScreen: () => A, default: () => P });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(688715),
                i = n(674132),
                c = n.n(i),
                l = n(290402),
                d = n(443781),
                h = n(652904),
                p = n(829824),
                m = n(264922),
                u = n(267966),
                g = n(342453),
                f = n(668214),
                _ = n(257166),
                E = n(205253),
                Z = n(601576);
            const y = (0, f.Z)()
                    .propsFromState(() => ({ deviceFetchStatus: _.selectFetchStatus, primaryEmail: _.selectFirstEmail }))
                    .propsFromActions(() => ({ addToast: Z.fz, createDataDownload: E.fm, fetchDevices: _.fetchDevices }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "request_data" }),
                b = c().d3310e49,
                S = c().ib03e8c8,
                C = c().abedd45c,
                w = c().abedd45c,
                x = c().g49741e8,
                D = c().dc370a0c;
            class A extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { primaryEmail: e } = this.props;
                            return r.createElement("div", null, r.createElement(a.Z, { style: [g.Z.infoItem, g.Z.bottomBorder] }, r.createElement(s.ZP, null, e ? b({ primaryEmail: e }) : S)), r.createElement(a.Z, { onClick: this._handleRequestDataClick, role: "button", style: [g.Z.cursor, u.Z.viewItem] }, r.createElement(s.ZP, { align: "center", color: "link" }, e ? w : x)));
                        }),
                        (this._handleRequestDataClick = () => {
                            const { addToast: e, createDataDownload: t, primaryEmail: n } = this.props;
                            n ? (this._scribeAction("email"), t().then(() => e({ text: D }))) : (this._scribeAction("download"), window.open((0, o.ju)("https://x.com/account/personalization/download_your_data.pdf"), "_blank"));
                        }),
                        (this._handleFetchDevices = () => {
                            const { fetchDevices: e } = this.props;
                            e && e();
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ action: e });
                        });
                }
                UNSAFE_componentWillMount() {
                    (this.isLoggedIn = !!this.context.viewerUserId), this.isLoggedIn && this.props.fetchDevices();
                }
                render() {
                    const { deviceFetchStatus: e, location: t } = this.props;
                    return r.createElement(h.Z, null, r.createElement(m.Z, { location: t, title: C }, r.createElement(p.Z, null, this.isLoggedIn ? r.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleFetchDevices, render: this._render }) : this._render())));
                }
            }
            A.contextType = d.rC;
            const P = y(A);
        },
        876634: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardTailoredAudiencesScreen: () => B, default: () => L });
            n(136728);
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(242454),
                c = n(190286),
                l = n(674132),
                d = n.n(l),
                h = n(443781),
                p = n(652904),
                m = n(829824),
                u = n(609848),
                g = n(264922),
                f = n(342453),
                _ = n(401388),
                E = n(71620),
                Z = n(668214),
                y = n(257166),
                b = n(205253),
                S = n(601576),
                C = n(919022),
                w = n(312771);
            const x = (e, t) => {
                    const n = C.ZP.selectViewerUser(e),
                        r = (0, _.Z)(n) ? w.ZP.LOADED : y.selectFetchStatus(e);
                    return (0, w.h1)(b.qu(e), b.I3(e), r);
                },
                D = (0, Z.Z)()
                    .propsFromState(() => ({ data: b.yA, fetchStatus: x, preferences: b.LP, primaryEmail: y.selectFirstEmail }))
                    .propsFromActions(() => ({ addToast: S.fz, createAudienceDownload: b.Rh, createLocalApiErrorHandler: (0, E.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_TAILORED_AUDIENCES_SCREEN"), fetchData: b.nJ, fetchDevices: y.fetchDevices, fetchPreferences: b.CP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "tailored_audiences" }),
                A = { headline: d().hf9c2caa, text: d().c29b7971, confirmButtonLabel: d().b9e1cf02 },
                P = d().da202f9a,
                k = d().a8276fac,
                I = d().g7912a84,
                T = d().d6104de0,
                v = (0, s.ju)("https://support.x.com/articles/20170405");
            class B extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._combinedFetches = () => {
                            const { fetchData: e, fetchDevices: t, fetchPreferences: n } = this.props,
                                r = [e(), n()];
                            return this._isLoggedIn() && r.push(t()), Promise.all(r);
                        }),
                        (this._render = () => {
                            const {
                                    data: { tailored_audience_summary: e = {} },
                                    primaryEmail: t,
                                } = this.props,
                                n = 0 !== e.num_advertisers && 0 !== e.num_audiences;
                            return r.createElement("div", null, r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, r.createElement(d().I18NFormatMessage, { $i18n: "a97ef88f" }, r.createElement(o.ZP, { link: v }, d().ed8c03f5)))), r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(o.ZP, null, r.createElement(d().I18NFormatMessage, { $i18n: "f451c521" }, r.createElement("strong", null, d().e1a4daac({ num_audiences: e.num_audiences })), r.createElement("strong", null, d().acb25e32({ num_advertisers: e.num_advertisers }))))), r.createElement(a.Z, { style: [f.Z.infoItem, n && f.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, T)), n ? r.createElement(i.Z, { color: "primary", label: k, onPress: this._handleRequestDataClick }) : null, this.state.showEmailConfirmation && r.createElement(c.Z, { confirmButtonLabel: A.confirmButtonLabel, headline: A.headline, onCancel: this._handleCancelEmail, onConfirm: this._handleConfirmEmail, text: A.text({ primaryEmail: t }) }));
                        }),
                        (this._requestUserData = () => {
                            const { addToast: e, createAudienceDownload: t, primaryEmail: n } = this.props;
                            n ? (this._scribeAction("email"), t().then(() => e({ text: I }))) : (this._scribeAction("download"), window.open((0, s.ju)("https://x.com/account/personalization/download_advertiser_list.pdf"), "_blank"));
                        }),
                        (this._handleRequestDataClick = () => {
                            const { primaryEmail: e } = this.props;
                            e ? this.setState({ showEmailConfirmation: !0 }) : this._requestUserData();
                        }),
                        (this._handleCancelEmail = () => {
                            this.setState({ showEmailConfirmation: !1 });
                        }),
                        (this._handleConfirmEmail = () => {
                            this._requestUserData(), this.setState({ showEmailConfirmation: !1 });
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props;
                            t.scribeAction(e);
                        }),
                        (this._isLoggedIn = () => Boolean(this.context.viewerUserId)),
                        (this.state = { showEmailConfirmation: !1 });
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(p.Z, null, r.createElement(g.Z, { location: t, title: P }, r.createElement(m.Z, null, r.createElement(u.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            B.contextType = h.rC;
            const L = D(B);
        },
        380052: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardTwitterInterestsScreen: () => L, default: () => R });
            var r = n(202784),
                a = n(325686),
                s = n(954110),
                o = n(731708),
                i = n(108362),
                c = n(674132),
                l = n.n(c),
                d = n(370751),
                h = n(290402),
                p = n(507651),
                m = n(443781),
                u = n(652904),
                g = n(829824),
                f = n(170069),
                _ = n(264922),
                E = n(267966),
                Z = n(342453),
                y = n(71620),
                b = n(668214),
                S = n(205253),
                C = n(312771);
            const w = (e, t) => (0, C.h1)(S.LY(e), S.I3(e)),
                x = (0, b.Z)()
                    .propsFromState(() => ({ fetchStatus: w, interests: S.fO, preferences: S.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_TWITTER_INTERESTS_SCREEN"), fetchInterests: S.lo, fetchPreferences: S.CP, updateInterest: S.q_ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "twitter_interests" }),
                D = l().h1f01a24,
                A = l().c07b4316,
                P = l().e97196fe,
                k = l().ja0f971c,
                I = l().gd1ce494,
                T = l().e9f1fbcc,
                v = l().cf0daa24,
                B = "/settings/your_twitter_data/twitter_interests/interest";
            class L extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTabs = () => {
                            if (!this._hasKnownInterests()) return null;
                            const e = [
                                { to: "/settings/your_twitter_data/twitter_interests", key: P, label: P },
                                { to: B, key: A, label: A },
                            ];
                            return r.createElement(p.Z, { "aria-label": D, links: e });
                        }),
                        (this._render = () => {
                            const {
                                location: { pathname: e },
                            } = this.props;
                            return e !== B && this._hasKnownInterests() ? this._renderKnownInterests() : this._renderInterests();
                        }),
                        (this._renderInterests = () => {
                            const {
                                    interests: e,
                                    preferences: { interest_preferences: t = {} },
                                } = this.props,
                                n = e.interested_in || [],
                                a = (0, d.Z)(t.disabled_interests || []),
                                o = !n.length;
                            return r.createElement(
                                "div",
                                null,
                                r.createElement(f.Z, null, k),
                                n.map((e, t) => r.createElement(s.Z, { checked: !a.has(e.id), key: e.id, label: e.display_name, name: e.id.toString(), onChange: this._handleUpdateInterest })),
                                o ? this._renderMessage(T, v) : null,
                            );
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: [E.Z.calloutTextBlock, E.Z.bottomBorder] }, r.createElement(o.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(o.ZP, { align: "center", color: "gray700", style: Z.Z.helpText }, t) : null)),
                        (this._renderKnownInterests = () => {
                            const {
                                    interests: e,
                                    preferences: { interest_preferences: t = {} },
                                } = this.props,
                                n = e.known_for || [],
                                a = (0, d.Z)(t.disabled_interests || []);
                            return r.createElement(
                                "div",
                                null,
                                r.createElement(f.Z, null, I),
                                n.map((e, t) => r.createElement(s.Z, { checked: !a.has(e.id), key: e.id, label: e.display_name, name: e.id.toString(), onChange: this._handleUpdateInterest })),
                            );
                        }),
                        (this._hasKnownInterests = () => {
                            const { interests: e } = this.props;
                            return e && e.known_for && e.known_for.length > 0;
                        }),
                        (this._handleFetchData = () => {
                            const { createLocalApiErrorHandler: e } = this.props;
                            this.props.fetchPreferences().catch(e()), this.props.fetchInterests().catch(e());
                        }),
                        (this._handleUpdateInterest = (e, t) => {
                            const { createLocalApiErrorHandler: n, updateInterest: r } = this.props;
                            this._scribeAction(), r(e, t, "ads").catch(n({ showToast: !0 }));
                        }),
                        (this._scribeAction = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ action: "edit" });
                        });
                }
                componentDidMount() {
                    this._handleFetchData();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return r.createElement(u.Z, null, r.createElement(_.Z, { location: t, secondaryBar: this._renderTabs(), title: D }, r.createElement(g.Z, null, r.createElement(i.Z, null, r.createElement(h.Z, { fetchStatus: e, onRequestRetry: this._handleFetchData, render: this._render })))));
                }
            }
            L.contextType = m.rC;
            const R = x(L);
        },
        791508: (e, t, n) => {
            n.r(t), n.d(t, { default: () => w });
            var r = n(202784),
                a = n(325686),
                s = n(108362),
                o = n(779610),
                i = n(392237),
                c = n(674132),
                l = n.n(c),
                d = n(443781),
                h = n(652904),
                p = n(293115),
                m = n(829824),
                u = n(264922);
            const g = l().j7ad754a,
                f = l().i5f7b6b8,
                _ = l().i6b3f59a,
                E = l().g1aced04,
                Z = l().j9d10268,
                y = l().gbde3534,
                b = l().gee8110e,
                S = { page: "settings", section: "transparency" },
                C = i.default.create((e) => ({ backgroundRoot: { flexGrow: 1, backgroundColor: e.colors.gray50 }, contentRoot: { backgroundColor: e.colors.cellBackground, flexGrow: 1, justifyContent: "flex-start" } })),
                w = function (e) {
                    const { location: t } = e,
                        { viewerUserId: n } = r.useContext(d.rC),
                        i = !!n;
                    return r.createElement(p.nO, { namespace: S }, r.createElement(h.Z, null, r.createElement(u.Z, { location: t, title: g }, r.createElement(m.Z, null, r.createElement(a.Z, { style: C.backgroundRoot }, r.createElement(s.Z, { style: C.contentRoot }, r.createElement(o.Z, { label: f, link: "/settings/your_twitter_data/account" }), i ? r.createElement(o.Z, { label: _, link: "/settings/your_twitter_data/account_history" }) : null, r.createElement(o.Z, { label: E, link: "/settings/your_twitter_data/devices" }), i ? r.createElement(o.Z, { label: Z, link: "/settings/your_twitter_data/account_activity" }) : null, r.createElement(o.Z, { label: y, link: "/settings/your_twitter_data/ads" }), r.createElement(o.Z, { label: b, link: i ? "/settings/download_your_data" : "/settings/your_twitter_data/request_data" })))))));
                };
        },
        342453: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(392237);
            const a = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                s = r.default.create((e) => ({ labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }, helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, titleCase: { textTransform: "capitalize" }, floatingLink: { paddingStart: e.spaces.space20 }, infoItem: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, locationInfo: { alignItems: "center", flexDirection: "row", width: "100%" }, locationIcon: { marginEnd: e.spaces.space12 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space20 }, noLeftPadding: { paddingStart: 0 }, narrowButtonRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { ...a(e) }, narrowButton: { alignSelf: "center", marginStart: e.spaces.space12, paddingStart: e.spaces.space20 }, helpTextExtraPadded: { paddingTop: e.spaces.space12 }, featureDisabledCallout: { paddingHorizontal: 70, paddingTop: e.spaces.space48 }, featureDisabledTitle: { paddingBottom: e.spaces.space4 }, cursor: { cursor: "pointer" } }));
        },
        829824: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(202784),
                a = n(99107),
                s = n(420740),
                o = n(731708),
                i = n(674132),
                c = n.n(i),
                l = n(443781),
                d = n(918621),
                h = n(725405),
                p = n(125363),
                m = n(390387);
            const u = c().ffeb836a,
                g = c().f2fb9746;
            function f() {
                const e = (0, h.Z)();
                return (
                    r.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    r.createElement(s.Z, { title: u }, r.createElement(o.ZP, null, g))
                );
            }
            function _(e) {
                const { featureSwitches: t } = r.useContext(l.rC),
                    n = (0, p.v9)(m.Qb),
                    s = (0, d.Xh)(a.b7, t);
                return n || s ? e.children : r.createElement(f, null);
            }
        },
        170069: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(392237);
            const i = ({ children: e }) => r.createElement(a.Z, { style: c.labelContainer }, r.createElement(a.Z, { style: c.contentContainer }, r.createElement(a.Z, { style: c.appText }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, e)))),
                c = o.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${o.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                a = n(476984),
                s = n.n(a),
                o = n(143778),
                i = n(750410),
                c = n(682830);
            const l = "failed",
                d = "loaded",
                h = "loading",
                p = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: s, loadingMessage: o, onRequestRetry: d, render: m, renderFailure: u, retryMessage: g, retryable: f } = this.props;
                    switch (a) {
                        case l:
                            return f ? r.createElement(i.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : n ? r.createElement(c.m, { failureMessage: n }) : u();
                        case h:
                            return r.createElement(c.J, { "aria-label": e, color: t, loadingMessage: o });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => x });
            var r = n(807896),
                a = n(202784),
                s = n(194504),
                o = n(235902),
                i = n(392237),
                c = n(325686),
                l = n(674132),
                d = n.n(l),
                h = n(912021),
                p = n(516951),
                m = n(731708),
                u = n(310088),
                g = n(175993),
                f = n(58881),
                _ = n(530732);
            const E = d().d2414d31,
                Z = () => d().ce4e85ae,
                y = d().fb9f6f39;
            class b extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, h.Z)((e, t) => {
                            const { pathname: n, query: r, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: r, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, r) => {
                            const a = i.default.theme.colors.text,
                                s = i.default.theme.colors.gray700;
                            return n || r ? (e || t ? a : s) : e ? a : s;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: r, children: s, color: o, isActive: l, isCompact: d, isPillLink: h, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: b, style: C, to: w } = this.props,
                        { location: x } = this.state,
                        D = w ? this._getMemoizedLink(w, b) : void 0,
                        A = l ? l(w) : x?.pathname === D?.pathname,
                        P = f.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        k = g ? "medium" : A ? "bold" : "medium";
                    return a.createElement(_.Z, { "aria-label": t, "aria-selected": A, focusable: !!A, interactiveStyles: P, link: D, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [h ? S.pill : S.link, h && A ? S.active : null, d ? (h ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, C], withoutInteractiveStyles: g || h }, ({ isFocused: t, isHovered: l }) => a.createElement(c.Z, { style: h && S.flexGrow }, a.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(A, l, g, h) }, d && S.compactText, g && t && S.focusedText], weight: k }, e && a.createElement(e, { style: S.icon }), s, g || h ? null : a.createElement(c.Z, { style: A && [S.border, { backgroundColor: i.default.theme.colors[o] }] })), n ? a.createElement(u.Z, { count: n, standalone: !0, style: [S.badge, n >= 10 && S.multiDigitBadge, n >= 20 && S.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: E, withBorder: !1 }) : r ? a.createElement(u.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: Z, withBorder: !1 }) : null));
                }
            }
            (b.contextType = g.Z), (b.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = i.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                C = b,
                w = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                x = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: i, isRoundedRect: c, links: l, style: d, visibleItemIndex: h }) => {
                    const p = l
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = o.ZP.useProps(),
                        u = m() && !i,
                        g = a.useMemo(
                            () =>
                                l.filter(Boolean).map(({ label: t, viewType: s, ...o }, l) => {
                                    const d = u ? [w.linkRedesign, 0 === l && w.firstLinkRedesign, e && 0 === l && w.withNoPaddingStart] : void 0;
                                    return a.createElement(C, (0, r.Z)({ viewType: s }, o, { isCompact: n, isPillLink: i, isRoundedRect: c, isWebRedesign: u, style: d }), t);
                                }),
                            [e, n, i, c, u, l],
                        );
                    return a.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: i && w.gap, childrenStyle: !u && w.flexGrow, key: p, style: [i ? null : w.segmentedControl, u && w.leftAligned, d], visibleItemIndex: h }, g);
                };
        },
        988227: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                s = n(783427),
                o = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsTransparency.31870fca.js.map
