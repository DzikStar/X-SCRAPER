"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetMediaDetail-8ed0fac5"],
    {
        376293: (e, t, o) => {
            o.d(t, { $f: () => C, KV: () => f, LI: () => x, SC: () => _, Vt: () => w, ed: () => P, op: () => E });
            var s = o(202784),
                r = o(190286),
                n = o(111677),
                i = o.n(n),
                a = o(616894),
                c = o(314948),
                d = o(516951),
                l = o(163390);
            const u = i().cfd2f35e,
                p = i().f9e45cfb,
                g = i().fcd4d489,
                m = i().a6450e84,
                b = i().g353ad73,
                k = i().ad00a739,
                f = i().a9fd20be,
                h = i().j546fb79,
                y = i().c9623eeb,
                w = i().e133be4e,
                v = i().he43bca4,
                T = i().f5f01af6,
                _ = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: m, text: t ? k({ screenName: e }) : b({ screenName: e }) }),
                E = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: s, testID: r, unblockAction: n, unblockSubtext: i, user: a }) => {
                    let c,
                        u = d.Z;
                    const p = x(a, o);
                    switch (s) {
                        case _.PROFILE:
                        case _.LIST_DETAIL:
                        case _.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? n(p) : e(p);
                            };
                            break;
                        case _.TWEET:
                        case _.TWEET_CARET:
                        case _.RICH_FEEDBACK:
                            (c = l.uq.block),
                                (u = () => {
                                    a.blocking ? n(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: r, shortcutKey: c, Icon: I(a.blocking), text: S(a), subText: Z({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                I = (e) => (e ? c.default : a.default),
                Z = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                S = (e) => (e.blocking ? y({ screenName: e.screen_name }) : g({ screenName: e.screen_name })),
                x = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: h({ screenName: e }), label: w, text: t ? T : v }))(e.screen_name, t) : C(e.screen_name, t)),
                P = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: n, headline: i, label: a, text: c } = e;
                    return s.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: n, headline: i, onCancel: o, onConfirm: t, text: c });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => r });
            var s = o(111677);
            const r = { defaultToast: { text: o.n(s)().b6878b0a }, showToast: !0 };
        },
        340179: (e, t, o) => {
            o.d(t, { i: () => i });
            var s = o(516951),
                r = o(615656),
                n = o(51525);
            const i = (e = "") => ({
                [r.ZP.GenericNotFound]: { customAction: s.Z },
                [r.ZP.NotAuthorizedToViewUser]: {
                    customAction: () => {
                        (0, n.DR)(`/${e}`, { statusCode: 401 });
                    },
                },
                [r.ZP.StatusViewForbidden]: {
                    customAction: () => {
                        (0, n.DR)(`/${e}`);
                    },
                },
                showToast: !0,
            });
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => n });
            var s = o(516951),
                r = o(615656);
            const n = { [r.ZP.OtherUserSuspended]: { customAction: s.Z }, [r.ZP.StatusViewForbidden]: { customAction: s.Z } };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => r });
            var s = o(111677);
            const r = { defaultToast: { text: o.n(s)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => p, Od: () => l, PN: () => g, uq: () => d, wR: () => b });
            var s = o(251067),
                r = o(522171),
                n = o(111677),
                i = o.n(n),
                a = o(912021),
                c = o(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                l = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: d.nextItem, universal: !0 }, { description: i().g0048656, keys: d.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: d.refresh, universal: !1 }, { description: i().ha8209bc, keys: d.goHome, universal: !1 }, { description: i().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: i().eb75875e, keys: d.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: i().fa98627a, keys: d.goProfile, universal: !1 }, { description: i().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: i().b0041756, keys: d.goLists, universal: !1 }, { description: i().d4986f86, keys: d.goMessages, universal: !1 }, { description: i().h5860a68, keys: d.goGrok, universal: !1 }, { description: i().bb081ea2, keys: d.goSettings, universal: !1 }, { description: i().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: d.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: i().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: d.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: d.search, universal: !1 },
                    { description: i().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: d.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: d.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: d.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                g = () => [
                    { description: i().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: i().b881560e, keys: d.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                m = (0, a.Z)((e) => {
                    const t = l(e),
                        o = p(),
                        s = g(),
                        r = {};
                    return (
                        [...o, ...s, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                b = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        965728: (e, t, o) => {
            o.d(t, { C_: () => f, I5: () => m, K2: () => k, L$: () => d, Rb: () => b, nk: () => g, sI: () => w, xr: () => h });
            var s = o(202784),
                r = o(483677),
                n = o(782578),
                i = o(393058),
                a = o(521514);
            const c = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                d = (e) => {
                    const t = e && r.Z.getForGallery(e);
                    return t ? { rgb: h(t), rgba: c(t, 0.9) } : p;
                },
                l = a.Z.columnWidths.primary,
                u = (e, t) => Math.min(t, e),
                p = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                g = { transitionProperty: "background-color", transitionDuration: ".5s" },
                m = (e, t) => {
                    const { containerHeight: o, containerWidth: s, mediaHeight: r, mediaWidth: i } = e,
                        a = i && r ? i / r : 1,
                        c = a > 1,
                        d = t ? 400 : l,
                        p = c && (!i || i <= d) ? u(s, d) : s,
                        g = c || (r && !(r <= d)) ? o : u(o, d);
                    return n.Z.getContainDimensions({ width: p, height: g }, a);
                },
                b = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return d(t);
                },
                k = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return d(t);
                },
                f = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return d(t);
                },
                h = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                y = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                w = () => {
                    const [e, t] = s.useReducer(y, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            i.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        951790: (e, t, o) => {
            o.d(t, { Z: () => i });
            var s = o(323265);
            const r = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = n(e),
                            o = [t.android, t.ios],
                            s = o.find((e) => e.matches());
                        return s ? [s] : o;
                    },
                    getiOSAppStoreLink(e) {
                        const t = n(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = n(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && r.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        r.setLocation(e);
                    },
                },
                n = (e = "rwoiah") => ({ android: { platform: "android", matches: () => s.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => s.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                i = r;
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => s });
            const s = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, o) => {
            o.d(t, { Z: () => p });
            var s = o(807469),
                r = o(502909),
                n = o(600823);
            const i = (0, r.ZP)({ namespace: "topics" }),
                a = (0, r.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(s.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                c = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (o, s) => (o(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                d = (e, t, o) => {
                    const { entityId: s } = t.meta,
                        r = e.entities[s];
                    return r ? ((e, t, o, s) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [o.id]: { ...o, ...s() } } } : e))(e, t, r, o) : e;
                },
                l = { follow: (0, r.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).follow, reducer: (e, t) => d(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).unfollow, reducer: (e, t) => d(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).notInterested, reducer: (e, t) => d(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).undoNotInterested, reducer: (e, t) => d(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...a, ...c, ...l, customActionTypes: (0, r.X7)(l) },
                p = n.Z.register(u);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetMediaDetail-8ed0fac5.d81bec2a.js.map
