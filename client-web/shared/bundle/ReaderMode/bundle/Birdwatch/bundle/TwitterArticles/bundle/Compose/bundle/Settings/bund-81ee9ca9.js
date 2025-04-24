"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"],
    {
        400300: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { analyticsButton: "analyticsButton", promotedIndicator: "promotedIndicator", readerModeBottomBar: "readerModeBottomBar", socialContext: "socialContext", tweet: "tweet" };
        },
        724573: (e, t, a) => {
            a.d(t, { n: () => r });
            var n = a(807896),
                i = a(202784),
                o = a(163889);
            class l extends i.Component {
                componentDidCatch(e, t) {
                    try {
                        const { tweet: i } = this.props;
                        !this.props.tweet.user.protected && e && "object" == typeof e && (0, o.Hj)(e, { extra: { componentStack: ((a = t.componentStack), (n = 2e3), a.length > n ? `${a.slice(0, n - 3)}...` : a), tweetId: i.id_str } });
                    } catch {}
                    var a, n;
                    throw e;
                }
                render() {
                    const { children: e } = this.props;
                    return e;
                }
            }
            function r(e) {
                return i.forwardRef((t, a) => i.createElement(l, { tweet: t.tweet }, i.createElement(e, (0, n.Z)({}, t, { ref: a }))));
            }
        },
        578870: (e, t, a) => {
            a.d(t, { _: () => o });
            var n = a(202784),
                i = a(524496);
            function o(e) {
                return n.createElement(i.Z, e);
            }
        },
        790082: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                i = a(301503),
                o = a(989272),
                l = a(392237),
                r = a(925873),
                s = a(187669),
                c = a(949626),
                d = a(578870);
            const m = "twitter-article-media-caption-id",
                p = ({ caption: e }) => (
                    (0, s.q)(() => {
                        (0, o.fH)(`\n      .${m} .longform-unstyled,\n      .${m} .longform-unstyled a\n       {\n        font-size: ${l.default.theme.fontSizes.subtext2} !important;\n        line-height: ${l.default.theme.lineHeights.subtext2} !important;\n        margin-bottom: 0;\n      }\n\n      .${m} .longform-unstyled-narrow,\n      .${m} .longform-unstyled-narrow a\n       {\n        font-size: ${l.default.theme.fontSizes.subtext2} !important;\n        line-height: ${l.default.theme.lineHeights.subtext2} !important;\n        margin-bottom: 0;\n      }\n\n      .${m} .longform-unstyled,\n      .${m} .longform-unstyled a:not(:hover),\n      .${m} .longform-unstyled-narrow,\n      .${m} .longform-unstyled-narrow a:not(:hover) {\n        color: ${l.default.theme.colors.gray800} !important;\n      }\n    `, m);
                    }),
                    n.createElement(c.Z, { className: m }, n.createElement(d._, { contentState: (0, i.convertToRaw)(r.Z.initEditorState(e).getCurrentContent()) }))
                );
        },
        844907: (e, t, a) => {
            a.d(t, { ZP: () => Pe, VN: () => ye });
            var n = a(202784),
                i = a(325686),
                o = a(537392),
                l = a(786475),
                r = a(530732),
                s = a(103737),
                c = a(530525),
                d = a(439592),
                m = a(167630),
                p = a(661810),
                u = a(731708),
                h = a(891198),
                g = a(392237),
                f = a(674132),
                b = a.n(f),
                w = a(166502),
                E = a(187669),
                y = a(19640),
                _ = a(443781),
                C = a(778955),
                Z = a(240089),
                v = a(959959),
                B = a(793211),
                k = a(725516),
                S = a(794057),
                P = a(751632),
                T = a(316732),
                I = a(470397),
                x = a(966886),
                M = a(155727),
                A = a(823161),
                D = a(366635),
                N = a(23134),
                R = a(952793),
                $ = a(655352),
                W = a(125363),
                z = a(390387),
                L = a(659426),
                H = a(157130),
                V = a(500201),
                F = a(323265);
            const O = b().ced3c85a,
                j = g.default.create((e) => ({ popover: { minWidth: e.spaces.space80, marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space12, justifyContent: "center" }, label: { cursor: "pointer" }, lastEditedText: { color: e.colors.buttonBlack } })),
                U = ({ lastPublishedAtMs: e }) => {
                    const t = F.ZP.isMobileOS(),
                        a = n.useCallback(() => {
                            const t = n.createElement(x.Z, { color: "buttonBlack", humanReadable: !0, timestamp: e });
                            return n.createElement(u.ZP, { size: "subtext1", style: j.lastEditedText }, n.createElement(b().I18NFormatMessage, { $i18n: "a20c0721" }, t));
                        }, [e]);
                    return n.createElement(H.Z, { contentStyle: j.popover, enableHover: !0, preferredVerticalOrientation: t ? "up" : "down", renderContent: a, withArrow: !0, withMask: t }, n.createElement(u.ZP, { color: "gray700", size: "subtext1", style: j.label }, n.createElement(V.default, { "aria-label": O })));
                },
                q = ({ author: e }) => {
                    const t = (0, R.hC)("super_follow_android_web_subscription_enabled"),
                        a = (0, W.v9)(z._h),
                        o = t && e.super_follow_eligible && !e.super_following && e.id_str !== a,
                        l = e.id_str !== a && !e.following,
                        r = (0, $.ZP)();
                    return n.createElement(i.Z, null, o ? n.createElement(N.C, { buttonType: "primaryFilled", isSuperFollowSubscriptionEnabled: t, referringPage: "article_details", relationshipMode: "subscribe", size: r ? "small" : "xSmall", userId: e.id_str }) : l ? n.createElement(N.C, { buttonType: "primaryFilled", size: r ? "small" : "xSmall", userId: e.id_str }) : null);
                },
                K = g.default.create((e) => ({ container: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space24, gap: e.spaces.space8 }, avatar: { marginEnd: e.spaces.space8, flexShrink: 0 }, attribution: { alignItems: "center" } })),
                X = ({ author: e, firstPublishedAtSecs: t, lastPublishedAtSecs: a }) => {
                    const o = Number(1e3 * t),
                        l = Number(1e3 * a),
                        r = o !== l,
                        s = n.createElement(I.Z, null, o ? n.createElement(x.Z, { timestamp: o }) : null, r ? n.createElement(U, { lastPublishedAtMs: l }) : null);
                    return n.createElement(
                        i.Z,
                        { style: K.container },
                        n.createElement(
                            I.Z,
                            { style: K.attribution },
                            n.createElement(
                                L.Z,
                                { author: e },
                                n.createElement(
                                    i.Z,
                                    { style: K.avatar },
                                    n.createElement(M.Z.Consumer, null, ({ avatarSize: t }) => n.createElement(A.default, { screenName: e.screen_name, size: t, uri: e.profile_image_url_https, withHoverCard: !0, withLink: !0 })),
                                ),
                                n.createElement(D.Z, { affiliateBadgeInfo: e.highlightedLabel, isBlueVerified: e.is_blue_verified, isVerified: e.verified, name: e.name, screenName: e.screen_name, screenNameSuffix: s, verifiedType: e.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 }),
                            ),
                        ),
                        n.createElement(q, { author: e }),
                    );
                };
            var Y = a(668214),
                G = a(836255);
            const J = (0, Y.Z)().propsFromActions(() => ({ fetchTweetsIfNeeded: G.Z.fetchMultipleIfNeeded }));
            var Q = a(834324);
            const ee = b().b375ece0,
                te = g.default.create((e) => ({ callout: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, calloutNarrow: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 } })),
                ae = ({ isNarrow: e, onClose: t }) => n.createElement(Q.Z, { onClose: t, style: e ? te.calloutNarrow : te.callout, text: ee, withCloseButton: !0 });
            var ne = a(688715),
                ie = a(266151);
            const oe = g.default.create((e) => ({ callout: { marginBottom: e.spaces.space32 }, calloutNarrow: { marginBottom: e.spaces.space16 } })),
                le = ({ isNarrow: e, onClose: t, onScribeEvent: a }) => {
                    const i = n.useCallback(() => {
                            a?.({ action: "click", component: "inline_callout", element: "help_center_link" });
                        }, [a]),
                        o = n.useMemo(() => ({ learnMoreLink: n.createElement(u.ZP, { color: "text", link: (0, ne.ju)("https://help.x.com/using-x/articles"), onClick: i, withUnderline: !0 }) }), [i]),
                        l = n.useMemo(() => n.createElement(b().I18NFormatMessage, { $i18n: "a9ce2dd5" }, n.cloneElement(o.learnMoreLink, null, b().edf9101f)), [o]);
                    return n.createElement(Q.Z, { Icon: ie.default, headline: ye, onClose: t, style: e ? oe.calloutNarrow : oe.callout, text: l, type: "primary", withCloseButton: !0 });
                };
            a(571372);
            var re = a(578870),
                se = a(691533),
                ce = a(459679),
                de = a(512110),
                me = a(335923),
                pe = a(540985),
                ue = a(790082);
            const he = g.default.theme.aspectRatios.maxTimelineImage,
                ge = g.default.theme.aspectRatios.minTimelineImage,
                fe = (e) => {
                    const { block: t, blockProps: a, contentState: i } = e,
                        o = t.getEntityAt(0),
                        l = t.getText(),
                        r = o ? i.getEntity(o) : null,
                        { hasPostPreloaded: c, isPostBatchingEnabled: d, media: m, onScribeEvent: u, publishedPost: h } = a || {},
                        g = h?.id_str,
                        f = n.useCallback((e) => n.createElement(ue.Z, { caption: e.text }), []),
                        b = (0, R.hC)("responsive_web_twitter_article_latex_enabled"),
                        w = (() => {
                            if (r) {
                                if (r.type === S.DC.TWEET) return "tweet";
                                if (r.type === S.DC.MEDIA) {
                                    const e = r.getData().mediaItems;
                                    return e.length > 1 ? "images" : e[0].mediaCategory;
                                }
                            }
                        })();
                    if (
                        (n.useEffect(() => {
                            u?.({ action: "impression", element: w });
                        }, [u, w]),
                        !r)
                    )
                        return null;
                    const E = () => {
                            u?.({ action: "click", element: w });
                        },
                        y = r.getData();
                    if (r.type === S.DC.TWEET) {
                        const { tweetId: e } = y;
                        return n.createElement(de.ZP, { hasPostPreloaded: c, isPostBatchingEnabled: d, onClick: E, style: be.atomicBlock, tweetId: e, withActionsDisabled: !1 });
                    }
                    if (r.type === S.DC.MEDIA) {
                        const e = y.mediaItems.map((e) => m?.find((t) => t.media_id === e.mediaId)),
                            t = (0, ce.Z)(e, (e) => (0, v.W5)(e, h)),
                            a = y.caption ? { text: y.caption, entities: [] } : void 0;
                        return t ? n.createElement(s.Z, { caption: a, hasSensitiveMedia: h?.possibly_sensitive, mediaDetails: t, mediaVisibilityResults: h?.mediaVisibilityResults, onClick: E, renderCaption: f, showBorder: !1, singleImageMaxAspectRatio: he, singleImageMinAspectRatio: ge, style: [be.fullWidth, be.atomicBlock], tweetId: g ?? "0" }) : null;
                    }
                    if (r.type === S.DC.DIVIDER) return n.createElement(p.Z, { style: [be.atomicBlock, be.fullWidth] });
                    if (r.type === S.DC.MARKDOWN) {
                        const { markdown: e } = y;
                        return n.createElement(me.Z, { markdownText: e, style: [be.atomicBlock, be.fullWidth] });
                    }
                    return r.type === S.DC.LATEX && b ? n.createElement(pe.Z, { displayMode: !0, style: [be.atomicBlock, be.fullWidth], tex: l }) : null;
                },
                be = g.default.create((e) => ({ fullWidth: { width: "100%" }, atomicBlock: { marginBottom: e.spaces.space28 } })),
                we = (e) => n.createElement(se.Z, { hideOnError: !0 }, n.createElement(fe, e));
            function Ee({ hasPostPreloaded: e, isPostBatchingEnabled: t, onScribeEvent: a, publishedPost: i, twitterArticle: o }) {
                const l = (function (e) {
                    try {
                        if (!e.content_state) return;
                        const t = (0, B.K7)(e.content_state);
                        if (!t.entityMap || !t.blocks) throw new Error("Malformed RawDraftContentState");
                        return t;
                    } catch (e) {}
                })(o);
                if (!l) return null;
                const r = o.media_entities ?? [],
                    s = { atomic: { component: we, editable: !1, props: { media: r, onScribeEvent: a, publishedPost: i, hasPostPreloaded: e, isPostBatchingEnabled: t } } };
                return n.createElement(re._, { componentByType: s, contentState: l, onScribeEvent: a, paragraphFontSizeOverride: "headline2" });
            }
            const ye = b().g345246c,
                _e = b().b14efa0a,
                Ce = b().afdccedb;
            function Ze(e) {
                const { author: t, fetchTweetsIfNeeded: a, minContentThreshold: g, onContainerPress: f, onLearnMoreCalloutImpression: b, onScribeEvent: I, publishedPost: x, renderInTweet: M, shouldShowLearnMoreCallout: A, twitterArticle: D, withActionBar: N, withReplyLink: R } = e,
                    { featureSwitches: $, userClaims: W, viewerUserId: z } = n.useContext(_.rC),
                    L = $.isTrue("subscriptions_feature_article_composer") && !W.isTrueAndEnabled("subscriptions_feature_article_composer"),
                    H = $.isTrue("responsive_web_twitter_article_batch_posts"),
                    V = (0, k.z)(),
                    F = n.useCallback(
                        (e) => {
                            I ? I(e) : V.scribe(e);
                        },
                        [V, I],
                    ),
                    O = D?.lifecycle_state?.lifecycle === y.f.Draft,
                    [j, U] = n.useState(!1),
                    [q, K] = n.useState(!!A),
                    [Y, G] = n.useState(z === t?.id_str && O),
                    J = D.cover_media,
                    Q = (0, v.W5)(J, x),
                    ee = (0, v.tY)(J),
                    te = (0, v.Si)(),
                    ne = D.content_state,
                    ie = N && (!ne || !g || ne.blocks?.length >= g);
                (0, E.q)(() => {
                    F({ action: "impression", component: "article" }), ee && F({ action: "impression", element: "cover_image" }), A && (F({ action: "impression", element: "inline_callout" }), b?.());
                });
                const oe = n.useMemo(() => {
                        const e = H && ne ? (0, B.B$)(ne, S.DC.TWEET) : null;
                        return e?.map((e) => e?.data?.tweetId)?.filter(Boolean);
                    }, [ne, H]),
                    re = n.useCallback(() => {
                        if (ne && oe && oe.length > 0) {
                            const e = (0, w.Z)(oe, 40);
                            Promise.all(e.map((e) => a(e))).finally(() => {
                                U(!0);
                            });
                        }
                    }, [ne, oe, a]);
                n.useEffect(() => {
                    re();
                }, [re]);
                const se = !!ne,
                    ce = n.useCallback(
                        (e) => {
                            const t = e ? Be : ve,
                                a = q ? t.paddingTopWithCallout : t.paddingTop;
                            return M ? [a] : [t.content, a, !z && t.paddingBottomLoggedOut];
                        },
                        [z, q, M],
                    ),
                    de = (0, o.Zx)(({ containerWidth: e }) => l.Z.isNarrowScreenWidth(e)),
                    me = x?.reply_count;
                return n.createElement(
                    r.Z,
                    { interactive: !!f, interactiveStyles: ke, onPress: f || void 0, testID: "twitterArticleReadView" },
                    ee
                        ? n.createElement(
                              i.Z,
                              { style: ve.marginBottom },
                              x && Q
                                  ? n.createElement(s.Z, {
                                        hasSensitiveMedia: x?.possibly_sensitive,
                                        mediaDetails: [Q],
                                        mediaVisibilityResults: x?.mediaVisibilityResults,
                                        onClick: () => {
                                            F({ action: "click", element: "cover_media" });
                                        },
                                        showBorder: !1,
                                        showRoundCorners: !1,
                                        singleImageMaxAspectRatio: te,
                                        singleImageMinAspectRatio: te,
                                        tweetId: x?.id_str ?? "0",
                                    })
                                  : n.createElement(c.Z, { "aria-label": _e, aspectMode: d.Z.exact(te), image: ee }),
                          )
                        : null,
                    n.createElement(
                        i.Z,
                        { style: ce(de) },
                        q
                            ? n.createElement(le, {
                                  isNarrow: de,
                                  onClose: () => {
                                      K(!1);
                                  },
                                  onScribeEvent: F,
                              })
                            : null,
                        Y
                            ? n.createElement(ae, {
                                  isNarrow: de,
                                  onClose: () => {
                                      G(!1);
                                  },
                              })
                            : null,
                        n.createElement(P.ZP, { size: de ? "title3" : "title1", style: de ? Be.title : ve.title, title: D.title, weight: "heavy" }),
                        t && D.metadata?.first_published_at_secs && D.lifecycle_state?.modified_at_secs ? n.createElement(X, { author: t, firstPublishedAtSecs: D.metadata.first_published_at_secs, lastPublishedAtSecs: D.lifecycle_state.modified_at_secs }) : null,
                        se ? n.createElement(n.Fragment, null, ie && x ? n.createElement(C.Z, { allowBookmarkInActionsBar: !0, style: ve.actionBar, tweet: x, withAnalyticsAction: !0, withCount: !0 }) : null, n.createElement(i.Z, { style: ve.body, testID: "twitterArticleRichTextView" }, n.createElement(Ee, { hasPostPreloaded: j, isPostBatchingEnabled: H, onScribeEvent: F, publishedPost: x, twitterArticle: D }))) : O ? null : n.createElement(m.Z, { style: ve.loadingStyle }),
                        L ? n.createElement(T.Z, { variant: "ArticlesReader" }) : null,
                        R && x && me
                            ? n.createElement(
                                  n.Fragment,
                                  null,
                                  n.createElement(p.Z, { spacing: de ? "space24" : "space32" }),
                                  n.createElement(
                                      u.ZP,
                                      {
                                          align: "center",
                                          link: x.permalink,
                                          onPress: () => {
                                              F({ action: "click", component: "footer", element: "read_replies" });
                                          },
                                      },
                                      Ce({ displayCount: h.ZP.getTruncatedCount(me), count: me }),
                                  ),
                              )
                            : null,
                        t
                            ? n.createElement(
                                  n.Fragment,
                                  null,
                                  n.createElement(p.Z, { spacing: de ? "space24" : "space32" }),
                                  n.createElement(Z.ZP, {
                                      cellClickable: !1,
                                      decoration: !!z && Z.ET,
                                      displayMode: "UserDetailed",
                                      onFollowClick: () => {
                                          F({ action: "click", component: "footer", element: "follow" });
                                      },
                                      userId: t.id_str,
                                  }),
                              )
                            : null,
                    ),
                );
            }
            const ve = g.default.create((e) => ({ body: { paddingTop: e.spaces.space20 }, content: { paddingBottom: e.spaces.space80, paddingHorizontal: e.spaces.space48 }, paddingBottomLoggedOut: { paddingBottom: `calc(${e.spaces.space80} + ${e.spaces.space64})` }, hoverStyle: { cursor: "initial" }, paddingTopWithCallout: { paddingTop: e.spaces.space32 }, paddingTop: { paddingTop: e.spaces.space2 }, marginBottom: { marginBottom: e.spaces.space24 }, title: { marginTop: e.spaces.space12, lineHeight: `calc(${e.spaces.space40} + ${e.spaces.space4})` }, actionBar: { height: e.spaces.space48, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", marginTop: e.spaces.space4 }, loadingStyle: { marginHorizontal: "auto", marginVertical: e.spaces.space20 } })),
                Be = g.default.create((e) => ({ content: { paddingBottom: `calc(${e.spaces.space56} * 2)`, paddingHorizontal: e.spaces.space16 }, paddingBottomLoggedOut: { paddingBottom: e.spaces.space56 }, paddingTopWithCallout: { paddingTop: e.spaces.space16 }, title: { marginTop: e.spaces.space12, lineHeight: e.lineHeights.title3 } })),
                ke = { hoverStyle: ve.hoverStyle },
                Se = J(n.memo(Ze)),
                Pe = n.memo(Se);
        },
        751632: (e, t, a) => {
            a.d(t, { ZP: () => d });
            var n = a(202784),
                i = a(325686),
                o = a(731708),
                l = a(392237),
                r = a(674132);
            const s = a.n(r)().gd11f228,
                c = l.default.create((e) => ({ titlePlaceholder: { opacity: 0.4 }, titleWrapper: { width: "100%" } })),
                d = ({ numberOfLines: e, size: t = "body", style: a, title: l, weight: r = "bold" }) => n.createElement(i.Z, { style: [c.titleWrapper, !l && c.titlePlaceholder] }, n.createElement(o.ZP, { dir: "auto", numberOfLines: e, size: t, style: a, testID: "twitter-article-title", weight: r }, l || s));
        },
        199481: (e, t, a) => {
            e.exports = a.p + "promote_popup_image.1af114ea.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9.130b2bca.js.map
