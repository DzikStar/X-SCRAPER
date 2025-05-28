"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Display", "loader.AudioContextVoiceMedia"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var r = o(202784),
                a = o(614983),
                n = o.n(a),
                i = o(325686),
                s = o(370006),
                l = o(786998),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: n, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: h, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: k, titleIconCell: C, titleIconCellSize: w, withBackground: x, withWideContainer: Z } = this.props,
                        { isModal: E } = this.context,
                        v = n ? d : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        T = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, E, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: v, middleControl: p, position: u(m, E, a), rightControl: h, style: b, subtitle: f, title: y, titleDomId: k, titleIconCell: C, titleIconCellSize: w, withBackground: T, withWideContainer: Z }), g || null);
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
        169576: (e, t, o) => {
            o.d(t, { c: () => b, Z: () => f });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(530732),
                s = o(992942),
                l = o(731708),
                c = o(154003),
                d = o(725516),
                u = o(111677),
                p = o.n(u);
            const m = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                h = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: p().d231a76a, description: p().heaba5d8, legalDisclaimer: p().i57d3ea0, buttonText: p().a0440af6, image: { darkMode: m, lightMode: h } },
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
                        { backgroundcolor: C, buttonSize: w, cardWidth: x, marginbottom: Z, textcolor: E } = u ?? {},
                        v = C ? n.default.theme.colors[C] : n.default.theme.colors.gray0,
                        T = E ? n.default.theme.colors[E] : n.default.theme.colors.gray900,
                        B = Z ? n.default.theme.spaces[Z] : n.default.theme.spaces.space16,
                        _ = { [b.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[o];
                    return p ? r.createElement(i.Z, { interactiveStyles: null, link: t, onPress: k, style: y.bannerContainer }, r.createElement(s.Z, { resizeMode: "contain", source: { uri: "light" === n.default.theme.paletteName ? _.image.lightMode : _.image.darkMode }, style: { height: 85 } })) : r.createElement(a.Z, { style: [y.card, { backgroundColor: v }, { maxWidth: x }, { marginBottom: B }], testID: "popupCard" }, r.createElement(a.Z, { style: e ? y.horizontalContent : y.verticalContent }, r.createElement(a.Z, { style: e ? y.textContainer : null }, r.createElement(l.ZP, { size: "headline2", style: [y.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, _.header), r.createElement(l.ZP, { size: "subtext1", style: [y.popupDescription, { color: T }] }, _.description, " ", e ? null : _.legalDisclaimer)), r.createElement(a.Z, { style: y.buttonContainer }, r.createElement(c.ZP, { backgroundColor: "light" === n.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: k, size: "medium", style: [y.popupButton, { width: w }] }, _.buttonText), e && r.createElement(l.ZP, { size: "subtext3", style: [y.legalDisclaimer, { color: T }] }, _.legalDisclaimer))));
                },
                y = n.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                a = o(202784),
                n = o(182056),
                i = o(879113),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, o) => {
                    const s = n.Z.isOnline();
                    return a.createElement(i.Z, (0, r.Z)({}, t, { icon: s ? void 0 : a.createElement(d.default, { style: m.icon }), retryMessage: s ? e : u }));
                },
                m = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = a.forwardRef(p);
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => m });
            var r = o(202784),
                a = o(325686),
                n = o(108362),
                i = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                p = o(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: i, hideBackButton: s, history: l, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: y, title: k } = this.props,
                                { isModal: C } = this.context;
                            return r.createElement(a.Z, { style: C ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !C, hideBackButton: s, history: l, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [C && h.appBarModal, t], subtitle: y, title: k, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        y = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: g }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, f && h.rootModal] }, !f && y, r.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [h.container, f && h.containerModal, i] }, f ? r.createElement(p.Z, { style: h.viewport }, y, o) : o), t ? r.createElement(a.Z, { style: [h.bottomBarModal, !f && !b && h.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const h = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                a = o(500002),
                n = o(668214),
                i = o(997174),
                s = o(118823);
            const l = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
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
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = a || s;
                    ((c && a !== s) || (!c && o !== n) || r !== i || l) && this._performPageUpdates(this.props);
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
            const d = (0, a.ZP)(l(c));
        },
        388185: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var r = o(202784),
                a = o(325686),
                n = o(157396),
                i = o(392237),
                s = o(731708),
                l = o(173739),
                c = o(111677),
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
                w = d().j59f0b94,
                x = d().b81aaad8,
                Z = d().c7044880,
                E = { [b.xSmall]: k, [b.small]: C, [b.normal]: w, [b.large]: x, [b.xLarge]: Z },
                v = [k, C, w, x, Z],
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
                    return r.createElement(u.Z, { themeItem: "textSize" }, (e) => r.createElement(a.Z, { style: B.sliderContainer }, r.createElement(s.ZP, { size: "subtext2" }, "Aa"), r.createElement(a.Z, { style: B.slider }, r.createElement(l.Z, { accessibilityLabelValueText: E[i.default.theme.scale], "aria-label": T, autoFocus: e, hoverLabels: v, max: y, min: 0, onChange: c, value: f.indexOf(i.default.theme.scale), withMarkers: !0 })), r.createElement(s.ZP, { size: "headline1" }, "Aa")));
                });
        },
        564297: (e, t, o) => {
            o.d(t, { Z: () => C });
            var r = o(202784),
                a = o(157396),
                n = o(392237),
                i = o(537392),
                s = o(16790),
                l = o(111677),
                c = o.n(l),
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
                return r.createElement(i.ZP, null, ({ containerWidth: e }) => r.createElement(m.Z, { themeItem: "background" }, (t) => r.createElement(s.Z, { "aria-label": y, autoFocus: t, layout: d.Z.shouldRenderAsModal(e) ? "row" : "column", onChange: a, options: k, value: n.default.theme.paletteName })));
            });
        },
        177605: (e, t, o) => {
            o.d(t, { Z: () => k });
            var r = o(202784),
                a = o(157396),
                n = o(392237),
                i = o(537392),
                s = o(226244),
                l = o(111677),
                c = o.n(l),
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
                    return r.createElement(i.ZP, null, ({ containerWidth: e }) => r.createElement(u.Z, { themeItem: "color" }, (t) => r.createElement(s.Z, { "aria-label": b, autoFocus: t, layout: d.Z.shouldRenderAsModal(e) ? "one-row" : "two-rows", onChange: this._handleColorChange, options: f, value: n.default.theme.primaryColorName })));
                }
            }
            const k = h(y);
        },
        299398: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                a = o(325686),
                n = o(530745),
                i = o(668214),
                s = o(5849);
            const l = (0, i.Z)()
                .propsFromState(() => ({ themeFocus: s.zM }))
                .propsFromActions(() => ({ setThemeFocus: s.rz }))((e) => {
                const { children: t, setThemeFocus: o, themeFocus: i, themeItem: s } = e,
                    l = s === i,
                    c = r.useCallback(
                        (e) => {
                            const t = e.key === n.nQ || e.key === n.Ur;
                            o(t ? "" : s);
                        },
                        [o, s],
                    ),
                    d = r.useCallback(() => {
                        o("");
                    }, [o]);
                return r.createElement(a.Z, { onKeyDown: c, onMouseDown: d }, t(l));
            });
        },
        53140: (e, t, o) => {
            o.d(t, { Z: () => f });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(111677),
                s = o.n(i),
                l = o(516951),
                c = o(808692),
                d = o(668214),
                u = o(390387);
            const p = (0, d.Z)().propsFromState(() => ({ language: u.VT })),
                m = s().gde8fdd7({ mention: "X" }),
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
                    return r.createElement(a.Z, { "aria-hidden": !0, style: [b.width, e && b.tweetBorder] }, r.createElement(c.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: l.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: l.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), r.createElement(a.Z, { style: n.default.absoluteFill }));
                }
            }
            g.defaultProps = { tweet: h, withTweetBorder: !1 };
            const b = n.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                f = p(g);
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => E, KV: () => f, LI: () => S, SC: () => Z, Vt: () => C, ed: () => M, op: () => v });
            var r = o(202784),
                a = o(190286),
                n = o(111677),
                i = o.n(n),
                s = o(616894),
                l = o(314948),
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
                w = i().he43bca4,
                x = i().f5f01af6,
                Z = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: h, text: t ? b({ screenName: e }) : g({ screenName: e }) }),
                v = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: r, testID: a, unblockAction: n, unblockSubtext: i, user: s }) => {
                    let l,
                        u = c.Z;
                    const p = S(s, o);
                    switch (r) {
                        case Z.PROFILE:
                        case Z.LIST_DETAIL:
                        case Z.FOLLOWERS_LIST:
                            u = () => {
                                s.blocking ? n(p) : e(p);
                            };
                            break;
                        case Z.TWEET:
                        case Z.TWEET_CARET:
                        case Z.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    s.blocking ? n(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: a, shortcutKey: l, Icon: T(s.blocking), text: _(s), subText: B({ user: s, blockSubtext: t, unblockSubtext: i }) };
                },
                T = (e) => (e ? l.default : s.default),
                B = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                _ = (e) => (e.blocking ? k({ screenName: e.screen_name }) : m({ screenName: e.screen_name })),
                S = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: C, text: t ? x : w }))(e.screen_name, t) : E(e.screen_name, t)),
                M = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: n, headline: i, label: s, text: l } = e;
                    return r.createElement(a.Z, { cancelButtonLabel: u, confirmButtonLabel: s, confirmButtonType: n, headline: i, onCancel: o, onConfirm: t, text: l });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => a });
            var r = o(111677);
            const a = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => a });
            var r = o(111677);
            const a = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => p, Od: () => d, PN: () => m, uq: () => c, wR: () => g });
            var r = o(251067),
                a = o(522171),
                n = o(111677),
                i = o.n(n),
                s = o(912021),
                l = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, s.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
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
                h = (0, s.Z)((e) => {
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
                s = (0, a.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
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
                u = { ...i, ...s, ...l, ...d, customActionTypes: (0, a.X7)(d) },
                p = n.Z.register(u);
        },
        861764: (e, t, o) => {
            o.r(t), o.d(t, { DisplayScreen: () => T, default: () => B });
            var r = o(202784),
                a = o(325686),
                n = o(731708),
                i = o(154003),
                s = o(386802),
                l = o(392237),
                c = o(111677),
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
                w = d().a2a2f98e,
                x = d().b4a361c0,
                Z = d().ce494bb4,
                E = d().c783d45e,
                v = d().h306a358;
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
                    return r.createElement(u.Z, { history: t, renderHeader: this._renderModalHeader, title: this._isWelcomeFlow ? C : f }, r.createElement(a.Z, { style: _.root }, r.createElement(n.ZP, { align: "center", color: "gray700", style: [_.description, !e && _.descriptionMarginTop] }, this._isWelcomeFlow ? x : k), r.createElement(a.Z, { style: [_.tweetExample, e && _.tweetExampleMarginHorizontal] }, r.createElement(g.Z, { withTweetBorder: !0 })), r.createElement(n.ZP, { color: "gray700", style: _.componentTitle, weight: "bold" }, Z), r.createElement(a.Z, { style: _.component }, r.createElement(p.Z, null)), r.createElement(n.ZP, { color: "gray700", style: _.componentTitle, weight: "bold" }, E), r.createElement(a.Z, { style: [_.component, _.colorPicker] }, r.createElement(h.Z, null)), r.createElement(n.ZP, { color: "gray700", style: _.componentTitle, weight: "bold" }, v), r.createElement(a.Z, { style: [_.component, _.backgroundPicker] }, r.createElement(m.Z, null)), r.createElement(a.Z, { style: _.buttonContainer }, r.createElement(i.ZP, { onPress: this._handleBackClick, type: "brandFilled" }, this._isWelcomeFlow ? w : y))));
                }
            }
            T.contextType = s.Z;
            const B = (0, b.Z)(T, { page: "display" }),
                _ = l.default.create((e) => ({ root: { paddingBottom: e.spaces.space32, paddingHorizontal: e.spaces.space32 }, header: { marginBottom: e.spaces.space12, marginTop: e.spaces.space32 }, description: { marginBottom: e.spaces.space20 }, descriptionMarginTop: { marginTop: e.spaces.space20 }, componentTitle: { fontSize: e.fontSizes.subtext2, marginBottom: e.spaces.space4 }, component: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.xLarge, marginBottom: e.spaces.space12 }, buttonContainer: { alignItems: "center", marginTop: e.spaces.space16 }, tweetExample: { marginBottom: e.spaces.space16 }, tweetExampleMarginHorizontal: { marginHorizontal: e.spaces.space32 }, backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 }, colorPicker: { paddingVertical: e.spaces.space4 } }));
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                a = o(325686),
                n = o(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(202784),
                a = o(476984),
                n = o.n(a),
                i = o(143778),
                s = o(750410),
                l = o(682830);
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
                            return b ? r.createElement(s.Z, { icon: n, onRequestRetry: d, retryMessage: g }) : o ? r.createElement(l.m, { failureMessage: o }) : h();
                        case u:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
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
            o.d(t, { Z: () => l });
            var r = o(202784),
                a = o(325686),
                n = o(235902),
                i = o(885015),
                s = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return o ? r.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] })), r.createElement(a.Z, { style: c.gapText }, o), r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] }))) : r.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                a = o(202784),
                n = o(325686),
                i = o(392237);
            class s extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...i } = this.props,
                        s = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return a.createElement(n.Z, (0, r.Z)({ style: [t, l.root, o && l.withGutter] }, i), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        16790: (e, t, o) => {
            o.d(t, { Z: () => g });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(913973),
                s = o(803993),
                l = o(731708),
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
                        w = r.useMemo(() => (o === p.CV.dark ? s.Vi : o === p.CV.darker ? s.SR : s.vh), [o]),
                        x = r.useMemo(() => ({ backgroundColor: w.cellBackground, borderColor: h ? n.default.theme.colors.primary : n.default.theme.colors.gray200, borderWidth: h ? "2px" : "1px" }), [h, w.cellBackground]),
                        Z = r.useMemo(() => ({ backgroundColor: h ? n.default.theme.colors.primary : n.default.theme.colors.transparent, borderColor: h ? n.default.theme.colors.primary : w.gray300 }), [h, w.gray300]),
                        E = r.useMemo(() => (h ? k : C), [h, k, C]),
                        v = r.useMemo(() => ({ color: w.text }), [w.text]);
                    function T(e) {
                        f && !h && f(o);
                    }
                    return (
                        r.useEffect(() => {
                            t && y.current && y.current.focus();
                        }, [t, y]),
                        r.createElement(u.Z, { focusable: !1, interactiveStyles: null, style: [m.root, x] }, (t) => r.createElement(r.Fragment, null, r.createElement(u.Z, { focusable: !1, interactiveStyles: E, interactivityState: t, role: "radio", style: m.radioOuterCircle }, r.createElement(a.Z, { style: [m.radioInnerCircle, Z] }, h ? r.createElement(i.default, { style: m.checkMark }) : null)), r.createElement(a.Z, { "aria-hidden": !0, style: m.text }, r.createElement(l.ZP, { numberOfLines: 1, style: v, weight: "bold" }, g)), (0, c.Z)("input", { "aria-label": e || g, checked: h, name: b, style: m.nativeControl, type: "radio", onChange: T, ref: y })))
                    );
                };
            function g({ "aria-label": e, autoFocus: t, layout: o, onChange: n, options: i, value: s }) {
                return r.createElement(
                    a.Z,
                    { "aria-label": e, role: "radiogroup", style: "row" === o ? b.row : b.column },
                    i.map((e) => {
                        return r.createElement(h, {
                            "aria-label": e["aria-label"],
                            autoFocus: t && e.backgroundName === s,
                            backgroundName: e.backgroundName,
                            isSelected: e.backgroundName === s,
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
                s = o(913973),
                l = o(950822),
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
                    return r.createElement(a.Z, { style: [p.container, m] }, r.createElement(d.Z, { interactiveStyles: g, role: "label", style: [p.choice, p.choiceContainer] }, r.createElement(i.default, { style: [p.choice, { color: h }] }), (0, l.Z)("input", { "aria-label": e, name: u, checked: o, onChange: this._handleChange, ref: this._radioRef, style: p.nativeControl, type: "radio" })), o && r.createElement(a.Z, { style: [p.choice, p.checkMarkContainer] }, r.createElement(s.default, { style: [p.choiceSelected, { backgroundColor: h }] })));
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
                    const { "aria-label": e, autoFocus: t, layout: o, onChange: n, options: i, value: s } = this.props,
                        l = "two-rows" === o,
                        c = [b.root, l && b.flexWrap],
                        d = l ? { width: (2 / i.length) * 100 + "%" } : void 0;
                    return r.createElement(
                        a.Z,
                        { "aria-label": e, role: "radiogroup", style: c },
                        i.map(({ "aria-label": e, colorName: o }) => r.createElement(m, { "aria-label": e, autoFocus: t && s === o, colorName: o, isSelected: s === o, key: o, name: this._colorPickerId, onChange: n, style: d })),
                    );
                }
            }
            g.defaultProps = { layout: "one-row" };
            const b = n.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-around" }, flexWrap: { flexWrap: "wrap" } })),
                f = g;
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Display.5fd72a7a.js.map
