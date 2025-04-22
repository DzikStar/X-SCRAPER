"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-e0b49162"],
    {
        969088: (e, t, r) => {
            r.d(t, { R: () => S, h: () => k });
            var a = r(552322),
                i = r(702024),
                s = r(202784),
                o = r(889906),
                n = (r(703383), r(607499)),
                l = r(970430),
                u = r(598705),
                c = r(808106),
                d = r(364597),
                m = r(544044),
                _ = r(178016);
            const p = r(882157),
                g = r(477082),
                h = r(36534),
                v = r(323484),
                f = r(549092),
                y = ["Impressions", "Engagements", "ProfileVisits", "Follows", "Replies", "Likes", "Retweets", "Bookmark", "Share", "MediaViews", "VideoViews"],
                b = ["Age", "Gender", "EngagementType", "ClientAppId", "IsInNetwork"],
                w = (0, s.createContext)(null);
            function k() {
                const e = (0, s.useContext)(w);
                if (null === e) throw new Error("usePostDetails must be used within a PostDetailsProvider");
                return e;
            }
            function S({ children: e, restId: t, showRealtimeChart: r = !1 }) {
                return (0, a.jsx)(n.S, { fallback: (0, a.jsx)("div", { children: "Error loading post details" }), children: (0, a.jsx)(s.Suspense, { fallback: (0, a.jsx)("div", { className: "pt-16", children: (0, a.jsx)(i.P, { size: "large" }) }), children: (0, a.jsx)(M, { restId: t, showRealtimeChart: r, children: e }) }) });
            }
            function M({ children: e, restId: t, showRealtimeChart: r }) {
                const [i, n] = (0, s.useState)("Impressions"),
                    [k, S] = (0, s.useState)("Impressions"),
                    [M, x] = (0, s.useState)(null),
                    [C, I] = (0, s.useState)(null),
                    [R, D] = (0, s.useState)(!1),
                    [A, L] = (0, s.useState)(!0),
                    P = (0, o.useRelayEnvironment)(),
                    N = (0, u.c9)(t),
                    V = new l.eJ(N),
                    E = (0, s.useMemo)(() => ({ from: (0, c.b)(V), to: (0, d.i)(new l.eJ()) }), [V]),
                    j = (0, s.useMemo)(() => ({ post: { rest_id: t }, metrics: { rest_id: t, requested_metrics: y, from_time: E.from.toISOString(), to_time: E.to.toISOString() }, first48Hours: { rest_id: t, requested_metrics: y, from_time: V.toISOString(), to_time: (0, m.T)(V, 48).toISOString(), granularity: "Hourly" }, audience: { rest_id: t, dimensions: b, from_time_incl: E.from.getTime(), to_time_excl: (0, _.E)(E.to, 1).getTime() } }), [t, E, V]),
                    W = (0, o.useLazyLoadQuery)(p, j.post),
                    U = (0, o.useLazyLoadQuery)(g, j.metrics),
                    O = (0, o.useLazyLoadQuery)(h, j.first48Hours),
                    B = (0, o.useLazyLoadQuery)(v, j.audience),
                    z = (0, s.useCallback)((e, t, r, a, i) => {
                        const s = T[r];
                        let o = e;
                        o = s ? e.filter((e) => e.engagement_type === s) : [];
                        const n = {};
                        o.forEach((e) => {
                            const r = Number.parseInt(e.timestamp, 10);
                            let a;
                            if ("Hour" === t) {
                                const e = new Date(r);
                                e.setMinutes(0, 0, 0), (a = e.getTime());
                            } else {
                                const e = new Date(r);
                                e.setSeconds(0, 0), (a = e.getTime());
                            }
                            n[a] = (n[a] || 0) + e.count;
                        });
                        let l = [];
                        if ("Hour" === t) {
                            const e = Object.entries(n).map(([e, t]) => ({ timestamp: e, value: t }));
                            l = (0, u.Mb)(e, (e) => ({ timestamp: e, value: 0 }), "hourly", a, i).map((e) => ({ timestamp: Number(e.timestamp), value: e.value }));
                        } else {
                            l = [];
                            const e = 6e4 * Math.floor(i / 6e4);
                            for (let t = 59; t >= 0; t--) {
                                const r = e - 6e4 * t;
                                l.push({ timestamp: r, value: n[r] || 0 });
                            }
                        }
                        return l
                            .map((e) => {
                                const r = e.timestamp;
                                let a;
                                if ("Hour" === t) {
                                    a = `${new Date(r).getHours()}h`;
                                } else {
                                    a = `${new Date(r).getMinutes()}m`;
                                }
                                return { time: a, value: e.value, timestamp: r };
                            })
                            .sort((e, t) => e.timestamp - t.timestamp);
                    }, []),
                    F = (0, s.useCallback)(async () => {
                        if (!r) return;
                        A && D(!0);
                        const e = Date.now(),
                            a = e - 36e5,
                            s = e - 1728e5;
                        try {
                            const r = { restId: t, fromTimestamp: s, toTimestamp: e, granularity: "Hour" },
                                n = await (0, o.fetchQuery)(P, f, r).toPromise(),
                                l = z(n?.tweet_result_by_rest_id?.result?.uec_instant_refresh?.items ?? [], "Hour", i, s, e);
                            x(l);
                            const u = { restId: t, fromTimestamp: a, toTimestamp: e, granularity: "OneMinute" },
                                c = await (0, o.fetchQuery)(P, f, u).toPromise(),
                                d = z(c?.tweet_result_by_rest_id?.result?.uec_instant_refresh?.items ?? [], "OneMinute", i, a, e);
                            I(d), A && L(!1);
                        } catch (e) {
                            x(null), I(null);
                        } finally {
                            D(!1);
                        }
                    }, [t, r, P, i, z, A]);
                (0, s.useEffect)(() => {
                    if (!r) return;
                    F();
                    const e = setInterval(() => {
                        F();
                    }, 3e4);
                    return () => clearInterval(e);
                }, [F, r]);
                const q = (0, s.useMemo)(() => {
                    const e = W.tweet_result_by_rest_id?.result;
                    if (!e || "Tweet" !== e.__typename) return null;
                    const a = e.core?.user_results?.result?.legacy?.verified_type || (e.core?.user_results?.result?.is_blue_verified ? "user" : ""),
                        s = "Business" === a ? "business" : "Government" === a ? "government" : "user";
                    let o, l;
                    if (e.core?.user_results?.result?.affiliates_highlighted_label?.label) {
                        const t = e.core.user_results.result.affiliates_highlighted_label.label;
                        o = { label: t.description || "Company", url: t.badge?.url || "" };
                    }
                    if (e.reply_to_results?.result) {
                        const t = e.reply_to_results.result;
                        if ("Tweet" === t.__typename && t.legacy) {
                            const r = t.core?.user_results?.result?.legacy?.verified_type || (t.core?.user_results?.result?.is_blue_verified ? "user" : ""),
                                a = "Business" === r ? "business" : "Government" === r ? "government" : "user";
                            let i;
                            if (t.core?.user_results?.result?.affiliates_highlighted_label?.label) {
                                const e = t.core.user_results.result.affiliates_highlighted_label.label;
                                i = { label: e.description || "Company", url: e.badge?.url || "" };
                            }
                            l = { id: t.rest_id || "", display_text_range: t.legacy.display_text_range ? Array.from(t.legacy.display_text_range) : [], text: t.legacy.full_text || "", createdAt: t.legacy.created_at ? new Date(t.legacy.created_at) : new Date(), author: { id: t.core?.user_results?.result?.rest_id || "", name: t.core?.user_results?.result?.legacy?.name || t.core?.user_results?.result?.legacy?.screen_name || e.legacy?.in_reply_to_screen_name || "", screenName: t.core?.user_results?.result?.legacy?.screen_name || e.legacy?.in_reply_to_screen_name || "", profileImageUrl: t.core?.user_results?.result?.legacy?.profile_image_url_https || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png", verifiedType: a, badges: { ...(a && { verifiedType: a }), ...(i && { affiliation: i }) } }, rawPublicMetrics: { likeCount: t.legacy?.favorite_count?.toString() || "0", replyCount: t.legacy?.reply_count?.toString() || "0", repostCount: t.legacy?.retweet_count?.toString() || "0", quoteCount: "0", bookmarkCount: t.legacy?.bookmark_count?.toString() || "0", impressionCount: t.views?.count?.toString() || "0" }, publicMetrics: { likes: Number.parseInt(t.legacy?.favorite_count?.toString() || "0", 10), replies: Number.parseInt(t.legacy?.reply_count?.toString() || "0", 10), reposts: Number.parseInt(t.legacy?.retweet_count?.toString() || "0", 10), quotes: 0, bookmarks: Number.parseInt(t.legacy?.bookmark_count?.toString() || "0", 10), impressions: Number.parseInt(t.views?.count?.toString() || "0", 10) } };
                        }
                    }
                    const c = { id: e.rest_id, text: e.legacy?.full_text || "", display_text_range: e.legacy?.display_text_range ? Array.from(e.legacy.display_text_range) : void 0, createdAt: e.legacy?.created_at ? new Date(e.legacy.created_at) : new Date(), author: { id: e.core?.user_results?.result?.rest_id || "", name: e.core?.user_results?.result?.legacy?.name || "", screenName: e.core?.user_results?.result?.legacy?.screen_name || "", verifiedType: s, profileImageUrl: e.core?.user_results?.result?.legacy?.profile_image_url_https || "", badges: { ...(s && { verifiedType: s }), ...(o && { affiliation: o }) } }, rawPublicMetrics: { likeCount: e.legacy?.favorite_count?.toString() || "0", replyCount: e.legacy?.reply_count?.toString() || "0", repostCount: e.legacy?.retweet_count?.toString() || "0", quoteCount: "0", bookmarkCount: e.legacy?.bookmark_count?.toString() || "0", impressionCount: e.views?.count?.toString() || "0" }, publicMetrics: { likes: Number.parseInt(e.legacy?.favorite_count?.toString() || "0", 10), replies: Number.parseInt(e.legacy?.reply_count?.toString() || "0", 10), reposts: Number.parseInt(e.legacy?.retweet_count?.toString() || "0", 10), quotes: 0, bookmarks: Number.parseInt(e.legacy?.bookmark_count?.toString() || "0", 10), impressions: Number.parseInt(e.views?.count?.toString() || "0", 10) }, parentPost: l };
                    e.legacy?.entities?.media?.length &&
                        (c.media = e.legacy.entities.media
                            .filter((e) => null != e && "string" == typeof e.type && "string" == typeof e.media_url_https && "string" == typeof e.id_str)
                            .map((e) => {
                                const t = [...(e.video_info?.variants?.filter((e) => e && "string" == typeof e.url && "string" == typeof e.content_type).map((e) => ({ url: e.url, contentType: e.content_type, bitrate: e.bitrate ?? 0 })) ?? [])].sort((e, t) => (t.bitrate || 0) - (e.bitrate || 0)),
                                    r = "animated_gif" === e.type && t.length > 0 ? t[0]?.url || e.media_url_https || "" : e.media_url_https || "",
                                    a = null === e.video_info?.duration_millis ? void 0 : e.video_info?.duration_millis,
                                    i = e.media_url_https || "";
                                return { type: e.type || "", url: r, duration: a, aspectRatio: e.video_info?.aspect_ratio ? Array.from(e.video_info.aspect_ratio) : void 0, altText: e.ext_alt_text ?? void 0, variants: t, previewImage: i };
                            }));
                    const d = ("Tweet" === U.tweet_result_by_rest_id?.result?.__typename && U.tweet_result_by_rest_id.result?.organic_metrics_total) || [],
                        _ = {};
                    Array.isArray(d) &&
                        d.forEach((e) => {
                            e?.metric_type && (_[e.metric_type] = Number(e.metric_value) || 0);
                        });
                    const p = B.tweet_result_by_rest_id?.result,
                        g = "Tweet" === p?.__typename ? Array.from(p.uec_metrics_daily_time_series_count ?? []).filter((e) => null !== e && "object" == typeof e && "age" in e && null != e.age && "client_app_id" in e && null != e.client_app_id && "engagement_type" in e && null != e.engagement_type && "gender" in e && null != e.gender && "is_in_network" in e && null != e.is_in_network) : [],
                        h = "Tweet" === p?.__typename ? Array.from(p.uec_country_metrics_daily_time_series_count ?? []).filter((e) => null !== e && "object" == typeof e && "country" in e && null != e.country && "engagement_type" in e && null != e.engagement_type) : [],
                        v = _.Engagements || 0,
                        f = (v / (_.Impressions || 0 || 1)) * 100,
                        y = { impressions: _.Impressions || 0, engagements: v, likes: _.Likes || 0, replies: _.Replies || 0, retweets: _.Retweets || 0, quotes: _.QuoteTweets || 0, bookmarks: _.Bookmark || 0, profileVisits: _.ProfileVisits || 0, mediaViews: _.MediaViews || 0, videoViews: _.VideoViews || 0, share: _.Share || 0, follows: _.Follows || 0, formattedEngagementRate: `${f.toFixed(1)}%`, timeSeriesData: [], audienceMetrics: { rawAudienceMetrics: g, rawCountryMetrics: h } },
                        b = ("Tweet" === O.tweet_result_by_rest_id?.result?.__typename && O.tweet_result_by_rest_id.result?.organic_metrics_time_series) || [],
                        w = {},
                        T = Array.from(b).reduce(
                            (e, t) => (
                                t.metric_values?.forEach((t) => {
                                    t.metric_type && !e.includes(t.metric_type) && e.push(t.metric_type);
                                }),
                                e
                            ),
                            [],
                        ),
                        x = (0, m.T)(new Date(N), 47).getTime();
                    T.forEach((e) => {
                        const t = Array.from(b).map((t) => ({ timestamp: new Date(t.timestamp?.iso8601_time || "").getTime().toString(), value: t.metric_values?.find((t) => t.metric_type === e)?.metric_value ?? 0 })),
                            r = (0, u.Mb)(t, (e) => ({ timestamp: e, value: 0 }), "hourly", N, x);
                        w[e.toLowerCase()] = r.map((e) => ({ time: `${Math.floor((Number(e.timestamp) - N) / 36e5)}h`, value: e.value ?? 0, timestamp: Number(e.timestamp) }));
                    });
                    const I = c.author.badges ? { verifiedType: c.author.badges.verifiedType || c.author.verifiedType, isProtected: c.author.badges.isProtected, isSubscriber: c.author.badges.isSubscriber, isTranslator: c.author.badges.isTranslator, affiliation: c.author.badges.affiliation } : void 0,
                        D = { id: c.id, text: c.text, createdAt: c.createdAt, display_text_range: c.display_text_range, author: { ...c.author, verifiedType: c.author.verifiedType || "", badges: I }, publicMetrics: { impressions: y.impressions || 0, likes: y.likes || 0, replies: y.replies || 0, reposts: y.retweets || 0, quotes: y.quotes || 0, bookmarks: y.bookmarks || 0 }, media: c.media };
                    return { postData: c, metrics: y, timeRange: E, restId: t, first48HoursData: w, formattedPost: D, overviewSelectedMetric: i, setOverviewSelectedMetric: n, audienceSelectedMetric: k, setAudienceSelectedMetric: S, realtimeHourlyData: M, realtimeMinutelyData: C, isRealtimeLoading: R, showRealtimeChart: r };
                }, [t, W, U, B, O, E, N, i, k, M, C, R, r]);
                return q ? (0, a.jsx)(w.Provider, { value: q, children: e }) : null;
            }
            const T = { Impressions: "Displayed", Likes: "Fav", Replies: "Reply", Retweets: "Retweet", Bookmark: "Bookmark", Share: "Share", ProfileVisits: "ProfilePic", Follows: "Follow", MediaViews: "MediaView", VideoViews: "VideoView", Engagements: null };
        },
        163637: (e, t, r) => {
            r.d(t, { Wq: () => m, py: () => g, R5: () => _ });
            var a = r(552322),
                i = r(702024),
                s = r(202784),
                o = r(889906),
                n = r(607499),
                l = r(598705);
            function u() {
                const e = [],
                    t = new Date(),
                    r = [
                        { text: "Join us in this amazing space! 🎙️ We're discussing the future of tech and innovation. #LiveAudio #TechTalks", media: { type: "photo", url: "https://picsum.photos/800/400", dimensions: { width: 800, height: 400 } } },
                        { text: "Great discussion happening right now! 🔥 Our expert panel is sharing insights on AI and machine learning. #Spaces #AI", media: { type: "video", url: "https://example.com/video.mp4", dimensions: { width: 1280, height: 720 }, duration: 12e4 } },
                        { text: "Don't miss out on this conversation! 🎧 We're taking questions from the audience now. #Live #QandA", media: null },
                        { text: "Incredible insights being shared! 💡 Here's a summary of key points from our discussion on blockchain technology. #Discussion #Blockchain", media: { type: "photo", url: "https://picsum.photos/800/600", dimensions: { width: 800, height: 600 } } },
                        { text: "Thanks everyone for joining! 🙏 Stay tuned for our next space next week. #Community #ThankYou", media: null },
                    ],
                    a = [
                        { id: "1234567890", screenName: "techhost", name: "Tech Host", profileImageUrl: "https://picsum.photos/200", verifiedType: "business", badges: { verifiedType: "business", affiliation: { label: "Tech Company", url: "https://example.com/badge.png" }, isSubscriber: !0 } },
                        { id: "9876543210", screenName: "spacecreator", name: "Space Creator", profileImageUrl: "https://picsum.photos/201", verifiedType: "user", badges: { verifiedType: "user", isSubscriber: !0, isTranslator: !0 } },
                        { id: "5555555555", screenName: "communitymanager", name: "Community Manager", profileImageUrl: "https://picsum.photos/202", verifiedType: "government", badges: { verifiedType: "government", affiliation: { label: "Government Official", url: "https://example.com/gov-badge.png" } } },
                    ];
                for (let i = 0; i < r.length; i++) {
                    const s = r[i],
                        o = a[i % a.length],
                        n = Math.floor(1e3 * Math.random()) + 100,
                        u = Math.floor(200 * Math.random()) + 50,
                        c = Math.floor(300 * Math.random()) + 75,
                        d = Math.floor(1e4 * Math.random()) + 1e3;
                    e.push({ id: `tweet-${i}-${Date.now()}`, text: s.text, createdAt: new Date(t.getTime() - 3e5 * i), author: { ...o }, publicMetrics: { likeCount: (0, l.uf)(n), replyCount: (0, l.uf)(u), repostCount: (0, l.uf)(c), impressionCount: (0, l.uf)(d), quoteCount: (0, l.uf)(Math.floor(100 * Math.random())), bookmarkCount: (0, l.uf)(Math.floor(150 * Math.random())) } });
                }
                return e;
            }
            function c({ children: e, spaceId: t }) {
                const r = (0, s.useMemo)(
                        () => ({
                            id: t,
                            restId: t,
                            state: "Ended",
                            title: "Weekend chat",
                            createdAt: new Date(Date.now() - 864e5).toISOString(),
                            scheduledStart: new Date(Date.now() - 828e5).toISOString(),
                            start: new Date(Date.now() - 792e5).toISOString(),
                            endedAt: new Date(Date.now() - 72e6).toISOString(),
                            metrics: { totalParticipated: 306, totalParticipating: 0, totalLiveListeners: 289, totalReplayWatched: 17 },
                            creator: { restId: "123456789", name: "Zach Warunek", screenName: "ZachWarunek", verifiedType: "business", profileImageUrl: "https://picsum.photos/200", isBlueVerified: !0 },
                            participants: {
                                admins: [{ screenName: "ZachWarunek" }],
                                speakers: [
                                    { id: "1", screenName: "host_user", name: "Space Host", profileImageUrl: "https://picsum.photos/200", badges: { verifiedType: "business", affiliation: { label: "Business", url: "https://example.com/badge.png" } } },
                                    { id: "2", screenName: "cohost_user", name: "Co-Host", profileImageUrl: "https://picsum.photos/201", badges: { verifiedType: "user", affiliation: { label: "Premium", url: "https://example.com/premium.png" } } },
                                    { id: "3", screenName: "speaker1", name: "Tech Expert", profileImageUrl: "https://picsum.photos/202", badges: { verifiedType: "user", affiliation: { label: "Government", url: "https://example.com/gov.png" } } },
                                    { id: "4", screenName: "speaker2", name: "Community Lead", profileImageUrl: "https://picsum.photos/203" },
                                ],
                                listeners: [
                                    { userId: "1", screenName: "listener1" },
                                    { userId: "2", screenName: "listener2" },
                                    { userId: "3", screenName: "listener3" },
                                ],
                            },
                            posts: u(),
                            viewCountGraph: (() => {
                                const e = Array.from({ length: 600 }, (e, t) => {
                                    const r = t / 600;
                                    return 50 + (80 * Math.sin(r * Math.PI) + 20 * Math.sin(r * Math.PI * 2)) + (6 * Math.random() - 3);
                                });
                                return e.map((t, r) => {
                                    const a = Math.max(0, r - 5 + 1),
                                        i = r + 1,
                                        s = e.slice(a, i),
                                        o = s.reduce((e, t) => e + t, 0) / s.length;
                                    return Math.max(0, Math.round(o));
                                });
                            })(),
                            peakConcurrentViewers: 130,
                            isAvailableForReplay: !0,
                            subscriberCount: 0,
                        }),
                        [t],
                    ),
                    i = (0, s.useMemo)(() => ({ isLoading: !1, spaceDetails: r }), [r]);
                return (0, a.jsx)(m.Provider, { value: i, children: e });
            }
            const d = r(587906),
                m = (0, s.createContext)({ spaceDetails: null }),
                _ = () => {
                    const e = (0, s.useContext)(m);
                    if (!e) throw new Error("useSpaceDetails must be used within a SpaceDetailsProvider");
                    return e;
                };
            function p({ children: e, spaceId: t }) {
                const [r, i] = (0, s.useState)(null),
                    n = (0, o.useLazyLoadQuery)(d, { id: t }, { fetchPolicy: "store-or-network" });
                (0, s.useEffect)(() => {
                    const e = n.audio_space_by_rest_id;
                    if (e) {
                        const t = (e, t) => {
                                if (e) {
                                    const t = e.toLowerCase();
                                    if ("business" === t || "government" === t || "user" === t) return t;
                                }
                                if (t) return "user";
                            },
                            r = [];
                        if (e.metadata.tweet_results?.result) {
                            const a = e.metadata.tweet_results.result,
                                i = e.metadata.creator_results.result;
                            if (a.legacy && i && i.legacy?.screen_name) {
                                const e = t(i.legacy?.verified_type, i.is_blue_verified) || "",
                                    s = { id: a.rest_id, text: a.legacy.full_text, createdAt: new Date(a.legacy.created_at), author: { id: i.rest_id || a.rest_id, screenName: i.legacy.screen_name, name: i.legacy?.name || i.legacy.screen_name, profileImageUrl: i.legacy?.profile_image_url_https || "", verifiedType: e, badges: { verifiedType: e, affiliation: i.affiliates_highlighted_label?.label ? { label: i.affiliates_highlighted_label.label.description || "", url: i.affiliates_highlighted_label.label.badge?.url || "" } : void 0 } }, publicMetrics: { likeCount: (0, l.uf)(a.legacy.favorite_count || 0), replyCount: (0, l.uf)(a.legacy.reply_count || 0), repostCount: (0, l.uf)(a.legacy.retweet_count || 0), impressionCount: (0, l.uf)(a.views?.count || 0), quoteCount: (0, l.uf)(0), bookmarkCount: (0, l.uf)(0) } };
                                r.push(s);
                            }
                        }
                        i({
                            id: e.id,
                            restId: e.rest_id,
                            state: e.state,
                            title: e.metadata.title,
                            createdAt: new Date(e.metadata.created_at).toISOString(),
                            scheduledStart: e.metadata.scheduled_start || null,
                            start: e.metadata.start ? new Date(e.metadata.start).toISOString() : null,
                            endedAt: e.metadata.ended_at ? new Date(e.metadata.ended_at).toISOString() : null,
                            metrics: { totalParticipated: e.metadata.total_participated, totalParticipating: e.metadata.total_participating, totalLiveListeners: e.metadata.total_live_listeners, totalReplayWatched: e.metadata.total_replay_watched },
                            creator: e.metadata.creator_results.result ? { restId: e.metadata.creator_results.result.rest_id, name: e.metadata.creator_results.result.legacy?.name, screenName: e.metadata.creator_results.result.legacy?.screen_name, verifiedType: t(e.metadata.creator_results.result.legacy?.verified_type, e.metadata.creator_results.result.is_blue_verified), profileImageUrl: e.metadata.creator_results.result.legacy?.profile_image_url_https, isBlueVerified: e.metadata.creator_results.result.is_blue_verified, badge: e.metadata.creator_results.result.affiliates_highlighted_label?.label ? { url: e.metadata.creator_results.result.affiliates_highlighted_label.label.badge?.url, description: e.metadata.creator_results.result.affiliates_highlighted_label.label.description, labelDisplayType: e.metadata.creator_results.result.affiliates_highlighted_label.label.user_label_display_type, labelType: e.metadata.creator_results.result.affiliates_highlighted_label.label.user_label_type } : void 0 } : void 0,
                            participants: {
                                admins: e.participants.admins.map((e) => ({ screenName: e.twitter_screen_name })),
                                listeners: e.participants.listeners.map((e) => ({ userId: e.user_id, screenName: e.twitter_screen_name })),
                                speakers: e.participants.speakers.map((e, r) => {
                                    const a = e.user_results?.result;
                                    return a ? { id: a.rest_id || `speaker-${r}`, screenName: a.legacy?.screen_name || e.twitter_screen_name, name: a.legacy?.name || e.twitter_screen_name, profileImageUrl: a.legacy?.profile_image_url_https || "", badges: { verifiedType: t(a.legacy?.verified_type, a.is_blue_verified), affiliation: a.affiliates_highlighted_label?.label ? { label: a.affiliates_highlighted_label.label.description || "", url: a.affiliates_highlighted_label.label.badge?.url || "" } : void 0 } } : { id: `speaker-${r}`, screenName: e.twitter_screen_name, name: e.twitter_screen_name, profileImageUrl: "", badges: void 0 };
                                }),
                            },
                            posts: r,
                            viewCountGraph: e.metadata.view_count_graph,
                            peakConcurrentViewers: e.metadata.view_count_graph?.length ? Math.max(...e.metadata.view_count_graph) : 0,
                            isAvailableForReplay: e.metadata.is_space_available_for_replay || !1,
                            subscriberCount: e.subscriber_count || 0,
                        });
                    }
                }, [n]);
                const u = (0, s.useMemo)(() => ({ spaceDetails: r }), [r]);
                return (0, a.jsx)(m.Provider, { value: u, children: e });
            }
            function g({ children: e, spaceId: t, isMockData: r = !1 }) {
                const [o, l] = (0, s.useState)(!1);
                if (
                    ((0, s.useEffect)(() => {
                        l(!0);
                    }, []),
                    !o)
                )
                    return null;
                const u = r ? c : p;
                return (0, a.jsx)(n.S, { fallback: (0, a.jsx)("div", { children: "Error loading space details" }), children: (0, a.jsx)(s.Suspense, { fallback: (0, a.jsx)("div", { className: "p-16", children: (0, a.jsx)(i.P, { size: "large" }) }), children: (0, a.jsx)(u, { spaceId: t, children: e }) }) });
            }
        },
        413740: (e, t, r) => {
            r.d(t, { uo: () => m, br: () => g, BK: () => _ });
            var a = r(552322),
                i = r(202784),
                s = r(889906),
                o = r(607499);
            function n({ children: e }) {
                const t = (0, i.useMemo)(
                        () => [
                            { id: "1vAxRDPpjzYGl", title: "Weekend chat", state: "Ended", startedAt: 1740865751891, endedAt: 1740874970331, scheduledStart: 17408628e5, duration: 9218440, totalParticipantsLive: 289, totalLiveListeners: 289, totalReplays: 17, speakersCount: 9, audienceType: 2, isAvailableForReplay: !0, subscriberCount: null },
                            { id: "1RDGlzVvQZoxL", title: "stuff and things", state: "Ended", startedAt: 1740004628758, endedAt: 1740004824978, scheduledStart: null, duration: 196220, totalParticipantsLive: 51, totalLiveListeners: 51, totalReplays: 0, speakersCount: 0, audienceType: 0, isAvailableForReplay: !1, subscriberCount: null },
                            { id: "1eaJbWbpaNnxX", title: "Subscriber Space #3", state: "Ended", startedAt: 1739052102448, endedAt: 1739064595851, scheduledStart: 1739052e6, duration: 12493403, totalParticipantsLive: 97, totalLiveListeners: 97, totalReplays: 71, speakersCount: 14, audienceType: 2, isAvailableForReplay: !0, subscriberCount: null },
                            { id: "1OdJrXDnkPPKX", title: "Weekend chat", state: "Ended", startedAt: 1737842378412, endedAt: 1737849917196, scheduledStart: 17378424e5, duration: 7538784, totalParticipantsLive: 376, totalLiveListeners: 376, totalReplays: 74, speakersCount: 17, audienceType: 2, isAvailableForReplay: !0, subscriberCount: null },
                            { id: "1YqKDkZaMkExV", title: "Weekend chat", state: "Ended", startedAt: 1737796850312, endedAt: 1737796868468, scheduledStart: null, duration: 18156, totalParticipantsLive: 0, totalLiveListeners: 0, totalReplays: 0, speakersCount: 0, audienceType: 2, isAvailableForReplay: !1, subscriberCount: null },
                            { id: "1BRJjwPwRLoxw", title: "Subscriber space | Q&A", state: "Ended", startedAt: 1737237644936, endedAt: 1737246593252, scheduledStart: 17372376e5, duration: 8948316, totalParticipantsLive: 94, totalLiveListeners: 94, totalReplays: 30, speakersCount: 18, audienceType: 2, isAvailableForReplay: !1, subscriberCount: null },
                            { id: "1OdKrXzeDnVJX", title: "Test", state: "Ended", startedAt: 1736401001820, endedAt: 1736401115861, scheduledStart: null, duration: 114041, totalParticipantsLive: 14, totalLiveListeners: 14, totalReplays: 469, speakersCount: 0, audienceType: 0, isAvailableForReplay: !1, subscriberCount: null },
                        ],
                        [],
                    ),
                    r = (0, i.useMemo)(() => ({ isLoading: !1, spaces: t, hasMoreData: !1, onLoadMore: () => {} }), [t]);
                return (0, a.jsx)(m.Provider, { value: r, children: e });
            }
            var l = r(702024),
                u = r(703383);
            const c = r(263078),
                d = 30,
                m = (0, i.createContext)(null),
                _ = () => {
                    const e = (0, i.useContext)(m);
                    if (!e) throw new Error("useSpacesOverview must be used within a SpacesOverviewProvider");
                    return e;
                };
            function p({ children: e }) {
                const t = (0, s.useRelayEnvironment)(),
                    [r, o] = (0, i.useState)([]),
                    [n, l] = (0, i.useState)(!0),
                    [_, p] = (0, i.useState)(!1),
                    [g, h] = (0, i.useState)(null),
                    [v, f] = (0, i.useState)({ cursor: void 0, limit: d }),
                    y = (0, s.useLazyLoadQuery)(c, v),
                    b = (0, i.useCallback)(
                        (e) =>
                            (
                                e.viewer_v2?.user_results?.result?.created_spaces_slice?.items?.map((e) => {
                                    if (!e) return null;
                                    const t = e.metadata,
                                        r = t?.start ? Number(t.start) : null,
                                        a = t?.ended_at ? Number(t.ended_at) : null,
                                        i = t?.scheduled_start ? Number(t.scheduled_start) : null,
                                        s = r && a ? a - r : null,
                                        o = e.participants?.speakers?.length ?? 0,
                                        n = t?.is_space_available_for_replay ?? !1;
                                    return { id: e.rest_id ?? "", title: t?.title ?? null, state: e.state ?? null, startedAt: r, endedAt: a, scheduledStart: i, duration: s, totalParticipantsLive: t?.total_live_listeners ?? null, totalLiveListeners: t?.total_live_listeners ?? null, totalReplays: t?.total_replay_watched ?? null, speakersCount: o, audienceType: t?.narrow_cast_space_type ?? 0, isAvailableForReplay: n, subscriberCount: e.subscriber_count ?? null };
                                }) ?? []
                            ).filter((e) => null !== e),
                        [],
                    );
                (0, i.useEffect)(() => {
                    const e = b(y);
                    o((t) => {
                        const r = e.filter((e) => !t.some((t) => t.id === e.id));
                        return [...t, ...r];
                    });
                    const t = y.viewer_v2?.user_results?.result?.created_spaces_slice?.slice_info?.next_cursor;
                    h(t ?? null), l(!!t), p(!1);
                }, [y, b]);
                const w = (0, i.useCallback)(() => {
                        if (_ || !n || !g) return;
                        p(!0);
                        const e = { cursor: g, limit: d };
                        (0, u.fetchQuery)(t, c, e)
                            .toPromise()
                            .then(() => {
                                f(e);
                            })
                            .catch(() => {
                                p(!1);
                            });
                    }, [g, t, n, _]),
                    k = (0, i.useMemo)(() => ({ isLoading: _, spaces: r, hasMoreData: n, onLoadMore: w }), [r, _, n, w]);
                return (0, a.jsx)(m.Provider, { value: k, children: e });
            }
            function g({ children: e, isMockData: t = !1 }) {
                const r = t ? n : p;
                return (0, a.jsx)(o.S, { children: (0, a.jsx)(i.Suspense, { fallback: (0, a.jsx)("div", { className: "p-16", children: (0, a.jsx)(l.P, { size: "large" }) }), children: (0, a.jsx)(r, { children: e }) }) });
            }
        },
        52277: (e, t, r) => {
            r.d(t, { oj: () => k, lT: () => M, Mh: () => S });
            var a = r(552322),
                i = r(702024),
                s = r(202784),
                o = r(889906),
                n = r(585053),
                l = r(784657),
                u = r(607499),
                c = r(808106),
                d = r(733936),
                m = r(178016),
                _ = r(889957),
                p = r(970430),
                g = r(598705);
            const h = "https://pbs.twimg.com/amplify_video_thumb/1234567890/img/abcdefghijklmnopqrstuvwxyz.jpg";
            function v(e) {
                const t = e + 1,
                    r = 1e4 * Math.sin(t);
                return r - Math.floor(r);
            }
            const f = [
                    { id: "123", name: "Content Creator", screenName: "creator", verifiedType: "Business", profileImageUrl: "https://picsum.photos/48/48", badges: { verified: !0, type: "Business" } },
                    { id: "456", name: "Studio Productions", screenName: "studioprods", verifiedType: "Business", profileImageUrl: "https://picsum.photos/48/48", badges: { verified: !0, type: "Business" } },
                    { id: "789", name: "Digital Media", screenName: "digimedia", verifiedType: "Business", profileImageUrl: "https://picsum.photos/48/48", badges: { verified: !0, type: "Business" } },
                ],
                y = ["Check out this amazing video! 🎥 #content #viral", "Behind the scenes of our latest production! 🎬 #behindthescenes", "New content alert! 🚨 Watch now and let us know what you think!", "The results are in - our best performing video yet! 📈 #success", "Exclusive sneak peek at what's coming next! 👀 #comingsoon"];
            function b({ children: e, mediaKey: t, timeRange: r, estimatedRevenueVideoDetails: o = !1 }) {
                const [n, l] = (0, s.useState)(!0);
                (0, s.useEffect)(() => {
                    l(!0);
                    const e = setTimeout(() => {
                        l(!1);
                    }, 500);
                    return () => clearTimeout(e);
                }, []);
                const b = (0, s.useMemo)(
                        () =>
                            (function (e, t = !1) {
                                const r = (0, g.pw)(e),
                                    a = r ? (0, c.b)(new p.eJ((0, d.k)(e.to, 90))) : (0, c.b)(new p.eJ(e.from)),
                                    i = (0, c.b)(new p.eJ(e.to)),
                                    s = a.getTime(),
                                    o = Math.floor(70 * v(s + 1) + 30),
                                    n = Math.floor(30 * v(s + 2) + 10),
                                    l = Math.floor(25e3 * v(s + 3) + 5e3),
                                    u = Math.floor(2e4 * v(s + 4) + 5e3),
                                    _ = Math.floor(1e7 * v(s + 5)),
                                    h = t;
                                let f = a;
                                const y = {},
                                    b = 1 + 0.01 * (v(s + 5) - 0.5);
                                let w = 1,
                                    k = 0;
                                const S = { organic: 0, promoted: 0, organicWatchTime: 0, promotedWatchTime: 0, revenue: 0 };
                                for (; f <= i; ) {
                                    const e = Math.min(100, Math.max(0, Math.floor(o * w * (0.7 + 0.6 * v(s + 4 * k + 1))))),
                                        t = Math.min(40, Math.max(0, Math.floor(n * w * (0.7 + 0.6 * v(s + 4 * k + 2))))),
                                        a = Math.max(0, Math.floor(l * w * (0.7 + 0.6 * v(s + 4 * k + 3)))),
                                        i = Math.max(0, Math.floor(u * w * (0.7 + 0.6 * v(s + 4 * k + 4)))),
                                        c = h ? Math.max(0, Math.floor(_ * w * (0.7 + 0.6 * v(s + 4 * k + 5)))) : 0,
                                        d = f.getTime().toString();
                                    if (r) {
                                        (S.organic += e), (S.promoted += t), (S.organicWatchTime += a), (S.promotedWatchTime += i), h && (S.revenue += c);
                                        const r = { organic: { value: S.organic, color: "hsl(var(--colors-blue-500))", label: "Organic Views" } },
                                            s = { organic: { value: S.organicWatchTime, color: "hsl(var(--colors-blue-500))", label: "Organic Watch Time" } };
                                        if (((r.promoted = { value: S.promoted, color: "hsl(var(--colors-green-500))", label: "Promoted Views" }), (s.promoted = { value: S.promotedWatchTime, color: "hsl(var(--colors-green-500))", label: "Promoted Watch Time" }), (y[d] = { views: { values: r }, watchTime: { values: s } }), h)) {
                                            const e = S.revenue > 0 ? +(S.revenue / 1e6).toFixed(2) : 0;
                                            y[d] = { ...y[d], estimatedRevenue: { values: { revenue: { value: e, color: "hsl(var(--colors-green-600))", label: "Estimated Revenue" } } } };
                                        }
                                    } else {
                                        const r = { organic: { value: e, color: "hsl(var(--colors-blue-500))", label: "Organic Views" } },
                                            s = { organic: { value: a, color: "hsl(var(--colors-blue-500))", label: "Organic Watch Time" } };
                                        if (((r.promoted = { value: t, color: "hsl(var(--colors-green-500))", label: "Promoted Views" }), (s.promoted = { value: i, color: "hsl(var(--colors-green-500))", label: "Promoted Watch Time" }), (y[d] = { views: { values: r }, watchTime: { values: s } }), h)) {
                                            const e = c > 0 ? +(c / 1e6).toFixed(2) : 0;
                                            y[d] = { ...y[d], estimatedRevenue: { values: { revenue: { value: e, color: "hsl(var(--colors-green-600))", label: "Estimated Revenue" } } } };
                                        }
                                    }
                                    (f = new p.eJ((0, m.E)(f, 1))), (w *= b), k++;
                                }
                                return y;
                            })(r, o),
                        [r, o],
                    ),
                    w = (0, s.useMemo)(
                        () =>
                            (function (e) {
                                const t = [],
                                    r = (0, c.b)(e.to);
                                for (let e = 0; e < 5; e++) {
                                    const a = r.getTime() + e,
                                        i = Math.floor(7 * v(a)),
                                        s = (0, c.b)((0, d.k)(r, i)),
                                        o = f[Math.floor(v(a + 1) * f.length)],
                                        n = y[Math.floor(v(a + 2) * y.length)],
                                        l = Math.floor(50 * v(a + 3) + 10),
                                        u = Math.floor(10 * v(a + 4) + 2),
                                        m = Math.floor(20 * v(a + 5) + 5),
                                        _ = Math.floor(5 * v(a + 6) + 1),
                                        p = Math.floor(10 * v(a + 7) + 2),
                                        h = Math.floor(200 * v(a + 8) + 50);
                                    t.push({ id: `mock_post_${e + 1}`, text: n, createdAt: new Date(s), author: o, publicMetrics: { likeCount: (0, g.uf)(l), replyCount: (0, g.uf)(u), repostCount: (0, g.uf)(m), quoteCount: (0, g.uf)(_), bookmarkCount: (0, g.uf)(p), impressionCount: (0, g.uf)(h) } });
                                }
                                return t.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime());
                            })(r),
                        [r],
                    ),
                    S = f[0]?.id || "123",
                    M = (0, s.useMemo)(
                        () =>
                            (function (e, t, r, a) {
                                const i = (0, g.pw)(t);
                                let s;
                                s = i ? (0, c.b)(new p.eJ((0, d.k)(t.to, 90))) : (0, c.b)(t.from);
                                const o = (0, _.h)(s),
                                    n = (0, c.b)(t.to),
                                    l = Math.ceil((t.to.getTime() - t.from.getTime()) / 864e5),
                                    u = Math.min(Math.floor(v(o + 100) * (100 * l)), 100 * l),
                                    f = [
                                        { stage: "Start", total: u.toString() },
                                        { stage: "25%", total: Math.floor(0.75 * u).toString() },
                                        { stage: "50%", total: Math.floor(0.5 * u).toString() },
                                        { stage: "75%", total: Math.floor(0.25 * u).toString() },
                                        { stage: "Complete", total: Math.floor(0.1 * u).toString() },
                                    ],
                                    y = [
                                        { name: "US", value: 40 },
                                        { name: "GB", value: 20 },
                                        { name: "CA", value: 15 },
                                        { name: "AU", value: 10 },
                                        { name: "DE", value: 8 },
                                        { name: "FR", value: 7 },
                                    ],
                                    b = [
                                        { name: "iOS", value: 45 },
                                        { name: "Android", value: 35 },
                                        { name: "Web", value: 15 },
                                        { name: "Other", value: 5 },
                                    ],
                                    w = v(o + 400) > 0.3,
                                    k = [];
                                let S = s;
                                for (; S <= n; ) {
                                    const e = S.getTime().toString(),
                                        t = a[e]?.estimatedRevenue,
                                        r = "object" == typeof t && t?.values?.revenue?.value ? Math.floor(1e6 * t.values.revenue.value) : 0;
                                    k.push({ revenue: { revenue_usd: r } }), (S = new p.eJ((0, m.E)(S, 1)));
                                }
                                const M = r && w ? Math.floor(1e8 * v(Number.parseInt(e.replace(/\D/g, "") || "123") + 5e3)) : 0,
                                    T = [],
                                    x = Math.floor(70 * v(o + 600) + 30),
                                    C = Math.floor(30 * v(o + 700) + 5),
                                    I = Math.floor(25e3 * v(o + 800) + 5e3),
                                    R = Math.floor(2e4 * v(o + 900) + 3e3);
                                let D = s;
                                for (; D <= n; ) T.push({ timestamp_ms: (0, _.h)(D), organic_media_counts: { video_views: x.toString(), watch_time_ms: I.toString() }, promoted_media_counts: { video_views: C.toString(), watch_time_ms: R.toString() } }), (D = new p.eJ((0, m.E)(D, 1)));
                                const A = Math.min(T.length * x, 100 * T.length),
                                    L = Math.min(T.length * C, 40 * T.length),
                                    P = T.length * I,
                                    N = T.length * R;
                                return { media_key: e, video_media_name: `Sample Video (${e})`, total_views: { total: u.toString() }, video_completion_rate: { total: 0.75 }, average_watch_time_for_video: Math.floor(17e3 * v(o + 300) + 3e3), video_quartile_views: f, get_country_distribution_for_video: y, get_client_distribution_for_video: b, monetized: w, amplify_revenue: { revenue_usd: M }, amplify_revenue_by_day: r ? k : [], media_info: { __typename: "ApiVideo", duration_millis: Math.floor(105e3 * v(o + 200) + 15e3), preview_image: { original_img_url: h }, variants: [{ content_type: "video/mp4", url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4" }] }, video_detail_time_series: { timeseries: T, total_media_counts: { organic: { video_views: A.toString(), watch_time_ms: P.toString() }, promoted: { video_views: L.toString(), watch_time_ms: N.toString() }, total: { video_views: (A + L).toString(), watch_time_ms: (P + N).toString() } } } };
                            })(t, r, o, b),
                        [t, r, o, b],
                    ),
                    T = { name: `Sample Video (${t})`, previewImage: h, duration: 6e4, url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4", contentType: "video/mp4", views: 1e3, completionRate: 0.75, averageWatchTime: (0, g.LU)(15e3), mediaKey: t, monetized: !0, publishedDate: (0, d.k)(new Date(), 30), allTimeRevenue: M?.amplify_revenue?.revenue_usd ? +(M.amplify_revenue.revenue_usd / 1e6).toFixed(2) : null },
                    x = (0, s.useMemo)(() => {
                        const e = M?.video_detail_time_series?.total_media_counts?.total;
                        let t = 0;
                        if (o && M?.amplify_revenue_by_day) {
                            M.amplify_revenue_by_day.forEach((e) => {
                                e.revenue?.revenue_usd && (t += e.revenue.revenue_usd);
                            }),
                                (t = +(t / 1e6).toFixed(2));
                        }
                        return { views: Number(e?.video_views || 0), watchTime: Number(e?.watch_time_ms || 0), estimatedRevenue: t > 0 ? t : null };
                    }, [M, o]);
                return (0, a.jsx)(u.S, { fallback: (0, a.jsx)("div", { children: "Error loading video details" }), children: (0, a.jsx)(s.Suspense, { fallback: (0, a.jsx)(i.P, { size: "large" }), children: (0, a.jsx)(k.Provider, { value: { isFetching: n, videoResult: M, timeSeriesData: b, posts: w, timeRange: r, mediaKey: t, formattedVideo: T, viewMetrics: x, currentUserId: S }, children: e }) }) });
            }
            var w = r(596017);
            const k = (0, s.createContext)(null);
            function S() {
                const e = (0, s.useContext)(k);
                if (!e) throw new Error("useVideoDetails must be used within a VideoDetailsProvider");
                return e;
            }
            function M({ children: e, mediaKey: t, timeRange: r, isMockData: o = !1, estimatedRevenueVideoDetails: n = !1 }) {
                const [l, c] = (0, s.useState)(!1);
                if (
                    ((0, s.useEffect)(() => {
                        c(!0);
                    }, []),
                    !l)
                )
                    return (0, a.jsx)(i.P, { size: "large" });
                const d = o ? b : T;
                return (0, a.jsx)(u.S, { children: (0, a.jsx)(s.Suspense, { fallback: (0, a.jsx)("div", { className: "pt-16", children: (0, a.jsx)(i.P, { size: "large" }) }), children: (0, a.jsx)(d, { mediaKey: t, timeRange: r, estimatedRevenueVideoDetails: n, children: e }) }) });
            }
            function T({ children: e, mediaKey: t, timeRange: r, estimatedRevenueVideoDetails: u = !1 }) {
                const c = (0, o.useRelayEnvironment)(),
                    [d, m] = (0, s.useState)(!1),
                    _ = (0, s.useRef)(r),
                    [h, v] = (0, s.useState)(() => ({ id: decodeURIComponent(t), ...(!(0, g.pw)(r) && { start_time_ms: r.from.getTime() }), end_time_ms: r.to.getTime(), granularity: (0, g.pw)(r) ? null : "Daily" })),
                    f = (0, o.useLazyLoadQuery)(n.t, h),
                    y = f.viewer_v2?.user_results?.result?.rest_id,
                    b = (0, s.useMemo)(() => ({ id: decodeURIComponent(t) }), [t]),
                    S = (0, o.useLazyLoadQuery)(l.A, b);
                (0, s.useEffect)(() => {
                    (_.current = r), m(!0);
                    const e = { id: decodeURIComponent(t), ...(!(0, g.pw)(r) && { start_time_ms: r.from.getTime() }), end_time_ms: r.to.getTime(), granularity: (0, g.pw)(r) ? null : "Daily" };
                    (0, o.fetchQuery)(c, n.t, e, { fetchPolicy: "store-or-network" })
                        .toPromise()
                        .finally(() => {
                            v(e), m(!1);
                        });
                }, [c, t, r]);
                const M = (0, s.useMemo)(() => {
                        const e = S.api_media_v2?.get_media_posts_results;
                        if (!e?.length) return [];
                        return e
                            .map((e) => {
                                const t = e.result;
                                if (!(t && t.rest_id && t.core && t.legacy)) return null;
                                const r = t.core?.user_results?.result;
                                if (!t.legacy || !r || !r.legacy) return null;
                                const a = t.legacy.created_at_ms ? new Date(t.legacy.created_at_ms) : new Date(),
                                    i = r.is_blue_verified || null != r.legacy?.verified_type,
                                    s = r.legacy?.verified_type ?? (r.is_blue_verified ? "blue" : "");
                                return { id: t.rest_id ?? "", text: t.legacy.full_text ?? "", createdAt: a, author: { id: r.rest_id ?? "", name: r.legacy?.name ?? "", screenName: r.legacy?.screen_name ?? "", profileImageUrl: r.legacy?.profile_image_url_https ?? "", verifiedType: s, badges: { verified: i, type: s } }, publicMetrics: { likeCount: (0, g.uf)(t.legacy.favorite_count ?? 0), replyCount: (0, g.uf)(t.legacy.reply_count ?? 0), repostCount: (0, g.uf)(t.legacy.retweet_count ?? 0), quoteCount: (0, g.uf)(t.legacy.quote_count ?? 0), bookmarkCount: (0, g.uf)(t.legacy.bookmark_count ?? 0), impressionCount: (0, g.uf)(Number(t.views?.count ?? 0)) } };
                            })
                            .filter((e) => null !== e)
                            .sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime());
                    }, [S]),
                    T = (0, s.useMemo)(() => {
                        const e = f.api_media_v2?.video_detail_time_series?.timeseries;
                        if (!e) return {};
                        const t = f.api_media_v2?.amplify_revenue_by_day,
                            a = Boolean(t && t.length > 0 && u),
                            i = (0, g.pw)(r),
                            s = { organic: 0, promoted: 0, organicWatchTime: 0, promotedWatchTime: 0, revenue: 0 },
                            o = e.some((e) => Number(e.promoted_media_counts.video_views || 0) > 0),
                            n = e.some((e) => Number(e.promoted_media_counts.watch_time_ms || 0) > 0),
                            l = {};
                        a &&
                            t &&
                            t.forEach((t, r) => {
                                if (e[r]) {
                                    const a = e[r].timestamp_ms.toString();
                                    l[a] = t.revenue?.revenue_usd || 0;
                                }
                            });
                        const c = [];
                        e.forEach((e) => {
                            const t = e.timestamp_ms.toString();
                            c.push({ timestamp: t, organicViews: Number(e.organic_media_counts.video_views || 0), promotedViews: Number(e.promoted_media_counts.video_views || 0), organicWatchTime: Number(e.organic_media_counts.watch_time_ms || 0), promotedWatchTime: Number(e.promoted_media_counts.watch_time_ms || 0), revenue: l[t] || 0 });
                        });
                        let d = [...c];
                        if (i) {
                            const e = (e) => ({ timestamp: e, organicViews: 0, promotedViews: 0, organicWatchTime: 0, promotedWatchTime: 0, revenue: 0 });
                            if (c.length >= 2) {
                                const t = c.map((e) => Number(e.timestamp)).sort((e, t) => e - t)[0] || 0;
                                if (t > 0) {
                                    const r = (() => {
                                            try {
                                                const e = f.api_media_v2?.media_key?.split("_") || [],
                                                    t = e.length > 1 ? e[1] : f.api_media_v2?.media_key,
                                                    r = t ? (0, g.c9)(t) : null;
                                                return r ? new Date(r) : null;
                                            } catch (e) {
                                                return null;
                                            }
                                        })(),
                                        a = new p.eJ();
                                    if (r ? (0, w.j)(a, r) < 14 : a.getTime() - t < 12096e5) {
                                        a.setUTCMinutes(0, 0, 0);
                                        const r = a.getTime();
                                        d = (0, g.Mb)(c, e, "hourly", t, r);
                                    } else {
                                        a.setUTCHours(0, 0, 0, 0);
                                        const r = a.getTime();
                                        d = (0, g.Mb)(c, e, "daily", t, r);
                                    }
                                }
                            }
                        } else d = (0, g.Mb)(c, (e) => ({ timestamp: e, organicViews: 0, promotedViews: 0, organicWatchTime: 0, promotedWatchTime: 0, revenue: 0 }), "daily", r.from.getTime(), r.to.getTime());
                        d.sort((e, t) => Number(e.timestamp) - Number(t.timestamp));
                        const m = {},
                            _ = (e, t) => {
                                if (a && m[e]) {
                                    const r = t > 0 ? t : 0;
                                    m[e].estimatedRevenue = { values: { revenue: { value: r, color: "hsl(var(--colors-green-600))", label: "Estimated Revenue" } } };
                                }
                            };
                        return (
                            d.forEach((e) => {
                                const { timestamp: t, organicViews: r, promotedViews: l, organicWatchTime: u, promotedWatchTime: c, revenue: d } = e;
                                if (i) {
                                    (s.organic += r), (s.promoted += l), (s.organicWatchTime += u), (s.promotedWatchTime += c), (s.revenue += d);
                                    const e = { organic: { value: s.organic, color: "hsl(var(--colors-blue-500))", label: "Organic Views" } },
                                        i = { organic: { value: s.organicWatchTime, color: "hsl(var(--colors-blue-500))", label: "Organic Watch Time" } };
                                    if ((o && (e.promoted = { value: s.promoted, color: "hsl(var(--colors-green-500))", label: "Promoted Views" }), n && (i.promoted = { value: s.promotedWatchTime, color: "hsl(var(--colors-green-500))", label: "Promoted Watch Time" }), (m[t] = { views: { values: e }, watchTime: { values: i } }), a)) {
                                        const e = s.revenue > 0 ? +(s.revenue / 1e6).toFixed(2) : 0;
                                        _(t, e);
                                    }
                                } else {
                                    const e = { organic: { value: r, color: "hsl(var(--colors-blue-500))", label: "Organic Views" } },
                                        i = { organic: { value: u, color: "hsl(var(--colors-blue-500))", label: "Organic Watch Time" } };
                                    if ((o && (e.promoted = { value: l, color: "hsl(var(--colors-green-500))", label: "Promoted Views" }), n && (i.promoted = { value: c, color: "hsl(var(--colors-green-500))", label: "Promoted Watch Time" }), (m[t] = { views: { values: e }, watchTime: { values: i } }), a)) {
                                        const e = d > 0 ? +(d / 1e6).toFixed(2) : 0;
                                        _(t, e);
                                    }
                                }
                            }),
                            m
                        );
                    }, [f, r, u]),
                    x = f.api_media_v2;
                if (!x) return (0, a.jsx)("div", { className: "pt-16", children: (0, a.jsx)(i.P, { size: "large" }) });
                const C = x.media_info,
                    I = "ApiVideo" === C?.__typename,
                    R = (I && C?.variants) || [],
                    D = R.find((e) => "application/x-mpegURL" === e.content_type),
                    A = R.filter((e) => "video/mp4" === e.content_type),
                    L = D || A[A.length - 1],
                    P = {
                        name: x.video_media_name || "",
                        previewImage: (I && C?.preview_image?.original_img_url) || "",
                        duration: (I && C?.duration_millis) || 0,
                        url: L?.url || "",
                        contentType: L?.content_type || "",
                        views: Number(x.total_views?.total || 0),
                        completionRate: x.video_completion_rate?.total || 0,
                        averageWatchTime: (0, g.LU)(Number(x.average_watch_time_for_video) || 0),
                        mediaKey: x.media_key || "",
                        monetized: x.monetized ?? !1,
                        publishedDate: (() => {
                            try {
                                const e = x.media_key?.split("_") || [],
                                    t = e.length > 1 ? e[1] : x.media_key,
                                    r = t ? (0, g.c9)(t) : null;
                                return r ? new Date(r) : null;
                            } catch (e) {
                                return null;
                            }
                        })(),
                        allTimeRevenue: x?.amplify_revenue?.revenue_usd ? +(x.amplify_revenue.revenue_usd / 1e6).toFixed(2) : null,
                    },
                    N = (0, s.useMemo)(() => {
                        const e = x?.video_detail_time_series?.total_media_counts?.total;
                        let t = 0;
                        if (u && x?.amplify_revenue_by_day) {
                            x.amplify_revenue_by_day.forEach((e) => {
                                e.revenue?.revenue_usd && (t += e.revenue.revenue_usd);
                            }),
                                (t = +(t / 1e6).toFixed(2));
                        }
                        return { views: Number(e?.video_views || 0), watchTime: Number(e?.watch_time_ms || 0), estimatedRevenue: t > 0 ? t : null };
                    }, [x, u]);
                return (0, a.jsx)(k.Provider, { value: { isFetching: d, videoResult: x, timeSeriesData: T, posts: M, timeRange: r, mediaKey: t, formattedVideo: P, viewMetrics: N, currentUserId: y }, children: e });
            }
        },
        945402: (e, t, r) => {
            r.d(t, { v: () => c });
            var a = r(552322),
                i = r(202784),
                s = r(768246),
                o = r(598705),
                n = r(712667);
            const l = 30;
            function u(e, t, r) {
                return Array.from({ length: t }, (t, a) =>
                    (function (e, t) {
                        const r = Date.now() - 24 * (0, o.vd)(0, 30) * 60 * 60 * 1e3,
                            a = 1e3 * (0, o.vd)(30, 300),
                            i = (0, o.vd)(1e7, 1e9),
                            s = t && Math.random() > 0.3;
                        return { duration: a, mediaKey: `13_${r}_${e}`, id: `13_${r}_${e}`, mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", name: `Video ${e + 1}`, previewImage: "https://pbs.twimg.com/ext_tw_video_thumb/1871288438764306432/pu/img/JiVZHeBoad6qZHV4.jpg", viewCount: i, createdAt: r, estimatedRevenue: s ? (0, o.vd)(10, 1e4) : null, monetized: s };
                    })(e + a, r),
                ).sort((e, t) => t.createdAt - e.createdAt);
            }
            function c({ children: e }) {
                const t = "true" === (0, s.l)().get("monetized"),
                    [r, o] = (0, i.useState)([]),
                    [c, d] = (0, i.useState)(!0);
                (0, i.useEffect)(() => {
                    o(u(0, l, t));
                }, [t]);
                const m = (0, i.useCallback)(() => {
                        if (!c) return;
                        const e = u(r.length, l, t);
                        o((t) => [...t, ...e]), d(r.length + e.length < 100);
                    }, [c, r.length, t]),
                    _ = { videoList: r, hasMoreData: c, onLoadMore: m, isLoading: !1 };
                return (0, a.jsx)(n._J.Provider, { value: _, children: e });
            }
        },
        712667: (e, t, r) => {
            r.d(t, { Ch: () => d, _J: () => l, ig: () => m });
            var a = r(552322),
                i = r(202784),
                s = r(889906),
                o = r(598705);
            const n = 30,
                l = (0, i.createContext)(null);
            function u(e) {
                const t = e.viewer_v2?.user_results?.result;
                if (!t || "User" !== t.__typename) return;
                const r = t.get_media_filtered;
                return r && r.cursor ? r : void 0;
            }
            const c = r(587177);
            function d({ children: e, estimatedRevenueEnabled: t }) {
                const r = (0, s.useRelayEnvironment)(),
                    [d, m] = (0, i.useState)([]),
                    [_, p] = (0, i.useState)(!1),
                    [g, h] = (0, i.useState)(null),
                    [v, f] = (0, i.useState)({ cursor: g, limit: n, estimatedRevenueEnabled: t }),
                    y = (0, s.useLazyLoadQuery)(c, v);
                (0, i.useEffect)(() => {
                    m((e) => {
                        const t = (0, o.M5)(y).filter((t) => !e.some((e) => e.mediaKey === t.mediaKey));
                        return [...e, ...t];
                    }),
                        h(u(y)?.cursor);
                }, [y]);
                const b = {
                    videoList: d,
                    hasMoreData: !!g,
                    onLoadMore: (0, i.useCallback)(() => {
                        const e = u(y);
                        if (!e || !e.cursor || _) return;
                        p(!0);
                        const a = { cursor: e.cursor, limit: n, estimatedRevenueEnabled: t };
                        (0, s.fetchQuery)(r, c, a)
                            .toPromise()
                            .then(() => {
                                f(a);
                            })
                            .finally(() => {
                                p(!1);
                            });
                    }, [y, r, _, t]),
                    isLoading: _,
                };
                return (0, a.jsx)(l.Provider, { value: b, children: e });
            }
            function m() {
                const e = (0, i.useContext)(l);
                if (!e) throw new Error("useVideoList must be used within a VideoListProvider");
                return e;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-e0b49162.974323ba.js.map
