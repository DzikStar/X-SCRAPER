"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Verified-6107ac1a"],
    {
        466818: (t, e, n) => {
            n.d(e, { ZP: () => w });
            var r = n(202784),
                a = n(325686),
                o = n(487552),
                i = n(302752),
                s = n(183806),
                c = n(731708),
                u = n(950822),
                d = n(224162),
                l = n(392237);
            const h = r.forwardRef((t, e) => (0, u.Z)("select", { ...t, ref: e })),
                f = (t) => (0, u.Z)("option", t);
            let g = 1;
            class m extends r.PureComponent {
                constructor(t) {
                    super(t),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (t) => {
                            const { onChange: e, withEmptyOption: n } = this.props,
                                { selectedIndex: r, value: a } = t.target;
                            e && e(a, r - (n ? 1 : 0));
                        }),
                        (this._handleBlur = (t) => {
                            const { onBlur: e } = this.props;
                            this.setState({ isFocused: !1 }), e && e();
                        }),
                        (this._handleFocus = (t) => {
                            const { onFocus: e } = this.props;
                            this.setState({ isFocused: !0 }), e && e();
                        }),
                        (this._id = `SELECTOR_${g}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (g += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": t, disabled: e, errorText: n, hasError: u, helperText: g, options: m, style: w, testID: b, value: x, withEmptyOption: y } = this.props,
                        { isFocused: E } = this.state,
                        T = c.ZP.getLanguage(),
                        M = void 0 === u ? !!n : u,
                        v = new Set();
                    n && v.add(this._errorID), t && v.add(t), g && v.add(this._helperID);
                    const _ = v.size ? [...v].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: t }) => {
                            const c = "ja" === T ? l.default.theme.fontFamilies.japan : "rtl" === t || i.Z.isLocaleRTL(T) ? l.default.theme.fontFamilies.rtl : l.default.theme.fontFamilies.normal;
                            return r.createElement(
                                a.Z,
                                { style: [s.Z.border, p.container, e && s.Z.disabled, E && s.Z.focusedBorderValid, M && s.Z.invalidBorderColor, E && M && s.Z.focusedBorderInvalid, w] },
                                this._renderLabel(),
                                r.createElement(
                                    h,
                                    { "aria-describedby": _, "aria-invalid": M, "aria-labelledby": this._labelID, disabled: e, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [p.select, { fontFamily: c }, e && s.Z.disabled], testID: b || "", value: x },
                                    y ? r.createElement(f, { disabled: !0, style: p.option, value: "" }) : null,
                                    m.map((t) => {
                                        const { disabled: e, label: n, value: a } = t;
                                        return r.createElement(f, { disabled: e, key: `${n}-${a}`, style: p.option, value: a }, n);
                                    }),
                                ),
                                r.createElement(o.default, { style: [p.dropdownCaret, E && s.Z.validColor, !(!u && !n) && s.Z.invalidColor] }),
                            );
                        }),
                        g ? this._renderHelperText() : null,
                        M && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: t, hasError: e, label: n } = this.props,
                        { isFocused: a } = this.state;
                    return r.createElement(c.ZP, { color: e || t ? "red500" : a ? "primary" : "gray700", id: this._labelID, role: "label", style: p.label }, n);
                }
                _renderHelperText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(c.ZP, { color: "gray700", id: this._helperID, style: p.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(c.ZP, { color: "red500", id: this._errorID, style: p.helperText }, this.props.errorText));
                }
            }
            m.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const p = l.default.create((t) => ({ container: { backgroundColor: t.colors.cellBackground }, dropdownCaret: { color: t.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: t.spaces.space12 }, label: { position: "absolute", fontSize: t.fontSizes.subtext2, paddingHorizontal: t.spaces.space8, paddingTop: t.spaces.space8, pointerEvents: "none", lineHeight: t.lineHeights.subtext2 }, option: { backgroundColor: t.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: t.borderRadii.none, borderWidth: t.borderWidths.none, color: t.colors.text, cursor: "pointer", fontSize: t.fontSizes.headline2, lineHeight: t.lineHeights.headline2, margin: 0, marginTop: t.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: t.spaces.space12, paddingBottom: t.spaces.space8, paddingHorizontal: t.spaces.space8 }, helperText: { fontSize: t.fontSizes.subtext2, paddingHorizontal: t.spaces.space8, paddingTop: t.spaces.space2 } })),
                w = m;
        },
        280278: (t, e, n) => {
            n.d(e, { ZP: () => m });
            var r = n(202784),
                a = n(325686),
                o = n(827515),
                i = n(461756),
                s = n(731708),
                c = n(392237);
            const u = "up",
                d = "down",
                l = (t, e, n) => {
                    n((n) => {
                        const r = (0, o.Z)(t) ? (t > (n.count || 0) ? u : d) : u;
                        return { ...n, count: t, oldText: n.text, pendingCount: null, pendingText: null, text: e, transitionDirection: r };
                    });
                },
                h = {};
            [u, d].forEach((t) => {
                const e = "0.3s";
                h[t] = { active: { transitionProperty: "transform", transitionDuration: e, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${t === u ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${t === u ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: e } };
            });
            const f = { position: "absolute" },
                g = c.default.create({ root: { overflow: "hidden" } }),
                m = (t) => {
                    const { children: e, containerStyle: n, count: c, ...d } = t,
                        [m, p] = r.useState({ animating: !1, count: t.count, pendingCount: null, text: t.children, oldText: null, pendingText: null, transitionDirection: u }),
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
                                if (i.Z.reducedMotionEnabled) p((n) => ({ ...n, oldText: null, text: e, pendingText: null, pendingCount: null, count: t.count }));
                                else if (e !== m.pendingText) {
                                    e === m.text || ((0, o.Z)(t.count) && m.count === t.count) ? p((t) => ({ ...t, pendingCount: null, pendingText: null })) : (p((n) => ({ ...n, pendingCount: t.count, pendingText: e })), m.animating || l(t.count, e, p));
                                }
                        }, [e]),
                        r.useEffect(() => {
                            w.current &&
                                !1 === m.animating &&
                                (m.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              w.current && p((t) => ({ ...t, animating: !0 }));
                                          }),
                                      )
                                    : m.pendingText && l(m.pendingCount, m.pendingText, p));
                        }, [m.animating, m.oldText]),
                        r.useMemo(() => {
                            const t = h[m.transitionDirection],
                                e = m.oldText && !i.Z.reducedMotionEnabled,
                                o = !m.animating && m.oldText && !i.Z.reducedMotionEnabled,
                                c = { ...f, ...(m.animating ? t.post : t.active) },
                                u = { ...(o ? t.pre : t.active) };
                            return r.createElement(
                                a.Z,
                                { style: [g.root, n] },
                                e ? r.createElement("span", { style: c }, r.createElement(s.ZP, d, m.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((t, e) => {
                                                t && e((t) => ({ ...t, animating: !1, oldText: null }));
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
        803066: (t, e, n) => {
            n.d(e, { j: () => a });
            let r = {};
            function a() {
                return r;
            }
        },
        674921: (t, e, n) => {
            n.d(e, { $: () => p });
            var r = n(898513),
                a = n(525668),
                o = n(499449),
                i = n(480415),
                s = n(793361);
            function c(t, e) {
                return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0");
            }
            const u = {
                    y(t, e) {
                        const n = t.getFullYear(),
                            r = n > 0 ? n : 1 - n;
                        return c("yy" === e ? r % 100 : r, e.length);
                    },
                    M(t, e) {
                        const n = t.getMonth();
                        return "M" === e ? String(n + 1) : c(n + 1, 2);
                    },
                    d: (t, e) => c(t.getDate(), e.length),
                    a(t, e) {
                        const n = t.getHours() / 12 >= 1 ? "pm" : "am";
                        switch (e) {
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
                    h: (t, e) => c(t.getHours() % 12 || 12, e.length),
                    H: (t, e) => c(t.getHours(), e.length),
                    m: (t, e) => c(t.getMinutes(), e.length),
                    s: (t, e) => c(t.getSeconds(), e.length),
                    S(t, e) {
                        const n = e.length,
                            r = t.getMilliseconds();
                        return c(Math.trunc(r * Math.pow(10, n - 3)), e.length);
                    },
                },
                d = "midnight",
                l = "noon",
                h = "morning",
                f = "afternoon",
                g = "evening",
                m = "night",
                p = {
                    G: function (t, e, n) {
                        const r = t.getFullYear() > 0 ? 1 : 0;
                        switch (e) {
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
                    y: function (t, e, n) {
                        if ("yo" === e) {
                            const e = t.getFullYear(),
                                r = e > 0 ? e : 1 - e;
                            return n.ordinalNumber(r, { unit: "year" });
                        }
                        return u.y(t, e);
                    },
                    Y: function (t, e, n, r) {
                        const a = (0, s.c)(t, r),
                            o = a > 0 ? a : 1 - a;
                        if ("YY" === e) {
                            return c(o % 100, 2);
                        }
                        return "Yo" === e ? n.ordinalNumber(o, { unit: "year" }) : c(o, e.length);
                    },
                    R: function (t, e) {
                        return c((0, o.L)(t), e.length);
                    },
                    u: function (t, e) {
                        return c(t.getFullYear(), e.length);
                    },
                    Q: function (t, e, n) {
                        const r = Math.ceil((t.getMonth() + 1) / 3);
                        switch (e) {
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
                    q: function (t, e, n) {
                        const r = Math.ceil((t.getMonth() + 1) / 3);
                        switch (e) {
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
                    M: function (t, e, n) {
                        const r = t.getMonth();
                        switch (e) {
                            case "M":
                            case "MM":
                                return u.M(t, e);
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
                    L: function (t, e, n) {
                        const r = t.getMonth();
                        switch (e) {
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
                    w: function (t, e, n, r) {
                        const a = (0, i.Q)(t, r);
                        return "wo" === e ? n.ordinalNumber(a, { unit: "week" }) : c(a, e.length);
                    },
                    I: function (t, e, n) {
                        const r = (0, a.l)(t);
                        return "Io" === e ? n.ordinalNumber(r, { unit: "week" }) : c(r, e.length);
                    },
                    d: function (t, e, n) {
                        return "do" === e ? n.ordinalNumber(t.getDate(), { unit: "date" }) : u.d(t, e);
                    },
                    D: function (t, e, n) {
                        const a = (0, r.B)(t);
                        return "Do" === e ? n.ordinalNumber(a, { unit: "dayOfYear" }) : c(a, e.length);
                    },
                    E: function (t, e, n) {
                        const r = t.getDay();
                        switch (e) {
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
                    e: function (t, e, n, r) {
                        const a = t.getDay(),
                            o = (a - r.weekStartsOn + 8) % 7 || 7;
                        switch (e) {
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
                    c: function (t, e, n, r) {
                        const a = t.getDay(),
                            o = (a - r.weekStartsOn + 8) % 7 || 7;
                        switch (e) {
                            case "c":
                                return String(o);
                            case "cc":
                                return c(o, e.length);
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
                    i: function (t, e, n) {
                        const r = t.getDay(),
                            a = 0 === r ? 7 : r;
                        switch (e) {
                            case "i":
                                return String(a);
                            case "ii":
                                return c(a, e.length);
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
                    a: function (t, e, n) {
                        const r = t.getHours() / 12 >= 1 ? "pm" : "am";
                        switch (e) {
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
                    b: function (t, e, n) {
                        const r = t.getHours();
                        let a;
                        switch (((a = 12 === r ? l : 0 === r ? d : r / 12 >= 1 ? "pm" : "am"), e)) {
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
                    B: function (t, e, n) {
                        const r = t.getHours();
                        let a;
                        switch (((a = r >= 17 ? g : r >= 12 ? f : r >= 4 ? h : m), e)) {
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
                    h: function (t, e, n) {
                        if ("ho" === e) {
                            let e = t.getHours() % 12;
                            return 0 === e && (e = 12), n.ordinalNumber(e, { unit: "hour" });
                        }
                        return u.h(t, e);
                    },
                    H: function (t, e, n) {
                        return "Ho" === e ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : u.H(t, e);
                    },
                    K: function (t, e, n) {
                        const r = t.getHours() % 12;
                        return "Ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : c(r, e.length);
                    },
                    k: function (t, e, n) {
                        let r = t.getHours();
                        return 0 === r && (r = 24), "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : c(r, e.length);
                    },
                    m: function (t, e, n) {
                        return "mo" === e ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : u.m(t, e);
                    },
                    s: function (t, e, n) {
                        return "so" === e ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : u.s(t, e);
                    },
                    S: function (t, e) {
                        return u.S(t, e);
                    },
                    X: function (t, e, n) {
                        const r = t.getTimezoneOffset();
                        if (0 === r) return "Z";
                        switch (e) {
                            case "X":
                                return b(r);
                            case "XXXX":
                            case "XX":
                                return x(r);
                            default:
                                return x(r, ":");
                        }
                    },
                    x: function (t, e, n) {
                        const r = t.getTimezoneOffset();
                        switch (e) {
                            case "x":
                                return b(r);
                            case "xxxx":
                            case "xx":
                                return x(r);
                            default:
                                return x(r, ":");
                        }
                    },
                    O: function (t, e, n) {
                        const r = t.getTimezoneOffset();
                        switch (e) {
                            case "O":
                            case "OO":
                            case "OOO":
                                return "GMT" + w(r, ":");
                            default:
                                return "GMT" + x(r, ":");
                        }
                    },
                    z: function (t, e, n) {
                        const r = t.getTimezoneOffset();
                        switch (e) {
                            case "z":
                            case "zz":
                            case "zzz":
                                return "GMT" + w(r, ":");
                            default:
                                return "GMT" + x(r, ":");
                        }
                    },
                    t: function (t, e, n) {
                        return c(Math.trunc(t.getTime() / 1e3), e.length);
                    },
                    T: function (t, e, n) {
                        return c(t.getTime(), e.length);
                    },
                };
            function w(t, e = "") {
                const n = t > 0 ? "-" : "+",
                    r = Math.abs(t),
                    a = Math.trunc(r / 60),
                    o = r % 60;
                return 0 === o ? n + String(a) : n + String(a) + e + c(o, 2);
            }
            function b(t, e) {
                if (t % 60 == 0) {
                    return (t > 0 ? "-" : "+") + c(Math.abs(t) / 60, 2);
                }
                return x(t, e);
            }
            function x(t, e = "") {
                const n = t > 0 ? "-" : "+",
                    r = Math.abs(t);
                return n + c(Math.trunc(r / 60), 2) + e + c(r % 60, 2);
            }
        },
        16468: (t, e, n) => {
            n.d(e, { G: () => o });
            const r = (t, e) => {
                    switch (t) {
                        case "P":
                            return e.date({ width: "short" });
                        case "PP":
                            return e.date({ width: "medium" });
                        case "PPP":
                            return e.date({ width: "long" });
                        default:
                            return e.date({ width: "full" });
                    }
                },
                a = (t, e) => {
                    switch (t) {
                        case "p":
                            return e.time({ width: "short" });
                        case "pp":
                            return e.time({ width: "medium" });
                        case "ppp":
                            return e.time({ width: "long" });
                        default:
                            return e.time({ width: "full" });
                    }
                },
                o = {
                    p: a,
                    P: (t, e) => {
                        const n = t.match(/(P+)(p+)?/) || [],
                            o = n[1],
                            i = n[2];
                        if (!i) return r(t, e);
                        let s;
                        switch (o) {
                            case "P":
                                s = e.dateTime({ width: "short" });
                                break;
                            case "PP":
                                s = e.dateTime({ width: "medium" });
                                break;
                            case "PPP":
                                s = e.dateTime({ width: "long" });
                                break;
                            default:
                                s = e.dateTime({ width: "full" });
                        }
                        return s.replace("{{date}}", r(o, e)).replace("{{time}}", a(i, e));
                    },
                };
        },
        537796: (t, e, n) => {
            n.d(e, { D: () => a });
            var r = n(150729);
            function a(t) {
                const e = (0, r.Q)(t),
                    n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                return n.setUTCFullYear(e.getFullYear()), +t - +n;
            }
        },
        398308: (t, e, n) => {
            n.d(e, { DD: () => c, Do: () => s, Iu: () => i });
            const r = /^D+$/,
                a = /^Y+$/,
                o = ["D", "DD", "YY", "YYYY"];
            function i(t) {
                return r.test(t);
            }
            function s(t) {
                return a.test(t);
            }
            function c(t, e, n) {
                const r = (function (t, e, n) {
                    const r = "Y" === t[0] ? "years" : "days of the month";
                    return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                })(t, e, n);
                if (o.includes(t)) throw new RangeError(r);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Verified-6107ac1a.c4a8e77a.js.map
