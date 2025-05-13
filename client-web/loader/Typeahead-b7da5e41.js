"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-b7da5e41"],
    {
        705079: (e, t, s) => {
            s.d(t, { s: () => a });
            var r = s(99107);
            const a = (e) => e === r.p_;
        },
        80309: (e, t, s) => {
            s.d(t, { ZP: () => x, UJ: () => E });
            var r = s(807896),
                a = (s(136728), s(202784)),
                n = s(251067),
                o = s(325686),
                c = s(392237),
                i = s(731708),
                h = s(674132),
                l = s.n(h),
                d = s(752624),
                u = s(516951),
                m = s(874627),
                p = s(994775),
                S = s(536387),
                y = s(163390),
                f = s(113840),
                _ = s(500002),
                g = s(443781),
                I = s(668214),
                v = s(919022);
            const C = (0, I.Z)()
                .propsFromState(() => ({ viewerUser: v.ZP.selectViewerUser }))
                .adjustStateProps(({ viewerUser: e }) => ({ viewerUserScreenName: e ? e.screen_name : void 0 }));
            const b = [...s(122758).M],
                R = l().b47e760e,
                k = l().fd2c7b44,
                Z = new d.Z(),
                E = (e) => Z.subscribe(e).unsubscribe;
            class w extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._bindKeyboardShortcuts = () => {
                            const { history: e, jotaiStore: t, viewerUserScreenName: s } = this.props,
                                r = (t, s = {}) => e.push({ pathname: t, state: { ...s, source: "keyboard_shortcut" } }),
                                a = (e) => (t) => {
                                    t.preventDefault(), Z.getListeners().length ? Z.notify(e) : r("/explore", { searchFocused: !0, searchPrefill: e });
                                },
                                o = { [y.uq.labs.openCommandCenter]: u.Z, [y.uq.search]: a(), [y.uq.goToUser]: a("@"), [y.uq.openKeyboardShortcuts]: () => r("/i/keyboard_shortcuts"), [y.uq.goExplore]: () => r("/explore"), [y.uq.goSettings]: () => r("/settings") },
                                c = (e) => ({ [y.uq.goProfile]: () => r(`/${e}`), [y.uq.goLikes]: () => r(`/${e}/likes`), [y.uq.goLists]: () => r(`/${e}/lists`) }),
                                i = this.context.userClaims.isTrueAndEnabled("subscriptions_feature_1007"),
                                h = s && i ? { ...c(s), [y.uq.goTopArticles]: () => r("/i/articles") } : s ? c(s) : {},
                                l = { ...o, ...h, [y.uq.toggleCommandCenter]: (0, n.fH)(n.vw.prod) ? u.Z : () => t.set(m._K), [y.uq.goHome]: () => r("/home"), [y.uq.goDisplay]: () => r("/i/display"), [y.uq.goNotifications]: () => r("/notifications"), [y.uq.goMentions]: () => r("/notifications/mentions"), [y.uq.goMessages]: () => r("/messages"), [y.uq.goGrok]: () => r("/i/grok"), [y.uq.newMessage]: () => r("/messages/compose"), [y.uq.newTweet]: () => r("/compose/post"), [y.uq.goBookmarks]: () => r("/i/bookmarks"), [y.uq.goToDrafts]: () => r("/compose/post/unsent/drafts"), [y.uq.goToScheduled]: () => r("/compose/post/unsent/scheduled") },
                                d = this.props.viewerUserScreenName ? l : o;
                            this._unbindKeyboardShortcuts = (0, p.Z)(d);
                        });
                }
                componentDidMount() {
                    this._bindKeyboardShortcuts();
                }
                componentWillUnmount() {
                    this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts();
                }
                render() {
                    return this.props.viewerUserScreenName ? a.createElement(o.Z, { "aria-level": 2, role: "heading", style: c.default.visuallyHidden }, a.createElement(m.lk, null), a.createElement(i.ZP, null, R), a.createElement(i.ZP, { focusable: !1, link: "/i/keyboard_shortcuts" }, k)) : null;
                }
            }
            w.contextType = g.rC;
            const D = C(function (e) {
                    const t = (0, S.xO)();
                    return e.disabled ? null : a.createElement(w, (0, r.Z)({}, e, { jotaiStore: t }));
                }),
                x = (0, f.g)((0, _.ZP)(D), b);
        },
        243754: (e, t, s) => {
            s.d(t, { Z: () => d });
            var r = s(202784),
                a = s(190286),
                n = s(674132),
                o = s.n(n),
                c = s(436001);
            const i = o().hffea05c,
                h = o().j037e374,
                l = o().d96cf7ce,
                d = ({ onCancel: e, onConfirm: t }) => r.createElement(a.Z, { confirmButtonLabel: l, confirmButtonType: "destructiveFilled", headline: i, onCancel: e, onConfirm: t, testID: c.Z.deleteSavedSearchDialog, text: h });
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
                c = s(674132),
                i = s.n(c),
                h = s(2430),
                l = s(782826),
                d = s(942893),
                u = s(903019),
                m = s(339110),
                p = s(883432),
                S = s(500002),
                y = s(443781),
                f = s(80309),
                _ = s(874088),
                g = s(687103),
                I = s(992942),
                v = s(952793);
            function C({ query: e }) {
                if ((0, v.hC)("rweb_search_show_large_hashflag") && e && e.startsWith("#"))
                    return a.createElement(g._y.Consumer, null, ({ getBrandedHashtag: t }) => {
                        const s = t(e.slice(1))?.url;
                        return s && a.createElement(I.Z, { source: s, style: b.image });
                    });
            }
            const b = o.default.create((e) => ({ image: { width: 36, height: 36, marginStart: e.spaces.space8, alignSelf: "center" } }));
            var R = s(928316),
                k = s(731708),
                Z = s(154003),
                E = s(190286),
                w = s(459679),
                D = s(290402),
                x = s(602427),
                T = s(952428),
                q = s(673510),
                P = s(837020),
                F = s(668214),
                A = s(624479),
                O = s(919022);
            const U = (e, t) => O.ZP.select(e, t.id),
                H = (e, t) => (0, A.cY)(e, t.id),
                N = (0, F.Z)().propsFromState(() => ({ user: U, userSpace: H })),
                L = a.createElement(P.default, null),
                B = i().e68b09b4,
                M = i().fd06b02f;
            class Q extends a.Component {
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
                    const c = a.createElement(Z.ZP, { "aria-label": B, icon: L, onPress: e, size: "small", type: "brandText" });
                    return a.createElement(q.ZP, { affiliateBadgeInfo: s.highlightedLabel, avatarSize: "xLarge", avatarUri: s.profile_image_url_https, decoration: c, displayMode: "UserCompact", isBlueVerified: s.is_blue_verified, isProtected: s.protected, isVerified: s.verified, name: s.name, onAvatarClick: this._handleAvatarClick, onCellClick: this._handleClick, onScreenNameClick: this._handleClick, presenceIndicator: o, screenName: s.screen_name, style: t, userId: s.id_str, verifiedType: s.verified_type, withInteractiveStyling: !1, withLink: !1, withUsernameCenterAligned: !0 });
                }
                get searchItemData() {
                    return this.props.user ? { category: u.Hk.RecentSearch, link: this.props.user.screen_name, query: this.props.id, recentSearchType: u.g2.User } : null;
                }
            }
            Q.contextType = y.rC;
            const z = N.forwardRef(Q);
            var $ = s(120428);
            const K = i().e68b09b4;
            class V extends a.PureComponent {
                render() {
                    const { id: e, onRemove: t, ...s } = this.props;
                    return e ? a.createElement(n.Z, { style: j.root }, a.createElement($.Z, s), a.createElement(Z.ZP, { "aria-label": K, icon: a.createElement(P.default, null), onPress: t, size: "small", style: j.button, type: "brandText" })) : null;
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
            const Y = a.createElement(P.default, null),
                ee = i().e68b09b4;
            class te extends a.Component {
                render() {
                    const { description: e, id: t, name: s, onRemove: r } = this.props;
                    if (!t) return null;
                    const o = "xLarge",
                        c = a.createElement(G.Z, { Icon: X.default, color: "primary", size: o, style: re.searchIcon });
                    return a.createElement(J.Z, { avatarCell: c, avatarSize: o, cellStyle: re.bodyColumn }, a.createElement(n.Z, null, a.createElement(k.ZP, { numberOfLines: 1, weight: "bold", withHashflags: !0 }, s), a.createElement(k.ZP, { color: "gray700", numberOfLines: 1, withHashflags: !0 }, e)), a.createElement(Z.ZP, { "aria-label": ee, icon: Y, onPress: r, size: "small", type: "brandText" }));
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
            const ce = a.createElement(P.default, null),
                ie = a.createElement(ae.default, null);
            class he extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedButtonType = (0, oe.Z)((e) => (e === u.Hk.SavedSearch ? "destructiveText" : "brandText"))),
                        (this._getMemoizedRemoveIcon = (0, oe.Z)((e) => (e === u.Hk.SavedSearch ? ie : ce))),
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
                        r = a.createElement(G.Z, { Icon: ne.default, color: "neutral", size: s, style: le.searchIcon });
                    return a.createElement(J.Z, { avatarCell: r, avatarSize: s, cellStyle: le.bodyColumn }, a.createElement(k.ZP, { numberOfLines: 1, withHashflags: !0 }, t), a.createElement(Z.ZP, { "aria-label": "", icon: this._getRemoveIcon(), onPress: e, size: "small", type: this._getButtonType() }));
                }
                get searchItemData() {
                    const { category: e, query: t } = this.props;
                    return { category: e, query: t, recentSearchType: e === u.Hk.RecentSearch ? u.g2.Keyword : void 0 };
                }
            }
            const le = o.default.create((e) => ({ bodyColumn: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: "none" } })),
                de = he;
            class ue extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSearchItem = () => {
                            const { index: e, item: t, onItemClick: s } = this.props;
                            return t.keyword ? a.createElement(de, { category: t.category, onRemove: this._handleOnRemove, query: t.keyword.query, ref: this._handleItemRef }) : t.user ? a.createElement(z, { id: t.user.id || "", index: e, onItemClick: s, onRemove: this._handleOnRemove, ref: this._handleItemRef, style: me.itemPadding }) : t.topic ? a.createElement(se, { description: t.topic.description || "", id: t.topic.id, name: t.topic.name || "", onRemove: this._handleOnRemove, ref: this._handleItemRef }) : t.event ? a.createElement(W, { id: t.event.id, image: t.event.image || { url: "", height: 0, width: 0 }, onRemove: this._handleOnRemove, ref: this._handleItemRef, supportText: t.event.supportText || "", title: t.event.title || "" }) : null;
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
                    return a.createElement(T.Z, { "aria-selected": !!e, focusable: !0, id: e, onClick: this._handleOnClick, role: "option", style: [me.root, e && me.focused, !t?.user && me.itemPadding], testID: s }, this._renderSearchItem());
                }
                get searchItemData() {
                    return this._itemRef ? this._itemRef.searchItemData : null;
                }
            }
            const me = o.default.create((e) => ({ root: { cursor: "pointer" }, itemPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, focused: { backgroundColor: e.colors.gray0 } })),
                pe = ue;
            var Se = s(24949),
                ye = s(933277),
                fe = s(615656),
                _e = s(71620),
                ge = s(204744),
                Ie = s(554951),
                ve = s(312771);
            function Ce(e) {
                return (0, fe.VZ)(e, fe.ZP.GenericUserNotFound) || (0, fe.VZ)(e, fe.ZP.OtherUserSuspended) || (0, fe.VZ)(e, fe.ZP.AddressBookLookupNotFound);
            }
            const be = (0, Se.P1)(ge.Ww, O.ZP.selectFetchStatuses, (e, t) => {
                    const s = (0, w.Z)(e, (e) => {
                        const s = e.user?.id;
                        return s && t[s] ? { id: s, fetchStatus: t[s] } : void 0;
                    });
                    return (0, ye.Z)(s, (e) => e.fetchStatus);
                }),
                Re = (0, Se.P1)(be, (e) => (e[ve.ZP.FAILED] ?? []).map((e) => e.id)),
                ke = (0, Se.P1)(be, O.ZP.selectErrors, (e, t) => {
                    const s = e[ve.ZP.FAILED] ?? [],
                        r = e[ve.ZP.LOADED] ?? [],
                        a = e[ve.ZP.LOADING] ?? [],
                        n = s.filter(({ id: e }) => !Ce(t[e] ?? {}));
                    return a.length > 0 ? ve.ZP.LOADING : r.length > 0 ? ve.ZP.LOADED : n.length > 0 ? ve.ZP.FAILED : ve.ZP.NONE;
                }),
                Ze = (0, Se.P1)(be, O.ZP.selectErrors, (e, t) => {
                    const s = e[ve.ZP.FAILED] ?? [];
                    return (0, w.Z)(s, (e) => {
                        if (Ce(t[e.id] ?? {})) return e.id;
                    });
                }),
                Ee = (0, Se.P1)(Ie.as, (e) => e.map((e) => ({ keyword: { query: e.query }, savedSearchId: e.id_str, category: u.Hk.SavedSearch }))),
                we = (0, Se.P1)(ge.Ww, (e) => e.map((e) => ({ ...e, category: u.Hk.RecentSearch }))),
                De = (0, F.Z)()
                    .propsFromState(() => ({ isRecentSearchDataLoaded: ge.H$, recentSearches: we, usersFetchStatus: ke, invalidRecentSearchUserIds: Ze, failedRecentSearchUserIds: Re, savedSearches: Ee }))
                    .adjustStateProps(({ failedRecentSearchUserIds: e, invalidRecentSearchUserIds: t, isRecentSearchDataLoaded: s, recentSearches: r, savedSearches: a, usersFetchStatus: n }) => {
                        const o = !r.filter(({ user: e }) => e && t.indexOf(e.id) < 0).length,
                            c = n !== ve.ZP.LOADING && s && o ? ve.ZP.LOADED : n;
                        return { failedRecentSearchUserIds: e, invalidRecentSearchUserIds: t, recentSearches: r, fetchStatus: c, savedSearches: a };
                    })
                    .propsFromActions(() => ({ clearAll: ge.qF, createLocalApiErrorHandler: (0, _e.zr)("SEARCH_ONE_CLICK"), deleteSavedSearch: Ie.k9, fetchRecentSearchesIfNeeded: ge.OB, fetchSavedSearchesIfNeeded: Ie.l9, fetchUsersIfNeeded: O.ZP.fetchManyIfNeeded, fetchUsersPresenceIfNeeded: A.ZP.fetchManyIfNeeded, removeQuery: ge.hj }))
                    .withAnalytics({ element: "typeahead" });
            var xe = s(243754),
                Te = s(436001);
            const qe = i().a2c1b222,
                Pe = { headline: i().f45c4250, text: i().caae4dda, confirmButtonLabel: i().dbd5d400 },
                Fe = i().a8d68f62,
                Ae = i().c6530778,
                Oe = i().e047b8fa,
                Ue = ["event", "keyword", "topic", "user"];
            class He extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getRecentSearchItems = () => {
                            const { failedRecentSearchUserIds: e, recentSearches: t } = this.props,
                                s = t.filter((t) => (t.user && Ue.includes("user") ? e.indexOf(t.user.id) < 0 : Object.keys(t).some((e) => Ue.includes(e))));
                            return s.length > 15 ? s.slice(0, 15) : s;
                        }),
                        (this._render = () => {
                            const { domId: e, savedSearches: t } = this.props,
                                s = 0 === this._getNumOfSearchItems(),
                                r = this._getRecentSearchItems();
                            return s
                                ? a.createElement(n.Z, { style: Ne.emptyState, testID: Te.Z.typeaheadEmptySearch }, a.createElement(k.ZP, { align: "center", color: "gray700" }, qe))
                                : a.createElement(
                                      n.Z,
                                      { id: e, role: "listbox" },
                                      r.length > 0
                                          ? a.createElement(
                                                a.Fragment,
                                                null,
                                                a.createElement(n.Z, { style: Ne.header, testID: Te.Z.typeaheadRecentSearchesHeader }, a.createElement(k.ZP, { numberOfLines: 1, size: "headline1", weight: "bold" }, Fe), a.createElement(Z.ZP, { onBlur: this._handleClearAllBlur, onFocus: this._handleClearAllFocus, onPress: this._handleClearAllClick, ref: this._setClearAllButtonRef, size: "xSmall", type: "brandText" }, Oe)),
                                                r.map((e, t) => this._renderRecentSearchItem(e, t)),
                                            )
                                          : null,
                                      t.length > 0 ? a.createElement(a.Fragment, null, a.createElement(n.Z, { "aria-hidden": !0, style: [Ne.header, Ne.borderTop], testID: Te.Z.typeaheadSavedSearchesHeader }, a.createElement(k.ZP, { numberOfLines: 1, size: "headline1", weight: "bold" }, Ae)), this._renderSavedSearches()) : null,
                                  );
                        }),
                        (this._renderRecentSearchItem = (e, t) => {
                            const { ariaDescendantId: s } = this.props,
                                r = this.state.focusIndex === t;
                            return a.createElement(pe, { domId: r ? s : void 0, index: t, item: e, key: this._chooseKeyType(e, t), onItemClick: this._handleOnItemClick, onRemoveQuery: this._handleRemoveQuery, ref: r ? this._setFocusedItemRef : void 0, testID: Te.Z.typeaheadRecentSearchesItem });
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
                                    { testID: Te.Z.typeaheadSavedSearchesContainer },
                                    o.map((t, n) => {
                                        const o = s === n + r.length;
                                        return a.createElement(pe, { domId: o ? e : void 0, index: n, item: t, key: t.savedSearchId, onItemClick: this._handleOnItemClick, onRemoveQuery: this._handleRemoveQuery, ref: o ? this._setFocusedItemRef : void 0, testID: Te.Z.typeaheadSavedSearchesItem });
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
                                c = ((e, t) =>
                                    (0, w.Z)(e, (e) => {
                                        const s = e?.user?.id;
                                        if (s && t.indexOf(s) < 0) return s;
                                    }))(a, r);
                            t(c).catch(e({})), o && n.isTrue("voice_rooms_recent_search_audiospace_ring_enabled") && s(c).catch(e({}));
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
                                const s = (0, w.Z)(t, (e, t) => d.Z.forRecentSearchResult(e, t));
                                e.scribe({ action: "impression", data: { items: s } });
                            }
                        }),
                        (this._scribeSavedSearchImpression = () => {
                            const { analytics: e, savedSearches: t } = this.props;
                            if (t && t.length) {
                                const s = (0, w.Z)(t, (e, t) => d.Z.forSavedSearchResult(e.keyword.query, t));
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
                            (this._focusedItemRef = e), e && this._shouldScrollToFocusedItem && ((0, x.up)(this._getScrollParent(), this._getFocusedItem()), (this._shouldScrollToFocusedItem = !1));
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
                    return a.createElement(n.Z, { style: t }, a.createElement(D.Z, { fetchStatus: e, onRequestRetry: this._handleUsersRetry, render: this._render }), s ? a.createElement(E.Z, { confirmButtonLabel: Pe.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: Pe.headline, onCancel: this._handleOnClearAllCancel, onConfirm: this._handleOnClearAllConfirm, testID: Te.Z.deleteRecentSearchesDialog, text: Pe.text }) : null, r ? a.createElement(xe.Z, { onCancel: this._handleOnDeleteSavedSearchCancel, onConfirm: this._handleOnDeleteSavedSearchConfirm }) : null);
                }
                _getScrollParent() {
                    if (!this._scrollParent) {
                        const e = (0, x.rP)(R.findDOMNode(this));
                        this._scrollParent = e === window ? null : e;
                    }
                    return this._scrollParent;
                }
                _getFocusedItem() {
                    const e = this._focusedItemRef && R.findDOMNode(this._focusedItemRef);
                    return e instanceof Element ? e : null;
                }
            }
            He.contextType = y.rC;
            const Ne = o.default.create((e) => ({ emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 }, borderTop: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: 1 }, header: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                Le = De.forwardRef(He),
                Be = (0, F.Z)()
                    .propsFromActions(() => ({ addQuery: ge.DI }))
                    .withAnalytics({ component: "search_box" });
            var Me = s(23134);
            const Qe = (e, t) => O.ZP.select(e, t.userId),
                ze = ({ user: e, userId: t }) => {
                    const [s, r] = a.useState(!1),
                        { featureSwitches: n } = a.useContext(y.rC),
                        o = n.isTrue("follow_nudge_search_enabled");
                    return (
                        a.useEffect(() => {
                            o && e && !e.following && r(!0);
                        }, [e, o]),
                        s ? a.createElement(Me.C, { isFollowNudge: !0, showRelationshipChangeConfirmation: !0, userId: t }) : null
                    );
                },
                $e = (0, F.Z)().propsFromState(() => ({ user: Qe }))(a.memo(ze)),
                Ke = "SearchBox_Search_Input",
                Ve = i().a9ae1e78,
                je = i().hbc99b03,
                We = /^(\w+)$/,
                Ge = [m.my.Events, m.my.Users, m.my.Topics, m.my.Lists],
                Je = (e) => ("@" === e[0] ? e.substring(1) : e);
            class Xe extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderSearchBoxEmptyState = (e) => a.createElement(Le, (0, r.Z)({}, e, { onItemClick: this._handleSearchItemClick }))),
                        (this._renderSearchUserDecoration = ({ user: e, userId: t }) => {
                            const { viewerUserId: s } = this.context;
                            return s && t !== s ? a.createElement($e, { userId: t }) : null;
                        }),
                        (this._handleSearchItemClick = ({ category: e, link: t, query: s, queryMetadata: r, recentSearchType: a }) => {
                            const { addQuery: n } = this.props;
                            e === u.Hk.SavedSearch ? this._submitQuery({ query: s, shouldAddToRecentSearch: !1, src: p.Z.SavedSearchClick }) : a === u.g2.Keyword ? this._submitQuery({ query: s, shouldAddToRecentSearch: !0, src: p.Z.RecentSearchClick }) : a === u.g2.Event ? (this._routeTransition({ pathname: `/i/events/${s}` }), r && r.title && n({ event: { ...r, id: s, type: u.g2.Event } })) : a === u.g2.Topic ? (this._routeTransition({ pathname: `/i/topics/${s}` }), r && r.name && n({ topic: { ...r, id: s, type: u.g2.Topic } })) : t && (this._routeTransition({ pathname: `/${t}`, userId: s }), n({ user: { id: s, type: u.g2.User } }));
                        }),
                        (this._handleSearchShortcut = (e) => {
                            const t = this._inputRef;
                            t && (e && t.setQuery(e), t.focus());
                        }),
                        (this._getUserExactMatch = ({ hasResults: e, isLoaded: t, query: s }) => {
                            const r = Je(s);
                            if (t && r.match(We)) return { id: `${s}_no_result_user`, type: m.El.NoResult, data: { text: je({ screenName: r }), type: "user" } };
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
                                case m.El.Event:
                                    e.data && e.data.url ? this._routeTransition({ pathname: l.ZP.parseInternalUrl(e.data.url) }) : this._submitQuery({ query: e.data.topic, src: p.Z.TypeaheadClick });
                                    break;
                                case m.El.Hashtag:
                                case m.El.Topic:
                                    this._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: p.Z.TypeaheadClick });
                                    break;
                                case m.El.List:
                                    this._routeTransition({ pathname: `/i/lists/${e.id}` });
                                    break;
                                case m.El.NoResult: {
                                    const { type: t } = e.data;
                                    "user" === t ? this._routeTransition({ pathname: `/${Je(r)}` }) : "topic" === t && this._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: p.Z.TypeaheadClick });
                                    break;
                                }
                                case m.El.User:
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
                                c = { ...o, pathname: t, search: "", query: e || (s ? { q: s, src: r } : {}), state: { ...o.state, searchFocused: !1, lockScroll: !1, ...(a ? { userId: a } : {}) } };
                            n.replace(c);
                        }),
                        (this._submitQuery = ({ query: e, shouldAddToRecentSearch: t = !1, src: s = p.Z.Typed }) => {
                            const { addQuery: r, mode: a, onSubmit: n, searchFilters: o, searchRoute: c } = this.props;
                            if ((n && n(e, s, this.state.lastSubmittedQuery === e), t)) {
                                r({ keyword: { query: e, type: u.g2.Keyword } });
                            }
                            const i = (0, u.F_)({ query: e, querySrc: s, mode: a, searchFilters: o });
                            this._routeTransition({ pathname: c, params: i, src: s }), this.setState({ lastSubmittedQuery: e });
                        }),
                        (this._setInputRef = (e) => {
                            this._inputRef = e;
                        }),
                        (this.state = { query: e.initialValue, items: [], lastSubmittedQuery: (0, h.BX)(e.location.query?.q) });
                }
                componentDidMount() {
                    const { shouldHandleSearchShortcut: e } = this.props;
                    e && (this._unregisterSearchShortcutHandler = (0, f.UJ)(this._handleSearchShortcut));
                }
                componentWillUnmount() {
                    this._unregisterSearchShortcutHandler && this._unregisterSearchShortcutHandler();
                }
                render() {
                    const { isCompact: e, isOnHomepage: t, location: s, placeholder: r, showBrandedHashFlag: o } = this.props,
                        { query: c } = this.state,
                        { searchPrefill: i } = s.state || {},
                        h = this.props.initialValue || i,
                        l = !!s.state && !!s.state.searchFocused;
                    return a.createElement(n.Z, { style: Ye.root }, a.createElement(_.default, { filter: Ge, getTopicExactMatch: c ? m.P0 : void 0, getUserExactMatch: c ? this._getUserExactMatch : void 0, initialValue: h, inputStyle: Ye.input, isCompact: e, isOnHomepage: t, onDismiss: this._handleOnDismiss, onFocus: this._handleOnFocus, onItemClick: this._handleItemClick, onItemsChanged: this._handleItemsChanged, onQueryChange: this._handleChange, onSubmit: this._handleTypeaheadSubmit, placeholder: r, ref: this._setInputRef, renderEmptyState: this._renderSearchBoxEmptyState, renderUserDecoration: this._renderSearchUserDecoration, rounded: !0, shouldAutoFocus: l, shouldClearOnSelect: !0, shouldDeferPrefetch: !0, source: m._4.SearchBox, testID: Ke, withFixedPositioning: !0, withFocusStyling: !0 }), o && a.createElement(C, { query: c }));
                }
            }
            (Xe.defaultProps = { initialValue: "", placeholder: Ve, searchRoute: "/search" }), (Xe.contextType = y.rC);
            const Ye = o.default.create((e) => ({ root: { alignItems: "stretch", flexBasis: 0, flexDirection: "row", flexGrow: 1 }, input: { flexShrink: 1 } })),
                et = (0, S.ZP)(Be(Xe));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-b7da5e41.3000291a.js.map
