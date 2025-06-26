"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsTransparency-e019dbda"],
    {
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
                c = n(111677),
                l = n.n(c),
                d = n(968478);
            const h = l().aa6e3300,
                m = ({ retryMessage: e, ...t }, n) => {
                    const i = s.Z.isOnline();
                    return a.createElement(o.Z, (0, r.Z)({}, t, { icon: i ? void 0 : a.createElement(d.default, { style: p.icon }), retryMessage: i ? e : h }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                u = a.forwardRef(m);
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(807896),
                a = n(202784),
                s = n(107267),
                o = n(403556),
                i = n(791632);
            const c = (e) => {
                    const t = (0, s.useHistory)(),
                        { isCompact: n, ...c } = e;
                    return a.createElement(o.Z, (0, r.Z)({}, c, { isCompact: n || (0, i.HD)(t) }));
                },
                l = a.memo(c);
        },
        673110: (e, t, n) => {
            n.d(t, { Gv: () => p, UD: () => m });
            var r = n(226395),
                a = n(499627),
                s = n(917799),
                o = n(312771),
                i = n(291020);
            const c = "verifyPassword",
                l = `rweb/${i.Y}/${c}`,
                d = (0, s.dg)(l, "VERIFY_PASSWORD"),
                h = { fetchStatus: o.ZP.NONE };
            a.Z.register({
                [c]: function (e = h, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case d.SUCCESS:
                            return { ...e, fetchStatus: o.ZP.LOADED };
                        case d.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const m = (e) => e[c].fetchStatus,
                p =
                    (e) =>
                    (t, n, { api: a }) =>
                        (0, s._O)(t, { params: { password: e }, request: a.withEndpoint(r.Z).verifyPassword })({ actionTypes: d, context: "VERIFY_PASSWORD" });
        },
        159127: (e, t, n) => {
            n.r(t), n.d(t, { AccountActivityScreen: () => u, default: () => f });
            var r = n(202784),
                a = n(779610),
                s = n(111677),
                o = n.n(s),
                i = n(652904),
                c = n(293115),
                l = n(264922);
            const d = o().j9d10268,
                h = o().a5f32aa2,
                m = o().daef29b8,
                p = { page: "settings", section: "your_twitter_data", component: "account_activity" },
                u = ({ location: e }) => r.createElement(c.nO, { namespace: p }, r.createElement(i.Z, null, r.createElement(l.Z, { location: e, title: d }, r.createElement(a.Z, { label: h, link: "/settings/blocked/all" }), r.createElement(a.Z, { label: m, link: "/settings/muted/all" })))),
                f = u;
        },
        690423: (e, t, n) => {
            n.r(t), n.d(t, { AccountHistoryScreen: () => y, default: () => b });
            var r = n(202784),
                a = n(779610),
                s = n(111677),
                o = n.n(s),
                i = n(443781),
                c = n(652904),
                l = n(264922),
                d = n(71620),
                h = n(668214),
                m = n(704279),
                p = n(205253);
            const u = (0, h.Z)()
                    .propsFromState(() => ({ fetchDataStatus: p.qu, personalizationData: p.yA }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN"), fetchData: p.nJ, fetchPreferences: p.CP, scribePageImpression: m.L }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "account_history" }),
                f = o().i6b3f59a,
                _ = o().b523ecc6,
                g = o().d9cbe351,
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
                    return r.createElement(c.Z, null, r.createElement(l.Z, { location: e, title: f }, r.createElement(a.Z, { description: s > 0 ? g({ count: s }) : null, label: _, link: "/settings/your_twitter_data/login_history" }), r.createElement(a.Z, { description: n > 0 ? Z({ count: n }) : null, label: E, link: "/settings/your_twitter_data/locations" })));
                }
            }
            y.contextType = i.rC;
            const b = u(y);
        },
        747944: (e, t, n) => {
            n.r(t), n.d(t, { AdsScreen: () => y, default: () => b });
            var r = n(202784),
                a = n(779610),
                s = n(111677),
                o = n.n(s),
                i = n(443781),
                c = n(652904),
                l = n(264922),
                d = n(71620),
                h = n(668214),
                m = n(205253);
            const p = (0, h.Z)()
                    .propsFromState(() => ({ fetchDataStatus: m.qu, personalizationData: m.yA }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN"), fetchData: m.nJ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "ads_data" }),
                u = o().gbde3534,
                f = o().a54826c6,
                _ = o().a4441bb8,
                g = o().e1c6b2d6,
                E = o().ed19d10d,
                Z = o().f00d0d03;
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.render = () => {
                            const { location: e, personalizationData: t } = this.props,
                                n = t.tailored_audience_summary ? t.tailored_audience_summary.num_advertisers : 0,
                                s = t.tailored_audience_summary ? t.tailored_audience_summary.num_audiences : 0;
                            return r.createElement(c.Z, null, r.createElement(l.Z, { location: e, title: u }, r.createElement(a.Z, { description: t.tailored_audience_summary ? Z({ count: t.num_twitter_interests }) : null, label: _, link: "/settings/your_twitter_data/twitter_interests" }), r.createElement(a.Z, { description: t.tailored_audience_summary ? Z({ count: t.num_partner_interests }) : null, label: f, link: "/settings/your_twitter_data/partner_interests" }), r.createElement(a.Z, { description: t.tailored_audience_summary ? E({ audienceCount: s, advertiserCount: n }) : null, label: g, link: "/settings/your_twitter_data/audiences" })));
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
            const b = p(y);
        },
        340090: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardAgeScreen: () => x, default: () => v });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(976145),
                i = n(954110),
                c = n(111677),
                l = n.n(c),
                d = n(443781),
                h = n(652904),
                m = n(829824),
                p = n(609848),
                u = n(264922),
                f = n(267966),
                _ = n(342453),
                g = n(71620),
                E = n(668214),
                Z = n(205253),
                y = n(312771);
            const b = (e, t) => (0, y.h1)(Z.qu(e), Z.I3(e)),
                S = (0, E.Z)()
                    .propsFromState(() => ({ ages: Z.LJ, fetchStatus: b, personalizationPreferences: Z.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_AGE_SCREEN"), fetchData: Z.nJ, fetchPreferences: Z.CP, updateSettings: Z.VP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "age" }),
                w = l().bf96fda4,
                A = r.createElement(l().I18NFormatMessage, { $i18n: "i1e24825" }, r.createElement(s.ZP, { link: "https://help.x.com/safety-and-security/birthday-visibility-settings" }, l().ea522535)),
                D = r.createElement(l().I18NFormatMessage, { $i18n: "a200fc71" }, r.createElement(s.ZP, { link: "/settings/profile" }, l().hf5ca8f8)),
                P = l().fe1fc83e,
                C = l().bf9c74d0,
                T = l().e9f1fbcc,
                I = l().cf0daa24;
            class x extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._combinedFetches = () => {
                            const { fetchData: e, fetchPreferences: t } = this.props;
                            return Promise.all([e(), t()]);
                        }),
                        (this._render = () => r.createElement("div", null, this._renderAges(), this.isLoggedIn ? r.createElement(a.Z, { style: _.Z.infoItem }, r.createElement(s.ZP, { color: "gray700" }, D)) : this._renderUseAge())),
                        (this._renderAges = () => {
                            const { ages: e } = this.props,
                                t = (0, o.Z)(
                                    e.map((e) => ("string" == typeof e ? e : e.display)),
                                    !0,
                                );
                            return t ? r.createElement(a.Z, { style: [_.Z.infoItem, _.Z.bottomBorder] }, r.createElement(s.ZP, null, t)) : this._renderMessage(T, I);
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: [f.Z.calloutTextBlock, f.Z.bottomBorder] }, r.createElement(s.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(s.ZP, { align: "center", color: "gray700", style: _.Z.helpText }, t) : null)),
                        (this._renderUseAge = () => {
                            const { personalizationPreferences: e } = this.props,
                                t = e && e.age_preferences && e.age_preferences.use_age_for_personalization;
                            return r.createElement(i.Z, { checked: !t, key: "use_age_for_personalization", label: C, name: "use_age_for_personalization", onChange: this._handleBooleanChanged });
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
                    return r.createElement(h.Z, null, r.createElement(u.Z, { location: t, title: w }, r.createElement(m.Z, null, r.createElement(a.Z, { style: [_.Z.infoItem, _.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, this.isLoggedIn ? A : P)), r.createElement(p.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            x.contextType = d.rC;
            const v = S(x);
        },
        546927: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardDevicesScreen: () => O, default: () => q });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(844685),
                c = n(420412),
                l = n(111677),
                d = n.n(l),
                h = n(443781),
                m = n(652904),
                p = n(829824),
                u = n(609848),
                f = n(264922),
                _ = n(267966),
                g = n(342453),
                E = n(71620),
                Z = n(668214),
                y = n(205253),
                b = n(312771);
            const S = (e, t) => (0, b.h1)(y.qu(e), y.I3(e)),
                w = (0, Z.Z)()
                    .propsFromState(() => ({ data: y.yA, fetchStatus: S, settings: y.kQ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_DEVICES_SCREEN"), fetchData: y.nJ, fetchPreferences: y.CP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "devices" }),
                A = "linkedBrowsersView",
                D = "linkedMobileDevicesView",
                P = "linkedEmailAddressesView",
                C = "helpText",
                T = d().hc36dbba,
                I = d().j4fa776e,
                x = d().i7acdb36,
                v = d().c112dfc8,
                k = d().jd8607ba,
                L = d().ea4f6c9e,
                F = d().d750b93f,
                B = d().a9783602,
                R = d().j043aa31,
                N = d().ae415fd2,
                z = "/settings/off_twitter_activity",
                H = d().a90be7b4,
                M = d().ba2e82a1,
                G = (0, s.ju)("https://support.x.com/articles/20175257"),
                U = [],
                O = (e) => {
                    const t = r.useContext(h.rC),
                        n = t.viewerUserId,
                        { data: s, fetchData: l, fetchPreferences: E, fetchStatus: Z, location: y, settings: b } = e;
                    r.useEffect(() => {
                        E();
                    }, [E]);
                    const { known_devices: S = {} } = s,
                        { allowDeviceAccess: w } = b,
                        { featureSwitches: O } = r.useContext(h.rC),
                        q = (e, t, n = !1) =>
                            e.length
                                ? r.createElement(
                                      a.Z,
                                      null,
                                      r.createElement(a.Z, null, r.createElement(i.Z, { text: t })),
                                      e.map((t, s) => {
                                          const i = e && e.length - 1 === s;
                                          return r.createElement(a.Z, { key: `device-'${s}`, style: [g.Z.infoItem, i && !n && g.Z.bottomBorder] }, r.createElement(o.ZP, null, t.name), r.createElement(o.ZP, { color: "gray700", style: g.Z.helpText }, k, " ", M(new Date(t.created_at))));
                                      }),
                                  )
                                : null;
                    return r.createElement(
                        m.Z,
                        null,
                        r.createElement(
                            f.Z,
                            { location: y, title: T },
                            r.createElement(
                                p.Z,
                                null,
                                r.createElement(u.Z, {
                                    fetch: () => Promise.all([l(), E()]),
                                    fetchStatus: Z,
                                    render: () => {
                                        const e = S.phone || U,
                                            i = S.tablet || U,
                                            l = S.desktop || U,
                                            h = e.length > 0 && i.length > 0 && l.length > 0,
                                            m = { supportLink: r.createElement(o.ZP, { link: G }) };
                                        return r.createElement(
                                            a.Z,
                                            null,
                                            !n && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [_.Z.infoText, _.Z.bottomBorder] }, r.createElement(d().I18NFormatMessage, { $i18n: "cbcb2413" }, r.cloneElement(m.supportLink, null, d().df3e137b))),
                                            n && h && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [_.Z.infoText, _.Z.bottomBorder] }, r.createElement(d().I18NFormatMessage, { $i18n: "e21b623d" }, r.cloneElement(m.supportLink, null, d().d1597ccb))),
                                            q(e, I, 0 === i.length && 0 === l.length),
                                            q(i, x, 0 === l.length),
                                            q(l, v, !0),
                                            r.createElement(c.Z, null),
                                            t.viewerUserId && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [_.Z.infoText, w ? _.Z.bottomBorder : null] }, r.createElement(d().I18NFormatMessage, { $i18n: "i4d58f43" }, r.cloneElement(m.supportLink, null, d().c1b03a07))),
                                            w
                                                ? (() => {
                                                      const e = { offTwitterActivitySettingLink: r.createElement(o.ZP, { link: z }) },
                                                          t = r.createElement(o.ZP, { color: "gray700", style: [g.Z.helpText, g.Z.helpTextExtraPadded] }, O.isTrue("ucpd_enabled") ? r.createElement(d().I18NFormatMessage, { $i18n: "b78e30fd", testID: C }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().f0f72665)) : r.createElement(d().I18NFormatMessage, { $i18n: "bb593021", testID: C }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().d33b4e5b)));
                                                      return r.createElement(a.Z, null, s.associated_devices ? r.createElement(a.Z, { style: [g.Z.infoItem, g.Z.bottomBorder], testID: A }, r.createElement(o.ZP, { weight: "bold" }, L), r.createElement(o.ZP, { color: "gray700", style: g.Z.helpText }, F({ count: s.associated_devices.num_browsers })), t) : null, s.associated_devices ? r.createElement(a.Z, { style: [g.Z.infoItem, g.Z.bottomBorder], testID: D }, r.createElement(o.ZP, { weight: "bold" }, B), r.createElement(o.ZP, { color: "gray700", style: g.Z.helpText }, R({ count: s.associated_devices.num_devices })), t) : null, r.createElement(a.Z, { style: g.Z.infoItem, testID: P }, r.createElement(o.ZP, { weight: "bold" }, H), r.createElement(o.ZP, { color: "gray700", style: [g.Z.helpText, g.Z.helpTextExtraPadded] }, r.createElement(d().I18NFormatMessage, { $i18n: "h60f45ef", testID: C }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().c4668d4f)))));
                                                  })()
                                                : r.createElement(a.Z, { style: g.Z.featureDisabledCallout }, r.createElement(o.ZP, { align: "center", size: "headline1", style: g.Z.featureDisabledTitle }, N), r.createElement(o.ZP, { align: "center", color: "gray700", style: g.Z.helpText }, O.isTrue("ucpd_enabled") ? r.createElement(d().I18NFormatMessage, { $i18n: "h0085c59" }, r.createElement(o.ZP, { link: z }, d().adaafb3f)) : r.createElement(d().I18NFormatMessage, { $i18n: "f27cc8af" }, r.createElement(o.ZP, { link: z }, d().c0f6f911)))),
                                        );
                                    },
                                }),
                            ),
                        ),
                    );
                },
                q = w(O);
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
                d = n(111677),
                h = n.n(d),
                m = n(443781),
                p = n(652904),
                u = n(312771),
                f = n(829824),
                _ = n(609848),
                g = n(264922),
                E = n(267966),
                Z = n(342453),
                y = n(71620),
                b = n(668214),
                S = n(205253),
                w = n(601576);
            const A = (e, t) => (0, u.h1)(S.qu(e), S.I3(e)),
                D = (0, b.Z)()
                    .propsFromState(() => ({ fetchStatus: A, gender: S.VU, personalizationPreferences: S.LP }))
                    .propsFromActions(() => ({ addToast: w.fz, createLocalApiErrorHandler: (0, y.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_GENDER_SCREEN"), fetchData: S.nJ, fetchPreferences: S.CP, updateGender: S.Bm, updateSettings: S.VP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "gender" }),
                P = h().a8d0108e,
                C = "custom",
                T = h().a8d0108e,
                I = h().fbf0e61e,
                x = h().de323650,
                v = h().b6ab31be,
                k = h().b4568a3a,
                L = h().c0be743e,
                F = h().i2209530,
                B = [
                    { label: x, value: "female" },
                    { label: v, value: "male" },
                    { label: k, value: C },
                ],
                R = h().c5abae66,
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
                        (this._render = () => a.createElement("div", null, a.createElement(s.Z, { style: [Z.Z.infoItem, Z.Z.bottomBorder] }, a.createElement(o.ZP, { color: "gray700" }, this.isLoggedIn ? I : R)), this.isLoggedIn ? this._renderGenderSelector() : this._renderLoggedOut())),
                        (this._renderMessage = (e, t) => a.createElement(s.Z, { style: E.Z.calloutTextBlock }, a.createElement(o.ZP, { align: "center", size: "headline1" }, e), t ? a.createElement(o.ZP, { align: "center", color: "gray700", style: Z.Z.helpText }, t) : null)),
                        (this._handleItemChanged = (e, t) => {
                            const n = t === C;
                            this.setState({ self_identify: n, gender: n ? null : t });
                        }),
                        (this._handleCustomGenderUpdate = (e) => {
                            const t = e.target.value;
                            this.setState({ self_identify: !0, gender: t });
                        }),
                        (this._handleSaveGender = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, updateGender: n } = this.props,
                                r = this.state.self_identify ? C : this.state.gender || C;
                            this._scribeAction(),
                                n({ type: r, value: this.state.gender || "" })
                                    .then(() => e({ text: L }), t({ showToast: !0 }))
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
                        (this.state = { self_identify: this.props.gender.type === C, gender: this.props.gender.value });
                }
                UNSAFE_componentWillMount() {
                    (this.isLoggedIn = !!this.context.viewerUserId), this.props.fetchPreferences();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props,
                        n = e === u.ZP.LOADED && this.isLoggedIn ? { onSubmit: this._handleSaveGender, submitDisabled: !this.isGenderValid, submitLabel: F } : void 0;
                    return a.createElement(p.Z, null, a.createElement(g.Z, (0, r.Z)({ location: t, title: T }, n), a.createElement(f.Z, null, a.createElement(_.Z, { fetch: this.combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
                _renderGenderSelector() {
                    const { gender: e } = this.props;
                    return a.createElement(s.Z, null, a.createElement(i.Z, { name: "gender", onChange: this._handleItemChanged, options: B, value: this.selectedGender }), this.selectedGender === C ? a.createElement(c.Z, { defaultValue: e.value && e.type === C ? e.value : "", label: P, maxLength: 30, name: "genderOther", onChange: this._handleCustomGenderUpdate, type: "text" }) : null);
                }
                _renderLoggedOut() {
                    const { personalizationPreferences: e } = this.props,
                        t = e.gender_preferences && e.gender_preferences.use_gender_for_personalization;
                    return a.createElement(s.Z, null, this.selectedGender ? a.createElement(s.Z, { style: [Z.Z.infoItem, Z.Z.bottomBorder] }, a.createElement(o.ZP, null, this.props.gender.value)) : this._renderMessage(z, H), a.createElement(l.Z, { checked: !t, key: "use_gender_for_personalization", label: N, name: "use_gender_for_personalization", onChange: this._handleBooleanChanged }));
                }
                get selectedGender() {
                    const { gender: e } = this.props;
                    return this.state.self_identify ? C : this.state.gender ? this.state.gender : e && e.type;
                }
                get isGenderValid() {
                    const { gender: e } = this.props;
                    return this.state.gender && this.state.gender !== e.value;
                }
            }
            M.contextType = m.rC;
            const G = D(M);
        },
        349154: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLanguageScreen: () => D, default: () => P });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(954110),
                i = n(111677),
                c = n.n(i),
                l = n(652904),
                d = n(829824),
                h = n(609848),
                m = n(264922),
                p = n(267966),
                u = n(342453),
                f = n(71620),
                _ = n(668214),
                g = n(205253),
                E = n(312771);
            const Z = (0, _.Z)()
                    .propsFromState(() => ({ data: g.yA, dataFetchStatus: g.qu, preferences: g.LP, preferencesFetchStatus: g.I3 }))
                    .adjustStateProps(({ dataFetchStatus: e, preferencesFetchStatus: t, ...n }) => ({ ...n, fetchStatus: (0, E.h1)(e, t) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_LANGUAGE_SCREEN"), fetchData: g.nJ, fetchPreferences: g.CP, updateLanguage: g.BF }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "language" }),
                y = c().a03dacaa,
                b = c().b056d9dc,
                S = c().h68bc23c,
                w = c().e9f1fbcc,
                A = c().cf0daa24;
            class D extends r.Component {
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
                                n ? r.createElement(a.Z, { style: [u.Z.infoItem, i.length > 0 && u.Z.bottomBorder] }, r.createElement(s.ZP, null, n.display)) : r.createElement(a.Z, { style: i.length > 0 && u.Z.bottomBorder }, this._renderMessage(w, A)),
                                i.length > 0 ? r.createElement(a.Z, { style: [u.Z.infoItem, u.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, S)) : null,
                                i.map((e, t) => r.createElement(o.Z, { checked: !c || -1 === c.indexOf(e.key), key: e.key, label: e.display, name: e.key, onChange: this._handleUpdateLanguage })),
                            );
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: p.Z.calloutTextBlock }, r.createElement(s.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(s.ZP, { align: "center", color: "gray700", style: u.Z.helpText }, t) : null)),
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
                    return r.createElement(l.Z, null, r.createElement(m.Z, { location: t, title: y }, r.createElement(d.Z, null, r.createElement(h.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            const P = Z(D);
        },
        821853: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLocationsScreen: () => I, default: () => x });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(909377),
                i = n(111677),
                c = n.n(i),
                l = n(264171),
                d = n(947135),
                h = n(652904),
                m = n(609848),
                p = n(264922),
                u = n(267966),
                f = n(342453),
                _ = n(71620),
                g = n(668214),
                E = n(205253),
                Z = n(601576);
            const y = (0, g.Z)()
                    .propsFromState(() => ({ fetchStatus: E.qu, personalizationData: E.yA, settings: E.kQ }))
                    .propsFromActions(() => ({ addToast: Z.fz, clearLocations: E.wG, createLocalApiErrorHandler: (0, _.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_LOCATION_SCREEN"), fetchData: E.nJ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "locations" }),
                b = c().d9138166,
                S = c().j31a1aa0,
                w = c().e68b09b4,
                A = { headline: c().ddefdd1c, text: c().hea740ac, confirmButtonLabel: c().e68b09b4 },
                D = c().a26e0d52,
                P = c().ae415fd2,
                C = r.createElement(c().I18NFormatMessage, { $i18n: "a1fdeb45" }, r.createElement(s.ZP, { link: "/settings/location_information" }, c().b9d98dec)),
                T = c().he447966;
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleDeleteLocation = () => {
                            const { addToast: e, clearLocations: t, createLocalApiErrorHandler: n } = this.props;
                            this._scribeAction("clear"), t().then(() => e({ text: D }), n({ showToast: !0 }));
                        }),
                        (this._render = () => {
                            const { settings: e } = this.props,
                                t = e.allowLocationHistoryUse;
                            return r.createElement(h.Z, null, r.createElement("div", null, r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, S)), t ? this._renderLocations() : this._renderMessage(P, C)));
                        }),
                        (this._renderLocations = () => {
                            const { personalizationData: e } = this.props,
                                t = e.location_history;
                            return r.createElement(a.Z, null, t && t.map((e, t) => r.createElement(a.Z, { key: `loc-'${t}`, style: [f.Z.infoItem, f.Z.locationInfo, f.Z.bottomBorder] }, r.createElement(o.Z, { Icon: l.default, color: "neutral", size: "xLarge", style: f.Z.locationIcon }), r.createElement(s.ZP, null, e))), t && t.length ? r.createElement(d.Z, { confirmationSheetConfirmButtonLabel: A.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: A.headline, confirmationSheetText: A.text, label: w, onConfirmationSheetConfirm: this._handleDeleteLocation, withBottomBorder: !1 }) : this._renderMessage(T));
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: u.Z.calloutTextBlock }, r.createElement(s.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(s.ZP, { align: "center", color: "gray700", style: f.Z.helpText }, t) : null)),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ action: e });
                        });
                }
                render() {
                    const { fetchData: e, fetchStatus: t, location: n } = this.props;
                    return r.createElement(p.Z, { location: n, title: b }, r.createElement(m.Z, { fetch: e, fetchStatus: t, render: () => this._render(), titleHeader: b }));
                }
            }
            const x = y(I);
        },
        933015: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLoginHistoryScreen: () => w, default: () => A });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(943401),
                c = n(111677),
                l = n.n(c),
                d = n(652904),
                h = n(609848),
                m = n(264922),
                p = n(342453),
                u = n(71620),
                f = n(668214),
                _ = n(205253);
            const g = (0, f.Z)()
                    .propsFromState(() => ({ fetchDataStatus: _.qu, personalizationData: _.yA }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_LOGIN_HISTORY_SCREEN"), fetchData: _.nJ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "login_history" }),
                E = l().b523ecc6,
                Z = l().e27e4fce,
                y = l().d0a77c9b,
                b = (0, s.ju)("https://support.x.com/articles/20172679"),
                S = r.createElement(l().I18NFormatMessage, { $i18n: "hcb3ad67" }, r.createElement(o.ZP, { link: "/settings/connected_apps" }, l().ib55eb6b), r.createElement(o.ZP, { link: b }, l().e5a4a539));
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { personalizationData: e } = this.props,
                                t = e.login_history;
                            return r.createElement(r.Fragment, null, t && t.map((e, t) => r.createElement(a.Z, { key: `hist-'${t}`, style: [p.Z.infoItem, p.Z.bottomBorder] }, r.createElement(o.ZP, null, e.app_name), r.createElement(o.ZP, { color: "gray700", style: p.Z.helpText }, y(new Date(e.time))), r.createElement(o.ZP, { color: "gray700", style: p.Z.helpText }, e.ip, " (", e.country ? e.country : Z, ")"))));
                        });
                }
                render() {
                    const { fetchData: e, fetchDataStatus: t, location: n } = this.props;
                    return r.createElement(d.Z, null, r.createElement(m.Z, { location: n, title: E }, r.createElement(i.Z, { description: S }), r.createElement(h.Z, { fetch: e, fetchStatus: t, render: () => this._render() })));
                }
            }
            const A = g(w);
        },
        515321: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardPartnerInterestsScreen: () => C, default: () => T });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(954110),
                c = n(111677),
                l = n.n(c),
                d = n(290402),
                h = n(652904),
                m = n(829824),
                p = n(264922),
                u = n(267966),
                f = n(342453),
                _ = n(71620),
                g = n(668214),
                E = n(205253),
                Z = n(312771);
            const y = (e, t) => (0, Z.h1)(E.Tg(e), E.I3(e)),
                b = (0, g.Z)()
                    .propsFromState(() => ({ fetchStatus: y, interests: E.tC, preferences: E.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_PARTNER_INTERESTS_SCREEN"), fetchInterests: E.sH, fetchPreferences: E.CP, updateInterest: E.q_ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "partner_interests" }),
                S = l().a54826c6,
                w = l().gc8f2e14,
                A = l().e9f1fbcc,
                D = l().cf0daa24,
                P = (0, s.ju)("https://support.x.com/articles/20175258");
            class C extends r.Component {
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
                                r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, r.createElement(l().I18NFormatMessage, { $i18n: "adc26d49" }, r.createElement(o.ZP, { link: P }, l().e6dbe66b)))),
                                e.map((e) => r.createElement(i.Z, { checked: -1 === n.indexOf(e.id), key: e.id, label: e.display_name, name: e.id.toString(), onChange: this._handleUpdateInterest })),
                                0 === e.length ? this._renderMessage(A, D) : r.createElement(a.Z, { style: u.Z.calloutTextBlock }, r.createElement(o.ZP, { color: "gray700", style: f.Z.helpText }, w)),
                            );
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: u.Z.calloutTextBlock }, r.createElement(o.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(o.ZP, { align: "center", color: "gray700", style: f.Z.helpText }, t) : null)),
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
                    return r.createElement(h.Z, null, r.createElement(p.Z, { location: t, title: S }, r.createElement(m.Z, null, r.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetchData, render: this._render }))));
                }
            }
            const T = b(C);
        },
        546703: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardRequestDataScreen: () => C, default: () => T });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(688715),
                i = n(111677),
                c = n.n(i),
                l = n(290402),
                d = n(443781),
                h = n(652904),
                m = n(829824),
                p = n(264922),
                u = n(267966),
                f = n(342453),
                _ = n(668214),
                g = n(257166),
                E = n(205253),
                Z = n(601576);
            const y = (0, _.Z)()
                    .propsFromState(() => ({ deviceFetchStatus: g.selectFetchStatus, primaryEmail: g.selectFirstEmail }))
                    .propsFromActions(() => ({ addToast: Z.fz, createDataDownload: E.fm, fetchDevices: g.fetchDevices }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "request_data" }),
                b = c().d3310e49,
                S = c().ib03e8c8,
                w = c().abedd45c,
                A = c().abedd45c,
                D = c().g49741e8,
                P = c().dc370a0c;
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { primaryEmail: e } = this.props;
                            return r.createElement("div", null, r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(s.ZP, null, e ? b({ primaryEmail: e }) : S)), r.createElement(a.Z, { onClick: this._handleRequestDataClick, role: "button", style: [f.Z.cursor, u.Z.viewItem] }, r.createElement(s.ZP, { align: "center", color: "link" }, e ? A : D)));
                        }),
                        (this._handleRequestDataClick = () => {
                            const { addToast: e, createDataDownload: t, primaryEmail: n } = this.props;
                            n ? (this._scribeAction("email"), t().then(() => e({ text: P }))) : (this._scribeAction("download"), window.open((0, o.ju)("https://x.com/account/personalization/download_your_data.pdf"), "_blank"));
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
                    return r.createElement(h.Z, null, r.createElement(p.Z, { location: t, title: w }, r.createElement(m.Z, null, this.isLoggedIn ? r.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleFetchDevices, render: this._render }) : this._render())));
                }
            }
            C.contextType = d.rC;
            const T = y(C);
        },
        876634: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardTailoredAudiencesScreen: () => L, default: () => F });
            n(136728);
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(242454),
                c = n(190286),
                l = n(111677),
                d = n.n(l),
                h = n(443781),
                m = n(652904),
                p = n(829824),
                u = n(609848),
                f = n(264922),
                _ = n(342453),
                g = n(401388),
                E = n(71620),
                Z = n(668214),
                y = n(257166),
                b = n(205253),
                S = n(601576),
                w = n(919022),
                A = n(312771);
            const D = (e, t) => {
                    const n = w.ZP.selectViewerUser(e),
                        r = (0, g.Z)(n) ? A.ZP.LOADED : y.selectFetchStatus(e);
                    return (0, A.h1)(b.qu(e), b.I3(e), r);
                },
                P = (0, Z.Z)()
                    .propsFromState(() => ({ data: b.yA, fetchStatus: D, preferences: b.LP, primaryEmail: y.selectFirstEmail }))
                    .propsFromActions(() => ({ addToast: S.fz, createAudienceDownload: b.Rh, createLocalApiErrorHandler: (0, E.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_TAILORED_AUDIENCES_SCREEN"), fetchData: b.nJ, fetchDevices: y.fetchDevices, fetchPreferences: b.CP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "tailored_audiences" }),
                C = { headline: d().hf9c2caa, text: d().c29b7971, confirmButtonLabel: d().b9e1cf02 },
                T = d().da202f9a,
                I = d().a8276fac,
                x = d().g7912a84,
                v = d().d6104de0,
                k = (0, s.ju)("https://support.x.com/articles/20170405");
            class L extends r.Component {
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
                            return r.createElement("div", null, r.createElement(a.Z, { style: [_.Z.infoItem, _.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, r.createElement(d().I18NFormatMessage, { $i18n: "a97ef88f" }, r.createElement(o.ZP, { link: k }, d().ed8c03f5)))), r.createElement(a.Z, { style: [_.Z.infoItem, _.Z.bottomBorder] }, r.createElement(o.ZP, null, r.createElement(d().I18NFormatMessage, { $i18n: "f451c521" }, r.createElement("strong", null, d().e1a4daac({ num_audiences: e.num_audiences })), r.createElement("strong", null, d().acb25e32({ num_advertisers: e.num_advertisers }))))), r.createElement(a.Z, { style: [_.Z.infoItem, n && _.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, v)), n ? r.createElement(i.Z, { color: "primary", label: I, onPress: this._handleRequestDataClick }) : null, this.state.showEmailConfirmation && r.createElement(c.Z, { confirmButtonLabel: C.confirmButtonLabel, headline: C.headline, onCancel: this._handleCancelEmail, onConfirm: this._handleConfirmEmail, text: C.text({ primaryEmail: t }) }));
                        }),
                        (this._requestUserData = () => {
                            const { addToast: e, createAudienceDownload: t, primaryEmail: n } = this.props;
                            n ? (this._scribeAction("email"), t().then(() => e({ text: x }))) : (this._scribeAction("download"), window.open((0, s.ju)("https://x.com/account/personalization/download_advertiser_list.pdf"), "_blank"));
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
                    return r.createElement(m.Z, null, r.createElement(f.Z, { location: t, title: T }, r.createElement(p.Z, null, r.createElement(u.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            L.contextType = h.rC;
            const F = P(L);
        },
        380052: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardTwitterInterestsScreen: () => F, default: () => B });
            var r = n(202784),
                a = n(325686),
                s = n(954110),
                o = n(731708),
                i = n(108362),
                c = n(111677),
                l = n.n(c),
                d = n(370751),
                h = n(290402),
                m = n(507651),
                p = n(443781),
                u = n(652904),
                f = n(829824),
                _ = n(170069),
                g = n(264922),
                E = n(267966),
                Z = n(342453),
                y = n(71620),
                b = n(668214),
                S = n(205253),
                w = n(312771);
            const A = (e, t) => (0, w.h1)(S.LY(e), S.I3(e)),
                D = (0, b.Z)()
                    .propsFromState(() => ({ fetchStatus: A, interests: S.fO, preferences: S.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_TWITTER_INTERESTS_SCREEN"), fetchInterests: S.lo, fetchPreferences: S.CP, updateInterest: S.q_ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "twitter_interests" }),
                P = l().h1f01a24,
                C = l().c07b4316,
                T = l().e97196fe,
                I = l().ja0f971c,
                x = l().gd1ce494,
                v = l().e9f1fbcc,
                k = l().cf0daa24,
                L = "/settings/your_twitter_data/twitter_interests/interest";
            class F extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTabs = () => {
                            if (!this._hasKnownInterests()) return null;
                            const e = [
                                { to: "/settings/your_twitter_data/twitter_interests", key: T, label: T },
                                { to: L, key: C, label: C },
                            ];
                            return r.createElement(m.Z, { "aria-label": P, links: e });
                        }),
                        (this._render = () => {
                            const {
                                location: { pathname: e },
                            } = this.props;
                            return e !== L && this._hasKnownInterests() ? this._renderKnownInterests() : this._renderInterests();
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
                                r.createElement(_.Z, null, I),
                                n.map((e, t) => r.createElement(s.Z, { checked: !a.has(e.id), key: e.id, label: e.display_name, name: e.id.toString(), onChange: this._handleUpdateInterest })),
                                o ? this._renderMessage(v, k) : null,
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
                                r.createElement(_.Z, null, x),
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
                    return r.createElement(u.Z, null, r.createElement(g.Z, { location: t, secondaryBar: this._renderTabs(), title: P }, r.createElement(f.Z, null, r.createElement(i.Z, null, r.createElement(h.Z, { fetchStatus: e, onRequestRetry: this._handleFetchData, render: this._render })))));
                }
            }
            F.contextType = p.rC;
            const B = D(F);
        },
        791508: (e, t, n) => {
            n.r(t), n.d(t, { default: () => A });
            var r = n(202784),
                a = n(325686),
                s = n(108362),
                o = n(779610),
                i = n(392237),
                c = n(111677),
                l = n.n(c),
                d = n(443781),
                h = n(652904),
                m = n(293115),
                p = n(829824),
                u = n(264922);
            const f = l().j7ad754a,
                _ = l().i5f7b6b8,
                g = l().i6b3f59a,
                E = l().g1aced04,
                Z = l().j9d10268,
                y = l().gbde3534,
                b = l().gee8110e,
                S = { page: "settings", section: "transparency" },
                w = i.default.create((e) => ({ backgroundRoot: { flexGrow: 1, backgroundColor: e.colors.gray50 }, contentRoot: { backgroundColor: e.colors.cellBackground, flexGrow: 1, justifyContent: "flex-start" } })),
                A = function (e) {
                    const { location: t } = e,
                        { viewerUserId: n } = r.useContext(d.rC),
                        i = !!n;
                    return r.createElement(m.nO, { namespace: S }, r.createElement(h.Z, null, r.createElement(u.Z, { location: t, title: f }, r.createElement(p.Z, null, r.createElement(a.Z, { style: w.backgroundRoot }, r.createElement(s.Z, { style: w.contentRoot }, r.createElement(o.Z, { label: _, link: "/settings/your_twitter_data/account" }), i ? r.createElement(o.Z, { label: g, link: "/settings/your_twitter_data/account_history" }) : null, r.createElement(o.Z, { label: E, link: "/settings/your_twitter_data/devices" }), i ? r.createElement(o.Z, { label: Z, link: "/settings/your_twitter_data/account_activity" }) : null, r.createElement(o.Z, { label: y, link: "/settings/your_twitter_data/ads" }), r.createElement(o.Z, { label: b, link: i ? "/settings/download_your_data" : "/settings/your_twitter_data/request_data" })))))));
                };
        },
        342453: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(392237);
            const a = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                s = r.default.create((e) => ({ labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }, helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, titleCase: { textTransform: "capitalize" }, floatingLink: { paddingStart: e.spaces.space20 }, infoItem: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, locationInfo: { alignItems: "center", flexDirection: "row", width: "100%" }, locationIcon: { marginEnd: e.spaces.space12 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space20 }, noLeftPadding: { paddingStart: 0 }, narrowButtonRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { ...a(e) }, narrowButton: { alignSelf: "center", marginStart: e.spaces.space12, paddingStart: e.spaces.space20 }, helpTextExtraPadded: { paddingTop: e.spaces.space12 }, featureDisabledCallout: { paddingHorizontal: 70, paddingTop: e.spaces.space48 }, featureDisabledTitle: { paddingBottom: e.spaces.space4 }, cursor: { cursor: "pointer" } }));
        },
        829824: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                a = n(99107),
                s = n(420740),
                o = n(731708),
                i = n(111677),
                c = n.n(i),
                l = n(443781),
                d = n(918621),
                h = n(725405),
                m = n(125363),
                p = n(390387);
            const u = c().ffeb836a,
                f = c().f2fb9746;
            function _() {
                const e = (0, h.Z)();
                return (
                    r.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    r.createElement(s.Z, { title: u }, r.createElement(o.ZP, null, f))
                );
            }
            function g(e) {
                const { featureSwitches: t } = r.useContext(l.rC),
                    n = (0, m.v9)(p.Qb),
                    s = (0, d.Xh)(a.b7, t);
                return n || s ? e.children : r.createElement(_, null);
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
        609848: (e, t, n) => {
            n.d(t, { Z: () => F });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(688715),
                i = n(844685),
                c = n(855488),
                l = n(108362),
                d = n(154003),
                h = n(392237),
                m = n(111677),
                p = n.n(m),
                u = n(615656),
                f = n(290402),
                _ = n(443781),
                g = n(500002),
                E = n(312771),
                Z = n(615027),
                y = n(267966),
                b = n(71620),
                S = n(668214),
                w = n(673110);
            const A = (0, S.Z)()
                    .propsFromState(() => ({ verifyPasswordFetchStatus: w.UD }))
                    .propsFromActions(() => ({ verifyPassword: w.Gv, createLocalApiErrorHandler: (0, b.zr)("PASSWORD_GATEWAY") })),
                D = p().fe36fe10,
                P = p().dec3c9b8,
                C = p().hccd9dbe,
                T = p().d1091f50,
                I = p().g9677c6e,
                x = p().c8cb0b4c;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { password: "" }),
                        (this._passwordlessSsoEnabled = this.context.featureSwitches.isTrue("responsive_web_passwordless_sso_enabled")),
                        (this._handlePasswordSubmit = () => {
                            const { createLocalApiErrorHandler: e, verifyPassword: t } = this.props,
                                { password: n } = this.state;
                            "" !== n &&
                                t(n)
                                    .then(() => {
                                        this.setState({ password: "", verificationRequired: !1 }), this._makeFetch();
                                    })
                                    .catch(e({ [u.ZP.InvalidCurrentPassword]: { customAction: () => this.setState({ passwordError: x }) }, showToast: !0 }));
                        }),
                        (this._makeFetch = () => {
                            const { createLocalApiErrorHandler: e, fetch: t } = this.props;
                            t()
                                .then(() => {
                                    this.setState({ verificationRequired: !1 });
                                })
                                .catch(
                                    e({
                                        [u.ZP.PasswordVerificationRequired]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        showToast: !1,
                                    }),
                                );
                        }),
                        (this._handleFetch = this._makeFetch),
                        (this._handleChange = (e) => {
                            this.setState({ passwordError: void 0, password: e.target.value });
                        });
                }
                componentDidMount() {
                    this._makeFetch();
                }
                componentDidUpdate(e) {
                    e.fetchStatus === E.ZP.LOADED && this.props.fetchStatus === E.ZP.NONE && this._makeFetch();
                }
                _renderPasswordPrompt() {
                    const { titleHeader: e } = this.props,
                        { passwordError: t } = this.state,
                        n = r.createElement(s.ZP, { link: { pathname: (0, o.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, T);
                    return r.createElement(r.Fragment, null, e ? r.createElement(i.Z, { text: e }) : null, r.createElement(a.Z, { style: [y.Z.viewItem, y.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, C)), r.createElement(c.Z, { errorText: t, helperText: n, invalid: !!t, label: P, name: "current_password", onChange: this._handleChange, onSubmitEditing: this._handlePasswordSubmit, type: "password", value: this.state.password }), r.createElement(l.Z, { style: k.buttonContainer }, r.createElement(d.ZP, { disabled: !1, onPress: this._handlePasswordSubmit, style: k.button, type: "brandFilled" }, I)));
                }
                render() {
                    const { fetchStatus: e, location: t, render: n } = this.props,
                        { verificationRequired: a } = this.state,
                        s = e === E.ZP.FAILED && a;
                    return r.createElement(r.Fragment, null, s ? (this._passwordlessSsoEnabled ? r.createElement(Z.Z, { to: { pathname: "/i/flow/verify_account_ownership", state: { input: { requested_variant: t.pathname } } } }) : this._renderPasswordPrompt()) : r.createElement(f.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: n }));
                }
            }
            (v.contextType = _.rC), (v.defaultProps = { titleHeader: D });
            const k = h.default.create((e) => ({ buttonContainer: { flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingBottom: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                L = A(v),
                F = (0, g.ZP)(L);
        },
        267966: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(392237);
            const a = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                s = r.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...a(e) } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsTransparency-e019dbda.934cb55a.js.map
