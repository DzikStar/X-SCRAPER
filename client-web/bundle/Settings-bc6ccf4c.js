"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Settings-bc6ccf4c", "icons/IconDrafts-js"],
    {
        661810: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                o = r(325686),
                n = r(392237);
            function i({ spacing: e, style: t }) {
                return a.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                o = r(325686),
                n = r(191796),
                i = r(58399),
                l = r(731708),
                s = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: h = !1, label: p, link: m, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: k = "pivot", thumbnail: v, thumbnailSize: w, withoutArrow: x = !1 } = e,
                        E = [u.thumbnailContainer, "medium" === w && u.thumbnailContainerMedium],
                        Z = "string" == typeof p ? a.createElement(l.ZP, null, p) : p,
                        _ = "object" == typeof m && m.external && !m.openInSameFrame,
                        R = r ? ("string" == typeof r ? a.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${k}-description` }, r) : r) : null,
                        I = a.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return a.createElement(s.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [u.root, I, d && u.disabled, C], testID: k, withInteractiveStyling: !!m || !!g }, a.createElement(o.Z, { style: u.contentContainer }, v ? a.createElement(o.Z, { style: E }, v) : null, a.createElement(o.Z, { style: u.content }, Z, R), f ? f() : null, (!m && !g) || d || x ? null : _ ? a.createElement(n.default, { style: u.icon }) : a.createElement(i.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                o = r(325686),
                n = r(913973),
                i = r(731708),
                l = r(950822),
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
                        k = r ? y : C;
                    return a.createElement(s.Z, { disabled: u }, (s) => a.createElement(o.Z, { role: "label", style: [m.root, !u && m.interactive], testID: f }, a.createElement(o.Z, { style: m.topContainer }, a.createElement(i.ZP, { id: this.labelId }, g), a.createElement(o.Z, { style: m.radioContainer }, a.createElement(d.Z, { interactiveStyles: k, interactivityState: s, style: m.radioBackground }, a.createElement(o.Z, { style: [m.circle, r && m.circleActive, u && m.circleDisabled, r && u && m.circleCheckedAndDisabled] }, r ? a.createElement(n.default, { style: m.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), p ? a.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, p) : null));
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
                    const { "aria-label": e, description: t, disabled: r, label: n, name: l, options: s, value: c } = this.props;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${b}${l}` },
                        n ? a.createElement(o.Z, { id: this._labelId, role: "label", style: C.header }, a.createElement(i.ZP, { style: C.label, weight: "bold" }, n), t ? a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => a.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
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
                n = r(392237);
            class i extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return a.createElement(o.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: r } = this.props,
                        n = l.root;
                    return t && r ? a.createElement(o.ZP, { color: "gray700", size: "subtext2", style: n }, e, " ", this._renderLearnMore()) : a.createElement(o.ZP, { color: "gray700", size: "subtext2", style: n }, e);
                }
            }
            const l = n.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = i;
        },
        101890: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                o = r(325686),
                n = r(449479),
                i = r(392237);
            const l = (e) => a.createElement(o.Z, { style: s.root }, a.createElement(n.Z, e)),
                s = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        16790: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                o = r(325686),
                n = r(392237),
                i = r(913973),
                l = r(803993),
                s = r(731708),
                c = r(950822),
                d = r(58881),
                u = r(530732),
                h = r(157396);
            const p = n.default.create((e) => ({ root: { paddingHorizontal: "20px", flexDirection: "row", flex: 1, borderRadius: e.borderRadii.small, cursor: "pointer", minHeight: "64px", margin: e.spaces.space4, alignItems: "center" }, radioOuterCircle: { borderRadius: e.borderRadii.infinite, userSelect: "none", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", marginHorizontal: "-11px" }, radioInnerCircle: { alignItems: "center", borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, justifyContent: "center", height: "20px", width: "20px" }, text: { flexGrow: 1, justifyContent: "center", cursor: "pointer", alignItems: "center", marginStart: "5px", width: "80%" }, checkMark: { color: e.colors.white, width: "18px", height: "18px" }, nativeControl: { ...n.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" } })),
                m = function ({ "aria-label": e, autoFocus: t, backgroundName: r, isSelected: m, label: g, name: b, onChange: f }) {
                    const y = a.createRef(),
                        C = a.useMemo(() => d.Z.generate({ backgroundColor: n.default.theme.colors.transparent, color: n.default.theme.colors.primary, withFocusWithinFocusRing: !0 }), []),
                        k = a.useMemo(() => {
                            d.Z.generate({ backgroundColor: n.default.theme.colors.transparent, color: n.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                        }, []),
                        v = a.useMemo(() => (r === h.CV.dark ? l.Vi : r === h.CV.darker ? l.SR : l.vh), [r]),
                        w = a.useMemo(() => ({ backgroundColor: v.cellBackground, borderColor: m ? n.default.theme.colors.primary : n.default.theme.colors.gray200, borderWidth: m ? "2px" : "1px" }), [m, v.cellBackground]),
                        x = a.useMemo(() => ({ backgroundColor: m ? n.default.theme.colors.primary : n.default.theme.colors.transparent, borderColor: m ? n.default.theme.colors.primary : v.gray300 }), [m, v.gray300]),
                        E = a.useMemo(() => (m ? C : k), [m, C, k]),
                        Z = a.useMemo(() => ({ color: v.text }), [v.text]);
                    function _(e) {
                        f && !m && f(r);
                    }
                    return (
                        a.useEffect(() => {
                            t && y.current && y.current.focus();
                        }, [t, y]),
                        a.createElement(u.Z, { focusable: !1, interactiveStyles: null, style: [p.root, w] }, (t) => a.createElement(a.Fragment, null, a.createElement(u.Z, { focusable: !1, interactiveStyles: E, interactivityState: t, role: "radio", style: p.radioOuterCircle }, a.createElement(o.Z, { style: [p.radioInnerCircle, x] }, m ? a.createElement(i.default, { style: p.checkMark }) : null)), a.createElement(o.Z, { "aria-hidden": !0, style: p.text }, a.createElement(s.ZP, { numberOfLines: 1, style: Z, weight: "bold" }, g)), (0, c.Z)("input", { "aria-label": e || g, checked: m, name: b, style: p.nativeControl, type: "radio", onChange: _, ref: y })))
                    );
                };
            function g({ "aria-label": e, autoFocus: t, layout: r, onChange: n, options: i, value: l }) {
                return a.createElement(
                    o.Z,
                    { "aria-label": e, role: "radiogroup", style: "row" === r ? b.row : b.column },
                    i.map((e) => {
                        return a.createElement(m, {
                            "aria-label": e["aria-label"],
                            autoFocus: t && e.backgroundName === l,
                            backgroundName: e.backgroundName,
                            isSelected: e.backgroundName === l,
                            key: e.backgroundName,
                            label: e.label,
                            name: "background-picker",
                            onChange:
                                ((r = e.backgroundName),
                                function () {
                                    n(r);
                                }),
                        });
                        var r;
                    }),
                );
            }
            const b = n.default.create((e) => ({ row: { flexDirection: "row" }, column: { flexDirection: "column" } }));
        },
        226244: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                o = r(325686),
                n = r(392237),
                i = r(136483),
                l = r(913973),
                s = r(950822),
                c = r(58881),
                d = r(530732);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._radioRef = a.createRef()),
                        (this._handleChange = () => {
                            const { colorName: e, onChange: t } = this.props;
                            t(e);
                        });
                }
                componentDidMount() {
                    this.props.autoFocus && this._radioRef && this._radioRef.current && this._radioRef.current.focus();
                }
                render() {
                    const { "aria-label": e, colorName: t, isSelected: r, name: u, style: p } = this.props,
                        m = n.default.theme.colors[t],
                        g = c.Z.generate({ backgroundColor: n.default.theme.colors.transparent, color: m, withFocusWithinFocusRing: !0 });
                    return a.createElement(o.Z, { style: [h.container, p] }, a.createElement(d.Z, { interactiveStyles: g, role: "label", style: [h.choice, h.choiceContainer] }, a.createElement(i.default, { style: [h.choice, { color: m }] }), (0, s.Z)("input", { "aria-label": e, name: u, checked: r, onChange: this._handleChange, ref: this._radioRef, style: h.nativeControl, type: "radio" })), r && a.createElement(o.Z, { style: [h.choice, h.checkMarkContainer] }, a.createElement(l.default, { style: [h.choiceSelected, { backgroundColor: m }] })));
                }
            }
            const h = n.default.create((e) => ({ container: { alignItems: "center", paddingVertical: e.spaces.space4, userSelect: "none" }, choice: { cursor: "pointer", height: 45, width: 45 }, checkMarkContainer: { alignItems: "center", justifyContent: "center", position: "absolute" }, choiceSelected: { color: e.colors.whiteOnColor, height: 25, width: 25 }, choiceContainer: { borderRadius: e.borderRadii.infinite }, transitionStyle: { transitionProperty: "transform", transitionDuration: "0.1s" }, focusedStyle: { outlineStyle: "none" }, hoverStyle: { transform: [{ scale: 1.1 }] }, pressedStyle: { transform: [{ scale: 0.95 }] }, nativeControl: { ...n.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" } })),
                p = u;
            let m = 1;
            class g extends a.Component {
                constructor() {
                    super(), (this._colorPickerId = `COLOR_PICKER_${m}_LABEL`), (m += 1);
                }
                render() {
                    const { "aria-label": e, autoFocus: t, layout: r, onChange: n, options: i, value: l } = this.props,
                        s = "two-rows" === r,
                        c = [b.root, s && b.flexWrap],
                        d = s ? { width: (2 / i.length) * 100 + "%" } : void 0;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, role: "radiogroup", style: c },
                        i.map(({ "aria-label": e, colorName: r }) => a.createElement(p, { "aria-label": e, autoFocus: t && l === r, colorName: r, isSelected: l === r, key: r, name: this._colorPickerId, onChange: n, style: d })),
                    );
                }
            }
            g.defaultProps = { layout: "one-row" };
            const b = n.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-around" }, flexWrap: { flexWrap: "wrap" } })),
                f = g;
        },
        266151: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Settings-bc6ccf4c.a4b3905a.js.map
