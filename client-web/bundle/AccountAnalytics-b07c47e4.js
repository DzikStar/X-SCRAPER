"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-b07c47e4"],
    {
        163637: (e, t, a) => {
            a.d(t, { Wq: () => m, py: () => _, R5: () => p });
            var i = a(552322),
                r = a(193686),
                s = a(202784),
                o = a(889906),
                n = a(134877),
                l = a(598705);
            function u() {
                const e = [],
                    t = new Date(),
                    a = [
                        { text: "Join us in this amazing space! 🎙️ We're discussing the future of tech and innovation. #LiveAudio #TechTalks", media: { type: "photo", url: "https://picsum.photos/800/400", dimensions: { width: 800, height: 400 } } },
                        { text: "Great discussion happening right now! 🔥 Our expert panel is sharing insights on AI and machine learning. #Spaces #AI", media: { type: "video", url: "https://example.com/video.mp4", dimensions: { width: 1280, height: 720 }, duration: 12e4 } },
                        { text: "Don't miss out on this conversation! 🎧 We're taking questions from the audience now. #Live #QandA", media: null },
                        { text: "Incredible insights being shared! 💡 Here's a summary of key points from our discussion on blockchain technology. #Discussion #Blockchain", media: { type: "photo", url: "https://picsum.photos/800/600", dimensions: { width: 800, height: 600 } } },
                        { text: "Thanks everyone for joining! 🙏 Stay tuned for our next space next week. #Community #ThankYou", media: null },
                    ],
                    i = [
                        { id: "1234567890", screenName: "techhost", name: "Tech Host", profileImageUrl: "https://picsum.photos/200", verifiedType: "business", badges: { verifiedType: "business", affiliation: { label: "Tech Company", url: "https://example.com/badge.png" }, isSubscriber: !0 } },
                        { id: "9876543210", screenName: "spacecreator", name: "Space Creator", profileImageUrl: "https://picsum.photos/201", verifiedType: "user", badges: { verifiedType: "user", isSubscriber: !0, isTranslator: !0 } },
                        { id: "5555555555", screenName: "communitymanager", name: "Community Manager", profileImageUrl: "https://picsum.photos/202", verifiedType: "government", badges: { verifiedType: "government", affiliation: { label: "Government Official", url: "https://example.com/gov-badge.png" } } },
                    ];
                for (let r = 0; r < a.length; r++) {
                    const s = a[r],
                        o = i[r % i.length],
                        n = Math.floor(1e3 * Math.random()) + 100,
                        u = Math.floor(200 * Math.random()) + 50,
                        c = Math.floor(300 * Math.random()) + 75,
                        d = Math.floor(1e4 * Math.random()) + 1e3;
                    e.push({ id: `tweet-${r}-${Date.now()}`, text: s.text, createdAt: new Date(t.getTime() - 3e5 * r), author: { ...o }, publicMetrics: { likeCount: (0, l.uf)(n), replyCount: (0, l.uf)(u), repostCount: (0, l.uf)(c), impressionCount: (0, l.uf)(d), quoteCount: (0, l.uf)(Math.floor(100 * Math.random())), bookmarkCount: (0, l.uf)(Math.floor(150 * Math.random())) } });
                }
                return e;
            }
            function c({ children: e, spaceId: t }) {
                const a = (0, s.useMemo)(
                        () => ({
                            id: t,
                            restId: t,
                            state: "Ended",
                            title: "Weekend chat",
                            createdAt: new Date(Date.now() - 864e5).toISOString(),
                            scheduledStart: new Date(Date.now() - 828e5).toISOString(),
                            start: new Date(Date.now() - 792e5).toISOString(),
                            endedAt: new Date(Date.now() - 72e6).toISOString(),
                            duration: 72e5,
                            metrics: { totalParticipated: 306, totalParticipating: 0, totalLiveListeners: 289, totalReplayWatched: 17 },
                            metadata: { narrow_cast_space_type: 2 },
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
                                    const a = t / 600;
                                    return 50 + (80 * Math.sin(a * Math.PI) + 20 * Math.sin(a * Math.PI * 2)) + (6 * Math.random() - 3);
                                });
                                return e.map((t, a) => {
                                    const i = Math.max(0, a - 5 + 1),
                                        r = a + 1,
                                        s = e.slice(i, r),
                                        o = s.reduce((e, t) => e + t, 0) / s.length;
                                    return Math.max(0, Math.round(o));
                                });
                            })(),
                            peakConcurrentViewers: 130,
                            isAvailableForReplay: !0,
                            subscriberCount: 0,
                            narrowCastSpaceType: 2,
                        }),
                        [t],
                    ),
                    r = (0, s.useMemo)(() => ({ isLoading: !1, spaceDetails: a }), [a]);
                return (0, i.jsx)(m.Provider, { value: r, children: e });
            }
            const d = a(587906),
                m = (0, s.createContext)({ spaceDetails: null }),
                p = () => {
                    const e = (0, s.useContext)(m);
                    if (!e) throw new Error("useSpaceDetails must be used within a SpaceDetailsProvider");
                    return e;
                };
            function h({ children: e, spaceId: t }) {
                const [a, r] = (0, s.useState)(null),
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
                            a = [];
                        if (e.metadata.tweet_results?.result) {
                            const i = e.metadata.tweet_results.result,
                                r = e.metadata.creator_results.result;
                            if (i.legacy && r && r.legacy?.screen_name) {
                                const e = t(r.legacy?.verified_type, r.is_blue_verified) || "",
                                    s = { id: i.rest_id, text: i.legacy.full_text, createdAt: new Date(i.legacy.created_at), author: { id: r.rest_id || i.rest_id, screenName: r.legacy.screen_name, name: r.legacy?.name || r.legacy.screen_name, profileImageUrl: r.legacy?.profile_image_url_https || "", verifiedType: e, badges: { verifiedType: e, affiliation: r.affiliates_highlighted_label?.label ? { label: r.affiliates_highlighted_label.label.description || "", url: r.affiliates_highlighted_label.label.badge?.url || "" } : void 0 } }, publicMetrics: { likeCount: (0, l.uf)(i.legacy.favorite_count || 0), replyCount: (0, l.uf)(i.legacy.reply_count || 0), repostCount: (0, l.uf)(i.legacy.retweet_count || 0), impressionCount: (0, l.uf)(i.views?.count || 0), quoteCount: (0, l.uf)(0), bookmarkCount: (0, l.uf)(0) } };
                                a.push(s);
                            }
                        }
                        const i = e.metadata.start && e.metadata.ended_at ? e.metadata.ended_at - e.metadata.start : null;
                        r({
                            id: e.id,
                            restId: e.rest_id,
                            state: e.state,
                            title: e.metadata.title,
                            createdAt: new Date(e.metadata.created_at).toISOString(),
                            scheduledStart: e.metadata.scheduled_start || null,
                            start: e.metadata.start ? new Date(e.metadata.start).toISOString() : null,
                            endedAt: e.metadata.ended_at ? new Date(e.metadata.ended_at).toISOString() : null,
                            duration: i,
                            metrics: { totalParticipated: e.metadata.total_participated, totalParticipating: e.metadata.total_participating, totalLiveListeners: e.metadata.total_live_listeners, totalReplayWatched: e.metadata.total_replay_watched },
                            creator: e.metadata.creator_results.result ? { restId: e.metadata.creator_results.result.rest_id, name: e.metadata.creator_results.result.legacy?.name, screenName: e.metadata.creator_results.result.legacy?.screen_name, verifiedType: t(e.metadata.creator_results.result.legacy?.verified_type, e.metadata.creator_results.result.is_blue_verified), profileImageUrl: e.metadata.creator_results.result.legacy?.profile_image_url_https, isBlueVerified: e.metadata.creator_results.result.is_blue_verified, badge: e.metadata.creator_results.result.affiliates_highlighted_label?.label ? { url: e.metadata.creator_results.result.affiliates_highlighted_label.label.badge?.url, description: e.metadata.creator_results.result.affiliates_highlighted_label.label.description, labelDisplayType: e.metadata.creator_results.result.affiliates_highlighted_label.label.user_label_display_type, labelType: e.metadata.creator_results.result.affiliates_highlighted_label.label.user_label_type } : void 0 } : void 0,
                            participants: {
                                admins: e.participants.admins.map((e) => ({ screenName: e.twitter_screen_name })),
                                listeners: e.participants.listeners.map((e) => ({ userId: e.user_id, screenName: e.twitter_screen_name })),
                                speakers: e.participants.speakers.map((e, a) => {
                                    const i = e.user_results?.result;
                                    return i ? { id: i.rest_id || `speaker-${a}`, screenName: i.legacy?.screen_name || e.twitter_screen_name, name: i.legacy?.name || e.twitter_screen_name, profileImageUrl: i.legacy?.profile_image_url_https || "", badges: { verifiedType: t(i.legacy?.verified_type, i.is_blue_verified), affiliation: i.affiliates_highlighted_label?.label ? { label: i.affiliates_highlighted_label.label.description || "", url: i.affiliates_highlighted_label.label.badge?.url || "" } : void 0 } } : { id: `speaker-${a}`, screenName: e.twitter_screen_name, name: e.twitter_screen_name, profileImageUrl: "", badges: void 0 };
                                }),
                            },
                            posts: a,
                            viewCountGraph: e.metadata.view_count_graph,
                            peakConcurrentViewers: e.metadata.view_count_graph?.length ? Math.max(...e.metadata.view_count_graph) : 0,
                            isAvailableForReplay: e.metadata.is_space_available_for_replay || !1,
                            subscriberCount: e.subscriber_count || 0,
                            narrowCastSpaceType: e.metadata.narrow_cast_space_type || 0,
                        });
                    }
                }, [n]);
                const u = (0, s.useMemo)(() => ({ spaceDetails: a }), [a]);
                return (0, i.jsx)(m.Provider, { value: u, children: e });
            }
            function _({ children: e, spaceId: t, isMockData: a = !1 }) {
                const [o, l] = (0, s.useState)(!1);
                if (
                    ((0, s.useEffect)(() => {
                        l(!0);
                    }, []),
                    !o)
                )
                    return null;
                const u = a ? c : h;
                return (0, i.jsx)(n.S, { fallback: (0, i.jsx)("div", { children: "Error loading space details" }), children: (0, i.jsx)(s.Suspense, { fallback: (0, i.jsx)("div", { className: "p-16", children: (0, i.jsx)(r.P, { size: "large" }) }), children: (0, i.jsx)(u, { spaceId: t, children: e }) }) });
            }
        },
        413740: (e, t, a) => {
            a.d(t, { uo: () => m, br: () => _, BK: () => p });
            var i = a(552322),
                r = a(202784),
                s = a(889906),
                o = a(134877);
            function n({ children: e }) {
                const t = (0, r.useMemo)(
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
                    a = (0, r.useMemo)(() => ({ isLoading: !1, spaces: t, hasMoreData: !1, onLoadMore: () => {} }), [t]);
                return (0, i.jsx)(m.Provider, { value: a, children: e });
            }
            var l = a(193686),
                u = a(703383);
            const c = a(263078),
                d = 30,
                m = (0, r.createContext)(null),
                p = () => {
                    const e = (0, r.useContext)(m);
                    if (!e) throw new Error("useSpacesOverview must be used within a SpacesOverviewProvider");
                    return e;
                };
            function h({ children: e }) {
                const t = (0, s.useRelayEnvironment)(),
                    [a, o] = (0, r.useState)([]),
                    [n, l] = (0, r.useState)(!0),
                    [p, h] = (0, r.useState)(!1),
                    [_, v] = (0, r.useState)(null),
                    [g, f] = (0, r.useState)({ cursor: void 0, limit: d }),
                    b = (0, s.useLazyLoadQuery)(c, g),
                    y = (0, r.useCallback)(
                        (e) =>
                            (
                                e.viewer_v2?.user_results?.result?.created_spaces_slice?.items?.map((e) => {
                                    if (!e) return null;
                                    const t = e.metadata,
                                        a = t?.start ? Number(t.start) : null,
                                        i = t?.ended_at ? Number(t.ended_at) : null,
                                        r = t?.scheduled_start ? Number(t.scheduled_start) : null,
                                        s = a && i ? i - a : null,
                                        o = e.participants?.speakers?.length ?? 0,
                                        n = t?.is_space_available_for_replay ?? !1;
                                    return { id: e.rest_id ?? "", title: t?.title ?? null, state: e.state ?? null, startedAt: a, endedAt: i, scheduledStart: r, duration: s, totalParticipantsLive: t?.total_live_listeners ?? null, totalLiveListeners: t?.total_live_listeners ?? null, totalReplays: t?.total_replay_watched ?? null, speakersCount: o, audienceType: t?.narrow_cast_space_type ?? 0, isAvailableForReplay: n, subscriberCount: e.subscriber_count ?? null };
                                }) ?? []
                            ).filter((e) => null !== e),
                        [],
                    );
                (0, r.useEffect)(() => {
                    const e = y(b);
                    o((t) => {
                        const a = e.filter((e) => !t.some((t) => t.id === e.id));
                        return [...t, ...a];
                    });
                    const t = b.viewer_v2?.user_results?.result?.created_spaces_slice?.slice_info?.next_cursor;
                    v(t ?? null), l(!!t), h(!1);
                }, [b, y]);
                const w = (0, r.useCallback)(() => {
                        if (p || !n || !_) return;
                        h(!0);
                        const e = { cursor: _, limit: d };
                        (0, u.fetchQuery)(t, c, e)
                            .toPromise()
                            .then(() => {
                                f(e);
                            })
                            .catch(() => {
                                h(!1);
                            });
                    }, [_, t, n, p]),
                    M = (0, r.useMemo)(() => ({ isLoading: p, spaces: a, hasMoreData: n, onLoadMore: w }), [a, p, n, w]);
                return (0, i.jsx)(m.Provider, { value: M, children: e });
            }
            function _({ children: e, isMockData: t = !1 }) {
                const a = t ? n : h;
                return (0, i.jsx)(o.S, { children: (0, i.jsx)(r.Suspense, { fallback: (0, i.jsx)("div", { className: "p-16", children: (0, i.jsx)(l.P, { size: "large" }) }), children: (0, i.jsx)(a, { children: e }) }) });
            }
        },
        52277: (e, t, a) => {
            a.d(t, { oj: () => M, lT: () => k, Mh: () => T });
            var i = a(552322),
                r = a(193686),
                s = a(202784),
                o = a(889906),
                n = a(585053),
                l = a(784657),
                u = a(134877),
                c = a(808106),
                d = a(733936),
                m = a(178016),
                p = a(889957),
                h = a(970430),
                _ = a(598705);
            const v = "https://pbs.twimg.com/amplify_video_thumb/1234567890/img/abcdefghijklmnopqrstuvwxyz.jpg";
            function g(e) {
                const t = e + 1,
                    a = 1e4 * Math.sin(t);
                return a - Math.floor(a);
            }
            const f = [
                    { id: "123", name: "Content Creator", screenName: "creator", verifiedType: "Business", profileImageUrl: "https://picsum.photos/48/48", badges: { verified: !0, type: "Business" } },
                    { id: "456", name: "Studio Productions", screenName: "studioprods", verifiedType: "Business", profileImageUrl: "https://picsum.photos/48/48", badges: { verified: !0, type: "Business" } },
                    { id: "789", name: "Digital Media", screenName: "digimedia", verifiedType: "Business", profileImageUrl: "https://picsum.photos/48/48", badges: { verified: !0, type: "Business" } },
                ],
                b = ["Check out this amazing video! 🎥 #content #viral", "Behind the scenes of our latest production! 🎬 #behindthescenes", "New content alert! 🚨 Watch now and let us know what you think!", "The results are in - our best performing video yet! 📈 #success", "Exclusive sneak peek at what's coming next! 👀 #comingsoon"];
            function y({ children: e, mediaKey: t, timeRange: a, estimatedRevenueVideoDetails: o = !1 }) {
                const [n, l] = (0, s.useState)(!0);
                (0, s.useEffect)(() => {
                    l(!0);
                    const e = setTimeout(() => {
                        l(!1);
                    }, 500);
                    return () => clearTimeout(e);
                }, []);
                const y = (0, s.useMemo)(
                        () =>
                            (function (e, t = !1) {
                                const a = (0, _.pw)(e),
                                    i = a ? (0, c.b)(new h.eJ((0, d.k)(e.to, 90))) : (0, c.b)(new h.eJ(e.from)),
                                    r = (0, c.b)(new h.eJ(e.to)),
                                    s = i.getTime(),
                                    o = Math.floor(70 * g(s + 1) + 30),
                                    n = Math.floor(30 * g(s + 2) + 10),
                                    l = Math.floor(25e3 * g(s + 3) + 5e3),
                                    u = Math.floor(2e4 * g(s + 4) + 5e3),
                                    p = Math.floor(1e7 * g(s + 5)),
                                    v = t;
                                let f = i;
                                const b = {},
                                    y = 1 + 0.01 * (g(s + 5) - 0.5);
                                let w = 1,
                                    M = 0;
                                const T = { organic: 0, promoted: 0, organicWatchTime: 0, promotedWatchTime: 0, revenue: 0 };
                                for (; f <= r; ) {
                                    const e = Math.min(100, Math.max(0, Math.floor(o * w * (0.7 + 0.6 * g(s + 4 * M + 1))))),
                                        t = Math.min(40, Math.max(0, Math.floor(n * w * (0.7 + 0.6 * g(s + 4 * M + 2))))),
                                        i = Math.max(0, Math.floor(l * w * (0.7 + 0.6 * g(s + 4 * M + 3)))),
                                        r = Math.max(0, Math.floor(u * w * (0.7 + 0.6 * g(s + 4 * M + 4)))),
                                        c = v ? Math.max(0, Math.floor(p * w * (0.7 + 0.6 * g(s + 4 * M + 5)))) : 0,
                                        d = f.getTime().toString();
                                    if (a) {
                                        (T.organic += e), (T.promoted += t), (T.organicWatchTime += i), (T.promotedWatchTime += r), v && (T.revenue += c);
                                        const a = { organic: { value: T.organic, color: "hsl(var(--colors-blue-500))", label: "Organic Views" } },
                                            s = { organic: { value: T.organicWatchTime, color: "hsl(var(--colors-blue-500))", label: "Organic Watch Time" } };
                                        if (((a.promoted = { value: T.promoted, color: "hsl(var(--colors-green-500))", label: "Promoted Views" }), (s.promoted = { value: T.promotedWatchTime, color: "hsl(var(--colors-green-500))", label: "Promoted Watch Time" }), (b[d] = { views: { values: a }, watchTime: { values: s } }), v)) {
                                            const e = T.revenue > 0 ? +(T.revenue / 1e6).toFixed(2) : 0;
                                            b[d] = { ...b[d], estimatedRevenue: { values: { revenue: { value: e, color: "hsl(var(--colors-green-600))", label: "Estimated Revenue" } } } };
                                        }
                                    } else {
                                        const a = { organic: { value: e, color: "hsl(var(--colors-blue-500))", label: "Organic Views" } },
                                            s = { organic: { value: i, color: "hsl(var(--colors-blue-500))", label: "Organic Watch Time" } };
                                        if (((a.promoted = { value: t, color: "hsl(var(--colors-green-500))", label: "Promoted Views" }), (s.promoted = { value: r, color: "hsl(var(--colors-green-500))", label: "Promoted Watch Time" }), (b[d] = { views: { values: a }, watchTime: { values: s } }), v)) {
                                            const e = c > 0 ? +(c / 1e6).toFixed(2) : 0;
                                            b[d] = { ...b[d], estimatedRevenue: { values: { revenue: { value: e, color: "hsl(var(--colors-green-600))", label: "Estimated Revenue" } } } };
                                        }
                                    }
                                    (f = new h.eJ((0, m.E)(f, 1))), (w *= y), M++;
                                }
                                return b;
                            })(a, o),
                        [a, o],
                    ),
                    w = (0, s.useMemo)(
                        () =>
                            (function (e) {
                                const t = [],
                                    a = (0, c.b)(e.to);
                                for (let e = 0; e < 5; e++) {
                                    const i = a.getTime() + e,
                                        r = Math.floor(7 * g(i)),
                                        s = (0, c.b)((0, d.k)(a, r)),
                                        o = f[Math.floor(g(i + 1) * f.length)],
                                        n = b[Math.floor(g(i + 2) * b.length)],
                                        l = Math.floor(50 * g(i + 3) + 10),
                                        u = Math.floor(10 * g(i + 4) + 2),
                                        m = Math.floor(20 * g(i + 5) + 5),
                                        p = Math.floor(5 * g(i + 6) + 1),
                                        h = Math.floor(10 * g(i + 7) + 2),
                                        v = Math.floor(200 * g(i + 8) + 50);
                                    t.push({ id: `mock_post_${e + 1}`, text: n, createdAt: new Date(s), author: o, publicMetrics: { likeCount: (0, _.uf)(l), replyCount: (0, _.uf)(u), repostCount: (0, _.uf)(m), quoteCount: (0, _.uf)(p), bookmarkCount: (0, _.uf)(h), impressionCount: (0, _.uf)(v) } });
                                }
                                return t.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime());
                            })(a),
                        [a],
                    ),
                    T = f[0]?.id || "123",
                    k = (0, s.useMemo)(
                        () =>
                            (function (e, t, a, i) {
                                const r = (0, _.pw)(t);
                                let s;
                                s = r ? (0, c.b)(new h.eJ((0, d.k)(t.to, 90))) : (0, c.b)(t.from);
                                const o = (0, p.h)(s),
                                    n = (0, c.b)(t.to),
                                    l = Math.ceil((t.to.getTime() - t.from.getTime()) / 864e5),
                                    u = Math.min(Math.floor(g(o + 100) * (100 * l)), 100 * l),
                                    f = [
                                        { stage: "Start", total: u.toString() },
                                        { stage: "25%", total: Math.floor(0.75 * u).toString() },
                                        { stage: "50%", total: Math.floor(0.5 * u).toString() },
                                        { stage: "75%", total: Math.floor(0.25 * u).toString() },
                                        { stage: "Complete", total: Math.floor(0.1 * u).toString() },
                                    ],
                                    b = [
                                        { name: "US", value: 40 },
                                        { name: "GB", value: 20 },
                                        { name: "CA", value: 15 },
                                        { name: "AU", value: 10 },
                                        { name: "DE", value: 8 },
                                        { name: "FR", value: 7 },
                                    ],
                                    y = [
                                        { name: "iOS", value: 45 },
                                        { name: "Android", value: 35 },
                                        { name: "Web", value: 15 },
                                        { name: "Other", value: 5 },
                                    ],
                                    w = g(o + 400) > 0.3,
                                    M = [];
                                let T = s;
                                for (; T <= n; ) {
                                    const e = T.getTime().toString(),
                                        t = i[e]?.estimatedRevenue,
                                        a = "object" == typeof t && t?.values?.revenue?.value ? Math.floor(1e6 * t.values.revenue.value) : 0;
                                    M.push({ revenue: { revenue_usd: a } }), (T = new h.eJ((0, m.E)(T, 1)));
                                }
                                const k = a && w ? Math.floor(1e8 * g(Number.parseInt(e.replace(/\D/g, "") || "123") + 5e3)) : 0,
                                    S = [],
                                    x = Math.floor(70 * g(o + 600) + 30),
                                    C = Math.floor(30 * g(o + 700) + 5),
                                    R = Math.floor(25e3 * g(o + 800) + 5e3),
                                    L = Math.floor(2e4 * g(o + 900) + 3e3);
                                let A = s;
                                for (; A <= n; ) S.push({ timestamp_ms: (0, p.h)(A), organic_media_counts: { video_views: x.toString(), watch_time_ms: R.toString() }, promoted_media_counts: { video_views: C.toString(), watch_time_ms: L.toString() } }), (A = new h.eJ((0, m.E)(A, 1)));
                                const D = Math.min(S.length * x, 100 * S.length),
                                    P = Math.min(S.length * C, 40 * S.length),
                                    I = S.length * R,
                                    N = S.length * L;
                                return { media_key: e, video_media_name: `Sample Video (${e})`, total_views: { total: u.toString() }, video_completion_rate: { total: 0.75 }, average_watch_time_for_video: Math.floor(17e3 * g(o + 300) + 3e3), video_quartile_views: f, get_country_distribution_for_video: b, get_client_distribution_for_video: y, monetized: w, amplify_revenue: { revenue_usd: k }, amplify_revenue_by_day: a ? M : [], media_info: { __typename: "ApiVideo", duration_millis: Math.floor(105e3 * g(o + 200) + 15e3), preview_image: { original_img_url: v }, variants: [{ content_type: "video/mp4", url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4" }] }, video_detail_time_series: { timeseries: S, total_media_counts: { organic: { video_views: D.toString(), watch_time_ms: I.toString() }, promoted: { video_views: P.toString(), watch_time_ms: N.toString() }, total: { video_views: (D + P).toString(), watch_time_ms: (I + N).toString() } } } };
                            })(t, a, o, y),
                        [t, a, o, y],
                    ),
                    S = { name: `Sample Video (${t})`, previewImage: v, duration: 6e4, url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4", contentType: "video/mp4", views: 1e3, completionRate: 0.75, averageWatchTime: (0, _.LU)(15e3), mediaKey: t, monetized: !0, publishedDate: (0, d.k)(new Date(), 30), allTimeRevenue: k?.amplify_revenue?.revenue_usd ? +(k.amplify_revenue.revenue_usd / 1e6).toFixed(2) : null },
                    x = (0, s.useMemo)(() => {
                        const e = k?.video_detail_time_series?.total_media_counts?.total;
                        let t = 0;
                        if (o && k?.amplify_revenue_by_day) {
                            k.amplify_revenue_by_day.forEach((e) => {
                                e.revenue?.revenue_usd && (t += e.revenue.revenue_usd);
                            }),
                                (t = +(t / 1e6).toFixed(2));
                        }
                        return { views: Number(e?.video_views || 0), watchTime: Number(e?.watch_time_ms || 0), estimatedRevenue: t > 0 ? t : null };
                    }, [k, o]);
                return (0, i.jsx)(u.S, { fallback: (0, i.jsx)("div", { children: "Error loading video details" }), children: (0, i.jsx)(s.Suspense, { fallback: (0, i.jsx)(r.P, { size: "large" }), children: (0, i.jsx)(M.Provider, { value: { isFetching: n, videoResult: k, timeSeriesData: y, posts: w, timeRange: a, mediaKey: t, formattedVideo: S, viewMetrics: x, currentUserId: T }, children: e }) }) });
            }
            var w = a(596017);
            const M = (0, s.createContext)(null);
            function T() {
                const e = (0, s.useContext)(M);
                if (!e) throw new Error("useVideoDetails must be used within a VideoDetailsProvider");
                return e;
            }
            function k({ children: e, mediaKey: t, timeRange: a, isMockData: o = !1, estimatedRevenueVideoDetails: n = !1 }) {
                const [l, c] = (0, s.useState)(!1);
                if (
                    ((0, s.useEffect)(() => {
                        c(!0);
                    }, []),
                    !l)
                )
                    return (0, i.jsx)(r.P, { size: "large" });
                const d = o ? y : S;
                return (0, i.jsx)(u.S, { children: (0, i.jsx)(s.Suspense, { fallback: (0, i.jsx)("div", { className: "pt-16", children: (0, i.jsx)(r.P, { size: "large" }) }), children: (0, i.jsx)(d, { mediaKey: t, timeRange: a, estimatedRevenueVideoDetails: n, children: e }) }) });
            }
            function S({ children: e, mediaKey: t, timeRange: a, estimatedRevenueVideoDetails: u = !1 }) {
                const c = (0, o.useRelayEnvironment)(),
                    [d, m] = (0, s.useState)(!1),
                    p = (0, s.useRef)(a),
                    [v, g] = (0, s.useState)(() => ({ id: decodeURIComponent(t), ...(!(0, _.pw)(a) && { start_time_ms: a.from.getTime() }), end_time_ms: a.to.getTime(), granularity: (0, _.pw)(a) ? null : "Daily" })),
                    f = (0, o.useLazyLoadQuery)(n.t, v),
                    b = f.viewer_v2?.user_results?.result?.rest_id,
                    y = (0, s.useMemo)(() => ({ id: decodeURIComponent(t) }), [t]),
                    T = (0, o.useLazyLoadQuery)(l.A, y);
                (0, s.useEffect)(() => {
                    (p.current = a), m(!0);
                    const e = { id: decodeURIComponent(t), ...(!(0, _.pw)(a) && { start_time_ms: a.from.getTime() }), end_time_ms: a.to.getTime(), granularity: (0, _.pw)(a) ? null : "Daily" };
                    (0, o.fetchQuery)(c, n.t, e, { fetchPolicy: "store-or-network" })
                        .toPromise()
                        .finally(() => {
                            g(e), m(!1);
                        });
                }, [c, t, a]);
                const k = (0, s.useMemo)(() => {
                        const e = T.api_media_v2?.get_media_posts_results;
                        if (!e?.length) return [];
                        return e
                            .map((e) => {
                                const t = e.result;
                                if (!(t && t.rest_id && t.core && t.legacy)) return null;
                                const a = t.core?.user_results?.result;
                                if (!t.legacy || !a || !a.legacy) return null;
                                const i = t.legacy.created_at_ms ? new Date(t.legacy.created_at_ms) : new Date(),
                                    r = a.is_blue_verified || null != a.legacy?.verified_type,
                                    s = a.legacy?.verified_type ?? (a.is_blue_verified ? "blue" : "");
                                return { id: t.rest_id ?? "", text: t.legacy.full_text ?? "", createdAt: i, author: { id: a.rest_id ?? "", name: a.legacy?.name ?? "", screenName: a.legacy?.screen_name ?? "", profileImageUrl: a.legacy?.profile_image_url_https ?? "", verifiedType: s, badges: { verified: r, type: s } }, publicMetrics: { likeCount: (0, _.uf)(t.legacy.favorite_count ?? 0), replyCount: (0, _.uf)(t.legacy.reply_count ?? 0), repostCount: (0, _.uf)(t.legacy.retweet_count ?? 0), quoteCount: (0, _.uf)(t.legacy.quote_count ?? 0), bookmarkCount: (0, _.uf)(t.legacy.bookmark_count ?? 0), impressionCount: (0, _.uf)(Number(t.views?.count ?? 0)) } };
                            })
                            .filter((e) => null !== e)
                            .sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime());
                    }, [T]),
                    S = (0, s.useMemo)(() => {
                        const e = f.api_media_v2?.video_detail_time_series?.timeseries;
                        if (!e) return {};
                        const t = f.api_media_v2?.amplify_revenue_by_day,
                            i = Boolean(t && t.length > 0 && u),
                            r = (0, _.pw)(a),
                            s = { organic: 0, promoted: 0, organicWatchTime: 0, promotedWatchTime: 0, revenue: 0 },
                            o = e.some((e) => Number(e.promoted_media_counts.video_views || 0) > 0),
                            n = e.some((e) => Number(e.promoted_media_counts.watch_time_ms || 0) > 0),
                            l = {};
                        i &&
                            t &&
                            t.forEach((t, a) => {
                                if (e[a]) {
                                    const i = e[a].timestamp_ms.toString();
                                    l[i] = t.revenue?.revenue_usd || 0;
                                }
                            });
                        const c = [];
                        e.forEach((e) => {
                            const t = e.timestamp_ms.toString();
                            c.push({ timestamp: t, organicViews: Number(e.organic_media_counts.video_views || 0), promotedViews: Number(e.promoted_media_counts.video_views || 0), organicWatchTime: Number(e.organic_media_counts.watch_time_ms || 0), promotedWatchTime: Number(e.promoted_media_counts.watch_time_ms || 0), revenue: l[t] || 0 });
                        });
                        let d = [...c];
                        if (r) {
                            const e = (e) => ({ timestamp: e, organicViews: 0, promotedViews: 0, organicWatchTime: 0, promotedWatchTime: 0, revenue: 0 });
                            if (c.length >= 2) {
                                const t = c.map((e) => Number(e.timestamp)).sort((e, t) => e - t)[0] || 0;
                                if (t > 0) {
                                    const a = (() => {
                                            try {
                                                const e = f.api_media_v2?.media_key?.split("_") || [],
                                                    t = e.length > 1 ? e[1] : f.api_media_v2?.media_key,
                                                    a = t ? (0, _.c9)(t) : null;
                                                return a ? new Date(a) : null;
                                            } catch (e) {
                                                return null;
                                            }
                                        })(),
                                        i = new h.eJ();
                                    if (a ? (0, w.j)(i, a) < 14 : i.getTime() - t < 12096e5) {
                                        i.setUTCMinutes(0, 0, 0);
                                        const a = i.getTime();
                                        d = (0, _.Mb)(c, e, "hourly", t, a);
                                    } else {
                                        i.setUTCHours(0, 0, 0, 0);
                                        const a = i.getTime();
                                        d = (0, _.Mb)(c, e, "daily", t, a);
                                    }
                                }
                            }
                        } else d = (0, _.Mb)(c, (e) => ({ timestamp: e, organicViews: 0, promotedViews: 0, organicWatchTime: 0, promotedWatchTime: 0, revenue: 0 }), "daily", a.from.getTime(), a.to.getTime());
                        d.sort((e, t) => Number(e.timestamp) - Number(t.timestamp));
                        const m = {},
                            p = (e, t) => {
                                if (i && m[e]) {
                                    const a = t > 0 ? t : 0;
                                    m[e].estimatedRevenue = { values: { revenue: { value: a, color: "hsl(var(--colors-green-600))", label: "Estimated Revenue" } } };
                                }
                            };
                        return (
                            d.forEach((e) => {
                                const { timestamp: t, organicViews: a, promotedViews: l, organicWatchTime: u, promotedWatchTime: c, revenue: d } = e;
                                if (r) {
                                    (s.organic += a), (s.promoted += l), (s.organicWatchTime += u), (s.promotedWatchTime += c), (s.revenue += d);
                                    const e = { organic: { value: s.organic, color: "hsl(var(--colors-blue-500))", label: "Organic Views" } },
                                        r = { organic: { value: s.organicWatchTime, color: "hsl(var(--colors-blue-500))", label: "Organic Watch Time" } };
                                    if ((o && (e.promoted = { value: s.promoted, color: "hsl(var(--colors-green-500))", label: "Promoted Views" }), n && (r.promoted = { value: s.promotedWatchTime, color: "hsl(var(--colors-green-500))", label: "Promoted Watch Time" }), (m[t] = { views: { values: e }, watchTime: { values: r } }), i)) {
                                        const e = s.revenue > 0 ? +(s.revenue / 1e6).toFixed(2) : 0;
                                        p(t, e);
                                    }
                                } else {
                                    const e = { organic: { value: a, color: "hsl(var(--colors-blue-500))", label: "Organic Views" } },
                                        r = { organic: { value: u, color: "hsl(var(--colors-blue-500))", label: "Organic Watch Time" } };
                                    if ((o && (e.promoted = { value: l, color: "hsl(var(--colors-green-500))", label: "Promoted Views" }), n && (r.promoted = { value: c, color: "hsl(var(--colors-green-500))", label: "Promoted Watch Time" }), (m[t] = { views: { values: e }, watchTime: { values: r } }), i)) {
                                        const e = d > 0 ? +(d / 1e6).toFixed(2) : 0;
                                        p(t, e);
                                    }
                                }
                            }),
                            m
                        );
                    }, [f, a, u]),
                    x = f.api_media_v2;
                if (!x) return (0, i.jsx)("div", { className: "pt-16", children: (0, i.jsx)(r.P, { size: "large" }) });
                const C = x.media_info,
                    R = "ApiVideo" === C?.__typename,
                    L = (R && C?.variants) || [],
                    A = L.find((e) => "application/x-mpegURL" === e.content_type),
                    D = L.filter((e) => "video/mp4" === e.content_type),
                    P = A || D[D.length - 1],
                    I = {
                        name: x.video_media_name || "",
                        previewImage: (R && C?.preview_image?.original_img_url) || "",
                        duration: (R && C?.duration_millis) || 0,
                        url: P?.url || "",
                        contentType: P?.content_type || "",
                        views: Number(x.total_views?.total || 0),
                        completionRate: x.video_completion_rate?.total || 0,
                        averageWatchTime: (0, _.LU)(Number(x.average_watch_time_for_video) || 0),
                        mediaKey: x.media_key || "",
                        monetized: x.monetized ?? !1,
                        publishedDate: (() => {
                            try {
                                const e = x.media_key?.split("_") || [],
                                    t = e.length > 1 ? e[1] : x.media_key,
                                    a = t ? (0, _.c9)(t) : null;
                                return a ? new Date(a) : null;
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
                return (0, i.jsx)(M.Provider, { value: { isFetching: d, videoResult: x, timeSeriesData: S, posts: k, timeRange: a, mediaKey: t, formattedVideo: I, viewMetrics: N, currentUserId: b }, children: e });
            }
        },
        945402: (e, t, a) => {
            a.d(t, { v: () => c });
            var i = a(552322),
                r = a(202784),
                s = a(768246),
                o = a(598705),
                n = a(712667);
            const l = 30;
            function u(e, t, a) {
                return Array.from({ length: t }, (t, i) =>
                    (function (e, t) {
                        const a = Date.now() - 24 * (0, o.vd)(0, 30) * 60 * 60 * 1e3,
                            i = 1e3 * (0, o.vd)(30, 300),
                            r = (0, o.vd)(1e7, 1e9),
                            s = t && Math.random() > 0.3;
                        return { duration: i, mediaKey: `13_${a}_${e}`, id: `13_${a}_${e}`, mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", name: `Video ${e + 1}`, previewImage: "https://pbs.twimg.com/ext_tw_video_thumb/1871288438764306432/pu/img/JiVZHeBoad6qZHV4.jpg", viewCount: r, createdAt: a, estimatedRevenue: s ? (0, o.vd)(10, 1e4) : null, monetized: s };
                    })(e + i, a),
                ).sort((e, t) => t.createdAt - e.createdAt);
            }
            function c({ children: e }) {
                const t = "true" === (0, s.l)().get("monetized"),
                    [a, o] = (0, r.useState)([]),
                    [c, d] = (0, r.useState)(!0);
                (0, r.useEffect)(() => {
                    o(u(0, l, t));
                }, [t]);
                const m = (0, r.useCallback)(() => {
                        if (!c) return;
                        const e = u(a.length, l, t);
                        o((t) => [...t, ...e]), d(a.length + e.length < 100);
                    }, [c, a.length, t]),
                    p = { videoList: a, hasMoreData: c, onLoadMore: m, isLoading: !1 };
                return (0, i.jsx)(n._J.Provider, { value: p, children: e });
            }
        },
        712667: (e, t, a) => {
            a.d(t, { Ch: () => d, _J: () => l, ig: () => m });
            var i = a(552322),
                r = a(202784),
                s = a(889906),
                o = a(598705);
            const n = 30,
                l = (0, r.createContext)(null);
            function u(e) {
                const t = e.viewer_v2?.user_results?.result;
                if (!t || "User" !== t.__typename) return;
                const a = t.get_media_filtered;
                return a && a.cursor ? a : void 0;
            }
            const c = a(587177);
            function d({ children: e, estimatedRevenueEnabled: t }) {
                const a = (0, s.useRelayEnvironment)(),
                    [d, m] = (0, r.useState)([]),
                    [p, h] = (0, r.useState)(!1),
                    [_, v] = (0, r.useState)(null),
                    [g, f] = (0, r.useState)({ cursor: _, limit: n, estimatedRevenueEnabled: t }),
                    b = (0, s.useLazyLoadQuery)(c, g);
                (0, r.useEffect)(() => {
                    m((e) => {
                        const t = (0, o.M5)(b).filter((t) => !e.some((e) => e.mediaKey === t.mediaKey));
                        return [...e, ...t];
                    }),
                        v(u(b)?.cursor);
                }, [b]);
                const y = {
                    videoList: d,
                    hasMoreData: !!_,
                    onLoadMore: (0, r.useCallback)(() => {
                        const e = u(b);
                        if (!e || !e.cursor || p) return;
                        h(!0);
                        const i = { cursor: e.cursor, limit: n, estimatedRevenueEnabled: t };
                        (0, s.fetchQuery)(a, c, i)
                            .toPromise()
                            .then(() => {
                                f(i);
                            })
                            .finally(() => {
                                h(!1);
                            });
                    }, [b, a, p, t]),
                    isLoading: p,
                };
                return (0, i.jsx)(l.Provider, { value: y, children: e });
            }
            function m() {
                const e = (0, r.useContext)(l);
                if (!e) throw new Error("useVideoList must be used within a VideoListProvider");
                return e;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-b07c47e4.97108f6a.js.map
