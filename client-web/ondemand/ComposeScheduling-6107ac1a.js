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
            var v = t(674132);
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
                s = t(674132),
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
        388941: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                s = t(890601),
                n = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        155353: (e, r, t) => {
            t.r(r), t.d(r, { default: () => a });
            var o = t(202784),
                s = t(890601),
                n = t(783427),
                i = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: r });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-6107ac1a.d622404a.js.map
