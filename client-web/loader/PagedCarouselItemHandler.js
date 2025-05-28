"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PagedCarouselItemHandler", "icons/IconFeedback-js"],
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
                a = r(521288),
                c = r(401388),
                i = r(988566),
                l = r(725516),
                d = r(443781),
                u = r(71620),
                m = r(668214),
                p = r(491963),
                h = r(836255);
            const w = (e, t) => t.tweetId,
                C = (e, t) => {
                    const r = t.tweetId,
                        o = r && h.Z.select(e, r);
                    return o ? (0, p.z0)(e, o) : void 0;
                },
                b = (0, m.Z)()
                    .propsFromState(() => ({ community: C, hydratedTweet: h.Z.createHydratedTweetSelector(w) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: p.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: r, hydratedTweet: u, onAvatarClick: m, onMediaClick: p, onPress: h, onScreenNameClick: w, tweetId: C, withBirdwatchPivot: b = !0, ...y }) => {
                    const { featureSwitches: E, viewerUserId: g } = n.useContext(d.rC),
                        _ = (0, l.z)(),
                        v = u?.community_id_str;
                    n.useEffect(() => {
                        v && (0, c.Z)(e) && r(v).catch(t());
                    }, [e, v, t, r]);
                    const x = n.useCallback(
                            (e) => {
                                _.scribeAction("click"), h && h(e);
                            },
                            [h, _],
                        ),
                        Z = !!b,
                        k = u && (0, i.D$)(u, g, e),
                        T = k && (0, i.rl)(k);
                    return n.createElement(s.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => E.isTrue("responsive_web_edit_tweet_enabled") || E.isTrue("subscriptions_feature_labs_1004") } }, n.createElement(a.Z, (0, o.Z)({}, y, { loggedInUserId: g, onAvatarClick: m, onMediaClick: p, onPress: x, onScreenNameClick: w, shouldShowAltLabelAlways: !0, socialContextProps: T, tweet: u, withBirdwatchPivot: Z })));
                });
        },
        562154: (e, t, r) => {
            r.r(t), r.d(t, { default: () => x });
            var o = r(459643),
                n = r(942893),
                s = r(351322),
                a = r(202784),
                c = r(325686),
                i = r(154003),
                l = r(392237),
                d = r(725516),
                u = r(64899);
            const m = l.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden", marginStart: e.spaces.space16, marginEnd: e.spaces.space16 }, buttonsContainer: { flexDirection: "row", justifyContent: "space-between" }, button: { flexGrow: 1, marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, leftControl: { marginStart: e.spaces.space12, marginEnd: e.spaces.space4 }, rightControl: { marginEnd: e.spaces.space12, marginStart: e.spaces.space4 } })),
                p = (e) => {
                    const { content: t, showLessOnClick: r, showLessText: o, showMoreOnClick: n, showMoreText: s } = e,
                        l = a.useRef(),
                        p = (0, d.z)(),
                        h = (e) => (t) => {
                            p.scribeAction("show_more"), n(), l.current?.blur(), e(t);
                        },
                        w = (e) => (t) => {
                            p.scribeAction("show_less"), r(), l.current?.focus(), l.current?.blur(), e(t);
                        },
                        C = () => {
                            p.scribeAction("click");
                        };
                    return a.createElement(u.H.Consumer, null, ({ handleNextSlide: e }) => a.createElement(c.Z, { style: m.root }, a.createElement(c.Z, { onClick: C }, t), a.createElement(c.Z, { style: m.buttonsContainer }, a.createElement(i.ZP, { onPress: w(e), size: "medium", style: [m.button, m.leftControl], type: "primaryOutlined" }, o), a.createElement(i.ZP, { onPress: h(e), ref: l, size: "medium", style: [m.button, m.rightControl], type: "primaryFilled" }, s))));
                };
            var h = r(23679),
                w = r(301758),
                C = r(71620),
                b = r(668214),
                y = r(836255),
                E = r(960919);
            const g = (e, t) => {
                    const { entry: r } = t,
                        o = r.content.content.pagedCarouselFeedbackItem ? r.content.content.pagedCarouselFeedbackItem.content.tweet.id : void 0;
                    return o ? y.Z.select(e, o) : void 0;
                },
                _ = (e) => {
                    const { applyReactionInstructions: t, createLocalApiErrorHandler: r, entry: o, processCallback: n, tweet: s } = e,
                        c = s?.id_str,
                        i = o.content.content.pagedCarouselFeedbackItem ? o.content.content.pagedCarouselFeedbackItem : void 0,
                        l = a.useCallback(() => {
                            i && (n(i.showMoreCallback).catch(r()), t({ entry: o, triggerName: h.K.ON_SHOW_MORE }));
                        }, [r, t, o, n, i]),
                        d = a.useCallback(() => {
                            i && n(i.showLessCallback).catch(r());
                        }, [r, n, i]),
                        u = a.useMemo(() => (c ? a.createElement(w.Z, { shouldShowBorder: !1, tweetId: c }) : null), [c]);
                    return i && s ? a.createElement(p, { content: u, showLessOnClick: d, showLessText: i.showLessText, showMoreOnClick: l, showMoreText: i.showMoreText }) : null;
                },
                v = (0, b.Z)()
                    .propsFromState(() => ({ tweet: g }))
                    .propsFromActions(({ module: e }) => ({ applyReactionInstructions: e.applyReactionInstructions, createLocalApiErrorHandler: (0, C.zr)("PAGED_CAROUSEL_FEEDBACK_ITEM"), processCallback: E.Z }))(a.memo(_)),
                x = s.iH({ component: v, getScribeDataItem: (e) => n.Z.getPagedCarouselTweetURTEntryItem(e), shouldDisplayBorder: (0, o.Z)(!1), isFocusable: (0, o.Z)(!0) }).getHandler();
        },
        988566: (e, t, r) => {
            r.d(t, { D$: () => c, Du: () => d, GK: () => l, Iv: () => m, pz: () => p, rl: () => u });
            var o = r(202784),
                n = r(688715),
                s = r(946409),
                a = r(788993);
            const c = (e, t, r) => (e.retweeted_status ? i(e, t) : e.community_id_str && r ? l(e, r) : void 0),
                i = (e, t) => {
                    if (e.retweeted_status) return { contextType: a.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                l = (e, t) => ({ contextType: a.Z.Community, landingUrl: { url: (0, n.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                d = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: r }) => {
                    if (t?.topicContext) {
                        const o = t.topicContext;
                        return { contextType: e ? a.Z.TextOnly : a.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${o.topicId}`, urlType: "DeepLink" }, text: r?.name, topicContext: o };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                u = (e) => {
                    const { contextType: t, landingUrl: r, text: o } = e;
                    return { link: r ? (0, s.s9)(r) : void 0, text: o, contextType: t };
                },
                m = { contextType: a.Z.Pin, text: "" },
                p = o.createContext(void 0);
        },
        23679: (e, t, r) => {
            r.d(t, { K: () => o });
            const o = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        790093: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                a = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                a = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PagedCarouselItemHandler.0876505a.js.map
