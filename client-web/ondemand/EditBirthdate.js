"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.EditBirthdate"],
    {
        416482: (e, t, a) => {
            a.r(t), a.d(t, { default: () => R });
            var r = a(202784),
                n = a(325686),
                s = a(688715),
                o = a(731708),
                l = a(260706),
                i = a(466818),
                d = a(190286),
                h = a(242454),
                c = a(392237),
                p = a(111677),
                u = a.n(p),
                m = a(944681),
                b = a(747576),
                y = a(529048);
            const g = u().c119dee8,
                _ = u().g10411f0,
                f = (0, s.ju)("https://x.com/privacy"),
                v = u().a0c5e370,
                C = (0, s.ju)("https://help.x.com/safety-and-security/birthday-visibility-settings"),
                D = u().i68fe54e,
                E = u().b4e729b6,
                Z = { headline: u().f3bb1b48, text: u().c9cb9972, confirmButtonLabel: u().e68b09b4 },
                S = u().a2bef112,
                w = u().c37622ec,
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
                        errors: s = {},
                    } = this.props;
                    return r.createElement(n.Z, { "aria-label": g, role: "group" }, r.createElement(o.ZP, { color: "gray700", style: P.description }, _), r.createElement(o.ZP, { color: "gray700", style: P.description }, r.createElement(u().I18NFormatMessage, { $i18n: "cfd2909d" }, r.createElement(o.ZP, { link: f }, u().h99b6d08))), r.createElement(l.Z, { autofocus: !0, day: e, daySelectorTestID: y.Z.daySelector, errorMessage: Object.keys(s).length ? w : void 0, errors: s, label: g, minSelectableYear: (0, m.Q)(), month: t, monthSelectorTestID: y.Z.monthSelector, onChange: this._handleDateChange, year: a, yearSelectorTestID: y.Z.yearSelector }));
                }
                _renderWhoSeesThis() {
                    const { birthdate: e } = this.props,
                        t = e.visibility,
                        a = e.year_visibility;
                    return r.createElement(n.Z, { "aria-label": v, role: "group", style: P.separator }, r.createElement(o.ZP, { weight: "bold" }, v), r.createElement(n.Z, { style: [P.description, P.descriptionContainer] }, r.createElement(o.ZP, { color: "gray700" }, r.createElement(u().I18NFormatMessage, { $i18n: "jea9c1cb" }, r.createElement(o.ZP, { link: C }, u().hce7a225)))), r.createElement(i.ZP, { label: D, onChange: this._handleDayMonthVisibilityChange, options: I, style: P.separator, testID: y.Z.dayMonthVisibility, value: t }), r.createElement(i.ZP, { label: E, onChange: this._handleYearVisibilityChange, options: (0, m.k)(e.year, e.month, e.day) ? x : I, style: P.separator, testID: y.Z.yearVisibility, value: a }), this._renderConfirmationModal());
                }
                _renderConfirmationModal() {
                    return this.state.showRemoveConfirmationModal ? r.createElement(d.Z, { confirmButtonLabel: Z.confirmButtonLabel, headline: Z.headline, onCancel: this._handleModalCancel, onConfirm: this._handleModalConfirmed, text: Z.text }) : null;
                }
                _renderRemoveButton() {
                    return r.createElement(h.Z, { color: "red500", label: S, onPress: this._handleRemove, testID: y.Z.remove });
                }
            }
            const P = c.default.create((e) => ({ separator: { marginVertical: e.spaces.space16 }, description: { marginVertical: e.spaces.space4 }, descriptionContainer: { flexDirection: "row" } }));
        },
        242454: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                n = a(202784),
                s = a(325686),
                o = a(731708),
                l = a(58881),
                i = a(530732),
                d = a(392237);
            const h = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                c = ({ align: e = "center", color: t, label: a, ...c }) => {
                    const p = l.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(s.Z, { style: h.container }, n.createElement(i.Z, (0, r.Z)({}, c, { interactiveStyles: p, style: h.root }), n.createElement(o.ZP, { align: e, color: t }, a)));
                };
        },
        260706: (e, t, a) => {
            a.d(t, { Z: () => v });
            var r = a(202784),
                n = a(325686),
                s = a(111677),
                o = a.n(s),
                l = a(97043),
                i = a(323265),
                d = a(731708),
                h = a(154003),
                c = a(950822),
                p = a(586855),
                u = a(855488),
                m = a(466818),
                b = a(392237);
            const y = o().jf83d092,
                g = o().af4abf20,
                _ = o().b871f280;
            let f = 1;
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
                                s = { day: a, month: r, year: n, [e]: parseInt(t, 10) };
                            this.props.onChange(s);
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
                    const { day: t, maxSelectableYear: a, minSelectableYear: r, month: n, year: s } = e;
                    (this._errorID = `DATE_INPUT_${f}_ERROR`), (this._monthOptions = p.dX()), (this._nativeDefaultValue = p.ww(t, n, s)), (this._nativeMaxDate = p.ww(31, 12, a)), (this._nativeMinDate = p.ww(1, 1, r)), (f += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: a, onChange: r, year: n } = this.props,
                        s = a && a !== e.month,
                        o = n && n !== e.year;
                    if (s || o) {
                        p
                            .DD(a, n)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || r({ month: a, year: n, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        a = i.ZP.isMobileOS() && !t;
                    return r.createElement(n.Z, null, a ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(d.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: a, errors: s = {}, label: o, autofocus: l, monthSelectorTestID: i, daySelectorTestID: d, yearSelectorTestID: u, style: b, minSelectableYear: f, maxSelectableYear: v, withCalendar: E, hideDay: Z, disabled: S } = this.props,
                        w = p.DD(t, a),
                        I = p.Zj(f, v, e, t);
                    return r.createElement(n.Z, { "aria-label": o, role: "group", style: [D.selectorsContainer, b] }, r.createElement(m.ZP, { "aria-describedby": s.month ? this._errorID : void 0, autofocus: l, disabled: S, hasError: s.month, label: g, onChange: this._handleMonthChange, options: this._monthOptions, style: D.monthSelector, testID: i, value: t ? `${t}` : "", withEmptyOption: !0 }), Z ? null : r.createElement(m.ZP, { "aria-describedby": s.day ? this._errorID : void 0, disabled: S, hasError: s.day, label: y, onChange: this._handleDayChange, options: w, style: D.daySelector, testID: d, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(m.ZP, { "aria-describedby": s.year ? this._errorID : void 0, disabled: S, hasError: s.year, label: _, onChange: this._handleYearChange, options: I, style: D.yearSelector, testID: u, value: a ? `${a}` : "", withEmptyOption: !0 }), E && r.createElement(n.Z, { role: "label", style: D.calendarLabel }, r.createElement(h.ZP, { "aria-label": "Calendar", icon: C, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, c.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: o, onChange: this._handleDateChange, style: D.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: p.ww(e, t, a) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return r.createElement(u.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: D.dateInputRoot, type: "date" });
                }
            }
            const C = r.createElement(l.default, null),
                D = b.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...b.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, a) => {
            a.d(t, { DD: () => I, ZP: () => R, Zj: () => S, dX: () => Z, ww: () => x });
            var r = a(111677),
                n = a.n(r),
                s = a(822240);
            const o = 1,
                l = 2,
                i = 3,
                d = 4,
                h = 5,
                c = 6,
                p = 7,
                u = 8,
                m = 9,
                b = 10,
                y = 11,
                g = 12,
                _ = { [o]: { label: n().hac89ab0, numDays: 31 }, [l]: { label: n().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [i]: { label: n().b56920fa, numDays: 31 }, [d]: { label: n().b1a0f1ec, numDays: 30 }, [h]: { label: n().daf779c8, numDays: 31 }, [c]: { label: n().c6ad074e, numDays: 30 }, [p]: { label: n().f1db106c, numDays: 31 }, [u]: { label: n().i4e80b7a, numDays: 31 }, [m]: { label: n().efa6cc1e, numDays: 30 }, [b]: { label: n().f40a0cbe, numDays: 31 }, [y]: { label: n().ac74a31c, numDays: 30 }, [g]: { label: n().i6c1e4b2, numDays: 31 } },
                f = (e) => ({ label: `${e}`, value: `${e}` }),
                v = (0, s.Z)(1, 29).map(f),
                C = (0, s.Z)(1, 30).map(f),
                D = (0, s.Z)(1, 31).map(f),
                E = (0, s.Z)(1, 32).map(f),
                Z = () => Object.keys(_).map((e) => ({ label: _[e].label, value: e })),
                S = (e = 1, t, a, r) => {
                    const n = t || new Date(Date.now()).getFullYear();
                    return (0, s.Z)(e, n + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === a ? w(e) : e))
                        .map(f);
                },
                w = (e) => 1 === new Date(e, 1, 29).getMonth(),
                I = (e, t) => {
                    if (!e) return E;
                    switch (2 === e && (!t || (t && w(t))) ? _[e].numDaysLeapYear : _[e].numDays) {
                        case 28:
                            return v;
                        case 29:
                            return C;
                        case 30:
                            return D;
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
                s = a(487552),
                o = a(302752),
                l = a(183806),
                i = a(731708),
                d = a(950822),
                h = a(224162),
                c = a(392237);
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
                    const { "aria-describedby": e, disabled: t, errorText: a, hasError: d, helperText: m, options: b, style: g, testID: _, value: f, withEmptyOption: v } = this.props,
                        { isFocused: C } = this.state,
                        D = i.ZP.getLanguage(),
                        E = void 0 === d ? !!a : d,
                        Z = new Set();
                    a && Z.add(this._errorID), e && Z.add(e), m && Z.add(this._helperID);
                    const S = Z.size ? [...Z].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(h.ZP.Consumer, null, ({ direction: e }) => {
                            const i = "ja" === D ? c.default.theme.fontFamilies.japan : "rtl" === e || o.Z.isLocaleRTL(D) ? c.default.theme.fontFamilies.rtl : c.default.theme.fontFamilies.normal;
                            return r.createElement(
                                n.Z,
                                { style: [l.Z.border, y.container, t && l.Z.disabled, C && l.Z.focusedBorderValid, E && l.Z.invalidBorderColor, C && E && l.Z.focusedBorderInvalid, g] },
                                this._renderLabel(),
                                r.createElement(
                                    p,
                                    { "aria-describedby": S, "aria-invalid": E, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [y.select, { fontFamily: i }, t && l.Z.disabled], testID: _ || "", value: f },
                                    v ? r.createElement(u, { disabled: !0, style: y.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: t, label: a, value: n } = e;
                                        return r.createElement(u, { disabled: t, key: `${a}-${n}`, style: y.option, value: n }, a);
                                    }),
                                ),
                                r.createElement(s.default, { style: [y.dropdownCaret, C && l.Z.validColor, !(!d && !a) && l.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        E && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: a } = this.props,
                        { isFocused: n } = this.state;
                    return r.createElement(i.ZP, { color: t || e ? "red500" : n ? "primary" : "gray700", id: this._labelID, role: "label", style: y.label }, a);
                }
                _renderHelperText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(i.ZP, { color: "gray700", id: this._helperID, style: y.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(i.ZP, { color: "red500", id: this._errorID, style: y.helperText }, this.props.errorText));
                }
            }
            b.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const y = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                g = b;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.EditBirthdate.486970ea.js.map
