"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileCommunitiesSpotlight-a2dee9c7"],
    {
        396696: (e, t, n) => {
            n.d(t, { Z: () => o });
            var l,
                s,
                i,
                a,
                r = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useUserInitialCommunitiesSpotlightQuery",
                        selections: [{ alias: null, args: null, concreteType: "Viewer", kind: "LinkedField", name: "viewer", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserBusinessModulesResponse", kind: "LinkedField", name: "profilemodules", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserBusinessModuleResponseV1", kind: "LinkedField", name: "v1", plural: !0, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "module_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "profile_module", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "CommunitiesModuleConfig", kind: "LinkedField", name: "config", plural: !1, selections: [{ alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "CommunitiesModule", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useUserInitialCommunitiesSpotlightQuery", selections: [{ alias: null, args: null, concreteType: "Viewer", kind: "LinkedField", name: "viewer", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserBusinessModulesResponse", kind: "LinkedField", name: "profilemodules", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserBusinessModuleResponseV1", kind: "LinkedField", name: "v1", plural: !0, selections: [l, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "profile_module", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "CommunitiesModuleConfig", kind: "LinkedField", name: "config", plural: !1, selections: [{ alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [i, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }, a], storageKey: null }], storageKey: null }], type: "CommunitiesModule", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, a], type: "User", abstractKey: null }], storageKey: null }, a], storageKey: null }], storageKey: null }] },
                    params: { id: "-X2W306DsYIr_NlO6v3GZw", metadata: {}, name: "useUserInitialCommunitiesSpotlightQuery", operationKind: "query", text: null },
                };
            r.hash = "4f3333e7eccdd2d5b1cf266ed20cac6f";
            const o = r;
        },
        229333: (e, t, n) => {
            n.d(t, { Z: () => d });
            var l = n(202784),
                s = n(466999),
                i = n(325686),
                a = n(392237),
                r = n(111677);
            const o = n.n(r)().e5b0063d;
            let u = 0;
            class c extends l.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${u}`), (u += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = o({ title: t });
                    return l.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, l.createElement(s.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), l.createElement(i.Z, { "aria-label": n }, e));
                }
            }
            const d = c;
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => m });
            var l = n(202784),
                s = n(614983),
                i = n.n(s),
                a = n(325686),
                r = n(370006),
                o = n(786998),
                u = n(929028),
                c = n(386802);
            function d(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class m extends l.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: s, hideBackButton: i, isFullWidth: a, isLarge: u, leftControl: c, middleControl: m, position: p, rightControl: y, secondaryBar: h, style: g, subtitle: k, title: f, titleDomId: b, titleIconCell: C, titleIconCellSize: Z, withBackground: _, withWideContainer: v } = this.props,
                        { isModal: F } = this.context,
                        I = i ? c : l.createElement(r.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        L = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!_, F, !!h);
                    return l.createElement(l.Fragment, null, l.createElement(o.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: u, leftControl: I, middleControl: m, position: d(p, F, s), rightControl: y, style: g, subtitle: k, title: f, titleDomId: b, titleIconCell: C, titleIconCellSize: Z, withBackground: L, withWideContainer: v }), h || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = u.Z.getBackgroundStyles();
                    return t ? l.createElement(a.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = c.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => o });
            var l = n(202784),
                s = n(325686),
                i = n(392237);
            class a extends l.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return l.createElement(s.Z, { style: r.root });
                }
            }
            const r = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                o = a;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => o });
            var l = n(807896),
                s = n(202784),
                i = n(229333),
                a = n(414939),
                r = n(334346);
            const o = ({ accessibilityTitle: e, footer: t = s.createElement(a.Z, null), ...n }) => {
                const o = s.createElement(r.C, (0, l.Z)({}, n, { footer: t }));
                return e ? s.createElement(i.Z, { title: e }, o) : o;
            };
        },
        135512: (e, t, n) => {
            n.d(t, { Z: () => k });
            var l = n(53307),
                s = n(202784),
                i = (n(585488), n(731708)),
                a = n(111677),
                r = n.n(a),
                o = n(736063),
                u = n(535338),
                c = n(585356),
                d = n(719146);
            const m = r().cc4add98,
                p = l.Z;
            function y({ communityId: e }) {
                const t = (0, u.p)(p, { communityId: e }).communityResults.result;
                return "Community" !== t.__typename ? null : s.createElement(c.Z, null, s.createElement(i.ZP, { weight: "bold" }, m), s.createElement(d.Z, { community: t, showLabel: !1 }));
            }
            const h = { context: "COMMUNITIES_SPOTLIGHT_PREVIEW" };
            function g({ communityId: e }) {
                return e ? s.createElement(o.H, { errorConfig: h }, s.createElement(y, { communityId: e })) : null;
            }
            const k = s.memo(g);
        },
        719146: (e, t, n) => {
            n.d(t, { Z: () => b });
            var l = n(699418),
                s = n(202784),
                i = n(325686),
                a = (n(585488), n(277660)),
                r = n.n(a),
                o = n(392237),
                u = n(111677),
                c = n.n(u),
                d = n(784380),
                m = n(264223),
                p = n(66918),
                y = n(943957);
            const h = c().f277e94a,
                g = c().h02a6fe6,
                k = l.Z,
                f = ({ community: e, showLabel: t = !0, showViewAction: n = !1 }) => {
                    const l = r()(k, e),
                        a = s.useMemo(() => ({ label: t ? g : void 0, headline: l.name, actions: n ? [{ label: h, link: `/i/communities/${l.rest_id}` }] : [], media: s.createElement(p.Z, { community: l }), bodyElements: [l.description ? { elements: [{ text: l.description, numberOfLines: 2 }] } : null], link: n ? void 0 : `/i/communities/${l.rest_id}` }), [l, t, n]);
                    return s.createElement(y.Z, a, s.createElement(i.Z, { style: C.members }, s.createElement(d.Z, { community: l, style: C.facePile, userAvatarSize: "medium" }), s.createElement(m.Z, { community: l, onMedia: !1, style: C.memberCount })));
                },
                b = s.memo(f),
                C = o.default.create((e) => ({ members: { display: "flex", flexDirection: "row", alignItems: "center", columnGap: e.spaces.space8, flexWrap: "wrap", paddingTop: e.spaces.space4 }, facePile: { flexBasis: "auto" }, memberCount: { flexBasis: "auto" } }));
        },
        334346: (e, t, n) => {
            n.d(t, { C: () => o, Z: () => r });
            var l = n(807896),
                s = n(202784),
                i = n(524084),
                a = n(768572);
            const r = "stable_sort_index",
                o = s.forwardRef((e, t) => {
                    const n = e.cacheKey;
                    return s.createElement(a.ZP, { identifier: n }, s.createElement(i.Z, (0, l.Z)({ ref: t }, e)));
                });
        },
        784380: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var l = n(444770),
                s = n(202784),
                i = (n(585488), n(277660)),
                a = n.n(i),
                r = n(642153);
            const o = l.Z,
                u = ({ community: e, style: t, userAvatarSize: n = "large" }) => {
                    const l = a()(o, e),
                        { members_facepile_results: i } = l,
                        u = s.useMemo(
                            () =>
                                ((e) =>
                                    e.reduce((e, { result: t }) => {
                                        if ("User" === t?.__typename) {
                                            const n = t.avatar?.image_url;
                                            n && e.push(n);
                                        }
                                        return e;
                                    }, []))(i),
                            [i],
                        );
                    return u.length > 0 ? s.createElement(r.Z, { style: t, userAvatarSize: n, userAvatarUrls: u }) : null;
                },
                c = s.memo(u);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => c });
            var l = n(202784),
                s = n(500002),
                i = n(668214),
                a = n(997174),
                r = n(118823);
            const o = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: r.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class u extends l.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: l },
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: i, search: a },
                            locationKey: r,
                        } = e;
                    let o = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (o = !0));
                    const u = s || r;
                    ((u && s !== r) || (!u && n !== i) || l !== a || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: l } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), l(t.contextualScribeNamespace);
                }
            }
            u.defaultProps = { children: null };
            const c = (0, s.ZP)(o(u));
        },
        524084: (e, t, n) => {
            n.d(t, { Z: () => a });
            var l = n(202784),
                s = n(523561),
                i = n(195560);
            const a = (0, s.Z)({ loader: () => n.e("loader.AbsolutePower").then(n.bind(n, 590136)), renderPlaceholder: (e, t) => l.createElement(i.Z, { hasError: e, onRetry: t }) });
        },
        127218: (e, t, n) => {
            n.d(t, { C: () => k });
            var l = n(202784),
                s = n(614983),
                i = n.n(s),
                a = n(437429),
                r = n.n(a),
                o = n(57074),
                u = n.n(o),
                c = n(10622),
                d = n.n(c),
                m = n(585488),
                p = n(71620),
                y = n(163889),
                h = n(312771),
                g = n(535338);
            function k(e, t, n) {
                const [s, a] = l.useState(!1),
                    [o, c] = l.useState(null),
                    k = r()(),
                    f = u()(t),
                    b = (0, p.po)(),
                    C = (0, g.p)(e, f, n);
                return l.useMemo(() => {
                    const t = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    i()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: l } =
                            (function (e, t) {
                                try {
                                    i()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of t) i()(!!n, "The provided path is invalid."), i()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, y.ZP)(e.message);
                                }
                            })(C, t) || {},
                        r = (t) => {
                            s ||
                                (a(!0),
                                d()(k, e, { ...f, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), c(e), b(e);
                                    },
                                }));
                        },
                        u = () => {
                            n && r(n);
                        },
                        p = () => {
                            l && r(l);
                        },
                        g = () => {
                            r(void 0);
                        };
                    return o ? { subsequentFetchStatus: h.ZP.FAILED, error: o, fetchNext: u, fetchPrevious: p, refetch: g, data: C, hasNext: Boolean(n), hasPrevious: Boolean(l) } : { subsequentFetchStatus: s ? h.ZP.LOADING : h.ZP.NONE, error: void 0, fetchNext: u, fetchPrevious: p, refetch: g, data: C, hasNext: Boolean(n), hasPrevious: Boolean(l) };
                }, [e, C, s, o, k, f, b]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileCommunitiesSpotlight-a2dee9c7.5b1b140a.js.map
