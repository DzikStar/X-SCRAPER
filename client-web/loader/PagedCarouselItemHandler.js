"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PagedCarouselItemHandler", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        64899: (e, t, r) => {
            r.d(t, { H: () => a });
            var o = r(202784),
                n = r(516951);
            const a = o.createContext({ handleNextSlide: n.Z });
        },
        301758: (e, t, r) => {
            r.d(t, { Z: () => C });
            var o = r(807896),
                n = r(202784),
                a = r(235902),
                i = r(521288),
                c = r(401388),
                l = r(988566),
                s = r(725516),
                d = r(443781),
                u = r(71620),
                m = r(668214),
                h = r(491963),
                p = r(836255);
            const w = (e, t) => t.tweetId,
                v = (e, t) => {
                    const r = t.tweetId,
                        o = r && p.Z.select(e, r);
                    return o ? (0, h.z0)(e, o) : void 0;
                },
                C = (0, m.Z)()
                    .propsFromState(() => ({ community: v, hydratedTweet: p.Z.createHydratedTweetSelector(w) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: h.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: r, hydratedTweet: u, onAvatarClick: m, onMediaClick: h, onPress: p, onScreenNameClick: w, tweetId: v, withBirdwatchPivot: C = !0, ...g }) => {
                    const { featureSwitches: b, viewerUserId: y } = n.useContext(d.rC),
                        E = (0, s.z)(),
                        Z = u?.community_id_str;
                    n.useEffect(() => {
                        Z && (0, c.Z)(e) && r(Z).catch(t());
                    }, [e, Z, t, r]);
                    const x = n.useCallback(
                            (e) => {
                                E.scribeAction("click"), p && p(e);
                            },
                            [p, E],
                        ),
                        _ = !!C,
                        f = u && (0, l.D$)(u, y, e),
                        k = f && (0, l.rl)(f);
                    return n.createElement(a.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => b.isTrue("responsive_web_edit_tweet_enabled") || b.isTrue("subscriptions_feature_labs_1004") } }, n.createElement(i.Z, (0, o.Z)({}, g, { loggedInUserId: y, onAvatarClick: m, onMediaClick: h, onPress: x, onScreenNameClick: w, shouldShowAltLabelAlways: !0, socialContextProps: k, tweet: u, withBirdwatchPivot: _ })));
                });
        },
        562154: (e, t, r) => {
            r.r(t), r.d(t, { default: () => x });
            var o = r(459643),
                n = r(942893),
                a = r(351322),
                i = r(202784),
                c = r(325686),
                l = r(154003),
                s = r(392237),
                d = r(725516),
                u = r(64899);
            const m = s.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden", marginStart: e.spaces.space16, marginEnd: e.spaces.space16 }, buttonsContainer: { flexDirection: "row", justifyContent: "space-between" }, button: { flexGrow: 1, marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, leftControl: { marginStart: e.spaces.space12, marginEnd: e.spaces.space4 }, rightControl: { marginEnd: e.spaces.space12, marginStart: e.spaces.space4 } })),
                h = (e) => {
                    const { content: t, showLessOnClick: r, showLessText: o, showMoreOnClick: n, showMoreText: a } = e,
                        s = i.useRef(),
                        h = (0, d.z)(),
                        p = (e) => (t) => {
                            h.scribeAction("show_more"), n(), s.current?.blur(), e(t);
                        },
                        w = (e) => (t) => {
                            h.scribeAction("show_less"), r(), s.current?.focus(), s.current?.blur(), e(t);
                        },
                        v = () => {
                            h.scribeAction("click");
                        };
                    return i.createElement(u.H.Consumer, null, ({ handleNextSlide: e }) => i.createElement(c.Z, { style: m.root }, i.createElement(c.Z, { onClick: v }, t), i.createElement(c.Z, { style: m.buttonsContainer }, i.createElement(l.ZP, { onPress: w(e), size: "medium", style: [m.button, m.leftControl], type: "primaryOutlined" }, o), i.createElement(l.ZP, { onPress: p(e), ref: s, size: "medium", style: [m.button, m.rightControl], type: "primaryFilled" }, a))));
                };
            var p = r(23679),
                w = r(301758),
                v = r(71620),
                C = r(668214),
                g = r(836255),
                b = r(960919);
            const y = (e, t) => {
                    const { entry: r } = t,
                        o = r.content.content.pagedCarouselFeedbackItem ? r.content.content.pagedCarouselFeedbackItem.content.tweet.id : void 0;
                    return o ? g.Z.select(e, o) : void 0;
                },
                E = (e) => {
                    const { applyReactionInstructions: t, createLocalApiErrorHandler: r, entry: o, processCallback: n, tweet: a } = e,
                        c = a?.id_str,
                        l = o.content.content.pagedCarouselFeedbackItem ? o.content.content.pagedCarouselFeedbackItem : void 0,
                        s = i.useCallback(() => {
                            l && (n(l.showMoreCallback).catch(r()), t({ entry: o, triggerName: p.K.ON_SHOW_MORE }));
                        }, [r, t, o, n, l]),
                        d = i.useCallback(() => {
                            l && n(l.showLessCallback).catch(r());
                        }, [r, n, l]),
                        u = i.useMemo(() => (c ? i.createElement(w.Z, { shouldShowBorder: !1, tweetId: c }) : null), [c]);
                    return l && a ? i.createElement(h, { content: u, showLessOnClick: d, showLessText: l.showLessText, showMoreOnClick: s, showMoreText: l.showMoreText }) : null;
                },
                Z = (0, C.Z)()
                    .propsFromState(() => ({ tweet: y }))
                    .propsFromActions(({ module: e }) => ({ applyReactionInstructions: e.applyReactionInstructions, createLocalApiErrorHandler: (0, v.zr)("PAGED_CAROUSEL_FEEDBACK_ITEM"), processCallback: b.Z }))(i.memo(E)),
                x = a.iH({ component: Z, getScribeDataItem: (e) => n.Z.getPagedCarouselTweetURTEntryItem(e), shouldDisplayBorder: (0, o.Z)(!1), isFocusable: (0, o.Z)(!0) }).getHandler();
        },
        988566: (e, t, r) => {
            r.d(t, { D$: () => c, Du: () => d, GK: () => s, Iv: () => m, pz: () => h, rl: () => u });
            var o = r(202784),
                n = r(688715),
                a = r(946409),
                i = r(788993);
            const c = (e, t, r) => (e.retweeted_status ? l(e, t) : e.community_id_str && r ? s(e, r) : void 0),
                l = (e, t) => {
                    if (e.retweeted_status) return { contextType: i.Z.Retweet, isSelfRetweet: e.user.id_str === t, name: e.user.name, screenName: e.user.screen_name };
                },
                s = (e, t) => ({ contextType: i.Z.Community, landingUrl: { url: (0, n.ju)(`https://x.com/i/communities/${t.id_str}`), urlType: "ExternalUrl" }, text: t.name }),
                d = ({ isCellWithProminentSocialContext: e, socialContext: t, topic: r }) => {
                    if (t?.topicContext) {
                        const o = t.topicContext;
                        return { contextType: e ? i.Z.TextOnly : i.Z.Topic, landingUrl: { url: `twitter://topics_timeline?id=${o.topicId}`, urlType: "DeepLink" }, text: r?.name, topicContext: o };
                    }
                    if (t?.generalContext) return { ...t.generalContext };
                },
                u = (e) => {
                    const { contextType: t, landingUrl: r, text: o } = e;
                    return { link: r ? (0, a.s9)(r) : void 0, text: o, contextType: t };
                },
                m = { contextType: i.Z.Pin, text: "" },
                h = o.createContext(void 0);
        },
        23679: (e, t, r) => {
            r.d(t, { K: () => o });
            const o = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                a = r(783427),
                i = r(717683),
                c = r(347101);
            const l = (e = {}) => {
                const t = o.useContext(i.Z),
                    { direction: r } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style, t && c.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                n = r(890601),
                a = r(783427),
                i = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                n = r(890601),
                a = r(783427),
                i = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                n = r(890601),
                a = r(783427),
                i = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                n = r(890601),
                a = r(783427),
                i = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                n = r(890601),
                a = r(783427),
                i = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(716406);
            function n(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(n) : (0, o.Z)(e, (e) => n(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PagedCarouselItemHandler.2361269a.js.map
