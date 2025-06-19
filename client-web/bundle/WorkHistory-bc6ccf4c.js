"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-bc6ccf4c", "icons/IconBoldCompact-js", "icons/IconQuoteStroke-js", "icons/IconStrikethrough-js"],
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
                c = o().aa744c1e,
                d = o().fe04d89a,
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
                    return r.createElement(r.Fragment, null, t, m ? r.createElement(l.Z, { cancelButtonLabel: c, confirmButtonLabel: d, confirmButtonType: "destructiveFilled", headline: i, onCancel: b, onConfirm: g, text: s }) : null);
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
                c = n(731708),
                d = n(154003),
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
                    return r.createElement(a.Z, null, n ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: n, errors: o = {}, label: l, autofocus: i, monthSelectorTestID: s, daySelectorTestID: c, yearSelectorTestID: m, style: p, minSelectableYear: D, maxSelectableYear: w, withCalendar: k, hideDay: C, disabled: S } = this.props,
                        _ = h.DD(t, n),
                        $ = h.Zj(D, w, e, t);
                    return r.createElement(a.Z, { "aria-label": l, role: "group", style: [E.selectorsContainer, p] }, r.createElement(f.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: i, disabled: S, hasError: o.month, label: g, onChange: this._handleMonthChange, options: this._monthOptions, style: E.monthSelector, testID: s, value: t ? `${t}` : "", withEmptyOption: !0 }), C ? null : r.createElement(f.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: S, hasError: o.day, label: b, onChange: this._handleDayChange, options: _, style: E.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(f.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: S, hasError: o.year, label: y, onChange: this._handleYearChange, options: $, style: E.yearSelector, testID: m, value: n ? `${n}` : "", withEmptyOption: !0 }), k && r.createElement(a.Z, { role: "label", style: E.calendarLabel }, r.createElement(d.ZP, { "aria-label": "Calendar", icon: v, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, u.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: l, onChange: this._handleDateChange, style: E.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: h.ww(e, t, n) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return r.createElement(m.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: E.dateInputRoot, type: "date" });
                }
            }
            const v = r.createElement(i.default, null),
                E = p.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...p.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, n) => {
            n.d(t, { DD: () => $, ZP: () => x, Zj: () => S, dX: () => C, ww: () => Z });
            var r = n(111677),
                a = n.n(r),
                o = n(822240);
            const l = 1,
                i = 2,
                s = 3,
                c = 4,
                d = 5,
                u = 6,
                h = 7,
                m = 8,
                f = 9,
                p = 10,
                b = 11,
                g = 12,
                y = { [l]: { label: a().hac89ab0, numDays: 31 }, [i]: { label: a().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [s]: { label: a().b56920fa, numDays: 31 }, [c]: { label: a().b1a0f1ec, numDays: 30 }, [d]: { label: a().daf779c8, numDays: 31 }, [u]: { label: a().c6ad074e, numDays: 30 }, [h]: { label: a().f1db106c, numDays: 31 }, [m]: { label: a().i4e80b7a, numDays: 31 }, [f]: { label: a().efa6cc1e, numDays: 30 }, [p]: { label: a().f40a0cbe, numDays: 31 }, [b]: { label: a().ac74a31c, numDays: 30 }, [g]: { label: a().i6c1e4b2, numDays: 31 } },
                D = (e) => ({ label: `${e}`, value: `${e}` }),
                w = (0, o.Z)(1, 29).map(D),
                v = (0, o.Z)(1, 30).map(D),
                E = (0, o.Z)(1, 31).map(D),
                k = (0, o.Z)(1, 32).map(D),
                C = () => Object.keys(y).map((e) => ({ label: y[e].label, value: e })),
                S = (e = 1, t, n, r) => {
                    const a = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, a + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === n ? _(e) : e))
                        .map(D);
                },
                _ = (e) => 1 === new Date(e, 1, 29).getMonth(),
                $ = (e, t) => {
                    if (!e) return k;
                    switch (2 === e && (!t || (t && _(t))) ? y[e].numDaysLeapYear : y[e].numDays) {
                        case 28:
                            return w;
                        case 29:
                            return v;
                        case 30:
                            return E;
                        default:
                            return k;
                    }
                },
                Z = (e, t, n) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof n) {
                        return `${n}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const x = {
                getFormattedDateValue: Z,
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
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? r.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] })), r.createElement(a.Z, { style: c.gapText }, n), r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] }))) : r.createElement(a.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
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
                c = i;
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
                c = n(779802),
                d = n(537392),
                u = n(989272),
                h = n(925873),
                m = n(202253),
                f = n(786475),
                p = n(392237),
                b = n(135904);
            const g = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
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
                        r.createElement(d.ZP, null, ({ containerWidth: e }) => r.createElement(o.Z, { style: v.fontFamily }, r.createElement(a.Editor, { blockRenderMap: y, blockRendererFn: w, blockStyleFn: (0, c.su)(f.Z.isNarrowScreenWidth(e)), editorState: g, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                v = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => C, Ak: () => x, KJ: () => w, LI: () => S, P7: () => b, PW: () => k, QF: () => g, Qm: () => D, Tr: () => _, b$: () => p, db: () => I, et: () => E, fR: () => f, iH: () => $, lD: () => y, su: () => v, u4: () => z, wX: () => Z });
            var r = n(202784),
                a = n(111677),
                o = n.n(a),
                l = n(394123),
                i = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
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
                g = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: b.blockquote, onPress: e(b.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: b.bulleted, onPress: e(b.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: b.numbered, onPress: e(b.numbered) },
                ],
                D = "LINK",
                w = (e) => [{ buttonTestId: "btn-link", Icon: h.default, key: D, onPress: e }],
                v = (e, t) => (n) => {
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
                E = o().d5a48014,
                k = o().b92b6156,
                C = o().ec5ed598,
                S = ({ children: e, extendedWidth: t, size: n, weight: a }) => r.createElement(m.ZP, { extendedWidth: t, size: n, weight: a }, e),
                _ = { blockType: b.paragraph, label: C, component: S({ size: "body", children: C }) },
                $ = [{ blockType: b.header1, label: E, component: S({ size: "title1", extendedWidth: !0, children: E }) }, { blockType: b.header2, label: k, component: S({ size: "title3", weight: "heavy", children: k }) }, _],
                Z = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                x = ["delete", "delete-word", "delete-to-start-of-line"],
                z = "increase-text-size",
                I = "decrease-text-size";
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                a = n(325686),
                o = n(191796),
                l = n(58399),
                i = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: h = !1, label: m, link: f, onPress: p, paddingHorizontal: b, renderRightContent: g, role: y = "tab", styleOverride: D, testID: w = "pivot", thumbnail: v, thumbnailSize: E, withoutArrow: k = !1 } = e,
                        C = [u.thumbnailContainer, "medium" === E && u.thumbnailContainerMedium],
                        S = "string" == typeof m ? r.createElement(i.ZP, null, m) : m,
                        _ = "object" == typeof f && f.external && !f.openInSameFrame,
                        $ = n ? ("string" == typeof n ? r.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, n) : n) : null,
                        Z = r.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : f, onPress: p, role: y, style: [u.root, Z, d && u.disabled, D], testID: w, withInteractiveStyling: !!f || !!p }, r.createElement(a.Z, { style: u.contentContainer }, v ? r.createElement(a.Z, { style: C }, v) : null, r.createElement(a.Z, { style: u.content }, S, $), g ? g() : null, (!f && !p) || d || k ? null : _ ? r.createElement(o.default, { style: u.icon }) : r.createElement(l.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
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
                    for (let t = 0; t < c.length; t++) {
                        if (c[t] === e) return String(t);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const c = [];
        },
        466818: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                a = n(325686),
                o = n(487552),
                l = n(302752),
                i = n(183806),
                s = n(731708),
                c = n(950822),
                d = n(224162),
                u = n(392237);
            const h = r.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                m = (e) => (0, c.Z)("option", e);
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
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: c, helperText: f, options: p, style: g, testID: y, value: D, withEmptyOption: w } = this.props,
                        { isFocused: v } = this.state,
                        E = s.ZP.getLanguage(),
                        k = void 0 === c ? !!n : c,
                        C = new Set();
                    n && C.add(this._errorID), e && C.add(e), f && C.add(this._helperID);
                    const S = C.size ? [...C].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const s = "ja" === E ? u.default.theme.fontFamilies.japan : "rtl" === e || l.Z.isLocaleRTL(E) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return r.createElement(
                                a.Z,
                                { style: [i.Z.border, b.container, t && i.Z.disabled, v && i.Z.focusedBorderValid, k && i.Z.invalidBorderColor, v && k && i.Z.focusedBorderInvalid, g] },
                                this._renderLabel(),
                                r.createElement(
                                    h,
                                    { "aria-describedby": S, "aria-invalid": k, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: s }, t && i.Z.disabled], testID: y || "", value: D },
                                    w ? r.createElement(m, { disabled: !0, style: b.option, value: "" }) : null,
                                    p.map((e) => {
                                        const { disabled: t, label: n, value: a } = e;
                                        return r.createElement(m, { disabled: t, key: `${n}-${a}`, style: b.option, value: a }, n);
                                    }),
                                ),
                                r.createElement(o.default, { style: [b.dropdownCaret, v && i.Z.validColor, !(!c && !n) && i.Z.invalidColor] }),
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
        394123: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        76388: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        474761: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        69893: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-bc6ccf4c.37cc990a.js.map
