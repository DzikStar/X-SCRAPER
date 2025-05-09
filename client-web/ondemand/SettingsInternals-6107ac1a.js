(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-6107ac1a"],
    {
        762815: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var r,
                i,
                a,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(i = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [i, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, a], type: "User", abstractKey: null },
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
                    params: { id: "_1MJNdYH_NfG1HVMWvOISA", metadata: {}, name: "useIDVerificationProcessVendorQuery", operationKind: "query", text: null },
                };
            o.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const s = o;
        },
        786033: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var r,
                i,
                a,
                o,
                s,
                l = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (s = [
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
                                    { kind: "InlineFragment", selections: (o = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: o, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, r, a], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "88a4b93bad19f92c67d5957375d338be";
            const d = l;
        },
        362075: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                o = n(688715),
                s = n(950822),
                l = n(386802),
                d = n(392237);
            class c extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = i.createRef()),
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: n, dangerouslyDisableSandbox: r, src: l, style: d, title: c } = this.props,
                        { isModal: p } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        f = (0, s.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, o.ju)(l), style: u.iframe, title: c, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${n ? " allow-top-navigation" : ""}` }) });
                    return i.createElement(a.Z, { style: p ? [u.root, u.modalPadding, d] : [u.root, d] }, f);
                }
            }
            c.contextType = l.t;
            const u = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = i.forwardRef((e, t) => i.createElement(c, (0, r.Z)({ forwardedRef: t }, e)));
        },
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var r = n(202784),
                i = n(325686),
                a = n(731708),
                o = n(392237);
            class s extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? r.createElement(a.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: o, withBottomBorder: s } = this.props;
                    return r.createElement(i.Z, { style: [l.root, s && l.bottomBorder] }, r.createElement(a.ZP, null, e), o ? (t && n ? this._renderSubtextAndLink() : r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, o)) : null);
                }
            }
            s.defaultProps = { withBottomBorder: !0 };
            const l = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = s;
        },
        80512: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var r = n(202784),
                i = n(325686),
                a = n(815858),
                o = n(731708),
                s = n(449479),
                l = n(392237),
                d = n(451566);
            let c = 1;
            class u extends r.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: n, onChange: r, options: i, value: a } = this.props;
                            r(t, a === n ? e?.value || i[0].value : n);
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
                    const { "aria-label": e, description: t, disabled: n, label: l, name: c, offValue: u, onChange: h, options: f, value: m } = this.props;
                    return r.createElement(i.Z, { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "group", style: [p.root, n && p.disabled] }, r.createElement(r.Fragment, null, l ? r.createElement(i.Z, { id: this._labelId, role: "label", style: p.header }, r.createElement(i.Z, { style: p.label }, r.createElement(o.ZP, { weight: "bold" }, l), r.createElement(d.Z, { disabled: n, onValueChange: this._handleGateToggle, value: m !== u })), t ? r.createElement(o.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, f && r.createElement(a.Z, { onAnimateComplete: this._handleAnimationComplete, show: m !== u }, r.createElement(i.Z, null, r.createElement(i.Z, { style: p.radioGroup, tabIndex: 0 }, r.createElement(s.Z, { "aria-label": e || l, disabled: n, name: c, onChange: h, options: f, ref: this._setRadioGroupRef, value: m }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => S });
            var r = n(807896),
                i = n(202784),
                a = n(194504),
                o = n(235902),
                s = n(392237),
                l = n(325686),
                d = n(674132),
                c = n.n(d),
                u = n(912021),
                p = n(516951),
                h = n(731708),
                f = n(310088),
                m = n(175993),
                g = n(58881),
                y = n(530732);
            const b = c().d2414d31,
                v = () => c().ce4e85ae,
                w = c().fb9f6f39;
            class _ extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: r, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: r, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, r) => {
                            const i = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
                            return n || r ? (e || t ? i : a) : e ? i : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: r, children: a, color: o, isActive: d, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: m, retainScrollPosition: _, style: x, to: C } = this.props,
                        { location: S } = this.state,
                        R = C ? this._getMemoizedLink(C, _) : void 0,
                        E = d ? d(C) : S?.pathname === R?.pathname,
                        L = g.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        I = m ? "medium" : E ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: L, link: R, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? k.pill : k.link, u && E ? k.active : null, c ? (u ? k.compactPill : k.compactLink) : null, p ? k.roundedRect : null, x], withoutInteractiveStyles: m || u }, ({ isFocused: t, isHovered: d }) => i.createElement(l.Z, { style: u && k.flexGrow }, i.createElement(h.ZP, { size: m ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(E, d, m, u) }, c && k.compactText, m && t && k.focusedText], weight: I }, e && i.createElement(e, { style: k.icon }), a, m || u ? null : i.createElement(l.Z, { style: E && [k.border, { backgroundColor: s.default.theme.colors[o] }] })), n ? i.createElement(f.Z, { count: n, standalone: !0, style: [k.badge, n >= 10 && k.multiDigitBadge, n >= 20 && k.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: b, withBorder: !1 }) : r ? i.createElement(f.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (_.contextType = m.Z), (_.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = s.default.create((e) => ({
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
                x = _,
                C = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: d, style: c, visibleItemIndex: u }) => {
                    const p = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = o.ZP.useProps(),
                        f = h() && !s,
                        m = i.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: a, ...o }, d) => {
                                    const c = f ? [C.linkRedesign, 0 === d && C.firstLinkRedesign, e && 0 === d && C.withNoPaddingStart] : void 0;
                                    return i.createElement(x, (0, r.Z)({ viewType: a }, o, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: f, style: c }), t);
                                }),
                            [e, n, s, l, f, d],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && C.gap, childrenStyle: !f && C.flexGrow, key: p, style: [s ? null : C.segmentedControl, f && C.leftAligned, c], visibleItemIndex: u }, m);
                };
        },
        949874: (e) => {
            e.exports = function (e, t, n) {
                if (((e = e.replace(/\r?\n/g, "")), null != t && t < 5)) throw new Error("Maximum length must not be less than 5");
                if (((t = null != t ? t : 78), e.length <= t)) return e;
                t -= 4;
                var r = [],
                    i = e.length,
                    a = 0,
                    o = 0;
                if (!n) for (; ~(a = e.lastIndexOf(" ", t + o)) && !(a <= o); ) e.slice(o).length > t ? (r.push((o ? " " : "") + e.slice(o, a)), (o = a + 1)) : (r.push((o ? " " : "") + e.slice(o)), (o = i));
                for (t++; o < i; ) r.push(e.slice(o, (o += t)));
                return r.join("\r\n ");
            };
        },
        819858: (e, t, n) => {
            var r = n(691925),
                i = n(21681);
            function a(e, t, n) {
                Array.isArray(e[t]) ? e[t].push(n) : null != e[t] ? (e[t] = [e[t], n]) : (e[t] = n);
            }
            function o(e, t) {
                var n = t.split("="),
                    i = r(n[0]),
                    o = n[1];
                return (
                    (null != o && "" !== o) || ((o = n[0]), (i = "type")),
                    "type" === i
                        ? (o
                              .toLowerCase()
                              .split(",")
                              .forEach(function (t) {
                                  a(e, i, t);
                              }),
                          e)
                        : (a(e, i, o), e)
                );
            }
            e.exports = function (e) {
                for (var t = {}, n = null, s = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, l = e.length - 1, d = 1; d < l; d++) {
                    n = e[d];
                    var c = s.exec(n);
                    if (c) {
                        var u = c[1].split("."),
                            p = u.pop(),
                            h = u.pop(),
                            f = c[3],
                            m = (c[2] ? c[2].replace(/^;|;$/g, "").split(";") : []).reduce(o, h ? { group: h } : {}),
                            g = r(p);
                        a(t, g, new i(g, f, m));
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
                        for (var t = (this.group ? this.group + "." : "") + n(this._field), r = Object.keys(this), i = [], a = 0; a < r.length; a++) "group" !== r[a] && i.push(n(r[a]) + "=" + this[r[a]]);
                        return t + (i.length ? ";" + i.join(";") : i) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
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
                    for (var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), n = [], i = 0; i < t.length; i++) n.push(new r().parse(t[i]));
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
                    for (var i = Object.keys(e.data), a = "", o = 0; o < i.length; o++)
                        if ("version" !== i[o])
                            if (((a = e.data[i[o]]), Array.isArray(a))) for (var s = 0; s < a.length; s++) a[s].isEmpty() || n.push(r.foldLine(a[s].toString(t), 75));
                            else a.isEmpty() || n.push(r.foldLine(a.toString(t), 75));
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
                        var i = new r.Property(e, t, n);
                        return this.addProperty(i), this;
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
                            i = t[1],
                            a = t[t.length - 1];
                        if (!/BEGIN:VCARD/i.test(n)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + n + '"');
                        if (!/END:VCARD/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + a + '"');
                        if (!/VERSION:\d\.\d/i.test(i)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + i + '"');
                        if (((this.version = i.substring(8, 11)), !r.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = r.parseLines(t)), this;
                    },
                    toString: function (e, t) {
                        return (e = e || this.version), r.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var t = Object.keys(this.data), n = [["version", {}, "text", e]], r = null, i = 0; i < t.length; i++)
                            if ("version" !== t[i])
                                if (((r = this.data[t[i]]), Array.isArray(r))) for (var a = 0; a < r.length; a++) n.push(r[a].toJSON());
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-6107ac1a.0caeddfa.js.map
