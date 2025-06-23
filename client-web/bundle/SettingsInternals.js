"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsInternals"],
    {
        290402: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(807896),
                a = n(202784),
                o = n(182056),
                s = n(879113),
                i = n(392237),
                c = n(111677),
                l = n.n(c),
                d = n(968478);
            const u = l().aa6e3300,
                h = ({ retryMessage: e, ...t }, n) => {
                    const i = o.Z.isOnline();
                    return a.createElement(s.Z, (0, r.Z)({}, t, { icon: i ? void 0 : a.createElement(d.default, { style: p.icon }), retryMessage: i ? e : u }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(h);
        },
        224504: (e, t, n) => {
            n.d(t, { t: () => o });
            const r = [],
                a = {},
                o = (e, t) => {
                    if (!e.length || 0 === Object.keys(t).length) return r;
                    const n = e.join();
                    return (
                        a[n] ||
                            (a[n] = e
                                .map((e) => ({ label: t[e.toUpperCase()], value: e }))
                                .filter((e) => e.label)
                                .sort((e, t) => e.label.localeCompare(t.label))),
                        a[n]
                    );
                };
        },
        661461: (e, t, n) => {
            n.d(t, { Nr: () => p, ug: () => m, yt: () => g });
            var r = n(759851),
                a = n(689048),
                o = n(499627),
                s = n(917799),
                i = n(312771),
                c = n(390387);
            const l = "availableLanguages",
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
                            a = n?.lang ? n.lang : "en",
                            o = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(a),
                            s = o ? (e, t) => o.compare(e.name, t.name) : void 0;
                        return { ...e, languages: r?.slice().sort(s) || [], fetchStatus: i.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            o.Z.register({ [l]: h });
            const p = (e) => e[l].languages,
                m = (e, t) => {
                    const n = (0, a.o)(t).toLowerCase(),
                        r = e[l].languages.find((e) => e.code === n);
                    return r?.name;
                },
                g = () => (e, t) => (t()[l].fetchStatus === i.ZP.LOADED ? Promise.resolve() : e(b())),
                b =
                    () =>
                    (e, t, { api: n }) =>
                        s._O(e, { request: n.withEndpoint(r.Z).fetchSupportedLanguages })({ actionTypes: d, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, c.VT)(t()) } });
        },
        576025: (e, t, n) => {
            n.d(t, { Lf: () => l, Po: () => u, _t: () => d });
            n(571372);
            var r = n(499627),
                a = n(312771);
            const o = "countryNames",
                s = { fetchStatus: a.ZP.NONE, countries: {} },
                i = { REQUEST: `${o}_REQUEST`, FAILURE: `${o}_FAILURE`, SUCCESS: `${o}_SUCCESS` },
                c = (e = s, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case i.REQUEST:
                            return { ...e, fetchStatus: a.ZP.LOADING };
                        case i.FAILURE:
                            return { ...e, fetchStatus: a.ZP.NONE };
                        case i.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: a.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            r.Z.register({ [o]: c });
            const l = (e) => e[o].countries,
                d = (e, t) => {
                    const n = t && t.toUpperCase();
                    return e[o].countries[n];
                },
                u = (e) => (t, r) =>
                    r()[o].fetchStatus === a.ZP.LOADED
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
            n.r(t), n.d(t, { CountryScreen: () => R, default: () => x });
            var r = n(202784),
                a = n(325686),
                o = n(688715),
                s = n(731708),
                i = n(466818),
                c = n(392237),
                l = n(111677),
                d = n.n(l),
                u = n(652904),
                h = n(804027),
                p = n(264922),
                m = n(71620),
                g = n(224504),
                b = n(668214),
                f = n(576025),
                E = n(558369),
                y = n(390387),
                C = n(38562);
            const S = [],
                _ = (e) => {
                    const t = (0, E.FG)(e, "account_country_setting_countries_whitelist"),
                        n = (0, f.Lf)(e);
                    return Array.isArray(t) ? (0, g.t)(t, n) : S;
                },
                Z = (e, t) => t.location?.query?.flow_status,
                v = (0, b.Z)()
                    .propsFromState(() => ({ countryCode: C.eV, countryList: _, changeCountryFlowStatus: Z, lang: y.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("SETTINGS_COUNTRY_SCREEN"), fetchCountryNamesIfNeeded: f.Po, updateSettings: C.VP, fetchSettings: C.wv }))
                    .withAnalytics({ page: "settings", section: "country" }),
                L = "Settings_Country_Selector",
                w = d().c21037d0,
                A = d().i2209530,
                T = d().j924d222,
                I = (0, o.ju)("https://support.x.com/articles/20169220");
            class R extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleCountryChange = (e) => {
                            const { history: t } = this.props;
                            t.replace({ pathname: "/i/flow/settings/change_country", query: { return_path: "/settings/country" }, state: { input: { country_code: e } } });
                        });
                }
                componentDidMount() {
                    const { changeCountryFlowStatus: e, createLocalApiErrorHandler: t, fetchCountryNamesIfNeeded: n, fetchSettings: r, lang: a } = this.props;
                    e === h.QS.Success && r().catch(t()), n(a || "").catch(t());
                }
                componentDidUpdate() {
                    const { changeCountryFlowStatus: e, createLocalApiErrorHandler: t, fetchSettings: n } = this.props;
                    e === h.QS.Success && n().catch(t());
                }
                render() {
                    const { countryCode: e, countryList: t, location: n } = this.props,
                        o = r.createElement(d().I18NFormatMessage, { $i18n: "cd68cf4b" }, r.createElement(s.ZP, { link: I }, d().e9310157));
                    return r.createElement(u.Z, null, r.createElement(p.Z, { location: n, submitLabel: A, title: T }, r.createElement(a.Z, { style: F.countrySelector }, r.createElement(i.ZP, { helperText: o, label: w, onChange: this._handleCountryChange, options: t, testID: L, value: e || "" }))));
                }
            }
            const F = c.default.create((e) => ({ countrySelector: { margin: e.spaces.space20 } })),
                x = v(R);
        },
        539863: (e, t, n) => {
            n.r(t), n.d(t, { LanguageScreen: () => Z, default: () => L });
            var r = n(202784),
                a = n(325686),
                o = n(466818),
                s = n(392237),
                i = n(111677),
                c = n.n(i),
                l = n(652904),
                d = n(264922),
                u = n(689048),
                h = n(71620),
                p = n(668214),
                m = n(661461),
                g = n(390387),
                b = n(38562);
            const f = c().cef33711,
                E = (0, p.Z)()
                    .propsFromState(() => ({ languageCode: g.VT, languageList: m.Nr }))
                    .adjustStateProps(({ languageCode: e, languageList: t }) => ({
                        languageCode: (0, u.o)(e).toLowerCase(),
                        languageList: t.map((e) => {
                            const { code: t, local_name: n, name: r, status: a } = e,
                                o = "beta" === a ? f({ languageName: r }) : r;
                            return { label: r === n ? o : `${o} - ${n}`, value: t };
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LANGUAGE_SCREEN"), fetchAvailableLanguagesIfNeeded: m.yt, updateSettings: b.VP }))
                    .withAnalytics({ page: "settings", section: "language" }),
                y = c().a4b69cbc,
                C = c().i2209530,
                S = c().f953f53a,
                _ = c().bd5ac12e,
                Z = (e) => {
                    const { createLocalApiErrorHandler: t, fetchAvailableLanguagesIfNeeded: n, languageCode: s, languageList: i, location: c } = e,
                        [u, h] = r.useState(s);
                    r.useEffect(() => {
                        n().catch(t({ showToast: !0 }));
                    }, [t, n]);
                    const p = r.useCallback((e) => h(e), []);
                    return r.createElement(
                        l.Z,
                        null,
                        r.createElement(
                            d.Z,
                            {
                                location: c,
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
                                submitLabel: C,
                                title: S,
                            },
                            r.createElement(a.Z, { style: v.languageSelector }, r.createElement(o.ZP, { helperText: _, label: y, onChange: p, options: i, value: u })),
                        ),
                    );
                },
                v = s.default.create((e) => ({ languageSelector: { margin: e.spaces.space20 } })),
                L = E(Z);
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                a = n(476984),
                o = n.n(a),
                s = n(143778),
                i = n(750410),
                c = n(682830);
            const l = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: o, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (a) {
                        case l:
                            return b ? r.createElement(i.Z, { icon: o, onRequestRetry: d, retryMessage: g }) : n ? r.createElement(c.m, { failureMessage: n }) : m();
                        case u:
                            return r.createElement(c.J, { "aria-label": e, color: t, loadingMessage: s });
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
            n.d(t, { Z: () => c });
            var r = n(202784),
                a = n(325686),
                o = n(235902),
                s = n(885015),
                i = n(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: c } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? l[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(s.Z, { style: !t && l.root, withGutter: !0 }, r.createElement(a.Z, { style: l.gapColumn }, r.createElement(a.Z, { style: [l.gap, d] })), r.createElement(a.Z, { style: l.gapText }, n), r.createElement(a.Z, { style: l.gapColumn }, r.createElement(a.Z, { style: [l.gap, d] }))) : r.createElement(a.Z, { style: [!t && l.root, c() && l.rootRedesign, l.gap, d] });
            }
            const l = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(807896),
                a = n(202784),
                o = n(325686),
                s = n(392237);
            class i extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...s } = this.props,
                        i = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, c.column, n && c.withGutterColumn] }));
                    return a.createElement(o.Z, (0, r.Z)({ style: [t, c.root, n && c.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const c = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                l = i;
        },
        466818: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var r = n(202784),
                a = n(325686),
                o = n(487552),
                s = n(302752),
                i = n(183806),
                c = n(731708),
                l = n(950822),
                d = n(224162),
                u = n(392237);
            const h = r.forwardRef((e, t) => (0, l.Z)("select", { ...e, ref: t })),
                p = (e) => (0, l.Z)("option", e);
            let m = 1;
            class g extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: n } = this.props,
                                { selectedIndex: r, value: a } = e.target;
                            t && t(a, r - (n ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: l, helperText: m, options: g, style: f, testID: E, value: y, withEmptyOption: C } = this.props,
                        { isFocused: S } = this.state,
                        _ = c.ZP.getLanguage(),
                        Z = void 0 === l ? !!n : l,
                        v = new Set();
                    n && v.add(this._errorID), e && v.add(e), m && v.add(this._helperID);
                    const L = v.size ? [...v].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const c = "ja" === _ ? u.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(_) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return r.createElement(
                                a.Z,
                                { style: [i.Z.border, b.container, t && i.Z.disabled, S && i.Z.focusedBorderValid, Z && i.Z.invalidBorderColor, S && Z && i.Z.focusedBorderInvalid, f] },
                                this._renderLabel(),
                                r.createElement(
                                    h,
                                    { "aria-describedby": L, "aria-invalid": Z, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: c }, t && i.Z.disabled], testID: E || "", value: y },
                                    C ? r.createElement(p, { disabled: !0, style: b.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: n, value: a } = e;
                                        return r.createElement(p, { disabled: t, key: `${n}-${a}`, style: b.option, value: a }, n);
                                    }),
                                ),
                                r.createElement(o.default, { style: [b.dropdownCaret, S && i.Z.validColor, !(!l && !n) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        Z && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: a } = this.state;
                    return r.createElement(c.ZP, { color: t || e ? "red500" : a ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, n);
                }
                _renderHelperText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(c.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(c.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                f = g;
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                s = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsInternals.5a2434ea.js.map
