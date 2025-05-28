"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileCommunitiesSpotlight-a2dee9c7"],
    {
        396696: (e, l, n) => {
            n.d(l, { Z: () => o });
            var t,
                s,
                a,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useUserInitialCommunitiesSpotlightQuery",
                        selections: [{ alias: null, args: null, concreteType: "Viewer", kind: "LinkedField", name: "viewer", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserBusinessModulesResponse", kind: "LinkedField", name: "profilemodules", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserBusinessModuleResponseV1", kind: "LinkedField", name: "v1", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "module_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "profile_module", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "CommunitiesModuleConfig", kind: "LinkedField", name: "config", plural: !1, selections: [{ alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "CommunitiesModule", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useUserInitialCommunitiesSpotlightQuery", selections: [{ alias: null, args: null, concreteType: "Viewer", kind: "LinkedField", name: "viewer", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserBusinessModulesResponse", kind: "LinkedField", name: "profilemodules", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserBusinessModuleResponseV1", kind: "LinkedField", name: "v1", plural: !0, selections: [t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "profile_module", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "CommunitiesModuleConfig", kind: "LinkedField", name: "config", plural: !1, selections: [{ alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [a, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: null }], type: "CommunitiesModule", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: null }] },
                    params: { id: "-X2W306DsYIr_NlO6v3GZw", metadata: {}, name: "useUserInitialCommunitiesSpotlightQuery", operationKind: "query", text: null },
                };
            i.hash = "4f3333e7eccdd2d5b1cf266ed20cac6f";
            const o = i;
        },
        229333: (e, l, n) => {
            n.d(l, { Z: () => d });
            var t = n(202784),
                s = n(466999),
                a = n(325686),
                r = n(392237),
                i = n(111677);
            const o = n.n(i)().e5b0063d;
            let u = 0;
            class c extends t.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${u}`), (u += 1);
                }
                render() {
                    const { children: e, title: l } = this.props,
                        n = o({ title: l });
                    return t.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, t.createElement(s.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, l), t.createElement(a.Z, { "aria-label": n }, e));
                }
            }
            const d = c;
        },
        414939: (e, l, n) => {
            n.d(l, { Z: () => o });
            var t = n(202784),
                s = n(325686),
                a = n(392237);
            class r extends t.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return t.createElement(s.Z, { style: i.root });
                }
            }
            const i = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                o = r;
        },
        965245: (e, l, n) => {
            n.d(l, { Z: () => o });
            var t = n(807896),
                s = n(202784),
                a = n(229333),
                r = n(414939),
                i = n(334346);
            const o = ({ accessibilityTitle: e, footer: l = s.createElement(r.Z, null), ...n }) => {
                const o = s.createElement(i.C, (0, t.Z)({}, n, { footer: l }));
                return e ? s.createElement(a.Z, { title: e }, o) : o;
            };
        },
        135512: (e, l, n) => {
            n.d(l, { Z: () => k });
            var t = n(53307),
                s = n(202784),
                a = (n(585488), n(731708)),
                r = n(111677),
                i = n.n(r),
                o = n(736063),
                u = n(535338),
                c = n(585356),
                d = n(719146);
            const m = i().cc4add98,
                y = t.Z;
            function p({ communityId: e }) {
                const l = (0, u.p)(y, { communityId: e }).communityResults.result;
                return "Community" !== l.__typename ? null : s.createElement(c.Z, null, s.createElement(a.ZP, { weight: "bold" }, m), s.createElement(d.Z, { community: l, showLabel: !1 }));
            }
            const g = { context: "COMMUNITIES_SPOTLIGHT_PREVIEW" };
            function f({ communityId: e }) {
                return e ? s.createElement(o.H, { errorConfig: g }, s.createElement(p, { communityId: e })) : null;
            }
            const k = s.memo(f);
        },
        719146: (e, l, n) => {
            n.d(l, { Z: () => v });
            var t = n(699418),
                s = n(202784),
                a = n(325686),
                r = (n(585488), n(277660)),
                i = n.n(r),
                o = n(392237),
                u = n(111677),
                c = n.n(u),
                d = n(784380),
                m = n(264223),
                y = n(66918),
                p = n(943957);
            const g = c().f277e94a,
                f = c().h02a6fe6,
                k = t.Z,
                h = ({ community: e, showLabel: l = !0, showViewAction: n = !1 }) => {
                    const t = i()(k, e),
                        r = s.useMemo(() => ({ label: l ? f : void 0, headline: t.name, actions: n ? [{ label: g, link: `/i/communities/${t.rest_id}` }] : [], media: s.createElement(y.Z, { community: t }), bodyElements: [t.description ? { elements: [{ text: t.description, numberOfLines: 2 }] } : null], link: n ? void 0 : `/i/communities/${t.rest_id}` }), [t, l, n]);
                    return s.createElement(p.Z, r, s.createElement(a.Z, { style: b.members }, s.createElement(d.Z, { community: t, style: b.facePile, userAvatarSize: "medium" }), s.createElement(m.Z, { community: t, onMedia: !1, style: b.memberCount })));
                },
                v = s.memo(h),
                b = o.default.create((e) => ({ members: { display: "flex", flexDirection: "row", alignItems: "center", columnGap: e.spaces.space8, flexWrap: "wrap", paddingTop: e.spaces.space4 }, facePile: { flexBasis: "auto" }, memberCount: { flexBasis: "auto" } }));
        },
        334346: (e, l, n) => {
            n.d(l, { C: () => o, Z: () => i });
            var t = n(807896),
                s = n(202784),
                a = n(524084),
                r = n(768572);
            const i = "stable_sort_index",
                o = s.forwardRef((e, l) => {
                    const n = e.cacheKey;
                    return s.createElement(r.ZP, { identifier: n }, s.createElement(a.Z, (0, t.Z)({ ref: l }, e)));
                });
        },
        784380: (e, l, n) => {
            n.d(l, { Z: () => c });
            n(136728);
            var t = n(444770),
                s = n(202784),
                a = (n(585488), n(277660)),
                r = n.n(a),
                i = n(642153);
            const o = t.Z,
                u = ({ community: e, style: l, userAvatarSize: n = "large" }) => {
                    const t = r()(o, e),
                        { members_facepile_results: a } = t,
                        u = s.useMemo(
                            () =>
                                ((e) =>
                                    e.reduce((e, { result: l }) => {
                                        if ("User" === l?.__typename) {
                                            const n = l.avatar?.image_url;
                                            n && e.push(n);
                                        }
                                        return e;
                                    }, []))(a),
                            [a],
                        );
                    return u.length > 0 ? s.createElement(i.Z, { style: l, userAvatarSize: n, userAvatarUrls: u }) : null;
                },
                c = s.memo(u);
        },
        524084: (e, l, n) => {
            n.d(l, { Z: () => r });
            var t = n(202784),
                s = n(523561),
                a = n(195560);
            const r = (0, s.Z)({ loader: () => n.e("loader.AbsolutePower").then(n.bind(n, 590136)), renderPlaceholder: (e, l) => t.createElement(a.Z, { hasError: e, onRetry: l }) });
        },
        127218: (e, l, n) => {
            n.d(l, { C: () => k });
            var t = n(202784),
                s = n(614983),
                a = n.n(s),
                r = n(437429),
                i = n.n(r),
                o = n(57074),
                u = n.n(o),
                c = n(10622),
                d = n.n(c),
                m = n(585488),
                y = n(71620),
                p = n(163889),
                g = n(312771),
                f = n(535338);
            function k(e, l, n) {
                const [s, r] = t.useState(!1),
                    [o, c] = t.useState(null),
                    k = i()(),
                    h = u()(l),
                    v = (0, y.po)(),
                    b = (0, f.p)(e, h, n);
                return t.useMemo(() => {
                    const l = (0, m.getRequest)(e).params?.metadata?.sliceInfoPath;
                    a()(!!l, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: t } =
                            (function (e, l) {
                                try {
                                    a()("slice_info" === l[l.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of l) a()(!!n, "The provided path is invalid."), a()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, p.ZP)(e.message);
                                }
                            })(b, l) || {},
                        i = (l) => {
                            s ||
                                (r(!0),
                                d()(k, e, { ...h, cursor: l }).subscribe({
                                    complete: () => {
                                        r(!1);
                                    },
                                    error: (e) => {
                                        r(!1), c(e), v(e);
                                    },
                                }));
                        },
                        u = () => {
                            n && i(n);
                        },
                        y = () => {
                            t && i(t);
                        },
                        f = () => {
                            i(void 0);
                        };
                    return o ? { subsequentFetchStatus: g.ZP.FAILED, error: o, fetchNext: u, fetchPrevious: y, refetch: f, data: b, hasNext: Boolean(n), hasPrevious: Boolean(t) } : { subsequentFetchStatus: s ? g.ZP.LOADING : g.ZP.NONE, error: void 0, fetchNext: u, fetchPrevious: y, refetch: f, data: b, hasNext: Boolean(n), hasPrevious: Boolean(t) };
                }, [e, b, s, o, k, h, v]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileCommunitiesSpotlight-a2dee9c7.bf7968aa.js.map
