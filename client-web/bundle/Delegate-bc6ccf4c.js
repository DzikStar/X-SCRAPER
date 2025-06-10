"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-bc6ccf4c", "loader.AudioDock", "bundle.AudioSpaceReport", "loader.AudioContextVoiceMedia", "icons/IconExiting-js"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(807896),
                o = r(202784),
                l = r(325686),
                s = r(731708),
                n = r(58881),
                i = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                h = ({ align: e = "center", color: t, label: r, ...h }) => {
                    const u = n.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(l.Z, { style: d.container }, o.createElement(i.Z, (0, a.Z)({}, h, { interactiveStyles: u, style: d.root }), o.createElement(s.ZP, { align: e, color: t }, r)));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                o = r(325686),
                l = r(392237);
            function s({ spacing: e, style: t }) {
                return a.createElement(o.Z, { role: "separator", style: [n.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const n = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                o = r(476984),
                l = r.n(o),
                s = r(143778),
                n = r(750410),
                i = r(682830);
            const c = "failed",
                d = "loaded",
                h = "loading",
                u = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: o, icon: l, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (o) {
                        case c:
                            return b ? a.createElement(n.Z, { icon: l, onRequestRetry: d, retryMessage: g }) : r ? a.createElement(i.m, { failureMessage: r }) : m();
                        case h:
                            return a.createElement(i.J, { "aria-label": e, color: t, loadingMessage: s });
                        case u:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                o = r(325686),
                l = r(235902),
                s = r(885015),
                n = r(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: i } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return r ? a.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] })), a.createElement(o.Z, { style: c.gapText }, r), a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] }))) : a.createElement(o.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                o = r(202784),
                l = r(325686),
                s = r(392237);
            class n extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...s } = this.props,
                        n = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, i.column, r && i.withGutterColumn] }));
                    return o.createElement(l.Z, (0, a.Z)({ style: [t, i.root, r && i.withGutter] }, s), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const i = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = n;
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => C });
            var a = r(202784),
                o = r(325686),
                l = r(913973),
                s = r(731708),
                n = r(950822),
                i = r(466792),
                c = r(58881),
                d = r(530732),
                h = r(352924),
                u = r(392237);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, h.F)()),
                        (this.descriptionId = (0, h.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: h, helpText: p, label: g, name: b, testID: f } = this.props,
                        C = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        y = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        v = r ? C : y;
                    return a.createElement(i.Z, { disabled: h }, (i) => a.createElement(o.Z, { role: "label", style: [m.root, !h && m.interactive], testID: f }, a.createElement(o.Z, { style: m.topContainer }, a.createElement(s.ZP, { id: this.labelId }, g), a.createElement(o.Z, { style: m.radioContainer }, a.createElement(d.Z, { interactiveStyles: v, interactivityState: i, style: m.radioBackground }, a.createElement(o.Z, { style: [m.circle, r && m.circleActive, h && m.circleDisabled, r && h && m.circleCheckedAndDisabled] }, r ? a.createElement(l.default, { style: m.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: h, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), p ? a.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const m = u.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = p,
                b = "radioGroup";
            let f = 1;
            class C extends a.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: r } = this.props;
                            r(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (r) => {
                            (this._radioRefs[e] = r), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: l, name: n, options: i, value: c } = this.props;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: r && y.disabled, testID: `${b}${n}` },
                        l ? a.createElement(o.Z, { id: this._labelId, role: "label", style: y.header }, a.createElement(s.ZP, { style: y.label, weight: "bold" }, l), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        i.map((e, t) => a.createElement(g, { "aria-posinset": t + 1, "aria-setsize": i.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            C.defaultProps = { disabled: !1 };
            const y = u.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        80512: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                o = r(325686),
                l = r(815858),
                s = r(731708),
                n = r(449479),
                i = r(392237),
                c = r(451566);
            let d = 1;
            class h extends a.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: r, onChange: a, options: o, value: l } = this.props;
                            a(t, l === r ? e?.value || o[0].value : r);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${d}_LABEL`),
                        (d += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: i, name: d, offValue: h, onChange: p, options: m, value: g } = this.props;
                    return a.createElement(o.Z, { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "group", style: [u.root, r && u.disabled] }, a.createElement(a.Fragment, null, i ? a.createElement(o.Z, { id: this._labelId, role: "label", style: u.header }, a.createElement(o.Z, { style: u.label }, a.createElement(s.ZP, { weight: "bold" }, i), a.createElement(c.Z, { disabled: r, onValueChange: this._handleGateToggle, value: g !== h })), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && a.createElement(l.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== h }, a.createElement(o.Z, null, a.createElement(o.Z, { style: u.radioGroup, tabIndex: 0 }, a.createElement(n.Z, { "aria-label": e || i, disabled: r, name: d, onChange: p, options: m, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            h.defaultProps = { disabled: !1 };
            const u = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        297896: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                s = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const i = n;
        },
        748138: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                s = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const i = n;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                s = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const i = n;
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
                        const l = t ? t(a, o, e) : !!a;
                        return l && r[0].push(a), !l && r[1].push(a), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-bc6ccf4c.a588d99a.js.map
