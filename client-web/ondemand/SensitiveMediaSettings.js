"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SensitiveMediaSettings"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => m });
            var i = n(202784),
                a = n(614983),
                l = n.n(a),
                o = n(325686),
                s = n(370006),
                r = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class m extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            l()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: a, hideBackButton: l, isFullWidth: o, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: g, secondaryBar: h, style: _, subtitle: v, title: k, titleDomId: b, titleIconCell: y, titleIconCellSize: f, withBackground: w, withWideContainer: C } = this.props,
                        { isModal: S } = this.context,
                        E = l ? d : i.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!w, S, !!h);
                    return i.createElement(i.Fragment, null, i.createElement(r.Z, { centerTitle: t, centeredLogo: n, isFullWidth: o, isLarge: c, leftControl: E, middleControl: m, position: u(p, S, a), rightControl: g, style: _, subtitle: v, title: k, titleDomId: b, titleIconCell: y, titleIconCellSize: f, withBackground: Z, withWideContainer: C }), h || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? i.createElement(o.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                a = n(500002),
                l = n(668214),
                o = n(997174),
                s = n(118823);
            const r = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class c extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: i },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: l, search: o },
                            locationKey: s,
                        } = e;
                    let r = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (r = !0));
                    const c = a || s;
                    ((c && a !== s) || (!c && n !== l) || i !== o || r) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, a.ZP)(r(c));
        },
        687124: (e, t, n) => {
            n.r(t), n.d(t, { default: () => se });
            var i = n(202784),
                a = n(614983),
                l = n.n(a),
                o = n(107267),
                s = n(731708),
                r = n(688715),
                c = n(420412),
                d = n(111677),
                u = n.n(d),
                m = n(652904),
                p = n(736063),
                g = n(725516),
                h = n(535338),
                _ = n(829824),
                v = n(170069),
                k = n(264922),
                b = {
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
            const y = b;
            n(585488);
            var f,
                w,
                C,
                S,
                E,
                Z = n(277660),
                x = n.n(Z),
                M = n(101890),
                F = {
                    fragment: {
                        argumentDefinitions: [(f = { defaultValue: null, kind: "LocalArgument", name: "userId" }), (w = { defaultValue: null, kind: "LocalArgument", name: "view_adult_content" }), (C = { defaultValue: null, kind: "LocalArgument", name: "view_other_content" }), (S = { defaultValue: null, kind: "LocalArgument", name: "view_violent_content" })],
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
                    operation: { argumentDefinitions: [f, w, S, C], kind: "Operation", name: "useEditSensitiveMediaSettingsMutation", selections: E },
                    params: { id: "YWGRWrle16Fb6JvAjvjoTQ", metadata: {}, name: "useEditSensitiveMediaSettingsMutation", operationKind: "mutation", text: null },
                };
            F.hash = "eb15339231659adbad5b6149eb6e1565";
            const I = F;
            var B = {
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
            const D = B;
            var K = n(351743),
                z = n.n(K),
                L = n(71620);
            const V = D,
                T = I,
                P = (e, t) => {
                    const { sensitive_media_settings: n } = x()(V, e),
                        [a, o] = z()(T),
                        s = (0, g.z)(),
                        r = (0, L.po)();
                    return [
                        i.useCallback(
                            (e, i) => {
                                const o = { view_adult_content: n.view_adult_content, view_violent_content: n.view_violent_content, view_other_content: n.view_other_content, [e]: i },
                                    c = (t) => {
                                        const a = n.__id;
                                        l()(a, "sensitiveMediaSettingsId must be specified");
                                        const o = t.get(a);
                                        l()(o, "sensitiveMediaSettingsRecord must be specified"), o.setValue(i, e);
                                    };
                                s.scribe({ action: "click", section: "sensitive-media-settings", component: e, element: i }),
                                    a({
                                        variables: { userId: t, ...o },
                                        onCompleted: () => {},
                                        onError: (e) => {
                                            r(e);
                                        },
                                        optimisticUpdater: c,
                                        updater: c,
                                    });
                            },
                            [a, s, r, n, t],
                        ),
                        o,
                    ];
                },
                H = u().aa4342be,
                N = u().jfec3aa0,
                W = u().c365dcc6,
                j = u().j6bacd6a,
                U = u().a73e66a8,
                A = u().fef1b8dc,
                G = u().d0a5a1c0,
                R = u().ga197e26,
                $ = u().eb723386,
                O = u().ea31c622,
                Y = u().e40985c4,
                q = i.createElement(u().I18NFormatMessage, { $i18n: "cbc4f32d" }, i.createElement(s.ZP, { link: (0, r.ju)("https://help.x.com/rules-and-policies/media-settings") }, u().h7e0672b)),
                J = y,
                Q = (e) => [
                    { value: "Warn", label: G, helpText: e },
                    { value: "Allow", label: R },
                    { value: "Drop", label: $ },
                ],
                X = [
                    { title: H, description: O, options: Q(j), key: "view_violent_content" },
                    { title: N, description: Y, options: Q(U), key: "view_adult_content" },
                    { title: W, description: q, options: Q(A), key: "view_other_content" },
                ],
                ee = ({ userId: e, userSensitiveMediaSettingsInfo: t }) => {
                    const n = x()(J, t),
                        { can_user_allow_sensitive_content: a, sensitive_media_settings: l } = n,
                        [o] = P(n, e);
                    return i.createElement(
                        i.Fragment,
                        null,
                        X.map((e) => {
                            const { description: t, key: n, options: s, title: r } = e,
                                c = l[n];
                            return "view_adult_content" === n && !a ? null : i.createElement(M.Z, { description: t, key: n, label: r, name: n, onChange: o, options: s, value: c });
                        }),
                    );
                };
            var te = n(653798);
            const ne = u().h9f2da68,
                ie = i.createElement(u().I18NFormatMessage, { $i18n: "e212a9ab" }, i.createElement(s.ZP, { link: (0, r.ju)("https://help.x.com/rules-and-policies/media-policy") }, u().ee320a07)),
                ae = u().b70a2cde,
                le = () => {
                    const e = (0, h.p)(te.S, {}),
                        t = e?.viewer?.user_results?.result;
                    l()("User" === t?.__typename, "Result must be of type User");
                    const n = t?.sensitive_media_settings,
                        a = t?.rest_id;
                    return l()(n, "Result must include sensitive media settings data"), i.createElement(i.Fragment, null, i.createElement(v.Z, null, ie, `\n\n${ae}`), i.createElement(c.Z, null), i.createElement(ee, { userId: a, userSensitiveMediaSettingsInfo: n }));
                },
                oe = { context: "SensitiveMediaSettings" },
                se = i.memo(
                    (0, g.Z)(
                        () => {
                            const e = (0, o.useLocation)();
                            return i.createElement(m.Z, null, i.createElement(k.Z, { location: e, title: ne }, i.createElement(_.Z, null, i.createElement(p.H, { errorConfig: oe }, i.createElement(le, null)))));
                        },
                        { page: "settings", section: "content_you_see", component: "sensitive_media_settings" },
                    ),
                );
        },
        170069: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(202784),
                a = n(325686),
                l = n(731708),
                o = n(392237);
            const s = ({ children: e }) => i.createElement(a.Z, { style: r.labelContainer }, i.createElement(a.Z, { style: r.contentContainer }, i.createElement(a.Z, { style: r.appText }, i.createElement(l.ZP, { color: "gray700", size: "subtext2" }, e)))),
                r = o.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${o.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => r });
            var i = n(202784),
                a = n(325686),
                l = n(235902),
                o = n(885015),
                s = n(392237);
            function r({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: r } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? i.createElement(o.Z, { style: !t && c.root, withGutter: !0 }, i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] })), i.createElement(a.Z, { style: c.gapText }, n), i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] }))) : i.createElement(a.Z, { style: [!t && c.root, r() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(807896),
                a = n(202784),
                l = n(325686),
                o = n(392237);
            class s extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...o } = this.props,
                        s = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, r.column, n && r.withGutterColumn] }));
                    return a.createElement(l.Z, (0, i.Z)({ style: [t, r.root, n && r.withGutter] }, o), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const r = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            var i = n(202784),
                a = n(890601),
                l = n(783427),
                o = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SensitiveMediaSettings.1115154a.js.map
