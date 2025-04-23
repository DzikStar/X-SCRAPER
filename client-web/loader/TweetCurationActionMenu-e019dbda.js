"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-e019dbda"],
    {
        463678: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                o = n.n(i),
                r = n(692165),
                a = n(690031);
            const s = o().fb4ee11c,
                c = ({ promotedContent: e, scribeAction: t }) => {
                    if (!e || !e.impression_id) return;
                    const { impression_id: n } = e;
                    return {
                        text: s,
                        Icon: r.default,
                        link: { pathname: `/i/about-this-ad/${n}` },
                        onClick: () => {
                            t && t({ element: "whythisad" });
                        },
                        testID: a.Z.whyThisAd,
                    };
                };
        },
        73066: (e, t, n) => {
            n.d(t, { Z: () => o });
            var i = n(916585);
            const o = ({ scribeAction: e, user: t }) =>
                (0, i.k)(t, () => {
                    e({ element: "add_to_list" });
                });
        },
        404914: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(782261),
                o = n(674132),
                r = n.n(o),
                a = n(53674),
                s = n(690031);
            const c = r().ad50e7d9,
                l = ({ featureSwitches: e, scribeAction: t, tweet: n }) => {
                    const o = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        r = i.Z.getLocalizedEntityName({ tweet: n, articlesEnabled: o });
                    return {
                        text: c({ entity: r }),
                        onClick: () => {
                            t({ element: "analytics" });
                        },
                        link: `/${n.user.screen_name}/status/${n.id_str}/analytics`,
                        Icon: a.default,
                        testID: s.Z.analytics,
                    };
                };
        },
        921795: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(674132),
                o = n.n(i),
                r = n(625271);
            const a = o().ef1042f8,
                s = (e, { scribeAction: t, tweetId: n }) => ({
                    text: a,
                    onClick: () => {
                        t({ element: "contribute_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/contribute/${n}` },
                    Icon: r.default,
                });
        },
        999999: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(674132),
                o = n.n(i),
                r = n(730873);
            const a = o().h3edf7a6,
                s = (e, { scribeAction: t, tweetId: n }) => ({
                    text: a,
                    onClick: () => {
                        t({ element: "noterequest_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/noterequest/${n}` },
                    Icon: r.default,
                });
        },
        237467: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(674132),
                o = n.n(i),
                r = n(194661);
            const a = o().bae0cbc0,
                s = o().bf8d98f4,
                c = o().e69ada9e,
                l = ({ onChangeConversationControls: e, tweet: t }) => {
                    const n = !!t.exclusivity_info,
                        i = !!t.premium_info,
                        o = n || i;
                    return { disabled: o, onClick: o ? void 0 : e, subText: n ? s : i ? c : void 0, text: a, Icon: r.default };
                };
        },
        234410: (e, t, n) => {
            n.d(t, { Z: () => b });
            var i = n(202784),
                o = n(325686),
                r = n(782261),
                a = n(392237),
                s = n(674132),
                c = n.n(s),
                l = n(607127);
            const d = c().d96cf7ce,
                u = c().ae04c4dd,
                m = c().d9442996,
                h = c().dad785a7,
                _ = c().jda253ab,
                p = c().j49c2f85,
                f = c().f9fa0390,
                b = ({ addToast: e, createLocalApiErrorHandler: t, deleteTweet: n, featureSwitches: a, onDeleteTweet: s, scribeAction: c, tweet: b, userClaims: g }) => {
                    const C = (g.isTrueAndEnabled("subscriptions_feature_labs_1004") || a.isTrue("responsive_web_edit_tweet_enabled")) && a.isTrue("responsive_web_edit_tweet_composition_enabled"),
                        T = a.isTrue("subscriptions_feature_labs_1004") || a.isTrue("responsive_web_edit_tweet_enabled"),
                        v = a.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        y = r.Z.postEntityName;
                    return {
                        confirmation: { label: d, headline: u({ entity: y }), text: r.Z.getOriginalTweet(b).isEdited && (C || T) ? h({ entity: y }) : v && r.Z.isArticlePost(b) ? i.createElement(i.Fragment, null, m, i.createElement(o.Z, { style: w.additionalInfo }, f)) : m, confirmButtonType: "destructiveFilled" },
                        isEmphasized: !0,
                        text: d,
                        onClick: () => {
                            n(b.id_str).then(
                                () => {
                                    e({ text: _({ entity: y }) });
                                },
                                t({ defaultToast: { text: p({ entity: y }) }, showToast: !0 }),
                            ),
                                c({ element: "delete" }),
                                s && s(b.id_str);
                        },
                        Icon: l.default,
                    };
                },
                w = a.default.create((e) => ({ additionalInfo: { marginTop: e.spaces.space8 } }));
        },
        486809: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                o = n.n(i),
                r = n(72591),
                a = n(690031);
            const s = o().d9a2bd78,
                c = ({ downloadVideoLink: e, scribeAction: t }) => ({
                    text: s,
                    onClick: () => {
                        t({ element: "download-video" });
                    },
                    link: e,
                    Icon: r.default,
                    testID: a.Z.subscribe,
                });
        },
        99217: (e, t, n) => {
            n.d(t, { Z: () => h });
            n(136728);
            var i = n(674132),
                o = n.n(i),
                r = n(376021),
                a = n(689985),
                s = n(690031);
            const c = o().dad450ec,
                l = o().g9677c6e,
                d = o().b57bfe70,
                u = o().bd3da7be,
                m = o().j26481e6,
                h = ({ addToast: e, articleEnttiyId: t, createLocalApiErrorHandler: n, history: i, scribeAction: o, unpublishArticleEntity: h }) => ({
                    confirmation: { text: u, headline: d, label: l },
                    testID: s.Z.editArticle,
                    text: c,
                    onClick: () => {
                        h(t).then(
                            () => {
                                i.push({ pathname: (0, a.lU)(t) }), e({ text: m });
                            },
                            n({ showToast: !0 }),
                        ),
                            o({ element: "editArticle" });
                    },
                    Icon: r.default,
                });
        },
        448573: (e, t, n) => {
            n.d(t, { H: () => d, Q: () => u });
            var i = n(310452),
                o = n(354149),
                r = n(674132),
                a = n.n(r),
                s = n(376021),
                c = n(507824),
                l = n(690031);
            function d(e, t) {
                let n = !0;
                if (e.edit_control?.editable_until_msecs) {
                    const t = h(e.edit_control.editable_until_msecs);
                    n = Date.now() > new Date(t);
                }
                const i = "0" === e.edit_control?.edits_remaining,
                    o = !!e.edit_control?.is_edit_eligible,
                    r = "Twitter for iPhone" !== e.source_name && "Twitter for iPad" !== e.source_name && "Twitter for Android" !== e.source_name,
                    a = e.user.pinned_tweet_ids_str,
                    s = Array.isArray(a) && a.some((t) => t === e.id_str);
                return t.isUserTweetAuthor && !n && !i && !e.isStaleEdit && o && r && !s;
            }
            function u(e) {
                const { featureSwitches: t, tweet: n } = e;
                let o = "";
                if (n.note_tweet || n.full_text) {
                    const e = { featureSwitches: t, forceEnabled: !0 },
                        r = c.Bq(n, e);
                    o = i.ZP.tweetTextParts(r.text, r.display_text_range, r.entities).map(_).join("");
                }
                return {
                    testID: l.Z.edit,
                    onClick: () => {
                        e.scribeAction({ element: "edit" });
                    },
                    text: m,
                    Icon: s.default,
                    link: { pathname: "/compose/post", state: { previousTweetId: n.id_str, defaultText: o, quotedStatusId: n.quoted_status?.id_str, hideUnsentTweetsButton: !0, editableUntil: n.edit_control?.editable_until_msecs, isLastEdit: "1" === n.edit_control?.edits_remaining } },
                };
            }
            const m = a().cb817dae,
                h = (e) => parseInt(e, 10);
            function _(e) {
                switch (e.entityType) {
                    case "cashtag":
                    case "emoji":
                    case "hashtag":
                    case "mention":
                    case "text":
                        return `${e.prefix || ""}${(0, o.Tz)(e.text)}`;
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
                o = n.n(i),
                r = n(376021),
                a = n(690031);
            const s = o().abd845fe,
                c = ({ onClick: e, scribeAction: t, tweet: n }) => ({
                    onClick: () => {
                        t({ element: "edit-upsell" }), e();
                    },
                    text: s,
                    Icon: r.default,
                    testID: a.Z.editWithPremium,
                });
        },
        722494: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(782261),
                o = n(674132),
                r = n.n(o),
                a = n(498720);
            const s = r().fd391b9f,
                c = ({ featureSwitches: e, permalink: t, scribeAction: n, tweet: o }) => {
                    const r = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        c = i.Z.getLocalizedEntityName({ tweet: o, articlesEnabled: r });
                    return {
                        text: s({ entity: c }),
                        onClick: () => {
                            const e = `https://publish.twitter.com/?url=https://twitter.com${t}`;
                            window.open(e, "_blank"), n({ element: "embed_tweet" });
                        },
                        Icon: a.default,
                    };
                };
        },
        407608: (e, t, n) => {
            n.d(t, { ZP: () => d });
            var i = n(674132),
                o = n.n(i),
                r = n(911373),
                a = n(757953);
            const s = o().c66afdc3,
                c = o().hbe4feb5,
                l = o().e1618e49,
                d = ({ addToast: e, createLocalApiErrorHandler: t, follow: n, promotedContent: i, scribeAction: o, user: d }) => ({
                    text: s({ screenName: d.screen_name }),
                    onClick: () => {
                        n(d.id_str, { promotedContent: i }).then(
                            () => {
                                o({ element: "follow" }), d.protected ? e({ text: c({ screenName: d.screen_name }) }) : e({ text: l({ screenName: d.screen_name }) });
                            },
                            t({ ...a.H, showToast: !0 }),
                        ),
                            o({ element: "follow_attempt" });
                    },
                    Icon: r.default,
                });
        },
        191444: (e, t, n) => {
            n.d(t, { ZP: () => y });
            var i = n(202784),
                o = n(688715),
                r = n(529356),
                a = n(190286),
                s = n(674132),
                c = n.n(s),
                l = n(520913),
                d = n(648539),
                u = n(175856);
            const m = c().ge5067bc,
                h = c().j136c720,
                _ = c().d66f0338,
                p = `${c().cfc8cb50}\n\n${c().if8dc5f0}`,
                f = (0, o.ju)("https://help.x.com/using-twitter/mentions-and-replies?lang=browser#hidden-reply"),
                b = c().b2615c6d,
                w = c().i62a03aa,
                g = c().cfd2f35e,
                C = c().a6450e84,
                T = c().g353ad73,
                v = c().ad00a739,
                y = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: n, hideReply: o, isSoftBlockEnabled: s, onBlock: c, onTweetDismiss: y, scribeAction: A, shouldShowHideReplyTip: Z, tweet: x }) => {
                    const I = () => {
                        A({ element: "moderated_replies_prompt", action: "impression" });
                    };
                    return {
                        confirmation: Z
                            ? { render: (e, t) => (({ onConfirm: e, onCancel: t, onHideReplyImpression: n = () => {} }) => i.createElement(r.Z, { actionLabel: m, graphic: l.default, headline: _, onAction: e, onClose: t, onImpression: n, onTertiaryAction: t, subtext: p, supportUrl: f, tertiaryActionLabel: g }))({ onConfirm: e, onCancel: t, onHideReplyImpression: I }) }
                            : {
                                  render: (e, t) => {
                                      const {
                                          user: { screen_name: n },
                                      } = x;
                                      return i.createElement(a.Z, {
                                          cancelButtonLabel: w,
                                          confirmButtonLabel: C,
                                          confirmButtonType: "destructiveFilled",
                                          headline: b({ screenName: n }),
                                          onCancel: e,
                                          onConfirm: () => {
                                              c(), e();
                                          },
                                          text: s ? v({ screenName: n }) : T({ screenName: n }),
                                      });
                                  },
                              },
                        text: m,
                        onClick: () => {
                            e(u.f8),
                                o(x.id_str, { conversation_id: x.conversation_id_str }).then(
                                    (e) => {
                                        y && y(), t({ text: h });
                                    },
                                    n({ showToast: !0 }),
                                ),
                                A({ element: "moderate_reply" });
                        },
                        Icon: d.default,
                    };
                };
        },
        317859: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                o = n.n(i),
                r = n(161335),
                a = n(395067);
            const s = o().f9f27fa2,
                c = (e, t) => ({ text: s, Icon: r.default, link: { pathname: `/i/report/${a.C2.HideCommunityTweet}/${e}`, state: { scribeNamespace: t } } });
        },
        901023: (e, t, n) => {
            n.d(t, { Z: () => h });
            var i = n(202784),
                o = n(674132),
                r = n.n(o),
                a = n(487606),
                s = n(545334),
                c = n(350968),
                l = n(33669),
                d = n(690031);
            const u = r().ce87916a,
                m = r().ef4602ec,
                h = ({ addToast: e, highlight: t, scribeAction: n, tweetId: o, undoHighlight: r }) => {
                    const h = () => {
                            r(o).then((t) => {
                                e(t?.tweet_highlights_delete?.success ? { text: c.sp, withClearButton: !0 } : { text: m, withClearButton: !0, withAutoDismiss: !0 });
                            }),
                                n({ element: "undoHighlight" });
                        },
                        _ = () => {
                            t(o).then((t) => {
                                e(t?.tweet_highlights_put?.success ? { action: { label: s.d, onAction: h }, text: c.I9, withClearButton: !0 } : { text: m, withClearButton: !0, withAutoDismiss: !0 });
                            }),
                                n({ element: "highlight" });
                        };
                    return { confirmation: { render: (e, t) => i.createElement(l.ZP, { onCancel: t, onConfirm: e, onHighlight: _, onUndohighlight: h, tweetId: o }) }, onClick() {}, Icon: a.default, text: u, testID: d.Z.highlight };
                };
        },
        778104: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                o = n.n(i),
                r = n(487606),
                a = n(690031);
            const s = o().h8a3525e,
                c = ({ scribeAction: e }) => ({
                    text: s,
                    onClick: () => {
                        e({ element: "highlight-upsell" });
                    },
                    link: { pathname: "/i/verified-choose", state: { referring_page: "tweet_highlight_action_upsell" } },
                    Icon: r.default,
                    testID: a.Z.highlightUpsell,
                });
        },
        923936: (e, t, n) => {
            n.d(t, { Z: () => D });
            var i = n(202784),
                o = n(674132),
                r = n.n(o),
                a = n(833057),
                s = n(545334),
                c = n(350968),
                l = n(40610),
                d = n(529356),
                u = n(190286),
                m = n(138099),
                h = n(750410),
                _ = n(167630),
                p = n(392237),
                f = n(312771),
                b = n(33669);
            const w = r().i419d136,
                g = r().c1b9714a,
                C = r().c5d23126,
                T = r().fe4d099a,
                v = r().cfd2f35e,
                y = r().e8d4c1cc,
                A = { label: r().b68c3784, link: { pathname: "/i/verified-choose", state: { referring_page: "get_verified_highlight_on_pin" } } },
                Z = i.memo(({ isBlueUpsellEligible: e, onCancel: t, onConfirm: n, onHighlight: o, onPinTweet: r, onUndohighlight: a, tweetId: s }) => {
                    const [c, p] = i.useState(!1),
                        Z = i.useMemo(() => ({ tweet_id: s }), [s]),
                        I = i.useMemo(() => (c ? i.createElement(l.Z.Primary, { action: A, headline: y, onAction: n, style: x.callout, withIcon: !1 }) : null), [c, n]),
                        k = i.useCallback(() => {
                            e ? p(!0) : (o(), n());
                        }, [p, o, n, e]),
                        E = i.useCallback(() => {
                            r(), n();
                        }, [r, n]),
                        P = i.useCallback(
                            ({ data: e, fetchStatus: n, retry: o }) => {
                                if (n === f.ZP.LOADED) {
                                    return !!e?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted ? i.createElement(u.Z, { confirmButtonLabel: C, confirmButtonType: "primary", headline: w, onCancel: t, onConfirm: E, text: g }) : i.createElement(d.Z, { actionLabel: T, footer: I, graphicDisplayMode: "none", headline: "Highlight your best content instead", onAction: k, onClose: t, onSecondaryAction: E, onTertiaryAction: t, secondaryActionLabel: C, subtext: "With Highlights, you can curate all your best posts on your profile.", tertiaryActionLabel: v, withCloseButton: !0 });
                                }
                                return i.createElement(m.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: x.loadingSheet, type: "center", withMask: !0 }, n === f.ZP.FAILED ? i.createElement(h.Z, { onRequestRetry: o }) : i.createElement(_.Z, null));
                            },
                            [k, E, t, I],
                        );
                    return i.createElement(b.OE, { fetchPolicy: "network-only", render: P, variables: Z });
                }),
                x = p.default.create((e) => ({ loadingSheet: { backgroundColor: "transparent" }, callout: { fontSize: e.fontSizes.body, color: e.colors.text, fontWeight: e.fontWeights.medium } })),
                I = i.memo(Z);
            var k = n(690031);
            const E = r().ha35a1d2,
                P = r().d04f95c0,
                S = r().ef4602ec;
            const D = function ({ addToast: e, createLocalApiErrorHandler: t, highlight: n, isBlueUpsellEligible: o, pin: r, scribeAction: l, tweetId: d, undoHighlight: u }) {
                const m = () => {
                        u(d).then((t) => {
                            e(t?.tweet_highlights_delete?.success ? { text: c.sp, withClearButton: !0 } : { text: S, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            l({ element: "undoHighlight" });
                    },
                    h = () => {
                        n(d).then((t) => {
                            e(t?.tweet_highlights_put?.success ? { action: { label: s.d, onAction: m }, text: c.I9, withClearButton: !0 } : { text: S, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            l({ element: "highlight" });
                    },
                    _ = () => {
                        r(d).then(
                            () => {
                                e({ text: P });
                            },
                            t({ showToast: !0 }),
                        ),
                            l({ element: "pin" });
                    };
                return { confirmation: { render: (e, t) => i.createElement(I, { isBlueUpsellEligible: o, onCancel: t, onConfirm: e, onHighlight: h, onPinTweet: _, onUndohighlight: m, tweetId: d }) }, testID: k.Z.highlightOnPin, text: E, Icon: a.default, onClick() {} };
            };
        },
        172894: (e, t, n) => {
            n.d(t, { ZP: () => m, So: () => u });
            var i = n(202784),
                o = n(674132),
                r = n.n(o),
                a = n(883437);
            const s = (0, n(523561).Z)({ loader: () => Promise.all([n.e("icons.16"), n.e("icons.25"), n.e("ondemand.LeaveThisConversation")]).then(n.bind(n, 265008)) }),
                c = r().bb16cc76,
                l = r().de21174c,
                d = (e, t) => i.createElement(s, { onCancel: t, onConfirm: e }),
                u = (e, t) => {
                    if (!e) return !1;
                    const n = t.entities?.user_mentions?.some((t) => t.id_str === e),
                        i = t.in_reply_to_user_id_str === e,
                        o = n || i,
                        r = t.unmentioned_user_ids?.includes(e);
                    return o && !r;
                },
                m = ({ addToast: e, createLocalApiErrorHandler: t, scribeAction: n, tweet: i, unmentionUserFromConversation: o }) => ({
                    confirmation: { render: d },
                    text: c,
                    onClick: () => {
                        o(i.id_str).then(
                            () => {
                                e({ text: l });
                            },
                            t({ showToast: !0 }),
                        ),
                            n({ element: "leave_conversation" });
                    },
                    Icon: a.default,
                });
        },
        383494: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var i = n(545334),
                o = n(847607),
                r = n(775412),
                a = n(837731),
                s = n(163390);
            const c = ({ addToast: e, createLocalApiErrorHandler: t, dismissUserFromConversation: n, hasPremiumPlus: c, history: l, mute: d, muteAdUpsellEnabled: u, promotedContent: m, scribeAction: h, unmute: _, user: p }) => {
                const f = () => {
                        _(p.id_str, { promotedContent: m }).then(() => {
                            e({ text: (0, o.X6)(p.screen_name) });
                        }, t(a.G)),
                            h({ element: "unmute" });
                    },
                    {
                        Icon: b,
                        onClick: w,
                        text: g,
                    } = (0, o.N1)(
                        p,
                        () => {
                            d(p.id_str, { promotedContent: m }).then(() => {
                                n && n({ userId: p.id_str, feedbackKeys: ["UnfollowEntity"] });
                                if (u && !!m?.impression_id && !c) {
                                    const e = { variant: "MuteAd" };
                                    l.push("/i/verified-get-verified", e);
                                }
                                e({ action: { label: i.d, onAction: f }, text: (0, o.FK)(p.screen_name) });
                            }, t(r.W)),
                                h({ element: "mute" });
                        },
                        f,
                    );
                return { Icon: b, text: g, onClick: w, shortcutKey: s.uq.mute };
            };
        },
        810373: (e, t, n) => {
            n.d(t, { Z: () => v });
            var i = n(202784),
                o = n(688715),
                r = n(529356),
                a = n(674132),
                s = n.n(a),
                c = n(232130),
                l = n(40904),
                d = n(391366),
                u = n(175856);
            const m = s().e2d6c17e,
                h = s().cd1942f4,
                _ = s().bbd8bed6,
                p = s().c13af432,
                f = s().gf5e9ea6,
                b = s().df744bda,
                w = s().j9552760,
                g = s().cfd2f35e,
                C = s().d751694c,
                T = (0, o.ju)("https://support.x.com/articles/20175032"),
                v = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: n, muteTweet: o, scribeAction: a, shouldShowMuteEducationTip: s, tweet: v, unmuteTweet: y }) => {
                    const A = () => {
                            e(u.EM);
                        },
                        Z = () => {
                            y(v.id_str).then(
                                () => {
                                    t({ text: p });
                                },
                                (e) => {
                                    n({ showToast: !0 })(e), a({ element: "unmute_conversation_error" });
                                },
                            ),
                                a({ element: "unmute_conversation" });
                        },
                        x = {
                            text: m,
                            onClick: () => {
                                o(v.id_str).then(
                                    () => {
                                        t({ action: { label: f, onAction: Z }, text: _ });
                                    },
                                    (e) => {
                                        n({ showToast: !0 })(e), a({ element: "mute_conversation_error" });
                                    },
                                ),
                                    a({ element: "mute_conversation" });
                            },
                            confirmation: s ? { render: (e, t) => i.createElement(r.Z, { actionLabel: b, graphic: c.default, graphicDisplayMode: "illustration", headline: w, onAction: e, onClose: t, onImpression: A, onTertiaryAction: t, subtext: C, supportUrl: T, tertiaryActionLabel: g }) } : void 0,
                            Icon: l.default,
                        },
                        I = { text: h, onClick: Z, Icon: d.default };
                    return v.conversation_muted ? I : x;
                };
        },
        273039: (e, t, n) => {
            n.d(t, { Z: () => h });
            var i = n(674132),
                o = n.n(i),
                r = n(833057),
                a = n(690031);
            const s = o().ha35a1d2,
                c = o().i419d136,
                l = o().c1b9714a,
                d = o().c5d23126,
                u = o().d04f95c0,
                m = o().a50c911e,
                h = ({ addToast: e, createLocalApiErrorHandler: t, pin: n, scribeAction: i, tweetId: o }) => ({
                    confirmation: { text: l, headline: c, label: d },
                    testID: a.Z.pin,
                    text: s,
                    onClick: () => {
                        n(o).then(
                            ({ addedToHighlights: t }) => {
                                e({ text: t ? m : u });
                            },
                            t({ showToast: !0 }),
                        ),
                            i({ element: "pin" });
                    },
                    Icon: r.default,
                });
        },
        122447: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                o = n(523561),
                r = n(674132),
                a = n.n(r),
                s = n(833057);
            const c = a().d1c1e2c2,
                l = (0, o.Z)({ loader: () => n.e("ondemand.CommunityTweetPinning").then(n.bind(n, 828856)) }),
                d = (e, t, n, o) => ({ text: c, Icon: s.default, onClick() {}, confirmation: { render: (o, r) => i.createElement(l, { communityId: t, isReplacing: n, onCancel: r, onConfirm: o, tweetId: e }) } });
        },
        190443: (e, t, n) => {
            n.d(t, { Z: () => s });
            n(136728);
            var i = n(674132),
                o = n.n(i),
                r = n(692165);
            const a = o().f5cdcc2c,
                s = ({ hasPremiumPlus: e, history: t, onTweetDismiss: n, promotedDismissUpsellEnabled: i }) => ({
                    text: a,
                    onClick: () => {
                        if ((n?.(), !e && i)) {
                            const e = { variant: "DismissAd" };
                            t.push("/i/verified-get-verified", e);
                        }
                    },
                    Icon: r.default,
                });
        },
        99643: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                o = n.n(i),
                r = n(487606);
            const a = o().hea3f8ac,
                s = o().a09331e0,
                c = ({ isArticle: e, landingUrl: t, scribeAction: n }) => ({
                    text: e ? s : a,
                    link: t,
                    onClick: () => {
                        n({ element: "similar_posts_action" });
                    },
                    Icon: r.default,
                });
        },
        420438: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                o = n.n(i),
                r = n(530813),
                a = n(395067);
            const s = o().c2e276e4,
                c = (e, t, n) => ({ text: s, Icon: r.default, link: { pathname: `/i/report/${a.C2.RemoveCommunityMember}/${e.id_str}?community_id=${t}`, state: { scribeNamespace: n } } });
        },
        388975: (e, t, n) => {
            n.d(t, { Z: () => u, k: () => d });
            var i = n(674132),
                o = n.n(i),
                r = n(310700),
                a = n(712881);
            const s = o().e68b09b4,
                c = o().a95f04ba,
                l = o().jfc76958,
                d = (e, t) => {
                    const n = t.extended_entities?.media && t.extended_entities.media[0] && t.extended_entities.media[0].features?.all?.tags;
                    return !!n && (0, a.Z)(n, (t) => t.user_id === e);
                },
                u = ({ createLocalApiErrorHandler: e, removeTag: t, tweet: n, viewerUserId: i }) => ({
                    confirmation: { label: s, headline: c },
                    text: l,
                    onClick: () => {
                        const o = n.extended_entities?.media?.map((e) => e.id_str).join(",");
                        t(n.id_str, { status_id: n.id_str, media_ids: o, tagged_user_ids: i }).catch(e({ showToast: !0 }));
                    },
                    Icon: r.default,
                });
        },
        59021: (e, t, n) => {
            n.d(t, { t: () => h, x: () => _ });
            n(136728);
            var i = n(782261),
                o = n(966582),
                r = n(85375),
                a = n(688715),
                s = n(674132),
                c = n.n(s),
                l = n(415506),
                d = n(711223),
                u = n(395067),
                m = n(690031);
            function h(e) {
                const { featureSwitches: t, isAppealTweetWarning: n = !1, promotedContent: a, tweet: s } = e,
                    c = t.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                    h = i.Z.getLocalizedEntityName({ tweet: s, articlesEnabled: c });
                let _ = { element: "report_tweet" },
                    f = "/i/report/status",
                    b = u.C2.Tweet,
                    w = l.default,
                    g = o.Z.shouldShowAdDisclosure(a) ? p.reportAd : p.reportTweet({ entity: h });
                n && ((_ = { element: "appeal_tweet_warning" }), (f = "/i/report/appeal_tweet_warning"), (b = u.C2.AppealTweetWarning), (w = d.default), (g = p.appealTweetWarning));
                return {
                    Icon: w,
                    onClick: () => {
                        const t = e.analytics.contextualScribeData,
                            n = s?.extended_entities?.media?.length || 0,
                            i = s?.article?.media_entities?.length || 0,
                            o = (s?.entities?.urls?.length || 0) > 0 || n > 0 || i > 0 || void 0 !== s.card,
                            c = t.items && t.items[0] && t.items[0].conversation_details?.conversation_section;
                        e.scribeAction(_);
                        if (!(s.community_id_str || s.card?.name === r.sj.BROADCAST || s.card?.name === r.sj.PERISCOPE_BROADCAST || (a && !e.featureSwitches.isTrue("responsive_web_ocf_reportflow_promoted_enabled"))) && (0, u.Yw)(e.featureSwitches, b)) {
                            const t = (0, u.j_)({ clientReferer: window.location.pathname, conversationSection: c, isMedia: o, isPromoted: void 0 !== a, reportType: b, reportedTweet: s, reportedUser: s.user.id_str, scribeNamespace: e.analytics.contextualScribeNamespace });
                            e.history.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(t) } } });
                        } else e.history.push({ pathname: `${f}/${s.id_str}`, state: { clientReferer: window.location.pathname, conversationSection: c, isMedia: o, promotedContent: a, scribeNamespace: e.analytics.contextualScribeNamespace } });
                    },
                    testID: m.Z.report,
                    text: g,
                };
            }
            function _(e) {
                const t = e.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                    n = i.Z.getLocalizedEntityName({ tweet: e.tweet, articlesEnabled: t });
                return {
                    Icon: l.default,
                    link: (0, a.ju)("https://help.x.com/forms"),
                    onClick: () => {
                        e.scribeAction({ element: "report_tweet" });
                    },
                    testID: m.Z.report,
                    text: e.promotedContent ? p.reportAd : p.reportTweet({ entity: n }),
                };
            }
            const p = { appealTweetWarning: c().f1824804, reportTweet: c().j4e43d8b, reportAd: c().e3fd237e };
        },
        872147: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(674132),
                o = n.n(i),
                r = n(297938);
            const a = o().d7513755,
                s = (e, t, n) => ({ text: a({ screenName: e.screen_name }), Icon: r.default, link: { pathname: `/i/communities/${t}/search/?q=(from:${e.screen_name})`, state: { scribeNamespace: n } } });
        },
        102236: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var i = n(674132),
                o = n.n(i),
                r = n(646677),
                a = n(690031);
            const s = o().ab0decc0,
                c = o().d7dbb71b,
                l = ({ history: e, scribeAction: t, user: n }) => ({
                    text: c({ followType: s, screenName: `@${n.screen_name}` }),
                    onClick: () => {
                        e.push(`/${n.screen_name}/creator-subscriptions/subscribe`, { referring_page: "profile_action_menu" }), t({ element: "subscribe" });
                    },
                    Icon: r.default,
                    testID: a.Z.subscribe,
                });
        },
        736972: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(674132),
                o = n.n(i),
                r = n(224823),
                a = n(323683);
            const s = o().ja66a2b5,
                c = o().c2423b7b,
                l = ({ addToast: e, createLocalApiErrorHandler: t, promotedContent: n, scribeAction: i, unfollow: o, user: l }) => ({
                    text: s({ screenName: l.screen_name }),
                    onClick: () => {
                        o(l.id_str, { promotedContent: n }).then((t) => {
                            e({ text: c({ screenName: l.screen_name }) });
                        }, t(a.X)),
                            i({ element: "unfollow" });
                    },
                    Icon: r.default,
                });
        },
        750633: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(674132),
                o = n.n(i),
                r = n(659306);
            const a = o().i31dfa4c,
                s = o().j8e56ba2,
                c = ({ addToast: e, createLocalApiErrorHandler: t, scribeAction: n, tweet: i, unhideReply: o }) => ({
                    text: a,
                    onClick: () => {
                        o(i.id_str, { conversation_id: i.conversation_id_str }).then(
                            (t) => {
                                e({ ariaOnly: !0, text: s });
                            },
                            t({ showToast: !0 }),
                        ),
                            n({ element: "unmoderate_reply" });
                    },
                    Icon: r.default,
                });
        },
        826767: (e, t, n) => {
            n.d(t, { Z: () => m });
            var i = n(674132),
                o = n.n(i),
                r = n(833057),
                a = n(690031);
            const s = o().ic030338,
                c = o().gfcea3f4,
                l = o().eb2d59f4,
                d = o().j44ec610,
                u = o().a2dd7414,
                m = ({ addToast: e, createLocalApiErrorHandler: t, scribeAction: n, tweetId: i, unpin: o }) => ({
                    confirmation: { text: l, headline: c, label: d },
                    testID: a.Z.unpin,
                    text: s,
                    onClick: () => {
                        o(i).then(
                            () => {
                                e({ text: u });
                            },
                            t({ showToast: !0 }),
                        ),
                            n({ element: "unpin" });
                    },
                    Icon: r.default,
                });
        },
        471927: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                o = n(523561),
                r = n(674132),
                a = n.n(r),
                s = n(963879);
            const c = a().cac6a24a,
                l = (0, o.Z)({ loader: () => n.e("ondemand.CommunityTweetPinning").then(n.bind(n, 760844)) }),
                d = (e, t, n) => ({ text: c, Icon: s.default, onClick() {}, confirmation: { render: (n, o) => i.createElement(l, { communityId: t, onCancel: o, onConfirm: n, tweetId: e }) } });
        },
        256195: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(674132),
                o = n.n(i),
                r = n(648539);
            const a = o().f9478972,
                s = ({ permalink: e, scribeAction: t }) => ({
                    text: a,
                    link: `${e}/hidden`,
                    onClick: () => {
                        t({ element: "view_moderated_replies" });
                    },
                    Icon: r.default,
                });
        },
        329268: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(782261),
                o = n(674132),
                r = n.n(o),
                a = n(53674),
                s = n(690031);
            const c = r().c5491b5d,
                l = ({ featureSwitches: e, scribeAction: t, tweet: n }) => {
                    const o = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        r = i.Z.getLocalizedEntityName({ tweet: n, articlesEnabled: o });
                    return {
                        text: c({ entity: r }),
                        Icon: a.default,
                        link: `${n.permalink}/quotes`,
                        onClick: () => {
                            t && t({ element: "tweet_engagements" });
                        },
                        testID: s.Z.tweetEngagements,
                    };
                };
        },
        264639: (e, t, n) => {
            n.d(t, { t: () => s });
            var i = n(415506),
                o = n(946099),
                r = n(782826),
                a = n(690031);
            function s(e) {
                const t = (0, o.MS)(e.reportUrl),
                    { origin: n } = r.ZP.get(),
                    { id_str: s, permalink: c, user: l } = e.tweet,
                    d = e.promotedContent ? "ad" : "post";
                return (
                    t.searchParams.set("content_id", c ? `${n}${c}` : s),
                    t.searchParams.set("content_type", d),
                    l?.screen_name && t.searchParams.set("content_author", `@${l?.screen_name}`),
                    {
                        Icon: i.default,
                        link: t.href,
                        onClick: () => {
                            e.scribeAction({ element: `report_eu_illegal_content_${d}` });
                        },
                        text: o.yh,
                        testID: a.Z.reportEUIllegalContentDSA,
                    }
                );
            }
        },
        33669: (e, t, n) => {
            n.d(t, { OE: () => b, ZP: () => C });
            var i = n(337653),
                o = n(202784),
                r = (n(585488), n(190286)),
                a = n(138099),
                s = n(750410),
                c = n(167630),
                l = n(392237),
                d = n(674132),
                u = n.n(d),
                m = n(350968),
                h = n(312771),
                _ = n(301410);
            const p = u().cfd2f35e,
                f = i.Z,
                b = (0, _.z)(f, { errorConfig: { context: "TWITTER_HIGHLIGHT_TWEET_CONFIRMATION_CONTEXT" } }),
                w = o.memo(({ onCancel: e, onConfirm: t, onHighlight: n, onUndohighlight: i, tweetId: l }) => {
                    const d = o.useMemo(() => ({ tweet_id: l }), [l]),
                        u = o.useCallback(
                            (e) => () => {
                                e(), t();
                            },
                            [t],
                        ),
                        _ = o.useCallback(
                            ({ data: t, fetchStatus: l, retry: d }) => {
                                if (l === h.ZP.LOADED) {
                                    const a = !!t?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted,
                                        { confirmLabel: s, onAction: c, subtext: l, title: d } = (0, m.rg)(a, n, i);
                                    return o.createElement(r.Z, { cancelButtonLabel: p, confirmButtonLabel: s, confirmButtonType: "primary", headline: d, onCancel: e, onConfirm: u(c), text: l });
                                }
                                return o.createElement(a.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: g.loadingSheet, type: "center", withMask: !0 }, l === h.ZP.FAILED ? o.createElement(s.Z, { onRequestRetry: d }) : o.createElement(c.Z, null));
                            },
                            [n, i, u, e],
                        );
                    return o.createElement(b, { fetchPolicy: "network-only", render: _, variables: d });
                }),
                g = l.default.create((e) => ({ loadingSheet: { paddingVertical: e.spaces.space20 } })),
                C = o.memo(w);
        },
        811507: (e, t, n) => {
            n.d(t, { Z: () => T });
            var i = n(71620),
                o = n(668214),
                r = n(143322),
                a = n(491963),
                s = n(175856),
                c = n(80890),
                l = n(629196),
                d = n(390387),
                u = n(601576),
                m = n(836255),
                h = n(360142),
                _ = n(919022);
            const p = (e, t) => (0, s.t5)(e, s.EM),
                f = (e, t) => (0, s.t5)(e, s.f8),
                b = (e) => (0, s.t5)(e, s.FX),
                w = (e, t) => (0, a.n9)(e, t.tweet),
                g = (e, t) => (0, a.z0)(e, t.tweet),
                C =
                    (e) =>
                    (t, n, { featureSwitches: i }) =>
                        Promise.all([t(m.Z.delete(e)), t((0, h.ZP)({ focalTweetId: e }).deleteTimeline())]),
                T = (0, o.Z)()
                    .propsFromState(() => ({ userCountry: d.GG, userLanguage: d.VT, shouldShowMuteEducationTip: p, shouldShowHideReplyTip: f, shouldShowConversationControlsTip: b, disableRemoveFromCommunity: w, community: g }))
                    .propsFromActions(() => ({ addFlag: s.pj, addToast: u.fz, block: _.ZP.block, changeConversationControls: m.Z.changeConversationControls, createLocalApiErrorHandler: (0, i.zr)("TWEET_CURATION_ACTION_SHEET_CONTAINER"), deleteTweet: C, dismissUserFromConversation: h.f0, follow: _.ZP.follow, hideReply: m.Z.hideReply, unmentionUserFromConversation: m.Z.unmentionUserFromConversation, mute: l.r, muteTweet: m.Z.mute, pin: c.Yd, removeConversationControls: m.Z.removeConversationControls, removeTag: m.Z.removeTag, unblock: _.ZP.unblock, unfollow: _.ZP.unfollow, unhideReply: m.Z.unhideReply, unmute: _.ZP.unmute, unmuteTweet: m.Z.unmute, unpin: c.oc, highlight: m.Z.highlight, undoHighlight: m.Z.undoHighlight, unpublishArticleEntity: r.ZP.unpublish }))
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
            n.d(t, { d: () => o });
            var i = n(674132);
            const o = n.n(i)().gf5e9ea6;
        },
        350968: (e, t, n) => {
            n.d(t, { I9: () => l, rg: () => h, sp: () => d });
            var i = n(674132),
                o = n.n(i);
            const r = o().eaae42ce,
                a = o().h032d096,
                s = o().be38d25e,
                c = o().d2be9310,
                l = o().jea6b076,
                d = o().ce6fd0ec,
                u = o().af40a8e0,
                m = o().e68b09b4,
                h = (e, t, n) => (e ? { title: a, subtext: c, onAction: n, confirmLabel: m } : { title: r, subtext: s, onAction: t, confirmLabel: u });
        },
        916585: (e, t, n) => {
            n.d(t, { k: () => a });
            var i = n(674132),
                o = n.n(i),
                r = n(437358);
            const a = (e, t) => {
                const { id_str: n, screen_name: i } = e,
                    a = (0, o().d78131b9)({ screenName: i });
                return { Icon: r.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: t };
            };
        },
        847607: (e, t, n) => {
            n.d(t, { Aq: () => u, FK: () => w, GS: () => s, N1: () => h, PY: () => m, X6: () => g, cm: () => c });
            n(202784);
            var i = n(674132),
                o = n.n(i),
                r = n(391366),
                a = n(40904);
            const s = o().hb568af4,
                c = o().bb1cbeb6,
                l = (o().h2f62206, o().e67b2d65),
                d = o().f05597b3,
                u = (e) => l({ screenName: e }),
                m = (e) => d({ screenName: e }),
                h = (e, t, n) => {
                    const { muting: i, screen_name: o } = e;
                    return { text: i ? m(o) : u(o), onClick: i ? n : t, Icon: i ? r.default : a.default };
                },
                _ = o().h59f52ee,
                p = o().eea0cbee,
                f = o().i29533b3,
                b = o().h129c3c3,
                w = (e) => (e ? ((e) => f({ screenName: e }))(e) : _),
                g = (e) => (e ? ((e) => b({ screenName: e }))(e) : p);
        },
        142156: (e, t, n) => {
            n.d(t, { w: () => o });
            var i = n(674132);
            const o = { defaultToast: { text: n.n(i)().ae0c5fbe }, showToast: !0 };
        },
        775412: (e, t, n) => {
            n.d(t, { W: () => s });
            var i = n(674132),
                o = n.n(i),
                r = n(615656);
            const a = o().ee87e71c,
                s = { [r.ZP.SelfMuteError]: { toast: { text: a } }, showToast: !0 };
        },
        837731: (e, t, n) => {
            n.d(t, { G: () => s });
            var i = n(674132),
                o = n.n(i),
                r = n(615656);
            const a = o().ed428a76,
                s = { [r.ZP.NotMutingTargetUser]: { toast: { text: a } }, showToast: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-e019dbda.7763ea9a.js.map
