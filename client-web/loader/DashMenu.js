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
                s = r(731708),
                l = r(310088),
                i = r(392237),
                d = r(111677),
                c = r.n(d),
                u = r(206962);
            const m = () => c().d9ef2842,
                h = c().d86bbf0f,
                p = c().h6beb5fb,
                w = ({ badgeCount: e, decoration: t, icon: r, iconColor: i, label: d, link: c, onClick: w, pip: g, rightControl: D, testID: b }) =>
                    n.createElement(
                        o.Z,
                        { style: f.dashMenuItem },
                        n.createElement(
                            a.Z,
                            { link: c, onClick: w, style: f.link, testID: b },
                            n.createElement(
                                o.Z,
                                { style: f.item },
                                r
                                    ? n.createElement(r, {
                                          style: (() => {
                                              const e = [f.icon, f.iconWithDashRedesign];
                                              return i && e.push({ color: i }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                n.createElement(s.ZP, { numberOfLines: 1, size: "headline1", style: f.itemLabel, weight: "bold" }, d),
                                e || g ? n.createElement(o.Z, { style: f.itemAccessory }, n.createElement(l.Z, { count: e, pip: g, standalone: !0, truncatedCountFormatter: p, unreadCountLabel: g ? m : h })) : null,
                                t ? n.createElement(o.Z, { style: f.leftMargin }, t) : null,
                            ),
                        ),
                        D,
                    ),
                f = i.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                o = r(325686),
                a = r(661810),
                s = r(952428),
                l = r(731708),
                i = r(392237),
                d = r(516951),
                c = r(500002),
                u = r(443781),
                m = r(71620),
                h = r(668214),
                p = r(172497),
                w = r(466036),
                f = r(390387),
                g = r(919022);
            const D = (0, h.Z)()
                .propsFromState(() => ({ communitiesActions: f.yK, hasCommunityMemberships: p.fn, pendingFollowersInfo: w.sC, viewerUser: g.ZP.selectViewerUser, userFeatures: f.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: t, pendingFollowersInfo: r, userFeatures: n, viewerUser: o }) => {
                    const { acceptedIds: a, ids: s } = r;
                    return { communitiesActions: e, acceptedFollowerCount: a.length, hasCommunityMemberships: t, viewerUser: o, pendingFollowerCount: s.length - a.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: w.GE }))
                .withAnalytics();
            var b = r(906433),
                k = r(879526);
            const E = ({ acceptedFollowerCount: e, analytics: t, pendingFollowerCount: r, viewerUser: i, onClose: c = d.Z }) => {
                    const { featureSwitches: m, userClaims: h } = (0, u.QZ)(),
                        { coreItems: p, countrySpecificItems: w } = (0, k.O)({ analytics: t, featureSwitches: m, onClose: c, userClaims: h, viewerUser: i, acceptedFollowerCount: e, pendingFollowerCount: r });
                    return n.createElement(
                        n.Fragment,
                        null,
                        ((e) =>
                            e.map((e, t) => {
                                const { component: r = b.Z, ...o } = e,
                                    a = { ...o },
                                    s = n.createElement(r, a);
                                return n.createElement(n.Fragment, { key: t }, s);
                            }))(p),
                        ((f = w),
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(o.Z, { style: y.redesignDivider }, n.createElement(a.Z, { space: "space12", style: y.divider })),
                            f.map((e, t) => n.createElement(s.Z, { key: t, link: e.link, onClick: e.onClick, style: y.countrySpecificItem }, n.createElement(l.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var f;
                },
                C = (0, c.ZP)(D(n.memo(E))),
                y = i.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        569591: (e, t, r) => {
            r.r(t), r.d(t, { DashMenu: () => K, default: () => Y });
            var n = r(202784),
                o = r(325686),
                a = r(266704),
                s = r(525271),
                l = r(392237),
                i = r(111677),
                d = r.n(i),
                c = r(952793),
                u = r(839090),
                m = r(655352),
                h = r(943914),
                p = r(310088),
                w = r(530732),
                f = r(823161),
                g = r(154003),
                D = r(379327),
                b = r(149170),
                k = r(380155),
                E = r(725516),
                C = r(125363),
                y = r(390387),
                _ = r(919022),
                M = r(110512),
                v = r(105131),
                Z = r(206962),
                P = r(71620),
                A = r(668214),
                I = r(454319),
                x = r(956817);
            const S = (0, A.Z)()
                    .propsFromState(() => ({ multiAccountUsers: I.$4, showMultiAccountOverflowPip: I.Zt, delegateUser: y.sy }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("DASH_MENU_ACCOUNT_SWITCH"), switchAccount: x.y })),
                U = d().da4691aa,
                F = d().c7e55ccf,
                T = d().d86bbf0f,
                N = d().h6beb5fb,
                L = { page: "dash" },
                B = ({ createLocalApiErrorHandler: e, delegateUser: t, multiAccountUsers: r, onClose: a, showMultiAccountOverflowPip: s, switchAccount: l }) => {
                    const i = (0, E.z)(),
                        d = (0, C.v9)(_.ZP.selectLoggedInUser),
                        c = (0, M.V7)(),
                        u = (0, C.I0)(),
                        m = t || c.length || r.length > 0,
                        h = (e) => (e ? n.createElement(p.Z, { count: e, truncatedCountFormatter: N, unreadCountLabel: T }) : null),
                        v = n.useCallback(
                            (t, r, n) => () => {
                                i.scribe({ ...L, section: n ? "switch_to_protected_account" : "switch_account", element: r ? "account_bubble_badged" : "account_bubble", action: "click" }), l({ user_id: t }).catch(e(k.y));
                            },
                            [i, e, l],
                        ),
                        P = n.useCallback(() => {
                            i.scribe({ ...L, section: "switch_account", element: "dash_account_switcher", action: "click" }), a && a();
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
                                    .map((e) => n.createElement(w.Z, { "aria-label": F({ screenname: e.screenName }), key: e.userId, onPress: () => (e.userId === d.id_str ? u((0, y.YJ)()) : u((0, y.vU)({ userId: e.userId }))), role: "button", style: W.link }, n.createElement(f.default, { decoration: h(e.badgeCount), size: "large", uri: e.avatarImageUrl })));
                            }
                            return r.map((e) => n.createElement(w.Z, { "aria-label": F({ screenname: e.screen_name }), key: e.user_id, onPress: v(e.user_id, !!e.badgeCount, e.is_protected), role: "button", style: W.link }, n.createElement(f.default, { decoration: h(e.badgeCount), size: "large", uri: e.avatar_image_url })));
                        })(),
                        (() => {
                            const e = m ? n.createElement(b.default, { testID: Z.Z.iconMore }) : n.createElement(D.default, { testID: Z.Z.iconPlus });
                            return n.createElement(o.Z, null, n.createElement(g.ZP, { "aria-label": U, icon: e, link: "/account/switch", onPress: P, size: "small", testID: Z.Z.switcher, type: "primaryOutlined" }), s ? n.createElement(p.Z, { pip: !0, truncatedCountFormatter: N, unreadCountLabel: T }) : null);
                        })(),
                    );
                },
                W = l.default.create((e) => ({ root: { alignSelf: "flex-start", flexDirection: "row" }, link: { borderRadius: e.borderRadii.infinite, marginEnd: e.spaces.space4 } })),
                V = (0, v.P3)(S(n.memo(B)));
            var O = r(659773);
            const H = (0, A.Z)()
                .propsFromState(() => ({ viewerUser: _.ZP.selectViewerUser }))
                .propsFromActions(() => ({ fetchDataUsageSettingsIfNeeded: O.MJ }))
                .withAnalytics({ page: "dash" });
            var z = r(120735);
            const G = d().i5f7b6b8,
                $ = (e) => ({ avatar: !0, badges: !0, description: !1, followButton: !1, followIndicator: !1, followersYouKnow: !1, fullName: !0, label: !1, stats: !0, subscriptionsCount: e }),
                R = n.createElement(h.B, null, n.createElement(V, null)),
                K = (e) => {
                    const { alignMenu: t, analytics: r, fetchDataUsageSettingsIfNeeded: l, onClose: i, renderCustomMenuItems: d, viewerUser: h, withMoreSideNavOverflow: p } = e,
                        w = (0, c.hC)("creator_subscriptions_subscription_count_enabled");
                    n.useEffect(() => {
                        l(), r.scribePageImpression();
                    }, [r, l]);
                    const f =
                        ((g = "profile_overflow_item"),
                        () => {
                            g && r.scribe({ section: "overflow_menu", element: g, action: "click" }), i && i();
                        });
                    var g;
                    const D = (e) => {
                        if (!h) return null;
                        const { creator_subscriptions_count: t, followers_count: r, friends_count: s, highlightedLabel: l, is_blue_verified: c, name: u, profile_image_url_https: g, protected: D, screen_name: b, translator_type: k, verified: E, verified_type: C } = h;
                        return (0, m.ZP)() ? n.createElement(o.Z, { style: j.dropdownMinWidth }, d ? d() : n.createElement(z.Z, { onClose: i, withMoreSideNavOverflow: p })) : n.createElement(o.Z, { style: [e && j.scrollableContentPadding, (0, m.ZP)() && j.menuContentWidth] }, n.createElement(o.Z, { "aria-label": G, style: j.header }, n.createElement(a.Z, { decoration: R, isAllowedToViewOptions: $(w), isLoggedIn: !0, isUserBlueVerified: c, isUserProtected: D, isUserStatsWithLink: !0, isUserVerified: E, onAvatarClick: f, onScreenNameClick: f, subscriptionsCount: t, userAvatarSize: "xLarge", userAvatarUri: g, userFollowersCount: r, userFriendsCount: s, userHighlightedLabel: l, userName: u, userScreenName: b, userTranslatorType: k, userVerifiedType: C, withNameWrap: !0 })), d ? d() : n.createElement(z.Z, { onClose: i }));
                    };
                    return (0, m.ZP)() ? n.createElement(u.Z, { animateInDuration: "long", isFixed: !0, onDismiss: i, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, D(!1)) : n.createElement(s.Z, { align: t, onDismissed: i, style: j.drawer, withTopBar: !1 }, D(!0));
                },
                Y = H(K),
                j = l.default.create((e) => ({ backgroundArea: { backgroundColor: e.colors.activeBlack }, drawer: { maxWidth: "70%" }, dropdownMinWidth: { minWidth: "318px" }, wrapper: { alignSelf: "flex-start", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium, overflowY: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }, scrollableItems: { overflow: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", flexGrow: 1, flexShrink: 1 }, scrollableContentPadding: { paddingBottom: "44px" }, header: { flexGrow: 0, flexShrink: 0 }, avatarWrapper: { flexGrow: 1 }, userNames: { display: "flex", flexDirection: "column", paddingVertical: e.spaces.space12 }, menuContentWidth: { width: `calc(${e.spaces.space64} * 4.25)` } }));
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
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                        r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        r.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        r.e("loader.WideLayout-6107ac1a"),
                        r.e("loader.WideLayout-9f4db315"),
                    ]).then(r.bind(r, 616753)),
            });
        },
        525271: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                o = r(325686),
                a = r(111677),
                s = r.n(a),
                l = r(837020),
                i = r(461756),
                d = r(786998),
                c = r(154003),
                u = r(950822),
                m = r(743618),
                h = r(745153),
                p = r(292627),
                w = r(224162),
                f = r(392237);
            const g = s().af8fa2ae,
                D = n.createElement(l.default, null);
            class b extends n.Component {
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
                    const { additionalControl: e, align: t, buttonType: r, children: a, style: s, subtitle: l, title: c, topBarStyle: f, withBackgroundBlur: g, withTopBar: D, withTransparentMask: b } = this.props,
                        { isVisible: C } = this.state;
                    return n.createElement(w.ZP.Consumer, null, ({ direction: w }) => {
                        const y = "rtl" === w,
                            _ = C ? E.visibleDrawer : ("left" === t) === y ? E.offscreenRightDrawer : E.offscreenLeftDrawer,
                            M = C && !b ? E.maskWithBg : E.maskTransparent,
                            v = C ? E.animateOpen : E.animateClose,
                            Z = i.Z.reducedMotionEnabled ? null : v;
                        return n.createElement(p.Z.Modal, null, n.createElement(h.Z, null, n.createElement(m.Z, null, n.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [E.mask, M, Z, g ? E.backgroundBlur : null, "left" === t ? E.alignLeft : E.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: k, style: [E.root, g ? E.backgroundRootBlur : null, _, Z, s], children: n.createElement(n.Fragment, null, D ? n.createElement(d.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(r) : null, rightControl: "left" === t ? this._renderCloseButton(r) : "right" === t ? e : null, style: f, subtitle: l, title: c }) : null, n.createElement(o.Z, { style: E.contentContainer }, a)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return n.createElement(c.ZP, { "aria-label": g, icon: D, onPress: this._handleMaskClick, type: e });
                }
            }
            b.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const k = (e) => {
                    e.stopPropagation();
                },
                E = f.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...f.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                C = b;
        },
        529509: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(202784),
                o = r(325686),
                a = r(111677),
                s = r.n(a),
                l = r(815858),
                i = r(731708),
                d = r(642153),
                c = r(530732),
                u = r(392237);
            const m = s().a35a5b10,
                h = s().fc8cd112,
                p = (e) => n.createElement(i.ZP, null, e);
            class w extends n.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: r, textStyle: a, userScreenName: s, withFacepile: u } = this.props,
                        h = this._renderMessage();
                    return n.createElement(l.Z, { duration: "long", show: void 0 !== r, type: "fade" }, r ? n.createElement(c.Z, { "aria-label": m, interactiveStyles: null, link: s ? ((p = s), `/${p}/followers_you_follow`) : void 0 }, ({ isHovered: r, isPressed: l }) => n.createElement(o.Z, { style: f.content }, !e && u ? n.createElement(d.Z, { userAvatarUrls: t }) : null, n.createElement(i.ZP, { color: "gray700", size: "subtext2", style: [!e && f.message, (r || l) && !!s && f.underline, a] }, e && u ? n.createElement(d.Z, { style: f.inlineFacepile, userAvatarUrls: t }) : null, h))) : n.createElement(o.Z, { style: f.content }, n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var p;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return n.createElement(s().I18NFormatMessage, { $i18n: "c9e6167d" }, p(e[0]));
                }
                _renderTwoUsernames(e) {
                    return n.createElement(s().I18NFormatMessage, { $i18n: "ha91d1eb" }, p(e[0]), p(e[1]));
                }
                _renderThreeUsernames(e) {
                    return n.createElement(s().I18NFormatMessage, { $i18n: "f1069f9b" }, p(e[0]), p(e[1]), p(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const r = t - 2;
                    return n.createElement(s().I18NFormatMessage, { $i18n: "e8404c1f" }, p(e[0]), p(e[1]), r);
                }
            }
            w.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const f = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        280278: (e, t, r) => {
            r.d(t, { ZP: () => w });
            var n = r(202784),
                o = r(325686),
                a = r(827515),
                s = r(461756),
                l = r(731708),
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
                        [w, f] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
                        g = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (g.current = !0),
                                function () {
                                    g.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (g.current)
                                if (s.Z.reducedMotionEnabled) f((r) => ({ ...r, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== w.pendingText) {
                                    t === w.text || ((0, a.Z)(e.count) && w.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((r) => ({ ...r, pendingCount: e.count, pendingText: t })), w.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            g.current &&
                                !1 === w.animating &&
                                (w.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              g.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : w.pendingText && u(w.pendingCount, w.pendingText, f));
                        }, [w.animating, w.oldText]),
                        n.useMemo(() => {
                            const e = m[w.transitionDirection],
                                t = w.oldText && !s.Z.reducedMotionEnabled,
                                a = !w.animating && w.oldText && !s.Z.reducedMotionEnabled,
                                i = { ...h, ...(w.animating ? e.post : e.active) },
                                d = { ...(a ? e.pre : e.active) };
                            return n.createElement(
                                o.Z,
                                { style: [p.root, r] },
                                t ? n.createElement("span", { style: i }, n.createElement(l.ZP, c, w.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(g.current, f),
                                        style: d,
                                    },
                                    n.createElement(l.ZP, c, w.text),
                                ),
                            );
                        }, [r, c, w, g, f])
                    );
                };
        },
        98538: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(202784),
                o = r(325686),
                a = r(731708),
                s = r(891198),
                l = r(280278),
                i = r(392237);
            const d = "subtext1",
                c = n.createContext({ onMedia: !1 });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, s.Gb)(e) !== (0, s.wl)(e) ? { label: (0, s.Gb)(e) } : void 0;
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
                (u.Value = ({ animated: e, children: t, count: r, style: o, weight: s = "bold" }) => n.createElement(c.Consumer, null, ({ onMedia: i }) => (e ? n.createElement(l.ZP, { children: t, count: r, size: d, style: o, weight: s }) : n.createElement(a.ZP, { children: t, color: i ? "white" : "text", size: d, style: o, weight: s }))));
            const m = i.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = u;
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => k });
            var n = r(202784),
                o = r(325686),
                a = r(731708),
                s = r(235902),
                l = r(649846),
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
                                { followersYouKnow: s } = e;
                            if (s && t && r) {
                                const { avatarUrls: e, count: t, names: s } = r;
                                return t ? n.createElement(o.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof t && n.createElement(i.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: s, userScreenName: a })) : null;
                            }
                        });
                }
                render() {
                    return n.createElement(s.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return n.createElement(o.Z, { style: f.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: n } = t;
                    return n && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return n.createElement(o.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? n.createElement(o.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: a, userAvatarSize: l, userAvatarUri: i, userScreenName: d } = this.props,
                        { avatar: u } = e;
                    return n.createElement(o.Z, { style: f.row }, n.createElement(s.ZP.Provider, { value: { userAvatarLabel: p } }, n.createElement(c.default, { link: r, onClick: t, promotedContent: a, screenName: d, size: l, uri: u ? i : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: a } = t;
                    return r ? n.createElement(n.Fragment, null, this._renderUserAvatar(), n.createElement(o.Z, { style: f.marginTop8 }, this._renderUserName(), a && this._renderHighlightedUserLabel())) : n.createElement(o.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: o, onScreenNameClick: a, profileLink: s, promotedContent: l, userHighlightedLabel: i, userName: d, userScreenName: c, userTranslatorType: u, userVerifiedType: h, userWithFollowsYou: p, withNameWrap: w } = this.props,
                        { badges: f, followIndicator: g, fullName: D } = e;
                    return n.createElement(m.Z, { affiliateBadgeInfo: i, badgeContext: "account", isBlueVerified: f ? t : void 0, isProtected: f ? r : void 0, isVerified: f ? o : void 0, link: s, name: D ? d : c, nameSize: "headline2", onLinkClick: a, promotedContent: l, screenName: c, translatorType: f ? u : void 0, verifiedType: f ? h : void 0, withFollowsYou: g && p, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && n.createElement(l.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? n.createElement(o.Z, { style: f.marginTop4 }, n.createElement(a.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: a, userWithheldDescription: s, userWithheldEntities: l } = this.props,
                        { description: i } = e;
                    return i && t && r && a ? n.createElement(o.Z, { style: [f.row, f.marginTop12] }, n.createElement(u.Z, { description: t, entities: r, userId: a, withheldDescription: s, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: a, userFollowersCount: s, userFriendsCount: l, userScreenName: i } = this.props,
                        { stats: d } = e;
                    return d ? n.createElement(o.Z, { style: [f.row, f.marginTop12] }, n.createElement(h.Z, { followersCount: s, friendsCount: l, onPress: r, screenName: i, subscriptionsCount: a, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var g = r(807896);
            var D = r(111677);
            const b = r.n(D)().ef633578;
            class k extends n.PureComponent {
                render() {
                    return n.createElement(w, this.props);
                }
            }
            (k.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: o, knownFollowers: a, onAvatarClick: s, onScreenNameClick: l, promotedContent: i, userDescription: d, userId: c, userName: u, userScreenName: m, ...h } = e,
                    p = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return n.createElement(w, (0, g.Z)({}, h, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: p.isUserStatsWithLink, isUserVerified: o, knownFollowers: a, onAvatarClick: s, onScreenNameClick: l, promotedContent: i, userAvatarUri: p.profile_image_url_https, userDescription: d, userEntities: p.entities, userFollowersCount: p.followers_count, userFriendsCount: p.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: p.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (k.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return n.createElement(w, { errorMessage: b, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: r, userScreenName: r, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                o = r(111677),
                a = r.n(o),
                s = r(891198),
                l = r(98538);
            class i extends n.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: o, style: i, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: h } = this.props,
                        p = `/${o}/verified_followers`;
                    return n.createElement(l.Z.Group, { style: i }, n.createElement(l.Z, { count: t, link: u ? `/${o}/following` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "g3ed1dd5" }, n.createElement(l.Z.Value, null, a().e4f1e6e4({ formattedCount: (0, s.wl)(t) })), n.createElement(l.Z.Label, null, a().daf8a75f({ count: t })))), n.createElement(l.Z, { count: e, link: u ? p : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "i06724fb" }, n.createElement(l.Z.Value, null, a().ef1f4fc6({ formattedCount: (0, s.wl)(e) })), n.createElement(l.Z.Label, null, a().ad9b5988({ count: e })))), m && void 0 !== d && n.createElement(l.Z, { count: d, link: u ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "eb0084f3" }, n.createElement(l.Z.Value, null, a().a9980948({ formattedCount: (0, s.wl)(d) })), n.createElement(l.Z.Label, null, a().ce44a35c({ count: d })))), h && c && n.createElement(l.Z, { count: c, link: u ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: r }, n.createElement(a().I18NFormatMessage, { $i18n: "fc1b8f67" }, n.createElement(l.Z.Value, null, a().id949f68({ formattedCount: (0, s.wl)(c) })), n.createElement(l.Z.Label, null, a().hb608cfc({ count: c })))));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashMenu.b4ed49da.js.map
