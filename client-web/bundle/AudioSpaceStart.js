"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceStart", "loader.AudioContextVoiceMedia", "icons/IconFollowArrowLeft-js", "icons/IconSound-js", "icons/IconSparkle-js"],
    {
        337631: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n,
                r,
                l,
                o = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunitySelectQuery", selections: [{ kind: "RequiredField", field: { alias: null, args: (n = [{ kind: "Literal", name: "s", value: "2e2a" }]), concreteType: "Community", kind: "LinkedField", name: "space_hostable_communities", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: 'space_hostable_communities(s:"2e2a")' }, action: "THROW" }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "CommunitySelectQuery", selections: [{ alias: null, args: n, concreteType: "Community", kind: "LinkedField", name: "space_hostable_communities", plural: !0, selections: [r, l, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: 'space_hostable_communities(s:"2e2a")' }] }, params: { id: "Lue1DfmoW2cc0225t_8z1w", metadata: {}, name: "CommunitySelectQuery", operationKind: "query", text: null } };
            o.hash = "906d7e31cdca8fe0abe5822e279fbe32";
            const i = o;
        },
        566220: (e, t, a) => {
            a.d(t, { R: () => o });
            var n = a(202784);
            const r = () => new Date(),
                l = n.createContext(r),
                o = () => n.useContext(l);
        },
        660812: (e, t, a) => {
            a.d(t, { R: () => l });
            var n = a(565058),
                r = a(427266);
            const l = (e) => {
                const t = (0, n.cn)(),
                    a = (0, n.cn)(null, (a, n, ...r) => {
                        const l = a(t);
                        if (l) return l;
                        const o = e(a, n, ...r);
                        return (
                            o instanceof Promise &&
                                (n(t, o),
                                o.finally(() => {
                                    n(t, void 0);
                                })),
                            o
                        );
                    }),
                    l = (0, r.mZ)(a);
                return (l.isLoading = (0, n.cn)((e) => !!e(t))), l;
            };
        },
        943245: (e, t, a) => {
            a.d(t, { It: () => u, mD: () => d, sE: () => i, t: () => s });
            var n = a(899492),
                r = a(733357);
            const l = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                o = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                i = (e) => {
                    const t = e.toLowerCase();
                    return o[t] || t;
                },
                s = (e, t) => {
                    if (t) return new Intl.DisplayNames([e], { type: "language" }).of(t);
                },
                c = (e, t) => {
                    const a = i(e);
                    return !(l.indexOf(a) > -1 && t < 20) && !("und" === e);
                },
                d = ({ displayTextRange: e, entities: t, language: a, text: l }) => {
                    if (!e || !c(a, e[1] - e[0])) return !1;
                    const o = ((e, t) => {
                            let a = n.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in t) a = a.concat(t[e].map((e) => e.indices));
                            return a.sort((e, t) => e[0] - t[0]), a;
                        })(l, t),
                        i = ((e, t, a) => {
                            const { accText: n, lastIndex: r } = a.reduce(({ accText: a, lastIndex: n }, r) => (r[1] <= n || t[1] <= r[0] ? { lastIndex: n, accText: a } : { accText: a + e.slice(n, r[0]), lastIndex: r[1] }), { accText: "", lastIndex: t[0] });
                            return n + e.slice(r, t[1]);
                        })(l, e, o);
                    return !(0, r.Z)(i) && c(a, i.length);
                },
                u = (e) => {
                    if (e.includes("-")) return e;
                    if (navigator.language && navigator.language.startsWith(e)) return navigator.language;
                    if (window.Intl && window.Intl.Locale) {
                        const { region: t } = new window.Intl.Locale(e).maximize();
                        return `${e}-${t}`;
                    }
                    return "ar" === e ? "ar-EG" : e;
                };
        },
        13720: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(325686),
                l = a(365712),
                o = a(516951),
                i = a(352924);
            const s = ({ allowMultipleToggles: e, children: t, testID: a, withKeyboardNavigation: s = !1 }) => {
                let c, d;
                const u = (0, i.b)(),
                    h = n.useMemo(() => {
                        let a = [];
                        return (
                            n.Children.map(t, (t, n) => {
                                const r = `${u}_${n}`;
                                t.props?.isExpanded && (a = e ? [...a, r] : 1 === a.length ? a : [r]);
                            }),
                            a
                        );
                    }, [u, e, t]),
                    [m, p] = n.useState(h),
                    g = () => d.indexOf(document.activeElement),
                    y = (e) => {
                        e.focus({ preventScroll: !0 });
                    },
                    f = (t) => {
                        let a = [],
                            n = [t];
                        const r = m?.includes(t);
                        e && (r ? (a = m?.filter((e) => e !== t)) : (n = [...m, t])), p(r ? a : n);
                    },
                    b = n.Children.map(t, (e, t) => {
                        const a = `${u}_${t}`;
                        return n.isValidElement(e) ? n.cloneElement(e, { accordionItemId: a, onToggle: f, isExpanded: m.includes(a) }) : e;
                    });
                return n.createElement(
                    r.Z,
                    {
                        onKeyDown: s
                            ? (e) => {
                                  if (!d.includes(e.target)) return;
                                  let t;
                                  switch (e.key) {
                                      case "ArrowDown":
                                          e.preventDefault(), (t = d[g() + 1] || d[0]), y(t);
                                          break;
                                      case "ArrowUp":
                                          e.preventDefault(), (t = d[g() - 1] || d[d.length - 1]), y(t);
                                          break;
                                      case "Home":
                                          e.preventDefault(), (t = d[0]), y(t);
                                          break;
                                      case "End":
                                          e.preventDefault(), (t = d[d.length - 1]), y(t);
                                  }
                              }
                            : o.Z,
                        ref: (e) => {
                            if (e && c !== e) {
                                c = e;
                                const t = (0, l.ht)(c);
                                d = t.filter((e) => e.id.includes("header"));
                            }
                        },
                        testID: a,
                    },
                    b,
                );
            };
        },
        108837: (e, t, a) => {
            a.d(t, { Z: () => h });
            a(136728);
            var n = a(202784),
                r = a(325686),
                l = a(487552),
                o = a(461756),
                i = a(731708),
                s = a(58881),
                c = a(530732),
                d = a(392237);
            const u = d.default.create((e) => ({ header: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, chevronMargin: { marginStart: e.spaces.space12 }, chevronExpanded: { color: e.colors.primary, transform: "rotate(-180deg)" }, chevronAnimation: { transitionDuration: "100ms" }, title: { flexDirection: "row" }, iconBefore: { marginEnd: e.spaces.space8 }, iconAfter: { marginStart: e.spaces.space8 } })),
                h = ({ accordionItemId: e = "", children: t, headerStyles: a, icon: h, iconColor: m, iconImage: p, iconSide: g, isExpanded: y = !1, onClick: f, onToggle: b, testID: v, title: D, titleColor: C, titleStyles: w }) => {
                    const _ = s.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.gray0, customHoverBackgroundColor: d.default.theme.colors.gray0, customPressedBackgroundColor: d.default.theme.colors.gray0, insetFocusRing: !0 }),
                        x = g || "AfterTitle",
                        E = () =>
                            h
                                ? ((e, t) => {
                                      const a = "BeforeTitle" === t ? u.iconBefore : u.iconAfter;
                                      return n.createElement(e, { style: m ? [a, { color: m }] : [a, { color: d.default.theme.colors.text }], testID: "icon" });
                                  })(h, x)
                                : p || void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            c.Z,
                            {
                                "aria-controls": `${e}_content`,
                                "aria-expanded": y,
                                id: `${e}_header`,
                                interactiveStyles: _,
                                onClick: () => {
                                    f && f(), b && b(e);
                                },
                                style: a || u.header,
                                testID: v,
                            },
                            n.createElement(r.Z, { style: u.title }, "BeforeTitle" === x ? E() : null, n.createElement(i.ZP, { color: C && C, style: w, testID: "title", weight: "bold" }, D), "AfterTitle" === x ? E() : null),
                            (() => {
                                const e = [u.chevronMargin, y && u.chevronExpanded, !o.Z.reducedMotionEnabled && u.chevronAnimation];
                                return C && !y ? e.push({ color: d.default.theme.colors[C] }) : C || y || e.push({ color: d.default.theme.colors.text }), n.createElement(l.default, { style: e, testID: "accordion-chevron" });
                            })(),
                        ),
                        y && n.createElement(r.Z, { "aria-hidden": !y, "aria-labelledby": `${e}_header`, id: `${e}_content}`, role: "region" }, t),
                    );
                };
        },
        260706: (e, t, a) => {
            a.d(t, { Z: () => D });
            var n = a(202784),
                r = a(325686),
                l = a(111677),
                o = a.n(l),
                i = a(97043),
                s = a(323265),
                c = a(731708),
                d = a(154003),
                u = a(950822),
                h = a(586855),
                m = a(855488),
                p = a(466818),
                g = a(392237);
            const y = o().jf83d092,
                f = o().af4abf20,
                b = o().b871f280;
            let v = 1;
            class D extends n.Component {
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
                                l = { day: a, month: n, year: r, [e]: parseInt(t, 10) };
                            this.props.onChange(l);
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
                    const { day: t, maxSelectableYear: a, minSelectableYear: n, month: r, year: l } = e;
                    (this._errorID = `DATE_INPUT_${v}_ERROR`), (this._monthOptions = h.dX()), (this._nativeDefaultValue = h.ww(t, r, l)), (this._nativeMaxDate = h.ww(31, 12, a)), (this._nativeMinDate = h.ww(1, 1, n)), (v += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: a, onChange: n, year: r } = this.props,
                        l = a && a !== e.month,
                        o = r && r !== e.year;
                    if (l || o) {
                        h
                            .DD(a, r)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || n({ month: a, year: r, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        a = s.ZP.isMobileOS() && !t;
                    return n.createElement(r.Z, null, a ? this._renderNativeDateInput() : this._renderSelectors(), e ? n.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: a, errors: l = {}, label: o, autofocus: i, monthSelectorTestID: s, daySelectorTestID: c, yearSelectorTestID: m, style: g, minSelectableYear: v, maxSelectableYear: D, withCalendar: _, hideDay: x, disabled: E } = this.props,
                        Z = h.DD(t, a),
                        I = h.Zj(v, D, e, t);
                    return n.createElement(r.Z, { "aria-label": o, role: "group", style: [w.selectorsContainer, g] }, n.createElement(p.ZP, { "aria-describedby": l.month ? this._errorID : void 0, autofocus: i, disabled: E, hasError: l.month, label: f, onChange: this._handleMonthChange, options: this._monthOptions, style: w.monthSelector, testID: s, value: t ? `${t}` : "", withEmptyOption: !0 }), x ? null : n.createElement(p.ZP, { "aria-describedby": l.day ? this._errorID : void 0, disabled: E, hasError: l.day, label: y, onChange: this._handleDayChange, options: Z, style: w.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), n.createElement(p.ZP, { "aria-describedby": l.year ? this._errorID : void 0, disabled: E, hasError: l.year, label: b, onChange: this._handleYearChange, options: I, style: w.yearSelector, testID: m, value: a ? `${a}` : "", withEmptyOption: !0 }), _ && n.createElement(r.Z, { role: "label", style: w.calendarLabel }, n.createElement(d.ZP, { "aria-label": "Calendar", icon: C, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, u.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: o, onChange: this._handleDateChange, style: w.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: h.ww(e, t, a) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return n.createElement(m.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: w.dateInputRoot, type: "date" });
                }
            }
            const C = n.createElement(i.default, null),
                w = g.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...g.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, a) => {
            a.d(t, { DD: () => I, ZP: () => k, Zj: () => E, dX: () => x, ww: () => S });
            var n = a(111677),
                r = a.n(n),
                l = a(822240);
            const o = 1,
                i = 2,
                s = 3,
                c = 4,
                d = 5,
                u = 6,
                h = 7,
                m = 8,
                p = 9,
                g = 10,
                y = 11,
                f = 12,
                b = { [o]: { label: r().hac89ab0, numDays: 31 }, [i]: { label: r().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [s]: { label: r().b56920fa, numDays: 31 }, [c]: { label: r().b1a0f1ec, numDays: 30 }, [d]: { label: r().daf779c8, numDays: 31 }, [u]: { label: r().c6ad074e, numDays: 30 }, [h]: { label: r().f1db106c, numDays: 31 }, [m]: { label: r().i4e80b7a, numDays: 31 }, [p]: { label: r().efa6cc1e, numDays: 30 }, [g]: { label: r().f40a0cbe, numDays: 31 }, [y]: { label: r().ac74a31c, numDays: 30 }, [f]: { label: r().i6c1e4b2, numDays: 31 } },
                v = (e) => ({ label: `${e}`, value: `${e}` }),
                D = (0, l.Z)(1, 29).map(v),
                C = (0, l.Z)(1, 30).map(v),
                w = (0, l.Z)(1, 31).map(v),
                _ = (0, l.Z)(1, 32).map(v),
                x = () => Object.keys(b).map((e) => ({ label: b[e].label, value: e })),
                E = (e = 1, t, a, n) => {
                    const r = t || new Date(Date.now()).getFullYear();
                    return (0, l.Z)(e, r + 1)
                        .reverse()
                        .filter((e) => (2 === n && 29 === a ? Z(e) : e))
                        .map(v);
                },
                Z = (e) => 1 === new Date(e, 1, 29).getMonth(),
                I = (e, t) => {
                    if (!e) return _;
                    switch (2 === e && (!t || (t && Z(t))) ? b[e].numDaysLeapYear : b[e].numDays) {
                        case 28:
                            return D;
                        case 29:
                            return C;
                        case 30:
                            return w;
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
            var n = a(202784),
                r = a(325686),
                l = a(235902),
                o = a(885015),
                i = a(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: s } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return a ? n.createElement(o.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] })), n.createElement(r.Z, { style: c.gapText }, a), n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] }))) : n.createElement(r.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(807896),
                r = a(202784),
                l = a(325686),
                o = a(392237);
            class i extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...o } = this.props,
                        i = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, s.column, a && s.withGutterColumn] }));
                    return r.createElement(l.Z, (0, n.Z)({ style: [t, s.root, a && s.withGutter] }, o), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        246492: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        926628: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        262009: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        662678: (e, t, a) => {
            a.d(t, { G: () => r, Z: () => n });
            a(136728);
            const n = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (a, n, r) => {
                        const l = t ? t(n, r, e) : !!n;
                        return l && a[0].push(n), !l && a[1].push(n), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceStart.7e9c59ba.js.map
