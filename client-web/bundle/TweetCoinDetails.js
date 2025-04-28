"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetCoinDetails"],
    {
        229333: (e, t, l) => {
            l.d(t, { Z: () => u });
            var a = l(202784),
                n = l(466999),
                r = l(325686),
                i = l(392237),
                s = l(674132);
            const o = l.n(s)().e5b0063d;
            let d = 0;
            class c extends a.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        l = o({ title: t });
                    return a.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, a.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), a.createElement(r.Z, { "aria-label": l }, e));
                }
            }
            const u = c;
        },
        625661: (e, t, l) => {
            l.d(t, { ZP: () => p });
            var a = l(202784),
                n = l(614983),
                r = l.n(n),
                i = l(325686),
                s = l(370006),
                o = l(786998),
                d = l(929028),
                c = l(386802);
            function u(e, t, l) {
                return e || (!t && l ? "fixed" : void 0);
            }
            class p extends a.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: l, fixed: n, hideBackButton: r, isFullWidth: i, isLarge: d, leftControl: c, middleControl: p, position: m, rightControl: g, secondaryBar: y, style: h, subtitle: k, title: _, titleDomId: b, titleIconCell: w, titleIconCellSize: f, withBackground: Z, withWideContainer: E } = this.props,
                        { isModal: L } = this.context,
                        T = r ? c : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, t, l) {
                            return e && !(t && l);
                        })(!!Z, L, !!y);
                    return a.createElement(a.Fragment, null, a.createElement(o.Z, { centerTitle: t, centeredLogo: l, isFullWidth: i, isLarge: d, leftControl: T, middleControl: p, position: u(m, L, n), rightControl: g, style: h, subtitle: k, title: _, titleDomId: b, titleIconCell: w, titleIconCellSize: f, withBackground: C, withWideContainer: E }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        l = d.Z.getBackgroundStyles();
                    return t ? a.createElement(i.Z, { style: !!e && l }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, l) => {
            l.d(t, { Z: () => o });
            var a = l(202784),
                n = l(325686),
                r = l(392237);
            class i extends a.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return a.createElement(n.Z, { style: s.root });
                }
            }
            const s = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                o = i;
        },
        980407: (e, t, l) => {
            l.d(t, { Z: () => y, w: () => m });
            var a = l(202784),
                n = l(325686),
                r = l(108362),
                i = l(386802),
                s = l(392237),
                o = l(652904),
                d = l(555079),
                c = l(625661),
                u = l(449067),
                p = l(715601);
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: l, backLocation: r, centerTitle: i, hideBackButton: s, history: o, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: y, rightControl: h, secondaryBar: k, subtitle: _, title: b } = this.props,
                                { isModal: w } = this.context;
                            return a.createElement(n.Z, { style: w ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, a.createElement(c.ZP, { backButtonType: l || (w ? "close" : "back"), backLocation: r, centerTitle: i, fixed: !w, hideBackButton: s, history: o, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: y, ref: e, rightControl: h, secondaryBar: k, style: [w && g.appBarModal, t], subtitle: _, title: b, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: l } = this.context;
                            t && (l ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: l, containerStyle: i, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: m, title: y, withoutBottomBarMobile: h } = this.props,
                        { isModal: k } = this.context,
                        _ = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(o.Z, null, a.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: y }), a.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, k && g.rootModal] }, !k && _, a.createElement(r.Z, { isFullWidth: d, isLarge: c, style: [g.container, k && g.containerModal, i] }, k ? a.createElement(p.Z, { style: g.viewport }, _, l) : l), t ? a.createElement(n.Z, { style: [g.bottomBarModal, !k && !h && g.bottomBarMobile] }, a.createElement(r.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const g = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = m;
        },
        965245: (e, t, l) => {
            l.d(t, { Z: () => o });
            var a = l(807896),
                n = l(202784),
                r = l(229333),
                i = l(414939),
                s = l(334346);
            const o = ({ accessibilityTitle: e, footer: t = n.createElement(i.Z, null), ...l }) => {
                const o = n.createElement(s.C, (0, a.Z)({}, l, { footer: t }));
                return e ? n.createElement(r.Z, { title: e }, o) : o;
            };
        },
        334346: (e, t, l) => {
            l.d(t, { C: () => o, Z: () => s });
            var a = l(807896),
                n = l(202784),
                r = l(524084),
                i = l(768572);
            const s = "stable_sort_index",
                o = n.forwardRef((e, t) => {
                    const l = e.cacheKey;
                    return n.createElement(i.ZP, { identifier: l }, n.createElement(r.Z, (0, a.Z)({ ref: t }, e)));
                });
        },
        231035: (e, t, l) => {
            l.d(t, { Z: () => h });
            var a = l(202784),
                n = l(420740),
                r = l(108362),
                i = l(731708),
                s = l(154003),
                o = l(392237),
                d = l(674132),
                c = l.n(d),
                u = l(272175);
            const p = (0, l(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), a.createElement(u.ql, null, a.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                m = "error-detail",
                g = c().e49537c2,
                y = c().a9ae1e78;
            class h extends a.PureComponent {
                render() {
                    return a.createElement(n.Z, { testID: m }, a.createElement(p, null), a.createElement(r.Z, { style: k.root }, a.createElement(i.ZP, { align: "center", color: "gray700", style: k.retryText }, g), a.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, y)));
                }
            }
            const k = o.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, l) => {
            l.d(t, { Z: () => c });
            var a = l(202784),
                n = l(500002),
                r = l(668214),
                i = l(997174),
                s = l(118823);
            const o = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: l, search: a },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    t.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && t.pathname === l && ((this._isInBackground = !1), (o = !0));
                    const d = n || s;
                    ((d && n !== s) || (!d && l !== r) || a !== i || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: l, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), l(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, n.ZP)(o(d));
        },
        301410: (e, t, l) => {
            l.d(t, { i: () => g.ZP, z: () => _ });
            var a = l(202784),
                n = l(928123),
                r = l.n(n),
                i = l(72845),
                s = l.n(i),
                o = l(57074),
                d = l.n(o),
                c = l(516951),
                u = l(88656),
                p = l(71620),
                m = l(163889),
                g = l(312771);
            const y = ({ render: e }) => e({ fetchStatus: g.ZP.LOADING, data: null, error: null, retry: c.Z });
            class h extends a.Component {
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
                    const a = r()(e, t);
                    return l({ fetchStatus: g.ZP.LOADED, data: a, error: null, retry: c.Z });
                },
                _ = (e, t) =>
                    function ({ fetchPolicy: l = "store-or-network", render: n, variables: r }) {
                        const [i, o] = s()(e),
                            c = (0, p.n7)(t.errorConfig.context),
                            u = d()(r),
                            m = a.useCallback(() => {
                                o(u, { fetchPolicy: "network-only" });
                            }, [o, u]);
                        return (
                            a.useLayoutEffect(() => {
                                o(u, { fetchPolicy: l });
                            }, [l, o, u]),
                            i
                                ? a.createElement(
                                      a.Suspense,
                                      { fallback: a.createElement(y, { render: n }) },
                                      a.createElement(h, { errorHandler: c(t.errorConfig.options || {}), key: i.fetchKey, retry: m }, (t, l) => (t ? n({ fetchStatus: g.ZP.FAILED, error: t, data: null, retry: l }) : a.createElement(k, { query: e, queryRef: i, render: n }))),
                                  )
                                : null
                        );
                    };
        },
        524084: (e, t, l) => {
            l.d(t, { Z: () => i });
            var a = l(202784),
                n = l(523561),
                r = l(195560);
            const i = (0, n.Z)({ loader: () => l.e("loader.AbsolutePower").then(l.bind(l, 590136)), renderPlaceholder: (e, t) => a.createElement(r.Z, { hasError: e, onRetry: t }) });
        },
        466441: (e, t, l) => {
            l.r(t), l.d(t, { NotFoundScreen: () => b, default: () => f });
            l(571372);
            var a = l(202784),
                n = l(386802),
                r = l(108362),
                i = l(392237),
                s = l(674132),
                o = l.n(s),
                d = l(187669),
                c = l(449067),
                u = l(38293),
                p = l(231035),
                m = l(652904),
                g = l(952793),
                y = l(163889),
                h = l(725516);
            const k = o().ba929da8,
                _ = o().d203e242;
            function b(e) {
                const { splat: t } = e.match.params,
                    { isModal: l } = a.useContext(n.Z),
                    i = (0, g.hC)("responsive_web_report_page_not_found");
                return (
                    (0, d.q)(() => {
                        i && t && (0, y.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    a.createElement(m.Z, null, a.createElement(c.Z.Configure, { backLocation: "/", documentTitle: k, title: _ }), a.createElement(r.Z, { style: l && w.modal }, a.createElement(p.Z, null)), a.createElement(u.Z, { title: k, withMeta: !1 }))
                );
            }
            const w = i.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                f = (0, h.Z)(b, { page: "not_found" });
        },
        905040: (e, t, l) => {
            l.r(t), l.d(t, { TweetCoinDetailsScreen: () => ee, TweetCoinDetailsScreenQueryRequest: () => $, default: () => le });
            var a,
                n,
                r,
                i,
                s,
                o,
                d,
                c,
                u,
                p,
                m,
                g,
                y,
                h,
                k = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "tweet_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "TweetCoinDetailsScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [
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
                                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "is_anonymous", storageKey: null }),
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
                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth", storageKey: null }),
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null }),
                                                    (u = { alias: null, args: null, concreteType: "TweetAwards", kind: "LinkedField", name: "awards_granted_by_viewer", plural: !1, selections: [d, { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth_anonymous", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth_public", storageKey: null }], storageKey: null }),
                                                    (p = { alias: null, args: null, concreteType: "TweetAwards", kind: "LinkedField", name: "granted_awards", plural: !1, selections: [d], storageKey: null }),
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
                            { kind: "RequiredField", field: { alias: null, args: (m = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: o, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "TweetCoinDetailsScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
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
                                                                    r,
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
                                                                                                            { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(g = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [g], storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                            { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                            { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                        ],
                                                                                        type: "User",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            y,
                                                                        ]),
                                                                        storageKey: null,
                                                                    },
                                                                    d,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    c,
                                                    u,
                                                    p,
                                                    y,
                                                ],
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    y,
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: m, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: h, storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                        ],
                    },
                    params: { id: "PkaL35ppw8P48oNr3vAU7g", metadata: {}, name: "TweetCoinDetailsScreenQuery", operationKind: "query", text: null },
                };
            k.hash = "7cae7dd01ebb6d6da0d150e5105be27a";
            const _ = k;
            var b = l(202784),
                w = l(325686),
                f = (l(585488), l(731708)),
                Z = l(750410),
                E = l(891198),
                L = l(844685),
                T = l(167630),
                C = l(392237),
                F = l(674132),
                B = l.n(F),
                v = l(856151),
                x = l(980407),
                S = l(965245),
                K = l(301410),
                D = l(293115),
                P = l(312771),
                R = l(466441),
                I = l(952428),
                A = l(823161),
                M = l(412876),
                z = l(553660);
            const H = B().fbb7764b,
                U = B().e70a07b2,
                V = B().da68fff1,
                W = ({ coins: e, isAnonymous: t, isLoggedinUser: l, user: a }) => b.createElement(w.Z, { role: "listitem" }, b.createElement(I.Z, { style: q.root, withInteractiveStyling: !1 }, b.createElement(w.Z, { style: q.row }, t ? b.createElement(A.default, { size: "xLarge", uri: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }) : "User" === a?.__typename ? b.createElement(M.Z, { size: "xLarge", user: a, withLink: !0 }) : null, b.createElement(w.Z, { style: q.column }, b.createElement(f.ZP, { size: "headline2", style: q.awardDetails, weight: "medium" }, t && l ? V({ count: e }) : H({ count: e })), t ? b.createElement(f.ZP, { style: q.spacing }, U) : "User" === a?.__typename ? b.createElement(z.Z, { style: q.userName, user: a, weight: "normal", withLink: !0 }) : null)))),
                N = b.memo(W),
                q = C.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, row: { alignItems: "center", flexDirection: "row" }, column: { flexDirection: "column" }, userName: { marginHorizontal: e.spaces.space8 }, spacing: { marginStart: e.spaces.space8 }, awardDetails: { marginStart: e.spaces.space8, marginBottom: e.spaces.space4 } })),
                O = B().h1c5d6aa,
                Q = B().h6d45054,
                G = B().fbb7764b,
                j = { page: "tweet_coin_details" },
                $ = _,
                X = (0, K.z)($, { errorConfig: { context: "TWEET_COINS_DETAILS_CONTEXT" } }),
                Y = (e) => `${e.rank}`,
                J = (e) => null != e && e > 0,
                ee = (e) => {
                    const { history: t } = e,
                        { statusId: l } = e.match.params,
                        a = b.useCallback(() => {
                            t.goBack();
                        }, [t]),
                        n = b.useMemo(() => ({ tweet_id: l || "0" }), [l]),
                        r = b.useCallback((e) => b.createElement(N, { coins: e.total_coins_worth, isAnonymous: e.is_anonymous, key: e.rank, user: e.sender_results?.result }), []),
                        i = b.useCallback((e) => b.createElement(w.Z, { style: te.title }, b.createElement(v.default, null), b.createElement(f.ZP, { size: "headline1", style: te.spacing, weight: "bold" }, G({ count: e }))), []),
                        s = b.useCallback(
                            ({ data: e, fetchStatus: l, retry: n }) => {
                                if (l === P.ZP.FAILED) return b.createElement(Z.Z, { onRequestRetry: n });
                                if (l === P.ZP.LOADED) {
                                    const l = e?.tweet_result_by_rest_id?.result?.granted_awards?.total_coins_worth,
                                        { total_coins_worth: n, total_coins_worth_anonymous: s, total_coins_worth_public: o } = e?.tweet_result_by_rest_id?.result?.awards_granted_by_viewer || {},
                                        d = e?.tweet_result_by_rest_id?.result?.awards_granted_leaderboard?.entries || [],
                                        c = J(n),
                                        u = e?.viewer_v2?.user_results?.result,
                                        p = E.ZP.getTruncatedCount(Number(l));
                                    return b.createElement(x.Z, { backButtonType: "close", history: t, middleControl: i(p), onBackClick: a }, b.createElement(w.Z, { style: te.root }, c ? b.createElement(w.Z, null, b.createElement(L.Z, { text: O }), J(o) ? b.createElement(N, { coins: o || 0, isAnonymous: !1, user: u }) : null, J(s) ? b.createElement(N, { coins: s || 0, isAnonymous: !0, isLoggedinUser: !0, user: u }) : null) : null, d ? b.createElement(w.Z, null, b.createElement(L.Z, { text: Q }), b.createElement(S.Z, { cacheKey: "awardsSentByOthers", identityFunction: Y, items: d, renderer: r, withoutHeadroom: !0 })) : null));
                                }
                                return b.createElement(T.Z, null);
                            },
                            [r, t, a, i],
                        );
                    return b.createElement(D.nO, { namespace: j }, l ? b.createElement(X, { render: s, variables: n }) : b.createElement(R.default, e));
                },
                te = C.default.create((e) => ({ root: { marginHorizontal: e.spaces.space32 }, spacing: { marginStart: e.spaces.space4 }, title: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingEnd: e.spaces.space64 } })),
                le = ee;
        },
        748138: (e, t, l) => {
            l.r(t), l.d(t, { default: () => o });
            var a = l(202784),
                n = l(890601),
                r = l(783427),
                i = l(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetCoinDetails.c8f06f9a.js.map
