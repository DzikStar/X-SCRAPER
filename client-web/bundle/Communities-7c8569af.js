"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-7c8569af"],
    {
        446546: (e, t, n) => {
            n.d(t, { ZP: () => S });
            var r = n(202784),
                o = n(325686),
                a = n(593866),
                i = n(392237),
                c = n(111677),
                s = n.n(c),
                m = n(262009),
                u = n(159340),
                l = n(761744),
                d = n(25704),
                _ = n(175856);
            const f = s().b60e4f78,
                p = s().e50e1bb0,
                g = s().i6829daa,
                y = s().fc5c6914,
                b = s().aa1a9820,
                h = s().edef4c82,
                C = s().a7640df6,
                v = s().h3bb8068,
                Z = s().a709f8f8,
                w = r.memo(({ forSingleCommunity: e }) => {
                    const t = r.useCallback(() => {
                        const e = [E.decorationContainer],
                            t = r.createElement(m.default, { style: e }),
                            n = r.createElement(u.default, { style: e }),
                            i = r.createElement(l.default, { style: e });
                        return r.createElement(
                            o.Z,
                            { style: E.infoItemsContainer },
                            r.createElement(a.Z, {
                                containerStyle: E.itemContainer,
                                items: [
                                    { label: y, description: b, decoration: t },
                                    { label: h, description: C, decoration: n },
                                    { label: v, description: Z, decoration: i },
                                ],
                            }),
                        );
                    }, []);
                    return !1 === e?.canJoinCommunity ? null : r.createElement(d.Z, { Content: t, actionLabel: f, flag: _.Fk, headline: p, subtext: g, withCloseButton: !e });
                }),
                E = i.default.create((e) => ({ infoItemsContainer: { marginBottom: e.spaces.space32 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, decorationContainer: { color: e.colors.text, height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space20 } })),
                S = w;
        },
        82152: (e, t, n) => {
            n.d(t, { ys: () => p });
            var r = n(807896),
                o = n(202784),
                a = n(879113),
                i = n(615656),
                c = n(615027);
            var s = n(71620),
                m = n(668214),
                u = n(491963),
                l = n(182846);
            const d = (0, m.Z)()
                    .propsFromState(() => ({ community: l.ZM, fetchStatus: l.YE, error: l.Kz }))
                    .propsFromActions(() => ({ fetchCommunityIfNeeded: u.ZP.fetchOneIfNeeded, createLocalApiErrorHandler: (0, s.zr)("COMMUNITY_TOOLS_SETTINGS_SCREEN") })),
                _ = o.createElement(c.Z, { to: "/" }),
                f = d((e) => {
                    const { allowRoles: t, community: n, component: s, createLocalApiErrorHandler: m, error: u, fetchCommunityIfNeeded: l, fetchStatus: d, history: f, location: p, match: g } = e,
                        y = g.params.communityId,
                        b = m(),
                        h = ((e, t, n) => {
                            const r = o.useCallback(() => {
                                e && t(e).catch(n);
                            }, [e, t, n]);
                            return o.useEffect(r, [e, t]), r;
                        })(y, l, b),
                        C = o.useCallback(() => {
                            const e = { history: f, location: p, match: g },
                                a = n?.role;
                            return !t || t.includes(a) ? (y && n ? o.createElement(s, (0, r.Z)({ community: n, communityId: y }, e)) : null) : _;
                        }, [t, n, y, f, p, g]);
                    return y ? (u && (0, i.VZ)(u, i.ZP.CommunityNotFound) ? o.createElement(c.Z, { to: `/i/communities/${y}` }) : o.createElement(a.Z, { fetchStatus: d, onRequestRetry: h, render: C })) : _;
                }),
                p = (e, t) => (n) => o.createElement(f, (0, r.Z)({}, n, t, { component: e }));
        },
        695463: (e, t, n) => {
            n.r(t), n.d(t, { CommunityScreen: () => L, communityQuery: () => F, default: () => U, getTweetButtonLocationState: () => k });
            var r = n(369233),
                o = n(202784),
                a = n(529356),
                i = n(750410),
                c = n(111677),
                s = n.n(c),
                m = n(334963),
                u = n(252021),
                l = n(736063),
                d = n(870358),
                _ = n(535338),
                f = n(668214),
                p = n(742602),
                g = n(919022),
                y = n(182846);
            const b = (e, t) => {
                    const n = y.XH(e, t);
                    return !n || (0, p.l3)(e, n, "mod_education_flag");
                },
                h = (0, f.Z)()
                    .propsFromState(() => ({ communityId: y.XH, hasShownModEducation: b, isCommunityMember: y.Cp, viewerUser: g.ZP.selectViewerUser }))
                    .adjustStateProps((e) => {
                        const { viewerUser: t, ...n } = e;
                        return { screenName: t ? t.screen_name : void 0, ...n };
                    })
                    .propsFromActions(() => ({ setFlag: p.mB }))
                    .withAnalytics({ page: "community" });
            var C = n(348697),
                v = n(256158),
                Z = n(610811);
            const w = s().a7c2e06d,
                E = s().j24c37b2,
                S = s().a94092a2,
                I = s().be6dfbae,
                M = s().b4f877be,
                k = (e) => ({ selectedCommunityId: e, defaultText: "" }),
                N = { context: "CommunityScreen" },
                F = r.Z,
                L = (e) => {
                    const { communityId: t, hasShownModEducation: n, history: r, screenName: c, setFlag: s } = e,
                        { communityResults: f } = (0, _.p)(F, { communityId: t || "" }),
                        p = o.useCallback(() => {
                            t && s(t, "mod_education_flag", !0);
                        }, [t, s]),
                        g = o.useMemo(() => k(t), [t]),
                        y = o.useMemo(() => {
                            if ("Community" === f.result?.__typename) {
                                const e = f.result?.name,
                                    i = f.result?.role,
                                    s = i === d.WW.Moderator && !n,
                                    l = o.createElement(m.Z, { community: f.result }),
                                    _ = o.createElement(Z.Z, { communityId: t || "" }),
                                    y = o.createElement(C.Z, { community: f.result, composeOptions: g });
                                return o.createElement(o.Fragment, null, o.createElement(u.Z, { backLocation: c && `/${c}/communities`, composeOptions: g, documentTitle: e ? w({ communityName: e }) : M, history: r, primaryContent: y, rightControl: l, sidebarContent: _, title: e || null }), s ? o.createElement(a.Z, { actionLabel: E, graphicDisplayMode: "none", headline: S, onAction: p, onClose: p, subtext: I, withCloseButton: !0 }) : null);
                            }
                            return "CommunityUnavailable" === f.result?.__typename ? o.createElement(v.$, { community: f.result }) : o.createElement(i.Z, null);
                        }, [p, t, f, g, n, r, c]);
                    return t ? o.createElement(l.H, { errorConfig: N }, y) : null;
                },
                U = h(L);
        },
        208078: (e, t, n) => {
            n.d(t, { g: () => m });
            var r = n(202784),
                o = n(53647),
                a = n.n(o),
                i = n(437429),
                c = n.n(i),
                s = n(36638);
            const m = () => {
                const e = c()();
                return r.useCallback(
                    (t) => {
                        a()(e, (e) => {
                            const n = e.get((0, s.WG)("CommunitiesViewer", t)),
                                r = n?.getValue("unread_indicator_active");
                            r && n?.setValue(!1, "unread_indicator_active");
                        });
                    },
                    [e],
                );
            };
        },
        910805: (e, t, n) => {
            n.d(t, { L: () => f, Z: () => _ });
            var r = n(51403),
                o = n(29277),
                a = n(559035),
                i = n(738666),
                c = n(202784),
                s = (n(585488), n(277660)),
                m = n.n(s),
                u = n(952183);
            const l = (e) => {
                    const t = m()(i.Z, e);
                    return c.useMemo(() => {
                        const e = t?.custom_banner_media?.media_info;
                        if (e?.original_img_url && e?.original_img_height && e?.original_img_width && e?.color_info?.palette) {
                            const t = e.color_info.palette;
                            return { url: e.original_img_url, height: e.original_img_height, width: e.original_img_width, palette: t.map(({ percentage: e, rgb: t }) => ({ percentage: e, rgb: { blue: t.blue, red: t.red, green: t.green } })) };
                        }
                    }, [t?.custom_banner_media?.media_info]);
                },
                d = (e) => {
                    const t = m()(a.Z, e);
                    return c.useMemo(() => {
                        const e = t?.default_banner_media?.media_info,
                            n = e?.original_img_url,
                            r = e?.original_img_height,
                            o = e?.original_img_width;
                        if (n && r && o) return { url: n, height: r, width: o };
                    }, [t?.default_banner_media?.media_info]);
                },
                _ = (e) => {
                    const t = m()(o.Z, e),
                        n = l(t),
                        r = d(t);
                    return n || r || u.bU;
                },
                f = (e) => {
                    const t = m()(r.Z, e),
                        n = l(t),
                        o = d(t);
                    return c.useMemo(() => {
                        if (n) {
                            const e = t.custom_banner_media?.media_info?.salient_rect;
                            return { image: n, crop: p(e) };
                        }
                        if (o) {
                            const e = t.default_banner_media?.media_info?.salient_rect;
                            return { image: o, crop: p(e) };
                        }
                        return { image: u.bU, crop: u.uj };
                    }, [t.custom_banner_media?.media_info?.salient_rect, t.default_banner_media?.media_info?.salient_rect, n, o]);
                },
                p = (e) => {
                    if (!e) return [];
                    const { height: t, left: n, top: r, width: o } = e;
                    return [{ x: n, y: r, w: o, h: t }];
                };
        },
        243497: (e, t, n) => {
            n.d(t, { i: () => c });
            var r = n(643499),
                o = (n(585488), n(277660)),
                a = n.n(o);
            const i = r.Z,
                c = (e) => {
                    const { join_requests_result: t } = a()(i, e);
                    return "CommunityJoinRequests" === t.__typename;
                };
        },
        495010: (e, t, n) => {
            n.d(t, { h: () => m });
            var r = n(202784),
                o = n(53647),
                a = n.n(o),
                i = n(437429),
                c = n.n(i),
                s = n(36638);
            const m = () => {
                const e = c()();
                return r.useCallback(
                    (t) => {
                        a()(e, (e) => {
                            const n = e.get((0, s.WG)("Community", t));
                            if (n) {
                                const e = n.getValue("last_active_at"),
                                    t = n.getValue("last_viewed_at");
                                "number" == typeof t && "number" == typeof e && t < e && n.setValue(e, "last_viewed_at");
                            }
                        });
                    },
                    [e],
                );
            };
        },
        917164: (e, t, n) => {
            n.d(t, { B: () => c });
            var r = n(115751),
                o = (n(585488), n(277660)),
                a = n.n(o);
            const i = r.Z,
                c = (e) => {
                    const { join_requests_result: t } = a()(i, e);
                    return "CommunityJoinRequests" === t.__typename ? t.pending_join_request_count : 0;
                };
        },
        468651: (e, t, n) => {
            n.d(t, { b: () => c });
            var r = n(497098),
                o = (n(585488), n(277660)),
                a = n.n(o);
            const i = r.Z,
                c = (e) => {
                    const { moderation: t } = a()(i, e);
                    return t?.tweet_case_count ?? 0;
                };
        },
        25618: (e, t, n) => {
            n.d(t, { c: () => c });
            var r = n(120600),
                o = (n(585488), n(277660)),
                a = n.n(o);
            const i = r.Z,
                c = (e) => {
                    const { last_active_at: t, last_viewed_at: n } = a()(i, e);
                    return !(!t || !n) && t > n;
                };
        },
        561972: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(443781),
                a = n(952793);
            const i = function () {
                const { viewerUserId: e } = r.useContext(o.rC);
                return (0, a.hC)("c9s_logged_out_access_enabled") && !e;
            };
        },
        979673: (e, t, n) => {
            n.d(t, { LU: () => c, Qy: () => l, fV: () => u, jf: () => m });
            var r = n(111677),
                o = n.n(r);
            const a = o().ja781451,
                i = o().cfa1a7b9,
                c = (e, t) => new Date(e).toISOString().substring(t ? 11 : 14, 19);
            function s(e) {
                return e || 0;
            }
            function m(e, t) {
                const n = s(t);
                return 0 === n ? 0 : s(e) / n;
            }
            function u(e, t = 1e5) {
                const n = s(e);
                return n >= t ? i(n) : a(n);
            }
            function l(e, t, n) {
                const r = t?.find((t) => t.metric_type === e),
                    o = n?.find((t) => t.metric_type === e),
                    a = r?.metric_value ?? 0,
                    i = o?.metric_value ?? 0;
                return { metric_type: e, organic_value: a, promoted_value: i, total_value: a + i };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-7c8569af.06b572fa.js.map
