"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-c4c4009f"],
    {
        229333: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                r = a(466999),
                o = a(325686),
                l = a(392237),
                c = a(674132);
            const s = a.n(c)().e5b0063d;
            let i = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${i}`), (i += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = s({ title: t });
                    return n.createElement(o.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), n.createElement(o.Z, { "aria-label": a }, e));
                }
            }
            const m = d;
        },
        415725: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(202784),
                r = a(325686),
                o = a(392237),
                l = a(822228);
            const c = "activeRoute",
                s = o.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...o.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                i = ({ children: e, ...t }) => n.createElement(l.Z, t, (t) => n.createElement(r.Z, { style: t && s.activeRoot, testID: c }, "function" == typeof e ? e(t) : e, t ? n.createElement(r.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        334963: (e, t, a) => {
            a.d(t, { Z: () => U });
            var n = a(529149),
                r = a(202784),
                o = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                s = a(310088),
                i = a(392237),
                d = a(674132),
                m = a.n(d),
                u = a(870358),
                p = a(917164),
                b = a(468651),
                y = a(732403),
                Z = a(807896),
                h = a(154003),
                E = a(698891);
            const f = (e) => {
                    const { "aria-label": t, communityId: a, variant: n } = e,
                        o = E.default;
                    return r.createElement(h.ZP, (0, Z.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: r.createElement(o, null), link: `/i/communities/${a}/tools` }, "HeaderDetail" === n ? { style: C.button, type: "onMediaOutlined" } : { size: "large", type: "primaryText" }));
                },
                C = i.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                g = r.memo(f);
            a(136728);
            var v = a(697916),
                _ = a(688715),
                I = a(811176),
                x = a(415506),
                k = a(178519),
                w = a(692165),
                R = a(149170),
                D = a(443781);
            const B = m().e48fbb02,
                H = m().b1614c34,
                M = (0, _.ju)("https://help.x.com/using-twitter/communities#report-community"),
                P = (0, _.ju)("https://help.x.com/using-twitter/communities"),
                A = m().j1dcedde,
                S = v.Z,
                T = (e) => {
                    const { "aria-label": t, community: a, variant: n, viewerHasModeratorAccess: o } = e,
                        { featureSwitches: l } = (0, D.QZ)(),
                        { rest_id: s } = c()(S, a),
                        i = `/i/communities/${s}/search`,
                        d = l.isTrue("c9s_community_tweet_search_enabled"),
                        m = r.useCallback(
                            (e) => {
                                const t = [];
                                return o ? d && t.push({ text: A, Icon: k.default, link: i }) : t.push({ text: B, Icon: x.default, link: M }), t.push({ text: H, Icon: w.default, link: P }), r.createElement(I.Z, { items: t, onCloseRequested: e });
                            },
                            [d, i, o],
                        );
                    return r.createElement(h.ZP, (0, Z.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: r.createElement(R.default, null), renderMenu: m }, "HeaderDetail" === n ? { style: $.button, type: "primaryOutlined" } : { size: "large", type: "primaryText" }));
                },
                $ = i.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                z = r.memo(T),
                L = m().h6beb5fb,
                F = m().d755f47d,
                W = m().h63a5c3c,
                j = m().dce5e1b4,
                N = m().c5d8c93e,
                O = n.Z,
                Q = (e) => {
                    const t = c()(O, e.community),
                        a = (0, p.B)(t),
                        n = (0, b.b)(t),
                        { rest_id: l, role: i } = t,
                        d = a + n,
                        m = (0, u.uA)(i),
                        Z = e.variant ?? "AppBar";
                    return r.createElement(o.Z, { style: "HeaderDetail" === Z ? V.headerRoot : V.root }, r.createElement(y.Z, { communityId: l }), m ? r.createElement(o.Z, null, r.createElement(g, { "aria-label": i === u.WW.Admin ? j : N, communityId: l, variant: Z }), d > 0 ? r.createElement(s.Z, { count: d, style: V.menuControlBadge, truncatedCountFormatter: L, unreadCountLabel: F, withBorder: !1 }) : null) : r.createElement(z, { "aria-label": W, community: t, variant: Z, viewerHasModeratorAccess: m }));
                },
                U = r.memo(Q),
                V = i.default.create((e) => ({ root: { flexDirection: "row", end: -e.spacesPx.space4 }, headerRoot: { flexDirection: "row" }, menuControlBadge: { backgroundColor: e.colors.magenta500, top: e.spacesPx.space4, end: e.spacesPx.space4 } }));
        },
        21875: (e, t, a) => {
            a.d(t, { Z: () => I });
            var n = a(807896),
                r = a(542327),
                o = a(202784),
                l = (a(585488), a(883229)),
                c = a(535338),
                s = a(275355),
                i = a(277660),
                d = a.n(i),
                m = a(154003),
                u = a(674132),
                p = a.n(u),
                b = a(911373);
            const y = p().b139b54a,
                Z = o.createElement(b.default, null),
                h = (e) => {
                    const { community: t, ...a } = e,
                        r = d()(s.Z, t);
                    if (!r || "CommunityInvitesUnavailable" === r.invites_result.__typename) return null;
                    const l = `/i/communities/${r.rest_id}/invite`;
                    return o.createElement(m.ZP, (0, n.Z)({ "aria-label": y, icon: Z, link: l, type: "primaryText" }, a));
                },
                E = o.memo(h),
                f = { context: "CommunityInviteButtonQuery" },
                C = { type: "CustomRetry", content: () => null },
                g = r.Z,
                v = (e) => {
                    const { communityId: t, ...a } = e,
                        r = (0, c.p)(g, { communityId: t });
                    return "Community" === r.communityResults?.result?.__typename ? o.createElement(E, (0, n.Z)({ community: r.communityResults.result }, a)) : null;
                },
                _ = (e) => o.createElement(l.N, { errorConfig: f, fallback: C }, o.createElement(o.Suspense, { fallback: null }, o.createElement(v, (0, n.Z)({ communityId: e.communityId }, e)))),
                I = o.memo(_);
        },
        338114: (e, t, a) => {
            a.d(t, { Z: () => w });
            var n = a(837981),
                r = a(202784),
                o = a(325686),
                l = (a(585488), a(277660)),
                c = a.n(l),
                s = a(392237),
                i = a(952428),
                d = a(682474),
                m = a(530525),
                u = a(439592),
                p = a(731708),
                b = a(310088),
                y = a(674132),
                Z = a.n(y),
                h = a(910805),
                E = a(917164),
                f = a(468651),
                C = a(25618);
            const g = "community-thumbnail-image",
                v = "community-thumbnail-name-container",
                _ = n.Z,
                I = () => Z().c8d33380,
                x = (e) => {
                    const t = c()(_, e.community),
                        a = (0, E.B)(t) ?? 0,
                        n = (0, f.b)(t),
                        l = (0, C.c)(t),
                        { id_str: y, name: Z } = t,
                        { crop: x, image: w } = (0, h.L)(t),
                        R = s.default.theme.aspectRatios.communityBanner,
                        D = a + n > 0;
                    return r.createElement(i.Z, { link: `/i/communities/${y}`, style: k.root }, r.createElement(o.Z, { style: k.container }, r.createElement(d.Z, { ratio: R }, r.createElement(m.Z, { "aria-label": "", aspectMode: u.Z.exact(R), backgroundColor: s.default.theme.colors.gray300, cropCandidates: x, image: w, testID: g })), r.createElement(o.Z, { style: k.name, testID: v }, r.createElement(p.ZP, { align: "left", color: "text", numberOfLines: 1, size: "subtext2", weight: "bold" }, Z.trim()))), (D || l) && r.createElement(b.Z, { pip: !0, style: k.pip, unreadCountLabel: I, withBorder: !0 }));
                },
                k = s.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4, marginHorizontal: e.spaces.space4, marginTop: e.spaces.space2, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large }, container: { width: `calc((${s.default.theme.spaces.space36} * 3) + ${s.default.theme.spaces.space24})`, borderRadius: e.borderRadii.large, overflow: "hidden", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: "100%", backgroundColor: e.colors.gray0 }, pipContainer: { position: "absolute", end: 0 }, pip: { width: e.spaces.space12, height: e.spaces.space12 } })),
                w = r.memo(x);
        },
        414939: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(325686),
                o = a(392237);
            class l extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: c.root });
                }
            }
            const c = o.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = l;
        },
        789831: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(807896),
                r = a(202784),
                o = a(325686),
                l = a(392237),
                c = a(655352);
            const s = l.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                i = ({ children: e, component: t, fab: a, shouldRenderFab: l = !0, style: i, withoutBottomPadding: d, ...m }) => {
                    const u = t || o.Z,
                        p = l && !(0, c.ZP)();
                    return r.createElement(u, (0, n.Z)({}, m, { style: [p && !d && s.root, i] }), e, p ? a : null);
                };
        },
        370111: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(674132),
                o = a.n(r),
                l = a(330815);
            const c = o().b7fb6bda,
                s = o().e71cdf4e,
                i = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: a, onCropDone: r }) {
                const [o, d] = n.useState({ status: "not_started" }),
                    [m, u] = n.useState(!1),
                    [p, b] = n.useState(!1),
                    { croppedMediaId: y, status: Z } = o;
                n.useEffect(() => {
                    Z === i.NotStarted && (u(!0), d({ status: "started" })), Z === i.Completed && t.id !== y && d({ status: "not_started", croppedMediaId: void 0 });
                }, [Z, t, y]);
                const h = n.useCallback(() => {
                        u(!1), d({ status: i.Completed, croppedMediaId: t.id }), a();
                    }, [a, t]),
                    E = n.useCallback(() => {
                        u(!1), b(!0);
                    }, []),
                    f = n.useCallback(() => {
                        b(!1), u(!0);
                    }, []),
                    C = n.useCallback(() => {
                        b(!1);
                    }, []),
                    g = n.useCallback(
                        (e) => {
                            d({ status: i.Completed, croppedMediaId: t.id }), r?.(e);
                        },
                        [r, t],
                    ),
                    v = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return n.createElement(n.Fragment, null, m ? n.createElement(l.Z, { defaultAspectRatio: e, media: t, onCancel: h, onDone: E, title: c }) : null, p ? n.createElement(l.Z, { defaultAspectRatio: 1, media: v, onCancel: f, onCropDone: g, onDone: C, title: s }) : null);
            }
        },
        965245: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(807896),
                r = a(202784),
                o = a(229333),
                l = a(414939),
                c = a(334346);
            const s = ({ accessibilityTitle: e, footer: t = r.createElement(l.Z, null), ...a }) => {
                const s = r.createElement(c.C, (0, n.Z)({}, a, { footer: t }));
                return e ? r.createElement(o.Z, { title: e }, s) : s;
            };
        },
        741049: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(807896),
                r = a(202784),
                o = a(879891),
                l = a(779610),
                c = a(731708),
                s = a(415725);
            const i = (e) => {
                const { direction: t } = (0, o.Z)();
                return r.createElement(s.Z, { exact: !0, path: e.link }, (a) => {
                    const o = t;
                    return r.createElement(l.Z, (0, n.Z)({ isActive: a }, e, { label: r.createElement(c.ZP, { dir: o, testID: "rtl" === o ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(807896),
                r = a(202784),
                o = a(107267),
                l = a(403556),
                c = a(791632);
            const s = (e) => {
                    const t = (0, o.useHistory)();
                    return r.createElement(l.Z, (0, n.Z)({}, e, { isCompact: (0, c.HD)(t) }));
                },
                i = r.memo(s);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-c4c4009f.0a47d61a.js.map
