"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-c4c4009f"],
    {
        229333: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                n = a(466999),
                o = a(325686),
                l = a(392237),
                i = a(674132);
            const c = a.n(i)().e5b0063d;
            let s = 0;
            class d extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${s}`), (s += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        a = c({ title: t });
                    return r.createElement(o.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), r.createElement(o.Z, { "aria-label": a }, e));
                }
            }
            const m = d;
        },
        415725: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                n = a(325686),
                o = a(392237),
                l = a(822228);
            const i = "activeRoute",
                c = o.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...o.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                s = ({ children: e, ...t }) => r.createElement(l.Z, t, (t) => r.createElement(n.Z, { style: t && c.activeRoot, testID: i }, "function" == typeof e ? e(t) : e, t ? r.createElement(n.Z, { pointerEvents: "none", style: c.overlay }) : null));
        },
        334963: (e, t, a) => {
            a.d(t, { Z: () => Q });
            var r = a(529149),
                n = a(202784),
                o = a(325686),
                l = (a(585488), a(277660)),
                i = a.n(l),
                c = a(310088),
                s = a(392237),
                d = a(674132),
                m = a.n(d),
                u = a(870358),
                p = a(917164),
                b = a(468651),
                h = a(732403),
                Z = a(807896),
                y = a(154003),
                f = a(698891);
            const E = (e) => {
                    const { "aria-label": t, communityId: a, variant: r } = e,
                        o = f.default;
                    return n.createElement(y.ZP, (0, Z.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: n.createElement(o, null), link: `/i/communities/${a}/tools` }, "HeaderDetail" === r ? { style: g.button, type: "onMediaOutlined" } : { size: "large", type: "primaryText" }));
                },
                g = s.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                C = n.memo(E);
            a(136728);
            var v = a(697916),
                w = a(688715),
                I = a(811176),
                R = a(415506),
                _ = a(178519),
                x = a(692165),
                k = a(149170),
                D = a(443781);
            const A = m().e48fbb02,
                M = m().b1614c34,
                P = (0, w.ju)("https://help.x.com/using-twitter/communities#report-community"),
                B = (0, w.ju)("https://help.x.com/using-twitter/communities"),
                H = m().j1dcedde,
                S = v.Z,
                F = (e) => {
                    const { "aria-label": t, community: a, variant: r, viewerHasModeratorAccess: o } = e,
                        { featureSwitches: l } = (0, D.QZ)(),
                        { rest_id: c } = i()(S, a),
                        s = `/i/communities/${c}/search`,
                        d = l.isTrue("c9s_community_tweet_search_enabled"),
                        m = n.useCallback(
                            (e) => {
                                const t = [];
                                return o ? d && t.push({ text: H, Icon: _.default, link: s }) : t.push({ text: A, Icon: R.default, link: P }), t.push({ text: M, Icon: x.default, link: B }), n.createElement(I.Z, { items: t, onCloseRequested: e });
                            },
                            [d, s, o],
                        );
                    return n.createElement(y.ZP, (0, Z.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: n.createElement(k.default, null), renderMenu: m }, "HeaderDetail" === r ? { style: T.button, type: "primaryOutlined" } : { size: "large", type: "primaryText" }));
                },
                T = s.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                $ = n.memo(F),
                z = m().h6beb5fb,
                L = m().d755f47d,
                O = m().h63a5c3c,
                W = m().dce5e1b4,
                j = m().c5d8c93e,
                N = r.Z,
                G = (e) => {
                    const t = i()(N, e.community),
                        a = (0, p.B)(t),
                        r = (0, b.b)(t),
                        { rest_id: l, role: s } = t,
                        d = a + r,
                        m = (0, u.uA)(s),
                        Z = e.variant ?? "AppBar";
                    return n.createElement(o.Z, { style: "HeaderDetail" === Z ? U.headerRoot : U.root }, n.createElement(h.Z, { communityId: l }), m ? n.createElement(o.Z, null, n.createElement(C, { "aria-label": s === u.WW.Admin ? W : j, communityId: l, variant: Z }), d > 0 ? n.createElement(c.Z, { count: d, style: U.menuControlBadge, truncatedCountFormatter: z, unreadCountLabel: L, withBorder: !1 }) : null) : n.createElement($, { "aria-label": O, community: t, variant: Z, viewerHasModeratorAccess: m }));
                },
                Q = n.memo(G),
                U = s.default.create((e) => ({ root: { flexDirection: "row", end: -e.spacesPx.space4 }, headerRoot: { flexDirection: "row" }, menuControlBadge: { backgroundColor: e.colors.magenta500, top: e.spacesPx.space4, end: e.spacesPx.space4 } }));
        },
        21875: (e, t, a) => {
            a.d(t, { Z: () => I });
            var r = a(807896),
                n = a(542327),
                o = a(202784),
                l = (a(585488), a(883229)),
                i = a(535338),
                c = a(275355),
                s = a(277660),
                d = a.n(s),
                m = a(154003),
                u = a(674132),
                p = a.n(u),
                b = a(911373);
            const h = p().b139b54a,
                Z = o.createElement(b.default, null),
                y = (e) => {
                    const { community: t, ...a } = e,
                        n = d()(c.Z, t);
                    if (!n || "CommunityInvitesUnavailable" === n.invites_result.__typename) return null;
                    const l = `/i/communities/${n.rest_id}/invite`;
                    return o.createElement(m.ZP, (0, r.Z)({ "aria-label": h, icon: Z, link: l, type: "primaryText" }, a));
                },
                f = o.memo(y),
                E = { context: "CommunityInviteButtonQuery" },
                g = { type: "CustomRetry", content: () => null },
                C = n.Z,
                v = (e) => {
                    const { communityId: t, ...a } = e,
                        n = (0, i.p)(C, { communityId: t });
                    return "Community" === n.communityResults?.result?.__typename ? o.createElement(f, (0, r.Z)({ community: n.communityResults.result }, a)) : null;
                },
                w = (e) => o.createElement(l.N, { errorConfig: E, fallback: g }, o.createElement(o.Suspense, { fallback: null }, o.createElement(v, (0, r.Z)({ communityId: e.communityId }, e)))),
                I = o.memo(w);
        },
        338114: (e, t, a) => {
            a.d(t, { Z: () => x });
            var r = a(837981),
                n = a(202784),
                o = a(325686),
                l = (a(585488), a(277660)),
                i = a.n(l),
                c = a(392237),
                s = a(952428),
                d = a(682474),
                m = a(530525),
                u = a(439592),
                p = a(731708),
                b = a(310088),
                h = a(674132),
                Z = a.n(h),
                y = a(910805),
                f = a(917164),
                E = a(468651),
                g = a(25618);
            const C = "community-thumbnail-image",
                v = "community-thumbnail-name-container",
                w = r.Z,
                I = () => Z().c8d33380,
                R = (e) => {
                    const t = i()(w, e.community),
                        a = (0, f.B)(t) ?? 0,
                        r = (0, E.b)(t),
                        l = (0, g.c)(t),
                        { id_str: h, name: Z } = t,
                        { crop: R, image: x } = (0, y.L)(t),
                        k = c.default.theme.aspectRatios.communityBanner,
                        D = a + r > 0;
                    return n.createElement(s.Z, { link: `/i/communities/${h}`, style: _.root }, n.createElement(o.Z, { style: _.container }, n.createElement(d.Z, { ratio: k }, n.createElement(m.Z, { "aria-label": "", aspectMode: u.Z.exact(k), backgroundColor: c.default.theme.colors.gray300, cropCandidates: R, image: x, testID: C })), n.createElement(o.Z, { style: _.name, testID: v }, n.createElement(p.ZP, { align: "left", color: "text", numberOfLines: 1, size: "subtext2", weight: "bold" }, Z.trim()))), (D || l) && n.createElement(b.Z, { pip: !0, style: _.pip, unreadCountLabel: I, withBorder: !0 }));
                },
                _ = c.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4, marginHorizontal: e.spaces.space4, marginTop: e.spaces.space2, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large }, container: { width: `calc((${c.default.theme.spaces.space36} * 3) + ${c.default.theme.spaces.space24})`, borderRadius: e.borderRadii.large, overflow: "hidden", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: "100%", backgroundColor: e.colors.gray0 }, pipContainer: { position: "absolute", end: 0 }, pip: { width: e.spaces.space12, height: e.spaces.space12 } })),
                x = n.memo(R);
        },
        414939: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                n = a(325686),
                o = a(392237);
            class l extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(n.Z, { style: i.root });
                }
            }
            const i = o.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                c = l;
        },
        789831: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(807896),
                n = a(202784),
                o = a(325686),
                l = a(392237),
                i = a(655352);
            const c = l.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: t, fab: a, shouldRenderFab: l = !0, style: s, withoutBottomPadding: d, ...m }) => {
                    const u = t || o.Z,
                        p = l && !(0, i.ZP)();
                    return n.createElement(u, (0, r.Z)({}, m, { style: [p && !d && c.root, s] }), e, p ? a : null);
                };
        },
        873637: (e, t, a) => {
            a.d(t, { Z: () => Z });
            var r = a(807896),
                n = a(202784),
                o = a(325686),
                l = a(167630),
                i = a(548485),
                c = a(392237),
                s = a(674132),
                d = a.n(s),
                m = a(205074),
                u = a(653843);
            const p = d().gff1f69e;
            class b extends n.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof m.ZP &&
                        (0, u.ZP)(t).then((e) =>
                            new m.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : n.createElement(l.Z, { "aria-label": p, style: h.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: a, media: r, withAspectRatioOptions: l, withZoomControl: c } = this.props,
                        { orientedImage: s } = this.state,
                        { cropData: d, originalMediaFile: m = {} } = r || {};
                    return s ? n.createElement(o.Z, { style: h.cropper }, n.createElement(i.Z, { circle: this.props.circle, defaultAspectRatio: (a && a.aspectRatio) || (d && d.aspectRatio) || t, defaultCropData: a || d, image: { src: s.url, width: m.width, height: m.height }, ref: e, withAspectRatioOptions: l, withZoomControl: c })) : null;
                }
            }
            const h = c.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                Z = n.forwardRef((e, t) => n.createElement(b, (0, r.Z)({}, e, { cropperRef: t })));
        },
        370111: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(674132),
                o = a.n(n),
                l = a(330815);
            const i = o().b7fb6bda,
                c = o().e71cdf4e,
                s = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: a, onCropDone: n }) {
                const [o, d] = r.useState({ status: "not_started" }),
                    [m, u] = r.useState(!1),
                    [p, b] = r.useState(!1),
                    { croppedMediaId: h, status: Z } = o;
                r.useEffect(() => {
                    Z === s.NotStarted && (u(!0), d({ status: "started" })), Z === s.Completed && t.id !== h && d({ status: "not_started", croppedMediaId: void 0 });
                }, [Z, t, h]);
                const y = r.useCallback(() => {
                        u(!1), d({ status: s.Completed, croppedMediaId: t.id }), a();
                    }, [a, t]),
                    f = r.useCallback(() => {
                        u(!1), b(!0);
                    }, []),
                    E = r.useCallback(() => {
                        b(!1), u(!0);
                    }, []),
                    g = r.useCallback(() => {
                        b(!1);
                    }, []),
                    C = r.useCallback(
                        (e) => {
                            d({ status: s.Completed, croppedMediaId: t.id }), n?.(e);
                        },
                        [n, t],
                    ),
                    v = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return r.createElement(r.Fragment, null, m ? r.createElement(l.Z, { defaultAspectRatio: e, media: t, onCancel: y, onDone: f, title: i }) : null, p ? r.createElement(l.Z, { defaultAspectRatio: 1, media: v, onCancel: E, onCropDone: C, onDone: g, title: c }) : null);
            }
        },
        965245: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                n = a(202784),
                o = a(229333),
                l = a(414939),
                i = a(334346);
            const c = ({ accessibilityTitle: e, footer: t = n.createElement(l.Z, null), ...a }) => {
                const c = n.createElement(i.C, (0, r.Z)({}, a, { footer: t }));
                return e ? n.createElement(o.Z, { title: e }, c) : c;
            };
        },
        741049: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(807896),
                n = a(202784),
                o = a(879891),
                l = a(779610),
                i = a(731708),
                c = a(415725);
            const s = (e) => {
                const { direction: t } = (0, o.Z)();
                return n.createElement(c.Z, { exact: !0, path: e.link }, (a) => {
                    const o = t;
                    return n.createElement(l.Z, (0, r.Z)({ isActive: a }, e, { label: n.createElement(i.ZP, { dir: o, testID: "rtl" === o ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(807896),
                n = a(202784),
                o = a(107267),
                l = a(403556),
                i = a(791632);
            const c = (e) => {
                    const t = (0, o.useHistory)();
                    return n.createElement(l.Z, (0, r.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                s = n.memo(c);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-c4c4009f.afd4c87a.js.map
