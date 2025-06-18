"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsRevamp-6107ac1a", "icons/IconDeviceNotification-js", "icons/IconFilter-js"],
    {
        728055: (e, a, t) => {
            t.d(a, { Z: () => d });
            var r,
                l,
                o,
                n,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "parodyProfileLabel" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "AccountParodyScreenImplV2ParodyLabelMutation",
                        selections: [
                            {
                                alias: null,
                                args: (l = [
                                    { kind: "Variable", name: "arg", variableName: "parodyProfileLabel" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "update_parody_label",
                                plural: !1,
                                selections: [
                                    { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (n = { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null })], type: "PCFLabelUpdateError", abstractKey: null },
                                    { kind: "InlineFragment", selections: [o, (i = { alias: null, args: null, kind: "ScalarField", name: "parody_commentary_fan_label", storageKey: null })], type: "PCFLabelSettings", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: r, kind: "Operation", name: "AccountParodyScreenImplV2ParodyLabelMutation", selections: [{ alias: null, args: l, concreteType: null, kind: "LinkedField", name: "update_parody_label", plural: !1, selections: [o, { kind: "InlineFragment", selections: [n], type: "PCFLabelUpdateError", abstractKey: null }, { kind: "InlineFragment", selections: [i], type: "PCFLabelSettings", abstractKey: null }], storageKey: null }] },
                    params: { id: "73OvlPaHKjWcU21X1w9SKA", metadata: {}, name: "AccountParodyScreenImplV2ParodyLabelMutation", operationKind: "mutation", text: null },
                };
            s.hash = "808e0b00a04d3c0255492c2f267b77e2";
            const d = s;
        },
        455102: (e, a, t) => {
            t.d(a, { Z: () => o });
            var r,
                l = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "AccountParodyScreenImplV2ParodyLabelSettingQuery",
                        selections: (r = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "4721" }],
                                concreteType: "PCFLabelSettings",
                                kind: "LinkedField",
                                name: "get_parody_label_settings",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "disabled_duration_msec", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "is_label_update_disabled", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "parody_commentary_fan_label", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "update_disabled_reason", storageKey: null },
                                ],
                                storageKey: 'get_parody_label_settings(s:"4721")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "AccountParodyScreenImplV2ParodyLabelSettingQuery", selections: r },
                    params: { id: "v5QRfeK5uuWULVGXyMLwyA", metadata: {}, name: "AccountParodyScreenImplV2ParodyLabelSettingQuery", operationKind: "query", text: null },
                };
            l.hash = "a39c6860aa951232fde54fef0202e66c";
            const o = l;
        },
        207966: (e, a, t) => {
            t.d(a, { Z: () => n });
            var r,
                l,
                o = { fragment: { argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "parodyProfileLabel" }]), kind: "Fragment", metadata: null, name: "AccountParodyUserMutation", selections: (l = [{ alias: null, args: [{ kind: "Variable", name: "parody_commentary_fan_label", variableName: "parodyProfileLabel" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: r, kind: "Operation", name: "AccountParodyUserMutation", selections: l }, params: { id: "bKOVxrOlLbA5udkJci7wcg", metadata: {}, name: "AccountParodyUserMutation", operationKind: "mutation", text: null } };
            o.hash = "b521e06ae2a7c6e9e57c2684320bf20b";
            const n = o;
        },
        242454: (e, a, t) => {
            t.d(a, { Z: () => u });
            var r = t(807896),
                l = t(202784),
                o = t(325686),
                n = t(731708),
                i = t(58881),
                s = t(530732),
                d = t(392237);
            const c = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: a, label: t, ...u }) => {
                    const m = i.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors[a], insetFocusRing: !0 });
                    return l.createElement(o.Z, { style: c.container }, l.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: m, style: c.root }), l.createElement(n.ZP, { align: e, color: a }, t)));
                };
        },
        449479: (e, a, t) => {
            t.d(a, { Z: () => f });
            var r = t(202784),
                l = t(325686),
                o = t(913973),
                n = t(731708),
                i = t(950822),
                s = t(466792),
                d = t(58881),
                c = t(530732),
                u = t(352924),
                m = t(392237);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: a, onChange: t } = this.props;
                            t && !a && t(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": a, checked: t, disabled: u, helpText: p, label: g, name: h, testID: y } = this.props,
                        f = d.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        k = d.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        v = t ? f : k;
                    return r.createElement(s.Z, { disabled: u }, (s) => r.createElement(l.Z, { role: "label", style: [b.root, !u && b.interactive], testID: y }, r.createElement(l.Z, { style: b.topContainer }, r.createElement(n.ZP, { id: this.labelId }, g), r.createElement(l.Z, { style: b.radioContainer }, r.createElement(c.Z, { interactiveStyles: v, interactivityState: s, style: b.radioBackground }, r.createElement(l.Z, { style: [b.circle, t && b.circleActive, u && b.circleDisabled, t && u && b.circleCheckedAndDisabled] }, t ? r.createElement(o.default, { style: b.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": a, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: t, disabled: u, name: h, onChange: this._handleChange, ref: this._setRef, style: [b.nativeControl], type: "radio" }))), p ? r.createElement(n.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: b.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const b = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = p,
                h = "radioGroup";
            let y = 1;
            class f extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: a, onChange: t } = this.props;
                            t(a, e);
                        }),
                        (this._setRadioRef = (e, a) => (t) => {
                            (this._radioRefs[e] = t), a && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                a = e ? this._radioRefs[e] : this._radioRefs[0];
                            a && a.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${y}_LABEL`),
                        (y += 1);
                }
                render() {
                    const { "aria-label": e, description: a, disabled: t, label: o, name: i, options: s, value: d } = this.props;
                    return r.createElement(
                        l.Z,
                        { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "radiogroup", style: t && k.disabled, testID: `${h}${i}` },
                        o ? r.createElement(l.Z, { id: this._labelId, role: "label", style: k.header }, r.createElement(n.ZP, { style: k.label, weight: "bold" }, o), a ? r.createElement(n.ZP, { color: "gray700", size: "subtext2" }, a) : null) : null,
                        s.map((e, a) => r.createElement(g, { "aria-posinset": a + 1, "aria-setsize": s.length, checked: e.value === d, disabled: t, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(a, e.value === d), testID: e.testID })),
                    );
                }
            }
            f.defaultProps = { disabled: !1 };
            const k = m.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(202784),
                l = t(325686),
                o = t(449479),
                n = t(392237);
            const i = (e) => r.createElement(l.Z, { style: s.root }, r.createElement(o.Z, e)),
                s = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        88307: (e, a, t) => {
            t.d(a, { Z: () => d });
            var r = t(202784),
                l = t(325686),
                o = t(731708),
                n = t(392237);
            class i extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: a } = this.props;
                            return a && e ? r.createElement(o.ZP, { link: a, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: a, learnMoreLink: t, subtext: n, withBottomBorder: i } = this.props;
                    return r.createElement(l.Z, { style: [s.root, i && s.bottomBorder] }, r.createElement(o.ZP, null, e), n ? (a && t ? this._renderSubtextAndLink() : r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, n)) : null);
                }
            }
            i.defaultProps = { withBottomBorder: !0 };
            const s = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = i;
        },
        183806: (e, a, t) => {
            t.d(a, { Z: () => r });
            const r = t(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        744649: (e, a, t) => {
            t.r(a), t.d(a, { default: () => s });
            var r = t(202784),
                l = t(890601),
                o = t(783427),
                n = t(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7 17h6v2H7v-2zm7.5-15C15.88 2 17 3.12 17 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-9C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h9zM5 19.5c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5v15zm15.74-3.49l1.64 1.15C23.4 15.7 24 13.92 24 12s-.6-3.7-1.62-5.16l-1.64 1.15C21.53 9.13 22 10.51 22 12s-.47 2.87-1.26 4.01zm-.82-7.45l-1.64 1.15c.45.65.72 1.43.72 2.29 0 .85-.27 1.64-.72 2.29l1.64 1.15C20.6 14.47 21 13.28 21 12s-.4-2.47-1.08-3.44z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        517747: (e, a, t) => {
            t.r(a), t.d(a, { default: () => s });
            var r = t(202784),
                l = t(890601),
                o = t(783427),
                n = t(347101);
            const i = (e = {}) => {
                const { direction: a } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        143095: (e, a, t) => {
            t.d(a, { O: () => l });
            var r = t(202784);
            function l(e) {
                const [a, t] = r.useState(e);
                return [
                    a,
                    r.useMemo(() => {
                        const e = (e) => {
                            if ("boolean" == typeof e) return t(e);
                            t((e) => !e);
                        };
                        return (e.toTrue = t.bind(null, !0)), (e.toFalse = t.bind(null, !1)), (e.toggle = e), e;
                    }, []),
                ];
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsRevamp-6107ac1a.09d7d13a.js.map
