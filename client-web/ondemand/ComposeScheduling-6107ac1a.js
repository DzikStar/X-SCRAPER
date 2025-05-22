"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-6107ac1a"],
    {
        266704: (e, r, t) => {
            t.d(r, { Z: () => C });
            var o = t(202784),
                s = t(325686),
                n = t(731708),
                i = t(235902),
                l = t(649846),
                a = t(529509),
                c = t(392237),
                d = t(823161),
                u = t(238406),
                m = t(366635),
                p = t(646797);
            const w = () => !1;
            class h extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: r, knownFollowers: t, userScreenName: n } = this.props,
                                { followersYouKnow: i } = e;
                            if (i && r && t) {
                                const { avatarUrls: e, count: r, names: i } = t;
                                return r ? o.createElement(s.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof r && o.createElement(a.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: r, knownFollowersNames: i, userScreenName: n })) : null;
                            }
                        });
                }
                render() {
                    return o.createElement(i.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const r = e();
                        return o.createElement(s.Z, { style: f.root }, this._renderHeader(r), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), r ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: r, isLoggedIn: t } = this.props,
                        { followButton: o } = r;
                    return o && t && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return o.createElement(s.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? o.createElement(s.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: r, profileLink: t, promotedContent: n, userAvatarSize: l, userAvatarUri: a, userScreenName: c } = this.props,
                        { avatar: u } = e;
                    return o.createElement(s.Z, { style: f.row }, o.createElement(i.ZP.Provider, { value: { userAvatarLabel: w } }, o.createElement(d.default, { link: t, onClick: r, promotedContent: n, screenName: c, size: l, uri: u ? a : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: r, withUserAvatar: t } = this.props,
                        { label: n } = r;
                    return t ? o.createElement(o.Fragment, null, this._renderUserAvatar(), o.createElement(s.Z, { style: f.marginTop8 }, this._renderUserName(), n && this._renderHighlightedUserLabel())) : o.createElement(s.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: r, isUserProtected: t, isUserVerified: s, onScreenNameClick: n, profileLink: i, promotedContent: l, userHighlightedLabel: a, userName: c, userScreenName: d, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: w, withNameWrap: h } = this.props,
                        { badges: f, followIndicator: g, fullName: v } = e;
                    return o.createElement(m.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: f ? r : void 0, isProtected: f ? t : void 0, isVerified: f ? s : void 0, link: i, name: v ? c : d, nameSize: "headline2", onLinkClick: n, promotedContent: l, screenName: d, translatorType: f ? u : void 0, verifiedType: f ? p : void 0, withFollowsYou: g && w, withLink: !0, withNameWrap: h, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && o.createElement(l.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? o.createElement(s.Z, { style: f.marginTop4 }, o.createElement(n.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: r, userEntities: t, userId: n, userWithheldDescription: i, userWithheldEntities: l } = this.props,
                        { description: a } = e;
                    return a && r && t && n ? o.createElement(s.Z, { style: [f.row, f.marginTop12] }, o.createElement(u.Z, { description: r, entities: t, userId: n, withheldDescription: i, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: r, onUserStatsPress: t, subscriptionsCount: n, userFollowersCount: i, userFriendsCount: l, userScreenName: a } = this.props,
                        { stats: c } = e;
                    return c ? o.createElement(s.Z, { style: [f.row, f.marginTop12] }, o.createElement(p.Z, { followersCount: i, friendsCount: l, onPress: t, screenName: a, subscriptionsCount: n, withLink: r, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            h.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var g = t(807896);
            var v = t(332920);
            const b = t.n(v)().ef633578;
            class C extends o.PureComponent {
                render() {
                    return o.createElement(h, this.props);
                }
            }
            (C.Promoted = (e) => {
                const { followButton: r, isUserProtected: t, isUserVerified: s, knownFollowers: n, onAvatarClick: i, onScreenNameClick: l, promotedContent: a, userDescription: c, userId: d, userName: u, userScreenName: m, ...p } = e,
                    w = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return o.createElement(h, (0, g.Z)({}, p, { followButton: r, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: t, isUserStatsWithLink: w.isUserStatsWithLink, isUserVerified: s, knownFollowers: n, onAvatarClick: i, onScreenNameClick: l, promotedContent: a, userAvatarUri: w.profile_image_url_https, userDescription: c, userEntities: w.entities, userFollowersCount: w.followers_count, userFriendsCount: w.friends_count, userId: d, userName: u, userScreenName: m, userWithFollowsYou: w.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (C.Suspended = function ({ onAvatarClick: e, onScreenNameClick: r, userScreenName: t }) {
                    const s = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return o.createElement(h, { errorMessage: b, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: s.protected, isUserStatsWithLink: s.isUserStatsWithLink, isUserVerified: s.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: r, userAvatarUri: s.profile_image_url_https, userDescription: s.description, userEntities: s.entities, userFollowersCount: s.followers_count, userFriendsCount: s.friends_count, userId: s.id_str, userName: t, userScreenName: t, userWithFollowsYou: s.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, r, t) => {
            t.d(r, { Z: () => a });
            var o = t(202784),
                s = t(332920),
                n = t.n(s),
                i = t(891198),
                l = t(98538);
            class a extends o.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: r, onPress: t, screenName: s, style: a, subscribersCount: c, subscriptionsCount: d, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        w = `/${s}/verified_followers`;
                    return o.createElement(l.Z.Group, { style: a }, o.createElement(l.Z, { count: r, link: u ? `/${s}/following` : void 0, onPress: t }, o.createElement(n().I18NFormatMessage, { $i18n: "g3ed1dd5" }, o.createElement(l.Z.Value, null, n().e4f1e6e4({ formattedCount: (0, i.wl)(r) })), o.createElement(l.Z.Label, null, n().daf8a75f({ count: r })))), o.createElement(l.Z, { count: e, link: u ? w : void 0, onPress: t }, o.createElement(n().I18NFormatMessage, { $i18n: "i06724fb" }, o.createElement(l.Z.Value, null, n().ef1f4fc6({ formattedCount: (0, i.wl)(e) })), o.createElement(l.Z.Label, null, n().ad9b5988({ count: e })))), m && void 0 !== c && o.createElement(l.Z, { count: c, link: u ? `/${s}/creator-subscriptions/subscribers` : void 0, onPress: t }, o.createElement(n().I18NFormatMessage, { $i18n: "eb0084f3" }, o.createElement(l.Z.Value, null, n().a9980948({ formattedCount: (0, i.wl)(c) })), o.createElement(l.Z.Label, null, n().ce44a35c({ count: c })))), p && d && o.createElement(l.Z, { count: d, link: u ? `/${s}/creator-subscriptions/subscriptions` : void 0, onPress: t }, o.createElement(n().I18NFormatMessage, { $i18n: "fc1b8f67" }, o.createElement(l.Z.Value, null, n().id949f68({ formattedCount: (0, i.wl)(d) })), o.createElement(l.Z.Label, null, n().hb608cfc({ count: d })))));
                }
            }
            a.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        183806: (e, r, t) => {
            t.d(r, { Z: () => o });
            const o = t(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        988227: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                s = t(890601),
                n = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        432181: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                s = t(890601),
                n = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        283119: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                s = t(890601),
                n = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        730895: (e, r, t) => {
            var o = t(821176);
            e.exports = function () {
                var e = o(this),
                    r = "";
                return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
            };
        },
        900664: (e, r, t) => {
            t.d(r, { Z: () => s });
            var o = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const s = {
                cancel() {
                    o(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), o(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-6107ac1a.a0ec809a.js.map
