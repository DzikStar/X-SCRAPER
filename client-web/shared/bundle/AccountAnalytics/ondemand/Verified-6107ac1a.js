"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Verified-6107ac1a"],
    {
        466818: (e, t, n) => {
            n.d(t, { ZP: () => w });
            var r = n(202784),
                a = n(325686),
                o = n(487552),
                i = n(302752),
                s = n(183806),
                c = n(731708),
                u = n(950822),
                d = n(224162),
                l = n(392237);
            const h = r.forwardRef((e, t) => (0, u.Z)("select", { ...e, ref: t })),
                g = (e) => (0, u.Z)("option", e);
            let f = 1;
            class m extends r.PureComponent {
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
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: u, helperText: f, options: m, style: w, testID: b, value: x, withEmptyOption: y } = this.props,
                        { isFocused: E } = this.state,
                        T = c.ZP.getLanguage(),
                        M = void 0 === u ? !!n : u,
                        v = new Set();
                    n && v.add(this._errorID), e && v.add(e), f && v.add(this._helperID);
                    const P = v.size ? [...v].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const c = "ja" === T ? l.default.theme.fontFamilies.japan : "rtl" === e || i.Z.isLocaleRTL(T) ? l.default.theme.fontFamilies.rtl : l.default.theme.fontFamilies.normal;
                            return r.createElement(
                                a.Z,
                                { style: [s.Z.border, p.container, t && s.Z.disabled, E && s.Z.focusedBorderValid, M && s.Z.invalidBorderColor, E && M && s.Z.focusedBorderInvalid, w] },
                                this._renderLabel(),
                                r.createElement(
                                    h,
                                    { "aria-describedby": P, "aria-invalid": M, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [p.select, { fontFamily: c }, t && s.Z.disabled], testID: b || "", value: x },
                                    y ? r.createElement(g, { disabled: !0, style: p.option, value: "" }) : null,
                                    m.map((e) => {
                                        const { disabled: t, label: n, value: a } = e;
                                        return r.createElement(g, { disabled: t, key: `${n}-${a}`, style: p.option, value: a }, n);
                                    }),
                                ),
                                r.createElement(o.default, { style: [p.dropdownCaret, E && s.Z.validColor, !(!u && !n) && s.Z.invalidColor] }),
                            );
                        }),
                        f ? this._renderHelperText() : null,
                        M && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: a } = this.state;
                    return r.createElement(c.ZP, { color: t || e ? "red500" : a ? "primary" : "gray700", id: this._labelID, role: "label", style: p.label }, n);
                }
                _renderHelperText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(c.ZP, { color: "gray700", id: this._helperID, style: p.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(c.ZP, { color: "red500", id: this._errorID, style: p.helperText }, this.props.errorText));
                }
            }
            m.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const p = l.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                w = m;
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => m });
            var r = n(202784),
                a = n(325686),
                o = n(827515),
                i = n(461756),
                s = n(731708),
                c = n(392237);
            const u = "up",
                d = "down",
                l = (e, t, n) => {
                    n((n) => {
                        const r = (0, o.Z)(e) ? (e > (n.count || 0) ? u : d) : u;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                h = {};
            [u, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === u ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === u ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const g = { position: "absolute" },
                f = c.default.create({ root: { overflow: "hidden" } }),
                m = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [m, p] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: u }),
                        w = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (w.current = !0),
                                function () {
                                    w.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (w.current)
                                if (i.Z.reducedMotionEnabled) p((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== m.pendingText) {
                                    t === m.text || ((0, o.Z)(e.count) && m.count === e.count) ? p((e) => ({ ...e, pendingCount: null, pendingText: null })) : (p((n) => ({ ...n, pendingCount: e.count, pendingText: t })), m.animating || l(e.count, t, p));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            w.current &&
                                !1 === m.animating &&
                                (m.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              w.current && p((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : m.pendingText && l(m.pendingCount, m.pendingText, p));
                        }, [m.animating, m.oldText]),
                        r.useMemo(() => {
                            const e = h[m.transitionDirection],
                                t = m.oldText && !i.Z.reducedMotionEnabled,
                                o = !m.animating && m.oldText && !i.Z.reducedMotionEnabled,
                                c = { ...g, ...(m.animating ? e.post : e.active) },
                                u = { ...(o ? e.pre : e.active) };
                            return r.createElement(
                                a.Z,
                                { style: [f.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(s.ZP, d, m.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(w.current, p),
                                        style: u,
                                    },
                                    r.createElement(s.ZP, d, m.text),
                                ),
                            );
                        }, [n, d, m, w, p])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                a = n(325686),
                o = n(731708),
                i = n(891198),
                s = n(280278),
                c = n(392237);
            const u = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: a } = this.props;
                    return r.createElement(o.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: a }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (l.Group = (e) =>
                r.createElement(
                    a.Z,
                    { style: [h.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(a.Z, { key: t, style: t < n.length - 1 && h.groupItemNonLast }, e)),
                )),
                (l.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(o.ZP, { children: e, color: n ? "white" : "gray700", size: u, style: t }))),
                (l.Value = ({ animated: e, children: t, count: n, style: a, weight: i = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: c }) => (e ? r.createElement(s.ZP, { children: t, count: n, size: u, style: a, weight: i }) : r.createElement(o.ZP, { children: t, color: c ? "white" : "text", size: u, style: a, weight: i }))));
            const h = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = l;
        },
        803066: (e, t, n) => {
            n.d(t, { j: () => a });
            let r = {};
            function a() {
                return r;
            }
        },
        674921: (e, t, n) => {
            n.d(t, { $: () => p });
            var r = n(898513),
                a = n(525668),
                o = n(499449),
                i = n(480415),
                s = n(793361);
            function c(e, t) {
                return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
            }
            const u = {
                    y(e, t) {
                        const n = e.getFullYear(),
                            r = n > 0 ? n : 1 - n;
                        return c("yy" === t ? r % 100 : r, t.length);
                    },
                    M(e, t) {
                        const n = e.getMonth();
                        return "M" === t ? String(n + 1) : c(n + 1, 2);
                    },
                    d: (e, t) => c(e.getDate(), t.length),
                    a(e, t) {
                        const n = e.getHours() / 12 >= 1 ? "pm" : "am";
                        switch (t) {
                            case "a":
                            case "aa":
                                return n.toUpperCase();
                            case "aaa":
                                return n;
                            case "aaaaa":
                                return n[0];
                            default:
                                return "am" === n ? "a.m." : "p.m.";
                        }
                    },
                    h: (e, t) => c(e.getHours() % 12 || 12, t.length),
                    H: (e, t) => c(e.getHours(), t.length),
                    m: (e, t) => c(e.getMinutes(), t.length),
                    s: (e, t) => c(e.getSeconds(), t.length),
                    S(e, t) {
                        const n = t.length,
                            r = e.getMilliseconds();
                        return c(Math.trunc(r * Math.pow(10, n - 3)), t.length);
                    },
                },
                d = "midnight",
                l = "noon",
                h = "morning",
                g = "afternoon",
                f = "evening",
                m = "night",
                p = {
                    G: function (e, t, n) {
                        const r = e.getFullYear() > 0 ? 1 : 0;
                        switch (t) {
                            case "G":
                            case "GG":
                            case "GGG":
                                return n.era(r, { width: "abbreviated" });
                            case "GGGGG":
                                return n.era(r, { width: "narrow" });
                            default:
                                return n.era(r, { width: "wide" });
                        }
                    },
                    y: function (e, t, n) {
                        if ("yo" === t) {
                            const t = e.getFullYear(),
                                r = t > 0 ? t : 1 - t;
                            return n.ordinalNumber(r, { unit: "year" });
                        }
                        return u.y(e, t);
                    },
                    Y: function (e, t, n, r) {
                        const a = (0, s.c)(e, r),
                            o = a > 0 ? a : 1 - a;
                        if ("YY" === t) {
                            return c(o % 100, 2);
                        }
                        return "Yo" === t ? n.ordinalNumber(o, { unit: "year" }) : c(o, t.length);
                    },
                    R: function (e, t) {
                        return c((0, o.L)(e), t.length);
                    },
                    u: function (e, t) {
                        return c(e.getFullYear(), t.length);
                    },
                    Q: function (e, t, n) {
                        const r = Math.ceil((e.getMonth() + 1) / 3);
                        switch (t) {
                            case "Q":
                                return String(r);
                            case "QQ":
                                return c(r, 2);
                            case "Qo":
                                return n.ordinalNumber(r, { unit: "quarter" });
                            case "QQQ":
                                return n.quarter(r, { width: "abbreviated", context: "formatting" });
                            case "QQQQQ":
                                return n.quarter(r, { width: "narrow", context: "formatting" });
                            default:
                                return n.quarter(r, { width: "wide", context: "formatting" });
                        }
                    },
                    q: function (e, t, n) {
                        const r = Math.ceil((e.getMonth() + 1) / 3);
                        switch (t) {
                            case "q":
                                return String(r);
                            case "qq":
                                return c(r, 2);
                            case "qo":
                                return n.ordinalNumber(r, { unit: "quarter" });
                            case "qqq":
                                return n.quarter(r, { width: "abbreviated", context: "standalone" });
                            case "qqqqq":
                                return n.quarter(r, { width: "narrow", context: "standalone" });
                            default:
                                return n.quarter(r, { width: "wide", context: "standalone" });
                        }
                    },
                    M: function (e, t, n) {
                        const r = e.getMonth();
                        switch (t) {
                            case "M":
                            case "MM":
                                return u.M(e, t);
                            case "Mo":
                                return n.ordinalNumber(r + 1, { unit: "month" });
                            case "MMM":
                                return n.month(r, { width: "abbreviated", context: "formatting" });
                            case "MMMMM":
                                return n.month(r, { width: "narrow", context: "formatting" });
                            default:
                                return n.month(r, { width: "wide", context: "formatting" });
                        }
                    },
                    L: function (e, t, n) {
                        const r = e.getMonth();
                        switch (t) {
                            case "L":
                                return String(r + 1);
                            case "LL":
                                return c(r + 1, 2);
                            case "Lo":
                                return n.ordinalNumber(r + 1, { unit: "month" });
                            case "LLL":
                                return n.month(r, { width: "abbreviated", context: "standalone" });
                            case "LLLLL":
                                return n.month(r, { width: "narrow", context: "standalone" });
                            default:
                                return n.month(r, { width: "wide", context: "standalone" });
                        }
                    },
                    w: function (e, t, n, r) {
                        const a = (0, i.Q)(e, r);
                        return "wo" === t ? n.ordinalNumber(a, { unit: "week" }) : c(a, t.length);
                    },
                    I: function (e, t, n) {
                        const r = (0, a.l)(e);
                        return "Io" === t ? n.ordinalNumber(r, { unit: "week" }) : c(r, t.length);
                    },
                    d: function (e, t, n) {
                        return "do" === t ? n.ordinalNumber(e.getDate(), { unit: "date" }) : u.d(e, t);
                    },
                    D: function (e, t, n) {
                        const a = (0, r.B)(e);
                        return "Do" === t ? n.ordinalNumber(a, { unit: "dayOfYear" }) : c(a, t.length);
                    },
                    E: function (e, t, n) {
                        const r = e.getDay();
                        switch (t) {
                            case "E":
                            case "EE":
                            case "EEE":
                                return n.day(r, { width: "abbreviated", context: "formatting" });
                            case "EEEEE":
                                return n.day(r, { width: "narrow", context: "formatting" });
                            case "EEEEEE":
                                return n.day(r, { width: "short", context: "formatting" });
                            default:
                                return n.day(r, { width: "wide", context: "formatting" });
                        }
                    },
                    e: function (e, t, n, r) {
                        const a = e.getDay(),
                            o = (a - r.weekStartsOn + 8) % 7 || 7;
                        switch (t) {
                            case "e":
                                return String(o);
                            case "ee":
                                return c(o, 2);
                            case "eo":
                                return n.ordinalNumber(o, { unit: "day" });
                            case "eee":
                                return n.day(a, { width: "abbreviated", context: "formatting" });
                            case "eeeee":
                                return n.day(a, { width: "narrow", context: "formatting" });
                            case "eeeeee":
                                return n.day(a, { width: "short", context: "formatting" });
                            default:
                                return n.day(a, { width: "wide", context: "formatting" });
                        }
                    },
                    c: function (e, t, n, r) {
                        const a = e.getDay(),
                            o = (a - r.weekStartsOn + 8) % 7 || 7;
                        switch (t) {
                            case "c":
                                return String(o);
                            case "cc":
                                return c(o, t.length);
                            case "co":
                                return n.ordinalNumber(o, { unit: "day" });
                            case "ccc":
                                return n.day(a, { width: "abbreviated", context: "standalone" });
                            case "ccccc":
                                return n.day(a, { width: "narrow", context: "standalone" });
                            case "cccccc":
                                return n.day(a, { width: "short", context: "standalone" });
                            default:
                                return n.day(a, { width: "wide", context: "standalone" });
                        }
                    },
                    i: function (e, t, n) {
                        const r = e.getDay(),
                            a = 0 === r ? 7 : r;
                        switch (t) {
                            case "i":
                                return String(a);
                            case "ii":
                                return c(a, t.length);
                            case "io":
                                return n.ordinalNumber(a, { unit: "day" });
                            case "iii":
                                return n.day(r, { width: "abbreviated", context: "formatting" });
                            case "iiiii":
                                return n.day(r, { width: "narrow", context: "formatting" });
                            case "iiiiii":
                                return n.day(r, { width: "short", context: "formatting" });
                            default:
                                return n.day(r, { width: "wide", context: "formatting" });
                        }
                    },
                    a: function (e, t, n) {
                        const r = e.getHours() / 12 >= 1 ? "pm" : "am";
                        switch (t) {
                            case "a":
                            case "aa":
                                return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
                            case "aaa":
                                return n.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
                            case "aaaaa":
                                return n.dayPeriod(r, { width: "narrow", context: "formatting" });
                            default:
                                return n.dayPeriod(r, { width: "wide", context: "formatting" });
                        }
                    },
                    b: function (e, t, n) {
                        const r = e.getHours();
                        let a;
                        switch (((a = 12 === r ? l : 0 === r ? d : r / 12 >= 1 ? "pm" : "am"), t)) {
                            case "b":
                            case "bb":
                                return n.dayPeriod(a, { width: "abbreviated", context: "formatting" });
                            case "bbb":
                                return n.dayPeriod(a, { width: "abbreviated", context: "formatting" }).toLowerCase();
                            case "bbbbb":
                                return n.dayPeriod(a, { width: "narrow", context: "formatting" });
                            default:
                                return n.dayPeriod(a, { width: "wide", context: "formatting" });
                        }
                    },
                    B: function (e, t, n) {
                        const r = e.getHours();
                        let a;
                        switch (((a = r >= 17 ? f : r >= 12 ? g : r >= 4 ? h : m), t)) {
                            case "B":
                            case "BB":
                            case "BBB":
                                return n.dayPeriod(a, { width: "abbreviated", context: "formatting" });
                            case "BBBBB":
                                return n.dayPeriod(a, { width: "narrow", context: "formatting" });
                            default:
                                return n.dayPeriod(a, { width: "wide", context: "formatting" });
                        }
                    },
                    h: function (e, t, n) {
                        if ("ho" === t) {
                            let t = e.getHours() % 12;
                            return 0 === t && (t = 12), n.ordinalNumber(t, { unit: "hour" });
                        }
                        return u.h(e, t);
                    },
                    H: function (e, t, n) {
                        return "Ho" === t ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : u.H(e, t);
                    },
                    K: function (e, t, n) {
                        const r = e.getHours() % 12;
                        return "Ko" === t ? n.ordinalNumber(r, { unit: "hour" }) : c(r, t.length);
                    },
                    k: function (e, t, n) {
                        let r = e.getHours();
                        return 0 === r && (r = 24), "ko" === t ? n.ordinalNumber(r, { unit: "hour" }) : c(r, t.length);
                    },
                    m: function (e, t, n) {
                        return "mo" === t ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : u.m(e, t);
                    },
                    s: function (e, t, n) {
                        return "so" === t ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : u.s(e, t);
                    },
                    S: function (e, t) {
                        return u.S(e, t);
                    },
                    X: function (e, t, n) {
                        const r = e.getTimezoneOffset();
                        if (0 === r) return "Z";
                        switch (t) {
                            case "X":
                                return b(r);
                            case "XXXX":
                            case "XX":
                                return x(r);
                            default:
                                return x(r, ":");
                        }
                    },
                    x: function (e, t, n) {
                        const r = e.getTimezoneOffset();
                        switch (t) {
                            case "x":
                                return b(r);
                            case "xxxx":
                            case "xx":
                                return x(r);
                            default:
                                return x(r, ":");
                        }
                    },
                    O: function (e, t, n) {
                        const r = e.getTimezoneOffset();
                        switch (t) {
                            case "O":
                            case "OO":
                            case "OOO":
                                return "GMT" + w(r, ":");
                            default:
                                return "GMT" + x(r, ":");
                        }
                    },
                    z: function (e, t, n) {
                        const r = e.getTimezoneOffset();
                        switch (t) {
                            case "z":
                            case "zz":
                            case "zzz":
                                return "GMT" + w(r, ":");
                            default:
                                return "GMT" + x(r, ":");
                        }
                    },
                    t: function (e, t, n) {
                        return c(Math.trunc(e.getTime() / 1e3), t.length);
                    },
                    T: function (e, t, n) {
                        return c(e.getTime(), t.length);
                    },
                };
            function w(e, t = "") {
                const n = e > 0 ? "-" : "+",
                    r = Math.abs(e),
                    a = Math.trunc(r / 60),
                    o = r % 60;
                return 0 === o ? n + String(a) : n + String(a) + t + c(o, 2);
            }
            function b(e, t) {
                if (e % 60 == 0) {
                    return (e > 0 ? "-" : "+") + c(Math.abs(e) / 60, 2);
                }
                return x(e, t);
            }
            function x(e, t = "") {
                const n = e > 0 ? "-" : "+",
                    r = Math.abs(e);
                return n + c(Math.trunc(r / 60), 2) + t + c(r % 60, 2);
            }
        },
        16468: (e, t, n) => {
            n.d(t, { G: () => o });
            const r = (e, t) => {
                    switch (e) {
                        case "P":
                            return t.date({ width: "short" });
                        case "PP":
                            return t.date({ width: "medium" });
                        case "PPP":
                            return t.date({ width: "long" });
                        default:
                            return t.date({ width: "full" });
                    }
                },
                a = (e, t) => {
                    switch (e) {
                        case "p":
                            return t.time({ width: "short" });
                        case "pp":
                            return t.time({ width: "medium" });
                        case "ppp":
                            return t.time({ width: "long" });
                        default:
                            return t.time({ width: "full" });
                    }
                },
                o = {
                    p: a,
                    P: (e, t) => {
                        const n = e.match(/(P+)(p+)?/) || [],
                            o = n[1],
                            i = n[2];
                        if (!i) return r(e, t);
                        let s;
                        switch (o) {
                            case "P":
                                s = t.dateTime({ width: "short" });
                                break;
                            case "PP":
                                s = t.dateTime({ width: "medium" });
                                break;
                            case "PPP":
                                s = t.dateTime({ width: "long" });
                                break;
                            default:
                                s = t.dateTime({ width: "full" });
                        }
                        return s.replace("{{date}}", r(o, t)).replace("{{time}}", a(i, t));
                    },
                };
        },
        537796: (e, t, n) => {
            n.d(t, { D: () => a });
            var r = n(150729);
            function a(e) {
                const t = (0, r.Q)(e),
                    n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                return n.setUTCFullYear(t.getFullYear()), +e - +n;
            }
        },
        398308: (e, t, n) => {
            n.d(t, { DD: () => c, Do: () => s, Iu: () => i });
            const r = /^D+$/,
                a = /^Y+$/,
                o = ["D", "DD", "YY", "YYYY"];
            function i(e) {
                return r.test(e);
            }
            function s(e) {
                return a.test(e);
            }
            function c(e, t, n) {
                const r = (function (e, t, n) {
                    const r = "Y" === e[0] ? "years" : "days of the month";
                    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                })(e, t, n);
                if (o.includes(e)) throw new RangeError(r);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Verified-6107ac1a.3835b30a.js.map
