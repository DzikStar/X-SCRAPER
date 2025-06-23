"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BrandedLikesPreview-6107ac1a"],
    {
        699899: (e, t, r) => {
            r.r(t), r.d(t, { default: () => F });
            var n = r(202784),
                o = r(325686),
                s = r(154003),
                i = r(392237),
                a = r(111677),
                l = r.n(a),
                c = r(837020),
                u = r(718e3),
                d = r(252021),
                m = r(731708),
                p = r(449161),
                w = r(279849);
            const f = l().ae58026a,
                h = l().fd00a76a;
            function _({ error: e, onChange: t }) {
                return n.createElement(
                    o.Z,
                    { style: g.container },
                    n.createElement(m.ZP, { align: "center", style: g.message }, f),
                    e && n.createElement(m.ZP, { align: "center", color: "red500", size: "subtext1", style: g.error }, e),
                    n.createElement(
                        p.Z,
                        {
                            accept: ".json",
                            onChange: (e) => {
                                const r = e[0];
                                t(r);
                            },
                            style: g.button,
                            type: "primaryFilled",
                        },
                        n.createElement(w.default, null),
                        " ",
                        h,
                    ),
                );
            }
            const g = i.default.create((e) => ({ container: { paddingVertical: e.spaces.space56, alignSelf: "center" }, message: { paddingVertical: e.spaces.space12 }, error: { maxWidth: `calc(5 * ${e.spaces.space80})`, paddingBottom: e.spaces.space12 }, button: { marginTop: 0, marginHorizontal: 0, alignSelf: "center" } }));
            r(571372);
            const v = function (e) {
                return new Promise((t, r) => {
                    const n = new FileReader();
                    n.addEventListener("load", (e) => {
                        e.target instanceof FileReader && "string" == typeof e.target.result ? t(e.target.result) : r(new Error("Could not parse animation JSON file"));
                    }),
                        n.readAsText(e);
                });
            };
            var E = r(491915),
                b = r(807896),
                C = r(995145);
            const k = new Date();
            k.setDate(k.getDate() - 1);
            const Z = { startMs: k.valueOf(), endMs: k.valueOf() + 1728e5 },
                y = (Z.startMs.toString(), Z.endMs.toString(), { created_at: new Date().toISOString(), display_text_range: [0, 1], favorite_count: 0, reply_count: 0, retweet_count: 0, retweeted: !1, entities: { hashtags: [{ indices: [95, 107], text: "somehashtag" }] }, favorited: !1, id: 1, id_str: "1", lang: "en", permalink: "/_/status/0", source: "", text: "Like this sample Tweet to preview your animation. Nothing you do here will be shared publicly. #somehashtag", user: { created_at: "", default_profile: !1, default_profile_image: !1, entities: {}, fast_followers_count: 0, favourites_count: 0, follow_request_sent: !1, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, has_custom_timelines: !1, id: 0, id_str: "0", is_translator: !1, listed_count: 0, location: "", media_count: 0, normal_followers_count: 0, notifications: !1, profile_banner_url: "", protected: !1, show_all_inline_media: !1, statuses_count: 0, time_zone: "", translator_type: "none", url: "", utc_offset: 0, verified: !1, withheld_in_countries: [], withheld_scope: "", name: "Twitter", profile_image_url_https: "https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_x96.jpg", screen_name: "Twitter", description: "test" } });
            function S({ animationJSON: e }) {
                const [t, r] = n.useState(y);
                return (
                    n.useEffect(() => {
                        setTimeout(() => {
                            t.favorited && r({ ...t, favorited: !1 });
                        }, 2e3);
                    }, [t, r]),
                    n.createElement(C.Z, {
                        renderActionsBar: (o) =>
                            n.createElement(
                                C.Z.ActionsBar,
                                (0, b.Z)({}, o, {
                                    renderLikeAction: (o) =>
                                        n.createElement(
                                            C.Z.ActionsBar.ActionLike,
                                            (0, b.Z)({}, o, {
                                                likeTransitionAnimation: e,
                                                onPress: () => {
                                                    t.favorited || r({ ...t, favorited: !0 });
                                                },
                                            }),
                                        ),
                                }),
                            ),
                        tweet: t,
                    })
                );
            }
            function N({ animationJSON: e }) {
                return n.createElement(o.Z, { testID: "preview-animation" }, n.createElement(E.ZP, { animation: e, animationContainerStyle: U.animationContainer, autoplay: !0, loop: !0, withControls: !0 }), n.createElement(S, { animationJSON: e }));
            }
            const U = i.default.create((e) => ({ animationContainer: { marginVertical: e.spaces.space36, paddingHorizontal: e.spaces.space32 } })),
                A = l().cdf89b84,
                B = l().fce0c59e,
                L = l().g0eea6c2;
            function T() {
                const [e, t] = n.useState(null),
                    [r, i] = n.useState(null);
                return e
                    ? n.createElement(
                          n.Fragment,
                          null,
                          n.createElement(
                              o.Z,
                              { style: P.closeButtonWrap },
                              n.createElement(
                                  s.ZP,
                                  {
                                      icon: n.createElement(c.default, null),
                                      onClick: function () {
                                          t(null);
                                      },
                                      size: "small",
                                      type: "primaryText",
                                  },
                                  "Clear",
                              ),
                          ),
                          n.createElement(N, { animationJSON: e }),
                      )
                    : n.createElement(_, {
                          error: r,
                          onChange: function (e) {
                              v(e)
                                  .then((e) => {
                                      try {
                                          const r = JSON.parse(e);
                                          t(r);
                                      } catch (e) {
                                          i(B);
                                      }
                                  })
                                  .catch((e) => {
                                      i(L);
                                  });
                          },
                      });
            }
            function F({ history: e }) {
                return n.createElement(d.Z, { history: e, primaryContent: n.createElement(T, null), sidebarContent: n.createElement(u.Z, null), title: A });
            }
            const P = i.default.create((e) => ({ closeButtonWrap: { display: "flex", alignItems: "flex-end", paddingHorizontal: e.spaces.space16 } }));
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => E });
            var n = r(202784),
                o = r(325686),
                s = r(731708),
                i = r(235902),
                a = r(649846),
                l = r(529509),
                c = r(392237),
                u = r(823161),
                d = r(238406),
                m = r(366635),
                p = r(646797);
            const w = () => !1;
            class f extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: s } = this.props,
                                { followersYouKnow: i } = e;
                            if (i && t && r) {
                                const { avatarUrls: e, count: t, names: i } = r;
                                return t ? n.createElement(o.Z, { style: [h.marginTop12, h.minHeight] }, "number" == typeof t && n.createElement(l.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: i, userScreenName: s })) : null;
                            }
                        });
                }
                render() {
                    return n.createElement(i.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return n.createElement(o.Z, { style: h.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: n } = t;
                    return n && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return n.createElement(o.Z, { style: h.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? n.createElement(o.Z, { style: h.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: s, userAvatarSize: a, userAvatarUri: l, userScreenName: c } = this.props,
                        { avatar: d } = e;
                    return n.createElement(o.Z, { style: h.row }, n.createElement(i.ZP.Provider, { value: { userAvatarLabel: w } }, n.createElement(u.default, { link: r, onClick: t, promotedContent: s, screenName: c, size: a, uri: d ? l : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: s } = t;
                    return r ? n.createElement(n.Fragment, null, this._renderUserAvatar(), n.createElement(o.Z, { style: h.marginTop8 }, this._renderUserName(), s && this._renderHighlightedUserLabel())) : n.createElement(o.Z, { style: h.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: o, onScreenNameClick: s, profileLink: i, promotedContent: a, userHighlightedLabel: l, userName: c, userScreenName: u, userTranslatorType: d, userVerifiedType: p, userWithFollowsYou: w, withNameWrap: f } = this.props,
                        { badges: h, followIndicator: _, fullName: g } = e;
                    return n.createElement(m.Z, { affiliateBadgeInfo: l, badgeContext: "account", isBlueVerified: h ? t : void 0, isProtected: h ? r : void 0, isVerified: h ? o : void 0, link: i, name: g ? c : u, nameSize: "headline2", onLinkClick: s, promotedContent: a, screenName: u, translatorType: h ? d : void 0, verifiedType: h ? p : void 0, withFollowsYou: _ && w, withLink: !0, withNameWrap: f, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && n.createElement(a.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? n.createElement(o.Z, { style: h.marginTop4 }, n.createElement(s.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: s, userWithheldDescription: i, userWithheldEntities: a } = this.props,
                        { description: l } = e;
                    return l && t && r && s ? n.createElement(o.Z, { style: [h.row, h.marginTop12] }, n.createElement(d.Z, { description: t, entities: r, userId: s, withheldDescription: i, withheldEntities: a })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: s, userFollowersCount: i, userFriendsCount: a, userScreenName: l } = this.props,
                        { stats: c } = e;
                    return c ? n.createElement(o.Z, { style: [h.row, h.marginTop12] }, n.createElement(p.Z, { followersCount: i, friendsCount: a, onPress: r, screenName: l, subscriptionsCount: s, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            f.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const h = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var _ = r(807896);
            var g = r(111677);
            const v = r.n(g)().ef633578;
            class E extends n.PureComponent {
                render() {
                    return n.createElement(f, this.props);
                }
            }
            (E.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: o, knownFollowers: s, onAvatarClick: i, onScreenNameClick: a, promotedContent: l, userDescription: c, userId: u, userName: d, userScreenName: m, ...p } = e,
                    w = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return n.createElement(f, (0, _.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: w.isUserStatsWithLink, isUserVerified: o, knownFollowers: s, onAvatarClick: i, onScreenNameClick: a, promotedContent: l, userAvatarUri: w.profile_image_url_https, userDescription: c, userEntities: w.entities, userFollowersCount: w.followers_count, userFriendsCount: w.friends_count, userId: u, userName: d, userScreenName: m, userWithFollowsYou: w.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (E.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return n.createElement(f, { errorMessage: v, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: r, userScreenName: r, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                o = r(111677),
                s = r.n(o),
                i = r(891198),
                a = r(98538);
            class l extends n.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: o, style: l, subscribersCount: c, subscriptionsCount: u, withLink: d, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        w = `/${o}/verified_followers`;
                    return n.createElement(a.Z.Group, { style: l }, n.createElement(a.Z, { count: t, link: d ? `/${o}/following` : void 0, onPress: r }, n.createElement(s().I18NFormatMessage, { $i18n: "g3ed1dd5" }, n.createElement(a.Z.Value, null, s().e4f1e6e4({ formattedCount: (0, i.wl)(t) })), n.createElement(a.Z.Label, null, s().daf8a75f({ count: t })))), n.createElement(a.Z, { count: e, link: d ? w : void 0, onPress: r }, n.createElement(s().I18NFormatMessage, { $i18n: "i06724fb" }, n.createElement(a.Z.Value, null, s().ef1f4fc6({ formattedCount: (0, i.wl)(e) })), n.createElement(a.Z.Label, null, s().ad9b5988({ count: e })))), m && void 0 !== c && n.createElement(a.Z, { count: c, link: d ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: r }, n.createElement(s().I18NFormatMessage, { $i18n: "eb0084f3" }, n.createElement(a.Z.Value, null, s().a9980948({ formattedCount: (0, i.wl)(c) })), n.createElement(a.Z.Label, null, s().ce44a35c({ count: c })))), p && u && n.createElement(a.Z, { count: u, link: d ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: r }, n.createElement(s().I18NFormatMessage, { $i18n: "fc1b8f67" }, n.createElement(a.Z.Value, null, s().id949f68({ formattedCount: (0, i.wl)(u) })), n.createElement(a.Z.Label, null, s().hb608cfc({ count: u })))));
                }
            }
            l.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                s = r(783427),
                i = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        900664: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const o = {
                cancel() {
                    n(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), n(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BrandedLikesPreview-6107ac1a.498c459a.js.map
