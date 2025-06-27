"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-bc6ccf4c", "loader.AudioDock", "bundle.AudioSpaceReport", "loader.AudioContextVoiceMedia"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                l = r(731708),
                s = r(58881),
                i = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: r, ...p }) => {
                    const u = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(n.Z, { style: d.container }, o.createElement(i.Z, (0, a.Z)({}, p, { interactiveStyles: u, style: d.root }), o.createElement(l.ZP, { align: e, color: t }, r)));
                };
        },
        97272: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(807896),
                o = r(202784),
                n = r(896632),
                l = r(325686),
                s = r(913973),
                i = r(516951),
                c = r(731708),
                d = r(466792),
                p = r(58881),
                u = r(530732),
                h = r(352924),
                m = r(392237);
            const b = m.default.create((e) => ({ root: { padding: e.spaces.space4, borderRadius: e.borderRadii.large, overflow: "hidden" }, base: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, backgroundColor: { backgroundColor: e.colors.cellBackground }, border: { borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent }, borderColor: { borderColor: e.colors.borderColor }, activeBorder: { borderColor: e.colors.blue500 }, containerClicked: { backgroundColor: e.colors.primary }, interactive: { cursor: "pointer" }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, textContainer: { margin: e.spaces.space12, flexShrink: 1 }, radioContainer: { userSelect: "none", marginEnd: e.spaces.space12, marginTop: e.spaces.space12, position: "absolute", end: "0px" }, helpText: { marginTop: e.spaces.space8 }, tileStyle: { height: "inherit" }, mainContainer: { padding: e.spaces.space4 }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor } })),
                g = { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                y = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: a, disabled: n, helpText: y, label: f, name: C, onChange: D, renderBorderWhenSelected: E, selectorBackgroundStyles: _ }) => {
                    const v = p.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: a ? m.default.theme.colors.primary : m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        Z = (0, h.b)(),
                        w = (0, h.b)();
                    return o.createElement(d.Z, { disabled: n }, (d) => o.createElement(l.Z, { style: b.root }, o.createElement(l.Z, { role: "label", style: [b.base, _ || b.backgroundColor, b.border, E ? null : b.borderColor, E && a && b.activeBorder, !n && b.interactive] }, o.createElement(l.Z, { style: b.textContainer }, o.createElement(c.ZP, { id: Z, weight: "bold" }, f), y && o.createElement(c.ZP, { color: "gray700", id: w, size: "subtext2", style: b.helpText }, y)), o.createElement(l.Z, { style: b.radioContainer }, E ? null : o.createElement(u.Z, { disabled: n, interactiveStyles: v, interactivityState: d, style: b.radioBackground }, o.createElement(l.Z, { style: [b.circle, a && b.circleActive, n && b.circleDisabled, a && n && b.circleCheckedAndDisabled] }, a ? o.createElement(s.default, { style: b.checkMark }) : null)), o.createElement("input", { "aria-describedby": w, "aria-label": e, "aria-labelledby": Z, "aria-posinset": t, "aria-setsize": r, checked: a, disabled: n, name: C, onChange: a ? i.Z : D, style: g, type: "radio" })))));
                },
                f = (e) => o.createElement(n.Z, (0, a.Z)({}, e, { renderSelector: (e) => o.createElement(y, (0, a.Z)({}, e, { key: e.value })) }));
        },
        260706: (e, t, r) => {
            r.d(t, { Z: () => D });
            var a = r(202784),
                o = r(325686),
                n = r(111677),
                l = r.n(n),
                s = r(97043),
                i = r(323265),
                c = r(731708),
                d = r(154003),
                p = r(950822),
                u = r(586855),
                h = r(855488),
                m = r(466818),
                b = r(392237);
            const g = l().jf83d092,
                y = l().af4abf20,
                f = l().b871f280;
            let C = 1;
            class D extends a.Component {
                constructor(e) {
                    super(e),
                        (this._showCalendarPicker = () => {
                            this._nativeCalendarRef?.showPicker?.();
                        }),
                        (this._setNativeCalendarRef = (e) => {
                            this._nativeCalendarRef = e;
                        }),
                        (this._handleSelectorChange = (e, t) => {
                            const { day: r, month: a, year: o } = this.props,
                                n = { day: r, month: a, year: o, [e]: parseInt(t, 10) };
                            this.props.onChange(n);
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
                                r = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) };
                            this.props.onChange(r);
                        });
                    const { day: t, maxSelectableYear: r, minSelectableYear: a, month: o, year: n } = e;
                    (this._errorID = `DATE_INPUT_${C}_ERROR`), (this._monthOptions = u.dX()), (this._nativeDefaultValue = u.ww(t, o, n)), (this._nativeMaxDate = u.ww(31, 12, r)), (this._nativeMinDate = u.ww(1, 1, a)), (C += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: r, onChange: a, year: o } = this.props,
                        n = r && r !== e.month,
                        l = o && o !== e.year;
                    if (n || l) {
                        u
                            .DD(r, o)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || a({ month: r, year: o, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        r = i.ZP.isMobileOS() && !t;
                    return a.createElement(o.Z, null, r ? this._renderNativeDateInput() : this._renderSelectors(), e ? a.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: r, errors: n = {}, label: l, autofocus: s, monthSelectorTestID: i, daySelectorTestID: c, yearSelectorTestID: h, style: b, minSelectableYear: C, maxSelectableYear: D, withCalendar: v, hideDay: Z, disabled: w } = this.props,
                        x = u.DD(t, r),
                        I = u.Zj(C, D, e, t);
                    return a.createElement(o.Z, { "aria-label": l, role: "group", style: [_.selectorsContainer, b] }, a.createElement(m.ZP, { "aria-describedby": n.month ? this._errorID : void 0, autofocus: s, disabled: w, hasError: n.month, label: y, onChange: this._handleMonthChange, options: this._monthOptions, style: _.monthSelector, testID: i, value: t ? `${t}` : "", withEmptyOption: !0 }), Z ? null : a.createElement(m.ZP, { "aria-describedby": n.day ? this._errorID : void 0, disabled: w, hasError: n.day, label: g, onChange: this._handleDayChange, options: x, style: _.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), a.createElement(m.ZP, { "aria-describedby": n.year ? this._errorID : void 0, disabled: w, hasError: n.year, label: f, onChange: this._handleYearChange, options: I, style: _.yearSelector, testID: h, value: r ? `${r}` : "", withEmptyOption: !0 }), v && a.createElement(o.Z, { role: "label", style: _.calendarLabel }, a.createElement(d.ZP, { "aria-label": "Calendar", icon: E, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, p.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: l, onChange: this._handleDateChange, style: _.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: u.ww(e, t, r) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return a.createElement(h.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: _.dateInputRoot, type: "date" });
                }
            }
            const E = a.createElement(s.default, null),
                _ = b.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...b.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, r) => {
            r.d(t, { DD: () => I, ZP: () => k, Zj: () => w, dX: () => Z, ww: () => S });
            var a = r(111677),
                o = r.n(a),
                n = r(822240);
            const l = 1,
                s = 2,
                i = 3,
                c = 4,
                d = 5,
                p = 6,
                u = 7,
                h = 8,
                m = 9,
                b = 10,
                g = 11,
                y = 12,
                f = { [l]: { label: o().hac89ab0, numDays: 31 }, [s]: { label: o().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [i]: { label: o().b56920fa, numDays: 31 }, [c]: { label: o().b1a0f1ec, numDays: 30 }, [d]: { label: o().daf779c8, numDays: 31 }, [p]: { label: o().c6ad074e, numDays: 30 }, [u]: { label: o().f1db106c, numDays: 31 }, [h]: { label: o().i4e80b7a, numDays: 31 }, [m]: { label: o().efa6cc1e, numDays: 30 }, [b]: { label: o().f40a0cbe, numDays: 31 }, [g]: { label: o().ac74a31c, numDays: 30 }, [y]: { label: o().i6c1e4b2, numDays: 31 } },
                C = (e) => ({ label: `${e}`, value: `${e}` }),
                D = (0, n.Z)(1, 29).map(C),
                E = (0, n.Z)(1, 30).map(C),
                _ = (0, n.Z)(1, 31).map(C),
                v = (0, n.Z)(1, 32).map(C),
                Z = () => Object.keys(f).map((e) => ({ label: f[e].label, value: e })),
                w = (e = 1, t, r, a) => {
                    const o = t || new Date(Date.now()).getFullYear();
                    return (0, n.Z)(e, o + 1)
                        .reverse()
                        .filter((e) => (2 === a && 29 === r ? x(e) : e))
                        .map(C);
                },
                x = (e) => 1 === new Date(e, 1, 29).getMonth(),
                I = (e, t) => {
                    if (!e) return v;
                    switch (2 === e && (!t || (t && x(t))) ? f[e].numDaysLeapYear : f[e].numDays) {
                        case 28:
                            return D;
                        case 29:
                            return E;
                        case 30:
                            return _;
                        default:
                            return v;
                    }
                },
                S = (e, t, r) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof r) {
                        return `${r}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
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
        661810: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                o = r(325686),
                n = r(392237);
            function l({ spacing: e, style: t }) {
                return a.createElement(o.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        15038: (e, t, r) => {
            r.d(t, { ZP: () => d });
            var a = r(202784),
                o = r(325686),
                n = r(950822),
                l = r(392237);
            const s = (e) => (0, n.Z)("div", e);
            class i extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: r, style: n } = this.props,
                        { active: l } = this.state,
                        i = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return a.createElement(s, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, n, l && i, l && e] }, a.createElement(o.Z, { style: c.inner }, "function" == typeof r ? r(l) : r));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            i.defaultProps = { allowDragDrop: !0 };
            const c = l.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = i;
        },
        449161: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(807896),
                o = r(202784),
                n = r(111677),
                l = r.n(n),
                s = r(154003),
                i = r(950822),
                c = r(392237);
            const d = l().i5450bec,
                p = l().f7432494;
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                r = e.target,
                                a = r.files;
                            a.length && t && t(a), (r.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: r, onChange: n, testID: l, ...c } = this.props,
                        u = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(s.ZP, (0, a.Z)({ hoverLabel: e ? { label: u ? p : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, i.Z)("input", { accept: e, disabled: t, multiple: r, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: h.input, tabIndex: -1, testID: l, type: "file" }));
                }
            }
            u.defaultProps = { disabled: !1, multiple: !1 };
            const h = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = u;
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                o = r(325686),
                n = r(235902),
                l = r(885015),
                s = r(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: i } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? a.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] })), a.createElement(o.Z, { style: c.gapText }, r), a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] }))) : a.createElement(o.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                l = r(392237);
            class s extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        s = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, i.column, r && i.withGutterColumn] }));
                    return o.createElement(n.Z, (0, a.Z)({ style: [t, i.root, r && i.withGutter] }, l), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const i = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        626820: (e, t, r) => {
            r.d(t, { Z: () => C });
            var a = r(202784),
                o = r(325686),
                n = r(111677),
                l = r.n(n),
                s = r(797681),
                i = r(837020),
                c = r(530525),
                d = r(731708),
                p = r(439592),
                u = r(154003),
                h = r(879891),
                m = r(352924),
                b = r(392237);
            const g = b.default.create((e) => ({ root: { borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "row", alignItems: "center", width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "row", flex: 1 }, contentTextContainer: { flex: 1, alignItems: "flex-start", justifyContent: "center" }, dismissButton: { paddingStart: e.spaces.space12 }, icon: { color: e.colors.text, marginEnd: e.spaces.space8 }, illustration: { marginEnd: e.spaces.space8, height: e.spaces.space28, width: e.spaces.space28 }, arrow: { borderStyle: "none" }, arrowContainer: { display: "flex", width: "100%", alignItems: "center" }, arrowDirectionUp: { top: e.spacesPx.space4 + e.spacesPx.space2 }, arrowDirectionDown: { top: 0 - e.spacesPx.space4 - e.spacesPx.space2 }, arrowDown: { transform: "rotate(180deg)" }, hidden: { opacity: 0 } })),
                y = b.default.create((e) => ({ primary: { backgroundColor: e.colors.primary0 }, purple: { backgroundColor: e.colors.purple0 }, plum: { backgroundColor: e.colors.plum0 } })),
                f = b.default.create((e) => ({ primary: { color: e.colors.primary0 }, purple: { color: e.colors.purple0 }, plum: { color: e.colors.plum0 } })),
                C = ({ backgroundColor: e = "primary", containerRef: t, icon: r, illustration: n, onClose: b, text: C }) => {
                    const D = l().af8fa2ae,
                        E = (0, m.b)(),
                        { direction: _ } = (0, h.Z)(),
                        [v, Z] = a.useState(Number.MIN_SAFE_INTEGER),
                        [w, x] = a.useState(Number.MIN_SAFE_INTEGER),
                        I = "rtl" === _,
                        S = (e) => {
                            const { top: t } = e.getBoundingClientRect();
                            return w > t;
                        };
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            o.Z,
                            {
                                onLayout: (e) => {
                                    const {
                                        nativeEvent: {
                                            layout: { left: t, top: r, width: a },
                                        },
                                    } = e;
                                    x(r);
                                    Z(t + a / 2);
                                },
                            },
                            (() => {
                                const l = !(!t || (w >= 0 && v >= 0)),
                                    h = t?.current ? ((m = t.current), S(m) ? { flexDirection: "column" } : { flexDirection: "column-reverse" }) : void 0;
                                var m;
                                const _ = !t?.current || S(t.current),
                                    Z = t?.current
                                        ? ((e) => {
                                              const { left: t, width: r } = e.getBoundingClientRect(),
                                                  a = t + r / 2 - v;
                                              return { start: I ? void 0 : a, end: I ? a : void 0 };
                                          })(t.current)
                                        : void 0,
                                    x = t ? ((t, r) => a.createElement(o.Z, { style: [g.arrowContainer, r, t ? g.arrowDirectionUp : g.arrowDirectionDown], testID: "tooltip-arrow" }, a.createElement(s.default, { style: [g.arrow, f[e], !t && g.arrowDown] })))(_, Z) : void 0,
                                    k = [h, l && g.hidden];
                                return a.createElement(o.Z, { style: k, testID: "tooltip-content" }, x, a.createElement(o.Z, { style: [g.root, y[e]] }, a.createElement(o.Z, { style: g.contentContainer }, r && !n ? ((P = r), a.createElement(P, { style: [g.icon, { alignItem: "flex-start" }], testID: "tooltip-icon" })) : null, n && !r ? ((R = n), a.createElement(o.Z, { style: g.illustration, testID: "tooltip-illustration" }, a.createElement(c.Z, { "aria-label": "", aspectMode: p.Z.SQUARE, image: R }))) : null, a.createElement(o.Z, { style: g.contentTextContainer }, a.createElement(d.ZP, { id: E }, C))), b && a.createElement(o.Z, { style: g.dismissButton }, a.createElement(u.ZP, { "aria-describedby": E, "aria-label": D, icon: a.createElement(i.default, { testID: "tooltip-close-icon" }), onPress: b, size: "xSmall", type: "primaryText" }))));
                                var R, P;
                            })(),
                        ),
                    );
                };
        },
        466818: (e, t, r) => {
            r.d(t, { ZP: () => y });
            var a = r(202784),
                o = r(325686),
                n = r(487552),
                l = r(302752),
                s = r(183806),
                i = r(731708),
                c = r(950822),
                d = r(224162),
                p = r(392237);
            const u = a.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                h = (e) => (0, c.Z)("option", e);
            let m = 1;
            class b extends a.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = a.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: r } = this.props,
                                { selectedIndex: a, value: o } = e.target;
                            t && t(o, a - (r ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: r, hasError: c, helperText: m, options: b, style: y, testID: f, value: C, withEmptyOption: D } = this.props,
                        { isFocused: E } = this.state,
                        _ = i.ZP.getLanguage(),
                        v = void 0 === c ? !!r : c,
                        Z = new Set();
                    r && Z.add(this._errorID), e && Z.add(e), m && Z.add(this._helperID);
                    const w = Z.size ? [...Z].join(" ") : void 0;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const i = "ja" === _ ? p.default.theme.fontFamilies.japan : "rtl" === e || l.Z.isLocaleRTL(_) ? p.default.theme.fontFamilies.rtl : p.default.theme.fontFamilies.normal;
                            return a.createElement(
                                o.Z,
                                { style: [s.Z.border, g.container, t && s.Z.disabled, E && s.Z.focusedBorderValid, v && s.Z.invalidBorderColor, E && v && s.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                a.createElement(
                                    u,
                                    { "aria-describedby": w, "aria-invalid": v, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: i }, t && s.Z.disabled], testID: f || "", value: C },
                                    D ? a.createElement(h, { disabled: !0, style: g.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: t, label: r, value: o } = e;
                                        return a.createElement(h, { disabled: t, key: `${r}-${o}`, style: g.option, value: o }, r);
                                    }),
                                ),
                                a.createElement(n.default, { style: [g.dropdownCaret, E && s.Z.validColor, !(!c && !r) && s.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        v && r ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: r } = this.props,
                        { isFocused: o } = this.state;
                    return a.createElement(i.ZP, { color: t || e ? "red500" : o ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, r);
                }
                _renderHelperText() {
                    return a.createElement(o.Z, { "aria-live": "polite" }, a.createElement(i.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return a.createElement(o.Z, { "aria-live": "polite" }, a.createElement(i.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            b.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = p.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = b;
        },
        821966: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                o = r(111677),
                n = r.n(o),
                l = r(54989);
            const s = n().b05a39b2,
                i = n().c566d3a6,
                c = (e) => a.createElement(l.Z, e),
                d = ({ children: e, hideLabel: t = i, label: r, lang: o, render: n = c, revealLabel: l = s }) => {
                    const [d, p] = a.useState(!1);
                    return n({ actionText: d ? t : l, children: d ? e : r, lang: o, onActionClick: () => p(!d) });
                };
            d.displayName = "TweetDisclosure";
            const p = d;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => o, Z: () => a });
            r(136728);
            const a = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (r, a, o) => {
                        const n = t ? t(a, o, e) : !!a;
                        return n && r[0].push(a), !n && r[1].push(a), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-bc6ccf4c.c9ab5cfa.js.map
