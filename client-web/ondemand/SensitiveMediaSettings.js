"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SensitiveMediaSettings"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => m });
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
            class m extends a.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: i, hideBackButton: r, isFullWidth: o, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: h, secondaryBar: g, style: b, subtitle: f, title: _, titleDomId: y, titleIconCell: C, titleIconCellSize: v, withBackground: k, withWideContainer: w } = this.props,
                        { isModal: S } = this.context,
                        E = r ? d : a.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!k, S, !!g);
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: o, isLarge: c, leftControl: E, middleControl: m, position: u(p, S, i), rightControl: h, style: b, subtitle: f, title: _, titleDomId: y, titleIconCell: C, titleIconCellSize: v, withBackground: Z, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? a.createElement(o.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(807896),
                i = n(202784),
                r = n(182056),
                o = n(879113),
                l = n(392237),
                s = n(332920),
                c = n.n(s),
                d = n(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, n) => {
                    const l = r.Z.isOnline();
                    return i.createElement(o.Z, (0, a.Z)({}, t, { icon: l ? void 0 : i.createElement(d.default, { style: p.icon }), retryMessage: l ? e : u }));
                },
                p = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = i.forwardRef(m);
        },
        253493: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(202784),
                i = n(107267),
                r = n(791632),
                o = n(325686),
                l = n(537392),
                s = n(10656),
                c = n(655352),
                d = n(555079),
                u = n(500002),
                m = n(625661),
                p = n(449067),
                h = n(655543),
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
                    return a.createElement(a.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : a.createElement(p.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return a.createElement(a.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: i, backLocation: r, documentTitle: l, headerless: s, history: c, leftControl: u, middleControl: h, onBackClick: g, rightControl: b, screenType: _, searchBoxOptions: y, secondaryBar: C, showSubtitleOnRoot: v, showSubtitleOnWideDetail: k, subtitle: w, title: S, titleIconCell: E, titleIconCellSize: Z, withDetailOpen: B, withSearchBox: x, withTweetButton: I, withWideContainer: F } = this.props,
                        D = "root" === _,
                        M = "secondaryRoot" === _,
                        T = "primaryDetail" === _,
                        L = (T && k) || (D && v),
                        R = D || (T && e),
                        P = D ? d.ey : T ? d.vX : void 0,
                        z = a.createElement(o.Z, { style: f.appBarContainer }, a.createElement(m.ZP, { backLocation: r, fixed: !1, hideBackButton: R, history: c, leftControl: u, middleControl: h, onBackClick: g, rightControl: b, secondaryBar: C, style: i, subtitle: L ? w : void 0, title: S, titleDomId: P, titleIconCell: E, titleIconCellSize: Z, withWideContainer: F })),
                        W = D || (M && B) ? null : a.createElement(p.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: r, documentTitle: l, headerless: s, middleControl: h, onBackClick: g, rightControl: b, searchBoxOptions: y, subtitle: w, title: S, withSearchBox: x, withTweetButton: I });
                    return a.createElement(a.Fragment, null, W, z);
                }
            }
            (_.contextType = h.Z), (_.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const y = (0, u.ZP)(_),
                C = (e) => {
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
                d = n(332920),
                u = n.n(d),
                m = n(652904),
                p = n(736063),
                h = n(725516),
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
            const C = y;
            n(585488);
            var v,
                k,
                w,
                S,
                E,
                Z = n(277660),
                B = n.n(Z),
                x = n(101890),
                I = {
                    fragment: {
                        argumentDefinitions: [(v = { defaultValue: null, kind: "LocalArgument", name: "userId" }), (k = { defaultValue: null, kind: "LocalArgument", name: "view_adult_content" }), (w = { defaultValue: null, kind: "LocalArgument", name: "view_other_content" }), (S = { defaultValue: null, kind: "LocalArgument", name: "view_violent_content" })],
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
                    operation: { argumentDefinitions: [v, k, S, w], kind: "Operation", name: "useEditSensitiveMediaSettingsMutation", selections: E },
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
                L = n.n(T),
                R = n(71620);
            const P = M,
                z = F,
                W = (e, t) => {
                    const { sensitive_media_settings: n } = B()(P, e),
                        [i, o] = L()(z),
                        l = (0, h.z)(),
                        s = (0, R.po)();
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
                V = u().aa4342be,
                O = u().jfec3aa0,
                H = u().c365dcc6,
                N = u().j6bacd6a,
                K = u().a73e66a8,
                A = u().fef1b8dc,
                U = u().d0a5a1c0,
                j = u().ga197e26,
                $ = u().eb723386,
                G = u().ea31c622,
                q = u().e40985c4,
                Y = a.createElement(u().I18NFormatMessage, { $i18n: "cbc4f32d" }, a.createElement(l.ZP, { link: (0, s.ju)("https://help.x.com/rules-and-policies/media-settings") }, u().h7e0672b)),
                J = C,
                Q = (e) => [
                    { value: "Warn", label: U, helpText: e },
                    { value: "Allow", label: j },
                    { value: "Drop", label: $ },
                ],
                X = [
                    { title: V, description: G, options: Q(N), key: "view_violent_content" },
                    { title: O, description: q, options: Q(K), key: "view_adult_content" },
                    { title: H, description: Y, options: Q(A), key: "view_other_content" },
                ],
                ee = ({ userId: e, userSensitiveMediaSettingsInfo: t }) => {
                    const n = B()(J, t),
                        { can_user_allow_sensitive_content: i, sensitive_media_settings: r } = n,
                        [o] = W(n, e);
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
                    (0, h.Z)(
                        () => {
                            const e = (0, o.useLocation)();
                            return a.createElement(m.Z, null, a.createElement(_.Z, { location: e, title: ne }, a.createElement(b.Z, null, a.createElement(p.H, { errorConfig: oe }, a.createElement(re, null)))));
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
                l = n(332920),
                s = n.n(l),
                c = n(443781),
                d = n(918621),
                u = n(725405),
                m = n(125363),
                p = n(390387);
            const h = s().ffeb836a,
                g = s().f2fb9746;
            function b() {
                const e = (0, u.Z)();
                return (
                    a.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    a.createElement(r.Z, { title: h }, a.createElement(o.ZP, null, g))
                );
            }
            function f(e) {
                const { featureSwitches: t } = a.useContext(c.rC),
                    n = (0, m.v9)(p.Qb),
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
            n.d(t, { Z: () => v });
            var a = n(202784),
                i = n(108362),
                r = n(420412),
                o = n(154003),
                l = n(392237),
                s = n(332920),
                c = n.n(s),
                d = n(290402),
                u = n(253493),
                m = n(71620),
                p = n(668214),
                h = n(38562),
                g = n(919022);
            const b = (0, p.Z)()
                    .propsFromState(() => ({ fetchStatus: h.UD, viewerUser: g.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: h.Sb, createLocalApiErrorHandler: (0, m.zr)("SETTINGS_LOADER") })),
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
                            return a.createElement(i.Z, { style: [C.contentRoot, c && C.withMarginBottom] }, e, t ? a.createElement(a.Fragment, null, a.createElement(r.Z, null), a.createElement(i.Z, { style: C.buttonContainer }, a.createElement(o.ZP, { disabled: n, onPress: t, style: C.button, testID: f, type: s }, l))) : null);
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
            const C = l.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${l.default.iPhoneOffsetBottom})` } })),
                v = b(y);
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                i = n(476984),
                r = n.n(i),
                o = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: i, icon: r, loadingMessage: o, onRequestRetry: d, render: p, renderFailure: h, retryMessage: g, retryable: b } = this.props;
                    switch (i) {
                        case c:
                            return b ? a.createElement(l.Z, { icon: r, onRequestRetry: d, retryMessage: g }) : n ? a.createElement(s.m, { failureMessage: n }) : h();
                        case u:
                            return a.createElement(s.J, { "aria-label": e, color: t, loadingMessage: o });
                        case m:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: o.Z, retryable: !0 };
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
                m = n(392237);
            class p extends a.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: u, helpText: p, label: g, name: b, testID: f } = this.props,
                        _ = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        y = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        C = n ? _ : y;
                    return a.createElement(s.Z, { disabled: u }, (s) => a.createElement(i.Z, { role: "label", style: [h.root, !u && h.interactive], testID: f }, a.createElement(i.Z, { style: h.topContainer }, a.createElement(o.ZP, { id: this.labelId }, g), a.createElement(i.Z, { style: h.radioContainer }, a.createElement(d.Z, { interactiveStyles: C, interactivityState: s, style: h.radioBackground }, a.createElement(i.Z, { style: [h.circle, n && h.circleActive, u && h.circleDisabled, n && u && h.circleCheckedAndDisabled] }, n ? a.createElement(r.default, { style: h.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [h.nativeControl], type: "radio" }))), p ? a.createElement(o.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: h.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const h = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = p,
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
            const y = m.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
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
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                i = n(890601),
                r = n(783427),
                o = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SensitiveMediaSettings.a6c07dda.js.map
