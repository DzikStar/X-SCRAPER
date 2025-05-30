"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-c4c4009f"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(466999),
                a = n(325686),
                l = n(392237),
                i = n(111677);
            const c = n.n(i)().e5b0063d;
            let s = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${s}`), (s += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = c({ title: t });
                    return o.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), o.createElement(a.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        415725: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                l = n(822228);
            const i = "activeRoute",
                c = a.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...a.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                s = ({ children: e, ...t }) => o.createElement(l.Z, t, (t) => o.createElement(r.Z, { style: t && c.activeRoot, testID: i }, "function" == typeof e ? e(t) : e, t ? o.createElement(r.Z, { pointerEvents: "none", style: c.overlay }) : null));
        },
        334963: (e, t, n) => {
            n.d(t, { Z: () => G });
            var o = n(529149),
                r = n(202784),
                a = n(325686),
                l = (n(585488), n(277660)),
                i = n.n(l),
                c = n(310088),
                s = n(392237),
                d = n(111677),
                u = n.n(d),
                m = n(870358),
                p = n(917164),
                h = n(468651),
                b = n(732403),
                y = n(807896),
                C = n(154003),
                Z = n(698891);
            const f = (e) => {
                    const { "aria-label": t, communityId: n, variant: o } = e,
                        a = Z.default;
                    return r.createElement(C.ZP, (0, y.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: r.createElement(a, null), link: `/i/communities/${n}/tools` }, "HeaderDetail" === o ? { style: E.button, type: "onMediaOutlined" } : { size: "large", type: "primaryText" }));
                },
                E = s.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                g = r.memo(f);
            n(136728);
            var w = n(697916),
                v = n(688715),
                I = n(811176),
                x = n(415506),
                _ = n(178519),
                k = n(692165),
                B = n(149170),
                D = n(443781);
            const R = u().e48fbb02,
                S = u().b1614c34,
                T = (0, v.ju)("https://help.x.com/using-twitter/communities#report-community"),
                P = (0, v.ju)("https://help.x.com/using-twitter/communities"),
                L = u().j1dcedde,
                O = w.Z,
                F = (e) => {
                    const { "aria-label": t, community: n, variant: o, viewerHasModeratorAccess: a } = e,
                        { featureSwitches: l } = (0, D.QZ)(),
                        { rest_id: c } = i()(O, n),
                        s = `/i/communities/${c}/search`,
                        d = l.isTrue("c9s_community_tweet_search_enabled"),
                        u = r.useCallback(
                            (e) => {
                                const t = [];
                                return a ? d && t.push({ text: L, Icon: _.default, link: s }) : t.push({ text: R, Icon: x.default, link: T }), t.push({ text: S, Icon: k.default, link: P }), r.createElement(I.Z, { items: t, onCloseRequested: e });
                            },
                            [d, s, a],
                        );
                    return r.createElement(C.ZP, (0, y.Z)({ "aria-label": t, hoverLabel: { label: t }, icon: r.createElement(B.default, null), renderMenu: u }, "HeaderDetail" === o ? { style: A.button, type: "primaryOutlined" } : { size: "large", type: "primaryText" }));
                },
                A = s.default.create((e) => ({ button: { marginEnd: e.spaces.space8 } })),
                H = r.memo(F),
                M = u().h6beb5fb,
                W = u().d755f47d,
                z = u().h63a5c3c,
                N = u().dce5e1b4,
                $ = u().c5d8c93e,
                j = o.Z,
                V = (e) => {
                    const t = i()(j, e.community),
                        n = (0, p.B)(t),
                        o = (0, h.b)(t),
                        { rest_id: l, role: s } = t,
                        d = n + o,
                        u = (0, m.uA)(s),
                        y = e.variant ?? "AppBar";
                    return r.createElement(a.Z, { style: "HeaderDetail" === y ? Q.headerRoot : Q.root }, r.createElement(b.Z, { communityId: l }), u ? r.createElement(a.Z, null, r.createElement(g, { "aria-label": s === m.WW.Admin ? N : $, communityId: l, variant: y }), d > 0 ? r.createElement(c.Z, { count: d, style: Q.menuControlBadge, truncatedCountFormatter: M, unreadCountLabel: W, withBorder: !1 }) : null) : r.createElement(H, { "aria-label": z, community: t, variant: y, viewerHasModeratorAccess: u }));
                },
                G = r.memo(V),
                Q = s.default.create((e) => ({ root: { flexDirection: "row", end: -e.spacesPx.space4 }, headerRoot: { flexDirection: "row" }, menuControlBadge: { backgroundColor: e.colors.magenta500, top: e.spacesPx.space4, end: e.spacesPx.space4 } }));
        },
        21875: (e, t, n) => {
            n.d(t, { Z: () => I });
            var o = n(807896),
                r = n(542327),
                a = n(202784),
                l = (n(585488), n(883229)),
                i = n(535338),
                c = n(275355),
                s = n(277660),
                d = n.n(s),
                u = n(154003),
                m = n(111677),
                p = n.n(m),
                h = n(911373);
            const b = p().b139b54a,
                y = a.createElement(h.default, null),
                C = (e) => {
                    const { community: t, ...n } = e,
                        r = d()(c.Z, t);
                    if (!r || "CommunityInvitesUnavailable" === r.invites_result.__typename) return null;
                    const l = `/i/communities/${r.rest_id}/invite`;
                    return a.createElement(u.ZP, (0, o.Z)({ "aria-label": b, icon: y, link: l, type: "primaryText" }, n));
                },
                Z = a.memo(C),
                f = { context: "CommunityInviteButtonQuery" },
                E = { type: "CustomRetry", content: () => null },
                g = r.Z,
                w = (e) => {
                    const { communityId: t, ...n } = e,
                        r = (0, i.p)(g, { communityId: t });
                    return "Community" === r.communityResults?.result?.__typename ? a.createElement(Z, (0, o.Z)({ community: r.communityResults.result }, n)) : null;
                },
                v = (e) => a.createElement(l.N, { errorConfig: f, fallback: E }, a.createElement(a.Suspense, { fallback: null }, a.createElement(w, (0, o.Z)({ communityId: e.communityId }, e)))),
                I = a.memo(v);
        },
        338114: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(837981),
                r = n(202784),
                a = n(325686),
                l = (n(585488), n(277660)),
                i = n.n(l),
                c = n(392237),
                s = n(952428),
                d = n(682474),
                u = n(530525),
                m = n(439592),
                p = n(731708),
                h = n(310088),
                b = n(111677),
                y = n.n(b),
                C = n(910805),
                Z = n(917164),
                f = n(468651),
                E = n(25618);
            const g = "community-thumbnail-image",
                w = "community-thumbnail-name-container",
                v = o.Z,
                I = () => y().c8d33380,
                x = (e) => {
                    const t = i()(v, e.community),
                        n = (0, Z.B)(t) ?? 0,
                        o = (0, f.b)(t),
                        l = (0, E.c)(t),
                        { id_str: b, name: y } = t,
                        { crop: x, image: k } = (0, C.L)(t),
                        B = c.default.theme.aspectRatios.communityBanner,
                        D = n + o > 0;
                    return r.createElement(s.Z, { link: `/i/communities/${b}`, style: _.root }, r.createElement(a.Z, { style: _.container }, r.createElement(d.Z, { ratio: B }, r.createElement(u.Z, { "aria-label": "", aspectMode: m.Z.exact(B), backgroundColor: c.default.theme.colors.gray300, cropCandidates: x, image: k, testID: g })), r.createElement(a.Z, { style: _.name, testID: w }, r.createElement(p.ZP, { align: "left", color: "text", numberOfLines: 1, size: "subtext2", weight: "bold" }, y.trim()))), (D || l) && r.createElement(h.Z, { pip: !0, style: _.pip, unreadCountLabel: I, withBorder: !0 }));
                },
                _ = c.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space4, marginHorizontal: e.spaces.space4, marginTop: e.spaces.space2, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large }, container: { width: `calc((${c.default.theme.spaces.space36} * 3) + ${c.default.theme.spaces.space24})`, borderRadius: e.borderRadii.large, overflow: "hidden", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: "100%", backgroundColor: e.colors.gray0 }, pipContainer: { position: "absolute", end: 0 }, pip: { width: e.spaces.space12, height: e.spaces.space12 } })),
                k = r.memo(x);
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(325686),
                a = n(392237);
            class l extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(r.Z, { style: i.root });
                }
            }
            const i = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                c = l;
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                l = n(392237),
                i = n(655352);
            const c = l.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: t, fab: n, shouldRenderFab: l = !0, style: s, withoutBottomPadding: d, ...u }) => {
                    const m = t || a.Z,
                        p = l && !(0, i.ZP)();
                    return r.createElement(m, (0, o.Z)({}, u, { style: [p && !d && c.root, s] }), e, p ? n : null);
                };
        },
        873637: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                l = n(167630),
                i = n(548485),
                c = n(392237),
                s = n(111677),
                d = n.n(s),
                u = n(205074),
                m = n(653843);
            const p = d().gff1f69e;
            class h extends r.Component {
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
                    return this.state.orientedImage ? this._renderCropper() : r.createElement(l.Z, { "aria-label": p, style: b.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: n, media: o, withAspectRatioOptions: l, withZoomControl: c } = this.props,
                        { orientedImage: s } = this.state,
                        { cropData: d, originalMediaFile: u = {} } = o || {};
                    return s ? r.createElement(a.Z, { style: b.cropper }, r.createElement(i.Z, { circle: this.props.circle, defaultAspectRatio: (n && n.aspectRatio) || (d && d.aspectRatio) || t, defaultCropData: n || d, image: { src: s.url, width: u.width, height: u.height }, ref: e, withAspectRatioOptions: l, withZoomControl: c })) : null;
                }
            }
            const b = c.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                y = r.forwardRef((e, t) => r.createElement(h, (0, o.Z)({}, e, { cropperRef: t })));
        },
        370111: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                l = n(330815);
            const i = a().b7fb6bda,
                c = a().e71cdf4e,
                s = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: n, onCropDone: r }) {
                const [a, d] = o.useState({ status: "not_started" }),
                    [u, m] = o.useState(!1),
                    [p, h] = o.useState(!1),
                    { croppedMediaId: b, status: y } = a;
                o.useEffect(() => {
                    y === s.NotStarted && (m(!0), d({ status: "started" })), y === s.Completed && t.id !== b && d({ status: "not_started", croppedMediaId: void 0 });
                }, [y, t, b]);
                const C = o.useCallback(() => {
                        m(!1), d({ status: s.Completed, croppedMediaId: t.id }), n();
                    }, [n, t]),
                    Z = o.useCallback(() => {
                        m(!1), h(!0);
                    }, []),
                    f = o.useCallback(() => {
                        h(!1), m(!0);
                    }, []),
                    E = o.useCallback(() => {
                        h(!1);
                    }, []),
                    g = o.useCallback(
                        (e) => {
                            d({ status: s.Completed, croppedMediaId: t.id }), r?.(e);
                        },
                        [r, t],
                    ),
                    w = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return o.createElement(o.Fragment, null, u ? o.createElement(l.Z, { defaultAspectRatio: e, media: t, onCancel: C, onDone: Z, title: i }) : null, p ? o.createElement(l.Z, { defaultAspectRatio: 1, media: w, onCancel: f, onCropDone: g, onDone: E, title: c }) : null);
            }
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                a = n(229333),
                l = n(414939),
                i = n(334346);
            const c = ({ accessibilityTitle: e, footer: t = r.createElement(l.Z, null), ...n }) => {
                const c = r.createElement(i.C, (0, o.Z)({}, n, { footer: t }));
                return e ? r.createElement(a.Z, { title: e }, c) : c;
            };
        },
        741049: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(807896),
                r = n(202784),
                a = n(879891),
                l = n(779610),
                i = n(731708),
                c = n(415725);
            const s = (e) => {
                const { direction: t } = (0, a.Z)();
                return r.createElement(c.Z, { exact: !0, path: e.link }, (n) => {
                    const a = t;
                    return r.createElement(l.Z, (0, o.Z)({ isActive: n }, e, { label: r.createElement(i.ZP, { dir: a, testID: "rtl" === a ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        253493: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(202784),
                r = n(107267),
                a = n(791632),
                l = n(325686),
                i = n(537392),
                c = n(10656),
                s = n(655352),
                d = n(555079),
                u = n(500002),
                m = n(625661),
                p = n(449067),
                h = n(655543),
                b = n(715601),
                y = n(392237);
            const C = y.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...y.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class Z extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(l.Z, { style: C.fill }, o.createElement(b.Z, { style: C.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(i.ZP, null, ({ containerWidth: e }) => (c.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showSubtitleOnRoot: a, showSubtitleOnWideDetail: l, withBottomBorder: i, withDetailOpen: c, ...d } = this.props;
                    return o.createElement(o.Fragment, null, (0, s.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(p.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: r, backLocation: a, documentTitle: i, headerless: c, history: s, leftControl: u, middleControl: h, onBackClick: b, rightControl: y, screenType: Z, searchBoxOptions: f, secondaryBar: E, showSubtitleOnRoot: g, showSubtitleOnWideDetail: w, subtitle: v, title: I, titleIconCell: x, titleIconCellSize: _, withDetailOpen: k, withSearchBox: B, withTweetButton: D, withWideContainer: R } = this.props,
                        S = "root" === Z,
                        T = "secondaryRoot" === Z,
                        P = "primaryDetail" === Z,
                        L = (P && w) || (S && g),
                        O = S || (P && e),
                        F = S ? d.ey : P ? d.vX : void 0,
                        A = o.createElement(l.Z, { style: C.appBarContainer }, o.createElement(m.ZP, { backLocation: a, fixed: !1, hideBackButton: O, history: s, leftControl: u, middleControl: h, onBackClick: b, rightControl: y, secondaryBar: E, style: r, subtitle: L ? v : void 0, title: I, titleDomId: F, titleIconCell: x, titleIconCellSize: _, withWideContainer: R })),
                        H = S || (T && k) ? null : o.createElement(p.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: a, documentTitle: i, headerless: c, middleControl: h, onBackClick: b, rightControl: y, searchBoxOptions: f, subtitle: v, title: I, withSearchBox: B, withTweetButton: D });
                    return o.createElement(o.Fragment, null, H, A);
                }
            }
            (Z.contextType = h.Z), (Z.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const f = (0, u.ZP)(Z),
                E = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, a.HD)(t) ? e.children || null : o.createElement(f, e);
                };
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(807896),
                r = n(202784),
                a = n(107267),
                l = n(403556),
                i = n(791632);
            const c = (e) => {
                    const t = (0, a.useHistory)(),
                        { isCompact: n, ...c } = e;
                    return r.createElement(l.Z, (0, o.Z)({}, c, { isCompact: n || (0, i.HD)(t) }));
                },
                s = r.memo(c);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-c4c4009f.2b6dd89a.js.map
