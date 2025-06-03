"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-bc6ccf4c", "loader.AudioDock", "bundle.AudioSpaceReport", "loader.AudioContextVoiceMedia", "icons/IconExiting-js"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(807896),
                o = r(202784),
                l = r(325686),
                n = r(731708),
                i = r(58881),
                s = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const h = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(l.Z, { style: d.container }, o.createElement(s.Z, (0, a.Z)({}, u, { interactiveStyles: h, style: d.root }), o.createElement(n.ZP, { align: e, color: t }, r)));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                o = r(325686),
                l = r(392237);
            function n({ spacing: e, style: t }) {
                return a.createElement(o.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                o = r(476984),
                l = r.n(o),
                n = r(143778),
                i = r(750410),
                s = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: o, icon: l, loadingMessage: n, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (o) {
                        case c:
                            return b ? a.createElement(i.Z, { icon: l, onRequestRetry: d, retryMessage: g }) : r ? a.createElement(s.m, { failureMessage: r }) : m();
                        case u:
                            return a.createElement(s.J, { "aria-label": e, color: t, loadingMessage: n });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                o = r(325686),
                l = r(235902),
                n = r(885015),
                i = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? a.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] })), a.createElement(o.Z, { style: c.gapText }, r), a.createElement(o.Z, { style: c.gapColumn }, a.createElement(o.Z, { style: [c.gap, d] }))) : a.createElement(o.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                o = r(202784),
                l = r(325686),
                n = r(392237);
            class i extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...n } = this.props,
                        i = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return o.createElement(l.Z, (0, a.Z)({ style: [t, s.root, r && s.withGutter] }, n), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                o = r(325686),
                l = r(191796),
                n = r(58399),
                i = r(731708),
                s = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: h = !1, label: p, link: m, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: Z = "pivot", thumbnail: v, thumbnailSize: E, withoutArrow: w = !1 } = e,
                        _ = [u.thumbnailContainer, "medium" === E && u.thumbnailContainerMedium],
                        k = "string" == typeof p ? a.createElement(i.ZP, null, p) : p,
                        x = "object" == typeof m && m.external && !m.openInSameFrame,
                        z = r ? ("string" == typeof r ? a.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${Z}-description` }, r) : r) : null,
                        R = a.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return a.createElement(s.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [u.root, R, d && u.disabled, C], testID: Z, withInteractiveStyling: !!m || !!g }, a.createElement(o.Z, { style: u.contentContainer }, v ? a.createElement(o.Z, { style: _ }, v) : null, a.createElement(o.Z, { style: u.content }, k, z), f ? f() : null, (!m && !g) || d || w ? null : x ? a.createElement(l.default, { style: u.icon }) : a.createElement(n.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                o = r(325686),
                l = r(913973),
                n = r(731708),
                i = r(950822),
                s = r(466792),
                c = r(58881),
                d = r(530732),
                u = r(352924),
                h = r(392237);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: u, helpText: p, label: g, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        Z = r ? y : C;
                    return a.createElement(s.Z, { disabled: u }, (s) => a.createElement(o.Z, { role: "label", style: [m.root, !u && m.interactive], testID: f }, a.createElement(o.Z, { style: m.topContainer }, a.createElement(n.ZP, { id: this.labelId }, g), a.createElement(o.Z, { style: m.radioContainer }, a.createElement(d.Z, { interactiveStyles: Z, interactivityState: s, style: m.radioBackground }, a.createElement(o.Z, { style: [m.circle, r && m.circleActive, u && m.circleDisabled, r && u && m.circleCheckedAndDisabled] }, r ? a.createElement(l.default, { style: m.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), p ? a.createElement(n.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const m = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = p,
                b = "radioGroup";
            let f = 1;
            class y extends a.Component {
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
                    const { "aria-label": e, description: t, disabled: r, label: l, name: i, options: s, value: c } = this.props;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${b}${i}` },
                        l ? a.createElement(o.Z, { id: this._labelId, role: "label", style: C.header }, a.createElement(n.ZP, { style: C.label, weight: "bold" }, l), t ? a.createElement(n.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => a.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                o = r(731708),
                l = r(392237);
            class n extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return a.createElement(o.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: r } = this.props,
                        l = i.root;
                    return t && r ? a.createElement(o.ZP, { color: "gray700", size: "subtext2", style: l }, e, " ", this._renderLearnMore()) : a.createElement(o.ZP, { color: "gray700", size: "subtext2", style: l }, e);
                }
            }
            const i = l.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = n;
        },
        80512: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                o = r(325686),
                l = r(815858),
                n = r(731708),
                i = r(449479),
                s = r(392237),
                c = r(451566);
            let d = 1;
            class u extends a.Component {
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
                    const { "aria-label": e, description: t, disabled: r, label: s, name: d, offValue: u, onChange: p, options: m, value: g } = this.props;
                    return a.createElement(o.Z, { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "group", style: [h.root, r && h.disabled] }, a.createElement(a.Fragment, null, s ? a.createElement(o.Z, { id: this._labelId, role: "label", style: h.header }, a.createElement(o.Z, { style: h.label }, a.createElement(n.ZP, { weight: "bold" }, s), a.createElement(c.Z, { disabled: r, onValueChange: this._handleGateToggle, value: g !== u })), t ? a.createElement(n.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && a.createElement(l.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== u }, a.createElement(o.Z, null, a.createElement(o.Z, { style: h.radioGroup, tabIndex: 0 }, a.createElement(i.Z, { "aria-label": e || s, disabled: r, name: d, onChange: p, options: m, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const h = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        297896: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        41065: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-bc6ccf4c.aa22dd6a.js.map
