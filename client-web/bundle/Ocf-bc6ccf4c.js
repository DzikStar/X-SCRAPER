"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-bc6ccf4c", "icons/IconCropSquare-js", "icons/IconDrafts-js"],
    {
        97272: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(807896),
                n = a(202784),
                o = a(896632),
                s = a(325686),
                i = a(913973),
                l = a(516951),
                c = a(731708),
                h = a(466792),
                d = a(58881),
                p = a(530732),
                u = a(352924),
                m = a(392237);
            const g = m.default.create((e) => ({ root: { padding: e.spaces.space4, borderRadius: e.borderRadii.large, overflow: "hidden" }, base: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, backgroundColor: { backgroundColor: e.colors.cellBackground }, border: { borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent }, borderColor: { borderColor: e.colors.borderColor }, activeBorder: { borderColor: e.colors.blue500 }, containerClicked: { backgroundColor: e.colors.primary }, interactive: { cursor: "pointer" }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, textContainer: { margin: e.spaces.space12, flexShrink: 1 }, radioContainer: { userSelect: "none", marginEnd: e.spaces.space12, marginTop: e.spaces.space12, position: "absolute", end: "0px" }, helpText: { marginTop: e.spaces.space8 }, tileStyle: { height: "inherit" }, mainContainer: { padding: e.spaces.space4 }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor } })),
                y = { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": a, checked: r, disabled: o, helpText: b, label: f, name: _, onChange: v, renderBorderWhenSelected: C, selectorBackgroundStyles: D }) => {
                    const E = d.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: r ? m.default.theme.colors.primary : m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        w = (0, u.b)(),
                        S = (0, u.b)();
                    return n.createElement(h.Z, { disabled: o }, (h) => n.createElement(s.Z, { style: g.root }, n.createElement(s.Z, { role: "label", style: [g.base, D || g.backgroundColor, g.border, C ? null : g.borderColor, C && r && g.activeBorder, !o && g.interactive] }, n.createElement(s.Z, { style: g.textContainer }, n.createElement(c.ZP, { id: w, weight: "bold" }, f), b && n.createElement(c.ZP, { color: "gray700", id: S, size: "subtext2", style: g.helpText }, b)), n.createElement(s.Z, { style: g.radioContainer }, C ? null : n.createElement(p.Z, { disabled: o, interactiveStyles: E, interactivityState: h, style: g.radioBackground }, n.createElement(s.Z, { style: [g.circle, r && g.circleActive, o && g.circleDisabled, r && o && g.circleCheckedAndDisabled] }, r ? n.createElement(i.default, { style: g.checkMark }) : null)), n.createElement("input", { "aria-describedby": S, "aria-label": e, "aria-labelledby": w, "aria-posinset": t, "aria-setsize": a, checked: r, disabled: o, name: _, onChange: r ? l.Z : v, style: y, type: "radio" })))));
                },
                f = (e) => n.createElement(o.Z, (0, r.Z)({}, e, { renderSelector: (e) => n.createElement(b, (0, r.Z)({}, e, { key: e.value })) }));
        },
        260706: (e, t, a) => {
            a.d(t, { Z: () => v });
            var r = a(202784),
                n = a(325686),
                o = a(111677),
                s = a.n(o),
                i = a(97043),
                l = a(323265),
                c = a(731708),
                h = a(154003),
                d = a(950822),
                p = a(586855),
                u = a(855488),
                m = a(466818),
                g = a(392237);
            const y = s().jf83d092,
                b = s().af4abf20,
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
                    return r.createElement(n.Z, null, a ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: a, errors: o = {}, label: s, autofocus: i, monthSelectorTestID: l, daySelectorTestID: c, yearSelectorTestID: u, style: g, minSelectableYear: _, maxSelectableYear: v, withCalendar: E, hideDay: w, disabled: S } = this.props,
                        Z = p.DD(t, a),
                        x = p.Zj(_, v, e, t);
                    return r.createElement(n.Z, { "aria-label": s, role: "group", style: [D.selectorsContainer, g] }, r.createElement(m.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: i, disabled: S, hasError: o.month, label: b, onChange: this._handleMonthChange, options: this._monthOptions, style: D.monthSelector, testID: l, value: t ? `${t}` : "", withEmptyOption: !0 }), w ? null : r.createElement(m.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: S, hasError: o.day, label: y, onChange: this._handleDayChange, options: Z, style: D.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(m.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: S, hasError: o.year, label: f, onChange: this._handleYearChange, options: x, style: D.yearSelector, testID: u, value: a ? `${a}` : "", withEmptyOption: !0 }), E && r.createElement(n.Z, { role: "label", style: D.calendarLabel }, r.createElement(h.ZP, { "aria-label": "Calendar", icon: C, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, d.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: s, onChange: this._handleDateChange, style: D.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: p.ww(e, t, a) })));
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
            a.d(t, { DD: () => x, ZP: () => I, Zj: () => S, dX: () => w, ww: () => P });
            var r = a(111677),
                n = a.n(r),
                o = a(822240);
            const s = 1,
                i = 2,
                l = 3,
                c = 4,
                h = 5,
                d = 6,
                p = 7,
                u = 8,
                m = 9,
                g = 10,
                y = 11,
                b = 12,
                f = { [s]: { label: n().hac89ab0, numDays: 31 }, [i]: { label: n().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [l]: { label: n().b56920fa, numDays: 31 }, [c]: { label: n().b1a0f1ec, numDays: 30 }, [h]: { label: n().daf779c8, numDays: 31 }, [d]: { label: n().c6ad074e, numDays: 30 }, [p]: { label: n().f1db106c, numDays: 31 }, [u]: { label: n().i4e80b7a, numDays: 31 }, [m]: { label: n().efa6cc1e, numDays: 30 }, [g]: { label: n().f40a0cbe, numDays: 31 }, [y]: { label: n().ac74a31c, numDays: 30 }, [b]: { label: n().i6c1e4b2, numDays: 31 } },
                _ = (e) => ({ label: `${e}`, value: `${e}` }),
                v = (0, o.Z)(1, 29).map(_),
                C = (0, o.Z)(1, 30).map(_),
                D = (0, o.Z)(1, 31).map(_),
                E = (0, o.Z)(1, 32).map(_),
                w = () => Object.keys(f).map((e) => ({ label: f[e].label, value: e })),
                S = (e = 1, t, a, r) => {
                    const n = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, n + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === a ? Z(e) : e))
                        .map(_);
                },
                Z = (e) => 1 === new Date(e, 1, 29).getMonth(),
                x = (e, t) => {
                    if (!e) return E;
                    switch (2 === e && (!t || (t && Z(t))) ? f[e].numDaysLeapYear : f[e].numDays) {
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
        661810: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                n = a(325686),
                o = a(392237);
            function s({ spacing: e, style: t }) {
                return r.createElement(n.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        15038: (e, t, a) => {
            a.d(t, { ZP: () => h });
            var r = a(202784),
                n = a(325686),
                o = a(950822),
                s = a(392237);
            const i = (e) => (0, o.Z)("div", e);
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
                    const { activeStyle: e, allowDragDrop: t, children: a, style: o } = this.props,
                        { active: s } = this.state,
                        l = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return r.createElement(i, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, o, s && l, s && e] }, r.createElement(n.Z, { style: c.inner }, "function" == typeof a ? a(s) : a));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const c = s.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                h = l;
        },
        449161: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(807896),
                n = a(202784),
                o = a(111677),
                s = a.n(o),
                i = a(154003),
                l = a(950822),
                c = a(392237);
            const h = s().i5450bec,
                d = s().f7432494;
            class p extends n.Component {
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
                    const { accept: e, disabled: t, multiple: a, onChange: o, testID: s, ...c } = this.props,
                        p = !(e?.includes("video") || e?.includes("gif"));
                    return n.createElement(n.Fragment, null, n.createElement(i.ZP, (0, r.Z)({ hoverLabel: e ? { label: p ? d : h } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: a, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: u.input, tabIndex: -1, testID: s, type: "file" }));
                }
            }
            p.defaultProps = { disabled: !1, multiple: !1 };
            const u = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = p;
        },
        420412: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                n = a(325686),
                o = a(235902),
                s = a(885015),
                i = a(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: l } = o.ZP.useProps(),
                    h = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return a ? r.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, h] })), r.createElement(n.Z, { style: c.gapText }, a), r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, h] }))) : r.createElement(n.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, h] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                n = a(202784),
                o = a(325686),
                s = a(392237);
            class i extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...s } = this.props,
                        i = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, l.column, a && l.withGutterColumn] }));
                    return n.createElement(o.Z, (0, r.Z)({ style: [t, l.root, a && l.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        548485: (e, t, a) => {
            a.d(t, { Z: () => H });
            var r = a(202784),
                n = a(928316),
                o = a(325686),
                s = a(111677),
                i = a.n(s),
                l = a(553007),
                c = a(723951),
                h = a(390587),
                d = a(158910),
                p = a(614991),
                u = a(323265),
                m = a(154003),
                g = a(992942),
                y = a(782578),
                b = a(173739),
                f = a(392237),
                _ = a(393058);
            const v = f.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                C = ({ circle: e, height: t, width: a }) => r.createElement(o.Z, { pointerEvents: "none", style: [v.mask, { width: a, height: t }, e && v.circle] });
            var D = a(807896),
                E = a(452661),
                w = a(933895);
            class S extends r.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: a, onPinchMove: r, onWheel: n } = this.props;
                            if (e) {
                                (a || t || r) && (this._removeTouchMoveToScrollListener = (0, w.O)(e, this._preventDefaultEvent, !1)), n && (this._removeScrollToScaleListener = (0, w.Y)(e, this._preventDefaultEvent, !1));
                                const o = e.getBoundingClientRect();
                                this._centerPosition = { x: o.width / 2 + o.left, y: o.height / 2 + o.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: a, onPinchMove: r } = this.props,
                                n = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (r) {
                                    const e = ((o = n[0]), (s = n[1]), Math.sqrt(Math.pow(o.pageY - s.pageY, 2) + Math.pow(o.pageX - s.pageX, 2))),
                                        { pageX: t, pageY: a } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(n[0], n[1]),
                                        i = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? a - this._previousPositionY : 0,
                                        c = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = a), (this._previousTouchDistance = e);
                                    const { x: h, y: d } = this._centerPosition;
                                    r(c, h - t, d - a, i, l);
                                }
                            } else a && a(t.dx, t.dy);
                            var o, s;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: a, deltaX: r, deltaY: n } = e,
                                { x: o, y: s } = this._centerPosition,
                                i = o - t,
                                l = s - a;
                            this.props.onWheel && this.props.onWheel(r, n, i, l);
                        }),
                        (this._panResponder = E.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: a, onPinchMove: n, onWheel: s, ...i } = this.props;
                    return r.createElement(o.Z, (0, D.Z)({}, i, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const Z = S,
                x = i().d85bc1b8,
                P = i().f596ace8,
                I = i().df031fca,
                M = i().b40332c6,
                R = i().e547b368,
                T = i().f7571204,
                k = i().e6e16812,
                L =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class z extends r.Component {
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
                                n = e.width / e.height,
                                s = this._shouldShowZoomControl();
                            return t || s ? r.createElement(o.Z, { style: B.controlsContainer }, t ? r.createElement(o.Z, { style: B.ratioContainer }, r.createElement(m.ZP, { "aria-label": P, borderColor: "transparent", color: a === n ? "primary" : "gray700", hoverLabel: { label: R }, icon: r.createElement(l.default, null), onPress: this._setAspectRatio(n), size: "medium" }), r.createElement(m.ZP, { "aria-label": I, borderColor: "transparent", color: a === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: T }, icon: r.createElement(c.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), r.createElement(m.ZP, { "aria-label": M, borderColor: "transparent", color: 1 === a ? "primary" : "gray700", hoverLabel: { label: k }, icon: r.createElement(h.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, s ? r.createElement(o.Z, { style: B.zoomContainer }, r.createElement(b.Z, { "aria-label": x, max: this._maxScale, maxIcon: r.createElement(d.default, { style: B.icon }), min: 0, minIcon: r.createElement(p.default, { style: B.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: a, width: r } = this._getMaskDimensions(),
                                { height: n, width: o } = y.Z.getCoverDimensions({ width: r, height: a }, t);
                            return { width: o * Math.pow(2, e), height: n * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: a } = this.state,
                                { height: r, width: n } = y.Z.getContainDimensions({ width: a - 50, height: t - 50 }, e);
                            return { width: n, height: r };
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
                                n = a / t.width,
                                o = L(r / (e.width * n));
                            this.setState({ imageScale: o });
                            const { left: s, top: i } = this._getUnscaledCropData();
                            (this._panStyles.top = i - e.top * n * Math.pow(2, o)), (this._previousTop = this._panStyles.top), (this._panStyles.left = s - e.left * n * Math.pow(2, o)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, a, r) => {
                            const n = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + n, 0));
                                return (this._panStyles.left += a * (t - e)), (this._panStyles.top += r * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, a, r, n) => {
                            const o = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const s = Math.min(this._maxScale, Math.max(e + o, 0));
                                return (this._panStyles.left += t * (s - e) + r), (this._panStyles.top += a * (s - e) + n), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: s };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                a = e.left,
                                r = e.top,
                                n = e.left + e.width - t.width,
                                o = e.top + e.height - t.height;
                            let s = !1;
                            a < 0 && ((s = !0), (this._panStyles.left += a), (this._previousLeft += a)), r < 0 && ((s = !0), (this._panStyles.top += r), (this._previousTop += r)), n > 0 && ((s = !0), (this._panStyles.left += n), (this._previousLeft += n)), o > 0 && ((s = !0), (this._panStyles.top += o), (this._previousTop += o)), s && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: a } = this.state,
                                r = a?.transform[0]?.translate3d,
                                o = `${e}px, ${t}px, 0`;
                            r !== o &&
                                (0, n.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: o }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: a, width: r } = this._getMaskDimensions(),
                                { left: n, top: o } = this._panStyles;
                            return { top: (e - a) / 2 - o, left: (t - r) / 2 - n, width: r, height: a };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(L(t.width / 150), L(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: a } = this.props,
                        { transformStyle: n } = this.state,
                        { height: s, width: i } = this._getImageDimensions(),
                        { height: l, width: c } = this._getMaskDimensions(),
                        h = this.state.containerWidth && this.state.containerHeight;
                    return r.createElement(o.Z, { style: B.container }, r.createElement(Z, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: a ? this._handlePinchMove : void 0, onWheel: a ? this._handleWheel : void 0, style: B.root }, h ? r.createElement(r.Fragment, null, r.createElement(g.Z, { source: { uri: t.src, width: i, height: s }, style: [B.image, n] }), r.createElement(C, { circle: e, height: l, width: c })) : null), h ? this._renderControls() : null);
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
            z.defaultProps = { circle: !1, withZoomControl: !0 };
            const B = f.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                H = z;
        },
        626820: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var r = a(202784),
                n = a(325686),
                o = a(111677),
                s = a.n(o),
                i = a(797681),
                l = a(837020),
                c = a(530525),
                h = a(731708),
                d = a(439592),
                p = a(154003),
                u = a(879891),
                m = a(352924),
                g = a(392237);
            const y = g.default.create((e) => ({ root: { borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "row", alignItems: "center", width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "row", flex: 1 }, contentTextContainer: { flex: 1, alignItems: "flex-start", justifyContent: "center" }, dismissButton: { paddingStart: e.spaces.space12 }, icon: { color: e.colors.text, marginEnd: e.spaces.space8 }, illustration: { marginEnd: e.spaces.space8, height: e.spaces.space28, width: e.spaces.space28 }, arrow: { borderStyle: "none" }, arrowContainer: { display: "flex", width: "100%", alignItems: "center" }, arrowDirectionUp: { top: e.spacesPx.space4 + e.spacesPx.space2 }, arrowDirectionDown: { top: 0 - e.spacesPx.space4 - e.spacesPx.space2 }, arrowDown: { transform: "rotate(180deg)" }, hidden: { opacity: 0 } })),
                b = g.default.create((e) => ({ primary: { backgroundColor: e.colors.primary0 }, purple: { backgroundColor: e.colors.purple0 }, plum: { backgroundColor: e.colors.plum0 } })),
                f = g.default.create((e) => ({ primary: { color: e.colors.primary0 }, purple: { color: e.colors.purple0 }, plum: { color: e.colors.plum0 } })),
                _ = ({ backgroundColor: e = "primary", containerRef: t, icon: a, illustration: o, onClose: g, text: _ }) => {
                    const v = s().af8fa2ae,
                        C = (0, m.b)(),
                        { direction: D } = (0, u.Z)(),
                        [E, w] = r.useState(Number.MIN_SAFE_INTEGER),
                        [S, Z] = r.useState(Number.MIN_SAFE_INTEGER),
                        x = "rtl" === D,
                        P = (e) => {
                            const { top: t } = e.getBoundingClientRect();
                            return S > t;
                        };
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            n.Z,
                            {
                                onLayout: (e) => {
                                    const {
                                        nativeEvent: {
                                            layout: { left: t, top: a, width: r },
                                        },
                                    } = e;
                                    Z(a);
                                    w(t + r / 2);
                                },
                            },
                            (() => {
                                const s = !(!t || (S >= 0 && E >= 0)),
                                    u = t?.current ? ((m = t.current), P(m) ? { flexDirection: "column" } : { flexDirection: "column-reverse" }) : void 0;
                                var m;
                                const D = !t?.current || P(t.current),
                                    w = t?.current
                                        ? ((e) => {
                                              const { left: t, width: a } = e.getBoundingClientRect(),
                                                  r = t + a / 2 - E;
                                              return { start: x ? void 0 : r, end: x ? r : void 0 };
                                          })(t.current)
                                        : void 0,
                                    Z = t ? ((t, a) => r.createElement(n.Z, { style: [y.arrowContainer, a, t ? y.arrowDirectionUp : y.arrowDirectionDown], testID: "tooltip-arrow" }, r.createElement(i.default, { style: [y.arrow, f[e], !t && y.arrowDown] })))(D, w) : void 0,
                                    I = [u, s && y.hidden];
                                return r.createElement(n.Z, { style: I, testID: "tooltip-content" }, Z, r.createElement(n.Z, { style: [y.root, b[e]] }, r.createElement(n.Z, { style: y.contentContainer }, a && !o ? ((R = a), r.createElement(R, { style: [y.icon, { alignItem: "flex-start" }], testID: "tooltip-icon" })) : null, o && !a ? ((M = o), r.createElement(n.Z, { style: y.illustration, testID: "tooltip-illustration" }, r.createElement(c.Z, { "aria-label": "", aspectMode: d.Z.SQUARE, image: M }))) : null, r.createElement(n.Z, { style: y.contentTextContainer }, r.createElement(h.ZP, { id: C }, _))), g && r.createElement(n.Z, { style: y.dismissButton }, r.createElement(p.ZP, { "aria-describedby": C, "aria-label": v, icon: r.createElement(l.default, { testID: "tooltip-close-icon" }), onPress: g, size: "xSmall", type: "primaryText" }))));
                                var M, R;
                            })(),
                        ),
                    );
                };
        },
        779610: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                n = a(325686),
                o = a(191796),
                s = a(58399),
                i = a(731708),
                l = a(952428),
                c = a(392237);
            const h = (e) => {
                    const { decoration: t, description: a, disabled: h = !1, isActive: p = !1, label: u, link: m, onPress: g, paddingHorizontal: y, renderRightContent: b, role: f = "tab", styleOverride: _, testID: v = "pivot", thumbnail: C, thumbnailSize: D, withoutArrow: E = !1 } = e,
                        w = [d.thumbnailContainer, "medium" === D && d.thumbnailContainerMedium],
                        S = "string" == typeof u ? r.createElement(i.ZP, null, u) : u,
                        Z = "object" == typeof m && m.external && !m.openInSameFrame,
                        x = a ? ("string" == typeof a ? r.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${v}-description` }, a) : a) : null,
                        P = r.useMemo(() => ("space0" === y ? { paddingHorizontal: 0 } : { paddingHorizontal: y ? c.default.theme.spaces[y] : c.default.theme.componentDimensions.gutterHorizontal }), [y]);
                    return r.createElement(l.Z, { "aria-selected": "tab" === f ? p : null, disabled: h, link: h ? void 0 : m, onPress: g, role: f, style: [d.root, P, h && d.disabled, _], testID: v, withInteractiveStyling: !!m || !!g }, r.createElement(n.Z, { style: d.contentContainer }, C ? r.createElement(n.Z, { style: w }, C) : null, r.createElement(n.Z, { style: d.content }, S, x), b ? b() : null, (!m && !g) || h || E ? null : Z ? r.createElement(o.default, { style: d.icon }) : r.createElement(s.default, { style: d.icon })), t);
                },
                d = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        466818: (e, t, a) => {
            a.d(t, { ZP: () => b });
            var r = a(202784),
                n = a(325686),
                o = a(487552),
                s = a(302752),
                i = a(183806),
                l = a(731708),
                c = a(950822),
                h = a(224162),
                d = a(392237);
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
                    const { "aria-describedby": e, disabled: t, errorText: a, hasError: c, helperText: m, options: g, style: b, testID: f, value: _, withEmptyOption: v } = this.props,
                        { isFocused: C } = this.state,
                        D = l.ZP.getLanguage(),
                        E = void 0 === c ? !!a : c,
                        w = new Set();
                    a && w.add(this._errorID), e && w.add(e), m && w.add(this._helperID);
                    const S = w.size ? [...w].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(h.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === D ? d.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(D) ? d.default.theme.fontFamilies.rtl : d.default.theme.fontFamilies.normal;
                            return r.createElement(
                                n.Z,
                                { style: [i.Z.border, y.container, t && i.Z.disabled, C && i.Z.focusedBorderValid, E && i.Z.invalidBorderColor, C && E && i.Z.focusedBorderInvalid, b] },
                                this._renderLabel(),
                                r.createElement(
                                    p,
                                    { "aria-describedby": S, "aria-invalid": E, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [y.select, { fontFamily: l }, t && i.Z.disabled], testID: f || "", value: _ },
                                    v ? r.createElement(u, { disabled: !0, style: y.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: a, value: n } = e;
                                        return r.createElement(u, { disabled: t, key: `${a}-${n}`, style: y.option, value: n }, a);
                                    }),
                                ),
                                r.createElement(o.default, { style: [y.dropdownCaret, C && i.Z.validColor, !(!c && !a) && i.Z.invalidColor] }),
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
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const y = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                b = g;
        },
        821966: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(111677),
                o = a.n(n),
                s = a(54989);
            const i = o().b05a39b2,
                l = o().c566d3a6,
                c = (e) => r.createElement(s.Z, e),
                h = ({ children: e, hideLabel: t = l, label: a, lang: n, render: o = c, revealLabel: s = i }) => {
                    const [h, d] = r.useState(!1);
                    return o({ actionText: h ? t : s, children: h ? e : a, lang: n, onActionClick: () => d(!h) });
                };
            h.displayName = "TweetDisclosure";
            const d = h;
        },
        390587: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                s = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        266151: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                s = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                s = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-bc6ccf4c.c2ae223a.js.map
