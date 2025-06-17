"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-6107ac1a", "loader.AudioDock", "bundle.AudioSpaceReport", "loader.AudioContextVoiceMedia"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(807896),
                o = r(202784),
                l = r(325686),
                s = r(731708),
                n = r(58881),
                i = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const p = n.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(l.Z, { style: d.container }, o.createElement(i.Z, (0, a.Z)({}, u, { interactiveStyles: p, style: d.root }), o.createElement(s.ZP, { align: e, color: t }, r)));
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
            r.d(t, { Z: () => h });
            var a = r(202784),
                o = r(476984),
                l = r.n(o),
                s = r(143778),
                n = r(750410),
                i = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class h extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: o, icon: l, loadingMessage: s, onRequestRetry: d, render: h, renderFailure: g, retryMessage: m, retryable: b } = this.props;
                    switch (o) {
                        case c:
                            return b ? a.createElement(n.Z, { icon: l, onRequestRetry: d, retryMessage: m }) : r ? a.createElement(i.m, { failureMessage: r }) : g();
                        case u:
                            return a.createElement(i.J, { "aria-label": e, color: t, loadingMessage: s });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: s.Z, retryable: !0 };
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
            r.d(t, { Z: () => y });
            var a = r(202784),
                o = r(325686),
                l = r(913973),
                s = r(731708),
                n = r(950822),
                i = r(466792),
                c = r(58881),
                d = r(530732),
                u = r(352924),
                p = r(392237);
            class h extends a.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: u, helpText: h, label: m, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        Z = r ? y : C;
                    return a.createElement(i.Z, { disabled: u }, (i) => a.createElement(o.Z, { role: "label", style: [g.root, !u && g.interactive], testID: f }, a.createElement(o.Z, { style: g.topContainer }, a.createElement(s.ZP, { id: this.labelId }, m), a.createElement(o.Z, { style: g.radioContainer }, a.createElement(d.Z, { interactiveStyles: Z, interactivityState: i, style: g.radioBackground }, a.createElement(o.Z, { style: [g.circle, r && g.circleActive, u && g.circleDisabled, r && u && g.circleCheckedAndDisabled] }, r ? a.createElement(l.default, { style: g.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), h ? a.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, h) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            h.defaultProps = { disabled: !1, checked: !1 };
            const g = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = h,
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
                    const { "aria-label": e, description: t, disabled: r, label: l, name: n, options: i, value: c } = this.props;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${b}${n}` },
                        l ? a.createElement(o.Z, { id: this._labelId, role: "label", style: C.header }, a.createElement(s.ZP, { style: C.label, weight: "bold" }, l), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        i.map((e, t) => a.createElement(m, { "aria-posinset": t + 1, "aria-setsize": i.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        80512: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                o = r(325686),
                l = r(815858),
                s = r(731708),
                n = r(449479),
                i = r(392237),
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
                    const { "aria-label": e, description: t, disabled: r, label: i, name: d, offValue: u, onChange: h, options: g, value: m } = this.props;
                    return a.createElement(o.Z, { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "group", style: [p.root, r && p.disabled] }, a.createElement(a.Fragment, null, i ? a.createElement(o.Z, { id: this._labelId, role: "label", style: p.header }, a.createElement(o.Z, { style: p.label }, a.createElement(s.ZP, { weight: "bold" }, i), a.createElement(c.Z, { disabled: r, onValueChange: this._handleGateToggle, value: m !== u })), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, g && a.createElement(l.Z, { onAnimateComplete: this._handleAnimationComplete, show: m !== u }, a.createElement(o.Z, null, a.createElement(o.Z, { style: p.radioGroup, tabIndex: 0 }, a.createElement(n.Z, { "aria-label": e || i, disabled: r, name: d, onChange: h, options: g, ref: this._setRadioGroupRef, value: m }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                l = r(783427),
                s = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
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
        730895: (e, t, r) => {
            var a = r(821176);
            e.exports = function () {
                var e = a(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, r) => {
            var a = r(609859),
                o = r(807400),
                l = r(396616),
                s = r(730895),
                n = r(824229),
                i = a.RegExp,
                c = i.prototype;
            o &&
                n(function () {
                    var e = !0;
                    try {
                        i(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        r = "",
                        a = e ? "dgimsy" : "gimsy",
                        o = function (e, a) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (r += a), !0;
                                },
                            });
                        },
                        l = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var s in (e && (l.hasIndices = "d"), l)) o(s, l[s]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== a || r !== a;
                }) &&
                l(c, "flags", { configurable: !0, get: s });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-6107ac1a.76b2f98a.js.map
