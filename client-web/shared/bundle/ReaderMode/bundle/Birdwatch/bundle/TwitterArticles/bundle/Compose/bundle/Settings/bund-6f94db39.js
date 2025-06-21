"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39", "icons/IconBookmarkPlusStroke-js", "icons/IconFilterFill-js", "icons/IconRepliesStroke-js", "icons/IconStrikethrough-js", "icons/IconThumbsUpFill-js"],
    {
        266704: (e, t, r) => {
            r.d(t, { Z: () => E });
            var o = r(202784),
                n = r(325686),
                i = r(731708),
                s = r(235902),
                l = r(649846),
                a = r(529509),
                c = r(392237),
                d = r(823161),
                u = r(238406),
                h = r(366635),
                m = r(646797);
            const p = () => !1;
            class w extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: i } = this.props,
                                { followersYouKnow: s } = e;
                            if (s && t && r) {
                                const { avatarUrls: e, count: t, names: s } = r;
                                return t ? o.createElement(n.Z, { style: [v.marginTop12, v.minHeight] }, "number" == typeof t && o.createElement(a.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: s, userScreenName: i })) : null;
                            }
                        });
                }
                render() {
                    return o.createElement(s.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return o.createElement(n.Z, { style: v.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: o } = t;
                    return o && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return o.createElement(n.Z, { style: v.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? o.createElement(n.Z, { style: v.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: i, userAvatarSize: l, userAvatarUri: a, userScreenName: c } = this.props,
                        { avatar: u } = e;
                    return o.createElement(n.Z, { style: v.row }, o.createElement(s.ZP.Provider, { value: { userAvatarLabel: p } }, o.createElement(d.default, { link: r, onClick: t, promotedContent: i, screenName: c, size: l, uri: u ? a : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: i } = t;
                    return r ? o.createElement(o.Fragment, null, this._renderUserAvatar(), o.createElement(n.Z, { style: v.marginTop8 }, this._renderUserName(), i && this._renderHighlightedUserLabel())) : o.createElement(n.Z, { style: v.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: n, onScreenNameClick: i, profileLink: s, promotedContent: l, userHighlightedLabel: a, userName: c, userScreenName: d, userTranslatorType: u, userVerifiedType: m, userWithFollowsYou: p, withNameWrap: w } = this.props,
                        { badges: v, followIndicator: f, fullName: g } = e;
                    return o.createElement(h.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: v ? t : void 0, isProtected: v ? r : void 0, isVerified: v ? n : void 0, link: s, name: g ? c : d, nameSize: "headline2", onLinkClick: i, promotedContent: l, screenName: d, translatorType: v ? u : void 0, verifiedType: v ? m : void 0, withFollowsYou: f && p, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && o.createElement(l.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? o.createElement(n.Z, { style: v.marginTop4 }, o.createElement(i.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: i, userWithheldDescription: s, userWithheldEntities: l } = this.props,
                        { description: a } = e;
                    return a && t && r && i ? o.createElement(n.Z, { style: [v.row, v.marginTop12] }, o.createElement(u.Z, { description: t, entities: r, userId: i, withheldDescription: s, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: i, userFollowersCount: s, userFriendsCount: l, userScreenName: a } = this.props,
                        { stats: c } = e;
                    return c ? o.createElement(n.Z, { style: [v.row, v.marginTop12] }, o.createElement(m.Z, { followersCount: s, friendsCount: l, onPress: r, screenName: a, subscriptionsCount: i, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const v = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var f = r(807896);
            var g = r(111677);
            const b = r.n(g)().ef633578;
            class E extends o.PureComponent {
                render() {
                    return o.createElement(w, this.props);
                }
            }
            (E.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: n, knownFollowers: i, onAvatarClick: s, onScreenNameClick: l, promotedContent: a, userDescription: c, userId: d, userName: u, userScreenName: h, ...m } = e,
                    p = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return o.createElement(w, (0, f.Z)({}, m, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: p.isUserStatsWithLink, isUserVerified: n, knownFollowers: i, onAvatarClick: s, onScreenNameClick: l, promotedContent: a, userAvatarUri: p.profile_image_url_https, userDescription: c, userEntities: p.entities, userFollowersCount: p.followers_count, userFriendsCount: p.friends_count, userId: d, userName: u, userScreenName: h, userWithFollowsYou: p.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (E.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const n = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return o.createElement(w, { errorMessage: b, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: n.protected, isUserStatsWithLink: n.isUserStatsWithLink, isUserVerified: n.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: n.profile_image_url_https, userDescription: n.description, userEntities: n.entities, userFollowersCount: n.followers_count, userFriendsCount: n.friends_count, userId: n.id_str, userName: r, userScreenName: r, userWithFollowsYou: n.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(202784),
                n = r(111677),
                i = r.n(n),
                s = r(891198),
                l = r(98538);
            class a extends o.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: n, style: a, subscribersCount: c, subscriptionsCount: d, withLink: u, withSubscribersCount: h, withSubscriptionsCount: m } = this.props,
                        p = `/${n}/verified_followers`;
                    return o.createElement(l.Z.Group, { style: a }, o.createElement(l.Z, { count: t, link: u ? `/${n}/following` : void 0, onPress: r }, o.createElement(i().I18NFormatMessage, { $i18n: "g3ed1dd5" }, o.createElement(l.Z.Value, null, i().e4f1e6e4({ formattedCount: (0, s.wl)(t) })), o.createElement(l.Z.Label, null, i().daf8a75f({ count: t })))), o.createElement(l.Z, { count: e, link: u ? p : void 0, onPress: r }, o.createElement(i().I18NFormatMessage, { $i18n: "i06724fb" }, o.createElement(l.Z.Value, null, i().ef1f4fc6({ formattedCount: (0, s.wl)(e) })), o.createElement(l.Z.Label, null, i().ad9b5988({ count: e })))), h && void 0 !== c && o.createElement(l.Z, { count: c, link: u ? `/${n}/creator-subscriptions/subscribers` : void 0, onPress: r }, o.createElement(i().I18NFormatMessage, { $i18n: "eb0084f3" }, o.createElement(l.Z.Value, null, i().a9980948({ formattedCount: (0, s.wl)(c) })), o.createElement(l.Z.Label, null, i().ce44a35c({ count: c })))), m && d && o.createElement(l.Z, { count: d, link: u ? `/${n}/creator-subscriptions/subscriptions` : void 0, onPress: r }, o.createElement(i().I18NFormatMessage, { $i18n: "fc1b8f67" }, o.createElement(l.Z.Value, null, i().id949f68({ formattedCount: (0, s.wl)(d) })), o.createElement(l.Z.Label, null, i().hb608cfc({ count: d })))));
                }
            }
            a.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        355586: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        818088: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        194417: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        368761: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12.312 23.736c-.123 0-.246-.03-.358-.091-.241-.132-.392-.385-.392-.659v-.871c0-.414.336-.75.75-.75.256 0 .482.128.617.324 1.905-1.247 4.823-3.192 5.908-4.11 2.256-1.908 3.604-4.732 3.608-7.554 0-.414.336-.749.75-.749s.75.337.749.751c-.004 3.256-1.552 6.507-4.14 8.697-1.326 1.121-5.009 3.546-7.086 4.892-.124.08-.266.12-.408.12zm-2.557-1.897c1.697-1.082 6.672-4.317 8.048-5.48 1.902-1.609 3.04-3.976 3.043-6.329-.006-4.366-3.433-7.787-7.8-7.787l-4.149-.01c-4.375-.001-7.801 3.426-7.801 7.801 0 4.104 3.14 7.204 7.465 7.37.002 1.79.008 2.88.058 3.544-.041.101-.061.21-.055.322.009.178.081.344.198.471.111.241.283.241.552.241.163 0 .316-.053.441-.144zm3.289-18.097c3.529 0 6.298 2.763 6.302 6.287-.003 1.917-.941 3.855-2.512 5.184-1.03.871-4.478 3.16-6.771 4.645l-.002-3.175c0-.403-.319-.734-.722-.749l-.721-.027c-3.49-.135-6.022-2.604-6.022-5.872 0-3.534 2.768-6.302 6.299-6.302l4.149.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        226597: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        69893: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        922449: (e, t, r) => {
            r.r(t), r.d(t, { default: () => a });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M5.996 10.06L6 19.907v-9.851zM6 20.332V21H2V8h1.5c.742 0 1.442.328 1.92.9.334.398.532.886.573 1.407L6 20.331zm15.78-8.051c.238-1.043-.009-2.121-.677-2.958-.67-.841-1.67-1.322-2.743-1.322H14.5l.614-3.684c.095-.578-.068-1.168-.448-1.615-.378-.445-.931-.701-1.516-.701-1.297 0-1.429.537-4.63 5.239C8.182 7.737 8 8.325 8 8.926v12.076h8.2c2.088 0 3.935-1.472 4.389-3.496l1.19-5.224z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39.13938c5a.js.map
