"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.KeyboardShortcuts"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var r = o(202784),
                i = o(614983),
                s = o.n(i),
                a = o(325686),
                n = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            s()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: s, isFullWidth: a, isLarge: c, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: g, style: y, subtitle: k, title: b, titleDomId: f, titleIconCell: v, titleIconCellSize: C, withBackground: B, withWideContainer: w } = this.props,
                        { isModal: x } = this.context,
                        Z = s ? d : r.createElement(n.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!B, x, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: Z, middleControl: u, position: p(h, x, i), rightControl: m, style: y, subtitle: k, title: b, titleDomId: f, titleIconCell: v, titleIconCellSize: C, withBackground: E, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => h });
            var r = o(202784),
                i = o(325686),
                s = o(108362),
                a = o(386802),
                n = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                u = o(715601);
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: s, centerTitle: a, hideBackButton: n, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: g, rightControl: y, secondaryBar: k, subtitle: b, title: f } = this.props,
                                { isModal: v } = this.context;
                            return r.createElement(i.Z, { style: v ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (v ? "close" : "back"), backLocation: s, centerTitle: a, fixed: !v, hideBackButton: n, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: g, ref: e, rightControl: y, secondaryBar: k, style: [v && m.appBarModal, t], subtitle: b, title: f, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: n, isFullWidth: c, isLarge: d, renderHeader: h, title: g, withoutBottomBarMobile: y } = this.props,
                        { isModal: k } = this.context,
                        b = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(p.Z.Configure, { documentTitle: n, headerless: !0, title: g }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, k && m.rootModal] }, !k && b, r.createElement(s.Z, { isFullWidth: c, isLarge: d, style: [m.container, k && m.containerModal, a] }, k ? r.createElement(u.Z, { style: m.viewport }, b, o) : o), t ? r.createElement(i.Z, { style: [m.bottomBarModal, !k && !y && m.bottomBarMobile] }, r.createElement(s.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = a.Z);
            const m = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: n.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = h;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(500002),
                s = o(668214),
                a = o(997174),
                n = o(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: n.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: s, search: a },
                            locationKey: n,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = i || n;
                    ((c && i !== n) || (!c && o !== s) || r !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, i.ZP)(l(c));
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => u, Od: () => d, PN: () => h, uq: () => c, wR: () => g });
            var r = o(251067),
                i = o(522171),
                s = o(332920),
                a = o.n(s),
                n = o(912021),
                l = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, n.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${p} k`, universal: !1 }]), { description: a().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: c.nextItem, universal: !0 }, { description: a().g0048656, keys: c.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: c.refresh, universal: !1 }, { description: a().ha8209bc, keys: c.goHome, universal: !1 }, { description: a().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: a().eb75875e, keys: c.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: a().fa98627a, keys: c.goProfile, universal: !1 }, { description: a().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: a().b0041756, keys: c.goLists, universal: !1 }, { description: a().d4986f86, keys: c.goMessages, universal: !1 }, { description: a().h5860a68, keys: c.goGrok, universal: !1 }, { description: a().bb081ea2, keys: c.goSettings, universal: !1 }, { description: a().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: c.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                p = l.ZP.isMac() ? "⌘" : "CTRL",
                u = () => [
                    { description: a().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${p} Enter`, universal: !1 },
                    { description: a().e736990a, keys: c.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: c.search, universal: !1 },
                    { description: a().fe731016, keys: i.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: i.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: i.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: i.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: c.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: c.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: c.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: i.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: a().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: a().b881560e, keys: c.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                m = (0, n.Z)((e) => {
                    const t = d(e),
                        o = u(),
                        r = h(),
                        i = {};
                    return (
                        [...o, ...r, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      i[t] = e;
                                  })
                                : (i[t] = e);
                        }),
                        JSON.stringify(i)
                    );
                }),
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        842485: (e, t, o) => {
            o.r(t), o.d(t, { Entry: () => E, KeyboardShortcutsScreen: () => x, ShortcutContent: () => Z, default: () => S });
            var r = o(202784),
                i = o(325686),
                s = o(386802),
                a = o(844685),
                n = o(731708),
                l = o(392237),
                c = o(332920),
                d = o.n(c),
                p = o(980407),
                u = o(443781),
                h = o(163390),
                m = o(24949),
                g = o(668214),
                y = o(919022);
            const k = (0, g.Z)()
                    .propsFromState(() => ({ viewerUserScreenName: (0, m.P1)(y.ZP.selectViewerUser, (e) => (e ? e.screen_name : void 0)) }))
                    .withAnalytics({ page: "keyboard_shortcuts" }),
                b = d().ef1649e2,
                f = d().h54e6138,
                v = d().aefd89c8,
                C = d().cafdefb2,
                B = d().add55c98,
                w = d().dda42cf2,
                x = ({ history: e, location: t, viewerUserScreenName: o }) => {
                    const { userClaims: i } = r.useContext(u.rC),
                        { isModal: a } = r.useContext(s.Z),
                        n = (e) => (o ? e : e.filter((e) => e && e.universal)),
                        l = (0, h.Od)(i.isTrueAndEnabled("subscriptions_feature_1007")),
                        c = (0, h.OX)(),
                        d = (0, h.PN)(),
                        m = n(l),
                        g = n(c),
                        y = n(d),
                        k = [
                            { headerText: v, shortcuts: m },
                            { headerText: C, shortcuts: g },
                            { headerText: B, shortcuts: y },
                            { headerText: w, shortcuts: [] },
                        ];
                    return r.createElement(p.Z, { documentTitle: b, history: e, isLarge: !0, title: f }, r.createElement(Z, { isModal: a, shortcuts: k }));
                },
                Z = ({ isModal: e, shortcuts: t }) =>
                    r.createElement(
                        i.Z,
                        { style: [T.root, e && T.row] },
                        t.map(({ headerText: t, shortcuts: o, subtitleText: s }, n) => {
                            const l = n === o.length - 1,
                                c = o.length > 1;
                            return 0 === o.length
                                ? null
                                : r.createElement(
                                      i.Z,
                                      { key: n, style: [T.section, !l && !e && T.sectionBottomMargin] },
                                      t ? r.createElement(a.Z, { style: T.moduleHeader, subtext: s, text: t }) : null,
                                      r.createElement(
                                          i.Z,
                                          { role: "table", style: !l && c && e && T.divider },
                                          o.map((e, t) => r.createElement(E, { description: e.description, key: t, keys: e.keys })),
                                      ),
                                  );
                        }),
                    ),
                E = ({ description: e, keys: t }) => {
                    const o = Array.isArray(t) ? t : [t];
                    return r.createElement(
                        i.Z,
                        { role: "row", style: T.entry },
                        r.createElement(n.ZP, { role: "cell" }, e),
                        r.createElement(
                            i.Z,
                            { role: "cell", style: T.keyRow },
                            o.map((e, t) => e.split(" ").map((e, o, i) => r.createElement(r.Fragment, { key: o }, 0 !== t && r.createElement(n.ZP, { style: T.plus }, ", "), r.createElement(n.ZP, { align: "center", style: T.key, withoutTwemojiAndHashflags: !0 }, e), o !== i.length - 1 ? r.createElement(n.ZP, { style: T.plus }, "+") : null))),
                        ),
                    );
                },
                T = l.default.create((e) => ({ root: { padding: e.spaces.space12, paddingBottom: e.spaces.space20 }, row: { flexDirection: "row" }, keyRow: { flexDirection: "row", alignItems: "center" }, section: { flexShrink: 1 }, sectionBottomMargin: { marginBottom: e.spaces.space12 }, divider: { borderStyle: "solid", borderEndWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingEnd: e.spaces.space12, marginEnd: e.spaces.space12 }, entry: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space2 }, key: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50, borderRadius: e.borderRadii.small, borderStyle: "solid", borderWidth: e.borderWidths.small, boxShadow: `inset 0 -1px 0 ${e.colors.gray200}`, fontFamily: "monospace, monospace", minWidth: "1.7em", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space1 }, plus: { marginHorizontal: e.spaces.space2 }, moduleHeader: { paddingStart: e.spaces.space12 } })),
                S = k(x);
        },
        41065: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                i = o(890601),
                s = o(783427),
                a = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.KeyboardShortcuts.e396349a.js.map
