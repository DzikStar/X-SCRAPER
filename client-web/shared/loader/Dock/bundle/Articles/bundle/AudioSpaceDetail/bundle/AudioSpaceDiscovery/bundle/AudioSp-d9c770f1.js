"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1", "loader.richScribeAction"],
    {
        524084: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(202784),
                n = i(523561),
                s = i(195560);
            const o = (0, n.Z)({ loader: () => i.e("loader.AbsolutePower").then(i.bind(i, 590136)), renderPlaceholder: (e, t) => r.createElement(s.Z, { hasError: e, onRetry: t }) });
        },
        262785: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(202784),
                n = i(523561),
                s = i(195560);
            const o = (0, n.Z)({ loader: () => Promise.all([i.e("icons.21"), i.e("icons.1"), i.e("modules.common-e907d115"), i.e("modules.common-e019dbda"), i.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle"), i.e("loader.TimelineRenderer")]).then(i.bind(i, 22371)), renderPlaceholder: (e, t) => r.createElement(s.Z, { hasError: e, onRetry: t }) });
        },
        376293: (e, t, i) => {
            i.d(t, { $f: () => I, KV: () => f, LI: () => O, SC: () => b, Vt: () => h, ed: () => C, op: () => P });
            var r = i(202784),
                n = i(190286),
                s = i(111677),
                o = i.n(s),
                a = i(616894),
                d = i(314948),
                c = i(516951),
                l = i(163390);
            const u = o().cfd2f35e,
                p = o().f9e45cfb,
                m = o().fcd4d489,
                E = o().a6450e84,
                _ = o().ad00a739,
                f = o().a9fd20be,
                T = o().j546fb79,
                g = o().c9623eeb,
                h = o().e133be4e,
                y = o().f5f01af6,
                b = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                I = (e) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: E, text: _({ screenName: e }) }),
                P = ({ blockAction: e, blockSubtext: t, source: i, testID: r, unblockAction: n, unblockSubtext: s, user: o }) => {
                    let a,
                        d = c.Z;
                    const u = O(o);
                    switch (i) {
                        case b.PROFILE:
                        case b.LIST_DETAIL:
                        case b.FOLLOWERS_LIST:
                            d = () => {
                                o.blocking ? n(u) : e(u);
                            };
                            break;
                        case b.TWEET:
                        case b.TWEET_CARET:
                        case b.RICH_FEEDBACK:
                            (a = l.uq.block),
                                (d = () => {
                                    o.blocking ? n(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: d, testID: r, shortcutKey: a, Icon: S(o.blocking), text: v(o), subText: L({ user: o, blockSubtext: t, unblockSubtext: s }) };
                },
                S = (e) => (e ? d.default : a.default),
                L = ({ blockSubtext: e, unblockSubtext: t, user: i }) => (!i.blocking && e ? e(i.screen_name) : i.blocking ? t : void 0),
                v = (e) => (e.blocking ? g({ screenName: e.screen_name }) : m({ screenName: e.screen_name })),
                O = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: T({ screenName: t }), label: h, text: y }) : I(e.screen_name);
                    var t;
                },
                C = ({ confirmation: e, handleConfirm: t, onClose: i }) => {
                    const { confirmButtonType: s, headline: o, label: a, text: d } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: s, headline: o, onCancel: i, onConfirm: t, text: d });
                };
        },
        712816: (e, t, i) => {
            i.d(t, { d: () => n });
            var r = i(111677);
            const n = { defaultToast: { text: i.n(r)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, i) => {
            i.d(t, { D: () => n });
            var r = i(111677);
            const n = { defaultToast: { text: i.n(r)().ca96fe6e }, showToast: !0 };
        },
        3138: (e, t, i) => {
            i.d(t, { M: () => s });
            var r = i(615656),
                n = i(51525);
            const s = { [r.ZP.GenericNotFound]: { customAction: n.vv } };
        },
        973572: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(476984),
                n = i.n(r),
                s = i(24949);
            const o = (0, s.wN)(s.PW, n());
        },
        163390: (e, t, i) => {
            i.d(t, { OX: () => p, Od: () => l, PN: () => m, uq: () => c, wR: () => _ });
            var r = i(251067),
                n = i(522171),
                s = i(111677),
                o = i.n(s),
                a = i(912021),
                d = i(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                l = (0, a.Z)((e) => {
                    const t = e ? [{ description: o().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: o().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: o().a83d4280, keys: c.nextItem, universal: !0 }, { description: o().g0048656, keys: c.previousItem, universal: !0 }, { description: o().a690c4d0, keys: "Space", universal: !0 }, { description: o().e893811a, keys: c.refresh, universal: !1 }, { description: o().ha8209bc, keys: c.goHome, universal: !1 }, { description: o().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: o().eb75875e, keys: c.goNotifications, universal: !1 }, { description: o().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: o().fa98627a, keys: c.goProfile, universal: !1 }, { description: o().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: o().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: o().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: o().b0041756, keys: c.goLists, universal: !1 }, { description: o().d4986f86, keys: c.goMessages, universal: !1 }, { description: o().h5860a68, keys: c.goGrok, universal: !1 }, { description: o().bb081ea2, keys: c.goSettings, universal: !1 }, { description: o().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: o().eee2ed92, keys: c.goToUser, universal: !1 }, { description: o().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = d.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: o().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: o().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: o().e736990a, keys: c.newMessage, universal: !1 },
                    { description: o().a9ae1e78, keys: c.search, universal: !1 },
                    { description: o().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: o().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: o().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: o().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: o().gb303814, keys: c.bookmark, universal: !1 },
                    { description: o().c03b1126, keys: c.mute, universal: !1 },
                    { description: o().ebd2abb2, keys: c.block, universal: !1 },
                    { description: o().hc6c5510, keys: "Enter", universal: !0 },
                    { description: o().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: o().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                m = () => [
                    { description: o().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: o().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: o().b881560e, keys: c.video.mute, universal: !0 },
                    { description: o().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: o().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: o().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                E = (0, a.Z)((e) => {
                    const t = l(e),
                        i = p(),
                        r = m(),
                        n = {};
                    return (
                        [...i, ...r, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                _ = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": E(e) } };
                };
        },
        159440: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = { Cell: "Cell", Hero: "Hero", CellWithProminentSocialContext: "CellWithProminentSocialContext", SSPAd: "SSPAd" };
        },
        848596: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = Object.freeze({ Cell: "Cell", PreviewCard: "PreviewCard" });
        },
        242173: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = Object.freeze({ EntityFollowPrompt: "entityFollowPrompt", UserFollowPrompt: "userFollowPrompt", RelevancePrompt: "relevancePrompt", OnboardingLikesStartPrompt: "onboardingLikesStartPrompt" });
        },
        222069: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = Object.freeze({ Expand: "Expand", Replace: "Replace", Suggest: "Suggest" });
        },
        263863: (e, t, i) => {
            i.d(t, { Z: () => s });
            const r = Object.freeze({ FocalTweet: "FocalTweet" }),
                n = Object.freeze({ ...r, CondensedTweet: "CondensedTweet", DeprecatedMediaFocus: "DeprecatedMediaFocus", EmphasizedPromotedTweet: "EmphasizedPromotedTweet", MapCardPromotedTweet: "MapCardPromotedTweet", Media: "Media", MediaGrid: "MediaGrid", MediaShort: "MediaShort", MomentTimelineTweet: "MomentTimelineTweet", QuotedTweet: "QuotedTweet", ReaderMode: "ReaderMode", ReaderModeRoot: "ReaderModeRoot", SelfThread: "SelfThread", Tweet: "Tweet", TweetFollowOnly: "TweetFollowOnly", TweetWithoutCard: "TweetWithoutCard" }),
                s = n;
        },
        409438: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        732032: (e, t, i) => {
            i.d(t, { L: () => r });
            const r = Object.freeze({ Community: "Community" });
        },
        576513: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = Object.freeze({ ARROW_RIGHT: "ARROW_RIGHT", BALLOON_STROKE: "BALLOON_STROKE", BOOKMARK: "BOOKMARK", CALENDAR: "CALENDAR", DEBUG: "DEBUG", ERROR: "ERROR", EYE_OFF: "EYE_OFF", FEEDBACK_CLOSE: "FEEDBACK_CLOSE", FEEDBACK: "FEEDBACK", FLAG: "FLAG", FOLLOW: "FOLLOW", FROWN: "FROWN", HELP: "HELP", LINK: "LINK", LOCATION_STROKE: "LOCATION_STROKE", LOGO: "LOGO", MESSAGE: "MESSAGE", MODERATION: "MODERATION", MOMENT: "MOMENT", NO: "NO", NOTIFICATIONS_FOLLOW: "NOTIFICATIONS_FOLLOW", OUTGOING: "OUTGOING", PERSON_STROKE: "PERSON_STROKE", PERSON: "PERSON", PIN: "PIN", RETWEET: "RETWEET", SAFETY: "SAFETY", SMILE: "SMILE", SPEAKER_OFF: "SPEAKER_OFF", SPEAKER: "SPEAKER", TOPIC_CLOSE: "TOPIC_CLOSE", TOPIC_FILLED: "TOPIC_FILLED", TOPIC: "TOPIC", TRASHCAN: "TRASHCAN", UNFOLLOW: "UNFOLLOW" });
        },
        538327: (e, t, i) => {
            i.d(t, { O: () => n, P: () => r });
            const r = Object.freeze({ List: "List", ListTile: "ListTile", ListWithPin: "ListWithPin", ListWithSubscribe: "ListWithSubscribe" }),
                n = Object.freeze({ Creation: "list_creation", Edit: "list_edit" });
        },
        220644: (e, t, i) => {
            i.d(t, { j: () => r });
            const r = Object.freeze({ PagedCarouselFeedbackItem: "pagedCarouselFeedbackItem", Message: "message" });
        },
        515330: (e, t, i) => {
            i.d(t, { Y: () => r });
            i(202784);
            const r = Object.freeze({ DigestCard: "digestCard", ScoreCard: "scoreCard", Standard: "standard", Broadcast: "broadcast", CallToAction: "callToAction" });
        },
        118101: (e, t, i) => {
            i.d(t, { NA: () => r, pI: () => n, sv: () => s });
            const r = Object.freeze({ TopicTile: "topicTile" }),
                n = Object.freeze({ SingleStateDefault: "SingleStateDefault", DoubleStateDefault: "DoubleStateDefault" }),
                s = Object.freeze({ Pivot: "Pivot", Recommendation: "Recommendation" });
        },
        481242: (e, t, i) => {
            i.r(t), i.d(t, { richScribeAction: () => l, richScribeFlushImmediate: () => u });
            var r = i(450681),
                n = i(479506),
                s = i(942893),
                o = i(836255),
                a = i(919022);
            const d = [],
                c = Object.freeze({}),
                l =
                    (e, t = c) =>
                    (i, n, { scribe: s }) => {
                        const o = n(),
                            a = Array.isArray(t.items) ? (0, r.Z)(t.items.map((e) => m(e, o))) : d,
                            c = { ...t, items: a };
                        s.log(e, c);
                    },
                u =
                    () =>
                    (e, t, { scribe: i }) => {
                        i.flushImmediate();
                    },
                p = (e) => {
                    if (e.disclosure_type && e.impression_id) return { disclosure_type: e.disclosure_type, impression_id: e.impression_id };
                },
                m = (e, t) => {
                    if (!e.id) return e;
                    switch (e.item_type) {
                        case n.Z.ItemType.USER: {
                            const i = a.ZP.select(t, e.id),
                                r = p(e);
                            return i ? { ...e, ...s.Z.getUserItem(i, r) } : e;
                        }
                        case n.Z.ItemType.TWEET: {
                            const i = o.Z.selectHydrated(t, e.id),
                                r = p(e);
                            return i ? { ...e, ...s.Z.getTweetItem(i, r, void 0, void 0, e) } : e;
                        }
                        default:
                            return e;
                    }
                };
        },
        519896: (e, t, i) => {
            i.d(t, { A7: () => n, Nw: () => s, Yf: () => r });
            const r = "instreamVideo",
                n = `rweb/${r}`,
                s = Object.freeze({ TIMELINE_HOME: "TIMELINE_HOME", SEARCH_TWEETS: "SEARCH_TWEETS", PROFILE_TWEETS: "PROFILE_TWEETS", OTHER: "OTHER" });
        },
        109223: (e, t, i) => {
            i.d(t, { jc: () => L, Q3: () => w, C: () => C });
            i(571372), i(136728);
            var r = i(329491),
                n = i(962741),
                s = i(499627),
                o = i(312771),
                a = i(836255),
                d = i(519896),
                c = i(782261),
                l = i(276563);
            function u(e) {
                if (null == e) return null;
                const t = (function (e) {
                        const { card: t, extended_entities: i = {} } = e,
                            r =
                                !!i.media?.length &&
                                i.media.some((e) => {
                                    const t = e.additional_media_info;
                                    return t && t.monetizable;
                                }),
                            n = c.Z.hasMixedMedia(e);
                        return { hasMonetizableMedia: r, hasMultipleMediaItems: n, hasAmplifyCard: !!t && t.name === l.default.CardNames.AMPLIFY && !0 === l.default.getBindingValue(t.binding_values, "dynamic_ads"), hasPeriscopeCard: t?.name === l.default.CardNames.PERISCOPE_BROADCAST, hasBroadcastCard: t?.name === l.default.CardNames.BROADCAST, hasEventCard: !!t && t.name === l.default.CardNames.LIVE_EVENT && ("video" === l.default.getBindingValue(t.binding_values, "media_type") || "broadcast" === l.default.getBindingValue(t.binding_values, "media_type")) };
                    })(e),
                    i = (r = t).hasMonetizableMedia || r.hasAmplifyCard || r.hasPeriscopeCard || r.hasBroadcastCard || r.hasEventCard;
                var r;
                const n =
                        i &&
                        (function (e) {
                            const t = e.hasAmplifyCard || e.hasPeriscopeCard || e.hasBroadcastCard || e.hasEventCard;
                            return e.hasMonetizableMedia && !t;
                        })(t),
                    { hasMultipleMediaItems: s } = t;
                return { hasMultipleMediaItems: s, legacy: i, redesign: n };
            }
            var p = i(516951),
                m = i(541837),
                E = i(615656),
                _ = i(71620),
                f = i(917799);
            const T = "FETCH_PREROLLS",
                g = (0, f.dg)(d.A7, T),
                h = 10;
            function y(e) {
                const t = {},
                    i = {};
                return (
                    Array.isArray(e.video_analytics_scribe) &&
                        e.video_analytics_scribe.length &&
                        e.video_analytics_scribe.forEach((e) => {
                            t[e.tweet_id] = e.video_analytics_scribe_passthrough;
                        }),
                    Array.isArray(e.prerolls) &&
                        e.prerolls.length &&
                        e.prerolls.forEach((e) => {
                            e.media_info && (i[e.tweet_id] = { ...e, videoAnalyticsScribePassthrough: t[e.tweet_id] });
                        }),
                    i
                );
            }
            function b(e, t, i, r, n) {
                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                let s = [];
                const o = [s];
                return (
                    e.forEach((e) => {
                        s.length === h && ((s = []), o.push(s)), s.push(e);
                    }),
                    Promise.all(
                        o.map((e) =>
                            (function (e, t, i, r, n) {
                                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                                const s = { eligibleTweets: e, prerollDisplayLocation: n };
                                t && (s.trigger_preroll = t);
                                const o = (0, f._O)(i, { request: r.withEndpoint(m.Z).fetch, params: s }),
                                    a = i((0, _.zr)(T)({ showToast: !1, [E.ZP.AccessDeniedByBouncer]: { customAction: p.Z } }));
                                return o({ actionTypes: g, context: "FETCH_PREROLLS" }).catch(a);
                            })(e, t, i, r, n),
                        ),
                    ).then((e) => {
                        let t = {};
                        e.forEach((e) => {
                            e && e.prerolls && (t = { ...t, ...y(e) });
                        });
                        const r = { type: L, payload: { ...{ dynamicIVCollection: t }, prerollDisplayLocation: n } };
                        i(r);
                    })
                );
            }
            const I = { fetchStatus: o.ZP.NONE, eligibleTweets: [], promotedMetadataCollection: {}, prerollMetadataCollection: {}, dynamicIVCollection: {}, prerollEligibilityCollection: {} },
                P = "rweb/instreamVideo/DYNAMIC_RESET",
                S = "rweb/instreamVideo/STORE_METADATA",
                L = "rweb/instreamVideo/DYNAMIC_STORE",
                v = { [d.Nw.OTHER]: I };
            s.Z.register({
                [d.Yf]: function (e = v, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case S:
                            if (t.payload) {
                                const { eligibleTweets: i, prerollDisplayLocation: r, prerollEligibilityCollection: n, prerollMetadataCollection: s, promotedMetadataCollection: o } = t.payload;
                                return { ...e, [r]: { ...I, ...e[r], eligibleTweets: i, prerollMetadataCollection: s, promotedMetadataCollection: o, prerollEligibilityCollection: n } };
                            }
                            break;
                        case L:
                            if (t.payload) {
                                const { dynamicIVCollection: i, prerollDisplayLocation: r } = t.payload;
                                return { ...e, [r]: { ...I, ...e[r], dynamicIVCollection: i } };
                            }
                            break;
                        case P:
                            if (t.payload) {
                                const { prerollDisplayLocation: i } = t.payload;
                                return { ...e, [i]: { ...I, ...e[i], dynamicIVCollection: {} } };
                            }
                            break;
                        default:
                            return e;
                    }
                    return e;
                },
            });
            const O = (e, t) => e[d.Yf][t] || I;
            function C(e, t = d.Nw.OTHER) {
                return (i, r, { api: s, featureSwitches: o }) => {
                    if (!Array.isArray(e)) throw new Error("unable to fetch prerolls without timeline entries");
                    if (e.length < 1) return Promise.resolve();
                    const d = r(),
                        c = [],
                        l = {},
                        p = {},
                        m = {};
                    e.forEach((e) => {
                        if (!e.content || e.type !== n.ZP.Tweet) return;
                        const t = e.content,
                            i = a.Z.selectHydrated(d, t.id);
                        if (!i) return;
                        const r = i,
                            { prerollMetadata: s, promotedMetadata: o } = t;
                        if (o) {
                            const { adMetadataContainer: e, disclosureType: t, impressionId: i } = o;
                            (r.promoted_content = { adMetadataContainer: e, disclosure_type: t, impression_id: i }), (p[r.id_str] = o);
                        }
                        const E = u(r),
                            _ = E && E.hasMultipleMediaItems;
                        (m[r.id_str] = E), s?.preroll?.mediaInfo && !_ && (l[r.id_str] = s), E?.legacy && !_ && c.push(r);
                    });
                    i({ type: S, payload: { ...{ eligibleTweets: c, prerollMetadataCollection: l, promotedMetadataCollection: p, prerollEligibilityCollection: m, prerollDisplayLocation: t } } });
                    return b(
                        c.filter((e) => void 0 === l[e.id_str]),
                        null,
                        i,
                        s,
                        t,
                    );
                };
            }
            function w(e, t = d.Nw.OTHER) {
                return (i, n, { api: s, featureSwitches: o }) => {
                    if (e) {
                        const o = O(n(), t),
                            { dynamicIVCollection: a, eligibleTweets: d, prerollEligibilityCollection: c, prerollMetadataCollection: l, promotedMetadataCollection: u } = o,
                            p = a[e],
                            m = u[e],
                            E = c[e];
                        if (p) {
                            i({ type: P, payload: { prerollDisplayLocation: t } });
                            const { dynamic_preroll_type: e, preroll_id: n } = p;
                            return (
                                b(d, { preroll_id: n, dynamic_preroll_type: e }, i, s, t),
                                (function (e, t, i, n) {
                                    const s = { adId: t.preroll_id, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: null, duration_millis: t.media_info.duration_millis, publisher_id_str: t.media_info.publisher_id_str, variants: t.media_info.variants }, promotedContent: { impressionId: void 0, disclosureType: void 0 }, videoAnalyticsScribePassthrough: t.videoAnalyticsScribePassthrough };
                                    if ((t.promoted_content && !i && ((s.promotedContent.impressionId = t.promoted_content.impression_id), (s.promotedContent.disclosureType = t.promoted_content.disclosure_type)), t.media_info.call_to_action)) {
                                        const { type: e, url: n } = t.media_info.call_to_action,
                                            o = (0, r.b)(n, i?.clickTrackingInfo),
                                            a = i?.clickTrackingInfo ? { original_url: n, embedded_url: o, click_tracking_info: i.clickTrackingInfo, embed_status: (0, r.R)(n, i.clickTrackingInfo) } : void 0;
                                        s.mediaInfo.call_to_action = { type: e, url: o, click_tracking_embed_details: a };
                                    }
                                    if (t.media_info.render_ad_by_advertiser_name) {
                                        const { advertiser_name: e, advertiser_profile_image_url: i } = t.media_info;
                                        (s.advertiserName = e), (s.advertiserProfileImageUrl = i);
                                    }
                                    if (n?.redesign) {
                                        (s.shouldAutoAdvance = !1), (s.useRedesignedPrerollUx = !0);
                                        const { advertiser_name: e, advertiser_profile_image_url: i } = t.media_info;
                                        (s.advertiserName = e), (s.advertiserProfileImageUrl = i);
                                    }
                                    return s;
                                })(0, p, m, E)
                            );
                        }
                        const _ = l[e];
                        if (_) {
                            const e = (function (e, t, i, n) {
                                if (!t.preroll || !t.preroll.mediaInfo) return null;
                                const { mediaInfo: s, prerollId: o } = t.preroll,
                                    a = s.videoVariants.map((e) => ({ url: e.url, content_type: e.contentType, bitrate: e.bitrate })),
                                    d = { adId: o, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: void 0, duration_millis: s.durationMillis, publisher_id_str: s.publisherId, variants: a }, promotedContent: { impressionId: void 0, disclosureType: void 0 } };
                                if (s.callToAction) {
                                    const { type: e, url: t } = s.callToAction,
                                        n = (0, r.b)(t, i?.clickTrackingInfo),
                                        o = i?.clickTrackingInfo ? { original_url: t, embedded_url: n, click_tracking_info: i.clickTrackingInfo, embed_status: (0, r.R)(t, i.clickTrackingInfo) } : void 0;
                                    d.mediaInfo.call_to_action = { type: e, url: n, click_tracking_embed_details: o };
                                }
                                if (s.renderAdByAdvertiserName) {
                                    const { advertiserName: e, advertiserProfileImageUrl: t } = s;
                                    (d.advertiserName = e), (d.advertiserProfileImageUrl = t);
                                }
                                if (n?.redesign) {
                                    (d.shouldAutoAdvance = !1), (d.useRedesignedPrerollUx = !0);
                                    const { advertiserName: e, advertiserProfileImageUrl: t } = s;
                                    (d.advertiserName = e), (d.advertiserProfileImageUrl = t);
                                }
                                return d;
                            })(0, _, m, E);
                            if (e) return e;
                        }
                    }
                    return {};
                };
            }
        },
        576469: (e, t, i) => {
            i.d(t, { Z: () => z });
            i(571372), i(136728);
            var r = i(24949),
                n = i(161821),
                s = i(450681),
                o = i(483557),
                a = i(842799),
                d = i(716233),
                c = i(962741),
                l = i(466015),
                u = i(538327),
                p = i(281743),
                m = i(917799),
                E = i(56519),
                _ = i(502909),
                f = i(600823),
                T = i(558369),
                g = i(497294),
                h = i(709318),
                y = i(872788),
                b = i(390387),
                I = i(652881),
                P = i(780936),
                S = i(823885),
                L = i(164692),
                v = i(78259),
                O = i(919022),
                C = i(206795);
            const w = m.dg("lists", "UPLOAD_MEDIA"),
                A = m.dg("lists", "UPDATE_MEDIA"),
                M = (0, _.ZP)({ namespace: "lists" }),
                R = (0, _.tb)(M, {
                    context: "FETCH_LIST",
                    endpoint: (e) => e.withEndpoint(o.ZP).fetchList,
                    params: ([e], t) => {
                        if (e) return { list_id: e };
                        if (t.slug && t.screenName) return { slug: t.slug, owner_screen_name: t.screenName };
                        throw new Error("listId or screenName and slug required to fetch list");
                    },
                }),
                k = (e) => l.WE({ displayType: u.P.List, id: e, sortIndex: Date.now().toString() }),
                Z = (e) => l.$0({ id: e, sortIndex: Date.now().toString() }),
                N = (e, t) => (t && t.entities ? [(0, E.dP)(t.entities)] : []),
                D = (0, r.P1)(
                    M.select,
                    (e) => e,
                    (e, t) => {
                        if (e) {
                            const { full_name: i, user: r } = e;
                            if (i) return i.split("/")[0].substr(1);
                            if (r) {
                                const e = O.ZP.select(t, r);
                                return e?.screen_name;
                            }
                        }
                    },
                ),
                F = {
                    selectByKey: (0, r.P1)(
                        M.selectAll,
                        (e, t) => t,
                        (e) => e,
                        (e, t, i) =>
                            e
                                ? (0, n.Z)(e).find((e) => {
                                      if (e) {
                                          const r = B.selectListAuthorScreenName(i, e.id_str);
                                          return (r && (0, a.Z)(r, e.slug)) === t;
                                      }
                                  })
                                : void 0,
                    ),
                    selectListKeyById: (0, r.P1)(M.select, D, (e, t) => e && t && (0, a.Z)(t, e.slug)),
                    selectLocalMediaId: (0, r.P1)(M.select, (e) => e?.mediaId),
                },
                U = {
                    addUserToList: (0, _.Tx)(M, "addUserToList", {
                        getParams: (e, { userId: t } = {}) => ({ list_id: e, user_id: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).addToList,
                        context: "ADD_USER_TO_LIST",
                        mapResponseToActions:
                            (e, { shouldInjectURTEntry: t = !0, userId: i }, r) =>
                            (n) => {
                                const s = r(),
                                    o = B.select(s, e);
                                if (!n?.entities || !o) return [];
                                const a = k(l.Re(e)),
                                    d = (0, P.Z)(e),
                                    c = (0, S.Z)(i),
                                    u = [M.updateOne(e, { member_count: o.member_count + 1 }), C.Hi({ addTo: i, itemsToAdd: [e] }), c.injectEntry(a)];
                                if (t) {
                                    const e = Z(i);
                                    u.push(d.injectEntry(e));
                                }
                                return u;
                            },
                    }),
                    deleteList: (0, _.Tx)(M, "deleteList", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).deleteList,
                        context: "DELETE_LIST",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const r = i(),
                                n = (0, T.mz)(r).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                s = M.select(r, e),
                                o = (0, b._h)(r);
                            if (!s || !o) return [];
                            const a = l.Re(e),
                                d = (0, L.Z)(o, o);
                            return [(0, h.Vu)({ id: s.id_str, name: s.name, type: y.FO.LIST }), d.removeEntry(a), ...(0, I.C2)(n, i, I.Pq.ownedSubscribedList, e)];
                        },
                    }),
                    deleteListMedia: (0, _.Tx)(M, "deleteListMedia", { getParams: (e) => ({ listId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).deleteBannerImage, context: "DELETE_LIST_MEDIA", mapResponseToActions: (e, t, i) => (t) => (t && t.entities ? [M.updateOne(e, { customBanner: void 0 })] : []) }),
                    editList: (0, _.Tx)(M, "editList", { getParams: (e, { description: t, mode: i, name: r } = {}) => ({ description: t, list_id: e, mode: i, name: r }), getApiMethod: (e) => e.withEndpoint(o.ZP).editList, context: "EDIT_LIST", mapResponseToActions: (e, t, i) => (e) => N(0, e) }),
                    removeUserFromList: (0, _.Tx)(M, "removeUserFromList", {
                        getParams: (e, { userId: t } = {}) => ({ list_id: e, user_id: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).removeFromList,
                        context: "REMOVE_USER_FROM_LIST",
                        mapResponseToActions:
                            (e, { shouldRemoveURTEntry: t = !0, userId: i }, r) =>
                            (r) => {
                                const n = r?.entities?.lists[e];
                                if (n) {
                                    const r = (0, P.Z)(e),
                                        s = (0, S.Z)(i),
                                        o = [C.pO({ removeFrom: i, itemToRemove: e }), s.removeEntry(l.Re(e))];
                                    return o.push(M.updateOne(e, n)), t && o.push(r.removeEntry(l._Y(i))), o;
                                }
                                return [];
                            },
                    }),
                    subscribe: (0, _.Tx)(M, "subscribe", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).createSubscribers,
                        canPerformAction: (e = {}) => e && !e.following,
                        context: "SUBSCRIBE_TO_LIST",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const r = i(),
                                n = (0, T.mz)(r).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                s = [],
                                o = t?.entities?.lists?.[e],
                                a = (0, b._h)(r);
                            if (o && a) {
                                const t = Z(a),
                                    r = (0, v.Z)(e);
                                s.push(M.updateOne(e, o)), s.push(r.injectEntry(t)), s.push(...(0, I.s8)(n, i, I.Pq.ownedSubscribedList, e)), o.pinning && s.push((0, h.Co)({ id: o.id_str, name: o.name, type: y.FO.LIST }));
                            }
                            return s;
                        },
                    }),
                    toggleMute: (0, _.Tx)(M, "toggleMute", {
                        getParams: (e, { mute: t } = {}) => ({ listId: e, mute: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).toggleMute,
                        canPerformAction: (e = {}) => !!e,
                        context: "LIST_TOGGLE_MUTE",
                        mapResponseToActions: (e, t, i) => (r) => {
                            const n = i(),
                                s = M.select(n, e),
                                o = (0, b._h)(n);
                            return s && o && s.muting !== t.mute && r ? [M.updateOne(e, { muting: t.mute })] : [];
                        },
                    }),
                    unsubscribe: (0, _.Tx)(M, "unsubscribe", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).destroySubscribers,
                        canPerformAction: (e = {}) => e && !!e.following,
                        context: "UNSUBSCRIBE_FROM_LIST",
                        mapResponseToActions: (e, t, i) => (t) => {
                            const r = i(),
                                n = (0, T.mz)(r).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                s = [],
                                o = t?.entities?.lists?.[e],
                                a = (0, b._h)(r);
                            if (o && a) {
                                const t = (0, v.Z)(e);
                                s.push(...(0, I.C2)(n, i, I.Pq.ownedSubscribedList, e)), s.push(M.updateOne(e, o)), s.push(t.removeEntry(l._Y(a))), s.push((0, h.Vu)({ id: o.id_str, name: o.name, type: y.FO.LIST }));
                            }
                            return s;
                        },
                    }),
                },
                x = {
                    addLocalMediaId:
                        ({ listId: e, mediaId: t }) =>
                        (i, r, { api: n }) => {
                            i((0, E.dP)({ lists: { [e]: { mediaId: t } } }));
                        },
                    createList:
                        (e) =>
                        (t, i, { api: r, featureSwitches: n }) =>
                            m
                                ._O(t, { request: r.withEndpoint(o.ZP).createList, params: e })({ actionTypes: M.actionTypes.CREATE, context: "CREATE_LIST" }, (e) => {
                                    const t = (0, b._h)(i());
                                    if (e && t) {
                                        const { result: r } = e,
                                            o = k(r),
                                            a = (0, L.Z)(t, t),
                                            d = n.isTrue("responsive_web_timeline_relay_lists_management_enabled");
                                        return (0, s.Z)([e.entities && (0, E.dP)(e.entities), a.injectEntry(o), ...(0, I.s8)(d, i, I.Pq.ownedSubscribedList, r)]);
                                    }
                                    return [];
                                })
                                .then((e) => e?.entities?.lists && e.entities.lists[e.result]),
                    editListMedia:
                        ({ iconCrop: e, listId: t, mediaId: i }) =>
                        (r, n, { api: s }) => {
                            const a = e ? (0, d.U$)(e) : void 0;
                            r({ type: w.REQUEST });
                            const c = g.$i(i, { extraInitParams: a });
                            return r(c).then(
                                ([e]) => {
                                    const i = e.uploadId;
                                    if (i) {
                                        r([{ type: w.SUCCESS }, { type: A.REQUEST }]);
                                        const e = (e) => N(0, e);
                                        return m._O(r, { request: s.withEndpoint(o.ZP).editBannerImage, params: { listId: t, mediaId: i } })({ actionTypes: M.actionTypes.OPTIMISTIC_UPDATE, context: "EDIT_LIST_MEDIA" }, e);
                                    }
                                    return r({ type: w.FAILURE }), Promise.reject(new Error("List media upload failed - no uploadId"));
                                },
                                (e) => (r({ type: w.FAILURE }), Promise.reject(e)),
                            );
                        },
                    removeLocalMediaId: (e) => (t, i) => {
                        t(M.updateOne(e, { mediaId: void 0 }));
                    },
                    toggleIsMember:
                        ({ listId: e, targetUserId: t }) =>
                        (i, r, { api: n }) => {
                            const s = r(),
                                o = (0, b._h)(s);
                            if (!o) return;
                            const a = (0, L.Z)(o, t),
                                d = a.selectEntries(s),
                                u = l.Re(e),
                                p = d.find((e) => e.entryId === u);
                            if (p && p.type === c.ZP.TwitterList) {
                                const e = p.content.isMember;
                                return i(a.updateEntry(u, { isMember: !e }));
                            }
                        },
                },
                B = { ...M, ...R, selectListAuthorScreenName: D, ...F, ...U, ...x };
            p.sv.addForEntity(B, "List", {
                rest_id: (e) => e.id_str,
                name: (e) => e.name,
                description: (e) => e.description,
                facepile_urls: (e) => e.facepile_urls,
                followers_context: (e) => e.followers_context,
                following: (e) => e.following,
                pinning: (e) => e.pinning,
                member_count: (e) => e.member_count,
                members_context: (e) => e.members_context,
                owner_results: (e, t) => {
                    const i = e.user;
                    if (!i) return null;
                    const r = O.ZP.select(t(), i);
                    return r ? O.Sy.reference(r) : null;
                },
                accessibility: (e) => ("private" === e.mode ? "Private" : "Public"),
                custom_banner_media_results: (e) => (e.customBanner ? j.reference(e.customBanner) : null),
                default_banner_media_results: (e) => j.reference(e.defaultBanner),
            });
            const j = p.sv.addForObjectType("ApiMediaResults", { result: (e) => H.reference(e) }),
                H = p.sv.addForObjectType("ApiMedia", { media_info: (e) => G.reference(e) }),
                G = p.sv.addForObjectType("ApiImage", { original_img_url: (e) => e.image.url, original_img_width: (e) => e.image.width, original_img_height: (e) => e.image.height, salient_rect: (e) => (e.crop[0] ? W.reference(e.crop[0]) : null) }),
                W = p.sv.addForObjectType("ApiMediaRect", { height: (e) => e.h, left: (e) => e.x, top: (e) => e.y, width: (e) => e.w }),
                z = f.Z.register(B);
        },
        206795: (e, t, i) => {
            i.d(t, { Hi: () => h, NU: () => b, pO: () => y, g$: () => g });
            var r = i(166852),
                n = i(483557),
                s = i(499627),
                o = i(917799),
                a = i(312771),
                d = i(56519),
                c = i(877848);
            const l = Object.freeze({ REQUEST: "rweb/lists/FETCH_LISTMEMBERSHIPS_REQUEST", SUCCESS: "rweb/lists/FETCH_LISTMEMBERSHIPS_SUCCESS", FAILURE: "rweb/lists/FETCH_LISTMEMBERSHIPS_FAILURE" }),
                u = "rweb/lists/LISTMEMBERSHIPS_ADD_UPDATE",
                p = "rweb/lists/LISTMEMBERSHIPS_REMOVE_UPDATE",
                m = "listMemberships",
                E = [],
                _ = Object.freeze({}),
                f = Object.freeze({ data: { lists: [] }, error: null, fetchStatus: { [c.Yj.BOTTOM]: a.ZP.NONE, [c.Yj.TOP]: a.ZP.NONE } });
            const T = (e, t) => e[m][t],
                g = (e, t) => {
                    const i = T(e, t);
                    return i?.data?.lists || E;
                },
                h = ({ addTo: e, itemsToAdd: t }) => ({ payload: { key: e, items: t }, type: u }),
                y = ({ itemToRemove: e, removeFrom: t }) => ({ payload: { key: t, item: e }, type: p }),
                b = (e, t) => (i, r) => {
                    const s = r(),
                        u = T(s, e),
                        p = ((e, t) => {
                            const i = T(e, t),
                                r = g(e, t);
                            return i ? (0, a.ke)(i.fetchStatus, !!r.length) : a.ZP.NONE;
                        })(s, e);
                    return !u || (p !== a.ZP.LOADING && p !== a.ZP.LOADED)
                        ? i(
                              (
                                  (e, t) =>
                                  (i, r, { api: s }) =>
                                      (0, o._O)(i, { params: t, request: s.withEndpoint(n.ZP).fetchMemberships })({ actionTypes: l, context: "LIST_MEMBERSHIPS", meta: { direction: t.cursor ? c.Yj.BOTTOM : c.Yj.TOP, key: e } }, (e) => {
                                          if (e) {
                                              const { entities: t } = e;
                                              return t ? [(0, d.dP)(t)] : void 0;
                                          }
                                      })
                              )(e, t),
                          )
                        : Promise.resolve();
                };
            s.Z.register({
                [m]: function (e = _, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l.REQUEST: {
                            const { direction: i, key: r } = t.meta,
                                n = e[r] || f,
                                s = { ...n.fetchStatus };
                            return (s[i] = a.ZP.LOADING), { ...e, [r]: { ...n, fetchStatus: s } };
                        }
                        case l.SUCCESS: {
                            const { direction: i, key: n } = t.meta,
                                s = e[n] || f,
                                o = { ...s.fetchStatus };
                            o[i] = a.ZP.LOADED;
                            const d = t.payload?.result?.lists || [],
                                c = (0, r.Z)([...s.data.lists, ...d]);
                            return { ...e, [n]: { ...s, data: { ...{ ...t.payload?.result, ...s.data }, lists: c }, error: null, fetchStatus: o } };
                        }
                        case l.FAILURE: {
                            const { direction: i, key: r } = t.meta,
                                n = { ...(e[r] || f).fetchStatus };
                            return (n[i] = a.ZP.FAILED), { ...e, [r]: { ...e[r], error: t.payload, fetchStatus: n } };
                        }
                        case u: {
                            const { items: i, key: n } = t.payload || {},
                                s = e[n] || f,
                                o = (s.data && s.data.lists) || [],
                                a = (0, r.Z)([...i, ...o]);
                            return { ...e, [n]: { ...s, data: { ...s.data, lists: a } } };
                        }
                        case p: {
                            const { item: i, key: r } = t.payload || {},
                                n = e[r] || f,
                                s = (n.data && n.data.lists) || [];
                            return { ...e, [r]: { ...n, data: { ...n.data, lists: s.filter((e) => i !== e) } } };
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        40037: (e, t, i) => {
            i.d(t, { C: () => c, e: () => l });
            var r = i(969066),
                n = i(163889),
                s = i(917799),
                o = i(836255);
            const a = Object.freeze({ Pin: "pin", Unpin: "unpin" });
            function d(e) {
                const t = (function (e) {
                    return { REQUEST: `PINNED_REPLIES/${e}_REQUEST`, SUCCESS: `PINNED_REPLIES/${e}_SUCCESS`, FAILURE: `PINNED_REPLIES/${e}_FAILURE` };
                })(e);
                return (i) =>
                    (a, d, { api: c }) => {
                        const l = c.withEndpoint(r.Z)[e],
                            u = o.Z.selectHydrated(d(), i),
                            p = u?.conversation_id_str;
                        if (!u || !p) {
                            const t = { tweetId: i, conversationId: p };
                            return (0, n.ZP)(`Pinned Replies: ${e} called with insufficient data.`, { extra: t }), Promise.resolve({ error: null, success: !1 });
                        }
                        const m = (0, s._O)(a, { params: { conversationId: p, tweetId: u.id_str }, request: (e) => l(e).then(({ success: e }) => ({ error: null, success: e })) });
                        return Promise.resolve()
                            .then(() => m({ actionTypes: t, context: `PINNED_REPLIES_${e}` }))
                            .catch((e) => ({ error: e, success: !1 }));
                    };
            }
            const c = d(a.Pin),
                l = d(a.Unpin);
        },
        466380: (e, t, i) => {
            i.d(t, { Z: () => p });
            var r = i(807469),
                n = i(502909),
                s = i(600823);
            const o = (0, n.ZP)({ namespace: "topics" }),
                a = (0, n.tb)(o, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                d = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (i, r) => (i(o.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, i) => {
                    const { entityId: r } = t.meta,
                        n = e.entities[r];
                    return n ? ((e, t, i, r) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [i.id]: { ...i, ...r() } } } : e))(e, t, n, i) : e;
                },
                l = { follow: (0, n.Tx)(o, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, n.Tx)(o, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, n.Tx)(o, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, n.Tx)(o, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...o, ...a, ...d, ...l, customActionTypes: (0, n.X7)(l) },
                p = s.Z.register(u);
        },
        652881: (e, t, i) => {
            i.d(t, { C2: () => g, Pq: () => l, ZP: () => f, s8: () => T });
            i(136728);
            var r = i(66351),
                n = (i(585488), i(483557)),
                s = i(703710),
                o = i(750085),
                a = i(466015),
                d = i(538327),
                c = i(218951);
            const l = Object.freeze({ pinnedLists: "pinnedLists", ownedSubscribedList: "ownedSubscribedList" }),
                u = (e, t) => `${e}-list-${t}`,
                p = (e, t, i = d.P.List, r = Date.now().toString()) => a.WE({ id: e, customEntryId: t, displayType: i, sortIndex: r });
            function m(e) {
                return e.startsWith("pinned-list-module") || e.startsWith("pinnedListModule");
            }
            function E(e) {
                return e.startsWith("owned-subscribed-list-module") || e.startsWith("ownedSubscribedListModule");
            }
            const _ = (e) => (e ? (0, c.Z)({ context: "FETCH_LISTS_MANAGEMENT_PAGE_TIMELINE", formatResponse: o.Z, network: { query: r.Z, variables: ({ count: e, cursor: t }, i) => ({ count: e, cursor: "string" == typeof t ? t : void 0, isListMemberTargetUserId: "0", timelineId: "listsManagementPage", ...(0, s.d)(i.apiClient.featureSwitches) }) }, initialFetchCount: 100, perfKey: "listsManagementPageGraphQL", timelineId: "listsManagementPage" }) : (0, c.Z)({ context: "FETCH_LISTS_MANAGEMENT_PAGE_TIMELINE", formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchListsManagementPageTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, initialFetchCount: 100, perfKey: "listsManagementPageGraphQL", timelineId: "listsManagementPage" })),
                f = _;
            function T(e, t, i, r) {
                const n = [],
                    s = t(),
                    o = _(e),
                    a = o.selectEntries(s),
                    c = i === l.pinnedLists,
                    f = c ? m : E,
                    T = a.find(({ entryId: e }) => f(e));
                if (T) {
                    const e = u(T.entryId, r),
                        t = c ? p(r, e, d.P.ListTile, "-1") : p(r, e, d.P.ListWithPin),
                        i = !c;
                    c && (n.push(o.removeEntry(`${T.entryId}-emptyStateMessage`, !0)), n.push(o.removeEntry(`${T.entryId}-messageprompt-PinnedListsEmptyPrompt`, !0))), n.push(o.injectTimelineModuleEntry(t, T.entryId, { atTop: i }));
                }
                return n;
            }
            function g(e, t, i, r) {
                const n = [],
                    s = t(),
                    o = _(e),
                    a = o.selectEntries(s),
                    d = i === l.pinnedLists ? m : E,
                    c = a.find(({ entryId: e }) => d(e));
                if (c) {
                    const e = u(c.entryId, r);
                    n.push(o.removeEntry(e, !0));
                    const t = `${c.entryId}-${r}`;
                    n.push(o.removeEntry(t, !0));
                }
                return n;
            }
        },
        780936: (e, t, i) => {
            i.d(t, { A: () => d, Z: () => a });
            var r = i(483557),
                n = i(750085),
                s = i(466015),
                o = i(218951);
            const a = (e) => (0, o.Z)({ timelineId: `listMembersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMembersGraphQL, getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, listId: e }) }, context: "FETCH_MEMBERS", perfKey: "membersGraphQL", formatResponse: n.Z }),
                d = (e, t) => (i, r) => {
                    i([...t].map((t) => e.removeEntry((0, s._Y)(t))));
                };
        },
        823885: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(483557),
                n = i(750085),
                s = i(218951);
            const o = (e) => (0, s.Z)({ timelineId: `listMembershipsGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMembershipsGraphQL, getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, userId: e }) }, context: "FETCH_MEMBERSHIPS", perfKey: "membershipsGraphQL", formatResponse: n.Z });
        },
        164692: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(483557),
                n = i(750085),
                s = i(218951);
            const o = (e, t) => (0, s.Z)({ timelineId: `listOwnershipsGraphQL-${t}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchOwnershipsGraphQL, getEndpointParams: ({ count: i, cursor: r }) => ({ count: i, cursor: "string" == typeof r ? r : void 0, userId: e, targetUserId: t }) }, context: "FETCH_OWNERSHIPS", perfKey: "ownershipsGraphQL", formatResponse: n.Z });
        },
        78259: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(483557),
                n = i(750085),
                s = i(218951);
            const o = (e) => (0, s.Z)({ timelineId: `listSubscribersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchSubscribersGraphQL, getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, listId: e }) }, context: "FETCH_SUBSCRIBERS", perfKey: "subscribersGraphQL", formatResponse: n.Z });
        },
        735313: (e, t, i) => {
            i.d(t, { Z: () => n });
            var r = i(87063);
            const n = (e, t) => (i, n, s) => {
                if (e.selectInitialFetchStatus(n()) === r.Z.LOADING) return Promise.resolve();
                const o = e.selectTimeline(n());
                return (
                    i(e.deleteTimeline()),
                    i(e.fetchInitial(t))
                        .then(() => {
                            o && i(e.restoreInjections(o.injections, o.timelineModuleInjections));
                        })
                        .catch((t) => {
                            if (!o || e.selectUnavailableReason(n())) return Promise.reject(t);
                            i(e.restoreTimeline(o));
                        })
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1.a227571a.js.map
