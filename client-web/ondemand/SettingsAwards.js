"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsAwards"],
    {
        625661: (e, t, a) => {
            a.d(t, { ZP: () => m });
            var n = a(202784),
                l = a(614983),
                i = a.n(l),
                s = a(325686),
                r = a(370006),
                o = a(786998),
                c = a(929028),
                d = a(386802);
            function u(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: l, hideBackButton: i, isFullWidth: s, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: g, secondaryBar: h, style: y, subtitle: k, title: b, titleDomId: f, titleIconCell: w, titleIconCellSize: _, withBackground: v, withWideContainer: C } = this.props,
                        { isModal: E } = this.context,
                        F = i ? d : n.createElement(r.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!v, E, !!h);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: t, centeredLogo: a, isFullWidth: s, isLarge: c, leftControl: F, middleControl: m, position: u(p, E, l), rightControl: g, style: y, subtitle: k, title: b, titleDomId: f, titleIconCell: w, titleIconCellSize: _, withBackground: Z, withWideContainer: C }), h || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? n.createElement(s.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                l = a(500002),
                i = a(668214),
                s = a(997174),
                r = a(118823);
            const o = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: r.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: l,
                        } = this.props,
                        {
                            location: { pathname: i, search: s },
                            locationKey: r,
                        } = e;
                    let o = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (o = !0));
                    const c = l || r;
                    ((c && l !== r) || (!c && a !== i) || n !== s || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, l.ZP)(o(c));
        },
        782642: (e, t, a) => {
            a.d(t, { p: () => s });
            var n = a(202784),
                l = a(125363),
                i = a(601576);
            const s = () => {
                    const e = (0, l.I0)(),
                        t = r(),
                        a = n.useRef(null);
                    return (
                        n.useEffect(() => () => clearTimeout(a.current), [t]),
                        n.useCallback(
                            (n) => {
                                e((0, i.fz)(n)), (a.current = setTimeout(() => t(), 3e3));
                            },
                            [e, t],
                        )
                    );
                },
                r = () => {
                    const e = (0, l.I0)();
                    return n.useCallback(() => e((0, i.RS)()), [e]);
                };
        },
        980633: (e, t, a) => {
            a.r(t), a.d(t, { AwardsSettingsQueryRequest: () => te, default: () => ie });
            var n,
                l,
                i,
                s,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsSettingsQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "useAwardsActivate_user" }, (l = { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "awards_eligibility", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "AwardsSettingsQuery",
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
                                                    { kind: "InlineFragment", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }, l, i, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            s,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "c_ww6XqjHvIqQAZWzaRR2g", metadata: {}, name: "AwardsSettingsQuery", operationKind: "query", text: null },
                };
            r.hash = "69e2417e3a2238129128f7eb4144152b";
            const o = r;
            var c = a(202784),
                d = (a(585488), a(107267)),
                u = a(443781),
                m = a(883229),
                p = a(725516),
                g = a(535338),
                h = a(615027),
                y = (a(136728), a(325686)),
                k = a(688715),
                b = a(731708),
                f = a(154003),
                w = a(167630),
                _ = a(392237),
                v = a(111677),
                C = a.n(v),
                E = a(980407),
                F = a(698537),
                Z = a(782642),
                T = a(892541),
                x = a(87908),
                B = a(491369);
            const I = _.default.create((e) => ({ list: { gap: e.spaces.space24 }, listItem: { flexDirection: "row", gap: e.spaces.space16 }, listItemContent: { flex: 1 }, listItemTitle: { marginBottom: e.spaces.space4 }, illustration: { height: "50px", width: "50px" } })),
                S = [
                    { illustration: c.createElement(T.default, { style: I.illustration }), title: C().d520d188, description: C().ea770766 },
                    { illustration: c.createElement(x.default, { style: I.illustration }), title: C().d27f5ac6, description: C().h1d66df0 },
                    { illustration: c.createElement(B.default, { style: I.illustration }), title: C().f85fb0a2, description: C().d1433e24 },
                ],
                K = () =>
                    c.createElement(
                        y.Z,
                        { role: "list", style: I.list },
                        S.map((e) => c.createElement(y.Z, { key: e.title, role: "listitem", style: I.listItem }, e.illustration, c.createElement(y.Z, { style: I.listItemContent }, c.createElement(b.ZP, { style: I.listItemTitle, weight: "heavy" }, e.title), c.createElement(b.ZP, { color: "gray700" }, e.description)))),
                    ),
                R = "/settings/monetization";
            var A = (function () {
                var e = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "awards_feature_activate", storageKey: 'awards_feature_activate(s:"4721")' }];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivateMutation", selections: e, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useAwardsActivateMutation", selections: e }, params: { id: "ql0nbxLYZcgEQyw5Z0PlWw", metadata: {}, name: "useAwardsActivateMutation", operationKind: "mutation", text: null } };
            })();
            A.hash = "aaaa1c71aa5e6b2e3a109a5b37594b3f";
            const L = A;
            var P = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivate_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "eaa526ce3924dce881ea12c7b2d29239" };
            const D = P;
            var z = a(614983),
                W = a.n(z),
                q = a(277660),
                M = a.n(q),
                U = a(351743),
                H = a.n(U);
            const N = D,
                Q = L,
                O = (e) => {
                    const t = M()(N, e),
                        [a, n] = H()(Q);
                    return [
                        c.useCallback(
                            () =>
                                new Promise((e, n) => {
                                    a({
                                        variables: {},
                                        onCompleted: (t, a) => e(),
                                        onError: n,
                                        updater: (e, a) => {
                                            const n = t.__id;
                                            W()(n, "userId must be specified");
                                            const l = e.get(n);
                                            W()(l, "userRecord must be specified"), l.invalidateRecord();
                                        },
                                    });
                                }),
                            [a, t.__id],
                        ),
                        n,
                    ];
                },
                j = C().ecdbece0,
                V = C().ef4602ec,
                G = C().j087774e,
                Y = C().db3f0bbe,
                X = C().a1f40cf8,
                $ = (0, k.ju)("https://legal.x.com/creator-terms"),
                J = _.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space64, paddingTop: e.spaces.space8, paddingBottom: "120px" }, iconTwitter: { color: e.colors.primary }, headline: { marginVertical: e.spaces.space16 }, spacing: { marginBottom: e.spaces.space8 }, footer: { marginHorizontal: e.spaces.space64, marginVertical: e.spaces.space16 } })),
                ee = c.memo(
                    (0, p.Z)(
                        ({ user: e }) => {
                            const t = (0, d.useHistory)(),
                                a = c.useCallback(() => {
                                    t.push(R);
                                }, [t]),
                                n = (0, Z.p)(),
                                [l, i] = O(e),
                                s = c.useCallback(() => {
                                    l()
                                        .then(() => {
                                            n({ text: j }), t.push("/settings/monetization/awards/dashboard");
                                        })
                                        .catch(() => {
                                            n({ text: V });
                                        });
                                }, [n, l, t]),
                                r = c.useMemo(() => ({ link: c.createElement(b.ZP, { link: $, weight: "bold" }) }), []),
                                o = c.useMemo(() => c.createElement(y.Z, { style: J.footer }, c.createElement(b.ZP, { align: "center", color: "gray700", style: J.spacing }, c.createElement(C().I18NFormatMessage, { $i18n: "d4b0b963" }, c.cloneElement(r.link, null, C().d604fb32))), c.createElement(f.ZP, { disabled: i, onPress: s, type: "primaryFilled" }, i ? c.createElement(w.Z, null) : X)), [i, s, r]);
                            return c.createElement(E.Z, { backButtonType: "close", bottomBar: o, documentTitle: G, history: t, onBackClick: a }, c.createElement(y.Z, { style: J.root }, c.createElement(b.ZP, { "aria-level": 1, role: "heading", size: "title1", weight: "heavy" }, G), c.createElement(b.ZP, { size: "headline1", style: J.headline, weight: "medium" }, Y), c.createElement(F.Z, { style: J.spacing, type: F.j.DiscoGlobe }), c.createElement(K, null)));
                        },
                        { page: "onboarding", section: "Coins" },
                    ),
                ),
                te = o,
                ae = () => {
                    const { featureSwitches: e } = c.useContext(u.rC),
                        t = e.isTrue("creator_monetization_web_tips_onboarding_enabled"),
                        a = e.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: n } = (0, g.p)(te, {}),
                        l = n.user_results.result,
                        i = a && l.award_eligible,
                        s = 0 === l.awards_eligibility?.length;
                    return c.createElement(d.Switch, null, t && s && !i ? null : c.createElement(d.Route, null, c.createElement(h.Z, { to: R })), c.createElement(d.Route, { exact: !0, path: "/settings/awards" }, c.createElement(ee, { user: l })));
                },
                ne = { context: "AWARD_SETTINGS" },
                le = { type: "CustomRetry", content: () => null },
                ie = c.memo((0, p.Z)(() => c.createElement(m.N, { errorConfig: ne, fallback: le }, c.createElement(ae, null)), { page: "settings", section: "awards" }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsAwards.02b4105a.js.map
