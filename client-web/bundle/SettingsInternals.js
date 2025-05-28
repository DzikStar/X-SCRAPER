"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsInternals", "icons/IconChevronDown-js"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var r = n(202784),
                o = n(614983),
                a = n.n(o),
                s = n(325686),
                i = n(370006),
                l = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: o, hideBackButton: a, isFullWidth: s, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: g, style: b, subtitle: C, title: f, titleDomId: y, titleIconCell: E, titleIconCellSize: S, withBackground: _, withWideContainer: w } = this.props,
                        { isModal: Z } = this.context,
                        L = a ? d : r.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        B = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!_, Z, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: s, isLarge: c, leftControl: L, middleControl: h, position: u(p, Z, o), rightControl: m, style: b, subtitle: C, title: f, titleDomId: y, titleIconCell: E, titleIconCellSize: S, withBackground: B, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? r.createElement(s.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(807896),
                o = n(202784),
                a = n(182056),
                s = n(879113),
                i = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, n) => {
                    const i = a.Z.isOnline();
                    return o.createElement(s.Z, (0, r.Z)({}, t, { icon: i ? void 0 : o.createElement(d.default, { style: p.icon }), retryMessage: i ? e : u }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = o.forwardRef(h);
        },
        253493: (e, t, n) => {
            n.d(t, { Z: () => E });
            var r = n(202784),
                o = n(107267),
                a = n(791632),
                s = n(325686),
                i = n(537392),
                l = n(10656),
                c = n(655352),
                d = n(555079),
                u = n(500002),
                h = n(625661),
                p = n(449067),
                m = n(655543),
                g = n(715601),
                b = n(392237);
            const C = b.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...b.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? r.createElement(s.Z, { style: C.fill }, r.createElement(g.Z, { style: C.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return r.createElement(i.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: o, showSubtitleOnRoot: a, showSubtitleOnWideDetail: s, withBottomBorder: i, withDetailOpen: l, ...d } = this.props;
                    return r.createElement(r.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : r.createElement(p.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return r.createElement(r.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: o, backLocation: a, documentTitle: i, headerless: l, history: c, leftControl: u, middleControl: m, onBackClick: g, rightControl: b, screenType: f, searchBoxOptions: y, secondaryBar: E, showSubtitleOnRoot: S, showSubtitleOnWideDetail: _, subtitle: w, title: Z, titleIconCell: L, titleIconCellSize: B, withDetailOpen: v, withSearchBox: k, withTweetButton: T, withWideContainer: I } = this.props,
                        x = "root" === f,
                        F = "secondaryRoot" === f,
                        A = "primaryDetail" === f,
                        D = (A && _) || (x && S),
                        P = x || (A && e),
                        R = x ? d.ey : A ? d.vX : void 0,
                        N = r.createElement(s.Z, { style: C.appBarContainer }, r.createElement(h.ZP, { backLocation: a, fixed: !1, hideBackButton: P, history: c, leftControl: u, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: E, style: o, subtitle: D ? w : void 0, title: Z, titleDomId: R, titleIconCell: L, titleIconCellSize: B, withWideContainer: I })),
                        U = x || (F && v) ? null : r.createElement(p.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: a, documentTitle: i, headerless: l, middleControl: m, onBackClick: g, rightControl: b, searchBoxOptions: y, subtitle: w, title: Z, withSearchBox: k, withTweetButton: T });
                    return r.createElement(r.Fragment, null, U, N);
                }
            }
            (f.contextType = m.Z), (f.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const y = (0, u.ZP)(f),
                E = (e) => {
                    const t = (0, o.useHistory)();
                    return (0, a.HD)(t) ? e.children || null : r.createElement(y, e);
                };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(500002),
                a = n(668214),
                s = n(997174),
                i = n(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: r },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: a, search: s },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = o || i;
                    ((c && o !== i) || (!c && n !== a) || r !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, o.ZP)(l(c));
        },
        224504: (e, t, n) => {
            n.d(t, { t: () => a });
            const r = [],
                o = {},
                a = (e, t) => {
                    if (!e.length || 0 === Object.keys(t).length) return r;
                    const n = e.join();
                    return (
                        o[n] ||
                            (o[n] = e
                                .map((e) => ({ label: t[e.toUpperCase()], value: e }))
                                .filter((e) => e.label)
                                .sort((e, t) => e.label.localeCompare(t.label))),
                        o[n]
                    );
                };
        },
        661461: (e, t, n) => {
            n.d(t, { Nr: () => p, ug: () => m, yt: () => g });
            var r = n(759851),
                o = n(689048),
                a = n(499627),
                s = n(917799),
                i = n(312771),
                l = n(390387);
            const c = "availableLanguages",
                d = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                u = { fetchStatus: i.ZP.NONE, languages: [] };
            function h(e = u, t) {
                if (!t) return e;
                switch (t.type) {
                    case d.REQUEST:
                        return { ...e, fetchStatus: i.ZP.LOADING };
                    case d.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                    case d.SUCCESS: {
                        const { meta: n, payload: r } = t,
                            o = n?.lang ? n.lang : "en",
                            a = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(o),
                            s = a ? (e, t) => a.compare(e.name, t.name) : void 0;
                        return { ...e, languages: r?.slice().sort(s) || [], fetchStatus: i.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            a.Z.register({ [c]: h });
            const p = (e) => e[c].languages,
                m = (e, t) => {
                    const n = (0, o.o)(t).toLowerCase(),
                        r = e[c].languages.find((e) => e.code === n);
                    return r?.name;
                },
                g = () => (e, t) => (t()[c].fetchStatus === i.ZP.LOADED ? Promise.resolve() : e(b())),
                b =
                    () =>
                    (e, t, { api: n }) =>
                        s._O(e, { request: n.withEndpoint(r.Z).fetchSupportedLanguages })({ actionTypes: d, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, l.VT)(t()) } });
        },
        576025: (e, t, n) => {
            n.d(t, { Lf: () => c, Po: () => u, _t: () => d });
            n(571372);
            var r = n(499627),
                o = n(312771);
            const a = "countryNames",
                s = { fetchStatus: o.ZP.NONE, countries: {} },
                i = { REQUEST: `${a}_REQUEST`, FAILURE: `${a}_FAILURE`, SUCCESS: `${a}_SUCCESS` },
                l = (e = s, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case i.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case i.FAILURE:
                            return { ...e, fetchStatus: o.ZP.NONE };
                        case i.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: o.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            r.Z.register({ [a]: l });
            const c = (e) => e[a].countries,
                d = (e, t) => {
                    const n = t && t.toUpperCase();
                    return e[a].countries[n];
                },
                u = (e) => (t, r) =>
                    r()[a].fetchStatus === o.ZP.LOADED
                        ? Promise.resolve()
                        : (t({ type: i.REQUEST }),
                          ((e) => {
                              switch (e) {
                                  case "ar":
                                      return n.e("ondemand.countries-ar").then(n.t.bind(n, 855927, 19));
                                  case "bg":
                                      return n.e("ondemand.countries-bg").then(n.t.bind(n, 725159, 19));
                                  case "bn":
                                      return n.e("ondemand.countries-bn").then(n.t.bind(n, 322302, 19));
                                  case "ca":
                                      return n.e("ondemand.countries-ca").then(n.t.bind(n, 520516, 19));
                                  case "cs":
                                      return n.e("ondemand.countries-cs").then(n.t.bind(n, 829454, 19));
                                  case "da":
                                      return n.e("ondemand.countries-da").then(n.t.bind(n, 150661, 19));
                                  case "de":
                                      return n.e("ondemand.countries-de").then(n.t.bind(n, 565614, 19));
                                  case "el":
                                      return n.e("ondemand.countries-el").then(n.t.bind(n, 295816, 19));
                                  case "en-GB":
                                      return n.e("ondemand.countries-en-GB").then(n.t.bind(n, 397465, 19));
                                  case "en":
                                      return n.e("ondemand.countries-en").then(n.t.bind(n, 219973, 19));
                                  case "es":
                                      return n.e("ondemand.countries-es").then(n.t.bind(n, 690515, 19));
                                  case "eu":
                                      return n.e("ondemand.countries-eu").then(n.t.bind(n, 594549, 19));
                                  case "fa":
                                      return n.e("ondemand.countries-fa").then(n.t.bind(n, 548404, 19));
                                  case "fi":
                                      return n.e("ondemand.countries-fi").then(n.t.bind(n, 526226, 19));
                                  case "fil":
                                      return n.e("ondemand.countries-fil").then(n.t.bind(n, 387630, 19));
                                  case "fr":
                                      return n.e("ondemand.countries-fr").then(n.t.bind(n, 580700, 19));
                                  case "ga":
                                      return n.e("ondemand.countries-ga").then(n.t.bind(n, 434359, 19));
                                  case "gl":
                                      return n.e("ondemand.countries-gl").then(n.t.bind(n, 765077, 19));
                                  case "gu":
                                      return n.e("ondemand.countries-gu").then(n.t.bind(n, 826129, 19));
                                  case "ha":
                                      return n.e("ondemand.countries-he").then(n.t.bind(n, 712756, 19));
                                  case "he":
                                      return n.e("ondemand.countries-he").then(n.t.bind(n, 834185, 19));
                                  case "hi":
                                      return n.e("ondemand.countries-hi").then(n.t.bind(n, 555595, 19));
                                  case "hr":
                                      return n.e("ondemand.countries-hr").then(n.t.bind(n, 549581, 19));
                                  case "hu":
                                      return n.e("ondemand.countries-hu").then(n.t.bind(n, 624086, 19));
                                  case "id":
                                      return n.e("ondemand.countries-id").then(n.t.bind(n, 499075, 19));
                                  case "ig":
                                      return n.e("ondemand.countries-ig").then(n.t.bind(n, 424665, 19));
                                  case "it":
                                      return n.e("ondemand.countries-it").then(n.t.bind(n, 231383, 19));
                                  case "ja":
                                      return n.e("ondemand.countries-ja").then(n.t.bind(n, 848543, 19));
                                  case "kn":
                                      return n.e("ondemand.countries-kn").then(n.t.bind(n, 4504, 19));
                                  case "ko":
                                      return n.e("ondemand.countries-ko").then(n.t.bind(n, 496320, 19));
                                  case "mr":
                                      return n.e("ondemand.countries-mr").then(n.t.bind(n, 939202, 19));
                                  case "ms":
                                      return n.e("ondemand.countries-ms").then(n.t.bind(n, 655815, 19));
                                  case "nb":
                                      return n.e("ondemand.countries-nb").then(n.t.bind(n, 835579, 19));
                                  case "nl":
                                      return n.e("ondemand.countries-nl").then(n.t.bind(n, 572887, 19));
                                  case "pl":
                                      return n.e("ondemand.countries-pl").then(n.t.bind(n, 171124, 19));
                                  case "pt":
                                      return n.e("ondemand.countries-pt").then(n.t.bind(n, 64727, 19));
                                  case "ro":
                                      return n.e("ondemand.countries-ro").then(n.t.bind(n, 503059, 19));
                                  case "ru":
                                      return n.e("ondemand.countries-ru").then(n.t.bind(n, 948482, 19));
                                  case "sk":
                                      return n.e("ondemand.countries-sk").then(n.t.bind(n, 299502, 19));
                                  case "sr":
                                      return n.e("ondemand.countries-sr").then(n.t.bind(n, 360381, 19));
                                  case "sv":
                                      return n.e("ondemand.countries-sv").then(n.t.bind(n, 361571, 19));
                                  case "ta":
                                      return n.e("ondemand.countries-ta").then(n.t.bind(n, 393529, 19));
                                  case "th":
                                      return n.e("ondemand.countries-th").then(n.t.bind(n, 92457, 19));
                                  case "tr":
                                      return n.e("ondemand.countries-tr").then(n.t.bind(n, 798398, 19));
                                  case "uk":
                                      return n.e("ondemand.countries-uk").then(n.t.bind(n, 291715, 19));
                                  case "ur":
                                      return n.e("ondemand.countries-ur").then(n.t.bind(n, 768312, 19));
                                  case "yo":
                                      return n.e("ondemand.countries-yo").then(n.t.bind(n, 802732, 19));
                                  case "zh-Hant":
                                      return n.e("ondemand.countries-zh-Hant").then(n.t.bind(n, 39068, 19));
                                  case "zh":
                                      return n.e("ondemand.countries-zh").then(n.t.bind(n, 34845, 19));
                                  default:
                                      return Promise.reject(new Error(`Tried to import country names for unknown language key: ${e}`));
                              }
                          })(e)
                              .then((n) => {
                                  const r = n.main[e].localeDisplayNames.territories;
                                  t({ type: i.SUCCESS, payload: r });
                              })
                              .catch(() => {
                                  t("en" === e ? { type: i.FAILURE } : u("en"));
                              }));
        },
        772113: (e, t, n) => {
            n.r(t), n.d(t, { CountryScreen: () => I, default: () => F });
            var r = n(202784),
                o = n(325686),
                a = n(688715),
                s = n(731708),
                i = n(466818),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(652904),
                h = n(804027),
                p = n(264922),
                m = n(71620),
                g = n(224504),
                b = n(668214),
                C = n(576025),
                f = n(558369),
                y = n(390387),
                E = n(38562);
            const S = [],
                _ = (e) => {
                    const t = (0, f.FG)(e, "account_country_setting_countries_whitelist"),
                        n = (0, C.Lf)(e);
                    return Array.isArray(t) ? (0, g.t)(t, n) : S;
                },
                w = (e, t) => t.location?.query?.flow_status,
                Z = (0, b.Z)()
                    .propsFromState(() => ({ countryCode: E.eV, countryList: _, changeCountryFlowStatus: w, lang: y.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("SETTINGS_COUNTRY_SCREEN"), fetchCountryNamesIfNeeded: C.Po, updateSettings: E.VP, fetchSettings: E.wv }))
                    .withAnalytics({ page: "settings", section: "country" }),
                L = "Settings_Country_Selector",
                B = d().c21037d0,
                v = d().i2209530,
                k = d().j924d222,
                T = (0, a.ju)("https://support.x.com/articles/20169220");
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleCountryChange = (e) => {
                            const { history: t } = this.props;
                            t.replace({ pathname: "/i/flow/settings/change_country", query: { return_path: "/settings/country" }, state: { input: { country_code: e } } });
                        });
                }
                componentDidMount() {
                    const { changeCountryFlowStatus: e, createLocalApiErrorHandler: t, fetchCountryNamesIfNeeded: n, fetchSettings: r, lang: o } = this.props;
                    e === h.QS.Success && r().catch(t()), n(o || "").catch(t());
                }
                componentDidUpdate() {
                    const { changeCountryFlowStatus: e, createLocalApiErrorHandler: t, fetchSettings: n } = this.props;
                    e === h.QS.Success && n().catch(t());
                }
                render() {
                    const { countryCode: e, countryList: t, location: n } = this.props,
                        a = r.createElement(d().I18NFormatMessage, { $i18n: "cd68cf4b" }, r.createElement(s.ZP, { link: T }, d().e9310157));
                    return r.createElement(u.Z, null, r.createElement(p.Z, { location: n, submitLabel: v, title: k }, r.createElement(o.Z, { style: x.countrySelector }, r.createElement(i.ZP, { helperText: a, label: B, onChange: this._handleCountryChange, options: t, testID: L, value: e || "" }))));
                }
            }
            const x = l.default.create((e) => ({ countrySelector: { margin: e.spaces.space20 } })),
                F = Z(I);
        },
        539863: (e, t, n) => {
            n.r(t), n.d(t, { LanguageScreen: () => w, default: () => L });
            var r = n(202784),
                o = n(325686),
                a = n(466818),
                s = n(392237),
                i = n(111677),
                l = n.n(i),
                c = n(652904),
                d = n(264922),
                u = n(689048),
                h = n(71620),
                p = n(668214),
                m = n(661461),
                g = n(390387),
                b = n(38562);
            const C = l().cef33711,
                f = (0, p.Z)()
                    .propsFromState(() => ({ languageCode: g.VT, languageList: m.Nr }))
                    .adjustStateProps(({ languageCode: e, languageList: t }) => ({
                        languageCode: (0, u.o)(e).toLowerCase(),
                        languageList: t.map((e) => {
                            const { code: t, local_name: n, name: r, status: o } = e,
                                a = "beta" === o ? C({ languageName: r }) : r;
                            return { label: r === n ? a : `${a} - ${n}`, value: t };
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LANGUAGE_SCREEN"), fetchAvailableLanguagesIfNeeded: m.yt, updateSettings: b.VP }))
                    .withAnalytics({ page: "settings", section: "language" }),
                y = l().a4b69cbc,
                E = l().i2209530,
                S = l().f953f53a,
                _ = l().bd5ac12e,
                w = (e) => {
                    const { createLocalApiErrorHandler: t, fetchAvailableLanguagesIfNeeded: n, languageCode: s, languageList: i, location: l } = e,
                        [u, h] = r.useState(s);
                    r.useEffect(() => {
                        n().catch(t({ showToast: !0 }));
                    }, [t, n]);
                    const p = r.useCallback((e) => h(e), []);
                    return r.createElement(
                        c.Z,
                        null,
                        r.createElement(
                            d.Z,
                            {
                                location: l,
                                onSubmit: () => {
                                    const { analytics: t, createLocalApiErrorHandler: n, updateSettings: r } = e;
                                    t.scribe({ action: "edit" }),
                                        r({ lang: u })
                                            .then(() => {
                                                window.location.reload(!0);
                                            })
                                            .catch(n({ showToast: !0 }));
                                },
                                submitDisabled: u === s,
                                submitLabel: E,
                                title: S,
                            },
                            r.createElement(o.Z, { style: Z.languageSelector }, r.createElement(a.ZP, { helperText: _, label: y, onChange: p, options: i, value: u })),
                        ),
                    );
                },
                Z = s.default.create((e) => ({ languageSelector: { margin: e.spaces.space20 } })),
                L = f(w);
        },
        264922: (e, t, n) => {
            n.d(t, { Z: () => S });
            var r = n(202784),
                o = n(108362),
                a = n(420412),
                s = n(154003),
                i = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(290402),
                u = n(253493),
                h = n(71620),
                p = n(668214),
                m = n(38562),
                g = n(919022);
            const b = (0, p.Z)()
                    .propsFromState(() => ({ fetchStatus: m.UD, viewerUser: g.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: m.Sb, createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LOADER") })),
                C = "settingsDetailSave",
                f = c().i2209530;
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return r.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: i, submitType: l, withMarginBottom: c } = this.props;
                            return r.createElement(o.Z, { style: [E.contentRoot, c && E.withMarginBottom] }, e, t ? r.createElement(r.Fragment, null, r.createElement(a.Z, null), r.createElement(o.Z, { style: E.buttonContainer }, r.createElement(s.ZP, { disabled: n, onPress: t, style: E.button, testID: C, type: l }, i))) : null);
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
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: o, title: a, viewerUser: s, withBottomBorder: i } = this.props,
                        l = this.getBackLocation(),
                        c = s ? `@${s.screen_name}` : void 0;
                    return r.createElement(u.Z, { backLocation: l, onBackClick: e, rightControl: t, screenType: n, secondaryBar: o, showSubtitleOnWideDetail: !1, subtitle: c, title: a, withBottomBorder: i }, s ? this._renderWithFetchSettings() : this._render());
                }
            }
            y.defaultProps = { submitLabel: f, submitType: "brandFilled", withMarginBottom: !0 };
            const E = i.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${i.default.iPhoneOffsetBottom})` } })),
                S = b(y);
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(476984),
                a = n.n(o),
                s = n(143778),
                i = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: a, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (o) {
                        case c:
                            return b ? r.createElement(i.Z, { icon: a, onRequestRetry: d, retryMessage: g }) : n ? r.createElement(l.m, { failureMessage: n }) : m();
                        case u:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(325686),
                a = n(235902),
                s = n(885015),
                i = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, n), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                s = n(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...s } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return o.createElement(a.Z, (0, r.Z)({ style: [t, l.root, n && l.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        466818: (e, t, n) => {
            n.d(t, { ZP: () => C });
            var r = n(202784),
                o = n(325686),
                a = n(487552),
                s = n(302752),
                i = n(183806),
                l = n(731708),
                c = n(950822),
                d = n(224162),
                u = n(392237);
            const h = r.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                p = (e) => (0, c.Z)("option", e);
            let m = 1;
            class g extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: n } = this.props,
                                { selectedIndex: r, value: o } = e.target;
                            t && t(o, r - (n ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: t } = this.props;
                            this.setState({ isFocused: !1 }), t && t();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: t } = this.props;
                            this.setState({ isFocused: !0 }), t && t();
                        }),
                        (this._id = `SELECTOR_${m}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (m += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: c, helperText: m, options: g, style: C, testID: f, value: y, withEmptyOption: E } = this.props,
                        { isFocused: S } = this.state,
                        _ = l.ZP.getLanguage(),
                        w = void 0 === c ? !!n : c,
                        Z = new Set();
                    n && Z.add(this._errorID), e && Z.add(e), m && Z.add(this._helperID);
                    const L = Z.size ? [...Z].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === _ ? u.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(_) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return r.createElement(
                                o.Z,
                                { style: [i.Z.border, b.container, t && i.Z.disabled, S && i.Z.focusedBorderValid, w && i.Z.invalidBorderColor, S && w && i.Z.focusedBorderInvalid, C] },
                                this._renderLabel(),
                                r.createElement(
                                    h,
                                    { "aria-describedby": L, "aria-invalid": w, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: l }, t && i.Z.disabled], testID: f || "", value: y },
                                    E ? r.createElement(p, { disabled: !0, style: b.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: n, value: o } = e;
                                        return r.createElement(p, { disabled: t, key: `${n}-${o}`, style: b.option, value: o }, n);
                                    }),
                                ),
                                r.createElement(a.default, { style: [b.dropdownCaret, S && i.Z.validColor, !(!c && !n) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        w && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: o } = this.state;
                    return r.createElement(l.ZP, { color: t || e ? "red500" : o ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, n);
                }
                _renderHelperText() {
                    return r.createElement(o.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(o.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                C = g;
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                s = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsInternals.f7d356da.js.map
