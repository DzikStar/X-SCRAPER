"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-b7da5e41"],
    {
        705079: (e, t, s) => {
            s.d(t, { s: () => a });
            var r = s(99107);
            const a = (e) => e === r.p_;
        },
        23134: (e, t, s) => {
            s.d(t, { C: () => B });
            s(136728);
            var r = s(202784),
                a = s(190286),
                n = s(723587),
                o = s(111677),
                i = s.n(o),
                c = s(615656),
                l = s(666670),
                h = s(757953),
                d = s(879596),
                u = s(323683),
                p = s(479506),
                m = s(942893),
                S = s(500002),
                f = s(233391),
                _ = s(288955),
                y = s(71620),
                g = s(668214),
                I = s(390387),
                b = s(601576),
                v = s(919022);
            const C = (e, t) => t.user || v.ZP.select(e, t.userId),
                w = (0, g.Z)()
                    .propsFromState(() => ({ isLoggedIn: I.Qb, user: C }))
                    .propsFromActions(() => ({ addToast: b.fz, cancelPendingFollow: v.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, y.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: v.ZP.fetchOneIfNeeded, follow: v.ZP.follow, unblock: v.ZP.unblock, unfollow: v.ZP.unfollow }))
                    .withAnalytics(),
                R = (e) => `${e}-follow`,
                Z = (e) => `${e}-unfollow`,
                k = (e) => `${e}-block`,
                E = (e) => `${e}-unblock`,
                F = (e) => `${e}-cancel`,
                T = (e) => `${e}-subscribe`,
                D = (e) => `${e}-manageSubscription`,
                P = i().hbe4feb5,
                x = i().df4c86b0,
                q = i().bba40ffa,
                A = i().f558829e,
                U = i().a6941096,
                H = i().j24c37b2,
                O = i().if8cd2a4,
                L = i().b5972260;
            class N extends r.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: t, isRelay: s, userId: r } = this.props;
                            r && !s && t(r).catch(e(l.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: t, user: s } = this.props;
                            s && e(s.id_str).catch(t({ defaultToast: { text: L }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, follow: s, isFollowNudge: r, onFollowClick: a, promotedContent: n, user: o } = this.props;
                            o && s(o.id_str, { promotedContent: n, isFollowNudge: r }).then(() => (o.protected && e({ text: P({ screenName: o.screen_name }) }), a && a(), this._scribe({ action: "follow" })), t({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unblock: s, user: r } = this.props;
                            r && (s(r.id_str, { promotedContent: t }).catch(e(d.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unfollow: s, user: r } = this.props;
                            if (r) return s(r.id_str, { promotedContent: t }).catch(e(u.X)), this._scribe({ action: "unfollow" });
                        }),
                        (this._handleSuperFollow = () => {
                            const { history: e, referringPage: t, user: s } = this.props;
                            if (s) return this._scribe({ element: "super_follow_subscribe_button", action: "click" }), e.push(`/${s.screen_name}/creator-subscriptions/subscribe`, { referring_page: t ?? "profile_intent" });
                        }),
                        (this._handleUnSuperFollow = () => {
                            const { history: e, user: t } = this.props;
                            if (t) return this._scribe({ element: "super_follow_unsubscribe_button", action: "click" }), e.push(`/${t.screen_name}/creator-subscriptions/manage`);
                        }),
                        (this.state = { showDialog: !1 });
                }
                componentDidMount() {
                    this.props.isLoggedIn && this._fetchUserIfNeeded(),
                        (this._followApiErrorHandlingConfiguration = {
                            ...h.H,
                            [c.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: O, dialogHeadline: q });
                                },
                            },
                            [c.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: U, dialogHeadline: q });
                                },
                            },
                            [c.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: A, dialogHeadline: x });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: t, isSuperFollowSubscriptionEnabled: s, isTransparent: o, relationshipMode: i, showRelationshipChangeConfirmation: c, size: l, style: h, user: d, userId: u } = this.props,
                        { dialogHeadline: p, dialogText: m, showDialog: S } = this.state,
                        y = d?.screen_name,
                        g = y ? `/${y}` : "",
                        I = { follow: R(u), unfollow: Z(u), cancel: F(u), block: k(u), unblock: E(u), subscribe: T(u), manageSubscription: D(u) },
                        b = !(!d?.follow_request_sent || !d.protected || d.following);
                    return (
                        !!d &&
                        r.createElement(
                            r.Fragment,
                            null,
                            S ? r.createElement(a.Z, { confirmButtonLabel: H, headline: p, onCancel: this._handleClose, onConfirm: this._handleClose, text: m, withCancelButton: !1 }) : null,
                            r.createElement(_.Z, { displayMode: f.BH.follow, postLoginPath: g, userFullName: d.name, userId: u }, (a) => r.createElement(n.Z, { buttonType: e, isBlocking: d.blocking, isFollowRequestSent: b, isFollowed: !!d.followed_by, isFollowing: !!d.following, isSuperFollowEligible: !!s && d.super_follow_eligible, isSuperFollowing: d.super_following, isTransparent: o, name: y, onCancelPendingFollow: a(this._handleCancelPendingFollow), onFollow: a(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: a(this._handleSuperFollow), onUnSuperFollow: a(this._handleUnSuperFollow), onUnblock: a(this._handleUnblock), onUnfollow: a(this._handleUnfollow), relationshipMode: i, showRelationshipChangeConfirmation: t && c, size: l, style: h, testIDs: I, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: t, element: s } = e,
                        { analytics: r, location: a, promotedContent: n, user: o } = this.props,
                        { items: i } = r.contextualScribeData,
                        c = i?.find((e) => e.item_type === p.Z.ItemType.USER && e.id === o?.id_str),
                        l = [];
                    o ? l.push({ ...c, ...m.Z.getUserItem(o, n) }) : c && l.push(c);
                    const h = a.query && a.query.screen_name ? { items: l, context: "profile_intent" } : { items: l };
                    return r.scribe({ element: s, action: t, data: h });
                }
            }
            const B = (0, S.ZP)(w(N));
        },
        80309: (e, t, s) => {
            s.d(t, { ZP: () => T, UJ: () => k });
            var r = s(807896),
                a = (s(136728), s(202784)),
                n = s(251067),
                o = s(325686),
                i = s(392237),
                c = s(731708),
                l = s(111677),
                h = s.n(l),
                d = s(752624),
                u = s(516951),
                p = s(874627),
                m = s(994775),
                S = s(536387),
                f = s(163390),
                _ = s(113840),
                y = s(500002),
                g = s(443781),
                I = s(668214),
                b = s(919022);
            const v = (0, I.Z)()
                .propsFromState(() => ({ viewerUser: b.ZP.selectViewerUser }))
                .adjustStateProps(({ viewerUser: e }) => ({ viewerUserScreenName: e ? e.screen_name : void 0 }));
            const C = [...s(122758).M],
                w = h().b47e760e,
                R = h().fd2c7b44,
                Z = new d.Z(),
                k = (e) => Z.subscribe(e).unsubscribe;
            class E extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._bindKeyboardShortcuts = () => {
                            const { history: e, jotaiStore: t, viewerUserScreenName: s } = this.props,
                                r = (t, s = {}) => e.push({ pathname: t, state: { ...s, source: "keyboard_shortcut" } }),
                                a = (e) => (t) => {
                                    t.preventDefault(), Z.getListeners().length ? Z.notify(e) : r("/explore", { searchFocused: !0, searchPrefill: e });
                                },
                                o = { [f.uq.labs.openCommandCenter]: u.Z, [f.uq.search]: a(), [f.uq.goToUser]: a("@"), [f.uq.openKeyboardShortcuts]: () => r("/i/keyboard_shortcuts"), [f.uq.goExplore]: () => r("/explore"), [f.uq.goSettings]: () => r("/settings") },
                                i = (e) => ({ [f.uq.goProfile]: () => r(`/${e}`), [f.uq.goLikes]: () => r(`/${e}/likes`), [f.uq.goLists]: () => r(`/${e}/lists`) }),
                                c = this.context.userClaims.isTrueAndEnabled("subscriptions_feature_1007"),
                                l = s && c ? { ...i(s), [f.uq.goTopArticles]: () => r("/i/articles") } : s ? i(s) : {},
                                h = { ...o, ...l, [f.uq.toggleCommandCenter]: (0, n.fH)(n.vw.prod) ? u.Z : () => t.set(p._K), [f.uq.goHome]: () => r("/home"), [f.uq.goDisplay]: () => r("/i/display"), [f.uq.goNotifications]: () => r("/notifications"), [f.uq.goMentions]: () => r("/notifications/mentions"), [f.uq.goMessages]: () => r("/messages"), [f.uq.goGrok]: () => r("/i/grok"), [f.uq.newMessage]: () => r("/messages/compose"), [f.uq.newTweet]: () => r("/compose/post"), [f.uq.goBookmarks]: () => r("/i/bookmarks"), [f.uq.goToDrafts]: () => r("/compose/post/unsent/drafts"), [f.uq.goToScheduled]: () => r("/compose/post/unsent/scheduled") },
                                d = this.props.viewerUserScreenName ? h : o;
                            this._unbindKeyboardShortcuts = (0, m.Z)(d);
                        });
                }
                componentDidMount() {
                    this._bindKeyboardShortcuts();
                }
                componentWillUnmount() {
                    this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts();
                }
                render() {
                    return this.props.viewerUserScreenName ? a.createElement(o.Z, { "aria-level": 2, role: "heading", style: i.default.visuallyHidden }, a.createElement(p.lk, null), a.createElement(c.ZP, null, w), a.createElement(c.ZP, { focusable: !1, link: "/i/keyboard_shortcuts" }, R)) : null;
                }
            }
            E.contextType = g.rC;
            const F = v(function (e) {
                    const t = (0, S.xO)();
                    return e.disabled ? null : a.createElement(E, (0, r.Z)({}, e, { jotaiStore: t }));
                }),
                T = (0, _.g)((0, y.ZP)(F), C);
        },
        243754: (e, t, s) => {
            s.d(t, { Z: () => d });
            var r = s(202784),
                a = s(190286),
                n = s(111677),
                o = s.n(n),
                i = s(436001);
            const c = o().hffea05c,
                l = o().j037e374,
                h = o().d96cf7ce,
                d = ({ onCancel: e, onConfirm: t }) => r.createElement(a.Z, { confirmButtonLabel: h, confirmButtonType: "destructiveFilled", headline: c, onCancel: e, onConfirm: t, testID: i.Z.deleteSavedSearchDialog, text: l });
        },
        436001: (e, t, s) => {
            s.d(t, { Z: () => r });
            const r = { deleteRecentSearchesDialog: "deleteRecentSearchesDialog", deleteSavedSearchDialog: "deleteSavedSearchDialog", typeaheadEmptySearch: "typeaheadEmptySearch", typeaheadRecentSearchesHeader: "typeaheadRecentSearchesHeader", typeaheadRecentSearchesItem: "typeaheadRecentSearchesItem", typeaheadSavedSearchesContainer: "typeaheadSavedSearchesContainer", typeaheadSavedSearchesHeader: "typeaheadSavedSearchesHeader", typeaheadSavedSearchesItem: "typeaheadSavedSearchesItem" };
        },
        462044: (e, t, s) => {
            s.r(t), s.d(t, { SearchBoxContainer: () => Xe, default: () => et });
            var r = s(807896),
                a = (s(136728), s(202784)),
                n = s(325686),
                o = s(392237),
                i = s(111677),
                c = s.n(i),
                l = s(2430),
                h = s(782826),
                d = s(942893),
                u = s(903019),
                p = s(339110),
                m = s(883432),
                S = s(500002),
                f = s(443781),
                _ = s(80309),
                y = s(874088),
                g = s(687103),
                I = s(992942),
                b = s(952793);
            function v({ query: e }) {
                if ((0, b.hC)("rweb_search_show_large_hashflag") && e && e.startsWith("#"))
                    return a.createElement(g._y.Consumer, null, ({ getBrandedHashtag: t }) => {
                        const s = t(e.slice(1))?.url;
                        return s && a.createElement(I.Z, { source: s, style: C.image });
                    });
            }
            const C = o.default.create((e) => ({ image: { width: 36, height: 36, marginStart: e.spaces.space8, alignSelf: "center" } }));
            var w = s(928316),
                R = s(731708),
                Z = s(154003),
                k = s(190286),
                E = s(459679),
                F = s(290402),
                T = s(602427),
                D = s(952428),
                P = s(673510),
                x = s(837020),
                q = s(668214),
                A = s(624479),
                U = s(919022);
            const H = (e, t) => U.ZP.select(e, t.id),
                O = (e, t) => (0, A.cY)(e, t.id),
                L = (0, q.Z)().propsFromState(() => ({ user: H, userSpace: O })),
                N = a.createElement(x.default, null),
                B = c().e68b09b4,
                M = c().fd06b02f;
            class $ extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAvatarClick = () => {
                            const { userSpace: e } = this.props;
                            e || this._handleClick();
                        }),
                        (this._handleClick = () => {
                            const { index: e, onItemClick: t } = this.props,
                                s = this.searchItemData;
                            s && t(s, e);
                        });
                }
                render() {
                    const { onRemove: e, style: t, user: s, userSpace: r } = this.props,
                        { featureSwitches: n } = this.context;
                    if (!s) return null;
                    const o = r && n.isTrue("voice_rooms_recent_search_audiospace_ring_enabled") ? r : void 0;
                    o && (o["aria-label"] = M({ screenName: s.screen_name }));
                    const i = a.createElement(Z.ZP, { "aria-label": B, icon: N, onPress: e, size: "small", type: "brandText" });
                    return a.createElement(P.ZP, { affiliateBadgeInfo: s.highlightedLabel, avatarSize: "xLarge", avatarUri: s.profile_image_url_https, decoration: i, displayMode: "UserCompact", isBlueVerified: s.is_blue_verified, isProtected: s.protected, isVerified: s.verified, name: s.name, onAvatarClick: this._handleAvatarClick, onCellClick: this._handleClick, onScreenNameClick: this._handleClick, presenceIndicator: o, screenName: s.screen_name, style: t, userId: s.id_str, verifiedType: s.verified_type, withInteractiveStyling: !1, withLink: !1, withUsernameCenterAligned: !0 });
                }
                get searchItemData() {
                    return this.props.user ? { category: u.Hk.RecentSearch, link: this.props.user.screen_name, query: this.props.id, recentSearchType: u.g2.User } : null;
                }
            }
            $.contextType = f.rC;
            const Q = L.forwardRef($);
            var z = s(120428);
            const K = c().e68b09b4;
            class V extends a.PureComponent {
                render() {
                    const { id: e, onRemove: t, ...s } = this.props;
                    return e ? a.createElement(n.Z, { style: j.root }, a.createElement(z.Z, s), a.createElement(Z.ZP, { "aria-label": K, icon: a.createElement(x.default, null), onPress: t, size: "small", style: j.button, type: "brandText" })) : null;
                }
                get searchItemData() {
                    const { id: e, image: t, supportText: s, title: r } = this.props;
                    return { category: u.Hk.RecentSearch, query: e, recentSearchType: u.g2.Event, queryMetadata: { id: e, image: t, title: r, supportText: s } };
                }
            }
            const j = o.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between" }, button: { alignSelf: "center" } })),
                W = V;
            var G = s(909377),
                J = s(872405),
                X = s(452693);
            const Y = a.createElement(x.default, null),
                ee = c().e68b09b4;
            class te extends a.Component {
                render() {
                    const { description: e, id: t, name: s, onRemove: r } = this.props;
                    if (!t) return null;
                    const o = "xLarge",
                        i = a.createElement(G.Z, { Icon: X.default, color: "primary", size: o, style: re.searchIcon });
                    return a.createElement(J.Z, { avatarCell: i, avatarSize: o, cellStyle: re.bodyColumn }, a.createElement(n.Z, null, a.createElement(R.ZP, { numberOfLines: 1, weight: "bold", withHashflags: !0 }, s), a.createElement(R.ZP, { color: "gray700", numberOfLines: 1, withHashflags: !0 }, e)), a.createElement(Z.ZP, { "aria-label": ee, icon: Y, onPress: r, size: "small", type: "brandText" }));
                }
                get searchItemData() {
                    const { description: e, id: t, name: s } = this.props;
                    return t ? { category: u.Hk.RecentSearch, query: t, recentSearchType: u.g2.Topic, queryMetadata: { id: t, name: s, description: e } } : null;
                }
            }
            const se = te,
                re = o.default.create((e) => ({ bodyColumn: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, searchIcon: { marginEnd: e.spaces.space12 } }));
            var ae = s(607127),
                ne = s(264398),
                oe = s(912021);
            const ie = a.createElement(x.default, null),
                ce = a.createElement(ae.default, null);
            class le extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedButtonType = (0, oe.Z)((e) => (e === u.Hk.SavedSearch ? "destructiveText" : "brandText"))),
                        (this._getMemoizedRemoveIcon = (0, oe.Z)((e) => (e === u.Hk.SavedSearch ? ce : ie))),
                        (this._getButtonType = () => {
                            const { category: e } = this.props;
                            return this._getMemoizedButtonType(e);
                        }),
                        (this._getRemoveIcon = () => {
                            const { category: e } = this.props;
                            return this._getMemoizedRemoveIcon(e);
                        });
                }
                render() {
                    const { onRemove: e, query: t } = this.props,
                        s = "xLarge",
                        r = a.createElement(G.Z, { Icon: ne.default, color: "neutral", size: s, style: he.searchIcon });
                    return a.createElement(J.Z, { avatarCell: r, avatarSize: s, cellStyle: he.bodyColumn }, a.createElement(R.ZP, { numberOfLines: 1, withHashflags: !0 }, t), a.createElement(Z.ZP, { "aria-label": "", icon: this._getRemoveIcon(), onPress: e, size: "small", type: this._getButtonType() }));
                }
                get searchItemData() {
                    const { category: e, query: t } = this.props;
                    return { category: e, query: t, recentSearchType: e === u.Hk.RecentSearch ? u.g2.Keyword : void 0 };
                }
            }
            const he = o.default.create((e) => ({ bodyColumn: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: "none" } })),
                de = le;
            class ue extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSearchItem = () => {
                            const { index: e, item: t, onItemClick: s } = this.props;
                            return t.keyword ? a.createElement(de, { category: t.category, onRemove: this._handleOnRemove, query: t.keyword.query, ref: this._handleItemRef }) : t.user ? a.createElement(Q, { id: t.user.id || "", index: e, onItemClick: s, onRemove: this._handleOnRemove, ref: this._handleItemRef, style: pe.itemPadding }) : t.topic ? a.createElement(se, { description: t.topic.description || "", id: t.topic.id, name: t.topic.name || "", onRemove: this._handleOnRemove, ref: this._handleItemRef }) : t.event ? a.createElement(W, { id: t.event.id, image: t.event.image || { url: "", height: 0, width: 0 }, onRemove: this._handleOnRemove, ref: this._handleItemRef, supportText: t.event.supportText || "", title: t.event.title || "" }) : null;
                        }),
                        (this._handleItemRef = (e) => {
                            this._itemRef = e;
                        }),
                        (this._handleOnRemove = (e) => {
                            const { index: t, item: s, onRemoveQuery: r } = this.props;
                            r(s, t), e.stopPropagation();
                        }),
                        (this._handleOnClick = () => {
                            const { index: e, item: t, onItemClick: s } = this.props;
                            t.user || (this.searchItemData && s(this.searchItemData, e));
                        });
                }
                render() {
                    const { domId: e, item: t, testID: s } = this.props;
                    return a.createElement(D.Z, { "aria-selected": !!e, focusable: !0, id: e, onClick: this._handleOnClick, role: "option", style: [pe.root, e && pe.focused, !t?.user && pe.itemPadding], testID: s }, this._renderSearchItem());
                }
                get searchItemData() {
                    return this._itemRef ? this._itemRef.searchItemData : null;
                }
            }
            const pe = o.default.create((e) => ({ root: { cursor: "pointer" }, itemPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, focused: { backgroundColor: e.colors.gray0 } })),
                me = ue;
            var Se = s(24949),
                fe = s(933277),
                _e = s(615656),
                ye = s(71620),
                ge = s(204744),
                Ie = s(554951),
                be = s(312771);
            function ve(e) {
                return (0, _e.VZ)(e, _e.ZP.GenericUserNotFound) || (0, _e.VZ)(e, _e.ZP.OtherUserSuspended) || (0, _e.VZ)(e, _e.ZP.AddressBookLookupNotFound);
            }
            const Ce = (0, Se.P1)(ge.Ww, U.ZP.selectFetchStatuses, (e, t) => {
                    const s = (0, E.Z)(e, (e) => {
                        const s = e.user?.id;
                        return s && t[s] ? { id: s, fetchStatus: t[s] } : void 0;
                    });
                    return (0, fe.Z)(s, (e) => e.fetchStatus);
                }),
                we = (0, Se.P1)(Ce, (e) => (e[be.ZP.FAILED] ?? []).map((e) => e.id)),
                Re = (0, Se.P1)(Ce, U.ZP.selectErrors, (e, t) => {
                    const s = e[be.ZP.FAILED] ?? [],
                        r = e[be.ZP.LOADED] ?? [],
                        a = e[be.ZP.LOADING] ?? [],
                        n = s.filter(({ id: e }) => !ve(t[e] ?? {}));
                    return a.length > 0 ? be.ZP.LOADING : r.length > 0 ? be.ZP.LOADED : n.length > 0 ? be.ZP.FAILED : be.ZP.NONE;
                }),
                Ze = (0, Se.P1)(Ce, U.ZP.selectErrors, (e, t) => {
                    const s = e[be.ZP.FAILED] ?? [];
                    return (0, E.Z)(s, (e) => {
                        if (ve(t[e.id] ?? {})) return e.id;
                    });
                }),
                ke = (0, Se.P1)(Ie.as, (e) => e.map((e) => ({ keyword: { query: e.query }, savedSearchId: e.id_str, category: u.Hk.SavedSearch }))),
                Ee = (0, Se.P1)(ge.Ww, (e) => e.map((e) => ({ ...e, category: u.Hk.RecentSearch }))),
                Fe = (0, q.Z)()
                    .propsFromState(() => ({ isRecentSearchDataLoaded: ge.H$, recentSearches: Ee, usersFetchStatus: Re, invalidRecentSearchUserIds: Ze, failedRecentSearchUserIds: we, savedSearches: ke }))
                    .adjustStateProps(({ failedRecentSearchUserIds: e, invalidRecentSearchUserIds: t, isRecentSearchDataLoaded: s, recentSearches: r, savedSearches: a, usersFetchStatus: n }) => {
                        const o = !r.filter(({ user: e }) => e && t.indexOf(e.id) < 0).length,
                            i = n !== be.ZP.LOADING && s && o ? be.ZP.LOADED : n;
                        return { failedRecentSearchUserIds: e, invalidRecentSearchUserIds: t, recentSearches: r, fetchStatus: i, savedSearches: a };
                    })
                    .propsFromActions(() => ({ clearAll: ge.qF, createLocalApiErrorHandler: (0, ye.zr)("SEARCH_ONE_CLICK"), deleteSavedSearch: Ie.k9, fetchRecentSearchesIfNeeded: ge.OB, fetchSavedSearchesIfNeeded: Ie.l9, fetchUsersIfNeeded: U.ZP.fetchManyIfNeeded, fetchUsersPresenceIfNeeded: A.ZP.fetchManyIfNeeded, removeQuery: ge.hj }))
                    .withAnalytics({ element: "typeahead" });
            var Te = s(243754),
                De = s(436001);
            const Pe = c().a2c1b222,
                xe = { headline: c().f45c4250, text: c().caae4dda, confirmButtonLabel: c().dbd5d400 },
                qe = c().a8d68f62,
                Ae = c().c6530778,
                Ue = c().e047b8fa,
                He = ["event", "keyword", "topic", "user"];
            class Oe extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getRecentSearchItems = () => {
                            const { failedRecentSearchUserIds: e, recentSearches: t } = this.props,
                                s = t.filter((t) => (t.user && He.includes("user") ? e.indexOf(t.user.id) < 0 : Object.keys(t).some((e) => He.includes(e))));
                            return s.length > 15 ? s.slice(0, 15) : s;
                        }),
                        (this._render = () => {
                            const { domId: e, savedSearches: t } = this.props,
                                s = 0 === this._getNumOfSearchItems(),
                                r = this._getRecentSearchItems();
                            return s
                                ? a.createElement(n.Z, { style: Le.emptyState, testID: De.Z.typeaheadEmptySearch }, a.createElement(R.ZP, { align: "center", color: "gray700" }, Pe))
                                : a.createElement(
                                      n.Z,
                                      { id: e, role: "listbox" },
                                      r.length > 0
                                          ? a.createElement(
                                                a.Fragment,
                                                null,
                                                a.createElement(n.Z, { style: Le.header, testID: De.Z.typeaheadRecentSearchesHeader }, a.createElement(R.ZP, { numberOfLines: 1, size: "headline1", weight: "bold" }, qe), a.createElement(Z.ZP, { onBlur: this._handleClearAllBlur, onFocus: this._handleClearAllFocus, onPress: this._handleClearAllClick, ref: this._setClearAllButtonRef, size: "xSmall", type: "brandText" }, Ue)),
                                                r.map((e, t) => this._renderRecentSearchItem(e, t)),
                                            )
                                          : null,
                                      t.length > 0 ? a.createElement(a.Fragment, null, a.createElement(n.Z, { "aria-hidden": !0, style: [Le.header, Le.borderTop], testID: De.Z.typeaheadSavedSearchesHeader }, a.createElement(R.ZP, { numberOfLines: 1, size: "headline1", weight: "bold" }, Ae)), this._renderSavedSearches()) : null,
                                  );
                        }),
                        (this._renderRecentSearchItem = (e, t) => {
                            const { ariaDescendantId: s } = this.props,
                                r = this.state.focusIndex === t;
                            return a.createElement(me, { domId: r ? s : void 0, index: t, item: e, key: this._chooseKeyType(e, t), onItemClick: this._handleOnItemClick, onRemoveQuery: this._handleRemoveQuery, ref: r ? this._setFocusedItemRef : void 0, testID: De.Z.typeaheadRecentSearchesItem });
                        }),
                        (this._chooseKeyType = (e, t) => (e.keyword ? `keyword_${e.keyword.query}` : e.user ? `user_${e.user.id}` : e.topic ? `topic_${e.topic.id}` : e.event ? `event_${e.event.id}` : `${t}`)),
                        (this._renderSavedSearches = () => {
                            const { ariaDescendantId: e, savedSearches: t } = this.props,
                                { focusIndex: s } = this.state,
                                r = this._getRecentSearchItems(),
                                o = [...t];
                            return (
                                o.reverse(),
                                a.createElement(
                                    n.Z,
                                    { testID: De.Z.typeaheadSavedSearchesContainer },
                                    o.map((t, n) => {
                                        const o = s === n + r.length;
                                        return a.createElement(me, { domId: o ? e : void 0, index: n, item: t, key: t.savedSearchId, onItemClick: this._handleOnItemClick, onRemoveQuery: this._handleRemoveQuery, ref: o ? this._setFocusedItemRef : void 0, testID: De.Z.typeaheadSavedSearchesItem });
                                    }),
                                )
                            );
                        }),
                        (this._getNumOfSearchItems = () => {
                            const { savedSearches: e } = this.props,
                                t = this._getRecentSearchItems();
                            return e.length + t.length;
                        }),
                        (this._handleUsersRetry = () => {
                            this._fetchUsersDetailsIfNeeded();
                        }),
                        (this._fetchUsersDetailsIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchUsersIfNeeded: t, fetchUsersPresenceIfNeeded: s, invalidRecentSearchUserIds: r, recentSearches: a } = this.props,
                                { featureSwitches: n, viewerUserId: o } = this.context,
                                i = ((e, t) =>
                                    (0, E.Z)(e, (e) => {
                                        const s = e?.user?.id;
                                        if (s && t.indexOf(s) < 0) return s;
                                    }))(a, r);
                            t(i).catch(e({})), o && n.isTrue("voice_rooms_recent_search_audiospace_ring_enabled") && s(i).catch(e({}));
                        }),
                        (this._handleRemoveQuery = (e, t) => {
                            const { analytics: s, removeQuery: r } = this.props;
                            switch (e.category) {
                                case u.Hk.RecentSearch: {
                                    const a = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event };
                                    r(a), this._resetFocus();
                                    const n = d.Z.forRecentSearchResult(a, t),
                                        o = this._handleRemoveAction(e);
                                    n && s.scribe({ action: o, data: { items: [n] } });
                                    break;
                                }
                                case u.Hk.SavedSearch:
                                    this.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId });
                                    break;
                                default:
                                    return;
                            }
                        }),
                        (this._handleRemoveAction = (e) => (e.user ? "clear_user" : e.topic ? "clear_topic_interests" : e.event ? "clear_event" : "clear_topic")),
                        (this._handleClearAllBlur = () => {
                            this.setState({ clearAllButtonHasFocus: !1 });
                        }),
                        (this._handleClearAllFocus = () => {
                            this.setState({ clearAllButtonHasFocus: !0 });
                        }),
                        (this._handleClearAllClick = () => {
                            this.setState({ shouldShowClearAllConfirmationSheet: !0 });
                        }),
                        (this._handleOnClearAllConfirm = () => {
                            const { analytics: e, clearAll: t } = this.props;
                            t(), e.scribeAction("clear_all"), this.setState({ shouldShowClearAllConfirmationSheet: !1 });
                        }),
                        (this._handleOnClearAllCancel = () => {
                            this.setState({ shouldShowClearAllConfirmationSheet: !1 });
                        }),
                        (this._handleOnDeleteSavedSearchConfirm = () => {
                            const { analytics: e, deleteSavedSearch: t, savedSearches: s } = this.props,
                                { savedSearchIdToDelete: r } = this.state,
                                a = s.findIndex((e) => e.savedSearchId === r),
                                n = s[a];
                            if (r) {
                                t(r);
                                const s = n && d.Z.forSavedSearchResult(n.keyword.query, a);
                                s && e.scribe({ element: "saved_search", action: "delete", data: { items: [s] } });
                            }
                            this.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 });
                        }),
                        (this._handleOnDeleteSavedSearchCancel = () => {
                            this.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 });
                        }),
                        (this._handleOnItemClick = (e, t) => {
                            const { onDismiss: s, onItemClick: r } = this.props;
                            r(e, t), this._scribeClick(e, t), s && s();
                        }),
                        (this._scribeRecentSearchImpression = () => {
                            const { analytics: e, recentSearches: t } = this.props;
                            if (t && t.length) {
                                const s = (0, E.Z)(t, (e, t) => d.Z.forRecentSearchResult(e, t));
                                e.scribe({ action: "impression", data: { items: s } });
                            }
                        }),
                        (this._scribeSavedSearchImpression = () => {
                            const { analytics: e, savedSearches: t } = this.props;
                            if (t && t.length) {
                                const s = (0, E.Z)(t, (e, t) => d.Z.forSavedSearchResult(e.keyword.query, t));
                                e.scribe({ element: "saved_search", action: "impression", data: { items: s } });
                            }
                        }),
                        (this._scribeClick = (e, t) => {
                            const { analytics: s } = this.props;
                            switch (e.category) {
                                case u.Hk.SavedSearch: {
                                    const r = d.Z.forSavedSearchResult(e.query, t);
                                    s.scribe({ element: "typeahead", action: "click", data: { targets: [r] } });
                                    break;
                                }
                                case u.Hk.RecentSearch: {
                                    let r;
                                    e.recentSearchType && (r = e.recentSearchType === u.g2.User ? { user: { type: u.g2.User, id: e.query } } : e.recentSearchType === u.g2.Event && e.queryMetadata && e.queryMetadata.title ? { event: { ...e.queryMetadata, type: u.g2.Event, id: e.query } } : e.recentSearchType === u.g2.Topic && e.queryMetadata && e.queryMetadata.name ? { topic: { ...e.queryMetadata, type: u.g2.Topic, id: e.query } } : { keyword: { type: u.g2.Keyword, query: e.query } });
                                    const a = r && d.Z.forRecentSearchResult(r, t);
                                    a && s.scribe({ action: "click", data: { targets: [a] } });
                                    break;
                                }
                            }
                        }),
                        (this._setClearAllButtonRef = (e) => {
                            this._clearAllButtonRef = e;
                        }),
                        (this._setFocusedItemRef = (e) => {
                            (this._focusedItemRef = e), e && this._shouldScrollToFocusedItem && ((0, T.up)(this._getScrollParent(), this._getFocusedItem()), (this._shouldScrollToFocusedItem = !1));
                        }),
                        (this.hasFocusedItem = () => this._getNumOfSearchItems() > 0),
                        (this.deleteFocusedItem = () => {
                            if (this.hasFocusedItem()) {
                                const e = this._focusedItemRef?.props?.item;
                                if (e) return this._handleRemoveQuery(e, this.state.focusIndex), !0;
                            }
                            return !1;
                        }),
                        (this.selectFocusedItem = () => {
                            if (this.hasFocusedItem()) {
                                const e = this._focusedItemRef && this._focusedItemRef.searchItemData;
                                e && this._handleOnItemClick(e, this.state.focusIndex);
                            }
                        }),
                        (this._setFocusIndex = (e, t) => {
                            const { onItemFocusChanged: s } = this.props;
                            (this._shouldScrollToFocusedItem = t), this.setState({ focusIndex: e }), s && s();
                        }),
                        (this._resetFocus = () => {
                            this._setFocusIndex(-1);
                        }),
                        (this.focusNext = () => {
                            const { focusIndex: e } = this.state,
                                t = this._getNumOfSearchItems();
                            if (0 === t) return;
                            const s = e + 1 >= t ? 0 : e + 1;
                            this._setFocusIndex(s, !0);
                        }),
                        (this.focusPrevious = () => {
                            const { focusIndex: e } = this.state,
                                t = this._getNumOfSearchItems();
                            if (0 === t) return;
                            const s = e - 1 < 0 ? t - 1 : e - 1;
                            this._setFocusIndex(s, !0);
                        }),
                        (this.navigateNext = () => {
                            if (this._clearAllButtonRef && !this.state.clearAllButtonHasFocus) return this._clearAllButtonRef;
                        }),
                        (this.navigatePrevious = () => {}),
                        (this.state = { clearAllButtonHasFocus: !1, focusIndex: 0, shouldShowClearAllConfirmationSheet: !1, shouldShowDeleteSavedSearchConfirmation: !1 });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchRecentSearchesIfNeeded: t, fetchSavedSearchesIfNeeded: s, recentSearches: r, savedSearches: a } = this.props;
                    t(), s().catch(e({})), this._fetchUsersDetailsIfNeeded(), this._scribeRecentSearchImpression(), this._scribeSavedSearchImpression(), ((r && r.length) || (a && a.length)) && this._resetFocus();
                }
                componentDidUpdate(e) {
                    const { recentSearches: t, savedSearches: s } = this.props;
                    e.recentSearches !== t && (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()), e.savedSearches !== s && (this._resetFocus(), this._scribeSavedSearchImpression());
                }
                render() {
                    const { fetchStatus: e, style: t } = this.props,
                        { shouldShowClearAllConfirmationSheet: s, shouldShowDeleteSavedSearchConfirmation: r } = this.state;
                    return a.createElement(n.Z, { style: t }, a.createElement(F.Z, { fetchStatus: e, onRequestRetry: this._handleUsersRetry, render: this._render }), s ? a.createElement(k.Z, { confirmButtonLabel: xe.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: xe.headline, onCancel: this._handleOnClearAllCancel, onConfirm: this._handleOnClearAllConfirm, testID: De.Z.deleteRecentSearchesDialog, text: xe.text }) : null, r ? a.createElement(Te.Z, { onCancel: this._handleOnDeleteSavedSearchCancel, onConfirm: this._handleOnDeleteSavedSearchConfirm }) : null);
                }
                _getScrollParent() {
                    if (!this._scrollParent) {
                        const e = (0, T.rP)(w.findDOMNode(this));
                        this._scrollParent = e === window ? null : e;
                    }
                    return this._scrollParent;
                }
                _getFocusedItem() {
                    const e = this._focusedItemRef && w.findDOMNode(this._focusedItemRef);
                    return e instanceof Element ? e : null;
                }
            }
            Oe.contextType = f.rC;
            const Le = o.default.create((e) => ({ emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 }, borderTop: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: 1 }, header: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                Ne = Fe.forwardRef(Oe),
                Be = (0, q.Z)()
                    .propsFromActions(() => ({ addQuery: ge.DI }))
                    .withAnalytics({ component: "search_box" });
            var Me = s(23134);
            const $e = (e, t) => U.ZP.select(e, t.userId),
                Qe = ({ user: e, userId: t }) => {
                    const [s, r] = a.useState(!1),
                        { featureSwitches: n } = a.useContext(f.rC),
                        o = n.isTrue("follow_nudge_search_enabled");
                    return (
                        a.useEffect(() => {
                            o && e && !e.following && r(!0);
                        }, [e, o]),
                        s ? a.createElement(Me.C, { isFollowNudge: !0, showRelationshipChangeConfirmation: !0, userId: t }) : null
                    );
                },
                ze = (0, q.Z)().propsFromState(() => ({ user: $e }))(a.memo(Qe)),
                Ke = "SearchBox_Search_Input",
                Ve = c().a9ae1e78,
                je = c().hbc99b03,
                We = /^(\w+)$/,
                Ge = [p.my.Events, p.my.Users, p.my.Topics, p.my.Lists],
                Je = (e) => ("@" === e[0] ? e.substring(1) : e);
            class Xe extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderSearchBoxEmptyState = (e) => a.createElement(Ne, (0, r.Z)({}, e, { onItemClick: this._handleSearchItemClick }))),
                        (this._renderSearchUserDecoration = ({ user: e, userId: t }) => {
                            const { viewerUserId: s } = this.context;
                            return s && t !== s ? a.createElement(ze, { userId: t }) : null;
                        }),
                        (this._handleSearchItemClick = ({ category: e, link: t, query: s, queryMetadata: r, recentSearchType: a }) => {
                            const { addQuery: n } = this.props;
                            e === u.Hk.SavedSearch ? this._submitQuery({ query: s, shouldAddToRecentSearch: !1, src: m.Z.SavedSearchClick }) : a === u.g2.Keyword ? this._submitQuery({ query: s, shouldAddToRecentSearch: !0, src: m.Z.RecentSearchClick }) : a === u.g2.Event ? (this._routeTransition({ pathname: `/i/events/${s}` }), r && r.title && n({ event: { ...r, id: s, type: u.g2.Event } })) : a === u.g2.Topic ? (this._routeTransition({ pathname: `/i/topics/${s}` }), r && r.name && n({ topic: { ...r, id: s, type: u.g2.Topic } })) : t && (this._routeTransition({ pathname: `/${t}`, userId: s }), n({ user: { id: s, type: u.g2.User } }));
                        }),
                        (this._handleSearchShortcut = (e) => {
                            const t = this._inputRef;
                            t && (e && t.setQuery(e), t.focus());
                        }),
                        (this._getUserExactMatch = ({ hasResults: e, isLoaded: t, query: s }) => {
                            const r = Je(s);
                            if (t && r.match(We)) return { id: `${s}_no_result_user`, type: p.El.NoResult, data: { text: je({ screenName: r }), type: "user" } };
                        }),
                        (this._handleOnDismiss = () => {
                            const { history: e } = this.props,
                                { location: t } = e,
                                s = t.state || {};
                            if (s.searchFocused) {
                                const r = { ...t, state: { ...s, lockScroll: !1, searchFocused: !1 } };
                                e.replace(r);
                            }
                        }),
                        (this._handleOnFocus = () => {
                            const { analytics: e, history: t } = this.props,
                                { location: s } = t,
                                r = s.state || {};
                            if (!r.searchFocused) {
                                const a = { ...s, state: { ...r, searchFocused: !0, lockScroll: !0 } };
                                e.scribe({ action: "focus_field" }), t.push(a);
                            }
                        }),
                        (this._handleChange = (e) => {
                            this.setState({ query: e });
                        }),
                        (this._handleTypeaheadSubmit = () => {
                            const { items: e, query: t } = this.state,
                                { analytics: s } = this.props;
                            /^\s*$/.test(t) || (s.scribe({ action: "search", data: { items: d.Z.forTypeaheadResults(e), search_details: { query: t } } }), this._submitQuery({ query: t, shouldAddToRecentSearch: !0 }));
                        }),
                        (this._handleItemClick = (e, t) => {
                            const { addQuery: s } = this.props,
                                { query: r } = this.state;
                            switch (e.type) {
                                case p.El.Event:
                                    e.data && e.data.url ? this._routeTransition({ pathname: h.ZP.parseInternalUrl(e.data.url) }) : this._submitQuery({ query: e.data.topic, src: m.Z.TypeaheadClick });
                                    break;
                                case p.El.Hashtag:
                                case p.El.Topic:
                                    this._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: m.Z.TypeaheadClick });
                                    break;
                                case p.El.List:
                                    this._routeTransition({ pathname: `/i/lists/${e.id}` });
                                    break;
                                case p.El.NoResult: {
                                    const { type: t } = e.data;
                                    "user" === t ? this._routeTransition({ pathname: `/${Je(r)}` }) : "topic" === t && this._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: m.Z.TypeaheadClick });
                                    break;
                                }
                                case p.El.User:
                                    if (e.data.id_str) {
                                        s({ user: { id: e.data.id_str, type: u.g2.User } });
                                    }
                                    this._routeTransition({ pathname: `/${e.data.screen_name}`, userId: e.data.id_str });
                            }
                        }),
                        (this._handleItemsChanged = (e) => {
                            this.setState({ items: e });
                        }),
                        (this._routeTransition = ({ params: e, pathname: t, query: s, src: r, userId: a }) => {
                            const { history: n, location: o } = this.props,
                                i = { ...o, pathname: t, search: "", query: e || (s ? { q: s, src: r } : {}), state: { ...o.state, searchFocused: !1, lockScroll: !1, ...(a ? { userId: a } : {}) } };
                            n.replace(i);
                        }),
                        (this._submitQuery = ({ query: e, shouldAddToRecentSearch: t = !1, src: s = m.Z.Typed }) => {
                            const { addQuery: r, mode: a, onSubmit: n, searchFilters: o, searchRoute: i } = this.props;
                            if ((n && n(e, s, this.state.lastSubmittedQuery === e), t)) {
                                r({ keyword: { query: e, type: u.g2.Keyword } });
                            }
                            const c = (0, u.F_)({ query: e, querySrc: s, mode: a, searchFilters: o });
                            this._routeTransition({ pathname: i, params: c, src: s }), this.setState({ lastSubmittedQuery: e });
                        }),
                        (this._setInputRef = (e) => {
                            this._inputRef = e;
                        }),
                        (this.state = { query: e.initialValue, items: [], lastSubmittedQuery: (0, l.BX)(e.location.query?.q) });
                }
                componentDidMount() {
                    const { shouldHandleSearchShortcut: e } = this.props;
                    e && (this._unregisterSearchShortcutHandler = (0, _.UJ)(this._handleSearchShortcut));
                }
                componentWillUnmount() {
                    this._unregisterSearchShortcutHandler && this._unregisterSearchShortcutHandler();
                }
                render() {
                    const { isCompact: e, isOnHomepage: t, location: s, placeholder: r, showBrandedHashFlag: o } = this.props,
                        { query: i } = this.state,
                        { searchPrefill: c } = s.state || {},
                        l = this.props.initialValue || c,
                        h = !!s.state && !!s.state.searchFocused;
                    return a.createElement(n.Z, { style: Ye.root }, a.createElement(y.default, { filter: Ge, getTopicExactMatch: i ? p.P0 : void 0, getUserExactMatch: i ? this._getUserExactMatch : void 0, initialValue: l, inputStyle: Ye.input, isCompact: e, isOnHomepage: t, onDismiss: this._handleOnDismiss, onFocus: this._handleOnFocus, onItemClick: this._handleItemClick, onItemsChanged: this._handleItemsChanged, onQueryChange: this._handleChange, onSubmit: this._handleTypeaheadSubmit, placeholder: r, ref: this._setInputRef, renderEmptyState: this._renderSearchBoxEmptyState, renderUserDecoration: this._renderSearchUserDecoration, rounded: !0, shouldAutoFocus: h, shouldClearOnSelect: !0, shouldDeferPrefetch: !0, source: p._4.SearchBox, testID: Ke, withFixedPositioning: !0, withFocusStyling: !0 }), o && a.createElement(v, { query: i }));
                }
            }
            (Xe.defaultProps = { initialValue: "", placeholder: Ve, searchRoute: "/search" }), (Xe.contextType = f.rC);
            const Ye = o.default.create((e) => ({ root: { alignItems: "stretch", flexBasis: 0, flexDirection: "row", flexGrow: 1 }, input: { flexShrink: 1 } })),
                et = (0, S.ZP)(Be(Xe));
        },
        288955: (e, t, s) => {
            s.d(t, { Z: () => c });
            var r = s(807896),
                a = s(202784),
                n = s(443781),
                o = s(369241);
            class i extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, t) =>
                            (s, ...r) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(s, ...r) : (s && s.preventDefault && s.preventDefault(), t && t(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: t, ...s } = this.props;
                    return a.createElement(a.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && a.createElement(o.ZP, (0, r.Z)({ onClose: this._handleClose }, s)));
                }
            }
            (i.defaultProps = { disabled: !1 }), (i.contextType = n.rC);
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-b7da5e41.40f5cd6a.js.map
