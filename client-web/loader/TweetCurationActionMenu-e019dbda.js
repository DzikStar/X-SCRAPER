"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-e019dbda"],
    {
        463678: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                a = n.n(i),
                o = n(692165),
                r = n(690031);
            const d = a().fb4ee11c,
                c = ({ promotedContent: e, scribeAction: t }) => {
                    if (!e || !e.impression_id) return;
                    const { impression_id: n } = e;
                    return {
                        text: d,
                        Icon: o.default,
                        link: { pathname: `/i/about-this-ad/${n}` },
                        onClick: () => {
                            t && t({ element: "whythisad" });
                        },
                        testID: r.Z.whyThisAd,
                    };
                };
        },
        73066: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(916585);
            const a = ({ scribeAction: e, user: t }) =>
                (0, i.k)(t, () => {
                    e({ element: "add_to_list" });
                });
        },
        404914: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(782261),
                a = n(674132),
                o = n.n(a),
                r = n(53674),
                d = n(690031);
            const c = o().ad50e7d9,
                l = ({ featureSwitches: e, scribeAction: t, tweet: n }) => {
                    const a = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        o = i.Z.getLocalizedEntityName({ tweet: n, articlesEnabled: a });
                    return {
                        text: c({ entity: o }),
                        onClick: () => {
                            t({ element: "analytics" });
                        },
                        link: `/${n.user.screen_name}/status/${n.id_str}/analytics`,
                        Icon: r.default,
                        testID: d.Z.analytics,
                    };
                };
        },
        921795: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(674132),
                a = n.n(i),
                o = n(625271);
            const r = a().ef1042f8,
                d = (e, { scribeAction: t, tweetId: n }) => ({
                    text: r,
                    onClick: () => {
                        t({ element: "contribute_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/contribute/${n}` },
                    Icon: o.default,
                });
        },
        999999: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(674132),
                a = n.n(i),
                o = n(730873);
            const r = a().h3edf7a6,
                d = (e, { scribeAction: t, tweetId: n }) => ({
                    text: r,
                    onClick: () => {
                        t({ element: "noterequest_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/noterequest/${n}` },
                    Icon: o.default,
                });
        },
        237467: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(674132),
                a = n.n(i),
                o = n(194661);
            const r = a().bae0cbc0,
                d = a().bf8d98f4,
                c = a().e69ada9e,
                l = ({ onChangeConversationControls: e, tweet: t }) => {
                    const n = !!t.exclusivity_info,
                        i = !!t.premium_info,
                        a = n || i;
                    return { disabled: a, onClick: a ? void 0 : e, subText: n ? d : i ? c : void 0, text: r, Icon: o.default };
                };
        },
        234410: (e, t, n) => {
            n.d(t, { Z: () => w });
            var i = n(202784),
                a = n(325686),
                o = n(782261),
                r = n(392237),
                d = n(674132),
                c = n.n(d),
                l = n(607127);
            const s = c().d96cf7ce,
                u = c().ae04c4dd,
                b = c().d9442996,
                p = c().dad785a7,
                m = c().jda253ab,
                h = c().j49c2f85,
                _ = c().f9fa0390,
                w = ({ addToast: e, createLocalApiErrorHandler: t, deleteTweet: n, featureSwitches: r, onDeleteTweet: d, scribeAction: c, tweet: w, userClaims: A }) => {
                    const S = (A.isTrueAndEnabled("subscriptions_feature_labs_1004") || r.isTrue("responsive_web_edit_tweet_enabled")) && r.isTrue("responsive_web_edit_tweet_composition_enabled"),
                        g = r.isTrue("subscriptions_feature_labs_1004") || r.isTrue("responsive_web_edit_tweet_enabled"),
                        v = r.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        y = o.Z.postEntityName;
                    return {
                        confirmation: { label: s, headline: u({ entity: y }), text: o.Z.getOriginalTweet(w).isEdited && (S || g) ? p({ entity: y }) : v && o.Z.isArticlePost(w) ? i.createElement(i.Fragment, null, b, i.createElement(a.Z, { style: f.additionalInfo }, _)) : b, confirmButtonType: "destructiveFilled" },
                        isEmphasized: !0,
                        text: s,
                        onClick: () => {
                            n(w.id_str).then(
                                () => {
                                    e({ text: m({ entity: y }) });
                                },
                                t({ defaultToast: { text: h({ entity: y }) }, showToast: !0 }),
                            ),
                                c({ element: "delete" }),
                                d && d(w.id_str);
                        },
                        Icon: l.default,
                    };
                },
                f = r.default.create((e) => ({ additionalInfo: { marginTop: e.spaces.space8 } }));
        },
        486809: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                a = n.n(i),
                o = n(72591),
                r = n(690031);
            const d = a().d9a2bd78,
                c = ({ downloadVideoLink: e, scribeAction: t }) => ({
                    text: d,
                    onClick: () => {
                        t({ element: "download-video" });
                    },
                    link: e,
                    Icon: o.default,
                    testID: r.Z.subscribe,
                });
        },
        99217: (e, t, n) => {
            n.d(t, { Z: () => p });
            n(136728);
            var i = n(674132),
                a = n.n(i),
                o = n(376021),
                r = n(689985),
                d = n(690031);
            const c = a().dad450ec,
                l = a().g9677c6e,
                s = a().b57bfe70,
                u = a().bd3da7be,
                b = a().j26481e6,
                p = ({ addToast: e, articleEnttiyId: t, createLocalApiErrorHandler: n, history: i, scribeAction: a, unpublishArticleEntity: p }) => ({
                    confirmation: { text: u, headline: s, label: l },
                    testID: d.Z.editArticle,
                    text: c,
                    onClick: () => {
                        p(t).then(
                            () => {
                                i.push({ pathname: (0, r.lU)(t) }), e({ text: b });
                            },
                            n({ showToast: !0 }),
                        ),
                            a({ element: "editArticle" });
                    },
                    Icon: o.default,
                });
        },
        448573: (e, t, n) => {
            n.d(t, { H: () => s, Q: () => u });
            var i = n(310452),
                a = n(354149),
                o = n(674132),
                r = n.n(o),
                d = n(376021),
                c = n(507824),
                l = n(690031);
            function s(e, t) {
                let n = !0;
                if (e.edit_control?.editable_until_msecs) {
                    const t = p(e.edit_control.editable_until_msecs);
                    n = Date.now() > new Date(t);
                }
                const i = "0" === e.edit_control?.edits_remaining,
                    a = !!e.edit_control?.is_edit_eligible,
                    o = "Twitter for iPhone" !== e.source_name && "Twitter for iPad" !== e.source_name && "Twitter for Android" !== e.source_name,
                    r = e.user.pinned_tweet_ids_str,
                    d = Array.isArray(r) && r.some((t) => t === e.id_str);
                return t.isUserTweetAuthor && !n && !i && !e.isStaleEdit && a && o && !d;
            }
            function u(e) {
                const { featureSwitches: t, tweet: n } = e;
                let a = "";
                if (n.note_tweet || n.full_text) {
                    const e = { featureSwitches: t, forceEnabled: !0 },
                        o = c.Bq(n, e);
                    a = i.ZP.tweetTextParts(o.text, o.display_text_range, o.entities).map(m).join("");
                }
                return {
                    testID: l.Z.edit,
                    onClick: () => {
                        e.scribeAction({ element: "edit" });
                    },
                    text: b,
                    Icon: d.default,
                    link: { pathname: "/compose/post", state: { previousTweetId: n.id_str, defaultText: a, quotedStatusId: n.quoted_status?.id_str, hideUnsentTweetsButton: !0, editableUntil: n.edit_control?.editable_until_msecs, isLastEdit: "1" === n.edit_control?.edits_remaining } },
                };
            }
            const b = r().cb817dae,
                p = (e) => parseInt(e, 10);
            function m(e) {
                switch (e.entityType) {
                    case "cashtag":
                    case "emoji":
                    case "hashtag":
                    case "mention":
                    case "text":
                        return `${e.prefix || ""}${(0, a.Tz)(e.text)}`;
                    case "media":
                    case "url":
                        return e.expandedUrl;
                    default:
                        return "";
                }
            }
        },
        457801: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                a = n.n(i),
                o = n(376021),
                r = n(690031);
            const d = a().abd845fe,
                c = ({ onClick: e, scribeAction: t, tweet: n }) => ({
                    onClick: () => {
                        t({ element: "edit-upsell" }), e();
                    },
                    text: d,
                    Icon: o.default,
                    testID: r.Z.editWithPremium,
                });
        },
        722494: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(782261),
                a = n(674132),
                o = n.n(a),
                r = n(498720);
            const d = o().fd391b9f,
                c = ({ featureSwitches: e, permalink: t, scribeAction: n, tweet: a }) => {
                    const o = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        c = i.Z.getLocalizedEntityName({ tweet: a, articlesEnabled: o });
                    return {
                        text: d({ entity: c }),
                        onClick: () => {
                            const e = `https://publish.twitter.com/?url=https://twitter.com${t}`;
                            window.open(e, "_blank"), n({ element: "embed_tweet" });
                        },
                        Icon: r.default,
                    };
                };
        },
        407608: (e, t, n) => {
            n.d(t, { ZP: () => s });
            var i = n(674132),
                a = n.n(i),
                o = n(911373),
                r = n(757953);
            const d = a().c66afdc3,
                c = a().hbe4feb5,
                l = a().e1618e49,
                s = ({ addToast: e, createLocalApiErrorHandler: t, follow: n, promotedContent: i, scribeAction: a, user: s }) => ({
                    text: d({ screenName: s.screen_name }),
                    onClick: () => {
                        n(s.id_str, { promotedContent: i }).then(
                            () => {
                                a({ element: "follow" }), a({ action: "follow", element: "tweet_curation_action_menu" }), s.protected ? e({ text: c({ screenName: s.screen_name }) }) : e({ text: l({ screenName: s.screen_name }) });
                            },
                            t({ ...r.H, showToast: !0 }),
                        ),
                            a({ element: "follow_attempt" });
                    },
                    Icon: o.default,
                });
        },
        191444: (e, t, n) => {
            n.d(t, { ZP: () => y });
            var i = n(202784),
                a = n(688715),
                o = n(529356),
                r = n(190286),
                d = n(674132),
                c = n.n(d),
                l = n(520913),
                s = n(648539),
                u = n(175856);
            const b = c().ge5067bc,
                p = c().j136c720,
                m = c().d66f0338,
                h = `${c().cfc8cb50}\n\n${c().if8dc5f0}`,
                _ = (0, a.ju)("https://help.x.com/using-twitter/mentions-and-replies?lang=browser#hidden-reply"),
                w = c().b2615c6d,
                f = c().i62a03aa,
                A = c().cfd2f35e,
                S = c().a6450e84,
                g = c().g353ad73,
                v = c().ad00a739,
                y = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: n, hideReply: a, isSoftBlockEnabled: d, onBlock: c, onTweetDismiss: y, scribeAction: C, shouldShowHideReplyTip: T, tweet: D }) => {
                    const Z = () => {
                        C({ element: "moderated_replies_prompt", action: "impression" });
                    };
                    return {
                        confirmation: T
                            ? { render: (e, t) => (({ onConfirm: e, onCancel: t, onHideReplyImpression: n = () => {} }) => i.createElement(o.Z, { actionLabel: b, graphic: l.default, headline: m, onAction: e, onClose: t, onImpression: n, onTertiaryAction: t, subtext: h, supportUrl: _, tertiaryActionLabel: A }))({ onConfirm: e, onCancel: t, onHideReplyImpression: Z }) }
                            : {
                                  render: (e, t) => {
                                      const {
                                          user: { screen_name: n },
                                      } = D;
                                      return i.createElement(r.Z, {
                                          cancelButtonLabel: f,
                                          confirmButtonLabel: S,
                                          confirmButtonType: "destructiveFilled",
                                          headline: w({ screenName: n }),
                                          onCancel: e,
                                          onConfirm: () => {
                                              c(), e();
                                          },
                                          text: d ? v({ screenName: n }) : g({ screenName: n }),
                                      });
                                  },
                              },
                        text: b,
                        onClick: () => {
                            e(u.f8),
                                a(D.id_str, { conversation_id: D.conversation_id_str }).then(
                                    (e) => {
                                        y && y(), t({ text: p });
                                    },
                                    n({ showToast: !0 }),
                                ),
                                C({ element: "moderate_reply" });
                        },
                        Icon: s.default,
                    };
                };
        },
        317859: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                a = n.n(i),
                o = n(161335),
                r = n(395067);
            const d = a().f9f27fa2,
                c = (e, t) => ({ text: d, Icon: o.default, link: { pathname: `/i/report/${r.C2.HideCommunityTweet}/${e}`, state: { scribeNamespace: t } } });
        },
        901023: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(202784),
                a = n(674132),
                o = n.n(a),
                r = n(487606),
                d = n(545334),
                c = n(350968),
                l = n(33669),
                s = n(690031);
            const u = o().ce87916a,
                b = o().ef4602ec,
                p = ({ addToast: e, highlight: t, scribeAction: n, tweetId: a, undoHighlight: o }) => {
                    const p = () => {
                            o(a).then((t) => {
                                e(t?.tweet_highlights_delete?.success ? { text: c.sp, withClearButton: !0 } : { text: b, withClearButton: !0, withAutoDismiss: !0 });
                            }),
                                n({ element: "undoHighlight" });
                        },
                        m = () => {
                            t(a).then((t) => {
                                e(t?.tweet_highlights_put?.success ? { action: { label: d.d, onAction: p }, text: c.I9, withClearButton: !0 } : { text: b, withClearButton: !0, withAutoDismiss: !0 });
                            }),
                                n({ element: "highlight" });
                        };
                    return { confirmation: { render: (e, t) => i.createElement(l.ZP, { onCancel: t, onConfirm: e, onHighlight: m, onUndohighlight: p, tweetId: a }) }, onClick() {}, Icon: r.default, text: u, testID: s.Z.highlight };
                };
        },
        778104: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                a = n.n(i),
                o = n(487606),
                r = n(690031);
            const d = a().h8a3525e,
                c = ({ scribeAction: e }) => ({
                    text: d,
                    onClick: () => {
                        e({ element: "highlight-upsell" });
                    },
                    link: { pathname: "/i/verified-choose", state: { referring_page: "tweet_highlight_action_upsell" } },
                    Icon: o.default,
                    testID: r.Z.highlightUpsell,
                });
        },
        923936: (e, t, n) => {
            n.d(t, { Z: () => B });
            var i = n(202784),
                a = n(674132),
                o = n.n(a),
                r = n(833057),
                d = n(545334),
                c = n(350968),
                l = n(40610),
                s = n(529356),
                u = n(190286),
                b = n(138099),
                p = n(750410),
                m = n(167630),
                h = n(392237),
                _ = n(312771),
                w = n(33669);
            const f = o().i419d136,
                A = o().c1b9714a,
                S = o().c5d23126,
                g = o().fe4d099a,
                v = o().cfd2f35e,
                y = o().e8d4c1cc,
                C = { label: o().b68c3784, link: { pathname: "/i/verified-choose", state: { referring_page: "get_verified_highlight_on_pin" } } },
                T = i.memo(({ isBlueUpsellEligible: e, onCancel: t, onConfirm: n, onHighlight: a, onPinTweet: o, onUndohighlight: r, tweetId: d }) => {
                    const [c, h] = i.useState(!1),
                        T = i.useMemo(() => ({ tweet_id: d }), [d]),
                        Z = i.useMemo(() => (c ? i.createElement(l.Z.Primary, { action: C, headline: y, onAction: n, style: D.callout, withIcon: !1 }) : null), [c, n]),
                        x = i.useCallback(() => {
                            e ? h(!0) : (a(), n());
                        }, [h, a, n, e]),
                        I = i.useCallback(() => {
                            o(), n();
                        }, [o, n]),
                        k = i.useCallback(
                            ({ data: e, fetchStatus: n, retry: a }) => {
                                if (n === _.ZP.LOADED) {
                                    return !!e?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted ? i.createElement(u.Z, { confirmButtonLabel: S, confirmButtonType: "primary", headline: f, onCancel: t, onConfirm: I, text: A }) : i.createElement(s.Z, { actionLabel: g, footer: Z, graphicDisplayMode: "none", headline: "Highlight your best content instead", onAction: x, onClose: t, onSecondaryAction: I, onTertiaryAction: t, secondaryActionLabel: S, subtext: "With Highlights, you can curate all your best posts on your profile.", tertiaryActionLabel: v, withCloseButton: !0 });
                                }
                                return i.createElement(b.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: D.loadingSheet, type: "center", withMask: !0 }, n === _.ZP.FAILED ? i.createElement(p.Z, { onRequestRetry: a }) : i.createElement(m.Z, null));
                            },
                            [x, I, t, Z],
                        );
                    return i.createElement(w.OE, { fetchPolicy: "network-only", render: k, variables: T });
                }),
                D = h.default.create((e) => ({ loadingSheet: { backgroundColor: "transparent" }, callout: { fontSize: e.fontSizes.body, color: e.colors.text, fontWeight: e.fontWeights.medium } })),
                Z = i.memo(T);
            var x = n(690031);
            const I = o().ha35a1d2,
                k = o().d04f95c0,
                E = o().ef4602ec;
            const B = function ({ addToast: e, createLocalApiErrorHandler: t, highlight: n, isBlueUpsellEligible: a, pin: o, scribeAction: l, tweetId: s, undoHighlight: u }) {
                const b = () => {
                        u(s).then((t) => {
                            e(t?.tweet_highlights_delete?.success ? { text: c.sp, withClearButton: !0 } : { text: E, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            l({ element: "undoHighlight" });
                    },
                    p = () => {
                        n(s).then((t) => {
                            e(t?.tweet_highlights_put?.success ? { action: { label: d.d, onAction: b }, text: c.I9, withClearButton: !0 } : { text: E, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            l({ element: "highlight" });
                    },
                    m = () => {
                        o(s).then(
                            () => {
                                e({ text: k });
                            },
                            t({ showToast: !0 }),
                        ),
                            l({ element: "pin" });
                    };
                return { confirmation: { render: (e, t) => i.createElement(Z, { isBlueUpsellEligible: a, onCancel: t, onConfirm: e, onHighlight: p, onPinTweet: m, onUndohighlight: b, tweetId: s }) }, testID: x.Z.highlightOnPin, text: I, Icon: r.default, onClick() {} };
            };
        },
        172894: (e, t, n) => {
            n.d(t, { ZP: () => b, So: () => u });
            var i = n(202784),
                a = n(674132),
                o = n.n(a),
                r = n(883437);
            const d = (0, n(523561).Z)({
                    loader: () =>
                        Promise.all([
                            n.e("icons.8"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2d1eb5e2"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            n.e("ondemand.LeaveThisConversation"),
                        ]).then(n.bind(n, 265008)),
                }),
                c = o().bb16cc76,
                l = o().de21174c,
                s = (e, t) => i.createElement(d, { onCancel: t, onConfirm: e }),
                u = (e, t) => {
                    if (!e) return !1;
                    const n = t.entities?.user_mentions?.some((t) => t.id_str === e),
                        i = t.in_reply_to_user_id_str === e,
                        a = n || i,
                        o = t.unmentioned_user_ids?.includes(e);
                    return a && !o;
                },
                b = ({ addToast: e, createLocalApiErrorHandler: t, scribeAction: n, tweet: i, unmentionUserFromConversation: a }) => ({
                    confirmation: { render: s },
                    text: c,
                    onClick: () => {
                        a(i.id_str).then(
                            () => {
                                e({ text: l });
                            },
                            t({ showToast: !0 }),
                        ),
                            n({ element: "leave_conversation" });
                    },
                    Icon: r.default,
                });
        },
        383494: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var i = n(545334),
                a = n(847607),
                o = n(775412),
                r = n(837731),
                d = n(163390);
            const c = ({ addToast: e, createLocalApiErrorHandler: t, dismissUserFromConversation: n, hasPremiumPlus: c, history: l, mute: s, muteAdUpsellEnabled: u, promotedContent: b, scribeAction: p, unmute: m, user: h }) => {
                const _ = () => {
                        m(h.id_str, { promotedContent: b }).then(() => {
                            e({ text: (0, a.X6)(h.screen_name) });
                        }, t(r.G)),
                            p({ element: "unmute" }),
                            p({ action: "unmute_user", element: "tweet_curation_action_menu" });
                    },
                    {
                        Icon: w,
                        onClick: f,
                        text: A,
                    } = (0, a.N1)(
                        h,
                        () => {
                            s(h.id_str, { promotedContent: b }).then(() => {
                                n && n({ userId: h.id_str, feedbackKeys: ["UnfollowEntity"] });
                                if (u && !!b?.impression_id && !c) {
                                    const e = { variant: "MuteAd" };
                                    l.push("/i/verified-get-verified", e);
                                }
                                e({ action: { label: i.d, onAction: _ }, text: (0, a.FK)(h.screen_name) });
                            }, t(o.W)),
                                p({ element: "mute" }),
                                p({ action: "mute_user", element: "tweet_curation_action_menu" });
                        },
                        _,
                    );
                return { Icon: w, text: A, onClick: f, shortcutKey: d.uq.mute };
            };
        },
        810373: (e, t, n) => {
            n.d(t, { Z: () => v });
            var i = n(202784),
                a = n(688715),
                o = n(529356),
                r = n(674132),
                d = n.n(r),
                c = n(232130),
                l = n(40904),
                s = n(391366),
                u = n(175856);
            const b = d().e2d6c17e,
                p = d().cd1942f4,
                m = d().bbd8bed6,
                h = d().c13af432,
                _ = d().gf5e9ea6,
                w = d().df744bda,
                f = d().j9552760,
                A = d().cfd2f35e,
                S = d().d751694c,
                g = (0, a.ju)("https://support.x.com/articles/20175032"),
                v = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: n, muteTweet: a, scribeAction: r, shouldShowMuteEducationTip: d, tweet: v, unmuteTweet: y }) => {
                    const C = () => {
                            e(u.EM);
                        },
                        T = () => {
                            y(v.id_str).then(
                                () => {
                                    t({ text: h });
                                },
                                (e) => {
                                    n({ showToast: !0 })(e), r({ element: "tweet", action: "unmute_conversation_error" });
                                },
                            ),
                                r({ element: "tweet", action: "unmute_conversation" });
                        },
                        D = {
                            text: b,
                            onClick: () => {
                                a(v.id_str).then(
                                    () => {
                                        t({ action: { label: _, onAction: T }, text: m });
                                    },
                                    (e) => {
                                        n({ showToast: !0 })(e), r({ element: "tweet", action: "mute_conversation_error" });
                                    },
                                ),
                                    r({ element: "tweet", action: "mute_conversation" });
                            },
                            confirmation: d ? { render: (e, t) => i.createElement(o.Z, { actionLabel: w, graphic: c.default, graphicDisplayMode: "illustration", headline: f, onAction: e, onClose: t, onImpression: C, onTertiaryAction: t, subtext: S, supportUrl: g, tertiaryActionLabel: A }) } : void 0,
                            Icon: l.default,
                        },
                        Z = { text: p, onClick: T, Icon: s.default };
                    return v.conversation_muted ? Z : D;
                };
        },
        273039: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(674132),
                a = n.n(i),
                o = n(833057),
                r = n(690031);
            const d = a().ha35a1d2,
                c = a().i419d136,
                l = a().c1b9714a,
                s = a().c5d23126,
                u = a().d04f95c0,
                b = a().a50c911e,
                p = ({ addToast: e, createLocalApiErrorHandler: t, pin: n, scribeAction: i, tweetId: a }) => ({
                    confirmation: { text: l, headline: c, label: s },
                    testID: r.Z.pin,
                    text: d,
                    onClick: () => {
                        n(a).then(
                            ({ addedToHighlights: t }) => {
                                e({ text: t ? b : u });
                            },
                            t({ showToast: !0 }),
                        ),
                            i({ element: "pin" });
                    },
                    Icon: o.default,
                });
        },
        122447: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(202784),
                a = n(523561),
                o = n(674132),
                r = n.n(o),
                d = n(833057);
            const c = r().d1c1e2c2,
                l = (0, a.Z)({ loader: () => n.e("ondemand.CommunityTweetPinning").then(n.bind(n, 828856)) }),
                s = (e, t, n, a) => ({ text: c, Icon: d.default, onClick() {}, confirmation: { render: (a, o) => i.createElement(l, { communityId: t, isReplacing: n, onCancel: o, onConfirm: a, tweetId: e }) } });
        },
        190443: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var i = n(674132),
                a = n.n(i),
                o = n(692165);
            const r = a().f5cdcc2c,
                d = ({ hasPremiumPlus: e, history: t, onTweetDismiss: n, promotedDismissUpsellEnabled: i }) => ({
                    text: r,
                    onClick: () => {
                        if ((n?.(), !e && i)) {
                            const e = { variant: "DismissAd" };
                            t.push("/i/verified-get-verified", e);
                        }
                    },
                    Icon: o.default,
                });
        },
        99643: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                a = n.n(i),
                o = n(487606);
            const r = a().hea3f8ac,
                d = a().a09331e0,
                c = ({ isArticle: e, landingUrl: t, scribeAction: n }) => ({
                    text: e ? d : r,
                    link: t,
                    onClick: () => {
                        n({ element: "similar_posts_action" });
                    },
                    Icon: o.default,
                });
        },
        420438: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                a = n.n(i),
                o = n(530813),
                r = n(395067);
            const d = a().c2e276e4,
                c = (e, t, n) => ({ text: d, Icon: o.default, link: { pathname: `/i/report/${r.C2.RemoveCommunityMember}/${e.id_str}?community_id=${t}`, state: { scribeNamespace: n } } });
        },
        388975: (e, t, n) => {
            n.d(t, { Z: () => u, k: () => s });
            var i = n(674132),
                a = n.n(i),
                o = n(310700),
                r = n(712881);
            const d = a().e68b09b4,
                c = a().a95f04ba,
                l = a().jfc76958,
                s = (e, t) => {
                    const n = t.extended_entities?.media && t.extended_entities.media[0] && t.extended_entities.media[0].features?.all?.tags;
                    return !!n && (0, r.Z)(n, (t) => t.user_id === e);
                },
                u = ({ createLocalApiErrorHandler: e, removeTag: t, tweet: n, viewerUserId: i }) => ({
                    confirmation: { label: d, headline: c },
                    text: l,
                    onClick: () => {
                        const a = n.extended_entities?.media?.map((e) => e.id_str).join(",");
                        t(n.id_str, { status_id: n.id_str, media_ids: a, tagged_user_ids: i }).catch(e({ showToast: !0 }));
                    },
                    Icon: o.default,
                });
        },
        59021: (e, t, n) => {
            n.d(t, { t: () => p, x: () => m });
            n(136728);
            var i = n(782261),
                a = n(966582),
                o = n(85375),
                r = n(688715),
                d = n(674132),
                c = n.n(d),
                l = n(415506),
                s = n(711223),
                u = n(395067),
                b = n(690031);
            function p(e) {
                const { featureSwitches: t, isAppealTweetWarning: n = !1, promotedContent: r, tweet: d } = e,
                    c = t.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                    p = i.Z.getLocalizedEntityName({ tweet: d, articlesEnabled: c });
                let m = { element: "report_tweet" },
                    _ = "/i/report/status",
                    w = u.C2.Tweet,
                    f = l.default,
                    A = a.Z.shouldShowAdDisclosure(r) ? h.reportAd : h.reportTweet({ entity: p });
                n && ((m = { element: "appeal_tweet_warning" }), (_ = "/i/report/appeal_tweet_warning"), (w = u.C2.AppealTweetWarning), (f = s.default), (A = h.appealTweetWarning));
                return {
                    Icon: f,
                    onClick: () => {
                        const t = e.analytics.contextualScribeData,
                            n = d?.extended_entities?.media?.length || 0,
                            i = d?.article?.media_entities?.length || 0,
                            a = (d?.entities?.urls?.length || 0) > 0 || n > 0 || i > 0 || void 0 !== d.card,
                            c = t.items && t.items[0] && t.items[0].conversation_details?.conversation_section;
                        e.scribeAction(m);
                        if (!(d.community_id_str || d.card?.name === o.sj.BROADCAST || d.card?.name === o.sj.PERISCOPE_BROADCAST || (r && !e.featureSwitches.isTrue("responsive_web_ocf_reportflow_promoted_enabled"))) && (0, u.Yw)(e.featureSwitches, w)) {
                            const t = (0, u.j_)({ clientReferer: window.location.pathname, conversationSection: c, isMedia: a, isPromoted: void 0 !== r, reportType: w, reportedTweet: d, reportedUser: d.user.id_str, scribeNamespace: e.analytics.contextualScribeNamespace });
                            e.history.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(t) } } });
                        } else e.history.push({ pathname: `${_}/${d.id_str}`, state: { clientReferer: window.location.pathname, conversationSection: c, isMedia: a, promotedContent: r, scribeNamespace: e.analytics.contextualScribeNamespace } });
                    },
                    testID: b.Z.report,
                    text: A,
                };
            }
            function m(e) {
                const t = e.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                    n = i.Z.getLocalizedEntityName({ tweet: e.tweet, articlesEnabled: t });
                return {
                    Icon: l.default,
                    link: (0, r.ju)("https://help.x.com/forms"),
                    onClick: () => {
                        e.scribeAction({ element: "report_tweet" });
                    },
                    testID: b.Z.report,
                    text: e.promotedContent ? h.reportAd : h.reportTweet({ entity: n }),
                };
            }
            const h = { appealTweetWarning: c().f1824804, reportTweet: c().j4e43d8b, reportAd: c().e3fd237e };
        },
        872147: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(674132),
                a = n.n(i),
                o = n(297938);
            const r = a().d7513755,
                d = (e, t, n) => ({ text: r({ screenName: e.screen_name }), Icon: o.default, link: { pathname: `/i/communities/${t}/search/?q=(from:${e.screen_name})`, state: { scribeNamespace: n } } });
        },
        102236: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var i = n(674132),
                a = n.n(i),
                o = n(646677),
                r = n(690031);
            const d = a().ab0decc0,
                c = a().d7dbb71b,
                l = ({ history: e, scribeAction: t, user: n }) => ({
                    text: c({ followType: d, screenName: `@${n.screen_name}` }),
                    onClick: () => {
                        e.push(`/${n.screen_name}/creator-subscriptions/subscribe`, { referring_page: "profile_action_menu" }), t({ element: "subscribe" });
                    },
                    Icon: o.default,
                    testID: r.Z.subscribe,
                });
        },
        736972: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(674132),
                a = n.n(i),
                o = n(224823),
                r = n(323683);
            const d = a().ja66a2b5,
                c = a().c2423b7b,
                l = ({ addToast: e, createLocalApiErrorHandler: t, promotedContent: n, scribeAction: i, unfollow: a, user: l }) => ({
                    text: d({ screenName: l.screen_name }),
                    onClick: () => {
                        a(l.id_str, { promotedContent: n }).then((t) => {
                            e({ text: c({ screenName: l.screen_name }) });
                        }, t(r.X)),
                            i({ element: "unfollow" }),
                            i({ action: "unfollow", element: "tweet_curation_action_menu" });
                    },
                    Icon: o.default,
                });
        },
        750633: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                a = n.n(i),
                o = n(659306);
            const r = a().i31dfa4c,
                d = a().j8e56ba2,
                c = ({ addToast: e, createLocalApiErrorHandler: t, scribeAction: n, tweet: i, unhideReply: a }) => ({
                    text: r,
                    onClick: () => {
                        a(i.id_str, { conversation_id: i.conversation_id_str }).then(
                            (t) => {
                                e({ ariaOnly: !0, text: d });
                            },
                            t({ showToast: !0 }),
                        ),
                            n({ element: "unmoderate_reply" });
                    },
                    Icon: o.default,
                });
        },
        826767: (e, t, n) => {
            n.d(t, { Z: () => b });
            var i = n(674132),
                a = n.n(i),
                o = n(833057),
                r = n(690031);
            const d = a().ic030338,
                c = a().gfcea3f4,
                l = a().eb2d59f4,
                s = a().j44ec610,
                u = a().a2dd7414,
                b = ({ addToast: e, createLocalApiErrorHandler: t, scribeAction: n, tweetId: i, unpin: a }) => ({
                    confirmation: { text: l, headline: c, label: s },
                    testID: r.Z.unpin,
                    text: d,
                    onClick: () => {
                        a(i).then(
                            () => {
                                e({ text: u });
                            },
                            t({ showToast: !0 }),
                        ),
                            n({ element: "unpin" });
                    },
                    Icon: o.default,
                });
        },
        471927: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(202784),
                a = n(523561),
                o = n(674132),
                r = n.n(o),
                d = n(963879);
            const c = r().cac6a24a,
                l = (0, a.Z)({ loader: () => n.e("ondemand.CommunityTweetPinning").then(n.bind(n, 760844)) }),
                s = (e, t, n) => ({ text: c, Icon: d.default, onClick() {}, confirmation: { render: (n, a) => i.createElement(l, { communityId: t, onCancel: a, onConfirm: n, tweetId: e }) } });
        },
        256195: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(674132),
                a = n.n(i),
                o = n(648539);
            const r = a().f9478972,
                d = ({ permalink: e, scribeAction: t }) => ({
                    text: r,
                    link: `${e}/hidden`,
                    onClick: () => {
                        t({ element: "view_moderated_replies" });
                    },
                    Icon: o.default,
                });
        },
        329268: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(782261),
                a = n(674132),
                o = n.n(a),
                r = n(53674),
                d = n(690031);
            const c = o().c5491b5d,
                l = ({ featureSwitches: e, scribeAction: t, tweet: n }) => {
                    const a = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        o = i.Z.getLocalizedEntityName({ tweet: n, articlesEnabled: a });
                    return {
                        text: c({ entity: o }),
                        Icon: r.default,
                        link: `${n.permalink}/quotes`,
                        onClick: () => {
                            t && t({ element: "tweet_engagements" });
                        },
                        testID: d.Z.tweetEngagements,
                    };
                };
        },
        264639: (e, t, n) => {
            n.d(t, { t: () => d });
            var i = n(415506),
                a = n(946099),
                o = n(782826),
                r = n(690031);
            function d(e) {
                const t = (0, a.MS)(e.reportUrl),
                    { origin: n } = o.ZP.get(),
                    { id_str: d, permalink: c, user: l } = e.tweet,
                    s = e.promotedContent ? "ad" : "post";
                return (
                    t.searchParams.set("content_id", c ? `${n}${c}` : d),
                    t.searchParams.set("content_type", s),
                    l?.screen_name && t.searchParams.set("content_author", `@${l?.screen_name}`),
                    {
                        Icon: i.default,
                        link: t.href,
                        onClick: () => {
                            e.scribeAction({ element: `report_eu_illegal_content_${s}` });
                        },
                        text: a.yh,
                        testID: r.Z.reportEUIllegalContentDSA,
                    }
                );
            }
        },
        33669: (e, t, n) => {
            n.d(t, { OE: () => w, ZP: () => S });
            var i = n(337653),
                a = n(202784),
                o = (n(585488), n(190286)),
                r = n(138099),
                d = n(750410),
                c = n(167630),
                l = n(392237),
                s = n(674132),
                u = n.n(s),
                b = n(350968),
                p = n(312771),
                m = n(301410);
            const h = u().cfd2f35e,
                _ = i.Z,
                w = (0, m.z)(_, { errorConfig: { context: "TWITTER_HIGHLIGHT_TWEET_CONFIRMATION_CONTEXT" } }),
                f = a.memo(({ onCancel: e, onConfirm: t, onHighlight: n, onUndohighlight: i, tweetId: l }) => {
                    const s = a.useMemo(() => ({ tweet_id: l }), [l]),
                        u = a.useCallback(
                            (e) => () => {
                                e(), t();
                            },
                            [t],
                        ),
                        m = a.useCallback(
                            ({ data: t, fetchStatus: l, retry: s }) => {
                                if (l === p.ZP.LOADED) {
                                    const r = !!t?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted,
                                        { confirmLabel: d, onAction: c, subtext: l, title: s } = (0, b.rg)(r, n, i);
                                    return a.createElement(o.Z, { cancelButtonLabel: h, confirmButtonLabel: d, confirmButtonType: "primary", headline: s, onCancel: e, onConfirm: u(c), text: l });
                                }
                                return a.createElement(r.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: A.loadingSheet, type: "center", withMask: !0 }, l === p.ZP.FAILED ? a.createElement(d.Z, { onRequestRetry: s }) : a.createElement(c.Z, null));
                            },
                            [n, i, u, e],
                        );
                    return a.createElement(w, { fetchPolicy: "network-only", render: m, variables: s });
                }),
                A = l.default.create((e) => ({ loadingSheet: { paddingVertical: e.spaces.space20 } })),
                S = a.memo(f);
        },
        811507: (e, t, n) => {
            n.d(t, { Z: () => g });
            var i = n(71620),
                a = n(668214),
                o = n(143322),
                r = n(491963),
                d = n(175856),
                c = n(80890),
                l = n(629196),
                s = n(390387),
                u = n(601576),
                b = n(836255),
                p = n(360142),
                m = n(919022);
            const h = (e, t) => (0, d.t5)(e, d.EM),
                _ = (e, t) => (0, d.t5)(e, d.f8),
                w = (e) => (0, d.t5)(e, d.FX),
                f = (e, t) => (0, r.n9)(e, t.tweet),
                A = (e, t) => (0, r.z0)(e, t.tweet),
                S =
                    (e) =>
                    (t, n, { featureSwitches: i }) =>
                        Promise.all([t(b.Z.delete(e)), t((0, p.ZP)({ focalTweetId: e }).deleteTimeline())]),
                g = (0, a.Z)()
                    .propsFromState(() => ({ userCountry: s.GG, userLanguage: s.VT, shouldShowMuteEducationTip: h, shouldShowHideReplyTip: _, shouldShowConversationControlsTip: w, disableRemoveFromCommunity: f, community: A }))
                    .propsFromActions(() => ({ addFlag: d.pj, addToast: u.fz, block: m.ZP.block, changeConversationControls: b.Z.changeConversationControls, createLocalApiErrorHandler: (0, i.zr)("TWEET_CURATION_ACTION_SHEET_CONTAINER"), deleteTweet: S, dismissUserFromConversation: p.f0, follow: m.ZP.follow, hideReply: b.Z.hideReply, unmentionUserFromConversation: b.Z.unmentionUserFromConversation, mute: l.r, muteTweet: b.Z.mute, pin: c.Yd, removeConversationControls: b.Z.removeConversationControls, removeTag: b.Z.removeTag, unblock: m.ZP.unblock, unfollow: m.ZP.unfollow, unhideReply: b.Z.unhideReply, unmute: m.ZP.unmute, unmuteTweet: b.Z.unmute, unpin: c.oc, highlight: b.Z.highlight, undoHighlight: b.Z.undoHighlight, unpublishArticleEntity: o.ZP.unpublish }))
                    .withAnalytics();
        },
        472513: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i.ZP });
            var i = n(201847);
        },
        690031: (e, t, n) => {
            n.d(t, { Z: () => i });
            const i = { analytics: "analytics", block: "block", pin: "pin", unpin: "unpin", report: "report", edit: "edit", editWithPremium: "editWithPremium", whyThisAd: "whyThisAd", highlight: "highlight", undoHighlight: "undoHighlight", highlightUpsell: "highlightUpsell", subscribe: "subscribe", highlightOnPin: "highlighOnPin", tweetEngagements: "tweetEngagements", reportEUIllegalContentDSA: "reportEUIllegalContentDSA", editArticle: "editArticle" };
        },
        545334: (e, t, n) => {
            n.d(t, { d: () => a });
            var i = n(674132);
            const a = n.n(i)().gf5e9ea6;
        },
        350968: (e, t, n) => {
            n.d(t, { I9: () => l, rg: () => p, sp: () => s });
            var i = n(674132),
                a = n.n(i);
            const o = a().eaae42ce,
                r = a().h032d096,
                d = a().be38d25e,
                c = a().d2be9310,
                l = a().jea6b076,
                s = a().ce6fd0ec,
                u = a().af40a8e0,
                b = a().e68b09b4,
                p = (e, t, n) => (e ? { title: r, subtext: c, onAction: n, confirmLabel: b } : { title: o, subtext: d, onAction: t, confirmLabel: u });
        },
        916585: (e, t, n) => {
            n.d(t, { k: () => r });
            var i = n(674132),
                a = n.n(i),
                o = n(437358);
            const r = (e, t) => {
                const { id_str: n, screen_name: i } = e,
                    r = (0, a().d78131b9)({ screenName: i });
                return { Icon: o.default, text: r, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: t };
            };
        },
        847607: (e, t, n) => {
            n.d(t, { Aq: () => u, FK: () => f, GS: () => d, N1: () => p, PY: () => b, X6: () => A, cm: () => c });
            n(202784);
            var i = n(674132),
                a = n.n(i),
                o = n(391366),
                r = n(40904);
            const d = a().hb568af4,
                c = a().bb1cbeb6,
                l = (a().h2f62206, a().e67b2d65),
                s = a().f05597b3,
                u = (e) => l({ screenName: e }),
                b = (e) => s({ screenName: e }),
                p = (e, t, n) => {
                    const { muting: i, screen_name: a } = e;
                    return { text: i ? b(a) : u(a), onClick: i ? n : t, Icon: i ? o.default : r.default };
                },
                m = a().h59f52ee,
                h = a().eea0cbee,
                _ = a().i29533b3,
                w = a().h129c3c3,
                f = (e) => (e ? ((e) => _({ screenName: e }))(e) : m),
                A = (e) => (e ? ((e) => w({ screenName: e }))(e) : h);
        },
        142156: (e, t, n) => {
            n.d(t, { w: () => a });
            var i = n(674132);
            const a = { defaultToast: { text: n.n(i)().ae0c5fbe }, showToast: !0 };
        },
        775412: (e, t, n) => {
            n.d(t, { W: () => d });
            var i = n(674132),
                a = n.n(i),
                o = n(615656);
            const r = a().ee87e71c,
                d = { [o.ZP.SelfMuteError]: { toast: { text: r } }, showToast: !0 };
        },
        837731: (e, t, n) => {
            n.d(t, { G: () => d });
            var i = n(674132),
                a = n.n(i),
                o = n(615656);
            const r = a().ed428a76,
                d = { [o.ZP.NotMutingTargetUser]: { toast: { text: r } }, showToast: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-e019dbda.3e8d1cea.js.map
