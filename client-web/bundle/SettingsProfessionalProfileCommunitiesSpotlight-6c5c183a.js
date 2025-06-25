"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileCommunitiesSpotlight-6c5c183a"],
    {
        264223: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(607566),
                o = n(202784),
                i = (n(585488), n(277660)),
                a = n.n(i),
                l = n(98538),
                c = n(111677),
                m = n.n(c);
            const s = m().d58baa7f,
                u = { value: o.createElement(l.Z.Value, null), label: o.createElement(l.Z.Label, null) },
                d = ({ community: e, onMedia: t = !1, style: n }) => {
                    const i = a()(r.Z, e),
                        { member_count: c = 0 } = i,
                        d = o.useMemo(() => ({ count: c, formattedCount: s(c) }), [c]);
                    return o.createElement(l.Z.Group, { style: n }, o.createElement(l.Z, { onMedia: t }, o.createElement(m().I18NFormatMessage, { $i18n: "b38e130b" }, o.cloneElement(u.value, null, m().ibd0106e({ formattedCount: d.formattedCount })), o.cloneElement(u.label, null, m().cface2d1({ count: d.count })))));
                },
                _ = o.memo(d);
        },
        66918: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(903852),
                o = n(202784),
                i = (n(585488), n(277660)),
                a = n.n(i),
                l = n(530525),
                c = n(439592),
                m = n(392237),
                s = n(910805);
            const u = ({ community: e }) => {
                const t = a()(r.Z, e),
                    { crop: n, image: i } = (0, s.L)(t);
                return o.createElement(l.Z, { "aria-label": "", aspectMode: c.Z.SQUARE, backgroundColor: m.default.theme.colors.gray300, cropCandidates: n, image: i });
            };
        },
        910805: (e, t, n) => {
            n.d(t, { L: () => f, Z: () => _ });
            var r = n(51403),
                o = n(29277),
                i = n(559035),
                a = n(738666),
                l = n(202784),
                c = (n(585488), n(277660)),
                m = n.n(c),
                s = n(952183);
            const u = (e) => {
                    const t = m()(a.Z, e);
                    return l.useMemo(() => {
                        const e = t?.custom_banner_media?.media_info;
                        if (e?.original_img_url && e?.original_img_height && e?.original_img_width && e?.color_info?.palette) {
                            const t = e.color_info.palette;
                            return { url: e.original_img_url, height: e.original_img_height, width: e.original_img_width, palette: t.map(({ percentage: e, rgb: t }) => ({ percentage: e, rgb: { blue: t.blue, red: t.red, green: t.green } })) };
                        }
                    }, [t?.custom_banner_media?.media_info]);
                },
                d = (e) => {
                    const t = m()(i.Z, e);
                    return l.useMemo(() => {
                        const e = t?.default_banner_media?.media_info,
                            n = e?.original_img_url,
                            r = e?.original_img_height,
                            o = e?.original_img_width;
                        if (n && r && o) return { url: n, height: r, width: o };
                    }, [t?.default_banner_media?.media_info]);
                },
                _ = (e) => {
                    const t = m()(o.Z, e),
                        n = u(t),
                        r = d(t);
                    return n || r || s.bU;
                },
                f = (e) => {
                    const t = m()(r.Z, e),
                        n = u(t),
                        o = d(t);
                    return l.useMemo(() => {
                        if (n) {
                            const e = t.custom_banner_media?.media_info?.salient_rect;
                            return { image: n, crop: g(e) };
                        }
                        if (o) {
                            const e = t.default_banner_media?.media_info?.salient_rect;
                            return { image: o, crop: g(e) };
                        }
                        return { image: s.bU, crop: s.uj };
                    }, [t.custom_banner_media?.media_info?.salient_rect, t.default_banner_media?.media_info?.salient_rect, n, o]);
                },
                g = (e) => {
                    if (!e) return [];
                    const { height: t, left: n, top: r, width: o } = e;
                    return [{ x: n, y: r, w: o, h: t }];
                };
        },
        849200: (e, t, n) => {
            n.r(t), n.d(t, { CommunitiesSpotlightScreen: () => pe, default: () => pe });
            var r = n(202784),
                o = n(325686),
                i = n(107267),
                a = n(731708),
                l = n(154003),
                c = n(242454),
                m = n(190286),
                s = n(392237),
                u = n(111677),
                d = n.n(u),
                _ = n(143095),
                f = n(135512),
                g = n(736063),
                p = n(125363),
                b = n(601576),
                h = n(709402),
                C = n(800536),
                E = n(478282),
                y = n(807896),
                Z = n(768195),
                v = (n(585488), n(127218)),
                w = n(115200),
                I = n(277660),
                k = n.n(I),
                S = n(457311),
                M = n(965245),
                L = n(892908),
                P = n(796684),
                N = n(66918);
            const x = ({ item: e, onSelectionChanged: t, selectedCommunityId: n }) => {
                    const i = k()(L.Z, e),
                        a = r.useCallback(() => {
                            t(i.rest_id);
                        }, [i.rest_id, t]),
                        l = i.rest_id === n;
                    return r.createElement(P.Z, { checked: l, decoration: r.createElement(o.Z, { style: T.media }, r.createElement(N.Z, { community: i })), description: i.description, label: i.name, onChange: a });
                },
                F = r.memo(x),
                T = s.default.create((e) => ({ media: { borderRadius: e.borderRadii.medium, marginStart: e.spaces.space4, marginVertical: e.spaces.space4, marginEnd: e.spaces.space16, overflow: "hidden", width: e.spaces.space48 } })),
                B = d().jd3e9ea6,
                H = r.createElement(d().I18NFormatMessage, { $i18n: "f9b1387f" }, r.createElement(a.ZP, { color: "link", link: "/i/communities/create" }, d().daad9741)),
                O = r.createElement(S.Z, { header: B, message: H }),
                R = w.Z,
                U = (e) => e.__id,
                z = ({ fetchNext: e, footer: t, onSelectionChanged: n, selectedCommunityId: o, slice: i }) => {
                    const a = k()(R, i),
                        l = r.useMemo(() => a?.items_results?.filter((e) => "Community" === e.result?.__typename), [a?.items_results]);
                    r.useEffect(() => {
                        if (l.length && !o) {
                            const e = l[0].result;
                            "Community" === e?.__typename && n(e.rest_id);
                        }
                    }, []);
                    const c = r.useCallback((e) => ("Community" !== e?.result?.__typename ? null : r.createElement(F, { item: e.result, onSelectionChanged: n, selectedCommunityId: o })), [n, o]);
                    return l.length ? r.createElement(M.Z, { cacheKey: "CommunitiesSpotlightSelectionList", footer: t, identityFunction: U, items: l, onNearEnd: e, renderer: c }) : O;
                },
                j = r.memo(z),
                A = Z.Z,
                G = (e) => {
                    const { data: t, fetchNext: n } = (0, v.C)(A, {}),
                        o = t?.viewer_v2?.user_results?.result;
                    if ("User" !== o?.__typename) return null;
                    const i = o.communities_eligible_for_profile_spotlight_slice;
                    return r.createElement(j, (0, y.Z)({ fetchNext: n, slice: i }, e));
                },
                V = r.memo(G);
            var $ = n(614224),
                K = n(640605),
                Q = n(62273),
                Y = n(351743),
                q = n.n(Y);
            const D = Q.Z,
                J = K.Z,
                W = $.Z;
            const X = function () {
                const [e] = q()(D),
                    [t] = q()(J),
                    [n] = q()(W);
                return r.useCallback(
                    (r, o) =>
                        new Promise((i, a) => {
                            r
                                ? o
                                    ? t({
                                          variables: { moduleId: r, communityId: o },
                                          onCompleted(e) {
                                              e.user_update_communities_module?.reason && a(e.user_update_communities_module.reason), i();
                                          },
                                          onError: a,
                                      })
                                    : n({
                                          variables: { moduleId: r },
                                          onCompleted(e) {
                                              e.user_delete_communities_module?.reason && a(e.user_delete_communities_module.reason), i();
                                          },
                                          onError: a,
                                      })
                                : o
                                  ? e({
                                        variables: { communityId: o, visibleOnCreation: !0 },
                                        onCompleted(e) {
                                            e.user_create_communities_module?.reason && a(e.user_create_communities_module.reason), i();
                                        },
                                        onError: a,
                                    })
                                  : i();
                        }),
                    [e, n, t],
                );
            };
            var ee = n(396696),
                te = n(535338);
            const ne = function () {
                    const e = (0, te.p)(ee.Z, {}, { fetchPolicy: "network-only" }),
                        t = e.viewer?.user_results?.result?.profilemodules?.v1?.[0],
                        n = t?.profile_module;
                    if ("CommunitiesModule" === n?.__typename) {
                        const e = n.config.community_results.result;
                        if (t?.module_id && "Community" === e?.__typename) return { moduleId: t?.module_id, communityId: e.rest_id };
                    }
                    return { moduleId: void 0, communityId: void 0 };
                },
                re = C.bL[h.Y.All],
                oe = d().fc2a5c92,
                ie = d().b4b8a486,
                ae = d().i2209530,
                le = r.createElement(a.ZP, { weight: "bold" }, ie),
                ce = d().dbd5d400,
                me = d().jfe04cf6,
                se = d().a14aa8dc,
                ue = d().dbd5d400,
                de = d().cfd2f35e;
            function _e(e) {
                const t = (0, i.useHistory)(),
                    n = (0, p.I0)(),
                    a = r.useRef(!1);
                r.useEffect(
                    () => (
                        (a.current = !0),
                        () => {
                            a.current = !1;
                        }
                    ),
                    [],
                );
                const { communityId: s, moduleId: u } = ne(),
                    d = X(),
                    [g, h] = r.useState(s),
                    [C, y] = r.useState(u),
                    Z = r.useCallback(() => {
                        a.current && t.goBack({ backLocation: re });
                    }, [t]),
                    v = r.useCallback(() => {
                        Z();
                    }, [Z]),
                    w = r.useCallback(() => {
                        d(C, g)
                            .then(() => {
                                Z();
                            })
                            .catch(() => {
                                n((0, b.fz)({ text: oe }));
                            });
                    }, [g, C, n, Z, d]),
                    [I, k] = (0, _.O)(!1),
                    S = r.useCallback(() => {
                        d(C, void 0)
                            .then(() => {
                                a.current && (h(void 0), y(void 0), k.toFalse());
                            })
                            .catch(() => {
                                n((0, b.fz)({ text: oe }));
                            });
                    }, [C, n, k, d]),
                    M = g ? r.createElement(l.ZP, { onPress: w }, ae) : null,
                    L = g ? r.createElement(o.Z, { style: be.clear }, r.createElement(c.Z, { color: "red500", label: ce, onPress: k.toTrue })) : null,
                    P = g ? r.createElement(o.Z, { style: be.preview }, r.createElement(f.Z, { communityId: g })) : null,
                    N = r.createElement(V, { footer: L, onSelectionChanged: h, selectedCommunityId: g });
                return r.createElement(r.Fragment, null, r.createElement(E.Z, { onBackClick: v, rightControl: M, title: le }, P, N), I ? r.createElement(m.Z, { cancelButtonLabel: de, confirmButtonLabel: ue, confirmButtonType: "destructiveFilled", headline: me, onCancel: k.toFalse, onConfirm: S, text: se }) : null);
            }
            const fe = { context: "COMMUNITIES_SPOTLIGHT_SELECTION_SCREEN" };
            function ge(e) {
                return r.createElement(g.H, { errorConfig: fe }, r.createElement(_e, e));
            }
            const pe = r.memo(ge),
                be = s.default.create((e) => ({ preview: { paddingHorizontal: e.spaces.space32 }, clear: { paddingHorizontal: e.spaces.space32 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileCommunitiesSpotlight-6c5c183a.88500e1a.js.map
