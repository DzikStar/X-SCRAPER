"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Display", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var r = o(202784),
                a = o(614983),
                n = o.n(a),
                i = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: n, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: h, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: k, titleIconCell: C, titleIconCellSize: v, withBackground: w, withWideContainer: Z } = this.props,
                        { isModal: E } = this.context,
                        x = n ? d : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        T = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, E, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: x, middleControl: p, position: u(m, E, a), rightControl: h, style: b, subtitle: f, title: y, titleDomId: k, titleIconCell: C, titleIconCellSize: v, withBackground: T, withWideContainer: Z }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        975753: (e, t, o) => {
            o.d(t, { c: () => b, Z: () => f });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(530732),
                l = o(992942),
                s = o(731708),
                c = o(154003),
                d = o(725516),
                u = o(674132),
                p = o.n(u),
                m = o(81777),
                h = o(930659);
            const g = { header: p().d231a76a, description: p().heaba5d8, legalDisclaimer: p().i57d3ea0, buttonText: p().a0440af6, image: { darkMode: m, lightMode: h } },
                b = Object.freeze({ MarchMadness: "MarchMadness" }),
                f = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: u, withBackgroundImage: p }) => {
                    const m = (0, d.z)(),
                        h = b[o] || "Occasion",
                        f = p ? `${h}WithBackgroundImage` : h;
                    r.useEffect(() => {
                        m.scribe({ component: f, action: "impression" });
                    }, [m, f]);
                    const k = () => {
                            m.scribe({ component: f, action: "click", element: "card" });
                        },
                        { backgroundcolor: C, buttonSize: v, cardWidth: w, marginbottom: Z, textcolor: E } = u ?? {},
                        x = C ? n.default.theme.colors[C] : n.default.theme.colors.gray0,
                        T = E ? n.default.theme.colors[E] : n.default.theme.colors.gray900,
                        B = Z ? n.default.theme.spaces[Z] : n.default.theme.spaces.space16,
                        _ = { [b.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[o];
                    return p ? r.createElement(i.Z, { interactiveStyles: null, link: t, onPress: k, style: y.bannerContainer }, r.createElement(l.Z, { resizeMode: "contain", source: { uri: "light" === n.default.theme.paletteName ? _.image.lightMode : _.image.darkMode }, style: { height: 85 } })) : r.createElement(a.Z, { style: [y.card, { backgroundColor: x }, { maxWidth: w }, { marginBottom: B }], testID: "popupCard" }, r.createElement(a.Z, { style: e ? y.horizontalContent : y.verticalContent }, r.createElement(a.Z, { style: e ? y.textContainer : null }, r.createElement(s.ZP, { size: "headline2", style: [y.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, _.header), r.createElement(s.ZP, { size: "subtext1", style: [y.popupDescription, { color: T }] }, _.description, " ", e ? null : _.legalDisclaimer)), r.createElement(a.Z, { style: y.buttonContainer }, r.createElement(c.ZP, { backgroundColor: "light" === n.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: k, size: "medium", style: [y.popupButton, { width: v }] }, _.buttonText), e && r.createElement(s.ZP, { size: "subtext3", style: [y.legalDisclaimer, { color: T }] }, _.legalDisclaimer))));
                },
                y = n.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                a = o(202784),
                n = o(182056),
                i = o(879113),
                l = o(392237),
                s = o(674132),
                c = o.n(s),
                d = o(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, o) => {
                    const l = n.Z.isOnline();
                    return a.createElement(i.Z, (0, r.Z)({}, t, { icon: l ? void 0 : a.createElement(d.default, { style: m.icon }), retryMessage: l ? e : u }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = a.forwardRef(p);
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => m });
            var r = o(202784),
                a = o(325686),
                n = o(108362),
                i = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                p = o(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: i, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: y, title: k } = this.props,
                                { isModal: C } = this.context;
                            return r.createElement(a.Z, { style: C ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !C, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [C && h.appBarModal, t], subtitle: y, title: k, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        y = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: g }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, f && h.rootModal] }, !f && y, r.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [h.container, f && h.containerModal, i] }, f ? r.createElement(p.Z, { style: h.viewport }, y, o) : o), t ? r.createElement(a.Z, { style: [h.bottomBarModal, !f && !b && h.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const h = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                a = o(500002),
                n = o(668214),
                i = o(997174),
                l = o(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: n, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = a || l;
                    ((c && a !== l) || (!c && o !== n) || r !== i || s) && this._performPageUpdates(this.props);
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
            const d = (0, a.ZP)(s(c));
        },
        388185: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var r = o(202784),
                a = o(325686),
                n = o(157396),
                i = o(392237),
                l = o(731708),
                s = o(173739),
                c = o(674132),
                d = o.n(c),
                u = o(299398),
                p = o(668214),
                m = o(390387),
                h = o(38562);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ language: m.VT, scale: h.Z0 }))
                    .propsFromActions(() => ({ updateSettings: h.VP }))
                    .withAnalytics(),
                { ThemeScaleNames: b } = n.default,
                f = Object.keys(b),
                y = f.length - 1,
                k = d().d8680056,
                C = d().eed02406,
                v = d().j59f0b94,
                w = d().b81aaad8,
                Z = d().c7044880,
                E = { [b.xSmall]: k, [b.small]: C, [b.normal]: v, [b.large]: w, [b.xLarge]: Z },
                x = [k, C, v, w, Z],
                T = d().e46dffa0,
                B = i.default.create((e) => ({ sliderContainer: { alignItems: "center", flexDirection: "row", padding: e.spaces.space16 }, slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 } })),
                _ = g((e) => {
                    const { analytics: t, onSliderChanged: o, updateSettings: n } = e,
                        c = r.useCallback(
                            (e) => {
                                const r = f[e];
                                t.scribe({ component: "text_size_picker", element: "scale", action: r }), n({ scale: r }), i.default.setScale(b[r]), o && o(r);
                            },
                            [t, o, n],
                        );
                    return r.createElement(u.Z, { themeItem: "textSize" }, (e) => r.createElement(a.Z, { style: B.sliderContainer }, r.createElement(l.ZP, { size: "subtext2" }, "Aa"), r.createElement(a.Z, { style: B.slider }, r.createElement(s.Z, { accessibilityLabelValueText: E[i.default.theme.scale], "aria-label": T, autoFocus: e, hoverLabels: x, max: y, min: 0, onChange: c, value: f.indexOf(i.default.theme.scale), withMarkers: !0 })), r.createElement(l.ZP, { size: "headline1" }, "Aa")));
                });
        },
        564297: (e, t, o) => {
            o.d(t, { Z: () => C });
            var r = o(202784),
                a = o(157396),
                n = o(392237),
                i = o(537392),
                l = o(16790),
                s = o(674132),
                c = o.n(s),
                d = o(10656),
                u = o(458616),
                p = o(443781),
                m = o(299398),
                h = o(668214),
                g = o(38562);
            const b = (0, h.Z)()
                    .propsFromActions(() => ({ updateSettings: g.VP }))
                    .withAnalytics(),
                { ThemePaletteNames: f } = a.default,
                y = c().ce8a8116,
                k = [
                    { label: c().j59f0b94, "aria-label": c().d3d48f3a, backgroundName: f.light },
                    { label: c().i76f67ee, backgroundName: f.dark },
                    { label: c().c8f85960, backgroundName: f.darker },
                ];
            const C = b(function ({ analytics: e, updateSettings: t }) {
                const { featureSwitches: o } = (0, p.QZ)();
                function a(r) {
                    e.scribe({ component: "background_picker", element: "option", action: r });
                    const a = f[r];
                    n.default.setPalette(a), t({ themeBackground: a }), u.t8(r, o);
                }
                return r.createElement(i.ZP, null, ({ containerWidth: e }) => r.createElement(m.Z, { themeItem: "background" }, (t) => r.createElement(l.Z, { "aria-label": y, autoFocus: t, layout: d.Z.shouldRenderAsModal(e) ? "row" : "column", onChange: a, options: k, value: n.default.theme.paletteName })));
            });
        },
        177605: (e, t, o) => {
            o.d(t, { Z: () => k });
            var r = o(202784),
                a = o(157396),
                n = o(392237),
                i = o(537392),
                l = o(226244),
                s = o(674132),
                c = o.n(s),
                d = o(10656),
                u = o(299398),
                p = o(668214),
                m = o(38562);
            const h = (0, p.Z)()
                    .propsFromActions(() => ({ updateSettings: m.VP }))
                    .withAnalytics(),
                { ThemePrimaryColorNames: g } = a.default,
                b = c().aefc5b20,
                f = [
                    { "aria-label": c().a52d0fde, colorName: g.blue500 },
                    { "aria-label": c().d818cdd6, colorName: g.yellow500 },
                    { "aria-label": c().fee1cd64, colorName: g.magenta500 },
                    { "aria-label": c().cbed7fb2, colorName: g.purple500 },
                    { "aria-label": c().g697ec02, colorName: g.orange500 },
                    { "aria-label": c().a7c2204a, colorName: g.green500 },
                ];
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleColorChange = (e) => {
                            const { analytics: t, updateSettings: o } = this.props;
                            t.scribe({ component: "color_picker", element: "option", action: e }), o({ themeColor: g[e] }), n.default.setPrimaryColor(g[e]);
                        });
                }
                render() {
                    return r.createElement(i.ZP, null, ({ containerWidth: e }) => r.createElement(u.Z, { themeItem: "color" }, (t) => r.createElement(l.Z, { "aria-label": b, autoFocus: t, layout: d.Z.shouldRenderAsModal(e) ? "one-row" : "two-rows", onChange: this._handleColorChange, options: f, value: n.default.theme.primaryColorName })));
                }
            }
            const k = h(y);
        },
        299398: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                a = o(325686),
                n = o(530745),
                i = o(668214),
                l = o(5849);
            const s = (0, i.Z)()
                .propsFromState(() => ({ themeFocus: l.zM }))
                .propsFromActions(() => ({ setThemeFocus: l.rz }))((e) => {
                const { children: t, setThemeFocus: o, themeFocus: i, themeItem: l } = e,
                    s = l === i,
                    c = r.useCallback(
                        (e) => {
                            const t = e.key === n.nQ || e.key === n.Ur;
                            o(t ? "" : l);
                        },
                        [o, l],
                    ),
                    d = r.useCallback(() => {
                        o("");
                    }, [o]);
                return r.createElement(a.Z, { onKeyDown: c, onMouseDown: d }, t(s));
            });
        },
        53140: (e, t, o) => {
            o.d(t, { Z: () => f });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(674132),
                l = o.n(i),
                s = o(516951),
                c = o(808692),
                d = o(668214),
                u = o(390387);
            const p = (0, d.Z)().propsFromState(() => ({ language: u.VT })),
                m = l().gde8fdd7({ mention: "X" }),
                h = { text: m, created_at: new Date(Date.now() - 6e5).toString(), id: 20, id_str: "20", display_text_range: [0, m.length - 1], entities: { user_mentions: [{ id_str: "783214", name: "X", screen_name: "X", text: "X", indices: [m.indexOf("@"), m.indexOf("@") + 1 + 1] }] }, user: { id: 783214, id_str: "783214", name: "X", screen_name: "X", profile_image_url_https: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg", verified: !0 } };
            class g extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleTweetAction = (e) => {
                            e && e.preventDefault && e.preventDefault();
                        });
                    const { language: t, tweet: o } = this.props;
                    this._tweet = { ...h, ...o, lang: t || "en" };
                }
                render() {
                    const { withTweetBorder: e } = this.props;
                    return r.createElement(a.Z, { "aria-hidden": !0, style: [b.width, e && b.tweetBorder] }, r.createElement(c.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: s.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: s.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), r.createElement(a.Z, { style: n.default.absoluteFill }));
                }
            }
            g.defaultProps = { tweet: h, withTweetBorder: !1 };
            const b = n.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                f = p(g);
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => E, KV: () => f, LI: () => M, SC: () => Z, Vt: () => C, ed: () => S, op: () => x });
            var r = o(202784),
                a = o(190286),
                n = o(674132),
                i = o.n(n),
                l = o(616894),
                s = o(314948),
                c = o(516951),
                d = o(163390);
            const u = i().cfd2f35e,
                p = i().f9e45cfb,
                m = i().fcd4d489,
                h = i().a6450e84,
                g = i().g353ad73,
                b = i().ad00a739,
                f = i().a9fd20be,
                y = i().j546fb79,
                k = i().c9623eeb,
                C = i().e133be4e,
                v = i().he43bca4,
                w = i().f5f01af6,
                Z = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: h, text: t ? b({ screenName: e }) : g({ screenName: e }) }),
                x = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: r, testID: a, unblockAction: n, unblockSubtext: i, user: l }) => {
                    let s,
                        u = c.Z;
                    const p = M(l, o);
                    switch (r) {
                        case Z.PROFILE:
                        case Z.LIST_DETAIL:
                        case Z.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? n(p) : e(p);
                            };
                            break;
                        case Z.TWEET:
                        case Z.TWEET_CARET:
                        case Z.RICH_FEEDBACK:
                            (s = d.uq.block),
                                (u = () => {
                                    l.blocking ? n(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: a, shortcutKey: s, Icon: T(l.blocking), text: _(l), subText: B({ user: l, blockSubtext: t, unblockSubtext: i }) };
                },
                T = (e) => (e ? s.default : l.default),
                B = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                _ = (e) => (e.blocking ? k({ screenName: e.screen_name }) : m({ screenName: e.screen_name })),
                M = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: C, text: t ? w : v }))(e.screen_name, t) : E(e.screen_name, t)),
                S = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: n, headline: i, label: l, text: s } = e;
                    return r.createElement(a.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: n, headline: i, onCancel: o, onConfirm: t, text: s });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => a });
            var r = o(674132);
            const a = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => a });
            var r = o(674132);
            const a = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => p, Od: () => d, PN: () => m, uq: () => c, wR: () => g });
            var r = o(251067),
                a = o(522171),
                n = o(674132),
                i = o.n(n),
                l = o(912021),
                s = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, l.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = s.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: i().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: c.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: c.search, universal: !1 },
                    { description: i().fe731016, keys: a.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: a.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: a.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: a.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: c.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: c.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: c.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: a.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                m = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                h = (0, l.Z)((e) => {
                    const t = d(e),
                        o = p(),
                        r = m(),
                        a = {};
                    return (
                        [...o, ...r, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      a[t] = e;
                                  })
                                : (a[t] = e);
                        }),
                        JSON.stringify(a)
                    );
                }),
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": h(e) } };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(807469),
                a = o(502909),
                n = o(600823);
            const i = (0, a.ZP)({ namespace: "topics" }),
                l = (0, a.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                s = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (o, r) => (o(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, o) => {
                    const { entityId: r } = t.meta,
                        a = e.entities[r];
                    return a ? ((e, t, o, r) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [o.id]: { ...o, ...r() } } } : e))(e, t, a, o) : e;
                },
                d = { follow: (0, a.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, a.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, a.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, a.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...l, ...s, ...d, customActionTypes: (0, a.X7)(d) },
                p = n.Z.register(u);
        },
        861764: (e, t, o) => {
            o.r(t), o.d(t, { DisplayScreen: () => T, default: () => B });
            var r = o(202784),
                a = o(325686),
                n = o(731708),
                i = o(154003),
                l = o(386802),
                s = o(392237),
                c = o(674132),
                d = o.n(c),
                u = o(980407),
                p = o(388185),
                m = o(564297),
                h = o(177605),
                g = o(53140),
                b = o(725516);
            const f = d().b5b0afa4,
                y = d().b772cd66,
                k = d().ec5880e6,
                C = d().babfa32c,
                v = d().a2a2f98e,
                w = d().b4a361c0,
                Z = d().ce494bb4,
                E = d().c783d45e,
                x = d().h306a358;
            class T extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderModalHeader = (e) => (this.context.isModal ? r.createElement(a.Z, { style: _.header }, r.createElement(n.ZP, { align: "center", size: "title4", weight: "heavy" }, this._isWelcomeFlow ? C : f)) : e)),
                        (this._handleBackClick = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._isWelcomeFlow = "true" === e.location.query.welcome);
                }
                render() {
                    const { isModal: e } = this.context,
                        { history: t } = this.props;
                    return r.createElement(u.Z, { history: t, renderHeader: this._renderModalHeader, title: this._isWelcomeFlow ? C : f }, r.createElement(a.Z, { style: _.root }, r.createElement(n.ZP, { align: "center", color: "gray700", style: [_.description, !e && _.descriptionMarginTop] }, this._isWelcomeFlow ? w : k), r.createElement(a.Z, { style: [_.tweetExample, e && _.tweetExampleMarginHorizontal] }, r.createElement(g.Z, { withTweetBorder: !0 })), r.createElement(n.ZP, { color: "gray700", style: _.componentTitle, weight: "bold" }, Z), r.createElement(a.Z, { style: _.component }, r.createElement(p.Z, null)), r.createElement(n.ZP, { color: "gray700", style: _.componentTitle, weight: "bold" }, E), r.createElement(a.Z, { style: [_.component, _.colorPicker] }, r.createElement(h.Z, null)), r.createElement(n.ZP, { color: "gray700", style: _.componentTitle, weight: "bold" }, x), r.createElement(a.Z, { style: [_.component, _.backgroundPicker] }, r.createElement(m.Z, null)), r.createElement(a.Z, { style: _.buttonContainer }, r.createElement(i.ZP, { onPress: this._handleBackClick, type: "brandFilled" }, this._isWelcomeFlow ? v : y))));
                }
            }
            T.contextType = l.Z;
            const B = (0, b.Z)(T, { page: "display" }),
                _ = s.default.create((e) => ({ root: { paddingBottom: e.spaces.space32, paddingHorizontal: e.spaces.space32 }, header: { marginBottom: e.spaces.space12, marginTop: e.spaces.space32 }, description: { marginBottom: e.spaces.space20 }, descriptionMarginTop: { marginTop: e.spaces.space20 }, componentTitle: { fontSize: e.fontSizes.subtext2, marginBottom: e.spaces.space4 }, component: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.xLarge, marginBottom: e.spaces.space12 }, buttonContainer: { alignItems: "center", marginTop: e.spaces.space16 }, tweetExample: { marginBottom: e.spaces.space16 }, tweetExampleMarginHorizontal: { marginHorizontal: e.spaces.space32 }, backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 }, colorPicker: { paddingVertical: e.spaces.space4 } }));
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                a = o(325686),
                n = o(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(202784),
                a = o(476984),
                n = o.n(a),
                i = o(143778),
                l = o(750410),
                s = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: a, icon: n, loadingMessage: i, onRequestRetry: d, render: m, renderFailure: h, retryMessage: g, retryable: b } = this.props;
                    switch (a) {
                        case c:
                            return b ? r.createElement(l.Z, { icon: n, onRequestRetry: d, retryMessage: g }) : o ? r.createElement(s.m, { failureMessage: o }) : h();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                a = o(325686),
                n = o(235902),
                i = o(885015),
                l = o(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: s } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return o ? r.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] })), r.createElement(a.Z, { style: c.gapText }, o), r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] }))) : r.createElement(a.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                a = o(202784),
                n = o(325686),
                i = o(392237);
            class l extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...i } = this.props,
                        l = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, s.column, o && s.withGutterColumn] }));
                    return a.createElement(n.Z, (0, r.Z)({ style: [t, s.root, o && s.withGutter] }, i), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = l;
        },
        16790: (e, t, o) => {
            o.d(t, { Z: () => g });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(913973),
                l = o(803993),
                s = o(731708),
                c = o(950822),
                d = o(58881),
                u = o(530732),
                p = o(157396);
            const m = n.default.create((e) => ({ root: { paddingHorizontal: "20px", flexDirection: "row", flex: 1, borderRadius: e.borderRadii.small, cursor: "pointer", minHeight: "64px", margin: e.spaces.space4, alignItems: "center" }, radioOuterCircle: { borderRadius: e.borderRadii.infinite, userSelect: "none", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", marginHorizontal: "-11px" }, radioInnerCircle: { alignItems: "center", borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, justifyContent: "center", height: "20px", width: "20px" }, text: { flexGrow: 1, justifyContent: "center", cursor: "pointer", alignItems: "center", marginStart: "5px", width: "80%" }, checkMark: { color: e.colors.white, width: "18px", height: "18px" }, nativeControl: { ...n.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" } })),
                h = function ({ "aria-label": e, autoFocus: t, backgroundName: o, isSelected: h, label: g, name: b, onChange: f }) {
                    const y = r.createRef(),
                        k = r.useMemo(() => d.Z.generate({ backgroundColor: n.default.theme.colors.transparent, color: n.default.theme.colors.primary, withFocusWithinFocusRing: !0 }), []),
                        C = r.useMemo(() => {
                            d.Z.generate({ backgroundColor: n.default.theme.colors.transparent, color: n.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                        }, []),
                        v = r.useMemo(() => (o === p.CV.dark ? l.Vi : o === p.CV.darker ? l.SR : l.vh), [o]),
                        w = r.useMemo(() => ({ backgroundColor: v.cellBackground, borderColor: h ? n.default.theme.colors.primary : n.default.theme.colors.gray200, borderWidth: h ? "2px" : "1px" }), [h, v.cellBackground]),
                        Z = r.useMemo(() => ({ backgroundColor: h ? n.default.theme.colors.primary : n.default.theme.colors.transparent, borderColor: h ? n.default.theme.colors.primary : v.gray300 }), [h, v.gray300]),
                        E = r.useMemo(() => (h ? k : C), [h, k, C]),
                        x = r.useMemo(() => ({ color: v.text }), [v.text]);
                    function T(e) {
                        f && !h && f(o);
                    }
                    return (
                        r.useEffect(() => {
                            t && y.current && y.current.focus();
                        }, [t, y]),
                        r.createElement(u.Z, { focusable: !1, interactiveStyles: null, style: [m.root, w] }, (t) => r.createElement(r.Fragment, null, r.createElement(u.Z, { focusable: !1, interactiveStyles: E, interactivityState: t, role: "radio", style: m.radioOuterCircle }, r.createElement(a.Z, { style: [m.radioInnerCircle, Z] }, h ? r.createElement(i.default, { style: m.checkMark }) : null)), r.createElement(a.Z, { "aria-hidden": !0, style: m.text }, r.createElement(s.ZP, { numberOfLines: 1, style: x, weight: "bold" }, g)), (0, c.Z)("input", { "aria-label": e || g, checked: h, name: b, style: m.nativeControl, type: "radio", onChange: T, ref: y })))
                    );
                };
            function g({ "aria-label": e, autoFocus: t, layout: o, onChange: n, options: i, value: l }) {
                return r.createElement(
                    a.Z,
                    { "aria-label": e, role: "radiogroup", style: "row" === o ? b.row : b.column },
                    i.map((e) => {
                        return r.createElement(h, {
                            "aria-label": e["aria-label"],
                            autoFocus: t && e.backgroundName === l,
                            backgroundName: e.backgroundName,
                            isSelected: e.backgroundName === l,
                            key: e.backgroundName,
                            label: e.label,
                            name: "background-picker",
                            onChange:
                                ((o = e.backgroundName),
                                function () {
                                    n(o);
                                }),
                        });
                        var o;
                    }),
                );
            }
            const b = n.default.create((e) => ({ row: { flexDirection: "row" }, column: { flexDirection: "column" } }));
        },
        226244: (e, t, o) => {
            o.d(t, { Z: () => f });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(136483),
                l = o(913973),
                s = o(950822),
                c = o(58881),
                d = o(530732);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._radioRef = r.createRef()),
                        (this._handleChange = () => {
                            const { colorName: e, onChange: t } = this.props;
                            t(e);
                        });
                }
                componentDidMount() {
                    this.props.autoFocus && this._radioRef && this._radioRef.current && this._radioRef.current.focus();
                }
                render() {
                    const { "aria-label": e, colorName: t, isSelected: o, name: u, style: m } = this.props,
                        h = n.default.theme.colors[t],
                        g = c.Z.generate({ backgroundColor: n.default.theme.colors.transparent, color: h, withFocusWithinFocusRing: !0 });
                    return r.createElement(a.Z, { style: [p.container, m] }, r.createElement(d.Z, { interactiveStyles: g, role: "label", style: [p.choice, p.choiceContainer] }, r.createElement(i.default, { style: [p.choice, { color: h }] }), (0, s.Z)("input", { "aria-label": e, name: u, checked: o, onChange: this._handleChange, ref: this._radioRef, style: p.nativeControl, type: "radio" })), o && r.createElement(a.Z, { style: [p.choice, p.checkMarkContainer] }, r.createElement(l.default, { style: [p.choiceSelected, { backgroundColor: h }] })));
                }
            }
            const p = n.default.create((e) => ({ container: { alignItems: "center", paddingVertical: e.spaces.space4, userSelect: "none" }, choice: { cursor: "pointer", height: 45, width: 45 }, checkMarkContainer: { alignItems: "center", justifyContent: "center", position: "absolute" }, choiceSelected: { color: e.colors.whiteOnColor, height: 25, width: 25 }, choiceContainer: { borderRadius: e.borderRadii.infinite }, transitionStyle: { transitionProperty: "transform", transitionDuration: "0.1s" }, focusedStyle: { outlineStyle: "none" }, hoverStyle: { transform: [{ scale: 1.1 }] }, pressedStyle: { transform: [{ scale: 0.95 }] }, nativeControl: { ...n.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" } })),
                m = u;
            let h = 1;
            class g extends r.Component {
                constructor() {
                    super(), (this._colorPickerId = `COLOR_PICKER_${h}_LABEL`), (h += 1);
                }
                render() {
                    const { "aria-label": e, autoFocus: t, layout: o, onChange: n, options: i, value: l } = this.props,
                        s = "two-rows" === o,
                        c = [b.root, s && b.flexWrap],
                        d = s ? { width: (2 / i.length) * 100 + "%" } : void 0;
                    return r.createElement(
                        a.Z,
                        { "aria-label": e, role: "radiogroup", style: c },
                        i.map(({ "aria-label": e, colorName: o }) => r.createElement(m, { "aria-label": e, autoFocus: t && l === o, colorName: o, isSelected: l === o, key: o, name: this._colorPickerId, onChange: n, style: d })),
                    );
                }
            }
            g.defaultProps = { layout: "one-row" };
            const b = n.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-around" }, flexWrap: { flexWrap: "wrap" } })),
                f = g;
        },
        388941: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        416276: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        738398: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        194417: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        856661: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        89085: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        946474: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.36 8h-2.68l.42-2.52C16.4 3.66 15 2 13.15 2c-1.07 0-2.06.57-2.59 1.51l-3 5.24c-.04.06-.08.11-.14.15C6.96 8.35 6.27 8 5.5 8H2v13h14.2c2.1 0 3.92-1.45 4.39-3.5l1.19-5.22C22.27 10.09 20.61 8 18.36 8zM6 19H4v-9h1.5c.27 0 .5.22.5.5V19zm13.83-7.17l-1.19 5.22C18.38 18.19 17.37 19 16.2 19H8v-8.16c.54-.2 1-.58 1.3-1.1l2.99-5.24c.18-.31.5-.5.86-.5.61 0 1.07.55.97 1.15l-.8 4.85h5.04c.97 0 1.68.89 1.47 1.83z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => a, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (o, r, a) => {
                        const n = t ? t(r, a, e) : !!r;
                        return n && o[0].push(r), !n && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, t, o) => {
            var r = o(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        81777: (e, t, o) => {
            e.exports = o.p + "MarchMadnessBannerDark.42aa2dea.png";
        },
        930659: (e, t, o) => {
            e.exports = o.p + "MarchMadnessBannerLight.02bf82ca.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Display.b542e0ba.js.map
