"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-bc6ccf4c", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(807896),
                o = r(202784),
                l = r(325686),
                i = r(731708),
                n = r(58881),
                s = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                h = ({ align: e = "center", color: t, label: r, ...h }) => {
                    const u = n.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(l.Z, { style: d.container }, o.createElement(s.Z, (0, a.Z)({}, h, { interactiveStyles: u, style: d.root }), o.createElement(i.ZP, { align: e, color: t }, r)));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                o = r(325686),
                l = r(392237);
            function i({ spacing: e, style: t }) {
                return a.createElement(o.Z, { role: "separator", style: [n.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const n = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                o = r(476984),
                l = r.n(o),
                i = r(143778),
                n = r(750410),
                s = r(682830);
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
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: o, icon: l, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (o) {
                        case c:
                            return b ? a.createElement(n.Z, { icon: l, onRequestRetry: d, retryMessage: g }) : r ? a.createElement(s.m, { failureMessage: r }) : m();
                        case h:
                            return a.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case u:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                o = r(325686),
                l = r(235902),
                i = r(885015),
                n = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return r ? a.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] })), a.createElement(o.Z, { style: c.gapText }, r), a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] }))) : a.createElement(o.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                o = r(202784),
                l = r(325686),
                i = r(392237);
            class n extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...i } = this.props,
                        n = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return o.createElement(l.Z, (0, a.Z)({ style: [t, s.root, r && s.withGutter] }, i), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = n;
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => C });
            var a = r(202784),
                o = r(325686),
                l = r(913973),
                i = r(731708),
                n = r(950822),
                s = r(466792),
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
                    return a.createElement(s.Z, { disabled: h }, (s) => a.createElement(o.Z, { role: "label", style: [m.root, !h && m.interactive], testID: f }, a.createElement(o.Z, { style: m.topContainer }, a.createElement(i.ZP, { id: this.labelId }, g), a.createElement(o.Z, { style: m.radioContainer }, a.createElement(d.Z, { interactiveStyles: v, interactivityState: s, style: m.radioBackground }, a.createElement(o.Z, { style: [m.circle, r && m.circleActive, h && m.circleDisabled, r && h && m.circleCheckedAndDisabled] }, r ? a.createElement(l.default, { style: m.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: h, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), p ? a.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, p) : null));
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
                    const { "aria-label": e, description: t, disabled: r, label: l, name: n, options: s, value: c } = this.props;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: r && y.disabled, testID: `${b}${n}` },
                        l ? a.createElement(o.Z, { id: this._labelId, role: "label", style: y.header }, a.createElement(i.ZP, { style: y.label, weight: "bold" }, l), t ? a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => a.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
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
                i = r(731708),
                n = r(449479),
                s = r(392237),
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
                    const { "aria-label": e, description: t, disabled: r, label: s, name: d, offValue: h, onChange: p, options: m, value: g } = this.props;
                    return a.createElement(o.Z, { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "group", style: [u.root, r && u.disabled] }, a.createElement(a.Fragment, null, s ? a.createElement(o.Z, { id: this._labelId, role: "label", style: u.header }, a.createElement(o.Z, { style: u.label }, a.createElement(i.ZP, { weight: "bold" }, s), a.createElement(c.Z, { disabled: r, onValueChange: this._handleGateToggle, value: g !== h })), t ? a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && a.createElement(l.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== h }, a.createElement(o.Z, null, a.createElement(o.Z, { style: u.radioGroup, tabIndex: 0 }, a.createElement(n.Z, { "aria-label": e || s, disabled: r, name: d, onChange: p, options: m, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            h.defaultProps = { disabled: !1 };
            const u = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                i = r(717683),
                n = r(347101);
            const s = (e = {}) => {
                const t = a.useContext(i.Z),
                    { direction: r } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style, t && n.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-bc6ccf4c.35a6974a.js.map
