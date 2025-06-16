"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-bc6ccf4c", "icons/IconFeedback-js"],
    {
        751475: (e, t, a) => {
            a.d(t, { Z: () => h });
            a(136728);
            var n = a(202784),
                r = a(111677),
                o = a.n(r),
                l = a(190286);
            const s = o().b15c0a18,
                i = o().aebf81c8,
                c = o().aa744c1e,
                d = o().fe04d89a,
                h = (e) => {
                    const { children: t, fallbackBackPath: a, history: r, onNavigation: o, shouldBlockNavigation: h, shouldBlockUnload: u } = e,
                        [p, m] = n.useState(void 0);
                    n.useEffect(() => {
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
                    const b = n.useCallback((e, t) => !(!p && h(e, t)) || (m({ nextLocation: e, action: t }), !1), [p, h]);
                    n.useEffect(() => {
                        const e = r.block(b);
                        return () => e();
                    }, [b, r]);
                    const y = n.useCallback(() => {
                            m(void 0);
                        }, [m]),
                        f = n.useCallback(() => {
                            o?.(),
                                m((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: n } = e;
                                    switch (t) {
                                        case "PUSH":
                                            r.push(n);
                                            break;
                                        case "REPLACE":
                                            r.replace(n);
                                            break;
                                        case "POP":
                                            r.goBackThroughModals({ fallbackPath: a });
                                    }
                                });
                        }, [a, r, o]);
                    return n.createElement(n.Fragment, null, t, p ? n.createElement(l.Z, { cancelButtonLabel: c, confirmButtonLabel: d, confirmButtonType: "destructiveFilled", headline: s, onCancel: y, onConfirm: f, text: i }) : null);
                };
        },
        260706: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(202784),
                r = a(325686),
                o = a(111677),
                l = a.n(o),
                s = a(97043),
                i = a(323265),
                c = a(731708),
                d = a(154003),
                h = a(950822),
                u = a(586855),
                p = a(855488),
                m = a(466818),
                b = a(392237);
            const y = l().jf83d092,
                f = l().af4abf20,
                g = l().b871f280;
            let v = 1;
            class C extends n.Component {
                constructor(e) {
                    super(e),
                        (this._showCalendarPicker = () => {
                            this._nativeCalendarRef?.showPicker?.();
                        }),
                        (this._setNativeCalendarRef = (e) => {
                            this._nativeCalendarRef = e;
                        }),
                        (this._handleSelectorChange = (e, t) => {
                            const { day: a, month: n, year: r } = this.props,
                                o = { day: a, month: n, year: r, [e]: parseInt(t, 10) };
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
                    const { day: t, maxSelectableYear: a, minSelectableYear: n, month: r, year: o } = e;
                    (this._errorID = `DATE_INPUT_${v}_ERROR`), (this._monthOptions = u.dX()), (this._nativeDefaultValue = u.ww(t, r, o)), (this._nativeMaxDate = u.ww(31, 12, a)), (this._nativeMinDate = u.ww(1, 1, n)), (v += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: a, onChange: n, year: r } = this.props,
                        o = a && a !== e.month,
                        l = r && r !== e.year;
                    if (o || l) {
                        u
                            .DD(a, r)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || n({ month: a, year: r, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        a = i.ZP.isMobileOS() && !t;
                    return n.createElement(r.Z, null, a ? this._renderNativeDateInput() : this._renderSelectors(), e ? n.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: a, errors: o = {}, label: l, autofocus: s, monthSelectorTestID: i, daySelectorTestID: c, yearSelectorTestID: p, style: b, minSelectableYear: v, maxSelectableYear: C, withCalendar: _, hideDay: Z, disabled: w } = this.props,
                        x = u.DD(t, a),
                        S = u.Zj(v, C, e, t);
                    return n.createElement(r.Z, { "aria-label": l, role: "group", style: [E.selectorsContainer, b] }, n.createElement(m.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: s, disabled: w, hasError: o.month, label: f, onChange: this._handleMonthChange, options: this._monthOptions, style: E.monthSelector, testID: i, value: t ? `${t}` : "", withEmptyOption: !0 }), Z ? null : n.createElement(m.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: w, hasError: o.day, label: y, onChange: this._handleDayChange, options: x, style: E.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), n.createElement(m.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: w, hasError: o.year, label: g, onChange: this._handleYearChange, options: S, style: E.yearSelector, testID: p, value: a ? `${a}` : "", withEmptyOption: !0 }), _ && n.createElement(r.Z, { role: "label", style: E.calendarLabel }, n.createElement(d.ZP, { "aria-label": "Calendar", icon: D, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, h.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: l, onChange: this._handleDateChange, style: E.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: u.ww(e, t, a) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return n.createElement(p.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: E.dateInputRoot, type: "date" });
                }
            }
            const D = n.createElement(s.default, null),
                E = b.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...b.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, a) => {
            a.d(t, { DD: () => S, ZP: () => k, Zj: () => w, dX: () => Z, ww: () => I });
            var n = a(111677),
                r = a.n(n),
                o = a(822240);
            const l = 1,
                s = 2,
                i = 3,
                c = 4,
                d = 5,
                h = 6,
                u = 7,
                p = 8,
                m = 9,
                b = 10,
                y = 11,
                f = 12,
                g = { [l]: { label: r().hac89ab0, numDays: 31 }, [s]: { label: r().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [i]: { label: r().b56920fa, numDays: 31 }, [c]: { label: r().b1a0f1ec, numDays: 30 }, [d]: { label: r().daf779c8, numDays: 31 }, [h]: { label: r().c6ad074e, numDays: 30 }, [u]: { label: r().f1db106c, numDays: 31 }, [p]: { label: r().i4e80b7a, numDays: 31 }, [m]: { label: r().efa6cc1e, numDays: 30 }, [b]: { label: r().f40a0cbe, numDays: 31 }, [y]: { label: r().ac74a31c, numDays: 30 }, [f]: { label: r().i6c1e4b2, numDays: 31 } },
                v = (e) => ({ label: `${e}`, value: `${e}` }),
                C = (0, o.Z)(1, 29).map(v),
                D = (0, o.Z)(1, 30).map(v),
                E = (0, o.Z)(1, 31).map(v),
                _ = (0, o.Z)(1, 32).map(v),
                Z = () => Object.keys(g).map((e) => ({ label: g[e].label, value: e })),
                w = (e = 1, t, a, n) => {
                    const r = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, r + 1)
                        .reverse()
                        .filter((e) => (2 === n && 29 === a ? x(e) : e))
                        .map(v);
                },
                x = (e) => 1 === new Date(e, 1, 29).getMonth(),
                S = (e, t) => {
                    if (!e) return _;
                    switch (2 === e && (!t || (t && x(t))) ? g[e].numDaysLeapYear : g[e].numDays) {
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
                I = (e, t, a) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof a) {
                        return `${a}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const k = {
                getFormattedDateValue: I,
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
            a.d(t, { Z: () => i });
            var n = a(202784),
                r = a(325686),
                o = a(235902),
                l = a(885015),
                s = a(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: i } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return a ? n.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] })), n.createElement(r.Z, { style: c.gapText }, a), n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] }))) : n.createElement(r.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                l = a(392237);
            class s extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...l } = this.props,
                        s = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, i.column, a && i.withGutterColumn] }));
                    return r.createElement(o.Z, (0, n.Z)({ style: [t, i.root, a && i.withGutter] }, l), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const i = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        524496: (e, t, a) => {
            a.d(t, { Z: () => C });
            a(136728);
            var n = a(202784),
                r = a(301503),
                o = a(325686),
                l = a(595088),
                s = a(516951),
                i = a(731708),
                c = a(779802),
                d = a(537392),
                h = a(989272),
                u = a(925873),
                p = a(202253),
                m = a(786475),
                b = a(392237),
                y = a(135904);
            const f = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: n.createElement(i.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: n.createElement(i.ZP, null) } },
                g = (0, l.Z)(f).reduce((e, [t, a]) => e.set(t, a), r.DefaultDraftBlockRenderMap);
            let v = !1;
            const C = n.memo(function (e) {
                    const { componentByType: t, contentState: a, onScribeEvent: l, paragraphFontSizeOverride: i } = e;
                    n.useEffect(() => {
                        v || (h.fH(y.c, y.n), (v = !0));
                    }, []);
                    const b = [(0, p.ez)(l, i), p.aF, p.RU];
                    e.disable_entityLinkDecorator || b.push((0, p.NA)(l, i));
                    const f = u.Z.initEditorState(a, { decorators: b });
                    let C = s.Z;
                    return (
                        t &&
                            (C = (e) => {
                                const a = e.getType();
                                return t[a] || null;
                            }),
                        n.createElement(d.ZP, null, ({ containerWidth: e }) => n.createElement(o.Z, { style: D.fontFamily }, n.createElement(r.Editor, { blockRenderMap: g, blockRendererFn: C, blockStyleFn: (0, c.su)(m.Z.isNarrowScreenWidth(e)), editorState: f, onChange: s.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                D = b.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779610: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(325686),
                o = a(191796),
                l = a(58399),
                s = a(731708),
                i = a(952428),
                c = a(392237);
            const d = (e) => {
                    const { decoration: t, description: a, disabled: d = !1, isActive: u = !1, label: p, link: m, onPress: b, paddingHorizontal: y, renderRightContent: f, role: g = "tab", styleOverride: v, testID: C = "pivot", thumbnail: D, thumbnailSize: E, withoutArrow: _ = !1 } = e,
                        Z = [h.thumbnailContainer, "medium" === E && h.thumbnailContainerMedium],
                        w = "string" == typeof p ? n.createElement(s.ZP, null, p) : p,
                        x = "object" == typeof m && m.external && !m.openInSameFrame,
                        S = a ? ("string" == typeof a ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, a) : a) : null,
                        I = n.useMemo(() => ("space0" === y ? { paddingHorizontal: 0 } : { paddingHorizontal: y ? c.default.theme.spaces[y] : c.default.theme.componentDimensions.gutterHorizontal }), [y]);
                    return n.createElement(i.Z, { "aria-selected": "tab" === g ? u : null, disabled: d, link: d ? void 0 : m, onPress: b, role: g, style: [h.root, I, d && h.disabled, v], testID: C, withInteractiveStyling: !!m || !!b }, n.createElement(r.Z, { style: h.contentContainer }, D ? n.createElement(r.Z, { style: Z }, D) : null, n.createElement(r.Z, { style: h.content }, w, S), f ? f() : null, (!m && !b) || d || _ ? null : x ? n.createElement(o.default, { style: h.icon }) : n.createElement(l.default, { style: h.icon })), t);
                },
                h = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        466818: (e, t, a) => {
            a.d(t, { ZP: () => f });
            var n = a(202784),
                r = a(325686),
                o = a(487552),
                l = a(302752),
                s = a(183806),
                i = a(731708),
                c = a(950822),
                d = a(224162),
                h = a(392237);
            const u = n.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                p = (e) => (0, c.Z)("option", e);
            let m = 1;
            class b extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = n.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: a } = this.props,
                                { selectedIndex: n, value: r } = e.target;
                            t && t(r, n - (a ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: a, hasError: c, helperText: m, options: b, style: f, testID: g, value: v, withEmptyOption: C } = this.props,
                        { isFocused: D } = this.state,
                        E = i.ZP.getLanguage(),
                        _ = void 0 === c ? !!a : c,
                        Z = new Set();
                    a && Z.add(this._errorID), e && Z.add(e), m && Z.add(this._helperID);
                    const w = Z.size ? [...Z].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const i = "ja" === E ? h.default.theme.fontFamilies.japan : "rtl" === e || l.Z.isLocaleRTL(E) ? h.default.theme.fontFamilies.rtl : h.default.theme.fontFamilies.normal;
                            return n.createElement(
                                r.Z,
                                { style: [s.Z.border, y.container, t && s.Z.disabled, D && s.Z.focusedBorderValid, _ && s.Z.invalidBorderColor, D && _ && s.Z.focusedBorderInvalid, f] },
                                this._renderLabel(),
                                n.createElement(
                                    u,
                                    { "aria-describedby": w, "aria-invalid": _, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [y.select, { fontFamily: i }, t && s.Z.disabled], testID: g || "", value: v },
                                    C ? n.createElement(p, { disabled: !0, style: y.option, value: "" }) : null,
                                    b.map((e) => {
                                        const { disabled: t, label: a, value: r } = e;
                                        return n.createElement(p, { disabled: t, key: `${a}-${r}`, style: y.option, value: r }, a);
                                    }),
                                ),
                                n.createElement(o.default, { style: [y.dropdownCaret, D && s.Z.validColor, !(!c && !a) && s.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        _ && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: a } = this.props,
                        { isFocused: r } = this.state;
                    return n.createElement(i.ZP, { color: t || e ? "red500" : r ? "primary" : "gray700", id: this._labelID, role: "label", style: y.label }, a);
                }
                _renderHelperText() {
                    return n.createElement(r.Z, { "aria-live": "polite" }, n.createElement(i.ZP, { color: "gray700", id: this._helperID, style: y.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return n.createElement(r.Z, { "aria-live": "polite" }, n.createElement(i.ZP, { color: "red500", id: this._errorID, style: y.helperText }, this.props.errorText));
                }
            }
            b.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const y = h.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                f = b;
        },
        790093: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        125568: (e, t, a) => {
            a.d(t, { t: () => r });
            var n = a(202784);
            function r() {
                const e = n.useRef(!0);
                return (
                    n.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    n.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-bc6ccf4c.dedd298a.js.map
