"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsAwards", "icons/IconIllustrationConnectAudience-js"],
    {
        625661: (e, t, a) => {
            a.d(t, { ZP: () => m });
            var n = a(202784),
                i = a(614983),
                l = a.n(i),
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
                            l()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: i, hideBackButton: l, isFullWidth: s, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: g, secondaryBar: h, style: y, subtitle: k, title: b, titleDomId: w, titleIconCell: f, titleIconCellSize: v, withBackground: _, withWideContainer: E } = this.props,
                        { isModal: C } = this.context,
                        Z = l ? d : n.createElement(r.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        x = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!_, C, !!h);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: t, centeredLogo: a, isFullWidth: s, isLarge: c, leftControl: Z, middleControl: m, position: u(p, C, i), rightControl: g, style: y, subtitle: k, title: b, titleDomId: w, titleIconCell: f, titleIconCellSize: v, withBackground: x, withWideContainer: E }), h || null);
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
                i = a(500002),
                l = a(668214),
                s = a(997174),
                r = a(118823);
            const o = (0, l.Z)()
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
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: l, search: s },
                            locationKey: r,
                        } = e;
                    let o = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (o = !0));
                    const c = i || r;
                    ((c && i !== r) || (!c && a !== l) || n !== s || o) && this._performPageUpdates(this.props);
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
            const d = (0, i.ZP)(o(c));
        },
        980633: (e, t, a) => {
            a.r(t), a.d(t, { AwardsSettingsQueryRequest: () => te, default: () => le });
            var n,
                i,
                l,
                s,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsSettingsQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "useAwardsActivate_user" }, (i = { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "awards_eligibility", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }, i, l, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
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
                w = a(154003),
                f = a(167630),
                v = a(392237),
                _ = a(111677),
                E = a.n(_),
                C = a(980407),
                Z = a(698537),
                x = a(782642),
                F = a(892541),
                B = a(87908),
                T = a(491369);
            const I = v.default.create((e) => ({ list: { gap: e.spaces.space24 }, listItem: { flexDirection: "row", gap: e.spaces.space16 }, listItemContent: { flex: 1 }, listItemTitle: { marginBottom: e.spaces.space4 }, illustration: { height: "50px", width: "50px" } })),
                S = [
                    { illustration: c.createElement(F.default, { style: I.illustration }), title: E().d520d188, description: E().ea770766 },
                    { illustration: c.createElement(B.default, { style: I.illustration }), title: E().d27f5ac6, description: E().h1d66df0 },
                    { illustration: c.createElement(T.default, { style: I.illustration }), title: E().f85fb0a2, description: E().d1433e24 },
                ],
                z = () =>
                    c.createElement(
                        y.Z,
                        { role: "list", style: I.list },
                        S.map((e) => c.createElement(y.Z, { key: e.title, role: "listitem", style: I.listItem }, e.illustration, c.createElement(y.Z, { style: I.listItemContent }, c.createElement(b.ZP, { style: I.listItemTitle, weight: "heavy" }, e.title), c.createElement(b.ZP, { color: "gray700" }, e.description)))),
                    ),
                K = "/settings/monetization";
            var A = (function () {
                var e = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "awards_feature_activate", storageKey: 'awards_feature_activate(s:"4721")' }];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivateMutation", selections: e, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useAwardsActivateMutation", selections: e }, params: { id: "ql0nbxLYZcgEQyw5Z0PlWw", metadata: {}, name: "useAwardsActivateMutation", operationKind: "mutation", text: null } };
            })();
            A.hash = "aaaa1c71aa5e6b2e3a109a5b37594b3f";
            const L = A;
            var R = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsActivate_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "eaa526ce3924dce881ea12c7b2d29239" };
            const P = R;
            var D = a(614983),
                M = a.n(D),
                H = a(277660),
                W = a.n(H),
                q = a(351743),
                U = a.n(q);
            const N = P,
                V = L,
                Q = (e) => {
                    const t = W()(N, e),
                        [a, n] = U()(V);
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
                                            M()(n, "userId must be specified");
                                            const i = e.get(n);
                                            M()(i, "userRecord must be specified"), i.invalidateRecord();
                                        },
                                    });
                                }),
                            [a, t.__id],
                        ),
                        n,
                    ];
                },
                j = E().ecdbece0,
                O = E().ef4602ec,
                G = E().j087774e,
                Y = E().db3f0bbe,
                X = E().a1f40cf8,
                $ = (0, k.ju)("https://legal.x.com/creator-terms"),
                J = v.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space64, paddingTop: e.spaces.space8, paddingBottom: "120px" }, iconTwitter: { color: e.colors.primary }, headline: { marginVertical: e.spaces.space16 }, spacing: { marginBottom: e.spaces.space8 }, footer: { marginHorizontal: e.spaces.space64, marginVertical: e.spaces.space16 } })),
                ee = c.memo(
                    (0, p.Z)(
                        ({ user: e }) => {
                            const t = (0, d.useHistory)(),
                                a = c.useCallback(() => {
                                    t.push(K);
                                }, [t]),
                                n = (0, x.p)(),
                                [i, l] = Q(e),
                                s = c.useCallback(() => {
                                    i()
                                        .then(() => {
                                            n({ text: j }), t.push("/settings/monetization/awards/dashboard");
                                        })
                                        .catch(() => {
                                            n({ text: O });
                                        });
                                }, [n, i, t]),
                                r = c.useMemo(() => ({ link: c.createElement(b.ZP, { link: $, weight: "bold" }) }), []),
                                o = c.useMemo(() => c.createElement(y.Z, { style: J.footer }, c.createElement(b.ZP, { align: "center", color: "gray700", style: J.spacing }, c.createElement(E().I18NFormatMessage, { $i18n: "d4b0b963" }, c.cloneElement(r.link, null, E().d604fb32))), c.createElement(w.ZP, { disabled: l, onPress: s, type: "primaryFilled" }, l ? c.createElement(f.Z, null) : X)), [l, s, r]);
                            return c.createElement(C.Z, { backButtonType: "close", bottomBar: o, documentTitle: G, history: t, onBackClick: a }, c.createElement(y.Z, { style: J.root }, c.createElement(b.ZP, { "aria-level": 1, role: "heading", size: "title1", weight: "heavy" }, G), c.createElement(b.ZP, { size: "headline1", style: J.headline, weight: "medium" }, Y), c.createElement(Z.Z, { style: J.spacing, type: Z.j.DiscoGlobe }), c.createElement(z, null)));
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
                        i = n.user_results.result,
                        l = a && i.award_eligible,
                        s = 0 === i.awards_eligibility?.length;
                    return c.createElement(d.Switch, null, t && s && !l ? null : c.createElement(d.Route, null, c.createElement(h.Z, { to: K })), c.createElement(d.Route, { exact: !0, path: "/settings/awards" }, c.createElement(ee, { user: i })));
                },
                ne = { context: "AWARD_SETTINGS" },
                ie = { type: "CustomRetry", content: () => null },
                le = c.memo((0, p.Z)(() => c.createElement(m.N, { errorConfig: ne, fallback: ie }, c.createElement(ae, null)), { page: "settings", section: "awards" }));
        },
        491369: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                i = a(890601),
                l = a(783427),
                s = a(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 50 50", children: n.createElement("g", null, n.createElement("circle", { cx: "25", cy: "25", fill: "#0f1419", r: "25" }), n.createElement("path", { d: "M25 14.75c-2.027 0-4.009.601-5.695 1.727-1.685 1.127-2.999 2.728-3.775 4.6-.776 1.873-.978 3.934-.583 5.923.396 1.988 1.372 3.814 2.805 5.248 1.434 1.433 3.26 2.41 5.248 2.805 1.989.396 4.05.193 5.922-.583 1.873-.776 3.474-2.09 4.6-3.775C34.65 29.009 35.25 27.027 35.25 25c0-2.718-1.08-5.325-3.002-7.248-1.923-1.922-4.53-3.002-7.248-3.002zm-.25 10.48L23.5 30.5l-2-1.5v-3.5l-1-3.5-2.47-1.41c.721-1.14 1.711-2.086 2.882-2.756 1.172-.67 2.49-1.041 3.838-1.084L24 19l-2 .5-.5 2.5 5 1.5zM30 27v-3l-1.5-3 2.88-1.23c1 1.22 1.63 2.701 1.814 4.268s-.085 3.153-.774 4.572z", fill: "#fff" })) }, { writingDirection: t });
            };
            r.metadata = { width: 50, height: 50 };
            const o = r;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var n = a(202784),
                i = a(890601),
                l = a(783427),
                s = a(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const o = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsAwards.5a75adea.js.map
