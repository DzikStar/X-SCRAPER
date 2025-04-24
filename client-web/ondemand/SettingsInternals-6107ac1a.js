(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-6107ac1a"],
    {
        762815: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => s });
            var n,
                i,
                a,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(i = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW", path: "viewer.user_results.result" }], storageKey: null }, action: "THROW", path: "viewer.user_results" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW", path: "viewer" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
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
        786033: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var n,
                i,
                a,
                o,
                s,
                l = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
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
                    operation: { argumentDefinitions: [i, n, a], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "88a4b93bad19f92c67d5957375d338be";
            const d = l;
        },
        362075: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var n = r(807896),
                i = r(202784),
                a = r(325686),
                o = r(688715),
                s = r(950822),
                l = r(386802),
                d = r(392237);
            class c extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = i.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: r } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return r ? r(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let n;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    n = JSON.parse(e.data);
                                } catch (t) {
                                    return void (r && r(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(n);
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: r, dangerouslyDisableSandbox: n, src: l, style: d, title: c } = this.props,
                        { isModal: p } = this.context,
                        f = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        h = (0, s.Z)("iframe", { allow: `${f.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, o.ju)(l), style: u.iframe, title: c, ...(n ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${r ? " allow-top-navigation" : ""}` }) });
                    return i.createElement(a.Z, { style: p ? [u.root, u.modalPadding, d] : [u.root, d] }, h);
                }
            }
            c.contextType = l.t;
            const u = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = i.forwardRef((e, t) => i.createElement(c, (0, n.Z)({ forwardedRef: t }, e)));
        },
        88307: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var n = r(202784),
                i = r(325686),
                a = r(731708),
                o = r(392237);
            class s extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return n.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? n.createElement(a.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: r, subtext: o, withBottomBorder: s } = this.props;
                    return n.createElement(i.Z, { style: [l.root, s && l.bottomBorder] }, n.createElement(a.ZP, null, e), o ? (t && r ? this._renderSubtextAndLink() : n.createElement(a.ZP, { color: "gray700", size: "subtext2" }, o)) : null);
                }
            }
            s.defaultProps = { withBottomBorder: !0 };
            const l = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                d = s;
        },
        80512: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            var n = r(202784),
                i = r(325686),
                a = r(815858),
                o = r(731708),
                s = r(449479),
                l = r(392237),
                d = r(451566);
            let c = 1;
            class u extends n.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: r, onChange: n, options: i, value: a } = this.props;
                            n(t, a === r ? e?.value || i[0].value : r);
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
                    const { "aria-label": e, description: t, disabled: r, label: l, name: c, offValue: u, onChange: f, options: h, value: m } = this.props;
                    return n.createElement(i.Z, { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "group", style: [p.root, r && p.disabled] }, n.createElement(n.Fragment, null, l ? n.createElement(i.Z, { id: this._labelId, role: "label", style: p.header }, n.createElement(i.Z, { style: p.label }, n.createElement(o.ZP, { weight: "bold" }, l), n.createElement(d.Z, { disabled: r, onValueChange: this._handleGateToggle, value: m !== u })), t ? n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, h && n.createElement(a.Z, { onAnimateComplete: this._handleAnimationComplete, show: m !== u }, n.createElement(i.Z, null, n.createElement(i.Z, { style: p.radioGroup, tabIndex: 0 }, n.createElement(s.Z, { "aria-label": e || l, disabled: r, name: c, onChange: f, options: h, ref: this._setRadioGroupRef, value: m }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => R });
            var n = r(807896),
                i = r(202784),
                a = r(194504),
                o = r(235902),
                s = r(392237),
                l = r(325686),
                d = r(674132),
                c = r.n(d),
                u = r(912021),
                p = r(516951),
                f = r(731708),
                h = r(310088),
                m = r(175993),
                g = r(58881),
                y = r(530732);
            const v = c().d2414d31,
                b = () => c().ce4e85ae,
                w = c().fb9f6f39;
            class _ extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: r, query: n, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: r, query: n, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, r, n) => {
                            const i = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
                            return r || n ? (e || t ? i : a) : e ? i : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: r, badgePip: n, children: a, color: o, isActive: d, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: m, retainScrollPosition: _, style: x, to: C } = this.props,
                        { location: R } = this.state,
                        S = C ? this._getMemoizedLink(C, _) : void 0,
                        E = d ? d(C) : R?.pathname === S?.pathname,
                        P = g.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        L = m ? "medium" : E ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: P, link: S, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? k.pill : k.link, u && E ? k.active : null, c ? (u ? k.compactPill : k.compactLink) : null, p ? k.roundedRect : null, x], withoutInteractiveStyles: m || u }, ({ isFocused: t, isHovered: d }) => i.createElement(l.Z, { style: u && k.flexGrow }, i.createElement(f.ZP, { size: m ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(E, d, m, u) }, c && k.compactText, m && t && k.focusedText], weight: L }, e && i.createElement(e, { style: k.icon }), a, m || u ? null : i.createElement(l.Z, { style: E && [k.border, { backgroundColor: s.default.theme.colors[o] }] })), r ? i.createElement(h.Z, { count: r, standalone: !0, style: [k.badge, r >= 10 && k.multiDigitBadge, r >= 20 && k.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: v, withBorder: !1 }) : n ? i.createElement(h.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
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
                R = ({ alignFirstItem: e, "aria-label": t, isCompact: r, isPillLink: s, isRoundedRect: l, links: d, style: c, visibleItemIndex: u }) => {
                    const p = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: f } = o.ZP.useProps(),
                        h = f() && !s,
                        m = i.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: a, ...o }, d) => {
                                    const c = h ? [C.linkRedesign, 0 === d && C.firstLinkRedesign, e && 0 === d && C.withNoPaddingStart] : void 0;
                                    return i.createElement(x, (0, n.Z)({ viewType: a }, o, { isCompact: r, isPillLink: s, isRoundedRect: l, isWebRedesign: h, style: c }), t);
                                }),
                            [e, r, s, l, h, d],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && C.gap, childrenStyle: !h && C.flexGrow, key: p, style: [s ? null : C.segmentedControl, h && C.leftAligned, c], visibleItemIndex: u }, m);
                };
        },
        949874: (e) => {
            e.exports = function (e, t, r) {
                if (((e = e.replace(/\r?\n/g, "")), null != t && t < 5)) throw new Error("Maximum length must not be less than 5");
                if (((t = null != t ? t : 78), e.length <= t)) return e;
                t -= 4;
                var n = [],
                    i = e.length,
                    a = 0,
                    o = 0;
                if (!r) for (; ~(a = e.lastIndexOf(" ", t + o)) && !(a <= o); ) e.slice(o).length > t ? (n.push((o ? " " : "") + e.slice(o, a)), (o = a + 1)) : (n.push((o ? " " : "") + e.slice(o)), (o = i));
                for (t++; o < i; ) n.push(e.slice(o, (o += t)));
                return n.join("\r\n ");
            };
        },
        928123: (e, t, r) => {
            "use strict";
            var n = r(606161).useTrackLoadQueryInRender,
                i = r(138239),
                a = r(303566),
                o = r(437429),
                s = r(647677),
                l = (r(202784).useDebugValue, r(703383).__internal),
                d = l.fetchQueryDeduped,
                c = l.fetchQuery;
            r(826590);
            e.exports = function (e, t, r) {
                n();
                var l,
                    u = o(),
                    p = t.fetchKey,
                    f = t.fetchPolicy,
                    h = t.source,
                    m = t.variables,
                    g = t.networkCacheConfig,
                    y = a(e, m, g);
                if ("PreloadedQuery_DEPRECATED" === t.kind)
                    y.request.node.params.name !== t.name && s(!1),
                        (l = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: p,
                            fetchObservable: d(u, y.request.identifier, function () {
                                return u === t.environment && null != h ? u.executeWithSource({ operation: y, source: h }) : u.execute({ operation: y });
                            }),
                            fetchPolicy: f,
                            query: y,
                            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
                        });
                else {
                    var v = c(u, y);
                    l = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != h && u === t.environment ? h.ifEmpty(v) : (t.environment, v), fetchKey: p, fetchPolicy: f, query: y, renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy };
                }
                return i(l);
            };
        },
        72845: (e, t, r) => {
            "use strict";
            var n = (0, r(171600).default)(r(638636)),
                i = r(606161),
                a = i.loadQuery,
                o = i.useTrackLoadQueryInRender,
                s = r(995402),
                l = r(437429),
                d = r(202784),
                c = d.useCallback,
                u = d.useEffect,
                p = d.useRef,
                f = d.useState,
                h = r(703383).getRequest,
                m = { kind: "NullQueryReference" };
            function g(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== h(e).params.metadata.live;
            }
            e.exports = function (e, t) {
                var r = null != t ? t : m,
                    i = l();
                o();
                var d = s(),
                    h = p(new Set([r])),
                    y = f(function () {
                        return r;
                    }),
                    v = y[0],
                    b = y[1],
                    w = f(function () {
                        return r;
                    }),
                    _ = w[0],
                    k = w[1];
                r !== _ && (h.current.add(r), k(r), b(r));
                var x = c(
                        function () {
                            d.current && (h.current.add(m), b(m));
                        },
                        [d],
                    ),
                    C = c(
                        function (t, r) {
                            var n = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r;
                            if (d.current) {
                                var o,
                                    s = a(null !== (o = null == r ? void 0 : r.__environment) && void 0 !== o ? o : i, e, t, n);
                                h.current.add(s), b(s);
                            }
                        },
                        [i, e, b, d],
                    ),
                    R = p(!1);
                return (
                    u(function () {
                        return function () {
                            R.current = !0;
                        };
                    }, []),
                    u(
                        function () {
                            if (!0 === R.current) return (R.current = !1), void ("NullQueryReference" !== v.kind && C(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig }));
                            var t = h.current;
                            if (d.current) {
                                var r,
                                    i = (0, n.default)(t);
                                try {
                                    for (i.s(); !(r = i.n()).done; ) {
                                        var a = r.value;
                                        if (a === v) break;
                                        t.delete(a), "NullQueryReference" !== a.kind && (g(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
                                    }
                                } catch (e) {
                                    i.e(e);
                                } finally {
                                    i.f();
                                }
                            }
                        },
                        [v, d, C, e],
                    ),
                    u(
                        function () {
                            return function () {
                                var t,
                                    r = (0, n.default)(h.current);
                                try {
                                    for (r.s(); !(t = r.n()).done; ) {
                                        var i = t.value;
                                        "NullQueryReference" !== i.kind && (g(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery());
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === v.kind ? null : v, C, x]
                );
            };
        },
        819858: (e, t, r) => {
            var n = r(691925),
                i = r(21681);
            function a(e, t, r) {
                Array.isArray(e[t]) ? e[t].push(r) : null != e[t] ? (e[t] = [e[t], r]) : (e[t] = r);
            }
            function o(e, t) {
                var r = t.split("="),
                    i = n(r[0]),
                    o = r[1];
                return (
                    (null != o && "" !== o) || ((o = r[0]), (i = "type")),
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
                for (var t = {}, r = null, s = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, l = e.length - 1, d = 1; d < l; d++) {
                    r = e[d];
                    var c = s.exec(r);
                    if (c) {
                        var u = c[1].split("."),
                            p = u.pop(),
                            f = u.pop(),
                            h = c[3],
                            m = (c[2] ? c[2].replace(/^;|;$/g, "").split(";") : []).reduce(o, f ? { group: f } : {}),
                            g = n(p);
                        a(t, g, new i(g, h, m));
                    }
                }
                return t;
            };
        },
        21681: (e) => {
            function t(e, r, n) {
                if (!(this instanceof t)) return new t(r);
                null != n && Object.assign(this, n), (this._field = e), (this._data = r), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function r(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (t.fromJSON = function (e) {
                var r = e[0],
                    n = e[1];
                return /text/i.test(e[2]) || (n.value = e[2]), new t(r, Array.isArray(e[3]) ? e[3].join(";") : e[3], n);
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
                        for (var t = (this.group ? this.group + "." : "") + r(this._field), n = Object.keys(this), i = [], a = 0; a < n.length; a++) "group" !== n[a] && i.push(r(n[a]) + "=" + this[n[a]]);
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
        588960: (e, t, r) => {
            function n() {
                if (!(this instanceof n)) return new n();
                (this.version = n.versions[n.versions.length - 1]), (this.data = {});
            }
            (n.mimeType = "text/vcard"),
                (n.extension = ".vcf"),
                (n.versions = ["2.1", "3.0", "4.0"]),
                (n.foldLine = r(949874)),
                (n.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (n.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== n.versions.indexOf(e);
                }),
                (n.parse = function (e) {
                    for (var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), r = [], i = 0; i < t.length; i++) r.push(new n().parse(t[i]));
                    return r;
                }),
                (n.parseLines = r(819858)),
                (n.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new n();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var t = new n();
                    return (
                        e[1].forEach(function (e) {
                            t.addProperty(n.Property.fromJSON(e));
                        }),
                        t
                    );
                }),
                (n.format = function (e, t) {
                    if (((t = t || e.version || n.versions[n.versions.length - 1]), !n.isSupported(t))) throw new Error('Unsupported vCard version "' + t + '"');
                    var r = [];
                    r.push("BEGIN:VCARD"), r.push("VERSION:" + t);
                    for (var i = Object.keys(e.data), a = "", o = 0; o < i.length; o++)
                        if ("version" !== i[o])
                            if (((a = e.data[i[o]]), Array.isArray(a))) for (var s = 0; s < a.length; s++) a[s].isEmpty() || r.push(n.foldLine(a[s].toString(t), 75));
                            else a.isEmpty() || r.push(n.foldLine(a.toString(t), 75));
                    return r.push("END:VCARD"), r.join("\n");
                }),
                (n.Property = r(21681)),
                (n.prototype = {
                    constructor: n,
                    get: function (e) {
                        return null == this.data[e]
                            ? this.data[e]
                            : Array.isArray(this.data[e])
                              ? this.data[e].map(function (e) {
                                    return e.clone();
                                })
                              : this.data[e].clone();
                    },
                    set: function (e, t, r) {
                        return this.setProperty(new n.Property(e, t, r));
                    },
                    add: function (e, t, r) {
                        var i = new n.Property(e, t, r);
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
                        var t = n.normalize(e).split(/\r?\n/g),
                            r = t[0],
                            i = t[1],
                            a = t[t.length - 1];
                        if (!/BEGIN:VCARD/i.test(r)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + r + '"');
                        if (!/END:VCARD/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + a + '"');
                        if (!/VERSION:\d\.\d/i.test(i)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + i + '"');
                        if (((this.version = i.substring(8, 11)), !n.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = n.parseLines(t)), this;
                    },
                    toString: function (e, t) {
                        return (e = e || this.version), n.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var t = Object.keys(this.data), r = [["version", {}, "text", e]], n = null, i = 0; i < t.length; i++)
                            if ("version" !== t[i])
                                if (((n = this.data[t[i]]), Array.isArray(n))) for (var a = 0; a < n.length; a++) r.push(n[a].toJSON());
                                else r.push(n.toJSON());
                        return ["vcard", r];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = n);
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
                                for (var t = !1, r = 0; r < e.length; r++) {
                                    var n = e.charAt(r);
                                    t && /[a-zA-Z]/.test(n) && n.toUpperCase() === n ? ((e = e.substr(0, r) + "-" + e.substr(r)), (t = !1), r++) : (t = n.toLowerCase() === n);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-6107ac1a.86b94b8a.js.map
