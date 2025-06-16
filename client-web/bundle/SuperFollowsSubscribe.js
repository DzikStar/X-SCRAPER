"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SuperFollowsSubscribe"],
    {
        625661: (e, a, l) => {
            l.d(a, { ZP: () => m });
            var n = l(202784),
                r = l(614983),
                t = l.n(r),
                s = l(325686),
                i = l(370006),
                o = l(786998),
                c = l(929028),
                u = l(386802);
            function d(e, a, l) {
                return e || (!a && l ? "fixed" : void 0);
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: a } = this.props;
                            t()(a || e, "Either onBackClick must be specified, or history should be supplied"), a ? a(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: a } = this.props;
                            a && a.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: a, centeredLogo: l, fixed: r, hideBackButton: t, isFullWidth: s, isLarge: c, leftControl: u, middleControl: m, position: p, rightControl: g, secondaryBar: y, style: _, subtitle: k, title: b, titleDomId: f, titleIconCell: h, titleIconCellSize: S, withBackground: F, withWideContainer: v } = this.props,
                        { isModal: w } = this.context,
                        K = t ? u : n.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, a, l) {
                            return e && !(a && l);
                        })(!!F, w, !!y);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: a, centeredLogo: l, isFullWidth: s, isLarge: c, leftControl: K, middleControl: m, position: d(p, w, r), rightControl: g, style: _, subtitle: k, title: b, titleDomId: f, titleIconCell: h, titleIconCellSize: S, withBackground: E, withWideContainer: v }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        l = c.Z.getBackgroundStyles();
                    return a ? n.createElement(s.Z, { style: !!e && l }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = u.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        879101: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n = l(202784),
                r = l(688715),
                t = l(731708),
                s = l(392237),
                i = l(111677),
                o = l.n(i);
            const c = (0, r.ju)("https://legal.x.com/purchaser-terms"),
                u = o().bc42db1c,
                d = s.default.create((e) => ({ recurring: { marginStart: e.spaces.space4 } })),
                m = ({ recurring: e, style: a }) => n.createElement(t.ZP, { color: "gray700", style: a }, n.createElement(o().I18NFormatMessage, { $i18n: "cd5e4a77" }, n.createElement(t.ZP, { color: "plum500", link: c }, o().f1561b06)), e ? n.createElement(t.ZP, { style: d.recurring }, u) : null);
        },
        652904: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n = l(202784),
                r = l(500002),
                t = l(668214),
                s = l(997174),
                i = l(118823);
            const o = (0, t.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: l, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: t, search: s },
                            locationKey: i,
                        } = e;
                    let o = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (o = !0));
                    const c = r || i;
                    ((c && r !== i) || (!c && l !== t) || n !== s || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: l, updateTweetDetailNav: n } = e;
                    a.scribePageImpression(), l(a.contextualScribeNamespace, a.contextualScribeData), n(a.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const u = (0, r.ZP)(o(c));
        },
        359870: (e, a, l) => {
            l.d(a, { Z: () => i, b: () => s });
            var n = l(111677);
            const r = l.n(n)().g33c0564,
                t = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/,
                s = 385;
            function i(e) {
                return e.length > s ? r : t.test(e) ? void 0 : r;
            }
        },
        767508: (e, a, l) => {
            l.r(a), l.d(a, { default: () => h });
            var n = l(807896),
                r = l(202784),
                t = l(669406),
                s = l(325686),
                i = l(154003),
                o = l(392237),
                c = l(111677),
                u = l.n(c),
                d = l(980407),
                m = l(569778),
                p = l(293115);
            const g = u().a0b4541c,
                y = u().a5634d9a,
                _ = u().a893d602,
                k = { page: "super_follows_subscription_failure" },
                b = o.default.create((e) => ({ button: { marginTop: e.spaces.space36, width: "100%" }, wrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", marginHorizontal: e.spaces.space80, alignItems: "center", justifyContent: "center" } })),
                f = (e) => {
                    const { history: a, match: l } = e,
                        n = l.params.screenName,
                        t = n ? `/${n}/superfollows/subscribe` : "/home";
                    return r.createElement(p.nO, { namespace: k }, r.createElement(d.Z, { backButtonType: "close", backLocation: t, history: a }, r.createElement(s.Z, { style: b.wrapper }, r.createElement(m.Z, { headline: g, illustration: m.j.ConfusedDog, subtext: y }), r.createElement(i.ZP, { onPress: () => a.replace(t), size: "xLarge", style: b.button, type: "primaryFilled" }, _))));
                },
                h = (e) => r.createElement(t.Z, (0, n.Z)({}, e, { component: f }));
        },
        518983: (e, a, l) => {
            l.r(a), l.d(a, { default: () => We });
            var n,
                r,
                t,
                s,
                i,
                o,
                c,
                u,
                d,
                m,
                p,
                g = l(807896),
                y = l(202784),
                _ = l(669406),
                k = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "SuperFollowsSubscribeQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (r = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "super_follow_eligible", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null }), { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeScreen_user" }], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                            { alias: "viewer", args: (o = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeScreen_viewer" }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "SuperFollowsSubscribeQuery",
                        selections: [
                            {
                                alias: "user",
                                args: r,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
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
                                            t,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    s,
                                                    i,
                                                    (c = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                    (u = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null }),
                                                    (d = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }),
                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AudienceRewardsProductMetadata",
                                                        kind: "LinkedField",
                                                        name: "super_follow_creator_product_metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "product_id", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "tax_amount", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "VerifiedProgramsCreatorFeatures", kind: "LinkedField", name: "verified_program_creator_features", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "email_sharing_from_subscribers_enabled", storageKey: null }], storageKey: null },
                                                    (m = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }),
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AudienceRewardsBenefitsData",
                                                        kind: "LinkedField",
                                                        name: "super_follow_creator_benefits",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "AudienceRewardsBenefitInfo",
                                                                kind: "LinkedField",
                                                                name: "benefits_data",
                                                                plural: !0,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "benefit_type", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (p = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    p,
                                ],
                                storageKey: null,
                            },
                            { alias: "viewer", args: o, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [u, d, { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }, m, c, { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, p], type: "User", abstractKey: null }], storageKey: null }, p], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "mJrB5JhRQNjGznLAA_8Tfw", metadata: { features: ["creator_subscriptions_email_share_enabled", "super_follow_subscriptions_tax_calculation_enabled"] }, name: "SuperFollowsSubscribeQuery", operationKind: "query", text: null },
                };
            k.hash = "b5ca6f3d0c226d006500f7a642421be5";
            const b = k;
            l(585488);
            var f = l(107267),
                h = l(154003),
                S = l(392237),
                F = l(111677),
                v = l.n(F),
                w = l(980407),
                K = l(724345),
                E = l(783373),
                C = l(883229),
                L = l(943914),
                Z = l(293115),
                T = l(28557),
                x = l(535338),
                B = l(615027),
                U =
                    (l(136728),
                    {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "SuperFollowsSubscribeScreen_viewer",
                        selections: [
                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeSellSheet_viewer" },
                        ],
                        type: "User",
                        abstractKey: null,
                        hash: "2346846c87f6b76cd76ea9b834745cff",
                    });
            const P = U;
            var N = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeScreen_user",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "AudienceRewardsProductMetadata",
                        kind: "LinkedField",
                        name: "super_follow_creator_product_metadata",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "product_id", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "tax_amount", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "VerifiedProgramsCreatorFeatures", kind: "LinkedField", name: "verified_program_creator_features", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "email_sharing_from_subscribers_enabled", storageKey: null }], storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsSubscribeSellSheet_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "0758ef01f3af75b1be4ac05ba6a4ca2b",
            };
            const I = N;
            var V = l(576648),
                A = l(325686),
                M = l(277660),
                D = l.n(M),
                R = l(811176),
                z = l(167630),
                $ = l(708852),
                j = l(630715),
                H = l(786272),
                W = l(73664),
                O = l(952793),
                Q = l(782642),
                G = l(97882),
                q = l(782826),
                J = l(359870),
                X = l(725516),
                Y = l(688715),
                ee = l(731708),
                ae = l(96083),
                le = l(855488),
                ne = l(725405);
            const re = v().be03ecca,
                te = (0, Y.ju)("https://help.x.com/using-x/creator-email-sharing"),
                se = (0, Y.ju)("https://legal.x.com/creator-email-sharing-terms.html"),
                ie = v().i859a9d4,
                oe = S.default.create((e) => ({ learnMore: { marginStart: e.spaces.space4 }, row: { flexDirection: "row", gap: e.spaces.space16 }, noSpacing: { paddingHorizontal: "0" } })),
                ce = ({ consented: e, creatorName: a, setConsented: l, setSubscriptionEmail: n, subscriptionEmail: r }) => {
                    const [t, s] = y.useState(),
                        i = (0, ne.Z)(),
                        o = y.useCallback(() => {
                            r && s((0, J.Z)(r));
                        }, [s, r]),
                        c = y.useCallback((e) => n(e.currentTarget.value), [n]),
                        u = y.useCallback(
                            (e) => {
                                i.scribe({ section: "email_share_consent", element: "consent_checkbox", action: e ? "accept" : "clear" }), l(e), e || (n(""), s(""));
                            },
                            [i, l, n],
                        ),
                        d = y.useMemo(() => ({ elements: { link: y.createElement(ee.ZP, { color: "plum500", link: se }) }, variables: { creatorName: a } }), [a]);
                    return y.createElement(A.Z, null, y.createElement(A.Z, { style: oe.row }, y.createElement(ae.Z, { checked: e, onChange: u }), y.createElement(ee.ZP, { color: "gray700" }, y.createElement(v().I18NFormatMessage, { $i18n: "fca299bb", creatorName: d.variables.creatorName }, y.cloneElement(d.elements.link, null, v().e6c72234)), y.createElement(ee.ZP, { color: "plum500", link: te, style: oe.learnMore }, ie))), y.createElement(le.Z, { editable: e, errorText: t, invalid: !!t, label: re, name: "subscriptionEmailAddress", onBlur: o, onChange: c, style: oe.noSpacing, testID: "subscriptionEmailAddress", value: r }));
                };
            var ue = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeSellSheet_viewer",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "73bc25e3a54000885c893fb3bda4912b",
            };
            const de = ue;
            var me = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSubscribeSellSheet_user",
                selections: [
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "AudienceRewardsBenefitsData",
                        kind: "LinkedField",
                        name: "super_follow_creator_benefits",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "AudienceRewardsBenefitInfo",
                                kind: "LinkedField",
                                name: "benefits_data",
                                plural: !0,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "benefit_type", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "da9160d70ee0f585b3ca7b6a9b584289",
            };
            const pe = me;
            var ge = l(879101),
                ye = l(8685);
            const _e = pe,
                ke = de,
                be = (e) => {
                    const { children: a, emailShareElement: l, isWide: n, user: r, viewer: t } = e,
                        s = D()(_e, r),
                        i = D()(ke, t),
                        o = s.core?.name ?? void 0,
                        c = s.avatar?.image_url ?? void 0,
                        u = s.core?.screen_name ?? void 0,
                        d = s.super_follow_creator_benefits?.creator_intro ?? void 0,
                        m = (s.super_follow_creator_benefits?.benefits_data ?? []).find((e) => "ExclusiveContent" === e.benefit_type),
                        p = m?.description ?? void 0,
                        g = i.avatar?.image_url ?? void 0,
                        _ = i.core?.name ?? void 0,
                        k = i.core?.screen_name ?? void 0,
                        b = i.privacy?.protected ?? void 0,
                        f = i.verification?.verified ?? void 0,
                        h = i?.is_blue_verified ?? void 0,
                        S = y.useMemo(() => [fe.subscribeButtonContainer, n && fe.subscribeButtonContainerWide], [n]);
                    return y.createElement(y.Fragment, null, y.createElement(ye.Z, { badgeImageUrl: g, badgeName: _, badgeScreenName: k, descriptionValue: p, imageUrl: c, introValue: d, isBlueVerified: h, isProtected: b, isVerified: f, name: o, screenName: u }), y.createElement(A.Z, { style: S }, l, y.createElement(ge.Z, { recurring: !0, style: fe.disclaimer }), a));
                },
                fe = S.default.create((e) => ({ disclaimer: { marginVertical: e.spaces.space24 }, subscribeButtonContainer: { alignItems: "center", flexGrow: 1, marginBottom: e.spaces.space40, marginTop: e.spaces.space48, paddingHorizontal: e.spaces.space32 }, subscribeButtonContainerWide: { paddingHorizontal: e.spaces.space48 } }));
            var he = (function () {
                var e = { defaultValue: null, kind: "LocalArgument", name: "consented" },
                    a = { defaultValue: null, kind: "LocalArgument", name: "creator_id" },
                    l = { defaultValue: null, kind: "LocalArgument", name: "email" },
                    n = [
                        {
                            alias: null,
                            args: [
                                { kind: "Literal", name: "consent_type", value: "EmailSharingSubscriberToCreator" },
                                { kind: "Variable", name: "consented", variableName: "consented" },
                                { kind: "Variable", name: "creator_id", variableName: "creator_id" },
                                {
                                    items: [
                                        {
                                            fields: [
                                                { kind: "Literal", name: "key", value: "email" },
                                                { kind: "Variable", name: "value", variableName: "email" },
                                            ],
                                            kind: "ObjectValue",
                                            name: "metadata.0",
                                        },
                                    ],
                                    kind: "ListValue",
                                    name: "metadata",
                                },
                                { kind: "Literal", name: "s", value: "5551" },
                            ],
                            concreteType: "VerifiedProgramsConsentResponse",
                            kind: "LinkedField",
                            name: "subscriber_consent",
                            plural: !1,
                            selections: [{ alias: null, args: null, kind: "ScalarField", name: "acknowledged", storageKey: null }],
                            storageKey: null,
                        },
                    ];
                return { fragment: { argumentDefinitions: [e, a, l], kind: "Fragment", metadata: null, name: "useEmailShareConsentUpdateMutation", selections: n, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [l, a, e], kind: "Operation", name: "useEmailShareConsentUpdateMutation", selections: n }, params: { id: "cpdX3u0AUkdRb5mc3LpVpg", metadata: {}, name: "useEmailShareConsentUpdateMutation", operationKind: "mutation", text: null } };
            })();
            he.hash = "c3538b09e6ebfaf72cfafe1dcdd48251";
            const Se = he;
            var Fe = l(351743),
                ve = l.n(Fe);
            const we = Se;
            l(571372);
            var Ke = (function () {
                var e = [
                        { defaultValue: null, kind: "LocalArgument", name: "cancel_url" },
                        { defaultValue: null, kind: "LocalArgument", name: "external_product_id" },
                        { defaultValue: null, kind: "LocalArgument", name: "success_url" },
                    ],
                    a = [
                        {
                            alias: null,
                            args: [
                                { kind: "Variable", name: "cancel_url", variableName: "cancel_url" },
                                { kind: "Variable", name: "external_product_id", variableName: "external_product_id" },
                                { kind: "Literal", name: "s", value: "4721" },
                                { kind: "Variable", name: "success_url", variableName: "success_url" },
                            ],
                            concreteType: "WebSubscriptionCheckoutSession",
                            kind: "LinkedField",
                            name: "subscriptioncheckoutsession_create_v2",
                            plural: !1,
                            selections: [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }],
                            storageKey: null,
                        },
                    ];
                return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useSuperFollowsCreateStripeSubscriptionUrlMutation", selections: a, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useSuperFollowsCreateStripeSubscriptionUrlMutation", selections: a }, params: { id: "1nNykZ_aQohdxHKoykBVmg", metadata: {}, name: "useSuperFollowsCreateStripeSubscriptionUrlMutation", operationKind: "mutation", text: null } };
            })();
            Ke.hash = "759d9c15b4318f3e6cf9204063fd8da0";
            const Ee = Ke,
                Ce = v().d2613123,
                Le = v().ef4602ec,
                Ze = v().c4640fc0,
                Te = v().a72064a8,
                xe = v().f88553c8,
                Be = I,
                Ue = P,
                Pe = (e) => {
                    const { screenName: a, user: l, viewer: n } = e,
                        r = (0, O.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        t = (0, O.hC)("super_follow_subscriptions_tax_calculation_enabled"),
                        s = (0, O.hC)("creator_subscriptions_email_share_enabled"),
                        [i, o] = y.useState(""),
                        [c, u] = y.useState(!1),
                        d = y.useRef(),
                        m = (0, W.R)(d, { threshold: 0.5 }),
                        p = (0, X.z)(),
                        _ = D()(Be, l),
                        k = D()(Ue, n),
                        b = (0, f.useHistory)(),
                        S = (0, Q.p)(),
                        F = _.legacy?.id_str ?? void 0,
                        v = _.core?.screen_name ?? void 0,
                        K = ((e, a, l, n) => {
                            let r = e;
                            return l && n && (r += a), r;
                        })(_.super_follow_creator_product_metadata?.amount ?? 0, _.super_follow_creator_product_metadata?.tax_amount ?? 0, r, t),
                        E = _.super_follow_creator_product_metadata?.currency_code ?? void 0,
                        C = _.super_follow_creator_product_metadata?.product_id ?? void 0,
                        L = k.legacy?.id_str ?? void 0,
                        { href: Z, origin: T } = q.ZP.get(),
                        x = v ? `${T}/${v}/creator-subscriptions/subscribe/success` : T,
                        B = v ? `${T}/${v}/creator-subscriptions/subscribe/failure` : T,
                        [U, P] = (({ cancelUrl: e, productId: a, successUrl: l }) => {
                            const [n, r] = ve()(Ee);
                            return [
                                y.useCallback(
                                    () =>
                                        a
                                            ? new Promise((r, t) => {
                                                  n({
                                                      variables: { cancel_url: e, external_product_id: a, success_url: l },
                                                      onCompleted: (e, a) => {
                                                          const l = e.subscriptioncheckoutsession_create_v2?.session_url;
                                                          l ? r(l) : t(new Error("Missing session URL"));
                                                      },
                                                      onError: t,
                                                  });
                                              })
                                            : Promise.reject(new Error("Missing product ID")),
                                    [n, e, a, l],
                                ),
                                r,
                            ];
                        })({ productId: C, successUrl: x, cancelUrl: B }),
                        [N] = (() => {
                            const [e, a] = ve()(we);
                            return [
                                y.useCallback(
                                    ({ consented: a, creatorId: l, email: n }) =>
                                        new Promise((r, t) => {
                                            e({
                                                variables: { consented: a, creator_id: l, email: n },
                                                onCompleted: (e, a) => {
                                                    r(!!e?.subscriber_consent?.acknowledged);
                                                },
                                                onError: t,
                                            });
                                        }),
                                    [e],
                                ),
                                a,
                            ];
                        })(),
                        I = y.useMemo(() => {
                            let e = (0, q.G3)(b.location);
                            const a = b.getLastNonModalLocationPathname() || "";
                            !(0, q.d)(b.location) && v && a.includes(`${v}/status`) && (e = "tweet");
                            const l = _.legacy?.id_str ? { creator_user_id: _.legacy.id_str, referring_page: e } : void 0;
                            return { items: [{ is_viewer_follows_user: !!_.relationship_perspectives?.following, super_follow_details: l }] };
                        }, [v, _, b]);
                    y.useEffect(() => {
                        p.scribe({ element: "subscribe_screen", action: "impression", data: I });
                    }, [I, p]);
                    const M = s && !!_.verified_program_creator_features?.email_sharing_from_subscribers_enabled,
                        Y = M && c,
                        ee = Y && (!i || !!(0, J.Z)(i)),
                        ae = _.core?.name ?? "",
                        le = M ? y.createElement(ce, { consented: c, creatorName: ae, setConsented: u, setSubscriptionEmail: o, subscriptionEmail: i }) : null,
                        ne = Ze,
                        re = Te,
                        te = y.useCallback(() => {
                            p.scribe({ element: "subscribe_button", action: "click", data: I });
                            const e =
                                    Y && !ee && F
                                        ? N({ email: i, creatorId: F, consented: c })
                                              .then((e) => {
                                                  p.scribe({ element: "email_share_consent_update", action: e ? "success" : "error", data: I });
                                              })
                                              .catch(() => {
                                                  p.scribe({ element: "email_share_consent_update", action: "error", data: I });
                                              })
                                        : null,
                                a = U().catch(() => {
                                    S({ text: Le });
                                });
                            Promise.all([a, e]).then(([e]) => {
                                e && q.ZP.navigateTo(e);
                            });
                        }, [p, F, I, Y, ee, U, N, i, c, S]),
                        se = y.useCallback(() => {
                            V.Z.setString(Z), S({ text: xe }), p.scribe({ action: "share", data: I });
                        }, [S, p, Z, I]),
                        ie = y.useCallback(
                            (e) => {
                                const a = [];
                                return a.push({ text: re, Icon: j.default, onClick: se }), p.scribe({ element: "share", action: "click", data: I }), y.createElement(R.Z, { items: a, onCloseRequested: e });
                            },
                            [p, re, se, I],
                        ),
                        oe = E && K ? ((e, a) => G.T[e.toUpperCase()](parseInt(a, 10) / 1e6))(E, K) : void 0,
                        ue = { disabled: (F && L && F === L) || P || !C || ee, onPress: te },
                        de = y.createElement(h.ZP, (0, g.Z)({}, ue, { backgroundColor: "plum500", borderColor: "transparent", color: "white", ref: d, size: "xLarge", style: Ne.bigSubscribeButton }), P ? y.createElement(z.Z, null) : Ce({ price: oe })),
                        me = y.createElement(h.ZP, (0, g.Z)({}, ue, { disabled: ue.disabled && !m, size: "small", style: [Ne.transitionOpacity, m ? Ne.opacityNone : void 0], type: "primaryFilled" }), P ? y.createElement(z.Z, { size: "small" }) : Ce({ price: oe })),
                        pe = y.createElement(h.ZP, { "aria-label": ne, hoverLabel: { label: ne }, icon: y.createElement(H.default, null), renderMenu: ie, size: "small", style: Ne.shareButton, type: "primaryText" }),
                        ge = y.createElement(A.Z, { style: Ne.rightControl }, me, pe),
                        ye = (0, $.$u)();
                    return y.createElement(w.Z, { backButtonType: "back", backLocation: `/${a}/superfollows`, children: y.createElement(be, { children: de, emailShareElement: le, isWide: ye, user: _, viewer: k }), history: b, rightControl: ge });
                },
                Ne = S.default.create((e) => ({ bigSubscribeButton: { width: "100%" }, opacityNone: { opacity: 0 }, rightControl: { flexDirection: "row" }, shareButton: { marginStart: e.spaces.space16 }, transitionOpacity: { transition: "opacity 0.2s 0s ease-in-out" } })),
                Ie = v().g61ed8a4,
                Ve = v().c3d23f10,
                Ae = v().d338f53e,
                Me = b,
                De = { context: "SuperFollowsSubscribe" },
                Re = { page: "super_follows_marketing" },
                ze = ({ screenName: e }) => {
                    const a = { screenName: (0, T.Z)(e) },
                        l = (0, x.p)(Me, a),
                        n = l?.user?.result,
                        r = l?.viewer?.user_results?.result;
                    return n && r ? (n.super_following ? y.createElement(B.Z, { to: `/${e}/creator-subscriptions/manage` }) : n.super_follow_eligible ? y.createElement(Z.nO, { namespace: Re }, y.createElement(Pe, { screenName: e, user: n, viewer: r })) : y.createElement(B.Z, { to: `/${e}` })) : null;
                },
                $e = () => {
                    const e = (0, f.useHistory)(),
                        a = (0, f.useParams)().screenName || "",
                        l = y.useMemo(
                            () => ({
                                type: "CustomRetry",
                                content: (l) => {
                                    const n = y.createElement(K.Z, { style: He.error }, y.createElement(E.Z, { description: Ve, title: Ie }), y.createElement(h.ZP, { onPress: l, style: He.errorButton, type: "brandFilled" }, Ae));
                                    return y.createElement(w.Z, { backButtonType: "close", backLocation: `/${a}`, children: n, history: e });
                                },
                            }),
                            [e, a],
                        );
                    return y.createElement(C.N, { errorConfig: De, fallback: l }, y.createElement(L.B, null, y.createElement(ze, { screenName: a })));
                },
                je = y.memo($e),
                He = S.default.create((e) => ({ error: { marginTop: e.spaces.space12, marginBottom: e.spaces.space40, width: "100%" }, errorButton: { marginTop: e.spaces.space32 } })),
                We = (e) => y.createElement(_.Z, (0, g.Z)({}, e, { component: je }));
        },
        273961: (e, a, l) => {
            l.r(a), l.d(a, { default: () => f });
            var n = l(807896),
                r = l(202784),
                t = l(669406),
                s = l(325686),
                i = l(154003),
                o = l(392237),
                c = l(111677),
                u = l.n(c),
                d = l(980407),
                m = l(569778),
                p = l(293115);
            const g = u().b17f0c4b,
                y = u().a893d602,
                _ = { page: "super_follows_subscription_success" },
                k = o.default.create((e) => ({ button: { marginTop: e.spaces.space36, width: "100%" }, wrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", marginHorizontal: e.spaces.space80, alignItems: "center", justifyContent: "center" } })),
                b = (e) => {
                    const { history: a, match: l } = e,
                        n = l.params.screenName,
                        t = n ? `/${n}` : "/home";
                    return r.createElement(p.nO, { namespace: _ }, r.createElement(d.Z, { backButtonType: "close", backLocation: t, history: a }, r.createElement(s.Z, { style: k.wrapper }, r.createElement(m.Z, { headline: g({ screenName: n }), illustration: m.j.Success }), r.createElement(i.ZP, { onPress: () => a.replace(t), size: "xLarge", style: k.button, type: "primaryFilled" }, y))));
                },
                f = (e) => r.createElement(t.Z, (0, n.Z)({}, e, { component: b }));
        },
        669406: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n = l(202784),
                r = l(325686),
                t = l(107267),
                s = l(392237),
                i = l(980407),
                o = l(952793),
                c = l(923128),
                u = l(668214),
                d = l(390387);
            const m = (0, u.Z)().propsFromState(() => ({ isLoggedIn: d.Qb }))(({ component: e, isLoggedIn: a, ...l }) => {
                    const s = (0, t.useParams)().screenName || "",
                        u = n.createElement(i.Z, { backLocation: `/${s}`, history: l.history }, n.createElement(r.Z, { style: p.wrapper }, n.createElement(c.Z, { history: l.history, location: l.location, match: l.match }))),
                        d = (0, o.hC)("super_follow_android_web_subscription_enabled");
                    return !a || !d ? u : n.createElement(e, l);
                }),
                p = s.default.create((e) => ({ modalContainerStyle: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: "auto", alignItems: "center", justifyContent: "center" }, wrapper: { alignItems: "center", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SuperFollowsSubscribe.0d23df9a.js.map
