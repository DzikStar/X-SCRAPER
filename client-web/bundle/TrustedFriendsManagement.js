"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TrustedFriendsManagement"],
    {
        625661: (e, a, d) => {
            d.d(a, { ZP: () => b });
            var o = d(202784),
                r = d(614983),
                l = d.n(r),
                n = d(325686),
                i = d(370006),
                c = d(786998),
                t = d(929028),
                s = d(386802);
            function u(e, a, d) {
                return e || (!a && d ? "fixed" : void 0);
            }
            class b extends o.Component {
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
                    const { backButtonType: e, centerTitle: a, centeredLogo: d, fixed: r, hideBackButton: l, isFullWidth: n, isLarge: t, leftControl: s, middleControl: b, position: p, rightControl: D, secondaryBar: h, style: S, subtitle: m, title: A, titleDomId: M, titleIconCell: y, titleIconCellSize: w, withBackground: f, withWideContainer: g } = this.props,
                        { isModal: B } = this.context,
                        k = l ? s : o.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, a, d) {
                            return e && !(a && d);
                        })(!!f, B, !!h);
                    return o.createElement(o.Fragment, null, o.createElement(c.Z, { centerTitle: a, centeredLogo: d, isFullWidth: n, isLarge: t, leftControl: k, middleControl: b, position: u(p, B, r), rightControl: D, style: S, subtitle: m, title: A, titleDomId: M, titleIconCell: y, titleIconCellSize: w, withBackground: v, withWideContainer: g }), h || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        d = t.Z.getBackgroundStyles();
                    return a ? o.createElement(n.Z, { style: !!e && d }, this._renderContent()) : this._renderContent();
                }
            }
            (b.contextType = s.Z), (b.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, a, d) => {
            d.d(a, { Z: () => h, w: () => p });
            var o = d(202784),
                r = d(325686),
                l = d(108362),
                n = d(386802),
                i = d(392237),
                c = d(652904),
                t = d(555079),
                s = d(625661),
                u = d(449067),
                b = d(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: d, backLocation: l, centerTitle: n, hideBackButton: i, history: c, isFullWidth: u, isLarge: b, middleControl: p, onBackClick: h, rightControl: S, secondaryBar: m, subtitle: A, title: M } = this.props,
                                { isModal: y } = this.context;
                            return o.createElement(r.Z, { style: y ? [D.childViewAppBarRoot, D.appBarZindex] : D.appBarZindex }, o.createElement(s.ZP, { backButtonType: d || (y ? "close" : "back"), backLocation: l, centerTitle: n, fixed: !y, hideBackButton: i, history: c, isFullWidth: u, isLarge: b, middleControl: p, onBackClick: h, ref: e, rightControl: S, secondaryBar: m, style: [y && D.appBarModal, a], subtitle: A, title: M, titleDomId: t.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: d } = this.context;
                            a && (d ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: d, containerStyle: n, documentTitle: i, isFullWidth: t, isLarge: s, renderHeader: p, title: h, withoutBottomBarMobile: S } = this.props,
                        { isModal: m } = this.context,
                        A = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(c.Z, null, o.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: h }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [D.root, m && D.rootModal] }, !m && A, o.createElement(l.Z, { isFullWidth: t, isLarge: s, style: [D.container, m && D.containerModal, n] }, m ? o.createElement(b.Z, { style: D.viewport }, A, d) : d), a ? o.createElement(r.Z, { style: [D.bottomBarModal, !m && !S && D.bottomBarMobile] }, o.createElement(l.Z, { isFullWidth: t, isLarge: s }, a)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = n.Z);
            const D = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                h = p;
        },
        507651: (e, a, d) => {
            d.d(a, { Z: () => t });
            var o = d(807896),
                r = d(202784),
                l = d(107267),
                n = d(403556),
                i = d(791632);
            const c = (e) => {
                    const a = (0, l.useHistory)();
                    return r.createElement(n.Z, (0, o.Z)({}, e, { isCompact: (0, i.HD)(a) }));
                },
                t = r.memo(c);
        },
        231035: (e, a, d) => {
            d.d(a, { Z: () => S });
            var o = d(202784),
                r = d(420740),
                l = d(108362),
                n = d(731708),
                i = d(154003),
                c = d(392237),
                t = d(674132),
                s = d.n(t),
                u = d(272175);
            const b = (0, d(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), o.createElement(u.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                p = "error-detail",
                D = s().e49537c2,
                h = s().a9ae1e78;
            class S extends o.PureComponent {
                render() {
                    return o.createElement(r.Z, { testID: p }, o.createElement(b, null), o.createElement(l.Z, { style: m.root }, o.createElement(n.ZP, { align: "center", color: "gray700", style: m.retryText }, D), o.createElement(i.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, h)));
                }
            }
            const m = c.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, a, d) => {
            d.d(a, { Z: () => s });
            var o = d(202784),
                r = d(500002),
                l = d(668214),
                n = d(997174),
                i = d(118823);
            const c = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class t extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: d, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: n },
                            locationKey: i,
                        } = e;
                    let c = !1;
                    a.pathname !== d ? (this._isInBackground = !0) : this._isInBackground && a.pathname === d && ((this._isInBackground = !1), (c = !0));
                    const t = r || i;
                    ((t && r !== i) || (!t && d !== l) || o !== n || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: d, updateTweetDetailNav: o } = e;
                    a.scribePageImpression(), d(a.contextualScribeNamespace, a.contextualScribeData), o(a.contextualScribeNamespace);
                }
            }
            t.defaultProps = { children: null };
            const s = (0, r.ZP)(c(t));
        },
        466441: (e, a, d) => {
            d.r(a), d.d(a, { NotFoundScreen: () => M, default: () => w });
            d(571372);
            var o = d(202784),
                r = d(386802),
                l = d(108362),
                n = d(392237),
                i = d(674132),
                c = d.n(i),
                t = d(187669),
                s = d(449067),
                u = d(38293),
                b = d(231035),
                p = d(652904),
                D = d(952793),
                h = d(163889),
                S = d(725516);
            const m = c().ba929da8,
                A = c().d203e242;
            function M(e) {
                const { splat: a } = e.match.params,
                    { isModal: d } = o.useContext(r.Z),
                    n = (0, D.hC)("responsive_web_report_page_not_found");
                return (
                    (0, t.q)(() => {
                        n && a && (0, h.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    o.createElement(p.Z, null, o.createElement(s.Z.Configure, { backLocation: "/", documentTitle: m, title: A }), o.createElement(l.Z, { style: d && y.modal }, o.createElement(b.Z, null)), o.createElement(u.Z, { title: m, withMeta: !1 }))
                );
            }
            const y = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, S.Z)(M, { page: "not_found" });
        },
        273945: (e, a, d) => {
            d.r(a), d.d(a, { TRUSTED_FRIENDS_LEARN_MORE_URL: () => m, TrustedFriendsManagementScreen: () => w, default: () => f });
            var o = d(202784),
                r = d(107267),
                l = d(688715),
                n = d(674132),
                i = d.n(n),
                c = d(980407),
                t = d(507651),
                s = d(293115),
                u = d(725516),
                b = d(717988),
                p = d(466441);
            const D = i().e1e5d552,
                h = i().cf44066a,
                S = i().ef8f5d90,
                m = (0, l.ju)("https://help.x.com/using-twitter/twitter-circle"),
                A = { page: "trusted_friends_edit" },
                M = (0, b.p)(
                    () =>
                        Promise.all([
                            d.e("icons.8"),
                            d.e("icons.13"),
                            d.e("icons.20"),
                            d.e("icons.14"),
                            d.e("icons.1"),
                            d.e("icons.3"),
                            d.e("icons.24"),
                            d.e("icons.11"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.4"),
                            d.e("icons.18"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.12"),
                            d.e("icons.29"),
                            d.e("icons.22"),
                            d.e("icons.7"),
                            d.e("icons.0"),
                            d.e("icons.19"),
                            d.e("icons.26"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5517db7c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7af5e2f7"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview~bundl"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("bundle.UserLists-1f1c1973"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                            d.e("bundle.UserLists-6df79b50"),
                        ]).then(d.bind(d, 696705)),
                    { shouldMigrateToX: !1 },
                ),
                y = (0, b.p)(
                    () =>
                        Promise.all([
                            d.e("icons.8"),
                            d.e("icons.13"),
                            d.e("icons.20"),
                            d.e("icons.14"),
                            d.e("icons.1"),
                            d.e("icons.3"),
                            d.e("icons.24"),
                            d.e("icons.11"),
                            d.e("modules.common-e907d115"),
                            d.e("modules.common-e019dbda"),
                            d.e("icons.28"),
                            d.e("icons.10"),
                            d.e("icons.17"),
                            d.e("icons.4"),
                            d.e("icons.18"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.12"),
                            d.e("icons.29"),
                            d.e("icons.22"),
                            d.e("icons.7"),
                            d.e("icons.0"),
                            d.e("icons.19"),
                            d.e("icons.26"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5517db7c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7af5e2f7"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                            d.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview~bundl"),
                            d.e("shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.UserLists"),
                            d.e("bundle.UserLists-1f1c1973"),
                            d.e("bundle.UserLists-2a1252f0"),
                            d.e("bundle.UserLists-e019dbda"),
                            d.e("bundle.UserLists-63cb1cc4"),
                            d.e("bundle.UserLists-6df79b50"),
                        ]).then(d.bind(d, 582313)),
                    { shouldMigrateToX: !1 },
                ),
                w = (e) => {
                    const { history: a, location: d } = e,
                        l = e.match.params.trustedFriendsId,
                        n = (0, u.z)(),
                        i = o.useCallback(() => {
                            if (!l) return null;
                            const e = [
                                { to: { pathname: `/i/circles/${l}/members`, state: d.state }, label: h, key: h },
                                { to: { pathname: `/i/circles/${l}/members/suggested`, state: d.state }, label: S, key: S },
                            ];
                            return o.createElement(t.Z, { "aria-label": D, links: e });
                        }, [d, l]);
                    return o.createElement(
                        s.nO,
                        { namespace: A },
                        o.createElement(
                            c.Z,
                            {
                                backButtonType: "close",
                                history: a,
                                onBackClick: () => {
                                    n.scribe({ element: "trusted_friends", component: "list_dismiss_button", action: "click" }), a.goBack();
                                },
                                secondaryBar: i(),
                                title: D,
                            },
                            l ? o.createElement(r.Switch, null, o.createElement(r.Route, { exact: !0, path: `/i/circles/${l}/members` }, o.createElement(M, { trustedFriendsId: l })), o.createElement(r.Route, { exact: !0, path: `/i/circles/${l}/members/suggested` }, o.createElement(y, { trustedFriendsId: l }))) : o.createElement(p.default, e),
                        ),
                    );
                },
                f = w;
        },
        403556: (e, a, d) => {
            d.d(a, { Z: () => k });
            var o = d(807896),
                r = d(202784),
                l = d(194504),
                n = d(235902),
                i = d(392237),
                c = d(325686),
                t = d(674132),
                s = d.n(t),
                u = d(912021),
                b = d(516951),
                p = d(731708),
                D = d(310088),
                h = d(175993),
                S = d(58881),
                m = d(530732);
            const A = s().d2414d31,
                M = () => s().ce4e85ae,
                y = s().fb9f6f39;
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, a) => {
                            const { pathname: d, query: o, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: d, query: o, method: "push", state: { ...r, lockScroll: a } };
                        })),
                        (this._unlisten = b.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, a, d, o) => {
                            const r = i.default.theme.colors.text,
                                l = i.default.theme.colors.gray700;
                            return d || o ? (e || a ? r : l) : e ? r : l;
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
                    const { Icon: e, "aria-label": a, badgeCount: d, badgePip: o, children: l, color: n, isActive: t, isCompact: s, isPillLink: u, isRoundedRect: b, isWebRedesign: h, retainScrollPosition: w, style: g, to: B } = this.props,
                        { location: k } = this.state,
                        v = B ? this._getMemoizedLink(B, w) : void 0,
                        P = t ? t(B) : k?.pathname === v?.pathname,
                        I = S.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        C = h ? "medium" : P ? "bold" : "medium";
                    return r.createElement(m.Z, { "aria-label": a, "aria-selected": P, focusable: !!P, interactiveStyles: I, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? f.pill : f.link, u && P ? f.active : null, s ? (u ? f.compactPill : f.compactLink) : null, b ? f.roundedRect : null, g], withoutInteractiveStyles: h || u }, ({ isFocused: a, isHovered: t }) => r.createElement(c.Z, { style: u && f.flexGrow }, r.createElement(p.ZP, { size: h ? "headline2" : void 0, style: [f.text, { color: this._getTextColor(P, t, h, u) }, s && f.compactText, h && a && f.focusedText], weight: C }, e && r.createElement(e, { style: f.icon }), l, h || u ? null : r.createElement(c.Z, { style: P && [f.border, { backgroundColor: i.default.theme.colors[n] }] })), d ? r.createElement(D.Z, { count: d, standalone: !0, style: [f.badge, d >= 10 && f.multiDigitBadge, d >= 20 && f.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: A, withBorder: !1 }) : o ? r.createElement(D.Z, { pip: !0, standalone: !0, style: f.badgePip, textColor: "red500", unreadCountLabel: M, withBorder: !1 }) : null));
                }
            }
            (w.contextType = h.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const f = i.default.create((e) => ({
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                g = w,
                B = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": a, isCompact: d, isPillLink: i, isRoundedRect: c, links: t, style: s, visibleItemIndex: u }) => {
                    const b = t
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = n.ZP.useProps(),
                        D = p() && !i,
                        h = r.useMemo(
                            () =>
                                t.filter(Boolean).map(({ label: a, viewType: l, ...n }, t) => {
                                    const s = D ? [B.linkRedesign, 0 === t && B.firstLinkRedesign, e && 0 === t && B.withNoPaddingStart] : void 0;
                                    return r.createElement(g, (0, o.Z)({ viewType: l }, n, { isCompact: d, isPillLink: i, isRoundedRect: c, isWebRedesign: D, style: s }), a);
                                }),
                            [e, d, i, c, D, t],
                        );
                    return r.createElement(l.Z, { "aria-label": a, buttonsContainerStyle: i && B.gap, childrenStyle: !D && B.flexGrow, key: b, style: [i ? null : B.segmentedControl, D && B.leftAligned, s], visibleItemIndex: u }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TrustedFriendsManagement.beb65a0a.js.map
