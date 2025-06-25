"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-b7da5e41"],
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
        841772: (e, t, i) => {
            i.r(t), i.d(t, { default: () => Zn });
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
                m = i(111677),
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
                M = h.default.create((e) => ({ inlineCallout: { position: "absolute", end: e.spaces.space32, marginTop: e.spaces.space2, zIndex: 1 }, textStyle: { whiteSpace: "nowrap" } })),
                B = O(({ addFlag: e, shouldShowConversationControlsTip: t }) => {
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
                        o.createElement(s.Z, { ref: i, style: M.inlineCallout }, n && a ? o.createElement(Z.Z, { text: F, textStyle: M.textStyle, withRightArrow: !0 }) : null)
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
                Q = "edit",
                K = "editWithPremium",
                Y = "whyThisAd",
                J = "highlight",
                ee = "highlightUpsell",
                te = "subscribe",
                ie = "highlighOnPin",
                ne = "tweetEngagements",
                oe = "reportEUIllegalContentDSA",
                se = "editArticle",
                re = ({ featureSwitches: e, promotedContent: t, scribeAction: i }) => {
                    if (!t || !t.impression_id) return;
                    const { impression_id: n } = t,
                        o = e.isTrue("responsive_web_remove_qp_ad_label_enabled"),
                        s = a.Z.isQuickPromote(t);
                    return {
                        text: o && s ? _().b3b642fc : _().fb4ee11c,
                        Icon: j.default,
                        link: { pathname: `/i/about-this-ad/${n}`, state: { isQuickPromote: s } },
                        onClick: () => {
                            i && i({ element: "whythisad" });
                        },
                        testID: Y,
                    };
                };
            var ae = i(53674);
            const le = _().ad50e7d9;
            var ce = i(625271);
            const de = _().ef1042f8,
                ue = (e, { scribeAction: t, tweetId: i }) => ({
                    text: de,
                    onClick: () => {
                        t({ element: "contribute_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/contribute/${i}` },
                    Icon: ce.default,
                });
            var he = i(730873);
            const me = _().h3edf7a6,
                _e = (e, { scribeAction: t, tweetId: i }) => ({
                    text: me,
                    onClick: () => {
                        t({ element: "noterequest_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/noterequest/${i}` },
                    Icon: he.default,
                });
            var pe = i(194661);
            const we = _().bae0cbc0,
                be = _().bf8d98f4,
                fe = _().e69ada9e;
            var ge = i(607127);
            const Ce = _().d96cf7ce,
                ye = _().ae04c4dd,
                Te = _().d9442996,
                Ae = _().dad785a7,
                ve = _().jda253ab,
                Ee = _().j49c2f85,
                ke = _().f9fa0390,
                Ie = h.default.create((e) => ({ additionalInfo: { marginTop: e.spaces.space8 } }));
            var xe = i(72591);
            const Se = _().d9a2bd78;
            var De = i(376021),
                Pe = i(689985);
            const Ue = _().dad450ec,
                Ze = _().g9677c6e,
                Le = _().b57bfe70,
                He = _().bd3da7be,
                Re = _().j26481e6;
            var Oe = i(310452),
                Fe = i(354149),
                Me = i(507824);
            const Be = _().cb817dae,
                Ne = (e) => parseInt(e, 10);
            function $e(e) {
                switch (e.entityType) {
                    case "cashtag":
                    case "emoji":
                    case "hashtag":
                    case "mention":
                    case "text":
                        return `${e.prefix || ""}${(0, Fe.Tz)(e.text)}`;
                    case "media":
                    case "url":
                        return e.expandedUrl;
                    default:
                        return "";
                }
            }
            const We = _().abd845fe;
            var je = i(498720);
            const qe = _().fd391b9f;
            var ze = i(911373),
                Ve = i(757953);
            const Ge = _().c66afdc3,
                Xe = _().hbe4feb5,
                Qe = _().e1618e49;
            var Ke = i(688715),
                Ye = i(529356),
                Je = i(190286),
                et = i(520913),
                tt = i(648539);
            const it = _().ge5067bc,
                nt = _().j136c720,
                ot = _().d66f0338,
                st = `${_().cfc8cb50}\n\n${_().if8dc5f0}`,
                rt = (0, Ke.ju)("https://help.x.com/using-twitter/mentions-and-replies?lang=browser#hidden-reply"),
                at = _().b2615c6d,
                lt = _().i62a03aa,
                ct = _().cfd2f35e,
                dt = _().a6450e84,
                ut = _().ad00a739,
                ht = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: i, hideReply: n, onBlock: s, onTweetDismiss: r, scribeAction: a, shouldShowHideReplyTip: l, tweet: c }) => {
                    const d = () => {
                        a({ element: "moderated_replies_prompt", action: "impression" });
                    };
                    return {
                        confirmation: l
                            ? { render: (e, t) => (({ onConfirm: e, onCancel: t, onHideReplyImpression: i = () => {} }) => o.createElement(Ye.Z, { actionLabel: it, graphic: et.default, headline: ot, onAction: e, onClose: t, onImpression: i, onTertiaryAction: t, subtext: st, supportUrl: rt, tertiaryActionLabel: ct }))({ onConfirm: e, onCancel: t, onHideReplyImpression: d }) }
                            : {
                                  render: (e, t) => {
                                      const {
                                          user: { screen_name: i },
                                      } = c;
                                      return o.createElement(Je.Z, {
                                          cancelButtonLabel: lt,
                                          confirmButtonLabel: dt,
                                          confirmButtonType: "destructiveFilled",
                                          headline: at({ screenName: i }),
                                          onCancel: e,
                                          onConfirm: () => {
                                              s(), e();
                                          },
                                          text: ut({ screenName: i }),
                                      });
                                  },
                              },
                        text: it,
                        onClick: () => {
                            e(P.f8),
                                n(c.id_str, { conversation_id: c.conversation_id_str }).then(
                                    (e) => {
                                        r && r(), t({ text: nt });
                                    },
                                    i({ showToast: !0 }),
                                ),
                                a({ element: "moderate_reply" });
                        },
                        Icon: tt.default,
                    };
                };
            var mt = i(161335),
                _t = i(395067);
            const pt = _().f9f27fa2;
            var wt = i(487606),
                bt = i(545334),
                ft = i(350968),
                gt = i(337653),
                Ct = (i(585488), i(138099)),
                yt = i(750410),
                Tt = i(167630),
                At = i(312771),
                vt = i(301410);
            const Et = _().cfd2f35e,
                kt = gt.Z,
                It = (0, vt.z)(kt, { errorConfig: { context: "TWITTER_HIGHLIGHT_TWEET_CONFIRMATION_CONTEXT" } }),
                xt = o.memo(({ onCancel: e, onConfirm: t, onHighlight: i, onUndohighlight: n, tweetId: s }) => {
                    const r = o.useMemo(() => ({ tweet_id: s }), [s]),
                        a = o.useCallback(
                            (e) => () => {
                                e(), t();
                            },
                            [t],
                        ),
                        l = o.useCallback(
                            ({ data: t, fetchStatus: s, retry: r }) => {
                                if (s === At.ZP.LOADED) {
                                    const s = !!t?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted,
                                        { confirmLabel: r, onAction: l, subtext: c, title: d } = (0, ft.rg)(s, i, n);
                                    return o.createElement(Je.Z, { cancelButtonLabel: Et, confirmButtonLabel: r, confirmButtonType: "primary", headline: d, onCancel: e, onConfirm: a(l), text: c });
                                }
                                return o.createElement(Ct.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: St.loadingSheet, type: "center", withMask: !0 }, s === At.ZP.FAILED ? o.createElement(yt.Z, { onRequestRetry: r }) : o.createElement(Tt.Z, null));
                            },
                            [i, n, a, e],
                        );
                    return o.createElement(It, { fetchPolicy: "network-only", render: l, variables: r });
                }),
                St = h.default.create((e) => ({ loadingSheet: { paddingVertical: e.spaces.space20 } })),
                Dt = o.memo(xt),
                Pt = _().ce87916a,
                Ut = _().ef4602ec,
                Zt = _().h8a3525e;
            var Lt = i(833057),
                Ht = i(40610);
            const Rt = _().i419d136,
                Ot = _().c1b9714a,
                Ft = _().c5d23126,
                Mt = _().fe4d099a,
                Bt = _().cfd2f35e,
                Nt = _().e8d4c1cc,
                $t = { label: _().b68c3784, link: { pathname: "/i/verified-choose", state: { referring_page: "get_verified_highlight_on_pin" } } },
                Wt = o.memo(({ isBlueUpsellEligible: e, onCancel: t, onConfirm: i, onHighlight: n, onPinTweet: s, onUndohighlight: r, tweetId: a }) => {
                    const [l, c] = o.useState(!1),
                        d = o.useMemo(() => ({ tweet_id: a }), [a]),
                        u = o.useMemo(() => (l ? o.createElement(Ht.Z.Primary, { action: $t, headline: Nt, onAction: i, style: jt.callout, withIcon: !1 }) : null), [l, i]),
                        h = o.useCallback(() => {
                            e ? c(!0) : (n(), i());
                        }, [c, n, i, e]),
                        m = o.useCallback(() => {
                            s(), i();
                        }, [s, i]),
                        _ = o.useCallback(
                            ({ data: e, fetchStatus: i, retry: n }) => {
                                if (i === At.ZP.LOADED) {
                                    return !!e?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted ? o.createElement(Je.Z, { confirmButtonLabel: Ft, confirmButtonType: "primary", headline: Rt, onCancel: t, onConfirm: m, text: Ot }) : o.createElement(Ye.Z, { actionLabel: Mt, footer: u, graphicDisplayMode: "none", headline: "Highlight your best content instead", onAction: h, onClose: t, onSecondaryAction: m, onTertiaryAction: t, secondaryActionLabel: Ft, subtext: "With Highlights, you can curate all your best posts on your profile.", tertiaryActionLabel: Bt, withCloseButton: !0 });
                                }
                                return o.createElement(Ct.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: jt.loadingSheet, type: "center", withMask: !0 }, i === At.ZP.FAILED ? o.createElement(yt.Z, { onRequestRetry: n }) : o.createElement(Tt.Z, null));
                            },
                            [h, m, t, u],
                        );
                    return o.createElement(It, { fetchPolicy: "network-only", render: _, variables: d });
                }),
                jt = h.default.create((e) => ({ loadingSheet: { backgroundColor: "transparent" }, callout: { fontSize: e.fontSizes.body, color: e.colors.text, fontWeight: e.fontWeights.medium } })),
                qt = o.memo(Wt),
                zt = _().ha35a1d2,
                Vt = _().d04f95c0,
                Gt = _().ef4602ec;
            const Xt = function ({ addToast: e, createLocalApiErrorHandler: t, highlight: i, isBlueUpsellEligible: n, pin: s, scribeAction: r, tweetId: a, undoHighlight: l }) {
                const c = () => {
                        l(a).then((t) => {
                            e(t?.tweet_highlights_delete?.success ? { text: ft.sp, withClearButton: !0 } : { text: Gt, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            r({ element: "undoHighlight" });
                    },
                    d = () => {
                        i(a).then((t) => {
                            e(t?.tweet_highlights_put?.success ? { action: { label: bt.d, onAction: c }, text: ft.I9, withClearButton: !0 } : { text: Gt, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            r({ element: "highlight" });
                    },
                    u = () => {
                        s(a).then(
                            () => {
                                e({ text: Vt });
                            },
                            t({ showToast: !0 }),
                        ),
                            r({ element: "pin" });
                    };
                return { confirmation: { render: (e, t) => o.createElement(qt, { isBlueUpsellEligible: n, onCancel: t, onConfirm: e, onHighlight: d, onPinTweet: u, onUndohighlight: c, tweetId: a }) }, testID: ie, text: zt, Icon: Lt.default, onClick() {} };
            };
            var Qt = i(883437),
                Kt = i(587103);
            const Yt = _().bb16cc76,
                Jt = _().de21174c,
                ei = (e, t) => o.createElement(Kt.Z, { onCancel: t, onConfirm: e });
            var ti = i(383494),
                ii = i(232130),
                ni = i(40904),
                oi = i(391366);
            const si = _().e2d6c17e,
                ri = _().cd1942f4,
                ai = _().bbd8bed6,
                li = _().c13af432,
                ci = _().gf5e9ea6,
                di = _().df744bda,
                ui = _().j9552760,
                hi = _().cfd2f35e,
                mi = _().d751694c,
                _i = (0, Ke.ju)("https://support.x.com/articles/20175032"),
                pi = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: i, muteTweet: n, scribeAction: s, shouldShowMuteEducationTip: r, tweet: a, unmuteTweet: l }) => {
                    const c = () => {
                            e(P.EM);
                        },
                        d = () => {
                            l(a.id_str).then(
                                () => {
                                    t({ text: li });
                                },
                                (e) => {
                                    i({ showToast: !0 })(e), s({ element: "tweet", action: "unmute_conversation_error" });
                                },
                            ),
                                s({ element: "tweet", action: "unmute_conversation" });
                        },
                        u = {
                            text: si,
                            onClick: () => {
                                n(a.id_str).then(
                                    () => {
                                        t({ action: { label: ci, onAction: d }, text: ai });
                                    },
                                    (e) => {
                                        i({ showToast: !0 })(e), s({ element: "tweet", action: "mute_conversation_error" });
                                    },
                                ),
                                    s({ element: "tweet", action: "mute_conversation" });
                            },
                            confirmation: r ? { render: (e, t) => o.createElement(Ye.Z, { actionLabel: di, graphic: ii.default, graphicDisplayMode: "illustration", headline: ui, onAction: e, onClose: t, onImpression: c, onTertiaryAction: t, subtext: mi, supportUrl: _i, tertiaryActionLabel: hi }) } : void 0,
                            Icon: ni.default,
                        },
                        h = { text: ri, onClick: d, Icon: oi.default };
                    return a.conversation_muted ? h : u;
                },
                wi = _().ha35a1d2,
                bi = _().i419d136,
                fi = _().c1b9714a,
                gi = _().c5d23126,
                Ci = _().d04f95c0,
                yi = _().a50c911e;
            var Ti = i(523561);
            const Ai = _().d1c1e2c2,
                vi = (0, Ti.Z)({ loader: () => i.e("ondemand.CommunityTweetPinning").then(i.bind(i, 828856)) }),
                Ei = _().f5cdcc2c,
                ki = ({ hasPremiumPlus: e, history: t, onTweetDismiss: i, promotedDismissUpsellEnabled: n }) => ({
                    text: Ei,
                    onClick: () => {
                        if ((i?.(), !e && n)) {
                            const e = { variant: "DismissAd" };
                            t.push("/i/verified-get-verified", e);
                        }
                    },
                    Icon: j.default,
                }),
                Ii = _().hea3f8ac,
                xi = _().a09331e0;
            var Si = i(530813);
            const Di = _().c2e276e4;
            var Pi = i(310700),
                Ui = i(712881);
            const Zi = _().e68b09b4,
                Li = _().a95f04ba,
                Hi = _().jfc76958;
            var Ri = i(85375),
                Oi = i(415506),
                Fi = i(711223);
            function Mi(e) {
                const { featureSwitches: t, isAppealTweetWarning: i = !1, promotedContent: n, tweet: o } = e,
                    s = t.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                    r = t.isTrue("responsive_web_remove_qp_ad_label_enabled"),
                    c = l.Z.getLocalizedEntityName({ tweet: o, articlesEnabled: s });
                let d = { element: "report_tweet" },
                    u = "/i/report/status",
                    h = _t.C2.Tweet,
                    m = Oi.default,
                    _ = r && a.Z.isQuickPromote(n) ? Bi.reportPost : a.Z.shouldShowAdDisclosure(n) ? Bi.reportAd : Bi.reportTweet({ entity: c });
                i && ((d = { element: "appeal_tweet_warning" }), (u = "/i/report/appeal_tweet_warning"), (h = _t.C2.AppealTweetWarning), (m = Fi.default), (_ = Bi.appealTweetWarning));
                return {
                    Icon: m,
                    onClick: () => {
                        const t = e.analytics.contextualScribeData,
                            i = o?.extended_entities?.media?.length || 0,
                            s = o?.article?.media_entities?.length || 0,
                            r = (o?.entities?.urls?.length || 0) > 0 || i > 0 || s > 0 || void 0 !== o.card,
                            a = t.items && t.items[0] && t.items[0].conversation_details?.conversation_section;
                        e.scribeAction(d);
                        if (!(o.community_id_str || o.card?.name === Ri.sj.BROADCAST || o.card?.name === Ri.sj.PERISCOPE_BROADCAST || (n && !e.featureSwitches.isTrue("responsive_web_ocf_reportflow_promoted_enabled"))) && (0, _t.Yw)(e.featureSwitches, h)) {
                            const t = (0, _t.j_)({ clientReferer: window.location.pathname, conversationSection: a, isMedia: r, isPromoted: void 0 !== n, reportType: h, reportedTweet: o, reportedUser: o.user.id_str, scribeNamespace: e.analytics.contextualScribeNamespace });
                            e.history.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(t) } } });
                        } else e.history.push({ pathname: `${u}/${o.id_str}`, state: { clientReferer: window.location.pathname, conversationSection: a, isMedia: r, promotedContent: n, scribeNamespace: e.analytics.contextualScribeNamespace } });
                    },
                    testID: X,
                    text: _,
                };
            }
            const Bi = { appealTweetWarning: _().f1824804, reportTweet: _().j4e43d8b, reportAd: _().e3fd237e, reportPost: _().ebb7662a };
            var Ni = i(946099),
                $i = i(782826);
            var Wi = i(928875),
                ji = i(297938);
            const qi = _().d7513755;
            var zi = i(646677);
            const Vi = _().ab0decc0,
                Gi = _().d7dbb71b;
            var Xi = i(224823),
                Qi = i(323683);
            const Ki = _().ja66a2b5,
                Yi = _().c2423b7b;
            var Ji = i(659306);
            const en = _().i31dfa4c,
                tn = _().j8e56ba2,
                nn = _().ic030338,
                on = _().gfcea3f4,
                sn = _().eb2d59f4,
                rn = _().j44ec610,
                an = _().a2dd7414;
            var ln = i(963879);
            const cn = _().cac6a24a,
                dn = (0, Ti.Z)({ loader: () => i.e("ondemand.CommunityTweetPinning").then(i.bind(i, 760844)) }),
                un = _().f9478972,
                hn = _().c5491b5d;
            var mn = i(71620),
                _n = i(143322),
                pn = i(491963),
                wn = i(80890),
                bn = i(629196),
                fn = i(390387),
                gn = i(601576),
                Cn = i(836255),
                yn = i(360142),
                Tn = i(919022);
            const An = (e, t) => (0, P.t5)(e, P.EM),
                vn = (e, t) => (0, P.t5)(e, P.f8),
                En = (e) => (0, P.t5)(e, P.FX),
                kn = (e, t) => (0, pn.n9)(e, t.tweet),
                In = (e, t) => (0, pn.z0)(e, t.tweet),
                xn =
                    (e) =>
                    (t, i, { featureSwitches: n }) =>
                        Promise.all([t(Cn.Z.delete(e)), t((0, yn.ZP)({ focalTweetId: e }).deleteTimeline())]),
                Sn = (0, H.Z)()
                    .propsFromState(() => ({ userCountry: fn.GG, userLanguage: fn.VT, shouldShowMuteEducationTip: An, shouldShowHideReplyTip: vn, shouldShowConversationControlsTip: En, disableRemoveFromCommunity: kn, community: In }))
                    .propsFromActions(() => ({ addFlag: P.pj, addToast: gn.fz, block: Tn.ZP.block, changeConversationControls: Cn.Z.changeConversationControls, createLocalApiErrorHandler: (0, mn.zr)("TWEET_CURATION_ACTION_SHEET_CONTAINER"), deleteTweet: xn, dismissUserFromConversation: yn.f0, follow: Tn.ZP.follow, hideReply: Cn.Z.hideReply, unmentionUserFromConversation: Cn.Z.unmentionUserFromConversation, mute: bn.r, muteTweet: Cn.Z.mute, pin: wn.Yd, removeConversationControls: Cn.Z.removeConversationControls, removeTag: Cn.Z.removeTag, unblock: Tn.ZP.unblock, unfollow: Tn.ZP.unfollow, unhideReply: Cn.Z.unhideReply, unmute: Tn.ZP.unmute, unmuteTweet: Cn.Z.unmute, unpin: wn.oc, highlight: Cn.Z.highlight, undoHighlight: Cn.Z.undoHighlight, unpublishArticleEntity: _n.ZP.unpublish }))
                    .withAnalytics(),
                Dn = /\/mediaViewer$/;
            class Pn extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showModerationBlockConfirmation: !1, showEditWithPremiumUpsell: !1 }),
                        (this._hasPremiumPlus = this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate() || this.context.userClaims.hasSubscription("premium_plus")),
                        (this._shouldDisable = N.$y.bind(null, this.context.featureSwitches)),
                        (this._birdwatchAction = ue.bind(null, this.context.featureSwitches)),
                        (this._birdwatchRequestAction = _e.bind(null, this.context.featureSwitches)),
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
                                      t({ text: a }), i.scribe({ element: On.all, action: "click", data: { items: [x.Z.getChangeConversationControlsItem(r, e)] } });
                                  }, o(E.w))
                                : n &&
                                  n(r.id_str, { policy: e, screenName: r.user?.screen_name }).then(() => {
                                      t({ text: a }), i.scribe({ element: On[e], action: "click", data: { items: [x.Z.getChangeConversationControlsItem(r, e)] } });
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
                                (d.promotedTweetDismiss = ki({ onTweetDismiss: () => i?.(!1), hasPremiumPlus: this._hasPremiumPlus, promotedDismissUpsellEnabled: l.isTrue("subscriptions_hide_ad_upsell_enabled"), history: t })),
                                h && (d.adInfo = re({ featureSwitches: l, promotedContent: n, scribeAction: c })),
                                (d.report = Mi({ analytics: e, history: t, promotedContent: n, scribeAction: c, tweet: o, featureSwitches: l, reporterCountry: s, reporterLanguage: r })),
                                Hn.forEach((e) => {
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
                            return (0, ti.Z)({ ...c, mute: o, unmute: a, user: l, dismissUserFromConversation: i, promotedContent: s, muteAdUpsellEnabled: d, history: n, hasPremiumPlus: this._hasPremiumPlus });
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
                                                      e(t?.tweet_highlights_delete?.success ? { text: ft.sp, withClearButton: !0 } : { text: Ut, withClearButton: !0, withAutoDismiss: !0 });
                                                  }),
                                                      i({ element: "undoHighlight" });
                                              },
                                              a = () => {
                                                  t(n).then((t) => {
                                                      e(t?.tweet_highlights_put?.success ? { action: { label: bt.d, onAction: r }, text: ft.I9, withClearButton: !0 } : { text: Ut, withClearButton: !0, withAutoDismiss: !0 });
                                                  }),
                                                      i({ element: "highlight" });
                                              };
                                          return { confirmation: { render: (e, t) => o.createElement(Dt, { onCancel: t, onConfirm: e, onHighlight: a, onUndohighlight: r, tweetId: n }) }, onClick() {}, Icon: wt.default, text: Pt, testID: J };
                                      })({ addToast: e, scribeAction: s, tweetId: i.id_str, undoHighlight: n, highlight: t })
                                    : c
                                      ? (({ scribeAction: e }) => ({
                                            text: Zt,
                                            onClick: () => {
                                                e({ element: "highlight-upsell" });
                                            },
                                            link: { pathname: "/i/verified-choose", state: { referring_page: "tweet_highlight_action_upsell" } },
                                            Icon: wt.default,
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
                                ? Xt({ addToast: e, scribeAction: r, tweetId: o.id_str, undoHighlight: s, highlight: i, pin: n, createLocalApiErrorHandler: t, isBlueUpsellEligible: d && !h })
                                : (({ addToast: e, createLocalApiErrorHandler: t, pin: i, scribeAction: n, tweetId: o }) => ({
                                      confirmation: { text: fi, headline: bi, label: gi },
                                      testID: V,
                                      text: wi,
                                      onClick: () => {
                                          i(o).then(
                                              ({ addedToHighlights: t }) => {
                                                  e({ text: t ? yi : Ci });
                                              },
                                              t({ showToast: !0 }),
                                          ),
                                              n({ element: "pin" });
                                      },
                                      Icon: Lt.default,
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
                                        const t = Ne(e.edit_control.editable_until_msecs);
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
                                            n = Oe.ZP.tweetTextParts(o.text, o.display_text_range, o.entities).map($e).join("");
                                        }
                                        return {
                                            testID: Q,
                                            onClick: () => {
                                                e.scribeAction({ element: "edit" });
                                            },
                                            text: Be,
                                            Icon: De.default,
                                            link: { pathname: "/compose/post", state: { previousTweetId: i.id_str, defaultText: n, quotedStatusId: i.quoted_status?.id_str, hideUnsentTweetsButton: !0, editableUntil: i.edit_control?.editable_until_msecs, isLastEdit: "1" === i.edit_control?.edits_remaining } },
                                        };
                                    })({ scribeAction: s, tweet: e, featureSwitches: t });
                                if (!this._editTweetCompositionEnabledForUser() && this._editTweetCompositionEligible && !i.isAnyPremiumSubscriber() && !i.hasSubscription("twitter_blue_legacy") && t.isTrue("subscriptions_sign_up_enabled") && t.isTrue("responsive_web_edit_tweet_upsell_enabled"))
                                    return (({ onClick: e, scribeAction: t, tweet: i }) => ({
                                        onClick: () => {
                                            t({ element: "edit-upsell" }), e();
                                        },
                                        text: We,
                                        Icon: De.default,
                                        testID: K,
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
                                      confirmation: { text: He, headline: Le, label: Ze },
                                      testID: se,
                                      text: Ue,
                                      onClick: () => {
                                          s(t).then(
                                              () => {
                                                  n.push({ pathname: (0, Pe.lU)(t) }), e({ text: Re });
                                              },
                                              i({ showToast: !0 }),
                                          ),
                                              o({ element: "editArticle" });
                                      },
                                      Icon: De.default,
                                  }))({ createLocalApiErrorHandler: t, scribeAction: l, addToast: e, unpublishArticleEntity: o, articleEnttiyId: n.article.rest_id, history: i })
                                : null;
                        }),
                        (this._getActionItems = (e, t) => {
                            const { deleteTweet: i, follow: n, hideReply: r, muteTweet: c, removeTag: d, unmentionUserFromConversation: u, unmuteTweet: h, unpin: m } = this.props,
                                { addFlag: _, addToast: p, analytics: w, createLocalApiErrorHandler: b, feedbackItems: f, forwardPivotDisplayType: g, forwardPivotLandingUrl: C, history: y, isPinned: T, onDeleteTweet: v, onTweetDismiss: E, promotedContent: k, shouldShowHideReplyTip: I, shouldShowMuteEducationTip: x, tweet: S, userCountry: D, userLanguage: P, withChangeConversationControls: U, withHideReply: Z, withMuteConversation: L, withUnhideReply: H, withViewHiddenReplies: R } = this.props,
                                { featureSwitches: O, userClaims: F, viewerUserId: M } = this.context,
                                { user: B } = S,
                                $ = [],
                                j = a.Z.isPromoted(k) && a.Z.shouldShowAdDisclosure(k),
                                V = {},
                                Q = this._scribeAction,
                                K = { addToast: p, createLocalApiErrorHandler: b, scribeAction: Q },
                                Y = B.id_str === M;
                            Object.assign(V, this._getCommunityActions()),
                                j && (V.adInfo = re({ featureSwitches: O, promotedContent: k, scribeAction: Q })),
                                Y &&
                                    !this._shouldDisable(S, N.d.ViewTweetActivity) &&
                                    (V.analytics = (({ featureSwitches: e, scribeAction: t, tweet: i }) => {
                                        const n = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                            o = l.Z.getLocalizedEntityName({ tweet: i, articlesEnabled: n });
                                        return {
                                            text: le({ entity: o }),
                                            onClick: () => {
                                                t({ element: "analytics" });
                                            },
                                            link: `/${i.user.screen_name}/status/${i.id_str}/analytics`,
                                            Icon: ae.default,
                                            testID: q,
                                        };
                                    })({ tweet: S, scribeAction: Q, featureSwitches: O })),
                                O.isTrue("responsive_web_delete_tweet_stats_enabled") &&
                                    (V.viewTweetEngagements = (({ featureSwitches: e, scribeAction: t, tweet: i }) => {
                                        const n = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                            o = l.Z.getLocalizedEntityName({ tweet: i, articlesEnabled: n });
                                        return {
                                            text: hn({ entity: o }),
                                            Icon: ae.default,
                                            link: `${i.permalink}/quotes`,
                                            onClick: () => {
                                                t && t({ element: "tweet_engagements" });
                                            },
                                            testID: ne,
                                        };
                                    })({ tweet: S, scribeAction: Q, featureSwitches: O })),
                                B.protected ||
                                    this._shouldDisable(S, N.d.Embed) ||
                                    S.isPreviewDisplay ||
                                    (V.embed = (({ featureSwitches: e, permalink: t, scribeAction: i, tweet: n }) => {
                                        const o = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                            s = l.Z.getLocalizedEntityName({ tweet: n, articlesEnabled: o });
                                        return {
                                            text: qe({ entity: s }),
                                            onClick: () => {
                                                const e = `https://publish.twitter.com/?url=https://twitter.com${t}`;
                                                window.open(e, "_blank"), i({ element: "embed_tweet" });
                                            },
                                            Icon: je.default,
                                        };
                                    })({ permalink: S.permalink, scribeAction: Q, tweet: S, featureSwitches: O }));
                            const J = l.Z.isArticlePost(S) && O.isTrue("responsive_web_twitter_article_seed_tweet_enabled") && F.isTrueAndEnabled("subscriptions_feature_article_composer");
                            if (J) {
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
                                        text: e ? xi : Ii,
                                        link: t,
                                        onClick: () => {
                                            i({ element: "similar_posts_action" });
                                        },
                                        Icon: wt.default,
                                    }))({ landingUrl: C.url, isArticle: J, scribeAction: Q })),
                                R &&
                                    S.conversation_id_str === S.id_str &&
                                    !this._shouldDisable(S, N.d.ViewHiddenReplies) &&
                                    (V.viewHiddenReplies = (({ permalink: e, scribeAction: t }) => ({
                                        text: un,
                                        link: `${e}/hidden`,
                                        onClick: () => {
                                            t({ element: "view_moderated_replies" });
                                        },
                                        Icon: tt.default,
                                    }))({ permalink: S.permalink, scribeAction: Q })),
                                ((e, t) => {
                                    const i = t.extended_entities?.media && t.extended_entities.media[0] && t.extended_entities.media[0].features?.all?.tags;
                                    return !!i && (0, Ui.Z)(i, (t) => t.user_id === e);
                                })(M, S) &&
                                    (V.removeTag = (({ createLocalApiErrorHandler: e, removeTag: t, tweet: i, viewerUserId: n }) => ({
                                        confirmation: { label: Zi, headline: Li },
                                        text: Hi,
                                        onClick: () => {
                                            const o = i.extended_entities?.media?.map((e) => e.id_str).join(",");
                                            t(i.id_str, { status_id: i.id_str, media_ids: o, tagged_user_ids: n }).catch(e({ showToast: !0 }));
                                        },
                                        Icon: Pi.default,
                                    }))({ createLocalApiErrorHandler: b, viewerUserId: M, removeTag: d, tweet: S })),
                                ((e, t) => {
                                    if (!e) return !1;
                                    const i = t.entities?.user_mentions?.some((t) => t.id_str === e),
                                        n = t.in_reply_to_user_id_str === e,
                                        o = i || n,
                                        s = t.unmentioned_user_ids?.includes(e);
                                    return o && !s;
                                })(M, S) &&
                                    O.isTrue("dont_mention_me_enabled") &&
                                    (V.leaveConversation = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweet: n, unmentionUserFromConversation: o }) => ({
                                        confirmation: { render: ei },
                                        text: Yt,
                                        onClick: () => {
                                            o(n.id_str).then(
                                                () => {
                                                    e({ text: Jt });
                                                },
                                                t({ showToast: !0 }),
                                            ),
                                                i({ element: "leave_conversation" });
                                        },
                                        Icon: Qt.default,
                                    }))({ ...K, unmentionUserFromConversation: u, tweet: S })),
                                M)
                            )
                                if (
                                    (B.blocking ||
                                        this._shouldDisable(S, N.d.ListsAddRemove, void 0, void 0, Y) ||
                                        (V.addOrRemoveFromList = (({ scribeAction: e, user: t }) =>
                                            (0, W.k)(t, () => {
                                                e({ element: "add_to_list" });
                                            }))({ user: B, scribeAction: Q })),
                                    this._birdwatchNoteWritingEnabled && !S.isStaleEdit && (V.birdwatch = this._birdwatchAction({ scribeAction: Q, tweetId: S.id_str })),
                                    this._birdwatchNoteRequestEnabled && !S.isStaleEdit && (V.birdwatchRequest = this._birdwatchRequestAction({ scribeAction: Q, tweetId: S.id_str })),
                                    Y)
                                ) {
                                    T
                                        ? (V.pinOrUnpin = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweetId: n, unpin: o }) => ({
                                              confirmation: { text: sn, headline: on, label: rn },
                                              testID: G,
                                              text: nn,
                                              onClick: () => {
                                                  o(n).then(
                                                      () => {
                                                          e({ text: an });
                                                      },
                                                      t({ showToast: !0 }),
                                                  ),
                                                      i({ element: "unpin" });
                                              },
                                              Icon: Lt.default,
                                          }))({ ...K, tweetId: S.id_str, unpin: m }))
                                        : this._shouldDisable(S, N.d.PinToProfile) || (V.pinOrUnpin = this._getHighlightUpsellOnPinAction());
                                    const t = this._getHighlightOrUndoAction();
                                    t && (V.highlightOrUndo = t),
                                        this._shouldIncludeTweetAppealOption() && (V.appealTweetWarning = Mi({ analytics: w, history: y, isAppealTweetWarning: !0, promotedContent: k, scribeAction: Q, tweet: S, featureSwitches: O, reporterCountry: D, reporterLanguage: P })),
                                        L && !this._shouldDisable(S, N.d.MuteConversation) && (V.muteOrUnmuteConversation = pi({ ...K, addFlag: _, muteTweet: c, shouldShowMuteEducationTip: x, tweet: S, unmuteTweet: h })),
                                        U &&
                                            !this._shouldDisable(S, N.d.ConversationControls) &&
                                            (V.changeConversationControls = (({ onChangeConversationControls: e, tweet: t }) => {
                                                const i = !!t.exclusivity_info,
                                                    n = !!t.premium_info,
                                                    o = i || n;
                                                return { disabled: o, onClick: o ? void 0 : e, subText: i ? be : n ? fe : void 0, text: we, Icon: pe.default };
                                            })({ tweet: S, onChangeConversationControls: e })),
                                        this._shouldDisable(S, N.d.Delete) ||
                                            (V.delete = (({ addToast: e, createLocalApiErrorHandler: t, deleteTweet: i, featureSwitches: n, onDeleteTweet: r, scribeAction: a, tweet: c, userClaims: d }) => {
                                                const u = (d.isTrueAndEnabled("subscriptions_feature_labs_1004") || n.isTrue("responsive_web_edit_tweet_enabled")) && n.isTrue("responsive_web_edit_tweet_composition_enabled"),
                                                    h = n.isTrue("subscriptions_feature_labs_1004") || n.isTrue("responsive_web_edit_tweet_enabled"),
                                                    m = n.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                                    _ = l.Z.postEntityName;
                                                return {
                                                    confirmation: { label: Ce, headline: ye({ entity: _ }), text: l.Z.getOriginalTweet(c).isEdited && (u || h) ? Ae({ entity: _ }) : m && l.Z.isArticlePost(c) ? o.createElement(o.Fragment, null, Te, o.createElement(s.Z, { style: Ie.additionalInfo }, ke)) : Te, confirmButtonType: "destructiveFilled" },
                                                    isEmphasized: !0,
                                                    text: Ce,
                                                    onClick: () => {
                                                        i(c.id_str).then(
                                                            () => {
                                                                e({ text: ve({ entity: _ }) });
                                                            },
                                                            t({ defaultToast: { text: Ee({ entity: _ }) }, showToast: !0 }),
                                                        ),
                                                            a({ element: "delete" }),
                                                            r && r(c.id_str);
                                                    },
                                                    Icon: ge.default,
                                                };
                                            })({ ...K, deleteTweet: i, onDeleteTweet: v, tweet: S, featureSwitches: O, userClaims: F }));
                                } else
                                    E && j && (V.promotedTweetDismiss = ki({ onTweetDismiss: E, hasPremiumPlus: this._hasPremiumPlus, promotedDismissUpsellEnabled: this.context.featureSwitches.isTrue("subscriptions_hide_ad_upsell_enabled"), history: y })),
                                        B.blocking ||
                                            this._shouldDisable(S, N.d.Follow) ||
                                            ((V.followOrUnfollow = B.following
                                                ? (({ addToast: e, createLocalApiErrorHandler: t, promotedContent: i, scribeAction: n, unfollow: o, user: s }) => ({
                                                      text: Ki({ screenName: s.screen_name }),
                                                      onClick: () => {
                                                          o(s.id_str, { promotedContent: i }).then((t) => {
                                                              e({ text: Yi({ screenName: s.screen_name }) });
                                                          }, t(Qi.X)),
                                                              n({ element: "unfollow" }),
                                                              n({ action: "unfollow", element: "tweet_curation_action_menu" });
                                                      },
                                                      Icon: Xi.default,
                                                  }))({ ...K, unfollow: this.props.unfollow, promotedContent: k, user: B })
                                                : (({ addToast: e, createLocalApiErrorHandler: t, follow: i, promotedContent: n, scribeAction: o, user: s }) => ({
                                                      text: Ge({ screenName: s.screen_name }),
                                                      onClick: () => {
                                                          i(s.id_str, { promotedContent: n }).then(
                                                              () => {
                                                                  o({ element: "follow" }), o({ action: "follow", element: "tweet_curation_action_menu" }), s.protected ? e({ text: Xe({ screenName: s.screen_name }) }) : e({ text: Qe({ screenName: s.screen_name }) });
                                                              },
                                                              t({ ...Ve.H, showToast: !0 }),
                                                          ),
                                                              o({ element: "follow_attempt" });
                                                      },
                                                      Icon: ze.default,
                                                  }))({ ...K, follow: n, promotedContent: k, user: B })),
                                            O.allTrue(["super_follow_android_web_subscription_enabled", "creator_subscriptions_subscribe_action_tweet_menu_enabled"]) &&
                                                B.super_follow_eligible &&
                                                !B.super_following &&
                                                (V.subscribe = (({ history: e, scribeAction: t, user: i }) => ({
                                                    text: Gi({ followType: Vi, screenName: `@${i.screen_name}` }),
                                                    onClick: () => {
                                                        e.push(`/${i.screen_name}/creator-subscriptions/subscribe`, { referring_page: "profile_action_menu" }), t({ element: "subscribe" });
                                                    },
                                                    Icon: zi.default,
                                                    testID: te,
                                                }))({ scribeAction: Q, history: y, user: B })),
                                            (V.muteOrUnmute = this._getMuteOrUnmuteAction())),
                                        L && (V.muteOrUnmuteConversation = pi({ ...K, addFlag: _, muteTweet: c, shouldShowMuteEducationTip: x, tweet: S, unmuteTweet: h })),
                                        Z && (V.hideReply = ht({ ...K, addFlag: _, hideReply: r, onBlock: this._handleBlock, onTweetDismiss: E, shouldShowHideReplyTip: I, tweet: S })),
                                        H &&
                                            (V.unhideReply = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweet: n, unhideReply: o }) => ({
                                                text: en,
                                                onClick: () => {
                                                    o(n.id_str, { conversation_id: n.conversation_id_str }).then(
                                                        (t) => {
                                                            e({ ariaOnly: !0, text: tn });
                                                        },
                                                        t({ showToast: !0 }),
                                                    ),
                                                        i({ element: "unmoderate_reply" });
                                                },
                                                Icon: Ji.default,
                                            }))({ ...K, tweet: S, unhideReply: this.props.unhideReply })),
                                        (V.blockOrUnblock = (0, A.op)({ blockAction: this._handleBlock, source: A.SC.TWEET_CARET, testID: z, unblockAction: this._handleUnblock, user: B }));
                            M && !Y && !S.isPreviewDisplay
                                ? (V.report = Mi({ analytics: w, history: y, promotedContent: k, scribeAction: Q, tweet: S, featureSwitches: O, reporterCountry: D, reporterLanguage: P }))
                                : !M &&
                                  D &&
                                  (function (e) {
                                      return "DE" === e.toUpperCase();
                                  })(D) &&
                                  ((V.report = (function (e) {
                                      const t = e.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                          i = l.Z.getLocalizedEntityName({ tweet: e.tweet, articlesEnabled: t });
                                      return {
                                          Icon: Oi.default,
                                          link: (0, Ke.ju)("https://help.x.com/forms"),
                                          onClick: () => {
                                              e.scribeAction({ element: "report_tweet" });
                                          },
                                          testID: X,
                                          text: e.promotedContent ? Bi.reportAd : Bi.reportTweet({ entity: i }),
                                      };
                                  })({ promotedContent: k, scribeAction: Q, tweet: S, featureSwitches: O })),
                                  O.isTrue("netzdg_in_loggedout_posts_enabled") && (V.reportNetzDG = Wi.t({ tweet: S })));
                            const ee = O.getStringValue("dsa_report_illegal_content_url");
                            return (
                                !Y &&
                                    O.isTrue("dsa_report_flow_enabled") &&
                                    ee &&
                                    (V.reportEUIllegalContentDSA = (function (e) {
                                        const t = (0, Ni.MS)(e.reportUrl),
                                            { origin: i } = $i.ZP.get(),
                                            { id_str: n, permalink: o, user: s } = e.tweet,
                                            r = e.promotedContent ? "ad" : "post";
                                        return (
                                            t.searchParams.set("content_id", o ? `${i}${o}` : n),
                                            t.searchParams.set("content_type", r),
                                            s?.screen_name && t.searchParams.set("content_author", `@${s?.screen_name}`),
                                            {
                                                Icon: Oi.default,
                                                link: t.href,
                                                onClick: () => {
                                                    e.scribeAction({ element: `report_eu_illegal_content_${r}` });
                                                },
                                                text: Ni.yh,
                                                testID: oe,
                                            }
                                        );
                                    })({ tweet: S, promotedContent: k, scribeAction: Q, reportUrl: ee })),
                                t &&
                                    y.location.pathname.match(Dn) &&
                                    (V.downloadVideo = (({ downloadVideoLink: e, scribeAction: t }) => ({
                                        text: Se,
                                        onClick: () => {
                                            t({ element: "download-video" });
                                        },
                                        link: e,
                                        Icon: xe.default,
                                        testID: te,
                                    }))({ downloadVideoLink: t, scribeAction: Q })),
                                Hn.forEach((e) => {
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
                                Rn.forEach((o) => {
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
                                n({ userId: r.user.id_str, feedbackKeys: ["UnfollowEntity"] }), e({ action: { label: Ln.unblock, onAction: this._handleUnblock }, text: Ln.blockedSuccess });
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
                        ? o.createElement(c.ZP, { icon: o.createElement(p.default, { style: { height: "18px" } }), renderMenu: (e) => o.createElement(d.Z, { items: this._getPrerollActionItems(), onCloseRequested: e, shouldCloseOnClick: !0 }), size: "smallCompact", style: Un.prerollDismissButton, type: "onMediaDominantColorFilled" })
                        : h
                          ? o.createElement(s.Z, { style: Un.dismissButton }, o.createElement(y.Z, { onClick: this._handleImmediateDismissClick }))
                          : o.createElement(
                                s.Z,
                                { style: Un.overflowMenu },
                                l ? o.createElement(B, null) : null,
                                o.createElement(b.Z, { controlled: !0, disallowedReplyControls: [], isActiveCreator: e, midConversationTweet: a, onChange: this._handleOnChangeConversationControls, setDisallowedReplyControls: () => {}, value: m }, ({ openPopover: e }) => o.createElement(u.Z, (0, n.Z)({}, r, { isDisabled: t, onClick: this._onMenuClick, renderActionMenu: this._renderCurationActionMenu(e), testID: $.Z.caret }))),
                                l ? o.createElement(B, null) : null,
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
                    if ((u.id_str !== s && h && (this._shouldDisable(t, N.d.HideCommunityTweet) || (e.hideTweet = ((e, t) => ({ text: pt, Icon: mt.default, link: { pathname: `/i/report/${_t.C2.HideCommunityTweet}/${e}`, state: { scribeNamespace: t } } }))(n, { ...r, element: "hide_tweet" })), this._shouldDisable(t, N.d.RemoveFromCommunity) || (e.removeCommunityMember = ((e, t, i) => ({ text: Di, Icon: Si.default, link: { pathname: `/i/report/${_t.C2.RemoveCommunityMember}/${e.id_str}?community_id=${t}`, state: { scribeNamespace: i } } }))(u, i, { ...r, element: "remove_community_member" }))), this._shouldDisable(t, N.d.SearchUsersPost) || (e.searchUsersPost = ((e, t, i) => ({ text: qi({ screenName: e.screen_name }), Icon: ji.default, link: { pathname: `/i/communities/${t}/search/?q=(from:${e.screen_name})`, state: { scribeNamespace: i } } }))(u, i, { ...r, element: "search_users_post" })), I.X7.includes(d?.actions.pin_action_result.__typename) && !this._shouldDisable(t, N.d.PinCommunityTweet))) {
                        const t = "CommunityTweetPinActionReplace" === a?.actions?.pin_action_result?.__typename;
                        e.pinCommunityTweet = ((e, t, i) => ({ text: Ai, Icon: Lt.default, onClick() {}, confirmation: { render: (n, s) => o.createElement(vi, { communityId: t, isReplacing: i, onCancel: s, onConfirm: n, tweetId: e }) } }))(n, i, t);
                    }
                    return I.Gd.includes(d?.actions.unpin_action_result.__typename) && !this._shouldDisable(t, N.d.UnpinCommunityTweet) && (e.unpinCommunityTweet = ((e, t) => ({ text: cn, Icon: ln.default, onClick() {}, confirmation: { render: (i, n) => o.createElement(dn, { communityId: t, onCancel: n, onConfirm: i, tweetId: e }) } }))(n, i)), e;
                }
                _shouldIncludeTweetAppealOption() {
                    const { forwardPivotDisplayType: e, isNsfwUser: t, tweet: i, userCountry: n, userLanguage: o } = this.props,
                        { featureSwitches: s, viewerUserId: r } = this.context;
                    return (0, S.rT)({ viewerUserId: r, featureSwitches: s, forwardPivotDisplayType: e, tweet: i, userCountry: n, userLanguage: o }) || (0, S.V4)({ viewerUserId: r, featureSwitches: s, isNsfwUser: t, tweet: i, userCountry: n, userLanguage: o });
                }
            }
            (Pn.defaultProps = { withRemoveFromBookmarks: !1 }), (Pn.contextType = U.rC);
            const Un = h.default.create((e) => ({ overflowMenu: { display: "flex", flexDirection: "row", alignItems: "center" }, dismissButton: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, prerollDismissButton: { width: "2rem", height: "1rem", backgroundColor: "rgba(0,0,0,.5)", borderRadius: "4px" } })),
                Zn = (0, D.ZP)(Sn(Pn)),
                Ln = { unblock: _().e133be4e, blockedSuccess: _().a9fd20be },
                Hn = ["searchUsersPost", "hideTweet", "removeCommunityMember", "delete", "edit", "appealTweetWarning", "pinOrUnpin", "highlightOrUndo", "promotedTweetDismiss", "adInfo", "removeTag", "feedbackOptions", "followOrUnfollow", "subscribe", "addOrRemoveFromList", "muteOrUnmute", "muteOrUnmuteConversation", "leaveConversation", "changeConversationControls", "blockOrUnblock", "viewTweetEngagements", "downloadVideo", "hideReply", "unhideReply", "embed", "report", "reportNetzDG", "reportEUIllegalContentDSA", "analytics", "relatedPosts", "viewHiddenReplies", "birdwatch", "birdwatchRequest", "pinCommunityTweet", "unpinCommunityTweet"],
                Rn = ["feedbackOptions", "followOrUnfollow", "muteOrUnmute", "blockOrUnblock", "report", "reportEUIllegalContentDSA"];
            const On = Object.freeze({ all: "change_conversation_control_to_everyone", community: "change_conversation_control_to_community", by_invitation: "change_conversation_control_to_mentioned", followers: "change_conversation_control_to_followers", subscribers: "change_conversation_control_to_subscribers", community_members: "community_members", community_hidden_tweet: "community_hidden_tweet", super_followers_exclusive: "super_followers_exclusive", community_tweet_member_removed: "community_tweet_member_removed", trusted_friends_tweet: "trusted_friends_tweet", verified: "change_conversation_control_to_verified", premium: "change_conversation_control_to_premium" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-b7da5e41.ec5fa1da.js.map
