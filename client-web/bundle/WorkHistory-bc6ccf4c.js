"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-bc6ccf4c", "icons/IconChevronRight-js"],
    {
        751475: (e, t, n) => {
            n.d(t, { Z: () => u });
            n(136728);
            var r = n(202784),
                a = n(111677),
                o = n.n(a),
                l = n(190286);
            const i = o().b15c0a18,
                s = o().aebf81c8,
                d = o().aa744c1e,
                c = o().fe04d89a,
                u = (e) => {
                    const { children: t, fallbackBackPath: n, history: a, onNavigation: o, shouldBlockNavigation: u, shouldBlockUnload: h } = e,
                        [m, f] = r.useState(void 0);
                    r.useEffect(() => {
                        const e = (e) => {
                            h && (e.preventDefault(), (e.returnValue = ""));
                        };
                        return (
                            window.addEventListener("beforeunload", e),
                            () => {
                                window.removeEventListener("beforeunload", e);
                            }
                        );
                    }, [h]);
                    const p = r.useCallback((e, t) => !(!m && u(e, t)) || (f({ nextLocation: e, action: t }), !1), [m, u]);
                    r.useEffect(() => {
                        const e = a.block(p);
                        return () => e();
                    }, [p, a]);
                    const b = r.useCallback(() => {
                            f(void 0);
                        }, [f]),
                        g = r.useCallback(() => {
                            o?.(),
                                f((e) => {
                                    if (null == e) return;
                                    const { action: t, nextLocation: r } = e;
                                    switch (t) {
                                        case "PUSH":
                                            a.push(r);
                                            break;
                                        case "REPLACE":
                                            a.replace(r);
                                            break;
                                        case "POP":
                                            a.goBackThroughModals({ fallbackPath: n });
                                    }
                                });
                        }, [n, a, o]);
                    return r.createElement(r.Fragment, null, t, m ? r.createElement(l.Z, { cancelButtonLabel: d, confirmButtonLabel: c, confirmButtonType: "destructiveFilled", headline: i, onCancel: b, onConfirm: g, text: s }) : null);
                };
        },
        260706: (e, t, n) => {
            n.d(t, { Z: () => w });
            var r = n(202784),
                a = n(325686),
                o = n(111677),
                l = n.n(o),
                i = n(97043),
                s = n(323265),
                d = n(731708),
                c = n(154003),
                u = n(950822),
                h = n(586855),
                m = n(855488),
                f = n(466818),
                p = n(392237);
            const b = l().jf83d092,
                g = l().af4abf20,
                y = l().b871f280;
            let D = 1;
            class w extends r.Component {
                constructor(e) {
                    super(e),
                        (this._showCalendarPicker = () => {
                            this._nativeCalendarRef?.showPicker?.();
                        }),
                        (this._setNativeCalendarRef = (e) => {
                            this._nativeCalendarRef = e;
                        }),
                        (this._handleSelectorChange = (e, t) => {
                            const { day: n, month: r, year: a } = this.props,
                                o = { day: n, month: r, year: a, [e]: parseInt(t, 10) };
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
                                n = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) };
                            this.props.onChange(n);
                        });
                    const { day: t, maxSelectableYear: n, minSelectableYear: r, month: a, year: o } = e;
                    (this._errorID = `DATE_INPUT_${D}_ERROR`), (this._monthOptions = h.dX()), (this._nativeDefaultValue = h.ww(t, a, o)), (this._nativeMaxDate = h.ww(31, 12, n)), (this._nativeMinDate = h.ww(1, 1, r)), (D += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: n, onChange: r, year: a } = this.props,
                        o = n && n !== e.month,
                        l = a && a !== e.year;
                    if (o || l) {
                        h
                            .DD(n, a)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || r({ month: n, year: a, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        n = s.ZP.isMobileOS() && !t;
                    return r.createElement(a.Z, null, n ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(d.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: n, errors: o = {}, label: l, autofocus: i, monthSelectorTestID: s, daySelectorTestID: d, yearSelectorTestID: m, style: p, minSelectableYear: D, maxSelectableYear: w, withCalendar: k, hideDay: C, disabled: _ } = this.props,
                        S = h.DD(t, n),
                        $ = h.Zj(D, w, e, t);
                    return r.createElement(a.Z, { "aria-label": l, role: "group", style: [v.selectorsContainer, p] }, r.createElement(f.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: i, disabled: _, hasError: o.month, label: g, onChange: this._handleMonthChange, options: this._monthOptions, style: v.monthSelector, testID: s, value: t ? `${t}` : "", withEmptyOption: !0 }), C ? null : r.createElement(f.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: _, hasError: o.day, label: b, onChange: this._handleDayChange, options: S, style: v.daySelector, testID: d, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(f.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: _, hasError: o.year, label: y, onChange: this._handleYearChange, options: $, style: v.yearSelector, testID: m, value: n ? `${n}` : "", withEmptyOption: !0 }), k && r.createElement(a.Z, { role: "label", style: v.calendarLabel }, r.createElement(c.ZP, { "aria-label": "Calendar", icon: E, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, u.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: l, onChange: this._handleDateChange, style: v.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: h.ww(e, t, n) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return r.createElement(m.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: v.dateInputRoot, type: "date" });
                }
            }
            const E = r.createElement(i.default, null),
                v = p.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...p.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, n) => {
            n.d(t, { DD: () => $, ZP: () => Z, Zj: () => _, dX: () => C, ww: () => x });
            var r = n(111677),
                a = n.n(r),
                o = n(822240);
            const l = 1,
                i = 2,
                s = 3,
                d = 4,
                c = 5,
                u = 6,
                h = 7,
                m = 8,
                f = 9,
                p = 10,
                b = 11,
                g = 12,
                y = { [l]: { label: a().hac89ab0, numDays: 31 }, [i]: { label: a().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [s]: { label: a().b56920fa, numDays: 31 }, [d]: { label: a().b1a0f1ec, numDays: 30 }, [c]: { label: a().daf779c8, numDays: 31 }, [u]: { label: a().c6ad074e, numDays: 30 }, [h]: { label: a().f1db106c, numDays: 31 }, [m]: { label: a().i4e80b7a, numDays: 31 }, [f]: { label: a().efa6cc1e, numDays: 30 }, [p]: { label: a().f40a0cbe, numDays: 31 }, [b]: { label: a().ac74a31c, numDays: 30 }, [g]: { label: a().i6c1e4b2, numDays: 31 } },
                D = (e) => ({ label: `${e}`, value: `${e}` }),
                w = (0, o.Z)(1, 29).map(D),
                E = (0, o.Z)(1, 30).map(D),
                v = (0, o.Z)(1, 31).map(D),
                k = (0, o.Z)(1, 32).map(D),
                C = () => Object.keys(y).map((e) => ({ label: y[e].label, value: e })),
                _ = (e = 1, t, n, r) => {
                    const a = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, a + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === n ? S(e) : e))
                        .map(D);
                },
                S = (e) => 1 === new Date(e, 1, 29).getMonth(),
                $ = (e, t) => {
                    if (!e) return k;
                    switch (2 === e && (!t || (t && S(t))) ? y[e].numDaysLeapYear : y[e].numDays) {
                        case 28:
                            return w;
                        case 29:
                            return E;
                        case 30:
                            return v;
                        default:
                            return k;
                    }
                },
                x = (e, t, n) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof n) {
                        return `${n}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const Z = {
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
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                a = n(325686),
                o = n(235902),
                l = n(885015),
                i = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = o.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(l.Z, { style: !t && d.root, withGutter: !0 }, r.createElement(a.Z, { style: d.gapColumn }, r.createElement(a.Z, { style: [d.gap, c] })), r.createElement(a.Z, { style: d.gapText }, n), r.createElement(a.Z, { style: d.gapColumn }, r.createElement(a.Z, { style: [d.gap, c] }))) : r.createElement(a.Z, { style: [!t && d.root, s() && d.rootRedesign, d.gap, c] });
            }
            const d = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(807896),
                a = n(202784),
                o = n(325686),
                l = n(392237);
            class i extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...l } = this.props,
                        i = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return a.createElement(o.Z, (0, r.Z)({ style: [t, s.root, n && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = i;
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => o, n: () => a });
            var r = n(392237);
            const a = "longform-styles",
                o = `\n    .longform-header-one {\n        font-size: ${r.default.theme.fontSizes.title2};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${r.default.theme.fontSizes.title3};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title2};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: ${r.default.theme.spaces.space12};\n        margin-left: calc(${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${r.default.theme.spaces.space12} / 2);\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${r.default.theme.spaces.space24} + ${r.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => w });
            n(136728);
            var r = n(202784),
                a = n(301503),
                o = n(325686),
                l = n(595088),
                i = n(516951),
                s = n(731708),
                d = n(779802),
                c = n(537392),
                u = n(989272),
                h = n(925873),
                m = n(202253),
                f = n(786475),
                p = n(392237),
                b = n(135904);
            const g = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                y = (0, l.Z)(g).reduce((e, [t, n]) => e.set(t, n), a.DefaultDraftBlockRenderMap);
            let D = !1;
            const w = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: l, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        D || (u.fH(b.c, b.n), (D = !0));
                    }, []);
                    const p = [(0, m.ez)(l, s), m.aF, m.RU];
                    e.disable_entityLinkDecorator || p.push((0, m.NA)(l, s));
                    const g = h.Z.initEditorState(n, { decorators: p });
                    let w = i.Z;
                    return (
                        t &&
                            (w = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(c.ZP, null, ({ containerWidth: e }) => r.createElement(o.Z, { style: E.fontFamily }, r.createElement(a.Editor, { blockRenderMap: y, blockRendererFn: w, blockStyleFn: (0, d.su)(f.Z.isNarrowScreenWidth(e)), editorState: g, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                E = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => C, Ak: () => Z, KJ: () => w, LI: () => _, P7: () => b, PW: () => k, QF: () => g, Qm: () => D, Tr: () => S, b$: () => p, db: () => P, et: () => v, fR: () => f, iH: () => $, lD: () => y, su: () => E, u4: () => I, wX: () => x });
            var r = n(202784),
                a = n(111677),
                o = n.n(a),
                l = n(394123),
                i = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                u = n(89085),
                h = n(630715),
                m = n(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: l.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                b = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                g = (e) => [{ buttonTestId: "btn-blockquote", Icon: d.default, key: b.blockquote, onPress: e(b.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: b.bulleted, onPress: e(b.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: b.numbered, onPress: e(b.numbered) },
                ],
                D = "LINK",
                w = (e) => [{ buttonTestId: "btn-link", Icon: h.default, key: D, onPress: e }],
                E = (e, t) => (n) => {
                    const r = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case b.bulleted:
                            return r("longform-unordered-list-item");
                        case b.blockquote:
                            return r("longform-blockquote");
                        case b.header1:
                            return r("longform-header-one");
                        case b.header2:
                            return r("longform-header-two");
                        case b.numbered:
                            return r("longform-ordered-list-item");
                        case b.paragraph:
                            return r("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                v = o().d5a48014,
                k = o().b92b6156,
                C = o().ec5ed598,
                _ = ({ children: e, extendedWidth: t, size: n, weight: a }) => r.createElement(m.ZP, { extendedWidth: t, size: n, weight: a }, e),
                S = { blockType: b.paragraph, label: C, component: _({ size: "body", children: C }) },
                $ = [{ blockType: b.header1, label: v, component: _({ size: "title1", extendedWidth: !0, children: v }) }, { blockType: b.header2, label: k, component: _({ size: "title3", weight: "heavy", children: k }) }, S],
                x = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                Z = ["delete", "delete-word", "delete-to-start-of-line"],
                I = "increase-text-size",
                P = "decrease-text-size";
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                a = n(325686),
                o = n(191796),
                l = n(58399),
                i = n(731708),
                s = n(952428),
                d = n(392237);
            const c = (e) => {
                    const { decoration: t, description: n, disabled: c = !1, isActive: h = !1, label: m, link: f, onPress: p, paddingHorizontal: b, renderRightContent: g, role: y = "tab", styleOverride: D, testID: w = "pivot", thumbnail: E, thumbnailSize: v, withoutArrow: k = !1 } = e,
                        C = [u.thumbnailContainer, "medium" === v && u.thumbnailContainerMedium],
                        _ = "string" == typeof m ? r.createElement(i.ZP, null, m) : m,
                        S = "object" == typeof f && f.external && !f.openInSameFrame,
                        $ = n ? ("string" == typeof n ? r.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, n) : n) : null,
                        x = r.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? d.default.theme.spaces[b] : d.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === y ? h : null, disabled: c, link: c ? void 0 : f, onPress: p, role: y, style: [u.root, x, c && u.disabled, D], testID: w, withInteractiveStyling: !!f || !!p }, r.createElement(a.Z, { style: u.contentContainer }, E ? r.createElement(a.Z, { style: C }, E) : null, r.createElement(a.Z, { style: u.content }, _, $), g ? g() : null, (!f && !p) || c || k ? null : S ? r.createElement(o.default, { style: u.icon }) : r.createElement(l.default, { style: u.icon })), t);
                },
                u = d.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${d.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => a, fH: () => l, w3: () => o });
            n(136728);
            var r = n(392237);
            const a = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function o(e) {
                l(
                    (function () {
                        const e = r.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${a.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${a.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${a.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = s(e);
                return (
                    l(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const a = e.contentHorizontalPadding;
                            n || (n = r.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${a ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${a};\n          padding-right: ${a};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function l(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const r = document.head;
                    r && r.insertBefore(n, r.firstChild);
                }
            }
            const i = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < d.length; t++) {
                        if (d[t] === e) return String(t);
                    }
                    return d.push(e), String(d.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const d = [];
        },
        466818: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                a = n(325686),
                o = n(487552),
                l = n(302752),
                i = n(183806),
                s = n(731708),
                d = n(950822),
                c = n(224162),
                u = n(392237);
            const h = r.forwardRef((e, t) => (0, d.Z)("select", { ...e, ref: t })),
                m = (e) => (0, d.Z)("option", e);
            let f = 1;
            class p extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: n } = this.props,
                                { selectedIndex: r, value: a } = e.target;
                            t && t(a, r - (n ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: t } = this.props;
                            this.setState({ isFocused: !1 }), t && t();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: t } = this.props;
                            this.setState({ isFocused: !0 }), t && t();
                        }),
                        (this._id = `SELECTOR_${f}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (f += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: d, helperText: f, options: p, style: g, testID: y, value: D, withEmptyOption: w } = this.props,
                        { isFocused: E } = this.state,
                        v = s.ZP.getLanguage(),
                        k = void 0 === d ? !!n : d,
                        C = new Set();
                    n && C.add(this._errorID), e && C.add(e), f && C.add(this._helperID);
                    const _ = C.size ? [...C].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const s = "ja" === v ? u.default.theme.fontFamilies.japan : "rtl" === e || l.Z.isLocaleRTL(v) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return r.createElement(
                                a.Z,
                                { style: [i.Z.border, b.container, t && i.Z.disabled, E && i.Z.focusedBorderValid, k && i.Z.invalidBorderColor, E && k && i.Z.focusedBorderInvalid, g] },
                                this._renderLabel(),
                                r.createElement(
                                    h,
                                    { "aria-describedby": _, "aria-invalid": k, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: s }, t && i.Z.disabled], testID: y || "", value: D },
                                    w ? r.createElement(m, { disabled: !0, style: b.option, value: "" }) : null,
                                    p.map((e) => {
                                        const { disabled: t, label: n, value: a } = e;
                                        return r.createElement(m, { disabled: t, key: `${n}-${a}`, style: b.option, value: a }, n);
                                    }),
                                ),
                                r.createElement(o.default, { style: [b.dropdownCaret, E && i.Z.validColor, !(!d && !n) && i.Z.invalidColor] }),
                            );
                        }),
                        f ? this._renderHelperText() : null,
                        k && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: a } = this.state;
                    return r.createElement(s.ZP, { color: t || e ? "red500" : a ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, n);
                }
                _renderHelperText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(s.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(s.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            p.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                g = p;
        },
        58399: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(717683),
                i = n(347101);
            const s = (e = {}) => {
                const t = r.useContext(l.Z),
                    { direction: n } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        125568: (e, t, n) => {
            n.d(t, { t: () => a });
            var r = n(202784);
            function a() {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-bc6ccf4c.5252985a.js.map
