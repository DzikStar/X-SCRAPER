"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Display", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        169576: (e, t, o) => {
            o.d(t, { c: () => b, Z: () => y });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(530732),
                l = o(992942),
                s = o(731708),
                c = o(154003),
                d = o(725516),
                p = o(111677),
                m = o.n(p);
            const u = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                h = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: m().d231a76a, description: m().heaba5d8, legalDisclaimer: m().i57d3ea0, buttonText: m().a0440af6, image: { darkMode: u, lightMode: h } },
                b = Object.freeze({ MarchMadness: "MarchMadness" }),
                y = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: p, withBackgroundImage: m }) => {
                    const u = (0, d.z)(),
                        h = b[o] || "Occasion",
                        y = m ? `${h}WithBackgroundImage` : h;
                    r.useEffect(() => {
                        u.scribe({ component: y, action: "impression" });
                    }, [u, y]);
                    const Z = () => {
                            u.scribe({ component: y, action: "click", element: "card" });
                        },
                        { backgroundcolor: C, buttonSize: B, cardWidth: x, marginbottom: w, textcolor: k } = p ?? {},
                        E = C ? n.default.theme.colors[C] : n.default.theme.colors.gray0,
                        M = k ? n.default.theme.colors[k] : n.default.theme.colors.gray900,
                        T = w ? n.default.theme.spaces[w] : n.default.theme.spaces.space16,
                        v = { [b.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[o];
                    return m ? r.createElement(i.Z, { interactiveStyles: null, link: t, onPress: Z, style: f.bannerContainer }, r.createElement(l.Z, { resizeMode: "contain", source: { uri: "light" === n.default.theme.paletteName ? v.image.lightMode : v.image.darkMode }, style: { height: 85 } })) : r.createElement(a.Z, { style: [f.card, { backgroundColor: E }, { maxWidth: x }, { marginBottom: T }], testID: "popupCard" }, r.createElement(a.Z, { style: e ? f.horizontalContent : f.verticalContent }, r.createElement(a.Z, { style: e ? f.textContainer : null }, r.createElement(s.ZP, { size: "headline2", style: [f.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, v.header), r.createElement(s.ZP, { size: "subtext1", style: [f.popupDescription, { color: M }] }, v.description, " ", e ? null : v.legalDisclaimer)), r.createElement(a.Z, { style: f.buttonContainer }, r.createElement(c.ZP, { backgroundColor: "light" === n.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: Z, size: "medium", style: [f.popupButton, { width: B }] }, v.buttonText), e && r.createElement(s.ZP, { size: "subtext3", style: [f.legalDisclaimer, { color: M }] }, v.legalDisclaimer))));
                },
                f = n.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => u });
            var r = o(202784),
                a = o(325686),
                n = o(108362),
                i = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                m = o(715601);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: i, hideBackButton: l, history: s, isFullWidth: p, isLarge: m, middleControl: u, onBackClick: g, rightControl: b, secondaryBar: y, subtitle: f, title: Z } = this.props,
                                { isModal: C } = this.context;
                            return r.createElement(a.Z, { style: C ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !C, hideBackButton: l, history: s, isFullWidth: p, isLarge: m, middleControl: u, onBackClick: g, ref: e, rightControl: b, secondaryBar: y, style: [C && h.appBarModal, t], subtitle: f, title: Z, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: u, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: y } = this.context,
                        f = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(p.Z.Configure, { documentTitle: l, headerless: !0, title: g }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, y && h.rootModal] }, !y && f, r.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [h.container, y && h.containerModal, i] }, y ? r.createElement(m.Z, { style: h.viewport }, f, o) : o), t ? r.createElement(a.Z, { style: [h.bottomBarModal, !y && !b && h.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = i.Z);
            const h = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = u;
        },
        861764: (e, t, o) => {
            o.r(t), o.d(t, { DisplayScreen: () => M, default: () => T });
            var r = o(202784),
                a = o(325686),
                n = o(731708),
                i = o(154003),
                l = o(386802),
                s = o(392237),
                c = o(111677),
                d = o.n(c),
                p = o(980407),
                m = o(388185),
                u = o(875984),
                h = o(927477),
                g = o(53140),
                b = o(725516);
            const y = d().b5b0afa4,
                f = d().b772cd66,
                Z = d().ec5880e6,
                C = d().babfa32c,
                B = d().a2a2f98e,
                x = d().b4a361c0,
                w = d().ce494bb4,
                k = d().c783d45e,
                E = d().h306a358;
            class M extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderModalHeader = (e) => (this.context.isModal ? r.createElement(a.Z, { style: v.header }, r.createElement(n.ZP, { align: "center", size: "title4", weight: "heavy" }, this._isWelcomeFlow ? C : y)) : e)),
                        (this._handleBackClick = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._isWelcomeFlow = "true" === e.location.query.welcome);
                }
                render() {
                    const { isModal: e } = this.context,
                        { history: t } = this.props;
                    return r.createElement(p.Z, { history: t, renderHeader: this._renderModalHeader, title: this._isWelcomeFlow ? C : y }, r.createElement(a.Z, { style: v.root }, r.createElement(n.ZP, { align: "center", color: "gray700", style: [v.description, !e && v.descriptionMarginTop] }, this._isWelcomeFlow ? x : Z), r.createElement(a.Z, { style: [v.tweetExample, e && v.tweetExampleMarginHorizontal] }, r.createElement(g.Z, { withTweetBorder: !0 })), r.createElement(n.ZP, { color: "gray700", style: v.componentTitle, weight: "bold" }, w), r.createElement(a.Z, { style: v.component }, r.createElement(m.Z, null)), r.createElement(n.ZP, { color: "gray700", style: v.componentTitle, weight: "bold" }, k), r.createElement(a.Z, { style: [v.component, v.colorPicker] }, r.createElement(h.Z, null)), r.createElement(n.ZP, { color: "gray700", style: v.componentTitle, weight: "bold" }, E), r.createElement(a.Z, { style: [v.component, v.backgroundPicker] }, r.createElement(u.Z, null)), r.createElement(a.Z, { style: v.buttonContainer }, r.createElement(i.ZP, { onPress: this._handleBackClick, type: "brandFilled" }, this._isWelcomeFlow ? B : f))));
                }
            }
            M.contextType = l.Z;
            const T = (0, b.Z)(M, { page: "display" }),
                v = s.default.create((e) => ({ root: { paddingBottom: e.spaces.space32, paddingHorizontal: e.spaces.space32 }, header: { marginBottom: e.spaces.space12, marginTop: e.spaces.space32 }, description: { marginBottom: e.spaces.space20 }, descriptionMarginTop: { marginTop: e.spaces.space20 }, componentTitle: { fontSize: e.fontSizes.subtext2, marginBottom: e.spaces.space4 }, component: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.xLarge, marginBottom: e.spaces.space12 }, buttonContainer: { alignItems: "center", marginTop: e.spaces.space16 }, tweetExample: { marginBottom: e.spaces.space16 }, tweetExampleMarginHorizontal: { marginHorizontal: e.spaces.space32 }, backgroundPicker: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space4 }, colorPicker: { paddingVertical: e.spaces.space4 } }));
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
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        465233: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(716406);
            function a(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(a) : (0, r.Z)(e, (e) => a(e));
            }
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Display.77c0a6ca.js.map
