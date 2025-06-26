"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashMenu-bc6ccf4c", "icons/IconCameraVideoStroke-js", "icons/IconChevronDown-js"],
    {
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686),
                s = n(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? s.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = s.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(202784),
                o = n(325686),
                s = n(111677),
                i = n.n(s),
                l = n(837020),
                a = n(461756),
                c = n(786998),
                u = n(154003),
                d = n(950822),
                m = n(743618),
                p = n(745153),
                h = n(292627),
                w = n(224162),
                f = n(392237);
            const g = i().af8fa2ae,
                b = r.createElement(l.default, null);
            class E extends r.Component {
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
                            const { altKey: t, ctrlKey: n, key: r, metaKey: o } = e;
                            !(t || n || o) && "Escape" === r && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), a.Z.reducedMotionEnabled && this.props.onDismissed();
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
                    const { additionalControl: e, align: t, buttonType: n, children: s, style: i, subtitle: l, title: u, topBarStyle: f, withBackgroundBlur: g, withTopBar: b, withTransparentMask: E } = this.props,
                        { isVisible: _ } = this.state;
                    return r.createElement(w.ZP.Consumer, null, ({ direction: w }) => {
                        const k = "rtl" === w,
                            Z = _ ? C.visibleDrawer : ("left" === t) === k ? C.offscreenRightDrawer : C.offscreenLeftDrawer,
                            y = _ && !E ? C.maskWithBg : C.maskTransparent,
                            x = _ ? C.animateOpen : C.animateClose,
                            T = a.Z.reducedMotionEnabled ? null : x;
                        return r.createElement(h.Z.Modal, null, r.createElement(p.Z, null, r.createElement(m.Z, null, r.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [C.mask, y, T, g ? C.backgroundBlur : null, "left" === t ? C.alignLeft : C.alignRight] }, (0, d.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: v, style: [C.root, g ? C.backgroundRootBlur : null, Z, T, i], children: r.createElement(r.Fragment, null, b ? r.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: f, subtitle: l, title: u }) : null, r.createElement(o.Z, { style: C.contentContainer }, s)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return r.createElement(u.ZP, { "aria-label": g, icon: b, onPress: this._handleMaskClick, type: e });
                }
            }
            E.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const v = (e) => {
                    e.stopPropagation();
                },
                C = f.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...f.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                _ = E;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => w });
            var r = n(202784),
                o = n(325686),
                s = n(111677),
                i = n.n(s),
                l = n(815858),
                a = n(731708),
                c = n(642153),
                u = n(530732),
                d = n(392237);
            const m = i().a35a5b10,
                p = i().fc8cd112,
                h = (e) => r.createElement(a.ZP, null, e);
            class w extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: s, userScreenName: i, withFacepile: d } = this.props,
                        p = this._renderMessage();
                    return r.createElement(l.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(u.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((h = i), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: l }) => r.createElement(o.Z, { style: f.content }, !e && d ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(a.ZP, { color: "gray700", size: "subtext2", style: [!e && f.message, (n || l) && !!i && f.underline, s] }, e && d ? r.createElement(c.Z, { style: f.inlineFacepile, userAvatarUrls: t }) : null, p))) : r.createElement(o.Z, { style: f.content }, r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, p)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : p;
                }
                _renderOneUsername(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
                }
            }
            w.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const f = d.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => w });
            var r = n(202784),
                o = n(325686),
                s = n(827515),
                i = n(461756),
                l = n(731708),
                a = n(392237);
            const c = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const r = (0, s.Z)(e) ? (e > (n.count || 0) ? c : u) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, u].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = a.default.create({ root: { overflow: "hidden" } }),
                w = (e) => {
                    const { children: t, containerStyle: n, count: a, ...u } = e,
                        [w, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        g = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (g.current = !0),
                                function () {
                                    g.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (g.current)
                                if (i.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== w.pendingText) {
                                    t === w.text || ((0, s.Z)(e.count) && w.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), w.animating || d(e.count, t, f));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            g.current &&
                                !1 === w.animating &&
                                (w.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              g.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : w.pendingText && d(w.pendingCount, w.pendingText, f));
                        }, [w.animating, w.oldText]),
                        r.useMemo(() => {
                            const e = m[w.transitionDirection],
                                t = w.oldText && !i.Z.reducedMotionEnabled,
                                s = !w.animating && w.oldText && !i.Z.reducedMotionEnabled,
                                a = { ...p, ...(w.animating ? e.post : e.active) },
                                c = { ...(s ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: a }, r.createElement(l.ZP, u, w.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(g.current, f),
                                        style: c,
                                    },
                                    r.createElement(l.ZP, u, w.text),
                                ),
                            );
                        }, [n, u, w, g, f])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                s = n(731708),
                i = n(891198),
                l = n(280278),
                a = n(392237);
            const c = "subtext1",
                u = r.createContext({ onMedia: !1 });
            class d extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: o } = this.props;
                    return r.createElement(s.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, r.createElement(u.Provider, { value: { onMedia: n } }, e));
                }
            }
            (d.Group = (e) =>
                r.createElement(
                    o.Z,
                    { style: [m.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(o.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (d.Label = ({ children: e, style: t }) => r.createElement(u.Consumer, null, ({ onMedia: n }) => r.createElement(s.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (d.Value = ({ animated: e, children: t, count: n, style: o, weight: i = "bold" }) => r.createElement(u.Consumer, null, ({ onMedia: a }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: c, style: o, weight: i }) : r.createElement(s.ZP, { children: t, color: a ? "white" : "text", size: c, style: o, weight: i }))));
            const m = a.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = d;
        },
        266704: (e, t, n) => {
            n.d(t, { Z: () => v });
            var r = n(202784),
                o = n(325686),
                s = n(731708),
                i = n(235902),
                l = n(649846),
                a = n(529509),
                c = n(392237),
                u = n(823161),
                d = n(238406),
                m = n(366635),
                p = n(646797);
            const h = () => !1;
            class w extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: n, userScreenName: s } = this.props,
                                { followersYouKnow: i } = e;
                            if (i && t && n) {
                                const { avatarUrls: e, count: t, names: i } = n;
                                return t ? r.createElement(o.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof t && r.createElement(a.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: i, userScreenName: s })) : null;
                            }
                        });
                }
                render() {
                    return r.createElement(i.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return r.createElement(o.Z, { style: f.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: n } = this.props,
                        { followButton: r } = t;
                    return r && n && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return r.createElement(o.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? r.createElement(o.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: n, promotedContent: s, userAvatarSize: l, userAvatarUri: a, userScreenName: c } = this.props,
                        { avatar: d } = e;
                    return r.createElement(o.Z, { style: f.row }, r.createElement(i.ZP.Provider, { value: { userAvatarLabel: h } }, r.createElement(u.default, { link: n, onClick: t, promotedContent: s, screenName: c, size: l, uri: d ? a : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: n } = this.props,
                        { label: s } = t;
                    return n ? r.createElement(r.Fragment, null, this._renderUserAvatar(), r.createElement(o.Z, { style: f.marginTop8 }, this._renderUserName(), s && this._renderHighlightedUserLabel())) : r.createElement(o.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: n, isUserVerified: o, onScreenNameClick: s, profileLink: i, promotedContent: l, userHighlightedLabel: a, userName: c, userScreenName: u, userTranslatorType: d, userVerifiedType: p, userWithFollowsYou: h, withNameWrap: w } = this.props,
                        { badges: f, followIndicator: g, fullName: b } = e;
                    return r.createElement(m.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: f ? t : void 0, isProtected: f ? n : void 0, isVerified: f ? o : void 0, link: i, name: b ? c : u, nameSize: "headline2", onLinkClick: s, promotedContent: l, screenName: u, translatorType: f ? d : void 0, verifiedType: f ? p : void 0, withFollowsYou: g && h, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && r.createElement(l.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? r.createElement(o.Z, { style: f.marginTop4 }, r.createElement(s.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: n, userId: s, userWithheldDescription: i, userWithheldEntities: l } = this.props,
                        { description: a } = e;
                    return a && t && n && s ? r.createElement(o.Z, { style: [f.row, f.marginTop12] }, r.createElement(d.Z, { description: t, entities: n, userId: s, withheldDescription: i, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: n, subscriptionsCount: s, userFollowersCount: i, userFriendsCount: l, userScreenName: a } = this.props,
                        { stats: c } = e;
                    return c ? r.createElement(o.Z, { style: [f.row, f.marginTop12] }, r.createElement(p.Z, { followersCount: i, friendsCount: l, onPress: n, screenName: a, subscriptionsCount: s, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var g = n(807896);
            var b = n(111677);
            const E = n.n(b)().ef633578;
            class v extends r.PureComponent {
                render() {
                    return r.createElement(w, this.props);
                }
            }
            (v.Promoted = (e) => {
                const { followButton: t, isUserProtected: n, isUserVerified: o, knownFollowers: s, onAvatarClick: i, onScreenNameClick: l, promotedContent: a, userDescription: c, userId: u, userName: d, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return r.createElement(w, (0, g.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: o, knownFollowers: s, onAvatarClick: i, onScreenNameClick: l, promotedContent: a, userAvatarUri: h.profile_image_url_https, userDescription: c, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: u, userName: d, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (v.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: n }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return r.createElement(w, { errorMessage: E, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: n, userScreenName: n, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(111677),
                s = n.n(o),
                i = n(891198),
                l = n(98538);
            class a extends r.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: n, screenName: o, style: a, subscribersCount: c, subscriptionsCount: u, withLink: d, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${o}/verified_followers`;
                    return r.createElement(l.Z.Group, { style: a }, r.createElement(l.Z, { count: t, link: d ? `/${o}/following` : void 0, onPress: n }, r.createElement(s().I18NFormatMessage, { $i18n: "g3ed1dd5" }, r.createElement(l.Z.Value, null, s().e4f1e6e4({ formattedCount: (0, i.wl)(t) })), r.createElement(l.Z.Label, null, s().daf8a75f({ count: t })))), r.createElement(l.Z, { count: e, link: d ? h : void 0, onPress: n }, r.createElement(s().I18NFormatMessage, { $i18n: "i06724fb" }, r.createElement(l.Z.Value, null, s().ef1f4fc6({ formattedCount: (0, i.wl)(e) })), r.createElement(l.Z.Label, null, s().ad9b5988({ count: e })))), m && void 0 !== c && r.createElement(l.Z, { count: c, link: d ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: n }, r.createElement(s().I18NFormatMessage, { $i18n: "eb0084f3" }, r.createElement(l.Z.Value, null, s().a9980948({ formattedCount: (0, i.wl)(c) })), r.createElement(l.Z.Label, null, s().ce44a35c({ count: c })))), p && u && r.createElement(l.Z, { count: u, link: d ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: n }, r.createElement(s().I18NFormatMessage, { $i18n: "fc1b8f67" }, r.createElement(l.Z.Value, null, s().id949f68({ formattedCount: (0, i.wl)(u) })), r.createElement(l.Z.Label, null, s().hb608cfc({ count: u })))));
                }
            }
            a.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        839: (e, t, n) => {
            n.r(t), n.d(t, { default: () => a });
            var r = n(202784),
                o = n(890601),
                s = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        487552: (e, t, n) => {
            n.r(t), n.d(t, { default: () => a });
            var r = n(202784),
                o = n(890601),
                s = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => o, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (n, r, o) => {
                        const s = t ? t(r, o, e) : !!r;
                        return s && n[0].push(r), !s && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashMenu-bc6ccf4c.cff873ca.js.map
