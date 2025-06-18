"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-bc6ccf4c", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js", "shared~bundle.ReportCenter~bundle.SafetyCenter-bc6ccf4c"],
    {
        266704: (e, r, t) => {
            t.d(r, { Z: () => C });
            var o = t(202784),
                n = t(325686),
                i = t(731708),
                s = t(235902),
                l = t(649846),
                a = t(529509),
                c = t(392237),
                d = t(823161),
                u = t(238406),
                m = t(366635),
                p = t(646797);
            const h = () => !1;
            class w extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: r, knownFollowers: t, userScreenName: i } = this.props,
                                { followersYouKnow: s } = e;
                            if (s && r && t) {
                                const { avatarUrls: e, count: r, names: s } = t;
                                return r ? o.createElement(n.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof r && o.createElement(a.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: r, knownFollowersNames: s, userScreenName: i })) : null;
                            }
                        });
                }
                render() {
                    return o.createElement(s.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const r = e();
                        return o.createElement(n.Z, { style: f.root }, this._renderHeader(r), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), r ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: r, isLoggedIn: t } = this.props,
                        { followButton: o } = r;
                    return o && t && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return o.createElement(n.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? o.createElement(n.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: r, profileLink: t, promotedContent: i, userAvatarSize: l, userAvatarUri: a, userScreenName: c } = this.props,
                        { avatar: u } = e;
                    return o.createElement(n.Z, { style: f.row }, o.createElement(s.ZP.Provider, { value: { userAvatarLabel: h } }, o.createElement(d.default, { link: t, onClick: r, promotedContent: i, screenName: c, size: l, uri: u ? a : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: r, withUserAvatar: t } = this.props,
                        { label: i } = r;
                    return t ? o.createElement(o.Fragment, null, this._renderUserAvatar(), o.createElement(n.Z, { style: f.marginTop8 }, this._renderUserName(), i && this._renderHighlightedUserLabel())) : o.createElement(n.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: r, isUserProtected: t, isUserVerified: n, onScreenNameClick: i, profileLink: s, promotedContent: l, userHighlightedLabel: a, userName: c, userScreenName: d, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: h, withNameWrap: w } = this.props,
                        { badges: f, followIndicator: v, fullName: g } = e;
                    return o.createElement(m.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: f ? r : void 0, isProtected: f ? t : void 0, isVerified: f ? n : void 0, link: s, name: g ? c : d, nameSize: "headline2", onLinkClick: i, promotedContent: l, screenName: d, translatorType: f ? u : void 0, verifiedType: f ? p : void 0, withFollowsYou: v && h, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && o.createElement(l.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? o.createElement(n.Z, { style: f.marginTop4 }, o.createElement(i.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: r, userEntities: t, userId: i, userWithheldDescription: s, userWithheldEntities: l } = this.props,
                        { description: a } = e;
                    return a && r && t && i ? o.createElement(n.Z, { style: [f.row, f.marginTop12] }, o.createElement(u.Z, { description: r, entities: t, userId: i, withheldDescription: s, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: r, onUserStatsPress: t, subscriptionsCount: i, userFollowersCount: s, userFriendsCount: l, userScreenName: a } = this.props,
                        { stats: c } = e;
                    return c ? o.createElement(n.Z, { style: [f.row, f.marginTop12] }, o.createElement(p.Z, { followersCount: s, friendsCount: l, onPress: t, screenName: a, subscriptionsCount: i, withLink: r, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var v = t(807896);
            var g = t(111677);
            const b = t.n(g)().ef633578;
            class C extends o.PureComponent {
                render() {
                    return o.createElement(w, this.props);
                }
            }
            (C.Promoted = (e) => {
                const { followButton: r, isUserProtected: t, isUserVerified: n, knownFollowers: i, onAvatarClick: s, onScreenNameClick: l, promotedContent: a, userDescription: c, userId: d, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return o.createElement(w, (0, v.Z)({}, p, { followButton: r, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: t, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: n, knownFollowers: i, onAvatarClick: s, onScreenNameClick: l, promotedContent: a, userAvatarUri: h.profile_image_url_https, userDescription: c, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: d, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (C.Suspended = function ({ onAvatarClick: e, onScreenNameClick: r, userScreenName: t }) {
                    const n = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return o.createElement(w, { errorMessage: b, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: n.protected, isUserStatsWithLink: n.isUserStatsWithLink, isUserVerified: n.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: r, userAvatarUri: n.profile_image_url_https, userDescription: n.description, userEntities: n.entities, userFollowersCount: n.followers_count, userFriendsCount: n.friends_count, userId: n.id_str, userName: t, userScreenName: t, userWithFollowsYou: n.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, r, t) => {
            t.d(r, { Z: () => a });
            var o = t(202784),
                n = t(111677),
                i = t.n(n),
                s = t(891198),
                l = t(98538);
            class a extends o.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: r, onPress: t, screenName: n, style: a, subscribersCount: c, subscriptionsCount: d, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${n}/verified_followers`;
                    return o.createElement(l.Z.Group, { style: a }, o.createElement(l.Z, { count: r, link: u ? `/${n}/following` : void 0, onPress: t }, o.createElement(i().I18NFormatMessage, { $i18n: "g3ed1dd5" }, o.createElement(l.Z.Value, null, i().e4f1e6e4({ formattedCount: (0, s.wl)(r) })), o.createElement(l.Z.Label, null, i().daf8a75f({ count: r })))), o.createElement(l.Z, { count: e, link: u ? h : void 0, onPress: t }, o.createElement(i().I18NFormatMessage, { $i18n: "i06724fb" }, o.createElement(l.Z.Value, null, i().ef1f4fc6({ formattedCount: (0, s.wl)(e) })), o.createElement(l.Z.Label, null, i().ad9b5988({ count: e })))), m && void 0 !== c && o.createElement(l.Z, { count: c, link: u ? `/${n}/creator-subscriptions/subscribers` : void 0, onPress: t }, o.createElement(i().I18NFormatMessage, { $i18n: "eb0084f3" }, o.createElement(l.Z.Value, null, i().a9980948({ formattedCount: (0, s.wl)(c) })), o.createElement(l.Z.Label, null, i().ce44a35c({ count: c })))), p && d && o.createElement(l.Z, { count: d, link: u ? `/${n}/creator-subscriptions/subscriptions` : void 0, onPress: t }, o.createElement(i().I18NFormatMessage, { $i18n: "fc1b8f67" }, o.createElement(l.Z.Value, null, i().id949f68({ formattedCount: (0, s.wl)(d) })), o.createElement(l.Z.Label, null, i().hb608cfc({ count: d })))));
                }
            }
            a.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        183806: (e, r, t) => {
            t.d(r, { Z: () => o });
            const o = t(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        58399: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var o = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(717683),
                l = t(347101);
            const a = (e = {}) => {
                const r = o.useContext(s.Z),
                    { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, r && l.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        246492: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        264171: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        98440: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        262009: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        452693: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        465233: (e, r, t) => {
            t.d(r, { Z: () => n });
            var o = t(716406);
            function n(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(n) : (0, o.Z)(e, (e) => n(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-bc6ccf4c.fb6e5cba.js.map
