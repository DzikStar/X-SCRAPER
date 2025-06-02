"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileLocationSpotlight-6107ac1a"],
    {
        837777: (e, l, n) => {
            n.d(l, { Z: () => c });
            var a,
                t,
                s,
                r,
                i,
                o,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "rest_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "LocationSpotlightQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (t = [
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
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "LocationSpotlightQuery",
                        selections: [
                            {
                                alias: "user",
                                args: t,
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
                                            (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
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
                                                                                    s,
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
                                                                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "open_times_type", storageKey: null }),
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
                                                                            s,
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
                                                                                                    r,
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
        661810: (e, l, n) => {
            n.d(l, { Z: () => r });
            var a = n(202784),
                t = n(325686),
                s = n(392237);
            function r({ spacing: e, style: l }) {
                return a.createElement(t.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? s.default.theme.spaces[e] : void 0 }, l] });
            }
            const i = s.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        779610: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a = n(202784),
                t = n(325686),
                s = n(191796),
                r = n(58399),
                i = n(731708),
                o = n(952428),
                d = n(392237);
            const u = (e) => {
                    const { decoration: l, description: n, disabled: u = !1, isActive: p = !1, label: g, link: m, onPress: y, paddingHorizontal: k, renderRightContent: h, role: b = "tab", styleOverride: f, testID: _ = "pivot", thumbnail: F, thumbnailSize: K, withoutArrow: C = !1 } = e,
                        L = [c.thumbnailContainer, "medium" === K && c.thumbnailContainerMedium],
                        S = "string" == typeof g ? a.createElement(i.ZP, null, g) : g,
                        T = "object" == typeof m && m.external && !m.openInSameFrame,
                        v = n ? ("string" == typeof n ? a.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${_}-description` }, n) : n) : null,
                        E = a.useMemo(() => ("space0" === k ? { paddingHorizontal: 0 } : { paddingHorizontal: k ? d.default.theme.spaces[k] : d.default.theme.componentDimensions.gutterHorizontal }), [k]);
                    return a.createElement(o.Z, { "aria-selected": "tab" === b ? p : null, disabled: u, link: u ? void 0 : m, onPress: y, role: b, style: [c.root, E, u && c.disabled, f], testID: _, withInteractiveStyling: !!m || !!y }, a.createElement(t.Z, { style: c.contentContainer }, F ? a.createElement(t.Z, { style: L }, F) : null, a.createElement(t.Z, { style: c.content }, S, v), h ? h() : null, (!m && !y) || u || C ? null : T ? a.createElement(s.default, { style: c.icon }) : a.createElement(r.default, { style: c.icon })), l);
                },
                c = d.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${d.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, l, n) => {
            n.d(l, { Z: () => b });
            var a = n(202784),
                t = n(325686),
                s = n(913973),
                r = n(731708),
                i = n(950822),
                o = n(466792),
                d = n(58881),
                u = n(530732),
                c = n(352924),
                p = n(392237);
            class g extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, c.F)()),
                        (this.descriptionId = (0, c.F)()),
                        (this._handleChange = (e) => {
                            const { checked: l, onChange: n } = this.props;
                            n && !l && n(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": l, checked: n, disabled: c, helpText: g, label: y, name: k, testID: h } = this.props,
                        b = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        f = d.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        _ = n ? b : f;
                    return a.createElement(o.Z, { disabled: c }, (o) => a.createElement(t.Z, { role: "label", style: [m.root, !c && m.interactive], testID: h }, a.createElement(t.Z, { style: m.topContainer }, a.createElement(r.ZP, { id: this.labelId }, y), a.createElement(t.Z, { style: m.radioContainer }, a.createElement(u.Z, { interactiveStyles: _, interactivityState: o, style: m.radioBackground }, a.createElement(t.Z, { style: [m.circle, n && m.circleActive, c && m.circleDisabled, n && c && m.circleCheckedAndDisabled] }, n ? a.createElement(s.default, { style: m.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": l, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: c, name: k, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), g ? a.createElement(r.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, g) : null));
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
            class b extends a.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: l, onChange: n } = this.props;
                            n(l, e);
                        }),
                        (this._setRadioRef = (e, l) => (n) => {
                            (this._radioRefs[e] = n), l && (this._radioRefs.checked = e);
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
                    const { "aria-label": e, description: l, disabled: n, label: s, name: i, options: o, value: d } = this.props;
                    return a.createElement(
                        t.Z,
                        { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "radiogroup", style: n && f.disabled, testID: `${k}${i}` },
                        s ? a.createElement(t.Z, { id: this._labelId, role: "label", style: f.header }, a.createElement(r.ZP, { style: f.label, weight: "bold" }, s), l ? a.createElement(r.ZP, { color: "gray700", size: "subtext2" }, l) : null) : null,
                        o.map((e, l) => a.createElement(y, { "aria-posinset": l + 1, "aria-setsize": o.length, checked: e.value === d, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(l, e.value === d), testID: e.testID })),
                    );
                }
            }
            b.defaultProps = { disabled: !1 };
            const f = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a = n(202784),
                t = n(731708),
                s = n(392237);
            class r extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: l } = this.props;
                            return a.createElement(t.ZP, { link: l, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: l, learnMoreLink: n } = this.props,
                        s = i.root;
                    return l && n ? a.createElement(t.ZP, { color: "gray700", size: "subtext2", style: s }, e, " ", this._renderLearnMore()) : a.createElement(t.ZP, { color: "gray700", size: "subtext2", style: s }, e);
                }
            }
            const i = s.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                o = r;
        },
        101890: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = n(202784),
                t = n(325686),
                s = n(449479),
                r = n(392237);
            const i = (e) => a.createElement(t.Z, { style: o.root }, a.createElement(s.Z, e)),
                o = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        88307: (e, l, n) => {
            n.d(l, { Z: () => d });
            var a = n(202784),
                t = n(325686),
                s = n(731708),
                r = n(392237);
            class i extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: l } = this.props;
                            return l && e ? a.createElement(s.ZP, { link: l, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: l, learnMoreLink: n, subtext: r, withBottomBorder: i } = this.props;
                    return a.createElement(t.Z, { style: [o.root, i && o.bottomBorder] }, a.createElement(s.ZP, null, e), r ? (l && n ? this._renderSubtextAndLink() : a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, r)) : null);
                }
            }
            i.defaultProps = { withBottomBorder: !0 };
            const o = r.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = i;
        },
        662678: (e, l, n) => {
            n.d(l, { G: () => t, Z: () => a });
            n(136728);
            const a = function (e, l) {
                return t(e, l);
            };
            function t(e, l) {
                return e.reduce(
                    (n, a, t) => {
                        const s = l ? l(a, t, e) : !!a;
                        return s && n[0].push(a), !s && n[1].push(a), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileLocationSpotlight-6107ac1a.155f6b0a.js.map
