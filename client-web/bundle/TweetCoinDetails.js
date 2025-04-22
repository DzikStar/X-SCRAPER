"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetCoinDetails"],
    {
        229333: (e, t, l) => {
            l.d(t, { Z: () => u });
            var n = l(202784),
                r = l(466999),
                a = l(325686),
                i = l(392237),
                s = l(674132);
            const o = l.n(s)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        l = o({ title: t });
                    return n.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), n.createElement(a.Z, { "aria-label": l }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, l) => {
            l.d(t, { ZP: () => p });
            var n = l(202784),
                r = l(614983),
                a = l.n(r),
                i = l(325686),
                s = l(370006),
                o = l(786998),
                c = l(929028),
                d = l(386802);
            function u(e, t, l) {
                return e || (!t && l ? "fixed" : void 0);
            }
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: l, fixed: r, hideBackButton: a, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: y, secondaryBar: g, style: h, subtitle: k, title: f, titleDomId: _, titleIconCell: b, titleIconCellSize: w, withBackground: v, withWideContainer: E } = this.props,
                        { isModal: C } = this.context,
                        Z = a ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        T = (function (e, t, l) {
                            return e && !(t && l);
                        })(!!v, C, !!g);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: t, centeredLogo: l, isFullWidth: i, isLarge: c, leftControl: Z, middleControl: p, position: u(m, C, r), rightControl: y, style: h, subtitle: k, title: f, titleDomId: _, titleIconCell: b, titleIconCellSize: w, withBackground: T, withWideContainer: E }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        l = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && l }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, l) => {
            l.d(t, { Z: () => o });
            var n = l(202784),
                r = l(325686),
                a = l(392237);
            class i extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: s.root });
                }
            }
            const s = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                o = i;
        },
        980407: (e, t, l) => {
            l.d(t, { Z: () => g, w: () => m });
            var n = l(202784),
                r = l(325686),
                a = l(108362),
                i = l(386802),
                s = l(392237),
                o = l(652904),
                c = l(555079),
                d = l(625661),
                u = l(449067),
                p = l(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: l, backLocation: a, centerTitle: i, hideBackButton: s, history: o, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, rightControl: h, secondaryBar: k, subtitle: f, title: _ } = this.props,
                                { isModal: b } = this.context;
                            return n.createElement(r.Z, { style: b ? [y.childViewAppBarRoot, y.appBarZindex] : y.appBarZindex }, n.createElement(d.ZP, { backButtonType: l || (b ? "close" : "back"), backLocation: a, centerTitle: i, fixed: !b, hideBackButton: s, history: o, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, ref: e, rightControl: h, secondaryBar: k, style: [b && y.appBarModal, t], subtitle: f, title: _, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: l } = this.context;
                            t && (l ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: l, containerStyle: i, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: h } = this.props,
                        { isModal: k } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(o.Z, null, n.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: g }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [y.root, k && y.rootModal] }, !k && f, n.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [y.container, k && y.containerModal, i] }, k ? n.createElement(p.Z, { style: y.viewport }, f, l) : l), t ? n.createElement(r.Z, { style: [y.bottomBarModal, !k && !h && y.bottomBarMobile] }, n.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const y = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        965245: (e, t, l) => {
            l.d(t, { Z: () => o });
            var n = l(807896),
                r = l(202784),
                a = l(229333),
                i = l(414939),
                s = l(334346);
            const o = ({ accessibilityTitle: e, footer: t = r.createElement(i.Z, null), ...l }) => {
                const o = r.createElement(s.C, (0, n.Z)({}, l, { footer: t }));
                return e ? r.createElement(a.Z, { title: e }, o) : o;
            };
        },
        334346: (e, t, l) => {
            l.d(t, { C: () => o, Z: () => s });
            var n = l(807896),
                r = l(202784),
                a = l(524084),
                i = l(768572);
            const s = "stable_sort_index",
                o = r.forwardRef((e, t) => {
                    const l = e.cacheKey;
                    return r.createElement(i.ZP, { identifier: l }, r.createElement(a.Z, (0, n.Z)({ ref: t }, e)));
                });
        },
        231035: (e, t, l) => {
            l.d(t, { Z: () => h });
            var n = l(202784),
                r = l(420740),
                a = l(108362),
                i = l(731708),
                s = l(154003),
                o = l(392237),
                c = l(674132),
                d = l.n(c),
                u = l(272175);
            const p = (0, l(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(u.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                m = "error-detail",
                y = d().e49537c2,
                g = d().a9ae1e78;
            class h extends n.PureComponent {
                render() {
                    return n.createElement(r.Z, { testID: m }, n.createElement(p, null), n.createElement(a.Z, { style: k.root }, n.createElement(i.ZP, { align: "center", color: "gray700", style: k.retryText }, y), n.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, g)));
                }
            }
            const k = o.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, l) => {
            l.d(t, { Z: () => d });
            var n = l(202784),
                r = l(500002),
                a = l(668214),
                i = l(997174),
                s = l(118823);
            const o = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: l, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: i },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    t.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && t.pathname === l && ((this._isInBackground = !1), (o = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && l !== a) || n !== i || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: l, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), l(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(o(c));
        },
        301410: (e, t, l) => {
            l.d(t, { i: () => y.ZP, z: () => f });
            var n = l(202784),
                r = l(928123),
                a = l.n(r),
                i = l(72845),
                s = l.n(i),
                o = l(57074),
                c = l.n(o),
                d = l(516951),
                u = l(88656),
                p = l(71620),
                m = l(163889),
                y = l(312771);
            const g = ({ render: e }) => e({ fetchStatus: y.ZP.LOADING, data: null, error: null, retry: d.Z });
            class h extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, m.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const k = ({ query: e, queryRef: t, render: l }) => {
                    const n = a()(e, t);
                    return l({ fetchStatus: y.ZP.LOADED, data: n, error: null, retry: d.Z });
                },
                f = (e, t) =>
                    function ({ fetchPolicy: l = "store-or-network", render: r, variables: a }) {
                        const [i, o] = s()(e),
                            d = (0, p.n7)(t.errorConfig.context),
                            u = c()(a),
                            m = n.useCallback(() => {
                                o(u, { fetchPolicy: "network-only" });
                            }, [o, u]);
                        return (
                            n.useLayoutEffect(() => {
                                o(u, { fetchPolicy: l });
                            }, [l, o, u]),
                            i
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(g, { render: r }) },
                                      n.createElement(h, { errorHandler: d(t.errorConfig.options || {}), key: i.fetchKey, retry: m }, (t, l) => (t ? r({ fetchStatus: y.ZP.FAILED, error: t, data: null, retry: l }) : n.createElement(k, { query: e, queryRef: i, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        524084: (e, t, l) => {
            l.d(t, { Z: () => i });
            var n = l(202784),
                r = l(523561),
                a = l(195560);
            const i = (0, r.Z)({ loader: () => l.e("loader.AbsolutePower").then(l.bind(l, 590136)), renderPlaceholder: (e, t) => n.createElement(a.Z, { hasError: e, onRetry: t }) });
        },
        466441: (e, t, l) => {
            l.r(t), l.d(t, { NotFoundScreen: () => _, default: () => w });
            l(571372);
            var n = l(202784),
                r = l(386802),
                a = l(108362),
                i = l(392237),
                s = l(674132),
                o = l.n(s),
                c = l(187669),
                d = l(449067),
                u = l(38293),
                p = l(231035),
                m = l(652904),
                y = l(952793),
                g = l(163889),
                h = l(725516);
            const k = o().ba929da8,
                f = o().d203e242;
            function _(e) {
                const { splat: t } = e.match.params,
                    { isModal: l } = n.useContext(r.Z),
                    i = (0, y.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        i && t && (0, g.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    n.createElement(m.Z, null, n.createElement(d.Z.Configure, { backLocation: "/", documentTitle: k, title: f }), n.createElement(a.Z, { style: l && b.modal }, n.createElement(p.Z, null)), n.createElement(u.Z, { title: k, withMeta: !1 }))
                );
            }
            const b = i.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, h.Z)(_, { page: "not_found" });
        },
        905040: (e, t, l) => {
            l.r(t), l.d(t, { TweetCoinDetailsScreen: () => ee, TweetCoinDetailsScreenQueryRequest: () => $, default: () => le });
            var n,
                r,
                a,
                i,
                s,
                o,
                c,
                d,
                u,
                p,
                m,
                y,
                g,
                h,
                k = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "tweet_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "TweetCoinDetailsScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "rest_id", variableName: "tweet_id" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ]),
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "TweetAwardLeaderboard",
                                                        kind: "LinkedField",
                                                        name: "awards_granted_leaderboard",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "TweetAwardLeaderboardEntry",
                                                                kind: "LinkedField",
                                                                name: "entries",
                                                                plural: !0,
                                                                selections: [
                                                                    (a = { alias: null, args: null, kind: "ScalarField", name: "is_anonymous", storageKey: null }),
                                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "rank", storageKey: null }),
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserResults",
                                                                        kind: "LinkedField",
                                                                        name: "sender_results",
                                                                        plural: !1,
                                                                        selections: [
                                                                            (o = {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: null,
                                                                                kind: "LinkedField",
                                                                                name: "result",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                                                                                            { args: null, kind: "FragmentSpread", name: "UserName_user" },
                                                                                        ],
                                                                                        type: "User",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            }),
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth", storageKey: null }),
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null }),
                                                    (u = { alias: null, args: null, concreteType: "TweetAwards", kind: "LinkedField", name: "awards_granted_by_viewer", plural: !1, selections: [c, { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth_anonymous", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth_public", storageKey: null }], storageKey: null }),
                                                    (p = { alias: null, args: null, concreteType: "TweetAwards", kind: "LinkedField", name: "granted_awards", plural: !1, selections: [c], storageKey: null }),
                                                ],
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                            { kind: "RequiredField", field: { alias: null, args: (m = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: o, action: "THROW", path: "viewer_v2.user_results.result" }], storageKey: null }, action: "THROW", path: "viewer_v2.user_results" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW", path: "viewer_v2" },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "TweetCoinDetailsScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: r,
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
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
                                            s,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "TweetAwardLeaderboard",
                                                        kind: "LinkedField",
                                                        name: "awards_granted_leaderboard",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "TweetAwardLeaderboardEntry",
                                                                kind: "LinkedField",
                                                                name: "entries",
                                                                plural: !0,
                                                                selections: [
                                                                    a,
                                                                    i,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserResults",
                                                                        kind: "LinkedField",
                                                                        name: "sender_results",
                                                                        plural: !1,
                                                                        selections: (h = [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: null,
                                                                                kind: "LinkedField",
                                                                                name: "result",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    s,
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "ApiUser",
                                                                                                kind: "LinkedField",
                                                                                                name: "legacy",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                                            {
                                                                                                alias: "affiliates_highlighted_label",
                                                                                                args: null,
                                                                                                concreteType: "HighlightedUserLabelResponse",
                                                                                                kind: "LinkedField",
                                                                                                name: "identity_profile_labels_highlighted_label",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "HighlightedUserLabel",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "label",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(y = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [y], storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                            { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                            { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                        ],
                                                                                        type: "User",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            g,
                                                                        ]),
                                                                        storageKey: null,
                                                                    },
                                                                    c,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    d,
                                                    u,
                                                    p,
                                                    g,
                                                ],
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    g,
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: m, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: h, storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "PkaL35ppw8P48oNr3vAU7g", metadata: {}, name: "TweetCoinDetailsScreenQuery", operationKind: "query", text: null },
                };
            k.hash = "7cae7dd01ebb6d6da0d150e5105be27a";
            const f = k;
            var _ = l(202784),
                b = l(325686),
                w = (l(585488), l(731708)),
                v = l(750410),
                E = l(891198),
                C = l(844685),
                Z = l(167630),
                T = l(392237),
                L = l(674132),
                F = l.n(L),
                B = l(856151),
                x = l(980407),
                S = l(965245),
                K = l(301410),
                P = l(293115),
                R = l(312771),
                D = l(466441),
                I = l(952428),
                A = l(823161),
                N = l(412876),
                U = l(553660);
            const Q = F().fbb7764b,
                q = F().e70a07b2,
                M = F().da68fff1,
                W = ({ coins: e, isAnonymous: t, isLoggedinUser: l, user: n }) => _.createElement(b.Z, { role: "listitem" }, _.createElement(I.Z, { style: O.root, withInteractiveStyling: !1 }, _.createElement(b.Z, { style: O.row }, t ? _.createElement(A.default, { size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }) : "User" === n?.__typename ? _.createElement(N.Z, { size: "xLarge", user: n, withLink: !0 }) : null, _.createElement(b.Z, { style: O.column }, _.createElement(w.ZP, { size: "headline2", style: O.awardDetails, weight: "medium" }, t && l ? M({ count: e }) : Q({ count: e })), t ? _.createElement(w.ZP, { style: O.spacing }, q) : "User" === n?.__typename ? _.createElement(U.Z, { style: O.userName, user: n, weight: "normal", withLink: !0 }) : null)))),
                H = _.memo(W),
                O = T.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, row: { alignItems: "center", flexDirection: "row" }, column: { flexDirection: "column" }, userName: { marginHorizontal: e.spaces.space8 }, spacing: { marginStart: e.spaces.space8 }, awardDetails: { marginStart: e.spaces.space8, marginBottom: e.spaces.space4 } })),
                z = F().h1c5d6aa,
                V = F().h6d45054,
                G = F().fbb7764b,
                j = { page: "tweet_coin_details" },
                $ = f,
                X = (0, K.z)($, { errorConfig: { context: "TWEET_COINS_DETAILS_CONTEXT" } }),
                Y = (e) => `${e.rank}`,
                J = (e) => null != e && e > 0,
                ee = (e) => {
                    const { history: t } = e,
                        { statusId: l } = e.match.params,
                        n = _.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        r = _.useMemo(() => ({ tweet_id: l || "0" }), [l]),
                        a = _.useCallback((e) => _.createElement(H, { coins: e.total_coins_worth, isAnonymous: e.is_anonymous, key: e.rank, user: e.sender_results?.result }), []),
                        i = _.useCallback((e) => _.createElement(b.Z, { style: te.title }, _.createElement(B.default, null), _.createElement(w.ZP, { size: "headline1", style: te.spacing, weight: "bold" }, G({ count: e }))), []),
                        s = _.useCallback(
                            ({ data: e, fetchStatus: l, retry: r }) => {
                                if (l === R.ZP.FAILED) return _.createElement(v.Z, { onRequestRetry: r });
                                if (l === R.ZP.LOADED) {
                                    const l = e?.tweet_result_by_rest_id?.result?.granted_awards?.total_coins_worth,
                                        { total_coins_worth: r, total_coins_worth_anonymous: s, total_coins_worth_public: o } = e?.tweet_result_by_rest_id?.result?.awards_granted_by_viewer || {},
                                        c = e?.tweet_result_by_rest_id?.result?.awards_granted_leaderboard?.entries || [],
                                        d = J(r),
                                        u = e?.viewer_v2?.user_results?.result,
                                        p = E.ZP.getTruncatedCount(Number(l));
                                    return _.createElement(x.Z, { backButtonType: "close", history: t, middleControl: i(p), onBackClick: n }, _.createElement(b.Z, { style: te.root }, d ? _.createElement(b.Z, null, _.createElement(C.Z, { text: z }), J(o) ? _.createElement(H, { coins: o || 0, isAnonymous: !1, user: u }) : null, J(s) ? _.createElement(H, { coins: s || 0, isAnonymous: !0, isLoggedinUser: !0, user: u }) : null) : null, c ? _.createElement(b.Z, null, _.createElement(C.Z, { text: V }), _.createElement(S.Z, { cacheKey: "awardsSentByOthers", identityFunction: Y, items: c, renderer: a, withoutHeadroom: !0 })) : null));
                                }
                                return _.createElement(Z.Z, null);
                            },
                            [a, t, n, i],
                        );
                    return _.createElement(P.nO, { namespace: j }, l ? _.createElement(X, { render: s, variables: r }) : _.createElement(D.default, e));
                },
                te = T.default.create((e) => ({ root: { marginHorizontal: e.spaces.space32 }, spacing: { marginStart: e.spaces.space4 }, title: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingEnd: e.spaces.space64 } })),
                le = ee;
        },
        928123: (e, t, l) => {
            var n = l(606161).useTrackLoadQueryInRender,
                r = l(138239),
                a = l(303566),
                i = l(437429),
                s = l(647677),
                o = (l(202784).useDebugValue, l(703383).__internal),
                c = o.fetchQueryDeduped,
                d = o.fetchQuery;
            l(826590);
            e.exports = function (e, t, l) {
                n();
                var o,
                    u = i(),
                    p = t.fetchKey,
                    m = t.fetchPolicy,
                    y = t.source,
                    g = t.variables,
                    h = t.networkCacheConfig,
                    k = a(e, g, h);
                if ("PreloadedQuery_DEPRECATED" === t.kind)
                    k.request.node.params.name !== t.name && s(!1),
                        (o = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: p,
                            fetchObservable: c(u, k.request.identifier, function () {
                                return u === t.environment && null != y ? u.executeWithSource({ operation: k, source: y }) : u.execute({ operation: k });
                            }),
                            fetchPolicy: m,
                            query: k,
                            renderPolicy: null == l ? void 0 : l.UNSTABLE_renderPolicy,
                        });
                else {
                    var f = d(u, k);
                    o = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != y && u === t.environment ? y.ifEmpty(f) : (t.environment, f), fetchKey: p, fetchPolicy: m, query: k, renderPolicy: null == l ? void 0 : l.UNSTABLE_renderPolicy };
                }
                return r(o);
            };
        },
        72845: (e, t, l) => {
            var n = (0, l(171600).default)(l(638636)),
                r = l(606161),
                a = r.loadQuery,
                i = r.useTrackLoadQueryInRender,
                s = l(995402),
                o = l(437429),
                c = l(202784),
                d = c.useCallback,
                u = c.useEffect,
                p = c.useRef,
                m = c.useState,
                y = l(703383).getRequest,
                g = { kind: "NullQueryReference" };
            function h(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== y(e).params.metadata.live;
            }
            e.exports = function (e, t) {
                var l = null != t ? t : g,
                    r = o();
                i();
                var c = s(),
                    y = p(new Set([l])),
                    k = m(function () {
                        return l;
                    }),
                    f = k[0],
                    _ = k[1],
                    b = m(function () {
                        return l;
                    }),
                    w = b[0],
                    v = b[1];
                l !== w && (y.current.add(l), v(l), _(l));
                var E = d(
                        function () {
                            c.current && (y.current.add(g), _(g));
                        },
                        [c],
                    ),
                    C = d(
                        function (t, l) {
                            var n = null != l && l.hasOwnProperty("__environment") ? { fetchPolicy: l.fetchPolicy, networkCacheConfig: l.networkCacheConfig, __nameForWarning: l.__nameForWarning } : l;
                            if (c.current) {
                                var i,
                                    s = a(null !== (i = null == l ? void 0 : l.__environment) && void 0 !== i ? i : r, e, t, n);
                                y.current.add(s), _(s);
                            }
                        },
                        [r, e, _, c],
                    ),
                    Z = p(!1);
                return (
                    u(function () {
                        return function () {
                            Z.current = !0;
                        };
                    }, []),
                    u(
                        function () {
                            if (!0 === Z.current) return (Z.current = !1), void ("NullQueryReference" !== f.kind && C(f.variables, { fetchPolicy: f.fetchPolicy, networkCacheConfig: f.networkCacheConfig }));
                            var t = y.current;
                            if (c.current) {
                                var l,
                                    r = (0, n.default)(t);
                                try {
                                    for (r.s(); !(l = r.n()).done; ) {
                                        var a = l.value;
                                        if (a === f) break;
                                        t.delete(a), "NullQueryReference" !== a.kind && (h(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            }
                        },
                        [f, c, C, e],
                    ),
                    u(
                        function () {
                            return function () {
                                var t,
                                    l = (0, n.default)(y.current);
                                try {
                                    for (l.s(); !(t = l.n()).done; ) {
                                        var r = t.value;
                                        "NullQueryReference" !== r.kind && (h(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery());
                                    }
                                } catch (e) {
                                    l.e(e);
                                } finally {
                                    l.f();
                                }
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === f.kind ? null : f, C, E]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetCoinDetails.2065cbca.js.map
