"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-bc6ccf4c", "icons/IconDocument-js", "icons/IconFeedback-js"],
    {
        266704: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(202784),
                n = r(325686),
                s = r(731708),
                i = r(235902),
                l = r(649846),
                a = r(529509),
                c = r(392237),
                u = r(823161),
                d = r(238406),
                m = r(366635),
                p = r(646797);
            const h = () => !1;
            class w extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: s } = this.props,
                                { followersYouKnow: i } = e;
                            if (i && t && r) {
                                const { avatarUrls: e, count: t, names: i } = r;
                                return t ? o.createElement(n.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof t && o.createElement(a.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: i, userScreenName: s })) : null;
                            }
                        });
                }
                render() {
                    return o.createElement(i.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return o.createElement(n.Z, { style: f.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: o } = t;
                    return o && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return o.createElement(n.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? o.createElement(n.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: s, userAvatarSize: l, userAvatarUri: a, userScreenName: c } = this.props,
                        { avatar: d } = e;
                    return o.createElement(n.Z, { style: f.row }, o.createElement(i.ZP.Provider, { value: { userAvatarLabel: h } }, o.createElement(u.default, { link: r, onClick: t, promotedContent: s, screenName: c, size: l, uri: d ? a : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: s } = t;
                    return r ? o.createElement(o.Fragment, null, this._renderUserAvatar(), o.createElement(n.Z, { style: f.marginTop8 }, this._renderUserName(), s && this._renderHighlightedUserLabel())) : o.createElement(n.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: n, onScreenNameClick: s, profileLink: i, promotedContent: l, userHighlightedLabel: a, userName: c, userScreenName: u, userTranslatorType: d, userVerifiedType: p, userWithFollowsYou: h, withNameWrap: w } = this.props,
                        { badges: f, followIndicator: v, fullName: g } = e;
                    return o.createElement(m.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: f ? t : void 0, isProtected: f ? r : void 0, isVerified: f ? n : void 0, link: i, name: g ? c : u, nameSize: "headline2", onLinkClick: s, promotedContent: l, screenName: u, translatorType: f ? d : void 0, verifiedType: f ? p : void 0, withFollowsYou: v && h, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
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
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: s, userWithheldDescription: i, userWithheldEntities: l } = this.props,
                        { description: a } = e;
                    return a && t && r && s ? o.createElement(n.Z, { style: [f.row, f.marginTop12] }, o.createElement(d.Z, { description: t, entities: r, userId: s, withheldDescription: i, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: s, userFollowersCount: i, userFriendsCount: l, userScreenName: a } = this.props,
                        { stats: c } = e;
                    return c ? o.createElement(n.Z, { style: [f.row, f.marginTop12] }, o.createElement(p.Z, { followersCount: i, friendsCount: l, onPress: r, screenName: a, subscriptionsCount: s, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var v = r(807896);
            var g = r(111677);
            const C = r.n(g)().ef633578;
            class b extends o.PureComponent {
                render() {
                    return o.createElement(w, this.props);
                }
            }
            (b.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: n, knownFollowers: s, onAvatarClick: i, onScreenNameClick: l, promotedContent: a, userDescription: c, userId: u, userName: d, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return o.createElement(w, (0, v.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: n, knownFollowers: s, onAvatarClick: i, onScreenNameClick: l, promotedContent: a, userAvatarUri: h.profile_image_url_https, userDescription: c, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: u, userName: d, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (b.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const n = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return o.createElement(w, { errorMessage: C, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: n.protected, isUserStatsWithLink: n.isUserStatsWithLink, isUserVerified: n.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: n.profile_image_url_https, userDescription: n.description, userEntities: n.entities, userFollowersCount: n.followers_count, userFriendsCount: n.friends_count, userId: n.id_str, userName: r, userScreenName: r, userWithFollowsYou: n.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(202784),
                n = r(111677),
                s = r.n(n),
                i = r(891198),
                l = r(98538);
            class a extends o.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: n, style: a, subscribersCount: c, subscriptionsCount: u, withLink: d, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${n}/verified_followers`;
                    return o.createElement(l.Z.Group, { style: a }, o.createElement(l.Z, { count: t, link: d ? `/${n}/following` : void 0, onPress: r }, o.createElement(s().I18NFormatMessage, { $i18n: "g3ed1dd5" }, o.createElement(l.Z.Value, null, s().e4f1e6e4({ formattedCount: (0, i.wl)(t) })), o.createElement(l.Z.Label, null, s().daf8a75f({ count: t })))), o.createElement(l.Z, { count: e, link: d ? h : void 0, onPress: r }, o.createElement(s().I18NFormatMessage, { $i18n: "i06724fb" }, o.createElement(l.Z.Value, null, s().ef1f4fc6({ formattedCount: (0, i.wl)(e) })), o.createElement(l.Z.Label, null, s().ad9b5988({ count: e })))), m && void 0 !== c && o.createElement(l.Z, { count: c, link: d ? `/${n}/creator-subscriptions/subscribers` : void 0, onPress: r }, o.createElement(s().I18NFormatMessage, { $i18n: "eb0084f3" }, o.createElement(l.Z.Value, null, s().a9980948({ formattedCount: (0, i.wl)(c) })), o.createElement(l.Z.Label, null, s().ce44a35c({ count: c })))), p && u && o.createElement(l.Z, { count: u, link: d ? `/${n}/creator-subscriptions/subscriptions` : void 0, onPress: r }, o.createElement(s().I18NFormatMessage, { $i18n: "fc1b8f67" }, o.createElement(l.Z.Value, null, s().id949f68({ formattedCount: (0, i.wl)(u) })), o.createElement(l.Z.Label, null, s().hb608cfc({ count: u })))));
                }
            }
            a.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        189700: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M8 11h8v2H8zm0-4h5v2H8z" }), o.createElement("path", { d: "M17.5 2h-11C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22h6c4.14 0 7.5-3.36 7.5-7.5v-10C20 3.12 18.88 2 17.5 2zm-2.52 17.41c.01-.1.02-.21.02-.32v-1.27c0-.48.32-.82.84-.82h1.28c.09 0 .19 0 .29-.01-.53 1.04-1.39 1.89-2.43 2.42zM18 14c0 .58-.46 1-.88 1h-1.28C14.26 15 13 16.19 13 17.82v1.27c0 .46-.43.91-.97.91H6.5c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h11c.27 0 .5.22.5.5V14z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        790093: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-bc6ccf4c.f0a77e8a.js.map
