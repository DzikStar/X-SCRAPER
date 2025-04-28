"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SensitiveMediaSettings"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var a = n(202784),
                i = n(614983),
                r = n.n(i),
                o = n(325686),
                l = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: i, hideBackButton: r, isFullWidth: o, isLarge: c, leftControl: d, middleControl: h, position: m, rightControl: p, secondaryBar: g, style: b, subtitle: f, title: _, titleDomId: y, titleIconCell: v, titleIconCellSize: C, withBackground: k, withWideContainer: w } = this.props,
                        { isModal: S } = this.context,
                        E = r ? d : a.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!k, S, !!g);
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: o, isLarge: c, leftControl: E, middleControl: h, position: u(m, S, i), rightControl: p, style: b, subtitle: f, title: _, titleDomId: y, titleIconCell: v, titleIconCellSize: C, withBackground: Z, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? a.createElement(o.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(807896),
                i = n(202784),
                r = n(182056),
                o = n(879113),
                l = n(392237),
                s = n(674132),
                c = n.n(s),
                d = n(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, n) => {
                    const l = r.Z.isOnline();
                    return i.createElement(o.Z, (0, a.Z)({}, t, { icon: l ? void 0 : i.createElement(d.default, { style: m.icon }), retryMessage: l ? e : u }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = i.forwardRef(h);
        },
        253493: (e, t, n) => {
            n.d(t, { Z: () => v });
            var a = n(202784),
                i = n(107267),
                r = n(791632),
                o = n(325686),
                l = n(537392),
                s = n(10656),
                c = n(655352),
                d = n(555079),
                u = n(500002),
                h = n(625661),
                m = n(449067),
                p = n(655543),
                g = n(715601),
                b = n(392237);
            const f = b.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...b.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class _ extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? a.createElement(o.Z, { style: f.fill }, a.createElement(g.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return a.createElement(l.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: i, showSubtitleOnRoot: r, showSubtitleOnWideDetail: o, withBottomBorder: l, withDetailOpen: s, ...d } = this.props;
                    return a.createElement(a.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : a.createElement(m.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return a.createElement(a.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: i, backLocation: r, documentTitle: l, headerless: s, history: c, leftControl: u, middleControl: p, onBackClick: g, rightControl: b, screenType: _, searchBoxOptions: y, secondaryBar: v, showSubtitleOnRoot: C, showSubtitleOnWideDetail: k, subtitle: w, title: S, titleIconCell: E, titleIconCellSize: Z, withDetailOpen: B, withSearchBox: x, withTweetButton: I, withWideContainer: F } = this.props,
                        D = "root" === _,
                        M = "secondaryRoot" === _,
                        T = "primaryDetail" === _,
                        R = (T && k) || (D && C),
                        L = D || (T && e),
                        P = D ? d.ey : T ? d.vX : void 0,
                        z = a.createElement(o.Z, { style: f.appBarContainer }, a.createElement(h.ZP, { backLocation: r, fixed: !1, hideBackButton: L, history: c, leftControl: u, middleControl: p, onBackClick: g, rightControl: b, secondaryBar: v, style: i, subtitle: R ? w : void 0, title: S, titleDomId: P, titleIconCell: E, titleIconCellSize: Z, withWideContainer: F })),
                        V = D || (M && B) ? null : a.createElement(m.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: r, documentTitle: l, headerless: s, middleControl: p, onBackClick: g, rightControl: b, searchBoxOptions: y, subtitle: w, title: S, withSearchBox: x, withTweetButton: I });
                    return a.createElement(a.Fragment, null, V, z);
                }
            }
            (_.contextType = p.Z), (_.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const y = (0, u.ZP)(_),
                v = (e) => {
                    const t = (0, i.useHistory)();
                    return (0, r.HD)(t) ? e.children || null : a.createElement(y, e);
                };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                i = n(500002),
                r = n(668214),
                o = n(997174),
                l = n(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class c extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: r, search: o },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const c = i || l;
                    ((c && i !== l) || (!c && n !== r) || a !== o || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, i.ZP)(s(c));
        },
        687124: (e, t, n) => {
            n.r(t), n.d(t, { default: () => le });
            var a = n(202784),
                i = n(614983),
                r = n.n(i),
                o = n(107267),
                l = n(731708),
                s = n(688715),
                c = n(420412),
                d = n(674132),
                u = n.n(d),
                h = n(652904),
                m = n(736063),
                p = n(725516),
                g = n(535338),
                b = n(829824),
                f = n(170069),
                _ = n(264922),
                y = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo",
                    selections: [
                        { args: null, kind: "FragmentSpread", name: "useEditSensitiveMediaSettings_userSensitiveMediaSettingsInfo" },
                        {
                            alias: null,
                            args: null,
                            concreteType: "SensitiveMediaSettings",
                            kind: "LinkedField",
                            name: "sensitive_media_settings",
                            plural: !1,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                                { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                            ],
                            storageKey: null,
                        },
                        { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null },
                    ],
                    type: "UserSensitiveMediaSettingsInfo",
                    abstractKey: null,
                    hash: "bcf9782c0890b1105e4360151a225157",
                };
            const v = y;
            n(585488);
            var C,
                k,
                w,
                S,
                E,
                Z = n(277660),
                B = n.n(Z),
                x = n(101890),
                I = {
                    fragment: {
                        argumentDefinitions: [(C = { defaultValue: null, kind: "LocalArgument", name: "userId" }), (k = { defaultValue: null, kind: "LocalArgument", name: "view_adult_content" }), (w = { defaultValue: null, kind: "LocalArgument", name: "view_other_content" }), (S = { defaultValue: null, kind: "LocalArgument", name: "view_violent_content" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useEditSensitiveMediaSettingsMutation",
                        selections: (E = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                    { kind: "Variable", name: "view_adult_content", variableName: "view_adult_content" },
                                    { kind: "Variable", name: "view_other_content", variableName: "view_other_content" },
                                    { kind: "Variable", name: "view_violent_content", variableName: "view_violent_content" },
                                ],
                                kind: "ScalarField",
                                name: "user_sensitive_media_settings_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [C, k, S, w], kind: "Operation", name: "useEditSensitiveMediaSettingsMutation", selections: E },
                    params: { id: "YWGRWrle16Fb6JvAjvjoTQ", metadata: {}, name: "useEditSensitiveMediaSettingsMutation", operationKind: "mutation", text: null },
                };
            I.hash = "eb15339231659adbad5b6149eb6e1565";
            const F = I;
            var D = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useEditSensitiveMediaSettings_userSensitiveMediaSettingsInfo",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "SensitiveMediaSettings",
                        kind: "LinkedField",
                        name: "sensitive_media_settings",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null },
                ],
                type: "UserSensitiveMediaSettingsInfo",
                abstractKey: null,
                hash: "36108d86a14a7e44115d983679f72f62",
            };
            const M = D;
            var T = n(351743),
                R = n.n(T),
                L = n(71620);
            const P = M,
                z = F,
                V = (e, t) => {
                    const { sensitive_media_settings: n } = B()(P, e),
                        [i, o] = R()(z),
                        l = (0, p.z)(),
                        s = (0, L.po)();
                    return [
                        a.useCallback(
                            (e, a) => {
                                const o = { view_adult_content: n.view_adult_content, view_violent_content: n.view_violent_content, view_other_content: n.view_other_content, [e]: a },
                                    c = (t) => {
                                        const i = n.__id;
                                        r()(i, "sensitiveMediaSettingsId must be specified");
                                        const o = t.get(i);
                                        r()(o, "sensitiveMediaSettingsRecord must be specified"), o.setValue(a, e);
                                    };
                                l.scribe({ action: "click", section: "sensitive-media-settings", component: e, element: a }),
                                    i({
                                        variables: { userId: t, ...o },
                                        onCompleted: () => {},
                                        onError: (e) => {
                                            s(e);
                                        },
                                        optimisticUpdater: c,
                                        updater: c,
                                    });
                            },
                            [i, l, s, n, t],
                        ),
                        o,
                    ];
                },
                W = u().aa4342be,
                H = u().jfec3aa0,
                O = u().c365dcc6,
                N = u().j6bacd6a,
                K = u().a73e66a8,
                A = u().fef1b8dc,
                U = u().d0a5a1c0,
                j = u().ga197e26,
                $ = u().eb723386,
                G = u().ea31c622,
                q = u().e40985c4,
                Y = a.createElement(u().I18NFormatMessage, { $i18n: "cbc4f32d" }, a.createElement(l.ZP, { link: (0, s.ju)("https://help.x.com/rules-and-policies/media-settings") }, u().h7e0672b)),
                J = v,
                Q = (e) => [
                    { value: "Warn", label: U, helpText: e },
                    { value: "Allow", label: j },
                    { value: "Drop", label: $ },
                ],
                X = [
                    { title: W, description: G, options: Q(N), key: "view_violent_content" },
                    { title: H, description: q, options: Q(K), key: "view_adult_content" },
                    { title: O, description: Y, options: Q(A), key: "view_other_content" },
                ],
                ee = ({ userId: e, userSensitiveMediaSettingsInfo: t }) => {
                    const n = B()(J, t),
                        { can_user_allow_sensitive_content: i, sensitive_media_settings: r } = n,
                        [o] = V(n, e);
                    return a.createElement(
                        a.Fragment,
                        null,
                        X.map((e) => {
                            const { description: t, key: n, options: l, title: s } = e,
                                c = r[n];
                            return "view_adult_content" === n && !i ? null : a.createElement(x.Z, { description: t, key: n, label: s, name: n, onChange: o, options: l, value: c });
                        }),
                    );
                };
            var te = n(653798);
            const ne = u().h9f2da68,
                ae = a.createElement(u().I18NFormatMessage, { $i18n: "e212a9ab" }, a.createElement(l.ZP, { link: (0, s.ju)("https://help.x.com/rules-and-policies/media-policy") }, u().ee320a07)),
                ie = u().b70a2cde,
                re = () => {
                    const e = (0, g.p)(te.S, {}),
                        t = e?.viewer?.user_results?.result;
                    r()("User" === t?.__typename, "Result must be of type User");
                    const n = t?.sensitive_media_settings,
                        i = t?.rest_id;
                    return r()(n, "Result must include sensitive media settings data"), a.createElement(a.Fragment, null, a.createElement(f.Z, null, ae, `\n\n${ie}`), a.createElement(c.Z, null), a.createElement(ee, { userId: i, userSensitiveMediaSettingsInfo: n }));
                },
                oe = { context: "SensitiveMediaSettings" },
                le = a.memo(
                    (0, p.Z)(
                        () => {
                            const e = (0, o.useLocation)();
                            return a.createElement(h.Z, null, a.createElement(_.Z, { location: e, title: ne }, a.createElement(b.Z, null, a.createElement(m.H, { errorConfig: oe }, a.createElement(re, null)))));
                        },
                        { page: "settings", section: "content_you_see", component: "sensitive_media_settings" },
                    ),
                );
        },
        829824: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                i = n(99107),
                r = n(420740),
                o = n(731708),
                l = n(674132),
                s = n.n(l),
                c = n(443781),
                d = n(918621),
                u = n(725405),
                h = n(125363),
                m = n(390387);
            const p = s().ffeb836a,
                g = s().f2fb9746;
            function b() {
                const e = (0, u.Z)();
                return (
                    a.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    a.createElement(r.Z, { title: p }, a.createElement(o.ZP, null, g))
                );
            }
            function f(e) {
                const { featureSwitches: t } = a.useContext(c.rC),
                    n = (0, h.v9)(m.Qb),
                    r = (0, d.Xh)(i.b7, t);
                return n || r ? e.children : a.createElement(b, null);
            }
        },
        170069: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                i = n(325686),
                r = n(731708),
                o = n(392237);
            const l = ({ children: e }) => a.createElement(i.Z, { style: s.labelContainer }, a.createElement(i.Z, { style: s.contentContainer }, a.createElement(i.Z, { style: s.appText }, a.createElement(r.ZP, { color: "gray700", size: "subtext2" }, e)))),
                s = o.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${o.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        264922: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(202784),
                i = n(108362),
                r = n(420412),
                o = n(154003),
                l = n(392237),
                s = n(674132),
                c = n.n(s),
                d = n(290402),
                u = n(253493),
                h = n(71620),
                m = n(668214),
                p = n(38562),
                g = n(919022);
            const b = (0, m.Z)()
                    .propsFromState(() => ({ fetchStatus: p.UD, viewerUser: g.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: p.Sb, createLocalApiErrorHandler: (0, h.zr)("SETTINGS_LOADER") })),
                f = "settingsDetailSave",
                _ = c().i2209530;
            class y extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return a.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: l, submitType: s, withMarginBottom: c } = this.props;
                            return a.createElement(i.Z, { style: [v.contentRoot, c && v.withMarginBottom] }, e, t ? a.createElement(a.Fragment, null, a.createElement(r.Z, null), a.createElement(i.Z, { style: v.buttonContainer }, a.createElement(o.ZP, { disabled: n, onPress: t, style: v.button, testID: f, type: s }, l))) : null);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                getBackLocation() {
                    const { location: e, viewerUser: t } = this.props,
                        n = t ? "/settings" : "/settings/account/personalization";
                    return e && e.pathname === n ? "/" : n;
                }
                render() {
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: i, title: r, viewerUser: o, withBottomBorder: l } = this.props,
                        s = this.getBackLocation(),
                        c = o ? `@${o.screen_name}` : void 0;
                    return a.createElement(u.Z, { backLocation: s, onBackClick: e, rightControl: t, screenType: n, secondaryBar: i, showSubtitleOnWideDetail: !1, subtitle: c, title: r, withBottomBorder: l }, o ? this._renderWithFetchSettings() : this._render());
                }
            }
            y.defaultProps = { submitLabel: _, submitType: "brandFilled", withMarginBottom: !0 };
            const v = l.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${l.default.iPhoneOffsetBottom})` } })),
                C = b(y);
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                i = n(476984),
                r = n.n(i),
                o = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class m extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: i, icon: r, loadingMessage: o, onRequestRetry: d, render: m, renderFailure: p, retryMessage: g, retryable: b } = this.props;
                    switch (i) {
                        case c:
                            return b ? a.createElement(l.Z, { icon: r, onRequestRetry: d, retryMessage: g }) : n ? a.createElement(s.m, { failureMessage: n }) : p();
                        case u:
                            return a.createElement(s.J, { "aria-label": e, color: t, loadingMessage: o });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                i = n(325686),
                r = n(235902),
                o = n(885015),
                l = n(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: s } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return n ? a.createElement(o.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] })), a.createElement(i.Z, { style: c.gapText }, n), a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] }))) : a.createElement(i.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                i = n(202784),
                r = n(325686),
                o = n(392237);
            class l extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...o } = this.props,
                        l = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, s.column, n && s.withGutterColumn] }));
                    return i.createElement(r.Z, (0, a.Z)({ style: [t, s.root, n && s.withGutter] }, o), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const s = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = l;
        },
        449479: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var a = n(202784),
                i = n(325686),
                r = n(913973),
                o = n(731708),
                l = n(950822),
                s = n(466792),
                c = n(58881),
                d = n(530732),
                u = n(352924),
                h = n(392237);
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: n } = this.props;
                            n && !t && n(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: u, helpText: m, label: g, name: b, testID: f } = this.props,
                        _ = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        v = n ? _ : y;
                    return a.createElement(s.Z, { disabled: u }, (s) => a.createElement(i.Z, { role: "label", style: [p.root, !u && p.interactive], testID: f }, a.createElement(i.Z, { style: p.topContainer }, a.createElement(o.ZP, { id: this.labelId }, g), a.createElement(i.Z, { style: p.radioContainer }, a.createElement(d.Z, { interactiveStyles: v, interactivityState: s, style: p.radioBackground }, a.createElement(i.Z, { style: [p.circle, n && p.circleActive, u && p.circleDisabled, n && u && p.circleCheckedAndDisabled] }, n ? a.createElement(r.default, { style: p.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [p.nativeControl], type: "radio" }))), m ? a.createElement(o.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: p.helpText }, m) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            m.defaultProps = { disabled: !1, checked: !1 };
            const p = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = m,
                b = "radioGroup";
            let f = 1;
            class _ extends a.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: n } = this.props;
                            n(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (n) => {
                            (this._radioRefs[e] = n), t && (this._radioRefs.checked = e);
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
                    const { "aria-label": e, description: t, disabled: n, label: r, name: l, options: s, value: c } = this.props;
                    return a.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": r && !e ? this._labelId : void 0, role: "radiogroup", style: n && y.disabled, testID: `${b}${l}` },
                        r ? a.createElement(i.Z, { id: this._labelId, role: "label", style: y.header }, a.createElement(o.ZP, { style: y.label, weight: "bold" }, r), t ? a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => a.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            _.defaultProps = { disabled: !1 };
            const y = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                i = n(325686),
                r = n(449479),
                o = n(392237);
            const l = (e) => a.createElement(i.Z, { style: s.root }, a.createElement(r.Z, e)),
                s = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                i = n(890601),
                r = n(783427),
                o = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SensitiveMediaSettings.75ec0bca.js.map
