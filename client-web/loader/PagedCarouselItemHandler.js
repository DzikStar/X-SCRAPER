"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PagedCarouselItemHandler"],
    {
        64899: (e, t, r) => {
            r.d(t, { H: () => s });
            var o = r(202784),
                n = r(516951);
            const s = o.createContext({ handleNextSlide: n.Z });
        },
        301758: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(807896),
                n = r(202784),
                s = r(235902),
                c = r(521288),
                a = r(401388),
                i = r(988566),
                l = r(725516),
                d = r(443781),
                u = r(71620),
                p = r(668214),
                m = r(491963),
                C = r(836255);
            const w = (e, t) => t.tweetId,
                h = (e, t) => {
                    const r = t.tweetId,
                        o = r && C.Z.select(e, r);
                    return o ? (0, m.z0)(e, o) : void 0;
                },
                b = (0, p.Z)()
                    .propsFromState(() => ({ community: h, hydratedTweet: C.Z.createHydratedTweetSelector(w) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: m.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: r, hydratedTweet: u, onAvatarClick: p, onMediaClick: m, onPress: C, onScreenNameClick: w, tweetId: h, withBirdwatchPivot: b = !0, ..._ }) => {
                    const { featureSwitches: y, viewerUserId: E } = n.useContext(d.rC),
                        x = (0, l.z)(),
                        k = u?.community_id_str;
                    n.useEffect(() => {
                        k && (0, a.Z)(e) && r(k).catch(t());
                    }, [e, k, t, r]);
                    const T = n.useCallback(
                            (e) => {
                                x.scribeAction("click"), C && C(e);
                            },
                            [C, x],
                        ),
                        g = !!b,
                        f = u && (0, i.D$)(u, E, e),
                        I = f && (0, i.rl)(f);
                    return n.createElement(s.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => y.isTrue("responsive_web_edit_tweet_enabled") || y.isTrue("subscriptions_feature_labs_1004") } }, n.createElement(c.Z, (0, o.Z)({}, _, { loggedInUserId: E, onAvatarClick: p, onMediaClick: m, onPress: T, onScreenNameClick: w, shouldShowAltLabelAlways: !0, socialContextProps: I, tweet: u, withBirdwatchPivot: g })));
                });
        },
        562154: (e, t, r) => {
            r.r(t), r.d(t, { default: () => T });
            var o = r(459643),
                n = r(942893),
                s = r(351322),
                c = r(202784),
                a = r(325686),
                i = r(154003),
                l = r(392237),
                d = r(725516),
                u = r(64899);
            const p = l.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden", marginStart: e.spaces.space16, marginEnd: e.spaces.space16 }, buttonsContainer: { flexDirection: "row", justifyContent: "space-between" }, button: { flexGrow: 1, marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, leftControl: { marginStart: e.spaces.space12, marginEnd: e.spaces.space4 }, rightControl: { marginEnd: e.spaces.space12, marginStart: e.spaces.space4 } })),
                m = (e) => {
                    const { content: t, showLessOnClick: r, showLessText: o, showMoreOnClick: n, showMoreText: s } = e,
                        l = c.useRef(),
                        m = (0, d.z)(),
                        C = (e) => (t) => {
                            m.scribeAction("show_more"), n(), l.current?.blur(), e(t);
                        },
                        w = (e) => (t) => {
                            m.scribeAction("show_less"), r(), l.current?.focus(), l.current?.blur(), e(t);
                        },
                        h = () => {
                            m.scribeAction("click");
                        };
                    return c.createElement(u.H.Consumer, null, ({ handleNextSlide: e }) => c.createElement(a.Z, { style: p.root }, c.createElement(a.Z, { onClick: h }, t), c.createElement(a.Z, { style: p.buttonsContainer }, c.createElement(i.ZP, { onPress: w(e), size: "medium", style: [p.button, p.leftControl], type: "primaryOutlined" }, o), c.createElement(i.ZP, { onPress: C(e), ref: l, size: "medium", style: [p.button, p.rightControl], type: "primaryFilled" }, s))));
                };
            var C = r(23679),
                w = r(301758),
                h = r(71620),
                b = r(668214),
                _ = r(836255),
                y = r(960919);
            const E = (e, t) => {
                    const { entry: r } = t,
                        o = r.content.content.pagedCarouselFeedbackItem ? r.content.content.pagedCarouselFeedbackItem.content.tweet.id : void 0;
                    return o ? _.Z.select(e, o) : void 0;
                },
                x = (e) => {
                    const { applyReactionInstructions: t, createLocalApiErrorHandler: r, entry: o, processCallback: n, tweet: s } = e,
                        a = s?.id_str,
                        i = o.content.content.pagedCarouselFeedbackItem ? o.content.content.pagedCarouselFeedbackItem : void 0,
                        l = c.useCallback(() => {
                            i && (n(i.showMoreCallback).catch(r()), t({ entry: o, triggerName: C.K.ON_SHOW_MORE }));
                        }, [r, t, o, n, i]),
                        d = c.useCallback(() => {
                            i && n(i.showLessCallback).catch(r());
                        }, [r, n, i]),
                        u = c.useMemo(() => (a ? c.createElement(w.Z, { shouldShowBorder: !1, tweetId: a }) : null), [a]);
                    return i && s ? c.createElement(m, { content: u, showLessOnClick: d, showLessText: i.showLessText, showMoreOnClick: l, showMoreText: i.showMoreText }) : null;
                },
                k = (0, b.Z)()
                    .propsFromState(() => ({ tweet: E }))
                    .propsFromActions(({ module: e }) => ({ applyReactionInstructions: e.applyReactionInstructions, createLocalApiErrorHandler: (0, h.zr)("PAGED_CAROUSEL_FEEDBACK_ITEM"), processCallback: y.Z }))(c.memo(x)),
                T = s.iH({ component: k, getScribeDataItem: (e) => n.Z.getPagedCarouselTweetURTEntryItem(e), shouldDisplayBorder: (0, o.Z)(!1), isFocusable: (0, o.Z)(!0) }).getHandler();
        },
        988566: (e, t, r) => {
            r.d(t, { D$: () => a, Du: () => d, GK: () => l, Iv: () => p, pz: () => m, rl: () => u });
            var o = r(202784),
                n = r(688715),
                s = r(946409),
                c = r(788993);
            const a = (e, t, r) => (e.retweeted_status ? i(e, t) : e.community_id_str && r ? l(e, r) : void 0),
                i = (e, t) => {
                    if (e.retweeted_status) return { contextType: c.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                l = (e, t) => ({ contextType: c.Z.Community, landingUrl: { url: (0, n.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                d = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: r }) => {
                    if (t?.topicContext) {
                        const o = t.topicContext;
                        return { contextType: e ? c.Z.TextOnly : c.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${o.topicId}`, urlType: "DeepLink" }, text: r?.name, topicContext: o };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                u = (e) => {
                    const { contextType: t, landingUrl: r, text: o } = e;
                    return { link: r ? (0, s.s9)(r) : void 0, text: o, contextType: t };
                },
                p = { contextType: c.Z.Pin, text: "" },
                m = o.createContext(void 0);
        },
        23679: (e, t, r) => {
            r.d(t, { K: () => o });
            const o = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PagedCarouselItemHandler.93d4105a.js.map
