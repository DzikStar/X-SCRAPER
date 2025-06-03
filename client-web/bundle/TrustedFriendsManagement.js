"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TrustedFriendsManagement"],
    {
        625661: (e, a, o) => {
            o.d(a, { ZP: () => h });
            var d = o(202784),
                r = o(614983),
                l = o.n(r),
                n = o(325686),
                t = o(370006),
                i = o(786998),
                s = o(929028),
                c = o(386802);
            function u(e, a, o) {
                return e || (!a && o ? "fixed" : void 0);
            }
            class h extends d.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: a } = this.props;
                            l()(a || e, "Either onBackClick must be specified, or history should be supplied"), a ? a(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: a } = this.props;
                            a && a.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: a, centeredLogo: o, fixed: r, hideBackButton: l, isFullWidth: n, isLarge: s, leftControl: c, middleControl: h, position: D, rightControl: p, secondaryBar: m, style: b, subtitle: M, title: f, titleDomId: y, titleIconCell: g, titleIconCellSize: k, withBackground: S, withWideContainer: A } = this.props,
                        { isModal: w } = this.context,
                        P = l ? c : d.createElement(t.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        x = (function (e, a, o) {
                            return e && !(a && o);
                        })(!!S, w, !!m);
                    return d.createElement(d.Fragment, null, d.createElement(i.Z, { centerTitle: a, centeredLogo: o, isFullWidth: n, isLarge: s, leftControl: P, middleControl: h, position: u(D, w, r), rightControl: p, style: b, subtitle: M, title: f, titleDomId: y, titleIconCell: g, titleIconCellSize: k, withBackground: x, withWideContainer: A }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        o = s.Z.getBackgroundStyles();
                    return a ? d.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, a, o) => {
            o.d(a, { Z: () => m, w: () => D });
            var d = o(202784),
                r = o(325686),
                l = o(108362),
                n = o(386802),
                t = o(392237),
                i = o(652904),
                s = o(555079),
                c = o(625661),
                u = o(449067),
                h = o(715601);
            class D extends d.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: o, backLocation: l, centerTitle: n, hideBackButton: t, history: i, isFullWidth: u, isLarge: h, middleControl: D, onBackClick: m, rightControl: b, secondaryBar: M, subtitle: f, title: y } = this.props,
                                { isModal: g } = this.context;
                            return d.createElement(r.Z, { style: g ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, d.createElement(c.ZP, { backButtonType: o || (g ? "close" : "back"), backLocation: l, centerTitle: n, fixed: !g, hideBackButton: t, history: i, isFullWidth: u, isLarge: h, middleControl: D, onBackClick: m, ref: e, rightControl: b, secondaryBar: M, style: [g && p.appBarModal, a], subtitle: f, title: y, titleDomId: s.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: o } = this.context;
                            a && (o ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: o, containerStyle: n, documentTitle: t, isFullWidth: s, isLarge: c, renderHeader: D, title: m, withoutBottomBarMobile: b } = this.props,
                        { isModal: M } = this.context,
                        f = D ? D(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return d.createElement(i.Z, null, d.createElement(u.Z.Configure, { documentTitle: t, headerless: !0, title: m }), d.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, M && p.rootModal] }, !M && f, d.createElement(l.Z, { isFullWidth: s, isLarge: c, style: [p.container, M && p.containerModal, n] }, M ? d.createElement(h.Z, { style: p.viewport }, f, o) : o), a ? d.createElement(r.Z, { style: [p.bottomBarModal, !M && !b && p.bottomBarMobile] }, d.createElement(l.Z, { isFullWidth: s, isLarge: c }, a)) : null));
                }
            }
            (D.defaultProps = { isFullWidth: !1, isLarge: !1 }), (D.contextType = n.Z);
            const p = t.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: t.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = D;
        },
        349035: (e, a, o) => {
            o.d(a, { Z: () => l });
            var d = o(202784),
                r = o(272175);
            const l = (0, o(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), d.createElement(r.ql, null, d.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        507651: (e, a, o) => {
            o.d(a, { Z: () => s });
            var d = o(807896),
                r = o(202784),
                l = o(107267),
                n = o(403556),
                t = o(791632);
            const i = (e) => {
                    const a = (0, l.useHistory)(),
                        { isCompact: o, ...i } = e;
                    return r.createElement(n.Z, (0, d.Z)({}, i, { isCompact: o || (0, t.HD)(a) }));
                },
                s = r.memo(i);
        },
        56851: (e, a, o) => {
            o.d(a, { Z: () => m });
            var d = o(202784),
                r = o(420740),
                l = o(108362),
                n = o(731708),
                t = o(154003),
                i = o(392237),
                s = o(111677),
                c = o.n(s),
                u = o(349035);
            const h = "error-detail",
                D = c().e49537c2,
                p = c().a9ae1e78;
            class m extends d.PureComponent {
                render() {
                    return d.createElement(r.Z, { testID: h }, d.createElement(u.Z, null), d.createElement(l.Z, { style: b.root }, d.createElement(n.ZP, { align: "center", color: "gray700", style: b.retryText }, D), d.createElement(t.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const b = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, a, o) => {
            o.d(a, { Z: () => c });
            var d = o(202784),
                r = o(500002),
                l = o(668214),
                n = o(997174),
                t = o(118823);
            const i = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: t.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class s extends d.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: o, search: d },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: n },
                            locationKey: t,
                        } = e;
                    let i = !1;
                    a.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && a.pathname === o && ((this._isInBackground = !1), (i = !0));
                    const s = r || t;
                    ((s && r !== t) || (!s && o !== l) || d !== n || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: o, updateTweetDetailNav: d } = e;
                    a.scribePageImpression(), o(a.contextualScribeNamespace, a.contextualScribeData), d(a.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, r.ZP)(i(s));
        },
        466441: (e, a, o) => {
            o.r(a), o.d(a, { NotFoundScreen: () => y, default: () => k });
            o(571372);
            var d = o(202784),
                r = o(386802),
                l = o(108362),
                n = o(392237),
                t = o(111677),
                i = o.n(t),
                s = o(187669),
                c = o(449067),
                u = o(38293),
                h = o(56851),
                D = o(652904),
                p = o(952793),
                m = o(163889),
                b = o(725516);
            const M = i().ba929da8,
                f = i().d203e242;
            function y(e) {
                const { splat: a } = e.match.params,
                    { isModal: o } = d.useContext(r.Z),
                    n = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, s.q)(() => {
                        n && a && (0, m.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    d.createElement(D.Z, null, d.createElement(c.Z.Configure, { backLocation: "/", documentTitle: M, title: f }), d.createElement(l.Z, { style: o && g.modal }, d.createElement(h.Z, null)), d.createElement(u.Z, { title: M, withMeta: !1 }))
                );
            }
            const g = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                k = (0, b.Z)(y, { page: "not_found" });
        },
        273945: (e, a, o) => {
            o.r(a), o.d(a, { TRUSTED_FRIENDS_LEARN_MORE_URL: () => M, TrustedFriendsManagementScreen: () => k, default: () => S });
            var d = o(202784),
                r = o(107267),
                l = o(688715),
                n = o(111677),
                t = o.n(n),
                i = o(980407),
                s = o(507651),
                c = o(293115),
                u = o(725516),
                h = o(717988),
                D = o(466441);
            const p = t().e1e5d552,
                m = t().cf44066a,
                b = t().ef8f5d90,
                M = (0, l.ju)("https://help.x.com/using-twitter/twitter-circle"),
                f = { page: "trusted_friends_edit" },
                y = (0, h.p)(
                    () =>
                        Promise.all([
                            o.e("icons.0"),
                            o.e("icons.13"),
                            o.e("icons.22"),
                            o.e("icons.29"),
                            o.e("icons.5"),
                            o.e("icons.7"),
                            o.e("icons.1"),
                            o.e("icons.15"),
                            o.e("icons.25"),
                            o.e("icons.10"),
                            o.e("icons.20"),
                            o.e("icons.14"),
                            o.e("icons.11"),
                            o.e("modules.common-e907d115"),
                            o.e("modules.common-e019dbda"),
                            o.e("icons.16"),
                            o.e("icons.17"),
                            o.e("modules.audio-6107ac1a"),
                            o.e("modules.audio-b953418a"),
                            o.e("modules.audio-7c51e6a7"),
                            o.e("modules.audio-04db59e9"),
                            o.e("modules.audio-76583d6c"),
                            o.e("modules.audio-b7a8a5fb"),
                            o.e("modules.audio-51f6e793"),
                            o.e("modules.audio-e019dbda"),
                            o.e("modules.audio-262c94d4"),
                            o.e("modules.audio-c6fe4ea4"),
                            o.e("icons.6"),
                            o.e("icons.26"),
                            o.e("icons.3"),
                            o.e("icons.9"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            o.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            o.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            o.e("bundle.UserLists-bc6ccf4c"),
                            o.e("bundle.UserLists-2a1252f0"),
                            o.e("bundle.UserLists-e019dbda"),
                            o.e("bundle.UserLists-63cb1cc4"),
                            o.e("bundle.UserLists-6df79b50"),
                        ]).then(o.bind(o, 696705)),
                    { shouldMigrateToX: !1 },
                ),
                g = (0, h.p)(
                    () =>
                        Promise.all([
                            o.e("icons.0"),
                            o.e("icons.13"),
                            o.e("icons.22"),
                            o.e("icons.29"),
                            o.e("icons.5"),
                            o.e("icons.7"),
                            o.e("icons.1"),
                            o.e("icons.15"),
                            o.e("icons.25"),
                            o.e("icons.10"),
                            o.e("icons.20"),
                            o.e("icons.14"),
                            o.e("icons.11"),
                            o.e("modules.common-e907d115"),
                            o.e("modules.common-e019dbda"),
                            o.e("icons.16"),
                            o.e("icons.17"),
                            o.e("modules.audio-6107ac1a"),
                            o.e("modules.audio-b953418a"),
                            o.e("modules.audio-7c51e6a7"),
                            o.e("modules.audio-04db59e9"),
                            o.e("modules.audio-76583d6c"),
                            o.e("modules.audio-b7a8a5fb"),
                            o.e("modules.audio-51f6e793"),
                            o.e("modules.audio-e019dbda"),
                            o.e("modules.audio-262c94d4"),
                            o.e("modules.audio-c6fe4ea4"),
                            o.e("icons.6"),
                            o.e("icons.26"),
                            o.e("icons.3"),
                            o.e("icons.9"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                            o.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            o.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview"),
                            o.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            o.e("bundle.UserLists-bc6ccf4c"),
                            o.e("bundle.UserLists-2a1252f0"),
                            o.e("bundle.UserLists-e019dbda"),
                            o.e("bundle.UserLists-63cb1cc4"),
                            o.e("bundle.UserLists-6df79b50"),
                        ]).then(o.bind(o, 582313)),
                    { shouldMigrateToX: !1 },
                ),
                k = (e) => {
                    const { history: a, location: o } = e,
                        l = e.match.params.trustedFriendsId,
                        n = (0, u.z)(),
                        t = d.useCallback(() => {
                            if (!l) return null;
                            const e = [
                                { to: { pathname: `/i/circles/${l}/members`, state: o.state }, label: m, key: m },
                                { to: { pathname: `/i/circles/${l}/members/suggested`, state: o.state }, label: b, key: b },
                            ];
                            return d.createElement(s.Z, { "aria-label": p, links: e });
                        }, [o, l]);
                    return d.createElement(
                        c.nO,
                        { namespace: f },
                        d.createElement(
                            i.Z,
                            {
                                backButtonType: "close",
                                history: a,
                                onBackClick: () => {
                                    n.scribe({ element: "trusted_friends", component: "list_dismiss_button", action: "click" }), a.goBack();
                                },
                                secondaryBar: t(),
                                title: p,
                            },
                            l ? d.createElement(r.Switch, null, d.createElement(r.Route, { exact: !0, path: `/i/circles/${l}/members` }, d.createElement(y, { trustedFriendsId: l })), d.createElement(r.Route, { exact: !0, path: `/i/circles/${l}/members/suggested` }, d.createElement(g, { trustedFriendsId: l }))) : d.createElement(D.default, e),
                        ),
                    );
                },
                S = k;
        },
        403556: (e, a, o) => {
            o.d(a, { Z: () => P });
            var d = o(807896),
                r = o(202784),
                l = o(194504),
                n = o(235902),
                t = o(392237),
                i = o(325686),
                s = o(111677),
                c = o.n(s),
                u = o(912021),
                h = o(516951),
                D = o(731708),
                p = o(310088),
                m = o(175993),
                b = o(58881),
                M = o(530732);
            const f = c().d2414d31,
                y = () => c().ce4e85ae,
                g = c().fb9f6f39;
            class k extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, a) => {
                            const { pathname: o, query: d, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: d, method: "push", state: { ...r, lockScroll: a } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, a, o, d) => {
                            const r = t.default.theme.colors.text,
                                l = t.default.theme.colors.gray700;
                            return o || d ? (e || a ? r : l) : e ? r : l;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: a } = this.props;
                            a && a(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": a, badgeCount: o, badgePip: d, children: l, color: n, isActive: s, isCompact: c, isPillLink: u, isRoundedRect: h, isWebRedesign: m, retainScrollPosition: k, style: A, to: w } = this.props,
                        { location: P } = this.state,
                        x = w ? this._getMemoizedLink(w, k) : void 0,
                        C = s ? s(w) : P?.pathname === x?.pathname,
                        v = b.Z.generate({ backgroundColor: "transparent", color: t.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? S.pillHoverStyle.backgroundColor : void 0 }),
                        B = m ? "medium" : C ? "bold" : "medium";
                    return r.createElement(M.Z, { "aria-label": a, "aria-selected": C, focusable: !!C, interactiveStyles: v, link: x, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [S.pillStyle] : [S.link]), ...(u && C ? [S.pillActiveStyle] : []), c ? (u ? S.compactPill : S.compactLink) : null, h ? S.roundedRect : null, A], withoutInteractiveStyles: m }, ({ isFocused: a, isHovered: s }) => r.createElement(i.Z, { style: u && S.flexGrow }, r.createElement(D.ZP, { size: m ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(C, s, m, u) }, c && S.compactText, m && a && S.focusedText, u && S.pillTextStyle, u && C && S.pillActiveTextStyle, u && s && S.pillHoverTextStyle], weight: B }, e && r.createElement(e, { style: S.icon }), l, m || u ? null : r.createElement(i.Z, { style: C && [S.border, { backgroundColor: t.default.theme.colors[n] }] })), o ? r.createElement(p.Z, { count: o, standalone: !0, style: [S.badge, o >= 10 && S.multiDigitBadge, o >= 20 && S.truncatedCountBadge], truncatedCountFormatter: g, unreadCountLabel: f, withBorder: !1 }) : d ? r.createElement(p.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (k.contextType = m.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = t.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                A = k,
                w = t.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                P = ({ alignFirstItem: e, "aria-label": a, isCompact: o, isPillLink: t, isRoundedRect: i, links: s, style: c, visibleItemIndex: u }) => {
                    const h = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: D } = n.ZP.useProps(),
                        p = D() && !t,
                        m = r.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: a, viewType: l, ...n }, s) => {
                                    const c = p ? [w.linkRedesign, 0 === s && w.firstLinkRedesign, e && 0 === s && w.withNoPaddingStart] : void 0;
                                    return r.createElement(A, (0, d.Z)({ viewType: l }, n, { isCompact: o, isPillLink: t, isRoundedRect: i, isWebRedesign: p, style: c }), a);
                                }),
                            [e, o, t, i, p, s],
                        );
                    return r.createElement(l.Z, { "aria-label": a, buttonsContainerStyle: t && w.gap, childrenStyle: !p && w.flexGrow, key: h, style: [t ? null : w.segmentedControl, p && w.leftAligned, c], visibleItemIndex: u }, m);
                };
        },
        41065: (e, a, o) => {
            o.r(a), o.d(a, { default: () => i });
            var d = o(202784),
                r = o(890601),
                l = o(783427),
                n = o(347101);
            const t = (e = {}) => {
                const { direction: a } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: d.createElement("g", null, d.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: a });
            };
            t.metadata = { width: 24, height: 24 };
            const i = t;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TrustedFriendsManagement.b27f1aaa.js.map
