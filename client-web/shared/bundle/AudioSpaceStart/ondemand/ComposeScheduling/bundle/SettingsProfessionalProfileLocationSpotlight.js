"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceStart~ondemand.ComposeScheduling~bundle.SettingsProfessionalProfileLocationSpotlight", "icons/IconChevronRight-js"],
    {
        466818: (e, t, r) => {
            r.d(t, { ZP: () => v });
            var o = r(202784),
                a = r(325686),
                n = r(487552),
                i = r(302752),
                s = r(183806),
                l = r(731708),
                d = r(950822),
                c = r(224162),
                h = r(392237);
            const u = o.forwardRef((e, t) => (0, d.Z)("select", { ...e, ref: t })),
                p = (e) => (0, d.Z)("option", e);
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
                    const { "aria-describedby": e, disabled: t, errorText: r, hasError: d, helperText: m, options: b, style: v, testID: f, value: y, withEmptyOption: _ } = this.props,
                        { isFocused: C } = this.state,
                        E = l.ZP.getLanguage(),
                        Z = void 0 === d ? !!r : d,
                        w = new Set();
                    r && w.add(this._errorID), e && w.add(e), m && w.add(this._helperID);
                    const x = w.size ? [...w].join(" ") : void 0;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === E ? h.default.theme.fontFamilies.japan : "rtl" === e || i.Z.isLocaleRTL(E) ? h.default.theme.fontFamilies.rtl : h.default.theme.fontFamilies.normal;
                            return o.createElement(
                                a.Z,
                                { style: [s.Z.border, g.container, t && s.Z.disabled, C && s.Z.focusedBorderValid, Z && s.Z.invalidBorderColor, C && Z && s.Z.focusedBorderInvalid, v] },
                                this._renderLabel(),
                                o.createElement(
                                    u,
                                    { "aria-describedby": x, "aria-invalid": Z, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: l }, t && s.Z.disabled], testID: f || "", value: y },
                                    _ ? o.createElement(p, { disabled: !0, style: g.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: t, label: r, value: a } = e;
                                        return o.createElement(p, { disabled: t, key: `${r}-${a}`, style: g.option, value: a }, r);
                                    }),
                                ),
                                o.createElement(n.default, { style: [g.dropdownCaret, C && s.Z.validColor, !(!d && !r) && s.Z.invalidColor] }),
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
                v = b;
        },
        564619: (e, t, r) => {
            r.d(t, { Z: () => _ });
            r(136728);
            var o = r(202784),
                a = r(325686),
                n = r(111677),
                i = r.n(n),
                s = r(323265),
                l = r(731708),
                d = r(855488),
                c = r(466818),
                h = r(392237);
            const u = (() => {
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
                p = (e, t = 2, r = "0") => {
                    const o = r.repeat(t),
                        a = "number" == typeof e ? `${e}` : "";
                    return a.length >= t ? a : `${o}${a}`.slice(-t);
                },
                m = i().eb124f96,
                b = i().i7a6f114,
                g = i().ccc99ff2,
                v = [...Array(24).keys()],
                f = [...Array(13).keys()].slice(1),
                y = [...Array(60).keys()];
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
                    const { "aria-label": e, disabled: t, errorText: r, helperText: n, invalid: i, label: d, style: c } = this.props,
                        h = !!i,
                        u = s.ZP.isMobileOS();
                    return o.createElement(a.Z, { style: [t && E.disabled, c] }, o.createElement(a.Z, { "aria-label": e || d, role: "group" }, o.createElement(l.ZP, { color: "gray700" }, d), u ? o.createElement(a.Z, { style: E.containerNative }, this._renderNativeInput()) : o.createElement(a.Z, { style: E.containerSelectors }, this._renderSelectors())), o.createElement(a.Z, { style: E.subtextWrapper }, n ? this._renderHelperText() : null, h && r ? this._renderErrorText() : null));
                }
                _getLocale() {
                    const { use24HourTime: e } = this.props;
                    return u(e);
                }
                _getFields() {
                    const { hour: e, minute: t } = this.props,
                        { hour: r, minute: o } = new C(e, t),
                        { hourFormat: a, minuteFormat: n, use24HourTime: i } = this._getLocale(),
                        s = "number" == typeof r ? (r < 12 ? "am" : "pm") : void 0,
                        l = i ? v : f,
                        d = y,
                        c = "2-digit" === a ? 2 : 1,
                        h = "2-digit" === n ? 2 : 1,
                        u = [];
                    return (
                        u.push({ label: b, options: l.map((e) => ({ label: p(e, c), value: `${e}` })), onChange: this._handleHourChange, value: "number" == typeof r ? `${i ? r : r % 12 || 12}` : "", withEmptyOption: !0 }),
                        u.push({ label: g, options: d.map((e) => ({ label: p(e, h), value: `${e}` })), onChange: this._handleMinuteChange, value: "number" == typeof o ? `${o}` : "", withEmptyOption: !0 }),
                        i ||
                            u.push({
                                label: m,
                                options: [
                                    { label: "AM", value: "am" },
                                    { label: "PM", value: "pm" },
                                ],
                                onChange: this._handleAmPmChange,
                                value: void 0 !== s ? s : "",
                                withEmptyOption: void 0 === r || void 0 === o,
                            }),
                        u
                    );
                }
                _renderNativeInput() {
                    const { autoFocus: e, disabled: t, hour: r, label: a, minute: n } = this.props,
                        i = new C(r, n);
                    return o.createElement(d.Z, { autoCapitalize: "none", autoComplete: "off", autoCorrect: !1, autoFocus: e, editable: !t, label: a, name: "timeInput", numberOfLines: 1, onChange: this._handleNativeChange, spellCheck: "false", style: E.native, type: "time", value: i.toString() });
                }
                _renderSelectors() {
                    const { autoFocus: e, disabled: t, invalid: r } = this.props,
                        a = !!r,
                        n = this._getFields();
                    return o.createElement(
                        o.Fragment,
                        null,
                        n.map((r, n) => o.createElement(c.ZP, { autofocus: 0 === n ? e : void 0, disabled: t, hasError: a, key: r.label, label: r.label, onChange: r.onChange, options: r.options, value: r.value, withEmptyOption: r.withEmptyOption })),
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
                    return e && t ? `${p(this.hour)}:${p(this.minute)}` : "";
                }
            }
            const E = h.default.create((e) => ({ containerNative: { paddingTop: e.spaces.space2 }, containerSelectors: { display: "grid", gridColumnGap: e.spaces.space12, gridTemplateColumns: "1fr 1fr 1fr", paddingTop: e.spaces.space2 }, disabled: { cursor: "default", opacity: 0.5 }, native: { paddingVertical: 0, paddingHorizontal: 0 }, subtextWrapper: { flexDirection: "column", flex: 1 }, subtext: { paddingTop: e.spaces.space4 } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => d });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(717683),
                s = r(347101);
            const l = (e = {}) => {
                const t = o.useContext(i.Z),
                    { direction: r } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const d = l;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceStart~ondemand.ComposeScheduling~bundle.SettingsProfessionalProfileLocationSpotlight.565b411a.js.map
