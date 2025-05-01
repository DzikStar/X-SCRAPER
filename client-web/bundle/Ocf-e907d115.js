"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-e907d115"],
    {
        242454: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(807896),
                o = a(202784),
                n = a(325686),
                s = a(731708),
                i = a(58881),
                l = a(530732),
                c = a(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                h = ({ align: e = "center", color: t, label: a, ...h }) => {
                    const p = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(n.Z, { style: d.container }, o.createElement(l.Z, (0, r.Z)({}, h, { interactiveStyles: p, style: d.root }), o.createElement(s.ZP, { align: e, color: t }, a)));
                };
        },
        97272: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(807896),
                o = a(202784),
                n = a(896632),
                s = a(325686),
                i = a(913973),
                l = a(516951),
                c = a(731708),
                d = a(466792),
                h = a(58881),
                p = a(530732),
                u = a(352924),
                m = a(392237);
            const g = m.default.create((e) => ({ root: { padding: e.spaces.space4, borderRadius: e.borderRadii.large, overflow: "hidden" }, base: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, backgroundColor: { backgroundColor: e.colors.cellBackground }, border: { borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent }, borderColor: { borderColor: e.colors.borderColor }, activeBorder: { borderColor: e.colors.blue500 }, containerClicked: { backgroundColor: e.colors.primary }, interactive: { cursor: "pointer" }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, textContainer: { margin: e.spaces.space12, flexShrink: 1 }, radioContainer: { userSelect: "none", marginEnd: e.spaces.space12, marginTop: e.spaces.space12, position: "absolute", end: "0px" }, helpText: { marginTop: e.spaces.space8 }, tileStyle: { height: "inherit" }, mainContainer: { padding: e.spaces.space4 }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor } })),
                b = { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                y = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": a, checked: r, disabled: n, helpText: y, label: f, name: _, onChange: v, renderBorderWhenSelected: C, selectorBackgroundStyles: D }) => {
                    const E = h.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: r ? m.default.theme.colors.primary : m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        S = (0, u.b)(),
                        w = (0, u.b)();
                    return o.createElement(d.Z, { disabled: n }, (d) => o.createElement(s.Z, { style: g.root }, o.createElement(s.Z, { role: "label", style: [g.base, D || g.backgroundColor, g.border, C ? null : g.borderColor, C && r && g.activeBorder, !n && g.interactive] }, o.createElement(s.Z, { style: g.textContainer }, o.createElement(c.ZP, { id: S, weight: "bold" }, f), y && o.createElement(c.ZP, { color: "gray700", id: w, size: "subtext2", style: g.helpText }, y)), o.createElement(s.Z, { style: g.radioContainer }, C ? null : o.createElement(p.Z, { disabled: n, interactiveStyles: E, interactivityState: d, style: g.radioBackground }, o.createElement(s.Z, { style: [g.circle, r && g.circleActive, n && g.circleDisabled, r && n && g.circleCheckedAndDisabled] }, r ? o.createElement(i.default, { style: g.checkMark }) : null)), o.createElement("input", { "aria-describedby": w, "aria-label": e, "aria-labelledby": S, "aria-posinset": t, "aria-setsize": a, checked: r, disabled: n, name: _, onChange: r ? l.Z : v, style: b, type: "radio" })))));
                },
                f = (e) => o.createElement(n.Z, (0, r.Z)({}, e, { renderSelector: (e) => o.createElement(y, (0, r.Z)({}, e, { key: e.value })) }));
        },
        260706: (e, t, a) => {
            a.d(t, { Z: () => v });
            var r = a(202784),
                o = a(325686),
                n = a(674132),
                s = a.n(n),
                i = a(97043),
                l = a(323265),
                c = a(731708),
                d = a(154003),
                h = a(950822),
                p = a(586855),
                u = a(855488),
                m = a(466818),
                g = a(392237);
            const b = s().jf83d092,
                y = s().af4abf20,
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
                            const { day: a, month: r, year: o } = this.props,
                                n = { day: a, month: r, year: o, [e]: parseInt(t, 10) };
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
                                a = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) };
                            this.props.onChange(a);
                        });
                    const { day: t, maxSelectableYear: a, minSelectableYear: r, month: o, year: n } = e;
                    (this._errorID = `DATE_INPUT_${_}_ERROR`), (this._monthOptions = p.dX()), (this._nativeDefaultValue = p.ww(t, o, n)), (this._nativeMaxDate = p.ww(31, 12, a)), (this._nativeMinDate = p.ww(1, 1, r)), (_ += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: a, onChange: r, year: o } = this.props,
                        n = a && a !== e.month,
                        s = o && o !== e.year;
                    if (n || s) {
                        p
                            .DD(a, o)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || r({ month: a, year: o, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        a = l.ZP.isMobileOS() && !t;
                    return r.createElement(o.Z, null, a ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: a, errors: n = {}, label: s, autofocus: i, monthSelectorTestID: l, daySelectorTestID: c, yearSelectorTestID: u, style: g, minSelectableYear: _, maxSelectableYear: v, withCalendar: E, hideDay: S, disabled: w } = this.props,
                        x = p.DD(t, a),
                        Z = p.Zj(_, v, e, t);
                    return r.createElement(o.Z, { "aria-label": s, role: "group", style: [D.selectorsContainer, g] }, r.createElement(m.ZP, { "aria-describedby": n.month ? this._errorID : void 0, autofocus: i, disabled: w, hasError: n.month, label: y, onChange: this._handleMonthChange, options: this._monthOptions, style: D.monthSelector, testID: l, value: t ? `${t}` : "", withEmptyOption: !0 }), S ? null : r.createElement(m.ZP, { "aria-describedby": n.day ? this._errorID : void 0, disabled: w, hasError: n.day, label: b, onChange: this._handleDayChange, options: x, style: D.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(m.ZP, { "aria-describedby": n.year ? this._errorID : void 0, disabled: w, hasError: n.year, label: f, onChange: this._handleYearChange, options: Z, style: D.yearSelector, testID: u, value: a ? `${a}` : "", withEmptyOption: !0 }), E && r.createElement(o.Z, { role: "label", style: D.calendarLabel }, r.createElement(d.ZP, { "aria-label": "Calendar", icon: C, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, h.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: s, onChange: this._handleDateChange, style: D.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: p.ww(e, t, a) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return r.createElement(u.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: D.dateInputRoot, type: "date" });
                }
            }
            const C = r.createElement(i.default, null),
                D = g.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...g.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, a) => {
            a.d(t, { DD: () => Z, ZP: () => I, Zj: () => w, dX: () => S, ww: () => P });
            var r = a(674132),
                o = a.n(r),
                n = a(822240);
            const s = 1,
                i = 2,
                l = 3,
                c = 4,
                d = 5,
                h = 6,
                p = 7,
                u = 8,
                m = 9,
                g = 10,
                b = 11,
                y = 12,
                f = { [s]: { label: o().hac89ab0, numDays: 31 }, [i]: { label: o().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [l]: { label: o().b56920fa, numDays: 31 }, [c]: { label: o().b1a0f1ec, numDays: 30 }, [d]: { label: o().daf779c8, numDays: 31 }, [h]: { label: o().c6ad074e, numDays: 30 }, [p]: { label: o().f1db106c, numDays: 31 }, [u]: { label: o().i4e80b7a, numDays: 31 }, [m]: { label: o().efa6cc1e, numDays: 30 }, [g]: { label: o().f40a0cbe, numDays: 31 }, [b]: { label: o().ac74a31c, numDays: 30 }, [y]: { label: o().i6c1e4b2, numDays: 31 } },
                _ = (e) => ({ label: `${e}`, value: `${e}` }),
                v = (0, n.Z)(1, 29).map(_),
                C = (0, n.Z)(1, 30).map(_),
                D = (0, n.Z)(1, 31).map(_),
                E = (0, n.Z)(1, 32).map(_),
                S = () => Object.keys(f).map((e) => ({ label: f[e].label, value: e })),
                w = (e = 1, t, a, r) => {
                    const o = t || new Date(Date.now()).getFullYear();
                    return (0, n.Z)(e, o + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === a ? x(e) : e))
                        .map(_);
                },
                x = (e) => 1 === new Date(e, 1, 29).getMonth(),
                Z = (e, t) => {
                    if (!e) return E;
                    switch (2 === e && (!t || (t && x(t))) ? f[e].numDaysLeapYear : f[e].numDays) {
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
                P = (e, t, a) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof a) {
                        return `${a}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const I = {
                getFormattedDateValue: P,
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
        15038: (e, t, a) => {
            a.d(t, { ZP: () => d });
            var r = a(202784),
                o = a(325686),
                n = a(950822),
                s = a(392237);
            const i = (e) => (0, n.Z)("div", e);
            class l extends r.Component {
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
                    const { activeStyle: e, allowDragDrop: t, children: a, style: n } = this.props,
                        { active: s } = this.state,
                        l = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return r.createElement(i, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, n, s && l, s && e] }, r.createElement(o.Z, { style: c.inner }, "function" == typeof a ? a(s) : a));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const c = s.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = l;
        },
        449161: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(807896),
                o = a(202784),
                n = a(674132),
                s = a.n(n),
                i = a(154003),
                l = a(950822),
                c = a(392237);
            const d = s().i5450bec,
                h = s().f7432494;
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                a = e.target,
                                r = a.files;
                            r.length && t && t(r), (a.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: a, onChange: n, testID: s, ...c } = this.props,
                        p = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(i.ZP, (0, r.Z)({ hoverLabel: e ? { label: p ? h : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: a, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: u.input, tabIndex: -1, testID: s, type: "file" }));
                }
            }
            p.defaultProps = { disabled: !1, multiple: !1 };
            const u = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = p;
        },
        420412: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                o = a(325686),
                n = a(235902),
                s = a(885015),
                i = a(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: l } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return a ? r.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, a), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                o = a(202784),
                n = a(325686),
                s = a(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...s } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, a && l.withGutterColumn] }));
                    return o.createElement(n.Z, (0, r.Z)({ style: [t, l.root, a && l.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        548485: (e, t, a) => {
            a.d(t, { Z: () => z });
            var r = a(202784),
                o = a(928316),
                n = a(325686),
                s = a(674132),
                i = a.n(s),
                l = a(553007),
                c = a(723951),
                d = a(390587),
                h = a(158910),
                p = a(614991),
                u = a(323265),
                m = a(154003),
                g = a(992942),
                b = a(782578),
                y = a(173739),
                f = a(392237),
                _ = a(393058);
            const v = f.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                C = ({ circle: e, height: t, width: a }) => r.createElement(n.Z, { pointerEvents: "none", style: [v.mask, { width: a, height: t }, e && v.circle] });
            var D = a(807896),
                E = a(151624),
                S = a(933895);
            class w extends r.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: a, onPinchMove: r, onWheel: o } = this.props;
                            if (e) {
                                (a || t || r) && (this._removeTouchMoveToScrollListener = (0, S.O)(e, this._preventDefaultEvent, !1)), o && (this._removeScrollToScaleListener = (0, S.Y)(e, this._preventDefaultEvent, !1));
                                const n = e.getBoundingClientRect();
                                this._centerPosition = { x: n.width / 2 + n.left, y: n.height / 2 + n.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: a, onPinchMove: r } = this.props,
                                o = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (r) {
                                    const e = ((n = o[0]), (s = o[1]), Math.sqrt(Math.pow(n.pageY - s.pageY, 2) + Math.pow(n.pageX - s.pageX, 2))),
                                        { pageX: t, pageY: a } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(o[0], o[1]),
                                        i = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? a - this._previousPositionY : 0,
                                        c = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = a), (this._previousTouchDistance = e);
                                    const { x: d, y: h } = this._centerPosition;
                                    r(c, d - t, h - a, i, l);
                                }
                            } else a && a(t.dx, t.dy);
                            var n, s;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: a, deltaX: r, deltaY: o } = e,
                                { x: n, y: s } = this._centerPosition,
                                i = n - t,
                                l = s - a;
                            this.props.onWheel && this.props.onWheel(r, o, i, l);
                        }),
                        (this._panResponder = E.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: a, onPinchMove: o, onWheel: s, ...i } = this.props;
                    return r.createElement(n.Z, (0, D.Z)({}, i, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const x = w,
                Z = i().d85bc1b8,
                P = i().f596ace8,
                I = i().df031fca,
                R = i().b40332c6,
                M = i().e547b368,
                k = i().f7571204,
                T = i().e6e16812,
                L =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class B extends r.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !_.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: a } = this.state,
                                o = e.width / e.height,
                                s = this._shouldShowZoomControl();
                            return t || s ? r.createElement(n.Z, { style: W.controlsContainer }, t ? r.createElement(n.Z, { style: W.ratioContainer }, r.createElement(m.ZP, { "aria-label": P, borderColor: "transparent", color: a === o ? "primary" : "gray700", hoverLabel: { label: M }, icon: r.createElement(l.default, null), onPress: this._setAspectRatio(o), size: "medium" }), r.createElement(m.ZP, { "aria-label": I, borderColor: "transparent", color: a === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: k }, icon: r.createElement(c.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), r.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: 1 === a ? "primary" : "gray700", hoverLabel: { label: T }, icon: r.createElement(d.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, s ? r.createElement(n.Z, { style: W.zoomContainer }, r.createElement(y.Z, { "aria-label": Z, max: this._maxScale, maxIcon: r.createElement(h.default, { style: W.icon }), min: 0, minIcon: r.createElement(p.default, { style: W.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: a, width: r } = this._getMaskDimensions(),
                                { height: o, width: n } = b.Z.getCoverDimensions({ width: r, height: a }, t);
                            return { width: n * Math.pow(2, e), height: o * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: a } = this.state,
                                { height: r, width: o } = b.Z.getContainDimensions({ width: a - 50, height: t - 50 }, e);
                            return { width: o, height: r };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: a } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: a }) : (this.setState({ containerHeight: t, containerWidth: a }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: a } = this._getImageDimensions(),
                                { width: r } = this._getMaskDimensions(),
                                o = a / t.width,
                                n = L(r / (e.width * o));
                            this.setState({ imageScale: n });
                            const { left: s, top: i } = this._getUnscaledCropData();
                            (this._panStyles.top = i - e.top * o * Math.pow(2, n)), (this._previousTop = this._panStyles.top), (this._panStyles.left = s - e.left * o * Math.pow(2, n)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, a, r) => {
                            const o = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + o, 0));
                                return (this._panStyles.left += a * (t - e)), (this._panStyles.top += r * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, a, r, o) => {
                            const n = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const s = Math.min(this._maxScale, Math.max(e + n, 0));
                                return (this._panStyles.left += t * (s - e) + r), (this._panStyles.top += a * (s - e) + o), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: s };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                a = e.left,
                                r = e.top,
                                o = e.left + e.width - t.width,
                                n = e.top + e.height - t.height;
                            let s = !1;
                            a < 0 && ((s = !0), (this._panStyles.left += a), (this._previousLeft += a)), r < 0 && ((s = !0), (this._panStyles.top += r), (this._previousTop += r)), o > 0 && ((s = !0), (this._panStyles.left += o), (this._previousLeft += o)), n > 0 && ((s = !0), (this._panStyles.top += n), (this._previousTop += n)), s && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: a } = this.state,
                                r = a?.transform[0]?.translate3d,
                                n = `${e}px, ${t}px, 0`;
                            r !== n &&
                                (0, o.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: n }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: a, width: r } = this._getMaskDimensions(),
                                { left: o, top: n } = this._panStyles;
                            return { top: (e - a) / 2 - n, left: (t - r) / 2 - o, width: r, height: a };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(L(t.width / 150), L(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: a } = this.props,
                        { transformStyle: o } = this.state,
                        { height: s, width: i } = this._getImageDimensions(),
                        { height: l, width: c } = this._getMaskDimensions(),
                        d = this.state.containerWidth && this.state.containerHeight;
                    return r.createElement(n.Z, { style: W.container }, r.createElement(x, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: a ? this._handlePinchMove : void 0, onWheel: a ? this._handleWheel : void 0, style: W.root }, d ? r.createElement(r.Fragment, null, r.createElement(g.Z, { source: { uri: t.src, width: i, height: s }, style: [W.image, o] }), r.createElement(C, { circle: e, height: l, width: c })) : null), d ? this._renderControls() : null);
                }
                componentDidUpdate(e, t) {
                    this._updateStyles(), this._adjustToInBounds();
                }
                getCropData() {
                    const { width: e } = this._getImageDimensions(),
                        t = this.props.image.width / e,
                        a = this._getUnscaledCropData();
                    return { aspectRatio: this.state.aspectRatio, top: Math.round(t * a.top), left: Math.round(t * a.left), width: Math.round(t * a.width), height: Math.round(t * a.height) };
                }
            }
            B.defaultProps = { circle: !1, withZoomControl: !0 };
            const W = f.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                z = B;
        },
        626820: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var r = a(202784),
                o = a(325686),
                n = a(674132),
                s = a.n(n),
                i = a(797681),
                l = a(837020),
                c = a(530525),
                d = a(731708),
                h = a(439592),
                p = a(154003),
                u = a(879891),
                m = a(352924),
                g = a(392237);
            const b = g.default.create((e) => ({ root: { borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "row", alignItems: "center", width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "row", flex: 1 }, contentTextContainer: { flex: 1, alignItems: "flex-start", justifyContent: "center" }, dismissButton: { paddingStart: e.spaces.space12 }, icon: { color: e.colors.text, marginEnd: e.spaces.space8 }, illustration: { marginEnd: e.spaces.space8, height: e.spaces.space28, width: e.spaces.space28 }, arrow: { borderStyle: "none" }, arrowContainer: { display: "flex", width: "100%", alignItems: "center" }, arrowDirectionUp: { top: e.spacesPx.space4 + e.spacesPx.space2 }, arrowDirectionDown: { top: 0 - e.spacesPx.space4 - e.spacesPx.space2 }, arrowDown: { transform: "rotate(180deg)" }, hidden: { opacity: 0 } })),
                y = g.default.create((e) => ({ primary: { backgroundColor: e.colors.primary0 }, purple: { backgroundColor: e.colors.purple0 }, plum: { backgroundColor: e.colors.plum0 } })),
                f = g.default.create((e) => ({ primary: { color: e.colors.primary0 }, purple: { color: e.colors.purple0 }, plum: { color: e.colors.plum0 } })),
                _ = ({ backgroundColor: e = "primary", containerRef: t, icon: a, illustration: n, onClose: g, text: _ }) => {
                    const v = s().af8fa2ae,
                        C = (0, m.b)(),
                        { direction: D } = (0, u.Z)(),
                        [E, S] = r.useState(Number.MIN_SAFE_INTEGER),
                        [w, x] = r.useState(Number.MIN_SAFE_INTEGER),
                        Z = "rtl" === D,
                        P = (e) => {
                            const { top: t } = e.getBoundingClientRect();
                            return w > t;
                        };
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            o.Z,
                            {
                                onLayout: (e) => {
                                    const {
                                        nativeEvent: {
                                            layout: { left: t, top: a, width: r },
                                        },
                                    } = e;
                                    x(a);
                                    S(t + r / 2);
                                },
                            },
                            (() => {
                                const s = !(!t || (w >= 0 && E >= 0)),
                                    u = t?.current ? ((m = t.current), P(m) ? { flexDirection: "column" } : { flexDirection: "column-reverse" }) : void 0;
                                var m;
                                const D = !t?.current || P(t.current),
                                    S = t?.current
                                        ? ((e) => {
                                              const { left: t, width: a } = e.getBoundingClientRect(),
                                                  r = t + a / 2 - E;
                                              return { start: Z ? void 0 : r, end: Z ? r : void 0 };
                                          })(t.current)
                                        : void 0,
                                    x = t ? ((t, a) => r.createElement(o.Z, { style: [b.arrowContainer, a, t ? b.arrowDirectionUp : b.arrowDirectionDown], testID: "tooltip-arrow" }, r.createElement(i.default, { style: [b.arrow, f[e], !t && b.arrowDown] })))(D, S) : void 0,
                                    I = [u, s && b.hidden];
                                return r.createElement(o.Z, { style: I, testID: "tooltip-content" }, x, r.createElement(o.Z, { style: [b.root, y[e]] }, r.createElement(o.Z, { style: b.contentContainer }, a && !n ? ((M = a), r.createElement(M, { style: [b.icon, { alignItem: "flex-start" }], testID: "tooltip-icon" })) : null, n && !a ? ((R = n), r.createElement(o.Z, { style: b.illustration, testID: "tooltip-illustration" }, r.createElement(c.Z, { "aria-label": "", aspectMode: h.Z.SQUARE, image: R }))) : null, r.createElement(o.Z, { style: b.contentTextContainer }, r.createElement(d.ZP, { id: C }, _))), g && r.createElement(o.Z, { style: b.dismissButton }, r.createElement(p.ZP, { "aria-describedby": C, "aria-label": v, icon: r.createElement(l.default, { testID: "tooltip-close-icon" }), onPress: g, size: "xSmall", type: "primaryText" }))));
                                var R, M;
                            })(),
                        ),
                    );
                };
        },
        779610: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                o = a(325686),
                n = a(191796),
                s = a(58399),
                i = a(731708),
                l = a(952428),
                c = a(392237);
            const d = (e) => {
                    const { decoration: t, description: a, disabled: d = !1, isActive: p = !1, label: u, link: m, onPress: g, paddingHorizontal: b, renderRightContent: y, role: f = "tab", styleOverride: _, testID: v = "pivot", thumbnail: C, thumbnailSize: D, withoutArrow: E = !1 } = e,
                        S = [h.thumbnailContainer, "medium" === D && h.thumbnailContainerMedium],
                        w = "string" == typeof u ? r.createElement(i.ZP, null, u) : u,
                        x = "object" == typeof m && m.external && !m.openInSameFrame,
                        Z = a ? ("string" == typeof a ? r.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${v}-description` }, a) : a) : null,
                        P = r.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return r.createElement(l.Z, { "aria-selected": "tab" === f ? p : null, disabled: d, link: d ? void 0 : m, onPress: g, role: f, style: [h.root, P, d && h.disabled, _], testID: v, withInteractiveStyling: !!m || !!g }, r.createElement(o.Z, { style: h.contentContainer }, C ? r.createElement(o.Z, { style: S }, C) : null, r.createElement(o.Z, { style: h.content }, w, Z), y ? y() : null, (!m && !g) || d || E ? null : x ? r.createElement(n.default, { style: h.icon }) : r.createElement(s.default, { style: h.icon })), t);
                },
                h = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        466818: (e, t, a) => {
            a.d(t, { ZP: () => y });
            var r = a(202784),
                o = a(325686),
                n = a(487552),
                s = a(302752),
                i = a(183806),
                l = a(731708),
                c = a(950822),
                d = a(224162),
                h = a(392237);
            const p = r.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                u = (e) => (0, c.Z)("option", e);
            let m = 1;
            class g extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: a } = this.props,
                                { selectedIndex: r, value: o } = e.target;
                            t && t(o, r - (a ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: a, hasError: c, helperText: m, options: g, style: y, testID: f, value: _, withEmptyOption: v } = this.props,
                        { isFocused: C } = this.state,
                        D = l.ZP.getLanguage(),
                        E = void 0 === c ? !!a : c,
                        S = new Set();
                    a && S.add(this._errorID), e && S.add(e), m && S.add(this._helperID);
                    const w = S.size ? [...S].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === D ? h.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(D) ? h.default.theme.fontFamilies.rtl : h.default.theme.fontFamilies.normal;
                            return r.createElement(
                                o.Z,
                                { style: [i.Z.border, b.container, t && i.Z.disabled, C && i.Z.focusedBorderValid, E && i.Z.invalidBorderColor, C && E && i.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                r.createElement(
                                    p,
                                    { "aria-describedby": w, "aria-invalid": E, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: l }, t && i.Z.disabled], testID: f || "", value: _ },
                                    v ? r.createElement(u, { disabled: !0, style: b.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: a, value: o } = e;
                                        return r.createElement(u, { disabled: t, key: `${a}-${o}`, style: b.option, value: o }, a);
                                    }),
                                ),
                                r.createElement(n.default, { style: [b.dropdownCaret, C && i.Z.validColor, !(!c && !a) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        E && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: a } = this.props,
                        { isFocused: o } = this.state;
                    return r.createElement(l.ZP, { color: t || e ? "red500" : o ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, a);
                }
                _renderHelperText() {
                    return r.createElement(o.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(o.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = h.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = g;
        },
        821966: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                o = a(674132),
                n = a.n(o),
                s = a(54989);
            const i = n().b05a39b2,
                l = n().c566d3a6,
                c = (e) => r.createElement(s.Z, e),
                d = ({ children: e, hideLabel: t = l, label: a, lang: o, render: n = c, revealLabel: s = i }) => {
                    const [d, h] = r.useState(!1);
                    return n({ actionText: d ? t : s, children: d ? e : a, lang: o, onActionClick: () => h(!d) });
                };
            d.displayName = "TweetDisclosure";
            const h = d;
        },
        183806: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = a(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-e907d115.e8aef0da.js.map
