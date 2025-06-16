"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileLocationSpotlight-6107ac1a"],
    {
        837777: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n,
                s,
                r,
                t,
                i,
                o,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "rest_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "LocationSpotlightQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (s = [
                                    { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, concreteType: "UserBusinessEditableModules", kind: "LinkedField", name: "editable_profilemodules", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useLocationData_data" }], storageKey: null },
                                                    { alias: null, args: null, concreteType: "UserBusinessModulesResponse", kind: "LinkedField", name: "profilemodules", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "Preview_locationSpotlight" }], storageKey: null },
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "LocationSpotlightQuery",
                        selections: [
                            {
                                alias: "user",
                                args: s,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserBusinessEditableModules",
                                                        kind: "LinkedField",
                                                        name: "editable_profilemodules",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserBusinessConfigurableModuleV1",
                                                                kind: "LinkedField",
                                                                name: "configurable_modules_v1",
                                                                plural: !0,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "module_type", storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserBusinessEditableModuleV1",
                                                                        kind: "LinkedField",
                                                                        name: "module_data",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "module_id", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: null,
                                                                                kind: "LinkedField",
                                                                                name: "profile_module",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    r,
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "AboutModuleConfig",
                                                                                                kind: "LinkedField",
                                                                                                name: "config",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_call", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_sms", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enable_location_map", storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "AboutModuleData",
                                                                                                kind: "LinkedField",
                                                                                                name: "data",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "BusinessAddressResponse",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "address",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "formatted_address", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "address_line1", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "postal_code", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "administrative_area", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "city", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "country", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "ApiShortenedUrl", kind: "LinkedField", name: "website", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "display", storageKey: null }], storageKey: null },
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "BusinessContact",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "contact",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, concreteType: "BusinessContactEmail", kind: "LinkedField", name: "email", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "email_address", storageKey: null }], storageKey: null },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "BusinessContactPhone",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "phone",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "country_code", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "country_iso_code", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "number", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "BusinessTimezone", kind: "LinkedField", name: "timezone", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null },
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "BusinessOpenTimesResponse",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "open_times",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "open_times_type", storageKey: null }),
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "BusinessOpenTimesRegular",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "regular",
                                                                                                                plural: !0,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "weekday", storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "BusinessOpenTimesRegularSlot",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "slots",
                                                                                                                        plural: !0,
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: "HourMinute",
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "open",
                                                                                                                                plural: !1,
                                                                                                                                selections: (i = [
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "hour", storageKey: null },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "minute", storageKey: null },
                                                                                                                                ]),
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                            { alias: null, args: null, concreteType: "HourMinute", kind: "LinkedField", name: "close", plural: !1, selections: i, storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "GoogleVerificationData", kind: "LinkedField", name: "google_verification_data", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "static_map_image_url", storageKey: null }], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        type: "AboutModule",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserBusinessModulesResponse",
                                                        kind: "LinkedField",
                                                        name: "profilemodules",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserBusinessModuleResponseV1",
                                                                kind: "LinkedField",
                                                                name: "v1",
                                                                plural: !0,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "profile_module",
                                                                        plural: !1,
                                                                        selections: [
                                                                            r,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "AboutModuleData",
                                                                                        kind: "LinkedField",
                                                                                        name: "data",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "BusinessOpenTimesResponse",
                                                                                                kind: "LinkedField",
                                                                                                name: "open_times",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    t,
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_open", storageKey: null },
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "OpenCloseTimeNext",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "opens",
                                                                                                        plural: !1,
                                                                                                        selections: (o = [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                                                            { alias: null, args: null, concreteType: "HourMinute", kind: "LinkedField", name: "time", plural: !1, selections: i, storageKey: null },
                                                                                                        ]),
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, concreteType: "OpenCloseTimeNext", kind: "LinkedField", name: "closes", plural: !1, selections: o, storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                type: "AboutModule",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    d,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "PtT7DMn9eI8yFh-jkG-fGg", metadata: {}, name: "LocationSpotlightQuery", operationKind: "query", text: null },
                };
            u.hash = "972f257e2073762a2ddb9266c1ab3f08";
            const c = u;
        },
        661810: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = a(202784),
                s = a(325686),
                r = a(392237);
            function t({ spacing: e, style: l }) {
                return n.createElement(s.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? r.default.theme.spaces[e] : void 0 }, l] });
            }
            const i = r.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        449479: (e, l, a) => {
            a.d(l, { Z: () => b });
            var n = a(202784),
                s = a(325686),
                r = a(913973),
                t = a(731708),
                i = a(950822),
                o = a(466792),
                d = a(58881),
                u = a(530732),
                c = a(352924),
                p = a(392237);
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, c.F)()),
                        (this.descriptionId = (0, c.F)()),
                        (this._handleChange = (e) => {
                            const { checked: l, onChange: a } = this.props;
                            a && !l && a(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": l, checked: a, disabled: c, helpText: g, label: y, name: k, testID: h } = this.props,
                        b = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        _ = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        F = a ? b : _;
                    return n.createElement(o.Z, { disabled: c }, (o) => n.createElement(s.Z, { role: "label", style: [m.root, !c && m.interactive], testID: h }, n.createElement(s.Z, { style: m.topContainer }, n.createElement(t.ZP, { id: this.labelId }, y), n.createElement(s.Z, { style: m.radioContainer }, n.createElement(u.Z, { interactiveStyles: F, interactivityState: o, style: m.radioBackground }, n.createElement(s.Z, { style: [m.circle, a && m.circleActive, c && m.circleDisabled, a && c && m.circleCheckedAndDisabled] }, a ? n.createElement(r.default, { style: m.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": l, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: a, disabled: c, name: k, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), g ? n.createElement(t.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, g) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            g.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                y = g,
                k = "radioGroup";
            let h = 1;
            class b extends n.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: l, onChange: a } = this.props;
                            a(l, e);
                        }),
                        (this._setRadioRef = (e, l) => (a) => {
                            (this._radioRefs[e] = a), l && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                l = e ? this._radioRefs[e] : this._radioRefs[0];
                            l && l.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${h}_LABEL`),
                        (h += 1);
                }
                render() {
                    const { "aria-label": e, description: l, disabled: a, label: r, name: i, options: o, value: d } = this.props;
                    return n.createElement(
                        s.Z,
                        { "aria-label": e, "aria-labelledby": r && !e ? this._labelId : void 0, role: "radiogroup", style: a && _.disabled, testID: `${k}${i}` },
                        r ? n.createElement(s.Z, { id: this._labelId, role: "label", style: _.header }, n.createElement(t.ZP, { style: _.label, weight: "bold" }, r), l ? n.createElement(t.ZP, { color: "gray700", size: "subtext2" }, l) : null) : null,
                        o.map((e, l) => n.createElement(y, { "aria-posinset": l + 1, "aria-setsize": o.length, checked: e.value === d, disabled: a, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(l, e.value === d), testID: e.testID })),
                    );
                }
            }
            b.defaultProps = { disabled: !1 };
            const _ = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = a(202784),
                s = a(325686),
                r = a(449479),
                t = a(392237);
            const i = (e) => n.createElement(s.Z, { style: o.root }, n.createElement(r.Z, e)),
                o = t.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        88307: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n = a(202784),
                s = a(325686),
                r = a(731708),
                t = a(392237);
            class i extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: l } = this.props;
                            return l && e ? n.createElement(r.ZP, { link: l, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: l, learnMoreLink: a, subtext: t, withBottomBorder: i } = this.props;
                    return n.createElement(s.Z, { style: [o.root, i && o.bottomBorder] }, n.createElement(r.ZP, null, e), t ? (l && a ? this._renderSubtextAndLink() : n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t)) : null);
                }
            }
            i.defaultProps = { withBottomBorder: !0 };
            const o = t.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = i;
        },
        662678: (e, l, a) => {
            a.d(l, { G: () => s, Z: () => n });
            a(136728);
            const n = function (e, l) {
                return s(e, l);
            };
            function s(e, l) {
                return e.reduce(
                    (a, n, s) => {
                        const r = l ? l(n, s, e) : !!n;
                        return r && a[0].push(n), !r && a[1].push(n), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileLocationSpotlight-6107ac1a.f797928a.js.map
