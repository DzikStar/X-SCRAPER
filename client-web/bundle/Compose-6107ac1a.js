"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Compose-6107ac1a", "loader.AudioContextVoiceMedia", "icons/IconFoursquareNoMargin-js"],
    {
        625661: (e, t, r) => {
            r.d(t, { ZP: () => h });
            var o = r(202784),
                a = r(614983),
                n = r.n(a),
                l = r(325686),
                s = r(370006),
                i = r(786998),
                d = r(929028),
                c = r(386802);
            function u(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
            }
            class h extends o.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: a, hideBackButton: n, isFullWidth: l, isLarge: d, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: g, subtitle: f, title: v, titleDomId: C, titleIconCell: y, titleIconCellSize: Z, withBackground: w, withWideContainer: B } = this.props,
                        { isModal: k } = this.context,
                        M = n ? c : o.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!w, k, !!b);
                    return o.createElement(o.Fragment, null, o.createElement(i.Z, { centerTitle: t, centeredLogo: r, isFullWidth: l, isLarge: d, leftControl: M, middleControl: h, position: u(p, k, a), rightControl: m, style: g, subtitle: f, title: v, titleDomId: C, titleIconCell: y, titleIconCellSize: Z, withBackground: E, withWideContainer: B }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = d.Z.getBackgroundStyles();
                    return t ? o.createElement(l.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        169576: (e, t, r) => {
            r.d(t, { c: () => g, Z: () => f });
            var o = r(202784),
                a = r(325686),
                n = r(392237),
                l = r(530732),
                s = r(992942),
                i = r(731708),
                d = r(154003),
                c = r(725516),
                u = r(111677),
                h = r.n(u);
            const p = r.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = r.p + "MarchMadnessBannerLight.02bf82ca.png",
                b = { header: h().d231a76a, description: h().heaba5d8, legalDisclaimer: h().i57d3ea0, buttonText: h().a0440af6, image: { darkMode: p, lightMode: m } },
                g = Object.freeze({ MarchMadness: "MarchMadness" }),
                f = ({ buttonOnSameLine: e, link: t, occasion: r, styleOverrides: u, withBackgroundImage: h }) => {
                    const p = (0, c.z)(),
                        m = g[r] || "Occasion",
                        f = h ? `${m}WithBackgroundImage` : m;
                    o.useEffect(() => {
                        p.scribe({ component: f, action: "impression" });
                    }, [p, f]);
                    const C = () => {
                            p.scribe({ component: f, action: "click", element: "card" });
                        },
                        { backgroundcolor: y, buttonSize: Z, cardWidth: w, marginbottom: B, textcolor: k } = u ?? {},
                        M = y ? n.default.theme.colors[y] : n.default.theme.colors.gray0,
                        E = k ? n.default.theme.colors[k] : n.default.theme.colors.gray900,
                        x = B ? n.default.theme.spaces[B] : n.default.theme.spaces.space16,
                        S = { [g.MarchMadness]: { header: b.header, description: b.description, legalDisclaimer: b.legalDisclaimer, buttonText: b.buttonText, image: b.image } }[r];
                    return h ? o.createElement(l.Z, { interactiveStyles: null, link: t, onPress: C, style: v.bannerContainer }, o.createElement(s.Z, { resizeMode: "contain", source: { uri: "light" === n.default.theme.paletteName ? S.image.lightMode : S.image.darkMode }, style: { height: 85 } })) : o.createElement(a.Z, { style: [v.card, { backgroundColor: M }, { maxWidth: w }, { marginBottom: x }], testID: "popupCard" }, o.createElement(a.Z, { style: e ? v.horizontalContent : v.verticalContent }, o.createElement(a.Z, { style: e ? v.textContainer : null }, o.createElement(i.ZP, { size: "headline2", style: [v.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, S.header), o.createElement(i.ZP, { size: "subtext1", style: [v.popupDescription, { color: E }] }, S.description, " ", e ? null : S.legalDisclaimer)), o.createElement(a.Z, { style: v.buttonContainer }, o.createElement(d.ZP, { backgroundColor: "light" === n.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: C, size: "medium", style: [v.popupButton, { width: Z }] }, S.buttonText), e && o.createElement(i.ZP, { size: "subtext3", style: [v.legalDisclaimer, { color: E }] }, S.legalDisclaimer))));
                },
                v = n.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        941399: (e, t, r) => {
            r.d(t, { F: () => i });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                l = r(392237);
            function s(e) {
                const t = e - new Date().getTime(),
                    r = 1e3 * Math.round(t < 0 ? 0 : t / 1e3),
                    o = new Date(r).toLocaleString("default", { minute: "numeric", second: "numeric" }),
                    [a, n] = o.split(":");
                return { minutes: +a, seconds: +n, formatted: o };
            }
            const i = ({ "aria-label": e, expiration: t, getAccessibilityLiveLabel: r, onTimeElapsed: l }) => {
                    const i = o.useRef(r),
                        c = o.useRef(l);
                    (i.current = r), (c.current = l);
                    const [u, h] = o.useState(() => s(+t)),
                        [p, m] = o.useState(() => r?.(u));
                    o.useEffect(() => {
                        const e = setInterval(() => {
                            const r = s(+t),
                                o = i.current?.(r);
                            m(o), h(r), "00:00" === r.formatted && (clearInterval(e), c.current?.());
                        }, 500);
                        return () => clearInterval(e);
                    }, [t]);
                    const b = "function" == typeof e ? e(u) : e;
                    return o.createElement(a.Z, { style: d.root }, o.createElement(n.ZP, { "aria-label": b && `${b}`, color: "gray900", testID: "displayedCountdown", weight: "medium" }, u.formatted, p && o.createElement(a.Z, { "aria-label": p, "aria-live": "polite" })));
                },
                d = l.default.create((e) => ({ root: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space2, paddingBottom: e.spaces.space4, paddingEnd: 6, paddingStart: 6, paddingTop: e.spaces.space4 } }));
        },
        290402: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(807896),
                a = r(202784),
                n = r(182056),
                l = r(879113),
                s = r(392237),
                i = r(111677),
                d = r.n(i),
                c = r(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, r) => {
                    const s = n.Z.isOnline();
                    return a.createElement(l.Z, (0, o.Z)({}, t, { icon: s ? void 0 : a.createElement(c.default, { style: p.icon }), retryMessage: s ? e : u }));
                },
                p = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(h);
        },
        980407: (e, t, r) => {
            r.d(t, { Z: () => b, w: () => p });
            var o = r(202784),
                a = r(325686),
                n = r(108362),
                l = r(386802),
                s = r(392237),
                i = r(652904),
                d = r(555079),
                c = r(625661),
                u = r(449067),
                h = r(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: n, centerTitle: l, hideBackButton: s, history: i, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, rightControl: g, secondaryBar: f, subtitle: v, title: C } = this.props,
                                { isModal: y } = this.context;
                            return o.createElement(a.Z, { style: y ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(c.ZP, { backButtonType: r || (y ? "close" : "back"), backLocation: n, centerTitle: l, fixed: !y, hideBackButton: s, history: i, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, ref: e, rightControl: g, secondaryBar: f, style: [y && m.appBarModal, t], subtitle: v, title: C, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: l, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: p, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: f } = this.context,
                        v = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(i.Z, null, o.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: b }), o.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, f && m.rootModal] }, !f && v, o.createElement(n.Z, { isFullWidth: d, isLarge: c, style: [m.container, f && m.containerModal, l] }, f ? o.createElement(h.Z, { style: m.viewport }, v, r) : r), t ? o.createElement(a.Z, { style: [m.bottomBarModal, !f && !g && m.bottomBarMobile] }, o.createElement(n.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = l.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        334346: (e, t, r) => {
            r.d(t, { C: () => i, Z: () => s });
            var o = r(807896),
                a = r(202784),
                n = r(524084),
                l = r(768572);
            const s = "stable_sort_index",
                i = a.forwardRef((e, t) => {
                    const r = e.cacheKey;
                    return a.createElement(l.ZP, { identifier: r }, a.createElement(n.Z, (0, o.Z)({ ref: t }, e)));
                });
        },
        231214: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(202784);
            const o = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([r.e("icons.9"), r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), r.e("ondemand.IntentPrompt")]).then(r.bind(r, 958679)),
            });
        },
        652904: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                a = r(500002),
                n = r(668214),
                l = r(997174),
                s = r(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class d extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: o },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (i = !0));
                    const d = a || s;
                    ((d && a !== s) || (!d && r !== n) || o !== l || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, a.ZP)(i(d));
        },
        62857: (e, t, r) => {
            r.d(t, { Z: () => x });
            var o = r(807896),
                a = r(202784),
                n = r(476984),
                l = r.n(n),
                s = r(111677),
                i = r.n(s),
                d = r(615656),
                c = r(290402),
                u = r(325686),
                h = r(240089),
                p = r(663550),
                m = r(409438);
            const b = ({ displayMode: e = m.Z.UserDetailed, renderUserCell: t, userIds: r }) =>
                a.createElement(
                    u.Z,
                    { role: "list" },
                    r.map((r, o) => (t ? t(r) : a.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: r, promotedItemType: p.bj.USER, userId: r, withFollowsYou: !0 }))),
                );
            var g = r(312771),
                f = r(71620),
                v = r(973572),
                C = r(668214),
                y = r(919022);
            const Z = (e, t) => t.userIds,
                w = (e, t) => {
                    const { filterPredicate: r = (e) => !!e, userIds: o } = t;
                    return o.filter((t) => {
                        const o = y.ZP.select(e, t);
                        return !!o && r(o);
                    });
                },
                B = (e, t) => {
                    const { userIds: r } = t;
                    return r.reduce((t, r) => {
                        const o = y.ZP.selectFetchStatus(e, r);
                        return o && (t[r] = o === g.ZP.NONE ? g.ZP.LOADING : o), t;
                    }, {});
                },
                k = (0, C.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, v.Z)(w, (e) => e),
                        fetchStatus: (0, v.Z)(w, B, Z, (e, t, r) => {
                            let o = g.ZP.LOADED;
                            for (let a = 0; a < r.length; a++) {
                                const n = r[a];
                                if (-1 === e.indexOf(n)) {
                                    const e = t[n] || g.ZP.LOADING;
                                    o = o === g.ZP.LOADED ? e : o;
                                }
                                if (o === g.ZP.LOADED) break;
                            }
                            return o;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: y.ZP.fetchManyIfNeeded })),
                M = i().f5b426c2;
            class E extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: r, fetchUsersIfNeeded: n, filterPredicate: l, userIds: s, ...i } = this.props;
                            return a.createElement(b, (0, o.Z)({}, i, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    l()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return a.createElement(c.Z, { "aria-label": M, fetchStatus: this.state.allUsersUnavailable ? g.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: r, userIds: o } = this.props;
                    r(o).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [d.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [d.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const x = k(E);
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(325686),
                n = r(392237);
            function l({ spacing: e, style: t }) {
                return o.createElement(a.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                a = r(476984),
                n = r.n(a),
                l = r(143778),
                s = r(750410),
                i = r(682830);
            const d = "failed",
                c = "loaded",
                u = "loading",
                h = "none";
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === c,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: l, onRequestRetry: c, render: p, renderFailure: m, retryMessage: b, retryable: g } = this.props;
                    switch (a) {
                        case d:
                            return g ? o.createElement(s.Z, { icon: n, onRequestRetry: c, retryMessage: b }) : r ? o.createElement(i.m, { failureMessage: r }) : m();
                        case u:
                            return o.createElement(i.J, { "aria-label": e, color: t, loadingMessage: l });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686),
                n = r(235902),
                l = r(885015),
                s = r(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: i } = n.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? o.createElement(l.Z, { style: !t && d.root, withGutter: !0 }, o.createElement(a.Z, { style: d.gapColumn }, o.createElement(a.Z, { style: [d.gap, c] })), o.createElement(a.Z, { style: d.gapText }, r), o.createElement(a.Z, { style: d.gapColumn }, o.createElement(a.Z, { style: [d.gap, c] }))) : o.createElement(a.Z, { style: [!t && d.root, i() && d.rootRedesign, d.gap, c] });
            }
            const d = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                l = r(392237);
            class s extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        s = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, i.column, r && i.withGutterColumn] }));
                    return a.createElement(n.Z, (0, o.Z)({ style: [t, i.root, r && i.withGutter] }, l), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const i = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = s;
        },
        171709: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)(
                    "svg",
                    {
                        ...e,
                        role: e["aria-label"] ? e.role || "img" : void 0,
                        "aria-hidden": void 0 === e["aria-label"],
                        style: [l.Z.root, e.style],
                        viewBox: "0 0 158 20",
                        children: o.createElement(
                            "g",
                            null,
                            o.createElement("path", {
                                d: "M1.29 9.333v3.992H0V4.31h3.412c.876 0 1.443.22 1.88.593.54.464.89 1.147.89 1.92 0 .772-.35 1.454-.89 1.918-.437.375-1.004.593-1.88.593H1.29M3.35 8.11c.618 0 .953-.155 1.185-.4.22-.23.36-.54.36-.888s-.142-.657-.36-.888c-.232-.245-.567-.4-1.185-.4H1.29V8.11h2.06zm6.155-.966c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.785-1.996-1.905-1.996S7.6 9.192 7.6 10.3c0 1.107.784 1.996 1.905 1.996zm9.025-5.021l1.662 4.134 1.66-4.134h1.263l-2.46 6.053h-.85l-1.7-4.25-1.7 4.25h-.85l-2.458-6.053h1.262l1.66 4.134 1.66-4.134h.85m6.091 3.284c.065 1.017.903 1.83 1.958 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.315 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258H24.62m.104-1.03h3.297c-.18-.774-.875-1.315-1.596-1.315-.786 0-1.494.528-1.7 1.314zm9.066-1.173c-.143-.04-.284-.052-.477-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.295-.412.926-.824 1.815-.824.13 0 .335.013.476.04l-.14 1.17m1.647 2.203c.064 1.017.902 1.83 1.957 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.314 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.663m.103-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.786 0-1.494.528-1.7 1.314zm10.534 3.244c-.49.438-1.146.682-1.867.682-.54 0-1.108-.154-1.52-.4-.915-.54-1.545-1.544-1.545-2.755 0-1.212.645-2.23 1.56-2.77.41-.245.913-.386 1.48-.386.657 0 1.314.206 1.854.657V4.183h1.223v9.143h-1.185v-.553m-.038-3.606c-.373-.49-.992-.863-1.726-.863-1.172 0-1.945.94-1.945 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm7.815 4.159h-1.185V4.182h1.224v3.62c.54-.452 1.196-.658 1.853-.658.567 0 1.07.142 1.48.386.915.54 1.56 1.558 1.56 2.77 0 1.21-.632 2.214-1.546 2.755-.412.245-.98.4-1.52.4-.72 0-1.378-.245-1.867-.683v.554m.04-1.893c.41.554 1.042.863 1.66.863 1.172 0 2.01-.914 2.01-1.996 0-1.056-.773-1.996-1.946-1.996-.734 0-1.352.374-1.725.863v2.266zm6.296 4.983l1.635-3.72-2.588-5.423h1.313l1.893 3.992 1.74-3.992h1.287l-3.98 9.143h-1.3m39.407-8.563v1.223H96.63v4.25h-1.288V4.31h5.15v1.225H96.63v2.318h2.962m4.223-.709c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.784-1.996-1.905-1.996-1.12 0-1.906.89-1.906 1.996 0 1.107.785 1.996 1.905 1.996zm4.841.143c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.13.953.348 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.648-.384-2.15-1.015m10.25-4.082c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.186v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.144 1.17m1.48 3.362c.567.438 1.185.67 1.79.67.528 0 1.056-.283 1.056-.76 0-.695-1.005-.734-1.893-1.03-.735-.244-1.392-.708-1.392-1.558 0-1.3 1.16-1.893 2.24-1.893.89 0 1.533.283 2.01.67l-.63.876c-.374-.282-.812-.475-1.302-.475-.592 0-1.095.283-1.095.76 0 .412.477.554 1.083.708.953.245 2.202.67 2.202 1.92 0 1.145-1.07 1.853-2.254 1.853-.965 0-1.776-.296-2.446-.837l.632-.904m8.228 1.738c-.54 0-1.108-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.412-.245.914-.386 1.48-.386.684 0 1.34.206 1.894.682v-.553h1.185v9.143h-1.224v-3.62c-.49.427-1.107.658-1.828.658m1.828-4.288c-.373-.49-.99-.863-1.726-.863-1.172 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm3.45 3.272c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.128.953.347 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.647-.384-2.15-1.015m11.333.335c-.49.438-1.146.682-1.867.682-.54 0-1.107-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.413-.245.916-.386 1.482-.386.683 0 1.34.206 1.893.682v-.553h1.185v6.052h-1.185v-.553m-.04-3.606c-.372-.49-.99-.863-1.724-.863-1.17 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm6.232-.81c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.142 1.17m1.905 2.203c.065 1.017.902 1.83 1.957 1.83.903 0 1.392-.44 1.74-.825l.797.76c-.45.58-1.313 1.133-2.55 1.133-1.764 0-3.13-1.34-3.13-3.155 0-1.816 1.237-3.155 2.95-3.155 1.687 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.66m.102-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.785 0-1.493.528-1.7 1.314zM86.48 0H75.813C74.34 0 73.91 1.107 73.91 1.805v16.947c0 .786.42 1.077.658 1.173.237.097.892.177 1.284-.276 0 0 5.105-5.863 5.188-5.954.08-.09.17-.092.22-.092h3.234c1.37 0 1.59-.992 1.732-1.567.12-.48 1.455-7.32 1.9-9.488C88.466.89 88.046 0 86.48 0m-.254 12.037c.12-.48 1.455-7.32 1.9-9.488m-2.275.337l-.447 2.333c-.053.253-.302.49-.596.49l-4.156-.005c-.467 0-.87.352-.87.82v.508c0 .467.38.85.85.85h3.524c.33 0 .608.31.537.663-.07.353-.438 2.216-.48 2.41-.04.192-.246.454-.576.454h-2.878c-.598.02-.726.023-1.077.46-.352.435-3.506 4.222-3.506 4.222-.03.037-.062.026-.062-.014V2.852c0-.298.26-.648.648-.648h8.56c.317 0 .61.296.53.683z",
                            }),
                        ),
                    },
                    { writingDirection: t },
                );
            };
            s.metadata = { width: 158, height: 20 };
            const i = s;
        },
        648539: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19 14h2v3h-2v-3zM3 14H1v3h2v-3zm.5 7c-.276 0-.5-.225-.5-.5V19H1v1.5C1 21.879 2.122 23 3.5 23H5v-2H3.5zM10 5V3H7v2h3zm-7 .5c0-.275.224-.5.5-.5H5V3H3.5C2.122 3 1 4.121 1 5.5V7h2V5.5zM12 21v2h3v-2h-3zm-5 0v2h3v-2H7zm12-.5c0 .275-.224.5-.5.5H17v2h1.5c1.378 0 2.5-1.121 2.5-2.5V19h-2v1.5zM3 9H1v3h2V9zm3 9h5v-2H6v2zM18-.1c3.364 0 6.1 2.736 6.1 6.1s-2.736 6.1-6.1 6.1-6.1-2.736-6.1-6.1S14.636-.1 18-.1zm0 2c-2.261 0-4.1 1.839-4.1 4.1s1.839 4.1 4.1 4.1 4.1-1.839 4.1-4.1-1.839-4.1-4.1-4.1zm.5 3.1H15v2h6V5h-2.5zM6 10h4V8H6v2zm0 4h7v-2H6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => a, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (r, o, a) => {
                        const n = t ? t(o, a, e) : !!o;
                        return n && r[0].push(o), !n && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Compose-6107ac1a.580add7a.js.map
