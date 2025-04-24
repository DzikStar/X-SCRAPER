"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-bc6ccf4c", "loader.AudioDock", "bundle.AudioSpaceReport", "loader.AudioContextVoiceMedia"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(807896),
                a = r(202784),
                l = r(325686),
                n = r(731708),
                s = r(58881),
                i = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const p = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return a.createElement(l.Z, { style: d.container }, a.createElement(i.Z, (0, o.Z)({}, u, { interactiveStyles: p, style: d.root }), a.createElement(n.ZP, { align: e, color: t }, r)));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(202784),
                a = r(325686),
                l = r(392237);
            function n({ spacing: e, style: t }) {
                return o.createElement(a.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(202784),
                a = r(476984),
                l = r.n(a),
                n = r(143778),
                s = r(750410),
                i = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class h extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: l, loadingMessage: n, onRequestRetry: d, render: h, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (a) {
                        case c:
                            return b ? o.createElement(s.Z, { icon: l, onRequestRetry: d, retryMessage: g }) : r ? o.createElement(i.m, { failureMessage: r }) : m();
                        case u:
                            return o.createElement(i.J, { "aria-label": e, color: t, loadingMessage: n });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686),
                l = r(235902),
                n = r(885015),
                s = r(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: i } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? o.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, d] })), o.createElement(a.Z, { style: c.gapText }, r), o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, d] }))) : o.createElement(a.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                a = r(202784),
                l = r(325686),
                n = r(392237);
            class s extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...n } = this.props,
                        s = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, i.column, r && i.withGutterColumn] }));
                    return a.createElement(l.Z, (0, o.Z)({ style: [t, i.root, r && i.withGutter] }, n), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const i = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                a = r(325686),
                l = r(191796),
                n = r(58399),
                s = r(731708),
                i = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: p = !1, label: h, link: m, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: Z = "pivot", thumbnail: E, thumbnailSize: _, withoutArrow: k = !1 } = e,
                        v = [u.thumbnailContainer, "medium" === _ && u.thumbnailContainerMedium],
                        w = "string" == typeof h ? o.createElement(s.ZP, null, h) : h,
                        x = "object" == typeof m && m.external && !m.openInSameFrame,
                        R = r ? ("string" == typeof r ? o.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${Z}-description` }, r) : r) : null,
                        I = o.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return o.createElement(i.Z, { "aria-selected": "tab" === y ? p : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [u.root, I, d && u.disabled, C], testID: Z, withInteractiveStyling: !!m || !!g }, o.createElement(a.Z, { style: u.contentContainer }, E ? o.createElement(a.Z, { style: v }, E) : null, o.createElement(a.Z, { style: u.content }, w, R), f ? f() : null, (!m && !g) || d || k ? null : x ? o.createElement(l.default, { style: u.icon }) : o.createElement(n.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                a = r(325686),
                l = r(913973),
                n = r(731708),
                s = r(950822),
                i = r(466792),
                c = r(58881),
                d = r(530732),
                u = r(352924),
                p = r(392237);
            class h extends o.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: u, helpText: h, label: g, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        Z = r ? y : C;
                    return o.createElement(i.Z, { disabled: u }, (i) => o.createElement(a.Z, { role: "label", style: [m.root, !u && m.interactive], testID: f }, o.createElement(a.Z, { style: m.topContainer }, o.createElement(n.ZP, { id: this.labelId }, g), o.createElement(a.Z, { style: m.radioContainer }, o.createElement(d.Z, { interactiveStyles: Z, interactivityState: i, style: m.radioBackground }, o.createElement(a.Z, { style: [m.circle, r && m.circleActive, u && m.circleDisabled, r && u && m.circleCheckedAndDisabled] }, r ? o.createElement(l.default, { style: m.checkMark }) : null)), (0, s.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), h ? o.createElement(n.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, h) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            h.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = h,
                b = "radioGroup";
            let f = 1;
            class y extends o.Component {
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
                    const { "aria-label": e, description: t, disabled: r, label: l, name: s, options: i, value: c } = this.props;
                    return o.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${b}${s}` },
                        l ? o.createElement(a.Z, { id: this._labelId, role: "label", style: C.header }, o.createElement(n.ZP, { style: C.label, weight: "bold" }, l), t ? o.createElement(n.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        i.map((e, t) => o.createElement(g, { "aria-posinset": t + 1, "aria-setsize": i.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: s, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(731708),
                l = r(392237);
            class n extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return o.createElement(a.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: r } = this.props,
                        l = s.root;
                    return t && r ? o.createElement(a.ZP, { color: "gray700", size: "subtext2", style: l }, e, " ", this._renderLearnMore()) : o.createElement(a.ZP, { color: "gray700", size: "subtext2", style: l }, e);
                }
            }
            const s = l.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                i = n;
        },
        80512: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                a = r(325686),
                l = r(815858),
                n = r(731708),
                s = r(449479),
                i = r(392237),
                c = r(451566);
            let d = 1;
            class u extends o.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: r, onChange: o, options: a, value: l } = this.props;
                            o(t, l === r ? e?.value || a[0].value : r);
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
                    const { "aria-label": e, description: t, disabled: r, label: i, name: d, offValue: u, onChange: h, options: m, value: g } = this.props;
                    return o.createElement(a.Z, { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "group", style: [p.root, r && p.disabled] }, o.createElement(o.Fragment, null, i ? o.createElement(a.Z, { id: this._labelId, role: "label", style: p.header }, o.createElement(a.Z, { style: p.label }, o.createElement(n.ZP, { weight: "bold" }, i), o.createElement(c.Z, { disabled: r, onValueChange: this._handleGateToggle, value: g !== u })), t ? o.createElement(n.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && o.createElement(l.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== u }, o.createElement(a.Z, null, o.createElement(a.Z, { style: p.radioGroup, tabIndex: 0 }, o.createElement(s.Z, { "aria-label": e || i, disabled: r, name: d, onChange: h, options: m, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => a, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (r, o, a) => {
                        const l = t ? t(o, a, e) : !!o;
                        return l && r[0].push(o), !l && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-bc6ccf4c.2f511b2a.js.map
