"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-e019dbda"],
    {
        301410: (e, t, i) => {
            i.d(t, { i: () => _.ZP, z: () => f });
            var n = i(202784),
                o = i(928123),
                s = i.n(o),
                r = i(72845),
                a = i.n(r),
                l = i(57074),
                c = i.n(l),
                d = i(516951),
                u = i(88656),
                h = i(71620),
                m = i(163889),
                _ = i(312771);
            const p = ({ render: e }) => e({ fetchStatus: _.ZP.LOADING, data: null, error: null, retry: d.Z });
            class w extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, m.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const b = ({ query: e, queryRef: t, render: i }) => {
                    const n = s()(e, t);
                    return i({ fetchStatus: _.ZP.LOADED, data: n, error: null, retry: d.Z });
                },
                f = (e, t) =>
                    function ({ fetchPolicy: i = "store-or-network", render: o, variables: s }) {
                        const [r, l] = a()(e),
                            d = (0, h.n7)(t.errorConfig.context),
                            u = c()(s),
                            m = n.useCallback(() => {
                                l(u, { fetchPolicy: "network-only" });
                            }, [l, u]);
                        return (
                            n.useLayoutEffect(() => {
                                l(u, { fetchPolicy: i });
                            }, [i, l, u]),
                            r
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(p, { render: o }) },
                                      n.createElement(w, { errorHandler: d(t.errorConfig.options || {}), key: r.fetchKey, retry: m }, (t, i) => (t ? o({ fetchStatus: _.ZP.FAILED, error: t, data: null, retry: i }) : n.createElement(b, { query: e, queryRef: r, render: o }))),
                                  )
                                : null
                        );
                    };
        },
        713842: (e, t, i) => {
            i.r(t), i.d(t, { default: () => Hn });
            var n = i(807896),
                o = (i(136728), i(202784)),
                s = i(325686),
                r = i(305845),
                a = i(966582),
                l = i(782261),
                c = i(154003),
                d = i(811176),
                u = i(247056),
                h = i(392237),
                m = i(674132),
                _ = i.n(m),
                p = i(149170),
                w = i(516951),
                b = i(683814),
                f = i(817648),
                g = i(459660),
                C = i(774426),
                y = i(182873),
                T = i(727828),
                A = i(376293),
                v = i(712816),
                E = i(142156),
                k = i(879596),
                I = i(870358),
                x = i(942893),
                S = i(214647),
                D = i(500002),
                P = i(175856),
                U = i(443781),
                Z = i(834324),
                L = i(73664),
                H = i(668214);
            const R = (e) => (0, P.t5)(e, P.FX),
                O = (0, H.Z)()
                    .propsFromState(() => ({ shouldShowConversationControlsTip: R }))
                    .propsFromActions(() => ({ addFlag: P.pj })),
                F = _().bae0cbc0,
                B = h.default.create((e) => ({ inlineCallout: { position: "absolute", end: e.spaces.space32, marginTop: e.spaces.space2, zIndex: 1 }, textStyle: { whiteSpace: "nowrap" } })),
                M = O(({ addFlag: e, shouldShowConversationControlsTip: t }) => {
                    const i = o.useRef(),
                        n = (0, L.R)(i),
                        r = o.useRef(!1),
                        a = t;
                    return (
                        o.useEffect(() => {
                            n &&
                                ((r.current = !0),
                                setTimeout(() => {
                                    e(P.FX);
                                }, 5e3));
                        }, [n, e]),
                        o.useEffect(
                            () => () => {
                                r.current && e(P.FX);
                            },
                            [e],
                        ),
                        o.createElement(s.Z, { ref: i, style: B.inlineCallout }, n && a ? o.createElement(Z.Z, { text: F, textStyle: B.textStyle, withRightArrow: !0 }) : null)
                    );
                });
            var N = i(533128),
                $ = i(851623),
                W = i(916585);
            var j = i(692165);
            const q = "analytics",
                z = "block",
                V = "pin",
                G = "unpin",
                X = "report",
                K = "edit",
                Y = "editWithPremium",
                J = "whyThisAd",
                Q = "highlight",
                ee = "highlightUpsell",
                te = "subscribe",
                ie = "highlighOnPin",
                ne = "tweetEngagements",
                oe = "reportEUIllegalContentDSA",
                se = "editArticle",
                re = _().fb4ee11c,
                ae = ({ promotedContent: e, scribeAction: t }) => {
                    if (!e || !e.impression_id) return;
                    const { impression_id: i } = e;
                    return {
                        text: re,
                        Icon: j.default,
                        link: { pathname: `/i/about-this-ad/${i}` },
                        onClick: () => {
                            t && t({ element: "whythisad" });
                        },
                        testID: J,
                    };
                };
            var le = i(53674);
            const ce = _().ad50e7d9;
            var de = i(625271);
            const ue = _().ef1042f8,
                he = (e, { scribeAction: t, tweetId: i }) => ({
                    text: ue,
                    onClick: () => {
                        t({ element: "contribute_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/contribute/${i}` },
                    Icon: de.default,
                });
            var me = i(730873);
            const _e = _().h3edf7a6,
                pe = (e, { scribeAction: t, tweetId: i }) => ({
                    text: _e,
                    onClick: () => {
                        t({ element: "noterequest_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/noterequest/${i}` },
                    Icon: me.default,
                });
            var we = i(194661);
            const be = _().bae0cbc0,
                fe = _().bf8d98f4,
                ge = _().e69ada9e;
            var Ce = i(607127);
            const ye = _().d96cf7ce,
                Te = _().ae04c4dd,
                Ae = _().d9442996,
                ve = _().dad785a7,
                Ee = _().jda253ab,
                ke = _().j49c2f85,
                Ie = _().f9fa0390,
                xe = h.default.create((e) => ({ additionalInfo: { marginTop: e.spaces.space8 } }));
            var Se = i(72591);
            const De = _().d9a2bd78;
            var Pe = i(376021),
                Ue = i(689985);
            const Ze = _().dad450ec,
                Le = _().g9677c6e,
                He = _().b57bfe70,
                Re = _().bd3da7be,
                Oe = _().j26481e6;
            var Fe = i(310452),
                Be = i(354149),
                Me = i(507824);
            const Ne = _().cb817dae,
                $e = (e) => parseInt(e, 10);
            function We(e) {
                switch (e.entityType) {
                    case "cashtag":
                    case "emoji":
                    case "hashtag":
                    case "mention":
                    case "text":
                        return `${e.prefix || ""}${(0, Be.Tz)(e.text)}`;
                    case "media":
                    case "url":
                        return e.expandedUrl;
                    default:
                        return "";
                }
            }
            const je = _().abd845fe;
            var qe = i(498720);
            const ze = _().fd391b9f;
            var Ve = i(911373),
                Ge = i(757953);
            const Xe = _().c66afdc3,
                Ke = _().hbe4feb5,
                Ye = _().e1618e49;
            var Je = i(688715),
                Qe = i(529356),
                et = i(190286),
                tt = i(520913),
                it = i(648539);
            const nt = _().ge5067bc,
                ot = _().j136c720,
                st = _().d66f0338,
                rt = `${_().cfc8cb50}\n\n${_().if8dc5f0}`,
                at = (0, Je.ju)("https://help.x.com/using-twitter/mentions-and-replies?lang=browser#hidden-reply"),
                lt = _().b2615c6d,
                ct = _().i62a03aa,
                dt = _().cfd2f35e,
                ut = _().a6450e84,
                ht = _().g353ad73,
                mt = _().ad00a739,
                _t = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: i, hideReply: n, isSoftBlockEnabled: s, onBlock: r, onTweetDismiss: a, scribeAction: l, shouldShowHideReplyTip: c, tweet: d }) => {
                    const u = () => {
                        l({ element: "moderated_replies_prompt", action: "impression" });
                    };
                    return {
                        confirmation: c
                            ? { render: (e, t) => (({ onConfirm: e, onCancel: t, onHideReplyImpression: i = () => {} }) => o.createElement(Qe.Z, { actionLabel: nt, graphic: tt.default, headline: st, onAction: e, onClose: t, onImpression: i, onTertiaryAction: t, subtext: rt, supportUrl: at, tertiaryActionLabel: dt }))({ onConfirm: e, onCancel: t, onHideReplyImpression: u }) }
                            : {
                                  render: (e, t) => {
                                      const {
                                          user: { screen_name: i },
                                      } = d;
                                      return o.createElement(et.Z, {
                                          cancelButtonLabel: ct,
                                          confirmButtonLabel: ut,
                                          confirmButtonType: "destructiveFilled",
                                          headline: lt({ screenName: i }),
                                          onCancel: e,
                                          onConfirm: () => {
                                              r(), e();
                                          },
                                          text: s ? mt({ screenName: i }) : ht({ screenName: i }),
                                      });
                                  },
                              },
                        text: nt,
                        onClick: () => {
                            e(P.f8),
                                n(d.id_str, { conversation_id: d.conversation_id_str }).then(
                                    (e) => {
                                        a && a(), t({ text: ot });
                                    },
                                    i({ showToast: !0 }),
                                ),
                                l({ element: "moderate_reply" });
                        },
                        Icon: it.default,
                    };
                };
            var pt = i(161335),
                wt = i(395067);
            const bt = _().f9f27fa2;
            var ft = i(487606),
                gt = i(545334),
                Ct = i(350968),
                yt = i(337653),
                Tt = (i(585488), i(138099)),
                At = i(750410),
                vt = i(167630),
                Et = i(312771),
                kt = i(301410);
            const It = _().cfd2f35e,
                xt = yt.Z,
                St = (0, kt.z)(xt, { errorConfig: { context: "TWITTER_HIGHLIGHT_TWEET_CONFIRMATION_CONTEXT" } }),
                Dt = o.memo(({ onCancel: e, onConfirm: t, onHighlight: i, onUndohighlight: n, tweetId: s }) => {
                    const r = o.useMemo(() => ({ tweet_id: s }), [s]),
                        a = o.useCallback(
                            (e) => () => {
                                e(), t();
                            },
                            [t],
                        ),
                        l = o.useCallback(
                            ({ data: t, fetchStatus: s, retry: r }) => {
                                if (s === Et.ZP.LOADED) {
                                    const s = !!t?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted,
                                        { confirmLabel: r, onAction: l, subtext: c, title: d } = (0, Ct.rg)(s, i, n);
                                    return o.createElement(et.Z, { cancelButtonLabel: It, confirmButtonLabel: r, confirmButtonType: "primary", headline: d, onCancel: e, onConfirm: a(l), text: c });
                                }
                                return o.createElement(Tt.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: Pt.loadingSheet, type: "center", withMask: !0 }, s === Et.ZP.FAILED ? o.createElement(At.Z, { onRequestRetry: r }) : o.createElement(vt.Z, null));
                            },
                            [i, n, a, e],
                        );
                    return o.createElement(St, { fetchPolicy: "network-only", render: l, variables: r });
                }),
                Pt = h.default.create((e) => ({ loadingSheet: { paddingVertical: e.spaces.space20 } })),
                Ut = o.memo(Dt),
                Zt = _().ce87916a,
                Lt = _().ef4602ec,
                Ht = _().h8a3525e;
            var Rt = i(833057),
                Ot = i(40610);
            const Ft = _().i419d136,
                Bt = _().c1b9714a,
                Mt = _().c5d23126,
                Nt = _().fe4d099a,
                $t = _().cfd2f35e,
                Wt = _().e8d4c1cc,
                jt = { label: _().b68c3784, link: { pathname: "/i/verified-choose", state: { referring_page: "get_verified_highlight_on_pin" } } },
                qt = o.memo(({ isBlueUpsellEligible: e, onCancel: t, onConfirm: i, onHighlight: n, onPinTweet: s, onUndohighlight: r, tweetId: a }) => {
                    const [l, c] = o.useState(!1),
                        d = o.useMemo(() => ({ tweet_id: a }), [a]),
                        u = o.useMemo(() => (l ? o.createElement(Ot.Z.Primary, { action: jt, headline: Wt, onAction: i, style: zt.callout, withIcon: !1 }) : null), [l, i]),
                        h = o.useCallback(() => {
                            e ? c(!0) : (n(), i());
                        }, [c, n, i, e]),
                        m = o.useCallback(() => {
                            s(), i();
                        }, [s, i]),
                        _ = o.useCallback(
                            ({ data: e, fetchStatus: i, retry: n }) => {
                                if (i === Et.ZP.LOADED) {
                                    return !!e?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted ? o.createElement(et.Z, { confirmButtonLabel: Mt, confirmButtonType: "primary", headline: Ft, onCancel: t, onConfirm: m, text: Bt }) : o.createElement(Qe.Z, { actionLabel: Nt, footer: u, graphicDisplayMode: "none", headline: "Highlight your best content instead", onAction: h, onClose: t, onSecondaryAction: m, onTertiaryAction: t, secondaryActionLabel: Mt, subtext: "With Highlights, you can curate all your best posts on your profile.", tertiaryActionLabel: $t, withCloseButton: !0 });
                                }
                                return o.createElement(Tt.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: zt.loadingSheet, type: "center", withMask: !0 }, i === Et.ZP.FAILED ? o.createElement(At.Z, { onRequestRetry: n }) : o.createElement(vt.Z, null));
                            },
                            [h, m, t, u],
                        );
                    return o.createElement(St, { fetchPolicy: "network-only", render: _, variables: d });
                }),
                zt = h.default.create((e) => ({ loadingSheet: { backgroundColor: "transparent" }, callout: { fontSize: e.fontSizes.body, color: e.colors.text, fontWeight: e.fontWeights.medium } })),
                Vt = o.memo(qt),
                Gt = _().ha35a1d2,
                Xt = _().d04f95c0,
                Kt = _().ef4602ec;
            const Yt = function ({ addToast: e, createLocalApiErrorHandler: t, highlight: i, isBlueUpsellEligible: n, pin: s, scribeAction: r, tweetId: a, undoHighlight: l }) {
                const c = () => {
                        l(a).then((t) => {
                            e(t?.tweet_highlights_delete?.success ? { text: Ct.sp, withClearButton: !0 } : { text: Kt, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            r({ element: "undoHighlight" });
                    },
                    d = () => {
                        i(a).then((t) => {
                            e(t?.tweet_highlights_put?.success ? { action: { label: gt.d, onAction: c }, text: Ct.I9, withClearButton: !0 } : { text: Kt, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            r({ element: "highlight" });
                    },
                    u = () => {
                        s(a).then(
                            () => {
                                e({ text: Xt });
                            },
                            t({ showToast: !0 }),
                        ),
                            r({ element: "pin" });
                    };
                return { confirmation: { render: (e, t) => o.createElement(Vt, { isBlueUpsellEligible: n, onCancel: t, onConfirm: e, onHighlight: d, onPinTweet: u, onUndohighlight: c, tweetId: a }) }, testID: ie, text: Gt, Icon: Rt.default, onClick() {} };
            };
            var Jt = i(883437),
                Qt = i(523561);
            const ei = (0, Qt.Z)({ loader: () => Promise.all([i.e("icons.0"), i.e("icons.9"), i.e("ondemand.LeaveThisConversation")]).then(i.bind(i, 265008)) }),
                ti = _().bb16cc76,
                ii = _().de21174c,
                ni = (e, t) => o.createElement(ei, { onCancel: t, onConfirm: e });
            var oi = i(383494),
                si = i(232130),
                ri = i(40904),
                ai = i(391366);
            const li = _().e2d6c17e,
                ci = _().cd1942f4,
                di = _().bbd8bed6,
                ui = _().c13af432,
                hi = _().gf5e9ea6,
                mi = _().df744bda,
                _i = _().j9552760,
                pi = _().cfd2f35e,
                wi = _().d751694c,
                bi = (0, Je.ju)("https://support.x.com/articles/20175032"),
                fi = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: i, muteTweet: n, scribeAction: s, shouldShowMuteEducationTip: r, tweet: a, unmuteTweet: l }) => {
                    const c = () => {
                            e(P.EM);
                        },
                        d = () => {
                            l(a.id_str).then(
                                () => {
                                    t({ text: ui });
                                },
                                (e) => {
                                    i({ showToast: !0 })(e), s({ element: "tweet", action: "unmute_conversation_error" });
                                },
                            ),
                                s({ element: "tweet", action: "unmute_conversation" });
                        },
                        u = {
                            text: li,
                            onClick: () => {
                                n(a.id_str).then(
                                    () => {
                                        t({ action: { label: hi, onAction: d }, text: di });
                                    },
                                    (e) => {
                                        i({ showToast: !0 })(e), s({ element: "tweet", action: "mute_conversation_error" });
                                    },
                                ),
                                    s({ element: "tweet", action: "mute_conversation" });
                            },
                            confirmation: r ? { render: (e, t) => o.createElement(Qe.Z, { actionLabel: mi, graphic: si.default, graphicDisplayMode: "illustration", headline: _i, onAction: e, onClose: t, onImpression: c, onTertiaryAction: t, subtext: wi, supportUrl: bi, tertiaryActionLabel: pi }) } : void 0,
                            Icon: ri.default,
                        },
                        h = { text: ci, onClick: d, Icon: ai.default };
                    return a.conversation_muted ? h : u;
                },
                gi = _().ha35a1d2,
                Ci = _().i419d136,
                yi = _().c1b9714a,
                Ti = _().c5d23126,
                Ai = _().d04f95c0,
                vi = _().a50c911e,
                Ei = _().d1c1e2c2,
                ki = (0, Qt.Z)({ loader: () => i.e("ondemand.CommunityTweetPinning").then(i.bind(i, 828856)) }),
                Ii = _().f5cdcc2c,
                xi = ({ hasPremiumPlus: e, history: t, onTweetDismiss: i, promotedDismissUpsellEnabled: n }) => ({
                    text: Ii,
                    onClick: () => {
                        if ((i?.(), !e && n)) {
                            const e = { variant: "DismissAd" };
                            t.push("/i/verified-get-verified", e);
                        }
                    },
                    Icon: j.default,
                }),
                Si = _().hea3f8ac,
                Di = _().a09331e0;
            var Pi = i(530813);
            const Ui = _().c2e276e4;
            var Zi = i(310700),
                Li = i(712881);
            const Hi = _().e68b09b4,
                Ri = _().a95f04ba,
                Oi = _().jfc76958;
            var Fi = i(85375),
                Bi = i(415506),
                Mi = i(711223);
            function Ni(e) {
                const { featureSwitches: t, isAppealTweetWarning: i = !1, promotedContent: n, tweet: o } = e,
                    s = t.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                    r = l.Z.getLocalizedEntityName({ tweet: o, articlesEnabled: s });
                let c = { element: "report_tweet" },
                    d = "/i/report/status",
                    u = wt.C2.Tweet,
                    h = Bi.default,
                    m = a.Z.shouldShowAdDisclosure(n) ? $i.reportAd : $i.reportTweet({ entity: r });
                i && ((c = { element: "appeal_tweet_warning" }), (d = "/i/report/appeal_tweet_warning"), (u = wt.C2.AppealTweetWarning), (h = Mi.default), (m = $i.appealTweetWarning));
                return {
                    Icon: h,
                    onClick: () => {
                        const t = e.analytics.contextualScribeData,
                            i = o?.extended_entities?.media?.length || 0,
                            s = o?.article?.media_entities?.length || 0,
                            r = (o?.entities?.urls?.length || 0) > 0 || i > 0 || s > 0 || void 0 !== o.card,
                            a = t.items && t.items[0] && t.items[0].conversation_details?.conversation_section;
                        e.scribeAction(c);
                        if (!(o.community_id_str || o.card?.name === Fi.sj.BROADCAST || o.card?.name === Fi.sj.PERISCOPE_BROADCAST || (n && !e.featureSwitches.isTrue("responsive_web_ocf_reportflow_promoted_enabled"))) && (0, wt.Yw)(e.featureSwitches, u)) {
                            const t = (0, wt.j_)({ clientReferer: window.location.pathname, conversationSection: a, isMedia: r, isPromoted: void 0 !== n, reportType: u, reportedTweet: o, reportedUser: o.user.id_str, scribeNamespace: e.analytics.contextualScribeNamespace });
                            e.history.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(t) } } });
                        } else e.history.push({ pathname: `${d}/${o.id_str}`, state: { clientReferer: window.location.pathname, conversationSection: a, isMedia: r, promotedContent: n, scribeNamespace: e.analytics.contextualScribeNamespace } });
                    },
                    testID: X,
                    text: m,
                };
            }
            const $i = { appealTweetWarning: _().f1824804, reportTweet: _().j4e43d8b, reportAd: _().e3fd237e };
            var Wi = i(946099),
                ji = i(782826);
            var qi = i(928875),
                zi = i(297938);
            const Vi = _().d7513755;
            var Gi = i(646677);
            const Xi = _().ab0decc0,
                Ki = _().d7dbb71b;
            var Yi = i(224823),
                Ji = i(323683);
            const Qi = _().ja66a2b5,
                en = _().c2423b7b;
            var tn = i(659306);
            const nn = _().i31dfa4c,
                on = _().j8e56ba2,
                sn = _().ic030338,
                rn = _().gfcea3f4,
                an = _().eb2d59f4,
                ln = _().j44ec610,
                cn = _().a2dd7414;
            var dn = i(963879);
            const un = _().cac6a24a,
                hn = (0, Qt.Z)({ loader: () => i.e("ondemand.CommunityTweetPinning").then(i.bind(i, 760844)) }),
                mn = _().f9478972,
                _n = _().c5491b5d;
            var pn = i(71620),
                wn = i(143322),
                bn = i(491963),
                fn = i(80890),
                gn = i(629196),
                Cn = i(390387),
                yn = i(601576),
                Tn = i(836255),
                An = i(360142),
                vn = i(919022);
            const En = (e, t) => (0, P.t5)(e, P.EM),
                kn = (e, t) => (0, P.t5)(e, P.f8),
                In = (e) => (0, P.t5)(e, P.FX),
                xn = (e, t) => (0, bn.n9)(e, t.tweet),
                Sn = (e, t) => (0, bn.z0)(e, t.tweet),
                Dn =
                    (e) =>
                    (t, i, { featureSwitches: n }) =>
                        Promise.all([t(Tn.Z.delete(e)), t((0, An.ZP)({ focalTweetId: e }).deleteTimeline())]),
                Pn = (0, H.Z)()
                    .propsFromState(() => ({ userCountry: Cn.GG, userLanguage: Cn.VT, shouldShowMuteEducationTip: En, shouldShowHideReplyTip: kn, shouldShowConversationControlsTip: In, disableRemoveFromCommunity: xn, community: Sn }))
                    .propsFromActions(() => ({ addFlag: P.pj, addToast: yn.fz, block: vn.ZP.block, changeConversationControls: Tn.Z.changeConversationControls, createLocalApiErrorHandler: (0, pn.zr)("TWEET_CURATION_ACTION_SHEET_CONTAINER"), deleteTweet: Dn, dismissUserFromConversation: An.f0, follow: vn.ZP.follow, hideReply: Tn.Z.hideReply, unmentionUserFromConversation: Tn.Z.unmentionUserFromConversation, mute: gn.r, muteTweet: Tn.Z.mute, pin: fn.Yd, removeConversationControls: Tn.Z.removeConversationControls, removeTag: Tn.Z.removeTag, unblock: vn.ZP.unblock, unfollow: vn.ZP.unfollow, unhideReply: Tn.Z.unhideReply, unmute: vn.ZP.unmute, unmuteTweet: Tn.Z.unmute, unpin: fn.oc, highlight: Tn.Z.highlight, undoHighlight: Tn.Z.undoHighlight, unpublishArticleEntity: wn.ZP.unpublish }))
                    .withAnalytics(),
                Un = /\/mediaViewer$/;
            class Zn extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showModerationBlockConfirmation: !1, showEditWithPremiumUpsell: !1 }),
                        (this._hasPremiumPlus = this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate() || this.context.userClaims.hasSubscription("premium_plus")),
                        (this._shouldDisable = N.$y.bind(null, this.context.featureSwitches)),
                        (this._birdwatchAction = he.bind(null, this.context.featureSwitches)),
                        (this._birdwatchRequestAction = pe.bind(null, this.context.featureSwitches)),
                        (this._editTweetCompositionEligible = this.context.featureSwitches.isTrue("responsive_web_edit_tweet_composition_enabled")),
                        (this._editTweetCompositionEnabledForUser = () => {
                            const { featureSwitches: e, userClaims: t } = this.context,
                                i = t.isTrueAndEnabled("subscriptions_feature_labs_1004"),
                                n = e.isTrue("responsive_web_edit_tweet_enabled");
                            return this._editTweetCompositionEligible && (i || n);
                        }),
                        (this._birdwatchNoteWritingEnabled = this.context.featureSwitches.isTrue("responsive_web_birdwatch_note_writing_enabled")),
                        (this._birdwatchNoteRequestEnabled = this.context.featureSwitches.isTrue("responsive_web_birdwatch_note_request_enabled")),
                        (this._onMenuClick = () => {
                            const { addFlag: e, onMenuClick: t, shouldShowConversationControlsTip: i, withChangeConversationControlsTooltip: n } = this.props;
                            i && n && e(P.FX), t && t();
                        }),
                        (this._openEditWithPremiumUpsell = () => {
                            this.setState({ showEditWithPremiumUpsell: !0 });
                        }),
                        (this._closeEditWithPremiumUpsell = () => {
                            this.setState({ showEditWithPremiumUpsell: !1 });
                        }),
                        (this._renderEditWithPremiumUpsell = () => (this.state.showEditWithPremiumUpsell ? o.createElement(T.Z, { onAction: this._closeEditWithPremiumUpsell, onClose: this._closeEditWithPremiumUpsell, variant: "EditPost" }) : null)),
                        (this._handleOnChangeConversationControls = (e) => {
                            const { addToast: t, analytics: i, changeConversationControls: n, createLocalApiErrorHandler: o, removeConversationControls: s, tweet: r } = this.props,
                                a = (0, f.Z)(r, e);
                            e === g.k.all
                                ? s &&
                                  s(r.id_str).then(() => {
                                      t({ text: a }), i.scribe({ element: Bn.all, action: "click", data: { items: [x.Z.getChangeConversationControlsItem(r, e)] } });
                                  }, o(E.w))
                                : n &&
                                  n(r.id_str, { policy: e, screenName: r.user?.screen_name }).then(() => {
                                      t({ text: a }), i.scribe({ element: Bn[e], action: "click", data: { items: [x.Z.getChangeConversationControlsItem(r, e)] } });
                                  }, o(E.w));
                        }),
                        (this._renderCurationActionMenu = (e) => (t) =>
                            o.createElement(r.l.Consumer, null, ({ downloadLink: i }) => {
                                const [n] = this._getActionItems(e, i);
                                return o.createElement(C.default, { actionItems: n, onClose: t });
                            })),
                        (this._getPrerollActionItems = () => {
                            const { analytics: e, history: t, onTweetDismiss: i, promotedContent: n, tweet: o, userCountry: s, userLanguage: r } = this.props,
                                { featureSwitches: l } = this.context,
                                c = this._scribeAction,
                                d = {},
                                u = [],
                                h = a.Z.isPromoted(n);
                            return (
                                (d.promotedTweetDismiss = xi({ onTweetDismiss: () => i?.(!1), hasPremiumPlus: this._hasPremiumPlus, promotedDismissUpsellEnabled: l.isTrue("subscriptions_hide_ad_upsell_enabled"), history: t })),
                                h && (d.adInfo = ae({ promotedContent: n, scribeAction: c })),
                                (d.report = Ni({ analytics: e, history: t, promotedContent: n, scribeAction: c, tweet: o, featureSwitches: l, reporterCountry: s, reporterLanguage: r })),
                                On.forEach((e) => {
                                    const t = d[e];
                                    if (t) {
                                        const e = { Icon: t.Icon, disabled: t.disabled, isEmphasized: t.isEmphasized, onClick: t.onClick, testID: t.testID, text: t.text };
                                        u.push(e);
                                    }
                                }),
                                u
                            );
                        }),
                        (this._getMuteOrUnmuteAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, dismissUserFromConversation: i, history: n, mute: o, promotedContent: s, tweet: r, unmute: a } = this.props,
                                { user: l } = r,
                                c = { addToast: e, createLocalApiErrorHandler: t, scribeAction: this._scribeAction },
                                d = this.context.featureSwitches.isTrue("subscriptions_mute_ad_upsell_enabled");
                            return (0, oi.Z)({ ...c, mute: o, unmute: a, user: l, dismissUserFromConversation: i, promotedContent: s, muteAdUpsellEnabled: d, history: n, hasPremiumPlus: this._hasPremiumPlus });
                        }),
                        (this._getHighlightOrUndoAction = () => {
                            const { addToast: e, highlight: t, tweet: i, undoHighlight: n } = this.props,
                                s = this._scribeAction,
                                { featureSwitches: r, userClaims: a } = this.context;
                            if (r.isTrue("highlights_tweets_action_enabled") && !this._shouldDisable(i, N.d.Highlight)) {
                                const l = a.isTrueAndEnabled("subscriptions_feature_highlights"),
                                    c = r.isTrue("subscriptions_sign_up_enabled") && r.isTrue("highlights_tweets_action_menu_upsell_enabled");
                                return l
                                    ? (({ addToast: e, highlight: t, scribeAction: i, tweetId: n, undoHighlight: s }) => {
                                          const r = () => {
                                                  s(n).then((t) => {
                                                      e(t?.tweet_highlights_delete?.success ? { text: Ct.sp, withClearButton: !0 } : { text: Lt, withClearButton: !0, withAutoDismiss: !0 });
                                                  }),
                                                      i({ element: "undoHighlight" });
                                              },
                                              a = () => {
                                                  t(n).then((t) => {
                                                      e(t?.tweet_highlights_put?.success ? { action: { label: gt.d, onAction: r }, text: Ct.I9, withClearButton: !0 } : { text: Lt, withClearButton: !0, withAutoDismiss: !0 });
                                                  }),
                                                      i({ element: "highlight" });
                                              };
                                          return { confirmation: { render: (e, t) => o.createElement(Ut, { onCancel: t, onConfirm: e, onHighlight: a, onUndohighlight: r, tweetId: n }) }, onClick() {}, Icon: ft.default, text: Zt, testID: Q };
                                      })({ addToast: e, scribeAction: s, tweetId: i.id_str, undoHighlight: n, highlight: t })
                                    : c
                                      ? (({ scribeAction: e }) => ({
                                            text: Ht,
                                            onClick: () => {
                                                e({ element: "highlight-upsell" });
                                            },
                                            link: { pathname: "/i/verified-choose", state: { referring_page: "tweet_highlight_action_upsell" } },
                                            Icon: ft.default,
                                            testID: ee,
                                        }))({ scribeAction: s })
                                      : null;
                            }
                        }),
                        (this._getHighlightUpsellOnPinAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, highlight: i, pin: n, tweet: o, undoHighlight: s } = this.props,
                                r = this._scribeAction,
                                { featureSwitches: a, userClaims: l } = this.context,
                                c = a.isTrue("highlights_tweets_upsell_on_pin_action_enabled"),
                                d = a.isTrue("subscriptions_sign_up_enabled"),
                                u = a.isTrue("highlights_tweets_action_enabled") && !this._shouldDisable(o, N.d.Highlight),
                                h = l.isTrueAndEnabled("subscriptions_feature_highlights");
                            return u && c && d && !h
                                ? Yt({ addToast: e, scribeAction: r, tweetId: o.id_str, undoHighlight: s, highlight: i, pin: n, createLocalApiErrorHandler: t, isBlueUpsellEligible: d && !h })
                                : (({ addToast: e, createLocalApiErrorHandler: t, pin: i, scribeAction: n, tweetId: o }) => ({
                                      confirmation: { text: yi, headline: Ci, label: Ti },
                                      testID: V,
                                      text: gi,
                                      onClick: () => {
                                          i(o).then(
                                              ({ addedToHighlights: t }) => {
                                                  e({ text: t ? vi : Ai });
                                              },
                                              t({ showToast: !0 }),
                                          ),
                                              n({ element: "pin" });
                                      },
                                      Icon: Rt.default,
                                  }))({ addToast: e, scribeAction: r, pin: n, createLocalApiErrorHandler: t, tweetId: o.id_str });
                        }),
                        (this._getEditTweetAction = () => {
                            const { tweet: e } = this.props,
                                { featureSwitches: t, userClaims: i, viewerUserId: n } = this.context,
                                { user: o } = e,
                                s = this._scribeAction;
                            if (
                                (function (e, t) {
                                    let i = !0;
                                    if (e.edit_control?.editable_until_msecs) {
                                        const t = $e(e.edit_control.editable_until_msecs);
                                        i = Date.now() > new Date(t);
                                    }
                                    const n = "0" === e.edit_control?.edits_remaining,
                                        o = !!e.edit_control?.is_edit_eligible,
                                        s = "Twitter for iPhone" !== e.source_name && "Twitter for iPad" !== e.source_name && "Twitter for Android" !== e.source_name,
                                        r = e.user.pinned_tweet_ids_str,
                                        a = Array.isArray(r) && r.some((t) => t === e.id_str);
                                    return t.isUserTweetAuthor && !i && !n && !e.isStaleEdit && o && s && !a;
                                })(e, { isUserTweetAuthor: o.id_str === n }) &&
                                !(0, N.$y)(t, e, N.d.EditTweet)
                            ) {
                                if (this._editTweetCompositionEnabledForUser())
                                    return (function (e) {
                                        const { featureSwitches: t, tweet: i } = e;
                                        let n = "";
                                        if (i.note_tweet || i.full_text) {
                                            const e = { featureSwitches: t, forceEnabled: !0 },
                                                o = Me.Bq(i, e);
                                            n = Fe.ZP.tweetTextParts(o.text, o.display_text_range, o.entities).map(We).join("");
                                        }
                                        return {
                                            testID: K,
                                            onClick: () => {
                                                e.scribeAction({ element: "edit" });
                                            },
                                            text: Ne,
                                            Icon: Pe.default,
                                            link: { pathname: "/compose/post", state: { previousTweetId: i.id_str, defaultText: n, quotedStatusId: i.quoted_status?.id_str, hideUnsentTweetsButton: !0, editableUntil: i.edit_control?.editable_until_msecs, isLastEdit: "1" === i.edit_control?.edits_remaining } },
                                        };
                                    })({ scribeAction: s, tweet: e, featureSwitches: t });
                                if (!this._editTweetCompositionEnabledForUser() && this._editTweetCompositionEligible && !i.isAnyPremiumSubscriber() && !i.hasSubscription("twitter_blue_legacy") && t.isTrue("subscriptions_sign_up_enabled") && t.isTrue("responsive_web_edit_tweet_upsell_enabled"))
                                    return (({ onClick: e, scribeAction: t, tweet: i }) => ({
                                        onClick: () => {
                                            t({ element: "edit-upsell" }), e();
                                        },
                                        text: je,
                                        Icon: Pe.default,
                                        testID: Y,
                                    }))({ tweet: e, scribeAction: s, onClick: this._openEditWithPremiumUpsell });
                            }
                            return null;
                        }),
                        (this._getEditArticleAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, history: i, tweet: n, unpublishArticleEntity: o } = this.props,
                                { featureSwitches: s, viewerUserId: r } = this.context,
                                { user: a } = n,
                                l = this._scribeAction,
                                c = a.id_str === r && !(0, N.$y)(s, n, N.d.EditTweet);
                            return n.article && c
                                ? (({ addToast: e, articleEnttiyId: t, createLocalApiErrorHandler: i, history: n, scribeAction: o, unpublishArticleEntity: s }) => ({
                                      confirmation: { text: Re, headline: He, label: Le },
                                      testID: se,
                                      text: Ze,
                                      onClick: () => {
                                          s(t).then(
                                              () => {
                                                  n.push({ pathname: (0, Ue.lU)(t) }), e({ text: Oe });
                                              },
                                              i({ showToast: !0 }),
                                          ),
                                              o({ element: "editArticle" });
                                      },
                                      Icon: Pe.default,
                                  }))({ createLocalApiErrorHandler: t, scribeAction: l, addToast: e, unpublishArticleEntity: o, articleEnttiyId: n.article.rest_id, history: i })
                                : null;
                        }),
                        (this._getActionItems = (e, t) => {
                            const { deleteTweet: i, follow: n, hideReply: r, muteTweet: c, removeTag: d, unmentionUserFromConversation: u, unmuteTweet: h, unpin: m } = this.props,
                                { addFlag: _, addToast: p, analytics: w, createLocalApiErrorHandler: b, feedbackItems: f, forwardPivotDisplayType: g, forwardPivotLandingUrl: C, history: y, isPinned: T, onDeleteTweet: v, onTweetDismiss: E, promotedContent: k, shouldShowHideReplyTip: I, shouldShowMuteEducationTip: x, tweet: S, userCountry: D, userLanguage: P, withChangeConversationControls: U, withHideReply: Z, withMuteConversation: L, withUnhideReply: H, withViewHiddenReplies: R } = this.props,
                                { featureSwitches: O, userClaims: F, viewerUserId: B } = this.context,
                                { user: M } = S,
                                $ = [],
                                j = a.Z.isPromoted(k) && a.Z.shouldShowAdDisclosure(k),
                                V = {},
                                K = this._scribeAction,
                                Y = { addToast: p, createLocalApiErrorHandler: b, scribeAction: K },
                                J = M.id_str === B;
                            Object.assign(V, this._getCommunityActions()),
                                j && (V.adInfo = ae({ promotedContent: k, scribeAction: K })),
                                J &&
                                    !this._shouldDisable(S, N.d.ViewTweetActivity) &&
                                    (V.analytics = (({ featureSwitches: e, scribeAction: t, tweet: i }) => {
                                        const n = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                            o = l.Z.getLocalizedEntityName({ tweet: i, articlesEnabled: n });
                                        return {
                                            text: ce({ entity: o }),
                                            onClick: () => {
                                                t({ element: "analytics" });
                                            },
                                            link: `/${i.user.screen_name}/status/${i.id_str}/analytics`,
                                            Icon: le.default,
                                            testID: q,
                                        };
                                    })({ tweet: S, scribeAction: K, featureSwitches: O })),
                                O.isTrue("responsive_web_delete_tweet_stats_enabled") &&
                                    (V.viewTweetEngagements = (({ featureSwitches: e, scribeAction: t, tweet: i }) => {
                                        const n = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                            o = l.Z.getLocalizedEntityName({ tweet: i, articlesEnabled: n });
                                        return {
                                            text: _n({ entity: o }),
                                            Icon: le.default,
                                            link: `${i.permalink}/quotes`,
                                            onClick: () => {
                                                t && t({ element: "tweet_engagements" });
                                            },
                                            testID: ne,
                                        };
                                    })({ tweet: S, scribeAction: K, featureSwitches: O })),
                                M.protected ||
                                    this._shouldDisable(S, N.d.Embed) ||
                                    S.isPreviewDisplay ||
                                    (V.embed = (({ featureSwitches: e, permalink: t, scribeAction: i, tweet: n }) => {
                                        const o = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                            s = l.Z.getLocalizedEntityName({ tweet: n, articlesEnabled: o });
                                        return {
                                            text: ze({ entity: s }),
                                            onClick: () => {
                                                const e = `https://publish.twitter.com/?url=https://twitter.com${t}`;
                                                window.open(e, "_blank"), i({ element: "embed_tweet" });
                                            },
                                            Icon: qe.default,
                                        };
                                    })({ permalink: S.permalink, scribeAction: K, tweet: S, featureSwitches: O }));
                            const Q = l.Z.isArticlePost(S) && O.isTrue("responsive_web_twitter_article_seed_tweet_enabled") && F.isTrueAndEnabled("subscriptions_feature_article_composer");
                            if (Q) {
                                const e = this._getEditArticleAction();
                                e && (V.edit = e);
                            } else {
                                const e = this._getEditTweetAction();
                                e && (V.edit = e);
                            }
                            if (
                                (O.isTrue("responsive_web_show_similar_posts_action_enabled") &&
                                    "ShowSimilarPosts" === g &&
                                    C &&
                                    (V.relatedPosts = (({ isArticle: e, landingUrl: t, scribeAction: i }) => ({
                                        text: e ? Di : Si,
                                        link: t,
                                        onClick: () => {
                                            i({ element: "similar_posts_action" });
                                        },
                                        Icon: ft.default,
                                    }))({ landingUrl: C.url, isArticle: Q, scribeAction: K })),
                                R &&
                                    S.conversation_id_str === S.id_str &&
                                    !this._shouldDisable(S, N.d.ViewHiddenReplies) &&
                                    (V.viewHiddenReplies = (({ permalink: e, scribeAction: t }) => ({
                                        text: mn,
                                        link: `${e}/hidden`,
                                        onClick: () => {
                                            t({ element: "view_moderated_replies" });
                                        },
                                        Icon: it.default,
                                    }))({ permalink: S.permalink, scribeAction: K })),
                                ((e, t) => {
                                    const i = t.extended_entities?.media && t.extended_entities.media[0] && t.extended_entities.media[0].features?.all?.tags;
                                    return !!i && (0, Li.Z)(i, (t) => t.user_id === e);
                                })(B, S) &&
                                    (V.removeTag = (({ createLocalApiErrorHandler: e, removeTag: t, tweet: i, viewerUserId: n }) => ({
                                        confirmation: { label: Hi, headline: Ri },
                                        text: Oi,
                                        onClick: () => {
                                            const o = i.extended_entities?.media?.map((e) => e.id_str).join(",");
                                            t(i.id_str, { status_id: i.id_str, media_ids: o, tagged_user_ids: n }).catch(e({ showToast: !0 }));
                                        },
                                        Icon: Zi.default,
                                    }))({ createLocalApiErrorHandler: b, viewerUserId: B, removeTag: d, tweet: S })),
                                ((e, t) => {
                                    if (!e) return !1;
                                    const i = t.entities?.user_mentions?.some((t) => t.id_str === e),
                                        n = t.in_reply_to_user_id_str === e,
                                        o = i || n,
                                        s = t.unmentioned_user_ids?.includes(e);
                                    return o && !s;
                                })(B, S) &&
                                    O.isTrue("dont_mention_me_enabled") &&
                                    (V.leaveConversation = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweet: n, unmentionUserFromConversation: o }) => ({
                                        confirmation: { render: ni },
                                        text: ti,
                                        onClick: () => {
                                            o(n.id_str).then(
                                                () => {
                                                    e({ text: ii });
                                                },
                                                t({ showToast: !0 }),
                                            ),
                                                i({ element: "leave_conversation" });
                                        },
                                        Icon: Jt.default,
                                    }))({ ...Y, unmentionUserFromConversation: u, tweet: S })),
                                B)
                            )
                                if (
                                    (M.blocking ||
                                        this._shouldDisable(S, N.d.ListsAddRemove, void 0, void 0, J) ||
                                        (V.addOrRemoveFromList = (({ scribeAction: e, user: t }) =>
                                            (0, W.k)(t, () => {
                                                e({ element: "add_to_list" });
                                            }))({ user: M, scribeAction: K })),
                                    this._birdwatchNoteWritingEnabled && !S.isStaleEdit && (V.birdwatch = this._birdwatchAction({ scribeAction: K, tweetId: S.id_str })),
                                    this._birdwatchNoteRequestEnabled && !S.isStaleEdit && (V.birdwatchRequest = this._birdwatchRequestAction({ scribeAction: K, tweetId: S.id_str })),
                                    J)
                                ) {
                                    T
                                        ? (V.pinOrUnpin = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweetId: n, unpin: o }) => ({
                                              confirmation: { text: an, headline: rn, label: ln },
                                              testID: G,
                                              text: sn,
                                              onClick: () => {
                                                  o(n).then(
                                                      () => {
                                                          e({ text: cn });
                                                      },
                                                      t({ showToast: !0 }),
                                                  ),
                                                      i({ element: "unpin" });
                                              },
                                              Icon: Rt.default,
                                          }))({ ...Y, tweetId: S.id_str, unpin: m }))
                                        : this._shouldDisable(S, N.d.PinToProfile) || (V.pinOrUnpin = this._getHighlightUpsellOnPinAction());
                                    const t = this._getHighlightOrUndoAction();
                                    t && (V.highlightOrUndo = t),
                                        this._shouldIncludeTweetAppealOption() && (V.appealTweetWarning = Ni({ analytics: w, history: y, isAppealTweetWarning: !0, promotedContent: k, scribeAction: K, tweet: S, featureSwitches: O, reporterCountry: D, reporterLanguage: P })),
                                        L && !this._shouldDisable(S, N.d.MuteConversation) && (V.muteOrUnmuteConversation = fi({ ...Y, addFlag: _, muteTweet: c, shouldShowMuteEducationTip: x, tweet: S, unmuteTweet: h })),
                                        U &&
                                            !this._shouldDisable(S, N.d.ConversationControls) &&
                                            (V.changeConversationControls = (({ onChangeConversationControls: e, tweet: t }) => {
                                                const i = !!t.exclusivity_info,
                                                    n = !!t.premium_info,
                                                    o = i || n;
                                                return { disabled: o, onClick: o ? void 0 : e, subText: i ? fe : n ? ge : void 0, text: be, Icon: we.default };
                                            })({ tweet: S, onChangeConversationControls: e })),
                                        this._shouldDisable(S, N.d.Delete) ||
                                            (V.delete = (({ addToast: e, createLocalApiErrorHandler: t, deleteTweet: i, featureSwitches: n, onDeleteTweet: r, scribeAction: a, tweet: c, userClaims: d }) => {
                                                const u = (d.isTrueAndEnabled("subscriptions_feature_labs_1004") || n.isTrue("responsive_web_edit_tweet_enabled")) && n.isTrue("responsive_web_edit_tweet_composition_enabled"),
                                                    h = n.isTrue("subscriptions_feature_labs_1004") || n.isTrue("responsive_web_edit_tweet_enabled"),
                                                    m = n.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                                    _ = l.Z.postEntityName;
                                                return {
                                                    confirmation: { label: ye, headline: Te({ entity: _ }), text: l.Z.getOriginalTweet(c).isEdited && (u || h) ? ve({ entity: _ }) : m && l.Z.isArticlePost(c) ? o.createElement(o.Fragment, null, Ae, o.createElement(s.Z, { style: xe.additionalInfo }, Ie)) : Ae, confirmButtonType: "destructiveFilled" },
                                                    isEmphasized: !0,
                                                    text: ye,
                                                    onClick: () => {
                                                        i(c.id_str).then(
                                                            () => {
                                                                e({ text: Ee({ entity: _ }) });
                                                            },
                                                            t({ defaultToast: { text: ke({ entity: _ }) }, showToast: !0 }),
                                                        ),
                                                            a({ element: "delete" }),
                                                            r && r(c.id_str);
                                                    },
                                                    Icon: Ce.default,
                                                };
                                            })({ ...Y, deleteTweet: i, onDeleteTweet: v, tweet: S, featureSwitches: O, userClaims: F }));
                                } else
                                    E && j && (V.promotedTweetDismiss = xi({ onTweetDismiss: E, hasPremiumPlus: this._hasPremiumPlus, promotedDismissUpsellEnabled: this.context.featureSwitches.isTrue("subscriptions_hide_ad_upsell_enabled"), history: y })),
                                        M.blocking ||
                                            this._shouldDisable(S, N.d.Follow) ||
                                            ((V.followOrUnfollow = M.following
                                                ? (({ addToast: e, createLocalApiErrorHandler: t, promotedContent: i, scribeAction: n, unfollow: o, user: s }) => ({
                                                      text: Qi({ screenName: s.screen_name }),
                                                      onClick: () => {
                                                          o(s.id_str, { promotedContent: i }).then((t) => {
                                                              e({ text: en({ screenName: s.screen_name }) });
                                                          }, t(Ji.X)),
                                                              n({ element: "unfollow" }),
                                                              n({ action: "unfollow", element: "tweet_curation_action_menu" });
                                                      },
                                                      Icon: Yi.default,
                                                  }))({ ...Y, unfollow: this.props.unfollow, promotedContent: k, user: M })
                                                : (({ addToast: e, createLocalApiErrorHandler: t, follow: i, promotedContent: n, scribeAction: o, user: s }) => ({
                                                      text: Xe({ screenName: s.screen_name }),
                                                      onClick: () => {
                                                          i(s.id_str, { promotedContent: n }).then(
                                                              () => {
                                                                  o({ element: "follow" }), o({ action: "follow", element: "tweet_curation_action_menu" }), s.protected ? e({ text: Ke({ screenName: s.screen_name }) }) : e({ text: Ye({ screenName: s.screen_name }) });
                                                              },
                                                              t({ ...Ge.H, showToast: !0 }),
                                                          ),
                                                              o({ element: "follow_attempt" });
                                                      },
                                                      Icon: Ve.default,
                                                  }))({ ...Y, follow: n, promotedContent: k, user: M })),
                                            O.allTrue(["super_follow_android_web_subscription_enabled", "creator_subscriptions_subscribe_action_tweet_menu_enabled"]) &&
                                                M.super_follow_eligible &&
                                                !M.super_following &&
                                                (V.subscribe = (({ history: e, scribeAction: t, user: i }) => ({
                                                    text: Ki({ followType: Xi, screenName: `@${i.screen_name}` }),
                                                    onClick: () => {
                                                        e.push(`/${i.screen_name}/creator-subscriptions/subscribe`, { referring_page: "profile_action_menu" }), t({ element: "subscribe" });
                                                    },
                                                    Icon: Gi.default,
                                                    testID: te,
                                                }))({ scribeAction: K, history: y, user: M })),
                                            (V.muteOrUnmute = this._getMuteOrUnmuteAction())),
                                        L && (V.muteOrUnmuteConversation = fi({ ...Y, addFlag: _, muteTweet: c, shouldShowMuteEducationTip: x, tweet: S, unmuteTweet: h })),
                                        Z && (V.hideReply = _t({ ...Y, addFlag: _, hideReply: r, isSoftBlockEnabled: O.isTrue("xprofile_blocked_by_view_enabled"), onBlock: this._handleBlock, onTweetDismiss: E, shouldShowHideReplyTip: I, tweet: S })),
                                        H &&
                                            (V.unhideReply = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweet: n, unhideReply: o }) => ({
                                                text: nn,
                                                onClick: () => {
                                                    o(n.id_str, { conversation_id: n.conversation_id_str }).then(
                                                        (t) => {
                                                            e({ ariaOnly: !0, text: on });
                                                        },
                                                        t({ showToast: !0 }),
                                                    ),
                                                        i({ element: "unmoderate_reply" });
                                                },
                                                Icon: tn.default,
                                            }))({ ...Y, tweet: S, unhideReply: this.props.unhideReply })),
                                        (V.blockOrUnblock = (0, A.op)({ blockAction: this._handleBlock, isSoftBlockEnabled: O.isTrue("xprofile_blocked_by_view_enabled"), source: A.SC.TWEET_CARET, testID: z, unblockAction: this._handleUnblock, user: M }));
                            B && !J && !S.isPreviewDisplay
                                ? (V.report = Ni({ analytics: w, history: y, promotedContent: k, scribeAction: K, tweet: S, featureSwitches: O, reporterCountry: D, reporterLanguage: P }))
                                : !B &&
                                  D &&
                                  (function (e) {
                                      return "DE" === e.toUpperCase();
                                  })(D) &&
                                  ((V.report = (function (e) {
                                      const t = e.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                          i = l.Z.getLocalizedEntityName({ tweet: e.tweet, articlesEnabled: t });
                                      return {
                                          Icon: Bi.default,
                                          link: (0, Je.ju)("https://help.x.com/forms"),
                                          onClick: () => {
                                              e.scribeAction({ element: "report_tweet" });
                                          },
                                          testID: X,
                                          text: e.promotedContent ? $i.reportAd : $i.reportTweet({ entity: i }),
                                      };
                                  })({ promotedContent: k, scribeAction: K, tweet: S, featureSwitches: O })),
                                  O.isTrue("netzdg_in_loggedout_posts_enabled") && (V.reportNetzDG = qi.t({ tweet: S })));
                            const ee = O.getStringValue("dsa_report_illegal_content_url");
                            return (
                                !J &&
                                    O.isTrue("dsa_report_flow_enabled") &&
                                    ee &&
                                    (V.reportEUIllegalContentDSA = (function (e) {
                                        const t = (0, Wi.MS)(e.reportUrl),
                                            { origin: i } = ji.ZP.get(),
                                            { id_str: n, permalink: o, user: s } = e.tweet,
                                            r = e.promotedContent ? "ad" : "post";
                                        return (
                                            t.searchParams.set("content_id", o ? `${i}${o}` : n),
                                            t.searchParams.set("content_type", r),
                                            s?.screen_name && t.searchParams.set("content_author", `@${s?.screen_name}`),
                                            {
                                                Icon: Bi.default,
                                                link: t.href,
                                                onClick: () => {
                                                    e.scribeAction({ element: `report_eu_illegal_content_${r}` });
                                                },
                                                text: Wi.yh,
                                                testID: oe,
                                            }
                                        );
                                    })({ tweet: S, promotedContent: k, scribeAction: K, reportUrl: ee })),
                                t &&
                                    y.location.pathname.match(Un) &&
                                    (V.downloadVideo = (({ downloadVideoLink: e, scribeAction: t }) => ({
                                        text: De,
                                        onClick: () => {
                                            t({ element: "download-video" });
                                        },
                                        link: e,
                                        Icon: Se.default,
                                        testID: te,
                                    }))({ downloadVideoLink: t, scribeAction: K })),
                                On.forEach((e) => {
                                    if ("feedbackOptions" !== e || S.isStaleEdit) V[e] && $.push(V[e]);
                                    else {
                                        const e = f ? f.filter((e) => !e.excludeFromActionMenu) : [];
                                        $.push(...e);
                                    }
                                }),
                                [$, V]
                            );
                        }),
                        (this._getLeaveBehindMenuActions = () => {
                            const {
                                    feedbackItems: e,
                                    tweet: { user: t },
                                } = this.props,
                                [, i] = this._getActionItems(w.Z),
                                n = [];
                            return (
                                Fn.forEach((o) => {
                                    if ("followOrUnfollow" !== o || t.following)
                                        if ("feedbackOptions" === o) {
                                            const t = e ? e.filter((e) => !e.excludeFromActionMenu) : [];
                                            n.push(...t);
                                        } else i[o] && n.push(i[o]);
                                }),
                                n
                            );
                        }),
                        (this._handleBlock = () => {
                            const { addToast: e, block: t, createLocalApiErrorHandler: i, dismissUserFromConversation: n, history: o, promotedContent: s, tweet: r } = this.props;
                            t(r.user.id_str, { promotedContent: s }).then(() => {
                                n({ userId: r.user.id_str, feedbackKeys: ["UnfollowEntity"] }), e({ action: { label: Rn.unblock, onAction: this._handleUnblock }, text: Rn.blockedSuccess });
                                const t = !!r.promoted_content?.impression_id;
                                if (this.context.featureSwitches.isTrue("subscriptions_block_ad_upsell_enabled") && t && !this._hasPremiumPlus) {
                                    const e = { variant: "BlockAd" };
                                    o.push("/i/verified-get-verified", e);
                                }
                            }, i(v.d)),
                                this._scribeAction({ element: "block" }),
                                this._scribeAction({ action: "block", element: "tweet_curation_action_menu" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, tweet: i, unblock: n } = this.props;
                            n(i.user.id_str, { promotedContent: t }).catch(e(k.D)), this._scribeAction({ element: "unblock" }), this._scribeAction({ action: "unblock", element: "tweet_curation_action_menu" });
                        }),
                        (this._handleImmediateDismissClick = () => {
                            const e = this._getLeaveBehindMenuActions();
                            this.props.setLeaveBehindActionItems?.(e), this._onMenuClick();
                        }),
                        (this._scribeAction = ({ action: e, additionalData: t, element: i }) => {
                            const { analytics: n, promotedContent: o, tweet: s } = this.props,
                                r = n.contextualScribeData;
                            let a = r?.items ? r : { ...(r || {}), items: [x.Z.getTweetItem(s, o)] };
                            return t && (a = { ...a, ...t }), n.scribe({ element: i, action: e || "click", data: a });
                        });
                }
                render() {
                    const { isActiveCreator: e, isDisabled: t, isForPreroll: i, menuControlProps: r, tweet: a, withChangeConversationControlsTooltip: l, withImmediateDismiss: h } = this.props,
                        m = a.conversation_control?.policy || g.k.all;
                    return i
                        ? o.createElement(c.ZP, { icon: o.createElement(p.default, { style: { height: "18px" } }), renderMenu: (e) => o.createElement(d.Z, { items: this._getPrerollActionItems(), onCloseRequested: e, shouldCloseOnClick: !0 }), size: "smallCompact", style: Ln.prerollDismissButton, type: "onMediaDominantColorFilled" })
                        : h
                          ? o.createElement(s.Z, { style: Ln.dismissButton }, o.createElement(y.Z, { onClick: this._handleImmediateDismissClick }))
                          : o.createElement(
                                s.Z,
                                { style: Ln.overflowMenu },
                                l ? o.createElement(M, null) : null,
                                o.createElement(b.Z, { controlled: !0, disallowedReplyControls: [], isActiveCreator: e, midConversationTweet: a, onChange: this._handleOnChangeConversationControls, setDisallowedReplyControls: () => {}, value: m }, ({ openPopover: e }) => o.createElement(u.Z, (0, n.Z)({}, r, { isDisabled: t, onClick: this._onMenuClick, renderActionMenu: this._renderCurationActionMenu(e), testID: $.Z.caret }))),
                                l ? o.createElement(M, null) : null,
                                this._renderEditWithPremiumUpsell(),
                            );
                }
                _getCommunityActions() {
                    const e = {},
                        { tweet: t } = this.props,
                        { community_id_str: i, id_str: n } = t,
                        { viewerUserId: s } = this.context;
                    if (!i || !s) return e;
                    const {
                            analytics: { contextualScribeNamespace: r },
                            community: a,
                            disableRemoveFromCommunity: l,
                            withCommunityModerationAuthority: c,
                        } = this.props,
                        { community_relationship: d, user: u } = t,
                        h = !l && c;
                    if ((u.id_str !== s && h && (this._shouldDisable(t, N.d.HideCommunityTweet) || (e.hideTweet = ((e, t) => ({ text: bt, Icon: pt.default, link: { pathname: `/i/report/${wt.C2.HideCommunityTweet}/${e}`, state: { scribeNamespace: t } } }))(n, { ...r, element: "hide_tweet" })), this._shouldDisable(t, N.d.RemoveFromCommunity) || (e.removeCommunityMember = ((e, t, i) => ({ text: Ui, Icon: Pi.default, link: { pathname: `/i/report/${wt.C2.RemoveCommunityMember}/${e.id_str}?community_id=${t}`, state: { scribeNamespace: i } } }))(u, i, { ...r, element: "remove_community_member" }))), this._shouldDisable(t, N.d.SearchUsersPost) || (e.searchUsersPost = ((e, t, i) => ({ text: Vi({ screenName: e.screen_name }), Icon: zi.default, link: { pathname: `/i/communities/${t}/search/?q=(from:${e.screen_name})`, state: { scribeNamespace: i } } }))(u, i, { ...r, element: "search_users_post" })), I.X7.includes(d?.actions.pin_action_result.__typename) && !this._shouldDisable(t, N.d.PinCommunityTweet))) {
                        const t = "CommunityTweetPinActionReplace" === a?.actions?.pin_action_result?.__typename;
                        e.pinCommunityTweet = ((e, t, i) => ({ text: Ei, Icon: Rt.default, onClick() {}, confirmation: { render: (n, s) => o.createElement(ki, { communityId: t, isReplacing: i, onCancel: s, onConfirm: n, tweetId: e }) } }))(n, i, t);
                    }
                    return I.Gd.includes(d?.actions.unpin_action_result.__typename) && !this._shouldDisable(t, N.d.UnpinCommunityTweet) && (e.unpinCommunityTweet = ((e, t) => ({ text: un, Icon: dn.default, onClick() {}, confirmation: { render: (i, n) => o.createElement(hn, { communityId: t, onCancel: n, onConfirm: i, tweetId: e }) } }))(n, i)), e;
                }
                _shouldIncludeTweetAppealOption() {
                    const { forwardPivotDisplayType: e, isNsfwUser: t, tweet: i, userCountry: n, userLanguage: o } = this.props,
                        { featureSwitches: s, viewerUserId: r } = this.context;
                    return (0, S.rT)({ viewerUserId: r, featureSwitches: s, forwardPivotDisplayType: e, tweet: i, userCountry: n, userLanguage: o }) || (0, S.V4)({ viewerUserId: r, featureSwitches: s, isNsfwUser: t, tweet: i, userCountry: n, userLanguage: o });
                }
            }
            (Zn.defaultProps = { withRemoveFromBookmarks: !1 }), (Zn.contextType = U.rC);
            const Ln = h.default.create((e) => ({ overflowMenu: { display: "flex", flexDirection: "row", alignItems: "center" }, dismissButton: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, prerollDismissButton: { width: "2rem", height: "1rem", backgroundColor: "rgba(0,0,0,.5)", borderRadius: "4px" } })),
                Hn = (0, D.ZP)(Pn(Zn)),
                Rn = { unblock: _().e133be4e, blockedSuccess: _().a9fd20be },
                On = ["searchUsersPost", "hideTweet", "removeCommunityMember", "delete", "edit", "appealTweetWarning", "pinOrUnpin", "highlightOrUndo", "promotedTweetDismiss", "adInfo", "removeTag", "feedbackOptions", "followOrUnfollow", "subscribe", "addOrRemoveFromList", "muteOrUnmute", "muteOrUnmuteConversation", "leaveConversation", "changeConversationControls", "blockOrUnblock", "viewTweetEngagements", "downloadVideo", "hideReply", "unhideReply", "embed", "report", "reportNetzDG", "reportEUIllegalContentDSA", "analytics", "relatedPosts", "viewHiddenReplies", "birdwatch", "birdwatchRequest", "pinCommunityTweet", "unpinCommunityTweet"],
                Fn = ["feedbackOptions", "followOrUnfollow", "muteOrUnmute", "blockOrUnblock", "report", "reportEUIllegalContentDSA"];
            const Bn = Object.freeze({ all: "change_conversation_control_to_everyone", community: "change_conversation_control_to_community", by_invitation: "change_conversation_control_to_mentioned", followers: "change_conversation_control_to_followers", subscribers: "change_conversation_control_to_subscribers", community_members: "community_members", community_hidden_tweet: "community_hidden_tweet", super_followers_exclusive: "super_followers_exclusive", community_tweet_member_removed: "community_tweet_member_removed", trusted_friends_tweet: "trusted_friends_tweet", verified: "change_conversation_control_to_verified", premium: "change_conversation_control_to_premium" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-e019dbda.0fa3555a.js.map
