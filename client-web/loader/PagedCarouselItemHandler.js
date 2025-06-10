"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PagedCarouselItemHandler"],
    {
        64899: (e, t, r) => {
            r.d(t, { H: () => a });
            var o = r(202784),
                n = r(516951);
            const a = o.createContext({ handleNextSlide: n.Z });
        },
        301758: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(807896),
                n = r(202784),
                a = r(235902),
                s = r(521288),
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
                        v = (0, l.z)(),
                        _ = u?.community_id_str;
                    n.useEffect(() => {
                        _ && (0, c.Z)(e) && r(_).catch(t());
                    }, [e, _, t, r]);
                    const x = n.useCallback(
                            (e) => {
                                v.scribeAction("click"), h && h(e);
                            },
                            [h, v],
                        ),
                        Z = !!b,
                        k = u && (0, i.D$)(u, g, e),
                        T = k && (0, i.rl)(k);
                    return n.createElement(a.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => E.isTrue("responsive_web_edit_tweet_enabled") || E.isTrue("subscriptions_feature_labs_1004") } }, n.createElement(s.Z, (0, o.Z)({}, y, { loggedInUserId: g, onAvatarClick: m, onMediaClick: p, onPress: x, onScreenNameClick: w, shouldShowAltLabelAlways: !0, socialContextProps: T, tweet: u, withBirdwatchPivot: Z })));
                });
        },
        562154: (e, t, r) => {
            r.r(t), r.d(t, { default: () => x });
            var o = r(459643),
                n = r(942893),
                a = r(351322),
                s = r(202784),
                c = r(325686),
                i = r(154003),
                l = r(392237),
                d = r(725516),
                u = r(64899);
            const m = l.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden", marginStart: e.spaces.space16, marginEnd: e.spaces.space16 }, buttonsContainer: { flexDirection: "row", justifyContent: "space-between" }, button: { flexGrow: 1, marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, leftControl: { marginStart: e.spaces.space12, marginEnd: e.spaces.space4 }, rightControl: { marginEnd: e.spaces.space12, marginStart: e.spaces.space4 } })),
                p = (e) => {
                    const { content: t, showLessOnClick: r, showLessText: o, showMoreOnClick: n, showMoreText: a } = e,
                        l = s.useRef(),
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
                    return s.createElement(u.H.Consumer, null, ({ handleNextSlide: e }) => s.createElement(c.Z, { style: m.root }, s.createElement(c.Z, { onClick: C }, t), s.createElement(c.Z, { style: m.buttonsContainer }, s.createElement(i.ZP, { onPress: w(e), size: "medium", style: [m.button, m.leftControl], type: "primaryOutlined" }, o), s.createElement(i.ZP, { onPress: h(e), ref: l, size: "medium", style: [m.button, m.rightControl], type: "primaryFilled" }, a))));
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
                v = (e) => {
                    const { applyReactionInstructions: t, createLocalApiErrorHandler: r, entry: o, processCallback: n, tweet: a } = e,
                        c = a?.id_str,
                        i = o.content.content.pagedCarouselFeedbackItem ? o.content.content.pagedCarouselFeedbackItem : void 0,
                        l = s.useCallback(() => {
                            i && (n(i.showMoreCallback).catch(r()), t({ entry: o, triggerName: h.K.ON_SHOW_MORE }));
                        }, [r, t, o, n, i]),
                        d = s.useCallback(() => {
                            i && n(i.showLessCallback).catch(r());
                        }, [r, n, i]),
                        u = s.useMemo(() => (c ? s.createElement(w.Z, { shouldShowBorder: !1, tweetId: c }) : null), [c]);
                    return i && a ? s.createElement(p, { content: u, showLessOnClick: d, showLessText: i.showLessText, showMoreOnClick: l, showMoreText: i.showMoreText }) : null;
                },
                _ = (0, b.Z)()
                    .propsFromState(() => ({ tweet: g }))
                    .propsFromActions(({ module: e }) => ({ applyReactionInstructions: e.applyReactionInstructions, createLocalApiErrorHandler: (0, C.zr)("PAGED_CAROUSEL_FEEDBACK_ITEM"), processCallback: E.Z }))(s.memo(v)),
                x = a.iH({ component: _, getScribeDataItem: (e) => n.Z.getPagedCarouselTweetURTEntryItem(e), shouldDisplayBorder: (0, o.Z)(!1), isFocusable: (0, o.Z)(!0) }).getHandler();
        },
        988566: (e, t, r) => {
            r.d(t, { D$: () => c, Du: () => d, GK: () => l, Iv: () => m, pz: () => p, rl: () => u });
            var o = r(202784),
                n = r(688715),
                a = r(946409),
                s = r(788993);
            const c = (e, t, r) => (e.retweeted_status ? i(e, t) : e.community_id_str && r ? l(e, r) : void 0),
                i = (e, t) => {
                    if (e.retweeted_status) return { contextType: s.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                l = (e, t) => ({ contextType: s.Z.Community, landingUrl: { url: (0, n.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                d = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: r }) => {
                    if (t?.topicContext) {
                        const o = t.topicContext;
                        return { contextType: e ? s.Z.TextOnly : s.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${o.topicId}`, urlType: "DeepLink" }, text: r?.name, topicContext: o };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                u = (e) => {
                    const { contextType: t, landingUrl: r, text: o } = e;
                    return { link: r ? (0, a.s9)(r) : void 0, text: o, contextType: t };
                },
                m = { contextType: s.Z.Pin, text: "" },
                p = o.createContext(void 0);
        },
        23679: (e, t, r) => {
            r.d(t, { K: () => o });
            const o = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                n = r(890601),
                a = r(783427),
                s = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var o = r(202784),
                n = r(890601),
                a = r(783427),
                s = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PagedCarouselItemHandler.9b93d7aa.js.map
