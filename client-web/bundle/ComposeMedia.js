"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ComposeMedia"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var r = o(202784),
                i = o(614983),
                a = o.n(i),
                n = o(325686),
                s = o(370006),
                l = o(786998),
                d = o(929028),
                c = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: a, isFullWidth: n, isLarge: d, leftControl: c, middleControl: u, position: h, rightControl: m, secondaryBar: b, style: g, subtitle: C, title: B, titleDomId: y, titleIconCell: k, titleIconCellSize: f, withBackground: _, withWideContainer: x } = this.props,
                        { isModal: w } = this.context,
                        M = a ? c : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!_, w, !!b);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: d, leftControl: M, middleControl: u, position: p(h, w, i), rightControl: m, style: g, subtitle: C, title: B, titleDomId: y, titleIconCell: k, titleIconCellSize: f, withBackground: Z, withWideContainer: x }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? r.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => h });
            var r = o(202784),
                i = o(325686),
                a = o(108362),
                n = o(386802),
                s = o(392237),
                l = o(652904),
                d = o(555079),
                c = o(625661),
                p = o(449067),
                u = o(715601);
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: b, rightControl: g, secondaryBar: C, subtitle: B, title: y } = this.props,
                                { isModal: k } = this.context;
                            return r.createElement(i.Z, { style: k ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (k ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !k, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: b, ref: e, rightControl: g, secondaryBar: C, style: [k && m.appBarModal, t], subtitle: B, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: h, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: C } = this.context,
                        B = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: b }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, C && m.rootModal] }, !C && B, r.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [m.container, C && m.containerModal, n] }, C ? r.createElement(u.Z, { style: m.viewport }, B, o) : o), t ? r.createElement(i.Z, { style: [m.bottomBarModal, !C && !g && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = n.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = h;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                i = o(500002),
                a = o(668214),
                n = o(997174),
                s = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class d extends r.Component {
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
                            location: { pathname: a, search: n },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const d = i || s;
                    ((d && i !== s) || (!d && o !== a) || r !== n || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, i.ZP)(l(d));
        },
        513313: (e, t, o) => {
            o.d(t, { P: () => r });
            const r = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        343362: (e, t, o) => {
            o.r(t), o.d(t, { TabbedMediaEditScreen: () => b, default: () => g });
            var r = o(807896),
                i = o(202784),
                a = o(443781),
                n = o(536210),
                s = (o(136728), o(668214)),
                l = o(497294),
                d = o(632960);
            const c = (e, t) => {
                    const o = t.location?.state?.showAllMedia;
                    return o ? p(e) : u(e);
                },
                p = (e) => {
                    const t = d.tS(e),
                        o = [];
                    for (const e of t) {
                        const t = e.mediaIds || [];
                        o.push(...t);
                    }
                    return (0, l.m3)(e, o);
                },
                u = (e) => {
                    const t = d.E_(e),
                        o = d.tS(e)[t].mediaIds || [];
                    return (0, l.m3)(e, o);
                },
                h = (e, t) => t.location?.state?.mediaId,
                m = (0, s.Z)()
                    .propsFromState(() => ({ initialMediaId: h, media: c }))
                    .propsFromActions(() => ({ setMediaMetadata: l._B, processMedia: l.C4, updateMediaUpload: l._J }))
                    .withAnalytics({ page: "tabbed_media" });
            class b extends i.Component {
                constructor(e, t) {
                    super(e, t);
                    const { history: o, initialMediaId: r, media: i } = e;
                    (i.length <= 0 || !r) && o.replace("/");
                }
                render() {
                    const e = this.context.featureSwitches.isTrue("sensitive_tweet_warnings_enabled"),
                        { match: t, staticContext: o, ...a } = this.props;
                    return i.createElement(n.Z, (0, r.Z)({}, a, { sensitiveMediaTabEnabled: e }));
                }
            }
            b.contextType = a.rC;
            const g = m(b);
        },
        583813: (e, t, o) => {
            o.r(t), o.d(t, { TabbedMediaEditScreen: () => u, default: () => h });
            var r = o(807896),
                i = o(202784),
                a = o(536210),
                n = o(668214),
                s = o(798538),
                l = o(497294);
            const d = (e, t) => t.location && t.location.state && t.location.state.mediaId,
                c = (e, t) => {
                    const o = ((e, t) => t.location?.state?.conversationId)(0, t);
                    return (0, s.W8)(e, o);
                },
                p = (0, n.Z)()
                    .propsFromState(() => ({ media: c, initialMediaId: d }))
                    .adjustStateProps(({ initialMediaId: e, media: t }) => ({ media: t ? [t] : [], initialMediaId: e }))
                    .propsFromActions(() => ({ setMediaMetadata: l._B, processMedia: l.C4, updateMediaUpload: l._J }))
                    .withAnalytics({ page: "tabbed_media_dm" });
            class u extends i.Component {
                constructor(e) {
                    super(e);
                    const { history: t, initialMediaId: o, media: r } = e;
                    (r.length <= 0 || !o) && t.replace("/");
                }
                render() {
                    const { match: e, staticContext: t, ...o } = this.props;
                    return i.createElement(a.Z, (0, r.Z)({}, o, { sensitiveMediaTabEnabled: !1 }));
                }
            }
            const h = p(u);
        },
        109006: (e, t, o) => {
            o.r(t), o.d(t, { PhotoTagsScreen: () => T, default: () => E });
            var r = o(202784),
                i = o(325686),
                a = o(834324),
                n = o(154003),
                s = o(392237),
                l = o(332920),
                d = o.n(l),
                c = o(47086),
                p = o(908478),
                u = o(625661),
                h = o(980407),
                m = o(597496),
                b = o(339110),
                g = o(161821),
                C = o(668214),
                B = o(632960),
                y = o(104140);
            const k = (e) => {
                    const t = B.E_(e);
                    return B.tS(e)[t].mediaTags;
                },
                f = (e) => {
                    const t = ((e) => {
                        const t = (0, y.sM)(e),
                            o = (t && (0, g.Z)(t)) || [];
                        return (0, b.It)(o);
                    })(e)
                        .filter((e) => e && e.rounded_score)
                        .sort(function (e, t) {
                            return (t.rounded_score || 0) - (e.rounded_score || 0);
                        });
                    return t.slice(0, 12);
                },
                _ = (0, C.Z)()
                    .propsFromState(() => ({ existingTags: k, injections: f }))
                    .propsFromActions(() => ({ updateSingleComposer: B.zi }))
                    .withAnalytics({ page: "media_tag", component: "media_tagger" }),
                x = d().b772cd66,
                w = d().c20dc654,
                M = d().d1175c78,
                Z = d().ae0831ab;
            function T(e) {
                const { history: t, injections: o, existingTags: s = [], updateSingleComposer: l } = e,
                    [d, g] = r.useState(s),
                    [C, B] = r.useState(""),
                    y = (e) => {
                        g(d.filter(({ id: t }) => t !== e.id));
                    },
                    k = () => {
                        const e = d.map((e) => e.data.id_str).sort(),
                            t = s.map((e) => e.data.id_str).sort(),
                            o = e.length === t.length && (0, p.Z)(e, t);
                        return r.createElement(i.Z, { style: S.rightColumn }, r.createElement(n.ZP, { disabled: o, onPress: _, size: "small", type: "primaryFilled" }, x));
                    },
                    f = () => {
                        t.goBack();
                    },
                    _ = () => {
                        l({ updates: { mediaTags: d } }), t.goBack();
                    };
                return r.createElement(
                    h.Z,
                    { documentTitle: M, history: t, renderHeader: () => r.createElement(u.ZP, { backButtonType: "close", history: t, onBackClick: f, rightControl: k(), title: M }) },
                    r.createElement(m.fb, {
                        getItemDisabledMessage: (e) => {
                            let t;
                            return e.type !== b.El.User || e.data.can_media_tag || (t = Z({ screenName: e.data.screen_name })), t;
                        },
                        getItemIsDisabled: (e) => {
                            const t = d.length >= 10;
                            return e.type === b.El.User && (!e.data.can_media_tag || !!t);
                        },
                        injections: C ? void 0 : o,
                        onQueryChange: (e) => {
                            B(e);
                        },
                        onRemove: y,
                        onSelect: (e) => {
                            e.type === b.El.User && (d.find(({ id: t }) => t === e.id) ? y(e) : d.length < 10 && g([...d, e]));
                        },
                        renderCallout: () => (d.length >= 10 ? r.createElement(i.Z, { style: S.inlineCallout }, r.createElement(a.Z, { Icon: c.default, headline: w, type: "warning" })) : null),
                        selectedUsers: d,
                        source: b._4.ComposeMediaTagging,
                        withCompactPills: !0,
                    }),
                );
            }
            const S = s.default.create((e) => ({ rightColumn: { flexDirection: "row", flexGrow: 1, alignItems: "center" }, inlineCallout: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space4, paddingTop: e.spaces.space8 } })),
                E = _(T);
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ComposeMedia.a363b6aa.js.map
