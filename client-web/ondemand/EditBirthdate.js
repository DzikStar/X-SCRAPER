"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.EditBirthdate"],
    {
        416482: (e, t, a) => {
            a.r(t), a.d(t, { default: () => R });
            var r = a(202784),
                n = a(325686),
                o = a(688715),
                s = a(731708),
                i = a(260706),
                l = a(466818),
                d = a(190286),
                c = a(242454),
                h = a(392237),
                p = a(674132),
                u = a.n(p),
                m = a(944681),
                b = a(747576),
                y = a(529048);
            const g = u().c119dee8,
                f = u().g10411f0,
                _ = (0, o.ju)("https://x.com/privacy"),
                v = u().a0c5e370,
                D = (0, o.ju)("https://help.x.com/safety-and-security/birthday-visibility-settings"),
                C = u().i68fe54e,
                E = u().b4e729b6,
                Z = { headline: u().f3bb1b48, text: u().c9cb9972, confirmButtonLabel: u().e68b09b4 },
                w = u().a2bef112,
                S = u().c37622ec,
                I = [
                    { label: u().c33a97d6, value: b.m.PUBLIC },
                    { label: u().f679d166, value: b.m.FOLLOWERS },
                    { label: u().af293dc2, value: b.m.FOLLOWING },
                    { label: u().ae2205d2, value: b.m.MUTUAL_FOLLOW },
                    { label: u().bf994ab2, value: b.m.SELF },
                ],
                x = [{ label: u().bf994ab2, value: b.m.SELF }];
            class R extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleDateChange = (e) => {
                            const { year_visibility: t } = this.props.birthdate,
                                { day: a, month: r, year: n } = e;
                            this.props.onChange({ day: a, month: r, year: n }), (0, m.k)(n, r, a) && t !== b.m.SELF && this._handleYearVisibilityChange(b.m.SELF);
                        }),
                        (this._handleDayMonthVisibilityChange = (e) => {
                            this.props.onChange({ visibility: e });
                        }),
                        (this._handleYearVisibilityChange = (e) => {
                            this.props.onChange({ year_visibility: e });
                        }),
                        (this._handleRemove = () => {
                            this.setState({ showRemoveConfirmationModal: !0 });
                        }),
                        (this._handleModalCancel = () => {
                            this.setState({ showRemoveConfirmationModal: !1 });
                        }),
                        (this._handleModalConfirmed = () => {
                            this.props.onRemoveBirthdate(), this.setState({ showRemoveConfirmationModal: !1 });
                        }),
                        (this.state = { showRemoveConfirmationModal: !1 });
                }
                render() {
                    const { showBirthdateRemoveButton: e } = this.props;
                    return r.createElement(r.Fragment, null, this._renderBirthdate(), this._renderWhoSeesThis(), e && this._renderRemoveButton());
                }
                _renderBirthdate() {
                    const {
                        birthdate: { day: e, month: t, year: a },
                        errors: o = {},
                    } = this.props;
                    return r.createElement(n.Z, { "aria-label": g, role: "group" }, r.createElement(s.ZP, { color: "gray700", style: L.description }, f), r.createElement(s.ZP, { color: "gray700", style: L.description }, r.createElement(u().I18NFormatMessage, { $i18n: "cfd2909d" }, r.createElement(s.ZP, { link: _ }, u().h99b6d08))), r.createElement(i.Z, { autofocus: !0, day: e, daySelectorTestID: y.Z.daySelector, errorMessage: Object.keys(o).length ? S : void 0, errors: o, label: g, minSelectableYear: (0, m.Q)(), month: t, monthSelectorTestID: y.Z.monthSelector, onChange: this._handleDateChange, year: a, yearSelectorTestID: y.Z.yearSelector }));
                }
                _renderWhoSeesThis() {
                    const { birthdate: e } = this.props,
                        t = e.visibility,
                        a = e.year_visibility;
                    return r.createElement(n.Z, { "aria-label": v, role: "group", style: L.separator }, r.createElement(s.ZP, { weight: "bold" }, v), r.createElement(n.Z, { style: [L.description, L.descriptionContainer] }, r.createElement(s.ZP, { color: "gray700" }, r.createElement(u().I18NFormatMessage, { $i18n: "jea9c1cb" }, r.createElement(s.ZP, { link: D }, u().hce7a225)))), r.createElement(l.ZP, { label: C, onChange: this._handleDayMonthVisibilityChange, options: I, style: L.separator, testID: y.Z.dayMonthVisibility, value: t }), r.createElement(l.ZP, { label: E, onChange: this._handleYearVisibilityChange, options: (0, m.k)(e.year, e.month, e.day) ? x : I, style: L.separator, testID: y.Z.yearVisibility, value: a }), this._renderConfirmationModal());
                }
                _renderConfirmationModal() {
                    return this.state.showRemoveConfirmationModal ? r.createElement(d.Z, { confirmButtonLabel: Z.confirmButtonLabel, headline: Z.headline, onCancel: this._handleModalCancel, onConfirm: this._handleModalConfirmed, text: Z.text }) : null;
                }
                _renderRemoveButton() {
                    return r.createElement(c.Z, { color: "red500", label: w, onPress: this._handleRemove, testID: y.Z.remove });
                }
            }
            const L = h.default.create((e) => ({ separator: { marginVertical: e.spaces.space16 }, description: { marginVertical: e.spaces.space4 }, descriptionContainer: { flexDirection: "row" } }));
        },
        242454: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(807896),
                n = a(202784),
                o = a(325686),
                s = a(731708),
                i = a(58881),
                l = a(530732),
                d = a(392237);
            const c = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                h = ({ align: e = "center", color: t, label: a, ...h }) => {
                    const p = i.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(o.Z, { style: c.container }, n.createElement(l.Z, (0, r.Z)({}, h, { interactiveStyles: p, style: c.root }), n.createElement(s.ZP, { align: e, color: t }, a)));
                };
        },
        260706: (e, t, a) => {
            a.d(t, { Z: () => v });
            var r = a(202784),
                n = a(325686),
                o = a(674132),
                s = a.n(o),
                i = a(97043),
                l = a(323265),
                d = a(731708),
                c = a(154003),
                h = a(950822),
                p = a(586855),
                u = a(855488),
                m = a(466818),
                b = a(392237);
            const y = s().jf83d092,
                g = s().af4abf20,
                f = s().b871f280;
            let _ = 1;
            class v extends r.Component {
                constructor(e) {
                    super(e),
                        (this._showCalendarPicker = () => {
                            this._nativeCalendarRef?.showPicker?.();
                        }),
                        (this._setNativeCalendarRef = (e) => {
                            this._nativeCalendarRef = e;
                        }),
                        (this._handleSelectorChange = (e, t) => {
                            const { day: a, month: r, year: n } = this.props,
                                o = { day: a, month: r, year: n, [e]: parseInt(t, 10) };
                            this.props.onChange(o);
                        }),
                        (this._handleDayChange = (e) => {
                            this._handleSelectorChange("day", e);
                        }),
                        (this._handleMonthChange = (e) => {
                            this._handleSelectorChange("month", e);
                        }),
                        (this._handleYearChange = (e) => {
                            this._handleSelectorChange("year", e);
                        }),
                        (this._handleDateChange = (e) => {
                            const t = e.target.value.split("-"),
                                a = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) };
                            this.props.onChange(a);
                        });
                    const { day: t, maxSelectableYear: a, minSelectableYear: r, month: n, year: o } = e;
                    (this._errorID = `DATE_INPUT_${_}_ERROR`), (this._monthOptions = p.dX()), (this._nativeDefaultValue = p.ww(t, n, o)), (this._nativeMaxDate = p.ww(31, 12, a)), (this._nativeMinDate = p.ww(1, 1, r)), (_ += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: a, onChange: r, year: n } = this.props,
                        o = a && a !== e.month,
                        s = n && n !== e.year;
                    if (o || s) {
                        p
                            .DD(a, n)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || r({ month: a, year: n, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        a = l.ZP.isMobileOS() && !t;
                    return r.createElement(n.Z, null, a ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(d.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: a, errors: o = {}, label: s, autofocus: i, monthSelectorTestID: l, daySelectorTestID: d, yearSelectorTestID: u, style: b, minSelectableYear: _, maxSelectableYear: v, withCalendar: E, hideDay: Z, disabled: w } = this.props,
                        S = p.DD(t, a),
                        I = p.Zj(_, v, e, t);
                    return r.createElement(n.Z, { "aria-label": s, role: "group", style: [C.selectorsContainer, b] }, r.createElement(m.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: i, disabled: w, hasError: o.month, label: g, onChange: this._handleMonthChange, options: this._monthOptions, style: C.monthSelector, testID: l, value: t ? `${t}` : "", withEmptyOption: !0 }), Z ? null : r.createElement(m.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: w, hasError: o.day, label: y, onChange: this._handleDayChange, options: S, style: C.daySelector, testID: d, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(m.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: w, hasError: o.year, label: f, onChange: this._handleYearChange, options: I, style: C.yearSelector, testID: u, value: a ? `${a}` : "", withEmptyOption: !0 }), E && r.createElement(n.Z, { role: "label", style: C.calendarLabel }, r.createElement(c.ZP, { "aria-label": "Calendar", icon: D, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, h.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: s, onChange: this._handleDateChange, style: C.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: p.ww(e, t, a) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return r.createElement(u.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: C.dateInputRoot, type: "date" });
                }
            }
            const D = r.createElement(i.default, null),
                C = b.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...b.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, a) => {
            a.d(t, { DD: () => I, ZP: () => R, Zj: () => w, dX: () => Z, ww: () => x });
            var r = a(674132),
                n = a.n(r),
                o = a(822240);
            const s = 1,
                i = 2,
                l = 3,
                d = 4,
                c = 5,
                h = 6,
                p = 7,
                u = 8,
                m = 9,
                b = 10,
                y = 11,
                g = 12,
                f = { [s]: { label: n().hac89ab0, numDays: 31 }, [i]: { label: n().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [l]: { label: n().b56920fa, numDays: 31 }, [d]: { label: n().b1a0f1ec, numDays: 30 }, [c]: { label: n().daf779c8, numDays: 31 }, [h]: { label: n().c6ad074e, numDays: 30 }, [p]: { label: n().f1db106c, numDays: 31 }, [u]: { label: n().i4e80b7a, numDays: 31 }, [m]: { label: n().efa6cc1e, numDays: 30 }, [b]: { label: n().f40a0cbe, numDays: 31 }, [y]: { label: n().ac74a31c, numDays: 30 }, [g]: { label: n().i6c1e4b2, numDays: 31 } },
                _ = (e) => ({ label: `${e}`, value: `${e}` }),
                v = (0, o.Z)(1, 29).map(_),
                D = (0, o.Z)(1, 30).map(_),
                C = (0, o.Z)(1, 31).map(_),
                E = (0, o.Z)(1, 32).map(_),
                Z = () => Object.keys(f).map((e) => ({ label: f[e].label, value: e })),
                w = (e = 1, t, a, r) => {
                    const n = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, n + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === a ? S(e) : e))
                        .map(_);
                },
                S = (e) => 1 === new Date(e, 1, 29).getMonth(),
                I = (e, t) => {
                    if (!e) return E;
                    switch (2 === e && (!t || (t && S(t))) ? f[e].numDaysLeapYear : f[e].numDays) {
                        case 28:
                            return v;
                        case 29:
                            return D;
                        case 30:
                            return C;
                        default:
                            return E;
                    }
                },
                x = (e, t, a) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof a) {
                        return `${a}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const R = {
                getFormattedDateValue: x,
                getDayMonthYear: function (e) {
                    if (null == e) return { year: void 0, month: void 0, day: void 0 };
                    const t = e.split("-").map((e) => {
                        const t = parseInt(e, 10);
                        if (!Number.isNaN(t)) return t;
                    });
                    return { year: t[0], month: t[1], day: t[2] };
                },
            };
        },
        466818: (e, t, a) => {
            a.d(t, { ZP: () => g });
            var r = a(202784),
                n = a(325686),
                o = a(487552),
                s = a(302752),
                i = a(183806),
                l = a(731708),
                d = a(950822),
                c = a(224162),
                h = a(392237);
            const p = r.forwardRef((e, t) => (0, d.Z)("select", { ...e, ref: t })),
                u = (e) => (0, d.Z)("option", e);
            let m = 1;
            class b extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: a } = this.props,
                                { selectedIndex: r, value: n } = e.target;
                            t && t(n, r - (a ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: a, hasError: d, helperText: m, options: b, style: g, testID: f, value: _, withEmptyOption: v } = this.props,
                        { isFocused: D } = this.state,
                        C = l.ZP.getLanguage(),
                        E = void 0 === d ? !!a : d,
                        Z = new Set();
                    a && Z.add(this._errorID), e && Z.add(e), m && Z.add(this._helperID);
                    const w = Z.size ? [...Z].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === C ? h.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(C) ? h.default.theme.fontFamilies.rtl : h.default.theme.fontFamilies.normal;
                            return r.createElement(
                                n.Z,
                                { style: [i.Z.border, y.container, t && i.Z.disabled, D && i.Z.focusedBorderValid, E && i.Z.invalidBorderColor, D && E && i.Z.focusedBorderInvalid, g] },
                                this._renderLabel(),
                                r.createElement(
                                    p,
                                    { "aria-describedby": w, "aria-invalid": E, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [y.select, { fontFamily: l }, t && i.Z.disabled], testID: f || "", value: _ },
                                    v ? r.createElement(u, { disabled: !0, style: y.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: t, label: a, value: n } = e;
                                        return r.createElement(u, { disabled: t, key: `${a}-${n}`, style: y.option, value: n }, a);
                                    }),
                                ),
                                r.createElement(o.default, { style: [y.dropdownCaret, D && i.Z.validColor, !(!d && !a) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        E && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: a } = this.props,
                        { isFocused: n } = this.state;
                    return r.createElement(l.ZP, { color: t || e ? "red500" : n ? "primary" : "gray700", id: this._labelID, role: "label", style: y.label }, a);
                }
                _renderHelperText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "gray700", id: this._helperID, style: y.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "red500", id: this._errorID, style: y.helperText }, this.props.errorText));
                }
            }
            b.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const y = h.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                g = b;
        },
        487552: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                s = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        822240: (e, t, a) => {
            a.d(t, { Z: () => r });
            a(136728);
            const r = (e, t, a = 1) => {
                const r = [];
                for (let n = e; a > 0 ? n < t : n > t; n += a) r.push(n);
                return r;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.EditBirthdate.7dde62ca.js.map
