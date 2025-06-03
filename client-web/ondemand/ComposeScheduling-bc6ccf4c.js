"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-bc6ccf4c", "icons/IconReplyOff-js"],
    {
        266704: (e, r, t) => {
            t.d(r, { Z: () => C });
            var o = t(202784),
                n = t(325686),
                s = t(731708),
                i = t(235902),
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
                            const { isAllowedToViewOptions: e, isLoggedIn: r, knownFollowers: t, userScreenName: s } = this.props,
                                { followersYouKnow: i } = e;
                            if (i && r && t) {
                                const { avatarUrls: e, count: r, names: i } = t;
                                return r ? o.createElement(n.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof r && o.createElement(a.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: r, knownFollowersNames: i, userScreenName: s })) : null;
                            }
                        });
                }
                render() {
                    return o.createElement(i.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
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
                    const { isAllowedToViewOptions: e, onAvatarClick: r, profileLink: t, promotedContent: s, userAvatarSize: l, userAvatarUri: a, userScreenName: c } = this.props,
                        { avatar: u } = e;
                    return o.createElement(n.Z, { style: f.row }, o.createElement(i.ZP.Provider, { value: { userAvatarLabel: h } }, o.createElement(d.default, { link: t, onClick: r, promotedContent: s, screenName: c, size: l, uri: u ? a : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: r, withUserAvatar: t } = this.props,
                        { label: s } = r;
                    return t ? o.createElement(o.Fragment, null, this._renderUserAvatar(), o.createElement(n.Z, { style: f.marginTop8 }, this._renderUserName(), s && this._renderHighlightedUserLabel())) : o.createElement(n.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: r, isUserProtected: t, isUserVerified: n, onScreenNameClick: s, profileLink: i, promotedContent: l, userHighlightedLabel: a, userName: c, userScreenName: d, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: h, withNameWrap: w } = this.props,
                        { badges: f, followIndicator: g, fullName: v } = e;
                    return o.createElement(m.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: f ? r : void 0, isProtected: f ? t : void 0, isVerified: f ? n : void 0, link: i, name: v ? c : d, nameSize: "headline2", onLinkClick: s, promotedContent: l, screenName: d, translatorType: f ? u : void 0, verifiedType: f ? p : void 0, withFollowsYou: g && h, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && o.createElement(l.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? o.createElement(n.Z, { style: f.marginTop4 }, o.createElement(s.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: r, userEntities: t, userId: s, userWithheldDescription: i, userWithheldEntities: l } = this.props,
                        { description: a } = e;
                    return a && r && t && s ? o.createElement(n.Z, { style: [f.row, f.marginTop12] }, o.createElement(u.Z, { description: r, entities: t, userId: s, withheldDescription: i, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: r, onUserStatsPress: t, subscriptionsCount: s, userFollowersCount: i, userFriendsCount: l, userScreenName: a } = this.props,
                        { stats: c } = e;
                    return c ? o.createElement(n.Z, { style: [f.row, f.marginTop12] }, o.createElement(p.Z, { followersCount: i, friendsCount: l, onPress: t, screenName: a, subscriptionsCount: s, withLink: r, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var g = t(807896);
            var v = t(111677);
            const b = t.n(v)().ef633578;
            class C extends o.PureComponent {
                render() {
                    return o.createElement(w, this.props);
                }
            }
            (C.Promoted = (e) => {
                const { followButton: r, isUserProtected: t, isUserVerified: n, knownFollowers: s, onAvatarClick: i, onScreenNameClick: l, promotedContent: a, userDescription: c, userId: d, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return o.createElement(w, (0, g.Z)({}, p, { followButton: r, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: t, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: n, knownFollowers: s, onAvatarClick: i, onScreenNameClick: l, promotedContent: a, userAvatarUri: h.profile_image_url_https, userDescription: c, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: d, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
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
                s = t.n(n),
                i = t(891198),
                l = t(98538);
            class a extends o.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: r, onPress: t, screenName: n, style: a, subscribersCount: c, subscriptionsCount: d, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${n}/verified_followers`;
                    return o.createElement(l.Z.Group, { style: a }, o.createElement(l.Z, { count: r, link: u ? `/${n}/following` : void 0, onPress: t }, o.createElement(s().I18NFormatMessage, { $i18n: "g3ed1dd5" }, o.createElement(l.Z.Value, null, s().e4f1e6e4({ formattedCount: (0, i.wl)(r) })), o.createElement(l.Z.Label, null, s().daf8a75f({ count: r })))), o.createElement(l.Z, { count: e, link: u ? h : void 0, onPress: t }, o.createElement(s().I18NFormatMessage, { $i18n: "i06724fb" }, o.createElement(l.Z.Value, null, s().ef1f4fc6({ formattedCount: (0, i.wl)(e) })), o.createElement(l.Z.Label, null, s().ad9b5988({ count: e })))), m && void 0 !== c && o.createElement(l.Z, { count: c, link: u ? `/${n}/creator-subscriptions/subscribers` : void 0, onPress: t }, o.createElement(s().I18NFormatMessage, { $i18n: "eb0084f3" }, o.createElement(l.Z.Value, null, s().a9980948({ formattedCount: (0, i.wl)(c) })), o.createElement(l.Z.Label, null, s().ce44a35c({ count: c })))), p && d && o.createElement(l.Z, { count: d, link: u ? `/${n}/creator-subscriptions/subscriptions` : void 0, onPress: t }, o.createElement(s().I18NFormatMessage, { $i18n: "fc1b8f67" }, o.createElement(l.Z.Value, null, s().id949f68({ formattedCount: (0, i.wl)(d) })), o.createElement(l.Z.Label, null, s().hb608cfc({ count: d })))));
                }
            }
            a.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        183806: (e, r, t) => {
            t.d(r, { Z: () => o });
            const o = t(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        41065: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                s = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        98440: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                s = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        883437: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                s = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M21.503 6.745c.475 1.032.748 2.176.748 3.385 0 2.955-1.608 5.68-4.196 7.11l-8.054 4.459v-3.452l2-2v2.06l5.086-2.816c1.952-1.079 3.164-3.133 3.164-5.36 0-.644-.101-1.264-.286-1.847l1.538-1.538zM3.71 21.71l-1.414-1.414 3.401-3.401C3.34 15.5 1.751 12.935 1.751 10c0-4.411 3.591-8 8.005-8h4.366c1.818 0 3.494.608 4.849 1.62l1.325-1.325 1.414 1.414-18 18.001zm3.462-6.29L17.545 5.047C16.567 4.386 15.389 4 14.123 4H9.757c-3.311 0-6.005 2.691-6.005 6 0 2.389 1.401 4.451 3.421 5.42z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        452693: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                n = t(890601),
                s = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-bc6ccf4c.353922ba.js.map
