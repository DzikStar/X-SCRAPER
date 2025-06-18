"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-bc6ccf4c", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        751475: (e, t, a) => {
            a.d(t, { Z: () => h });
            a(136728);
            var r = a(202784),
                n = a(111677),
                o = a.n(n),
                l = a(190286);
            const i = o().b15c0a18,
                s = o().aebf81c8,
                c = o().aa744c1e,
                d = o().fe04d89a,
                h = (e) => {
                    const { children: t, fallbackBackPath: a, history: n, onNavigation: o, shouldBlockNavigation: h, shouldBlockUnload: u } = e,
                        [p, m] = r.useState(void 0);
                    r.useEffect(() => {
                        const e = (e) => {
                            u && (e.preventDefault(), (e.returnValue = ""));
                        };
                        return (
                            window.addEventListener("beforeunload", e),
                            () => {
                                window.removeEventListener("beforeunload", e);
                            }
                        );
                    }, [u]);
                    const b = r.useCallback((e, t) => !(!p && h(e, t)) || (m({ nextLocation: e, action: t }), !1), [p, h]);
                    r.useEffect(() => {
                        const e = n.block(b);
                        return () => e();
                    }, [b, n]);
                    const g = r.useCallback(() => {
                            m(void 0);
                        }, [m]),
                        y = r.useCallback(() => {
                            o?.(),
                                m((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: r } = e;
                                    switch (t) {
                                        case "PUSH":
                                            n.push(r);
                                            break;
                                        case "REPLACE":
                                            n.replace(r);
                                            break;
                                        case "POP":
                                            n.goBackThroughModals({ fallbackPath: a });
                                    }
                                });
                        }, [a, n, o]);
                    return r.createElement(r.Fragment, null, t, p ? r.createElement(l.Z, { cancelButtonLabel: c, confirmButtonLabel: d, confirmButtonType: "destructiveFilled", headline: i, onCancel: g, onConfirm: y, text: s }) : null);
                };
        },
        260706: (e, t, a) => {
            a.d(t, { Z: () => C });
            var r = a(202784),
                n = a(325686),
                o = a(111677),
                l = a.n(o),
                i = a(97043),
                s = a(323265),
                c = a(731708),
                d = a(154003),
                h = a(950822),
                u = a(586855),
                p = a(855488),
                m = a(466818),
                b = a(392237);
            const g = l().jf83d092,
                y = l().af4abf20,
                f = l().b871f280;
            let v = 1;
            class C extends r.Component {
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
                    (this._errorID = `DATE_INPUT_${v}_ERROR`), (this._monthOptions = u.dX()), (this._nativeDefaultValue = u.ww(t, n, o)), (this._nativeMaxDate = u.ww(31, 12, a)), (this._nativeMinDate = u.ww(1, 1, r)), (v += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: a, onChange: r, year: n } = this.props,
                        o = a && a !== e.month,
                        l = n && n !== e.year;
                    if (o || l) {
                        u
                            .DD(a, n)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || r({ month: a, year: n, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        a = s.ZP.isMobileOS() && !t;
                    return r.createElement(n.Z, null, a ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: a, errors: o = {}, label: l, autofocus: i, monthSelectorTestID: s, daySelectorTestID: c, yearSelectorTestID: p, style: b, minSelectableYear: v, maxSelectableYear: C, withCalendar: _, hideDay: Z, disabled: w } = this.props,
                        x = u.DD(t, a),
                        I = u.Zj(v, C, e, t);
                    return r.createElement(n.Z, { "aria-label": l, role: "group", style: [E.selectorsContainer, b] }, r.createElement(m.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: i, disabled: w, hasError: o.month, label: y, onChange: this._handleMonthChange, options: this._monthOptions, style: E.monthSelector, testID: s, value: t ? `${t}` : "", withEmptyOption: !0 }), Z ? null : r.createElement(m.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: w, hasError: o.day, label: g, onChange: this._handleDayChange, options: x, style: E.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(m.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: w, hasError: o.year, label: f, onChange: this._handleYearChange, options: I, style: E.yearSelector, testID: p, value: a ? `${a}` : "", withEmptyOption: !0 }), _ && r.createElement(n.Z, { role: "label", style: E.calendarLabel }, r.createElement(d.ZP, { "aria-label": "Calendar", icon: D, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, h.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: l, onChange: this._handleDateChange, style: E.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: u.ww(e, t, a) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return r.createElement(p.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: E.dateInputRoot, type: "date" });
                }
            }
            const D = r.createElement(i.default, null),
                E = b.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...b.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, a) => {
            a.d(t, { DD: () => I, ZP: () => k, Zj: () => w, dX: () => Z, ww: () => S });
            var r = a(111677),
                n = a.n(r),
                o = a(822240);
            const l = 1,
                i = 2,
                s = 3,
                c = 4,
                d = 5,
                h = 6,
                u = 7,
                p = 8,
                m = 9,
                b = 10,
                g = 11,
                y = 12,
                f = { [l]: { label: n().hac89ab0, numDays: 31 }, [i]: { label: n().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [s]: { label: n().b56920fa, numDays: 31 }, [c]: { label: n().b1a0f1ec, numDays: 30 }, [d]: { label: n().daf779c8, numDays: 31 }, [h]: { label: n().c6ad074e, numDays: 30 }, [u]: { label: n().f1db106c, numDays: 31 }, [p]: { label: n().i4e80b7a, numDays: 31 }, [m]: { label: n().efa6cc1e, numDays: 30 }, [b]: { label: n().f40a0cbe, numDays: 31 }, [g]: { label: n().ac74a31c, numDays: 30 }, [y]: { label: n().i6c1e4b2, numDays: 31 } },
                v = (e) => ({ label: `${e}`, value: `${e}` }),
                C = (0, o.Z)(1, 29).map(v),
                D = (0, o.Z)(1, 30).map(v),
                E = (0, o.Z)(1, 31).map(v),
                _ = (0, o.Z)(1, 32).map(v),
                Z = () => Object.keys(f).map((e) => ({ label: f[e].label, value: e })),
                w = (e = 1, t, a, r) => {
                    const n = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, n + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === a ? x(e) : e))
                        .map(v);
                },
                x = (e) => 1 === new Date(e, 1, 29).getMonth(),
                I = (e, t) => {
                    if (!e) return _;
                    switch (2 === e && (!t || (t && x(t))) ? f[e].numDaysLeapYear : f[e].numDays) {
                        case 28:
                            return C;
                        case 29:
                            return D;
                        case 30:
                            return E;
                        default:
                            return _;
                    }
                },
                S = (e, t, a) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof a) {
                        return `${a}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const k = {
                getFormattedDateValue: S,
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
        420412: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                n = a(325686),
                o = a(235902),
                l = a(885015),
                i = a(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: s } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return a ? r.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] })), r.createElement(n.Z, { style: c.gapText }, a), r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] }))) : r.createElement(n.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                n = a(202784),
                o = a(325686),
                l = a(392237);
            class i extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...l } = this.props,
                        i = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, s.column, a && s.withGutterColumn] }));
                    return n.createElement(o.Z, (0, r.Z)({ style: [t, s.root, a && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        779610: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(325686),
                o = a(191796),
                l = a(58399),
                i = a(731708),
                s = a(952428),
                c = a(392237);
            const d = (e) => {
                    const { decoration: t, description: a, disabled: d = !1, isActive: u = !1, label: p, link: m, onPress: b, paddingHorizontal: g, renderRightContent: y, role: f = "tab", styleOverride: v, testID: C = "pivot", thumbnail: D, thumbnailSize: E, withoutArrow: _ = !1 } = e,
                        Z = [h.thumbnailContainer, "medium" === E && h.thumbnailContainerMedium],
                        w = "string" == typeof p ? r.createElement(i.ZP, null, p) : p,
                        x = "object" == typeof m && m.external && !m.openInSameFrame,
                        I = a ? ("string" == typeof a ? r.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, a) : a) : null,
                        S = r.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? c.default.theme.spaces[g] : c.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === f ? u : null, disabled: d, link: d ? void 0 : m, onPress: b, role: f, style: [h.root, S, d && h.disabled, v], testID: C, withInteractiveStyling: !!m || !!b }, r.createElement(n.Z, { style: h.contentContainer }, D ? r.createElement(n.Z, { style: Z }, D) : null, r.createElement(n.Z, { style: h.content }, w, I), y ? y() : null, (!m && !b) || d || _ ? null : x ? r.createElement(o.default, { style: h.icon }) : r.createElement(l.default, { style: h.icon })), t);
                },
                h = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        466818: (e, t, a) => {
            a.d(t, { ZP: () => y });
            var r = a(202784),
                n = a(325686),
                o = a(487552),
                l = a(302752),
                i = a(183806),
                s = a(731708),
                c = a(950822),
                d = a(224162),
                h = a(392237);
            const u = r.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                p = (e) => (0, c.Z)("option", e);
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
                    const { "aria-describedby": e, disabled: t, errorText: a, hasError: c, helperText: m, options: b, style: y, testID: f, value: v, withEmptyOption: C } = this.props,
                        { isFocused: D } = this.state,
                        E = s.ZP.getLanguage(),
                        _ = void 0 === c ? !!a : c,
                        Z = new Set();
                    a && Z.add(this._errorID), e && Z.add(e), m && Z.add(this._helperID);
                    const w = Z.size ? [...Z].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const s = "ja" === E ? h.default.theme.fontFamilies.japan : "rtl" === e || l.Z.isLocaleRTL(E) ? h.default.theme.fontFamilies.rtl : h.default.theme.fontFamilies.normal;
                            return r.createElement(
                                n.Z,
                                { style: [i.Z.border, g.container, t && i.Z.disabled, D && i.Z.focusedBorderValid, _ && i.Z.invalidBorderColor, D && _ && i.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                r.createElement(
                                    u,
                                    { "aria-describedby": w, "aria-invalid": _, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: s }, t && i.Z.disabled], testID: f || "", value: v },
                                    C ? r.createElement(p, { disabled: !0, style: g.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: t, label: a, value: n } = e;
                                        return r.createElement(p, { disabled: t, key: `${a}-${n}`, style: g.option, value: n }, a);
                                    }),
                                ),
                                r.createElement(o.default, { style: [g.dropdownCaret, D && i.Z.validColor, !(!c && !a) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        _ && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: a } = this.props,
                        { isFocused: n } = this.state;
                    return r.createElement(s.ZP, { color: t || e ? "red500" : n ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, a);
                }
                _renderHelperText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(s.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(s.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            b.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = h.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = b;
        },
        58399: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(717683),
                i = a(347101);
            const s = (e = {}) => {
                const t = r.useContext(l.Z),
                    { direction: a } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        264171: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        262009: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        465233: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(716406);
            function n(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(n) : (0, r.Z)(e, (e) => n(e));
            }
        },
        125568: (e, t, a) => {
            a.d(t, { t: () => n });
            var r = a(202784);
            function n() {
                const e = r.useRef(!0);
                return (
                    r.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    r.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-bc6ccf4c.2d23675a.js.map
