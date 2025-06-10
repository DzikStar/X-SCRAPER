"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Compose", "loader.AudioContextVoiceMedia"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var s = o(202784),
                n = o(614983),
                r = o.n(n),
                i = o(325686),
                a = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends s.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: n, hideBackButton: r, isFullWidth: i, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: E, titleIconCellSize: _, withBackground: S, withWideContainer: w } = this.props,
                        { isModal: T } = this.context,
                        k = r ? d : s.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!S, T, !!g);
                    return s.createElement(s.Fragment, null, s.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: k, middleControl: h, position: u(p, T, n), rightControl: m, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: E, titleIconCellSize: _, withBackground: Z, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? s.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        169576: (e, t, o) => {
            o.d(t, { c: () => b, Z: () => f });
            var s = o(202784),
                n = o(325686),
                r = o(392237),
                i = o(530732),
                a = o(992942),
                l = o(731708),
                c = o(154003),
                d = o(725516),
                u = o(111677),
                h = o.n(u);
            const p = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                g = { header: h().d231a76a, description: h().heaba5d8, legalDisclaimer: h().i57d3ea0, buttonText: h().a0440af6, image: { darkMode: p, lightMode: m } },
                b = Object.freeze({ MarchMadness: "MarchMadness" }),
                f = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: u, withBackgroundImage: h }) => {
                    const p = (0, d.z)(),
                        m = b[o] || "Occasion",
                        f = h ? `${m}WithBackgroundImage` : m;
                    s.useEffect(() => {
                        p.scribe({ component: f, action: "impression" });
                    }, [p, f]);
                    const C = () => {
                            p.scribe({ component: f, action: "click", element: "card" });
                        },
                        { backgroundcolor: E, buttonSize: _, cardWidth: S, marginbottom: w, textcolor: T } = u ?? {},
                        k = E ? r.default.theme.colors[E] : r.default.theme.colors.gray0,
                        Z = T ? r.default.theme.colors[T] : r.default.theme.colors.gray900,
                        v = w ? r.default.theme.spaces[w] : r.default.theme.spaces.space16,
                        R = { [b.MarchMadness]: { header: g.header, description: g.description, legalDisclaimer: g.legalDisclaimer, buttonText: g.buttonText, image: g.image } }[o];
                    return h ? s.createElement(i.Z, { interactiveStyles: null, link: t, onPress: C, style: y.bannerContainer }, s.createElement(a.Z, { resizeMode: "contain", source: { uri: "light" === r.default.theme.paletteName ? R.image.lightMode : R.image.darkMode }, style: { height: 85 } })) : s.createElement(n.Z, { style: [y.card, { backgroundColor: k }, { maxWidth: S }, { marginBottom: v }], testID: "popupCard" }, s.createElement(n.Z, { style: e ? y.horizontalContent : y.verticalContent }, s.createElement(n.Z, { style: e ? y.textContainer : null }, s.createElement(l.ZP, { size: "headline2", style: [y.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, R.header), s.createElement(l.ZP, { size: "subtext1", style: [y.popupDescription, { color: Z }] }, R.description, " ", e ? null : R.legalDisclaimer)), s.createElement(n.Z, { style: y.buttonContainer }, s.createElement(c.ZP, { backgroundColor: "light" === r.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: C, size: "medium", style: [y.popupButton, { width: _ }] }, R.buttonText), e && s.createElement(l.ZP, { size: "subtext3", style: [y.legalDisclaimer, { color: Z }] }, R.legalDisclaimer))));
                },
                y = r.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var s = o(807896),
                n = o(202784),
                r = o(182056),
                i = o(879113),
                a = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const a = r.Z.isOnline();
                    return n.createElement(i.Z, (0, s.Z)({}, t, { icon: a ? void 0 : n.createElement(d.default, { style: p.icon }), retryMessage: a ? e : u }));
                },
                p = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => p });
            var s = o(202784),
                n = o(325686),
                r = o(108362),
                i = o(386802),
                a = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: r, centerTitle: i, hideBackButton: a, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: y, title: C } = this.props,
                                { isModal: E } = this.context;
                            return s.createElement(n.Z, { style: E ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, s.createElement(d.ZP, { backButtonType: o || (E ? "close" : "back"), backLocation: r, centerTitle: i, fixed: !E, hideBackButton: a, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [E && m.appBarModal, t], subtitle: y, title: C, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: p, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return s.createElement(l.Z, null, s.createElement(u.Z.Configure, { documentTitle: a, headerless: !0, title: g }), s.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, f && m.rootModal] }, !f && y, s.createElement(r.Z, { isFullWidth: c, isLarge: d, style: [m.container, f && m.containerModal, i] }, f ? s.createElement(h.Z, { style: m.viewport }, y, o) : o), t ? s.createElement(n.Z, { style: [m.bottomBarModal, !f && !b && m.bottomBarMobile] }, s.createElement(r.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = i.Z);
            const m = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = p;
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => l, Z: () => a });
            var s = o(807896),
                n = o(202784),
                r = o(524084),
                i = o(768572);
            const a = "stable_sort_index",
                l = n.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return n.createElement(i.ZP, { identifier: o }, n.createElement(r.Z, (0, s.Z)({ ref: t }, e)));
                });
        },
        231214: (e, t, o) => {
            o.d(t, { Z: () => s });
            o(202784);
            const s = (0, o(523561).Z)({ loader: () => Promise.all([o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), o.e("ondemand.IntentPrompt")]).then(o.bind(o, 958679)) });
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var s = o(202784),
                n = o(500002),
                r = o(668214),
                i = o(997174),
                a = o(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends s.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: s },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = n || a;
                    ((c && n !== a) || (!c && o !== r) || s !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: s } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), s(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(l(c));
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => v });
            var s = o(807896),
                n = o(202784),
                r = o(476984),
                i = o.n(r),
                a = o(111677),
                l = o.n(a),
                c = o(615656),
                d = o(290402),
                u = o(325686),
                h = o(240089),
                p = o(663550),
                m = o(409438);
            const g = ({ displayMode: e = m.Z.UserDetailed, renderUserCell: t, userIds: o }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    o.map((o, s) => (t ? t(o) : n.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: p.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var b = o(312771),
                f = o(71620),
                y = o(973572),
                C = o(668214),
                E = o(919022);
            const _ = (e, t) => t.userIds,
                S = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: s } = t;
                    return s.filter((t) => {
                        const s = E.ZP.select(e, t);
                        return !!s && o(s);
                    });
                },
                w = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const s = E.ZP.selectFetchStatus(e, o);
                        return s && (t[o] = s === b.ZP.NONE ? b.ZP.LOADING : s), t;
                    }, {});
                },
                T = (0, C.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, y.Z)(S, (e) => e),
                        fetchStatus: (0, y.Z)(S, w, _, (e, t, o) => {
                            let s = b.ZP.LOADED;
                            for (let n = 0; n < o.length; n++) {
                                const r = o[n];
                                if (-1 === e.indexOf(r)) {
                                    const e = t[r] || b.ZP.LOADING;
                                    s = s === b.ZP.LOADED ? e : s;
                                }
                                if (s === b.ZP.LOADED) break;
                            }
                            return s;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: E.ZP.fetchManyIfNeeded })),
                k = l().f5b426c2;
            class Z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: r, filterPredicate: i, userIds: a, ...l } = this.props;
                            return n.createElement(g, (0, s.Z)({}, l, { userIds: e }));
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
                    return n.createElement(d.Z, { "aria-label": k, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: s } = this.props;
                    o(s).then(
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
            const v = T(Z);
        },
        524084: (e, t, o) => {
            o.d(t, { Z: () => i });
            var s = o(202784),
                n = o(523561),
                r = o(195560);
            const i = (0, n.Z)({ loader: () => o.e("loader.AbsolutePower").then(o.bind(o, 590136)), renderPlaceholder: (e, t) => s.createElement(r.Z, { hasError: e, onRetry: t }) });
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => T, KV: () => f, LI: () => B, SC: () => w, Vt: () => E, ed: () => I, op: () => k });
            var s = o(202784),
                n = o(190286),
                r = o(111677),
                i = o.n(r),
                a = o(616894),
                l = o(314948),
                c = o(516951),
                d = o(163390);
            const u = i().cfd2f35e,
                h = i().f9e45cfb,
                p = i().fcd4d489,
                m = i().a6450e84,
                g = i().g353ad73,
                b = i().ad00a739,
                f = i().a9fd20be,
                y = i().j546fb79,
                C = i().c9623eeb,
                E = i().e133be4e,
                _ = i().he43bca4,
                S = i().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                T = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? b({ screenName: e }) : g({ screenName: e }) }),
                k = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: s, testID: n, unblockAction: r, unblockSubtext: i, user: a }) => {
                    let l,
                        u = c.Z;
                    const h = B(a, o);
                    switch (s) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? r(h) : e(h);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    a.blocking ? r(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: n, shortcutKey: l, Icon: Z(a.blocking), text: R(a), subText: v({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                Z = (e) => (e ? l.default : a.default),
                v = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                R = (e) => (e.blocking ? C({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                B = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: E, text: t ? S : _ }))(e.screen_name, t) : T(e.screen_name, t)),
                I = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: r, headline: i, label: a, text: l } = e;
                    return s.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: r, headline: i, onCancel: o, onConfirm: t, text: l });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => n });
            var s = o(111677);
            const n = { defaultToast: { text: o.n(s)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => n });
            var s = o(111677);
            const n = { defaultToast: { text: o.n(s)().ca96fe6e }, showToast: !0 };
        },
        973572: (e, t, o) => {
            o.d(t, { Z: () => i });
            var s = o(476984),
                n = o.n(s),
                r = o(24949);
            const i = (0, r.wN)(r.PW, n());
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => h, Od: () => d, PN: () => p, uq: () => c, wR: () => g });
            var s = o(251067),
                n = o(522171),
                r = o(111677),
                i = o.n(r),
                a = o(912021),
                l = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
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
                        o = h(),
                        s = p(),
                        n = {};
                    return (
                        [...o, ...s, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => s });
            const s = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        492057: (e, t, o) => {
            o.d(t, { BL: () => n, tc: () => r });
            var s = o(491963);
            const n = (e, t) => {
                    if (t.communityId) return s.ZP.select(e, t.communityId);
                },
                r = (e, t, o) => {
                    const n = o || t.communityId;
                    if (n) return s.ZP.selectFetchStatus(e, n);
                };
        },
        964917: (e, t, o) => {
            o.d(t, { FP: () => b, Hf: () => c, Q$: () => f, UD: () => g, V2: () => u, yD: () => m });
            var s = o(439058),
                n = o(499627),
                r = o(917799),
                i = o(312771);
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
                        return n && n.deleteScheduledTweetId ? { ...e, scheduledTweets: ((o = n.deleteScheduledTweetId), (s = e.scheduledTweets), s.filter((e) => e.rest_id !== o)) } : e;
                    }
                    default:
                        return e;
                }
                var o, s;
                return e;
            }
            n.Z.register({ [a]: p });
            const m = (e) => e[a].scheduledTweets,
                g = (e) => e[a].fetchStatus,
                b =
                    () =>
                    (e, t, { api: o }) =>
                        (0, r._O)(e, { request: o.withEndpoint(s.Z).fetchScheduledTweets, params: {} })({ actionTypes: d, context: c }).then(() => {}),
                f =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, r._O)(t, { request: n.withEndpoint(s.Z).deleteScheduledTweet, params: { scheduled_tweet_id: e } })({ actionTypes: h, context: u, meta: { deleteScheduledTweetId: e } });
        },
        466380: (e, t, o) => {
            o.d(t, { Z: () => h });
            var s = o(807469),
                n = o(502909),
                r = o(600823);
            const i = (0, n.ZP)({ namespace: "topics" }),
                a = (0, n.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(s.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (o, s) => (o(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, o) => {
                    const { entityId: s } = t.meta,
                        n = e.entities[s];
                    return n ? ((e, t, o, s) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [o.id]: { ...o, ...s() } } } : e))(e, t, n, o) : e;
                },
                d = { follow: (0, n.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, n.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, n.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, n.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...a, ...l, ...d, customActionTypes: (0, n.X7)(d) },
                h = r.Z.register(u);
        },
        108304: (e, t, o) => {
            o.r(t), o.d(t, { PlacePickerScreen: () => G, default: () => Q });
            var s = o(202784),
                n = o(325686),
                r = o(470397),
                i = o(731708),
                a = o(143670),
                l = o(154003),
                c = o(371344),
                d = o(946847),
                u = o(392237),
                h = o(111677),
                p = o.n(h),
                m = o(171709),
                g = o(956272),
                b = o(264171),
                f = o(290402),
                y = o(980407),
                C = o(341276),
                E = o(27498),
                _ = o(312771),
                S = o(71620),
                w = o(668214),
                T = o(806528),
                k = o(843138),
                Z = o(390387),
                v = o(38562),
                R = o(632960);
            const B = (0, w.Z)()
                .propsFromState(() => ({ autotaggedLocation: k.Xm, initialResults: k.jK, initialFetchStatus: k.ke, lastSearchResults: k.uD, lastSearchFetchStatus: k.tn, position: T.Bz, taggedLocation: R._d, userCountry: Z.GG }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("PLACE_PICKER"), loadGeoLocation: T.iG, fetchInitialPlacesIfNeeded: k.BJ, searchPlaces: k.k6, updateLastSelectedPlace: k.T5, updateSettings: v.VP, updateSingleComposer: R.zi }))
                .withAnalytics({ page: "compose", section: "place_picker" });
            class I {
                constructor(e, t, o) {
                    (this.formatter = e), (this.fallbackFormatter = t), (this.fallbackRatio = o);
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
                H = p().e68b09b4,
                z = p().be6cc44e,
                W = p().d8ef3232,
                V = p().cce30dcc,
                q = p().fa9adac1;
            class G extends s.Component {
                constructor(e) {
                    super(e),
                        (this.state = { activeResultSet: E.Z0.initial, geoLocationError: void 0, query: "", selectedLocation: void 0, showSearchForButton: !1 }),
                        (this._appBarRef = s.createRef()),
                        (this._fetchInitialPlaces = () => {
                            const { createLocalApiErrorHandler: e, fetchInitialPlacesIfNeeded: t, taggedLocation: o } = this.props;
                            t()
                                .then(() => {
                                    const { autotaggedLocation: e } = this.props;
                                    o || this.setState({ selectedLocation: e });
                                })
                                .catch(e());
                        }),
                        (this._getActiveResults = () => {
                            const { initialResults: e, lastSearchResults: t } = this.props,
                                { activeResultSet: o } = this.state;
                            return o === E.Z0.initial ? e : t;
                        }),
                        (this._selectResults = () => {
                            const { query: e, selectedLocation: t } = this.state;
                            let o = this._getActiveResults()?.places || [];
                            return t && (o = [t, ...o.filter((e) => e.place.id !== t.place.id)]), o.filter((t) => t.place.full_name.toLowerCase().includes(e.toLowerCase()));
                        }),
                        (this._goBack = () => {
                            this._appBarRef.current?.goBack();
                        }),
                        (this._setTaggedLocation = (e) => {
                            const { updateLastSelectedPlace: t, updateSettings: o, updateSingleComposer: s } = this.props;
                            s({ updates: { taggedLocation: e } }), t(e), o({ shouldAutoTagLocation: !!e });
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
                                { activeResultSet: t, query: o } = this.state;
                            t === E.Z0.initial ? this._fetchInitialPlaces() : e(o);
                        }),
                        (this._handleLocationDisabledPromptDismiss = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._handleChange = (e) => {
                            const { value: t } = e.currentTarget,
                                o = t.length ? this.state.activeResultSet : E.Z0.initial;
                            this.setState({ activeResultSet: o, query: t, showSearchForButton: !!t.length });
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
                            const { position: t, userCountry: o } = this.props,
                                {
                                    place: {
                                        attributes: { street_address: n },
                                        centroid: a,
                                    },
                                } = e;
                            if (n && a && 2 === a.length && t) {
                                const e = ((e, t) => {
                                    const o = e.lat * (Math.PI / 180),
                                        s = t.lat * (Math.PI / 180),
                                        n = s - o,
                                        r = (t.long - e.long) * (Math.PI / 180);
                                    return 7917.6 * Math.asin(Math.sqrt(Math.sin(n / 2) * Math.sin(n / 2) + Math.cos(o) * Math.cos(s) * Math.sin(r / 2) * Math.sin(r / 2)));
                                })({ lat: t.coords.latitude, long: t.coords.longitude }, { lat: a[1], long: a[0] });
                                return s.createElement(
                                    r.Z,
                                    null,
                                    s.createElement(i.ZP, null, n),
                                    s.createElement(
                                        i.ZP,
                                        null,
                                        ((e, t = "us") => {
                                            if (L.find((e) => e === t.toLowerCase())) return x.format(e);
                                            {
                                                const t = 1.609344 * e;
                                                return P.format(t);
                                            }
                                        })(e, o),
                                    ),
                                );
                            }
                        }),
                        (this._renderPlace = (e) => {
                            const { selectedLocation: t } = this.state;
                            return s.createElement(a.Z, { actionSubText: this._renderPlaceSubtext(e), actionText: e.place.full_name, isSelected: e.place.id === t?.place.id, key: e.place.id, onClick: this._handlePlaceClick(e), selectable: !0 });
                        }),
                        (this._renderPlaces = (e) => (e.length ? e.map((e) => this._renderPlace(e)) : s.createElement(i.ZP, { align: "center", style: j.noPlacesText }, N))),
                        (this._renderAttributionIfNeeded = () => {
                            const e = this._getActiveResults();
                            return e?.attributions.has(E.xt.foursquare) ? s.createElement(m.default, { style: j.foursquareIcon }) : null;
                        }),
                        (this._renderResults = () => {
                            const { query: e, showSearchForButton: t } = this.state,
                                o = this._selectResults();
                            return s.createElement(n.Z, null, this._renderPlaces(o), t ? s.createElement(a.Z, { actionText: q({ query: e }), onClick: this._handleSubmit, textColor: "primary" }) : null, this._renderAttributionIfNeeded());
                        }),
                        (this._renderRightControl = () => s.createElement(n.Z, { style: j.actionButtonContainer }, s.createElement(l.ZP, { onPress: this._handleRemove, size: "small", style: j.actionButton, type: "primaryText" }, H), s.createElement(l.ZP, { onPress: this._handleDone, size: "small", style: j.actionButton, type: "primaryFilled" }, D))),
                        (this._renderGeoPicker = () => {
                            const { history: e, initialFetchStatus: t, lastSearchFetchStatus: o } = this.props,
                                { activeResultSet: n } = this.state,
                                r = n === E.Z0.initial ? t : o;
                            return s.createElement(y.Z, { appBarRef: this._appBarRef, history: e, onBackClick: this._handleBack, rightControl: this._renderRightControl(), title: V }, s.createElement(c.Z, { Icon: g.default, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSubmit, placeholder: z, style: j.search, withClearButton: !0 }), s.createElement(f.Z, { fetchStatus: r === _.ZP.NONE ? _.ZP.LOADING : r, onRequestRetry: this._handleRetry, render: this._renderResults, retryMessage: W }));
                        }),
                        (this._renderLocationDisabledPrompt = () => {
                            const { geoLocationError: e } = this.state;
                            let t = U,
                                o = F;
                            return e && e.code === C.M.PERMISSION_DENIED && ((t = M), (o = A)), s.createElement(d.Z, { actionLabel: O, graphic: b.default, headline: t, onAction: this._handleLocationDisabledPromptDismiss, onClose: this._handleLocationDisabledPromptDismiss, subtext: o });
                        });
                    const { autotaggedLocation: t, initialResults: o, taggedLocation: u } = e;
                    u ? (this.state.selectedLocation = u) : o && (this.state.selectedLocation = t);
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
                Q = B(G);
        },
        122421: (e, t, o) => {
            o.r(t), o.d(t, { Recipients: () => L, default: () => D });
            var s = o(202784),
                n = o(325686),
                r = o(420412),
                i = o(844685),
                a = o(96083),
                l = o(731708),
                c = o(154003),
                d = o(111677),
                u = o.n(d),
                h = o(166852),
                p = o(980407),
                m = o(240089),
                g = o(62857),
                b = o(735e3),
                f = o(293115),
                y = o(615027),
                C = o(24949),
                E = o(47743),
                _ = o(668214),
                S = o(390387),
                w = o(632960);
            const T = (e, t) => t.location.state,
                k = (e, t) => {
                    const o = T(0, t);
                    return o && o.inReplyToStatus;
                },
                Z = (e, t) => {
                    const o = T(0, t);
                    return (o && o.excludedRecipients) || (0, b.o)();
                },
                v = (0, _.Z)()
                    .propsFromState(() => ({ recipientIds: (0, C.P1)(k, S._h, (e, t) => (e && t ? (0, E.YT)({ inReplyToStatus: e, viewerUserId: t, excludeReplyUser: !0 }).map((e) => e.id_str) : (0, b.o)())), initialExcludedRecipients: Z, inReplyToStatus: k }))
                    .propsFromActions(() => ({ updateExcludedRecipientsV2: w.OO })),
                R = u().c55eed72,
                B = u().b772cd66,
                I = u().caca3102,
                x = u().c6a6dc2f,
                P = { page: "compose", section: "recipients" },
                L = ({ history: e, inReplyToStatus: t, initialExcludedRecipients: o, recipientIds: d, updateExcludedRecipientsV2: u }) => {
                    const [C, E] = s.useState(o);
                    if (!t) return s.createElement(y.Z, { to: "/compose/post" });
                    const { user: _ } = t.retweeted_status || t,
                        S = (e) => {
                            E(e ? (0, b.o)() : d);
                        },
                        w = (e) => () => {
                            const t = -1 !== C.indexOf(e);
                            E(t ? C.filter((t) => t !== e) : (0, h.Z)([...C, e]));
                        },
                        T = () => {
                            u(C), e.goBack();
                        },
                        k = () => (d.length > 1 ? s.createElement(a.Z, { checked: 0 === C.length, onChange: S }) : null),
                        Z = ({ isBlocking: e, screenName: t }) => (e ? s.createElement(l.ZP, { color: "magenta500", size: "subtext2" }, x({ screenName: t })) : null),
                        v = (e) => {
                            if (!t) return null;
                            const { user: o } = t.retweeted_status || t,
                                n = -1 !== C.indexOf(e),
                                r = e === o.id_str,
                                i = s.createElement(a.Z, { checked: !n, disabled: r, onChange: w(e) });
                            return s.createElement(m.ZP, { bottomControl: Z, cellClickable: !r, decoration: i, isFakeButtonRoleWithListItem: !r, key: e, onClick: w(e), promotedItemType: "users", userId: e, withLink: !1 });
                        };
                    return s.createElement(f.nO, { namespace: P }, s.createElement(p.Z, { backLocation: "/compose/post", history: e, onBackClick: T, rightControl: s.createElement(c.ZP, { onPress: T, size: "xSmall", type: "brandFilled" }, B), title: R }, v(_.id_str), d.length ? s.createElement(n.Z, null, s.createElement(r.Z, null), s.createElement(i.Z, { rightControl: k(), text: I }), s.createElement(g.Z, { renderUserCell: v, userIds: d })) : null));
                },
                D = v(L);
        },
        379069: (e, t, o) => {
            o.r(t), o.d(t, { Compose: () => Oe, default: () => ze });
            o(136728);
            var s = o(202784),
                n = o(360917),
                r = o.n(n),
                i = o(928316),
                a = o(325686),
                l = o(154003),
                c = o(822399),
                d = o(537392),
                u = o(529356),
                h = o(386802),
                p = o(392237),
                m = o(111677),
                g = o.n(m),
                b = o(912021),
                f = o(744531),
                y = o(731708);
            function C(e) {
                const t = e - new Date().getTime(),
                    o = 1e3 * Math.round(t < 0 ? 0 : t / 1e3),
                    s = new Date(o).toLocaleString("default", { minute: "numeric", second: "numeric" }),
                    [n, r] = s.split(":");
                return { minutes: +n, seconds: +r, formatted: s };
            }
            const E = ({ "aria-label": e, expiration: t, getAccessibilityLiveLabel: o, onTimeElapsed: n }) => {
                    const r = s.useRef(o),
                        i = s.useRef(n);
                    (r.current = o), (i.current = n);
                    const [l, c] = s.useState(() => C(+t)),
                        [d, u] = s.useState(() => o?.(l));
                    s.useEffect(() => {
                        const e = setInterval(() => {
                            const o = C(+t),
                                s = r.current?.(o);
                            u(s), c(o), "00:00" === o.formatted && (clearInterval(e), i.current?.());
                        }, 500);
                        return () => clearInterval(e);
                    }, [t]);
                    const h = "function" == typeof e ? e(l) : e;
                    return s.createElement(a.Z, { style: _.root }, s.createElement(y.ZP, { "aria-label": h && `${h}`, color: "gray900", testID: "displayedCountdown", weight: "medium" }, l.formatted, d && s.createElement(a.Z, { "aria-label": d, "aria-live": "polite" })));
                },
                _ = p.default.create((e) => ({ root: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space2, paddingBottom: e.spaces.space4, paddingEnd: 6, paddingStart: 6, paddingTop: e.spaces.space4 } }));
            var S = o(980407),
                w = o(231214),
                T = o(472826),
                k = o(632552),
                Z = o(10656),
                v = o(96206),
                R = o(293115),
                B = o(349745),
                I = o(704279),
                x = o(346789),
                P = o(24949),
                L = o(370751),
                D = o(71620),
                M = o(646522),
                A = o(668214),
                U = o(492057),
                F = o(669002),
                N = o(175856),
                O = o(497294),
                H = o(709318),
                z = o(872788),
                W = o(964917),
                V = o(137204),
                q = o(632960),
                G = o(836255),
                j = o(919022);
            const Q = (e) => q.tS(e, ""),
                K = (e) => q.WQ(e, ""),
                $ = (e) => q.Gz(e, ""),
                J = (e) => q.SJ(e, ""),
                Y = (e) => (t, o) => {
                    const s = ((e, t) => t.location.state)(0, o);
                    return s ? e(s) : void 0;
                },
                X = (e, t) => t.activeUser || j.ZP.selectViewerUser(e),
                ee = (e, t) => {
                    const {
                        location: { query: o },
                    } = t;
                    return o && "string" == typeof o.in_reply_to ? o.in_reply_to : void 0;
                },
                te = Y((e) => e.inReplyToStatusId),
                oe = (e, t) => {
                    const o = ee(0, t) || te(e, t);
                    return o ? G.Z.selectHydrated(e, o) : void 0;
                },
                se = (e, t) => t.location.pathname.indexOf("/intent/") > -1,
                ne = Y((e) => e.defaultText),
                re = (e, t) => {
                    const o = ne(e, t);
                    return (0, M.Z)(t.location) || o;
                },
                ie = Y((e) => e.quotedStatus),
                ae = (e, t) => (t.quotedStatus ? t.quotedStatus : ie(e, t)),
                le = ({ cardUrl: e, mediaIds: t, ...o }) => o,
                ce = Y((e) => e.isSelfThreadReply),
                de = Y((e) => e.hideUnsentTweetsButton),
                ue = Y((e) => e.headingSubtitle),
                he = Y((e) => e.headingTitle),
                pe = Y((e) => !!e.previousTweetId),
                me = Y((e) => e.editableUntil);
            function ge(e, t) {
                const { previousPath: o, selectedCommunityId: s } = t.location.state || {};
                let n;
                const r = (0, H.br)(e);
                if ((s ? (n = s) : o && o.includes("/home") && r.type === z.FO.COMMUNITY && (n = r.id), n)) {
                    const t = (0, U.BL)(e, { communityId: n });
                    if (t && "NonMember" !== t.role) return t;
                }
            }
            function be(e, t) {
                const { previousPath: o, selectedCommunityId: s } = t.location.state || {},
                    n = (0, H.br)(e);
                let r;
                if ((s ? (r = s) : o && o.includes("/home") && n.type === z.FO.COMMUNITY && (r = n.id), r)) {
                    const t = (0, U.BL)(e, { communityId: r });
                    return !(!t || "NonMember" !== t.role);
                }
                return !1;
            }
            const fe = Y((e) => e.trustedFriendsValue),
                ye = Y((e) => e.previousTweetId),
                Ce = (e, t) => {
                    const o = ye(e, t);
                    return o ? G.Z.createHydratedSelector(e)(o) : null;
                },
                Ee = (e, t) => (0, N.t5)(e, N.xH),
                _e = (0, A.Z)()
                    .propsFromState(() => ({
                        activeUser: X,
                        audienceControlsValue: (0, P.P1)(
                            Ce,
                            (e, t) => q.oN(e, "modal"),
                            V.Ln,
                            (e, t) => q.SJ(e, "modal"),
                            (e, t, o, s) => (e ? (0, k.CB)(e, o, s) : t),
                        ),
                        broadcastCommunityTweet: J,
                        composerData: (0, P.P1)(Q, re, ae, O.gz, se, (e, t, o, s, n) =>
                            e.map((e, r) => {
                                const i = (0, L.Z)(e.mediaIds || []),
                                    a = s.filter((e) => i.has(e.id));
                                return { ...le(e), media: a, quotedStatus: 0 === r ? o : void 0, text: 0 === r && t && !n ? t : e.text };
                            }),
                        ),
                        composeSemanticCoreId: Y((e) => e.composeSemanticCoreId),
                        draftTweets: F.Fq,
                        editableUntil: me,
                        hideUnsentTweetsButton: de,
                        inReplyToStatus: oe,
                        inReplyToStatusId: ee,
                        isEdit: pe,
                        isIntentRoute: se,
                        isSelfThreadReply: ce,
                        isSending: K,
                        isAutoSaving: $,
                        scheduledTweets: W.yD,
                        selectedCommunity: ge,
                        shouldShowNonCommunityMemberPrompt: be,
                        selectedTrustedFriendsValue: fe,
                        sendingProgress: q.ZE,
                        subtitle: ue,
                        shouldShowCommunityAudienceEducation: Ee,
                        title: he,
                    }))
                    .propsFromActions(() => ({ createDraftTweetApiErrorHandler: (0, D.zr)(F.CA), createScheduledTweetApiErrorHandler: (0, D.zr)(W.Hf), fetchScheduledTweets: W.FP, fetchDraftTweets: F.Le, addCommunityAudienceEducationFlag: () => (0, N.pj)(N.xH), updateAudienceControlsValue: q.sU, setActiveParentKey: q.jr }));
            var Se = o(837880);
            const we = g().e6042757,
                Te = g().a4e39717,
                ke = 3e5,
                Ze = { "05:00": !0, "01:00": !0 };
            function ve({ formatted: e, minutes: t }) {
                return Ze[e] && Te({ minutes: t });
            }
            function Re({ minutes: e, seconds: t }) {
                return we({ minutes: e, seconds: t });
            }
            const Be = "tweetButton",
                Ie = g().a609edbe,
                xe = g().d4ebc798,
                Pe = g().j24c37b2,
                Le = g().dc295bb0,
                De = g().e536de22,
                Me = g().cb817dae,
                Ae = "compose",
                Ue = { page: Ae },
                Fe = { page: Ae, section: "reply" },
                Ne = { context: "compose_intent_logged_in" };
            class Oe extends s.Component {
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
                        (this._handleAppBarHeight = (0, b.Z)(() => {
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
                                { activeUser: o, audienceControlsValue: n, composerData: r, inReplyToStatus: i, isEdit: c, isSelfThreadReply: d, isSending: u } = this.props,
                                h = "all" === n.conversationControlsValue,
                                p = !e || u || !o || this.is_uploading;
                            return s.createElement(a.Z, { style: He.rightControlContainer }, c ? this._renderCountdownTimer() : s.createElement(x.Z, { disabled: p, isAudienceAll: h, isComposerValid: e, isEdit: !!c, isModal: t, isQuote: this.isQuoteTweet, isReply: !!i, isRetweet: !!this.isRetweet, isScheduled: this.isScheduled, isSelfThreadReply: !!d, isThread: this.isThread, onTweetWithBoostPress: this._handleSendTweetWithBoost, renderFallback: this._renderDraftsHeading, shouldShow: !t, tweetText: r[0].text, viewer: o }), t ? null : s.createElement(l.ZP, { disabled: p, onPress: this._handleSendTweet, size: "small", testID: Be, type: "brandFilled" }, (0, k.of)({ inReplyToStatus: !!i, isSelfThreadReply: !!d, isQuoteTweet: !!this.isQuoteTweet, isRetweet: !!this.isRetweet, isScheduled: !!this.isScheduled, isThread: this.isThread, isEdit: !!c })));
                        }),
                        (this._renderHeaderWithProgressBar = (e) => {
                            const { isModal: t } = this.context,
                                { isAutoSaving: o, isSending: n, sendingProgress: r } = this.props;
                            return s.createElement(s.Fragment, null, s.createElement(c.Z, { progress: n && !o ? Math.max(r, 0.02) : 0, style: [He.progressBar, t && He.progressBarModal] }), e);
                        }),
                        (this._renderDraftsHeading = () => {
                            const { hideUnsentTweetsButton: e } = this.props;
                            if (!e) return s.createElement(l.ZP, { onPress: this._handleOpenUnsent, size: "small", testID: "unsentButton", type: "brandText" }, xe);
                        }),
                        (this._renderCountdownTimer = () => {
                            const { editableUntil: e } = this.props,
                                { editCountdownShown: t } = this.state;
                            if (!t || !e) return null;
                            return s.createElement(E, {
                                "aria-label": Re,
                                expiration: e,
                                getAccessibilityLiveLabel: ve,
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
                    const { activeUser: e, broadcastCommunityTweet: t, createDraftTweetApiErrorHandler: o, createScheduledTweetApiErrorHandler: s, editableUntil: n, fetchDraftTweets: r, fetchScheduledTweets: i, history: a, inReplyToStatus: l, isEdit: c, location: d, selectedCommunity: u, selectedTrustedFriendsValue: h, updateAudienceControlsValue: p } = this.props;
                    (this._unlockReload = v.Z.acquire()), a.setModalRouteBreakpoint(a.location), e && (i().catch(s()), r().catch(o())), u && (p({ _type: "community_members", communityIdValue: u.id_str, conversationControlsValue: "community_members", broadcast: t }, "modal"), a.replace({ pathname: d.pathname, state: (0, f.Z)(d.state || {}, "selectedCommunityId") })), h && (p({ _type: "trusted_friends_tweet", trustedFriendsValue: h, conversationControlsValue: "trusted_friends_tweet" }, "modal"), a.replace({ pathname: d.pathname, state: (0, f.Z)(d.state || {}, "trustedFriendsValue") })), l?.exclusivity_info ? p({ _type: "super_followers_exclusive", conversationControlsValue: "super_followers_exclusive", exclusivityControlValue: {} }) : l?.community_id_str ? p({ _type: "community_members", communityIdValue: l.community_id_str, conversationControlsValue: "community_members" }) : l?.trusted_friends_info && p({ _type: "trusted_friends_tweet", conversationControlsValue: "trusted_friends_tweet", trustedFriendsValue: { trusted_friends_list_id: "1482057446797373440" } });
                    const m = +n;
                    c &&
                        !this._cancelEditTimeout &&
                        m >= 0 &&
                        (this._handleEditCountdownTimeout(m),
                        (this._cancelEditTimeout = (function (e, t) {
                            const o = e - Date.now() - ke,
                                s = (0, Se.Z)(o, 0, 2147483647),
                                n = setTimeout(t, s, e);
                            return () => clearTimeout(n);
                        })(m, this._handleEditCountdownTimeout)));
                }
                componentWillUnmount() {
                    const { history: e } = this.props;
                    e.setModalRouteBreakpoint(e.location), this._unlockReload(), this._cancelEditTimeout?.();
                }
                render() {
                    const { activeUser: e, composeHeader: t, composeSemanticCoreId: o, history: n, isEdit: r, isIntentRoute: i, location: a, quotedStatus: l, subtitle: c, title: h } = this.props,
                        p = i && !e,
                        { isModal: m } = this.context;
                    return s.createElement(
                        R.nO,
                        { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                        s.createElement(d.ZP, null, ({ containerWidth: i }) => {
                            const d = Z.Z.shouldRenderAsModal(i),
                                g = (p && d) || this.showCommunityNonMemberPrompt;
                            return s.createElement(s.Fragment, null, this.showCommunityNonMemberPrompt ? s.createElement(u.Z, { actionLabel: Pe, graphicDisplayMode: "none", headline: Le, onAction: this._handleCloseModal, subtext: De }) : null, p && s.createElement(w.Z, { history: n, location: a }), g ? null : s.createElement(S.Z, { appBarRef: this._setAppBarRef, documentTitle: Ie, hideBackButton: !1, history: n, onBackClick: this._handleBackClick, renderHeader: this._renderHeaderWithProgressBar, rightControl: this._renderAppBarRightControl(), subtitle: c, title: r ? Me : h }, s.createElement(T.Z, { activeUser: e, composeHeader: t, composeSemanticCoreId: o, containerWidth: i, history: n, isModal: m, location: a, onCloseComposer: this._handleCloseComposer, onHandleAppBarHeight: this._handleAppBarHeight, onRef: this._handleComposeContainerRef, quotedStatus: l, setValidity: this._setValidity })));
                        }),
                    );
                }
                get showCommunityNonMemberPrompt() {
                    const { inReplyToStatus: e, shouldShowNonCommunityMemberPrompt: t } = this.props,
                        o = null == e && !this.isQuoteTweet;
                    return t && o;
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
                    return (0, B.TO)(e[0].scheduledFor);
                }
                get is_uploading() {
                    return !!this._composeContainerRef && this._composeContainerRef.is_uploading;
                }
            }
            Oe.contextType = h.Z;
            const He = p.default.create((e) => ({ progressBar: { position: "fixed", borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small, zIndex: e.componentZIndices.appBarZIndex + 1 }, progressBarModal: { position: "absolute" }, rightControlContainer: { display: "inline-flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 } })),
                ze = _e(Oe);
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => i });
            var s = o(202784),
                n = o(325686),
                r = o(392237);
            function i({ spacing: e, style: t }) {
                return s.createElement(n.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? r.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = r.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => p });
            var s = o(202784),
                n = o(476984),
                r = o.n(n),
                i = o(143778),
                a = o(750410),
                l = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends s.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: n, icon: r, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (n) {
                        case c:
                            return b ? s.createElement(a.Z, { icon: r, onRequestRetry: d, retryMessage: g }) : o ? s.createElement(l.m, { failureMessage: o }) : m();
                        case u:
                            return s.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(202784),
                n = o(325686),
                r = o(235902),
                i = o(885015),
                a = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return o ? s.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, s.createElement(n.Z, { style: c.gapColumn }, s.createElement(n.Z, { style: [c.gap, d] })), s.createElement(n.Z, { style: c.gapText }, o), s.createElement(n.Z, { style: c.gapColumn }, s.createElement(n.Z, { style: [c.gap, d] }))) : s.createElement(n.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                n = o(202784),
                r = o(325686),
                i = o(392237);
            class a extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...i } = this.props,
                        a = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return n.createElement(r.Z, (0, s.Z)({ style: [t, l.root, o && l.withGutter] }, i), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        41065: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var s = o(202784),
                n = o(890601),
                r = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        391366: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var s = o(202784),
                n = o(890601),
                r = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var s = o(202784),
                n = o(890601),
                r = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => n, Z: () => s });
            o(136728);
            const s = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (o, s, n) => {
                        const r = t ? t(s, n, e) : !!s;
                        return r && o[0].push(s), !r && o[1].push(s), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Compose.cc62263a.js.map
