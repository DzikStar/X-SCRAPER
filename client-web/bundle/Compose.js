"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Compose", "loader.AudioContextVoiceMedia"],
    {
        625661: (e, t, s) => {
            s.d(t, { ZP: () => h });
            var o = s(202784),
                n = s(614983),
                r = s.n(n),
                i = s(325686),
                a = s(370006),
                l = s(786998),
                c = s(929028),
                d = s(386802);
            function u(e, t, s) {
                return e || (!t && s ? "fixed" : void 0);
            }
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: s, fixed: n, hideBackButton: r, isFullWidth: i, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: g, subtitle: f, title: y, titleDomId: C, titleIconCell: E, titleIconCellSize: _, withBackground: S, withWideContainer: T } = this.props,
                        { isModal: w } = this.context,
                        k = r ? d : o.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, s) {
                            return e && !(t && s);
                        })(!!S, w, !!b);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: s, isFullWidth: i, isLarge: c, leftControl: k, middleControl: h, position: u(p, w, n), rightControl: m, style: g, subtitle: f, title: y, titleDomId: C, titleIconCell: E, titleIconCellSize: _, withBackground: Z, withWideContainer: T }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        s = c.Z.getBackgroundStyles();
                    return t ? o.createElement(i.Z, { style: !!e && s }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        169576: (e, t, s) => {
            s.d(t, { c: () => g, Z: () => f });
            var o = s(202784),
                n = s(325686),
                r = s(392237),
                i = s(530732),
                a = s(992942),
                l = s(731708),
                c = s(154003),
                d = s(725516),
                u = s(111677),
                h = s.n(u);
            const p = s.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = s.p + "MarchMadnessBannerLight.02bf82ca.png",
                b = { header: h().d231a76a, description: h().heaba5d8, legalDisclaimer: h().i57d3ea0, buttonText: h().a0440af6, image: { darkMode: p, lightMode: m } },
                g = Object.freeze({ MarchMadness: "MarchMadness" }),
                f = ({ buttonOnSameLine: e, link: t, occasion: s, styleOverrides: u, withBackgroundImage: h }) => {
                    const p = (0, d.z)(),
                        m = g[s] || "Occasion",
                        f = h ? `${m}WithBackgroundImage` : m;
                    o.useEffect(() => {
                        p.scribe({ component: f, action: "impression" });
                    }, [p, f]);
                    const C = () => {
                            p.scribe({ component: f, action: "click", element: "card" });
                        },
                        { backgroundcolor: E, buttonSize: _, cardWidth: S, marginbottom: T, textcolor: w } = u ?? {},
                        k = E ? r.default.theme.colors[E] : r.default.theme.colors.gray0,
                        Z = w ? r.default.theme.colors[w] : r.default.theme.colors.gray900,
                        R = T ? r.default.theme.spaces[T] : r.default.theme.spaces.space16,
                        B = { [g.MarchMadness]: { header: b.header, description: b.description, legalDisclaimer: b.legalDisclaimer, buttonText: b.buttonText, image: b.image } }[s];
                    return h ? o.createElement(i.Z, { interactiveStyles: null, link: t, onPress: C, style: y.bannerContainer }, o.createElement(a.Z, { resizeMode: "contain", source: { uri: "light" === r.default.theme.paletteName ? B.image.lightMode : B.image.darkMode }, style: { height: 85 } })) : o.createElement(n.Z, { style: [y.card, { backgroundColor: k }, { maxWidth: S }, { marginBottom: R }], testID: "popupCard" }, o.createElement(n.Z, { style: e ? y.horizontalContent : y.verticalContent }, o.createElement(n.Z, { style: e ? y.textContainer : null }, o.createElement(l.ZP, { size: "headline2", style: [y.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, B.header), o.createElement(l.ZP, { size: "subtext1", style: [y.popupDescription, { color: Z }] }, B.description, " ", e ? null : B.legalDisclaimer)), o.createElement(n.Z, { style: y.buttonContainer }, o.createElement(c.ZP, { backgroundColor: "light" === r.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: C, size: "medium", style: [y.popupButton, { width: _ }] }, B.buttonText), e && o.createElement(l.ZP, { size: "subtext3", style: [y.legalDisclaimer, { color: Z }] }, B.legalDisclaimer))));
                },
                y = r.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        290402: (e, t, s) => {
            s.d(t, { Z: () => m });
            var o = s(807896),
                n = s(202784),
                r = s(182056),
                i = s(879113),
                a = s(392237),
                l = s(111677),
                c = s.n(l),
                d = s(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, s) => {
                    const a = r.Z.isOnline();
                    return n.createElement(i.Z, (0, o.Z)({}, t, { icon: a ? void 0 : n.createElement(d.default, { style: p.icon }), retryMessage: a ? e : u }));
                },
                p = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        980407: (e, t, s) => {
            s.d(t, { Z: () => b, w: () => p });
            var o = s(202784),
                n = s(325686),
                r = s(108362),
                i = s(386802),
                a = s(392237),
                l = s(652904),
                c = s(555079),
                d = s(625661),
                u = s(449067),
                h = s(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: s, backLocation: r, centerTitle: i, hideBackButton: a, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, rightControl: g, secondaryBar: f, subtitle: y, title: C } = this.props,
                                { isModal: E } = this.context;
                            return o.createElement(n.Z, { style: E ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(d.ZP, { backButtonType: s || (E ? "close" : "back"), backLocation: r, centerTitle: i, fixed: !E, hideBackButton: a, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, ref: e, rightControl: g, secondaryBar: f, style: [E && m.appBarModal, t], subtitle: y, title: C, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: s } = this.context;
                            t && (s ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: s, containerStyle: i, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: p, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: f } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(l.Z, null, o.createElement(u.Z.Configure, { documentTitle: a, headerless: !0, title: b }), o.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, f && m.rootModal] }, !f && y, o.createElement(r.Z, { isFullWidth: c, isLarge: d, style: [m.container, f && m.containerModal, i] }, f ? o.createElement(h.Z, { style: m.viewport }, y, s) : s), t ? o.createElement(n.Z, { style: [m.bottomBarModal, !f && !g && m.bottomBarMobile] }, o.createElement(r.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = i.Z);
            const m = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        334346: (e, t, s) => {
            s.d(t, { C: () => l, Z: () => a });
            var o = s(807896),
                n = s(202784),
                r = s(524084),
                i = s(768572);
            const a = "stable_sort_index",
                l = n.forwardRef((e, t) => {
                    const s = e.cacheKey;
                    return n.createElement(i.ZP, { identifier: s }, n.createElement(r.Z, (0, o.Z)({ ref: t }, e)));
                });
        },
        231214: (e, t, s) => {
            s.d(t, { Z: () => o });
            s(202784);
            const o = (0, s(523561).Z)({ loader: () => Promise.all([s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), s.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), s.e("ondemand.IntentPrompt")]).then(s.bind(s, 958679)) });
        },
        652904: (e, t, s) => {
            s.d(t, { Z: () => d });
            var o = s(202784),
                n = s(500002),
                r = s(668214),
                i = s(997174),
                a = s(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: s, search: o },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== s ? (this._isInBackground = !0) : this._isInBackground && t.pathname === s && ((this._isInBackground = !1), (l = !0));
                    const c = n || a;
                    ((c && n !== a) || (!c && s !== r) || o !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: s, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), s(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(l(c));
        },
        62857: (e, t, s) => {
            s.d(t, { Z: () => R });
            var o = s(807896),
                n = s(202784),
                r = s(476984),
                i = s.n(r),
                a = s(111677),
                l = s.n(a),
                c = s(615656),
                d = s(290402),
                u = s(325686),
                h = s(240089),
                p = s(663550),
                m = s(409438);
            const b = ({ displayMode: e = m.Z.UserDetailed, renderUserCell: t, userIds: s }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    s.map((s, o) => (t ? t(s) : n.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: s, promotedItemType: p.bj.USER, userId: s, withFollowsYou: !0 }))),
                );
            var g = s(312771),
                f = s(71620),
                y = s(973572),
                C = s(668214),
                E = s(919022);
            const _ = (e, t) => t.userIds,
                S = (e, t) => {
                    const { filterPredicate: s = (e) => !!e, userIds: o } = t;
                    return o.filter((t) => {
                        const o = E.ZP.select(e, t);
                        return !!o && s(o);
                    });
                },
                T = (e, t) => {
                    const { userIds: s } = t;
                    return s.reduce((t, s) => {
                        const o = E.ZP.selectFetchStatus(e, s);
                        return o && (t[s] = o === g.ZP.NONE ? g.ZP.LOADING : o), t;
                    }, {});
                },
                w = (0, C.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, y.Z)(S, (e) => e),
                        fetchStatus: (0, y.Z)(S, T, _, (e, t, s) => {
                            let o = g.ZP.LOADED;
                            for (let n = 0; n < s.length; n++) {
                                const r = s[n];
                                if (-1 === e.indexOf(r)) {
                                    const e = t[r] || g.ZP.LOADING;
                                    o = o === g.ZP.LOADED ? e : o;
                                }
                                if (o === g.ZP.LOADED) break;
                            }
                            return o;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: E.ZP.fetchManyIfNeeded })),
                k = l().f5b426c2;
            class Z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: s, fetchUsersIfNeeded: r, filterPredicate: i, userIds: a, ...l } = this.props;
                            return n.createElement(b, (0, o.Z)({}, l, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    i()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return n.createElement(d.Z, { "aria-label": k, fetchStatus: this.state.allUsersUnavailable ? g.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: s, userIds: o } = this.props;
                    s(o).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [c.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [c.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const R = w(Z);
        },
        524084: (e, t, s) => {
            s.d(t, { Z: () => i });
            var o = s(202784),
                n = s(523561),
                r = s(195560);
            const i = (0, n.Z)({ loader: () => s.e("loader.AbsolutePower").then(s.bind(s, 590136)), renderPlaceholder: (e, t) => o.createElement(r.Z, { hasError: e, onRetry: t }) });
        },
        376293: (e, t, s) => {
            s.d(t, { $f: () => w, KV: () => f, LI: () => v, SC: () => T, Vt: () => E, ed: () => I, op: () => k });
            var o = s(202784),
                n = s(190286),
                r = s(111677),
                i = s.n(r),
                a = s(616894),
                l = s(314948),
                c = s(516951),
                d = s(163390);
            const u = i().cfd2f35e,
                h = i().f9e45cfb,
                p = i().fcd4d489,
                m = i().a6450e84,
                b = i().g353ad73,
                g = i().ad00a739,
                f = i().a9fd20be,
                y = i().j546fb79,
                C = i().c9623eeb,
                E = i().e133be4e,
                _ = i().he43bca4,
                S = i().f5f01af6,
                T = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                w = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? g({ screenName: e }) : b({ screenName: e }) }),
                k = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: s, source: o, testID: n, unblockAction: r, unblockSubtext: i, user: a }) => {
                    let l,
                        u = c.Z;
                    const h = v(a, s);
                    switch (o) {
                        case T.PROFILE:
                        case T.LIST_DETAIL:
                        case T.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? r(h) : e(h);
                            };
                            break;
                        case T.TWEET:
                        case T.TWEET_CARET:
                        case T.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    a.blocking ? r(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: n, shortcutKey: l, Icon: Z(a.blocking), text: B(a), subText: R({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                Z = (e) => (e ? l.default : a.default),
                R = ({ blockSubtext: e, unblockSubtext: t, user: s }) => (!s.blocking && e ? e(s.screen_name) : s.blocking ? t : void 0),
                B = (e) => (e.blocking ? C({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                v = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: E, text: t ? S : _ }))(e.screen_name, t) : w(e.screen_name, t)),
                I = ({ confirmation: e, handleConfirm: t, onClose: s }) => {
                    const { confirmButtonType: r, headline: i, label: a, text: l } = e;
                    return o.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: r, headline: i, onCancel: s, onConfirm: t, text: l });
                };
        },
        712816: (e, t, s) => {
            s.d(t, { d: () => n });
            var o = s(111677);
            const n = { defaultToast: { text: s.n(o)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, s) => {
            s.d(t, { D: () => n });
            var o = s(111677);
            const n = { defaultToast: { text: s.n(o)().ca96fe6e }, showToast: !0 };
        },
        973572: (e, t, s) => {
            s.d(t, { Z: () => i });
            var o = s(476984),
                n = s.n(o),
                r = s(24949);
            const i = (0, r.wN)(r.PW, n());
        },
        163390: (e, t, s) => {
            s.d(t, { OX: () => h, Od: () => d, PN: () => p, uq: () => c, wR: () => b });
            var o = s(251067),
                n = s(522171),
                r = s(111677),
                i = s.n(r),
                a = s(912021),
                l = s(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: i().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: c.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: c.search, universal: !1 },
                    { description: i().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: c.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: c.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: c.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                m = (0, a.Z)((e) => {
                    const t = d(e),
                        s = h(),
                        o = p(),
                        n = {};
                    return (
                        [...s, ...o, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                b = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, s) => {
            s.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        492057: (e, t, s) => {
            s.d(t, { BL: () => n, tc: () => r });
            var o = s(491963);
            const n = (e, t) => {
                    if (t.communityId) return o.ZP.select(e, t.communityId);
                },
                r = (e, t, s) => {
                    const n = s || t.communityId;
                    if (n) return o.ZP.selectFetchStatus(e, n);
                };
        },
        964917: (e, t, s) => {
            s.d(t, { FP: () => g, Hf: () => c, Q$: () => f, UD: () => b, V2: () => u, yD: () => m });
            var o = s(439058),
                n = s(499627),
                r = s(917799),
                i = s(312771);
            const a = "scheduledTweets",
                l = { fetchStatus: i.ZP.NONE, scheduledTweets: [] },
                c = "FETCH_SCHEDULED_TWEETS",
                d = Object.freeze({ REQUEST: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST", SUCCESS: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS", FAILURE: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE" }),
                u = "DELETE_SCHEDULED_TWEET",
                h = Object.freeze({ REQUEST: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST", SUCCESS: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS", FAILURE: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE" });
            function p(e = l, t) {
                if (!t) return e;
                switch (t.type) {
                    case d.SUCCESS:
                        if (t.payload) return { ...e, fetchStatus: i.ZP.LOADED, scheduledTweets: t.payload };
                        break;
                    case d.FAILURE:
                        return { ...e, fetchStatus: i.ZP.FAILED };
                    case d.REQUEST:
                        return { ...e, fetchStatus: i.ZP.LOADING };
                    case h.SUCCESS: {
                        const { meta: n } = t;
                        return n && n.deleteScheduledTweetId ? { ...e, scheduledTweets: ((s = n.deleteScheduledTweetId), (o = e.scheduledTweets), o.filter((e) => e.rest_id !== s)) } : e;
                    }
                    default:
                        return e;
                }
                var s, o;
                return e;
            }
            n.Z.register({ [a]: p });
            const m = (e) => e[a].scheduledTweets,
                b = (e) => e[a].fetchStatus,
                g =
                    () =>
                    (e, t, { api: s }) =>
                        (0, r._O)(e, { request: s.withEndpoint(o.Z).fetchScheduledTweets, params: {} })({ actionTypes: d, context: c }).then(() => {}),
                f =
                    (e) =>
                    (t, s, { api: n }) =>
                        (0, r._O)(t, { request: n.withEndpoint(o.Z).deleteScheduledTweet, params: { scheduled_tweet_id: e } })({ actionTypes: h, context: u, meta: { deleteScheduledTweetId: e } });
        },
        466380: (e, t, s) => {
            s.d(t, { Z: () => h });
            var o = s(807469),
                n = s(502909),
                r = s(600823);
            const i = (0, n.ZP)({ namespace: "topics" }),
                a = (0, n.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(o.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (s, o) => (s(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, s) => {
                    const { entityId: o } = t.meta,
                        n = e.entities[o];
                    return n ? ((e, t, s, o) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [s.id]: { ...s, ...o() } } } : e))(e, t, n, s) : e;
                },
                d = { follow: (0, n.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, n.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, n.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, n.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...a, ...l, ...d, customActionTypes: (0, n.X7)(d) },
                h = r.Z.register(u);
        },
        108304: (e, t, s) => {
            s.r(t), s.d(t, { PlacePickerScreen: () => G, default: () => Q });
            var o = s(202784),
                n = s(325686),
                r = s(470397),
                i = s(731708),
                a = s(143670),
                l = s(154003),
                c = s(371344),
                d = s(946847),
                u = s(392237),
                h = s(111677),
                p = s.n(h),
                m = s(171709),
                b = s(956272),
                g = s(264171),
                f = s(290402),
                y = s(980407),
                C = s(341276),
                E = s(27498),
                _ = s(312771),
                S = s(71620),
                T = s(668214),
                w = s(806528),
                k = s(843138),
                Z = s(390387),
                R = s(38562),
                B = s(632960);
            const v = (0, T.Z)()
                .propsFromState(() => ({ autotaggedLocation: k.Xm, initialResults: k.jK, initialFetchStatus: k.ke, lastSearchResults: k.uD, lastSearchFetchStatus: k.tn, position: w.Bz, taggedLocation: B._d, userCountry: Z.GG }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("PLACE_PICKER"), loadGeoLocation: w.iG, fetchInitialPlacesIfNeeded: k.BJ, searchPlaces: k.k6, updateLastSelectedPlace: k.T5, updateSettings: R.VP, updateSingleComposer: B.zi }))
                .withAnalytics({ page: "compose", section: "place_picker" });
            class I {
                constructor(e, t, s) {
                    (this.formatter = e), (this.fallbackFormatter = t), (this.fallbackRatio = s);
                }
                format(e) {
                    const t = Math.round(10 * e) / 10;
                    return t > 0 ? this.formatter({ distance: t }) : this.fallbackFormatter({ distance: Math.round(e * this.fallbackRatio) });
                }
            }
            const x = new I(p().b01ed2db, p().i83e29e1, 5280),
                P = new I(p().d4b7cff7, p().b211849f, 1e3),
                L = ["lr", "mm", "uk", "us"],
                D = p().b772cd66,
                M = p().e7c766ee,
                A = p().ab68727a,
                U = p().ae4057a2,
                F = p().bf2923a6,
                N = p().d963d1b6,
                O = p().a893d602,
                W = p().e68b09b4,
                H = p().be6cc44e,
                V = p().d8ef3232,
                z = p().cce30dcc,
                q = p().fa9adac1;
            class G extends o.Component {
                constructor(e) {
                    super(e),
                        (this.state = { activeResultSet: E.Z0.initial, geoLocationError: void 0, query: "", selectedLocation: void 0, showSearchForButton: !1 }),
                        (this._appBarRef = o.createRef()),
                        (this._fetchInitialPlaces = () => {
                            const { createLocalApiErrorHandler: e, fetchInitialPlacesIfNeeded: t, taggedLocation: s } = this.props;
                            t()
                                .then(() => {
                                    const { autotaggedLocation: e } = this.props;
                                    s || this.setState({ selectedLocation: e });
                                })
                                .catch(e());
                        }),
                        (this._getActiveResults = () => {
                            const { initialResults: e, lastSearchResults: t } = this.props,
                                { activeResultSet: s } = this.state;
                            return s === E.Z0.initial ? e : t;
                        }),
                        (this._selectResults = () => {
                            const { query: e, selectedLocation: t } = this.state;
                            let s = this._getActiveResults()?.places || [];
                            return t && (s = [t, ...s.filter((e) => e.place.id !== t.place.id)]), s.filter((t) => t.place.full_name.toLowerCase().includes(e.toLowerCase()));
                        }),
                        (this._goBack = () => {
                            this._appBarRef.current?.goBack();
                        }),
                        (this._setTaggedLocation = (e) => {
                            const { updateLastSelectedPlace: t, updateSettings: s, updateSingleComposer: o } = this.props;
                            o({ updates: { taggedLocation: e } }), t(e), s({ shouldAutoTagLocation: !!e });
                        }),
                        (this._handleBack = () => this._goBack()),
                        (this._handleDone = () => {
                            const { selectedLocation: e } = this.state;
                            e && this._setTaggedLocation(e), this._goBack();
                        }),
                        (this._handleRemove = () => {
                            this._setTaggedLocation(null), this._goBack();
                        }),
                        (this._handleRetry = () => {
                            const { searchPlaces: e } = this.props,
                                { activeResultSet: t, query: s } = this.state;
                            t === E.Z0.initial ? this._fetchInitialPlaces() : e(s);
                        }),
                        (this._handleLocationDisabledPromptDismiss = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._handleChange = (e) => {
                            const { value: t } = e.currentTarget,
                                s = t.length ? this.state.activeResultSet : E.Z0.initial;
                            this.setState({ activeResultSet: s, query: t, showSearchForButton: !!t.length });
                        }),
                        (this._handleClear = () => {
                            this.setState({ activeResultSet: E.Z0.initial, query: "" });
                        }),
                        (this._handleSubmit = () => {
                            const { query: e } = this.state,
                                { searchPlaces: t } = this.props;
                            e.length && (this.setState({ activeResultSet: E.Z0.lastSearch, showSearchForButton: !1 }), t(e));
                        }),
                        (this._handlePlaceClick = (e) => () => {
                            this._setTaggedLocation(e), this._goBack();
                        }),
                        (this._renderPlaceSubtext = (e) => {
                            const { position: t, userCountry: s } = this.props,
                                {
                                    place: {
                                        attributes: { street_address: n },
                                        centroid: a,
                                    },
                                } = e;
                            if (n && a && 2 === a.length && t) {
                                const e = ((e, t) => {
                                    const s = e.lat * (Math.PI / 180),
                                        o = t.lat * (Math.PI / 180),
                                        n = o - s,
                                        r = (t.long - e.long) * (Math.PI / 180);
                                    return 7917.6 * Math.asin(Math.sqrt(Math.sin(n / 2) * Math.sin(n / 2) + Math.cos(s) * Math.cos(o) * Math.sin(r / 2) * Math.sin(r / 2)));
                                })({ lat: t.coords.latitude, long: t.coords.longitude }, { lat: a[1], long: a[0] });
                                return o.createElement(
                                    r.Z,
                                    null,
                                    o.createElement(i.ZP, null, n),
                                    o.createElement(
                                        i.ZP,
                                        null,
                                        ((e, t = "us") => {
                                            if (L.find((e) => e === t.toLowerCase())) return x.format(e);
                                            {
                                                const t = 1.609344 * e;
                                                return P.format(t);
                                            }
                                        })(e, s),
                                    ),
                                );
                            }
                        }),
                        (this._renderPlace = (e) => {
                            const { selectedLocation: t } = this.state;
                            return o.createElement(a.Z, { actionSubText: this._renderPlaceSubtext(e), actionText: e.place.full_name, isSelected: e.place.id === t?.place.id, key: e.place.id, onClick: this._handlePlaceClick(e), selectable: !0 });
                        }),
                        (this._renderPlaces = (e) => (e.length ? e.map((e) => this._renderPlace(e)) : o.createElement(i.ZP, { align: "center", style: j.noPlacesText }, N))),
                        (this._renderAttributionIfNeeded = () => {
                            const e = this._getActiveResults();
                            return e?.attributions.has(E.xt.foursquare) ? o.createElement(m.default, { style: j.foursquareIcon }) : null;
                        }),
                        (this._renderResults = () => {
                            const { query: e, showSearchForButton: t } = this.state,
                                s = this._selectResults();
                            return o.createElement(n.Z, null, this._renderPlaces(s), t ? o.createElement(a.Z, { actionText: q({ query: e }), onClick: this._handleSubmit, textColor: "primary" }) : null, this._renderAttributionIfNeeded());
                        }),
                        (this._renderRightControl = () => o.createElement(n.Z, { style: j.actionButtonContainer }, o.createElement(l.ZP, { onPress: this._handleRemove, size: "small", style: j.actionButton, type: "primaryText" }, W), o.createElement(l.ZP, { onPress: this._handleDone, size: "small", style: j.actionButton, type: "primaryFilled" }, D))),
                        (this._renderGeoPicker = () => {
                            const { history: e, initialFetchStatus: t, lastSearchFetchStatus: s } = this.props,
                                { activeResultSet: n } = this.state,
                                r = n === E.Z0.initial ? t : s;
                            return o.createElement(y.Z, { appBarRef: this._appBarRef, history: e, onBackClick: this._handleBack, rightControl: this._renderRightControl(), title: z }, o.createElement(c.Z, { Icon: b.default, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSubmit, placeholder: H, style: j.search, withClearButton: !0 }), o.createElement(f.Z, { fetchStatus: r === _.ZP.NONE ? _.ZP.LOADING : r, onRequestRetry: this._handleRetry, render: this._renderResults, retryMessage: V }));
                        }),
                        (this._renderLocationDisabledPrompt = () => {
                            const { geoLocationError: e } = this.state;
                            let t = U,
                                s = F;
                            return e && e.code === C.M.PERMISSION_DENIED && ((t = M), (s = A)), o.createElement(d.Z, { actionLabel: O, graphic: g.default, headline: t, onAction: this._handleLocationDisabledPromptDismiss, onClose: this._handleLocationDisabledPromptDismiss, subtext: s });
                        });
                    const { autotaggedLocation: t, initialResults: s, taggedLocation: u } = e;
                    u ? (this.state.selectedLocation = u) : s && (this.state.selectedLocation = t);
                }
                componentDidMount() {
                    const { loadGeoLocation: e } = this.props;
                    return e().then(this._fetchInitialPlaces, (e) => this.setState({ geoLocationError: e }));
                }
                render() {
                    const { geoLocationError: e } = this.state;
                    return e ? this._renderLocationDisabledPrompt() : this._renderGeoPicker();
                }
            }
            const j = u.default.create((e) => ({ search: { marginHorizontal: e.spaces.space16, flexGrow: 0 }, actionButtonContainer: { flexDirection: "row" }, actionButton: { marginStart: e.spaces.space12 }, noPlacesText: { marginVertical: e.spaces.space16 }, foursquareIcon: { marginVertical: e.spaces.space16, fill: e.colors.gray700 } })),
                Q = v(G);
        },
        122421: (e, t, s) => {
            s.r(t), s.d(t, { Recipients: () => L, default: () => D });
            var o = s(202784),
                n = s(325686),
                r = s(420412),
                i = s(844685),
                a = s(96083),
                l = s(731708),
                c = s(154003),
                d = s(111677),
                u = s.n(d),
                h = s(166852),
                p = s(980407),
                m = s(240089),
                b = s(62857),
                g = s(735e3),
                f = s(293115),
                y = s(615027),
                C = s(24949),
                E = s(47743),
                _ = s(668214),
                S = s(390387),
                T = s(632960);
            const w = (e, t) => t.location.state,
                k = (e, t) => {
                    const s = w(0, t);
                    return s && s.inReplyToStatus;
                },
                Z = (e, t) => {
                    const s = w(0, t);
                    return (s && s.excludedRecipients) || (0, g.o)();
                },
                R = (0, _.Z)()
                    .propsFromState(() => ({ recipientIds: (0, C.P1)(k, S._h, (e, t) => (e && t ? (0, E.YT)({ inReplyToStatus: e, viewerUserId: t, excludeReplyUser: !0 }).map((e) => e.id_str) : (0, g.o)())), initialExcludedRecipients: Z, inReplyToStatus: k }))
                    .propsFromActions(() => ({ updateExcludedRecipientsV2: T.OO })),
                B = u().c55eed72,
                v = u().b772cd66,
                I = u().caca3102,
                x = u().c6a6dc2f,
                P = { page: "compose", section: "recipients" },
                L = ({ history: e, inReplyToStatus: t, initialExcludedRecipients: s, recipientIds: d, updateExcludedRecipientsV2: u }) => {
                    const [C, E] = o.useState(s);
                    if (!t) return o.createElement(y.Z, { to: "/compose/post" });
                    const { user: _ } = t.retweeted_status || t,
                        S = (e) => {
                            E(e ? (0, g.o)() : d);
                        },
                        T = (e) => () => {
                            const t = -1 !== C.indexOf(e);
                            E(t ? C.filter((t) => t !== e) : (0, h.Z)([...C, e]));
                        },
                        w = () => {
                            u(C), e.goBack();
                        },
                        k = () => (d.length > 1 ? o.createElement(a.Z, { checked: 0 === C.length, onChange: S }) : null),
                        Z = ({ isBlocking: e, screenName: t }) => (e ? o.createElement(l.ZP, { color: "magenta500", size: "subtext2" }, x({ screenName: t })) : null),
                        R = (e) => {
                            if (!t) return null;
                            const { user: s } = t.retweeted_status || t,
                                n = -1 !== C.indexOf(e),
                                r = e === s.id_str,
                                i = o.createElement(a.Z, { checked: !n, disabled: r, onChange: T(e) });
                            return o.createElement(m.ZP, { bottomControl: Z, cellClickable: !r, decoration: i, isFakeButtonRoleWithListItem: !r, key: e, onClick: T(e), promotedItemType: "users", userId: e, withLink: !1 });
                        };
                    return o.createElement(f.nO, { namespace: P }, o.createElement(p.Z, { backLocation: "/compose/post", history: e, onBackClick: w, rightControl: o.createElement(c.ZP, { onPress: w, size: "xSmall", type: "brandFilled" }, v), title: B }, R(_.id_str), d.length ? o.createElement(n.Z, null, o.createElement(r.Z, null), o.createElement(i.Z, { rightControl: k(), text: I }), o.createElement(b.Z, { renderUserCell: R, userIds: d })) : null));
                },
                D = R(L);
        },
        379069: (e, t, s) => {
            s.r(t), s.d(t, { Compose: () => Oe, default: () => He });
            s(136728);
            var o = s(202784),
                n = s(360917),
                r = s.n(n),
                i = s(928316),
                a = s(325686),
                l = s(154003),
                c = s(822399),
                d = s(537392),
                u = s(529356),
                h = s(386802),
                p = s(392237),
                m = s(111677),
                b = s.n(m),
                g = s(912021),
                f = s(744531),
                y = s(731708);
            function C(e) {
                const t = e - new Date().getTime(),
                    s = 1e3 * Math.round(t < 0 ? 0 : t / 1e3),
                    o = new Date(s).toLocaleString("default", { minute: "numeric", second: "numeric" }),
                    [n, r] = o.split(":");
                return { minutes: +n, seconds: +r, formatted: o };
            }
            const E = ({ "aria-label": e, expiration: t, getAccessibilityLiveLabel: s, onTimeElapsed: n }) => {
                    const r = o.useRef(s),
                        i = o.useRef(n);
                    (r.current = s), (i.current = n);
                    const [l, c] = o.useState(() => C(+t)),
                        [d, u] = o.useState(() => s?.(l));
                    o.useEffect(() => {
                        const e = setInterval(() => {
                            const s = C(+t),
                                o = r.current?.(s);
                            u(o), c(s), "00:00" === s.formatted && (clearInterval(e), i.current?.());
                        }, 500);
                        return () => clearInterval(e);
                    }, [t]);
                    const h = "function" == typeof e ? e(l) : e;
                    return o.createElement(a.Z, { style: _.root }, o.createElement(y.ZP, { "aria-label": h && `${h}`, color: "gray900", testID: "displayedCountdown", weight: "medium" }, l.formatted, d && o.createElement(a.Z, { "aria-label": d, "aria-live": "polite" })));
                },
                _ = p.default.create((e) => ({ root: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space2, paddingBottom: e.spaces.space4, paddingEnd: 6, paddingStart: 6, paddingTop: e.spaces.space4 } }));
            var S = s(980407),
                T = s(231214),
                w = s(472826),
                k = s(632552),
                Z = s(10656),
                R = s(96206),
                B = s(293115),
                v = s(349745),
                I = s(704279),
                x = s(346789),
                P = s(24949),
                L = s(370751),
                D = s(71620),
                M = s(646522),
                A = s(668214),
                U = s(492057),
                F = s(669002),
                N = s(175856),
                O = s(497294),
                W = s(709318),
                H = s(872788),
                V = s(964917),
                z = s(137204),
                q = s(632960),
                G = s(836255),
                j = s(919022);
            const Q = (e) => q.tS(e, ""),
                K = (e) => q.WQ(e, ""),
                $ = (e) => q.Gz(e, ""),
                J = (e) => q.SJ(e, ""),
                Y = (e) => (t, s) => {
                    const o = ((e, t) => t.location.state)(0, s);
                    return o ? e(o) : void 0;
                },
                X = (e, t) => t.activeUser || j.ZP.selectViewerUser(e),
                ee = (e, t) => {
                    const {
                        location: { query: s },
                    } = t;
                    return s && "string" == typeof s.in_reply_to ? s.in_reply_to : void 0;
                },
                te = Y((e) => e.inReplyToStatusId),
                se = (e, t) => {
                    const s = ee(0, t) || te(e, t);
                    return s ? G.Z.selectHydrated(e, s) : void 0;
                },
                oe = (e, t) => t.location.pathname.indexOf("/intent/") > -1,
                ne = Y((e) => e.defaultText),
                re = (e, t) => {
                    const s = ne(e, t);
                    return (0, M.Z)(t.location) || s;
                },
                ie = Y((e) => e.quotedStatus),
                ae = (e, t) => (t.quotedStatus ? t.quotedStatus : ie(e, t)),
                le = ({ cardUrl: e, mediaIds: t, ...s }) => s,
                ce = Y((e) => e.isSelfThreadReply),
                de = Y((e) => e.hideUnsentTweetsButton),
                ue = Y((e) => e.headingSubtitle),
                he = Y((e) => e.headingTitle),
                pe = Y((e) => !!e.previousTweetId),
                me = Y((e) => e.editableUntil);
            function be(e, t) {
                const { previousPath: s, selectedCommunityId: o } = t.location.state || {};
                let n;
                const r = (0, W.br)(e);
                if ((o ? (n = o) : s && s.includes("/home") && r.type === H.FO.COMMUNITY && (n = r.id), n)) {
                    const t = (0, U.BL)(e, { communityId: n });
                    if (t && "NonMember" !== t.role) return t;
                }
            }
            function ge(e, t) {
                const { previousPath: s, selectedCommunityId: o } = t.location.state || {},
                    n = (0, W.br)(e);
                let r;
                if ((o ? (r = o) : s && s.includes("/home") && n.type === H.FO.COMMUNITY && (r = n.id), r)) {
                    const t = (0, U.BL)(e, { communityId: r });
                    return !(!t || "NonMember" !== t.role);
                }
                return !1;
            }
            const fe = Y((e) => e.trustedFriendsValue),
                ye = Y((e) => e.previousTweetId),
                Ce = (e, t) => {
                    const s = ye(e, t);
                    return s ? G.Z.createHydratedSelector(e)(s) : null;
                },
                Ee = (e, t) => (0, N.t5)(e, N.xH),
                _e = (0, A.Z)()
                    .propsFromState(() => ({
                        activeUser: X,
                        audienceControlsValue: (0, P.P1)(
                            Ce,
                            (e, t) => q.oN(e, "modal"),
                            z.Ln,
                            (e, t) => q.SJ(e, "modal"),
                            (e, t, s, o) => (e ? (0, k.CB)(e, s, o) : t),
                        ),
                        broadcastCommunityTweet: J,
                        composerData: (0, P.P1)(Q, re, ae, O.gz, oe, (e, t, s, o, n) =>
                            e.map((e, r) => {
                                const i = (0, L.Z)(e.mediaIds || []),
                                    a = o.filter((e) => i.has(e.id));
                                return { ...le(e), media: a, quotedStatus: 0 === r ? s : void 0, text: 0 === r && t && !n ? t : e.text };
                            }),
                        ),
                        composeSemanticCoreId: Y((e) => e.composeSemanticCoreId),
                        draftTweets: F.Fq,
                        editableUntil: me,
                        hideUnsentTweetsButton: de,
                        inReplyToStatus: se,
                        inReplyToStatusId: ee,
                        isEdit: pe,
                        isIntentRoute: oe,
                        isSelfThreadReply: ce,
                        isSending: K,
                        isAutoSaving: $,
                        scheduledTweets: V.yD,
                        selectedCommunity: be,
                        shouldShowNonCommunityMemberPrompt: ge,
                        selectedTrustedFriendsValue: fe,
                        sendingProgress: q.ZE,
                        subtitle: ue,
                        shouldShowCommunityAudienceEducation: Ee,
                        title: he,
                    }))
                    .propsFromActions(() => ({ createDraftTweetApiErrorHandler: (0, D.zr)(F.CA), createScheduledTweetApiErrorHandler: (0, D.zr)(V.Hf), fetchScheduledTweets: V.FP, fetchDraftTweets: F.Le, addCommunityAudienceEducationFlag: () => (0, N.pj)(N.xH), updateAudienceControlsValue: q.sU, setActiveParentKey: q.jr }));
            var Se = s(837880);
            const Te = b().e6042757,
                we = b().a4e39717,
                ke = 3e5,
                Ze = { "05:00": !0, "01:00": !0 };
            function Re({ formatted: e, minutes: t }) {
                return Ze[e] && we({ minutes: t });
            }
            function Be({ minutes: e, seconds: t }) {
                return Te({ minutes: e, seconds: t });
            }
            const ve = "tweetButton",
                Ie = b().a609edbe,
                xe = b().d4ebc798,
                Pe = b().j24c37b2,
                Le = b().dc295bb0,
                De = b().e536de22,
                Me = b().cb817dae,
                Ae = "compose",
                Ue = { page: Ae },
                Fe = { page: Ae, section: "reply" },
                Ne = { context: "compose_intent_logged_in" };
            class Oe extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isValid: !1, editCountdownShown: !1 }),
                        (this._handleEditCountdownTimeout = (e) => {
                            const t = e - Date.now() <= ke;
                            t !== this.state.editCountdownShown && this.setState({ editCountdownShown: t });
                        }),
                        (this._handleCloseModal = () => {
                            const { history: e } = this.props;
                            e.goBackThroughModals();
                        }),
                        (this._handleAppBarHeight = (0, g.Z)(() => {
                            const e = i.findDOMNode(this._appBarRef);
                            return (e && e instanceof window.Element && e.getBoundingClientRect().height) || 50;
                        })),
                        (this._handleBackClick = () => {
                            this._composeContainerRef && this._composeContainerRef.handleDismissComposer();
                        }),
                        (this._handleCloseComposer = () => {
                            this._appBarRef && this._appBarRef.goBack();
                        }),
                        (this._handleSendTweet = () => {
                            this._composeContainerRef && this._composeContainerRef.handleTweetOrRetweet();
                        }),
                        (this._handleSendTweetWithBoost = () => this._composeContainerRef?.handleTweetWithBoost() ?? Promise.resolve()),
                        (this._setValidity = (e) => {
                            e !== this.state.isValid && this.setState({ isValid: e });
                        }),
                        (this._getScribeNamespace = () => (this.props.inReplyToStatus || this.props.inReplyToStatusId ? Fe : Ue)),
                        (this._getScribeData = () => {
                            const { activeUser: e, isIntentRoute: t } = this.props;
                            return t && e ? Ne : r();
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isValid: e } = this.state,
                                { isModal: t } = this.context,
                                { activeUser: s, audienceControlsValue: n, composerData: r, inReplyToStatus: i, isEdit: c, isSelfThreadReply: d, isSending: u } = this.props,
                                h = "all" === n.conversationControlsValue,
                                p = !e || u || !s || this.is_uploading;
                            return o.createElement(a.Z, { style: We.rightControlContainer }, c ? this._renderCountdownTimer() : o.createElement(x.Z, { disabled: p, isAudienceAll: h, isComposerValid: e, isEdit: !!c, isModal: t, isQuote: this.isQuoteTweet, isReply: !!i, isRetweet: !!this.isRetweet, isScheduled: this.isScheduled, isSelfThreadReply: !!d, isThread: this.isThread, onTweetWithBoostPress: this._handleSendTweetWithBoost, renderFallback: this._renderDraftsHeading, shouldShow: !t, tweetText: r[0].text, viewer: s }), t ? null : o.createElement(l.ZP, { disabled: p, onPress: this._handleSendTweet, size: "small", testID: ve, type: "brandFilled" }, (0, k.of)({ inReplyToStatus: !!i, isSelfThreadReply: !!d, isQuoteTweet: !!this.isQuoteTweet, isRetweet: !!this.isRetweet, isScheduled: !!this.isScheduled, isThread: this.isThread, isEdit: !!c })));
                        }),
                        (this._renderHeaderWithProgressBar = (e) => {
                            const { isModal: t } = this.context,
                                { isAutoSaving: s, isSending: n, sendingProgress: r } = this.props;
                            return o.createElement(o.Fragment, null, o.createElement(c.Z, { progress: n && !s ? Math.max(r, 0.02) : 0, style: [We.progressBar, t && We.progressBarModal] }), e);
                        }),
                        (this._renderDraftsHeading = () => {
                            const { hideUnsentTweetsButton: e } = this.props;
                            if (!e) return o.createElement(l.ZP, { onPress: this._handleOpenUnsent, size: "small", testID: "unsentButton", type: "brandText" }, xe);
                        }),
                        (this._renderCountdownTimer = () => {
                            const { editableUntil: e } = this.props,
                                { editCountdownShown: t } = this.state;
                            if (!t || !e) return null;
                            return o.createElement(E, {
                                "aria-label": Be,
                                expiration: e,
                                getAccessibilityLiveLabel: Re,
                                onTimeElapsed: () => {
                                    this._composeContainerRef && this._composeContainerRef.handleEditTimeLimitExceeded();
                                },
                            });
                        }),
                        (this._handleOpenUnsent = () => {
                            const { history: e } = this.props;
                            (0, I.n)({ ...this._getScribeNamespace(), element: "unsent_tweets", action: "click" }), e.push("/compose/post/unsent/drafts");
                        }),
                        (this._setAppBarRef = (e) => {
                            this._appBarRef = e;
                        }),
                        (this._handleComposeContainerRef = (e) => {
                            this._composeContainerRef = e;
                        });
                }
                componentDidMount() {
                    const { activeUser: e, broadcastCommunityTweet: t, createDraftTweetApiErrorHandler: s, createScheduledTweetApiErrorHandler: o, editableUntil: n, fetchDraftTweets: r, fetchScheduledTweets: i, history: a, inReplyToStatus: l, isEdit: c, location: d, selectedCommunity: u, selectedTrustedFriendsValue: h, updateAudienceControlsValue: p } = this.props;
                    (this._unlockReload = R.Z.acquire()), a.setModalRouteBreakpoint(a.location), e && (i().catch(o()), r().catch(s())), u && (p({ _type: "community_members", communityIdValue: u.id_str, conversationControlsValue: "community_members", broadcast: t }, "modal"), a.replace({ pathname: d.pathname, state: (0, f.Z)(d.state || {}, "selectedCommunityId") })), h && (p({ _type: "trusted_friends_tweet", trustedFriendsValue: h, conversationControlsValue: "trusted_friends_tweet" }, "modal"), a.replace({ pathname: d.pathname, state: (0, f.Z)(d.state || {}, "trustedFriendsValue") })), l?.exclusivity_info ? p({ _type: "super_followers_exclusive", conversationControlsValue: "super_followers_exclusive", exclusivityControlValue: {} }) : l?.community_id_str ? p({ _type: "community_members", communityIdValue: l.community_id_str, conversationControlsValue: "community_members" }) : l?.trusted_friends_info && p({ _type: "trusted_friends_tweet", conversationControlsValue: "trusted_friends_tweet", trustedFriendsValue: { trusted_friends_list_id: "1482057446797373440" } });
                    const m = +n;
                    c &&
                        !this._cancelEditTimeout &&
                        m >= 0 &&
                        (this._handleEditCountdownTimeout(m),
                        (this._cancelEditTimeout = (function (e, t) {
                            const s = e - Date.now() - ke,
                                o = (0, Se.Z)(s, 0, 2147483647),
                                n = setTimeout(t, o, e);
                            return () => clearTimeout(n);
                        })(m, this._handleEditCountdownTimeout)));
                }
                componentWillUnmount() {
                    const { history: e } = this.props;
                    e.setModalRouteBreakpoint(e.location), this._unlockReload(), this._cancelEditTimeout?.();
                }
                render() {
                    const { activeUser: e, composeHeader: t, composeSemanticCoreId: s, history: n, isEdit: r, isIntentRoute: i, location: a, quotedStatus: l, subtitle: c, title: h } = this.props,
                        p = i && !e,
                        { isModal: m } = this.context;
                    return o.createElement(
                        B.nO,
                        { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                        o.createElement(d.ZP, null, ({ containerWidth: i }) => {
                            const d = Z.Z.shouldRenderAsModal(i),
                                b = (p && d) || this.showCommunityNonMemberPrompt;
                            return o.createElement(o.Fragment, null, this.showCommunityNonMemberPrompt ? o.createElement(u.Z, { actionLabel: Pe, graphicDisplayMode: "none", headline: Le, onAction: this._handleCloseModal, subtext: De }) : null, p && o.createElement(T.Z, { history: n, location: a }), b ? null : o.createElement(S.Z, { appBarRef: this._setAppBarRef, documentTitle: Ie, hideBackButton: !1, history: n, onBackClick: this._handleBackClick, renderHeader: this._renderHeaderWithProgressBar, rightControl: this._renderAppBarRightControl(), subtitle: c, title: r ? Me : h }, o.createElement(w.Z, { activeUser: e, composeHeader: t, composeSemanticCoreId: s, containerWidth: i, history: n, isModal: m, location: a, onCloseComposer: this._handleCloseComposer, onHandleAppBarHeight: this._handleAppBarHeight, onRef: this._handleComposeContainerRef, quotedStatus: l, setValidity: this._setValidity })));
                        }),
                    );
                }
                get showCommunityNonMemberPrompt() {
                    const { inReplyToStatus: e, shouldShowNonCommunityMemberPrompt: t } = this.props,
                        s = null == e && !this.isQuoteTweet;
                    return t && s;
                }
                get isThread() {
                    return this.props.composerData.length > 1;
                }
                get isRetweet() {
                    const { composerData: e } = this.props,
                        t = 0 === e[0].media.length;
                    return !this.isThread && e[0].quotedStatus && "" === e[0].text && t;
                }
                get isQuoteTweet() {
                    const { composerData: e } = this.props;
                    return !this.isThread && !!e[0].quotedStatus;
                }
                get isScheduled() {
                    const { composerData: e } = this.props;
                    return (0, v.TO)(e[0].scheduledFor);
                }
                get is_uploading() {
                    return !!this._composeContainerRef && this._composeContainerRef.is_uploading;
                }
            }
            Oe.contextType = h.Z;
            const We = p.default.create((e) => ({ progressBar: { position: "fixed", borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small, zIndex: e.componentZIndices.appBarZIndex + 1 }, progressBarModal: { position: "absolute" }, rightControlContainer: { display: "inline-flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 } })),
                He = _e(Oe);
        },
        661810: (e, t, s) => {
            s.d(t, { Z: () => i });
            var o = s(202784),
                n = s(325686),
                r = s(392237);
            function i({ spacing: e, style: t }) {
                return o.createElement(n.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? r.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = r.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, s) => {
            s.d(t, { Z: () => p });
            var o = s(202784),
                n = s(476984),
                r = s.n(n),
                i = s(143778),
                a = s(750410),
                l = s(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        s = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !s) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: s, fetchStatus: n, icon: r, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: b, retryable: g } = this.props;
                    switch (n) {
                        case c:
                            return g ? o.createElement(a.Z, { icon: r, onRequestRetry: d, retryMessage: b }) : s ? o.createElement(l.m, { failureMessage: s }) : m();
                        case u:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        420412: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(202784),
                n = s(325686),
                r = s(235902),
                i = s(885015),
                a = s(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: s }) {
                const { isWebRedesign: l } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return s ? o.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(n.Z, { style: c.gapColumn }, o.createElement(n.Z, { style: [c.gap, d] })), o.createElement(n.Z, { style: c.gapText }, s), o.createElement(n.Z, { style: c.gapColumn }, o.createElement(n.Z, { style: [c.gap, d] }))) : o.createElement(n.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, s) => {
            s.d(t, { Z: () => c });
            var o = s(807896),
                n = s(202784),
                r = s(325686),
                i = s(392237);
            class a extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: s, ...i } = this.props,
                        a = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, l.column, s && l.withGutterColumn] }));
                    return n.createElement(r.Z, (0, o.Z)({ style: [t, l.root, s && l.withGutter] }, i), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        662678: (e, t, s) => {
            s.d(t, { G: () => n, Z: () => o });
            s(136728);
            const o = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (s, o, n) => {
                        const r = t ? t(o, n, e) : !!o;
                        return r && s[0].push(o), !r && s[1].push(o), s;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Compose.90ebf97a.js.map
