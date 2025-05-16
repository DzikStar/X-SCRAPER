(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-6107ac1a"],
    {
        507421: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r,
                a,
                i,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PasskeyManagement_Query",
                        selections: [
                            {
                                alias: null,
                                args: r,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [i, a], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            a,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "8fWHnipHAqfhgFo-rAXk5w", metadata: {}, name: "PasskeyManagement_Query", operationKind: "query", text: null },
                };
            s.hash = "b177c906c03e19affd73768f7a0ec360";
            const l = s;
        },
        762815: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r,
                a,
                i,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(a = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: r,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [a, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, i], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "_1MJNdYH_NfG1HVMWvOISA", metadata: {}, name: "useIDVerificationProcessVendorQuery", operationKind: "query", text: null },
                };
            s.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const l = s;
        },
        786033: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var r,
                a,
                i,
                s,
                l,
                o = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "error_url", variableName: "error_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "success_url", variableName: "success_url" },
                                    { kind: "Variable", name: "verification_flow", variableName: "verification_flow" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "start_identity_verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: (s = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: s, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [a, r, i], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: l },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const d = o;
        },
        362075: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var r = n(807896),
                a = n(202784),
                i = n(325686),
                s = n(688715),
                l = n(950822),
                o = n(386802),
                d = n(392237);
            class c extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = a.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: n } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return n ? n(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let r;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    r = JSON.parse(e.data);
                                } catch (t) {
                                    return void (n && n(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(r);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: n, dangerouslyDisableSandbox: r, src: o, style: d, title: c } = this.props,
                        { isModal: p } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, l.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, s.ju)(o), style: u.iframe, title: c, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${n ? " allow-top-navigation" : ""}` }) });
                    return a.createElement(i.Z, { style: p ? [u.root, u.modalPadding, d] : [u.root, d] }, m);
                }
            }
            c.contextType = o.t;
            const u = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = a.forwardRef((e, t) => a.createElement(c, (0, r.Z)({ forwardedRef: t }, e)));
        },
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var r = n(202784),
                a = n(325686),
                i = n(731708),
                s = n(392237);
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? r.createElement(i.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: s, withBottomBorder: l } = this.props;
                    return r.createElement(a.Z, { style: [o.root, l && o.bottomBorder] }, r.createElement(i.ZP, null, e), s ? (t && n ? this._renderSubtextAndLink() : r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, s)) : null);
                }
            }
            l.defaultProps = { withBottomBorder: !0 };
            const o = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = l;
        },
        80512: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var r = n(202784),
                a = n(325686),
                i = n(815858),
                s = n(731708),
                l = n(449479),
                o = n(392237),
                d = n(451566);
            let c = 1;
            class u extends r.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: n, onChange: r, options: a, value: i } = this.props;
                            r(t, i === n ? e?.value || a[0].value : n);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${c}_LABEL`),
                        (c += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: o, name: c, offValue: u, onChange: h, options: m, value: f } = this.props;
                    return r.createElement(a.Z, { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "group", style: [p.root, n && p.disabled] }, r.createElement(r.Fragment, null, o ? r.createElement(a.Z, { id: this._labelId, role: "label", style: p.header }, r.createElement(a.Z, { style: p.label }, r.createElement(s.ZP, { weight: "bold" }, o), r.createElement(d.Z, { disabled: n, onValueChange: this._handleGateToggle, value: f !== u })), t ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && r.createElement(i.Z, { onAnimateComplete: this._handleAnimationComplete, show: f !== u }, r.createElement(a.Z, null, r.createElement(a.Z, { style: p.radioGroup, tabIndex: 0 }, r.createElement(l.Z, { "aria-label": e || o, disabled: n, name: c, onChange: h, options: m, ref: this._setRadioGroupRef, value: f }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => S });
            var r = n(807896),
                a = n(202784),
                i = n(194504),
                s = n(235902),
                l = n(392237),
                o = n(325686),
                d = n(332920),
                c = n.n(d),
                u = n(912021),
                p = n(516951),
                h = n(731708),
                m = n(310088),
                f = n(175993),
                g = n(58881),
                y = n(530732);
            const b = c().d2414d31,
                v = () => c().ce4e85ae,
                k = c().fb9f6f39;
            class w extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: r, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: r, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, r) => {
                            const a = l.default.theme.colors.text,
                                i = l.default.theme.colors.gray700;
                            return n || r ? (e || t ? a : i) : e ? a : i;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: r, children: i, color: s, isActive: d, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: f, retainScrollPosition: w, style: x, to: C } = this.props,
                        { location: S } = this.state,
                        R = C ? this._getMemoizedLink(C, w) : void 0,
                        L = d ? d(C) : S?.pathname === R?.pathname,
                        E = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        I = f ? "medium" : L ? "bold" : "medium";
                    return a.createElement(y.Z, { "aria-label": t, "aria-selected": L, focusable: !!L, interactiveStyles: E, link: R, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? _.pill : _.link, u && L ? _.active : null, c ? (u ? _.compactPill : _.compactLink) : null, p ? _.roundedRect : null, x], withoutInteractiveStyles: f || u }, ({ isFocused: t, isHovered: d }) => a.createElement(o.Z, { style: u && _.flexGrow }, a.createElement(h.ZP, { size: f ? "headline2" : void 0, style: [_.text, { color: this._getTextColor(L, d, f, u) }, c && _.compactText, f && t && _.focusedText], weight: I }, e && a.createElement(e, { style: _.icon }), i, f || u ? null : a.createElement(o.Z, { style: L && [_.border, { backgroundColor: l.default.theme.colors[s] }] })), n ? a.createElement(m.Z, { count: n, standalone: !0, style: [_.badge, n >= 10 && _.multiDigitBadge, n >= 20 && _.truncatedCountBadge], truncatedCountFormatter: k, unreadCountLabel: b, withBorder: !1 }) : r ? a.createElement(m.Z, { pip: !0, standalone: !0, style: _.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (w.contextType = f.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const _ = l.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                x = w,
                C = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: o, links: d, style: c, visibleItemIndex: u }) => {
                    const p = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = s.ZP.useProps(),
                        m = h() && !l,
                        f = a.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: i, ...s }, d) => {
                                    const c = m ? [C.linkRedesign, 0 === d && C.firstLinkRedesign, e && 0 === d && C.withNoPaddingStart] : void 0;
                                    return a.createElement(x, (0, r.Z)({ viewType: i }, s, { isCompact: n, isPillLink: l, isRoundedRect: o, isWebRedesign: m, style: c }), t);
                                }),
                            [e, n, l, o, m, d],
                        );
                    return a.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: l && C.gap, childrenStyle: !m && C.flexGrow, key: p, style: [l ? null : C.segmentedControl, m && C.leftAligned, c], visibleItemIndex: u }, f);
                };
        },
        949874: (e) => {
            e.exports = function (e, t, n) {
                if (((e = e.replace(/\r?\n/g, "")), null != t && t < 5)) throw new Error("Maximum length must not be less than 5");
                if (((t = null != t ? t : 78), e.length <= t)) return e;
                t -= 4;
                var r = [],
                    a = e.length,
                    i = 0,
                    s = 0;
                if (!n) for (; ~(i = e.lastIndexOf(" ", t + s)) && !(i <= s); ) e.slice(s).length > t ? (r.push((s ? " " : "") + e.slice(s, i)), (s = i + 1)) : (r.push((s ? " " : "") + e.slice(s)), (s = a));
                for (t++; s < a; ) r.push(e.slice(s, (s += t)));
                return r.join("\r\n ");
            };
        },
        819858: (e, t, n) => {
            var r = n(691925),
                a = n(21681);
            function i(e, t, n) {
                Array.isArray(e[t]) ? e[t].push(n) : null != e[t] ? (e[t] = [e[t], n]) : (e[t] = n);
            }
            function s(e, t) {
                var n = t.split("="),
                    a = r(n[0]),
                    s = n[1];
                return (
                    (null != s && "" !== s) || ((s = n[0]), (a = "type")),
                    "type" === a
                        ? (s
                              .toLowerCase()
                              .split(",")
                              .forEach(function (t) {
                                  i(e, a, t);
                              }),
                          e)
                        : (i(e, a, s), e)
                );
            }
            e.exports = function (e) {
                for (var t = {}, n = null, l = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, o = e.length - 1, d = 1; d < o; d++) {
                    n = e[d];
                    var c = l.exec(n);
                    if (c) {
                        var u = c[1].split("."),
                            p = u.pop(),
                            h = u.pop(),
                            m = c[3],
                            f = (c[2] ? c[2].replace(/^;|;$/g, "").split(";") : []).reduce(s, h ? { group: h } : {}),
                            g = r(p);
                        i(t, g, new a(g, m, f));
                    }
                }
                return t;
            };
        },
        21681: (e) => {
            function t(e, n, r) {
                if (!(this instanceof t)) return new t(n);
                null != r && Object.assign(this, r), (this._field = e), (this._data = n), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function n(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (t.fromJSON = function (e) {
                var n = e[0],
                    r = e[1];
                return /text/i.test(e[2]) || (r.value = e[2]), new t(n, Array.isArray(e[3]) ? e[3].join(";") : e[3], r);
            }),
                (t.prototype = {
                    constructor: t,
                    is: function (e) {
                        return (e = (e + "").toLowerCase()), Array.isArray(this.type) ? this.type.indexOf(e) : this.type === e;
                    },
                    isEmpty: function () {
                        return null == this._data && 0 === Object.keys(this).length;
                    },
                    clone: function () {
                        return new t(this._field, this._data, this);
                    },
                    toString: function (e) {
                        for (var t = (this.group ? this.group + "." : "") + n(this._field), r = Object.keys(this), a = [], i = 0; i < r.length; i++) "group" !== r[i] && a.push(n(r[i]) + "=" + this[r[i]]);
                        return t + (a.length ? ";" + a.join(";") : a) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
                    },
                    valueOf: function () {
                        return this._data;
                    },
                    toJSON: function () {
                        var e = Object.assign({}, this);
                        "text" === e.value && ((e.value = void 0), delete e.value);
                        var t = [this._field, e, this.value || "text"];
                        switch (this._field) {
                            default:
                                t.push(this._data);
                                break;
                            case "adr":
                            case "n":
                                t.push(this._data.split(";"));
                        }
                        return t;
                    },
                }),
                (e.exports = t);
        },
        588960: (e, t, n) => {
            function r() {
                if (!(this instanceof r)) return new r();
                (this.version = r.versions[r.versions.length - 1]), (this.data = {});
            }
            (r.mimeType = "text/vcard"),
                (r.extension = ".vcf"),
                (r.versions = ["2.1", "3.0", "4.0"]),
                (r.foldLine = n(949874)),
                (r.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (r.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== r.versions.indexOf(e);
                }),
                (r.parse = function (e) {
                    for (var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), n = [], a = 0; a < t.length; a++) n.push(new r().parse(t[a]));
                    return n;
                }),
                (r.parseLines = n(819858)),
                (r.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new r();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var t = new r();
                    return (
                        e[1].forEach(function (e) {
                            t.addProperty(r.Property.fromJSON(e));
                        }),
                        t
                    );
                }),
                (r.format = function (e, t) {
                    if (((t = t || e.version || r.versions[r.versions.length - 1]), !r.isSupported(t))) throw new Error('Unsupported vCard version "' + t + '"');
                    var n = [];
                    n.push("BEGIN:VCARD"), n.push("VERSION:" + t);
                    for (var a = Object.keys(e.data), i = "", s = 0; s < a.length; s++)
                        if ("version" !== a[s])
                            if (((i = e.data[a[s]]), Array.isArray(i))) for (var l = 0; l < i.length; l++) i[l].isEmpty() || n.push(r.foldLine(i[l].toString(t), 75));
                            else i.isEmpty() || n.push(r.foldLine(i.toString(t), 75));
                    return n.push("END:VCARD"), n.join("\n");
                }),
                (r.Property = n(21681)),
                (r.prototype = {
                    constructor: r,
                    get: function (e) {
                        return null == this.data[e]
                            ? this.data[e]
                            : Array.isArray(this.data[e])
                              ? this.data[e].map(function (e) {
                                    return e.clone();
                                })
                              : this.data[e].clone();
                    },
                    set: function (e, t, n) {
                        return this.setProperty(new r.Property(e, t, n));
                    },
                    add: function (e, t, n) {
                        var a = new r.Property(e, t, n);
                        return this.addProperty(a), this;
                    },
                    setProperty: function (e) {
                        return (this.data[e._field] = e), this;
                    },
                    addProperty: function (e) {
                        var t = e._field;
                        return Array.isArray(this.data[t]) ? this.data[t].push(e) : null != this.data[t] ? (this.data[t] = [this.data[t], e]) : (this.data[t] = e), this;
                    },
                    parse: function (e) {
                        var t = r.normalize(e).split(/\r?\n/g),
                            n = t[0],
                            a = t[1],
                            i = t[t.length - 1];
                        if (!/BEGIN:VCARD/i.test(n)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + n + '"');
                        if (!/END:VCARD/i.test(i)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + i + '"');
                        if (!/VERSION:\d\.\d/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + a + '"');
                        if (((this.version = a.substring(8, 11)), !r.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = r.parseLines(t)), this;
                    },
                    toString: function (e, t) {
                        return (e = e || this.version), r.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var t = Object.keys(this.data), n = [["version", {}, "text", e]], r = null, a = 0; a < t.length; a++)
                            if ("version" !== t[a])
                                if (((r = this.data[t[a]]), Array.isArray(r))) for (var i = 0; i < r.length; i++) n.push(r[i].toJSON());
                                else n.push(r.toJSON());
                        return ["vcard", n];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = r);
        },
        691925: (e) => {
            "use strict";
            e.exports = function () {
                var e = [].map
                    .call(arguments, function (e) {
                        return e.trim();
                    })
                    .filter(function (e) {
                        return e.length;
                    })
                    .join("-");
                return e.length
                    ? 1 === e.length
                        ? e.toLowerCase()
                        : /[_.\- ]+/.test(e)
                          ? (e = (function (e) {
                                for (var t = !1, n = 0; n < e.length; n++) {
                                    var r = e.charAt(n);
                                    t && /[a-zA-Z]/.test(r) && r.toUpperCase() === r ? ((e = e.substr(0, n) + "-" + e.substr(n)), (t = !1), n++) : (t = r.toLowerCase() === r);
                                }
                                return e;
                            })(e))
                                .replace(/^[_.\- ]+/, "")
                                .toLowerCase()
                                .replace(/[_.\- ]+(\w|$)/g, function (e, t) {
                                    return t.toUpperCase();
                                })
                          : e === e.toUpperCase()
                            ? e.toLowerCase()
                            : e[0] !== e[0].toLowerCase()
                              ? e[0].toLowerCase() + e.slice(1)
                              : e
                    : "";
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-6107ac1a.7c2ce25a.js.map
