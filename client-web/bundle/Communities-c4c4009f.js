"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-c4c4009f"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                a = o(466999),
                r = o(325686),
                l = o(392237),
                i = o(111677);
            const s = o.n(i)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = s({ title: t });
                    return n.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(a.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), n.createElement(r.Z, { "aria-label": o }, e));
                }
            }
            const u = d;
        },
        415725: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                a = o(325686),
                r = o(392237),
                l = o(822228);
            const i = "activeRoute",
                s = r.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...r.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(l.Z, t, (t) => n.createElement(a.Z, { style: t && s.activeRoot, testID: i }, "function" == typeof e ? e(t) : e, t ? n.createElement(a.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        334963: (e, t, o) => {
            o.d(t, { Z: () => G });
            var n = o(529149),
                a = o(202784),
                r = o(325686),
                l = (o(585488), o(277660)),
                i = o.n(l),
                s = o(310088),
                c = o(392237),
                d = o(111677),
                u = o.n(d),
                m = o(870358),
                p = o(917164),
                h = o(468651),
                b = o(732403),
                y = o(807896),
                C = o(154003),
                Z = o(698891);
            const f = (e) => {
                    const { "aria-label": t, communityId: o, variant: n } = e,
                        r = Z.default;
                    return a.createElement(C.ZP, (0, y.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: a.createElement(r, null), link: `/i/communities/${o}/tools` }, "HeaderDetail" === n ? { style: w.button, type: "onMediaOutlined" } : { size: "large", type: "primaryText" }));
                },
                w = c.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                E = a.memo(f);
            o(136728);
            var g = o(697916),
                v = o(688715),
                B = o(811176),
                I = o(415506),
                k = o(178519),
                x = o(692165),
                R = o(149170),
                _ = o(443781);
            const D = u().e48fbb02,
                T = u().b1614c34,
                S = (0, v.ju)("https://help.x.com/using-twitter/communities#report-community"),
                O = (0, v.ju)("https://help.x.com/using-twitter/communities"),
                P = u().j1dcedde,
                L = g.Z,
                F = (e) => {
                    const { "aria-label": t, community: o, variant: n, viewerHasModeratorAccess: r } = e,
                        { featureSwitches: l } = (0, _.QZ)(),
                        { rest_id: s } = i()(L, o),
                        c = `/i/communities/${s}/search`,
                        d = l.isTrue("c9s_community_tweet_search_enabled"),
                        u = a.useCallback(
                            (e) => {
                                const t = [];
                                return r ? d && t.push({ text: P, Icon: k.default, link: c }) : t.push({ text: D, Icon: I.default, link: S }), t.push({ text: T, Icon: x.default, link: O }), a.createElement(B.Z, { items: t, onCloseRequested: e });
                            },
                            [d, c, r],
                        );
                    return a.createElement(C.ZP, (0, y.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: a.createElement(R.default, null), renderMenu: u }, "HeaderDetail" === n ? { style: A.button, type: "primaryOutlined" } : { size: "large", type: "primaryText" }));
                },
                A = c.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                H = a.memo(F),
                M = u().h6beb5fb,
                W = u().d755f47d,
                z = u().h63a5c3c,
                N = u().dce5e1b4,
                $ = u().c5d8c93e,
                j = n.Z,
                V = (e) => {
                    const t = i()(j, e.community),
                        o = (0, p.B)(t),
                        n = (0, h.b)(t),
                        { rest_id: l, role: c } = t,
                        d = o + n,
                        u = (0, m.uA)(c),
                        y = e.variant ?? "AppBar";
                    return a.createElement(r.Z, { style: "HeaderDetail" === y ? Q.headerRoot : Q.root }, a.createElement(b.Z, { communityId: l }), u ? a.createElement(r.Z, null, a.createElement(E, { "aria-label": c === m.WW.Admin ? N : $, communityId: l, variant: y }), d > 0 ? a.createElement(s.Z, { count: d, style: Q.menuControlBadge, truncatedCountFormatter: M, unreadCountLabel: W, withBorder: !1 }) : null) : a.createElement(H, { "aria-label": z, community: t, variant: y, viewerHasModeratorAccess: u }));
                },
                G = a.memo(V),
                Q = c.default.create((e) => ({ root: { flexDirection: "row", end: -e.spacesPx.space4 }, headerRoot: { flexDirection: "row" }, menuControlBadge: { backgroundColor: e.colors.magenta500, top: e.spacesPx.space4, end: e.spacesPx.space4 } }));
        },
        21875: (e, t, o) => {
            o.d(t, { Z: () => B });
            var n = o(807896),
                a = o(542327),
                r = o(202784),
                l = (o(585488), o(883229)),
                i = o(535338),
                s = o(275355),
                c = o(277660),
                d = o.n(c),
                u = o(154003),
                m = o(111677),
                p = o.n(m),
                h = o(911373);
            const b = p().b139b54a,
                y = r.createElement(h.default, null),
                C = (e) => {
                    const { community: t, ...o } = e,
                        a = d()(s.Z, t);
                    if (!a || "CommunityInvitesUnavailable" === a.invites_result.__typename) return null;
                    const l = `/i/communities/${a.rest_id}/invite`;
                    return r.createElement(u.ZP, (0, n.Z)({ "aria-label": b, icon: y, link: l, type: "primaryText" }, o));
                },
                Z = r.memo(C),
                f = { context: "CommunityInviteButtonQuery" },
                w = { type: "CustomRetry", content: () => null },
                E = a.Z,
                g = (e) => {
                    const { communityId: t, ...o } = e,
                        a = (0, i.p)(E, { communityId: t });
                    return "Community" === a.communityResults?.result?.__typename ? r.createElement(Z, (0, n.Z)({ community: a.communityResults.result }, o)) : null;
                },
                v = (e) => r.createElement(l.N, { errorConfig: f, fallback: w }, r.createElement(r.Suspense, { fallback: null }, r.createElement(g, (0, n.Z)({ communityId: e.communityId }, e)))),
                B = r.memo(v);
        },
        338114: (e, t, o) => {
            o.d(t, { Z: () => x });
            var n = o(837981),
                a = o(202784),
                r = o(325686),
                l = (o(585488), o(277660)),
                i = o.n(l),
                s = o(392237),
                c = o(952428),
                d = o(682474),
                u = o(530525),
                m = o(439592),
                p = o(731708),
                h = o(310088),
                b = o(111677),
                y = o.n(b),
                C = o(910805),
                Z = o(917164),
                f = o(468651),
                w = o(25618);
            const E = "community-thumbnail-image",
                g = "community-thumbnail-name-container",
                v = n.Z,
                B = () => y().c8d33380,
                I = (e) => {
                    const t = i()(v, e.community),
                        o = (0, Z.B)(t) ?? 0,
                        n = (0, f.b)(t),
                        l = (0, w.c)(t),
                        { id_str: b, name: y } = t,
                        { crop: I, image: x } = (0, C.L)(t),
                        R = s.default.theme.aspectRatios.communityBanner,
                        _ = o + n > 0;
                    return a.createElement(c.Z, { link: `/i/communities/${b}`, style: k.root }, a.createElement(r.Z, { style: k.container }, a.createElement(d.Z, { ratio: R }, a.createElement(u.Z, { "aria-label": "", aspectMode: m.Z.exact(R), backgroundColor: s.default.theme.colors.gray300, cropCandidates: I, image: x, testID: E })), a.createElement(r.Z, { style: k.name, testID: g }, a.createElement(p.ZP, { align: "left", color: "text", numberOfLines: 1, size: "subtext2", weight: "bold" }, y.trim()))), (_ || l) && a.createElement(h.Z, { pip: !0, style: k.pip, unreadCountLabel: B, withBorder: !0 }));
                },
                k = s.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4, marginHorizontal: e.spaces.space4, marginTop: e.spaces.space2, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large }, container: { width: `calc((${s.default.theme.spaces.space36} * 3) + ${s.default.theme.spaces.space24})`, borderRadius: e.borderRadii.large, overflow: "hidden", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: "100%", backgroundColor: e.colors.gray0 }, pipContainer: { position: "absolute", end: 0 }, pip: { width: e.spaces.space12, height: e.spaces.space12 } })),
                x = a.memo(I);
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                a = o(325686),
                r = o(392237);
            class l extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(a.Z, { style: i.root });
                }
            }
            const i = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = l;
        },
        789831: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                a = o(202784),
                r = o(325686),
                l = o(392237),
                i = o(655352);
            const s = l.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: o, shouldRenderFab: l = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const m = t || r.Z,
                        p = l && !(0, i.ZP)();
                    return a.createElement(m, (0, n.Z)({}, u, { style: [p && !d && s.root, c] }), e, p ? o : null);
                };
        },
        873637: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(807896),
                a = o(202784),
                r = o(325686),
                l = o(167630),
                i = o(548485),
                s = o(392237),
                c = o(111677),
                d = o.n(c),
                u = o(205074),
                m = o(653843);
            const p = d().gff1f69e;
            class h extends a.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof u.ZP &&
                        (0, m.ZP)(t).then((e) =>
                            new u.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : a.createElement(l.Z, { "aria-label": p, style: b.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: o, media: n, withAspectRatioOptions: l, withZoomControl: s } = this.props,
                        { orientedImage: c } = this.state,
                        { cropData: d, originalMediaFile: u = {} } = n || {};
                    return c ? a.createElement(r.Z, { style: b.cropper }, a.createElement(i.Z, { circle: this.props.circle, defaultAspectRatio: (o && o.aspectRatio) || (d && d.aspectRatio) || t, defaultCropData: o || d, image: { src: c.url, width: u.width, height: u.height }, ref: e, withAspectRatioOptions: l, withZoomControl: s })) : null;
                }
            }
            const b = s.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                y = a.forwardRef((e, t) => a.createElement(h, (0, n.Z)({}, e, { cropperRef: t })));
        },
        370111: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                a = o(111677),
                r = o.n(a),
                l = o(330815);
            const i = r().b7fb6bda,
                s = r().e71cdf4e,
                c = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: o, onCropDone: a }) {
                const [r, d] = n.useState({ status: "not_started" }),
                    [u, m] = n.useState(!1),
                    [p, h] = n.useState(!1),
                    { croppedMediaId: b, status: y } = r;
                n.useEffect(() => {
                    y === c.NotStarted && (m(!0), d({ status: "started" })), y === c.Completed && t.id !== b && d({ status: "not_started", croppedMediaId: void 0 });
                }, [y, t, b]);
                const C = n.useCallback(() => {
                        m(!1), d({ status: c.Completed, croppedMediaId: t.id }), o();
                    }, [o, t]),
                    Z = n.useCallback(() => {
                        m(!1), h(!0);
                    }, []),
                    f = n.useCallback(() => {
                        h(!1), m(!0);
                    }, []),
                    w = n.useCallback(() => {
                        h(!1);
                    }, []),
                    E = n.useCallback(
                        (e) => {
                            d({ status: c.Completed, croppedMediaId: t.id }), a?.(e);
                        },
                        [a, t],
                    ),
                    g = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return n.createElement(n.Fragment, null, u ? n.createElement(l.Z, { defaultAspectRatio: e, media: t, onCancel: C, onDone: Z, title: i }) : null, p ? n.createElement(l.Z, { defaultAspectRatio: 1, media: g, onCancel: f, onCropDone: E, onDone: w, title: s }) : null);
            }
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(807896),
                a = o(202784),
                r = o(229333),
                l = o(414939),
                i = o(334346);
            const s = ({ accessibilityTitle: e, footer: t = a.createElement(l.Z, null), ...o }) => {
                const s = a.createElement(i.C, (0, n.Z)({}, o, { footer: t }));
                return e ? a.createElement(r.Z, { title: e }, s) : s;
            };
        },
        741049: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                a = o(202784),
                r = o(879891),
                l = o(779610),
                i = o(731708),
                s = o(415725);
            const c = (e) => {
                const { direction: t } = (0, r.Z)();
                return a.createElement(s.Z, { exact: !0, path: e.link }, (o) => {
                    const r = t;
                    return a.createElement(l.Z, (0, n.Z)({ isActive: o }, e, { label: a.createElement(i.ZP, { dir: r, testID: "rtl" === r ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        222718: (e, t, o) => {
            o.d(t, { Z: () => C });
            var n = o(202784),
                a = o(325686),
                r = o(537392),
                l = o(10656),
                i = o(655352),
                s = o(555079),
                c = o(500002),
                d = o(625661),
                u = o(449067),
                m = o(655543),
                p = o(715601),
                h = o(392237);
            const b = h.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...h.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(a.Z, { style: b.fill }, n.createElement(p.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(r.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: o, screenType: a, showBackButtonOnRoot: r, showSubtitleOnRoot: l, showSubtitleOnWideDetail: s, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: m, ...p } = this.props;
                    return n.createElement(n.Fragment, null, (0, i.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(u.Z.Configure, p), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: o, appBarStyle: r, backLocation: l, documentTitle: i, headerless: c, history: m, leftControl: p, middleControl: h, onBackClick: y, rightControl: C, screenType: Z, searchBoxOptions: f, secondaryBar: w, showBackButtonOnRoot: E, showSubtitleOnRoot: g, showSubtitleOnWideDetail: v, showTitleOnRoot: B, subtitle: I, title: k, titleIconCell: x, titleIconCellSize: R, withDetailOpen: _, withSearchBox: D, withTweetButton: T, withWideContainer: S } = this.props,
                        O = "root" === Z,
                        P = "secondaryRoot" === Z,
                        L = "primaryDetail" === Z,
                        F = (L && v) || (O && g),
                        A = (O && !E) || (L && e),
                        H = (O && !B) || (L && e && !B),
                        M = O ? s.ey : L ? s.vX : void 0,
                        W = n.createElement(a.Z, { style: b.appBarContainer }, n.createElement(d.ZP, { backLocation: l, fixed: !1, hideBackButton: A, history: m, leftControl: p, middleControl: h, onBackClick: y, rightControl: C, secondaryBar: w, style: r, subtitle: F ? I : void 0, title: H ? void 0 : k, titleDomId: M, titleIconCell: x, titleIconCellSize: R, withWideContainer: S })),
                        z = O || (P && _) ? null : n.createElement(u.Z.Configure, { SideNavButton: t, TabBar: o, backLocation: l, documentTitle: i, headerless: c, middleControl: h, onBackClick: y, rightControl: C, searchBoxOptions: f, subtitle: I, title: k, withSearchBox: D, withTweetButton: T });
                    return n.createElement(n.Fragment, null, z, W);
                }
            }
            (y.contextType = m.Z), (y.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const C = (0, c.ZP)(y);
        },
        496364: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                a = o(107267),
                r = o(791632),
                l = o(222718);
            const i = (e) => {
                const t = (0, a.useHistory)();
                return (0, r.HD)(t) ? e.children || null : n.createElement(l.Z, e);
            };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                a = o(202784),
                r = o(107267),
                l = o(403556),
                i = o(791632);
            const s = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: o, ...s } = e;
                    return a.createElement(l.Z, (0, n.Z)({}, s, { isCompact: o || (0, i.HD)(t) }));
                },
                c = a.memo(s);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-c4c4009f.5c9408ba.js.map
