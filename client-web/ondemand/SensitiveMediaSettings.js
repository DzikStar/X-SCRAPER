"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SensitiveMediaSettings"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => m });
            var i = n(202784),
                a = n(614983),
                l = n.n(a),
                s = n(325686),
                o = n(370006),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: a, hideBackButton: l, isFullWidth: s, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: g, secondaryBar: _, style: h, subtitle: v, title: k, titleDomId: b, titleIconCell: f, titleIconCellSize: y, withBackground: w, withWideContainer: C } = this.props,
                        { isModal: S } = this.context,
                        E = l ? d : i.createElement(o.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!w, S, !!_);
                    return i.createElement(i.Fragment, null, i.createElement(r.Z, { centerTitle: t, centeredLogo: n, isFullWidth: s, isLarge: c, leftControl: E, middleControl: m, position: u(p, S, a), rightControl: g, style: h, subtitle: v, title: k, titleDomId: b, titleIconCell: f, titleIconCellSize: y, withBackground: Z, withWideContainer: C }), _ || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? i.createElement(s.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                a = n(500002),
                l = n(668214),
                s = n(997174),
                o = n(118823);
            const r = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: o.YF, updateTweetDetailNav: s.NH }))
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
                            location: { pathname: l, search: s },
                            locationKey: o,
                        } = e;
                    let r = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (r = !0));
                    const c = a || o;
                    ((c && a !== o) || (!c && n !== l) || i !== s || r) && this._performPageUpdates(this.props);
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
            n.r(t), n.d(t, { default: () => oe });
            var i = n(202784),
                a = n(614983),
                l = n.n(a),
                s = n(107267),
                o = n(731708),
                r = n(688715),
                c = n(420412),
                d = n(111677),
                u = n.n(d),
                m = n(652904),
                p = n(736063),
                g = n(725516),
                _ = n(535338),
                h = n(829824),
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
            const f = b;
            n(585488);
            var y,
                w,
                C,
                S,
                E,
                Z = n(277660),
                x = n.n(Z),
                F = n(101890),
                M = {
                    fragment: {
                        argumentDefinitions: [(y = { defaultValue: null, kind: "LocalArgument", name: "userId" }), (w = { defaultValue: null, kind: "LocalArgument", name: "view_adult_content" }), (C = { defaultValue: null, kind: "LocalArgument", name: "view_other_content" }), (S = { defaultValue: null, kind: "LocalArgument", name: "view_violent_content" })],
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
                    operation: { argumentDefinitions: [y, w, S, C], kind: "Operation", name: "useEditSensitiveMediaSettingsMutation", selections: E },
                    params: { id: "YWGRWrle16Fb6JvAjvjoTQ", metadata: {}, name: "useEditSensitiveMediaSettingsMutation", operationKind: "mutation", text: null },
                };
            M.hash = "eb15339231659adbad5b6149eb6e1565";
            const I = M;
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
            const K = B;
            var D = n(351743),
                L = n.n(D),
                T = n(71620);
            const P = K,
                V = I,
                N = (e, t) => {
                    const { sensitive_media_settings: n } = x()(P, e),
                        [a, s] = L()(V),
                        o = (0, g.z)(),
                        r = (0, T.po)();
                    return [
                        i.useCallback(
                            (e, i) => {
                                const s = { view_adult_content: n.view_adult_content, view_violent_content: n.view_violent_content, view_other_content: n.view_other_content, [e]: i },
                                    c = (t) => {
                                        const a = n.__id;
                                        l()(a, "sensitiveMediaSettingsId must be specified");
                                        const s = t.get(a);
                                        l()(s, "sensitiveMediaSettingsRecord must be specified"), s.setValue(i, e);
                                    };
                                o.scribe({ action: "click", section: "sensitive-media-settings", component: e, element: i }),
                                    a({
                                        variables: { userId: t, ...s },
                                        onCompleted: () => {},
                                        onError: (e) => {
                                            r(e);
                                        },
                                        optimisticUpdater: c,
                                        updater: c,
                                    });
                            },
                            [a, o, r, n, t],
                        ),
                        s,
                    ];
                },
                W = u().aa4342be,
                j = u().jfec3aa0,
                z = u().c365dcc6,
                H = u().j6bacd6a,
                U = u().a73e66a8,
                A = u().fef1b8dc,
                G = u().d0a5a1c0,
                R = u().ga197e26,
                $ = u().eb723386,
                O = u().ea31c622,
                Y = u().e40985c4,
                q = i.createElement(u().I18NFormatMessage, { $i18n: "cbc4f32d" }, i.createElement(o.ZP, { link: (0, r.ju)("https://help.x.com/rules-and-policies/media-settings") }, u().h7e0672b)),
                J = f,
                Q = (e) => [
                    { value: "Warn", label: G, helpText: e },
                    { value: "Allow", label: R },
                    { value: "Drop", label: $ },
                ],
                X = [
                    { title: W, description: O, options: Q(H), key: "view_violent_content" },
                    { title: j, description: Y, options: Q(U), key: "view_adult_content" },
                    { title: z, description: q, options: Q(A), key: "view_other_content" },
                ],
                ee = ({ userId: e, userSensitiveMediaSettingsInfo: t }) => {
                    const n = x()(J, t),
                        { can_user_allow_sensitive_content: a, sensitive_media_settings: l } = n,
                        [s] = N(n, e);
                    return i.createElement(
                        i.Fragment,
                        null,
                        X.map((e) => {
                            const { description: t, key: n, options: o, title: r } = e,
                                c = l[n];
                            return "view_adult_content" === n && !a ? null : i.createElement(F.Z, { description: t, key: n, label: r, name: n, onChange: s, options: o, value: c });
                        }),
                    );
                };
            var te = n(653798);
            const ne = u().h9f2da68,
                ie = i.createElement(u().I18NFormatMessage, { $i18n: "e212a9ab" }, i.createElement(o.ZP, { link: (0, r.ju)("https://help.x.com/rules-and-policies/media-policy") }, u().ee320a07)),
                ae = u().b70a2cde,
                le = () => {
                    const e = (0, _.p)(te.S, {}),
                        t = e?.viewer?.user_results?.result;
                    l()("User" === t?.__typename, "Result must be of type User");
                    const n = t?.sensitive_media_settings,
                        a = t?.rest_id;
                    return l()(n, "Result must include sensitive media settings data"), i.createElement(i.Fragment, null, i.createElement(v.Z, null, ie, `\n\n${ae}`), i.createElement(c.Z, null), i.createElement(ee, { userId: a, userSensitiveMediaSettingsInfo: n }));
                },
                se = { context: "SensitiveMediaSettings" },
                oe = i.memo(
                    (0, g.Z)(
                        () => {
                            const e = (0, s.useLocation)();
                            return i.createElement(m.Z, null, i.createElement(k.Z, { location: e, title: ne }, i.createElement(h.Z, null, i.createElement(p.H, { errorConfig: se }, i.createElement(le, null)))));
                        },
                        { page: "settings", section: "content_you_see", component: "sensitive_media_settings" },
                    ),
                );
        },
        170069: (e, t, n) => {
            n.d(t, { Z: () => o });
            var i = n(202784),
                a = n(325686),
                l = n(731708),
                s = n(392237);
            const o = ({ children: e }) => i.createElement(a.Z, { style: r.labelContainer }, i.createElement(a.Z, { style: r.contentContainer }, i.createElement(a.Z, { style: r.appText }, i.createElement(l.ZP, { color: "gray700", size: "subtext2" }, e)))),
                r = s.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${s.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => r });
            var i = n(202784),
                a = n(325686),
                l = n(235902),
                s = n(885015),
                o = n(392237);
            function r({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: r } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return n ? i.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] })), i.createElement(a.Z, { style: c.gapText }, n), i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] }))) : i.createElement(a.Z, { style: [!t && c.root, r() && c.rootRedesign, c.gap, d] });
            }
            const c = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(807896),
                a = n(202784),
                l = n(325686),
                s = n(392237);
            class o extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...s } = this.props,
                        o = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, r.column, n && r.withGutterColumn] }));
                    return a.createElement(l.Z, (0, i.Z)({ style: [t, r.root, n && r.withGutter] }, s), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const r = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SensitiveMediaSettings.f699daba.js.map
