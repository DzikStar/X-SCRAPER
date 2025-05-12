"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-e019dbda"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: b, style: C, subtitle: y, title: g, titleDomId: f, titleIconCell: B, titleIconCellSize: w, withBackground: k, withWideContainer: x } = this.props,
                        { isModal: Z } = this.context,
                        _ = i ? d : n.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!k, Z, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: _, middleControl: p, position: u(h, Z, r), rightControl: m, style: C, subtitle: y, title: g, titleDomId: f, titleIconCell: B, titleIconCellSize: w, withBackground: v, withWideContainer: x }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        33104: (e, t, o) => {
            o.d(t, { Z: () => r });
            o(202784);
            var n = o(325686);
            const r = (0, o(337455).Z)(n.Z);
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                r = o(202784),
                i = o(182056),
                a = o(879113),
                l = o(392237),
                s = o(674132),
                c = o.n(s),
                d = o(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, o) => {
                    const l = i.Z.isOnline();
                    return r.createElement(a.Z, (0, n.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: h.icon }), retryMessage: l ? e : u }));
                },
                h = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(p);
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => h });
            var n = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                p = o(715601);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: a, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: b, rightControl: C, secondaryBar: y, subtitle: g, title: f } = this.props,
                                { isModal: B } = this.context;
                            return n.createElement(r.Z, { style: B ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (B ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !B, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: b, ref: e, rightControl: C, secondaryBar: y, style: [B && m.appBarModal, t], subtitle: g, title: f, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: h, title: b, withoutBottomBarMobile: C } = this.props,
                        { isModal: y } = this.context,
                        g = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: b }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, y && m.rootModal] }, !y && g, n.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, y && m.containerModal, a] }, y ? n.createElement(p.Z, { style: m.viewport }, g, o) : o), t ? n.createElement(r.Z, { style: [m.bottomBarModal, !y && !C && m.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = a.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = h;
        },
        253493: (e, t, o) => {
            o.d(t, { Z: () => B });
            var n = o(202784),
                r = o(107267),
                i = o(791632),
                a = o(325686),
                l = o(537392),
                s = o(10656),
                c = o(655352),
                d = o(555079),
                u = o(500002),
                p = o(625661),
                h = o(449067),
                m = o(655543),
                b = o(715601),
                C = o(392237);
            const y = C.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...C.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(a.Z, { style: y.fill }, n.createElement(b.Z, { style: y.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(l.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: o, screenType: r, showSubtitleOnRoot: i, showSubtitleOnWideDetail: a, withBottomBorder: l, withDetailOpen: s, ...d } = this.props;
                    return n.createElement(n.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(h.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: o, appBarStyle: r, backLocation: i, documentTitle: l, headerless: s, history: c, leftControl: u, middleControl: m, onBackClick: b, rightControl: C, screenType: g, searchBoxOptions: f, secondaryBar: B, showSubtitleOnRoot: w, showSubtitleOnWideDetail: k, subtitle: x, title: Z, titleIconCell: _, titleIconCellSize: v, withDetailOpen: E, withSearchBox: I, withTweetButton: L, withWideContainer: T } = this.props,
                        S = "root" === g,
                        F = "secondaryRoot" === g,
                        D = "primaryDetail" === g,
                        M = (D && k) || (S && w),
                        P = S || (D && e),
                        U = S ? d.ey : D ? d.vX : void 0,
                        O = n.createElement(a.Z, { style: y.appBarContainer }, n.createElement(p.ZP, { backLocation: i, fixed: !1, hideBackButton: P, history: c, leftControl: u, middleControl: m, onBackClick: b, rightControl: C, secondaryBar: B, style: r, subtitle: M ? x : void 0, title: Z, titleDomId: U, titleIconCell: _, titleIconCellSize: v, withWideContainer: T })),
                        R = S || (F && E) ? null : n.createElement(h.Z.Configure, { SideNavButton: t, TabBar: o, backLocation: i, documentTitle: l, headerless: s, middleControl: m, onBackClick: b, rightControl: C, searchBoxOptions: f, subtitle: x, title: Z, withSearchBox: I, withTweetButton: L });
                    return n.createElement(n.Fragment, null, R, O);
                }
            }
            (g.contextType = m.Z), (g.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const f = (0, u.ZP)(g),
                B = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, i.HD)(t) ? e.children || null : n.createElement(f, e);
                };
        },
        25704: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(529356),
                i = o(674132),
                a = o.n(i),
                l = o(621416),
                s = o(443781);
            const c = a().j24c37b2,
                d = ({ Content: e, contentStyle: t, actionLabel: o = c, flag: i, graphic: a, graphicDisplayMode: d, headline: u, isFullHeightOnMobile: p, enableMaskForDismiss: h, onAction: m, onClose: b, onSecondaryAction: C, secondaryActionLabel: y, supportUrl: g, subtext: f, withCloseButton: B, shouldShowForLoggedOut: w = !1, shouldAddEducationFlagOnClose: k = !0, shouldAddEducationFlagOnSecondary: x = !0, shouldAddEducationFlagOnPrimary: Z = !0 }) => {
                    const { loggedInUserId: _ } = n.useContext(s.rC),
                        [v, E] = (0, l.m)(i),
                        I = n.useCallback(
                            (e) => {
                                Z && E(), m && m(e);
                            },
                            [E, m, Z],
                        ),
                        L = n.useCallback(() => {
                            k && E(), b && b();
                        }, [E, k, b]),
                        T = n.useCallback(
                            (e) => {
                                x && E(), C && C(e);
                            },
                            [E, C, x],
                        );
                    if (!v || (!_ && !w)) return null;
                    return n.createElement(r.Z, { actionLabel: o, contentStyle: t, enableMaskForDismiss: h, graphic: a, graphicDisplayMode: d || "none", headline: u, isFullHeightOnMobile: p, onAction: I, onClose: L, onSecondaryAction: T, secondaryActionLabel: y, subtext: f, supportUrl: g, withCloseButton: B }, e ? n.createElement(e, null) : null);
                },
                u = n.memo(d);
        },
        231035: (e, t, o) => {
            o.d(t, { Z: () => C });
            var n = o(202784),
                r = o(420740),
                i = o(108362),
                a = o(731708),
                l = o(154003),
                s = o(392237),
                c = o(674132),
                d = o.n(c),
                u = o(272175);
            const p = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(u.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                h = "error-detail",
                m = d().e49537c2,
                b = d().a9ae1e78;
            class C extends n.PureComponent {
                render() {
                    return n.createElement(r.Z, { testID: h }, n.createElement(p, null), n.createElement(i.Z, { style: y.root }, n.createElement(a.ZP, { align: "center", color: "gray700", style: y.retryText }, m), n.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, b)));
                }
            }
            const y = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                i = o(668214),
                a = o(997174),
                l = o(118823);
            const s = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: a },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && o !== i) || n !== a || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        836640: (e, t, o) => {
            o.d(t, { J: () => C });
            o(136728);
            var n = o(214636),
                r = o(202784),
                i = o(614983),
                a = o.n(i),
                l = (o(585488), o(277660)),
                s = o.n(l),
                c = o(107267),
                d = o(673510),
                u = o(44527),
                p = o(663550),
                h = o(409438),
                m = o(443781);
            const b = n.Z;
            function C(e) {
                const t = s()(b, e.user),
                    { legacy: o, verification: n } = t,
                    i = t.identity_profile_labels_highlighted_label?.label ? (0, u.H)(t.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: l, decoration: h, displayMode: C } = e,
                    y = (function () {
                        const { viewerUserId: e } = r.useContext(m.rC);
                        return a()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    g = (0, c.useHistory)(),
                    f = r.useCallback(() => ("function" == typeof h ? h({ displayMode: C, viewerUserId: y, userId: o?.id_str ?? "" }) : h), [h, y, o, C]),
                    B = r.useCallback(() => {
                        o?.screen_name && g.push({ pathname: `/${o.screen_name}` });
                    }, [g, o]);
                return r.createElement(d.ZP, { affiliateBadgeInfo: i, avatarUri: o?.profile_image_url_https || "", decoration: f(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!t.is_blue_verified, isFollowedBy: o?.followed_by, isProtected: o?.protected, isVerified: n?.verified ?? !1, name: o?.name || "", onCellClick: l ? B : void 0, promotedItemType: p.bj.USER, screenName: o?.screen_name || "", userId: o?.id_str ?? "", verifiedType: n?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            C.defaultProps = { cellClickable: !0, decoration: null, displayMode: h.Z.UserCompact };
        },
        621416: (e, t, o) => {
            o.d(t, { m: () => i });
            o(890103);
            var n = o(202784),
                r = o(175698);
            function i(e) {
                const t = (0, r.A)();
                return [
                    !!t && !t.flags[e],
                    n.useCallback(() => {
                        t?.addFlag(e);
                    }, [t, e]),
                ];
            }
        },
        337455: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(411916),
                i = o.n(r),
                a = o(373463),
                l = o.n(a);
            function s(e) {
                class t extends n.Component {
                    constructor(e, t) {
                        super(e, t), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        i()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? n.createElement(e, this.props) : null;
                    }
                }
                return l()(t, e);
            }
        },
        943245: (e, t, o) => {
            o.d(t, { It: () => d, mD: () => c, sE: () => l });
            var n = o(899492),
                r = o(733357);
            const i = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                a = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                l = (e) => {
                    const t = e.toLowerCase();
                    return a[t] || t;
                },
                s = (e, t) => {
                    const o = l(e);
                    return !(i.indexOf(o) > -1 && t < 20) && !("und" === e);
                },
                c = ({ displayTextRange: e, entities: t, language: o, text: i }) => {
                    if (!e || !s(o, e[1] - e[0])) return !1;
                    const a = ((e, t) => {
                            let o = n.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in t) o = o.concat(t[e].map((e) => e.indices));
                            return o.sort((e, t) => e[0] - t[0]), o;
                        })(i, t),
                        l = ((e, t, o) => {
                            const { accText: n, lastIndex: r } = o.reduce(({ accText: o, lastIndex: n }, r) => (r[1] <= n || t[1] <= r[0] ? { lastIndex: n, accText: o } : { accText: o + e.slice(n, r[0]), lastIndex: r[1] }), { accText: "", lastIndex: t[0] });
                            return n + e.slice(r, t[1]);
                        })(i, e, a);
                    return !(0, r.Z)(l) && s(o, l.length);
                },
                d = (e) => {
                    if (e.includes("-")) return e;
                    if (navigator.language && navigator.language.startsWith(e)) return navigator.language;
                    if (window.Intl && window.Intl.Locale) {
                        const { region: t } = new window.Intl.Locale(e).maximize();
                        return `${e}-${t}`;
                    }
                    return "ar" === e ? "ar-EG" : e;
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-e019dbda.3e5893ea.js.map
