"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceStart", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        337631: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a,
                n,
                o,
                l = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunitySelectQuery", selections: [{ kind: "RequiredField", field: { alias: null, args: (a = [{ kind: "Literal", name: "s", value: "2e2a" }]), concreteType: "Community", kind: "LinkedField", name: "space_hostable_communities", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: 'space_hostable_communities(s:"2e2a")' }, action: "THROW" }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "CommunitySelectQuery", selections: [{ alias: null, args: a, concreteType: "Community", kind: "LinkedField", name: "space_hostable_communities", plural: !0, selections: [n, o, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: 'space_hostable_communities(s:"2e2a")' }] }, params: { id: "Lue1DfmoW2cc0225t_8z1w", metadata: {}, name: "CommunitySelectQuery", operationKind: "query", text: null } };
            l.hash = "906d7e31cdca8fe0abe5822e279fbe32";
            const s = l;
        },
        566220: (e, t, r) => {
            r.d(t, { R: () => l });
            var a = r(202784);
            const n = () => new Date(),
                o = a.createContext(n),
                l = () => a.useContext(o);
        },
        660812: (e, t, r) => {
            r.d(t, { R: () => o });
            var a = r(565058),
                n = r(427266);
            const o = (e) => {
                const t = (0, a.cn)(),
                    r = (0, a.cn)(null, (r, a, ...n) => {
                        const o = r(t);
                        if (o) return o;
                        const l = e(r, a, ...n);
                        return (
                            l instanceof Promise &&
                                (a(t, l),
                                l.finally(() => {
                                    a(t, void 0);
                                })),
                            l
                        );
                    }),
                    o = (0, n.mZ)(r);
                return (o.isLoading = (0, a.cn)((e) => !!e(t))), o;
            };
        },
        943245: (e, t, r) => {
            r.d(t, { It: () => d, mD: () => c, sE: () => s });
            var a = r(899492),
                n = r(733357);
            const o = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                l = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                s = (e) => {
                    const t = e.toLowerCase();
                    return l[t] || t;
                },
                i = (e, t) => {
                    const r = s(e);
                    return !(o.indexOf(r) > -1 && t < 20) && !("und" === e);
                },
                c = ({ displayTextRange: e, entities: t, language: r, text: o }) => {
                    if (!e || !i(r, e[1] - e[0])) return !1;
                    const l = ((e, t) => {
                            let r = a.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in t) r = r.concat(t[e].map((e) => e.indices));
                            return r.sort((e, t) => e[0] - t[0]), r;
                        })(o, t),
                        s = ((e, t, r) => {
                            const { accText: a, lastIndex: n } = r.reduce(({ accText: r, lastIndex: a }, n) => (n[1] <= a || t[1] <= n[0] ? { lastIndex: a, accText: r } : { accText: r + e.slice(a, n[0]), lastIndex: n[1] }), { accText: "", lastIndex: t[0] });
                            return a + e.slice(n, t[1]);
                        })(o, e, l);
                    return !(0, n.Z)(s) && i(r, s.length);
                },
                d = (e) => {
                    if (e.includes("-")) return e;
                    if (navigator.language && navigator.language.startsWith(e)) return navigator.language;
                    if (window.Intl && window.Intl.Locale) {
                        const { region: t } = new window.Intl.Locale(e).maximize();
                        return `${e}-${t}`;
                    }
                    return "ar" === e ? "ar-EG" : e;
                };
        },
        13720: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                n = r(325686),
                o = r(365712),
                l = r(516951),
                s = r(352924);
            const i = ({ allowMultipleToggles: e, children: t, testID: r, withKeyboardNavigation: i = !1 }) => {
                let c, d;
                const u = (0, s.b)(),
                    h = a.useMemo(() => {
                        let r = [];
                        return (
                            a.Children.map(t, (t, a) => {
                                const n = `${u}_${a}`;
                                t.props?.isExpanded && (r = e ? [...r, n] : 1 === r.length ? r : [n]);
                            }),
                            r
                        );
                    }, [u, e, t]),
                    [p, m] = a.useState(h),
                    g = () => d.indexOf(document.activeElement),
                    b = (e) => {
                        e.focus({ preventScroll: !0 });
                    },
                    y = (t) => {
                        let r = [],
                            a = [t];
                        const n = p?.includes(t);
                        e && (n ? (r = p?.filter((e) => e !== t)) : (a = [...p, t])), m(n ? r : a);
                    },
                    f = a.Children.map(t, (e, t) => {
                        const r = `${u}_${t}`;
                        return a.isValidElement(e) ? a.cloneElement(e, { accordionItemId: r, onToggle: y, isExpanded: p.includes(r) }) : e;
                    });
                return a.createElement(
                    n.Z,
                    {
                        onKeyDown: i
                            ? (e) => {
                                  if (!d.includes(e.target)) return;
                                  let t;
                                  switch (e.key) {
                                      case "ArrowDown":
                                          e.preventDefault(), (t = d[g() + 1] || d[0]), b(t);
                                          break;
                                      case "ArrowUp":
                                          e.preventDefault(), (t = d[g() - 1] || d[d.length - 1]), b(t);
                                          break;
                                      case "Home":
                                          e.preventDefault(), (t = d[0]), b(t);
                                          break;
                                      case "End":
                                          e.preventDefault(), (t = d[d.length - 1]), b(t);
                                  }
                              }
                            : l.Z,
                        ref: (e) => {
                            if (e && c !== e) {
                                c = e;
                                const t = (0, o.ht)(c);
                                d = t.filter((e) => e.id.includes("header"));
                            }
                        },
                        testID: r,
                    },
                    f,
                );
            };
        },
        108837: (e, t, r) => {
            r.d(t, { Z: () => h });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(487552),
                l = r(461756),
                s = r(731708),
                i = r(58881),
                c = r(530732),
                d = r(392237);
            const u = d.default.create((e) => ({ header: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, chevronMargin: { marginStart: e.spaces.space12 }, chevronExpanded: { color: e.colors.primary, transform: "rotate(-180deg)" }, chevronAnimation: { transitionDuration: "100ms" }, title: { flexDirection: "row" }, iconBefore: { marginEnd: e.spaces.space8 }, iconAfter: { marginStart: e.spaces.space8 } })),
                h = ({ accordionItemId: e = "", children: t, headerStyles: r, icon: h, iconColor: p, iconImage: m, iconSide: g, isExpanded: b = !1, onClick: y, onToggle: f, testID: v, title: C, titleColor: _, titleStyles: E }) => {
                    const w = i.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.gray0, customHoverBackgroundColor: d.default.theme.colors.gray0, customPressedBackgroundColor: d.default.theme.colors.gray0, insetFocusRing: !0 }),
                        D = g || "AfterTitle",
                        x = () =>
                            h
                                ? ((e, t) => {
                                      const r = "BeforeTitle" === t ? u.iconBefore : u.iconAfter;
                                      return a.createElement(e, { style: p ? [r, { color: p }] : [r, { color: d.default.theme.colors.text }], testID: "icon" });
                                  })(h, D)
                                : m || void 0;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            c.Z,
                            {
                                "aria-controls": `${e}_content`,
                                "aria-expanded": b,
                                id: `${e}_header`,
                                interactiveStyles: w,
                                onClick: () => {
                                    y && y(), f && f(e);
                                },
                                style: r || u.header,
                                testID: v,
                            },
                            a.createElement(n.Z, { style: u.title }, "BeforeTitle" === D ? x() : null, a.createElement(s.ZP, { color: _ && _, style: E, testID: "title", weight: "bold" }, C), "AfterTitle" === D ? x() : null),
                            (() => {
                                const e = [u.chevronMargin, b && u.chevronExpanded, !l.Z.reducedMotionEnabled && u.chevronAnimation];
                                return _ && !b ? e.push({ color: d.default.theme.colors[_] }) : _ || b || e.push({ color: d.default.theme.colors.text }), a.createElement(o.default, { style: e, testID: "accordion-chevron" });
                            })(),
                        ),
                        b && a.createElement(n.Z, { "aria-hidden": !b, "aria-labelledby": `${e}_header`, id: `${e}_content}`, role: "region" }, t),
                    );
                };
        },
        260706: (e, t, r) => {
            r.d(t, { Z: () => C });
            var a = r(202784),
                n = r(325686),
                o = r(332920),
                l = r.n(o),
                s = r(97043),
                i = r(323265),
                c = r(731708),
                d = r(154003),
                u = r(950822),
                h = r(586855),
                p = r(855488),
                m = r(466818),
                g = r(392237);
            const b = l().jf83d092,
                y = l().af4abf20,
                f = l().b871f280;
            let v = 1;
            class C extends a.Component {
                constructor(e) {
                    super(e),
                        (this._showCalendarPicker = () => {
                            this._nativeCalendarRef?.showPicker?.();
                        }),
                        (this._setNativeCalendarRef = (e) => {
                            this._nativeCalendarRef = e;
                        }),
                        (this._handleSelectorChange = (e, t) => {
                            const { day: r, month: a, year: n } = this.props,
                                o = { day: r, month: a, year: n, [e]: parseInt(t, 10) };
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
                                r = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) };
                            this.props.onChange(r);
                        });
                    const { day: t, maxSelectableYear: r, minSelectableYear: a, month: n, year: o } = e;
                    (this._errorID = `DATE_INPUT_${v}_ERROR`), (this._monthOptions = h.dX()), (this._nativeDefaultValue = h.ww(t, n, o)), (this._nativeMaxDate = h.ww(31, 12, r)), (this._nativeMinDate = h.ww(1, 1, a)), (v += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: r, onChange: a, year: n } = this.props,
                        o = r && r !== e.month,
                        l = n && n !== e.year;
                    if (o || l) {
                        h
                            .DD(r, n)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || a({ month: r, year: n, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        r = i.ZP.isMobileOS() && !t;
                    return a.createElement(n.Z, null, r ? this._renderNativeDateInput() : this._renderSelectors(), e ? a.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: r, errors: o = {}, label: l, autofocus: s, monthSelectorTestID: i, daySelectorTestID: c, yearSelectorTestID: p, style: g, minSelectableYear: v, maxSelectableYear: C, withCalendar: w, hideDay: D, disabled: x } = this.props,
                        Z = h.DD(t, r),
                        I = h.Zj(v, C, e, t);
                    return a.createElement(n.Z, { "aria-label": l, role: "group", style: [E.selectorsContainer, g] }, a.createElement(m.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: s, disabled: x, hasError: o.month, label: y, onChange: this._handleMonthChange, options: this._monthOptions, style: E.monthSelector, testID: i, value: t ? `${t}` : "", withEmptyOption: !0 }), D ? null : a.createElement(m.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: x, hasError: o.day, label: b, onChange: this._handleDayChange, options: Z, style: E.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), a.createElement(m.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: x, hasError: o.year, label: f, onChange: this._handleYearChange, options: I, style: E.yearSelector, testID: p, value: r ? `${r}` : "", withEmptyOption: !0 }), w && a.createElement(n.Z, { role: "label", style: E.calendarLabel }, a.createElement(d.ZP, { "aria-label": "Calendar", icon: _, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, u.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: l, onChange: this._handleDateChange, style: E.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: h.ww(e, t, r) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return a.createElement(p.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: E.dateInputRoot, type: "date" });
                }
            }
            const _ = a.createElement(s.default, null),
                E = g.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...g.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, r) => {
            r.d(t, { DD: () => I, ZP: () => T, Zj: () => x, dX: () => D, ww: () => S });
            var a = r(332920),
                n = r.n(a),
                o = r(822240);
            const l = 1,
                s = 2,
                i = 3,
                c = 4,
                d = 5,
                u = 6,
                h = 7,
                p = 8,
                m = 9,
                g = 10,
                b = 11,
                y = 12,
                f = { [l]: { label: n().hac89ab0, numDays: 31 }, [s]: { label: n().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [i]: { label: n().b56920fa, numDays: 31 }, [c]: { label: n().b1a0f1ec, numDays: 30 }, [d]: { label: n().daf779c8, numDays: 31 }, [u]: { label: n().c6ad074e, numDays: 30 }, [h]: { label: n().f1db106c, numDays: 31 }, [p]: { label: n().i4e80b7a, numDays: 31 }, [m]: { label: n().efa6cc1e, numDays: 30 }, [g]: { label: n().f40a0cbe, numDays: 31 }, [b]: { label: n().ac74a31c, numDays: 30 }, [y]: { label: n().i6c1e4b2, numDays: 31 } },
                v = (e) => ({ label: `${e}`, value: `${e}` }),
                C = (0, o.Z)(1, 29).map(v),
                _ = (0, o.Z)(1, 30).map(v),
                E = (0, o.Z)(1, 31).map(v),
                w = (0, o.Z)(1, 32).map(v),
                D = () => Object.keys(f).map((e) => ({ label: f[e].label, value: e })),
                x = (e = 1, t, r, a) => {
                    const n = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, n + 1)
                        .reverse()
                        .filter((e) => (2 === a && 29 === r ? Z(e) : e))
                        .map(v);
                },
                Z = (e) => 1 === new Date(e, 1, 29).getMonth(),
                I = (e, t) => {
                    if (!e) return w;
                    switch (2 === e && (!t || (t && Z(t))) ? f[e].numDaysLeapYear : f[e].numDays) {
                        case 28:
                            return C;
                        case 29:
                            return _;
                        case 30:
                            return E;
                        default:
                            return w;
                    }
                },
                S = (e, t, r) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof r) {
                        return `${r}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const T = {
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
        420412: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                n = r(325686),
                o = r(235902),
                l = r(885015),
                s = r(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: i } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? a.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(n.Z, { style: c.gapColumn }, a.createElement(n.Z, { style: [c.gap, d] })), a.createElement(n.Z, { style: c.gapText }, r), a.createElement(n.Z, { style: c.gapColumn }, a.createElement(n.Z, { style: [c.gap, d] }))) : a.createElement(n.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                l = r(392237);
            class s extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        s = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, i.column, r && i.withGutterColumn] }));
                    return n.createElement(o.Z, (0, a.Z)({ style: [t, i.root, r && i.withGutter] }, l), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const i = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        466818: (e, t, r) => {
            r.d(t, { ZP: () => y });
            var a = r(202784),
                n = r(325686),
                o = r(487552),
                l = r(302752),
                s = r(183806),
                i = r(731708),
                c = r(950822),
                d = r(224162),
                u = r(392237);
            const h = a.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                p = (e) => (0, c.Z)("option", e);
            let m = 1;
            class g extends a.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = a.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: r } = this.props,
                                { selectedIndex: a, value: n } = e.target;
                            t && t(n, a - (r ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: r, hasError: c, helperText: m, options: g, style: y, testID: f, value: v, withEmptyOption: C } = this.props,
                        { isFocused: _ } = this.state,
                        E = i.ZP.getLanguage(),
                        w = void 0 === c ? !!r : c,
                        D = new Set();
                    r && D.add(this._errorID), e && D.add(e), m && D.add(this._helperID);
                    const x = D.size ? [...D].join(" ") : void 0;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const i = "ja" === E ? u.default.theme.fontFamilies.japan : "rtl" === e || l.Z.isLocaleRTL(E) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return a.createElement(
                                n.Z,
                                { style: [s.Z.border, b.container, t && s.Z.disabled, _ && s.Z.focusedBorderValid, w && s.Z.invalidBorderColor, _ && w && s.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                a.createElement(
                                    h,
                                    { "aria-describedby": x, "aria-invalid": w, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: i }, t && s.Z.disabled], testID: f || "", value: v },
                                    C ? a.createElement(p, { disabled: !0, style: b.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: r, value: n } = e;
                                        return a.createElement(p, { disabled: t, key: `${r}-${n}`, style: b.option, value: n }, r);
                                    }),
                                ),
                                a.createElement(o.default, { style: [b.dropdownCaret, _ && s.Z.validColor, !(!c && !r) && s.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        w && r ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: r } = this.props,
                        { isFocused: n } = this.state;
                    return a.createElement(i.ZP, { color: t || e ? "red500" : n ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, r);
                }
                _renderHelperText() {
                    return a.createElement(n.Z, { "aria-live": "polite" }, a.createElement(i.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return a.createElement(n.Z, { "aria-live": "polite" }, a.createElement(i.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = g;
        },
        564619: (e, t, r) => {
            r.d(t, { Z: () => C });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(332920),
                l = r.n(o),
                s = r(323265),
                i = r(731708),
                c = r(855488),
                d = r(466818),
                u = r(392237);
            const h = (() => {
                    const e = {};
                    return (t) => {
                        const r = void 0 === t ? "undefined" : t.toString();
                        if (!e.hasOwnProperty(r)) {
                            const a = { use24HourTime: !!t, hourFormat: t ? "2-digit" : "numeric", minuteFormat: "2-digit" };
                            if ("object" == typeof window.Intl) {
                                const e = new window.Intl.DateTimeFormat("default", { hour12: void 0 === t ? void 0 : !t, hour: "numeric", minute: "numeric" }).resolvedOptions();
                                (a.use24HourTime = !e.hour12), (a.hourFormat = e.hour || a.hourFormat), (a.minuteFormat = e.minute || a.minuteFormat);
                            }
                            e[r] = a;
                        }
                        return e[r];
                    };
                })(),
                p = (e, t = 2, r = "0") => {
                    const a = r.repeat(t),
                        n = "number" == typeof e ? `${e}` : "";
                    return n.length >= t ? n : `${a}${n}`.slice(-t);
                },
                m = l().eb124f96,
                g = l().i7a6f114,
                b = l().ccc99ff2,
                y = [...Array(24).keys()],
                f = [...Array(13).keys()].slice(1),
                v = [...Array(60).keys()];
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { hour: t, minute: r, onChange: a } = this.props;
                            (e.hour === t && e.minute === r) || a(e);
                        }),
                        (this._handleNativeChange = (e) => {
                            const { value: t } = e.target;
                            this._handleChange(_.parse(t));
                        }),
                        (this._handleHourChange = (e) => {
                            const { use24HourTime: t } = this._getLocale(),
                                { hour: r, minute: a } = this.props;
                            let n;
                            e && ((n = parseInt(e, 10)), t || "number" != typeof r || (r > 12 ? (n = (n + 12) % 24) : (n %= 12))), this._handleChange(new _(n, a));
                        }),
                        (this._handleMinuteChange = (e) => {
                            const { hour: t } = this.props,
                                r = e ? parseInt(e, 10) : void 0;
                            this._handleChange(new _(t, r));
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
                            this._handleChange(new _(t, r));
                        });
                }
                render() {
                    const { "aria-label": e, disabled: t, errorText: r, helperText: o, invalid: l, label: c, style: d } = this.props,
                        u = !!l,
                        h = s.ZP.isMobileOS();
                    return a.createElement(n.Z, { style: [t && E.disabled, d] }, a.createElement(n.Z, { "aria-label": e || c, role: "group" }, a.createElement(i.ZP, { color: "gray700" }, c), h ? a.createElement(n.Z, { style: E.containerNative }, this._renderNativeInput()) : a.createElement(n.Z, { style: E.containerSelectors }, this._renderSelectors())), a.createElement(n.Z, { style: E.subtextWrapper }, o ? this._renderHelperText() : null, u && r ? this._renderErrorText() : null));
                }
                _getLocale() {
                    const { use24HourTime: e } = this.props;
                    return h(e);
                }
                _getFields() {
                    const { hour: e, minute: t } = this.props,
                        { hour: r, minute: a } = new _(e, t),
                        { hourFormat: n, minuteFormat: o, use24HourTime: l } = this._getLocale(),
                        s = "number" == typeof r ? (r < 12 ? "am" : "pm") : void 0,
                        i = l ? y : f,
                        c = v,
                        d = "2-digit" === n ? 2 : 1,
                        u = "2-digit" === o ? 2 : 1,
                        h = [];
                    return (
                        h.push({ label: g, options: i.map((e) => ({ label: p(e, d), value: `${e}` })), onChange: this._handleHourChange, value: "number" == typeof r ? `${l ? r : r % 12 || 12}` : "", withEmptyOption: !0 }),
                        h.push({ label: b, options: c.map((e) => ({ label: p(e, u), value: `${e}` })), onChange: this._handleMinuteChange, value: "number" == typeof a ? `${a}` : "", withEmptyOption: !0 }),
                        l ||
                            h.push({
                                label: m,
                                options: [
                                    { label: "AM", value: "am" },
                                    { label: "PM", value: "pm" },
                                ],
                                onChange: this._handleAmPmChange,
                                value: void 0 !== s ? s : "",
                                withEmptyOption: void 0 === r || void 0 === a,
                            }),
                        h
                    );
                }
                _renderNativeInput() {
                    const { autoFocus: e, disabled: t, hour: r, label: n, minute: o } = this.props,
                        l = new _(r, o);
                    return a.createElement(c.Z, { autoCapitalize: "none", autoComplete: "off", autoCorrect: !1, autoFocus: e, editable: !t, label: n, name: "timeInput", numberOfLines: 1, onChange: this._handleNativeChange, spellCheck: "false", style: E.native, type: "time", value: l.toString() });
                }
                _renderSelectors() {
                    const { autoFocus: e, disabled: t, invalid: r } = this.props,
                        n = !!r,
                        o = this._getFields();
                    return a.createElement(
                        a.Fragment,
                        null,
                        o.map((r, o) => a.createElement(d.ZP, { autofocus: 0 === o ? e : void 0, disabled: t, hasError: n, key: r.label, label: r.label, onChange: r.onChange, options: r.options, value: r.value, withEmptyOption: r.withEmptyOption })),
                    );
                }
                _renderHelperText() {
                    const { helperText: e } = this.props;
                    return a.createElement(n.Z, { "aria-live": "polite" }, a.createElement(i.ZP, { color: "gray700", style: E.subtext }, e));
                }
                _renderErrorText() {
                    const { errorText: e } = this.props;
                    return a.createElement(n.Z, { "aria-live": "assertive" }, a.createElement(i.ZP, { color: "red500", style: E.subtext }, e));
                }
            }
            class _ {
                constructor(e, t) {
                    const r = "number" == typeof e ? Math.max(Math.min(e, 23), 0) : void 0,
                        a = "number" == typeof t ? Math.max(Math.min(t, 59), 0) : void 0;
                    Object.defineProperty(this, "hour", { value: r, enumerable: !0 }), Object.defineProperty(this, "minute", { value: a, enumerable: !0 });
                }
                static parse(e) {
                    let t, r;
                    if (e && e.match(/^(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9])$/)) {
                        const [a, n] = e.split(":");
                        (t = parseInt(a, 10)), (r = parseInt(n, 10));
                    }
                    return new _(t, r);
                }
                toString() {
                    const e = "number" == typeof this.hour,
                        t = "number" == typeof this.minute;
                    return e && t ? `${p(this.hour)}:${p(this.minute)}` : "";
                }
            }
            const E = u.default.create((e) => ({ containerNative: { paddingTop: e.spaces.space2 }, containerSelectors: { display: "grid", gridColumnGap: e.spaces.space12, gridTemplateColumns: "1fr 1fr 1fr", paddingTop: e.spaces.space2 }, disabled: { cursor: "default", opacity: 0.5 }, native: { paddingVertical: 0, paddingHorizontal: 0 }, subtextWrapper: { flexDirection: "column", flex: 1 }, subtext: { paddingTop: e.spaces.space4 } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        711223: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        674306: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => n, Z: () => a });
            r(136728);
            const a = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (r, a, n) => {
                        const o = t ? t(a, n, e) : !!a;
                        return o && r[0].push(a), !o && r[1].push(a), r;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, t, r) => {
            var a = r(821176);
            e.exports = function () {
                var e = a(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceStart.fad1c75a.js.map
