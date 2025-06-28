"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileLocationSpotlight-bc6ccf4c", "icons/IconChevronDown-js"],
    {
        661810: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(202784),
                a = r(325686),
                s = r(392237);
            function n({ spacing: e, style: t }) {
                return o.createElement(a.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? s.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = s.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                a = r(325686),
                s = r(913973),
                n = r(731708),
                i = r(950822),
                l = r(466792),
                d = r(58881),
                c = r(530732),
                h = r(352924),
                p = r(392237);
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, h.F)()),
                        (this.descriptionId = (0, h.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: h, helpText: u, label: b, name: g, testID: f } = this.props,
                        y = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        v = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        _ = r ? y : v;
                    return o.createElement(l.Z, { disabled: h }, (l) => o.createElement(a.Z, { role: "label", style: [m.root, !h && m.interactive], testID: f }, o.createElement(a.Z, { style: m.topContainer }, o.createElement(n.ZP, { id: this.labelId }, b), o.createElement(a.Z, { style: m.radioContainer }, o.createElement(c.Z, { interactiveStyles: _, interactivityState: l, style: m.radioBackground }, o.createElement(a.Z, { style: [m.circle, r && m.circleActive, h && m.circleDisabled, r && h && m.circleCheckedAndDisabled] }, r ? o.createElement(s.default, { style: m.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: h, name: g, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? o.createElement(n.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = u,
                g = "radioGroup";
            let f = 1;
            class y extends o.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: r } = this.props;
                            r(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (r) => {
                            (this._radioRefs[e] = r), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: s, name: i, options: l, value: d } = this.props;
                    return o.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "radiogroup", style: r && v.disabled, testID: `${g}${i}` },
                        s ? o.createElement(a.Z, { id: this._labelId, role: "label", style: v.header }, o.createElement(n.ZP, { style: v.label, weight: "bold" }, s), t ? o.createElement(n.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => o.createElement(b, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === d, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === d), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const v = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        466818: (e, t, r) => {
            r.d(t, { ZP: () => f });
            var o = r(202784),
                a = r(325686),
                s = r(487552),
                n = r(302752),
                i = r(183806),
                l = r(731708),
                d = r(950822),
                c = r(224162),
                h = r(392237);
            const p = o.forwardRef((e, t) => (0, d.Z)("select", { ...e, ref: t })),
                u = (e) => (0, d.Z)("option", e);
            let m = 1;
            class b extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = o.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: r } = this.props,
                                { selectedIndex: o, value: a } = e.target;
                            t && t(a, o - (r ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: r, hasError: d, helperText: m, options: b, style: f, testID: y, value: v, withEmptyOption: _ } = this.props,
                        { isFocused: C } = this.state,
                        E = l.ZP.getLanguage(),
                        Z = void 0 === d ? !!r : d,
                        x = new Set();
                    r && x.add(this._errorID), e && x.add(e), m && x.add(this._helperID);
                    const k = x.size ? [...x].join(" ") : void 0;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === E ? h.default.theme.fontFamilies.japan : "rtl" === e || n.Z.isLocaleRTL(E) ? h.default.theme.fontFamilies.rtl : h.default.theme.fontFamilies.normal;
                            return o.createElement(
                                a.Z,
                                { style: [i.Z.border, g.container, t && i.Z.disabled, C && i.Z.focusedBorderValid, Z && i.Z.invalidBorderColor, C && Z && i.Z.focusedBorderInvalid, f] },
                                this._renderLabel(),
                                o.createElement(
                                    p,
                                    { "aria-describedby": k, "aria-invalid": Z, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: l }, t && i.Z.disabled], testID: y || "", value: v },
                                    _ ? o.createElement(u, { disabled: !0, style: g.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: t, label: r, value: a } = e;
                                        return o.createElement(u, { disabled: t, key: `${r}-${a}`, style: g.option, value: a }, r);
                                    }),
                                ),
                                o.createElement(s.default, { style: [g.dropdownCaret, C && i.Z.validColor, !(!d && !r) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        Z && r ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: r } = this.props,
                        { isFocused: a } = this.state;
                    return o.createElement(l.ZP, { color: t || e ? "red500" : a ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, r);
                }
                _renderHelperText() {
                    return o.createElement(a.Z, { "aria-live": "polite" }, o.createElement(l.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return o.createElement(a.Z, { "aria-live": "polite" }, o.createElement(l.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            b.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = h.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                f = b;
        },
        101890: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686),
                s = r(449479),
                n = r(392237);
            const i = (e) => o.createElement(a.Z, { style: l.root }, o.createElement(s.Z, e)),
                l = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        88307: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                a = r(325686),
                s = r(731708),
                n = r(392237);
            class i extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? o.createElement(s.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: r, subtext: n, withBottomBorder: i } = this.props;
                    return o.createElement(a.Z, { style: [l.root, i && l.bottomBorder] }, o.createElement(s.ZP, null, e), n ? (t && r ? this._renderSubtextAndLink() : o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, n)) : null);
                }
            }
            i.defaultProps = { withBottomBorder: !0 };
            const l = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = i;
        },
        564619: (e, t, r) => {
            r.d(t, { Z: () => _ });
            r(136728);
            var o = r(202784),
                a = r(325686),
                s = r(111677),
                n = r.n(s),
                i = r(323265),
                l = r(731708),
                d = r(855488),
                c = r(466818),
                h = r(392237);
            const p = (() => {
                    const e = {};
                    return (t) => {
                        const r = void 0 === t ? "undefined" : t.toString();
                        if (!e.hasOwnProperty(r)) {
                            const o = { use24HourTime: !!t, hourFormat: t ? "2-digit" : "numeric", minuteFormat: "2-digit" };
                            if ("object" == typeof window.Intl) {
                                const e = new window.Intl.DateTimeFormat("default", { hour12: void 0 === t ? void 0 : !t, hour: "numeric", minute: "numeric" }).resolvedOptions();
                                (o.use24HourTime = !e.hour12), (o.hourFormat = e.hour || o.hourFormat), (o.minuteFormat = e.minute || o.minuteFormat);
                            }
                            e[r] = o;
                        }
                        return e[r];
                    };
                })(),
                u = (e, t = 2, r = "0") => {
                    const o = r.repeat(t),
                        a = "number" == typeof e ? `${e}` : "";
                    return a.length >= t ? a : `${o}${a}`.slice(-t);
                },
                m = n().eb124f96,
                b = n().i7a6f114,
                g = n().ccc99ff2,
                f = [...Array(24).keys()],
                y = [...Array(13).keys()].slice(1),
                v = [...Array(60).keys()];
            class _ extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { hour: t, minute: r, onChange: o } = this.props;
                            (e.hour === t && e.minute === r) || o(e);
                        }),
                        (this._handleNativeChange = (e) => {
                            const { value: t } = e.target;
                            this._handleChange(C.parse(t));
                        }),
                        (this._handleHourChange = (e) => {
                            const { use24HourTime: t } = this._getLocale(),
                                { hour: r, minute: o } = this.props;
                            let a;
                            e && ((a = parseInt(e, 10)), t || "number" != typeof r || (r > 12 ? (a = (a + 12) % 24) : (a %= 12))), this._handleChange(new C(a, o));
                        }),
                        (this._handleMinuteChange = (e) => {
                            const { hour: t } = this.props,
                                r = e ? parseInt(e, 10) : void 0;
                            this._handleChange(new C(t, r));
                        }),
                        (this._handleAmPmChange = (e) => {
                            let { hour: t } = this.props;
                            const { minute: r } = this.props;
                            switch (e) {
                                case "am":
                                    "number" == typeof t && t >= 12 && (t -= 12);
                                    break;
                                case "pm":
                                    "number" == typeof t && t < 12 && (t += 12);
                            }
                            this._handleChange(new C(t, r));
                        });
                }
                render() {
                    const { "aria-label": e, disabled: t, errorText: r, helperText: s, invalid: n, label: d, style: c } = this.props,
                        h = !!n,
                        p = i.ZP.isMobileOS();
                    return o.createElement(a.Z, { style: [t && E.disabled, c] }, o.createElement(a.Z, { "aria-label": e || d, role: "group" }, o.createElement(l.ZP, { color: "gray700" }, d), p ? o.createElement(a.Z, { style: E.containerNative }, this._renderNativeInput()) : o.createElement(a.Z, { style: E.containerSelectors }, this._renderSelectors())), o.createElement(a.Z, { style: E.subtextWrapper }, s ? this._renderHelperText() : null, h && r ? this._renderErrorText() : null));
                }
                _getLocale() {
                    const { use24HourTime: e } = this.props;
                    return p(e);
                }
                _getFields() {
                    const { hour: e, minute: t } = this.props,
                        { hour: r, minute: o } = new C(e, t),
                        { hourFormat: a, minuteFormat: s, use24HourTime: n } = this._getLocale(),
                        i = "number" == typeof r ? (r < 12 ? "am" : "pm") : void 0,
                        l = n ? f : y,
                        d = v,
                        c = "2-digit" === a ? 2 : 1,
                        h = "2-digit" === s ? 2 : 1,
                        p = [];
                    return (
                        p.push({ label: b, options: l.map((e) => ({ label: u(e, c), value: `${e}` })), onChange: this._handleHourChange, value: "number" == typeof r ? `${n ? r : r % 12 || 12}` : "", withEmptyOption: !0 }),
                        p.push({ label: g, options: d.map((e) => ({ label: u(e, h), value: `${e}` })), onChange: this._handleMinuteChange, value: "number" == typeof o ? `${o}` : "", withEmptyOption: !0 }),
                        n ||
                            p.push({
                                label: m,
                                options: [
                                    { label: "AM", value: "am" },
                                    { label: "PM", value: "pm" },
                                ],
                                onChange: this._handleAmPmChange,
                                value: void 0 !== i ? i : "",
                                withEmptyOption: void 0 === r || void 0 === o,
                            }),
                        p
                    );
                }
                _renderNativeInput() {
                    const { autoFocus: e, disabled: t, hour: r, label: a, minute: s } = this.props,
                        n = new C(r, s);
                    return o.createElement(d.Z, { autoCapitalize: "none", autoComplete: "off", autoCorrect: !1, autoFocus: e, editable: !t, label: a, name: "timeInput", numberOfLines: 1, onChange: this._handleNativeChange, spellCheck: "false", style: E.native, type: "time", value: n.toString() });
                }
                _renderSelectors() {
                    const { autoFocus: e, disabled: t, invalid: r } = this.props,
                        a = !!r,
                        s = this._getFields();
                    return o.createElement(
                        o.Fragment,
                        null,
                        s.map((r, s) => o.createElement(c.ZP, { autofocus: 0 === s ? e : void 0, disabled: t, hasError: a, key: r.label, label: r.label, onChange: r.onChange, options: r.options, value: r.value, withEmptyOption: r.withEmptyOption })),
                    );
                }
                _renderHelperText() {
                    const { helperText: e } = this.props;
                    return o.createElement(a.Z, { "aria-live": "polite" }, o.createElement(l.ZP, { color: "gray700", style: E.subtext }, e));
                }
                _renderErrorText() {
                    const { errorText: e } = this.props;
                    return o.createElement(a.Z, { "aria-live": "assertive" }, o.createElement(l.ZP, { color: "red500", style: E.subtext }, e));
                }
            }
            class C {
                constructor(e, t) {
                    const r = "number" == typeof e ? Math.max(Math.min(e, 23), 0) : void 0,
                        o = "number" == typeof t ? Math.max(Math.min(t, 59), 0) : void 0;
                    Object.defineProperty(this, "hour", { value: r, enumerable: !0 }), Object.defineProperty(this, "minute", { value: o, enumerable: !0 });
                }
                static parse(e) {
                    let t, r;
                    if (e && e.match(/^(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9])$/)) {
                        const [o, a] = e.split(":");
                        (t = parseInt(o, 10)), (r = parseInt(a, 10));
                    }
                    return new C(t, r);
                }
                toString() {
                    const e = "number" == typeof this.hour,
                        t = "number" == typeof this.minute;
                    return e && t ? `${u(this.hour)}:${u(this.minute)}` : "";
                }
            }
            const E = h.default.create((e) => ({ containerNative: { paddingTop: e.spaces.space2 }, containerSelectors: { display: "grid", gridColumnGap: e.spaces.space12, gridTemplateColumns: "1fr 1fr 1fr", paddingTop: e.spaces.space2 }, disabled: { cursor: "default", opacity: 0.5 }, native: { paddingVertical: 0, paddingHorizontal: 0 }, subtextWrapper: { flexDirection: "column", flex: 1 }, subtext: { paddingTop: e.spaces.space4 } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                s = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => a, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (r, o, a) => {
                        const s = t ? t(o, a, e) : !!o;
                        return s && r[0].push(o), !s && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileLocationSpotlight-bc6ccf4c.7fdf4d6a.js.map
