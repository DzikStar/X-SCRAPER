"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashMenu"],
    {
        906433: (e, t, r) => {
            r.d(t, { Z: () => w });
            r(136728);
            var n = r(202784),
                o = r(325686),
                a = r(952428),
                l = r(731708),
                s = r(310088),
                i = r(392237),
                d = r(111677),
                c = r.n(d),
                u = r(206962);
            const m = () => c().d9ef2842,
                h = c().d86bbf0f,
                p = c().h6beb5fb,
                w = ({ badgeCount: e, decoration: t, icon: r, iconColor: i, label: d, link: c, onClick: w, pip: f, rightControl: g, testID: D }) =>
                    n.createElement(
                        o.Z,
                        { style: b.dashMenuItem },
                        n.createElement(
                            a.Z,
                            { link: c, onClick: w, style: b.link, testID: D },
                            n.createElement(
                                o.Z,
                                { style: b.item },
                                r
                                    ? n.createElement(r, {
                                          style: (() => {
                                              const e = [b.icon, b.iconWithDashRedesign];
                                              return i && e.push({ color: i }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                n.createElement(l.ZP, { numberOfLines: 1, size: "headline1", style: b.itemLabel, weight: "bold" }, d),
                                e || f ? n.createElement(o.Z, { style: b.itemAccessory }, n.createElement(s.Z, { count: e, pip: f, standalone: !0, truncatedCountFormatter: p, unreadCountLabel: f ? m : h })) : null,
                                t ? n.createElement(o.Z, { style: b.leftMargin }, t) : null,
                            ),
                        ),
                        g,
                    ),
                b = i.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, t, r) => {
            r.d(t, { Z: () => k });
            var n = r(202784),
                o = r(325686),
                a = r(661810),
                l = r(952428),
                s = r(731708),
                i = r(392237),
                d = r(516951),
                c = r(500002),
                u = r(443781),
                m = r(71620),
                h = r(668214),
                p = r(172497),
                w = r(466036),
                b = r(390387),
                f = r(919022);
            const g = (0, h.Z)()
                .propsFromState(() => ({ communitiesActions: b.yK, hasCommunityMemberships: p.fn, pendingFollowersInfo: w.sC, viewerUser: f.ZP.selectViewerUser, userFeatures: b.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: t, pendingFollowersInfo: r, userFeatures: n, viewerUser: o }) => {
                    const { acceptedIds: a, ids: l } = r;
                    return { communitiesActions: e, acceptedFollowerCount: a.length, hasCommunityMemberships: t, viewerUser: o, pendingFollowerCount: l.length - a.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: w.GE }))
                .withAnalytics();
            var D = r(906433),
                C = r(879526);
            const M = ({ acceptedFollowerCount: e, analytics: t, pendingFollowerCount: r, viewerUser: i, onClose: c = d.Z }) => {
                    const { featureSwitches: m, userClaims: h } = (0, u.QZ)(),
                        { coreItems: p, countrySpecificItems: w } = (0, C.O)({ analytics: t, featureSwitches: m, onClose: c, userClaims: h, viewerUser: i, acceptedFollowerCount: e, pendingFollowerCount: r });
                    return n.createElement(
                        n.Fragment,
                        null,
                        ((e) =>
                            e.map((e, t) => {
                                const { component: r = D.Z, ...o } = e,
                                    a = { ...o },
                                    l = n.createElement(r, a);
                                return n.createElement(n.Fragment, { key: t }, l);
                            }))(p),
                        ((b = w),
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(o.Z, { style: E.redesignDivider }, n.createElement(a.Z, { space: "space12", style: E.divider })),
                            b.map((e, t) => n.createElement(l.Z, { key: t, link: e.link, onClick: e.onClick, style: E.countrySpecificItem }, n.createElement(s.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var b;
                },
                k = (0, c.ZP)(g(n.memo(M))),
                E = i.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        569591: (e, t, r) => {
            r.r(t), r.d(t, { DashMenu: () => K, default: () => Y });
            var n = r(202784),
                o = r(325686),
                a = r(266704),
                l = r(525271),
                s = r(392237),
                i = r(111677),
                d = r.n(i),
                c = r(952793),
                u = r(839090),
                m = r(655352),
                h = r(943914),
                p = r(310088),
                w = r(530732),
                b = r(823161),
                f = r(154003),
                g = r(379327),
                D = r(149170),
                C = r(380155),
                M = r(725516),
                k = r(125363),
                E = r(390387),
                y = r(919022),
                _ = r(110512),
                v = r(105131),
                Z = r(206962),
                A = r(71620),
                S = r(668214),
                P = r(454319),
                I = r(956817);
            const x = (0, S.Z)()
                    .propsFromState(() => ({ multiAccountUsers: P.$4, showMultiAccountOverflowPip: P.Zt, delegateUser: E.sy }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, A.zr)("DASH_MENU_ACCOUNT_SWITCH"), switchAccount: I.y })),
                T = d().da4691aa,
                U = d().c7e55ccf,
                F = d().d86bbf0f,
                B = d().h6beb5fb,
                N = { page: "dash" },
                L = ({ createLocalApiErrorHandler: e, delegateUser: t, multiAccountUsers: r, onClose: a, showMultiAccountOverflowPip: l, switchAccount: s }) => {
                    const i = (0, M.z)(),
                        d = (0, k.v9)(y.ZP.selectLoggedInUser),
                        c = (0, _.V7)(),
                        u = (0, k.I0)(),
                        m = t || c.length || r.length > 0,
                        h = (e) => (e ? n.createElement(p.Z, { count: e, truncatedCountFormatter: B, unreadCountLabel: F }) : null),
                        v = n.useCallback(
                            (t, r, n) => () => {
                                i.scribe({ ...N, section: n ? "switch_to_protected_account" : "switch_account", element: r ? "account_bubble_badged" : "account_bubble", action: "click" }), s({ user_id: t }).catch(e(C.y));
                            },
                            [i, e, s],
                        ),
                        A = n.useCallback(() => {
                            i.scribe({ ...N, section: "switch_account", element: "dash_account_switcher", action: "click" }), a && a();
                        }, [i, a]);
                    return n.createElement(
                        o.Z,
                        { style: W.root },
                        (() => {
                            if (d && c.length) {
                                const e = c.map((e) => ({ screenName: e.core.screen_name, userId: e.legacy.id_str, badgeCount: void 0, avatarImageUrl: e.avatar?.image_url })),
                                    r = { screenName: d.screen_name, userId: d.id_str, badgeCount: void 0, avatarImageUrl: d.profile_image_url_https };
                                return [r, ...e.slice(0, 2)]
                                    .filter(({ userId: e }) => e !== (t?.userId ?? r.userId))
                                    .slice(0, 2)
                                    .map((e) => n.createElement(w.Z, { "aria-label": U({ screenname: e.screenName }), key: e.userId, onPress: () => (e.userId === d.id_str ? u((0, E.YJ)()) : u((0, E.vU)({ userId: e.userId }))), role: "button", style: W.link }, n.createElement(b.default, { decoration: h(e.badgeCount), size: "large", uri: e.avatarImageUrl })));
                            }
                            return r.map((e) => n.createElement(w.Z, { "aria-label": U({ screenname: e.screen_name }), key: e.user_id, onPress: v(e.user_id, !!e.badgeCount, e.is_protected), role: "button", style: W.link }, n.createElement(b.default, { decoration: h(e.badgeCount), size: "large", uri: e.avatar_image_url })));
                        })(),
                        (() => {
                            const e = m ? n.createElement(D.default, { testID: Z.Z.iconMore }) : n.createElement(g.default, { testID: Z.Z.iconPlus });
                            return n.createElement(o.Z, null, n.createElement(f.ZP, { "aria-label": T, icon: e, link: "/account/switch", onPress: A, size: "small", testID: Z.Z.switcher, type: "primaryOutlined" }), l ? n.createElement(p.Z, { pip: !0, truncatedCountFormatter: B, unreadCountLabel: F }) : null);
                        })(),
                    );
                },
                W = s.default.create((e) => ({ root: { alignSelf: "flex-start", flexDirection: "row" }, link: { borderRadius: e.borderRadii.infinite, marginEnd: e.spaces.space4 } })),
                V = (0, v.P3)(x(n.memo(L)));
            var O = r(659773);
            const R = (0, S.Z)()
                .propsFromState(() => ({ viewerUser: y.ZP.selectViewerUser }))
                .propsFromActions(() => ({ fetchDataUsageSettingsIfNeeded: O.MJ }))
                .withAnalytics({ page: "dash" });
            var H = r(120735);
            const z = d().i5f7b6b8,
                G = (e) => ({ avatar: !0, badges: !0, description: !1, followButton: !1, followIndicator: !1, followersYouKnow: !1, fullName: !0, label: !1, stats: !0, subscriptionsCount: e }),
                $ = n.createElement(h.B, null, n.createElement(V, null)),
                K = (e) => {
                    const { alignMenu: t, analytics: r, fetchDataUsageSettingsIfNeeded: s, onClose: i, renderCustomMenuItems: d, viewerUser: h, withMoreSideNavOverflow: p } = e,
                        w = (0, c.hC)("creator_subscriptions_subscription_count_enabled");
                    n.useEffect(() => {
                        s(), r.scribePageImpression();
                    }, [r, s]);
                    const b =
                        ((f = "profile_overflow_item"),
                        () => {
                            f && r.scribe({ section: "overflow_menu", element: f, action: "click" }), i && i();
                        });
                    var f;
                    const g = (e) => {
                        if (!h) return null;
                        const { creator_subscriptions_count: t, followers_count: r, friends_count: l, highlightedLabel: s, is_blue_verified: c, name: u, profile_image_url_https: f, protected: g, screen_name: D, translator_type: C, verified: M, verified_type: k } = h;
                        return (0, m.ZP)() ? n.createElement(o.Z, { style: j.dropdownMinWidth }, d ? d() : n.createElement(H.Z, { onClose: i, withMoreSideNavOverflow: p })) : n.createElement(o.Z, { style: [e && j.scrollableContentPadding, (0, m.ZP)() && j.menuContentWidth] }, n.createElement(o.Z, { "aria-label": z, style: j.header }, n.createElement(a.Z, { decoration: $, isAllowedToViewOptions: G(w), isLoggedIn: !0, isUserBlueVerified: c, isUserProtected: g, isUserStatsWithLink: !0, isUserVerified: M, onAvatarClick: b, onScreenNameClick: b, subscriptionsCount: t, userAvatarSize: "xLarge", userAvatarUri: f, userFollowersCount: r, userFriendsCount: l, userHighlightedLabel: s, userName: u, userScreenName: D, userTranslatorType: C, userVerifiedType: k, withNameWrap: !0 })), d ? d() : n.createElement(H.Z, { onClose: i }));
                    };
                    return (0, m.ZP)() ? n.createElement(u.Z, { animateInDuration: "long", isFixed: !0, onDismiss: i, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, g(!1)) : n.createElement(l.Z, { align: t, onDismissed: i, style: j.drawer, withTopBar: !1 }, g(!0));
                },
                Y = R(K),
                j = s.default.create((e) => ({ backgroundArea: { backgroundColor: e.colors.activeBlack }, drawer: { maxWidth: "70%" }, dropdownMinWidth: { minWidth: "318px" }, wrapper: { alignSelf: "flex-start", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium, overflowY: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }, scrollableItems: { overflow: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", flexGrow: 1, flexShrink: 1 }, scrollableContentPadding: { paddingBottom: "44px" }, header: { flexGrow: 0, flexShrink: 0 }, avatarWrapper: { flexGrow: 1 }, userNames: { display: "flex", flexDirection: "column", paddingVertical: e.spaces.space12 }, menuContentWidth: { width: `calc(${e.spaces.space64} * 4.25)` } }));
        },
        839090: (e, t, r) => {
            r.d(t, { Z: () => n });
            r(202784);
            const n = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("icons.23"),
                        r.e("icons.0"),
                        r.e("icons.2"),
                        r.e("icons.16"),
                        r.e("icons.19"),
                        r.e("icons.10"),
                        r.e("icons.13"),
                        r.e("icons.24"),
                        r.e("icons.7"),
                        r.e("icons.22"),
                        r.e("icons.27"),
                        r.e("icons.17"),
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("icons.21"),
                        r.e("icons.18"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                        r.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        r.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        r.e("loader.WideLayout"),
                    ]).then(r.bind(r, 616753)),
            });
        },
        525271: (e, t, r) => {
            r.d(t, { Z: () => k });
            var n = r(202784),
                o = r(325686),
                a = r(111677),
                l = r.n(a),
                s = r(837020),
                i = r(461756),
                d = r(786998),
                c = r(154003),
                u = r(950822),
                m = r(743618),
                h = r(745153),
                p = r(292627),
                w = r(224162),
                b = r(392237);
            const f = l().af8fa2ae,
                g = n.createElement(s.default, null);
            class D extends n.Component {
                constructor(e) {
                    super(),
                        (this._isMounted = !0),
                        (this._setAnimationNode = (e) => {
                            this._animationNode = e;
                        }),
                        (this._handleTransitionEnd = (e) => {
                            !1 === this.state.isVisible && e.target instanceof window.HTMLElement && e.target === this._animationNode && this.props.onDismissed();
                        }),
                        (this._handleMaskClick = () => {
                            this._handleDismiss();
                        }),
                        (this._handleEsc = (e) => {
                            const { altKey: t, ctrlKey: r, key: n, metaKey: o } = e;
                            !(t || r || o) && "Escape" === n && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), i.Z.reducedMotionEnabled && this.props.onDismissed();
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    window.requestAnimationFrame(() => {
                        this._isMounted && this.setState({ isVisible: !0 });
                    });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { additionalControl: e, align: t, buttonType: r, children: a, style: l, subtitle: s, title: c, topBarStyle: b, withBackgroundBlur: f, withTopBar: g, withTransparentMask: D } = this.props,
                        { isVisible: k } = this.state;
                    return n.createElement(w.ZP.Consumer, null, ({ direction: w }) => {
                        const E = "rtl" === w,
                            y = k ? M.visibleDrawer : ("left" === t) === E ? M.offscreenRightDrawer : M.offscreenLeftDrawer,
                            _ = k && !D ? M.maskWithBg : M.maskTransparent,
                            v = k ? M.animateOpen : M.animateClose,
                            Z = i.Z.reducedMotionEnabled ? null : v;
                        return n.createElement(p.Z.Modal, null, n.createElement(h.Z, null, n.createElement(m.Z, null, n.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [M.mask, _, Z, f ? M.backgroundBlur : null, "left" === t ? M.alignLeft : M.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: C, style: [M.root, f ? M.backgroundRootBlur : null, y, Z, l], children: n.createElement(n.Fragment, null, g ? n.createElement(d.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(r) : null, rightControl: "left" === t ? this._renderCloseButton(r) : "right" === t ? e : null, style: b, subtitle: s, title: c }) : null, n.createElement(o.Z, { style: M.contentContainer }, a)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return n.createElement(c.ZP, { "aria-label": f, icon: g, onPress: this._handleMaskClick, type: e });
                }
            }
            D.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const C = (e) => {
                    e.stopPropagation();
                },
                M = b.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...b.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                k = D;
        },
        529509: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(202784),
                o = r(325686),
                a = r(111677),
                l = r.n(a),
                s = r(815858),
                i = r(731708),
                d = r(642153),
                c = r(530732),
                u = r(392237);
            const m = l().a35a5b10,
                h = l().fc8cd112,
                p = (e) => n.createElement(i.ZP, null, e);
            class w extends n.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: r, textStyle: a, userScreenName: l, withFacepile: u } = this.props,
                        h = this._renderMessage();
                    return n.createElement(s.Z, { duration: "long", show: void 0 !== r, type: "fade" }, r ? n.createElement(c.Z, { "aria-label": m, interactiveStyles: null, link: l ? ((p = l), `/${p}/followers_you_follow`) : void 0 }, ({ isHovered: r, isPressed: s }) => n.createElement(o.Z, { style: b.content }, !e && u ? n.createElement(d.Z, { userAvatarUrls: t }) : null, n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: [!e && b.message, (r || s) && !!l && b.underline, a] }, e && u ? n.createElement(d.Z, { style: b.inlineFacepile, userAvatarUrls: t }) : null, h))) : n.createElement(o.Z, { style: b.content }, n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var p;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return n.createElement(l().I18NFormatMessage, { $i18n: "c9e6167d" }, p(e[0]));
                }
                _renderTwoUsernames(e) {
                    return n.createElement(l().I18NFormatMessage, { $i18n: "ha91d1eb" }, p(e[0]), p(e[1]));
                }
                _renderThreeUsernames(e) {
                    return n.createElement(l().I18NFormatMessage, { $i18n: "f1069f9b" }, p(e[0]), p(e[1]), p(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const r = t - 2;
                    return n.createElement(l().I18NFormatMessage, { $i18n: "e8404c1f" }, p(e[0]), p(e[1]), r);
                }
            }
            w.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const b = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        280278: (e, t, r) => {
            r.d(t, { ZP: () => w });
            var n = r(202784),
                o = r(325686),
                a = r(827515),
                l = r(461756),
                s = r(731708),
                i = r(392237);
            const d = "up",
                c = "down",
                u = (e, t, r) => {
                    r((r) => {
                        const n = (0, a.Z)(e) ? (e > (r.count || 0) ? d : c) : d;
                        return { ...r, count: e, oldText: r.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                m = {};
            [d, c].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                p = i.default.create({ root: { overflow: "hidden" } }),
                w = (e) => {
                    const { children: t, containerStyle: r, count: i, ...c } = e,
                        [w, b] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
                        f = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (f.current)
                                if (l.Z.reducedMotionEnabled) b((r) => ({ ...r, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== w.pendingText) {
                                    t === w.text || ((0, a.Z)(e.count) && w.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((r) => ({ ...r, pendingCount: e.count, pendingText: t })), w.animating || u(e.count, t, b));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            f.current &&
                                !1 === w.animating &&
                                (w.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : w.pendingText && u(w.pendingCount, w.pendingText, b));
                        }, [w.animating, w.oldText]),
                        n.useMemo(() => {
                            const e = m[w.transitionDirection],
                                t = w.oldText && !l.Z.reducedMotionEnabled,
                                a = !w.animating && w.oldText && !l.Z.reducedMotionEnabled,
                                i = { ...h, ...(w.animating ? e.post : e.active) },
                                d = { ...(a ? e.pre : e.active) };
                            return n.createElement(
                                o.Z,
                                { style: [p.root, r] },
                                t ? n.createElement("span", { style: i }, n.createElement(s.ZP, c, w.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, b),
                                        style: d,
                                    },
                                    n.createElement(s.ZP, c, w.text),
                                ),
                            );
                        }, [r, c, w, f, b])
                    );
                };
        },
        98538: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(202784),
                o = r(325686),
                a = r(731708),
                l = r(891198),
                s = r(280278),
                i = r(392237);
            const d = "subtext1",
                c = n.createContext({ onMedia: !1 });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: o } = this.props;
                    return n.createElement(a.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, n.createElement(c.Provider, { value: { onMedia: r } }, e));
                }
            }
            (u.Group = (e) =>
                n.createElement(
                    o.Z,
                    { style: [m.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => n.createElement(o.Z, { key: t, style: t < r.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => n.createElement(c.Consumer, null, ({ onMedia: r }) => n.createElement(a.ZP, { children: e, color: r ? "white" : "gray700", size: d, style: t }))),
                (u.Value = ({ animated: e, children: t, count: r, style: o, weight: l = "bold" }) => n.createElement(c.Consumer, null, ({ onMedia: i }) => (e ? n.createElement(s.ZP, { children: t, count: r, size: d, style: o, weight: l }) : n.createElement(a.ZP, { children: t, color: i ? "white" : "text", size: d, style: o, weight: l }))));
            const m = i.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = u;
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                o = r(325686),
                a = r(731708),
                l = r(235902),
                s = r(649846),
                i = r(529509),
                d = r(392237),
                c = r(823161),
                u = r(238406),
                m = r(366635),
                h = r(646797);
            const p = () => !1;
            class w extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: a } = this.props,
                                { followersYouKnow: l } = e;
                            if (l && t && r) {
                                const { avatarUrls: e, count: t, names: l } = r;
                                return t ? n.createElement(o.Z, { style: [b.marginTop12, b.minHeight] }, "number" == typeof t && n.createElement(i.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: l, userScreenName: a })) : null;
                            }
                        });
                }
                render() {
                    return n.createElement(l.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return n.createElement(o.Z, { style: b.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: n } = t;
                    return n && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return n.createElement(o.Z, { style: b.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? n.createElement(o.Z, { style: b.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: a, userAvatarSize: s, userAvatarUri: i, userScreenName: d } = this.props,
                        { avatar: u } = e;
                    return n.createElement(o.Z, { style: b.row }, n.createElement(l.ZP.Provider, { value: { userAvatarLabel: p } }, n.createElement(c.default, { link: r, onClick: t, promotedContent: a, screenName: d, size: s, uri: u ? i : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: a } = t;
                    return r ? n.createElement(n.Fragment, null, this._renderUserAvatar(), n.createElement(o.Z, { style: b.marginTop8 }, this._renderUserName(), a && this._renderHighlightedUserLabel())) : n.createElement(o.Z, { style: b.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: o, onScreenNameClick: a, profileLink: l, promotedContent: s, userHighlightedLabel: i, userName: d, userScreenName: c, userTranslatorType: u, userVerifiedType: h, userWithFollowsYou: p, withNameWrap: w } = this.props,
                        { badges: b, followIndicator: f, fullName: g } = e;
                    return n.createElement(m.Z, { affiliateBadgeInfo: i, badgeContext: "account", isBlueVerified: b ? t : void 0, isProtected: b ? r : void 0, isVerified: b ? o : void 0, link: l, name: g ? d : c, nameSize: "headline2", onLinkClick: a, promotedContent: s, screenName: c, translatorType: b ? u : void 0, verifiedType: b ? h : void 0, withFollowsYou: f && p, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && n.createElement(s.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? n.createElement(o.Z, { style: b.marginTop4 }, n.createElement(a.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: a, userWithheldDescription: l, userWithheldEntities: s } = this.props,
                        { description: i } = e;
                    return i && t && r && a ? n.createElement(o.Z, { style: [b.row, b.marginTop12] }, n.createElement(u.Z, { description: t, entities: r, userId: a, withheldDescription: l, withheldEntities: s })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: a, userFollowersCount: l, userFriendsCount: s, userScreenName: i } = this.props,
                        { stats: d } = e;
                    return d ? n.createElement(o.Z, { style: [b.row, b.marginTop12] }, n.createElement(h.Z, { followersCount: l, friendsCount: s, onPress: r, screenName: i, subscriptionsCount: a, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const b = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var f = r(807896);
            var g = r(111677);
            const D = r.n(g)().ef633578;
            class C extends n.PureComponent {
                render() {
                    return n.createElement(w, this.props);
                }
            }
            (C.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: o, knownFollowers: a, onAvatarClick: l, onScreenNameClick: s, promotedContent: i, userDescription: d, userId: c, userName: u, userScreenName: m, ...h } = e,
                    p = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return n.createElement(w, (0, f.Z)({}, h, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: p.isUserStatsWithLink, isUserVerified: o, knownFollowers: a, onAvatarClick: l, onScreenNameClick: s, promotedContent: i, userAvatarUri: p.profile_image_url_https, userDescription: d, userEntities: p.entities, userFollowersCount: p.followers_count, userFriendsCount: p.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: p.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (C.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return n.createElement(w, { errorMessage: D, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: r, userScreenName: r, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                o = r(111677),
                a = r.n(o),
                l = r(891198),
                s = r(98538);
            class i extends n.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: o, style: i, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: h } = this.props,
                        p = `/${o}/verified_followers`;
                    return n.createElement(s.Z.Group, { style: i }, n.createElement(s.Z, { count: t, link: u ? `/${o}/following` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "g3ed1dd5" }, n.createElement(s.Z.Value, null, a().e4f1e6e4({ formattedCount: (0, l.wl)(t) })), n.createElement(s.Z.Label, null, a().daf8a75f({ count: t })))), n.createElement(s.Z, { count: e, link: u ? p : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "i06724fb" }, n.createElement(s.Z.Value, null, a().ef1f4fc6({ formattedCount: (0, l.wl)(e) })), n.createElement(s.Z.Label, null, a().ad9b5988({ count: e })))), m && void 0 !== d && n.createElement(s.Z, { count: d, link: u ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "eb0084f3" }, n.createElement(s.Z.Value, null, a().a9980948({ formattedCount: (0, l.wl)(d) })), n.createElement(s.Z.Label, null, a().ce44a35c({ count: d })))), h && c && n.createElement(s.Z, { count: c, link: u ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "fc1b8f67" }, n.createElement(s.Z.Value, null, a().id949f68({ formattedCount: (0, l.wl)(c) })), n.createElement(s.Z.Label, null, a().hb608cfc({ count: c })))));
                }
            }
            i.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => o, Z: () => n });
            r(136728);
            const n = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (r, n, o) => {
                        const a = t ? t(n, o, e) : !!n;
                        return a && r[0].push(n), !a && r[1].push(n), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashMenu.765d83da.js.map
