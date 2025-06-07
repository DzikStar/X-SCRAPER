"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Compose-e4e3d8bb"],
    {
        524084: (e, t, s) => {
            s.d(t, { Z: () => r });
            var o = s(202784),
                i = s(523561),
                n = s(195560);
            const r = (0, i.Z)({ loader: () => s.e("loader.AbsolutePower").then(s.bind(s, 590136)), renderPlaceholder: (e, t) => o.createElement(n.Z, { hasError: e, onRetry: t }) });
        },
        376293: (e, t, s) => {
            s.d(t, { $f: () => w, KV: () => f, LI: () => I, SC: () => C, Vt: () => y, ed: () => L, op: () => k });
            var o = s(202784),
                i = s(190286),
                n = s(111677),
                r = s.n(n),
                a = s(616894),
                c = s(314948),
                l = s(516951),
                d = s(163390);
            const u = r().cfd2f35e,
                h = r().f9e45cfb,
                p = r().fcd4d489,
                m = r().a6450e84,
                g = r().g353ad73,
                _ = r().ad00a739,
                f = r().a9fd20be,
                E = r().j546fb79,
                T = r().c9623eeb,
                y = r().e133be4e,
                S = r().he43bca4,
                b = r().f5f01af6,
                C = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                w = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? _({ screenName: e }) : g({ screenName: e }) }),
                k = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: s, source: o, testID: i, unblockAction: n, unblockSubtext: r, user: a }) => {
                    let c,
                        u = l.Z;
                    const h = I(a, s);
                    switch (o) {
                        case C.PROFILE:
                        case C.LIST_DETAIL:
                        case C.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? n(h) : e(h);
                            };
                            break;
                        case C.TWEET:
                        case C.TWEET_CARET:
                        case C.RICH_FEEDBACK:
                            (c = d.uq.block),
                                (u = () => {
                                    a.blocking ? n(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: i, shortcutKey: c, Icon: R(a.blocking), text: P(a), subText: v({ user: a, blockSubtext: t, unblockSubtext: r }) };
                },
                R = (e) => (e ? c.default : a.default),
                v = ({ blockSubtext: e, unblockSubtext: t, user: s }) => (!s.blocking && e ? e(s.screen_name) : s.blocking ? t : void 0),
                P = (e) => (e.blocking ? T({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                I = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: E({ screenName: e }), label: y, text: t ? b : S }))(e.screen_name, t) : w(e.screen_name, t)),
                L = ({ confirmation: e, handleConfirm: t, onClose: s }) => {
                    const { confirmButtonType: n, headline: r, label: a, text: c } = e;
                    return o.createElement(i.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: n, headline: r, onCancel: s, onConfirm: t, text: c });
                };
        },
        712816: (e, t, s) => {
            s.d(t, { d: () => i });
            var o = s(111677);
            const i = { defaultToast: { text: s.n(o)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, s) => {
            s.d(t, { D: () => i });
            var o = s(111677);
            const i = { defaultToast: { text: s.n(o)().ca96fe6e }, showToast: !0 };
        },
        973572: (e, t, s) => {
            s.d(t, { Z: () => r });
            var o = s(476984),
                i = s.n(o),
                n = s(24949);
            const r = (0, n.wN)(n.PW, i());
        },
        163390: (e, t, s) => {
            s.d(t, { OX: () => h, Od: () => d, PN: () => p, uq: () => l, wR: () => g });
            var o = s(251067),
                i = s(522171),
                n = s(111677),
                r = s.n(n),
                a = s(912021),
                c = s(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: r().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: r().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: r().a83d4280, keys: l.nextItem, universal: !0 }, { description: r().g0048656, keys: l.previousItem, universal: !0 }, { description: r().a690c4d0, keys: "Space", universal: !0 }, { description: r().e893811a, keys: l.refresh, universal: !1 }, { description: r().ha8209bc, keys: l.goHome, universal: !1 }, { description: r().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: r().eb75875e, keys: l.goNotifications, universal: !1 }, { description: r().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: r().fa98627a, keys: l.goProfile, universal: !1 }, { description: r().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: r().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: r().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: r().b0041756, keys: l.goLists, universal: !1 }, { description: r().d4986f86, keys: l.goMessages, universal: !1 }, { description: r().h5860a68, keys: l.goGrok, universal: !1 }, { description: r().bb081ea2, keys: l.goSettings, universal: !1 }, { description: r().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: r().eee2ed92, keys: l.goToUser, universal: !1 }, { description: r().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: r().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: r().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: r().e736990a, keys: l.newMessage, universal: !1 },
                    { description: r().a9ae1e78, keys: l.search, universal: !1 },
                    { description: r().fe731016, keys: i.Z.shortcuts.like, universal: !1 },
                    { description: r().d17df548, keys: i.Z.shortcuts.reply, universal: !1 },
                    { description: r().g062295e, keys: i.Z.shortcuts.retweet, universal: !1 },
                    { description: r().h01621a4, keys: i.Z.shortcuts.share, universal: !0 },
                    { description: r().gb303814, keys: l.bookmark, universal: !1 },
                    { description: r().c03b1126, keys: l.mute, universal: !1 },
                    { description: r().ebd2abb2, keys: l.block, universal: !1 },
                    { description: r().hc6c5510, keys: "Enter", universal: !0 },
                    { description: r().eebdef38, keys: i.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: r().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: r().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: r().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: r().b881560e, keys: l.video.mute, universal: !0 },
                    { description: r().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: r().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: r().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                m = (0, a.Z)((e) => {
                    const t = d(e),
                        s = h(),
                        o = p(),
                        i = {};
                    return (
                        [...s, ...o, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      i[t] = e;
                                  })
                                : (i[t] = e);
                        }),
                        JSON.stringify(i)
                    );
                }),
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, s) => {
            s.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        492057: (e, t, s) => {
            s.d(t, { BL: () => i, tc: () => n });
            var o = s(491963);
            const i = (e, t) => {
                    if (t.communityId) return o.ZP.select(e, t.communityId);
                },
                n = (e, t, s) => {
                    const i = s || t.communityId;
                    if (i) return o.ZP.selectFetchStatus(e, i);
                };
        },
        964917: (e, t, s) => {
            s.d(t, { FP: () => _, Hf: () => l, Q$: () => f, UD: () => g, V2: () => u, yD: () => m });
            var o = s(439058),
                i = s(499627),
                n = s(917799),
                r = s(312771);
            const a = "scheduledTweets",
                c = { fetchStatus: r.ZP.NONE, scheduledTweets: [] },
                l = "FETCH_SCHEDULED_TWEETS",
                d = Object.freeze({ REQUEST: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST", SUCCESS: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS", FAILURE: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE" }),
                u = "DELETE_SCHEDULED_TWEET",
                h = Object.freeze({ REQUEST: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST", SUCCESS: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS", FAILURE: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE" });
            function p(e = c, t) {
                if (!t) return e;
                switch (t.type) {
                    case d.SUCCESS:
                        if (t.payload) return { ...e, fetchStatus: r.ZP.LOADED, scheduledTweets: t.payload };
                        break;
                    case d.FAILURE:
                        return { ...e, fetchStatus: r.ZP.FAILED };
                    case d.REQUEST:
                        return { ...e, fetchStatus: r.ZP.LOADING };
                    case h.SUCCESS: {
                        const { meta: i } = t;
                        return i && i.deleteScheduledTweetId ? { ...e, scheduledTweets: ((s = i.deleteScheduledTweetId), (o = e.scheduledTweets), o.filter((e) => e.rest_id !== s)) } : e;
                    }
                    default:
                        return e;
                }
                var s, o;
                return e;
            }
            i.Z.register({ [a]: p });
            const m = (e) => e[a].scheduledTweets,
                g = (e) => e[a].fetchStatus,
                _ =
                    () =>
                    (e, t, { api: s }) =>
                        (0, n._O)(e, { request: s.withEndpoint(o.Z).fetchScheduledTweets, params: {} })({ actionTypes: d, context: l }).then(() => {}),
                f =
                    (e) =>
                    (t, s, { api: i }) =>
                        (0, n._O)(t, { request: i.withEndpoint(o.Z).deleteScheduledTweet, params: { scheduled_tweet_id: e } })({ actionTypes: h, context: u, meta: { deleteScheduledTweetId: e } });
        },
        466380: (e, t, s) => {
            s.d(t, { Z: () => h });
            var o = s(807469),
                i = s(502909),
                n = s(600823);
            const r = (0, i.ZP)({ namespace: "topics" }),
                a = (0, i.tb)(r, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(o.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                c = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (s, o) => (s(r.updateOne(e, { following: t })), Promise.resolve()),
                },
                l = (e, t, s) => {
                    const { entityId: o } = t.meta,
                        i = e.entities[o];
                    return i ? ((e, t, s, o) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [s.id]: { ...s, ...o() } } } : e))(e, t, i, s) : e;
                },
                d = { follow: (0, i.Tx)(r, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).follow, reducer: (e, t) => l(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, i.Tx)(r, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).unfollow, reducer: (e, t) => l(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, i.Tx)(r, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).notInterested, reducer: (e, t) => l(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, i.Tx)(r, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).undoNotInterested, reducer: (e, t) => l(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...r, ...a, ...c, ...d, customActionTypes: (0, i.X7)(d) },
                h = n.Z.register(u);
        },
        108304: (e, t, s) => {
            s.r(t), s.d(t, { PlacePickerScreen: () => Q, default: () => j });
            var o = s(202784),
                i = s(325686),
                n = s(470397),
                r = s(731708),
                a = s(143670),
                c = s(154003),
                l = s(371344),
                d = s(946847),
                u = s(392237),
                h = s(111677),
                p = s.n(h),
                m = s(171709),
                g = s(956272),
                _ = s(264171),
                f = s(290402),
                E = s(980407),
                T = s(341276),
                y = s(27498),
                S = s(312771),
                b = s(71620),
                C = s(668214),
                w = s(806528),
                k = s(843138),
                R = s(390387),
                v = s(38562),
                P = s(632960);
            const I = (0, C.Z)()
                .propsFromState(() => ({ autotaggedLocation: k.Xm, initialResults: k.jK, initialFetchStatus: k.ke, lastSearchResults: k.uD, lastSearchFetchStatus: k.tn, position: w.Bz, taggedLocation: P._d, userCountry: R.GG }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("PLACE_PICKER"), loadGeoLocation: w.iG, fetchInitialPlacesIfNeeded: k.BJ, searchPlaces: k.k6, updateLastSelectedPlace: k.T5, updateSettings: v.VP, updateSingleComposer: P.zi }))
                .withAnalytics({ page: "compose", section: "place_picker" });
            class L {
                constructor(e, t, s) {
                    (this.formatter = e), (this.fallbackFormatter = t), (this.fallbackRatio = s);
                }
                format(e) {
                    const t = Math.round(10 * e) / 10;
                    return t > 0 ? this.formatter({ distance: t }) : this.fallbackFormatter({ distance: Math.round(e * this.fallbackRatio) });
                }
            }
            const Z = new L(p().b01ed2db, p().i83e29e1, 5280),
                D = new L(p().d4b7cff7, p().b211849f, 1e3),
                x = ["lr", "mm", "uk", "us"],
                B = p().b772cd66,
                A = p().e7c766ee,
                U = p().ab68727a,
                F = p().ae4057a2,
                M = p().bf2923a6,
                O = p().d963d1b6,
                N = p().a893d602,
                H = p().e68b09b4,
                V = p().be6cc44e,
                q = p().d8ef3232,
                W = p().cce30dcc,
                z = p().fa9adac1;
            class Q extends o.Component {
                constructor(e) {
                    super(e),
                        (this.state = { activeResultSet: y.Z0.initial, geoLocationError: void 0, query: "", selectedLocation: void 0, showSearchForButton: !1 }),
                        (this._appBarRef = o.createRef()),
                        (this._fetchInitialPlaces = () => {
                            const { createLocalApiErrorHandler: e, fetchInitialPlacesIfNeeded: t, taggedLocation: s } = this.props;
                            t()
                                .then(() => {
                                    const { autotaggedLocation: e } = this.props;
                                    s || this.setState({ selectedLocation: e });
                                })
                                .catch(e());
                        }),
                        (this._getActiveResults = () => {
                            const { initialResults: e, lastSearchResults: t } = this.props,
                                { activeResultSet: s } = this.state;
                            return s === y.Z0.initial ? e : t;
                        }),
                        (this._selectResults = () => {
                            const { query: e, selectedLocation: t } = this.state;
                            let s = this._getActiveResults()?.places || [];
                            return t && (s = [t, ...s.filter((e) => e.place.id !== t.place.id)]), s.filter((t) => t.place.full_name.toLowerCase().includes(e.toLowerCase()));
                        }),
                        (this._goBack = () => {
                            this._appBarRef.current?.goBack();
                        }),
                        (this._setTaggedLocation = (e) => {
                            const { updateLastSelectedPlace: t, updateSettings: s, updateSingleComposer: o } = this.props;
                            o({ updates: { taggedLocation: e } }), t(e), s({ shouldAutoTagLocation: !!e });
                        }),
                        (this._handleBack = () => this._goBack()),
                        (this._handleDone = () => {
                            const { selectedLocation: e } = this.state;
                            e && this._setTaggedLocation(e), this._goBack();
                        }),
                        (this._handleRemove = () => {
                            this._setTaggedLocation(null), this._goBack();
                        }),
                        (this._handleRetry = () => {
                            const { searchPlaces: e } = this.props,
                                { activeResultSet: t, query: s } = this.state;
                            t === y.Z0.initial ? this._fetchInitialPlaces() : e(s);
                        }),
                        (this._handleLocationDisabledPromptDismiss = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._handleChange = (e) => {
                            const { value: t } = e.currentTarget,
                                s = t.length ? this.state.activeResultSet : y.Z0.initial;
                            this.setState({ activeResultSet: s, query: t, showSearchForButton: !!t.length });
                        }),
                        (this._handleClear = () => {
                            this.setState({ activeResultSet: y.Z0.initial, query: "" });
                        }),
                        (this._handleSubmit = () => {
                            const { query: e } = this.state,
                                { searchPlaces: t } = this.props;
                            e.length && (this.setState({ activeResultSet: y.Z0.lastSearch, showSearchForButton: !1 }), t(e));
                        }),
                        (this._handlePlaceClick = (e) => () => {
                            this._setTaggedLocation(e), this._goBack();
                        }),
                        (this._renderPlaceSubtext = (e) => {
                            const { position: t, userCountry: s } = this.props,
                                {
                                    place: {
                                        attributes: { street_address: i },
                                        centroid: a,
                                    },
                                } = e;
                            if (i && a && 2 === a.length && t) {
                                const e = ((e, t) => {
                                    const s = e.lat * (Math.PI / 180),
                                        o = t.lat * (Math.PI / 180),
                                        i = o - s,
                                        n = (t.long - e.long) * (Math.PI / 180);
                                    return 7917.6 * Math.asin(Math.sqrt(Math.sin(i / 2) * Math.sin(i / 2) + Math.cos(s) * Math.cos(o) * Math.sin(n / 2) * Math.sin(n / 2)));
                                })({ lat: t.coords.latitude, long: t.coords.longitude }, { lat: a[1], long: a[0] });
                                return o.createElement(
                                    n.Z,
                                    null,
                                    o.createElement(r.ZP, null, i),
                                    o.createElement(
                                        r.ZP,
                                        null,
                                        ((e, t = "us") => {
                                            if (x.find((e) => e === t.toLowerCase())) return Z.format(e);
                                            {
                                                const t = 1.609344 * e;
                                                return D.format(t);
                                            }
                                        })(e, s),
                                    ),
                                );
                            }
                        }),
                        (this._renderPlace = (e) => {
                            const { selectedLocation: t } = this.state;
                            return o.createElement(a.Z, { actionSubText: this._renderPlaceSubtext(e), actionText: e.place.full_name, isSelected: e.place.id === t?.place.id, key: e.place.id, onClick: this._handlePlaceClick(e), selectable: !0 });
                        }),
                        (this._renderPlaces = (e) => (e.length ? e.map((e) => this._renderPlace(e)) : o.createElement(r.ZP, { align: "center", style: G.noPlacesText }, O))),
                        (this._renderAttributionIfNeeded = () => {
                            const e = this._getActiveResults();
                            return e?.attributions.has(y.xt.foursquare) ? o.createElement(m.default, { style: G.foursquareIcon }) : null;
                        }),
                        (this._renderResults = () => {
                            const { query: e, showSearchForButton: t } = this.state,
                                s = this._selectResults();
                            return o.createElement(i.Z, null, this._renderPlaces(s), t ? o.createElement(a.Z, { actionText: z({ query: e }), onClick: this._handleSubmit, textColor: "primary" }) : null, this._renderAttributionIfNeeded());
                        }),
                        (this._renderRightControl = () => o.createElement(i.Z, { style: G.actionButtonContainer }, o.createElement(c.ZP, { onPress: this._handleRemove, size: "small", style: G.actionButton, type: "primaryText" }, H), o.createElement(c.ZP, { onPress: this._handleDone, size: "small", style: G.actionButton, type: "primaryFilled" }, B))),
                        (this._renderGeoPicker = () => {
                            const { history: e, initialFetchStatus: t, lastSearchFetchStatus: s } = this.props,
                                { activeResultSet: i } = this.state,
                                n = i === y.Z0.initial ? t : s;
                            return o.createElement(E.Z, { appBarRef: this._appBarRef, history: e, onBackClick: this._handleBack, rightControl: this._renderRightControl(), title: W }, o.createElement(l.Z, { Icon: g.default, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSubmit, placeholder: V, style: G.search, withClearButton: !0 }), o.createElement(f.Z, { fetchStatus: n === S.ZP.NONE ? S.ZP.LOADING : n, onRequestRetry: this._handleRetry, render: this._renderResults, retryMessage: q }));
                        }),
                        (this._renderLocationDisabledPrompt = () => {
                            const { geoLocationError: e } = this.state;
                            let t = F,
                                s = M;
                            return e && e.code === T.M.PERMISSION_DENIED && ((t = A), (s = U)), o.createElement(d.Z, { actionLabel: N, graphic: _.default, headline: t, onAction: this._handleLocationDisabledPromptDismiss, onClose: this._handleLocationDisabledPromptDismiss, subtext: s });
                        });
                    const { autotaggedLocation: t, initialResults: s, taggedLocation: u } = e;
                    u ? (this.state.selectedLocation = u) : s && (this.state.selectedLocation = t);
                }
                componentDidMount() {
                    const { loadGeoLocation: e } = this.props;
                    return e().then(this._fetchInitialPlaces, (e) => this.setState({ geoLocationError: e }));
                }
                render() {
                    const { geoLocationError: e } = this.state;
                    return e ? this._renderLocationDisabledPrompt() : this._renderGeoPicker();
                }
            }
            const G = u.default.create((e) => ({ search: { marginHorizontal: e.spaces.space16, flexGrow: 0 }, actionButtonContainer: { flexDirection: "row" }, actionButton: { marginStart: e.spaces.space12 }, noPlacesText: { marginVertical: e.spaces.space16 }, foursquareIcon: { marginVertical: e.spaces.space16, fill: e.colors.gray700 } })),
                j = I(Q);
        },
        122421: (e, t, s) => {
            s.r(t), s.d(t, { Recipients: () => x, default: () => B });
            var o = s(202784),
                i = s(325686),
                n = s(420412),
                r = s(844685),
                a = s(96083),
                c = s(731708),
                l = s(154003),
                d = s(111677),
                u = s.n(d),
                h = s(166852),
                p = s(980407),
                m = s(240089),
                g = s(62857),
                _ = s(735e3),
                f = s(293115),
                E = s(615027),
                T = s(24949),
                y = s(47743),
                S = s(668214),
                b = s(390387),
                C = s(632960);
            const w = (e, t) => t.location.state,
                k = (e, t) => {
                    const s = w(0, t);
                    return s && s.inReplyToStatus;
                },
                R = (e, t) => {
                    const s = w(0, t);
                    return (s && s.excludedRecipients) || (0, _.o)();
                },
                v = (0, S.Z)()
                    .propsFromState(() => ({ recipientIds: (0, T.P1)(k, b._h, (e, t) => (e && t ? (0, y.YT)({ inReplyToStatus: e, viewerUserId: t, excludeReplyUser: !0 }).map((e) => e.id_str) : (0, _.o)())), initialExcludedRecipients: R, inReplyToStatus: k }))
                    .propsFromActions(() => ({ updateExcludedRecipientsV2: C.OO })),
                P = u().c55eed72,
                I = u().b772cd66,
                L = u().caca3102,
                Z = u().c6a6dc2f,
                D = { page: "compose", section: "recipients" },
                x = ({ history: e, inReplyToStatus: t, initialExcludedRecipients: s, recipientIds: d, updateExcludedRecipientsV2: u }) => {
                    const [T, y] = o.useState(s);
                    if (!t) return o.createElement(E.Z, { to: "/compose/post" });
                    const { user: S } = t.retweeted_status || t,
                        b = (e) => {
                            y(e ? (0, _.o)() : d);
                        },
                        C = (e) => () => {
                            const t = -1 !== T.indexOf(e);
                            y(t ? T.filter((t) => t !== e) : (0, h.Z)([...T, e]));
                        },
                        w = () => {
                            u(T), e.goBack();
                        },
                        k = () => (d.length > 1 ? o.createElement(a.Z, { checked: 0 === T.length, onChange: b }) : null),
                        R = ({ isBlocking: e, screenName: t }) => (e ? o.createElement(c.ZP, { color: "magenta500", size: "subtext2" }, Z({ screenName: t })) : null),
                        v = (e) => {
                            if (!t) return null;
                            const { user: s } = t.retweeted_status || t,
                                i = -1 !== T.indexOf(e),
                                n = e === s.id_str,
                                r = o.createElement(a.Z, { checked: !i, disabled: n, onChange: C(e) });
                            return o.createElement(m.ZP, { bottomControl: R, cellClickable: !n, decoration: r, isFakeButtonRoleWithListItem: !n, key: e, onClick: C(e), promotedItemType: "users", userId: e, withLink: !1 });
                        };
                    return o.createElement(f.nO, { namespace: D }, o.createElement(p.Z, { backLocation: "/compose/post", history: e, onBackClick: w, rightControl: o.createElement(l.ZP, { onPress: w, size: "xSmall", type: "brandFilled" }, I), title: P }, v(S.id_str), d.length ? o.createElement(i.Z, null, o.createElement(n.Z, null), o.createElement(r.Z, { rightControl: k(), text: L }), o.createElement(g.Z, { renderUserCell: v, userIds: d })) : null));
                },
                B = v(x);
        },
        131859: (e, t, s) => {
            s.r(t), s.d(t, { Compose: () => Fe, default: () => Oe });
            s(136728);
            var o = s(202784),
                i = s(360917),
                n = s.n(i),
                r = s(928316),
                a = s(325686),
                c = s(154003),
                l = s(822399),
                d = s(537392),
                u = s(529356),
                h = s(386802),
                p = s(392237),
                m = s(111677),
                g = s.n(m),
                _ = s(912021),
                f = s(744531),
                E = s(941399),
                T = s(980407),
                y = s(231214),
                S = s(472826),
                b = s(632552),
                C = s(10656),
                w = s(96206),
                k = s(293115),
                R = s(349745),
                v = s(704279),
                P = s(346789),
                I = s(24949),
                L = s(370751),
                Z = s(71620),
                D = s(646522),
                x = s(668214),
                B = s(492057),
                A = s(669002),
                U = s(175856),
                F = s(497294),
                M = s(709318),
                O = s(872788),
                N = s(964917),
                H = s(137204),
                V = s(632960),
                q = s(836255),
                W = s(919022);
            const z = (e) => V.tS(e, ""),
                Q = (e) => V.WQ(e, ""),
                G = (e) => V.Gz(e, ""),
                j = (e) => V.SJ(e, ""),
                K = (e) => (t, s) => {
                    const o = ((e, t) => t.location.state)(0, s);
                    return o ? e(o) : void 0;
                },
                $ = (e, t) => t.activeUser || W.ZP.selectViewerUser(e),
                J = (e, t) => {
                    const {
                        location: { query: s },
                    } = t;
                    return s && "string" == typeof s.in_reply_to ? s.in_reply_to : void 0;
                },
                X = K((e) => e.inReplyToStatusId),
                Y = (e, t) => {
                    const s = J(0, t) || X(e, t);
                    return s ? q.Z.selectHydrated(e, s) : void 0;
                },
                ee = (e, t) => t.location.pathname.indexOf("/intent/") > -1,
                te = K((e) => e.defaultText),
                se = (e, t) => {
                    const s = te(e, t);
                    return (0, D.Z)(t.location) || s;
                },
                oe = K((e) => e.quotedStatus),
                ie = (e, t) => (t.quotedStatus ? t.quotedStatus : oe(e, t)),
                ne = ({ cardUrl: e, mediaIds: t, ...s }) => s,
                re = K((e) => e.isSelfThreadReply),
                ae = K((e) => e.hideUnsentTweetsButton),
                ce = K((e) => e.headingSubtitle),
                le = K((e) => e.headingTitle),
                de = K((e) => !!e.previousTweetId),
                ue = K((e) => e.editableUntil);
            function he(e, t) {
                const { previousPath: s, selectedCommunityId: o } = t.location.state || {};
                let i;
                const n = (0, M.br)(e);
                if ((o ? (i = o) : s && s.includes("/home") && n.type === O.FO.COMMUNITY && (i = n.id), i)) {
                    const t = (0, B.BL)(e, { communityId: i });
                    if (t && "NonMember" !== t.role) return t;
                }
            }
            function pe(e, t) {
                const { previousPath: s, selectedCommunityId: o } = t.location.state || {},
                    i = (0, M.br)(e);
                let n;
                if ((o ? (n = o) : s && s.includes("/home") && i.type === O.FO.COMMUNITY && (n = i.id), n)) {
                    const t = (0, B.BL)(e, { communityId: n });
                    return !(!t || "NonMember" !== t.role);
                }
                return !1;
            }
            const me = K((e) => e.trustedFriendsValue),
                ge = K((e) => e.previousTweetId),
                _e = (e, t) => {
                    const s = ge(e, t);
                    return s ? q.Z.createHydratedSelector(e)(s) : null;
                },
                fe = (e, t) => (0, U.t5)(e, U.xH),
                Ee = (0, x.Z)()
                    .propsFromState(() => ({
                        activeUser: $,
                        audienceControlsValue: (0, I.P1)(
                            _e,
                            (e, t) => V.oN(e, "modal"),
                            H.Ln,
                            (e, t) => V.SJ(e, "modal"),
                            (e, t, s, o) => (e ? (0, b.CB)(e, s, o) : t),
                        ),
                        broadcastCommunityTweet: j,
                        composerData: (0, I.P1)(z, se, ie, F.gz, ee, (e, t, s, o, i) =>
                            e.map((e, n) => {
                                const r = (0, L.Z)(e.mediaIds || []),
                                    a = o.filter((e) => r.has(e.id));
                                return { ...ne(e), media: a, quotedStatus: 0 === n ? s : void 0, text: 0 === n && t && !i ? t : e.text };
                            }),
                        ),
                        composeSemanticCoreId: K((e) => e.composeSemanticCoreId),
                        draftTweets: A.Fq,
                        editableUntil: ue,
                        hideUnsentTweetsButton: ae,
                        inReplyToStatus: Y,
                        inReplyToStatusId: J,
                        isEdit: de,
                        isIntentRoute: ee,
                        isSelfThreadReply: re,
                        isSending: Q,
                        isAutoSaving: G,
                        scheduledTweets: N.yD,
                        selectedCommunity: he,
                        shouldShowNonCommunityMemberPrompt: pe,
                        selectedTrustedFriendsValue: me,
                        sendingProgress: V.ZE,
                        subtitle: ce,
                        shouldShowCommunityAudienceEducation: fe,
                        title: le,
                    }))
                    .propsFromActions(() => ({ createDraftTweetApiErrorHandler: (0, Z.zr)(A.CA), createScheduledTweetApiErrorHandler: (0, Z.zr)(N.Hf), fetchScheduledTweets: N.FP, fetchDraftTweets: A.Le, addCommunityAudienceEducationFlag: () => (0, U.pj)(U.xH), updateAudienceControlsValue: V.sU, setActiveParentKey: V.jr }));
            var Te = s(837880);
            const ye = g().e6042757,
                Se = g().a4e39717,
                be = 3e5,
                Ce = { "05:00": !0, "01:00": !0 };
            function we({ formatted: e, minutes: t }) {
                return Ce[e] && Se({ minutes: t });
            }
            function ke({ minutes: e, seconds: t }) {
                return ye({ minutes: e, seconds: t });
            }
            const Re = "tweetButton",
                ve = g().a609edbe,
                Pe = g().d4ebc798,
                Ie = g().j24c37b2,
                Le = g().dc295bb0,
                Ze = g().e536de22,
                De = g().cb817dae,
                xe = "compose",
                Be = { page: xe },
                Ae = { page: xe, section: "reply" },
                Ue = { context: "compose_intent_logged_in" };
            class Fe extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isValid: !1, editCountdownShown: !1 }),
                        (this._handleEditCountdownTimeout = (e) => {
                            const t = e - Date.now() <= be;
                            t !== this.state.editCountdownShown && this.setState({ editCountdownShown: t });
                        }),
                        (this._handleCloseModal = () => {
                            const { history: e } = this.props;
                            e.goBackThroughModals();
                        }),
                        (this._handleAppBarHeight = (0, _.Z)(() => {
                            const e = r.findDOMNode(this._appBarRef);
                            return (e && e instanceof window.Element && e.getBoundingClientRect().height) || 50;
                        })),
                        (this._handleBackClick = () => {
                            this._composeContainerRef && this._composeContainerRef.handleDismissComposer();
                        }),
                        (this._handleCloseComposer = () => {
                            this._appBarRef && this._appBarRef.goBack();
                        }),
                        (this._handleSendTweet = () => {
                            this._composeContainerRef && this._composeContainerRef.handleTweetOrRetweet();
                        }),
                        (this._handleSendTweetWithBoost = () => this._composeContainerRef?.handleTweetWithBoost() ?? Promise.resolve()),
                        (this._setValidity = (e) => {
                            e !== this.state.isValid && this.setState({ isValid: e });
                        }),
                        (this._getScribeNamespace = () => (this.props.inReplyToStatus || this.props.inReplyToStatusId ? Ae : Be)),
                        (this._getScribeData = () => {
                            const { activeUser: e, isIntentRoute: t } = this.props;
                            return t && e ? Ue : n();
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isValid: e } = this.state,
                                { isModal: t } = this.context,
                                { activeUser: s, audienceControlsValue: i, composerData: n, inReplyToStatus: r, isEdit: l, isSelfThreadReply: d, isSending: u } = this.props,
                                h = "all" === i.conversationControlsValue,
                                p = !e || u || !s || this.is_uploading;
                            return o.createElement(a.Z, { style: Me.rightControlContainer }, l ? this._renderCountdownTimer() : o.createElement(P.Z, { disabled: p, isAudienceAll: h, isComposerValid: e, isEdit: !!l, isModal: t, isQuote: this.isQuoteTweet, isReply: !!r, isRetweet: !!this.isRetweet, isScheduled: this.isScheduled, isSelfThreadReply: !!d, isThread: this.isThread, onTweetWithBoostPress: this._handleSendTweetWithBoost, renderFallback: this._renderDraftsHeading, shouldShow: !t, tweetText: n[0].text, viewer: s }), t ? null : o.createElement(c.ZP, { disabled: p, onPress: this._handleSendTweet, size: "small", testID: Re, type: "brandFilled" }, (0, b.of)({ inReplyToStatus: !!r, isSelfThreadReply: !!d, isQuoteTweet: !!this.isQuoteTweet, isRetweet: !!this.isRetweet, isScheduled: !!this.isScheduled, isThread: this.isThread, isEdit: !!l })));
                        }),
                        (this._renderHeaderWithProgressBar = (e) => {
                            const { isModal: t } = this.context,
                                { isAutoSaving: s, isSending: i, sendingProgress: n } = this.props;
                            return o.createElement(o.Fragment, null, o.createElement(l.Z, { progress: i && !s ? Math.max(n, 0.02) : 0, style: [Me.progressBar, t && Me.progressBarModal] }), e);
                        }),
                        (this._renderDraftsHeading = () => {
                            const { hideUnsentTweetsButton: e } = this.props;
                            if (!e) return o.createElement(c.ZP, { onPress: this._handleOpenUnsent, size: "small", testID: "unsentButton", type: "brandText" }, Pe);
                        }),
                        (this._renderCountdownTimer = () => {
                            const { editableUntil: e } = this.props,
                                { editCountdownShown: t } = this.state;
                            if (!t || !e) return null;
                            return o.createElement(E.F, {
                                "aria-label": ke,
                                expiration: e,
                                getAccessibilityLiveLabel: we,
                                onTimeElapsed: () => {
                                    this._composeContainerRef && this._composeContainerRef.handleEditTimeLimitExceeded();
                                },
                            });
                        }),
                        (this._handleOpenUnsent = () => {
                            const { history: e } = this.props;
                            (0, v.n)({ ...this._getScribeNamespace(), element: "unsent_tweets", action: "click" }), e.push("/compose/post/unsent/drafts");
                        }),
                        (this._setAppBarRef = (e) => {
                            this._appBarRef = e;
                        }),
                        (this._handleComposeContainerRef = (e) => {
                            this._composeContainerRef = e;
                        });
                }
                componentDidMount() {
                    const { activeUser: e, broadcastCommunityTweet: t, createDraftTweetApiErrorHandler: s, createScheduledTweetApiErrorHandler: o, editableUntil: i, fetchDraftTweets: n, fetchScheduledTweets: r, history: a, inReplyToStatus: c, isEdit: l, location: d, selectedCommunity: u, selectedTrustedFriendsValue: h, updateAudienceControlsValue: p } = this.props;
                    (this._unlockReload = w.Z.acquire()), a.setModalRouteBreakpoint(a.location), e && (r().catch(o()), n().catch(s())), u && (p({ _type: "community_members", communityIdValue: u.id_str, conversationControlsValue: "community_members", broadcast: t }, "modal"), a.replace({ pathname: d.pathname, state: (0, f.Z)(d.state || {}, "selectedCommunityId") })), h && (p({ _type: "trusted_friends_tweet", trustedFriendsValue: h, conversationControlsValue: "trusted_friends_tweet" }, "modal"), a.replace({ pathname: d.pathname, state: (0, f.Z)(d.state || {}, "trustedFriendsValue") })), c?.exclusivity_info ? p({ _type: "super_followers_exclusive", conversationControlsValue: "super_followers_exclusive", exclusivityControlValue: {} }) : c?.community_id_str ? p({ _type: "community_members", communityIdValue: c.community_id_str, conversationControlsValue: "community_members" }) : c?.trusted_friends_info && p({ _type: "trusted_friends_tweet", conversationControlsValue: "trusted_friends_tweet", trustedFriendsValue: { trusted_friends_list_id: "1482057446797373440" } });
                    const m = +i;
                    l &&
                        !this._cancelEditTimeout &&
                        m >= 0 &&
                        (this._handleEditCountdownTimeout(m),
                        (this._cancelEditTimeout = (function (e, t) {
                            const s = e - Date.now() - be,
                                o = (0, Te.Z)(s, 0, 2147483647),
                                i = setTimeout(t, o, e);
                            return () => clearTimeout(i);
                        })(m, this._handleEditCountdownTimeout)));
                }
                componentWillUnmount() {
                    const { history: e } = this.props;
                    e.setModalRouteBreakpoint(e.location), this._unlockReload(), this._cancelEditTimeout?.();
                }
                render() {
                    const { activeUser: e, composeHeader: t, composeSemanticCoreId: s, history: i, isEdit: n, isIntentRoute: r, location: a, quotedStatus: c, subtitle: l, title: h } = this.props,
                        p = r && !e,
                        { isModal: m } = this.context;
                    return o.createElement(
                        k.nO,
                        { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                        o.createElement(d.ZP, null, ({ containerWidth: r }) => {
                            const d = C.Z.shouldRenderAsModal(r),
                                g = (p && d) || this.showCommunityNonMemberPrompt;
                            return o.createElement(o.Fragment, null, this.showCommunityNonMemberPrompt ? o.createElement(u.Z, { actionLabel: Ie, graphicDisplayMode: "none", headline: Le, onAction: this._handleCloseModal, subtext: Ze }) : null, p && o.createElement(y.Z, { history: i, location: a }), g ? null : o.createElement(T.Z, { appBarRef: this._setAppBarRef, documentTitle: ve, hideBackButton: !1, history: i, onBackClick: this._handleBackClick, renderHeader: this._renderHeaderWithProgressBar, rightControl: this._renderAppBarRightControl(), subtitle: l, title: n ? De : h }, o.createElement(S.Z, { activeUser: e, composeHeader: t, composeSemanticCoreId: s, containerWidth: r, history: i, isModal: m, location: a, onCloseComposer: this._handleCloseComposer, onHandleAppBarHeight: this._handleAppBarHeight, onRef: this._handleComposeContainerRef, quotedStatus: c, setValidity: this._setValidity })));
                        }),
                    );
                }
                get showCommunityNonMemberPrompt() {
                    const { inReplyToStatus: e, shouldShowNonCommunityMemberPrompt: t } = this.props,
                        s = null == e && !this.isQuoteTweet;
                    return t && s;
                }
                get isThread() {
                    return this.props.composerData.length > 1;
                }
                get isRetweet() {
                    const { composerData: e } = this.props,
                        t = 0 === e[0].media.length;
                    return !this.isThread && e[0].quotedStatus && "" === e[0].text && t;
                }
                get isQuoteTweet() {
                    const { composerData: e } = this.props;
                    return !this.isThread && !!e[0].quotedStatus;
                }
                get isScheduled() {
                    const { composerData: e } = this.props;
                    return (0, R.TO)(e[0].scheduledFor);
                }
                get is_uploading() {
                    return !!this._composeContainerRef && this._composeContainerRef.is_uploading;
                }
            }
            Fe.contextType = h.Z;
            const Me = p.default.create((e) => ({ progressBar: { position: "fixed", borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small, zIndex: e.componentZIndices.appBarZIndex + 1 }, progressBarModal: { position: "absolute" }, rightControlContainer: { display: "inline-flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 } })),
                Oe = Ee(Fe);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Compose-e4e3d8bb.97e382fa.js.map
