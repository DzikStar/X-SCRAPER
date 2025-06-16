"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsTransparency"],
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: o, confirmationSheetHeadline: i, confirmationSheetText: l, label: c } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(a.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? r.createElement(s.Z, { confirmButtonLabel: n, confirmButtonType: o, headline: i, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: l }) : null);
                }
            }
            o.defaultProps = { color: "red500", align: "center" };
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                a = n(202784),
                s = n(107267),
                o = n(403556),
                i = n(791632);
            const l = (e) => {
                    const t = (0, s.useHistory)(),
                        { isCompact: n, ...l } = e;
                    return a.createElement(o.Z, (0, r.Z)({}, l, { isCompact: n || (0, i.HD)(t) }));
                },
                c = a.memo(l);
        },
        159127: (e, t, n) => {
            n.r(t), n.d(t, { AccountActivityScreen: () => u, default: () => g });
            var r = n(202784),
                a = n(779610),
                s = n(111677),
                o = n.n(s),
                i = n(652904),
                l = n(293115),
                c = n(264922);
            const d = o().j9d10268,
                h = o().a5f32aa2,
                p = o().daef29b8,
                m = { page: "settings", section: "your_twitter_data", component: "account_activity" },
                u = ({ location: e }) => r.createElement(l.nO, { namespace: m }, r.createElement(i.Z, null, r.createElement(c.Z, { location: e, title: d }, r.createElement(a.Z, { label: h, link: "/settings/blocked/all" }), r.createElement(a.Z, { label: p, link: "/settings/muted/all" })))),
                g = u;
        },
        690423: (e, t, n) => {
            n.r(t), n.d(t, { AccountHistoryScreen: () => b, default: () => Z });
            var r = n(202784),
                a = n(779610),
                s = n(111677),
                o = n.n(s),
                i = n(443781),
                l = n(652904),
                c = n(264922),
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
                y = o().cbd2ef59;
            class b extends r.Component {
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
                    return r.createElement(l.Z, null, r.createElement(c.Z, { location: e, title: g }, r.createElement(a.Z, { description: s > 0 ? _({ count: s }) : null, label: f, link: "/settings/your_twitter_data/login_history" }), r.createElement(a.Z, { description: n > 0 ? y({ count: n }) : null, label: E, link: "/settings/your_twitter_data/locations" })));
                }
            }
            b.contextType = i.rC;
            const Z = u(b);
        },
        747944: (e, t, n) => {
            n.r(t), n.d(t, { AdsScreen: () => b, default: () => Z });
            var r = n(202784),
                a = n(779610),
                s = n(111677),
                o = n.n(s),
                i = n(443781),
                l = n(652904),
                c = n(264922),
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
                y = o().f00d0d03;
            class b extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.render = () => {
                            const { location: e, personalizationData: t } = this.props,
                                n = t.tailored_audience_summary ? t.tailored_audience_summary.num_advertisers : 0,
                                s = t.tailored_audience_summary ? t.tailored_audience_summary.num_audiences : 0;
                            return r.createElement(l.Z, null, r.createElement(c.Z, { location: e, title: u }, r.createElement(a.Z, { description: t.tailored_audience_summary ? y({ count: t.num_twitter_interests }) : null, label: f, link: "/settings/your_twitter_data/twitter_interests" }), r.createElement(a.Z, { description: t.tailored_audience_summary ? y({ count: t.num_partner_interests }) : null, label: g, link: "/settings/your_twitter_data/partner_interests" }), r.createElement(a.Z, { description: t.tailored_audience_summary ? E({ audienceCount: s, advertiserCount: n }) : null, label: _, link: "/settings/your_twitter_data/audiences" })));
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
            b.contextType = i.rC;
            const Z = m(b);
        },
        340090: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardAgeScreen: () => I, default: () => k });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(976145),
                i = n(954110),
                l = n(111677),
                c = n.n(l),
                d = n(443781),
                h = n(652904),
                p = n(829824),
                m = n(609848),
                u = n(264922),
                g = n(267966),
                f = n(342453),
                _ = n(71620),
                E = n(668214),
                y = n(205253),
                b = n(312771);
            const Z = (e, t) => (0, b.h1)(y.qu(e), y.I3(e)),
                S = (0, E.Z)()
                    .propsFromState(() => ({ ages: y.LJ, fetchStatus: Z, personalizationPreferences: y.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_AGE_SCREEN"), fetchData: y.nJ, fetchPreferences: y.CP, updateSettings: y.VP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "age" }),
                C = c().bf96fda4,
                x = r.createElement(c().I18NFormatMessage, { $i18n: "i1e24825" }, r.createElement(s.ZP, { link: "https://help.x.com/safety-and-security/birthday-visibility-settings" }, c().ea522535)),
                A = r.createElement(c().I18NFormatMessage, { $i18n: "a200fc71" }, r.createElement(s.ZP, { link: "/settings/profile" }, c().hf5ca8f8)),
                w = c().fe1fc83e,
                D = c().bf9c74d0,
                T = c().e9f1fbcc,
                P = c().cf0daa24;
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._combinedFetches = () => {
                            const { fetchData: e, fetchPreferences: t } = this.props;
                            return Promise.all([e(), t()]);
                        }),
                        (this._render = () => r.createElement("div", null, this._renderAges(), this.isLoggedIn ? r.createElement(a.Z, { style: f.Z.infoItem }, r.createElement(s.ZP, { color: "gray700" }, A)) : this._renderUseAge())),
                        (this._renderAges = () => {
                            const { ages: e } = this.props,
                                t = (0, o.Z)(
                                    e.map((e) => ("string" == typeof e ? e : e.display)),
                                    !0,
                                );
                            return t ? r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(s.ZP, null, t)) : this._renderMessage(T, P);
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: [g.Z.calloutTextBlock, g.Z.bottomBorder] }, r.createElement(s.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(s.ZP, { align: "center", color: "gray700", style: f.Z.helpText }, t) : null)),
                        (this._renderUseAge = () => {
                            const { personalizationPreferences: e } = this.props,
                                t = e && e.age_preferences && e.age_preferences.use_age_for_personalization;
                            return r.createElement(i.Z, { checked: !t, key: "use_age_for_personalization", label: D, name: "use_age_for_personalization", onChange: this._handleBooleanChanged });
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
                    return r.createElement(h.Z, null, r.createElement(u.Z, { location: t, title: C }, r.createElement(p.Z, null, r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, this.isLoggedIn ? x : w)), r.createElement(m.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            I.contextType = d.rC;
            const k = S(I);
        },
        546927: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardDevicesScreen: () => $, default: () => q });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(844685),
                l = n(420412),
                c = n(111677),
                d = n.n(c),
                h = n(443781),
                p = n(652904),
                m = n(829824),
                u = n(609848),
                g = n(264922),
                f = n(267966),
                _ = n(342453),
                E = n(71620),
                y = n(668214),
                b = n(205253),
                Z = n(312771);
            const S = (e, t) => (0, Z.h1)(b.qu(e), b.I3(e)),
                C = (0, y.Z)()
                    .propsFromState(() => ({ data: b.yA, fetchStatus: S, settings: b.kQ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_DEVICES_SCREEN"), fetchData: b.nJ, fetchPreferences: b.CP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "devices" }),
                x = "linkedBrowsersView",
                A = "linkedMobileDevicesView",
                w = "linkedEmailAddressesView",
                D = "helpText",
                T = d().hc36dbba,
                P = d().j4fa776e,
                I = d().i7acdb36,
                k = d().c112dfc8,
                v = d().jd8607ba,
                L = d().ea4f6c9e,
                R = d().d750b93f,
                B = d().a9783602,
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
                        { data: s, fetchData: c, fetchPreferences: E, fetchStatus: y, location: b, settings: Z } = e;
                    r.useEffect(() => {
                        E();
                    }, [E]);
                    const { known_devices: S = {} } = s,
                        { allowDeviceAccess: C } = Z,
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
                            { location: b, title: T },
                            r.createElement(
                                m.Z,
                                null,
                                r.createElement(u.Z, {
                                    fetch: () => Promise.all([c(), E()]),
                                    fetchStatus: y,
                                    render: () => {
                                        const e = S.phone || U,
                                            i = S.tablet || U,
                                            c = S.desktop || U,
                                            h = e.length > 0 && i.length > 0 && c.length > 0,
                                            p = { supportLink: r.createElement(o.ZP, { link: G }) };
                                        return r.createElement(
                                            a.Z,
                                            null,
                                            !n && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [f.Z.infoText, f.Z.bottomBorder] }, r.createElement(d().I18NFormatMessage, { $i18n: "cbcb2413" }, r.cloneElement(p.supportLink, null, d().df3e137b))),
                                            n && h && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [f.Z.infoText, f.Z.bottomBorder] }, r.createElement(d().I18NFormatMessage, { $i18n: "e21b623d" }, r.cloneElement(p.supportLink, null, d().d1597ccb))),
                                            q(e, P, 0 === i.length && 0 === c.length),
                                            q(i, I, 0 === c.length),
                                            q(c, k, !0),
                                            r.createElement(l.Z, null),
                                            t.viewerUserId && r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: [f.Z.infoText, C ? f.Z.bottomBorder : null] }, r.createElement(d().I18NFormatMessage, { $i18n: "i4d58f43" }, r.cloneElement(p.supportLink, null, d().c1b03a07))),
                                            C
                                                ? (() => {
                                                      const e = { offTwitterActivitySettingLink: r.createElement(o.ZP, { link: z }) },
                                                          t = r.createElement(o.ZP, { color: "gray700", style: [_.Z.helpText, _.Z.helpTextExtraPadded] }, $.isTrue("ucpd_enabled") ? r.createElement(d().I18NFormatMessage, { $i18n: "b78e30fd", testID: D }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().f0f72665)) : r.createElement(d().I18NFormatMessage, { $i18n: "bb593021", testID: D }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().d33b4e5b)));
                                                      return r.createElement(a.Z, null, s.associated_devices ? r.createElement(a.Z, { style: [_.Z.infoItem, _.Z.bottomBorder], testID: x }, r.createElement(o.ZP, { weight: "bold" }, L), r.createElement(o.ZP, { color: "gray700", style: _.Z.helpText }, R({ count: s.associated_devices.num_browsers })), t) : null, s.associated_devices ? r.createElement(a.Z, { style: [_.Z.infoItem, _.Z.bottomBorder], testID: A }, r.createElement(o.ZP, { weight: "bold" }, B), r.createElement(o.ZP, { color: "gray700", style: _.Z.helpText }, F({ count: s.associated_devices.num_devices })), t) : null, r.createElement(a.Z, { style: _.Z.infoItem, testID: w }, r.createElement(o.ZP, { weight: "bold" }, H), r.createElement(o.ZP, { color: "gray700", style: [_.Z.helpText, _.Z.helpTextExtraPadded] }, r.createElement(d().I18NFormatMessage, { $i18n: "h60f45ef", testID: D }, r.cloneElement(e.offTwitterActivitySettingLink, null, d().c4668d4f)))));
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
                l = n(855488),
                c = n(954110),
                d = n(111677),
                h = n.n(d),
                p = n(443781),
                m = n(652904),
                u = n(312771),
                g = n(829824),
                f = n(609848),
                _ = n(264922),
                E = n(267966),
                y = n(342453),
                b = n(71620),
                Z = n(668214),
                S = n(205253),
                C = n(601576);
            const x = (e, t) => (0, u.h1)(S.qu(e), S.I3(e)),
                A = (0, Z.Z)()
                    .propsFromState(() => ({ fetchStatus: x, gender: S.VU, personalizationPreferences: S.LP }))
                    .propsFromActions(() => ({ addToast: C.fz, createLocalApiErrorHandler: (0, b.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_GENDER_SCREEN"), fetchData: S.nJ, fetchPreferences: S.CP, updateGender: S.Bm, updateSettings: S.VP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "gender" }),
                w = h().a8d0108e,
                D = "custom",
                T = h().a8d0108e,
                P = h().fbf0e61e,
                I = h().de323650,
                k = h().b6ab31be,
                v = h().b4568a3a,
                L = h().c0be743e,
                R = h().i2209530,
                B = [
                    { label: I, value: "female" },
                    { label: k, value: "male" },
                    { label: v, value: D },
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
                        (this._render = () => a.createElement("div", null, a.createElement(s.Z, { style: [y.Z.infoItem, y.Z.bottomBorder] }, a.createElement(o.ZP, { color: "gray700" }, this.isLoggedIn ? P : F)), this.isLoggedIn ? this._renderGenderSelector() : this._renderLoggedOut())),
                        (this._renderMessage = (e, t) => a.createElement(s.Z, { style: E.Z.calloutTextBlock }, a.createElement(o.ZP, { align: "center", size: "headline1" }, e), t ? a.createElement(o.ZP, { align: "center", color: "gray700", style: y.Z.helpText }, t) : null)),
                        (this._handleItemChanged = (e, t) => {
                            const n = t === D;
                            this.setState({ self_identify: n, gender: n ? null : t });
                        }),
                        (this._handleCustomGenderUpdate = (e) => {
                            const t = e.target.value;
                            this.setState({ self_identify: !0, gender: t });
                        }),
                        (this._handleSaveGender = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, updateGender: n } = this.props,
                                r = this.state.self_identify ? D : this.state.gender || D;
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
                        (this.state = { self_identify: this.props.gender.type === D, gender: this.props.gender.value });
                }
                UNSAFE_componentWillMount() {
                    (this.isLoggedIn = !!this.context.viewerUserId), this.props.fetchPreferences();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props,
                        n = e === u.ZP.LOADED && this.isLoggedIn ? { onSubmit: this._handleSaveGender, submitDisabled: !this.isGenderValid, submitLabel: R } : void 0;
                    return a.createElement(m.Z, null, a.createElement(_.Z, (0, r.Z)({ location: t, title: T }, n), a.createElement(g.Z, null, a.createElement(f.Z, { fetch: this.combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
                _renderGenderSelector() {
                    const { gender: e } = this.props;
                    return a.createElement(s.Z, null, a.createElement(i.Z, { name: "gender", onChange: this._handleItemChanged, options: B, value: this.selectedGender }), this.selectedGender === D ? a.createElement(l.Z, { defaultValue: e.value && e.type === D ? e.value : "", label: w, maxLength: 30, name: "genderOther", onChange: this._handleCustomGenderUpdate, type: "text" }) : null);
                }
                _renderLoggedOut() {
                    const { personalizationPreferences: e } = this.props,
                        t = e.gender_preferences && e.gender_preferences.use_gender_for_personalization;
                    return a.createElement(s.Z, null, this.selectedGender ? a.createElement(s.Z, { style: [y.Z.infoItem, y.Z.bottomBorder] }, a.createElement(o.ZP, null, this.props.gender.value)) : this._renderMessage(z, H), a.createElement(c.Z, { checked: !t, key: "use_gender_for_personalization", label: N, name: "use_gender_for_personalization", onChange: this._handleBooleanChanged }));
                }
                get selectedGender() {
                    const { gender: e } = this.props;
                    return this.state.self_identify ? D : this.state.gender ? this.state.gender : e && e.type;
                }
                get isGenderValid() {
                    const { gender: e } = this.props;
                    return this.state.gender && this.state.gender !== e.value;
                }
            }
            M.contextType = p.rC;
            const G = A(M);
        },
        349154: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLanguageScreen: () => A, default: () => w });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(954110),
                i = n(111677),
                l = n.n(i),
                c = n(652904),
                d = n(829824),
                h = n(609848),
                p = n(264922),
                m = n(267966),
                u = n(342453),
                g = n(71620),
                f = n(668214),
                _ = n(205253),
                E = n(312771);
            const y = (0, f.Z)()
                    .propsFromState(() => ({ data: _.yA, dataFetchStatus: _.qu, preferences: _.LP, preferencesFetchStatus: _.I3 }))
                    .adjustStateProps(({ dataFetchStatus: e, preferencesFetchStatus: t, ...n }) => ({ ...n, fetchStatus: (0, E.h1)(e, t) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_LANGUAGE_SCREEN"), fetchData: _.nJ, fetchPreferences: _.CP, updateLanguage: _.BF }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "language" }),
                b = l().a03dacaa,
                Z = l().b056d9dc,
                S = l().h68bc23c,
                C = l().e9f1fbcc,
                x = l().cf0daa24;
            class A extends r.Component {
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
                                l = t.language_preferences && t.language_preferences.disabled_languages;
                            return r.createElement(
                                "div",
                                null,
                                r.createElement(a.Z, { style: [u.Z.infoItem, u.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, Z)),
                                n ? r.createElement(a.Z, { style: [u.Z.infoItem, i.length > 0 && u.Z.bottomBorder] }, r.createElement(s.ZP, null, n.display)) : r.createElement(a.Z, { style: i.length > 0 && u.Z.bottomBorder }, this._renderMessage(C, x)),
                                i.length > 0 ? r.createElement(a.Z, { style: [u.Z.infoItem, u.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, S)) : null,
                                i.map((e, t) => r.createElement(o.Z, { checked: !l || -1 === l.indexOf(e.key), key: e.key, label: e.display, name: e.key, onChange: this._handleUpdateLanguage })),
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
                    return r.createElement(c.Z, null, r.createElement(p.Z, { location: t, title: b }, r.createElement(d.Z, null, r.createElement(h.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            const w = y(A);
        },
        821853: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLocationsScreen: () => P, default: () => I });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(909377),
                i = n(111677),
                l = n.n(i),
                c = n(264171),
                d = n(947135),
                h = n(652904),
                p = n(609848),
                m = n(264922),
                u = n(267966),
                g = n(342453),
                f = n(71620),
                _ = n(668214),
                E = n(205253),
                y = n(601576);
            const b = (0, _.Z)()
                    .propsFromState(() => ({ fetchStatus: E.qu, personalizationData: E.yA, settings: E.kQ }))
                    .propsFromActions(() => ({ addToast: y.fz, clearLocations: E.wG, createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_LOCATION_SCREEN"), fetchData: E.nJ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "locations" }),
                Z = l().d9138166,
                S = l().j31a1aa0,
                C = l().e68b09b4,
                x = { headline: l().ddefdd1c, text: l().hea740ac, confirmButtonLabel: l().e68b09b4 },
                A = l().a26e0d52,
                w = l().ae415fd2,
                D = r.createElement(l().I18NFormatMessage, { $i18n: "a1fdeb45" }, r.createElement(s.ZP, { link: "/settings/location_information" }, l().b9d98dec)),
                T = l().he447966;
            class P extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleDeleteLocation = () => {
                            const { addToast: e, clearLocations: t, createLocalApiErrorHandler: n } = this.props;
                            this._scribeAction("clear"), t().then(() => e({ text: A }), n({ showToast: !0 }));
                        }),
                        (this._render = () => {
                            const { settings: e } = this.props,
                                t = e.allowLocationHistoryUse;
                            return r.createElement(h.Z, null, r.createElement("div", null, r.createElement(a.Z, { style: [g.Z.infoItem, g.Z.bottomBorder] }, r.createElement(s.ZP, { color: "gray700" }, S)), t ? this._renderLocations() : this._renderMessage(w, D)));
                        }),
                        (this._renderLocations = () => {
                            const { personalizationData: e } = this.props,
                                t = e.location_history;
                            return r.createElement(a.Z, null, t && t.map((e, t) => r.createElement(a.Z, { key: `loc-'${t}`, style: [g.Z.infoItem, g.Z.locationInfo, g.Z.bottomBorder] }, r.createElement(o.Z, { Icon: c.default, color: "neutral", size: "xLarge", style: g.Z.locationIcon }), r.createElement(s.ZP, null, e))), t && t.length ? r.createElement(d.Z, { confirmationSheetConfirmButtonLabel: x.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: x.headline, confirmationSheetText: x.text, label: C, onConfirmationSheetConfirm: this._handleDeleteLocation, withBottomBorder: !1 }) : this._renderMessage(T));
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: u.Z.calloutTextBlock }, r.createElement(s.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(s.ZP, { align: "center", color: "gray700", style: g.Z.helpText }, t) : null)),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ action: e });
                        });
                }
                render() {
                    const { fetchData: e, fetchStatus: t, location: n } = this.props;
                    return r.createElement(m.Z, { location: n, title: Z }, r.createElement(p.Z, { fetch: e, fetchStatus: t, render: () => this._render(), titleHeader: Z }));
                }
            }
            const I = b(P);
        },
        933015: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardLoginHistoryScreen: () => C, default: () => x });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(943401),
                l = n(111677),
                c = n.n(l),
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
                E = c().b523ecc6,
                y = c().e27e4fce,
                b = c().d0a77c9b,
                Z = (0, s.ju)("https://support.x.com/articles/20172679"),
                S = r.createElement(c().I18NFormatMessage, { $i18n: "hcb3ad67" }, r.createElement(o.ZP, { link: "/settings/connected_apps" }, c().ib55eb6b), r.createElement(o.ZP, { link: Z }, c().e5a4a539));
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { personalizationData: e } = this.props,
                                t = e.login_history;
                            return r.createElement(r.Fragment, null, t && t.map((e, t) => r.createElement(a.Z, { key: `hist-'${t}`, style: [m.Z.infoItem, m.Z.bottomBorder] }, r.createElement(o.ZP, null, e.app_name), r.createElement(o.ZP, { color: "gray700", style: m.Z.helpText }, b(new Date(e.time))), r.createElement(o.ZP, { color: "gray700", style: m.Z.helpText }, e.ip, " (", e.country ? e.country : y, ")"))));
                        });
                }
                render() {
                    const { fetchData: e, fetchDataStatus: t, location: n } = this.props;
                    return r.createElement(d.Z, null, r.createElement(p.Z, { location: n, title: E }, r.createElement(i.Z, { description: S }), r.createElement(h.Z, { fetch: e, fetchStatus: t, render: () => this._render() })));
                }
            }
            const x = _(C);
        },
        515321: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardPartnerInterestsScreen: () => D, default: () => T });
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(954110),
                l = n(111677),
                c = n.n(l),
                d = n(290402),
                h = n(652904),
                p = n(829824),
                m = n(264922),
                u = n(267966),
                g = n(342453),
                f = n(71620),
                _ = n(668214),
                E = n(205253),
                y = n(312771);
            const b = (e, t) => (0, y.h1)(E.Tg(e), E.I3(e)),
                Z = (0, _.Z)()
                    .propsFromState(() => ({ fetchStatus: b, interests: E.tC, preferences: E.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_PARTNER_INTERESTS_SCREEN"), fetchInterests: E.sH, fetchPreferences: E.CP, updateInterest: E.q_ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "partner_interests" }),
                S = c().a54826c6,
                C = c().gc8f2e14,
                x = c().e9f1fbcc,
                A = c().cf0daa24,
                w = (0, s.ju)("https://support.x.com/articles/20175258");
            class D extends r.Component {
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
                                r.createElement(a.Z, { style: [g.Z.infoItem, g.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, r.createElement(c().I18NFormatMessage, { $i18n: "adc26d49" }, r.createElement(o.ZP, { link: w }, c().e6dbe66b)))),
                                e.map((e) => r.createElement(i.Z, { checked: -1 === n.indexOf(e.id), key: e.id, label: e.display_name, name: e.id.toString(), onChange: this._handleUpdateInterest })),
                                0 === e.length ? this._renderMessage(x, A) : r.createElement(a.Z, { style: u.Z.calloutTextBlock }, r.createElement(o.ZP, { color: "gray700", style: g.Z.helpText }, C)),
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
            const T = Z(D);
        },
        546703: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardRequestDataScreen: () => D, default: () => T });
            var r = n(202784),
                a = n(325686),
                s = n(731708),
                o = n(688715),
                i = n(111677),
                l = n.n(i),
                c = n(290402),
                d = n(443781),
                h = n(652904),
                p = n(829824),
                m = n(264922),
                u = n(267966),
                g = n(342453),
                f = n(668214),
                _ = n(257166),
                E = n(205253),
                y = n(601576);
            const b = (0, f.Z)()
                    .propsFromState(() => ({ deviceFetchStatus: _.selectFetchStatus, primaryEmail: _.selectFirstEmail }))
                    .propsFromActions(() => ({ addToast: y.fz, createDataDownload: E.fm, fetchDevices: _.fetchDevices }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "request_data" }),
                Z = l().d3310e49,
                S = l().ib03e8c8,
                C = l().abedd45c,
                x = l().abedd45c,
                A = l().g49741e8,
                w = l().dc370a0c;
            class D extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { primaryEmail: e } = this.props;
                            return r.createElement("div", null, r.createElement(a.Z, { style: [g.Z.infoItem, g.Z.bottomBorder] }, r.createElement(s.ZP, null, e ? Z({ primaryEmail: e }) : S)), r.createElement(a.Z, { onClick: this._handleRequestDataClick, role: "button", style: [g.Z.cursor, u.Z.viewItem] }, r.createElement(s.ZP, { align: "center", color: "link" }, e ? x : A)));
                        }),
                        (this._handleRequestDataClick = () => {
                            const { addToast: e, createDataDownload: t, primaryEmail: n } = this.props;
                            n ? (this._scribeAction("email"), t().then(() => e({ text: w }))) : (this._scribeAction("download"), window.open((0, o.ju)("https://x.com/account/personalization/download_your_data.pdf"), "_blank"));
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
                    return r.createElement(h.Z, null, r.createElement(m.Z, { location: t, title: C }, r.createElement(p.Z, null, this.isLoggedIn ? r.createElement(c.Z, { fetchStatus: e, onRequestRetry: this._handleFetchDevices, render: this._render }) : this._render())));
                }
            }
            D.contextType = d.rC;
            const T = b(D);
        },
        876634: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardTailoredAudiencesScreen: () => L, default: () => R });
            n(136728);
            var r = n(202784),
                a = n(325686),
                s = n(688715),
                o = n(731708),
                i = n(242454),
                l = n(190286),
                c = n(111677),
                d = n.n(c),
                h = n(443781),
                p = n(652904),
                m = n(829824),
                u = n(609848),
                g = n(264922),
                f = n(342453),
                _ = n(401388),
                E = n(71620),
                y = n(668214),
                b = n(257166),
                Z = n(205253),
                S = n(601576),
                C = n(919022),
                x = n(312771);
            const A = (e, t) => {
                    const n = C.ZP.selectViewerUser(e),
                        r = (0, _.Z)(n) ? x.ZP.LOADED : b.selectFetchStatus(e);
                    return (0, x.h1)(Z.qu(e), Z.I3(e), r);
                },
                w = (0, y.Z)()
                    .propsFromState(() => ({ data: Z.yA, fetchStatus: A, preferences: Z.LP, primaryEmail: b.selectFirstEmail }))
                    .propsFromActions(() => ({ addToast: S.fz, createAudienceDownload: Z.Rh, createLocalApiErrorHandler: (0, E.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_TAILORED_AUDIENCES_SCREEN"), fetchData: Z.nJ, fetchDevices: b.fetchDevices, fetchPreferences: Z.CP }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "tailored_audiences" }),
                D = { headline: d().hf9c2caa, text: d().c29b7971, confirmButtonLabel: d().b9e1cf02 },
                T = d().da202f9a,
                P = d().a8276fac,
                I = d().g7912a84,
                k = d().d6104de0,
                v = (0, s.ju)("https://support.x.com/articles/20170405");
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
                            return r.createElement("div", null, r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, r.createElement(d().I18NFormatMessage, { $i18n: "a97ef88f" }, r.createElement(o.ZP, { link: v }, d().ed8c03f5)))), r.createElement(a.Z, { style: [f.Z.infoItem, f.Z.bottomBorder] }, r.createElement(o.ZP, null, r.createElement(d().I18NFormatMessage, { $i18n: "f451c521" }, r.createElement("strong", null, d().e1a4daac({ num_audiences: e.num_audiences })), r.createElement("strong", null, d().acb25e32({ num_advertisers: e.num_advertisers }))))), r.createElement(a.Z, { style: [f.Z.infoItem, n && f.Z.bottomBorder] }, r.createElement(o.ZP, { color: "gray700" }, k)), n ? r.createElement(i.Z, { color: "primary", label: P, onPress: this._handleRequestDataClick }) : null, this.state.showEmailConfirmation && r.createElement(l.Z, { confirmButtonLabel: D.confirmButtonLabel, headline: D.headline, onCancel: this._handleCancelEmail, onConfirm: this._handleConfirmEmail, text: D.text({ primaryEmail: t }) }));
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
                    return r.createElement(p.Z, null, r.createElement(g.Z, { location: t, title: T }, r.createElement(m.Z, null, r.createElement(u.Z, { fetch: this._combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            L.contextType = h.rC;
            const R = w(L);
        },
        380052: (e, t, n) => {
            n.r(t), n.d(t, { TransparencyDashboardTwitterInterestsScreen: () => R, default: () => B });
            var r = n(202784),
                a = n(325686),
                s = n(954110),
                o = n(731708),
                i = n(108362),
                l = n(111677),
                c = n.n(l),
                d = n(370751),
                h = n(290402),
                p = n(507651),
                m = n(443781),
                u = n(652904),
                g = n(829824),
                f = n(170069),
                _ = n(264922),
                E = n(267966),
                y = n(342453),
                b = n(71620),
                Z = n(668214),
                S = n(205253),
                C = n(312771);
            const x = (e, t) => (0, C.h1)(S.LY(e), S.I3(e)),
                A = (0, Z.Z)()
                    .propsFromState(() => ({ fetchStatus: x, interests: S.fO, preferences: S.LP }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("SETTINGS_TRANSPARENCY_DASHBOARD_TWITTER_INTERESTS_SCREEN"), fetchInterests: S.lo, fetchPreferences: S.CP, updateInterest: S.q_ }))
                    .withAnalytics({ page: "settings", section: "your_twitter_data", component: "twitter_interests" }),
                w = c().h1f01a24,
                D = c().c07b4316,
                T = c().e97196fe,
                P = c().ja0f971c,
                I = c().gd1ce494,
                k = c().e9f1fbcc,
                v = c().cf0daa24,
                L = "/settings/your_twitter_data/twitter_interests/interest";
            class R extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTabs = () => {
                            if (!this._hasKnownInterests()) return null;
                            const e = [
                                { to: "/settings/your_twitter_data/twitter_interests", key: T, label: T },
                                { to: L, key: D, label: D },
                            ];
                            return r.createElement(p.Z, { "aria-label": w, links: e });
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
                                r.createElement(f.Z, null, P),
                                n.map((e, t) => r.createElement(s.Z, { checked: !a.has(e.id), key: e.id, label: e.display_name, name: e.id.toString(), onChange: this._handleUpdateInterest })),
                                o ? this._renderMessage(k, v) : null,
                            );
                        }),
                        (this._renderMessage = (e, t) => r.createElement(a.Z, { style: [E.Z.calloutTextBlock, E.Z.bottomBorder] }, r.createElement(o.ZP, { align: "center", size: "headline1" }, e), t ? r.createElement(o.ZP, { align: "center", color: "gray700", style: y.Z.helpText }, t) : null)),
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
                    return r.createElement(u.Z, null, r.createElement(_.Z, { location: t, secondaryBar: this._renderTabs(), title: w }, r.createElement(g.Z, null, r.createElement(i.Z, null, r.createElement(h.Z, { fetchStatus: e, onRequestRetry: this._handleFetchData, render: this._render })))));
                }
            }
            R.contextType = m.rC;
            const B = A(R);
        },
        791508: (e, t, n) => {
            n.r(t), n.d(t, { default: () => x });
            var r = n(202784),
                a = n(325686),
                s = n(108362),
                o = n(779610),
                i = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(443781),
                h = n(652904),
                p = n(293115),
                m = n(829824),
                u = n(264922);
            const g = c().j7ad754a,
                f = c().i5f7b6b8,
                _ = c().i6b3f59a,
                E = c().g1aced04,
                y = c().j9d10268,
                b = c().gbde3534,
                Z = c().gee8110e,
                S = { page: "settings", section: "transparency" },
                C = i.default.create((e) => ({ backgroundRoot: { flexGrow: 1, backgroundColor: e.colors.gray50 }, contentRoot: { backgroundColor: e.colors.cellBackground, flexGrow: 1, justifyContent: "flex-start" } })),
                x = function (e) {
                    const { location: t } = e,
                        { viewerUserId: n } = r.useContext(d.rC),
                        i = !!n;
                    return r.createElement(p.nO, { namespace: S }, r.createElement(h.Z, null, r.createElement(u.Z, { location: t, title: g }, r.createElement(m.Z, null, r.createElement(a.Z, { style: C.backgroundRoot }, r.createElement(s.Z, { style: C.contentRoot }, r.createElement(o.Z, { label: f, link: "/settings/your_twitter_data/account" }), i ? r.createElement(o.Z, { label: _, link: "/settings/your_twitter_data/account_history" }) : null, r.createElement(o.Z, { label: E, link: "/settings/your_twitter_data/devices" }), i ? r.createElement(o.Z, { label: y, link: "/settings/your_twitter_data/account_activity" }) : null, r.createElement(o.Z, { label: b, link: "/settings/your_twitter_data/ads" }), r.createElement(o.Z, { label: Z, link: i ? "/settings/download_your_data" : "/settings/your_twitter_data/request_data" })))))));
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
                i = n(111677),
                l = n.n(i),
                c = n(443781),
                d = n(918621),
                h = n(725405),
                p = n(125363),
                m = n(390387);
            const u = l().ffeb836a,
                g = l().f2fb9746;
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
                const { featureSwitches: t } = r.useContext(c.rC),
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
            const i = ({ children: e }) => r.createElement(a.Z, { style: l.labelContainer }, r.createElement(a.Z, { style: l.contentContainer }, r.createElement(a.Z, { style: l.appText }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, e)))),
                l = o.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${o.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                a = n(476984),
                s = n.n(a),
                o = n(143778),
                i = n(750410),
                l = n(682830);
            const c = "failed",
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
                        case c:
                            return f ? r.createElement(i.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : n ? r.createElement(l.m, { failureMessage: n }) : u();
                        case h:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: o });
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
            n.d(t, { Z: () => A });
            var r = n(807896),
                a = n(202784),
                s = n(194504),
                o = n(235902),
                i = n(392237),
                l = n(325686),
                c = n(111677),
                d = n.n(c),
                h = n(912021),
                p = n(516951),
                m = n(731708),
                u = n(310088),
                g = n(175993),
                f = n(58881),
                _ = n(530732);
            const E = d().d2414d31,
                y = () => d().ce4e85ae,
                b = d().fb9f6f39;
            class Z extends a.Component {
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: r, children: s, color: o, isActive: c, isCompact: d, isPillLink: h, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: Z, style: C, to: x } = this.props,
                        { location: A } = this.state,
                        w = x ? this._getMemoizedLink(x, Z) : void 0,
                        D = c ? c(x) : A?.pathname === w?.pathname,
                        T = f.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: h ? S.pillHoverStyle.backgroundColor : void 0 }),
                        P = g ? "medium" : D ? "bold" : "medium";
                    return a.createElement(_.Z, { "aria-label": t, "aria-selected": D, focusable: !!D, interactiveStyles: T, link: w, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(h ? [S.pillStyle] : [S.link]), ...(h && D ? [S.pillActiveStyle] : []), d ? (h ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, C], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: h && S.flexGrow }, a.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(D, c, g, h) }, d && S.compactText, g && t && S.focusedText, h && S.pillTextStyle, h && D && S.pillActiveTextStyle, h && c && S.pillHoverTextStyle], weight: P }, e && a.createElement(e, { style: S.icon }), s, g || h ? null : a.createElement(l.Z, { style: D && [S.border, { backgroundColor: i.default.theme.colors[o] }] })), n ? a.createElement(u.Z, { count: n, standalone: !0, style: [S.badge, n >= 10 && S.multiDigitBadge, n >= 20 && S.truncatedCountBadge], truncatedCountFormatter: b, unreadCountLabel: E, withBorder: !1 }) : r ? a.createElement(u.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (Z.contextType = g.Z), (Z.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                C = Z,
                x = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                A = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: i, isRoundedRect: l, links: c, style: d, visibleItemIndex: h }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = o.ZP.useProps(),
                        u = m() && !i,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...o }, c) => {
                                    const d = u ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return a.createElement(C, (0, r.Z)({ viewType: s }, o, { isCompact: n, isPillLink: i, isRoundedRect: l, isWebRedesign: u, style: d }), t);
                                }),
                            [e, n, i, l, u, c],
                        );
                    return a.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: i && x.gap, childrenStyle: !u && x.flexGrow, key: p, style: [i ? null : x.segmentedControl, u && x.leftAligned, d], visibleItemIndex: h }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsTransparency.37026dca.js.map
