"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TweetCurationActionMenu-e019dbda"],
    {
        301410: (e, t, i) => {
            i.d(t, { i: () => m.ZP, z: () => f });
            var n = i(202784),
                o = i(928123),
                r = i.n(o),
                s = i(72845),
                a = i.n(s),
                l = i(57074),
                c = i.n(l),
                d = i(516951),
                u = i(88656),
                h = i(71620),
                p = i(163889),
                m = i(312771);
            const b = ({ render: e }) => e({ fetchStatus: m.ZP.LOADING, data: null, error: null, retry: d.Z });
            class _ extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, p.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const w = ({ query: e, queryRef: t, render: i }) => {
                    const n = r()(e, t);
                    return i({ fetchStatus: m.ZP.LOADED, data: n, error: null, retry: d.Z });
                },
                f = (e, t) =>
                    function ({ fetchPolicy: i = "store-or-network", render: o, variables: r }) {
                        const [s, l] = a()(e),
                            d = (0, h.n7)(t.errorConfig.context),
                            u = c()(r),
                            p = n.useCallback(() => {
                                l(u, { fetchPolicy: "network-only" });
                            }, [l, u]);
                        return (
                            n.useLayoutEffect(() => {
                                l(u, { fetchPolicy: i });
                            }, [i, l, u]),
                            s
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(b, { render: o }) },
                                      n.createElement(_, { errorHandler: d(t.errorConfig.options || {}), key: s.fetchKey, retry: p }, (t, i) => (t ? o({ fetchStatus: m.ZP.FAILED, error: t, data: null, retry: i }) : n.createElement(w, { query: e, queryRef: s, render: o }))),
                                  )
                                : null
                        );
                    };
        },
        713842: (e, t, i) => {
            i.r(t), i.d(t, { default: () => Bn });
            var n = i(807896),
                o = (i(136728), i(202784)),
                r = i(325686),
                s = i(305845),
                a = i(966582),
                l = i(782261),
                c = i(154003),
                d = i(811176),
                u = i(247056),
                h = i(392237),
                p = i(674132),
                m = i.n(p),
                b = i(149170),
                _ = i(516951),
                w = i(683814),
                f = i(817648),
                g = i(459660),
                A = i(774426),
                C = i(182873),
                y = i(727828),
                S = i(376293),
                v = i(712816),
                T = i(142156),
                D = i(879596),
                E = i(870358),
                k = i(942893),
                I = i(214647),
                x = i(500002),
                P = i(175856),
                U = i(443781),
                Z = i(834324),
                B = i(73664),
                L = i(668214);
            const H = (e) => (0, P.t5)(e, P.FX),
                R = (0, L.Z)()
                    .propsFromState(() => ({ shouldShowConversationControlsTip: H }))
                    .propsFromActions(() => ({ addFlag: P.pj })),
                O = m().bae0cbc0,
                F = h.default.create((e) => ({ inlineCallout: { position: "absolute", end: e.spaces.space32, marginTop: e.spaces.space2, zIndex: 1 }, textStyle: { whiteSpace: "nowrap" } })),
                M = R(({ addFlag: e, shouldShowConversationControlsTip: t }) => {
                    const i = o.useRef(),
                        n = (0, B.R)(i),
                        s = o.useRef(!1),
                        a = t;
                    return (
                        o.useEffect(() => {
                            n &&
                                ((s.current = !0),
                                setTimeout(() => {
                                    e(P.FX);
                                }, 5e3));
                        }, [n, e]),
                        o.useEffect(
                            () => () => {
                                s.current && e(P.FX);
                            },
                            [e],
                        ),
                        o.createElement(r.Z, { ref: i, style: F.inlineCallout }, n && a ? o.createElement(Z.Z, { text: O, textStyle: F.textStyle, withRightArrow: !0 }) : null)
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
                Q = "editWithPremium",
                Y = "whyThisAd",
                J = "highlight",
                ee = "highlightUpsell",
                te = "subscribe",
                ie = "highlighOnPin",
                ne = "tweetEngagements",
                oe = "reportEUIllegalContentDSA",
                re = "editArticle",
                se = ({ featureSwitches: e, promotedContent: t, scribeAction: i }) => {
                    if (!t || !t.impression_id) return;
                    const { impression_id: n } = t,
                        o = e.isTrue("responsive_web_remove_qp_ad_label_enabled");
                    return {
                        text: ((e) => (o && a.Z.isQuickPromote(e) ? m().b3b642fc : m().fb4ee11c))(t),
                        Icon: j.default,
                        link: { pathname: `/i/about-this-ad/${n}` },
                        onClick: () => {
                            i && i({ element: "whythisad" });
                        },
                        testID: Y,
                    };
                };
            var ae = i(53674);
            const le = m().ad50e7d9;
            var ce = i(625271);
            const de = m().ef1042f8,
                ue = (e, { scribeAction: t, tweetId: i }) => ({
                    text: de,
                    onClick: () => {
                        t({ element: "contribute_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/contribute/${i}` },
                    Icon: ce.default,
                });
            var he = i(730873);
            const pe = m().h3edf7a6,
                me = (e, { scribeAction: t, tweetId: i }) => ({
                    text: pe,
                    onClick: () => {
                        t({ element: "noterequest_to_birdwatch" });
                    },
                    link: { pathname: `/i/communitynotes/noterequest/${i}` },
                    Icon: he.default,
                });
            var be = i(194661);
            const _e = m().bae0cbc0,
                we = m().bf8d98f4,
                fe = m().e69ada9e;
            var ge = i(607127);
            const Ae = m().d96cf7ce,
                Ce = m().ae04c4dd,
                ye = m().d9442996,
                Se = m().dad785a7,
                ve = m().jda253ab,
                Te = m().j49c2f85,
                De = m().f9fa0390,
                Ee = h.default.create((e) => ({ additionalInfo: { marginTop: e.spaces.space8 } }));
            var ke = i(72591);
            const Ie = m().d9a2bd78;
            var xe = i(376021),
                Pe = i(689985);
            const Ue = m().dad450ec,
                Ze = m().g9677c6e,
                Be = m().b57bfe70,
                Le = m().bd3da7be,
                He = m().j26481e6;
            var Re = i(310452),
                Oe = i(354149),
                Fe = i(507824);
            const Me = m().cb817dae,
                Ne = (e) => parseInt(e, 10);
            function $e(e) {
                switch (e.entityType) {
                    case "cashtag":
                    case "emoji":
                    case "hashtag":
                    case "mention":
                    case "text":
                        return `${e.prefix || ""}${(0, Oe.Tz)(e.text)}`;
                    case "media":
                    case "url":
                        return e.expandedUrl;
                    default:
                        return "";
                }
            }
            const We = m().abd845fe;
            var je = i(498720);
            const qe = m().fd391b9f;
            var ze = i(911373),
                Ve = i(757953);
            const Ge = m().c66afdc3,
                Xe = m().hbe4feb5,
                Ke = m().e1618e49;
            var Qe = i(688715),
                Ye = i(529356),
                Je = i(190286),
                et = i(520913),
                tt = i(648539);
            const it = m().ge5067bc,
                nt = m().j136c720,
                ot = m().d66f0338,
                rt = `${m().cfc8cb50}\n\n${m().if8dc5f0}`,
                st = (0, Qe.ju)("https://help.x.com/using-twitter/mentions-and-replies?lang=browser#hidden-reply"),
                at = m().b2615c6d,
                lt = m().i62a03aa,
                ct = m().cfd2f35e,
                dt = m().a6450e84,
                ut = m().g353ad73,
                ht = m().ad00a739,
                pt = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: i, hideReply: n, isSoftBlockEnabled: r, onBlock: s, onTweetDismiss: a, scribeAction: l, shouldShowHideReplyTip: c, tweet: d }) => {
                    const u = () => {
                        l({ element: "moderated_replies_prompt", action: "impression" });
                    };
                    return {
                        confirmation: c
                            ? { render: (e, t) => (({ onConfirm: e, onCancel: t, onHideReplyImpression: i = () => {} }) => o.createElement(Ye.Z, { actionLabel: it, graphic: et.default, headline: ot, onAction: e, onClose: t, onImpression: i, onTertiaryAction: t, subtext: rt, supportUrl: st, tertiaryActionLabel: ct }))({ onConfirm: e, onCancel: t, onHideReplyImpression: u }) }
                            : {
                                  render: (e, t) => {
                                      const {
                                          user: { screen_name: i },
                                      } = d;
                                      return o.createElement(Je.Z, {
                                          cancelButtonLabel: lt,
                                          confirmButtonLabel: dt,
                                          confirmButtonType: "destructiveFilled",
                                          headline: at({ screenName: i }),
                                          onCancel: e,
                                          onConfirm: () => {
                                              s(), e();
                                          },
                                          text: r ? ht({ screenName: i }) : ut({ screenName: i }),
                                      });
                                  },
                              },
                        text: it,
                        onClick: () => {
                            e(P.f8),
                                n(d.id_str, { conversation_id: d.conversation_id_str }).then(
                                    (e) => {
                                        a && a(), t({ text: nt });
                                    },
                                    i({ showToast: !0 }),
                                ),
                                l({ element: "moderate_reply" });
                        },
                        Icon: tt.default,
                    };
                };
            var mt = i(161335),
                bt = i(395067);
            const _t = m().f9f27fa2;
            var wt = i(487606),
                ft = i(545334),
                gt = i(350968),
                At = i(337653),
                Ct = (i(585488), i(138099)),
                yt = i(750410),
                St = i(167630),
                vt = i(312771),
                Tt = i(301410);
            const Dt = m().cfd2f35e,
                Et = At.Z,
                kt = (0, Tt.z)(Et, { errorConfig: { context: "TWITTER_HIGHLIGHT_TWEET_CONFIRMATION_CONTEXT" } }),
                It = o.memo(({ onCancel: e, onConfirm: t, onHighlight: i, onUndohighlight: n, tweetId: r }) => {
                    const s = o.useMemo(() => ({ tweet_id: r }), [r]),
                        a = o.useCallback(
                            (e) => () => {
                                e(), t();
                            },
                            [t],
                        ),
                        l = o.useCallback(
                            ({ data: t, fetchStatus: r, retry: s }) => {
                                if (r === vt.ZP.LOADED) {
                                    const r = !!t?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted,
                                        { confirmLabel: s, onAction: l, subtext: c, title: d } = (0, gt.rg)(r, i, n);
                                    return o.createElement(Je.Z, { cancelButtonLabel: Dt, confirmButtonLabel: s, confirmButtonType: "primary", headline: d, onCancel: e, onConfirm: a(l), text: c });
                                }
                                return o.createElement(Ct.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: xt.loadingSheet, type: "center", withMask: !0 }, r === vt.ZP.FAILED ? o.createElement(yt.Z, { onRequestRetry: s }) : o.createElement(St.Z, null));
                            },
                            [i, n, a, e],
                        );
                    return o.createElement(kt, { fetchPolicy: "network-only", render: l, variables: s });
                }),
                xt = h.default.create((e) => ({ loadingSheet: { paddingVertical: e.spaces.space20 } })),
                Pt = o.memo(It),
                Ut = m().ce87916a,
                Zt = m().ef4602ec,
                Bt = m().h8a3525e;
            var Lt = i(833057),
                Ht = i(40610);
            const Rt = m().i419d136,
                Ot = m().c1b9714a,
                Ft = m().c5d23126,
                Mt = m().fe4d099a,
                Nt = m().cfd2f35e,
                $t = m().e8d4c1cc,
                Wt = { label: m().b68c3784, link: { pathname: "/i/verified-choose", state: { referring_page: "get_verified_highlight_on_pin" } } },
                jt = o.memo(({ isBlueUpsellEligible: e, onCancel: t, onConfirm: i, onHighlight: n, onPinTweet: r, onUndohighlight: s, tweetId: a }) => {
                    const [l, c] = o.useState(!1),
                        d = o.useMemo(() => ({ tweet_id: a }), [a]),
                        u = o.useMemo(() => (l ? o.createElement(Ht.Z.Primary, { action: Wt, headline: $t, onAction: i, style: qt.callout, withIcon: !1 }) : null), [l, i]),
                        h = o.useCallback(() => {
                            e ? c(!0) : (n(), i());
                        }, [c, n, i, e]),
                        p = o.useCallback(() => {
                            r(), i();
                        }, [r, i]),
                        m = o.useCallback(
                            ({ data: e, fetchStatus: i, retry: n }) => {
                                if (i === vt.ZP.LOADED) {
                                    return !!e?.tweet_result_by_rest_id?.result?.highlights_info?.highlighted ? o.createElement(Je.Z, { confirmButtonLabel: Ft, confirmButtonType: "primary", headline: Rt, onCancel: t, onConfirm: p, text: Ot }) : o.createElement(Ye.Z, { actionLabel: Mt, footer: u, graphicDisplayMode: "none", headline: "Highlight your best content instead", onAction: h, onClose: t, onSecondaryAction: p, onTertiaryAction: t, secondaryActionLabel: Ft, subtext: "With Highlights, you can curate all your best posts on your profile.", tertiaryActionLabel: Nt, withCloseButton: !0 });
                                }
                                return o.createElement(Ct.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, role: "alertdialog", style: qt.loadingSheet, type: "center", withMask: !0 }, i === vt.ZP.FAILED ? o.createElement(yt.Z, { onRequestRetry: n }) : o.createElement(St.Z, null));
                            },
                            [h, p, t, u],
                        );
                    return o.createElement(kt, { fetchPolicy: "network-only", render: m, variables: d });
                }),
                qt = h.default.create((e) => ({ loadingSheet: { backgroundColor: "transparent" }, callout: { fontSize: e.fontSizes.body, color: e.colors.text, fontWeight: e.fontWeights.medium } })),
                zt = o.memo(jt),
                Vt = m().ha35a1d2,
                Gt = m().d04f95c0,
                Xt = m().ef4602ec;
            const Kt = function ({ addToast: e, createLocalApiErrorHandler: t, highlight: i, isBlueUpsellEligible: n, pin: r, scribeAction: s, tweetId: a, undoHighlight: l }) {
                const c = () => {
                        l(a).then((t) => {
                            e(t?.tweet_highlights_delete?.success ? { text: gt.sp, withClearButton: !0 } : { text: Xt, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            s({ element: "undoHighlight" });
                    },
                    d = () => {
                        i(a).then((t) => {
                            e(t?.tweet_highlights_put?.success ? { action: { label: ft.d, onAction: c }, text: gt.I9, withClearButton: !0 } : { text: Xt, withClearButton: !0, withAutoDismiss: !0 });
                        }),
                            s({ element: "highlight" });
                    },
                    u = () => {
                        r(a).then(
                            () => {
                                e({ text: Gt });
                            },
                            t({ showToast: !0 }),
                        ),
                            s({ element: "pin" });
                    };
                return { confirmation: { render: (e, t) => o.createElement(zt, { isBlueUpsellEligible: n, onCancel: t, onConfirm: e, onHighlight: d, onPinTweet: u, onUndohighlight: c, tweetId: a }) }, testID: ie, text: Vt, Icon: Lt.default, onClick() {} };
            };
            var Qt = i(883437),
                Yt = i(523561);
            const Jt = (0, Yt.Z)({
                    loader: () =>
                        Promise.all([
                            i.e("icons.6"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-00a077b2"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                            i.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                            i.e("ondemand.LeaveThisConversation"),
                        ]).then(i.bind(i, 265008)),
                }),
                ei = m().bb16cc76,
                ti = m().de21174c,
                ii = (e, t) => o.createElement(Jt, { onCancel: t, onConfirm: e });
            var ni = i(383494),
                oi = i(232130),
                ri = i(40904),
                si = i(391366);
            const ai = m().e2d6c17e,
                li = m().cd1942f4,
                ci = m().bbd8bed6,
                di = m().c13af432,
                ui = m().gf5e9ea6,
                hi = m().df744bda,
                pi = m().j9552760,
                mi = m().cfd2f35e,
                bi = m().d751694c,
                _i = (0, Qe.ju)("https://support.x.com/articles/20175032"),
                wi = ({ addFlag: e, addToast: t, createLocalApiErrorHandler: i, muteTweet: n, scribeAction: r, shouldShowMuteEducationTip: s, tweet: a, unmuteTweet: l }) => {
                    const c = () => {
                            e(P.EM);
                        },
                        d = () => {
                            l(a.id_str).then(
                                () => {
                                    t({ text: di });
                                },
                                (e) => {
                                    i({ showToast: !0 })(e), r({ element: "tweet", action: "unmute_conversation_error" });
                                },
                            ),
                                r({ element: "tweet", action: "unmute_conversation" });
                        },
                        u = {
                            text: ai,
                            onClick: () => {
                                n(a.id_str).then(
                                    () => {
                                        t({ action: { label: ui, onAction: d }, text: ci });
                                    },
                                    (e) => {
                                        i({ showToast: !0 })(e), r({ element: "tweet", action: "mute_conversation_error" });
                                    },
                                ),
                                    r({ element: "tweet", action: "mute_conversation" });
                            },
                            confirmation: s ? { render: (e, t) => o.createElement(Ye.Z, { actionLabel: hi, graphic: oi.default, graphicDisplayMode: "illustration", headline: pi, onAction: e, onClose: t, onImpression: c, onTertiaryAction: t, subtext: bi, supportUrl: _i, tertiaryActionLabel: mi }) } : void 0,
                            Icon: ri.default,
                        },
                        h = { text: li, onClick: d, Icon: si.default };
                    return a.conversation_muted ? h : u;
                },
                fi = m().ha35a1d2,
                gi = m().i419d136,
                Ai = m().c1b9714a,
                Ci = m().c5d23126,
                yi = m().d04f95c0,
                Si = m().a50c911e,
                vi = m().d1c1e2c2,
                Ti = (0, Yt.Z)({ loader: () => i.e("ondemand.CommunityTweetPinning").then(i.bind(i, 828856)) }),
                Di = m().f5cdcc2c,
                Ei = ({ hasPremiumPlus: e, history: t, onTweetDismiss: i, promotedDismissUpsellEnabled: n }) => ({
                    text: Di,
                    onClick: () => {
                        if ((i?.(), !e && n)) {
                            const e = { variant: "DismissAd" };
                            t.push("/i/verified-get-verified", e);
                        }
                    },
                    Icon: j.default,
                }),
                ki = m().hea3f8ac,
                Ii = m().a09331e0;
            var xi = i(530813);
            const Pi = m().c2e276e4;
            var Ui = i(310700),
                Zi = i(712881);
            const Bi = m().e68b09b4,
                Li = m().a95f04ba,
                Hi = m().jfc76958;
            var Ri = i(85375),
                Oi = i(415506),
                Fi = i(711223);
            function Mi(e) {
                const { featureSwitches: t, isAppealTweetWarning: i = !1, promotedContent: n, tweet: o } = e,
                    r = t.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                    s = t.isTrue("responsive_web_remove_qp_ad_label_enabled"),
                    c = l.Z.getLocalizedEntityName({ tweet: o, articlesEnabled: r });
                let d = { element: "report_tweet" },
                    u = "/i/report/status",
                    h = bt.C2.Tweet,
                    p = Oi.default,
                    m = s && a.Z.isQuickPromote(n) ? Ni.reportPost : a.Z.shouldShowAdDisclosure(n) ? Ni.reportAd : Ni.reportTweet({ entity: c });
                i && ((d = { element: "appeal_tweet_warning" }), (u = "/i/report/appeal_tweet_warning"), (h = bt.C2.AppealTweetWarning), (p = Fi.default), (m = Ni.appealTweetWarning));
                return {
                    Icon: p,
                    onClick: () => {
                        const t = e.analytics.contextualScribeData,
                            i = o?.extended_entities?.media?.length || 0,
                            r = o?.article?.media_entities?.length || 0,
                            s = (o?.entities?.urls?.length || 0) > 0 || i > 0 || r > 0 || void 0 !== o.card,
                            a = t.items && t.items[0] && t.items[0].conversation_details?.conversation_section;
                        e.scribeAction(d);
                        if (!(o.community_id_str || o.card?.name === Ri.sj.BROADCAST || o.card?.name === Ri.sj.PERISCOPE_BROADCAST || (n && !e.featureSwitches.isTrue("responsive_web_ocf_reportflow_promoted_enabled"))) && (0, bt.Yw)(e.featureSwitches, h)) {
                            const t = (0, bt.j_)({ clientReferer: window.location.pathname, conversationSection: a, isMedia: s, isPromoted: void 0 !== n, reportType: h, reportedTweet: o, reportedUser: o.user.id_str, scribeNamespace: e.analytics.contextualScribeNamespace });
                            e.history.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(t) } } });
                        } else e.history.push({ pathname: `${u}/${o.id_str}`, state: { clientReferer: window.location.pathname, conversationSection: a, isMedia: s, promotedContent: n, scribeNamespace: e.analytics.contextualScribeNamespace } });
                    },
                    testID: X,
                    text: m,
                };
            }
            const Ni = { appealTweetWarning: m().f1824804, reportTweet: m().j4e43d8b, reportAd: m().e3fd237e, reportPost: m().ebb7662a };
            var $i = i(946099),
                Wi = i(782826);
            var ji = i(928875),
                qi = i(297938);
            const zi = m().d7513755;
            var Vi = i(646677);
            const Gi = m().ab0decc0,
                Xi = m().d7dbb71b;
            var Ki = i(224823),
                Qi = i(323683);
            const Yi = m().ja66a2b5,
                Ji = m().c2423b7b;
            var en = i(659306);
            const tn = m().i31dfa4c,
                nn = m().j8e56ba2,
                on = m().ic030338,
                rn = m().gfcea3f4,
                sn = m().eb2d59f4,
                an = m().j44ec610,
                ln = m().a2dd7414;
            var cn = i(963879);
            const dn = m().cac6a24a,
                un = (0, Yt.Z)({ loader: () => i.e("ondemand.CommunityTweetPinning").then(i.bind(i, 760844)) }),
                hn = m().f9478972,
                pn = m().c5491b5d;
            var mn = i(71620),
                bn = i(143322),
                _n = i(491963),
                wn = i(80890),
                fn = i(629196),
                gn = i(390387),
                An = i(601576),
                Cn = i(836255),
                yn = i(360142),
                Sn = i(919022);
            const vn = (e, t) => (0, P.t5)(e, P.EM),
                Tn = (e, t) => (0, P.t5)(e, P.f8),
                Dn = (e) => (0, P.t5)(e, P.FX),
                En = (e, t) => (0, _n.n9)(e, t.tweet),
                kn = (e, t) => (0, _n.z0)(e, t.tweet),
                In =
                    (e) =>
                    (t, i, { featureSwitches: n }) =>
                        Promise.all([t(Cn.Z.delete(e)), t((0, yn.ZP)({ focalTweetId: e }).deleteTimeline())]),
                xn = (0, L.Z)()
                    .propsFromState(() => ({ userCountry: gn.GG, userLanguage: gn.VT, shouldShowMuteEducationTip: vn, shouldShowHideReplyTip: Tn, shouldShowConversationControlsTip: Dn, disableRemoveFromCommunity: En, community: kn }))
                    .propsFromActions(() => ({ addFlag: P.pj, addToast: An.fz, block: Sn.ZP.block, changeConversationControls: Cn.Z.changeConversationControls, createLocalApiErrorHandler: (0, mn.zr)("TWEET_CURATION_ACTION_SHEET_CONTAINER"), deleteTweet: In, dismissUserFromConversation: yn.f0, follow: Sn.ZP.follow, hideReply: Cn.Z.hideReply, unmentionUserFromConversation: Cn.Z.unmentionUserFromConversation, mute: fn.r, muteTweet: Cn.Z.mute, pin: wn.Yd, removeConversationControls: Cn.Z.removeConversationControls, removeTag: Cn.Z.removeTag, unblock: Sn.ZP.unblock, unfollow: Sn.ZP.unfollow, unhideReply: Cn.Z.unhideReply, unmute: Sn.ZP.unmute, unmuteTweet: Cn.Z.unmute, unpin: wn.oc, highlight: Cn.Z.highlight, undoHighlight: Cn.Z.undoHighlight, unpublishArticleEntity: bn.ZP.unpublish }))
                    .withAnalytics(),
                Pn = /\/mediaViewer$/;
            class Un extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showModerationBlockConfirmation: !1, showEditWithPremiumUpsell: !1 }),
                        (this._hasPremiumPlus = this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate() || this.context.userClaims.hasSubscription("premium_plus")),
                        (this._shouldDisable = N.$y.bind(null, this.context.featureSwitches)),
                        (this._birdwatchAction = ue.bind(null, this.context.featureSwitches)),
                        (this._birdwatchRequestAction = me.bind(null, this.context.featureSwitches)),
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
                        (this._renderEditWithPremiumUpsell = () => (this.state.showEditWithPremiumUpsell ? o.createElement(y.Z, { onAction: this._closeEditWithPremiumUpsell, onClose: this._closeEditWithPremiumUpsell, variant: "EditPost" }) : null)),
                        (this._handleOnChangeConversationControls = (e) => {
                            const { addToast: t, analytics: i, changeConversationControls: n, createLocalApiErrorHandler: o, removeConversationControls: r, tweet: s } = this.props,
                                a = (0, f.Z)(s, e);
                            e === g.k.all
                                ? r &&
                                  r(s.id_str).then(() => {
                                      t({ text: a }), i.scribe({ element: On.all, action: "click", data: { items: [k.Z.getChangeConversationControlsItem(s, e)] } });
                                  }, o(T.w))
                                : n &&
                                  n(s.id_str, { policy: e, screenName: s.user?.screen_name }).then(() => {
                                      t({ text: a }), i.scribe({ element: On[e], action: "click", data: { items: [k.Z.getChangeConversationControlsItem(s, e)] } });
                                  }, o(T.w));
                        }),
                        (this._renderCurationActionMenu = (e) => (t) =>
                            o.createElement(s.l.Consumer, null, ({ downloadLink: i }) => {
                                const [n] = this._getActionItems(e, i);
                                return o.createElement(A.default, { actionItems: n, onClose: t });
                            })),
                        (this._getPrerollActionItems = () => {
                            const { analytics: e, history: t, onTweetDismiss: i, promotedContent: n, tweet: o, userCountry: r, userLanguage: s } = this.props,
                                { featureSwitches: l } = this.context,
                                c = this._scribeAction,
                                d = {},
                                u = [],
                                h = a.Z.isPromoted(n);
                            return (
                                (d.promotedTweetDismiss = Ei({ onTweetDismiss: () => i?.(!1), hasPremiumPlus: this._hasPremiumPlus, promotedDismissUpsellEnabled: l.isTrue("subscriptions_hide_ad_upsell_enabled"), history: t })),
                                h && (d.adInfo = se({ featureSwitches: l, promotedContent: n, scribeAction: c })),
                                (d.report = Mi({ analytics: e, history: t, promotedContent: n, scribeAction: c, tweet: o, featureSwitches: l, reporterCountry: r, reporterLanguage: s })),
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
                            const { addToast: e, createLocalApiErrorHandler: t, dismissUserFromConversation: i, history: n, mute: o, promotedContent: r, tweet: s, unmute: a } = this.props,
                                { user: l } = s,
                                c = { addToast: e, createLocalApiErrorHandler: t, scribeAction: this._scribeAction },
                                d = this.context.featureSwitches.isTrue("subscriptions_mute_ad_upsell_enabled");
                            return (0, ni.Z)({ ...c, mute: o, unmute: a, user: l, dismissUserFromConversation: i, promotedContent: r, muteAdUpsellEnabled: d, history: n, hasPremiumPlus: this._hasPremiumPlus });
                        }),
                        (this._getHighlightOrUndoAction = () => {
                            const { addToast: e, highlight: t, tweet: i, undoHighlight: n } = this.props,
                                r = this._scribeAction,
                                { featureSwitches: s, userClaims: a } = this.context;
                            if (s.isTrue("highlights_tweets_action_enabled") && !this._shouldDisable(i, N.d.Highlight)) {
                                const l = a.isTrueAndEnabled("subscriptions_feature_highlights"),
                                    c = s.isTrue("subscriptions_sign_up_enabled") && s.isTrue("highlights_tweets_action_menu_upsell_enabled");
                                return l
                                    ? (({ addToast: e, highlight: t, scribeAction: i, tweetId: n, undoHighlight: r }) => {
                                          const s = () => {
                                                  r(n).then((t) => {
                                                      e(t?.tweet_highlights_delete?.success ? { text: gt.sp, withClearButton: !0 } : { text: Zt, withClearButton: !0, withAutoDismiss: !0 });
                                                  }),
                                                      i({ element: "undoHighlight" });
                                              },
                                              a = () => {
                                                  t(n).then((t) => {
                                                      e(t?.tweet_highlights_put?.success ? { action: { label: ft.d, onAction: s }, text: gt.I9, withClearButton: !0 } : { text: Zt, withClearButton: !0, withAutoDismiss: !0 });
                                                  }),
                                                      i({ element: "highlight" });
                                              };
                                          return { confirmation: { render: (e, t) => o.createElement(Pt, { onCancel: t, onConfirm: e, onHighlight: a, onUndohighlight: s, tweetId: n }) }, onClick() {}, Icon: wt.default, text: Ut, testID: J };
                                      })({ addToast: e, scribeAction: r, tweetId: i.id_str, undoHighlight: n, highlight: t })
                                    : c
                                      ? (({ scribeAction: e }) => ({
                                            text: Bt,
                                            onClick: () => {
                                                e({ element: "highlight-upsell" });
                                            },
                                            link: { pathname: "/i/verified-choose", state: { referring_page: "tweet_highlight_action_upsell" } },
                                            Icon: wt.default,
                                            testID: ee,
                                        }))({ scribeAction: r })
                                      : null;
                            }
                        }),
                        (this._getHighlightUpsellOnPinAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, highlight: i, pin: n, tweet: o, undoHighlight: r } = this.props,
                                s = this._scribeAction,
                                { featureSwitches: a, userClaims: l } = this.context,
                                c = a.isTrue("highlights_tweets_upsell_on_pin_action_enabled"),
                                d = a.isTrue("subscriptions_sign_up_enabled"),
                                u = a.isTrue("highlights_tweets_action_enabled") && !this._shouldDisable(o, N.d.Highlight),
                                h = l.isTrueAndEnabled("subscriptions_feature_highlights");
                            return u && c && d && !h
                                ? Kt({ addToast: e, scribeAction: s, tweetId: o.id_str, undoHighlight: r, highlight: i, pin: n, createLocalApiErrorHandler: t, isBlueUpsellEligible: d && !h })
                                : (({ addToast: e, createLocalApiErrorHandler: t, pin: i, scribeAction: n, tweetId: o }) => ({
                                      confirmation: { text: Ai, headline: gi, label: Ci },
                                      testID: V,
                                      text: fi,
                                      onClick: () => {
                                          i(o).then(
                                              ({ addedToHighlights: t }) => {
                                                  e({ text: t ? Si : yi });
                                              },
                                              t({ showToast: !0 }),
                                          ),
                                              n({ element: "pin" });
                                      },
                                      Icon: Lt.default,
                                  }))({ addToast: e, scribeAction: s, pin: n, createLocalApiErrorHandler: t, tweetId: o.id_str });
                        }),
                        (this._getEditTweetAction = () => {
                            const { tweet: e } = this.props,
                                { featureSwitches: t, userClaims: i, viewerUserId: n } = this.context,
                                { user: o } = e,
                                r = this._scribeAction;
                            if (
                                (function (e, t) {
                                    let i = !0;
                                    if (e.edit_control?.editable_until_msecs) {
                                        const t = Ne(e.edit_control.editable_until_msecs);
                                        i = Date.now() > new Date(t);
                                    }
                                    const n = "0" === e.edit_control?.edits_remaining,
                                        o = !!e.edit_control?.is_edit_eligible,
                                        r = "Twitter for iPhone" !== e.source_name && "Twitter for iPad" !== e.source_name && "Twitter for Android" !== e.source_name,
                                        s = e.user.pinned_tweet_ids_str,
                                        a = Array.isArray(s) && s.some((t) => t === e.id_str);
                                    return t.isUserTweetAuthor && !i && !n && !e.isStaleEdit && o && r && !a;
                                })(e, { isUserTweetAuthor: o.id_str === n }) &&
                                !(0, N.$y)(t, e, N.d.EditTweet)
                            ) {
                                if (this._editTweetCompositionEnabledForUser())
                                    return (function (e) {
                                        const { featureSwitches: t, tweet: i } = e;
                                        let n = "";
                                        if (i.note_tweet || i.full_text) {
                                            const e = { featureSwitches: t, forceEnabled: !0 },
                                                o = Fe.Bq(i, e);
                                            n = Re.ZP.tweetTextParts(o.text, o.display_text_range, o.entities).map($e).join("");
                                        }
                                        return {
                                            testID: K,
                                            onClick: () => {
                                                e.scribeAction({ element: "edit" });
                                            },
                                            text: Me,
                                            Icon: xe.default,
                                            link: { pathname: "/compose/post", state: { previousTweetId: i.id_str, defaultText: n, quotedStatusId: i.quoted_status?.id_str, hideUnsentTweetsButton: !0, editableUntil: i.edit_control?.editable_until_msecs, isLastEdit: "1" === i.edit_control?.edits_remaining } },
                                        };
                                    })({ scribeAction: r, tweet: e, featureSwitches: t });
                                if (!this._editTweetCompositionEnabledForUser() && this._editTweetCompositionEligible && !i.isAnyPremiumSubscriber() && !i.hasSubscription("twitter_blue_legacy") && t.isTrue("subscriptions_sign_up_enabled") && t.isTrue("responsive_web_edit_tweet_upsell_enabled"))
                                    return (({ onClick: e, scribeAction: t, tweet: i }) => ({
                                        onClick: () => {
                                            t({ element: "edit-upsell" }), e();
                                        },
                                        text: We,
                                        Icon: xe.default,
                                        testID: Q,
                                    }))({ tweet: e, scribeAction: r, onClick: this._openEditWithPremiumUpsell });
                            }
                            return null;
                        }),
                        (this._getEditArticleAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, history: i, tweet: n, unpublishArticleEntity: o } = this.props,
                                { featureSwitches: r, viewerUserId: s } = this.context,
                                { user: a } = n,
                                l = this._scribeAction,
                                c = a.id_str === s && !(0, N.$y)(r, n, N.d.EditTweet);
                            return n.article && c
                                ? (({ addToast: e, articleEnttiyId: t, createLocalApiErrorHandler: i, history: n, scribeAction: o, unpublishArticleEntity: r }) => ({
                                      confirmation: { text: Le, headline: Be, label: Ze },
                                      testID: re,
                                      text: Ue,
                                      onClick: () => {
                                          r(t).then(
                                              () => {
                                                  n.push({ pathname: (0, Pe.lU)(t) }), e({ text: He });
                                              },
                                              i({ showToast: !0 }),
                                          ),
                                              o({ element: "editArticle" });
                                      },
                                      Icon: xe.default,
                                  }))({ createLocalApiErrorHandler: t, scribeAction: l, addToast: e, unpublishArticleEntity: o, articleEnttiyId: n.article.rest_id, history: i })
                                : null;
                        }),
                        (this._getActionItems = (e, t) => {
                            const { deleteTweet: i, follow: n, hideReply: s, muteTweet: c, removeTag: d, unmentionUserFromConversation: u, unmuteTweet: h, unpin: p } = this.props,
                                { addFlag: m, addToast: b, analytics: _, createLocalApiErrorHandler: w, feedbackItems: f, forwardPivotDisplayType: g, forwardPivotLandingUrl: A, history: C, isPinned: y, onDeleteTweet: v, onTweetDismiss: T, promotedContent: D, shouldShowHideReplyTip: E, shouldShowMuteEducationTip: k, tweet: I, userCountry: x, userLanguage: P, withChangeConversationControls: U, withHideReply: Z, withMuteConversation: B, withUnhideReply: L, withViewHiddenReplies: H } = this.props,
                                { featureSwitches: R, userClaims: O, viewerUserId: F } = this.context,
                                { user: M } = I,
                                $ = [],
                                j = a.Z.isPromoted(D) && a.Z.shouldShowAdDisclosure(D),
                                V = {},
                                K = this._scribeAction,
                                Q = { addToast: b, createLocalApiErrorHandler: w, scribeAction: K },
                                Y = M.id_str === F;
                            Object.assign(V, this._getCommunityActions()),
                                j && (V.adInfo = se({ featureSwitches: R, promotedContent: D, scribeAction: K })),
                                Y &&
                                    !this._shouldDisable(I, N.d.ViewTweetActivity) &&
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
                                    })({ tweet: I, scribeAction: K, featureSwitches: R })),
                                R.isTrue("responsive_web_delete_tweet_stats_enabled") &&
                                    (V.viewTweetEngagements = (({ featureSwitches: e, scribeAction: t, tweet: i }) => {
                                        const n = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                            o = l.Z.getLocalizedEntityName({ tweet: i, articlesEnabled: n });
                                        return {
                                            text: pn({ entity: o }),
                                            Icon: ae.default,
                                            link: `${i.permalink}/quotes`,
                                            onClick: () => {
                                                t && t({ element: "tweet_engagements" });
                                            },
                                            testID: ne,
                                        };
                                    })({ tweet: I, scribeAction: K, featureSwitches: R })),
                                M.protected ||
                                    this._shouldDisable(I, N.d.Embed) ||
                                    I.isPreviewDisplay ||
                                    (V.embed = (({ featureSwitches: e, permalink: t, scribeAction: i, tweet: n }) => {
                                        const o = e.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                            r = l.Z.getLocalizedEntityName({ tweet: n, articlesEnabled: o });
                                        return {
                                            text: qe({ entity: r }),
                                            onClick: () => {
                                                const e = `https://publish.twitter.com/?url=https://twitter.com${t}`;
                                                window.open(e, "_blank"), i({ element: "embed_tweet" });
                                            },
                                            Icon: je.default,
                                        };
                                    })({ permalink: I.permalink, scribeAction: K, tweet: I, featureSwitches: R }));
                            const J = l.Z.isArticlePost(I) && R.isTrue("responsive_web_twitter_article_seed_tweet_enabled") && O.isTrueAndEnabled("subscriptions_feature_article_composer");
                            if (J) {
                                const e = this._getEditArticleAction();
                                e && (V.edit = e);
                            } else {
                                const e = this._getEditTweetAction();
                                e && (V.edit = e);
                            }
                            if (
                                (R.isTrue("responsive_web_show_similar_posts_action_enabled") &&
                                    "ShowSimilarPosts" === g &&
                                    A &&
                                    (V.relatedPosts = (({ isArticle: e, landingUrl: t, scribeAction: i }) => ({
                                        text: e ? Ii : ki,
                                        link: t,
                                        onClick: () => {
                                            i({ element: "similar_posts_action" });
                                        },
                                        Icon: wt.default,
                                    }))({ landingUrl: A.url, isArticle: J, scribeAction: K })),
                                H &&
                                    I.conversation_id_str === I.id_str &&
                                    !this._shouldDisable(I, N.d.ViewHiddenReplies) &&
                                    (V.viewHiddenReplies = (({ permalink: e, scribeAction: t }) => ({
                                        text: hn,
                                        link: `${e}/hidden`,
                                        onClick: () => {
                                            t({ element: "view_moderated_replies" });
                                        },
                                        Icon: tt.default,
                                    }))({ permalink: I.permalink, scribeAction: K })),
                                ((e, t) => {
                                    const i = t.extended_entities?.media && t.extended_entities.media[0] && t.extended_entities.media[0].features?.all?.tags;
                                    return !!i && (0, Zi.Z)(i, (t) => t.user_id === e);
                                })(F, I) &&
                                    (V.removeTag = (({ createLocalApiErrorHandler: e, removeTag: t, tweet: i, viewerUserId: n }) => ({
                                        confirmation: { label: Bi, headline: Li },
                                        text: Hi,
                                        onClick: () => {
                                            const o = i.extended_entities?.media?.map((e) => e.id_str).join(",");
                                            t(i.id_str, { status_id: i.id_str, media_ids: o, tagged_user_ids: n }).catch(e({ showToast: !0 }));
                                        },
                                        Icon: Ui.default,
                                    }))({ createLocalApiErrorHandler: w, viewerUserId: F, removeTag: d, tweet: I })),
                                ((e, t) => {
                                    if (!e) return !1;
                                    const i = t.entities?.user_mentions?.some((t) => t.id_str === e),
                                        n = t.in_reply_to_user_id_str === e,
                                        o = i || n,
                                        r = t.unmentioned_user_ids?.includes(e);
                                    return o && !r;
                                })(F, I) &&
                                    R.isTrue("dont_mention_me_enabled") &&
                                    (V.leaveConversation = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweet: n, unmentionUserFromConversation: o }) => ({
                                        confirmation: { render: ii },
                                        text: ei,
                                        onClick: () => {
                                            o(n.id_str).then(
                                                () => {
                                                    e({ text: ti });
                                                },
                                                t({ showToast: !0 }),
                                            ),
                                                i({ element: "leave_conversation" });
                                        },
                                        Icon: Qt.default,
                                    }))({ ...Q, unmentionUserFromConversation: u, tweet: I })),
                                F)
                            )
                                if (
                                    (M.blocking ||
                                        this._shouldDisable(I, N.d.ListsAddRemove, void 0, void 0, Y) ||
                                        (V.addOrRemoveFromList = (({ scribeAction: e, user: t }) =>
                                            (0, W.k)(t, () => {
                                                e({ element: "add_to_list" });
                                            }))({ user: M, scribeAction: K })),
                                    this._birdwatchNoteWritingEnabled && !I.isStaleEdit && (V.birdwatch = this._birdwatchAction({ scribeAction: K, tweetId: I.id_str })),
                                    this._birdwatchNoteRequestEnabled && !I.isStaleEdit && (V.birdwatchRequest = this._birdwatchRequestAction({ scribeAction: K, tweetId: I.id_str })),
                                    Y)
                                ) {
                                    y
                                        ? (V.pinOrUnpin = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweetId: n, unpin: o }) => ({
                                              confirmation: { text: sn, headline: rn, label: an },
                                              testID: G,
                                              text: on,
                                              onClick: () => {
                                                  o(n).then(
                                                      () => {
                                                          e({ text: ln });
                                                      },
                                                      t({ showToast: !0 }),
                                                  ),
                                                      i({ element: "unpin" });
                                              },
                                              Icon: Lt.default,
                                          }))({ ...Q, tweetId: I.id_str, unpin: p }))
                                        : this._shouldDisable(I, N.d.PinToProfile) || (V.pinOrUnpin = this._getHighlightUpsellOnPinAction());
                                    const t = this._getHighlightOrUndoAction();
                                    t && (V.highlightOrUndo = t),
                                        this._shouldIncludeTweetAppealOption() && (V.appealTweetWarning = Mi({ analytics: _, history: C, isAppealTweetWarning: !0, promotedContent: D, scribeAction: K, tweet: I, featureSwitches: R, reporterCountry: x, reporterLanguage: P })),
                                        B && !this._shouldDisable(I, N.d.MuteConversation) && (V.muteOrUnmuteConversation = wi({ ...Q, addFlag: m, muteTweet: c, shouldShowMuteEducationTip: k, tweet: I, unmuteTweet: h })),
                                        U &&
                                            !this._shouldDisable(I, N.d.ConversationControls) &&
                                            (V.changeConversationControls = (({ onChangeConversationControls: e, tweet: t }) => {
                                                const i = !!t.exclusivity_info,
                                                    n = !!t.premium_info,
                                                    o = i || n;
                                                return { disabled: o, onClick: o ? void 0 : e, subText: i ? we : n ? fe : void 0, text: _e, Icon: be.default };
                                            })({ tweet: I, onChangeConversationControls: e })),
                                        this._shouldDisable(I, N.d.Delete) ||
                                            (V.delete = (({ addToast: e, createLocalApiErrorHandler: t, deleteTweet: i, featureSwitches: n, onDeleteTweet: s, scribeAction: a, tweet: c, userClaims: d }) => {
                                                const u = (d.isTrueAndEnabled("subscriptions_feature_labs_1004") || n.isTrue("responsive_web_edit_tweet_enabled")) && n.isTrue("responsive_web_edit_tweet_composition_enabled"),
                                                    h = n.isTrue("subscriptions_feature_labs_1004") || n.isTrue("responsive_web_edit_tweet_enabled"),
                                                    p = n.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                                    m = l.Z.postEntityName;
                                                return {
                                                    confirmation: { label: Ae, headline: Ce({ entity: m }), text: l.Z.getOriginalTweet(c).isEdited && (u || h) ? Se({ entity: m }) : p && l.Z.isArticlePost(c) ? o.createElement(o.Fragment, null, ye, o.createElement(r.Z, { style: Ee.additionalInfo }, De)) : ye, confirmButtonType: "destructiveFilled" },
                                                    isEmphasized: !0,
                                                    text: Ae,
                                                    onClick: () => {
                                                        i(c.id_str).then(
                                                            () => {
                                                                e({ text: ve({ entity: m }) });
                                                            },
                                                            t({ defaultToast: { text: Te({ entity: m }) }, showToast: !0 }),
                                                        ),
                                                            a({ element: "delete" }),
                                                            s && s(c.id_str);
                                                    },
                                                    Icon: ge.default,
                                                };
                                            })({ ...Q, deleteTweet: i, onDeleteTweet: v, tweet: I, featureSwitches: R, userClaims: O }));
                                } else
                                    T && j && (V.promotedTweetDismiss = Ei({ onTweetDismiss: T, hasPremiumPlus: this._hasPremiumPlus, promotedDismissUpsellEnabled: this.context.featureSwitches.isTrue("subscriptions_hide_ad_upsell_enabled"), history: C })),
                                        M.blocking ||
                                            this._shouldDisable(I, N.d.Follow) ||
                                            ((V.followOrUnfollow = M.following
                                                ? (({ addToast: e, createLocalApiErrorHandler: t, promotedContent: i, scribeAction: n, unfollow: o, user: r }) => ({
                                                      text: Yi({ screenName: r.screen_name }),
                                                      onClick: () => {
                                                          o(r.id_str, { promotedContent: i }).then((t) => {
                                                              e({ text: Ji({ screenName: r.screen_name }) });
                                                          }, t(Qi.X)),
                                                              n({ element: "unfollow" }),
                                                              n({ action: "unfollow", element: "tweet_curation_action_menu" });
                                                      },
                                                      Icon: Ki.default,
                                                  }))({ ...Q, unfollow: this.props.unfollow, promotedContent: D, user: M })
                                                : (({ addToast: e, createLocalApiErrorHandler: t, follow: i, promotedContent: n, scribeAction: o, user: r }) => ({
                                                      text: Ge({ screenName: r.screen_name }),
                                                      onClick: () => {
                                                          i(r.id_str, { promotedContent: n }).then(
                                                              () => {
                                                                  o({ element: "follow" }), o({ action: "follow", element: "tweet_curation_action_menu" }), r.protected ? e({ text: Xe({ screenName: r.screen_name }) }) : e({ text: Ke({ screenName: r.screen_name }) });
                                                              },
                                                              t({ ...Ve.H, showToast: !0 }),
                                                          ),
                                                              o({ element: "follow_attempt" });
                                                      },
                                                      Icon: ze.default,
                                                  }))({ ...Q, follow: n, promotedContent: D, user: M })),
                                            R.allTrue(["super_follow_android_web_subscription_enabled", "creator_subscriptions_subscribe_action_tweet_menu_enabled"]) &&
                                                M.super_follow_eligible &&
                                                !M.super_following &&
                                                (V.subscribe = (({ history: e, scribeAction: t, user: i }) => ({
                                                    text: Xi({ followType: Gi, screenName: `@${i.screen_name}` }),
                                                    onClick: () => {
                                                        e.push(`/${i.screen_name}/creator-subscriptions/subscribe`, { referring_page: "profile_action_menu" }), t({ element: "subscribe" });
                                                    },
                                                    Icon: Vi.default,
                                                    testID: te,
                                                }))({ scribeAction: K, history: C, user: M })),
                                            (V.muteOrUnmute = this._getMuteOrUnmuteAction())),
                                        B && (V.muteOrUnmuteConversation = wi({ ...Q, addFlag: m, muteTweet: c, shouldShowMuteEducationTip: k, tweet: I, unmuteTweet: h })),
                                        Z && (V.hideReply = pt({ ...Q, addFlag: m, hideReply: s, isSoftBlockEnabled: R.isTrue("xprofile_blocked_by_view_enabled"), onBlock: this._handleBlock, onTweetDismiss: T, shouldShowHideReplyTip: E, tweet: I })),
                                        L &&
                                            (V.unhideReply = (({ addToast: e, createLocalApiErrorHandler: t, scribeAction: i, tweet: n, unhideReply: o }) => ({
                                                text: tn,
                                                onClick: () => {
                                                    o(n.id_str, { conversation_id: n.conversation_id_str }).then(
                                                        (t) => {
                                                            e({ ariaOnly: !0, text: nn });
                                                        },
                                                        t({ showToast: !0 }),
                                                    ),
                                                        i({ element: "unmoderate_reply" });
                                                },
                                                Icon: en.default,
                                            }))({ ...Q, tweet: I, unhideReply: this.props.unhideReply })),
                                        (V.blockOrUnblock = (0, S.op)({ blockAction: this._handleBlock, isSoftBlockEnabled: R.isTrue("xprofile_blocked_by_view_enabled"), source: S.SC.TWEET_CARET, testID: z, unblockAction: this._handleUnblock, user: M }));
                            F && !Y && !I.isPreviewDisplay
                                ? (V.report = Mi({ analytics: _, history: C, promotedContent: D, scribeAction: K, tweet: I, featureSwitches: R, reporterCountry: x, reporterLanguage: P }))
                                : !F &&
                                  x &&
                                  (function (e) {
                                      return "DE" === e.toUpperCase();
                                  })(x) &&
                                  ((V.report = (function (e) {
                                      const t = e.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                                          i = l.Z.getLocalizedEntityName({ tweet: e.tweet, articlesEnabled: t });
                                      return {
                                          Icon: Oi.default,
                                          link: (0, Qe.ju)("https://help.x.com/forms"),
                                          onClick: () => {
                                              e.scribeAction({ element: "report_tweet" });
                                          },
                                          testID: X,
                                          text: e.promotedContent ? Ni.reportAd : Ni.reportTweet({ entity: i }),
                                      };
                                  })({ promotedContent: D, scribeAction: K, tweet: I, featureSwitches: R })),
                                  R.isTrue("netzdg_in_loggedout_posts_enabled") && (V.reportNetzDG = ji.t({ tweet: I })));
                            const ee = R.getStringValue("dsa_report_illegal_content_url");
                            return (
                                !Y &&
                                    R.isTrue("dsa_report_flow_enabled") &&
                                    ee &&
                                    (V.reportEUIllegalContentDSA = (function (e) {
                                        const t = (0, $i.MS)(e.reportUrl),
                                            { origin: i } = Wi.ZP.get(),
                                            { id_str: n, permalink: o, user: r } = e.tweet,
                                            s = e.promotedContent ? "ad" : "post";
                                        return (
                                            t.searchParams.set("content_id", o ? `${i}${o}` : n),
                                            t.searchParams.set("content_type", s),
                                            r?.screen_name && t.searchParams.set("content_author", `@${r?.screen_name}`),
                                            {
                                                Icon: Oi.default,
                                                link: t.href,
                                                onClick: () => {
                                                    e.scribeAction({ element: `report_eu_illegal_content_${s}` });
                                                },
                                                text: $i.yh,
                                                testID: oe,
                                            }
                                        );
                                    })({ tweet: I, promotedContent: D, scribeAction: K, reportUrl: ee })),
                                t &&
                                    C.location.pathname.match(Pn) &&
                                    (V.downloadVideo = (({ downloadVideoLink: e, scribeAction: t }) => ({
                                        text: Ie,
                                        onClick: () => {
                                            t({ element: "download-video" });
                                        },
                                        link: e,
                                        Icon: ke.default,
                                        testID: te,
                                    }))({ downloadVideoLink: t, scribeAction: K })),
                                Hn.forEach((e) => {
                                    if ("feedbackOptions" !== e || I.isStaleEdit) V[e] && $.push(V[e]);
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
                                [, i] = this._getActionItems(_.Z),
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
                            const { addToast: e, block: t, createLocalApiErrorHandler: i, dismissUserFromConversation: n, history: o, promotedContent: r, tweet: s } = this.props;
                            t(s.user.id_str, { promotedContent: r }).then(() => {
                                n({ userId: s.user.id_str, feedbackKeys: ["UnfollowEntity"] }), e({ action: { label: Ln.unblock, onAction: this._handleUnblock }, text: Ln.blockedSuccess });
                                const t = !!s.promoted_content?.impression_id;
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
                            n(i.user.id_str, { promotedContent: t }).catch(e(D.D)), this._scribeAction({ element: "unblock" }), this._scribeAction({ action: "unblock", element: "tweet_curation_action_menu" });
                        }),
                        (this._handleImmediateDismissClick = () => {
                            const e = this._getLeaveBehindMenuActions();
                            this.props.setLeaveBehindActionItems?.(e), this._onMenuClick();
                        }),
                        (this._scribeAction = ({ action: e, additionalData: t, element: i }) => {
                            const { analytics: n, promotedContent: o, tweet: r } = this.props,
                                s = n.contextualScribeData;
                            let a = s?.items ? s : { ...(s || {}), items: [k.Z.getTweetItem(r, o)] };
                            return t && (a = { ...a, ...t }), n.scribe({ element: i, action: e || "click", data: a });
                        });
                }
                render() {
                    const { isActiveCreator: e, isDisabled: t, isForPreroll: i, menuControlProps: s, tweet: a, withChangeConversationControlsTooltip: l, withImmediateDismiss: h } = this.props,
                        p = a.conversation_control?.policy || g.k.all;
                    return i
                        ? o.createElement(c.ZP, { icon: o.createElement(b.default, { style: { height: "18px" } }), renderMenu: (e) => o.createElement(d.Z, { items: this._getPrerollActionItems(), onCloseRequested: e, shouldCloseOnClick: !0 }), size: "smallCompact", style: Zn.prerollDismissButton, type: "onMediaDominantColorFilled" })
                        : h
                          ? o.createElement(r.Z, { style: Zn.dismissButton }, o.createElement(C.Z, { onClick: this._handleImmediateDismissClick }))
                          : o.createElement(
                                r.Z,
                                { style: Zn.overflowMenu },
                                l ? o.createElement(M, null) : null,
                                o.createElement(w.Z, { controlled: !0, disallowedReplyControls: [], isActiveCreator: e, midConversationTweet: a, onChange: this._handleOnChangeConversationControls, setDisallowedReplyControls: () => {}, value: p }, ({ openPopover: e }) => o.createElement(u.Z, (0, n.Z)({}, s, { isDisabled: t, onClick: this._onMenuClick, renderActionMenu: this._renderCurationActionMenu(e), testID: $.Z.caret }))),
                                l ? o.createElement(M, null) : null,
                                this._renderEditWithPremiumUpsell(),
                            );
                }
                _getCommunityActions() {
                    const e = {},
                        { tweet: t } = this.props,
                        { community_id_str: i, id_str: n } = t,
                        { viewerUserId: r } = this.context;
                    if (!i || !r) return e;
                    const {
                            analytics: { contextualScribeNamespace: s },
                            community: a,
                            disableRemoveFromCommunity: l,
                            withCommunityModerationAuthority: c,
                        } = this.props,
                        { community_relationship: d, user: u } = t,
                        h = !l && c;
                    if ((u.id_str !== r && h && (this._shouldDisable(t, N.d.HideCommunityTweet) || (e.hideTweet = ((e, t) => ({ text: _t, Icon: mt.default, link: { pathname: `/i/report/${bt.C2.HideCommunityTweet}/${e}`, state: { scribeNamespace: t } } }))(n, { ...s, element: "hide_tweet" })), this._shouldDisable(t, N.d.RemoveFromCommunity) || (e.removeCommunityMember = ((e, t, i) => ({ text: Pi, Icon: xi.default, link: { pathname: `/i/report/${bt.C2.RemoveCommunityMember}/${e.id_str}?community_id=${t}`, state: { scribeNamespace: i } } }))(u, i, { ...s, element: "remove_community_member" }))), this._shouldDisable(t, N.d.SearchUsersPost) || (e.searchUsersPost = ((e, t, i) => ({ text: zi({ screenName: e.screen_name }), Icon: qi.default, link: { pathname: `/i/communities/${t}/search/?q=(from:${e.screen_name})`, state: { scribeNamespace: i } } }))(u, i, { ...s, element: "search_users_post" })), E.X7.includes(d?.actions.pin_action_result.__typename) && !this._shouldDisable(t, N.d.PinCommunityTweet))) {
                        const t = "CommunityTweetPinActionReplace" === a?.actions?.pin_action_result?.__typename;
                        e.pinCommunityTweet = ((e, t, i) => ({ text: vi, Icon: Lt.default, onClick() {}, confirmation: { render: (n, r) => o.createElement(Ti, { communityId: t, isReplacing: i, onCancel: r, onConfirm: n, tweetId: e }) } }))(n, i, t);
                    }
                    return E.Gd.includes(d?.actions.unpin_action_result.__typename) && !this._shouldDisable(t, N.d.UnpinCommunityTweet) && (e.unpinCommunityTweet = ((e, t) => ({ text: dn, Icon: cn.default, onClick() {}, confirmation: { render: (i, n) => o.createElement(un, { communityId: t, onCancel: n, onConfirm: i, tweetId: e }) } }))(n, i)), e;
                }
                _shouldIncludeTweetAppealOption() {
                    const { forwardPivotDisplayType: e, isNsfwUser: t, tweet: i, userCountry: n, userLanguage: o } = this.props,
                        { featureSwitches: r, viewerUserId: s } = this.context;
                    return (0, I.rT)({ viewerUserId: s, featureSwitches: r, forwardPivotDisplayType: e, tweet: i, userCountry: n, userLanguage: o }) || (0, I.V4)({ viewerUserId: s, featureSwitches: r, isNsfwUser: t, tweet: i, userCountry: n, userLanguage: o });
                }
            }
            (Un.defaultProps = { withRemoveFromBookmarks: !1 }), (Un.contextType = U.rC);
            const Zn = h.default.create((e) => ({ overflowMenu: { display: "flex", flexDirection: "row", alignItems: "center" }, dismissButton: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space8 }, prerollDismissButton: { width: "2rem", height: "1rem", backgroundColor: "rgba(0,0,0,.5)", borderRadius: "4px" } })),
                Bn = (0, x.ZP)(xn(Un)),
                Ln = { unblock: m().e133be4e, blockedSuccess: m().a9fd20be },
                Hn = ["searchUsersPost", "hideTweet", "removeCommunityMember", "delete", "edit", "appealTweetWarning", "pinOrUnpin", "highlightOrUndo", "promotedTweetDismiss", "adInfo", "removeTag", "feedbackOptions", "followOrUnfollow", "subscribe", "addOrRemoveFromList", "muteOrUnmute", "muteOrUnmuteConversation", "leaveConversation", "changeConversationControls", "blockOrUnblock", "viewTweetEngagements", "downloadVideo", "hideReply", "unhideReply", "embed", "report", "reportNetzDG", "reportEUIllegalContentDSA", "analytics", "relatedPosts", "viewHiddenReplies", "birdwatch", "birdwatchRequest", "pinCommunityTweet", "unpinCommunityTweet"],
                Rn = ["feedbackOptions", "followOrUnfollow", "muteOrUnmute", "blockOrUnblock", "report", "reportEUIllegalContentDSA"];
            const On = Object.freeze({ all: "change_conversation_control_to_everyone", community: "change_conversation_control_to_community", by_invitation: "change_conversation_control_to_mentioned", followers: "change_conversation_control_to_followers", subscribers: "change_conversation_control_to_subscribers", community_members: "community_members", community_hidden_tweet: "community_hidden_tweet", super_followers_exclusive: "super_followers_exclusive", community_tweet_member_removed: "community_tweet_member_removed", trusted_friends_tweet: "trusted_friends_tweet", verified: "change_conversation_control_to_verified", premium: "change_conversation_control_to_premium" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu-e019dbda.300f5c7a.js.map
